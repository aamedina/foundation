// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8216__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8216__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8216__auto__;
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
var G__28892 = (i + class$.length);
start_from = G__28892;
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
{var temp__4090__auto___28917 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___28917))
{var class_list_28918 = temp__4090__auto___28917;var seq__28905_28919 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__28906_28920 = null;var count__28907_28921 = 0;var i__28908_28922 = 0;while(true){
if((i__28908_28922 < count__28907_28921))
{var class_28923 = cljs.core._nth.call(null,chunk__28906_28920,i__28908_28922);class_list_28918.add(class_28923);
{
var G__28924 = seq__28905_28919;
var G__28925 = chunk__28906_28920;
var G__28926 = count__28907_28921;
var G__28927 = (i__28908_28922 + 1);
seq__28905_28919 = G__28924;
chunk__28906_28920 = G__28925;
count__28907_28921 = G__28926;
i__28908_28922 = G__28927;
continue;
}
} else
{var temp__4092__auto___28928 = cljs.core.seq.call(null,seq__28905_28919);if(temp__4092__auto___28928)
{var seq__28905_28929__$1 = temp__4092__auto___28928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28905_28929__$1))
{var c__8957__auto___28930 = cljs.core.chunk_first.call(null,seq__28905_28929__$1);{
var G__28931 = cljs.core.chunk_rest.call(null,seq__28905_28929__$1);
var G__28932 = c__8957__auto___28930;
var G__28933 = cljs.core.count.call(null,c__8957__auto___28930);
var G__28934 = 0;
seq__28905_28919 = G__28931;
chunk__28906_28920 = G__28932;
count__28907_28921 = G__28933;
i__28908_28922 = G__28934;
continue;
}
} else
{var class_28935 = cljs.core.first.call(null,seq__28905_28929__$1);class_list_28918.add(class_28935);
{
var G__28936 = cljs.core.next.call(null,seq__28905_28929__$1);
var G__28937 = null;
var G__28938 = 0;
var G__28939 = 0;
seq__28905_28919 = G__28936;
chunk__28906_28920 = G__28937;
count__28907_28921 = G__28938;
i__28908_28922 = G__28939;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_28940 = elem__$1.className;var seq__28909_28941 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__28910_28942 = null;var count__28911_28943 = 0;var i__28912_28944 = 0;while(true){
if((i__28912_28944 < count__28911_28943))
{var class_28945 = cljs.core._nth.call(null,chunk__28910_28942,i__28912_28944);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28940,class_28945)))
{} else
{elem__$1.className = (((class_name_28940 === ""))?class_28945:[cljs.core.str(class_name_28940),cljs.core.str(" "),cljs.core.str(class_28945)].join(''));
}
{
var G__28946 = seq__28909_28941;
var G__28947 = chunk__28910_28942;
var G__28948 = count__28911_28943;
var G__28949 = (i__28912_28944 + 1);
seq__28909_28941 = G__28946;
chunk__28910_28942 = G__28947;
count__28911_28943 = G__28948;
i__28912_28944 = G__28949;
continue;
}
} else
{var temp__4092__auto___28950 = cljs.core.seq.call(null,seq__28909_28941);if(temp__4092__auto___28950)
{var seq__28909_28951__$1 = temp__4092__auto___28950;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28909_28951__$1))
{var c__8957__auto___28952 = cljs.core.chunk_first.call(null,seq__28909_28951__$1);{
var G__28953 = cljs.core.chunk_rest.call(null,seq__28909_28951__$1);
var G__28954 = c__8957__auto___28952;
var G__28955 = cljs.core.count.call(null,c__8957__auto___28952);
var G__28956 = 0;
seq__28909_28941 = G__28953;
chunk__28910_28942 = G__28954;
count__28911_28943 = G__28955;
i__28912_28944 = G__28956;
continue;
}
} else
{var class_28957 = cljs.core.first.call(null,seq__28909_28951__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_28940,class_28957)))
{} else
{elem__$1.className = (((class_name_28940 === ""))?class_28957:[cljs.core.str(class_name_28940),cljs.core.str(" "),cljs.core.str(class_28957)].join(''));
}
{
var G__28958 = cljs.core.next.call(null,seq__28909_28951__$1);
var G__28959 = null;
var G__28960 = 0;
var G__28961 = 0;
seq__28909_28941 = G__28958;
chunk__28910_28942 = G__28959;
count__28911_28943 = G__28960;
i__28912_28944 = G__28961;
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
var G__28962__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28913_28963 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__28914_28964 = null;var count__28915_28965 = 0;var i__28916_28966 = 0;while(true){
if((i__28916_28966 < count__28915_28965))
{var c_28967 = cljs.core._nth.call(null,chunk__28914_28964,i__28916_28966);add_class_BANG_.call(null,elem__$1,c_28967);
{
var G__28968 = seq__28913_28963;
var G__28969 = chunk__28914_28964;
var G__28970 = count__28915_28965;
var G__28971 = (i__28916_28966 + 1);
seq__28913_28963 = G__28968;
chunk__28914_28964 = G__28969;
count__28915_28965 = G__28970;
i__28916_28966 = G__28971;
continue;
}
} else
{var temp__4092__auto___28972 = cljs.core.seq.call(null,seq__28913_28963);if(temp__4092__auto___28972)
{var seq__28913_28973__$1 = temp__4092__auto___28972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28913_28973__$1))
{var c__8957__auto___28974 = cljs.core.chunk_first.call(null,seq__28913_28973__$1);{
var G__28975 = cljs.core.chunk_rest.call(null,seq__28913_28973__$1);
var G__28976 = c__8957__auto___28974;
var G__28977 = cljs.core.count.call(null,c__8957__auto___28974);
var G__28978 = 0;
seq__28913_28963 = G__28975;
chunk__28914_28964 = G__28976;
count__28915_28965 = G__28977;
i__28916_28966 = G__28978;
continue;
}
} else
{var c_28979 = cljs.core.first.call(null,seq__28913_28973__$1);add_class_BANG_.call(null,elem__$1,c_28979);
{
var G__28980 = cljs.core.next.call(null,seq__28913_28973__$1);
var G__28981 = null;
var G__28982 = 0;
var G__28983 = 0;
seq__28913_28963 = G__28980;
chunk__28914_28964 = G__28981;
count__28915_28965 = G__28982;
i__28916_28966 = G__28983;
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
var G__28962 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28962__delegate.call(this,elem,classes,more_classes);};
G__28962.cljs$lang$maxFixedArity = 2;
G__28962.cljs$lang$applyTo = (function (arglist__28984){
var elem = cljs.core.first(arglist__28984);
arglist__28984 = cljs.core.next(arglist__28984);
var classes = cljs.core.first(arglist__28984);
var more_classes = cljs.core.rest(arglist__28984);
return G__28962__delegate(elem,classes,more_classes);
});
G__28962.cljs$core$IFn$_invoke$arity$variadic = G__28962__delegate;
return G__28962;
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
var G__28985 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__28985;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___28994 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___28994))
{var class_list_28995 = temp__4090__auto___28994;class_list_28995.remove(class$__$1);
} else
{var class_name_28996 = elem__$1.className;var new_class_name_28997 = dommy.attrs.remove_class_str.call(null,class_name_28996,class$__$1);if((class_name_28996 === new_class_name_28997))
{} else
{elem__$1.className = new_class_name_28997;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__28998__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__28990 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__28991 = null;var count__28992 = 0;var i__28993 = 0;while(true){
if((i__28993 < count__28992))
{var c = cljs.core._nth.call(null,chunk__28991,i__28993);remove_class_BANG_.call(null,elem__$1,c);
{
var G__28999 = seq__28990;
var G__29000 = chunk__28991;
var G__29001 = count__28992;
var G__29002 = (i__28993 + 1);
seq__28990 = G__28999;
chunk__28991 = G__29000;
count__28992 = G__29001;
i__28993 = G__29002;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28990);if(temp__4092__auto__)
{var seq__28990__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28990__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__28990__$1);{
var G__29003 = cljs.core.chunk_rest.call(null,seq__28990__$1);
var G__29004 = c__8957__auto__;
var G__29005 = cljs.core.count.call(null,c__8957__auto__);
var G__29006 = 0;
seq__28990 = G__29003;
chunk__28991 = G__29004;
count__28992 = G__29005;
i__28993 = G__29006;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__28990__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29007 = cljs.core.next.call(null,seq__28990__$1);
var G__29008 = null;
var G__29009 = 0;
var G__29010 = 0;
seq__28990 = G__29007;
chunk__28991 = G__29008;
count__28992 = G__29009;
i__28993 = G__29010;
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
var G__28998 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__28998__delegate.call(this,elem,class$,classes);};
G__28998.cljs$lang$maxFixedArity = 2;
G__28998.cljs$lang$applyTo = (function (arglist__29011){
var elem = cljs.core.first(arglist__29011);
arglist__29011 = cljs.core.next(arglist__29011);
var class$ = cljs.core.first(arglist__29011);
var classes = cljs.core.rest(arglist__29011);
return G__28998__delegate(elem,class$,classes);
});
G__28998.cljs$core$IFn$_invoke$arity$variadic = G__28998__delegate;
return G__28998;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29012 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29012))
{var class_list_29013 = temp__4090__auto___29012;class_list_29013.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__29016){var vec__29017 = p__29016;var k = cljs.core.nth.call(null,vec__29017,0,null);var v = cljs.core.nth.call(null,vec__29017,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__29024_29030 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29025_29031 = null;var count__29026_29032 = 0;var i__29027_29033 = 0;while(true){
if((i__29027_29033 < count__29026_29032))
{var vec__29028_29034 = cljs.core._nth.call(null,chunk__29025_29031,i__29027_29033);var k_29035 = cljs.core.nth.call(null,vec__29028_29034,0,null);var v_29036 = cljs.core.nth.call(null,vec__29028_29034,1,null);(style[cljs.core.name.call(null,k_29035)] = v_29036);
{
var G__29037 = seq__29024_29030;
var G__29038 = chunk__29025_29031;
var G__29039 = count__29026_29032;
var G__29040 = (i__29027_29033 + 1);
seq__29024_29030 = G__29037;
chunk__29025_29031 = G__29038;
count__29026_29032 = G__29039;
i__29027_29033 = G__29040;
continue;
}
} else
{var temp__4092__auto___29041 = cljs.core.seq.call(null,seq__29024_29030);if(temp__4092__auto___29041)
{var seq__29024_29042__$1 = temp__4092__auto___29041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29024_29042__$1))
{var c__8957__auto___29043 = cljs.core.chunk_first.call(null,seq__29024_29042__$1);{
var G__29044 = cljs.core.chunk_rest.call(null,seq__29024_29042__$1);
var G__29045 = c__8957__auto___29043;
var G__29046 = cljs.core.count.call(null,c__8957__auto___29043);
var G__29047 = 0;
seq__29024_29030 = G__29044;
chunk__29025_29031 = G__29045;
count__29026_29032 = G__29046;
i__29027_29033 = G__29047;
continue;
}
} else
{var vec__29029_29048 = cljs.core.first.call(null,seq__29024_29042__$1);var k_29049 = cljs.core.nth.call(null,vec__29029_29048,0,null);var v_29050 = cljs.core.nth.call(null,vec__29029_29048,1,null);(style[cljs.core.name.call(null,k_29049)] = v_29050);
{
var G__29051 = cljs.core.next.call(null,seq__29024_29042__$1);
var G__29052 = null;
var G__29053 = 0;
var G__29054 = 0;
seq__29024_29030 = G__29051;
chunk__29025_29031 = G__29052;
count__29026_29032 = G__29053;
i__29027_29033 = G__29054;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29055){
var elem = cljs.core.first(arglist__29055);
var kvs = cljs.core.rest(arglist__29055);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29062_29068 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29063_29069 = null;var count__29064_29070 = 0;var i__29065_29071 = 0;while(true){
if((i__29065_29071 < count__29064_29070))
{var vec__29066_29072 = cljs.core._nth.call(null,chunk__29063_29069,i__29065_29071);var k_29073 = cljs.core.nth.call(null,vec__29066_29072,0,null);var v_29074 = cljs.core.nth.call(null,vec__29066_29072,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29073,[cljs.core.str(v_29074),cljs.core.str("px")].join(''));
{
var G__29075 = seq__29062_29068;
var G__29076 = chunk__29063_29069;
var G__29077 = count__29064_29070;
var G__29078 = (i__29065_29071 + 1);
seq__29062_29068 = G__29075;
chunk__29063_29069 = G__29076;
count__29064_29070 = G__29077;
i__29065_29071 = G__29078;
continue;
}
} else
{var temp__4092__auto___29079 = cljs.core.seq.call(null,seq__29062_29068);if(temp__4092__auto___29079)
{var seq__29062_29080__$1 = temp__4092__auto___29079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29062_29080__$1))
{var c__8957__auto___29081 = cljs.core.chunk_first.call(null,seq__29062_29080__$1);{
var G__29082 = cljs.core.chunk_rest.call(null,seq__29062_29080__$1);
var G__29083 = c__8957__auto___29081;
var G__29084 = cljs.core.count.call(null,c__8957__auto___29081);
var G__29085 = 0;
seq__29062_29068 = G__29082;
chunk__29063_29069 = G__29083;
count__29064_29070 = G__29084;
i__29065_29071 = G__29085;
continue;
}
} else
{var vec__29067_29086 = cljs.core.first.call(null,seq__29062_29080__$1);var k_29087 = cljs.core.nth.call(null,vec__29067_29086,0,null);var v_29088 = cljs.core.nth.call(null,vec__29067_29086,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29087,[cljs.core.str(v_29088),cljs.core.str("px")].join(''));
{
var G__29089 = cljs.core.next.call(null,seq__29062_29080__$1);
var G__29090 = null;
var G__29091 = 0;
var G__29092 = 0;
seq__29062_29068 = G__29089;
chunk__29063_29069 = G__29090;
count__29064_29070 = G__29091;
i__29065_29071 = G__29092;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__29093){
var elem = cljs.core.first(arglist__29093);
var kvs = cljs.core.rest(arglist__29093);
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
{var G__29102 = dommy.template.__GT_node_like.call(null,elem);(G__29102[cljs.core.name.call(null,k)] = v);
return G__29102;
} else
{var G__29103 = dommy.template.__GT_node_like.call(null,elem);G__29103.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__29103;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__29110__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29104_29111 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__29105_29112 = null;var count__29106_29113 = 0;var i__29107_29114 = 0;while(true){
if((i__29107_29114 < count__29106_29113))
{var vec__29108_29115 = cljs.core._nth.call(null,chunk__29105_29112,i__29107_29114);var k_29116__$1 = cljs.core.nth.call(null,vec__29108_29115,0,null);var v_29117__$1 = cljs.core.nth.call(null,vec__29108_29115,1,null);set_attr_BANG_.call(null,elem__$1,k_29116__$1,v_29117__$1);
{
var G__29118 = seq__29104_29111;
var G__29119 = chunk__29105_29112;
var G__29120 = count__29106_29113;
var G__29121 = (i__29107_29114 + 1);
seq__29104_29111 = G__29118;
chunk__29105_29112 = G__29119;
count__29106_29113 = G__29120;
i__29107_29114 = G__29121;
continue;
}
} else
{var temp__4092__auto___29122 = cljs.core.seq.call(null,seq__29104_29111);if(temp__4092__auto___29122)
{var seq__29104_29123__$1 = temp__4092__auto___29122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29104_29123__$1))
{var c__8957__auto___29124 = cljs.core.chunk_first.call(null,seq__29104_29123__$1);{
var G__29125 = cljs.core.chunk_rest.call(null,seq__29104_29123__$1);
var G__29126 = c__8957__auto___29124;
var G__29127 = cljs.core.count.call(null,c__8957__auto___29124);
var G__29128 = 0;
seq__29104_29111 = G__29125;
chunk__29105_29112 = G__29126;
count__29106_29113 = G__29127;
i__29107_29114 = G__29128;
continue;
}
} else
{var vec__29109_29129 = cljs.core.first.call(null,seq__29104_29123__$1);var k_29130__$1 = cljs.core.nth.call(null,vec__29109_29129,0,null);var v_29131__$1 = cljs.core.nth.call(null,vec__29109_29129,1,null);set_attr_BANG_.call(null,elem__$1,k_29130__$1,v_29131__$1);
{
var G__29132 = cljs.core.next.call(null,seq__29104_29123__$1);
var G__29133 = null;
var G__29134 = 0;
var G__29135 = 0;
seq__29104_29111 = G__29132;
chunk__29105_29112 = G__29133;
count__29106_29113 = G__29134;
i__29107_29114 = G__29135;
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
var G__29110 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29110__delegate.call(this,elem,k,v,kvs);};
G__29110.cljs$lang$maxFixedArity = 3;
G__29110.cljs$lang$applyTo = (function (arglist__29136){
var elem = cljs.core.first(arglist__29136);
arglist__29136 = cljs.core.next(arglist__29136);
var k = cljs.core.first(arglist__29136);
arglist__29136 = cljs.core.next(arglist__29136);
var v = cljs.core.first(arglist__29136);
var kvs = cljs.core.rest(arglist__29136);
return G__29110__delegate(elem,k,v,kvs);
});
G__29110.cljs$core$IFn$_invoke$arity$variadic = G__29110__delegate;
return G__29110;
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
var G__29145__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29141_29146 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__29142_29147 = null;var count__29143_29148 = 0;var i__29144_29149 = 0;while(true){
if((i__29144_29149 < count__29143_29148))
{var k_29150__$1 = cljs.core._nth.call(null,chunk__29142_29147,i__29144_29149);remove_attr_BANG_.call(null,elem__$1,k_29150__$1);
{
var G__29151 = seq__29141_29146;
var G__29152 = chunk__29142_29147;
var G__29153 = count__29143_29148;
var G__29154 = (i__29144_29149 + 1);
seq__29141_29146 = G__29151;
chunk__29142_29147 = G__29152;
count__29143_29148 = G__29153;
i__29144_29149 = G__29154;
continue;
}
} else
{var temp__4092__auto___29155 = cljs.core.seq.call(null,seq__29141_29146);if(temp__4092__auto___29155)
{var seq__29141_29156__$1 = temp__4092__auto___29155;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29141_29156__$1))
{var c__8957__auto___29157 = cljs.core.chunk_first.call(null,seq__29141_29156__$1);{
var G__29158 = cljs.core.chunk_rest.call(null,seq__29141_29156__$1);
var G__29159 = c__8957__auto___29157;
var G__29160 = cljs.core.count.call(null,c__8957__auto___29157);
var G__29161 = 0;
seq__29141_29146 = G__29158;
chunk__29142_29147 = G__29159;
count__29143_29148 = G__29160;
i__29144_29149 = G__29161;
continue;
}
} else
{var k_29162__$1 = cljs.core.first.call(null,seq__29141_29156__$1);remove_attr_BANG_.call(null,elem__$1,k_29162__$1);
{
var G__29163 = cljs.core.next.call(null,seq__29141_29156__$1);
var G__29164 = null;
var G__29165 = 0;
var G__29166 = 0;
seq__29141_29146 = G__29163;
chunk__29142_29147 = G__29164;
count__29143_29148 = G__29165;
i__29144_29149 = G__29166;
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
var G__29145 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29145__delegate.call(this,elem,k,ks);};
G__29145.cljs$lang$maxFixedArity = 2;
G__29145.cljs$lang$applyTo = (function (arglist__29167){
var elem = cljs.core.first(arglist__29167);
arglist__29167 = cljs.core.next(arglist__29167);
var k = cljs.core.first(arglist__29167);
var ks = cljs.core.rest(arglist__29167);
return G__29145__delegate(elem,k,ks);
});
G__29145.cljs$core$IFn$_invoke$arity$variadic = G__29145__delegate;
return G__29145;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__29169 = dommy.template.__GT_node_like.call(null,elem);G__29169.style.display = ((show_QMARK_)?"":"none");
return G__29169;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__29171 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29171,false);
return G__29171;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__29173 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29173,true);
return G__29173;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__29175 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__29175["constructor"] = Object);
return G__29175;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map