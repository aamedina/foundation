// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7835__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7835__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7835__auto__;
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
var G__23741 = (i + class$.length);
start_from = G__23741;
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
{var temp__4090__auto___23766 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23766))
{var class_list_23767 = temp__4090__auto___23766;var seq__23754_23768 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__23755_23769 = null;var count__23756_23770 = 0;var i__23757_23771 = 0;while(true){
if((i__23757_23771 < count__23756_23770))
{var class_23772 = cljs.core._nth.call(null,chunk__23755_23769,i__23757_23771);class_list_23767.add(class_23772);
{
var G__23773 = seq__23754_23768;
var G__23774 = chunk__23755_23769;
var G__23775 = count__23756_23770;
var G__23776 = (i__23757_23771 + 1);
seq__23754_23768 = G__23773;
chunk__23755_23769 = G__23774;
count__23756_23770 = G__23775;
i__23757_23771 = G__23776;
continue;
}
} else
{var temp__4092__auto___23777 = cljs.core.seq.call(null,seq__23754_23768);if(temp__4092__auto___23777)
{var seq__23754_23778__$1 = temp__4092__auto___23777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23754_23778__$1))
{var c__8571__auto___23779 = cljs.core.chunk_first.call(null,seq__23754_23778__$1);{
var G__23780 = cljs.core.chunk_rest.call(null,seq__23754_23778__$1);
var G__23781 = c__8571__auto___23779;
var G__23782 = cljs.core.count.call(null,c__8571__auto___23779);
var G__23783 = 0;
seq__23754_23768 = G__23780;
chunk__23755_23769 = G__23781;
count__23756_23770 = G__23782;
i__23757_23771 = G__23783;
continue;
}
} else
{var class_23784 = cljs.core.first.call(null,seq__23754_23778__$1);class_list_23767.add(class_23784);
{
var G__23785 = cljs.core.next.call(null,seq__23754_23778__$1);
var G__23786 = null;
var G__23787 = 0;
var G__23788 = 0;
seq__23754_23768 = G__23785;
chunk__23755_23769 = G__23786;
count__23756_23770 = G__23787;
i__23757_23771 = G__23788;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_23789 = elem__$1.className;var seq__23758_23790 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__23759_23791 = null;var count__23760_23792 = 0;var i__23761_23793 = 0;while(true){
if((i__23761_23793 < count__23760_23792))
{var class_23794 = cljs.core._nth.call(null,chunk__23759_23791,i__23761_23793);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_23789,class_23794)))
{} else
{elem__$1.className = (((class_name_23789 === ""))?class_23794:[cljs.core.str(class_name_23789),cljs.core.str(" "),cljs.core.str(class_23794)].join(''));
}
{
var G__23795 = seq__23758_23790;
var G__23796 = chunk__23759_23791;
var G__23797 = count__23760_23792;
var G__23798 = (i__23761_23793 + 1);
seq__23758_23790 = G__23795;
chunk__23759_23791 = G__23796;
count__23760_23792 = G__23797;
i__23761_23793 = G__23798;
continue;
}
} else
{var temp__4092__auto___23799 = cljs.core.seq.call(null,seq__23758_23790);if(temp__4092__auto___23799)
{var seq__23758_23800__$1 = temp__4092__auto___23799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23758_23800__$1))
{var c__8571__auto___23801 = cljs.core.chunk_first.call(null,seq__23758_23800__$1);{
var G__23802 = cljs.core.chunk_rest.call(null,seq__23758_23800__$1);
var G__23803 = c__8571__auto___23801;
var G__23804 = cljs.core.count.call(null,c__8571__auto___23801);
var G__23805 = 0;
seq__23758_23790 = G__23802;
chunk__23759_23791 = G__23803;
count__23760_23792 = G__23804;
i__23761_23793 = G__23805;
continue;
}
} else
{var class_23806 = cljs.core.first.call(null,seq__23758_23800__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_23789,class_23806)))
{} else
{elem__$1.className = (((class_name_23789 === ""))?class_23806:[cljs.core.str(class_name_23789),cljs.core.str(" "),cljs.core.str(class_23806)].join(''));
}
{
var G__23807 = cljs.core.next.call(null,seq__23758_23800__$1);
var G__23808 = null;
var G__23809 = 0;
var G__23810 = 0;
seq__23758_23790 = G__23807;
chunk__23759_23791 = G__23808;
count__23760_23792 = G__23809;
i__23761_23793 = G__23810;
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
var G__23811__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23762_23812 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__23763_23813 = null;var count__23764_23814 = 0;var i__23765_23815 = 0;while(true){
if((i__23765_23815 < count__23764_23814))
{var c_23816 = cljs.core._nth.call(null,chunk__23763_23813,i__23765_23815);add_class_BANG_.call(null,elem__$1,c_23816);
{
var G__23817 = seq__23762_23812;
var G__23818 = chunk__23763_23813;
var G__23819 = count__23764_23814;
var G__23820 = (i__23765_23815 + 1);
seq__23762_23812 = G__23817;
chunk__23763_23813 = G__23818;
count__23764_23814 = G__23819;
i__23765_23815 = G__23820;
continue;
}
} else
{var temp__4092__auto___23821 = cljs.core.seq.call(null,seq__23762_23812);if(temp__4092__auto___23821)
{var seq__23762_23822__$1 = temp__4092__auto___23821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23762_23822__$1))
{var c__8571__auto___23823 = cljs.core.chunk_first.call(null,seq__23762_23822__$1);{
var G__23824 = cljs.core.chunk_rest.call(null,seq__23762_23822__$1);
var G__23825 = c__8571__auto___23823;
var G__23826 = cljs.core.count.call(null,c__8571__auto___23823);
var G__23827 = 0;
seq__23762_23812 = G__23824;
chunk__23763_23813 = G__23825;
count__23764_23814 = G__23826;
i__23765_23815 = G__23827;
continue;
}
} else
{var c_23828 = cljs.core.first.call(null,seq__23762_23822__$1);add_class_BANG_.call(null,elem__$1,c_23828);
{
var G__23829 = cljs.core.next.call(null,seq__23762_23822__$1);
var G__23830 = null;
var G__23831 = 0;
var G__23832 = 0;
seq__23762_23812 = G__23829;
chunk__23763_23813 = G__23830;
count__23764_23814 = G__23831;
i__23765_23815 = G__23832;
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
var G__23811 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23811__delegate.call(this,elem,classes,more_classes);};
G__23811.cljs$lang$maxFixedArity = 2;
G__23811.cljs$lang$applyTo = (function (arglist__23833){
var elem = cljs.core.first(arglist__23833);
arglist__23833 = cljs.core.next(arglist__23833);
var classes = cljs.core.first(arglist__23833);
var more_classes = cljs.core.rest(arglist__23833);
return G__23811__delegate(elem,classes,more_classes);
});
G__23811.cljs$core$IFn$_invoke$arity$variadic = G__23811__delegate;
return G__23811;
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
var G__23834 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__23834;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___23843 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23843))
{var class_list_23844 = temp__4090__auto___23843;class_list_23844.remove(class$__$1);
} else
{var class_name_23845 = elem__$1.className;var new_class_name_23846 = dommy.attrs.remove_class_str.call(null,class_name_23845,class$__$1);if((class_name_23845 === new_class_name_23846))
{} else
{elem__$1.className = new_class_name_23846;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__23847__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23839 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__23840 = null;var count__23841 = 0;var i__23842 = 0;while(true){
if((i__23842 < count__23841))
{var c = cljs.core._nth.call(null,chunk__23840,i__23842);remove_class_BANG_.call(null,elem__$1,c);
{
var G__23848 = seq__23839;
var G__23849 = chunk__23840;
var G__23850 = count__23841;
var G__23851 = (i__23842 + 1);
seq__23839 = G__23848;
chunk__23840 = G__23849;
count__23841 = G__23850;
i__23842 = G__23851;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__23839);if(temp__4092__auto__)
{var seq__23839__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23839__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__23839__$1);{
var G__23852 = cljs.core.chunk_rest.call(null,seq__23839__$1);
var G__23853 = c__8571__auto__;
var G__23854 = cljs.core.count.call(null,c__8571__auto__);
var G__23855 = 0;
seq__23839 = G__23852;
chunk__23840 = G__23853;
count__23841 = G__23854;
i__23842 = G__23855;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__23839__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__23856 = cljs.core.next.call(null,seq__23839__$1);
var G__23857 = null;
var G__23858 = 0;
var G__23859 = 0;
seq__23839 = G__23856;
chunk__23840 = G__23857;
count__23841 = G__23858;
i__23842 = G__23859;
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
var G__23847 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23847__delegate.call(this,elem,class$,classes);};
G__23847.cljs$lang$maxFixedArity = 2;
G__23847.cljs$lang$applyTo = (function (arglist__23860){
var elem = cljs.core.first(arglist__23860);
arglist__23860 = cljs.core.next(arglist__23860);
var class$ = cljs.core.first(arglist__23860);
var classes = cljs.core.rest(arglist__23860);
return G__23847__delegate(elem,class$,classes);
});
G__23847.cljs$core$IFn$_invoke$arity$variadic = G__23847__delegate;
return G__23847;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___23861 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___23861))
{var class_list_23862 = temp__4090__auto___23861;class_list_23862.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__23865){var vec__23866 = p__23865;var k = cljs.core.nth.call(null,vec__23866,0,null);var v = cljs.core.nth.call(null,vec__23866,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__23873_23879 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__23874_23880 = null;var count__23875_23881 = 0;var i__23876_23882 = 0;while(true){
if((i__23876_23882 < count__23875_23881))
{var vec__23877_23883 = cljs.core._nth.call(null,chunk__23874_23880,i__23876_23882);var k_23884 = cljs.core.nth.call(null,vec__23877_23883,0,null);var v_23885 = cljs.core.nth.call(null,vec__23877_23883,1,null);(style[cljs.core.name.call(null,k_23884)] = v_23885);
{
var G__23886 = seq__23873_23879;
var G__23887 = chunk__23874_23880;
var G__23888 = count__23875_23881;
var G__23889 = (i__23876_23882 + 1);
seq__23873_23879 = G__23886;
chunk__23874_23880 = G__23887;
count__23875_23881 = G__23888;
i__23876_23882 = G__23889;
continue;
}
} else
{var temp__4092__auto___23890 = cljs.core.seq.call(null,seq__23873_23879);if(temp__4092__auto___23890)
{var seq__23873_23891__$1 = temp__4092__auto___23890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23873_23891__$1))
{var c__8571__auto___23892 = cljs.core.chunk_first.call(null,seq__23873_23891__$1);{
var G__23893 = cljs.core.chunk_rest.call(null,seq__23873_23891__$1);
var G__23894 = c__8571__auto___23892;
var G__23895 = cljs.core.count.call(null,c__8571__auto___23892);
var G__23896 = 0;
seq__23873_23879 = G__23893;
chunk__23874_23880 = G__23894;
count__23875_23881 = G__23895;
i__23876_23882 = G__23896;
continue;
}
} else
{var vec__23878_23897 = cljs.core.first.call(null,seq__23873_23891__$1);var k_23898 = cljs.core.nth.call(null,vec__23878_23897,0,null);var v_23899 = cljs.core.nth.call(null,vec__23878_23897,1,null);(style[cljs.core.name.call(null,k_23898)] = v_23899);
{
var G__23900 = cljs.core.next.call(null,seq__23873_23891__$1);
var G__23901 = null;
var G__23902 = 0;
var G__23903 = 0;
seq__23873_23879 = G__23900;
chunk__23874_23880 = G__23901;
count__23875_23881 = G__23902;
i__23876_23882 = G__23903;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23904){
var elem = cljs.core.first(arglist__23904);
var kvs = cljs.core.rest(arglist__23904);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23911_23917 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__23912_23918 = null;var count__23913_23919 = 0;var i__23914_23920 = 0;while(true){
if((i__23914_23920 < count__23913_23919))
{var vec__23915_23921 = cljs.core._nth.call(null,chunk__23912_23918,i__23914_23920);var k_23922 = cljs.core.nth.call(null,vec__23915_23921,0,null);var v_23923 = cljs.core.nth.call(null,vec__23915_23921,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_23922,[cljs.core.str(v_23923),cljs.core.str("px")].join(''));
{
var G__23924 = seq__23911_23917;
var G__23925 = chunk__23912_23918;
var G__23926 = count__23913_23919;
var G__23927 = (i__23914_23920 + 1);
seq__23911_23917 = G__23924;
chunk__23912_23918 = G__23925;
count__23913_23919 = G__23926;
i__23914_23920 = G__23927;
continue;
}
} else
{var temp__4092__auto___23928 = cljs.core.seq.call(null,seq__23911_23917);if(temp__4092__auto___23928)
{var seq__23911_23929__$1 = temp__4092__auto___23928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23911_23929__$1))
{var c__8571__auto___23930 = cljs.core.chunk_first.call(null,seq__23911_23929__$1);{
var G__23931 = cljs.core.chunk_rest.call(null,seq__23911_23929__$1);
var G__23932 = c__8571__auto___23930;
var G__23933 = cljs.core.count.call(null,c__8571__auto___23930);
var G__23934 = 0;
seq__23911_23917 = G__23931;
chunk__23912_23918 = G__23932;
count__23913_23919 = G__23933;
i__23914_23920 = G__23934;
continue;
}
} else
{var vec__23916_23935 = cljs.core.first.call(null,seq__23911_23929__$1);var k_23936 = cljs.core.nth.call(null,vec__23916_23935,0,null);var v_23937 = cljs.core.nth.call(null,vec__23916_23935,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_23936,[cljs.core.str(v_23937),cljs.core.str("px")].join(''));
{
var G__23938 = cljs.core.next.call(null,seq__23911_23929__$1);
var G__23939 = null;
var G__23940 = 0;
var G__23941 = 0;
seq__23911_23917 = G__23938;
chunk__23912_23918 = G__23939;
count__23913_23919 = G__23940;
i__23914_23920 = G__23941;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__23942){
var elem = cljs.core.first(arglist__23942);
var kvs = cljs.core.rest(arglist__23942);
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
{var G__23951 = dommy.template.__GT_node_like.call(null,elem);(G__23951[cljs.core.name.call(null,k)] = v);
return G__23951;
} else
{var G__23952 = dommy.template.__GT_node_like.call(null,elem);G__23952.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__23952;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__23959__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23953_23960 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__23954_23961 = null;var count__23955_23962 = 0;var i__23956_23963 = 0;while(true){
if((i__23956_23963 < count__23955_23962))
{var vec__23957_23964 = cljs.core._nth.call(null,chunk__23954_23961,i__23956_23963);var k_23965__$1 = cljs.core.nth.call(null,vec__23957_23964,0,null);var v_23966__$1 = cljs.core.nth.call(null,vec__23957_23964,1,null);set_attr_BANG_.call(null,elem__$1,k_23965__$1,v_23966__$1);
{
var G__23967 = seq__23953_23960;
var G__23968 = chunk__23954_23961;
var G__23969 = count__23955_23962;
var G__23970 = (i__23956_23963 + 1);
seq__23953_23960 = G__23967;
chunk__23954_23961 = G__23968;
count__23955_23962 = G__23969;
i__23956_23963 = G__23970;
continue;
}
} else
{var temp__4092__auto___23971 = cljs.core.seq.call(null,seq__23953_23960);if(temp__4092__auto___23971)
{var seq__23953_23972__$1 = temp__4092__auto___23971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23953_23972__$1))
{var c__8571__auto___23973 = cljs.core.chunk_first.call(null,seq__23953_23972__$1);{
var G__23974 = cljs.core.chunk_rest.call(null,seq__23953_23972__$1);
var G__23975 = c__8571__auto___23973;
var G__23976 = cljs.core.count.call(null,c__8571__auto___23973);
var G__23977 = 0;
seq__23953_23960 = G__23974;
chunk__23954_23961 = G__23975;
count__23955_23962 = G__23976;
i__23956_23963 = G__23977;
continue;
}
} else
{var vec__23958_23978 = cljs.core.first.call(null,seq__23953_23972__$1);var k_23979__$1 = cljs.core.nth.call(null,vec__23958_23978,0,null);var v_23980__$1 = cljs.core.nth.call(null,vec__23958_23978,1,null);set_attr_BANG_.call(null,elem__$1,k_23979__$1,v_23980__$1);
{
var G__23981 = cljs.core.next.call(null,seq__23953_23972__$1);
var G__23982 = null;
var G__23983 = 0;
var G__23984 = 0;
seq__23953_23960 = G__23981;
chunk__23954_23961 = G__23982;
count__23955_23962 = G__23983;
i__23956_23963 = G__23984;
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
var G__23959 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__23959__delegate.call(this,elem,k,v,kvs);};
G__23959.cljs$lang$maxFixedArity = 3;
G__23959.cljs$lang$applyTo = (function (arglist__23985){
var elem = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var k = cljs.core.first(arglist__23985);
arglist__23985 = cljs.core.next(arglist__23985);
var v = cljs.core.first(arglist__23985);
var kvs = cljs.core.rest(arglist__23985);
return G__23959__delegate(elem,k,v,kvs);
});
G__23959.cljs$core$IFn$_invoke$arity$variadic = G__23959__delegate;
return G__23959;
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
var G__23994__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__23990_23995 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__23991_23996 = null;var count__23992_23997 = 0;var i__23993_23998 = 0;while(true){
if((i__23993_23998 < count__23992_23997))
{var k_23999__$1 = cljs.core._nth.call(null,chunk__23991_23996,i__23993_23998);remove_attr_BANG_.call(null,elem__$1,k_23999__$1);
{
var G__24000 = seq__23990_23995;
var G__24001 = chunk__23991_23996;
var G__24002 = count__23992_23997;
var G__24003 = (i__23993_23998 + 1);
seq__23990_23995 = G__24000;
chunk__23991_23996 = G__24001;
count__23992_23997 = G__24002;
i__23993_23998 = G__24003;
continue;
}
} else
{var temp__4092__auto___24004 = cljs.core.seq.call(null,seq__23990_23995);if(temp__4092__auto___24004)
{var seq__23990_24005__$1 = temp__4092__auto___24004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23990_24005__$1))
{var c__8571__auto___24006 = cljs.core.chunk_first.call(null,seq__23990_24005__$1);{
var G__24007 = cljs.core.chunk_rest.call(null,seq__23990_24005__$1);
var G__24008 = c__8571__auto___24006;
var G__24009 = cljs.core.count.call(null,c__8571__auto___24006);
var G__24010 = 0;
seq__23990_23995 = G__24007;
chunk__23991_23996 = G__24008;
count__23992_23997 = G__24009;
i__23993_23998 = G__24010;
continue;
}
} else
{var k_24011__$1 = cljs.core.first.call(null,seq__23990_24005__$1);remove_attr_BANG_.call(null,elem__$1,k_24011__$1);
{
var G__24012 = cljs.core.next.call(null,seq__23990_24005__$1);
var G__24013 = null;
var G__24014 = 0;
var G__24015 = 0;
seq__23990_23995 = G__24012;
chunk__23991_23996 = G__24013;
count__23992_23997 = G__24014;
i__23993_23998 = G__24015;
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
var G__23994 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__23994__delegate.call(this,elem,k,ks);};
G__23994.cljs$lang$maxFixedArity = 2;
G__23994.cljs$lang$applyTo = (function (arglist__24016){
var elem = cljs.core.first(arglist__24016);
arglist__24016 = cljs.core.next(arglist__24016);
var k = cljs.core.first(arglist__24016);
var ks = cljs.core.rest(arglist__24016);
return G__23994__delegate(elem,k,ks);
});
G__23994.cljs$core$IFn$_invoke$arity$variadic = G__23994__delegate;
return G__23994;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__24018 = dommy.template.__GT_node_like.call(null,elem);G__24018.style.display = ((show_QMARK_)?"":"none");
return G__24018;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__24020 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__24020,false);
return G__24020;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__24022 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__24022,true);
return G__24022;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__24024 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__24024["constructor"] = Object);
return G__24024;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
