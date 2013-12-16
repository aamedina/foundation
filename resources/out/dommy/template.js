// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj36082 = {};return obj36082;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13811__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (dommy.template._elem[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (dommy.template._elem["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
{var str_36085 = node_str.substring(base_idx);while(true){
var next_idx_36086 = dommy.template.next_css_index.call(null,str_36085,1);var frag_36087 = (((next_idx_36086 >= 0))?str_36085.substring(0,next_idx_36086):str_36085);var G__36084_36088 = frag_36087.charAt(0);if(cljs.core._EQ_.call(null,"#",G__36084_36088))
{node.setAttribute("id",frag_36087.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__36084_36088))
{dommy.attrs.add_class_BANG_.call(null,node,frag_36087.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_36087.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_36086 >= 0))
{{
var G__36089 = str_36085.substring(next_idx_36086);
str_36085 = G__36089;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__36095 = data;if(G__36095)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36095.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36095.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36095);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36095);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__36096_36100 = cljs.core.seq.call(null,data);var chunk__36097_36101 = null;var count__36098_36102 = 0;var i__36099_36103 = 0;while(true){
if((i__36099_36103 < count__36098_36102))
{var child_36104 = cljs.core._nth.call(null,chunk__36097_36101,i__36099_36103);__GT_document_fragment.call(null,result_frag,child_36104);
{
var G__36105 = seq__36096_36100;
var G__36106 = chunk__36097_36101;
var G__36107 = count__36098_36102;
var G__36108 = (i__36099_36103 + 1);
seq__36096_36100 = G__36105;
chunk__36097_36101 = G__36106;
count__36098_36102 = G__36107;
i__36099_36103 = G__36108;
continue;
}
} else
{var temp__4092__auto___36109 = cljs.core.seq.call(null,seq__36096_36100);if(temp__4092__auto___36109)
{var seq__36096_36110__$1 = temp__4092__auto___36109;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36096_36110__$1))
{var c__14547__auto___36111 = cljs.core.chunk_first.call(null,seq__36096_36110__$1);{
var G__36112 = cljs.core.chunk_rest.call(null,seq__36096_36110__$1);
var G__36113 = c__14547__auto___36111;
var G__36114 = cljs.core.count.call(null,c__14547__auto___36111);
var G__36115 = 0;
seq__36096_36100 = G__36112;
chunk__36097_36101 = G__36113;
count__36098_36102 = G__36114;
i__36099_36103 = G__36115;
continue;
}
} else
{var child_36116 = cljs.core.first.call(null,seq__36096_36110__$1);__GT_document_fragment.call(null,result_frag,child_36116);
{
var G__36117 = cljs.core.next.call(null,seq__36096_36110__$1);
var G__36118 = null;
var G__36119 = 0;
var G__36120 = 0;
seq__36096_36100 = G__36117;
chunk__36097_36101 = G__36118;
count__36098_36102 = G__36119;
i__36099_36103 = G__36120;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__36122 = data;if(G__36122)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36122.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36122.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36122);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36122);
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
dommy.template.compound_element = (function compound_element(p__36123){var vec__36143 = p__36123;var tag_name = cljs.core.nth.call(null,vec__36143,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__36143,1,null);var children = cljs.core.nthnext.call(null,vec__36143,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__36145 = maybe_attrs;if(G__36145)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36145.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36145.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36145);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36145);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__36146_36162 = cljs.core.seq.call(null,attrs);var chunk__36147_36163 = null;var count__36148_36164 = 0;var i__36149_36165 = 0;while(true){
if((i__36149_36165 < count__36148_36164))
{var vec__36150_36166 = cljs.core._nth.call(null,chunk__36147_36163,i__36149_36165);var k_36167 = cljs.core.nth.call(null,vec__36150_36166,0,null);var v_36168 = cljs.core.nth.call(null,vec__36150_36166,1,null);var G__36151_36169 = k_36167;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__36151_36169))
{var seq__36152_36170 = cljs.core.seq.call(null,v_36168);var chunk__36153_36171 = null;var count__36154_36172 = 0;var i__36155_36173 = 0;while(true){
if((i__36155_36173 < count__36154_36172))
{var c_36174 = cljs.core._nth.call(null,chunk__36153_36171,i__36155_36173);dommy.attrs.add_class_BANG_.call(null,n,c_36174);
{
var G__36175 = seq__36152_36170;
var G__36176 = chunk__36153_36171;
var G__36177 = count__36154_36172;
var G__36178 = (i__36155_36173 + 1);
seq__36152_36170 = G__36175;
chunk__36153_36171 = G__36176;
count__36154_36172 = G__36177;
i__36155_36173 = G__36178;
continue;
}
} else
{var temp__4092__auto___36179 = cljs.core.seq.call(null,seq__36152_36170);if(temp__4092__auto___36179)
{var seq__36152_36180__$1 = temp__4092__auto___36179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36152_36180__$1))
{var c__14547__auto___36181 = cljs.core.chunk_first.call(null,seq__36152_36180__$1);{
var G__36182 = cljs.core.chunk_rest.call(null,seq__36152_36180__$1);
var G__36183 = c__14547__auto___36181;
var G__36184 = cljs.core.count.call(null,c__14547__auto___36181);
var G__36185 = 0;
seq__36152_36170 = G__36182;
chunk__36153_36171 = G__36183;
count__36154_36172 = G__36184;
i__36155_36173 = G__36185;
continue;
}
} else
{var c_36186 = cljs.core.first.call(null,seq__36152_36180__$1);dommy.attrs.add_class_BANG_.call(null,n,c_36186);
{
var G__36187 = cljs.core.next.call(null,seq__36152_36180__$1);
var G__36188 = null;
var G__36189 = 0;
var G__36190 = 0;
seq__36152_36170 = G__36187;
chunk__36153_36171 = G__36188;
count__36154_36172 = G__36189;
i__36155_36173 = G__36190;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__36151_36169))
{dommy.attrs.add_class_BANG_.call(null,n,v_36168);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_36167,v_36168);
} else
{}
}
}
{
var G__36191 = seq__36146_36162;
var G__36192 = chunk__36147_36163;
var G__36193 = count__36148_36164;
var G__36194 = (i__36149_36165 + 1);
seq__36146_36162 = G__36191;
chunk__36147_36163 = G__36192;
count__36148_36164 = G__36193;
i__36149_36165 = G__36194;
continue;
}
} else
{var temp__4092__auto___36195 = cljs.core.seq.call(null,seq__36146_36162);if(temp__4092__auto___36195)
{var seq__36146_36196__$1 = temp__4092__auto___36195;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36146_36196__$1))
{var c__14547__auto___36197 = cljs.core.chunk_first.call(null,seq__36146_36196__$1);{
var G__36198 = cljs.core.chunk_rest.call(null,seq__36146_36196__$1);
var G__36199 = c__14547__auto___36197;
var G__36200 = cljs.core.count.call(null,c__14547__auto___36197);
var G__36201 = 0;
seq__36146_36162 = G__36198;
chunk__36147_36163 = G__36199;
count__36148_36164 = G__36200;
i__36149_36165 = G__36201;
continue;
}
} else
{var vec__36156_36202 = cljs.core.first.call(null,seq__36146_36196__$1);var k_36203 = cljs.core.nth.call(null,vec__36156_36202,0,null);var v_36204 = cljs.core.nth.call(null,vec__36156_36202,1,null);var G__36157_36205 = k_36203;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__36157_36205))
{var seq__36158_36206 = cljs.core.seq.call(null,v_36204);var chunk__36159_36207 = null;var count__36160_36208 = 0;var i__36161_36209 = 0;while(true){
if((i__36161_36209 < count__36160_36208))
{var c_36210 = cljs.core._nth.call(null,chunk__36159_36207,i__36161_36209);dommy.attrs.add_class_BANG_.call(null,n,c_36210);
{
var G__36211 = seq__36158_36206;
var G__36212 = chunk__36159_36207;
var G__36213 = count__36160_36208;
var G__36214 = (i__36161_36209 + 1);
seq__36158_36206 = G__36211;
chunk__36159_36207 = G__36212;
count__36160_36208 = G__36213;
i__36161_36209 = G__36214;
continue;
}
} else
{var temp__4092__auto___36215__$1 = cljs.core.seq.call(null,seq__36158_36206);if(temp__4092__auto___36215__$1)
{var seq__36158_36216__$1 = temp__4092__auto___36215__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36158_36216__$1))
{var c__14547__auto___36217 = cljs.core.chunk_first.call(null,seq__36158_36216__$1);{
var G__36218 = cljs.core.chunk_rest.call(null,seq__36158_36216__$1);
var G__36219 = c__14547__auto___36217;
var G__36220 = cljs.core.count.call(null,c__14547__auto___36217);
var G__36221 = 0;
seq__36158_36206 = G__36218;
chunk__36159_36207 = G__36219;
count__36160_36208 = G__36220;
i__36161_36209 = G__36221;
continue;
}
} else
{var c_36222 = cljs.core.first.call(null,seq__36158_36216__$1);dommy.attrs.add_class_BANG_.call(null,n,c_36222);
{
var G__36223 = cljs.core.next.call(null,seq__36158_36216__$1);
var G__36224 = null;
var G__36225 = 0;
var G__36226 = 0;
seq__36158_36206 = G__36223;
chunk__36159_36207 = G__36224;
count__36160_36208 = G__36225;
i__36161_36209 = G__36226;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__36157_36205))
{dommy.attrs.add_class_BANG_.call(null,n,v_36204);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_36203,v_36204);
} else
{}
}
}
{
var G__36227 = cljs.core.next.call(null,seq__36146_36196__$1);
var G__36228 = null;
var G__36229 = 0;
var G__36230 = 0;
seq__36146_36162 = G__36227;
chunk__36147_36163 = G__36228;
count__36148_36164 = G__36229;
i__36149_36165 = G__36230;
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
}catch (e36231){if((e36231 instanceof ReferenceError))
{var __36232 = e36231;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36231;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__36234 = data;if(G__36234)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36234.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36234.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36234);
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