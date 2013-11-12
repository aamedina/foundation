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
dommy.template._elem = (function _elem(this$){if((function (){var and__7629__auto__ = this$;if(and__7629__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7629__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8234__auto__ = (((this$ == null))?null:this$);return (function (){var or__7638__auto__ = (dommy.template._elem[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (dommy.template._elem["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
{var str_36995 = node_str.substring(base_idx);while(true){
var next_idx_36996 = dommy.template.next_css_index.call(null,str_36995,1);var frag_36997 = (((next_idx_36996 >= 0))?str_36995.substring(0,next_idx_36996):str_36995);var G__36994_36998 = frag_36997.charAt(0);if(cljs.core._EQ_.call(null,"#",G__36994_36998))
{node.setAttribute("id",frag_36997.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__36994_36998))
{dommy.attrs.add_class_BANG_.call(null,node,frag_36997.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_36997.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_36996 >= 0))
{{
var G__36999 = str_36995.substring(next_idx_36996);
str_36995 = G__36999;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__37005 = data;if(G__37005)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__37005.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37005.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37005);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37005);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__37006_37010 = cljs.core.seq.call(null,data);var chunk__37007_37011 = null;var count__37008_37012 = 0;var i__37009_37013 = 0;while(true){
if((i__37009_37013 < count__37008_37012))
{var child_37014 = cljs.core._nth.call(null,chunk__37007_37011,i__37009_37013);__GT_document_fragment.call(null,result_frag,child_37014);
{
var G__37015 = seq__37006_37010;
var G__37016 = chunk__37007_37011;
var G__37017 = count__37008_37012;
var G__37018 = (i__37009_37013 + 1);
seq__37006_37010 = G__37015;
chunk__37007_37011 = G__37016;
count__37008_37012 = G__37017;
i__37009_37013 = G__37018;
continue;
}
} else
{var temp__4092__auto___37019 = cljs.core.seq.call(null,seq__37006_37010);if(temp__4092__auto___37019)
{var seq__37006_37020__$1 = temp__4092__auto___37019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37006_37020__$1))
{var c__8355__auto___37021 = cljs.core.chunk_first.call(null,seq__37006_37020__$1);{
var G__37022 = cljs.core.chunk_rest.call(null,seq__37006_37020__$1);
var G__37023 = c__8355__auto___37021;
var G__37024 = cljs.core.count.call(null,c__8355__auto___37021);
var G__37025 = 0;
seq__37006_37010 = G__37022;
chunk__37007_37011 = G__37023;
count__37008_37012 = G__37024;
i__37009_37013 = G__37025;
continue;
}
} else
{var child_37026 = cljs.core.first.call(null,seq__37006_37020__$1);__GT_document_fragment.call(null,result_frag,child_37026);
{
var G__37027 = cljs.core.next.call(null,seq__37006_37020__$1);
var G__37028 = null;
var G__37029 = 0;
var G__37030 = 0;
seq__37006_37010 = G__37027;
chunk__37007_37011 = G__37028;
count__37008_37012 = G__37029;
i__37009_37013 = G__37030;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__37032 = data;if(G__37032)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__37032.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37032.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37032);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37032);
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
dommy.template.compound_element = (function compound_element(p__37033){var vec__37053 = p__37033;var tag_name = cljs.core.nth.call(null,vec__37053,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__37053,1,null);var children = cljs.core.nthnext.call(null,vec__37053,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__37055 = maybe_attrs;if(G__37055)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__37055.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37055.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37055);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37055);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__37056_37072 = cljs.core.seq.call(null,attrs);var chunk__37057_37073 = null;var count__37058_37074 = 0;var i__37059_37075 = 0;while(true){
if((i__37059_37075 < count__37058_37074))
{var vec__37060_37076 = cljs.core._nth.call(null,chunk__37057_37073,i__37059_37075);var k_37077 = cljs.core.nth.call(null,vec__37060_37076,0,null);var v_37078 = cljs.core.nth.call(null,vec__37060_37076,1,null);var G__37061_37079 = k_37077;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__37061_37079))
{var seq__37062_37080 = cljs.core.seq.call(null,v_37078);var chunk__37063_37081 = null;var count__37064_37082 = 0;var i__37065_37083 = 0;while(true){
if((i__37065_37083 < count__37064_37082))
{var c_37084 = cljs.core._nth.call(null,chunk__37063_37081,i__37065_37083);dommy.attrs.add_class_BANG_.call(null,n,c_37084);
{
var G__37085 = seq__37062_37080;
var G__37086 = chunk__37063_37081;
var G__37087 = count__37064_37082;
var G__37088 = (i__37065_37083 + 1);
seq__37062_37080 = G__37085;
chunk__37063_37081 = G__37086;
count__37064_37082 = G__37087;
i__37065_37083 = G__37088;
continue;
}
} else
{var temp__4092__auto___37089 = cljs.core.seq.call(null,seq__37062_37080);if(temp__4092__auto___37089)
{var seq__37062_37090__$1 = temp__4092__auto___37089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37062_37090__$1))
{var c__8355__auto___37091 = cljs.core.chunk_first.call(null,seq__37062_37090__$1);{
var G__37092 = cljs.core.chunk_rest.call(null,seq__37062_37090__$1);
var G__37093 = c__8355__auto___37091;
var G__37094 = cljs.core.count.call(null,c__8355__auto___37091);
var G__37095 = 0;
seq__37062_37080 = G__37092;
chunk__37063_37081 = G__37093;
count__37064_37082 = G__37094;
i__37065_37083 = G__37095;
continue;
}
} else
{var c_37096 = cljs.core.first.call(null,seq__37062_37090__$1);dommy.attrs.add_class_BANG_.call(null,n,c_37096);
{
var G__37097 = cljs.core.next.call(null,seq__37062_37090__$1);
var G__37098 = null;
var G__37099 = 0;
var G__37100 = 0;
seq__37062_37080 = G__37097;
chunk__37063_37081 = G__37098;
count__37064_37082 = G__37099;
i__37065_37083 = G__37100;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__37061_37079))
{dommy.attrs.add_class_BANG_.call(null,n,v_37078);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_37077,v_37078);
} else
{}
}
}
{
var G__37101 = seq__37056_37072;
var G__37102 = chunk__37057_37073;
var G__37103 = count__37058_37074;
var G__37104 = (i__37059_37075 + 1);
seq__37056_37072 = G__37101;
chunk__37057_37073 = G__37102;
count__37058_37074 = G__37103;
i__37059_37075 = G__37104;
continue;
}
} else
{var temp__4092__auto___37105 = cljs.core.seq.call(null,seq__37056_37072);if(temp__4092__auto___37105)
{var seq__37056_37106__$1 = temp__4092__auto___37105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37056_37106__$1))
{var c__8355__auto___37107 = cljs.core.chunk_first.call(null,seq__37056_37106__$1);{
var G__37108 = cljs.core.chunk_rest.call(null,seq__37056_37106__$1);
var G__37109 = c__8355__auto___37107;
var G__37110 = cljs.core.count.call(null,c__8355__auto___37107);
var G__37111 = 0;
seq__37056_37072 = G__37108;
chunk__37057_37073 = G__37109;
count__37058_37074 = G__37110;
i__37059_37075 = G__37111;
continue;
}
} else
{var vec__37066_37112 = cljs.core.first.call(null,seq__37056_37106__$1);var k_37113 = cljs.core.nth.call(null,vec__37066_37112,0,null);var v_37114 = cljs.core.nth.call(null,vec__37066_37112,1,null);var G__37067_37115 = k_37113;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__37067_37115))
{var seq__37068_37116 = cljs.core.seq.call(null,v_37114);var chunk__37069_37117 = null;var count__37070_37118 = 0;var i__37071_37119 = 0;while(true){
if((i__37071_37119 < count__37070_37118))
{var c_37120 = cljs.core._nth.call(null,chunk__37069_37117,i__37071_37119);dommy.attrs.add_class_BANG_.call(null,n,c_37120);
{
var G__37121 = seq__37068_37116;
var G__37122 = chunk__37069_37117;
var G__37123 = count__37070_37118;
var G__37124 = (i__37071_37119 + 1);
seq__37068_37116 = G__37121;
chunk__37069_37117 = G__37122;
count__37070_37118 = G__37123;
i__37071_37119 = G__37124;
continue;
}
} else
{var temp__4092__auto___37125__$1 = cljs.core.seq.call(null,seq__37068_37116);if(temp__4092__auto___37125__$1)
{var seq__37068_37126__$1 = temp__4092__auto___37125__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068_37126__$1))
{var c__8355__auto___37127 = cljs.core.chunk_first.call(null,seq__37068_37126__$1);{
var G__37128 = cljs.core.chunk_rest.call(null,seq__37068_37126__$1);
var G__37129 = c__8355__auto___37127;
var G__37130 = cljs.core.count.call(null,c__8355__auto___37127);
var G__37131 = 0;
seq__37068_37116 = G__37128;
chunk__37069_37117 = G__37129;
count__37070_37118 = G__37130;
i__37071_37119 = G__37131;
continue;
}
} else
{var c_37132 = cljs.core.first.call(null,seq__37068_37126__$1);dommy.attrs.add_class_BANG_.call(null,n,c_37132);
{
var G__37133 = cljs.core.next.call(null,seq__37068_37126__$1);
var G__37134 = null;
var G__37135 = 0;
var G__37136 = 0;
seq__37068_37116 = G__37133;
chunk__37069_37117 = G__37134;
count__37070_37118 = G__37135;
i__37071_37119 = G__37136;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__37067_37115))
{dommy.attrs.add_class_BANG_.call(null,n,v_37114);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_37113,v_37114);
} else
{}
}
}
{
var G__37137 = cljs.core.next.call(null,seq__37056_37106__$1);
var G__37138 = null;
var G__37139 = 0;
var G__37140 = 0;
seq__37056_37072 = G__37137;
chunk__37057_37073 = G__37138;
count__37058_37074 = G__37139;
i__37059_37075 = G__37140;
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
}catch (e37141){if((e37141 instanceof ReferenceError))
{var __37142 = e37141;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37141;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__37144 = data;if(G__37144)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__37144.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__37144.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37144);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__37144);
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
