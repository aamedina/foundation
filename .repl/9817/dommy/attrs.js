// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7629__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7629__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7629__auto__;
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
var G__21495 = (i + class$.length);
start_from = G__21495;
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
{var temp__4090__auto___21520 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21520))
{var class_list_21521 = temp__4090__auto___21520;var seq__21508_21522 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__21509_21523 = null;var count__21510_21524 = 0;var i__21511_21525 = 0;while(true){
if((i__21511_21525 < count__21510_21524))
{var class_21526 = cljs.core._nth.call(null,chunk__21509_21523,i__21511_21525);class_list_21521.add(class_21526);
{
var G__21527 = seq__21508_21522;
var G__21528 = chunk__21509_21523;
var G__21529 = count__21510_21524;
var G__21530 = (i__21511_21525 + 1);
seq__21508_21522 = G__21527;
chunk__21509_21523 = G__21528;
count__21510_21524 = G__21529;
i__21511_21525 = G__21530;
continue;
}
} else
{var temp__4092__auto___21531 = cljs.core.seq.call(null,seq__21508_21522);if(temp__4092__auto___21531)
{var seq__21508_21532__$1 = temp__4092__auto___21531;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21508_21532__$1))
{var c__8355__auto___21533 = cljs.core.chunk_first.call(null,seq__21508_21532__$1);{
var G__21534 = cljs.core.chunk_rest.call(null,seq__21508_21532__$1);
var G__21535 = c__8355__auto___21533;
var G__21536 = cljs.core.count.call(null,c__8355__auto___21533);
var G__21537 = 0;
seq__21508_21522 = G__21534;
chunk__21509_21523 = G__21535;
count__21510_21524 = G__21536;
i__21511_21525 = G__21537;
continue;
}
} else
{var class_21538 = cljs.core.first.call(null,seq__21508_21532__$1);class_list_21521.add(class_21538);
{
var G__21539 = cljs.core.next.call(null,seq__21508_21532__$1);
var G__21540 = null;
var G__21541 = 0;
var G__21542 = 0;
seq__21508_21522 = G__21539;
chunk__21509_21523 = G__21540;
count__21510_21524 = G__21541;
i__21511_21525 = G__21542;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_21543 = elem__$1.className;var seq__21512_21544 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__21513_21545 = null;var count__21514_21546 = 0;var i__21515_21547 = 0;while(true){
if((i__21515_21547 < count__21514_21546))
{var class_21548 = cljs.core._nth.call(null,chunk__21513_21545,i__21515_21547);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_21543,class_21548)))
{} else
{elem__$1.className = (((class_name_21543 === ""))?class_21548:[cljs.core.str(class_name_21543),cljs.core.str(" "),cljs.core.str(class_21548)].join(''));
}
{
var G__21549 = seq__21512_21544;
var G__21550 = chunk__21513_21545;
var G__21551 = count__21514_21546;
var G__21552 = (i__21515_21547 + 1);
seq__21512_21544 = G__21549;
chunk__21513_21545 = G__21550;
count__21514_21546 = G__21551;
i__21515_21547 = G__21552;
continue;
}
} else
{var temp__4092__auto___21553 = cljs.core.seq.call(null,seq__21512_21544);if(temp__4092__auto___21553)
{var seq__21512_21554__$1 = temp__4092__auto___21553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21512_21554__$1))
{var c__8355__auto___21555 = cljs.core.chunk_first.call(null,seq__21512_21554__$1);{
var G__21556 = cljs.core.chunk_rest.call(null,seq__21512_21554__$1);
var G__21557 = c__8355__auto___21555;
var G__21558 = cljs.core.count.call(null,c__8355__auto___21555);
var G__21559 = 0;
seq__21512_21544 = G__21556;
chunk__21513_21545 = G__21557;
count__21514_21546 = G__21558;
i__21515_21547 = G__21559;
continue;
}
} else
{var class_21560 = cljs.core.first.call(null,seq__21512_21554__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_21543,class_21560)))
{} else
{elem__$1.className = (((class_name_21543 === ""))?class_21560:[cljs.core.str(class_name_21543),cljs.core.str(" "),cljs.core.str(class_21560)].join(''));
}
{
var G__21561 = cljs.core.next.call(null,seq__21512_21554__$1);
var G__21562 = null;
var G__21563 = 0;
var G__21564 = 0;
seq__21512_21544 = G__21561;
chunk__21513_21545 = G__21562;
count__21514_21546 = G__21563;
i__21515_21547 = G__21564;
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
var G__21565__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21516_21566 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__21517_21567 = null;var count__21518_21568 = 0;var i__21519_21569 = 0;while(true){
if((i__21519_21569 < count__21518_21568))
{var c_21570 = cljs.core._nth.call(null,chunk__21517_21567,i__21519_21569);add_class_BANG_.call(null,elem__$1,c_21570);
{
var G__21571 = seq__21516_21566;
var G__21572 = chunk__21517_21567;
var G__21573 = count__21518_21568;
var G__21574 = (i__21519_21569 + 1);
seq__21516_21566 = G__21571;
chunk__21517_21567 = G__21572;
count__21518_21568 = G__21573;
i__21519_21569 = G__21574;
continue;
}
} else
{var temp__4092__auto___21575 = cljs.core.seq.call(null,seq__21516_21566);if(temp__4092__auto___21575)
{var seq__21516_21576__$1 = temp__4092__auto___21575;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21516_21576__$1))
{var c__8355__auto___21577 = cljs.core.chunk_first.call(null,seq__21516_21576__$1);{
var G__21578 = cljs.core.chunk_rest.call(null,seq__21516_21576__$1);
var G__21579 = c__8355__auto___21577;
var G__21580 = cljs.core.count.call(null,c__8355__auto___21577);
var G__21581 = 0;
seq__21516_21566 = G__21578;
chunk__21517_21567 = G__21579;
count__21518_21568 = G__21580;
i__21519_21569 = G__21581;
continue;
}
} else
{var c_21582 = cljs.core.first.call(null,seq__21516_21576__$1);add_class_BANG_.call(null,elem__$1,c_21582);
{
var G__21583 = cljs.core.next.call(null,seq__21516_21576__$1);
var G__21584 = null;
var G__21585 = 0;
var G__21586 = 0;
seq__21516_21566 = G__21583;
chunk__21517_21567 = G__21584;
count__21518_21568 = G__21585;
i__21519_21569 = G__21586;
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
var G__21565 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21565__delegate.call(this,elem,classes,more_classes);};
G__21565.cljs$lang$maxFixedArity = 2;
G__21565.cljs$lang$applyTo = (function (arglist__21587){
var elem = cljs.core.first(arglist__21587);
arglist__21587 = cljs.core.next(arglist__21587);
var classes = cljs.core.first(arglist__21587);
var more_classes = cljs.core.rest(arglist__21587);
return G__21565__delegate(elem,classes,more_classes);
});
G__21565.cljs$core$IFn$_invoke$arity$variadic = G__21565__delegate;
return G__21565;
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
var G__21588 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__21588;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21597 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21597))
{var class_list_21598 = temp__4090__auto___21597;class_list_21598.remove(class$__$1);
} else
{var class_name_21599 = elem__$1.className;var new_class_name_21600 = dommy.attrs.remove_class_str.call(null,class_name_21599,class$__$1);if((class_name_21599 === new_class_name_21600))
{} else
{elem__$1.className = new_class_name_21600;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__21601__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21593 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__21594 = null;var count__21595 = 0;var i__21596 = 0;while(true){
if((i__21596 < count__21595))
{var c = cljs.core._nth.call(null,chunk__21594,i__21596);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21602 = seq__21593;
var G__21603 = chunk__21594;
var G__21604 = count__21595;
var G__21605 = (i__21596 + 1);
seq__21593 = G__21602;
chunk__21594 = G__21603;
count__21595 = G__21604;
i__21596 = G__21605;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21593);if(temp__4092__auto__)
{var seq__21593__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21593__$1))
{var c__8355__auto__ = cljs.core.chunk_first.call(null,seq__21593__$1);{
var G__21606 = cljs.core.chunk_rest.call(null,seq__21593__$1);
var G__21607 = c__8355__auto__;
var G__21608 = cljs.core.count.call(null,c__8355__auto__);
var G__21609 = 0;
seq__21593 = G__21606;
chunk__21594 = G__21607;
count__21595 = G__21608;
i__21596 = G__21609;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__21593__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21610 = cljs.core.next.call(null,seq__21593__$1);
var G__21611 = null;
var G__21612 = 0;
var G__21613 = 0;
seq__21593 = G__21610;
chunk__21594 = G__21611;
count__21595 = G__21612;
i__21596 = G__21613;
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
var G__21601 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21601__delegate.call(this,elem,class$,classes);};
G__21601.cljs$lang$maxFixedArity = 2;
G__21601.cljs$lang$applyTo = (function (arglist__21614){
var elem = cljs.core.first(arglist__21614);
arglist__21614 = cljs.core.next(arglist__21614);
var class$ = cljs.core.first(arglist__21614);
var classes = cljs.core.rest(arglist__21614);
return G__21601__delegate(elem,class$,classes);
});
G__21601.cljs$core$IFn$_invoke$arity$variadic = G__21601__delegate;
return G__21601;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21615 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21615))
{var class_list_21616 = temp__4090__auto___21615;class_list_21616.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__21619){var vec__21620 = p__21619;var k = cljs.core.nth.call(null,vec__21620,0,null);var v = cljs.core.nth.call(null,vec__21620,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__21627_21633 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21628_21634 = null;var count__21629_21635 = 0;var i__21630_21636 = 0;while(true){
if((i__21630_21636 < count__21629_21635))
{var vec__21631_21637 = cljs.core._nth.call(null,chunk__21628_21634,i__21630_21636);var k_21638 = cljs.core.nth.call(null,vec__21631_21637,0,null);var v_21639 = cljs.core.nth.call(null,vec__21631_21637,1,null);(style[cljs.core.name.call(null,k_21638)] = v_21639);
{
var G__21640 = seq__21627_21633;
var G__21641 = chunk__21628_21634;
var G__21642 = count__21629_21635;
var G__21643 = (i__21630_21636 + 1);
seq__21627_21633 = G__21640;
chunk__21628_21634 = G__21641;
count__21629_21635 = G__21642;
i__21630_21636 = G__21643;
continue;
}
} else
{var temp__4092__auto___21644 = cljs.core.seq.call(null,seq__21627_21633);if(temp__4092__auto___21644)
{var seq__21627_21645__$1 = temp__4092__auto___21644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21627_21645__$1))
{var c__8355__auto___21646 = cljs.core.chunk_first.call(null,seq__21627_21645__$1);{
var G__21647 = cljs.core.chunk_rest.call(null,seq__21627_21645__$1);
var G__21648 = c__8355__auto___21646;
var G__21649 = cljs.core.count.call(null,c__8355__auto___21646);
var G__21650 = 0;
seq__21627_21633 = G__21647;
chunk__21628_21634 = G__21648;
count__21629_21635 = G__21649;
i__21630_21636 = G__21650;
continue;
}
} else
{var vec__21632_21651 = cljs.core.first.call(null,seq__21627_21645__$1);var k_21652 = cljs.core.nth.call(null,vec__21632_21651,0,null);var v_21653 = cljs.core.nth.call(null,vec__21632_21651,1,null);(style[cljs.core.name.call(null,k_21652)] = v_21653);
{
var G__21654 = cljs.core.next.call(null,seq__21627_21645__$1);
var G__21655 = null;
var G__21656 = 0;
var G__21657 = 0;
seq__21627_21633 = G__21654;
chunk__21628_21634 = G__21655;
count__21629_21635 = G__21656;
i__21630_21636 = G__21657;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21658){
var elem = cljs.core.first(arglist__21658);
var kvs = cljs.core.rest(arglist__21658);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21665_21671 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21666_21672 = null;var count__21667_21673 = 0;var i__21668_21674 = 0;while(true){
if((i__21668_21674 < count__21667_21673))
{var vec__21669_21675 = cljs.core._nth.call(null,chunk__21666_21672,i__21668_21674);var k_21676 = cljs.core.nth.call(null,vec__21669_21675,0,null);var v_21677 = cljs.core.nth.call(null,vec__21669_21675,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21676,[cljs.core.str(v_21677),cljs.core.str("px")].join(''));
{
var G__21678 = seq__21665_21671;
var G__21679 = chunk__21666_21672;
var G__21680 = count__21667_21673;
var G__21681 = (i__21668_21674 + 1);
seq__21665_21671 = G__21678;
chunk__21666_21672 = G__21679;
count__21667_21673 = G__21680;
i__21668_21674 = G__21681;
continue;
}
} else
{var temp__4092__auto___21682 = cljs.core.seq.call(null,seq__21665_21671);if(temp__4092__auto___21682)
{var seq__21665_21683__$1 = temp__4092__auto___21682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21665_21683__$1))
{var c__8355__auto___21684 = cljs.core.chunk_first.call(null,seq__21665_21683__$1);{
var G__21685 = cljs.core.chunk_rest.call(null,seq__21665_21683__$1);
var G__21686 = c__8355__auto___21684;
var G__21687 = cljs.core.count.call(null,c__8355__auto___21684);
var G__21688 = 0;
seq__21665_21671 = G__21685;
chunk__21666_21672 = G__21686;
count__21667_21673 = G__21687;
i__21668_21674 = G__21688;
continue;
}
} else
{var vec__21670_21689 = cljs.core.first.call(null,seq__21665_21683__$1);var k_21690 = cljs.core.nth.call(null,vec__21670_21689,0,null);var v_21691 = cljs.core.nth.call(null,vec__21670_21689,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21690,[cljs.core.str(v_21691),cljs.core.str("px")].join(''));
{
var G__21692 = cljs.core.next.call(null,seq__21665_21683__$1);
var G__21693 = null;
var G__21694 = 0;
var G__21695 = 0;
seq__21665_21671 = G__21692;
chunk__21666_21672 = G__21693;
count__21667_21673 = G__21694;
i__21668_21674 = G__21695;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__21696){
var elem = cljs.core.first(arglist__21696);
var kvs = cljs.core.rest(arglist__21696);
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
{var G__21705 = dommy.template.__GT_node_like.call(null,elem);(G__21705[cljs.core.name.call(null,k)] = v);
return G__21705;
} else
{var G__21706 = dommy.template.__GT_node_like.call(null,elem);G__21706.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__21706;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__21713__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21707_21714 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__21708_21715 = null;var count__21709_21716 = 0;var i__21710_21717 = 0;while(true){
if((i__21710_21717 < count__21709_21716))
{var vec__21711_21718 = cljs.core._nth.call(null,chunk__21708_21715,i__21710_21717);var k_21719__$1 = cljs.core.nth.call(null,vec__21711_21718,0,null);var v_21720__$1 = cljs.core.nth.call(null,vec__21711_21718,1,null);set_attr_BANG_.call(null,elem__$1,k_21719__$1,v_21720__$1);
{
var G__21721 = seq__21707_21714;
var G__21722 = chunk__21708_21715;
var G__21723 = count__21709_21716;
var G__21724 = (i__21710_21717 + 1);
seq__21707_21714 = G__21721;
chunk__21708_21715 = G__21722;
count__21709_21716 = G__21723;
i__21710_21717 = G__21724;
continue;
}
} else
{var temp__4092__auto___21725 = cljs.core.seq.call(null,seq__21707_21714);if(temp__4092__auto___21725)
{var seq__21707_21726__$1 = temp__4092__auto___21725;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21707_21726__$1))
{var c__8355__auto___21727 = cljs.core.chunk_first.call(null,seq__21707_21726__$1);{
var G__21728 = cljs.core.chunk_rest.call(null,seq__21707_21726__$1);
var G__21729 = c__8355__auto___21727;
var G__21730 = cljs.core.count.call(null,c__8355__auto___21727);
var G__21731 = 0;
seq__21707_21714 = G__21728;
chunk__21708_21715 = G__21729;
count__21709_21716 = G__21730;
i__21710_21717 = G__21731;
continue;
}
} else
{var vec__21712_21732 = cljs.core.first.call(null,seq__21707_21726__$1);var k_21733__$1 = cljs.core.nth.call(null,vec__21712_21732,0,null);var v_21734__$1 = cljs.core.nth.call(null,vec__21712_21732,1,null);set_attr_BANG_.call(null,elem__$1,k_21733__$1,v_21734__$1);
{
var G__21735 = cljs.core.next.call(null,seq__21707_21726__$1);
var G__21736 = null;
var G__21737 = 0;
var G__21738 = 0;
seq__21707_21714 = G__21735;
chunk__21708_21715 = G__21736;
count__21709_21716 = G__21737;
i__21710_21717 = G__21738;
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
var G__21713 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__21713__delegate.call(this,elem,k,v,kvs);};
G__21713.cljs$lang$maxFixedArity = 3;
G__21713.cljs$lang$applyTo = (function (arglist__21739){
var elem = cljs.core.first(arglist__21739);
arglist__21739 = cljs.core.next(arglist__21739);
var k = cljs.core.first(arglist__21739);
arglist__21739 = cljs.core.next(arglist__21739);
var v = cljs.core.first(arglist__21739);
var kvs = cljs.core.rest(arglist__21739);
return G__21713__delegate(elem,k,v,kvs);
});
G__21713.cljs$core$IFn$_invoke$arity$variadic = G__21713__delegate;
return G__21713;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__21748__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21744_21749 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__21745_21750 = null;var count__21746_21751 = 0;var i__21747_21752 = 0;while(true){
if((i__21747_21752 < count__21746_21751))
{var k_21753__$1 = cljs.core._nth.call(null,chunk__21745_21750,i__21747_21752);remove_attr_BANG_.call(null,elem__$1,k_21753__$1);
{
var G__21754 = seq__21744_21749;
var G__21755 = chunk__21745_21750;
var G__21756 = count__21746_21751;
var G__21757 = (i__21747_21752 + 1);
seq__21744_21749 = G__21754;
chunk__21745_21750 = G__21755;
count__21746_21751 = G__21756;
i__21747_21752 = G__21757;
continue;
}
} else
{var temp__4092__auto___21758 = cljs.core.seq.call(null,seq__21744_21749);if(temp__4092__auto___21758)
{var seq__21744_21759__$1 = temp__4092__auto___21758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21744_21759__$1))
{var c__8355__auto___21760 = cljs.core.chunk_first.call(null,seq__21744_21759__$1);{
var G__21761 = cljs.core.chunk_rest.call(null,seq__21744_21759__$1);
var G__21762 = c__8355__auto___21760;
var G__21763 = cljs.core.count.call(null,c__8355__auto___21760);
var G__21764 = 0;
seq__21744_21749 = G__21761;
chunk__21745_21750 = G__21762;
count__21746_21751 = G__21763;
i__21747_21752 = G__21764;
continue;
}
} else
{var k_21765__$1 = cljs.core.first.call(null,seq__21744_21759__$1);remove_attr_BANG_.call(null,elem__$1,k_21765__$1);
{
var G__21766 = cljs.core.next.call(null,seq__21744_21759__$1);
var G__21767 = null;
var G__21768 = 0;
var G__21769 = 0;
seq__21744_21749 = G__21766;
chunk__21745_21750 = G__21767;
count__21746_21751 = G__21768;
i__21747_21752 = G__21769;
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
var G__21748 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21748__delegate.call(this,elem,k,ks);};
G__21748.cljs$lang$maxFixedArity = 2;
G__21748.cljs$lang$applyTo = (function (arglist__21770){
var elem = cljs.core.first(arglist__21770);
arglist__21770 = cljs.core.next(arglist__21770);
var k = cljs.core.first(arglist__21770);
var ks = cljs.core.rest(arglist__21770);
return G__21748__delegate(elem,k,ks);
});
G__21748.cljs$core$IFn$_invoke$arity$variadic = G__21748__delegate;
return G__21748;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__21772 = dommy.template.__GT_node_like.call(null,elem);G__21772.style.display = ((show_QMARK_)?"":"none");
return G__21772;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__21774 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21774,false);
return G__21774;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__21776 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21776,true);
return G__21776;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__21778 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__21778["constructor"] = Object);
return G__21778;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
