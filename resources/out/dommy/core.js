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
dommy.core.text = (function text(elem){var or__13954__auto__ = elem.textContent;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
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
var append_BANG___2 = (function (parent,child){var G__45166 = dommy.template.__GT_node_like.call(null,parent);G__45166.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__45166;
});
var append_BANG___3 = (function() { 
var G__45171__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__45167_45172 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__45168_45173 = null;var count__45169_45174 = 0;var i__45170_45175 = 0;while(true){
if((i__45170_45175 < count__45169_45174))
{var c_45176 = cljs.core._nth.call(null,chunk__45168_45173,i__45170_45175);append_BANG_.call(null,parent__$1,c_45176);
{
var G__45177 = seq__45167_45172;
var G__45178 = chunk__45168_45173;
var G__45179 = count__45169_45174;
var G__45180 = (i__45170_45175 + 1);
seq__45167_45172 = G__45177;
chunk__45168_45173 = G__45178;
count__45169_45174 = G__45179;
i__45170_45175 = G__45180;
continue;
}
} else
{var temp__4092__auto___45181 = cljs.core.seq.call(null,seq__45167_45172);if(temp__4092__auto___45181)
{var seq__45167_45182__$1 = temp__4092__auto___45181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45167_45182__$1))
{var c__14683__auto___45183 = cljs.core.chunk_first.call(null,seq__45167_45182__$1);{
var G__45184 = cljs.core.chunk_rest.call(null,seq__45167_45182__$1);
var G__45185 = c__14683__auto___45183;
var G__45186 = cljs.core.count.call(null,c__14683__auto___45183);
var G__45187 = 0;
seq__45167_45172 = G__45184;
chunk__45168_45173 = G__45185;
count__45169_45174 = G__45186;
i__45170_45175 = G__45187;
continue;
}
} else
{var c_45188 = cljs.core.first.call(null,seq__45167_45182__$1);append_BANG_.call(null,parent__$1,c_45188);
{
var G__45189 = cljs.core.next.call(null,seq__45167_45182__$1);
var G__45190 = null;
var G__45191 = 0;
var G__45192 = 0;
seq__45167_45172 = G__45189;
chunk__45168_45173 = G__45190;
count__45169_45174 = G__45191;
i__45170_45175 = G__45192;
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
var G__45171 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45171__delegate.call(this,parent,child,more_children);};
G__45171.cljs$lang$maxFixedArity = 2;
G__45171.cljs$lang$applyTo = (function (arglist__45193){
var parent = cljs.core.first(arglist__45193);
arglist__45193 = cljs.core.next(arglist__45193);
var child = cljs.core.first(arglist__45193);
var more_children = cljs.core.rest(arglist__45193);
return G__45171__delegate(parent,child,more_children);
});
G__45171.cljs$core$IFn$_invoke$arity$variadic = G__45171__delegate;
return G__45171;
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
var G__45202__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__45198_45203 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__45199_45204 = null;var count__45200_45205 = 0;var i__45201_45206 = 0;while(true){
if((i__45201_45206 < count__45200_45205))
{var c_45207 = cljs.core._nth.call(null,chunk__45199_45204,i__45201_45206);prepend_BANG_.call(null,parent__$1,c_45207);
{
var G__45208 = seq__45198_45203;
var G__45209 = chunk__45199_45204;
var G__45210 = count__45200_45205;
var G__45211 = (i__45201_45206 + 1);
seq__45198_45203 = G__45208;
chunk__45199_45204 = G__45209;
count__45200_45205 = G__45210;
i__45201_45206 = G__45211;
continue;
}
} else
{var temp__4092__auto___45212 = cljs.core.seq.call(null,seq__45198_45203);if(temp__4092__auto___45212)
{var seq__45198_45213__$1 = temp__4092__auto___45212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45198_45213__$1))
{var c__14683__auto___45214 = cljs.core.chunk_first.call(null,seq__45198_45213__$1);{
var G__45215 = cljs.core.chunk_rest.call(null,seq__45198_45213__$1);
var G__45216 = c__14683__auto___45214;
var G__45217 = cljs.core.count.call(null,c__14683__auto___45214);
var G__45218 = 0;
seq__45198_45203 = G__45215;
chunk__45199_45204 = G__45216;
count__45200_45205 = G__45217;
i__45201_45206 = G__45218;
continue;
}
} else
{var c_45219 = cljs.core.first.call(null,seq__45198_45213__$1);prepend_BANG_.call(null,parent__$1,c_45219);
{
var G__45220 = cljs.core.next.call(null,seq__45198_45213__$1);
var G__45221 = null;
var G__45222 = 0;
var G__45223 = 0;
seq__45198_45203 = G__45220;
chunk__45199_45204 = G__45221;
count__45200_45205 = G__45222;
i__45201_45206 = G__45223;
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
var G__45202 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45202__delegate.call(this,parent,child,more_children);};
G__45202.cljs$lang$maxFixedArity = 2;
G__45202.cljs$lang$applyTo = (function (arglist__45224){
var parent = cljs.core.first(arglist__45224);
arglist__45224 = cljs.core.next(arglist__45224);
var child = cljs.core.first(arglist__45224);
var more_children = cljs.core.rest(arglist__45224);
return G__45202__delegate(parent,child,more_children);
});
G__45202.cljs$core$IFn$_invoke$arity$variadic = G__45202__delegate;
return G__45202;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___45225 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___45225))
{var next_45226 = temp__4090__auto___45225;parent.insertBefore(actual_node,next_45226);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__45228 = dommy.template.__GT_node_like.call(null,parent);G__45228.innerHTML = "";
dommy.core.append_BANG_.call(null,G__45228,node_like);
return G__45228;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__45230 = elem__$1.parentNode;G__45230.removeChild(elem__$1);
return G__45230;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45236){var vec__45237 = p__45236;var k = cljs.core.nth.call(null,vec__45237,0,null);var v = cljs.core.nth.call(null,vec__45237,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t45238 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t45238 = (function (v,k,vec__45237,p__45236,container,key_selectors_map,template,selector_map,meta45239){
this.v = v;
this.k = k;
this.vec__45237 = vec__45237;
this.p__45236 = p__45236;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta45239 = meta45239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t45238.cljs$lang$type = true;
dommy.core.t45238.cljs$lang$ctorStr = "dommy.core/t45238";
dommy.core.t45238.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"dommy.core/t45238");
});
dommy.core.t45238.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t45238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45240){var self__ = this;
var _45240__$1 = this;return self__.meta45239;
});
dommy.core.t45238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45240,meta45239__$1){var self__ = this;
var _45240__$1 = this;return (new dommy.core.t45238(self__.v,self__.k,self__.vec__45237,self__.p__45236,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta45239__$1));
});
dommy.core.__GT_t45238 = (function __GT_t45238(v__$1,k__$1,vec__45237__$1,p__45236__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta45239){return (new dommy.core.t45238(v__$1,k__$1,vec__45237__$1,p__45236__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta45239));
});
}
return (new dommy.core.t45238(v,k,vec__45237,p__45236,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__45241_SHARP_){return p1__45241_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__45242_SHARP_){return !((p1__45242_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45243){var vec__45244 = p__45243;var special_mouse_event = cljs.core.nth.call(null,vec__45244,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__45244,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13954__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13942__auto__ = related_target;if(cljs.core.truth_(and__13942__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13942__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13942__auto__ = selected_target;if(cljs.core.truth_(and__13942__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13942__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13954__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__45245){
var elem = cljs.core.first(arglist__45245);
arglist__45245 = cljs.core.next(arglist__45245);
var f = cljs.core.first(arglist__45245);
var args = cljs.core.rest(arglist__45245);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__45246_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__45246_SHARP_));
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
var vec__45270_45293 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45294 = cljs.core.nth.call(null,vec__45270_45293,0,null);var selector_45295 = cljs.core.nth.call(null,vec__45270_45293,1,null);var seq__45271_45296 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45278_45297 = null;var count__45279_45298 = 0;var i__45280_45299 = 0;while(true){
if((i__45280_45299 < count__45279_45298))
{var vec__45287_45300 = cljs.core._nth.call(null,chunk__45278_45297,i__45280_45299);var orig_type_45301 = cljs.core.nth.call(null,vec__45287_45300,0,null);var f_45302 = cljs.core.nth.call(null,vec__45287_45300,1,null);var seq__45281_45303 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45301,new cljs.core.PersistentArrayMap.fromArray([orig_type_45301,cljs.core.identity], true, false)));var chunk__45283_45304 = null;var count__45284_45305 = 0;var i__45285_45306 = 0;while(true){
if((i__45285_45306 < count__45284_45305))
{var vec__45288_45307 = cljs.core._nth.call(null,chunk__45283_45304,i__45285_45306);var actual_type_45308 = cljs.core.nth.call(null,vec__45288_45307,0,null);var factory_45309 = cljs.core.nth.call(null,vec__45288_45307,1,null);var canonical_f_45310 = (cljs.core.truth_(selector_45295)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45294,selector_45295):cljs.core.identity).call(null,factory_45309.call(null,f_45302));dommy.core.update_event_listeners_BANG_.call(null,elem_45294,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45295,actual_type_45308,f_45302], null),canonical_f_45310);
if(cljs.core.truth_(elem_45294.addEventListener))
{elem_45294.addEventListener(cljs.core.name.call(null,actual_type_45308),canonical_f_45310);
} else
{elem_45294.attachEvent(cljs.core.name.call(null,actual_type_45308),canonical_f_45310);
}
{
var G__45311 = seq__45281_45303;
var G__45312 = chunk__45283_45304;
var G__45313 = count__45284_45305;
var G__45314 = (i__45285_45306 + 1);
seq__45281_45303 = G__45311;
chunk__45283_45304 = G__45312;
count__45284_45305 = G__45313;
i__45285_45306 = G__45314;
continue;
}
} else
{var temp__4092__auto___45315 = cljs.core.seq.call(null,seq__45281_45303);if(temp__4092__auto___45315)
{var seq__45281_45316__$1 = temp__4092__auto___45315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45281_45316__$1))
{var c__14683__auto___45317 = cljs.core.chunk_first.call(null,seq__45281_45316__$1);{
var G__45318 = cljs.core.chunk_rest.call(null,seq__45281_45316__$1);
var G__45319 = c__14683__auto___45317;
var G__45320 = cljs.core.count.call(null,c__14683__auto___45317);
var G__45321 = 0;
seq__45281_45303 = G__45318;
chunk__45283_45304 = G__45319;
count__45284_45305 = G__45320;
i__45285_45306 = G__45321;
continue;
}
} else
{var vec__45289_45322 = cljs.core.first.call(null,seq__45281_45316__$1);var actual_type_45323 = cljs.core.nth.call(null,vec__45289_45322,0,null);var factory_45324 = cljs.core.nth.call(null,vec__45289_45322,1,null);var canonical_f_45325 = (cljs.core.truth_(selector_45295)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45294,selector_45295):cljs.core.identity).call(null,factory_45324.call(null,f_45302));dommy.core.update_event_listeners_BANG_.call(null,elem_45294,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45295,actual_type_45323,f_45302], null),canonical_f_45325);
if(cljs.core.truth_(elem_45294.addEventListener))
{elem_45294.addEventListener(cljs.core.name.call(null,actual_type_45323),canonical_f_45325);
} else
{elem_45294.attachEvent(cljs.core.name.call(null,actual_type_45323),canonical_f_45325);
}
{
var G__45326 = cljs.core.next.call(null,seq__45281_45316__$1);
var G__45327 = null;
var G__45328 = 0;
var G__45329 = 0;
seq__45281_45303 = G__45326;
chunk__45283_45304 = G__45327;
count__45284_45305 = G__45328;
i__45285_45306 = G__45329;
continue;
}
}
} else
{}
}
break;
}
{
var G__45330 = seq__45271_45296;
var G__45331 = chunk__45278_45297;
var G__45332 = count__45279_45298;
var G__45333 = (i__45280_45299 + 1);
seq__45271_45296 = G__45330;
chunk__45278_45297 = G__45331;
count__45279_45298 = G__45332;
i__45280_45299 = G__45333;
continue;
}
} else
{var temp__4092__auto___45334 = cljs.core.seq.call(null,seq__45271_45296);if(temp__4092__auto___45334)
{var seq__45271_45335__$1 = temp__4092__auto___45334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45271_45335__$1))
{var c__14683__auto___45336 = cljs.core.chunk_first.call(null,seq__45271_45335__$1);{
var G__45337 = cljs.core.chunk_rest.call(null,seq__45271_45335__$1);
var G__45338 = c__14683__auto___45336;
var G__45339 = cljs.core.count.call(null,c__14683__auto___45336);
var G__45340 = 0;
seq__45271_45296 = G__45337;
chunk__45278_45297 = G__45338;
count__45279_45298 = G__45339;
i__45280_45299 = G__45340;
continue;
}
} else
{var vec__45290_45341 = cljs.core.first.call(null,seq__45271_45335__$1);var orig_type_45342 = cljs.core.nth.call(null,vec__45290_45341,0,null);var f_45343 = cljs.core.nth.call(null,vec__45290_45341,1,null);var seq__45272_45344 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45342,new cljs.core.PersistentArrayMap.fromArray([orig_type_45342,cljs.core.identity], true, false)));var chunk__45274_45345 = null;var count__45275_45346 = 0;var i__45276_45347 = 0;while(true){
if((i__45276_45347 < count__45275_45346))
{var vec__45291_45348 = cljs.core._nth.call(null,chunk__45274_45345,i__45276_45347);var actual_type_45349 = cljs.core.nth.call(null,vec__45291_45348,0,null);var factory_45350 = cljs.core.nth.call(null,vec__45291_45348,1,null);var canonical_f_45351 = (cljs.core.truth_(selector_45295)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45294,selector_45295):cljs.core.identity).call(null,factory_45350.call(null,f_45343));dommy.core.update_event_listeners_BANG_.call(null,elem_45294,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45295,actual_type_45349,f_45343], null),canonical_f_45351);
if(cljs.core.truth_(elem_45294.addEventListener))
{elem_45294.addEventListener(cljs.core.name.call(null,actual_type_45349),canonical_f_45351);
} else
{elem_45294.attachEvent(cljs.core.name.call(null,actual_type_45349),canonical_f_45351);
}
{
var G__45352 = seq__45272_45344;
var G__45353 = chunk__45274_45345;
var G__45354 = count__45275_45346;
var G__45355 = (i__45276_45347 + 1);
seq__45272_45344 = G__45352;
chunk__45274_45345 = G__45353;
count__45275_45346 = G__45354;
i__45276_45347 = G__45355;
continue;
}
} else
{var temp__4092__auto___45356__$1 = cljs.core.seq.call(null,seq__45272_45344);if(temp__4092__auto___45356__$1)
{var seq__45272_45357__$1 = temp__4092__auto___45356__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45272_45357__$1))
{var c__14683__auto___45358 = cljs.core.chunk_first.call(null,seq__45272_45357__$1);{
var G__45359 = cljs.core.chunk_rest.call(null,seq__45272_45357__$1);
var G__45360 = c__14683__auto___45358;
var G__45361 = cljs.core.count.call(null,c__14683__auto___45358);
var G__45362 = 0;
seq__45272_45344 = G__45359;
chunk__45274_45345 = G__45360;
count__45275_45346 = G__45361;
i__45276_45347 = G__45362;
continue;
}
} else
{var vec__45292_45363 = cljs.core.first.call(null,seq__45272_45357__$1);var actual_type_45364 = cljs.core.nth.call(null,vec__45292_45363,0,null);var factory_45365 = cljs.core.nth.call(null,vec__45292_45363,1,null);var canonical_f_45366 = (cljs.core.truth_(selector_45295)?cljs.core.partial.call(null,dommy.core.live_listener,elem_45294,selector_45295):cljs.core.identity).call(null,factory_45365.call(null,f_45343));dommy.core.update_event_listeners_BANG_.call(null,elem_45294,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45295,actual_type_45364,f_45343], null),canonical_f_45366);
if(cljs.core.truth_(elem_45294.addEventListener))
{elem_45294.addEventListener(cljs.core.name.call(null,actual_type_45364),canonical_f_45366);
} else
{elem_45294.attachEvent(cljs.core.name.call(null,actual_type_45364),canonical_f_45366);
}
{
var G__45367 = cljs.core.next.call(null,seq__45272_45357__$1);
var G__45368 = null;
var G__45369 = 0;
var G__45370 = 0;
seq__45272_45344 = G__45367;
chunk__45274_45345 = G__45368;
count__45275_45346 = G__45369;
i__45276_45347 = G__45370;
continue;
}
}
} else
{}
}
break;
}
{
var G__45371 = cljs.core.next.call(null,seq__45271_45335__$1);
var G__45372 = null;
var G__45373 = 0;
var G__45374 = 0;
seq__45271_45296 = G__45371;
chunk__45278_45297 = G__45372;
count__45279_45298 = G__45373;
i__45280_45299 = G__45374;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__45375){
var elem_sel = cljs.core.first(arglist__45375);
var type_fs = cljs.core.rest(arglist__45375);
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
var vec__45399_45422 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45423 = cljs.core.nth.call(null,vec__45399_45422,0,null);var selector_45424 = cljs.core.nth.call(null,vec__45399_45422,1,null);var seq__45400_45425 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45407_45426 = null;var count__45408_45427 = 0;var i__45409_45428 = 0;while(true){
if((i__45409_45428 < count__45408_45427))
{var vec__45416_45429 = cljs.core._nth.call(null,chunk__45407_45426,i__45409_45428);var orig_type_45430 = cljs.core.nth.call(null,vec__45416_45429,0,null);var f_45431 = cljs.core.nth.call(null,vec__45416_45429,1,null);var seq__45410_45432 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45430,new cljs.core.PersistentArrayMap.fromArray([orig_type_45430,cljs.core.identity], true, false)));var chunk__45412_45433 = null;var count__45413_45434 = 0;var i__45414_45435 = 0;while(true){
if((i__45414_45435 < count__45413_45434))
{var vec__45417_45436 = cljs.core._nth.call(null,chunk__45412_45433,i__45414_45435);var actual_type_45437 = cljs.core.nth.call(null,vec__45417_45436,0,null);var __45438 = cljs.core.nth.call(null,vec__45417_45436,1,null);var keys_45439 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45424,actual_type_45437,f_45431], null);var canonical_f_45440 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45423),keys_45439);dommy.core.update_event_listeners_BANG_.call(null,elem_45423,dommy.utils.dissoc_in,keys_45439);
if(cljs.core.truth_(elem_45423.removeEventListener))
{elem_45423.removeEventListener(cljs.core.name.call(null,actual_type_45437),canonical_f_45440);
} else
{elem_45423.detachEvent(cljs.core.name.call(null,actual_type_45437),canonical_f_45440);
}
{
var G__45441 = seq__45410_45432;
var G__45442 = chunk__45412_45433;
var G__45443 = count__45413_45434;
var G__45444 = (i__45414_45435 + 1);
seq__45410_45432 = G__45441;
chunk__45412_45433 = G__45442;
count__45413_45434 = G__45443;
i__45414_45435 = G__45444;
continue;
}
} else
{var temp__4092__auto___45445 = cljs.core.seq.call(null,seq__45410_45432);if(temp__4092__auto___45445)
{var seq__45410_45446__$1 = temp__4092__auto___45445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45410_45446__$1))
{var c__14683__auto___45447 = cljs.core.chunk_first.call(null,seq__45410_45446__$1);{
var G__45448 = cljs.core.chunk_rest.call(null,seq__45410_45446__$1);
var G__45449 = c__14683__auto___45447;
var G__45450 = cljs.core.count.call(null,c__14683__auto___45447);
var G__45451 = 0;
seq__45410_45432 = G__45448;
chunk__45412_45433 = G__45449;
count__45413_45434 = G__45450;
i__45414_45435 = G__45451;
continue;
}
} else
{var vec__45418_45452 = cljs.core.first.call(null,seq__45410_45446__$1);var actual_type_45453 = cljs.core.nth.call(null,vec__45418_45452,0,null);var __45454 = cljs.core.nth.call(null,vec__45418_45452,1,null);var keys_45455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45424,actual_type_45453,f_45431], null);var canonical_f_45456 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45423),keys_45455);dommy.core.update_event_listeners_BANG_.call(null,elem_45423,dommy.utils.dissoc_in,keys_45455);
if(cljs.core.truth_(elem_45423.removeEventListener))
{elem_45423.removeEventListener(cljs.core.name.call(null,actual_type_45453),canonical_f_45456);
} else
{elem_45423.detachEvent(cljs.core.name.call(null,actual_type_45453),canonical_f_45456);
}
{
var G__45457 = cljs.core.next.call(null,seq__45410_45446__$1);
var G__45458 = null;
var G__45459 = 0;
var G__45460 = 0;
seq__45410_45432 = G__45457;
chunk__45412_45433 = G__45458;
count__45413_45434 = G__45459;
i__45414_45435 = G__45460;
continue;
}
}
} else
{}
}
break;
}
{
var G__45461 = seq__45400_45425;
var G__45462 = chunk__45407_45426;
var G__45463 = count__45408_45427;
var G__45464 = (i__45409_45428 + 1);
seq__45400_45425 = G__45461;
chunk__45407_45426 = G__45462;
count__45408_45427 = G__45463;
i__45409_45428 = G__45464;
continue;
}
} else
{var temp__4092__auto___45465 = cljs.core.seq.call(null,seq__45400_45425);if(temp__4092__auto___45465)
{var seq__45400_45466__$1 = temp__4092__auto___45465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45400_45466__$1))
{var c__14683__auto___45467 = cljs.core.chunk_first.call(null,seq__45400_45466__$1);{
var G__45468 = cljs.core.chunk_rest.call(null,seq__45400_45466__$1);
var G__45469 = c__14683__auto___45467;
var G__45470 = cljs.core.count.call(null,c__14683__auto___45467);
var G__45471 = 0;
seq__45400_45425 = G__45468;
chunk__45407_45426 = G__45469;
count__45408_45427 = G__45470;
i__45409_45428 = G__45471;
continue;
}
} else
{var vec__45419_45472 = cljs.core.first.call(null,seq__45400_45466__$1);var orig_type_45473 = cljs.core.nth.call(null,vec__45419_45472,0,null);var f_45474 = cljs.core.nth.call(null,vec__45419_45472,1,null);var seq__45401_45475 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_45473,new cljs.core.PersistentArrayMap.fromArray([orig_type_45473,cljs.core.identity], true, false)));var chunk__45403_45476 = null;var count__45404_45477 = 0;var i__45405_45478 = 0;while(true){
if((i__45405_45478 < count__45404_45477))
{var vec__45420_45479 = cljs.core._nth.call(null,chunk__45403_45476,i__45405_45478);var actual_type_45480 = cljs.core.nth.call(null,vec__45420_45479,0,null);var __45481 = cljs.core.nth.call(null,vec__45420_45479,1,null);var keys_45482 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45424,actual_type_45480,f_45474], null);var canonical_f_45483 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45423),keys_45482);dommy.core.update_event_listeners_BANG_.call(null,elem_45423,dommy.utils.dissoc_in,keys_45482);
if(cljs.core.truth_(elem_45423.removeEventListener))
{elem_45423.removeEventListener(cljs.core.name.call(null,actual_type_45480),canonical_f_45483);
} else
{elem_45423.detachEvent(cljs.core.name.call(null,actual_type_45480),canonical_f_45483);
}
{
var G__45484 = seq__45401_45475;
var G__45485 = chunk__45403_45476;
var G__45486 = count__45404_45477;
var G__45487 = (i__45405_45478 + 1);
seq__45401_45475 = G__45484;
chunk__45403_45476 = G__45485;
count__45404_45477 = G__45486;
i__45405_45478 = G__45487;
continue;
}
} else
{var temp__4092__auto___45488__$1 = cljs.core.seq.call(null,seq__45401_45475);if(temp__4092__auto___45488__$1)
{var seq__45401_45489__$1 = temp__4092__auto___45488__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45401_45489__$1))
{var c__14683__auto___45490 = cljs.core.chunk_first.call(null,seq__45401_45489__$1);{
var G__45491 = cljs.core.chunk_rest.call(null,seq__45401_45489__$1);
var G__45492 = c__14683__auto___45490;
var G__45493 = cljs.core.count.call(null,c__14683__auto___45490);
var G__45494 = 0;
seq__45401_45475 = G__45491;
chunk__45403_45476 = G__45492;
count__45404_45477 = G__45493;
i__45405_45478 = G__45494;
continue;
}
} else
{var vec__45421_45495 = cljs.core.first.call(null,seq__45401_45489__$1);var actual_type_45496 = cljs.core.nth.call(null,vec__45421_45495,0,null);var __45497 = cljs.core.nth.call(null,vec__45421_45495,1,null);var keys_45498 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_45424,actual_type_45496,f_45474], null);var canonical_f_45499 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_45423),keys_45498);dommy.core.update_event_listeners_BANG_.call(null,elem_45423,dommy.utils.dissoc_in,keys_45498);
if(cljs.core.truth_(elem_45423.removeEventListener))
{elem_45423.removeEventListener(cljs.core.name.call(null,actual_type_45496),canonical_f_45499);
} else
{elem_45423.detachEvent(cljs.core.name.call(null,actual_type_45496),canonical_f_45499);
}
{
var G__45500 = cljs.core.next.call(null,seq__45401_45489__$1);
var G__45501 = null;
var G__45502 = 0;
var G__45503 = 0;
seq__45401_45475 = G__45500;
chunk__45403_45476 = G__45501;
count__45404_45477 = G__45502;
i__45405_45478 = G__45503;
continue;
}
}
} else
{}
}
break;
}
{
var G__45504 = cljs.core.next.call(null,seq__45400_45466__$1);
var G__45505 = null;
var G__45506 = 0;
var G__45507 = 0;
seq__45400_45425 = G__45504;
chunk__45407_45426 = G__45505;
count__45408_45427 = G__45506;
i__45409_45428 = G__45507;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__45508){
var elem_sel = cljs.core.first(arglist__45508);
var type_fs = cljs.core.rest(arglist__45508);
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
var vec__45516_45523 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_45524 = cljs.core.nth.call(null,vec__45516_45523,0,null);var selector_45525 = cljs.core.nth.call(null,vec__45516_45523,1,null);var seq__45517_45526 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__45518_45527 = null;var count__45519_45528 = 0;var i__45520_45529 = 0;while(true){
if((i__45520_45529 < count__45519_45528))
{var vec__45521_45530 = cljs.core._nth.call(null,chunk__45518_45527,i__45520_45529);var type_45531 = cljs.core.nth.call(null,vec__45521_45530,0,null);var f_45532 = cljs.core.nth.call(null,vec__45521_45530,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45531,((function (seq__45517_45526,chunk__45518_45527,count__45519_45528,i__45520_45529,vec__45521_45530,type_45531,f_45532){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45531,this_fn);
return f_45532.call(null,e);
});})(seq__45517_45526,chunk__45518_45527,count__45519_45528,i__45520_45529,vec__45521_45530,type_45531,f_45532))
);
{
var G__45533 = seq__45517_45526;
var G__45534 = chunk__45518_45527;
var G__45535 = count__45519_45528;
var G__45536 = (i__45520_45529 + 1);
seq__45517_45526 = G__45533;
chunk__45518_45527 = G__45534;
count__45519_45528 = G__45535;
i__45520_45529 = G__45536;
continue;
}
} else
{var temp__4092__auto___45537 = cljs.core.seq.call(null,seq__45517_45526);if(temp__4092__auto___45537)
{var seq__45517_45538__$1 = temp__4092__auto___45537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45517_45538__$1))
{var c__14683__auto___45539 = cljs.core.chunk_first.call(null,seq__45517_45538__$1);{
var G__45540 = cljs.core.chunk_rest.call(null,seq__45517_45538__$1);
var G__45541 = c__14683__auto___45539;
var G__45542 = cljs.core.count.call(null,c__14683__auto___45539);
var G__45543 = 0;
seq__45517_45526 = G__45540;
chunk__45518_45527 = G__45541;
count__45519_45528 = G__45542;
i__45520_45529 = G__45543;
continue;
}
} else
{var vec__45522_45544 = cljs.core.first.call(null,seq__45517_45538__$1);var type_45545 = cljs.core.nth.call(null,vec__45522_45544,0,null);var f_45546 = cljs.core.nth.call(null,vec__45522_45544,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_45545,((function (seq__45517_45526,chunk__45518_45527,count__45519_45528,i__45520_45529,vec__45522_45544,type_45545,f_45546,seq__45517_45538__$1,temp__4092__auto___45537){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_45545,this_fn);
return f_45546.call(null,e);
});})(seq__45517_45526,chunk__45518_45527,count__45519_45528,i__45520_45529,vec__45522_45544,type_45545,f_45546,seq__45517_45538__$1,temp__4092__auto___45537))
);
{
var G__45547 = cljs.core.next.call(null,seq__45517_45538__$1);
var G__45548 = null;
var G__45549 = 0;
var G__45550 = 0;
seq__45517_45526 = G__45547;
chunk__45518_45527 = G__45548;
count__45519_45528 = G__45549;
i__45520_45529 = G__45550;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__45551){
var elem_sel = cljs.core.first(arglist__45551);
var type_fs = cljs.core.rest(arglist__45551);
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
var fire_BANG___delegate = function (node,event_type,p__45552){var vec__45554 = p__45552;var update_event_BANG_ = cljs.core.nth.call(null,vec__45554,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13954__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
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
var p__45552 = null;if (arguments.length > 2) {
  p__45552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__45552);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__45555){
var node = cljs.core.first(arglist__45555);
arglist__45555 = cljs.core.next(arglist__45555);
var event_type = cljs.core.first(arglist__45555);
var p__45552 = cljs.core.rest(arglist__45555);
return fire_BANG___delegate(node,event_type,p__45552);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map