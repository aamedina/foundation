// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7430__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7430__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7430__auto__;
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
var G__20057 = (i + class$.length);
start_from = G__20057;
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
{var temp__4090__auto___20082 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___20082))
{var class_list_20083 = temp__4090__auto___20082;var seq__20070_20084 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20071_20085 = null;var count__20072_20086 = 0;var i__20073_20087 = 0;while(true){
if((i__20073_20087 < count__20072_20086))
{var class_20088 = cljs.core._nth.call(null,chunk__20071_20085,i__20073_20087);class_list_20083.add(class_20088);
{
var G__20089 = seq__20070_20084;
var G__20090 = chunk__20071_20085;
var G__20091 = count__20072_20086;
var G__20092 = (i__20073_20087 + 1);
seq__20070_20084 = G__20089;
chunk__20071_20085 = G__20090;
count__20072_20086 = G__20091;
i__20073_20087 = G__20092;
continue;
}
} else
{var temp__4092__auto___20093 = cljs.core.seq.call(null,seq__20070_20084);if(temp__4092__auto___20093)
{var seq__20070_20094__$1 = temp__4092__auto___20093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20070_20094__$1))
{var c__8156__auto___20095 = cljs.core.chunk_first.call(null,seq__20070_20094__$1);{
var G__20096 = cljs.core.chunk_rest.call(null,seq__20070_20094__$1);
var G__20097 = c__8156__auto___20095;
var G__20098 = cljs.core.count.call(null,c__8156__auto___20095);
var G__20099 = 0;
seq__20070_20084 = G__20096;
chunk__20071_20085 = G__20097;
count__20072_20086 = G__20098;
i__20073_20087 = G__20099;
continue;
}
} else
{var class_20100 = cljs.core.first.call(null,seq__20070_20094__$1);class_list_20083.add(class_20100);
{
var G__20101 = cljs.core.next.call(null,seq__20070_20094__$1);
var G__20102 = null;
var G__20103 = 0;
var G__20104 = 0;
seq__20070_20084 = G__20101;
chunk__20071_20085 = G__20102;
count__20072_20086 = G__20103;
i__20073_20087 = G__20104;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_20105 = elem__$1.className;var seq__20074_20106 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__20075_20107 = null;var count__20076_20108 = 0;var i__20077_20109 = 0;while(true){
if((i__20077_20109 < count__20076_20108))
{var class_20110 = cljs.core._nth.call(null,chunk__20075_20107,i__20077_20109);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20105,class_20110)))
{} else
{elem__$1.className = (((class_name_20105 === ""))?class_20110:[cljs.core.str(class_name_20105),cljs.core.str(" "),cljs.core.str(class_20110)].join(''));
}
{
var G__20111 = seq__20074_20106;
var G__20112 = chunk__20075_20107;
var G__20113 = count__20076_20108;
var G__20114 = (i__20077_20109 + 1);
seq__20074_20106 = G__20111;
chunk__20075_20107 = G__20112;
count__20076_20108 = G__20113;
i__20077_20109 = G__20114;
continue;
}
} else
{var temp__4092__auto___20115 = cljs.core.seq.call(null,seq__20074_20106);if(temp__4092__auto___20115)
{var seq__20074_20116__$1 = temp__4092__auto___20115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20074_20116__$1))
{var c__8156__auto___20117 = cljs.core.chunk_first.call(null,seq__20074_20116__$1);{
var G__20118 = cljs.core.chunk_rest.call(null,seq__20074_20116__$1);
var G__20119 = c__8156__auto___20117;
var G__20120 = cljs.core.count.call(null,c__8156__auto___20117);
var G__20121 = 0;
seq__20074_20106 = G__20118;
chunk__20075_20107 = G__20119;
count__20076_20108 = G__20120;
i__20077_20109 = G__20121;
continue;
}
} else
{var class_20122 = cljs.core.first.call(null,seq__20074_20116__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_20105,class_20122)))
{} else
{elem__$1.className = (((class_name_20105 === ""))?class_20122:[cljs.core.str(class_name_20105),cljs.core.str(" "),cljs.core.str(class_20122)].join(''));
}
{
var G__20123 = cljs.core.next.call(null,seq__20074_20116__$1);
var G__20124 = null;
var G__20125 = 0;
var G__20126 = 0;
seq__20074_20106 = G__20123;
chunk__20075_20107 = G__20124;
count__20076_20108 = G__20125;
i__20077_20109 = G__20126;
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
var G__20127__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20078_20128 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__20079_20129 = null;var count__20080_20130 = 0;var i__20081_20131 = 0;while(true){
if((i__20081_20131 < count__20080_20130))
{var c_20132 = cljs.core._nth.call(null,chunk__20079_20129,i__20081_20131);add_class_BANG_.call(null,elem__$1,c_20132);
{
var G__20133 = seq__20078_20128;
var G__20134 = chunk__20079_20129;
var G__20135 = count__20080_20130;
var G__20136 = (i__20081_20131 + 1);
seq__20078_20128 = G__20133;
chunk__20079_20129 = G__20134;
count__20080_20130 = G__20135;
i__20081_20131 = G__20136;
continue;
}
} else
{var temp__4092__auto___20137 = cljs.core.seq.call(null,seq__20078_20128);if(temp__4092__auto___20137)
{var seq__20078_20138__$1 = temp__4092__auto___20137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20078_20138__$1))
{var c__8156__auto___20139 = cljs.core.chunk_first.call(null,seq__20078_20138__$1);{
var G__20140 = cljs.core.chunk_rest.call(null,seq__20078_20138__$1);
var G__20141 = c__8156__auto___20139;
var G__20142 = cljs.core.count.call(null,c__8156__auto___20139);
var G__20143 = 0;
seq__20078_20128 = G__20140;
chunk__20079_20129 = G__20141;
count__20080_20130 = G__20142;
i__20081_20131 = G__20143;
continue;
}
} else
{var c_20144 = cljs.core.first.call(null,seq__20078_20138__$1);add_class_BANG_.call(null,elem__$1,c_20144);
{
var G__20145 = cljs.core.next.call(null,seq__20078_20138__$1);
var G__20146 = null;
var G__20147 = 0;
var G__20148 = 0;
seq__20078_20128 = G__20145;
chunk__20079_20129 = G__20146;
count__20080_20130 = G__20147;
i__20081_20131 = G__20148;
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
var G__20127 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20127__delegate.call(this,elem,classes,more_classes);};
G__20127.cljs$lang$maxFixedArity = 2;
G__20127.cljs$lang$applyTo = (function (arglist__20149){
var elem = cljs.core.first(arglist__20149);
arglist__20149 = cljs.core.next(arglist__20149);
var classes = cljs.core.first(arglist__20149);
var more_classes = cljs.core.rest(arglist__20149);
return G__20127__delegate(elem,classes,more_classes);
});
G__20127.cljs$core$IFn$_invoke$arity$variadic = G__20127__delegate;
return G__20127;
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
var G__20150 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__20150;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___20159 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___20159))
{var class_list_20160 = temp__4090__auto___20159;class_list_20160.remove(class$__$1);
} else
{var class_name_20161 = elem__$1.className;var new_class_name_20162 = dommy.attrs.remove_class_str.call(null,class_name_20161,class$__$1);if((class_name_20161 === new_class_name_20162))
{} else
{elem__$1.className = new_class_name_20162;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__20163__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20155 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__20156 = null;var count__20157 = 0;var i__20158 = 0;while(true){
if((i__20158 < count__20157))
{var c = cljs.core._nth.call(null,chunk__20156,i__20158);remove_class_BANG_.call(null,elem__$1,c);
{
var G__20164 = seq__20155;
var G__20165 = chunk__20156;
var G__20166 = count__20157;
var G__20167 = (i__20158 + 1);
seq__20155 = G__20164;
chunk__20156 = G__20165;
count__20157 = G__20166;
i__20158 = G__20167;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__20155);if(temp__4092__auto__)
{var seq__20155__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20155__$1))
{var c__8156__auto__ = cljs.core.chunk_first.call(null,seq__20155__$1);{
var G__20168 = cljs.core.chunk_rest.call(null,seq__20155__$1);
var G__20169 = c__8156__auto__;
var G__20170 = cljs.core.count.call(null,c__8156__auto__);
var G__20171 = 0;
seq__20155 = G__20168;
chunk__20156 = G__20169;
count__20157 = G__20170;
i__20158 = G__20171;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__20155__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__20172 = cljs.core.next.call(null,seq__20155__$1);
var G__20173 = null;
var G__20174 = 0;
var G__20175 = 0;
seq__20155 = G__20172;
chunk__20156 = G__20173;
count__20157 = G__20174;
i__20158 = G__20175;
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
var G__20163 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20163__delegate.call(this,elem,class$,classes);};
G__20163.cljs$lang$maxFixedArity = 2;
G__20163.cljs$lang$applyTo = (function (arglist__20176){
var elem = cljs.core.first(arglist__20176);
arglist__20176 = cljs.core.next(arglist__20176);
var class$ = cljs.core.first(arglist__20176);
var classes = cljs.core.rest(arglist__20176);
return G__20163__delegate(elem,class$,classes);
});
G__20163.cljs$core$IFn$_invoke$arity$variadic = G__20163__delegate;
return G__20163;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___20177 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___20177))
{var class_list_20178 = temp__4090__auto___20177;class_list_20178.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__20181){var vec__20182 = p__20181;var k = cljs.core.nth.call(null,vec__20182,0,null);var v = cljs.core.nth.call(null,vec__20182,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__20189_20195 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__20190_20196 = null;var count__20191_20197 = 0;var i__20192_20198 = 0;while(true){
if((i__20192_20198 < count__20191_20197))
{var vec__20193_20199 = cljs.core._nth.call(null,chunk__20190_20196,i__20192_20198);var k_20200 = cljs.core.nth.call(null,vec__20193_20199,0,null);var v_20201 = cljs.core.nth.call(null,vec__20193_20199,1,null);(style[cljs.core.name.call(null,k_20200)] = v_20201);
{
var G__20202 = seq__20189_20195;
var G__20203 = chunk__20190_20196;
var G__20204 = count__20191_20197;
var G__20205 = (i__20192_20198 + 1);
seq__20189_20195 = G__20202;
chunk__20190_20196 = G__20203;
count__20191_20197 = G__20204;
i__20192_20198 = G__20205;
continue;
}
} else
{var temp__4092__auto___20206 = cljs.core.seq.call(null,seq__20189_20195);if(temp__4092__auto___20206)
{var seq__20189_20207__$1 = temp__4092__auto___20206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20189_20207__$1))
{var c__8156__auto___20208 = cljs.core.chunk_first.call(null,seq__20189_20207__$1);{
var G__20209 = cljs.core.chunk_rest.call(null,seq__20189_20207__$1);
var G__20210 = c__8156__auto___20208;
var G__20211 = cljs.core.count.call(null,c__8156__auto___20208);
var G__20212 = 0;
seq__20189_20195 = G__20209;
chunk__20190_20196 = G__20210;
count__20191_20197 = G__20211;
i__20192_20198 = G__20212;
continue;
}
} else
{var vec__20194_20213 = cljs.core.first.call(null,seq__20189_20207__$1);var k_20214 = cljs.core.nth.call(null,vec__20194_20213,0,null);var v_20215 = cljs.core.nth.call(null,vec__20194_20213,1,null);(style[cljs.core.name.call(null,k_20214)] = v_20215);
{
var G__20216 = cljs.core.next.call(null,seq__20189_20207__$1);
var G__20217 = null;
var G__20218 = 0;
var G__20219 = 0;
seq__20189_20195 = G__20216;
chunk__20190_20196 = G__20217;
count__20191_20197 = G__20218;
i__20192_20198 = G__20219;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__20220){
var elem = cljs.core.first(arglist__20220);
var kvs = cljs.core.rest(arglist__20220);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20227_20233 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__20228_20234 = null;var count__20229_20235 = 0;var i__20230_20236 = 0;while(true){
if((i__20230_20236 < count__20229_20235))
{var vec__20231_20237 = cljs.core._nth.call(null,chunk__20228_20234,i__20230_20236);var k_20238 = cljs.core.nth.call(null,vec__20231_20237,0,null);var v_20239 = cljs.core.nth.call(null,vec__20231_20237,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_20238,[cljs.core.str(v_20239),cljs.core.str("px")].join(''));
{
var G__20240 = seq__20227_20233;
var G__20241 = chunk__20228_20234;
var G__20242 = count__20229_20235;
var G__20243 = (i__20230_20236 + 1);
seq__20227_20233 = G__20240;
chunk__20228_20234 = G__20241;
count__20229_20235 = G__20242;
i__20230_20236 = G__20243;
continue;
}
} else
{var temp__4092__auto___20244 = cljs.core.seq.call(null,seq__20227_20233);if(temp__4092__auto___20244)
{var seq__20227_20245__$1 = temp__4092__auto___20244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20227_20245__$1))
{var c__8156__auto___20246 = cljs.core.chunk_first.call(null,seq__20227_20245__$1);{
var G__20247 = cljs.core.chunk_rest.call(null,seq__20227_20245__$1);
var G__20248 = c__8156__auto___20246;
var G__20249 = cljs.core.count.call(null,c__8156__auto___20246);
var G__20250 = 0;
seq__20227_20233 = G__20247;
chunk__20228_20234 = G__20248;
count__20229_20235 = G__20249;
i__20230_20236 = G__20250;
continue;
}
} else
{var vec__20232_20251 = cljs.core.first.call(null,seq__20227_20245__$1);var k_20252 = cljs.core.nth.call(null,vec__20232_20251,0,null);var v_20253 = cljs.core.nth.call(null,vec__20232_20251,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_20252,[cljs.core.str(v_20253),cljs.core.str("px")].join(''));
{
var G__20254 = cljs.core.next.call(null,seq__20227_20245__$1);
var G__20255 = null;
var G__20256 = 0;
var G__20257 = 0;
seq__20227_20233 = G__20254;
chunk__20228_20234 = G__20255;
count__20229_20235 = G__20256;
i__20230_20236 = G__20257;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__20258){
var elem = cljs.core.first(arglist__20258);
var kvs = cljs.core.rest(arglist__20258);
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
{var G__20267 = dommy.template.__GT_node_like.call(null,elem);(G__20267[cljs.core.name.call(null,k)] = v);
return G__20267;
} else
{var G__20268 = dommy.template.__GT_node_like.call(null,elem);G__20268.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__20268;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__20275__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20269_20276 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__20270_20277 = null;var count__20271_20278 = 0;var i__20272_20279 = 0;while(true){
if((i__20272_20279 < count__20271_20278))
{var vec__20273_20280 = cljs.core._nth.call(null,chunk__20270_20277,i__20272_20279);var k_20281__$1 = cljs.core.nth.call(null,vec__20273_20280,0,null);var v_20282__$1 = cljs.core.nth.call(null,vec__20273_20280,1,null);set_attr_BANG_.call(null,elem__$1,k_20281__$1,v_20282__$1);
{
var G__20283 = seq__20269_20276;
var G__20284 = chunk__20270_20277;
var G__20285 = count__20271_20278;
var G__20286 = (i__20272_20279 + 1);
seq__20269_20276 = G__20283;
chunk__20270_20277 = G__20284;
count__20271_20278 = G__20285;
i__20272_20279 = G__20286;
continue;
}
} else
{var temp__4092__auto___20287 = cljs.core.seq.call(null,seq__20269_20276);if(temp__4092__auto___20287)
{var seq__20269_20288__$1 = temp__4092__auto___20287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20269_20288__$1))
{var c__8156__auto___20289 = cljs.core.chunk_first.call(null,seq__20269_20288__$1);{
var G__20290 = cljs.core.chunk_rest.call(null,seq__20269_20288__$1);
var G__20291 = c__8156__auto___20289;
var G__20292 = cljs.core.count.call(null,c__8156__auto___20289);
var G__20293 = 0;
seq__20269_20276 = G__20290;
chunk__20270_20277 = G__20291;
count__20271_20278 = G__20292;
i__20272_20279 = G__20293;
continue;
}
} else
{var vec__20274_20294 = cljs.core.first.call(null,seq__20269_20288__$1);var k_20295__$1 = cljs.core.nth.call(null,vec__20274_20294,0,null);var v_20296__$1 = cljs.core.nth.call(null,vec__20274_20294,1,null);set_attr_BANG_.call(null,elem__$1,k_20295__$1,v_20296__$1);
{
var G__20297 = cljs.core.next.call(null,seq__20269_20288__$1);
var G__20298 = null;
var G__20299 = 0;
var G__20300 = 0;
seq__20269_20276 = G__20297;
chunk__20270_20277 = G__20298;
count__20271_20278 = G__20299;
i__20272_20279 = G__20300;
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
var G__20275 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__20275__delegate.call(this,elem,k,v,kvs);};
G__20275.cljs$lang$maxFixedArity = 3;
G__20275.cljs$lang$applyTo = (function (arglist__20301){
var elem = cljs.core.first(arglist__20301);
arglist__20301 = cljs.core.next(arglist__20301);
var k = cljs.core.first(arglist__20301);
arglist__20301 = cljs.core.next(arglist__20301);
var v = cljs.core.first(arglist__20301);
var kvs = cljs.core.rest(arglist__20301);
return G__20275__delegate(elem,k,v,kvs);
});
G__20275.cljs$core$IFn$_invoke$arity$variadic = G__20275__delegate;
return G__20275;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], true).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__20310__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__20306_20311 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__20307_20312 = null;var count__20308_20313 = 0;var i__20309_20314 = 0;while(true){
if((i__20309_20314 < count__20308_20313))
{var k_20315__$1 = cljs.core._nth.call(null,chunk__20307_20312,i__20309_20314);remove_attr_BANG_.call(null,elem__$1,k_20315__$1);
{
var G__20316 = seq__20306_20311;
var G__20317 = chunk__20307_20312;
var G__20318 = count__20308_20313;
var G__20319 = (i__20309_20314 + 1);
seq__20306_20311 = G__20316;
chunk__20307_20312 = G__20317;
count__20308_20313 = G__20318;
i__20309_20314 = G__20319;
continue;
}
} else
{var temp__4092__auto___20320 = cljs.core.seq.call(null,seq__20306_20311);if(temp__4092__auto___20320)
{var seq__20306_20321__$1 = temp__4092__auto___20320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20306_20321__$1))
{var c__8156__auto___20322 = cljs.core.chunk_first.call(null,seq__20306_20321__$1);{
var G__20323 = cljs.core.chunk_rest.call(null,seq__20306_20321__$1);
var G__20324 = c__8156__auto___20322;
var G__20325 = cljs.core.count.call(null,c__8156__auto___20322);
var G__20326 = 0;
seq__20306_20311 = G__20323;
chunk__20307_20312 = G__20324;
count__20308_20313 = G__20325;
i__20309_20314 = G__20326;
continue;
}
} else
{var k_20327__$1 = cljs.core.first.call(null,seq__20306_20321__$1);remove_attr_BANG_.call(null,elem__$1,k_20327__$1);
{
var G__20328 = cljs.core.next.call(null,seq__20306_20321__$1);
var G__20329 = null;
var G__20330 = 0;
var G__20331 = 0;
seq__20306_20311 = G__20328;
chunk__20307_20312 = G__20329;
count__20308_20313 = G__20330;
i__20309_20314 = G__20331;
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
var G__20310 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__20310__delegate.call(this,elem,k,ks);};
G__20310.cljs$lang$maxFixedArity = 2;
G__20310.cljs$lang$applyTo = (function (arglist__20332){
var elem = cljs.core.first(arglist__20332);
arglist__20332 = cljs.core.next(arglist__20332);
var k = cljs.core.first(arglist__20332);
var ks = cljs.core.rest(arglist__20332);
return G__20310__delegate(elem,k,ks);
});
G__20310.cljs$core$IFn$_invoke$arity$variadic = G__20310__delegate;
return G__20310;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__20334 = dommy.template.__GT_node_like.call(null,elem);G__20334.style.display = ((show_QMARK_)?"":"none");
return G__20334;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__20336 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__20336,false);
return G__20336;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__20338 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__20338,true);
return G__20338;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__20340 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__20340["constructor"] = Object);
return G__20340;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
