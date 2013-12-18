// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8233__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8233__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8233__auto__;
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
var G__45575 = (i + class$.length);
start_from = G__45575;
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
{var temp__4090__auto___45600 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45600))
{var class_list_45601 = temp__4090__auto___45600;var seq__45588_45602 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45589_45603 = null;var count__45590_45604 = 0;var i__45591_45605 = 0;while(true){
if((i__45591_45605 < count__45590_45604))
{var class_45606 = cljs.core._nth.call(null,chunk__45589_45603,i__45591_45605);class_list_45601.add(class_45606);
{
var G__45607 = seq__45588_45602;
var G__45608 = chunk__45589_45603;
var G__45609 = count__45590_45604;
var G__45610 = (i__45591_45605 + 1);
seq__45588_45602 = G__45607;
chunk__45589_45603 = G__45608;
count__45590_45604 = G__45609;
i__45591_45605 = G__45610;
continue;
}
} else
{var temp__4092__auto___45611 = cljs.core.seq.call(null,seq__45588_45602);if(temp__4092__auto___45611)
{var seq__45588_45612__$1 = temp__4092__auto___45611;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45588_45612__$1))
{var c__8974__auto___45613 = cljs.core.chunk_first.call(null,seq__45588_45612__$1);{
var G__45614 = cljs.core.chunk_rest.call(null,seq__45588_45612__$1);
var G__45615 = c__8974__auto___45613;
var G__45616 = cljs.core.count.call(null,c__8974__auto___45613);
var G__45617 = 0;
seq__45588_45602 = G__45614;
chunk__45589_45603 = G__45615;
count__45590_45604 = G__45616;
i__45591_45605 = G__45617;
continue;
}
} else
{var class_45618 = cljs.core.first.call(null,seq__45588_45612__$1);class_list_45601.add(class_45618);
{
var G__45619 = cljs.core.next.call(null,seq__45588_45612__$1);
var G__45620 = null;
var G__45621 = 0;
var G__45622 = 0;
seq__45588_45602 = G__45619;
chunk__45589_45603 = G__45620;
count__45590_45604 = G__45621;
i__45591_45605 = G__45622;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_45623 = elem__$1.className;var seq__45592_45624 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45593_45625 = null;var count__45594_45626 = 0;var i__45595_45627 = 0;while(true){
if((i__45595_45627 < count__45594_45626))
{var class_45628 = cljs.core._nth.call(null,chunk__45593_45625,i__45595_45627);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45623,class_45628)))
{} else
{elem__$1.className = (((class_name_45623 === ""))?class_45628:[cljs.core.str(class_name_45623),cljs.core.str(" "),cljs.core.str(class_45628)].join(''));
}
{
var G__45629 = seq__45592_45624;
var G__45630 = chunk__45593_45625;
var G__45631 = count__45594_45626;
var G__45632 = (i__45595_45627 + 1);
seq__45592_45624 = G__45629;
chunk__45593_45625 = G__45630;
count__45594_45626 = G__45631;
i__45595_45627 = G__45632;
continue;
}
} else
{var temp__4092__auto___45633 = cljs.core.seq.call(null,seq__45592_45624);if(temp__4092__auto___45633)
{var seq__45592_45634__$1 = temp__4092__auto___45633;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45592_45634__$1))
{var c__8974__auto___45635 = cljs.core.chunk_first.call(null,seq__45592_45634__$1);{
var G__45636 = cljs.core.chunk_rest.call(null,seq__45592_45634__$1);
var G__45637 = c__8974__auto___45635;
var G__45638 = cljs.core.count.call(null,c__8974__auto___45635);
var G__45639 = 0;
seq__45592_45624 = G__45636;
chunk__45593_45625 = G__45637;
count__45594_45626 = G__45638;
i__45595_45627 = G__45639;
continue;
}
} else
{var class_45640 = cljs.core.first.call(null,seq__45592_45634__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45623,class_45640)))
{} else
{elem__$1.className = (((class_name_45623 === ""))?class_45640:[cljs.core.str(class_name_45623),cljs.core.str(" "),cljs.core.str(class_45640)].join(''));
}
{
var G__45641 = cljs.core.next.call(null,seq__45592_45634__$1);
var G__45642 = null;
var G__45643 = 0;
var G__45644 = 0;
seq__45592_45624 = G__45641;
chunk__45593_45625 = G__45642;
count__45594_45626 = G__45643;
i__45595_45627 = G__45644;
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
var G__45645__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45596_45646 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__45597_45647 = null;var count__45598_45648 = 0;var i__45599_45649 = 0;while(true){
if((i__45599_45649 < count__45598_45648))
{var c_45650 = cljs.core._nth.call(null,chunk__45597_45647,i__45599_45649);add_class_BANG_.call(null,elem__$1,c_45650);
{
var G__45651 = seq__45596_45646;
var G__45652 = chunk__45597_45647;
var G__45653 = count__45598_45648;
var G__45654 = (i__45599_45649 + 1);
seq__45596_45646 = G__45651;
chunk__45597_45647 = G__45652;
count__45598_45648 = G__45653;
i__45599_45649 = G__45654;
continue;
}
} else
{var temp__4092__auto___45655 = cljs.core.seq.call(null,seq__45596_45646);if(temp__4092__auto___45655)
{var seq__45596_45656__$1 = temp__4092__auto___45655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45596_45656__$1))
{var c__8974__auto___45657 = cljs.core.chunk_first.call(null,seq__45596_45656__$1);{
var G__45658 = cljs.core.chunk_rest.call(null,seq__45596_45656__$1);
var G__45659 = c__8974__auto___45657;
var G__45660 = cljs.core.count.call(null,c__8974__auto___45657);
var G__45661 = 0;
seq__45596_45646 = G__45658;
chunk__45597_45647 = G__45659;
count__45598_45648 = G__45660;
i__45599_45649 = G__45661;
continue;
}
} else
{var c_45662 = cljs.core.first.call(null,seq__45596_45656__$1);add_class_BANG_.call(null,elem__$1,c_45662);
{
var G__45663 = cljs.core.next.call(null,seq__45596_45656__$1);
var G__45664 = null;
var G__45665 = 0;
var G__45666 = 0;
seq__45596_45646 = G__45663;
chunk__45597_45647 = G__45664;
count__45598_45648 = G__45665;
i__45599_45649 = G__45666;
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
var G__45645 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45645__delegate.call(this,elem,classes,more_classes);};
G__45645.cljs$lang$maxFixedArity = 2;
G__45645.cljs$lang$applyTo = (function (arglist__45667){
var elem = cljs.core.first(arglist__45667);
arglist__45667 = cljs.core.next(arglist__45667);
var classes = cljs.core.first(arglist__45667);
var more_classes = cljs.core.rest(arglist__45667);
return G__45645__delegate(elem,classes,more_classes);
});
G__45645.cljs$core$IFn$_invoke$arity$variadic = G__45645__delegate;
return G__45645;
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
var G__45668 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__45668;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45677 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45677))
{var class_list_45678 = temp__4090__auto___45677;class_list_45678.remove(class$__$1);
} else
{var class_name_45679 = elem__$1.className;var new_class_name_45680 = dommy.attrs.remove_class_str.call(null,class_name_45679,class$__$1);if((class_name_45679 === new_class_name_45680))
{} else
{elem__$1.className = new_class_name_45680;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__45681__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45673 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__45674 = null;var count__45675 = 0;var i__45676 = 0;while(true){
if((i__45676 < count__45675))
{var c = cljs.core._nth.call(null,chunk__45674,i__45676);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45682 = seq__45673;
var G__45683 = chunk__45674;
var G__45684 = count__45675;
var G__45685 = (i__45676 + 1);
seq__45673 = G__45682;
chunk__45674 = G__45683;
count__45675 = G__45684;
i__45676 = G__45685;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45673);if(temp__4092__auto__)
{var seq__45673__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45673__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__45673__$1);{
var G__45686 = cljs.core.chunk_rest.call(null,seq__45673__$1);
var G__45687 = c__8974__auto__;
var G__45688 = cljs.core.count.call(null,c__8974__auto__);
var G__45689 = 0;
seq__45673 = G__45686;
chunk__45674 = G__45687;
count__45675 = G__45688;
i__45676 = G__45689;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__45673__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45690 = cljs.core.next.call(null,seq__45673__$1);
var G__45691 = null;
var G__45692 = 0;
var G__45693 = 0;
seq__45673 = G__45690;
chunk__45674 = G__45691;
count__45675 = G__45692;
i__45676 = G__45693;
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
var G__45681 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45681__delegate.call(this,elem,class$,classes);};
G__45681.cljs$lang$maxFixedArity = 2;
G__45681.cljs$lang$applyTo = (function (arglist__45694){
var elem = cljs.core.first(arglist__45694);
arglist__45694 = cljs.core.next(arglist__45694);
var class$ = cljs.core.first(arglist__45694);
var classes = cljs.core.rest(arglist__45694);
return G__45681__delegate(elem,class$,classes);
});
G__45681.cljs$core$IFn$_invoke$arity$variadic = G__45681__delegate;
return G__45681;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45695 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45695))
{var class_list_45696 = temp__4090__auto___45695;class_list_45696.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__45699){var vec__45700 = p__45699;var k = cljs.core.nth.call(null,vec__45700,0,null);var v = cljs.core.nth.call(null,vec__45700,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__45707_45713 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45708_45714 = null;var count__45709_45715 = 0;var i__45710_45716 = 0;while(true){
if((i__45710_45716 < count__45709_45715))
{var vec__45711_45717 = cljs.core._nth.call(null,chunk__45708_45714,i__45710_45716);var k_45718 = cljs.core.nth.call(null,vec__45711_45717,0,null);var v_45719 = cljs.core.nth.call(null,vec__45711_45717,1,null);(style[cljs.core.name.call(null,k_45718)] = v_45719);
{
var G__45720 = seq__45707_45713;
var G__45721 = chunk__45708_45714;
var G__45722 = count__45709_45715;
var G__45723 = (i__45710_45716 + 1);
seq__45707_45713 = G__45720;
chunk__45708_45714 = G__45721;
count__45709_45715 = G__45722;
i__45710_45716 = G__45723;
continue;
}
} else
{var temp__4092__auto___45724 = cljs.core.seq.call(null,seq__45707_45713);if(temp__4092__auto___45724)
{var seq__45707_45725__$1 = temp__4092__auto___45724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45707_45725__$1))
{var c__8974__auto___45726 = cljs.core.chunk_first.call(null,seq__45707_45725__$1);{
var G__45727 = cljs.core.chunk_rest.call(null,seq__45707_45725__$1);
var G__45728 = c__8974__auto___45726;
var G__45729 = cljs.core.count.call(null,c__8974__auto___45726);
var G__45730 = 0;
seq__45707_45713 = G__45727;
chunk__45708_45714 = G__45728;
count__45709_45715 = G__45729;
i__45710_45716 = G__45730;
continue;
}
} else
{var vec__45712_45731 = cljs.core.first.call(null,seq__45707_45725__$1);var k_45732 = cljs.core.nth.call(null,vec__45712_45731,0,null);var v_45733 = cljs.core.nth.call(null,vec__45712_45731,1,null);(style[cljs.core.name.call(null,k_45732)] = v_45733);
{
var G__45734 = cljs.core.next.call(null,seq__45707_45725__$1);
var G__45735 = null;
var G__45736 = 0;
var G__45737 = 0;
seq__45707_45713 = G__45734;
chunk__45708_45714 = G__45735;
count__45709_45715 = G__45736;
i__45710_45716 = G__45737;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__45738){
var elem = cljs.core.first(arglist__45738);
var kvs = cljs.core.rest(arglist__45738);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45745_45751 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45746_45752 = null;var count__45747_45753 = 0;var i__45748_45754 = 0;while(true){
if((i__45748_45754 < count__45747_45753))
{var vec__45749_45755 = cljs.core._nth.call(null,chunk__45746_45752,i__45748_45754);var k_45756 = cljs.core.nth.call(null,vec__45749_45755,0,null);var v_45757 = cljs.core.nth.call(null,vec__45749_45755,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45756,[cljs.core.str(v_45757),cljs.core.str("px")].join(''));
{
var G__45758 = seq__45745_45751;
var G__45759 = chunk__45746_45752;
var G__45760 = count__45747_45753;
var G__45761 = (i__45748_45754 + 1);
seq__45745_45751 = G__45758;
chunk__45746_45752 = G__45759;
count__45747_45753 = G__45760;
i__45748_45754 = G__45761;
continue;
}
} else
{var temp__4092__auto___45762 = cljs.core.seq.call(null,seq__45745_45751);if(temp__4092__auto___45762)
{var seq__45745_45763__$1 = temp__4092__auto___45762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45745_45763__$1))
{var c__8974__auto___45764 = cljs.core.chunk_first.call(null,seq__45745_45763__$1);{
var G__45765 = cljs.core.chunk_rest.call(null,seq__45745_45763__$1);
var G__45766 = c__8974__auto___45764;
var G__45767 = cljs.core.count.call(null,c__8974__auto___45764);
var G__45768 = 0;
seq__45745_45751 = G__45765;
chunk__45746_45752 = G__45766;
count__45747_45753 = G__45767;
i__45748_45754 = G__45768;
continue;
}
} else
{var vec__45750_45769 = cljs.core.first.call(null,seq__45745_45763__$1);var k_45770 = cljs.core.nth.call(null,vec__45750_45769,0,null);var v_45771 = cljs.core.nth.call(null,vec__45750_45769,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45770,[cljs.core.str(v_45771),cljs.core.str("px")].join(''));
{
var G__45772 = cljs.core.next.call(null,seq__45745_45763__$1);
var G__45773 = null;
var G__45774 = 0;
var G__45775 = 0;
seq__45745_45751 = G__45772;
chunk__45746_45752 = G__45773;
count__45747_45753 = G__45774;
i__45748_45754 = G__45775;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__45776){
var elem = cljs.core.first(arglist__45776);
var kvs = cljs.core.rest(arglist__45776);
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
{var G__45785 = dommy.template.__GT_node_like.call(null,elem);(G__45785[cljs.core.name.call(null,k)] = v);
return G__45785;
} else
{var G__45786 = dommy.template.__GT_node_like.call(null,elem);G__45786.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__45786;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__45793__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45787_45794 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__45788_45795 = null;var count__45789_45796 = 0;var i__45790_45797 = 0;while(true){
if((i__45790_45797 < count__45789_45796))
{var vec__45791_45798 = cljs.core._nth.call(null,chunk__45788_45795,i__45790_45797);var k_45799__$1 = cljs.core.nth.call(null,vec__45791_45798,0,null);var v_45800__$1 = cljs.core.nth.call(null,vec__45791_45798,1,null);set_attr_BANG_.call(null,elem__$1,k_45799__$1,v_45800__$1);
{
var G__45801 = seq__45787_45794;
var G__45802 = chunk__45788_45795;
var G__45803 = count__45789_45796;
var G__45804 = (i__45790_45797 + 1);
seq__45787_45794 = G__45801;
chunk__45788_45795 = G__45802;
count__45789_45796 = G__45803;
i__45790_45797 = G__45804;
continue;
}
} else
{var temp__4092__auto___45805 = cljs.core.seq.call(null,seq__45787_45794);if(temp__4092__auto___45805)
{var seq__45787_45806__$1 = temp__4092__auto___45805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45787_45806__$1))
{var c__8974__auto___45807 = cljs.core.chunk_first.call(null,seq__45787_45806__$1);{
var G__45808 = cljs.core.chunk_rest.call(null,seq__45787_45806__$1);
var G__45809 = c__8974__auto___45807;
var G__45810 = cljs.core.count.call(null,c__8974__auto___45807);
var G__45811 = 0;
seq__45787_45794 = G__45808;
chunk__45788_45795 = G__45809;
count__45789_45796 = G__45810;
i__45790_45797 = G__45811;
continue;
}
} else
{var vec__45792_45812 = cljs.core.first.call(null,seq__45787_45806__$1);var k_45813__$1 = cljs.core.nth.call(null,vec__45792_45812,0,null);var v_45814__$1 = cljs.core.nth.call(null,vec__45792_45812,1,null);set_attr_BANG_.call(null,elem__$1,k_45813__$1,v_45814__$1);
{
var G__45815 = cljs.core.next.call(null,seq__45787_45806__$1);
var G__45816 = null;
var G__45817 = 0;
var G__45818 = 0;
seq__45787_45794 = G__45815;
chunk__45788_45795 = G__45816;
count__45789_45796 = G__45817;
i__45790_45797 = G__45818;
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
var G__45793 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45793__delegate.call(this,elem,k,v,kvs);};
G__45793.cljs$lang$maxFixedArity = 3;
G__45793.cljs$lang$applyTo = (function (arglist__45819){
var elem = cljs.core.first(arglist__45819);
arglist__45819 = cljs.core.next(arglist__45819);
var k = cljs.core.first(arglist__45819);
arglist__45819 = cljs.core.next(arglist__45819);
var v = cljs.core.first(arglist__45819);
var kvs = cljs.core.rest(arglist__45819);
return G__45793__delegate(elem,k,v,kvs);
});
G__45793.cljs$core$IFn$_invoke$arity$variadic = G__45793__delegate;
return G__45793;
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
var G__45828__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45824_45829 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__45825_45830 = null;var count__45826_45831 = 0;var i__45827_45832 = 0;while(true){
if((i__45827_45832 < count__45826_45831))
{var k_45833__$1 = cljs.core._nth.call(null,chunk__45825_45830,i__45827_45832);remove_attr_BANG_.call(null,elem__$1,k_45833__$1);
{
var G__45834 = seq__45824_45829;
var G__45835 = chunk__45825_45830;
var G__45836 = count__45826_45831;
var G__45837 = (i__45827_45832 + 1);
seq__45824_45829 = G__45834;
chunk__45825_45830 = G__45835;
count__45826_45831 = G__45836;
i__45827_45832 = G__45837;
continue;
}
} else
{var temp__4092__auto___45838 = cljs.core.seq.call(null,seq__45824_45829);if(temp__4092__auto___45838)
{var seq__45824_45839__$1 = temp__4092__auto___45838;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45824_45839__$1))
{var c__8974__auto___45840 = cljs.core.chunk_first.call(null,seq__45824_45839__$1);{
var G__45841 = cljs.core.chunk_rest.call(null,seq__45824_45839__$1);
var G__45842 = c__8974__auto___45840;
var G__45843 = cljs.core.count.call(null,c__8974__auto___45840);
var G__45844 = 0;
seq__45824_45829 = G__45841;
chunk__45825_45830 = G__45842;
count__45826_45831 = G__45843;
i__45827_45832 = G__45844;
continue;
}
} else
{var k_45845__$1 = cljs.core.first.call(null,seq__45824_45839__$1);remove_attr_BANG_.call(null,elem__$1,k_45845__$1);
{
var G__45846 = cljs.core.next.call(null,seq__45824_45839__$1);
var G__45847 = null;
var G__45848 = 0;
var G__45849 = 0;
seq__45824_45829 = G__45846;
chunk__45825_45830 = G__45847;
count__45826_45831 = G__45848;
i__45827_45832 = G__45849;
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
var G__45828 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45828__delegate.call(this,elem,k,ks);};
G__45828.cljs$lang$maxFixedArity = 2;
G__45828.cljs$lang$applyTo = (function (arglist__45850){
var elem = cljs.core.first(arglist__45850);
arglist__45850 = cljs.core.next(arglist__45850);
var k = cljs.core.first(arglist__45850);
var ks = cljs.core.rest(arglist__45850);
return G__45828__delegate(elem,k,ks);
});
G__45828.cljs$core$IFn$_invoke$arity$variadic = G__45828__delegate;
return G__45828;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__45852 = dommy.template.__GT_node_like.call(null,elem);G__45852.style.display = ((show_QMARK_)?"":"none");
return G__45852;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__45854 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45854,false);
return G__45854;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__45856 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45856,true);
return G__45856;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__45858 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__45858["constructor"] = Object);
return G__45858;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map