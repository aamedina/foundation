// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13776__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13776__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13776__auto__;
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
var G__43829 = (i + class$.length);
start_from = G__43829;
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
{var temp__4090__auto___43854 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___43854))
{var class_list_43855 = temp__4090__auto___43854;var seq__43842_43856 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__43843_43857 = null;var count__43844_43858 = 0;var i__43845_43859 = 0;while(true){
if((i__43845_43859 < count__43844_43858))
{var class_43860 = cljs.core._nth.call(null,chunk__43843_43857,i__43845_43859);class_list_43855.add(class_43860);
{
var G__43861 = seq__43842_43856;
var G__43862 = chunk__43843_43857;
var G__43863 = count__43844_43858;
var G__43864 = (i__43845_43859 + 1);
seq__43842_43856 = G__43861;
chunk__43843_43857 = G__43862;
count__43844_43858 = G__43863;
i__43845_43859 = G__43864;
continue;
}
} else
{var temp__4092__auto___43865 = cljs.core.seq.call(null,seq__43842_43856);if(temp__4092__auto___43865)
{var seq__43842_43866__$1 = temp__4092__auto___43865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43842_43866__$1))
{var c__14512__auto___43867 = cljs.core.chunk_first.call(null,seq__43842_43866__$1);{
var G__43868 = cljs.core.chunk_rest.call(null,seq__43842_43866__$1);
var G__43869 = c__14512__auto___43867;
var G__43870 = cljs.core.count.call(null,c__14512__auto___43867);
var G__43871 = 0;
seq__43842_43856 = G__43868;
chunk__43843_43857 = G__43869;
count__43844_43858 = G__43870;
i__43845_43859 = G__43871;
continue;
}
} else
{var class_43872 = cljs.core.first.call(null,seq__43842_43866__$1);class_list_43855.add(class_43872);
{
var G__43873 = cljs.core.next.call(null,seq__43842_43866__$1);
var G__43874 = null;
var G__43875 = 0;
var G__43876 = 0;
seq__43842_43856 = G__43873;
chunk__43843_43857 = G__43874;
count__43844_43858 = G__43875;
i__43845_43859 = G__43876;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_43877 = elem__$1.className;var seq__43846_43878 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__43847_43879 = null;var count__43848_43880 = 0;var i__43849_43881 = 0;while(true){
if((i__43849_43881 < count__43848_43880))
{var class_43882 = cljs.core._nth.call(null,chunk__43847_43879,i__43849_43881);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_43877,class_43882)))
{} else
{elem__$1.className = (((class_name_43877 === ""))?class_43882:[cljs.core.str(class_name_43877),cljs.core.str(" "),cljs.core.str(class_43882)].join(''));
}
{
var G__43883 = seq__43846_43878;
var G__43884 = chunk__43847_43879;
var G__43885 = count__43848_43880;
var G__43886 = (i__43849_43881 + 1);
seq__43846_43878 = G__43883;
chunk__43847_43879 = G__43884;
count__43848_43880 = G__43885;
i__43849_43881 = G__43886;
continue;
}
} else
{var temp__4092__auto___43887 = cljs.core.seq.call(null,seq__43846_43878);if(temp__4092__auto___43887)
{var seq__43846_43888__$1 = temp__4092__auto___43887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43846_43888__$1))
{var c__14512__auto___43889 = cljs.core.chunk_first.call(null,seq__43846_43888__$1);{
var G__43890 = cljs.core.chunk_rest.call(null,seq__43846_43888__$1);
var G__43891 = c__14512__auto___43889;
var G__43892 = cljs.core.count.call(null,c__14512__auto___43889);
var G__43893 = 0;
seq__43846_43878 = G__43890;
chunk__43847_43879 = G__43891;
count__43848_43880 = G__43892;
i__43849_43881 = G__43893;
continue;
}
} else
{var class_43894 = cljs.core.first.call(null,seq__43846_43888__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_43877,class_43894)))
{} else
{elem__$1.className = (((class_name_43877 === ""))?class_43894:[cljs.core.str(class_name_43877),cljs.core.str(" "),cljs.core.str(class_43894)].join(''));
}
{
var G__43895 = cljs.core.next.call(null,seq__43846_43888__$1);
var G__43896 = null;
var G__43897 = 0;
var G__43898 = 0;
seq__43846_43878 = G__43895;
chunk__43847_43879 = G__43896;
count__43848_43880 = G__43897;
i__43849_43881 = G__43898;
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
var G__43899__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__43850_43900 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__43851_43901 = null;var count__43852_43902 = 0;var i__43853_43903 = 0;while(true){
if((i__43853_43903 < count__43852_43902))
{var c_43904 = cljs.core._nth.call(null,chunk__43851_43901,i__43853_43903);add_class_BANG_.call(null,elem__$1,c_43904);
{
var G__43905 = seq__43850_43900;
var G__43906 = chunk__43851_43901;
var G__43907 = count__43852_43902;
var G__43908 = (i__43853_43903 + 1);
seq__43850_43900 = G__43905;
chunk__43851_43901 = G__43906;
count__43852_43902 = G__43907;
i__43853_43903 = G__43908;
continue;
}
} else
{var temp__4092__auto___43909 = cljs.core.seq.call(null,seq__43850_43900);if(temp__4092__auto___43909)
{var seq__43850_43910__$1 = temp__4092__auto___43909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43850_43910__$1))
{var c__14512__auto___43911 = cljs.core.chunk_first.call(null,seq__43850_43910__$1);{
var G__43912 = cljs.core.chunk_rest.call(null,seq__43850_43910__$1);
var G__43913 = c__14512__auto___43911;
var G__43914 = cljs.core.count.call(null,c__14512__auto___43911);
var G__43915 = 0;
seq__43850_43900 = G__43912;
chunk__43851_43901 = G__43913;
count__43852_43902 = G__43914;
i__43853_43903 = G__43915;
continue;
}
} else
{var c_43916 = cljs.core.first.call(null,seq__43850_43910__$1);add_class_BANG_.call(null,elem__$1,c_43916);
{
var G__43917 = cljs.core.next.call(null,seq__43850_43910__$1);
var G__43918 = null;
var G__43919 = 0;
var G__43920 = 0;
seq__43850_43900 = G__43917;
chunk__43851_43901 = G__43918;
count__43852_43902 = G__43919;
i__43853_43903 = G__43920;
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
var G__43899 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43899__delegate.call(this,elem,classes,more_classes);};
G__43899.cljs$lang$maxFixedArity = 2;
G__43899.cljs$lang$applyTo = (function (arglist__43921){
var elem = cljs.core.first(arglist__43921);
arglist__43921 = cljs.core.next(arglist__43921);
var classes = cljs.core.first(arglist__43921);
var more_classes = cljs.core.rest(arglist__43921);
return G__43899__delegate(elem,classes,more_classes);
});
G__43899.cljs$core$IFn$_invoke$arity$variadic = G__43899__delegate;
return G__43899;
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
var G__43922 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__43922;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___43931 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___43931))
{var class_list_43932 = temp__4090__auto___43931;class_list_43932.remove(class$__$1);
} else
{var class_name_43933 = elem__$1.className;var new_class_name_43934 = dommy.attrs.remove_class_str.call(null,class_name_43933,class$__$1);if((class_name_43933 === new_class_name_43934))
{} else
{elem__$1.className = new_class_name_43934;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__43935__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__43927 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__43928 = null;var count__43929 = 0;var i__43930 = 0;while(true){
if((i__43930 < count__43929))
{var c = cljs.core._nth.call(null,chunk__43928,i__43930);remove_class_BANG_.call(null,elem__$1,c);
{
var G__43936 = seq__43927;
var G__43937 = chunk__43928;
var G__43938 = count__43929;
var G__43939 = (i__43930 + 1);
seq__43927 = G__43936;
chunk__43928 = G__43937;
count__43929 = G__43938;
i__43930 = G__43939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__43927);if(temp__4092__auto__)
{var seq__43927__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43927__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__43927__$1);{
var G__43940 = cljs.core.chunk_rest.call(null,seq__43927__$1);
var G__43941 = c__14512__auto__;
var G__43942 = cljs.core.count.call(null,c__14512__auto__);
var G__43943 = 0;
seq__43927 = G__43940;
chunk__43928 = G__43941;
count__43929 = G__43942;
i__43930 = G__43943;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__43927__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__43944 = cljs.core.next.call(null,seq__43927__$1);
var G__43945 = null;
var G__43946 = 0;
var G__43947 = 0;
seq__43927 = G__43944;
chunk__43928 = G__43945;
count__43929 = G__43946;
i__43930 = G__43947;
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
var G__43935 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__43935__delegate.call(this,elem,class$,classes);};
G__43935.cljs$lang$maxFixedArity = 2;
G__43935.cljs$lang$applyTo = (function (arglist__43948){
var elem = cljs.core.first(arglist__43948);
arglist__43948 = cljs.core.next(arglist__43948);
var class$ = cljs.core.first(arglist__43948);
var classes = cljs.core.rest(arglist__43948);
return G__43935__delegate(elem,class$,classes);
});
G__43935.cljs$core$IFn$_invoke$arity$variadic = G__43935__delegate;
return G__43935;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___43949 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___43949))
{var class_list_43950 = temp__4090__auto___43949;class_list_43950.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__43953){var vec__43954 = p__43953;var k = cljs.core.nth.call(null,vec__43954,0,null);var v = cljs.core.nth.call(null,vec__43954,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__43961_43967 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__43962_43968 = null;var count__43963_43969 = 0;var i__43964_43970 = 0;while(true){
if((i__43964_43970 < count__43963_43969))
{var vec__43965_43971 = cljs.core._nth.call(null,chunk__43962_43968,i__43964_43970);var k_43972 = cljs.core.nth.call(null,vec__43965_43971,0,null);var v_43973 = cljs.core.nth.call(null,vec__43965_43971,1,null);(style[cljs.core.name.call(null,k_43972)] = v_43973);
{
var G__43974 = seq__43961_43967;
var G__43975 = chunk__43962_43968;
var G__43976 = count__43963_43969;
var G__43977 = (i__43964_43970 + 1);
seq__43961_43967 = G__43974;
chunk__43962_43968 = G__43975;
count__43963_43969 = G__43976;
i__43964_43970 = G__43977;
continue;
}
} else
{var temp__4092__auto___43978 = cljs.core.seq.call(null,seq__43961_43967);if(temp__4092__auto___43978)
{var seq__43961_43979__$1 = temp__4092__auto___43978;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43961_43979__$1))
{var c__14512__auto___43980 = cljs.core.chunk_first.call(null,seq__43961_43979__$1);{
var G__43981 = cljs.core.chunk_rest.call(null,seq__43961_43979__$1);
var G__43982 = c__14512__auto___43980;
var G__43983 = cljs.core.count.call(null,c__14512__auto___43980);
var G__43984 = 0;
seq__43961_43967 = G__43981;
chunk__43962_43968 = G__43982;
count__43963_43969 = G__43983;
i__43964_43970 = G__43984;
continue;
}
} else
{var vec__43966_43985 = cljs.core.first.call(null,seq__43961_43979__$1);var k_43986 = cljs.core.nth.call(null,vec__43966_43985,0,null);var v_43987 = cljs.core.nth.call(null,vec__43966_43985,1,null);(style[cljs.core.name.call(null,k_43986)] = v_43987);
{
var G__43988 = cljs.core.next.call(null,seq__43961_43979__$1);
var G__43989 = null;
var G__43990 = 0;
var G__43991 = 0;
seq__43961_43967 = G__43988;
chunk__43962_43968 = G__43989;
count__43963_43969 = G__43990;
i__43964_43970 = G__43991;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__43992){
var elem = cljs.core.first(arglist__43992);
var kvs = cljs.core.rest(arglist__43992);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__43999_44005 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__44000_44006 = null;var count__44001_44007 = 0;var i__44002_44008 = 0;while(true){
if((i__44002_44008 < count__44001_44007))
{var vec__44003_44009 = cljs.core._nth.call(null,chunk__44000_44006,i__44002_44008);var k_44010 = cljs.core.nth.call(null,vec__44003_44009,0,null);var v_44011 = cljs.core.nth.call(null,vec__44003_44009,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_44010,[cljs.core.str(v_44011),cljs.core.str("px")].join(''));
{
var G__44012 = seq__43999_44005;
var G__44013 = chunk__44000_44006;
var G__44014 = count__44001_44007;
var G__44015 = (i__44002_44008 + 1);
seq__43999_44005 = G__44012;
chunk__44000_44006 = G__44013;
count__44001_44007 = G__44014;
i__44002_44008 = G__44015;
continue;
}
} else
{var temp__4092__auto___44016 = cljs.core.seq.call(null,seq__43999_44005);if(temp__4092__auto___44016)
{var seq__43999_44017__$1 = temp__4092__auto___44016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43999_44017__$1))
{var c__14512__auto___44018 = cljs.core.chunk_first.call(null,seq__43999_44017__$1);{
var G__44019 = cljs.core.chunk_rest.call(null,seq__43999_44017__$1);
var G__44020 = c__14512__auto___44018;
var G__44021 = cljs.core.count.call(null,c__14512__auto___44018);
var G__44022 = 0;
seq__43999_44005 = G__44019;
chunk__44000_44006 = G__44020;
count__44001_44007 = G__44021;
i__44002_44008 = G__44022;
continue;
}
} else
{var vec__44004_44023 = cljs.core.first.call(null,seq__43999_44017__$1);var k_44024 = cljs.core.nth.call(null,vec__44004_44023,0,null);var v_44025 = cljs.core.nth.call(null,vec__44004_44023,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_44024,[cljs.core.str(v_44025),cljs.core.str("px")].join(''));
{
var G__44026 = cljs.core.next.call(null,seq__43999_44017__$1);
var G__44027 = null;
var G__44028 = 0;
var G__44029 = 0;
seq__43999_44005 = G__44026;
chunk__44000_44006 = G__44027;
count__44001_44007 = G__44028;
i__44002_44008 = G__44029;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__44030){
var elem = cljs.core.first(arglist__44030);
var kvs = cljs.core.rest(arglist__44030);
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
{var G__44039 = dommy.template.__GT_node_like.call(null,elem);(G__44039[cljs.core.name.call(null,k)] = v);
return G__44039;
} else
{var G__44040 = dommy.template.__GT_node_like.call(null,elem);G__44040.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__44040;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__44047__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__44041_44048 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__44042_44049 = null;var count__44043_44050 = 0;var i__44044_44051 = 0;while(true){
if((i__44044_44051 < count__44043_44050))
{var vec__44045_44052 = cljs.core._nth.call(null,chunk__44042_44049,i__44044_44051);var k_44053__$1 = cljs.core.nth.call(null,vec__44045_44052,0,null);var v_44054__$1 = cljs.core.nth.call(null,vec__44045_44052,1,null);set_attr_BANG_.call(null,elem__$1,k_44053__$1,v_44054__$1);
{
var G__44055 = seq__44041_44048;
var G__44056 = chunk__44042_44049;
var G__44057 = count__44043_44050;
var G__44058 = (i__44044_44051 + 1);
seq__44041_44048 = G__44055;
chunk__44042_44049 = G__44056;
count__44043_44050 = G__44057;
i__44044_44051 = G__44058;
continue;
}
} else
{var temp__4092__auto___44059 = cljs.core.seq.call(null,seq__44041_44048);if(temp__4092__auto___44059)
{var seq__44041_44060__$1 = temp__4092__auto___44059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44041_44060__$1))
{var c__14512__auto___44061 = cljs.core.chunk_first.call(null,seq__44041_44060__$1);{
var G__44062 = cljs.core.chunk_rest.call(null,seq__44041_44060__$1);
var G__44063 = c__14512__auto___44061;
var G__44064 = cljs.core.count.call(null,c__14512__auto___44061);
var G__44065 = 0;
seq__44041_44048 = G__44062;
chunk__44042_44049 = G__44063;
count__44043_44050 = G__44064;
i__44044_44051 = G__44065;
continue;
}
} else
{var vec__44046_44066 = cljs.core.first.call(null,seq__44041_44060__$1);var k_44067__$1 = cljs.core.nth.call(null,vec__44046_44066,0,null);var v_44068__$1 = cljs.core.nth.call(null,vec__44046_44066,1,null);set_attr_BANG_.call(null,elem__$1,k_44067__$1,v_44068__$1);
{
var G__44069 = cljs.core.next.call(null,seq__44041_44060__$1);
var G__44070 = null;
var G__44071 = 0;
var G__44072 = 0;
seq__44041_44048 = G__44069;
chunk__44042_44049 = G__44070;
count__44043_44050 = G__44071;
i__44044_44051 = G__44072;
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
var G__44047 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__44047__delegate.call(this,elem,k,v,kvs);};
G__44047.cljs$lang$maxFixedArity = 3;
G__44047.cljs$lang$applyTo = (function (arglist__44073){
var elem = cljs.core.first(arglist__44073);
arglist__44073 = cljs.core.next(arglist__44073);
var k = cljs.core.first(arglist__44073);
arglist__44073 = cljs.core.next(arglist__44073);
var v = cljs.core.first(arglist__44073);
var kvs = cljs.core.rest(arglist__44073);
return G__44047__delegate(elem,k,v,kvs);
});
G__44047.cljs$core$IFn$_invoke$arity$variadic = G__44047__delegate;
return G__44047;
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
var G__44082__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__44078_44083 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__44079_44084 = null;var count__44080_44085 = 0;var i__44081_44086 = 0;while(true){
if((i__44081_44086 < count__44080_44085))
{var k_44087__$1 = cljs.core._nth.call(null,chunk__44079_44084,i__44081_44086);remove_attr_BANG_.call(null,elem__$1,k_44087__$1);
{
var G__44088 = seq__44078_44083;
var G__44089 = chunk__44079_44084;
var G__44090 = count__44080_44085;
var G__44091 = (i__44081_44086 + 1);
seq__44078_44083 = G__44088;
chunk__44079_44084 = G__44089;
count__44080_44085 = G__44090;
i__44081_44086 = G__44091;
continue;
}
} else
{var temp__4092__auto___44092 = cljs.core.seq.call(null,seq__44078_44083);if(temp__4092__auto___44092)
{var seq__44078_44093__$1 = temp__4092__auto___44092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44078_44093__$1))
{var c__14512__auto___44094 = cljs.core.chunk_first.call(null,seq__44078_44093__$1);{
var G__44095 = cljs.core.chunk_rest.call(null,seq__44078_44093__$1);
var G__44096 = c__14512__auto___44094;
var G__44097 = cljs.core.count.call(null,c__14512__auto___44094);
var G__44098 = 0;
seq__44078_44083 = G__44095;
chunk__44079_44084 = G__44096;
count__44080_44085 = G__44097;
i__44081_44086 = G__44098;
continue;
}
} else
{var k_44099__$1 = cljs.core.first.call(null,seq__44078_44093__$1);remove_attr_BANG_.call(null,elem__$1,k_44099__$1);
{
var G__44100 = cljs.core.next.call(null,seq__44078_44093__$1);
var G__44101 = null;
var G__44102 = 0;
var G__44103 = 0;
seq__44078_44083 = G__44100;
chunk__44079_44084 = G__44101;
count__44080_44085 = G__44102;
i__44081_44086 = G__44103;
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
var G__44082 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__44082__delegate.call(this,elem,k,ks);};
G__44082.cljs$lang$maxFixedArity = 2;
G__44082.cljs$lang$applyTo = (function (arglist__44104){
var elem = cljs.core.first(arglist__44104);
arglist__44104 = cljs.core.next(arglist__44104);
var k = cljs.core.first(arglist__44104);
var ks = cljs.core.rest(arglist__44104);
return G__44082__delegate(elem,k,ks);
});
G__44082.cljs$core$IFn$_invoke$arity$variadic = G__44082__delegate;
return G__44082;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__44106 = dommy.template.__GT_node_like.call(null,elem);G__44106.style.display = ((show_QMARK_)?"":"none");
return G__44106;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__44108 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__44108,false);
return G__44108;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__44110 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__44110,true);
return G__44110;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__44112 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__44112["constructor"] = Object);
return G__44112;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map