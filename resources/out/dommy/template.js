// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj367864 = {};return obj367864;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13967__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (dommy.template._elem[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (dommy.template._elem["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
{var str_367867 = node_str.substring(base_idx);while(true){
var next_idx_367868 = dommy.template.next_css_index.call(null,str_367867,1);var frag_367869 = (((next_idx_367868 >= 0))?str_367867.substring(0,next_idx_367868):str_367867);var G__367866_367870 = frag_367869.charAt(0);if(cljs.core._EQ_.call(null,"#",G__367866_367870))
{node.setAttribute("id",frag_367869.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__367866_367870))
{dommy.attrs.add_class_BANG_.call(null,node,frag_367869.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_367869.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_367868 >= 0))
{{
var G__367871 = str_367867.substring(next_idx_367868);
str_367867 = G__367871;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__367877 = data;if(G__367877)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__367877.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__367877.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367877);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367877);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__367878_367882 = cljs.core.seq.call(null,data);var chunk__367879_367883 = null;var count__367880_367884 = 0;var i__367881_367885 = 0;while(true){
if((i__367881_367885 < count__367880_367884))
{var child_367886 = cljs.core._nth.call(null,chunk__367879_367883,i__367881_367885);__GT_document_fragment.call(null,result_frag,child_367886);
{
var G__367887 = seq__367878_367882;
var G__367888 = chunk__367879_367883;
var G__367889 = count__367880_367884;
var G__367890 = (i__367881_367885 + 1);
seq__367878_367882 = G__367887;
chunk__367879_367883 = G__367888;
count__367880_367884 = G__367889;
i__367881_367885 = G__367890;
continue;
}
} else
{var temp__4092__auto___367891 = cljs.core.seq.call(null,seq__367878_367882);if(temp__4092__auto___367891)
{var seq__367878_367892__$1 = temp__4092__auto___367891;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367878_367892__$1))
{var c__14708__auto___367893 = cljs.core.chunk_first.call(null,seq__367878_367892__$1);{
var G__367894 = cljs.core.chunk_rest.call(null,seq__367878_367892__$1);
var G__367895 = c__14708__auto___367893;
var G__367896 = cljs.core.count.call(null,c__14708__auto___367893);
var G__367897 = 0;
seq__367878_367882 = G__367894;
chunk__367879_367883 = G__367895;
count__367880_367884 = G__367896;
i__367881_367885 = G__367897;
continue;
}
} else
{var child_367898 = cljs.core.first.call(null,seq__367878_367892__$1);__GT_document_fragment.call(null,result_frag,child_367898);
{
var G__367899 = cljs.core.next.call(null,seq__367878_367892__$1);
var G__367900 = null;
var G__367901 = 0;
var G__367902 = 0;
seq__367878_367882 = G__367899;
chunk__367879_367883 = G__367900;
count__367880_367884 = G__367901;
i__367881_367885 = G__367902;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__367904 = data;if(G__367904)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__367904.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__367904.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367904);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367904);
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
dommy.template.compound_element = (function compound_element(p__367905){var vec__367925 = p__367905;var tag_name = cljs.core.nth.call(null,vec__367925,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__367925,1,null);var children = cljs.core.nthnext.call(null,vec__367925,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__367927 = maybe_attrs;if(G__367927)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__367927.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__367927.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__367927);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__367928_367944 = cljs.core.seq.call(null,attrs);var chunk__367929_367945 = null;var count__367930_367946 = 0;var i__367931_367947 = 0;while(true){
if((i__367931_367947 < count__367930_367946))
{var vec__367932_367948 = cljs.core._nth.call(null,chunk__367929_367945,i__367931_367947);var k_367949 = cljs.core.nth.call(null,vec__367932_367948,0,null);var v_367950 = cljs.core.nth.call(null,vec__367932_367948,1,null);var G__367933_367951 = k_367949;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__367933_367951))
{var seq__367934_367952 = cljs.core.seq.call(null,v_367950);var chunk__367935_367953 = null;var count__367936_367954 = 0;var i__367937_367955 = 0;while(true){
if((i__367937_367955 < count__367936_367954))
{var c_367956 = cljs.core._nth.call(null,chunk__367935_367953,i__367937_367955);dommy.attrs.add_class_BANG_.call(null,n,c_367956);
{
var G__367957 = seq__367934_367952;
var G__367958 = chunk__367935_367953;
var G__367959 = count__367936_367954;
var G__367960 = (i__367937_367955 + 1);
seq__367934_367952 = G__367957;
chunk__367935_367953 = G__367958;
count__367936_367954 = G__367959;
i__367937_367955 = G__367960;
continue;
}
} else
{var temp__4092__auto___367961 = cljs.core.seq.call(null,seq__367934_367952);if(temp__4092__auto___367961)
{var seq__367934_367962__$1 = temp__4092__auto___367961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367934_367962__$1))
{var c__14708__auto___367963 = cljs.core.chunk_first.call(null,seq__367934_367962__$1);{
var G__367964 = cljs.core.chunk_rest.call(null,seq__367934_367962__$1);
var G__367965 = c__14708__auto___367963;
var G__367966 = cljs.core.count.call(null,c__14708__auto___367963);
var G__367967 = 0;
seq__367934_367952 = G__367964;
chunk__367935_367953 = G__367965;
count__367936_367954 = G__367966;
i__367937_367955 = G__367967;
continue;
}
} else
{var c_367968 = cljs.core.first.call(null,seq__367934_367962__$1);dommy.attrs.add_class_BANG_.call(null,n,c_367968);
{
var G__367969 = cljs.core.next.call(null,seq__367934_367962__$1);
var G__367970 = null;
var G__367971 = 0;
var G__367972 = 0;
seq__367934_367952 = G__367969;
chunk__367935_367953 = G__367970;
count__367936_367954 = G__367971;
i__367937_367955 = G__367972;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__367933_367951))
{dommy.attrs.add_class_BANG_.call(null,n,v_367950);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_367949,v_367950);
} else
{}
}
}
{
var G__367973 = seq__367928_367944;
var G__367974 = chunk__367929_367945;
var G__367975 = count__367930_367946;
var G__367976 = (i__367931_367947 + 1);
seq__367928_367944 = G__367973;
chunk__367929_367945 = G__367974;
count__367930_367946 = G__367975;
i__367931_367947 = G__367976;
continue;
}
} else
{var temp__4092__auto___367977 = cljs.core.seq.call(null,seq__367928_367944);if(temp__4092__auto___367977)
{var seq__367928_367978__$1 = temp__4092__auto___367977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367928_367978__$1))
{var c__14708__auto___367979 = cljs.core.chunk_first.call(null,seq__367928_367978__$1);{
var G__367980 = cljs.core.chunk_rest.call(null,seq__367928_367978__$1);
var G__367981 = c__14708__auto___367979;
var G__367982 = cljs.core.count.call(null,c__14708__auto___367979);
var G__367983 = 0;
seq__367928_367944 = G__367980;
chunk__367929_367945 = G__367981;
count__367930_367946 = G__367982;
i__367931_367947 = G__367983;
continue;
}
} else
{var vec__367938_367984 = cljs.core.first.call(null,seq__367928_367978__$1);var k_367985 = cljs.core.nth.call(null,vec__367938_367984,0,null);var v_367986 = cljs.core.nth.call(null,vec__367938_367984,1,null);var G__367939_367987 = k_367985;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__367939_367987))
{var seq__367940_367988 = cljs.core.seq.call(null,v_367986);var chunk__367941_367989 = null;var count__367942_367990 = 0;var i__367943_367991 = 0;while(true){
if((i__367943_367991 < count__367942_367990))
{var c_367992 = cljs.core._nth.call(null,chunk__367941_367989,i__367943_367991);dommy.attrs.add_class_BANG_.call(null,n,c_367992);
{
var G__367993 = seq__367940_367988;
var G__367994 = chunk__367941_367989;
var G__367995 = count__367942_367990;
var G__367996 = (i__367943_367991 + 1);
seq__367940_367988 = G__367993;
chunk__367941_367989 = G__367994;
count__367942_367990 = G__367995;
i__367943_367991 = G__367996;
continue;
}
} else
{var temp__4092__auto___367997__$1 = cljs.core.seq.call(null,seq__367940_367988);if(temp__4092__auto___367997__$1)
{var seq__367940_367998__$1 = temp__4092__auto___367997__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__367940_367998__$1))
{var c__14708__auto___367999 = cljs.core.chunk_first.call(null,seq__367940_367998__$1);{
var G__368000 = cljs.core.chunk_rest.call(null,seq__367940_367998__$1);
var G__368001 = c__14708__auto___367999;
var G__368002 = cljs.core.count.call(null,c__14708__auto___367999);
var G__368003 = 0;
seq__367940_367988 = G__368000;
chunk__367941_367989 = G__368001;
count__367942_367990 = G__368002;
i__367943_367991 = G__368003;
continue;
}
} else
{var c_368004 = cljs.core.first.call(null,seq__367940_367998__$1);dommy.attrs.add_class_BANG_.call(null,n,c_368004);
{
var G__368005 = cljs.core.next.call(null,seq__367940_367998__$1);
var G__368006 = null;
var G__368007 = 0;
var G__368008 = 0;
seq__367940_367988 = G__368005;
chunk__367941_367989 = G__368006;
count__367942_367990 = G__368007;
i__367943_367991 = G__368008;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__367939_367987))
{dommy.attrs.add_class_BANG_.call(null,n,v_367986);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_367985,v_367986);
} else
{}
}
}
{
var G__368009 = cljs.core.next.call(null,seq__367928_367978__$1);
var G__368010 = null;
var G__368011 = 0;
var G__368012 = 0;
seq__367928_367944 = G__368009;
chunk__367929_367945 = G__368010;
count__367930_367946 = G__368011;
i__367931_367947 = G__368012;
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
}catch (e368013){if((e368013 instanceof ReferenceError))
{var __368014 = e368013;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e368013;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__368016 = data;if(G__368016)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__368016.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__368016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__368016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__368016);
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