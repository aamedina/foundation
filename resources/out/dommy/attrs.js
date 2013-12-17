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
var G__331413 = (i + class$.length);
start_from = G__331413;
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
{var temp__4090__auto___331438 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___331438))
{var class_list_331439 = temp__4090__auto___331438;var seq__331426_331440 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__331427_331441 = null;var count__331428_331442 = 0;var i__331429_331443 = 0;while(true){
if((i__331429_331443 < count__331428_331442))
{var class_331444 = cljs.core._nth.call(null,chunk__331427_331441,i__331429_331443);class_list_331439.add(class_331444);
{
var G__331445 = seq__331426_331440;
var G__331446 = chunk__331427_331441;
var G__331447 = count__331428_331442;
var G__331448 = (i__331429_331443 + 1);
seq__331426_331440 = G__331445;
chunk__331427_331441 = G__331446;
count__331428_331442 = G__331447;
i__331429_331443 = G__331448;
continue;
}
} else
{var temp__4092__auto___331449 = cljs.core.seq.call(null,seq__331426_331440);if(temp__4092__auto___331449)
{var seq__331426_331450__$1 = temp__4092__auto___331449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331426_331450__$1))
{var c__14547__auto___331451 = cljs.core.chunk_first.call(null,seq__331426_331450__$1);{
var G__331452 = cljs.core.chunk_rest.call(null,seq__331426_331450__$1);
var G__331453 = c__14547__auto___331451;
var G__331454 = cljs.core.count.call(null,c__14547__auto___331451);
var G__331455 = 0;
seq__331426_331440 = G__331452;
chunk__331427_331441 = G__331453;
count__331428_331442 = G__331454;
i__331429_331443 = G__331455;
continue;
}
} else
{var class_331456 = cljs.core.first.call(null,seq__331426_331450__$1);class_list_331439.add(class_331456);
{
var G__331457 = cljs.core.next.call(null,seq__331426_331450__$1);
var G__331458 = null;
var G__331459 = 0;
var G__331460 = 0;
seq__331426_331440 = G__331457;
chunk__331427_331441 = G__331458;
count__331428_331442 = G__331459;
i__331429_331443 = G__331460;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_331461 = elem__$1.className;var seq__331430_331462 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__331431_331463 = null;var count__331432_331464 = 0;var i__331433_331465 = 0;while(true){
if((i__331433_331465 < count__331432_331464))
{var class_331466 = cljs.core._nth.call(null,chunk__331431_331463,i__331433_331465);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_331461,class_331466)))
{} else
{elem__$1.className = (((class_name_331461 === ""))?class_331466:[cljs.core.str(class_name_331461),cljs.core.str(" "),cljs.core.str(class_331466)].join(''));
}
{
var G__331467 = seq__331430_331462;
var G__331468 = chunk__331431_331463;
var G__331469 = count__331432_331464;
var G__331470 = (i__331433_331465 + 1);
seq__331430_331462 = G__331467;
chunk__331431_331463 = G__331468;
count__331432_331464 = G__331469;
i__331433_331465 = G__331470;
continue;
}
} else
{var temp__4092__auto___331471 = cljs.core.seq.call(null,seq__331430_331462);if(temp__4092__auto___331471)
{var seq__331430_331472__$1 = temp__4092__auto___331471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331430_331472__$1))
{var c__14547__auto___331473 = cljs.core.chunk_first.call(null,seq__331430_331472__$1);{
var G__331474 = cljs.core.chunk_rest.call(null,seq__331430_331472__$1);
var G__331475 = c__14547__auto___331473;
var G__331476 = cljs.core.count.call(null,c__14547__auto___331473);
var G__331477 = 0;
seq__331430_331462 = G__331474;
chunk__331431_331463 = G__331475;
count__331432_331464 = G__331476;
i__331433_331465 = G__331477;
continue;
}
} else
{var class_331478 = cljs.core.first.call(null,seq__331430_331472__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_331461,class_331478)))
{} else
{elem__$1.className = (((class_name_331461 === ""))?class_331478:[cljs.core.str(class_name_331461),cljs.core.str(" "),cljs.core.str(class_331478)].join(''));
}
{
var G__331479 = cljs.core.next.call(null,seq__331430_331472__$1);
var G__331480 = null;
var G__331481 = 0;
var G__331482 = 0;
seq__331430_331462 = G__331479;
chunk__331431_331463 = G__331480;
count__331432_331464 = G__331481;
i__331433_331465 = G__331482;
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
var G__331483__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__331434_331484 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__331435_331485 = null;var count__331436_331486 = 0;var i__331437_331487 = 0;while(true){
if((i__331437_331487 < count__331436_331486))
{var c_331488 = cljs.core._nth.call(null,chunk__331435_331485,i__331437_331487);add_class_BANG_.call(null,elem__$1,c_331488);
{
var G__331489 = seq__331434_331484;
var G__331490 = chunk__331435_331485;
var G__331491 = count__331436_331486;
var G__331492 = (i__331437_331487 + 1);
seq__331434_331484 = G__331489;
chunk__331435_331485 = G__331490;
count__331436_331486 = G__331491;
i__331437_331487 = G__331492;
continue;
}
} else
{var temp__4092__auto___331493 = cljs.core.seq.call(null,seq__331434_331484);if(temp__4092__auto___331493)
{var seq__331434_331494__$1 = temp__4092__auto___331493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331434_331494__$1))
{var c__14547__auto___331495 = cljs.core.chunk_first.call(null,seq__331434_331494__$1);{
var G__331496 = cljs.core.chunk_rest.call(null,seq__331434_331494__$1);
var G__331497 = c__14547__auto___331495;
var G__331498 = cljs.core.count.call(null,c__14547__auto___331495);
var G__331499 = 0;
seq__331434_331484 = G__331496;
chunk__331435_331485 = G__331497;
count__331436_331486 = G__331498;
i__331437_331487 = G__331499;
continue;
}
} else
{var c_331500 = cljs.core.first.call(null,seq__331434_331494__$1);add_class_BANG_.call(null,elem__$1,c_331500);
{
var G__331501 = cljs.core.next.call(null,seq__331434_331494__$1);
var G__331502 = null;
var G__331503 = 0;
var G__331504 = 0;
seq__331434_331484 = G__331501;
chunk__331435_331485 = G__331502;
count__331436_331486 = G__331503;
i__331437_331487 = G__331504;
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
var G__331483 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__331483__delegate.call(this,elem,classes,more_classes);};
G__331483.cljs$lang$maxFixedArity = 2;
G__331483.cljs$lang$applyTo = (function (arglist__331505){
var elem = cljs.core.first(arglist__331505);
arglist__331505 = cljs.core.next(arglist__331505);
var classes = cljs.core.first(arglist__331505);
var more_classes = cljs.core.rest(arglist__331505);
return G__331483__delegate(elem,classes,more_classes);
});
G__331483.cljs$core$IFn$_invoke$arity$variadic = G__331483__delegate;
return G__331483;
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
var G__331506 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__331506;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___331515 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___331515))
{var class_list_331516 = temp__4090__auto___331515;class_list_331516.remove(class$__$1);
} else
{var class_name_331517 = elem__$1.className;var new_class_name_331518 = dommy.attrs.remove_class_str.call(null,class_name_331517,class$__$1);if((class_name_331517 === new_class_name_331518))
{} else
{elem__$1.className = new_class_name_331518;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__331519__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__331511 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__331512 = null;var count__331513 = 0;var i__331514 = 0;while(true){
if((i__331514 < count__331513))
{var c = cljs.core._nth.call(null,chunk__331512,i__331514);remove_class_BANG_.call(null,elem__$1,c);
{
var G__331520 = seq__331511;
var G__331521 = chunk__331512;
var G__331522 = count__331513;
var G__331523 = (i__331514 + 1);
seq__331511 = G__331520;
chunk__331512 = G__331521;
count__331513 = G__331522;
i__331514 = G__331523;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__331511);if(temp__4092__auto__)
{var seq__331511__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331511__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__331511__$1);{
var G__331524 = cljs.core.chunk_rest.call(null,seq__331511__$1);
var G__331525 = c__14547__auto__;
var G__331526 = cljs.core.count.call(null,c__14547__auto__);
var G__331527 = 0;
seq__331511 = G__331524;
chunk__331512 = G__331525;
count__331513 = G__331526;
i__331514 = G__331527;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__331511__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__331528 = cljs.core.next.call(null,seq__331511__$1);
var G__331529 = null;
var G__331530 = 0;
var G__331531 = 0;
seq__331511 = G__331528;
chunk__331512 = G__331529;
count__331513 = G__331530;
i__331514 = G__331531;
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
var G__331519 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__331519__delegate.call(this,elem,class$,classes);};
G__331519.cljs$lang$maxFixedArity = 2;
G__331519.cljs$lang$applyTo = (function (arglist__331532){
var elem = cljs.core.first(arglist__331532);
arglist__331532 = cljs.core.next(arglist__331532);
var class$ = cljs.core.first(arglist__331532);
var classes = cljs.core.rest(arglist__331532);
return G__331519__delegate(elem,class$,classes);
});
G__331519.cljs$core$IFn$_invoke$arity$variadic = G__331519__delegate;
return G__331519;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___331533 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___331533))
{var class_list_331534 = temp__4090__auto___331533;class_list_331534.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__331537){var vec__331538 = p__331537;var k = cljs.core.nth.call(null,vec__331538,0,null);var v = cljs.core.nth.call(null,vec__331538,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__331545_331551 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__331546_331552 = null;var count__331547_331553 = 0;var i__331548_331554 = 0;while(true){
if((i__331548_331554 < count__331547_331553))
{var vec__331549_331555 = cljs.core._nth.call(null,chunk__331546_331552,i__331548_331554);var k_331556 = cljs.core.nth.call(null,vec__331549_331555,0,null);var v_331557 = cljs.core.nth.call(null,vec__331549_331555,1,null);(style[cljs.core.name.call(null,k_331556)] = v_331557);
{
var G__331558 = seq__331545_331551;
var G__331559 = chunk__331546_331552;
var G__331560 = count__331547_331553;
var G__331561 = (i__331548_331554 + 1);
seq__331545_331551 = G__331558;
chunk__331546_331552 = G__331559;
count__331547_331553 = G__331560;
i__331548_331554 = G__331561;
continue;
}
} else
{var temp__4092__auto___331562 = cljs.core.seq.call(null,seq__331545_331551);if(temp__4092__auto___331562)
{var seq__331545_331563__$1 = temp__4092__auto___331562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331545_331563__$1))
{var c__14547__auto___331564 = cljs.core.chunk_first.call(null,seq__331545_331563__$1);{
var G__331565 = cljs.core.chunk_rest.call(null,seq__331545_331563__$1);
var G__331566 = c__14547__auto___331564;
var G__331567 = cljs.core.count.call(null,c__14547__auto___331564);
var G__331568 = 0;
seq__331545_331551 = G__331565;
chunk__331546_331552 = G__331566;
count__331547_331553 = G__331567;
i__331548_331554 = G__331568;
continue;
}
} else
{var vec__331550_331569 = cljs.core.first.call(null,seq__331545_331563__$1);var k_331570 = cljs.core.nth.call(null,vec__331550_331569,0,null);var v_331571 = cljs.core.nth.call(null,vec__331550_331569,1,null);(style[cljs.core.name.call(null,k_331570)] = v_331571);
{
var G__331572 = cljs.core.next.call(null,seq__331545_331563__$1);
var G__331573 = null;
var G__331574 = 0;
var G__331575 = 0;
seq__331545_331551 = G__331572;
chunk__331546_331552 = G__331573;
count__331547_331553 = G__331574;
i__331548_331554 = G__331575;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__331576){
var elem = cljs.core.first(arglist__331576);
var kvs = cljs.core.rest(arglist__331576);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__331583_331589 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__331584_331590 = null;var count__331585_331591 = 0;var i__331586_331592 = 0;while(true){
if((i__331586_331592 < count__331585_331591))
{var vec__331587_331593 = cljs.core._nth.call(null,chunk__331584_331590,i__331586_331592);var k_331594 = cljs.core.nth.call(null,vec__331587_331593,0,null);var v_331595 = cljs.core.nth.call(null,vec__331587_331593,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_331594,[cljs.core.str(v_331595),cljs.core.str("px")].join(''));
{
var G__331596 = seq__331583_331589;
var G__331597 = chunk__331584_331590;
var G__331598 = count__331585_331591;
var G__331599 = (i__331586_331592 + 1);
seq__331583_331589 = G__331596;
chunk__331584_331590 = G__331597;
count__331585_331591 = G__331598;
i__331586_331592 = G__331599;
continue;
}
} else
{var temp__4092__auto___331600 = cljs.core.seq.call(null,seq__331583_331589);if(temp__4092__auto___331600)
{var seq__331583_331601__$1 = temp__4092__auto___331600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331583_331601__$1))
{var c__14547__auto___331602 = cljs.core.chunk_first.call(null,seq__331583_331601__$1);{
var G__331603 = cljs.core.chunk_rest.call(null,seq__331583_331601__$1);
var G__331604 = c__14547__auto___331602;
var G__331605 = cljs.core.count.call(null,c__14547__auto___331602);
var G__331606 = 0;
seq__331583_331589 = G__331603;
chunk__331584_331590 = G__331604;
count__331585_331591 = G__331605;
i__331586_331592 = G__331606;
continue;
}
} else
{var vec__331588_331607 = cljs.core.first.call(null,seq__331583_331601__$1);var k_331608 = cljs.core.nth.call(null,vec__331588_331607,0,null);var v_331609 = cljs.core.nth.call(null,vec__331588_331607,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_331608,[cljs.core.str(v_331609),cljs.core.str("px")].join(''));
{
var G__331610 = cljs.core.next.call(null,seq__331583_331601__$1);
var G__331611 = null;
var G__331612 = 0;
var G__331613 = 0;
seq__331583_331589 = G__331610;
chunk__331584_331590 = G__331611;
count__331585_331591 = G__331612;
i__331586_331592 = G__331613;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__331614){
var elem = cljs.core.first(arglist__331614);
var kvs = cljs.core.rest(arglist__331614);
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
{var G__331623 = dommy.template.__GT_node_like.call(null,elem);(G__331623[cljs.core.name.call(null,k)] = v);
return G__331623;
} else
{var G__331624 = dommy.template.__GT_node_like.call(null,elem);G__331624.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__331624;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__331631__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__331625_331632 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__331626_331633 = null;var count__331627_331634 = 0;var i__331628_331635 = 0;while(true){
if((i__331628_331635 < count__331627_331634))
{var vec__331629_331636 = cljs.core._nth.call(null,chunk__331626_331633,i__331628_331635);var k_331637__$1 = cljs.core.nth.call(null,vec__331629_331636,0,null);var v_331638__$1 = cljs.core.nth.call(null,vec__331629_331636,1,null);set_attr_BANG_.call(null,elem__$1,k_331637__$1,v_331638__$1);
{
var G__331639 = seq__331625_331632;
var G__331640 = chunk__331626_331633;
var G__331641 = count__331627_331634;
var G__331642 = (i__331628_331635 + 1);
seq__331625_331632 = G__331639;
chunk__331626_331633 = G__331640;
count__331627_331634 = G__331641;
i__331628_331635 = G__331642;
continue;
}
} else
{var temp__4092__auto___331643 = cljs.core.seq.call(null,seq__331625_331632);if(temp__4092__auto___331643)
{var seq__331625_331644__$1 = temp__4092__auto___331643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331625_331644__$1))
{var c__14547__auto___331645 = cljs.core.chunk_first.call(null,seq__331625_331644__$1);{
var G__331646 = cljs.core.chunk_rest.call(null,seq__331625_331644__$1);
var G__331647 = c__14547__auto___331645;
var G__331648 = cljs.core.count.call(null,c__14547__auto___331645);
var G__331649 = 0;
seq__331625_331632 = G__331646;
chunk__331626_331633 = G__331647;
count__331627_331634 = G__331648;
i__331628_331635 = G__331649;
continue;
}
} else
{var vec__331630_331650 = cljs.core.first.call(null,seq__331625_331644__$1);var k_331651__$1 = cljs.core.nth.call(null,vec__331630_331650,0,null);var v_331652__$1 = cljs.core.nth.call(null,vec__331630_331650,1,null);set_attr_BANG_.call(null,elem__$1,k_331651__$1,v_331652__$1);
{
var G__331653 = cljs.core.next.call(null,seq__331625_331644__$1);
var G__331654 = null;
var G__331655 = 0;
var G__331656 = 0;
seq__331625_331632 = G__331653;
chunk__331626_331633 = G__331654;
count__331627_331634 = G__331655;
i__331628_331635 = G__331656;
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
var G__331631 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__331631__delegate.call(this,elem,k,v,kvs);};
G__331631.cljs$lang$maxFixedArity = 3;
G__331631.cljs$lang$applyTo = (function (arglist__331657){
var elem = cljs.core.first(arglist__331657);
arglist__331657 = cljs.core.next(arglist__331657);
var k = cljs.core.first(arglist__331657);
arglist__331657 = cljs.core.next(arglist__331657);
var v = cljs.core.first(arglist__331657);
var kvs = cljs.core.rest(arglist__331657);
return G__331631__delegate(elem,k,v,kvs);
});
G__331631.cljs$core$IFn$_invoke$arity$variadic = G__331631__delegate;
return G__331631;
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
var G__331666__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__331662_331667 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__331663_331668 = null;var count__331664_331669 = 0;var i__331665_331670 = 0;while(true){
if((i__331665_331670 < count__331664_331669))
{var k_331671__$1 = cljs.core._nth.call(null,chunk__331663_331668,i__331665_331670);remove_attr_BANG_.call(null,elem__$1,k_331671__$1);
{
var G__331672 = seq__331662_331667;
var G__331673 = chunk__331663_331668;
var G__331674 = count__331664_331669;
var G__331675 = (i__331665_331670 + 1);
seq__331662_331667 = G__331672;
chunk__331663_331668 = G__331673;
count__331664_331669 = G__331674;
i__331665_331670 = G__331675;
continue;
}
} else
{var temp__4092__auto___331676 = cljs.core.seq.call(null,seq__331662_331667);if(temp__4092__auto___331676)
{var seq__331662_331677__$1 = temp__4092__auto___331676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331662_331677__$1))
{var c__14547__auto___331678 = cljs.core.chunk_first.call(null,seq__331662_331677__$1);{
var G__331679 = cljs.core.chunk_rest.call(null,seq__331662_331677__$1);
var G__331680 = c__14547__auto___331678;
var G__331681 = cljs.core.count.call(null,c__14547__auto___331678);
var G__331682 = 0;
seq__331662_331667 = G__331679;
chunk__331663_331668 = G__331680;
count__331664_331669 = G__331681;
i__331665_331670 = G__331682;
continue;
}
} else
{var k_331683__$1 = cljs.core.first.call(null,seq__331662_331677__$1);remove_attr_BANG_.call(null,elem__$1,k_331683__$1);
{
var G__331684 = cljs.core.next.call(null,seq__331662_331677__$1);
var G__331685 = null;
var G__331686 = 0;
var G__331687 = 0;
seq__331662_331667 = G__331684;
chunk__331663_331668 = G__331685;
count__331664_331669 = G__331686;
i__331665_331670 = G__331687;
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
var G__331666 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__331666__delegate.call(this,elem,k,ks);};
G__331666.cljs$lang$maxFixedArity = 2;
G__331666.cljs$lang$applyTo = (function (arglist__331688){
var elem = cljs.core.first(arglist__331688);
arglist__331688 = cljs.core.next(arglist__331688);
var k = cljs.core.first(arglist__331688);
var ks = cljs.core.rest(arglist__331688);
return G__331666__delegate(elem,k,ks);
});
G__331666.cljs$core$IFn$_invoke$arity$variadic = G__331666__delegate;
return G__331666;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__331690 = dommy.template.__GT_node_like.call(null,elem);G__331690.style.display = ((show_QMARK_)?"":"none");
return G__331690;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__331692 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__331692,false);
return G__331692;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__331694 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__331694,true);
return G__331694;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__331696 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__331696["constructor"] = Object);
return G__331696;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map