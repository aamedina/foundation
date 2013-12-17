// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj376972 = {};return obj376972;
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
{var str_376975 = node_str.substring(base_idx);while(true){
var next_idx_376976 = dommy.template.next_css_index.call(null,str_376975,1);var frag_376977 = (((next_idx_376976 >= 0))?str_376975.substring(0,next_idx_376976):str_376975);var G__376974_376978 = frag_376977.charAt(0);if(cljs.core._EQ_.call(null,"#",G__376974_376978))
{node.setAttribute("id",frag_376977.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__376974_376978))
{dommy.attrs.add_class_BANG_.call(null,node,frag_376977.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_376977.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_376976 >= 0))
{{
var G__376979 = str_376975.substring(next_idx_376976);
str_376975 = G__376979;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__376985 = data;if(G__376985)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__376985.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__376985.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__376985);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__376985);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__376986_376990 = cljs.core.seq.call(null,data);var chunk__376987_376991 = null;var count__376988_376992 = 0;var i__376989_376993 = 0;while(true){
if((i__376989_376993 < count__376988_376992))
{var child_376994 = cljs.core._nth.call(null,chunk__376987_376991,i__376989_376993);__GT_document_fragment.call(null,result_frag,child_376994);
{
var G__376995 = seq__376986_376990;
var G__376996 = chunk__376987_376991;
var G__376997 = count__376988_376992;
var G__376998 = (i__376989_376993 + 1);
seq__376986_376990 = G__376995;
chunk__376987_376991 = G__376996;
count__376988_376992 = G__376997;
i__376989_376993 = G__376998;
continue;
}
} else
{var temp__4092__auto___376999 = cljs.core.seq.call(null,seq__376986_376990);if(temp__4092__auto___376999)
{var seq__376986_377000__$1 = temp__4092__auto___376999;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376986_377000__$1))
{var c__14708__auto___377001 = cljs.core.chunk_first.call(null,seq__376986_377000__$1);{
var G__377002 = cljs.core.chunk_rest.call(null,seq__376986_377000__$1);
var G__377003 = c__14708__auto___377001;
var G__377004 = cljs.core.count.call(null,c__14708__auto___377001);
var G__377005 = 0;
seq__376986_376990 = G__377002;
chunk__376987_376991 = G__377003;
count__376988_376992 = G__377004;
i__376989_376993 = G__377005;
continue;
}
} else
{var child_377006 = cljs.core.first.call(null,seq__376986_377000__$1);__GT_document_fragment.call(null,result_frag,child_377006);
{
var G__377007 = cljs.core.next.call(null,seq__376986_377000__$1);
var G__377008 = null;
var G__377009 = 0;
var G__377010 = 0;
seq__376986_376990 = G__377007;
chunk__376987_376991 = G__377008;
count__376988_376992 = G__377009;
i__376989_376993 = G__377010;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__377012 = data;if(G__377012)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__377012.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__377012.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377012);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377012);
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
dommy.template.compound_element = (function compound_element(p__377013){var vec__377033 = p__377013;var tag_name = cljs.core.nth.call(null,vec__377033,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__377033,1,null);var children = cljs.core.nthnext.call(null,vec__377033,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__377035 = maybe_attrs;if(G__377035)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__377035.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__377035.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377035);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377035);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__377036_377052 = cljs.core.seq.call(null,attrs);var chunk__377037_377053 = null;var count__377038_377054 = 0;var i__377039_377055 = 0;while(true){
if((i__377039_377055 < count__377038_377054))
{var vec__377040_377056 = cljs.core._nth.call(null,chunk__377037_377053,i__377039_377055);var k_377057 = cljs.core.nth.call(null,vec__377040_377056,0,null);var v_377058 = cljs.core.nth.call(null,vec__377040_377056,1,null);var G__377041_377059 = k_377057;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__377041_377059))
{var seq__377042_377060 = cljs.core.seq.call(null,v_377058);var chunk__377043_377061 = null;var count__377044_377062 = 0;var i__377045_377063 = 0;while(true){
if((i__377045_377063 < count__377044_377062))
{var c_377064 = cljs.core._nth.call(null,chunk__377043_377061,i__377045_377063);dommy.attrs.add_class_BANG_.call(null,n,c_377064);
{
var G__377065 = seq__377042_377060;
var G__377066 = chunk__377043_377061;
var G__377067 = count__377044_377062;
var G__377068 = (i__377045_377063 + 1);
seq__377042_377060 = G__377065;
chunk__377043_377061 = G__377066;
count__377044_377062 = G__377067;
i__377045_377063 = G__377068;
continue;
}
} else
{var temp__4092__auto___377069 = cljs.core.seq.call(null,seq__377042_377060);if(temp__4092__auto___377069)
{var seq__377042_377070__$1 = temp__4092__auto___377069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377042_377070__$1))
{var c__14708__auto___377071 = cljs.core.chunk_first.call(null,seq__377042_377070__$1);{
var G__377072 = cljs.core.chunk_rest.call(null,seq__377042_377070__$1);
var G__377073 = c__14708__auto___377071;
var G__377074 = cljs.core.count.call(null,c__14708__auto___377071);
var G__377075 = 0;
seq__377042_377060 = G__377072;
chunk__377043_377061 = G__377073;
count__377044_377062 = G__377074;
i__377045_377063 = G__377075;
continue;
}
} else
{var c_377076 = cljs.core.first.call(null,seq__377042_377070__$1);dommy.attrs.add_class_BANG_.call(null,n,c_377076);
{
var G__377077 = cljs.core.next.call(null,seq__377042_377070__$1);
var G__377078 = null;
var G__377079 = 0;
var G__377080 = 0;
seq__377042_377060 = G__377077;
chunk__377043_377061 = G__377078;
count__377044_377062 = G__377079;
i__377045_377063 = G__377080;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__377041_377059))
{dommy.attrs.add_class_BANG_.call(null,n,v_377058);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_377057,v_377058);
} else
{}
}
}
{
var G__377081 = seq__377036_377052;
var G__377082 = chunk__377037_377053;
var G__377083 = count__377038_377054;
var G__377084 = (i__377039_377055 + 1);
seq__377036_377052 = G__377081;
chunk__377037_377053 = G__377082;
count__377038_377054 = G__377083;
i__377039_377055 = G__377084;
continue;
}
} else
{var temp__4092__auto___377085 = cljs.core.seq.call(null,seq__377036_377052);if(temp__4092__auto___377085)
{var seq__377036_377086__$1 = temp__4092__auto___377085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377036_377086__$1))
{var c__14708__auto___377087 = cljs.core.chunk_first.call(null,seq__377036_377086__$1);{
var G__377088 = cljs.core.chunk_rest.call(null,seq__377036_377086__$1);
var G__377089 = c__14708__auto___377087;
var G__377090 = cljs.core.count.call(null,c__14708__auto___377087);
var G__377091 = 0;
seq__377036_377052 = G__377088;
chunk__377037_377053 = G__377089;
count__377038_377054 = G__377090;
i__377039_377055 = G__377091;
continue;
}
} else
{var vec__377046_377092 = cljs.core.first.call(null,seq__377036_377086__$1);var k_377093 = cljs.core.nth.call(null,vec__377046_377092,0,null);var v_377094 = cljs.core.nth.call(null,vec__377046_377092,1,null);var G__377047_377095 = k_377093;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__377047_377095))
{var seq__377048_377096 = cljs.core.seq.call(null,v_377094);var chunk__377049_377097 = null;var count__377050_377098 = 0;var i__377051_377099 = 0;while(true){
if((i__377051_377099 < count__377050_377098))
{var c_377100 = cljs.core._nth.call(null,chunk__377049_377097,i__377051_377099);dommy.attrs.add_class_BANG_.call(null,n,c_377100);
{
var G__377101 = seq__377048_377096;
var G__377102 = chunk__377049_377097;
var G__377103 = count__377050_377098;
var G__377104 = (i__377051_377099 + 1);
seq__377048_377096 = G__377101;
chunk__377049_377097 = G__377102;
count__377050_377098 = G__377103;
i__377051_377099 = G__377104;
continue;
}
} else
{var temp__4092__auto___377105__$1 = cljs.core.seq.call(null,seq__377048_377096);if(temp__4092__auto___377105__$1)
{var seq__377048_377106__$1 = temp__4092__auto___377105__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__377048_377106__$1))
{var c__14708__auto___377107 = cljs.core.chunk_first.call(null,seq__377048_377106__$1);{
var G__377108 = cljs.core.chunk_rest.call(null,seq__377048_377106__$1);
var G__377109 = c__14708__auto___377107;
var G__377110 = cljs.core.count.call(null,c__14708__auto___377107);
var G__377111 = 0;
seq__377048_377096 = G__377108;
chunk__377049_377097 = G__377109;
count__377050_377098 = G__377110;
i__377051_377099 = G__377111;
continue;
}
} else
{var c_377112 = cljs.core.first.call(null,seq__377048_377106__$1);dommy.attrs.add_class_BANG_.call(null,n,c_377112);
{
var G__377113 = cljs.core.next.call(null,seq__377048_377106__$1);
var G__377114 = null;
var G__377115 = 0;
var G__377116 = 0;
seq__377048_377096 = G__377113;
chunk__377049_377097 = G__377114;
count__377050_377098 = G__377115;
i__377051_377099 = G__377116;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__377047_377095))
{dommy.attrs.add_class_BANG_.call(null,n,v_377094);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_377093,v_377094);
} else
{}
}
}
{
var G__377117 = cljs.core.next.call(null,seq__377036_377086__$1);
var G__377118 = null;
var G__377119 = 0;
var G__377120 = 0;
seq__377036_377052 = G__377117;
chunk__377037_377053 = G__377118;
count__377038_377054 = G__377119;
i__377039_377055 = G__377120;
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
}catch (e377121){if((e377121 instanceof ReferenceError))
{var __377122 = e377121;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e377121;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__377124 = data;if(G__377124)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__377124.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__377124.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377124);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__377124);
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