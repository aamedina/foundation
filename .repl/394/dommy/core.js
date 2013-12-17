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
dommy.core.text = (function text(elem){var or__7847__auto__ = elem.textContent;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
var append_BANG___2 = (function (parent,child){var G__23194 = dommy.template.__GT_node_like.call(null,parent);G__23194.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__23194;
});
var append_BANG___3 = (function() { 
var G__23199__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23195_23200 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23196_23201 = null;var count__23197_23202 = 0;var i__23198_23203 = 0;while(true){
if((i__23198_23203 < count__23197_23202))
{var c_23204 = cljs.core._nth.call(null,chunk__23196_23201,i__23198_23203);append_BANG_.call(null,parent__$1,c_23204);
{
var G__23205 = seq__23195_23200;
var G__23206 = chunk__23196_23201;
var G__23207 = count__23197_23202;
var G__23208 = (i__23198_23203 + 1);
seq__23195_23200 = G__23205;
chunk__23196_23201 = G__23206;
count__23197_23202 = G__23207;
i__23198_23203 = G__23208;
continue;
}
} else
{var temp__4092__auto___23209 = cljs.core.seq.call(null,seq__23195_23200);if(temp__4092__auto___23209)
{var seq__23195_23210__$1 = temp__4092__auto___23209;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23195_23210__$1))
{var c__8571__auto___23211 = cljs.core.chunk_first.call(null,seq__23195_23210__$1);{
var G__23212 = cljs.core.chunk_rest.call(null,seq__23195_23210__$1);
var G__23213 = c__8571__auto___23211;
var G__23214 = cljs.core.count.call(null,c__8571__auto___23211);
var G__23215 = 0;
seq__23195_23200 = G__23212;
chunk__23196_23201 = G__23213;
count__23197_23202 = G__23214;
i__23198_23203 = G__23215;
continue;
}
} else
{var c_23216 = cljs.core.first.call(null,seq__23195_23210__$1);append_BANG_.call(null,parent__$1,c_23216);
{
var G__23217 = cljs.core.next.call(null,seq__23195_23210__$1);
var G__23218 = null;
var G__23219 = 0;
var G__23220 = 0;
seq__23195_23200 = G__23217;
chunk__23196_23201 = G__23218;
count__23197_23202 = G__23219;
i__23198_23203 = G__23220;
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
var G__23199 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23199__delegate.call(this,parent,child,more_children);};
G__23199.cljs$lang$maxFixedArity = 2;
G__23199.cljs$lang$applyTo = (function (arglist__23221){
var parent = cljs.core.first(arglist__23221);
arglist__23221 = cljs.core.next(arglist__23221);
var child = cljs.core.first(arglist__23221);
var more_children = cljs.core.rest(arglist__23221);
return G__23199__delegate(parent,child,more_children);
});
G__23199.cljs$core$IFn$_invoke$arity$variadic = G__23199__delegate;
return G__23199;
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
var G__23230__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__23226_23231 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__23227_23232 = null;var count__23228_23233 = 0;var i__23229_23234 = 0;while(true){
if((i__23229_23234 < count__23228_23233))
{var c_23235 = cljs.core._nth.call(null,chunk__23227_23232,i__23229_23234);prepend_BANG_.call(null,parent__$1,c_23235);
{
var G__23236 = seq__23226_23231;
var G__23237 = chunk__23227_23232;
var G__23238 = count__23228_23233;
var G__23239 = (i__23229_23234 + 1);
seq__23226_23231 = G__23236;
chunk__23227_23232 = G__23237;
count__23228_23233 = G__23238;
i__23229_23234 = G__23239;
continue;
}
} else
{var temp__4092__auto___23240 = cljs.core.seq.call(null,seq__23226_23231);if(temp__4092__auto___23240)
{var seq__23226_23241__$1 = temp__4092__auto___23240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23226_23241__$1))
{var c__8571__auto___23242 = cljs.core.chunk_first.call(null,seq__23226_23241__$1);{
var G__23243 = cljs.core.chunk_rest.call(null,seq__23226_23241__$1);
var G__23244 = c__8571__auto___23242;
var G__23245 = cljs.core.count.call(null,c__8571__auto___23242);
var G__23246 = 0;
seq__23226_23231 = G__23243;
chunk__23227_23232 = G__23244;
count__23228_23233 = G__23245;
i__23229_23234 = G__23246;
continue;
}
} else
{var c_23247 = cljs.core.first.call(null,seq__23226_23241__$1);prepend_BANG_.call(null,parent__$1,c_23247);
{
var G__23248 = cljs.core.next.call(null,seq__23226_23241__$1);
var G__23249 = null;
var G__23250 = 0;
var G__23251 = 0;
seq__23226_23231 = G__23248;
chunk__23227_23232 = G__23249;
count__23228_23233 = G__23250;
i__23229_23234 = G__23251;
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
var G__23230 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23230__delegate.call(this,parent,child,more_children);};
G__23230.cljs$lang$maxFixedArity = 2;
G__23230.cljs$lang$applyTo = (function (arglist__23252){
var parent = cljs.core.first(arglist__23252);
arglist__23252 = cljs.core.next(arglist__23252);
var child = cljs.core.first(arglist__23252);
var more_children = cljs.core.rest(arglist__23252);
return G__23230__delegate(parent,child,more_children);
});
G__23230.cljs$core$IFn$_invoke$arity$variadic = G__23230__delegate;
return G__23230;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___23253 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___23253))
{var next_23254 = temp__4090__auto___23253;parent.insertBefore(actual_node,next_23254);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__23256 = dommy.template.__GT_node_like.call(null,parent);G__23256.innerHTML = "";
dommy.core.append_BANG_.call(null,G__23256,node_like);
return G__23256;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__23258 = elem__$1.parentNode;G__23258.removeChild(elem__$1);
return G__23258;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23264){var vec__23265 = p__23264;var k = cljs.core.nth.call(null,vec__23265,0,null);var v = cljs.core.nth.call(null,vec__23265,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t23266 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t23266 = (function (v,k,vec__23265,p__23264,container,key_selectors_map,template,selector_map,meta23267){
this.v = v;
this.k = k;
this.vec__23265 = vec__23265;
this.p__23264 = p__23264;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta23267 = meta23267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t23266.cljs$lang$type = true;
dommy.core.t23266.cljs$lang$ctorStr = "dommy.core/t23266";
dommy.core.t23266.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"dommy.core/t23266");
});
dommy.core.t23266.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t23266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23268){var self__ = this;
var _23268__$1 = this;return self__.meta23267;
});
dommy.core.t23266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23268,meta23267__$1){var self__ = this;
var _23268__$1 = this;return (new dommy.core.t23266(self__.v,self__.k,self__.vec__23265,self__.p__23264,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta23267__$1));
});
dommy.core.__GT_t23266 = (function __GT_t23266(v__$1,k__$1,vec__23265__$1,p__23264__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta23267){return (new dommy.core.t23266(v__$1,k__$1,vec__23265__$1,p__23264__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta23267));
});
}
return (new dommy.core.t23266(v,k,vec__23265,p__23264,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__23269_SHARP_){return p1__23269_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__23270_SHARP_){return !((p1__23270_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23271){var vec__23272 = p__23271;var special_mouse_event = cljs.core.nth.call(null,vec__23272,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__23272,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__7847__auto__ = event.selectedTarget;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__7835__auto__ = related_target;if(cljs.core.truth_(and__7835__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__7835__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__7835__auto__ = selected_target;if(cljs.core.truth_(and__7835__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__7835__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__7847__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__23273){
var elem = cljs.core.first(arglist__23273);
arglist__23273 = cljs.core.next(arglist__23273);
var f = cljs.core.first(arglist__23273);
var args = cljs.core.rest(arglist__23273);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__23274_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__23274_SHARP_));
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
var vec__23298_23321 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_23322 = cljs.core.nth.call(null,vec__23298_23321,0,null);var selector_23323 = cljs.core.nth.call(null,vec__23298_23321,1,null);var seq__23299_23324 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__23306_23325 = null;var count__23307_23326 = 0;var i__23308_23327 = 0;while(true){
if((i__23308_23327 < count__23307_23326))
{var vec__23315_23328 = cljs.core._nth.call(null,chunk__23306_23325,i__23308_23327);var orig_type_23329 = cljs.core.nth.call(null,vec__23315_23328,0,null);var f_23330 = cljs.core.nth.call(null,vec__23315_23328,1,null);var seq__23309_23331 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23329,new cljs.core.PersistentArrayMap.fromArray([orig_type_23329,cljs.core.identity], true, false)));var chunk__23311_23332 = null;var count__23312_23333 = 0;var i__23313_23334 = 0;while(true){
if((i__23313_23334 < count__23312_23333))
{var vec__23316_23335 = cljs.core._nth.call(null,chunk__23311_23332,i__23313_23334);var actual_type_23336 = cljs.core.nth.call(null,vec__23316_23335,0,null);var factory_23337 = cljs.core.nth.call(null,vec__23316_23335,1,null);var canonical_f_23338 = (cljs.core.truth_(selector_23323)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23322,selector_23323):cljs.core.identity).call(null,factory_23337.call(null,f_23330));dommy.core.update_event_listeners_BANG_.call(null,elem_23322,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23323,actual_type_23336,f_23330], null),canonical_f_23338);
if(cljs.core.truth_(elem_23322.addEventListener))
{elem_23322.addEventListener(cljs.core.name.call(null,actual_type_23336),canonical_f_23338);
} else
{elem_23322.attachEvent(cljs.core.name.call(null,actual_type_23336),canonical_f_23338);
}
{
var G__23339 = seq__23309_23331;
var G__23340 = chunk__23311_23332;
var G__23341 = count__23312_23333;
var G__23342 = (i__23313_23334 + 1);
seq__23309_23331 = G__23339;
chunk__23311_23332 = G__23340;
count__23312_23333 = G__23341;
i__23313_23334 = G__23342;
continue;
}
} else
{var temp__4092__auto___23343 = cljs.core.seq.call(null,seq__23309_23331);if(temp__4092__auto___23343)
{var seq__23309_23344__$1 = temp__4092__auto___23343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23309_23344__$1))
{var c__8571__auto___23345 = cljs.core.chunk_first.call(null,seq__23309_23344__$1);{
var G__23346 = cljs.core.chunk_rest.call(null,seq__23309_23344__$1);
var G__23347 = c__8571__auto___23345;
var G__23348 = cljs.core.count.call(null,c__8571__auto___23345);
var G__23349 = 0;
seq__23309_23331 = G__23346;
chunk__23311_23332 = G__23347;
count__23312_23333 = G__23348;
i__23313_23334 = G__23349;
continue;
}
} else
{var vec__23317_23350 = cljs.core.first.call(null,seq__23309_23344__$1);var actual_type_23351 = cljs.core.nth.call(null,vec__23317_23350,0,null);var factory_23352 = cljs.core.nth.call(null,vec__23317_23350,1,null);var canonical_f_23353 = (cljs.core.truth_(selector_23323)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23322,selector_23323):cljs.core.identity).call(null,factory_23352.call(null,f_23330));dommy.core.update_event_listeners_BANG_.call(null,elem_23322,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23323,actual_type_23351,f_23330], null),canonical_f_23353);
if(cljs.core.truth_(elem_23322.addEventListener))
{elem_23322.addEventListener(cljs.core.name.call(null,actual_type_23351),canonical_f_23353);
} else
{elem_23322.attachEvent(cljs.core.name.call(null,actual_type_23351),canonical_f_23353);
}
{
var G__23354 = cljs.core.next.call(null,seq__23309_23344__$1);
var G__23355 = null;
var G__23356 = 0;
var G__23357 = 0;
seq__23309_23331 = G__23354;
chunk__23311_23332 = G__23355;
count__23312_23333 = G__23356;
i__23313_23334 = G__23357;
continue;
}
}
} else
{}
}
break;
}
{
var G__23358 = seq__23299_23324;
var G__23359 = chunk__23306_23325;
var G__23360 = count__23307_23326;
var G__23361 = (i__23308_23327 + 1);
seq__23299_23324 = G__23358;
chunk__23306_23325 = G__23359;
count__23307_23326 = G__23360;
i__23308_23327 = G__23361;
continue;
}
} else
{var temp__4092__auto___23362 = cljs.core.seq.call(null,seq__23299_23324);if(temp__4092__auto___23362)
{var seq__23299_23363__$1 = temp__4092__auto___23362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23299_23363__$1))
{var c__8571__auto___23364 = cljs.core.chunk_first.call(null,seq__23299_23363__$1);{
var G__23365 = cljs.core.chunk_rest.call(null,seq__23299_23363__$1);
var G__23366 = c__8571__auto___23364;
var G__23367 = cljs.core.count.call(null,c__8571__auto___23364);
var G__23368 = 0;
seq__23299_23324 = G__23365;
chunk__23306_23325 = G__23366;
count__23307_23326 = G__23367;
i__23308_23327 = G__23368;
continue;
}
} else
{var vec__23318_23369 = cljs.core.first.call(null,seq__23299_23363__$1);var orig_type_23370 = cljs.core.nth.call(null,vec__23318_23369,0,null);var f_23371 = cljs.core.nth.call(null,vec__23318_23369,1,null);var seq__23300_23372 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23370,new cljs.core.PersistentArrayMap.fromArray([orig_type_23370,cljs.core.identity], true, false)));var chunk__23302_23373 = null;var count__23303_23374 = 0;var i__23304_23375 = 0;while(true){
if((i__23304_23375 < count__23303_23374))
{var vec__23319_23376 = cljs.core._nth.call(null,chunk__23302_23373,i__23304_23375);var actual_type_23377 = cljs.core.nth.call(null,vec__23319_23376,0,null);var factory_23378 = cljs.core.nth.call(null,vec__23319_23376,1,null);var canonical_f_23379 = (cljs.core.truth_(selector_23323)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23322,selector_23323):cljs.core.identity).call(null,factory_23378.call(null,f_23371));dommy.core.update_event_listeners_BANG_.call(null,elem_23322,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23323,actual_type_23377,f_23371], null),canonical_f_23379);
if(cljs.core.truth_(elem_23322.addEventListener))
{elem_23322.addEventListener(cljs.core.name.call(null,actual_type_23377),canonical_f_23379);
} else
{elem_23322.attachEvent(cljs.core.name.call(null,actual_type_23377),canonical_f_23379);
}
{
var G__23380 = seq__23300_23372;
var G__23381 = chunk__23302_23373;
var G__23382 = count__23303_23374;
var G__23383 = (i__23304_23375 + 1);
seq__23300_23372 = G__23380;
chunk__23302_23373 = G__23381;
count__23303_23374 = G__23382;
i__23304_23375 = G__23383;
continue;
}
} else
{var temp__4092__auto___23384__$1 = cljs.core.seq.call(null,seq__23300_23372);if(temp__4092__auto___23384__$1)
{var seq__23300_23385__$1 = temp__4092__auto___23384__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23300_23385__$1))
{var c__8571__auto___23386 = cljs.core.chunk_first.call(null,seq__23300_23385__$1);{
var G__23387 = cljs.core.chunk_rest.call(null,seq__23300_23385__$1);
var G__23388 = c__8571__auto___23386;
var G__23389 = cljs.core.count.call(null,c__8571__auto___23386);
var G__23390 = 0;
seq__23300_23372 = G__23387;
chunk__23302_23373 = G__23388;
count__23303_23374 = G__23389;
i__23304_23375 = G__23390;
continue;
}
} else
{var vec__23320_23391 = cljs.core.first.call(null,seq__23300_23385__$1);var actual_type_23392 = cljs.core.nth.call(null,vec__23320_23391,0,null);var factory_23393 = cljs.core.nth.call(null,vec__23320_23391,1,null);var canonical_f_23394 = (cljs.core.truth_(selector_23323)?cljs.core.partial.call(null,dommy.core.live_listener,elem_23322,selector_23323):cljs.core.identity).call(null,factory_23393.call(null,f_23371));dommy.core.update_event_listeners_BANG_.call(null,elem_23322,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23323,actual_type_23392,f_23371], null),canonical_f_23394);
if(cljs.core.truth_(elem_23322.addEventListener))
{elem_23322.addEventListener(cljs.core.name.call(null,actual_type_23392),canonical_f_23394);
} else
{elem_23322.attachEvent(cljs.core.name.call(null,actual_type_23392),canonical_f_23394);
}
{
var G__23395 = cljs.core.next.call(null,seq__23300_23385__$1);
var G__23396 = null;
var G__23397 = 0;
var G__23398 = 0;
seq__23300_23372 = G__23395;
chunk__23302_23373 = G__23396;
count__23303_23374 = G__23397;
i__23304_23375 = G__23398;
continue;
}
}
} else
{}
}
break;
}
{
var G__23399 = cljs.core.next.call(null,seq__23299_23363__$1);
var G__23400 = null;
var G__23401 = 0;
var G__23402 = 0;
seq__23299_23324 = G__23399;
chunk__23306_23325 = G__23400;
count__23307_23326 = G__23401;
i__23308_23327 = G__23402;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__23403){
var elem_sel = cljs.core.first(arglist__23403);
var type_fs = cljs.core.rest(arglist__23403);
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
var vec__23427_23450 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_23451 = cljs.core.nth.call(null,vec__23427_23450,0,null);var selector_23452 = cljs.core.nth.call(null,vec__23427_23450,1,null);var seq__23428_23453 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__23435_23454 = null;var count__23436_23455 = 0;var i__23437_23456 = 0;while(true){
if((i__23437_23456 < count__23436_23455))
{var vec__23444_23457 = cljs.core._nth.call(null,chunk__23435_23454,i__23437_23456);var orig_type_23458 = cljs.core.nth.call(null,vec__23444_23457,0,null);var f_23459 = cljs.core.nth.call(null,vec__23444_23457,1,null);var seq__23438_23460 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23458,new cljs.core.PersistentArrayMap.fromArray([orig_type_23458,cljs.core.identity], true, false)));var chunk__23440_23461 = null;var count__23441_23462 = 0;var i__23442_23463 = 0;while(true){
if((i__23442_23463 < count__23441_23462))
{var vec__23445_23464 = cljs.core._nth.call(null,chunk__23440_23461,i__23442_23463);var actual_type_23465 = cljs.core.nth.call(null,vec__23445_23464,0,null);var __23466 = cljs.core.nth.call(null,vec__23445_23464,1,null);var keys_23467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23452,actual_type_23465,f_23459], null);var canonical_f_23468 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23451),keys_23467);dommy.core.update_event_listeners_BANG_.call(null,elem_23451,dommy.utils.dissoc_in,keys_23467);
if(cljs.core.truth_(elem_23451.removeEventListener))
{elem_23451.removeEventListener(cljs.core.name.call(null,actual_type_23465),canonical_f_23468);
} else
{elem_23451.detachEvent(cljs.core.name.call(null,actual_type_23465),canonical_f_23468);
}
{
var G__23469 = seq__23438_23460;
var G__23470 = chunk__23440_23461;
var G__23471 = count__23441_23462;
var G__23472 = (i__23442_23463 + 1);
seq__23438_23460 = G__23469;
chunk__23440_23461 = G__23470;
count__23441_23462 = G__23471;
i__23442_23463 = G__23472;
continue;
}
} else
{var temp__4092__auto___23473 = cljs.core.seq.call(null,seq__23438_23460);if(temp__4092__auto___23473)
{var seq__23438_23474__$1 = temp__4092__auto___23473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23438_23474__$1))
{var c__8571__auto___23475 = cljs.core.chunk_first.call(null,seq__23438_23474__$1);{
var G__23476 = cljs.core.chunk_rest.call(null,seq__23438_23474__$1);
var G__23477 = c__8571__auto___23475;
var G__23478 = cljs.core.count.call(null,c__8571__auto___23475);
var G__23479 = 0;
seq__23438_23460 = G__23476;
chunk__23440_23461 = G__23477;
count__23441_23462 = G__23478;
i__23442_23463 = G__23479;
continue;
}
} else
{var vec__23446_23480 = cljs.core.first.call(null,seq__23438_23474__$1);var actual_type_23481 = cljs.core.nth.call(null,vec__23446_23480,0,null);var __23482 = cljs.core.nth.call(null,vec__23446_23480,1,null);var keys_23483 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23452,actual_type_23481,f_23459], null);var canonical_f_23484 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23451),keys_23483);dommy.core.update_event_listeners_BANG_.call(null,elem_23451,dommy.utils.dissoc_in,keys_23483);
if(cljs.core.truth_(elem_23451.removeEventListener))
{elem_23451.removeEventListener(cljs.core.name.call(null,actual_type_23481),canonical_f_23484);
} else
{elem_23451.detachEvent(cljs.core.name.call(null,actual_type_23481),canonical_f_23484);
}
{
var G__23485 = cljs.core.next.call(null,seq__23438_23474__$1);
var G__23486 = null;
var G__23487 = 0;
var G__23488 = 0;
seq__23438_23460 = G__23485;
chunk__23440_23461 = G__23486;
count__23441_23462 = G__23487;
i__23442_23463 = G__23488;
continue;
}
}
} else
{}
}
break;
}
{
var G__23489 = seq__23428_23453;
var G__23490 = chunk__23435_23454;
var G__23491 = count__23436_23455;
var G__23492 = (i__23437_23456 + 1);
seq__23428_23453 = G__23489;
chunk__23435_23454 = G__23490;
count__23436_23455 = G__23491;
i__23437_23456 = G__23492;
continue;
}
} else
{var temp__4092__auto___23493 = cljs.core.seq.call(null,seq__23428_23453);if(temp__4092__auto___23493)
{var seq__23428_23494__$1 = temp__4092__auto___23493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23428_23494__$1))
{var c__8571__auto___23495 = cljs.core.chunk_first.call(null,seq__23428_23494__$1);{
var G__23496 = cljs.core.chunk_rest.call(null,seq__23428_23494__$1);
var G__23497 = c__8571__auto___23495;
var G__23498 = cljs.core.count.call(null,c__8571__auto___23495);
var G__23499 = 0;
seq__23428_23453 = G__23496;
chunk__23435_23454 = G__23497;
count__23436_23455 = G__23498;
i__23437_23456 = G__23499;
continue;
}
} else
{var vec__23447_23500 = cljs.core.first.call(null,seq__23428_23494__$1);var orig_type_23501 = cljs.core.nth.call(null,vec__23447_23500,0,null);var f_23502 = cljs.core.nth.call(null,vec__23447_23500,1,null);var seq__23429_23503 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_23501,new cljs.core.PersistentArrayMap.fromArray([orig_type_23501,cljs.core.identity], true, false)));var chunk__23431_23504 = null;var count__23432_23505 = 0;var i__23433_23506 = 0;while(true){
if((i__23433_23506 < count__23432_23505))
{var vec__23448_23507 = cljs.core._nth.call(null,chunk__23431_23504,i__23433_23506);var actual_type_23508 = cljs.core.nth.call(null,vec__23448_23507,0,null);var __23509 = cljs.core.nth.call(null,vec__23448_23507,1,null);var keys_23510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23452,actual_type_23508,f_23502], null);var canonical_f_23511 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23451),keys_23510);dommy.core.update_event_listeners_BANG_.call(null,elem_23451,dommy.utils.dissoc_in,keys_23510);
if(cljs.core.truth_(elem_23451.removeEventListener))
{elem_23451.removeEventListener(cljs.core.name.call(null,actual_type_23508),canonical_f_23511);
} else
{elem_23451.detachEvent(cljs.core.name.call(null,actual_type_23508),canonical_f_23511);
}
{
var G__23512 = seq__23429_23503;
var G__23513 = chunk__23431_23504;
var G__23514 = count__23432_23505;
var G__23515 = (i__23433_23506 + 1);
seq__23429_23503 = G__23512;
chunk__23431_23504 = G__23513;
count__23432_23505 = G__23514;
i__23433_23506 = G__23515;
continue;
}
} else
{var temp__4092__auto___23516__$1 = cljs.core.seq.call(null,seq__23429_23503);if(temp__4092__auto___23516__$1)
{var seq__23429_23517__$1 = temp__4092__auto___23516__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23429_23517__$1))
{var c__8571__auto___23518 = cljs.core.chunk_first.call(null,seq__23429_23517__$1);{
var G__23519 = cljs.core.chunk_rest.call(null,seq__23429_23517__$1);
var G__23520 = c__8571__auto___23518;
var G__23521 = cljs.core.count.call(null,c__8571__auto___23518);
var G__23522 = 0;
seq__23429_23503 = G__23519;
chunk__23431_23504 = G__23520;
count__23432_23505 = G__23521;
i__23433_23506 = G__23522;
continue;
}
} else
{var vec__23449_23523 = cljs.core.first.call(null,seq__23429_23517__$1);var actual_type_23524 = cljs.core.nth.call(null,vec__23449_23523,0,null);var __23525 = cljs.core.nth.call(null,vec__23449_23523,1,null);var keys_23526 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_23452,actual_type_23524,f_23502], null);var canonical_f_23527 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_23451),keys_23526);dommy.core.update_event_listeners_BANG_.call(null,elem_23451,dommy.utils.dissoc_in,keys_23526);
if(cljs.core.truth_(elem_23451.removeEventListener))
{elem_23451.removeEventListener(cljs.core.name.call(null,actual_type_23524),canonical_f_23527);
} else
{elem_23451.detachEvent(cljs.core.name.call(null,actual_type_23524),canonical_f_23527);
}
{
var G__23528 = cljs.core.next.call(null,seq__23429_23517__$1);
var G__23529 = null;
var G__23530 = 0;
var G__23531 = 0;
seq__23429_23503 = G__23528;
chunk__23431_23504 = G__23529;
count__23432_23505 = G__23530;
i__23433_23506 = G__23531;
continue;
}
}
} else
{}
}
break;
}
{
var G__23532 = cljs.core.next.call(null,seq__23428_23494__$1);
var G__23533 = null;
var G__23534 = 0;
var G__23535 = 0;
seq__23428_23453 = G__23532;
chunk__23435_23454 = G__23533;
count__23436_23455 = G__23534;
i__23437_23456 = G__23535;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__23536){
var elem_sel = cljs.core.first(arglist__23536);
var type_fs = cljs.core.rest(arglist__23536);
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
var vec__23544_23551 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_23552 = cljs.core.nth.call(null,vec__23544_23551,0,null);var selector_23553 = cljs.core.nth.call(null,vec__23544_23551,1,null);var seq__23545_23554 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__23546_23555 = null;var count__23547_23556 = 0;var i__23548_23557 = 0;while(true){
if((i__23548_23557 < count__23547_23556))
{var vec__23549_23558 = cljs.core._nth.call(null,chunk__23546_23555,i__23548_23557);var type_23559 = cljs.core.nth.call(null,vec__23549_23558,0,null);var f_23560 = cljs.core.nth.call(null,vec__23549_23558,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_23559,((function (seq__23545_23554,chunk__23546_23555,count__23547_23556,i__23548_23557,vec__23549_23558,type_23559,f_23560){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_23559,this_fn);
return f_23560.call(null,e);
});})(seq__23545_23554,chunk__23546_23555,count__23547_23556,i__23548_23557,vec__23549_23558,type_23559,f_23560))
);
{
var G__23561 = seq__23545_23554;
var G__23562 = chunk__23546_23555;
var G__23563 = count__23547_23556;
var G__23564 = (i__23548_23557 + 1);
seq__23545_23554 = G__23561;
chunk__23546_23555 = G__23562;
count__23547_23556 = G__23563;
i__23548_23557 = G__23564;
continue;
}
} else
{var temp__4092__auto___23565 = cljs.core.seq.call(null,seq__23545_23554);if(temp__4092__auto___23565)
{var seq__23545_23566__$1 = temp__4092__auto___23565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23545_23566__$1))
{var c__8571__auto___23567 = cljs.core.chunk_first.call(null,seq__23545_23566__$1);{
var G__23568 = cljs.core.chunk_rest.call(null,seq__23545_23566__$1);
var G__23569 = c__8571__auto___23567;
var G__23570 = cljs.core.count.call(null,c__8571__auto___23567);
var G__23571 = 0;
seq__23545_23554 = G__23568;
chunk__23546_23555 = G__23569;
count__23547_23556 = G__23570;
i__23548_23557 = G__23571;
continue;
}
} else
{var vec__23550_23572 = cljs.core.first.call(null,seq__23545_23566__$1);var type_23573 = cljs.core.nth.call(null,vec__23550_23572,0,null);var f_23574 = cljs.core.nth.call(null,vec__23550_23572,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_23573,((function (seq__23545_23554,chunk__23546_23555,count__23547_23556,i__23548_23557,vec__23550_23572,type_23573,f_23574,seq__23545_23566__$1,temp__4092__auto___23565){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_23573,this_fn);
return f_23574.call(null,e);
});})(seq__23545_23554,chunk__23546_23555,count__23547_23556,i__23548_23557,vec__23550_23572,type_23573,f_23574,seq__23545_23566__$1,temp__4092__auto___23565))
);
{
var G__23575 = cljs.core.next.call(null,seq__23545_23566__$1);
var G__23576 = null;
var G__23577 = 0;
var G__23578 = 0;
seq__23545_23554 = G__23575;
chunk__23546_23555 = G__23576;
count__23547_23556 = G__23577;
i__23548_23557 = G__23578;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__23579){
var elem_sel = cljs.core.first(arglist__23579);
var type_fs = cljs.core.rest(arglist__23579);
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
var fire_BANG___delegate = function (node,event_type,p__23580){var vec__23582 = p__23580;var update_event_BANG_ = cljs.core.nth.call(null,vec__23582,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__7847__auto__ = update_event_BANG_;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
var p__23580 = null;if (arguments.length > 2) {
  p__23580 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__23580);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__23583){
var node = cljs.core.first(arglist__23583);
arglist__23583 = cljs.core.next(arglist__23583);
var event_type = cljs.core.first(arglist__23583);
var p__23580 = cljs.core.rest(arglist__23583);
return fire_BANG___delegate(node,event_type,p__23580);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
