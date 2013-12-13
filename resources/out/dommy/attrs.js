// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13813__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13813__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13813__auto__;
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
var G__301763 = (i + class$.length);
start_from = G__301763;
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
{var temp__4090__auto___301788 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___301788))
{var class_list_301789 = temp__4090__auto___301788;var seq__301776_301790 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__301777_301791 = null;var count__301778_301792 = 0;var i__301779_301793 = 0;while(true){
if((i__301779_301793 < count__301778_301792))
{var class_301794 = cljs.core._nth.call(null,chunk__301777_301791,i__301779_301793);class_list_301789.add(class_301794);
{
var G__301795 = seq__301776_301790;
var G__301796 = chunk__301777_301791;
var G__301797 = count__301778_301792;
var G__301798 = (i__301779_301793 + 1);
seq__301776_301790 = G__301795;
chunk__301777_301791 = G__301796;
count__301778_301792 = G__301797;
i__301779_301793 = G__301798;
continue;
}
} else
{var temp__4092__auto___301799 = cljs.core.seq.call(null,seq__301776_301790);if(temp__4092__auto___301799)
{var seq__301776_301800__$1 = temp__4092__auto___301799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301776_301800__$1))
{var c__14549__auto___301801 = cljs.core.chunk_first.call(null,seq__301776_301800__$1);{
var G__301802 = cljs.core.chunk_rest.call(null,seq__301776_301800__$1);
var G__301803 = c__14549__auto___301801;
var G__301804 = cljs.core.count.call(null,c__14549__auto___301801);
var G__301805 = 0;
seq__301776_301790 = G__301802;
chunk__301777_301791 = G__301803;
count__301778_301792 = G__301804;
i__301779_301793 = G__301805;
continue;
}
} else
{var class_301806 = cljs.core.first.call(null,seq__301776_301800__$1);class_list_301789.add(class_301806);
{
var G__301807 = cljs.core.next.call(null,seq__301776_301800__$1);
var G__301808 = null;
var G__301809 = 0;
var G__301810 = 0;
seq__301776_301790 = G__301807;
chunk__301777_301791 = G__301808;
count__301778_301792 = G__301809;
i__301779_301793 = G__301810;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_301811 = elem__$1.className;var seq__301780_301812 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__301781_301813 = null;var count__301782_301814 = 0;var i__301783_301815 = 0;while(true){
if((i__301783_301815 < count__301782_301814))
{var class_301816 = cljs.core._nth.call(null,chunk__301781_301813,i__301783_301815);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_301811,class_301816)))
{} else
{elem__$1.className = (((class_name_301811 === ""))?class_301816:[cljs.core.str(class_name_301811),cljs.core.str(" "),cljs.core.str(class_301816)].join(''));
}
{
var G__301817 = seq__301780_301812;
var G__301818 = chunk__301781_301813;
var G__301819 = count__301782_301814;
var G__301820 = (i__301783_301815 + 1);
seq__301780_301812 = G__301817;
chunk__301781_301813 = G__301818;
count__301782_301814 = G__301819;
i__301783_301815 = G__301820;
continue;
}
} else
{var temp__4092__auto___301821 = cljs.core.seq.call(null,seq__301780_301812);if(temp__4092__auto___301821)
{var seq__301780_301822__$1 = temp__4092__auto___301821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301780_301822__$1))
{var c__14549__auto___301823 = cljs.core.chunk_first.call(null,seq__301780_301822__$1);{
var G__301824 = cljs.core.chunk_rest.call(null,seq__301780_301822__$1);
var G__301825 = c__14549__auto___301823;
var G__301826 = cljs.core.count.call(null,c__14549__auto___301823);
var G__301827 = 0;
seq__301780_301812 = G__301824;
chunk__301781_301813 = G__301825;
count__301782_301814 = G__301826;
i__301783_301815 = G__301827;
continue;
}
} else
{var class_301828 = cljs.core.first.call(null,seq__301780_301822__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_301811,class_301828)))
{} else
{elem__$1.className = (((class_name_301811 === ""))?class_301828:[cljs.core.str(class_name_301811),cljs.core.str(" "),cljs.core.str(class_301828)].join(''));
}
{
var G__301829 = cljs.core.next.call(null,seq__301780_301822__$1);
var G__301830 = null;
var G__301831 = 0;
var G__301832 = 0;
seq__301780_301812 = G__301829;
chunk__301781_301813 = G__301830;
count__301782_301814 = G__301831;
i__301783_301815 = G__301832;
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
var G__301833__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__301784_301834 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__301785_301835 = null;var count__301786_301836 = 0;var i__301787_301837 = 0;while(true){
if((i__301787_301837 < count__301786_301836))
{var c_301838 = cljs.core._nth.call(null,chunk__301785_301835,i__301787_301837);add_class_BANG_.call(null,elem__$1,c_301838);
{
var G__301839 = seq__301784_301834;
var G__301840 = chunk__301785_301835;
var G__301841 = count__301786_301836;
var G__301842 = (i__301787_301837 + 1);
seq__301784_301834 = G__301839;
chunk__301785_301835 = G__301840;
count__301786_301836 = G__301841;
i__301787_301837 = G__301842;
continue;
}
} else
{var temp__4092__auto___301843 = cljs.core.seq.call(null,seq__301784_301834);if(temp__4092__auto___301843)
{var seq__301784_301844__$1 = temp__4092__auto___301843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301784_301844__$1))
{var c__14549__auto___301845 = cljs.core.chunk_first.call(null,seq__301784_301844__$1);{
var G__301846 = cljs.core.chunk_rest.call(null,seq__301784_301844__$1);
var G__301847 = c__14549__auto___301845;
var G__301848 = cljs.core.count.call(null,c__14549__auto___301845);
var G__301849 = 0;
seq__301784_301834 = G__301846;
chunk__301785_301835 = G__301847;
count__301786_301836 = G__301848;
i__301787_301837 = G__301849;
continue;
}
} else
{var c_301850 = cljs.core.first.call(null,seq__301784_301844__$1);add_class_BANG_.call(null,elem__$1,c_301850);
{
var G__301851 = cljs.core.next.call(null,seq__301784_301844__$1);
var G__301852 = null;
var G__301853 = 0;
var G__301854 = 0;
seq__301784_301834 = G__301851;
chunk__301785_301835 = G__301852;
count__301786_301836 = G__301853;
i__301787_301837 = G__301854;
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
var G__301833 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__301833__delegate.call(this,elem,classes,more_classes);};
G__301833.cljs$lang$maxFixedArity = 2;
G__301833.cljs$lang$applyTo = (function (arglist__301855){
var elem = cljs.core.first(arglist__301855);
arglist__301855 = cljs.core.next(arglist__301855);
var classes = cljs.core.first(arglist__301855);
var more_classes = cljs.core.rest(arglist__301855);
return G__301833__delegate(elem,classes,more_classes);
});
G__301833.cljs$core$IFn$_invoke$arity$variadic = G__301833__delegate;
return G__301833;
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
var G__301856 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__301856;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___301865 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___301865))
{var class_list_301866 = temp__4090__auto___301865;class_list_301866.remove(class$__$1);
} else
{var class_name_301867 = elem__$1.className;var new_class_name_301868 = dommy.attrs.remove_class_str.call(null,class_name_301867,class$__$1);if((class_name_301867 === new_class_name_301868))
{} else
{elem__$1.className = new_class_name_301868;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__301869__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__301861 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__301862 = null;var count__301863 = 0;var i__301864 = 0;while(true){
if((i__301864 < count__301863))
{var c = cljs.core._nth.call(null,chunk__301862,i__301864);remove_class_BANG_.call(null,elem__$1,c);
{
var G__301870 = seq__301861;
var G__301871 = chunk__301862;
var G__301872 = count__301863;
var G__301873 = (i__301864 + 1);
seq__301861 = G__301870;
chunk__301862 = G__301871;
count__301863 = G__301872;
i__301864 = G__301873;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__301861);if(temp__4092__auto__)
{var seq__301861__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301861__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__301861__$1);{
var G__301874 = cljs.core.chunk_rest.call(null,seq__301861__$1);
var G__301875 = c__14549__auto__;
var G__301876 = cljs.core.count.call(null,c__14549__auto__);
var G__301877 = 0;
seq__301861 = G__301874;
chunk__301862 = G__301875;
count__301863 = G__301876;
i__301864 = G__301877;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__301861__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__301878 = cljs.core.next.call(null,seq__301861__$1);
var G__301879 = null;
var G__301880 = 0;
var G__301881 = 0;
seq__301861 = G__301878;
chunk__301862 = G__301879;
count__301863 = G__301880;
i__301864 = G__301881;
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
var G__301869 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__301869__delegate.call(this,elem,class$,classes);};
G__301869.cljs$lang$maxFixedArity = 2;
G__301869.cljs$lang$applyTo = (function (arglist__301882){
var elem = cljs.core.first(arglist__301882);
arglist__301882 = cljs.core.next(arglist__301882);
var class$ = cljs.core.first(arglist__301882);
var classes = cljs.core.rest(arglist__301882);
return G__301869__delegate(elem,class$,classes);
});
G__301869.cljs$core$IFn$_invoke$arity$variadic = G__301869__delegate;
return G__301869;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___301883 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___301883))
{var class_list_301884 = temp__4090__auto___301883;class_list_301884.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__301887){var vec__301888 = p__301887;var k = cljs.core.nth.call(null,vec__301888,0,null);var v = cljs.core.nth.call(null,vec__301888,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__301895_301901 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__301896_301902 = null;var count__301897_301903 = 0;var i__301898_301904 = 0;while(true){
if((i__301898_301904 < count__301897_301903))
{var vec__301899_301905 = cljs.core._nth.call(null,chunk__301896_301902,i__301898_301904);var k_301906 = cljs.core.nth.call(null,vec__301899_301905,0,null);var v_301907 = cljs.core.nth.call(null,vec__301899_301905,1,null);(style[cljs.core.name.call(null,k_301906)] = v_301907);
{
var G__301908 = seq__301895_301901;
var G__301909 = chunk__301896_301902;
var G__301910 = count__301897_301903;
var G__301911 = (i__301898_301904 + 1);
seq__301895_301901 = G__301908;
chunk__301896_301902 = G__301909;
count__301897_301903 = G__301910;
i__301898_301904 = G__301911;
continue;
}
} else
{var temp__4092__auto___301912 = cljs.core.seq.call(null,seq__301895_301901);if(temp__4092__auto___301912)
{var seq__301895_301913__$1 = temp__4092__auto___301912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301895_301913__$1))
{var c__14549__auto___301914 = cljs.core.chunk_first.call(null,seq__301895_301913__$1);{
var G__301915 = cljs.core.chunk_rest.call(null,seq__301895_301913__$1);
var G__301916 = c__14549__auto___301914;
var G__301917 = cljs.core.count.call(null,c__14549__auto___301914);
var G__301918 = 0;
seq__301895_301901 = G__301915;
chunk__301896_301902 = G__301916;
count__301897_301903 = G__301917;
i__301898_301904 = G__301918;
continue;
}
} else
{var vec__301900_301919 = cljs.core.first.call(null,seq__301895_301913__$1);var k_301920 = cljs.core.nth.call(null,vec__301900_301919,0,null);var v_301921 = cljs.core.nth.call(null,vec__301900_301919,1,null);(style[cljs.core.name.call(null,k_301920)] = v_301921);
{
var G__301922 = cljs.core.next.call(null,seq__301895_301913__$1);
var G__301923 = null;
var G__301924 = 0;
var G__301925 = 0;
seq__301895_301901 = G__301922;
chunk__301896_301902 = G__301923;
count__301897_301903 = G__301924;
i__301898_301904 = G__301925;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__301926){
var elem = cljs.core.first(arglist__301926);
var kvs = cljs.core.rest(arglist__301926);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__301933_301939 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__301934_301940 = null;var count__301935_301941 = 0;var i__301936_301942 = 0;while(true){
if((i__301936_301942 < count__301935_301941))
{var vec__301937_301943 = cljs.core._nth.call(null,chunk__301934_301940,i__301936_301942);var k_301944 = cljs.core.nth.call(null,vec__301937_301943,0,null);var v_301945 = cljs.core.nth.call(null,vec__301937_301943,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_301944,[cljs.core.str(v_301945),cljs.core.str("px")].join(''));
{
var G__301946 = seq__301933_301939;
var G__301947 = chunk__301934_301940;
var G__301948 = count__301935_301941;
var G__301949 = (i__301936_301942 + 1);
seq__301933_301939 = G__301946;
chunk__301934_301940 = G__301947;
count__301935_301941 = G__301948;
i__301936_301942 = G__301949;
continue;
}
} else
{var temp__4092__auto___301950 = cljs.core.seq.call(null,seq__301933_301939);if(temp__4092__auto___301950)
{var seq__301933_301951__$1 = temp__4092__auto___301950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301933_301951__$1))
{var c__14549__auto___301952 = cljs.core.chunk_first.call(null,seq__301933_301951__$1);{
var G__301953 = cljs.core.chunk_rest.call(null,seq__301933_301951__$1);
var G__301954 = c__14549__auto___301952;
var G__301955 = cljs.core.count.call(null,c__14549__auto___301952);
var G__301956 = 0;
seq__301933_301939 = G__301953;
chunk__301934_301940 = G__301954;
count__301935_301941 = G__301955;
i__301936_301942 = G__301956;
continue;
}
} else
{var vec__301938_301957 = cljs.core.first.call(null,seq__301933_301951__$1);var k_301958 = cljs.core.nth.call(null,vec__301938_301957,0,null);var v_301959 = cljs.core.nth.call(null,vec__301938_301957,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_301958,[cljs.core.str(v_301959),cljs.core.str("px")].join(''));
{
var G__301960 = cljs.core.next.call(null,seq__301933_301951__$1);
var G__301961 = null;
var G__301962 = 0;
var G__301963 = 0;
seq__301933_301939 = G__301960;
chunk__301934_301940 = G__301961;
count__301935_301941 = G__301962;
i__301936_301942 = G__301963;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__301964){
var elem = cljs.core.first(arglist__301964);
var kvs = cljs.core.rest(arglist__301964);
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
{var G__301973 = dommy.template.__GT_node_like.call(null,elem);(G__301973[cljs.core.name.call(null,k)] = v);
return G__301973;
} else
{var G__301974 = dommy.template.__GT_node_like.call(null,elem);G__301974.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__301974;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__301981__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__301975_301982 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__301976_301983 = null;var count__301977_301984 = 0;var i__301978_301985 = 0;while(true){
if((i__301978_301985 < count__301977_301984))
{var vec__301979_301986 = cljs.core._nth.call(null,chunk__301976_301983,i__301978_301985);var k_301987__$1 = cljs.core.nth.call(null,vec__301979_301986,0,null);var v_301988__$1 = cljs.core.nth.call(null,vec__301979_301986,1,null);set_attr_BANG_.call(null,elem__$1,k_301987__$1,v_301988__$1);
{
var G__301989 = seq__301975_301982;
var G__301990 = chunk__301976_301983;
var G__301991 = count__301977_301984;
var G__301992 = (i__301978_301985 + 1);
seq__301975_301982 = G__301989;
chunk__301976_301983 = G__301990;
count__301977_301984 = G__301991;
i__301978_301985 = G__301992;
continue;
}
} else
{var temp__4092__auto___301993 = cljs.core.seq.call(null,seq__301975_301982);if(temp__4092__auto___301993)
{var seq__301975_301994__$1 = temp__4092__auto___301993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301975_301994__$1))
{var c__14549__auto___301995 = cljs.core.chunk_first.call(null,seq__301975_301994__$1);{
var G__301996 = cljs.core.chunk_rest.call(null,seq__301975_301994__$1);
var G__301997 = c__14549__auto___301995;
var G__301998 = cljs.core.count.call(null,c__14549__auto___301995);
var G__301999 = 0;
seq__301975_301982 = G__301996;
chunk__301976_301983 = G__301997;
count__301977_301984 = G__301998;
i__301978_301985 = G__301999;
continue;
}
} else
{var vec__301980_302000 = cljs.core.first.call(null,seq__301975_301994__$1);var k_302001__$1 = cljs.core.nth.call(null,vec__301980_302000,0,null);var v_302002__$1 = cljs.core.nth.call(null,vec__301980_302000,1,null);set_attr_BANG_.call(null,elem__$1,k_302001__$1,v_302002__$1);
{
var G__302003 = cljs.core.next.call(null,seq__301975_301994__$1);
var G__302004 = null;
var G__302005 = 0;
var G__302006 = 0;
seq__301975_301982 = G__302003;
chunk__301976_301983 = G__302004;
count__301977_301984 = G__302005;
i__301978_301985 = G__302006;
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
var G__301981 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__301981__delegate.call(this,elem,k,v,kvs);};
G__301981.cljs$lang$maxFixedArity = 3;
G__301981.cljs$lang$applyTo = (function (arglist__302007){
var elem = cljs.core.first(arglist__302007);
arglist__302007 = cljs.core.next(arglist__302007);
var k = cljs.core.first(arglist__302007);
arglist__302007 = cljs.core.next(arglist__302007);
var v = cljs.core.first(arglist__302007);
var kvs = cljs.core.rest(arglist__302007);
return G__301981__delegate(elem,k,v,kvs);
});
G__301981.cljs$core$IFn$_invoke$arity$variadic = G__301981__delegate;
return G__301981;
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
var G__302016__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__302012_302017 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__302013_302018 = null;var count__302014_302019 = 0;var i__302015_302020 = 0;while(true){
if((i__302015_302020 < count__302014_302019))
{var k_302021__$1 = cljs.core._nth.call(null,chunk__302013_302018,i__302015_302020);remove_attr_BANG_.call(null,elem__$1,k_302021__$1);
{
var G__302022 = seq__302012_302017;
var G__302023 = chunk__302013_302018;
var G__302024 = count__302014_302019;
var G__302025 = (i__302015_302020 + 1);
seq__302012_302017 = G__302022;
chunk__302013_302018 = G__302023;
count__302014_302019 = G__302024;
i__302015_302020 = G__302025;
continue;
}
} else
{var temp__4092__auto___302026 = cljs.core.seq.call(null,seq__302012_302017);if(temp__4092__auto___302026)
{var seq__302012_302027__$1 = temp__4092__auto___302026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__302012_302027__$1))
{var c__14549__auto___302028 = cljs.core.chunk_first.call(null,seq__302012_302027__$1);{
var G__302029 = cljs.core.chunk_rest.call(null,seq__302012_302027__$1);
var G__302030 = c__14549__auto___302028;
var G__302031 = cljs.core.count.call(null,c__14549__auto___302028);
var G__302032 = 0;
seq__302012_302017 = G__302029;
chunk__302013_302018 = G__302030;
count__302014_302019 = G__302031;
i__302015_302020 = G__302032;
continue;
}
} else
{var k_302033__$1 = cljs.core.first.call(null,seq__302012_302027__$1);remove_attr_BANG_.call(null,elem__$1,k_302033__$1);
{
var G__302034 = cljs.core.next.call(null,seq__302012_302027__$1);
var G__302035 = null;
var G__302036 = 0;
var G__302037 = 0;
seq__302012_302017 = G__302034;
chunk__302013_302018 = G__302035;
count__302014_302019 = G__302036;
i__302015_302020 = G__302037;
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
var G__302016 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__302016__delegate.call(this,elem,k,ks);};
G__302016.cljs$lang$maxFixedArity = 2;
G__302016.cljs$lang$applyTo = (function (arglist__302038){
var elem = cljs.core.first(arglist__302038);
arglist__302038 = cljs.core.next(arglist__302038);
var k = cljs.core.first(arglist__302038);
var ks = cljs.core.rest(arglist__302038);
return G__302016__delegate(elem,k,ks);
});
G__302016.cljs$core$IFn$_invoke$arity$variadic = G__302016__delegate;
return G__302016;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__302040 = dommy.template.__GT_node_like.call(null,elem);G__302040.style.display = ((show_QMARK_)?"":"none");
return G__302040;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__302042 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__302042,false);
return G__302042;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__302044 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__302044,true);
return G__302044;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__302046 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__302046["constructor"] = Object);
return G__302046;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map