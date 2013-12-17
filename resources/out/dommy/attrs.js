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
var G__377125 = (i + class$.length);
start_from = G__377125;
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
{var temp__4090__auto___377150 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___377150))
{var class_list_377151 = temp__4090__auto___377150;var seq__377138_377152 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__377139_377153 = null;var count__377140_377154 = 0;var i__377141_377155 = 0;while(true){
if((i__377141_377155 < count__377140_377154))
{var class_377156 = cljs.core._nth.call(null,chunk__377139_377153,i__377141_377155);class_list_377151.add(class_377156);
{
var G__377157 = seq__377138_377152;
var G__377158 = chunk__377139_377153;
var G__377159 = count__377140_377154;
var G__377160 = (i__377141_377155 + 1);
seq__377138_377152 = G__377157;
chunk__377139_377153 = G__377158;
count__377140_377154 = G__377159;
i__377141_377155 = G__377160;
continue;
}
} else
{var temp__4092__auto___377161 = cljs.core.seq.call(null,seq__377138_377152);if(temp__4092__auto___377161)
{var seq__377138_377162__$1 = temp__4092__auto___377161;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377138_377162__$1))
{var c__14708__auto___377163 = cljs.core.chunk_first.call(null,seq__377138_377162__$1);{
var G__377164 = cljs.core.chunk_rest.call(null,seq__377138_377162__$1);
var G__377165 = c__14708__auto___377163;
var G__377166 = cljs.core.count.call(null,c__14708__auto___377163);
var G__377167 = 0;
seq__377138_377152 = G__377164;
chunk__377139_377153 = G__377165;
count__377140_377154 = G__377166;
i__377141_377155 = G__377167;
continue;
}
} else
{var class_377168 = cljs.core.first.call(null,seq__377138_377162__$1);class_list_377151.add(class_377168);
{
var G__377169 = cljs.core.next.call(null,seq__377138_377162__$1);
var G__377170 = null;
var G__377171 = 0;
var G__377172 = 0;
seq__377138_377152 = G__377169;
chunk__377139_377153 = G__377170;
count__377140_377154 = G__377171;
i__377141_377155 = G__377172;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_377173 = elem__$1.className;var seq__377142_377174 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__377143_377175 = null;var count__377144_377176 = 0;var i__377145_377177 = 0;while(true){
if((i__377145_377177 < count__377144_377176))
{var class_377178 = cljs.core._nth.call(null,chunk__377143_377175,i__377145_377177);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_377173,class_377178)))
{} else
{elem__$1.className = (((class_name_377173 === ""))?class_377178:[cljs.core.str(class_name_377173),cljs.core.str(" "),cljs.core.str(class_377178)].join(''));
}
{
var G__377179 = seq__377142_377174;
var G__377180 = chunk__377143_377175;
var G__377181 = count__377144_377176;
var G__377182 = (i__377145_377177 + 1);
seq__377142_377174 = G__377179;
chunk__377143_377175 = G__377180;
count__377144_377176 = G__377181;
i__377145_377177 = G__377182;
continue;
}
} else
{var temp__4092__auto___377183 = cljs.core.seq.call(null,seq__377142_377174);if(temp__4092__auto___377183)
{var seq__377142_377184__$1 = temp__4092__auto___377183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377142_377184__$1))
{var c__14708__auto___377185 = cljs.core.chunk_first.call(null,seq__377142_377184__$1);{
var G__377186 = cljs.core.chunk_rest.call(null,seq__377142_377184__$1);
var G__377187 = c__14708__auto___377185;
var G__377188 = cljs.core.count.call(null,c__14708__auto___377185);
var G__377189 = 0;
seq__377142_377174 = G__377186;
chunk__377143_377175 = G__377187;
count__377144_377176 = G__377188;
i__377145_377177 = G__377189;
continue;
}
} else
{var class_377190 = cljs.core.first.call(null,seq__377142_377184__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_377173,class_377190)))
{} else
{elem__$1.className = (((class_name_377173 === ""))?class_377190:[cljs.core.str(class_name_377173),cljs.core.str(" "),cljs.core.str(class_377190)].join(''));
}
{
var G__377191 = cljs.core.next.call(null,seq__377142_377184__$1);
var G__377192 = null;
var G__377193 = 0;
var G__377194 = 0;
seq__377142_377174 = G__377191;
chunk__377143_377175 = G__377192;
count__377144_377176 = G__377193;
i__377145_377177 = G__377194;
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
var G__377195__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__377146_377196 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__377147_377197 = null;var count__377148_377198 = 0;var i__377149_377199 = 0;while(true){
if((i__377149_377199 < count__377148_377198))
{var c_377200 = cljs.core._nth.call(null,chunk__377147_377197,i__377149_377199);add_class_BANG_.call(null,elem__$1,c_377200);
{
var G__377201 = seq__377146_377196;
var G__377202 = chunk__377147_377197;
var G__377203 = count__377148_377198;
var G__377204 = (i__377149_377199 + 1);
seq__377146_377196 = G__377201;
chunk__377147_377197 = G__377202;
count__377148_377198 = G__377203;
i__377149_377199 = G__377204;
continue;
}
} else
{var temp__4092__auto___377205 = cljs.core.seq.call(null,seq__377146_377196);if(temp__4092__auto___377205)
{var seq__377146_377206__$1 = temp__4092__auto___377205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377146_377206__$1))
{var c__14708__auto___377207 = cljs.core.chunk_first.call(null,seq__377146_377206__$1);{
var G__377208 = cljs.core.chunk_rest.call(null,seq__377146_377206__$1);
var G__377209 = c__14708__auto___377207;
var G__377210 = cljs.core.count.call(null,c__14708__auto___377207);
var G__377211 = 0;
seq__377146_377196 = G__377208;
chunk__377147_377197 = G__377209;
count__377148_377198 = G__377210;
i__377149_377199 = G__377211;
continue;
}
} else
{var c_377212 = cljs.core.first.call(null,seq__377146_377206__$1);add_class_BANG_.call(null,elem__$1,c_377212);
{
var G__377213 = cljs.core.next.call(null,seq__377146_377206__$1);
var G__377214 = null;
var G__377215 = 0;
var G__377216 = 0;
seq__377146_377196 = G__377213;
chunk__377147_377197 = G__377214;
count__377148_377198 = G__377215;
i__377149_377199 = G__377216;
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
var G__377195 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__377195__delegate.call(this,elem,classes,more_classes);};
G__377195.cljs$lang$maxFixedArity = 2;
G__377195.cljs$lang$applyTo = (function (arglist__377217){
var elem = cljs.core.first(arglist__377217);
arglist__377217 = cljs.core.next(arglist__377217);
var classes = cljs.core.first(arglist__377217);
var more_classes = cljs.core.rest(arglist__377217);
return G__377195__delegate(elem,classes,more_classes);
});
G__377195.cljs$core$IFn$_invoke$arity$variadic = G__377195__delegate;
return G__377195;
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
var G__377218 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__377218;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___377227 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___377227))
{var class_list_377228 = temp__4090__auto___377227;class_list_377228.remove(class$__$1);
} else
{var class_name_377229 = elem__$1.className;var new_class_name_377230 = dommy.attrs.remove_class_str.call(null,class_name_377229,class$__$1);if((class_name_377229 === new_class_name_377230))
{} else
{elem__$1.className = new_class_name_377230;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__377231__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__377223 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__377224 = null;var count__377225 = 0;var i__377226 = 0;while(true){
if((i__377226 < count__377225))
{var c = cljs.core._nth.call(null,chunk__377224,i__377226);remove_class_BANG_.call(null,elem__$1,c);
{
var G__377232 = seq__377223;
var G__377233 = chunk__377224;
var G__377234 = count__377225;
var G__377235 = (i__377226 + 1);
seq__377223 = G__377232;
chunk__377224 = G__377233;
count__377225 = G__377234;
i__377226 = G__377235;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__377223);if(temp__4092__auto__)
{var seq__377223__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377223__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__377223__$1);{
var G__377236 = cljs.core.chunk_rest.call(null,seq__377223__$1);
var G__377237 = c__14708__auto__;
var G__377238 = cljs.core.count.call(null,c__14708__auto__);
var G__377239 = 0;
seq__377223 = G__377236;
chunk__377224 = G__377237;
count__377225 = G__377238;
i__377226 = G__377239;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__377223__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__377240 = cljs.core.next.call(null,seq__377223__$1);
var G__377241 = null;
var G__377242 = 0;
var G__377243 = 0;
seq__377223 = G__377240;
chunk__377224 = G__377241;
count__377225 = G__377242;
i__377226 = G__377243;
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
var G__377231 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__377231__delegate.call(this,elem,class$,classes);};
G__377231.cljs$lang$maxFixedArity = 2;
G__377231.cljs$lang$applyTo = (function (arglist__377244){
var elem = cljs.core.first(arglist__377244);
arglist__377244 = cljs.core.next(arglist__377244);
var class$ = cljs.core.first(arglist__377244);
var classes = cljs.core.rest(arglist__377244);
return G__377231__delegate(elem,class$,classes);
});
G__377231.cljs$core$IFn$_invoke$arity$variadic = G__377231__delegate;
return G__377231;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___377245 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___377245))
{var class_list_377246 = temp__4090__auto___377245;class_list_377246.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__377249){var vec__377250 = p__377249;var k = cljs.core.nth.call(null,vec__377250,0,null);var v = cljs.core.nth.call(null,vec__377250,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__377257_377263 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__377258_377264 = null;var count__377259_377265 = 0;var i__377260_377266 = 0;while(true){
if((i__377260_377266 < count__377259_377265))
{var vec__377261_377267 = cljs.core._nth.call(null,chunk__377258_377264,i__377260_377266);var k_377268 = cljs.core.nth.call(null,vec__377261_377267,0,null);var v_377269 = cljs.core.nth.call(null,vec__377261_377267,1,null);(style[cljs.core.name.call(null,k_377268)] = v_377269);
{
var G__377270 = seq__377257_377263;
var G__377271 = chunk__377258_377264;
var G__377272 = count__377259_377265;
var G__377273 = (i__377260_377266 + 1);
seq__377257_377263 = G__377270;
chunk__377258_377264 = G__377271;
count__377259_377265 = G__377272;
i__377260_377266 = G__377273;
continue;
}
} else
{var temp__4092__auto___377274 = cljs.core.seq.call(null,seq__377257_377263);if(temp__4092__auto___377274)
{var seq__377257_377275__$1 = temp__4092__auto___377274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377257_377275__$1))
{var c__14708__auto___377276 = cljs.core.chunk_first.call(null,seq__377257_377275__$1);{
var G__377277 = cljs.core.chunk_rest.call(null,seq__377257_377275__$1);
var G__377278 = c__14708__auto___377276;
var G__377279 = cljs.core.count.call(null,c__14708__auto___377276);
var G__377280 = 0;
seq__377257_377263 = G__377277;
chunk__377258_377264 = G__377278;
count__377259_377265 = G__377279;
i__377260_377266 = G__377280;
continue;
}
} else
{var vec__377262_377281 = cljs.core.first.call(null,seq__377257_377275__$1);var k_377282 = cljs.core.nth.call(null,vec__377262_377281,0,null);var v_377283 = cljs.core.nth.call(null,vec__377262_377281,1,null);(style[cljs.core.name.call(null,k_377282)] = v_377283);
{
var G__377284 = cljs.core.next.call(null,seq__377257_377275__$1);
var G__377285 = null;
var G__377286 = 0;
var G__377287 = 0;
seq__377257_377263 = G__377284;
chunk__377258_377264 = G__377285;
count__377259_377265 = G__377286;
i__377260_377266 = G__377287;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__377288){
var elem = cljs.core.first(arglist__377288);
var kvs = cljs.core.rest(arglist__377288);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__377295_377301 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__377296_377302 = null;var count__377297_377303 = 0;var i__377298_377304 = 0;while(true){
if((i__377298_377304 < count__377297_377303))
{var vec__377299_377305 = cljs.core._nth.call(null,chunk__377296_377302,i__377298_377304);var k_377306 = cljs.core.nth.call(null,vec__377299_377305,0,null);var v_377307 = cljs.core.nth.call(null,vec__377299_377305,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_377306,[cljs.core.str(v_377307),cljs.core.str("px")].join(''));
{
var G__377308 = seq__377295_377301;
var G__377309 = chunk__377296_377302;
var G__377310 = count__377297_377303;
var G__377311 = (i__377298_377304 + 1);
seq__377295_377301 = G__377308;
chunk__377296_377302 = G__377309;
count__377297_377303 = G__377310;
i__377298_377304 = G__377311;
continue;
}
} else
{var temp__4092__auto___377312 = cljs.core.seq.call(null,seq__377295_377301);if(temp__4092__auto___377312)
{var seq__377295_377313__$1 = temp__4092__auto___377312;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377295_377313__$1))
{var c__14708__auto___377314 = cljs.core.chunk_first.call(null,seq__377295_377313__$1);{
var G__377315 = cljs.core.chunk_rest.call(null,seq__377295_377313__$1);
var G__377316 = c__14708__auto___377314;
var G__377317 = cljs.core.count.call(null,c__14708__auto___377314);
var G__377318 = 0;
seq__377295_377301 = G__377315;
chunk__377296_377302 = G__377316;
count__377297_377303 = G__377317;
i__377298_377304 = G__377318;
continue;
}
} else
{var vec__377300_377319 = cljs.core.first.call(null,seq__377295_377313__$1);var k_377320 = cljs.core.nth.call(null,vec__377300_377319,0,null);var v_377321 = cljs.core.nth.call(null,vec__377300_377319,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_377320,[cljs.core.str(v_377321),cljs.core.str("px")].join(''));
{
var G__377322 = cljs.core.next.call(null,seq__377295_377313__$1);
var G__377323 = null;
var G__377324 = 0;
var G__377325 = 0;
seq__377295_377301 = G__377322;
chunk__377296_377302 = G__377323;
count__377297_377303 = G__377324;
i__377298_377304 = G__377325;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__377326){
var elem = cljs.core.first(arglist__377326);
var kvs = cljs.core.rest(arglist__377326);
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
{var G__377335 = dommy.template.__GT_node_like.call(null,elem);(G__377335[cljs.core.name.call(null,k)] = v);
return G__377335;
} else
{var G__377336 = dommy.template.__GT_node_like.call(null,elem);G__377336.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__377336;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__377343__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__377337_377344 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__377338_377345 = null;var count__377339_377346 = 0;var i__377340_377347 = 0;while(true){
if((i__377340_377347 < count__377339_377346))
{var vec__377341_377348 = cljs.core._nth.call(null,chunk__377338_377345,i__377340_377347);var k_377349__$1 = cljs.core.nth.call(null,vec__377341_377348,0,null);var v_377350__$1 = cljs.core.nth.call(null,vec__377341_377348,1,null);set_attr_BANG_.call(null,elem__$1,k_377349__$1,v_377350__$1);
{
var G__377351 = seq__377337_377344;
var G__377352 = chunk__377338_377345;
var G__377353 = count__377339_377346;
var G__377354 = (i__377340_377347 + 1);
seq__377337_377344 = G__377351;
chunk__377338_377345 = G__377352;
count__377339_377346 = G__377353;
i__377340_377347 = G__377354;
continue;
}
} else
{var temp__4092__auto___377355 = cljs.core.seq.call(null,seq__377337_377344);if(temp__4092__auto___377355)
{var seq__377337_377356__$1 = temp__4092__auto___377355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377337_377356__$1))
{var c__14708__auto___377357 = cljs.core.chunk_first.call(null,seq__377337_377356__$1);{
var G__377358 = cljs.core.chunk_rest.call(null,seq__377337_377356__$1);
var G__377359 = c__14708__auto___377357;
var G__377360 = cljs.core.count.call(null,c__14708__auto___377357);
var G__377361 = 0;
seq__377337_377344 = G__377358;
chunk__377338_377345 = G__377359;
count__377339_377346 = G__377360;
i__377340_377347 = G__377361;
continue;
}
} else
{var vec__377342_377362 = cljs.core.first.call(null,seq__377337_377356__$1);var k_377363__$1 = cljs.core.nth.call(null,vec__377342_377362,0,null);var v_377364__$1 = cljs.core.nth.call(null,vec__377342_377362,1,null);set_attr_BANG_.call(null,elem__$1,k_377363__$1,v_377364__$1);
{
var G__377365 = cljs.core.next.call(null,seq__377337_377356__$1);
var G__377366 = null;
var G__377367 = 0;
var G__377368 = 0;
seq__377337_377344 = G__377365;
chunk__377338_377345 = G__377366;
count__377339_377346 = G__377367;
i__377340_377347 = G__377368;
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
var G__377343 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__377343__delegate.call(this,elem,k,v,kvs);};
G__377343.cljs$lang$maxFixedArity = 3;
G__377343.cljs$lang$applyTo = (function (arglist__377369){
var elem = cljs.core.first(arglist__377369);
arglist__377369 = cljs.core.next(arglist__377369);
var k = cljs.core.first(arglist__377369);
arglist__377369 = cljs.core.next(arglist__377369);
var v = cljs.core.first(arglist__377369);
var kvs = cljs.core.rest(arglist__377369);
return G__377343__delegate(elem,k,v,kvs);
});
G__377343.cljs$core$IFn$_invoke$arity$variadic = G__377343__delegate;
return G__377343;
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
var G__377378__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__377374_377379 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__377375_377380 = null;var count__377376_377381 = 0;var i__377377_377382 = 0;while(true){
if((i__377377_377382 < count__377376_377381))
{var k_377383__$1 = cljs.core._nth.call(null,chunk__377375_377380,i__377377_377382);remove_attr_BANG_.call(null,elem__$1,k_377383__$1);
{
var G__377384 = seq__377374_377379;
var G__377385 = chunk__377375_377380;
var G__377386 = count__377376_377381;
var G__377387 = (i__377377_377382 + 1);
seq__377374_377379 = G__377384;
chunk__377375_377380 = G__377385;
count__377376_377381 = G__377386;
i__377377_377382 = G__377387;
continue;
}
} else
{var temp__4092__auto___377388 = cljs.core.seq.call(null,seq__377374_377379);if(temp__4092__auto___377388)
{var seq__377374_377389__$1 = temp__4092__auto___377388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377374_377389__$1))
{var c__14708__auto___377390 = cljs.core.chunk_first.call(null,seq__377374_377389__$1);{
var G__377391 = cljs.core.chunk_rest.call(null,seq__377374_377389__$1);
var G__377392 = c__14708__auto___377390;
var G__377393 = cljs.core.count.call(null,c__14708__auto___377390);
var G__377394 = 0;
seq__377374_377379 = G__377391;
chunk__377375_377380 = G__377392;
count__377376_377381 = G__377393;
i__377377_377382 = G__377394;
continue;
}
} else
{var k_377395__$1 = cljs.core.first.call(null,seq__377374_377389__$1);remove_attr_BANG_.call(null,elem__$1,k_377395__$1);
{
var G__377396 = cljs.core.next.call(null,seq__377374_377389__$1);
var G__377397 = null;
var G__377398 = 0;
var G__377399 = 0;
seq__377374_377379 = G__377396;
chunk__377375_377380 = G__377397;
count__377376_377381 = G__377398;
i__377377_377382 = G__377399;
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
var G__377378 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__377378__delegate.call(this,elem,k,ks);};
G__377378.cljs$lang$maxFixedArity = 2;
G__377378.cljs$lang$applyTo = (function (arglist__377400){
var elem = cljs.core.first(arglist__377400);
arglist__377400 = cljs.core.next(arglist__377400);
var k = cljs.core.first(arglist__377400);
var ks = cljs.core.rest(arglist__377400);
return G__377378__delegate(elem,k,ks);
});
G__377378.cljs$core$IFn$_invoke$arity$variadic = G__377378__delegate;
return G__377378;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__377402 = dommy.template.__GT_node_like.call(null,elem);G__377402.style.display = ((show_QMARK_)?"":"none");
return G__377402;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__377404 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__377404,false);
return G__377404;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__377406 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__377406,true);
return G__377406;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__377408 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__377408["constructor"] = Object);
return G__377408;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map