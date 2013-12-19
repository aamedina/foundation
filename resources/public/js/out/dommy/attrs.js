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
var G__189726 = (i + class$.length);
start_from = G__189726;
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
{var temp__4090__auto___189751 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___189751))
{var class_list_189752 = temp__4090__auto___189751;var seq__189739_189753 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__189740_189754 = null;var count__189741_189755 = 0;var i__189742_189756 = 0;while(true){
if((i__189742_189756 < count__189741_189755))
{var class_189757 = cljs.core._nth.call(null,chunk__189740_189754,i__189742_189756);class_list_189752.add(class_189757);
{
var G__189758 = seq__189739_189753;
var G__189759 = chunk__189740_189754;
var G__189760 = count__189741_189755;
var G__189761 = (i__189742_189756 + 1);
seq__189739_189753 = G__189758;
chunk__189740_189754 = G__189759;
count__189741_189755 = G__189760;
i__189742_189756 = G__189761;
continue;
}
} else
{var temp__4092__auto___189762 = cljs.core.seq.call(null,seq__189739_189753);if(temp__4092__auto___189762)
{var seq__189739_189763__$1 = temp__4092__auto___189762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189739_189763__$1))
{var c__8952__auto___189764 = cljs.core.chunk_first.call(null,seq__189739_189763__$1);{
var G__189765 = cljs.core.chunk_rest.call(null,seq__189739_189763__$1);
var G__189766 = c__8952__auto___189764;
var G__189767 = cljs.core.count.call(null,c__8952__auto___189764);
var G__189768 = 0;
seq__189739_189753 = G__189765;
chunk__189740_189754 = G__189766;
count__189741_189755 = G__189767;
i__189742_189756 = G__189768;
continue;
}
} else
{var class_189769 = cljs.core.first.call(null,seq__189739_189763__$1);class_list_189752.add(class_189769);
{
var G__189770 = cljs.core.next.call(null,seq__189739_189763__$1);
var G__189771 = null;
var G__189772 = 0;
var G__189773 = 0;
seq__189739_189753 = G__189770;
chunk__189740_189754 = G__189771;
count__189741_189755 = G__189772;
i__189742_189756 = G__189773;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_189774 = elem__$1.className;var seq__189743_189775 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__189744_189776 = null;var count__189745_189777 = 0;var i__189746_189778 = 0;while(true){
if((i__189746_189778 < count__189745_189777))
{var class_189779 = cljs.core._nth.call(null,chunk__189744_189776,i__189746_189778);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_189774,class_189779)))
{} else
{elem__$1.className = (((class_name_189774 === ""))?class_189779:[cljs.core.str(class_name_189774),cljs.core.str(" "),cljs.core.str(class_189779)].join(''));
}
{
var G__189780 = seq__189743_189775;
var G__189781 = chunk__189744_189776;
var G__189782 = count__189745_189777;
var G__189783 = (i__189746_189778 + 1);
seq__189743_189775 = G__189780;
chunk__189744_189776 = G__189781;
count__189745_189777 = G__189782;
i__189746_189778 = G__189783;
continue;
}
} else
{var temp__4092__auto___189784 = cljs.core.seq.call(null,seq__189743_189775);if(temp__4092__auto___189784)
{var seq__189743_189785__$1 = temp__4092__auto___189784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189743_189785__$1))
{var c__8952__auto___189786 = cljs.core.chunk_first.call(null,seq__189743_189785__$1);{
var G__189787 = cljs.core.chunk_rest.call(null,seq__189743_189785__$1);
var G__189788 = c__8952__auto___189786;
var G__189789 = cljs.core.count.call(null,c__8952__auto___189786);
var G__189790 = 0;
seq__189743_189775 = G__189787;
chunk__189744_189776 = G__189788;
count__189745_189777 = G__189789;
i__189746_189778 = G__189790;
continue;
}
} else
{var class_189791 = cljs.core.first.call(null,seq__189743_189785__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_189774,class_189791)))
{} else
{elem__$1.className = (((class_name_189774 === ""))?class_189791:[cljs.core.str(class_name_189774),cljs.core.str(" "),cljs.core.str(class_189791)].join(''));
}
{
var G__189792 = cljs.core.next.call(null,seq__189743_189785__$1);
var G__189793 = null;
var G__189794 = 0;
var G__189795 = 0;
seq__189743_189775 = G__189792;
chunk__189744_189776 = G__189793;
count__189745_189777 = G__189794;
i__189746_189778 = G__189795;
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
var G__189796__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__189747_189797 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__189748_189798 = null;var count__189749_189799 = 0;var i__189750_189800 = 0;while(true){
if((i__189750_189800 < count__189749_189799))
{var c_189801 = cljs.core._nth.call(null,chunk__189748_189798,i__189750_189800);add_class_BANG_.call(null,elem__$1,c_189801);
{
var G__189802 = seq__189747_189797;
var G__189803 = chunk__189748_189798;
var G__189804 = count__189749_189799;
var G__189805 = (i__189750_189800 + 1);
seq__189747_189797 = G__189802;
chunk__189748_189798 = G__189803;
count__189749_189799 = G__189804;
i__189750_189800 = G__189805;
continue;
}
} else
{var temp__4092__auto___189806 = cljs.core.seq.call(null,seq__189747_189797);if(temp__4092__auto___189806)
{var seq__189747_189807__$1 = temp__4092__auto___189806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189747_189807__$1))
{var c__8952__auto___189808 = cljs.core.chunk_first.call(null,seq__189747_189807__$1);{
var G__189809 = cljs.core.chunk_rest.call(null,seq__189747_189807__$1);
var G__189810 = c__8952__auto___189808;
var G__189811 = cljs.core.count.call(null,c__8952__auto___189808);
var G__189812 = 0;
seq__189747_189797 = G__189809;
chunk__189748_189798 = G__189810;
count__189749_189799 = G__189811;
i__189750_189800 = G__189812;
continue;
}
} else
{var c_189813 = cljs.core.first.call(null,seq__189747_189807__$1);add_class_BANG_.call(null,elem__$1,c_189813);
{
var G__189814 = cljs.core.next.call(null,seq__189747_189807__$1);
var G__189815 = null;
var G__189816 = 0;
var G__189817 = 0;
seq__189747_189797 = G__189814;
chunk__189748_189798 = G__189815;
count__189749_189799 = G__189816;
i__189750_189800 = G__189817;
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
var G__189796 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__189796__delegate.call(this,elem,classes,more_classes);};
G__189796.cljs$lang$maxFixedArity = 2;
G__189796.cljs$lang$applyTo = (function (arglist__189818){
var elem = cljs.core.first(arglist__189818);
arglist__189818 = cljs.core.next(arglist__189818);
var classes = cljs.core.first(arglist__189818);
var more_classes = cljs.core.rest(arglist__189818);
return G__189796__delegate(elem,classes,more_classes);
});
G__189796.cljs$core$IFn$_invoke$arity$variadic = G__189796__delegate;
return G__189796;
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
var G__189819 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__189819;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___189828 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___189828))
{var class_list_189829 = temp__4090__auto___189828;class_list_189829.remove(class$__$1);
} else
{var class_name_189830 = elem__$1.className;var new_class_name_189831 = dommy.attrs.remove_class_str.call(null,class_name_189830,class$__$1);if((class_name_189830 === new_class_name_189831))
{} else
{elem__$1.className = new_class_name_189831;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__189832__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__189824 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__189825 = null;var count__189826 = 0;var i__189827 = 0;while(true){
if((i__189827 < count__189826))
{var c = cljs.core._nth.call(null,chunk__189825,i__189827);remove_class_BANG_.call(null,elem__$1,c);
{
var G__189833 = seq__189824;
var G__189834 = chunk__189825;
var G__189835 = count__189826;
var G__189836 = (i__189827 + 1);
seq__189824 = G__189833;
chunk__189825 = G__189834;
count__189826 = G__189835;
i__189827 = G__189836;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__189824);if(temp__4092__auto__)
{var seq__189824__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189824__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__189824__$1);{
var G__189837 = cljs.core.chunk_rest.call(null,seq__189824__$1);
var G__189838 = c__8952__auto__;
var G__189839 = cljs.core.count.call(null,c__8952__auto__);
var G__189840 = 0;
seq__189824 = G__189837;
chunk__189825 = G__189838;
count__189826 = G__189839;
i__189827 = G__189840;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__189824__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__189841 = cljs.core.next.call(null,seq__189824__$1);
var G__189842 = null;
var G__189843 = 0;
var G__189844 = 0;
seq__189824 = G__189841;
chunk__189825 = G__189842;
count__189826 = G__189843;
i__189827 = G__189844;
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
var G__189832 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__189832__delegate.call(this,elem,class$,classes);};
G__189832.cljs$lang$maxFixedArity = 2;
G__189832.cljs$lang$applyTo = (function (arglist__189845){
var elem = cljs.core.first(arglist__189845);
arglist__189845 = cljs.core.next(arglist__189845);
var class$ = cljs.core.first(arglist__189845);
var classes = cljs.core.rest(arglist__189845);
return G__189832__delegate(elem,class$,classes);
});
G__189832.cljs$core$IFn$_invoke$arity$variadic = G__189832__delegate;
return G__189832;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___189846 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___189846))
{var class_list_189847 = temp__4090__auto___189846;class_list_189847.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__189850){var vec__189851 = p__189850;var k = cljs.core.nth.call(null,vec__189851,0,null);var v = cljs.core.nth.call(null,vec__189851,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__189858_189864 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__189859_189865 = null;var count__189860_189866 = 0;var i__189861_189867 = 0;while(true){
if((i__189861_189867 < count__189860_189866))
{var vec__189862_189868 = cljs.core._nth.call(null,chunk__189859_189865,i__189861_189867);var k_189869 = cljs.core.nth.call(null,vec__189862_189868,0,null);var v_189870 = cljs.core.nth.call(null,vec__189862_189868,1,null);(style[cljs.core.name.call(null,k_189869)] = v_189870);
{
var G__189871 = seq__189858_189864;
var G__189872 = chunk__189859_189865;
var G__189873 = count__189860_189866;
var G__189874 = (i__189861_189867 + 1);
seq__189858_189864 = G__189871;
chunk__189859_189865 = G__189872;
count__189860_189866 = G__189873;
i__189861_189867 = G__189874;
continue;
}
} else
{var temp__4092__auto___189875 = cljs.core.seq.call(null,seq__189858_189864);if(temp__4092__auto___189875)
{var seq__189858_189876__$1 = temp__4092__auto___189875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189858_189876__$1))
{var c__8952__auto___189877 = cljs.core.chunk_first.call(null,seq__189858_189876__$1);{
var G__189878 = cljs.core.chunk_rest.call(null,seq__189858_189876__$1);
var G__189879 = c__8952__auto___189877;
var G__189880 = cljs.core.count.call(null,c__8952__auto___189877);
var G__189881 = 0;
seq__189858_189864 = G__189878;
chunk__189859_189865 = G__189879;
count__189860_189866 = G__189880;
i__189861_189867 = G__189881;
continue;
}
} else
{var vec__189863_189882 = cljs.core.first.call(null,seq__189858_189876__$1);var k_189883 = cljs.core.nth.call(null,vec__189863_189882,0,null);var v_189884 = cljs.core.nth.call(null,vec__189863_189882,1,null);(style[cljs.core.name.call(null,k_189883)] = v_189884);
{
var G__189885 = cljs.core.next.call(null,seq__189858_189876__$1);
var G__189886 = null;
var G__189887 = 0;
var G__189888 = 0;
seq__189858_189864 = G__189885;
chunk__189859_189865 = G__189886;
count__189860_189866 = G__189887;
i__189861_189867 = G__189888;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__189889){
var elem = cljs.core.first(arglist__189889);
var kvs = cljs.core.rest(arglist__189889);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__189896_189902 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__189897_189903 = null;var count__189898_189904 = 0;var i__189899_189905 = 0;while(true){
if((i__189899_189905 < count__189898_189904))
{var vec__189900_189906 = cljs.core._nth.call(null,chunk__189897_189903,i__189899_189905);var k_189907 = cljs.core.nth.call(null,vec__189900_189906,0,null);var v_189908 = cljs.core.nth.call(null,vec__189900_189906,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_189907,[cljs.core.str(v_189908),cljs.core.str("px")].join(''));
{
var G__189909 = seq__189896_189902;
var G__189910 = chunk__189897_189903;
var G__189911 = count__189898_189904;
var G__189912 = (i__189899_189905 + 1);
seq__189896_189902 = G__189909;
chunk__189897_189903 = G__189910;
count__189898_189904 = G__189911;
i__189899_189905 = G__189912;
continue;
}
} else
{var temp__4092__auto___189913 = cljs.core.seq.call(null,seq__189896_189902);if(temp__4092__auto___189913)
{var seq__189896_189914__$1 = temp__4092__auto___189913;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189896_189914__$1))
{var c__8952__auto___189915 = cljs.core.chunk_first.call(null,seq__189896_189914__$1);{
var G__189916 = cljs.core.chunk_rest.call(null,seq__189896_189914__$1);
var G__189917 = c__8952__auto___189915;
var G__189918 = cljs.core.count.call(null,c__8952__auto___189915);
var G__189919 = 0;
seq__189896_189902 = G__189916;
chunk__189897_189903 = G__189917;
count__189898_189904 = G__189918;
i__189899_189905 = G__189919;
continue;
}
} else
{var vec__189901_189920 = cljs.core.first.call(null,seq__189896_189914__$1);var k_189921 = cljs.core.nth.call(null,vec__189901_189920,0,null);var v_189922 = cljs.core.nth.call(null,vec__189901_189920,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_189921,[cljs.core.str(v_189922),cljs.core.str("px")].join(''));
{
var G__189923 = cljs.core.next.call(null,seq__189896_189914__$1);
var G__189924 = null;
var G__189925 = 0;
var G__189926 = 0;
seq__189896_189902 = G__189923;
chunk__189897_189903 = G__189924;
count__189898_189904 = G__189925;
i__189899_189905 = G__189926;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__189927){
var elem = cljs.core.first(arglist__189927);
var kvs = cljs.core.rest(arglist__189927);
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
{var G__189936 = dommy.template.__GT_node_like.call(null,elem);(G__189936[cljs.core.name.call(null,k)] = v);
return G__189936;
} else
{var G__189937 = dommy.template.__GT_node_like.call(null,elem);G__189937.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__189937;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__189944__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__189938_189945 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__189939_189946 = null;var count__189940_189947 = 0;var i__189941_189948 = 0;while(true){
if((i__189941_189948 < count__189940_189947))
{var vec__189942_189949 = cljs.core._nth.call(null,chunk__189939_189946,i__189941_189948);var k_189950__$1 = cljs.core.nth.call(null,vec__189942_189949,0,null);var v_189951__$1 = cljs.core.nth.call(null,vec__189942_189949,1,null);set_attr_BANG_.call(null,elem__$1,k_189950__$1,v_189951__$1);
{
var G__189952 = seq__189938_189945;
var G__189953 = chunk__189939_189946;
var G__189954 = count__189940_189947;
var G__189955 = (i__189941_189948 + 1);
seq__189938_189945 = G__189952;
chunk__189939_189946 = G__189953;
count__189940_189947 = G__189954;
i__189941_189948 = G__189955;
continue;
}
} else
{var temp__4092__auto___189956 = cljs.core.seq.call(null,seq__189938_189945);if(temp__4092__auto___189956)
{var seq__189938_189957__$1 = temp__4092__auto___189956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189938_189957__$1))
{var c__8952__auto___189958 = cljs.core.chunk_first.call(null,seq__189938_189957__$1);{
var G__189959 = cljs.core.chunk_rest.call(null,seq__189938_189957__$1);
var G__189960 = c__8952__auto___189958;
var G__189961 = cljs.core.count.call(null,c__8952__auto___189958);
var G__189962 = 0;
seq__189938_189945 = G__189959;
chunk__189939_189946 = G__189960;
count__189940_189947 = G__189961;
i__189941_189948 = G__189962;
continue;
}
} else
{var vec__189943_189963 = cljs.core.first.call(null,seq__189938_189957__$1);var k_189964__$1 = cljs.core.nth.call(null,vec__189943_189963,0,null);var v_189965__$1 = cljs.core.nth.call(null,vec__189943_189963,1,null);set_attr_BANG_.call(null,elem__$1,k_189964__$1,v_189965__$1);
{
var G__189966 = cljs.core.next.call(null,seq__189938_189957__$1);
var G__189967 = null;
var G__189968 = 0;
var G__189969 = 0;
seq__189938_189945 = G__189966;
chunk__189939_189946 = G__189967;
count__189940_189947 = G__189968;
i__189941_189948 = G__189969;
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
var G__189944 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__189944__delegate.call(this,elem,k,v,kvs);};
G__189944.cljs$lang$maxFixedArity = 3;
G__189944.cljs$lang$applyTo = (function (arglist__189970){
var elem = cljs.core.first(arglist__189970);
arglist__189970 = cljs.core.next(arglist__189970);
var k = cljs.core.first(arglist__189970);
arglist__189970 = cljs.core.next(arglist__189970);
var v = cljs.core.first(arglist__189970);
var kvs = cljs.core.rest(arglist__189970);
return G__189944__delegate(elem,k,v,kvs);
});
G__189944.cljs$core$IFn$_invoke$arity$variadic = G__189944__delegate;
return G__189944;
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
var G__189979__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__189975_189980 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__189976_189981 = null;var count__189977_189982 = 0;var i__189978_189983 = 0;while(true){
if((i__189978_189983 < count__189977_189982))
{var k_189984__$1 = cljs.core._nth.call(null,chunk__189976_189981,i__189978_189983);remove_attr_BANG_.call(null,elem__$1,k_189984__$1);
{
var G__189985 = seq__189975_189980;
var G__189986 = chunk__189976_189981;
var G__189987 = count__189977_189982;
var G__189988 = (i__189978_189983 + 1);
seq__189975_189980 = G__189985;
chunk__189976_189981 = G__189986;
count__189977_189982 = G__189987;
i__189978_189983 = G__189988;
continue;
}
} else
{var temp__4092__auto___189989 = cljs.core.seq.call(null,seq__189975_189980);if(temp__4092__auto___189989)
{var seq__189975_189990__$1 = temp__4092__auto___189989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189975_189990__$1))
{var c__8952__auto___189991 = cljs.core.chunk_first.call(null,seq__189975_189990__$1);{
var G__189992 = cljs.core.chunk_rest.call(null,seq__189975_189990__$1);
var G__189993 = c__8952__auto___189991;
var G__189994 = cljs.core.count.call(null,c__8952__auto___189991);
var G__189995 = 0;
seq__189975_189980 = G__189992;
chunk__189976_189981 = G__189993;
count__189977_189982 = G__189994;
i__189978_189983 = G__189995;
continue;
}
} else
{var k_189996__$1 = cljs.core.first.call(null,seq__189975_189990__$1);remove_attr_BANG_.call(null,elem__$1,k_189996__$1);
{
var G__189997 = cljs.core.next.call(null,seq__189975_189990__$1);
var G__189998 = null;
var G__189999 = 0;
var G__190000 = 0;
seq__189975_189980 = G__189997;
chunk__189976_189981 = G__189998;
count__189977_189982 = G__189999;
i__189978_189983 = G__190000;
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
var G__189979 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__189979__delegate.call(this,elem,k,ks);};
G__189979.cljs$lang$maxFixedArity = 2;
G__189979.cljs$lang$applyTo = (function (arglist__190001){
var elem = cljs.core.first(arglist__190001);
arglist__190001 = cljs.core.next(arglist__190001);
var k = cljs.core.first(arglist__190001);
var ks = cljs.core.rest(arglist__190001);
return G__189979__delegate(elem,k,ks);
});
G__189979.cljs$core$IFn$_invoke$arity$variadic = G__189979__delegate;
return G__189979;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__190003 = dommy.template.__GT_node_like.call(null,elem);G__190003.style.display = ((show_QMARK_)?"":"none");
return G__190003;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__190005 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__190005,false);
return G__190005;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__190007 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__190007,true);
return G__190007;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__190009 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__190009["constructor"] = Object);
return G__190009;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map