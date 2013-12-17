// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__7816__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__7816__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__7816__auto__;
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
var G__21117 = (i + class$.length);
start_from = G__21117;
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
{var temp__4090__auto___21142 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21142))
{var class_list_21143 = temp__4090__auto___21142;var seq__21130_21144 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__21131_21145 = null;var count__21132_21146 = 0;var i__21133_21147 = 0;while(true){
if((i__21133_21147 < count__21132_21146))
{var class_21148 = cljs.core._nth.call(null,chunk__21131_21145,i__21133_21147);class_list_21143.add(class_21148);
{
var G__21149 = seq__21130_21144;
var G__21150 = chunk__21131_21145;
var G__21151 = count__21132_21146;
var G__21152 = (i__21133_21147 + 1);
seq__21130_21144 = G__21149;
chunk__21131_21145 = G__21150;
count__21132_21146 = G__21151;
i__21133_21147 = G__21152;
continue;
}
} else
{var temp__4092__auto___21153 = cljs.core.seq.call(null,seq__21130_21144);if(temp__4092__auto___21153)
{var seq__21130_21154__$1 = temp__4092__auto___21153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21130_21154__$1))
{var c__8552__auto___21155 = cljs.core.chunk_first.call(null,seq__21130_21154__$1);{
var G__21156 = cljs.core.chunk_rest.call(null,seq__21130_21154__$1);
var G__21157 = c__8552__auto___21155;
var G__21158 = cljs.core.count.call(null,c__8552__auto___21155);
var G__21159 = 0;
seq__21130_21144 = G__21156;
chunk__21131_21145 = G__21157;
count__21132_21146 = G__21158;
i__21133_21147 = G__21159;
continue;
}
} else
{var class_21160 = cljs.core.first.call(null,seq__21130_21154__$1);class_list_21143.add(class_21160);
{
var G__21161 = cljs.core.next.call(null,seq__21130_21154__$1);
var G__21162 = null;
var G__21163 = 0;
var G__21164 = 0;
seq__21130_21144 = G__21161;
chunk__21131_21145 = G__21162;
count__21132_21146 = G__21163;
i__21133_21147 = G__21164;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_21165 = elem__$1.className;var seq__21134_21166 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__21135_21167 = null;var count__21136_21168 = 0;var i__21137_21169 = 0;while(true){
if((i__21137_21169 < count__21136_21168))
{var class_21170 = cljs.core._nth.call(null,chunk__21135_21167,i__21137_21169);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_21165,class_21170)))
{} else
{elem__$1.className = (((class_name_21165 === ""))?class_21170:[cljs.core.str(class_name_21165),cljs.core.str(" "),cljs.core.str(class_21170)].join(''));
}
{
var G__21171 = seq__21134_21166;
var G__21172 = chunk__21135_21167;
var G__21173 = count__21136_21168;
var G__21174 = (i__21137_21169 + 1);
seq__21134_21166 = G__21171;
chunk__21135_21167 = G__21172;
count__21136_21168 = G__21173;
i__21137_21169 = G__21174;
continue;
}
} else
{var temp__4092__auto___21175 = cljs.core.seq.call(null,seq__21134_21166);if(temp__4092__auto___21175)
{var seq__21134_21176__$1 = temp__4092__auto___21175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21134_21176__$1))
{var c__8552__auto___21177 = cljs.core.chunk_first.call(null,seq__21134_21176__$1);{
var G__21178 = cljs.core.chunk_rest.call(null,seq__21134_21176__$1);
var G__21179 = c__8552__auto___21177;
var G__21180 = cljs.core.count.call(null,c__8552__auto___21177);
var G__21181 = 0;
seq__21134_21166 = G__21178;
chunk__21135_21167 = G__21179;
count__21136_21168 = G__21180;
i__21137_21169 = G__21181;
continue;
}
} else
{var class_21182 = cljs.core.first.call(null,seq__21134_21176__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_21165,class_21182)))
{} else
{elem__$1.className = (((class_name_21165 === ""))?class_21182:[cljs.core.str(class_name_21165),cljs.core.str(" "),cljs.core.str(class_21182)].join(''));
}
{
var G__21183 = cljs.core.next.call(null,seq__21134_21176__$1);
var G__21184 = null;
var G__21185 = 0;
var G__21186 = 0;
seq__21134_21166 = G__21183;
chunk__21135_21167 = G__21184;
count__21136_21168 = G__21185;
i__21137_21169 = G__21186;
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
var G__21187__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21138_21188 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__21139_21189 = null;var count__21140_21190 = 0;var i__21141_21191 = 0;while(true){
if((i__21141_21191 < count__21140_21190))
{var c_21192 = cljs.core._nth.call(null,chunk__21139_21189,i__21141_21191);add_class_BANG_.call(null,elem__$1,c_21192);
{
var G__21193 = seq__21138_21188;
var G__21194 = chunk__21139_21189;
var G__21195 = count__21140_21190;
var G__21196 = (i__21141_21191 + 1);
seq__21138_21188 = G__21193;
chunk__21139_21189 = G__21194;
count__21140_21190 = G__21195;
i__21141_21191 = G__21196;
continue;
}
} else
{var temp__4092__auto___21197 = cljs.core.seq.call(null,seq__21138_21188);if(temp__4092__auto___21197)
{var seq__21138_21198__$1 = temp__4092__auto___21197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21138_21198__$1))
{var c__8552__auto___21199 = cljs.core.chunk_first.call(null,seq__21138_21198__$1);{
var G__21200 = cljs.core.chunk_rest.call(null,seq__21138_21198__$1);
var G__21201 = c__8552__auto___21199;
var G__21202 = cljs.core.count.call(null,c__8552__auto___21199);
var G__21203 = 0;
seq__21138_21188 = G__21200;
chunk__21139_21189 = G__21201;
count__21140_21190 = G__21202;
i__21141_21191 = G__21203;
continue;
}
} else
{var c_21204 = cljs.core.first.call(null,seq__21138_21198__$1);add_class_BANG_.call(null,elem__$1,c_21204);
{
var G__21205 = cljs.core.next.call(null,seq__21138_21198__$1);
var G__21206 = null;
var G__21207 = 0;
var G__21208 = 0;
seq__21138_21188 = G__21205;
chunk__21139_21189 = G__21206;
count__21140_21190 = G__21207;
i__21141_21191 = G__21208;
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
var G__21187 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21187__delegate.call(this,elem,classes,more_classes);};
G__21187.cljs$lang$maxFixedArity = 2;
G__21187.cljs$lang$applyTo = (function (arglist__21209){
var elem = cljs.core.first(arglist__21209);
arglist__21209 = cljs.core.next(arglist__21209);
var classes = cljs.core.first(arglist__21209);
var more_classes = cljs.core.rest(arglist__21209);
return G__21187__delegate(elem,classes,more_classes);
});
G__21187.cljs$core$IFn$_invoke$arity$variadic = G__21187__delegate;
return G__21187;
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
var G__21210 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__21210;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21219 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21219))
{var class_list_21220 = temp__4090__auto___21219;class_list_21220.remove(class$__$1);
} else
{var class_name_21221 = elem__$1.className;var new_class_name_21222 = dommy.attrs.remove_class_str.call(null,class_name_21221,class$__$1);if((class_name_21221 === new_class_name_21222))
{} else
{elem__$1.className = new_class_name_21222;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__21223__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21215 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__21216 = null;var count__21217 = 0;var i__21218 = 0;while(true){
if((i__21218 < count__21217))
{var c = cljs.core._nth.call(null,chunk__21216,i__21218);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21224 = seq__21215;
var G__21225 = chunk__21216;
var G__21226 = count__21217;
var G__21227 = (i__21218 + 1);
seq__21215 = G__21224;
chunk__21216 = G__21225;
count__21217 = G__21226;
i__21218 = G__21227;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__21215);if(temp__4092__auto__)
{var seq__21215__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21215__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__21215__$1);{
var G__21228 = cljs.core.chunk_rest.call(null,seq__21215__$1);
var G__21229 = c__8552__auto__;
var G__21230 = cljs.core.count.call(null,c__8552__auto__);
var G__21231 = 0;
seq__21215 = G__21228;
chunk__21216 = G__21229;
count__21217 = G__21230;
i__21218 = G__21231;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__21215__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__21232 = cljs.core.next.call(null,seq__21215__$1);
var G__21233 = null;
var G__21234 = 0;
var G__21235 = 0;
seq__21215 = G__21232;
chunk__21216 = G__21233;
count__21217 = G__21234;
i__21218 = G__21235;
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
var G__21223 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21223__delegate.call(this,elem,class$,classes);};
G__21223.cljs$lang$maxFixedArity = 2;
G__21223.cljs$lang$applyTo = (function (arglist__21236){
var elem = cljs.core.first(arglist__21236);
arglist__21236 = cljs.core.next(arglist__21236);
var class$ = cljs.core.first(arglist__21236);
var classes = cljs.core.rest(arglist__21236);
return G__21223__delegate(elem,class$,classes);
});
G__21223.cljs$core$IFn$_invoke$arity$variadic = G__21223__delegate;
return G__21223;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___21237 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___21237))
{var class_list_21238 = temp__4090__auto___21237;class_list_21238.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__21241){var vec__21242 = p__21241;var k = cljs.core.nth.call(null,vec__21242,0,null);var v = cljs.core.nth.call(null,vec__21242,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__21249_21255 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21250_21256 = null;var count__21251_21257 = 0;var i__21252_21258 = 0;while(true){
if((i__21252_21258 < count__21251_21257))
{var vec__21253_21259 = cljs.core._nth.call(null,chunk__21250_21256,i__21252_21258);var k_21260 = cljs.core.nth.call(null,vec__21253_21259,0,null);var v_21261 = cljs.core.nth.call(null,vec__21253_21259,1,null);(style[cljs.core.name.call(null,k_21260)] = v_21261);
{
var G__21262 = seq__21249_21255;
var G__21263 = chunk__21250_21256;
var G__21264 = count__21251_21257;
var G__21265 = (i__21252_21258 + 1);
seq__21249_21255 = G__21262;
chunk__21250_21256 = G__21263;
count__21251_21257 = G__21264;
i__21252_21258 = G__21265;
continue;
}
} else
{var temp__4092__auto___21266 = cljs.core.seq.call(null,seq__21249_21255);if(temp__4092__auto___21266)
{var seq__21249_21267__$1 = temp__4092__auto___21266;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21249_21267__$1))
{var c__8552__auto___21268 = cljs.core.chunk_first.call(null,seq__21249_21267__$1);{
var G__21269 = cljs.core.chunk_rest.call(null,seq__21249_21267__$1);
var G__21270 = c__8552__auto___21268;
var G__21271 = cljs.core.count.call(null,c__8552__auto___21268);
var G__21272 = 0;
seq__21249_21255 = G__21269;
chunk__21250_21256 = G__21270;
count__21251_21257 = G__21271;
i__21252_21258 = G__21272;
continue;
}
} else
{var vec__21254_21273 = cljs.core.first.call(null,seq__21249_21267__$1);var k_21274 = cljs.core.nth.call(null,vec__21254_21273,0,null);var v_21275 = cljs.core.nth.call(null,vec__21254_21273,1,null);(style[cljs.core.name.call(null,k_21274)] = v_21275);
{
var G__21276 = cljs.core.next.call(null,seq__21249_21267__$1);
var G__21277 = null;
var G__21278 = 0;
var G__21279 = 0;
seq__21249_21255 = G__21276;
chunk__21250_21256 = G__21277;
count__21251_21257 = G__21278;
i__21252_21258 = G__21279;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21280){
var elem = cljs.core.first(arglist__21280);
var kvs = cljs.core.rest(arglist__21280);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21287_21293 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__21288_21294 = null;var count__21289_21295 = 0;var i__21290_21296 = 0;while(true){
if((i__21290_21296 < count__21289_21295))
{var vec__21291_21297 = cljs.core._nth.call(null,chunk__21288_21294,i__21290_21296);var k_21298 = cljs.core.nth.call(null,vec__21291_21297,0,null);var v_21299 = cljs.core.nth.call(null,vec__21291_21297,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21298,[cljs.core.str(v_21299),cljs.core.str("px")].join(''));
{
var G__21300 = seq__21287_21293;
var G__21301 = chunk__21288_21294;
var G__21302 = count__21289_21295;
var G__21303 = (i__21290_21296 + 1);
seq__21287_21293 = G__21300;
chunk__21288_21294 = G__21301;
count__21289_21295 = G__21302;
i__21290_21296 = G__21303;
continue;
}
} else
{var temp__4092__auto___21304 = cljs.core.seq.call(null,seq__21287_21293);if(temp__4092__auto___21304)
{var seq__21287_21305__$1 = temp__4092__auto___21304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21287_21305__$1))
{var c__8552__auto___21306 = cljs.core.chunk_first.call(null,seq__21287_21305__$1);{
var G__21307 = cljs.core.chunk_rest.call(null,seq__21287_21305__$1);
var G__21308 = c__8552__auto___21306;
var G__21309 = cljs.core.count.call(null,c__8552__auto___21306);
var G__21310 = 0;
seq__21287_21293 = G__21307;
chunk__21288_21294 = G__21308;
count__21289_21295 = G__21309;
i__21290_21296 = G__21310;
continue;
}
} else
{var vec__21292_21311 = cljs.core.first.call(null,seq__21287_21305__$1);var k_21312 = cljs.core.nth.call(null,vec__21292_21311,0,null);var v_21313 = cljs.core.nth.call(null,vec__21292_21311,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_21312,[cljs.core.str(v_21313),cljs.core.str("px")].join(''));
{
var G__21314 = cljs.core.next.call(null,seq__21287_21305__$1);
var G__21315 = null;
var G__21316 = 0;
var G__21317 = 0;
seq__21287_21293 = G__21314;
chunk__21288_21294 = G__21315;
count__21289_21295 = G__21316;
i__21290_21296 = G__21317;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__21318){
var elem = cljs.core.first(arglist__21318);
var kvs = cljs.core.rest(arglist__21318);
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
{var G__21327 = dommy.template.__GT_node_like.call(null,elem);(G__21327[cljs.core.name.call(null,k)] = v);
return G__21327;
} else
{var G__21328 = dommy.template.__GT_node_like.call(null,elem);G__21328.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__21328;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__21335__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21329_21336 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__21330_21337 = null;var count__21331_21338 = 0;var i__21332_21339 = 0;while(true){
if((i__21332_21339 < count__21331_21338))
{var vec__21333_21340 = cljs.core._nth.call(null,chunk__21330_21337,i__21332_21339);var k_21341__$1 = cljs.core.nth.call(null,vec__21333_21340,0,null);var v_21342__$1 = cljs.core.nth.call(null,vec__21333_21340,1,null);set_attr_BANG_.call(null,elem__$1,k_21341__$1,v_21342__$1);
{
var G__21343 = seq__21329_21336;
var G__21344 = chunk__21330_21337;
var G__21345 = count__21331_21338;
var G__21346 = (i__21332_21339 + 1);
seq__21329_21336 = G__21343;
chunk__21330_21337 = G__21344;
count__21331_21338 = G__21345;
i__21332_21339 = G__21346;
continue;
}
} else
{var temp__4092__auto___21347 = cljs.core.seq.call(null,seq__21329_21336);if(temp__4092__auto___21347)
{var seq__21329_21348__$1 = temp__4092__auto___21347;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21329_21348__$1))
{var c__8552__auto___21349 = cljs.core.chunk_first.call(null,seq__21329_21348__$1);{
var G__21350 = cljs.core.chunk_rest.call(null,seq__21329_21348__$1);
var G__21351 = c__8552__auto___21349;
var G__21352 = cljs.core.count.call(null,c__8552__auto___21349);
var G__21353 = 0;
seq__21329_21336 = G__21350;
chunk__21330_21337 = G__21351;
count__21331_21338 = G__21352;
i__21332_21339 = G__21353;
continue;
}
} else
{var vec__21334_21354 = cljs.core.first.call(null,seq__21329_21348__$1);var k_21355__$1 = cljs.core.nth.call(null,vec__21334_21354,0,null);var v_21356__$1 = cljs.core.nth.call(null,vec__21334_21354,1,null);set_attr_BANG_.call(null,elem__$1,k_21355__$1,v_21356__$1);
{
var G__21357 = cljs.core.next.call(null,seq__21329_21348__$1);
var G__21358 = null;
var G__21359 = 0;
var G__21360 = 0;
seq__21329_21336 = G__21357;
chunk__21330_21337 = G__21358;
count__21331_21338 = G__21359;
i__21332_21339 = G__21360;
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
var G__21335 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__21335__delegate.call(this,elem,k,v,kvs);};
G__21335.cljs$lang$maxFixedArity = 3;
G__21335.cljs$lang$applyTo = (function (arglist__21361){
var elem = cljs.core.first(arglist__21361);
arglist__21361 = cljs.core.next(arglist__21361);
var k = cljs.core.first(arglist__21361);
arglist__21361 = cljs.core.next(arglist__21361);
var v = cljs.core.first(arglist__21361);
var kvs = cljs.core.rest(arglist__21361);
return G__21335__delegate(elem,k,v,kvs);
});
G__21335.cljs$core$IFn$_invoke$arity$variadic = G__21335__delegate;
return G__21335;
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
var G__21370__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__21366_21371 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__21367_21372 = null;var count__21368_21373 = 0;var i__21369_21374 = 0;while(true){
if((i__21369_21374 < count__21368_21373))
{var k_21375__$1 = cljs.core._nth.call(null,chunk__21367_21372,i__21369_21374);remove_attr_BANG_.call(null,elem__$1,k_21375__$1);
{
var G__21376 = seq__21366_21371;
var G__21377 = chunk__21367_21372;
var G__21378 = count__21368_21373;
var G__21379 = (i__21369_21374 + 1);
seq__21366_21371 = G__21376;
chunk__21367_21372 = G__21377;
count__21368_21373 = G__21378;
i__21369_21374 = G__21379;
continue;
}
} else
{var temp__4092__auto___21380 = cljs.core.seq.call(null,seq__21366_21371);if(temp__4092__auto___21380)
{var seq__21366_21381__$1 = temp__4092__auto___21380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21366_21381__$1))
{var c__8552__auto___21382 = cljs.core.chunk_first.call(null,seq__21366_21381__$1);{
var G__21383 = cljs.core.chunk_rest.call(null,seq__21366_21381__$1);
var G__21384 = c__8552__auto___21382;
var G__21385 = cljs.core.count.call(null,c__8552__auto___21382);
var G__21386 = 0;
seq__21366_21371 = G__21383;
chunk__21367_21372 = G__21384;
count__21368_21373 = G__21385;
i__21369_21374 = G__21386;
continue;
}
} else
{var k_21387__$1 = cljs.core.first.call(null,seq__21366_21381__$1);remove_attr_BANG_.call(null,elem__$1,k_21387__$1);
{
var G__21388 = cljs.core.next.call(null,seq__21366_21381__$1);
var G__21389 = null;
var G__21390 = 0;
var G__21391 = 0;
seq__21366_21371 = G__21388;
chunk__21367_21372 = G__21389;
count__21368_21373 = G__21390;
i__21369_21374 = G__21391;
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
var G__21370 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__21370__delegate.call(this,elem,k,ks);};
G__21370.cljs$lang$maxFixedArity = 2;
G__21370.cljs$lang$applyTo = (function (arglist__21392){
var elem = cljs.core.first(arglist__21392);
arglist__21392 = cljs.core.next(arglist__21392);
var k = cljs.core.first(arglist__21392);
var ks = cljs.core.rest(arglist__21392);
return G__21370__delegate(elem,k,ks);
});
G__21370.cljs$core$IFn$_invoke$arity$variadic = G__21370__delegate;
return G__21370;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__21394 = dommy.template.__GT_node_like.call(null,elem);G__21394.style.display = ((show_QMARK_)?"":"none");
return G__21394;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__21396 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21396,false);
return G__21396;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__21398 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__21398,true);
return G__21398;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__21400 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__21400["constructor"] = Object);
return G__21400;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
