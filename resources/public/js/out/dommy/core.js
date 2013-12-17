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
var append_BANG___2 = (function (parent,child){var G__13145 = dommy.template.__GT_node_like.call(null,parent);G__13145.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__13145;
});
var append_BANG___3 = (function() { 
var G__13150__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13146_13151 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13147_13152 = null;var count__13148_13153 = 0;var i__13149_13154 = 0;while(true){
if((i__13149_13154 < count__13148_13153))
{var c_13155 = cljs.core._nth.call(null,chunk__13147_13152,i__13149_13154);append_BANG_.call(null,parent__$1,c_13155);
{
var G__13156 = seq__13146_13151;
var G__13157 = chunk__13147_13152;
var G__13158 = count__13148_13153;
var G__13159 = (i__13149_13154 + 1);
seq__13146_13151 = G__13156;
chunk__13147_13152 = G__13157;
count__13148_13153 = G__13158;
i__13149_13154 = G__13159;
continue;
}
} else
{var temp__4092__auto___13160 = cljs.core.seq.call(null,seq__13146_13151);if(temp__4092__auto___13160)
{var seq__13146_13161__$1 = temp__4092__auto___13160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13146_13161__$1))
{var c__8927__auto___13162 = cljs.core.chunk_first.call(null,seq__13146_13161__$1);{
var G__13163 = cljs.core.chunk_rest.call(null,seq__13146_13161__$1);
var G__13164 = c__8927__auto___13162;
var G__13165 = cljs.core.count.call(null,c__8927__auto___13162);
var G__13166 = 0;
seq__13146_13151 = G__13163;
chunk__13147_13152 = G__13164;
count__13148_13153 = G__13165;
i__13149_13154 = G__13166;
continue;
}
} else
{var c_13167 = cljs.core.first.call(null,seq__13146_13161__$1);append_BANG_.call(null,parent__$1,c_13167);
{
var G__13168 = cljs.core.next.call(null,seq__13146_13161__$1);
var G__13169 = null;
var G__13170 = 0;
var G__13171 = 0;
seq__13146_13151 = G__13168;
chunk__13147_13152 = G__13169;
count__13148_13153 = G__13170;
i__13149_13154 = G__13171;
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
var G__13150 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13150__delegate.call(this,parent,child,more_children);};
G__13150.cljs$lang$maxFixedArity = 2;
G__13150.cljs$lang$applyTo = (function (arglist__13172){
var parent = cljs.core.first(arglist__13172);
arglist__13172 = cljs.core.next(arglist__13172);
var child = cljs.core.first(arglist__13172);
var more_children = cljs.core.rest(arglist__13172);
return G__13150__delegate(parent,child,more_children);
});
G__13150.cljs$core$IFn$_invoke$arity$variadic = G__13150__delegate;
return G__13150;
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
var G__13181__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__13177_13182 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__13178_13183 = null;var count__13179_13184 = 0;var i__13180_13185 = 0;while(true){
if((i__13180_13185 < count__13179_13184))
{var c_13186 = cljs.core._nth.call(null,chunk__13178_13183,i__13180_13185);prepend_BANG_.call(null,parent__$1,c_13186);
{
var G__13187 = seq__13177_13182;
var G__13188 = chunk__13178_13183;
var G__13189 = count__13179_13184;
var G__13190 = (i__13180_13185 + 1);
seq__13177_13182 = G__13187;
chunk__13178_13183 = G__13188;
count__13179_13184 = G__13189;
i__13180_13185 = G__13190;
continue;
}
} else
{var temp__4092__auto___13191 = cljs.core.seq.call(null,seq__13177_13182);if(temp__4092__auto___13191)
{var seq__13177_13192__$1 = temp__4092__auto___13191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13177_13192__$1))
{var c__8927__auto___13193 = cljs.core.chunk_first.call(null,seq__13177_13192__$1);{
var G__13194 = cljs.core.chunk_rest.call(null,seq__13177_13192__$1);
var G__13195 = c__8927__auto___13193;
var G__13196 = cljs.core.count.call(null,c__8927__auto___13193);
var G__13197 = 0;
seq__13177_13182 = G__13194;
chunk__13178_13183 = G__13195;
count__13179_13184 = G__13196;
i__13180_13185 = G__13197;
continue;
}
} else
{var c_13198 = cljs.core.first.call(null,seq__13177_13192__$1);prepend_BANG_.call(null,parent__$1,c_13198);
{
var G__13199 = cljs.core.next.call(null,seq__13177_13192__$1);
var G__13200 = null;
var G__13201 = 0;
var G__13202 = 0;
seq__13177_13182 = G__13199;
chunk__13178_13183 = G__13200;
count__13179_13184 = G__13201;
i__13180_13185 = G__13202;
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
var G__13181 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13181__delegate.call(this,parent,child,more_children);};
G__13181.cljs$lang$maxFixedArity = 2;
G__13181.cljs$lang$applyTo = (function (arglist__13203){
var parent = cljs.core.first(arglist__13203);
arglist__13203 = cljs.core.next(arglist__13203);
var child = cljs.core.first(arglist__13203);
var more_children = cljs.core.rest(arglist__13203);
return G__13181__delegate(parent,child,more_children);
});
G__13181.cljs$core$IFn$_invoke$arity$variadic = G__13181__delegate;
return G__13181;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___13204 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___13204))
{var next_13205 = temp__4090__auto___13204;parent.insertBefore(actual_node,next_13205);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__13207 = dommy.template.__GT_node_like.call(null,parent);G__13207.innerHTML = "";
dommy.core.append_BANG_.call(null,G__13207,node_like);
return G__13207;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__13209 = elem__$1.parentNode;G__13209.removeChild(elem__$1);
return G__13209;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13215){var vec__13216 = p__13215;var k = cljs.core.nth.call(null,vec__13216,0,null);var v = cljs.core.nth.call(null,vec__13216,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t13217 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t13217 = (function (v,k,vec__13216,p__13215,container,key_selectors_map,template,selector_map,meta13218){
this.v = v;
this.k = k;
this.vec__13216 = vec__13216;
this.p__13215 = p__13215;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta13218 = meta13218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t13217.cljs$lang$type = true;
dommy.core.t13217.cljs$lang$ctorStr = "dommy.core/t13217";
dommy.core.t13217.cljs$lang$ctorPrWriter = (function (this__8747__auto__,writer__8748__auto__,opt__8749__auto__){return cljs.core._write.call(null,writer__8748__auto__,"dommy.core/t13217");
});
dommy.core.t13217.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t13217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13219){var self__ = this;
var _13219__$1 = this;return self__.meta13218;
});
dommy.core.t13217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13219,meta13218__$1){var self__ = this;
var _13219__$1 = this;return (new dommy.core.t13217(self__.v,self__.k,self__.vec__13216,self__.p__13215,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta13218__$1));
});
dommy.core.__GT_t13217 = (function __GT_t13217(v__$1,k__$1,vec__13216__$1,p__13215__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13218){return (new dommy.core.t13217(v__$1,k__$1,vec__13216__$1,p__13215__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta13218));
});
}
return (new dommy.core.t13217(v,k,vec__13216,p__13215,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__13220_SHARP_){return p1__13220_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__13221_SHARP_){return !((p1__13221_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__13222){var vec__13223 = p__13222;var special_mouse_event = cljs.core.nth.call(null,vec__13223,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__13223,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__8198__auto__ = event.selectedTarget;if(cljs.core.truth_(or__8198__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13224){
var elem = cljs.core.first(arglist__13224);
arglist__13224 = cljs.core.next(arglist__13224);
var f = cljs.core.first(arglist__13224);
var args = cljs.core.rest(arglist__13224);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__13225_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__13225_SHARP_));
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
var vec__13249_13272 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13273 = cljs.core.nth.call(null,vec__13249_13272,0,null);var selector_13274 = cljs.core.nth.call(null,vec__13249_13272,1,null);var seq__13250_13275 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13257_13276 = null;var count__13258_13277 = 0;var i__13259_13278 = 0;while(true){
if((i__13259_13278 < count__13258_13277))
{var vec__13266_13279 = cljs.core._nth.call(null,chunk__13257_13276,i__13259_13278);var orig_type_13280 = cljs.core.nth.call(null,vec__13266_13279,0,null);var f_13281 = cljs.core.nth.call(null,vec__13266_13279,1,null);var seq__13260_13282 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13280,new cljs.core.PersistentArrayMap.fromArray([orig_type_13280,cljs.core.identity], true, false)));var chunk__13262_13283 = null;var count__13263_13284 = 0;var i__13264_13285 = 0;while(true){
if((i__13264_13285 < count__13263_13284))
{var vec__13267_13286 = cljs.core._nth.call(null,chunk__13262_13283,i__13264_13285);var actual_type_13287 = cljs.core.nth.call(null,vec__13267_13286,0,null);var factory_13288 = cljs.core.nth.call(null,vec__13267_13286,1,null);var canonical_f_13289 = (cljs.core.truth_(selector_13274)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13273,selector_13274):cljs.core.identity).call(null,factory_13288.call(null,f_13281));dommy.core.update_event_listeners_BANG_.call(null,elem_13273,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13274,actual_type_13287,f_13281], null),canonical_f_13289);
if(cljs.core.truth_(elem_13273.addEventListener))
{elem_13273.addEventListener(cljs.core.name.call(null,actual_type_13287),canonical_f_13289);
} else
{elem_13273.attachEvent(cljs.core.name.call(null,actual_type_13287),canonical_f_13289);
}
{
var G__13290 = seq__13260_13282;
var G__13291 = chunk__13262_13283;
var G__13292 = count__13263_13284;
var G__13293 = (i__13264_13285 + 1);
seq__13260_13282 = G__13290;
chunk__13262_13283 = G__13291;
count__13263_13284 = G__13292;
i__13264_13285 = G__13293;
continue;
}
} else
{var temp__4092__auto___13294 = cljs.core.seq.call(null,seq__13260_13282);if(temp__4092__auto___13294)
{var seq__13260_13295__$1 = temp__4092__auto___13294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13260_13295__$1))
{var c__8927__auto___13296 = cljs.core.chunk_first.call(null,seq__13260_13295__$1);{
var G__13297 = cljs.core.chunk_rest.call(null,seq__13260_13295__$1);
var G__13298 = c__8927__auto___13296;
var G__13299 = cljs.core.count.call(null,c__8927__auto___13296);
var G__13300 = 0;
seq__13260_13282 = G__13297;
chunk__13262_13283 = G__13298;
count__13263_13284 = G__13299;
i__13264_13285 = G__13300;
continue;
}
} else
{var vec__13268_13301 = cljs.core.first.call(null,seq__13260_13295__$1);var actual_type_13302 = cljs.core.nth.call(null,vec__13268_13301,0,null);var factory_13303 = cljs.core.nth.call(null,vec__13268_13301,1,null);var canonical_f_13304 = (cljs.core.truth_(selector_13274)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13273,selector_13274):cljs.core.identity).call(null,factory_13303.call(null,f_13281));dommy.core.update_event_listeners_BANG_.call(null,elem_13273,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13274,actual_type_13302,f_13281], null),canonical_f_13304);
if(cljs.core.truth_(elem_13273.addEventListener))
{elem_13273.addEventListener(cljs.core.name.call(null,actual_type_13302),canonical_f_13304);
} else
{elem_13273.attachEvent(cljs.core.name.call(null,actual_type_13302),canonical_f_13304);
}
{
var G__13305 = cljs.core.next.call(null,seq__13260_13295__$1);
var G__13306 = null;
var G__13307 = 0;
var G__13308 = 0;
seq__13260_13282 = G__13305;
chunk__13262_13283 = G__13306;
count__13263_13284 = G__13307;
i__13264_13285 = G__13308;
continue;
}
}
} else
{}
}
break;
}
{
var G__13309 = seq__13250_13275;
var G__13310 = chunk__13257_13276;
var G__13311 = count__13258_13277;
var G__13312 = (i__13259_13278 + 1);
seq__13250_13275 = G__13309;
chunk__13257_13276 = G__13310;
count__13258_13277 = G__13311;
i__13259_13278 = G__13312;
continue;
}
} else
{var temp__4092__auto___13313 = cljs.core.seq.call(null,seq__13250_13275);if(temp__4092__auto___13313)
{var seq__13250_13314__$1 = temp__4092__auto___13313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13250_13314__$1))
{var c__8927__auto___13315 = cljs.core.chunk_first.call(null,seq__13250_13314__$1);{
var G__13316 = cljs.core.chunk_rest.call(null,seq__13250_13314__$1);
var G__13317 = c__8927__auto___13315;
var G__13318 = cljs.core.count.call(null,c__8927__auto___13315);
var G__13319 = 0;
seq__13250_13275 = G__13316;
chunk__13257_13276 = G__13317;
count__13258_13277 = G__13318;
i__13259_13278 = G__13319;
continue;
}
} else
{var vec__13269_13320 = cljs.core.first.call(null,seq__13250_13314__$1);var orig_type_13321 = cljs.core.nth.call(null,vec__13269_13320,0,null);var f_13322 = cljs.core.nth.call(null,vec__13269_13320,1,null);var seq__13251_13323 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13321,new cljs.core.PersistentArrayMap.fromArray([orig_type_13321,cljs.core.identity], true, false)));var chunk__13253_13324 = null;var count__13254_13325 = 0;var i__13255_13326 = 0;while(true){
if((i__13255_13326 < count__13254_13325))
{var vec__13270_13327 = cljs.core._nth.call(null,chunk__13253_13324,i__13255_13326);var actual_type_13328 = cljs.core.nth.call(null,vec__13270_13327,0,null);var factory_13329 = cljs.core.nth.call(null,vec__13270_13327,1,null);var canonical_f_13330 = (cljs.core.truth_(selector_13274)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13273,selector_13274):cljs.core.identity).call(null,factory_13329.call(null,f_13322));dommy.core.update_event_listeners_BANG_.call(null,elem_13273,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13274,actual_type_13328,f_13322], null),canonical_f_13330);
if(cljs.core.truth_(elem_13273.addEventListener))
{elem_13273.addEventListener(cljs.core.name.call(null,actual_type_13328),canonical_f_13330);
} else
{elem_13273.attachEvent(cljs.core.name.call(null,actual_type_13328),canonical_f_13330);
}
{
var G__13331 = seq__13251_13323;
var G__13332 = chunk__13253_13324;
var G__13333 = count__13254_13325;
var G__13334 = (i__13255_13326 + 1);
seq__13251_13323 = G__13331;
chunk__13253_13324 = G__13332;
count__13254_13325 = G__13333;
i__13255_13326 = G__13334;
continue;
}
} else
{var temp__4092__auto___13335__$1 = cljs.core.seq.call(null,seq__13251_13323);if(temp__4092__auto___13335__$1)
{var seq__13251_13336__$1 = temp__4092__auto___13335__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13251_13336__$1))
{var c__8927__auto___13337 = cljs.core.chunk_first.call(null,seq__13251_13336__$1);{
var G__13338 = cljs.core.chunk_rest.call(null,seq__13251_13336__$1);
var G__13339 = c__8927__auto___13337;
var G__13340 = cljs.core.count.call(null,c__8927__auto___13337);
var G__13341 = 0;
seq__13251_13323 = G__13338;
chunk__13253_13324 = G__13339;
count__13254_13325 = G__13340;
i__13255_13326 = G__13341;
continue;
}
} else
{var vec__13271_13342 = cljs.core.first.call(null,seq__13251_13336__$1);var actual_type_13343 = cljs.core.nth.call(null,vec__13271_13342,0,null);var factory_13344 = cljs.core.nth.call(null,vec__13271_13342,1,null);var canonical_f_13345 = (cljs.core.truth_(selector_13274)?cljs.core.partial.call(null,dommy.core.live_listener,elem_13273,selector_13274):cljs.core.identity).call(null,factory_13344.call(null,f_13322));dommy.core.update_event_listeners_BANG_.call(null,elem_13273,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13274,actual_type_13343,f_13322], null),canonical_f_13345);
if(cljs.core.truth_(elem_13273.addEventListener))
{elem_13273.addEventListener(cljs.core.name.call(null,actual_type_13343),canonical_f_13345);
} else
{elem_13273.attachEvent(cljs.core.name.call(null,actual_type_13343),canonical_f_13345);
}
{
var G__13346 = cljs.core.next.call(null,seq__13251_13336__$1);
var G__13347 = null;
var G__13348 = 0;
var G__13349 = 0;
seq__13251_13323 = G__13346;
chunk__13253_13324 = G__13347;
count__13254_13325 = G__13348;
i__13255_13326 = G__13349;
continue;
}
}
} else
{}
}
break;
}
{
var G__13350 = cljs.core.next.call(null,seq__13250_13314__$1);
var G__13351 = null;
var G__13352 = 0;
var G__13353 = 0;
seq__13250_13275 = G__13350;
chunk__13257_13276 = G__13351;
count__13258_13277 = G__13352;
i__13259_13278 = G__13353;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__13354){
var elem_sel = cljs.core.first(arglist__13354);
var type_fs = cljs.core.rest(arglist__13354);
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
var vec__13378_13401 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13402 = cljs.core.nth.call(null,vec__13378_13401,0,null);var selector_13403 = cljs.core.nth.call(null,vec__13378_13401,1,null);var seq__13379_13404 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13386_13405 = null;var count__13387_13406 = 0;var i__13388_13407 = 0;while(true){
if((i__13388_13407 < count__13387_13406))
{var vec__13395_13408 = cljs.core._nth.call(null,chunk__13386_13405,i__13388_13407);var orig_type_13409 = cljs.core.nth.call(null,vec__13395_13408,0,null);var f_13410 = cljs.core.nth.call(null,vec__13395_13408,1,null);var seq__13389_13411 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13409,new cljs.core.PersistentArrayMap.fromArray([orig_type_13409,cljs.core.identity], true, false)));var chunk__13391_13412 = null;var count__13392_13413 = 0;var i__13393_13414 = 0;while(true){
if((i__13393_13414 < count__13392_13413))
{var vec__13396_13415 = cljs.core._nth.call(null,chunk__13391_13412,i__13393_13414);var actual_type_13416 = cljs.core.nth.call(null,vec__13396_13415,0,null);var __13417 = cljs.core.nth.call(null,vec__13396_13415,1,null);var keys_13418 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13403,actual_type_13416,f_13410], null);var canonical_f_13419 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13402),keys_13418);dommy.core.update_event_listeners_BANG_.call(null,elem_13402,dommy.utils.dissoc_in,keys_13418);
if(cljs.core.truth_(elem_13402.removeEventListener))
{elem_13402.removeEventListener(cljs.core.name.call(null,actual_type_13416),canonical_f_13419);
} else
{elem_13402.detachEvent(cljs.core.name.call(null,actual_type_13416),canonical_f_13419);
}
{
var G__13420 = seq__13389_13411;
var G__13421 = chunk__13391_13412;
var G__13422 = count__13392_13413;
var G__13423 = (i__13393_13414 + 1);
seq__13389_13411 = G__13420;
chunk__13391_13412 = G__13421;
count__13392_13413 = G__13422;
i__13393_13414 = G__13423;
continue;
}
} else
{var temp__4092__auto___13424 = cljs.core.seq.call(null,seq__13389_13411);if(temp__4092__auto___13424)
{var seq__13389_13425__$1 = temp__4092__auto___13424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13389_13425__$1))
{var c__8927__auto___13426 = cljs.core.chunk_first.call(null,seq__13389_13425__$1);{
var G__13427 = cljs.core.chunk_rest.call(null,seq__13389_13425__$1);
var G__13428 = c__8927__auto___13426;
var G__13429 = cljs.core.count.call(null,c__8927__auto___13426);
var G__13430 = 0;
seq__13389_13411 = G__13427;
chunk__13391_13412 = G__13428;
count__13392_13413 = G__13429;
i__13393_13414 = G__13430;
continue;
}
} else
{var vec__13397_13431 = cljs.core.first.call(null,seq__13389_13425__$1);var actual_type_13432 = cljs.core.nth.call(null,vec__13397_13431,0,null);var __13433 = cljs.core.nth.call(null,vec__13397_13431,1,null);var keys_13434 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13403,actual_type_13432,f_13410], null);var canonical_f_13435 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13402),keys_13434);dommy.core.update_event_listeners_BANG_.call(null,elem_13402,dommy.utils.dissoc_in,keys_13434);
if(cljs.core.truth_(elem_13402.removeEventListener))
{elem_13402.removeEventListener(cljs.core.name.call(null,actual_type_13432),canonical_f_13435);
} else
{elem_13402.detachEvent(cljs.core.name.call(null,actual_type_13432),canonical_f_13435);
}
{
var G__13436 = cljs.core.next.call(null,seq__13389_13425__$1);
var G__13437 = null;
var G__13438 = 0;
var G__13439 = 0;
seq__13389_13411 = G__13436;
chunk__13391_13412 = G__13437;
count__13392_13413 = G__13438;
i__13393_13414 = G__13439;
continue;
}
}
} else
{}
}
break;
}
{
var G__13440 = seq__13379_13404;
var G__13441 = chunk__13386_13405;
var G__13442 = count__13387_13406;
var G__13443 = (i__13388_13407 + 1);
seq__13379_13404 = G__13440;
chunk__13386_13405 = G__13441;
count__13387_13406 = G__13442;
i__13388_13407 = G__13443;
continue;
}
} else
{var temp__4092__auto___13444 = cljs.core.seq.call(null,seq__13379_13404);if(temp__4092__auto___13444)
{var seq__13379_13445__$1 = temp__4092__auto___13444;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13379_13445__$1))
{var c__8927__auto___13446 = cljs.core.chunk_first.call(null,seq__13379_13445__$1);{
var G__13447 = cljs.core.chunk_rest.call(null,seq__13379_13445__$1);
var G__13448 = c__8927__auto___13446;
var G__13449 = cljs.core.count.call(null,c__8927__auto___13446);
var G__13450 = 0;
seq__13379_13404 = G__13447;
chunk__13386_13405 = G__13448;
count__13387_13406 = G__13449;
i__13388_13407 = G__13450;
continue;
}
} else
{var vec__13398_13451 = cljs.core.first.call(null,seq__13379_13445__$1);var orig_type_13452 = cljs.core.nth.call(null,vec__13398_13451,0,null);var f_13453 = cljs.core.nth.call(null,vec__13398_13451,1,null);var seq__13380_13454 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_13452,new cljs.core.PersistentArrayMap.fromArray([orig_type_13452,cljs.core.identity], true, false)));var chunk__13382_13455 = null;var count__13383_13456 = 0;var i__13384_13457 = 0;while(true){
if((i__13384_13457 < count__13383_13456))
{var vec__13399_13458 = cljs.core._nth.call(null,chunk__13382_13455,i__13384_13457);var actual_type_13459 = cljs.core.nth.call(null,vec__13399_13458,0,null);var __13460 = cljs.core.nth.call(null,vec__13399_13458,1,null);var keys_13461 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13403,actual_type_13459,f_13453], null);var canonical_f_13462 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13402),keys_13461);dommy.core.update_event_listeners_BANG_.call(null,elem_13402,dommy.utils.dissoc_in,keys_13461);
if(cljs.core.truth_(elem_13402.removeEventListener))
{elem_13402.removeEventListener(cljs.core.name.call(null,actual_type_13459),canonical_f_13462);
} else
{elem_13402.detachEvent(cljs.core.name.call(null,actual_type_13459),canonical_f_13462);
}
{
var G__13463 = seq__13380_13454;
var G__13464 = chunk__13382_13455;
var G__13465 = count__13383_13456;
var G__13466 = (i__13384_13457 + 1);
seq__13380_13454 = G__13463;
chunk__13382_13455 = G__13464;
count__13383_13456 = G__13465;
i__13384_13457 = G__13466;
continue;
}
} else
{var temp__4092__auto___13467__$1 = cljs.core.seq.call(null,seq__13380_13454);if(temp__4092__auto___13467__$1)
{var seq__13380_13468__$1 = temp__4092__auto___13467__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13380_13468__$1))
{var c__8927__auto___13469 = cljs.core.chunk_first.call(null,seq__13380_13468__$1);{
var G__13470 = cljs.core.chunk_rest.call(null,seq__13380_13468__$1);
var G__13471 = c__8927__auto___13469;
var G__13472 = cljs.core.count.call(null,c__8927__auto___13469);
var G__13473 = 0;
seq__13380_13454 = G__13470;
chunk__13382_13455 = G__13471;
count__13383_13456 = G__13472;
i__13384_13457 = G__13473;
continue;
}
} else
{var vec__13400_13474 = cljs.core.first.call(null,seq__13380_13468__$1);var actual_type_13475 = cljs.core.nth.call(null,vec__13400_13474,0,null);var __13476 = cljs.core.nth.call(null,vec__13400_13474,1,null);var keys_13477 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_13403,actual_type_13475,f_13453], null);var canonical_f_13478 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_13402),keys_13477);dommy.core.update_event_listeners_BANG_.call(null,elem_13402,dommy.utils.dissoc_in,keys_13477);
if(cljs.core.truth_(elem_13402.removeEventListener))
{elem_13402.removeEventListener(cljs.core.name.call(null,actual_type_13475),canonical_f_13478);
} else
{elem_13402.detachEvent(cljs.core.name.call(null,actual_type_13475),canonical_f_13478);
}
{
var G__13479 = cljs.core.next.call(null,seq__13380_13468__$1);
var G__13480 = null;
var G__13481 = 0;
var G__13482 = 0;
seq__13380_13454 = G__13479;
chunk__13382_13455 = G__13480;
count__13383_13456 = G__13481;
i__13384_13457 = G__13482;
continue;
}
}
} else
{}
}
break;
}
{
var G__13483 = cljs.core.next.call(null,seq__13379_13445__$1);
var G__13484 = null;
var G__13485 = 0;
var G__13486 = 0;
seq__13379_13404 = G__13483;
chunk__13386_13405 = G__13484;
count__13387_13406 = G__13485;
i__13388_13407 = G__13486;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__13487){
var elem_sel = cljs.core.first(arglist__13487);
var type_fs = cljs.core.rest(arglist__13487);
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
var vec__13495_13502 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_13503 = cljs.core.nth.call(null,vec__13495_13502,0,null);var selector_13504 = cljs.core.nth.call(null,vec__13495_13502,1,null);var seq__13496_13505 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__13497_13506 = null;var count__13498_13507 = 0;var i__13499_13508 = 0;while(true){
if((i__13499_13508 < count__13498_13507))
{var vec__13500_13509 = cljs.core._nth.call(null,chunk__13497_13506,i__13499_13508);var type_13510 = cljs.core.nth.call(null,vec__13500_13509,0,null);var f_13511 = cljs.core.nth.call(null,vec__13500_13509,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13510,((function (seq__13496_13505,chunk__13497_13506,count__13498_13507,i__13499_13508,vec__13500_13509,type_13510,f_13511){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13510,this_fn);
return f_13511.call(null,e);
});})(seq__13496_13505,chunk__13497_13506,count__13498_13507,i__13499_13508,vec__13500_13509,type_13510,f_13511))
);
{
var G__13512 = seq__13496_13505;
var G__13513 = chunk__13497_13506;
var G__13514 = count__13498_13507;
var G__13515 = (i__13499_13508 + 1);
seq__13496_13505 = G__13512;
chunk__13497_13506 = G__13513;
count__13498_13507 = G__13514;
i__13499_13508 = G__13515;
continue;
}
} else
{var temp__4092__auto___13516 = cljs.core.seq.call(null,seq__13496_13505);if(temp__4092__auto___13516)
{var seq__13496_13517__$1 = temp__4092__auto___13516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13496_13517__$1))
{var c__8927__auto___13518 = cljs.core.chunk_first.call(null,seq__13496_13517__$1);{
var G__13519 = cljs.core.chunk_rest.call(null,seq__13496_13517__$1);
var G__13520 = c__8927__auto___13518;
var G__13521 = cljs.core.count.call(null,c__8927__auto___13518);
var G__13522 = 0;
seq__13496_13505 = G__13519;
chunk__13497_13506 = G__13520;
count__13498_13507 = G__13521;
i__13499_13508 = G__13522;
continue;
}
} else
{var vec__13501_13523 = cljs.core.first.call(null,seq__13496_13517__$1);var type_13524 = cljs.core.nth.call(null,vec__13501_13523,0,null);var f_13525 = cljs.core.nth.call(null,vec__13501_13523,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_13524,((function (seq__13496_13505,chunk__13497_13506,count__13498_13507,i__13499_13508,vec__13501_13523,type_13524,f_13525,seq__13496_13517__$1,temp__4092__auto___13516){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_13524,this_fn);
return f_13525.call(null,e);
});})(seq__13496_13505,chunk__13497_13506,count__13498_13507,i__13499_13508,vec__13501_13523,type_13524,f_13525,seq__13496_13517__$1,temp__4092__auto___13516))
);
{
var G__13526 = cljs.core.next.call(null,seq__13496_13517__$1);
var G__13527 = null;
var G__13528 = 0;
var G__13529 = 0;
seq__13496_13505 = G__13526;
chunk__13497_13506 = G__13527;
count__13498_13507 = G__13528;
i__13499_13508 = G__13529;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__13530){
var elem_sel = cljs.core.first(arglist__13530);
var type_fs = cljs.core.rest(arglist__13530);
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
var fire_BANG___delegate = function (node,event_type,p__13531){var vec__13533 = p__13531;var update_event_BANG_ = cljs.core.nth.call(null,vec__13533,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__13531 = null;if (arguments.length > 2) {
  p__13531 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__13531);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__13534){
var node = cljs.core.first(arglist__13534);
arglist__13534 = cljs.core.next(arglist__13534);
var event_type = cljs.core.first(arglist__13534);
var p__13531 = cljs.core.rest(arglist__13534);
return fire_BANG___delegate(node,event_type,p__13531);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map