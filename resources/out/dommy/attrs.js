// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13810__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13810__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13810__auto__;
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
var G__103583 = (i + class$.length);
start_from = G__103583;
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
{var temp__4090__auto___103608 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___103608))
{var class_list_103609 = temp__4090__auto___103608;var seq__103596_103610 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__103597_103611 = null;var count__103598_103612 = 0;var i__103599_103613 = 0;while(true){
if((i__103599_103613 < count__103598_103612))
{var class_103614 = cljs.core._nth.call(null,chunk__103597_103611,i__103599_103613);class_list_103609.add(class_103614);
{
var G__103615 = seq__103596_103610;
var G__103616 = chunk__103597_103611;
var G__103617 = count__103598_103612;
var G__103618 = (i__103599_103613 + 1);
seq__103596_103610 = G__103615;
chunk__103597_103611 = G__103616;
count__103598_103612 = G__103617;
i__103599_103613 = G__103618;
continue;
}
} else
{var temp__4092__auto___103619 = cljs.core.seq.call(null,seq__103596_103610);if(temp__4092__auto___103619)
{var seq__103596_103620__$1 = temp__4092__auto___103619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103596_103620__$1))
{var c__14546__auto___103621 = cljs.core.chunk_first.call(null,seq__103596_103620__$1);{
var G__103622 = cljs.core.chunk_rest.call(null,seq__103596_103620__$1);
var G__103623 = c__14546__auto___103621;
var G__103624 = cljs.core.count.call(null,c__14546__auto___103621);
var G__103625 = 0;
seq__103596_103610 = G__103622;
chunk__103597_103611 = G__103623;
count__103598_103612 = G__103624;
i__103599_103613 = G__103625;
continue;
}
} else
{var class_103626 = cljs.core.first.call(null,seq__103596_103620__$1);class_list_103609.add(class_103626);
{
var G__103627 = cljs.core.next.call(null,seq__103596_103620__$1);
var G__103628 = null;
var G__103629 = 0;
var G__103630 = 0;
seq__103596_103610 = G__103627;
chunk__103597_103611 = G__103628;
count__103598_103612 = G__103629;
i__103599_103613 = G__103630;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_103631 = elem__$1.className;var seq__103600_103632 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__103601_103633 = null;var count__103602_103634 = 0;var i__103603_103635 = 0;while(true){
if((i__103603_103635 < count__103602_103634))
{var class_103636 = cljs.core._nth.call(null,chunk__103601_103633,i__103603_103635);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_103631,class_103636)))
{} else
{elem__$1.className = (((class_name_103631 === ""))?class_103636:[cljs.core.str(class_name_103631),cljs.core.str(" "),cljs.core.str(class_103636)].join(''));
}
{
var G__103637 = seq__103600_103632;
var G__103638 = chunk__103601_103633;
var G__103639 = count__103602_103634;
var G__103640 = (i__103603_103635 + 1);
seq__103600_103632 = G__103637;
chunk__103601_103633 = G__103638;
count__103602_103634 = G__103639;
i__103603_103635 = G__103640;
continue;
}
} else
{var temp__4092__auto___103641 = cljs.core.seq.call(null,seq__103600_103632);if(temp__4092__auto___103641)
{var seq__103600_103642__$1 = temp__4092__auto___103641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103600_103642__$1))
{var c__14546__auto___103643 = cljs.core.chunk_first.call(null,seq__103600_103642__$1);{
var G__103644 = cljs.core.chunk_rest.call(null,seq__103600_103642__$1);
var G__103645 = c__14546__auto___103643;
var G__103646 = cljs.core.count.call(null,c__14546__auto___103643);
var G__103647 = 0;
seq__103600_103632 = G__103644;
chunk__103601_103633 = G__103645;
count__103602_103634 = G__103646;
i__103603_103635 = G__103647;
continue;
}
} else
{var class_103648 = cljs.core.first.call(null,seq__103600_103642__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_103631,class_103648)))
{} else
{elem__$1.className = (((class_name_103631 === ""))?class_103648:[cljs.core.str(class_name_103631),cljs.core.str(" "),cljs.core.str(class_103648)].join(''));
}
{
var G__103649 = cljs.core.next.call(null,seq__103600_103642__$1);
var G__103650 = null;
var G__103651 = 0;
var G__103652 = 0;
seq__103600_103632 = G__103649;
chunk__103601_103633 = G__103650;
count__103602_103634 = G__103651;
i__103603_103635 = G__103652;
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
var G__103653__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__103604_103654 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__103605_103655 = null;var count__103606_103656 = 0;var i__103607_103657 = 0;while(true){
if((i__103607_103657 < count__103606_103656))
{var c_103658 = cljs.core._nth.call(null,chunk__103605_103655,i__103607_103657);add_class_BANG_.call(null,elem__$1,c_103658);
{
var G__103659 = seq__103604_103654;
var G__103660 = chunk__103605_103655;
var G__103661 = count__103606_103656;
var G__103662 = (i__103607_103657 + 1);
seq__103604_103654 = G__103659;
chunk__103605_103655 = G__103660;
count__103606_103656 = G__103661;
i__103607_103657 = G__103662;
continue;
}
} else
{var temp__4092__auto___103663 = cljs.core.seq.call(null,seq__103604_103654);if(temp__4092__auto___103663)
{var seq__103604_103664__$1 = temp__4092__auto___103663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103604_103664__$1))
{var c__14546__auto___103665 = cljs.core.chunk_first.call(null,seq__103604_103664__$1);{
var G__103666 = cljs.core.chunk_rest.call(null,seq__103604_103664__$1);
var G__103667 = c__14546__auto___103665;
var G__103668 = cljs.core.count.call(null,c__14546__auto___103665);
var G__103669 = 0;
seq__103604_103654 = G__103666;
chunk__103605_103655 = G__103667;
count__103606_103656 = G__103668;
i__103607_103657 = G__103669;
continue;
}
} else
{var c_103670 = cljs.core.first.call(null,seq__103604_103664__$1);add_class_BANG_.call(null,elem__$1,c_103670);
{
var G__103671 = cljs.core.next.call(null,seq__103604_103664__$1);
var G__103672 = null;
var G__103673 = 0;
var G__103674 = 0;
seq__103604_103654 = G__103671;
chunk__103605_103655 = G__103672;
count__103606_103656 = G__103673;
i__103607_103657 = G__103674;
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
var G__103653 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__103653__delegate.call(this,elem,classes,more_classes);};
G__103653.cljs$lang$maxFixedArity = 2;
G__103653.cljs$lang$applyTo = (function (arglist__103675){
var elem = cljs.core.first(arglist__103675);
arglist__103675 = cljs.core.next(arglist__103675);
var classes = cljs.core.first(arglist__103675);
var more_classes = cljs.core.rest(arglist__103675);
return G__103653__delegate(elem,classes,more_classes);
});
G__103653.cljs$core$IFn$_invoke$arity$variadic = G__103653__delegate;
return G__103653;
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
var G__103676 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__103676;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___103685 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___103685))
{var class_list_103686 = temp__4090__auto___103685;class_list_103686.remove(class$__$1);
} else
{var class_name_103687 = elem__$1.className;var new_class_name_103688 = dommy.attrs.remove_class_str.call(null,class_name_103687,class$__$1);if((class_name_103687 === new_class_name_103688))
{} else
{elem__$1.className = new_class_name_103688;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__103689__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__103681 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__103682 = null;var count__103683 = 0;var i__103684 = 0;while(true){
if((i__103684 < count__103683))
{var c = cljs.core._nth.call(null,chunk__103682,i__103684);remove_class_BANG_.call(null,elem__$1,c);
{
var G__103690 = seq__103681;
var G__103691 = chunk__103682;
var G__103692 = count__103683;
var G__103693 = (i__103684 + 1);
seq__103681 = G__103690;
chunk__103682 = G__103691;
count__103683 = G__103692;
i__103684 = G__103693;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__103681);if(temp__4092__auto__)
{var seq__103681__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103681__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__103681__$1);{
var G__103694 = cljs.core.chunk_rest.call(null,seq__103681__$1);
var G__103695 = c__14546__auto__;
var G__103696 = cljs.core.count.call(null,c__14546__auto__);
var G__103697 = 0;
seq__103681 = G__103694;
chunk__103682 = G__103695;
count__103683 = G__103696;
i__103684 = G__103697;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__103681__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__103698 = cljs.core.next.call(null,seq__103681__$1);
var G__103699 = null;
var G__103700 = 0;
var G__103701 = 0;
seq__103681 = G__103698;
chunk__103682 = G__103699;
count__103683 = G__103700;
i__103684 = G__103701;
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
var G__103689 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__103689__delegate.call(this,elem,class$,classes);};
G__103689.cljs$lang$maxFixedArity = 2;
G__103689.cljs$lang$applyTo = (function (arglist__103702){
var elem = cljs.core.first(arglist__103702);
arglist__103702 = cljs.core.next(arglist__103702);
var class$ = cljs.core.first(arglist__103702);
var classes = cljs.core.rest(arglist__103702);
return G__103689__delegate(elem,class$,classes);
});
G__103689.cljs$core$IFn$_invoke$arity$variadic = G__103689__delegate;
return G__103689;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___103703 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___103703))
{var class_list_103704 = temp__4090__auto___103703;class_list_103704.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__103707){var vec__103708 = p__103707;var k = cljs.core.nth.call(null,vec__103708,0,null);var v = cljs.core.nth.call(null,vec__103708,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__103715_103721 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__103716_103722 = null;var count__103717_103723 = 0;var i__103718_103724 = 0;while(true){
if((i__103718_103724 < count__103717_103723))
{var vec__103719_103725 = cljs.core._nth.call(null,chunk__103716_103722,i__103718_103724);var k_103726 = cljs.core.nth.call(null,vec__103719_103725,0,null);var v_103727 = cljs.core.nth.call(null,vec__103719_103725,1,null);(style[cljs.core.name.call(null,k_103726)] = v_103727);
{
var G__103728 = seq__103715_103721;
var G__103729 = chunk__103716_103722;
var G__103730 = count__103717_103723;
var G__103731 = (i__103718_103724 + 1);
seq__103715_103721 = G__103728;
chunk__103716_103722 = G__103729;
count__103717_103723 = G__103730;
i__103718_103724 = G__103731;
continue;
}
} else
{var temp__4092__auto___103732 = cljs.core.seq.call(null,seq__103715_103721);if(temp__4092__auto___103732)
{var seq__103715_103733__$1 = temp__4092__auto___103732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103715_103733__$1))
{var c__14546__auto___103734 = cljs.core.chunk_first.call(null,seq__103715_103733__$1);{
var G__103735 = cljs.core.chunk_rest.call(null,seq__103715_103733__$1);
var G__103736 = c__14546__auto___103734;
var G__103737 = cljs.core.count.call(null,c__14546__auto___103734);
var G__103738 = 0;
seq__103715_103721 = G__103735;
chunk__103716_103722 = G__103736;
count__103717_103723 = G__103737;
i__103718_103724 = G__103738;
continue;
}
} else
{var vec__103720_103739 = cljs.core.first.call(null,seq__103715_103733__$1);var k_103740 = cljs.core.nth.call(null,vec__103720_103739,0,null);var v_103741 = cljs.core.nth.call(null,vec__103720_103739,1,null);(style[cljs.core.name.call(null,k_103740)] = v_103741);
{
var G__103742 = cljs.core.next.call(null,seq__103715_103733__$1);
var G__103743 = null;
var G__103744 = 0;
var G__103745 = 0;
seq__103715_103721 = G__103742;
chunk__103716_103722 = G__103743;
count__103717_103723 = G__103744;
i__103718_103724 = G__103745;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__103746){
var elem = cljs.core.first(arglist__103746);
var kvs = cljs.core.rest(arglist__103746);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__103753_103759 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__103754_103760 = null;var count__103755_103761 = 0;var i__103756_103762 = 0;while(true){
if((i__103756_103762 < count__103755_103761))
{var vec__103757_103763 = cljs.core._nth.call(null,chunk__103754_103760,i__103756_103762);var k_103764 = cljs.core.nth.call(null,vec__103757_103763,0,null);var v_103765 = cljs.core.nth.call(null,vec__103757_103763,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_103764,[cljs.core.str(v_103765),cljs.core.str("px")].join(''));
{
var G__103766 = seq__103753_103759;
var G__103767 = chunk__103754_103760;
var G__103768 = count__103755_103761;
var G__103769 = (i__103756_103762 + 1);
seq__103753_103759 = G__103766;
chunk__103754_103760 = G__103767;
count__103755_103761 = G__103768;
i__103756_103762 = G__103769;
continue;
}
} else
{var temp__4092__auto___103770 = cljs.core.seq.call(null,seq__103753_103759);if(temp__4092__auto___103770)
{var seq__103753_103771__$1 = temp__4092__auto___103770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103753_103771__$1))
{var c__14546__auto___103772 = cljs.core.chunk_first.call(null,seq__103753_103771__$1);{
var G__103773 = cljs.core.chunk_rest.call(null,seq__103753_103771__$1);
var G__103774 = c__14546__auto___103772;
var G__103775 = cljs.core.count.call(null,c__14546__auto___103772);
var G__103776 = 0;
seq__103753_103759 = G__103773;
chunk__103754_103760 = G__103774;
count__103755_103761 = G__103775;
i__103756_103762 = G__103776;
continue;
}
} else
{var vec__103758_103777 = cljs.core.first.call(null,seq__103753_103771__$1);var k_103778 = cljs.core.nth.call(null,vec__103758_103777,0,null);var v_103779 = cljs.core.nth.call(null,vec__103758_103777,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_103778,[cljs.core.str(v_103779),cljs.core.str("px")].join(''));
{
var G__103780 = cljs.core.next.call(null,seq__103753_103771__$1);
var G__103781 = null;
var G__103782 = 0;
var G__103783 = 0;
seq__103753_103759 = G__103780;
chunk__103754_103760 = G__103781;
count__103755_103761 = G__103782;
i__103756_103762 = G__103783;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__103784){
var elem = cljs.core.first(arglist__103784);
var kvs = cljs.core.rest(arglist__103784);
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
{var G__103793 = dommy.template.__GT_node_like.call(null,elem);(G__103793[cljs.core.name.call(null,k)] = v);
return G__103793;
} else
{var G__103794 = dommy.template.__GT_node_like.call(null,elem);G__103794.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__103794;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__103801__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__103795_103802 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__103796_103803 = null;var count__103797_103804 = 0;var i__103798_103805 = 0;while(true){
if((i__103798_103805 < count__103797_103804))
{var vec__103799_103806 = cljs.core._nth.call(null,chunk__103796_103803,i__103798_103805);var k_103807__$1 = cljs.core.nth.call(null,vec__103799_103806,0,null);var v_103808__$1 = cljs.core.nth.call(null,vec__103799_103806,1,null);set_attr_BANG_.call(null,elem__$1,k_103807__$1,v_103808__$1);
{
var G__103809 = seq__103795_103802;
var G__103810 = chunk__103796_103803;
var G__103811 = count__103797_103804;
var G__103812 = (i__103798_103805 + 1);
seq__103795_103802 = G__103809;
chunk__103796_103803 = G__103810;
count__103797_103804 = G__103811;
i__103798_103805 = G__103812;
continue;
}
} else
{var temp__4092__auto___103813 = cljs.core.seq.call(null,seq__103795_103802);if(temp__4092__auto___103813)
{var seq__103795_103814__$1 = temp__4092__auto___103813;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103795_103814__$1))
{var c__14546__auto___103815 = cljs.core.chunk_first.call(null,seq__103795_103814__$1);{
var G__103816 = cljs.core.chunk_rest.call(null,seq__103795_103814__$1);
var G__103817 = c__14546__auto___103815;
var G__103818 = cljs.core.count.call(null,c__14546__auto___103815);
var G__103819 = 0;
seq__103795_103802 = G__103816;
chunk__103796_103803 = G__103817;
count__103797_103804 = G__103818;
i__103798_103805 = G__103819;
continue;
}
} else
{var vec__103800_103820 = cljs.core.first.call(null,seq__103795_103814__$1);var k_103821__$1 = cljs.core.nth.call(null,vec__103800_103820,0,null);var v_103822__$1 = cljs.core.nth.call(null,vec__103800_103820,1,null);set_attr_BANG_.call(null,elem__$1,k_103821__$1,v_103822__$1);
{
var G__103823 = cljs.core.next.call(null,seq__103795_103814__$1);
var G__103824 = null;
var G__103825 = 0;
var G__103826 = 0;
seq__103795_103802 = G__103823;
chunk__103796_103803 = G__103824;
count__103797_103804 = G__103825;
i__103798_103805 = G__103826;
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
var G__103801 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__103801__delegate.call(this,elem,k,v,kvs);};
G__103801.cljs$lang$maxFixedArity = 3;
G__103801.cljs$lang$applyTo = (function (arglist__103827){
var elem = cljs.core.first(arglist__103827);
arglist__103827 = cljs.core.next(arglist__103827);
var k = cljs.core.first(arglist__103827);
arglist__103827 = cljs.core.next(arglist__103827);
var v = cljs.core.first(arglist__103827);
var kvs = cljs.core.rest(arglist__103827);
return G__103801__delegate(elem,k,v,kvs);
});
G__103801.cljs$core$IFn$_invoke$arity$variadic = G__103801__delegate;
return G__103801;
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
var G__103836__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__103832_103837 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__103833_103838 = null;var count__103834_103839 = 0;var i__103835_103840 = 0;while(true){
if((i__103835_103840 < count__103834_103839))
{var k_103841__$1 = cljs.core._nth.call(null,chunk__103833_103838,i__103835_103840);remove_attr_BANG_.call(null,elem__$1,k_103841__$1);
{
var G__103842 = seq__103832_103837;
var G__103843 = chunk__103833_103838;
var G__103844 = count__103834_103839;
var G__103845 = (i__103835_103840 + 1);
seq__103832_103837 = G__103842;
chunk__103833_103838 = G__103843;
count__103834_103839 = G__103844;
i__103835_103840 = G__103845;
continue;
}
} else
{var temp__4092__auto___103846 = cljs.core.seq.call(null,seq__103832_103837);if(temp__4092__auto___103846)
{var seq__103832_103847__$1 = temp__4092__auto___103846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103832_103847__$1))
{var c__14546__auto___103848 = cljs.core.chunk_first.call(null,seq__103832_103847__$1);{
var G__103849 = cljs.core.chunk_rest.call(null,seq__103832_103847__$1);
var G__103850 = c__14546__auto___103848;
var G__103851 = cljs.core.count.call(null,c__14546__auto___103848);
var G__103852 = 0;
seq__103832_103837 = G__103849;
chunk__103833_103838 = G__103850;
count__103834_103839 = G__103851;
i__103835_103840 = G__103852;
continue;
}
} else
{var k_103853__$1 = cljs.core.first.call(null,seq__103832_103847__$1);remove_attr_BANG_.call(null,elem__$1,k_103853__$1);
{
var G__103854 = cljs.core.next.call(null,seq__103832_103847__$1);
var G__103855 = null;
var G__103856 = 0;
var G__103857 = 0;
seq__103832_103837 = G__103854;
chunk__103833_103838 = G__103855;
count__103834_103839 = G__103856;
i__103835_103840 = G__103857;
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
var G__103836 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__103836__delegate.call(this,elem,k,ks);};
G__103836.cljs$lang$maxFixedArity = 2;
G__103836.cljs$lang$applyTo = (function (arglist__103858){
var elem = cljs.core.first(arglist__103858);
arglist__103858 = cljs.core.next(arglist__103858);
var k = cljs.core.first(arglist__103858);
var ks = cljs.core.rest(arglist__103858);
return G__103836__delegate(elem,k,ks);
});
G__103836.cljs$core$IFn$_invoke$arity$variadic = G__103836__delegate;
return G__103836;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__103860 = dommy.template.__GT_node_like.call(null,elem);G__103860.style.display = ((show_QMARK_)?"":"none");
return G__103860;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__103862 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__103862,false);
return G__103862;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__103864 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__103864,true);
return G__103864;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__103866 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__103866["constructor"] = Object);
return G__103866;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map