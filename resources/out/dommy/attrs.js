// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__13809__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__13809__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__13809__auto__;
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
var G__84636 = (i + class$.length);
start_from = G__84636;
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
{var temp__4090__auto___84661 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___84661))
{var class_list_84662 = temp__4090__auto___84661;var seq__84649_84663 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__84650_84664 = null;var count__84651_84665 = 0;var i__84652_84666 = 0;while(true){
if((i__84652_84666 < count__84651_84665))
{var class_84667 = cljs.core._nth.call(null,chunk__84650_84664,i__84652_84666);class_list_84662.add(class_84667);
{
var G__84668 = seq__84649_84663;
var G__84669 = chunk__84650_84664;
var G__84670 = count__84651_84665;
var G__84671 = (i__84652_84666 + 1);
seq__84649_84663 = G__84668;
chunk__84650_84664 = G__84669;
count__84651_84665 = G__84670;
i__84652_84666 = G__84671;
continue;
}
} else
{var temp__4092__auto___84672 = cljs.core.seq.call(null,seq__84649_84663);if(temp__4092__auto___84672)
{var seq__84649_84673__$1 = temp__4092__auto___84672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84649_84673__$1))
{var c__14545__auto___84674 = cljs.core.chunk_first.call(null,seq__84649_84673__$1);{
var G__84675 = cljs.core.chunk_rest.call(null,seq__84649_84673__$1);
var G__84676 = c__14545__auto___84674;
var G__84677 = cljs.core.count.call(null,c__14545__auto___84674);
var G__84678 = 0;
seq__84649_84663 = G__84675;
chunk__84650_84664 = G__84676;
count__84651_84665 = G__84677;
i__84652_84666 = G__84678;
continue;
}
} else
{var class_84679 = cljs.core.first.call(null,seq__84649_84673__$1);class_list_84662.add(class_84679);
{
var G__84680 = cljs.core.next.call(null,seq__84649_84673__$1);
var G__84681 = null;
var G__84682 = 0;
var G__84683 = 0;
seq__84649_84663 = G__84680;
chunk__84650_84664 = G__84681;
count__84651_84665 = G__84682;
i__84652_84666 = G__84683;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_84684 = elem__$1.className;var seq__84653_84685 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__84654_84686 = null;var count__84655_84687 = 0;var i__84656_84688 = 0;while(true){
if((i__84656_84688 < count__84655_84687))
{var class_84689 = cljs.core._nth.call(null,chunk__84654_84686,i__84656_84688);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_84684,class_84689)))
{} else
{elem__$1.className = (((class_name_84684 === ""))?class_84689:[cljs.core.str(class_name_84684),cljs.core.str(" "),cljs.core.str(class_84689)].join(''));
}
{
var G__84690 = seq__84653_84685;
var G__84691 = chunk__84654_84686;
var G__84692 = count__84655_84687;
var G__84693 = (i__84656_84688 + 1);
seq__84653_84685 = G__84690;
chunk__84654_84686 = G__84691;
count__84655_84687 = G__84692;
i__84656_84688 = G__84693;
continue;
}
} else
{var temp__4092__auto___84694 = cljs.core.seq.call(null,seq__84653_84685);if(temp__4092__auto___84694)
{var seq__84653_84695__$1 = temp__4092__auto___84694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84653_84695__$1))
{var c__14545__auto___84696 = cljs.core.chunk_first.call(null,seq__84653_84695__$1);{
var G__84697 = cljs.core.chunk_rest.call(null,seq__84653_84695__$1);
var G__84698 = c__14545__auto___84696;
var G__84699 = cljs.core.count.call(null,c__14545__auto___84696);
var G__84700 = 0;
seq__84653_84685 = G__84697;
chunk__84654_84686 = G__84698;
count__84655_84687 = G__84699;
i__84656_84688 = G__84700;
continue;
}
} else
{var class_84701 = cljs.core.first.call(null,seq__84653_84695__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_84684,class_84701)))
{} else
{elem__$1.className = (((class_name_84684 === ""))?class_84701:[cljs.core.str(class_name_84684),cljs.core.str(" "),cljs.core.str(class_84701)].join(''));
}
{
var G__84702 = cljs.core.next.call(null,seq__84653_84695__$1);
var G__84703 = null;
var G__84704 = 0;
var G__84705 = 0;
seq__84653_84685 = G__84702;
chunk__84654_84686 = G__84703;
count__84655_84687 = G__84704;
i__84656_84688 = G__84705;
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
var G__84706__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__84657_84707 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__84658_84708 = null;var count__84659_84709 = 0;var i__84660_84710 = 0;while(true){
if((i__84660_84710 < count__84659_84709))
{var c_84711 = cljs.core._nth.call(null,chunk__84658_84708,i__84660_84710);add_class_BANG_.call(null,elem__$1,c_84711);
{
var G__84712 = seq__84657_84707;
var G__84713 = chunk__84658_84708;
var G__84714 = count__84659_84709;
var G__84715 = (i__84660_84710 + 1);
seq__84657_84707 = G__84712;
chunk__84658_84708 = G__84713;
count__84659_84709 = G__84714;
i__84660_84710 = G__84715;
continue;
}
} else
{var temp__4092__auto___84716 = cljs.core.seq.call(null,seq__84657_84707);if(temp__4092__auto___84716)
{var seq__84657_84717__$1 = temp__4092__auto___84716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84657_84717__$1))
{var c__14545__auto___84718 = cljs.core.chunk_first.call(null,seq__84657_84717__$1);{
var G__84719 = cljs.core.chunk_rest.call(null,seq__84657_84717__$1);
var G__84720 = c__14545__auto___84718;
var G__84721 = cljs.core.count.call(null,c__14545__auto___84718);
var G__84722 = 0;
seq__84657_84707 = G__84719;
chunk__84658_84708 = G__84720;
count__84659_84709 = G__84721;
i__84660_84710 = G__84722;
continue;
}
} else
{var c_84723 = cljs.core.first.call(null,seq__84657_84717__$1);add_class_BANG_.call(null,elem__$1,c_84723);
{
var G__84724 = cljs.core.next.call(null,seq__84657_84717__$1);
var G__84725 = null;
var G__84726 = 0;
var G__84727 = 0;
seq__84657_84707 = G__84724;
chunk__84658_84708 = G__84725;
count__84659_84709 = G__84726;
i__84660_84710 = G__84727;
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
var G__84706 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84706__delegate.call(this,elem,classes,more_classes);};
G__84706.cljs$lang$maxFixedArity = 2;
G__84706.cljs$lang$applyTo = (function (arglist__84728){
var elem = cljs.core.first(arglist__84728);
arglist__84728 = cljs.core.next(arglist__84728);
var classes = cljs.core.first(arglist__84728);
var more_classes = cljs.core.rest(arglist__84728);
return G__84706__delegate(elem,classes,more_classes);
});
G__84706.cljs$core$IFn$_invoke$arity$variadic = G__84706__delegate;
return G__84706;
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
var G__84729 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__84729;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___84738 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___84738))
{var class_list_84739 = temp__4090__auto___84738;class_list_84739.remove(class$__$1);
} else
{var class_name_84740 = elem__$1.className;var new_class_name_84741 = dommy.attrs.remove_class_str.call(null,class_name_84740,class$__$1);if((class_name_84740 === new_class_name_84741))
{} else
{elem__$1.className = new_class_name_84741;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__84742__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__84734 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__84735 = null;var count__84736 = 0;var i__84737 = 0;while(true){
if((i__84737 < count__84736))
{var c = cljs.core._nth.call(null,chunk__84735,i__84737);remove_class_BANG_.call(null,elem__$1,c);
{
var G__84743 = seq__84734;
var G__84744 = chunk__84735;
var G__84745 = count__84736;
var G__84746 = (i__84737 + 1);
seq__84734 = G__84743;
chunk__84735 = G__84744;
count__84736 = G__84745;
i__84737 = G__84746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__84734);if(temp__4092__auto__)
{var seq__84734__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84734__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__84734__$1);{
var G__84747 = cljs.core.chunk_rest.call(null,seq__84734__$1);
var G__84748 = c__14545__auto__;
var G__84749 = cljs.core.count.call(null,c__14545__auto__);
var G__84750 = 0;
seq__84734 = G__84747;
chunk__84735 = G__84748;
count__84736 = G__84749;
i__84737 = G__84750;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__84734__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__84751 = cljs.core.next.call(null,seq__84734__$1);
var G__84752 = null;
var G__84753 = 0;
var G__84754 = 0;
seq__84734 = G__84751;
chunk__84735 = G__84752;
count__84736 = G__84753;
i__84737 = G__84754;
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
var G__84742 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84742__delegate.call(this,elem,class$,classes);};
G__84742.cljs$lang$maxFixedArity = 2;
G__84742.cljs$lang$applyTo = (function (arglist__84755){
var elem = cljs.core.first(arglist__84755);
arglist__84755 = cljs.core.next(arglist__84755);
var class$ = cljs.core.first(arglist__84755);
var classes = cljs.core.rest(arglist__84755);
return G__84742__delegate(elem,class$,classes);
});
G__84742.cljs$core$IFn$_invoke$arity$variadic = G__84742__delegate;
return G__84742;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___84756 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___84756))
{var class_list_84757 = temp__4090__auto___84756;class_list_84757.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__84760){var vec__84761 = p__84760;var k = cljs.core.nth.call(null,vec__84761,0,null);var v = cljs.core.nth.call(null,vec__84761,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__84768_84774 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__84769_84775 = null;var count__84770_84776 = 0;var i__84771_84777 = 0;while(true){
if((i__84771_84777 < count__84770_84776))
{var vec__84772_84778 = cljs.core._nth.call(null,chunk__84769_84775,i__84771_84777);var k_84779 = cljs.core.nth.call(null,vec__84772_84778,0,null);var v_84780 = cljs.core.nth.call(null,vec__84772_84778,1,null);(style[cljs.core.name.call(null,k_84779)] = v_84780);
{
var G__84781 = seq__84768_84774;
var G__84782 = chunk__84769_84775;
var G__84783 = count__84770_84776;
var G__84784 = (i__84771_84777 + 1);
seq__84768_84774 = G__84781;
chunk__84769_84775 = G__84782;
count__84770_84776 = G__84783;
i__84771_84777 = G__84784;
continue;
}
} else
{var temp__4092__auto___84785 = cljs.core.seq.call(null,seq__84768_84774);if(temp__4092__auto___84785)
{var seq__84768_84786__$1 = temp__4092__auto___84785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84768_84786__$1))
{var c__14545__auto___84787 = cljs.core.chunk_first.call(null,seq__84768_84786__$1);{
var G__84788 = cljs.core.chunk_rest.call(null,seq__84768_84786__$1);
var G__84789 = c__14545__auto___84787;
var G__84790 = cljs.core.count.call(null,c__14545__auto___84787);
var G__84791 = 0;
seq__84768_84774 = G__84788;
chunk__84769_84775 = G__84789;
count__84770_84776 = G__84790;
i__84771_84777 = G__84791;
continue;
}
} else
{var vec__84773_84792 = cljs.core.first.call(null,seq__84768_84786__$1);var k_84793 = cljs.core.nth.call(null,vec__84773_84792,0,null);var v_84794 = cljs.core.nth.call(null,vec__84773_84792,1,null);(style[cljs.core.name.call(null,k_84793)] = v_84794);
{
var G__84795 = cljs.core.next.call(null,seq__84768_84786__$1);
var G__84796 = null;
var G__84797 = 0;
var G__84798 = 0;
seq__84768_84774 = G__84795;
chunk__84769_84775 = G__84796;
count__84770_84776 = G__84797;
i__84771_84777 = G__84798;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__84799){
var elem = cljs.core.first(arglist__84799);
var kvs = cljs.core.rest(arglist__84799);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__84806_84812 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__84807_84813 = null;var count__84808_84814 = 0;var i__84809_84815 = 0;while(true){
if((i__84809_84815 < count__84808_84814))
{var vec__84810_84816 = cljs.core._nth.call(null,chunk__84807_84813,i__84809_84815);var k_84817 = cljs.core.nth.call(null,vec__84810_84816,0,null);var v_84818 = cljs.core.nth.call(null,vec__84810_84816,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_84817,[cljs.core.str(v_84818),cljs.core.str("px")].join(''));
{
var G__84819 = seq__84806_84812;
var G__84820 = chunk__84807_84813;
var G__84821 = count__84808_84814;
var G__84822 = (i__84809_84815 + 1);
seq__84806_84812 = G__84819;
chunk__84807_84813 = G__84820;
count__84808_84814 = G__84821;
i__84809_84815 = G__84822;
continue;
}
} else
{var temp__4092__auto___84823 = cljs.core.seq.call(null,seq__84806_84812);if(temp__4092__auto___84823)
{var seq__84806_84824__$1 = temp__4092__auto___84823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84806_84824__$1))
{var c__14545__auto___84825 = cljs.core.chunk_first.call(null,seq__84806_84824__$1);{
var G__84826 = cljs.core.chunk_rest.call(null,seq__84806_84824__$1);
var G__84827 = c__14545__auto___84825;
var G__84828 = cljs.core.count.call(null,c__14545__auto___84825);
var G__84829 = 0;
seq__84806_84812 = G__84826;
chunk__84807_84813 = G__84827;
count__84808_84814 = G__84828;
i__84809_84815 = G__84829;
continue;
}
} else
{var vec__84811_84830 = cljs.core.first.call(null,seq__84806_84824__$1);var k_84831 = cljs.core.nth.call(null,vec__84811_84830,0,null);var v_84832 = cljs.core.nth.call(null,vec__84811_84830,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_84831,[cljs.core.str(v_84832),cljs.core.str("px")].join(''));
{
var G__84833 = cljs.core.next.call(null,seq__84806_84824__$1);
var G__84834 = null;
var G__84835 = 0;
var G__84836 = 0;
seq__84806_84812 = G__84833;
chunk__84807_84813 = G__84834;
count__84808_84814 = G__84835;
i__84809_84815 = G__84836;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__84837){
var elem = cljs.core.first(arglist__84837);
var kvs = cljs.core.rest(arglist__84837);
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
{var G__84846 = dommy.template.__GT_node_like.call(null,elem);(G__84846[cljs.core.name.call(null,k)] = v);
return G__84846;
} else
{var G__84847 = dommy.template.__GT_node_like.call(null,elem);G__84847.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__84847;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__84854__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__84848_84855 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__84849_84856 = null;var count__84850_84857 = 0;var i__84851_84858 = 0;while(true){
if((i__84851_84858 < count__84850_84857))
{var vec__84852_84859 = cljs.core._nth.call(null,chunk__84849_84856,i__84851_84858);var k_84860__$1 = cljs.core.nth.call(null,vec__84852_84859,0,null);var v_84861__$1 = cljs.core.nth.call(null,vec__84852_84859,1,null);set_attr_BANG_.call(null,elem__$1,k_84860__$1,v_84861__$1);
{
var G__84862 = seq__84848_84855;
var G__84863 = chunk__84849_84856;
var G__84864 = count__84850_84857;
var G__84865 = (i__84851_84858 + 1);
seq__84848_84855 = G__84862;
chunk__84849_84856 = G__84863;
count__84850_84857 = G__84864;
i__84851_84858 = G__84865;
continue;
}
} else
{var temp__4092__auto___84866 = cljs.core.seq.call(null,seq__84848_84855);if(temp__4092__auto___84866)
{var seq__84848_84867__$1 = temp__4092__auto___84866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84848_84867__$1))
{var c__14545__auto___84868 = cljs.core.chunk_first.call(null,seq__84848_84867__$1);{
var G__84869 = cljs.core.chunk_rest.call(null,seq__84848_84867__$1);
var G__84870 = c__14545__auto___84868;
var G__84871 = cljs.core.count.call(null,c__14545__auto___84868);
var G__84872 = 0;
seq__84848_84855 = G__84869;
chunk__84849_84856 = G__84870;
count__84850_84857 = G__84871;
i__84851_84858 = G__84872;
continue;
}
} else
{var vec__84853_84873 = cljs.core.first.call(null,seq__84848_84867__$1);var k_84874__$1 = cljs.core.nth.call(null,vec__84853_84873,0,null);var v_84875__$1 = cljs.core.nth.call(null,vec__84853_84873,1,null);set_attr_BANG_.call(null,elem__$1,k_84874__$1,v_84875__$1);
{
var G__84876 = cljs.core.next.call(null,seq__84848_84867__$1);
var G__84877 = null;
var G__84878 = 0;
var G__84879 = 0;
seq__84848_84855 = G__84876;
chunk__84849_84856 = G__84877;
count__84850_84857 = G__84878;
i__84851_84858 = G__84879;
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
var G__84854 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__84854__delegate.call(this,elem,k,v,kvs);};
G__84854.cljs$lang$maxFixedArity = 3;
G__84854.cljs$lang$applyTo = (function (arglist__84880){
var elem = cljs.core.first(arglist__84880);
arglist__84880 = cljs.core.next(arglist__84880);
var k = cljs.core.first(arglist__84880);
arglist__84880 = cljs.core.next(arglist__84880);
var v = cljs.core.first(arglist__84880);
var kvs = cljs.core.rest(arglist__84880);
return G__84854__delegate(elem,k,v,kvs);
});
G__84854.cljs$core$IFn$_invoke$arity$variadic = G__84854__delegate;
return G__84854;
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
var G__84889__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__84885_84890 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__84886_84891 = null;var count__84887_84892 = 0;var i__84888_84893 = 0;while(true){
if((i__84888_84893 < count__84887_84892))
{var k_84894__$1 = cljs.core._nth.call(null,chunk__84886_84891,i__84888_84893);remove_attr_BANG_.call(null,elem__$1,k_84894__$1);
{
var G__84895 = seq__84885_84890;
var G__84896 = chunk__84886_84891;
var G__84897 = count__84887_84892;
var G__84898 = (i__84888_84893 + 1);
seq__84885_84890 = G__84895;
chunk__84886_84891 = G__84896;
count__84887_84892 = G__84897;
i__84888_84893 = G__84898;
continue;
}
} else
{var temp__4092__auto___84899 = cljs.core.seq.call(null,seq__84885_84890);if(temp__4092__auto___84899)
{var seq__84885_84900__$1 = temp__4092__auto___84899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84885_84900__$1))
{var c__14545__auto___84901 = cljs.core.chunk_first.call(null,seq__84885_84900__$1);{
var G__84902 = cljs.core.chunk_rest.call(null,seq__84885_84900__$1);
var G__84903 = c__14545__auto___84901;
var G__84904 = cljs.core.count.call(null,c__14545__auto___84901);
var G__84905 = 0;
seq__84885_84890 = G__84902;
chunk__84886_84891 = G__84903;
count__84887_84892 = G__84904;
i__84888_84893 = G__84905;
continue;
}
} else
{var k_84906__$1 = cljs.core.first.call(null,seq__84885_84900__$1);remove_attr_BANG_.call(null,elem__$1,k_84906__$1);
{
var G__84907 = cljs.core.next.call(null,seq__84885_84900__$1);
var G__84908 = null;
var G__84909 = 0;
var G__84910 = 0;
seq__84885_84890 = G__84907;
chunk__84886_84891 = G__84908;
count__84887_84892 = G__84909;
i__84888_84893 = G__84910;
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
var G__84889 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__84889__delegate.call(this,elem,k,ks);};
G__84889.cljs$lang$maxFixedArity = 2;
G__84889.cljs$lang$applyTo = (function (arglist__84911){
var elem = cljs.core.first(arglist__84911);
arglist__84911 = cljs.core.next(arglist__84911);
var k = cljs.core.first(arglist__84911);
var ks = cljs.core.rest(arglist__84911);
return G__84889__delegate(elem,k,ks);
});
G__84889.cljs$core$IFn$_invoke$arity$variadic = G__84889__delegate;
return G__84889;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__84913 = dommy.template.__GT_node_like.call(null,elem);G__84913.style.display = ((show_QMARK_)?"":"none");
return G__84913;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__84915 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__84915,false);
return G__84915;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__84917 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__84917,true);
return G__84917;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__84919 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__84919["constructor"] = Object);
return G__84919;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map