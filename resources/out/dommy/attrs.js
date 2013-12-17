// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13967__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13967__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13967__auto__;
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
var G__358909 = (i + class$.length);
start_from = G__358909;
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
{var temp__4090__auto___358934 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___358934))
{var class_list_358935 = temp__4090__auto___358934;var seq__358922_358936 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__358923_358937 = null;var count__358924_358938 = 0;var i__358925_358939 = 0;while(true){
if((i__358925_358939 < count__358924_358938))
{var class_358940 = cljs.core._nth.call(null,chunk__358923_358937,i__358925_358939);class_list_358935.add(class_358940);
{
var G__358941 = seq__358922_358936;
var G__358942 = chunk__358923_358937;
var G__358943 = count__358924_358938;
var G__358944 = (i__358925_358939 + 1);
seq__358922_358936 = G__358941;
chunk__358923_358937 = G__358942;
count__358924_358938 = G__358943;
i__358925_358939 = G__358944;
continue;
}
} else
{var temp__4092__auto___358945 = cljs.core.seq.call(null,seq__358922_358936);if(temp__4092__auto___358945)
{var seq__358922_358946__$1 = temp__4092__auto___358945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358922_358946__$1))
{var c__14708__auto___358947 = cljs.core.chunk_first.call(null,seq__358922_358946__$1);{
var G__358948 = cljs.core.chunk_rest.call(null,seq__358922_358946__$1);
var G__358949 = c__14708__auto___358947;
var G__358950 = cljs.core.count.call(null,c__14708__auto___358947);
var G__358951 = 0;
seq__358922_358936 = G__358948;
chunk__358923_358937 = G__358949;
count__358924_358938 = G__358950;
i__358925_358939 = G__358951;
continue;
}
} else
{var class_358952 = cljs.core.first.call(null,seq__358922_358946__$1);class_list_358935.add(class_358952);
{
var G__358953 = cljs.core.next.call(null,seq__358922_358946__$1);
var G__358954 = null;
var G__358955 = 0;
var G__358956 = 0;
seq__358922_358936 = G__358953;
chunk__358923_358937 = G__358954;
count__358924_358938 = G__358955;
i__358925_358939 = G__358956;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_358957 = elem__$1.className;var seq__358926_358958 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__358927_358959 = null;var count__358928_358960 = 0;var i__358929_358961 = 0;while(true){
if((i__358929_358961 < count__358928_358960))
{var class_358962 = cljs.core._nth.call(null,chunk__358927_358959,i__358929_358961);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_358957,class_358962)))
{} else
{elem__$1.className = (((class_name_358957 === ""))?class_358962:[cljs.core.str(class_name_358957),cljs.core.str(" "),cljs.core.str(class_358962)].join(''));
}
{
var G__358963 = seq__358926_358958;
var G__358964 = chunk__358927_358959;
var G__358965 = count__358928_358960;
var G__358966 = (i__358929_358961 + 1);
seq__358926_358958 = G__358963;
chunk__358927_358959 = G__358964;
count__358928_358960 = G__358965;
i__358929_358961 = G__358966;
continue;
}
} else
{var temp__4092__auto___358967 = cljs.core.seq.call(null,seq__358926_358958);if(temp__4092__auto___358967)
{var seq__358926_358968__$1 = temp__4092__auto___358967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358926_358968__$1))
{var c__14708__auto___358969 = cljs.core.chunk_first.call(null,seq__358926_358968__$1);{
var G__358970 = cljs.core.chunk_rest.call(null,seq__358926_358968__$1);
var G__358971 = c__14708__auto___358969;
var G__358972 = cljs.core.count.call(null,c__14708__auto___358969);
var G__358973 = 0;
seq__358926_358958 = G__358970;
chunk__358927_358959 = G__358971;
count__358928_358960 = G__358972;
i__358929_358961 = G__358973;
continue;
}
} else
{var class_358974 = cljs.core.first.call(null,seq__358926_358968__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_358957,class_358974)))
{} else
{elem__$1.className = (((class_name_358957 === ""))?class_358974:[cljs.core.str(class_name_358957),cljs.core.str(" "),cljs.core.str(class_358974)].join(''));
}
{
var G__358975 = cljs.core.next.call(null,seq__358926_358968__$1);
var G__358976 = null;
var G__358977 = 0;
var G__358978 = 0;
seq__358926_358958 = G__358975;
chunk__358927_358959 = G__358976;
count__358928_358960 = G__358977;
i__358929_358961 = G__358978;
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
var G__358979__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__358930_358980 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__358931_358981 = null;var count__358932_358982 = 0;var i__358933_358983 = 0;while(true){
if((i__358933_358983 < count__358932_358982))
{var c_358984 = cljs.core._nth.call(null,chunk__358931_358981,i__358933_358983);add_class_BANG_.call(null,elem__$1,c_358984);
{
var G__358985 = seq__358930_358980;
var G__358986 = chunk__358931_358981;
var G__358987 = count__358932_358982;
var G__358988 = (i__358933_358983 + 1);
seq__358930_358980 = G__358985;
chunk__358931_358981 = G__358986;
count__358932_358982 = G__358987;
i__358933_358983 = G__358988;
continue;
}
} else
{var temp__4092__auto___358989 = cljs.core.seq.call(null,seq__358930_358980);if(temp__4092__auto___358989)
{var seq__358930_358990__$1 = temp__4092__auto___358989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358930_358990__$1))
{var c__14708__auto___358991 = cljs.core.chunk_first.call(null,seq__358930_358990__$1);{
var G__358992 = cljs.core.chunk_rest.call(null,seq__358930_358990__$1);
var G__358993 = c__14708__auto___358991;
var G__358994 = cljs.core.count.call(null,c__14708__auto___358991);
var G__358995 = 0;
seq__358930_358980 = G__358992;
chunk__358931_358981 = G__358993;
count__358932_358982 = G__358994;
i__358933_358983 = G__358995;
continue;
}
} else
{var c_358996 = cljs.core.first.call(null,seq__358930_358990__$1);add_class_BANG_.call(null,elem__$1,c_358996);
{
var G__358997 = cljs.core.next.call(null,seq__358930_358990__$1);
var G__358998 = null;
var G__358999 = 0;
var G__359000 = 0;
seq__358930_358980 = G__358997;
chunk__358931_358981 = G__358998;
count__358932_358982 = G__358999;
i__358933_358983 = G__359000;
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
var G__358979 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__358979__delegate.call(this,elem,classes,more_classes);};
G__358979.cljs$lang$maxFixedArity = 2;
G__358979.cljs$lang$applyTo = (function (arglist__359001){
var elem = cljs.core.first(arglist__359001);
arglist__359001 = cljs.core.next(arglist__359001);
var classes = cljs.core.first(arglist__359001);
var more_classes = cljs.core.rest(arglist__359001);
return G__358979__delegate(elem,classes,more_classes);
});
G__358979.cljs$core$IFn$_invoke$arity$variadic = G__358979__delegate;
return G__358979;
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
var G__359002 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__359002;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___359011 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___359011))
{var class_list_359012 = temp__4090__auto___359011;class_list_359012.remove(class$__$1);
} else
{var class_name_359013 = elem__$1.className;var new_class_name_359014 = dommy.attrs.remove_class_str.call(null,class_name_359013,class$__$1);if((class_name_359013 === new_class_name_359014))
{} else
{elem__$1.className = new_class_name_359014;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__359015__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__359007 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__359008 = null;var count__359009 = 0;var i__359010 = 0;while(true){
if((i__359010 < count__359009))
{var c = cljs.core._nth.call(null,chunk__359008,i__359010);remove_class_BANG_.call(null,elem__$1,c);
{
var G__359016 = seq__359007;
var G__359017 = chunk__359008;
var G__359018 = count__359009;
var G__359019 = (i__359010 + 1);
seq__359007 = G__359016;
chunk__359008 = G__359017;
count__359009 = G__359018;
i__359010 = G__359019;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__359007);if(temp__4092__auto__)
{var seq__359007__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__359007__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__359007__$1);{
var G__359020 = cljs.core.chunk_rest.call(null,seq__359007__$1);
var G__359021 = c__14708__auto__;
var G__359022 = cljs.core.count.call(null,c__14708__auto__);
var G__359023 = 0;
seq__359007 = G__359020;
chunk__359008 = G__359021;
count__359009 = G__359022;
i__359010 = G__359023;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__359007__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__359024 = cljs.core.next.call(null,seq__359007__$1);
var G__359025 = null;
var G__359026 = 0;
var G__359027 = 0;
seq__359007 = G__359024;
chunk__359008 = G__359025;
count__359009 = G__359026;
i__359010 = G__359027;
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
var G__359015 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__359015__delegate.call(this,elem,class$,classes);};
G__359015.cljs$lang$maxFixedArity = 2;
G__359015.cljs$lang$applyTo = (function (arglist__359028){
var elem = cljs.core.first(arglist__359028);
arglist__359028 = cljs.core.next(arglist__359028);
var class$ = cljs.core.first(arglist__359028);
var classes = cljs.core.rest(arglist__359028);
return G__359015__delegate(elem,class$,classes);
});
G__359015.cljs$core$IFn$_invoke$arity$variadic = G__359015__delegate;
return G__359015;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___359029 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___359029))
{var class_list_359030 = temp__4090__auto___359029;class_list_359030.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__359033){var vec__359034 = p__359033;var k = cljs.core.nth.call(null,vec__359034,0,null);var v = cljs.core.nth.call(null,vec__359034,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__359041_359047 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__359042_359048 = null;var count__359043_359049 = 0;var i__359044_359050 = 0;while(true){
if((i__359044_359050 < count__359043_359049))
{var vec__359045_359051 = cljs.core._nth.call(null,chunk__359042_359048,i__359044_359050);var k_359052 = cljs.core.nth.call(null,vec__359045_359051,0,null);var v_359053 = cljs.core.nth.call(null,vec__359045_359051,1,null);(style[cljs.core.name.call(null,k_359052)] = v_359053);
{
var G__359054 = seq__359041_359047;
var G__359055 = chunk__359042_359048;
var G__359056 = count__359043_359049;
var G__359057 = (i__359044_359050 + 1);
seq__359041_359047 = G__359054;
chunk__359042_359048 = G__359055;
count__359043_359049 = G__359056;
i__359044_359050 = G__359057;
continue;
}
} else
{var temp__4092__auto___359058 = cljs.core.seq.call(null,seq__359041_359047);if(temp__4092__auto___359058)
{var seq__359041_359059__$1 = temp__4092__auto___359058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__359041_359059__$1))
{var c__14708__auto___359060 = cljs.core.chunk_first.call(null,seq__359041_359059__$1);{
var G__359061 = cljs.core.chunk_rest.call(null,seq__359041_359059__$1);
var G__359062 = c__14708__auto___359060;
var G__359063 = cljs.core.count.call(null,c__14708__auto___359060);
var G__359064 = 0;
seq__359041_359047 = G__359061;
chunk__359042_359048 = G__359062;
count__359043_359049 = G__359063;
i__359044_359050 = G__359064;
continue;
}
} else
{var vec__359046_359065 = cljs.core.first.call(null,seq__359041_359059__$1);var k_359066 = cljs.core.nth.call(null,vec__359046_359065,0,null);var v_359067 = cljs.core.nth.call(null,vec__359046_359065,1,null);(style[cljs.core.name.call(null,k_359066)] = v_359067);
{
var G__359068 = cljs.core.next.call(null,seq__359041_359059__$1);
var G__359069 = null;
var G__359070 = 0;
var G__359071 = 0;
seq__359041_359047 = G__359068;
chunk__359042_359048 = G__359069;
count__359043_359049 = G__359070;
i__359044_359050 = G__359071;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__359072){
var elem = cljs.core.first(arglist__359072);
var kvs = cljs.core.rest(arglist__359072);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__359079_359085 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__359080_359086 = null;var count__359081_359087 = 0;var i__359082_359088 = 0;while(true){
if((i__359082_359088 < count__359081_359087))
{var vec__359083_359089 = cljs.core._nth.call(null,chunk__359080_359086,i__359082_359088);var k_359090 = cljs.core.nth.call(null,vec__359083_359089,0,null);var v_359091 = cljs.core.nth.call(null,vec__359083_359089,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_359090,[cljs.core.str(v_359091),cljs.core.str("px")].join(''));
{
var G__359092 = seq__359079_359085;
var G__359093 = chunk__359080_359086;
var G__359094 = count__359081_359087;
var G__359095 = (i__359082_359088 + 1);
seq__359079_359085 = G__359092;
chunk__359080_359086 = G__359093;
count__359081_359087 = G__359094;
i__359082_359088 = G__359095;
continue;
}
} else
{var temp__4092__auto___359096 = cljs.core.seq.call(null,seq__359079_359085);if(temp__4092__auto___359096)
{var seq__359079_359097__$1 = temp__4092__auto___359096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__359079_359097__$1))
{var c__14708__auto___359098 = cljs.core.chunk_first.call(null,seq__359079_359097__$1);{
var G__359099 = cljs.core.chunk_rest.call(null,seq__359079_359097__$1);
var G__359100 = c__14708__auto___359098;
var G__359101 = cljs.core.count.call(null,c__14708__auto___359098);
var G__359102 = 0;
seq__359079_359085 = G__359099;
chunk__359080_359086 = G__359100;
count__359081_359087 = G__359101;
i__359082_359088 = G__359102;
continue;
}
} else
{var vec__359084_359103 = cljs.core.first.call(null,seq__359079_359097__$1);var k_359104 = cljs.core.nth.call(null,vec__359084_359103,0,null);var v_359105 = cljs.core.nth.call(null,vec__359084_359103,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_359104,[cljs.core.str(v_359105),cljs.core.str("px")].join(''));
{
var G__359106 = cljs.core.next.call(null,seq__359079_359097__$1);
var G__359107 = null;
var G__359108 = 0;
var G__359109 = 0;
seq__359079_359085 = G__359106;
chunk__359080_359086 = G__359107;
count__359081_359087 = G__359108;
i__359082_359088 = G__359109;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__359110){
var elem = cljs.core.first(arglist__359110);
var kvs = cljs.core.rest(arglist__359110);
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
{var G__359119 = dommy.template.__GT_node_like.call(null,elem);(G__359119[cljs.core.name.call(null,k)] = v);
return G__359119;
} else
{var G__359120 = dommy.template.__GT_node_like.call(null,elem);G__359120.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__359120;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__359127__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__359121_359128 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__359122_359129 = null;var count__359123_359130 = 0;var i__359124_359131 = 0;while(true){
if((i__359124_359131 < count__359123_359130))
{var vec__359125_359132 = cljs.core._nth.call(null,chunk__359122_359129,i__359124_359131);var k_359133__$1 = cljs.core.nth.call(null,vec__359125_359132,0,null);var v_359134__$1 = cljs.core.nth.call(null,vec__359125_359132,1,null);set_attr_BANG_.call(null,elem__$1,k_359133__$1,v_359134__$1);
{
var G__359135 = seq__359121_359128;
var G__359136 = chunk__359122_359129;
var G__359137 = count__359123_359130;
var G__359138 = (i__359124_359131 + 1);
seq__359121_359128 = G__359135;
chunk__359122_359129 = G__359136;
count__359123_359130 = G__359137;
i__359124_359131 = G__359138;
continue;
}
} else
{var temp__4092__auto___359139 = cljs.core.seq.call(null,seq__359121_359128);if(temp__4092__auto___359139)
{var seq__359121_359140__$1 = temp__4092__auto___359139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__359121_359140__$1))
{var c__14708__auto___359141 = cljs.core.chunk_first.call(null,seq__359121_359140__$1);{
var G__359142 = cljs.core.chunk_rest.call(null,seq__359121_359140__$1);
var G__359143 = c__14708__auto___359141;
var G__359144 = cljs.core.count.call(null,c__14708__auto___359141);
var G__359145 = 0;
seq__359121_359128 = G__359142;
chunk__359122_359129 = G__359143;
count__359123_359130 = G__359144;
i__359124_359131 = G__359145;
continue;
}
} else
{var vec__359126_359146 = cljs.core.first.call(null,seq__359121_359140__$1);var k_359147__$1 = cljs.core.nth.call(null,vec__359126_359146,0,null);var v_359148__$1 = cljs.core.nth.call(null,vec__359126_359146,1,null);set_attr_BANG_.call(null,elem__$1,k_359147__$1,v_359148__$1);
{
var G__359149 = cljs.core.next.call(null,seq__359121_359140__$1);
var G__359150 = null;
var G__359151 = 0;
var G__359152 = 0;
seq__359121_359128 = G__359149;
chunk__359122_359129 = G__359150;
count__359123_359130 = G__359151;
i__359124_359131 = G__359152;
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
var G__359127 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__359127__delegate.call(this,elem,k,v,kvs);};
G__359127.cljs$lang$maxFixedArity = 3;
G__359127.cljs$lang$applyTo = (function (arglist__359153){
var elem = cljs.core.first(arglist__359153);
arglist__359153 = cljs.core.next(arglist__359153);
var k = cljs.core.first(arglist__359153);
arglist__359153 = cljs.core.next(arglist__359153);
var v = cljs.core.first(arglist__359153);
var kvs = cljs.core.rest(arglist__359153);
return G__359127__delegate(elem,k,v,kvs);
});
G__359127.cljs$core$IFn$_invoke$arity$variadic = G__359127__delegate;
return G__359127;
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
var G__359162__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__359158_359163 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__359159_359164 = null;var count__359160_359165 = 0;var i__359161_359166 = 0;while(true){
if((i__359161_359166 < count__359160_359165))
{var k_359167__$1 = cljs.core._nth.call(null,chunk__359159_359164,i__359161_359166);remove_attr_BANG_.call(null,elem__$1,k_359167__$1);
{
var G__359168 = seq__359158_359163;
var G__359169 = chunk__359159_359164;
var G__359170 = count__359160_359165;
var G__359171 = (i__359161_359166 + 1);
seq__359158_359163 = G__359168;
chunk__359159_359164 = G__359169;
count__359160_359165 = G__359170;
i__359161_359166 = G__359171;
continue;
}
} else
{var temp__4092__auto___359172 = cljs.core.seq.call(null,seq__359158_359163);if(temp__4092__auto___359172)
{var seq__359158_359173__$1 = temp__4092__auto___359172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__359158_359173__$1))
{var c__14708__auto___359174 = cljs.core.chunk_first.call(null,seq__359158_359173__$1);{
var G__359175 = cljs.core.chunk_rest.call(null,seq__359158_359173__$1);
var G__359176 = c__14708__auto___359174;
var G__359177 = cljs.core.count.call(null,c__14708__auto___359174);
var G__359178 = 0;
seq__359158_359163 = G__359175;
chunk__359159_359164 = G__359176;
count__359160_359165 = G__359177;
i__359161_359166 = G__359178;
continue;
}
} else
{var k_359179__$1 = cljs.core.first.call(null,seq__359158_359173__$1);remove_attr_BANG_.call(null,elem__$1,k_359179__$1);
{
var G__359180 = cljs.core.next.call(null,seq__359158_359173__$1);
var G__359181 = null;
var G__359182 = 0;
var G__359183 = 0;
seq__359158_359163 = G__359180;
chunk__359159_359164 = G__359181;
count__359160_359165 = G__359182;
i__359161_359166 = G__359183;
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
var G__359162 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__359162__delegate.call(this,elem,k,ks);};
G__359162.cljs$lang$maxFixedArity = 2;
G__359162.cljs$lang$applyTo = (function (arglist__359184){
var elem = cljs.core.first(arglist__359184);
arglist__359184 = cljs.core.next(arglist__359184);
var k = cljs.core.first(arglist__359184);
var ks = cljs.core.rest(arglist__359184);
return G__359162__delegate(elem,k,ks);
});
G__359162.cljs$core$IFn$_invoke$arity$variadic = G__359162__delegate;
return G__359162;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__359186 = dommy.template.__GT_node_like.call(null,elem);G__359186.style.display = ((show_QMARK_)?"":"none");
return G__359186;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__359188 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__359188,false);
return G__359188;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__359190 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__359190,true);
return G__359190;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__359192 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__359192["constructor"] = Object);
return G__359192;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map