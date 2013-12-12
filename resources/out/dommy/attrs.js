// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13809__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13809__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13809__auto__;
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
var G__33435 = (i + class$.length);
start_from = G__33435;
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
{var temp__4090__auto___33460 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___33460))
{var class_list_33461 = temp__4090__auto___33460;var seq__33448_33462 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__33449_33463 = null;var count__33450_33464 = 0;var i__33451_33465 = 0;while(true){
if((i__33451_33465 < count__33450_33464))
{var class_33466 = cljs.core._nth.call(null,chunk__33449_33463,i__33451_33465);class_list_33461.add(class_33466);
{
var G__33467 = seq__33448_33462;
var G__33468 = chunk__33449_33463;
var G__33469 = count__33450_33464;
var G__33470 = (i__33451_33465 + 1);
seq__33448_33462 = G__33467;
chunk__33449_33463 = G__33468;
count__33450_33464 = G__33469;
i__33451_33465 = G__33470;
continue;
}
} else
{var temp__4092__auto___33471 = cljs.core.seq.call(null,seq__33448_33462);if(temp__4092__auto___33471)
{var seq__33448_33472__$1 = temp__4092__auto___33471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33448_33472__$1))
{var c__14545__auto___33473 = cljs.core.chunk_first.call(null,seq__33448_33472__$1);{
var G__33474 = cljs.core.chunk_rest.call(null,seq__33448_33472__$1);
var G__33475 = c__14545__auto___33473;
var G__33476 = cljs.core.count.call(null,c__14545__auto___33473);
var G__33477 = 0;
seq__33448_33462 = G__33474;
chunk__33449_33463 = G__33475;
count__33450_33464 = G__33476;
i__33451_33465 = G__33477;
continue;
}
} else
{var class_33478 = cljs.core.first.call(null,seq__33448_33472__$1);class_list_33461.add(class_33478);
{
var G__33479 = cljs.core.next.call(null,seq__33448_33472__$1);
var G__33480 = null;
var G__33481 = 0;
var G__33482 = 0;
seq__33448_33462 = G__33479;
chunk__33449_33463 = G__33480;
count__33450_33464 = G__33481;
i__33451_33465 = G__33482;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_33483 = elem__$1.className;var seq__33452_33484 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__33453_33485 = null;var count__33454_33486 = 0;var i__33455_33487 = 0;while(true){
if((i__33455_33487 < count__33454_33486))
{var class_33488 = cljs.core._nth.call(null,chunk__33453_33485,i__33455_33487);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_33483,class_33488)))
{} else
{elem__$1.className = (((class_name_33483 === ""))?class_33488:[cljs.core.str(class_name_33483),cljs.core.str(" "),cljs.core.str(class_33488)].join(''));
}
{
var G__33489 = seq__33452_33484;
var G__33490 = chunk__33453_33485;
var G__33491 = count__33454_33486;
var G__33492 = (i__33455_33487 + 1);
seq__33452_33484 = G__33489;
chunk__33453_33485 = G__33490;
count__33454_33486 = G__33491;
i__33455_33487 = G__33492;
continue;
}
} else
{var temp__4092__auto___33493 = cljs.core.seq.call(null,seq__33452_33484);if(temp__4092__auto___33493)
{var seq__33452_33494__$1 = temp__4092__auto___33493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33452_33494__$1))
{var c__14545__auto___33495 = cljs.core.chunk_first.call(null,seq__33452_33494__$1);{
var G__33496 = cljs.core.chunk_rest.call(null,seq__33452_33494__$1);
var G__33497 = c__14545__auto___33495;
var G__33498 = cljs.core.count.call(null,c__14545__auto___33495);
var G__33499 = 0;
seq__33452_33484 = G__33496;
chunk__33453_33485 = G__33497;
count__33454_33486 = G__33498;
i__33455_33487 = G__33499;
continue;
}
} else
{var class_33500 = cljs.core.first.call(null,seq__33452_33494__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_33483,class_33500)))
{} else
{elem__$1.className = (((class_name_33483 === ""))?class_33500:[cljs.core.str(class_name_33483),cljs.core.str(" "),cljs.core.str(class_33500)].join(''));
}
{
var G__33501 = cljs.core.next.call(null,seq__33452_33494__$1);
var G__33502 = null;
var G__33503 = 0;
var G__33504 = 0;
seq__33452_33484 = G__33501;
chunk__33453_33485 = G__33502;
count__33454_33486 = G__33503;
i__33455_33487 = G__33504;
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
var G__33505__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33456_33506 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__33457_33507 = null;var count__33458_33508 = 0;var i__33459_33509 = 0;while(true){
if((i__33459_33509 < count__33458_33508))
{var c_33510 = cljs.core._nth.call(null,chunk__33457_33507,i__33459_33509);add_class_BANG_.call(null,elem__$1,c_33510);
{
var G__33511 = seq__33456_33506;
var G__33512 = chunk__33457_33507;
var G__33513 = count__33458_33508;
var G__33514 = (i__33459_33509 + 1);
seq__33456_33506 = G__33511;
chunk__33457_33507 = G__33512;
count__33458_33508 = G__33513;
i__33459_33509 = G__33514;
continue;
}
} else
{var temp__4092__auto___33515 = cljs.core.seq.call(null,seq__33456_33506);if(temp__4092__auto___33515)
{var seq__33456_33516__$1 = temp__4092__auto___33515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33456_33516__$1))
{var c__14545__auto___33517 = cljs.core.chunk_first.call(null,seq__33456_33516__$1);{
var G__33518 = cljs.core.chunk_rest.call(null,seq__33456_33516__$1);
var G__33519 = c__14545__auto___33517;
var G__33520 = cljs.core.count.call(null,c__14545__auto___33517);
var G__33521 = 0;
seq__33456_33506 = G__33518;
chunk__33457_33507 = G__33519;
count__33458_33508 = G__33520;
i__33459_33509 = G__33521;
continue;
}
} else
{var c_33522 = cljs.core.first.call(null,seq__33456_33516__$1);add_class_BANG_.call(null,elem__$1,c_33522);
{
var G__33523 = cljs.core.next.call(null,seq__33456_33516__$1);
var G__33524 = null;
var G__33525 = 0;
var G__33526 = 0;
seq__33456_33506 = G__33523;
chunk__33457_33507 = G__33524;
count__33458_33508 = G__33525;
i__33459_33509 = G__33526;
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
var G__33505 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33505__delegate.call(this,elem,classes,more_classes);};
G__33505.cljs$lang$maxFixedArity = 2;
G__33505.cljs$lang$applyTo = (function (arglist__33527){
var elem = cljs.core.first(arglist__33527);
arglist__33527 = cljs.core.next(arglist__33527);
var classes = cljs.core.first(arglist__33527);
var more_classes = cljs.core.rest(arglist__33527);
return G__33505__delegate(elem,classes,more_classes);
});
G__33505.cljs$core$IFn$_invoke$arity$variadic = G__33505__delegate;
return G__33505;
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
var G__33528 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__33528;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___33537 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___33537))
{var class_list_33538 = temp__4090__auto___33537;class_list_33538.remove(class$__$1);
} else
{var class_name_33539 = elem__$1.className;var new_class_name_33540 = dommy.attrs.remove_class_str.call(null,class_name_33539,class$__$1);if((class_name_33539 === new_class_name_33540))
{} else
{elem__$1.className = new_class_name_33540;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__33541__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33533 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__33534 = null;var count__33535 = 0;var i__33536 = 0;while(true){
if((i__33536 < count__33535))
{var c = cljs.core._nth.call(null,chunk__33534,i__33536);remove_class_BANG_.call(null,elem__$1,c);
{
var G__33542 = seq__33533;
var G__33543 = chunk__33534;
var G__33544 = count__33535;
var G__33545 = (i__33536 + 1);
seq__33533 = G__33542;
chunk__33534 = G__33543;
count__33535 = G__33544;
i__33536 = G__33545;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33533);if(temp__4092__auto__)
{var seq__33533__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33533__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__33533__$1);{
var G__33546 = cljs.core.chunk_rest.call(null,seq__33533__$1);
var G__33547 = c__14545__auto__;
var G__33548 = cljs.core.count.call(null,c__14545__auto__);
var G__33549 = 0;
seq__33533 = G__33546;
chunk__33534 = G__33547;
count__33535 = G__33548;
i__33536 = G__33549;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__33533__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__33550 = cljs.core.next.call(null,seq__33533__$1);
var G__33551 = null;
var G__33552 = 0;
var G__33553 = 0;
seq__33533 = G__33550;
chunk__33534 = G__33551;
count__33535 = G__33552;
i__33536 = G__33553;
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
var G__33541 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33541__delegate.call(this,elem,class$,classes);};
G__33541.cljs$lang$maxFixedArity = 2;
G__33541.cljs$lang$applyTo = (function (arglist__33554){
var elem = cljs.core.first(arglist__33554);
arglist__33554 = cljs.core.next(arglist__33554);
var class$ = cljs.core.first(arglist__33554);
var classes = cljs.core.rest(arglist__33554);
return G__33541__delegate(elem,class$,classes);
});
G__33541.cljs$core$IFn$_invoke$arity$variadic = G__33541__delegate;
return G__33541;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___33555 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___33555))
{var class_list_33556 = temp__4090__auto___33555;class_list_33556.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__33559){var vec__33560 = p__33559;var k = cljs.core.nth.call(null,vec__33560,0,null);var v = cljs.core.nth.call(null,vec__33560,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__33567_33573 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__33568_33574 = null;var count__33569_33575 = 0;var i__33570_33576 = 0;while(true){
if((i__33570_33576 < count__33569_33575))
{var vec__33571_33577 = cljs.core._nth.call(null,chunk__33568_33574,i__33570_33576);var k_33578 = cljs.core.nth.call(null,vec__33571_33577,0,null);var v_33579 = cljs.core.nth.call(null,vec__33571_33577,1,null);(style[cljs.core.name.call(null,k_33578)] = v_33579);
{
var G__33580 = seq__33567_33573;
var G__33581 = chunk__33568_33574;
var G__33582 = count__33569_33575;
var G__33583 = (i__33570_33576 + 1);
seq__33567_33573 = G__33580;
chunk__33568_33574 = G__33581;
count__33569_33575 = G__33582;
i__33570_33576 = G__33583;
continue;
}
} else
{var temp__4092__auto___33584 = cljs.core.seq.call(null,seq__33567_33573);if(temp__4092__auto___33584)
{var seq__33567_33585__$1 = temp__4092__auto___33584;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33567_33585__$1))
{var c__14545__auto___33586 = cljs.core.chunk_first.call(null,seq__33567_33585__$1);{
var G__33587 = cljs.core.chunk_rest.call(null,seq__33567_33585__$1);
var G__33588 = c__14545__auto___33586;
var G__33589 = cljs.core.count.call(null,c__14545__auto___33586);
var G__33590 = 0;
seq__33567_33573 = G__33587;
chunk__33568_33574 = G__33588;
count__33569_33575 = G__33589;
i__33570_33576 = G__33590;
continue;
}
} else
{var vec__33572_33591 = cljs.core.first.call(null,seq__33567_33585__$1);var k_33592 = cljs.core.nth.call(null,vec__33572_33591,0,null);var v_33593 = cljs.core.nth.call(null,vec__33572_33591,1,null);(style[cljs.core.name.call(null,k_33592)] = v_33593);
{
var G__33594 = cljs.core.next.call(null,seq__33567_33585__$1);
var G__33595 = null;
var G__33596 = 0;
var G__33597 = 0;
seq__33567_33573 = G__33594;
chunk__33568_33574 = G__33595;
count__33569_33575 = G__33596;
i__33570_33576 = G__33597;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33598){
var elem = cljs.core.first(arglist__33598);
var kvs = cljs.core.rest(arglist__33598);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33605_33611 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__33606_33612 = null;var count__33607_33613 = 0;var i__33608_33614 = 0;while(true){
if((i__33608_33614 < count__33607_33613))
{var vec__33609_33615 = cljs.core._nth.call(null,chunk__33606_33612,i__33608_33614);var k_33616 = cljs.core.nth.call(null,vec__33609_33615,0,null);var v_33617 = cljs.core.nth.call(null,vec__33609_33615,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_33616,[cljs.core.str(v_33617),cljs.core.str("px")].join(''));
{
var G__33618 = seq__33605_33611;
var G__33619 = chunk__33606_33612;
var G__33620 = count__33607_33613;
var G__33621 = (i__33608_33614 + 1);
seq__33605_33611 = G__33618;
chunk__33606_33612 = G__33619;
count__33607_33613 = G__33620;
i__33608_33614 = G__33621;
continue;
}
} else
{var temp__4092__auto___33622 = cljs.core.seq.call(null,seq__33605_33611);if(temp__4092__auto___33622)
{var seq__33605_33623__$1 = temp__4092__auto___33622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33605_33623__$1))
{var c__14545__auto___33624 = cljs.core.chunk_first.call(null,seq__33605_33623__$1);{
var G__33625 = cljs.core.chunk_rest.call(null,seq__33605_33623__$1);
var G__33626 = c__14545__auto___33624;
var G__33627 = cljs.core.count.call(null,c__14545__auto___33624);
var G__33628 = 0;
seq__33605_33611 = G__33625;
chunk__33606_33612 = G__33626;
count__33607_33613 = G__33627;
i__33608_33614 = G__33628;
continue;
}
} else
{var vec__33610_33629 = cljs.core.first.call(null,seq__33605_33623__$1);var k_33630 = cljs.core.nth.call(null,vec__33610_33629,0,null);var v_33631 = cljs.core.nth.call(null,vec__33610_33629,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_33630,[cljs.core.str(v_33631),cljs.core.str("px")].join(''));
{
var G__33632 = cljs.core.next.call(null,seq__33605_33623__$1);
var G__33633 = null;
var G__33634 = 0;
var G__33635 = 0;
seq__33605_33611 = G__33632;
chunk__33606_33612 = G__33633;
count__33607_33613 = G__33634;
i__33608_33614 = G__33635;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__33636){
var elem = cljs.core.first(arglist__33636);
var kvs = cljs.core.rest(arglist__33636);
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
{var G__33645 = dommy.template.__GT_node_like.call(null,elem);(G__33645[cljs.core.name.call(null,k)] = v);
return G__33645;
} else
{var G__33646 = dommy.template.__GT_node_like.call(null,elem);G__33646.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__33646;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__33653__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33647_33654 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__33648_33655 = null;var count__33649_33656 = 0;var i__33650_33657 = 0;while(true){
if((i__33650_33657 < count__33649_33656))
{var vec__33651_33658 = cljs.core._nth.call(null,chunk__33648_33655,i__33650_33657);var k_33659__$1 = cljs.core.nth.call(null,vec__33651_33658,0,null);var v_33660__$1 = cljs.core.nth.call(null,vec__33651_33658,1,null);set_attr_BANG_.call(null,elem__$1,k_33659__$1,v_33660__$1);
{
var G__33661 = seq__33647_33654;
var G__33662 = chunk__33648_33655;
var G__33663 = count__33649_33656;
var G__33664 = (i__33650_33657 + 1);
seq__33647_33654 = G__33661;
chunk__33648_33655 = G__33662;
count__33649_33656 = G__33663;
i__33650_33657 = G__33664;
continue;
}
} else
{var temp__4092__auto___33665 = cljs.core.seq.call(null,seq__33647_33654);if(temp__4092__auto___33665)
{var seq__33647_33666__$1 = temp__4092__auto___33665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33647_33666__$1))
{var c__14545__auto___33667 = cljs.core.chunk_first.call(null,seq__33647_33666__$1);{
var G__33668 = cljs.core.chunk_rest.call(null,seq__33647_33666__$1);
var G__33669 = c__14545__auto___33667;
var G__33670 = cljs.core.count.call(null,c__14545__auto___33667);
var G__33671 = 0;
seq__33647_33654 = G__33668;
chunk__33648_33655 = G__33669;
count__33649_33656 = G__33670;
i__33650_33657 = G__33671;
continue;
}
} else
{var vec__33652_33672 = cljs.core.first.call(null,seq__33647_33666__$1);var k_33673__$1 = cljs.core.nth.call(null,vec__33652_33672,0,null);var v_33674__$1 = cljs.core.nth.call(null,vec__33652_33672,1,null);set_attr_BANG_.call(null,elem__$1,k_33673__$1,v_33674__$1);
{
var G__33675 = cljs.core.next.call(null,seq__33647_33666__$1);
var G__33676 = null;
var G__33677 = 0;
var G__33678 = 0;
seq__33647_33654 = G__33675;
chunk__33648_33655 = G__33676;
count__33649_33656 = G__33677;
i__33650_33657 = G__33678;
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
var G__33653 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__33653__delegate.call(this,elem,k,v,kvs);};
G__33653.cljs$lang$maxFixedArity = 3;
G__33653.cljs$lang$applyTo = (function (arglist__33679){
var elem = cljs.core.first(arglist__33679);
arglist__33679 = cljs.core.next(arglist__33679);
var k = cljs.core.first(arglist__33679);
arglist__33679 = cljs.core.next(arglist__33679);
var v = cljs.core.first(arglist__33679);
var kvs = cljs.core.rest(arglist__33679);
return G__33653__delegate(elem,k,v,kvs);
});
G__33653.cljs$core$IFn$_invoke$arity$variadic = G__33653__delegate;
return G__33653;
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
var G__33688__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33684_33689 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__33685_33690 = null;var count__33686_33691 = 0;var i__33687_33692 = 0;while(true){
if((i__33687_33692 < count__33686_33691))
{var k_33693__$1 = cljs.core._nth.call(null,chunk__33685_33690,i__33687_33692);remove_attr_BANG_.call(null,elem__$1,k_33693__$1);
{
var G__33694 = seq__33684_33689;
var G__33695 = chunk__33685_33690;
var G__33696 = count__33686_33691;
var G__33697 = (i__33687_33692 + 1);
seq__33684_33689 = G__33694;
chunk__33685_33690 = G__33695;
count__33686_33691 = G__33696;
i__33687_33692 = G__33697;
continue;
}
} else
{var temp__4092__auto___33698 = cljs.core.seq.call(null,seq__33684_33689);if(temp__4092__auto___33698)
{var seq__33684_33699__$1 = temp__4092__auto___33698;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33684_33699__$1))
{var c__14545__auto___33700 = cljs.core.chunk_first.call(null,seq__33684_33699__$1);{
var G__33701 = cljs.core.chunk_rest.call(null,seq__33684_33699__$1);
var G__33702 = c__14545__auto___33700;
var G__33703 = cljs.core.count.call(null,c__14545__auto___33700);
var G__33704 = 0;
seq__33684_33689 = G__33701;
chunk__33685_33690 = G__33702;
count__33686_33691 = G__33703;
i__33687_33692 = G__33704;
continue;
}
} else
{var k_33705__$1 = cljs.core.first.call(null,seq__33684_33699__$1);remove_attr_BANG_.call(null,elem__$1,k_33705__$1);
{
var G__33706 = cljs.core.next.call(null,seq__33684_33699__$1);
var G__33707 = null;
var G__33708 = 0;
var G__33709 = 0;
seq__33684_33689 = G__33706;
chunk__33685_33690 = G__33707;
count__33686_33691 = G__33708;
i__33687_33692 = G__33709;
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
var G__33688 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33688__delegate.call(this,elem,k,ks);};
G__33688.cljs$lang$maxFixedArity = 2;
G__33688.cljs$lang$applyTo = (function (arglist__33710){
var elem = cljs.core.first(arglist__33710);
arglist__33710 = cljs.core.next(arglist__33710);
var k = cljs.core.first(arglist__33710);
var ks = cljs.core.rest(arglist__33710);
return G__33688__delegate(elem,k,ks);
});
G__33688.cljs$core$IFn$_invoke$arity$variadic = G__33688__delegate;
return G__33688;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__33712 = dommy.template.__GT_node_like.call(null,elem);G__33712.style.display = ((show_QMARK_)?"":"none");
return G__33712;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__33714 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__33714,false);
return G__33714;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__33716 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__33716,true);
return G__33716;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__33718 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__33718["constructor"] = Object);
return G__33718;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map