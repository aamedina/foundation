// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8186__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8186__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8186__auto__;
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
var G__45406 = (i + class$.length);
start_from = G__45406;
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
{var temp__4090__auto___45431 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45431))
{var class_list_45432 = temp__4090__auto___45431;var seq__45419_45433 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45420_45434 = null;var count__45421_45435 = 0;var i__45422_45436 = 0;while(true){
if((i__45422_45436 < count__45421_45435))
{var class_45437 = cljs.core._nth.call(null,chunk__45420_45434,i__45422_45436);class_list_45432.add(class_45437);
{
var G__45438 = seq__45419_45433;
var G__45439 = chunk__45420_45434;
var G__45440 = count__45421_45435;
var G__45441 = (i__45422_45436 + 1);
seq__45419_45433 = G__45438;
chunk__45420_45434 = G__45439;
count__45421_45435 = G__45440;
i__45422_45436 = G__45441;
continue;
}
} else
{var temp__4092__auto___45442 = cljs.core.seq.call(null,seq__45419_45433);if(temp__4092__auto___45442)
{var seq__45419_45443__$1 = temp__4092__auto___45442;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45419_45443__$1))
{var c__8927__auto___45444 = cljs.core.chunk_first.call(null,seq__45419_45443__$1);{
var G__45445 = cljs.core.chunk_rest.call(null,seq__45419_45443__$1);
var G__45446 = c__8927__auto___45444;
var G__45447 = cljs.core.count.call(null,c__8927__auto___45444);
var G__45448 = 0;
seq__45419_45433 = G__45445;
chunk__45420_45434 = G__45446;
count__45421_45435 = G__45447;
i__45422_45436 = G__45448;
continue;
}
} else
{var class_45449 = cljs.core.first.call(null,seq__45419_45443__$1);class_list_45432.add(class_45449);
{
var G__45450 = cljs.core.next.call(null,seq__45419_45443__$1);
var G__45451 = null;
var G__45452 = 0;
var G__45453 = 0;
seq__45419_45433 = G__45450;
chunk__45420_45434 = G__45451;
count__45421_45435 = G__45452;
i__45422_45436 = G__45453;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_45454 = elem__$1.className;var seq__45423_45455 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45424_45456 = null;var count__45425_45457 = 0;var i__45426_45458 = 0;while(true){
if((i__45426_45458 < count__45425_45457))
{var class_45459 = cljs.core._nth.call(null,chunk__45424_45456,i__45426_45458);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45454,class_45459)))
{} else
{elem__$1.className = (((class_name_45454 === ""))?class_45459:[cljs.core.str(class_name_45454),cljs.core.str(" "),cljs.core.str(class_45459)].join(''));
}
{
var G__45460 = seq__45423_45455;
var G__45461 = chunk__45424_45456;
var G__45462 = count__45425_45457;
var G__45463 = (i__45426_45458 + 1);
seq__45423_45455 = G__45460;
chunk__45424_45456 = G__45461;
count__45425_45457 = G__45462;
i__45426_45458 = G__45463;
continue;
}
} else
{var temp__4092__auto___45464 = cljs.core.seq.call(null,seq__45423_45455);if(temp__4092__auto___45464)
{var seq__45423_45465__$1 = temp__4092__auto___45464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45423_45465__$1))
{var c__8927__auto___45466 = cljs.core.chunk_first.call(null,seq__45423_45465__$1);{
var G__45467 = cljs.core.chunk_rest.call(null,seq__45423_45465__$1);
var G__45468 = c__8927__auto___45466;
var G__45469 = cljs.core.count.call(null,c__8927__auto___45466);
var G__45470 = 0;
seq__45423_45455 = G__45467;
chunk__45424_45456 = G__45468;
count__45425_45457 = G__45469;
i__45426_45458 = G__45470;
continue;
}
} else
{var class_45471 = cljs.core.first.call(null,seq__45423_45465__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45454,class_45471)))
{} else
{elem__$1.className = (((class_name_45454 === ""))?class_45471:[cljs.core.str(class_name_45454),cljs.core.str(" "),cljs.core.str(class_45471)].join(''));
}
{
var G__45472 = cljs.core.next.call(null,seq__45423_45465__$1);
var G__45473 = null;
var G__45474 = 0;
var G__45475 = 0;
seq__45423_45455 = G__45472;
chunk__45424_45456 = G__45473;
count__45425_45457 = G__45474;
i__45426_45458 = G__45475;
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
var G__45476__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45427_45477 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__45428_45478 = null;var count__45429_45479 = 0;var i__45430_45480 = 0;while(true){
if((i__45430_45480 < count__45429_45479))
{var c_45481 = cljs.core._nth.call(null,chunk__45428_45478,i__45430_45480);add_class_BANG_.call(null,elem__$1,c_45481);
{
var G__45482 = seq__45427_45477;
var G__45483 = chunk__45428_45478;
var G__45484 = count__45429_45479;
var G__45485 = (i__45430_45480 + 1);
seq__45427_45477 = G__45482;
chunk__45428_45478 = G__45483;
count__45429_45479 = G__45484;
i__45430_45480 = G__45485;
continue;
}
} else
{var temp__4092__auto___45486 = cljs.core.seq.call(null,seq__45427_45477);if(temp__4092__auto___45486)
{var seq__45427_45487__$1 = temp__4092__auto___45486;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45427_45487__$1))
{var c__8927__auto___45488 = cljs.core.chunk_first.call(null,seq__45427_45487__$1);{
var G__45489 = cljs.core.chunk_rest.call(null,seq__45427_45487__$1);
var G__45490 = c__8927__auto___45488;
var G__45491 = cljs.core.count.call(null,c__8927__auto___45488);
var G__45492 = 0;
seq__45427_45477 = G__45489;
chunk__45428_45478 = G__45490;
count__45429_45479 = G__45491;
i__45430_45480 = G__45492;
continue;
}
} else
{var c_45493 = cljs.core.first.call(null,seq__45427_45487__$1);add_class_BANG_.call(null,elem__$1,c_45493);
{
var G__45494 = cljs.core.next.call(null,seq__45427_45487__$1);
var G__45495 = null;
var G__45496 = 0;
var G__45497 = 0;
seq__45427_45477 = G__45494;
chunk__45428_45478 = G__45495;
count__45429_45479 = G__45496;
i__45430_45480 = G__45497;
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
var G__45476 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45476__delegate.call(this,elem,classes,more_classes);};
G__45476.cljs$lang$maxFixedArity = 2;
G__45476.cljs$lang$applyTo = (function (arglist__45498){
var elem = cljs.core.first(arglist__45498);
arglist__45498 = cljs.core.next(arglist__45498);
var classes = cljs.core.first(arglist__45498);
var more_classes = cljs.core.rest(arglist__45498);
return G__45476__delegate(elem,classes,more_classes);
});
G__45476.cljs$core$IFn$_invoke$arity$variadic = G__45476__delegate;
return G__45476;
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
var G__45499 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__45499;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45508 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45508))
{var class_list_45509 = temp__4090__auto___45508;class_list_45509.remove(class$__$1);
} else
{var class_name_45510 = elem__$1.className;var new_class_name_45511 = dommy.attrs.remove_class_str.call(null,class_name_45510,class$__$1);if((class_name_45510 === new_class_name_45511))
{} else
{elem__$1.className = new_class_name_45511;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__45512__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45504 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__45505 = null;var count__45506 = 0;var i__45507 = 0;while(true){
if((i__45507 < count__45506))
{var c = cljs.core._nth.call(null,chunk__45505,i__45507);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45513 = seq__45504;
var G__45514 = chunk__45505;
var G__45515 = count__45506;
var G__45516 = (i__45507 + 1);
seq__45504 = G__45513;
chunk__45505 = G__45514;
count__45506 = G__45515;
i__45507 = G__45516;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45504);if(temp__4092__auto__)
{var seq__45504__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45504__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__45504__$1);{
var G__45517 = cljs.core.chunk_rest.call(null,seq__45504__$1);
var G__45518 = c__8927__auto__;
var G__45519 = cljs.core.count.call(null,c__8927__auto__);
var G__45520 = 0;
seq__45504 = G__45517;
chunk__45505 = G__45518;
count__45506 = G__45519;
i__45507 = G__45520;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__45504__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45521 = cljs.core.next.call(null,seq__45504__$1);
var G__45522 = null;
var G__45523 = 0;
var G__45524 = 0;
seq__45504 = G__45521;
chunk__45505 = G__45522;
count__45506 = G__45523;
i__45507 = G__45524;
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
var G__45512 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45512__delegate.call(this,elem,class$,classes);};
G__45512.cljs$lang$maxFixedArity = 2;
G__45512.cljs$lang$applyTo = (function (arglist__45525){
var elem = cljs.core.first(arglist__45525);
arglist__45525 = cljs.core.next(arglist__45525);
var class$ = cljs.core.first(arglist__45525);
var classes = cljs.core.rest(arglist__45525);
return G__45512__delegate(elem,class$,classes);
});
G__45512.cljs$core$IFn$_invoke$arity$variadic = G__45512__delegate;
return G__45512;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45526 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45526))
{var class_list_45527 = temp__4090__auto___45526;class_list_45527.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__45530){var vec__45531 = p__45530;var k = cljs.core.nth.call(null,vec__45531,0,null);var v = cljs.core.nth.call(null,vec__45531,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__45538_45544 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45539_45545 = null;var count__45540_45546 = 0;var i__45541_45547 = 0;while(true){
if((i__45541_45547 < count__45540_45546))
{var vec__45542_45548 = cljs.core._nth.call(null,chunk__45539_45545,i__45541_45547);var k_45549 = cljs.core.nth.call(null,vec__45542_45548,0,null);var v_45550 = cljs.core.nth.call(null,vec__45542_45548,1,null);(style[cljs.core.name.call(null,k_45549)] = v_45550);
{
var G__45551 = seq__45538_45544;
var G__45552 = chunk__45539_45545;
var G__45553 = count__45540_45546;
var G__45554 = (i__45541_45547 + 1);
seq__45538_45544 = G__45551;
chunk__45539_45545 = G__45552;
count__45540_45546 = G__45553;
i__45541_45547 = G__45554;
continue;
}
} else
{var temp__4092__auto___45555 = cljs.core.seq.call(null,seq__45538_45544);if(temp__4092__auto___45555)
{var seq__45538_45556__$1 = temp__4092__auto___45555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45538_45556__$1))
{var c__8927__auto___45557 = cljs.core.chunk_first.call(null,seq__45538_45556__$1);{
var G__45558 = cljs.core.chunk_rest.call(null,seq__45538_45556__$1);
var G__45559 = c__8927__auto___45557;
var G__45560 = cljs.core.count.call(null,c__8927__auto___45557);
var G__45561 = 0;
seq__45538_45544 = G__45558;
chunk__45539_45545 = G__45559;
count__45540_45546 = G__45560;
i__45541_45547 = G__45561;
continue;
}
} else
{var vec__45543_45562 = cljs.core.first.call(null,seq__45538_45556__$1);var k_45563 = cljs.core.nth.call(null,vec__45543_45562,0,null);var v_45564 = cljs.core.nth.call(null,vec__45543_45562,1,null);(style[cljs.core.name.call(null,k_45563)] = v_45564);
{
var G__45565 = cljs.core.next.call(null,seq__45538_45556__$1);
var G__45566 = null;
var G__45567 = 0;
var G__45568 = 0;
seq__45538_45544 = G__45565;
chunk__45539_45545 = G__45566;
count__45540_45546 = G__45567;
i__45541_45547 = G__45568;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__45569){
var elem = cljs.core.first(arglist__45569);
var kvs = cljs.core.rest(arglist__45569);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45576_45582 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45577_45583 = null;var count__45578_45584 = 0;var i__45579_45585 = 0;while(true){
if((i__45579_45585 < count__45578_45584))
{var vec__45580_45586 = cljs.core._nth.call(null,chunk__45577_45583,i__45579_45585);var k_45587 = cljs.core.nth.call(null,vec__45580_45586,0,null);var v_45588 = cljs.core.nth.call(null,vec__45580_45586,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45587,[cljs.core.str(v_45588),cljs.core.str("px")].join(''));
{
var G__45589 = seq__45576_45582;
var G__45590 = chunk__45577_45583;
var G__45591 = count__45578_45584;
var G__45592 = (i__45579_45585 + 1);
seq__45576_45582 = G__45589;
chunk__45577_45583 = G__45590;
count__45578_45584 = G__45591;
i__45579_45585 = G__45592;
continue;
}
} else
{var temp__4092__auto___45593 = cljs.core.seq.call(null,seq__45576_45582);if(temp__4092__auto___45593)
{var seq__45576_45594__$1 = temp__4092__auto___45593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45576_45594__$1))
{var c__8927__auto___45595 = cljs.core.chunk_first.call(null,seq__45576_45594__$1);{
var G__45596 = cljs.core.chunk_rest.call(null,seq__45576_45594__$1);
var G__45597 = c__8927__auto___45595;
var G__45598 = cljs.core.count.call(null,c__8927__auto___45595);
var G__45599 = 0;
seq__45576_45582 = G__45596;
chunk__45577_45583 = G__45597;
count__45578_45584 = G__45598;
i__45579_45585 = G__45599;
continue;
}
} else
{var vec__45581_45600 = cljs.core.first.call(null,seq__45576_45594__$1);var k_45601 = cljs.core.nth.call(null,vec__45581_45600,0,null);var v_45602 = cljs.core.nth.call(null,vec__45581_45600,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45601,[cljs.core.str(v_45602),cljs.core.str("px")].join(''));
{
var G__45603 = cljs.core.next.call(null,seq__45576_45594__$1);
var G__45604 = null;
var G__45605 = 0;
var G__45606 = 0;
seq__45576_45582 = G__45603;
chunk__45577_45583 = G__45604;
count__45578_45584 = G__45605;
i__45579_45585 = G__45606;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__45607){
var elem = cljs.core.first(arglist__45607);
var kvs = cljs.core.rest(arglist__45607);
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
{var G__45616 = dommy.template.__GT_node_like.call(null,elem);(G__45616[cljs.core.name.call(null,k)] = v);
return G__45616;
} else
{var G__45617 = dommy.template.__GT_node_like.call(null,elem);G__45617.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__45617;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__45624__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45618_45625 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__45619_45626 = null;var count__45620_45627 = 0;var i__45621_45628 = 0;while(true){
if((i__45621_45628 < count__45620_45627))
{var vec__45622_45629 = cljs.core._nth.call(null,chunk__45619_45626,i__45621_45628);var k_45630__$1 = cljs.core.nth.call(null,vec__45622_45629,0,null);var v_45631__$1 = cljs.core.nth.call(null,vec__45622_45629,1,null);set_attr_BANG_.call(null,elem__$1,k_45630__$1,v_45631__$1);
{
var G__45632 = seq__45618_45625;
var G__45633 = chunk__45619_45626;
var G__45634 = count__45620_45627;
var G__45635 = (i__45621_45628 + 1);
seq__45618_45625 = G__45632;
chunk__45619_45626 = G__45633;
count__45620_45627 = G__45634;
i__45621_45628 = G__45635;
continue;
}
} else
{var temp__4092__auto___45636 = cljs.core.seq.call(null,seq__45618_45625);if(temp__4092__auto___45636)
{var seq__45618_45637__$1 = temp__4092__auto___45636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45618_45637__$1))
{var c__8927__auto___45638 = cljs.core.chunk_first.call(null,seq__45618_45637__$1);{
var G__45639 = cljs.core.chunk_rest.call(null,seq__45618_45637__$1);
var G__45640 = c__8927__auto___45638;
var G__45641 = cljs.core.count.call(null,c__8927__auto___45638);
var G__45642 = 0;
seq__45618_45625 = G__45639;
chunk__45619_45626 = G__45640;
count__45620_45627 = G__45641;
i__45621_45628 = G__45642;
continue;
}
} else
{var vec__45623_45643 = cljs.core.first.call(null,seq__45618_45637__$1);var k_45644__$1 = cljs.core.nth.call(null,vec__45623_45643,0,null);var v_45645__$1 = cljs.core.nth.call(null,vec__45623_45643,1,null);set_attr_BANG_.call(null,elem__$1,k_45644__$1,v_45645__$1);
{
var G__45646 = cljs.core.next.call(null,seq__45618_45637__$1);
var G__45647 = null;
var G__45648 = 0;
var G__45649 = 0;
seq__45618_45625 = G__45646;
chunk__45619_45626 = G__45647;
count__45620_45627 = G__45648;
i__45621_45628 = G__45649;
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
var G__45624 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45624__delegate.call(this,elem,k,v,kvs);};
G__45624.cljs$lang$maxFixedArity = 3;
G__45624.cljs$lang$applyTo = (function (arglist__45650){
var elem = cljs.core.first(arglist__45650);
arglist__45650 = cljs.core.next(arglist__45650);
var k = cljs.core.first(arglist__45650);
arglist__45650 = cljs.core.next(arglist__45650);
var v = cljs.core.first(arglist__45650);
var kvs = cljs.core.rest(arglist__45650);
return G__45624__delegate(elem,k,v,kvs);
});
G__45624.cljs$core$IFn$_invoke$arity$variadic = G__45624__delegate;
return G__45624;
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
var G__45659__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45655_45660 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__45656_45661 = null;var count__45657_45662 = 0;var i__45658_45663 = 0;while(true){
if((i__45658_45663 < count__45657_45662))
{var k_45664__$1 = cljs.core._nth.call(null,chunk__45656_45661,i__45658_45663);remove_attr_BANG_.call(null,elem__$1,k_45664__$1);
{
var G__45665 = seq__45655_45660;
var G__45666 = chunk__45656_45661;
var G__45667 = count__45657_45662;
var G__45668 = (i__45658_45663 + 1);
seq__45655_45660 = G__45665;
chunk__45656_45661 = G__45666;
count__45657_45662 = G__45667;
i__45658_45663 = G__45668;
continue;
}
} else
{var temp__4092__auto___45669 = cljs.core.seq.call(null,seq__45655_45660);if(temp__4092__auto___45669)
{var seq__45655_45670__$1 = temp__4092__auto___45669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45655_45670__$1))
{var c__8927__auto___45671 = cljs.core.chunk_first.call(null,seq__45655_45670__$1);{
var G__45672 = cljs.core.chunk_rest.call(null,seq__45655_45670__$1);
var G__45673 = c__8927__auto___45671;
var G__45674 = cljs.core.count.call(null,c__8927__auto___45671);
var G__45675 = 0;
seq__45655_45660 = G__45672;
chunk__45656_45661 = G__45673;
count__45657_45662 = G__45674;
i__45658_45663 = G__45675;
continue;
}
} else
{var k_45676__$1 = cljs.core.first.call(null,seq__45655_45670__$1);remove_attr_BANG_.call(null,elem__$1,k_45676__$1);
{
var G__45677 = cljs.core.next.call(null,seq__45655_45670__$1);
var G__45678 = null;
var G__45679 = 0;
var G__45680 = 0;
seq__45655_45660 = G__45677;
chunk__45656_45661 = G__45678;
count__45657_45662 = G__45679;
i__45658_45663 = G__45680;
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
var G__45659 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45659__delegate.call(this,elem,k,ks);};
G__45659.cljs$lang$maxFixedArity = 2;
G__45659.cljs$lang$applyTo = (function (arglist__45681){
var elem = cljs.core.first(arglist__45681);
arglist__45681 = cljs.core.next(arglist__45681);
var k = cljs.core.first(arglist__45681);
var ks = cljs.core.rest(arglist__45681);
return G__45659__delegate(elem,k,ks);
});
G__45659.cljs$core$IFn$_invoke$arity$variadic = G__45659__delegate;
return G__45659;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__45683 = dommy.template.__GT_node_like.call(null,elem);G__45683.style.display = ((show_QMARK_)?"":"none");
return G__45683;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__45685 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45685,false);
return G__45685;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__45687 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45687,true);
return G__45687;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__45689 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__45689["constructor"] = Object);
return G__45689;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map