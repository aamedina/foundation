// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj274177 = {};return obj274177;
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
{var str_274180 = node_str.substring(base_idx);while(true){
var next_idx_274181 = dommy.template.next_css_index.call(null,str_274180,1);var frag_274182 = (((next_idx_274181 >= 0))?str_274180.substring(0,next_idx_274181):str_274180);var G__274179_274183 = frag_274182.charAt(0);if(cljs.core._EQ_.call(null,"#",G__274179_274183))
{node.setAttribute("id",frag_274182.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__274179_274183))
{dommy.attrs.add_class_BANG_.call(null,node,frag_274182.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_274182.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_274181 >= 0))
{{
var G__274184 = str_274180.substring(next_idx_274181);
str_274180 = G__274184;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__274190 = data;if(G__274190)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__274190.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__274190.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274190);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__274191_274195 = cljs.core.seq.call(null,data);var chunk__274192_274196 = null;var count__274193_274197 = 0;var i__274194_274198 = 0;while(true){
if((i__274194_274198 < count__274193_274197))
{var child_274199 = cljs.core._nth.call(null,chunk__274192_274196,i__274194_274198);__GT_document_fragment.call(null,result_frag,child_274199);
{
var G__274200 = seq__274191_274195;
var G__274201 = chunk__274192_274196;
var G__274202 = count__274193_274197;
var G__274203 = (i__274194_274198 + 1);
seq__274191_274195 = G__274200;
chunk__274192_274196 = G__274201;
count__274193_274197 = G__274202;
i__274194_274198 = G__274203;
continue;
}
} else
{var temp__4092__auto___274204 = cljs.core.seq.call(null,seq__274191_274195);if(temp__4092__auto___274204)
{var seq__274191_274205__$1 = temp__4092__auto___274204;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274191_274205__$1))
{var c__8952__auto___274206 = cljs.core.chunk_first.call(null,seq__274191_274205__$1);{
var G__274207 = cljs.core.chunk_rest.call(null,seq__274191_274205__$1);
var G__274208 = c__8952__auto___274206;
var G__274209 = cljs.core.count.call(null,c__8952__auto___274206);
var G__274210 = 0;
seq__274191_274195 = G__274207;
chunk__274192_274196 = G__274208;
count__274193_274197 = G__274209;
i__274194_274198 = G__274210;
continue;
}
} else
{var child_274211 = cljs.core.first.call(null,seq__274191_274205__$1);__GT_document_fragment.call(null,result_frag,child_274211);
{
var G__274212 = cljs.core.next.call(null,seq__274191_274205__$1);
var G__274213 = null;
var G__274214 = 0;
var G__274215 = 0;
seq__274191_274195 = G__274212;
chunk__274192_274196 = G__274213;
count__274193_274197 = G__274214;
i__274194_274198 = G__274215;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__274217 = data;if(G__274217)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__274217.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__274217.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274217);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274217);
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
dommy.template.compound_element = (function compound_element(p__274218){var vec__274238 = p__274218;var tag_name = cljs.core.nth.call(null,vec__274238,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__274238,1,null);var children = cljs.core.nthnext.call(null,vec__274238,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__274240 = maybe_attrs;if(G__274240)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__274240.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__274240.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274240);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274240);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__274241_274257 = cljs.core.seq.call(null,attrs);var chunk__274242_274258 = null;var count__274243_274259 = 0;var i__274244_274260 = 0;while(true){
if((i__274244_274260 < count__274243_274259))
{var vec__274245_274261 = cljs.core._nth.call(null,chunk__274242_274258,i__274244_274260);var k_274262 = cljs.core.nth.call(null,vec__274245_274261,0,null);var v_274263 = cljs.core.nth.call(null,vec__274245_274261,1,null);var G__274246_274264 = k_274262;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__274246_274264))
{var seq__274247_274265 = cljs.core.seq.call(null,v_274263);var chunk__274248_274266 = null;var count__274249_274267 = 0;var i__274250_274268 = 0;while(true){
if((i__274250_274268 < count__274249_274267))
{var c_274269 = cljs.core._nth.call(null,chunk__274248_274266,i__274250_274268);dommy.attrs.add_class_BANG_.call(null,n,c_274269);
{
var G__274270 = seq__274247_274265;
var G__274271 = chunk__274248_274266;
var G__274272 = count__274249_274267;
var G__274273 = (i__274250_274268 + 1);
seq__274247_274265 = G__274270;
chunk__274248_274266 = G__274271;
count__274249_274267 = G__274272;
i__274250_274268 = G__274273;
continue;
}
} else
{var temp__4092__auto___274274 = cljs.core.seq.call(null,seq__274247_274265);if(temp__4092__auto___274274)
{var seq__274247_274275__$1 = temp__4092__auto___274274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274247_274275__$1))
{var c__8952__auto___274276 = cljs.core.chunk_first.call(null,seq__274247_274275__$1);{
var G__274277 = cljs.core.chunk_rest.call(null,seq__274247_274275__$1);
var G__274278 = c__8952__auto___274276;
var G__274279 = cljs.core.count.call(null,c__8952__auto___274276);
var G__274280 = 0;
seq__274247_274265 = G__274277;
chunk__274248_274266 = G__274278;
count__274249_274267 = G__274279;
i__274250_274268 = G__274280;
continue;
}
} else
{var c_274281 = cljs.core.first.call(null,seq__274247_274275__$1);dommy.attrs.add_class_BANG_.call(null,n,c_274281);
{
var G__274282 = cljs.core.next.call(null,seq__274247_274275__$1);
var G__274283 = null;
var G__274284 = 0;
var G__274285 = 0;
seq__274247_274265 = G__274282;
chunk__274248_274266 = G__274283;
count__274249_274267 = G__274284;
i__274250_274268 = G__274285;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__274246_274264))
{dommy.attrs.add_class_BANG_.call(null,n,v_274263);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_274262,v_274263);
} else
{}
}
}
{
var G__274286 = seq__274241_274257;
var G__274287 = chunk__274242_274258;
var G__274288 = count__274243_274259;
var G__274289 = (i__274244_274260 + 1);
seq__274241_274257 = G__274286;
chunk__274242_274258 = G__274287;
count__274243_274259 = G__274288;
i__274244_274260 = G__274289;
continue;
}
} else
{var temp__4092__auto___274290 = cljs.core.seq.call(null,seq__274241_274257);if(temp__4092__auto___274290)
{var seq__274241_274291__$1 = temp__4092__auto___274290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274241_274291__$1))
{var c__8952__auto___274292 = cljs.core.chunk_first.call(null,seq__274241_274291__$1);{
var G__274293 = cljs.core.chunk_rest.call(null,seq__274241_274291__$1);
var G__274294 = c__8952__auto___274292;
var G__274295 = cljs.core.count.call(null,c__8952__auto___274292);
var G__274296 = 0;
seq__274241_274257 = G__274293;
chunk__274242_274258 = G__274294;
count__274243_274259 = G__274295;
i__274244_274260 = G__274296;
continue;
}
} else
{var vec__274251_274297 = cljs.core.first.call(null,seq__274241_274291__$1);var k_274298 = cljs.core.nth.call(null,vec__274251_274297,0,null);var v_274299 = cljs.core.nth.call(null,vec__274251_274297,1,null);var G__274252_274300 = k_274298;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__274252_274300))
{var seq__274253_274301 = cljs.core.seq.call(null,v_274299);var chunk__274254_274302 = null;var count__274255_274303 = 0;var i__274256_274304 = 0;while(true){
if((i__274256_274304 < count__274255_274303))
{var c_274305 = cljs.core._nth.call(null,chunk__274254_274302,i__274256_274304);dommy.attrs.add_class_BANG_.call(null,n,c_274305);
{
var G__274306 = seq__274253_274301;
var G__274307 = chunk__274254_274302;
var G__274308 = count__274255_274303;
var G__274309 = (i__274256_274304 + 1);
seq__274253_274301 = G__274306;
chunk__274254_274302 = G__274307;
count__274255_274303 = G__274308;
i__274256_274304 = G__274309;
continue;
}
} else
{var temp__4092__auto___274310__$1 = cljs.core.seq.call(null,seq__274253_274301);if(temp__4092__auto___274310__$1)
{var seq__274253_274311__$1 = temp__4092__auto___274310__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__274253_274311__$1))
{var c__8952__auto___274312 = cljs.core.chunk_first.call(null,seq__274253_274311__$1);{
var G__274313 = cljs.core.chunk_rest.call(null,seq__274253_274311__$1);
var G__274314 = c__8952__auto___274312;
var G__274315 = cljs.core.count.call(null,c__8952__auto___274312);
var G__274316 = 0;
seq__274253_274301 = G__274313;
chunk__274254_274302 = G__274314;
count__274255_274303 = G__274315;
i__274256_274304 = G__274316;
continue;
}
} else
{var c_274317 = cljs.core.first.call(null,seq__274253_274311__$1);dommy.attrs.add_class_BANG_.call(null,n,c_274317);
{
var G__274318 = cljs.core.next.call(null,seq__274253_274311__$1);
var G__274319 = null;
var G__274320 = 0;
var G__274321 = 0;
seq__274253_274301 = G__274318;
chunk__274254_274302 = G__274319;
count__274255_274303 = G__274320;
i__274256_274304 = G__274321;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__274252_274300))
{dommy.attrs.add_class_BANG_.call(null,n,v_274299);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_274298,v_274299);
} else
{}
}
}
{
var G__274322 = cljs.core.next.call(null,seq__274241_274291__$1);
var G__274323 = null;
var G__274324 = 0;
var G__274325 = 0;
seq__274241_274257 = G__274322;
chunk__274242_274258 = G__274323;
count__274243_274259 = G__274324;
i__274244_274260 = G__274325;
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
}catch (e274326){if((e274326 instanceof ReferenceError))
{var __274327 = e274326;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e274326;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__274329 = data;if(G__274329)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__274329.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__274329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__274329);
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