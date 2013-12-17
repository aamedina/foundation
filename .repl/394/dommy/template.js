// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj23588 = {};return obj23588;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7835__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (dommy.template._elem[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (dommy.template._elem["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
{var str_23591 = node_str.substring(base_idx);while(true){
var next_idx_23592 = dommy.template.next_css_index.call(null,str_23591,1);var frag_23593 = (((next_idx_23592 >= 0))?str_23591.substring(0,next_idx_23592):str_23591);var G__23590_23594 = frag_23593.charAt(0);if(cljs.core._EQ_.call(null,"#",G__23590_23594))
{node.setAttribute("id",frag_23593.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__23590_23594))
{dommy.attrs.add_class_BANG_.call(null,node,frag_23593.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_23593.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_23592 >= 0))
{{
var G__23595 = str_23591.substring(next_idx_23592);
str_23591 = G__23595;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__23601 = data;if(G__23601)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__23601.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__23601.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23601);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23601);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__23602_23606 = cljs.core.seq.call(null,data);var chunk__23603_23607 = null;var count__23604_23608 = 0;var i__23605_23609 = 0;while(true){
if((i__23605_23609 < count__23604_23608))
{var child_23610 = cljs.core._nth.call(null,chunk__23603_23607,i__23605_23609);__GT_document_fragment.call(null,result_frag,child_23610);
{
var G__23611 = seq__23602_23606;
var G__23612 = chunk__23603_23607;
var G__23613 = count__23604_23608;
var G__23614 = (i__23605_23609 + 1);
seq__23602_23606 = G__23611;
chunk__23603_23607 = G__23612;
count__23604_23608 = G__23613;
i__23605_23609 = G__23614;
continue;
}
} else
{var temp__4092__auto___23615 = cljs.core.seq.call(null,seq__23602_23606);if(temp__4092__auto___23615)
{var seq__23602_23616__$1 = temp__4092__auto___23615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23602_23616__$1))
{var c__8571__auto___23617 = cljs.core.chunk_first.call(null,seq__23602_23616__$1);{
var G__23618 = cljs.core.chunk_rest.call(null,seq__23602_23616__$1);
var G__23619 = c__8571__auto___23617;
var G__23620 = cljs.core.count.call(null,c__8571__auto___23617);
var G__23621 = 0;
seq__23602_23606 = G__23618;
chunk__23603_23607 = G__23619;
count__23604_23608 = G__23620;
i__23605_23609 = G__23621;
continue;
}
} else
{var child_23622 = cljs.core.first.call(null,seq__23602_23616__$1);__GT_document_fragment.call(null,result_frag,child_23622);
{
var G__23623 = cljs.core.next.call(null,seq__23602_23616__$1);
var G__23624 = null;
var G__23625 = 0;
var G__23626 = 0;
seq__23602_23606 = G__23623;
chunk__23603_23607 = G__23624;
count__23604_23608 = G__23625;
i__23605_23609 = G__23626;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__23628 = data;if(G__23628)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__23628.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__23628.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23628);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23628);
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
dommy.template.compound_element = (function compound_element(p__23629){var vec__23649 = p__23629;var tag_name = cljs.core.nth.call(null,vec__23649,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__23649,1,null);var children = cljs.core.nthnext.call(null,vec__23649,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__23651 = maybe_attrs;if(G__23651)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__23651.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__23651.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23651);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23651);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__23652_23668 = cljs.core.seq.call(null,attrs);var chunk__23653_23669 = null;var count__23654_23670 = 0;var i__23655_23671 = 0;while(true){
if((i__23655_23671 < count__23654_23670))
{var vec__23656_23672 = cljs.core._nth.call(null,chunk__23653_23669,i__23655_23671);var k_23673 = cljs.core.nth.call(null,vec__23656_23672,0,null);var v_23674 = cljs.core.nth.call(null,vec__23656_23672,1,null);var G__23657_23675 = k_23673;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__23657_23675))
{var seq__23658_23676 = cljs.core.seq.call(null,v_23674);var chunk__23659_23677 = null;var count__23660_23678 = 0;var i__23661_23679 = 0;while(true){
if((i__23661_23679 < count__23660_23678))
{var c_23680 = cljs.core._nth.call(null,chunk__23659_23677,i__23661_23679);dommy.attrs.add_class_BANG_.call(null,n,c_23680);
{
var G__23681 = seq__23658_23676;
var G__23682 = chunk__23659_23677;
var G__23683 = count__23660_23678;
var G__23684 = (i__23661_23679 + 1);
seq__23658_23676 = G__23681;
chunk__23659_23677 = G__23682;
count__23660_23678 = G__23683;
i__23661_23679 = G__23684;
continue;
}
} else
{var temp__4092__auto___23685 = cljs.core.seq.call(null,seq__23658_23676);if(temp__4092__auto___23685)
{var seq__23658_23686__$1 = temp__4092__auto___23685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23658_23686__$1))
{var c__8571__auto___23687 = cljs.core.chunk_first.call(null,seq__23658_23686__$1);{
var G__23688 = cljs.core.chunk_rest.call(null,seq__23658_23686__$1);
var G__23689 = c__8571__auto___23687;
var G__23690 = cljs.core.count.call(null,c__8571__auto___23687);
var G__23691 = 0;
seq__23658_23676 = G__23688;
chunk__23659_23677 = G__23689;
count__23660_23678 = G__23690;
i__23661_23679 = G__23691;
continue;
}
} else
{var c_23692 = cljs.core.first.call(null,seq__23658_23686__$1);dommy.attrs.add_class_BANG_.call(null,n,c_23692);
{
var G__23693 = cljs.core.next.call(null,seq__23658_23686__$1);
var G__23694 = null;
var G__23695 = 0;
var G__23696 = 0;
seq__23658_23676 = G__23693;
chunk__23659_23677 = G__23694;
count__23660_23678 = G__23695;
i__23661_23679 = G__23696;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__23657_23675))
{dommy.attrs.add_class_BANG_.call(null,n,v_23674);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_23673,v_23674);
} else
{}
}
}
{
var G__23697 = seq__23652_23668;
var G__23698 = chunk__23653_23669;
var G__23699 = count__23654_23670;
var G__23700 = (i__23655_23671 + 1);
seq__23652_23668 = G__23697;
chunk__23653_23669 = G__23698;
count__23654_23670 = G__23699;
i__23655_23671 = G__23700;
continue;
}
} else
{var temp__4092__auto___23701 = cljs.core.seq.call(null,seq__23652_23668);if(temp__4092__auto___23701)
{var seq__23652_23702__$1 = temp__4092__auto___23701;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23652_23702__$1))
{var c__8571__auto___23703 = cljs.core.chunk_first.call(null,seq__23652_23702__$1);{
var G__23704 = cljs.core.chunk_rest.call(null,seq__23652_23702__$1);
var G__23705 = c__8571__auto___23703;
var G__23706 = cljs.core.count.call(null,c__8571__auto___23703);
var G__23707 = 0;
seq__23652_23668 = G__23704;
chunk__23653_23669 = G__23705;
count__23654_23670 = G__23706;
i__23655_23671 = G__23707;
continue;
}
} else
{var vec__23662_23708 = cljs.core.first.call(null,seq__23652_23702__$1);var k_23709 = cljs.core.nth.call(null,vec__23662_23708,0,null);var v_23710 = cljs.core.nth.call(null,vec__23662_23708,1,null);var G__23663_23711 = k_23709;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__23663_23711))
{var seq__23664_23712 = cljs.core.seq.call(null,v_23710);var chunk__23665_23713 = null;var count__23666_23714 = 0;var i__23667_23715 = 0;while(true){
if((i__23667_23715 < count__23666_23714))
{var c_23716 = cljs.core._nth.call(null,chunk__23665_23713,i__23667_23715);dommy.attrs.add_class_BANG_.call(null,n,c_23716);
{
var G__23717 = seq__23664_23712;
var G__23718 = chunk__23665_23713;
var G__23719 = count__23666_23714;
var G__23720 = (i__23667_23715 + 1);
seq__23664_23712 = G__23717;
chunk__23665_23713 = G__23718;
count__23666_23714 = G__23719;
i__23667_23715 = G__23720;
continue;
}
} else
{var temp__4092__auto___23721__$1 = cljs.core.seq.call(null,seq__23664_23712);if(temp__4092__auto___23721__$1)
{var seq__23664_23722__$1 = temp__4092__auto___23721__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__23664_23722__$1))
{var c__8571__auto___23723 = cljs.core.chunk_first.call(null,seq__23664_23722__$1);{
var G__23724 = cljs.core.chunk_rest.call(null,seq__23664_23722__$1);
var G__23725 = c__8571__auto___23723;
var G__23726 = cljs.core.count.call(null,c__8571__auto___23723);
var G__23727 = 0;
seq__23664_23712 = G__23724;
chunk__23665_23713 = G__23725;
count__23666_23714 = G__23726;
i__23667_23715 = G__23727;
continue;
}
} else
{var c_23728 = cljs.core.first.call(null,seq__23664_23722__$1);dommy.attrs.add_class_BANG_.call(null,n,c_23728);
{
var G__23729 = cljs.core.next.call(null,seq__23664_23722__$1);
var G__23730 = null;
var G__23731 = 0;
var G__23732 = 0;
seq__23664_23712 = G__23729;
chunk__23665_23713 = G__23730;
count__23666_23714 = G__23731;
i__23667_23715 = G__23732;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__23663_23711))
{dommy.attrs.add_class_BANG_.call(null,n,v_23710);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_23709,v_23710);
} else
{}
}
}
{
var G__23733 = cljs.core.next.call(null,seq__23652_23702__$1);
var G__23734 = null;
var G__23735 = 0;
var G__23736 = 0;
seq__23652_23668 = G__23733;
chunk__23653_23669 = G__23734;
count__23654_23670 = G__23735;
i__23655_23671 = G__23736;
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
}catch (e23737){if((e23737 instanceof ReferenceError))
{var __23738 = e23737;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23737;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__23740 = data;if(G__23740)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__23740.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__23740.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23740);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__23740);
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
