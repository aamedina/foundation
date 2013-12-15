// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj328795 = {};return obj328795;
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
{var str_328798 = node_str.substring(base_idx);while(true){
var next_idx_328799 = dommy.template.next_css_index.call(null,str_328798,1);var frag_328800 = (((next_idx_328799 >= 0))?str_328798.substring(0,next_idx_328799):str_328798);var G__328797_328801 = frag_328800.charAt(0);if(cljs.core._EQ_.call(null,"#",G__328797_328801))
{node.setAttribute("id",frag_328800.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__328797_328801))
{dommy.attrs.add_class_BANG_.call(null,node,frag_328800.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_328800.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_328799 >= 0))
{{
var G__328802 = str_328798.substring(next_idx_328799);
str_328798 = G__328802;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__328808 = data;if(G__328808)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__328808.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__328808.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328808);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__328809_328813 = cljs.core.seq.call(null,data);var chunk__328810_328814 = null;var count__328811_328815 = 0;var i__328812_328816 = 0;while(true){
if((i__328812_328816 < count__328811_328815))
{var child_328817 = cljs.core._nth.call(null,chunk__328810_328814,i__328812_328816);__GT_document_fragment.call(null,result_frag,child_328817);
{
var G__328818 = seq__328809_328813;
var G__328819 = chunk__328810_328814;
var G__328820 = count__328811_328815;
var G__328821 = (i__328812_328816 + 1);
seq__328809_328813 = G__328818;
chunk__328810_328814 = G__328819;
count__328811_328815 = G__328820;
i__328812_328816 = G__328821;
continue;
}
} else
{var temp__4092__auto___328822 = cljs.core.seq.call(null,seq__328809_328813);if(temp__4092__auto___328822)
{var seq__328809_328823__$1 = temp__4092__auto___328822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328809_328823__$1))
{var c__14549__auto___328824 = cljs.core.chunk_first.call(null,seq__328809_328823__$1);{
var G__328825 = cljs.core.chunk_rest.call(null,seq__328809_328823__$1);
var G__328826 = c__14549__auto___328824;
var G__328827 = cljs.core.count.call(null,c__14549__auto___328824);
var G__328828 = 0;
seq__328809_328813 = G__328825;
chunk__328810_328814 = G__328826;
count__328811_328815 = G__328827;
i__328812_328816 = G__328828;
continue;
}
} else
{var child_328829 = cljs.core.first.call(null,seq__328809_328823__$1);__GT_document_fragment.call(null,result_frag,child_328829);
{
var G__328830 = cljs.core.next.call(null,seq__328809_328823__$1);
var G__328831 = null;
var G__328832 = 0;
var G__328833 = 0;
seq__328809_328813 = G__328830;
chunk__328810_328814 = G__328831;
count__328811_328815 = G__328832;
i__328812_328816 = G__328833;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__328835 = data;if(G__328835)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__328835.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__328835.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328835);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328835);
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
dommy.template.compound_element = (function compound_element(p__328836){var vec__328856 = p__328836;var tag_name = cljs.core.nth.call(null,vec__328856,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__328856,1,null);var children = cljs.core.nthnext.call(null,vec__328856,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__328858 = maybe_attrs;if(G__328858)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__328858.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__328858.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328858);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328858);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__328859_328875 = cljs.core.seq.call(null,attrs);var chunk__328860_328876 = null;var count__328861_328877 = 0;var i__328862_328878 = 0;while(true){
if((i__328862_328878 < count__328861_328877))
{var vec__328863_328879 = cljs.core._nth.call(null,chunk__328860_328876,i__328862_328878);var k_328880 = cljs.core.nth.call(null,vec__328863_328879,0,null);var v_328881 = cljs.core.nth.call(null,vec__328863_328879,1,null);var G__328864_328882 = k_328880;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__328864_328882))
{var seq__328865_328883 = cljs.core.seq.call(null,v_328881);var chunk__328866_328884 = null;var count__328867_328885 = 0;var i__328868_328886 = 0;while(true){
if((i__328868_328886 < count__328867_328885))
{var c_328887 = cljs.core._nth.call(null,chunk__328866_328884,i__328868_328886);dommy.attrs.add_class_BANG_.call(null,n,c_328887);
{
var G__328888 = seq__328865_328883;
var G__328889 = chunk__328866_328884;
var G__328890 = count__328867_328885;
var G__328891 = (i__328868_328886 + 1);
seq__328865_328883 = G__328888;
chunk__328866_328884 = G__328889;
count__328867_328885 = G__328890;
i__328868_328886 = G__328891;
continue;
}
} else
{var temp__4092__auto___328892 = cljs.core.seq.call(null,seq__328865_328883);if(temp__4092__auto___328892)
{var seq__328865_328893__$1 = temp__4092__auto___328892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328865_328893__$1))
{var c__14549__auto___328894 = cljs.core.chunk_first.call(null,seq__328865_328893__$1);{
var G__328895 = cljs.core.chunk_rest.call(null,seq__328865_328893__$1);
var G__328896 = c__14549__auto___328894;
var G__328897 = cljs.core.count.call(null,c__14549__auto___328894);
var G__328898 = 0;
seq__328865_328883 = G__328895;
chunk__328866_328884 = G__328896;
count__328867_328885 = G__328897;
i__328868_328886 = G__328898;
continue;
}
} else
{var c_328899 = cljs.core.first.call(null,seq__328865_328893__$1);dommy.attrs.add_class_BANG_.call(null,n,c_328899);
{
var G__328900 = cljs.core.next.call(null,seq__328865_328893__$1);
var G__328901 = null;
var G__328902 = 0;
var G__328903 = 0;
seq__328865_328883 = G__328900;
chunk__328866_328884 = G__328901;
count__328867_328885 = G__328902;
i__328868_328886 = G__328903;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__328864_328882))
{dommy.attrs.add_class_BANG_.call(null,n,v_328881);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_328880,v_328881);
} else
{}
}
}
{
var G__328904 = seq__328859_328875;
var G__328905 = chunk__328860_328876;
var G__328906 = count__328861_328877;
var G__328907 = (i__328862_328878 + 1);
seq__328859_328875 = G__328904;
chunk__328860_328876 = G__328905;
count__328861_328877 = G__328906;
i__328862_328878 = G__328907;
continue;
}
} else
{var temp__4092__auto___328908 = cljs.core.seq.call(null,seq__328859_328875);if(temp__4092__auto___328908)
{var seq__328859_328909__$1 = temp__4092__auto___328908;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328859_328909__$1))
{var c__14549__auto___328910 = cljs.core.chunk_first.call(null,seq__328859_328909__$1);{
var G__328911 = cljs.core.chunk_rest.call(null,seq__328859_328909__$1);
var G__328912 = c__14549__auto___328910;
var G__328913 = cljs.core.count.call(null,c__14549__auto___328910);
var G__328914 = 0;
seq__328859_328875 = G__328911;
chunk__328860_328876 = G__328912;
count__328861_328877 = G__328913;
i__328862_328878 = G__328914;
continue;
}
} else
{var vec__328869_328915 = cljs.core.first.call(null,seq__328859_328909__$1);var k_328916 = cljs.core.nth.call(null,vec__328869_328915,0,null);var v_328917 = cljs.core.nth.call(null,vec__328869_328915,1,null);var G__328870_328918 = k_328916;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__328870_328918))
{var seq__328871_328919 = cljs.core.seq.call(null,v_328917);var chunk__328872_328920 = null;var count__328873_328921 = 0;var i__328874_328922 = 0;while(true){
if((i__328874_328922 < count__328873_328921))
{var c_328923 = cljs.core._nth.call(null,chunk__328872_328920,i__328874_328922);dommy.attrs.add_class_BANG_.call(null,n,c_328923);
{
var G__328924 = seq__328871_328919;
var G__328925 = chunk__328872_328920;
var G__328926 = count__328873_328921;
var G__328927 = (i__328874_328922 + 1);
seq__328871_328919 = G__328924;
chunk__328872_328920 = G__328925;
count__328873_328921 = G__328926;
i__328874_328922 = G__328927;
continue;
}
} else
{var temp__4092__auto___328928__$1 = cljs.core.seq.call(null,seq__328871_328919);if(temp__4092__auto___328928__$1)
{var seq__328871_328929__$1 = temp__4092__auto___328928__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328871_328929__$1))
{var c__14549__auto___328930 = cljs.core.chunk_first.call(null,seq__328871_328929__$1);{
var G__328931 = cljs.core.chunk_rest.call(null,seq__328871_328929__$1);
var G__328932 = c__14549__auto___328930;
var G__328933 = cljs.core.count.call(null,c__14549__auto___328930);
var G__328934 = 0;
seq__328871_328919 = G__328931;
chunk__328872_328920 = G__328932;
count__328873_328921 = G__328933;
i__328874_328922 = G__328934;
continue;
}
} else
{var c_328935 = cljs.core.first.call(null,seq__328871_328929__$1);dommy.attrs.add_class_BANG_.call(null,n,c_328935);
{
var G__328936 = cljs.core.next.call(null,seq__328871_328929__$1);
var G__328937 = null;
var G__328938 = 0;
var G__328939 = 0;
seq__328871_328919 = G__328936;
chunk__328872_328920 = G__328937;
count__328873_328921 = G__328938;
i__328874_328922 = G__328939;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__328870_328918))
{dommy.attrs.add_class_BANG_.call(null,n,v_328917);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_328916,v_328917);
} else
{}
}
}
{
var G__328940 = cljs.core.next.call(null,seq__328859_328909__$1);
var G__328941 = null;
var G__328942 = 0;
var G__328943 = 0;
seq__328859_328875 = G__328940;
chunk__328860_328876 = G__328941;
count__328861_328877 = G__328942;
i__328862_328878 = G__328943;
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
}catch (e328944){if((e328944 instanceof ReferenceError))
{var __328945 = e328944;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328944;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__328947 = data;if(G__328947)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__328947.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__328947.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__328947);
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