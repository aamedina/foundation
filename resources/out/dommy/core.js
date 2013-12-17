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
dommy.core.text = (function text(elem){var or__13823__auto__ = elem.textContent;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var append_BANG___2 = (function (parent,child){var G__330866 = dommy.template.__GT_node_like.call(null,parent);G__330866.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__330866;
});
var append_BANG___3 = (function() { 
var G__330871__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__330867_330872 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__330868_330873 = null;var count__330869_330874 = 0;var i__330870_330875 = 0;while(true){
if((i__330870_330875 < count__330869_330874))
{var c_330876 = cljs.core._nth.call(null,chunk__330868_330873,i__330870_330875);append_BANG_.call(null,parent__$1,c_330876);
{
var G__330877 = seq__330867_330872;
var G__330878 = chunk__330868_330873;
var G__330879 = count__330869_330874;
var G__330880 = (i__330870_330875 + 1);
seq__330867_330872 = G__330877;
chunk__330868_330873 = G__330878;
count__330869_330874 = G__330879;
i__330870_330875 = G__330880;
continue;
}
} else
{var temp__4092__auto___330881 = cljs.core.seq.call(null,seq__330867_330872);if(temp__4092__auto___330881)
{var seq__330867_330882__$1 = temp__4092__auto___330881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330867_330882__$1))
{var c__14547__auto___330883 = cljs.core.chunk_first.call(null,seq__330867_330882__$1);{
var G__330884 = cljs.core.chunk_rest.call(null,seq__330867_330882__$1);
var G__330885 = c__14547__auto___330883;
var G__330886 = cljs.core.count.call(null,c__14547__auto___330883);
var G__330887 = 0;
seq__330867_330872 = G__330884;
chunk__330868_330873 = G__330885;
count__330869_330874 = G__330886;
i__330870_330875 = G__330887;
continue;
}
} else
{var c_330888 = cljs.core.first.call(null,seq__330867_330882__$1);append_BANG_.call(null,parent__$1,c_330888);
{
var G__330889 = cljs.core.next.call(null,seq__330867_330882__$1);
var G__330890 = null;
var G__330891 = 0;
var G__330892 = 0;
seq__330867_330872 = G__330889;
chunk__330868_330873 = G__330890;
count__330869_330874 = G__330891;
i__330870_330875 = G__330892;
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
var G__330871 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__330871__delegate.call(this,parent,child,more_children);};
G__330871.cljs$lang$maxFixedArity = 2;
G__330871.cljs$lang$applyTo = (function (arglist__330893){
var parent = cljs.core.first(arglist__330893);
arglist__330893 = cljs.core.next(arglist__330893);
var child = cljs.core.first(arglist__330893);
var more_children = cljs.core.rest(arglist__330893);
return G__330871__delegate(parent,child,more_children);
});
G__330871.cljs$core$IFn$_invoke$arity$variadic = G__330871__delegate;
return G__330871;
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
var G__330902__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__330898_330903 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__330899_330904 = null;var count__330900_330905 = 0;var i__330901_330906 = 0;while(true){
if((i__330901_330906 < count__330900_330905))
{var c_330907 = cljs.core._nth.call(null,chunk__330899_330904,i__330901_330906);prepend_BANG_.call(null,parent__$1,c_330907);
{
var G__330908 = seq__330898_330903;
var G__330909 = chunk__330899_330904;
var G__330910 = count__330900_330905;
var G__330911 = (i__330901_330906 + 1);
seq__330898_330903 = G__330908;
chunk__330899_330904 = G__330909;
count__330900_330905 = G__330910;
i__330901_330906 = G__330911;
continue;
}
} else
{var temp__4092__auto___330912 = cljs.core.seq.call(null,seq__330898_330903);if(temp__4092__auto___330912)
{var seq__330898_330913__$1 = temp__4092__auto___330912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330898_330913__$1))
{var c__14547__auto___330914 = cljs.core.chunk_first.call(null,seq__330898_330913__$1);{
var G__330915 = cljs.core.chunk_rest.call(null,seq__330898_330913__$1);
var G__330916 = c__14547__auto___330914;
var G__330917 = cljs.core.count.call(null,c__14547__auto___330914);
var G__330918 = 0;
seq__330898_330903 = G__330915;
chunk__330899_330904 = G__330916;
count__330900_330905 = G__330917;
i__330901_330906 = G__330918;
continue;
}
} else
{var c_330919 = cljs.core.first.call(null,seq__330898_330913__$1);prepend_BANG_.call(null,parent__$1,c_330919);
{
var G__330920 = cljs.core.next.call(null,seq__330898_330913__$1);
var G__330921 = null;
var G__330922 = 0;
var G__330923 = 0;
seq__330898_330903 = G__330920;
chunk__330899_330904 = G__330921;
count__330900_330905 = G__330922;
i__330901_330906 = G__330923;
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
var G__330902 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__330902__delegate.call(this,parent,child,more_children);};
G__330902.cljs$lang$maxFixedArity = 2;
G__330902.cljs$lang$applyTo = (function (arglist__330924){
var parent = cljs.core.first(arglist__330924);
arglist__330924 = cljs.core.next(arglist__330924);
var child = cljs.core.first(arglist__330924);
var more_children = cljs.core.rest(arglist__330924);
return G__330902__delegate(parent,child,more_children);
});
G__330902.cljs$core$IFn$_invoke$arity$variadic = G__330902__delegate;
return G__330902;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___330925 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___330925))
{var next_330926 = temp__4090__auto___330925;parent.insertBefore(actual_node,next_330926);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__330928 = dommy.template.__GT_node_like.call(null,parent);G__330928.innerHTML = "";
dommy.core.append_BANG_.call(null,G__330928,node_like);
return G__330928;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__330930 = elem__$1.parentNode;G__330930.removeChild(elem__$1);
return G__330930;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__330936){var vec__330937 = p__330936;var k = cljs.core.nth.call(null,vec__330937,0,null);var v = cljs.core.nth.call(null,vec__330937,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t330938 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t330938 = (function (v,k,vec__330937,p__330936,container,key_selectors_map,template,selector_map,meta330939){
this.v = v;
this.k = k;
this.vec__330937 = vec__330937;
this.p__330936 = p__330936;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta330939 = meta330939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t330938.cljs$lang$type = true;
dommy.core.t330938.cljs$lang$ctorStr = "dommy.core/t330938";
dommy.core.t330938.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"dommy.core/t330938");
});
dommy.core.t330938.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t330938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_330940){var self__ = this;
var _330940__$1 = this;return self__.meta330939;
});
dommy.core.t330938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_330940,meta330939__$1){var self__ = this;
var _330940__$1 = this;return (new dommy.core.t330938(self__.v,self__.k,self__.vec__330937,self__.p__330936,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta330939__$1));
});
dommy.core.__GT_t330938 = (function __GT_t330938(v__$1,k__$1,vec__330937__$1,p__330936__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta330939){return (new dommy.core.t330938(v__$1,k__$1,vec__330937__$1,p__330936__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta330939));
});
}
return (new dommy.core.t330938(v,k,vec__330937,p__330936,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__330941_SHARP_){return p1__330941_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__330942_SHARP_){return !((p1__330942_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__330943){var vec__330944 = p__330943;var special_mouse_event = cljs.core.nth.call(null,vec__330944,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__330944,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__13823__auto__ = event.selectedTarget;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__13811__auto__ = related_target;if(cljs.core.truth_(and__13811__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__13811__auto__;
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
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__13811__auto__ = selected_target;if(cljs.core.truth_(and__13811__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__13811__auto__;
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
dommy.core.event_listeners = (function event_listeners(elem){var or__13823__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__330945){
var elem = cljs.core.first(arglist__330945);
arglist__330945 = cljs.core.next(arglist__330945);
var f = cljs.core.first(arglist__330945);
var args = cljs.core.rest(arglist__330945);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__330946_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__330946_SHARP_));
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
var vec__330970_330993 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_330994 = cljs.core.nth.call(null,vec__330970_330993,0,null);var selector_330995 = cljs.core.nth.call(null,vec__330970_330993,1,null);var seq__330971_330996 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__330978_330997 = null;var count__330979_330998 = 0;var i__330980_330999 = 0;while(true){
if((i__330980_330999 < count__330979_330998))
{var vec__330987_331000 = cljs.core._nth.call(null,chunk__330978_330997,i__330980_330999);var orig_type_331001 = cljs.core.nth.call(null,vec__330987_331000,0,null);var f_331002 = cljs.core.nth.call(null,vec__330987_331000,1,null);var seq__330981_331003 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_331001,new cljs.core.PersistentArrayMap.fromArray([orig_type_331001,cljs.core.identity], true, false)));var chunk__330983_331004 = null;var count__330984_331005 = 0;var i__330985_331006 = 0;while(true){
if((i__330985_331006 < count__330984_331005))
{var vec__330988_331007 = cljs.core._nth.call(null,chunk__330983_331004,i__330985_331006);var actual_type_331008 = cljs.core.nth.call(null,vec__330988_331007,0,null);var factory_331009 = cljs.core.nth.call(null,vec__330988_331007,1,null);var canonical_f_331010 = (cljs.core.truth_(selector_330995)?cljs.core.partial.call(null,dommy.core.live_listener,elem_330994,selector_330995):cljs.core.identity).call(null,factory_331009.call(null,f_331002));dommy.core.update_event_listeners_BANG_.call(null,elem_330994,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_330995,actual_type_331008,f_331002], null),canonical_f_331010);
if(cljs.core.truth_(elem_330994.addEventListener))
{elem_330994.addEventListener(cljs.core.name.call(null,actual_type_331008),canonical_f_331010);
} else
{elem_330994.attachEvent(cljs.core.name.call(null,actual_type_331008),canonical_f_331010);
}
{
var G__331011 = seq__330981_331003;
var G__331012 = chunk__330983_331004;
var G__331013 = count__330984_331005;
var G__331014 = (i__330985_331006 + 1);
seq__330981_331003 = G__331011;
chunk__330983_331004 = G__331012;
count__330984_331005 = G__331013;
i__330985_331006 = G__331014;
continue;
}
} else
{var temp__4092__auto___331015 = cljs.core.seq.call(null,seq__330981_331003);if(temp__4092__auto___331015)
{var seq__330981_331016__$1 = temp__4092__auto___331015;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330981_331016__$1))
{var c__14547__auto___331017 = cljs.core.chunk_first.call(null,seq__330981_331016__$1);{
var G__331018 = cljs.core.chunk_rest.call(null,seq__330981_331016__$1);
var G__331019 = c__14547__auto___331017;
var G__331020 = cljs.core.count.call(null,c__14547__auto___331017);
var G__331021 = 0;
seq__330981_331003 = G__331018;
chunk__330983_331004 = G__331019;
count__330984_331005 = G__331020;
i__330985_331006 = G__331021;
continue;
}
} else
{var vec__330989_331022 = cljs.core.first.call(null,seq__330981_331016__$1);var actual_type_331023 = cljs.core.nth.call(null,vec__330989_331022,0,null);var factory_331024 = cljs.core.nth.call(null,vec__330989_331022,1,null);var canonical_f_331025 = (cljs.core.truth_(selector_330995)?cljs.core.partial.call(null,dommy.core.live_listener,elem_330994,selector_330995):cljs.core.identity).call(null,factory_331024.call(null,f_331002));dommy.core.update_event_listeners_BANG_.call(null,elem_330994,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_330995,actual_type_331023,f_331002], null),canonical_f_331025);
if(cljs.core.truth_(elem_330994.addEventListener))
{elem_330994.addEventListener(cljs.core.name.call(null,actual_type_331023),canonical_f_331025);
} else
{elem_330994.attachEvent(cljs.core.name.call(null,actual_type_331023),canonical_f_331025);
}
{
var G__331026 = cljs.core.next.call(null,seq__330981_331016__$1);
var G__331027 = null;
var G__331028 = 0;
var G__331029 = 0;
seq__330981_331003 = G__331026;
chunk__330983_331004 = G__331027;
count__330984_331005 = G__331028;
i__330985_331006 = G__331029;
continue;
}
}
} else
{}
}
break;
}
{
var G__331030 = seq__330971_330996;
var G__331031 = chunk__330978_330997;
var G__331032 = count__330979_330998;
var G__331033 = (i__330980_330999 + 1);
seq__330971_330996 = G__331030;
chunk__330978_330997 = G__331031;
count__330979_330998 = G__331032;
i__330980_330999 = G__331033;
continue;
}
} else
{var temp__4092__auto___331034 = cljs.core.seq.call(null,seq__330971_330996);if(temp__4092__auto___331034)
{var seq__330971_331035__$1 = temp__4092__auto___331034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330971_331035__$1))
{var c__14547__auto___331036 = cljs.core.chunk_first.call(null,seq__330971_331035__$1);{
var G__331037 = cljs.core.chunk_rest.call(null,seq__330971_331035__$1);
var G__331038 = c__14547__auto___331036;
var G__331039 = cljs.core.count.call(null,c__14547__auto___331036);
var G__331040 = 0;
seq__330971_330996 = G__331037;
chunk__330978_330997 = G__331038;
count__330979_330998 = G__331039;
i__330980_330999 = G__331040;
continue;
}
} else
{var vec__330990_331041 = cljs.core.first.call(null,seq__330971_331035__$1);var orig_type_331042 = cljs.core.nth.call(null,vec__330990_331041,0,null);var f_331043 = cljs.core.nth.call(null,vec__330990_331041,1,null);var seq__330972_331044 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_331042,new cljs.core.PersistentArrayMap.fromArray([orig_type_331042,cljs.core.identity], true, false)));var chunk__330974_331045 = null;var count__330975_331046 = 0;var i__330976_331047 = 0;while(true){
if((i__330976_331047 < count__330975_331046))
{var vec__330991_331048 = cljs.core._nth.call(null,chunk__330974_331045,i__330976_331047);var actual_type_331049 = cljs.core.nth.call(null,vec__330991_331048,0,null);var factory_331050 = cljs.core.nth.call(null,vec__330991_331048,1,null);var canonical_f_331051 = (cljs.core.truth_(selector_330995)?cljs.core.partial.call(null,dommy.core.live_listener,elem_330994,selector_330995):cljs.core.identity).call(null,factory_331050.call(null,f_331043));dommy.core.update_event_listeners_BANG_.call(null,elem_330994,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_330995,actual_type_331049,f_331043], null),canonical_f_331051);
if(cljs.core.truth_(elem_330994.addEventListener))
{elem_330994.addEventListener(cljs.core.name.call(null,actual_type_331049),canonical_f_331051);
} else
{elem_330994.attachEvent(cljs.core.name.call(null,actual_type_331049),canonical_f_331051);
}
{
var G__331052 = seq__330972_331044;
var G__331053 = chunk__330974_331045;
var G__331054 = count__330975_331046;
var G__331055 = (i__330976_331047 + 1);
seq__330972_331044 = G__331052;
chunk__330974_331045 = G__331053;
count__330975_331046 = G__331054;
i__330976_331047 = G__331055;
continue;
}
} else
{var temp__4092__auto___331056__$1 = cljs.core.seq.call(null,seq__330972_331044);if(temp__4092__auto___331056__$1)
{var seq__330972_331057__$1 = temp__4092__auto___331056__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330972_331057__$1))
{var c__14547__auto___331058 = cljs.core.chunk_first.call(null,seq__330972_331057__$1);{
var G__331059 = cljs.core.chunk_rest.call(null,seq__330972_331057__$1);
var G__331060 = c__14547__auto___331058;
var G__331061 = cljs.core.count.call(null,c__14547__auto___331058);
var G__331062 = 0;
seq__330972_331044 = G__331059;
chunk__330974_331045 = G__331060;
count__330975_331046 = G__331061;
i__330976_331047 = G__331062;
continue;
}
} else
{var vec__330992_331063 = cljs.core.first.call(null,seq__330972_331057__$1);var actual_type_331064 = cljs.core.nth.call(null,vec__330992_331063,0,null);var factory_331065 = cljs.core.nth.call(null,vec__330992_331063,1,null);var canonical_f_331066 = (cljs.core.truth_(selector_330995)?cljs.core.partial.call(null,dommy.core.live_listener,elem_330994,selector_330995):cljs.core.identity).call(null,factory_331065.call(null,f_331043));dommy.core.update_event_listeners_BANG_.call(null,elem_330994,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_330995,actual_type_331064,f_331043], null),canonical_f_331066);
if(cljs.core.truth_(elem_330994.addEventListener))
{elem_330994.addEventListener(cljs.core.name.call(null,actual_type_331064),canonical_f_331066);
} else
{elem_330994.attachEvent(cljs.core.name.call(null,actual_type_331064),canonical_f_331066);
}
{
var G__331067 = cljs.core.next.call(null,seq__330972_331057__$1);
var G__331068 = null;
var G__331069 = 0;
var G__331070 = 0;
seq__330972_331044 = G__331067;
chunk__330974_331045 = G__331068;
count__330975_331046 = G__331069;
i__330976_331047 = G__331070;
continue;
}
}
} else
{}
}
break;
}
{
var G__331071 = cljs.core.next.call(null,seq__330971_331035__$1);
var G__331072 = null;
var G__331073 = 0;
var G__331074 = 0;
seq__330971_330996 = G__331071;
chunk__330978_330997 = G__331072;
count__330979_330998 = G__331073;
i__330980_330999 = G__331074;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__331075){
var elem_sel = cljs.core.first(arglist__331075);
var type_fs = cljs.core.rest(arglist__331075);
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
var vec__331099_331122 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_331123 = cljs.core.nth.call(null,vec__331099_331122,0,null);var selector_331124 = cljs.core.nth.call(null,vec__331099_331122,1,null);var seq__331100_331125 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__331107_331126 = null;var count__331108_331127 = 0;var i__331109_331128 = 0;while(true){
if((i__331109_331128 < count__331108_331127))
{var vec__331116_331129 = cljs.core._nth.call(null,chunk__331107_331126,i__331109_331128);var orig_type_331130 = cljs.core.nth.call(null,vec__331116_331129,0,null);var f_331131 = cljs.core.nth.call(null,vec__331116_331129,1,null);var seq__331110_331132 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_331130,new cljs.core.PersistentArrayMap.fromArray([orig_type_331130,cljs.core.identity], true, false)));var chunk__331112_331133 = null;var count__331113_331134 = 0;var i__331114_331135 = 0;while(true){
if((i__331114_331135 < count__331113_331134))
{var vec__331117_331136 = cljs.core._nth.call(null,chunk__331112_331133,i__331114_331135);var actual_type_331137 = cljs.core.nth.call(null,vec__331117_331136,0,null);var __331138 = cljs.core.nth.call(null,vec__331117_331136,1,null);var keys_331139 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_331124,actual_type_331137,f_331131], null);var canonical_f_331140 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_331123),keys_331139);dommy.core.update_event_listeners_BANG_.call(null,elem_331123,dommy.utils.dissoc_in,keys_331139);
if(cljs.core.truth_(elem_331123.removeEventListener))
{elem_331123.removeEventListener(cljs.core.name.call(null,actual_type_331137),canonical_f_331140);
} else
{elem_331123.detachEvent(cljs.core.name.call(null,actual_type_331137),canonical_f_331140);
}
{
var G__331141 = seq__331110_331132;
var G__331142 = chunk__331112_331133;
var G__331143 = count__331113_331134;
var G__331144 = (i__331114_331135 + 1);
seq__331110_331132 = G__331141;
chunk__331112_331133 = G__331142;
count__331113_331134 = G__331143;
i__331114_331135 = G__331144;
continue;
}
} else
{var temp__4092__auto___331145 = cljs.core.seq.call(null,seq__331110_331132);if(temp__4092__auto___331145)
{var seq__331110_331146__$1 = temp__4092__auto___331145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331110_331146__$1))
{var c__14547__auto___331147 = cljs.core.chunk_first.call(null,seq__331110_331146__$1);{
var G__331148 = cljs.core.chunk_rest.call(null,seq__331110_331146__$1);
var G__331149 = c__14547__auto___331147;
var G__331150 = cljs.core.count.call(null,c__14547__auto___331147);
var G__331151 = 0;
seq__331110_331132 = G__331148;
chunk__331112_331133 = G__331149;
count__331113_331134 = G__331150;
i__331114_331135 = G__331151;
continue;
}
} else
{var vec__331118_331152 = cljs.core.first.call(null,seq__331110_331146__$1);var actual_type_331153 = cljs.core.nth.call(null,vec__331118_331152,0,null);var __331154 = cljs.core.nth.call(null,vec__331118_331152,1,null);var keys_331155 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_331124,actual_type_331153,f_331131], null);var canonical_f_331156 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_331123),keys_331155);dommy.core.update_event_listeners_BANG_.call(null,elem_331123,dommy.utils.dissoc_in,keys_331155);
if(cljs.core.truth_(elem_331123.removeEventListener))
{elem_331123.removeEventListener(cljs.core.name.call(null,actual_type_331153),canonical_f_331156);
} else
{elem_331123.detachEvent(cljs.core.name.call(null,actual_type_331153),canonical_f_331156);
}
{
var G__331157 = cljs.core.next.call(null,seq__331110_331146__$1);
var G__331158 = null;
var G__331159 = 0;
var G__331160 = 0;
seq__331110_331132 = G__331157;
chunk__331112_331133 = G__331158;
count__331113_331134 = G__331159;
i__331114_331135 = G__331160;
continue;
}
}
} else
{}
}
break;
}
{
var G__331161 = seq__331100_331125;
var G__331162 = chunk__331107_331126;
var G__331163 = count__331108_331127;
var G__331164 = (i__331109_331128 + 1);
seq__331100_331125 = G__331161;
chunk__331107_331126 = G__331162;
count__331108_331127 = G__331163;
i__331109_331128 = G__331164;
continue;
}
} else
{var temp__4092__auto___331165 = cljs.core.seq.call(null,seq__331100_331125);if(temp__4092__auto___331165)
{var seq__331100_331166__$1 = temp__4092__auto___331165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331100_331166__$1))
{var c__14547__auto___331167 = cljs.core.chunk_first.call(null,seq__331100_331166__$1);{
var G__331168 = cljs.core.chunk_rest.call(null,seq__331100_331166__$1);
var G__331169 = c__14547__auto___331167;
var G__331170 = cljs.core.count.call(null,c__14547__auto___331167);
var G__331171 = 0;
seq__331100_331125 = G__331168;
chunk__331107_331126 = G__331169;
count__331108_331127 = G__331170;
i__331109_331128 = G__331171;
continue;
}
} else
{var vec__331119_331172 = cljs.core.first.call(null,seq__331100_331166__$1);var orig_type_331173 = cljs.core.nth.call(null,vec__331119_331172,0,null);var f_331174 = cljs.core.nth.call(null,vec__331119_331172,1,null);var seq__331101_331175 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_331173,new cljs.core.PersistentArrayMap.fromArray([orig_type_331173,cljs.core.identity], true, false)));var chunk__331103_331176 = null;var count__331104_331177 = 0;var i__331105_331178 = 0;while(true){
if((i__331105_331178 < count__331104_331177))
{var vec__331120_331179 = cljs.core._nth.call(null,chunk__331103_331176,i__331105_331178);var actual_type_331180 = cljs.core.nth.call(null,vec__331120_331179,0,null);var __331181 = cljs.core.nth.call(null,vec__331120_331179,1,null);var keys_331182 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_331124,actual_type_331180,f_331174], null);var canonical_f_331183 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_331123),keys_331182);dommy.core.update_event_listeners_BANG_.call(null,elem_331123,dommy.utils.dissoc_in,keys_331182);
if(cljs.core.truth_(elem_331123.removeEventListener))
{elem_331123.removeEventListener(cljs.core.name.call(null,actual_type_331180),canonical_f_331183);
} else
{elem_331123.detachEvent(cljs.core.name.call(null,actual_type_331180),canonical_f_331183);
}
{
var G__331184 = seq__331101_331175;
var G__331185 = chunk__331103_331176;
var G__331186 = count__331104_331177;
var G__331187 = (i__331105_331178 + 1);
seq__331101_331175 = G__331184;
chunk__331103_331176 = G__331185;
count__331104_331177 = G__331186;
i__331105_331178 = G__331187;
continue;
}
} else
{var temp__4092__auto___331188__$1 = cljs.core.seq.call(null,seq__331101_331175);if(temp__4092__auto___331188__$1)
{var seq__331101_331189__$1 = temp__4092__auto___331188__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331101_331189__$1))
{var c__14547__auto___331190 = cljs.core.chunk_first.call(null,seq__331101_331189__$1);{
var G__331191 = cljs.core.chunk_rest.call(null,seq__331101_331189__$1);
var G__331192 = c__14547__auto___331190;
var G__331193 = cljs.core.count.call(null,c__14547__auto___331190);
var G__331194 = 0;
seq__331101_331175 = G__331191;
chunk__331103_331176 = G__331192;
count__331104_331177 = G__331193;
i__331105_331178 = G__331194;
continue;
}
} else
{var vec__331121_331195 = cljs.core.first.call(null,seq__331101_331189__$1);var actual_type_331196 = cljs.core.nth.call(null,vec__331121_331195,0,null);var __331197 = cljs.core.nth.call(null,vec__331121_331195,1,null);var keys_331198 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_331124,actual_type_331196,f_331174], null);var canonical_f_331199 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_331123),keys_331198);dommy.core.update_event_listeners_BANG_.call(null,elem_331123,dommy.utils.dissoc_in,keys_331198);
if(cljs.core.truth_(elem_331123.removeEventListener))
{elem_331123.removeEventListener(cljs.core.name.call(null,actual_type_331196),canonical_f_331199);
} else
{elem_331123.detachEvent(cljs.core.name.call(null,actual_type_331196),canonical_f_331199);
}
{
var G__331200 = cljs.core.next.call(null,seq__331101_331189__$1);
var G__331201 = null;
var G__331202 = 0;
var G__331203 = 0;
seq__331101_331175 = G__331200;
chunk__331103_331176 = G__331201;
count__331104_331177 = G__331202;
i__331105_331178 = G__331203;
continue;
}
}
} else
{}
}
break;
}
{
var G__331204 = cljs.core.next.call(null,seq__331100_331166__$1);
var G__331205 = null;
var G__331206 = 0;
var G__331207 = 0;
seq__331100_331125 = G__331204;
chunk__331107_331126 = G__331205;
count__331108_331127 = G__331206;
i__331109_331128 = G__331207;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__331208){
var elem_sel = cljs.core.first(arglist__331208);
var type_fs = cljs.core.rest(arglist__331208);
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
var vec__331216_331223 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_331224 = cljs.core.nth.call(null,vec__331216_331223,0,null);var selector_331225 = cljs.core.nth.call(null,vec__331216_331223,1,null);var seq__331217_331226 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__331218_331227 = null;var count__331219_331228 = 0;var i__331220_331229 = 0;while(true){
if((i__331220_331229 < count__331219_331228))
{var vec__331221_331230 = cljs.core._nth.call(null,chunk__331218_331227,i__331220_331229);var type_331231 = cljs.core.nth.call(null,vec__331221_331230,0,null);var f_331232 = cljs.core.nth.call(null,vec__331221_331230,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_331231,((function (seq__331217_331226,chunk__331218_331227,count__331219_331228,i__331220_331229,vec__331221_331230,type_331231,f_331232){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_331231,this_fn);
return f_331232.call(null,e);
});})(seq__331217_331226,chunk__331218_331227,count__331219_331228,i__331220_331229,vec__331221_331230,type_331231,f_331232))
);
{
var G__331233 = seq__331217_331226;
var G__331234 = chunk__331218_331227;
var G__331235 = count__331219_331228;
var G__331236 = (i__331220_331229 + 1);
seq__331217_331226 = G__331233;
chunk__331218_331227 = G__331234;
count__331219_331228 = G__331235;
i__331220_331229 = G__331236;
continue;
}
} else
{var temp__4092__auto___331237 = cljs.core.seq.call(null,seq__331217_331226);if(temp__4092__auto___331237)
{var seq__331217_331238__$1 = temp__4092__auto___331237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331217_331238__$1))
{var c__14547__auto___331239 = cljs.core.chunk_first.call(null,seq__331217_331238__$1);{
var G__331240 = cljs.core.chunk_rest.call(null,seq__331217_331238__$1);
var G__331241 = c__14547__auto___331239;
var G__331242 = cljs.core.count.call(null,c__14547__auto___331239);
var G__331243 = 0;
seq__331217_331226 = G__331240;
chunk__331218_331227 = G__331241;
count__331219_331228 = G__331242;
i__331220_331229 = G__331243;
continue;
}
} else
{var vec__331222_331244 = cljs.core.first.call(null,seq__331217_331238__$1);var type_331245 = cljs.core.nth.call(null,vec__331222_331244,0,null);var f_331246 = cljs.core.nth.call(null,vec__331222_331244,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_331245,((function (seq__331217_331226,chunk__331218_331227,count__331219_331228,i__331220_331229,vec__331222_331244,type_331245,f_331246,seq__331217_331238__$1,temp__4092__auto___331237){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_331245,this_fn);
return f_331246.call(null,e);
});})(seq__331217_331226,chunk__331218_331227,count__331219_331228,i__331220_331229,vec__331222_331244,type_331245,f_331246,seq__331217_331238__$1,temp__4092__auto___331237))
);
{
var G__331247 = cljs.core.next.call(null,seq__331217_331238__$1);
var G__331248 = null;
var G__331249 = 0;
var G__331250 = 0;
seq__331217_331226 = G__331247;
chunk__331218_331227 = G__331248;
count__331219_331228 = G__331249;
i__331220_331229 = G__331250;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__331251){
var elem_sel = cljs.core.first(arglist__331251);
var type_fs = cljs.core.rest(arglist__331251);
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
var fire_BANG___delegate = function (node,event_type,p__331252){var vec__331254 = p__331252;var update_event_BANG_ = cljs.core.nth.call(null,vec__331254,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__13823__auto__ = update_event_BANG_;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
var p__331252 = null;if (arguments.length > 2) {
  p__331252 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__331252);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__331255){
var node = cljs.core.first(arglist__331255);
arglist__331255 = cljs.core.next(arglist__331255);
var event_type = cljs.core.first(arglist__331255);
var p__331252 = cljs.core.rest(arglist__331255);
return fire_BANG___delegate(node,event_type,p__331252);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map