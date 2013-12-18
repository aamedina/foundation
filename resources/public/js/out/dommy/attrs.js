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
var G__85231 = (i + class$.length);
start_from = G__85231;
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
{var temp__4090__auto___85256 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___85256))
{var class_list_85257 = temp__4090__auto___85256;var seq__85244_85258 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__85245_85259 = null;var count__85246_85260 = 0;var i__85247_85261 = 0;while(true){
if((i__85247_85261 < count__85246_85260))
{var class_85262 = cljs.core._nth.call(null,chunk__85245_85259,i__85247_85261);class_list_85257.add(class_85262);
{
var G__85263 = seq__85244_85258;
var G__85264 = chunk__85245_85259;
var G__85265 = count__85246_85260;
var G__85266 = (i__85247_85261 + 1);
seq__85244_85258 = G__85263;
chunk__85245_85259 = G__85264;
count__85246_85260 = G__85265;
i__85247_85261 = G__85266;
continue;
}
} else
{var temp__4092__auto___85267 = cljs.core.seq.call(null,seq__85244_85258);if(temp__4092__auto___85267)
{var seq__85244_85268__$1 = temp__4092__auto___85267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85244_85268__$1))
{var c__8957__auto___85269 = cljs.core.chunk_first.call(null,seq__85244_85268__$1);{
var G__85270 = cljs.core.chunk_rest.call(null,seq__85244_85268__$1);
var G__85271 = c__8957__auto___85269;
var G__85272 = cljs.core.count.call(null,c__8957__auto___85269);
var G__85273 = 0;
seq__85244_85258 = G__85270;
chunk__85245_85259 = G__85271;
count__85246_85260 = G__85272;
i__85247_85261 = G__85273;
continue;
}
} else
{var class_85274 = cljs.core.first.call(null,seq__85244_85268__$1);class_list_85257.add(class_85274);
{
var G__85275 = cljs.core.next.call(null,seq__85244_85268__$1);
var G__85276 = null;
var G__85277 = 0;
var G__85278 = 0;
seq__85244_85258 = G__85275;
chunk__85245_85259 = G__85276;
count__85246_85260 = G__85277;
i__85247_85261 = G__85278;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_85279 = elem__$1.className;var seq__85248_85280 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__85249_85281 = null;var count__85250_85282 = 0;var i__85251_85283 = 0;while(true){
if((i__85251_85283 < count__85250_85282))
{var class_85284 = cljs.core._nth.call(null,chunk__85249_85281,i__85251_85283);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_85279,class_85284)))
{} else
{elem__$1.className = (((class_name_85279 === ""))?class_85284:[cljs.core.str(class_name_85279),cljs.core.str(" "),cljs.core.str(class_85284)].join(''));
}
{
var G__85285 = seq__85248_85280;
var G__85286 = chunk__85249_85281;
var G__85287 = count__85250_85282;
var G__85288 = (i__85251_85283 + 1);
seq__85248_85280 = G__85285;
chunk__85249_85281 = G__85286;
count__85250_85282 = G__85287;
i__85251_85283 = G__85288;
continue;
}
} else
{var temp__4092__auto___85289 = cljs.core.seq.call(null,seq__85248_85280);if(temp__4092__auto___85289)
{var seq__85248_85290__$1 = temp__4092__auto___85289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85248_85290__$1))
{var c__8957__auto___85291 = cljs.core.chunk_first.call(null,seq__85248_85290__$1);{
var G__85292 = cljs.core.chunk_rest.call(null,seq__85248_85290__$1);
var G__85293 = c__8957__auto___85291;
var G__85294 = cljs.core.count.call(null,c__8957__auto___85291);
var G__85295 = 0;
seq__85248_85280 = G__85292;
chunk__85249_85281 = G__85293;
count__85250_85282 = G__85294;
i__85251_85283 = G__85295;
continue;
}
} else
{var class_85296 = cljs.core.first.call(null,seq__85248_85290__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_85279,class_85296)))
{} else
{elem__$1.className = (((class_name_85279 === ""))?class_85296:[cljs.core.str(class_name_85279),cljs.core.str(" "),cljs.core.str(class_85296)].join(''));
}
{
var G__85297 = cljs.core.next.call(null,seq__85248_85290__$1);
var G__85298 = null;
var G__85299 = 0;
var G__85300 = 0;
seq__85248_85280 = G__85297;
chunk__85249_85281 = G__85298;
count__85250_85282 = G__85299;
i__85251_85283 = G__85300;
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
var G__85301__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__85252_85302 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__85253_85303 = null;var count__85254_85304 = 0;var i__85255_85305 = 0;while(true){
if((i__85255_85305 < count__85254_85304))
{var c_85306 = cljs.core._nth.call(null,chunk__85253_85303,i__85255_85305);add_class_BANG_.call(null,elem__$1,c_85306);
{
var G__85307 = seq__85252_85302;
var G__85308 = chunk__85253_85303;
var G__85309 = count__85254_85304;
var G__85310 = (i__85255_85305 + 1);
seq__85252_85302 = G__85307;
chunk__85253_85303 = G__85308;
count__85254_85304 = G__85309;
i__85255_85305 = G__85310;
continue;
}
} else
{var temp__4092__auto___85311 = cljs.core.seq.call(null,seq__85252_85302);if(temp__4092__auto___85311)
{var seq__85252_85312__$1 = temp__4092__auto___85311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85252_85312__$1))
{var c__8957__auto___85313 = cljs.core.chunk_first.call(null,seq__85252_85312__$1);{
var G__85314 = cljs.core.chunk_rest.call(null,seq__85252_85312__$1);
var G__85315 = c__8957__auto___85313;
var G__85316 = cljs.core.count.call(null,c__8957__auto___85313);
var G__85317 = 0;
seq__85252_85302 = G__85314;
chunk__85253_85303 = G__85315;
count__85254_85304 = G__85316;
i__85255_85305 = G__85317;
continue;
}
} else
{var c_85318 = cljs.core.first.call(null,seq__85252_85312__$1);add_class_BANG_.call(null,elem__$1,c_85318);
{
var G__85319 = cljs.core.next.call(null,seq__85252_85312__$1);
var G__85320 = null;
var G__85321 = 0;
var G__85322 = 0;
seq__85252_85302 = G__85319;
chunk__85253_85303 = G__85320;
count__85254_85304 = G__85321;
i__85255_85305 = G__85322;
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
var G__85301 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__85301__delegate.call(this,elem,classes,more_classes);};
G__85301.cljs$lang$maxFixedArity = 2;
G__85301.cljs$lang$applyTo = (function (arglist__85323){
var elem = cljs.core.first(arglist__85323);
arglist__85323 = cljs.core.next(arglist__85323);
var classes = cljs.core.first(arglist__85323);
var more_classes = cljs.core.rest(arglist__85323);
return G__85301__delegate(elem,classes,more_classes);
});
G__85301.cljs$core$IFn$_invoke$arity$variadic = G__85301__delegate;
return G__85301;
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
var G__85324 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__85324;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___85333 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___85333))
{var class_list_85334 = temp__4090__auto___85333;class_list_85334.remove(class$__$1);
} else
{var class_name_85335 = elem__$1.className;var new_class_name_85336 = dommy.attrs.remove_class_str.call(null,class_name_85335,class$__$1);if((class_name_85335 === new_class_name_85336))
{} else
{elem__$1.className = new_class_name_85336;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__85337__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__85329 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__85330 = null;var count__85331 = 0;var i__85332 = 0;while(true){
if((i__85332 < count__85331))
{var c = cljs.core._nth.call(null,chunk__85330,i__85332);remove_class_BANG_.call(null,elem__$1,c);
{
var G__85338 = seq__85329;
var G__85339 = chunk__85330;
var G__85340 = count__85331;
var G__85341 = (i__85332 + 1);
seq__85329 = G__85338;
chunk__85330 = G__85339;
count__85331 = G__85340;
i__85332 = G__85341;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__85329);if(temp__4092__auto__)
{var seq__85329__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85329__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__85329__$1);{
var G__85342 = cljs.core.chunk_rest.call(null,seq__85329__$1);
var G__85343 = c__8957__auto__;
var G__85344 = cljs.core.count.call(null,c__8957__auto__);
var G__85345 = 0;
seq__85329 = G__85342;
chunk__85330 = G__85343;
count__85331 = G__85344;
i__85332 = G__85345;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__85329__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__85346 = cljs.core.next.call(null,seq__85329__$1);
var G__85347 = null;
var G__85348 = 0;
var G__85349 = 0;
seq__85329 = G__85346;
chunk__85330 = G__85347;
count__85331 = G__85348;
i__85332 = G__85349;
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
var G__85337 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__85337__delegate.call(this,elem,class$,classes);};
G__85337.cljs$lang$maxFixedArity = 2;
G__85337.cljs$lang$applyTo = (function (arglist__85350){
var elem = cljs.core.first(arglist__85350);
arglist__85350 = cljs.core.next(arglist__85350);
var class$ = cljs.core.first(arglist__85350);
var classes = cljs.core.rest(arglist__85350);
return G__85337__delegate(elem,class$,classes);
});
G__85337.cljs$core$IFn$_invoke$arity$variadic = G__85337__delegate;
return G__85337;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___85351 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___85351))
{var class_list_85352 = temp__4090__auto___85351;class_list_85352.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__85355){var vec__85356 = p__85355;var k = cljs.core.nth.call(null,vec__85356,0,null);var v = cljs.core.nth.call(null,vec__85356,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__85363_85369 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__85364_85370 = null;var count__85365_85371 = 0;var i__85366_85372 = 0;while(true){
if((i__85366_85372 < count__85365_85371))
{var vec__85367_85373 = cljs.core._nth.call(null,chunk__85364_85370,i__85366_85372);var k_85374 = cljs.core.nth.call(null,vec__85367_85373,0,null);var v_85375 = cljs.core.nth.call(null,vec__85367_85373,1,null);(style[cljs.core.name.call(null,k_85374)] = v_85375);
{
var G__85376 = seq__85363_85369;
var G__85377 = chunk__85364_85370;
var G__85378 = count__85365_85371;
var G__85379 = (i__85366_85372 + 1);
seq__85363_85369 = G__85376;
chunk__85364_85370 = G__85377;
count__85365_85371 = G__85378;
i__85366_85372 = G__85379;
continue;
}
} else
{var temp__4092__auto___85380 = cljs.core.seq.call(null,seq__85363_85369);if(temp__4092__auto___85380)
{var seq__85363_85381__$1 = temp__4092__auto___85380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85363_85381__$1))
{var c__8957__auto___85382 = cljs.core.chunk_first.call(null,seq__85363_85381__$1);{
var G__85383 = cljs.core.chunk_rest.call(null,seq__85363_85381__$1);
var G__85384 = c__8957__auto___85382;
var G__85385 = cljs.core.count.call(null,c__8957__auto___85382);
var G__85386 = 0;
seq__85363_85369 = G__85383;
chunk__85364_85370 = G__85384;
count__85365_85371 = G__85385;
i__85366_85372 = G__85386;
continue;
}
} else
{var vec__85368_85387 = cljs.core.first.call(null,seq__85363_85381__$1);var k_85388 = cljs.core.nth.call(null,vec__85368_85387,0,null);var v_85389 = cljs.core.nth.call(null,vec__85368_85387,1,null);(style[cljs.core.name.call(null,k_85388)] = v_85389);
{
var G__85390 = cljs.core.next.call(null,seq__85363_85381__$1);
var G__85391 = null;
var G__85392 = 0;
var G__85393 = 0;
seq__85363_85369 = G__85390;
chunk__85364_85370 = G__85391;
count__85365_85371 = G__85392;
i__85366_85372 = G__85393;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__85394){
var elem = cljs.core.first(arglist__85394);
var kvs = cljs.core.rest(arglist__85394);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__85401_85407 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__85402_85408 = null;var count__85403_85409 = 0;var i__85404_85410 = 0;while(true){
if((i__85404_85410 < count__85403_85409))
{var vec__85405_85411 = cljs.core._nth.call(null,chunk__85402_85408,i__85404_85410);var k_85412 = cljs.core.nth.call(null,vec__85405_85411,0,null);var v_85413 = cljs.core.nth.call(null,vec__85405_85411,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_85412,[cljs.core.str(v_85413),cljs.core.str("px")].join(''));
{
var G__85414 = seq__85401_85407;
var G__85415 = chunk__85402_85408;
var G__85416 = count__85403_85409;
var G__85417 = (i__85404_85410 + 1);
seq__85401_85407 = G__85414;
chunk__85402_85408 = G__85415;
count__85403_85409 = G__85416;
i__85404_85410 = G__85417;
continue;
}
} else
{var temp__4092__auto___85418 = cljs.core.seq.call(null,seq__85401_85407);if(temp__4092__auto___85418)
{var seq__85401_85419__$1 = temp__4092__auto___85418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85401_85419__$1))
{var c__8957__auto___85420 = cljs.core.chunk_first.call(null,seq__85401_85419__$1);{
var G__85421 = cljs.core.chunk_rest.call(null,seq__85401_85419__$1);
var G__85422 = c__8957__auto___85420;
var G__85423 = cljs.core.count.call(null,c__8957__auto___85420);
var G__85424 = 0;
seq__85401_85407 = G__85421;
chunk__85402_85408 = G__85422;
count__85403_85409 = G__85423;
i__85404_85410 = G__85424;
continue;
}
} else
{var vec__85406_85425 = cljs.core.first.call(null,seq__85401_85419__$1);var k_85426 = cljs.core.nth.call(null,vec__85406_85425,0,null);var v_85427 = cljs.core.nth.call(null,vec__85406_85425,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_85426,[cljs.core.str(v_85427),cljs.core.str("px")].join(''));
{
var G__85428 = cljs.core.next.call(null,seq__85401_85419__$1);
var G__85429 = null;
var G__85430 = 0;
var G__85431 = 0;
seq__85401_85407 = G__85428;
chunk__85402_85408 = G__85429;
count__85403_85409 = G__85430;
i__85404_85410 = G__85431;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__85432){
var elem = cljs.core.first(arglist__85432);
var kvs = cljs.core.rest(arglist__85432);
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
{var G__85441 = dommy.template.__GT_node_like.call(null,elem);(G__85441[cljs.core.name.call(null,k)] = v);
return G__85441;
} else
{var G__85442 = dommy.template.__GT_node_like.call(null,elem);G__85442.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__85442;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__85449__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__85443_85450 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__85444_85451 = null;var count__85445_85452 = 0;var i__85446_85453 = 0;while(true){
if((i__85446_85453 < count__85445_85452))
{var vec__85447_85454 = cljs.core._nth.call(null,chunk__85444_85451,i__85446_85453);var k_85455__$1 = cljs.core.nth.call(null,vec__85447_85454,0,null);var v_85456__$1 = cljs.core.nth.call(null,vec__85447_85454,1,null);set_attr_BANG_.call(null,elem__$1,k_85455__$1,v_85456__$1);
{
var G__85457 = seq__85443_85450;
var G__85458 = chunk__85444_85451;
var G__85459 = count__85445_85452;
var G__85460 = (i__85446_85453 + 1);
seq__85443_85450 = G__85457;
chunk__85444_85451 = G__85458;
count__85445_85452 = G__85459;
i__85446_85453 = G__85460;
continue;
}
} else
{var temp__4092__auto___85461 = cljs.core.seq.call(null,seq__85443_85450);if(temp__4092__auto___85461)
{var seq__85443_85462__$1 = temp__4092__auto___85461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85443_85462__$1))
{var c__8957__auto___85463 = cljs.core.chunk_first.call(null,seq__85443_85462__$1);{
var G__85464 = cljs.core.chunk_rest.call(null,seq__85443_85462__$1);
var G__85465 = c__8957__auto___85463;
var G__85466 = cljs.core.count.call(null,c__8957__auto___85463);
var G__85467 = 0;
seq__85443_85450 = G__85464;
chunk__85444_85451 = G__85465;
count__85445_85452 = G__85466;
i__85446_85453 = G__85467;
continue;
}
} else
{var vec__85448_85468 = cljs.core.first.call(null,seq__85443_85462__$1);var k_85469__$1 = cljs.core.nth.call(null,vec__85448_85468,0,null);var v_85470__$1 = cljs.core.nth.call(null,vec__85448_85468,1,null);set_attr_BANG_.call(null,elem__$1,k_85469__$1,v_85470__$1);
{
var G__85471 = cljs.core.next.call(null,seq__85443_85462__$1);
var G__85472 = null;
var G__85473 = 0;
var G__85474 = 0;
seq__85443_85450 = G__85471;
chunk__85444_85451 = G__85472;
count__85445_85452 = G__85473;
i__85446_85453 = G__85474;
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
var G__85449 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__85449__delegate.call(this,elem,k,v,kvs);};
G__85449.cljs$lang$maxFixedArity = 3;
G__85449.cljs$lang$applyTo = (function (arglist__85475){
var elem = cljs.core.first(arglist__85475);
arglist__85475 = cljs.core.next(arglist__85475);
var k = cljs.core.first(arglist__85475);
arglist__85475 = cljs.core.next(arglist__85475);
var v = cljs.core.first(arglist__85475);
var kvs = cljs.core.rest(arglist__85475);
return G__85449__delegate(elem,k,v,kvs);
});
G__85449.cljs$core$IFn$_invoke$arity$variadic = G__85449__delegate;
return G__85449;
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
var G__85484__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__85480_85485 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__85481_85486 = null;var count__85482_85487 = 0;var i__85483_85488 = 0;while(true){
if((i__85483_85488 < count__85482_85487))
{var k_85489__$1 = cljs.core._nth.call(null,chunk__85481_85486,i__85483_85488);remove_attr_BANG_.call(null,elem__$1,k_85489__$1);
{
var G__85490 = seq__85480_85485;
var G__85491 = chunk__85481_85486;
var G__85492 = count__85482_85487;
var G__85493 = (i__85483_85488 + 1);
seq__85480_85485 = G__85490;
chunk__85481_85486 = G__85491;
count__85482_85487 = G__85492;
i__85483_85488 = G__85493;
continue;
}
} else
{var temp__4092__auto___85494 = cljs.core.seq.call(null,seq__85480_85485);if(temp__4092__auto___85494)
{var seq__85480_85495__$1 = temp__4092__auto___85494;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85480_85495__$1))
{var c__8957__auto___85496 = cljs.core.chunk_first.call(null,seq__85480_85495__$1);{
var G__85497 = cljs.core.chunk_rest.call(null,seq__85480_85495__$1);
var G__85498 = c__8957__auto___85496;
var G__85499 = cljs.core.count.call(null,c__8957__auto___85496);
var G__85500 = 0;
seq__85480_85485 = G__85497;
chunk__85481_85486 = G__85498;
count__85482_85487 = G__85499;
i__85483_85488 = G__85500;
continue;
}
} else
{var k_85501__$1 = cljs.core.first.call(null,seq__85480_85495__$1);remove_attr_BANG_.call(null,elem__$1,k_85501__$1);
{
var G__85502 = cljs.core.next.call(null,seq__85480_85495__$1);
var G__85503 = null;
var G__85504 = 0;
var G__85505 = 0;
seq__85480_85485 = G__85502;
chunk__85481_85486 = G__85503;
count__85482_85487 = G__85504;
i__85483_85488 = G__85505;
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
var G__85484 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__85484__delegate.call(this,elem,k,ks);};
G__85484.cljs$lang$maxFixedArity = 2;
G__85484.cljs$lang$applyTo = (function (arglist__85506){
var elem = cljs.core.first(arglist__85506);
arglist__85506 = cljs.core.next(arglist__85506);
var k = cljs.core.first(arglist__85506);
var ks = cljs.core.rest(arglist__85506);
return G__85484__delegate(elem,k,ks);
});
G__85484.cljs$core$IFn$_invoke$arity$variadic = G__85484__delegate;
return G__85484;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__85508 = dommy.template.__GT_node_like.call(null,elem);G__85508.style.display = ((show_QMARK_)?"":"none");
return G__85508;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__85510 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__85510,false);
return G__85510;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__85512 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__85512,true);
return G__85512;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__85514 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__85514["constructor"] = Object);
return G__85514;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map