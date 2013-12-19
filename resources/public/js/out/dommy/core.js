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
var append_BANG___2 = (function (parent,child){var G__190015 = dommy.template.__GT_node_like.call(null,parent);G__190015.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__190015;
});
var append_BANG___3 = (function() { 
var G__190020__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__190016_190021 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__190017_190022 = null;var count__190018_190023 = 0;var i__190019_190024 = 0;while(true){
if((i__190019_190024 < count__190018_190023))
{var c_190025 = cljs.core._nth.call(null,chunk__190017_190022,i__190019_190024);append_BANG_.call(null,parent__$1,c_190025);
{
var G__190026 = seq__190016_190021;
var G__190027 = chunk__190017_190022;
var G__190028 = count__190018_190023;
var G__190029 = (i__190019_190024 + 1);
seq__190016_190021 = G__190026;
chunk__190017_190022 = G__190027;
count__190018_190023 = G__190028;
i__190019_190024 = G__190029;
continue;
}
} else
{var temp__4092__auto___190030 = cljs.core.seq.call(null,seq__190016_190021);if(temp__4092__auto___190030)
{var seq__190016_190031__$1 = temp__4092__auto___190030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190016_190031__$1))
{var c__8952__auto___190032 = cljs.core.chunk_first.call(null,seq__190016_190031__$1);{
var G__190033 = cljs.core.chunk_rest.call(null,seq__190016_190031__$1);
var G__190034 = c__8952__auto___190032;
var G__190035 = cljs.core.count.call(null,c__8952__auto___190032);
var G__190036 = 0;
seq__190016_190021 = G__190033;
chunk__190017_190022 = G__190034;
count__190018_190023 = G__190035;
i__190019_190024 = G__190036;
continue;
}
} else
{var c_190037 = cljs.core.first.call(null,seq__190016_190031__$1);append_BANG_.call(null,parent__$1,c_190037);
{
var G__190038 = cljs.core.next.call(null,seq__190016_190031__$1);
var G__190039 = null;
var G__190040 = 0;
var G__190041 = 0;
seq__190016_190021 = G__190038;
chunk__190017_190022 = G__190039;
count__190018_190023 = G__190040;
i__190019_190024 = G__190041;
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
var G__190020 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__190020__delegate.call(this,parent,child,more_children);};
G__190020.cljs$lang$maxFixedArity = 2;
G__190020.cljs$lang$applyTo = (function (arglist__190042){
var parent = cljs.core.first(arglist__190042);
arglist__190042 = cljs.core.next(arglist__190042);
var child = cljs.core.first(arglist__190042);
var more_children = cljs.core.rest(arglist__190042);
return G__190020__delegate(parent,child,more_children);
});
G__190020.cljs$core$IFn$_invoke$arity$variadic = G__190020__delegate;
return G__190020;
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
var G__190051__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__190047_190052 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__190048_190053 = null;var count__190049_190054 = 0;var i__190050_190055 = 0;while(true){
if((i__190050_190055 < count__190049_190054))
{var c_190056 = cljs.core._nth.call(null,chunk__190048_190053,i__190050_190055);prepend_BANG_.call(null,parent__$1,c_190056);
{
var G__190057 = seq__190047_190052;
var G__190058 = chunk__190048_190053;
var G__190059 = count__190049_190054;
var G__190060 = (i__190050_190055 + 1);
seq__190047_190052 = G__190057;
chunk__190048_190053 = G__190058;
count__190049_190054 = G__190059;
i__190050_190055 = G__190060;
continue;
}
} else
{var temp__4092__auto___190061 = cljs.core.seq.call(null,seq__190047_190052);if(temp__4092__auto___190061)
{var seq__190047_190062__$1 = temp__4092__auto___190061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190047_190062__$1))
{var c__8952__auto___190063 = cljs.core.chunk_first.call(null,seq__190047_190062__$1);{
var G__190064 = cljs.core.chunk_rest.call(null,seq__190047_190062__$1);
var G__190065 = c__8952__auto___190063;
var G__190066 = cljs.core.count.call(null,c__8952__auto___190063);
var G__190067 = 0;
seq__190047_190052 = G__190064;
chunk__190048_190053 = G__190065;
count__190049_190054 = G__190066;
i__190050_190055 = G__190067;
continue;
}
} else
{var c_190068 = cljs.core.first.call(null,seq__190047_190062__$1);prepend_BANG_.call(null,parent__$1,c_190068);
{
var G__190069 = cljs.core.next.call(null,seq__190047_190062__$1);
var G__190070 = null;
var G__190071 = 0;
var G__190072 = 0;
seq__190047_190052 = G__190069;
chunk__190048_190053 = G__190070;
count__190049_190054 = G__190071;
i__190050_190055 = G__190072;
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
var G__190051 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__190051__delegate.call(this,parent,child,more_children);};
G__190051.cljs$lang$maxFixedArity = 2;
G__190051.cljs$lang$applyTo = (function (arglist__190073){
var parent = cljs.core.first(arglist__190073);
arglist__190073 = cljs.core.next(arglist__190073);
var child = cljs.core.first(arglist__190073);
var more_children = cljs.core.rest(arglist__190073);
return G__190051__delegate(parent,child,more_children);
});
G__190051.cljs$core$IFn$_invoke$arity$variadic = G__190051__delegate;
return G__190051;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___190074 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___190074))
{var next_190075 = temp__4090__auto___190074;parent.insertBefore(actual_node,next_190075);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__190077 = dommy.template.__GT_node_like.call(null,parent);G__190077.innerHTML = "";
dommy.core.append_BANG_.call(null,G__190077,node_like);
return G__190077;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__190079 = elem__$1.parentNode;G__190079.removeChild(elem__$1);
return G__190079;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__190085){var vec__190086 = p__190085;var k = cljs.core.nth.call(null,vec__190086,0,null);var v = cljs.core.nth.call(null,vec__190086,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t190087 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t190087 = (function (v,k,vec__190086,p__190085,container,key_selectors_map,template,selector_map,meta190088){
this.v = v;
this.k = k;
this.vec__190086 = vec__190086;
this.p__190085 = p__190085;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta190088 = meta190088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t190087.cljs$lang$type = true;
dommy.core.t190087.cljs$lang$ctorStr = "dommy.core/t190087";
dommy.core.t190087.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"dommy.core/t190087");
});
dommy.core.t190087.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t190087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_190089){var self__ = this;
var _190089__$1 = this;return self__.meta190088;
});
dommy.core.t190087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_190089,meta190088__$1){var self__ = this;
var _190089__$1 = this;return (new dommy.core.t190087(self__.v,self__.k,self__.vec__190086,self__.p__190085,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta190088__$1));
});
dommy.core.__GT_t190087 = (function __GT_t190087(v__$1,k__$1,vec__190086__$1,p__190085__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta190088){return (new dommy.core.t190087(v__$1,k__$1,vec__190086__$1,p__190085__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta190088));
});
}
return (new dommy.core.t190087(v,k,vec__190086,p__190085,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__190090_SHARP_){return p1__190090_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__190091_SHARP_){return !((p1__190091_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__190092){var vec__190093 = p__190092;var special_mouse_event = cljs.core.nth.call(null,vec__190093,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__190093,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8223__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8223__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__190094){
var elem = cljs.core.first(arglist__190094);
arglist__190094 = cljs.core.next(arglist__190094);
var f = cljs.core.first(arglist__190094);
var args = cljs.core.rest(arglist__190094);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__190095_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__190095_SHARP_));
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
var vec__190119_190142 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_190143 = cljs.core.nth.call(null,vec__190119_190142,0,null);var selector_190144 = cljs.core.nth.call(null,vec__190119_190142,1,null);var seq__190120_190145 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__190127_190146 = null;var count__190128_190147 = 0;var i__190129_190148 = 0;while(true){
if((i__190129_190148 < count__190128_190147))
{var vec__190136_190149 = cljs.core._nth.call(null,chunk__190127_190146,i__190129_190148);var orig_type_190150 = cljs.core.nth.call(null,vec__190136_190149,0,null);var f_190151 = cljs.core.nth.call(null,vec__190136_190149,1,null);var seq__190130_190152 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_190150,new cljs.core.PersistentArrayMap.fromArray([orig_type_190150,cljs.core.identity], true, false)));var chunk__190132_190153 = null;var count__190133_190154 = 0;var i__190134_190155 = 0;while(true){
if((i__190134_190155 < count__190133_190154))
{var vec__190137_190156 = cljs.core._nth.call(null,chunk__190132_190153,i__190134_190155);var actual_type_190157 = cljs.core.nth.call(null,vec__190137_190156,0,null);var factory_190158 = cljs.core.nth.call(null,vec__190137_190156,1,null);var canonical_f_190159 = (cljs.core.truth_(selector_190144)?cljs.core.partial.call(null,dommy.core.live_listener,elem_190143,selector_190144):cljs.core.identity).call(null,factory_190158.call(null,f_190151));dommy.core.update_event_listeners_BANG_.call(null,elem_190143,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190144,actual_type_190157,f_190151], null),canonical_f_190159);
if(cljs.core.truth_(elem_190143.addEventListener))
{elem_190143.addEventListener(cljs.core.name.call(null,actual_type_190157),canonical_f_190159);
} else
{elem_190143.attachEvent(cljs.core.name.call(null,actual_type_190157),canonical_f_190159);
}
{
var G__190160 = seq__190130_190152;
var G__190161 = chunk__190132_190153;
var G__190162 = count__190133_190154;
var G__190163 = (i__190134_190155 + 1);
seq__190130_190152 = G__190160;
chunk__190132_190153 = G__190161;
count__190133_190154 = G__190162;
i__190134_190155 = G__190163;
continue;
}
} else
{var temp__4092__auto___190164 = cljs.core.seq.call(null,seq__190130_190152);if(temp__4092__auto___190164)
{var seq__190130_190165__$1 = temp__4092__auto___190164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190130_190165__$1))
{var c__8952__auto___190166 = cljs.core.chunk_first.call(null,seq__190130_190165__$1);{
var G__190167 = cljs.core.chunk_rest.call(null,seq__190130_190165__$1);
var G__190168 = c__8952__auto___190166;
var G__190169 = cljs.core.count.call(null,c__8952__auto___190166);
var G__190170 = 0;
seq__190130_190152 = G__190167;
chunk__190132_190153 = G__190168;
count__190133_190154 = G__190169;
i__190134_190155 = G__190170;
continue;
}
} else
{var vec__190138_190171 = cljs.core.first.call(null,seq__190130_190165__$1);var actual_type_190172 = cljs.core.nth.call(null,vec__190138_190171,0,null);var factory_190173 = cljs.core.nth.call(null,vec__190138_190171,1,null);var canonical_f_190174 = (cljs.core.truth_(selector_190144)?cljs.core.partial.call(null,dommy.core.live_listener,elem_190143,selector_190144):cljs.core.identity).call(null,factory_190173.call(null,f_190151));dommy.core.update_event_listeners_BANG_.call(null,elem_190143,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190144,actual_type_190172,f_190151], null),canonical_f_190174);
if(cljs.core.truth_(elem_190143.addEventListener))
{elem_190143.addEventListener(cljs.core.name.call(null,actual_type_190172),canonical_f_190174);
} else
{elem_190143.attachEvent(cljs.core.name.call(null,actual_type_190172),canonical_f_190174);
}
{
var G__190175 = cljs.core.next.call(null,seq__190130_190165__$1);
var G__190176 = null;
var G__190177 = 0;
var G__190178 = 0;
seq__190130_190152 = G__190175;
chunk__190132_190153 = G__190176;
count__190133_190154 = G__190177;
i__190134_190155 = G__190178;
continue;
}
}
} else
{}
}
break;
}
{
var G__190179 = seq__190120_190145;
var G__190180 = chunk__190127_190146;
var G__190181 = count__190128_190147;
var G__190182 = (i__190129_190148 + 1);
seq__190120_190145 = G__190179;
chunk__190127_190146 = G__190180;
count__190128_190147 = G__190181;
i__190129_190148 = G__190182;
continue;
}
} else
{var temp__4092__auto___190183 = cljs.core.seq.call(null,seq__190120_190145);if(temp__4092__auto___190183)
{var seq__190120_190184__$1 = temp__4092__auto___190183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190120_190184__$1))
{var c__8952__auto___190185 = cljs.core.chunk_first.call(null,seq__190120_190184__$1);{
var G__190186 = cljs.core.chunk_rest.call(null,seq__190120_190184__$1);
var G__190187 = c__8952__auto___190185;
var G__190188 = cljs.core.count.call(null,c__8952__auto___190185);
var G__190189 = 0;
seq__190120_190145 = G__190186;
chunk__190127_190146 = G__190187;
count__190128_190147 = G__190188;
i__190129_190148 = G__190189;
continue;
}
} else
{var vec__190139_190190 = cljs.core.first.call(null,seq__190120_190184__$1);var orig_type_190191 = cljs.core.nth.call(null,vec__190139_190190,0,null);var f_190192 = cljs.core.nth.call(null,vec__190139_190190,1,null);var seq__190121_190193 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_190191,new cljs.core.PersistentArrayMap.fromArray([orig_type_190191,cljs.core.identity], true, false)));var chunk__190123_190194 = null;var count__190124_190195 = 0;var i__190125_190196 = 0;while(true){
if((i__190125_190196 < count__190124_190195))
{var vec__190140_190197 = cljs.core._nth.call(null,chunk__190123_190194,i__190125_190196);var actual_type_190198 = cljs.core.nth.call(null,vec__190140_190197,0,null);var factory_190199 = cljs.core.nth.call(null,vec__190140_190197,1,null);var canonical_f_190200 = (cljs.core.truth_(selector_190144)?cljs.core.partial.call(null,dommy.core.live_listener,elem_190143,selector_190144):cljs.core.identity).call(null,factory_190199.call(null,f_190192));dommy.core.update_event_listeners_BANG_.call(null,elem_190143,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190144,actual_type_190198,f_190192], null),canonical_f_190200);
if(cljs.core.truth_(elem_190143.addEventListener))
{elem_190143.addEventListener(cljs.core.name.call(null,actual_type_190198),canonical_f_190200);
} else
{elem_190143.attachEvent(cljs.core.name.call(null,actual_type_190198),canonical_f_190200);
}
{
var G__190201 = seq__190121_190193;
var G__190202 = chunk__190123_190194;
var G__190203 = count__190124_190195;
var G__190204 = (i__190125_190196 + 1);
seq__190121_190193 = G__190201;
chunk__190123_190194 = G__190202;
count__190124_190195 = G__190203;
i__190125_190196 = G__190204;
continue;
}
} else
{var temp__4092__auto___190205__$1 = cljs.core.seq.call(null,seq__190121_190193);if(temp__4092__auto___190205__$1)
{var seq__190121_190206__$1 = temp__4092__auto___190205__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190121_190206__$1))
{var c__8952__auto___190207 = cljs.core.chunk_first.call(null,seq__190121_190206__$1);{
var G__190208 = cljs.core.chunk_rest.call(null,seq__190121_190206__$1);
var G__190209 = c__8952__auto___190207;
var G__190210 = cljs.core.count.call(null,c__8952__auto___190207);
var G__190211 = 0;
seq__190121_190193 = G__190208;
chunk__190123_190194 = G__190209;
count__190124_190195 = G__190210;
i__190125_190196 = G__190211;
continue;
}
} else
{var vec__190141_190212 = cljs.core.first.call(null,seq__190121_190206__$1);var actual_type_190213 = cljs.core.nth.call(null,vec__190141_190212,0,null);var factory_190214 = cljs.core.nth.call(null,vec__190141_190212,1,null);var canonical_f_190215 = (cljs.core.truth_(selector_190144)?cljs.core.partial.call(null,dommy.core.live_listener,elem_190143,selector_190144):cljs.core.identity).call(null,factory_190214.call(null,f_190192));dommy.core.update_event_listeners_BANG_.call(null,elem_190143,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190144,actual_type_190213,f_190192], null),canonical_f_190215);
if(cljs.core.truth_(elem_190143.addEventListener))
{elem_190143.addEventListener(cljs.core.name.call(null,actual_type_190213),canonical_f_190215);
} else
{elem_190143.attachEvent(cljs.core.name.call(null,actual_type_190213),canonical_f_190215);
}
{
var G__190216 = cljs.core.next.call(null,seq__190121_190206__$1);
var G__190217 = null;
var G__190218 = 0;
var G__190219 = 0;
seq__190121_190193 = G__190216;
chunk__190123_190194 = G__190217;
count__190124_190195 = G__190218;
i__190125_190196 = G__190219;
continue;
}
}
} else
{}
}
break;
}
{
var G__190220 = cljs.core.next.call(null,seq__190120_190184__$1);
var G__190221 = null;
var G__190222 = 0;
var G__190223 = 0;
seq__190120_190145 = G__190220;
chunk__190127_190146 = G__190221;
count__190128_190147 = G__190222;
i__190129_190148 = G__190223;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__190224){
var elem_sel = cljs.core.first(arglist__190224);
var type_fs = cljs.core.rest(arglist__190224);
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
var vec__190248_190271 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_190272 = cljs.core.nth.call(null,vec__190248_190271,0,null);var selector_190273 = cljs.core.nth.call(null,vec__190248_190271,1,null);var seq__190249_190274 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__190256_190275 = null;var count__190257_190276 = 0;var i__190258_190277 = 0;while(true){
if((i__190258_190277 < count__190257_190276))
{var vec__190265_190278 = cljs.core._nth.call(null,chunk__190256_190275,i__190258_190277);var orig_type_190279 = cljs.core.nth.call(null,vec__190265_190278,0,null);var f_190280 = cljs.core.nth.call(null,vec__190265_190278,1,null);var seq__190259_190281 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_190279,new cljs.core.PersistentArrayMap.fromArray([orig_type_190279,cljs.core.identity], true, false)));var chunk__190261_190282 = null;var count__190262_190283 = 0;var i__190263_190284 = 0;while(true){
if((i__190263_190284 < count__190262_190283))
{var vec__190266_190285 = cljs.core._nth.call(null,chunk__190261_190282,i__190263_190284);var actual_type_190286 = cljs.core.nth.call(null,vec__190266_190285,0,null);var __190287 = cljs.core.nth.call(null,vec__190266_190285,1,null);var keys_190288 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190273,actual_type_190286,f_190280], null);var canonical_f_190289 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_190272),keys_190288);dommy.core.update_event_listeners_BANG_.call(null,elem_190272,dommy.utils.dissoc_in,keys_190288);
if(cljs.core.truth_(elem_190272.removeEventListener))
{elem_190272.removeEventListener(cljs.core.name.call(null,actual_type_190286),canonical_f_190289);
} else
{elem_190272.detachEvent(cljs.core.name.call(null,actual_type_190286),canonical_f_190289);
}
{
var G__190290 = seq__190259_190281;
var G__190291 = chunk__190261_190282;
var G__190292 = count__190262_190283;
var G__190293 = (i__190263_190284 + 1);
seq__190259_190281 = G__190290;
chunk__190261_190282 = G__190291;
count__190262_190283 = G__190292;
i__190263_190284 = G__190293;
continue;
}
} else
{var temp__4092__auto___190294 = cljs.core.seq.call(null,seq__190259_190281);if(temp__4092__auto___190294)
{var seq__190259_190295__$1 = temp__4092__auto___190294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190259_190295__$1))
{var c__8952__auto___190296 = cljs.core.chunk_first.call(null,seq__190259_190295__$1);{
var G__190297 = cljs.core.chunk_rest.call(null,seq__190259_190295__$1);
var G__190298 = c__8952__auto___190296;
var G__190299 = cljs.core.count.call(null,c__8952__auto___190296);
var G__190300 = 0;
seq__190259_190281 = G__190297;
chunk__190261_190282 = G__190298;
count__190262_190283 = G__190299;
i__190263_190284 = G__190300;
continue;
}
} else
{var vec__190267_190301 = cljs.core.first.call(null,seq__190259_190295__$1);var actual_type_190302 = cljs.core.nth.call(null,vec__190267_190301,0,null);var __190303 = cljs.core.nth.call(null,vec__190267_190301,1,null);var keys_190304 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190273,actual_type_190302,f_190280], null);var canonical_f_190305 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_190272),keys_190304);dommy.core.update_event_listeners_BANG_.call(null,elem_190272,dommy.utils.dissoc_in,keys_190304);
if(cljs.core.truth_(elem_190272.removeEventListener))
{elem_190272.removeEventListener(cljs.core.name.call(null,actual_type_190302),canonical_f_190305);
} else
{elem_190272.detachEvent(cljs.core.name.call(null,actual_type_190302),canonical_f_190305);
}
{
var G__190306 = cljs.core.next.call(null,seq__190259_190295__$1);
var G__190307 = null;
var G__190308 = 0;
var G__190309 = 0;
seq__190259_190281 = G__190306;
chunk__190261_190282 = G__190307;
count__190262_190283 = G__190308;
i__190263_190284 = G__190309;
continue;
}
}
} else
{}
}
break;
}
{
var G__190310 = seq__190249_190274;
var G__190311 = chunk__190256_190275;
var G__190312 = count__190257_190276;
var G__190313 = (i__190258_190277 + 1);
seq__190249_190274 = G__190310;
chunk__190256_190275 = G__190311;
count__190257_190276 = G__190312;
i__190258_190277 = G__190313;
continue;
}
} else
{var temp__4092__auto___190314 = cljs.core.seq.call(null,seq__190249_190274);if(temp__4092__auto___190314)
{var seq__190249_190315__$1 = temp__4092__auto___190314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190249_190315__$1))
{var c__8952__auto___190316 = cljs.core.chunk_first.call(null,seq__190249_190315__$1);{
var G__190317 = cljs.core.chunk_rest.call(null,seq__190249_190315__$1);
var G__190318 = c__8952__auto___190316;
var G__190319 = cljs.core.count.call(null,c__8952__auto___190316);
var G__190320 = 0;
seq__190249_190274 = G__190317;
chunk__190256_190275 = G__190318;
count__190257_190276 = G__190319;
i__190258_190277 = G__190320;
continue;
}
} else
{var vec__190268_190321 = cljs.core.first.call(null,seq__190249_190315__$1);var orig_type_190322 = cljs.core.nth.call(null,vec__190268_190321,0,null);var f_190323 = cljs.core.nth.call(null,vec__190268_190321,1,null);var seq__190250_190324 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_190322,new cljs.core.PersistentArrayMap.fromArray([orig_type_190322,cljs.core.identity], true, false)));var chunk__190252_190325 = null;var count__190253_190326 = 0;var i__190254_190327 = 0;while(true){
if((i__190254_190327 < count__190253_190326))
{var vec__190269_190328 = cljs.core._nth.call(null,chunk__190252_190325,i__190254_190327);var actual_type_190329 = cljs.core.nth.call(null,vec__190269_190328,0,null);var __190330 = cljs.core.nth.call(null,vec__190269_190328,1,null);var keys_190331 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190273,actual_type_190329,f_190323], null);var canonical_f_190332 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_190272),keys_190331);dommy.core.update_event_listeners_BANG_.call(null,elem_190272,dommy.utils.dissoc_in,keys_190331);
if(cljs.core.truth_(elem_190272.removeEventListener))
{elem_190272.removeEventListener(cljs.core.name.call(null,actual_type_190329),canonical_f_190332);
} else
{elem_190272.detachEvent(cljs.core.name.call(null,actual_type_190329),canonical_f_190332);
}
{
var G__190333 = seq__190250_190324;
var G__190334 = chunk__190252_190325;
var G__190335 = count__190253_190326;
var G__190336 = (i__190254_190327 + 1);
seq__190250_190324 = G__190333;
chunk__190252_190325 = G__190334;
count__190253_190326 = G__190335;
i__190254_190327 = G__190336;
continue;
}
} else
{var temp__4092__auto___190337__$1 = cljs.core.seq.call(null,seq__190250_190324);if(temp__4092__auto___190337__$1)
{var seq__190250_190338__$1 = temp__4092__auto___190337__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190250_190338__$1))
{var c__8952__auto___190339 = cljs.core.chunk_first.call(null,seq__190250_190338__$1);{
var G__190340 = cljs.core.chunk_rest.call(null,seq__190250_190338__$1);
var G__190341 = c__8952__auto___190339;
var G__190342 = cljs.core.count.call(null,c__8952__auto___190339);
var G__190343 = 0;
seq__190250_190324 = G__190340;
chunk__190252_190325 = G__190341;
count__190253_190326 = G__190342;
i__190254_190327 = G__190343;
continue;
}
} else
{var vec__190270_190344 = cljs.core.first.call(null,seq__190250_190338__$1);var actual_type_190345 = cljs.core.nth.call(null,vec__190270_190344,0,null);var __190346 = cljs.core.nth.call(null,vec__190270_190344,1,null);var keys_190347 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_190273,actual_type_190345,f_190323], null);var canonical_f_190348 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_190272),keys_190347);dommy.core.update_event_listeners_BANG_.call(null,elem_190272,dommy.utils.dissoc_in,keys_190347);
if(cljs.core.truth_(elem_190272.removeEventListener))
{elem_190272.removeEventListener(cljs.core.name.call(null,actual_type_190345),canonical_f_190348);
} else
{elem_190272.detachEvent(cljs.core.name.call(null,actual_type_190345),canonical_f_190348);
}
{
var G__190349 = cljs.core.next.call(null,seq__190250_190338__$1);
var G__190350 = null;
var G__190351 = 0;
var G__190352 = 0;
seq__190250_190324 = G__190349;
chunk__190252_190325 = G__190350;
count__190253_190326 = G__190351;
i__190254_190327 = G__190352;
continue;
}
}
} else
{}
}
break;
}
{
var G__190353 = cljs.core.next.call(null,seq__190249_190315__$1);
var G__190354 = null;
var G__190355 = 0;
var G__190356 = 0;
seq__190249_190274 = G__190353;
chunk__190256_190275 = G__190354;
count__190257_190276 = G__190355;
i__190258_190277 = G__190356;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__190357){
var elem_sel = cljs.core.first(arglist__190357);
var type_fs = cljs.core.rest(arglist__190357);
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
var vec__190365_190372 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_190373 = cljs.core.nth.call(null,vec__190365_190372,0,null);var selector_190374 = cljs.core.nth.call(null,vec__190365_190372,1,null);var seq__190366_190375 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__190367_190376 = null;var count__190368_190377 = 0;var i__190369_190378 = 0;while(true){
if((i__190369_190378 < count__190368_190377))
{var vec__190370_190379 = cljs.core._nth.call(null,chunk__190367_190376,i__190369_190378);var type_190380 = cljs.core.nth.call(null,vec__190370_190379,0,null);var f_190381 = cljs.core.nth.call(null,vec__190370_190379,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_190380,((function (seq__190366_190375,chunk__190367_190376,count__190368_190377,i__190369_190378,vec__190370_190379,type_190380,f_190381){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_190380,this_fn);
return f_190381.call(null,e);
});})(seq__190366_190375,chunk__190367_190376,count__190368_190377,i__190369_190378,vec__190370_190379,type_190380,f_190381))
);
{
var G__190382 = seq__190366_190375;
var G__190383 = chunk__190367_190376;
var G__190384 = count__190368_190377;
var G__190385 = (i__190369_190378 + 1);
seq__190366_190375 = G__190382;
chunk__190367_190376 = G__190383;
count__190368_190377 = G__190384;
i__190369_190378 = G__190385;
continue;
}
} else
{var temp__4092__auto___190386 = cljs.core.seq.call(null,seq__190366_190375);if(temp__4092__auto___190386)
{var seq__190366_190387__$1 = temp__4092__auto___190386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190366_190387__$1))
{var c__8952__auto___190388 = cljs.core.chunk_first.call(null,seq__190366_190387__$1);{
var G__190389 = cljs.core.chunk_rest.call(null,seq__190366_190387__$1);
var G__190390 = c__8952__auto___190388;
var G__190391 = cljs.core.count.call(null,c__8952__auto___190388);
var G__190392 = 0;
seq__190366_190375 = G__190389;
chunk__190367_190376 = G__190390;
count__190368_190377 = G__190391;
i__190369_190378 = G__190392;
continue;
}
} else
{var vec__190371_190393 = cljs.core.first.call(null,seq__190366_190387__$1);var type_190394 = cljs.core.nth.call(null,vec__190371_190393,0,null);var f_190395 = cljs.core.nth.call(null,vec__190371_190393,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_190394,((function (seq__190366_190375,chunk__190367_190376,count__190368_190377,i__190369_190378,vec__190371_190393,type_190394,f_190395,seq__190366_190387__$1,temp__4092__auto___190386){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_190394,this_fn);
return f_190395.call(null,e);
});})(seq__190366_190375,chunk__190367_190376,count__190368_190377,i__190369_190378,vec__190371_190393,type_190394,f_190395,seq__190366_190387__$1,temp__4092__auto___190386))
);
{
var G__190396 = cljs.core.next.call(null,seq__190366_190387__$1);
var G__190397 = null;
var G__190398 = 0;
var G__190399 = 0;
seq__190366_190375 = G__190396;
chunk__190367_190376 = G__190397;
count__190368_190377 = G__190398;
i__190369_190378 = G__190399;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__190400){
var elem_sel = cljs.core.first(arglist__190400);
var type_fs = cljs.core.rest(arglist__190400);
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
var fire_BANG___delegate = function (node,event_type,p__190401){var vec__190403 = p__190401;var update_event_BANG_ = cljs.core.nth.call(null,vec__190403,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__190401 = null;if (arguments.length > 2) {
  p__190401 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__190401);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__190404){
var node = cljs.core.first(arglist__190404);
arglist__190404 = cljs.core.next(arglist__190404);
var event_type = cljs.core.first(arglist__190404);
var p__190401 = cljs.core.rest(arglist__190404);
return fire_BANG___delegate(node,event_type,p__190401);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map