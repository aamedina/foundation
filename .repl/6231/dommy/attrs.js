// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7816__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7816__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7816__auto__;
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
var G__76341 = (i + class$.length);
start_from = G__76341;
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
{var temp__4090__auto___76366 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___76366))
{var class_list_76367 = temp__4090__auto___76366;var seq__76354_76368 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__76355_76369 = null;var count__76356_76370 = 0;var i__76357_76371 = 0;while(true){
if((i__76357_76371 < count__76356_76370))
{var class_76372 = cljs.core._nth.call(null,chunk__76355_76369,i__76357_76371);class_list_76367.add(class_76372);
{
var G__76373 = seq__76354_76368;
var G__76374 = chunk__76355_76369;
var G__76375 = count__76356_76370;
var G__76376 = (i__76357_76371 + 1);
seq__76354_76368 = G__76373;
chunk__76355_76369 = G__76374;
count__76356_76370 = G__76375;
i__76357_76371 = G__76376;
continue;
}
} else
{var temp__4092__auto___76377 = cljs.core.seq.call(null,seq__76354_76368);if(temp__4092__auto___76377)
{var seq__76354_76378__$1 = temp__4092__auto___76377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76354_76378__$1))
{var c__8552__auto___76379 = cljs.core.chunk_first.call(null,seq__76354_76378__$1);{
var G__76380 = cljs.core.chunk_rest.call(null,seq__76354_76378__$1);
var G__76381 = c__8552__auto___76379;
var G__76382 = cljs.core.count.call(null,c__8552__auto___76379);
var G__76383 = 0;
seq__76354_76368 = G__76380;
chunk__76355_76369 = G__76381;
count__76356_76370 = G__76382;
i__76357_76371 = G__76383;
continue;
}
} else
{var class_76384 = cljs.core.first.call(null,seq__76354_76378__$1);class_list_76367.add(class_76384);
{
var G__76385 = cljs.core.next.call(null,seq__76354_76378__$1);
var G__76386 = null;
var G__76387 = 0;
var G__76388 = 0;
seq__76354_76368 = G__76385;
chunk__76355_76369 = G__76386;
count__76356_76370 = G__76387;
i__76357_76371 = G__76388;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_76389 = elem__$1.className;var seq__76358_76390 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__76359_76391 = null;var count__76360_76392 = 0;var i__76361_76393 = 0;while(true){
if((i__76361_76393 < count__76360_76392))
{var class_76394 = cljs.core._nth.call(null,chunk__76359_76391,i__76361_76393);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_76389,class_76394)))
{} else
{elem__$1.className = (((class_name_76389 === ""))?class_76394:[cljs.core.str(class_name_76389),cljs.core.str(" "),cljs.core.str(class_76394)].join(''));
}
{
var G__76395 = seq__76358_76390;
var G__76396 = chunk__76359_76391;
var G__76397 = count__76360_76392;
var G__76398 = (i__76361_76393 + 1);
seq__76358_76390 = G__76395;
chunk__76359_76391 = G__76396;
count__76360_76392 = G__76397;
i__76361_76393 = G__76398;
continue;
}
} else
{var temp__4092__auto___76399 = cljs.core.seq.call(null,seq__76358_76390);if(temp__4092__auto___76399)
{var seq__76358_76400__$1 = temp__4092__auto___76399;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76358_76400__$1))
{var c__8552__auto___76401 = cljs.core.chunk_first.call(null,seq__76358_76400__$1);{
var G__76402 = cljs.core.chunk_rest.call(null,seq__76358_76400__$1);
var G__76403 = c__8552__auto___76401;
var G__76404 = cljs.core.count.call(null,c__8552__auto___76401);
var G__76405 = 0;
seq__76358_76390 = G__76402;
chunk__76359_76391 = G__76403;
count__76360_76392 = G__76404;
i__76361_76393 = G__76405;
continue;
}
} else
{var class_76406 = cljs.core.first.call(null,seq__76358_76400__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_76389,class_76406)))
{} else
{elem__$1.className = (((class_name_76389 === ""))?class_76406:[cljs.core.str(class_name_76389),cljs.core.str(" "),cljs.core.str(class_76406)].join(''));
}
{
var G__76407 = cljs.core.next.call(null,seq__76358_76400__$1);
var G__76408 = null;
var G__76409 = 0;
var G__76410 = 0;
seq__76358_76390 = G__76407;
chunk__76359_76391 = G__76408;
count__76360_76392 = G__76409;
i__76361_76393 = G__76410;
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
var G__76411__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__76362_76412 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__76363_76413 = null;var count__76364_76414 = 0;var i__76365_76415 = 0;while(true){
if((i__76365_76415 < count__76364_76414))
{var c_76416 = cljs.core._nth.call(null,chunk__76363_76413,i__76365_76415);add_class_BANG_.call(null,elem__$1,c_76416);
{
var G__76417 = seq__76362_76412;
var G__76418 = chunk__76363_76413;
var G__76419 = count__76364_76414;
var G__76420 = (i__76365_76415 + 1);
seq__76362_76412 = G__76417;
chunk__76363_76413 = G__76418;
count__76364_76414 = G__76419;
i__76365_76415 = G__76420;
continue;
}
} else
{var temp__4092__auto___76421 = cljs.core.seq.call(null,seq__76362_76412);if(temp__4092__auto___76421)
{var seq__76362_76422__$1 = temp__4092__auto___76421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76362_76422__$1))
{var c__8552__auto___76423 = cljs.core.chunk_first.call(null,seq__76362_76422__$1);{
var G__76424 = cljs.core.chunk_rest.call(null,seq__76362_76422__$1);
var G__76425 = c__8552__auto___76423;
var G__76426 = cljs.core.count.call(null,c__8552__auto___76423);
var G__76427 = 0;
seq__76362_76412 = G__76424;
chunk__76363_76413 = G__76425;
count__76364_76414 = G__76426;
i__76365_76415 = G__76427;
continue;
}
} else
{var c_76428 = cljs.core.first.call(null,seq__76362_76422__$1);add_class_BANG_.call(null,elem__$1,c_76428);
{
var G__76429 = cljs.core.next.call(null,seq__76362_76422__$1);
var G__76430 = null;
var G__76431 = 0;
var G__76432 = 0;
seq__76362_76412 = G__76429;
chunk__76363_76413 = G__76430;
count__76364_76414 = G__76431;
i__76365_76415 = G__76432;
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
var G__76411 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__76411__delegate.call(this,elem,classes,more_classes);};
G__76411.cljs$lang$maxFixedArity = 2;
G__76411.cljs$lang$applyTo = (function (arglist__76433){
var elem = cljs.core.first(arglist__76433);
arglist__76433 = cljs.core.next(arglist__76433);
var classes = cljs.core.first(arglist__76433);
var more_classes = cljs.core.rest(arglist__76433);
return G__76411__delegate(elem,classes,more_classes);
});
G__76411.cljs$core$IFn$_invoke$arity$variadic = G__76411__delegate;
return G__76411;
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
var G__76434 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__76434;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___76443 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___76443))
{var class_list_76444 = temp__4090__auto___76443;class_list_76444.remove(class$__$1);
} else
{var class_name_76445 = elem__$1.className;var new_class_name_76446 = dommy.attrs.remove_class_str.call(null,class_name_76445,class$__$1);if((class_name_76445 === new_class_name_76446))
{} else
{elem__$1.className = new_class_name_76446;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__76447__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__76439 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__76440 = null;var count__76441 = 0;var i__76442 = 0;while(true){
if((i__76442 < count__76441))
{var c = cljs.core._nth.call(null,chunk__76440,i__76442);remove_class_BANG_.call(null,elem__$1,c);
{
var G__76448 = seq__76439;
var G__76449 = chunk__76440;
var G__76450 = count__76441;
var G__76451 = (i__76442 + 1);
seq__76439 = G__76448;
chunk__76440 = G__76449;
count__76441 = G__76450;
i__76442 = G__76451;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__76439);if(temp__4092__auto__)
{var seq__76439__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76439__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__76439__$1);{
var G__76452 = cljs.core.chunk_rest.call(null,seq__76439__$1);
var G__76453 = c__8552__auto__;
var G__76454 = cljs.core.count.call(null,c__8552__auto__);
var G__76455 = 0;
seq__76439 = G__76452;
chunk__76440 = G__76453;
count__76441 = G__76454;
i__76442 = G__76455;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__76439__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__76456 = cljs.core.next.call(null,seq__76439__$1);
var G__76457 = null;
var G__76458 = 0;
var G__76459 = 0;
seq__76439 = G__76456;
chunk__76440 = G__76457;
count__76441 = G__76458;
i__76442 = G__76459;
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
var G__76447 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__76447__delegate.call(this,elem,class$,classes);};
G__76447.cljs$lang$maxFixedArity = 2;
G__76447.cljs$lang$applyTo = (function (arglist__76460){
var elem = cljs.core.first(arglist__76460);
arglist__76460 = cljs.core.next(arglist__76460);
var class$ = cljs.core.first(arglist__76460);
var classes = cljs.core.rest(arglist__76460);
return G__76447__delegate(elem,class$,classes);
});
G__76447.cljs$core$IFn$_invoke$arity$variadic = G__76447__delegate;
return G__76447;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___76461 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___76461))
{var class_list_76462 = temp__4090__auto___76461;class_list_76462.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__76465){var vec__76466 = p__76465;var k = cljs.core.nth.call(null,vec__76466,0,null);var v = cljs.core.nth.call(null,vec__76466,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__76473_76479 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__76474_76480 = null;var count__76475_76481 = 0;var i__76476_76482 = 0;while(true){
if((i__76476_76482 < count__76475_76481))
{var vec__76477_76483 = cljs.core._nth.call(null,chunk__76474_76480,i__76476_76482);var k_76484 = cljs.core.nth.call(null,vec__76477_76483,0,null);var v_76485 = cljs.core.nth.call(null,vec__76477_76483,1,null);(style[cljs.core.name.call(null,k_76484)] = v_76485);
{
var G__76486 = seq__76473_76479;
var G__76487 = chunk__76474_76480;
var G__76488 = count__76475_76481;
var G__76489 = (i__76476_76482 + 1);
seq__76473_76479 = G__76486;
chunk__76474_76480 = G__76487;
count__76475_76481 = G__76488;
i__76476_76482 = G__76489;
continue;
}
} else
{var temp__4092__auto___76490 = cljs.core.seq.call(null,seq__76473_76479);if(temp__4092__auto___76490)
{var seq__76473_76491__$1 = temp__4092__auto___76490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76473_76491__$1))
{var c__8552__auto___76492 = cljs.core.chunk_first.call(null,seq__76473_76491__$1);{
var G__76493 = cljs.core.chunk_rest.call(null,seq__76473_76491__$1);
var G__76494 = c__8552__auto___76492;
var G__76495 = cljs.core.count.call(null,c__8552__auto___76492);
var G__76496 = 0;
seq__76473_76479 = G__76493;
chunk__76474_76480 = G__76494;
count__76475_76481 = G__76495;
i__76476_76482 = G__76496;
continue;
}
} else
{var vec__76478_76497 = cljs.core.first.call(null,seq__76473_76491__$1);var k_76498 = cljs.core.nth.call(null,vec__76478_76497,0,null);var v_76499 = cljs.core.nth.call(null,vec__76478_76497,1,null);(style[cljs.core.name.call(null,k_76498)] = v_76499);
{
var G__76500 = cljs.core.next.call(null,seq__76473_76491__$1);
var G__76501 = null;
var G__76502 = 0;
var G__76503 = 0;
seq__76473_76479 = G__76500;
chunk__76474_76480 = G__76501;
count__76475_76481 = G__76502;
i__76476_76482 = G__76503;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__76504){
var elem = cljs.core.first(arglist__76504);
var kvs = cljs.core.rest(arglist__76504);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__76511_76517 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__76512_76518 = null;var count__76513_76519 = 0;var i__76514_76520 = 0;while(true){
if((i__76514_76520 < count__76513_76519))
{var vec__76515_76521 = cljs.core._nth.call(null,chunk__76512_76518,i__76514_76520);var k_76522 = cljs.core.nth.call(null,vec__76515_76521,0,null);var v_76523 = cljs.core.nth.call(null,vec__76515_76521,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_76522,[cljs.core.str(v_76523),cljs.core.str("px")].join(''));
{
var G__76524 = seq__76511_76517;
var G__76525 = chunk__76512_76518;
var G__76526 = count__76513_76519;
var G__76527 = (i__76514_76520 + 1);
seq__76511_76517 = G__76524;
chunk__76512_76518 = G__76525;
count__76513_76519 = G__76526;
i__76514_76520 = G__76527;
continue;
}
} else
{var temp__4092__auto___76528 = cljs.core.seq.call(null,seq__76511_76517);if(temp__4092__auto___76528)
{var seq__76511_76529__$1 = temp__4092__auto___76528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76511_76529__$1))
{var c__8552__auto___76530 = cljs.core.chunk_first.call(null,seq__76511_76529__$1);{
var G__76531 = cljs.core.chunk_rest.call(null,seq__76511_76529__$1);
var G__76532 = c__8552__auto___76530;
var G__76533 = cljs.core.count.call(null,c__8552__auto___76530);
var G__76534 = 0;
seq__76511_76517 = G__76531;
chunk__76512_76518 = G__76532;
count__76513_76519 = G__76533;
i__76514_76520 = G__76534;
continue;
}
} else
{var vec__76516_76535 = cljs.core.first.call(null,seq__76511_76529__$1);var k_76536 = cljs.core.nth.call(null,vec__76516_76535,0,null);var v_76537 = cljs.core.nth.call(null,vec__76516_76535,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_76536,[cljs.core.str(v_76537),cljs.core.str("px")].join(''));
{
var G__76538 = cljs.core.next.call(null,seq__76511_76529__$1);
var G__76539 = null;
var G__76540 = 0;
var G__76541 = 0;
seq__76511_76517 = G__76538;
chunk__76512_76518 = G__76539;
count__76513_76519 = G__76540;
i__76514_76520 = G__76541;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__76542){
var elem = cljs.core.first(arglist__76542);
var kvs = cljs.core.rest(arglist__76542);
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
{var G__76551 = dommy.template.__GT_node_like.call(null,elem);(G__76551[cljs.core.name.call(null,k)] = v);
return G__76551;
} else
{var G__76552 = dommy.template.__GT_node_like.call(null,elem);G__76552.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__76552;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__76559__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__76553_76560 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__76554_76561 = null;var count__76555_76562 = 0;var i__76556_76563 = 0;while(true){
if((i__76556_76563 < count__76555_76562))
{var vec__76557_76564 = cljs.core._nth.call(null,chunk__76554_76561,i__76556_76563);var k_76565__$1 = cljs.core.nth.call(null,vec__76557_76564,0,null);var v_76566__$1 = cljs.core.nth.call(null,vec__76557_76564,1,null);set_attr_BANG_.call(null,elem__$1,k_76565__$1,v_76566__$1);
{
var G__76567 = seq__76553_76560;
var G__76568 = chunk__76554_76561;
var G__76569 = count__76555_76562;
var G__76570 = (i__76556_76563 + 1);
seq__76553_76560 = G__76567;
chunk__76554_76561 = G__76568;
count__76555_76562 = G__76569;
i__76556_76563 = G__76570;
continue;
}
} else
{var temp__4092__auto___76571 = cljs.core.seq.call(null,seq__76553_76560);if(temp__4092__auto___76571)
{var seq__76553_76572__$1 = temp__4092__auto___76571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76553_76572__$1))
{var c__8552__auto___76573 = cljs.core.chunk_first.call(null,seq__76553_76572__$1);{
var G__76574 = cljs.core.chunk_rest.call(null,seq__76553_76572__$1);
var G__76575 = c__8552__auto___76573;
var G__76576 = cljs.core.count.call(null,c__8552__auto___76573);
var G__76577 = 0;
seq__76553_76560 = G__76574;
chunk__76554_76561 = G__76575;
count__76555_76562 = G__76576;
i__76556_76563 = G__76577;
continue;
}
} else
{var vec__76558_76578 = cljs.core.first.call(null,seq__76553_76572__$1);var k_76579__$1 = cljs.core.nth.call(null,vec__76558_76578,0,null);var v_76580__$1 = cljs.core.nth.call(null,vec__76558_76578,1,null);set_attr_BANG_.call(null,elem__$1,k_76579__$1,v_76580__$1);
{
var G__76581 = cljs.core.next.call(null,seq__76553_76572__$1);
var G__76582 = null;
var G__76583 = 0;
var G__76584 = 0;
seq__76553_76560 = G__76581;
chunk__76554_76561 = G__76582;
count__76555_76562 = G__76583;
i__76556_76563 = G__76584;
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
var G__76559 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__76559__delegate.call(this,elem,k,v,kvs);};
G__76559.cljs$lang$maxFixedArity = 3;
G__76559.cljs$lang$applyTo = (function (arglist__76585){
var elem = cljs.core.first(arglist__76585);
arglist__76585 = cljs.core.next(arglist__76585);
var k = cljs.core.first(arglist__76585);
arglist__76585 = cljs.core.next(arglist__76585);
var v = cljs.core.first(arglist__76585);
var kvs = cljs.core.rest(arglist__76585);
return G__76559__delegate(elem,k,v,kvs);
});
G__76559.cljs$core$IFn$_invoke$arity$variadic = G__76559__delegate;
return G__76559;
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
var G__76594__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__76590_76595 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__76591_76596 = null;var count__76592_76597 = 0;var i__76593_76598 = 0;while(true){
if((i__76593_76598 < count__76592_76597))
{var k_76599__$1 = cljs.core._nth.call(null,chunk__76591_76596,i__76593_76598);remove_attr_BANG_.call(null,elem__$1,k_76599__$1);
{
var G__76600 = seq__76590_76595;
var G__76601 = chunk__76591_76596;
var G__76602 = count__76592_76597;
var G__76603 = (i__76593_76598 + 1);
seq__76590_76595 = G__76600;
chunk__76591_76596 = G__76601;
count__76592_76597 = G__76602;
i__76593_76598 = G__76603;
continue;
}
} else
{var temp__4092__auto___76604 = cljs.core.seq.call(null,seq__76590_76595);if(temp__4092__auto___76604)
{var seq__76590_76605__$1 = temp__4092__auto___76604;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76590_76605__$1))
{var c__8552__auto___76606 = cljs.core.chunk_first.call(null,seq__76590_76605__$1);{
var G__76607 = cljs.core.chunk_rest.call(null,seq__76590_76605__$1);
var G__76608 = c__8552__auto___76606;
var G__76609 = cljs.core.count.call(null,c__8552__auto___76606);
var G__76610 = 0;
seq__76590_76595 = G__76607;
chunk__76591_76596 = G__76608;
count__76592_76597 = G__76609;
i__76593_76598 = G__76610;
continue;
}
} else
{var k_76611__$1 = cljs.core.first.call(null,seq__76590_76605__$1);remove_attr_BANG_.call(null,elem__$1,k_76611__$1);
{
var G__76612 = cljs.core.next.call(null,seq__76590_76605__$1);
var G__76613 = null;
var G__76614 = 0;
var G__76615 = 0;
seq__76590_76595 = G__76612;
chunk__76591_76596 = G__76613;
count__76592_76597 = G__76614;
i__76593_76598 = G__76615;
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
var G__76594 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__76594__delegate.call(this,elem,k,ks);};
G__76594.cljs$lang$maxFixedArity = 2;
G__76594.cljs$lang$applyTo = (function (arglist__76616){
var elem = cljs.core.first(arglist__76616);
arglist__76616 = cljs.core.next(arglist__76616);
var k = cljs.core.first(arglist__76616);
var ks = cljs.core.rest(arglist__76616);
return G__76594__delegate(elem,k,ks);
});
G__76594.cljs$core$IFn$_invoke$arity$variadic = G__76594__delegate;
return G__76594;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__76618 = dommy.template.__GT_node_like.call(null,elem);G__76618.style.display = ((show_QMARK_)?"":"none");
return G__76618;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__76620 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__76620,false);
return G__76620;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__76622 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__76622,true);
return G__76622;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__76624 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__76624["constructor"] = Object);
return G__76624;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
