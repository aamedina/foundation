// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__15129__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__15129__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__15129__auto__;
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
var G__36011 = (i + class$.length);
start_from = G__36011;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4096__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto__))
{var class_list = temp__4096__auto__;return class_list.contains(class$__$1);
} else
{var temp__4098__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4098__auto__))
{var class_name = temp__4098__auto__;var temp__4098__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4098__auto____$1))
{var i = temp__4098__auto____$1;return (i >= 0);
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
{var temp__4096__auto___36036 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___36036))
{var class_list_36037 = temp__4096__auto___36036;var seq__36024_36038 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36025_36039 = null;var count__36026_36040 = 0;var i__36027_36041 = 0;while(true){
if((i__36027_36041 < count__36026_36040))
{var class_36042 = cljs.core._nth.call(null,chunk__36025_36039,i__36027_36041);class_list_36037.add(class_36042);
{
var G__36043 = seq__36024_36038;
var G__36044 = chunk__36025_36039;
var G__36045 = count__36026_36040;
var G__36046 = (i__36027_36041 + 1);
seq__36024_36038 = G__36043;
chunk__36025_36039 = G__36044;
count__36026_36040 = G__36045;
i__36027_36041 = G__36046;
continue;
}
} else
{var temp__4098__auto___36047 = cljs.core.seq.call(null,seq__36024_36038);if(temp__4098__auto___36047)
{var seq__36024_36048__$1 = temp__4098__auto___36047;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36024_36048__$1))
{var c__15865__auto___36049 = cljs.core.chunk_first.call(null,seq__36024_36048__$1);{
var G__36050 = cljs.core.chunk_rest.call(null,seq__36024_36048__$1);
var G__36051 = c__15865__auto___36049;
var G__36052 = cljs.core.count.call(null,c__15865__auto___36049);
var G__36053 = 0;
seq__36024_36038 = G__36050;
chunk__36025_36039 = G__36051;
count__36026_36040 = G__36052;
i__36027_36041 = G__36053;
continue;
}
} else
{var class_36054 = cljs.core.first.call(null,seq__36024_36048__$1);class_list_36037.add(class_36054);
{
var G__36055 = cljs.core.next.call(null,seq__36024_36048__$1);
var G__36056 = null;
var G__36057 = 0;
var G__36058 = 0;
seq__36024_36038 = G__36055;
chunk__36025_36039 = G__36056;
count__36026_36040 = G__36057;
i__36027_36041 = G__36058;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_36059 = elem__$1.className;var seq__36028_36060 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__36029_36061 = null;var count__36030_36062 = 0;var i__36031_36063 = 0;while(true){
if((i__36031_36063 < count__36030_36062))
{var class_36064 = cljs.core._nth.call(null,chunk__36029_36061,i__36031_36063);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36059,class_36064)))
{} else
{elem__$1.className = (((class_name_36059 === ""))?class_36064:[cljs.core.str(class_name_36059),cljs.core.str(" "),cljs.core.str(class_36064)].join(''));
}
{
var G__36065 = seq__36028_36060;
var G__36066 = chunk__36029_36061;
var G__36067 = count__36030_36062;
var G__36068 = (i__36031_36063 + 1);
seq__36028_36060 = G__36065;
chunk__36029_36061 = G__36066;
count__36030_36062 = G__36067;
i__36031_36063 = G__36068;
continue;
}
} else
{var temp__4098__auto___36069 = cljs.core.seq.call(null,seq__36028_36060);if(temp__4098__auto___36069)
{var seq__36028_36070__$1 = temp__4098__auto___36069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36028_36070__$1))
{var c__15865__auto___36071 = cljs.core.chunk_first.call(null,seq__36028_36070__$1);{
var G__36072 = cljs.core.chunk_rest.call(null,seq__36028_36070__$1);
var G__36073 = c__15865__auto___36071;
var G__36074 = cljs.core.count.call(null,c__15865__auto___36071);
var G__36075 = 0;
seq__36028_36060 = G__36072;
chunk__36029_36061 = G__36073;
count__36030_36062 = G__36074;
i__36031_36063 = G__36075;
continue;
}
} else
{var class_36076 = cljs.core.first.call(null,seq__36028_36070__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_36059,class_36076)))
{} else
{elem__$1.className = (((class_name_36059 === ""))?class_36076:[cljs.core.str(class_name_36059),cljs.core.str(" "),cljs.core.str(class_36076)].join(''));
}
{
var G__36077 = cljs.core.next.call(null,seq__36028_36070__$1);
var G__36078 = null;
var G__36079 = 0;
var G__36080 = 0;
seq__36028_36060 = G__36077;
chunk__36029_36061 = G__36078;
count__36030_36062 = G__36079;
i__36031_36063 = G__36080;
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
var G__36081__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36032_36082 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__36033_36083 = null;var count__36034_36084 = 0;var i__36035_36085 = 0;while(true){
if((i__36035_36085 < count__36034_36084))
{var c_36086 = cljs.core._nth.call(null,chunk__36033_36083,i__36035_36085);add_class_BANG_.call(null,elem__$1,c_36086);
{
var G__36087 = seq__36032_36082;
var G__36088 = chunk__36033_36083;
var G__36089 = count__36034_36084;
var G__36090 = (i__36035_36085 + 1);
seq__36032_36082 = G__36087;
chunk__36033_36083 = G__36088;
count__36034_36084 = G__36089;
i__36035_36085 = G__36090;
continue;
}
} else
{var temp__4098__auto___36091 = cljs.core.seq.call(null,seq__36032_36082);if(temp__4098__auto___36091)
{var seq__36032_36092__$1 = temp__4098__auto___36091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36032_36092__$1))
{var c__15865__auto___36093 = cljs.core.chunk_first.call(null,seq__36032_36092__$1);{
var G__36094 = cljs.core.chunk_rest.call(null,seq__36032_36092__$1);
var G__36095 = c__15865__auto___36093;
var G__36096 = cljs.core.count.call(null,c__15865__auto___36093);
var G__36097 = 0;
seq__36032_36082 = G__36094;
chunk__36033_36083 = G__36095;
count__36034_36084 = G__36096;
i__36035_36085 = G__36097;
continue;
}
} else
{var c_36098 = cljs.core.first.call(null,seq__36032_36092__$1);add_class_BANG_.call(null,elem__$1,c_36098);
{
var G__36099 = cljs.core.next.call(null,seq__36032_36092__$1);
var G__36100 = null;
var G__36101 = 0;
var G__36102 = 0;
seq__36032_36082 = G__36099;
chunk__36033_36083 = G__36100;
count__36034_36084 = G__36101;
i__36035_36085 = G__36102;
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
var G__36081 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36081__delegate.call(this,elem,classes,more_classes);};
G__36081.cljs$lang$maxFixedArity = 2;
G__36081.cljs$lang$applyTo = (function (arglist__36103){
var elem = cljs.core.first(arglist__36103);
arglist__36103 = cljs.core.next(arglist__36103);
var classes = cljs.core.first(arglist__36103);
var more_classes = cljs.core.rest(arglist__36103);
return G__36081__delegate(elem,classes,more_classes);
});
G__36081.cljs$core$IFn$_invoke$arity$variadic = G__36081__delegate;
return G__36081;
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
var class_len = class_name.length;var temp__4096__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4096__auto__))
{var i = temp__4096__auto__;{
var G__36104 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__36104;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4096__auto___36113 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___36113))
{var class_list_36114 = temp__4096__auto___36113;class_list_36114.remove(class$__$1);
} else
{var class_name_36115 = elem__$1.className;var new_class_name_36116 = dommy.attrs.remove_class_str.call(null,class_name_36115,class$__$1);if((class_name_36115 === new_class_name_36116))
{} else
{elem__$1.className = new_class_name_36116;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__36117__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36109 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__36110 = null;var count__36111 = 0;var i__36112 = 0;while(true){
if((i__36112 < count__36111))
{var c = cljs.core._nth.call(null,chunk__36110,i__36112);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36118 = seq__36109;
var G__36119 = chunk__36110;
var G__36120 = count__36111;
var G__36121 = (i__36112 + 1);
seq__36109 = G__36118;
chunk__36110 = G__36119;
count__36111 = G__36120;
i__36112 = G__36121;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__36109);if(temp__4098__auto__)
{var seq__36109__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36109__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__36109__$1);{
var G__36122 = cljs.core.chunk_rest.call(null,seq__36109__$1);
var G__36123 = c__15865__auto__;
var G__36124 = cljs.core.count.call(null,c__15865__auto__);
var G__36125 = 0;
seq__36109 = G__36122;
chunk__36110 = G__36123;
count__36111 = G__36124;
i__36112 = G__36125;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__36109__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__36126 = cljs.core.next.call(null,seq__36109__$1);
var G__36127 = null;
var G__36128 = 0;
var G__36129 = 0;
seq__36109 = G__36126;
chunk__36110 = G__36127;
count__36111 = G__36128;
i__36112 = G__36129;
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
var G__36117 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36117__delegate.call(this,elem,class$,classes);};
G__36117.cljs$lang$maxFixedArity = 2;
G__36117.cljs$lang$applyTo = (function (arglist__36130){
var elem = cljs.core.first(arglist__36130);
arglist__36130 = cljs.core.next(arglist__36130);
var class$ = cljs.core.first(arglist__36130);
var classes = cljs.core.rest(arglist__36130);
return G__36117__delegate(elem,class$,classes);
});
G__36117.cljs$core$IFn$_invoke$arity$variadic = G__36117__delegate;
return G__36117;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4096__auto___36131 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___36131))
{var class_list_36132 = temp__4096__auto___36131;class_list_36132.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__36135){var vec__36136 = p__36135;var k = cljs.core.nth.call(null,vec__36136,0,null);var v = cljs.core.nth.call(null,vec__36136,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__36143_36149 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36144_36150 = null;var count__36145_36151 = 0;var i__36146_36152 = 0;while(true){
if((i__36146_36152 < count__36145_36151))
{var vec__36147_36153 = cljs.core._nth.call(null,chunk__36144_36150,i__36146_36152);var k_36154 = cljs.core.nth.call(null,vec__36147_36153,0,null);var v_36155 = cljs.core.nth.call(null,vec__36147_36153,1,null);(style[cljs.core.name.call(null,k_36154)] = v_36155);
{
var G__36156 = seq__36143_36149;
var G__36157 = chunk__36144_36150;
var G__36158 = count__36145_36151;
var G__36159 = (i__36146_36152 + 1);
seq__36143_36149 = G__36156;
chunk__36144_36150 = G__36157;
count__36145_36151 = G__36158;
i__36146_36152 = G__36159;
continue;
}
} else
{var temp__4098__auto___36160 = cljs.core.seq.call(null,seq__36143_36149);if(temp__4098__auto___36160)
{var seq__36143_36161__$1 = temp__4098__auto___36160;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36143_36161__$1))
{var c__15865__auto___36162 = cljs.core.chunk_first.call(null,seq__36143_36161__$1);{
var G__36163 = cljs.core.chunk_rest.call(null,seq__36143_36161__$1);
var G__36164 = c__15865__auto___36162;
var G__36165 = cljs.core.count.call(null,c__15865__auto___36162);
var G__36166 = 0;
seq__36143_36149 = G__36163;
chunk__36144_36150 = G__36164;
count__36145_36151 = G__36165;
i__36146_36152 = G__36166;
continue;
}
} else
{var vec__36148_36167 = cljs.core.first.call(null,seq__36143_36161__$1);var k_36168 = cljs.core.nth.call(null,vec__36148_36167,0,null);var v_36169 = cljs.core.nth.call(null,vec__36148_36167,1,null);(style[cljs.core.name.call(null,k_36168)] = v_36169);
{
var G__36170 = cljs.core.next.call(null,seq__36143_36161__$1);
var G__36171 = null;
var G__36172 = 0;
var G__36173 = 0;
seq__36143_36149 = G__36170;
chunk__36144_36150 = G__36171;
count__36145_36151 = G__36172;
i__36146_36152 = G__36173;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36174){
var elem = cljs.core.first(arglist__36174);
var kvs = cljs.core.rest(arglist__36174);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36181_36187 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__36182_36188 = null;var count__36183_36189 = 0;var i__36184_36190 = 0;while(true){
if((i__36184_36190 < count__36183_36189))
{var vec__36185_36191 = cljs.core._nth.call(null,chunk__36182_36188,i__36184_36190);var k_36192 = cljs.core.nth.call(null,vec__36185_36191,0,null);var v_36193 = cljs.core.nth.call(null,vec__36185_36191,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36192,[cljs.core.str(v_36193),cljs.core.str("px")].join(''));
{
var G__36194 = seq__36181_36187;
var G__36195 = chunk__36182_36188;
var G__36196 = count__36183_36189;
var G__36197 = (i__36184_36190 + 1);
seq__36181_36187 = G__36194;
chunk__36182_36188 = G__36195;
count__36183_36189 = G__36196;
i__36184_36190 = G__36197;
continue;
}
} else
{var temp__4098__auto___36198 = cljs.core.seq.call(null,seq__36181_36187);if(temp__4098__auto___36198)
{var seq__36181_36199__$1 = temp__4098__auto___36198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36181_36199__$1))
{var c__15865__auto___36200 = cljs.core.chunk_first.call(null,seq__36181_36199__$1);{
var G__36201 = cljs.core.chunk_rest.call(null,seq__36181_36199__$1);
var G__36202 = c__15865__auto___36200;
var G__36203 = cljs.core.count.call(null,c__15865__auto___36200);
var G__36204 = 0;
seq__36181_36187 = G__36201;
chunk__36182_36188 = G__36202;
count__36183_36189 = G__36203;
i__36184_36190 = G__36204;
continue;
}
} else
{var vec__36186_36205 = cljs.core.first.call(null,seq__36181_36199__$1);var k_36206 = cljs.core.nth.call(null,vec__36186_36205,0,null);var v_36207 = cljs.core.nth.call(null,vec__36186_36205,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_36206,[cljs.core.str(v_36207),cljs.core.str("px")].join(''));
{
var G__36208 = cljs.core.next.call(null,seq__36181_36199__$1);
var G__36209 = null;
var G__36210 = 0;
var G__36211 = 0;
seq__36181_36187 = G__36208;
chunk__36182_36188 = G__36209;
count__36183_36189 = G__36210;
i__36184_36190 = G__36211;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__36212){
var elem = cljs.core.first(arglist__36212);
var kvs = cljs.core.rest(arglist__36212);
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
{var G__36221 = dommy.template.__GT_node_like.call(null,elem);(G__36221[cljs.core.name.call(null,k)] = v);
return G__36221;
} else
{var G__36222 = dommy.template.__GT_node_like.call(null,elem);G__36222.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__36222;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__36229__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36223_36230 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__36224_36231 = null;var count__36225_36232 = 0;var i__36226_36233 = 0;while(true){
if((i__36226_36233 < count__36225_36232))
{var vec__36227_36234 = cljs.core._nth.call(null,chunk__36224_36231,i__36226_36233);var k_36235__$1 = cljs.core.nth.call(null,vec__36227_36234,0,null);var v_36236__$1 = cljs.core.nth.call(null,vec__36227_36234,1,null);set_attr_BANG_.call(null,elem__$1,k_36235__$1,v_36236__$1);
{
var G__36237 = seq__36223_36230;
var G__36238 = chunk__36224_36231;
var G__36239 = count__36225_36232;
var G__36240 = (i__36226_36233 + 1);
seq__36223_36230 = G__36237;
chunk__36224_36231 = G__36238;
count__36225_36232 = G__36239;
i__36226_36233 = G__36240;
continue;
}
} else
{var temp__4098__auto___36241 = cljs.core.seq.call(null,seq__36223_36230);if(temp__4098__auto___36241)
{var seq__36223_36242__$1 = temp__4098__auto___36241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36223_36242__$1))
{var c__15865__auto___36243 = cljs.core.chunk_first.call(null,seq__36223_36242__$1);{
var G__36244 = cljs.core.chunk_rest.call(null,seq__36223_36242__$1);
var G__36245 = c__15865__auto___36243;
var G__36246 = cljs.core.count.call(null,c__15865__auto___36243);
var G__36247 = 0;
seq__36223_36230 = G__36244;
chunk__36224_36231 = G__36245;
count__36225_36232 = G__36246;
i__36226_36233 = G__36247;
continue;
}
} else
{var vec__36228_36248 = cljs.core.first.call(null,seq__36223_36242__$1);var k_36249__$1 = cljs.core.nth.call(null,vec__36228_36248,0,null);var v_36250__$1 = cljs.core.nth.call(null,vec__36228_36248,1,null);set_attr_BANG_.call(null,elem__$1,k_36249__$1,v_36250__$1);
{
var G__36251 = cljs.core.next.call(null,seq__36223_36242__$1);
var G__36252 = null;
var G__36253 = 0;
var G__36254 = 0;
seq__36223_36230 = G__36251;
chunk__36224_36231 = G__36252;
count__36225_36232 = G__36253;
i__36226_36233 = G__36254;
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
var G__36229 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__36229__delegate.call(this,elem,k,v,kvs);};
G__36229.cljs$lang$maxFixedArity = 3;
G__36229.cljs$lang$applyTo = (function (arglist__36255){
var elem = cljs.core.first(arglist__36255);
arglist__36255 = cljs.core.next(arglist__36255);
var k = cljs.core.first(arglist__36255);
arglist__36255 = cljs.core.next(arglist__36255);
var v = cljs.core.first(arglist__36255);
var kvs = cljs.core.rest(arglist__36255);
return G__36229__delegate(elem,k,v,kvs);
});
G__36229.cljs$core$IFn$_invoke$arity$variadic = G__36229__delegate;
return G__36229;
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
var G__36264__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__36260_36265 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__36261_36266 = null;var count__36262_36267 = 0;var i__36263_36268 = 0;while(true){
if((i__36263_36268 < count__36262_36267))
{var k_36269__$1 = cljs.core._nth.call(null,chunk__36261_36266,i__36263_36268);remove_attr_BANG_.call(null,elem__$1,k_36269__$1);
{
var G__36270 = seq__36260_36265;
var G__36271 = chunk__36261_36266;
var G__36272 = count__36262_36267;
var G__36273 = (i__36263_36268 + 1);
seq__36260_36265 = G__36270;
chunk__36261_36266 = G__36271;
count__36262_36267 = G__36272;
i__36263_36268 = G__36273;
continue;
}
} else
{var temp__4098__auto___36274 = cljs.core.seq.call(null,seq__36260_36265);if(temp__4098__auto___36274)
{var seq__36260_36275__$1 = temp__4098__auto___36274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36260_36275__$1))
{var c__15865__auto___36276 = cljs.core.chunk_first.call(null,seq__36260_36275__$1);{
var G__36277 = cljs.core.chunk_rest.call(null,seq__36260_36275__$1);
var G__36278 = c__15865__auto___36276;
var G__36279 = cljs.core.count.call(null,c__15865__auto___36276);
var G__36280 = 0;
seq__36260_36265 = G__36277;
chunk__36261_36266 = G__36278;
count__36262_36267 = G__36279;
i__36263_36268 = G__36280;
continue;
}
} else
{var k_36281__$1 = cljs.core.first.call(null,seq__36260_36275__$1);remove_attr_BANG_.call(null,elem__$1,k_36281__$1);
{
var G__36282 = cljs.core.next.call(null,seq__36260_36275__$1);
var G__36283 = null;
var G__36284 = 0;
var G__36285 = 0;
seq__36260_36265 = G__36282;
chunk__36261_36266 = G__36283;
count__36262_36267 = G__36284;
i__36263_36268 = G__36285;
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
var G__36264 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__36264__delegate.call(this,elem,k,ks);};
G__36264.cljs$lang$maxFixedArity = 2;
G__36264.cljs$lang$applyTo = (function (arglist__36286){
var elem = cljs.core.first(arglist__36286);
arglist__36286 = cljs.core.next(arglist__36286);
var k = cljs.core.first(arglist__36286);
var ks = cljs.core.rest(arglist__36286);
return G__36264__delegate(elem,k,ks);
});
G__36264.cljs$core$IFn$_invoke$arity$variadic = G__36264__delegate;
return G__36264;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__36288 = dommy.template.__GT_node_like.call(null,elem);G__36288.style.display = ((show_QMARK_)?"":"none");
return G__36288;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__36290 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36290,false);
return G__36290;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__36292 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__36292,true);
return G__36292;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__36294 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__36294["constructor"] = Object);
return G__36294;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map