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
var G__13574 = (i + class$.length);
start_from = G__13574;
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
{var temp__4090__auto___13599 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13599))
{var class_list_13600 = temp__4090__auto___13599;var seq__13587_13601 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13588_13602 = null;var count__13589_13603 = 0;var i__13590_13604 = 0;while(true){
if((i__13590_13604 < count__13589_13603))
{var class_13605 = cljs.core._nth.call(null,chunk__13588_13602,i__13590_13604);class_list_13600.add(class_13605);
{
var G__13606 = seq__13587_13601;
var G__13607 = chunk__13588_13602;
var G__13608 = count__13589_13603;
var G__13609 = (i__13590_13604 + 1);
seq__13587_13601 = G__13606;
chunk__13588_13602 = G__13607;
count__13589_13603 = G__13608;
i__13590_13604 = G__13609;
continue;
}
} else
{var temp__4092__auto___13610 = cljs.core.seq.call(null,seq__13587_13601);if(temp__4092__auto___13610)
{var seq__13587_13611__$1 = temp__4092__auto___13610;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13587_13611__$1))
{var c__8927__auto___13612 = cljs.core.chunk_first.call(null,seq__13587_13611__$1);{
var G__13613 = cljs.core.chunk_rest.call(null,seq__13587_13611__$1);
var G__13614 = c__8927__auto___13612;
var G__13615 = cljs.core.count.call(null,c__8927__auto___13612);
var G__13616 = 0;
seq__13587_13601 = G__13613;
chunk__13588_13602 = G__13614;
count__13589_13603 = G__13615;
i__13590_13604 = G__13616;
continue;
}
} else
{var class_13617 = cljs.core.first.call(null,seq__13587_13611__$1);class_list_13600.add(class_13617);
{
var G__13618 = cljs.core.next.call(null,seq__13587_13611__$1);
var G__13619 = null;
var G__13620 = 0;
var G__13621 = 0;
seq__13587_13601 = G__13618;
chunk__13588_13602 = G__13619;
count__13589_13603 = G__13620;
i__13590_13604 = G__13621;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_13622 = elem__$1.className;var seq__13591_13623 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13592_13624 = null;var count__13593_13625 = 0;var i__13594_13626 = 0;while(true){
if((i__13594_13626 < count__13593_13625))
{var class_13627 = cljs.core._nth.call(null,chunk__13592_13624,i__13594_13626);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13622,class_13627)))
{} else
{elem__$1.className = (((class_name_13622 === ""))?class_13627:[cljs.core.str(class_name_13622),cljs.core.str(" "),cljs.core.str(class_13627)].join(''));
}
{
var G__13628 = seq__13591_13623;
var G__13629 = chunk__13592_13624;
var G__13630 = count__13593_13625;
var G__13631 = (i__13594_13626 + 1);
seq__13591_13623 = G__13628;
chunk__13592_13624 = G__13629;
count__13593_13625 = G__13630;
i__13594_13626 = G__13631;
continue;
}
} else
{var temp__4092__auto___13632 = cljs.core.seq.call(null,seq__13591_13623);if(temp__4092__auto___13632)
{var seq__13591_13633__$1 = temp__4092__auto___13632;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13591_13633__$1))
{var c__8927__auto___13634 = cljs.core.chunk_first.call(null,seq__13591_13633__$1);{
var G__13635 = cljs.core.chunk_rest.call(null,seq__13591_13633__$1);
var G__13636 = c__8927__auto___13634;
var G__13637 = cljs.core.count.call(null,c__8927__auto___13634);
var G__13638 = 0;
seq__13591_13623 = G__13635;
chunk__13592_13624 = G__13636;
count__13593_13625 = G__13637;
i__13594_13626 = G__13638;
continue;
}
} else
{var class_13639 = cljs.core.first.call(null,seq__13591_13633__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13622,class_13639)))
{} else
{elem__$1.className = (((class_name_13622 === ""))?class_13639:[cljs.core.str(class_name_13622),cljs.core.str(" "),cljs.core.str(class_13639)].join(''));
}
{
var G__13640 = cljs.core.next.call(null,seq__13591_13633__$1);
var G__13641 = null;
var G__13642 = 0;
var G__13643 = 0;
seq__13591_13623 = G__13640;
chunk__13592_13624 = G__13641;
count__13593_13625 = G__13642;
i__13594_13626 = G__13643;
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
var G__13644__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13595_13645 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__13596_13646 = null;var count__13597_13647 = 0;var i__13598_13648 = 0;while(true){
if((i__13598_13648 < count__13597_13647))
{var c_13649 = cljs.core._nth.call(null,chunk__13596_13646,i__13598_13648);add_class_BANG_.call(null,elem__$1,c_13649);
{
var G__13650 = seq__13595_13645;
var G__13651 = chunk__13596_13646;
var G__13652 = count__13597_13647;
var G__13653 = (i__13598_13648 + 1);
seq__13595_13645 = G__13650;
chunk__13596_13646 = G__13651;
count__13597_13647 = G__13652;
i__13598_13648 = G__13653;
continue;
}
} else
{var temp__4092__auto___13654 = cljs.core.seq.call(null,seq__13595_13645);if(temp__4092__auto___13654)
{var seq__13595_13655__$1 = temp__4092__auto___13654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13595_13655__$1))
{var c__8927__auto___13656 = cljs.core.chunk_first.call(null,seq__13595_13655__$1);{
var G__13657 = cljs.core.chunk_rest.call(null,seq__13595_13655__$1);
var G__13658 = c__8927__auto___13656;
var G__13659 = cljs.core.count.call(null,c__8927__auto___13656);
var G__13660 = 0;
seq__13595_13645 = G__13657;
chunk__13596_13646 = G__13658;
count__13597_13647 = G__13659;
i__13598_13648 = G__13660;
continue;
}
} else
{var c_13661 = cljs.core.first.call(null,seq__13595_13655__$1);add_class_BANG_.call(null,elem__$1,c_13661);
{
var G__13662 = cljs.core.next.call(null,seq__13595_13655__$1);
var G__13663 = null;
var G__13664 = 0;
var G__13665 = 0;
seq__13595_13645 = G__13662;
chunk__13596_13646 = G__13663;
count__13597_13647 = G__13664;
i__13598_13648 = G__13665;
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
var G__13644 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13644__delegate.call(this,elem,classes,more_classes);};
G__13644.cljs$lang$maxFixedArity = 2;
G__13644.cljs$lang$applyTo = (function (arglist__13666){
var elem = cljs.core.first(arglist__13666);
arglist__13666 = cljs.core.next(arglist__13666);
var classes = cljs.core.first(arglist__13666);
var more_classes = cljs.core.rest(arglist__13666);
return G__13644__delegate(elem,classes,more_classes);
});
G__13644.cljs$core$IFn$_invoke$arity$variadic = G__13644__delegate;
return G__13644;
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
var G__13667 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__13667;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13676 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13676))
{var class_list_13677 = temp__4090__auto___13676;class_list_13677.remove(class$__$1);
} else
{var class_name_13678 = elem__$1.className;var new_class_name_13679 = dommy.attrs.remove_class_str.call(null,class_name_13678,class$__$1);if((class_name_13678 === new_class_name_13679))
{} else
{elem__$1.className = new_class_name_13679;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__13680__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13672 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13673 = null;var count__13674 = 0;var i__13675 = 0;while(true){
if((i__13675 < count__13674))
{var c = cljs.core._nth.call(null,chunk__13673,i__13675);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13681 = seq__13672;
var G__13682 = chunk__13673;
var G__13683 = count__13674;
var G__13684 = (i__13675 + 1);
seq__13672 = G__13681;
chunk__13673 = G__13682;
count__13674 = G__13683;
i__13675 = G__13684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13672);if(temp__4092__auto__)
{var seq__13672__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13672__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__13672__$1);{
var G__13685 = cljs.core.chunk_rest.call(null,seq__13672__$1);
var G__13686 = c__8927__auto__;
var G__13687 = cljs.core.count.call(null,c__8927__auto__);
var G__13688 = 0;
seq__13672 = G__13685;
chunk__13673 = G__13686;
count__13674 = G__13687;
i__13675 = G__13688;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13672__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13689 = cljs.core.next.call(null,seq__13672__$1);
var G__13690 = null;
var G__13691 = 0;
var G__13692 = 0;
seq__13672 = G__13689;
chunk__13673 = G__13690;
count__13674 = G__13691;
i__13675 = G__13692;
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
var G__13680 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13680__delegate.call(this,elem,class$,classes);};
G__13680.cljs$lang$maxFixedArity = 2;
G__13680.cljs$lang$applyTo = (function (arglist__13693){
var elem = cljs.core.first(arglist__13693);
arglist__13693 = cljs.core.next(arglist__13693);
var class$ = cljs.core.first(arglist__13693);
var classes = cljs.core.rest(arglist__13693);
return G__13680__delegate(elem,class$,classes);
});
G__13680.cljs$core$IFn$_invoke$arity$variadic = G__13680__delegate;
return G__13680;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13694 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13694))
{var class_list_13695 = temp__4090__auto___13694;class_list_13695.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__13698){var vec__13699 = p__13698;var k = cljs.core.nth.call(null,vec__13699,0,null);var v = cljs.core.nth.call(null,vec__13699,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__13706_13712 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13707_13713 = null;var count__13708_13714 = 0;var i__13709_13715 = 0;while(true){
if((i__13709_13715 < count__13708_13714))
{var vec__13710_13716 = cljs.core._nth.call(null,chunk__13707_13713,i__13709_13715);var k_13717 = cljs.core.nth.call(null,vec__13710_13716,0,null);var v_13718 = cljs.core.nth.call(null,vec__13710_13716,1,null);(style[cljs.core.name.call(null,k_13717)] = v_13718);
{
var G__13719 = seq__13706_13712;
var G__13720 = chunk__13707_13713;
var G__13721 = count__13708_13714;
var G__13722 = (i__13709_13715 + 1);
seq__13706_13712 = G__13719;
chunk__13707_13713 = G__13720;
count__13708_13714 = G__13721;
i__13709_13715 = G__13722;
continue;
}
} else
{var temp__4092__auto___13723 = cljs.core.seq.call(null,seq__13706_13712);if(temp__4092__auto___13723)
{var seq__13706_13724__$1 = temp__4092__auto___13723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13706_13724__$1))
{var c__8927__auto___13725 = cljs.core.chunk_first.call(null,seq__13706_13724__$1);{
var G__13726 = cljs.core.chunk_rest.call(null,seq__13706_13724__$1);
var G__13727 = c__8927__auto___13725;
var G__13728 = cljs.core.count.call(null,c__8927__auto___13725);
var G__13729 = 0;
seq__13706_13712 = G__13726;
chunk__13707_13713 = G__13727;
count__13708_13714 = G__13728;
i__13709_13715 = G__13729;
continue;
}
} else
{var vec__13711_13730 = cljs.core.first.call(null,seq__13706_13724__$1);var k_13731 = cljs.core.nth.call(null,vec__13711_13730,0,null);var v_13732 = cljs.core.nth.call(null,vec__13711_13730,1,null);(style[cljs.core.name.call(null,k_13731)] = v_13732);
{
var G__13733 = cljs.core.next.call(null,seq__13706_13724__$1);
var G__13734 = null;
var G__13735 = 0;
var G__13736 = 0;
seq__13706_13712 = G__13733;
chunk__13707_13713 = G__13734;
count__13708_13714 = G__13735;
i__13709_13715 = G__13736;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13737){
var elem = cljs.core.first(arglist__13737);
var kvs = cljs.core.rest(arglist__13737);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13744_13750 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13745_13751 = null;var count__13746_13752 = 0;var i__13747_13753 = 0;while(true){
if((i__13747_13753 < count__13746_13752))
{var vec__13748_13754 = cljs.core._nth.call(null,chunk__13745_13751,i__13747_13753);var k_13755 = cljs.core.nth.call(null,vec__13748_13754,0,null);var v_13756 = cljs.core.nth.call(null,vec__13748_13754,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13755,[cljs.core.str(v_13756),cljs.core.str("px")].join(''));
{
var G__13757 = seq__13744_13750;
var G__13758 = chunk__13745_13751;
var G__13759 = count__13746_13752;
var G__13760 = (i__13747_13753 + 1);
seq__13744_13750 = G__13757;
chunk__13745_13751 = G__13758;
count__13746_13752 = G__13759;
i__13747_13753 = G__13760;
continue;
}
} else
{var temp__4092__auto___13761 = cljs.core.seq.call(null,seq__13744_13750);if(temp__4092__auto___13761)
{var seq__13744_13762__$1 = temp__4092__auto___13761;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13744_13762__$1))
{var c__8927__auto___13763 = cljs.core.chunk_first.call(null,seq__13744_13762__$1);{
var G__13764 = cljs.core.chunk_rest.call(null,seq__13744_13762__$1);
var G__13765 = c__8927__auto___13763;
var G__13766 = cljs.core.count.call(null,c__8927__auto___13763);
var G__13767 = 0;
seq__13744_13750 = G__13764;
chunk__13745_13751 = G__13765;
count__13746_13752 = G__13766;
i__13747_13753 = G__13767;
continue;
}
} else
{var vec__13749_13768 = cljs.core.first.call(null,seq__13744_13762__$1);var k_13769 = cljs.core.nth.call(null,vec__13749_13768,0,null);var v_13770 = cljs.core.nth.call(null,vec__13749_13768,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13769,[cljs.core.str(v_13770),cljs.core.str("px")].join(''));
{
var G__13771 = cljs.core.next.call(null,seq__13744_13762__$1);
var G__13772 = null;
var G__13773 = 0;
var G__13774 = 0;
seq__13744_13750 = G__13771;
chunk__13745_13751 = G__13772;
count__13746_13752 = G__13773;
i__13747_13753 = G__13774;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13775){
var elem = cljs.core.first(arglist__13775);
var kvs = cljs.core.rest(arglist__13775);
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
{var G__13784 = dommy.template.__GT_node_like.call(null,elem);(G__13784[cljs.core.name.call(null,k)] = v);
return G__13784;
} else
{var G__13785 = dommy.template.__GT_node_like.call(null,elem);G__13785.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__13785;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13792__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13786_13793 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__13787_13794 = null;var count__13788_13795 = 0;var i__13789_13796 = 0;while(true){
if((i__13789_13796 < count__13788_13795))
{var vec__13790_13797 = cljs.core._nth.call(null,chunk__13787_13794,i__13789_13796);var k_13798__$1 = cljs.core.nth.call(null,vec__13790_13797,0,null);var v_13799__$1 = cljs.core.nth.call(null,vec__13790_13797,1,null);set_attr_BANG_.call(null,elem__$1,k_13798__$1,v_13799__$1);
{
var G__13800 = seq__13786_13793;
var G__13801 = chunk__13787_13794;
var G__13802 = count__13788_13795;
var G__13803 = (i__13789_13796 + 1);
seq__13786_13793 = G__13800;
chunk__13787_13794 = G__13801;
count__13788_13795 = G__13802;
i__13789_13796 = G__13803;
continue;
}
} else
{var temp__4092__auto___13804 = cljs.core.seq.call(null,seq__13786_13793);if(temp__4092__auto___13804)
{var seq__13786_13805__$1 = temp__4092__auto___13804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13786_13805__$1))
{var c__8927__auto___13806 = cljs.core.chunk_first.call(null,seq__13786_13805__$1);{
var G__13807 = cljs.core.chunk_rest.call(null,seq__13786_13805__$1);
var G__13808 = c__8927__auto___13806;
var G__13809 = cljs.core.count.call(null,c__8927__auto___13806);
var G__13810 = 0;
seq__13786_13793 = G__13807;
chunk__13787_13794 = G__13808;
count__13788_13795 = G__13809;
i__13789_13796 = G__13810;
continue;
}
} else
{var vec__13791_13811 = cljs.core.first.call(null,seq__13786_13805__$1);var k_13812__$1 = cljs.core.nth.call(null,vec__13791_13811,0,null);var v_13813__$1 = cljs.core.nth.call(null,vec__13791_13811,1,null);set_attr_BANG_.call(null,elem__$1,k_13812__$1,v_13813__$1);
{
var G__13814 = cljs.core.next.call(null,seq__13786_13805__$1);
var G__13815 = null;
var G__13816 = 0;
var G__13817 = 0;
seq__13786_13793 = G__13814;
chunk__13787_13794 = G__13815;
count__13788_13795 = G__13816;
i__13789_13796 = G__13817;
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
var G__13792 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13792__delegate.call(this,elem,k,v,kvs);};
G__13792.cljs$lang$maxFixedArity = 3;
G__13792.cljs$lang$applyTo = (function (arglist__13818){
var elem = cljs.core.first(arglist__13818);
arglist__13818 = cljs.core.next(arglist__13818);
var k = cljs.core.first(arglist__13818);
arglist__13818 = cljs.core.next(arglist__13818);
var v = cljs.core.first(arglist__13818);
var kvs = cljs.core.rest(arglist__13818);
return G__13792__delegate(elem,k,v,kvs);
});
G__13792.cljs$core$IFn$_invoke$arity$variadic = G__13792__delegate;
return G__13792;
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
var G__13827__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13823_13828 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13824_13829 = null;var count__13825_13830 = 0;var i__13826_13831 = 0;while(true){
if((i__13826_13831 < count__13825_13830))
{var k_13832__$1 = cljs.core._nth.call(null,chunk__13824_13829,i__13826_13831);remove_attr_BANG_.call(null,elem__$1,k_13832__$1);
{
var G__13833 = seq__13823_13828;
var G__13834 = chunk__13824_13829;
var G__13835 = count__13825_13830;
var G__13836 = (i__13826_13831 + 1);
seq__13823_13828 = G__13833;
chunk__13824_13829 = G__13834;
count__13825_13830 = G__13835;
i__13826_13831 = G__13836;
continue;
}
} else
{var temp__4092__auto___13837 = cljs.core.seq.call(null,seq__13823_13828);if(temp__4092__auto___13837)
{var seq__13823_13838__$1 = temp__4092__auto___13837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13823_13838__$1))
{var c__8927__auto___13839 = cljs.core.chunk_first.call(null,seq__13823_13838__$1);{
var G__13840 = cljs.core.chunk_rest.call(null,seq__13823_13838__$1);
var G__13841 = c__8927__auto___13839;
var G__13842 = cljs.core.count.call(null,c__8927__auto___13839);
var G__13843 = 0;
seq__13823_13828 = G__13840;
chunk__13824_13829 = G__13841;
count__13825_13830 = G__13842;
i__13826_13831 = G__13843;
continue;
}
} else
{var k_13844__$1 = cljs.core.first.call(null,seq__13823_13838__$1);remove_attr_BANG_.call(null,elem__$1,k_13844__$1);
{
var G__13845 = cljs.core.next.call(null,seq__13823_13838__$1);
var G__13846 = null;
var G__13847 = 0;
var G__13848 = 0;
seq__13823_13828 = G__13845;
chunk__13824_13829 = G__13846;
count__13825_13830 = G__13847;
i__13826_13831 = G__13848;
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
var G__13827 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13827__delegate.call(this,elem,k,ks);};
G__13827.cljs$lang$maxFixedArity = 2;
G__13827.cljs$lang$applyTo = (function (arglist__13849){
var elem = cljs.core.first(arglist__13849);
arglist__13849 = cljs.core.next(arglist__13849);
var k = cljs.core.first(arglist__13849);
var ks = cljs.core.rest(arglist__13849);
return G__13827__delegate(elem,k,ks);
});
G__13827.cljs$core$IFn$_invoke$arity$variadic = G__13827__delegate;
return G__13827;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__13851 = dommy.template.__GT_node_like.call(null,elem);G__13851.style.display = ((show_QMARK_)?"":"none");
return G__13851;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__13853 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13853,false);
return G__13853;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__13855 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13855,true);
return G__13855;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__13857 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__13857["constructor"] = Object);
return G__13857;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map