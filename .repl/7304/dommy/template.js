// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj20964 = {};return obj20964;
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
{var str_20967 = node_str.substring(base_idx);while(true){
var next_idx_20968 = dommy.template.next_css_index.call(null,str_20967,1);var frag_20969 = (((next_idx_20968 >= 0))?str_20967.substring(0,next_idx_20968):str_20967);var G__20966_20970 = frag_20969.charAt(0);if(cljs.core._EQ_.call(null,"#",G__20966_20970))
{node.setAttribute("id",frag_20969.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__20966_20970))
{dommy.attrs.add_class_BANG_.call(null,node,frag_20969.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_20969.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_20968 >= 0))
{{
var G__20971 = str_20967.substring(next_idx_20968);
str_20967 = G__20971;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__20977 = data;if(G__20977)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__20977.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__20977.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20977);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__20977);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__20978_20982 = cljs.core.seq.call(null,data);var chunk__20979_20983 = null;var count__20980_20984 = 0;var i__20981_20985 = 0;while(true){
if((i__20981_20985 < count__20980_20984))
{var child_20986 = cljs.core._nth.call(null,chunk__20979_20983,i__20981_20985);__GT_document_fragment.call(null,result_frag,child_20986);
{
var G__20987 = seq__20978_20982;
var G__20988 = chunk__20979_20983;
var G__20989 = count__20980_20984;
var G__20990 = (i__20981_20985 + 1);
seq__20978_20982 = G__20987;
chunk__20979_20983 = G__20988;
count__20980_20984 = G__20989;
i__20981_20985 = G__20990;
continue;
}
} else
{var temp__4092__auto___20991 = cljs.core.seq.call(null,seq__20978_20982);if(temp__4092__auto___20991)
{var seq__20978_20992__$1 = temp__4092__auto___20991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20978_20992__$1))
{var c__8552__auto___20993 = cljs.core.chunk_first.call(null,seq__20978_20992__$1);{
var G__20994 = cljs.core.chunk_rest.call(null,seq__20978_20992__$1);
var G__20995 = c__8552__auto___20993;
var G__20996 = cljs.core.count.call(null,c__8552__auto___20993);
var G__20997 = 0;
seq__20978_20982 = G__20994;
chunk__20979_20983 = G__20995;
count__20980_20984 = G__20996;
i__20981_20985 = G__20997;
continue;
}
} else
{var child_20998 = cljs.core.first.call(null,seq__20978_20992__$1);__GT_document_fragment.call(null,result_frag,child_20998);
{
var G__20999 = cljs.core.next.call(null,seq__20978_20992__$1);
var G__21000 = null;
var G__21001 = 0;
var G__21002 = 0;
seq__20978_20982 = G__20999;
chunk__20979_20983 = G__21000;
count__20980_20984 = G__21001;
i__20981_20985 = G__21002;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__21004 = data;if(G__21004)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__21004.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21004.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21004);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21004);
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
dommy.template.compound_element = (function compound_element(p__21005){var vec__21025 = p__21005;var tag_name = cljs.core.nth.call(null,vec__21025,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__21025,1,null);var children = cljs.core.nthnext.call(null,vec__21025,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__21027 = maybe_attrs;if(G__21027)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__21027.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21027.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21027);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21027);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__21028_21044 = cljs.core.seq.call(null,attrs);var chunk__21029_21045 = null;var count__21030_21046 = 0;var i__21031_21047 = 0;while(true){
if((i__21031_21047 < count__21030_21046))
{var vec__21032_21048 = cljs.core._nth.call(null,chunk__21029_21045,i__21031_21047);var k_21049 = cljs.core.nth.call(null,vec__21032_21048,0,null);var v_21050 = cljs.core.nth.call(null,vec__21032_21048,1,null);var G__21033_21051 = k_21049;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21033_21051))
{var seq__21034_21052 = cljs.core.seq.call(null,v_21050);var chunk__21035_21053 = null;var count__21036_21054 = 0;var i__21037_21055 = 0;while(true){
if((i__21037_21055 < count__21036_21054))
{var c_21056 = cljs.core._nth.call(null,chunk__21035_21053,i__21037_21055);dommy.attrs.add_class_BANG_.call(null,n,c_21056);
{
var G__21057 = seq__21034_21052;
var G__21058 = chunk__21035_21053;
var G__21059 = count__21036_21054;
var G__21060 = (i__21037_21055 + 1);
seq__21034_21052 = G__21057;
chunk__21035_21053 = G__21058;
count__21036_21054 = G__21059;
i__21037_21055 = G__21060;
continue;
}
} else
{var temp__4092__auto___21061 = cljs.core.seq.call(null,seq__21034_21052);if(temp__4092__auto___21061)
{var seq__21034_21062__$1 = temp__4092__auto___21061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21034_21062__$1))
{var c__8552__auto___21063 = cljs.core.chunk_first.call(null,seq__21034_21062__$1);{
var G__21064 = cljs.core.chunk_rest.call(null,seq__21034_21062__$1);
var G__21065 = c__8552__auto___21063;
var G__21066 = cljs.core.count.call(null,c__8552__auto___21063);
var G__21067 = 0;
seq__21034_21052 = G__21064;
chunk__21035_21053 = G__21065;
count__21036_21054 = G__21066;
i__21037_21055 = G__21067;
continue;
}
} else
{var c_21068 = cljs.core.first.call(null,seq__21034_21062__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21068);
{
var G__21069 = cljs.core.next.call(null,seq__21034_21062__$1);
var G__21070 = null;
var G__21071 = 0;
var G__21072 = 0;
seq__21034_21052 = G__21069;
chunk__21035_21053 = G__21070;
count__21036_21054 = G__21071;
i__21037_21055 = G__21072;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21033_21051))
{dommy.attrs.add_class_BANG_.call(null,n,v_21050);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21049,v_21050);
} else
{}
}
}
{
var G__21073 = seq__21028_21044;
var G__21074 = chunk__21029_21045;
var G__21075 = count__21030_21046;
var G__21076 = (i__21031_21047 + 1);
seq__21028_21044 = G__21073;
chunk__21029_21045 = G__21074;
count__21030_21046 = G__21075;
i__21031_21047 = G__21076;
continue;
}
} else
{var temp__4092__auto___21077 = cljs.core.seq.call(null,seq__21028_21044);if(temp__4092__auto___21077)
{var seq__21028_21078__$1 = temp__4092__auto___21077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21028_21078__$1))
{var c__8552__auto___21079 = cljs.core.chunk_first.call(null,seq__21028_21078__$1);{
var G__21080 = cljs.core.chunk_rest.call(null,seq__21028_21078__$1);
var G__21081 = c__8552__auto___21079;
var G__21082 = cljs.core.count.call(null,c__8552__auto___21079);
var G__21083 = 0;
seq__21028_21044 = G__21080;
chunk__21029_21045 = G__21081;
count__21030_21046 = G__21082;
i__21031_21047 = G__21083;
continue;
}
} else
{var vec__21038_21084 = cljs.core.first.call(null,seq__21028_21078__$1);var k_21085 = cljs.core.nth.call(null,vec__21038_21084,0,null);var v_21086 = cljs.core.nth.call(null,vec__21038_21084,1,null);var G__21039_21087 = k_21085;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21039_21087))
{var seq__21040_21088 = cljs.core.seq.call(null,v_21086);var chunk__21041_21089 = null;var count__21042_21090 = 0;var i__21043_21091 = 0;while(true){
if((i__21043_21091 < count__21042_21090))
{var c_21092 = cljs.core._nth.call(null,chunk__21041_21089,i__21043_21091);dommy.attrs.add_class_BANG_.call(null,n,c_21092);
{
var G__21093 = seq__21040_21088;
var G__21094 = chunk__21041_21089;
var G__21095 = count__21042_21090;
var G__21096 = (i__21043_21091 + 1);
seq__21040_21088 = G__21093;
chunk__21041_21089 = G__21094;
count__21042_21090 = G__21095;
i__21043_21091 = G__21096;
continue;
}
} else
{var temp__4092__auto___21097__$1 = cljs.core.seq.call(null,seq__21040_21088);if(temp__4092__auto___21097__$1)
{var seq__21040_21098__$1 = temp__4092__auto___21097__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21040_21098__$1))
{var c__8552__auto___21099 = cljs.core.chunk_first.call(null,seq__21040_21098__$1);{
var G__21100 = cljs.core.chunk_rest.call(null,seq__21040_21098__$1);
var G__21101 = c__8552__auto___21099;
var G__21102 = cljs.core.count.call(null,c__8552__auto___21099);
var G__21103 = 0;
seq__21040_21088 = G__21100;
chunk__21041_21089 = G__21101;
count__21042_21090 = G__21102;
i__21043_21091 = G__21103;
continue;
}
} else
{var c_21104 = cljs.core.first.call(null,seq__21040_21098__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21104);
{
var G__21105 = cljs.core.next.call(null,seq__21040_21098__$1);
var G__21106 = null;
var G__21107 = 0;
var G__21108 = 0;
seq__21040_21088 = G__21105;
chunk__21041_21089 = G__21106;
count__21042_21090 = G__21107;
i__21043_21091 = G__21108;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21039_21087))
{dommy.attrs.add_class_BANG_.call(null,n,v_21086);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21085,v_21086);
} else
{}
}
}
{
var G__21109 = cljs.core.next.call(null,seq__21028_21078__$1);
var G__21110 = null;
var G__21111 = 0;
var G__21112 = 0;
seq__21028_21044 = G__21109;
chunk__21029_21045 = G__21110;
count__21030_21046 = G__21111;
i__21031_21047 = G__21112;
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
}catch (e21113){if((e21113 instanceof ReferenceError))
{var __21114 = e21113;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21113;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__21116 = data;if(G__21116)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__21116.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21116.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21116);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21116);
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
