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
var append_BANG___2 = (function (parent,child){var G__97870 = dommy.template.__GT_node_like.call(null,parent);G__97870.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__97870;
});
var append_BANG___3 = (function() { 
var G__97875__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__97871_97876 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__97872_97877 = null;var count__97873_97878 = 0;var i__97874_97879 = 0;while(true){
if((i__97874_97879 < count__97873_97878))
{var c_97880 = cljs.core._nth.call(null,chunk__97872_97877,i__97874_97879);append_BANG_.call(null,parent__$1,c_97880);
{
var G__97881 = seq__97871_97876;
var G__97882 = chunk__97872_97877;
var G__97883 = count__97873_97878;
var G__97884 = (i__97874_97879 + 1);
seq__97871_97876 = G__97881;
chunk__97872_97877 = G__97882;
count__97873_97878 = G__97883;
i__97874_97879 = G__97884;
continue;
}
} else
{var temp__4092__auto___97885 = cljs.core.seq.call(null,seq__97871_97876);if(temp__4092__auto___97885)
{var seq__97871_97886__$1 = temp__4092__auto___97885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97871_97886__$1))
{var c__8552__auto___97887 = cljs.core.chunk_first.call(null,seq__97871_97886__$1);{
var G__97888 = cljs.core.chunk_rest.call(null,seq__97871_97886__$1);
var G__97889 = c__8552__auto___97887;
var G__97890 = cljs.core.count.call(null,c__8552__auto___97887);
var G__97891 = 0;
seq__97871_97876 = G__97888;
chunk__97872_97877 = G__97889;
count__97873_97878 = G__97890;
i__97874_97879 = G__97891;
continue;
}
} else
{var c_97892 = cljs.core.first.call(null,seq__97871_97886__$1);append_BANG_.call(null,parent__$1,c_97892);
{
var G__97893 = cljs.core.next.call(null,seq__97871_97886__$1);
var G__97894 = null;
var G__97895 = 0;
var G__97896 = 0;
seq__97871_97876 = G__97893;
chunk__97872_97877 = G__97894;
count__97873_97878 = G__97895;
i__97874_97879 = G__97896;
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
var G__97875 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__97875__delegate.call(this,parent,child,more_children);};
G__97875.cljs$lang$maxFixedArity = 2;
G__97875.cljs$lang$applyTo = (function (arglist__97897){
var parent = cljs.core.first(arglist__97897);
arglist__97897 = cljs.core.next(arglist__97897);
var child = cljs.core.first(arglist__97897);
var more_children = cljs.core.rest(arglist__97897);
return G__97875__delegate(parent,child,more_children);
});
G__97875.cljs$core$IFn$_invoke$arity$variadic = G__97875__delegate;
return G__97875;
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
var G__97906__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__97902_97907 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__97903_97908 = null;var count__97904_97909 = 0;var i__97905_97910 = 0;while(true){
if((i__97905_97910 < count__97904_97909))
{var c_97911 = cljs.core._nth.call(null,chunk__97903_97908,i__97905_97910);prepend_BANG_.call(null,parent__$1,c_97911);
{
var G__97912 = seq__97902_97907;
var G__97913 = chunk__97903_97908;
var G__97914 = count__97904_97909;
var G__97915 = (i__97905_97910 + 1);
seq__97902_97907 = G__97912;
chunk__97903_97908 = G__97913;
count__97904_97909 = G__97914;
i__97905_97910 = G__97915;
continue;
}
} else
{var temp__4092__auto___97916 = cljs.core.seq.call(null,seq__97902_97907);if(temp__4092__auto___97916)
{var seq__97902_97917__$1 = temp__4092__auto___97916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97902_97917__$1))
{var c__8552__auto___97918 = cljs.core.chunk_first.call(null,seq__97902_97917__$1);{
var G__97919 = cljs.core.chunk_rest.call(null,seq__97902_97917__$1);
var G__97920 = c__8552__auto___97918;
var G__97921 = cljs.core.count.call(null,c__8552__auto___97918);
var G__97922 = 0;
seq__97902_97907 = G__97919;
chunk__97903_97908 = G__97920;
count__97904_97909 = G__97921;
i__97905_97910 = G__97922;
continue;
}
} else
{var c_97923 = cljs.core.first.call(null,seq__97902_97917__$1);prepend_BANG_.call(null,parent__$1,c_97923);
{
var G__97924 = cljs.core.next.call(null,seq__97902_97917__$1);
var G__97925 = null;
var G__97926 = 0;
var G__97927 = 0;
seq__97902_97907 = G__97924;
chunk__97903_97908 = G__97925;
count__97904_97909 = G__97926;
i__97905_97910 = G__97927;
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
var G__97906 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__97906__delegate.call(this,parent,child,more_children);};
G__97906.cljs$lang$maxFixedArity = 2;
G__97906.cljs$lang$applyTo = (function (arglist__97928){
var parent = cljs.core.first(arglist__97928);
arglist__97928 = cljs.core.next(arglist__97928);
var child = cljs.core.first(arglist__97928);
var more_children = cljs.core.rest(arglist__97928);
return G__97906__delegate(parent,child,more_children);
});
G__97906.cljs$core$IFn$_invoke$arity$variadic = G__97906__delegate;
return G__97906;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___97929 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___97929))
{var next_97930 = temp__4090__auto___97929;parent.insertBefore(actual_node,next_97930);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__97932 = dommy.template.__GT_node_like.call(null,parent);G__97932.innerHTML = "";
dommy.core.append_BANG_.call(null,G__97932,node_like);
return G__97932;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__97934 = elem__$1.parentNode;G__97934.removeChild(elem__$1);
return G__97934;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__97940){var vec__97941 = p__97940;var k = cljs.core.nth.call(null,vec__97941,0,null);var v = cljs.core.nth.call(null,vec__97941,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t97942 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t97942 = (function (v,k,vec__97941,p__97940,container,key_selectors_map,template,selector_map,meta97943){
this.v = v;
this.k = k;
this.vec__97941 = vec__97941;
this.p__97940 = p__97940;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta97943 = meta97943;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t97942.cljs$lang$type = true;
dommy.core.t97942.cljs$lang$ctorStr = "dommy.core/t97942";
dommy.core.t97942.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"dommy.core/t97942");
});
dommy.core.t97942.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t97942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97944){var self__ = this;
var _97944__$1 = this;return self__.meta97943;
});
dommy.core.t97942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97944,meta97943__$1){var self__ = this;
var _97944__$1 = this;return (new dommy.core.t97942(self__.v,self__.k,self__.vec__97941,self__.p__97940,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta97943__$1));
});
dommy.core.__GT_t97942 = (function __GT_t97942(v__$1,k__$1,vec__97941__$1,p__97940__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta97943){return (new dommy.core.t97942(v__$1,k__$1,vec__97941__$1,p__97940__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta97943));
});
}
return (new dommy.core.t97942(v,k,vec__97941,p__97940,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__97945_SHARP_){return p1__97945_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__97946_SHARP_){return !((p1__97946_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__97947){var vec__97948 = p__97947;var special_mouse_event = cljs.core.nth.call(null,vec__97948,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__97948,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7828__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7828__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__97949){
var elem = cljs.core.first(arglist__97949);
arglist__97949 = cljs.core.next(arglist__97949);
var f = cljs.core.first(arglist__97949);
var args = cljs.core.rest(arglist__97949);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__97950_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__97950_SHARP_));
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
var vec__97974_97997 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_97998 = cljs.core.nth.call(null,vec__97974_97997,0,null);var selector_97999 = cljs.core.nth.call(null,vec__97974_97997,1,null);var seq__97975_98000 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__97982_98001 = null;var count__97983_98002 = 0;var i__97984_98003 = 0;while(true){
if((i__97984_98003 < count__97983_98002))
{var vec__97991_98004 = cljs.core._nth.call(null,chunk__97982_98001,i__97984_98003);var orig_type_98005 = cljs.core.nth.call(null,vec__97991_98004,0,null);var f_98006 = cljs.core.nth.call(null,vec__97991_98004,1,null);var seq__97985_98007 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_98005,new cljs.core.PersistentArrayMap.fromArray([orig_type_98005,cljs.core.identity], true, false)));var chunk__97987_98008 = null;var count__97988_98009 = 0;var i__97989_98010 = 0;while(true){
if((i__97989_98010 < count__97988_98009))
{var vec__97992_98011 = cljs.core._nth.call(null,chunk__97987_98008,i__97989_98010);var actual_type_98012 = cljs.core.nth.call(null,vec__97992_98011,0,null);var factory_98013 = cljs.core.nth.call(null,vec__97992_98011,1,null);var canonical_f_98014 = (cljs.core.truth_(selector_97999)?cljs.core.partial.call(null,dommy.core.live_listener,elem_97998,selector_97999):cljs.core.identity).call(null,factory_98013.call(null,f_98006));dommy.core.update_event_listeners_BANG_.call(null,elem_97998,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_97999,actual_type_98012,f_98006], null),canonical_f_98014);
if(cljs.core.truth_(elem_97998.addEventListener))
{elem_97998.addEventListener(cljs.core.name.call(null,actual_type_98012),canonical_f_98014);
} else
{elem_97998.attachEvent(cljs.core.name.call(null,actual_type_98012),canonical_f_98014);
}
{
var G__98015 = seq__97985_98007;
var G__98016 = chunk__97987_98008;
var G__98017 = count__97988_98009;
var G__98018 = (i__97989_98010 + 1);
seq__97985_98007 = G__98015;
chunk__97987_98008 = G__98016;
count__97988_98009 = G__98017;
i__97989_98010 = G__98018;
continue;
}
} else
{var temp__4092__auto___98019 = cljs.core.seq.call(null,seq__97985_98007);if(temp__4092__auto___98019)
{var seq__97985_98020__$1 = temp__4092__auto___98019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97985_98020__$1))
{var c__8552__auto___98021 = cljs.core.chunk_first.call(null,seq__97985_98020__$1);{
var G__98022 = cljs.core.chunk_rest.call(null,seq__97985_98020__$1);
var G__98023 = c__8552__auto___98021;
var G__98024 = cljs.core.count.call(null,c__8552__auto___98021);
var G__98025 = 0;
seq__97985_98007 = G__98022;
chunk__97987_98008 = G__98023;
count__97988_98009 = G__98024;
i__97989_98010 = G__98025;
continue;
}
} else
{var vec__97993_98026 = cljs.core.first.call(null,seq__97985_98020__$1);var actual_type_98027 = cljs.core.nth.call(null,vec__97993_98026,0,null);var factory_98028 = cljs.core.nth.call(null,vec__97993_98026,1,null);var canonical_f_98029 = (cljs.core.truth_(selector_97999)?cljs.core.partial.call(null,dommy.core.live_listener,elem_97998,selector_97999):cljs.core.identity).call(null,factory_98028.call(null,f_98006));dommy.core.update_event_listeners_BANG_.call(null,elem_97998,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_97999,actual_type_98027,f_98006], null),canonical_f_98029);
if(cljs.core.truth_(elem_97998.addEventListener))
{elem_97998.addEventListener(cljs.core.name.call(null,actual_type_98027),canonical_f_98029);
} else
{elem_97998.attachEvent(cljs.core.name.call(null,actual_type_98027),canonical_f_98029);
}
{
var G__98030 = cljs.core.next.call(null,seq__97985_98020__$1);
var G__98031 = null;
var G__98032 = 0;
var G__98033 = 0;
seq__97985_98007 = G__98030;
chunk__97987_98008 = G__98031;
count__97988_98009 = G__98032;
i__97989_98010 = G__98033;
continue;
}
}
} else
{}
}
break;
}
{
var G__98034 = seq__97975_98000;
var G__98035 = chunk__97982_98001;
var G__98036 = count__97983_98002;
var G__98037 = (i__97984_98003 + 1);
seq__97975_98000 = G__98034;
chunk__97982_98001 = G__98035;
count__97983_98002 = G__98036;
i__97984_98003 = G__98037;
continue;
}
} else
{var temp__4092__auto___98038 = cljs.core.seq.call(null,seq__97975_98000);if(temp__4092__auto___98038)
{var seq__97975_98039__$1 = temp__4092__auto___98038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97975_98039__$1))
{var c__8552__auto___98040 = cljs.core.chunk_first.call(null,seq__97975_98039__$1);{
var G__98041 = cljs.core.chunk_rest.call(null,seq__97975_98039__$1);
var G__98042 = c__8552__auto___98040;
var G__98043 = cljs.core.count.call(null,c__8552__auto___98040);
var G__98044 = 0;
seq__97975_98000 = G__98041;
chunk__97982_98001 = G__98042;
count__97983_98002 = G__98043;
i__97984_98003 = G__98044;
continue;
}
} else
{var vec__97994_98045 = cljs.core.first.call(null,seq__97975_98039__$1);var orig_type_98046 = cljs.core.nth.call(null,vec__97994_98045,0,null);var f_98047 = cljs.core.nth.call(null,vec__97994_98045,1,null);var seq__97976_98048 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_98046,new cljs.core.PersistentArrayMap.fromArray([orig_type_98046,cljs.core.identity], true, false)));var chunk__97978_98049 = null;var count__97979_98050 = 0;var i__97980_98051 = 0;while(true){
if((i__97980_98051 < count__97979_98050))
{var vec__97995_98052 = cljs.core._nth.call(null,chunk__97978_98049,i__97980_98051);var actual_type_98053 = cljs.core.nth.call(null,vec__97995_98052,0,null);var factory_98054 = cljs.core.nth.call(null,vec__97995_98052,1,null);var canonical_f_98055 = (cljs.core.truth_(selector_97999)?cljs.core.partial.call(null,dommy.core.live_listener,elem_97998,selector_97999):cljs.core.identity).call(null,factory_98054.call(null,f_98047));dommy.core.update_event_listeners_BANG_.call(null,elem_97998,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_97999,actual_type_98053,f_98047], null),canonical_f_98055);
if(cljs.core.truth_(elem_97998.addEventListener))
{elem_97998.addEventListener(cljs.core.name.call(null,actual_type_98053),canonical_f_98055);
} else
{elem_97998.attachEvent(cljs.core.name.call(null,actual_type_98053),canonical_f_98055);
}
{
var G__98056 = seq__97976_98048;
var G__98057 = chunk__97978_98049;
var G__98058 = count__97979_98050;
var G__98059 = (i__97980_98051 + 1);
seq__97976_98048 = G__98056;
chunk__97978_98049 = G__98057;
count__97979_98050 = G__98058;
i__97980_98051 = G__98059;
continue;
}
} else
{var temp__4092__auto___98060__$1 = cljs.core.seq.call(null,seq__97976_98048);if(temp__4092__auto___98060__$1)
{var seq__97976_98061__$1 = temp__4092__auto___98060__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__97976_98061__$1))
{var c__8552__auto___98062 = cljs.core.chunk_first.call(null,seq__97976_98061__$1);{
var G__98063 = cljs.core.chunk_rest.call(null,seq__97976_98061__$1);
var G__98064 = c__8552__auto___98062;
var G__98065 = cljs.core.count.call(null,c__8552__auto___98062);
var G__98066 = 0;
seq__97976_98048 = G__98063;
chunk__97978_98049 = G__98064;
count__97979_98050 = G__98065;
i__97980_98051 = G__98066;
continue;
}
} else
{var vec__97996_98067 = cljs.core.first.call(null,seq__97976_98061__$1);var actual_type_98068 = cljs.core.nth.call(null,vec__97996_98067,0,null);var factory_98069 = cljs.core.nth.call(null,vec__97996_98067,1,null);var canonical_f_98070 = (cljs.core.truth_(selector_97999)?cljs.core.partial.call(null,dommy.core.live_listener,elem_97998,selector_97999):cljs.core.identity).call(null,factory_98069.call(null,f_98047));dommy.core.update_event_listeners_BANG_.call(null,elem_97998,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_97999,actual_type_98068,f_98047], null),canonical_f_98070);
if(cljs.core.truth_(elem_97998.addEventListener))
{elem_97998.addEventListener(cljs.core.name.call(null,actual_type_98068),canonical_f_98070);
} else
{elem_97998.attachEvent(cljs.core.name.call(null,actual_type_98068),canonical_f_98070);
}
{
var G__98071 = cljs.core.next.call(null,seq__97976_98061__$1);
var G__98072 = null;
var G__98073 = 0;
var G__98074 = 0;
seq__97976_98048 = G__98071;
chunk__97978_98049 = G__98072;
count__97979_98050 = G__98073;
i__97980_98051 = G__98074;
continue;
}
}
} else
{}
}
break;
}
{
var G__98075 = cljs.core.next.call(null,seq__97975_98039__$1);
var G__98076 = null;
var G__98077 = 0;
var G__98078 = 0;
seq__97975_98000 = G__98075;
chunk__97982_98001 = G__98076;
count__97983_98002 = G__98077;
i__97984_98003 = G__98078;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__98079){
var elem_sel = cljs.core.first(arglist__98079);
var type_fs = cljs.core.rest(arglist__98079);
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
var vec__98103_98126 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_98127 = cljs.core.nth.call(null,vec__98103_98126,0,null);var selector_98128 = cljs.core.nth.call(null,vec__98103_98126,1,null);var seq__98104_98129 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__98111_98130 = null;var count__98112_98131 = 0;var i__98113_98132 = 0;while(true){
if((i__98113_98132 < count__98112_98131))
{var vec__98120_98133 = cljs.core._nth.call(null,chunk__98111_98130,i__98113_98132);var orig_type_98134 = cljs.core.nth.call(null,vec__98120_98133,0,null);var f_98135 = cljs.core.nth.call(null,vec__98120_98133,1,null);var seq__98114_98136 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_98134,new cljs.core.PersistentArrayMap.fromArray([orig_type_98134,cljs.core.identity], true, false)));var chunk__98116_98137 = null;var count__98117_98138 = 0;var i__98118_98139 = 0;while(true){
if((i__98118_98139 < count__98117_98138))
{var vec__98121_98140 = cljs.core._nth.call(null,chunk__98116_98137,i__98118_98139);var actual_type_98141 = cljs.core.nth.call(null,vec__98121_98140,0,null);var __98142 = cljs.core.nth.call(null,vec__98121_98140,1,null);var keys_98143 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_98128,actual_type_98141,f_98135], null);var canonical_f_98144 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_98127),keys_98143);dommy.core.update_event_listeners_BANG_.call(null,elem_98127,dommy.utils.dissoc_in,keys_98143);
if(cljs.core.truth_(elem_98127.removeEventListener))
{elem_98127.removeEventListener(cljs.core.name.call(null,actual_type_98141),canonical_f_98144);
} else
{elem_98127.detachEvent(cljs.core.name.call(null,actual_type_98141),canonical_f_98144);
}
{
var G__98145 = seq__98114_98136;
var G__98146 = chunk__98116_98137;
var G__98147 = count__98117_98138;
var G__98148 = (i__98118_98139 + 1);
seq__98114_98136 = G__98145;
chunk__98116_98137 = G__98146;
count__98117_98138 = G__98147;
i__98118_98139 = G__98148;
continue;
}
} else
{var temp__4092__auto___98149 = cljs.core.seq.call(null,seq__98114_98136);if(temp__4092__auto___98149)
{var seq__98114_98150__$1 = temp__4092__auto___98149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98114_98150__$1))
{var c__8552__auto___98151 = cljs.core.chunk_first.call(null,seq__98114_98150__$1);{
var G__98152 = cljs.core.chunk_rest.call(null,seq__98114_98150__$1);
var G__98153 = c__8552__auto___98151;
var G__98154 = cljs.core.count.call(null,c__8552__auto___98151);
var G__98155 = 0;
seq__98114_98136 = G__98152;
chunk__98116_98137 = G__98153;
count__98117_98138 = G__98154;
i__98118_98139 = G__98155;
continue;
}
} else
{var vec__98122_98156 = cljs.core.first.call(null,seq__98114_98150__$1);var actual_type_98157 = cljs.core.nth.call(null,vec__98122_98156,0,null);var __98158 = cljs.core.nth.call(null,vec__98122_98156,1,null);var keys_98159 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_98128,actual_type_98157,f_98135], null);var canonical_f_98160 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_98127),keys_98159);dommy.core.update_event_listeners_BANG_.call(null,elem_98127,dommy.utils.dissoc_in,keys_98159);
if(cljs.core.truth_(elem_98127.removeEventListener))
{elem_98127.removeEventListener(cljs.core.name.call(null,actual_type_98157),canonical_f_98160);
} else
{elem_98127.detachEvent(cljs.core.name.call(null,actual_type_98157),canonical_f_98160);
}
{
var G__98161 = cljs.core.next.call(null,seq__98114_98150__$1);
var G__98162 = null;
var G__98163 = 0;
var G__98164 = 0;
seq__98114_98136 = G__98161;
chunk__98116_98137 = G__98162;
count__98117_98138 = G__98163;
i__98118_98139 = G__98164;
continue;
}
}
} else
{}
}
break;
}
{
var G__98165 = seq__98104_98129;
var G__98166 = chunk__98111_98130;
var G__98167 = count__98112_98131;
var G__98168 = (i__98113_98132 + 1);
seq__98104_98129 = G__98165;
chunk__98111_98130 = G__98166;
count__98112_98131 = G__98167;
i__98113_98132 = G__98168;
continue;
}
} else
{var temp__4092__auto___98169 = cljs.core.seq.call(null,seq__98104_98129);if(temp__4092__auto___98169)
{var seq__98104_98170__$1 = temp__4092__auto___98169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98104_98170__$1))
{var c__8552__auto___98171 = cljs.core.chunk_first.call(null,seq__98104_98170__$1);{
var G__98172 = cljs.core.chunk_rest.call(null,seq__98104_98170__$1);
var G__98173 = c__8552__auto___98171;
var G__98174 = cljs.core.count.call(null,c__8552__auto___98171);
var G__98175 = 0;
seq__98104_98129 = G__98172;
chunk__98111_98130 = G__98173;
count__98112_98131 = G__98174;
i__98113_98132 = G__98175;
continue;
}
} else
{var vec__98123_98176 = cljs.core.first.call(null,seq__98104_98170__$1);var orig_type_98177 = cljs.core.nth.call(null,vec__98123_98176,0,null);var f_98178 = cljs.core.nth.call(null,vec__98123_98176,1,null);var seq__98105_98179 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_98177,new cljs.core.PersistentArrayMap.fromArray([orig_type_98177,cljs.core.identity], true, false)));var chunk__98107_98180 = null;var count__98108_98181 = 0;var i__98109_98182 = 0;while(true){
if((i__98109_98182 < count__98108_98181))
{var vec__98124_98183 = cljs.core._nth.call(null,chunk__98107_98180,i__98109_98182);var actual_type_98184 = cljs.core.nth.call(null,vec__98124_98183,0,null);var __98185 = cljs.core.nth.call(null,vec__98124_98183,1,null);var keys_98186 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_98128,actual_type_98184,f_98178], null);var canonical_f_98187 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_98127),keys_98186);dommy.core.update_event_listeners_BANG_.call(null,elem_98127,dommy.utils.dissoc_in,keys_98186);
if(cljs.core.truth_(elem_98127.removeEventListener))
{elem_98127.removeEventListener(cljs.core.name.call(null,actual_type_98184),canonical_f_98187);
} else
{elem_98127.detachEvent(cljs.core.name.call(null,actual_type_98184),canonical_f_98187);
}
{
var G__98188 = seq__98105_98179;
var G__98189 = chunk__98107_98180;
var G__98190 = count__98108_98181;
var G__98191 = (i__98109_98182 + 1);
seq__98105_98179 = G__98188;
chunk__98107_98180 = G__98189;
count__98108_98181 = G__98190;
i__98109_98182 = G__98191;
continue;
}
} else
{var temp__4092__auto___98192__$1 = cljs.core.seq.call(null,seq__98105_98179);if(temp__4092__auto___98192__$1)
{var seq__98105_98193__$1 = temp__4092__auto___98192__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98105_98193__$1))
{var c__8552__auto___98194 = cljs.core.chunk_first.call(null,seq__98105_98193__$1);{
var G__98195 = cljs.core.chunk_rest.call(null,seq__98105_98193__$1);
var G__98196 = c__8552__auto___98194;
var G__98197 = cljs.core.count.call(null,c__8552__auto___98194);
var G__98198 = 0;
seq__98105_98179 = G__98195;
chunk__98107_98180 = G__98196;
count__98108_98181 = G__98197;
i__98109_98182 = G__98198;
continue;
}
} else
{var vec__98125_98199 = cljs.core.first.call(null,seq__98105_98193__$1);var actual_type_98200 = cljs.core.nth.call(null,vec__98125_98199,0,null);var __98201 = cljs.core.nth.call(null,vec__98125_98199,1,null);var keys_98202 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_98128,actual_type_98200,f_98178], null);var canonical_f_98203 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_98127),keys_98202);dommy.core.update_event_listeners_BANG_.call(null,elem_98127,dommy.utils.dissoc_in,keys_98202);
if(cljs.core.truth_(elem_98127.removeEventListener))
{elem_98127.removeEventListener(cljs.core.name.call(null,actual_type_98200),canonical_f_98203);
} else
{elem_98127.detachEvent(cljs.core.name.call(null,actual_type_98200),canonical_f_98203);
}
{
var G__98204 = cljs.core.next.call(null,seq__98105_98193__$1);
var G__98205 = null;
var G__98206 = 0;
var G__98207 = 0;
seq__98105_98179 = G__98204;
chunk__98107_98180 = G__98205;
count__98108_98181 = G__98206;
i__98109_98182 = G__98207;
continue;
}
}
} else
{}
}
break;
}
{
var G__98208 = cljs.core.next.call(null,seq__98104_98170__$1);
var G__98209 = null;
var G__98210 = 0;
var G__98211 = 0;
seq__98104_98129 = G__98208;
chunk__98111_98130 = G__98209;
count__98112_98131 = G__98210;
i__98113_98132 = G__98211;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__98212){
var elem_sel = cljs.core.first(arglist__98212);
var type_fs = cljs.core.rest(arglist__98212);
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
var vec__98220_98227 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_98228 = cljs.core.nth.call(null,vec__98220_98227,0,null);var selector_98229 = cljs.core.nth.call(null,vec__98220_98227,1,null);var seq__98221_98230 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__98222_98231 = null;var count__98223_98232 = 0;var i__98224_98233 = 0;while(true){
if((i__98224_98233 < count__98223_98232))
{var vec__98225_98234 = cljs.core._nth.call(null,chunk__98222_98231,i__98224_98233);var type_98235 = cljs.core.nth.call(null,vec__98225_98234,0,null);var f_98236 = cljs.core.nth.call(null,vec__98225_98234,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_98235,((function (seq__98221_98230,chunk__98222_98231,count__98223_98232,i__98224_98233,vec__98225_98234,type_98235,f_98236){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_98235,this_fn);
return f_98236.call(null,e);
});})(seq__98221_98230,chunk__98222_98231,count__98223_98232,i__98224_98233,vec__98225_98234,type_98235,f_98236))
);
{
var G__98237 = seq__98221_98230;
var G__98238 = chunk__98222_98231;
var G__98239 = count__98223_98232;
var G__98240 = (i__98224_98233 + 1);
seq__98221_98230 = G__98237;
chunk__98222_98231 = G__98238;
count__98223_98232 = G__98239;
i__98224_98233 = G__98240;
continue;
}
} else
{var temp__4092__auto___98241 = cljs.core.seq.call(null,seq__98221_98230);if(temp__4092__auto___98241)
{var seq__98221_98242__$1 = temp__4092__auto___98241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98221_98242__$1))
{var c__8552__auto___98243 = cljs.core.chunk_first.call(null,seq__98221_98242__$1);{
var G__98244 = cljs.core.chunk_rest.call(null,seq__98221_98242__$1);
var G__98245 = c__8552__auto___98243;
var G__98246 = cljs.core.count.call(null,c__8552__auto___98243);
var G__98247 = 0;
seq__98221_98230 = G__98244;
chunk__98222_98231 = G__98245;
count__98223_98232 = G__98246;
i__98224_98233 = G__98247;
continue;
}
} else
{var vec__98226_98248 = cljs.core.first.call(null,seq__98221_98242__$1);var type_98249 = cljs.core.nth.call(null,vec__98226_98248,0,null);var f_98250 = cljs.core.nth.call(null,vec__98226_98248,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_98249,((function (seq__98221_98230,chunk__98222_98231,count__98223_98232,i__98224_98233,vec__98226_98248,type_98249,f_98250,seq__98221_98242__$1,temp__4092__auto___98241){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_98249,this_fn);
return f_98250.call(null,e);
});})(seq__98221_98230,chunk__98222_98231,count__98223_98232,i__98224_98233,vec__98226_98248,type_98249,f_98250,seq__98221_98242__$1,temp__4092__auto___98241))
);
{
var G__98251 = cljs.core.next.call(null,seq__98221_98242__$1);
var G__98252 = null;
var G__98253 = 0;
var G__98254 = 0;
seq__98221_98230 = G__98251;
chunk__98222_98231 = G__98252;
count__98223_98232 = G__98253;
i__98224_98233 = G__98254;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__98255){
var elem_sel = cljs.core.first(arglist__98255);
var type_fs = cljs.core.rest(arglist__98255);
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
var fire_BANG___delegate = function (node,event_type,p__98256){var vec__98258 = p__98256;var update_event_BANG_ = cljs.core.nth.call(null,vec__98258,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__98256 = null;if (arguments.length > 2) {
  p__98256 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__98256);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__98259){
var node = cljs.core.first(arglist__98259);
arglist__98259 = cljs.core.next(arglist__98259);
var event_type = cljs.core.first(arglist__98259);
var p__98256 = cljs.core.rest(arglist__98259);
return fire_BANG___delegate(node,event_type,p__98256);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
