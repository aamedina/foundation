// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8186__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8186__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8186__auto__;
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
var G__25213 = (i + class$.length);
start_from = G__25213;
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
{var temp__4090__auto___25238 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25238))
{var class_list_25239 = temp__4090__auto___25238;var seq__25226_25240 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25227_25241 = null;var count__25228_25242 = 0;var i__25229_25243 = 0;while(true){
if((i__25229_25243 < count__25228_25242))
{var class_25244 = cljs.core._nth.call(null,chunk__25227_25241,i__25229_25243);class_list_25239.add(class_25244);
{
var G__25245 = seq__25226_25240;
var G__25246 = chunk__25227_25241;
var G__25247 = count__25228_25242;
var G__25248 = (i__25229_25243 + 1);
seq__25226_25240 = G__25245;
chunk__25227_25241 = G__25246;
count__25228_25242 = G__25247;
i__25229_25243 = G__25248;
continue;
}
} else
{var temp__4092__auto___25249 = cljs.core.seq.call(null,seq__25226_25240);if(temp__4092__auto___25249)
{var seq__25226_25250__$1 = temp__4092__auto___25249;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25226_25250__$1))
{var c__8927__auto___25251 = cljs.core.chunk_first.call(null,seq__25226_25250__$1);{
var G__25252 = cljs.core.chunk_rest.call(null,seq__25226_25250__$1);
var G__25253 = c__8927__auto___25251;
var G__25254 = cljs.core.count.call(null,c__8927__auto___25251);
var G__25255 = 0;
seq__25226_25240 = G__25252;
chunk__25227_25241 = G__25253;
count__25228_25242 = G__25254;
i__25229_25243 = G__25255;
continue;
}
} else
{var class_25256 = cljs.core.first.call(null,seq__25226_25250__$1);class_list_25239.add(class_25256);
{
var G__25257 = cljs.core.next.call(null,seq__25226_25250__$1);
var G__25258 = null;
var G__25259 = 0;
var G__25260 = 0;
seq__25226_25240 = G__25257;
chunk__25227_25241 = G__25258;
count__25228_25242 = G__25259;
i__25229_25243 = G__25260;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_25261 = elem__$1.className;var seq__25230_25262 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__25231_25263 = null;var count__25232_25264 = 0;var i__25233_25265 = 0;while(true){
if((i__25233_25265 < count__25232_25264))
{var class_25266 = cljs.core._nth.call(null,chunk__25231_25263,i__25233_25265);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25261,class_25266)))
{} else
{elem__$1.className = (((class_name_25261 === ""))?class_25266:[cljs.core.str(class_name_25261),cljs.core.str(" "),cljs.core.str(class_25266)].join(''));
}
{
var G__25267 = seq__25230_25262;
var G__25268 = chunk__25231_25263;
var G__25269 = count__25232_25264;
var G__25270 = (i__25233_25265 + 1);
seq__25230_25262 = G__25267;
chunk__25231_25263 = G__25268;
count__25232_25264 = G__25269;
i__25233_25265 = G__25270;
continue;
}
} else
{var temp__4092__auto___25271 = cljs.core.seq.call(null,seq__25230_25262);if(temp__4092__auto___25271)
{var seq__25230_25272__$1 = temp__4092__auto___25271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25230_25272__$1))
{var c__8927__auto___25273 = cljs.core.chunk_first.call(null,seq__25230_25272__$1);{
var G__25274 = cljs.core.chunk_rest.call(null,seq__25230_25272__$1);
var G__25275 = c__8927__auto___25273;
var G__25276 = cljs.core.count.call(null,c__8927__auto___25273);
var G__25277 = 0;
seq__25230_25262 = G__25274;
chunk__25231_25263 = G__25275;
count__25232_25264 = G__25276;
i__25233_25265 = G__25277;
continue;
}
} else
{var class_25278 = cljs.core.first.call(null,seq__25230_25272__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_25261,class_25278)))
{} else
{elem__$1.className = (((class_name_25261 === ""))?class_25278:[cljs.core.str(class_name_25261),cljs.core.str(" "),cljs.core.str(class_25278)].join(''));
}
{
var G__25279 = cljs.core.next.call(null,seq__25230_25272__$1);
var G__25280 = null;
var G__25281 = 0;
var G__25282 = 0;
seq__25230_25262 = G__25279;
chunk__25231_25263 = G__25280;
count__25232_25264 = G__25281;
i__25233_25265 = G__25282;
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
var G__25283__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25234_25284 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__25235_25285 = null;var count__25236_25286 = 0;var i__25237_25287 = 0;while(true){
if((i__25237_25287 < count__25236_25286))
{var c_25288 = cljs.core._nth.call(null,chunk__25235_25285,i__25237_25287);add_class_BANG_.call(null,elem__$1,c_25288);
{
var G__25289 = seq__25234_25284;
var G__25290 = chunk__25235_25285;
var G__25291 = count__25236_25286;
var G__25292 = (i__25237_25287 + 1);
seq__25234_25284 = G__25289;
chunk__25235_25285 = G__25290;
count__25236_25286 = G__25291;
i__25237_25287 = G__25292;
continue;
}
} else
{var temp__4092__auto___25293 = cljs.core.seq.call(null,seq__25234_25284);if(temp__4092__auto___25293)
{var seq__25234_25294__$1 = temp__4092__auto___25293;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25234_25294__$1))
{var c__8927__auto___25295 = cljs.core.chunk_first.call(null,seq__25234_25294__$1);{
var G__25296 = cljs.core.chunk_rest.call(null,seq__25234_25294__$1);
var G__25297 = c__8927__auto___25295;
var G__25298 = cljs.core.count.call(null,c__8927__auto___25295);
var G__25299 = 0;
seq__25234_25284 = G__25296;
chunk__25235_25285 = G__25297;
count__25236_25286 = G__25298;
i__25237_25287 = G__25299;
continue;
}
} else
{var c_25300 = cljs.core.first.call(null,seq__25234_25294__$1);add_class_BANG_.call(null,elem__$1,c_25300);
{
var G__25301 = cljs.core.next.call(null,seq__25234_25294__$1);
var G__25302 = null;
var G__25303 = 0;
var G__25304 = 0;
seq__25234_25284 = G__25301;
chunk__25235_25285 = G__25302;
count__25236_25286 = G__25303;
i__25237_25287 = G__25304;
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
var G__25283 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25283__delegate.call(this,elem,classes,more_classes);};
G__25283.cljs$lang$maxFixedArity = 2;
G__25283.cljs$lang$applyTo = (function (arglist__25305){
var elem = cljs.core.first(arglist__25305);
arglist__25305 = cljs.core.next(arglist__25305);
var classes = cljs.core.first(arglist__25305);
var more_classes = cljs.core.rest(arglist__25305);
return G__25283__delegate(elem,classes,more_classes);
});
G__25283.cljs$core$IFn$_invoke$arity$variadic = G__25283__delegate;
return G__25283;
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
var G__25306 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__25306;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25315 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25315))
{var class_list_25316 = temp__4090__auto___25315;class_list_25316.remove(class$__$1);
} else
{var class_name_25317 = elem__$1.className;var new_class_name_25318 = dommy.attrs.remove_class_str.call(null,class_name_25317,class$__$1);if((class_name_25317 === new_class_name_25318))
{} else
{elem__$1.className = new_class_name_25318;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__25319__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25311 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__25312 = null;var count__25313 = 0;var i__25314 = 0;while(true){
if((i__25314 < count__25313))
{var c = cljs.core._nth.call(null,chunk__25312,i__25314);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25320 = seq__25311;
var G__25321 = chunk__25312;
var G__25322 = count__25313;
var G__25323 = (i__25314 + 1);
seq__25311 = G__25320;
chunk__25312 = G__25321;
count__25313 = G__25322;
i__25314 = G__25323;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25311);if(temp__4092__auto__)
{var seq__25311__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25311__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__25311__$1);{
var G__25324 = cljs.core.chunk_rest.call(null,seq__25311__$1);
var G__25325 = c__8927__auto__;
var G__25326 = cljs.core.count.call(null,c__8927__auto__);
var G__25327 = 0;
seq__25311 = G__25324;
chunk__25312 = G__25325;
count__25313 = G__25326;
i__25314 = G__25327;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__25311__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25328 = cljs.core.next.call(null,seq__25311__$1);
var G__25329 = null;
var G__25330 = 0;
var G__25331 = 0;
seq__25311 = G__25328;
chunk__25312 = G__25329;
count__25313 = G__25330;
i__25314 = G__25331;
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
var G__25319 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25319__delegate.call(this,elem,class$,classes);};
G__25319.cljs$lang$maxFixedArity = 2;
G__25319.cljs$lang$applyTo = (function (arglist__25332){
var elem = cljs.core.first(arglist__25332);
arglist__25332 = cljs.core.next(arglist__25332);
var class$ = cljs.core.first(arglist__25332);
var classes = cljs.core.rest(arglist__25332);
return G__25319__delegate(elem,class$,classes);
});
G__25319.cljs$core$IFn$_invoke$arity$variadic = G__25319__delegate;
return G__25319;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25333 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25333))
{var class_list_25334 = temp__4090__auto___25333;class_list_25334.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__25337){var vec__25338 = p__25337;var k = cljs.core.nth.call(null,vec__25338,0,null);var v = cljs.core.nth.call(null,vec__25338,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__25345_25351 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25346_25352 = null;var count__25347_25353 = 0;var i__25348_25354 = 0;while(true){
if((i__25348_25354 < count__25347_25353))
{var vec__25349_25355 = cljs.core._nth.call(null,chunk__25346_25352,i__25348_25354);var k_25356 = cljs.core.nth.call(null,vec__25349_25355,0,null);var v_25357 = cljs.core.nth.call(null,vec__25349_25355,1,null);(style[cljs.core.name.call(null,k_25356)] = v_25357);
{
var G__25358 = seq__25345_25351;
var G__25359 = chunk__25346_25352;
var G__25360 = count__25347_25353;
var G__25361 = (i__25348_25354 + 1);
seq__25345_25351 = G__25358;
chunk__25346_25352 = G__25359;
count__25347_25353 = G__25360;
i__25348_25354 = G__25361;
continue;
}
} else
{var temp__4092__auto___25362 = cljs.core.seq.call(null,seq__25345_25351);if(temp__4092__auto___25362)
{var seq__25345_25363__$1 = temp__4092__auto___25362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25345_25363__$1))
{var c__8927__auto___25364 = cljs.core.chunk_first.call(null,seq__25345_25363__$1);{
var G__25365 = cljs.core.chunk_rest.call(null,seq__25345_25363__$1);
var G__25366 = c__8927__auto___25364;
var G__25367 = cljs.core.count.call(null,c__8927__auto___25364);
var G__25368 = 0;
seq__25345_25351 = G__25365;
chunk__25346_25352 = G__25366;
count__25347_25353 = G__25367;
i__25348_25354 = G__25368;
continue;
}
} else
{var vec__25350_25369 = cljs.core.first.call(null,seq__25345_25363__$1);var k_25370 = cljs.core.nth.call(null,vec__25350_25369,0,null);var v_25371 = cljs.core.nth.call(null,vec__25350_25369,1,null);(style[cljs.core.name.call(null,k_25370)] = v_25371);
{
var G__25372 = cljs.core.next.call(null,seq__25345_25363__$1);
var G__25373 = null;
var G__25374 = 0;
var G__25375 = 0;
seq__25345_25351 = G__25372;
chunk__25346_25352 = G__25373;
count__25347_25353 = G__25374;
i__25348_25354 = G__25375;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25376){
var elem = cljs.core.first(arglist__25376);
var kvs = cljs.core.rest(arglist__25376);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25383_25389 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25384_25390 = null;var count__25385_25391 = 0;var i__25386_25392 = 0;while(true){
if((i__25386_25392 < count__25385_25391))
{var vec__25387_25393 = cljs.core._nth.call(null,chunk__25384_25390,i__25386_25392);var k_25394 = cljs.core.nth.call(null,vec__25387_25393,0,null);var v_25395 = cljs.core.nth.call(null,vec__25387_25393,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25394,[cljs.core.str(v_25395),cljs.core.str("px")].join(''));
{
var G__25396 = seq__25383_25389;
var G__25397 = chunk__25384_25390;
var G__25398 = count__25385_25391;
var G__25399 = (i__25386_25392 + 1);
seq__25383_25389 = G__25396;
chunk__25384_25390 = G__25397;
count__25385_25391 = G__25398;
i__25386_25392 = G__25399;
continue;
}
} else
{var temp__4092__auto___25400 = cljs.core.seq.call(null,seq__25383_25389);if(temp__4092__auto___25400)
{var seq__25383_25401__$1 = temp__4092__auto___25400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25383_25401__$1))
{var c__8927__auto___25402 = cljs.core.chunk_first.call(null,seq__25383_25401__$1);{
var G__25403 = cljs.core.chunk_rest.call(null,seq__25383_25401__$1);
var G__25404 = c__8927__auto___25402;
var G__25405 = cljs.core.count.call(null,c__8927__auto___25402);
var G__25406 = 0;
seq__25383_25389 = G__25403;
chunk__25384_25390 = G__25404;
count__25385_25391 = G__25405;
i__25386_25392 = G__25406;
continue;
}
} else
{var vec__25388_25407 = cljs.core.first.call(null,seq__25383_25401__$1);var k_25408 = cljs.core.nth.call(null,vec__25388_25407,0,null);var v_25409 = cljs.core.nth.call(null,vec__25388_25407,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25408,[cljs.core.str(v_25409),cljs.core.str("px")].join(''));
{
var G__25410 = cljs.core.next.call(null,seq__25383_25401__$1);
var G__25411 = null;
var G__25412 = 0;
var G__25413 = 0;
seq__25383_25389 = G__25410;
chunk__25384_25390 = G__25411;
count__25385_25391 = G__25412;
i__25386_25392 = G__25413;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__25414){
var elem = cljs.core.first(arglist__25414);
var kvs = cljs.core.rest(arglist__25414);
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
{var G__25423 = dommy.template.__GT_node_like.call(null,elem);(G__25423[cljs.core.name.call(null,k)] = v);
return G__25423;
} else
{var G__25424 = dommy.template.__GT_node_like.call(null,elem);G__25424.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__25424;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__25431__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25425_25432 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__25426_25433 = null;var count__25427_25434 = 0;var i__25428_25435 = 0;while(true){
if((i__25428_25435 < count__25427_25434))
{var vec__25429_25436 = cljs.core._nth.call(null,chunk__25426_25433,i__25428_25435);var k_25437__$1 = cljs.core.nth.call(null,vec__25429_25436,0,null);var v_25438__$1 = cljs.core.nth.call(null,vec__25429_25436,1,null);set_attr_BANG_.call(null,elem__$1,k_25437__$1,v_25438__$1);
{
var G__25439 = seq__25425_25432;
var G__25440 = chunk__25426_25433;
var G__25441 = count__25427_25434;
var G__25442 = (i__25428_25435 + 1);
seq__25425_25432 = G__25439;
chunk__25426_25433 = G__25440;
count__25427_25434 = G__25441;
i__25428_25435 = G__25442;
continue;
}
} else
{var temp__4092__auto___25443 = cljs.core.seq.call(null,seq__25425_25432);if(temp__4092__auto___25443)
{var seq__25425_25444__$1 = temp__4092__auto___25443;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25425_25444__$1))
{var c__8927__auto___25445 = cljs.core.chunk_first.call(null,seq__25425_25444__$1);{
var G__25446 = cljs.core.chunk_rest.call(null,seq__25425_25444__$1);
var G__25447 = c__8927__auto___25445;
var G__25448 = cljs.core.count.call(null,c__8927__auto___25445);
var G__25449 = 0;
seq__25425_25432 = G__25446;
chunk__25426_25433 = G__25447;
count__25427_25434 = G__25448;
i__25428_25435 = G__25449;
continue;
}
} else
{var vec__25430_25450 = cljs.core.first.call(null,seq__25425_25444__$1);var k_25451__$1 = cljs.core.nth.call(null,vec__25430_25450,0,null);var v_25452__$1 = cljs.core.nth.call(null,vec__25430_25450,1,null);set_attr_BANG_.call(null,elem__$1,k_25451__$1,v_25452__$1);
{
var G__25453 = cljs.core.next.call(null,seq__25425_25444__$1);
var G__25454 = null;
var G__25455 = 0;
var G__25456 = 0;
seq__25425_25432 = G__25453;
chunk__25426_25433 = G__25454;
count__25427_25434 = G__25455;
i__25428_25435 = G__25456;
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
var G__25431 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25431__delegate.call(this,elem,k,v,kvs);};
G__25431.cljs$lang$maxFixedArity = 3;
G__25431.cljs$lang$applyTo = (function (arglist__25457){
var elem = cljs.core.first(arglist__25457);
arglist__25457 = cljs.core.next(arglist__25457);
var k = cljs.core.first(arglist__25457);
arglist__25457 = cljs.core.next(arglist__25457);
var v = cljs.core.first(arglist__25457);
var kvs = cljs.core.rest(arglist__25457);
return G__25431__delegate(elem,k,v,kvs);
});
G__25431.cljs$core$IFn$_invoke$arity$variadic = G__25431__delegate;
return G__25431;
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
var G__25466__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25462_25467 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__25463_25468 = null;var count__25464_25469 = 0;var i__25465_25470 = 0;while(true){
if((i__25465_25470 < count__25464_25469))
{var k_25471__$1 = cljs.core._nth.call(null,chunk__25463_25468,i__25465_25470);remove_attr_BANG_.call(null,elem__$1,k_25471__$1);
{
var G__25472 = seq__25462_25467;
var G__25473 = chunk__25463_25468;
var G__25474 = count__25464_25469;
var G__25475 = (i__25465_25470 + 1);
seq__25462_25467 = G__25472;
chunk__25463_25468 = G__25473;
count__25464_25469 = G__25474;
i__25465_25470 = G__25475;
continue;
}
} else
{var temp__4092__auto___25476 = cljs.core.seq.call(null,seq__25462_25467);if(temp__4092__auto___25476)
{var seq__25462_25477__$1 = temp__4092__auto___25476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25462_25477__$1))
{var c__8927__auto___25478 = cljs.core.chunk_first.call(null,seq__25462_25477__$1);{
var G__25479 = cljs.core.chunk_rest.call(null,seq__25462_25477__$1);
var G__25480 = c__8927__auto___25478;
var G__25481 = cljs.core.count.call(null,c__8927__auto___25478);
var G__25482 = 0;
seq__25462_25467 = G__25479;
chunk__25463_25468 = G__25480;
count__25464_25469 = G__25481;
i__25465_25470 = G__25482;
continue;
}
} else
{var k_25483__$1 = cljs.core.first.call(null,seq__25462_25477__$1);remove_attr_BANG_.call(null,elem__$1,k_25483__$1);
{
var G__25484 = cljs.core.next.call(null,seq__25462_25477__$1);
var G__25485 = null;
var G__25486 = 0;
var G__25487 = 0;
seq__25462_25467 = G__25484;
chunk__25463_25468 = G__25485;
count__25464_25469 = G__25486;
i__25465_25470 = G__25487;
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
var G__25466 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25466__delegate.call(this,elem,k,ks);};
G__25466.cljs$lang$maxFixedArity = 2;
G__25466.cljs$lang$applyTo = (function (arglist__25488){
var elem = cljs.core.first(arglist__25488);
arglist__25488 = cljs.core.next(arglist__25488);
var k = cljs.core.first(arglist__25488);
var ks = cljs.core.rest(arglist__25488);
return G__25466__delegate(elem,k,ks);
});
G__25466.cljs$core$IFn$_invoke$arity$variadic = G__25466__delegate;
return G__25466;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__25490 = dommy.template.__GT_node_like.call(null,elem);G__25490.style.display = ((show_QMARK_)?"":"none");
return G__25490;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__25492 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25492,false);
return G__25492;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__25494 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25494,true);
return G__25494;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__25496 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__25496["constructor"] = Object);
return G__25496;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map