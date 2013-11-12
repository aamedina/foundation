// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7430__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7430__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7430__auto__;
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
var G__46481 = (i + class$.length);
start_from = G__46481;
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
{var temp__4090__auto___46506 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___46506))
{var class_list_46507 = temp__4090__auto___46506;var seq__46494_46508 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__46495_46509 = null;var count__46496_46510 = 0;var i__46497_46511 = 0;while(true){
if((i__46497_46511 < count__46496_46510))
{var class_46512 = cljs.core._nth.call(null,chunk__46495_46509,i__46497_46511);class_list_46507.add(class_46512);
{
var G__46513 = seq__46494_46508;
var G__46514 = chunk__46495_46509;
var G__46515 = count__46496_46510;
var G__46516 = (i__46497_46511 + 1);
seq__46494_46508 = G__46513;
chunk__46495_46509 = G__46514;
count__46496_46510 = G__46515;
i__46497_46511 = G__46516;
continue;
}
} else
{var temp__4092__auto___46517 = cljs.core.seq.call(null,seq__46494_46508);if(temp__4092__auto___46517)
{var seq__46494_46518__$1 = temp__4092__auto___46517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46494_46518__$1))
{var c__8156__auto___46519 = cljs.core.chunk_first.call(null,seq__46494_46518__$1);{
var G__46520 = cljs.core.chunk_rest.call(null,seq__46494_46518__$1);
var G__46521 = c__8156__auto___46519;
var G__46522 = cljs.core.count.call(null,c__8156__auto___46519);
var G__46523 = 0;
seq__46494_46508 = G__46520;
chunk__46495_46509 = G__46521;
count__46496_46510 = G__46522;
i__46497_46511 = G__46523;
continue;
}
} else
{var class_46524 = cljs.core.first.call(null,seq__46494_46518__$1);class_list_46507.add(class_46524);
{
var G__46525 = cljs.core.next.call(null,seq__46494_46518__$1);
var G__46526 = null;
var G__46527 = 0;
var G__46528 = 0;
seq__46494_46508 = G__46525;
chunk__46495_46509 = G__46526;
count__46496_46510 = G__46527;
i__46497_46511 = G__46528;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_46529 = elem__$1.className;var seq__46498_46530 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__46499_46531 = null;var count__46500_46532 = 0;var i__46501_46533 = 0;while(true){
if((i__46501_46533 < count__46500_46532))
{var class_46534 = cljs.core._nth.call(null,chunk__46499_46531,i__46501_46533);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_46529,class_46534)))
{} else
{elem__$1.className = (((class_name_46529 === ""))?class_46534:[cljs.core.str(class_name_46529),cljs.core.str(" "),cljs.core.str(class_46534)].join(''));
}
{
var G__46535 = seq__46498_46530;
var G__46536 = chunk__46499_46531;
var G__46537 = count__46500_46532;
var G__46538 = (i__46501_46533 + 1);
seq__46498_46530 = G__46535;
chunk__46499_46531 = G__46536;
count__46500_46532 = G__46537;
i__46501_46533 = G__46538;
continue;
}
} else
{var temp__4092__auto___46539 = cljs.core.seq.call(null,seq__46498_46530);if(temp__4092__auto___46539)
{var seq__46498_46540__$1 = temp__4092__auto___46539;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46498_46540__$1))
{var c__8156__auto___46541 = cljs.core.chunk_first.call(null,seq__46498_46540__$1);{
var G__46542 = cljs.core.chunk_rest.call(null,seq__46498_46540__$1);
var G__46543 = c__8156__auto___46541;
var G__46544 = cljs.core.count.call(null,c__8156__auto___46541);
var G__46545 = 0;
seq__46498_46530 = G__46542;
chunk__46499_46531 = G__46543;
count__46500_46532 = G__46544;
i__46501_46533 = G__46545;
continue;
}
} else
{var class_46546 = cljs.core.first.call(null,seq__46498_46540__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_46529,class_46546)))
{} else
{elem__$1.className = (((class_name_46529 === ""))?class_46546:[cljs.core.str(class_name_46529),cljs.core.str(" "),cljs.core.str(class_46546)].join(''));
}
{
var G__46547 = cljs.core.next.call(null,seq__46498_46540__$1);
var G__46548 = null;
var G__46549 = 0;
var G__46550 = 0;
seq__46498_46530 = G__46547;
chunk__46499_46531 = G__46548;
count__46500_46532 = G__46549;
i__46501_46533 = G__46550;
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
var G__46551__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__46502_46552 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__46503_46553 = null;var count__46504_46554 = 0;var i__46505_46555 = 0;while(true){
if((i__46505_46555 < count__46504_46554))
{var c_46556 = cljs.core._nth.call(null,chunk__46503_46553,i__46505_46555);add_class_BANG_.call(null,elem__$1,c_46556);
{
var G__46557 = seq__46502_46552;
var G__46558 = chunk__46503_46553;
var G__46559 = count__46504_46554;
var G__46560 = (i__46505_46555 + 1);
seq__46502_46552 = G__46557;
chunk__46503_46553 = G__46558;
count__46504_46554 = G__46559;
i__46505_46555 = G__46560;
continue;
}
} else
{var temp__4092__auto___46561 = cljs.core.seq.call(null,seq__46502_46552);if(temp__4092__auto___46561)
{var seq__46502_46562__$1 = temp__4092__auto___46561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46502_46562__$1))
{var c__8156__auto___46563 = cljs.core.chunk_first.call(null,seq__46502_46562__$1);{
var G__46564 = cljs.core.chunk_rest.call(null,seq__46502_46562__$1);
var G__46565 = c__8156__auto___46563;
var G__46566 = cljs.core.count.call(null,c__8156__auto___46563);
var G__46567 = 0;
seq__46502_46552 = G__46564;
chunk__46503_46553 = G__46565;
count__46504_46554 = G__46566;
i__46505_46555 = G__46567;
continue;
}
} else
{var c_46568 = cljs.core.first.call(null,seq__46502_46562__$1);add_class_BANG_.call(null,elem__$1,c_46568);
{
var G__46569 = cljs.core.next.call(null,seq__46502_46562__$1);
var G__46570 = null;
var G__46571 = 0;
var G__46572 = 0;
seq__46502_46552 = G__46569;
chunk__46503_46553 = G__46570;
count__46504_46554 = G__46571;
i__46505_46555 = G__46572;
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
var G__46551 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__46551__delegate.call(this,elem,classes,more_classes);};
G__46551.cljs$lang$maxFixedArity = 2;
G__46551.cljs$lang$applyTo = (function (arglist__46573){
var elem = cljs.core.first(arglist__46573);
arglist__46573 = cljs.core.next(arglist__46573);
var classes = cljs.core.first(arglist__46573);
var more_classes = cljs.core.rest(arglist__46573);
return G__46551__delegate(elem,classes,more_classes);
});
G__46551.cljs$core$IFn$_invoke$arity$variadic = G__46551__delegate;
return G__46551;
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
var G__46574 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__46574;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___46583 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___46583))
{var class_list_46584 = temp__4090__auto___46583;class_list_46584.remove(class$__$1);
} else
{var class_name_46585 = elem__$1.className;var new_class_name_46586 = dommy.attrs.remove_class_str.call(null,class_name_46585,class$__$1);if((class_name_46585 === new_class_name_46586))
{} else
{elem__$1.className = new_class_name_46586;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__46587__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__46579 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__46580 = null;var count__46581 = 0;var i__46582 = 0;while(true){
if((i__46582 < count__46581))
{var c = cljs.core._nth.call(null,chunk__46580,i__46582);remove_class_BANG_.call(null,elem__$1,c);
{
var G__46588 = seq__46579;
var G__46589 = chunk__46580;
var G__46590 = count__46581;
var G__46591 = (i__46582 + 1);
seq__46579 = G__46588;
chunk__46580 = G__46589;
count__46581 = G__46590;
i__46582 = G__46591;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46579);if(temp__4092__auto__)
{var seq__46579__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46579__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__46579__$1);{
var G__46592 = cljs.core.chunk_rest.call(null,seq__46579__$1);
var G__46593 = c__8156__auto__;
var G__46594 = cljs.core.count.call(null,c__8156__auto__);
var G__46595 = 0;
seq__46579 = G__46592;
chunk__46580 = G__46593;
count__46581 = G__46594;
i__46582 = G__46595;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__46579__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__46596 = cljs.core.next.call(null,seq__46579__$1);
var G__46597 = null;
var G__46598 = 0;
var G__46599 = 0;
seq__46579 = G__46596;
chunk__46580 = G__46597;
count__46581 = G__46598;
i__46582 = G__46599;
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
var G__46587 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__46587__delegate.call(this,elem,class$,classes);};
G__46587.cljs$lang$maxFixedArity = 2;
G__46587.cljs$lang$applyTo = (function (arglist__46600){
var elem = cljs.core.first(arglist__46600);
arglist__46600 = cljs.core.next(arglist__46600);
var class$ = cljs.core.first(arglist__46600);
var classes = cljs.core.rest(arglist__46600);
return G__46587__delegate(elem,class$,classes);
});
G__46587.cljs$core$IFn$_invoke$arity$variadic = G__46587__delegate;
return G__46587;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___46601 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___46601))
{var class_list_46602 = temp__4090__auto___46601;class_list_46602.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__46605){var vec__46606 = p__46605;var k = cljs.core.nth.call(null,vec__46606,0,null);var v = cljs.core.nth.call(null,vec__46606,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__46613_46619 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__46614_46620 = null;var count__46615_46621 = 0;var i__46616_46622 = 0;while(true){
if((i__46616_46622 < count__46615_46621))
{var vec__46617_46623 = cljs.core._nth.call(null,chunk__46614_46620,i__46616_46622);var k_46624 = cljs.core.nth.call(null,vec__46617_46623,0,null);var v_46625 = cljs.core.nth.call(null,vec__46617_46623,1,null);(style[cljs.core.name.call(null,k_46624)] = v_46625);
{
var G__46626 = seq__46613_46619;
var G__46627 = chunk__46614_46620;
var G__46628 = count__46615_46621;
var G__46629 = (i__46616_46622 + 1);
seq__46613_46619 = G__46626;
chunk__46614_46620 = G__46627;
count__46615_46621 = G__46628;
i__46616_46622 = G__46629;
continue;
}
} else
{var temp__4092__auto___46630 = cljs.core.seq.call(null,seq__46613_46619);if(temp__4092__auto___46630)
{var seq__46613_46631__$1 = temp__4092__auto___46630;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46613_46631__$1))
{var c__8156__auto___46632 = cljs.core.chunk_first.call(null,seq__46613_46631__$1);{
var G__46633 = cljs.core.chunk_rest.call(null,seq__46613_46631__$1);
var G__46634 = c__8156__auto___46632;
var G__46635 = cljs.core.count.call(null,c__8156__auto___46632);
var G__46636 = 0;
seq__46613_46619 = G__46633;
chunk__46614_46620 = G__46634;
count__46615_46621 = G__46635;
i__46616_46622 = G__46636;
continue;
}
} else
{var vec__46618_46637 = cljs.core.first.call(null,seq__46613_46631__$1);var k_46638 = cljs.core.nth.call(null,vec__46618_46637,0,null);var v_46639 = cljs.core.nth.call(null,vec__46618_46637,1,null);(style[cljs.core.name.call(null,k_46638)] = v_46639);
{
var G__46640 = cljs.core.next.call(null,seq__46613_46631__$1);
var G__46641 = null;
var G__46642 = 0;
var G__46643 = 0;
seq__46613_46619 = G__46640;
chunk__46614_46620 = G__46641;
count__46615_46621 = G__46642;
i__46616_46622 = G__46643;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__46644){
var elem = cljs.core.first(arglist__46644);
var kvs = cljs.core.rest(arglist__46644);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__46651_46657 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__46652_46658 = null;var count__46653_46659 = 0;var i__46654_46660 = 0;while(true){
if((i__46654_46660 < count__46653_46659))
{var vec__46655_46661 = cljs.core._nth.call(null,chunk__46652_46658,i__46654_46660);var k_46662 = cljs.core.nth.call(null,vec__46655_46661,0,null);var v_46663 = cljs.core.nth.call(null,vec__46655_46661,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_46662,[cljs.core.str(v_46663),cljs.core.str("px")].join(''));
{
var G__46664 = seq__46651_46657;
var G__46665 = chunk__46652_46658;
var G__46666 = count__46653_46659;
var G__46667 = (i__46654_46660 + 1);
seq__46651_46657 = G__46664;
chunk__46652_46658 = G__46665;
count__46653_46659 = G__46666;
i__46654_46660 = G__46667;
continue;
}
} else
{var temp__4092__auto___46668 = cljs.core.seq.call(null,seq__46651_46657);if(temp__4092__auto___46668)
{var seq__46651_46669__$1 = temp__4092__auto___46668;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46651_46669__$1))
{var c__8156__auto___46670 = cljs.core.chunk_first.call(null,seq__46651_46669__$1);{
var G__46671 = cljs.core.chunk_rest.call(null,seq__46651_46669__$1);
var G__46672 = c__8156__auto___46670;
var G__46673 = cljs.core.count.call(null,c__8156__auto___46670);
var G__46674 = 0;
seq__46651_46657 = G__46671;
chunk__46652_46658 = G__46672;
count__46653_46659 = G__46673;
i__46654_46660 = G__46674;
continue;
}
} else
{var vec__46656_46675 = cljs.core.first.call(null,seq__46651_46669__$1);var k_46676 = cljs.core.nth.call(null,vec__46656_46675,0,null);var v_46677 = cljs.core.nth.call(null,vec__46656_46675,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_46676,[cljs.core.str(v_46677),cljs.core.str("px")].join(''));
{
var G__46678 = cljs.core.next.call(null,seq__46651_46669__$1);
var G__46679 = null;
var G__46680 = 0;
var G__46681 = 0;
seq__46651_46657 = G__46678;
chunk__46652_46658 = G__46679;
count__46653_46659 = G__46680;
i__46654_46660 = G__46681;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__46682){
var elem = cljs.core.first(arglist__46682);
var kvs = cljs.core.rest(arglist__46682);
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
{var G__46691 = dommy.template.__GT_node_like.call(null,elem);(G__46691[cljs.core.name.call(null,k)] = v);
return G__46691;
} else
{var G__46692 = dommy.template.__GT_node_like.call(null,elem);G__46692.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__46692;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__46699__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__46693_46700 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__46694_46701 = null;var count__46695_46702 = 0;var i__46696_46703 = 0;while(true){
if((i__46696_46703 < count__46695_46702))
{var vec__46697_46704 = cljs.core._nth.call(null,chunk__46694_46701,i__46696_46703);var k_46705__$1 = cljs.core.nth.call(null,vec__46697_46704,0,null);var v_46706__$1 = cljs.core.nth.call(null,vec__46697_46704,1,null);set_attr_BANG_.call(null,elem__$1,k_46705__$1,v_46706__$1);
{
var G__46707 = seq__46693_46700;
var G__46708 = chunk__46694_46701;
var G__46709 = count__46695_46702;
var G__46710 = (i__46696_46703 + 1);
seq__46693_46700 = G__46707;
chunk__46694_46701 = G__46708;
count__46695_46702 = G__46709;
i__46696_46703 = G__46710;
continue;
}
} else
{var temp__4092__auto___46711 = cljs.core.seq.call(null,seq__46693_46700);if(temp__4092__auto___46711)
{var seq__46693_46712__$1 = temp__4092__auto___46711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46693_46712__$1))
{var c__8156__auto___46713 = cljs.core.chunk_first.call(null,seq__46693_46712__$1);{
var G__46714 = cljs.core.chunk_rest.call(null,seq__46693_46712__$1);
var G__46715 = c__8156__auto___46713;
var G__46716 = cljs.core.count.call(null,c__8156__auto___46713);
var G__46717 = 0;
seq__46693_46700 = G__46714;
chunk__46694_46701 = G__46715;
count__46695_46702 = G__46716;
i__46696_46703 = G__46717;
continue;
}
} else
{var vec__46698_46718 = cljs.core.first.call(null,seq__46693_46712__$1);var k_46719__$1 = cljs.core.nth.call(null,vec__46698_46718,0,null);var v_46720__$1 = cljs.core.nth.call(null,vec__46698_46718,1,null);set_attr_BANG_.call(null,elem__$1,k_46719__$1,v_46720__$1);
{
var G__46721 = cljs.core.next.call(null,seq__46693_46712__$1);
var G__46722 = null;
var G__46723 = 0;
var G__46724 = 0;
seq__46693_46700 = G__46721;
chunk__46694_46701 = G__46722;
count__46695_46702 = G__46723;
i__46696_46703 = G__46724;
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
var G__46699 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__46699__delegate.call(this,elem,k,v,kvs);};
G__46699.cljs$lang$maxFixedArity = 3;
G__46699.cljs$lang$applyTo = (function (arglist__46725){
var elem = cljs.core.first(arglist__46725);
arglist__46725 = cljs.core.next(arglist__46725);
var k = cljs.core.first(arglist__46725);
arglist__46725 = cljs.core.next(arglist__46725);
var v = cljs.core.first(arglist__46725);
var kvs = cljs.core.rest(arglist__46725);
return G__46699__delegate(elem,k,v,kvs);
});
G__46699.cljs$core$IFn$_invoke$arity$variadic = G__46699__delegate;
return G__46699;
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
var G__46734__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__46730_46735 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__46731_46736 = null;var count__46732_46737 = 0;var i__46733_46738 = 0;while(true){
if((i__46733_46738 < count__46732_46737))
{var k_46739__$1 = cljs.core._nth.call(null,chunk__46731_46736,i__46733_46738);remove_attr_BANG_.call(null,elem__$1,k_46739__$1);
{
var G__46740 = seq__46730_46735;
var G__46741 = chunk__46731_46736;
var G__46742 = count__46732_46737;
var G__46743 = (i__46733_46738 + 1);
seq__46730_46735 = G__46740;
chunk__46731_46736 = G__46741;
count__46732_46737 = G__46742;
i__46733_46738 = G__46743;
continue;
}
} else
{var temp__4092__auto___46744 = cljs.core.seq.call(null,seq__46730_46735);if(temp__4092__auto___46744)
{var seq__46730_46745__$1 = temp__4092__auto___46744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46730_46745__$1))
{var c__8156__auto___46746 = cljs.core.chunk_first.call(null,seq__46730_46745__$1);{
var G__46747 = cljs.core.chunk_rest.call(null,seq__46730_46745__$1);
var G__46748 = c__8156__auto___46746;
var G__46749 = cljs.core.count.call(null,c__8156__auto___46746);
var G__46750 = 0;
seq__46730_46735 = G__46747;
chunk__46731_46736 = G__46748;
count__46732_46737 = G__46749;
i__46733_46738 = G__46750;
continue;
}
} else
{var k_46751__$1 = cljs.core.first.call(null,seq__46730_46745__$1);remove_attr_BANG_.call(null,elem__$1,k_46751__$1);
{
var G__46752 = cljs.core.next.call(null,seq__46730_46745__$1);
var G__46753 = null;
var G__46754 = 0;
var G__46755 = 0;
seq__46730_46735 = G__46752;
chunk__46731_46736 = G__46753;
count__46732_46737 = G__46754;
i__46733_46738 = G__46755;
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
var G__46734 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__46734__delegate.call(this,elem,k,ks);};
G__46734.cljs$lang$maxFixedArity = 2;
G__46734.cljs$lang$applyTo = (function (arglist__46756){
var elem = cljs.core.first(arglist__46756);
arglist__46756 = cljs.core.next(arglist__46756);
var k = cljs.core.first(arglist__46756);
var ks = cljs.core.rest(arglist__46756);
return G__46734__delegate(elem,k,ks);
});
G__46734.cljs$core$IFn$_invoke$arity$variadic = G__46734__delegate;
return G__46734;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__46758 = dommy.template.__GT_node_like.call(null,elem);G__46758.style.display = ((show_QMARK_)?"":"none");
return G__46758;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__46760 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__46760,false);
return G__46760;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__46762 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__46762,true);
return G__46762;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__46764 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__46764["constructor"] = Object);
return G__46764;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
