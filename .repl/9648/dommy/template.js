// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = cljs.core.PersistentHashSet.fromArray(["svg",null,"line",null], true);
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__7430__auto__ = this$;if(and__7430__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7430__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8035__auto__ = (((this$ == null))?null:this$);return (function (){var or__7439__auto__ = (dommy.template._elem[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (dommy.template._elem["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
{var str_19893 = node_str.substring(base_idx);while(true){
var next_idx_19894 = dommy.template.next_css_index.call(null,str_19893,1);var frag_19895 = (((next_idx_19894 >= 0))?str_19893.substring(0,next_idx_19894):str_19893);var G__19892_19896 = frag_19895.charAt(0);if(cljs.core._EQ_.call(null,"#",G__19892_19896))
{node.setAttribute("id",frag_19895.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__19892_19896))
{dommy.attrs.add_class_BANG_.call(null,node,frag_19895.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_19895.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_19894 >= 0))
{{
var G__19897 = str_19893.substring(next_idx_19894);
str_19893 = G__19897;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__19903 = data;if(G__19903)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__19903.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19903.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19903);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19903);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__19904_19908 = cljs.core.seq.call(null,data);var chunk__19905_19909 = null;var count__19906_19910 = 0;var i__19907_19911 = 0;while(true){
if((i__19907_19911 < count__19906_19910))
{var child_19912 = cljs.core._nth.call(null,chunk__19905_19909,i__19907_19911);__GT_document_fragment.call(null,result_frag,child_19912);
{
var G__19913 = seq__19904_19908;
var G__19914 = chunk__19905_19909;
var G__19915 = count__19906_19910;
var G__19916 = (i__19907_19911 + 1);
seq__19904_19908 = G__19913;
chunk__19905_19909 = G__19914;
count__19906_19910 = G__19915;
i__19907_19911 = G__19916;
continue;
}
} else
{var temp__4092__auto___19917 = cljs.core.seq.call(null,seq__19904_19908);if(temp__4092__auto___19917)
{var seq__19904_19918__$1 = temp__4092__auto___19917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19904_19918__$1))
{var c__8156__auto___19919 = cljs.core.chunk_first.call(null,seq__19904_19918__$1);{
var G__19920 = cljs.core.chunk_rest.call(null,seq__19904_19918__$1);
var G__19921 = c__8156__auto___19919;
var G__19922 = cljs.core.count.call(null,c__8156__auto___19919);
var G__19923 = 0;
seq__19904_19908 = G__19920;
chunk__19905_19909 = G__19921;
count__19906_19910 = G__19922;
i__19907_19911 = G__19923;
continue;
}
} else
{var child_19924 = cljs.core.first.call(null,seq__19904_19918__$1);__GT_document_fragment.call(null,result_frag,child_19924);
{
var G__19925 = cljs.core.next.call(null,seq__19904_19918__$1);
var G__19926 = null;
var G__19927 = 0;
var G__19928 = 0;
seq__19904_19908 = G__19925;
chunk__19905_19909 = G__19926;
count__19906_19910 = G__19927;
i__19907_19911 = G__19928;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__19930 = data;if(G__19930)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__19930.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19930.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19930);
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
dommy.template.compound_element = (function compound_element(p__19931){var vec__19951 = p__19931;var tag_name = cljs.core.nth.call(null,vec__19951,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__19951,1,null);var children = cljs.core.nthnext.call(null,vec__19951,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__19953 = maybe_attrs;if(G__19953)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__19953.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__19953.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19953);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__19953);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__19954_19970 = cljs.core.seq.call(null,attrs);var chunk__19955_19971 = null;var count__19956_19972 = 0;var i__19957_19973 = 0;while(true){
if((i__19957_19973 < count__19956_19972))
{var vec__19958_19974 = cljs.core._nth.call(null,chunk__19955_19971,i__19957_19973);var k_19975 = cljs.core.nth.call(null,vec__19958_19974,0,null);var v_19976 = cljs.core.nth.call(null,vec__19958_19974,1,null);var G__19959_19977 = k_19975;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__19959_19977))
{var seq__19960_19978 = cljs.core.seq.call(null,v_19976);var chunk__19961_19979 = null;var count__19962_19980 = 0;var i__19963_19981 = 0;while(true){
if((i__19963_19981 < count__19962_19980))
{var c_19982 = cljs.core._nth.call(null,chunk__19961_19979,i__19963_19981);dommy.attrs.add_class_BANG_.call(null,n,c_19982);
{
var G__19983 = seq__19960_19978;
var G__19984 = chunk__19961_19979;
var G__19985 = count__19962_19980;
var G__19986 = (i__19963_19981 + 1);
seq__19960_19978 = G__19983;
chunk__19961_19979 = G__19984;
count__19962_19980 = G__19985;
i__19963_19981 = G__19986;
continue;
}
} else
{var temp__4092__auto___19987 = cljs.core.seq.call(null,seq__19960_19978);if(temp__4092__auto___19987)
{var seq__19960_19988__$1 = temp__4092__auto___19987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19960_19988__$1))
{var c__8156__auto___19989 = cljs.core.chunk_first.call(null,seq__19960_19988__$1);{
var G__19990 = cljs.core.chunk_rest.call(null,seq__19960_19988__$1);
var G__19991 = c__8156__auto___19989;
var G__19992 = cljs.core.count.call(null,c__8156__auto___19989);
var G__19993 = 0;
seq__19960_19978 = G__19990;
chunk__19961_19979 = G__19991;
count__19962_19980 = G__19992;
i__19963_19981 = G__19993;
continue;
}
} else
{var c_19994 = cljs.core.first.call(null,seq__19960_19988__$1);dommy.attrs.add_class_BANG_.call(null,n,c_19994);
{
var G__19995 = cljs.core.next.call(null,seq__19960_19988__$1);
var G__19996 = null;
var G__19997 = 0;
var G__19998 = 0;
seq__19960_19978 = G__19995;
chunk__19961_19979 = G__19996;
count__19962_19980 = G__19997;
i__19963_19981 = G__19998;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__19959_19977))
{dommy.attrs.add_class_BANG_.call(null,n,v_19976);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_19975,v_19976);
} else
{}
}
}
{
var G__19999 = seq__19954_19970;
var G__20000 = chunk__19955_19971;
var G__20001 = count__19956_19972;
var G__20002 = (i__19957_19973 + 1);
seq__19954_19970 = G__19999;
chunk__19955_19971 = G__20000;
count__19956_19972 = G__20001;
i__19957_19973 = G__20002;
continue;
}
} else
{var temp__4092__auto___20003 = cljs.core.seq.call(null,seq__19954_19970);if(temp__4092__auto___20003)
{var seq__19954_20004__$1 = temp__4092__auto___20003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19954_20004__$1))
{var c__8156__auto___20005 = cljs.core.chunk_first.call(null,seq__19954_20004__$1);{
var G__20006 = cljs.core.chunk_rest.call(null,seq__19954_20004__$1);
var G__20007 = c__8156__auto___20005;
var G__20008 = cljs.core.count.call(null,c__8156__auto___20005);
var G__20009 = 0;
seq__19954_19970 = G__20006;
chunk__19955_19971 = G__20007;
count__19956_19972 = G__20008;
i__19957_19973 = G__20009;
continue;
}
} else
{var vec__19964_20010 = cljs.core.first.call(null,seq__19954_20004__$1);var k_20011 = cljs.core.nth.call(null,vec__19964_20010,0,null);var v_20012 = cljs.core.nth.call(null,vec__19964_20010,1,null);var G__19965_20013 = k_20011;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__19965_20013))
{var seq__19966_20014 = cljs.core.seq.call(null,v_20012);var chunk__19967_20015 = null;var count__19968_20016 = 0;var i__19969_20017 = 0;while(true){
if((i__19969_20017 < count__19968_20016))
{var c_20018 = cljs.core._nth.call(null,chunk__19967_20015,i__19969_20017);dommy.attrs.add_class_BANG_.call(null,n,c_20018);
{
var G__20019 = seq__19966_20014;
var G__20020 = chunk__19967_20015;
var G__20021 = count__19968_20016;
var G__20022 = (i__19969_20017 + 1);
seq__19966_20014 = G__20019;
chunk__19967_20015 = G__20020;
count__19968_20016 = G__20021;
i__19969_20017 = G__20022;
continue;
}
} else
{var temp__4092__auto___20023__$1 = cljs.core.seq.call(null,seq__19966_20014);if(temp__4092__auto___20023__$1)
{var seq__19966_20024__$1 = temp__4092__auto___20023__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19966_20024__$1))
{var c__8156__auto___20025 = cljs.core.chunk_first.call(null,seq__19966_20024__$1);{
var G__20026 = cljs.core.chunk_rest.call(null,seq__19966_20024__$1);
var G__20027 = c__8156__auto___20025;
var G__20028 = cljs.core.count.call(null,c__8156__auto___20025);
var G__20029 = 0;
seq__19966_20014 = G__20026;
chunk__19967_20015 = G__20027;
count__19968_20016 = G__20028;
i__19969_20017 = G__20029;
continue;
}
} else
{var c_20030 = cljs.core.first.call(null,seq__19966_20024__$1);dommy.attrs.add_class_BANG_.call(null,n,c_20030);
{
var G__20031 = cljs.core.next.call(null,seq__19966_20024__$1);
var G__20032 = null;
var G__20033 = 0;
var G__20034 = 0;
seq__19966_20014 = G__20031;
chunk__19967_20015 = G__20032;
count__19968_20016 = G__20033;
i__19969_20017 = G__20034;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__19965_20013))
{dommy.attrs.add_class_BANG_.call(null,n,v_20012);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_20011,v_20012);
} else
{}
}
}
{
var G__20035 = cljs.core.next.call(null,seq__19954_20004__$1);
var G__20036 = null;
var G__20037 = 0;
var G__20038 = 0;
seq__19954_19970 = G__20035;
chunk__19955_19971 = G__20036;
count__19956_19972 = G__20037;
i__19957_19973 = G__20038;
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
}catch (e20039){if((e20039 instanceof ReferenceError))
{var __20040 = e20039;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20039;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__20042 = data;if(G__20042)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__20042.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20042.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20042);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20042);
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
