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
var G__24926 = (i + class$.length);
start_from = G__24926;
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
{var temp__4090__auto___24951 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___24951))
{var class_list_24952 = temp__4090__auto___24951;var seq__24939_24953 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__24940_24954 = null;var count__24941_24955 = 0;var i__24942_24956 = 0;while(true){
if((i__24942_24956 < count__24941_24955))
{var class_24957 = cljs.core._nth.call(null,chunk__24940_24954,i__24942_24956);class_list_24952.add(class_24957);
{
var G__24958 = seq__24939_24953;
var G__24959 = chunk__24940_24954;
var G__24960 = count__24941_24955;
var G__24961 = (i__24942_24956 + 1);
seq__24939_24953 = G__24958;
chunk__24940_24954 = G__24959;
count__24941_24955 = G__24960;
i__24942_24956 = G__24961;
continue;
}
} else
{var temp__4092__auto___24962 = cljs.core.seq.call(null,seq__24939_24953);if(temp__4092__auto___24962)
{var seq__24939_24963__$1 = temp__4092__auto___24962;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24939_24963__$1))
{var c__8552__auto___24964 = cljs.core.chunk_first.call(null,seq__24939_24963__$1);{
var G__24965 = cljs.core.chunk_rest.call(null,seq__24939_24963__$1);
var G__24966 = c__8552__auto___24964;
var G__24967 = cljs.core.count.call(null,c__8552__auto___24964);
var G__24968 = 0;
seq__24939_24953 = G__24965;
chunk__24940_24954 = G__24966;
count__24941_24955 = G__24967;
i__24942_24956 = G__24968;
continue;
}
} else
{var class_24969 = cljs.core.first.call(null,seq__24939_24963__$1);class_list_24952.add(class_24969);
{
var G__24970 = cljs.core.next.call(null,seq__24939_24963__$1);
var G__24971 = null;
var G__24972 = 0;
var G__24973 = 0;
seq__24939_24953 = G__24970;
chunk__24940_24954 = G__24971;
count__24941_24955 = G__24972;
i__24942_24956 = G__24973;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_24974 = elem__$1.className;var seq__24943_24975 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__24944_24976 = null;var count__24945_24977 = 0;var i__24946_24978 = 0;while(true){
if((i__24946_24978 < count__24945_24977))
{var class_24979 = cljs.core._nth.call(null,chunk__24944_24976,i__24946_24978);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_24974,class_24979)))
{} else
{elem__$1.className = (((class_name_24974 === ""))?class_24979:[cljs.core.str(class_name_24974),cljs.core.str(" "),cljs.core.str(class_24979)].join(''));
}
{
var G__24980 = seq__24943_24975;
var G__24981 = chunk__24944_24976;
var G__24982 = count__24945_24977;
var G__24983 = (i__24946_24978 + 1);
seq__24943_24975 = G__24980;
chunk__24944_24976 = G__24981;
count__24945_24977 = G__24982;
i__24946_24978 = G__24983;
continue;
}
} else
{var temp__4092__auto___24984 = cljs.core.seq.call(null,seq__24943_24975);if(temp__4092__auto___24984)
{var seq__24943_24985__$1 = temp__4092__auto___24984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24943_24985__$1))
{var c__8552__auto___24986 = cljs.core.chunk_first.call(null,seq__24943_24985__$1);{
var G__24987 = cljs.core.chunk_rest.call(null,seq__24943_24985__$1);
var G__24988 = c__8552__auto___24986;
var G__24989 = cljs.core.count.call(null,c__8552__auto___24986);
var G__24990 = 0;
seq__24943_24975 = G__24987;
chunk__24944_24976 = G__24988;
count__24945_24977 = G__24989;
i__24946_24978 = G__24990;
continue;
}
} else
{var class_24991 = cljs.core.first.call(null,seq__24943_24985__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_24974,class_24991)))
{} else
{elem__$1.className = (((class_name_24974 === ""))?class_24991:[cljs.core.str(class_name_24974),cljs.core.str(" "),cljs.core.str(class_24991)].join(''));
}
{
var G__24992 = cljs.core.next.call(null,seq__24943_24985__$1);
var G__24993 = null;
var G__24994 = 0;
var G__24995 = 0;
seq__24943_24975 = G__24992;
chunk__24944_24976 = G__24993;
count__24945_24977 = G__24994;
i__24946_24978 = G__24995;
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
var G__24996__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__24947_24997 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__24948_24998 = null;var count__24949_24999 = 0;var i__24950_25000 = 0;while(true){
if((i__24950_25000 < count__24949_24999))
{var c_25001 = cljs.core._nth.call(null,chunk__24948_24998,i__24950_25000);add_class_BANG_.call(null,elem__$1,c_25001);
{
var G__25002 = seq__24947_24997;
var G__25003 = chunk__24948_24998;
var G__25004 = count__24949_24999;
var G__25005 = (i__24950_25000 + 1);
seq__24947_24997 = G__25002;
chunk__24948_24998 = G__25003;
count__24949_24999 = G__25004;
i__24950_25000 = G__25005;
continue;
}
} else
{var temp__4092__auto___25006 = cljs.core.seq.call(null,seq__24947_24997);if(temp__4092__auto___25006)
{var seq__24947_25007__$1 = temp__4092__auto___25006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24947_25007__$1))
{var c__8552__auto___25008 = cljs.core.chunk_first.call(null,seq__24947_25007__$1);{
var G__25009 = cljs.core.chunk_rest.call(null,seq__24947_25007__$1);
var G__25010 = c__8552__auto___25008;
var G__25011 = cljs.core.count.call(null,c__8552__auto___25008);
var G__25012 = 0;
seq__24947_24997 = G__25009;
chunk__24948_24998 = G__25010;
count__24949_24999 = G__25011;
i__24950_25000 = G__25012;
continue;
}
} else
{var c_25013 = cljs.core.first.call(null,seq__24947_25007__$1);add_class_BANG_.call(null,elem__$1,c_25013);
{
var G__25014 = cljs.core.next.call(null,seq__24947_25007__$1);
var G__25015 = null;
var G__25016 = 0;
var G__25017 = 0;
seq__24947_24997 = G__25014;
chunk__24948_24998 = G__25015;
count__24949_24999 = G__25016;
i__24950_25000 = G__25017;
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
var G__24996 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__24996__delegate.call(this,elem,classes,more_classes);};
G__24996.cljs$lang$maxFixedArity = 2;
G__24996.cljs$lang$applyTo = (function (arglist__25018){
var elem = cljs.core.first(arglist__25018);
arglist__25018 = cljs.core.next(arglist__25018);
var classes = cljs.core.first(arglist__25018);
var more_classes = cljs.core.rest(arglist__25018);
return G__24996__delegate(elem,classes,more_classes);
});
G__24996.cljs$core$IFn$_invoke$arity$variadic = G__24996__delegate;
return G__24996;
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
var G__25019 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__25019;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25028 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25028))
{var class_list_25029 = temp__4090__auto___25028;class_list_25029.remove(class$__$1);
} else
{var class_name_25030 = elem__$1.className;var new_class_name_25031 = dommy.attrs.remove_class_str.call(null,class_name_25030,class$__$1);if((class_name_25030 === new_class_name_25031))
{} else
{elem__$1.className = new_class_name_25031;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__25032__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25024 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__25025 = null;var count__25026 = 0;var i__25027 = 0;while(true){
if((i__25027 < count__25026))
{var c = cljs.core._nth.call(null,chunk__25025,i__25027);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25033 = seq__25024;
var G__25034 = chunk__25025;
var G__25035 = count__25026;
var G__25036 = (i__25027 + 1);
seq__25024 = G__25033;
chunk__25025 = G__25034;
count__25026 = G__25035;
i__25027 = G__25036;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25024);if(temp__4092__auto__)
{var seq__25024__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25024__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25024__$1);{
var G__25037 = cljs.core.chunk_rest.call(null,seq__25024__$1);
var G__25038 = c__8552__auto__;
var G__25039 = cljs.core.count.call(null,c__8552__auto__);
var G__25040 = 0;
seq__25024 = G__25037;
chunk__25025 = G__25038;
count__25026 = G__25039;
i__25027 = G__25040;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__25024__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__25041 = cljs.core.next.call(null,seq__25024__$1);
var G__25042 = null;
var G__25043 = 0;
var G__25044 = 0;
seq__25024 = G__25041;
chunk__25025 = G__25042;
count__25026 = G__25043;
i__25027 = G__25044;
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
var G__25032 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25032__delegate.call(this,elem,class$,classes);};
G__25032.cljs$lang$maxFixedArity = 2;
G__25032.cljs$lang$applyTo = (function (arglist__25045){
var elem = cljs.core.first(arglist__25045);
arglist__25045 = cljs.core.next(arglist__25045);
var class$ = cljs.core.first(arglist__25045);
var classes = cljs.core.rest(arglist__25045);
return G__25032__delegate(elem,class$,classes);
});
G__25032.cljs$core$IFn$_invoke$arity$variadic = G__25032__delegate;
return G__25032;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___25046 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___25046))
{var class_list_25047 = temp__4090__auto___25046;class_list_25047.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__25050){var vec__25051 = p__25050;var k = cljs.core.nth.call(null,vec__25051,0,null);var v = cljs.core.nth.call(null,vec__25051,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__25058_25064 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25059_25065 = null;var count__25060_25066 = 0;var i__25061_25067 = 0;while(true){
if((i__25061_25067 < count__25060_25066))
{var vec__25062_25068 = cljs.core._nth.call(null,chunk__25059_25065,i__25061_25067);var k_25069 = cljs.core.nth.call(null,vec__25062_25068,0,null);var v_25070 = cljs.core.nth.call(null,vec__25062_25068,1,null);(style[cljs.core.name.call(null,k_25069)] = v_25070);
{
var G__25071 = seq__25058_25064;
var G__25072 = chunk__25059_25065;
var G__25073 = count__25060_25066;
var G__25074 = (i__25061_25067 + 1);
seq__25058_25064 = G__25071;
chunk__25059_25065 = G__25072;
count__25060_25066 = G__25073;
i__25061_25067 = G__25074;
continue;
}
} else
{var temp__4092__auto___25075 = cljs.core.seq.call(null,seq__25058_25064);if(temp__4092__auto___25075)
{var seq__25058_25076__$1 = temp__4092__auto___25075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25058_25076__$1))
{var c__8552__auto___25077 = cljs.core.chunk_first.call(null,seq__25058_25076__$1);{
var G__25078 = cljs.core.chunk_rest.call(null,seq__25058_25076__$1);
var G__25079 = c__8552__auto___25077;
var G__25080 = cljs.core.count.call(null,c__8552__auto___25077);
var G__25081 = 0;
seq__25058_25064 = G__25078;
chunk__25059_25065 = G__25079;
count__25060_25066 = G__25080;
i__25061_25067 = G__25081;
continue;
}
} else
{var vec__25063_25082 = cljs.core.first.call(null,seq__25058_25076__$1);var k_25083 = cljs.core.nth.call(null,vec__25063_25082,0,null);var v_25084 = cljs.core.nth.call(null,vec__25063_25082,1,null);(style[cljs.core.name.call(null,k_25083)] = v_25084);
{
var G__25085 = cljs.core.next.call(null,seq__25058_25076__$1);
var G__25086 = null;
var G__25087 = 0;
var G__25088 = 0;
seq__25058_25064 = G__25085;
chunk__25059_25065 = G__25086;
count__25060_25066 = G__25087;
i__25061_25067 = G__25088;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25089){
var elem = cljs.core.first(arglist__25089);
var kvs = cljs.core.rest(arglist__25089);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25096_25102 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__25097_25103 = null;var count__25098_25104 = 0;var i__25099_25105 = 0;while(true){
if((i__25099_25105 < count__25098_25104))
{var vec__25100_25106 = cljs.core._nth.call(null,chunk__25097_25103,i__25099_25105);var k_25107 = cljs.core.nth.call(null,vec__25100_25106,0,null);var v_25108 = cljs.core.nth.call(null,vec__25100_25106,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25107,[cljs.core.str(v_25108),cljs.core.str("px")].join(''));
{
var G__25109 = seq__25096_25102;
var G__25110 = chunk__25097_25103;
var G__25111 = count__25098_25104;
var G__25112 = (i__25099_25105 + 1);
seq__25096_25102 = G__25109;
chunk__25097_25103 = G__25110;
count__25098_25104 = G__25111;
i__25099_25105 = G__25112;
continue;
}
} else
{var temp__4092__auto___25113 = cljs.core.seq.call(null,seq__25096_25102);if(temp__4092__auto___25113)
{var seq__25096_25114__$1 = temp__4092__auto___25113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25096_25114__$1))
{var c__8552__auto___25115 = cljs.core.chunk_first.call(null,seq__25096_25114__$1);{
var G__25116 = cljs.core.chunk_rest.call(null,seq__25096_25114__$1);
var G__25117 = c__8552__auto___25115;
var G__25118 = cljs.core.count.call(null,c__8552__auto___25115);
var G__25119 = 0;
seq__25096_25102 = G__25116;
chunk__25097_25103 = G__25117;
count__25098_25104 = G__25118;
i__25099_25105 = G__25119;
continue;
}
} else
{var vec__25101_25120 = cljs.core.first.call(null,seq__25096_25114__$1);var k_25121 = cljs.core.nth.call(null,vec__25101_25120,0,null);var v_25122 = cljs.core.nth.call(null,vec__25101_25120,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_25121,[cljs.core.str(v_25122),cljs.core.str("px")].join(''));
{
var G__25123 = cljs.core.next.call(null,seq__25096_25114__$1);
var G__25124 = null;
var G__25125 = 0;
var G__25126 = 0;
seq__25096_25102 = G__25123;
chunk__25097_25103 = G__25124;
count__25098_25104 = G__25125;
i__25099_25105 = G__25126;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__25127){
var elem = cljs.core.first(arglist__25127);
var kvs = cljs.core.rest(arglist__25127);
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
{var G__25136 = dommy.template.__GT_node_like.call(null,elem);(G__25136[cljs.core.name.call(null,k)] = v);
return G__25136;
} else
{var G__25137 = dommy.template.__GT_node_like.call(null,elem);G__25137.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__25137;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__25144__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25138_25145 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__25139_25146 = null;var count__25140_25147 = 0;var i__25141_25148 = 0;while(true){
if((i__25141_25148 < count__25140_25147))
{var vec__25142_25149 = cljs.core._nth.call(null,chunk__25139_25146,i__25141_25148);var k_25150__$1 = cljs.core.nth.call(null,vec__25142_25149,0,null);var v_25151__$1 = cljs.core.nth.call(null,vec__25142_25149,1,null);set_attr_BANG_.call(null,elem__$1,k_25150__$1,v_25151__$1);
{
var G__25152 = seq__25138_25145;
var G__25153 = chunk__25139_25146;
var G__25154 = count__25140_25147;
var G__25155 = (i__25141_25148 + 1);
seq__25138_25145 = G__25152;
chunk__25139_25146 = G__25153;
count__25140_25147 = G__25154;
i__25141_25148 = G__25155;
continue;
}
} else
{var temp__4092__auto___25156 = cljs.core.seq.call(null,seq__25138_25145);if(temp__4092__auto___25156)
{var seq__25138_25157__$1 = temp__4092__auto___25156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25138_25157__$1))
{var c__8552__auto___25158 = cljs.core.chunk_first.call(null,seq__25138_25157__$1);{
var G__25159 = cljs.core.chunk_rest.call(null,seq__25138_25157__$1);
var G__25160 = c__8552__auto___25158;
var G__25161 = cljs.core.count.call(null,c__8552__auto___25158);
var G__25162 = 0;
seq__25138_25145 = G__25159;
chunk__25139_25146 = G__25160;
count__25140_25147 = G__25161;
i__25141_25148 = G__25162;
continue;
}
} else
{var vec__25143_25163 = cljs.core.first.call(null,seq__25138_25157__$1);var k_25164__$1 = cljs.core.nth.call(null,vec__25143_25163,0,null);var v_25165__$1 = cljs.core.nth.call(null,vec__25143_25163,1,null);set_attr_BANG_.call(null,elem__$1,k_25164__$1,v_25165__$1);
{
var G__25166 = cljs.core.next.call(null,seq__25138_25157__$1);
var G__25167 = null;
var G__25168 = 0;
var G__25169 = 0;
seq__25138_25145 = G__25166;
chunk__25139_25146 = G__25167;
count__25140_25147 = G__25168;
i__25141_25148 = G__25169;
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
var G__25144 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__25144__delegate.call(this,elem,k,v,kvs);};
G__25144.cljs$lang$maxFixedArity = 3;
G__25144.cljs$lang$applyTo = (function (arglist__25170){
var elem = cljs.core.first(arglist__25170);
arglist__25170 = cljs.core.next(arglist__25170);
var k = cljs.core.first(arglist__25170);
arglist__25170 = cljs.core.next(arglist__25170);
var v = cljs.core.first(arglist__25170);
var kvs = cljs.core.rest(arglist__25170);
return G__25144__delegate(elem,k,v,kvs);
});
G__25144.cljs$core$IFn$_invoke$arity$variadic = G__25144__delegate;
return G__25144;
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
var G__25179__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__25175_25180 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__25176_25181 = null;var count__25177_25182 = 0;var i__25178_25183 = 0;while(true){
if((i__25178_25183 < count__25177_25182))
{var k_25184__$1 = cljs.core._nth.call(null,chunk__25176_25181,i__25178_25183);remove_attr_BANG_.call(null,elem__$1,k_25184__$1);
{
var G__25185 = seq__25175_25180;
var G__25186 = chunk__25176_25181;
var G__25187 = count__25177_25182;
var G__25188 = (i__25178_25183 + 1);
seq__25175_25180 = G__25185;
chunk__25176_25181 = G__25186;
count__25177_25182 = G__25187;
i__25178_25183 = G__25188;
continue;
}
} else
{var temp__4092__auto___25189 = cljs.core.seq.call(null,seq__25175_25180);if(temp__4092__auto___25189)
{var seq__25175_25190__$1 = temp__4092__auto___25189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25175_25190__$1))
{var c__8552__auto___25191 = cljs.core.chunk_first.call(null,seq__25175_25190__$1);{
var G__25192 = cljs.core.chunk_rest.call(null,seq__25175_25190__$1);
var G__25193 = c__8552__auto___25191;
var G__25194 = cljs.core.count.call(null,c__8552__auto___25191);
var G__25195 = 0;
seq__25175_25180 = G__25192;
chunk__25176_25181 = G__25193;
count__25177_25182 = G__25194;
i__25178_25183 = G__25195;
continue;
}
} else
{var k_25196__$1 = cljs.core.first.call(null,seq__25175_25190__$1);remove_attr_BANG_.call(null,elem__$1,k_25196__$1);
{
var G__25197 = cljs.core.next.call(null,seq__25175_25190__$1);
var G__25198 = null;
var G__25199 = 0;
var G__25200 = 0;
seq__25175_25180 = G__25197;
chunk__25176_25181 = G__25198;
count__25177_25182 = G__25199;
i__25178_25183 = G__25200;
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
var G__25179 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__25179__delegate.call(this,elem,k,ks);};
G__25179.cljs$lang$maxFixedArity = 2;
G__25179.cljs$lang$applyTo = (function (arglist__25201){
var elem = cljs.core.first(arglist__25201);
arglist__25201 = cljs.core.next(arglist__25201);
var k = cljs.core.first(arglist__25201);
var ks = cljs.core.rest(arglist__25201);
return G__25179__delegate(elem,k,ks);
});
G__25179.cljs$core$IFn$_invoke$arity$variadic = G__25179__delegate;
return G__25179;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__25203 = dommy.template.__GT_node_like.call(null,elem);G__25203.style.display = ((show_QMARK_)?"":"none");
return G__25203;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__25205 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25205,false);
return G__25205;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__25207 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__25207,true);
return G__25207;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__25209 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__25209["constructor"] = Object);
return G__25209;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
