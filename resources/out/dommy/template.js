// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj35858 = {};return obj35858;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__15129__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (dommy.template._elem[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (dommy.template._elem["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
{var str_35861 = node_str.substring(base_idx);while(true){
var next_idx_35862 = dommy.template.next_css_index.call(null,str_35861,1);var frag_35863 = (((next_idx_35862 >= 0))?str_35861.substring(0,next_idx_35862):str_35861);var G__35860_35864 = frag_35863.charAt(0);if(cljs.core._EQ_.call(null,"#",G__35860_35864))
{node.setAttribute("id",frag_35863.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__35860_35864))
{dommy.attrs.add_class_BANG_.call(null,node,frag_35863.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_35863.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_35862 >= 0))
{{
var G__35865 = str_35861.substring(next_idx_35862);
str_35861 = G__35865;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__35871 = data;if(G__35871)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__35871.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35871.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35871);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__35872_35876 = cljs.core.seq.call(null,data);var chunk__35873_35877 = null;var count__35874_35878 = 0;var i__35875_35879 = 0;while(true){
if((i__35875_35879 < count__35874_35878))
{var child_35880 = cljs.core._nth.call(null,chunk__35873_35877,i__35875_35879);__GT_document_fragment.call(null,result_frag,child_35880);
{
var G__35881 = seq__35872_35876;
var G__35882 = chunk__35873_35877;
var G__35883 = count__35874_35878;
var G__35884 = (i__35875_35879 + 1);
seq__35872_35876 = G__35881;
chunk__35873_35877 = G__35882;
count__35874_35878 = G__35883;
i__35875_35879 = G__35884;
continue;
}
} else
{var temp__4098__auto___35885 = cljs.core.seq.call(null,seq__35872_35876);if(temp__4098__auto___35885)
{var seq__35872_35886__$1 = temp__4098__auto___35885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35872_35886__$1))
{var c__15865__auto___35887 = cljs.core.chunk_first.call(null,seq__35872_35886__$1);{
var G__35888 = cljs.core.chunk_rest.call(null,seq__35872_35886__$1);
var G__35889 = c__15865__auto___35887;
var G__35890 = cljs.core.count.call(null,c__15865__auto___35887);
var G__35891 = 0;
seq__35872_35876 = G__35888;
chunk__35873_35877 = G__35889;
count__35874_35878 = G__35890;
i__35875_35879 = G__35891;
continue;
}
} else
{var child_35892 = cljs.core.first.call(null,seq__35872_35886__$1);__GT_document_fragment.call(null,result_frag,child_35892);
{
var G__35893 = cljs.core.next.call(null,seq__35872_35886__$1);
var G__35894 = null;
var G__35895 = 0;
var G__35896 = 0;
seq__35872_35876 = G__35893;
chunk__35873_35877 = G__35894;
count__35874_35878 = G__35895;
i__35875_35879 = G__35896;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__35898 = data;if(G__35898)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__35898.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35898.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35898);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35898);
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
dommy.template.compound_element = (function compound_element(p__35899){var vec__35919 = p__35899;var tag_name = cljs.core.nth.call(null,vec__35919,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__35919,1,null);var children = cljs.core.nthnext.call(null,vec__35919,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__35921 = maybe_attrs;if(G__35921)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__35921.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35921.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35921);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35921);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__35922_35938 = cljs.core.seq.call(null,attrs);var chunk__35923_35939 = null;var count__35924_35940 = 0;var i__35925_35941 = 0;while(true){
if((i__35925_35941 < count__35924_35940))
{var vec__35926_35942 = cljs.core._nth.call(null,chunk__35923_35939,i__35925_35941);var k_35943 = cljs.core.nth.call(null,vec__35926_35942,0,null);var v_35944 = cljs.core.nth.call(null,vec__35926_35942,1,null);var G__35927_35945 = k_35943;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35927_35945))
{var seq__35928_35946 = cljs.core.seq.call(null,v_35944);var chunk__35929_35947 = null;var count__35930_35948 = 0;var i__35931_35949 = 0;while(true){
if((i__35931_35949 < count__35930_35948))
{var c_35950 = cljs.core._nth.call(null,chunk__35929_35947,i__35931_35949);dommy.attrs.add_class_BANG_.call(null,n,c_35950);
{
var G__35951 = seq__35928_35946;
var G__35952 = chunk__35929_35947;
var G__35953 = count__35930_35948;
var G__35954 = (i__35931_35949 + 1);
seq__35928_35946 = G__35951;
chunk__35929_35947 = G__35952;
count__35930_35948 = G__35953;
i__35931_35949 = G__35954;
continue;
}
} else
{var temp__4098__auto___35955 = cljs.core.seq.call(null,seq__35928_35946);if(temp__4098__auto___35955)
{var seq__35928_35956__$1 = temp__4098__auto___35955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35928_35956__$1))
{var c__15865__auto___35957 = cljs.core.chunk_first.call(null,seq__35928_35956__$1);{
var G__35958 = cljs.core.chunk_rest.call(null,seq__35928_35956__$1);
var G__35959 = c__15865__auto___35957;
var G__35960 = cljs.core.count.call(null,c__15865__auto___35957);
var G__35961 = 0;
seq__35928_35946 = G__35958;
chunk__35929_35947 = G__35959;
count__35930_35948 = G__35960;
i__35931_35949 = G__35961;
continue;
}
} else
{var c_35962 = cljs.core.first.call(null,seq__35928_35956__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35962);
{
var G__35963 = cljs.core.next.call(null,seq__35928_35956__$1);
var G__35964 = null;
var G__35965 = 0;
var G__35966 = 0;
seq__35928_35946 = G__35963;
chunk__35929_35947 = G__35964;
count__35930_35948 = G__35965;
i__35931_35949 = G__35966;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35927_35945))
{dommy.attrs.add_class_BANG_.call(null,n,v_35944);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35943,v_35944);
} else
{}
}
}
{
var G__35967 = seq__35922_35938;
var G__35968 = chunk__35923_35939;
var G__35969 = count__35924_35940;
var G__35970 = (i__35925_35941 + 1);
seq__35922_35938 = G__35967;
chunk__35923_35939 = G__35968;
count__35924_35940 = G__35969;
i__35925_35941 = G__35970;
continue;
}
} else
{var temp__4098__auto___35971 = cljs.core.seq.call(null,seq__35922_35938);if(temp__4098__auto___35971)
{var seq__35922_35972__$1 = temp__4098__auto___35971;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35922_35972__$1))
{var c__15865__auto___35973 = cljs.core.chunk_first.call(null,seq__35922_35972__$1);{
var G__35974 = cljs.core.chunk_rest.call(null,seq__35922_35972__$1);
var G__35975 = c__15865__auto___35973;
var G__35976 = cljs.core.count.call(null,c__15865__auto___35973);
var G__35977 = 0;
seq__35922_35938 = G__35974;
chunk__35923_35939 = G__35975;
count__35924_35940 = G__35976;
i__35925_35941 = G__35977;
continue;
}
} else
{var vec__35932_35978 = cljs.core.first.call(null,seq__35922_35972__$1);var k_35979 = cljs.core.nth.call(null,vec__35932_35978,0,null);var v_35980 = cljs.core.nth.call(null,vec__35932_35978,1,null);var G__35933_35981 = k_35979;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35933_35981))
{var seq__35934_35982 = cljs.core.seq.call(null,v_35980);var chunk__35935_35983 = null;var count__35936_35984 = 0;var i__35937_35985 = 0;while(true){
if((i__35937_35985 < count__35936_35984))
{var c_35986 = cljs.core._nth.call(null,chunk__35935_35983,i__35937_35985);dommy.attrs.add_class_BANG_.call(null,n,c_35986);
{
var G__35987 = seq__35934_35982;
var G__35988 = chunk__35935_35983;
var G__35989 = count__35936_35984;
var G__35990 = (i__35937_35985 + 1);
seq__35934_35982 = G__35987;
chunk__35935_35983 = G__35988;
count__35936_35984 = G__35989;
i__35937_35985 = G__35990;
continue;
}
} else
{var temp__4098__auto___35991__$1 = cljs.core.seq.call(null,seq__35934_35982);if(temp__4098__auto___35991__$1)
{var seq__35934_35992__$1 = temp__4098__auto___35991__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35934_35992__$1))
{var c__15865__auto___35993 = cljs.core.chunk_first.call(null,seq__35934_35992__$1);{
var G__35994 = cljs.core.chunk_rest.call(null,seq__35934_35992__$1);
var G__35995 = c__15865__auto___35993;
var G__35996 = cljs.core.count.call(null,c__15865__auto___35993);
var G__35997 = 0;
seq__35934_35982 = G__35994;
chunk__35935_35983 = G__35995;
count__35936_35984 = G__35996;
i__35937_35985 = G__35997;
continue;
}
} else
{var c_35998 = cljs.core.first.call(null,seq__35934_35992__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35998);
{
var G__35999 = cljs.core.next.call(null,seq__35934_35992__$1);
var G__36000 = null;
var G__36001 = 0;
var G__36002 = 0;
seq__35934_35982 = G__35999;
chunk__35935_35983 = G__36000;
count__35936_35984 = G__36001;
i__35937_35985 = G__36002;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35933_35981))
{dommy.attrs.add_class_BANG_.call(null,n,v_35980);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35979,v_35980);
} else
{}
}
}
{
var G__36003 = cljs.core.next.call(null,seq__35922_35972__$1);
var G__36004 = null;
var G__36005 = 0;
var G__36006 = 0;
seq__35922_35938 = G__36003;
chunk__35923_35939 = G__36004;
count__35924_35940 = G__36005;
i__35925_35941 = G__36006;
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
}catch (e36007){if((e36007 instanceof ReferenceError))
{var __36008 = e36007;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36007;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__36010 = data;if(G__36010)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__36010.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36010.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36010);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36010);
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