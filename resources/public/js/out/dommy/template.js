// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj25060 = {};return obj25060;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8186__auto__ = this$;if(and__8186__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8186__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8806__auto__ = (((this$ == null))?null:this$);return (function (){var or__8198__auto__ = (dommy.template._elem[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (dommy.template._elem["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
{var str_25063 = node_str.substring(base_idx);while(true){
var next_idx_25064 = dommy.template.next_css_index.call(null,str_25063,1);var frag_25065 = (((next_idx_25064 >= 0))?str_25063.substring(0,next_idx_25064):str_25063);var G__25062_25066 = frag_25065.charAt(0);if(cljs.core._EQ_.call(null,"#",G__25062_25066))
{node.setAttribute("id",frag_25065.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__25062_25066))
{dommy.attrs.add_class_BANG_.call(null,node,frag_25065.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_25065.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_25064 >= 0))
{{
var G__25067 = str_25063.substring(next_idx_25064);
str_25063 = G__25067;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__25073 = data;if(G__25073)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__25073.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25073.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25073);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__25074_25078 = cljs.core.seq.call(null,data);var chunk__25075_25079 = null;var count__25076_25080 = 0;var i__25077_25081 = 0;while(true){
if((i__25077_25081 < count__25076_25080))
{var child_25082 = cljs.core._nth.call(null,chunk__25075_25079,i__25077_25081);__GT_document_fragment.call(null,result_frag,child_25082);
{
var G__25083 = seq__25074_25078;
var G__25084 = chunk__25075_25079;
var G__25085 = count__25076_25080;
var G__25086 = (i__25077_25081 + 1);
seq__25074_25078 = G__25083;
chunk__25075_25079 = G__25084;
count__25076_25080 = G__25085;
i__25077_25081 = G__25086;
continue;
}
} else
{var temp__4092__auto___25087 = cljs.core.seq.call(null,seq__25074_25078);if(temp__4092__auto___25087)
{var seq__25074_25088__$1 = temp__4092__auto___25087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25074_25088__$1))
{var c__8927__auto___25089 = cljs.core.chunk_first.call(null,seq__25074_25088__$1);{
var G__25090 = cljs.core.chunk_rest.call(null,seq__25074_25088__$1);
var G__25091 = c__8927__auto___25089;
var G__25092 = cljs.core.count.call(null,c__8927__auto___25089);
var G__25093 = 0;
seq__25074_25078 = G__25090;
chunk__25075_25079 = G__25091;
count__25076_25080 = G__25092;
i__25077_25081 = G__25093;
continue;
}
} else
{var child_25094 = cljs.core.first.call(null,seq__25074_25088__$1);__GT_document_fragment.call(null,result_frag,child_25094);
{
var G__25095 = cljs.core.next.call(null,seq__25074_25088__$1);
var G__25096 = null;
var G__25097 = 0;
var G__25098 = 0;
seq__25074_25078 = G__25095;
chunk__25075_25079 = G__25096;
count__25076_25080 = G__25097;
i__25077_25081 = G__25098;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__25100 = data;if(G__25100)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__25100.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25100.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25100);
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
dommy.template.compound_element = (function compound_element(p__25101){var vec__25121 = p__25101;var tag_name = cljs.core.nth.call(null,vec__25121,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__25121,1,null);var children = cljs.core.nthnext.call(null,vec__25121,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__25123 = maybe_attrs;if(G__25123)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__25123.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25123.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25123);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25123);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__25124_25140 = cljs.core.seq.call(null,attrs);var chunk__25125_25141 = null;var count__25126_25142 = 0;var i__25127_25143 = 0;while(true){
if((i__25127_25143 < count__25126_25142))
{var vec__25128_25144 = cljs.core._nth.call(null,chunk__25125_25141,i__25127_25143);var k_25145 = cljs.core.nth.call(null,vec__25128_25144,0,null);var v_25146 = cljs.core.nth.call(null,vec__25128_25144,1,null);var G__25129_25147 = k_25145;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25129_25147))
{var seq__25130_25148 = cljs.core.seq.call(null,v_25146);var chunk__25131_25149 = null;var count__25132_25150 = 0;var i__25133_25151 = 0;while(true){
if((i__25133_25151 < count__25132_25150))
{var c_25152 = cljs.core._nth.call(null,chunk__25131_25149,i__25133_25151);dommy.attrs.add_class_BANG_.call(null,n,c_25152);
{
var G__25153 = seq__25130_25148;
var G__25154 = chunk__25131_25149;
var G__25155 = count__25132_25150;
var G__25156 = (i__25133_25151 + 1);
seq__25130_25148 = G__25153;
chunk__25131_25149 = G__25154;
count__25132_25150 = G__25155;
i__25133_25151 = G__25156;
continue;
}
} else
{var temp__4092__auto___25157 = cljs.core.seq.call(null,seq__25130_25148);if(temp__4092__auto___25157)
{var seq__25130_25158__$1 = temp__4092__auto___25157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25130_25158__$1))
{var c__8927__auto___25159 = cljs.core.chunk_first.call(null,seq__25130_25158__$1);{
var G__25160 = cljs.core.chunk_rest.call(null,seq__25130_25158__$1);
var G__25161 = c__8927__auto___25159;
var G__25162 = cljs.core.count.call(null,c__8927__auto___25159);
var G__25163 = 0;
seq__25130_25148 = G__25160;
chunk__25131_25149 = G__25161;
count__25132_25150 = G__25162;
i__25133_25151 = G__25163;
continue;
}
} else
{var c_25164 = cljs.core.first.call(null,seq__25130_25158__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25164);
{
var G__25165 = cljs.core.next.call(null,seq__25130_25158__$1);
var G__25166 = null;
var G__25167 = 0;
var G__25168 = 0;
seq__25130_25148 = G__25165;
chunk__25131_25149 = G__25166;
count__25132_25150 = G__25167;
i__25133_25151 = G__25168;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25129_25147))
{dommy.attrs.add_class_BANG_.call(null,n,v_25146);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25145,v_25146);
} else
{}
}
}
{
var G__25169 = seq__25124_25140;
var G__25170 = chunk__25125_25141;
var G__25171 = count__25126_25142;
var G__25172 = (i__25127_25143 + 1);
seq__25124_25140 = G__25169;
chunk__25125_25141 = G__25170;
count__25126_25142 = G__25171;
i__25127_25143 = G__25172;
continue;
}
} else
{var temp__4092__auto___25173 = cljs.core.seq.call(null,seq__25124_25140);if(temp__4092__auto___25173)
{var seq__25124_25174__$1 = temp__4092__auto___25173;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25124_25174__$1))
{var c__8927__auto___25175 = cljs.core.chunk_first.call(null,seq__25124_25174__$1);{
var G__25176 = cljs.core.chunk_rest.call(null,seq__25124_25174__$1);
var G__25177 = c__8927__auto___25175;
var G__25178 = cljs.core.count.call(null,c__8927__auto___25175);
var G__25179 = 0;
seq__25124_25140 = G__25176;
chunk__25125_25141 = G__25177;
count__25126_25142 = G__25178;
i__25127_25143 = G__25179;
continue;
}
} else
{var vec__25134_25180 = cljs.core.first.call(null,seq__25124_25174__$1);var k_25181 = cljs.core.nth.call(null,vec__25134_25180,0,null);var v_25182 = cljs.core.nth.call(null,vec__25134_25180,1,null);var G__25135_25183 = k_25181;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25135_25183))
{var seq__25136_25184 = cljs.core.seq.call(null,v_25182);var chunk__25137_25185 = null;var count__25138_25186 = 0;var i__25139_25187 = 0;while(true){
if((i__25139_25187 < count__25138_25186))
{var c_25188 = cljs.core._nth.call(null,chunk__25137_25185,i__25139_25187);dommy.attrs.add_class_BANG_.call(null,n,c_25188);
{
var G__25189 = seq__25136_25184;
var G__25190 = chunk__25137_25185;
var G__25191 = count__25138_25186;
var G__25192 = (i__25139_25187 + 1);
seq__25136_25184 = G__25189;
chunk__25137_25185 = G__25190;
count__25138_25186 = G__25191;
i__25139_25187 = G__25192;
continue;
}
} else
{var temp__4092__auto___25193__$1 = cljs.core.seq.call(null,seq__25136_25184);if(temp__4092__auto___25193__$1)
{var seq__25136_25194__$1 = temp__4092__auto___25193__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25136_25194__$1))
{var c__8927__auto___25195 = cljs.core.chunk_first.call(null,seq__25136_25194__$1);{
var G__25196 = cljs.core.chunk_rest.call(null,seq__25136_25194__$1);
var G__25197 = c__8927__auto___25195;
var G__25198 = cljs.core.count.call(null,c__8927__auto___25195);
var G__25199 = 0;
seq__25136_25184 = G__25196;
chunk__25137_25185 = G__25197;
count__25138_25186 = G__25198;
i__25139_25187 = G__25199;
continue;
}
} else
{var c_25200 = cljs.core.first.call(null,seq__25136_25194__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25200);
{
var G__25201 = cljs.core.next.call(null,seq__25136_25194__$1);
var G__25202 = null;
var G__25203 = 0;
var G__25204 = 0;
seq__25136_25184 = G__25201;
chunk__25137_25185 = G__25202;
count__25138_25186 = G__25203;
i__25139_25187 = G__25204;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25135_25183))
{dommy.attrs.add_class_BANG_.call(null,n,v_25182);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25181,v_25182);
} else
{}
}
}
{
var G__25205 = cljs.core.next.call(null,seq__25124_25174__$1);
var G__25206 = null;
var G__25207 = 0;
var G__25208 = 0;
seq__25124_25140 = G__25205;
chunk__25125_25141 = G__25206;
count__25126_25142 = G__25207;
i__25127_25143 = G__25208;
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
}catch (e25209){if((e25209 instanceof ReferenceError))
{var __25210 = e25209;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25209;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__25212 = data;if(G__25212)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__25212.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25212.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25212);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25212);
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