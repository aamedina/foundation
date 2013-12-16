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
var G__36235 = (i + class$.length);
start_from = G__36235;
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
{var temp__4090__auto___36260 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36260))
{var class_list_36261 = temp__4090__auto___36260;var seq__36248_36262 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36249_36263 = null;var count__36250_36264 = 0;var i__36251_36265 = 0;while(true){
if((i__36251_36265 < count__36250_36264))
{var class_36266 = cljs.core._nth.call(null,chunk__36249_36263,i__36251_36265);class_list_36261.add(class_36266);
{
var G__36267 = seq__36248_36262;
var G__36268 = chunk__36249_36263;
var G__36269 = count__36250_36264;
var G__36270 = (i__36251_36265 + 1);
seq__36248_36262 = G__36267;
chunk__36249_36263 = G__36268;
count__36250_36264 = G__36269;
i__36251_36265 = G__36270;
continue;
}
} else
{var temp__4092__auto___36271 = cljs.core.seq.call(null,seq__36248_36262);if(temp__4092__auto___36271)
{var seq__36248_36272__$1 = temp__4092__auto___36271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36248_36272__$1))
{var c__14547__auto___36273 = cljs.core.chunk_first.call(null,seq__36248_36272__$1);{
var G__36274 = cljs.core.chunk_rest.call(null,seq__36248_36272__$1);
var G__36275 = c__14547__auto___36273;
var G__36276 = cljs.core.count.call(null,c__14547__auto___36273);
var G__36277 = 0;
seq__36248_36262 = G__36274;
chunk__36249_36263 = G__36275;
count__36250_36264 = G__36276;
i__36251_36265 = G__36277;
continue;
}
} else
{var class_36278 = cljs.core.first.call(null,seq__36248_36272__$1);class_list_36261.add(class_36278);
{
var G__36279 = cljs.core.next.call(null,seq__36248_36272__$1);
var G__36280 = null;
var G__36281 = 0;
var G__36282 = 0;
seq__36248_36262 = G__36279;
chunk__36249_36263 = G__36280;
count__36250_36264 = G__36281;
i__36251_36265 = G__36282;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_36283 = elem__$1.className;var seq__36252_36284 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36253_36285 = null;var count__36254_36286 = 0;var i__36255_36287 = 0;while(true){
if((i__36255_36287 < count__36254_36286))
{var class_36288 = cljs.core._nth.call(null,chunk__36253_36285,i__36255_36287);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36283,class_36288)))
{} else
{elem__$1.className = (((class_name_36283 === ""))?class_36288:[cljs.core.str(class_name_36283),cljs.core.str(" "),cljs.core.str(class_36288)].join(''));
}
{
var G__36289 = seq__36252_36284;
var G__36290 = chunk__36253_36285;
var G__36291 = count__36254_36286;
var G__36292 = (i__36255_36287 + 1);
seq__36252_36284 = G__36289;
chunk__36253_36285 = G__36290;
count__36254_36286 = G__36291;
i__36255_36287 = G__36292;
continue;
}
} else
{var temp__4092__auto___36293 = cljs.core.seq.call(null,seq__36252_36284);if(temp__4092__auto___36293)
{var seq__36252_36294__$1 = temp__4092__auto___36293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36252_36294__$1))
{var c__14547__auto___36295 = cljs.core.chunk_first.call(null,seq__36252_36294__$1);{
var G__36296 = cljs.core.chunk_rest.call(null,seq__36252_36294__$1);
var G__36297 = c__14547__auto___36295;
var G__36298 = cljs.core.count.call(null,c__14547__auto___36295);
var G__36299 = 0;
seq__36252_36284 = G__36296;
chunk__36253_36285 = G__36297;
count__36254_36286 = G__36298;
i__36255_36287 = G__36299;
continue;
}
} else
{var class_36300 = cljs.core.first.call(null,seq__36252_36294__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36283,class_36300)))
{} else
{elem__$1.className = (((class_name_36283 === ""))?class_36300:[cljs.core.str(class_name_36283),cljs.core.str(" "),cljs.core.str(class_36300)].join(''));
}
{
var G__36301 = cljs.core.next.call(null,seq__36252_36294__$1);
var G__36302 = null;
var G__36303 = 0;
var G__36304 = 0;
seq__36252_36284 = G__36301;
chunk__36253_36285 = G__36302;
count__36254_36286 = G__36303;
i__36255_36287 = G__36304;
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
var G__36305__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36256_36306 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__36257_36307 = null;var count__36258_36308 = 0;var i__36259_36309 = 0;while(true){
if((i__36259_36309 < count__36258_36308))
{var c_36310 = cljs.core._nth.call(null,chunk__36257_36307,i__36259_36309);add_class_BANG_.call(null,elem__$1,c_36310);
{
var G__36311 = seq__36256_36306;
var G__36312 = chunk__36257_36307;
var G__36313 = count__36258_36308;
var G__36314 = (i__36259_36309 + 1);
seq__36256_36306 = G__36311;
chunk__36257_36307 = G__36312;
count__36258_36308 = G__36313;
i__36259_36309 = G__36314;
continue;
}
} else
{var temp__4092__auto___36315 = cljs.core.seq.call(null,seq__36256_36306);if(temp__4092__auto___36315)
{var seq__36256_36316__$1 = temp__4092__auto___36315;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36256_36316__$1))
{var c__14547__auto___36317 = cljs.core.chunk_first.call(null,seq__36256_36316__$1);{
var G__36318 = cljs.core.chunk_rest.call(null,seq__36256_36316__$1);
var G__36319 = c__14547__auto___36317;
var G__36320 = cljs.core.count.call(null,c__14547__auto___36317);
var G__36321 = 0;
seq__36256_36306 = G__36318;
chunk__36257_36307 = G__36319;
count__36258_36308 = G__36320;
i__36259_36309 = G__36321;
continue;
}
} else
{var c_36322 = cljs.core.first.call(null,seq__36256_36316__$1);add_class_BANG_.call(null,elem__$1,c_36322);
{
var G__36323 = cljs.core.next.call(null,seq__36256_36316__$1);
var G__36324 = null;
var G__36325 = 0;
var G__36326 = 0;
seq__36256_36306 = G__36323;
chunk__36257_36307 = G__36324;
count__36258_36308 = G__36325;
i__36259_36309 = G__36326;
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
var G__36305 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36305__delegate.call(this,elem,classes,more_classes);};
G__36305.cljs$lang$maxFixedArity = 2;
G__36305.cljs$lang$applyTo = (function (arglist__36327){
var elem = cljs.core.first(arglist__36327);
arglist__36327 = cljs.core.next(arglist__36327);
var classes = cljs.core.first(arglist__36327);
var more_classes = cljs.core.rest(arglist__36327);
return G__36305__delegate(elem,classes,more_classes);
});
G__36305.cljs$core$IFn$_invoke$arity$variadic = G__36305__delegate;
return G__36305;
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
var G__36328 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__36328;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36337 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36337))
{var class_list_36338 = temp__4090__auto___36337;class_list_36338.remove(class$__$1);
} else
{var class_name_36339 = elem__$1.className;var new_class_name_36340 = dommy.attrs.remove_class_str.call(null,class_name_36339,class$__$1);if((class_name_36339 === new_class_name_36340))
{} else
{elem__$1.className = new_class_name_36340;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__36341__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36333 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__36334 = null;var count__36335 = 0;var i__36336 = 0;while(true){
if((i__36336 < count__36335))
{var c = cljs.core._nth.call(null,chunk__36334,i__36336);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36342 = seq__36333;
var G__36343 = chunk__36334;
var G__36344 = count__36335;
var G__36345 = (i__36336 + 1);
seq__36333 = G__36342;
chunk__36334 = G__36343;
count__36335 = G__36344;
i__36336 = G__36345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36333);if(temp__4092__auto__)
{var seq__36333__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36333__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__36333__$1);{
var G__36346 = cljs.core.chunk_rest.call(null,seq__36333__$1);
var G__36347 = c__14547__auto__;
var G__36348 = cljs.core.count.call(null,c__14547__auto__);
var G__36349 = 0;
seq__36333 = G__36346;
chunk__36334 = G__36347;
count__36335 = G__36348;
i__36336 = G__36349;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__36333__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36350 = cljs.core.next.call(null,seq__36333__$1);
var G__36351 = null;
var G__36352 = 0;
var G__36353 = 0;
seq__36333 = G__36350;
chunk__36334 = G__36351;
count__36335 = G__36352;
i__36336 = G__36353;
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
var G__36341 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36341__delegate.call(this,elem,class$,classes);};
G__36341.cljs$lang$maxFixedArity = 2;
G__36341.cljs$lang$applyTo = (function (arglist__36354){
var elem = cljs.core.first(arglist__36354);
arglist__36354 = cljs.core.next(arglist__36354);
var class$ = cljs.core.first(arglist__36354);
var classes = cljs.core.rest(arglist__36354);
return G__36341__delegate(elem,class$,classes);
});
G__36341.cljs$core$IFn$_invoke$arity$variadic = G__36341__delegate;
return G__36341;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36355 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36355))
{var class_list_36356 = temp__4090__auto___36355;class_list_36356.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__36359){var vec__36360 = p__36359;var k = cljs.core.nth.call(null,vec__36360,0,null);var v = cljs.core.nth.call(null,vec__36360,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__36367_36373 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36368_36374 = null;var count__36369_36375 = 0;var i__36370_36376 = 0;while(true){
if((i__36370_36376 < count__36369_36375))
{var vec__36371_36377 = cljs.core._nth.call(null,chunk__36368_36374,i__36370_36376);var k_36378 = cljs.core.nth.call(null,vec__36371_36377,0,null);var v_36379 = cljs.core.nth.call(null,vec__36371_36377,1,null);(style[cljs.core.name.call(null,k_36378)] = v_36379);
{
var G__36380 = seq__36367_36373;
var G__36381 = chunk__36368_36374;
var G__36382 = count__36369_36375;
var G__36383 = (i__36370_36376 + 1);
seq__36367_36373 = G__36380;
chunk__36368_36374 = G__36381;
count__36369_36375 = G__36382;
i__36370_36376 = G__36383;
continue;
}
} else
{var temp__4092__auto___36384 = cljs.core.seq.call(null,seq__36367_36373);if(temp__4092__auto___36384)
{var seq__36367_36385__$1 = temp__4092__auto___36384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36367_36385__$1))
{var c__14547__auto___36386 = cljs.core.chunk_first.call(null,seq__36367_36385__$1);{
var G__36387 = cljs.core.chunk_rest.call(null,seq__36367_36385__$1);
var G__36388 = c__14547__auto___36386;
var G__36389 = cljs.core.count.call(null,c__14547__auto___36386);
var G__36390 = 0;
seq__36367_36373 = G__36387;
chunk__36368_36374 = G__36388;
count__36369_36375 = G__36389;
i__36370_36376 = G__36390;
continue;
}
} else
{var vec__36372_36391 = cljs.core.first.call(null,seq__36367_36385__$1);var k_36392 = cljs.core.nth.call(null,vec__36372_36391,0,null);var v_36393 = cljs.core.nth.call(null,vec__36372_36391,1,null);(style[cljs.core.name.call(null,k_36392)] = v_36393);
{
var G__36394 = cljs.core.next.call(null,seq__36367_36385__$1);
var G__36395 = null;
var G__36396 = 0;
var G__36397 = 0;
seq__36367_36373 = G__36394;
chunk__36368_36374 = G__36395;
count__36369_36375 = G__36396;
i__36370_36376 = G__36397;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36398){
var elem = cljs.core.first(arglist__36398);
var kvs = cljs.core.rest(arglist__36398);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36405_36411 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36406_36412 = null;var count__36407_36413 = 0;var i__36408_36414 = 0;while(true){
if((i__36408_36414 < count__36407_36413))
{var vec__36409_36415 = cljs.core._nth.call(null,chunk__36406_36412,i__36408_36414);var k_36416 = cljs.core.nth.call(null,vec__36409_36415,0,null);var v_36417 = cljs.core.nth.call(null,vec__36409_36415,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36416,[cljs.core.str(v_36417),cljs.core.str("px")].join(''));
{
var G__36418 = seq__36405_36411;
var G__36419 = chunk__36406_36412;
var G__36420 = count__36407_36413;
var G__36421 = (i__36408_36414 + 1);
seq__36405_36411 = G__36418;
chunk__36406_36412 = G__36419;
count__36407_36413 = G__36420;
i__36408_36414 = G__36421;
continue;
}
} else
{var temp__4092__auto___36422 = cljs.core.seq.call(null,seq__36405_36411);if(temp__4092__auto___36422)
{var seq__36405_36423__$1 = temp__4092__auto___36422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36405_36423__$1))
{var c__14547__auto___36424 = cljs.core.chunk_first.call(null,seq__36405_36423__$1);{
var G__36425 = cljs.core.chunk_rest.call(null,seq__36405_36423__$1);
var G__36426 = c__14547__auto___36424;
var G__36427 = cljs.core.count.call(null,c__14547__auto___36424);
var G__36428 = 0;
seq__36405_36411 = G__36425;
chunk__36406_36412 = G__36426;
count__36407_36413 = G__36427;
i__36408_36414 = G__36428;
continue;
}
} else
{var vec__36410_36429 = cljs.core.first.call(null,seq__36405_36423__$1);var k_36430 = cljs.core.nth.call(null,vec__36410_36429,0,null);var v_36431 = cljs.core.nth.call(null,vec__36410_36429,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36430,[cljs.core.str(v_36431),cljs.core.str("px")].join(''));
{
var G__36432 = cljs.core.next.call(null,seq__36405_36423__$1);
var G__36433 = null;
var G__36434 = 0;
var G__36435 = 0;
seq__36405_36411 = G__36432;
chunk__36406_36412 = G__36433;
count__36407_36413 = G__36434;
i__36408_36414 = G__36435;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__36436){
var elem = cljs.core.first(arglist__36436);
var kvs = cljs.core.rest(arglist__36436);
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
{var G__36445 = dommy.template.__GT_node_like.call(null,elem);(G__36445[cljs.core.name.call(null,k)] = v);
return G__36445;
} else
{var G__36446 = dommy.template.__GT_node_like.call(null,elem);G__36446.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__36446;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__36453__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36447_36454 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__36448_36455 = null;var count__36449_36456 = 0;var i__36450_36457 = 0;while(true){
if((i__36450_36457 < count__36449_36456))
{var vec__36451_36458 = cljs.core._nth.call(null,chunk__36448_36455,i__36450_36457);var k_36459__$1 = cljs.core.nth.call(null,vec__36451_36458,0,null);var v_36460__$1 = cljs.core.nth.call(null,vec__36451_36458,1,null);set_attr_BANG_.call(null,elem__$1,k_36459__$1,v_36460__$1);
{
var G__36461 = seq__36447_36454;
var G__36462 = chunk__36448_36455;
var G__36463 = count__36449_36456;
var G__36464 = (i__36450_36457 + 1);
seq__36447_36454 = G__36461;
chunk__36448_36455 = G__36462;
count__36449_36456 = G__36463;
i__36450_36457 = G__36464;
continue;
}
} else
{var temp__4092__auto___36465 = cljs.core.seq.call(null,seq__36447_36454);if(temp__4092__auto___36465)
{var seq__36447_36466__$1 = temp__4092__auto___36465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36447_36466__$1))
{var c__14547__auto___36467 = cljs.core.chunk_first.call(null,seq__36447_36466__$1);{
var G__36468 = cljs.core.chunk_rest.call(null,seq__36447_36466__$1);
var G__36469 = c__14547__auto___36467;
var G__36470 = cljs.core.count.call(null,c__14547__auto___36467);
var G__36471 = 0;
seq__36447_36454 = G__36468;
chunk__36448_36455 = G__36469;
count__36449_36456 = G__36470;
i__36450_36457 = G__36471;
continue;
}
} else
{var vec__36452_36472 = cljs.core.first.call(null,seq__36447_36466__$1);var k_36473__$1 = cljs.core.nth.call(null,vec__36452_36472,0,null);var v_36474__$1 = cljs.core.nth.call(null,vec__36452_36472,1,null);set_attr_BANG_.call(null,elem__$1,k_36473__$1,v_36474__$1);
{
var G__36475 = cljs.core.next.call(null,seq__36447_36466__$1);
var G__36476 = null;
var G__36477 = 0;
var G__36478 = 0;
seq__36447_36454 = G__36475;
chunk__36448_36455 = G__36476;
count__36449_36456 = G__36477;
i__36450_36457 = G__36478;
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
var G__36453 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__36453__delegate.call(this,elem,k,v,kvs);};
G__36453.cljs$lang$maxFixedArity = 3;
G__36453.cljs$lang$applyTo = (function (arglist__36479){
var elem = cljs.core.first(arglist__36479);
arglist__36479 = cljs.core.next(arglist__36479);
var k = cljs.core.first(arglist__36479);
arglist__36479 = cljs.core.next(arglist__36479);
var v = cljs.core.first(arglist__36479);
var kvs = cljs.core.rest(arglist__36479);
return G__36453__delegate(elem,k,v,kvs);
});
G__36453.cljs$core$IFn$_invoke$arity$variadic = G__36453__delegate;
return G__36453;
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
var G__36488__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36484_36489 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__36485_36490 = null;var count__36486_36491 = 0;var i__36487_36492 = 0;while(true){
if((i__36487_36492 < count__36486_36491))
{var k_36493__$1 = cljs.core._nth.call(null,chunk__36485_36490,i__36487_36492);remove_attr_BANG_.call(null,elem__$1,k_36493__$1);
{
var G__36494 = seq__36484_36489;
var G__36495 = chunk__36485_36490;
var G__36496 = count__36486_36491;
var G__36497 = (i__36487_36492 + 1);
seq__36484_36489 = G__36494;
chunk__36485_36490 = G__36495;
count__36486_36491 = G__36496;
i__36487_36492 = G__36497;
continue;
}
} else
{var temp__4092__auto___36498 = cljs.core.seq.call(null,seq__36484_36489);if(temp__4092__auto___36498)
{var seq__36484_36499__$1 = temp__4092__auto___36498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36484_36499__$1))
{var c__14547__auto___36500 = cljs.core.chunk_first.call(null,seq__36484_36499__$1);{
var G__36501 = cljs.core.chunk_rest.call(null,seq__36484_36499__$1);
var G__36502 = c__14547__auto___36500;
var G__36503 = cljs.core.count.call(null,c__14547__auto___36500);
var G__36504 = 0;
seq__36484_36489 = G__36501;
chunk__36485_36490 = G__36502;
count__36486_36491 = G__36503;
i__36487_36492 = G__36504;
continue;
}
} else
{var k_36505__$1 = cljs.core.first.call(null,seq__36484_36499__$1);remove_attr_BANG_.call(null,elem__$1,k_36505__$1);
{
var G__36506 = cljs.core.next.call(null,seq__36484_36499__$1);
var G__36507 = null;
var G__36508 = 0;
var G__36509 = 0;
seq__36484_36489 = G__36506;
chunk__36485_36490 = G__36507;
count__36486_36491 = G__36508;
i__36487_36492 = G__36509;
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
var G__36488 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36488__delegate.call(this,elem,k,ks);};
G__36488.cljs$lang$maxFixedArity = 2;
G__36488.cljs$lang$applyTo = (function (arglist__36510){
var elem = cljs.core.first(arglist__36510);
arglist__36510 = cljs.core.next(arglist__36510);
var k = cljs.core.first(arglist__36510);
var ks = cljs.core.rest(arglist__36510);
return G__36488__delegate(elem,k,ks);
});
G__36488.cljs$core$IFn$_invoke$arity$variadic = G__36488__delegate;
return G__36488;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__36512 = dommy.template.__GT_node_like.call(null,elem);G__36512.style.display = ((show_QMARK_)?"":"none");
return G__36512;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__36514 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36514,false);
return G__36514;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__36516 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36516,true);
return G__36516;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__36518 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__36518["constructor"] = Object);
return G__36518;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map