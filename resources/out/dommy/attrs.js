// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13811__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13811__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13811__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__36230 = (i + class$.length);
start_from = G__36230;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___36255 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36255))
{var class_list_36256 = temp__4090__auto___36255;var seq__36243_36257 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36244_36258 = null;var count__36245_36259 = 0;var i__36246_36260 = 0;while(true){
if((i__36246_36260 < count__36245_36259))
{var class_36261 = cljs.core._nth.call(null,chunk__36244_36258,i__36246_36260);class_list_36256.add(class_36261);
{
var G__36262 = seq__36243_36257;
var G__36263 = chunk__36244_36258;
var G__36264 = count__36245_36259;
var G__36265 = (i__36246_36260 + 1);
seq__36243_36257 = G__36262;
chunk__36244_36258 = G__36263;
count__36245_36259 = G__36264;
i__36246_36260 = G__36265;
continue;
}
} else
{var temp__4092__auto___36266 = cljs.core.seq.call(null,seq__36243_36257);if(temp__4092__auto___36266)
{var seq__36243_36267__$1 = temp__4092__auto___36266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36243_36267__$1))
{var c__14547__auto___36268 = cljs.core.chunk_first.call(null,seq__36243_36267__$1);{
var G__36269 = cljs.core.chunk_rest.call(null,seq__36243_36267__$1);
var G__36270 = c__14547__auto___36268;
var G__36271 = cljs.core.count.call(null,c__14547__auto___36268);
var G__36272 = 0;
seq__36243_36257 = G__36269;
chunk__36244_36258 = G__36270;
count__36245_36259 = G__36271;
i__36246_36260 = G__36272;
continue;
}
} else
{var class_36273 = cljs.core.first.call(null,seq__36243_36267__$1);class_list_36256.add(class_36273);
{
var G__36274 = cljs.core.next.call(null,seq__36243_36267__$1);
var G__36275 = null;
var G__36276 = 0;
var G__36277 = 0;
seq__36243_36257 = G__36274;
chunk__36244_36258 = G__36275;
count__36245_36259 = G__36276;
i__36246_36260 = G__36277;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_36278 = elem__$1.className;var seq__36247_36279 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36248_36280 = null;var count__36249_36281 = 0;var i__36250_36282 = 0;while(true){
if((i__36250_36282 < count__36249_36281))
{var class_36283 = cljs.core._nth.call(null,chunk__36248_36280,i__36250_36282);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36278,class_36283)))
{} else
{elem__$1.className = (((class_name_36278 === ""))?class_36283:[cljs.core.str(class_name_36278),cljs.core.str(" "),cljs.core.str(class_36283)].join(''));
}
{
var G__36284 = seq__36247_36279;
var G__36285 = chunk__36248_36280;
var G__36286 = count__36249_36281;
var G__36287 = (i__36250_36282 + 1);
seq__36247_36279 = G__36284;
chunk__36248_36280 = G__36285;
count__36249_36281 = G__36286;
i__36250_36282 = G__36287;
continue;
}
} else
{var temp__4092__auto___36288 = cljs.core.seq.call(null,seq__36247_36279);if(temp__4092__auto___36288)
{var seq__36247_36289__$1 = temp__4092__auto___36288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36247_36289__$1))
{var c__14547__auto___36290 = cljs.core.chunk_first.call(null,seq__36247_36289__$1);{
var G__36291 = cljs.core.chunk_rest.call(null,seq__36247_36289__$1);
var G__36292 = c__14547__auto___36290;
var G__36293 = cljs.core.count.call(null,c__14547__auto___36290);
var G__36294 = 0;
seq__36247_36279 = G__36291;
chunk__36248_36280 = G__36292;
count__36249_36281 = G__36293;
i__36250_36282 = G__36294;
continue;
}
} else
{var class_36295 = cljs.core.first.call(null,seq__36247_36289__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36278,class_36295)))
{} else
{elem__$1.className = (((class_name_36278 === ""))?class_36295:[cljs.core.str(class_name_36278),cljs.core.str(" "),cljs.core.str(class_36295)].join(''));
}
{
var G__36296 = cljs.core.next.call(null,seq__36247_36289__$1);
var G__36297 = null;
var G__36298 = 0;
var G__36299 = 0;
seq__36247_36279 = G__36296;
chunk__36248_36280 = G__36297;
count__36249_36281 = G__36298;
i__36250_36282 = G__36299;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__36300__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36251_36301 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__36252_36302 = null;var count__36253_36303 = 0;var i__36254_36304 = 0;while(true){
if((i__36254_36304 < count__36253_36303))
{var c_36305 = cljs.core._nth.call(null,chunk__36252_36302,i__36254_36304);add_class_BANG_.call(null,elem__$1,c_36305);
{
var G__36306 = seq__36251_36301;
var G__36307 = chunk__36252_36302;
var G__36308 = count__36253_36303;
var G__36309 = (i__36254_36304 + 1);
seq__36251_36301 = G__36306;
chunk__36252_36302 = G__36307;
count__36253_36303 = G__36308;
i__36254_36304 = G__36309;
continue;
}
} else
{var temp__4092__auto___36310 = cljs.core.seq.call(null,seq__36251_36301);if(temp__4092__auto___36310)
{var seq__36251_36311__$1 = temp__4092__auto___36310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36251_36311__$1))
{var c__14547__auto___36312 = cljs.core.chunk_first.call(null,seq__36251_36311__$1);{
var G__36313 = cljs.core.chunk_rest.call(null,seq__36251_36311__$1);
var G__36314 = c__14547__auto___36312;
var G__36315 = cljs.core.count.call(null,c__14547__auto___36312);
var G__36316 = 0;
seq__36251_36301 = G__36313;
chunk__36252_36302 = G__36314;
count__36253_36303 = G__36315;
i__36254_36304 = G__36316;
continue;
}
} else
{var c_36317 = cljs.core.first.call(null,seq__36251_36311__$1);add_class_BANG_.call(null,elem__$1,c_36317);
{
var G__36318 = cljs.core.next.call(null,seq__36251_36311__$1);
var G__36319 = null;
var G__36320 = 0;
var G__36321 = 0;
seq__36251_36301 = G__36318;
chunk__36252_36302 = G__36319;
count__36253_36303 = G__36320;
i__36254_36304 = G__36321;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__36300 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36300__delegate.call(this,elem,classes,more_classes);};
G__36300.cljs$lang$maxFixedArity = 2;
G__36300.cljs$lang$applyTo = (function (arglist__36322){
var elem = cljs.core.first(arglist__36322);
arglist__36322 = cljs.core.next(arglist__36322);
var classes = cljs.core.first(arglist__36322);
var more_classes = cljs.core.rest(arglist__36322);
return G__36300__delegate(elem,classes,more_classes);
});
G__36300.cljs$core$IFn$_invoke$arity$variadic = G__36300__delegate;
return G__36300;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__36323 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__36323;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36332 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36332))
{var class_list_36333 = temp__4090__auto___36332;class_list_36333.remove(class$__$1);
} else
{var class_name_36334 = elem__$1.className;var new_class_name_36335 = dommy.attrs.remove_class_str.call(null,class_name_36334,class$__$1);if((class_name_36334 === new_class_name_36335))
{} else
{elem__$1.className = new_class_name_36335;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__36336__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36328 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__36329 = null;var count__36330 = 0;var i__36331 = 0;while(true){
if((i__36331 < count__36330))
{var c = cljs.core._nth.call(null,chunk__36329,i__36331);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36337 = seq__36328;
var G__36338 = chunk__36329;
var G__36339 = count__36330;
var G__36340 = (i__36331 + 1);
seq__36328 = G__36337;
chunk__36329 = G__36338;
count__36330 = G__36339;
i__36331 = G__36340;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36328);if(temp__4092__auto__)
{var seq__36328__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36328__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__36328__$1);{
var G__36341 = cljs.core.chunk_rest.call(null,seq__36328__$1);
var G__36342 = c__14547__auto__;
var G__36343 = cljs.core.count.call(null,c__14547__auto__);
var G__36344 = 0;
seq__36328 = G__36341;
chunk__36329 = G__36342;
count__36330 = G__36343;
i__36331 = G__36344;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__36328__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36345 = cljs.core.next.call(null,seq__36328__$1);
var G__36346 = null;
var G__36347 = 0;
var G__36348 = 0;
seq__36328 = G__36345;
chunk__36329 = G__36346;
count__36330 = G__36347;
i__36331 = G__36348;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__36336 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36336__delegate.call(this,elem,class$,classes);};
G__36336.cljs$lang$maxFixedArity = 2;
G__36336.cljs$lang$applyTo = (function (arglist__36349){
var elem = cljs.core.first(arglist__36349);
arglist__36349 = cljs.core.next(arglist__36349);
var class$ = cljs.core.first(arglist__36349);
var classes = cljs.core.rest(arglist__36349);
return G__36336__delegate(elem,class$,classes);
});
G__36336.cljs$core$IFn$_invoke$arity$variadic = G__36336__delegate;
return G__36336;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36350 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36350))
{var class_list_36351 = temp__4090__auto___36350;class_list_36351.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__36354){var vec__36355 = p__36354;var k = cljs.core.nth.call(null,vec__36355,0,null);var v = cljs.core.nth.call(null,vec__36355,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__36362_36368 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36363_36369 = null;var count__36364_36370 = 0;var i__36365_36371 = 0;while(true){
if((i__36365_36371 < count__36364_36370))
{var vec__36366_36372 = cljs.core._nth.call(null,chunk__36363_36369,i__36365_36371);var k_36373 = cljs.core.nth.call(null,vec__36366_36372,0,null);var v_36374 = cljs.core.nth.call(null,vec__36366_36372,1,null);(style[cljs.core.name.call(null,k_36373)] = v_36374);
{
var G__36375 = seq__36362_36368;
var G__36376 = chunk__36363_36369;
var G__36377 = count__36364_36370;
var G__36378 = (i__36365_36371 + 1);
seq__36362_36368 = G__36375;
chunk__36363_36369 = G__36376;
count__36364_36370 = G__36377;
i__36365_36371 = G__36378;
continue;
}
} else
{var temp__4092__auto___36379 = cljs.core.seq.call(null,seq__36362_36368);if(temp__4092__auto___36379)
{var seq__36362_36380__$1 = temp__4092__auto___36379;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36362_36380__$1))
{var c__14547__auto___36381 = cljs.core.chunk_first.call(null,seq__36362_36380__$1);{
var G__36382 = cljs.core.chunk_rest.call(null,seq__36362_36380__$1);
var G__36383 = c__14547__auto___36381;
var G__36384 = cljs.core.count.call(null,c__14547__auto___36381);
var G__36385 = 0;
seq__36362_36368 = G__36382;
chunk__36363_36369 = G__36383;
count__36364_36370 = G__36384;
i__36365_36371 = G__36385;
continue;
}
} else
{var vec__36367_36386 = cljs.core.first.call(null,seq__36362_36380__$1);var k_36387 = cljs.core.nth.call(null,vec__36367_36386,0,null);var v_36388 = cljs.core.nth.call(null,vec__36367_36386,1,null);(style[cljs.core.name.call(null,k_36387)] = v_36388);
{
var G__36389 = cljs.core.next.call(null,seq__36362_36380__$1);
var G__36390 = null;
var G__36391 = 0;
var G__36392 = 0;
seq__36362_36368 = G__36389;
chunk__36363_36369 = G__36390;
count__36364_36370 = G__36391;
i__36365_36371 = G__36392;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36393){
var elem = cljs.core.first(arglist__36393);
var kvs = cljs.core.rest(arglist__36393);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36400_36406 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36401_36407 = null;var count__36402_36408 = 0;var i__36403_36409 = 0;while(true){
if((i__36403_36409 < count__36402_36408))
{var vec__36404_36410 = cljs.core._nth.call(null,chunk__36401_36407,i__36403_36409);var k_36411 = cljs.core.nth.call(null,vec__36404_36410,0,null);var v_36412 = cljs.core.nth.call(null,vec__36404_36410,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36411,[cljs.core.str(v_36412),cljs.core.str("px")].join(''));
{
var G__36413 = seq__36400_36406;
var G__36414 = chunk__36401_36407;
var G__36415 = count__36402_36408;
var G__36416 = (i__36403_36409 + 1);
seq__36400_36406 = G__36413;
chunk__36401_36407 = G__36414;
count__36402_36408 = G__36415;
i__36403_36409 = G__36416;
continue;
}
} else
{var temp__4092__auto___36417 = cljs.core.seq.call(null,seq__36400_36406);if(temp__4092__auto___36417)
{var seq__36400_36418__$1 = temp__4092__auto___36417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36400_36418__$1))
{var c__14547__auto___36419 = cljs.core.chunk_first.call(null,seq__36400_36418__$1);{
var G__36420 = cljs.core.chunk_rest.call(null,seq__36400_36418__$1);
var G__36421 = c__14547__auto___36419;
var G__36422 = cljs.core.count.call(null,c__14547__auto___36419);
var G__36423 = 0;
seq__36400_36406 = G__36420;
chunk__36401_36407 = G__36421;
count__36402_36408 = G__36422;
i__36403_36409 = G__36423;
continue;
}
} else
{var vec__36405_36424 = cljs.core.first.call(null,seq__36400_36418__$1);var k_36425 = cljs.core.nth.call(null,vec__36405_36424,0,null);var v_36426 = cljs.core.nth.call(null,vec__36405_36424,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36425,[cljs.core.str(v_36426),cljs.core.str("px")].join(''));
{
var G__36427 = cljs.core.next.call(null,seq__36400_36418__$1);
var G__36428 = null;
var G__36429 = 0;
var G__36430 = 0;
seq__36400_36406 = G__36427;
chunk__36401_36407 = G__36428;
count__36402_36408 = G__36429;
i__36403_36409 = G__36430;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__36431){
var elem = cljs.core.first(arglist__36431);
var kvs = cljs.core.rest(arglist__36431);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__36440 = dommy.template.__GT_node_like.call(null,elem);(G__36440[cljs.core.name.call(null,k)] = v);
return G__36440;
} else
{var G__36441 = dommy.template.__GT_node_like.call(null,elem);G__36441.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__36441;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__36448__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36442_36449 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__36443_36450 = null;var count__36444_36451 = 0;var i__36445_36452 = 0;while(true){
if((i__36445_36452 < count__36444_36451))
{var vec__36446_36453 = cljs.core._nth.call(null,chunk__36443_36450,i__36445_36452);var k_36454__$1 = cljs.core.nth.call(null,vec__36446_36453,0,null);var v_36455__$1 = cljs.core.nth.call(null,vec__36446_36453,1,null);set_attr_BANG_.call(null,elem__$1,k_36454__$1,v_36455__$1);
{
var G__36456 = seq__36442_36449;
var G__36457 = chunk__36443_36450;
var G__36458 = count__36444_36451;
var G__36459 = (i__36445_36452 + 1);
seq__36442_36449 = G__36456;
chunk__36443_36450 = G__36457;
count__36444_36451 = G__36458;
i__36445_36452 = G__36459;
continue;
}
} else
{var temp__4092__auto___36460 = cljs.core.seq.call(null,seq__36442_36449);if(temp__4092__auto___36460)
{var seq__36442_36461__$1 = temp__4092__auto___36460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36442_36461__$1))
{var c__14547__auto___36462 = cljs.core.chunk_first.call(null,seq__36442_36461__$1);{
var G__36463 = cljs.core.chunk_rest.call(null,seq__36442_36461__$1);
var G__36464 = c__14547__auto___36462;
var G__36465 = cljs.core.count.call(null,c__14547__auto___36462);
var G__36466 = 0;
seq__36442_36449 = G__36463;
chunk__36443_36450 = G__36464;
count__36444_36451 = G__36465;
i__36445_36452 = G__36466;
continue;
}
} else
{var vec__36447_36467 = cljs.core.first.call(null,seq__36442_36461__$1);var k_36468__$1 = cljs.core.nth.call(null,vec__36447_36467,0,null);var v_36469__$1 = cljs.core.nth.call(null,vec__36447_36467,1,null);set_attr_BANG_.call(null,elem__$1,k_36468__$1,v_36469__$1);
{
var G__36470 = cljs.core.next.call(null,seq__36442_36461__$1);
var G__36471 = null;
var G__36472 = 0;
var G__36473 = 0;
seq__36442_36449 = G__36470;
chunk__36443_36450 = G__36471;
count__36444_36451 = G__36472;
i__36445_36452 = G__36473;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__36448 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__36448__delegate.call(this,elem,k,v,kvs);};
G__36448.cljs$lang$maxFixedArity = 3;
G__36448.cljs$lang$applyTo = (function (arglist__36474){
var elem = cljs.core.first(arglist__36474);
arglist__36474 = cljs.core.next(arglist__36474);
var k = cljs.core.first(arglist__36474);
arglist__36474 = cljs.core.next(arglist__36474);
var v = cljs.core.first(arglist__36474);
var kvs = cljs.core.rest(arglist__36474);
return G__36448__delegate(elem,k,v,kvs);
});
G__36448.cljs$core$IFn$_invoke$arity$variadic = G__36448__delegate;
return G__36448;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__36483__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36479_36484 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__36480_36485 = null;var count__36481_36486 = 0;var i__36482_36487 = 0;while(true){
if((i__36482_36487 < count__36481_36486))
{var k_36488__$1 = cljs.core._nth.call(null,chunk__36480_36485,i__36482_36487);remove_attr_BANG_.call(null,elem__$1,k_36488__$1);
{
var G__36489 = seq__36479_36484;
var G__36490 = chunk__36480_36485;
var G__36491 = count__36481_36486;
var G__36492 = (i__36482_36487 + 1);
seq__36479_36484 = G__36489;
chunk__36480_36485 = G__36490;
count__36481_36486 = G__36491;
i__36482_36487 = G__36492;
continue;
}
} else
{var temp__4092__auto___36493 = cljs.core.seq.call(null,seq__36479_36484);if(temp__4092__auto___36493)
{var seq__36479_36494__$1 = temp__4092__auto___36493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36479_36494__$1))
{var c__14547__auto___36495 = cljs.core.chunk_first.call(null,seq__36479_36494__$1);{
var G__36496 = cljs.core.chunk_rest.call(null,seq__36479_36494__$1);
var G__36497 = c__14547__auto___36495;
var G__36498 = cljs.core.count.call(null,c__14547__auto___36495);
var G__36499 = 0;
seq__36479_36484 = G__36496;
chunk__36480_36485 = G__36497;
count__36481_36486 = G__36498;
i__36482_36487 = G__36499;
continue;
}
} else
{var k_36500__$1 = cljs.core.first.call(null,seq__36479_36494__$1);remove_attr_BANG_.call(null,elem__$1,k_36500__$1);
{
var G__36501 = cljs.core.next.call(null,seq__36479_36494__$1);
var G__36502 = null;
var G__36503 = 0;
var G__36504 = 0;
seq__36479_36484 = G__36501;
chunk__36480_36485 = G__36502;
count__36481_36486 = G__36503;
i__36482_36487 = G__36504;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__36483 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36483__delegate.call(this,elem,k,ks);};
G__36483.cljs$lang$maxFixedArity = 2;
G__36483.cljs$lang$applyTo = (function (arglist__36505){
var elem = cljs.core.first(arglist__36505);
arglist__36505 = cljs.core.next(arglist__36505);
var k = cljs.core.first(arglist__36505);
var ks = cljs.core.rest(arglist__36505);
return G__36483__delegate(elem,k,ks);
});
G__36483.cljs$core$IFn$_invoke$arity$variadic = G__36483__delegate;
return G__36483;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__36507 = dommy.template.__GT_node_like.call(null,elem);G__36507.style.display = ((show_QMARK_)?"":"none");
return G__36507;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__36509 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36509,false);
return G__36509;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__36511 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36511,true);
return G__36511;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__36513 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__36513["constructor"] = Object);
return G__36513;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map