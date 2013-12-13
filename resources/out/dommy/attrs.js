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
var G__92551 = (i + class$.length);
start_from = G__92551;
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
{var temp__4090__auto___92576 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___92576))
{var class_list_92577 = temp__4090__auto___92576;var seq__92564_92578 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__92565_92579 = null;var count__92566_92580 = 0;var i__92567_92581 = 0;while(true){
if((i__92567_92581 < count__92566_92580))
{var class_92582 = cljs.core._nth.call(null,chunk__92565_92579,i__92567_92581);class_list_92577.add(class_92582);
{
var G__92583 = seq__92564_92578;
var G__92584 = chunk__92565_92579;
var G__92585 = count__92566_92580;
var G__92586 = (i__92567_92581 + 1);
seq__92564_92578 = G__92583;
chunk__92565_92579 = G__92584;
count__92566_92580 = G__92585;
i__92567_92581 = G__92586;
continue;
}
} else
{var temp__4092__auto___92587 = cljs.core.seq.call(null,seq__92564_92578);if(temp__4092__auto___92587)
{var seq__92564_92588__$1 = temp__4092__auto___92587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92564_92588__$1))
{var c__14549__auto___92589 = cljs.core.chunk_first.call(null,seq__92564_92588__$1);{
var G__92590 = cljs.core.chunk_rest.call(null,seq__92564_92588__$1);
var G__92591 = c__14549__auto___92589;
var G__92592 = cljs.core.count.call(null,c__14549__auto___92589);
var G__92593 = 0;
seq__92564_92578 = G__92590;
chunk__92565_92579 = G__92591;
count__92566_92580 = G__92592;
i__92567_92581 = G__92593;
continue;
}
} else
{var class_92594 = cljs.core.first.call(null,seq__92564_92588__$1);class_list_92577.add(class_92594);
{
var G__92595 = cljs.core.next.call(null,seq__92564_92588__$1);
var G__92596 = null;
var G__92597 = 0;
var G__92598 = 0;
seq__92564_92578 = G__92595;
chunk__92565_92579 = G__92596;
count__92566_92580 = G__92597;
i__92567_92581 = G__92598;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_92599 = elem__$1.className;var seq__92568_92600 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__92569_92601 = null;var count__92570_92602 = 0;var i__92571_92603 = 0;while(true){
if((i__92571_92603 < count__92570_92602))
{var class_92604 = cljs.core._nth.call(null,chunk__92569_92601,i__92571_92603);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_92599,class_92604)))
{} else
{elem__$1.className = (((class_name_92599 === ""))?class_92604:[cljs.core.str(class_name_92599),cljs.core.str(" "),cljs.core.str(class_92604)].join(''));
}
{
var G__92605 = seq__92568_92600;
var G__92606 = chunk__92569_92601;
var G__92607 = count__92570_92602;
var G__92608 = (i__92571_92603 + 1);
seq__92568_92600 = G__92605;
chunk__92569_92601 = G__92606;
count__92570_92602 = G__92607;
i__92571_92603 = G__92608;
continue;
}
} else
{var temp__4092__auto___92609 = cljs.core.seq.call(null,seq__92568_92600);if(temp__4092__auto___92609)
{var seq__92568_92610__$1 = temp__4092__auto___92609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92568_92610__$1))
{var c__14549__auto___92611 = cljs.core.chunk_first.call(null,seq__92568_92610__$1);{
var G__92612 = cljs.core.chunk_rest.call(null,seq__92568_92610__$1);
var G__92613 = c__14549__auto___92611;
var G__92614 = cljs.core.count.call(null,c__14549__auto___92611);
var G__92615 = 0;
seq__92568_92600 = G__92612;
chunk__92569_92601 = G__92613;
count__92570_92602 = G__92614;
i__92571_92603 = G__92615;
continue;
}
} else
{var class_92616 = cljs.core.first.call(null,seq__92568_92610__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_92599,class_92616)))
{} else
{elem__$1.className = (((class_name_92599 === ""))?class_92616:[cljs.core.str(class_name_92599),cljs.core.str(" "),cljs.core.str(class_92616)].join(''));
}
{
var G__92617 = cljs.core.next.call(null,seq__92568_92610__$1);
var G__92618 = null;
var G__92619 = 0;
var G__92620 = 0;
seq__92568_92600 = G__92617;
chunk__92569_92601 = G__92618;
count__92570_92602 = G__92619;
i__92571_92603 = G__92620;
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
var G__92621__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__92572_92622 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__92573_92623 = null;var count__92574_92624 = 0;var i__92575_92625 = 0;while(true){
if((i__92575_92625 < count__92574_92624))
{var c_92626 = cljs.core._nth.call(null,chunk__92573_92623,i__92575_92625);add_class_BANG_.call(null,elem__$1,c_92626);
{
var G__92627 = seq__92572_92622;
var G__92628 = chunk__92573_92623;
var G__92629 = count__92574_92624;
var G__92630 = (i__92575_92625 + 1);
seq__92572_92622 = G__92627;
chunk__92573_92623 = G__92628;
count__92574_92624 = G__92629;
i__92575_92625 = G__92630;
continue;
}
} else
{var temp__4092__auto___92631 = cljs.core.seq.call(null,seq__92572_92622);if(temp__4092__auto___92631)
{var seq__92572_92632__$1 = temp__4092__auto___92631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92572_92632__$1))
{var c__14549__auto___92633 = cljs.core.chunk_first.call(null,seq__92572_92632__$1);{
var G__92634 = cljs.core.chunk_rest.call(null,seq__92572_92632__$1);
var G__92635 = c__14549__auto___92633;
var G__92636 = cljs.core.count.call(null,c__14549__auto___92633);
var G__92637 = 0;
seq__92572_92622 = G__92634;
chunk__92573_92623 = G__92635;
count__92574_92624 = G__92636;
i__92575_92625 = G__92637;
continue;
}
} else
{var c_92638 = cljs.core.first.call(null,seq__92572_92632__$1);add_class_BANG_.call(null,elem__$1,c_92638);
{
var G__92639 = cljs.core.next.call(null,seq__92572_92632__$1);
var G__92640 = null;
var G__92641 = 0;
var G__92642 = 0;
seq__92572_92622 = G__92639;
chunk__92573_92623 = G__92640;
count__92574_92624 = G__92641;
i__92575_92625 = G__92642;
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
var G__92621 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92621__delegate.call(this,elem,classes,more_classes);};
G__92621.cljs$lang$maxFixedArity = 2;
G__92621.cljs$lang$applyTo = (function (arglist__92643){
var elem = cljs.core.first(arglist__92643);
arglist__92643 = cljs.core.next(arglist__92643);
var classes = cljs.core.first(arglist__92643);
var more_classes = cljs.core.rest(arglist__92643);
return G__92621__delegate(elem,classes,more_classes);
});
G__92621.cljs$core$IFn$_invoke$arity$variadic = G__92621__delegate;
return G__92621;
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
var G__92644 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__92644;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___92653 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___92653))
{var class_list_92654 = temp__4090__auto___92653;class_list_92654.remove(class$__$1);
} else
{var class_name_92655 = elem__$1.className;var new_class_name_92656 = dommy.attrs.remove_class_str.call(null,class_name_92655,class$__$1);if((class_name_92655 === new_class_name_92656))
{} else
{elem__$1.className = new_class_name_92656;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__92657__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__92649 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__92650 = null;var count__92651 = 0;var i__92652 = 0;while(true){
if((i__92652 < count__92651))
{var c = cljs.core._nth.call(null,chunk__92650,i__92652);remove_class_BANG_.call(null,elem__$1,c);
{
var G__92658 = seq__92649;
var G__92659 = chunk__92650;
var G__92660 = count__92651;
var G__92661 = (i__92652 + 1);
seq__92649 = G__92658;
chunk__92650 = G__92659;
count__92651 = G__92660;
i__92652 = G__92661;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__92649);if(temp__4092__auto__)
{var seq__92649__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92649__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__92649__$1);{
var G__92662 = cljs.core.chunk_rest.call(null,seq__92649__$1);
var G__92663 = c__14549__auto__;
var G__92664 = cljs.core.count.call(null,c__14549__auto__);
var G__92665 = 0;
seq__92649 = G__92662;
chunk__92650 = G__92663;
count__92651 = G__92664;
i__92652 = G__92665;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__92649__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__92666 = cljs.core.next.call(null,seq__92649__$1);
var G__92667 = null;
var G__92668 = 0;
var G__92669 = 0;
seq__92649 = G__92666;
chunk__92650 = G__92667;
count__92651 = G__92668;
i__92652 = G__92669;
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
var G__92657 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92657__delegate.call(this,elem,class$,classes);};
G__92657.cljs$lang$maxFixedArity = 2;
G__92657.cljs$lang$applyTo = (function (arglist__92670){
var elem = cljs.core.first(arglist__92670);
arglist__92670 = cljs.core.next(arglist__92670);
var class$ = cljs.core.first(arglist__92670);
var classes = cljs.core.rest(arglist__92670);
return G__92657__delegate(elem,class$,classes);
});
G__92657.cljs$core$IFn$_invoke$arity$variadic = G__92657__delegate;
return G__92657;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___92671 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___92671))
{var class_list_92672 = temp__4090__auto___92671;class_list_92672.toggle(class$__$1);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__92675){var vec__92676 = p__92675;var k = cljs.core.nth.call(null,vec__92676,0,null);var v = cljs.core.nth.call(null,vec__92676,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__92683_92689 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__92684_92690 = null;var count__92685_92691 = 0;var i__92686_92692 = 0;while(true){
if((i__92686_92692 < count__92685_92691))
{var vec__92687_92693 = cljs.core._nth.call(null,chunk__92684_92690,i__92686_92692);var k_92694 = cljs.core.nth.call(null,vec__92687_92693,0,null);var v_92695 = cljs.core.nth.call(null,vec__92687_92693,1,null);(style[cljs.core.name.call(null,k_92694)] = v_92695);
{
var G__92696 = seq__92683_92689;
var G__92697 = chunk__92684_92690;
var G__92698 = count__92685_92691;
var G__92699 = (i__92686_92692 + 1);
seq__92683_92689 = G__92696;
chunk__92684_92690 = G__92697;
count__92685_92691 = G__92698;
i__92686_92692 = G__92699;
continue;
}
} else
{var temp__4092__auto___92700 = cljs.core.seq.call(null,seq__92683_92689);if(temp__4092__auto___92700)
{var seq__92683_92701__$1 = temp__4092__auto___92700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92683_92701__$1))
{var c__14549__auto___92702 = cljs.core.chunk_first.call(null,seq__92683_92701__$1);{
var G__92703 = cljs.core.chunk_rest.call(null,seq__92683_92701__$1);
var G__92704 = c__14549__auto___92702;
var G__92705 = cljs.core.count.call(null,c__14549__auto___92702);
var G__92706 = 0;
seq__92683_92689 = G__92703;
chunk__92684_92690 = G__92704;
count__92685_92691 = G__92705;
i__92686_92692 = G__92706;
continue;
}
} else
{var vec__92688_92707 = cljs.core.first.call(null,seq__92683_92701__$1);var k_92708 = cljs.core.nth.call(null,vec__92688_92707,0,null);var v_92709 = cljs.core.nth.call(null,vec__92688_92707,1,null);(style[cljs.core.name.call(null,k_92708)] = v_92709);
{
var G__92710 = cljs.core.next.call(null,seq__92683_92701__$1);
var G__92711 = null;
var G__92712 = 0;
var G__92713 = 0;
seq__92683_92689 = G__92710;
chunk__92684_92690 = G__92711;
count__92685_92691 = G__92712;
i__92686_92692 = G__92713;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__92714){
var elem = cljs.core.first(arglist__92714);
var kvs = cljs.core.rest(arglist__92714);
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
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__92721_92727 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__92722_92728 = null;var count__92723_92729 = 0;var i__92724_92730 = 0;while(true){
if((i__92724_92730 < count__92723_92729))
{var vec__92725_92731 = cljs.core._nth.call(null,chunk__92722_92728,i__92724_92730);var k_92732 = cljs.core.nth.call(null,vec__92725_92731,0,null);var v_92733 = cljs.core.nth.call(null,vec__92725_92731,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_92732,[cljs.core.str(v_92733),cljs.core.str("px")].join(''));
{
var G__92734 = seq__92721_92727;
var G__92735 = chunk__92722_92728;
var G__92736 = count__92723_92729;
var G__92737 = (i__92724_92730 + 1);
seq__92721_92727 = G__92734;
chunk__92722_92728 = G__92735;
count__92723_92729 = G__92736;
i__92724_92730 = G__92737;
continue;
}
} else
{var temp__4092__auto___92738 = cljs.core.seq.call(null,seq__92721_92727);if(temp__4092__auto___92738)
{var seq__92721_92739__$1 = temp__4092__auto___92738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92721_92739__$1))
{var c__14549__auto___92740 = cljs.core.chunk_first.call(null,seq__92721_92739__$1);{
var G__92741 = cljs.core.chunk_rest.call(null,seq__92721_92739__$1);
var G__92742 = c__14549__auto___92740;
var G__92743 = cljs.core.count.call(null,c__14549__auto___92740);
var G__92744 = 0;
seq__92721_92727 = G__92741;
chunk__92722_92728 = G__92742;
count__92723_92729 = G__92743;
i__92724_92730 = G__92744;
continue;
}
} else
{var vec__92726_92745 = cljs.core.first.call(null,seq__92721_92739__$1);var k_92746 = cljs.core.nth.call(null,vec__92726_92745,0,null);var v_92747 = cljs.core.nth.call(null,vec__92726_92745,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_92746,[cljs.core.str(v_92747),cljs.core.str("px")].join(''));
{
var G__92748 = cljs.core.next.call(null,seq__92721_92739__$1);
var G__92749 = null;
var G__92750 = 0;
var G__92751 = 0;
seq__92721_92727 = G__92748;
chunk__92722_92728 = G__92749;
count__92723_92729 = G__92750;
i__92724_92730 = G__92751;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__92752){
var elem = cljs.core.first(arglist__92752);
var kvs = cljs.core.rest(arglist__92752);
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
{var G__92761 = dommy.template.__GT_node_like.call(null,elem);(G__92761[cljs.core.name.call(null,k)] = v);
return G__92761;
} else
{var G__92762 = dommy.template.__GT_node_like.call(null,elem);G__92762.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__92762;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__92769__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__92763_92770 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__92764_92771 = null;var count__92765_92772 = 0;var i__92766_92773 = 0;while(true){
if((i__92766_92773 < count__92765_92772))
{var vec__92767_92774 = cljs.core._nth.call(null,chunk__92764_92771,i__92766_92773);var k_92775__$1 = cljs.core.nth.call(null,vec__92767_92774,0,null);var v_92776__$1 = cljs.core.nth.call(null,vec__92767_92774,1,null);set_attr_BANG_.call(null,elem__$1,k_92775__$1,v_92776__$1);
{
var G__92777 = seq__92763_92770;
var G__92778 = chunk__92764_92771;
var G__92779 = count__92765_92772;
var G__92780 = (i__92766_92773 + 1);
seq__92763_92770 = G__92777;
chunk__92764_92771 = G__92778;
count__92765_92772 = G__92779;
i__92766_92773 = G__92780;
continue;
}
} else
{var temp__4092__auto___92781 = cljs.core.seq.call(null,seq__92763_92770);if(temp__4092__auto___92781)
{var seq__92763_92782__$1 = temp__4092__auto___92781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92763_92782__$1))
{var c__14549__auto___92783 = cljs.core.chunk_first.call(null,seq__92763_92782__$1);{
var G__92784 = cljs.core.chunk_rest.call(null,seq__92763_92782__$1);
var G__92785 = c__14549__auto___92783;
var G__92786 = cljs.core.count.call(null,c__14549__auto___92783);
var G__92787 = 0;
seq__92763_92770 = G__92784;
chunk__92764_92771 = G__92785;
count__92765_92772 = G__92786;
i__92766_92773 = G__92787;
continue;
}
} else
{var vec__92768_92788 = cljs.core.first.call(null,seq__92763_92782__$1);var k_92789__$1 = cljs.core.nth.call(null,vec__92768_92788,0,null);var v_92790__$1 = cljs.core.nth.call(null,vec__92768_92788,1,null);set_attr_BANG_.call(null,elem__$1,k_92789__$1,v_92790__$1);
{
var G__92791 = cljs.core.next.call(null,seq__92763_92782__$1);
var G__92792 = null;
var G__92793 = 0;
var G__92794 = 0;
seq__92763_92770 = G__92791;
chunk__92764_92771 = G__92792;
count__92765_92772 = G__92793;
i__92766_92773 = G__92794;
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
var G__92769 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__92769__delegate.call(this,elem,k,v,kvs);};
G__92769.cljs$lang$maxFixedArity = 3;
G__92769.cljs$lang$applyTo = (function (arglist__92795){
var elem = cljs.core.first(arglist__92795);
arglist__92795 = cljs.core.next(arglist__92795);
var k = cljs.core.first(arglist__92795);
arglist__92795 = cljs.core.next(arglist__92795);
var v = cljs.core.first(arglist__92795);
var kvs = cljs.core.rest(arglist__92795);
return G__92769__delegate(elem,k,v,kvs);
});
G__92769.cljs$core$IFn$_invoke$arity$variadic = G__92769__delegate;
return G__92769;
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
var G__92804__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__92800_92805 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__92801_92806 = null;var count__92802_92807 = 0;var i__92803_92808 = 0;while(true){
if((i__92803_92808 < count__92802_92807))
{var k_92809__$1 = cljs.core._nth.call(null,chunk__92801_92806,i__92803_92808);remove_attr_BANG_.call(null,elem__$1,k_92809__$1);
{
var G__92810 = seq__92800_92805;
var G__92811 = chunk__92801_92806;
var G__92812 = count__92802_92807;
var G__92813 = (i__92803_92808 + 1);
seq__92800_92805 = G__92810;
chunk__92801_92806 = G__92811;
count__92802_92807 = G__92812;
i__92803_92808 = G__92813;
continue;
}
} else
{var temp__4092__auto___92814 = cljs.core.seq.call(null,seq__92800_92805);if(temp__4092__auto___92814)
{var seq__92800_92815__$1 = temp__4092__auto___92814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92800_92815__$1))
{var c__14549__auto___92816 = cljs.core.chunk_first.call(null,seq__92800_92815__$1);{
var G__92817 = cljs.core.chunk_rest.call(null,seq__92800_92815__$1);
var G__92818 = c__14549__auto___92816;
var G__92819 = cljs.core.count.call(null,c__14549__auto___92816);
var G__92820 = 0;
seq__92800_92805 = G__92817;
chunk__92801_92806 = G__92818;
count__92802_92807 = G__92819;
i__92803_92808 = G__92820;
continue;
}
} else
{var k_92821__$1 = cljs.core.first.call(null,seq__92800_92815__$1);remove_attr_BANG_.call(null,elem__$1,k_92821__$1);
{
var G__92822 = cljs.core.next.call(null,seq__92800_92815__$1);
var G__92823 = null;
var G__92824 = 0;
var G__92825 = 0;
seq__92800_92805 = G__92822;
chunk__92801_92806 = G__92823;
count__92802_92807 = G__92824;
i__92803_92808 = G__92825;
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
var G__92804 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__92804__delegate.call(this,elem,k,ks);};
G__92804.cljs$lang$maxFixedArity = 2;
G__92804.cljs$lang$applyTo = (function (arglist__92826){
var elem = cljs.core.first(arglist__92826);
arglist__92826 = cljs.core.next(arglist__92826);
var k = cljs.core.first(arglist__92826);
var ks = cljs.core.rest(arglist__92826);
return G__92804__delegate(elem,k,ks);
});
G__92804.cljs$core$IFn$_invoke$arity$variadic = G__92804__delegate;
return G__92804;
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
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__92828 = dommy.template.__GT_node_like.call(null,elem);G__92828.style.display = ((show_QMARK_)?"":"none");
return G__92828;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__92830 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__92830,false);
return G__92830;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__92832 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__92832,true);
return G__92832;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__92834 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__92834["constructor"] = Object);
return G__92834;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map