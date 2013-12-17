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
var G__368017 = (i + class$.length);
start_from = G__368017;
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
{var temp__4090__auto___368042 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___368042))
{var class_list_368043 = temp__4090__auto___368042;var seq__368030_368044 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__368031_368045 = null;var count__368032_368046 = 0;var i__368033_368047 = 0;while(true){
if((i__368033_368047 < count__368032_368046))
{var class_368048 = cljs.core._nth.call(null,chunk__368031_368045,i__368033_368047);class_list_368043.add(class_368048);
{
var G__368049 = seq__368030_368044;
var G__368050 = chunk__368031_368045;
var G__368051 = count__368032_368046;
var G__368052 = (i__368033_368047 + 1);
seq__368030_368044 = G__368049;
chunk__368031_368045 = G__368050;
count__368032_368046 = G__368051;
i__368033_368047 = G__368052;
continue;
}
} else
{var temp__4092__auto___368053 = cljs.core.seq.call(null,seq__368030_368044);if(temp__4092__auto___368053)
{var seq__368030_368054__$1 = temp__4092__auto___368053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368030_368054__$1))
{var c__14708__auto___368055 = cljs.core.chunk_first.call(null,seq__368030_368054__$1);{
var G__368056 = cljs.core.chunk_rest.call(null,seq__368030_368054__$1);
var G__368057 = c__14708__auto___368055;
var G__368058 = cljs.core.count.call(null,c__14708__auto___368055);
var G__368059 = 0;
seq__368030_368044 = G__368056;
chunk__368031_368045 = G__368057;
count__368032_368046 = G__368058;
i__368033_368047 = G__368059;
continue;
}
} else
{var class_368060 = cljs.core.first.call(null,seq__368030_368054__$1);class_list_368043.add(class_368060);
{
var G__368061 = cljs.core.next.call(null,seq__368030_368054__$1);
var G__368062 = null;
var G__368063 = 0;
var G__368064 = 0;
seq__368030_368044 = G__368061;
chunk__368031_368045 = G__368062;
count__368032_368046 = G__368063;
i__368033_368047 = G__368064;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_368065 = elem__$1.className;var seq__368034_368066 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__368035_368067 = null;var count__368036_368068 = 0;var i__368037_368069 = 0;while(true){
if((i__368037_368069 < count__368036_368068))
{var class_368070 = cljs.core._nth.call(null,chunk__368035_368067,i__368037_368069);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_368065,class_368070)))
{} else
{elem__$1.className = (((class_name_368065 === ""))?class_368070:[cljs.core.str(class_name_368065),cljs.core.str(" "),cljs.core.str(class_368070)].join(''));
}
{
var G__368071 = seq__368034_368066;
var G__368072 = chunk__368035_368067;
var G__368073 = count__368036_368068;
var G__368074 = (i__368037_368069 + 1);
seq__368034_368066 = G__368071;
chunk__368035_368067 = G__368072;
count__368036_368068 = G__368073;
i__368037_368069 = G__368074;
continue;
}
} else
{var temp__4092__auto___368075 = cljs.core.seq.call(null,seq__368034_368066);if(temp__4092__auto___368075)
{var seq__368034_368076__$1 = temp__4092__auto___368075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368034_368076__$1))
{var c__14708__auto___368077 = cljs.core.chunk_first.call(null,seq__368034_368076__$1);{
var G__368078 = cljs.core.chunk_rest.call(null,seq__368034_368076__$1);
var G__368079 = c__14708__auto___368077;
var G__368080 = cljs.core.count.call(null,c__14708__auto___368077);
var G__368081 = 0;
seq__368034_368066 = G__368078;
chunk__368035_368067 = G__368079;
count__368036_368068 = G__368080;
i__368037_368069 = G__368081;
continue;
}
} else
{var class_368082 = cljs.core.first.call(null,seq__368034_368076__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_368065,class_368082)))
{} else
{elem__$1.className = (((class_name_368065 === ""))?class_368082:[cljs.core.str(class_name_368065),cljs.core.str(" "),cljs.core.str(class_368082)].join(''));
}
{
var G__368083 = cljs.core.next.call(null,seq__368034_368076__$1);
var G__368084 = null;
var G__368085 = 0;
var G__368086 = 0;
seq__368034_368066 = G__368083;
chunk__368035_368067 = G__368084;
count__368036_368068 = G__368085;
i__368037_368069 = G__368086;
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
var G__368087__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__368038_368088 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__368039_368089 = null;var count__368040_368090 = 0;var i__368041_368091 = 0;while(true){
if((i__368041_368091 < count__368040_368090))
{var c_368092 = cljs.core._nth.call(null,chunk__368039_368089,i__368041_368091);add_class_BANG_.call(null,elem__$1,c_368092);
{
var G__368093 = seq__368038_368088;
var G__368094 = chunk__368039_368089;
var G__368095 = count__368040_368090;
var G__368096 = (i__368041_368091 + 1);
seq__368038_368088 = G__368093;
chunk__368039_368089 = G__368094;
count__368040_368090 = G__368095;
i__368041_368091 = G__368096;
continue;
}
} else
{var temp__4092__auto___368097 = cljs.core.seq.call(null,seq__368038_368088);if(temp__4092__auto___368097)
{var seq__368038_368098__$1 = temp__4092__auto___368097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368038_368098__$1))
{var c__14708__auto___368099 = cljs.core.chunk_first.call(null,seq__368038_368098__$1);{
var G__368100 = cljs.core.chunk_rest.call(null,seq__368038_368098__$1);
var G__368101 = c__14708__auto___368099;
var G__368102 = cljs.core.count.call(null,c__14708__auto___368099);
var G__368103 = 0;
seq__368038_368088 = G__368100;
chunk__368039_368089 = G__368101;
count__368040_368090 = G__368102;
i__368041_368091 = G__368103;
continue;
}
} else
{var c_368104 = cljs.core.first.call(null,seq__368038_368098__$1);add_class_BANG_.call(null,elem__$1,c_368104);
{
var G__368105 = cljs.core.next.call(null,seq__368038_368098__$1);
var G__368106 = null;
var G__368107 = 0;
var G__368108 = 0;
seq__368038_368088 = G__368105;
chunk__368039_368089 = G__368106;
count__368040_368090 = G__368107;
i__368041_368091 = G__368108;
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
var G__368087 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__368087__delegate.call(this,elem,classes,more_classes);};
G__368087.cljs$lang$maxFixedArity = 2;
G__368087.cljs$lang$applyTo = (function (arglist__368109){
var elem = cljs.core.first(arglist__368109);
arglist__368109 = cljs.core.next(arglist__368109);
var classes = cljs.core.first(arglist__368109);
var more_classes = cljs.core.rest(arglist__368109);
return G__368087__delegate(elem,classes,more_classes);
});
G__368087.cljs$core$IFn$_invoke$arity$variadic = G__368087__delegate;
return G__368087;
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
var G__368110 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__368110;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___368119 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___368119))
{var class_list_368120 = temp__4090__auto___368119;class_list_368120.remove(class$__$1);
} else
{var class_name_368121 = elem__$1.className;var new_class_name_368122 = dommy.attrs.remove_class_str.call(null,class_name_368121,class$__$1);if((class_name_368121 === new_class_name_368122))
{} else
{elem__$1.className = new_class_name_368122;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__368123__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__368115 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__368116 = null;var count__368117 = 0;var i__368118 = 0;while(true){
if((i__368118 < count__368117))
{var c = cljs.core._nth.call(null,chunk__368116,i__368118);remove_class_BANG_.call(null,elem__$1,c);
{
var G__368124 = seq__368115;
var G__368125 = chunk__368116;
var G__368126 = count__368117;
var G__368127 = (i__368118 + 1);
seq__368115 = G__368124;
chunk__368116 = G__368125;
count__368117 = G__368126;
i__368118 = G__368127;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__368115);if(temp__4092__auto__)
{var seq__368115__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368115__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__368115__$1);{
var G__368128 = cljs.core.chunk_rest.call(null,seq__368115__$1);
var G__368129 = c__14708__auto__;
var G__368130 = cljs.core.count.call(null,c__14708__auto__);
var G__368131 = 0;
seq__368115 = G__368128;
chunk__368116 = G__368129;
count__368117 = G__368130;
i__368118 = G__368131;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__368115__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__368132 = cljs.core.next.call(null,seq__368115__$1);
var G__368133 = null;
var G__368134 = 0;
var G__368135 = 0;
seq__368115 = G__368132;
chunk__368116 = G__368133;
count__368117 = G__368134;
i__368118 = G__368135;
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
var G__368123 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__368123__delegate.call(this,elem,class$,classes);};
G__368123.cljs$lang$maxFixedArity = 2;
G__368123.cljs$lang$applyTo = (function (arglist__368136){
var elem = cljs.core.first(arglist__368136);
arglist__368136 = cljs.core.next(arglist__368136);
var class$ = cljs.core.first(arglist__368136);
var classes = cljs.core.rest(arglist__368136);
return G__368123__delegate(elem,class$,classes);
});
G__368123.cljs$core$IFn$_invoke$arity$variadic = G__368123__delegate;
return G__368123;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___368137 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___368137))
{var class_list_368138 = temp__4090__auto___368137;class_list_368138.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__368141){var vec__368142 = p__368141;var k = cljs.core.nth.call(null,vec__368142,0,null);var v = cljs.core.nth.call(null,vec__368142,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__368149_368155 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__368150_368156 = null;var count__368151_368157 = 0;var i__368152_368158 = 0;while(true){
if((i__368152_368158 < count__368151_368157))
{var vec__368153_368159 = cljs.core._nth.call(null,chunk__368150_368156,i__368152_368158);var k_368160 = cljs.core.nth.call(null,vec__368153_368159,0,null);var v_368161 = cljs.core.nth.call(null,vec__368153_368159,1,null);(style[cljs.core.name.call(null,k_368160)] = v_368161);
{
var G__368162 = seq__368149_368155;
var G__368163 = chunk__368150_368156;
var G__368164 = count__368151_368157;
var G__368165 = (i__368152_368158 + 1);
seq__368149_368155 = G__368162;
chunk__368150_368156 = G__368163;
count__368151_368157 = G__368164;
i__368152_368158 = G__368165;
continue;
}
} else
{var temp__4092__auto___368166 = cljs.core.seq.call(null,seq__368149_368155);if(temp__4092__auto___368166)
{var seq__368149_368167__$1 = temp__4092__auto___368166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368149_368167__$1))
{var c__14708__auto___368168 = cljs.core.chunk_first.call(null,seq__368149_368167__$1);{
var G__368169 = cljs.core.chunk_rest.call(null,seq__368149_368167__$1);
var G__368170 = c__14708__auto___368168;
var G__368171 = cljs.core.count.call(null,c__14708__auto___368168);
var G__368172 = 0;
seq__368149_368155 = G__368169;
chunk__368150_368156 = G__368170;
count__368151_368157 = G__368171;
i__368152_368158 = G__368172;
continue;
}
} else
{var vec__368154_368173 = cljs.core.first.call(null,seq__368149_368167__$1);var k_368174 = cljs.core.nth.call(null,vec__368154_368173,0,null);var v_368175 = cljs.core.nth.call(null,vec__368154_368173,1,null);(style[cljs.core.name.call(null,k_368174)] = v_368175);
{
var G__368176 = cljs.core.next.call(null,seq__368149_368167__$1);
var G__368177 = null;
var G__368178 = 0;
var G__368179 = 0;
seq__368149_368155 = G__368176;
chunk__368150_368156 = G__368177;
count__368151_368157 = G__368178;
i__368152_368158 = G__368179;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__368180){
var elem = cljs.core.first(arglist__368180);
var kvs = cljs.core.rest(arglist__368180);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__368187_368193 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__368188_368194 = null;var count__368189_368195 = 0;var i__368190_368196 = 0;while(true){
if((i__368190_368196 < count__368189_368195))
{var vec__368191_368197 = cljs.core._nth.call(null,chunk__368188_368194,i__368190_368196);var k_368198 = cljs.core.nth.call(null,vec__368191_368197,0,null);var v_368199 = cljs.core.nth.call(null,vec__368191_368197,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_368198,[cljs.core.str(v_368199),cljs.core.str("px")].join(''));
{
var G__368200 = seq__368187_368193;
var G__368201 = chunk__368188_368194;
var G__368202 = count__368189_368195;
var G__368203 = (i__368190_368196 + 1);
seq__368187_368193 = G__368200;
chunk__368188_368194 = G__368201;
count__368189_368195 = G__368202;
i__368190_368196 = G__368203;
continue;
}
} else
{var temp__4092__auto___368204 = cljs.core.seq.call(null,seq__368187_368193);if(temp__4092__auto___368204)
{var seq__368187_368205__$1 = temp__4092__auto___368204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368187_368205__$1))
{var c__14708__auto___368206 = cljs.core.chunk_first.call(null,seq__368187_368205__$1);{
var G__368207 = cljs.core.chunk_rest.call(null,seq__368187_368205__$1);
var G__368208 = c__14708__auto___368206;
var G__368209 = cljs.core.count.call(null,c__14708__auto___368206);
var G__368210 = 0;
seq__368187_368193 = G__368207;
chunk__368188_368194 = G__368208;
count__368189_368195 = G__368209;
i__368190_368196 = G__368210;
continue;
}
} else
{var vec__368192_368211 = cljs.core.first.call(null,seq__368187_368205__$1);var k_368212 = cljs.core.nth.call(null,vec__368192_368211,0,null);var v_368213 = cljs.core.nth.call(null,vec__368192_368211,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_368212,[cljs.core.str(v_368213),cljs.core.str("px")].join(''));
{
var G__368214 = cljs.core.next.call(null,seq__368187_368205__$1);
var G__368215 = null;
var G__368216 = 0;
var G__368217 = 0;
seq__368187_368193 = G__368214;
chunk__368188_368194 = G__368215;
count__368189_368195 = G__368216;
i__368190_368196 = G__368217;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__368218){
var elem = cljs.core.first(arglist__368218);
var kvs = cljs.core.rest(arglist__368218);
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
{var G__368227 = dommy.template.__GT_node_like.call(null,elem);(G__368227[cljs.core.name.call(null,k)] = v);
return G__368227;
} else
{var G__368228 = dommy.template.__GT_node_like.call(null,elem);G__368228.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__368228;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__368235__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__368229_368236 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__368230_368237 = null;var count__368231_368238 = 0;var i__368232_368239 = 0;while(true){
if((i__368232_368239 < count__368231_368238))
{var vec__368233_368240 = cljs.core._nth.call(null,chunk__368230_368237,i__368232_368239);var k_368241__$1 = cljs.core.nth.call(null,vec__368233_368240,0,null);var v_368242__$1 = cljs.core.nth.call(null,vec__368233_368240,1,null);set_attr_BANG_.call(null,elem__$1,k_368241__$1,v_368242__$1);
{
var G__368243 = seq__368229_368236;
var G__368244 = chunk__368230_368237;
var G__368245 = count__368231_368238;
var G__368246 = (i__368232_368239 + 1);
seq__368229_368236 = G__368243;
chunk__368230_368237 = G__368244;
count__368231_368238 = G__368245;
i__368232_368239 = G__368246;
continue;
}
} else
{var temp__4092__auto___368247 = cljs.core.seq.call(null,seq__368229_368236);if(temp__4092__auto___368247)
{var seq__368229_368248__$1 = temp__4092__auto___368247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368229_368248__$1))
{var c__14708__auto___368249 = cljs.core.chunk_first.call(null,seq__368229_368248__$1);{
var G__368250 = cljs.core.chunk_rest.call(null,seq__368229_368248__$1);
var G__368251 = c__14708__auto___368249;
var G__368252 = cljs.core.count.call(null,c__14708__auto___368249);
var G__368253 = 0;
seq__368229_368236 = G__368250;
chunk__368230_368237 = G__368251;
count__368231_368238 = G__368252;
i__368232_368239 = G__368253;
continue;
}
} else
{var vec__368234_368254 = cljs.core.first.call(null,seq__368229_368248__$1);var k_368255__$1 = cljs.core.nth.call(null,vec__368234_368254,0,null);var v_368256__$1 = cljs.core.nth.call(null,vec__368234_368254,1,null);set_attr_BANG_.call(null,elem__$1,k_368255__$1,v_368256__$1);
{
var G__368257 = cljs.core.next.call(null,seq__368229_368248__$1);
var G__368258 = null;
var G__368259 = 0;
var G__368260 = 0;
seq__368229_368236 = G__368257;
chunk__368230_368237 = G__368258;
count__368231_368238 = G__368259;
i__368232_368239 = G__368260;
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
var G__368235 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__368235__delegate.call(this,elem,k,v,kvs);};
G__368235.cljs$lang$maxFixedArity = 3;
G__368235.cljs$lang$applyTo = (function (arglist__368261){
var elem = cljs.core.first(arglist__368261);
arglist__368261 = cljs.core.next(arglist__368261);
var k = cljs.core.first(arglist__368261);
arglist__368261 = cljs.core.next(arglist__368261);
var v = cljs.core.first(arglist__368261);
var kvs = cljs.core.rest(arglist__368261);
return G__368235__delegate(elem,k,v,kvs);
});
G__368235.cljs$core$IFn$_invoke$arity$variadic = G__368235__delegate;
return G__368235;
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
var G__368270__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__368266_368271 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__368267_368272 = null;var count__368268_368273 = 0;var i__368269_368274 = 0;while(true){
if((i__368269_368274 < count__368268_368273))
{var k_368275__$1 = cljs.core._nth.call(null,chunk__368267_368272,i__368269_368274);remove_attr_BANG_.call(null,elem__$1,k_368275__$1);
{
var G__368276 = seq__368266_368271;
var G__368277 = chunk__368267_368272;
var G__368278 = count__368268_368273;
var G__368279 = (i__368269_368274 + 1);
seq__368266_368271 = G__368276;
chunk__368267_368272 = G__368277;
count__368268_368273 = G__368278;
i__368269_368274 = G__368279;
continue;
}
} else
{var temp__4092__auto___368280 = cljs.core.seq.call(null,seq__368266_368271);if(temp__4092__auto___368280)
{var seq__368266_368281__$1 = temp__4092__auto___368280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__368266_368281__$1))
{var c__14708__auto___368282 = cljs.core.chunk_first.call(null,seq__368266_368281__$1);{
var G__368283 = cljs.core.chunk_rest.call(null,seq__368266_368281__$1);
var G__368284 = c__14708__auto___368282;
var G__368285 = cljs.core.count.call(null,c__14708__auto___368282);
var G__368286 = 0;
seq__368266_368271 = G__368283;
chunk__368267_368272 = G__368284;
count__368268_368273 = G__368285;
i__368269_368274 = G__368286;
continue;
}
} else
{var k_368287__$1 = cljs.core.first.call(null,seq__368266_368281__$1);remove_attr_BANG_.call(null,elem__$1,k_368287__$1);
{
var G__368288 = cljs.core.next.call(null,seq__368266_368281__$1);
var G__368289 = null;
var G__368290 = 0;
var G__368291 = 0;
seq__368266_368271 = G__368288;
chunk__368267_368272 = G__368289;
count__368268_368273 = G__368290;
i__368269_368274 = G__368291;
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
var G__368270 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__368270__delegate.call(this,elem,k,ks);};
G__368270.cljs$lang$maxFixedArity = 2;
G__368270.cljs$lang$applyTo = (function (arglist__368292){
var elem = cljs.core.first(arglist__368292);
arglist__368292 = cljs.core.next(arglist__368292);
var k = cljs.core.first(arglist__368292);
var ks = cljs.core.rest(arglist__368292);
return G__368270__delegate(elem,k,ks);
});
G__368270.cljs$core$IFn$_invoke$arity$variadic = G__368270__delegate;
return G__368270;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__368294 = dommy.template.__GT_node_like.call(null,elem);G__368294.style.display = ((show_QMARK_)?"":"none");
return G__368294;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__368296 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__368296,false);
return G__368296;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__368298 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__368298,true);
return G__368298;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__368300 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__368300["constructor"] = Object);
return G__368300;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map