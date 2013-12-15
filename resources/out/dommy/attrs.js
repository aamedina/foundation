// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13813__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13813__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13813__auto__;
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
var G__328948 = (i + class$.length);
start_from = G__328948;
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
{var temp__4090__auto___328973 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___328973))
{var class_list_328974 = temp__4090__auto___328973;var seq__328961_328975 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__328962_328976 = null;var count__328963_328977 = 0;var i__328964_328978 = 0;while(true){
if((i__328964_328978 < count__328963_328977))
{var class_328979 = cljs.core._nth.call(null,chunk__328962_328976,i__328964_328978);class_list_328974.add(class_328979);
{
var G__328980 = seq__328961_328975;
var G__328981 = chunk__328962_328976;
var G__328982 = count__328963_328977;
var G__328983 = (i__328964_328978 + 1);
seq__328961_328975 = G__328980;
chunk__328962_328976 = G__328981;
count__328963_328977 = G__328982;
i__328964_328978 = G__328983;
continue;
}
} else
{var temp__4092__auto___328984 = cljs.core.seq.call(null,seq__328961_328975);if(temp__4092__auto___328984)
{var seq__328961_328985__$1 = temp__4092__auto___328984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328961_328985__$1))
{var c__14549__auto___328986 = cljs.core.chunk_first.call(null,seq__328961_328985__$1);{
var G__328987 = cljs.core.chunk_rest.call(null,seq__328961_328985__$1);
var G__328988 = c__14549__auto___328986;
var G__328989 = cljs.core.count.call(null,c__14549__auto___328986);
var G__328990 = 0;
seq__328961_328975 = G__328987;
chunk__328962_328976 = G__328988;
count__328963_328977 = G__328989;
i__328964_328978 = G__328990;
continue;
}
} else
{var class_328991 = cljs.core.first.call(null,seq__328961_328985__$1);class_list_328974.add(class_328991);
{
var G__328992 = cljs.core.next.call(null,seq__328961_328985__$1);
var G__328993 = null;
var G__328994 = 0;
var G__328995 = 0;
seq__328961_328975 = G__328992;
chunk__328962_328976 = G__328993;
count__328963_328977 = G__328994;
i__328964_328978 = G__328995;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_328996 = elem__$1.className;var seq__328965_328997 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__328966_328998 = null;var count__328967_328999 = 0;var i__328968_329000 = 0;while(true){
if((i__328968_329000 < count__328967_328999))
{var class_329001 = cljs.core._nth.call(null,chunk__328966_328998,i__328968_329000);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_328996,class_329001)))
{} else
{elem__$1.className = (((class_name_328996 === ""))?class_329001:[cljs.core.str(class_name_328996),cljs.core.str(" "),cljs.core.str(class_329001)].join(''));
}
{
var G__329002 = seq__328965_328997;
var G__329003 = chunk__328966_328998;
var G__329004 = count__328967_328999;
var G__329005 = (i__328968_329000 + 1);
seq__328965_328997 = G__329002;
chunk__328966_328998 = G__329003;
count__328967_328999 = G__329004;
i__328968_329000 = G__329005;
continue;
}
} else
{var temp__4092__auto___329006 = cljs.core.seq.call(null,seq__328965_328997);if(temp__4092__auto___329006)
{var seq__328965_329007__$1 = temp__4092__auto___329006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328965_329007__$1))
{var c__14549__auto___329008 = cljs.core.chunk_first.call(null,seq__328965_329007__$1);{
var G__329009 = cljs.core.chunk_rest.call(null,seq__328965_329007__$1);
var G__329010 = c__14549__auto___329008;
var G__329011 = cljs.core.count.call(null,c__14549__auto___329008);
var G__329012 = 0;
seq__328965_328997 = G__329009;
chunk__328966_328998 = G__329010;
count__328967_328999 = G__329011;
i__328968_329000 = G__329012;
continue;
}
} else
{var class_329013 = cljs.core.first.call(null,seq__328965_329007__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_328996,class_329013)))
{} else
{elem__$1.className = (((class_name_328996 === ""))?class_329013:[cljs.core.str(class_name_328996),cljs.core.str(" "),cljs.core.str(class_329013)].join(''));
}
{
var G__329014 = cljs.core.next.call(null,seq__328965_329007__$1);
var G__329015 = null;
var G__329016 = 0;
var G__329017 = 0;
seq__328965_328997 = G__329014;
chunk__328966_328998 = G__329015;
count__328967_328999 = G__329016;
i__328968_329000 = G__329017;
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
var G__329018__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__328969_329019 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__328970_329020 = null;var count__328971_329021 = 0;var i__328972_329022 = 0;while(true){
if((i__328972_329022 < count__328971_329021))
{var c_329023 = cljs.core._nth.call(null,chunk__328970_329020,i__328972_329022);add_class_BANG_.call(null,elem__$1,c_329023);
{
var G__329024 = seq__328969_329019;
var G__329025 = chunk__328970_329020;
var G__329026 = count__328971_329021;
var G__329027 = (i__328972_329022 + 1);
seq__328969_329019 = G__329024;
chunk__328970_329020 = G__329025;
count__328971_329021 = G__329026;
i__328972_329022 = G__329027;
continue;
}
} else
{var temp__4092__auto___329028 = cljs.core.seq.call(null,seq__328969_329019);if(temp__4092__auto___329028)
{var seq__328969_329029__$1 = temp__4092__auto___329028;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328969_329029__$1))
{var c__14549__auto___329030 = cljs.core.chunk_first.call(null,seq__328969_329029__$1);{
var G__329031 = cljs.core.chunk_rest.call(null,seq__328969_329029__$1);
var G__329032 = c__14549__auto___329030;
var G__329033 = cljs.core.count.call(null,c__14549__auto___329030);
var G__329034 = 0;
seq__328969_329019 = G__329031;
chunk__328970_329020 = G__329032;
count__328971_329021 = G__329033;
i__328972_329022 = G__329034;
continue;
}
} else
{var c_329035 = cljs.core.first.call(null,seq__328969_329029__$1);add_class_BANG_.call(null,elem__$1,c_329035);
{
var G__329036 = cljs.core.next.call(null,seq__328969_329029__$1);
var G__329037 = null;
var G__329038 = 0;
var G__329039 = 0;
seq__328969_329019 = G__329036;
chunk__328970_329020 = G__329037;
count__328971_329021 = G__329038;
i__328972_329022 = G__329039;
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
var G__329018 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__329018__delegate.call(this,elem,classes,more_classes);};
G__329018.cljs$lang$maxFixedArity = 2;
G__329018.cljs$lang$applyTo = (function (arglist__329040){
var elem = cljs.core.first(arglist__329040);
arglist__329040 = cljs.core.next(arglist__329040);
var classes = cljs.core.first(arglist__329040);
var more_classes = cljs.core.rest(arglist__329040);
return G__329018__delegate(elem,classes,more_classes);
});
G__329018.cljs$core$IFn$_invoke$arity$variadic = G__329018__delegate;
return G__329018;
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
var G__329041 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__329041;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___329050 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___329050))
{var class_list_329051 = temp__4090__auto___329050;class_list_329051.remove(class$__$1);
} else
{var class_name_329052 = elem__$1.className;var new_class_name_329053 = dommy.attrs.remove_class_str.call(null,class_name_329052,class$__$1);if((class_name_329052 === new_class_name_329053))
{} else
{elem__$1.className = new_class_name_329053;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__329054__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__329046 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__329047 = null;var count__329048 = 0;var i__329049 = 0;while(true){
if((i__329049 < count__329048))
{var c = cljs.core._nth.call(null,chunk__329047,i__329049);remove_class_BANG_.call(null,elem__$1,c);
{
var G__329055 = seq__329046;
var G__329056 = chunk__329047;
var G__329057 = count__329048;
var G__329058 = (i__329049 + 1);
seq__329046 = G__329055;
chunk__329047 = G__329056;
count__329048 = G__329057;
i__329049 = G__329058;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__329046);if(temp__4092__auto__)
{var seq__329046__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329046__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__329046__$1);{
var G__329059 = cljs.core.chunk_rest.call(null,seq__329046__$1);
var G__329060 = c__14549__auto__;
var G__329061 = cljs.core.count.call(null,c__14549__auto__);
var G__329062 = 0;
seq__329046 = G__329059;
chunk__329047 = G__329060;
count__329048 = G__329061;
i__329049 = G__329062;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__329046__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__329063 = cljs.core.next.call(null,seq__329046__$1);
var G__329064 = null;
var G__329065 = 0;
var G__329066 = 0;
seq__329046 = G__329063;
chunk__329047 = G__329064;
count__329048 = G__329065;
i__329049 = G__329066;
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
var G__329054 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__329054__delegate.call(this,elem,class$,classes);};
G__329054.cljs$lang$maxFixedArity = 2;
G__329054.cljs$lang$applyTo = (function (arglist__329067){
var elem = cljs.core.first(arglist__329067);
arglist__329067 = cljs.core.next(arglist__329067);
var class$ = cljs.core.first(arglist__329067);
var classes = cljs.core.rest(arglist__329067);
return G__329054__delegate(elem,class$,classes);
});
G__329054.cljs$core$IFn$_invoke$arity$variadic = G__329054__delegate;
return G__329054;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___329068 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___329068))
{var class_list_329069 = temp__4090__auto___329068;class_list_329069.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__329072){var vec__329073 = p__329072;var k = cljs.core.nth.call(null,vec__329073,0,null);var v = cljs.core.nth.call(null,vec__329073,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__329080_329086 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__329081_329087 = null;var count__329082_329088 = 0;var i__329083_329089 = 0;while(true){
if((i__329083_329089 < count__329082_329088))
{var vec__329084_329090 = cljs.core._nth.call(null,chunk__329081_329087,i__329083_329089);var k_329091 = cljs.core.nth.call(null,vec__329084_329090,0,null);var v_329092 = cljs.core.nth.call(null,vec__329084_329090,1,null);(style[cljs.core.name.call(null,k_329091)] = v_329092);
{
var G__329093 = seq__329080_329086;
var G__329094 = chunk__329081_329087;
var G__329095 = count__329082_329088;
var G__329096 = (i__329083_329089 + 1);
seq__329080_329086 = G__329093;
chunk__329081_329087 = G__329094;
count__329082_329088 = G__329095;
i__329083_329089 = G__329096;
continue;
}
} else
{var temp__4092__auto___329097 = cljs.core.seq.call(null,seq__329080_329086);if(temp__4092__auto___329097)
{var seq__329080_329098__$1 = temp__4092__auto___329097;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329080_329098__$1))
{var c__14549__auto___329099 = cljs.core.chunk_first.call(null,seq__329080_329098__$1);{
var G__329100 = cljs.core.chunk_rest.call(null,seq__329080_329098__$1);
var G__329101 = c__14549__auto___329099;
var G__329102 = cljs.core.count.call(null,c__14549__auto___329099);
var G__329103 = 0;
seq__329080_329086 = G__329100;
chunk__329081_329087 = G__329101;
count__329082_329088 = G__329102;
i__329083_329089 = G__329103;
continue;
}
} else
{var vec__329085_329104 = cljs.core.first.call(null,seq__329080_329098__$1);var k_329105 = cljs.core.nth.call(null,vec__329085_329104,0,null);var v_329106 = cljs.core.nth.call(null,vec__329085_329104,1,null);(style[cljs.core.name.call(null,k_329105)] = v_329106);
{
var G__329107 = cljs.core.next.call(null,seq__329080_329098__$1);
var G__329108 = null;
var G__329109 = 0;
var G__329110 = 0;
seq__329080_329086 = G__329107;
chunk__329081_329087 = G__329108;
count__329082_329088 = G__329109;
i__329083_329089 = G__329110;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__329111){
var elem = cljs.core.first(arglist__329111);
var kvs = cljs.core.rest(arglist__329111);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__329118_329124 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__329119_329125 = null;var count__329120_329126 = 0;var i__329121_329127 = 0;while(true){
if((i__329121_329127 < count__329120_329126))
{var vec__329122_329128 = cljs.core._nth.call(null,chunk__329119_329125,i__329121_329127);var k_329129 = cljs.core.nth.call(null,vec__329122_329128,0,null);var v_329130 = cljs.core.nth.call(null,vec__329122_329128,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_329129,[cljs.core.str(v_329130),cljs.core.str("px")].join(''));
{
var G__329131 = seq__329118_329124;
var G__329132 = chunk__329119_329125;
var G__329133 = count__329120_329126;
var G__329134 = (i__329121_329127 + 1);
seq__329118_329124 = G__329131;
chunk__329119_329125 = G__329132;
count__329120_329126 = G__329133;
i__329121_329127 = G__329134;
continue;
}
} else
{var temp__4092__auto___329135 = cljs.core.seq.call(null,seq__329118_329124);if(temp__4092__auto___329135)
{var seq__329118_329136__$1 = temp__4092__auto___329135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329118_329136__$1))
{var c__14549__auto___329137 = cljs.core.chunk_first.call(null,seq__329118_329136__$1);{
var G__329138 = cljs.core.chunk_rest.call(null,seq__329118_329136__$1);
var G__329139 = c__14549__auto___329137;
var G__329140 = cljs.core.count.call(null,c__14549__auto___329137);
var G__329141 = 0;
seq__329118_329124 = G__329138;
chunk__329119_329125 = G__329139;
count__329120_329126 = G__329140;
i__329121_329127 = G__329141;
continue;
}
} else
{var vec__329123_329142 = cljs.core.first.call(null,seq__329118_329136__$1);var k_329143 = cljs.core.nth.call(null,vec__329123_329142,0,null);var v_329144 = cljs.core.nth.call(null,vec__329123_329142,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_329143,[cljs.core.str(v_329144),cljs.core.str("px")].join(''));
{
var G__329145 = cljs.core.next.call(null,seq__329118_329136__$1);
var G__329146 = null;
var G__329147 = 0;
var G__329148 = 0;
seq__329118_329124 = G__329145;
chunk__329119_329125 = G__329146;
count__329120_329126 = G__329147;
i__329121_329127 = G__329148;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__329149){
var elem = cljs.core.first(arglist__329149);
var kvs = cljs.core.rest(arglist__329149);
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
{var G__329158 = dommy.template.__GT_node_like.call(null,elem);(G__329158[cljs.core.name.call(null,k)] = v);
return G__329158;
} else
{var G__329159 = dommy.template.__GT_node_like.call(null,elem);G__329159.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__329159;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__329166__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__329160_329167 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__329161_329168 = null;var count__329162_329169 = 0;var i__329163_329170 = 0;while(true){
if((i__329163_329170 < count__329162_329169))
{var vec__329164_329171 = cljs.core._nth.call(null,chunk__329161_329168,i__329163_329170);var k_329172__$1 = cljs.core.nth.call(null,vec__329164_329171,0,null);var v_329173__$1 = cljs.core.nth.call(null,vec__329164_329171,1,null);set_attr_BANG_.call(null,elem__$1,k_329172__$1,v_329173__$1);
{
var G__329174 = seq__329160_329167;
var G__329175 = chunk__329161_329168;
var G__329176 = count__329162_329169;
var G__329177 = (i__329163_329170 + 1);
seq__329160_329167 = G__329174;
chunk__329161_329168 = G__329175;
count__329162_329169 = G__329176;
i__329163_329170 = G__329177;
continue;
}
} else
{var temp__4092__auto___329178 = cljs.core.seq.call(null,seq__329160_329167);if(temp__4092__auto___329178)
{var seq__329160_329179__$1 = temp__4092__auto___329178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329160_329179__$1))
{var c__14549__auto___329180 = cljs.core.chunk_first.call(null,seq__329160_329179__$1);{
var G__329181 = cljs.core.chunk_rest.call(null,seq__329160_329179__$1);
var G__329182 = c__14549__auto___329180;
var G__329183 = cljs.core.count.call(null,c__14549__auto___329180);
var G__329184 = 0;
seq__329160_329167 = G__329181;
chunk__329161_329168 = G__329182;
count__329162_329169 = G__329183;
i__329163_329170 = G__329184;
continue;
}
} else
{var vec__329165_329185 = cljs.core.first.call(null,seq__329160_329179__$1);var k_329186__$1 = cljs.core.nth.call(null,vec__329165_329185,0,null);var v_329187__$1 = cljs.core.nth.call(null,vec__329165_329185,1,null);set_attr_BANG_.call(null,elem__$1,k_329186__$1,v_329187__$1);
{
var G__329188 = cljs.core.next.call(null,seq__329160_329179__$1);
var G__329189 = null;
var G__329190 = 0;
var G__329191 = 0;
seq__329160_329167 = G__329188;
chunk__329161_329168 = G__329189;
count__329162_329169 = G__329190;
i__329163_329170 = G__329191;
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
var G__329166 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__329166__delegate.call(this,elem,k,v,kvs);};
G__329166.cljs$lang$maxFixedArity = 3;
G__329166.cljs$lang$applyTo = (function (arglist__329192){
var elem = cljs.core.first(arglist__329192);
arglist__329192 = cljs.core.next(arglist__329192);
var k = cljs.core.first(arglist__329192);
arglist__329192 = cljs.core.next(arglist__329192);
var v = cljs.core.first(arglist__329192);
var kvs = cljs.core.rest(arglist__329192);
return G__329166__delegate(elem,k,v,kvs);
});
G__329166.cljs$core$IFn$_invoke$arity$variadic = G__329166__delegate;
return G__329166;
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
var G__329201__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__329197_329202 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__329198_329203 = null;var count__329199_329204 = 0;var i__329200_329205 = 0;while(true){
if((i__329200_329205 < count__329199_329204))
{var k_329206__$1 = cljs.core._nth.call(null,chunk__329198_329203,i__329200_329205);remove_attr_BANG_.call(null,elem__$1,k_329206__$1);
{
var G__329207 = seq__329197_329202;
var G__329208 = chunk__329198_329203;
var G__329209 = count__329199_329204;
var G__329210 = (i__329200_329205 + 1);
seq__329197_329202 = G__329207;
chunk__329198_329203 = G__329208;
count__329199_329204 = G__329209;
i__329200_329205 = G__329210;
continue;
}
} else
{var temp__4092__auto___329211 = cljs.core.seq.call(null,seq__329197_329202);if(temp__4092__auto___329211)
{var seq__329197_329212__$1 = temp__4092__auto___329211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329197_329212__$1))
{var c__14549__auto___329213 = cljs.core.chunk_first.call(null,seq__329197_329212__$1);{
var G__329214 = cljs.core.chunk_rest.call(null,seq__329197_329212__$1);
var G__329215 = c__14549__auto___329213;
var G__329216 = cljs.core.count.call(null,c__14549__auto___329213);
var G__329217 = 0;
seq__329197_329202 = G__329214;
chunk__329198_329203 = G__329215;
count__329199_329204 = G__329216;
i__329200_329205 = G__329217;
continue;
}
} else
{var k_329218__$1 = cljs.core.first.call(null,seq__329197_329212__$1);remove_attr_BANG_.call(null,elem__$1,k_329218__$1);
{
var G__329219 = cljs.core.next.call(null,seq__329197_329212__$1);
var G__329220 = null;
var G__329221 = 0;
var G__329222 = 0;
seq__329197_329202 = G__329219;
chunk__329198_329203 = G__329220;
count__329199_329204 = G__329221;
i__329200_329205 = G__329222;
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
var G__329201 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__329201__delegate.call(this,elem,k,ks);};
G__329201.cljs$lang$maxFixedArity = 2;
G__329201.cljs$lang$applyTo = (function (arglist__329223){
var elem = cljs.core.first(arglist__329223);
arglist__329223 = cljs.core.next(arglist__329223);
var k = cljs.core.first(arglist__329223);
var ks = cljs.core.rest(arglist__329223);
return G__329201__delegate(elem,k,ks);
});
G__329201.cljs$core$IFn$_invoke$arity$variadic = G__329201__delegate;
return G__329201;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__329225 = dommy.template.__GT_node_like.call(null,elem);G__329225.style.display = ((show_QMARK_)?"":"none");
return G__329225;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__329227 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__329227,false);
return G__329227;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__329229 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__329229,true);
return G__329229;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__329231 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__329231["constructor"] = Object);
return G__329231;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map