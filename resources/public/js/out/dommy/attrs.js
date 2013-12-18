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
var G__25914 = (i + class$.length);
start_from = G__25914;
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
{var temp__4090__auto___25939 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25939))
{var class_list_25940 = temp__4090__auto___25939;var seq__25927_25941 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25928_25942 = null;var count__25929_25943 = 0;var i__25930_25944 = 0;while(true){
if((i__25930_25944 < count__25929_25943))
{var class_25945 = cljs.core._nth.call(null,chunk__25928_25942,i__25930_25944);class_list_25940.add(class_25945);
{
var G__25946 = seq__25927_25941;
var G__25947 = chunk__25928_25942;
var G__25948 = count__25929_25943;
var G__25949 = (i__25930_25944 + 1);
seq__25927_25941 = G__25946;
chunk__25928_25942 = G__25947;
count__25929_25943 = G__25948;
i__25930_25944 = G__25949;
continue;
}
} else
{var temp__4092__auto___25950 = cljs.core.seq.call(null,seq__25927_25941);if(temp__4092__auto___25950)
{var seq__25927_25951__$1 = temp__4092__auto___25950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25927_25951__$1))
{var c__8974__auto___25952 = cljs.core.chunk_first.call(null,seq__25927_25951__$1);{
var G__25953 = cljs.core.chunk_rest.call(null,seq__25927_25951__$1);
var G__25954 = c__8974__auto___25952;
var G__25955 = cljs.core.count.call(null,c__8974__auto___25952);
var G__25956 = 0;
seq__25927_25941 = G__25953;
chunk__25928_25942 = G__25954;
count__25929_25943 = G__25955;
i__25930_25944 = G__25956;
continue;
}
} else
{var class_25957 = cljs.core.first.call(null,seq__25927_25951__$1);class_list_25940.add(class_25957);
{
var G__25958 = cljs.core.next.call(null,seq__25927_25951__$1);
var G__25959 = null;
var G__25960 = 0;
var G__25961 = 0;
seq__25927_25941 = G__25958;
chunk__25928_25942 = G__25959;
count__25929_25943 = G__25960;
i__25930_25944 = G__25961;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_25962 = elem__$1.className;var seq__25931_25963 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25932_25964 = null;var count__25933_25965 = 0;var i__25934_25966 = 0;while(true){
if((i__25934_25966 < count__25933_25965))
{var class_25967 = cljs.core._nth.call(null,chunk__25932_25964,i__25934_25966);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25962,class_25967)))
{} else
{elem__$1.className = (((class_name_25962 === ""))?class_25967:[cljs.core.str(class_name_25962),cljs.core.str(" "),cljs.core.str(class_25967)].join(''));
}
{
var G__25968 = seq__25931_25963;
var G__25969 = chunk__25932_25964;
var G__25970 = count__25933_25965;
var G__25971 = (i__25934_25966 + 1);
seq__25931_25963 = G__25968;
chunk__25932_25964 = G__25969;
count__25933_25965 = G__25970;
i__25934_25966 = G__25971;
continue;
}
} else
{var temp__4092__auto___25972 = cljs.core.seq.call(null,seq__25931_25963);if(temp__4092__auto___25972)
{var seq__25931_25973__$1 = temp__4092__auto___25972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25931_25973__$1))
{var c__8974__auto___25974 = cljs.core.chunk_first.call(null,seq__25931_25973__$1);{
var G__25975 = cljs.core.chunk_rest.call(null,seq__25931_25973__$1);
var G__25976 = c__8974__auto___25974;
var G__25977 = cljs.core.count.call(null,c__8974__auto___25974);
var G__25978 = 0;
seq__25931_25963 = G__25975;
chunk__25932_25964 = G__25976;
count__25933_25965 = G__25977;
i__25934_25966 = G__25978;
continue;
}
} else
{var class_25979 = cljs.core.first.call(null,seq__25931_25973__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25962,class_25979)))
{} else
{elem__$1.className = (((class_name_25962 === ""))?class_25979:[cljs.core.str(class_name_25962),cljs.core.str(" "),cljs.core.str(class_25979)].join(''));
}
{
var G__25980 = cljs.core.next.call(null,seq__25931_25973__$1);
var G__25981 = null;
var G__25982 = 0;
var G__25983 = 0;
seq__25931_25963 = G__25980;
chunk__25932_25964 = G__25981;
count__25933_25965 = G__25982;
i__25934_25966 = G__25983;
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
var G__25984__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25935_25985 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__25936_25986 = null;var count__25937_25987 = 0;var i__25938_25988 = 0;while(true){
if((i__25938_25988 < count__25937_25987))
{var c_25989 = cljs.core._nth.call(null,chunk__25936_25986,i__25938_25988);add_class_BANG_.call(null,elem__$1,c_25989);
{
var G__25990 = seq__25935_25985;
var G__25991 = chunk__25936_25986;
var G__25992 = count__25937_25987;
var G__25993 = (i__25938_25988 + 1);
seq__25935_25985 = G__25990;
chunk__25936_25986 = G__25991;
count__25937_25987 = G__25992;
i__25938_25988 = G__25993;
continue;
}
} else
{var temp__4092__auto___25994 = cljs.core.seq.call(null,seq__25935_25985);if(temp__4092__auto___25994)
{var seq__25935_25995__$1 = temp__4092__auto___25994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25935_25995__$1))
{var c__8974__auto___25996 = cljs.core.chunk_first.call(null,seq__25935_25995__$1);{
var G__25997 = cljs.core.chunk_rest.call(null,seq__25935_25995__$1);
var G__25998 = c__8974__auto___25996;
var G__25999 = cljs.core.count.call(null,c__8974__auto___25996);
var G__26000 = 0;
seq__25935_25985 = G__25997;
chunk__25936_25986 = G__25998;
count__25937_25987 = G__25999;
i__25938_25988 = G__26000;
continue;
}
} else
{var c_26001 = cljs.core.first.call(null,seq__25935_25995__$1);add_class_BANG_.call(null,elem__$1,c_26001);
{
var G__26002 = cljs.core.next.call(null,seq__25935_25995__$1);
var G__26003 = null;
var G__26004 = 0;
var G__26005 = 0;
seq__25935_25985 = G__26002;
chunk__25936_25986 = G__26003;
count__25937_25987 = G__26004;
i__25938_25988 = G__26005;
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
var G__25984 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25984__delegate.call(this,elem,classes,more_classes);};
G__25984.cljs$lang$maxFixedArity = 2;
G__25984.cljs$lang$applyTo = (function (arglist__26006){
var elem = cljs.core.first(arglist__26006);
arglist__26006 = cljs.core.next(arglist__26006);
var classes = cljs.core.first(arglist__26006);
var more_classes = cljs.core.rest(arglist__26006);
return G__25984__delegate(elem,classes,more_classes);
});
G__25984.cljs$core$IFn$_invoke$arity$variadic = G__25984__delegate;
return G__25984;
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
var G__26007 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__26007;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___26016 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___26016))
{var class_list_26017 = temp__4090__auto___26016;class_list_26017.remove(class$__$1);
} else
{var class_name_26018 = elem__$1.className;var new_class_name_26019 = dommy.attrs.remove_class_str.call(null,class_name_26018,class$__$1);if((class_name_26018 === new_class_name_26019))
{} else
{elem__$1.className = new_class_name_26019;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__26020__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26012 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__26013 = null;var count__26014 = 0;var i__26015 = 0;while(true){
if((i__26015 < count__26014))
{var c = cljs.core._nth.call(null,chunk__26013,i__26015);remove_class_BANG_.call(null,elem__$1,c);
{
var G__26021 = seq__26012;
var G__26022 = chunk__26013;
var G__26023 = count__26014;
var G__26024 = (i__26015 + 1);
seq__26012 = G__26021;
chunk__26013 = G__26022;
count__26014 = G__26023;
i__26015 = G__26024;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26012);if(temp__4092__auto__)
{var seq__26012__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26012__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__26012__$1);{
var G__26025 = cljs.core.chunk_rest.call(null,seq__26012__$1);
var G__26026 = c__8974__auto__;
var G__26027 = cljs.core.count.call(null,c__8974__auto__);
var G__26028 = 0;
seq__26012 = G__26025;
chunk__26013 = G__26026;
count__26014 = G__26027;
i__26015 = G__26028;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__26012__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__26029 = cljs.core.next.call(null,seq__26012__$1);
var G__26030 = null;
var G__26031 = 0;
var G__26032 = 0;
seq__26012 = G__26029;
chunk__26013 = G__26030;
count__26014 = G__26031;
i__26015 = G__26032;
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
var G__26020 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26020__delegate.call(this,elem,class$,classes);};
G__26020.cljs$lang$maxFixedArity = 2;
G__26020.cljs$lang$applyTo = (function (arglist__26033){
var elem = cljs.core.first(arglist__26033);
arglist__26033 = cljs.core.next(arglist__26033);
var class$ = cljs.core.first(arglist__26033);
var classes = cljs.core.rest(arglist__26033);
return G__26020__delegate(elem,class$,classes);
});
G__26020.cljs$core$IFn$_invoke$arity$variadic = G__26020__delegate;
return G__26020;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___26034 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___26034))
{var class_list_26035 = temp__4090__auto___26034;class_list_26035.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__26038){var vec__26039 = p__26038;var k = cljs.core.nth.call(null,vec__26039,0,null);var v = cljs.core.nth.call(null,vec__26039,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__26046_26052 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__26047_26053 = null;var count__26048_26054 = 0;var i__26049_26055 = 0;while(true){
if((i__26049_26055 < count__26048_26054))
{var vec__26050_26056 = cljs.core._nth.call(null,chunk__26047_26053,i__26049_26055);var k_26057 = cljs.core.nth.call(null,vec__26050_26056,0,null);var v_26058 = cljs.core.nth.call(null,vec__26050_26056,1,null);(style[cljs.core.name.call(null,k_26057)] = v_26058);
{
var G__26059 = seq__26046_26052;
var G__26060 = chunk__26047_26053;
var G__26061 = count__26048_26054;
var G__26062 = (i__26049_26055 + 1);
seq__26046_26052 = G__26059;
chunk__26047_26053 = G__26060;
count__26048_26054 = G__26061;
i__26049_26055 = G__26062;
continue;
}
} else
{var temp__4092__auto___26063 = cljs.core.seq.call(null,seq__26046_26052);if(temp__4092__auto___26063)
{var seq__26046_26064__$1 = temp__4092__auto___26063;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26046_26064__$1))
{var c__8974__auto___26065 = cljs.core.chunk_first.call(null,seq__26046_26064__$1);{
var G__26066 = cljs.core.chunk_rest.call(null,seq__26046_26064__$1);
var G__26067 = c__8974__auto___26065;
var G__26068 = cljs.core.count.call(null,c__8974__auto___26065);
var G__26069 = 0;
seq__26046_26052 = G__26066;
chunk__26047_26053 = G__26067;
count__26048_26054 = G__26068;
i__26049_26055 = G__26069;
continue;
}
} else
{var vec__26051_26070 = cljs.core.first.call(null,seq__26046_26064__$1);var k_26071 = cljs.core.nth.call(null,vec__26051_26070,0,null);var v_26072 = cljs.core.nth.call(null,vec__26051_26070,1,null);(style[cljs.core.name.call(null,k_26071)] = v_26072);
{
var G__26073 = cljs.core.next.call(null,seq__26046_26064__$1);
var G__26074 = null;
var G__26075 = 0;
var G__26076 = 0;
seq__26046_26052 = G__26073;
chunk__26047_26053 = G__26074;
count__26048_26054 = G__26075;
i__26049_26055 = G__26076;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26077){
var elem = cljs.core.first(arglist__26077);
var kvs = cljs.core.rest(arglist__26077);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26084_26090 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__26085_26091 = null;var count__26086_26092 = 0;var i__26087_26093 = 0;while(true){
if((i__26087_26093 < count__26086_26092))
{var vec__26088_26094 = cljs.core._nth.call(null,chunk__26085_26091,i__26087_26093);var k_26095 = cljs.core.nth.call(null,vec__26088_26094,0,null);var v_26096 = cljs.core.nth.call(null,vec__26088_26094,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_26095,[cljs.core.str(v_26096),cljs.core.str("px")].join(''));
{
var G__26097 = seq__26084_26090;
var G__26098 = chunk__26085_26091;
var G__26099 = count__26086_26092;
var G__26100 = (i__26087_26093 + 1);
seq__26084_26090 = G__26097;
chunk__26085_26091 = G__26098;
count__26086_26092 = G__26099;
i__26087_26093 = G__26100;
continue;
}
} else
{var temp__4092__auto___26101 = cljs.core.seq.call(null,seq__26084_26090);if(temp__4092__auto___26101)
{var seq__26084_26102__$1 = temp__4092__auto___26101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26084_26102__$1))
{var c__8974__auto___26103 = cljs.core.chunk_first.call(null,seq__26084_26102__$1);{
var G__26104 = cljs.core.chunk_rest.call(null,seq__26084_26102__$1);
var G__26105 = c__8974__auto___26103;
var G__26106 = cljs.core.count.call(null,c__8974__auto___26103);
var G__26107 = 0;
seq__26084_26090 = G__26104;
chunk__26085_26091 = G__26105;
count__26086_26092 = G__26106;
i__26087_26093 = G__26107;
continue;
}
} else
{var vec__26089_26108 = cljs.core.first.call(null,seq__26084_26102__$1);var k_26109 = cljs.core.nth.call(null,vec__26089_26108,0,null);var v_26110 = cljs.core.nth.call(null,vec__26089_26108,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_26109,[cljs.core.str(v_26110),cljs.core.str("px")].join(''));
{
var G__26111 = cljs.core.next.call(null,seq__26084_26102__$1);
var G__26112 = null;
var G__26113 = 0;
var G__26114 = 0;
seq__26084_26090 = G__26111;
chunk__26085_26091 = G__26112;
count__26086_26092 = G__26113;
i__26087_26093 = G__26114;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__26115){
var elem = cljs.core.first(arglist__26115);
var kvs = cljs.core.rest(arglist__26115);
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
{var G__26124 = dommy.template.__GT_node_like.call(null,elem);(G__26124[cljs.core.name.call(null,k)] = v);
return G__26124;
} else
{var G__26125 = dommy.template.__GT_node_like.call(null,elem);G__26125.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__26125;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__26132__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26126_26133 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__26127_26134 = null;var count__26128_26135 = 0;var i__26129_26136 = 0;while(true){
if((i__26129_26136 < count__26128_26135))
{var vec__26130_26137 = cljs.core._nth.call(null,chunk__26127_26134,i__26129_26136);var k_26138__$1 = cljs.core.nth.call(null,vec__26130_26137,0,null);var v_26139__$1 = cljs.core.nth.call(null,vec__26130_26137,1,null);set_attr_BANG_.call(null,elem__$1,k_26138__$1,v_26139__$1);
{
var G__26140 = seq__26126_26133;
var G__26141 = chunk__26127_26134;
var G__26142 = count__26128_26135;
var G__26143 = (i__26129_26136 + 1);
seq__26126_26133 = G__26140;
chunk__26127_26134 = G__26141;
count__26128_26135 = G__26142;
i__26129_26136 = G__26143;
continue;
}
} else
{var temp__4092__auto___26144 = cljs.core.seq.call(null,seq__26126_26133);if(temp__4092__auto___26144)
{var seq__26126_26145__$1 = temp__4092__auto___26144;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26126_26145__$1))
{var c__8974__auto___26146 = cljs.core.chunk_first.call(null,seq__26126_26145__$1);{
var G__26147 = cljs.core.chunk_rest.call(null,seq__26126_26145__$1);
var G__26148 = c__8974__auto___26146;
var G__26149 = cljs.core.count.call(null,c__8974__auto___26146);
var G__26150 = 0;
seq__26126_26133 = G__26147;
chunk__26127_26134 = G__26148;
count__26128_26135 = G__26149;
i__26129_26136 = G__26150;
continue;
}
} else
{var vec__26131_26151 = cljs.core.first.call(null,seq__26126_26145__$1);var k_26152__$1 = cljs.core.nth.call(null,vec__26131_26151,0,null);var v_26153__$1 = cljs.core.nth.call(null,vec__26131_26151,1,null);set_attr_BANG_.call(null,elem__$1,k_26152__$1,v_26153__$1);
{
var G__26154 = cljs.core.next.call(null,seq__26126_26145__$1);
var G__26155 = null;
var G__26156 = 0;
var G__26157 = 0;
seq__26126_26133 = G__26154;
chunk__26127_26134 = G__26155;
count__26128_26135 = G__26156;
i__26129_26136 = G__26157;
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
var G__26132 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26132__delegate.call(this,elem,k,v,kvs);};
G__26132.cljs$lang$maxFixedArity = 3;
G__26132.cljs$lang$applyTo = (function (arglist__26158){
var elem = cljs.core.first(arglist__26158);
arglist__26158 = cljs.core.next(arglist__26158);
var k = cljs.core.first(arglist__26158);
arglist__26158 = cljs.core.next(arglist__26158);
var v = cljs.core.first(arglist__26158);
var kvs = cljs.core.rest(arglist__26158);
return G__26132__delegate(elem,k,v,kvs);
});
G__26132.cljs$core$IFn$_invoke$arity$variadic = G__26132__delegate;
return G__26132;
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
var G__26167__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26163_26168 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__26164_26169 = null;var count__26165_26170 = 0;var i__26166_26171 = 0;while(true){
if((i__26166_26171 < count__26165_26170))
{var k_26172__$1 = cljs.core._nth.call(null,chunk__26164_26169,i__26166_26171);remove_attr_BANG_.call(null,elem__$1,k_26172__$1);
{
var G__26173 = seq__26163_26168;
var G__26174 = chunk__26164_26169;
var G__26175 = count__26165_26170;
var G__26176 = (i__26166_26171 + 1);
seq__26163_26168 = G__26173;
chunk__26164_26169 = G__26174;
count__26165_26170 = G__26175;
i__26166_26171 = G__26176;
continue;
}
} else
{var temp__4092__auto___26177 = cljs.core.seq.call(null,seq__26163_26168);if(temp__4092__auto___26177)
{var seq__26163_26178__$1 = temp__4092__auto___26177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26163_26178__$1))
{var c__8974__auto___26179 = cljs.core.chunk_first.call(null,seq__26163_26178__$1);{
var G__26180 = cljs.core.chunk_rest.call(null,seq__26163_26178__$1);
var G__26181 = c__8974__auto___26179;
var G__26182 = cljs.core.count.call(null,c__8974__auto___26179);
var G__26183 = 0;
seq__26163_26168 = G__26180;
chunk__26164_26169 = G__26181;
count__26165_26170 = G__26182;
i__26166_26171 = G__26183;
continue;
}
} else
{var k_26184__$1 = cljs.core.first.call(null,seq__26163_26178__$1);remove_attr_BANG_.call(null,elem__$1,k_26184__$1);
{
var G__26185 = cljs.core.next.call(null,seq__26163_26178__$1);
var G__26186 = null;
var G__26187 = 0;
var G__26188 = 0;
seq__26163_26168 = G__26185;
chunk__26164_26169 = G__26186;
count__26165_26170 = G__26187;
i__26166_26171 = G__26188;
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
var G__26167 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26167__delegate.call(this,elem,k,ks);};
G__26167.cljs$lang$maxFixedArity = 2;
G__26167.cljs$lang$applyTo = (function (arglist__26189){
var elem = cljs.core.first(arglist__26189);
arglist__26189 = cljs.core.next(arglist__26189);
var k = cljs.core.first(arglist__26189);
var ks = cljs.core.rest(arglist__26189);
return G__26167__delegate(elem,k,ks);
});
G__26167.cljs$core$IFn$_invoke$arity$variadic = G__26167__delegate;
return G__26167;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__26191 = dommy.template.__GT_node_like.call(null,elem);G__26191.style.display = ((show_QMARK_)?"":"none");
return G__26191;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__26193 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__26193,false);
return G__26193;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__26195 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__26195,true);
return G__26195;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__26197 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__26197["constructor"] = Object);
return G__26197;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map