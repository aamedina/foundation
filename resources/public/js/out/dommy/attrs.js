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
var G__31209 = (i + class$.length);
start_from = G__31209;
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
{var temp__4090__auto___31234 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31234))
{var class_list_31235 = temp__4090__auto___31234;var seq__31222_31236 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__31223_31237 = null;var count__31224_31238 = 0;var i__31225_31239 = 0;while(true){
if((i__31225_31239 < count__31224_31238))
{var class_31240 = cljs.core._nth.call(null,chunk__31223_31237,i__31225_31239);class_list_31235.add(class_31240);
{
var G__31241 = seq__31222_31236;
var G__31242 = chunk__31223_31237;
var G__31243 = count__31224_31238;
var G__31244 = (i__31225_31239 + 1);
seq__31222_31236 = G__31241;
chunk__31223_31237 = G__31242;
count__31224_31238 = G__31243;
i__31225_31239 = G__31244;
continue;
}
} else
{var temp__4092__auto___31245 = cljs.core.seq.call(null,seq__31222_31236);if(temp__4092__auto___31245)
{var seq__31222_31246__$1 = temp__4092__auto___31245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31222_31246__$1))
{var c__8927__auto___31247 = cljs.core.chunk_first.call(null,seq__31222_31246__$1);{
var G__31248 = cljs.core.chunk_rest.call(null,seq__31222_31246__$1);
var G__31249 = c__8927__auto___31247;
var G__31250 = cljs.core.count.call(null,c__8927__auto___31247);
var G__31251 = 0;
seq__31222_31236 = G__31248;
chunk__31223_31237 = G__31249;
count__31224_31238 = G__31250;
i__31225_31239 = G__31251;
continue;
}
} else
{var class_31252 = cljs.core.first.call(null,seq__31222_31246__$1);class_list_31235.add(class_31252);
{
var G__31253 = cljs.core.next.call(null,seq__31222_31246__$1);
var G__31254 = null;
var G__31255 = 0;
var G__31256 = 0;
seq__31222_31236 = G__31253;
chunk__31223_31237 = G__31254;
count__31224_31238 = G__31255;
i__31225_31239 = G__31256;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_31257 = elem__$1.className;var seq__31226_31258 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__31227_31259 = null;var count__31228_31260 = 0;var i__31229_31261 = 0;while(true){
if((i__31229_31261 < count__31228_31260))
{var class_31262 = cljs.core._nth.call(null,chunk__31227_31259,i__31229_31261);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_31257,class_31262)))
{} else
{elem__$1.className = (((class_name_31257 === ""))?class_31262:[cljs.core.str(class_name_31257),cljs.core.str(" "),cljs.core.str(class_31262)].join(''));
}
{
var G__31263 = seq__31226_31258;
var G__31264 = chunk__31227_31259;
var G__31265 = count__31228_31260;
var G__31266 = (i__31229_31261 + 1);
seq__31226_31258 = G__31263;
chunk__31227_31259 = G__31264;
count__31228_31260 = G__31265;
i__31229_31261 = G__31266;
continue;
}
} else
{var temp__4092__auto___31267 = cljs.core.seq.call(null,seq__31226_31258);if(temp__4092__auto___31267)
{var seq__31226_31268__$1 = temp__4092__auto___31267;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31226_31268__$1))
{var c__8927__auto___31269 = cljs.core.chunk_first.call(null,seq__31226_31268__$1);{
var G__31270 = cljs.core.chunk_rest.call(null,seq__31226_31268__$1);
var G__31271 = c__8927__auto___31269;
var G__31272 = cljs.core.count.call(null,c__8927__auto___31269);
var G__31273 = 0;
seq__31226_31258 = G__31270;
chunk__31227_31259 = G__31271;
count__31228_31260 = G__31272;
i__31229_31261 = G__31273;
continue;
}
} else
{var class_31274 = cljs.core.first.call(null,seq__31226_31268__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_31257,class_31274)))
{} else
{elem__$1.className = (((class_name_31257 === ""))?class_31274:[cljs.core.str(class_name_31257),cljs.core.str(" "),cljs.core.str(class_31274)].join(''));
}
{
var G__31275 = cljs.core.next.call(null,seq__31226_31268__$1);
var G__31276 = null;
var G__31277 = 0;
var G__31278 = 0;
seq__31226_31258 = G__31275;
chunk__31227_31259 = G__31276;
count__31228_31260 = G__31277;
i__31229_31261 = G__31278;
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
var G__31279__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31230_31280 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__31231_31281 = null;var count__31232_31282 = 0;var i__31233_31283 = 0;while(true){
if((i__31233_31283 < count__31232_31282))
{var c_31284 = cljs.core._nth.call(null,chunk__31231_31281,i__31233_31283);add_class_BANG_.call(null,elem__$1,c_31284);
{
var G__31285 = seq__31230_31280;
var G__31286 = chunk__31231_31281;
var G__31287 = count__31232_31282;
var G__31288 = (i__31233_31283 + 1);
seq__31230_31280 = G__31285;
chunk__31231_31281 = G__31286;
count__31232_31282 = G__31287;
i__31233_31283 = G__31288;
continue;
}
} else
{var temp__4092__auto___31289 = cljs.core.seq.call(null,seq__31230_31280);if(temp__4092__auto___31289)
{var seq__31230_31290__$1 = temp__4092__auto___31289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31230_31290__$1))
{var c__8927__auto___31291 = cljs.core.chunk_first.call(null,seq__31230_31290__$1);{
var G__31292 = cljs.core.chunk_rest.call(null,seq__31230_31290__$1);
var G__31293 = c__8927__auto___31291;
var G__31294 = cljs.core.count.call(null,c__8927__auto___31291);
var G__31295 = 0;
seq__31230_31280 = G__31292;
chunk__31231_31281 = G__31293;
count__31232_31282 = G__31294;
i__31233_31283 = G__31295;
continue;
}
} else
{var c_31296 = cljs.core.first.call(null,seq__31230_31290__$1);add_class_BANG_.call(null,elem__$1,c_31296);
{
var G__31297 = cljs.core.next.call(null,seq__31230_31290__$1);
var G__31298 = null;
var G__31299 = 0;
var G__31300 = 0;
seq__31230_31280 = G__31297;
chunk__31231_31281 = G__31298;
count__31232_31282 = G__31299;
i__31233_31283 = G__31300;
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
var G__31279 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31279__delegate.call(this,elem,classes,more_classes);};
G__31279.cljs$lang$maxFixedArity = 2;
G__31279.cljs$lang$applyTo = (function (arglist__31301){
var elem = cljs.core.first(arglist__31301);
arglist__31301 = cljs.core.next(arglist__31301);
var classes = cljs.core.first(arglist__31301);
var more_classes = cljs.core.rest(arglist__31301);
return G__31279__delegate(elem,classes,more_classes);
});
G__31279.cljs$core$IFn$_invoke$arity$variadic = G__31279__delegate;
return G__31279;
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
var G__31302 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__31302;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___31311 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31311))
{var class_list_31312 = temp__4090__auto___31311;class_list_31312.remove(class$__$1);
} else
{var class_name_31313 = elem__$1.className;var new_class_name_31314 = dommy.attrs.remove_class_str.call(null,class_name_31313,class$__$1);if((class_name_31313 === new_class_name_31314))
{} else
{elem__$1.className = new_class_name_31314;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__31315__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31307 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__31308 = null;var count__31309 = 0;var i__31310 = 0;while(true){
if((i__31310 < count__31309))
{var c = cljs.core._nth.call(null,chunk__31308,i__31310);remove_class_BANG_.call(null,elem__$1,c);
{
var G__31316 = seq__31307;
var G__31317 = chunk__31308;
var G__31318 = count__31309;
var G__31319 = (i__31310 + 1);
seq__31307 = G__31316;
chunk__31308 = G__31317;
count__31309 = G__31318;
i__31310 = G__31319;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31307);if(temp__4092__auto__)
{var seq__31307__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31307__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__31307__$1);{
var G__31320 = cljs.core.chunk_rest.call(null,seq__31307__$1);
var G__31321 = c__8927__auto__;
var G__31322 = cljs.core.count.call(null,c__8927__auto__);
var G__31323 = 0;
seq__31307 = G__31320;
chunk__31308 = G__31321;
count__31309 = G__31322;
i__31310 = G__31323;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__31307__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__31324 = cljs.core.next.call(null,seq__31307__$1);
var G__31325 = null;
var G__31326 = 0;
var G__31327 = 0;
seq__31307 = G__31324;
chunk__31308 = G__31325;
count__31309 = G__31326;
i__31310 = G__31327;
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
var G__31315 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31315__delegate.call(this,elem,class$,classes);};
G__31315.cljs$lang$maxFixedArity = 2;
G__31315.cljs$lang$applyTo = (function (arglist__31328){
var elem = cljs.core.first(arglist__31328);
arglist__31328 = cljs.core.next(arglist__31328);
var class$ = cljs.core.first(arglist__31328);
var classes = cljs.core.rest(arglist__31328);
return G__31315__delegate(elem,class$,classes);
});
G__31315.cljs$core$IFn$_invoke$arity$variadic = G__31315__delegate;
return G__31315;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___31329 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___31329))
{var class_list_31330 = temp__4090__auto___31329;class_list_31330.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__31333){var vec__31334 = p__31333;var k = cljs.core.nth.call(null,vec__31334,0,null);var v = cljs.core.nth.call(null,vec__31334,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__31341_31347 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__31342_31348 = null;var count__31343_31349 = 0;var i__31344_31350 = 0;while(true){
if((i__31344_31350 < count__31343_31349))
{var vec__31345_31351 = cljs.core._nth.call(null,chunk__31342_31348,i__31344_31350);var k_31352 = cljs.core.nth.call(null,vec__31345_31351,0,null);var v_31353 = cljs.core.nth.call(null,vec__31345_31351,1,null);(style[cljs.core.name.call(null,k_31352)] = v_31353);
{
var G__31354 = seq__31341_31347;
var G__31355 = chunk__31342_31348;
var G__31356 = count__31343_31349;
var G__31357 = (i__31344_31350 + 1);
seq__31341_31347 = G__31354;
chunk__31342_31348 = G__31355;
count__31343_31349 = G__31356;
i__31344_31350 = G__31357;
continue;
}
} else
{var temp__4092__auto___31358 = cljs.core.seq.call(null,seq__31341_31347);if(temp__4092__auto___31358)
{var seq__31341_31359__$1 = temp__4092__auto___31358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31341_31359__$1))
{var c__8927__auto___31360 = cljs.core.chunk_first.call(null,seq__31341_31359__$1);{
var G__31361 = cljs.core.chunk_rest.call(null,seq__31341_31359__$1);
var G__31362 = c__8927__auto___31360;
var G__31363 = cljs.core.count.call(null,c__8927__auto___31360);
var G__31364 = 0;
seq__31341_31347 = G__31361;
chunk__31342_31348 = G__31362;
count__31343_31349 = G__31363;
i__31344_31350 = G__31364;
continue;
}
} else
{var vec__31346_31365 = cljs.core.first.call(null,seq__31341_31359__$1);var k_31366 = cljs.core.nth.call(null,vec__31346_31365,0,null);var v_31367 = cljs.core.nth.call(null,vec__31346_31365,1,null);(style[cljs.core.name.call(null,k_31366)] = v_31367);
{
var G__31368 = cljs.core.next.call(null,seq__31341_31359__$1);
var G__31369 = null;
var G__31370 = 0;
var G__31371 = 0;
seq__31341_31347 = G__31368;
chunk__31342_31348 = G__31369;
count__31343_31349 = G__31370;
i__31344_31350 = G__31371;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31372){
var elem = cljs.core.first(arglist__31372);
var kvs = cljs.core.rest(arglist__31372);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31379_31385 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__31380_31386 = null;var count__31381_31387 = 0;var i__31382_31388 = 0;while(true){
if((i__31382_31388 < count__31381_31387))
{var vec__31383_31389 = cljs.core._nth.call(null,chunk__31380_31386,i__31382_31388);var k_31390 = cljs.core.nth.call(null,vec__31383_31389,0,null);var v_31391 = cljs.core.nth.call(null,vec__31383_31389,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_31390,[cljs.core.str(v_31391),cljs.core.str("px")].join(''));
{
var G__31392 = seq__31379_31385;
var G__31393 = chunk__31380_31386;
var G__31394 = count__31381_31387;
var G__31395 = (i__31382_31388 + 1);
seq__31379_31385 = G__31392;
chunk__31380_31386 = G__31393;
count__31381_31387 = G__31394;
i__31382_31388 = G__31395;
continue;
}
} else
{var temp__4092__auto___31396 = cljs.core.seq.call(null,seq__31379_31385);if(temp__4092__auto___31396)
{var seq__31379_31397__$1 = temp__4092__auto___31396;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31379_31397__$1))
{var c__8927__auto___31398 = cljs.core.chunk_first.call(null,seq__31379_31397__$1);{
var G__31399 = cljs.core.chunk_rest.call(null,seq__31379_31397__$1);
var G__31400 = c__8927__auto___31398;
var G__31401 = cljs.core.count.call(null,c__8927__auto___31398);
var G__31402 = 0;
seq__31379_31385 = G__31399;
chunk__31380_31386 = G__31400;
count__31381_31387 = G__31401;
i__31382_31388 = G__31402;
continue;
}
} else
{var vec__31384_31403 = cljs.core.first.call(null,seq__31379_31397__$1);var k_31404 = cljs.core.nth.call(null,vec__31384_31403,0,null);var v_31405 = cljs.core.nth.call(null,vec__31384_31403,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_31404,[cljs.core.str(v_31405),cljs.core.str("px")].join(''));
{
var G__31406 = cljs.core.next.call(null,seq__31379_31397__$1);
var G__31407 = null;
var G__31408 = 0;
var G__31409 = 0;
seq__31379_31385 = G__31406;
chunk__31380_31386 = G__31407;
count__31381_31387 = G__31408;
i__31382_31388 = G__31409;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__31410){
var elem = cljs.core.first(arglist__31410);
var kvs = cljs.core.rest(arglist__31410);
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
{var G__31419 = dommy.template.__GT_node_like.call(null,elem);(G__31419[cljs.core.name.call(null,k)] = v);
return G__31419;
} else
{var G__31420 = dommy.template.__GT_node_like.call(null,elem);G__31420.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__31420;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__31427__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31421_31428 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__31422_31429 = null;var count__31423_31430 = 0;var i__31424_31431 = 0;while(true){
if((i__31424_31431 < count__31423_31430))
{var vec__31425_31432 = cljs.core._nth.call(null,chunk__31422_31429,i__31424_31431);var k_31433__$1 = cljs.core.nth.call(null,vec__31425_31432,0,null);var v_31434__$1 = cljs.core.nth.call(null,vec__31425_31432,1,null);set_attr_BANG_.call(null,elem__$1,k_31433__$1,v_31434__$1);
{
var G__31435 = seq__31421_31428;
var G__31436 = chunk__31422_31429;
var G__31437 = count__31423_31430;
var G__31438 = (i__31424_31431 + 1);
seq__31421_31428 = G__31435;
chunk__31422_31429 = G__31436;
count__31423_31430 = G__31437;
i__31424_31431 = G__31438;
continue;
}
} else
{var temp__4092__auto___31439 = cljs.core.seq.call(null,seq__31421_31428);if(temp__4092__auto___31439)
{var seq__31421_31440__$1 = temp__4092__auto___31439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31421_31440__$1))
{var c__8927__auto___31441 = cljs.core.chunk_first.call(null,seq__31421_31440__$1);{
var G__31442 = cljs.core.chunk_rest.call(null,seq__31421_31440__$1);
var G__31443 = c__8927__auto___31441;
var G__31444 = cljs.core.count.call(null,c__8927__auto___31441);
var G__31445 = 0;
seq__31421_31428 = G__31442;
chunk__31422_31429 = G__31443;
count__31423_31430 = G__31444;
i__31424_31431 = G__31445;
continue;
}
} else
{var vec__31426_31446 = cljs.core.first.call(null,seq__31421_31440__$1);var k_31447__$1 = cljs.core.nth.call(null,vec__31426_31446,0,null);var v_31448__$1 = cljs.core.nth.call(null,vec__31426_31446,1,null);set_attr_BANG_.call(null,elem__$1,k_31447__$1,v_31448__$1);
{
var G__31449 = cljs.core.next.call(null,seq__31421_31440__$1);
var G__31450 = null;
var G__31451 = 0;
var G__31452 = 0;
seq__31421_31428 = G__31449;
chunk__31422_31429 = G__31450;
count__31423_31430 = G__31451;
i__31424_31431 = G__31452;
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
var G__31427 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__31427__delegate.call(this,elem,k,v,kvs);};
G__31427.cljs$lang$maxFixedArity = 3;
G__31427.cljs$lang$applyTo = (function (arglist__31453){
var elem = cljs.core.first(arglist__31453);
arglist__31453 = cljs.core.next(arglist__31453);
var k = cljs.core.first(arglist__31453);
arglist__31453 = cljs.core.next(arglist__31453);
var v = cljs.core.first(arglist__31453);
var kvs = cljs.core.rest(arglist__31453);
return G__31427__delegate(elem,k,v,kvs);
});
G__31427.cljs$core$IFn$_invoke$arity$variadic = G__31427__delegate;
return G__31427;
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
var G__31462__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__31458_31463 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__31459_31464 = null;var count__31460_31465 = 0;var i__31461_31466 = 0;while(true){
if((i__31461_31466 < count__31460_31465))
{var k_31467__$1 = cljs.core._nth.call(null,chunk__31459_31464,i__31461_31466);remove_attr_BANG_.call(null,elem__$1,k_31467__$1);
{
var G__31468 = seq__31458_31463;
var G__31469 = chunk__31459_31464;
var G__31470 = count__31460_31465;
var G__31471 = (i__31461_31466 + 1);
seq__31458_31463 = G__31468;
chunk__31459_31464 = G__31469;
count__31460_31465 = G__31470;
i__31461_31466 = G__31471;
continue;
}
} else
{var temp__4092__auto___31472 = cljs.core.seq.call(null,seq__31458_31463);if(temp__4092__auto___31472)
{var seq__31458_31473__$1 = temp__4092__auto___31472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31458_31473__$1))
{var c__8927__auto___31474 = cljs.core.chunk_first.call(null,seq__31458_31473__$1);{
var G__31475 = cljs.core.chunk_rest.call(null,seq__31458_31473__$1);
var G__31476 = c__8927__auto___31474;
var G__31477 = cljs.core.count.call(null,c__8927__auto___31474);
var G__31478 = 0;
seq__31458_31463 = G__31475;
chunk__31459_31464 = G__31476;
count__31460_31465 = G__31477;
i__31461_31466 = G__31478;
continue;
}
} else
{var k_31479__$1 = cljs.core.first.call(null,seq__31458_31473__$1);remove_attr_BANG_.call(null,elem__$1,k_31479__$1);
{
var G__31480 = cljs.core.next.call(null,seq__31458_31473__$1);
var G__31481 = null;
var G__31482 = 0;
var G__31483 = 0;
seq__31458_31463 = G__31480;
chunk__31459_31464 = G__31481;
count__31460_31465 = G__31482;
i__31461_31466 = G__31483;
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
var G__31462 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__31462__delegate.call(this,elem,k,ks);};
G__31462.cljs$lang$maxFixedArity = 2;
G__31462.cljs$lang$applyTo = (function (arglist__31484){
var elem = cljs.core.first(arglist__31484);
arglist__31484 = cljs.core.next(arglist__31484);
var k = cljs.core.first(arglist__31484);
var ks = cljs.core.rest(arglist__31484);
return G__31462__delegate(elem,k,ks);
});
G__31462.cljs$core$IFn$_invoke$arity$variadic = G__31462__delegate;
return G__31462;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__31486 = dommy.template.__GT_node_like.call(null,elem);G__31486.style.display = ((show_QMARK_)?"":"none");
return G__31486;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__31488 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__31488,false);
return G__31488;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__31490 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__31490,true);
return G__31490;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__31492 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__31492["constructor"] = Object);
return G__31492;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map