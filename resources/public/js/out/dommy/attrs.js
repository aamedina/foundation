// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8218__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8218__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8218__auto__;
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
var G__25897 = (i + class$.length);
start_from = G__25897;
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
{var temp__4090__auto___25922 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25922))
{var class_list_25923 = temp__4090__auto___25922;var seq__25910_25924 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25911_25925 = null;var count__25912_25926 = 0;var i__25913_25927 = 0;while(true){
if((i__25913_25927 < count__25912_25926))
{var class_25928 = cljs.core._nth.call(null,chunk__25911_25925,i__25913_25927);class_list_25923.add(class_25928);
{
var G__25929 = seq__25910_25924;
var G__25930 = chunk__25911_25925;
var G__25931 = count__25912_25926;
var G__25932 = (i__25913_25927 + 1);
seq__25910_25924 = G__25929;
chunk__25911_25925 = G__25930;
count__25912_25926 = G__25931;
i__25913_25927 = G__25932;
continue;
}
} else
{var temp__4092__auto___25933 = cljs.core.seq.call(null,seq__25910_25924);if(temp__4092__auto___25933)
{var seq__25910_25934__$1 = temp__4092__auto___25933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25910_25934__$1))
{var c__8959__auto___25935 = cljs.core.chunk_first.call(null,seq__25910_25934__$1);{
var G__25936 = cljs.core.chunk_rest.call(null,seq__25910_25934__$1);
var G__25937 = c__8959__auto___25935;
var G__25938 = cljs.core.count.call(null,c__8959__auto___25935);
var G__25939 = 0;
seq__25910_25924 = G__25936;
chunk__25911_25925 = G__25937;
count__25912_25926 = G__25938;
i__25913_25927 = G__25939;
continue;
}
} else
{var class_25940 = cljs.core.first.call(null,seq__25910_25934__$1);class_list_25923.add(class_25940);
{
var G__25941 = cljs.core.next.call(null,seq__25910_25934__$1);
var G__25942 = null;
var G__25943 = 0;
var G__25944 = 0;
seq__25910_25924 = G__25941;
chunk__25911_25925 = G__25942;
count__25912_25926 = G__25943;
i__25913_25927 = G__25944;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_25945 = elem__$1.className;var seq__25914_25946 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25915_25947 = null;var count__25916_25948 = 0;var i__25917_25949 = 0;while(true){
if((i__25917_25949 < count__25916_25948))
{var class_25950 = cljs.core._nth.call(null,chunk__25915_25947,i__25917_25949);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25945,class_25950)))
{} else
{elem__$1.className = (((class_name_25945 === ""))?class_25950:[cljs.core.str(class_name_25945),cljs.core.str(" "),cljs.core.str(class_25950)].join(''));
}
{
var G__25951 = seq__25914_25946;
var G__25952 = chunk__25915_25947;
var G__25953 = count__25916_25948;
var G__25954 = (i__25917_25949 + 1);
seq__25914_25946 = G__25951;
chunk__25915_25947 = G__25952;
count__25916_25948 = G__25953;
i__25917_25949 = G__25954;
continue;
}
} else
{var temp__4092__auto___25955 = cljs.core.seq.call(null,seq__25914_25946);if(temp__4092__auto___25955)
{var seq__25914_25956__$1 = temp__4092__auto___25955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25914_25956__$1))
{var c__8959__auto___25957 = cljs.core.chunk_first.call(null,seq__25914_25956__$1);{
var G__25958 = cljs.core.chunk_rest.call(null,seq__25914_25956__$1);
var G__25959 = c__8959__auto___25957;
var G__25960 = cljs.core.count.call(null,c__8959__auto___25957);
var G__25961 = 0;
seq__25914_25946 = G__25958;
chunk__25915_25947 = G__25959;
count__25916_25948 = G__25960;
i__25917_25949 = G__25961;
continue;
}
} else
{var class_25962 = cljs.core.first.call(null,seq__25914_25956__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25945,class_25962)))
{} else
{elem__$1.className = (((class_name_25945 === ""))?class_25962:[cljs.core.str(class_name_25945),cljs.core.str(" "),cljs.core.str(class_25962)].join(''));
}
{
var G__25963 = cljs.core.next.call(null,seq__25914_25956__$1);
var G__25964 = null;
var G__25965 = 0;
var G__25966 = 0;
seq__25914_25946 = G__25963;
chunk__25915_25947 = G__25964;
count__25916_25948 = G__25965;
i__25917_25949 = G__25966;
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
var G__25967__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25918_25968 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__25919_25969 = null;var count__25920_25970 = 0;var i__25921_25971 = 0;while(true){
if((i__25921_25971 < count__25920_25970))
{var c_25972 = cljs.core._nth.call(null,chunk__25919_25969,i__25921_25971);add_class_BANG_.call(null,elem__$1,c_25972);
{
var G__25973 = seq__25918_25968;
var G__25974 = chunk__25919_25969;
var G__25975 = count__25920_25970;
var G__25976 = (i__25921_25971 + 1);
seq__25918_25968 = G__25973;
chunk__25919_25969 = G__25974;
count__25920_25970 = G__25975;
i__25921_25971 = G__25976;
continue;
}
} else
{var temp__4092__auto___25977 = cljs.core.seq.call(null,seq__25918_25968);if(temp__4092__auto___25977)
{var seq__25918_25978__$1 = temp__4092__auto___25977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25918_25978__$1))
{var c__8959__auto___25979 = cljs.core.chunk_first.call(null,seq__25918_25978__$1);{
var G__25980 = cljs.core.chunk_rest.call(null,seq__25918_25978__$1);
var G__25981 = c__8959__auto___25979;
var G__25982 = cljs.core.count.call(null,c__8959__auto___25979);
var G__25983 = 0;
seq__25918_25968 = G__25980;
chunk__25919_25969 = G__25981;
count__25920_25970 = G__25982;
i__25921_25971 = G__25983;
continue;
}
} else
{var c_25984 = cljs.core.first.call(null,seq__25918_25978__$1);add_class_BANG_.call(null,elem__$1,c_25984);
{
var G__25985 = cljs.core.next.call(null,seq__25918_25978__$1);
var G__25986 = null;
var G__25987 = 0;
var G__25988 = 0;
seq__25918_25968 = G__25985;
chunk__25919_25969 = G__25986;
count__25920_25970 = G__25987;
i__25921_25971 = G__25988;
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
var G__25967 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25967__delegate.call(this,elem,classes,more_classes);};
G__25967.cljs$lang$maxFixedArity = 2;
G__25967.cljs$lang$applyTo = (function (arglist__25989){
var elem = cljs.core.first(arglist__25989);
arglist__25989 = cljs.core.next(arglist__25989);
var classes = cljs.core.first(arglist__25989);
var more_classes = cljs.core.rest(arglist__25989);
return G__25967__delegate(elem,classes,more_classes);
});
G__25967.cljs$core$IFn$_invoke$arity$variadic = G__25967__delegate;
return G__25967;
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
var G__25990 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__25990;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25999 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25999))
{var class_list_26000 = temp__4090__auto___25999;class_list_26000.remove(class$__$1);
} else
{var class_name_26001 = elem__$1.className;var new_class_name_26002 = dommy.attrs.remove_class_str.call(null,class_name_26001,class$__$1);if((class_name_26001 === new_class_name_26002))
{} else
{elem__$1.className = new_class_name_26002;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__26003__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25995 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__25996 = null;var count__25997 = 0;var i__25998 = 0;while(true){
if((i__25998 < count__25997))
{var c = cljs.core._nth.call(null,chunk__25996,i__25998);remove_class_BANG_.call(null,elem__$1,c);
{
var G__26004 = seq__25995;
var G__26005 = chunk__25996;
var G__26006 = count__25997;
var G__26007 = (i__25998 + 1);
seq__25995 = G__26004;
chunk__25996 = G__26005;
count__25997 = G__26006;
i__25998 = G__26007;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25995);if(temp__4092__auto__)
{var seq__25995__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25995__$1))
{var c__8959__auto__ = cljs.core.chunk_first.call(null,seq__25995__$1);{
var G__26008 = cljs.core.chunk_rest.call(null,seq__25995__$1);
var G__26009 = c__8959__auto__;
var G__26010 = cljs.core.count.call(null,c__8959__auto__);
var G__26011 = 0;
seq__25995 = G__26008;
chunk__25996 = G__26009;
count__25997 = G__26010;
i__25998 = G__26011;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__25995__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__26012 = cljs.core.next.call(null,seq__25995__$1);
var G__26013 = null;
var G__26014 = 0;
var G__26015 = 0;
seq__25995 = G__26012;
chunk__25996 = G__26013;
count__25997 = G__26014;
i__25998 = G__26015;
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
var G__26003 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26003__delegate.call(this,elem,class$,classes);};
G__26003.cljs$lang$maxFixedArity = 2;
G__26003.cljs$lang$applyTo = (function (arglist__26016){
var elem = cljs.core.first(arglist__26016);
arglist__26016 = cljs.core.next(arglist__26016);
var class$ = cljs.core.first(arglist__26016);
var classes = cljs.core.rest(arglist__26016);
return G__26003__delegate(elem,class$,classes);
});
G__26003.cljs$core$IFn$_invoke$arity$variadic = G__26003__delegate;
return G__26003;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___26017 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___26017))
{var class_list_26018 = temp__4090__auto___26017;class_list_26018.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__26021){var vec__26022 = p__26021;var k = cljs.core.nth.call(null,vec__26022,0,null);var v = cljs.core.nth.call(null,vec__26022,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__26029_26035 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__26030_26036 = null;var count__26031_26037 = 0;var i__26032_26038 = 0;while(true){
if((i__26032_26038 < count__26031_26037))
{var vec__26033_26039 = cljs.core._nth.call(null,chunk__26030_26036,i__26032_26038);var k_26040 = cljs.core.nth.call(null,vec__26033_26039,0,null);var v_26041 = cljs.core.nth.call(null,vec__26033_26039,1,null);(style[cljs.core.name.call(null,k_26040)] = v_26041);
{
var G__26042 = seq__26029_26035;
var G__26043 = chunk__26030_26036;
var G__26044 = count__26031_26037;
var G__26045 = (i__26032_26038 + 1);
seq__26029_26035 = G__26042;
chunk__26030_26036 = G__26043;
count__26031_26037 = G__26044;
i__26032_26038 = G__26045;
continue;
}
} else
{var temp__4092__auto___26046 = cljs.core.seq.call(null,seq__26029_26035);if(temp__4092__auto___26046)
{var seq__26029_26047__$1 = temp__4092__auto___26046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26029_26047__$1))
{var c__8959__auto___26048 = cljs.core.chunk_first.call(null,seq__26029_26047__$1);{
var G__26049 = cljs.core.chunk_rest.call(null,seq__26029_26047__$1);
var G__26050 = c__8959__auto___26048;
var G__26051 = cljs.core.count.call(null,c__8959__auto___26048);
var G__26052 = 0;
seq__26029_26035 = G__26049;
chunk__26030_26036 = G__26050;
count__26031_26037 = G__26051;
i__26032_26038 = G__26052;
continue;
}
} else
{var vec__26034_26053 = cljs.core.first.call(null,seq__26029_26047__$1);var k_26054 = cljs.core.nth.call(null,vec__26034_26053,0,null);var v_26055 = cljs.core.nth.call(null,vec__26034_26053,1,null);(style[cljs.core.name.call(null,k_26054)] = v_26055);
{
var G__26056 = cljs.core.next.call(null,seq__26029_26047__$1);
var G__26057 = null;
var G__26058 = 0;
var G__26059 = 0;
seq__26029_26035 = G__26056;
chunk__26030_26036 = G__26057;
count__26031_26037 = G__26058;
i__26032_26038 = G__26059;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26060){
var elem = cljs.core.first(arglist__26060);
var kvs = cljs.core.rest(arglist__26060);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26067_26073 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__26068_26074 = null;var count__26069_26075 = 0;var i__26070_26076 = 0;while(true){
if((i__26070_26076 < count__26069_26075))
{var vec__26071_26077 = cljs.core._nth.call(null,chunk__26068_26074,i__26070_26076);var k_26078 = cljs.core.nth.call(null,vec__26071_26077,0,null);var v_26079 = cljs.core.nth.call(null,vec__26071_26077,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_26078,[cljs.core.str(v_26079),cljs.core.str("px")].join(''));
{
var G__26080 = seq__26067_26073;
var G__26081 = chunk__26068_26074;
var G__26082 = count__26069_26075;
var G__26083 = (i__26070_26076 + 1);
seq__26067_26073 = G__26080;
chunk__26068_26074 = G__26081;
count__26069_26075 = G__26082;
i__26070_26076 = G__26083;
continue;
}
} else
{var temp__4092__auto___26084 = cljs.core.seq.call(null,seq__26067_26073);if(temp__4092__auto___26084)
{var seq__26067_26085__$1 = temp__4092__auto___26084;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26067_26085__$1))
{var c__8959__auto___26086 = cljs.core.chunk_first.call(null,seq__26067_26085__$1);{
var G__26087 = cljs.core.chunk_rest.call(null,seq__26067_26085__$1);
var G__26088 = c__8959__auto___26086;
var G__26089 = cljs.core.count.call(null,c__8959__auto___26086);
var G__26090 = 0;
seq__26067_26073 = G__26087;
chunk__26068_26074 = G__26088;
count__26069_26075 = G__26089;
i__26070_26076 = G__26090;
continue;
}
} else
{var vec__26072_26091 = cljs.core.first.call(null,seq__26067_26085__$1);var k_26092 = cljs.core.nth.call(null,vec__26072_26091,0,null);var v_26093 = cljs.core.nth.call(null,vec__26072_26091,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_26092,[cljs.core.str(v_26093),cljs.core.str("px")].join(''));
{
var G__26094 = cljs.core.next.call(null,seq__26067_26085__$1);
var G__26095 = null;
var G__26096 = 0;
var G__26097 = 0;
seq__26067_26073 = G__26094;
chunk__26068_26074 = G__26095;
count__26069_26075 = G__26096;
i__26070_26076 = G__26097;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__26098){
var elem = cljs.core.first(arglist__26098);
var kvs = cljs.core.rest(arglist__26098);
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
{var G__26107 = dommy.template.__GT_node_like.call(null,elem);(G__26107[cljs.core.name.call(null,k)] = v);
return G__26107;
} else
{var G__26108 = dommy.template.__GT_node_like.call(null,elem);G__26108.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__26108;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__26115__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26109_26116 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__26110_26117 = null;var count__26111_26118 = 0;var i__26112_26119 = 0;while(true){
if((i__26112_26119 < count__26111_26118))
{var vec__26113_26120 = cljs.core._nth.call(null,chunk__26110_26117,i__26112_26119);var k_26121__$1 = cljs.core.nth.call(null,vec__26113_26120,0,null);var v_26122__$1 = cljs.core.nth.call(null,vec__26113_26120,1,null);set_attr_BANG_.call(null,elem__$1,k_26121__$1,v_26122__$1);
{
var G__26123 = seq__26109_26116;
var G__26124 = chunk__26110_26117;
var G__26125 = count__26111_26118;
var G__26126 = (i__26112_26119 + 1);
seq__26109_26116 = G__26123;
chunk__26110_26117 = G__26124;
count__26111_26118 = G__26125;
i__26112_26119 = G__26126;
continue;
}
} else
{var temp__4092__auto___26127 = cljs.core.seq.call(null,seq__26109_26116);if(temp__4092__auto___26127)
{var seq__26109_26128__$1 = temp__4092__auto___26127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26109_26128__$1))
{var c__8959__auto___26129 = cljs.core.chunk_first.call(null,seq__26109_26128__$1);{
var G__26130 = cljs.core.chunk_rest.call(null,seq__26109_26128__$1);
var G__26131 = c__8959__auto___26129;
var G__26132 = cljs.core.count.call(null,c__8959__auto___26129);
var G__26133 = 0;
seq__26109_26116 = G__26130;
chunk__26110_26117 = G__26131;
count__26111_26118 = G__26132;
i__26112_26119 = G__26133;
continue;
}
} else
{var vec__26114_26134 = cljs.core.first.call(null,seq__26109_26128__$1);var k_26135__$1 = cljs.core.nth.call(null,vec__26114_26134,0,null);var v_26136__$1 = cljs.core.nth.call(null,vec__26114_26134,1,null);set_attr_BANG_.call(null,elem__$1,k_26135__$1,v_26136__$1);
{
var G__26137 = cljs.core.next.call(null,seq__26109_26128__$1);
var G__26138 = null;
var G__26139 = 0;
var G__26140 = 0;
seq__26109_26116 = G__26137;
chunk__26110_26117 = G__26138;
count__26111_26118 = G__26139;
i__26112_26119 = G__26140;
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
var G__26115 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__26115__delegate.call(this,elem,k,v,kvs);};
G__26115.cljs$lang$maxFixedArity = 3;
G__26115.cljs$lang$applyTo = (function (arglist__26141){
var elem = cljs.core.first(arglist__26141);
arglist__26141 = cljs.core.next(arglist__26141);
var k = cljs.core.first(arglist__26141);
arglist__26141 = cljs.core.next(arglist__26141);
var v = cljs.core.first(arglist__26141);
var kvs = cljs.core.rest(arglist__26141);
return G__26115__delegate(elem,k,v,kvs);
});
G__26115.cljs$core$IFn$_invoke$arity$variadic = G__26115__delegate;
return G__26115;
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
var G__26150__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__26146_26151 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__26147_26152 = null;var count__26148_26153 = 0;var i__26149_26154 = 0;while(true){
if((i__26149_26154 < count__26148_26153))
{var k_26155__$1 = cljs.core._nth.call(null,chunk__26147_26152,i__26149_26154);remove_attr_BANG_.call(null,elem__$1,k_26155__$1);
{
var G__26156 = seq__26146_26151;
var G__26157 = chunk__26147_26152;
var G__26158 = count__26148_26153;
var G__26159 = (i__26149_26154 + 1);
seq__26146_26151 = G__26156;
chunk__26147_26152 = G__26157;
count__26148_26153 = G__26158;
i__26149_26154 = G__26159;
continue;
}
} else
{var temp__4092__auto___26160 = cljs.core.seq.call(null,seq__26146_26151);if(temp__4092__auto___26160)
{var seq__26146_26161__$1 = temp__4092__auto___26160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26146_26161__$1))
{var c__8959__auto___26162 = cljs.core.chunk_first.call(null,seq__26146_26161__$1);{
var G__26163 = cljs.core.chunk_rest.call(null,seq__26146_26161__$1);
var G__26164 = c__8959__auto___26162;
var G__26165 = cljs.core.count.call(null,c__8959__auto___26162);
var G__26166 = 0;
seq__26146_26151 = G__26163;
chunk__26147_26152 = G__26164;
count__26148_26153 = G__26165;
i__26149_26154 = G__26166;
continue;
}
} else
{var k_26167__$1 = cljs.core.first.call(null,seq__26146_26161__$1);remove_attr_BANG_.call(null,elem__$1,k_26167__$1);
{
var G__26168 = cljs.core.next.call(null,seq__26146_26161__$1);
var G__26169 = null;
var G__26170 = 0;
var G__26171 = 0;
seq__26146_26151 = G__26168;
chunk__26147_26152 = G__26169;
count__26148_26153 = G__26170;
i__26149_26154 = G__26171;
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
var G__26150 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26150__delegate.call(this,elem,k,ks);};
G__26150.cljs$lang$maxFixedArity = 2;
G__26150.cljs$lang$applyTo = (function (arglist__26172){
var elem = cljs.core.first(arglist__26172);
arglist__26172 = cljs.core.next(arglist__26172);
var k = cljs.core.first(arglist__26172);
var ks = cljs.core.rest(arglist__26172);
return G__26150__delegate(elem,k,ks);
});
G__26150.cljs$core$IFn$_invoke$arity$variadic = G__26150__delegate;
return G__26150;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__26174 = dommy.template.__GT_node_like.call(null,elem);G__26174.style.display = ((show_QMARK_)?"":"none");
return G__26174;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__26176 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__26176,false);
return G__26176;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__26178 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__26178,true);
return G__26178;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__26180 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__26180["constructor"] = Object);
return G__26180;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map