// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj43676 = {};return obj43676;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13776__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (dommy.template._elem[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (dommy.template._elem["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
{var str_43679 = node_str.substring(base_idx);while(true){
var next_idx_43680 = dommy.template.next_css_index.call(null,str_43679,1);var frag_43681 = (((next_idx_43680 >= 0))?str_43679.substring(0,next_idx_43680):str_43679);var G__43678_43682 = frag_43681.charAt(0);if(cljs.core._EQ_.call(null,"#",G__43678_43682))
{node.setAttribute("id",frag_43681.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__43678_43682))
{dommy.attrs.add_class_BANG_.call(null,node,frag_43681.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_43681.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_43680 >= 0))
{{
var G__43683 = str_43679.substring(next_idx_43680);
str_43679 = G__43683;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__43689 = data;if(G__43689)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__43689.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__43689.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43689);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43689);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__43690_43694 = cljs.core.seq.call(null,data);var chunk__43691_43695 = null;var count__43692_43696 = 0;var i__43693_43697 = 0;while(true){
if((i__43693_43697 < count__43692_43696))
{var child_43698 = cljs.core._nth.call(null,chunk__43691_43695,i__43693_43697);__GT_document_fragment.call(null,result_frag,child_43698);
{
var G__43699 = seq__43690_43694;
var G__43700 = chunk__43691_43695;
var G__43701 = count__43692_43696;
var G__43702 = (i__43693_43697 + 1);
seq__43690_43694 = G__43699;
chunk__43691_43695 = G__43700;
count__43692_43696 = G__43701;
i__43693_43697 = G__43702;
continue;
}
} else
{var temp__4092__auto___43703 = cljs.core.seq.call(null,seq__43690_43694);if(temp__4092__auto___43703)
{var seq__43690_43704__$1 = temp__4092__auto___43703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43690_43704__$1))
{var c__14512__auto___43705 = cljs.core.chunk_first.call(null,seq__43690_43704__$1);{
var G__43706 = cljs.core.chunk_rest.call(null,seq__43690_43704__$1);
var G__43707 = c__14512__auto___43705;
var G__43708 = cljs.core.count.call(null,c__14512__auto___43705);
var G__43709 = 0;
seq__43690_43694 = G__43706;
chunk__43691_43695 = G__43707;
count__43692_43696 = G__43708;
i__43693_43697 = G__43709;
continue;
}
} else
{var child_43710 = cljs.core.first.call(null,seq__43690_43704__$1);__GT_document_fragment.call(null,result_frag,child_43710);
{
var G__43711 = cljs.core.next.call(null,seq__43690_43704__$1);
var G__43712 = null;
var G__43713 = 0;
var G__43714 = 0;
seq__43690_43694 = G__43711;
chunk__43691_43695 = G__43712;
count__43692_43696 = G__43713;
i__43693_43697 = G__43714;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__43716 = data;if(G__43716)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__43716.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__43716.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43716);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43716);
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
dommy.template.compound_element = (function compound_element(p__43717){var vec__43737 = p__43717;var tag_name = cljs.core.nth.call(null,vec__43737,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__43737,1,null);var children = cljs.core.nthnext.call(null,vec__43737,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__43739 = maybe_attrs;if(G__43739)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__43739.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__43739.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43739);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43739);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__43740_43756 = cljs.core.seq.call(null,attrs);var chunk__43741_43757 = null;var count__43742_43758 = 0;var i__43743_43759 = 0;while(true){
if((i__43743_43759 < count__43742_43758))
{var vec__43744_43760 = cljs.core._nth.call(null,chunk__43741_43757,i__43743_43759);var k_43761 = cljs.core.nth.call(null,vec__43744_43760,0,null);var v_43762 = cljs.core.nth.call(null,vec__43744_43760,1,null);var G__43745_43763 = k_43761;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__43745_43763))
{var seq__43746_43764 = cljs.core.seq.call(null,v_43762);var chunk__43747_43765 = null;var count__43748_43766 = 0;var i__43749_43767 = 0;while(true){
if((i__43749_43767 < count__43748_43766))
{var c_43768 = cljs.core._nth.call(null,chunk__43747_43765,i__43749_43767);dommy.attrs.add_class_BANG_.call(null,n,c_43768);
{
var G__43769 = seq__43746_43764;
var G__43770 = chunk__43747_43765;
var G__43771 = count__43748_43766;
var G__43772 = (i__43749_43767 + 1);
seq__43746_43764 = G__43769;
chunk__43747_43765 = G__43770;
count__43748_43766 = G__43771;
i__43749_43767 = G__43772;
continue;
}
} else
{var temp__4092__auto___43773 = cljs.core.seq.call(null,seq__43746_43764);if(temp__4092__auto___43773)
{var seq__43746_43774__$1 = temp__4092__auto___43773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43746_43774__$1))
{var c__14512__auto___43775 = cljs.core.chunk_first.call(null,seq__43746_43774__$1);{
var G__43776 = cljs.core.chunk_rest.call(null,seq__43746_43774__$1);
var G__43777 = c__14512__auto___43775;
var G__43778 = cljs.core.count.call(null,c__14512__auto___43775);
var G__43779 = 0;
seq__43746_43764 = G__43776;
chunk__43747_43765 = G__43777;
count__43748_43766 = G__43778;
i__43749_43767 = G__43779;
continue;
}
} else
{var c_43780 = cljs.core.first.call(null,seq__43746_43774__$1);dommy.attrs.add_class_BANG_.call(null,n,c_43780);
{
var G__43781 = cljs.core.next.call(null,seq__43746_43774__$1);
var G__43782 = null;
var G__43783 = 0;
var G__43784 = 0;
seq__43746_43764 = G__43781;
chunk__43747_43765 = G__43782;
count__43748_43766 = G__43783;
i__43749_43767 = G__43784;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__43745_43763))
{dommy.attrs.add_class_BANG_.call(null,n,v_43762);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_43761,v_43762);
} else
{}
}
}
{
var G__43785 = seq__43740_43756;
var G__43786 = chunk__43741_43757;
var G__43787 = count__43742_43758;
var G__43788 = (i__43743_43759 + 1);
seq__43740_43756 = G__43785;
chunk__43741_43757 = G__43786;
count__43742_43758 = G__43787;
i__43743_43759 = G__43788;
continue;
}
} else
{var temp__4092__auto___43789 = cljs.core.seq.call(null,seq__43740_43756);if(temp__4092__auto___43789)
{var seq__43740_43790__$1 = temp__4092__auto___43789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43740_43790__$1))
{var c__14512__auto___43791 = cljs.core.chunk_first.call(null,seq__43740_43790__$1);{
var G__43792 = cljs.core.chunk_rest.call(null,seq__43740_43790__$1);
var G__43793 = c__14512__auto___43791;
var G__43794 = cljs.core.count.call(null,c__14512__auto___43791);
var G__43795 = 0;
seq__43740_43756 = G__43792;
chunk__43741_43757 = G__43793;
count__43742_43758 = G__43794;
i__43743_43759 = G__43795;
continue;
}
} else
{var vec__43750_43796 = cljs.core.first.call(null,seq__43740_43790__$1);var k_43797 = cljs.core.nth.call(null,vec__43750_43796,0,null);var v_43798 = cljs.core.nth.call(null,vec__43750_43796,1,null);var G__43751_43799 = k_43797;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__43751_43799))
{var seq__43752_43800 = cljs.core.seq.call(null,v_43798);var chunk__43753_43801 = null;var count__43754_43802 = 0;var i__43755_43803 = 0;while(true){
if((i__43755_43803 < count__43754_43802))
{var c_43804 = cljs.core._nth.call(null,chunk__43753_43801,i__43755_43803);dommy.attrs.add_class_BANG_.call(null,n,c_43804);
{
var G__43805 = seq__43752_43800;
var G__43806 = chunk__43753_43801;
var G__43807 = count__43754_43802;
var G__43808 = (i__43755_43803 + 1);
seq__43752_43800 = G__43805;
chunk__43753_43801 = G__43806;
count__43754_43802 = G__43807;
i__43755_43803 = G__43808;
continue;
}
} else
{var temp__4092__auto___43809__$1 = cljs.core.seq.call(null,seq__43752_43800);if(temp__4092__auto___43809__$1)
{var seq__43752_43810__$1 = temp__4092__auto___43809__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__43752_43810__$1))
{var c__14512__auto___43811 = cljs.core.chunk_first.call(null,seq__43752_43810__$1);{
var G__43812 = cljs.core.chunk_rest.call(null,seq__43752_43810__$1);
var G__43813 = c__14512__auto___43811;
var G__43814 = cljs.core.count.call(null,c__14512__auto___43811);
var G__43815 = 0;
seq__43752_43800 = G__43812;
chunk__43753_43801 = G__43813;
count__43754_43802 = G__43814;
i__43755_43803 = G__43815;
continue;
}
} else
{var c_43816 = cljs.core.first.call(null,seq__43752_43810__$1);dommy.attrs.add_class_BANG_.call(null,n,c_43816);
{
var G__43817 = cljs.core.next.call(null,seq__43752_43810__$1);
var G__43818 = null;
var G__43819 = 0;
var G__43820 = 0;
seq__43752_43800 = G__43817;
chunk__43753_43801 = G__43818;
count__43754_43802 = G__43819;
i__43755_43803 = G__43820;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__43751_43799))
{dommy.attrs.add_class_BANG_.call(null,n,v_43798);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_43797,v_43798);
} else
{}
}
}
{
var G__43821 = cljs.core.next.call(null,seq__43740_43790__$1);
var G__43822 = null;
var G__43823 = 0;
var G__43824 = 0;
seq__43740_43756 = G__43821;
chunk__43741_43757 = G__43822;
count__43742_43758 = G__43823;
i__43743_43759 = G__43824;
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
}catch (e43825){if((e43825 instanceof ReferenceError))
{var __43826 = e43825;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43825;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__43828 = data;if(G__43828)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__43828.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__43828.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__43828);
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