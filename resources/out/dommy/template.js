// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj50003 = {};return obj50003;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__15171__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (dommy.template._elem[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (dommy.template._elem["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
{var str_50006 = node_str.substring(base_idx);while(true){
var next_idx_50007 = dommy.template.next_css_index.call(null,str_50006,1);var frag_50008 = (((next_idx_50007 >= 0))?str_50006.substring(0,next_idx_50007):str_50006);var G__50005_50009 = frag_50008.charAt(0);if(cljs.core._EQ_.call(null,"#",G__50005_50009))
{node.setAttribute("id",frag_50008.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__50005_50009))
{dommy.attrs.add_class_BANG_.call(null,node,frag_50008.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_50008.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_50007 >= 0))
{{
var G__50010 = str_50006.substring(next_idx_50007);
str_50006 = G__50010;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__50016 = data;if(G__50016)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__50016.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__50016.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50016);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50016);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__50017_50021 = cljs.core.seq.call(null,data);var chunk__50018_50022 = null;var count__50019_50023 = 0;var i__50020_50024 = 0;while(true){
if((i__50020_50024 < count__50019_50023))
{var child_50025 = cljs.core._nth.call(null,chunk__50018_50022,i__50020_50024);__GT_document_fragment.call(null,result_frag,child_50025);
{
var G__50026 = seq__50017_50021;
var G__50027 = chunk__50018_50022;
var G__50028 = count__50019_50023;
var G__50029 = (i__50020_50024 + 1);
seq__50017_50021 = G__50026;
chunk__50018_50022 = G__50027;
count__50019_50023 = G__50028;
i__50020_50024 = G__50029;
continue;
}
} else
{var temp__4098__auto___50030 = cljs.core.seq.call(null,seq__50017_50021);if(temp__4098__auto___50030)
{var seq__50017_50031__$1 = temp__4098__auto___50030;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50017_50031__$1))
{var c__15907__auto___50032 = cljs.core.chunk_first.call(null,seq__50017_50031__$1);{
var G__50033 = cljs.core.chunk_rest.call(null,seq__50017_50031__$1);
var G__50034 = c__15907__auto___50032;
var G__50035 = cljs.core.count.call(null,c__15907__auto___50032);
var G__50036 = 0;
seq__50017_50021 = G__50033;
chunk__50018_50022 = G__50034;
count__50019_50023 = G__50035;
i__50020_50024 = G__50036;
continue;
}
} else
{var child_50037 = cljs.core.first.call(null,seq__50017_50031__$1);__GT_document_fragment.call(null,result_frag,child_50037);
{
var G__50038 = cljs.core.next.call(null,seq__50017_50031__$1);
var G__50039 = null;
var G__50040 = 0;
var G__50041 = 0;
seq__50017_50021 = G__50038;
chunk__50018_50022 = G__50039;
count__50019_50023 = G__50040;
i__50020_50024 = G__50041;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__50043 = data;if(G__50043)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__50043.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__50043.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50043);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50043);
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
dommy.template.compound_element = (function compound_element(p__50044){var vec__50064 = p__50044;var tag_name = cljs.core.nth.call(null,vec__50064,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__50064,1,null);var children = cljs.core.nthnext.call(null,vec__50064,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__50066 = maybe_attrs;if(G__50066)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__50066.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__50066.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50066);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50066);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__50067_50083 = cljs.core.seq.call(null,attrs);var chunk__50068_50084 = null;var count__50069_50085 = 0;var i__50070_50086 = 0;while(true){
if((i__50070_50086 < count__50069_50085))
{var vec__50071_50087 = cljs.core._nth.call(null,chunk__50068_50084,i__50070_50086);var k_50088 = cljs.core.nth.call(null,vec__50071_50087,0,null);var v_50089 = cljs.core.nth.call(null,vec__50071_50087,1,null);var G__50072_50090 = k_50088;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__50072_50090))
{var seq__50073_50091 = cljs.core.seq.call(null,v_50089);var chunk__50074_50092 = null;var count__50075_50093 = 0;var i__50076_50094 = 0;while(true){
if((i__50076_50094 < count__50075_50093))
{var c_50095 = cljs.core._nth.call(null,chunk__50074_50092,i__50076_50094);dommy.attrs.add_class_BANG_.call(null,n,c_50095);
{
var G__50096 = seq__50073_50091;
var G__50097 = chunk__50074_50092;
var G__50098 = count__50075_50093;
var G__50099 = (i__50076_50094 + 1);
seq__50073_50091 = G__50096;
chunk__50074_50092 = G__50097;
count__50075_50093 = G__50098;
i__50076_50094 = G__50099;
continue;
}
} else
{var temp__4098__auto___50100 = cljs.core.seq.call(null,seq__50073_50091);if(temp__4098__auto___50100)
{var seq__50073_50101__$1 = temp__4098__auto___50100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50073_50101__$1))
{var c__15907__auto___50102 = cljs.core.chunk_first.call(null,seq__50073_50101__$1);{
var G__50103 = cljs.core.chunk_rest.call(null,seq__50073_50101__$1);
var G__50104 = c__15907__auto___50102;
var G__50105 = cljs.core.count.call(null,c__15907__auto___50102);
var G__50106 = 0;
seq__50073_50091 = G__50103;
chunk__50074_50092 = G__50104;
count__50075_50093 = G__50105;
i__50076_50094 = G__50106;
continue;
}
} else
{var c_50107 = cljs.core.first.call(null,seq__50073_50101__$1);dommy.attrs.add_class_BANG_.call(null,n,c_50107);
{
var G__50108 = cljs.core.next.call(null,seq__50073_50101__$1);
var G__50109 = null;
var G__50110 = 0;
var G__50111 = 0;
seq__50073_50091 = G__50108;
chunk__50074_50092 = G__50109;
count__50075_50093 = G__50110;
i__50076_50094 = G__50111;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__50072_50090))
{dommy.attrs.add_class_BANG_.call(null,n,v_50089);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_50088,v_50089);
} else
{}
}
}
{
var G__50112 = seq__50067_50083;
var G__50113 = chunk__50068_50084;
var G__50114 = count__50069_50085;
var G__50115 = (i__50070_50086 + 1);
seq__50067_50083 = G__50112;
chunk__50068_50084 = G__50113;
count__50069_50085 = G__50114;
i__50070_50086 = G__50115;
continue;
}
} else
{var temp__4098__auto___50116 = cljs.core.seq.call(null,seq__50067_50083);if(temp__4098__auto___50116)
{var seq__50067_50117__$1 = temp__4098__auto___50116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50067_50117__$1))
{var c__15907__auto___50118 = cljs.core.chunk_first.call(null,seq__50067_50117__$1);{
var G__50119 = cljs.core.chunk_rest.call(null,seq__50067_50117__$1);
var G__50120 = c__15907__auto___50118;
var G__50121 = cljs.core.count.call(null,c__15907__auto___50118);
var G__50122 = 0;
seq__50067_50083 = G__50119;
chunk__50068_50084 = G__50120;
count__50069_50085 = G__50121;
i__50070_50086 = G__50122;
continue;
}
} else
{var vec__50077_50123 = cljs.core.first.call(null,seq__50067_50117__$1);var k_50124 = cljs.core.nth.call(null,vec__50077_50123,0,null);var v_50125 = cljs.core.nth.call(null,vec__50077_50123,1,null);var G__50078_50126 = k_50124;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__50078_50126))
{var seq__50079_50127 = cljs.core.seq.call(null,v_50125);var chunk__50080_50128 = null;var count__50081_50129 = 0;var i__50082_50130 = 0;while(true){
if((i__50082_50130 < count__50081_50129))
{var c_50131 = cljs.core._nth.call(null,chunk__50080_50128,i__50082_50130);dommy.attrs.add_class_BANG_.call(null,n,c_50131);
{
var G__50132 = seq__50079_50127;
var G__50133 = chunk__50080_50128;
var G__50134 = count__50081_50129;
var G__50135 = (i__50082_50130 + 1);
seq__50079_50127 = G__50132;
chunk__50080_50128 = G__50133;
count__50081_50129 = G__50134;
i__50082_50130 = G__50135;
continue;
}
} else
{var temp__4098__auto___50136__$1 = cljs.core.seq.call(null,seq__50079_50127);if(temp__4098__auto___50136__$1)
{var seq__50079_50137__$1 = temp__4098__auto___50136__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50079_50137__$1))
{var c__15907__auto___50138 = cljs.core.chunk_first.call(null,seq__50079_50137__$1);{
var G__50139 = cljs.core.chunk_rest.call(null,seq__50079_50137__$1);
var G__50140 = c__15907__auto___50138;
var G__50141 = cljs.core.count.call(null,c__15907__auto___50138);
var G__50142 = 0;
seq__50079_50127 = G__50139;
chunk__50080_50128 = G__50140;
count__50081_50129 = G__50141;
i__50082_50130 = G__50142;
continue;
}
} else
{var c_50143 = cljs.core.first.call(null,seq__50079_50137__$1);dommy.attrs.add_class_BANG_.call(null,n,c_50143);
{
var G__50144 = cljs.core.next.call(null,seq__50079_50137__$1);
var G__50145 = null;
var G__50146 = 0;
var G__50147 = 0;
seq__50079_50127 = G__50144;
chunk__50080_50128 = G__50145;
count__50081_50129 = G__50146;
i__50082_50130 = G__50147;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__50078_50126))
{dommy.attrs.add_class_BANG_.call(null,n,v_50125);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_50124,v_50125);
} else
{}
}
}
{
var G__50148 = cljs.core.next.call(null,seq__50067_50117__$1);
var G__50149 = null;
var G__50150 = 0;
var G__50151 = 0;
seq__50067_50083 = G__50148;
chunk__50068_50084 = G__50149;
count__50069_50085 = G__50150;
i__50070_50086 = G__50151;
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
}catch (e50152){if((e50152 instanceof ReferenceError))
{var __50153 = e50152;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e50152;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__50155 = data;if(G__50155)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__50155.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__50155.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50155);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__50155);
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