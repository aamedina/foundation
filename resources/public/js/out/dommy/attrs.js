// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8211__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8211__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8211__auto__;
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
var G__181850 = (i + class$.length);
start_from = G__181850;
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
{var temp__4090__auto___181875 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___181875))
{var class_list_181876 = temp__4090__auto___181875;var seq__181863_181877 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__181864_181878 = null;var count__181865_181879 = 0;var i__181866_181880 = 0;while(true){
if((i__181866_181880 < count__181865_181879))
{var class_181881 = cljs.core._nth.call(null,chunk__181864_181878,i__181866_181880);class_list_181876.add(class_181881);
{
var G__181882 = seq__181863_181877;
var G__181883 = chunk__181864_181878;
var G__181884 = count__181865_181879;
var G__181885 = (i__181866_181880 + 1);
seq__181863_181877 = G__181882;
chunk__181864_181878 = G__181883;
count__181865_181879 = G__181884;
i__181866_181880 = G__181885;
continue;
}
} else
{var temp__4092__auto___181886 = cljs.core.seq.call(null,seq__181863_181877);if(temp__4092__auto___181886)
{var seq__181863_181887__$1 = temp__4092__auto___181886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181863_181887__$1))
{var c__8952__auto___181888 = cljs.core.chunk_first.call(null,seq__181863_181887__$1);{
var G__181889 = cljs.core.chunk_rest.call(null,seq__181863_181887__$1);
var G__181890 = c__8952__auto___181888;
var G__181891 = cljs.core.count.call(null,c__8952__auto___181888);
var G__181892 = 0;
seq__181863_181877 = G__181889;
chunk__181864_181878 = G__181890;
count__181865_181879 = G__181891;
i__181866_181880 = G__181892;
continue;
}
} else
{var class_181893 = cljs.core.first.call(null,seq__181863_181887__$1);class_list_181876.add(class_181893);
{
var G__181894 = cljs.core.next.call(null,seq__181863_181887__$1);
var G__181895 = null;
var G__181896 = 0;
var G__181897 = 0;
seq__181863_181877 = G__181894;
chunk__181864_181878 = G__181895;
count__181865_181879 = G__181896;
i__181866_181880 = G__181897;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_181898 = elem__$1.className;var seq__181867_181899 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__181868_181900 = null;var count__181869_181901 = 0;var i__181870_181902 = 0;while(true){
if((i__181870_181902 < count__181869_181901))
{var class_181903 = cljs.core._nth.call(null,chunk__181868_181900,i__181870_181902);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_181898,class_181903)))
{} else
{elem__$1.className = (((class_name_181898 === ""))?class_181903:[cljs.core.str(class_name_181898),cljs.core.str(" "),cljs.core.str(class_181903)].join(''));
}
{
var G__181904 = seq__181867_181899;
var G__181905 = chunk__181868_181900;
var G__181906 = count__181869_181901;
var G__181907 = (i__181870_181902 + 1);
seq__181867_181899 = G__181904;
chunk__181868_181900 = G__181905;
count__181869_181901 = G__181906;
i__181870_181902 = G__181907;
continue;
}
} else
{var temp__4092__auto___181908 = cljs.core.seq.call(null,seq__181867_181899);if(temp__4092__auto___181908)
{var seq__181867_181909__$1 = temp__4092__auto___181908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181867_181909__$1))
{var c__8952__auto___181910 = cljs.core.chunk_first.call(null,seq__181867_181909__$1);{
var G__181911 = cljs.core.chunk_rest.call(null,seq__181867_181909__$1);
var G__181912 = c__8952__auto___181910;
var G__181913 = cljs.core.count.call(null,c__8952__auto___181910);
var G__181914 = 0;
seq__181867_181899 = G__181911;
chunk__181868_181900 = G__181912;
count__181869_181901 = G__181913;
i__181870_181902 = G__181914;
continue;
}
} else
{var class_181915 = cljs.core.first.call(null,seq__181867_181909__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_181898,class_181915)))
{} else
{elem__$1.className = (((class_name_181898 === ""))?class_181915:[cljs.core.str(class_name_181898),cljs.core.str(" "),cljs.core.str(class_181915)].join(''));
}
{
var G__181916 = cljs.core.next.call(null,seq__181867_181909__$1);
var G__181917 = null;
var G__181918 = 0;
var G__181919 = 0;
seq__181867_181899 = G__181916;
chunk__181868_181900 = G__181917;
count__181869_181901 = G__181918;
i__181870_181902 = G__181919;
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
var G__181920__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__181871_181921 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__181872_181922 = null;var count__181873_181923 = 0;var i__181874_181924 = 0;while(true){
if((i__181874_181924 < count__181873_181923))
{var c_181925 = cljs.core._nth.call(null,chunk__181872_181922,i__181874_181924);add_class_BANG_.call(null,elem__$1,c_181925);
{
var G__181926 = seq__181871_181921;
var G__181927 = chunk__181872_181922;
var G__181928 = count__181873_181923;
var G__181929 = (i__181874_181924 + 1);
seq__181871_181921 = G__181926;
chunk__181872_181922 = G__181927;
count__181873_181923 = G__181928;
i__181874_181924 = G__181929;
continue;
}
} else
{var temp__4092__auto___181930 = cljs.core.seq.call(null,seq__181871_181921);if(temp__4092__auto___181930)
{var seq__181871_181931__$1 = temp__4092__auto___181930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181871_181931__$1))
{var c__8952__auto___181932 = cljs.core.chunk_first.call(null,seq__181871_181931__$1);{
var G__181933 = cljs.core.chunk_rest.call(null,seq__181871_181931__$1);
var G__181934 = c__8952__auto___181932;
var G__181935 = cljs.core.count.call(null,c__8952__auto___181932);
var G__181936 = 0;
seq__181871_181921 = G__181933;
chunk__181872_181922 = G__181934;
count__181873_181923 = G__181935;
i__181874_181924 = G__181936;
continue;
}
} else
{var c_181937 = cljs.core.first.call(null,seq__181871_181931__$1);add_class_BANG_.call(null,elem__$1,c_181937);
{
var G__181938 = cljs.core.next.call(null,seq__181871_181931__$1);
var G__181939 = null;
var G__181940 = 0;
var G__181941 = 0;
seq__181871_181921 = G__181938;
chunk__181872_181922 = G__181939;
count__181873_181923 = G__181940;
i__181874_181924 = G__181941;
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
var G__181920 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__181920__delegate.call(this,elem,classes,more_classes);};
G__181920.cljs$lang$maxFixedArity = 2;
G__181920.cljs$lang$applyTo = (function (arglist__181942){
var elem = cljs.core.first(arglist__181942);
arglist__181942 = cljs.core.next(arglist__181942);
var classes = cljs.core.first(arglist__181942);
var more_classes = cljs.core.rest(arglist__181942);
return G__181920__delegate(elem,classes,more_classes);
});
G__181920.cljs$core$IFn$_invoke$arity$variadic = G__181920__delegate;
return G__181920;
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
var G__181943 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__181943;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___181952 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___181952))
{var class_list_181953 = temp__4090__auto___181952;class_list_181953.remove(class$__$1);
} else
{var class_name_181954 = elem__$1.className;var new_class_name_181955 = dommy.attrs.remove_class_str.call(null,class_name_181954,class$__$1);if((class_name_181954 === new_class_name_181955))
{} else
{elem__$1.className = new_class_name_181955;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__181956__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__181948 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__181949 = null;var count__181950 = 0;var i__181951 = 0;while(true){
if((i__181951 < count__181950))
{var c = cljs.core._nth.call(null,chunk__181949,i__181951);remove_class_BANG_.call(null,elem__$1,c);
{
var G__181957 = seq__181948;
var G__181958 = chunk__181949;
var G__181959 = count__181950;
var G__181960 = (i__181951 + 1);
seq__181948 = G__181957;
chunk__181949 = G__181958;
count__181950 = G__181959;
i__181951 = G__181960;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__181948);if(temp__4092__auto__)
{var seq__181948__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181948__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__181948__$1);{
var G__181961 = cljs.core.chunk_rest.call(null,seq__181948__$1);
var G__181962 = c__8952__auto__;
var G__181963 = cljs.core.count.call(null,c__8952__auto__);
var G__181964 = 0;
seq__181948 = G__181961;
chunk__181949 = G__181962;
count__181950 = G__181963;
i__181951 = G__181964;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__181948__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__181965 = cljs.core.next.call(null,seq__181948__$1);
var G__181966 = null;
var G__181967 = 0;
var G__181968 = 0;
seq__181948 = G__181965;
chunk__181949 = G__181966;
count__181950 = G__181967;
i__181951 = G__181968;
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
var G__181956 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__181956__delegate.call(this,elem,class$,classes);};
G__181956.cljs$lang$maxFixedArity = 2;
G__181956.cljs$lang$applyTo = (function (arglist__181969){
var elem = cljs.core.first(arglist__181969);
arglist__181969 = cljs.core.next(arglist__181969);
var class$ = cljs.core.first(arglist__181969);
var classes = cljs.core.rest(arglist__181969);
return G__181956__delegate(elem,class$,classes);
});
G__181956.cljs$core$IFn$_invoke$arity$variadic = G__181956__delegate;
return G__181956;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___181970 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___181970))
{var class_list_181971 = temp__4090__auto___181970;class_list_181971.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__181974){var vec__181975 = p__181974;var k = cljs.core.nth.call(null,vec__181975,0,null);var v = cljs.core.nth.call(null,vec__181975,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__181982_181988 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__181983_181989 = null;var count__181984_181990 = 0;var i__181985_181991 = 0;while(true){
if((i__181985_181991 < count__181984_181990))
{var vec__181986_181992 = cljs.core._nth.call(null,chunk__181983_181989,i__181985_181991);var k_181993 = cljs.core.nth.call(null,vec__181986_181992,0,null);var v_181994 = cljs.core.nth.call(null,vec__181986_181992,1,null);(style[cljs.core.name.call(null,k_181993)] = v_181994);
{
var G__181995 = seq__181982_181988;
var G__181996 = chunk__181983_181989;
var G__181997 = count__181984_181990;
var G__181998 = (i__181985_181991 + 1);
seq__181982_181988 = G__181995;
chunk__181983_181989 = G__181996;
count__181984_181990 = G__181997;
i__181985_181991 = G__181998;
continue;
}
} else
{var temp__4092__auto___181999 = cljs.core.seq.call(null,seq__181982_181988);if(temp__4092__auto___181999)
{var seq__181982_182000__$1 = temp__4092__auto___181999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181982_182000__$1))
{var c__8952__auto___182001 = cljs.core.chunk_first.call(null,seq__181982_182000__$1);{
var G__182002 = cljs.core.chunk_rest.call(null,seq__181982_182000__$1);
var G__182003 = c__8952__auto___182001;
var G__182004 = cljs.core.count.call(null,c__8952__auto___182001);
var G__182005 = 0;
seq__181982_181988 = G__182002;
chunk__181983_181989 = G__182003;
count__181984_181990 = G__182004;
i__181985_181991 = G__182005;
continue;
}
} else
{var vec__181987_182006 = cljs.core.first.call(null,seq__181982_182000__$1);var k_182007 = cljs.core.nth.call(null,vec__181987_182006,0,null);var v_182008 = cljs.core.nth.call(null,vec__181987_182006,1,null);(style[cljs.core.name.call(null,k_182007)] = v_182008);
{
var G__182009 = cljs.core.next.call(null,seq__181982_182000__$1);
var G__182010 = null;
var G__182011 = 0;
var G__182012 = 0;
seq__181982_181988 = G__182009;
chunk__181983_181989 = G__182010;
count__181984_181990 = G__182011;
i__181985_181991 = G__182012;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__182013){
var elem = cljs.core.first(arglist__182013);
var kvs = cljs.core.rest(arglist__182013);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__182020_182026 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__182021_182027 = null;var count__182022_182028 = 0;var i__182023_182029 = 0;while(true){
if((i__182023_182029 < count__182022_182028))
{var vec__182024_182030 = cljs.core._nth.call(null,chunk__182021_182027,i__182023_182029);var k_182031 = cljs.core.nth.call(null,vec__182024_182030,0,null);var v_182032 = cljs.core.nth.call(null,vec__182024_182030,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_182031,[cljs.core.str(v_182032),cljs.core.str("px")].join(''));
{
var G__182033 = seq__182020_182026;
var G__182034 = chunk__182021_182027;
var G__182035 = count__182022_182028;
var G__182036 = (i__182023_182029 + 1);
seq__182020_182026 = G__182033;
chunk__182021_182027 = G__182034;
count__182022_182028 = G__182035;
i__182023_182029 = G__182036;
continue;
}
} else
{var temp__4092__auto___182037 = cljs.core.seq.call(null,seq__182020_182026);if(temp__4092__auto___182037)
{var seq__182020_182038__$1 = temp__4092__auto___182037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182020_182038__$1))
{var c__8952__auto___182039 = cljs.core.chunk_first.call(null,seq__182020_182038__$1);{
var G__182040 = cljs.core.chunk_rest.call(null,seq__182020_182038__$1);
var G__182041 = c__8952__auto___182039;
var G__182042 = cljs.core.count.call(null,c__8952__auto___182039);
var G__182043 = 0;
seq__182020_182026 = G__182040;
chunk__182021_182027 = G__182041;
count__182022_182028 = G__182042;
i__182023_182029 = G__182043;
continue;
}
} else
{var vec__182025_182044 = cljs.core.first.call(null,seq__182020_182038__$1);var k_182045 = cljs.core.nth.call(null,vec__182025_182044,0,null);var v_182046 = cljs.core.nth.call(null,vec__182025_182044,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_182045,[cljs.core.str(v_182046),cljs.core.str("px")].join(''));
{
var G__182047 = cljs.core.next.call(null,seq__182020_182038__$1);
var G__182048 = null;
var G__182049 = 0;
var G__182050 = 0;
seq__182020_182026 = G__182047;
chunk__182021_182027 = G__182048;
count__182022_182028 = G__182049;
i__182023_182029 = G__182050;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__182051){
var elem = cljs.core.first(arglist__182051);
var kvs = cljs.core.rest(arglist__182051);
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
{var G__182060 = dommy.template.__GT_node_like.call(null,elem);(G__182060[cljs.core.name.call(null,k)] = v);
return G__182060;
} else
{var G__182061 = dommy.template.__GT_node_like.call(null,elem);G__182061.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__182061;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__182068__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__182062_182069 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__182063_182070 = null;var count__182064_182071 = 0;var i__182065_182072 = 0;while(true){
if((i__182065_182072 < count__182064_182071))
{var vec__182066_182073 = cljs.core._nth.call(null,chunk__182063_182070,i__182065_182072);var k_182074__$1 = cljs.core.nth.call(null,vec__182066_182073,0,null);var v_182075__$1 = cljs.core.nth.call(null,vec__182066_182073,1,null);set_attr_BANG_.call(null,elem__$1,k_182074__$1,v_182075__$1);
{
var G__182076 = seq__182062_182069;
var G__182077 = chunk__182063_182070;
var G__182078 = count__182064_182071;
var G__182079 = (i__182065_182072 + 1);
seq__182062_182069 = G__182076;
chunk__182063_182070 = G__182077;
count__182064_182071 = G__182078;
i__182065_182072 = G__182079;
continue;
}
} else
{var temp__4092__auto___182080 = cljs.core.seq.call(null,seq__182062_182069);if(temp__4092__auto___182080)
{var seq__182062_182081__$1 = temp__4092__auto___182080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182062_182081__$1))
{var c__8952__auto___182082 = cljs.core.chunk_first.call(null,seq__182062_182081__$1);{
var G__182083 = cljs.core.chunk_rest.call(null,seq__182062_182081__$1);
var G__182084 = c__8952__auto___182082;
var G__182085 = cljs.core.count.call(null,c__8952__auto___182082);
var G__182086 = 0;
seq__182062_182069 = G__182083;
chunk__182063_182070 = G__182084;
count__182064_182071 = G__182085;
i__182065_182072 = G__182086;
continue;
}
} else
{var vec__182067_182087 = cljs.core.first.call(null,seq__182062_182081__$1);var k_182088__$1 = cljs.core.nth.call(null,vec__182067_182087,0,null);var v_182089__$1 = cljs.core.nth.call(null,vec__182067_182087,1,null);set_attr_BANG_.call(null,elem__$1,k_182088__$1,v_182089__$1);
{
var G__182090 = cljs.core.next.call(null,seq__182062_182081__$1);
var G__182091 = null;
var G__182092 = 0;
var G__182093 = 0;
seq__182062_182069 = G__182090;
chunk__182063_182070 = G__182091;
count__182064_182071 = G__182092;
i__182065_182072 = G__182093;
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
var G__182068 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__182068__delegate.call(this,elem,k,v,kvs);};
G__182068.cljs$lang$maxFixedArity = 3;
G__182068.cljs$lang$applyTo = (function (arglist__182094){
var elem = cljs.core.first(arglist__182094);
arglist__182094 = cljs.core.next(arglist__182094);
var k = cljs.core.first(arglist__182094);
arglist__182094 = cljs.core.next(arglist__182094);
var v = cljs.core.first(arglist__182094);
var kvs = cljs.core.rest(arglist__182094);
return G__182068__delegate(elem,k,v,kvs);
});
G__182068.cljs$core$IFn$_invoke$arity$variadic = G__182068__delegate;
return G__182068;
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
var G__182103__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__182099_182104 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__182100_182105 = null;var count__182101_182106 = 0;var i__182102_182107 = 0;while(true){
if((i__182102_182107 < count__182101_182106))
{var k_182108__$1 = cljs.core._nth.call(null,chunk__182100_182105,i__182102_182107);remove_attr_BANG_.call(null,elem__$1,k_182108__$1);
{
var G__182109 = seq__182099_182104;
var G__182110 = chunk__182100_182105;
var G__182111 = count__182101_182106;
var G__182112 = (i__182102_182107 + 1);
seq__182099_182104 = G__182109;
chunk__182100_182105 = G__182110;
count__182101_182106 = G__182111;
i__182102_182107 = G__182112;
continue;
}
} else
{var temp__4092__auto___182113 = cljs.core.seq.call(null,seq__182099_182104);if(temp__4092__auto___182113)
{var seq__182099_182114__$1 = temp__4092__auto___182113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182099_182114__$1))
{var c__8952__auto___182115 = cljs.core.chunk_first.call(null,seq__182099_182114__$1);{
var G__182116 = cljs.core.chunk_rest.call(null,seq__182099_182114__$1);
var G__182117 = c__8952__auto___182115;
var G__182118 = cljs.core.count.call(null,c__8952__auto___182115);
var G__182119 = 0;
seq__182099_182104 = G__182116;
chunk__182100_182105 = G__182117;
count__182101_182106 = G__182118;
i__182102_182107 = G__182119;
continue;
}
} else
{var k_182120__$1 = cljs.core.first.call(null,seq__182099_182114__$1);remove_attr_BANG_.call(null,elem__$1,k_182120__$1);
{
var G__182121 = cljs.core.next.call(null,seq__182099_182114__$1);
var G__182122 = null;
var G__182123 = 0;
var G__182124 = 0;
seq__182099_182104 = G__182121;
chunk__182100_182105 = G__182122;
count__182101_182106 = G__182123;
i__182102_182107 = G__182124;
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
var G__182103 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__182103__delegate.call(this,elem,k,ks);};
G__182103.cljs$lang$maxFixedArity = 2;
G__182103.cljs$lang$applyTo = (function (arglist__182125){
var elem = cljs.core.first(arglist__182125);
arglist__182125 = cljs.core.next(arglist__182125);
var k = cljs.core.first(arglist__182125);
var ks = cljs.core.rest(arglist__182125);
return G__182103__delegate(elem,k,ks);
});
G__182103.cljs$core$IFn$_invoke$arity$variadic = G__182103__delegate;
return G__182103;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__182127 = dommy.template.__GT_node_like.call(null,elem);G__182127.style.display = ((show_QMARK_)?"":"none");
return G__182127;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__182129 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__182129,false);
return G__182129;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__182131 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__182131,true);
return G__182131;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__182133 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__182133["constructor"] = Object);
return G__182133;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map