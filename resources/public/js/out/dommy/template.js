// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj85078 = {};return obj85078;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8216__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (dommy.template._elem[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (dommy.template._elem["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
{var str_85081 = node_str.substring(base_idx);while(true){
var next_idx_85082 = dommy.template.next_css_index.call(null,str_85081,1);var frag_85083 = (((next_idx_85082 >= 0))?str_85081.substring(0,next_idx_85082):str_85081);var G__85080_85084 = frag_85083.charAt(0);if(cljs.core._EQ_.call(null,"#",G__85080_85084))
{node.setAttribute("id",frag_85083.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__85080_85084))
{dommy.attrs.add_class_BANG_.call(null,node,frag_85083.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_85083.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_85082 >= 0))
{{
var G__85085 = str_85081.substring(next_idx_85082);
str_85081 = G__85085;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__85091 = data;if(G__85091)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__85091.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__85091.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85091);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__85092_85096 = cljs.core.seq.call(null,data);var chunk__85093_85097 = null;var count__85094_85098 = 0;var i__85095_85099 = 0;while(true){
if((i__85095_85099 < count__85094_85098))
{var child_85100 = cljs.core._nth.call(null,chunk__85093_85097,i__85095_85099);__GT_document_fragment.call(null,result_frag,child_85100);
{
var G__85101 = seq__85092_85096;
var G__85102 = chunk__85093_85097;
var G__85103 = count__85094_85098;
var G__85104 = (i__85095_85099 + 1);
seq__85092_85096 = G__85101;
chunk__85093_85097 = G__85102;
count__85094_85098 = G__85103;
i__85095_85099 = G__85104;
continue;
}
} else
{var temp__4092__auto___85105 = cljs.core.seq.call(null,seq__85092_85096);if(temp__4092__auto___85105)
{var seq__85092_85106__$1 = temp__4092__auto___85105;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85092_85106__$1))
{var c__8957__auto___85107 = cljs.core.chunk_first.call(null,seq__85092_85106__$1);{
var G__85108 = cljs.core.chunk_rest.call(null,seq__85092_85106__$1);
var G__85109 = c__8957__auto___85107;
var G__85110 = cljs.core.count.call(null,c__8957__auto___85107);
var G__85111 = 0;
seq__85092_85096 = G__85108;
chunk__85093_85097 = G__85109;
count__85094_85098 = G__85110;
i__85095_85099 = G__85111;
continue;
}
} else
{var child_85112 = cljs.core.first.call(null,seq__85092_85106__$1);__GT_document_fragment.call(null,result_frag,child_85112);
{
var G__85113 = cljs.core.next.call(null,seq__85092_85106__$1);
var G__85114 = null;
var G__85115 = 0;
var G__85116 = 0;
seq__85092_85096 = G__85113;
chunk__85093_85097 = G__85114;
count__85094_85098 = G__85115;
i__85095_85099 = G__85116;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__85118 = data;if(G__85118)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__85118.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__85118.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85118);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85118);
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
dommy.template.compound_element = (function compound_element(p__85119){var vec__85139 = p__85119;var tag_name = cljs.core.nth.call(null,vec__85139,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__85139,1,null);var children = cljs.core.nthnext.call(null,vec__85139,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__85141 = maybe_attrs;if(G__85141)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__85141.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__85141.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85141);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85141);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__85142_85158 = cljs.core.seq.call(null,attrs);var chunk__85143_85159 = null;var count__85144_85160 = 0;var i__85145_85161 = 0;while(true){
if((i__85145_85161 < count__85144_85160))
{var vec__85146_85162 = cljs.core._nth.call(null,chunk__85143_85159,i__85145_85161);var k_85163 = cljs.core.nth.call(null,vec__85146_85162,0,null);var v_85164 = cljs.core.nth.call(null,vec__85146_85162,1,null);var G__85147_85165 = k_85163;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__85147_85165))
{var seq__85148_85166 = cljs.core.seq.call(null,v_85164);var chunk__85149_85167 = null;var count__85150_85168 = 0;var i__85151_85169 = 0;while(true){
if((i__85151_85169 < count__85150_85168))
{var c_85170 = cljs.core._nth.call(null,chunk__85149_85167,i__85151_85169);dommy.attrs.add_class_BANG_.call(null,n,c_85170);
{
var G__85171 = seq__85148_85166;
var G__85172 = chunk__85149_85167;
var G__85173 = count__85150_85168;
var G__85174 = (i__85151_85169 + 1);
seq__85148_85166 = G__85171;
chunk__85149_85167 = G__85172;
count__85150_85168 = G__85173;
i__85151_85169 = G__85174;
continue;
}
} else
{var temp__4092__auto___85175 = cljs.core.seq.call(null,seq__85148_85166);if(temp__4092__auto___85175)
{var seq__85148_85176__$1 = temp__4092__auto___85175;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85148_85176__$1))
{var c__8957__auto___85177 = cljs.core.chunk_first.call(null,seq__85148_85176__$1);{
var G__85178 = cljs.core.chunk_rest.call(null,seq__85148_85176__$1);
var G__85179 = c__8957__auto___85177;
var G__85180 = cljs.core.count.call(null,c__8957__auto___85177);
var G__85181 = 0;
seq__85148_85166 = G__85178;
chunk__85149_85167 = G__85179;
count__85150_85168 = G__85180;
i__85151_85169 = G__85181;
continue;
}
} else
{var c_85182 = cljs.core.first.call(null,seq__85148_85176__$1);dommy.attrs.add_class_BANG_.call(null,n,c_85182);
{
var G__85183 = cljs.core.next.call(null,seq__85148_85176__$1);
var G__85184 = null;
var G__85185 = 0;
var G__85186 = 0;
seq__85148_85166 = G__85183;
chunk__85149_85167 = G__85184;
count__85150_85168 = G__85185;
i__85151_85169 = G__85186;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__85147_85165))
{dommy.attrs.add_class_BANG_.call(null,n,v_85164);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_85163,v_85164);
} else
{}
}
}
{
var G__85187 = seq__85142_85158;
var G__85188 = chunk__85143_85159;
var G__85189 = count__85144_85160;
var G__85190 = (i__85145_85161 + 1);
seq__85142_85158 = G__85187;
chunk__85143_85159 = G__85188;
count__85144_85160 = G__85189;
i__85145_85161 = G__85190;
continue;
}
} else
{var temp__4092__auto___85191 = cljs.core.seq.call(null,seq__85142_85158);if(temp__4092__auto___85191)
{var seq__85142_85192__$1 = temp__4092__auto___85191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85142_85192__$1))
{var c__8957__auto___85193 = cljs.core.chunk_first.call(null,seq__85142_85192__$1);{
var G__85194 = cljs.core.chunk_rest.call(null,seq__85142_85192__$1);
var G__85195 = c__8957__auto___85193;
var G__85196 = cljs.core.count.call(null,c__8957__auto___85193);
var G__85197 = 0;
seq__85142_85158 = G__85194;
chunk__85143_85159 = G__85195;
count__85144_85160 = G__85196;
i__85145_85161 = G__85197;
continue;
}
} else
{var vec__85152_85198 = cljs.core.first.call(null,seq__85142_85192__$1);var k_85199 = cljs.core.nth.call(null,vec__85152_85198,0,null);var v_85200 = cljs.core.nth.call(null,vec__85152_85198,1,null);var G__85153_85201 = k_85199;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__85153_85201))
{var seq__85154_85202 = cljs.core.seq.call(null,v_85200);var chunk__85155_85203 = null;var count__85156_85204 = 0;var i__85157_85205 = 0;while(true){
if((i__85157_85205 < count__85156_85204))
{var c_85206 = cljs.core._nth.call(null,chunk__85155_85203,i__85157_85205);dommy.attrs.add_class_BANG_.call(null,n,c_85206);
{
var G__85207 = seq__85154_85202;
var G__85208 = chunk__85155_85203;
var G__85209 = count__85156_85204;
var G__85210 = (i__85157_85205 + 1);
seq__85154_85202 = G__85207;
chunk__85155_85203 = G__85208;
count__85156_85204 = G__85209;
i__85157_85205 = G__85210;
continue;
}
} else
{var temp__4092__auto___85211__$1 = cljs.core.seq.call(null,seq__85154_85202);if(temp__4092__auto___85211__$1)
{var seq__85154_85212__$1 = temp__4092__auto___85211__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85154_85212__$1))
{var c__8957__auto___85213 = cljs.core.chunk_first.call(null,seq__85154_85212__$1);{
var G__85214 = cljs.core.chunk_rest.call(null,seq__85154_85212__$1);
var G__85215 = c__8957__auto___85213;
var G__85216 = cljs.core.count.call(null,c__8957__auto___85213);
var G__85217 = 0;
seq__85154_85202 = G__85214;
chunk__85155_85203 = G__85215;
count__85156_85204 = G__85216;
i__85157_85205 = G__85217;
continue;
}
} else
{var c_85218 = cljs.core.first.call(null,seq__85154_85212__$1);dommy.attrs.add_class_BANG_.call(null,n,c_85218);
{
var G__85219 = cljs.core.next.call(null,seq__85154_85212__$1);
var G__85220 = null;
var G__85221 = 0;
var G__85222 = 0;
seq__85154_85202 = G__85219;
chunk__85155_85203 = G__85220;
count__85156_85204 = G__85221;
i__85157_85205 = G__85222;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__85153_85201))
{dommy.attrs.add_class_BANG_.call(null,n,v_85200);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_85199,v_85200);
} else
{}
}
}
{
var G__85223 = cljs.core.next.call(null,seq__85142_85192__$1);
var G__85224 = null;
var G__85225 = 0;
var G__85226 = 0;
seq__85142_85158 = G__85223;
chunk__85143_85159 = G__85224;
count__85144_85160 = G__85225;
i__85145_85161 = G__85226;
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
}catch (e85227){if((e85227 instanceof ReferenceError))
{var __85228 = e85227;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85227;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__85230 = data;if(G__85230)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__85230.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__85230.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85230);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__85230);
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