// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj24773 = {};return obj24773;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7816__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (dommy.template._elem[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (dommy.template._elem["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
{var str_24776 = node_str.substring(base_idx);while(true){
var next_idx_24777 = dommy.template.next_css_index.call(null,str_24776,1);var frag_24778 = (((next_idx_24777 >= 0))?str_24776.substring(0,next_idx_24777):str_24776);var G__24775_24779 = frag_24778.charAt(0);if(cljs.core._EQ_.call(null,"#",G__24775_24779))
{node.setAttribute("id",frag_24778.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__24775_24779))
{dommy.attrs.add_class_BANG_.call(null,node,frag_24778.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_24778.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_24777 >= 0))
{{
var G__24780 = str_24776.substring(next_idx_24777);
str_24776 = G__24780;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__24786 = data;if(G__24786)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24786.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24786.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24786);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24786);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__24787_24791 = cljs.core.seq.call(null,data);var chunk__24788_24792 = null;var count__24789_24793 = 0;var i__24790_24794 = 0;while(true){
if((i__24790_24794 < count__24789_24793))
{var child_24795 = cljs.core._nth.call(null,chunk__24788_24792,i__24790_24794);__GT_document_fragment.call(null,result_frag,child_24795);
{
var G__24796 = seq__24787_24791;
var G__24797 = chunk__24788_24792;
var G__24798 = count__24789_24793;
var G__24799 = (i__24790_24794 + 1);
seq__24787_24791 = G__24796;
chunk__24788_24792 = G__24797;
count__24789_24793 = G__24798;
i__24790_24794 = G__24799;
continue;
}
} else
{var temp__4092__auto___24800 = cljs.core.seq.call(null,seq__24787_24791);if(temp__4092__auto___24800)
{var seq__24787_24801__$1 = temp__4092__auto___24800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_24801__$1))
{var c__8552__auto___24802 = cljs.core.chunk_first.call(null,seq__24787_24801__$1);{
var G__24803 = cljs.core.chunk_rest.call(null,seq__24787_24801__$1);
var G__24804 = c__8552__auto___24802;
var G__24805 = cljs.core.count.call(null,c__8552__auto___24802);
var G__24806 = 0;
seq__24787_24791 = G__24803;
chunk__24788_24792 = G__24804;
count__24789_24793 = G__24805;
i__24790_24794 = G__24806;
continue;
}
} else
{var child_24807 = cljs.core.first.call(null,seq__24787_24801__$1);__GT_document_fragment.call(null,result_frag,child_24807);
{
var G__24808 = cljs.core.next.call(null,seq__24787_24801__$1);
var G__24809 = null;
var G__24810 = 0;
var G__24811 = 0;
seq__24787_24791 = G__24808;
chunk__24788_24792 = G__24809;
count__24789_24793 = G__24810;
i__24790_24794 = G__24811;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__24813 = data;if(G__24813)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24813.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24813.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24813);
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
dommy.template.compound_element = (function compound_element(p__24814){var vec__24834 = p__24814;var tag_name = cljs.core.nth.call(null,vec__24834,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__24834,1,null);var children = cljs.core.nthnext.call(null,vec__24834,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__24836 = maybe_attrs;if(G__24836)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24836.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24836.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24836);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24836);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__24837_24853 = cljs.core.seq.call(null,attrs);var chunk__24838_24854 = null;var count__24839_24855 = 0;var i__24840_24856 = 0;while(true){
if((i__24840_24856 < count__24839_24855))
{var vec__24841_24857 = cljs.core._nth.call(null,chunk__24838_24854,i__24840_24856);var k_24858 = cljs.core.nth.call(null,vec__24841_24857,0,null);var v_24859 = cljs.core.nth.call(null,vec__24841_24857,1,null);var G__24842_24860 = k_24858;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24842_24860))
{var seq__24843_24861 = cljs.core.seq.call(null,v_24859);var chunk__24844_24862 = null;var count__24845_24863 = 0;var i__24846_24864 = 0;while(true){
if((i__24846_24864 < count__24845_24863))
{var c_24865 = cljs.core._nth.call(null,chunk__24844_24862,i__24846_24864);dommy.attrs.add_class_BANG_.call(null,n,c_24865);
{
var G__24866 = seq__24843_24861;
var G__24867 = chunk__24844_24862;
var G__24868 = count__24845_24863;
var G__24869 = (i__24846_24864 + 1);
seq__24843_24861 = G__24866;
chunk__24844_24862 = G__24867;
count__24845_24863 = G__24868;
i__24846_24864 = G__24869;
continue;
}
} else
{var temp__4092__auto___24870 = cljs.core.seq.call(null,seq__24843_24861);if(temp__4092__auto___24870)
{var seq__24843_24871__$1 = temp__4092__auto___24870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24843_24871__$1))
{var c__8552__auto___24872 = cljs.core.chunk_first.call(null,seq__24843_24871__$1);{
var G__24873 = cljs.core.chunk_rest.call(null,seq__24843_24871__$1);
var G__24874 = c__8552__auto___24872;
var G__24875 = cljs.core.count.call(null,c__8552__auto___24872);
var G__24876 = 0;
seq__24843_24861 = G__24873;
chunk__24844_24862 = G__24874;
count__24845_24863 = G__24875;
i__24846_24864 = G__24876;
continue;
}
} else
{var c_24877 = cljs.core.first.call(null,seq__24843_24871__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24877);
{
var G__24878 = cljs.core.next.call(null,seq__24843_24871__$1);
var G__24879 = null;
var G__24880 = 0;
var G__24881 = 0;
seq__24843_24861 = G__24878;
chunk__24844_24862 = G__24879;
count__24845_24863 = G__24880;
i__24846_24864 = G__24881;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24842_24860))
{dommy.attrs.add_class_BANG_.call(null,n,v_24859);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24858,v_24859);
} else
{}
}
}
{
var G__24882 = seq__24837_24853;
var G__24883 = chunk__24838_24854;
var G__24884 = count__24839_24855;
var G__24885 = (i__24840_24856 + 1);
seq__24837_24853 = G__24882;
chunk__24838_24854 = G__24883;
count__24839_24855 = G__24884;
i__24840_24856 = G__24885;
continue;
}
} else
{var temp__4092__auto___24886 = cljs.core.seq.call(null,seq__24837_24853);if(temp__4092__auto___24886)
{var seq__24837_24887__$1 = temp__4092__auto___24886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24837_24887__$1))
{var c__8552__auto___24888 = cljs.core.chunk_first.call(null,seq__24837_24887__$1);{
var G__24889 = cljs.core.chunk_rest.call(null,seq__24837_24887__$1);
var G__24890 = c__8552__auto___24888;
var G__24891 = cljs.core.count.call(null,c__8552__auto___24888);
var G__24892 = 0;
seq__24837_24853 = G__24889;
chunk__24838_24854 = G__24890;
count__24839_24855 = G__24891;
i__24840_24856 = G__24892;
continue;
}
} else
{var vec__24847_24893 = cljs.core.first.call(null,seq__24837_24887__$1);var k_24894 = cljs.core.nth.call(null,vec__24847_24893,0,null);var v_24895 = cljs.core.nth.call(null,vec__24847_24893,1,null);var G__24848_24896 = k_24894;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__24848_24896))
{var seq__24849_24897 = cljs.core.seq.call(null,v_24895);var chunk__24850_24898 = null;var count__24851_24899 = 0;var i__24852_24900 = 0;while(true){
if((i__24852_24900 < count__24851_24899))
{var c_24901 = cljs.core._nth.call(null,chunk__24850_24898,i__24852_24900);dommy.attrs.add_class_BANG_.call(null,n,c_24901);
{
var G__24902 = seq__24849_24897;
var G__24903 = chunk__24850_24898;
var G__24904 = count__24851_24899;
var G__24905 = (i__24852_24900 + 1);
seq__24849_24897 = G__24902;
chunk__24850_24898 = G__24903;
count__24851_24899 = G__24904;
i__24852_24900 = G__24905;
continue;
}
} else
{var temp__4092__auto___24906__$1 = cljs.core.seq.call(null,seq__24849_24897);if(temp__4092__auto___24906__$1)
{var seq__24849_24907__$1 = temp__4092__auto___24906__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24849_24907__$1))
{var c__8552__auto___24908 = cljs.core.chunk_first.call(null,seq__24849_24907__$1);{
var G__24909 = cljs.core.chunk_rest.call(null,seq__24849_24907__$1);
var G__24910 = c__8552__auto___24908;
var G__24911 = cljs.core.count.call(null,c__8552__auto___24908);
var G__24912 = 0;
seq__24849_24897 = G__24909;
chunk__24850_24898 = G__24910;
count__24851_24899 = G__24911;
i__24852_24900 = G__24912;
continue;
}
} else
{var c_24913 = cljs.core.first.call(null,seq__24849_24907__$1);dommy.attrs.add_class_BANG_.call(null,n,c_24913);
{
var G__24914 = cljs.core.next.call(null,seq__24849_24907__$1);
var G__24915 = null;
var G__24916 = 0;
var G__24917 = 0;
seq__24849_24897 = G__24914;
chunk__24850_24898 = G__24915;
count__24851_24899 = G__24916;
i__24852_24900 = G__24917;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__24848_24896))
{dommy.attrs.add_class_BANG_.call(null,n,v_24895);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_24894,v_24895);
} else
{}
}
}
{
var G__24918 = cljs.core.next.call(null,seq__24837_24887__$1);
var G__24919 = null;
var G__24920 = 0;
var G__24921 = 0;
seq__24837_24853 = G__24918;
chunk__24838_24854 = G__24919;
count__24839_24855 = G__24920;
i__24840_24856 = G__24921;
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
}catch (e24922){if((e24922 instanceof ReferenceError))
{var __24923 = e24922;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24922;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__24925 = data;if(G__24925)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24925.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__24925.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24925);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__24925);
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
