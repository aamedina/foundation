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
var G__13692 = (i + class$.length);
start_from = G__13692;
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
{var temp__4090__auto___13717 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13717))
{var class_list_13718 = temp__4090__auto___13717;var seq__13705_13719 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13706_13720 = null;var count__13707_13721 = 0;var i__13708_13722 = 0;while(true){
if((i__13708_13722 < count__13707_13721))
{var class_13723 = cljs.core._nth.call(null,chunk__13706_13720,i__13708_13722);class_list_13718.add(class_13723);
{
var G__13724 = seq__13705_13719;
var G__13725 = chunk__13706_13720;
var G__13726 = count__13707_13721;
var G__13727 = (i__13708_13722 + 1);
seq__13705_13719 = G__13724;
chunk__13706_13720 = G__13725;
count__13707_13721 = G__13726;
i__13708_13722 = G__13727;
continue;
}
} else
{var temp__4092__auto___13728 = cljs.core.seq.call(null,seq__13705_13719);if(temp__4092__auto___13728)
{var seq__13705_13729__$1 = temp__4092__auto___13728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13705_13729__$1))
{var c__8927__auto___13730 = cljs.core.chunk_first.call(null,seq__13705_13729__$1);{
var G__13731 = cljs.core.chunk_rest.call(null,seq__13705_13729__$1);
var G__13732 = c__8927__auto___13730;
var G__13733 = cljs.core.count.call(null,c__8927__auto___13730);
var G__13734 = 0;
seq__13705_13719 = G__13731;
chunk__13706_13720 = G__13732;
count__13707_13721 = G__13733;
i__13708_13722 = G__13734;
continue;
}
} else
{var class_13735 = cljs.core.first.call(null,seq__13705_13729__$1);class_list_13718.add(class_13735);
{
var G__13736 = cljs.core.next.call(null,seq__13705_13729__$1);
var G__13737 = null;
var G__13738 = 0;
var G__13739 = 0;
seq__13705_13719 = G__13736;
chunk__13706_13720 = G__13737;
count__13707_13721 = G__13738;
i__13708_13722 = G__13739;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_13740 = elem__$1.className;var seq__13709_13741 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__13710_13742 = null;var count__13711_13743 = 0;var i__13712_13744 = 0;while(true){
if((i__13712_13744 < count__13711_13743))
{var class_13745 = cljs.core._nth.call(null,chunk__13710_13742,i__13712_13744);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13740,class_13745)))
{} else
{elem__$1.className = (((class_name_13740 === ""))?class_13745:[cljs.core.str(class_name_13740),cljs.core.str(" "),cljs.core.str(class_13745)].join(''));
}
{
var G__13746 = seq__13709_13741;
var G__13747 = chunk__13710_13742;
var G__13748 = count__13711_13743;
var G__13749 = (i__13712_13744 + 1);
seq__13709_13741 = G__13746;
chunk__13710_13742 = G__13747;
count__13711_13743 = G__13748;
i__13712_13744 = G__13749;
continue;
}
} else
{var temp__4092__auto___13750 = cljs.core.seq.call(null,seq__13709_13741);if(temp__4092__auto___13750)
{var seq__13709_13751__$1 = temp__4092__auto___13750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13709_13751__$1))
{var c__8927__auto___13752 = cljs.core.chunk_first.call(null,seq__13709_13751__$1);{
var G__13753 = cljs.core.chunk_rest.call(null,seq__13709_13751__$1);
var G__13754 = c__8927__auto___13752;
var G__13755 = cljs.core.count.call(null,c__8927__auto___13752);
var G__13756 = 0;
seq__13709_13741 = G__13753;
chunk__13710_13742 = G__13754;
count__13711_13743 = G__13755;
i__13712_13744 = G__13756;
continue;
}
} else
{var class_13757 = cljs.core.first.call(null,seq__13709_13751__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_13740,class_13757)))
{} else
{elem__$1.className = (((class_name_13740 === ""))?class_13757:[cljs.core.str(class_name_13740),cljs.core.str(" "),cljs.core.str(class_13757)].join(''));
}
{
var G__13758 = cljs.core.next.call(null,seq__13709_13751__$1);
var G__13759 = null;
var G__13760 = 0;
var G__13761 = 0;
seq__13709_13741 = G__13758;
chunk__13710_13742 = G__13759;
count__13711_13743 = G__13760;
i__13712_13744 = G__13761;
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
var G__13762__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13713_13763 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__13714_13764 = null;var count__13715_13765 = 0;var i__13716_13766 = 0;while(true){
if((i__13716_13766 < count__13715_13765))
{var c_13767 = cljs.core._nth.call(null,chunk__13714_13764,i__13716_13766);add_class_BANG_.call(null,elem__$1,c_13767);
{
var G__13768 = seq__13713_13763;
var G__13769 = chunk__13714_13764;
var G__13770 = count__13715_13765;
var G__13771 = (i__13716_13766 + 1);
seq__13713_13763 = G__13768;
chunk__13714_13764 = G__13769;
count__13715_13765 = G__13770;
i__13716_13766 = G__13771;
continue;
}
} else
{var temp__4092__auto___13772 = cljs.core.seq.call(null,seq__13713_13763);if(temp__4092__auto___13772)
{var seq__13713_13773__$1 = temp__4092__auto___13772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13713_13773__$1))
{var c__8927__auto___13774 = cljs.core.chunk_first.call(null,seq__13713_13773__$1);{
var G__13775 = cljs.core.chunk_rest.call(null,seq__13713_13773__$1);
var G__13776 = c__8927__auto___13774;
var G__13777 = cljs.core.count.call(null,c__8927__auto___13774);
var G__13778 = 0;
seq__13713_13763 = G__13775;
chunk__13714_13764 = G__13776;
count__13715_13765 = G__13777;
i__13716_13766 = G__13778;
continue;
}
} else
{var c_13779 = cljs.core.first.call(null,seq__13713_13773__$1);add_class_BANG_.call(null,elem__$1,c_13779);
{
var G__13780 = cljs.core.next.call(null,seq__13713_13773__$1);
var G__13781 = null;
var G__13782 = 0;
var G__13783 = 0;
seq__13713_13763 = G__13780;
chunk__13714_13764 = G__13781;
count__13715_13765 = G__13782;
i__13716_13766 = G__13783;
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
var G__13762 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13762__delegate.call(this,elem,classes,more_classes);};
G__13762.cljs$lang$maxFixedArity = 2;
G__13762.cljs$lang$applyTo = (function (arglist__13784){
var elem = cljs.core.first(arglist__13784);
arglist__13784 = cljs.core.next(arglist__13784);
var classes = cljs.core.first(arglist__13784);
var more_classes = cljs.core.rest(arglist__13784);
return G__13762__delegate(elem,classes,more_classes);
});
G__13762.cljs$core$IFn$_invoke$arity$variadic = G__13762__delegate;
return G__13762;
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
var G__13785 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__13785;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13794 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13794))
{var class_list_13795 = temp__4090__auto___13794;class_list_13795.remove(class$__$1);
} else
{var class_name_13796 = elem__$1.className;var new_class_name_13797 = dommy.attrs.remove_class_str.call(null,class_name_13796,class$__$1);if((class_name_13796 === new_class_name_13797))
{} else
{elem__$1.className = new_class_name_13797;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__13798__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13790 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__13791 = null;var count__13792 = 0;var i__13793 = 0;while(true){
if((i__13793 < count__13792))
{var c = cljs.core._nth.call(null,chunk__13791,i__13793);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13799 = seq__13790;
var G__13800 = chunk__13791;
var G__13801 = count__13792;
var G__13802 = (i__13793 + 1);
seq__13790 = G__13799;
chunk__13791 = G__13800;
count__13792 = G__13801;
i__13793 = G__13802;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__13790);if(temp__4092__auto__)
{var seq__13790__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13790__$1))
{var c__8927__auto__ = cljs.core.chunk_first.call(null,seq__13790__$1);{
var G__13803 = cljs.core.chunk_rest.call(null,seq__13790__$1);
var G__13804 = c__8927__auto__;
var G__13805 = cljs.core.count.call(null,c__8927__auto__);
var G__13806 = 0;
seq__13790 = G__13803;
chunk__13791 = G__13804;
count__13792 = G__13805;
i__13793 = G__13806;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__13790__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__13807 = cljs.core.next.call(null,seq__13790__$1);
var G__13808 = null;
var G__13809 = 0;
var G__13810 = 0;
seq__13790 = G__13807;
chunk__13791 = G__13808;
count__13792 = G__13809;
i__13793 = G__13810;
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
var G__13798 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13798__delegate.call(this,elem,class$,classes);};
G__13798.cljs$lang$maxFixedArity = 2;
G__13798.cljs$lang$applyTo = (function (arglist__13811){
var elem = cljs.core.first(arglist__13811);
arglist__13811 = cljs.core.next(arglist__13811);
var class$ = cljs.core.first(arglist__13811);
var classes = cljs.core.rest(arglist__13811);
return G__13798__delegate(elem,class$,classes);
});
G__13798.cljs$core$IFn$_invoke$arity$variadic = G__13798__delegate;
return G__13798;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___13812 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___13812))
{var class_list_13813 = temp__4090__auto___13812;class_list_13813.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__13816){var vec__13817 = p__13816;var k = cljs.core.nth.call(null,vec__13817,0,null);var v = cljs.core.nth.call(null,vec__13817,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__13824_13830 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13825_13831 = null;var count__13826_13832 = 0;var i__13827_13833 = 0;while(true){
if((i__13827_13833 < count__13826_13832))
{var vec__13828_13834 = cljs.core._nth.call(null,chunk__13825_13831,i__13827_13833);var k_13835 = cljs.core.nth.call(null,vec__13828_13834,0,null);var v_13836 = cljs.core.nth.call(null,vec__13828_13834,1,null);(style[cljs.core.name.call(null,k_13835)] = v_13836);
{
var G__13837 = seq__13824_13830;
var G__13838 = chunk__13825_13831;
var G__13839 = count__13826_13832;
var G__13840 = (i__13827_13833 + 1);
seq__13824_13830 = G__13837;
chunk__13825_13831 = G__13838;
count__13826_13832 = G__13839;
i__13827_13833 = G__13840;
continue;
}
} else
{var temp__4092__auto___13841 = cljs.core.seq.call(null,seq__13824_13830);if(temp__4092__auto___13841)
{var seq__13824_13842__$1 = temp__4092__auto___13841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13824_13842__$1))
{var c__8927__auto___13843 = cljs.core.chunk_first.call(null,seq__13824_13842__$1);{
var G__13844 = cljs.core.chunk_rest.call(null,seq__13824_13842__$1);
var G__13845 = c__8927__auto___13843;
var G__13846 = cljs.core.count.call(null,c__8927__auto___13843);
var G__13847 = 0;
seq__13824_13830 = G__13844;
chunk__13825_13831 = G__13845;
count__13826_13832 = G__13846;
i__13827_13833 = G__13847;
continue;
}
} else
{var vec__13829_13848 = cljs.core.first.call(null,seq__13824_13842__$1);var k_13849 = cljs.core.nth.call(null,vec__13829_13848,0,null);var v_13850 = cljs.core.nth.call(null,vec__13829_13848,1,null);(style[cljs.core.name.call(null,k_13849)] = v_13850);
{
var G__13851 = cljs.core.next.call(null,seq__13824_13842__$1);
var G__13852 = null;
var G__13853 = 0;
var G__13854 = 0;
seq__13824_13830 = G__13851;
chunk__13825_13831 = G__13852;
count__13826_13832 = G__13853;
i__13827_13833 = G__13854;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13855){
var elem = cljs.core.first(arglist__13855);
var kvs = cljs.core.rest(arglist__13855);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13862_13868 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__13863_13869 = null;var count__13864_13870 = 0;var i__13865_13871 = 0;while(true){
if((i__13865_13871 < count__13864_13870))
{var vec__13866_13872 = cljs.core._nth.call(null,chunk__13863_13869,i__13865_13871);var k_13873 = cljs.core.nth.call(null,vec__13866_13872,0,null);var v_13874 = cljs.core.nth.call(null,vec__13866_13872,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13873,[cljs.core.str(v_13874),cljs.core.str("px")].join(''));
{
var G__13875 = seq__13862_13868;
var G__13876 = chunk__13863_13869;
var G__13877 = count__13864_13870;
var G__13878 = (i__13865_13871 + 1);
seq__13862_13868 = G__13875;
chunk__13863_13869 = G__13876;
count__13864_13870 = G__13877;
i__13865_13871 = G__13878;
continue;
}
} else
{var temp__4092__auto___13879 = cljs.core.seq.call(null,seq__13862_13868);if(temp__4092__auto___13879)
{var seq__13862_13880__$1 = temp__4092__auto___13879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13862_13880__$1))
{var c__8927__auto___13881 = cljs.core.chunk_first.call(null,seq__13862_13880__$1);{
var G__13882 = cljs.core.chunk_rest.call(null,seq__13862_13880__$1);
var G__13883 = c__8927__auto___13881;
var G__13884 = cljs.core.count.call(null,c__8927__auto___13881);
var G__13885 = 0;
seq__13862_13868 = G__13882;
chunk__13863_13869 = G__13883;
count__13864_13870 = G__13884;
i__13865_13871 = G__13885;
continue;
}
} else
{var vec__13867_13886 = cljs.core.first.call(null,seq__13862_13880__$1);var k_13887 = cljs.core.nth.call(null,vec__13867_13886,0,null);var v_13888 = cljs.core.nth.call(null,vec__13867_13886,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_13887,[cljs.core.str(v_13888),cljs.core.str("px")].join(''));
{
var G__13889 = cljs.core.next.call(null,seq__13862_13880__$1);
var G__13890 = null;
var G__13891 = 0;
var G__13892 = 0;
seq__13862_13868 = G__13889;
chunk__13863_13869 = G__13890;
count__13864_13870 = G__13891;
i__13865_13871 = G__13892;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__13893){
var elem = cljs.core.first(arglist__13893);
var kvs = cljs.core.rest(arglist__13893);
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
{var G__13902 = dommy.template.__GT_node_like.call(null,elem);(G__13902[cljs.core.name.call(null,k)] = v);
return G__13902;
} else
{var G__13903 = dommy.template.__GT_node_like.call(null,elem);G__13903.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__13903;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__13910__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13904_13911 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__13905_13912 = null;var count__13906_13913 = 0;var i__13907_13914 = 0;while(true){
if((i__13907_13914 < count__13906_13913))
{var vec__13908_13915 = cljs.core._nth.call(null,chunk__13905_13912,i__13907_13914);var k_13916__$1 = cljs.core.nth.call(null,vec__13908_13915,0,null);var v_13917__$1 = cljs.core.nth.call(null,vec__13908_13915,1,null);set_attr_BANG_.call(null,elem__$1,k_13916__$1,v_13917__$1);
{
var G__13918 = seq__13904_13911;
var G__13919 = chunk__13905_13912;
var G__13920 = count__13906_13913;
var G__13921 = (i__13907_13914 + 1);
seq__13904_13911 = G__13918;
chunk__13905_13912 = G__13919;
count__13906_13913 = G__13920;
i__13907_13914 = G__13921;
continue;
}
} else
{var temp__4092__auto___13922 = cljs.core.seq.call(null,seq__13904_13911);if(temp__4092__auto___13922)
{var seq__13904_13923__$1 = temp__4092__auto___13922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13904_13923__$1))
{var c__8927__auto___13924 = cljs.core.chunk_first.call(null,seq__13904_13923__$1);{
var G__13925 = cljs.core.chunk_rest.call(null,seq__13904_13923__$1);
var G__13926 = c__8927__auto___13924;
var G__13927 = cljs.core.count.call(null,c__8927__auto___13924);
var G__13928 = 0;
seq__13904_13911 = G__13925;
chunk__13905_13912 = G__13926;
count__13906_13913 = G__13927;
i__13907_13914 = G__13928;
continue;
}
} else
{var vec__13909_13929 = cljs.core.first.call(null,seq__13904_13923__$1);var k_13930__$1 = cljs.core.nth.call(null,vec__13909_13929,0,null);var v_13931__$1 = cljs.core.nth.call(null,vec__13909_13929,1,null);set_attr_BANG_.call(null,elem__$1,k_13930__$1,v_13931__$1);
{
var G__13932 = cljs.core.next.call(null,seq__13904_13923__$1);
var G__13933 = null;
var G__13934 = 0;
var G__13935 = 0;
seq__13904_13911 = G__13932;
chunk__13905_13912 = G__13933;
count__13906_13913 = G__13934;
i__13907_13914 = G__13935;
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
var G__13910 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__13910__delegate.call(this,elem,k,v,kvs);};
G__13910.cljs$lang$maxFixedArity = 3;
G__13910.cljs$lang$applyTo = (function (arglist__13936){
var elem = cljs.core.first(arglist__13936);
arglist__13936 = cljs.core.next(arglist__13936);
var k = cljs.core.first(arglist__13936);
arglist__13936 = cljs.core.next(arglist__13936);
var v = cljs.core.first(arglist__13936);
var kvs = cljs.core.rest(arglist__13936);
return G__13910__delegate(elem,k,v,kvs);
});
G__13910.cljs$core$IFn$_invoke$arity$variadic = G__13910__delegate;
return G__13910;
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
var G__13945__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__13941_13946 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__13942_13947 = null;var count__13943_13948 = 0;var i__13944_13949 = 0;while(true){
if((i__13944_13949 < count__13943_13948))
{var k_13950__$1 = cljs.core._nth.call(null,chunk__13942_13947,i__13944_13949);remove_attr_BANG_.call(null,elem__$1,k_13950__$1);
{
var G__13951 = seq__13941_13946;
var G__13952 = chunk__13942_13947;
var G__13953 = count__13943_13948;
var G__13954 = (i__13944_13949 + 1);
seq__13941_13946 = G__13951;
chunk__13942_13947 = G__13952;
count__13943_13948 = G__13953;
i__13944_13949 = G__13954;
continue;
}
} else
{var temp__4092__auto___13955 = cljs.core.seq.call(null,seq__13941_13946);if(temp__4092__auto___13955)
{var seq__13941_13956__$1 = temp__4092__auto___13955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13941_13956__$1))
{var c__8927__auto___13957 = cljs.core.chunk_first.call(null,seq__13941_13956__$1);{
var G__13958 = cljs.core.chunk_rest.call(null,seq__13941_13956__$1);
var G__13959 = c__8927__auto___13957;
var G__13960 = cljs.core.count.call(null,c__8927__auto___13957);
var G__13961 = 0;
seq__13941_13946 = G__13958;
chunk__13942_13947 = G__13959;
count__13943_13948 = G__13960;
i__13944_13949 = G__13961;
continue;
}
} else
{var k_13962__$1 = cljs.core.first.call(null,seq__13941_13956__$1);remove_attr_BANG_.call(null,elem__$1,k_13962__$1);
{
var G__13963 = cljs.core.next.call(null,seq__13941_13956__$1);
var G__13964 = null;
var G__13965 = 0;
var G__13966 = 0;
seq__13941_13946 = G__13963;
chunk__13942_13947 = G__13964;
count__13943_13948 = G__13965;
i__13944_13949 = G__13966;
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
var G__13945 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__13945__delegate.call(this,elem,k,ks);};
G__13945.cljs$lang$maxFixedArity = 2;
G__13945.cljs$lang$applyTo = (function (arglist__13967){
var elem = cljs.core.first(arglist__13967);
arglist__13967 = cljs.core.next(arglist__13967);
var k = cljs.core.first(arglist__13967);
var ks = cljs.core.rest(arglist__13967);
return G__13945__delegate(elem,k,ks);
});
G__13945.cljs$core$IFn$_invoke$arity$variadic = G__13945__delegate;
return G__13945;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__13969 = dommy.template.__GT_node_like.call(null,elem);G__13969.style.display = ((show_QMARK_)?"":"none");
return G__13969;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__13971 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13971,false);
return G__13971;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__13973 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__13973,true);
return G__13973;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__13975 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__13975["constructor"] = Object);
return G__13975;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map