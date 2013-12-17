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
var G__98431 = (i + class$.length);
start_from = G__98431;
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
{var temp__4090__auto___98456 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___98456))
{var class_list_98457 = temp__4090__auto___98456;var seq__98444_98458 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__98445_98459 = null;var count__98446_98460 = 0;var i__98447_98461 = 0;while(true){
if((i__98447_98461 < count__98446_98460))
{var class_98462 = cljs.core._nth.call(null,chunk__98445_98459,i__98447_98461);class_list_98457.add(class_98462);
{
var G__98463 = seq__98444_98458;
var G__98464 = chunk__98445_98459;
var G__98465 = count__98446_98460;
var G__98466 = (i__98447_98461 + 1);
seq__98444_98458 = G__98463;
chunk__98445_98459 = G__98464;
count__98446_98460 = G__98465;
i__98447_98461 = G__98466;
continue;
}
} else
{var temp__4092__auto___98467 = cljs.core.seq.call(null,seq__98444_98458);if(temp__4092__auto___98467)
{var seq__98444_98468__$1 = temp__4092__auto___98467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98444_98468__$1))
{var c__8552__auto___98469 = cljs.core.chunk_first.call(null,seq__98444_98468__$1);{
var G__98470 = cljs.core.chunk_rest.call(null,seq__98444_98468__$1);
var G__98471 = c__8552__auto___98469;
var G__98472 = cljs.core.count.call(null,c__8552__auto___98469);
var G__98473 = 0;
seq__98444_98458 = G__98470;
chunk__98445_98459 = G__98471;
count__98446_98460 = G__98472;
i__98447_98461 = G__98473;
continue;
}
} else
{var class_98474 = cljs.core.first.call(null,seq__98444_98468__$1);class_list_98457.add(class_98474);
{
var G__98475 = cljs.core.next.call(null,seq__98444_98468__$1);
var G__98476 = null;
var G__98477 = 0;
var G__98478 = 0;
seq__98444_98458 = G__98475;
chunk__98445_98459 = G__98476;
count__98446_98460 = G__98477;
i__98447_98461 = G__98478;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_98479 = elem__$1.className;var seq__98448_98480 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__98449_98481 = null;var count__98450_98482 = 0;var i__98451_98483 = 0;while(true){
if((i__98451_98483 < count__98450_98482))
{var class_98484 = cljs.core._nth.call(null,chunk__98449_98481,i__98451_98483);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_98479,class_98484)))
{} else
{elem__$1.className = (((class_name_98479 === ""))?class_98484:[cljs.core.str(class_name_98479),cljs.core.str(" "),cljs.core.str(class_98484)].join(''));
}
{
var G__98485 = seq__98448_98480;
var G__98486 = chunk__98449_98481;
var G__98487 = count__98450_98482;
var G__98488 = (i__98451_98483 + 1);
seq__98448_98480 = G__98485;
chunk__98449_98481 = G__98486;
count__98450_98482 = G__98487;
i__98451_98483 = G__98488;
continue;
}
} else
{var temp__4092__auto___98489 = cljs.core.seq.call(null,seq__98448_98480);if(temp__4092__auto___98489)
{var seq__98448_98490__$1 = temp__4092__auto___98489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98448_98490__$1))
{var c__8552__auto___98491 = cljs.core.chunk_first.call(null,seq__98448_98490__$1);{
var G__98492 = cljs.core.chunk_rest.call(null,seq__98448_98490__$1);
var G__98493 = c__8552__auto___98491;
var G__98494 = cljs.core.count.call(null,c__8552__auto___98491);
var G__98495 = 0;
seq__98448_98480 = G__98492;
chunk__98449_98481 = G__98493;
count__98450_98482 = G__98494;
i__98451_98483 = G__98495;
continue;
}
} else
{var class_98496 = cljs.core.first.call(null,seq__98448_98490__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_98479,class_98496)))
{} else
{elem__$1.className = (((class_name_98479 === ""))?class_98496:[cljs.core.str(class_name_98479),cljs.core.str(" "),cljs.core.str(class_98496)].join(''));
}
{
var G__98497 = cljs.core.next.call(null,seq__98448_98490__$1);
var G__98498 = null;
var G__98499 = 0;
var G__98500 = 0;
seq__98448_98480 = G__98497;
chunk__98449_98481 = G__98498;
count__98450_98482 = G__98499;
i__98451_98483 = G__98500;
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
var G__98501__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__98452_98502 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__98453_98503 = null;var count__98454_98504 = 0;var i__98455_98505 = 0;while(true){
if((i__98455_98505 < count__98454_98504))
{var c_98506 = cljs.core._nth.call(null,chunk__98453_98503,i__98455_98505);add_class_BANG_.call(null,elem__$1,c_98506);
{
var G__98507 = seq__98452_98502;
var G__98508 = chunk__98453_98503;
var G__98509 = count__98454_98504;
var G__98510 = (i__98455_98505 + 1);
seq__98452_98502 = G__98507;
chunk__98453_98503 = G__98508;
count__98454_98504 = G__98509;
i__98455_98505 = G__98510;
continue;
}
} else
{var temp__4092__auto___98511 = cljs.core.seq.call(null,seq__98452_98502);if(temp__4092__auto___98511)
{var seq__98452_98512__$1 = temp__4092__auto___98511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98452_98512__$1))
{var c__8552__auto___98513 = cljs.core.chunk_first.call(null,seq__98452_98512__$1);{
var G__98514 = cljs.core.chunk_rest.call(null,seq__98452_98512__$1);
var G__98515 = c__8552__auto___98513;
var G__98516 = cljs.core.count.call(null,c__8552__auto___98513);
var G__98517 = 0;
seq__98452_98502 = G__98514;
chunk__98453_98503 = G__98515;
count__98454_98504 = G__98516;
i__98455_98505 = G__98517;
continue;
}
} else
{var c_98518 = cljs.core.first.call(null,seq__98452_98512__$1);add_class_BANG_.call(null,elem__$1,c_98518);
{
var G__98519 = cljs.core.next.call(null,seq__98452_98512__$1);
var G__98520 = null;
var G__98521 = 0;
var G__98522 = 0;
seq__98452_98502 = G__98519;
chunk__98453_98503 = G__98520;
count__98454_98504 = G__98521;
i__98455_98505 = G__98522;
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
var G__98501 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__98501__delegate.call(this,elem,classes,more_classes);};
G__98501.cljs$lang$maxFixedArity = 2;
G__98501.cljs$lang$applyTo = (function (arglist__98523){
var elem = cljs.core.first(arglist__98523);
arglist__98523 = cljs.core.next(arglist__98523);
var classes = cljs.core.first(arglist__98523);
var more_classes = cljs.core.rest(arglist__98523);
return G__98501__delegate(elem,classes,more_classes);
});
G__98501.cljs$core$IFn$_invoke$arity$variadic = G__98501__delegate;
return G__98501;
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
var G__98524 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__98524;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___98533 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___98533))
{var class_list_98534 = temp__4090__auto___98533;class_list_98534.remove(class$__$1);
} else
{var class_name_98535 = elem__$1.className;var new_class_name_98536 = dommy.attrs.remove_class_str.call(null,class_name_98535,class$__$1);if((class_name_98535 === new_class_name_98536))
{} else
{elem__$1.className = new_class_name_98536;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__98537__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__98529 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__98530 = null;var count__98531 = 0;var i__98532 = 0;while(true){
if((i__98532 < count__98531))
{var c = cljs.core._nth.call(null,chunk__98530,i__98532);remove_class_BANG_.call(null,elem__$1,c);
{
var G__98538 = seq__98529;
var G__98539 = chunk__98530;
var G__98540 = count__98531;
var G__98541 = (i__98532 + 1);
seq__98529 = G__98538;
chunk__98530 = G__98539;
count__98531 = G__98540;
i__98532 = G__98541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__98529);if(temp__4092__auto__)
{var seq__98529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98529__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__98529__$1);{
var G__98542 = cljs.core.chunk_rest.call(null,seq__98529__$1);
var G__98543 = c__8552__auto__;
var G__98544 = cljs.core.count.call(null,c__8552__auto__);
var G__98545 = 0;
seq__98529 = G__98542;
chunk__98530 = G__98543;
count__98531 = G__98544;
i__98532 = G__98545;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__98529__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__98546 = cljs.core.next.call(null,seq__98529__$1);
var G__98547 = null;
var G__98548 = 0;
var G__98549 = 0;
seq__98529 = G__98546;
chunk__98530 = G__98547;
count__98531 = G__98548;
i__98532 = G__98549;
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
var G__98537 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__98537__delegate.call(this,elem,class$,classes);};
G__98537.cljs$lang$maxFixedArity = 2;
G__98537.cljs$lang$applyTo = (function (arglist__98550){
var elem = cljs.core.first(arglist__98550);
arglist__98550 = cljs.core.next(arglist__98550);
var class$ = cljs.core.first(arglist__98550);
var classes = cljs.core.rest(arglist__98550);
return G__98537__delegate(elem,class$,classes);
});
G__98537.cljs$core$IFn$_invoke$arity$variadic = G__98537__delegate;
return G__98537;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___98551 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___98551))
{var class_list_98552 = temp__4090__auto___98551;class_list_98552.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__98555){var vec__98556 = p__98555;var k = cljs.core.nth.call(null,vec__98556,0,null);var v = cljs.core.nth.call(null,vec__98556,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__98563_98569 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__98564_98570 = null;var count__98565_98571 = 0;var i__98566_98572 = 0;while(true){
if((i__98566_98572 < count__98565_98571))
{var vec__98567_98573 = cljs.core._nth.call(null,chunk__98564_98570,i__98566_98572);var k_98574 = cljs.core.nth.call(null,vec__98567_98573,0,null);var v_98575 = cljs.core.nth.call(null,vec__98567_98573,1,null);(style[cljs.core.name.call(null,k_98574)] = v_98575);
{
var G__98576 = seq__98563_98569;
var G__98577 = chunk__98564_98570;
var G__98578 = count__98565_98571;
var G__98579 = (i__98566_98572 + 1);
seq__98563_98569 = G__98576;
chunk__98564_98570 = G__98577;
count__98565_98571 = G__98578;
i__98566_98572 = G__98579;
continue;
}
} else
{var temp__4092__auto___98580 = cljs.core.seq.call(null,seq__98563_98569);if(temp__4092__auto___98580)
{var seq__98563_98581__$1 = temp__4092__auto___98580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98563_98581__$1))
{var c__8552__auto___98582 = cljs.core.chunk_first.call(null,seq__98563_98581__$1);{
var G__98583 = cljs.core.chunk_rest.call(null,seq__98563_98581__$1);
var G__98584 = c__8552__auto___98582;
var G__98585 = cljs.core.count.call(null,c__8552__auto___98582);
var G__98586 = 0;
seq__98563_98569 = G__98583;
chunk__98564_98570 = G__98584;
count__98565_98571 = G__98585;
i__98566_98572 = G__98586;
continue;
}
} else
{var vec__98568_98587 = cljs.core.first.call(null,seq__98563_98581__$1);var k_98588 = cljs.core.nth.call(null,vec__98568_98587,0,null);var v_98589 = cljs.core.nth.call(null,vec__98568_98587,1,null);(style[cljs.core.name.call(null,k_98588)] = v_98589);
{
var G__98590 = cljs.core.next.call(null,seq__98563_98581__$1);
var G__98591 = null;
var G__98592 = 0;
var G__98593 = 0;
seq__98563_98569 = G__98590;
chunk__98564_98570 = G__98591;
count__98565_98571 = G__98592;
i__98566_98572 = G__98593;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__98594){
var elem = cljs.core.first(arglist__98594);
var kvs = cljs.core.rest(arglist__98594);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__98601_98607 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__98602_98608 = null;var count__98603_98609 = 0;var i__98604_98610 = 0;while(true){
if((i__98604_98610 < count__98603_98609))
{var vec__98605_98611 = cljs.core._nth.call(null,chunk__98602_98608,i__98604_98610);var k_98612 = cljs.core.nth.call(null,vec__98605_98611,0,null);var v_98613 = cljs.core.nth.call(null,vec__98605_98611,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_98612,[cljs.core.str(v_98613),cljs.core.str("px")].join(''));
{
var G__98614 = seq__98601_98607;
var G__98615 = chunk__98602_98608;
var G__98616 = count__98603_98609;
var G__98617 = (i__98604_98610 + 1);
seq__98601_98607 = G__98614;
chunk__98602_98608 = G__98615;
count__98603_98609 = G__98616;
i__98604_98610 = G__98617;
continue;
}
} else
{var temp__4092__auto___98618 = cljs.core.seq.call(null,seq__98601_98607);if(temp__4092__auto___98618)
{var seq__98601_98619__$1 = temp__4092__auto___98618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98601_98619__$1))
{var c__8552__auto___98620 = cljs.core.chunk_first.call(null,seq__98601_98619__$1);{
var G__98621 = cljs.core.chunk_rest.call(null,seq__98601_98619__$1);
var G__98622 = c__8552__auto___98620;
var G__98623 = cljs.core.count.call(null,c__8552__auto___98620);
var G__98624 = 0;
seq__98601_98607 = G__98621;
chunk__98602_98608 = G__98622;
count__98603_98609 = G__98623;
i__98604_98610 = G__98624;
continue;
}
} else
{var vec__98606_98625 = cljs.core.first.call(null,seq__98601_98619__$1);var k_98626 = cljs.core.nth.call(null,vec__98606_98625,0,null);var v_98627 = cljs.core.nth.call(null,vec__98606_98625,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_98626,[cljs.core.str(v_98627),cljs.core.str("px")].join(''));
{
var G__98628 = cljs.core.next.call(null,seq__98601_98619__$1);
var G__98629 = null;
var G__98630 = 0;
var G__98631 = 0;
seq__98601_98607 = G__98628;
chunk__98602_98608 = G__98629;
count__98603_98609 = G__98630;
i__98604_98610 = G__98631;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__98632){
var elem = cljs.core.first(arglist__98632);
var kvs = cljs.core.rest(arglist__98632);
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
{var G__98641 = dommy.template.__GT_node_like.call(null,elem);(G__98641[cljs.core.name.call(null,k)] = v);
return G__98641;
} else
{var G__98642 = dommy.template.__GT_node_like.call(null,elem);G__98642.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__98642;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__98649__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__98643_98650 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__98644_98651 = null;var count__98645_98652 = 0;var i__98646_98653 = 0;while(true){
if((i__98646_98653 < count__98645_98652))
{var vec__98647_98654 = cljs.core._nth.call(null,chunk__98644_98651,i__98646_98653);var k_98655__$1 = cljs.core.nth.call(null,vec__98647_98654,0,null);var v_98656__$1 = cljs.core.nth.call(null,vec__98647_98654,1,null);set_attr_BANG_.call(null,elem__$1,k_98655__$1,v_98656__$1);
{
var G__98657 = seq__98643_98650;
var G__98658 = chunk__98644_98651;
var G__98659 = count__98645_98652;
var G__98660 = (i__98646_98653 + 1);
seq__98643_98650 = G__98657;
chunk__98644_98651 = G__98658;
count__98645_98652 = G__98659;
i__98646_98653 = G__98660;
continue;
}
} else
{var temp__4092__auto___98661 = cljs.core.seq.call(null,seq__98643_98650);if(temp__4092__auto___98661)
{var seq__98643_98662__$1 = temp__4092__auto___98661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98643_98662__$1))
{var c__8552__auto___98663 = cljs.core.chunk_first.call(null,seq__98643_98662__$1);{
var G__98664 = cljs.core.chunk_rest.call(null,seq__98643_98662__$1);
var G__98665 = c__8552__auto___98663;
var G__98666 = cljs.core.count.call(null,c__8552__auto___98663);
var G__98667 = 0;
seq__98643_98650 = G__98664;
chunk__98644_98651 = G__98665;
count__98645_98652 = G__98666;
i__98646_98653 = G__98667;
continue;
}
} else
{var vec__98648_98668 = cljs.core.first.call(null,seq__98643_98662__$1);var k_98669__$1 = cljs.core.nth.call(null,vec__98648_98668,0,null);var v_98670__$1 = cljs.core.nth.call(null,vec__98648_98668,1,null);set_attr_BANG_.call(null,elem__$1,k_98669__$1,v_98670__$1);
{
var G__98671 = cljs.core.next.call(null,seq__98643_98662__$1);
var G__98672 = null;
var G__98673 = 0;
var G__98674 = 0;
seq__98643_98650 = G__98671;
chunk__98644_98651 = G__98672;
count__98645_98652 = G__98673;
i__98646_98653 = G__98674;
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
var G__98649 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__98649__delegate.call(this,elem,k,v,kvs);};
G__98649.cljs$lang$maxFixedArity = 3;
G__98649.cljs$lang$applyTo = (function (arglist__98675){
var elem = cljs.core.first(arglist__98675);
arglist__98675 = cljs.core.next(arglist__98675);
var k = cljs.core.first(arglist__98675);
arglist__98675 = cljs.core.next(arglist__98675);
var v = cljs.core.first(arglist__98675);
var kvs = cljs.core.rest(arglist__98675);
return G__98649__delegate(elem,k,v,kvs);
});
G__98649.cljs$core$IFn$_invoke$arity$variadic = G__98649__delegate;
return G__98649;
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
var G__98684__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__98680_98685 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__98681_98686 = null;var count__98682_98687 = 0;var i__98683_98688 = 0;while(true){
if((i__98683_98688 < count__98682_98687))
{var k_98689__$1 = cljs.core._nth.call(null,chunk__98681_98686,i__98683_98688);remove_attr_BANG_.call(null,elem__$1,k_98689__$1);
{
var G__98690 = seq__98680_98685;
var G__98691 = chunk__98681_98686;
var G__98692 = count__98682_98687;
var G__98693 = (i__98683_98688 + 1);
seq__98680_98685 = G__98690;
chunk__98681_98686 = G__98691;
count__98682_98687 = G__98692;
i__98683_98688 = G__98693;
continue;
}
} else
{var temp__4092__auto___98694 = cljs.core.seq.call(null,seq__98680_98685);if(temp__4092__auto___98694)
{var seq__98680_98695__$1 = temp__4092__auto___98694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98680_98695__$1))
{var c__8552__auto___98696 = cljs.core.chunk_first.call(null,seq__98680_98695__$1);{
var G__98697 = cljs.core.chunk_rest.call(null,seq__98680_98695__$1);
var G__98698 = c__8552__auto___98696;
var G__98699 = cljs.core.count.call(null,c__8552__auto___98696);
var G__98700 = 0;
seq__98680_98685 = G__98697;
chunk__98681_98686 = G__98698;
count__98682_98687 = G__98699;
i__98683_98688 = G__98700;
continue;
}
} else
{var k_98701__$1 = cljs.core.first.call(null,seq__98680_98695__$1);remove_attr_BANG_.call(null,elem__$1,k_98701__$1);
{
var G__98702 = cljs.core.next.call(null,seq__98680_98695__$1);
var G__98703 = null;
var G__98704 = 0;
var G__98705 = 0;
seq__98680_98685 = G__98702;
chunk__98681_98686 = G__98703;
count__98682_98687 = G__98704;
i__98683_98688 = G__98705;
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
var G__98684 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__98684__delegate.call(this,elem,k,ks);};
G__98684.cljs$lang$maxFixedArity = 2;
G__98684.cljs$lang$applyTo = (function (arglist__98706){
var elem = cljs.core.first(arglist__98706);
arglist__98706 = cljs.core.next(arglist__98706);
var k = cljs.core.first(arglist__98706);
var ks = cljs.core.rest(arglist__98706);
return G__98684__delegate(elem,k,ks);
});
G__98684.cljs$core$IFn$_invoke$arity$variadic = G__98684__delegate;
return G__98684;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__98708 = dommy.template.__GT_node_like.call(null,elem);G__98708.style.display = ((show_QMARK_)?"":"none");
return G__98708;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__98710 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__98710,false);
return G__98710;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__98712 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__98712,true);
return G__98712;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__98714 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__98714["constructor"] = Object);
return G__98714;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
