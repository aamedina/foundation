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
var append_BANG___2 = (function (parent,child){var G__84089 = dommy.template.__GT_node_like.call(null,parent);G__84089.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__84089;
});
var append_BANG___3 = (function() { 
var G__84094__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__84090_84095 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__84091_84096 = null;var count__84092_84097 = 0;var i__84093_84098 = 0;while(true){
if((i__84093_84098 < count__84092_84097))
{var c_84099 = cljs.core._nth.call(null,chunk__84091_84096,i__84093_84098);append_BANG_.call(null,parent__$1,c_84099);
{
var G__84100 = seq__84090_84095;
var G__84101 = chunk__84091_84096;
var G__84102 = count__84092_84097;
var G__84103 = (i__84093_84098 + 1);
seq__84090_84095 = G__84100;
chunk__84091_84096 = G__84101;
count__84092_84097 = G__84102;
i__84093_84098 = G__84103;
continue;
}
} else
{var temp__4092__auto___84104 = cljs.core.seq.call(null,seq__84090_84095);if(temp__4092__auto___84104)
{var seq__84090_84105__$1 = temp__4092__auto___84104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84090_84105__$1))
{var c__14545__auto___84106 = cljs.core.chunk_first.call(null,seq__84090_84105__$1);{
var G__84107 = cljs.core.chunk_rest.call(null,seq__84090_84105__$1);
var G__84108 = c__14545__auto___84106;
var G__84109 = cljs.core.count.call(null,c__14545__auto___84106);
var G__84110 = 0;
seq__84090_84095 = G__84107;
chunk__84091_84096 = G__84108;
count__84092_84097 = G__84109;
i__84093_84098 = G__84110;
continue;
}
} else
{var c_84111 = cljs.core.first.call(null,seq__84090_84105__$1);append_BANG_.call(null,parent__$1,c_84111);
{
var G__84112 = cljs.core.next.call(null,seq__84090_84105__$1);
var G__84113 = null;
var G__84114 = 0;
var G__84115 = 0;
seq__84090_84095 = G__84112;
chunk__84091_84096 = G__84113;
count__84092_84097 = G__84114;
i__84093_84098 = G__84115;
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
var G__84094 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84094__delegate.call(this,parent,child,more_children);};
G__84094.cljs$lang$maxFixedArity = 2;
G__84094.cljs$lang$applyTo = (function (arglist__84116){
var parent = cljs.core.first(arglist__84116);
arglist__84116 = cljs.core.next(arglist__84116);
var child = cljs.core.first(arglist__84116);
var more_children = cljs.core.rest(arglist__84116);
return G__84094__delegate(parent,child,more_children);
});
G__84094.cljs$core$IFn$_invoke$arity$variadic = G__84094__delegate;
return G__84094;
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
var G__84125__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__84121_84126 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__84122_84127 = null;var count__84123_84128 = 0;var i__84124_84129 = 0;while(true){
if((i__84124_84129 < count__84123_84128))
{var c_84130 = cljs.core._nth.call(null,chunk__84122_84127,i__84124_84129);prepend_BANG_.call(null,parent__$1,c_84130);
{
var G__84131 = seq__84121_84126;
var G__84132 = chunk__84122_84127;
var G__84133 = count__84123_84128;
var G__84134 = (i__84124_84129 + 1);
seq__84121_84126 = G__84131;
chunk__84122_84127 = G__84132;
count__84123_84128 = G__84133;
i__84124_84129 = G__84134;
continue;
}
} else
{var temp__4092__auto___84135 = cljs.core.seq.call(null,seq__84121_84126);if(temp__4092__auto___84135)
{var seq__84121_84136__$1 = temp__4092__auto___84135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84121_84136__$1))
{var c__14545__auto___84137 = cljs.core.chunk_first.call(null,seq__84121_84136__$1);{
var G__84138 = cljs.core.chunk_rest.call(null,seq__84121_84136__$1);
var G__84139 = c__14545__auto___84137;
var G__84140 = cljs.core.count.call(null,c__14545__auto___84137);
var G__84141 = 0;
seq__84121_84126 = G__84138;
chunk__84122_84127 = G__84139;
count__84123_84128 = G__84140;
i__84124_84129 = G__84141;
continue;
}
} else
{var c_84142 = cljs.core.first.call(null,seq__84121_84136__$1);prepend_BANG_.call(null,parent__$1,c_84142);
{
var G__84143 = cljs.core.next.call(null,seq__84121_84136__$1);
var G__84144 = null;
var G__84145 = 0;
var G__84146 = 0;
seq__84121_84126 = G__84143;
chunk__84122_84127 = G__84144;
count__84123_84128 = G__84145;
i__84124_84129 = G__84146;
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
var G__84125 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84125__delegate.call(this,parent,child,more_children);};
G__84125.cljs$lang$maxFixedArity = 2;
G__84125.cljs$lang$applyTo = (function (arglist__84147){
var parent = cljs.core.first(arglist__84147);
arglist__84147 = cljs.core.next(arglist__84147);
var child = cljs.core.first(arglist__84147);
var more_children = cljs.core.rest(arglist__84147);
return G__84125__delegate(parent,child,more_children);
});
G__84125.cljs$core$IFn$_invoke$arity$variadic = G__84125__delegate;
return G__84125;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___84148 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___84148))
{var next_84149 = temp__4090__auto___84148;parent.insertBefore(actual_node,next_84149);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__84151 = dommy.template.__GT_node_like.call(null,parent);G__84151.innerHTML = "";
dommy.core.append_BANG_.call(null,G__84151,node_like);
return G__84151;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__84153 = elem__$1.parentNode;G__84153.removeChild(elem__$1);
return G__84153;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__84159){var vec__84160 = p__84159;var k = cljs.core.nth.call(null,vec__84160,0,null);var v = cljs.core.nth.call(null,vec__84160,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t84161 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t84161 = (function (v,k,vec__84160,p__84159,container,key_selectors_map,template,selector_map,meta84162){
this.v = v;
this.k = k;
this.vec__84160 = vec__84160;
this.p__84159 = p__84159;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta84162 = meta84162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t84161.cljs$lang$type = true;
dommy.core.t84161.cljs$lang$ctorStr = "dommy.core/t84161";
dommy.core.t84161.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"dommy.core/t84161");
});
dommy.core.t84161.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t84161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84163){var self__ = this;
var _84163__$1 = this;return self__.meta84162;
});
dommy.core.t84161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84163,meta84162__$1){var self__ = this;
var _84163__$1 = this;return (new dommy.core.t84161(self__.v,self__.k,self__.vec__84160,self__.p__84159,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta84162__$1));
});
dommy.core.__GT_t84161 = (function __GT_t84161(v__$1,k__$1,vec__84160__$1,p__84159__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta84162){return (new dommy.core.t84161(v__$1,k__$1,vec__84160__$1,p__84159__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta84162));
});
}
return (new dommy.core.t84161(v,k,vec__84160,p__84159,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__84164_SHARP_){return p1__84164_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__84165_SHARP_){return !((p1__84165_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__84166){var vec__84167 = p__84166;var special_mouse_event = cljs.core.nth.call(null,vec__84167,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__84167,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13821__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13821__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__84168){
var elem = cljs.core.first(arglist__84168);
arglist__84168 = cljs.core.next(arglist__84168);
var f = cljs.core.first(arglist__84168);
var args = cljs.core.rest(arglist__84168);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__84169_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__84169_SHARP_));
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
var vec__84193_84216 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_84217 = cljs.core.nth.call(null,vec__84193_84216,0,null);var selector_84218 = cljs.core.nth.call(null,vec__84193_84216,1,null);var seq__84194_84219 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__84201_84220 = null;var count__84202_84221 = 0;var i__84203_84222 = 0;while(true){
if((i__84203_84222 < count__84202_84221))
{var vec__84210_84223 = cljs.core._nth.call(null,chunk__84201_84220,i__84203_84222);var orig_type_84224 = cljs.core.nth.call(null,vec__84210_84223,0,null);var f_84225 = cljs.core.nth.call(null,vec__84210_84223,1,null);var seq__84204_84226 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84224,new cljs.core.PersistentArrayMap.fromArray([orig_type_84224,cljs.core.identity], true, false)));var chunk__84206_84227 = null;var count__84207_84228 = 0;var i__84208_84229 = 0;while(true){
if((i__84208_84229 < count__84207_84228))
{var vec__84211_84230 = cljs.core._nth.call(null,chunk__84206_84227,i__84208_84229);var actual_type_84231 = cljs.core.nth.call(null,vec__84211_84230,0,null);var factory_84232 = cljs.core.nth.call(null,vec__84211_84230,1,null);var canonical_f_84233 = (cljs.core.truth_(selector_84218)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84217,selector_84218):cljs.core.identity).call(null,factory_84232.call(null,f_84225));dommy.core.update_event_listeners_BANG_.call(null,elem_84217,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84218,actual_type_84231,f_84225], null),canonical_f_84233);
if(cljs.core.truth_(elem_84217.addEventListener))
{elem_84217.addEventListener(cljs.core.name.call(null,actual_type_84231),canonical_f_84233);
} else
{elem_84217.attachEvent(cljs.core.name.call(null,actual_type_84231),canonical_f_84233);
}
{
var G__84234 = seq__84204_84226;
var G__84235 = chunk__84206_84227;
var G__84236 = count__84207_84228;
var G__84237 = (i__84208_84229 + 1);
seq__84204_84226 = G__84234;
chunk__84206_84227 = G__84235;
count__84207_84228 = G__84236;
i__84208_84229 = G__84237;
continue;
}
} else
{var temp__4092__auto___84238 = cljs.core.seq.call(null,seq__84204_84226);if(temp__4092__auto___84238)
{var seq__84204_84239__$1 = temp__4092__auto___84238;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84204_84239__$1))
{var c__14545__auto___84240 = cljs.core.chunk_first.call(null,seq__84204_84239__$1);{
var G__84241 = cljs.core.chunk_rest.call(null,seq__84204_84239__$1);
var G__84242 = c__14545__auto___84240;
var G__84243 = cljs.core.count.call(null,c__14545__auto___84240);
var G__84244 = 0;
seq__84204_84226 = G__84241;
chunk__84206_84227 = G__84242;
count__84207_84228 = G__84243;
i__84208_84229 = G__84244;
continue;
}
} else
{var vec__84212_84245 = cljs.core.first.call(null,seq__84204_84239__$1);var actual_type_84246 = cljs.core.nth.call(null,vec__84212_84245,0,null);var factory_84247 = cljs.core.nth.call(null,vec__84212_84245,1,null);var canonical_f_84248 = (cljs.core.truth_(selector_84218)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84217,selector_84218):cljs.core.identity).call(null,factory_84247.call(null,f_84225));dommy.core.update_event_listeners_BANG_.call(null,elem_84217,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84218,actual_type_84246,f_84225], null),canonical_f_84248);
if(cljs.core.truth_(elem_84217.addEventListener))
{elem_84217.addEventListener(cljs.core.name.call(null,actual_type_84246),canonical_f_84248);
} else
{elem_84217.attachEvent(cljs.core.name.call(null,actual_type_84246),canonical_f_84248);
}
{
var G__84249 = cljs.core.next.call(null,seq__84204_84239__$1);
var G__84250 = null;
var G__84251 = 0;
var G__84252 = 0;
seq__84204_84226 = G__84249;
chunk__84206_84227 = G__84250;
count__84207_84228 = G__84251;
i__84208_84229 = G__84252;
continue;
}
}
} else
{}
}
break;
}
{
var G__84253 = seq__84194_84219;
var G__84254 = chunk__84201_84220;
var G__84255 = count__84202_84221;
var G__84256 = (i__84203_84222 + 1);
seq__84194_84219 = G__84253;
chunk__84201_84220 = G__84254;
count__84202_84221 = G__84255;
i__84203_84222 = G__84256;
continue;
}
} else
{var temp__4092__auto___84257 = cljs.core.seq.call(null,seq__84194_84219);if(temp__4092__auto___84257)
{var seq__84194_84258__$1 = temp__4092__auto___84257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84194_84258__$1))
{var c__14545__auto___84259 = cljs.core.chunk_first.call(null,seq__84194_84258__$1);{
var G__84260 = cljs.core.chunk_rest.call(null,seq__84194_84258__$1);
var G__84261 = c__14545__auto___84259;
var G__84262 = cljs.core.count.call(null,c__14545__auto___84259);
var G__84263 = 0;
seq__84194_84219 = G__84260;
chunk__84201_84220 = G__84261;
count__84202_84221 = G__84262;
i__84203_84222 = G__84263;
continue;
}
} else
{var vec__84213_84264 = cljs.core.first.call(null,seq__84194_84258__$1);var orig_type_84265 = cljs.core.nth.call(null,vec__84213_84264,0,null);var f_84266 = cljs.core.nth.call(null,vec__84213_84264,1,null);var seq__84195_84267 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84265,new cljs.core.PersistentArrayMap.fromArray([orig_type_84265,cljs.core.identity], true, false)));var chunk__84197_84268 = null;var count__84198_84269 = 0;var i__84199_84270 = 0;while(true){
if((i__84199_84270 < count__84198_84269))
{var vec__84214_84271 = cljs.core._nth.call(null,chunk__84197_84268,i__84199_84270);var actual_type_84272 = cljs.core.nth.call(null,vec__84214_84271,0,null);var factory_84273 = cljs.core.nth.call(null,vec__84214_84271,1,null);var canonical_f_84274 = (cljs.core.truth_(selector_84218)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84217,selector_84218):cljs.core.identity).call(null,factory_84273.call(null,f_84266));dommy.core.update_event_listeners_BANG_.call(null,elem_84217,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84218,actual_type_84272,f_84266], null),canonical_f_84274);
if(cljs.core.truth_(elem_84217.addEventListener))
{elem_84217.addEventListener(cljs.core.name.call(null,actual_type_84272),canonical_f_84274);
} else
{elem_84217.attachEvent(cljs.core.name.call(null,actual_type_84272),canonical_f_84274);
}
{
var G__84275 = seq__84195_84267;
var G__84276 = chunk__84197_84268;
var G__84277 = count__84198_84269;
var G__84278 = (i__84199_84270 + 1);
seq__84195_84267 = G__84275;
chunk__84197_84268 = G__84276;
count__84198_84269 = G__84277;
i__84199_84270 = G__84278;
continue;
}
} else
{var temp__4092__auto___84279__$1 = cljs.core.seq.call(null,seq__84195_84267);if(temp__4092__auto___84279__$1)
{var seq__84195_84280__$1 = temp__4092__auto___84279__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84195_84280__$1))
{var c__14545__auto___84281 = cljs.core.chunk_first.call(null,seq__84195_84280__$1);{
var G__84282 = cljs.core.chunk_rest.call(null,seq__84195_84280__$1);
var G__84283 = c__14545__auto___84281;
var G__84284 = cljs.core.count.call(null,c__14545__auto___84281);
var G__84285 = 0;
seq__84195_84267 = G__84282;
chunk__84197_84268 = G__84283;
count__84198_84269 = G__84284;
i__84199_84270 = G__84285;
continue;
}
} else
{var vec__84215_84286 = cljs.core.first.call(null,seq__84195_84280__$1);var actual_type_84287 = cljs.core.nth.call(null,vec__84215_84286,0,null);var factory_84288 = cljs.core.nth.call(null,vec__84215_84286,1,null);var canonical_f_84289 = (cljs.core.truth_(selector_84218)?cljs.core.partial.call(null,dommy.core.live_listener,elem_84217,selector_84218):cljs.core.identity).call(null,factory_84288.call(null,f_84266));dommy.core.update_event_listeners_BANG_.call(null,elem_84217,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84218,actual_type_84287,f_84266], null),canonical_f_84289);
if(cljs.core.truth_(elem_84217.addEventListener))
{elem_84217.addEventListener(cljs.core.name.call(null,actual_type_84287),canonical_f_84289);
} else
{elem_84217.attachEvent(cljs.core.name.call(null,actual_type_84287),canonical_f_84289);
}
{
var G__84290 = cljs.core.next.call(null,seq__84195_84280__$1);
var G__84291 = null;
var G__84292 = 0;
var G__84293 = 0;
seq__84195_84267 = G__84290;
chunk__84197_84268 = G__84291;
count__84198_84269 = G__84292;
i__84199_84270 = G__84293;
continue;
}
}
} else
{}
}
break;
}
{
var G__84294 = cljs.core.next.call(null,seq__84194_84258__$1);
var G__84295 = null;
var G__84296 = 0;
var G__84297 = 0;
seq__84194_84219 = G__84294;
chunk__84201_84220 = G__84295;
count__84202_84221 = G__84296;
i__84203_84222 = G__84297;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__84298){
var elem_sel = cljs.core.first(arglist__84298);
var type_fs = cljs.core.rest(arglist__84298);
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
var vec__84322_84345 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_84346 = cljs.core.nth.call(null,vec__84322_84345,0,null);var selector_84347 = cljs.core.nth.call(null,vec__84322_84345,1,null);var seq__84323_84348 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__84330_84349 = null;var count__84331_84350 = 0;var i__84332_84351 = 0;while(true){
if((i__84332_84351 < count__84331_84350))
{var vec__84339_84352 = cljs.core._nth.call(null,chunk__84330_84349,i__84332_84351);var orig_type_84353 = cljs.core.nth.call(null,vec__84339_84352,0,null);var f_84354 = cljs.core.nth.call(null,vec__84339_84352,1,null);var seq__84333_84355 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84353,new cljs.core.PersistentArrayMap.fromArray([orig_type_84353,cljs.core.identity], true, false)));var chunk__84335_84356 = null;var count__84336_84357 = 0;var i__84337_84358 = 0;while(true){
if((i__84337_84358 < count__84336_84357))
{var vec__84340_84359 = cljs.core._nth.call(null,chunk__84335_84356,i__84337_84358);var actual_type_84360 = cljs.core.nth.call(null,vec__84340_84359,0,null);var __84361 = cljs.core.nth.call(null,vec__84340_84359,1,null);var keys_84362 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84347,actual_type_84360,f_84354], null);var canonical_f_84363 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84346),keys_84362);dommy.core.update_event_listeners_BANG_.call(null,elem_84346,dommy.utils.dissoc_in,keys_84362);
if(cljs.core.truth_(elem_84346.removeEventListener))
{elem_84346.removeEventListener(cljs.core.name.call(null,actual_type_84360),canonical_f_84363);
} else
{elem_84346.detachEvent(cljs.core.name.call(null,actual_type_84360),canonical_f_84363);
}
{
var G__84364 = seq__84333_84355;
var G__84365 = chunk__84335_84356;
var G__84366 = count__84336_84357;
var G__84367 = (i__84337_84358 + 1);
seq__84333_84355 = G__84364;
chunk__84335_84356 = G__84365;
count__84336_84357 = G__84366;
i__84337_84358 = G__84367;
continue;
}
} else
{var temp__4092__auto___84368 = cljs.core.seq.call(null,seq__84333_84355);if(temp__4092__auto___84368)
{var seq__84333_84369__$1 = temp__4092__auto___84368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84333_84369__$1))
{var c__14545__auto___84370 = cljs.core.chunk_first.call(null,seq__84333_84369__$1);{
var G__84371 = cljs.core.chunk_rest.call(null,seq__84333_84369__$1);
var G__84372 = c__14545__auto___84370;
var G__84373 = cljs.core.count.call(null,c__14545__auto___84370);
var G__84374 = 0;
seq__84333_84355 = G__84371;
chunk__84335_84356 = G__84372;
count__84336_84357 = G__84373;
i__84337_84358 = G__84374;
continue;
}
} else
{var vec__84341_84375 = cljs.core.first.call(null,seq__84333_84369__$1);var actual_type_84376 = cljs.core.nth.call(null,vec__84341_84375,0,null);var __84377 = cljs.core.nth.call(null,vec__84341_84375,1,null);var keys_84378 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84347,actual_type_84376,f_84354], null);var canonical_f_84379 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84346),keys_84378);dommy.core.update_event_listeners_BANG_.call(null,elem_84346,dommy.utils.dissoc_in,keys_84378);
if(cljs.core.truth_(elem_84346.removeEventListener))
{elem_84346.removeEventListener(cljs.core.name.call(null,actual_type_84376),canonical_f_84379);
} else
{elem_84346.detachEvent(cljs.core.name.call(null,actual_type_84376),canonical_f_84379);
}
{
var G__84380 = cljs.core.next.call(null,seq__84333_84369__$1);
var G__84381 = null;
var G__84382 = 0;
var G__84383 = 0;
seq__84333_84355 = G__84380;
chunk__84335_84356 = G__84381;
count__84336_84357 = G__84382;
i__84337_84358 = G__84383;
continue;
}
}
} else
{}
}
break;
}
{
var G__84384 = seq__84323_84348;
var G__84385 = chunk__84330_84349;
var G__84386 = count__84331_84350;
var G__84387 = (i__84332_84351 + 1);
seq__84323_84348 = G__84384;
chunk__84330_84349 = G__84385;
count__84331_84350 = G__84386;
i__84332_84351 = G__84387;
continue;
}
} else
{var temp__4092__auto___84388 = cljs.core.seq.call(null,seq__84323_84348);if(temp__4092__auto___84388)
{var seq__84323_84389__$1 = temp__4092__auto___84388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84323_84389__$1))
{var c__14545__auto___84390 = cljs.core.chunk_first.call(null,seq__84323_84389__$1);{
var G__84391 = cljs.core.chunk_rest.call(null,seq__84323_84389__$1);
var G__84392 = c__14545__auto___84390;
var G__84393 = cljs.core.count.call(null,c__14545__auto___84390);
var G__84394 = 0;
seq__84323_84348 = G__84391;
chunk__84330_84349 = G__84392;
count__84331_84350 = G__84393;
i__84332_84351 = G__84394;
continue;
}
} else
{var vec__84342_84395 = cljs.core.first.call(null,seq__84323_84389__$1);var orig_type_84396 = cljs.core.nth.call(null,vec__84342_84395,0,null);var f_84397 = cljs.core.nth.call(null,vec__84342_84395,1,null);var seq__84324_84398 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_84396,new cljs.core.PersistentArrayMap.fromArray([orig_type_84396,cljs.core.identity], true, false)));var chunk__84326_84399 = null;var count__84327_84400 = 0;var i__84328_84401 = 0;while(true){
if((i__84328_84401 < count__84327_84400))
{var vec__84343_84402 = cljs.core._nth.call(null,chunk__84326_84399,i__84328_84401);var actual_type_84403 = cljs.core.nth.call(null,vec__84343_84402,0,null);var __84404 = cljs.core.nth.call(null,vec__84343_84402,1,null);var keys_84405 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84347,actual_type_84403,f_84397], null);var canonical_f_84406 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84346),keys_84405);dommy.core.update_event_listeners_BANG_.call(null,elem_84346,dommy.utils.dissoc_in,keys_84405);
if(cljs.core.truth_(elem_84346.removeEventListener))
{elem_84346.removeEventListener(cljs.core.name.call(null,actual_type_84403),canonical_f_84406);
} else
{elem_84346.detachEvent(cljs.core.name.call(null,actual_type_84403),canonical_f_84406);
}
{
var G__84407 = seq__84324_84398;
var G__84408 = chunk__84326_84399;
var G__84409 = count__84327_84400;
var G__84410 = (i__84328_84401 + 1);
seq__84324_84398 = G__84407;
chunk__84326_84399 = G__84408;
count__84327_84400 = G__84409;
i__84328_84401 = G__84410;
continue;
}
} else
{var temp__4092__auto___84411__$1 = cljs.core.seq.call(null,seq__84324_84398);if(temp__4092__auto___84411__$1)
{var seq__84324_84412__$1 = temp__4092__auto___84411__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84324_84412__$1))
{var c__14545__auto___84413 = cljs.core.chunk_first.call(null,seq__84324_84412__$1);{
var G__84414 = cljs.core.chunk_rest.call(null,seq__84324_84412__$1);
var G__84415 = c__14545__auto___84413;
var G__84416 = cljs.core.count.call(null,c__14545__auto___84413);
var G__84417 = 0;
seq__84324_84398 = G__84414;
chunk__84326_84399 = G__84415;
count__84327_84400 = G__84416;
i__84328_84401 = G__84417;
continue;
}
} else
{var vec__84344_84418 = cljs.core.first.call(null,seq__84324_84412__$1);var actual_type_84419 = cljs.core.nth.call(null,vec__84344_84418,0,null);var __84420 = cljs.core.nth.call(null,vec__84344_84418,1,null);var keys_84421 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_84347,actual_type_84419,f_84397], null);var canonical_f_84422 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_84346),keys_84421);dommy.core.update_event_listeners_BANG_.call(null,elem_84346,dommy.utils.dissoc_in,keys_84421);
if(cljs.core.truth_(elem_84346.removeEventListener))
{elem_84346.removeEventListener(cljs.core.name.call(null,actual_type_84419),canonical_f_84422);
} else
{elem_84346.detachEvent(cljs.core.name.call(null,actual_type_84419),canonical_f_84422);
}
{
var G__84423 = cljs.core.next.call(null,seq__84324_84412__$1);
var G__84424 = null;
var G__84425 = 0;
var G__84426 = 0;
seq__84324_84398 = G__84423;
chunk__84326_84399 = G__84424;
count__84327_84400 = G__84425;
i__84328_84401 = G__84426;
continue;
}
}
} else
{}
}
break;
}
{
var G__84427 = cljs.core.next.call(null,seq__84323_84389__$1);
var G__84428 = null;
var G__84429 = 0;
var G__84430 = 0;
seq__84323_84348 = G__84427;
chunk__84330_84349 = G__84428;
count__84331_84350 = G__84429;
i__84332_84351 = G__84430;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__84431){
var elem_sel = cljs.core.first(arglist__84431);
var type_fs = cljs.core.rest(arglist__84431);
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
var vec__84439_84446 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_84447 = cljs.core.nth.call(null,vec__84439_84446,0,null);var selector_84448 = cljs.core.nth.call(null,vec__84439_84446,1,null);var seq__84440_84449 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__84441_84450 = null;var count__84442_84451 = 0;var i__84443_84452 = 0;while(true){
if((i__84443_84452 < count__84442_84451))
{var vec__84444_84453 = cljs.core._nth.call(null,chunk__84441_84450,i__84443_84452);var type_84454 = cljs.core.nth.call(null,vec__84444_84453,0,null);var f_84455 = cljs.core.nth.call(null,vec__84444_84453,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_84454,((function (seq__84440_84449,chunk__84441_84450,count__84442_84451,i__84443_84452,vec__84444_84453,type_84454,f_84455){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_84454,this_fn);
return f_84455.call(null,e);
});})(seq__84440_84449,chunk__84441_84450,count__84442_84451,i__84443_84452,vec__84444_84453,type_84454,f_84455))
);
{
var G__84456 = seq__84440_84449;
var G__84457 = chunk__84441_84450;
var G__84458 = count__84442_84451;
var G__84459 = (i__84443_84452 + 1);
seq__84440_84449 = G__84456;
chunk__84441_84450 = G__84457;
count__84442_84451 = G__84458;
i__84443_84452 = G__84459;
continue;
}
} else
{var temp__4092__auto___84460 = cljs.core.seq.call(null,seq__84440_84449);if(temp__4092__auto___84460)
{var seq__84440_84461__$1 = temp__4092__auto___84460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84440_84461__$1))
{var c__14545__auto___84462 = cljs.core.chunk_first.call(null,seq__84440_84461__$1);{
var G__84463 = cljs.core.chunk_rest.call(null,seq__84440_84461__$1);
var G__84464 = c__14545__auto___84462;
var G__84465 = cljs.core.count.call(null,c__14545__auto___84462);
var G__84466 = 0;
seq__84440_84449 = G__84463;
chunk__84441_84450 = G__84464;
count__84442_84451 = G__84465;
i__84443_84452 = G__84466;
continue;
}
} else
{var vec__84445_84467 = cljs.core.first.call(null,seq__84440_84461__$1);var type_84468 = cljs.core.nth.call(null,vec__84445_84467,0,null);var f_84469 = cljs.core.nth.call(null,vec__84445_84467,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_84468,((function (seq__84440_84449,chunk__84441_84450,count__84442_84451,i__84443_84452,vec__84445_84467,type_84468,f_84469,seq__84440_84461__$1,temp__4092__auto___84460){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_84468,this_fn);
return f_84469.call(null,e);
});})(seq__84440_84449,chunk__84441_84450,count__84442_84451,i__84443_84452,vec__84445_84467,type_84468,f_84469,seq__84440_84461__$1,temp__4092__auto___84460))
);
{
var G__84470 = cljs.core.next.call(null,seq__84440_84461__$1);
var G__84471 = null;
var G__84472 = 0;
var G__84473 = 0;
seq__84440_84449 = G__84470;
chunk__84441_84450 = G__84471;
count__84442_84451 = G__84472;
i__84443_84452 = G__84473;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__84474){
var elem_sel = cljs.core.first(arglist__84474);
var type_fs = cljs.core.rest(arglist__84474);
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
var fire_BANG___delegate = function (node,event_type,p__84475){var vec__84477 = p__84475;var update_event_BANG_ = cljs.core.nth.call(null,vec__84477,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__84475 = null;if (arguments.length > 2) {
  p__84475 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__84475);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__84478){
var node = cljs.core.first(arglist__84478);
arglist__84478 = cljs.core.next(arglist__84478);
var event_type = cljs.core.first(arglist__84478);
var p__84475 = cljs.core.rest(arglist__84478);
return fire_BANG___delegate(node,event_type,p__84475);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map