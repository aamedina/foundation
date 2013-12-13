// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj301610 = {};return obj301610;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13813__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (dommy.template._elem[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (dommy.template._elem["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_301613 = node_str.substring(base_idx);while(true){
var next_idx_301614 = dommy.template.next_css_index.call(null,str_301613,1);var frag_301615 = (((next_idx_301614 >= 0))?str_301613.substring(0,next_idx_301614):str_301613);var G__301612_301616 = frag_301615.charAt(0);if(cljs.core._EQ_.call(null,"#",G__301612_301616))
{node.setAttribute("id",frag_301615.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__301612_301616))
{dommy.attrs.add_class_BANG_.call(null,node,frag_301615.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_301615.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_301614 >= 0))
{{
var G__301617 = str_301613.substring(next_idx_301614);
str_301613 = G__301617;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__301623 = data;if(G__301623)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__301623.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__301623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301623);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__301624_301628 = cljs.core.seq.call(null,data);var chunk__301625_301629 = null;var count__301626_301630 = 0;var i__301627_301631 = 0;while(true){
if((i__301627_301631 < count__301626_301630))
{var child_301632 = cljs.core._nth.call(null,chunk__301625_301629,i__301627_301631);__GT_document_fragment.call(null,result_frag,child_301632);
{
var G__301633 = seq__301624_301628;
var G__301634 = chunk__301625_301629;
var G__301635 = count__301626_301630;
var G__301636 = (i__301627_301631 + 1);
seq__301624_301628 = G__301633;
chunk__301625_301629 = G__301634;
count__301626_301630 = G__301635;
i__301627_301631 = G__301636;
continue;
}
} else
{var temp__4092__auto___301637 = cljs.core.seq.call(null,seq__301624_301628);if(temp__4092__auto___301637)
{var seq__301624_301638__$1 = temp__4092__auto___301637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301624_301638__$1))
{var c__14549__auto___301639 = cljs.core.chunk_first.call(null,seq__301624_301638__$1);{
var G__301640 = cljs.core.chunk_rest.call(null,seq__301624_301638__$1);
var G__301641 = c__14549__auto___301639;
var G__301642 = cljs.core.count.call(null,c__14549__auto___301639);
var G__301643 = 0;
seq__301624_301628 = G__301640;
chunk__301625_301629 = G__301641;
count__301626_301630 = G__301642;
i__301627_301631 = G__301643;
continue;
}
} else
{var child_301644 = cljs.core.first.call(null,seq__301624_301638__$1);__GT_document_fragment.call(null,result_frag,child_301644);
{
var G__301645 = cljs.core.next.call(null,seq__301624_301638__$1);
var G__301646 = null;
var G__301647 = 0;
var G__301648 = 0;
seq__301624_301628 = G__301645;
chunk__301625_301629 = G__301646;
count__301626_301630 = G__301647;
i__301627_301631 = G__301648;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__301650 = data;if(G__301650)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__301650.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__301650.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301650);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301650);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__301651){var vec__301671 = p__301651;var tag_name = cljs.core.nth.call(null,vec__301671,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__301671,1,null);var children = cljs.core.nthnext.call(null,vec__301671,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__301673 = maybe_attrs;if(G__301673)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__301673.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__301673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301673);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__301674_301690 = cljs.core.seq.call(null,attrs);var chunk__301675_301691 = null;var count__301676_301692 = 0;var i__301677_301693 = 0;while(true){
if((i__301677_301693 < count__301676_301692))
{var vec__301678_301694 = cljs.core._nth.call(null,chunk__301675_301691,i__301677_301693);var k_301695 = cljs.core.nth.call(null,vec__301678_301694,0,null);var v_301696 = cljs.core.nth.call(null,vec__301678_301694,1,null);var G__301679_301697 = k_301695;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__301679_301697))
{var seq__301680_301698 = cljs.core.seq.call(null,v_301696);var chunk__301681_301699 = null;var count__301682_301700 = 0;var i__301683_301701 = 0;while(true){
if((i__301683_301701 < count__301682_301700))
{var c_301702 = cljs.core._nth.call(null,chunk__301681_301699,i__301683_301701);dommy.attrs.add_class_BANG_.call(null,n,c_301702);
{
var G__301703 = seq__301680_301698;
var G__301704 = chunk__301681_301699;
var G__301705 = count__301682_301700;
var G__301706 = (i__301683_301701 + 1);
seq__301680_301698 = G__301703;
chunk__301681_301699 = G__301704;
count__301682_301700 = G__301705;
i__301683_301701 = G__301706;
continue;
}
} else
{var temp__4092__auto___301707 = cljs.core.seq.call(null,seq__301680_301698);if(temp__4092__auto___301707)
{var seq__301680_301708__$1 = temp__4092__auto___301707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301680_301708__$1))
{var c__14549__auto___301709 = cljs.core.chunk_first.call(null,seq__301680_301708__$1);{
var G__301710 = cljs.core.chunk_rest.call(null,seq__301680_301708__$1);
var G__301711 = c__14549__auto___301709;
var G__301712 = cljs.core.count.call(null,c__14549__auto___301709);
var G__301713 = 0;
seq__301680_301698 = G__301710;
chunk__301681_301699 = G__301711;
count__301682_301700 = G__301712;
i__301683_301701 = G__301713;
continue;
}
} else
{var c_301714 = cljs.core.first.call(null,seq__301680_301708__$1);dommy.attrs.add_class_BANG_.call(null,n,c_301714);
{
var G__301715 = cljs.core.next.call(null,seq__301680_301708__$1);
var G__301716 = null;
var G__301717 = 0;
var G__301718 = 0;
seq__301680_301698 = G__301715;
chunk__301681_301699 = G__301716;
count__301682_301700 = G__301717;
i__301683_301701 = G__301718;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__301679_301697))
{dommy.attrs.add_class_BANG_.call(null,n,v_301696);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_301695,v_301696);
} else
{}
}
}
{
var G__301719 = seq__301674_301690;
var G__301720 = chunk__301675_301691;
var G__301721 = count__301676_301692;
var G__301722 = (i__301677_301693 + 1);
seq__301674_301690 = G__301719;
chunk__301675_301691 = G__301720;
count__301676_301692 = G__301721;
i__301677_301693 = G__301722;
continue;
}
} else
{var temp__4092__auto___301723 = cljs.core.seq.call(null,seq__301674_301690);if(temp__4092__auto___301723)
{var seq__301674_301724__$1 = temp__4092__auto___301723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301674_301724__$1))
{var c__14549__auto___301725 = cljs.core.chunk_first.call(null,seq__301674_301724__$1);{
var G__301726 = cljs.core.chunk_rest.call(null,seq__301674_301724__$1);
var G__301727 = c__14549__auto___301725;
var G__301728 = cljs.core.count.call(null,c__14549__auto___301725);
var G__301729 = 0;
seq__301674_301690 = G__301726;
chunk__301675_301691 = G__301727;
count__301676_301692 = G__301728;
i__301677_301693 = G__301729;
continue;
}
} else
{var vec__301684_301730 = cljs.core.first.call(null,seq__301674_301724__$1);var k_301731 = cljs.core.nth.call(null,vec__301684_301730,0,null);var v_301732 = cljs.core.nth.call(null,vec__301684_301730,1,null);var G__301685_301733 = k_301731;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__301685_301733))
{var seq__301686_301734 = cljs.core.seq.call(null,v_301732);var chunk__301687_301735 = null;var count__301688_301736 = 0;var i__301689_301737 = 0;while(true){
if((i__301689_301737 < count__301688_301736))
{var c_301738 = cljs.core._nth.call(null,chunk__301687_301735,i__301689_301737);dommy.attrs.add_class_BANG_.call(null,n,c_301738);
{
var G__301739 = seq__301686_301734;
var G__301740 = chunk__301687_301735;
var G__301741 = count__301688_301736;
var G__301742 = (i__301689_301737 + 1);
seq__301686_301734 = G__301739;
chunk__301687_301735 = G__301740;
count__301688_301736 = G__301741;
i__301689_301737 = G__301742;
continue;
}
} else
{var temp__4092__auto___301743__$1 = cljs.core.seq.call(null,seq__301686_301734);if(temp__4092__auto___301743__$1)
{var seq__301686_301744__$1 = temp__4092__auto___301743__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301686_301744__$1))
{var c__14549__auto___301745 = cljs.core.chunk_first.call(null,seq__301686_301744__$1);{
var G__301746 = cljs.core.chunk_rest.call(null,seq__301686_301744__$1);
var G__301747 = c__14549__auto___301745;
var G__301748 = cljs.core.count.call(null,c__14549__auto___301745);
var G__301749 = 0;
seq__301686_301734 = G__301746;
chunk__301687_301735 = G__301747;
count__301688_301736 = G__301748;
i__301689_301737 = G__301749;
continue;
}
} else
{var c_301750 = cljs.core.first.call(null,seq__301686_301744__$1);dommy.attrs.add_class_BANG_.call(null,n,c_301750);
{
var G__301751 = cljs.core.next.call(null,seq__301686_301744__$1);
var G__301752 = null;
var G__301753 = 0;
var G__301754 = 0;
seq__301686_301734 = G__301751;
chunk__301687_301735 = G__301752;
count__301688_301736 = G__301753;
i__301689_301737 = G__301754;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__301685_301733))
{dommy.attrs.add_class_BANG_.call(null,n,v_301732);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_301731,v_301732);
} else
{}
}
}
{
var G__301755 = cljs.core.next.call(null,seq__301674_301724__$1);
var G__301756 = null;
var G__301757 = 0;
var G__301758 = 0;
seq__301674_301690 = G__301755;
chunk__301675_301691 = G__301756;
count__301676_301692 = G__301757;
i__301677_301693 = G__301758;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e301759){if((e301759 instanceof ReferenceError))
{var __301760 = e301759;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e301759;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__301762 = data;if(G__301762)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__301762.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__301762.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301762);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__301762);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map