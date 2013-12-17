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
var G__340590 = (i + class$.length);
start_from = G__340590;
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
{var temp__4090__auto___340615 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___340615))
{var class_list_340616 = temp__4090__auto___340615;var seq__340603_340617 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__340604_340618 = null;var count__340605_340619 = 0;var i__340606_340620 = 0;while(true){
if((i__340606_340620 < count__340605_340619))
{var class_340621 = cljs.core._nth.call(null,chunk__340604_340618,i__340606_340620);class_list_340616.add(class_340621);
{
var G__340622 = seq__340603_340617;
var G__340623 = chunk__340604_340618;
var G__340624 = count__340605_340619;
var G__340625 = (i__340606_340620 + 1);
seq__340603_340617 = G__340622;
chunk__340604_340618 = G__340623;
count__340605_340619 = G__340624;
i__340606_340620 = G__340625;
continue;
}
} else
{var temp__4092__auto___340626 = cljs.core.seq.call(null,seq__340603_340617);if(temp__4092__auto___340626)
{var seq__340603_340627__$1 = temp__4092__auto___340626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340603_340627__$1))
{var c__14547__auto___340628 = cljs.core.chunk_first.call(null,seq__340603_340627__$1);{
var G__340629 = cljs.core.chunk_rest.call(null,seq__340603_340627__$1);
var G__340630 = c__14547__auto___340628;
var G__340631 = cljs.core.count.call(null,c__14547__auto___340628);
var G__340632 = 0;
seq__340603_340617 = G__340629;
chunk__340604_340618 = G__340630;
count__340605_340619 = G__340631;
i__340606_340620 = G__340632;
continue;
}
} else
{var class_340633 = cljs.core.first.call(null,seq__340603_340627__$1);class_list_340616.add(class_340633);
{
var G__340634 = cljs.core.next.call(null,seq__340603_340627__$1);
var G__340635 = null;
var G__340636 = 0;
var G__340637 = 0;
seq__340603_340617 = G__340634;
chunk__340604_340618 = G__340635;
count__340605_340619 = G__340636;
i__340606_340620 = G__340637;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_340638 = elem__$1.className;var seq__340607_340639 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__340608_340640 = null;var count__340609_340641 = 0;var i__340610_340642 = 0;while(true){
if((i__340610_340642 < count__340609_340641))
{var class_340643 = cljs.core._nth.call(null,chunk__340608_340640,i__340610_340642);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_340638,class_340643)))
{} else
{elem__$1.className = (((class_name_340638 === ""))?class_340643:[cljs.core.str(class_name_340638),cljs.core.str(" "),cljs.core.str(class_340643)].join(''));
}
{
var G__340644 = seq__340607_340639;
var G__340645 = chunk__340608_340640;
var G__340646 = count__340609_340641;
var G__340647 = (i__340610_340642 + 1);
seq__340607_340639 = G__340644;
chunk__340608_340640 = G__340645;
count__340609_340641 = G__340646;
i__340610_340642 = G__340647;
continue;
}
} else
{var temp__4092__auto___340648 = cljs.core.seq.call(null,seq__340607_340639);if(temp__4092__auto___340648)
{var seq__340607_340649__$1 = temp__4092__auto___340648;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340607_340649__$1))
{var c__14547__auto___340650 = cljs.core.chunk_first.call(null,seq__340607_340649__$1);{
var G__340651 = cljs.core.chunk_rest.call(null,seq__340607_340649__$1);
var G__340652 = c__14547__auto___340650;
var G__340653 = cljs.core.count.call(null,c__14547__auto___340650);
var G__340654 = 0;
seq__340607_340639 = G__340651;
chunk__340608_340640 = G__340652;
count__340609_340641 = G__340653;
i__340610_340642 = G__340654;
continue;
}
} else
{var class_340655 = cljs.core.first.call(null,seq__340607_340649__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_340638,class_340655)))
{} else
{elem__$1.className = (((class_name_340638 === ""))?class_340655:[cljs.core.str(class_name_340638),cljs.core.str(" "),cljs.core.str(class_340655)].join(''));
}
{
var G__340656 = cljs.core.next.call(null,seq__340607_340649__$1);
var G__340657 = null;
var G__340658 = 0;
var G__340659 = 0;
seq__340607_340639 = G__340656;
chunk__340608_340640 = G__340657;
count__340609_340641 = G__340658;
i__340610_340642 = G__340659;
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
var G__340660__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__340611_340661 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__340612_340662 = null;var count__340613_340663 = 0;var i__340614_340664 = 0;while(true){
if((i__340614_340664 < count__340613_340663))
{var c_340665 = cljs.core._nth.call(null,chunk__340612_340662,i__340614_340664);add_class_BANG_.call(null,elem__$1,c_340665);
{
var G__340666 = seq__340611_340661;
var G__340667 = chunk__340612_340662;
var G__340668 = count__340613_340663;
var G__340669 = (i__340614_340664 + 1);
seq__340611_340661 = G__340666;
chunk__340612_340662 = G__340667;
count__340613_340663 = G__340668;
i__340614_340664 = G__340669;
continue;
}
} else
{var temp__4092__auto___340670 = cljs.core.seq.call(null,seq__340611_340661);if(temp__4092__auto___340670)
{var seq__340611_340671__$1 = temp__4092__auto___340670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340611_340671__$1))
{var c__14547__auto___340672 = cljs.core.chunk_first.call(null,seq__340611_340671__$1);{
var G__340673 = cljs.core.chunk_rest.call(null,seq__340611_340671__$1);
var G__340674 = c__14547__auto___340672;
var G__340675 = cljs.core.count.call(null,c__14547__auto___340672);
var G__340676 = 0;
seq__340611_340661 = G__340673;
chunk__340612_340662 = G__340674;
count__340613_340663 = G__340675;
i__340614_340664 = G__340676;
continue;
}
} else
{var c_340677 = cljs.core.first.call(null,seq__340611_340671__$1);add_class_BANG_.call(null,elem__$1,c_340677);
{
var G__340678 = cljs.core.next.call(null,seq__340611_340671__$1);
var G__340679 = null;
var G__340680 = 0;
var G__340681 = 0;
seq__340611_340661 = G__340678;
chunk__340612_340662 = G__340679;
count__340613_340663 = G__340680;
i__340614_340664 = G__340681;
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
var G__340660 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__340660__delegate.call(this,elem,classes,more_classes);};
G__340660.cljs$lang$maxFixedArity = 2;
G__340660.cljs$lang$applyTo = (function (arglist__340682){
var elem = cljs.core.first(arglist__340682);
arglist__340682 = cljs.core.next(arglist__340682);
var classes = cljs.core.first(arglist__340682);
var more_classes = cljs.core.rest(arglist__340682);
return G__340660__delegate(elem,classes,more_classes);
});
G__340660.cljs$core$IFn$_invoke$arity$variadic = G__340660__delegate;
return G__340660;
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
var G__340683 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__340683;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___340692 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___340692))
{var class_list_340693 = temp__4090__auto___340692;class_list_340693.remove(class$__$1);
} else
{var class_name_340694 = elem__$1.className;var new_class_name_340695 = dommy.attrs.remove_class_str.call(null,class_name_340694,class$__$1);if((class_name_340694 === new_class_name_340695))
{} else
{elem__$1.className = new_class_name_340695;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__340696__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__340688 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__340689 = null;var count__340690 = 0;var i__340691 = 0;while(true){
if((i__340691 < count__340690))
{var c = cljs.core._nth.call(null,chunk__340689,i__340691);remove_class_BANG_.call(null,elem__$1,c);
{
var G__340697 = seq__340688;
var G__340698 = chunk__340689;
var G__340699 = count__340690;
var G__340700 = (i__340691 + 1);
seq__340688 = G__340697;
chunk__340689 = G__340698;
count__340690 = G__340699;
i__340691 = G__340700;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__340688);if(temp__4092__auto__)
{var seq__340688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340688__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__340688__$1);{
var G__340701 = cljs.core.chunk_rest.call(null,seq__340688__$1);
var G__340702 = c__14547__auto__;
var G__340703 = cljs.core.count.call(null,c__14547__auto__);
var G__340704 = 0;
seq__340688 = G__340701;
chunk__340689 = G__340702;
count__340690 = G__340703;
i__340691 = G__340704;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__340688__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__340705 = cljs.core.next.call(null,seq__340688__$1);
var G__340706 = null;
var G__340707 = 0;
var G__340708 = 0;
seq__340688 = G__340705;
chunk__340689 = G__340706;
count__340690 = G__340707;
i__340691 = G__340708;
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
var G__340696 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__340696__delegate.call(this,elem,class$,classes);};
G__340696.cljs$lang$maxFixedArity = 2;
G__340696.cljs$lang$applyTo = (function (arglist__340709){
var elem = cljs.core.first(arglist__340709);
arglist__340709 = cljs.core.next(arglist__340709);
var class$ = cljs.core.first(arglist__340709);
var classes = cljs.core.rest(arglist__340709);
return G__340696__delegate(elem,class$,classes);
});
G__340696.cljs$core$IFn$_invoke$arity$variadic = G__340696__delegate;
return G__340696;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___340710 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___340710))
{var class_list_340711 = temp__4090__auto___340710;class_list_340711.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__340714){var vec__340715 = p__340714;var k = cljs.core.nth.call(null,vec__340715,0,null);var v = cljs.core.nth.call(null,vec__340715,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__340722_340728 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__340723_340729 = null;var count__340724_340730 = 0;var i__340725_340731 = 0;while(true){
if((i__340725_340731 < count__340724_340730))
{var vec__340726_340732 = cljs.core._nth.call(null,chunk__340723_340729,i__340725_340731);var k_340733 = cljs.core.nth.call(null,vec__340726_340732,0,null);var v_340734 = cljs.core.nth.call(null,vec__340726_340732,1,null);(style[cljs.core.name.call(null,k_340733)] = v_340734);
{
var G__340735 = seq__340722_340728;
var G__340736 = chunk__340723_340729;
var G__340737 = count__340724_340730;
var G__340738 = (i__340725_340731 + 1);
seq__340722_340728 = G__340735;
chunk__340723_340729 = G__340736;
count__340724_340730 = G__340737;
i__340725_340731 = G__340738;
continue;
}
} else
{var temp__4092__auto___340739 = cljs.core.seq.call(null,seq__340722_340728);if(temp__4092__auto___340739)
{var seq__340722_340740__$1 = temp__4092__auto___340739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340722_340740__$1))
{var c__14547__auto___340741 = cljs.core.chunk_first.call(null,seq__340722_340740__$1);{
var G__340742 = cljs.core.chunk_rest.call(null,seq__340722_340740__$1);
var G__340743 = c__14547__auto___340741;
var G__340744 = cljs.core.count.call(null,c__14547__auto___340741);
var G__340745 = 0;
seq__340722_340728 = G__340742;
chunk__340723_340729 = G__340743;
count__340724_340730 = G__340744;
i__340725_340731 = G__340745;
continue;
}
} else
{var vec__340727_340746 = cljs.core.first.call(null,seq__340722_340740__$1);var k_340747 = cljs.core.nth.call(null,vec__340727_340746,0,null);var v_340748 = cljs.core.nth.call(null,vec__340727_340746,1,null);(style[cljs.core.name.call(null,k_340747)] = v_340748);
{
var G__340749 = cljs.core.next.call(null,seq__340722_340740__$1);
var G__340750 = null;
var G__340751 = 0;
var G__340752 = 0;
seq__340722_340728 = G__340749;
chunk__340723_340729 = G__340750;
count__340724_340730 = G__340751;
i__340725_340731 = G__340752;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__340753){
var elem = cljs.core.first(arglist__340753);
var kvs = cljs.core.rest(arglist__340753);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__340760_340766 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__340761_340767 = null;var count__340762_340768 = 0;var i__340763_340769 = 0;while(true){
if((i__340763_340769 < count__340762_340768))
{var vec__340764_340770 = cljs.core._nth.call(null,chunk__340761_340767,i__340763_340769);var k_340771 = cljs.core.nth.call(null,vec__340764_340770,0,null);var v_340772 = cljs.core.nth.call(null,vec__340764_340770,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_340771,[cljs.core.str(v_340772),cljs.core.str("px")].join(''));
{
var G__340773 = seq__340760_340766;
var G__340774 = chunk__340761_340767;
var G__340775 = count__340762_340768;
var G__340776 = (i__340763_340769 + 1);
seq__340760_340766 = G__340773;
chunk__340761_340767 = G__340774;
count__340762_340768 = G__340775;
i__340763_340769 = G__340776;
continue;
}
} else
{var temp__4092__auto___340777 = cljs.core.seq.call(null,seq__340760_340766);if(temp__4092__auto___340777)
{var seq__340760_340778__$1 = temp__4092__auto___340777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340760_340778__$1))
{var c__14547__auto___340779 = cljs.core.chunk_first.call(null,seq__340760_340778__$1);{
var G__340780 = cljs.core.chunk_rest.call(null,seq__340760_340778__$1);
var G__340781 = c__14547__auto___340779;
var G__340782 = cljs.core.count.call(null,c__14547__auto___340779);
var G__340783 = 0;
seq__340760_340766 = G__340780;
chunk__340761_340767 = G__340781;
count__340762_340768 = G__340782;
i__340763_340769 = G__340783;
continue;
}
} else
{var vec__340765_340784 = cljs.core.first.call(null,seq__340760_340778__$1);var k_340785 = cljs.core.nth.call(null,vec__340765_340784,0,null);var v_340786 = cljs.core.nth.call(null,vec__340765_340784,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_340785,[cljs.core.str(v_340786),cljs.core.str("px")].join(''));
{
var G__340787 = cljs.core.next.call(null,seq__340760_340778__$1);
var G__340788 = null;
var G__340789 = 0;
var G__340790 = 0;
seq__340760_340766 = G__340787;
chunk__340761_340767 = G__340788;
count__340762_340768 = G__340789;
i__340763_340769 = G__340790;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__340791){
var elem = cljs.core.first(arglist__340791);
var kvs = cljs.core.rest(arglist__340791);
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
{var G__340800 = dommy.template.__GT_node_like.call(null,elem);(G__340800[cljs.core.name.call(null,k)] = v);
return G__340800;
} else
{var G__340801 = dommy.template.__GT_node_like.call(null,elem);G__340801.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__340801;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__340808__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__340802_340809 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__340803_340810 = null;var count__340804_340811 = 0;var i__340805_340812 = 0;while(true){
if((i__340805_340812 < count__340804_340811))
{var vec__340806_340813 = cljs.core._nth.call(null,chunk__340803_340810,i__340805_340812);var k_340814__$1 = cljs.core.nth.call(null,vec__340806_340813,0,null);var v_340815__$1 = cljs.core.nth.call(null,vec__340806_340813,1,null);set_attr_BANG_.call(null,elem__$1,k_340814__$1,v_340815__$1);
{
var G__340816 = seq__340802_340809;
var G__340817 = chunk__340803_340810;
var G__340818 = count__340804_340811;
var G__340819 = (i__340805_340812 + 1);
seq__340802_340809 = G__340816;
chunk__340803_340810 = G__340817;
count__340804_340811 = G__340818;
i__340805_340812 = G__340819;
continue;
}
} else
{var temp__4092__auto___340820 = cljs.core.seq.call(null,seq__340802_340809);if(temp__4092__auto___340820)
{var seq__340802_340821__$1 = temp__4092__auto___340820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340802_340821__$1))
{var c__14547__auto___340822 = cljs.core.chunk_first.call(null,seq__340802_340821__$1);{
var G__340823 = cljs.core.chunk_rest.call(null,seq__340802_340821__$1);
var G__340824 = c__14547__auto___340822;
var G__340825 = cljs.core.count.call(null,c__14547__auto___340822);
var G__340826 = 0;
seq__340802_340809 = G__340823;
chunk__340803_340810 = G__340824;
count__340804_340811 = G__340825;
i__340805_340812 = G__340826;
continue;
}
} else
{var vec__340807_340827 = cljs.core.first.call(null,seq__340802_340821__$1);var k_340828__$1 = cljs.core.nth.call(null,vec__340807_340827,0,null);var v_340829__$1 = cljs.core.nth.call(null,vec__340807_340827,1,null);set_attr_BANG_.call(null,elem__$1,k_340828__$1,v_340829__$1);
{
var G__340830 = cljs.core.next.call(null,seq__340802_340821__$1);
var G__340831 = null;
var G__340832 = 0;
var G__340833 = 0;
seq__340802_340809 = G__340830;
chunk__340803_340810 = G__340831;
count__340804_340811 = G__340832;
i__340805_340812 = G__340833;
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
var G__340808 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__340808__delegate.call(this,elem,k,v,kvs);};
G__340808.cljs$lang$maxFixedArity = 3;
G__340808.cljs$lang$applyTo = (function (arglist__340834){
var elem = cljs.core.first(arglist__340834);
arglist__340834 = cljs.core.next(arglist__340834);
var k = cljs.core.first(arglist__340834);
arglist__340834 = cljs.core.next(arglist__340834);
var v = cljs.core.first(arglist__340834);
var kvs = cljs.core.rest(arglist__340834);
return G__340808__delegate(elem,k,v,kvs);
});
G__340808.cljs$core$IFn$_invoke$arity$variadic = G__340808__delegate;
return G__340808;
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
var G__340843__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__340839_340844 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__340840_340845 = null;var count__340841_340846 = 0;var i__340842_340847 = 0;while(true){
if((i__340842_340847 < count__340841_340846))
{var k_340848__$1 = cljs.core._nth.call(null,chunk__340840_340845,i__340842_340847);remove_attr_BANG_.call(null,elem__$1,k_340848__$1);
{
var G__340849 = seq__340839_340844;
var G__340850 = chunk__340840_340845;
var G__340851 = count__340841_340846;
var G__340852 = (i__340842_340847 + 1);
seq__340839_340844 = G__340849;
chunk__340840_340845 = G__340850;
count__340841_340846 = G__340851;
i__340842_340847 = G__340852;
continue;
}
} else
{var temp__4092__auto___340853 = cljs.core.seq.call(null,seq__340839_340844);if(temp__4092__auto___340853)
{var seq__340839_340854__$1 = temp__4092__auto___340853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340839_340854__$1))
{var c__14547__auto___340855 = cljs.core.chunk_first.call(null,seq__340839_340854__$1);{
var G__340856 = cljs.core.chunk_rest.call(null,seq__340839_340854__$1);
var G__340857 = c__14547__auto___340855;
var G__340858 = cljs.core.count.call(null,c__14547__auto___340855);
var G__340859 = 0;
seq__340839_340844 = G__340856;
chunk__340840_340845 = G__340857;
count__340841_340846 = G__340858;
i__340842_340847 = G__340859;
continue;
}
} else
{var k_340860__$1 = cljs.core.first.call(null,seq__340839_340854__$1);remove_attr_BANG_.call(null,elem__$1,k_340860__$1);
{
var G__340861 = cljs.core.next.call(null,seq__340839_340854__$1);
var G__340862 = null;
var G__340863 = 0;
var G__340864 = 0;
seq__340839_340844 = G__340861;
chunk__340840_340845 = G__340862;
count__340841_340846 = G__340863;
i__340842_340847 = G__340864;
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
var G__340843 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__340843__delegate.call(this,elem,k,ks);};
G__340843.cljs$lang$maxFixedArity = 2;
G__340843.cljs$lang$applyTo = (function (arglist__340865){
var elem = cljs.core.first(arglist__340865);
arglist__340865 = cljs.core.next(arglist__340865);
var k = cljs.core.first(arglist__340865);
var ks = cljs.core.rest(arglist__340865);
return G__340843__delegate(elem,k,ks);
});
G__340843.cljs$core$IFn$_invoke$arity$variadic = G__340843__delegate;
return G__340843;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__340867 = dommy.template.__GT_node_like.call(null,elem);G__340867.style.display = ((show_QMARK_)?"":"none");
return G__340867;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__340869 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__340869,false);
return G__340869;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__340871 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__340871,true);
return G__340871;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__340873 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__340873["constructor"] = Object);
return G__340873;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map