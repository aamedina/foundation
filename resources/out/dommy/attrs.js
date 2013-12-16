// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13811__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13811__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13811__auto__;
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
var G__36014 = (i + class$.length);
start_from = G__36014;
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
{var temp__4090__auto___36039 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36039))
{var class_list_36040 = temp__4090__auto___36039;var seq__36027_36041 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36028_36042 = null;var count__36029_36043 = 0;var i__36030_36044 = 0;while(true){
if((i__36030_36044 < count__36029_36043))
{var class_36045 = cljs.core._nth.call(null,chunk__36028_36042,i__36030_36044);class_list_36040.add(class_36045);
{
var G__36046 = seq__36027_36041;
var G__36047 = chunk__36028_36042;
var G__36048 = count__36029_36043;
var G__36049 = (i__36030_36044 + 1);
seq__36027_36041 = G__36046;
chunk__36028_36042 = G__36047;
count__36029_36043 = G__36048;
i__36030_36044 = G__36049;
continue;
}
} else
{var temp__4092__auto___36050 = cljs.core.seq.call(null,seq__36027_36041);if(temp__4092__auto___36050)
{var seq__36027_36051__$1 = temp__4092__auto___36050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36027_36051__$1))
{var c__14547__auto___36052 = cljs.core.chunk_first.call(null,seq__36027_36051__$1);{
var G__36053 = cljs.core.chunk_rest.call(null,seq__36027_36051__$1);
var G__36054 = c__14547__auto___36052;
var G__36055 = cljs.core.count.call(null,c__14547__auto___36052);
var G__36056 = 0;
seq__36027_36041 = G__36053;
chunk__36028_36042 = G__36054;
count__36029_36043 = G__36055;
i__36030_36044 = G__36056;
continue;
}
} else
{var class_36057 = cljs.core.first.call(null,seq__36027_36051__$1);class_list_36040.add(class_36057);
{
var G__36058 = cljs.core.next.call(null,seq__36027_36051__$1);
var G__36059 = null;
var G__36060 = 0;
var G__36061 = 0;
seq__36027_36041 = G__36058;
chunk__36028_36042 = G__36059;
count__36029_36043 = G__36060;
i__36030_36044 = G__36061;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_36062 = elem__$1.className;var seq__36031_36063 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36032_36064 = null;var count__36033_36065 = 0;var i__36034_36066 = 0;while(true){
if((i__36034_36066 < count__36033_36065))
{var class_36067 = cljs.core._nth.call(null,chunk__36032_36064,i__36034_36066);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36062,class_36067)))
{} else
{elem__$1.className = (((class_name_36062 === ""))?class_36067:[cljs.core.str(class_name_36062),cljs.core.str(" "),cljs.core.str(class_36067)].join(''));
}
{
var G__36068 = seq__36031_36063;
var G__36069 = chunk__36032_36064;
var G__36070 = count__36033_36065;
var G__36071 = (i__36034_36066 + 1);
seq__36031_36063 = G__36068;
chunk__36032_36064 = G__36069;
count__36033_36065 = G__36070;
i__36034_36066 = G__36071;
continue;
}
} else
{var temp__4092__auto___36072 = cljs.core.seq.call(null,seq__36031_36063);if(temp__4092__auto___36072)
{var seq__36031_36073__$1 = temp__4092__auto___36072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36031_36073__$1))
{var c__14547__auto___36074 = cljs.core.chunk_first.call(null,seq__36031_36073__$1);{
var G__36075 = cljs.core.chunk_rest.call(null,seq__36031_36073__$1);
var G__36076 = c__14547__auto___36074;
var G__36077 = cljs.core.count.call(null,c__14547__auto___36074);
var G__36078 = 0;
seq__36031_36063 = G__36075;
chunk__36032_36064 = G__36076;
count__36033_36065 = G__36077;
i__36034_36066 = G__36078;
continue;
}
} else
{var class_36079 = cljs.core.first.call(null,seq__36031_36073__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36062,class_36079)))
{} else
{elem__$1.className = (((class_name_36062 === ""))?class_36079:[cljs.core.str(class_name_36062),cljs.core.str(" "),cljs.core.str(class_36079)].join(''));
}
{
var G__36080 = cljs.core.next.call(null,seq__36031_36073__$1);
var G__36081 = null;
var G__36082 = 0;
var G__36083 = 0;
seq__36031_36063 = G__36080;
chunk__36032_36064 = G__36081;
count__36033_36065 = G__36082;
i__36034_36066 = G__36083;
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
var G__36084__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36035_36085 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__36036_36086 = null;var count__36037_36087 = 0;var i__36038_36088 = 0;while(true){
if((i__36038_36088 < count__36037_36087))
{var c_36089 = cljs.core._nth.call(null,chunk__36036_36086,i__36038_36088);add_class_BANG_.call(null,elem__$1,c_36089);
{
var G__36090 = seq__36035_36085;
var G__36091 = chunk__36036_36086;
var G__36092 = count__36037_36087;
var G__36093 = (i__36038_36088 + 1);
seq__36035_36085 = G__36090;
chunk__36036_36086 = G__36091;
count__36037_36087 = G__36092;
i__36038_36088 = G__36093;
continue;
}
} else
{var temp__4092__auto___36094 = cljs.core.seq.call(null,seq__36035_36085);if(temp__4092__auto___36094)
{var seq__36035_36095__$1 = temp__4092__auto___36094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36035_36095__$1))
{var c__14547__auto___36096 = cljs.core.chunk_first.call(null,seq__36035_36095__$1);{
var G__36097 = cljs.core.chunk_rest.call(null,seq__36035_36095__$1);
var G__36098 = c__14547__auto___36096;
var G__36099 = cljs.core.count.call(null,c__14547__auto___36096);
var G__36100 = 0;
seq__36035_36085 = G__36097;
chunk__36036_36086 = G__36098;
count__36037_36087 = G__36099;
i__36038_36088 = G__36100;
continue;
}
} else
{var c_36101 = cljs.core.first.call(null,seq__36035_36095__$1);add_class_BANG_.call(null,elem__$1,c_36101);
{
var G__36102 = cljs.core.next.call(null,seq__36035_36095__$1);
var G__36103 = null;
var G__36104 = 0;
var G__36105 = 0;
seq__36035_36085 = G__36102;
chunk__36036_36086 = G__36103;
count__36037_36087 = G__36104;
i__36038_36088 = G__36105;
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
var G__36084 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36084__delegate.call(this,elem,classes,more_classes);};
G__36084.cljs$lang$maxFixedArity = 2;
G__36084.cljs$lang$applyTo = (function (arglist__36106){
var elem = cljs.core.first(arglist__36106);
arglist__36106 = cljs.core.next(arglist__36106);
var classes = cljs.core.first(arglist__36106);
var more_classes = cljs.core.rest(arglist__36106);
return G__36084__delegate(elem,classes,more_classes);
});
G__36084.cljs$core$IFn$_invoke$arity$variadic = G__36084__delegate;
return G__36084;
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
var G__36107 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__36107;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36116 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36116))
{var class_list_36117 = temp__4090__auto___36116;class_list_36117.remove(class$__$1);
} else
{var class_name_36118 = elem__$1.className;var new_class_name_36119 = dommy.attrs.remove_class_str.call(null,class_name_36118,class$__$1);if((class_name_36118 === new_class_name_36119))
{} else
{elem__$1.className = new_class_name_36119;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__36120__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36112 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__36113 = null;var count__36114 = 0;var i__36115 = 0;while(true){
if((i__36115 < count__36114))
{var c = cljs.core._nth.call(null,chunk__36113,i__36115);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36121 = seq__36112;
var G__36122 = chunk__36113;
var G__36123 = count__36114;
var G__36124 = (i__36115 + 1);
seq__36112 = G__36121;
chunk__36113 = G__36122;
count__36114 = G__36123;
i__36115 = G__36124;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36112);if(temp__4092__auto__)
{var seq__36112__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36112__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__36112__$1);{
var G__36125 = cljs.core.chunk_rest.call(null,seq__36112__$1);
var G__36126 = c__14547__auto__;
var G__36127 = cljs.core.count.call(null,c__14547__auto__);
var G__36128 = 0;
seq__36112 = G__36125;
chunk__36113 = G__36126;
count__36114 = G__36127;
i__36115 = G__36128;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__36112__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36129 = cljs.core.next.call(null,seq__36112__$1);
var G__36130 = null;
var G__36131 = 0;
var G__36132 = 0;
seq__36112 = G__36129;
chunk__36113 = G__36130;
count__36114 = G__36131;
i__36115 = G__36132;
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
var G__36120 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36120__delegate.call(this,elem,class$,classes);};
G__36120.cljs$lang$maxFixedArity = 2;
G__36120.cljs$lang$applyTo = (function (arglist__36133){
var elem = cljs.core.first(arglist__36133);
arglist__36133 = cljs.core.next(arglist__36133);
var class$ = cljs.core.first(arglist__36133);
var classes = cljs.core.rest(arglist__36133);
return G__36120__delegate(elem,class$,classes);
});
G__36120.cljs$core$IFn$_invoke$arity$variadic = G__36120__delegate;
return G__36120;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___36134 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___36134))
{var class_list_36135 = temp__4090__auto___36134;class_list_36135.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__36138){var vec__36139 = p__36138;var k = cljs.core.nth.call(null,vec__36139,0,null);var v = cljs.core.nth.call(null,vec__36139,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__36146_36152 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36147_36153 = null;var count__36148_36154 = 0;var i__36149_36155 = 0;while(true){
if((i__36149_36155 < count__36148_36154))
{var vec__36150_36156 = cljs.core._nth.call(null,chunk__36147_36153,i__36149_36155);var k_36157 = cljs.core.nth.call(null,vec__36150_36156,0,null);var v_36158 = cljs.core.nth.call(null,vec__36150_36156,1,null);(style[cljs.core.name.call(null,k_36157)] = v_36158);
{
var G__36159 = seq__36146_36152;
var G__36160 = chunk__36147_36153;
var G__36161 = count__36148_36154;
var G__36162 = (i__36149_36155 + 1);
seq__36146_36152 = G__36159;
chunk__36147_36153 = G__36160;
count__36148_36154 = G__36161;
i__36149_36155 = G__36162;
continue;
}
} else
{var temp__4092__auto___36163 = cljs.core.seq.call(null,seq__36146_36152);if(temp__4092__auto___36163)
{var seq__36146_36164__$1 = temp__4092__auto___36163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36146_36164__$1))
{var c__14547__auto___36165 = cljs.core.chunk_first.call(null,seq__36146_36164__$1);{
var G__36166 = cljs.core.chunk_rest.call(null,seq__36146_36164__$1);
var G__36167 = c__14547__auto___36165;
var G__36168 = cljs.core.count.call(null,c__14547__auto___36165);
var G__36169 = 0;
seq__36146_36152 = G__36166;
chunk__36147_36153 = G__36167;
count__36148_36154 = G__36168;
i__36149_36155 = G__36169;
continue;
}
} else
{var vec__36151_36170 = cljs.core.first.call(null,seq__36146_36164__$1);var k_36171 = cljs.core.nth.call(null,vec__36151_36170,0,null);var v_36172 = cljs.core.nth.call(null,vec__36151_36170,1,null);(style[cljs.core.name.call(null,k_36171)] = v_36172);
{
var G__36173 = cljs.core.next.call(null,seq__36146_36164__$1);
var G__36174 = null;
var G__36175 = 0;
var G__36176 = 0;
seq__36146_36152 = G__36173;
chunk__36147_36153 = G__36174;
count__36148_36154 = G__36175;
i__36149_36155 = G__36176;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36177){
var elem = cljs.core.first(arglist__36177);
var kvs = cljs.core.rest(arglist__36177);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36184_36190 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36185_36191 = null;var count__36186_36192 = 0;var i__36187_36193 = 0;while(true){
if((i__36187_36193 < count__36186_36192))
{var vec__36188_36194 = cljs.core._nth.call(null,chunk__36185_36191,i__36187_36193);var k_36195 = cljs.core.nth.call(null,vec__36188_36194,0,null);var v_36196 = cljs.core.nth.call(null,vec__36188_36194,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36195,[cljs.core.str(v_36196),cljs.core.str("px")].join(''));
{
var G__36197 = seq__36184_36190;
var G__36198 = chunk__36185_36191;
var G__36199 = count__36186_36192;
var G__36200 = (i__36187_36193 + 1);
seq__36184_36190 = G__36197;
chunk__36185_36191 = G__36198;
count__36186_36192 = G__36199;
i__36187_36193 = G__36200;
continue;
}
} else
{var temp__4092__auto___36201 = cljs.core.seq.call(null,seq__36184_36190);if(temp__4092__auto___36201)
{var seq__36184_36202__$1 = temp__4092__auto___36201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36184_36202__$1))
{var c__14547__auto___36203 = cljs.core.chunk_first.call(null,seq__36184_36202__$1);{
var G__36204 = cljs.core.chunk_rest.call(null,seq__36184_36202__$1);
var G__36205 = c__14547__auto___36203;
var G__36206 = cljs.core.count.call(null,c__14547__auto___36203);
var G__36207 = 0;
seq__36184_36190 = G__36204;
chunk__36185_36191 = G__36205;
count__36186_36192 = G__36206;
i__36187_36193 = G__36207;
continue;
}
} else
{var vec__36189_36208 = cljs.core.first.call(null,seq__36184_36202__$1);var k_36209 = cljs.core.nth.call(null,vec__36189_36208,0,null);var v_36210 = cljs.core.nth.call(null,vec__36189_36208,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36209,[cljs.core.str(v_36210),cljs.core.str("px")].join(''));
{
var G__36211 = cljs.core.next.call(null,seq__36184_36202__$1);
var G__36212 = null;
var G__36213 = 0;
var G__36214 = 0;
seq__36184_36190 = G__36211;
chunk__36185_36191 = G__36212;
count__36186_36192 = G__36213;
i__36187_36193 = G__36214;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__36215){
var elem = cljs.core.first(arglist__36215);
var kvs = cljs.core.rest(arglist__36215);
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
{var G__36224 = dommy.template.__GT_node_like.call(null,elem);(G__36224[cljs.core.name.call(null,k)] = v);
return G__36224;
} else
{var G__36225 = dommy.template.__GT_node_like.call(null,elem);G__36225.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__36225;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__36232__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36226_36233 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__36227_36234 = null;var count__36228_36235 = 0;var i__36229_36236 = 0;while(true){
if((i__36229_36236 < count__36228_36235))
{var vec__36230_36237 = cljs.core._nth.call(null,chunk__36227_36234,i__36229_36236);var k_36238__$1 = cljs.core.nth.call(null,vec__36230_36237,0,null);var v_36239__$1 = cljs.core.nth.call(null,vec__36230_36237,1,null);set_attr_BANG_.call(null,elem__$1,k_36238__$1,v_36239__$1);
{
var G__36240 = seq__36226_36233;
var G__36241 = chunk__36227_36234;
var G__36242 = count__36228_36235;
var G__36243 = (i__36229_36236 + 1);
seq__36226_36233 = G__36240;
chunk__36227_36234 = G__36241;
count__36228_36235 = G__36242;
i__36229_36236 = G__36243;
continue;
}
} else
{var temp__4092__auto___36244 = cljs.core.seq.call(null,seq__36226_36233);if(temp__4092__auto___36244)
{var seq__36226_36245__$1 = temp__4092__auto___36244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36226_36245__$1))
{var c__14547__auto___36246 = cljs.core.chunk_first.call(null,seq__36226_36245__$1);{
var G__36247 = cljs.core.chunk_rest.call(null,seq__36226_36245__$1);
var G__36248 = c__14547__auto___36246;
var G__36249 = cljs.core.count.call(null,c__14547__auto___36246);
var G__36250 = 0;
seq__36226_36233 = G__36247;
chunk__36227_36234 = G__36248;
count__36228_36235 = G__36249;
i__36229_36236 = G__36250;
continue;
}
} else
{var vec__36231_36251 = cljs.core.first.call(null,seq__36226_36245__$1);var k_36252__$1 = cljs.core.nth.call(null,vec__36231_36251,0,null);var v_36253__$1 = cljs.core.nth.call(null,vec__36231_36251,1,null);set_attr_BANG_.call(null,elem__$1,k_36252__$1,v_36253__$1);
{
var G__36254 = cljs.core.next.call(null,seq__36226_36245__$1);
var G__36255 = null;
var G__36256 = 0;
var G__36257 = 0;
seq__36226_36233 = G__36254;
chunk__36227_36234 = G__36255;
count__36228_36235 = G__36256;
i__36229_36236 = G__36257;
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
var G__36232 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__36232__delegate.call(this,elem,k,v,kvs);};
G__36232.cljs$lang$maxFixedArity = 3;
G__36232.cljs$lang$applyTo = (function (arglist__36258){
var elem = cljs.core.first(arglist__36258);
arglist__36258 = cljs.core.next(arglist__36258);
var k = cljs.core.first(arglist__36258);
arglist__36258 = cljs.core.next(arglist__36258);
var v = cljs.core.first(arglist__36258);
var kvs = cljs.core.rest(arglist__36258);
return G__36232__delegate(elem,k,v,kvs);
});
G__36232.cljs$core$IFn$_invoke$arity$variadic = G__36232__delegate;
return G__36232;
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
var G__36267__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36263_36268 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__36264_36269 = null;var count__36265_36270 = 0;var i__36266_36271 = 0;while(true){
if((i__36266_36271 < count__36265_36270))
{var k_36272__$1 = cljs.core._nth.call(null,chunk__36264_36269,i__36266_36271);remove_attr_BANG_.call(null,elem__$1,k_36272__$1);
{
var G__36273 = seq__36263_36268;
var G__36274 = chunk__36264_36269;
var G__36275 = count__36265_36270;
var G__36276 = (i__36266_36271 + 1);
seq__36263_36268 = G__36273;
chunk__36264_36269 = G__36274;
count__36265_36270 = G__36275;
i__36266_36271 = G__36276;
continue;
}
} else
{var temp__4092__auto___36277 = cljs.core.seq.call(null,seq__36263_36268);if(temp__4092__auto___36277)
{var seq__36263_36278__$1 = temp__4092__auto___36277;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36263_36278__$1))
{var c__14547__auto___36279 = cljs.core.chunk_first.call(null,seq__36263_36278__$1);{
var G__36280 = cljs.core.chunk_rest.call(null,seq__36263_36278__$1);
var G__36281 = c__14547__auto___36279;
var G__36282 = cljs.core.count.call(null,c__14547__auto___36279);
var G__36283 = 0;
seq__36263_36268 = G__36280;
chunk__36264_36269 = G__36281;
count__36265_36270 = G__36282;
i__36266_36271 = G__36283;
continue;
}
} else
{var k_36284__$1 = cljs.core.first.call(null,seq__36263_36278__$1);remove_attr_BANG_.call(null,elem__$1,k_36284__$1);
{
var G__36285 = cljs.core.next.call(null,seq__36263_36278__$1);
var G__36286 = null;
var G__36287 = 0;
var G__36288 = 0;
seq__36263_36268 = G__36285;
chunk__36264_36269 = G__36286;
count__36265_36270 = G__36287;
i__36266_36271 = G__36288;
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
var G__36267 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36267__delegate.call(this,elem,k,ks);};
G__36267.cljs$lang$maxFixedArity = 2;
G__36267.cljs$lang$applyTo = (function (arglist__36289){
var elem = cljs.core.first(arglist__36289);
arglist__36289 = cljs.core.next(arglist__36289);
var k = cljs.core.first(arglist__36289);
var ks = cljs.core.rest(arglist__36289);
return G__36267__delegate(elem,k,ks);
});
G__36267.cljs$core$IFn$_invoke$arity$variadic = G__36267__delegate;
return G__36267;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__36291 = dommy.template.__GT_node_like.call(null,elem);G__36291.style.display = ((show_QMARK_)?"":"none");
return G__36291;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__36293 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36293,false);
return G__36293;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__36295 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36295,true);
return G__36295;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__36297 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__36297["constructor"] = Object);
return G__36297;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map