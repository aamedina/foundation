// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__15171__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__15171__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__15171__auto__;
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
var G__50156 = (i + class$.length);
start_from = G__50156;
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
{var temp__4096__auto___50181 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___50181))
{var class_list_50182 = temp__4096__auto___50181;var seq__50169_50183 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__50170_50184 = null;var count__50171_50185 = 0;var i__50172_50186 = 0;while(true){
if((i__50172_50186 < count__50171_50185))
{var class_50187 = cljs.core._nth.call(null,chunk__50170_50184,i__50172_50186);class_list_50182.add(class_50187);
{
var G__50188 = seq__50169_50183;
var G__50189 = chunk__50170_50184;
var G__50190 = count__50171_50185;
var G__50191 = (i__50172_50186 + 1);
seq__50169_50183 = G__50188;
chunk__50170_50184 = G__50189;
count__50171_50185 = G__50190;
i__50172_50186 = G__50191;
continue;
}
} else
{var temp__4098__auto___50192 = cljs.core.seq.call(null,seq__50169_50183);if(temp__4098__auto___50192)
{var seq__50169_50193__$1 = temp__4098__auto___50192;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50169_50193__$1))
{var c__15907__auto___50194 = cljs.core.chunk_first.call(null,seq__50169_50193__$1);{
var G__50195 = cljs.core.chunk_rest.call(null,seq__50169_50193__$1);
var G__50196 = c__15907__auto___50194;
var G__50197 = cljs.core.count.call(null,c__15907__auto___50194);
var G__50198 = 0;
seq__50169_50183 = G__50195;
chunk__50170_50184 = G__50196;
count__50171_50185 = G__50197;
i__50172_50186 = G__50198;
continue;
}
} else
{var class_50199 = cljs.core.first.call(null,seq__50169_50193__$1);class_list_50182.add(class_50199);
{
var G__50200 = cljs.core.next.call(null,seq__50169_50193__$1);
var G__50201 = null;
var G__50202 = 0;
var G__50203 = 0;
seq__50169_50183 = G__50200;
chunk__50170_50184 = G__50201;
count__50171_50185 = G__50202;
i__50172_50186 = G__50203;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_50204 = elem__$1.className;var seq__50173_50205 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__50174_50206 = null;var count__50175_50207 = 0;var i__50176_50208 = 0;while(true){
if((i__50176_50208 < count__50175_50207))
{var class_50209 = cljs.core._nth.call(null,chunk__50174_50206,i__50176_50208);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_50204,class_50209)))
{} else
{elem__$1.className = (((class_name_50204 === ""))?class_50209:[cljs.core.str(class_name_50204),cljs.core.str(" "),cljs.core.str(class_50209)].join(''));
}
{
var G__50210 = seq__50173_50205;
var G__50211 = chunk__50174_50206;
var G__50212 = count__50175_50207;
var G__50213 = (i__50176_50208 + 1);
seq__50173_50205 = G__50210;
chunk__50174_50206 = G__50211;
count__50175_50207 = G__50212;
i__50176_50208 = G__50213;
continue;
}
} else
{var temp__4098__auto___50214 = cljs.core.seq.call(null,seq__50173_50205);if(temp__4098__auto___50214)
{var seq__50173_50215__$1 = temp__4098__auto___50214;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50173_50215__$1))
{var c__15907__auto___50216 = cljs.core.chunk_first.call(null,seq__50173_50215__$1);{
var G__50217 = cljs.core.chunk_rest.call(null,seq__50173_50215__$1);
var G__50218 = c__15907__auto___50216;
var G__50219 = cljs.core.count.call(null,c__15907__auto___50216);
var G__50220 = 0;
seq__50173_50205 = G__50217;
chunk__50174_50206 = G__50218;
count__50175_50207 = G__50219;
i__50176_50208 = G__50220;
continue;
}
} else
{var class_50221 = cljs.core.first.call(null,seq__50173_50215__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_50204,class_50221)))
{} else
{elem__$1.className = (((class_name_50204 === ""))?class_50221:[cljs.core.str(class_name_50204),cljs.core.str(" "),cljs.core.str(class_50221)].join(''));
}
{
var G__50222 = cljs.core.next.call(null,seq__50173_50215__$1);
var G__50223 = null;
var G__50224 = 0;
var G__50225 = 0;
seq__50173_50205 = G__50222;
chunk__50174_50206 = G__50223;
count__50175_50207 = G__50224;
i__50176_50208 = G__50225;
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
var G__50226__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__50177_50227 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__50178_50228 = null;var count__50179_50229 = 0;var i__50180_50230 = 0;while(true){
if((i__50180_50230 < count__50179_50229))
{var c_50231 = cljs.core._nth.call(null,chunk__50178_50228,i__50180_50230);add_class_BANG_.call(null,elem__$1,c_50231);
{
var G__50232 = seq__50177_50227;
var G__50233 = chunk__50178_50228;
var G__50234 = count__50179_50229;
var G__50235 = (i__50180_50230 + 1);
seq__50177_50227 = G__50232;
chunk__50178_50228 = G__50233;
count__50179_50229 = G__50234;
i__50180_50230 = G__50235;
continue;
}
} else
{var temp__4098__auto___50236 = cljs.core.seq.call(null,seq__50177_50227);if(temp__4098__auto___50236)
{var seq__50177_50237__$1 = temp__4098__auto___50236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50177_50237__$1))
{var c__15907__auto___50238 = cljs.core.chunk_first.call(null,seq__50177_50237__$1);{
var G__50239 = cljs.core.chunk_rest.call(null,seq__50177_50237__$1);
var G__50240 = c__15907__auto___50238;
var G__50241 = cljs.core.count.call(null,c__15907__auto___50238);
var G__50242 = 0;
seq__50177_50227 = G__50239;
chunk__50178_50228 = G__50240;
count__50179_50229 = G__50241;
i__50180_50230 = G__50242;
continue;
}
} else
{var c_50243 = cljs.core.first.call(null,seq__50177_50237__$1);add_class_BANG_.call(null,elem__$1,c_50243);
{
var G__50244 = cljs.core.next.call(null,seq__50177_50237__$1);
var G__50245 = null;
var G__50246 = 0;
var G__50247 = 0;
seq__50177_50227 = G__50244;
chunk__50178_50228 = G__50245;
count__50179_50229 = G__50246;
i__50180_50230 = G__50247;
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
var G__50226 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__50226__delegate.call(this,elem,classes,more_classes);};
G__50226.cljs$lang$maxFixedArity = 2;
G__50226.cljs$lang$applyTo = (function (arglist__50248){
var elem = cljs.core.first(arglist__50248);
arglist__50248 = cljs.core.next(arglist__50248);
var classes = cljs.core.first(arglist__50248);
var more_classes = cljs.core.rest(arglist__50248);
return G__50226__delegate(elem,classes,more_classes);
});
G__50226.cljs$core$IFn$_invoke$arity$variadic = G__50226__delegate;
return G__50226;
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
var G__50249 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__50249;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4096__auto___50258 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___50258))
{var class_list_50259 = temp__4096__auto___50258;class_list_50259.remove(class$__$1);
} else
{var class_name_50260 = elem__$1.className;var new_class_name_50261 = dommy.attrs.remove_class_str.call(null,class_name_50260,class$__$1);if((class_name_50260 === new_class_name_50261))
{} else
{elem__$1.className = new_class_name_50261;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__50262__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__50254 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__50255 = null;var count__50256 = 0;var i__50257 = 0;while(true){
if((i__50257 < count__50256))
{var c = cljs.core._nth.call(null,chunk__50255,i__50257);remove_class_BANG_.call(null,elem__$1,c);
{
var G__50263 = seq__50254;
var G__50264 = chunk__50255;
var G__50265 = count__50256;
var G__50266 = (i__50257 + 1);
seq__50254 = G__50263;
chunk__50255 = G__50264;
count__50256 = G__50265;
i__50257 = G__50266;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__50254);if(temp__4098__auto__)
{var seq__50254__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50254__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__50254__$1);{
var G__50267 = cljs.core.chunk_rest.call(null,seq__50254__$1);
var G__50268 = c__15907__auto__;
var G__50269 = cljs.core.count.call(null,c__15907__auto__);
var G__50270 = 0;
seq__50254 = G__50267;
chunk__50255 = G__50268;
count__50256 = G__50269;
i__50257 = G__50270;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__50254__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__50271 = cljs.core.next.call(null,seq__50254__$1);
var G__50272 = null;
var G__50273 = 0;
var G__50274 = 0;
seq__50254 = G__50271;
chunk__50255 = G__50272;
count__50256 = G__50273;
i__50257 = G__50274;
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
var G__50262 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__50262__delegate.call(this,elem,class$,classes);};
G__50262.cljs$lang$maxFixedArity = 2;
G__50262.cljs$lang$applyTo = (function (arglist__50275){
var elem = cljs.core.first(arglist__50275);
arglist__50275 = cljs.core.next(arglist__50275);
var class$ = cljs.core.first(arglist__50275);
var classes = cljs.core.rest(arglist__50275);
return G__50262__delegate(elem,class$,classes);
});
G__50262.cljs$core$IFn$_invoke$arity$variadic = G__50262__delegate;
return G__50262;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4096__auto___50276 = elem__$1.classList;if(cljs.core.truth_(temp__4096__auto___50276))
{var class_list_50277 = temp__4096__auto___50276;class_list_50277.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__50280){var vec__50281 = p__50280;var k = cljs.core.nth.call(null,vec__50281,0,null);var v = cljs.core.nth.call(null,vec__50281,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__50288_50294 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__50289_50295 = null;var count__50290_50296 = 0;var i__50291_50297 = 0;while(true){
if((i__50291_50297 < count__50290_50296))
{var vec__50292_50298 = cljs.core._nth.call(null,chunk__50289_50295,i__50291_50297);var k_50299 = cljs.core.nth.call(null,vec__50292_50298,0,null);var v_50300 = cljs.core.nth.call(null,vec__50292_50298,1,null);(style[cljs.core.name.call(null,k_50299)] = v_50300);
{
var G__50301 = seq__50288_50294;
var G__50302 = chunk__50289_50295;
var G__50303 = count__50290_50296;
var G__50304 = (i__50291_50297 + 1);
seq__50288_50294 = G__50301;
chunk__50289_50295 = G__50302;
count__50290_50296 = G__50303;
i__50291_50297 = G__50304;
continue;
}
} else
{var temp__4098__auto___50305 = cljs.core.seq.call(null,seq__50288_50294);if(temp__4098__auto___50305)
{var seq__50288_50306__$1 = temp__4098__auto___50305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50288_50306__$1))
{var c__15907__auto___50307 = cljs.core.chunk_first.call(null,seq__50288_50306__$1);{
var G__50308 = cljs.core.chunk_rest.call(null,seq__50288_50306__$1);
var G__50309 = c__15907__auto___50307;
var G__50310 = cljs.core.count.call(null,c__15907__auto___50307);
var G__50311 = 0;
seq__50288_50294 = G__50308;
chunk__50289_50295 = G__50309;
count__50290_50296 = G__50310;
i__50291_50297 = G__50311;
continue;
}
} else
{var vec__50293_50312 = cljs.core.first.call(null,seq__50288_50306__$1);var k_50313 = cljs.core.nth.call(null,vec__50293_50312,0,null);var v_50314 = cljs.core.nth.call(null,vec__50293_50312,1,null);(style[cljs.core.name.call(null,k_50313)] = v_50314);
{
var G__50315 = cljs.core.next.call(null,seq__50288_50306__$1);
var G__50316 = null;
var G__50317 = 0;
var G__50318 = 0;
seq__50288_50294 = G__50315;
chunk__50289_50295 = G__50316;
count__50290_50296 = G__50317;
i__50291_50297 = G__50318;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__50319){
var elem = cljs.core.first(arglist__50319);
var kvs = cljs.core.rest(arglist__50319);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__50326_50332 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__50327_50333 = null;var count__50328_50334 = 0;var i__50329_50335 = 0;while(true){
if((i__50329_50335 < count__50328_50334))
{var vec__50330_50336 = cljs.core._nth.call(null,chunk__50327_50333,i__50329_50335);var k_50337 = cljs.core.nth.call(null,vec__50330_50336,0,null);var v_50338 = cljs.core.nth.call(null,vec__50330_50336,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_50337,[cljs.core.str(v_50338),cljs.core.str("px")].join(''));
{
var G__50339 = seq__50326_50332;
var G__50340 = chunk__50327_50333;
var G__50341 = count__50328_50334;
var G__50342 = (i__50329_50335 + 1);
seq__50326_50332 = G__50339;
chunk__50327_50333 = G__50340;
count__50328_50334 = G__50341;
i__50329_50335 = G__50342;
continue;
}
} else
{var temp__4098__auto___50343 = cljs.core.seq.call(null,seq__50326_50332);if(temp__4098__auto___50343)
{var seq__50326_50344__$1 = temp__4098__auto___50343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50326_50344__$1))
{var c__15907__auto___50345 = cljs.core.chunk_first.call(null,seq__50326_50344__$1);{
var G__50346 = cljs.core.chunk_rest.call(null,seq__50326_50344__$1);
var G__50347 = c__15907__auto___50345;
var G__50348 = cljs.core.count.call(null,c__15907__auto___50345);
var G__50349 = 0;
seq__50326_50332 = G__50346;
chunk__50327_50333 = G__50347;
count__50328_50334 = G__50348;
i__50329_50335 = G__50349;
continue;
}
} else
{var vec__50331_50350 = cljs.core.first.call(null,seq__50326_50344__$1);var k_50351 = cljs.core.nth.call(null,vec__50331_50350,0,null);var v_50352 = cljs.core.nth.call(null,vec__50331_50350,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_50351,[cljs.core.str(v_50352),cljs.core.str("px")].join(''));
{
var G__50353 = cljs.core.next.call(null,seq__50326_50344__$1);
var G__50354 = null;
var G__50355 = 0;
var G__50356 = 0;
seq__50326_50332 = G__50353;
chunk__50327_50333 = G__50354;
count__50328_50334 = G__50355;
i__50329_50335 = G__50356;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__50357){
var elem = cljs.core.first(arglist__50357);
var kvs = cljs.core.rest(arglist__50357);
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
{var G__50366 = dommy.template.__GT_node_like.call(null,elem);(G__50366[cljs.core.name.call(null,k)] = v);
return G__50366;
} else
{var G__50367 = dommy.template.__GT_node_like.call(null,elem);G__50367.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__50367;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__50374__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__50368_50375 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__50369_50376 = null;var count__50370_50377 = 0;var i__50371_50378 = 0;while(true){
if((i__50371_50378 < count__50370_50377))
{var vec__50372_50379 = cljs.core._nth.call(null,chunk__50369_50376,i__50371_50378);var k_50380__$1 = cljs.core.nth.call(null,vec__50372_50379,0,null);var v_50381__$1 = cljs.core.nth.call(null,vec__50372_50379,1,null);set_attr_BANG_.call(null,elem__$1,k_50380__$1,v_50381__$1);
{
var G__50382 = seq__50368_50375;
var G__50383 = chunk__50369_50376;
var G__50384 = count__50370_50377;
var G__50385 = (i__50371_50378 + 1);
seq__50368_50375 = G__50382;
chunk__50369_50376 = G__50383;
count__50370_50377 = G__50384;
i__50371_50378 = G__50385;
continue;
}
} else
{var temp__4098__auto___50386 = cljs.core.seq.call(null,seq__50368_50375);if(temp__4098__auto___50386)
{var seq__50368_50387__$1 = temp__4098__auto___50386;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50368_50387__$1))
{var c__15907__auto___50388 = cljs.core.chunk_first.call(null,seq__50368_50387__$1);{
var G__50389 = cljs.core.chunk_rest.call(null,seq__50368_50387__$1);
var G__50390 = c__15907__auto___50388;
var G__50391 = cljs.core.count.call(null,c__15907__auto___50388);
var G__50392 = 0;
seq__50368_50375 = G__50389;
chunk__50369_50376 = G__50390;
count__50370_50377 = G__50391;
i__50371_50378 = G__50392;
continue;
}
} else
{var vec__50373_50393 = cljs.core.first.call(null,seq__50368_50387__$1);var k_50394__$1 = cljs.core.nth.call(null,vec__50373_50393,0,null);var v_50395__$1 = cljs.core.nth.call(null,vec__50373_50393,1,null);set_attr_BANG_.call(null,elem__$1,k_50394__$1,v_50395__$1);
{
var G__50396 = cljs.core.next.call(null,seq__50368_50387__$1);
var G__50397 = null;
var G__50398 = 0;
var G__50399 = 0;
seq__50368_50375 = G__50396;
chunk__50369_50376 = G__50397;
count__50370_50377 = G__50398;
i__50371_50378 = G__50399;
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
var G__50374 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__50374__delegate.call(this,elem,k,v,kvs);};
G__50374.cljs$lang$maxFixedArity = 3;
G__50374.cljs$lang$applyTo = (function (arglist__50400){
var elem = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var k = cljs.core.first(arglist__50400);
arglist__50400 = cljs.core.next(arglist__50400);
var v = cljs.core.first(arglist__50400);
var kvs = cljs.core.rest(arglist__50400);
return G__50374__delegate(elem,k,v,kvs);
});
G__50374.cljs$core$IFn$_invoke$arity$variadic = G__50374__delegate;
return G__50374;
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
var G__50409__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__50405_50410 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__50406_50411 = null;var count__50407_50412 = 0;var i__50408_50413 = 0;while(true){
if((i__50408_50413 < count__50407_50412))
{var k_50414__$1 = cljs.core._nth.call(null,chunk__50406_50411,i__50408_50413);remove_attr_BANG_.call(null,elem__$1,k_50414__$1);
{
var G__50415 = seq__50405_50410;
var G__50416 = chunk__50406_50411;
var G__50417 = count__50407_50412;
var G__50418 = (i__50408_50413 + 1);
seq__50405_50410 = G__50415;
chunk__50406_50411 = G__50416;
count__50407_50412 = G__50417;
i__50408_50413 = G__50418;
continue;
}
} else
{var temp__4098__auto___50419 = cljs.core.seq.call(null,seq__50405_50410);if(temp__4098__auto___50419)
{var seq__50405_50420__$1 = temp__4098__auto___50419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50405_50420__$1))
{var c__15907__auto___50421 = cljs.core.chunk_first.call(null,seq__50405_50420__$1);{
var G__50422 = cljs.core.chunk_rest.call(null,seq__50405_50420__$1);
var G__50423 = c__15907__auto___50421;
var G__50424 = cljs.core.count.call(null,c__15907__auto___50421);
var G__50425 = 0;
seq__50405_50410 = G__50422;
chunk__50406_50411 = G__50423;
count__50407_50412 = G__50424;
i__50408_50413 = G__50425;
continue;
}
} else
{var k_50426__$1 = cljs.core.first.call(null,seq__50405_50420__$1);remove_attr_BANG_.call(null,elem__$1,k_50426__$1);
{
var G__50427 = cljs.core.next.call(null,seq__50405_50420__$1);
var G__50428 = null;
var G__50429 = 0;
var G__50430 = 0;
seq__50405_50410 = G__50427;
chunk__50406_50411 = G__50428;
count__50407_50412 = G__50429;
i__50408_50413 = G__50430;
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
var G__50409 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__50409__delegate.call(this,elem,k,ks);};
G__50409.cljs$lang$maxFixedArity = 2;
G__50409.cljs$lang$applyTo = (function (arglist__50431){
var elem = cljs.core.first(arglist__50431);
arglist__50431 = cljs.core.next(arglist__50431);
var k = cljs.core.first(arglist__50431);
var ks = cljs.core.rest(arglist__50431);
return G__50409__delegate(elem,k,ks);
});
G__50409.cljs$core$IFn$_invoke$arity$variadic = G__50409__delegate;
return G__50409;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__50433 = dommy.template.__GT_node_like.call(null,elem);G__50433.style.display = ((show_QMARK_)?"":"none");
return G__50433;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__50435 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__50435,false);
return G__50435;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__50437 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__50437,true);
return G__50437;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__50439 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__50439["constructor"] = Object);
return G__50439;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map