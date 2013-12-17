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
var append_BANG___2 = (function (parent,child){var G__13027 = dommy.template.__GT_node_like.call(null,parent);G__13027.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__13027;
});
var append_BANG___3 = (function() { 
var G__13032__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13028_13033 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13029_13034 = null;var count__13030_13035 = 0;var i__13031_13036 = 0;while(true){
if((i__13031_13036 < count__13030_13035))
{var c_13037 = cljs.core._nth.call(null,chunk__13029_13034,i__13031_13036);append_BANG_.call(null,parent__$1,c_13037);
{
var G__13038 = seq__13028_13033;
var G__13039 = chunk__13029_13034;
var G__13040 = count__13030_13035;
var G__13041 = (i__13031_13036 + 1);
seq__13028_13033 = G__13038;
chunk__13029_13034 = G__13039;
count__13030_13035 = G__13040;
i__13031_13036 = G__13041;
continue;
}
} else
{var temp__4092__auto___13042 = cljs.core.seq.call(null,seq__13028_13033);if(temp__4092__auto___13042)
{var seq__13028_13043__$1 = temp__4092__auto___13042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13028_13043__$1))
{var c__8927__auto___13044 = cljs.core.chunk_first.call(null,seq__13028_13043__$1);{
var G__13045 = cljs.core.chunk_rest.call(null,seq__13028_13043__$1);
var G__13046 = c__8927__auto___13044;
var G__13047 = cljs.core.count.call(null,c__8927__auto___13044);
var G__13048 = 0;
seq__13028_13033 = G__13045;
chunk__13029_13034 = G__13046;
count__13030_13035 = G__13047;
i__13031_13036 = G__13048;
continue;
}
} else
{var c_13049 = cljs.core.first.call(null,seq__13028_13043__$1);append_BANG_.call(null,parent__$1,c_13049);
{
var G__13050 = cljs.core.next.call(null,seq__13028_13043__$1);
var G__13051 = null;
var G__13052 = 0;
var G__13053 = 0;
seq__13028_13033 = G__13050;
chunk__13029_13034 = G__13051;
count__13030_13035 = G__13052;
i__13031_13036 = G__13053;
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
var G__13032 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13032__delegate.call(this,parent,child,more_children);};
G__13032.cljs$lang$maxFixedArity = 2;
G__13032.cljs$lang$applyTo = (function (arglist__13054){
var parent = cljs.core.first(arglist__13054);
arglist__13054 = cljs.core.next(arglist__13054);
var child = cljs.core.first(arglist__13054);
var more_children = cljs.core.rest(arglist__13054);
return G__13032__delegate(parent,child,more_children);
});
G__13032.cljs$core$IFn$_invoke$arity$variadic = G__13032__delegate;
return G__13032;
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
var G__13063__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13059_13064 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13060_13065 = null;var count__13061_13066 = 0;var i__13062_13067 = 0;while(true){
if((i__13062_13067 < count__13061_13066))
{var c_13068 = cljs.core._nth.call(null,chunk__13060_13065,i__13062_13067);prepend_BANG_.call(null,parent__$1,c_13068);
{
var G__13069 = seq__13059_13064;
var G__13070 = chunk__13060_13065;
var G__13071 = count__13061_13066;
var G__13072 = (i__13062_13067 + 1);
seq__13059_13064 = G__13069;
chunk__13060_13065 = G__13070;
count__13061_13066 = G__13071;
i__13062_13067 = G__13072;
continue;
}
} else
{var temp__4092__auto___13073 = cljs.core.seq.call(null,seq__13059_13064);if(temp__4092__auto___13073)
{var seq__13059_13074__$1 = temp__4092__auto___13073;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13059_13074__$1))
{var c__8927__auto___13075 = cljs.core.chunk_first.call(null,seq__13059_13074__$1);{
var G__13076 = cljs.core.chunk_rest.call(null,seq__13059_13074__$1);
var G__13077 = c__8927__auto___13075;
var G__13078 = cljs.core.count.call(null,c__8927__auto___13075);
var G__13079 = 0;
seq__13059_13064 = G__13076;
chunk__13060_13065 = G__13077;
count__13061_13066 = G__13078;
i__13062_13067 = G__13079;
continue;
}
} else
{var c_13080 = cljs.core.first.call(null,seq__13059_13074__$1);prepend_BANG_.call(null,parent__$1,c_13080);
{
var G__13081 = cljs.core.next.call(null,seq__13059_13074__$1);
var G__13082 = null;
var G__13083 = 0;
var G__13084 = 0;
seq__13059_13064 = G__13081;
chunk__13060_13065 = G__13082;
count__13061_13066 = G__13083;
i__13062_13067 = G__13084;
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
var G__13063 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13063__delegate.call(this,parent,child,more_children);};
G__13063.cljs$lang$maxFixedArity = 2;
G__13063.cljs$lang$applyTo = (function (arglist__13085){
var parent = cljs.core.first(arglist__13085);
arglist__13085 = cljs.core.next(arglist__13085);
var child = cljs.core.first(arglist__13085);
var more_children = cljs.core.rest(arglist__13085);
return G__13063__delegate(parent,child,more_children);
});
G__13063.cljs$core$IFn$_invoke$arity$variadic = G__13063__delegate;
return G__13063;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___13086 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___13086))
{var next_13087 = temp__4090__auto___13086;parent.insertBefore(actual_node,next_13087);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__13089 = dommy.template.__GT_node_like.call(null,parent);G__13089.innerHTML = "";
dommy.core.append_BANG_.call(null,G__13089,node_like);
return G__13089;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__13091 = elem__$1.parentNode;G__13091.removeChild(elem__$1);
return G__13091;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13097){var vec__13098 = p__13097;var k = cljs.core.nth.call(null,vec__13098,0,null);var v = cljs.core.nth.call(null,vec__13098,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t13099 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t13099 = (function (v,k,vec__13098,p__13097,container,key_selectors_map,template,selector_map,meta13100){
this.v = v;
this.k = k;
this.vec__13098 = vec__13098;
this.p__13097 = p__13097;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta13100 = meta13100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t13099.cljs$lang$type = true;
dommy.core.t13099.cljs$lang$ctorStr = "dommy.core/t13099";
dommy.core.t13099.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"dommy.core/t13099");
});
dommy.core.t13099.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t13099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13101){var self__ = this;
var _13101__$1 = this;return self__.meta13100;
});
dommy.core.t13099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13101,meta13100__$1){var self__ = this;
var _13101__$1 = this;return (new dommy.core.t13099(self__.v,self__.k,self__.vec__13098,self__.p__13097,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta13100__$1));
});
dommy.core.__GT_t13099 = (function __GT_t13099(v__$1,k__$1,vec__13098__$1,p__13097__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13100){return (new dommy.core.t13099(v__$1,k__$1,vec__13098__$1,p__13097__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13100));
});
}
return (new dommy.core.t13099(v,k,vec__13098,p__13097,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__13102_SHARP_){return p1__13102_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__13103_SHARP_){return !((p1__13103_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13104){var vec__13105 = p__13104;var special_mouse_event = cljs.core.nth.call(null,vec__13105,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__13105,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8198__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8198__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13106){
var elem = cljs.core.first(arglist__13106);
arglist__13106 = cljs.core.next(arglist__13106);
var f = cljs.core.first(arglist__13106);
var args = cljs.core.rest(arglist__13106);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__13107_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__13107_SHARP_));
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
var vec__13131_13154 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13155 = cljs.core.nth.call(null,vec__13131_13154,0,null);var selector_13156 = cljs.core.nth.call(null,vec__13131_13154,1,null);var seq__13132_13157 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13139_13158 = null;var count__13140_13159 = 0;var i__13141_13160 = 0;while(true){
if((i__13141_13160 < count__13140_13159))
{var vec__13148_13161 = cljs.core._nth.call(null,chunk__13139_13158,i__13141_13160);var orig_type_13162 = cljs.core.nth.call(null,vec__13148_13161,0,null);var f_13163 = cljs.core.nth.call(null,vec__13148_13161,1,null);var seq__13142_13164 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13162,new cljs.core.PersistentArrayMap.fromArray([orig_type_13162,cljs.core.identity], true, false)));var chunk__13144_13165 = null;var count__13145_13166 = 0;var i__13146_13167 = 0;while(true){
if((i__13146_13167 < count__13145_13166))
{var vec__13149_13168 = cljs.core._nth.call(null,chunk__13144_13165,i__13146_13167);var actual_type_13169 = cljs.core.nth.call(null,vec__13149_13168,0,null);var factory_13170 = cljs.core.nth.call(null,vec__13149_13168,1,null);var canonical_f_13171 = (cljs.core.truth_(selector_13156)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13155,selector_13156):cljs.core.identity).call(null,factory_13170.call(null,f_13163));dommy.core.update_event_listeners_BANG_.call(null,elem_13155,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13156,actual_type_13169,f_13163], null),canonical_f_13171);
if(cljs.core.truth_(elem_13155.addEventListener))
{elem_13155.addEventListener(cljs.core.name.call(null,actual_type_13169),canonical_f_13171);
} else
{elem_13155.attachEvent(cljs.core.name.call(null,actual_type_13169),canonical_f_13171);
}
{
var G__13172 = seq__13142_13164;
var G__13173 = chunk__13144_13165;
var G__13174 = count__13145_13166;
var G__13175 = (i__13146_13167 + 1);
seq__13142_13164 = G__13172;
chunk__13144_13165 = G__13173;
count__13145_13166 = G__13174;
i__13146_13167 = G__13175;
continue;
}
} else
{var temp__4092__auto___13176 = cljs.core.seq.call(null,seq__13142_13164);if(temp__4092__auto___13176)
{var seq__13142_13177__$1 = temp__4092__auto___13176;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13142_13177__$1))
{var c__8927__auto___13178 = cljs.core.chunk_first.call(null,seq__13142_13177__$1);{
var G__13179 = cljs.core.chunk_rest.call(null,seq__13142_13177__$1);
var G__13180 = c__8927__auto___13178;
var G__13181 = cljs.core.count.call(null,c__8927__auto___13178);
var G__13182 = 0;
seq__13142_13164 = G__13179;
chunk__13144_13165 = G__13180;
count__13145_13166 = G__13181;
i__13146_13167 = G__13182;
continue;
}
} else
{var vec__13150_13183 = cljs.core.first.call(null,seq__13142_13177__$1);var actual_type_13184 = cljs.core.nth.call(null,vec__13150_13183,0,null);var factory_13185 = cljs.core.nth.call(null,vec__13150_13183,1,null);var canonical_f_13186 = (cljs.core.truth_(selector_13156)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13155,selector_13156):cljs.core.identity).call(null,factory_13185.call(null,f_13163));dommy.core.update_event_listeners_BANG_.call(null,elem_13155,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13156,actual_type_13184,f_13163], null),canonical_f_13186);
if(cljs.core.truth_(elem_13155.addEventListener))
{elem_13155.addEventListener(cljs.core.name.call(null,actual_type_13184),canonical_f_13186);
} else
{elem_13155.attachEvent(cljs.core.name.call(null,actual_type_13184),canonical_f_13186);
}
{
var G__13187 = cljs.core.next.call(null,seq__13142_13177__$1);
var G__13188 = null;
var G__13189 = 0;
var G__13190 = 0;
seq__13142_13164 = G__13187;
chunk__13144_13165 = G__13188;
count__13145_13166 = G__13189;
i__13146_13167 = G__13190;
continue;
}
}
} else
{}
}
break;
}
{
var G__13191 = seq__13132_13157;
var G__13192 = chunk__13139_13158;
var G__13193 = count__13140_13159;
var G__13194 = (i__13141_13160 + 1);
seq__13132_13157 = G__13191;
chunk__13139_13158 = G__13192;
count__13140_13159 = G__13193;
i__13141_13160 = G__13194;
continue;
}
} else
{var temp__4092__auto___13195 = cljs.core.seq.call(null,seq__13132_13157);if(temp__4092__auto___13195)
{var seq__13132_13196__$1 = temp__4092__auto___13195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13132_13196__$1))
{var c__8927__auto___13197 = cljs.core.chunk_first.call(null,seq__13132_13196__$1);{
var G__13198 = cljs.core.chunk_rest.call(null,seq__13132_13196__$1);
var G__13199 = c__8927__auto___13197;
var G__13200 = cljs.core.count.call(null,c__8927__auto___13197);
var G__13201 = 0;
seq__13132_13157 = G__13198;
chunk__13139_13158 = G__13199;
count__13140_13159 = G__13200;
i__13141_13160 = G__13201;
continue;
}
} else
{var vec__13151_13202 = cljs.core.first.call(null,seq__13132_13196__$1);var orig_type_13203 = cljs.core.nth.call(null,vec__13151_13202,0,null);var f_13204 = cljs.core.nth.call(null,vec__13151_13202,1,null);var seq__13133_13205 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13203,new cljs.core.PersistentArrayMap.fromArray([orig_type_13203,cljs.core.identity], true, false)));var chunk__13135_13206 = null;var count__13136_13207 = 0;var i__13137_13208 = 0;while(true){
if((i__13137_13208 < count__13136_13207))
{var vec__13152_13209 = cljs.core._nth.call(null,chunk__13135_13206,i__13137_13208);var actual_type_13210 = cljs.core.nth.call(null,vec__13152_13209,0,null);var factory_13211 = cljs.core.nth.call(null,vec__13152_13209,1,null);var canonical_f_13212 = (cljs.core.truth_(selector_13156)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13155,selector_13156):cljs.core.identity).call(null,factory_13211.call(null,f_13204));dommy.core.update_event_listeners_BANG_.call(null,elem_13155,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13156,actual_type_13210,f_13204], null),canonical_f_13212);
if(cljs.core.truth_(elem_13155.addEventListener))
{elem_13155.addEventListener(cljs.core.name.call(null,actual_type_13210),canonical_f_13212);
} else
{elem_13155.attachEvent(cljs.core.name.call(null,actual_type_13210),canonical_f_13212);
}
{
var G__13213 = seq__13133_13205;
var G__13214 = chunk__13135_13206;
var G__13215 = count__13136_13207;
var G__13216 = (i__13137_13208 + 1);
seq__13133_13205 = G__13213;
chunk__13135_13206 = G__13214;
count__13136_13207 = G__13215;
i__13137_13208 = G__13216;
continue;
}
} else
{var temp__4092__auto___13217__$1 = cljs.core.seq.call(null,seq__13133_13205);if(temp__4092__auto___13217__$1)
{var seq__13133_13218__$1 = temp__4092__auto___13217__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13133_13218__$1))
{var c__8927__auto___13219 = cljs.core.chunk_first.call(null,seq__13133_13218__$1);{
var G__13220 = cljs.core.chunk_rest.call(null,seq__13133_13218__$1);
var G__13221 = c__8927__auto___13219;
var G__13222 = cljs.core.count.call(null,c__8927__auto___13219);
var G__13223 = 0;
seq__13133_13205 = G__13220;
chunk__13135_13206 = G__13221;
count__13136_13207 = G__13222;
i__13137_13208 = G__13223;
continue;
}
} else
{var vec__13153_13224 = cljs.core.first.call(null,seq__13133_13218__$1);var actual_type_13225 = cljs.core.nth.call(null,vec__13153_13224,0,null);var factory_13226 = cljs.core.nth.call(null,vec__13153_13224,1,null);var canonical_f_13227 = (cljs.core.truth_(selector_13156)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13155,selector_13156):cljs.core.identity).call(null,factory_13226.call(null,f_13204));dommy.core.update_event_listeners_BANG_.call(null,elem_13155,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13156,actual_type_13225,f_13204], null),canonical_f_13227);
if(cljs.core.truth_(elem_13155.addEventListener))
{elem_13155.addEventListener(cljs.core.name.call(null,actual_type_13225),canonical_f_13227);
} else
{elem_13155.attachEvent(cljs.core.name.call(null,actual_type_13225),canonical_f_13227);
}
{
var G__13228 = cljs.core.next.call(null,seq__13133_13218__$1);
var G__13229 = null;
var G__13230 = 0;
var G__13231 = 0;
seq__13133_13205 = G__13228;
chunk__13135_13206 = G__13229;
count__13136_13207 = G__13230;
i__13137_13208 = G__13231;
continue;
}
}
} else
{}
}
break;
}
{
var G__13232 = cljs.core.next.call(null,seq__13132_13196__$1);
var G__13233 = null;
var G__13234 = 0;
var G__13235 = 0;
seq__13132_13157 = G__13232;
chunk__13139_13158 = G__13233;
count__13140_13159 = G__13234;
i__13141_13160 = G__13235;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__13236){
var elem_sel = cljs.core.first(arglist__13236);
var type_fs = cljs.core.rest(arglist__13236);
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
var vec__13260_13283 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13284 = cljs.core.nth.call(null,vec__13260_13283,0,null);var selector_13285 = cljs.core.nth.call(null,vec__13260_13283,1,null);var seq__13261_13286 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13268_13287 = null;var count__13269_13288 = 0;var i__13270_13289 = 0;while(true){
if((i__13270_13289 < count__13269_13288))
{var vec__13277_13290 = cljs.core._nth.call(null,chunk__13268_13287,i__13270_13289);var orig_type_13291 = cljs.core.nth.call(null,vec__13277_13290,0,null);var f_13292 = cljs.core.nth.call(null,vec__13277_13290,1,null);var seq__13271_13293 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13291,new cljs.core.PersistentArrayMap.fromArray([orig_type_13291,cljs.core.identity], true, false)));var chunk__13273_13294 = null;var count__13274_13295 = 0;var i__13275_13296 = 0;while(true){
if((i__13275_13296 < count__13274_13295))
{var vec__13278_13297 = cljs.core._nth.call(null,chunk__13273_13294,i__13275_13296);var actual_type_13298 = cljs.core.nth.call(null,vec__13278_13297,0,null);var __13299 = cljs.core.nth.call(null,vec__13278_13297,1,null);var keys_13300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13285,actual_type_13298,f_13292], null);var canonical_f_13301 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13284),keys_13300);dommy.core.update_event_listeners_BANG_.call(null,elem_13284,dommy.utils.dissoc_in,keys_13300);
if(cljs.core.truth_(elem_13284.removeEventListener))
{elem_13284.removeEventListener(cljs.core.name.call(null,actual_type_13298),canonical_f_13301);
} else
{elem_13284.detachEvent(cljs.core.name.call(null,actual_type_13298),canonical_f_13301);
}
{
var G__13302 = seq__13271_13293;
var G__13303 = chunk__13273_13294;
var G__13304 = count__13274_13295;
var G__13305 = (i__13275_13296 + 1);
seq__13271_13293 = G__13302;
chunk__13273_13294 = G__13303;
count__13274_13295 = G__13304;
i__13275_13296 = G__13305;
continue;
}
} else
{var temp__4092__auto___13306 = cljs.core.seq.call(null,seq__13271_13293);if(temp__4092__auto___13306)
{var seq__13271_13307__$1 = temp__4092__auto___13306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13271_13307__$1))
{var c__8927__auto___13308 = cljs.core.chunk_first.call(null,seq__13271_13307__$1);{
var G__13309 = cljs.core.chunk_rest.call(null,seq__13271_13307__$1);
var G__13310 = c__8927__auto___13308;
var G__13311 = cljs.core.count.call(null,c__8927__auto___13308);
var G__13312 = 0;
seq__13271_13293 = G__13309;
chunk__13273_13294 = G__13310;
count__13274_13295 = G__13311;
i__13275_13296 = G__13312;
continue;
}
} else
{var vec__13279_13313 = cljs.core.first.call(null,seq__13271_13307__$1);var actual_type_13314 = cljs.core.nth.call(null,vec__13279_13313,0,null);var __13315 = cljs.core.nth.call(null,vec__13279_13313,1,null);var keys_13316 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13285,actual_type_13314,f_13292], null);var canonical_f_13317 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13284),keys_13316);dommy.core.update_event_listeners_BANG_.call(null,elem_13284,dommy.utils.dissoc_in,keys_13316);
if(cljs.core.truth_(elem_13284.removeEventListener))
{elem_13284.removeEventListener(cljs.core.name.call(null,actual_type_13314),canonical_f_13317);
} else
{elem_13284.detachEvent(cljs.core.name.call(null,actual_type_13314),canonical_f_13317);
}
{
var G__13318 = cljs.core.next.call(null,seq__13271_13307__$1);
var G__13319 = null;
var G__13320 = 0;
var G__13321 = 0;
seq__13271_13293 = G__13318;
chunk__13273_13294 = G__13319;
count__13274_13295 = G__13320;
i__13275_13296 = G__13321;
continue;
}
}
} else
{}
}
break;
}
{
var G__13322 = seq__13261_13286;
var G__13323 = chunk__13268_13287;
var G__13324 = count__13269_13288;
var G__13325 = (i__13270_13289 + 1);
seq__13261_13286 = G__13322;
chunk__13268_13287 = G__13323;
count__13269_13288 = G__13324;
i__13270_13289 = G__13325;
continue;
}
} else
{var temp__4092__auto___13326 = cljs.core.seq.call(null,seq__13261_13286);if(temp__4092__auto___13326)
{var seq__13261_13327__$1 = temp__4092__auto___13326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13261_13327__$1))
{var c__8927__auto___13328 = cljs.core.chunk_first.call(null,seq__13261_13327__$1);{
var G__13329 = cljs.core.chunk_rest.call(null,seq__13261_13327__$1);
var G__13330 = c__8927__auto___13328;
var G__13331 = cljs.core.count.call(null,c__8927__auto___13328);
var G__13332 = 0;
seq__13261_13286 = G__13329;
chunk__13268_13287 = G__13330;
count__13269_13288 = G__13331;
i__13270_13289 = G__13332;
continue;
}
} else
{var vec__13280_13333 = cljs.core.first.call(null,seq__13261_13327__$1);var orig_type_13334 = cljs.core.nth.call(null,vec__13280_13333,0,null);var f_13335 = cljs.core.nth.call(null,vec__13280_13333,1,null);var seq__13262_13336 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13334,new cljs.core.PersistentArrayMap.fromArray([orig_type_13334,cljs.core.identity], true, false)));var chunk__13264_13337 = null;var count__13265_13338 = 0;var i__13266_13339 = 0;while(true){
if((i__13266_13339 < count__13265_13338))
{var vec__13281_13340 = cljs.core._nth.call(null,chunk__13264_13337,i__13266_13339);var actual_type_13341 = cljs.core.nth.call(null,vec__13281_13340,0,null);var __13342 = cljs.core.nth.call(null,vec__13281_13340,1,null);var keys_13343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13285,actual_type_13341,f_13335], null);var canonical_f_13344 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13284),keys_13343);dommy.core.update_event_listeners_BANG_.call(null,elem_13284,dommy.utils.dissoc_in,keys_13343);
if(cljs.core.truth_(elem_13284.removeEventListener))
{elem_13284.removeEventListener(cljs.core.name.call(null,actual_type_13341),canonical_f_13344);
} else
{elem_13284.detachEvent(cljs.core.name.call(null,actual_type_13341),canonical_f_13344);
}
{
var G__13345 = seq__13262_13336;
var G__13346 = chunk__13264_13337;
var G__13347 = count__13265_13338;
var G__13348 = (i__13266_13339 + 1);
seq__13262_13336 = G__13345;
chunk__13264_13337 = G__13346;
count__13265_13338 = G__13347;
i__13266_13339 = G__13348;
continue;
}
} else
{var temp__4092__auto___13349__$1 = cljs.core.seq.call(null,seq__13262_13336);if(temp__4092__auto___13349__$1)
{var seq__13262_13350__$1 = temp__4092__auto___13349__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13262_13350__$1))
{var c__8927__auto___13351 = cljs.core.chunk_first.call(null,seq__13262_13350__$1);{
var G__13352 = cljs.core.chunk_rest.call(null,seq__13262_13350__$1);
var G__13353 = c__8927__auto___13351;
var G__13354 = cljs.core.count.call(null,c__8927__auto___13351);
var G__13355 = 0;
seq__13262_13336 = G__13352;
chunk__13264_13337 = G__13353;
count__13265_13338 = G__13354;
i__13266_13339 = G__13355;
continue;
}
} else
{var vec__13282_13356 = cljs.core.first.call(null,seq__13262_13350__$1);var actual_type_13357 = cljs.core.nth.call(null,vec__13282_13356,0,null);var __13358 = cljs.core.nth.call(null,vec__13282_13356,1,null);var keys_13359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13285,actual_type_13357,f_13335], null);var canonical_f_13360 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13284),keys_13359);dommy.core.update_event_listeners_BANG_.call(null,elem_13284,dommy.utils.dissoc_in,keys_13359);
if(cljs.core.truth_(elem_13284.removeEventListener))
{elem_13284.removeEventListener(cljs.core.name.call(null,actual_type_13357),canonical_f_13360);
} else
{elem_13284.detachEvent(cljs.core.name.call(null,actual_type_13357),canonical_f_13360);
}
{
var G__13361 = cljs.core.next.call(null,seq__13262_13350__$1);
var G__13362 = null;
var G__13363 = 0;
var G__13364 = 0;
seq__13262_13336 = G__13361;
chunk__13264_13337 = G__13362;
count__13265_13338 = G__13363;
i__13266_13339 = G__13364;
continue;
}
}
} else
{}
}
break;
}
{
var G__13365 = cljs.core.next.call(null,seq__13261_13327__$1);
var G__13366 = null;
var G__13367 = 0;
var G__13368 = 0;
seq__13261_13286 = G__13365;
chunk__13268_13287 = G__13366;
count__13269_13288 = G__13367;
i__13270_13289 = G__13368;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13369){
var elem_sel = cljs.core.first(arglist__13369);
var type_fs = cljs.core.rest(arglist__13369);
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
var vec__13377_13384 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13385 = cljs.core.nth.call(null,vec__13377_13384,0,null);var selector_13386 = cljs.core.nth.call(null,vec__13377_13384,1,null);var seq__13378_13387 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13379_13388 = null;var count__13380_13389 = 0;var i__13381_13390 = 0;while(true){
if((i__13381_13390 < count__13380_13389))
{var vec__13382_13391 = cljs.core._nth.call(null,chunk__13379_13388,i__13381_13390);var type_13392 = cljs.core.nth.call(null,vec__13382_13391,0,null);var f_13393 = cljs.core.nth.call(null,vec__13382_13391,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13392,((function (seq__13378_13387,chunk__13379_13388,count__13380_13389,i__13381_13390,vec__13382_13391,type_13392,f_13393){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13392,this_fn);
return f_13393.call(null,e);
});})(seq__13378_13387,chunk__13379_13388,count__13380_13389,i__13381_13390,vec__13382_13391,type_13392,f_13393))
);
{
var G__13394 = seq__13378_13387;
var G__13395 = chunk__13379_13388;
var G__13396 = count__13380_13389;
var G__13397 = (i__13381_13390 + 1);
seq__13378_13387 = G__13394;
chunk__13379_13388 = G__13395;
count__13380_13389 = G__13396;
i__13381_13390 = G__13397;
continue;
}
} else
{var temp__4092__auto___13398 = cljs.core.seq.call(null,seq__13378_13387);if(temp__4092__auto___13398)
{var seq__13378_13399__$1 = temp__4092__auto___13398;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13378_13399__$1))
{var c__8927__auto___13400 = cljs.core.chunk_first.call(null,seq__13378_13399__$1);{
var G__13401 = cljs.core.chunk_rest.call(null,seq__13378_13399__$1);
var G__13402 = c__8927__auto___13400;
var G__13403 = cljs.core.count.call(null,c__8927__auto___13400);
var G__13404 = 0;
seq__13378_13387 = G__13401;
chunk__13379_13388 = G__13402;
count__13380_13389 = G__13403;
i__13381_13390 = G__13404;
continue;
}
} else
{var vec__13383_13405 = cljs.core.first.call(null,seq__13378_13399__$1);var type_13406 = cljs.core.nth.call(null,vec__13383_13405,0,null);var f_13407 = cljs.core.nth.call(null,vec__13383_13405,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13406,((function (seq__13378_13387,chunk__13379_13388,count__13380_13389,i__13381_13390,vec__13383_13405,type_13406,f_13407,seq__13378_13399__$1,temp__4092__auto___13398){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13406,this_fn);
return f_13407.call(null,e);
});})(seq__13378_13387,chunk__13379_13388,count__13380_13389,i__13381_13390,vec__13383_13405,type_13406,f_13407,seq__13378_13399__$1,temp__4092__auto___13398))
);
{
var G__13408 = cljs.core.next.call(null,seq__13378_13399__$1);
var G__13409 = null;
var G__13410 = 0;
var G__13411 = 0;
seq__13378_13387 = G__13408;
chunk__13379_13388 = G__13409;
count__13380_13389 = G__13410;
i__13381_13390 = G__13411;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__13412){
var elem_sel = cljs.core.first(arglist__13412);
var type_fs = cljs.core.rest(arglist__13412);
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
var fire_BANG___delegate = function (node,event_type,p__13413){var vec__13415 = p__13413;var update_event_BANG_ = cljs.core.nth.call(null,vec__13415,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__13413 = null;if (arguments.length > 2) {
  p__13413 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__13413);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__13416){
var node = cljs.core.first(arglist__13416);
arglist__13416 = cljs.core.next(arglist__13416);
var event_type = cljs.core.first(arglist__13416);
var p__13413 = cljs.core.rest(arglist__13416);
return fire_BANG___delegate(node,event_type,p__13413);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map