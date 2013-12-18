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
dommy.core.text = (function text(elem){var or__8245__auto__ = elem.textContent;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
var append_BANG___2 = (function (parent,child){var G__45028 = dommy.template.__GT_node_like.call(null,parent);G__45028.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__45028;
});
var append_BANG___3 = (function() { 
var G__45033__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__45029_45034 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__45030_45035 = null;var count__45031_45036 = 0;var i__45032_45037 = 0;while(true){
if((i__45032_45037 < count__45031_45036))
{var c_45038 = cljs.core._nth.call(null,chunk__45030_45035,i__45032_45037);append_BANG_.call(null,parent__$1,c_45038);
{
var G__45039 = seq__45029_45034;
var G__45040 = chunk__45030_45035;
var G__45041 = count__45031_45036;
var G__45042 = (i__45032_45037 + 1);
seq__45029_45034 = G__45039;
chunk__45030_45035 = G__45040;
count__45031_45036 = G__45041;
i__45032_45037 = G__45042;
continue;
}
} else
{var temp__4092__auto___45043 = cljs.core.seq.call(null,seq__45029_45034);if(temp__4092__auto___45043)
{var seq__45029_45044__$1 = temp__4092__auto___45043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45029_45044__$1))
{var c__8974__auto___45045 = cljs.core.chunk_first.call(null,seq__45029_45044__$1);{
var G__45046 = cljs.core.chunk_rest.call(null,seq__45029_45044__$1);
var G__45047 = c__8974__auto___45045;
var G__45048 = cljs.core.count.call(null,c__8974__auto___45045);
var G__45049 = 0;
seq__45029_45034 = G__45046;
chunk__45030_45035 = G__45047;
count__45031_45036 = G__45048;
i__45032_45037 = G__45049;
continue;
}
} else
{var c_45050 = cljs.core.first.call(null,seq__45029_45044__$1);append_BANG_.call(null,parent__$1,c_45050);
{
var G__45051 = cljs.core.next.call(null,seq__45029_45044__$1);
var G__45052 = null;
var G__45053 = 0;
var G__45054 = 0;
seq__45029_45034 = G__45051;
chunk__45030_45035 = G__45052;
count__45031_45036 = G__45053;
i__45032_45037 = G__45054;
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
var G__45033 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45033__delegate.call(this,parent,child,more_children);};
G__45033.cljs$lang$maxFixedArity = 2;
G__45033.cljs$lang$applyTo = (function (arglist__45055){
var parent = cljs.core.first(arglist__45055);
arglist__45055 = cljs.core.next(arglist__45055);
var child = cljs.core.first(arglist__45055);
var more_children = cljs.core.rest(arglist__45055);
return G__45033__delegate(parent,child,more_children);
});
G__45033.cljs$core$IFn$_invoke$arity$variadic = G__45033__delegate;
return G__45033;
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
var G__45064__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__45060_45065 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__45061_45066 = null;var count__45062_45067 = 0;var i__45063_45068 = 0;while(true){
if((i__45063_45068 < count__45062_45067))
{var c_45069 = cljs.core._nth.call(null,chunk__45061_45066,i__45063_45068);prepend_BANG_.call(null,parent__$1,c_45069);
{
var G__45070 = seq__45060_45065;
var G__45071 = chunk__45061_45066;
var G__45072 = count__45062_45067;
var G__45073 = (i__45063_45068 + 1);
seq__45060_45065 = G__45070;
chunk__45061_45066 = G__45071;
count__45062_45067 = G__45072;
i__45063_45068 = G__45073;
continue;
}
} else
{var temp__4092__auto___45074 = cljs.core.seq.call(null,seq__45060_45065);if(temp__4092__auto___45074)
{var seq__45060_45075__$1 = temp__4092__auto___45074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45060_45075__$1))
{var c__8974__auto___45076 = cljs.core.chunk_first.call(null,seq__45060_45075__$1);{
var G__45077 = cljs.core.chunk_rest.call(null,seq__45060_45075__$1);
var G__45078 = c__8974__auto___45076;
var G__45079 = cljs.core.count.call(null,c__8974__auto___45076);
var G__45080 = 0;
seq__45060_45065 = G__45077;
chunk__45061_45066 = G__45078;
count__45062_45067 = G__45079;
i__45063_45068 = G__45080;
continue;
}
} else
{var c_45081 = cljs.core.first.call(null,seq__45060_45075__$1);prepend_BANG_.call(null,parent__$1,c_45081);
{
var G__45082 = cljs.core.next.call(null,seq__45060_45075__$1);
var G__45083 = null;
var G__45084 = 0;
var G__45085 = 0;
seq__45060_45065 = G__45082;
chunk__45061_45066 = G__45083;
count__45062_45067 = G__45084;
i__45063_45068 = G__45085;
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
var G__45064 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45064__delegate.call(this,parent,child,more_children);};
G__45064.cljs$lang$maxFixedArity = 2;
G__45064.cljs$lang$applyTo = (function (arglist__45086){
var parent = cljs.core.first(arglist__45086);
arglist__45086 = cljs.core.next(arglist__45086);
var child = cljs.core.first(arglist__45086);
var more_children = cljs.core.rest(arglist__45086);
return G__45064__delegate(parent,child,more_children);
});
G__45064.cljs$core$IFn$_invoke$arity$variadic = G__45064__delegate;
return G__45064;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___45087 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___45087))
{var next_45088 = temp__4090__auto___45087;parent.insertBefore(actual_node,next_45088);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__45090 = dommy.template.__GT_node_like.call(null,parent);G__45090.innerHTML = "";
dommy.core.append_BANG_.call(null,G__45090,node_like);
return G__45090;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__45092 = elem__$1.parentNode;G__45092.removeChild(elem__$1);
return G__45092;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45098){var vec__45099 = p__45098;var k = cljs.core.nth.call(null,vec__45099,0,null);var v = cljs.core.nth.call(null,vec__45099,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t45100 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t45100 = (function (v,k,vec__45099,p__45098,container,key_selectors_map,template,selector_map,meta45101){
this.v = v;
this.k = k;
this.vec__45099 = vec__45099;
this.p__45098 = p__45098;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta45101 = meta45101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t45100.cljs$lang$type = true;
dommy.core.t45100.cljs$lang$ctorStr = "dommy.core/t45100";
dommy.core.t45100.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"dommy.core/t45100");
});
dommy.core.t45100.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t45100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45102){var self__ = this;
var _45102__$1 = this;return self__.meta45101;
});
dommy.core.t45100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45102,meta45101__$1){var self__ = this;
var _45102__$1 = this;return (new dommy.core.t45100(self__.v,self__.k,self__.vec__45099,self__.p__45098,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta45101__$1));
});
dommy.core.__GT_t45100 = (function __GT_t45100(v__$1,k__$1,vec__45099__$1,p__45098__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta45101){return (new dommy.core.t45100(v__$1,k__$1,vec__45099__$1,p__45098__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta45101));
});
}
return (new dommy.core.t45100(v,k,vec__45099,p__45098,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__45103_SHARP_){return p1__45103_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__45104_SHARP_){return !((p1__45104_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45105){var vec__45106 = p__45105;var special_mouse_event = cljs.core.nth.call(null,vec__45106,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__45106,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8245__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8233__auto__ = related_target;if(cljs.core.truth_(and__8233__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8233__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8233__auto__ = selected_target;if(cljs.core.truth_(and__8233__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8233__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8245__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__45107){
var elem = cljs.core.first(arglist__45107);
arglist__45107 = cljs.core.next(arglist__45107);
var f = cljs.core.first(arglist__45107);
var args = cljs.core.rest(arglist__45107);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__45108_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__45108_SHARP_));
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
var vec__45132_45155 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45156 = cljs.core.nth.call(null,vec__45132_45155,0,null);var selector_45157 = cljs.core.nth.call(null,vec__45132_45155,1,null);var seq__45133_45158 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45140_45159 = null;var count__45141_45160 = 0;var i__45142_45161 = 0;while(true){
if((i__45142_45161 < count__45141_45160))
{var vec__45149_45162 = cljs.core._nth.call(null,chunk__45140_45159,i__45142_45161);var orig_type_45163 = cljs.core.nth.call(null,vec__45149_45162,0,null);var f_45164 = cljs.core.nth.call(null,vec__45149_45162,1,null);var seq__45143_45165 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45163,new cljs.core.PersistentArrayMap.fromArray([orig_type_45163,cljs.core.identity], true, false)));var chunk__45145_45166 = null;var count__45146_45167 = 0;var i__45147_45168 = 0;while(true){
if((i__45147_45168 < count__45146_45167))
{var vec__45150_45169 = cljs.core._nth.call(null,chunk__45145_45166,i__45147_45168);var actual_type_45170 = cljs.core.nth.call(null,vec__45150_45169,0,null);var factory_45171 = cljs.core.nth.call(null,vec__45150_45169,1,null);var canonical_f_45172 = (cljs.core.truth_(selector_45157)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45156,selector_45157):cljs.core.identity).call(null,factory_45171.call(null,f_45164));dommy.core.update_event_listeners_BANG_.call(null,elem_45156,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45157,actual_type_45170,f_45164], null),canonical_f_45172);
if(cljs.core.truth_(elem_45156.addEventListener))
{elem_45156.addEventListener(cljs.core.name.call(null,actual_type_45170),canonical_f_45172);
} else
{elem_45156.attachEvent(cljs.core.name.call(null,actual_type_45170),canonical_f_45172);
}
{
var G__45173 = seq__45143_45165;
var G__45174 = chunk__45145_45166;
var G__45175 = count__45146_45167;
var G__45176 = (i__45147_45168 + 1);
seq__45143_45165 = G__45173;
chunk__45145_45166 = G__45174;
count__45146_45167 = G__45175;
i__45147_45168 = G__45176;
continue;
}
} else
{var temp__4092__auto___45177 = cljs.core.seq.call(null,seq__45143_45165);if(temp__4092__auto___45177)
{var seq__45143_45178__$1 = temp__4092__auto___45177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45143_45178__$1))
{var c__8974__auto___45179 = cljs.core.chunk_first.call(null,seq__45143_45178__$1);{
var G__45180 = cljs.core.chunk_rest.call(null,seq__45143_45178__$1);
var G__45181 = c__8974__auto___45179;
var G__45182 = cljs.core.count.call(null,c__8974__auto___45179);
var G__45183 = 0;
seq__45143_45165 = G__45180;
chunk__45145_45166 = G__45181;
count__45146_45167 = G__45182;
i__45147_45168 = G__45183;
continue;
}
} else
{var vec__45151_45184 = cljs.core.first.call(null,seq__45143_45178__$1);var actual_type_45185 = cljs.core.nth.call(null,vec__45151_45184,0,null);var factory_45186 = cljs.core.nth.call(null,vec__45151_45184,1,null);var canonical_f_45187 = (cljs.core.truth_(selector_45157)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45156,selector_45157):cljs.core.identity).call(null,factory_45186.call(null,f_45164));dommy.core.update_event_listeners_BANG_.call(null,elem_45156,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45157,actual_type_45185,f_45164], null),canonical_f_45187);
if(cljs.core.truth_(elem_45156.addEventListener))
{elem_45156.addEventListener(cljs.core.name.call(null,actual_type_45185),canonical_f_45187);
} else
{elem_45156.attachEvent(cljs.core.name.call(null,actual_type_45185),canonical_f_45187);
}
{
var G__45188 = cljs.core.next.call(null,seq__45143_45178__$1);
var G__45189 = null;
var G__45190 = 0;
var G__45191 = 0;
seq__45143_45165 = G__45188;
chunk__45145_45166 = G__45189;
count__45146_45167 = G__45190;
i__45147_45168 = G__45191;
continue;
}
}
} else
{}
}
break;
}
{
var G__45192 = seq__45133_45158;
var G__45193 = chunk__45140_45159;
var G__45194 = count__45141_45160;
var G__45195 = (i__45142_45161 + 1);
seq__45133_45158 = G__45192;
chunk__45140_45159 = G__45193;
count__45141_45160 = G__45194;
i__45142_45161 = G__45195;
continue;
}
} else
{var temp__4092__auto___45196 = cljs.core.seq.call(null,seq__45133_45158);if(temp__4092__auto___45196)
{var seq__45133_45197__$1 = temp__4092__auto___45196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45133_45197__$1))
{var c__8974__auto___45198 = cljs.core.chunk_first.call(null,seq__45133_45197__$1);{
var G__45199 = cljs.core.chunk_rest.call(null,seq__45133_45197__$1);
var G__45200 = c__8974__auto___45198;
var G__45201 = cljs.core.count.call(null,c__8974__auto___45198);
var G__45202 = 0;
seq__45133_45158 = G__45199;
chunk__45140_45159 = G__45200;
count__45141_45160 = G__45201;
i__45142_45161 = G__45202;
continue;
}
} else
{var vec__45152_45203 = cljs.core.first.call(null,seq__45133_45197__$1);var orig_type_45204 = cljs.core.nth.call(null,vec__45152_45203,0,null);var f_45205 = cljs.core.nth.call(null,vec__45152_45203,1,null);var seq__45134_45206 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45204,new cljs.core.PersistentArrayMap.fromArray([orig_type_45204,cljs.core.identity], true, false)));var chunk__45136_45207 = null;var count__45137_45208 = 0;var i__45138_45209 = 0;while(true){
if((i__45138_45209 < count__45137_45208))
{var vec__45153_45210 = cljs.core._nth.call(null,chunk__45136_45207,i__45138_45209);var actual_type_45211 = cljs.core.nth.call(null,vec__45153_45210,0,null);var factory_45212 = cljs.core.nth.call(null,vec__45153_45210,1,null);var canonical_f_45213 = (cljs.core.truth_(selector_45157)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45156,selector_45157):cljs.core.identity).call(null,factory_45212.call(null,f_45205));dommy.core.update_event_listeners_BANG_.call(null,elem_45156,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45157,actual_type_45211,f_45205], null),canonical_f_45213);
if(cljs.core.truth_(elem_45156.addEventListener))
{elem_45156.addEventListener(cljs.core.name.call(null,actual_type_45211),canonical_f_45213);
} else
{elem_45156.attachEvent(cljs.core.name.call(null,actual_type_45211),canonical_f_45213);
}
{
var G__45214 = seq__45134_45206;
var G__45215 = chunk__45136_45207;
var G__45216 = count__45137_45208;
var G__45217 = (i__45138_45209 + 1);
seq__45134_45206 = G__45214;
chunk__45136_45207 = G__45215;
count__45137_45208 = G__45216;
i__45138_45209 = G__45217;
continue;
}
} else
{var temp__4092__auto___45218__$1 = cljs.core.seq.call(null,seq__45134_45206);if(temp__4092__auto___45218__$1)
{var seq__45134_45219__$1 = temp__4092__auto___45218__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45134_45219__$1))
{var c__8974__auto___45220 = cljs.core.chunk_first.call(null,seq__45134_45219__$1);{
var G__45221 = cljs.core.chunk_rest.call(null,seq__45134_45219__$1);
var G__45222 = c__8974__auto___45220;
var G__45223 = cljs.core.count.call(null,c__8974__auto___45220);
var G__45224 = 0;
seq__45134_45206 = G__45221;
chunk__45136_45207 = G__45222;
count__45137_45208 = G__45223;
i__45138_45209 = G__45224;
continue;
}
} else
{var vec__45154_45225 = cljs.core.first.call(null,seq__45134_45219__$1);var actual_type_45226 = cljs.core.nth.call(null,vec__45154_45225,0,null);var factory_45227 = cljs.core.nth.call(null,vec__45154_45225,1,null);var canonical_f_45228 = (cljs.core.truth_(selector_45157)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45156,selector_45157):cljs.core.identity).call(null,factory_45227.call(null,f_45205));dommy.core.update_event_listeners_BANG_.call(null,elem_45156,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45157,actual_type_45226,f_45205], null),canonical_f_45228);
if(cljs.core.truth_(elem_45156.addEventListener))
{elem_45156.addEventListener(cljs.core.name.call(null,actual_type_45226),canonical_f_45228);
} else
{elem_45156.attachEvent(cljs.core.name.call(null,actual_type_45226),canonical_f_45228);
}
{
var G__45229 = cljs.core.next.call(null,seq__45134_45219__$1);
var G__45230 = null;
var G__45231 = 0;
var G__45232 = 0;
seq__45134_45206 = G__45229;
chunk__45136_45207 = G__45230;
count__45137_45208 = G__45231;
i__45138_45209 = G__45232;
continue;
}
}
} else
{}
}
break;
}
{
var G__45233 = cljs.core.next.call(null,seq__45133_45197__$1);
var G__45234 = null;
var G__45235 = 0;
var G__45236 = 0;
seq__45133_45158 = G__45233;
chunk__45140_45159 = G__45234;
count__45141_45160 = G__45235;
i__45142_45161 = G__45236;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__45237){
var elem_sel = cljs.core.first(arglist__45237);
var type_fs = cljs.core.rest(arglist__45237);
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
var vec__45261_45284 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45285 = cljs.core.nth.call(null,vec__45261_45284,0,null);var selector_45286 = cljs.core.nth.call(null,vec__45261_45284,1,null);var seq__45262_45287 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45269_45288 = null;var count__45270_45289 = 0;var i__45271_45290 = 0;while(true){
if((i__45271_45290 < count__45270_45289))
{var vec__45278_45291 = cljs.core._nth.call(null,chunk__45269_45288,i__45271_45290);var orig_type_45292 = cljs.core.nth.call(null,vec__45278_45291,0,null);var f_45293 = cljs.core.nth.call(null,vec__45278_45291,1,null);var seq__45272_45294 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45292,new cljs.core.PersistentArrayMap.fromArray([orig_type_45292,cljs.core.identity], true, false)));var chunk__45274_45295 = null;var count__45275_45296 = 0;var i__45276_45297 = 0;while(true){
if((i__45276_45297 < count__45275_45296))
{var vec__45279_45298 = cljs.core._nth.call(null,chunk__45274_45295,i__45276_45297);var actual_type_45299 = cljs.core.nth.call(null,vec__45279_45298,0,null);var __45300 = cljs.core.nth.call(null,vec__45279_45298,1,null);var keys_45301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45286,actual_type_45299,f_45293], null);var canonical_f_45302 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45285),keys_45301);dommy.core.update_event_listeners_BANG_.call(null,elem_45285,dommy.utils.dissoc_in,keys_45301);
if(cljs.core.truth_(elem_45285.removeEventListener))
{elem_45285.removeEventListener(cljs.core.name.call(null,actual_type_45299),canonical_f_45302);
} else
{elem_45285.detachEvent(cljs.core.name.call(null,actual_type_45299),canonical_f_45302);
}
{
var G__45303 = seq__45272_45294;
var G__45304 = chunk__45274_45295;
var G__45305 = count__45275_45296;
var G__45306 = (i__45276_45297 + 1);
seq__45272_45294 = G__45303;
chunk__45274_45295 = G__45304;
count__45275_45296 = G__45305;
i__45276_45297 = G__45306;
continue;
}
} else
{var temp__4092__auto___45307 = cljs.core.seq.call(null,seq__45272_45294);if(temp__4092__auto___45307)
{var seq__45272_45308__$1 = temp__4092__auto___45307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45272_45308__$1))
{var c__8974__auto___45309 = cljs.core.chunk_first.call(null,seq__45272_45308__$1);{
var G__45310 = cljs.core.chunk_rest.call(null,seq__45272_45308__$1);
var G__45311 = c__8974__auto___45309;
var G__45312 = cljs.core.count.call(null,c__8974__auto___45309);
var G__45313 = 0;
seq__45272_45294 = G__45310;
chunk__45274_45295 = G__45311;
count__45275_45296 = G__45312;
i__45276_45297 = G__45313;
continue;
}
} else
{var vec__45280_45314 = cljs.core.first.call(null,seq__45272_45308__$1);var actual_type_45315 = cljs.core.nth.call(null,vec__45280_45314,0,null);var __45316 = cljs.core.nth.call(null,vec__45280_45314,1,null);var keys_45317 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45286,actual_type_45315,f_45293], null);var canonical_f_45318 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45285),keys_45317);dommy.core.update_event_listeners_BANG_.call(null,elem_45285,dommy.utils.dissoc_in,keys_45317);
if(cljs.core.truth_(elem_45285.removeEventListener))
{elem_45285.removeEventListener(cljs.core.name.call(null,actual_type_45315),canonical_f_45318);
} else
{elem_45285.detachEvent(cljs.core.name.call(null,actual_type_45315),canonical_f_45318);
}
{
var G__45319 = cljs.core.next.call(null,seq__45272_45308__$1);
var G__45320 = null;
var G__45321 = 0;
var G__45322 = 0;
seq__45272_45294 = G__45319;
chunk__45274_45295 = G__45320;
count__45275_45296 = G__45321;
i__45276_45297 = G__45322;
continue;
}
}
} else
{}
}
break;
}
{
var G__45323 = seq__45262_45287;
var G__45324 = chunk__45269_45288;
var G__45325 = count__45270_45289;
var G__45326 = (i__45271_45290 + 1);
seq__45262_45287 = G__45323;
chunk__45269_45288 = G__45324;
count__45270_45289 = G__45325;
i__45271_45290 = G__45326;
continue;
}
} else
{var temp__4092__auto___45327 = cljs.core.seq.call(null,seq__45262_45287);if(temp__4092__auto___45327)
{var seq__45262_45328__$1 = temp__4092__auto___45327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45262_45328__$1))
{var c__8974__auto___45329 = cljs.core.chunk_first.call(null,seq__45262_45328__$1);{
var G__45330 = cljs.core.chunk_rest.call(null,seq__45262_45328__$1);
var G__45331 = c__8974__auto___45329;
var G__45332 = cljs.core.count.call(null,c__8974__auto___45329);
var G__45333 = 0;
seq__45262_45287 = G__45330;
chunk__45269_45288 = G__45331;
count__45270_45289 = G__45332;
i__45271_45290 = G__45333;
continue;
}
} else
{var vec__45281_45334 = cljs.core.first.call(null,seq__45262_45328__$1);var orig_type_45335 = cljs.core.nth.call(null,vec__45281_45334,0,null);var f_45336 = cljs.core.nth.call(null,vec__45281_45334,1,null);var seq__45263_45337 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45335,new cljs.core.PersistentArrayMap.fromArray([orig_type_45335,cljs.core.identity], true, false)));var chunk__45265_45338 = null;var count__45266_45339 = 0;var i__45267_45340 = 0;while(true){
if((i__45267_45340 < count__45266_45339))
{var vec__45282_45341 = cljs.core._nth.call(null,chunk__45265_45338,i__45267_45340);var actual_type_45342 = cljs.core.nth.call(null,vec__45282_45341,0,null);var __45343 = cljs.core.nth.call(null,vec__45282_45341,1,null);var keys_45344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45286,actual_type_45342,f_45336], null);var canonical_f_45345 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45285),keys_45344);dommy.core.update_event_listeners_BANG_.call(null,elem_45285,dommy.utils.dissoc_in,keys_45344);
if(cljs.core.truth_(elem_45285.removeEventListener))
{elem_45285.removeEventListener(cljs.core.name.call(null,actual_type_45342),canonical_f_45345);
} else
{elem_45285.detachEvent(cljs.core.name.call(null,actual_type_45342),canonical_f_45345);
}
{
var G__45346 = seq__45263_45337;
var G__45347 = chunk__45265_45338;
var G__45348 = count__45266_45339;
var G__45349 = (i__45267_45340 + 1);
seq__45263_45337 = G__45346;
chunk__45265_45338 = G__45347;
count__45266_45339 = G__45348;
i__45267_45340 = G__45349;
continue;
}
} else
{var temp__4092__auto___45350__$1 = cljs.core.seq.call(null,seq__45263_45337);if(temp__4092__auto___45350__$1)
{var seq__45263_45351__$1 = temp__4092__auto___45350__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45263_45351__$1))
{var c__8974__auto___45352 = cljs.core.chunk_first.call(null,seq__45263_45351__$1);{
var G__45353 = cljs.core.chunk_rest.call(null,seq__45263_45351__$1);
var G__45354 = c__8974__auto___45352;
var G__45355 = cljs.core.count.call(null,c__8974__auto___45352);
var G__45356 = 0;
seq__45263_45337 = G__45353;
chunk__45265_45338 = G__45354;
count__45266_45339 = G__45355;
i__45267_45340 = G__45356;
continue;
}
} else
{var vec__45283_45357 = cljs.core.first.call(null,seq__45263_45351__$1);var actual_type_45358 = cljs.core.nth.call(null,vec__45283_45357,0,null);var __45359 = cljs.core.nth.call(null,vec__45283_45357,1,null);var keys_45360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45286,actual_type_45358,f_45336], null);var canonical_f_45361 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45285),keys_45360);dommy.core.update_event_listeners_BANG_.call(null,elem_45285,dommy.utils.dissoc_in,keys_45360);
if(cljs.core.truth_(elem_45285.removeEventListener))
{elem_45285.removeEventListener(cljs.core.name.call(null,actual_type_45358),canonical_f_45361);
} else
{elem_45285.detachEvent(cljs.core.name.call(null,actual_type_45358),canonical_f_45361);
}
{
var G__45362 = cljs.core.next.call(null,seq__45263_45351__$1);
var G__45363 = null;
var G__45364 = 0;
var G__45365 = 0;
seq__45263_45337 = G__45362;
chunk__45265_45338 = G__45363;
count__45266_45339 = G__45364;
i__45267_45340 = G__45365;
continue;
}
}
} else
{}
}
break;
}
{
var G__45366 = cljs.core.next.call(null,seq__45262_45328__$1);
var G__45367 = null;
var G__45368 = 0;
var G__45369 = 0;
seq__45262_45287 = G__45366;
chunk__45269_45288 = G__45367;
count__45270_45289 = G__45368;
i__45271_45290 = G__45369;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__45370){
var elem_sel = cljs.core.first(arglist__45370);
var type_fs = cljs.core.rest(arglist__45370);
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
var vec__45378_45385 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45386 = cljs.core.nth.call(null,vec__45378_45385,0,null);var selector_45387 = cljs.core.nth.call(null,vec__45378_45385,1,null);var seq__45379_45388 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45380_45389 = null;var count__45381_45390 = 0;var i__45382_45391 = 0;while(true){
if((i__45382_45391 < count__45381_45390))
{var vec__45383_45392 = cljs.core._nth.call(null,chunk__45380_45389,i__45382_45391);var type_45393 = cljs.core.nth.call(null,vec__45383_45392,0,null);var f_45394 = cljs.core.nth.call(null,vec__45383_45392,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45393,((function (seq__45379_45388,chunk__45380_45389,count__45381_45390,i__45382_45391,vec__45383_45392,type_45393,f_45394){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45393,this_fn);
return f_45394.call(null,e);
});})(seq__45379_45388,chunk__45380_45389,count__45381_45390,i__45382_45391,vec__45383_45392,type_45393,f_45394))
);
{
var G__45395 = seq__45379_45388;
var G__45396 = chunk__45380_45389;
var G__45397 = count__45381_45390;
var G__45398 = (i__45382_45391 + 1);
seq__45379_45388 = G__45395;
chunk__45380_45389 = G__45396;
count__45381_45390 = G__45397;
i__45382_45391 = G__45398;
continue;
}
} else
{var temp__4092__auto___45399 = cljs.core.seq.call(null,seq__45379_45388);if(temp__4092__auto___45399)
{var seq__45379_45400__$1 = temp__4092__auto___45399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45379_45400__$1))
{var c__8974__auto___45401 = cljs.core.chunk_first.call(null,seq__45379_45400__$1);{
var G__45402 = cljs.core.chunk_rest.call(null,seq__45379_45400__$1);
var G__45403 = c__8974__auto___45401;
var G__45404 = cljs.core.count.call(null,c__8974__auto___45401);
var G__45405 = 0;
seq__45379_45388 = G__45402;
chunk__45380_45389 = G__45403;
count__45381_45390 = G__45404;
i__45382_45391 = G__45405;
continue;
}
} else
{var vec__45384_45406 = cljs.core.first.call(null,seq__45379_45400__$1);var type_45407 = cljs.core.nth.call(null,vec__45384_45406,0,null);var f_45408 = cljs.core.nth.call(null,vec__45384_45406,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45407,((function (seq__45379_45388,chunk__45380_45389,count__45381_45390,i__45382_45391,vec__45384_45406,type_45407,f_45408,seq__45379_45400__$1,temp__4092__auto___45399){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45407,this_fn);
return f_45408.call(null,e);
});})(seq__45379_45388,chunk__45380_45389,count__45381_45390,i__45382_45391,vec__45384_45406,type_45407,f_45408,seq__45379_45400__$1,temp__4092__auto___45399))
);
{
var G__45409 = cljs.core.next.call(null,seq__45379_45400__$1);
var G__45410 = null;
var G__45411 = 0;
var G__45412 = 0;
seq__45379_45388 = G__45409;
chunk__45380_45389 = G__45410;
count__45381_45390 = G__45411;
i__45382_45391 = G__45412;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__45413){
var elem_sel = cljs.core.first(arglist__45413);
var type_fs = cljs.core.rest(arglist__45413);
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
var fire_BANG___delegate = function (node,event_type,p__45414){var vec__45416 = p__45414;var update_event_BANG_ = cljs.core.nth.call(null,vec__45416,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8245__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
var p__45414 = null;if (arguments.length > 2) {
  p__45414 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__45414);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__45417){
var node = cljs.core.first(arglist__45417);
arglist__45417 = cljs.core.next(arglist__45417);
var event_type = cljs.core.first(arglist__45417);
var p__45414 = cljs.core.rest(arglist__45417);
return fire_BANG___delegate(node,event_type,p__45414);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map