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
var G__385928 = (i + class$.length);
start_from = G__385928;
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
{var temp__4090__auto___385953 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___385953))
{var class_list_385954 = temp__4090__auto___385953;var seq__385941_385955 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__385942_385956 = null;var count__385943_385957 = 0;var i__385944_385958 = 0;while(true){
if((i__385944_385958 < count__385943_385957))
{var class_385959 = cljs.core._nth.call(null,chunk__385942_385956,i__385944_385958);class_list_385954.add(class_385959);
{
var G__385960 = seq__385941_385955;
var G__385961 = chunk__385942_385956;
var G__385962 = count__385943_385957;
var G__385963 = (i__385944_385958 + 1);
seq__385941_385955 = G__385960;
chunk__385942_385956 = G__385961;
count__385943_385957 = G__385962;
i__385944_385958 = G__385963;
continue;
}
} else
{var temp__4092__auto___385964 = cljs.core.seq.call(null,seq__385941_385955);if(temp__4092__auto___385964)
{var seq__385941_385965__$1 = temp__4092__auto___385964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385941_385965__$1))
{var c__14708__auto___385966 = cljs.core.chunk_first.call(null,seq__385941_385965__$1);{
var G__385967 = cljs.core.chunk_rest.call(null,seq__385941_385965__$1);
var G__385968 = c__14708__auto___385966;
var G__385969 = cljs.core.count.call(null,c__14708__auto___385966);
var G__385970 = 0;
seq__385941_385955 = G__385967;
chunk__385942_385956 = G__385968;
count__385943_385957 = G__385969;
i__385944_385958 = G__385970;
continue;
}
} else
{var class_385971 = cljs.core.first.call(null,seq__385941_385965__$1);class_list_385954.add(class_385971);
{
var G__385972 = cljs.core.next.call(null,seq__385941_385965__$1);
var G__385973 = null;
var G__385974 = 0;
var G__385975 = 0;
seq__385941_385955 = G__385972;
chunk__385942_385956 = G__385973;
count__385943_385957 = G__385974;
i__385944_385958 = G__385975;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_385976 = elem__$1.className;var seq__385945_385977 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__385946_385978 = null;var count__385947_385979 = 0;var i__385948_385980 = 0;while(true){
if((i__385948_385980 < count__385947_385979))
{var class_385981 = cljs.core._nth.call(null,chunk__385946_385978,i__385948_385980);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_385976,class_385981)))
{} else
{elem__$1.className = (((class_name_385976 === ""))?class_385981:[cljs.core.str(class_name_385976),cljs.core.str(" "),cljs.core.str(class_385981)].join(''));
}
{
var G__385982 = seq__385945_385977;
var G__385983 = chunk__385946_385978;
var G__385984 = count__385947_385979;
var G__385985 = (i__385948_385980 + 1);
seq__385945_385977 = G__385982;
chunk__385946_385978 = G__385983;
count__385947_385979 = G__385984;
i__385948_385980 = G__385985;
continue;
}
} else
{var temp__4092__auto___385986 = cljs.core.seq.call(null,seq__385945_385977);if(temp__4092__auto___385986)
{var seq__385945_385987__$1 = temp__4092__auto___385986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385945_385987__$1))
{var c__14708__auto___385988 = cljs.core.chunk_first.call(null,seq__385945_385987__$1);{
var G__385989 = cljs.core.chunk_rest.call(null,seq__385945_385987__$1);
var G__385990 = c__14708__auto___385988;
var G__385991 = cljs.core.count.call(null,c__14708__auto___385988);
var G__385992 = 0;
seq__385945_385977 = G__385989;
chunk__385946_385978 = G__385990;
count__385947_385979 = G__385991;
i__385948_385980 = G__385992;
continue;
}
} else
{var class_385993 = cljs.core.first.call(null,seq__385945_385987__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_385976,class_385993)))
{} else
{elem__$1.className = (((class_name_385976 === ""))?class_385993:[cljs.core.str(class_name_385976),cljs.core.str(" "),cljs.core.str(class_385993)].join(''));
}
{
var G__385994 = cljs.core.next.call(null,seq__385945_385987__$1);
var G__385995 = null;
var G__385996 = 0;
var G__385997 = 0;
seq__385945_385977 = G__385994;
chunk__385946_385978 = G__385995;
count__385947_385979 = G__385996;
i__385948_385980 = G__385997;
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
var G__385998__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__385949_385999 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__385950_386000 = null;var count__385951_386001 = 0;var i__385952_386002 = 0;while(true){
if((i__385952_386002 < count__385951_386001))
{var c_386003 = cljs.core._nth.call(null,chunk__385950_386000,i__385952_386002);add_class_BANG_.call(null,elem__$1,c_386003);
{
var G__386004 = seq__385949_385999;
var G__386005 = chunk__385950_386000;
var G__386006 = count__385951_386001;
var G__386007 = (i__385952_386002 + 1);
seq__385949_385999 = G__386004;
chunk__385950_386000 = G__386005;
count__385951_386001 = G__386006;
i__385952_386002 = G__386007;
continue;
}
} else
{var temp__4092__auto___386008 = cljs.core.seq.call(null,seq__385949_385999);if(temp__4092__auto___386008)
{var seq__385949_386009__$1 = temp__4092__auto___386008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385949_386009__$1))
{var c__14708__auto___386010 = cljs.core.chunk_first.call(null,seq__385949_386009__$1);{
var G__386011 = cljs.core.chunk_rest.call(null,seq__385949_386009__$1);
var G__386012 = c__14708__auto___386010;
var G__386013 = cljs.core.count.call(null,c__14708__auto___386010);
var G__386014 = 0;
seq__385949_385999 = G__386011;
chunk__385950_386000 = G__386012;
count__385951_386001 = G__386013;
i__385952_386002 = G__386014;
continue;
}
} else
{var c_386015 = cljs.core.first.call(null,seq__385949_386009__$1);add_class_BANG_.call(null,elem__$1,c_386015);
{
var G__386016 = cljs.core.next.call(null,seq__385949_386009__$1);
var G__386017 = null;
var G__386018 = 0;
var G__386019 = 0;
seq__385949_385999 = G__386016;
chunk__385950_386000 = G__386017;
count__385951_386001 = G__386018;
i__385952_386002 = G__386019;
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
var G__385998 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__385998__delegate.call(this,elem,classes,more_classes);};
G__385998.cljs$lang$maxFixedArity = 2;
G__385998.cljs$lang$applyTo = (function (arglist__386020){
var elem = cljs.core.first(arglist__386020);
arglist__386020 = cljs.core.next(arglist__386020);
var classes = cljs.core.first(arglist__386020);
var more_classes = cljs.core.rest(arglist__386020);
return G__385998__delegate(elem,classes,more_classes);
});
G__385998.cljs$core$IFn$_invoke$arity$variadic = G__385998__delegate;
return G__385998;
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
var G__386021 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__386021;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___386030 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___386030))
{var class_list_386031 = temp__4090__auto___386030;class_list_386031.remove(class$__$1);
} else
{var class_name_386032 = elem__$1.className;var new_class_name_386033 = dommy.attrs.remove_class_str.call(null,class_name_386032,class$__$1);if((class_name_386032 === new_class_name_386033))
{} else
{elem__$1.className = new_class_name_386033;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__386034__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__386026 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__386027 = null;var count__386028 = 0;var i__386029 = 0;while(true){
if((i__386029 < count__386028))
{var c = cljs.core._nth.call(null,chunk__386027,i__386029);remove_class_BANG_.call(null,elem__$1,c);
{
var G__386035 = seq__386026;
var G__386036 = chunk__386027;
var G__386037 = count__386028;
var G__386038 = (i__386029 + 1);
seq__386026 = G__386035;
chunk__386027 = G__386036;
count__386028 = G__386037;
i__386029 = G__386038;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__386026);if(temp__4092__auto__)
{var seq__386026__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__386026__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__386026__$1);{
var G__386039 = cljs.core.chunk_rest.call(null,seq__386026__$1);
var G__386040 = c__14708__auto__;
var G__386041 = cljs.core.count.call(null,c__14708__auto__);
var G__386042 = 0;
seq__386026 = G__386039;
chunk__386027 = G__386040;
count__386028 = G__386041;
i__386029 = G__386042;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__386026__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__386043 = cljs.core.next.call(null,seq__386026__$1);
var G__386044 = null;
var G__386045 = 0;
var G__386046 = 0;
seq__386026 = G__386043;
chunk__386027 = G__386044;
count__386028 = G__386045;
i__386029 = G__386046;
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
var G__386034 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__386034__delegate.call(this,elem,class$,classes);};
G__386034.cljs$lang$maxFixedArity = 2;
G__386034.cljs$lang$applyTo = (function (arglist__386047){
var elem = cljs.core.first(arglist__386047);
arglist__386047 = cljs.core.next(arglist__386047);
var class$ = cljs.core.first(arglist__386047);
var classes = cljs.core.rest(arglist__386047);
return G__386034__delegate(elem,class$,classes);
});
G__386034.cljs$core$IFn$_invoke$arity$variadic = G__386034__delegate;
return G__386034;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___386048 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___386048))
{var class_list_386049 = temp__4090__auto___386048;class_list_386049.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__386052){var vec__386053 = p__386052;var k = cljs.core.nth.call(null,vec__386053,0,null);var v = cljs.core.nth.call(null,vec__386053,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__386060_386066 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__386061_386067 = null;var count__386062_386068 = 0;var i__386063_386069 = 0;while(true){
if((i__386063_386069 < count__386062_386068))
{var vec__386064_386070 = cljs.core._nth.call(null,chunk__386061_386067,i__386063_386069);var k_386071 = cljs.core.nth.call(null,vec__386064_386070,0,null);var v_386072 = cljs.core.nth.call(null,vec__386064_386070,1,null);(style[cljs.core.name.call(null,k_386071)] = v_386072);
{
var G__386073 = seq__386060_386066;
var G__386074 = chunk__386061_386067;
var G__386075 = count__386062_386068;
var G__386076 = (i__386063_386069 + 1);
seq__386060_386066 = G__386073;
chunk__386061_386067 = G__386074;
count__386062_386068 = G__386075;
i__386063_386069 = G__386076;
continue;
}
} else
{var temp__4092__auto___386077 = cljs.core.seq.call(null,seq__386060_386066);if(temp__4092__auto___386077)
{var seq__386060_386078__$1 = temp__4092__auto___386077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__386060_386078__$1))
{var c__14708__auto___386079 = cljs.core.chunk_first.call(null,seq__386060_386078__$1);{
var G__386080 = cljs.core.chunk_rest.call(null,seq__386060_386078__$1);
var G__386081 = c__14708__auto___386079;
var G__386082 = cljs.core.count.call(null,c__14708__auto___386079);
var G__386083 = 0;
seq__386060_386066 = G__386080;
chunk__386061_386067 = G__386081;
count__386062_386068 = G__386082;
i__386063_386069 = G__386083;
continue;
}
} else
{var vec__386065_386084 = cljs.core.first.call(null,seq__386060_386078__$1);var k_386085 = cljs.core.nth.call(null,vec__386065_386084,0,null);var v_386086 = cljs.core.nth.call(null,vec__386065_386084,1,null);(style[cljs.core.name.call(null,k_386085)] = v_386086);
{
var G__386087 = cljs.core.next.call(null,seq__386060_386078__$1);
var G__386088 = null;
var G__386089 = 0;
var G__386090 = 0;
seq__386060_386066 = G__386087;
chunk__386061_386067 = G__386088;
count__386062_386068 = G__386089;
i__386063_386069 = G__386090;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__386091){
var elem = cljs.core.first(arglist__386091);
var kvs = cljs.core.rest(arglist__386091);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__386098_386104 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__386099_386105 = null;var count__386100_386106 = 0;var i__386101_386107 = 0;while(true){
if((i__386101_386107 < count__386100_386106))
{var vec__386102_386108 = cljs.core._nth.call(null,chunk__386099_386105,i__386101_386107);var k_386109 = cljs.core.nth.call(null,vec__386102_386108,0,null);var v_386110 = cljs.core.nth.call(null,vec__386102_386108,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_386109,[cljs.core.str(v_386110),cljs.core.str("px")].join(''));
{
var G__386111 = seq__386098_386104;
var G__386112 = chunk__386099_386105;
var G__386113 = count__386100_386106;
var G__386114 = (i__386101_386107 + 1);
seq__386098_386104 = G__386111;
chunk__386099_386105 = G__386112;
count__386100_386106 = G__386113;
i__386101_386107 = G__386114;
continue;
}
} else
{var temp__4092__auto___386115 = cljs.core.seq.call(null,seq__386098_386104);if(temp__4092__auto___386115)
{var seq__386098_386116__$1 = temp__4092__auto___386115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__386098_386116__$1))
{var c__14708__auto___386117 = cljs.core.chunk_first.call(null,seq__386098_386116__$1);{
var G__386118 = cljs.core.chunk_rest.call(null,seq__386098_386116__$1);
var G__386119 = c__14708__auto___386117;
var G__386120 = cljs.core.count.call(null,c__14708__auto___386117);
var G__386121 = 0;
seq__386098_386104 = G__386118;
chunk__386099_386105 = G__386119;
count__386100_386106 = G__386120;
i__386101_386107 = G__386121;
continue;
}
} else
{var vec__386103_386122 = cljs.core.first.call(null,seq__386098_386116__$1);var k_386123 = cljs.core.nth.call(null,vec__386103_386122,0,null);var v_386124 = cljs.core.nth.call(null,vec__386103_386122,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_386123,[cljs.core.str(v_386124),cljs.core.str("px")].join(''));
{
var G__386125 = cljs.core.next.call(null,seq__386098_386116__$1);
var G__386126 = null;
var G__386127 = 0;
var G__386128 = 0;
seq__386098_386104 = G__386125;
chunk__386099_386105 = G__386126;
count__386100_386106 = G__386127;
i__386101_386107 = G__386128;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__386129){
var elem = cljs.core.first(arglist__386129);
var kvs = cljs.core.rest(arglist__386129);
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
{var G__386138 = dommy.template.__GT_node_like.call(null,elem);(G__386138[cljs.core.name.call(null,k)] = v);
return G__386138;
} else
{var G__386139 = dommy.template.__GT_node_like.call(null,elem);G__386139.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__386139;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__386146__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__386140_386147 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__386141_386148 = null;var count__386142_386149 = 0;var i__386143_386150 = 0;while(true){
if((i__386143_386150 < count__386142_386149))
{var vec__386144_386151 = cljs.core._nth.call(null,chunk__386141_386148,i__386143_386150);var k_386152__$1 = cljs.core.nth.call(null,vec__386144_386151,0,null);var v_386153__$1 = cljs.core.nth.call(null,vec__386144_386151,1,null);set_attr_BANG_.call(null,elem__$1,k_386152__$1,v_386153__$1);
{
var G__386154 = seq__386140_386147;
var G__386155 = chunk__386141_386148;
var G__386156 = count__386142_386149;
var G__386157 = (i__386143_386150 + 1);
seq__386140_386147 = G__386154;
chunk__386141_386148 = G__386155;
count__386142_386149 = G__386156;
i__386143_386150 = G__386157;
continue;
}
} else
{var temp__4092__auto___386158 = cljs.core.seq.call(null,seq__386140_386147);if(temp__4092__auto___386158)
{var seq__386140_386159__$1 = temp__4092__auto___386158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__386140_386159__$1))
{var c__14708__auto___386160 = cljs.core.chunk_first.call(null,seq__386140_386159__$1);{
var G__386161 = cljs.core.chunk_rest.call(null,seq__386140_386159__$1);
var G__386162 = c__14708__auto___386160;
var G__386163 = cljs.core.count.call(null,c__14708__auto___386160);
var G__386164 = 0;
seq__386140_386147 = G__386161;
chunk__386141_386148 = G__386162;
count__386142_386149 = G__386163;
i__386143_386150 = G__386164;
continue;
}
} else
{var vec__386145_386165 = cljs.core.first.call(null,seq__386140_386159__$1);var k_386166__$1 = cljs.core.nth.call(null,vec__386145_386165,0,null);var v_386167__$1 = cljs.core.nth.call(null,vec__386145_386165,1,null);set_attr_BANG_.call(null,elem__$1,k_386166__$1,v_386167__$1);
{
var G__386168 = cljs.core.next.call(null,seq__386140_386159__$1);
var G__386169 = null;
var G__386170 = 0;
var G__386171 = 0;
seq__386140_386147 = G__386168;
chunk__386141_386148 = G__386169;
count__386142_386149 = G__386170;
i__386143_386150 = G__386171;
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
var G__386146 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__386146__delegate.call(this,elem,k,v,kvs);};
G__386146.cljs$lang$maxFixedArity = 3;
G__386146.cljs$lang$applyTo = (function (arglist__386172){
var elem = cljs.core.first(arglist__386172);
arglist__386172 = cljs.core.next(arglist__386172);
var k = cljs.core.first(arglist__386172);
arglist__386172 = cljs.core.next(arglist__386172);
var v = cljs.core.first(arglist__386172);
var kvs = cljs.core.rest(arglist__386172);
return G__386146__delegate(elem,k,v,kvs);
});
G__386146.cljs$core$IFn$_invoke$arity$variadic = G__386146__delegate;
return G__386146;
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
var G__386181__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__386177_386182 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__386178_386183 = null;var count__386179_386184 = 0;var i__386180_386185 = 0;while(true){
if((i__386180_386185 < count__386179_386184))
{var k_386186__$1 = cljs.core._nth.call(null,chunk__386178_386183,i__386180_386185);remove_attr_BANG_.call(null,elem__$1,k_386186__$1);
{
var G__386187 = seq__386177_386182;
var G__386188 = chunk__386178_386183;
var G__386189 = count__386179_386184;
var G__386190 = (i__386180_386185 + 1);
seq__386177_386182 = G__386187;
chunk__386178_386183 = G__386188;
count__386179_386184 = G__386189;
i__386180_386185 = G__386190;
continue;
}
} else
{var temp__4092__auto___386191 = cljs.core.seq.call(null,seq__386177_386182);if(temp__4092__auto___386191)
{var seq__386177_386192__$1 = temp__4092__auto___386191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__386177_386192__$1))
{var c__14708__auto___386193 = cljs.core.chunk_first.call(null,seq__386177_386192__$1);{
var G__386194 = cljs.core.chunk_rest.call(null,seq__386177_386192__$1);
var G__386195 = c__14708__auto___386193;
var G__386196 = cljs.core.count.call(null,c__14708__auto___386193);
var G__386197 = 0;
seq__386177_386182 = G__386194;
chunk__386178_386183 = G__386195;
count__386179_386184 = G__386196;
i__386180_386185 = G__386197;
continue;
}
} else
{var k_386198__$1 = cljs.core.first.call(null,seq__386177_386192__$1);remove_attr_BANG_.call(null,elem__$1,k_386198__$1);
{
var G__386199 = cljs.core.next.call(null,seq__386177_386192__$1);
var G__386200 = null;
var G__386201 = 0;
var G__386202 = 0;
seq__386177_386182 = G__386199;
chunk__386178_386183 = G__386200;
count__386179_386184 = G__386201;
i__386180_386185 = G__386202;
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
var G__386181 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__386181__delegate.call(this,elem,k,ks);};
G__386181.cljs$lang$maxFixedArity = 2;
G__386181.cljs$lang$applyTo = (function (arglist__386203){
var elem = cljs.core.first(arglist__386203);
arglist__386203 = cljs.core.next(arglist__386203);
var k = cljs.core.first(arglist__386203);
var ks = cljs.core.rest(arglist__386203);
return G__386181__delegate(elem,k,ks);
});
G__386181.cljs$core$IFn$_invoke$arity$variadic = G__386181__delegate;
return G__386181;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__386205 = dommy.template.__GT_node_like.call(null,elem);G__386205.style.display = ((show_QMARK_)?"":"none");
return G__386205;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__386207 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__386207,false);
return G__386207;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__386209 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__386209,true);
return G__386209;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__386211 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__386211["constructor"] = Object);
return G__386211;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map