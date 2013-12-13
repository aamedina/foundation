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
dommy.core.text = (function text(elem){var or__13825__auto__ = elem.textContent;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
var append_BANG___2 = (function (parent,child){var G__92004 = dommy.template.__GT_node_like.call(null,parent);G__92004.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__92004;
});
var append_BANG___3 = (function() { 
var G__92009__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__92005_92010 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__92006_92011 = null;var count__92007_92012 = 0;var i__92008_92013 = 0;while(true){
if((i__92008_92013 < count__92007_92012))
{var c_92014 = cljs.core._nth.call(null,chunk__92006_92011,i__92008_92013);append_BANG_.call(null,parent__$1,c_92014);
{
var G__92015 = seq__92005_92010;
var G__92016 = chunk__92006_92011;
var G__92017 = count__92007_92012;
var G__92018 = (i__92008_92013 + 1);
seq__92005_92010 = G__92015;
chunk__92006_92011 = G__92016;
count__92007_92012 = G__92017;
i__92008_92013 = G__92018;
continue;
}
} else
{var temp__4092__auto___92019 = cljs.core.seq.call(null,seq__92005_92010);if(temp__4092__auto___92019)
{var seq__92005_92020__$1 = temp__4092__auto___92019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92005_92020__$1))
{var c__14549__auto___92021 = cljs.core.chunk_first.call(null,seq__92005_92020__$1);{
var G__92022 = cljs.core.chunk_rest.call(null,seq__92005_92020__$1);
var G__92023 = c__14549__auto___92021;
var G__92024 = cljs.core.count.call(null,c__14549__auto___92021);
var G__92025 = 0;
seq__92005_92010 = G__92022;
chunk__92006_92011 = G__92023;
count__92007_92012 = G__92024;
i__92008_92013 = G__92025;
continue;
}
} else
{var c_92026 = cljs.core.first.call(null,seq__92005_92020__$1);append_BANG_.call(null,parent__$1,c_92026);
{
var G__92027 = cljs.core.next.call(null,seq__92005_92020__$1);
var G__92028 = null;
var G__92029 = 0;
var G__92030 = 0;
seq__92005_92010 = G__92027;
chunk__92006_92011 = G__92028;
count__92007_92012 = G__92029;
i__92008_92013 = G__92030;
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
var G__92009 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92009__delegate.call(this,parent,child,more_children);};
G__92009.cljs$lang$maxFixedArity = 2;
G__92009.cljs$lang$applyTo = (function (arglist__92031){
var parent = cljs.core.first(arglist__92031);
arglist__92031 = cljs.core.next(arglist__92031);
var child = cljs.core.first(arglist__92031);
var more_children = cljs.core.rest(arglist__92031);
return G__92009__delegate(parent,child,more_children);
});
G__92009.cljs$core$IFn$_invoke$arity$variadic = G__92009__delegate;
return G__92009;
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
var G__92040__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__92036_92041 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__92037_92042 = null;var count__92038_92043 = 0;var i__92039_92044 = 0;while(true){
if((i__92039_92044 < count__92038_92043))
{var c_92045 = cljs.core._nth.call(null,chunk__92037_92042,i__92039_92044);prepend_BANG_.call(null,parent__$1,c_92045);
{
var G__92046 = seq__92036_92041;
var G__92047 = chunk__92037_92042;
var G__92048 = count__92038_92043;
var G__92049 = (i__92039_92044 + 1);
seq__92036_92041 = G__92046;
chunk__92037_92042 = G__92047;
count__92038_92043 = G__92048;
i__92039_92044 = G__92049;
continue;
}
} else
{var temp__4092__auto___92050 = cljs.core.seq.call(null,seq__92036_92041);if(temp__4092__auto___92050)
{var seq__92036_92051__$1 = temp__4092__auto___92050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92036_92051__$1))
{var c__14549__auto___92052 = cljs.core.chunk_first.call(null,seq__92036_92051__$1);{
var G__92053 = cljs.core.chunk_rest.call(null,seq__92036_92051__$1);
var G__92054 = c__14549__auto___92052;
var G__92055 = cljs.core.count.call(null,c__14549__auto___92052);
var G__92056 = 0;
seq__92036_92041 = G__92053;
chunk__92037_92042 = G__92054;
count__92038_92043 = G__92055;
i__92039_92044 = G__92056;
continue;
}
} else
{var c_92057 = cljs.core.first.call(null,seq__92036_92051__$1);prepend_BANG_.call(null,parent__$1,c_92057);
{
var G__92058 = cljs.core.next.call(null,seq__92036_92051__$1);
var G__92059 = null;
var G__92060 = 0;
var G__92061 = 0;
seq__92036_92041 = G__92058;
chunk__92037_92042 = G__92059;
count__92038_92043 = G__92060;
i__92039_92044 = G__92061;
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
var G__92040 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92040__delegate.call(this,parent,child,more_children);};
G__92040.cljs$lang$maxFixedArity = 2;
G__92040.cljs$lang$applyTo = (function (arglist__92062){
var parent = cljs.core.first(arglist__92062);
arglist__92062 = cljs.core.next(arglist__92062);
var child = cljs.core.first(arglist__92062);
var more_children = cljs.core.rest(arglist__92062);
return G__92040__delegate(parent,child,more_children);
});
G__92040.cljs$core$IFn$_invoke$arity$variadic = G__92040__delegate;
return G__92040;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___92063 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___92063))
{var next_92064 = temp__4090__auto___92063;parent.insertBefore(actual_node,next_92064);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__92066 = dommy.template.__GT_node_like.call(null,parent);G__92066.innerHTML = "";
dommy.core.append_BANG_.call(null,G__92066,node_like);
return G__92066;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__92068 = elem__$1.parentNode;G__92068.removeChild(elem__$1);
return G__92068;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__92074){var vec__92075 = p__92074;var k = cljs.core.nth.call(null,vec__92075,0,null);var v = cljs.core.nth.call(null,vec__92075,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t92076 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t92076 = (function (v,k,vec__92075,p__92074,container,key_selectors_map,template,selector_map,meta92077){
this.v = v;
this.k = k;
this.vec__92075 = vec__92075;
this.p__92074 = p__92074;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta92077 = meta92077;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t92076.cljs$lang$type = true;
dommy.core.t92076.cljs$lang$ctorStr = "dommy.core/t92076";
dommy.core.t92076.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"dommy.core/t92076");
});
dommy.core.t92076.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t92076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_92078){var self__ = this;
var _92078__$1 = this;return self__.meta92077;
});
dommy.core.t92076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_92078,meta92077__$1){var self__ = this;
var _92078__$1 = this;return (new dommy.core.t92076(self__.v,self__.k,self__.vec__92075,self__.p__92074,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta92077__$1));
});
dommy.core.__GT_t92076 = (function __GT_t92076(v__$1,k__$1,vec__92075__$1,p__92074__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta92077){return (new dommy.core.t92076(v__$1,k__$1,vec__92075__$1,p__92074__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta92077));
});
}
return (new dommy.core.t92076(v,k,vec__92075,p__92074,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__92079_SHARP_){return p1__92079_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__92080_SHARP_){return !((p1__92080_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__92081){var vec__92082 = p__92081;var special_mouse_event = cljs.core.nth.call(null,vec__92082,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__92082,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13825__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13813__auto__ = related_target;if(cljs.core.truth_(and__13813__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13813__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13813__auto__ = selected_target;if(cljs.core.truth_(and__13813__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13813__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13825__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__92083){
var elem = cljs.core.first(arglist__92083);
arglist__92083 = cljs.core.next(arglist__92083);
var f = cljs.core.first(arglist__92083);
var args = cljs.core.rest(arglist__92083);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__92084_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__92084_SHARP_));
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
var vec__92108_92131 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_92132 = cljs.core.nth.call(null,vec__92108_92131,0,null);var selector_92133 = cljs.core.nth.call(null,vec__92108_92131,1,null);var seq__92109_92134 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__92116_92135 = null;var count__92117_92136 = 0;var i__92118_92137 = 0;while(true){
if((i__92118_92137 < count__92117_92136))
{var vec__92125_92138 = cljs.core._nth.call(null,chunk__92116_92135,i__92118_92137);var orig_type_92139 = cljs.core.nth.call(null,vec__92125_92138,0,null);var f_92140 = cljs.core.nth.call(null,vec__92125_92138,1,null);var seq__92119_92141 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92139,new cljs.core.PersistentArrayMap.fromArray([orig_type_92139,cljs.core.identity], true, false)));var chunk__92121_92142 = null;var count__92122_92143 = 0;var i__92123_92144 = 0;while(true){
if((i__92123_92144 < count__92122_92143))
{var vec__92126_92145 = cljs.core._nth.call(null,chunk__92121_92142,i__92123_92144);var actual_type_92146 = cljs.core.nth.call(null,vec__92126_92145,0,null);var factory_92147 = cljs.core.nth.call(null,vec__92126_92145,1,null);var canonical_f_92148 = (cljs.core.truth_(selector_92133)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92132,selector_92133):cljs.core.identity).call(null,factory_92147.call(null,f_92140));dommy.core.update_event_listeners_BANG_.call(null,elem_92132,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92133,actual_type_92146,f_92140], null),canonical_f_92148);
if(cljs.core.truth_(elem_92132.addEventListener))
{elem_92132.addEventListener(cljs.core.name.call(null,actual_type_92146),canonical_f_92148);
} else
{elem_92132.attachEvent(cljs.core.name.call(null,actual_type_92146),canonical_f_92148);
}
{
var G__92149 = seq__92119_92141;
var G__92150 = chunk__92121_92142;
var G__92151 = count__92122_92143;
var G__92152 = (i__92123_92144 + 1);
seq__92119_92141 = G__92149;
chunk__92121_92142 = G__92150;
count__92122_92143 = G__92151;
i__92123_92144 = G__92152;
continue;
}
} else
{var temp__4092__auto___92153 = cljs.core.seq.call(null,seq__92119_92141);if(temp__4092__auto___92153)
{var seq__92119_92154__$1 = temp__4092__auto___92153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92119_92154__$1))
{var c__14549__auto___92155 = cljs.core.chunk_first.call(null,seq__92119_92154__$1);{
var G__92156 = cljs.core.chunk_rest.call(null,seq__92119_92154__$1);
var G__92157 = c__14549__auto___92155;
var G__92158 = cljs.core.count.call(null,c__14549__auto___92155);
var G__92159 = 0;
seq__92119_92141 = G__92156;
chunk__92121_92142 = G__92157;
count__92122_92143 = G__92158;
i__92123_92144 = G__92159;
continue;
}
} else
{var vec__92127_92160 = cljs.core.first.call(null,seq__92119_92154__$1);var actual_type_92161 = cljs.core.nth.call(null,vec__92127_92160,0,null);var factory_92162 = cljs.core.nth.call(null,vec__92127_92160,1,null);var canonical_f_92163 = (cljs.core.truth_(selector_92133)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92132,selector_92133):cljs.core.identity).call(null,factory_92162.call(null,f_92140));dommy.core.update_event_listeners_BANG_.call(null,elem_92132,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92133,actual_type_92161,f_92140], null),canonical_f_92163);
if(cljs.core.truth_(elem_92132.addEventListener))
{elem_92132.addEventListener(cljs.core.name.call(null,actual_type_92161),canonical_f_92163);
} else
{elem_92132.attachEvent(cljs.core.name.call(null,actual_type_92161),canonical_f_92163);
}
{
var G__92164 = cljs.core.next.call(null,seq__92119_92154__$1);
var G__92165 = null;
var G__92166 = 0;
var G__92167 = 0;
seq__92119_92141 = G__92164;
chunk__92121_92142 = G__92165;
count__92122_92143 = G__92166;
i__92123_92144 = G__92167;
continue;
}
}
} else
{}
}
break;
}
{
var G__92168 = seq__92109_92134;
var G__92169 = chunk__92116_92135;
var G__92170 = count__92117_92136;
var G__92171 = (i__92118_92137 + 1);
seq__92109_92134 = G__92168;
chunk__92116_92135 = G__92169;
count__92117_92136 = G__92170;
i__92118_92137 = G__92171;
continue;
}
} else
{var temp__4092__auto___92172 = cljs.core.seq.call(null,seq__92109_92134);if(temp__4092__auto___92172)
{var seq__92109_92173__$1 = temp__4092__auto___92172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92109_92173__$1))
{var c__14549__auto___92174 = cljs.core.chunk_first.call(null,seq__92109_92173__$1);{
var G__92175 = cljs.core.chunk_rest.call(null,seq__92109_92173__$1);
var G__92176 = c__14549__auto___92174;
var G__92177 = cljs.core.count.call(null,c__14549__auto___92174);
var G__92178 = 0;
seq__92109_92134 = G__92175;
chunk__92116_92135 = G__92176;
count__92117_92136 = G__92177;
i__92118_92137 = G__92178;
continue;
}
} else
{var vec__92128_92179 = cljs.core.first.call(null,seq__92109_92173__$1);var orig_type_92180 = cljs.core.nth.call(null,vec__92128_92179,0,null);var f_92181 = cljs.core.nth.call(null,vec__92128_92179,1,null);var seq__92110_92182 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92180,new cljs.core.PersistentArrayMap.fromArray([orig_type_92180,cljs.core.identity], true, false)));var chunk__92112_92183 = null;var count__92113_92184 = 0;var i__92114_92185 = 0;while(true){
if((i__92114_92185 < count__92113_92184))
{var vec__92129_92186 = cljs.core._nth.call(null,chunk__92112_92183,i__92114_92185);var actual_type_92187 = cljs.core.nth.call(null,vec__92129_92186,0,null);var factory_92188 = cljs.core.nth.call(null,vec__92129_92186,1,null);var canonical_f_92189 = (cljs.core.truth_(selector_92133)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92132,selector_92133):cljs.core.identity).call(null,factory_92188.call(null,f_92181));dommy.core.update_event_listeners_BANG_.call(null,elem_92132,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92133,actual_type_92187,f_92181], null),canonical_f_92189);
if(cljs.core.truth_(elem_92132.addEventListener))
{elem_92132.addEventListener(cljs.core.name.call(null,actual_type_92187),canonical_f_92189);
} else
{elem_92132.attachEvent(cljs.core.name.call(null,actual_type_92187),canonical_f_92189);
}
{
var G__92190 = seq__92110_92182;
var G__92191 = chunk__92112_92183;
var G__92192 = count__92113_92184;
var G__92193 = (i__92114_92185 + 1);
seq__92110_92182 = G__92190;
chunk__92112_92183 = G__92191;
count__92113_92184 = G__92192;
i__92114_92185 = G__92193;
continue;
}
} else
{var temp__4092__auto___92194__$1 = cljs.core.seq.call(null,seq__92110_92182);if(temp__4092__auto___92194__$1)
{var seq__92110_92195__$1 = temp__4092__auto___92194__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92110_92195__$1))
{var c__14549__auto___92196 = cljs.core.chunk_first.call(null,seq__92110_92195__$1);{
var G__92197 = cljs.core.chunk_rest.call(null,seq__92110_92195__$1);
var G__92198 = c__14549__auto___92196;
var G__92199 = cljs.core.count.call(null,c__14549__auto___92196);
var G__92200 = 0;
seq__92110_92182 = G__92197;
chunk__92112_92183 = G__92198;
count__92113_92184 = G__92199;
i__92114_92185 = G__92200;
continue;
}
} else
{var vec__92130_92201 = cljs.core.first.call(null,seq__92110_92195__$1);var actual_type_92202 = cljs.core.nth.call(null,vec__92130_92201,0,null);var factory_92203 = cljs.core.nth.call(null,vec__92130_92201,1,null);var canonical_f_92204 = (cljs.core.truth_(selector_92133)?cljs.core.partial.call(null,dommy.core.live_listener,elem_92132,selector_92133):cljs.core.identity).call(null,factory_92203.call(null,f_92181));dommy.core.update_event_listeners_BANG_.call(null,elem_92132,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92133,actual_type_92202,f_92181], null),canonical_f_92204);
if(cljs.core.truth_(elem_92132.addEventListener))
{elem_92132.addEventListener(cljs.core.name.call(null,actual_type_92202),canonical_f_92204);
} else
{elem_92132.attachEvent(cljs.core.name.call(null,actual_type_92202),canonical_f_92204);
}
{
var G__92205 = cljs.core.next.call(null,seq__92110_92195__$1);
var G__92206 = null;
var G__92207 = 0;
var G__92208 = 0;
seq__92110_92182 = G__92205;
chunk__92112_92183 = G__92206;
count__92113_92184 = G__92207;
i__92114_92185 = G__92208;
continue;
}
}
} else
{}
}
break;
}
{
var G__92209 = cljs.core.next.call(null,seq__92109_92173__$1);
var G__92210 = null;
var G__92211 = 0;
var G__92212 = 0;
seq__92109_92134 = G__92209;
chunk__92116_92135 = G__92210;
count__92117_92136 = G__92211;
i__92118_92137 = G__92212;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__92213){
var elem_sel = cljs.core.first(arglist__92213);
var type_fs = cljs.core.rest(arglist__92213);
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
var vec__92237_92260 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_92261 = cljs.core.nth.call(null,vec__92237_92260,0,null);var selector_92262 = cljs.core.nth.call(null,vec__92237_92260,1,null);var seq__92238_92263 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__92245_92264 = null;var count__92246_92265 = 0;var i__92247_92266 = 0;while(true){
if((i__92247_92266 < count__92246_92265))
{var vec__92254_92267 = cljs.core._nth.call(null,chunk__92245_92264,i__92247_92266);var orig_type_92268 = cljs.core.nth.call(null,vec__92254_92267,0,null);var f_92269 = cljs.core.nth.call(null,vec__92254_92267,1,null);var seq__92248_92270 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92268,new cljs.core.PersistentArrayMap.fromArray([orig_type_92268,cljs.core.identity], true, false)));var chunk__92250_92271 = null;var count__92251_92272 = 0;var i__92252_92273 = 0;while(true){
if((i__92252_92273 < count__92251_92272))
{var vec__92255_92274 = cljs.core._nth.call(null,chunk__92250_92271,i__92252_92273);var actual_type_92275 = cljs.core.nth.call(null,vec__92255_92274,0,null);var __92276 = cljs.core.nth.call(null,vec__92255_92274,1,null);var keys_92277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92262,actual_type_92275,f_92269], null);var canonical_f_92278 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92261),keys_92277);dommy.core.update_event_listeners_BANG_.call(null,elem_92261,dommy.utils.dissoc_in,keys_92277);
if(cljs.core.truth_(elem_92261.removeEventListener))
{elem_92261.removeEventListener(cljs.core.name.call(null,actual_type_92275),canonical_f_92278);
} else
{elem_92261.detachEvent(cljs.core.name.call(null,actual_type_92275),canonical_f_92278);
}
{
var G__92279 = seq__92248_92270;
var G__92280 = chunk__92250_92271;
var G__92281 = count__92251_92272;
var G__92282 = (i__92252_92273 + 1);
seq__92248_92270 = G__92279;
chunk__92250_92271 = G__92280;
count__92251_92272 = G__92281;
i__92252_92273 = G__92282;
continue;
}
} else
{var temp__4092__auto___92283 = cljs.core.seq.call(null,seq__92248_92270);if(temp__4092__auto___92283)
{var seq__92248_92284__$1 = temp__4092__auto___92283;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92248_92284__$1))
{var c__14549__auto___92285 = cljs.core.chunk_first.call(null,seq__92248_92284__$1);{
var G__92286 = cljs.core.chunk_rest.call(null,seq__92248_92284__$1);
var G__92287 = c__14549__auto___92285;
var G__92288 = cljs.core.count.call(null,c__14549__auto___92285);
var G__92289 = 0;
seq__92248_92270 = G__92286;
chunk__92250_92271 = G__92287;
count__92251_92272 = G__92288;
i__92252_92273 = G__92289;
continue;
}
} else
{var vec__92256_92290 = cljs.core.first.call(null,seq__92248_92284__$1);var actual_type_92291 = cljs.core.nth.call(null,vec__92256_92290,0,null);var __92292 = cljs.core.nth.call(null,vec__92256_92290,1,null);var keys_92293 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92262,actual_type_92291,f_92269], null);var canonical_f_92294 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92261),keys_92293);dommy.core.update_event_listeners_BANG_.call(null,elem_92261,dommy.utils.dissoc_in,keys_92293);
if(cljs.core.truth_(elem_92261.removeEventListener))
{elem_92261.removeEventListener(cljs.core.name.call(null,actual_type_92291),canonical_f_92294);
} else
{elem_92261.detachEvent(cljs.core.name.call(null,actual_type_92291),canonical_f_92294);
}
{
var G__92295 = cljs.core.next.call(null,seq__92248_92284__$1);
var G__92296 = null;
var G__92297 = 0;
var G__92298 = 0;
seq__92248_92270 = G__92295;
chunk__92250_92271 = G__92296;
count__92251_92272 = G__92297;
i__92252_92273 = G__92298;
continue;
}
}
} else
{}
}
break;
}
{
var G__92299 = seq__92238_92263;
var G__92300 = chunk__92245_92264;
var G__92301 = count__92246_92265;
var G__92302 = (i__92247_92266 + 1);
seq__92238_92263 = G__92299;
chunk__92245_92264 = G__92300;
count__92246_92265 = G__92301;
i__92247_92266 = G__92302;
continue;
}
} else
{var temp__4092__auto___92303 = cljs.core.seq.call(null,seq__92238_92263);if(temp__4092__auto___92303)
{var seq__92238_92304__$1 = temp__4092__auto___92303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92238_92304__$1))
{var c__14549__auto___92305 = cljs.core.chunk_first.call(null,seq__92238_92304__$1);{
var G__92306 = cljs.core.chunk_rest.call(null,seq__92238_92304__$1);
var G__92307 = c__14549__auto___92305;
var G__92308 = cljs.core.count.call(null,c__14549__auto___92305);
var G__92309 = 0;
seq__92238_92263 = G__92306;
chunk__92245_92264 = G__92307;
count__92246_92265 = G__92308;
i__92247_92266 = G__92309;
continue;
}
} else
{var vec__92257_92310 = cljs.core.first.call(null,seq__92238_92304__$1);var orig_type_92311 = cljs.core.nth.call(null,vec__92257_92310,0,null);var f_92312 = cljs.core.nth.call(null,vec__92257_92310,1,null);var seq__92239_92313 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_92311,new cljs.core.PersistentArrayMap.fromArray([orig_type_92311,cljs.core.identity], true, false)));var chunk__92241_92314 = null;var count__92242_92315 = 0;var i__92243_92316 = 0;while(true){
if((i__92243_92316 < count__92242_92315))
{var vec__92258_92317 = cljs.core._nth.call(null,chunk__92241_92314,i__92243_92316);var actual_type_92318 = cljs.core.nth.call(null,vec__92258_92317,0,null);var __92319 = cljs.core.nth.call(null,vec__92258_92317,1,null);var keys_92320 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92262,actual_type_92318,f_92312], null);var canonical_f_92321 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92261),keys_92320);dommy.core.update_event_listeners_BANG_.call(null,elem_92261,dommy.utils.dissoc_in,keys_92320);
if(cljs.core.truth_(elem_92261.removeEventListener))
{elem_92261.removeEventListener(cljs.core.name.call(null,actual_type_92318),canonical_f_92321);
} else
{elem_92261.detachEvent(cljs.core.name.call(null,actual_type_92318),canonical_f_92321);
}
{
var G__92322 = seq__92239_92313;
var G__92323 = chunk__92241_92314;
var G__92324 = count__92242_92315;
var G__92325 = (i__92243_92316 + 1);
seq__92239_92313 = G__92322;
chunk__92241_92314 = G__92323;
count__92242_92315 = G__92324;
i__92243_92316 = G__92325;
continue;
}
} else
{var temp__4092__auto___92326__$1 = cljs.core.seq.call(null,seq__92239_92313);if(temp__4092__auto___92326__$1)
{var seq__92239_92327__$1 = temp__4092__auto___92326__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92239_92327__$1))
{var c__14549__auto___92328 = cljs.core.chunk_first.call(null,seq__92239_92327__$1);{
var G__92329 = cljs.core.chunk_rest.call(null,seq__92239_92327__$1);
var G__92330 = c__14549__auto___92328;
var G__92331 = cljs.core.count.call(null,c__14549__auto___92328);
var G__92332 = 0;
seq__92239_92313 = G__92329;
chunk__92241_92314 = G__92330;
count__92242_92315 = G__92331;
i__92243_92316 = G__92332;
continue;
}
} else
{var vec__92259_92333 = cljs.core.first.call(null,seq__92239_92327__$1);var actual_type_92334 = cljs.core.nth.call(null,vec__92259_92333,0,null);var __92335 = cljs.core.nth.call(null,vec__92259_92333,1,null);var keys_92336 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_92262,actual_type_92334,f_92312], null);var canonical_f_92337 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_92261),keys_92336);dommy.core.update_event_listeners_BANG_.call(null,elem_92261,dommy.utils.dissoc_in,keys_92336);
if(cljs.core.truth_(elem_92261.removeEventListener))
{elem_92261.removeEventListener(cljs.core.name.call(null,actual_type_92334),canonical_f_92337);
} else
{elem_92261.detachEvent(cljs.core.name.call(null,actual_type_92334),canonical_f_92337);
}
{
var G__92338 = cljs.core.next.call(null,seq__92239_92327__$1);
var G__92339 = null;
var G__92340 = 0;
var G__92341 = 0;
seq__92239_92313 = G__92338;
chunk__92241_92314 = G__92339;
count__92242_92315 = G__92340;
i__92243_92316 = G__92341;
continue;
}
}
} else
{}
}
break;
}
{
var G__92342 = cljs.core.next.call(null,seq__92238_92304__$1);
var G__92343 = null;
var G__92344 = 0;
var G__92345 = 0;
seq__92238_92263 = G__92342;
chunk__92245_92264 = G__92343;
count__92246_92265 = G__92344;
i__92247_92266 = G__92345;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__92346){
var elem_sel = cljs.core.first(arglist__92346);
var type_fs = cljs.core.rest(arglist__92346);
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
var vec__92354_92361 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_92362 = cljs.core.nth.call(null,vec__92354_92361,0,null);var selector_92363 = cljs.core.nth.call(null,vec__92354_92361,1,null);var seq__92355_92364 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__92356_92365 = null;var count__92357_92366 = 0;var i__92358_92367 = 0;while(true){
if((i__92358_92367 < count__92357_92366))
{var vec__92359_92368 = cljs.core._nth.call(null,chunk__92356_92365,i__92358_92367);var type_92369 = cljs.core.nth.call(null,vec__92359_92368,0,null);var f_92370 = cljs.core.nth.call(null,vec__92359_92368,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_92369,((function (seq__92355_92364,chunk__92356_92365,count__92357_92366,i__92358_92367,vec__92359_92368,type_92369,f_92370){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_92369,this_fn);
return f_92370.call(null,e);
});})(seq__92355_92364,chunk__92356_92365,count__92357_92366,i__92358_92367,vec__92359_92368,type_92369,f_92370))
);
{
var G__92371 = seq__92355_92364;
var G__92372 = chunk__92356_92365;
var G__92373 = count__92357_92366;
var G__92374 = (i__92358_92367 + 1);
seq__92355_92364 = G__92371;
chunk__92356_92365 = G__92372;
count__92357_92366 = G__92373;
i__92358_92367 = G__92374;
continue;
}
} else
{var temp__4092__auto___92375 = cljs.core.seq.call(null,seq__92355_92364);if(temp__4092__auto___92375)
{var seq__92355_92376__$1 = temp__4092__auto___92375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92355_92376__$1))
{var c__14549__auto___92377 = cljs.core.chunk_first.call(null,seq__92355_92376__$1);{
var G__92378 = cljs.core.chunk_rest.call(null,seq__92355_92376__$1);
var G__92379 = c__14549__auto___92377;
var G__92380 = cljs.core.count.call(null,c__14549__auto___92377);
var G__92381 = 0;
seq__92355_92364 = G__92378;
chunk__92356_92365 = G__92379;
count__92357_92366 = G__92380;
i__92358_92367 = G__92381;
continue;
}
} else
{var vec__92360_92382 = cljs.core.first.call(null,seq__92355_92376__$1);var type_92383 = cljs.core.nth.call(null,vec__92360_92382,0,null);var f_92384 = cljs.core.nth.call(null,vec__92360_92382,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_92383,((function (seq__92355_92364,chunk__92356_92365,count__92357_92366,i__92358_92367,vec__92360_92382,type_92383,f_92384,seq__92355_92376__$1,temp__4092__auto___92375){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_92383,this_fn);
return f_92384.call(null,e);
});})(seq__92355_92364,chunk__92356_92365,count__92357_92366,i__92358_92367,vec__92360_92382,type_92383,f_92384,seq__92355_92376__$1,temp__4092__auto___92375))
);
{
var G__92385 = cljs.core.next.call(null,seq__92355_92376__$1);
var G__92386 = null;
var G__92387 = 0;
var G__92388 = 0;
seq__92355_92364 = G__92385;
chunk__92356_92365 = G__92386;
count__92357_92366 = G__92387;
i__92358_92367 = G__92388;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__92389){
var elem_sel = cljs.core.first(arglist__92389);
var type_fs = cljs.core.rest(arglist__92389);
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
var fire_BANG___delegate = function (node,event_type,p__92390){var vec__92392 = p__92390;var update_event_BANG_ = cljs.core.nth.call(null,vec__92392,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13825__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
var p__92390 = null;if (arguments.length > 2) {
  p__92390 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__92390);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__92393){
var node = cljs.core.first(arglist__92393);
arglist__92393 = cljs.core.next(arglist__92393);
var event_type = cljs.core.first(arglist__92393);
var p__92390 = cljs.core.rest(arglist__92393);
return fire_BANG___delegate(node,event_type,p__92390);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map