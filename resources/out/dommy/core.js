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
dommy.core.text = (function text(elem){var or__13821__auto__ = elem.textContent;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
var append_BANG___2 = (function (parent,child){var G__33045 = dommy.template.__GT_node_like.call(null,parent);G__33045.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__33045;
});
var append_BANG___3 = (function() { 
var G__33050__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__33046_33051 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__33047_33052 = null;var count__33048_33053 = 0;var i__33049_33054 = 0;while(true){
if((i__33049_33054 < count__33048_33053))
{var c_33055 = cljs.core._nth.call(null,chunk__33047_33052,i__33049_33054);append_BANG_.call(null,parent__$1,c_33055);
{
var G__33056 = seq__33046_33051;
var G__33057 = chunk__33047_33052;
var G__33058 = count__33048_33053;
var G__33059 = (i__33049_33054 + 1);
seq__33046_33051 = G__33056;
chunk__33047_33052 = G__33057;
count__33048_33053 = G__33058;
i__33049_33054 = G__33059;
continue;
}
} else
{var temp__4092__auto___33060 = cljs.core.seq.call(null,seq__33046_33051);if(temp__4092__auto___33060)
{var seq__33046_33061__$1 = temp__4092__auto___33060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33046_33061__$1))
{var c__14545__auto___33062 = cljs.core.chunk_first.call(null,seq__33046_33061__$1);{
var G__33063 = cljs.core.chunk_rest.call(null,seq__33046_33061__$1);
var G__33064 = c__14545__auto___33062;
var G__33065 = cljs.core.count.call(null,c__14545__auto___33062);
var G__33066 = 0;
seq__33046_33051 = G__33063;
chunk__33047_33052 = G__33064;
count__33048_33053 = G__33065;
i__33049_33054 = G__33066;
continue;
}
} else
{var c_33067 = cljs.core.first.call(null,seq__33046_33061__$1);append_BANG_.call(null,parent__$1,c_33067);
{
var G__33068 = cljs.core.next.call(null,seq__33046_33061__$1);
var G__33069 = null;
var G__33070 = 0;
var G__33071 = 0;
seq__33046_33051 = G__33068;
chunk__33047_33052 = G__33069;
count__33048_33053 = G__33070;
i__33049_33054 = G__33071;
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
var G__33050 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33050__delegate.call(this,parent,child,more_children);};
G__33050.cljs$lang$maxFixedArity = 2;
G__33050.cljs$lang$applyTo = (function (arglist__33072){
var parent = cljs.core.first(arglist__33072);
arglist__33072 = cljs.core.next(arglist__33072);
var child = cljs.core.first(arglist__33072);
var more_children = cljs.core.rest(arglist__33072);
return G__33050__delegate(parent,child,more_children);
});
G__33050.cljs$core$IFn$_invoke$arity$variadic = G__33050__delegate;
return G__33050;
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
var G__33081__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__33077_33082 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__33078_33083 = null;var count__33079_33084 = 0;var i__33080_33085 = 0;while(true){
if((i__33080_33085 < count__33079_33084))
{var c_33086 = cljs.core._nth.call(null,chunk__33078_33083,i__33080_33085);prepend_BANG_.call(null,parent__$1,c_33086);
{
var G__33087 = seq__33077_33082;
var G__33088 = chunk__33078_33083;
var G__33089 = count__33079_33084;
var G__33090 = (i__33080_33085 + 1);
seq__33077_33082 = G__33087;
chunk__33078_33083 = G__33088;
count__33079_33084 = G__33089;
i__33080_33085 = G__33090;
continue;
}
} else
{var temp__4092__auto___33091 = cljs.core.seq.call(null,seq__33077_33082);if(temp__4092__auto___33091)
{var seq__33077_33092__$1 = temp__4092__auto___33091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33077_33092__$1))
{var c__14545__auto___33093 = cljs.core.chunk_first.call(null,seq__33077_33092__$1);{
var G__33094 = cljs.core.chunk_rest.call(null,seq__33077_33092__$1);
var G__33095 = c__14545__auto___33093;
var G__33096 = cljs.core.count.call(null,c__14545__auto___33093);
var G__33097 = 0;
seq__33077_33082 = G__33094;
chunk__33078_33083 = G__33095;
count__33079_33084 = G__33096;
i__33080_33085 = G__33097;
continue;
}
} else
{var c_33098 = cljs.core.first.call(null,seq__33077_33092__$1);prepend_BANG_.call(null,parent__$1,c_33098);
{
var G__33099 = cljs.core.next.call(null,seq__33077_33092__$1);
var G__33100 = null;
var G__33101 = 0;
var G__33102 = 0;
seq__33077_33082 = G__33099;
chunk__33078_33083 = G__33100;
count__33079_33084 = G__33101;
i__33080_33085 = G__33102;
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
var G__33081 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33081__delegate.call(this,parent,child,more_children);};
G__33081.cljs$lang$maxFixedArity = 2;
G__33081.cljs$lang$applyTo = (function (arglist__33103){
var parent = cljs.core.first(arglist__33103);
arglist__33103 = cljs.core.next(arglist__33103);
var child = cljs.core.first(arglist__33103);
var more_children = cljs.core.rest(arglist__33103);
return G__33081__delegate(parent,child,more_children);
});
G__33081.cljs$core$IFn$_invoke$arity$variadic = G__33081__delegate;
return G__33081;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___33104 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___33104))
{var next_33105 = temp__4090__auto___33104;parent.insertBefore(actual_node,next_33105);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__33107 = dommy.template.__GT_node_like.call(null,parent);G__33107.innerHTML = "";
dommy.core.append_BANG_.call(null,G__33107,node_like);
return G__33107;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__33109 = elem__$1.parentNode;G__33109.removeChild(elem__$1);
return G__33109;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33115){var vec__33116 = p__33115;var k = cljs.core.nth.call(null,vec__33116,0,null);var v = cljs.core.nth.call(null,vec__33116,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t33117 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t33117 = (function (v,k,vec__33116,p__33115,container,key_selectors_map,template,selector_map,meta33118){
this.v = v;
this.k = k;
this.vec__33116 = vec__33116;
this.p__33115 = p__33115;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta33118 = meta33118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t33117.cljs$lang$type = true;
dommy.core.t33117.cljs$lang$ctorStr = "dommy.core/t33117";
dommy.core.t33117.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"dommy.core/t33117");
});
dommy.core.t33117.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t33117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33119){var self__ = this;
var _33119__$1 = this;return self__.meta33118;
});
dommy.core.t33117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33119,meta33118__$1){var self__ = this;
var _33119__$1 = this;return (new dommy.core.t33117(self__.v,self__.k,self__.vec__33116,self__.p__33115,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta33118__$1));
});
dommy.core.__GT_t33117 = (function __GT_t33117(v__$1,k__$1,vec__33116__$1,p__33115__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta33118){return (new dommy.core.t33117(v__$1,k__$1,vec__33116__$1,p__33115__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta33118));
});
}
return (new dommy.core.t33117(v,k,vec__33116,p__33115,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__33120_SHARP_){return p1__33120_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__33121_SHARP_){return !((p1__33121_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33122){var vec__33123 = p__33122;var special_mouse_event = cljs.core.nth.call(null,vec__33123,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__33123,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13821__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13809__auto__ = related_target;if(cljs.core.truth_(and__13809__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13809__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13809__auto__ = selected_target;if(cljs.core.truth_(and__13809__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13809__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13821__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__33124){
var elem = cljs.core.first(arglist__33124);
arglist__33124 = cljs.core.next(arglist__33124);
var f = cljs.core.first(arglist__33124);
var args = cljs.core.rest(arglist__33124);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__33125_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__33125_SHARP_));
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
var vec__33149_33172 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_33173 = cljs.core.nth.call(null,vec__33149_33172,0,null);var selector_33174 = cljs.core.nth.call(null,vec__33149_33172,1,null);var seq__33150_33175 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__33157_33176 = null;var count__33158_33177 = 0;var i__33159_33178 = 0;while(true){
if((i__33159_33178 < count__33158_33177))
{var vec__33166_33179 = cljs.core._nth.call(null,chunk__33157_33176,i__33159_33178);var orig_type_33180 = cljs.core.nth.call(null,vec__33166_33179,0,null);var f_33181 = cljs.core.nth.call(null,vec__33166_33179,1,null);var seq__33160_33182 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33180,new cljs.core.PersistentArrayMap.fromArray([orig_type_33180,cljs.core.identity], true, false)));var chunk__33162_33183 = null;var count__33163_33184 = 0;var i__33164_33185 = 0;while(true){
if((i__33164_33185 < count__33163_33184))
{var vec__33167_33186 = cljs.core._nth.call(null,chunk__33162_33183,i__33164_33185);var actual_type_33187 = cljs.core.nth.call(null,vec__33167_33186,0,null);var factory_33188 = cljs.core.nth.call(null,vec__33167_33186,1,null);var canonical_f_33189 = (cljs.core.truth_(selector_33174)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33173,selector_33174):cljs.core.identity).call(null,factory_33188.call(null,f_33181));dommy.core.update_event_listeners_BANG_.call(null,elem_33173,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33174,actual_type_33187,f_33181], null),canonical_f_33189);
if(cljs.core.truth_(elem_33173.addEventListener))
{elem_33173.addEventListener(cljs.core.name.call(null,actual_type_33187),canonical_f_33189);
} else
{elem_33173.attachEvent(cljs.core.name.call(null,actual_type_33187),canonical_f_33189);
}
{
var G__33190 = seq__33160_33182;
var G__33191 = chunk__33162_33183;
var G__33192 = count__33163_33184;
var G__33193 = (i__33164_33185 + 1);
seq__33160_33182 = G__33190;
chunk__33162_33183 = G__33191;
count__33163_33184 = G__33192;
i__33164_33185 = G__33193;
continue;
}
} else
{var temp__4092__auto___33194 = cljs.core.seq.call(null,seq__33160_33182);if(temp__4092__auto___33194)
{var seq__33160_33195__$1 = temp__4092__auto___33194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33160_33195__$1))
{var c__14545__auto___33196 = cljs.core.chunk_first.call(null,seq__33160_33195__$1);{
var G__33197 = cljs.core.chunk_rest.call(null,seq__33160_33195__$1);
var G__33198 = c__14545__auto___33196;
var G__33199 = cljs.core.count.call(null,c__14545__auto___33196);
var G__33200 = 0;
seq__33160_33182 = G__33197;
chunk__33162_33183 = G__33198;
count__33163_33184 = G__33199;
i__33164_33185 = G__33200;
continue;
}
} else
{var vec__33168_33201 = cljs.core.first.call(null,seq__33160_33195__$1);var actual_type_33202 = cljs.core.nth.call(null,vec__33168_33201,0,null);var factory_33203 = cljs.core.nth.call(null,vec__33168_33201,1,null);var canonical_f_33204 = (cljs.core.truth_(selector_33174)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33173,selector_33174):cljs.core.identity).call(null,factory_33203.call(null,f_33181));dommy.core.update_event_listeners_BANG_.call(null,elem_33173,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33174,actual_type_33202,f_33181], null),canonical_f_33204);
if(cljs.core.truth_(elem_33173.addEventListener))
{elem_33173.addEventListener(cljs.core.name.call(null,actual_type_33202),canonical_f_33204);
} else
{elem_33173.attachEvent(cljs.core.name.call(null,actual_type_33202),canonical_f_33204);
}
{
var G__33205 = cljs.core.next.call(null,seq__33160_33195__$1);
var G__33206 = null;
var G__33207 = 0;
var G__33208 = 0;
seq__33160_33182 = G__33205;
chunk__33162_33183 = G__33206;
count__33163_33184 = G__33207;
i__33164_33185 = G__33208;
continue;
}
}
} else
{}
}
break;
}
{
var G__33209 = seq__33150_33175;
var G__33210 = chunk__33157_33176;
var G__33211 = count__33158_33177;
var G__33212 = (i__33159_33178 + 1);
seq__33150_33175 = G__33209;
chunk__33157_33176 = G__33210;
count__33158_33177 = G__33211;
i__33159_33178 = G__33212;
continue;
}
} else
{var temp__4092__auto___33213 = cljs.core.seq.call(null,seq__33150_33175);if(temp__4092__auto___33213)
{var seq__33150_33214__$1 = temp__4092__auto___33213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33150_33214__$1))
{var c__14545__auto___33215 = cljs.core.chunk_first.call(null,seq__33150_33214__$1);{
var G__33216 = cljs.core.chunk_rest.call(null,seq__33150_33214__$1);
var G__33217 = c__14545__auto___33215;
var G__33218 = cljs.core.count.call(null,c__14545__auto___33215);
var G__33219 = 0;
seq__33150_33175 = G__33216;
chunk__33157_33176 = G__33217;
count__33158_33177 = G__33218;
i__33159_33178 = G__33219;
continue;
}
} else
{var vec__33169_33220 = cljs.core.first.call(null,seq__33150_33214__$1);var orig_type_33221 = cljs.core.nth.call(null,vec__33169_33220,0,null);var f_33222 = cljs.core.nth.call(null,vec__33169_33220,1,null);var seq__33151_33223 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33221,new cljs.core.PersistentArrayMap.fromArray([orig_type_33221,cljs.core.identity], true, false)));var chunk__33153_33224 = null;var count__33154_33225 = 0;var i__33155_33226 = 0;while(true){
if((i__33155_33226 < count__33154_33225))
{var vec__33170_33227 = cljs.core._nth.call(null,chunk__33153_33224,i__33155_33226);var actual_type_33228 = cljs.core.nth.call(null,vec__33170_33227,0,null);var factory_33229 = cljs.core.nth.call(null,vec__33170_33227,1,null);var canonical_f_33230 = (cljs.core.truth_(selector_33174)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33173,selector_33174):cljs.core.identity).call(null,factory_33229.call(null,f_33222));dommy.core.update_event_listeners_BANG_.call(null,elem_33173,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33174,actual_type_33228,f_33222], null),canonical_f_33230);
if(cljs.core.truth_(elem_33173.addEventListener))
{elem_33173.addEventListener(cljs.core.name.call(null,actual_type_33228),canonical_f_33230);
} else
{elem_33173.attachEvent(cljs.core.name.call(null,actual_type_33228),canonical_f_33230);
}
{
var G__33231 = seq__33151_33223;
var G__33232 = chunk__33153_33224;
var G__33233 = count__33154_33225;
var G__33234 = (i__33155_33226 + 1);
seq__33151_33223 = G__33231;
chunk__33153_33224 = G__33232;
count__33154_33225 = G__33233;
i__33155_33226 = G__33234;
continue;
}
} else
{var temp__4092__auto___33235__$1 = cljs.core.seq.call(null,seq__33151_33223);if(temp__4092__auto___33235__$1)
{var seq__33151_33236__$1 = temp__4092__auto___33235__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33151_33236__$1))
{var c__14545__auto___33237 = cljs.core.chunk_first.call(null,seq__33151_33236__$1);{
var G__33238 = cljs.core.chunk_rest.call(null,seq__33151_33236__$1);
var G__33239 = c__14545__auto___33237;
var G__33240 = cljs.core.count.call(null,c__14545__auto___33237);
var G__33241 = 0;
seq__33151_33223 = G__33238;
chunk__33153_33224 = G__33239;
count__33154_33225 = G__33240;
i__33155_33226 = G__33241;
continue;
}
} else
{var vec__33171_33242 = cljs.core.first.call(null,seq__33151_33236__$1);var actual_type_33243 = cljs.core.nth.call(null,vec__33171_33242,0,null);var factory_33244 = cljs.core.nth.call(null,vec__33171_33242,1,null);var canonical_f_33245 = (cljs.core.truth_(selector_33174)?cljs.core.partial.call(null,dommy.core.live_listener,elem_33173,selector_33174):cljs.core.identity).call(null,factory_33244.call(null,f_33222));dommy.core.update_event_listeners_BANG_.call(null,elem_33173,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33174,actual_type_33243,f_33222], null),canonical_f_33245);
if(cljs.core.truth_(elem_33173.addEventListener))
{elem_33173.addEventListener(cljs.core.name.call(null,actual_type_33243),canonical_f_33245);
} else
{elem_33173.attachEvent(cljs.core.name.call(null,actual_type_33243),canonical_f_33245);
}
{
var G__33246 = cljs.core.next.call(null,seq__33151_33236__$1);
var G__33247 = null;
var G__33248 = 0;
var G__33249 = 0;
seq__33151_33223 = G__33246;
chunk__33153_33224 = G__33247;
count__33154_33225 = G__33248;
i__33155_33226 = G__33249;
continue;
}
}
} else
{}
}
break;
}
{
var G__33250 = cljs.core.next.call(null,seq__33150_33214__$1);
var G__33251 = null;
var G__33252 = 0;
var G__33253 = 0;
seq__33150_33175 = G__33250;
chunk__33157_33176 = G__33251;
count__33158_33177 = G__33252;
i__33159_33178 = G__33253;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__33254){
var elem_sel = cljs.core.first(arglist__33254);
var type_fs = cljs.core.rest(arglist__33254);
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
var vec__33278_33301 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_33302 = cljs.core.nth.call(null,vec__33278_33301,0,null);var selector_33303 = cljs.core.nth.call(null,vec__33278_33301,1,null);var seq__33279_33304 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__33286_33305 = null;var count__33287_33306 = 0;var i__33288_33307 = 0;while(true){
if((i__33288_33307 < count__33287_33306))
{var vec__33295_33308 = cljs.core._nth.call(null,chunk__33286_33305,i__33288_33307);var orig_type_33309 = cljs.core.nth.call(null,vec__33295_33308,0,null);var f_33310 = cljs.core.nth.call(null,vec__33295_33308,1,null);var seq__33289_33311 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33309,new cljs.core.PersistentArrayMap.fromArray([orig_type_33309,cljs.core.identity], true, false)));var chunk__33291_33312 = null;var count__33292_33313 = 0;var i__33293_33314 = 0;while(true){
if((i__33293_33314 < count__33292_33313))
{var vec__33296_33315 = cljs.core._nth.call(null,chunk__33291_33312,i__33293_33314);var actual_type_33316 = cljs.core.nth.call(null,vec__33296_33315,0,null);var __33317 = cljs.core.nth.call(null,vec__33296_33315,1,null);var keys_33318 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33303,actual_type_33316,f_33310], null);var canonical_f_33319 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33302),keys_33318);dommy.core.update_event_listeners_BANG_.call(null,elem_33302,dommy.utils.dissoc_in,keys_33318);
if(cljs.core.truth_(elem_33302.removeEventListener))
{elem_33302.removeEventListener(cljs.core.name.call(null,actual_type_33316),canonical_f_33319);
} else
{elem_33302.detachEvent(cljs.core.name.call(null,actual_type_33316),canonical_f_33319);
}
{
var G__33320 = seq__33289_33311;
var G__33321 = chunk__33291_33312;
var G__33322 = count__33292_33313;
var G__33323 = (i__33293_33314 + 1);
seq__33289_33311 = G__33320;
chunk__33291_33312 = G__33321;
count__33292_33313 = G__33322;
i__33293_33314 = G__33323;
continue;
}
} else
{var temp__4092__auto___33324 = cljs.core.seq.call(null,seq__33289_33311);if(temp__4092__auto___33324)
{var seq__33289_33325__$1 = temp__4092__auto___33324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33289_33325__$1))
{var c__14545__auto___33326 = cljs.core.chunk_first.call(null,seq__33289_33325__$1);{
var G__33327 = cljs.core.chunk_rest.call(null,seq__33289_33325__$1);
var G__33328 = c__14545__auto___33326;
var G__33329 = cljs.core.count.call(null,c__14545__auto___33326);
var G__33330 = 0;
seq__33289_33311 = G__33327;
chunk__33291_33312 = G__33328;
count__33292_33313 = G__33329;
i__33293_33314 = G__33330;
continue;
}
} else
{var vec__33297_33331 = cljs.core.first.call(null,seq__33289_33325__$1);var actual_type_33332 = cljs.core.nth.call(null,vec__33297_33331,0,null);var __33333 = cljs.core.nth.call(null,vec__33297_33331,1,null);var keys_33334 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33303,actual_type_33332,f_33310], null);var canonical_f_33335 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33302),keys_33334);dommy.core.update_event_listeners_BANG_.call(null,elem_33302,dommy.utils.dissoc_in,keys_33334);
if(cljs.core.truth_(elem_33302.removeEventListener))
{elem_33302.removeEventListener(cljs.core.name.call(null,actual_type_33332),canonical_f_33335);
} else
{elem_33302.detachEvent(cljs.core.name.call(null,actual_type_33332),canonical_f_33335);
}
{
var G__33336 = cljs.core.next.call(null,seq__33289_33325__$1);
var G__33337 = null;
var G__33338 = 0;
var G__33339 = 0;
seq__33289_33311 = G__33336;
chunk__33291_33312 = G__33337;
count__33292_33313 = G__33338;
i__33293_33314 = G__33339;
continue;
}
}
} else
{}
}
break;
}
{
var G__33340 = seq__33279_33304;
var G__33341 = chunk__33286_33305;
var G__33342 = count__33287_33306;
var G__33343 = (i__33288_33307 + 1);
seq__33279_33304 = G__33340;
chunk__33286_33305 = G__33341;
count__33287_33306 = G__33342;
i__33288_33307 = G__33343;
continue;
}
} else
{var temp__4092__auto___33344 = cljs.core.seq.call(null,seq__33279_33304);if(temp__4092__auto___33344)
{var seq__33279_33345__$1 = temp__4092__auto___33344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33279_33345__$1))
{var c__14545__auto___33346 = cljs.core.chunk_first.call(null,seq__33279_33345__$1);{
var G__33347 = cljs.core.chunk_rest.call(null,seq__33279_33345__$1);
var G__33348 = c__14545__auto___33346;
var G__33349 = cljs.core.count.call(null,c__14545__auto___33346);
var G__33350 = 0;
seq__33279_33304 = G__33347;
chunk__33286_33305 = G__33348;
count__33287_33306 = G__33349;
i__33288_33307 = G__33350;
continue;
}
} else
{var vec__33298_33351 = cljs.core.first.call(null,seq__33279_33345__$1);var orig_type_33352 = cljs.core.nth.call(null,vec__33298_33351,0,null);var f_33353 = cljs.core.nth.call(null,vec__33298_33351,1,null);var seq__33280_33354 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_33352,new cljs.core.PersistentArrayMap.fromArray([orig_type_33352,cljs.core.identity], true, false)));var chunk__33282_33355 = null;var count__33283_33356 = 0;var i__33284_33357 = 0;while(true){
if((i__33284_33357 < count__33283_33356))
{var vec__33299_33358 = cljs.core._nth.call(null,chunk__33282_33355,i__33284_33357);var actual_type_33359 = cljs.core.nth.call(null,vec__33299_33358,0,null);var __33360 = cljs.core.nth.call(null,vec__33299_33358,1,null);var keys_33361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33303,actual_type_33359,f_33353], null);var canonical_f_33362 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33302),keys_33361);dommy.core.update_event_listeners_BANG_.call(null,elem_33302,dommy.utils.dissoc_in,keys_33361);
if(cljs.core.truth_(elem_33302.removeEventListener))
{elem_33302.removeEventListener(cljs.core.name.call(null,actual_type_33359),canonical_f_33362);
} else
{elem_33302.detachEvent(cljs.core.name.call(null,actual_type_33359),canonical_f_33362);
}
{
var G__33363 = seq__33280_33354;
var G__33364 = chunk__33282_33355;
var G__33365 = count__33283_33356;
var G__33366 = (i__33284_33357 + 1);
seq__33280_33354 = G__33363;
chunk__33282_33355 = G__33364;
count__33283_33356 = G__33365;
i__33284_33357 = G__33366;
continue;
}
} else
{var temp__4092__auto___33367__$1 = cljs.core.seq.call(null,seq__33280_33354);if(temp__4092__auto___33367__$1)
{var seq__33280_33368__$1 = temp__4092__auto___33367__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33280_33368__$1))
{var c__14545__auto___33369 = cljs.core.chunk_first.call(null,seq__33280_33368__$1);{
var G__33370 = cljs.core.chunk_rest.call(null,seq__33280_33368__$1);
var G__33371 = c__14545__auto___33369;
var G__33372 = cljs.core.count.call(null,c__14545__auto___33369);
var G__33373 = 0;
seq__33280_33354 = G__33370;
chunk__33282_33355 = G__33371;
count__33283_33356 = G__33372;
i__33284_33357 = G__33373;
continue;
}
} else
{var vec__33300_33374 = cljs.core.first.call(null,seq__33280_33368__$1);var actual_type_33375 = cljs.core.nth.call(null,vec__33300_33374,0,null);var __33376 = cljs.core.nth.call(null,vec__33300_33374,1,null);var keys_33377 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_33303,actual_type_33375,f_33353], null);var canonical_f_33378 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_33302),keys_33377);dommy.core.update_event_listeners_BANG_.call(null,elem_33302,dommy.utils.dissoc_in,keys_33377);
if(cljs.core.truth_(elem_33302.removeEventListener))
{elem_33302.removeEventListener(cljs.core.name.call(null,actual_type_33375),canonical_f_33378);
} else
{elem_33302.detachEvent(cljs.core.name.call(null,actual_type_33375),canonical_f_33378);
}
{
var G__33379 = cljs.core.next.call(null,seq__33280_33368__$1);
var G__33380 = null;
var G__33381 = 0;
var G__33382 = 0;
seq__33280_33354 = G__33379;
chunk__33282_33355 = G__33380;
count__33283_33356 = G__33381;
i__33284_33357 = G__33382;
continue;
}
}
} else
{}
}
break;
}
{
var G__33383 = cljs.core.next.call(null,seq__33279_33345__$1);
var G__33384 = null;
var G__33385 = 0;
var G__33386 = 0;
seq__33279_33304 = G__33383;
chunk__33286_33305 = G__33384;
count__33287_33306 = G__33385;
i__33288_33307 = G__33386;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__33387){
var elem_sel = cljs.core.first(arglist__33387);
var type_fs = cljs.core.rest(arglist__33387);
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
var vec__33395_33402 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_33403 = cljs.core.nth.call(null,vec__33395_33402,0,null);var selector_33404 = cljs.core.nth.call(null,vec__33395_33402,1,null);var seq__33396_33405 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__33397_33406 = null;var count__33398_33407 = 0;var i__33399_33408 = 0;while(true){
if((i__33399_33408 < count__33398_33407))
{var vec__33400_33409 = cljs.core._nth.call(null,chunk__33397_33406,i__33399_33408);var type_33410 = cljs.core.nth.call(null,vec__33400_33409,0,null);var f_33411 = cljs.core.nth.call(null,vec__33400_33409,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_33410,((function (seq__33396_33405,chunk__33397_33406,count__33398_33407,i__33399_33408,vec__33400_33409,type_33410,f_33411){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_33410,this_fn);
return f_33411.call(null,e);
});})(seq__33396_33405,chunk__33397_33406,count__33398_33407,i__33399_33408,vec__33400_33409,type_33410,f_33411))
);
{
var G__33412 = seq__33396_33405;
var G__33413 = chunk__33397_33406;
var G__33414 = count__33398_33407;
var G__33415 = (i__33399_33408 + 1);
seq__33396_33405 = G__33412;
chunk__33397_33406 = G__33413;
count__33398_33407 = G__33414;
i__33399_33408 = G__33415;
continue;
}
} else
{var temp__4092__auto___33416 = cljs.core.seq.call(null,seq__33396_33405);if(temp__4092__auto___33416)
{var seq__33396_33417__$1 = temp__4092__auto___33416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33396_33417__$1))
{var c__14545__auto___33418 = cljs.core.chunk_first.call(null,seq__33396_33417__$1);{
var G__33419 = cljs.core.chunk_rest.call(null,seq__33396_33417__$1);
var G__33420 = c__14545__auto___33418;
var G__33421 = cljs.core.count.call(null,c__14545__auto___33418);
var G__33422 = 0;
seq__33396_33405 = G__33419;
chunk__33397_33406 = G__33420;
count__33398_33407 = G__33421;
i__33399_33408 = G__33422;
continue;
}
} else
{var vec__33401_33423 = cljs.core.first.call(null,seq__33396_33417__$1);var type_33424 = cljs.core.nth.call(null,vec__33401_33423,0,null);var f_33425 = cljs.core.nth.call(null,vec__33401_33423,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_33424,((function (seq__33396_33405,chunk__33397_33406,count__33398_33407,i__33399_33408,vec__33401_33423,type_33424,f_33425,seq__33396_33417__$1,temp__4092__auto___33416){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_33424,this_fn);
return f_33425.call(null,e);
});})(seq__33396_33405,chunk__33397_33406,count__33398_33407,i__33399_33408,vec__33401_33423,type_33424,f_33425,seq__33396_33417__$1,temp__4092__auto___33416))
);
{
var G__33426 = cljs.core.next.call(null,seq__33396_33417__$1);
var G__33427 = null;
var G__33428 = 0;
var G__33429 = 0;
seq__33396_33405 = G__33426;
chunk__33397_33406 = G__33427;
count__33398_33407 = G__33428;
i__33399_33408 = G__33429;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__33430){
var elem_sel = cljs.core.first(arglist__33430);
var type_fs = cljs.core.rest(arglist__33430);
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
var fire_BANG___delegate = function (node,event_type,p__33431){var vec__33433 = p__33431;var update_event_BANG_ = cljs.core.nth.call(null,vec__33433,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13821__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
var p__33431 = null;if (arguments.length > 2) {
  p__33431 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__33431);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__33434){
var node = cljs.core.first(arglist__33434);
arglist__33434 = cljs.core.next(arglist__33434);
var event_type = cljs.core.first(arglist__33434);
var p__33431 = cljs.core.rest(arglist__33434);
return fire_BANG___delegate(node,event_type,p__33431);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map