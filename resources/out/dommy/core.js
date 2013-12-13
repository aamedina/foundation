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
var append_BANG___2 = (function (parent,child){var G__301216 = dommy.template.__GT_node_like.call(null,parent);G__301216.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__301216;
});
var append_BANG___3 = (function() { 
var G__301221__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__301217_301222 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__301218_301223 = null;var count__301219_301224 = 0;var i__301220_301225 = 0;while(true){
if((i__301220_301225 < count__301219_301224))
{var c_301226 = cljs.core._nth.call(null,chunk__301218_301223,i__301220_301225);append_BANG_.call(null,parent__$1,c_301226);
{
var G__301227 = seq__301217_301222;
var G__301228 = chunk__301218_301223;
var G__301229 = count__301219_301224;
var G__301230 = (i__301220_301225 + 1);
seq__301217_301222 = G__301227;
chunk__301218_301223 = G__301228;
count__301219_301224 = G__301229;
i__301220_301225 = G__301230;
continue;
}
} else
{var temp__4092__auto___301231 = cljs.core.seq.call(null,seq__301217_301222);if(temp__4092__auto___301231)
{var seq__301217_301232__$1 = temp__4092__auto___301231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301217_301232__$1))
{var c__14549__auto___301233 = cljs.core.chunk_first.call(null,seq__301217_301232__$1);{
var G__301234 = cljs.core.chunk_rest.call(null,seq__301217_301232__$1);
var G__301235 = c__14549__auto___301233;
var G__301236 = cljs.core.count.call(null,c__14549__auto___301233);
var G__301237 = 0;
seq__301217_301222 = G__301234;
chunk__301218_301223 = G__301235;
count__301219_301224 = G__301236;
i__301220_301225 = G__301237;
continue;
}
} else
{var c_301238 = cljs.core.first.call(null,seq__301217_301232__$1);append_BANG_.call(null,parent__$1,c_301238);
{
var G__301239 = cljs.core.next.call(null,seq__301217_301232__$1);
var G__301240 = null;
var G__301241 = 0;
var G__301242 = 0;
seq__301217_301222 = G__301239;
chunk__301218_301223 = G__301240;
count__301219_301224 = G__301241;
i__301220_301225 = G__301242;
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
var G__301221 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__301221__delegate.call(this,parent,child,more_children);};
G__301221.cljs$lang$maxFixedArity = 2;
G__301221.cljs$lang$applyTo = (function (arglist__301243){
var parent = cljs.core.first(arglist__301243);
arglist__301243 = cljs.core.next(arglist__301243);
var child = cljs.core.first(arglist__301243);
var more_children = cljs.core.rest(arglist__301243);
return G__301221__delegate(parent,child,more_children);
});
G__301221.cljs$core$IFn$_invoke$arity$variadic = G__301221__delegate;
return G__301221;
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
var G__301252__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__301248_301253 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__301249_301254 = null;var count__301250_301255 = 0;var i__301251_301256 = 0;while(true){
if((i__301251_301256 < count__301250_301255))
{var c_301257 = cljs.core._nth.call(null,chunk__301249_301254,i__301251_301256);prepend_BANG_.call(null,parent__$1,c_301257);
{
var G__301258 = seq__301248_301253;
var G__301259 = chunk__301249_301254;
var G__301260 = count__301250_301255;
var G__301261 = (i__301251_301256 + 1);
seq__301248_301253 = G__301258;
chunk__301249_301254 = G__301259;
count__301250_301255 = G__301260;
i__301251_301256 = G__301261;
continue;
}
} else
{var temp__4092__auto___301262 = cljs.core.seq.call(null,seq__301248_301253);if(temp__4092__auto___301262)
{var seq__301248_301263__$1 = temp__4092__auto___301262;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301248_301263__$1))
{var c__14549__auto___301264 = cljs.core.chunk_first.call(null,seq__301248_301263__$1);{
var G__301265 = cljs.core.chunk_rest.call(null,seq__301248_301263__$1);
var G__301266 = c__14549__auto___301264;
var G__301267 = cljs.core.count.call(null,c__14549__auto___301264);
var G__301268 = 0;
seq__301248_301253 = G__301265;
chunk__301249_301254 = G__301266;
count__301250_301255 = G__301267;
i__301251_301256 = G__301268;
continue;
}
} else
{var c_301269 = cljs.core.first.call(null,seq__301248_301263__$1);prepend_BANG_.call(null,parent__$1,c_301269);
{
var G__301270 = cljs.core.next.call(null,seq__301248_301263__$1);
var G__301271 = null;
var G__301272 = 0;
var G__301273 = 0;
seq__301248_301253 = G__301270;
chunk__301249_301254 = G__301271;
count__301250_301255 = G__301272;
i__301251_301256 = G__301273;
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
var G__301252 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__301252__delegate.call(this,parent,child,more_children);};
G__301252.cljs$lang$maxFixedArity = 2;
G__301252.cljs$lang$applyTo = (function (arglist__301274){
var parent = cljs.core.first(arglist__301274);
arglist__301274 = cljs.core.next(arglist__301274);
var child = cljs.core.first(arglist__301274);
var more_children = cljs.core.rest(arglist__301274);
return G__301252__delegate(parent,child,more_children);
});
G__301252.cljs$core$IFn$_invoke$arity$variadic = G__301252__delegate;
return G__301252;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___301275 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___301275))
{var next_301276 = temp__4090__auto___301275;parent.insertBefore(actual_node,next_301276);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__301278 = dommy.template.__GT_node_like.call(null,parent);G__301278.innerHTML = "";
dommy.core.append_BANG_.call(null,G__301278,node_like);
return G__301278;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__301280 = elem__$1.parentNode;G__301280.removeChild(elem__$1);
return G__301280;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__301286){var vec__301287 = p__301286;var k = cljs.core.nth.call(null,vec__301287,0,null);var v = cljs.core.nth.call(null,vec__301287,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t301288 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t301288 = (function (v,k,vec__301287,p__301286,container,key_selectors_map,template,selector_map,meta301289){
this.v = v;
this.k = k;
this.vec__301287 = vec__301287;
this.p__301286 = p__301286;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta301289 = meta301289;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t301288.cljs$lang$type = true;
dommy.core.t301288.cljs$lang$ctorStr = "dommy.core/t301288";
dommy.core.t301288.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"dommy.core/t301288");
});
dommy.core.t301288.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t301288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_301290){var self__ = this;
var _301290__$1 = this;return self__.meta301289;
});
dommy.core.t301288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_301290,meta301289__$1){var self__ = this;
var _301290__$1 = this;return (new dommy.core.t301288(self__.v,self__.k,self__.vec__301287,self__.p__301286,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta301289__$1));
});
dommy.core.__GT_t301288 = (function __GT_t301288(v__$1,k__$1,vec__301287__$1,p__301286__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta301289){return (new dommy.core.t301288(v__$1,k__$1,vec__301287__$1,p__301286__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta301289));
});
}
return (new dommy.core.t301288(v,k,vec__301287,p__301286,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__301291_SHARP_){return p1__301291_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__301292_SHARP_){return !((p1__301292_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__301293){var vec__301294 = p__301293;var special_mouse_event = cljs.core.nth.call(null,vec__301294,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__301294,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13825__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13825__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__301295){
var elem = cljs.core.first(arglist__301295);
arglist__301295 = cljs.core.next(arglist__301295);
var f = cljs.core.first(arglist__301295);
var args = cljs.core.rest(arglist__301295);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__301296_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__301296_SHARP_));
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
var vec__301320_301343 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_301344 = cljs.core.nth.call(null,vec__301320_301343,0,null);var selector_301345 = cljs.core.nth.call(null,vec__301320_301343,1,null);var seq__301321_301346 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__301328_301347 = null;var count__301329_301348 = 0;var i__301330_301349 = 0;while(true){
if((i__301330_301349 < count__301329_301348))
{var vec__301337_301350 = cljs.core._nth.call(null,chunk__301328_301347,i__301330_301349);var orig_type_301351 = cljs.core.nth.call(null,vec__301337_301350,0,null);var f_301352 = cljs.core.nth.call(null,vec__301337_301350,1,null);var seq__301331_301353 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_301351,new cljs.core.PersistentArrayMap.fromArray([orig_type_301351,cljs.core.identity], true, false)));var chunk__301333_301354 = null;var count__301334_301355 = 0;var i__301335_301356 = 0;while(true){
if((i__301335_301356 < count__301334_301355))
{var vec__301338_301357 = cljs.core._nth.call(null,chunk__301333_301354,i__301335_301356);var actual_type_301358 = cljs.core.nth.call(null,vec__301338_301357,0,null);var factory_301359 = cljs.core.nth.call(null,vec__301338_301357,1,null);var canonical_f_301360 = (cljs.core.truth_(selector_301345)?cljs.core.partial.call(null,dommy.core.live_listener,elem_301344,selector_301345):cljs.core.identity).call(null,factory_301359.call(null,f_301352));dommy.core.update_event_listeners_BANG_.call(null,elem_301344,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301345,actual_type_301358,f_301352], null),canonical_f_301360);
if(cljs.core.truth_(elem_301344.addEventListener))
{elem_301344.addEventListener(cljs.core.name.call(null,actual_type_301358),canonical_f_301360);
} else
{elem_301344.attachEvent(cljs.core.name.call(null,actual_type_301358),canonical_f_301360);
}
{
var G__301361 = seq__301331_301353;
var G__301362 = chunk__301333_301354;
var G__301363 = count__301334_301355;
var G__301364 = (i__301335_301356 + 1);
seq__301331_301353 = G__301361;
chunk__301333_301354 = G__301362;
count__301334_301355 = G__301363;
i__301335_301356 = G__301364;
continue;
}
} else
{var temp__4092__auto___301365 = cljs.core.seq.call(null,seq__301331_301353);if(temp__4092__auto___301365)
{var seq__301331_301366__$1 = temp__4092__auto___301365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301331_301366__$1))
{var c__14549__auto___301367 = cljs.core.chunk_first.call(null,seq__301331_301366__$1);{
var G__301368 = cljs.core.chunk_rest.call(null,seq__301331_301366__$1);
var G__301369 = c__14549__auto___301367;
var G__301370 = cljs.core.count.call(null,c__14549__auto___301367);
var G__301371 = 0;
seq__301331_301353 = G__301368;
chunk__301333_301354 = G__301369;
count__301334_301355 = G__301370;
i__301335_301356 = G__301371;
continue;
}
} else
{var vec__301339_301372 = cljs.core.first.call(null,seq__301331_301366__$1);var actual_type_301373 = cljs.core.nth.call(null,vec__301339_301372,0,null);var factory_301374 = cljs.core.nth.call(null,vec__301339_301372,1,null);var canonical_f_301375 = (cljs.core.truth_(selector_301345)?cljs.core.partial.call(null,dommy.core.live_listener,elem_301344,selector_301345):cljs.core.identity).call(null,factory_301374.call(null,f_301352));dommy.core.update_event_listeners_BANG_.call(null,elem_301344,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301345,actual_type_301373,f_301352], null),canonical_f_301375);
if(cljs.core.truth_(elem_301344.addEventListener))
{elem_301344.addEventListener(cljs.core.name.call(null,actual_type_301373),canonical_f_301375);
} else
{elem_301344.attachEvent(cljs.core.name.call(null,actual_type_301373),canonical_f_301375);
}
{
var G__301376 = cljs.core.next.call(null,seq__301331_301366__$1);
var G__301377 = null;
var G__301378 = 0;
var G__301379 = 0;
seq__301331_301353 = G__301376;
chunk__301333_301354 = G__301377;
count__301334_301355 = G__301378;
i__301335_301356 = G__301379;
continue;
}
}
} else
{}
}
break;
}
{
var G__301380 = seq__301321_301346;
var G__301381 = chunk__301328_301347;
var G__301382 = count__301329_301348;
var G__301383 = (i__301330_301349 + 1);
seq__301321_301346 = G__301380;
chunk__301328_301347 = G__301381;
count__301329_301348 = G__301382;
i__301330_301349 = G__301383;
continue;
}
} else
{var temp__4092__auto___301384 = cljs.core.seq.call(null,seq__301321_301346);if(temp__4092__auto___301384)
{var seq__301321_301385__$1 = temp__4092__auto___301384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301321_301385__$1))
{var c__14549__auto___301386 = cljs.core.chunk_first.call(null,seq__301321_301385__$1);{
var G__301387 = cljs.core.chunk_rest.call(null,seq__301321_301385__$1);
var G__301388 = c__14549__auto___301386;
var G__301389 = cljs.core.count.call(null,c__14549__auto___301386);
var G__301390 = 0;
seq__301321_301346 = G__301387;
chunk__301328_301347 = G__301388;
count__301329_301348 = G__301389;
i__301330_301349 = G__301390;
continue;
}
} else
{var vec__301340_301391 = cljs.core.first.call(null,seq__301321_301385__$1);var orig_type_301392 = cljs.core.nth.call(null,vec__301340_301391,0,null);var f_301393 = cljs.core.nth.call(null,vec__301340_301391,1,null);var seq__301322_301394 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_301392,new cljs.core.PersistentArrayMap.fromArray([orig_type_301392,cljs.core.identity], true, false)));var chunk__301324_301395 = null;var count__301325_301396 = 0;var i__301326_301397 = 0;while(true){
if((i__301326_301397 < count__301325_301396))
{var vec__301341_301398 = cljs.core._nth.call(null,chunk__301324_301395,i__301326_301397);var actual_type_301399 = cljs.core.nth.call(null,vec__301341_301398,0,null);var factory_301400 = cljs.core.nth.call(null,vec__301341_301398,1,null);var canonical_f_301401 = (cljs.core.truth_(selector_301345)?cljs.core.partial.call(null,dommy.core.live_listener,elem_301344,selector_301345):cljs.core.identity).call(null,factory_301400.call(null,f_301393));dommy.core.update_event_listeners_BANG_.call(null,elem_301344,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301345,actual_type_301399,f_301393], null),canonical_f_301401);
if(cljs.core.truth_(elem_301344.addEventListener))
{elem_301344.addEventListener(cljs.core.name.call(null,actual_type_301399),canonical_f_301401);
} else
{elem_301344.attachEvent(cljs.core.name.call(null,actual_type_301399),canonical_f_301401);
}
{
var G__301402 = seq__301322_301394;
var G__301403 = chunk__301324_301395;
var G__301404 = count__301325_301396;
var G__301405 = (i__301326_301397 + 1);
seq__301322_301394 = G__301402;
chunk__301324_301395 = G__301403;
count__301325_301396 = G__301404;
i__301326_301397 = G__301405;
continue;
}
} else
{var temp__4092__auto___301406__$1 = cljs.core.seq.call(null,seq__301322_301394);if(temp__4092__auto___301406__$1)
{var seq__301322_301407__$1 = temp__4092__auto___301406__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301322_301407__$1))
{var c__14549__auto___301408 = cljs.core.chunk_first.call(null,seq__301322_301407__$1);{
var G__301409 = cljs.core.chunk_rest.call(null,seq__301322_301407__$1);
var G__301410 = c__14549__auto___301408;
var G__301411 = cljs.core.count.call(null,c__14549__auto___301408);
var G__301412 = 0;
seq__301322_301394 = G__301409;
chunk__301324_301395 = G__301410;
count__301325_301396 = G__301411;
i__301326_301397 = G__301412;
continue;
}
} else
{var vec__301342_301413 = cljs.core.first.call(null,seq__301322_301407__$1);var actual_type_301414 = cljs.core.nth.call(null,vec__301342_301413,0,null);var factory_301415 = cljs.core.nth.call(null,vec__301342_301413,1,null);var canonical_f_301416 = (cljs.core.truth_(selector_301345)?cljs.core.partial.call(null,dommy.core.live_listener,elem_301344,selector_301345):cljs.core.identity).call(null,factory_301415.call(null,f_301393));dommy.core.update_event_listeners_BANG_.call(null,elem_301344,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301345,actual_type_301414,f_301393], null),canonical_f_301416);
if(cljs.core.truth_(elem_301344.addEventListener))
{elem_301344.addEventListener(cljs.core.name.call(null,actual_type_301414),canonical_f_301416);
} else
{elem_301344.attachEvent(cljs.core.name.call(null,actual_type_301414),canonical_f_301416);
}
{
var G__301417 = cljs.core.next.call(null,seq__301322_301407__$1);
var G__301418 = null;
var G__301419 = 0;
var G__301420 = 0;
seq__301322_301394 = G__301417;
chunk__301324_301395 = G__301418;
count__301325_301396 = G__301419;
i__301326_301397 = G__301420;
continue;
}
}
} else
{}
}
break;
}
{
var G__301421 = cljs.core.next.call(null,seq__301321_301385__$1);
var G__301422 = null;
var G__301423 = 0;
var G__301424 = 0;
seq__301321_301346 = G__301421;
chunk__301328_301347 = G__301422;
count__301329_301348 = G__301423;
i__301330_301349 = G__301424;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__301425){
var elem_sel = cljs.core.first(arglist__301425);
var type_fs = cljs.core.rest(arglist__301425);
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
var vec__301449_301472 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_301473 = cljs.core.nth.call(null,vec__301449_301472,0,null);var selector_301474 = cljs.core.nth.call(null,vec__301449_301472,1,null);var seq__301450_301475 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__301457_301476 = null;var count__301458_301477 = 0;var i__301459_301478 = 0;while(true){
if((i__301459_301478 < count__301458_301477))
{var vec__301466_301479 = cljs.core._nth.call(null,chunk__301457_301476,i__301459_301478);var orig_type_301480 = cljs.core.nth.call(null,vec__301466_301479,0,null);var f_301481 = cljs.core.nth.call(null,vec__301466_301479,1,null);var seq__301460_301482 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_301480,new cljs.core.PersistentArrayMap.fromArray([orig_type_301480,cljs.core.identity], true, false)));var chunk__301462_301483 = null;var count__301463_301484 = 0;var i__301464_301485 = 0;while(true){
if((i__301464_301485 < count__301463_301484))
{var vec__301467_301486 = cljs.core._nth.call(null,chunk__301462_301483,i__301464_301485);var actual_type_301487 = cljs.core.nth.call(null,vec__301467_301486,0,null);var __301488 = cljs.core.nth.call(null,vec__301467_301486,1,null);var keys_301489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301474,actual_type_301487,f_301481], null);var canonical_f_301490 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_301473),keys_301489);dommy.core.update_event_listeners_BANG_.call(null,elem_301473,dommy.utils.dissoc_in,keys_301489);
if(cljs.core.truth_(elem_301473.removeEventListener))
{elem_301473.removeEventListener(cljs.core.name.call(null,actual_type_301487),canonical_f_301490);
} else
{elem_301473.detachEvent(cljs.core.name.call(null,actual_type_301487),canonical_f_301490);
}
{
var G__301491 = seq__301460_301482;
var G__301492 = chunk__301462_301483;
var G__301493 = count__301463_301484;
var G__301494 = (i__301464_301485 + 1);
seq__301460_301482 = G__301491;
chunk__301462_301483 = G__301492;
count__301463_301484 = G__301493;
i__301464_301485 = G__301494;
continue;
}
} else
{var temp__4092__auto___301495 = cljs.core.seq.call(null,seq__301460_301482);if(temp__4092__auto___301495)
{var seq__301460_301496__$1 = temp__4092__auto___301495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301460_301496__$1))
{var c__14549__auto___301497 = cljs.core.chunk_first.call(null,seq__301460_301496__$1);{
var G__301498 = cljs.core.chunk_rest.call(null,seq__301460_301496__$1);
var G__301499 = c__14549__auto___301497;
var G__301500 = cljs.core.count.call(null,c__14549__auto___301497);
var G__301501 = 0;
seq__301460_301482 = G__301498;
chunk__301462_301483 = G__301499;
count__301463_301484 = G__301500;
i__301464_301485 = G__301501;
continue;
}
} else
{var vec__301468_301502 = cljs.core.first.call(null,seq__301460_301496__$1);var actual_type_301503 = cljs.core.nth.call(null,vec__301468_301502,0,null);var __301504 = cljs.core.nth.call(null,vec__301468_301502,1,null);var keys_301505 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301474,actual_type_301503,f_301481], null);var canonical_f_301506 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_301473),keys_301505);dommy.core.update_event_listeners_BANG_.call(null,elem_301473,dommy.utils.dissoc_in,keys_301505);
if(cljs.core.truth_(elem_301473.removeEventListener))
{elem_301473.removeEventListener(cljs.core.name.call(null,actual_type_301503),canonical_f_301506);
} else
{elem_301473.detachEvent(cljs.core.name.call(null,actual_type_301503),canonical_f_301506);
}
{
var G__301507 = cljs.core.next.call(null,seq__301460_301496__$1);
var G__301508 = null;
var G__301509 = 0;
var G__301510 = 0;
seq__301460_301482 = G__301507;
chunk__301462_301483 = G__301508;
count__301463_301484 = G__301509;
i__301464_301485 = G__301510;
continue;
}
}
} else
{}
}
break;
}
{
var G__301511 = seq__301450_301475;
var G__301512 = chunk__301457_301476;
var G__301513 = count__301458_301477;
var G__301514 = (i__301459_301478 + 1);
seq__301450_301475 = G__301511;
chunk__301457_301476 = G__301512;
count__301458_301477 = G__301513;
i__301459_301478 = G__301514;
continue;
}
} else
{var temp__4092__auto___301515 = cljs.core.seq.call(null,seq__301450_301475);if(temp__4092__auto___301515)
{var seq__301450_301516__$1 = temp__4092__auto___301515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301450_301516__$1))
{var c__14549__auto___301517 = cljs.core.chunk_first.call(null,seq__301450_301516__$1);{
var G__301518 = cljs.core.chunk_rest.call(null,seq__301450_301516__$1);
var G__301519 = c__14549__auto___301517;
var G__301520 = cljs.core.count.call(null,c__14549__auto___301517);
var G__301521 = 0;
seq__301450_301475 = G__301518;
chunk__301457_301476 = G__301519;
count__301458_301477 = G__301520;
i__301459_301478 = G__301521;
continue;
}
} else
{var vec__301469_301522 = cljs.core.first.call(null,seq__301450_301516__$1);var orig_type_301523 = cljs.core.nth.call(null,vec__301469_301522,0,null);var f_301524 = cljs.core.nth.call(null,vec__301469_301522,1,null);var seq__301451_301525 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_301523,new cljs.core.PersistentArrayMap.fromArray([orig_type_301523,cljs.core.identity], true, false)));var chunk__301453_301526 = null;var count__301454_301527 = 0;var i__301455_301528 = 0;while(true){
if((i__301455_301528 < count__301454_301527))
{var vec__301470_301529 = cljs.core._nth.call(null,chunk__301453_301526,i__301455_301528);var actual_type_301530 = cljs.core.nth.call(null,vec__301470_301529,0,null);var __301531 = cljs.core.nth.call(null,vec__301470_301529,1,null);var keys_301532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301474,actual_type_301530,f_301524], null);var canonical_f_301533 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_301473),keys_301532);dommy.core.update_event_listeners_BANG_.call(null,elem_301473,dommy.utils.dissoc_in,keys_301532);
if(cljs.core.truth_(elem_301473.removeEventListener))
{elem_301473.removeEventListener(cljs.core.name.call(null,actual_type_301530),canonical_f_301533);
} else
{elem_301473.detachEvent(cljs.core.name.call(null,actual_type_301530),canonical_f_301533);
}
{
var G__301534 = seq__301451_301525;
var G__301535 = chunk__301453_301526;
var G__301536 = count__301454_301527;
var G__301537 = (i__301455_301528 + 1);
seq__301451_301525 = G__301534;
chunk__301453_301526 = G__301535;
count__301454_301527 = G__301536;
i__301455_301528 = G__301537;
continue;
}
} else
{var temp__4092__auto___301538__$1 = cljs.core.seq.call(null,seq__301451_301525);if(temp__4092__auto___301538__$1)
{var seq__301451_301539__$1 = temp__4092__auto___301538__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301451_301539__$1))
{var c__14549__auto___301540 = cljs.core.chunk_first.call(null,seq__301451_301539__$1);{
var G__301541 = cljs.core.chunk_rest.call(null,seq__301451_301539__$1);
var G__301542 = c__14549__auto___301540;
var G__301543 = cljs.core.count.call(null,c__14549__auto___301540);
var G__301544 = 0;
seq__301451_301525 = G__301541;
chunk__301453_301526 = G__301542;
count__301454_301527 = G__301543;
i__301455_301528 = G__301544;
continue;
}
} else
{var vec__301471_301545 = cljs.core.first.call(null,seq__301451_301539__$1);var actual_type_301546 = cljs.core.nth.call(null,vec__301471_301545,0,null);var __301547 = cljs.core.nth.call(null,vec__301471_301545,1,null);var keys_301548 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_301474,actual_type_301546,f_301524], null);var canonical_f_301549 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_301473),keys_301548);dommy.core.update_event_listeners_BANG_.call(null,elem_301473,dommy.utils.dissoc_in,keys_301548);
if(cljs.core.truth_(elem_301473.removeEventListener))
{elem_301473.removeEventListener(cljs.core.name.call(null,actual_type_301546),canonical_f_301549);
} else
{elem_301473.detachEvent(cljs.core.name.call(null,actual_type_301546),canonical_f_301549);
}
{
var G__301550 = cljs.core.next.call(null,seq__301451_301539__$1);
var G__301551 = null;
var G__301552 = 0;
var G__301553 = 0;
seq__301451_301525 = G__301550;
chunk__301453_301526 = G__301551;
count__301454_301527 = G__301552;
i__301455_301528 = G__301553;
continue;
}
}
} else
{}
}
break;
}
{
var G__301554 = cljs.core.next.call(null,seq__301450_301516__$1);
var G__301555 = null;
var G__301556 = 0;
var G__301557 = 0;
seq__301450_301475 = G__301554;
chunk__301457_301476 = G__301555;
count__301458_301477 = G__301556;
i__301459_301478 = G__301557;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__301558){
var elem_sel = cljs.core.first(arglist__301558);
var type_fs = cljs.core.rest(arglist__301558);
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
var vec__301566_301573 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_301574 = cljs.core.nth.call(null,vec__301566_301573,0,null);var selector_301575 = cljs.core.nth.call(null,vec__301566_301573,1,null);var seq__301567_301576 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__301568_301577 = null;var count__301569_301578 = 0;var i__301570_301579 = 0;while(true){
if((i__301570_301579 < count__301569_301578))
{var vec__301571_301580 = cljs.core._nth.call(null,chunk__301568_301577,i__301570_301579);var type_301581 = cljs.core.nth.call(null,vec__301571_301580,0,null);var f_301582 = cljs.core.nth.call(null,vec__301571_301580,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_301581,((function (seq__301567_301576,chunk__301568_301577,count__301569_301578,i__301570_301579,vec__301571_301580,type_301581,f_301582){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_301581,this_fn);
return f_301582.call(null,e);
});})(seq__301567_301576,chunk__301568_301577,count__301569_301578,i__301570_301579,vec__301571_301580,type_301581,f_301582))
);
{
var G__301583 = seq__301567_301576;
var G__301584 = chunk__301568_301577;
var G__301585 = count__301569_301578;
var G__301586 = (i__301570_301579 + 1);
seq__301567_301576 = G__301583;
chunk__301568_301577 = G__301584;
count__301569_301578 = G__301585;
i__301570_301579 = G__301586;
continue;
}
} else
{var temp__4092__auto___301587 = cljs.core.seq.call(null,seq__301567_301576);if(temp__4092__auto___301587)
{var seq__301567_301588__$1 = temp__4092__auto___301587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301567_301588__$1))
{var c__14549__auto___301589 = cljs.core.chunk_first.call(null,seq__301567_301588__$1);{
var G__301590 = cljs.core.chunk_rest.call(null,seq__301567_301588__$1);
var G__301591 = c__14549__auto___301589;
var G__301592 = cljs.core.count.call(null,c__14549__auto___301589);
var G__301593 = 0;
seq__301567_301576 = G__301590;
chunk__301568_301577 = G__301591;
count__301569_301578 = G__301592;
i__301570_301579 = G__301593;
continue;
}
} else
{var vec__301572_301594 = cljs.core.first.call(null,seq__301567_301588__$1);var type_301595 = cljs.core.nth.call(null,vec__301572_301594,0,null);var f_301596 = cljs.core.nth.call(null,vec__301572_301594,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_301595,((function (seq__301567_301576,chunk__301568_301577,count__301569_301578,i__301570_301579,vec__301572_301594,type_301595,f_301596,seq__301567_301588__$1,temp__4092__auto___301587){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_301595,this_fn);
return f_301596.call(null,e);
});})(seq__301567_301576,chunk__301568_301577,count__301569_301578,i__301570_301579,vec__301572_301594,type_301595,f_301596,seq__301567_301588__$1,temp__4092__auto___301587))
);
{
var G__301597 = cljs.core.next.call(null,seq__301567_301588__$1);
var G__301598 = null;
var G__301599 = 0;
var G__301600 = 0;
seq__301567_301576 = G__301597;
chunk__301568_301577 = G__301598;
count__301569_301578 = G__301599;
i__301570_301579 = G__301600;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__301601){
var elem_sel = cljs.core.first(arglist__301601);
var type_fs = cljs.core.rest(arglist__301601);
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
var fire_BANG___delegate = function (node,event_type,p__301602){var vec__301604 = p__301602;var update_event_BANG_ = cljs.core.nth.call(null,vec__301604,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__301602 = null;if (arguments.length > 2) {
  p__301602 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__301602);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__301605){
var node = cljs.core.first(arglist__301605);
arglist__301605 = cljs.core.next(arglist__301605);
var event_type = cljs.core.first(arglist__301605);
var p__301602 = cljs.core.rest(arglist__301605);
return fire_BANG___delegate(node,event_type,p__301602);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map