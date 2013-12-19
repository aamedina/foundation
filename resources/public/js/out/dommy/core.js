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
dommy.core.text = (function text(elem){var or__8223__auto__ = elem.textContent;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
var append_BANG___2 = (function (parent,child){var G__182139 = dommy.template.__GT_node_like.call(null,parent);G__182139.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__182139;
});
var append_BANG___3 = (function() { 
var G__182144__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__182140_182145 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__182141_182146 = null;var count__182142_182147 = 0;var i__182143_182148 = 0;while(true){
if((i__182143_182148 < count__182142_182147))
{var c_182149 = cljs.core._nth.call(null,chunk__182141_182146,i__182143_182148);append_BANG_.call(null,parent__$1,c_182149);
{
var G__182150 = seq__182140_182145;
var G__182151 = chunk__182141_182146;
var G__182152 = count__182142_182147;
var G__182153 = (i__182143_182148 + 1);
seq__182140_182145 = G__182150;
chunk__182141_182146 = G__182151;
count__182142_182147 = G__182152;
i__182143_182148 = G__182153;
continue;
}
} else
{var temp__4092__auto___182154 = cljs.core.seq.call(null,seq__182140_182145);if(temp__4092__auto___182154)
{var seq__182140_182155__$1 = temp__4092__auto___182154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182140_182155__$1))
{var c__8952__auto___182156 = cljs.core.chunk_first.call(null,seq__182140_182155__$1);{
var G__182157 = cljs.core.chunk_rest.call(null,seq__182140_182155__$1);
var G__182158 = c__8952__auto___182156;
var G__182159 = cljs.core.count.call(null,c__8952__auto___182156);
var G__182160 = 0;
seq__182140_182145 = G__182157;
chunk__182141_182146 = G__182158;
count__182142_182147 = G__182159;
i__182143_182148 = G__182160;
continue;
}
} else
{var c_182161 = cljs.core.first.call(null,seq__182140_182155__$1);append_BANG_.call(null,parent__$1,c_182161);
{
var G__182162 = cljs.core.next.call(null,seq__182140_182155__$1);
var G__182163 = null;
var G__182164 = 0;
var G__182165 = 0;
seq__182140_182145 = G__182162;
chunk__182141_182146 = G__182163;
count__182142_182147 = G__182164;
i__182143_182148 = G__182165;
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
var G__182144 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__182144__delegate.call(this,parent,child,more_children);};
G__182144.cljs$lang$maxFixedArity = 2;
G__182144.cljs$lang$applyTo = (function (arglist__182166){
var parent = cljs.core.first(arglist__182166);
arglist__182166 = cljs.core.next(arglist__182166);
var child = cljs.core.first(arglist__182166);
var more_children = cljs.core.rest(arglist__182166);
return G__182144__delegate(parent,child,more_children);
});
G__182144.cljs$core$IFn$_invoke$arity$variadic = G__182144__delegate;
return G__182144;
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
var G__182175__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__182171_182176 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__182172_182177 = null;var count__182173_182178 = 0;var i__182174_182179 = 0;while(true){
if((i__182174_182179 < count__182173_182178))
{var c_182180 = cljs.core._nth.call(null,chunk__182172_182177,i__182174_182179);prepend_BANG_.call(null,parent__$1,c_182180);
{
var G__182181 = seq__182171_182176;
var G__182182 = chunk__182172_182177;
var G__182183 = count__182173_182178;
var G__182184 = (i__182174_182179 + 1);
seq__182171_182176 = G__182181;
chunk__182172_182177 = G__182182;
count__182173_182178 = G__182183;
i__182174_182179 = G__182184;
continue;
}
} else
{var temp__4092__auto___182185 = cljs.core.seq.call(null,seq__182171_182176);if(temp__4092__auto___182185)
{var seq__182171_182186__$1 = temp__4092__auto___182185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182171_182186__$1))
{var c__8952__auto___182187 = cljs.core.chunk_first.call(null,seq__182171_182186__$1);{
var G__182188 = cljs.core.chunk_rest.call(null,seq__182171_182186__$1);
var G__182189 = c__8952__auto___182187;
var G__182190 = cljs.core.count.call(null,c__8952__auto___182187);
var G__182191 = 0;
seq__182171_182176 = G__182188;
chunk__182172_182177 = G__182189;
count__182173_182178 = G__182190;
i__182174_182179 = G__182191;
continue;
}
} else
{var c_182192 = cljs.core.first.call(null,seq__182171_182186__$1);prepend_BANG_.call(null,parent__$1,c_182192);
{
var G__182193 = cljs.core.next.call(null,seq__182171_182186__$1);
var G__182194 = null;
var G__182195 = 0;
var G__182196 = 0;
seq__182171_182176 = G__182193;
chunk__182172_182177 = G__182194;
count__182173_182178 = G__182195;
i__182174_182179 = G__182196;
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
var G__182175 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__182175__delegate.call(this,parent,child,more_children);};
G__182175.cljs$lang$maxFixedArity = 2;
G__182175.cljs$lang$applyTo = (function (arglist__182197){
var parent = cljs.core.first(arglist__182197);
arglist__182197 = cljs.core.next(arglist__182197);
var child = cljs.core.first(arglist__182197);
var more_children = cljs.core.rest(arglist__182197);
return G__182175__delegate(parent,child,more_children);
});
G__182175.cljs$core$IFn$_invoke$arity$variadic = G__182175__delegate;
return G__182175;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___182198 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___182198))
{var next_182199 = temp__4090__auto___182198;parent.insertBefore(actual_node,next_182199);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__182201 = dommy.template.__GT_node_like.call(null,parent);G__182201.innerHTML = "";
dommy.core.append_BANG_.call(null,G__182201,node_like);
return G__182201;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__182203 = elem__$1.parentNode;G__182203.removeChild(elem__$1);
return G__182203;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__182209){var vec__182210 = p__182209;var k = cljs.core.nth.call(null,vec__182210,0,null);var v = cljs.core.nth.call(null,vec__182210,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t182211 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t182211 = (function (v,k,vec__182210,p__182209,container,key_selectors_map,template,selector_map,meta182212){
this.v = v;
this.k = k;
this.vec__182210 = vec__182210;
this.p__182209 = p__182209;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta182212 = meta182212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t182211.cljs$lang$type = true;
dommy.core.t182211.cljs$lang$ctorStr = "dommy.core/t182211";
dommy.core.t182211.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"dommy.core/t182211");
});
dommy.core.t182211.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t182211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_182213){var self__ = this;
var _182213__$1 = this;return self__.meta182212;
});
dommy.core.t182211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_182213,meta182212__$1){var self__ = this;
var _182213__$1 = this;return (new dommy.core.t182211(self__.v,self__.k,self__.vec__182210,self__.p__182209,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta182212__$1));
});
dommy.core.__GT_t182211 = (function __GT_t182211(v__$1,k__$1,vec__182210__$1,p__182209__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta182212){return (new dommy.core.t182211(v__$1,k__$1,vec__182210__$1,p__182209__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta182212));
});
}
return (new dommy.core.t182211(v,k,vec__182210,p__182209,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__182214_SHARP_){return p1__182214_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__182215_SHARP_){return !((p1__182215_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__182216){var vec__182217 = p__182216;var special_mouse_event = cljs.core.nth.call(null,vec__182217,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__182217,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8223__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__8211__auto__ = related_target;if(cljs.core.truth_(and__8211__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__8211__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__8211__auto__ = selected_target;if(cljs.core.truth_(and__8211__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__8211__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__8223__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__182218){
var elem = cljs.core.first(arglist__182218);
arglist__182218 = cljs.core.next(arglist__182218);
var f = cljs.core.first(arglist__182218);
var args = cljs.core.rest(arglist__182218);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__182219_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__182219_SHARP_));
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
var vec__182243_182266 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_182267 = cljs.core.nth.call(null,vec__182243_182266,0,null);var selector_182268 = cljs.core.nth.call(null,vec__182243_182266,1,null);var seq__182244_182269 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__182251_182270 = null;var count__182252_182271 = 0;var i__182253_182272 = 0;while(true){
if((i__182253_182272 < count__182252_182271))
{var vec__182260_182273 = cljs.core._nth.call(null,chunk__182251_182270,i__182253_182272);var orig_type_182274 = cljs.core.nth.call(null,vec__182260_182273,0,null);var f_182275 = cljs.core.nth.call(null,vec__182260_182273,1,null);var seq__182254_182276 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_182274,new cljs.core.PersistentArrayMap.fromArray([orig_type_182274,cljs.core.identity], true, false)));var chunk__182256_182277 = null;var count__182257_182278 = 0;var i__182258_182279 = 0;while(true){
if((i__182258_182279 < count__182257_182278))
{var vec__182261_182280 = cljs.core._nth.call(null,chunk__182256_182277,i__182258_182279);var actual_type_182281 = cljs.core.nth.call(null,vec__182261_182280,0,null);var factory_182282 = cljs.core.nth.call(null,vec__182261_182280,1,null);var canonical_f_182283 = (cljs.core.truth_(selector_182268)?cljs.core.partial.call(null,dommy.core.live_listener,elem_182267,selector_182268):cljs.core.identity).call(null,factory_182282.call(null,f_182275));dommy.core.update_event_listeners_BANG_.call(null,elem_182267,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182268,actual_type_182281,f_182275], null),canonical_f_182283);
if(cljs.core.truth_(elem_182267.addEventListener))
{elem_182267.addEventListener(cljs.core.name.call(null,actual_type_182281),canonical_f_182283);
} else
{elem_182267.attachEvent(cljs.core.name.call(null,actual_type_182281),canonical_f_182283);
}
{
var G__182284 = seq__182254_182276;
var G__182285 = chunk__182256_182277;
var G__182286 = count__182257_182278;
var G__182287 = (i__182258_182279 + 1);
seq__182254_182276 = G__182284;
chunk__182256_182277 = G__182285;
count__182257_182278 = G__182286;
i__182258_182279 = G__182287;
continue;
}
} else
{var temp__4092__auto___182288 = cljs.core.seq.call(null,seq__182254_182276);if(temp__4092__auto___182288)
{var seq__182254_182289__$1 = temp__4092__auto___182288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182254_182289__$1))
{var c__8952__auto___182290 = cljs.core.chunk_first.call(null,seq__182254_182289__$1);{
var G__182291 = cljs.core.chunk_rest.call(null,seq__182254_182289__$1);
var G__182292 = c__8952__auto___182290;
var G__182293 = cljs.core.count.call(null,c__8952__auto___182290);
var G__182294 = 0;
seq__182254_182276 = G__182291;
chunk__182256_182277 = G__182292;
count__182257_182278 = G__182293;
i__182258_182279 = G__182294;
continue;
}
} else
{var vec__182262_182295 = cljs.core.first.call(null,seq__182254_182289__$1);var actual_type_182296 = cljs.core.nth.call(null,vec__182262_182295,0,null);var factory_182297 = cljs.core.nth.call(null,vec__182262_182295,1,null);var canonical_f_182298 = (cljs.core.truth_(selector_182268)?cljs.core.partial.call(null,dommy.core.live_listener,elem_182267,selector_182268):cljs.core.identity).call(null,factory_182297.call(null,f_182275));dommy.core.update_event_listeners_BANG_.call(null,elem_182267,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182268,actual_type_182296,f_182275], null),canonical_f_182298);
if(cljs.core.truth_(elem_182267.addEventListener))
{elem_182267.addEventListener(cljs.core.name.call(null,actual_type_182296),canonical_f_182298);
} else
{elem_182267.attachEvent(cljs.core.name.call(null,actual_type_182296),canonical_f_182298);
}
{
var G__182299 = cljs.core.next.call(null,seq__182254_182289__$1);
var G__182300 = null;
var G__182301 = 0;
var G__182302 = 0;
seq__182254_182276 = G__182299;
chunk__182256_182277 = G__182300;
count__182257_182278 = G__182301;
i__182258_182279 = G__182302;
continue;
}
}
} else
{}
}
break;
}
{
var G__182303 = seq__182244_182269;
var G__182304 = chunk__182251_182270;
var G__182305 = count__182252_182271;
var G__182306 = (i__182253_182272 + 1);
seq__182244_182269 = G__182303;
chunk__182251_182270 = G__182304;
count__182252_182271 = G__182305;
i__182253_182272 = G__182306;
continue;
}
} else
{var temp__4092__auto___182307 = cljs.core.seq.call(null,seq__182244_182269);if(temp__4092__auto___182307)
{var seq__182244_182308__$1 = temp__4092__auto___182307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182244_182308__$1))
{var c__8952__auto___182309 = cljs.core.chunk_first.call(null,seq__182244_182308__$1);{
var G__182310 = cljs.core.chunk_rest.call(null,seq__182244_182308__$1);
var G__182311 = c__8952__auto___182309;
var G__182312 = cljs.core.count.call(null,c__8952__auto___182309);
var G__182313 = 0;
seq__182244_182269 = G__182310;
chunk__182251_182270 = G__182311;
count__182252_182271 = G__182312;
i__182253_182272 = G__182313;
continue;
}
} else
{var vec__182263_182314 = cljs.core.first.call(null,seq__182244_182308__$1);var orig_type_182315 = cljs.core.nth.call(null,vec__182263_182314,0,null);var f_182316 = cljs.core.nth.call(null,vec__182263_182314,1,null);var seq__182245_182317 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_182315,new cljs.core.PersistentArrayMap.fromArray([orig_type_182315,cljs.core.identity], true, false)));var chunk__182247_182318 = null;var count__182248_182319 = 0;var i__182249_182320 = 0;while(true){
if((i__182249_182320 < count__182248_182319))
{var vec__182264_182321 = cljs.core._nth.call(null,chunk__182247_182318,i__182249_182320);var actual_type_182322 = cljs.core.nth.call(null,vec__182264_182321,0,null);var factory_182323 = cljs.core.nth.call(null,vec__182264_182321,1,null);var canonical_f_182324 = (cljs.core.truth_(selector_182268)?cljs.core.partial.call(null,dommy.core.live_listener,elem_182267,selector_182268):cljs.core.identity).call(null,factory_182323.call(null,f_182316));dommy.core.update_event_listeners_BANG_.call(null,elem_182267,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182268,actual_type_182322,f_182316], null),canonical_f_182324);
if(cljs.core.truth_(elem_182267.addEventListener))
{elem_182267.addEventListener(cljs.core.name.call(null,actual_type_182322),canonical_f_182324);
} else
{elem_182267.attachEvent(cljs.core.name.call(null,actual_type_182322),canonical_f_182324);
}
{
var G__182325 = seq__182245_182317;
var G__182326 = chunk__182247_182318;
var G__182327 = count__182248_182319;
var G__182328 = (i__182249_182320 + 1);
seq__182245_182317 = G__182325;
chunk__182247_182318 = G__182326;
count__182248_182319 = G__182327;
i__182249_182320 = G__182328;
continue;
}
} else
{var temp__4092__auto___182329__$1 = cljs.core.seq.call(null,seq__182245_182317);if(temp__4092__auto___182329__$1)
{var seq__182245_182330__$1 = temp__4092__auto___182329__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182245_182330__$1))
{var c__8952__auto___182331 = cljs.core.chunk_first.call(null,seq__182245_182330__$1);{
var G__182332 = cljs.core.chunk_rest.call(null,seq__182245_182330__$1);
var G__182333 = c__8952__auto___182331;
var G__182334 = cljs.core.count.call(null,c__8952__auto___182331);
var G__182335 = 0;
seq__182245_182317 = G__182332;
chunk__182247_182318 = G__182333;
count__182248_182319 = G__182334;
i__182249_182320 = G__182335;
continue;
}
} else
{var vec__182265_182336 = cljs.core.first.call(null,seq__182245_182330__$1);var actual_type_182337 = cljs.core.nth.call(null,vec__182265_182336,0,null);var factory_182338 = cljs.core.nth.call(null,vec__182265_182336,1,null);var canonical_f_182339 = (cljs.core.truth_(selector_182268)?cljs.core.partial.call(null,dommy.core.live_listener,elem_182267,selector_182268):cljs.core.identity).call(null,factory_182338.call(null,f_182316));dommy.core.update_event_listeners_BANG_.call(null,elem_182267,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182268,actual_type_182337,f_182316], null),canonical_f_182339);
if(cljs.core.truth_(elem_182267.addEventListener))
{elem_182267.addEventListener(cljs.core.name.call(null,actual_type_182337),canonical_f_182339);
} else
{elem_182267.attachEvent(cljs.core.name.call(null,actual_type_182337),canonical_f_182339);
}
{
var G__182340 = cljs.core.next.call(null,seq__182245_182330__$1);
var G__182341 = null;
var G__182342 = 0;
var G__182343 = 0;
seq__182245_182317 = G__182340;
chunk__182247_182318 = G__182341;
count__182248_182319 = G__182342;
i__182249_182320 = G__182343;
continue;
}
}
} else
{}
}
break;
}
{
var G__182344 = cljs.core.next.call(null,seq__182244_182308__$1);
var G__182345 = null;
var G__182346 = 0;
var G__182347 = 0;
seq__182244_182269 = G__182344;
chunk__182251_182270 = G__182345;
count__182252_182271 = G__182346;
i__182253_182272 = G__182347;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__182348){
var elem_sel = cljs.core.first(arglist__182348);
var type_fs = cljs.core.rest(arglist__182348);
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
var vec__182372_182395 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_182396 = cljs.core.nth.call(null,vec__182372_182395,0,null);var selector_182397 = cljs.core.nth.call(null,vec__182372_182395,1,null);var seq__182373_182398 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__182380_182399 = null;var count__182381_182400 = 0;var i__182382_182401 = 0;while(true){
if((i__182382_182401 < count__182381_182400))
{var vec__182389_182402 = cljs.core._nth.call(null,chunk__182380_182399,i__182382_182401);var orig_type_182403 = cljs.core.nth.call(null,vec__182389_182402,0,null);var f_182404 = cljs.core.nth.call(null,vec__182389_182402,1,null);var seq__182383_182405 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_182403,new cljs.core.PersistentArrayMap.fromArray([orig_type_182403,cljs.core.identity], true, false)));var chunk__182385_182406 = null;var count__182386_182407 = 0;var i__182387_182408 = 0;while(true){
if((i__182387_182408 < count__182386_182407))
{var vec__182390_182409 = cljs.core._nth.call(null,chunk__182385_182406,i__182387_182408);var actual_type_182410 = cljs.core.nth.call(null,vec__182390_182409,0,null);var __182411 = cljs.core.nth.call(null,vec__182390_182409,1,null);var keys_182412 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182397,actual_type_182410,f_182404], null);var canonical_f_182413 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_182396),keys_182412);dommy.core.update_event_listeners_BANG_.call(null,elem_182396,dommy.utils.dissoc_in,keys_182412);
if(cljs.core.truth_(elem_182396.removeEventListener))
{elem_182396.removeEventListener(cljs.core.name.call(null,actual_type_182410),canonical_f_182413);
} else
{elem_182396.detachEvent(cljs.core.name.call(null,actual_type_182410),canonical_f_182413);
}
{
var G__182414 = seq__182383_182405;
var G__182415 = chunk__182385_182406;
var G__182416 = count__182386_182407;
var G__182417 = (i__182387_182408 + 1);
seq__182383_182405 = G__182414;
chunk__182385_182406 = G__182415;
count__182386_182407 = G__182416;
i__182387_182408 = G__182417;
continue;
}
} else
{var temp__4092__auto___182418 = cljs.core.seq.call(null,seq__182383_182405);if(temp__4092__auto___182418)
{var seq__182383_182419__$1 = temp__4092__auto___182418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182383_182419__$1))
{var c__8952__auto___182420 = cljs.core.chunk_first.call(null,seq__182383_182419__$1);{
var G__182421 = cljs.core.chunk_rest.call(null,seq__182383_182419__$1);
var G__182422 = c__8952__auto___182420;
var G__182423 = cljs.core.count.call(null,c__8952__auto___182420);
var G__182424 = 0;
seq__182383_182405 = G__182421;
chunk__182385_182406 = G__182422;
count__182386_182407 = G__182423;
i__182387_182408 = G__182424;
continue;
}
} else
{var vec__182391_182425 = cljs.core.first.call(null,seq__182383_182419__$1);var actual_type_182426 = cljs.core.nth.call(null,vec__182391_182425,0,null);var __182427 = cljs.core.nth.call(null,vec__182391_182425,1,null);var keys_182428 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182397,actual_type_182426,f_182404], null);var canonical_f_182429 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_182396),keys_182428);dommy.core.update_event_listeners_BANG_.call(null,elem_182396,dommy.utils.dissoc_in,keys_182428);
if(cljs.core.truth_(elem_182396.removeEventListener))
{elem_182396.removeEventListener(cljs.core.name.call(null,actual_type_182426),canonical_f_182429);
} else
{elem_182396.detachEvent(cljs.core.name.call(null,actual_type_182426),canonical_f_182429);
}
{
var G__182430 = cljs.core.next.call(null,seq__182383_182419__$1);
var G__182431 = null;
var G__182432 = 0;
var G__182433 = 0;
seq__182383_182405 = G__182430;
chunk__182385_182406 = G__182431;
count__182386_182407 = G__182432;
i__182387_182408 = G__182433;
continue;
}
}
} else
{}
}
break;
}
{
var G__182434 = seq__182373_182398;
var G__182435 = chunk__182380_182399;
var G__182436 = count__182381_182400;
var G__182437 = (i__182382_182401 + 1);
seq__182373_182398 = G__182434;
chunk__182380_182399 = G__182435;
count__182381_182400 = G__182436;
i__182382_182401 = G__182437;
continue;
}
} else
{var temp__4092__auto___182438 = cljs.core.seq.call(null,seq__182373_182398);if(temp__4092__auto___182438)
{var seq__182373_182439__$1 = temp__4092__auto___182438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182373_182439__$1))
{var c__8952__auto___182440 = cljs.core.chunk_first.call(null,seq__182373_182439__$1);{
var G__182441 = cljs.core.chunk_rest.call(null,seq__182373_182439__$1);
var G__182442 = c__8952__auto___182440;
var G__182443 = cljs.core.count.call(null,c__8952__auto___182440);
var G__182444 = 0;
seq__182373_182398 = G__182441;
chunk__182380_182399 = G__182442;
count__182381_182400 = G__182443;
i__182382_182401 = G__182444;
continue;
}
} else
{var vec__182392_182445 = cljs.core.first.call(null,seq__182373_182439__$1);var orig_type_182446 = cljs.core.nth.call(null,vec__182392_182445,0,null);var f_182447 = cljs.core.nth.call(null,vec__182392_182445,1,null);var seq__182374_182448 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_182446,new cljs.core.PersistentArrayMap.fromArray([orig_type_182446,cljs.core.identity], true, false)));var chunk__182376_182449 = null;var count__182377_182450 = 0;var i__182378_182451 = 0;while(true){
if((i__182378_182451 < count__182377_182450))
{var vec__182393_182452 = cljs.core._nth.call(null,chunk__182376_182449,i__182378_182451);var actual_type_182453 = cljs.core.nth.call(null,vec__182393_182452,0,null);var __182454 = cljs.core.nth.call(null,vec__182393_182452,1,null);var keys_182455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182397,actual_type_182453,f_182447], null);var canonical_f_182456 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_182396),keys_182455);dommy.core.update_event_listeners_BANG_.call(null,elem_182396,dommy.utils.dissoc_in,keys_182455);
if(cljs.core.truth_(elem_182396.removeEventListener))
{elem_182396.removeEventListener(cljs.core.name.call(null,actual_type_182453),canonical_f_182456);
} else
{elem_182396.detachEvent(cljs.core.name.call(null,actual_type_182453),canonical_f_182456);
}
{
var G__182457 = seq__182374_182448;
var G__182458 = chunk__182376_182449;
var G__182459 = count__182377_182450;
var G__182460 = (i__182378_182451 + 1);
seq__182374_182448 = G__182457;
chunk__182376_182449 = G__182458;
count__182377_182450 = G__182459;
i__182378_182451 = G__182460;
continue;
}
} else
{var temp__4092__auto___182461__$1 = cljs.core.seq.call(null,seq__182374_182448);if(temp__4092__auto___182461__$1)
{var seq__182374_182462__$1 = temp__4092__auto___182461__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182374_182462__$1))
{var c__8952__auto___182463 = cljs.core.chunk_first.call(null,seq__182374_182462__$1);{
var G__182464 = cljs.core.chunk_rest.call(null,seq__182374_182462__$1);
var G__182465 = c__8952__auto___182463;
var G__182466 = cljs.core.count.call(null,c__8952__auto___182463);
var G__182467 = 0;
seq__182374_182448 = G__182464;
chunk__182376_182449 = G__182465;
count__182377_182450 = G__182466;
i__182378_182451 = G__182467;
continue;
}
} else
{var vec__182394_182468 = cljs.core.first.call(null,seq__182374_182462__$1);var actual_type_182469 = cljs.core.nth.call(null,vec__182394_182468,0,null);var __182470 = cljs.core.nth.call(null,vec__182394_182468,1,null);var keys_182471 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_182397,actual_type_182469,f_182447], null);var canonical_f_182472 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_182396),keys_182471);dommy.core.update_event_listeners_BANG_.call(null,elem_182396,dommy.utils.dissoc_in,keys_182471);
if(cljs.core.truth_(elem_182396.removeEventListener))
{elem_182396.removeEventListener(cljs.core.name.call(null,actual_type_182469),canonical_f_182472);
} else
{elem_182396.detachEvent(cljs.core.name.call(null,actual_type_182469),canonical_f_182472);
}
{
var G__182473 = cljs.core.next.call(null,seq__182374_182462__$1);
var G__182474 = null;
var G__182475 = 0;
var G__182476 = 0;
seq__182374_182448 = G__182473;
chunk__182376_182449 = G__182474;
count__182377_182450 = G__182475;
i__182378_182451 = G__182476;
continue;
}
}
} else
{}
}
break;
}
{
var G__182477 = cljs.core.next.call(null,seq__182373_182439__$1);
var G__182478 = null;
var G__182479 = 0;
var G__182480 = 0;
seq__182373_182398 = G__182477;
chunk__182380_182399 = G__182478;
count__182381_182400 = G__182479;
i__182382_182401 = G__182480;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__182481){
var elem_sel = cljs.core.first(arglist__182481);
var type_fs = cljs.core.rest(arglist__182481);
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
var vec__182489_182496 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_182497 = cljs.core.nth.call(null,vec__182489_182496,0,null);var selector_182498 = cljs.core.nth.call(null,vec__182489_182496,1,null);var seq__182490_182499 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__182491_182500 = null;var count__182492_182501 = 0;var i__182493_182502 = 0;while(true){
if((i__182493_182502 < count__182492_182501))
{var vec__182494_182503 = cljs.core._nth.call(null,chunk__182491_182500,i__182493_182502);var type_182504 = cljs.core.nth.call(null,vec__182494_182503,0,null);var f_182505 = cljs.core.nth.call(null,vec__182494_182503,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_182504,((function (seq__182490_182499,chunk__182491_182500,count__182492_182501,i__182493_182502,vec__182494_182503,type_182504,f_182505){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_182504,this_fn);
return f_182505.call(null,e);
});})(seq__182490_182499,chunk__182491_182500,count__182492_182501,i__182493_182502,vec__182494_182503,type_182504,f_182505))
);
{
var G__182506 = seq__182490_182499;
var G__182507 = chunk__182491_182500;
var G__182508 = count__182492_182501;
var G__182509 = (i__182493_182502 + 1);
seq__182490_182499 = G__182506;
chunk__182491_182500 = G__182507;
count__182492_182501 = G__182508;
i__182493_182502 = G__182509;
continue;
}
} else
{var temp__4092__auto___182510 = cljs.core.seq.call(null,seq__182490_182499);if(temp__4092__auto___182510)
{var seq__182490_182511__$1 = temp__4092__auto___182510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182490_182511__$1))
{var c__8952__auto___182512 = cljs.core.chunk_first.call(null,seq__182490_182511__$1);{
var G__182513 = cljs.core.chunk_rest.call(null,seq__182490_182511__$1);
var G__182514 = c__8952__auto___182512;
var G__182515 = cljs.core.count.call(null,c__8952__auto___182512);
var G__182516 = 0;
seq__182490_182499 = G__182513;
chunk__182491_182500 = G__182514;
count__182492_182501 = G__182515;
i__182493_182502 = G__182516;
continue;
}
} else
{var vec__182495_182517 = cljs.core.first.call(null,seq__182490_182511__$1);var type_182518 = cljs.core.nth.call(null,vec__182495_182517,0,null);var f_182519 = cljs.core.nth.call(null,vec__182495_182517,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_182518,((function (seq__182490_182499,chunk__182491_182500,count__182492_182501,i__182493_182502,vec__182495_182517,type_182518,f_182519,seq__182490_182511__$1,temp__4092__auto___182510){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_182518,this_fn);
return f_182519.call(null,e);
});})(seq__182490_182499,chunk__182491_182500,count__182492_182501,i__182493_182502,vec__182495_182517,type_182518,f_182519,seq__182490_182511__$1,temp__4092__auto___182510))
);
{
var G__182520 = cljs.core.next.call(null,seq__182490_182511__$1);
var G__182521 = null;
var G__182522 = 0;
var G__182523 = 0;
seq__182490_182499 = G__182520;
chunk__182491_182500 = G__182521;
count__182492_182501 = G__182522;
i__182493_182502 = G__182523;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__182524){
var elem_sel = cljs.core.first(arglist__182524);
var type_fs = cljs.core.rest(arglist__182524);
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
var fire_BANG___delegate = function (node,event_type,p__182525){var vec__182527 = p__182525;var update_event_BANG_ = cljs.core.nth.call(null,vec__182527,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__8223__auto__ = update_event_BANG_;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
var p__182525 = null;if (arguments.length > 2) {
  p__182525 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__182525);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__182528){
var node = cljs.core.first(arglist__182528);
arglist__182528 = cljs.core.next(arglist__182528);
var event_type = cljs.core.first(arglist__182528);
var p__182525 = cljs.core.rest(arglist__182528);
return fire_BANG___delegate(node,event_type,p__182525);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map