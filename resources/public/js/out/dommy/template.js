// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj31056 = {};return obj31056;
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
{var str_31059 = node_str.substring(base_idx);while(true){
var next_idx_31060 = dommy.template.next_css_index.call(null,str_31059,1);var frag_31061 = (((next_idx_31060 >= 0))?str_31059.substring(0,next_idx_31060):str_31059);var G__31058_31062 = frag_31061.charAt(0);if(cljs.core._EQ_.call(null,"#",G__31058_31062))
{node.setAttribute("id",frag_31061.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__31058_31062))
{dommy.attrs.add_class_BANG_.call(null,node,frag_31061.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_31061.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_31060 >= 0))
{{
var G__31063 = str_31059.substring(next_idx_31060);
str_31059 = G__31063;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__31069 = data;if(G__31069)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__31069.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31069.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31069);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__31070_31074 = cljs.core.seq.call(null,data);var chunk__31071_31075 = null;var count__31072_31076 = 0;var i__31073_31077 = 0;while(true){
if((i__31073_31077 < count__31072_31076))
{var child_31078 = cljs.core._nth.call(null,chunk__31071_31075,i__31073_31077);__GT_document_fragment.call(null,result_frag,child_31078);
{
var G__31079 = seq__31070_31074;
var G__31080 = chunk__31071_31075;
var G__31081 = count__31072_31076;
var G__31082 = (i__31073_31077 + 1);
seq__31070_31074 = G__31079;
chunk__31071_31075 = G__31080;
count__31072_31076 = G__31081;
i__31073_31077 = G__31082;
continue;
}
} else
{var temp__4092__auto___31083 = cljs.core.seq.call(null,seq__31070_31074);if(temp__4092__auto___31083)
{var seq__31070_31084__$1 = temp__4092__auto___31083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31070_31084__$1))
{var c__8927__auto___31085 = cljs.core.chunk_first.call(null,seq__31070_31084__$1);{
var G__31086 = cljs.core.chunk_rest.call(null,seq__31070_31084__$1);
var G__31087 = c__8927__auto___31085;
var G__31088 = cljs.core.count.call(null,c__8927__auto___31085);
var G__31089 = 0;
seq__31070_31074 = G__31086;
chunk__31071_31075 = G__31087;
count__31072_31076 = G__31088;
i__31073_31077 = G__31089;
continue;
}
} else
{var child_31090 = cljs.core.first.call(null,seq__31070_31084__$1);__GT_document_fragment.call(null,result_frag,child_31090);
{
var G__31091 = cljs.core.next.call(null,seq__31070_31084__$1);
var G__31092 = null;
var G__31093 = 0;
var G__31094 = 0;
seq__31070_31074 = G__31091;
chunk__31071_31075 = G__31092;
count__31072_31076 = G__31093;
i__31073_31077 = G__31094;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__31096 = data;if(G__31096)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__31096.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31096.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31096);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31096);
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
dommy.template.compound_element = (function compound_element(p__31097){var vec__31117 = p__31097;var tag_name = cljs.core.nth.call(null,vec__31117,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__31117,1,null);var children = cljs.core.nthnext.call(null,vec__31117,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__31119 = maybe_attrs;if(G__31119)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__31119.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31119.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31119);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31119);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__31120_31136 = cljs.core.seq.call(null,attrs);var chunk__31121_31137 = null;var count__31122_31138 = 0;var i__31123_31139 = 0;while(true){
if((i__31123_31139 < count__31122_31138))
{var vec__31124_31140 = cljs.core._nth.call(null,chunk__31121_31137,i__31123_31139);var k_31141 = cljs.core.nth.call(null,vec__31124_31140,0,null);var v_31142 = cljs.core.nth.call(null,vec__31124_31140,1,null);var G__31125_31143 = k_31141;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__31125_31143))
{var seq__31126_31144 = cljs.core.seq.call(null,v_31142);var chunk__31127_31145 = null;var count__31128_31146 = 0;var i__31129_31147 = 0;while(true){
if((i__31129_31147 < count__31128_31146))
{var c_31148 = cljs.core._nth.call(null,chunk__31127_31145,i__31129_31147);dommy.attrs.add_class_BANG_.call(null,n,c_31148);
{
var G__31149 = seq__31126_31144;
var G__31150 = chunk__31127_31145;
var G__31151 = count__31128_31146;
var G__31152 = (i__31129_31147 + 1);
seq__31126_31144 = G__31149;
chunk__31127_31145 = G__31150;
count__31128_31146 = G__31151;
i__31129_31147 = G__31152;
continue;
}
} else
{var temp__4092__auto___31153 = cljs.core.seq.call(null,seq__31126_31144);if(temp__4092__auto___31153)
{var seq__31126_31154__$1 = temp__4092__auto___31153;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31126_31154__$1))
{var c__8927__auto___31155 = cljs.core.chunk_first.call(null,seq__31126_31154__$1);{
var G__31156 = cljs.core.chunk_rest.call(null,seq__31126_31154__$1);
var G__31157 = c__8927__auto___31155;
var G__31158 = cljs.core.count.call(null,c__8927__auto___31155);
var G__31159 = 0;
seq__31126_31144 = G__31156;
chunk__31127_31145 = G__31157;
count__31128_31146 = G__31158;
i__31129_31147 = G__31159;
continue;
}
} else
{var c_31160 = cljs.core.first.call(null,seq__31126_31154__$1);dommy.attrs.add_class_BANG_.call(null,n,c_31160);
{
var G__31161 = cljs.core.next.call(null,seq__31126_31154__$1);
var G__31162 = null;
var G__31163 = 0;
var G__31164 = 0;
seq__31126_31144 = G__31161;
chunk__31127_31145 = G__31162;
count__31128_31146 = G__31163;
i__31129_31147 = G__31164;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__31125_31143))
{dommy.attrs.add_class_BANG_.call(null,n,v_31142);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_31141,v_31142);
} else
{}
}
}
{
var G__31165 = seq__31120_31136;
var G__31166 = chunk__31121_31137;
var G__31167 = count__31122_31138;
var G__31168 = (i__31123_31139 + 1);
seq__31120_31136 = G__31165;
chunk__31121_31137 = G__31166;
count__31122_31138 = G__31167;
i__31123_31139 = G__31168;
continue;
}
} else
{var temp__4092__auto___31169 = cljs.core.seq.call(null,seq__31120_31136);if(temp__4092__auto___31169)
{var seq__31120_31170__$1 = temp__4092__auto___31169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31120_31170__$1))
{var c__8927__auto___31171 = cljs.core.chunk_first.call(null,seq__31120_31170__$1);{
var G__31172 = cljs.core.chunk_rest.call(null,seq__31120_31170__$1);
var G__31173 = c__8927__auto___31171;
var G__31174 = cljs.core.count.call(null,c__8927__auto___31171);
var G__31175 = 0;
seq__31120_31136 = G__31172;
chunk__31121_31137 = G__31173;
count__31122_31138 = G__31174;
i__31123_31139 = G__31175;
continue;
}
} else
{var vec__31130_31176 = cljs.core.first.call(null,seq__31120_31170__$1);var k_31177 = cljs.core.nth.call(null,vec__31130_31176,0,null);var v_31178 = cljs.core.nth.call(null,vec__31130_31176,1,null);var G__31131_31179 = k_31177;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__31131_31179))
{var seq__31132_31180 = cljs.core.seq.call(null,v_31178);var chunk__31133_31181 = null;var count__31134_31182 = 0;var i__31135_31183 = 0;while(true){
if((i__31135_31183 < count__31134_31182))
{var c_31184 = cljs.core._nth.call(null,chunk__31133_31181,i__31135_31183);dommy.attrs.add_class_BANG_.call(null,n,c_31184);
{
var G__31185 = seq__31132_31180;
var G__31186 = chunk__31133_31181;
var G__31187 = count__31134_31182;
var G__31188 = (i__31135_31183 + 1);
seq__31132_31180 = G__31185;
chunk__31133_31181 = G__31186;
count__31134_31182 = G__31187;
i__31135_31183 = G__31188;
continue;
}
} else
{var temp__4092__auto___31189__$1 = cljs.core.seq.call(null,seq__31132_31180);if(temp__4092__auto___31189__$1)
{var seq__31132_31190__$1 = temp__4092__auto___31189__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31132_31190__$1))
{var c__8927__auto___31191 = cljs.core.chunk_first.call(null,seq__31132_31190__$1);{
var G__31192 = cljs.core.chunk_rest.call(null,seq__31132_31190__$1);
var G__31193 = c__8927__auto___31191;
var G__31194 = cljs.core.count.call(null,c__8927__auto___31191);
var G__31195 = 0;
seq__31132_31180 = G__31192;
chunk__31133_31181 = G__31193;
count__31134_31182 = G__31194;
i__31135_31183 = G__31195;
continue;
}
} else
{var c_31196 = cljs.core.first.call(null,seq__31132_31190__$1);dommy.attrs.add_class_BANG_.call(null,n,c_31196);
{
var G__31197 = cljs.core.next.call(null,seq__31132_31190__$1);
var G__31198 = null;
var G__31199 = 0;
var G__31200 = 0;
seq__31132_31180 = G__31197;
chunk__31133_31181 = G__31198;
count__31134_31182 = G__31199;
i__31135_31183 = G__31200;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__31131_31179))
{dommy.attrs.add_class_BANG_.call(null,n,v_31178);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_31177,v_31178);
} else
{}
}
}
{
var G__31201 = cljs.core.next.call(null,seq__31120_31170__$1);
var G__31202 = null;
var G__31203 = 0;
var G__31204 = 0;
seq__31120_31136 = G__31201;
chunk__31121_31137 = G__31202;
count__31122_31138 = G__31203;
i__31123_31139 = G__31204;
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
}catch (e31205){if((e31205 instanceof ReferenceError))
{var __31206 = e31205;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31205;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__31208 = data;if(G__31208)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__31208.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__31208.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31208);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__31208);
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