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
dommy.core.text = (function text(elem){var or__13788__auto__ = elem.textContent;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
var append_BANG___2 = (function (parent,child){var G__43282 = dommy.template.__GT_node_like.call(null,parent);G__43282.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__43282;
});
var append_BANG___3 = (function() { 
var G__43287__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__43283_43288 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__43284_43289 = null;var count__43285_43290 = 0;var i__43286_43291 = 0;while(true){
if((i__43286_43291 < count__43285_43290))
{var c_43292 = cljs.core._nth.call(null,chunk__43284_43289,i__43286_43291);append_BANG_.call(null,parent__$1,c_43292);
{
var G__43293 = seq__43283_43288;
var G__43294 = chunk__43284_43289;
var G__43295 = count__43285_43290;
var G__43296 = (i__43286_43291 + 1);
seq__43283_43288 = G__43293;
chunk__43284_43289 = G__43294;
count__43285_43290 = G__43295;
i__43286_43291 = G__43296;
continue;
}
} else
{var temp__4092__auto___43297 = cljs.core.seq.call(null,seq__43283_43288);if(temp__4092__auto___43297)
{var seq__43283_43298__$1 = temp__4092__auto___43297;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43283_43298__$1))
{var c__14512__auto___43299 = cljs.core.chunk_first.call(null,seq__43283_43298__$1);{
var G__43300 = cljs.core.chunk_rest.call(null,seq__43283_43298__$1);
var G__43301 = c__14512__auto___43299;
var G__43302 = cljs.core.count.call(null,c__14512__auto___43299);
var G__43303 = 0;
seq__43283_43288 = G__43300;
chunk__43284_43289 = G__43301;
count__43285_43290 = G__43302;
i__43286_43291 = G__43303;
continue;
}
} else
{var c_43304 = cljs.core.first.call(null,seq__43283_43298__$1);append_BANG_.call(null,parent__$1,c_43304);
{
var G__43305 = cljs.core.next.call(null,seq__43283_43298__$1);
var G__43306 = null;
var G__43307 = 0;
var G__43308 = 0;
seq__43283_43288 = G__43305;
chunk__43284_43289 = G__43306;
count__43285_43290 = G__43307;
i__43286_43291 = G__43308;
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
var G__43287 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43287__delegate.call(this,parent,child,more_children);};
G__43287.cljs$lang$maxFixedArity = 2;
G__43287.cljs$lang$applyTo = (function (arglist__43309){
var parent = cljs.core.first(arglist__43309);
arglist__43309 = cljs.core.next(arglist__43309);
var child = cljs.core.first(arglist__43309);
var more_children = cljs.core.rest(arglist__43309);
return G__43287__delegate(parent,child,more_children);
});
G__43287.cljs$core$IFn$_invoke$arity$variadic = G__43287__delegate;
return G__43287;
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
var G__43318__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__43314_43319 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__43315_43320 = null;var count__43316_43321 = 0;var i__43317_43322 = 0;while(true){
if((i__43317_43322 < count__43316_43321))
{var c_43323 = cljs.core._nth.call(null,chunk__43315_43320,i__43317_43322);prepend_BANG_.call(null,parent__$1,c_43323);
{
var G__43324 = seq__43314_43319;
var G__43325 = chunk__43315_43320;
var G__43326 = count__43316_43321;
var G__43327 = (i__43317_43322 + 1);
seq__43314_43319 = G__43324;
chunk__43315_43320 = G__43325;
count__43316_43321 = G__43326;
i__43317_43322 = G__43327;
continue;
}
} else
{var temp__4092__auto___43328 = cljs.core.seq.call(null,seq__43314_43319);if(temp__4092__auto___43328)
{var seq__43314_43329__$1 = temp__4092__auto___43328;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43314_43329__$1))
{var c__14512__auto___43330 = cljs.core.chunk_first.call(null,seq__43314_43329__$1);{
var G__43331 = cljs.core.chunk_rest.call(null,seq__43314_43329__$1);
var G__43332 = c__14512__auto___43330;
var G__43333 = cljs.core.count.call(null,c__14512__auto___43330);
var G__43334 = 0;
seq__43314_43319 = G__43331;
chunk__43315_43320 = G__43332;
count__43316_43321 = G__43333;
i__43317_43322 = G__43334;
continue;
}
} else
{var c_43335 = cljs.core.first.call(null,seq__43314_43329__$1);prepend_BANG_.call(null,parent__$1,c_43335);
{
var G__43336 = cljs.core.next.call(null,seq__43314_43329__$1);
var G__43337 = null;
var G__43338 = 0;
var G__43339 = 0;
seq__43314_43319 = G__43336;
chunk__43315_43320 = G__43337;
count__43316_43321 = G__43338;
i__43317_43322 = G__43339;
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
var G__43318 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43318__delegate.call(this,parent,child,more_children);};
G__43318.cljs$lang$maxFixedArity = 2;
G__43318.cljs$lang$applyTo = (function (arglist__43340){
var parent = cljs.core.first(arglist__43340);
arglist__43340 = cljs.core.next(arglist__43340);
var child = cljs.core.first(arglist__43340);
var more_children = cljs.core.rest(arglist__43340);
return G__43318__delegate(parent,child,more_children);
});
G__43318.cljs$core$IFn$_invoke$arity$variadic = G__43318__delegate;
return G__43318;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___43341 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___43341))
{var next_43342 = temp__4090__auto___43341;parent.insertBefore(actual_node,next_43342);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__43344 = dommy.template.__GT_node_like.call(null,parent);G__43344.innerHTML = "";
dommy.core.append_BANG_.call(null,G__43344,node_like);
return G__43344;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__43346 = elem__$1.parentNode;G__43346.removeChild(elem__$1);
return G__43346;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43352){var vec__43353 = p__43352;var k = cljs.core.nth.call(null,vec__43353,0,null);var v = cljs.core.nth.call(null,vec__43353,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t43354 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t43354 = (function (v,k,vec__43353,p__43352,container,key_selectors_map,template,selector_map,meta43355){
this.v = v;
this.k = k;
this.vec__43353 = vec__43353;
this.p__43352 = p__43352;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta43355 = meta43355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t43354.cljs$lang$type = true;
dommy.core.t43354.cljs$lang$ctorStr = "dommy.core/t43354";
dommy.core.t43354.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"dommy.core/t43354");
});
dommy.core.t43354.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t43354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43356){var self__ = this;
var _43356__$1 = this;return self__.meta43355;
});
dommy.core.t43354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43356,meta43355__$1){var self__ = this;
var _43356__$1 = this;return (new dommy.core.t43354(self__.v,self__.k,self__.vec__43353,self__.p__43352,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta43355__$1));
});
dommy.core.__GT_t43354 = (function __GT_t43354(v__$1,k__$1,vec__43353__$1,p__43352__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta43355){return (new dommy.core.t43354(v__$1,k__$1,vec__43353__$1,p__43352__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta43355));
});
}
return (new dommy.core.t43354(v,k,vec__43353,p__43352,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__43357_SHARP_){return p1__43357_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__43358_SHARP_){return !((p1__43358_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43359){var vec__43360 = p__43359;var special_mouse_event = cljs.core.nth.call(null,vec__43360,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__43360,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13788__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13776__auto__ = related_target;if(cljs.core.truth_(and__13776__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13776__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13776__auto__ = selected_target;if(cljs.core.truth_(and__13776__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13776__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13788__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__43361){
var elem = cljs.core.first(arglist__43361);
arglist__43361 = cljs.core.next(arglist__43361);
var f = cljs.core.first(arglist__43361);
var args = cljs.core.rest(arglist__43361);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__43362_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__43362_SHARP_));
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
var vec__43386_43409 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_43410 = cljs.core.nth.call(null,vec__43386_43409,0,null);var selector_43411 = cljs.core.nth.call(null,vec__43386_43409,1,null);var seq__43387_43412 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__43394_43413 = null;var count__43395_43414 = 0;var i__43396_43415 = 0;while(true){
if((i__43396_43415 < count__43395_43414))
{var vec__43403_43416 = cljs.core._nth.call(null,chunk__43394_43413,i__43396_43415);var orig_type_43417 = cljs.core.nth.call(null,vec__43403_43416,0,null);var f_43418 = cljs.core.nth.call(null,vec__43403_43416,1,null);var seq__43397_43419 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43417,new cljs.core.PersistentArrayMap.fromArray([orig_type_43417,cljs.core.identity], true, false)));var chunk__43399_43420 = null;var count__43400_43421 = 0;var i__43401_43422 = 0;while(true){
if((i__43401_43422 < count__43400_43421))
{var vec__43404_43423 = cljs.core._nth.call(null,chunk__43399_43420,i__43401_43422);var actual_type_43424 = cljs.core.nth.call(null,vec__43404_43423,0,null);var factory_43425 = cljs.core.nth.call(null,vec__43404_43423,1,null);var canonical_f_43426 = (cljs.core.truth_(selector_43411)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43410,selector_43411):cljs.core.identity).call(null,factory_43425.call(null,f_43418));dommy.core.update_event_listeners_BANG_.call(null,elem_43410,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43411,actual_type_43424,f_43418], null),canonical_f_43426);
if(cljs.core.truth_(elem_43410.addEventListener))
{elem_43410.addEventListener(cljs.core.name.call(null,actual_type_43424),canonical_f_43426);
} else
{elem_43410.attachEvent(cljs.core.name.call(null,actual_type_43424),canonical_f_43426);
}
{
var G__43427 = seq__43397_43419;
var G__43428 = chunk__43399_43420;
var G__43429 = count__43400_43421;
var G__43430 = (i__43401_43422 + 1);
seq__43397_43419 = G__43427;
chunk__43399_43420 = G__43428;
count__43400_43421 = G__43429;
i__43401_43422 = G__43430;
continue;
}
} else
{var temp__4092__auto___43431 = cljs.core.seq.call(null,seq__43397_43419);if(temp__4092__auto___43431)
{var seq__43397_43432__$1 = temp__4092__auto___43431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43397_43432__$1))
{var c__14512__auto___43433 = cljs.core.chunk_first.call(null,seq__43397_43432__$1);{
var G__43434 = cljs.core.chunk_rest.call(null,seq__43397_43432__$1);
var G__43435 = c__14512__auto___43433;
var G__43436 = cljs.core.count.call(null,c__14512__auto___43433);
var G__43437 = 0;
seq__43397_43419 = G__43434;
chunk__43399_43420 = G__43435;
count__43400_43421 = G__43436;
i__43401_43422 = G__43437;
continue;
}
} else
{var vec__43405_43438 = cljs.core.first.call(null,seq__43397_43432__$1);var actual_type_43439 = cljs.core.nth.call(null,vec__43405_43438,0,null);var factory_43440 = cljs.core.nth.call(null,vec__43405_43438,1,null);var canonical_f_43441 = (cljs.core.truth_(selector_43411)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43410,selector_43411):cljs.core.identity).call(null,factory_43440.call(null,f_43418));dommy.core.update_event_listeners_BANG_.call(null,elem_43410,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43411,actual_type_43439,f_43418], null),canonical_f_43441);
if(cljs.core.truth_(elem_43410.addEventListener))
{elem_43410.addEventListener(cljs.core.name.call(null,actual_type_43439),canonical_f_43441);
} else
{elem_43410.attachEvent(cljs.core.name.call(null,actual_type_43439),canonical_f_43441);
}
{
var G__43442 = cljs.core.next.call(null,seq__43397_43432__$1);
var G__43443 = null;
var G__43444 = 0;
var G__43445 = 0;
seq__43397_43419 = G__43442;
chunk__43399_43420 = G__43443;
count__43400_43421 = G__43444;
i__43401_43422 = G__43445;
continue;
}
}
} else
{}
}
break;
}
{
var G__43446 = seq__43387_43412;
var G__43447 = chunk__43394_43413;
var G__43448 = count__43395_43414;
var G__43449 = (i__43396_43415 + 1);
seq__43387_43412 = G__43446;
chunk__43394_43413 = G__43447;
count__43395_43414 = G__43448;
i__43396_43415 = G__43449;
continue;
}
} else
{var temp__4092__auto___43450 = cljs.core.seq.call(null,seq__43387_43412);if(temp__4092__auto___43450)
{var seq__43387_43451__$1 = temp__4092__auto___43450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43387_43451__$1))
{var c__14512__auto___43452 = cljs.core.chunk_first.call(null,seq__43387_43451__$1);{
var G__43453 = cljs.core.chunk_rest.call(null,seq__43387_43451__$1);
var G__43454 = c__14512__auto___43452;
var G__43455 = cljs.core.count.call(null,c__14512__auto___43452);
var G__43456 = 0;
seq__43387_43412 = G__43453;
chunk__43394_43413 = G__43454;
count__43395_43414 = G__43455;
i__43396_43415 = G__43456;
continue;
}
} else
{var vec__43406_43457 = cljs.core.first.call(null,seq__43387_43451__$1);var orig_type_43458 = cljs.core.nth.call(null,vec__43406_43457,0,null);var f_43459 = cljs.core.nth.call(null,vec__43406_43457,1,null);var seq__43388_43460 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43458,new cljs.core.PersistentArrayMap.fromArray([orig_type_43458,cljs.core.identity], true, false)));var chunk__43390_43461 = null;var count__43391_43462 = 0;var i__43392_43463 = 0;while(true){
if((i__43392_43463 < count__43391_43462))
{var vec__43407_43464 = cljs.core._nth.call(null,chunk__43390_43461,i__43392_43463);var actual_type_43465 = cljs.core.nth.call(null,vec__43407_43464,0,null);var factory_43466 = cljs.core.nth.call(null,vec__43407_43464,1,null);var canonical_f_43467 = (cljs.core.truth_(selector_43411)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43410,selector_43411):cljs.core.identity).call(null,factory_43466.call(null,f_43459));dommy.core.update_event_listeners_BANG_.call(null,elem_43410,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43411,actual_type_43465,f_43459], null),canonical_f_43467);
if(cljs.core.truth_(elem_43410.addEventListener))
{elem_43410.addEventListener(cljs.core.name.call(null,actual_type_43465),canonical_f_43467);
} else
{elem_43410.attachEvent(cljs.core.name.call(null,actual_type_43465),canonical_f_43467);
}
{
var G__43468 = seq__43388_43460;
var G__43469 = chunk__43390_43461;
var G__43470 = count__43391_43462;
var G__43471 = (i__43392_43463 + 1);
seq__43388_43460 = G__43468;
chunk__43390_43461 = G__43469;
count__43391_43462 = G__43470;
i__43392_43463 = G__43471;
continue;
}
} else
{var temp__4092__auto___43472__$1 = cljs.core.seq.call(null,seq__43388_43460);if(temp__4092__auto___43472__$1)
{var seq__43388_43473__$1 = temp__4092__auto___43472__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43388_43473__$1))
{var c__14512__auto___43474 = cljs.core.chunk_first.call(null,seq__43388_43473__$1);{
var G__43475 = cljs.core.chunk_rest.call(null,seq__43388_43473__$1);
var G__43476 = c__14512__auto___43474;
var G__43477 = cljs.core.count.call(null,c__14512__auto___43474);
var G__43478 = 0;
seq__43388_43460 = G__43475;
chunk__43390_43461 = G__43476;
count__43391_43462 = G__43477;
i__43392_43463 = G__43478;
continue;
}
} else
{var vec__43408_43479 = cljs.core.first.call(null,seq__43388_43473__$1);var actual_type_43480 = cljs.core.nth.call(null,vec__43408_43479,0,null);var factory_43481 = cljs.core.nth.call(null,vec__43408_43479,1,null);var canonical_f_43482 = (cljs.core.truth_(selector_43411)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43410,selector_43411):cljs.core.identity).call(null,factory_43481.call(null,f_43459));dommy.core.update_event_listeners_BANG_.call(null,elem_43410,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43411,actual_type_43480,f_43459], null),canonical_f_43482);
if(cljs.core.truth_(elem_43410.addEventListener))
{elem_43410.addEventListener(cljs.core.name.call(null,actual_type_43480),canonical_f_43482);
} else
{elem_43410.attachEvent(cljs.core.name.call(null,actual_type_43480),canonical_f_43482);
}
{
var G__43483 = cljs.core.next.call(null,seq__43388_43473__$1);
var G__43484 = null;
var G__43485 = 0;
var G__43486 = 0;
seq__43388_43460 = G__43483;
chunk__43390_43461 = G__43484;
count__43391_43462 = G__43485;
i__43392_43463 = G__43486;
continue;
}
}
} else
{}
}
break;
}
{
var G__43487 = cljs.core.next.call(null,seq__43387_43451__$1);
var G__43488 = null;
var G__43489 = 0;
var G__43490 = 0;
seq__43387_43412 = G__43487;
chunk__43394_43413 = G__43488;
count__43395_43414 = G__43489;
i__43396_43415 = G__43490;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__43491){
var elem_sel = cljs.core.first(arglist__43491);
var type_fs = cljs.core.rest(arglist__43491);
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
var vec__43515_43538 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_43539 = cljs.core.nth.call(null,vec__43515_43538,0,null);var selector_43540 = cljs.core.nth.call(null,vec__43515_43538,1,null);var seq__43516_43541 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__43523_43542 = null;var count__43524_43543 = 0;var i__43525_43544 = 0;while(true){
if((i__43525_43544 < count__43524_43543))
{var vec__43532_43545 = cljs.core._nth.call(null,chunk__43523_43542,i__43525_43544);var orig_type_43546 = cljs.core.nth.call(null,vec__43532_43545,0,null);var f_43547 = cljs.core.nth.call(null,vec__43532_43545,1,null);var seq__43526_43548 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43546,new cljs.core.PersistentArrayMap.fromArray([orig_type_43546,cljs.core.identity], true, false)));var chunk__43528_43549 = null;var count__43529_43550 = 0;var i__43530_43551 = 0;while(true){
if((i__43530_43551 < count__43529_43550))
{var vec__43533_43552 = cljs.core._nth.call(null,chunk__43528_43549,i__43530_43551);var actual_type_43553 = cljs.core.nth.call(null,vec__43533_43552,0,null);var __43554 = cljs.core.nth.call(null,vec__43533_43552,1,null);var keys_43555 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43540,actual_type_43553,f_43547], null);var canonical_f_43556 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43539),keys_43555);dommy.core.update_event_listeners_BANG_.call(null,elem_43539,dommy.utils.dissoc_in,keys_43555);
if(cljs.core.truth_(elem_43539.removeEventListener))
{elem_43539.removeEventListener(cljs.core.name.call(null,actual_type_43553),canonical_f_43556);
} else
{elem_43539.detachEvent(cljs.core.name.call(null,actual_type_43553),canonical_f_43556);
}
{
var G__43557 = seq__43526_43548;
var G__43558 = chunk__43528_43549;
var G__43559 = count__43529_43550;
var G__43560 = (i__43530_43551 + 1);
seq__43526_43548 = G__43557;
chunk__43528_43549 = G__43558;
count__43529_43550 = G__43559;
i__43530_43551 = G__43560;
continue;
}
} else
{var temp__4092__auto___43561 = cljs.core.seq.call(null,seq__43526_43548);if(temp__4092__auto___43561)
{var seq__43526_43562__$1 = temp__4092__auto___43561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43526_43562__$1))
{var c__14512__auto___43563 = cljs.core.chunk_first.call(null,seq__43526_43562__$1);{
var G__43564 = cljs.core.chunk_rest.call(null,seq__43526_43562__$1);
var G__43565 = c__14512__auto___43563;
var G__43566 = cljs.core.count.call(null,c__14512__auto___43563);
var G__43567 = 0;
seq__43526_43548 = G__43564;
chunk__43528_43549 = G__43565;
count__43529_43550 = G__43566;
i__43530_43551 = G__43567;
continue;
}
} else
{var vec__43534_43568 = cljs.core.first.call(null,seq__43526_43562__$1);var actual_type_43569 = cljs.core.nth.call(null,vec__43534_43568,0,null);var __43570 = cljs.core.nth.call(null,vec__43534_43568,1,null);var keys_43571 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43540,actual_type_43569,f_43547], null);var canonical_f_43572 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43539),keys_43571);dommy.core.update_event_listeners_BANG_.call(null,elem_43539,dommy.utils.dissoc_in,keys_43571);
if(cljs.core.truth_(elem_43539.removeEventListener))
{elem_43539.removeEventListener(cljs.core.name.call(null,actual_type_43569),canonical_f_43572);
} else
{elem_43539.detachEvent(cljs.core.name.call(null,actual_type_43569),canonical_f_43572);
}
{
var G__43573 = cljs.core.next.call(null,seq__43526_43562__$1);
var G__43574 = null;
var G__43575 = 0;
var G__43576 = 0;
seq__43526_43548 = G__43573;
chunk__43528_43549 = G__43574;
count__43529_43550 = G__43575;
i__43530_43551 = G__43576;
continue;
}
}
} else
{}
}
break;
}
{
var G__43577 = seq__43516_43541;
var G__43578 = chunk__43523_43542;
var G__43579 = count__43524_43543;
var G__43580 = (i__43525_43544 + 1);
seq__43516_43541 = G__43577;
chunk__43523_43542 = G__43578;
count__43524_43543 = G__43579;
i__43525_43544 = G__43580;
continue;
}
} else
{var temp__4092__auto___43581 = cljs.core.seq.call(null,seq__43516_43541);if(temp__4092__auto___43581)
{var seq__43516_43582__$1 = temp__4092__auto___43581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43516_43582__$1))
{var c__14512__auto___43583 = cljs.core.chunk_first.call(null,seq__43516_43582__$1);{
var G__43584 = cljs.core.chunk_rest.call(null,seq__43516_43582__$1);
var G__43585 = c__14512__auto___43583;
var G__43586 = cljs.core.count.call(null,c__14512__auto___43583);
var G__43587 = 0;
seq__43516_43541 = G__43584;
chunk__43523_43542 = G__43585;
count__43524_43543 = G__43586;
i__43525_43544 = G__43587;
continue;
}
} else
{var vec__43535_43588 = cljs.core.first.call(null,seq__43516_43582__$1);var orig_type_43589 = cljs.core.nth.call(null,vec__43535_43588,0,null);var f_43590 = cljs.core.nth.call(null,vec__43535_43588,1,null);var seq__43517_43591 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43589,new cljs.core.PersistentArrayMap.fromArray([orig_type_43589,cljs.core.identity], true, false)));var chunk__43519_43592 = null;var count__43520_43593 = 0;var i__43521_43594 = 0;while(true){
if((i__43521_43594 < count__43520_43593))
{var vec__43536_43595 = cljs.core._nth.call(null,chunk__43519_43592,i__43521_43594);var actual_type_43596 = cljs.core.nth.call(null,vec__43536_43595,0,null);var __43597 = cljs.core.nth.call(null,vec__43536_43595,1,null);var keys_43598 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43540,actual_type_43596,f_43590], null);var canonical_f_43599 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43539),keys_43598);dommy.core.update_event_listeners_BANG_.call(null,elem_43539,dommy.utils.dissoc_in,keys_43598);
if(cljs.core.truth_(elem_43539.removeEventListener))
{elem_43539.removeEventListener(cljs.core.name.call(null,actual_type_43596),canonical_f_43599);
} else
{elem_43539.detachEvent(cljs.core.name.call(null,actual_type_43596),canonical_f_43599);
}
{
var G__43600 = seq__43517_43591;
var G__43601 = chunk__43519_43592;
var G__43602 = count__43520_43593;
var G__43603 = (i__43521_43594 + 1);
seq__43517_43591 = G__43600;
chunk__43519_43592 = G__43601;
count__43520_43593 = G__43602;
i__43521_43594 = G__43603;
continue;
}
} else
{var temp__4092__auto___43604__$1 = cljs.core.seq.call(null,seq__43517_43591);if(temp__4092__auto___43604__$1)
{var seq__43517_43605__$1 = temp__4092__auto___43604__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43517_43605__$1))
{var c__14512__auto___43606 = cljs.core.chunk_first.call(null,seq__43517_43605__$1);{
var G__43607 = cljs.core.chunk_rest.call(null,seq__43517_43605__$1);
var G__43608 = c__14512__auto___43606;
var G__43609 = cljs.core.count.call(null,c__14512__auto___43606);
var G__43610 = 0;
seq__43517_43591 = G__43607;
chunk__43519_43592 = G__43608;
count__43520_43593 = G__43609;
i__43521_43594 = G__43610;
continue;
}
} else
{var vec__43537_43611 = cljs.core.first.call(null,seq__43517_43605__$1);var actual_type_43612 = cljs.core.nth.call(null,vec__43537_43611,0,null);var __43613 = cljs.core.nth.call(null,vec__43537_43611,1,null);var keys_43614 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43540,actual_type_43612,f_43590], null);var canonical_f_43615 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43539),keys_43614);dommy.core.update_event_listeners_BANG_.call(null,elem_43539,dommy.utils.dissoc_in,keys_43614);
if(cljs.core.truth_(elem_43539.removeEventListener))
{elem_43539.removeEventListener(cljs.core.name.call(null,actual_type_43612),canonical_f_43615);
} else
{elem_43539.detachEvent(cljs.core.name.call(null,actual_type_43612),canonical_f_43615);
}
{
var G__43616 = cljs.core.next.call(null,seq__43517_43605__$1);
var G__43617 = null;
var G__43618 = 0;
var G__43619 = 0;
seq__43517_43591 = G__43616;
chunk__43519_43592 = G__43617;
count__43520_43593 = G__43618;
i__43521_43594 = G__43619;
continue;
}
}
} else
{}
}
break;
}
{
var G__43620 = cljs.core.next.call(null,seq__43516_43582__$1);
var G__43621 = null;
var G__43622 = 0;
var G__43623 = 0;
seq__43516_43541 = G__43620;
chunk__43523_43542 = G__43621;
count__43524_43543 = G__43622;
i__43525_43544 = G__43623;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__43624){
var elem_sel = cljs.core.first(arglist__43624);
var type_fs = cljs.core.rest(arglist__43624);
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
var vec__43632_43639 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_43640 = cljs.core.nth.call(null,vec__43632_43639,0,null);var selector_43641 = cljs.core.nth.call(null,vec__43632_43639,1,null);var seq__43633_43642 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__43634_43643 = null;var count__43635_43644 = 0;var i__43636_43645 = 0;while(true){
if((i__43636_43645 < count__43635_43644))
{var vec__43637_43646 = cljs.core._nth.call(null,chunk__43634_43643,i__43636_43645);var type_43647 = cljs.core.nth.call(null,vec__43637_43646,0,null);var f_43648 = cljs.core.nth.call(null,vec__43637_43646,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_43647,((function (seq__43633_43642,chunk__43634_43643,count__43635_43644,i__43636_43645,vec__43637_43646,type_43647,f_43648){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_43647,this_fn);
return f_43648.call(null,e);
});})(seq__43633_43642,chunk__43634_43643,count__43635_43644,i__43636_43645,vec__43637_43646,type_43647,f_43648))
);
{
var G__43649 = seq__43633_43642;
var G__43650 = chunk__43634_43643;
var G__43651 = count__43635_43644;
var G__43652 = (i__43636_43645 + 1);
seq__43633_43642 = G__43649;
chunk__43634_43643 = G__43650;
count__43635_43644 = G__43651;
i__43636_43645 = G__43652;
continue;
}
} else
{var temp__4092__auto___43653 = cljs.core.seq.call(null,seq__43633_43642);if(temp__4092__auto___43653)
{var seq__43633_43654__$1 = temp__4092__auto___43653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43633_43654__$1))
{var c__14512__auto___43655 = cljs.core.chunk_first.call(null,seq__43633_43654__$1);{
var G__43656 = cljs.core.chunk_rest.call(null,seq__43633_43654__$1);
var G__43657 = c__14512__auto___43655;
var G__43658 = cljs.core.count.call(null,c__14512__auto___43655);
var G__43659 = 0;
seq__43633_43642 = G__43656;
chunk__43634_43643 = G__43657;
count__43635_43644 = G__43658;
i__43636_43645 = G__43659;
continue;
}
} else
{var vec__43638_43660 = cljs.core.first.call(null,seq__43633_43654__$1);var type_43661 = cljs.core.nth.call(null,vec__43638_43660,0,null);var f_43662 = cljs.core.nth.call(null,vec__43638_43660,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_43661,((function (seq__43633_43642,chunk__43634_43643,count__43635_43644,i__43636_43645,vec__43638_43660,type_43661,f_43662,seq__43633_43654__$1,temp__4092__auto___43653){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_43661,this_fn);
return f_43662.call(null,e);
});})(seq__43633_43642,chunk__43634_43643,count__43635_43644,i__43636_43645,vec__43638_43660,type_43661,f_43662,seq__43633_43654__$1,temp__4092__auto___43653))
);
{
var G__43663 = cljs.core.next.call(null,seq__43633_43654__$1);
var G__43664 = null;
var G__43665 = 0;
var G__43666 = 0;
seq__43633_43642 = G__43663;
chunk__43634_43643 = G__43664;
count__43635_43644 = G__43665;
i__43636_43645 = G__43666;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__43667){
var elem_sel = cljs.core.first(arglist__43667);
var type_fs = cljs.core.rest(arglist__43667);
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
var fire_BANG___delegate = function (node,event_type,p__43668){var vec__43670 = p__43668;var update_event_BANG_ = cljs.core.nth.call(null,vec__43670,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13788__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
var p__43668 = null;if (arguments.length > 2) {
  p__43668 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__43668);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__43671){
var node = cljs.core.first(arglist__43671);
arglist__43671 = cljs.core.next(arglist__43671);
var event_type = cljs.core.first(arglist__43671);
var p__43668 = cljs.core.rest(arglist__43671);
return fire_BANG___delegate(node,event_type,p__43668);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map