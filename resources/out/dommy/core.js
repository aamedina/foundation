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
var append_BANG___2 = (function (parent,child){var G__340043 = dommy.template.__GT_node_like.call(null,parent);G__340043.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__340043;
});
var append_BANG___3 = (function() { 
var G__340048__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__340044_340049 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__340045_340050 = null;var count__340046_340051 = 0;var i__340047_340052 = 0;while(true){
if((i__340047_340052 < count__340046_340051))
{var c_340053 = cljs.core._nth.call(null,chunk__340045_340050,i__340047_340052);append_BANG_.call(null,parent__$1,c_340053);
{
var G__340054 = seq__340044_340049;
var G__340055 = chunk__340045_340050;
var G__340056 = count__340046_340051;
var G__340057 = (i__340047_340052 + 1);
seq__340044_340049 = G__340054;
chunk__340045_340050 = G__340055;
count__340046_340051 = G__340056;
i__340047_340052 = G__340057;
continue;
}
} else
{var temp__4092__auto___340058 = cljs.core.seq.call(null,seq__340044_340049);if(temp__4092__auto___340058)
{var seq__340044_340059__$1 = temp__4092__auto___340058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340044_340059__$1))
{var c__14547__auto___340060 = cljs.core.chunk_first.call(null,seq__340044_340059__$1);{
var G__340061 = cljs.core.chunk_rest.call(null,seq__340044_340059__$1);
var G__340062 = c__14547__auto___340060;
var G__340063 = cljs.core.count.call(null,c__14547__auto___340060);
var G__340064 = 0;
seq__340044_340049 = G__340061;
chunk__340045_340050 = G__340062;
count__340046_340051 = G__340063;
i__340047_340052 = G__340064;
continue;
}
} else
{var c_340065 = cljs.core.first.call(null,seq__340044_340059__$1);append_BANG_.call(null,parent__$1,c_340065);
{
var G__340066 = cljs.core.next.call(null,seq__340044_340059__$1);
var G__340067 = null;
var G__340068 = 0;
var G__340069 = 0;
seq__340044_340049 = G__340066;
chunk__340045_340050 = G__340067;
count__340046_340051 = G__340068;
i__340047_340052 = G__340069;
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
var G__340048 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__340048__delegate.call(this,parent,child,more_children);};
G__340048.cljs$lang$maxFixedArity = 2;
G__340048.cljs$lang$applyTo = (function (arglist__340070){
var parent = cljs.core.first(arglist__340070);
arglist__340070 = cljs.core.next(arglist__340070);
var child = cljs.core.first(arglist__340070);
var more_children = cljs.core.rest(arglist__340070);
return G__340048__delegate(parent,child,more_children);
});
G__340048.cljs$core$IFn$_invoke$arity$variadic = G__340048__delegate;
return G__340048;
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
var G__340079__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__340075_340080 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__340076_340081 = null;var count__340077_340082 = 0;var i__340078_340083 = 0;while(true){
if((i__340078_340083 < count__340077_340082))
{var c_340084 = cljs.core._nth.call(null,chunk__340076_340081,i__340078_340083);prepend_BANG_.call(null,parent__$1,c_340084);
{
var G__340085 = seq__340075_340080;
var G__340086 = chunk__340076_340081;
var G__340087 = count__340077_340082;
var G__340088 = (i__340078_340083 + 1);
seq__340075_340080 = G__340085;
chunk__340076_340081 = G__340086;
count__340077_340082 = G__340087;
i__340078_340083 = G__340088;
continue;
}
} else
{var temp__4092__auto___340089 = cljs.core.seq.call(null,seq__340075_340080);if(temp__4092__auto___340089)
{var seq__340075_340090__$1 = temp__4092__auto___340089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340075_340090__$1))
{var c__14547__auto___340091 = cljs.core.chunk_first.call(null,seq__340075_340090__$1);{
var G__340092 = cljs.core.chunk_rest.call(null,seq__340075_340090__$1);
var G__340093 = c__14547__auto___340091;
var G__340094 = cljs.core.count.call(null,c__14547__auto___340091);
var G__340095 = 0;
seq__340075_340080 = G__340092;
chunk__340076_340081 = G__340093;
count__340077_340082 = G__340094;
i__340078_340083 = G__340095;
continue;
}
} else
{var c_340096 = cljs.core.first.call(null,seq__340075_340090__$1);prepend_BANG_.call(null,parent__$1,c_340096);
{
var G__340097 = cljs.core.next.call(null,seq__340075_340090__$1);
var G__340098 = null;
var G__340099 = 0;
var G__340100 = 0;
seq__340075_340080 = G__340097;
chunk__340076_340081 = G__340098;
count__340077_340082 = G__340099;
i__340078_340083 = G__340100;
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
var G__340079 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__340079__delegate.call(this,parent,child,more_children);};
G__340079.cljs$lang$maxFixedArity = 2;
G__340079.cljs$lang$applyTo = (function (arglist__340101){
var parent = cljs.core.first(arglist__340101);
arglist__340101 = cljs.core.next(arglist__340101);
var child = cljs.core.first(arglist__340101);
var more_children = cljs.core.rest(arglist__340101);
return G__340079__delegate(parent,child,more_children);
});
G__340079.cljs$core$IFn$_invoke$arity$variadic = G__340079__delegate;
return G__340079;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___340102 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___340102))
{var next_340103 = temp__4090__auto___340102;parent.insertBefore(actual_node,next_340103);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__340105 = dommy.template.__GT_node_like.call(null,parent);G__340105.innerHTML = "";
dommy.core.append_BANG_.call(null,G__340105,node_like);
return G__340105;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__340107 = elem__$1.parentNode;G__340107.removeChild(elem__$1);
return G__340107;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__340113){var vec__340114 = p__340113;var k = cljs.core.nth.call(null,vec__340114,0,null);var v = cljs.core.nth.call(null,vec__340114,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t340115 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t340115 = (function (v,k,vec__340114,p__340113,container,key_selectors_map,template,selector_map,meta340116){
this.v = v;
this.k = k;
this.vec__340114 = vec__340114;
this.p__340113 = p__340113;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta340116 = meta340116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t340115.cljs$lang$type = true;
dommy.core.t340115.cljs$lang$ctorStr = "dommy.core/t340115";
dommy.core.t340115.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"dommy.core/t340115");
});
dommy.core.t340115.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t340115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_340117){var self__ = this;
var _340117__$1 = this;return self__.meta340116;
});
dommy.core.t340115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_340117,meta340116__$1){var self__ = this;
var _340117__$1 = this;return (new dommy.core.t340115(self__.v,self__.k,self__.vec__340114,self__.p__340113,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta340116__$1));
});
dommy.core.__GT_t340115 = (function __GT_t340115(v__$1,k__$1,vec__340114__$1,p__340113__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta340116){return (new dommy.core.t340115(v__$1,k__$1,vec__340114__$1,p__340113__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta340116));
});
}
return (new dommy.core.t340115(v,k,vec__340114,p__340113,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__340118_SHARP_){return p1__340118_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__340119_SHARP_){return !((p1__340119_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__340120){var vec__340121 = p__340120;var special_mouse_event = cljs.core.nth.call(null,vec__340121,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__340121,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13823__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13823__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__340122){
var elem = cljs.core.first(arglist__340122);
arglist__340122 = cljs.core.next(arglist__340122);
var f = cljs.core.first(arglist__340122);
var args = cljs.core.rest(arglist__340122);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__340123_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__340123_SHARP_));
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
var vec__340147_340170 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_340171 = cljs.core.nth.call(null,vec__340147_340170,0,null);var selector_340172 = cljs.core.nth.call(null,vec__340147_340170,1,null);var seq__340148_340173 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__340155_340174 = null;var count__340156_340175 = 0;var i__340157_340176 = 0;while(true){
if((i__340157_340176 < count__340156_340175))
{var vec__340164_340177 = cljs.core._nth.call(null,chunk__340155_340174,i__340157_340176);var orig_type_340178 = cljs.core.nth.call(null,vec__340164_340177,0,null);var f_340179 = cljs.core.nth.call(null,vec__340164_340177,1,null);var seq__340158_340180 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_340178,new cljs.core.PersistentArrayMap.fromArray([orig_type_340178,cljs.core.identity], true, false)));var chunk__340160_340181 = null;var count__340161_340182 = 0;var i__340162_340183 = 0;while(true){
if((i__340162_340183 < count__340161_340182))
{var vec__340165_340184 = cljs.core._nth.call(null,chunk__340160_340181,i__340162_340183);var actual_type_340185 = cljs.core.nth.call(null,vec__340165_340184,0,null);var factory_340186 = cljs.core.nth.call(null,vec__340165_340184,1,null);var canonical_f_340187 = (cljs.core.truth_(selector_340172)?cljs.core.partial.call(null,dommy.core.live_listener,elem_340171,selector_340172):cljs.core.identity).call(null,factory_340186.call(null,f_340179));dommy.core.update_event_listeners_BANG_.call(null,elem_340171,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340172,actual_type_340185,f_340179], null),canonical_f_340187);
if(cljs.core.truth_(elem_340171.addEventListener))
{elem_340171.addEventListener(cljs.core.name.call(null,actual_type_340185),canonical_f_340187);
} else
{elem_340171.attachEvent(cljs.core.name.call(null,actual_type_340185),canonical_f_340187);
}
{
var G__340188 = seq__340158_340180;
var G__340189 = chunk__340160_340181;
var G__340190 = count__340161_340182;
var G__340191 = (i__340162_340183 + 1);
seq__340158_340180 = G__340188;
chunk__340160_340181 = G__340189;
count__340161_340182 = G__340190;
i__340162_340183 = G__340191;
continue;
}
} else
{var temp__4092__auto___340192 = cljs.core.seq.call(null,seq__340158_340180);if(temp__4092__auto___340192)
{var seq__340158_340193__$1 = temp__4092__auto___340192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340158_340193__$1))
{var c__14547__auto___340194 = cljs.core.chunk_first.call(null,seq__340158_340193__$1);{
var G__340195 = cljs.core.chunk_rest.call(null,seq__340158_340193__$1);
var G__340196 = c__14547__auto___340194;
var G__340197 = cljs.core.count.call(null,c__14547__auto___340194);
var G__340198 = 0;
seq__340158_340180 = G__340195;
chunk__340160_340181 = G__340196;
count__340161_340182 = G__340197;
i__340162_340183 = G__340198;
continue;
}
} else
{var vec__340166_340199 = cljs.core.first.call(null,seq__340158_340193__$1);var actual_type_340200 = cljs.core.nth.call(null,vec__340166_340199,0,null);var factory_340201 = cljs.core.nth.call(null,vec__340166_340199,1,null);var canonical_f_340202 = (cljs.core.truth_(selector_340172)?cljs.core.partial.call(null,dommy.core.live_listener,elem_340171,selector_340172):cljs.core.identity).call(null,factory_340201.call(null,f_340179));dommy.core.update_event_listeners_BANG_.call(null,elem_340171,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340172,actual_type_340200,f_340179], null),canonical_f_340202);
if(cljs.core.truth_(elem_340171.addEventListener))
{elem_340171.addEventListener(cljs.core.name.call(null,actual_type_340200),canonical_f_340202);
} else
{elem_340171.attachEvent(cljs.core.name.call(null,actual_type_340200),canonical_f_340202);
}
{
var G__340203 = cljs.core.next.call(null,seq__340158_340193__$1);
var G__340204 = null;
var G__340205 = 0;
var G__340206 = 0;
seq__340158_340180 = G__340203;
chunk__340160_340181 = G__340204;
count__340161_340182 = G__340205;
i__340162_340183 = G__340206;
continue;
}
}
} else
{}
}
break;
}
{
var G__340207 = seq__340148_340173;
var G__340208 = chunk__340155_340174;
var G__340209 = count__340156_340175;
var G__340210 = (i__340157_340176 + 1);
seq__340148_340173 = G__340207;
chunk__340155_340174 = G__340208;
count__340156_340175 = G__340209;
i__340157_340176 = G__340210;
continue;
}
} else
{var temp__4092__auto___340211 = cljs.core.seq.call(null,seq__340148_340173);if(temp__4092__auto___340211)
{var seq__340148_340212__$1 = temp__4092__auto___340211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340148_340212__$1))
{var c__14547__auto___340213 = cljs.core.chunk_first.call(null,seq__340148_340212__$1);{
var G__340214 = cljs.core.chunk_rest.call(null,seq__340148_340212__$1);
var G__340215 = c__14547__auto___340213;
var G__340216 = cljs.core.count.call(null,c__14547__auto___340213);
var G__340217 = 0;
seq__340148_340173 = G__340214;
chunk__340155_340174 = G__340215;
count__340156_340175 = G__340216;
i__340157_340176 = G__340217;
continue;
}
} else
{var vec__340167_340218 = cljs.core.first.call(null,seq__340148_340212__$1);var orig_type_340219 = cljs.core.nth.call(null,vec__340167_340218,0,null);var f_340220 = cljs.core.nth.call(null,vec__340167_340218,1,null);var seq__340149_340221 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_340219,new cljs.core.PersistentArrayMap.fromArray([orig_type_340219,cljs.core.identity], true, false)));var chunk__340151_340222 = null;var count__340152_340223 = 0;var i__340153_340224 = 0;while(true){
if((i__340153_340224 < count__340152_340223))
{var vec__340168_340225 = cljs.core._nth.call(null,chunk__340151_340222,i__340153_340224);var actual_type_340226 = cljs.core.nth.call(null,vec__340168_340225,0,null);var factory_340227 = cljs.core.nth.call(null,vec__340168_340225,1,null);var canonical_f_340228 = (cljs.core.truth_(selector_340172)?cljs.core.partial.call(null,dommy.core.live_listener,elem_340171,selector_340172):cljs.core.identity).call(null,factory_340227.call(null,f_340220));dommy.core.update_event_listeners_BANG_.call(null,elem_340171,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340172,actual_type_340226,f_340220], null),canonical_f_340228);
if(cljs.core.truth_(elem_340171.addEventListener))
{elem_340171.addEventListener(cljs.core.name.call(null,actual_type_340226),canonical_f_340228);
} else
{elem_340171.attachEvent(cljs.core.name.call(null,actual_type_340226),canonical_f_340228);
}
{
var G__340229 = seq__340149_340221;
var G__340230 = chunk__340151_340222;
var G__340231 = count__340152_340223;
var G__340232 = (i__340153_340224 + 1);
seq__340149_340221 = G__340229;
chunk__340151_340222 = G__340230;
count__340152_340223 = G__340231;
i__340153_340224 = G__340232;
continue;
}
} else
{var temp__4092__auto___340233__$1 = cljs.core.seq.call(null,seq__340149_340221);if(temp__4092__auto___340233__$1)
{var seq__340149_340234__$1 = temp__4092__auto___340233__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340149_340234__$1))
{var c__14547__auto___340235 = cljs.core.chunk_first.call(null,seq__340149_340234__$1);{
var G__340236 = cljs.core.chunk_rest.call(null,seq__340149_340234__$1);
var G__340237 = c__14547__auto___340235;
var G__340238 = cljs.core.count.call(null,c__14547__auto___340235);
var G__340239 = 0;
seq__340149_340221 = G__340236;
chunk__340151_340222 = G__340237;
count__340152_340223 = G__340238;
i__340153_340224 = G__340239;
continue;
}
} else
{var vec__340169_340240 = cljs.core.first.call(null,seq__340149_340234__$1);var actual_type_340241 = cljs.core.nth.call(null,vec__340169_340240,0,null);var factory_340242 = cljs.core.nth.call(null,vec__340169_340240,1,null);var canonical_f_340243 = (cljs.core.truth_(selector_340172)?cljs.core.partial.call(null,dommy.core.live_listener,elem_340171,selector_340172):cljs.core.identity).call(null,factory_340242.call(null,f_340220));dommy.core.update_event_listeners_BANG_.call(null,elem_340171,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340172,actual_type_340241,f_340220], null),canonical_f_340243);
if(cljs.core.truth_(elem_340171.addEventListener))
{elem_340171.addEventListener(cljs.core.name.call(null,actual_type_340241),canonical_f_340243);
} else
{elem_340171.attachEvent(cljs.core.name.call(null,actual_type_340241),canonical_f_340243);
}
{
var G__340244 = cljs.core.next.call(null,seq__340149_340234__$1);
var G__340245 = null;
var G__340246 = 0;
var G__340247 = 0;
seq__340149_340221 = G__340244;
chunk__340151_340222 = G__340245;
count__340152_340223 = G__340246;
i__340153_340224 = G__340247;
continue;
}
}
} else
{}
}
break;
}
{
var G__340248 = cljs.core.next.call(null,seq__340148_340212__$1);
var G__340249 = null;
var G__340250 = 0;
var G__340251 = 0;
seq__340148_340173 = G__340248;
chunk__340155_340174 = G__340249;
count__340156_340175 = G__340250;
i__340157_340176 = G__340251;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__340252){
var elem_sel = cljs.core.first(arglist__340252);
var type_fs = cljs.core.rest(arglist__340252);
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
var vec__340276_340299 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_340300 = cljs.core.nth.call(null,vec__340276_340299,0,null);var selector_340301 = cljs.core.nth.call(null,vec__340276_340299,1,null);var seq__340277_340302 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__340284_340303 = null;var count__340285_340304 = 0;var i__340286_340305 = 0;while(true){
if((i__340286_340305 < count__340285_340304))
{var vec__340293_340306 = cljs.core._nth.call(null,chunk__340284_340303,i__340286_340305);var orig_type_340307 = cljs.core.nth.call(null,vec__340293_340306,0,null);var f_340308 = cljs.core.nth.call(null,vec__340293_340306,1,null);var seq__340287_340309 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_340307,new cljs.core.PersistentArrayMap.fromArray([orig_type_340307,cljs.core.identity], true, false)));var chunk__340289_340310 = null;var count__340290_340311 = 0;var i__340291_340312 = 0;while(true){
if((i__340291_340312 < count__340290_340311))
{var vec__340294_340313 = cljs.core._nth.call(null,chunk__340289_340310,i__340291_340312);var actual_type_340314 = cljs.core.nth.call(null,vec__340294_340313,0,null);var __340315 = cljs.core.nth.call(null,vec__340294_340313,1,null);var keys_340316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340301,actual_type_340314,f_340308], null);var canonical_f_340317 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_340300),keys_340316);dommy.core.update_event_listeners_BANG_.call(null,elem_340300,dommy.utils.dissoc_in,keys_340316);
if(cljs.core.truth_(elem_340300.removeEventListener))
{elem_340300.removeEventListener(cljs.core.name.call(null,actual_type_340314),canonical_f_340317);
} else
{elem_340300.detachEvent(cljs.core.name.call(null,actual_type_340314),canonical_f_340317);
}
{
var G__340318 = seq__340287_340309;
var G__340319 = chunk__340289_340310;
var G__340320 = count__340290_340311;
var G__340321 = (i__340291_340312 + 1);
seq__340287_340309 = G__340318;
chunk__340289_340310 = G__340319;
count__340290_340311 = G__340320;
i__340291_340312 = G__340321;
continue;
}
} else
{var temp__4092__auto___340322 = cljs.core.seq.call(null,seq__340287_340309);if(temp__4092__auto___340322)
{var seq__340287_340323__$1 = temp__4092__auto___340322;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340287_340323__$1))
{var c__14547__auto___340324 = cljs.core.chunk_first.call(null,seq__340287_340323__$1);{
var G__340325 = cljs.core.chunk_rest.call(null,seq__340287_340323__$1);
var G__340326 = c__14547__auto___340324;
var G__340327 = cljs.core.count.call(null,c__14547__auto___340324);
var G__340328 = 0;
seq__340287_340309 = G__340325;
chunk__340289_340310 = G__340326;
count__340290_340311 = G__340327;
i__340291_340312 = G__340328;
continue;
}
} else
{var vec__340295_340329 = cljs.core.first.call(null,seq__340287_340323__$1);var actual_type_340330 = cljs.core.nth.call(null,vec__340295_340329,0,null);var __340331 = cljs.core.nth.call(null,vec__340295_340329,1,null);var keys_340332 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340301,actual_type_340330,f_340308], null);var canonical_f_340333 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_340300),keys_340332);dommy.core.update_event_listeners_BANG_.call(null,elem_340300,dommy.utils.dissoc_in,keys_340332);
if(cljs.core.truth_(elem_340300.removeEventListener))
{elem_340300.removeEventListener(cljs.core.name.call(null,actual_type_340330),canonical_f_340333);
} else
{elem_340300.detachEvent(cljs.core.name.call(null,actual_type_340330),canonical_f_340333);
}
{
var G__340334 = cljs.core.next.call(null,seq__340287_340323__$1);
var G__340335 = null;
var G__340336 = 0;
var G__340337 = 0;
seq__340287_340309 = G__340334;
chunk__340289_340310 = G__340335;
count__340290_340311 = G__340336;
i__340291_340312 = G__340337;
continue;
}
}
} else
{}
}
break;
}
{
var G__340338 = seq__340277_340302;
var G__340339 = chunk__340284_340303;
var G__340340 = count__340285_340304;
var G__340341 = (i__340286_340305 + 1);
seq__340277_340302 = G__340338;
chunk__340284_340303 = G__340339;
count__340285_340304 = G__340340;
i__340286_340305 = G__340341;
continue;
}
} else
{var temp__4092__auto___340342 = cljs.core.seq.call(null,seq__340277_340302);if(temp__4092__auto___340342)
{var seq__340277_340343__$1 = temp__4092__auto___340342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340277_340343__$1))
{var c__14547__auto___340344 = cljs.core.chunk_first.call(null,seq__340277_340343__$1);{
var G__340345 = cljs.core.chunk_rest.call(null,seq__340277_340343__$1);
var G__340346 = c__14547__auto___340344;
var G__340347 = cljs.core.count.call(null,c__14547__auto___340344);
var G__340348 = 0;
seq__340277_340302 = G__340345;
chunk__340284_340303 = G__340346;
count__340285_340304 = G__340347;
i__340286_340305 = G__340348;
continue;
}
} else
{var vec__340296_340349 = cljs.core.first.call(null,seq__340277_340343__$1);var orig_type_340350 = cljs.core.nth.call(null,vec__340296_340349,0,null);var f_340351 = cljs.core.nth.call(null,vec__340296_340349,1,null);var seq__340278_340352 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_340350,new cljs.core.PersistentArrayMap.fromArray([orig_type_340350,cljs.core.identity], true, false)));var chunk__340280_340353 = null;var count__340281_340354 = 0;var i__340282_340355 = 0;while(true){
if((i__340282_340355 < count__340281_340354))
{var vec__340297_340356 = cljs.core._nth.call(null,chunk__340280_340353,i__340282_340355);var actual_type_340357 = cljs.core.nth.call(null,vec__340297_340356,0,null);var __340358 = cljs.core.nth.call(null,vec__340297_340356,1,null);var keys_340359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340301,actual_type_340357,f_340351], null);var canonical_f_340360 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_340300),keys_340359);dommy.core.update_event_listeners_BANG_.call(null,elem_340300,dommy.utils.dissoc_in,keys_340359);
if(cljs.core.truth_(elem_340300.removeEventListener))
{elem_340300.removeEventListener(cljs.core.name.call(null,actual_type_340357),canonical_f_340360);
} else
{elem_340300.detachEvent(cljs.core.name.call(null,actual_type_340357),canonical_f_340360);
}
{
var G__340361 = seq__340278_340352;
var G__340362 = chunk__340280_340353;
var G__340363 = count__340281_340354;
var G__340364 = (i__340282_340355 + 1);
seq__340278_340352 = G__340361;
chunk__340280_340353 = G__340362;
count__340281_340354 = G__340363;
i__340282_340355 = G__340364;
continue;
}
} else
{var temp__4092__auto___340365__$1 = cljs.core.seq.call(null,seq__340278_340352);if(temp__4092__auto___340365__$1)
{var seq__340278_340366__$1 = temp__4092__auto___340365__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340278_340366__$1))
{var c__14547__auto___340367 = cljs.core.chunk_first.call(null,seq__340278_340366__$1);{
var G__340368 = cljs.core.chunk_rest.call(null,seq__340278_340366__$1);
var G__340369 = c__14547__auto___340367;
var G__340370 = cljs.core.count.call(null,c__14547__auto___340367);
var G__340371 = 0;
seq__340278_340352 = G__340368;
chunk__340280_340353 = G__340369;
count__340281_340354 = G__340370;
i__340282_340355 = G__340371;
continue;
}
} else
{var vec__340298_340372 = cljs.core.first.call(null,seq__340278_340366__$1);var actual_type_340373 = cljs.core.nth.call(null,vec__340298_340372,0,null);var __340374 = cljs.core.nth.call(null,vec__340298_340372,1,null);var keys_340375 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_340301,actual_type_340373,f_340351], null);var canonical_f_340376 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_340300),keys_340375);dommy.core.update_event_listeners_BANG_.call(null,elem_340300,dommy.utils.dissoc_in,keys_340375);
if(cljs.core.truth_(elem_340300.removeEventListener))
{elem_340300.removeEventListener(cljs.core.name.call(null,actual_type_340373),canonical_f_340376);
} else
{elem_340300.detachEvent(cljs.core.name.call(null,actual_type_340373),canonical_f_340376);
}
{
var G__340377 = cljs.core.next.call(null,seq__340278_340366__$1);
var G__340378 = null;
var G__340379 = 0;
var G__340380 = 0;
seq__340278_340352 = G__340377;
chunk__340280_340353 = G__340378;
count__340281_340354 = G__340379;
i__340282_340355 = G__340380;
continue;
}
}
} else
{}
}
break;
}
{
var G__340381 = cljs.core.next.call(null,seq__340277_340343__$1);
var G__340382 = null;
var G__340383 = 0;
var G__340384 = 0;
seq__340277_340302 = G__340381;
chunk__340284_340303 = G__340382;
count__340285_340304 = G__340383;
i__340286_340305 = G__340384;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__340385){
var elem_sel = cljs.core.first(arglist__340385);
var type_fs = cljs.core.rest(arglist__340385);
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
var vec__340393_340400 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_340401 = cljs.core.nth.call(null,vec__340393_340400,0,null);var selector_340402 = cljs.core.nth.call(null,vec__340393_340400,1,null);var seq__340394_340403 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__340395_340404 = null;var count__340396_340405 = 0;var i__340397_340406 = 0;while(true){
if((i__340397_340406 < count__340396_340405))
{var vec__340398_340407 = cljs.core._nth.call(null,chunk__340395_340404,i__340397_340406);var type_340408 = cljs.core.nth.call(null,vec__340398_340407,0,null);var f_340409 = cljs.core.nth.call(null,vec__340398_340407,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_340408,((function (seq__340394_340403,chunk__340395_340404,count__340396_340405,i__340397_340406,vec__340398_340407,type_340408,f_340409){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_340408,this_fn);
return f_340409.call(null,e);
});})(seq__340394_340403,chunk__340395_340404,count__340396_340405,i__340397_340406,vec__340398_340407,type_340408,f_340409))
);
{
var G__340410 = seq__340394_340403;
var G__340411 = chunk__340395_340404;
var G__340412 = count__340396_340405;
var G__340413 = (i__340397_340406 + 1);
seq__340394_340403 = G__340410;
chunk__340395_340404 = G__340411;
count__340396_340405 = G__340412;
i__340397_340406 = G__340413;
continue;
}
} else
{var temp__4092__auto___340414 = cljs.core.seq.call(null,seq__340394_340403);if(temp__4092__auto___340414)
{var seq__340394_340415__$1 = temp__4092__auto___340414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340394_340415__$1))
{var c__14547__auto___340416 = cljs.core.chunk_first.call(null,seq__340394_340415__$1);{
var G__340417 = cljs.core.chunk_rest.call(null,seq__340394_340415__$1);
var G__340418 = c__14547__auto___340416;
var G__340419 = cljs.core.count.call(null,c__14547__auto___340416);
var G__340420 = 0;
seq__340394_340403 = G__340417;
chunk__340395_340404 = G__340418;
count__340396_340405 = G__340419;
i__340397_340406 = G__340420;
continue;
}
} else
{var vec__340399_340421 = cljs.core.first.call(null,seq__340394_340415__$1);var type_340422 = cljs.core.nth.call(null,vec__340399_340421,0,null);var f_340423 = cljs.core.nth.call(null,vec__340399_340421,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_340422,((function (seq__340394_340403,chunk__340395_340404,count__340396_340405,i__340397_340406,vec__340399_340421,type_340422,f_340423,seq__340394_340415__$1,temp__4092__auto___340414){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_340422,this_fn);
return f_340423.call(null,e);
});})(seq__340394_340403,chunk__340395_340404,count__340396_340405,i__340397_340406,vec__340399_340421,type_340422,f_340423,seq__340394_340415__$1,temp__4092__auto___340414))
);
{
var G__340424 = cljs.core.next.call(null,seq__340394_340415__$1);
var G__340425 = null;
var G__340426 = 0;
var G__340427 = 0;
seq__340394_340403 = G__340424;
chunk__340395_340404 = G__340425;
count__340396_340405 = G__340426;
i__340397_340406 = G__340427;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__340428){
var elem_sel = cljs.core.first(arglist__340428);
var type_fs = cljs.core.rest(arglist__340428);
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
var fire_BANG___delegate = function (node,event_type,p__340429){var vec__340431 = p__340429;var update_event_BANG_ = cljs.core.nth.call(null,vec__340431,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__340429 = null;if (arguments.length > 2) {
  p__340429 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__340429);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__340432){
var node = cljs.core.first(arglist__340432);
arglist__340432 = cljs.core.next(arglist__340432);
var event_type = cljs.core.first(arglist__340432);
var p__340429 = cljs.core.rest(arglist__340432);
return fire_BANG___delegate(node,event_type,p__340429);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map