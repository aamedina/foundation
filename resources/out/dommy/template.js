// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj36077 = {};return obj36077;
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
{var str_36080 = node_str.substring(base_idx);while(true){
var next_idx_36081 = dommy.template.next_css_index.call(null,str_36080,1);var frag_36082 = (((next_idx_36081 >= 0))?str_36080.substring(0,next_idx_36081):str_36080);var G__36079_36083 = frag_36082.charAt(0);if(cljs.core._EQ_.call(null,"#",G__36079_36083))
{node.setAttribute("id",frag_36082.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__36079_36083))
{dommy.attrs.add_class_BANG_.call(null,node,frag_36082.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_36082.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_36081 >= 0))
{{
var G__36084 = str_36080.substring(next_idx_36081);
str_36080 = G__36084;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__36090 = data;if(G__36090)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36090.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36090.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36090);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__36091_36095 = cljs.core.seq.call(null,data);var chunk__36092_36096 = null;var count__36093_36097 = 0;var i__36094_36098 = 0;while(true){
if((i__36094_36098 < count__36093_36097))
{var child_36099 = cljs.core._nth.call(null,chunk__36092_36096,i__36094_36098);__GT_document_fragment.call(null,result_frag,child_36099);
{
var G__36100 = seq__36091_36095;
var G__36101 = chunk__36092_36096;
var G__36102 = count__36093_36097;
var G__36103 = (i__36094_36098 + 1);
seq__36091_36095 = G__36100;
chunk__36092_36096 = G__36101;
count__36093_36097 = G__36102;
i__36094_36098 = G__36103;
continue;
}
} else
{var temp__4092__auto___36104 = cljs.core.seq.call(null,seq__36091_36095);if(temp__4092__auto___36104)
{var seq__36091_36105__$1 = temp__4092__auto___36104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36091_36105__$1))
{var c__14547__auto___36106 = cljs.core.chunk_first.call(null,seq__36091_36105__$1);{
var G__36107 = cljs.core.chunk_rest.call(null,seq__36091_36105__$1);
var G__36108 = c__14547__auto___36106;
var G__36109 = cljs.core.count.call(null,c__14547__auto___36106);
var G__36110 = 0;
seq__36091_36095 = G__36107;
chunk__36092_36096 = G__36108;
count__36093_36097 = G__36109;
i__36094_36098 = G__36110;
continue;
}
} else
{var child_36111 = cljs.core.first.call(null,seq__36091_36105__$1);__GT_document_fragment.call(null,result_frag,child_36111);
{
var G__36112 = cljs.core.next.call(null,seq__36091_36105__$1);
var G__36113 = null;
var G__36114 = 0;
var G__36115 = 0;
seq__36091_36095 = G__36112;
chunk__36092_36096 = G__36113;
count__36093_36097 = G__36114;
i__36094_36098 = G__36115;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__36117 = data;if(G__36117)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36117.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36117.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36117);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36117);
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
dommy.template.compound_element = (function compound_element(p__36118){var vec__36138 = p__36118;var tag_name = cljs.core.nth.call(null,vec__36138,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__36138,1,null);var children = cljs.core.nthnext.call(null,vec__36138,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__36140 = maybe_attrs;if(G__36140)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36140.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36140.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36140);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__36141_36157 = cljs.core.seq.call(null,attrs);var chunk__36142_36158 = null;var count__36143_36159 = 0;var i__36144_36160 = 0;while(true){
if((i__36144_36160 < count__36143_36159))
{var vec__36145_36161 = cljs.core._nth.call(null,chunk__36142_36158,i__36144_36160);var k_36162 = cljs.core.nth.call(null,vec__36145_36161,0,null);var v_36163 = cljs.core.nth.call(null,vec__36145_36161,1,null);var G__36146_36164 = k_36162;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__36146_36164))
{var seq__36147_36165 = cljs.core.seq.call(null,v_36163);var chunk__36148_36166 = null;var count__36149_36167 = 0;var i__36150_36168 = 0;while(true){
if((i__36150_36168 < count__36149_36167))
{var c_36169 = cljs.core._nth.call(null,chunk__36148_36166,i__36150_36168);dommy.attrs.add_class_BANG_.call(null,n,c_36169);
{
var G__36170 = seq__36147_36165;
var G__36171 = chunk__36148_36166;
var G__36172 = count__36149_36167;
var G__36173 = (i__36150_36168 + 1);
seq__36147_36165 = G__36170;
chunk__36148_36166 = G__36171;
count__36149_36167 = G__36172;
i__36150_36168 = G__36173;
continue;
}
} else
{var temp__4092__auto___36174 = cljs.core.seq.call(null,seq__36147_36165);if(temp__4092__auto___36174)
{var seq__36147_36175__$1 = temp__4092__auto___36174;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36147_36175__$1))
{var c__14547__auto___36176 = cljs.core.chunk_first.call(null,seq__36147_36175__$1);{
var G__36177 = cljs.core.chunk_rest.call(null,seq__36147_36175__$1);
var G__36178 = c__14547__auto___36176;
var G__36179 = cljs.core.count.call(null,c__14547__auto___36176);
var G__36180 = 0;
seq__36147_36165 = G__36177;
chunk__36148_36166 = G__36178;
count__36149_36167 = G__36179;
i__36150_36168 = G__36180;
continue;
}
} else
{var c_36181 = cljs.core.first.call(null,seq__36147_36175__$1);dommy.attrs.add_class_BANG_.call(null,n,c_36181);
{
var G__36182 = cljs.core.next.call(null,seq__36147_36175__$1);
var G__36183 = null;
var G__36184 = 0;
var G__36185 = 0;
seq__36147_36165 = G__36182;
chunk__36148_36166 = G__36183;
count__36149_36167 = G__36184;
i__36150_36168 = G__36185;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__36146_36164))
{dommy.attrs.add_class_BANG_.call(null,n,v_36163);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_36162,v_36163);
} else
{}
}
}
{
var G__36186 = seq__36141_36157;
var G__36187 = chunk__36142_36158;
var G__36188 = count__36143_36159;
var G__36189 = (i__36144_36160 + 1);
seq__36141_36157 = G__36186;
chunk__36142_36158 = G__36187;
count__36143_36159 = G__36188;
i__36144_36160 = G__36189;
continue;
}
} else
{var temp__4092__auto___36190 = cljs.core.seq.call(null,seq__36141_36157);if(temp__4092__auto___36190)
{var seq__36141_36191__$1 = temp__4092__auto___36190;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36141_36191__$1))
{var c__14547__auto___36192 = cljs.core.chunk_first.call(null,seq__36141_36191__$1);{
var G__36193 = cljs.core.chunk_rest.call(null,seq__36141_36191__$1);
var G__36194 = c__14547__auto___36192;
var G__36195 = cljs.core.count.call(null,c__14547__auto___36192);
var G__36196 = 0;
seq__36141_36157 = G__36193;
chunk__36142_36158 = G__36194;
count__36143_36159 = G__36195;
i__36144_36160 = G__36196;
continue;
}
} else
{var vec__36151_36197 = cljs.core.first.call(null,seq__36141_36191__$1);var k_36198 = cljs.core.nth.call(null,vec__36151_36197,0,null);var v_36199 = cljs.core.nth.call(null,vec__36151_36197,1,null);var G__36152_36200 = k_36198;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__36152_36200))
{var seq__36153_36201 = cljs.core.seq.call(null,v_36199);var chunk__36154_36202 = null;var count__36155_36203 = 0;var i__36156_36204 = 0;while(true){
if((i__36156_36204 < count__36155_36203))
{var c_36205 = cljs.core._nth.call(null,chunk__36154_36202,i__36156_36204);dommy.attrs.add_class_BANG_.call(null,n,c_36205);
{
var G__36206 = seq__36153_36201;
var G__36207 = chunk__36154_36202;
var G__36208 = count__36155_36203;
var G__36209 = (i__36156_36204 + 1);
seq__36153_36201 = G__36206;
chunk__36154_36202 = G__36207;
count__36155_36203 = G__36208;
i__36156_36204 = G__36209;
continue;
}
} else
{var temp__4092__auto___36210__$1 = cljs.core.seq.call(null,seq__36153_36201);if(temp__4092__auto___36210__$1)
{var seq__36153_36211__$1 = temp__4092__auto___36210__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36153_36211__$1))
{var c__14547__auto___36212 = cljs.core.chunk_first.call(null,seq__36153_36211__$1);{
var G__36213 = cljs.core.chunk_rest.call(null,seq__36153_36211__$1);
var G__36214 = c__14547__auto___36212;
var G__36215 = cljs.core.count.call(null,c__14547__auto___36212);
var G__36216 = 0;
seq__36153_36201 = G__36213;
chunk__36154_36202 = G__36214;
count__36155_36203 = G__36215;
i__36156_36204 = G__36216;
continue;
}
} else
{var c_36217 = cljs.core.first.call(null,seq__36153_36211__$1);dommy.attrs.add_class_BANG_.call(null,n,c_36217);
{
var G__36218 = cljs.core.next.call(null,seq__36153_36211__$1);
var G__36219 = null;
var G__36220 = 0;
var G__36221 = 0;
seq__36153_36201 = G__36218;
chunk__36154_36202 = G__36219;
count__36155_36203 = G__36220;
i__36156_36204 = G__36221;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__36152_36200))
{dommy.attrs.add_class_BANG_.call(null,n,v_36199);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_36198,v_36199);
} else
{}
}
}
{
var G__36222 = cljs.core.next.call(null,seq__36141_36191__$1);
var G__36223 = null;
var G__36224 = 0;
var G__36225 = 0;
seq__36141_36157 = G__36222;
chunk__36142_36158 = G__36223;
count__36143_36159 = G__36224;
i__36144_36160 = G__36225;
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
}catch (e36226){if((e36226 instanceof ReferenceError))
{var __36227 = e36226;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36226;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__36229 = data;if(G__36229)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36229.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36229.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36229);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36229);
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