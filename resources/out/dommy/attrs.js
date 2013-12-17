// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13942__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13942__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13942__auto__;
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
var G__45713 = (i + class$.length);
start_from = G__45713;
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
{var temp__4090__auto___45738 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45738))
{var class_list_45739 = temp__4090__auto___45738;var seq__45726_45740 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45727_45741 = null;var count__45728_45742 = 0;var i__45729_45743 = 0;while(true){
if((i__45729_45743 < count__45728_45742))
{var class_45744 = cljs.core._nth.call(null,chunk__45727_45741,i__45729_45743);class_list_45739.add(class_45744);
{
var G__45745 = seq__45726_45740;
var G__45746 = chunk__45727_45741;
var G__45747 = count__45728_45742;
var G__45748 = (i__45729_45743 + 1);
seq__45726_45740 = G__45745;
chunk__45727_45741 = G__45746;
count__45728_45742 = G__45747;
i__45729_45743 = G__45748;
continue;
}
} else
{var temp__4092__auto___45749 = cljs.core.seq.call(null,seq__45726_45740);if(temp__4092__auto___45749)
{var seq__45726_45750__$1 = temp__4092__auto___45749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45726_45750__$1))
{var c__14683__auto___45751 = cljs.core.chunk_first.call(null,seq__45726_45750__$1);{
var G__45752 = cljs.core.chunk_rest.call(null,seq__45726_45750__$1);
var G__45753 = c__14683__auto___45751;
var G__45754 = cljs.core.count.call(null,c__14683__auto___45751);
var G__45755 = 0;
seq__45726_45740 = G__45752;
chunk__45727_45741 = G__45753;
count__45728_45742 = G__45754;
i__45729_45743 = G__45755;
continue;
}
} else
{var class_45756 = cljs.core.first.call(null,seq__45726_45750__$1);class_list_45739.add(class_45756);
{
var G__45757 = cljs.core.next.call(null,seq__45726_45750__$1);
var G__45758 = null;
var G__45759 = 0;
var G__45760 = 0;
seq__45726_45740 = G__45757;
chunk__45727_45741 = G__45758;
count__45728_45742 = G__45759;
i__45729_45743 = G__45760;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_45761 = elem__$1.className;var seq__45730_45762 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__45731_45763 = null;var count__45732_45764 = 0;var i__45733_45765 = 0;while(true){
if((i__45733_45765 < count__45732_45764))
{var class_45766 = cljs.core._nth.call(null,chunk__45731_45763,i__45733_45765);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45761,class_45766)))
{} else
{elem__$1.className = (((class_name_45761 === ""))?class_45766:[cljs.core.str(class_name_45761),cljs.core.str(" "),cljs.core.str(class_45766)].join(''));
}
{
var G__45767 = seq__45730_45762;
var G__45768 = chunk__45731_45763;
var G__45769 = count__45732_45764;
var G__45770 = (i__45733_45765 + 1);
seq__45730_45762 = G__45767;
chunk__45731_45763 = G__45768;
count__45732_45764 = G__45769;
i__45733_45765 = G__45770;
continue;
}
} else
{var temp__4092__auto___45771 = cljs.core.seq.call(null,seq__45730_45762);if(temp__4092__auto___45771)
{var seq__45730_45772__$1 = temp__4092__auto___45771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45730_45772__$1))
{var c__14683__auto___45773 = cljs.core.chunk_first.call(null,seq__45730_45772__$1);{
var G__45774 = cljs.core.chunk_rest.call(null,seq__45730_45772__$1);
var G__45775 = c__14683__auto___45773;
var G__45776 = cljs.core.count.call(null,c__14683__auto___45773);
var G__45777 = 0;
seq__45730_45762 = G__45774;
chunk__45731_45763 = G__45775;
count__45732_45764 = G__45776;
i__45733_45765 = G__45777;
continue;
}
} else
{var class_45778 = cljs.core.first.call(null,seq__45730_45772__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_45761,class_45778)))
{} else
{elem__$1.className = (((class_name_45761 === ""))?class_45778:[cljs.core.str(class_name_45761),cljs.core.str(" "),cljs.core.str(class_45778)].join(''));
}
{
var G__45779 = cljs.core.next.call(null,seq__45730_45772__$1);
var G__45780 = null;
var G__45781 = 0;
var G__45782 = 0;
seq__45730_45762 = G__45779;
chunk__45731_45763 = G__45780;
count__45732_45764 = G__45781;
i__45733_45765 = G__45782;
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
var G__45783__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45734_45784 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__45735_45785 = null;var count__45736_45786 = 0;var i__45737_45787 = 0;while(true){
if((i__45737_45787 < count__45736_45786))
{var c_45788 = cljs.core._nth.call(null,chunk__45735_45785,i__45737_45787);add_class_BANG_.call(null,elem__$1,c_45788);
{
var G__45789 = seq__45734_45784;
var G__45790 = chunk__45735_45785;
var G__45791 = count__45736_45786;
var G__45792 = (i__45737_45787 + 1);
seq__45734_45784 = G__45789;
chunk__45735_45785 = G__45790;
count__45736_45786 = G__45791;
i__45737_45787 = G__45792;
continue;
}
} else
{var temp__4092__auto___45793 = cljs.core.seq.call(null,seq__45734_45784);if(temp__4092__auto___45793)
{var seq__45734_45794__$1 = temp__4092__auto___45793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45734_45794__$1))
{var c__14683__auto___45795 = cljs.core.chunk_first.call(null,seq__45734_45794__$1);{
var G__45796 = cljs.core.chunk_rest.call(null,seq__45734_45794__$1);
var G__45797 = c__14683__auto___45795;
var G__45798 = cljs.core.count.call(null,c__14683__auto___45795);
var G__45799 = 0;
seq__45734_45784 = G__45796;
chunk__45735_45785 = G__45797;
count__45736_45786 = G__45798;
i__45737_45787 = G__45799;
continue;
}
} else
{var c_45800 = cljs.core.first.call(null,seq__45734_45794__$1);add_class_BANG_.call(null,elem__$1,c_45800);
{
var G__45801 = cljs.core.next.call(null,seq__45734_45794__$1);
var G__45802 = null;
var G__45803 = 0;
var G__45804 = 0;
seq__45734_45784 = G__45801;
chunk__45735_45785 = G__45802;
count__45736_45786 = G__45803;
i__45737_45787 = G__45804;
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
var G__45783 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45783__delegate.call(this,elem,classes,more_classes);};
G__45783.cljs$lang$maxFixedArity = 2;
G__45783.cljs$lang$applyTo = (function (arglist__45805){
var elem = cljs.core.first(arglist__45805);
arglist__45805 = cljs.core.next(arglist__45805);
var classes = cljs.core.first(arglist__45805);
var more_classes = cljs.core.rest(arglist__45805);
return G__45783__delegate(elem,classes,more_classes);
});
G__45783.cljs$core$IFn$_invoke$arity$variadic = G__45783__delegate;
return G__45783;
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
var G__45806 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__45806;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45815 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45815))
{var class_list_45816 = temp__4090__auto___45815;class_list_45816.remove(class$__$1);
} else
{var class_name_45817 = elem__$1.className;var new_class_name_45818 = dommy.attrs.remove_class_str.call(null,class_name_45817,class$__$1);if((class_name_45817 === new_class_name_45818))
{} else
{elem__$1.className = new_class_name_45818;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__45819__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45811 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__45812 = null;var count__45813 = 0;var i__45814 = 0;while(true){
if((i__45814 < count__45813))
{var c = cljs.core._nth.call(null,chunk__45812,i__45814);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45820 = seq__45811;
var G__45821 = chunk__45812;
var G__45822 = count__45813;
var G__45823 = (i__45814 + 1);
seq__45811 = G__45820;
chunk__45812 = G__45821;
count__45813 = G__45822;
i__45814 = G__45823;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45811);if(temp__4092__auto__)
{var seq__45811__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45811__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__45811__$1);{
var G__45824 = cljs.core.chunk_rest.call(null,seq__45811__$1);
var G__45825 = c__14683__auto__;
var G__45826 = cljs.core.count.call(null,c__14683__auto__);
var G__45827 = 0;
seq__45811 = G__45824;
chunk__45812 = G__45825;
count__45813 = G__45826;
i__45814 = G__45827;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__45811__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__45828 = cljs.core.next.call(null,seq__45811__$1);
var G__45829 = null;
var G__45830 = 0;
var G__45831 = 0;
seq__45811 = G__45828;
chunk__45812 = G__45829;
count__45813 = G__45830;
i__45814 = G__45831;
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
var G__45819 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45819__delegate.call(this,elem,class$,classes);};
G__45819.cljs$lang$maxFixedArity = 2;
G__45819.cljs$lang$applyTo = (function (arglist__45832){
var elem = cljs.core.first(arglist__45832);
arglist__45832 = cljs.core.next(arglist__45832);
var class$ = cljs.core.first(arglist__45832);
var classes = cljs.core.rest(arglist__45832);
return G__45819__delegate(elem,class$,classes);
});
G__45819.cljs$core$IFn$_invoke$arity$variadic = G__45819__delegate;
return G__45819;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___45833 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___45833))
{var class_list_45834 = temp__4090__auto___45833;class_list_45834.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__45837){var vec__45838 = p__45837;var k = cljs.core.nth.call(null,vec__45838,0,null);var v = cljs.core.nth.call(null,vec__45838,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__45845_45851 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45846_45852 = null;var count__45847_45853 = 0;var i__45848_45854 = 0;while(true){
if((i__45848_45854 < count__45847_45853))
{var vec__45849_45855 = cljs.core._nth.call(null,chunk__45846_45852,i__45848_45854);var k_45856 = cljs.core.nth.call(null,vec__45849_45855,0,null);var v_45857 = cljs.core.nth.call(null,vec__45849_45855,1,null);(style[cljs.core.name.call(null,k_45856)] = v_45857);
{
var G__45858 = seq__45845_45851;
var G__45859 = chunk__45846_45852;
var G__45860 = count__45847_45853;
var G__45861 = (i__45848_45854 + 1);
seq__45845_45851 = G__45858;
chunk__45846_45852 = G__45859;
count__45847_45853 = G__45860;
i__45848_45854 = G__45861;
continue;
}
} else
{var temp__4092__auto___45862 = cljs.core.seq.call(null,seq__45845_45851);if(temp__4092__auto___45862)
{var seq__45845_45863__$1 = temp__4092__auto___45862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45845_45863__$1))
{var c__14683__auto___45864 = cljs.core.chunk_first.call(null,seq__45845_45863__$1);{
var G__45865 = cljs.core.chunk_rest.call(null,seq__45845_45863__$1);
var G__45866 = c__14683__auto___45864;
var G__45867 = cljs.core.count.call(null,c__14683__auto___45864);
var G__45868 = 0;
seq__45845_45851 = G__45865;
chunk__45846_45852 = G__45866;
count__45847_45853 = G__45867;
i__45848_45854 = G__45868;
continue;
}
} else
{var vec__45850_45869 = cljs.core.first.call(null,seq__45845_45863__$1);var k_45870 = cljs.core.nth.call(null,vec__45850_45869,0,null);var v_45871 = cljs.core.nth.call(null,vec__45850_45869,1,null);(style[cljs.core.name.call(null,k_45870)] = v_45871);
{
var G__45872 = cljs.core.next.call(null,seq__45845_45863__$1);
var G__45873 = null;
var G__45874 = 0;
var G__45875 = 0;
seq__45845_45851 = G__45872;
chunk__45846_45852 = G__45873;
count__45847_45853 = G__45874;
i__45848_45854 = G__45875;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__45876){
var elem = cljs.core.first(arglist__45876);
var kvs = cljs.core.rest(arglist__45876);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45883_45889 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__45884_45890 = null;var count__45885_45891 = 0;var i__45886_45892 = 0;while(true){
if((i__45886_45892 < count__45885_45891))
{var vec__45887_45893 = cljs.core._nth.call(null,chunk__45884_45890,i__45886_45892);var k_45894 = cljs.core.nth.call(null,vec__45887_45893,0,null);var v_45895 = cljs.core.nth.call(null,vec__45887_45893,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45894,[cljs.core.str(v_45895),cljs.core.str("px")].join(''));
{
var G__45896 = seq__45883_45889;
var G__45897 = chunk__45884_45890;
var G__45898 = count__45885_45891;
var G__45899 = (i__45886_45892 + 1);
seq__45883_45889 = G__45896;
chunk__45884_45890 = G__45897;
count__45885_45891 = G__45898;
i__45886_45892 = G__45899;
continue;
}
} else
{var temp__4092__auto___45900 = cljs.core.seq.call(null,seq__45883_45889);if(temp__4092__auto___45900)
{var seq__45883_45901__$1 = temp__4092__auto___45900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45883_45901__$1))
{var c__14683__auto___45902 = cljs.core.chunk_first.call(null,seq__45883_45901__$1);{
var G__45903 = cljs.core.chunk_rest.call(null,seq__45883_45901__$1);
var G__45904 = c__14683__auto___45902;
var G__45905 = cljs.core.count.call(null,c__14683__auto___45902);
var G__45906 = 0;
seq__45883_45889 = G__45903;
chunk__45884_45890 = G__45904;
count__45885_45891 = G__45905;
i__45886_45892 = G__45906;
continue;
}
} else
{var vec__45888_45907 = cljs.core.first.call(null,seq__45883_45901__$1);var k_45908 = cljs.core.nth.call(null,vec__45888_45907,0,null);var v_45909 = cljs.core.nth.call(null,vec__45888_45907,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_45908,[cljs.core.str(v_45909),cljs.core.str("px")].join(''));
{
var G__45910 = cljs.core.next.call(null,seq__45883_45901__$1);
var G__45911 = null;
var G__45912 = 0;
var G__45913 = 0;
seq__45883_45889 = G__45910;
chunk__45884_45890 = G__45911;
count__45885_45891 = G__45912;
i__45886_45892 = G__45913;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__45914){
var elem = cljs.core.first(arglist__45914);
var kvs = cljs.core.rest(arglist__45914);
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
{var G__45923 = dommy.template.__GT_node_like.call(null,elem);(G__45923[cljs.core.name.call(null,k)] = v);
return G__45923;
} else
{var G__45924 = dommy.template.__GT_node_like.call(null,elem);G__45924.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__45924;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__45931__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45925_45932 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__45926_45933 = null;var count__45927_45934 = 0;var i__45928_45935 = 0;while(true){
if((i__45928_45935 < count__45927_45934))
{var vec__45929_45936 = cljs.core._nth.call(null,chunk__45926_45933,i__45928_45935);var k_45937__$1 = cljs.core.nth.call(null,vec__45929_45936,0,null);var v_45938__$1 = cljs.core.nth.call(null,vec__45929_45936,1,null);set_attr_BANG_.call(null,elem__$1,k_45937__$1,v_45938__$1);
{
var G__45939 = seq__45925_45932;
var G__45940 = chunk__45926_45933;
var G__45941 = count__45927_45934;
var G__45942 = (i__45928_45935 + 1);
seq__45925_45932 = G__45939;
chunk__45926_45933 = G__45940;
count__45927_45934 = G__45941;
i__45928_45935 = G__45942;
continue;
}
} else
{var temp__4092__auto___45943 = cljs.core.seq.call(null,seq__45925_45932);if(temp__4092__auto___45943)
{var seq__45925_45944__$1 = temp__4092__auto___45943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45925_45944__$1))
{var c__14683__auto___45945 = cljs.core.chunk_first.call(null,seq__45925_45944__$1);{
var G__45946 = cljs.core.chunk_rest.call(null,seq__45925_45944__$1);
var G__45947 = c__14683__auto___45945;
var G__45948 = cljs.core.count.call(null,c__14683__auto___45945);
var G__45949 = 0;
seq__45925_45932 = G__45946;
chunk__45926_45933 = G__45947;
count__45927_45934 = G__45948;
i__45928_45935 = G__45949;
continue;
}
} else
{var vec__45930_45950 = cljs.core.first.call(null,seq__45925_45944__$1);var k_45951__$1 = cljs.core.nth.call(null,vec__45930_45950,0,null);var v_45952__$1 = cljs.core.nth.call(null,vec__45930_45950,1,null);set_attr_BANG_.call(null,elem__$1,k_45951__$1,v_45952__$1);
{
var G__45953 = cljs.core.next.call(null,seq__45925_45944__$1);
var G__45954 = null;
var G__45955 = 0;
var G__45956 = 0;
seq__45925_45932 = G__45953;
chunk__45926_45933 = G__45954;
count__45927_45934 = G__45955;
i__45928_45935 = G__45956;
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
var G__45931 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__45931__delegate.call(this,elem,k,v,kvs);};
G__45931.cljs$lang$maxFixedArity = 3;
G__45931.cljs$lang$applyTo = (function (arglist__45957){
var elem = cljs.core.first(arglist__45957);
arglist__45957 = cljs.core.next(arglist__45957);
var k = cljs.core.first(arglist__45957);
arglist__45957 = cljs.core.next(arglist__45957);
var v = cljs.core.first(arglist__45957);
var kvs = cljs.core.rest(arglist__45957);
return G__45931__delegate(elem,k,v,kvs);
});
G__45931.cljs$core$IFn$_invoke$arity$variadic = G__45931__delegate;
return G__45931;
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
var G__45966__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__45962_45967 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__45963_45968 = null;var count__45964_45969 = 0;var i__45965_45970 = 0;while(true){
if((i__45965_45970 < count__45964_45969))
{var k_45971__$1 = cljs.core._nth.call(null,chunk__45963_45968,i__45965_45970);remove_attr_BANG_.call(null,elem__$1,k_45971__$1);
{
var G__45972 = seq__45962_45967;
var G__45973 = chunk__45963_45968;
var G__45974 = count__45964_45969;
var G__45975 = (i__45965_45970 + 1);
seq__45962_45967 = G__45972;
chunk__45963_45968 = G__45973;
count__45964_45969 = G__45974;
i__45965_45970 = G__45975;
continue;
}
} else
{var temp__4092__auto___45976 = cljs.core.seq.call(null,seq__45962_45967);if(temp__4092__auto___45976)
{var seq__45962_45977__$1 = temp__4092__auto___45976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45962_45977__$1))
{var c__14683__auto___45978 = cljs.core.chunk_first.call(null,seq__45962_45977__$1);{
var G__45979 = cljs.core.chunk_rest.call(null,seq__45962_45977__$1);
var G__45980 = c__14683__auto___45978;
var G__45981 = cljs.core.count.call(null,c__14683__auto___45978);
var G__45982 = 0;
seq__45962_45967 = G__45979;
chunk__45963_45968 = G__45980;
count__45964_45969 = G__45981;
i__45965_45970 = G__45982;
continue;
}
} else
{var k_45983__$1 = cljs.core.first.call(null,seq__45962_45977__$1);remove_attr_BANG_.call(null,elem__$1,k_45983__$1);
{
var G__45984 = cljs.core.next.call(null,seq__45962_45977__$1);
var G__45985 = null;
var G__45986 = 0;
var G__45987 = 0;
seq__45962_45967 = G__45984;
chunk__45963_45968 = G__45985;
count__45964_45969 = G__45986;
i__45965_45970 = G__45987;
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
var G__45966 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__45966__delegate.call(this,elem,k,ks);};
G__45966.cljs$lang$maxFixedArity = 2;
G__45966.cljs$lang$applyTo = (function (arglist__45988){
var elem = cljs.core.first(arglist__45988);
arglist__45988 = cljs.core.next(arglist__45988);
var k = cljs.core.first(arglist__45988);
var ks = cljs.core.rest(arglist__45988);
return G__45966__delegate(elem,k,ks);
});
G__45966.cljs$core$IFn$_invoke$arity$variadic = G__45966__delegate;
return G__45966;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__45990 = dommy.template.__GT_node_like.call(null,elem);G__45990.style.display = ((show_QMARK_)?"":"none");
return G__45990;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__45992 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45992,false);
return G__45992;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__45994 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__45994,true);
return G__45994;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__45996 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__45996["constructor"] = Object);
return G__45996;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map