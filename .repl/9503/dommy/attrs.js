// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7629__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7629__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7629__auto__;
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
var G__37159 = (i + class$.length);
start_from = G__37159;
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
{var temp__4090__auto___37184 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___37184))
{var class_list_37185 = temp__4090__auto___37184;var seq__37172_37186 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__37173_37187 = null;var count__37174_37188 = 0;var i__37175_37189 = 0;while(true){
if((i__37175_37189 < count__37174_37188))
{var class_37190 = cljs.core._nth.call(null,chunk__37173_37187,i__37175_37189);class_list_37185.add(class_37190);
{
var G__37191 = seq__37172_37186;
var G__37192 = chunk__37173_37187;
var G__37193 = count__37174_37188;
var G__37194 = (i__37175_37189 + 1);
seq__37172_37186 = G__37191;
chunk__37173_37187 = G__37192;
count__37174_37188 = G__37193;
i__37175_37189 = G__37194;
continue;
}
} else
{var temp__4092__auto___37195 = cljs.core.seq.call(null,seq__37172_37186);if(temp__4092__auto___37195)
{var seq__37172_37196__$1 = temp__4092__auto___37195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37172_37196__$1))
{var c__8355__auto___37197 = cljs.core.chunk_first.call(null,seq__37172_37196__$1);{
var G__37198 = cljs.core.chunk_rest.call(null,seq__37172_37196__$1);
var G__37199 = c__8355__auto___37197;
var G__37200 = cljs.core.count.call(null,c__8355__auto___37197);
var G__37201 = 0;
seq__37172_37186 = G__37198;
chunk__37173_37187 = G__37199;
count__37174_37188 = G__37200;
i__37175_37189 = G__37201;
continue;
}
} else
{var class_37202 = cljs.core.first.call(null,seq__37172_37196__$1);class_list_37185.add(class_37202);
{
var G__37203 = cljs.core.next.call(null,seq__37172_37196__$1);
var G__37204 = null;
var G__37205 = 0;
var G__37206 = 0;
seq__37172_37186 = G__37203;
chunk__37173_37187 = G__37204;
count__37174_37188 = G__37205;
i__37175_37189 = G__37206;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_37207 = elem__$1.className;var seq__37176_37208 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__37177_37209 = null;var count__37178_37210 = 0;var i__37179_37211 = 0;while(true){
if((i__37179_37211 < count__37178_37210))
{var class_37212 = cljs.core._nth.call(null,chunk__37177_37209,i__37179_37211);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_37207,class_37212)))
{} else
{elem__$1.className = (((class_name_37207 === ""))?class_37212:[cljs.core.str(class_name_37207),cljs.core.str(" "),cljs.core.str(class_37212)].join(''));
}
{
var G__37213 = seq__37176_37208;
var G__37214 = chunk__37177_37209;
var G__37215 = count__37178_37210;
var G__37216 = (i__37179_37211 + 1);
seq__37176_37208 = G__37213;
chunk__37177_37209 = G__37214;
count__37178_37210 = G__37215;
i__37179_37211 = G__37216;
continue;
}
} else
{var temp__4092__auto___37217 = cljs.core.seq.call(null,seq__37176_37208);if(temp__4092__auto___37217)
{var seq__37176_37218__$1 = temp__4092__auto___37217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37176_37218__$1))
{var c__8355__auto___37219 = cljs.core.chunk_first.call(null,seq__37176_37218__$1);{
var G__37220 = cljs.core.chunk_rest.call(null,seq__37176_37218__$1);
var G__37221 = c__8355__auto___37219;
var G__37222 = cljs.core.count.call(null,c__8355__auto___37219);
var G__37223 = 0;
seq__37176_37208 = G__37220;
chunk__37177_37209 = G__37221;
count__37178_37210 = G__37222;
i__37179_37211 = G__37223;
continue;
}
} else
{var class_37224 = cljs.core.first.call(null,seq__37176_37218__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_37207,class_37224)))
{} else
{elem__$1.className = (((class_name_37207 === ""))?class_37224:[cljs.core.str(class_name_37207),cljs.core.str(" "),cljs.core.str(class_37224)].join(''));
}
{
var G__37225 = cljs.core.next.call(null,seq__37176_37218__$1);
var G__37226 = null;
var G__37227 = 0;
var G__37228 = 0;
seq__37176_37208 = G__37225;
chunk__37177_37209 = G__37226;
count__37178_37210 = G__37227;
i__37179_37211 = G__37228;
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
var G__37229__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37180_37230 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__37181_37231 = null;var count__37182_37232 = 0;var i__37183_37233 = 0;while(true){
if((i__37183_37233 < count__37182_37232))
{var c_37234 = cljs.core._nth.call(null,chunk__37181_37231,i__37183_37233);add_class_BANG_.call(null,elem__$1,c_37234);
{
var G__37235 = seq__37180_37230;
var G__37236 = chunk__37181_37231;
var G__37237 = count__37182_37232;
var G__37238 = (i__37183_37233 + 1);
seq__37180_37230 = G__37235;
chunk__37181_37231 = G__37236;
count__37182_37232 = G__37237;
i__37183_37233 = G__37238;
continue;
}
} else
{var temp__4092__auto___37239 = cljs.core.seq.call(null,seq__37180_37230);if(temp__4092__auto___37239)
{var seq__37180_37240__$1 = temp__4092__auto___37239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37180_37240__$1))
{var c__8355__auto___37241 = cljs.core.chunk_first.call(null,seq__37180_37240__$1);{
var G__37242 = cljs.core.chunk_rest.call(null,seq__37180_37240__$1);
var G__37243 = c__8355__auto___37241;
var G__37244 = cljs.core.count.call(null,c__8355__auto___37241);
var G__37245 = 0;
seq__37180_37230 = G__37242;
chunk__37181_37231 = G__37243;
count__37182_37232 = G__37244;
i__37183_37233 = G__37245;
continue;
}
} else
{var c_37246 = cljs.core.first.call(null,seq__37180_37240__$1);add_class_BANG_.call(null,elem__$1,c_37246);
{
var G__37247 = cljs.core.next.call(null,seq__37180_37240__$1);
var G__37248 = null;
var G__37249 = 0;
var G__37250 = 0;
seq__37180_37230 = G__37247;
chunk__37181_37231 = G__37248;
count__37182_37232 = G__37249;
i__37183_37233 = G__37250;
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
var G__37229 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37229__delegate.call(this,elem,classes,more_classes);};
G__37229.cljs$lang$maxFixedArity = 2;
G__37229.cljs$lang$applyTo = (function (arglist__37251){
var elem = cljs.core.first(arglist__37251);
arglist__37251 = cljs.core.next(arglist__37251);
var classes = cljs.core.first(arglist__37251);
var more_classes = cljs.core.rest(arglist__37251);
return G__37229__delegate(elem,classes,more_classes);
});
G__37229.cljs$core$IFn$_invoke$arity$variadic = G__37229__delegate;
return G__37229;
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
var G__37252 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__37252;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___37261 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___37261))
{var class_list_37262 = temp__4090__auto___37261;class_list_37262.remove(class$__$1);
} else
{var class_name_37263 = elem__$1.className;var new_class_name_37264 = dommy.attrs.remove_class_str.call(null,class_name_37263,class$__$1);if((class_name_37263 === new_class_name_37264))
{} else
{elem__$1.className = new_class_name_37264;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__37265__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37257 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__37258 = null;var count__37259 = 0;var i__37260 = 0;while(true){
if((i__37260 < count__37259))
{var c = cljs.core._nth.call(null,chunk__37258,i__37260);remove_class_BANG_.call(null,elem__$1,c);
{
var G__37266 = seq__37257;
var G__37267 = chunk__37258;
var G__37268 = count__37259;
var G__37269 = (i__37260 + 1);
seq__37257 = G__37266;
chunk__37258 = G__37267;
count__37259 = G__37268;
i__37260 = G__37269;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37257);if(temp__4092__auto__)
{var seq__37257__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37257__$1))
{var c__8355__auto__ = cljs.core.chunk_first.call(null,seq__37257__$1);{
var G__37270 = cljs.core.chunk_rest.call(null,seq__37257__$1);
var G__37271 = c__8355__auto__;
var G__37272 = cljs.core.count.call(null,c__8355__auto__);
var G__37273 = 0;
seq__37257 = G__37270;
chunk__37258 = G__37271;
count__37259 = G__37272;
i__37260 = G__37273;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__37257__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__37274 = cljs.core.next.call(null,seq__37257__$1);
var G__37275 = null;
var G__37276 = 0;
var G__37277 = 0;
seq__37257 = G__37274;
chunk__37258 = G__37275;
count__37259 = G__37276;
i__37260 = G__37277;
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
var G__37265 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37265__delegate.call(this,elem,class$,classes);};
G__37265.cljs$lang$maxFixedArity = 2;
G__37265.cljs$lang$applyTo = (function (arglist__37278){
var elem = cljs.core.first(arglist__37278);
arglist__37278 = cljs.core.next(arglist__37278);
var class$ = cljs.core.first(arglist__37278);
var classes = cljs.core.rest(arglist__37278);
return G__37265__delegate(elem,class$,classes);
});
G__37265.cljs$core$IFn$_invoke$arity$variadic = G__37265__delegate;
return G__37265;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___37279 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___37279))
{var class_list_37280 = temp__4090__auto___37279;class_list_37280.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__37283){var vec__37284 = p__37283;var k = cljs.core.nth.call(null,vec__37284,0,null);var v = cljs.core.nth.call(null,vec__37284,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__37291_37297 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__37292_37298 = null;var count__37293_37299 = 0;var i__37294_37300 = 0;while(true){
if((i__37294_37300 < count__37293_37299))
{var vec__37295_37301 = cljs.core._nth.call(null,chunk__37292_37298,i__37294_37300);var k_37302 = cljs.core.nth.call(null,vec__37295_37301,0,null);var v_37303 = cljs.core.nth.call(null,vec__37295_37301,1,null);(style[cljs.core.name.call(null,k_37302)] = v_37303);
{
var G__37304 = seq__37291_37297;
var G__37305 = chunk__37292_37298;
var G__37306 = count__37293_37299;
var G__37307 = (i__37294_37300 + 1);
seq__37291_37297 = G__37304;
chunk__37292_37298 = G__37305;
count__37293_37299 = G__37306;
i__37294_37300 = G__37307;
continue;
}
} else
{var temp__4092__auto___37308 = cljs.core.seq.call(null,seq__37291_37297);if(temp__4092__auto___37308)
{var seq__37291_37309__$1 = temp__4092__auto___37308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37291_37309__$1))
{var c__8355__auto___37310 = cljs.core.chunk_first.call(null,seq__37291_37309__$1);{
var G__37311 = cljs.core.chunk_rest.call(null,seq__37291_37309__$1);
var G__37312 = c__8355__auto___37310;
var G__37313 = cljs.core.count.call(null,c__8355__auto___37310);
var G__37314 = 0;
seq__37291_37297 = G__37311;
chunk__37292_37298 = G__37312;
count__37293_37299 = G__37313;
i__37294_37300 = G__37314;
continue;
}
} else
{var vec__37296_37315 = cljs.core.first.call(null,seq__37291_37309__$1);var k_37316 = cljs.core.nth.call(null,vec__37296_37315,0,null);var v_37317 = cljs.core.nth.call(null,vec__37296_37315,1,null);(style[cljs.core.name.call(null,k_37316)] = v_37317);
{
var G__37318 = cljs.core.next.call(null,seq__37291_37309__$1);
var G__37319 = null;
var G__37320 = 0;
var G__37321 = 0;
seq__37291_37297 = G__37318;
chunk__37292_37298 = G__37319;
count__37293_37299 = G__37320;
i__37294_37300 = G__37321;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__37322){
var elem = cljs.core.first(arglist__37322);
var kvs = cljs.core.rest(arglist__37322);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37329_37335 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__37330_37336 = null;var count__37331_37337 = 0;var i__37332_37338 = 0;while(true){
if((i__37332_37338 < count__37331_37337))
{var vec__37333_37339 = cljs.core._nth.call(null,chunk__37330_37336,i__37332_37338);var k_37340 = cljs.core.nth.call(null,vec__37333_37339,0,null);var v_37341 = cljs.core.nth.call(null,vec__37333_37339,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_37340,[cljs.core.str(v_37341),cljs.core.str("px")].join(''));
{
var G__37342 = seq__37329_37335;
var G__37343 = chunk__37330_37336;
var G__37344 = count__37331_37337;
var G__37345 = (i__37332_37338 + 1);
seq__37329_37335 = G__37342;
chunk__37330_37336 = G__37343;
count__37331_37337 = G__37344;
i__37332_37338 = G__37345;
continue;
}
} else
{var temp__4092__auto___37346 = cljs.core.seq.call(null,seq__37329_37335);if(temp__4092__auto___37346)
{var seq__37329_37347__$1 = temp__4092__auto___37346;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37329_37347__$1))
{var c__8355__auto___37348 = cljs.core.chunk_first.call(null,seq__37329_37347__$1);{
var G__37349 = cljs.core.chunk_rest.call(null,seq__37329_37347__$1);
var G__37350 = c__8355__auto___37348;
var G__37351 = cljs.core.count.call(null,c__8355__auto___37348);
var G__37352 = 0;
seq__37329_37335 = G__37349;
chunk__37330_37336 = G__37350;
count__37331_37337 = G__37351;
i__37332_37338 = G__37352;
continue;
}
} else
{var vec__37334_37353 = cljs.core.first.call(null,seq__37329_37347__$1);var k_37354 = cljs.core.nth.call(null,vec__37334_37353,0,null);var v_37355 = cljs.core.nth.call(null,vec__37334_37353,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_37354,[cljs.core.str(v_37355),cljs.core.str("px")].join(''));
{
var G__37356 = cljs.core.next.call(null,seq__37329_37347__$1);
var G__37357 = null;
var G__37358 = 0;
var G__37359 = 0;
seq__37329_37335 = G__37356;
chunk__37330_37336 = G__37357;
count__37331_37337 = G__37358;
i__37332_37338 = G__37359;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__37360){
var elem = cljs.core.first(arglist__37360);
var kvs = cljs.core.rest(arglist__37360);
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
{var G__37369 = dommy.template.__GT_node_like.call(null,elem);(G__37369[cljs.core.name.call(null,k)] = v);
return G__37369;
} else
{var G__37370 = dommy.template.__GT_node_like.call(null,elem);G__37370.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__37370;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__37377__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37371_37378 = cljs.core.seq.call(null,cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([k,v], true),cljs.core.partition.call(null,2,kvs)));var chunk__37372_37379 = null;var count__37373_37380 = 0;var i__37374_37381 = 0;while(true){
if((i__37374_37381 < count__37373_37380))
{var vec__37375_37382 = cljs.core._nth.call(null,chunk__37372_37379,i__37374_37381);var k_37383__$1 = cljs.core.nth.call(null,vec__37375_37382,0,null);var v_37384__$1 = cljs.core.nth.call(null,vec__37375_37382,1,null);set_attr_BANG_.call(null,elem__$1,k_37383__$1,v_37384__$1);
{
var G__37385 = seq__37371_37378;
var G__37386 = chunk__37372_37379;
var G__37387 = count__37373_37380;
var G__37388 = (i__37374_37381 + 1);
seq__37371_37378 = G__37385;
chunk__37372_37379 = G__37386;
count__37373_37380 = G__37387;
i__37374_37381 = G__37388;
continue;
}
} else
{var temp__4092__auto___37389 = cljs.core.seq.call(null,seq__37371_37378);if(temp__4092__auto___37389)
{var seq__37371_37390__$1 = temp__4092__auto___37389;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37371_37390__$1))
{var c__8355__auto___37391 = cljs.core.chunk_first.call(null,seq__37371_37390__$1);{
var G__37392 = cljs.core.chunk_rest.call(null,seq__37371_37390__$1);
var G__37393 = c__8355__auto___37391;
var G__37394 = cljs.core.count.call(null,c__8355__auto___37391);
var G__37395 = 0;
seq__37371_37378 = G__37392;
chunk__37372_37379 = G__37393;
count__37373_37380 = G__37394;
i__37374_37381 = G__37395;
continue;
}
} else
{var vec__37376_37396 = cljs.core.first.call(null,seq__37371_37390__$1);var k_37397__$1 = cljs.core.nth.call(null,vec__37376_37396,0,null);var v_37398__$1 = cljs.core.nth.call(null,vec__37376_37396,1,null);set_attr_BANG_.call(null,elem__$1,k_37397__$1,v_37398__$1);
{
var G__37399 = cljs.core.next.call(null,seq__37371_37390__$1);
var G__37400 = null;
var G__37401 = 0;
var G__37402 = 0;
seq__37371_37378 = G__37399;
chunk__37372_37379 = G__37400;
count__37373_37380 = G__37401;
i__37374_37381 = G__37402;
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
var G__37377 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__37377__delegate.call(this,elem,k,v,kvs);};
G__37377.cljs$lang$maxFixedArity = 3;
G__37377.cljs$lang$applyTo = (function (arglist__37403){
var elem = cljs.core.first(arglist__37403);
arglist__37403 = cljs.core.next(arglist__37403);
var k = cljs.core.first(arglist__37403);
arglist__37403 = cljs.core.next(arglist__37403);
var v = cljs.core.first(arglist__37403);
var kvs = cljs.core.rest(arglist__37403);
return G__37377__delegate(elem,k,v,kvs);
});
G__37377.cljs$core$IFn$_invoke$arity$variadic = G__37377__delegate;
return G__37377;
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
var G__37412__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__37408_37413 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__37409_37414 = null;var count__37410_37415 = 0;var i__37411_37416 = 0;while(true){
if((i__37411_37416 < count__37410_37415))
{var k_37417__$1 = cljs.core._nth.call(null,chunk__37409_37414,i__37411_37416);remove_attr_BANG_.call(null,elem__$1,k_37417__$1);
{
var G__37418 = seq__37408_37413;
var G__37419 = chunk__37409_37414;
var G__37420 = count__37410_37415;
var G__37421 = (i__37411_37416 + 1);
seq__37408_37413 = G__37418;
chunk__37409_37414 = G__37419;
count__37410_37415 = G__37420;
i__37411_37416 = G__37421;
continue;
}
} else
{var temp__4092__auto___37422 = cljs.core.seq.call(null,seq__37408_37413);if(temp__4092__auto___37422)
{var seq__37408_37423__$1 = temp__4092__auto___37422;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37408_37423__$1))
{var c__8355__auto___37424 = cljs.core.chunk_first.call(null,seq__37408_37423__$1);{
var G__37425 = cljs.core.chunk_rest.call(null,seq__37408_37423__$1);
var G__37426 = c__8355__auto___37424;
var G__37427 = cljs.core.count.call(null,c__8355__auto___37424);
var G__37428 = 0;
seq__37408_37413 = G__37425;
chunk__37409_37414 = G__37426;
count__37410_37415 = G__37427;
i__37411_37416 = G__37428;
continue;
}
} else
{var k_37429__$1 = cljs.core.first.call(null,seq__37408_37423__$1);remove_attr_BANG_.call(null,elem__$1,k_37429__$1);
{
var G__37430 = cljs.core.next.call(null,seq__37408_37423__$1);
var G__37431 = null;
var G__37432 = 0;
var G__37433 = 0;
seq__37408_37413 = G__37430;
chunk__37409_37414 = G__37431;
count__37410_37415 = G__37432;
i__37411_37416 = G__37433;
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
var G__37412 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__37412__delegate.call(this,elem,k,ks);};
G__37412.cljs$lang$maxFixedArity = 2;
G__37412.cljs$lang$applyTo = (function (arglist__37434){
var elem = cljs.core.first(arglist__37434);
arglist__37434 = cljs.core.next(arglist__37434);
var k = cljs.core.first(arglist__37434);
var ks = cljs.core.rest(arglist__37434);
return G__37412__delegate(elem,k,ks);
});
G__37412.cljs$core$IFn$_invoke$arity$variadic = G__37412__delegate;
return G__37412;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__37436 = dommy.template.__GT_node_like.call(null,elem);G__37436.style.display = ((show_QMARK_)?"":"none");
return G__37436;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__37438 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__37438,false);
return G__37438;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__37440 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__37440,true);
return G__37440;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__37442 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__37442["constructor"] = Object);
return G__37442;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
