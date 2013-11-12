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
var G__32763 = (i + class$.length);
start_from = G__32763;
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
{var temp__4090__auto___32788 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___32788))
{var class_list_32789 = temp__4090__auto___32788;var seq__32776_32790 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__32777_32791 = null;var count__32778_32792 = 0;var i__32779_32793 = 0;while(true){
if((i__32779_32793 < count__32778_32792))
{var class_32794 = cljs.core._nth.call(null,chunk__32777_32791,i__32779_32793);class_list_32789.add(class_32794);
{
var G__32795 = seq__32776_32790;
var G__32796 = chunk__32777_32791;
var G__32797 = count__32778_32792;
var G__32798 = (i__32779_32793 + 1);
seq__32776_32790 = G__32795;
chunk__32777_32791 = G__32796;
count__32778_32792 = G__32797;
i__32779_32793 = G__32798;
continue;
}
} else
{var temp__4092__auto___32799 = cljs.core.seq.call(null,seq__32776_32790);if(temp__4092__auto___32799)
{var seq__32776_32800__$1 = temp__4092__auto___32799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32776_32800__$1))
{var c__8156__auto___32801 = cljs.core.chunk_first.call(null,seq__32776_32800__$1);{
var G__32802 = cljs.core.chunk_rest.call(null,seq__32776_32800__$1);
var G__32803 = c__8156__auto___32801;
var G__32804 = cljs.core.count.call(null,c__8156__auto___32801);
var G__32805 = 0;
seq__32776_32790 = G__32802;
chunk__32777_32791 = G__32803;
count__32778_32792 = G__32804;
i__32779_32793 = G__32805;
continue;
}
} else
{var class_32806 = cljs.core.first.call(null,seq__32776_32800__$1);class_list_32789.add(class_32806);
{
var G__32807 = cljs.core.next.call(null,seq__32776_32800__$1);
var G__32808 = null;
var G__32809 = 0;
var G__32810 = 0;
seq__32776_32790 = G__32807;
chunk__32777_32791 = G__32808;
count__32778_32792 = G__32809;
i__32779_32793 = G__32810;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_32811 = elem__$1.className;var seq__32780_32812 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__32781_32813 = null;var count__32782_32814 = 0;var i__32783_32815 = 0;while(true){
if((i__32783_32815 < count__32782_32814))
{var class_32816 = cljs.core._nth.call(null,chunk__32781_32813,i__32783_32815);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_32811,class_32816)))
{} else
{elem__$1.className = (((class_name_32811 === ""))?class_32816:[cljs.core.str(class_name_32811),cljs.core.str(" "),cljs.core.str(class_32816)].join(''));
}
{
var G__32817 = seq__32780_32812;
var G__32818 = chunk__32781_32813;
var G__32819 = count__32782_32814;
var G__32820 = (i__32783_32815 + 1);
seq__32780_32812 = G__32817;
chunk__32781_32813 = G__32818;
count__32782_32814 = G__32819;
i__32783_32815 = G__32820;
continue;
}
} else
{var temp__4092__auto___32821 = cljs.core.seq.call(null,seq__32780_32812);if(temp__4092__auto___32821)
{var seq__32780_32822__$1 = temp__4092__auto___32821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32780_32822__$1))
{var c__8156__auto___32823 = cljs.core.chunk_first.call(null,seq__32780_32822__$1);{
var G__32824 = cljs.core.chunk_rest.call(null,seq__32780_32822__$1);
var G__32825 = c__8156__auto___32823;
var G__32826 = cljs.core.count.call(null,c__8156__auto___32823);
var G__32827 = 0;
seq__32780_32812 = G__32824;
chunk__32781_32813 = G__32825;
count__32782_32814 = G__32826;
i__32783_32815 = G__32827;
continue;
}
} else
{var class_32828 = cljs.core.first.call(null,seq__32780_32822__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_32811,class_32828)))
{} else
{elem__$1.className = (((class_name_32811 === ""))?class_32828:[cljs.core.str(class_name_32811),cljs.core.str(" "),cljs.core.str(class_32828)].join(''));
}
{
var G__32829 = cljs.core.next.call(null,seq__32780_32822__$1);
var G__32830 = null;
var G__32831 = 0;
var G__32832 = 0;
seq__32780_32812 = G__32829;
chunk__32781_32813 = G__32830;
count__32782_32814 = G__32831;
i__32783_32815 = G__32832;
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
var G__32833__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__32784_32834 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__32785_32835 = null;var count__32786_32836 = 0;var i__32787_32837 = 0;while(true){
if((i__32787_32837 < count__32786_32836))
{var c_32838 = cljs.core._nth.call(null,chunk__32785_32835,i__32787_32837);add_class_BANG_.call(null,elem__$1,c_32838);
{
var G__32839 = seq__32784_32834;
var G__32840 = chunk__32785_32835;
var G__32841 = count__32786_32836;
var G__32842 = (i__32787_32837 + 1);
seq__32784_32834 = G__32839;
chunk__32785_32835 = G__32840;
count__32786_32836 = G__32841;
i__32787_32837 = G__32842;
continue;
}
} else
{var temp__4092__auto___32843 = cljs.core.seq.call(null,seq__32784_32834);if(temp__4092__auto___32843)
{var seq__32784_32844__$1 = temp__4092__auto___32843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32784_32844__$1))
{var c__8156__auto___32845 = cljs.core.chunk_first.call(null,seq__32784_32844__$1);{
var G__32846 = cljs.core.chunk_rest.call(null,seq__32784_32844__$1);
var G__32847 = c__8156__auto___32845;
var G__32848 = cljs.core.count.call(null,c__8156__auto___32845);
var G__32849 = 0;
seq__32784_32834 = G__32846;
chunk__32785_32835 = G__32847;
count__32786_32836 = G__32848;
i__32787_32837 = G__32849;
continue;
}
} else
{var c_32850 = cljs.core.first.call(null,seq__32784_32844__$1);add_class_BANG_.call(null,elem__$1,c_32850);
{
var G__32851 = cljs.core.next.call(null,seq__32784_32844__$1);
var G__32852 = null;
var G__32853 = 0;
var G__32854 = 0;
seq__32784_32834 = G__32851;
chunk__32785_32835 = G__32852;
count__32786_32836 = G__32853;
i__32787_32837 = G__32854;
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
var G__32833 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32833__delegate.call(this,elem,classes,more_classes);};
G__32833.cljs$lang$maxFixedArity = 2;
G__32833.cljs$lang$applyTo = (function (arglist__32855){
var elem = cljs.core.first(arglist__32855);
arglist__32855 = cljs.core.next(arglist__32855);
var classes = cljs.core.first(arglist__32855);
var more_classes = cljs.core.rest(arglist__32855);
return G__32833__delegate(elem,classes,more_classes);
});
G__32833.cljs$core$IFn$_invoke$arity$variadic = G__32833__delegate;
return G__32833;
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
var G__32856 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__32856;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___32865 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___32865))
{var class_list_32866 = temp__4090__auto___32865;class_list_32866.remove(class$__$1);
} else
{var class_name_32867 = elem__$1.className;var new_class_name_32868 = dommy.attrs.remove_class_str.call(null,class_name_32867,class$__$1);if((class_name_32867 === new_class_name_32868))
{} else
{elem__$1.className = new_class_name_32868;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__32869__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__32861 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__32862 = null;var count__32863 = 0;var i__32864 = 0;while(true){
if((i__32864 < count__32863))
{var c = cljs.core._nth.call(null,chunk__32862,i__32864);remove_class_BANG_.call(null,elem__$1,c);
{
var G__32870 = seq__32861;
var G__32871 = chunk__32862;
var G__32872 = count__32863;
var G__32873 = (i__32864 + 1);
seq__32861 = G__32870;
chunk__32862 = G__32871;
count__32863 = G__32872;
i__32864 = G__32873;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32861);if(temp__4092__auto__)
{var seq__32861__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32861__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__32861__$1);{
var G__32874 = cljs.core.chunk_rest.call(null,seq__32861__$1);
var G__32875 = c__8156__auto__;
var G__32876 = cljs.core.count.call(null,c__8156__auto__);
var G__32877 = 0;
seq__32861 = G__32874;
chunk__32862 = G__32875;
count__32863 = G__32876;
i__32864 = G__32877;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__32861__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__32878 = cljs.core.next.call(null,seq__32861__$1);
var G__32879 = null;
var G__32880 = 0;
var G__32881 = 0;
seq__32861 = G__32878;
chunk__32862 = G__32879;
count__32863 = G__32880;
i__32864 = G__32881;
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
var G__32869 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32869__delegate.call(this,elem,class$,classes);};
G__32869.cljs$lang$maxFixedArity = 2;
G__32869.cljs$lang$applyTo = (function (arglist__32882){
var elem = cljs.core.first(arglist__32882);
arglist__32882 = cljs.core.next(arglist__32882);
var class$ = cljs.core.first(arglist__32882);
var classes = cljs.core.rest(arglist__32882);
return G__32869__delegate(elem,class$,classes);
});
G__32869.cljs$core$IFn$_invoke$arity$variadic = G__32869__delegate;
return G__32869;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___32883 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___32883))
{var class_list_32884 = temp__4090__auto___32883;class_list_32884.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__32887){var vec__32888 = p__32887;var k = cljs.core.nth.call(null,vec__32888,0,null);var v = cljs.core.nth.call(null,vec__32888,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__32895_32901 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__32896_32902 = null;var count__32897_32903 = 0;var i__32898_32904 = 0;while(true){
if((i__32898_32904 < count__32897_32903))
{var vec__32899_32905 = cljs.core._nth.call(null,chunk__32896_32902,i__32898_32904);var k_32906 = cljs.core.nth.call(null,vec__32899_32905,0,null);var v_32907 = cljs.core.nth.call(null,vec__32899_32905,1,null);(style[cljs.core.name.call(null,k_32906)] = v_32907);
{
var G__32908 = seq__32895_32901;
var G__32909 = chunk__32896_32902;
var G__32910 = count__32897_32903;
var G__32911 = (i__32898_32904 + 1);
seq__32895_32901 = G__32908;
chunk__32896_32902 = G__32909;
count__32897_32903 = G__32910;
i__32898_32904 = G__32911;
continue;
}
} else
{var temp__4092__auto___32912 = cljs.core.seq.call(null,seq__32895_32901);if(temp__4092__auto___32912)
{var seq__32895_32913__$1 = temp__4092__auto___32912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32895_32913__$1))
{var c__8156__auto___32914 = cljs.core.chunk_first.call(null,seq__32895_32913__$1);{
var G__32915 = cljs.core.chunk_rest.call(null,seq__32895_32913__$1);
var G__32916 = c__8156__auto___32914;
var G__32917 = cljs.core.count.call(null,c__8156__auto___32914);
var G__32918 = 0;
seq__32895_32901 = G__32915;
chunk__32896_32902 = G__32916;
count__32897_32903 = G__32917;
i__32898_32904 = G__32918;
continue;
}
} else
{var vec__32900_32919 = cljs.core.first.call(null,seq__32895_32913__$1);var k_32920 = cljs.core.nth.call(null,vec__32900_32919,0,null);var v_32921 = cljs.core.nth.call(null,vec__32900_32919,1,null);(style[cljs.core.name.call(null,k_32920)] = v_32921);
{
var G__32922 = cljs.core.next.call(null,seq__32895_32913__$1);
var G__32923 = null;
var G__32924 = 0;
var G__32925 = 0;
seq__32895_32901 = G__32922;
chunk__32896_32902 = G__32923;
count__32897_32903 = G__32924;
i__32898_32904 = G__32925;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32926){
var elem = cljs.core.first(arglist__32926);
var kvs = cljs.core.rest(arglist__32926);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__32933_32939 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__32934_32940 = null;var count__32935_32941 = 0;var i__32936_32942 = 0;while(true){
if((i__32936_32942 < count__32935_32941))
{var vec__32937_32943 = cljs.core._nth.call(null,chunk__32934_32940,i__32936_32942);var k_32944 = cljs.core.nth.call(null,vec__32937_32943,0,null);var v_32945 = cljs.core.nth.call(null,vec__32937_32943,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_32944,[cljs.core.str(v_32945),cljs.core.str("px")].join(''));
{
var G__32946 = seq__32933_32939;
var G__32947 = chunk__32934_32940;
var G__32948 = count__32935_32941;
var G__32949 = (i__32936_32942 + 1);
seq__32933_32939 = G__32946;
chunk__32934_32940 = G__32947;
count__32935_32941 = G__32948;
i__32936_32942 = G__32949;
continue;
}
} else
{var temp__4092__auto___32950 = cljs.core.seq.call(null,seq__32933_32939);if(temp__4092__auto___32950)
{var seq__32933_32951__$1 = temp__4092__auto___32950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32933_32951__$1))
{var c__8156__auto___32952 = cljs.core.chunk_first.call(null,seq__32933_32951__$1);{
var G__32953 = cljs.core.chunk_rest.call(null,seq__32933_32951__$1);
var G__32954 = c__8156__auto___32952;
var G__32955 = cljs.core.count.call(null,c__8156__auto___32952);
var G__32956 = 0;
seq__32933_32939 = G__32953;
chunk__32934_32940 = G__32954;
count__32935_32941 = G__32955;
i__32936_32942 = G__32956;
continue;
}
} else
{var vec__32938_32957 = cljs.core.first.call(null,seq__32933_32951__$1);var k_32958 = cljs.core.nth.call(null,vec__32938_32957,0,null);var v_32959 = cljs.core.nth.call(null,vec__32938_32957,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_32958,[cljs.core.str(v_32959),cljs.core.str("px")].join(''));
{
var G__32960 = cljs.core.next.call(null,seq__32933_32951__$1);
var G__32961 = null;
var G__32962 = 0;
var G__32963 = 0;
seq__32933_32939 = G__32960;
chunk__32934_32940 = G__32961;
count__32935_32941 = G__32962;
i__32936_32942 = G__32963;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__32964){
var elem = cljs.core.first(arglist__32964);
var kvs = cljs.core.rest(arglist__32964);
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
{var G__32973 = dommy.template.__GT_node_like.call(null,elem);(G__32973[cljs.core.name.call(null,k)] = v);
return G__32973;
} else
{var G__32974 = dommy.template.__GT_node_like.call(null,elem);G__32974.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__32974;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__32981__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__32975_32982 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__32976_32983 = null;var count__32977_32984 = 0;var i__32978_32985 = 0;while(true){
if((i__32978_32985 < count__32977_32984))
{var vec__32979_32986 = cljs.core._nth.call(null,chunk__32976_32983,i__32978_32985);var k_32987__$1 = cljs.core.nth.call(null,vec__32979_32986,0,null);var v_32988__$1 = cljs.core.nth.call(null,vec__32979_32986,1,null);set_attr_BANG_.call(null,elem__$1,k_32987__$1,v_32988__$1);
{
var G__32989 = seq__32975_32982;
var G__32990 = chunk__32976_32983;
var G__32991 = count__32977_32984;
var G__32992 = (i__32978_32985 + 1);
seq__32975_32982 = G__32989;
chunk__32976_32983 = G__32990;
count__32977_32984 = G__32991;
i__32978_32985 = G__32992;
continue;
}
} else
{var temp__4092__auto___32993 = cljs.core.seq.call(null,seq__32975_32982);if(temp__4092__auto___32993)
{var seq__32975_32994__$1 = temp__4092__auto___32993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32975_32994__$1))
{var c__8156__auto___32995 = cljs.core.chunk_first.call(null,seq__32975_32994__$1);{
var G__32996 = cljs.core.chunk_rest.call(null,seq__32975_32994__$1);
var G__32997 = c__8156__auto___32995;
var G__32998 = cljs.core.count.call(null,c__8156__auto___32995);
var G__32999 = 0;
seq__32975_32982 = G__32996;
chunk__32976_32983 = G__32997;
count__32977_32984 = G__32998;
i__32978_32985 = G__32999;
continue;
}
} else
{var vec__32980_33000 = cljs.core.first.call(null,seq__32975_32994__$1);var k_33001__$1 = cljs.core.nth.call(null,vec__32980_33000,0,null);var v_33002__$1 = cljs.core.nth.call(null,vec__32980_33000,1,null);set_attr_BANG_.call(null,elem__$1,k_33001__$1,v_33002__$1);
{
var G__33003 = cljs.core.next.call(null,seq__32975_32994__$1);
var G__33004 = null;
var G__33005 = 0;
var G__33006 = 0;
seq__32975_32982 = G__33003;
chunk__32976_32983 = G__33004;
count__32977_32984 = G__33005;
i__32978_32985 = G__33006;
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
var G__32981 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__32981__delegate.call(this,elem,k,v,kvs);};
G__32981.cljs$lang$maxFixedArity = 3;
G__32981.cljs$lang$applyTo = (function (arglist__33007){
var elem = cljs.core.first(arglist__33007);
arglist__33007 = cljs.core.next(arglist__33007);
var k = cljs.core.first(arglist__33007);
arglist__33007 = cljs.core.next(arglist__33007);
var v = cljs.core.first(arglist__33007);
var kvs = cljs.core.rest(arglist__33007);
return G__32981__delegate(elem,k,v,kvs);
});
G__32981.cljs$core$IFn$_invoke$arity$variadic = G__32981__delegate;
return G__32981;
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
var G__33016__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__33012_33017 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__33013_33018 = null;var count__33014_33019 = 0;var i__33015_33020 = 0;while(true){
if((i__33015_33020 < count__33014_33019))
{var k_33021__$1 = cljs.core._nth.call(null,chunk__33013_33018,i__33015_33020);remove_attr_BANG_.call(null,elem__$1,k_33021__$1);
{
var G__33022 = seq__33012_33017;
var G__33023 = chunk__33013_33018;
var G__33024 = count__33014_33019;
var G__33025 = (i__33015_33020 + 1);
seq__33012_33017 = G__33022;
chunk__33013_33018 = G__33023;
count__33014_33019 = G__33024;
i__33015_33020 = G__33025;
continue;
}
} else
{var temp__4092__auto___33026 = cljs.core.seq.call(null,seq__33012_33017);if(temp__4092__auto___33026)
{var seq__33012_33027__$1 = temp__4092__auto___33026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33012_33027__$1))
{var c__8156__auto___33028 = cljs.core.chunk_first.call(null,seq__33012_33027__$1);{
var G__33029 = cljs.core.chunk_rest.call(null,seq__33012_33027__$1);
var G__33030 = c__8156__auto___33028;
var G__33031 = cljs.core.count.call(null,c__8156__auto___33028);
var G__33032 = 0;
seq__33012_33017 = G__33029;
chunk__33013_33018 = G__33030;
count__33014_33019 = G__33031;
i__33015_33020 = G__33032;
continue;
}
} else
{var k_33033__$1 = cljs.core.first.call(null,seq__33012_33027__$1);remove_attr_BANG_.call(null,elem__$1,k_33033__$1);
{
var G__33034 = cljs.core.next.call(null,seq__33012_33027__$1);
var G__33035 = null;
var G__33036 = 0;
var G__33037 = 0;
seq__33012_33017 = G__33034;
chunk__33013_33018 = G__33035;
count__33014_33019 = G__33036;
i__33015_33020 = G__33037;
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
var G__33016 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__33016__delegate.call(this,elem,k,ks);};
G__33016.cljs$lang$maxFixedArity = 2;
G__33016.cljs$lang$applyTo = (function (arglist__33038){
var elem = cljs.core.first(arglist__33038);
arglist__33038 = cljs.core.next(arglist__33038);
var k = cljs.core.first(arglist__33038);
var ks = cljs.core.rest(arglist__33038);
return G__33016__delegate(elem,k,ks);
});
G__33016.cljs$core$IFn$_invoke$arity$variadic = G__33016__delegate;
return G__33016;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__33040 = dommy.template.__GT_node_like.call(null,elem);G__33040.style.display = ((show_QMARK_)?"":"none");
return G__33040;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__33042 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__33042,false);
return G__33042;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__33044 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__33044,true);
return G__33044;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__33046 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__33046["constructor"] = Object);
return G__33046;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
