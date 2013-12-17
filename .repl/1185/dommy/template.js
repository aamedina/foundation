// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj86787 = {};return obj86787;
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
{var str_86790 = node_str.substring(base_idx);while(true){
var next_idx_86791 = dommy.template.next_css_index.call(null,str_86790,1);var frag_86792 = (((next_idx_86791 >= 0))?str_86790.substring(0,next_idx_86791):str_86790);var G__86789_86793 = frag_86792.charAt(0);if(cljs.core._EQ_.call(null,"#",G__86789_86793))
{node.setAttribute("id",frag_86792.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__86789_86793))
{dommy.attrs.add_class_BANG_.call(null,node,frag_86792.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_86792.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_86791 >= 0))
{{
var G__86794 = str_86790.substring(next_idx_86791);
str_86790 = G__86794;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__86800 = data;if(G__86800)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__86800.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__86800.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86800);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86800);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__86801_86805 = cljs.core.seq.call(null,data);var chunk__86802_86806 = null;var count__86803_86807 = 0;var i__86804_86808 = 0;while(true){
if((i__86804_86808 < count__86803_86807))
{var child_86809 = cljs.core._nth.call(null,chunk__86802_86806,i__86804_86808);__GT_document_fragment.call(null,result_frag,child_86809);
{
var G__86810 = seq__86801_86805;
var G__86811 = chunk__86802_86806;
var G__86812 = count__86803_86807;
var G__86813 = (i__86804_86808 + 1);
seq__86801_86805 = G__86810;
chunk__86802_86806 = G__86811;
count__86803_86807 = G__86812;
i__86804_86808 = G__86813;
continue;
}
} else
{var temp__4092__auto___86814 = cljs.core.seq.call(null,seq__86801_86805);if(temp__4092__auto___86814)
{var seq__86801_86815__$1 = temp__4092__auto___86814;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86801_86815__$1))
{var c__8552__auto___86816 = cljs.core.chunk_first.call(null,seq__86801_86815__$1);{
var G__86817 = cljs.core.chunk_rest.call(null,seq__86801_86815__$1);
var G__86818 = c__8552__auto___86816;
var G__86819 = cljs.core.count.call(null,c__8552__auto___86816);
var G__86820 = 0;
seq__86801_86805 = G__86817;
chunk__86802_86806 = G__86818;
count__86803_86807 = G__86819;
i__86804_86808 = G__86820;
continue;
}
} else
{var child_86821 = cljs.core.first.call(null,seq__86801_86815__$1);__GT_document_fragment.call(null,result_frag,child_86821);
{
var G__86822 = cljs.core.next.call(null,seq__86801_86815__$1);
var G__86823 = null;
var G__86824 = 0;
var G__86825 = 0;
seq__86801_86805 = G__86822;
chunk__86802_86806 = G__86823;
count__86803_86807 = G__86824;
i__86804_86808 = G__86825;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__86827 = data;if(G__86827)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__86827.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__86827.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86827);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86827);
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
dommy.template.compound_element = (function compound_element(p__86828){var vec__86848 = p__86828;var tag_name = cljs.core.nth.call(null,vec__86848,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__86848,1,null);var children = cljs.core.nthnext.call(null,vec__86848,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__86850 = maybe_attrs;if(G__86850)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__86850.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__86850.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86850);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86850);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__86851_86867 = cljs.core.seq.call(null,attrs);var chunk__86852_86868 = null;var count__86853_86869 = 0;var i__86854_86870 = 0;while(true){
if((i__86854_86870 < count__86853_86869))
{var vec__86855_86871 = cljs.core._nth.call(null,chunk__86852_86868,i__86854_86870);var k_86872 = cljs.core.nth.call(null,vec__86855_86871,0,null);var v_86873 = cljs.core.nth.call(null,vec__86855_86871,1,null);var G__86856_86874 = k_86872;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__86856_86874))
{var seq__86857_86875 = cljs.core.seq.call(null,v_86873);var chunk__86858_86876 = null;var count__86859_86877 = 0;var i__86860_86878 = 0;while(true){
if((i__86860_86878 < count__86859_86877))
{var c_86879 = cljs.core._nth.call(null,chunk__86858_86876,i__86860_86878);dommy.attrs.add_class_BANG_.call(null,n,c_86879);
{
var G__86880 = seq__86857_86875;
var G__86881 = chunk__86858_86876;
var G__86882 = count__86859_86877;
var G__86883 = (i__86860_86878 + 1);
seq__86857_86875 = G__86880;
chunk__86858_86876 = G__86881;
count__86859_86877 = G__86882;
i__86860_86878 = G__86883;
continue;
}
} else
{var temp__4092__auto___86884 = cljs.core.seq.call(null,seq__86857_86875);if(temp__4092__auto___86884)
{var seq__86857_86885__$1 = temp__4092__auto___86884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86857_86885__$1))
{var c__8552__auto___86886 = cljs.core.chunk_first.call(null,seq__86857_86885__$1);{
var G__86887 = cljs.core.chunk_rest.call(null,seq__86857_86885__$1);
var G__86888 = c__8552__auto___86886;
var G__86889 = cljs.core.count.call(null,c__8552__auto___86886);
var G__86890 = 0;
seq__86857_86875 = G__86887;
chunk__86858_86876 = G__86888;
count__86859_86877 = G__86889;
i__86860_86878 = G__86890;
continue;
}
} else
{var c_86891 = cljs.core.first.call(null,seq__86857_86885__$1);dommy.attrs.add_class_BANG_.call(null,n,c_86891);
{
var G__86892 = cljs.core.next.call(null,seq__86857_86885__$1);
var G__86893 = null;
var G__86894 = 0;
var G__86895 = 0;
seq__86857_86875 = G__86892;
chunk__86858_86876 = G__86893;
count__86859_86877 = G__86894;
i__86860_86878 = G__86895;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__86856_86874))
{dommy.attrs.add_class_BANG_.call(null,n,v_86873);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_86872,v_86873);
} else
{}
}
}
{
var G__86896 = seq__86851_86867;
var G__86897 = chunk__86852_86868;
var G__86898 = count__86853_86869;
var G__86899 = (i__86854_86870 + 1);
seq__86851_86867 = G__86896;
chunk__86852_86868 = G__86897;
count__86853_86869 = G__86898;
i__86854_86870 = G__86899;
continue;
}
} else
{var temp__4092__auto___86900 = cljs.core.seq.call(null,seq__86851_86867);if(temp__4092__auto___86900)
{var seq__86851_86901__$1 = temp__4092__auto___86900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86851_86901__$1))
{var c__8552__auto___86902 = cljs.core.chunk_first.call(null,seq__86851_86901__$1);{
var G__86903 = cljs.core.chunk_rest.call(null,seq__86851_86901__$1);
var G__86904 = c__8552__auto___86902;
var G__86905 = cljs.core.count.call(null,c__8552__auto___86902);
var G__86906 = 0;
seq__86851_86867 = G__86903;
chunk__86852_86868 = G__86904;
count__86853_86869 = G__86905;
i__86854_86870 = G__86906;
continue;
}
} else
{var vec__86861_86907 = cljs.core.first.call(null,seq__86851_86901__$1);var k_86908 = cljs.core.nth.call(null,vec__86861_86907,0,null);var v_86909 = cljs.core.nth.call(null,vec__86861_86907,1,null);var G__86862_86910 = k_86908;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__86862_86910))
{var seq__86863_86911 = cljs.core.seq.call(null,v_86909);var chunk__86864_86912 = null;var count__86865_86913 = 0;var i__86866_86914 = 0;while(true){
if((i__86866_86914 < count__86865_86913))
{var c_86915 = cljs.core._nth.call(null,chunk__86864_86912,i__86866_86914);dommy.attrs.add_class_BANG_.call(null,n,c_86915);
{
var G__86916 = seq__86863_86911;
var G__86917 = chunk__86864_86912;
var G__86918 = count__86865_86913;
var G__86919 = (i__86866_86914 + 1);
seq__86863_86911 = G__86916;
chunk__86864_86912 = G__86917;
count__86865_86913 = G__86918;
i__86866_86914 = G__86919;
continue;
}
} else
{var temp__4092__auto___86920__$1 = cljs.core.seq.call(null,seq__86863_86911);if(temp__4092__auto___86920__$1)
{var seq__86863_86921__$1 = temp__4092__auto___86920__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86863_86921__$1))
{var c__8552__auto___86922 = cljs.core.chunk_first.call(null,seq__86863_86921__$1);{
var G__86923 = cljs.core.chunk_rest.call(null,seq__86863_86921__$1);
var G__86924 = c__8552__auto___86922;
var G__86925 = cljs.core.count.call(null,c__8552__auto___86922);
var G__86926 = 0;
seq__86863_86911 = G__86923;
chunk__86864_86912 = G__86924;
count__86865_86913 = G__86925;
i__86866_86914 = G__86926;
continue;
}
} else
{var c_86927 = cljs.core.first.call(null,seq__86863_86921__$1);dommy.attrs.add_class_BANG_.call(null,n,c_86927);
{
var G__86928 = cljs.core.next.call(null,seq__86863_86921__$1);
var G__86929 = null;
var G__86930 = 0;
var G__86931 = 0;
seq__86863_86911 = G__86928;
chunk__86864_86912 = G__86929;
count__86865_86913 = G__86930;
i__86866_86914 = G__86931;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__86862_86910))
{dommy.attrs.add_class_BANG_.call(null,n,v_86909);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_86908,v_86909);
} else
{}
}
}
{
var G__86932 = cljs.core.next.call(null,seq__86851_86901__$1);
var G__86933 = null;
var G__86934 = 0;
var G__86935 = 0;
seq__86851_86867 = G__86932;
chunk__86852_86868 = G__86933;
count__86853_86869 = G__86934;
i__86854_86870 = G__86935;
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
}catch (e86936){if((e86936 instanceof ReferenceError))
{var __86937 = e86936;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86936;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__86939 = data;if(G__86939)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__86939.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__86939.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86939);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__86939);
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
