// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj28962 = {};return obj28962;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8211__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (dommy.template._elem[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (dommy.template._elem["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
{var str_28965 = node_str.substring(base_idx);while(true){
var next_idx_28966 = dommy.template.next_css_index.call(null,str_28965,1);var frag_28967 = (((next_idx_28966 >= 0))?str_28965.substring(0,next_idx_28966):str_28965);var G__28964_28968 = frag_28967.charAt(0);if(cljs.core._EQ_.call(null,"#",G__28964_28968))
{node.setAttribute("id",frag_28967.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__28964_28968))
{dommy.attrs.add_class_BANG_.call(null,node,frag_28967.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_28967.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_28966 >= 0))
{{
var G__28969 = str_28965.substring(next_idx_28966);
str_28965 = G__28969;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__28975 = data;if(G__28975)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__28975.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28975.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28975);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28975);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__28976_28980 = cljs.core.seq.call(null,data);var chunk__28977_28981 = null;var count__28978_28982 = 0;var i__28979_28983 = 0;while(true){
if((i__28979_28983 < count__28978_28982))
{var child_28984 = cljs.core._nth.call(null,chunk__28977_28981,i__28979_28983);__GT_document_fragment.call(null,result_frag,child_28984);
{
var G__28985 = seq__28976_28980;
var G__28986 = chunk__28977_28981;
var G__28987 = count__28978_28982;
var G__28988 = (i__28979_28983 + 1);
seq__28976_28980 = G__28985;
chunk__28977_28981 = G__28986;
count__28978_28982 = G__28987;
i__28979_28983 = G__28988;
continue;
}
} else
{var temp__4092__auto___28989 = cljs.core.seq.call(null,seq__28976_28980);if(temp__4092__auto___28989)
{var seq__28976_28990__$1 = temp__4092__auto___28989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28976_28990__$1))
{var c__8952__auto___28991 = cljs.core.chunk_first.call(null,seq__28976_28990__$1);{
var G__28992 = cljs.core.chunk_rest.call(null,seq__28976_28990__$1);
var G__28993 = c__8952__auto___28991;
var G__28994 = cljs.core.count.call(null,c__8952__auto___28991);
var G__28995 = 0;
seq__28976_28980 = G__28992;
chunk__28977_28981 = G__28993;
count__28978_28982 = G__28994;
i__28979_28983 = G__28995;
continue;
}
} else
{var child_28996 = cljs.core.first.call(null,seq__28976_28990__$1);__GT_document_fragment.call(null,result_frag,child_28996);
{
var G__28997 = cljs.core.next.call(null,seq__28976_28990__$1);
var G__28998 = null;
var G__28999 = 0;
var G__29000 = 0;
seq__28976_28980 = G__28997;
chunk__28977_28981 = G__28998;
count__28978_28982 = G__28999;
i__28979_28983 = G__29000;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__29002 = data;if(G__29002)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__29002.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29002.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29002);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29002);
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
dommy.template.compound_element = (function compound_element(p__29003){var vec__29023 = p__29003;var tag_name = cljs.core.nth.call(null,vec__29023,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__29023,1,null);var children = cljs.core.nthnext.call(null,vec__29023,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__29025 = maybe_attrs;if(G__29025)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__29025.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29025.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29025);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29025);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__29026_29042 = cljs.core.seq.call(null,attrs);var chunk__29027_29043 = null;var count__29028_29044 = 0;var i__29029_29045 = 0;while(true){
if((i__29029_29045 < count__29028_29044))
{var vec__29030_29046 = cljs.core._nth.call(null,chunk__29027_29043,i__29029_29045);var k_29047 = cljs.core.nth.call(null,vec__29030_29046,0,null);var v_29048 = cljs.core.nth.call(null,vec__29030_29046,1,null);var G__29031_29049 = k_29047;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29031_29049))
{var seq__29032_29050 = cljs.core.seq.call(null,v_29048);var chunk__29033_29051 = null;var count__29034_29052 = 0;var i__29035_29053 = 0;while(true){
if((i__29035_29053 < count__29034_29052))
{var c_29054 = cljs.core._nth.call(null,chunk__29033_29051,i__29035_29053);dommy.attrs.add_class_BANG_.call(null,n,c_29054);
{
var G__29055 = seq__29032_29050;
var G__29056 = chunk__29033_29051;
var G__29057 = count__29034_29052;
var G__29058 = (i__29035_29053 + 1);
seq__29032_29050 = G__29055;
chunk__29033_29051 = G__29056;
count__29034_29052 = G__29057;
i__29035_29053 = G__29058;
continue;
}
} else
{var temp__4092__auto___29059 = cljs.core.seq.call(null,seq__29032_29050);if(temp__4092__auto___29059)
{var seq__29032_29060__$1 = temp__4092__auto___29059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29032_29060__$1))
{var c__8952__auto___29061 = cljs.core.chunk_first.call(null,seq__29032_29060__$1);{
var G__29062 = cljs.core.chunk_rest.call(null,seq__29032_29060__$1);
var G__29063 = c__8952__auto___29061;
var G__29064 = cljs.core.count.call(null,c__8952__auto___29061);
var G__29065 = 0;
seq__29032_29050 = G__29062;
chunk__29033_29051 = G__29063;
count__29034_29052 = G__29064;
i__29035_29053 = G__29065;
continue;
}
} else
{var c_29066 = cljs.core.first.call(null,seq__29032_29060__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29066);
{
var G__29067 = cljs.core.next.call(null,seq__29032_29060__$1);
var G__29068 = null;
var G__29069 = 0;
var G__29070 = 0;
seq__29032_29050 = G__29067;
chunk__29033_29051 = G__29068;
count__29034_29052 = G__29069;
i__29035_29053 = G__29070;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29031_29049))
{dommy.attrs.add_class_BANG_.call(null,n,v_29048);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29047,v_29048);
} else
{}
}
}
{
var G__29071 = seq__29026_29042;
var G__29072 = chunk__29027_29043;
var G__29073 = count__29028_29044;
var G__29074 = (i__29029_29045 + 1);
seq__29026_29042 = G__29071;
chunk__29027_29043 = G__29072;
count__29028_29044 = G__29073;
i__29029_29045 = G__29074;
continue;
}
} else
{var temp__4092__auto___29075 = cljs.core.seq.call(null,seq__29026_29042);if(temp__4092__auto___29075)
{var seq__29026_29076__$1 = temp__4092__auto___29075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29026_29076__$1))
{var c__8952__auto___29077 = cljs.core.chunk_first.call(null,seq__29026_29076__$1);{
var G__29078 = cljs.core.chunk_rest.call(null,seq__29026_29076__$1);
var G__29079 = c__8952__auto___29077;
var G__29080 = cljs.core.count.call(null,c__8952__auto___29077);
var G__29081 = 0;
seq__29026_29042 = G__29078;
chunk__29027_29043 = G__29079;
count__29028_29044 = G__29080;
i__29029_29045 = G__29081;
continue;
}
} else
{var vec__29036_29082 = cljs.core.first.call(null,seq__29026_29076__$1);var k_29083 = cljs.core.nth.call(null,vec__29036_29082,0,null);var v_29084 = cljs.core.nth.call(null,vec__29036_29082,1,null);var G__29037_29085 = k_29083;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__29037_29085))
{var seq__29038_29086 = cljs.core.seq.call(null,v_29084);var chunk__29039_29087 = null;var count__29040_29088 = 0;var i__29041_29089 = 0;while(true){
if((i__29041_29089 < count__29040_29088))
{var c_29090 = cljs.core._nth.call(null,chunk__29039_29087,i__29041_29089);dommy.attrs.add_class_BANG_.call(null,n,c_29090);
{
var G__29091 = seq__29038_29086;
var G__29092 = chunk__29039_29087;
var G__29093 = count__29040_29088;
var G__29094 = (i__29041_29089 + 1);
seq__29038_29086 = G__29091;
chunk__29039_29087 = G__29092;
count__29040_29088 = G__29093;
i__29041_29089 = G__29094;
continue;
}
} else
{var temp__4092__auto___29095__$1 = cljs.core.seq.call(null,seq__29038_29086);if(temp__4092__auto___29095__$1)
{var seq__29038_29096__$1 = temp__4092__auto___29095__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29038_29096__$1))
{var c__8952__auto___29097 = cljs.core.chunk_first.call(null,seq__29038_29096__$1);{
var G__29098 = cljs.core.chunk_rest.call(null,seq__29038_29096__$1);
var G__29099 = c__8952__auto___29097;
var G__29100 = cljs.core.count.call(null,c__8952__auto___29097);
var G__29101 = 0;
seq__29038_29086 = G__29098;
chunk__29039_29087 = G__29099;
count__29040_29088 = G__29100;
i__29041_29089 = G__29101;
continue;
}
} else
{var c_29102 = cljs.core.first.call(null,seq__29038_29096__$1);dommy.attrs.add_class_BANG_.call(null,n,c_29102);
{
var G__29103 = cljs.core.next.call(null,seq__29038_29096__$1);
var G__29104 = null;
var G__29105 = 0;
var G__29106 = 0;
seq__29038_29086 = G__29103;
chunk__29039_29087 = G__29104;
count__29040_29088 = G__29105;
i__29041_29089 = G__29106;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__29037_29085))
{dommy.attrs.add_class_BANG_.call(null,n,v_29084);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_29083,v_29084);
} else
{}
}
}
{
var G__29107 = cljs.core.next.call(null,seq__29026_29076__$1);
var G__29108 = null;
var G__29109 = 0;
var G__29110 = 0;
seq__29026_29042 = G__29107;
chunk__29027_29043 = G__29108;
count__29028_29044 = G__29109;
i__29029_29045 = G__29110;
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
}catch (e29111){if((e29111 instanceof ReferenceError))
{var __29112 = e29111;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29111;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__29114 = data;if(G__29114)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__29114.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__29114.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29114);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__29114);
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