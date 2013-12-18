// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj25744 = {};return obj25744;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8218__auto__ = this$;if(and__8218__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8218__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8838__auto__ = (((this$ == null))?null:this$);return (function (){var or__8230__auto__ = (dommy.template._elem[goog.typeOf(x__8838__auto__)]);if(or__8230__auto__)
{return or__8230__auto__;
} else
{var or__8230__auto____$1 = (dommy.template._elem["_"]);if(or__8230__auto____$1)
{return or__8230__auto____$1;
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
{var str_25747 = node_str.substring(base_idx);while(true){
var next_idx_25748 = dommy.template.next_css_index.call(null,str_25747,1);var frag_25749 = (((next_idx_25748 >= 0))?str_25747.substring(0,next_idx_25748):str_25747);var G__25746_25750 = frag_25749.charAt(0);if(cljs.core._EQ_.call(null,"#",G__25746_25750))
{node.setAttribute("id",frag_25749.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__25746_25750))
{dommy.attrs.add_class_BANG_.call(null,node,frag_25749.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_25749.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_25748 >= 0))
{{
var G__25751 = str_25747.substring(next_idx_25748);
str_25747 = G__25751;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__25757 = data;if(G__25757)
{var bit__8861__auto__ = null;if(cljs.core.truth_((function (){var or__8230__auto__ = bit__8861__auto__;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return G__25757.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25757.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25757);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25757);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__25758_25762 = cljs.core.seq.call(null,data);var chunk__25759_25763 = null;var count__25760_25764 = 0;var i__25761_25765 = 0;while(true){
if((i__25761_25765 < count__25760_25764))
{var child_25766 = cljs.core._nth.call(null,chunk__25759_25763,i__25761_25765);__GT_document_fragment.call(null,result_frag,child_25766);
{
var G__25767 = seq__25758_25762;
var G__25768 = chunk__25759_25763;
var G__25769 = count__25760_25764;
var G__25770 = (i__25761_25765 + 1);
seq__25758_25762 = G__25767;
chunk__25759_25763 = G__25768;
count__25760_25764 = G__25769;
i__25761_25765 = G__25770;
continue;
}
} else
{var temp__4092__auto___25771 = cljs.core.seq.call(null,seq__25758_25762);if(temp__4092__auto___25771)
{var seq__25758_25772__$1 = temp__4092__auto___25771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25758_25772__$1))
{var c__8959__auto___25773 = cljs.core.chunk_first.call(null,seq__25758_25772__$1);{
var G__25774 = cljs.core.chunk_rest.call(null,seq__25758_25772__$1);
var G__25775 = c__8959__auto___25773;
var G__25776 = cljs.core.count.call(null,c__8959__auto___25773);
var G__25777 = 0;
seq__25758_25762 = G__25774;
chunk__25759_25763 = G__25775;
count__25760_25764 = G__25776;
i__25761_25765 = G__25777;
continue;
}
} else
{var child_25778 = cljs.core.first.call(null,seq__25758_25772__$1);__GT_document_fragment.call(null,result_frag,child_25778);
{
var G__25779 = cljs.core.next.call(null,seq__25758_25772__$1);
var G__25780 = null;
var G__25781 = 0;
var G__25782 = 0;
seq__25758_25762 = G__25779;
chunk__25759_25763 = G__25780;
count__25760_25764 = G__25781;
i__25761_25765 = G__25782;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__25784 = data;if(G__25784)
{var bit__8861__auto__ = null;if(cljs.core.truth_((function (){var or__8230__auto__ = bit__8861__auto__;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return G__25784.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25784.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25784);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25784);
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
dommy.template.compound_element = (function compound_element(p__25785){var vec__25805 = p__25785;var tag_name = cljs.core.nth.call(null,vec__25805,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__25805,1,null);var children = cljs.core.nthnext.call(null,vec__25805,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__25807 = maybe_attrs;if(G__25807)
{var bit__8861__auto__ = null;if(cljs.core.truth_((function (){var or__8230__auto__ = bit__8861__auto__;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return G__25807.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25807.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25807);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__25808_25824 = cljs.core.seq.call(null,attrs);var chunk__25809_25825 = null;var count__25810_25826 = 0;var i__25811_25827 = 0;while(true){
if((i__25811_25827 < count__25810_25826))
{var vec__25812_25828 = cljs.core._nth.call(null,chunk__25809_25825,i__25811_25827);var k_25829 = cljs.core.nth.call(null,vec__25812_25828,0,null);var v_25830 = cljs.core.nth.call(null,vec__25812_25828,1,null);var G__25813_25831 = k_25829;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25813_25831))
{var seq__25814_25832 = cljs.core.seq.call(null,v_25830);var chunk__25815_25833 = null;var count__25816_25834 = 0;var i__25817_25835 = 0;while(true){
if((i__25817_25835 < count__25816_25834))
{var c_25836 = cljs.core._nth.call(null,chunk__25815_25833,i__25817_25835);dommy.attrs.add_class_BANG_.call(null,n,c_25836);
{
var G__25837 = seq__25814_25832;
var G__25838 = chunk__25815_25833;
var G__25839 = count__25816_25834;
var G__25840 = (i__25817_25835 + 1);
seq__25814_25832 = G__25837;
chunk__25815_25833 = G__25838;
count__25816_25834 = G__25839;
i__25817_25835 = G__25840;
continue;
}
} else
{var temp__4092__auto___25841 = cljs.core.seq.call(null,seq__25814_25832);if(temp__4092__auto___25841)
{var seq__25814_25842__$1 = temp__4092__auto___25841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25814_25842__$1))
{var c__8959__auto___25843 = cljs.core.chunk_first.call(null,seq__25814_25842__$1);{
var G__25844 = cljs.core.chunk_rest.call(null,seq__25814_25842__$1);
var G__25845 = c__8959__auto___25843;
var G__25846 = cljs.core.count.call(null,c__8959__auto___25843);
var G__25847 = 0;
seq__25814_25832 = G__25844;
chunk__25815_25833 = G__25845;
count__25816_25834 = G__25846;
i__25817_25835 = G__25847;
continue;
}
} else
{var c_25848 = cljs.core.first.call(null,seq__25814_25842__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25848);
{
var G__25849 = cljs.core.next.call(null,seq__25814_25842__$1);
var G__25850 = null;
var G__25851 = 0;
var G__25852 = 0;
seq__25814_25832 = G__25849;
chunk__25815_25833 = G__25850;
count__25816_25834 = G__25851;
i__25817_25835 = G__25852;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25813_25831))
{dommy.attrs.add_class_BANG_.call(null,n,v_25830);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25829,v_25830);
} else
{}
}
}
{
var G__25853 = seq__25808_25824;
var G__25854 = chunk__25809_25825;
var G__25855 = count__25810_25826;
var G__25856 = (i__25811_25827 + 1);
seq__25808_25824 = G__25853;
chunk__25809_25825 = G__25854;
count__25810_25826 = G__25855;
i__25811_25827 = G__25856;
continue;
}
} else
{var temp__4092__auto___25857 = cljs.core.seq.call(null,seq__25808_25824);if(temp__4092__auto___25857)
{var seq__25808_25858__$1 = temp__4092__auto___25857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25808_25858__$1))
{var c__8959__auto___25859 = cljs.core.chunk_first.call(null,seq__25808_25858__$1);{
var G__25860 = cljs.core.chunk_rest.call(null,seq__25808_25858__$1);
var G__25861 = c__8959__auto___25859;
var G__25862 = cljs.core.count.call(null,c__8959__auto___25859);
var G__25863 = 0;
seq__25808_25824 = G__25860;
chunk__25809_25825 = G__25861;
count__25810_25826 = G__25862;
i__25811_25827 = G__25863;
continue;
}
} else
{var vec__25818_25864 = cljs.core.first.call(null,seq__25808_25858__$1);var k_25865 = cljs.core.nth.call(null,vec__25818_25864,0,null);var v_25866 = cljs.core.nth.call(null,vec__25818_25864,1,null);var G__25819_25867 = k_25865;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25819_25867))
{var seq__25820_25868 = cljs.core.seq.call(null,v_25866);var chunk__25821_25869 = null;var count__25822_25870 = 0;var i__25823_25871 = 0;while(true){
if((i__25823_25871 < count__25822_25870))
{var c_25872 = cljs.core._nth.call(null,chunk__25821_25869,i__25823_25871);dommy.attrs.add_class_BANG_.call(null,n,c_25872);
{
var G__25873 = seq__25820_25868;
var G__25874 = chunk__25821_25869;
var G__25875 = count__25822_25870;
var G__25876 = (i__25823_25871 + 1);
seq__25820_25868 = G__25873;
chunk__25821_25869 = G__25874;
count__25822_25870 = G__25875;
i__25823_25871 = G__25876;
continue;
}
} else
{var temp__4092__auto___25877__$1 = cljs.core.seq.call(null,seq__25820_25868);if(temp__4092__auto___25877__$1)
{var seq__25820_25878__$1 = temp__4092__auto___25877__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25820_25878__$1))
{var c__8959__auto___25879 = cljs.core.chunk_first.call(null,seq__25820_25878__$1);{
var G__25880 = cljs.core.chunk_rest.call(null,seq__25820_25878__$1);
var G__25881 = c__8959__auto___25879;
var G__25882 = cljs.core.count.call(null,c__8959__auto___25879);
var G__25883 = 0;
seq__25820_25868 = G__25880;
chunk__25821_25869 = G__25881;
count__25822_25870 = G__25882;
i__25823_25871 = G__25883;
continue;
}
} else
{var c_25884 = cljs.core.first.call(null,seq__25820_25878__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25884);
{
var G__25885 = cljs.core.next.call(null,seq__25820_25878__$1);
var G__25886 = null;
var G__25887 = 0;
var G__25888 = 0;
seq__25820_25868 = G__25885;
chunk__25821_25869 = G__25886;
count__25822_25870 = G__25887;
i__25823_25871 = G__25888;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25819_25867))
{dommy.attrs.add_class_BANG_.call(null,n,v_25866);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25865,v_25866);
} else
{}
}
}
{
var G__25889 = cljs.core.next.call(null,seq__25808_25858__$1);
var G__25890 = null;
var G__25891 = 0;
var G__25892 = 0;
seq__25808_25824 = G__25889;
chunk__25809_25825 = G__25890;
count__25810_25826 = G__25891;
i__25811_25827 = G__25892;
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
}catch (e25893){if((e25893 instanceof ReferenceError))
{var __25894 = e25893;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25893;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__25896 = data;if(G__25896)
{var bit__8861__auto__ = null;if(cljs.core.truth_((function (){var or__8230__auto__ = bit__8861__auto__;if(cljs.core.truth_(or__8230__auto__))
{return or__8230__auto__;
} else
{return G__25896.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25896.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25896);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25896);
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