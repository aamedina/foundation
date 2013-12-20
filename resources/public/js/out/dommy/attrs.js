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
var G__405105 = (i + class$.length);
start_from = G__405105;
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
{var temp__4090__auto___405130 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___405130))
{var class_list_405131 = temp__4090__auto___405130;var seq__405118_405132 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__405119_405133 = null;var count__405120_405134 = 0;var i__405121_405135 = 0;while(true){
if((i__405121_405135 < count__405120_405134))
{var class_405136 = cljs.core._nth.call(null,chunk__405119_405133,i__405121_405135);class_list_405131.add(class_405136);
{
var G__405137 = seq__405118_405132;
var G__405138 = chunk__405119_405133;
var G__405139 = count__405120_405134;
var G__405140 = (i__405121_405135 + 1);
seq__405118_405132 = G__405137;
chunk__405119_405133 = G__405138;
count__405120_405134 = G__405139;
i__405121_405135 = G__405140;
continue;
}
} else
{var temp__4092__auto___405141 = cljs.core.seq.call(null,seq__405118_405132);if(temp__4092__auto___405141)
{var seq__405118_405142__$1 = temp__4092__auto___405141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405118_405142__$1))
{var c__8952__auto___405143 = cljs.core.chunk_first.call(null,seq__405118_405142__$1);{
var G__405144 = cljs.core.chunk_rest.call(null,seq__405118_405142__$1);
var G__405145 = c__8952__auto___405143;
var G__405146 = cljs.core.count.call(null,c__8952__auto___405143);
var G__405147 = 0;
seq__405118_405132 = G__405144;
chunk__405119_405133 = G__405145;
count__405120_405134 = G__405146;
i__405121_405135 = G__405147;
continue;
}
} else
{var class_405148 = cljs.core.first.call(null,seq__405118_405142__$1);class_list_405131.add(class_405148);
{
var G__405149 = cljs.core.next.call(null,seq__405118_405142__$1);
var G__405150 = null;
var G__405151 = 0;
var G__405152 = 0;
seq__405118_405132 = G__405149;
chunk__405119_405133 = G__405150;
count__405120_405134 = G__405151;
i__405121_405135 = G__405152;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_405153 = elem__$1.className;var seq__405122_405154 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__405123_405155 = null;var count__405124_405156 = 0;var i__405125_405157 = 0;while(true){
if((i__405125_405157 < count__405124_405156))
{var class_405158 = cljs.core._nth.call(null,chunk__405123_405155,i__405125_405157);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_405153,class_405158)))
{} else
{elem__$1.className = (((class_name_405153 === ""))?class_405158:[cljs.core.str(class_name_405153),cljs.core.str(" "),cljs.core.str(class_405158)].join(''));
}
{
var G__405159 = seq__405122_405154;
var G__405160 = chunk__405123_405155;
var G__405161 = count__405124_405156;
var G__405162 = (i__405125_405157 + 1);
seq__405122_405154 = G__405159;
chunk__405123_405155 = G__405160;
count__405124_405156 = G__405161;
i__405125_405157 = G__405162;
continue;
}
} else
{var temp__4092__auto___405163 = cljs.core.seq.call(null,seq__405122_405154);if(temp__4092__auto___405163)
{var seq__405122_405164__$1 = temp__4092__auto___405163;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405122_405164__$1))
{var c__8952__auto___405165 = cljs.core.chunk_first.call(null,seq__405122_405164__$1);{
var G__405166 = cljs.core.chunk_rest.call(null,seq__405122_405164__$1);
var G__405167 = c__8952__auto___405165;
var G__405168 = cljs.core.count.call(null,c__8952__auto___405165);
var G__405169 = 0;
seq__405122_405154 = G__405166;
chunk__405123_405155 = G__405167;
count__405124_405156 = G__405168;
i__405125_405157 = G__405169;
continue;
}
} else
{var class_405170 = cljs.core.first.call(null,seq__405122_405164__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_405153,class_405170)))
{} else
{elem__$1.className = (((class_name_405153 === ""))?class_405170:[cljs.core.str(class_name_405153),cljs.core.str(" "),cljs.core.str(class_405170)].join(''));
}
{
var G__405171 = cljs.core.next.call(null,seq__405122_405164__$1);
var G__405172 = null;
var G__405173 = 0;
var G__405174 = 0;
seq__405122_405154 = G__405171;
chunk__405123_405155 = G__405172;
count__405124_405156 = G__405173;
i__405125_405157 = G__405174;
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
var G__405175__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__405126_405176 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__405127_405177 = null;var count__405128_405178 = 0;var i__405129_405179 = 0;while(true){
if((i__405129_405179 < count__405128_405178))
{var c_405180 = cljs.core._nth.call(null,chunk__405127_405177,i__405129_405179);add_class_BANG_.call(null,elem__$1,c_405180);
{
var G__405181 = seq__405126_405176;
var G__405182 = chunk__405127_405177;
var G__405183 = count__405128_405178;
var G__405184 = (i__405129_405179 + 1);
seq__405126_405176 = G__405181;
chunk__405127_405177 = G__405182;
count__405128_405178 = G__405183;
i__405129_405179 = G__405184;
continue;
}
} else
{var temp__4092__auto___405185 = cljs.core.seq.call(null,seq__405126_405176);if(temp__4092__auto___405185)
{var seq__405126_405186__$1 = temp__4092__auto___405185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405126_405186__$1))
{var c__8952__auto___405187 = cljs.core.chunk_first.call(null,seq__405126_405186__$1);{
var G__405188 = cljs.core.chunk_rest.call(null,seq__405126_405186__$1);
var G__405189 = c__8952__auto___405187;
var G__405190 = cljs.core.count.call(null,c__8952__auto___405187);
var G__405191 = 0;
seq__405126_405176 = G__405188;
chunk__405127_405177 = G__405189;
count__405128_405178 = G__405190;
i__405129_405179 = G__405191;
continue;
}
} else
{var c_405192 = cljs.core.first.call(null,seq__405126_405186__$1);add_class_BANG_.call(null,elem__$1,c_405192);
{
var G__405193 = cljs.core.next.call(null,seq__405126_405186__$1);
var G__405194 = null;
var G__405195 = 0;
var G__405196 = 0;
seq__405126_405176 = G__405193;
chunk__405127_405177 = G__405194;
count__405128_405178 = G__405195;
i__405129_405179 = G__405196;
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
var G__405175 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__405175__delegate.call(this,elem,classes,more_classes);};
G__405175.cljs$lang$maxFixedArity = 2;
G__405175.cljs$lang$applyTo = (function (arglist__405197){
var elem = cljs.core.first(arglist__405197);
arglist__405197 = cljs.core.next(arglist__405197);
var classes = cljs.core.first(arglist__405197);
var more_classes = cljs.core.rest(arglist__405197);
return G__405175__delegate(elem,classes,more_classes);
});
G__405175.cljs$core$IFn$_invoke$arity$variadic = G__405175__delegate;
return G__405175;
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
var G__405198 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__405198;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___405207 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___405207))
{var class_list_405208 = temp__4090__auto___405207;class_list_405208.remove(class$__$1);
} else
{var class_name_405209 = elem__$1.className;var new_class_name_405210 = dommy.attrs.remove_class_str.call(null,class_name_405209,class$__$1);if((class_name_405209 === new_class_name_405210))
{} else
{elem__$1.className = new_class_name_405210;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__405211__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__405203 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__405204 = null;var count__405205 = 0;var i__405206 = 0;while(true){
if((i__405206 < count__405205))
{var c = cljs.core._nth.call(null,chunk__405204,i__405206);remove_class_BANG_.call(null,elem__$1,c);
{
var G__405212 = seq__405203;
var G__405213 = chunk__405204;
var G__405214 = count__405205;
var G__405215 = (i__405206 + 1);
seq__405203 = G__405212;
chunk__405204 = G__405213;
count__405205 = G__405214;
i__405206 = G__405215;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__405203);if(temp__4092__auto__)
{var seq__405203__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405203__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__405203__$1);{
var G__405216 = cljs.core.chunk_rest.call(null,seq__405203__$1);
var G__405217 = c__8952__auto__;
var G__405218 = cljs.core.count.call(null,c__8952__auto__);
var G__405219 = 0;
seq__405203 = G__405216;
chunk__405204 = G__405217;
count__405205 = G__405218;
i__405206 = G__405219;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__405203__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__405220 = cljs.core.next.call(null,seq__405203__$1);
var G__405221 = null;
var G__405222 = 0;
var G__405223 = 0;
seq__405203 = G__405220;
chunk__405204 = G__405221;
count__405205 = G__405222;
i__405206 = G__405223;
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
var G__405211 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__405211__delegate.call(this,elem,class$,classes);};
G__405211.cljs$lang$maxFixedArity = 2;
G__405211.cljs$lang$applyTo = (function (arglist__405224){
var elem = cljs.core.first(arglist__405224);
arglist__405224 = cljs.core.next(arglist__405224);
var class$ = cljs.core.first(arglist__405224);
var classes = cljs.core.rest(arglist__405224);
return G__405211__delegate(elem,class$,classes);
});
G__405211.cljs$core$IFn$_invoke$arity$variadic = G__405211__delegate;
return G__405211;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___405225 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___405225))
{var class_list_405226 = temp__4090__auto___405225;class_list_405226.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__405229){var vec__405230 = p__405229;var k = cljs.core.nth.call(null,vec__405230,0,null);var v = cljs.core.nth.call(null,vec__405230,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__405237_405243 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__405238_405244 = null;var count__405239_405245 = 0;var i__405240_405246 = 0;while(true){
if((i__405240_405246 < count__405239_405245))
{var vec__405241_405247 = cljs.core._nth.call(null,chunk__405238_405244,i__405240_405246);var k_405248 = cljs.core.nth.call(null,vec__405241_405247,0,null);var v_405249 = cljs.core.nth.call(null,vec__405241_405247,1,null);(style[cljs.core.name.call(null,k_405248)] = v_405249);
{
var G__405250 = seq__405237_405243;
var G__405251 = chunk__405238_405244;
var G__405252 = count__405239_405245;
var G__405253 = (i__405240_405246 + 1);
seq__405237_405243 = G__405250;
chunk__405238_405244 = G__405251;
count__405239_405245 = G__405252;
i__405240_405246 = G__405253;
continue;
}
} else
{var temp__4092__auto___405254 = cljs.core.seq.call(null,seq__405237_405243);if(temp__4092__auto___405254)
{var seq__405237_405255__$1 = temp__4092__auto___405254;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405237_405255__$1))
{var c__8952__auto___405256 = cljs.core.chunk_first.call(null,seq__405237_405255__$1);{
var G__405257 = cljs.core.chunk_rest.call(null,seq__405237_405255__$1);
var G__405258 = c__8952__auto___405256;
var G__405259 = cljs.core.count.call(null,c__8952__auto___405256);
var G__405260 = 0;
seq__405237_405243 = G__405257;
chunk__405238_405244 = G__405258;
count__405239_405245 = G__405259;
i__405240_405246 = G__405260;
continue;
}
} else
{var vec__405242_405261 = cljs.core.first.call(null,seq__405237_405255__$1);var k_405262 = cljs.core.nth.call(null,vec__405242_405261,0,null);var v_405263 = cljs.core.nth.call(null,vec__405242_405261,1,null);(style[cljs.core.name.call(null,k_405262)] = v_405263);
{
var G__405264 = cljs.core.next.call(null,seq__405237_405255__$1);
var G__405265 = null;
var G__405266 = 0;
var G__405267 = 0;
seq__405237_405243 = G__405264;
chunk__405238_405244 = G__405265;
count__405239_405245 = G__405266;
i__405240_405246 = G__405267;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__405268){
var elem = cljs.core.first(arglist__405268);
var kvs = cljs.core.rest(arglist__405268);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__405275_405281 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__405276_405282 = null;var count__405277_405283 = 0;var i__405278_405284 = 0;while(true){
if((i__405278_405284 < count__405277_405283))
{var vec__405279_405285 = cljs.core._nth.call(null,chunk__405276_405282,i__405278_405284);var k_405286 = cljs.core.nth.call(null,vec__405279_405285,0,null);var v_405287 = cljs.core.nth.call(null,vec__405279_405285,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_405286,[cljs.core.str(v_405287),cljs.core.str("px")].join(''));
{
var G__405288 = seq__405275_405281;
var G__405289 = chunk__405276_405282;
var G__405290 = count__405277_405283;
var G__405291 = (i__405278_405284 + 1);
seq__405275_405281 = G__405288;
chunk__405276_405282 = G__405289;
count__405277_405283 = G__405290;
i__405278_405284 = G__405291;
continue;
}
} else
{var temp__4092__auto___405292 = cljs.core.seq.call(null,seq__405275_405281);if(temp__4092__auto___405292)
{var seq__405275_405293__$1 = temp__4092__auto___405292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405275_405293__$1))
{var c__8952__auto___405294 = cljs.core.chunk_first.call(null,seq__405275_405293__$1);{
var G__405295 = cljs.core.chunk_rest.call(null,seq__405275_405293__$1);
var G__405296 = c__8952__auto___405294;
var G__405297 = cljs.core.count.call(null,c__8952__auto___405294);
var G__405298 = 0;
seq__405275_405281 = G__405295;
chunk__405276_405282 = G__405296;
count__405277_405283 = G__405297;
i__405278_405284 = G__405298;
continue;
}
} else
{var vec__405280_405299 = cljs.core.first.call(null,seq__405275_405293__$1);var k_405300 = cljs.core.nth.call(null,vec__405280_405299,0,null);var v_405301 = cljs.core.nth.call(null,vec__405280_405299,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_405300,[cljs.core.str(v_405301),cljs.core.str("px")].join(''));
{
var G__405302 = cljs.core.next.call(null,seq__405275_405293__$1);
var G__405303 = null;
var G__405304 = 0;
var G__405305 = 0;
seq__405275_405281 = G__405302;
chunk__405276_405282 = G__405303;
count__405277_405283 = G__405304;
i__405278_405284 = G__405305;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__405306){
var elem = cljs.core.first(arglist__405306);
var kvs = cljs.core.rest(arglist__405306);
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
{var G__405315 = dommy.template.__GT_node_like.call(null,elem);(G__405315[cljs.core.name.call(null,k)] = v);
return G__405315;
} else
{var G__405316 = dommy.template.__GT_node_like.call(null,elem);G__405316.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__405316;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__405323__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__405317_405324 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__405318_405325 = null;var count__405319_405326 = 0;var i__405320_405327 = 0;while(true){
if((i__405320_405327 < count__405319_405326))
{var vec__405321_405328 = cljs.core._nth.call(null,chunk__405318_405325,i__405320_405327);var k_405329__$1 = cljs.core.nth.call(null,vec__405321_405328,0,null);var v_405330__$1 = cljs.core.nth.call(null,vec__405321_405328,1,null);set_attr_BANG_.call(null,elem__$1,k_405329__$1,v_405330__$1);
{
var G__405331 = seq__405317_405324;
var G__405332 = chunk__405318_405325;
var G__405333 = count__405319_405326;
var G__405334 = (i__405320_405327 + 1);
seq__405317_405324 = G__405331;
chunk__405318_405325 = G__405332;
count__405319_405326 = G__405333;
i__405320_405327 = G__405334;
continue;
}
} else
{var temp__4092__auto___405335 = cljs.core.seq.call(null,seq__405317_405324);if(temp__4092__auto___405335)
{var seq__405317_405336__$1 = temp__4092__auto___405335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405317_405336__$1))
{var c__8952__auto___405337 = cljs.core.chunk_first.call(null,seq__405317_405336__$1);{
var G__405338 = cljs.core.chunk_rest.call(null,seq__405317_405336__$1);
var G__405339 = c__8952__auto___405337;
var G__405340 = cljs.core.count.call(null,c__8952__auto___405337);
var G__405341 = 0;
seq__405317_405324 = G__405338;
chunk__405318_405325 = G__405339;
count__405319_405326 = G__405340;
i__405320_405327 = G__405341;
continue;
}
} else
{var vec__405322_405342 = cljs.core.first.call(null,seq__405317_405336__$1);var k_405343__$1 = cljs.core.nth.call(null,vec__405322_405342,0,null);var v_405344__$1 = cljs.core.nth.call(null,vec__405322_405342,1,null);set_attr_BANG_.call(null,elem__$1,k_405343__$1,v_405344__$1);
{
var G__405345 = cljs.core.next.call(null,seq__405317_405336__$1);
var G__405346 = null;
var G__405347 = 0;
var G__405348 = 0;
seq__405317_405324 = G__405345;
chunk__405318_405325 = G__405346;
count__405319_405326 = G__405347;
i__405320_405327 = G__405348;
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
var G__405323 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__405323__delegate.call(this,elem,k,v,kvs);};
G__405323.cljs$lang$maxFixedArity = 3;
G__405323.cljs$lang$applyTo = (function (arglist__405349){
var elem = cljs.core.first(arglist__405349);
arglist__405349 = cljs.core.next(arglist__405349);
var k = cljs.core.first(arglist__405349);
arglist__405349 = cljs.core.next(arglist__405349);
var v = cljs.core.first(arglist__405349);
var kvs = cljs.core.rest(arglist__405349);
return G__405323__delegate(elem,k,v,kvs);
});
G__405323.cljs$core$IFn$_invoke$arity$variadic = G__405323__delegate;
return G__405323;
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
var G__405358__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__405354_405359 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__405355_405360 = null;var count__405356_405361 = 0;var i__405357_405362 = 0;while(true){
if((i__405357_405362 < count__405356_405361))
{var k_405363__$1 = cljs.core._nth.call(null,chunk__405355_405360,i__405357_405362);remove_attr_BANG_.call(null,elem__$1,k_405363__$1);
{
var G__405364 = seq__405354_405359;
var G__405365 = chunk__405355_405360;
var G__405366 = count__405356_405361;
var G__405367 = (i__405357_405362 + 1);
seq__405354_405359 = G__405364;
chunk__405355_405360 = G__405365;
count__405356_405361 = G__405366;
i__405357_405362 = G__405367;
continue;
}
} else
{var temp__4092__auto___405368 = cljs.core.seq.call(null,seq__405354_405359);if(temp__4092__auto___405368)
{var seq__405354_405369__$1 = temp__4092__auto___405368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405354_405369__$1))
{var c__8952__auto___405370 = cljs.core.chunk_first.call(null,seq__405354_405369__$1);{
var G__405371 = cljs.core.chunk_rest.call(null,seq__405354_405369__$1);
var G__405372 = c__8952__auto___405370;
var G__405373 = cljs.core.count.call(null,c__8952__auto___405370);
var G__405374 = 0;
seq__405354_405359 = G__405371;
chunk__405355_405360 = G__405372;
count__405356_405361 = G__405373;
i__405357_405362 = G__405374;
continue;
}
} else
{var k_405375__$1 = cljs.core.first.call(null,seq__405354_405369__$1);remove_attr_BANG_.call(null,elem__$1,k_405375__$1);
{
var G__405376 = cljs.core.next.call(null,seq__405354_405369__$1);
var G__405377 = null;
var G__405378 = 0;
var G__405379 = 0;
seq__405354_405359 = G__405376;
chunk__405355_405360 = G__405377;
count__405356_405361 = G__405378;
i__405357_405362 = G__405379;
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
var G__405358 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__405358__delegate.call(this,elem,k,ks);};
G__405358.cljs$lang$maxFixedArity = 2;
G__405358.cljs$lang$applyTo = (function (arglist__405380){
var elem = cljs.core.first(arglist__405380);
arglist__405380 = cljs.core.next(arglist__405380);
var k = cljs.core.first(arglist__405380);
var ks = cljs.core.rest(arglist__405380);
return G__405358__delegate(elem,k,ks);
});
G__405358.cljs$core$IFn$_invoke$arity$variadic = G__405358__delegate;
return G__405358;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__405382 = dommy.template.__GT_node_like.call(null,elem);G__405382.style.display = ((show_QMARK_)?"":"none");
return G__405382;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__405384 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__405384,false);
return G__405384;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__405386 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__405386,true);
return G__405386;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__405388 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__405388["constructor"] = Object);
return G__405388;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map