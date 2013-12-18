// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__8211__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__8211__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__8211__auto__;
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
var G__29115 = (i + class$.length);
start_from = G__29115;
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
{var temp__4090__auto___29140 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29140))
{var class_list_29141 = temp__4090__auto___29140;var seq__29128_29142 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29129_29143 = null;var count__29130_29144 = 0;var i__29131_29145 = 0;while(true){
if((i__29131_29145 < count__29130_29144))
{var class_29146 = cljs.core._nth.call(null,chunk__29129_29143,i__29131_29145);class_list_29141.add(class_29146);
{
var G__29147 = seq__29128_29142;
var G__29148 = chunk__29129_29143;
var G__29149 = count__29130_29144;
var G__29150 = (i__29131_29145 + 1);
seq__29128_29142 = G__29147;
chunk__29129_29143 = G__29148;
count__29130_29144 = G__29149;
i__29131_29145 = G__29150;
continue;
}
} else
{var temp__4092__auto___29151 = cljs.core.seq.call(null,seq__29128_29142);if(temp__4092__auto___29151)
{var seq__29128_29152__$1 = temp__4092__auto___29151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128_29152__$1))
{var c__8952__auto___29153 = cljs.core.chunk_first.call(null,seq__29128_29152__$1);{
var G__29154 = cljs.core.chunk_rest.call(null,seq__29128_29152__$1);
var G__29155 = c__8952__auto___29153;
var G__29156 = cljs.core.count.call(null,c__8952__auto___29153);
var G__29157 = 0;
seq__29128_29142 = G__29154;
chunk__29129_29143 = G__29155;
count__29130_29144 = G__29156;
i__29131_29145 = G__29157;
continue;
}
} else
{var class_29158 = cljs.core.first.call(null,seq__29128_29152__$1);class_list_29141.add(class_29158);
{
var G__29159 = cljs.core.next.call(null,seq__29128_29152__$1);
var G__29160 = null;
var G__29161 = 0;
var G__29162 = 0;
seq__29128_29142 = G__29159;
chunk__29129_29143 = G__29160;
count__29130_29144 = G__29161;
i__29131_29145 = G__29162;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_29163 = elem__$1.className;var seq__29132_29164 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__29133_29165 = null;var count__29134_29166 = 0;var i__29135_29167 = 0;while(true){
if((i__29135_29167 < count__29134_29166))
{var class_29168 = cljs.core._nth.call(null,chunk__29133_29165,i__29135_29167);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29163,class_29168)))
{} else
{elem__$1.className = (((class_name_29163 === ""))?class_29168:[cljs.core.str(class_name_29163),cljs.core.str(" "),cljs.core.str(class_29168)].join(''));
}
{
var G__29169 = seq__29132_29164;
var G__29170 = chunk__29133_29165;
var G__29171 = count__29134_29166;
var G__29172 = (i__29135_29167 + 1);
seq__29132_29164 = G__29169;
chunk__29133_29165 = G__29170;
count__29134_29166 = G__29171;
i__29135_29167 = G__29172;
continue;
}
} else
{var temp__4092__auto___29173 = cljs.core.seq.call(null,seq__29132_29164);if(temp__4092__auto___29173)
{var seq__29132_29174__$1 = temp__4092__auto___29173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29132_29174__$1))
{var c__8952__auto___29175 = cljs.core.chunk_first.call(null,seq__29132_29174__$1);{
var G__29176 = cljs.core.chunk_rest.call(null,seq__29132_29174__$1);
var G__29177 = c__8952__auto___29175;
var G__29178 = cljs.core.count.call(null,c__8952__auto___29175);
var G__29179 = 0;
seq__29132_29164 = G__29176;
chunk__29133_29165 = G__29177;
count__29134_29166 = G__29178;
i__29135_29167 = G__29179;
continue;
}
} else
{var class_29180 = cljs.core.first.call(null,seq__29132_29174__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_29163,class_29180)))
{} else
{elem__$1.className = (((class_name_29163 === ""))?class_29180:[cljs.core.str(class_name_29163),cljs.core.str(" "),cljs.core.str(class_29180)].join(''));
}
{
var G__29181 = cljs.core.next.call(null,seq__29132_29174__$1);
var G__29182 = null;
var G__29183 = 0;
var G__29184 = 0;
seq__29132_29164 = G__29181;
chunk__29133_29165 = G__29182;
count__29134_29166 = G__29183;
i__29135_29167 = G__29184;
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
var G__29185__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29136_29186 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__29137_29187 = null;var count__29138_29188 = 0;var i__29139_29189 = 0;while(true){
if((i__29139_29189 < count__29138_29188))
{var c_29190 = cljs.core._nth.call(null,chunk__29137_29187,i__29139_29189);add_class_BANG_.call(null,elem__$1,c_29190);
{
var G__29191 = seq__29136_29186;
var G__29192 = chunk__29137_29187;
var G__29193 = count__29138_29188;
var G__29194 = (i__29139_29189 + 1);
seq__29136_29186 = G__29191;
chunk__29137_29187 = G__29192;
count__29138_29188 = G__29193;
i__29139_29189 = G__29194;
continue;
}
} else
{var temp__4092__auto___29195 = cljs.core.seq.call(null,seq__29136_29186);if(temp__4092__auto___29195)
{var seq__29136_29196__$1 = temp__4092__auto___29195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29136_29196__$1))
{var c__8952__auto___29197 = cljs.core.chunk_first.call(null,seq__29136_29196__$1);{
var G__29198 = cljs.core.chunk_rest.call(null,seq__29136_29196__$1);
var G__29199 = c__8952__auto___29197;
var G__29200 = cljs.core.count.call(null,c__8952__auto___29197);
var G__29201 = 0;
seq__29136_29186 = G__29198;
chunk__29137_29187 = G__29199;
count__29138_29188 = G__29200;
i__29139_29189 = G__29201;
continue;
}
} else
{var c_29202 = cljs.core.first.call(null,seq__29136_29196__$1);add_class_BANG_.call(null,elem__$1,c_29202);
{
var G__29203 = cljs.core.next.call(null,seq__29136_29196__$1);
var G__29204 = null;
var G__29205 = 0;
var G__29206 = 0;
seq__29136_29186 = G__29203;
chunk__29137_29187 = G__29204;
count__29138_29188 = G__29205;
i__29139_29189 = G__29206;
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
var G__29185 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29185__delegate.call(this,elem,classes,more_classes);};
G__29185.cljs$lang$maxFixedArity = 2;
G__29185.cljs$lang$applyTo = (function (arglist__29207){
var elem = cljs.core.first(arglist__29207);
arglist__29207 = cljs.core.next(arglist__29207);
var classes = cljs.core.first(arglist__29207);
var more_classes = cljs.core.rest(arglist__29207);
return G__29185__delegate(elem,classes,more_classes);
});
G__29185.cljs$core$IFn$_invoke$arity$variadic = G__29185__delegate;
return G__29185;
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
var G__29208 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__29208;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29217 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29217))
{var class_list_29218 = temp__4090__auto___29217;class_list_29218.remove(class$__$1);
} else
{var class_name_29219 = elem__$1.className;var new_class_name_29220 = dommy.attrs.remove_class_str.call(null,class_name_29219,class$__$1);if((class_name_29219 === new_class_name_29220))
{} else
{elem__$1.className = new_class_name_29220;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__29221__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29213 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__29214 = null;var count__29215 = 0;var i__29216 = 0;while(true){
if((i__29216 < count__29215))
{var c = cljs.core._nth.call(null,chunk__29214,i__29216);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29222 = seq__29213;
var G__29223 = chunk__29214;
var G__29224 = count__29215;
var G__29225 = (i__29216 + 1);
seq__29213 = G__29222;
chunk__29214 = G__29223;
count__29215 = G__29224;
i__29216 = G__29225;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29213);if(temp__4092__auto__)
{var seq__29213__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29213__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29213__$1);{
var G__29226 = cljs.core.chunk_rest.call(null,seq__29213__$1);
var G__29227 = c__8952__auto__;
var G__29228 = cljs.core.count.call(null,c__8952__auto__);
var G__29229 = 0;
seq__29213 = G__29226;
chunk__29214 = G__29227;
count__29215 = G__29228;
i__29216 = G__29229;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__29213__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__29230 = cljs.core.next.call(null,seq__29213__$1);
var G__29231 = null;
var G__29232 = 0;
var G__29233 = 0;
seq__29213 = G__29230;
chunk__29214 = G__29231;
count__29215 = G__29232;
i__29216 = G__29233;
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
var G__29221 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29221__delegate.call(this,elem,class$,classes);};
G__29221.cljs$lang$maxFixedArity = 2;
G__29221.cljs$lang$applyTo = (function (arglist__29234){
var elem = cljs.core.first(arglist__29234);
arglist__29234 = cljs.core.next(arglist__29234);
var class$ = cljs.core.first(arglist__29234);
var classes = cljs.core.rest(arglist__29234);
return G__29221__delegate(elem,class$,classes);
});
G__29221.cljs$core$IFn$_invoke$arity$variadic = G__29221__delegate;
return G__29221;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___29235 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___29235))
{var class_list_29236 = temp__4090__auto___29235;class_list_29236.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__29239){var vec__29240 = p__29239;var k = cljs.core.nth.call(null,vec__29240,0,null);var v = cljs.core.nth.call(null,vec__29240,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__29247_29253 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29248_29254 = null;var count__29249_29255 = 0;var i__29250_29256 = 0;while(true){
if((i__29250_29256 < count__29249_29255))
{var vec__29251_29257 = cljs.core._nth.call(null,chunk__29248_29254,i__29250_29256);var k_29258 = cljs.core.nth.call(null,vec__29251_29257,0,null);var v_29259 = cljs.core.nth.call(null,vec__29251_29257,1,null);(style[cljs.core.name.call(null,k_29258)] = v_29259);
{
var G__29260 = seq__29247_29253;
var G__29261 = chunk__29248_29254;
var G__29262 = count__29249_29255;
var G__29263 = (i__29250_29256 + 1);
seq__29247_29253 = G__29260;
chunk__29248_29254 = G__29261;
count__29249_29255 = G__29262;
i__29250_29256 = G__29263;
continue;
}
} else
{var temp__4092__auto___29264 = cljs.core.seq.call(null,seq__29247_29253);if(temp__4092__auto___29264)
{var seq__29247_29265__$1 = temp__4092__auto___29264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29247_29265__$1))
{var c__8952__auto___29266 = cljs.core.chunk_first.call(null,seq__29247_29265__$1);{
var G__29267 = cljs.core.chunk_rest.call(null,seq__29247_29265__$1);
var G__29268 = c__8952__auto___29266;
var G__29269 = cljs.core.count.call(null,c__8952__auto___29266);
var G__29270 = 0;
seq__29247_29253 = G__29267;
chunk__29248_29254 = G__29268;
count__29249_29255 = G__29269;
i__29250_29256 = G__29270;
continue;
}
} else
{var vec__29252_29271 = cljs.core.first.call(null,seq__29247_29265__$1);var k_29272 = cljs.core.nth.call(null,vec__29252_29271,0,null);var v_29273 = cljs.core.nth.call(null,vec__29252_29271,1,null);(style[cljs.core.name.call(null,k_29272)] = v_29273);
{
var G__29274 = cljs.core.next.call(null,seq__29247_29265__$1);
var G__29275 = null;
var G__29276 = 0;
var G__29277 = 0;
seq__29247_29253 = G__29274;
chunk__29248_29254 = G__29275;
count__29249_29255 = G__29276;
i__29250_29256 = G__29277;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__29278){
var elem = cljs.core.first(arglist__29278);
var kvs = cljs.core.rest(arglist__29278);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29285_29291 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__29286_29292 = null;var count__29287_29293 = 0;var i__29288_29294 = 0;while(true){
if((i__29288_29294 < count__29287_29293))
{var vec__29289_29295 = cljs.core._nth.call(null,chunk__29286_29292,i__29288_29294);var k_29296 = cljs.core.nth.call(null,vec__29289_29295,0,null);var v_29297 = cljs.core.nth.call(null,vec__29289_29295,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29296,[cljs.core.str(v_29297),cljs.core.str("px")].join(''));
{
var G__29298 = seq__29285_29291;
var G__29299 = chunk__29286_29292;
var G__29300 = count__29287_29293;
var G__29301 = (i__29288_29294 + 1);
seq__29285_29291 = G__29298;
chunk__29286_29292 = G__29299;
count__29287_29293 = G__29300;
i__29288_29294 = G__29301;
continue;
}
} else
{var temp__4092__auto___29302 = cljs.core.seq.call(null,seq__29285_29291);if(temp__4092__auto___29302)
{var seq__29285_29303__$1 = temp__4092__auto___29302;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29285_29303__$1))
{var c__8952__auto___29304 = cljs.core.chunk_first.call(null,seq__29285_29303__$1);{
var G__29305 = cljs.core.chunk_rest.call(null,seq__29285_29303__$1);
var G__29306 = c__8952__auto___29304;
var G__29307 = cljs.core.count.call(null,c__8952__auto___29304);
var G__29308 = 0;
seq__29285_29291 = G__29305;
chunk__29286_29292 = G__29306;
count__29287_29293 = G__29307;
i__29288_29294 = G__29308;
continue;
}
} else
{var vec__29290_29309 = cljs.core.first.call(null,seq__29285_29303__$1);var k_29310 = cljs.core.nth.call(null,vec__29290_29309,0,null);var v_29311 = cljs.core.nth.call(null,vec__29290_29309,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_29310,[cljs.core.str(v_29311),cljs.core.str("px")].join(''));
{
var G__29312 = cljs.core.next.call(null,seq__29285_29303__$1);
var G__29313 = null;
var G__29314 = 0;
var G__29315 = 0;
seq__29285_29291 = G__29312;
chunk__29286_29292 = G__29313;
count__29287_29293 = G__29314;
i__29288_29294 = G__29315;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__29316){
var elem = cljs.core.first(arglist__29316);
var kvs = cljs.core.rest(arglist__29316);
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
{var G__29325 = dommy.template.__GT_node_like.call(null,elem);(G__29325[cljs.core.name.call(null,k)] = v);
return G__29325;
} else
{var G__29326 = dommy.template.__GT_node_like.call(null,elem);G__29326.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__29326;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__29333__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29327_29334 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__29328_29335 = null;var count__29329_29336 = 0;var i__29330_29337 = 0;while(true){
if((i__29330_29337 < count__29329_29336))
{var vec__29331_29338 = cljs.core._nth.call(null,chunk__29328_29335,i__29330_29337);var k_29339__$1 = cljs.core.nth.call(null,vec__29331_29338,0,null);var v_29340__$1 = cljs.core.nth.call(null,vec__29331_29338,1,null);set_attr_BANG_.call(null,elem__$1,k_29339__$1,v_29340__$1);
{
var G__29341 = seq__29327_29334;
var G__29342 = chunk__29328_29335;
var G__29343 = count__29329_29336;
var G__29344 = (i__29330_29337 + 1);
seq__29327_29334 = G__29341;
chunk__29328_29335 = G__29342;
count__29329_29336 = G__29343;
i__29330_29337 = G__29344;
continue;
}
} else
{var temp__4092__auto___29345 = cljs.core.seq.call(null,seq__29327_29334);if(temp__4092__auto___29345)
{var seq__29327_29346__$1 = temp__4092__auto___29345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29327_29346__$1))
{var c__8952__auto___29347 = cljs.core.chunk_first.call(null,seq__29327_29346__$1);{
var G__29348 = cljs.core.chunk_rest.call(null,seq__29327_29346__$1);
var G__29349 = c__8952__auto___29347;
var G__29350 = cljs.core.count.call(null,c__8952__auto___29347);
var G__29351 = 0;
seq__29327_29334 = G__29348;
chunk__29328_29335 = G__29349;
count__29329_29336 = G__29350;
i__29330_29337 = G__29351;
continue;
}
} else
{var vec__29332_29352 = cljs.core.first.call(null,seq__29327_29346__$1);var k_29353__$1 = cljs.core.nth.call(null,vec__29332_29352,0,null);var v_29354__$1 = cljs.core.nth.call(null,vec__29332_29352,1,null);set_attr_BANG_.call(null,elem__$1,k_29353__$1,v_29354__$1);
{
var G__29355 = cljs.core.next.call(null,seq__29327_29346__$1);
var G__29356 = null;
var G__29357 = 0;
var G__29358 = 0;
seq__29327_29334 = G__29355;
chunk__29328_29335 = G__29356;
count__29329_29336 = G__29357;
i__29330_29337 = G__29358;
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
var G__29333 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__29333__delegate.call(this,elem,k,v,kvs);};
G__29333.cljs$lang$maxFixedArity = 3;
G__29333.cljs$lang$applyTo = (function (arglist__29359){
var elem = cljs.core.first(arglist__29359);
arglist__29359 = cljs.core.next(arglist__29359);
var k = cljs.core.first(arglist__29359);
arglist__29359 = cljs.core.next(arglist__29359);
var v = cljs.core.first(arglist__29359);
var kvs = cljs.core.rest(arglist__29359);
return G__29333__delegate(elem,k,v,kvs);
});
G__29333.cljs$core$IFn$_invoke$arity$variadic = G__29333__delegate;
return G__29333;
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
var G__29368__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__29364_29369 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__29365_29370 = null;var count__29366_29371 = 0;var i__29367_29372 = 0;while(true){
if((i__29367_29372 < count__29366_29371))
{var k_29373__$1 = cljs.core._nth.call(null,chunk__29365_29370,i__29367_29372);remove_attr_BANG_.call(null,elem__$1,k_29373__$1);
{
var G__29374 = seq__29364_29369;
var G__29375 = chunk__29365_29370;
var G__29376 = count__29366_29371;
var G__29377 = (i__29367_29372 + 1);
seq__29364_29369 = G__29374;
chunk__29365_29370 = G__29375;
count__29366_29371 = G__29376;
i__29367_29372 = G__29377;
continue;
}
} else
{var temp__4092__auto___29378 = cljs.core.seq.call(null,seq__29364_29369);if(temp__4092__auto___29378)
{var seq__29364_29379__$1 = temp__4092__auto___29378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29364_29379__$1))
{var c__8952__auto___29380 = cljs.core.chunk_first.call(null,seq__29364_29379__$1);{
var G__29381 = cljs.core.chunk_rest.call(null,seq__29364_29379__$1);
var G__29382 = c__8952__auto___29380;
var G__29383 = cljs.core.count.call(null,c__8952__auto___29380);
var G__29384 = 0;
seq__29364_29369 = G__29381;
chunk__29365_29370 = G__29382;
count__29366_29371 = G__29383;
i__29367_29372 = G__29384;
continue;
}
} else
{var k_29385__$1 = cljs.core.first.call(null,seq__29364_29379__$1);remove_attr_BANG_.call(null,elem__$1,k_29385__$1);
{
var G__29386 = cljs.core.next.call(null,seq__29364_29379__$1);
var G__29387 = null;
var G__29388 = 0;
var G__29389 = 0;
seq__29364_29369 = G__29386;
chunk__29365_29370 = G__29387;
count__29366_29371 = G__29388;
i__29367_29372 = G__29389;
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
var G__29368 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__29368__delegate.call(this,elem,k,ks);};
G__29368.cljs$lang$maxFixedArity = 2;
G__29368.cljs$lang$applyTo = (function (arglist__29390){
var elem = cljs.core.first(arglist__29390);
arglist__29390 = cljs.core.next(arglist__29390);
var k = cljs.core.first(arglist__29390);
var ks = cljs.core.rest(arglist__29390);
return G__29368__delegate(elem,k,ks);
});
G__29368.cljs$core$IFn$_invoke$arity$variadic = G__29368__delegate;
return G__29368;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__29392 = dommy.template.__GT_node_like.call(null,elem);G__29392.style.display = ((show_QMARK_)?"":"none");
return G__29392;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__29394 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29394,false);
return G__29394;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__29396 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__29396,true);
return G__29396;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__29398 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__29398["constructor"] = Object);
return G__29398;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map