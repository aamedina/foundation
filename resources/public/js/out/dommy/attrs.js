// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8211__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8211__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8211__auto__;
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
var G__274330 = (i + class$.length);
start_from = G__274330;
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
{var temp__4090__auto___274355 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___274355))
{var class_list_274356 = temp__4090__auto___274355;var seq__274343_274357 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__274344_274358 = null;var count__274345_274359 = 0;var i__274346_274360 = 0;while(true){
if((i__274346_274360 < count__274345_274359))
{var class_274361 = cljs.core._nth.call(null,chunk__274344_274358,i__274346_274360);class_list_274356.add(class_274361);
{
var G__274362 = seq__274343_274357;
var G__274363 = chunk__274344_274358;
var G__274364 = count__274345_274359;
var G__274365 = (i__274346_274360 + 1);
seq__274343_274357 = G__274362;
chunk__274344_274358 = G__274363;
count__274345_274359 = G__274364;
i__274346_274360 = G__274365;
continue;
}
} else
{var temp__4092__auto___274366 = cljs.core.seq.call(null,seq__274343_274357);if(temp__4092__auto___274366)
{var seq__274343_274367__$1 = temp__4092__auto___274366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274343_274367__$1))
{var c__8952__auto___274368 = cljs.core.chunk_first.call(null,seq__274343_274367__$1);{
var G__274369 = cljs.core.chunk_rest.call(null,seq__274343_274367__$1);
var G__274370 = c__8952__auto___274368;
var G__274371 = cljs.core.count.call(null,c__8952__auto___274368);
var G__274372 = 0;
seq__274343_274357 = G__274369;
chunk__274344_274358 = G__274370;
count__274345_274359 = G__274371;
i__274346_274360 = G__274372;
continue;
}
} else
{var class_274373 = cljs.core.first.call(null,seq__274343_274367__$1);class_list_274356.add(class_274373);
{
var G__274374 = cljs.core.next.call(null,seq__274343_274367__$1);
var G__274375 = null;
var G__274376 = 0;
var G__274377 = 0;
seq__274343_274357 = G__274374;
chunk__274344_274358 = G__274375;
count__274345_274359 = G__274376;
i__274346_274360 = G__274377;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_274378 = elem__$1.className;var seq__274347_274379 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__274348_274380 = null;var count__274349_274381 = 0;var i__274350_274382 = 0;while(true){
if((i__274350_274382 < count__274349_274381))
{var class_274383 = cljs.core._nth.call(null,chunk__274348_274380,i__274350_274382);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_274378,class_274383)))
{} else
{elem__$1.className = (((class_name_274378 === ""))?class_274383:[cljs.core.str(class_name_274378),cljs.core.str(" "),cljs.core.str(class_274383)].join(''));
}
{
var G__274384 = seq__274347_274379;
var G__274385 = chunk__274348_274380;
var G__274386 = count__274349_274381;
var G__274387 = (i__274350_274382 + 1);
seq__274347_274379 = G__274384;
chunk__274348_274380 = G__274385;
count__274349_274381 = G__274386;
i__274350_274382 = G__274387;
continue;
}
} else
{var temp__4092__auto___274388 = cljs.core.seq.call(null,seq__274347_274379);if(temp__4092__auto___274388)
{var seq__274347_274389__$1 = temp__4092__auto___274388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274347_274389__$1))
{var c__8952__auto___274390 = cljs.core.chunk_first.call(null,seq__274347_274389__$1);{
var G__274391 = cljs.core.chunk_rest.call(null,seq__274347_274389__$1);
var G__274392 = c__8952__auto___274390;
var G__274393 = cljs.core.count.call(null,c__8952__auto___274390);
var G__274394 = 0;
seq__274347_274379 = G__274391;
chunk__274348_274380 = G__274392;
count__274349_274381 = G__274393;
i__274350_274382 = G__274394;
continue;
}
} else
{var class_274395 = cljs.core.first.call(null,seq__274347_274389__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_274378,class_274395)))
{} else
{elem__$1.className = (((class_name_274378 === ""))?class_274395:[cljs.core.str(class_name_274378),cljs.core.str(" "),cljs.core.str(class_274395)].join(''));
}
{
var G__274396 = cljs.core.next.call(null,seq__274347_274389__$1);
var G__274397 = null;
var G__274398 = 0;
var G__274399 = 0;
seq__274347_274379 = G__274396;
chunk__274348_274380 = G__274397;
count__274349_274381 = G__274398;
i__274350_274382 = G__274399;
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
var G__274400__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__274351_274401 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__274352_274402 = null;var count__274353_274403 = 0;var i__274354_274404 = 0;while(true){
if((i__274354_274404 < count__274353_274403))
{var c_274405 = cljs.core._nth.call(null,chunk__274352_274402,i__274354_274404);add_class_BANG_.call(null,elem__$1,c_274405);
{
var G__274406 = seq__274351_274401;
var G__274407 = chunk__274352_274402;
var G__274408 = count__274353_274403;
var G__274409 = (i__274354_274404 + 1);
seq__274351_274401 = G__274406;
chunk__274352_274402 = G__274407;
count__274353_274403 = G__274408;
i__274354_274404 = G__274409;
continue;
}
} else
{var temp__4092__auto___274410 = cljs.core.seq.call(null,seq__274351_274401);if(temp__4092__auto___274410)
{var seq__274351_274411__$1 = temp__4092__auto___274410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274351_274411__$1))
{var c__8952__auto___274412 = cljs.core.chunk_first.call(null,seq__274351_274411__$1);{
var G__274413 = cljs.core.chunk_rest.call(null,seq__274351_274411__$1);
var G__274414 = c__8952__auto___274412;
var G__274415 = cljs.core.count.call(null,c__8952__auto___274412);
var G__274416 = 0;
seq__274351_274401 = G__274413;
chunk__274352_274402 = G__274414;
count__274353_274403 = G__274415;
i__274354_274404 = G__274416;
continue;
}
} else
{var c_274417 = cljs.core.first.call(null,seq__274351_274411__$1);add_class_BANG_.call(null,elem__$1,c_274417);
{
var G__274418 = cljs.core.next.call(null,seq__274351_274411__$1);
var G__274419 = null;
var G__274420 = 0;
var G__274421 = 0;
seq__274351_274401 = G__274418;
chunk__274352_274402 = G__274419;
count__274353_274403 = G__274420;
i__274354_274404 = G__274421;
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
var G__274400 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__274400__delegate.call(this,elem,classes,more_classes);};
G__274400.cljs$lang$maxFixedArity = 2;
G__274400.cljs$lang$applyTo = (function (arglist__274422){
var elem = cljs.core.first(arglist__274422);
arglist__274422 = cljs.core.next(arglist__274422);
var classes = cljs.core.first(arglist__274422);
var more_classes = cljs.core.rest(arglist__274422);
return G__274400__delegate(elem,classes,more_classes);
});
G__274400.cljs$core$IFn$_invoke$arity$variadic = G__274400__delegate;
return G__274400;
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
var G__274423 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__274423;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___274432 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___274432))
{var class_list_274433 = temp__4090__auto___274432;class_list_274433.remove(class$__$1);
} else
{var class_name_274434 = elem__$1.className;var new_class_name_274435 = dommy.attrs.remove_class_str.call(null,class_name_274434,class$__$1);if((class_name_274434 === new_class_name_274435))
{} else
{elem__$1.className = new_class_name_274435;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__274436__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__274428 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__274429 = null;var count__274430 = 0;var i__274431 = 0;while(true){
if((i__274431 < count__274430))
{var c = cljs.core._nth.call(null,chunk__274429,i__274431);remove_class_BANG_.call(null,elem__$1,c);
{
var G__274437 = seq__274428;
var G__274438 = chunk__274429;
var G__274439 = count__274430;
var G__274440 = (i__274431 + 1);
seq__274428 = G__274437;
chunk__274429 = G__274438;
count__274430 = G__274439;
i__274431 = G__274440;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__274428);if(temp__4092__auto__)
{var seq__274428__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274428__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__274428__$1);{
var G__274441 = cljs.core.chunk_rest.call(null,seq__274428__$1);
var G__274442 = c__8952__auto__;
var G__274443 = cljs.core.count.call(null,c__8952__auto__);
var G__274444 = 0;
seq__274428 = G__274441;
chunk__274429 = G__274442;
count__274430 = G__274443;
i__274431 = G__274444;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__274428__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__274445 = cljs.core.next.call(null,seq__274428__$1);
var G__274446 = null;
var G__274447 = 0;
var G__274448 = 0;
seq__274428 = G__274445;
chunk__274429 = G__274446;
count__274430 = G__274447;
i__274431 = G__274448;
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
var G__274436 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__274436__delegate.call(this,elem,class$,classes);};
G__274436.cljs$lang$maxFixedArity = 2;
G__274436.cljs$lang$applyTo = (function (arglist__274449){
var elem = cljs.core.first(arglist__274449);
arglist__274449 = cljs.core.next(arglist__274449);
var class$ = cljs.core.first(arglist__274449);
var classes = cljs.core.rest(arglist__274449);
return G__274436__delegate(elem,class$,classes);
});
G__274436.cljs$core$IFn$_invoke$arity$variadic = G__274436__delegate;
return G__274436;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___274450 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___274450))
{var class_list_274451 = temp__4090__auto___274450;class_list_274451.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__274454){var vec__274455 = p__274454;var k = cljs.core.nth.call(null,vec__274455,0,null);var v = cljs.core.nth.call(null,vec__274455,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__274462_274468 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__274463_274469 = null;var count__274464_274470 = 0;var i__274465_274471 = 0;while(true){
if((i__274465_274471 < count__274464_274470))
{var vec__274466_274472 = cljs.core._nth.call(null,chunk__274463_274469,i__274465_274471);var k_274473 = cljs.core.nth.call(null,vec__274466_274472,0,null);var v_274474 = cljs.core.nth.call(null,vec__274466_274472,1,null);(style[cljs.core.name.call(null,k_274473)] = v_274474);
{
var G__274475 = seq__274462_274468;
var G__274476 = chunk__274463_274469;
var G__274477 = count__274464_274470;
var G__274478 = (i__274465_274471 + 1);
seq__274462_274468 = G__274475;
chunk__274463_274469 = G__274476;
count__274464_274470 = G__274477;
i__274465_274471 = G__274478;
continue;
}
} else
{var temp__4092__auto___274479 = cljs.core.seq.call(null,seq__274462_274468);if(temp__4092__auto___274479)
{var seq__274462_274480__$1 = temp__4092__auto___274479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274462_274480__$1))
{var c__8952__auto___274481 = cljs.core.chunk_first.call(null,seq__274462_274480__$1);{
var G__274482 = cljs.core.chunk_rest.call(null,seq__274462_274480__$1);
var G__274483 = c__8952__auto___274481;
var G__274484 = cljs.core.count.call(null,c__8952__auto___274481);
var G__274485 = 0;
seq__274462_274468 = G__274482;
chunk__274463_274469 = G__274483;
count__274464_274470 = G__274484;
i__274465_274471 = G__274485;
continue;
}
} else
{var vec__274467_274486 = cljs.core.first.call(null,seq__274462_274480__$1);var k_274487 = cljs.core.nth.call(null,vec__274467_274486,0,null);var v_274488 = cljs.core.nth.call(null,vec__274467_274486,1,null);(style[cljs.core.name.call(null,k_274487)] = v_274488);
{
var G__274489 = cljs.core.next.call(null,seq__274462_274480__$1);
var G__274490 = null;
var G__274491 = 0;
var G__274492 = 0;
seq__274462_274468 = G__274489;
chunk__274463_274469 = G__274490;
count__274464_274470 = G__274491;
i__274465_274471 = G__274492;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__274493){
var elem = cljs.core.first(arglist__274493);
var kvs = cljs.core.rest(arglist__274493);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__274500_274506 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__274501_274507 = null;var count__274502_274508 = 0;var i__274503_274509 = 0;while(true){
if((i__274503_274509 < count__274502_274508))
{var vec__274504_274510 = cljs.core._nth.call(null,chunk__274501_274507,i__274503_274509);var k_274511 = cljs.core.nth.call(null,vec__274504_274510,0,null);var v_274512 = cljs.core.nth.call(null,vec__274504_274510,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_274511,[cljs.core.str(v_274512),cljs.core.str("px")].join(''));
{
var G__274513 = seq__274500_274506;
var G__274514 = chunk__274501_274507;
var G__274515 = count__274502_274508;
var G__274516 = (i__274503_274509 + 1);
seq__274500_274506 = G__274513;
chunk__274501_274507 = G__274514;
count__274502_274508 = G__274515;
i__274503_274509 = G__274516;
continue;
}
} else
{var temp__4092__auto___274517 = cljs.core.seq.call(null,seq__274500_274506);if(temp__4092__auto___274517)
{var seq__274500_274518__$1 = temp__4092__auto___274517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274500_274518__$1))
{var c__8952__auto___274519 = cljs.core.chunk_first.call(null,seq__274500_274518__$1);{
var G__274520 = cljs.core.chunk_rest.call(null,seq__274500_274518__$1);
var G__274521 = c__8952__auto___274519;
var G__274522 = cljs.core.count.call(null,c__8952__auto___274519);
var G__274523 = 0;
seq__274500_274506 = G__274520;
chunk__274501_274507 = G__274521;
count__274502_274508 = G__274522;
i__274503_274509 = G__274523;
continue;
}
} else
{var vec__274505_274524 = cljs.core.first.call(null,seq__274500_274518__$1);var k_274525 = cljs.core.nth.call(null,vec__274505_274524,0,null);var v_274526 = cljs.core.nth.call(null,vec__274505_274524,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_274525,[cljs.core.str(v_274526),cljs.core.str("px")].join(''));
{
var G__274527 = cljs.core.next.call(null,seq__274500_274518__$1);
var G__274528 = null;
var G__274529 = 0;
var G__274530 = 0;
seq__274500_274506 = G__274527;
chunk__274501_274507 = G__274528;
count__274502_274508 = G__274529;
i__274503_274509 = G__274530;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__274531){
var elem = cljs.core.first(arglist__274531);
var kvs = cljs.core.rest(arglist__274531);
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
{var G__274540 = dommy.template.__GT_node_like.call(null,elem);(G__274540[cljs.core.name.call(null,k)] = v);
return G__274540;
} else
{var G__274541 = dommy.template.__GT_node_like.call(null,elem);G__274541.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__274541;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__274548__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__274542_274549 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__274543_274550 = null;var count__274544_274551 = 0;var i__274545_274552 = 0;while(true){
if((i__274545_274552 < count__274544_274551))
{var vec__274546_274553 = cljs.core._nth.call(null,chunk__274543_274550,i__274545_274552);var k_274554__$1 = cljs.core.nth.call(null,vec__274546_274553,0,null);var v_274555__$1 = cljs.core.nth.call(null,vec__274546_274553,1,null);set_attr_BANG_.call(null,elem__$1,k_274554__$1,v_274555__$1);
{
var G__274556 = seq__274542_274549;
var G__274557 = chunk__274543_274550;
var G__274558 = count__274544_274551;
var G__274559 = (i__274545_274552 + 1);
seq__274542_274549 = G__274556;
chunk__274543_274550 = G__274557;
count__274544_274551 = G__274558;
i__274545_274552 = G__274559;
continue;
}
} else
{var temp__4092__auto___274560 = cljs.core.seq.call(null,seq__274542_274549);if(temp__4092__auto___274560)
{var seq__274542_274561__$1 = temp__4092__auto___274560;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274542_274561__$1))
{var c__8952__auto___274562 = cljs.core.chunk_first.call(null,seq__274542_274561__$1);{
var G__274563 = cljs.core.chunk_rest.call(null,seq__274542_274561__$1);
var G__274564 = c__8952__auto___274562;
var G__274565 = cljs.core.count.call(null,c__8952__auto___274562);
var G__274566 = 0;
seq__274542_274549 = G__274563;
chunk__274543_274550 = G__274564;
count__274544_274551 = G__274565;
i__274545_274552 = G__274566;
continue;
}
} else
{var vec__274547_274567 = cljs.core.first.call(null,seq__274542_274561__$1);var k_274568__$1 = cljs.core.nth.call(null,vec__274547_274567,0,null);var v_274569__$1 = cljs.core.nth.call(null,vec__274547_274567,1,null);set_attr_BANG_.call(null,elem__$1,k_274568__$1,v_274569__$1);
{
var G__274570 = cljs.core.next.call(null,seq__274542_274561__$1);
var G__274571 = null;
var G__274572 = 0;
var G__274573 = 0;
seq__274542_274549 = G__274570;
chunk__274543_274550 = G__274571;
count__274544_274551 = G__274572;
i__274545_274552 = G__274573;
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
var G__274548 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__274548__delegate.call(this,elem,k,v,kvs);};
G__274548.cljs$lang$maxFixedArity = 3;
G__274548.cljs$lang$applyTo = (function (arglist__274574){
var elem = cljs.core.first(arglist__274574);
arglist__274574 = cljs.core.next(arglist__274574);
var k = cljs.core.first(arglist__274574);
arglist__274574 = cljs.core.next(arglist__274574);
var v = cljs.core.first(arglist__274574);
var kvs = cljs.core.rest(arglist__274574);
return G__274548__delegate(elem,k,v,kvs);
});
G__274548.cljs$core$IFn$_invoke$arity$variadic = G__274548__delegate;
return G__274548;
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
var G__274583__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__274579_274584 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__274580_274585 = null;var count__274581_274586 = 0;var i__274582_274587 = 0;while(true){
if((i__274582_274587 < count__274581_274586))
{var k_274588__$1 = cljs.core._nth.call(null,chunk__274580_274585,i__274582_274587);remove_attr_BANG_.call(null,elem__$1,k_274588__$1);
{
var G__274589 = seq__274579_274584;
var G__274590 = chunk__274580_274585;
var G__274591 = count__274581_274586;
var G__274592 = (i__274582_274587 + 1);
seq__274579_274584 = G__274589;
chunk__274580_274585 = G__274590;
count__274581_274586 = G__274591;
i__274582_274587 = G__274592;
continue;
}
} else
{var temp__4092__auto___274593 = cljs.core.seq.call(null,seq__274579_274584);if(temp__4092__auto___274593)
{var seq__274579_274594__$1 = temp__4092__auto___274593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274579_274594__$1))
{var c__8952__auto___274595 = cljs.core.chunk_first.call(null,seq__274579_274594__$1);{
var G__274596 = cljs.core.chunk_rest.call(null,seq__274579_274594__$1);
var G__274597 = c__8952__auto___274595;
var G__274598 = cljs.core.count.call(null,c__8952__auto___274595);
var G__274599 = 0;
seq__274579_274584 = G__274596;
chunk__274580_274585 = G__274597;
count__274581_274586 = G__274598;
i__274582_274587 = G__274599;
continue;
}
} else
{var k_274600__$1 = cljs.core.first.call(null,seq__274579_274594__$1);remove_attr_BANG_.call(null,elem__$1,k_274600__$1);
{
var G__274601 = cljs.core.next.call(null,seq__274579_274594__$1);
var G__274602 = null;
var G__274603 = 0;
var G__274604 = 0;
seq__274579_274584 = G__274601;
chunk__274580_274585 = G__274602;
count__274581_274586 = G__274603;
i__274582_274587 = G__274604;
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
var G__274583 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__274583__delegate.call(this,elem,k,ks);};
G__274583.cljs$lang$maxFixedArity = 2;
G__274583.cljs$lang$applyTo = (function (arglist__274605){
var elem = cljs.core.first(arglist__274605);
arglist__274605 = cljs.core.next(arglist__274605);
var k = cljs.core.first(arglist__274605);
var ks = cljs.core.rest(arglist__274605);
return G__274583__delegate(elem,k,ks);
});
G__274583.cljs$core$IFn$_invoke$arity$variadic = G__274583__delegate;
return G__274583;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__274607 = dommy.template.__GT_node_like.call(null,elem);G__274607.style.display = ((show_QMARK_)?"":"none");
return G__274607;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__274609 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__274609,false);
return G__274609;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__274611 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__274611,true);
return G__274611;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__274613 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__274613["constructor"] = Object);
return G__274613;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map