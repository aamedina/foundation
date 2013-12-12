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
dommy.core.text = (function text(elem){var or__13822__auto__ = elem.textContent;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
var append_BANG___2 = (function (parent,child){var G__103036 = dommy.template.__GT_node_like.call(null,parent);G__103036.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__103036;
});
var append_BANG___3 = (function() { 
var G__103041__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__103037_103042 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__103038_103043 = null;var count__103039_103044 = 0;var i__103040_103045 = 0;while(true){
if((i__103040_103045 < count__103039_103044))
{var c_103046 = cljs.core._nth.call(null,chunk__103038_103043,i__103040_103045);append_BANG_.call(null,parent__$1,c_103046);
{
var G__103047 = seq__103037_103042;
var G__103048 = chunk__103038_103043;
var G__103049 = count__103039_103044;
var G__103050 = (i__103040_103045 + 1);
seq__103037_103042 = G__103047;
chunk__103038_103043 = G__103048;
count__103039_103044 = G__103049;
i__103040_103045 = G__103050;
continue;
}
} else
{var temp__4092__auto___103051 = cljs.core.seq.call(null,seq__103037_103042);if(temp__4092__auto___103051)
{var seq__103037_103052__$1 = temp__4092__auto___103051;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103037_103052__$1))
{var c__14546__auto___103053 = cljs.core.chunk_first.call(null,seq__103037_103052__$1);{
var G__103054 = cljs.core.chunk_rest.call(null,seq__103037_103052__$1);
var G__103055 = c__14546__auto___103053;
var G__103056 = cljs.core.count.call(null,c__14546__auto___103053);
var G__103057 = 0;
seq__103037_103042 = G__103054;
chunk__103038_103043 = G__103055;
count__103039_103044 = G__103056;
i__103040_103045 = G__103057;
continue;
}
} else
{var c_103058 = cljs.core.first.call(null,seq__103037_103052__$1);append_BANG_.call(null,parent__$1,c_103058);
{
var G__103059 = cljs.core.next.call(null,seq__103037_103052__$1);
var G__103060 = null;
var G__103061 = 0;
var G__103062 = 0;
seq__103037_103042 = G__103059;
chunk__103038_103043 = G__103060;
count__103039_103044 = G__103061;
i__103040_103045 = G__103062;
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
var G__103041 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__103041__delegate.call(this,parent,child,more_children);};
G__103041.cljs$lang$maxFixedArity = 2;
G__103041.cljs$lang$applyTo = (function (arglist__103063){
var parent = cljs.core.first(arglist__103063);
arglist__103063 = cljs.core.next(arglist__103063);
var child = cljs.core.first(arglist__103063);
var more_children = cljs.core.rest(arglist__103063);
return G__103041__delegate(parent,child,more_children);
});
G__103041.cljs$core$IFn$_invoke$arity$variadic = G__103041__delegate;
return G__103041;
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
var G__103072__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__103068_103073 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__103069_103074 = null;var count__103070_103075 = 0;var i__103071_103076 = 0;while(true){
if((i__103071_103076 < count__103070_103075))
{var c_103077 = cljs.core._nth.call(null,chunk__103069_103074,i__103071_103076);prepend_BANG_.call(null,parent__$1,c_103077);
{
var G__103078 = seq__103068_103073;
var G__103079 = chunk__103069_103074;
var G__103080 = count__103070_103075;
var G__103081 = (i__103071_103076 + 1);
seq__103068_103073 = G__103078;
chunk__103069_103074 = G__103079;
count__103070_103075 = G__103080;
i__103071_103076 = G__103081;
continue;
}
} else
{var temp__4092__auto___103082 = cljs.core.seq.call(null,seq__103068_103073);if(temp__4092__auto___103082)
{var seq__103068_103083__$1 = temp__4092__auto___103082;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103068_103083__$1))
{var c__14546__auto___103084 = cljs.core.chunk_first.call(null,seq__103068_103083__$1);{
var G__103085 = cljs.core.chunk_rest.call(null,seq__103068_103083__$1);
var G__103086 = c__14546__auto___103084;
var G__103087 = cljs.core.count.call(null,c__14546__auto___103084);
var G__103088 = 0;
seq__103068_103073 = G__103085;
chunk__103069_103074 = G__103086;
count__103070_103075 = G__103087;
i__103071_103076 = G__103088;
continue;
}
} else
{var c_103089 = cljs.core.first.call(null,seq__103068_103083__$1);prepend_BANG_.call(null,parent__$1,c_103089);
{
var G__103090 = cljs.core.next.call(null,seq__103068_103083__$1);
var G__103091 = null;
var G__103092 = 0;
var G__103093 = 0;
seq__103068_103073 = G__103090;
chunk__103069_103074 = G__103091;
count__103070_103075 = G__103092;
i__103071_103076 = G__103093;
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
var G__103072 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__103072__delegate.call(this,parent,child,more_children);};
G__103072.cljs$lang$maxFixedArity = 2;
G__103072.cljs$lang$applyTo = (function (arglist__103094){
var parent = cljs.core.first(arglist__103094);
arglist__103094 = cljs.core.next(arglist__103094);
var child = cljs.core.first(arglist__103094);
var more_children = cljs.core.rest(arglist__103094);
return G__103072__delegate(parent,child,more_children);
});
G__103072.cljs$core$IFn$_invoke$arity$variadic = G__103072__delegate;
return G__103072;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___103095 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___103095))
{var next_103096 = temp__4090__auto___103095;parent.insertBefore(actual_node,next_103096);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__103098 = dommy.template.__GT_node_like.call(null,parent);G__103098.innerHTML = "";
dommy.core.append_BANG_.call(null,G__103098,node_like);
return G__103098;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__103100 = elem__$1.parentNode;G__103100.removeChild(elem__$1);
return G__103100;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__103106){var vec__103107 = p__103106;var k = cljs.core.nth.call(null,vec__103107,0,null);var v = cljs.core.nth.call(null,vec__103107,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t103108 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t103108 = (function (v,k,vec__103107,p__103106,container,key_selectors_map,template,selector_map,meta103109){
this.v = v;
this.k = k;
this.vec__103107 = vec__103107;
this.p__103106 = p__103106;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta103109 = meta103109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t103108.cljs$lang$type = true;
dommy.core.t103108.cljs$lang$ctorStr = "dommy.core/t103108";
dommy.core.t103108.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"dommy.core/t103108");
});
dommy.core.t103108.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t103108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103110){var self__ = this;
var _103110__$1 = this;return self__.meta103109;
});
dommy.core.t103108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103110,meta103109__$1){var self__ = this;
var _103110__$1 = this;return (new dommy.core.t103108(self__.v,self__.k,self__.vec__103107,self__.p__103106,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta103109__$1));
});
dommy.core.__GT_t103108 = (function __GT_t103108(v__$1,k__$1,vec__103107__$1,p__103106__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta103109){return (new dommy.core.t103108(v__$1,k__$1,vec__103107__$1,p__103106__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta103109));
});
}
return (new dommy.core.t103108(v,k,vec__103107,p__103106,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__103111_SHARP_){return p1__103111_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__103112_SHARP_){return !((p1__103112_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__103113){var vec__103114 = p__103113;var special_mouse_event = cljs.core.nth.call(null,vec__103114,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__103114,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13822__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13810__auto__ = related_target;if(cljs.core.truth_(and__13810__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13810__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13810__auto__ = selected_target;if(cljs.core.truth_(and__13810__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13810__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13822__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__103115){
var elem = cljs.core.first(arglist__103115);
arglist__103115 = cljs.core.next(arglist__103115);
var f = cljs.core.first(arglist__103115);
var args = cljs.core.rest(arglist__103115);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__103116_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__103116_SHARP_));
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
var vec__103140_103163 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_103164 = cljs.core.nth.call(null,vec__103140_103163,0,null);var selector_103165 = cljs.core.nth.call(null,vec__103140_103163,1,null);var seq__103141_103166 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__103148_103167 = null;var count__103149_103168 = 0;var i__103150_103169 = 0;while(true){
if((i__103150_103169 < count__103149_103168))
{var vec__103157_103170 = cljs.core._nth.call(null,chunk__103148_103167,i__103150_103169);var orig_type_103171 = cljs.core.nth.call(null,vec__103157_103170,0,null);var f_103172 = cljs.core.nth.call(null,vec__103157_103170,1,null);var seq__103151_103173 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103171,new cljs.core.PersistentArrayMap.fromArray([orig_type_103171,cljs.core.identity], true, false)));var chunk__103153_103174 = null;var count__103154_103175 = 0;var i__103155_103176 = 0;while(true){
if((i__103155_103176 < count__103154_103175))
{var vec__103158_103177 = cljs.core._nth.call(null,chunk__103153_103174,i__103155_103176);var actual_type_103178 = cljs.core.nth.call(null,vec__103158_103177,0,null);var factory_103179 = cljs.core.nth.call(null,vec__103158_103177,1,null);var canonical_f_103180 = (cljs.core.truth_(selector_103165)?cljs.core.partial.call(null,dommy.core.live_listener,elem_103164,selector_103165):cljs.core.identity).call(null,factory_103179.call(null,f_103172));dommy.core.update_event_listeners_BANG_.call(null,elem_103164,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103165,actual_type_103178,f_103172], null),canonical_f_103180);
if(cljs.core.truth_(elem_103164.addEventListener))
{elem_103164.addEventListener(cljs.core.name.call(null,actual_type_103178),canonical_f_103180);
} else
{elem_103164.attachEvent(cljs.core.name.call(null,actual_type_103178),canonical_f_103180);
}
{
var G__103181 = seq__103151_103173;
var G__103182 = chunk__103153_103174;
var G__103183 = count__103154_103175;
var G__103184 = (i__103155_103176 + 1);
seq__103151_103173 = G__103181;
chunk__103153_103174 = G__103182;
count__103154_103175 = G__103183;
i__103155_103176 = G__103184;
continue;
}
} else
{var temp__4092__auto___103185 = cljs.core.seq.call(null,seq__103151_103173);if(temp__4092__auto___103185)
{var seq__103151_103186__$1 = temp__4092__auto___103185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103151_103186__$1))
{var c__14546__auto___103187 = cljs.core.chunk_first.call(null,seq__103151_103186__$1);{
var G__103188 = cljs.core.chunk_rest.call(null,seq__103151_103186__$1);
var G__103189 = c__14546__auto___103187;
var G__103190 = cljs.core.count.call(null,c__14546__auto___103187);
var G__103191 = 0;
seq__103151_103173 = G__103188;
chunk__103153_103174 = G__103189;
count__103154_103175 = G__103190;
i__103155_103176 = G__103191;
continue;
}
} else
{var vec__103159_103192 = cljs.core.first.call(null,seq__103151_103186__$1);var actual_type_103193 = cljs.core.nth.call(null,vec__103159_103192,0,null);var factory_103194 = cljs.core.nth.call(null,vec__103159_103192,1,null);var canonical_f_103195 = (cljs.core.truth_(selector_103165)?cljs.core.partial.call(null,dommy.core.live_listener,elem_103164,selector_103165):cljs.core.identity).call(null,factory_103194.call(null,f_103172));dommy.core.update_event_listeners_BANG_.call(null,elem_103164,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103165,actual_type_103193,f_103172], null),canonical_f_103195);
if(cljs.core.truth_(elem_103164.addEventListener))
{elem_103164.addEventListener(cljs.core.name.call(null,actual_type_103193),canonical_f_103195);
} else
{elem_103164.attachEvent(cljs.core.name.call(null,actual_type_103193),canonical_f_103195);
}
{
var G__103196 = cljs.core.next.call(null,seq__103151_103186__$1);
var G__103197 = null;
var G__103198 = 0;
var G__103199 = 0;
seq__103151_103173 = G__103196;
chunk__103153_103174 = G__103197;
count__103154_103175 = G__103198;
i__103155_103176 = G__103199;
continue;
}
}
} else
{}
}
break;
}
{
var G__103200 = seq__103141_103166;
var G__103201 = chunk__103148_103167;
var G__103202 = count__103149_103168;
var G__103203 = (i__103150_103169 + 1);
seq__103141_103166 = G__103200;
chunk__103148_103167 = G__103201;
count__103149_103168 = G__103202;
i__103150_103169 = G__103203;
continue;
}
} else
{var temp__4092__auto___103204 = cljs.core.seq.call(null,seq__103141_103166);if(temp__4092__auto___103204)
{var seq__103141_103205__$1 = temp__4092__auto___103204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103141_103205__$1))
{var c__14546__auto___103206 = cljs.core.chunk_first.call(null,seq__103141_103205__$1);{
var G__103207 = cljs.core.chunk_rest.call(null,seq__103141_103205__$1);
var G__103208 = c__14546__auto___103206;
var G__103209 = cljs.core.count.call(null,c__14546__auto___103206);
var G__103210 = 0;
seq__103141_103166 = G__103207;
chunk__103148_103167 = G__103208;
count__103149_103168 = G__103209;
i__103150_103169 = G__103210;
continue;
}
} else
{var vec__103160_103211 = cljs.core.first.call(null,seq__103141_103205__$1);var orig_type_103212 = cljs.core.nth.call(null,vec__103160_103211,0,null);var f_103213 = cljs.core.nth.call(null,vec__103160_103211,1,null);var seq__103142_103214 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103212,new cljs.core.PersistentArrayMap.fromArray([orig_type_103212,cljs.core.identity], true, false)));var chunk__103144_103215 = null;var count__103145_103216 = 0;var i__103146_103217 = 0;while(true){
if((i__103146_103217 < count__103145_103216))
{var vec__103161_103218 = cljs.core._nth.call(null,chunk__103144_103215,i__103146_103217);var actual_type_103219 = cljs.core.nth.call(null,vec__103161_103218,0,null);var factory_103220 = cljs.core.nth.call(null,vec__103161_103218,1,null);var canonical_f_103221 = (cljs.core.truth_(selector_103165)?cljs.core.partial.call(null,dommy.core.live_listener,elem_103164,selector_103165):cljs.core.identity).call(null,factory_103220.call(null,f_103213));dommy.core.update_event_listeners_BANG_.call(null,elem_103164,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103165,actual_type_103219,f_103213], null),canonical_f_103221);
if(cljs.core.truth_(elem_103164.addEventListener))
{elem_103164.addEventListener(cljs.core.name.call(null,actual_type_103219),canonical_f_103221);
} else
{elem_103164.attachEvent(cljs.core.name.call(null,actual_type_103219),canonical_f_103221);
}
{
var G__103222 = seq__103142_103214;
var G__103223 = chunk__103144_103215;
var G__103224 = count__103145_103216;
var G__103225 = (i__103146_103217 + 1);
seq__103142_103214 = G__103222;
chunk__103144_103215 = G__103223;
count__103145_103216 = G__103224;
i__103146_103217 = G__103225;
continue;
}
} else
{var temp__4092__auto___103226__$1 = cljs.core.seq.call(null,seq__103142_103214);if(temp__4092__auto___103226__$1)
{var seq__103142_103227__$1 = temp__4092__auto___103226__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103142_103227__$1))
{var c__14546__auto___103228 = cljs.core.chunk_first.call(null,seq__103142_103227__$1);{
var G__103229 = cljs.core.chunk_rest.call(null,seq__103142_103227__$1);
var G__103230 = c__14546__auto___103228;
var G__103231 = cljs.core.count.call(null,c__14546__auto___103228);
var G__103232 = 0;
seq__103142_103214 = G__103229;
chunk__103144_103215 = G__103230;
count__103145_103216 = G__103231;
i__103146_103217 = G__103232;
continue;
}
} else
{var vec__103162_103233 = cljs.core.first.call(null,seq__103142_103227__$1);var actual_type_103234 = cljs.core.nth.call(null,vec__103162_103233,0,null);var factory_103235 = cljs.core.nth.call(null,vec__103162_103233,1,null);var canonical_f_103236 = (cljs.core.truth_(selector_103165)?cljs.core.partial.call(null,dommy.core.live_listener,elem_103164,selector_103165):cljs.core.identity).call(null,factory_103235.call(null,f_103213));dommy.core.update_event_listeners_BANG_.call(null,elem_103164,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103165,actual_type_103234,f_103213], null),canonical_f_103236);
if(cljs.core.truth_(elem_103164.addEventListener))
{elem_103164.addEventListener(cljs.core.name.call(null,actual_type_103234),canonical_f_103236);
} else
{elem_103164.attachEvent(cljs.core.name.call(null,actual_type_103234),canonical_f_103236);
}
{
var G__103237 = cljs.core.next.call(null,seq__103142_103227__$1);
var G__103238 = null;
var G__103239 = 0;
var G__103240 = 0;
seq__103142_103214 = G__103237;
chunk__103144_103215 = G__103238;
count__103145_103216 = G__103239;
i__103146_103217 = G__103240;
continue;
}
}
} else
{}
}
break;
}
{
var G__103241 = cljs.core.next.call(null,seq__103141_103205__$1);
var G__103242 = null;
var G__103243 = 0;
var G__103244 = 0;
seq__103141_103166 = G__103241;
chunk__103148_103167 = G__103242;
count__103149_103168 = G__103243;
i__103150_103169 = G__103244;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__103245){
var elem_sel = cljs.core.first(arglist__103245);
var type_fs = cljs.core.rest(arglist__103245);
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
var vec__103269_103292 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_103293 = cljs.core.nth.call(null,vec__103269_103292,0,null);var selector_103294 = cljs.core.nth.call(null,vec__103269_103292,1,null);var seq__103270_103295 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__103277_103296 = null;var count__103278_103297 = 0;var i__103279_103298 = 0;while(true){
if((i__103279_103298 < count__103278_103297))
{var vec__103286_103299 = cljs.core._nth.call(null,chunk__103277_103296,i__103279_103298);var orig_type_103300 = cljs.core.nth.call(null,vec__103286_103299,0,null);var f_103301 = cljs.core.nth.call(null,vec__103286_103299,1,null);var seq__103280_103302 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103300,new cljs.core.PersistentArrayMap.fromArray([orig_type_103300,cljs.core.identity], true, false)));var chunk__103282_103303 = null;var count__103283_103304 = 0;var i__103284_103305 = 0;while(true){
if((i__103284_103305 < count__103283_103304))
{var vec__103287_103306 = cljs.core._nth.call(null,chunk__103282_103303,i__103284_103305);var actual_type_103307 = cljs.core.nth.call(null,vec__103287_103306,0,null);var __103308 = cljs.core.nth.call(null,vec__103287_103306,1,null);var keys_103309 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103294,actual_type_103307,f_103301], null);var canonical_f_103310 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103293),keys_103309);dommy.core.update_event_listeners_BANG_.call(null,elem_103293,dommy.utils.dissoc_in,keys_103309);
if(cljs.core.truth_(elem_103293.removeEventListener))
{elem_103293.removeEventListener(cljs.core.name.call(null,actual_type_103307),canonical_f_103310);
} else
{elem_103293.detachEvent(cljs.core.name.call(null,actual_type_103307),canonical_f_103310);
}
{
var G__103311 = seq__103280_103302;
var G__103312 = chunk__103282_103303;
var G__103313 = count__103283_103304;
var G__103314 = (i__103284_103305 + 1);
seq__103280_103302 = G__103311;
chunk__103282_103303 = G__103312;
count__103283_103304 = G__103313;
i__103284_103305 = G__103314;
continue;
}
} else
{var temp__4092__auto___103315 = cljs.core.seq.call(null,seq__103280_103302);if(temp__4092__auto___103315)
{var seq__103280_103316__$1 = temp__4092__auto___103315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103280_103316__$1))
{var c__14546__auto___103317 = cljs.core.chunk_first.call(null,seq__103280_103316__$1);{
var G__103318 = cljs.core.chunk_rest.call(null,seq__103280_103316__$1);
var G__103319 = c__14546__auto___103317;
var G__103320 = cljs.core.count.call(null,c__14546__auto___103317);
var G__103321 = 0;
seq__103280_103302 = G__103318;
chunk__103282_103303 = G__103319;
count__103283_103304 = G__103320;
i__103284_103305 = G__103321;
continue;
}
} else
{var vec__103288_103322 = cljs.core.first.call(null,seq__103280_103316__$1);var actual_type_103323 = cljs.core.nth.call(null,vec__103288_103322,0,null);var __103324 = cljs.core.nth.call(null,vec__103288_103322,1,null);var keys_103325 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103294,actual_type_103323,f_103301], null);var canonical_f_103326 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103293),keys_103325);dommy.core.update_event_listeners_BANG_.call(null,elem_103293,dommy.utils.dissoc_in,keys_103325);
if(cljs.core.truth_(elem_103293.removeEventListener))
{elem_103293.removeEventListener(cljs.core.name.call(null,actual_type_103323),canonical_f_103326);
} else
{elem_103293.detachEvent(cljs.core.name.call(null,actual_type_103323),canonical_f_103326);
}
{
var G__103327 = cljs.core.next.call(null,seq__103280_103316__$1);
var G__103328 = null;
var G__103329 = 0;
var G__103330 = 0;
seq__103280_103302 = G__103327;
chunk__103282_103303 = G__103328;
count__103283_103304 = G__103329;
i__103284_103305 = G__103330;
continue;
}
}
} else
{}
}
break;
}
{
var G__103331 = seq__103270_103295;
var G__103332 = chunk__103277_103296;
var G__103333 = count__103278_103297;
var G__103334 = (i__103279_103298 + 1);
seq__103270_103295 = G__103331;
chunk__103277_103296 = G__103332;
count__103278_103297 = G__103333;
i__103279_103298 = G__103334;
continue;
}
} else
{var temp__4092__auto___103335 = cljs.core.seq.call(null,seq__103270_103295);if(temp__4092__auto___103335)
{var seq__103270_103336__$1 = temp__4092__auto___103335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103270_103336__$1))
{var c__14546__auto___103337 = cljs.core.chunk_first.call(null,seq__103270_103336__$1);{
var G__103338 = cljs.core.chunk_rest.call(null,seq__103270_103336__$1);
var G__103339 = c__14546__auto___103337;
var G__103340 = cljs.core.count.call(null,c__14546__auto___103337);
var G__103341 = 0;
seq__103270_103295 = G__103338;
chunk__103277_103296 = G__103339;
count__103278_103297 = G__103340;
i__103279_103298 = G__103341;
continue;
}
} else
{var vec__103289_103342 = cljs.core.first.call(null,seq__103270_103336__$1);var orig_type_103343 = cljs.core.nth.call(null,vec__103289_103342,0,null);var f_103344 = cljs.core.nth.call(null,vec__103289_103342,1,null);var seq__103271_103345 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_103343,new cljs.core.PersistentArrayMap.fromArray([orig_type_103343,cljs.core.identity], true, false)));var chunk__103273_103346 = null;var count__103274_103347 = 0;var i__103275_103348 = 0;while(true){
if((i__103275_103348 < count__103274_103347))
{var vec__103290_103349 = cljs.core._nth.call(null,chunk__103273_103346,i__103275_103348);var actual_type_103350 = cljs.core.nth.call(null,vec__103290_103349,0,null);var __103351 = cljs.core.nth.call(null,vec__103290_103349,1,null);var keys_103352 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103294,actual_type_103350,f_103344], null);var canonical_f_103353 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103293),keys_103352);dommy.core.update_event_listeners_BANG_.call(null,elem_103293,dommy.utils.dissoc_in,keys_103352);
if(cljs.core.truth_(elem_103293.removeEventListener))
{elem_103293.removeEventListener(cljs.core.name.call(null,actual_type_103350),canonical_f_103353);
} else
{elem_103293.detachEvent(cljs.core.name.call(null,actual_type_103350),canonical_f_103353);
}
{
var G__103354 = seq__103271_103345;
var G__103355 = chunk__103273_103346;
var G__103356 = count__103274_103347;
var G__103357 = (i__103275_103348 + 1);
seq__103271_103345 = G__103354;
chunk__103273_103346 = G__103355;
count__103274_103347 = G__103356;
i__103275_103348 = G__103357;
continue;
}
} else
{var temp__4092__auto___103358__$1 = cljs.core.seq.call(null,seq__103271_103345);if(temp__4092__auto___103358__$1)
{var seq__103271_103359__$1 = temp__4092__auto___103358__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103271_103359__$1))
{var c__14546__auto___103360 = cljs.core.chunk_first.call(null,seq__103271_103359__$1);{
var G__103361 = cljs.core.chunk_rest.call(null,seq__103271_103359__$1);
var G__103362 = c__14546__auto___103360;
var G__103363 = cljs.core.count.call(null,c__14546__auto___103360);
var G__103364 = 0;
seq__103271_103345 = G__103361;
chunk__103273_103346 = G__103362;
count__103274_103347 = G__103363;
i__103275_103348 = G__103364;
continue;
}
} else
{var vec__103291_103365 = cljs.core.first.call(null,seq__103271_103359__$1);var actual_type_103366 = cljs.core.nth.call(null,vec__103291_103365,0,null);var __103367 = cljs.core.nth.call(null,vec__103291_103365,1,null);var keys_103368 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_103294,actual_type_103366,f_103344], null);var canonical_f_103369 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_103293),keys_103368);dommy.core.update_event_listeners_BANG_.call(null,elem_103293,dommy.utils.dissoc_in,keys_103368);
if(cljs.core.truth_(elem_103293.removeEventListener))
{elem_103293.removeEventListener(cljs.core.name.call(null,actual_type_103366),canonical_f_103369);
} else
{elem_103293.detachEvent(cljs.core.name.call(null,actual_type_103366),canonical_f_103369);
}
{
var G__103370 = cljs.core.next.call(null,seq__103271_103359__$1);
var G__103371 = null;
var G__103372 = 0;
var G__103373 = 0;
seq__103271_103345 = G__103370;
chunk__103273_103346 = G__103371;
count__103274_103347 = G__103372;
i__103275_103348 = G__103373;
continue;
}
}
} else
{}
}
break;
}
{
var G__103374 = cljs.core.next.call(null,seq__103270_103336__$1);
var G__103375 = null;
var G__103376 = 0;
var G__103377 = 0;
seq__103270_103295 = G__103374;
chunk__103277_103296 = G__103375;
count__103278_103297 = G__103376;
i__103279_103298 = G__103377;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__103378){
var elem_sel = cljs.core.first(arglist__103378);
var type_fs = cljs.core.rest(arglist__103378);
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
var vec__103386_103393 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_103394 = cljs.core.nth.call(null,vec__103386_103393,0,null);var selector_103395 = cljs.core.nth.call(null,vec__103386_103393,1,null);var seq__103387_103396 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__103388_103397 = null;var count__103389_103398 = 0;var i__103390_103399 = 0;while(true){
if((i__103390_103399 < count__103389_103398))
{var vec__103391_103400 = cljs.core._nth.call(null,chunk__103388_103397,i__103390_103399);var type_103401 = cljs.core.nth.call(null,vec__103391_103400,0,null);var f_103402 = cljs.core.nth.call(null,vec__103391_103400,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_103401,((function (seq__103387_103396,chunk__103388_103397,count__103389_103398,i__103390_103399,vec__103391_103400,type_103401,f_103402){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_103401,this_fn);
return f_103402.call(null,e);
});})(seq__103387_103396,chunk__103388_103397,count__103389_103398,i__103390_103399,vec__103391_103400,type_103401,f_103402))
);
{
var G__103403 = seq__103387_103396;
var G__103404 = chunk__103388_103397;
var G__103405 = count__103389_103398;
var G__103406 = (i__103390_103399 + 1);
seq__103387_103396 = G__103403;
chunk__103388_103397 = G__103404;
count__103389_103398 = G__103405;
i__103390_103399 = G__103406;
continue;
}
} else
{var temp__4092__auto___103407 = cljs.core.seq.call(null,seq__103387_103396);if(temp__4092__auto___103407)
{var seq__103387_103408__$1 = temp__4092__auto___103407;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103387_103408__$1))
{var c__14546__auto___103409 = cljs.core.chunk_first.call(null,seq__103387_103408__$1);{
var G__103410 = cljs.core.chunk_rest.call(null,seq__103387_103408__$1);
var G__103411 = c__14546__auto___103409;
var G__103412 = cljs.core.count.call(null,c__14546__auto___103409);
var G__103413 = 0;
seq__103387_103396 = G__103410;
chunk__103388_103397 = G__103411;
count__103389_103398 = G__103412;
i__103390_103399 = G__103413;
continue;
}
} else
{var vec__103392_103414 = cljs.core.first.call(null,seq__103387_103408__$1);var type_103415 = cljs.core.nth.call(null,vec__103392_103414,0,null);var f_103416 = cljs.core.nth.call(null,vec__103392_103414,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_103415,((function (seq__103387_103396,chunk__103388_103397,count__103389_103398,i__103390_103399,vec__103392_103414,type_103415,f_103416,seq__103387_103408__$1,temp__4092__auto___103407){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_103415,this_fn);
return f_103416.call(null,e);
});})(seq__103387_103396,chunk__103388_103397,count__103389_103398,i__103390_103399,vec__103392_103414,type_103415,f_103416,seq__103387_103408__$1,temp__4092__auto___103407))
);
{
var G__103417 = cljs.core.next.call(null,seq__103387_103408__$1);
var G__103418 = null;
var G__103419 = 0;
var G__103420 = 0;
seq__103387_103396 = G__103417;
chunk__103388_103397 = G__103418;
count__103389_103398 = G__103419;
i__103390_103399 = G__103420;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__103421){
var elem_sel = cljs.core.first(arglist__103421);
var type_fs = cljs.core.rest(arglist__103421);
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
var fire_BANG___delegate = function (node,event_type,p__103422){var vec__103424 = p__103422;var update_event_BANG_ = cljs.core.nth.call(null,vec__103424,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13822__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
var p__103422 = null;if (arguments.length > 2) {
  p__103422 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__103422);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__103425){
var node = cljs.core.first(arglist__103425);
arglist__103425 = cljs.core.next(arglist__103425);
var event_type = cljs.core.first(arglist__103425);
var p__103422 = cljs.core.rest(arglist__103425);
return fire_BANG___delegate(node,event_type,p__103422);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map