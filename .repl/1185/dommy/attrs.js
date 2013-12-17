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
var G__86940 = (i + class$.length);
start_from = G__86940;
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
{var temp__4090__auto___86965 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___86965))
{var class_list_86966 = temp__4090__auto___86965;var seq__86953_86967 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__86954_86968 = null;var count__86955_86969 = 0;var i__86956_86970 = 0;while(true){
if((i__86956_86970 < count__86955_86969))
{var class_86971 = cljs.core._nth.call(null,chunk__86954_86968,i__86956_86970);class_list_86966.add(class_86971);
{
var G__86972 = seq__86953_86967;
var G__86973 = chunk__86954_86968;
var G__86974 = count__86955_86969;
var G__86975 = (i__86956_86970 + 1);
seq__86953_86967 = G__86972;
chunk__86954_86968 = G__86973;
count__86955_86969 = G__86974;
i__86956_86970 = G__86975;
continue;
}
} else
{var temp__4092__auto___86976 = cljs.core.seq.call(null,seq__86953_86967);if(temp__4092__auto___86976)
{var seq__86953_86977__$1 = temp__4092__auto___86976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86953_86977__$1))
{var c__8552__auto___86978 = cljs.core.chunk_first.call(null,seq__86953_86977__$1);{
var G__86979 = cljs.core.chunk_rest.call(null,seq__86953_86977__$1);
var G__86980 = c__8552__auto___86978;
var G__86981 = cljs.core.count.call(null,c__8552__auto___86978);
var G__86982 = 0;
seq__86953_86967 = G__86979;
chunk__86954_86968 = G__86980;
count__86955_86969 = G__86981;
i__86956_86970 = G__86982;
continue;
}
} else
{var class_86983 = cljs.core.first.call(null,seq__86953_86977__$1);class_list_86966.add(class_86983);
{
var G__86984 = cljs.core.next.call(null,seq__86953_86977__$1);
var G__86985 = null;
var G__86986 = 0;
var G__86987 = 0;
seq__86953_86967 = G__86984;
chunk__86954_86968 = G__86985;
count__86955_86969 = G__86986;
i__86956_86970 = G__86987;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_86988 = elem__$1.className;var seq__86957_86989 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__86958_86990 = null;var count__86959_86991 = 0;var i__86960_86992 = 0;while(true){
if((i__86960_86992 < count__86959_86991))
{var class_86993 = cljs.core._nth.call(null,chunk__86958_86990,i__86960_86992);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_86988,class_86993)))
{} else
{elem__$1.className = (((class_name_86988 === ""))?class_86993:[cljs.core.str(class_name_86988),cljs.core.str(" "),cljs.core.str(class_86993)].join(''));
}
{
var G__86994 = seq__86957_86989;
var G__86995 = chunk__86958_86990;
var G__86996 = count__86959_86991;
var G__86997 = (i__86960_86992 + 1);
seq__86957_86989 = G__86994;
chunk__86958_86990 = G__86995;
count__86959_86991 = G__86996;
i__86960_86992 = G__86997;
continue;
}
} else
{var temp__4092__auto___86998 = cljs.core.seq.call(null,seq__86957_86989);if(temp__4092__auto___86998)
{var seq__86957_86999__$1 = temp__4092__auto___86998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86957_86999__$1))
{var c__8552__auto___87000 = cljs.core.chunk_first.call(null,seq__86957_86999__$1);{
var G__87001 = cljs.core.chunk_rest.call(null,seq__86957_86999__$1);
var G__87002 = c__8552__auto___87000;
var G__87003 = cljs.core.count.call(null,c__8552__auto___87000);
var G__87004 = 0;
seq__86957_86989 = G__87001;
chunk__86958_86990 = G__87002;
count__86959_86991 = G__87003;
i__86960_86992 = G__87004;
continue;
}
} else
{var class_87005 = cljs.core.first.call(null,seq__86957_86999__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_86988,class_87005)))
{} else
{elem__$1.className = (((class_name_86988 === ""))?class_87005:[cljs.core.str(class_name_86988),cljs.core.str(" "),cljs.core.str(class_87005)].join(''));
}
{
var G__87006 = cljs.core.next.call(null,seq__86957_86999__$1);
var G__87007 = null;
var G__87008 = 0;
var G__87009 = 0;
seq__86957_86989 = G__87006;
chunk__86958_86990 = G__87007;
count__86959_86991 = G__87008;
i__86960_86992 = G__87009;
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
var G__87010__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__86961_87011 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__86962_87012 = null;var count__86963_87013 = 0;var i__86964_87014 = 0;while(true){
if((i__86964_87014 < count__86963_87013))
{var c_87015 = cljs.core._nth.call(null,chunk__86962_87012,i__86964_87014);add_class_BANG_.call(null,elem__$1,c_87015);
{
var G__87016 = seq__86961_87011;
var G__87017 = chunk__86962_87012;
var G__87018 = count__86963_87013;
var G__87019 = (i__86964_87014 + 1);
seq__86961_87011 = G__87016;
chunk__86962_87012 = G__87017;
count__86963_87013 = G__87018;
i__86964_87014 = G__87019;
continue;
}
} else
{var temp__4092__auto___87020 = cljs.core.seq.call(null,seq__86961_87011);if(temp__4092__auto___87020)
{var seq__86961_87021__$1 = temp__4092__auto___87020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86961_87021__$1))
{var c__8552__auto___87022 = cljs.core.chunk_first.call(null,seq__86961_87021__$1);{
var G__87023 = cljs.core.chunk_rest.call(null,seq__86961_87021__$1);
var G__87024 = c__8552__auto___87022;
var G__87025 = cljs.core.count.call(null,c__8552__auto___87022);
var G__87026 = 0;
seq__86961_87011 = G__87023;
chunk__86962_87012 = G__87024;
count__86963_87013 = G__87025;
i__86964_87014 = G__87026;
continue;
}
} else
{var c_87027 = cljs.core.first.call(null,seq__86961_87021__$1);add_class_BANG_.call(null,elem__$1,c_87027);
{
var G__87028 = cljs.core.next.call(null,seq__86961_87021__$1);
var G__87029 = null;
var G__87030 = 0;
var G__87031 = 0;
seq__86961_87011 = G__87028;
chunk__86962_87012 = G__87029;
count__86963_87013 = G__87030;
i__86964_87014 = G__87031;
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
var G__87010 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87010__delegate.call(this,elem,classes,more_classes);};
G__87010.cljs$lang$maxFixedArity = 2;
G__87010.cljs$lang$applyTo = (function (arglist__87032){
var elem = cljs.core.first(arglist__87032);
arglist__87032 = cljs.core.next(arglist__87032);
var classes = cljs.core.first(arglist__87032);
var more_classes = cljs.core.rest(arglist__87032);
return G__87010__delegate(elem,classes,more_classes);
});
G__87010.cljs$core$IFn$_invoke$arity$variadic = G__87010__delegate;
return G__87010;
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
var G__87033 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__87033;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___87042 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___87042))
{var class_list_87043 = temp__4090__auto___87042;class_list_87043.remove(class$__$1);
} else
{var class_name_87044 = elem__$1.className;var new_class_name_87045 = dommy.attrs.remove_class_str.call(null,class_name_87044,class$__$1);if((class_name_87044 === new_class_name_87045))
{} else
{elem__$1.className = new_class_name_87045;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__87046__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__87038 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__87039 = null;var count__87040 = 0;var i__87041 = 0;while(true){
if((i__87041 < count__87040))
{var c = cljs.core._nth.call(null,chunk__87039,i__87041);remove_class_BANG_.call(null,elem__$1,c);
{
var G__87047 = seq__87038;
var G__87048 = chunk__87039;
var G__87049 = count__87040;
var G__87050 = (i__87041 + 1);
seq__87038 = G__87047;
chunk__87039 = G__87048;
count__87040 = G__87049;
i__87041 = G__87050;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__87038);if(temp__4092__auto__)
{var seq__87038__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87038__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__87038__$1);{
var G__87051 = cljs.core.chunk_rest.call(null,seq__87038__$1);
var G__87052 = c__8552__auto__;
var G__87053 = cljs.core.count.call(null,c__8552__auto__);
var G__87054 = 0;
seq__87038 = G__87051;
chunk__87039 = G__87052;
count__87040 = G__87053;
i__87041 = G__87054;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__87038__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__87055 = cljs.core.next.call(null,seq__87038__$1);
var G__87056 = null;
var G__87057 = 0;
var G__87058 = 0;
seq__87038 = G__87055;
chunk__87039 = G__87056;
count__87040 = G__87057;
i__87041 = G__87058;
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
var G__87046 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87046__delegate.call(this,elem,class$,classes);};
G__87046.cljs$lang$maxFixedArity = 2;
G__87046.cljs$lang$applyTo = (function (arglist__87059){
var elem = cljs.core.first(arglist__87059);
arglist__87059 = cljs.core.next(arglist__87059);
var class$ = cljs.core.first(arglist__87059);
var classes = cljs.core.rest(arglist__87059);
return G__87046__delegate(elem,class$,classes);
});
G__87046.cljs$core$IFn$_invoke$arity$variadic = G__87046__delegate;
return G__87046;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___87060 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___87060))
{var class_list_87061 = temp__4090__auto___87060;class_list_87061.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__87064){var vec__87065 = p__87064;var k = cljs.core.nth.call(null,vec__87065,0,null);var v = cljs.core.nth.call(null,vec__87065,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__87072_87078 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__87073_87079 = null;var count__87074_87080 = 0;var i__87075_87081 = 0;while(true){
if((i__87075_87081 < count__87074_87080))
{var vec__87076_87082 = cljs.core._nth.call(null,chunk__87073_87079,i__87075_87081);var k_87083 = cljs.core.nth.call(null,vec__87076_87082,0,null);var v_87084 = cljs.core.nth.call(null,vec__87076_87082,1,null);(style[cljs.core.name.call(null,k_87083)] = v_87084);
{
var G__87085 = seq__87072_87078;
var G__87086 = chunk__87073_87079;
var G__87087 = count__87074_87080;
var G__87088 = (i__87075_87081 + 1);
seq__87072_87078 = G__87085;
chunk__87073_87079 = G__87086;
count__87074_87080 = G__87087;
i__87075_87081 = G__87088;
continue;
}
} else
{var temp__4092__auto___87089 = cljs.core.seq.call(null,seq__87072_87078);if(temp__4092__auto___87089)
{var seq__87072_87090__$1 = temp__4092__auto___87089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87072_87090__$1))
{var c__8552__auto___87091 = cljs.core.chunk_first.call(null,seq__87072_87090__$1);{
var G__87092 = cljs.core.chunk_rest.call(null,seq__87072_87090__$1);
var G__87093 = c__8552__auto___87091;
var G__87094 = cljs.core.count.call(null,c__8552__auto___87091);
var G__87095 = 0;
seq__87072_87078 = G__87092;
chunk__87073_87079 = G__87093;
count__87074_87080 = G__87094;
i__87075_87081 = G__87095;
continue;
}
} else
{var vec__87077_87096 = cljs.core.first.call(null,seq__87072_87090__$1);var k_87097 = cljs.core.nth.call(null,vec__87077_87096,0,null);var v_87098 = cljs.core.nth.call(null,vec__87077_87096,1,null);(style[cljs.core.name.call(null,k_87097)] = v_87098);
{
var G__87099 = cljs.core.next.call(null,seq__87072_87090__$1);
var G__87100 = null;
var G__87101 = 0;
var G__87102 = 0;
seq__87072_87078 = G__87099;
chunk__87073_87079 = G__87100;
count__87074_87080 = G__87101;
i__87075_87081 = G__87102;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__87103){
var elem = cljs.core.first(arglist__87103);
var kvs = cljs.core.rest(arglist__87103);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__87110_87116 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__87111_87117 = null;var count__87112_87118 = 0;var i__87113_87119 = 0;while(true){
if((i__87113_87119 < count__87112_87118))
{var vec__87114_87120 = cljs.core._nth.call(null,chunk__87111_87117,i__87113_87119);var k_87121 = cljs.core.nth.call(null,vec__87114_87120,0,null);var v_87122 = cljs.core.nth.call(null,vec__87114_87120,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_87121,[cljs.core.str(v_87122),cljs.core.str("px")].join(''));
{
var G__87123 = seq__87110_87116;
var G__87124 = chunk__87111_87117;
var G__87125 = count__87112_87118;
var G__87126 = (i__87113_87119 + 1);
seq__87110_87116 = G__87123;
chunk__87111_87117 = G__87124;
count__87112_87118 = G__87125;
i__87113_87119 = G__87126;
continue;
}
} else
{var temp__4092__auto___87127 = cljs.core.seq.call(null,seq__87110_87116);if(temp__4092__auto___87127)
{var seq__87110_87128__$1 = temp__4092__auto___87127;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87110_87128__$1))
{var c__8552__auto___87129 = cljs.core.chunk_first.call(null,seq__87110_87128__$1);{
var G__87130 = cljs.core.chunk_rest.call(null,seq__87110_87128__$1);
var G__87131 = c__8552__auto___87129;
var G__87132 = cljs.core.count.call(null,c__8552__auto___87129);
var G__87133 = 0;
seq__87110_87116 = G__87130;
chunk__87111_87117 = G__87131;
count__87112_87118 = G__87132;
i__87113_87119 = G__87133;
continue;
}
} else
{var vec__87115_87134 = cljs.core.first.call(null,seq__87110_87128__$1);var k_87135 = cljs.core.nth.call(null,vec__87115_87134,0,null);var v_87136 = cljs.core.nth.call(null,vec__87115_87134,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_87135,[cljs.core.str(v_87136),cljs.core.str("px")].join(''));
{
var G__87137 = cljs.core.next.call(null,seq__87110_87128__$1);
var G__87138 = null;
var G__87139 = 0;
var G__87140 = 0;
seq__87110_87116 = G__87137;
chunk__87111_87117 = G__87138;
count__87112_87118 = G__87139;
i__87113_87119 = G__87140;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__87141){
var elem = cljs.core.first(arglist__87141);
var kvs = cljs.core.rest(arglist__87141);
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
{var G__87150 = dommy.template.__GT_node_like.call(null,elem);(G__87150[cljs.core.name.call(null,k)] = v);
return G__87150;
} else
{var G__87151 = dommy.template.__GT_node_like.call(null,elem);G__87151.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__87151;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__87158__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__87152_87159 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__87153_87160 = null;var count__87154_87161 = 0;var i__87155_87162 = 0;while(true){
if((i__87155_87162 < count__87154_87161))
{var vec__87156_87163 = cljs.core._nth.call(null,chunk__87153_87160,i__87155_87162);var k_87164__$1 = cljs.core.nth.call(null,vec__87156_87163,0,null);var v_87165__$1 = cljs.core.nth.call(null,vec__87156_87163,1,null);set_attr_BANG_.call(null,elem__$1,k_87164__$1,v_87165__$1);
{
var G__87166 = seq__87152_87159;
var G__87167 = chunk__87153_87160;
var G__87168 = count__87154_87161;
var G__87169 = (i__87155_87162 + 1);
seq__87152_87159 = G__87166;
chunk__87153_87160 = G__87167;
count__87154_87161 = G__87168;
i__87155_87162 = G__87169;
continue;
}
} else
{var temp__4092__auto___87170 = cljs.core.seq.call(null,seq__87152_87159);if(temp__4092__auto___87170)
{var seq__87152_87171__$1 = temp__4092__auto___87170;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87152_87171__$1))
{var c__8552__auto___87172 = cljs.core.chunk_first.call(null,seq__87152_87171__$1);{
var G__87173 = cljs.core.chunk_rest.call(null,seq__87152_87171__$1);
var G__87174 = c__8552__auto___87172;
var G__87175 = cljs.core.count.call(null,c__8552__auto___87172);
var G__87176 = 0;
seq__87152_87159 = G__87173;
chunk__87153_87160 = G__87174;
count__87154_87161 = G__87175;
i__87155_87162 = G__87176;
continue;
}
} else
{var vec__87157_87177 = cljs.core.first.call(null,seq__87152_87171__$1);var k_87178__$1 = cljs.core.nth.call(null,vec__87157_87177,0,null);var v_87179__$1 = cljs.core.nth.call(null,vec__87157_87177,1,null);set_attr_BANG_.call(null,elem__$1,k_87178__$1,v_87179__$1);
{
var G__87180 = cljs.core.next.call(null,seq__87152_87171__$1);
var G__87181 = null;
var G__87182 = 0;
var G__87183 = 0;
seq__87152_87159 = G__87180;
chunk__87153_87160 = G__87181;
count__87154_87161 = G__87182;
i__87155_87162 = G__87183;
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
var G__87158 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__87158__delegate.call(this,elem,k,v,kvs);};
G__87158.cljs$lang$maxFixedArity = 3;
G__87158.cljs$lang$applyTo = (function (arglist__87184){
var elem = cljs.core.first(arglist__87184);
arglist__87184 = cljs.core.next(arglist__87184);
var k = cljs.core.first(arglist__87184);
arglist__87184 = cljs.core.next(arglist__87184);
var v = cljs.core.first(arglist__87184);
var kvs = cljs.core.rest(arglist__87184);
return G__87158__delegate(elem,k,v,kvs);
});
G__87158.cljs$core$IFn$_invoke$arity$variadic = G__87158__delegate;
return G__87158;
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
var G__87193__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__87189_87194 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__87190_87195 = null;var count__87191_87196 = 0;var i__87192_87197 = 0;while(true){
if((i__87192_87197 < count__87191_87196))
{var k_87198__$1 = cljs.core._nth.call(null,chunk__87190_87195,i__87192_87197);remove_attr_BANG_.call(null,elem__$1,k_87198__$1);
{
var G__87199 = seq__87189_87194;
var G__87200 = chunk__87190_87195;
var G__87201 = count__87191_87196;
var G__87202 = (i__87192_87197 + 1);
seq__87189_87194 = G__87199;
chunk__87190_87195 = G__87200;
count__87191_87196 = G__87201;
i__87192_87197 = G__87202;
continue;
}
} else
{var temp__4092__auto___87203 = cljs.core.seq.call(null,seq__87189_87194);if(temp__4092__auto___87203)
{var seq__87189_87204__$1 = temp__4092__auto___87203;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87189_87204__$1))
{var c__8552__auto___87205 = cljs.core.chunk_first.call(null,seq__87189_87204__$1);{
var G__87206 = cljs.core.chunk_rest.call(null,seq__87189_87204__$1);
var G__87207 = c__8552__auto___87205;
var G__87208 = cljs.core.count.call(null,c__8552__auto___87205);
var G__87209 = 0;
seq__87189_87194 = G__87206;
chunk__87190_87195 = G__87207;
count__87191_87196 = G__87208;
i__87192_87197 = G__87209;
continue;
}
} else
{var k_87210__$1 = cljs.core.first.call(null,seq__87189_87204__$1);remove_attr_BANG_.call(null,elem__$1,k_87210__$1);
{
var G__87211 = cljs.core.next.call(null,seq__87189_87204__$1);
var G__87212 = null;
var G__87213 = 0;
var G__87214 = 0;
seq__87189_87194 = G__87211;
chunk__87190_87195 = G__87212;
count__87191_87196 = G__87213;
i__87192_87197 = G__87214;
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
var G__87193 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87193__delegate.call(this,elem,k,ks);};
G__87193.cljs$lang$maxFixedArity = 2;
G__87193.cljs$lang$applyTo = (function (arglist__87215){
var elem = cljs.core.first(arglist__87215);
arglist__87215 = cljs.core.next(arglist__87215);
var k = cljs.core.first(arglist__87215);
var ks = cljs.core.rest(arglist__87215);
return G__87193__delegate(elem,k,ks);
});
G__87193.cljs$core$IFn$_invoke$arity$variadic = G__87193__delegate;
return G__87193;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__87217 = dommy.template.__GT_node_like.call(null,elem);G__87217.style.display = ((show_QMARK_)?"":"none");
return G__87217;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__87219 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__87219,false);
return G__87219;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__87221 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__87221,true);
return G__87221;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__87223 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__87223["constructor"] = Object);
return G__87223;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
