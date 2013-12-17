// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj76188 = {};return obj76188;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7816__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (dommy.template._elem[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (dommy.template._elem["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
{var str_76191 = node_str.substring(base_idx);while(true){
var next_idx_76192 = dommy.template.next_css_index.call(null,str_76191,1);var frag_76193 = (((next_idx_76192 >= 0))?str_76191.substring(0,next_idx_76192):str_76191);var G__76190_76194 = frag_76193.charAt(0);if(cljs.core._EQ_.call(null,"#",G__76190_76194))
{node.setAttribute("id",frag_76193.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__76190_76194))
{dommy.attrs.add_class_BANG_.call(null,node,frag_76193.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_76193.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_76192 >= 0))
{{
var G__76195 = str_76191.substring(next_idx_76192);
str_76191 = G__76195;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__76201 = data;if(G__76201)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__76201.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__76201.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76201);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76201);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__76202_76206 = cljs.core.seq.call(null,data);var chunk__76203_76207 = null;var count__76204_76208 = 0;var i__76205_76209 = 0;while(true){
if((i__76205_76209 < count__76204_76208))
{var child_76210 = cljs.core._nth.call(null,chunk__76203_76207,i__76205_76209);__GT_document_fragment.call(null,result_frag,child_76210);
{
var G__76211 = seq__76202_76206;
var G__76212 = chunk__76203_76207;
var G__76213 = count__76204_76208;
var G__76214 = (i__76205_76209 + 1);
seq__76202_76206 = G__76211;
chunk__76203_76207 = G__76212;
count__76204_76208 = G__76213;
i__76205_76209 = G__76214;
continue;
}
} else
{var temp__4092__auto___76215 = cljs.core.seq.call(null,seq__76202_76206);if(temp__4092__auto___76215)
{var seq__76202_76216__$1 = temp__4092__auto___76215;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76202_76216__$1))
{var c__8552__auto___76217 = cljs.core.chunk_first.call(null,seq__76202_76216__$1);{
var G__76218 = cljs.core.chunk_rest.call(null,seq__76202_76216__$1);
var G__76219 = c__8552__auto___76217;
var G__76220 = cljs.core.count.call(null,c__8552__auto___76217);
var G__76221 = 0;
seq__76202_76206 = G__76218;
chunk__76203_76207 = G__76219;
count__76204_76208 = G__76220;
i__76205_76209 = G__76221;
continue;
}
} else
{var child_76222 = cljs.core.first.call(null,seq__76202_76216__$1);__GT_document_fragment.call(null,result_frag,child_76222);
{
var G__76223 = cljs.core.next.call(null,seq__76202_76216__$1);
var G__76224 = null;
var G__76225 = 0;
var G__76226 = 0;
seq__76202_76206 = G__76223;
chunk__76203_76207 = G__76224;
count__76204_76208 = G__76225;
i__76205_76209 = G__76226;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__76228 = data;if(G__76228)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__76228.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__76228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76228);
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
dommy.template.compound_element = (function compound_element(p__76229){var vec__76249 = p__76229;var tag_name = cljs.core.nth.call(null,vec__76249,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__76249,1,null);var children = cljs.core.nthnext.call(null,vec__76249,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__76251 = maybe_attrs;if(G__76251)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__76251.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__76251.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76251);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76251);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__76252_76268 = cljs.core.seq.call(null,attrs);var chunk__76253_76269 = null;var count__76254_76270 = 0;var i__76255_76271 = 0;while(true){
if((i__76255_76271 < count__76254_76270))
{var vec__76256_76272 = cljs.core._nth.call(null,chunk__76253_76269,i__76255_76271);var k_76273 = cljs.core.nth.call(null,vec__76256_76272,0,null);var v_76274 = cljs.core.nth.call(null,vec__76256_76272,1,null);var G__76257_76275 = k_76273;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__76257_76275))
{var seq__76258_76276 = cljs.core.seq.call(null,v_76274);var chunk__76259_76277 = null;var count__76260_76278 = 0;var i__76261_76279 = 0;while(true){
if((i__76261_76279 < count__76260_76278))
{var c_76280 = cljs.core._nth.call(null,chunk__76259_76277,i__76261_76279);dommy.attrs.add_class_BANG_.call(null,n,c_76280);
{
var G__76281 = seq__76258_76276;
var G__76282 = chunk__76259_76277;
var G__76283 = count__76260_76278;
var G__76284 = (i__76261_76279 + 1);
seq__76258_76276 = G__76281;
chunk__76259_76277 = G__76282;
count__76260_76278 = G__76283;
i__76261_76279 = G__76284;
continue;
}
} else
{var temp__4092__auto___76285 = cljs.core.seq.call(null,seq__76258_76276);if(temp__4092__auto___76285)
{var seq__76258_76286__$1 = temp__4092__auto___76285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76258_76286__$1))
{var c__8552__auto___76287 = cljs.core.chunk_first.call(null,seq__76258_76286__$1);{
var G__76288 = cljs.core.chunk_rest.call(null,seq__76258_76286__$1);
var G__76289 = c__8552__auto___76287;
var G__76290 = cljs.core.count.call(null,c__8552__auto___76287);
var G__76291 = 0;
seq__76258_76276 = G__76288;
chunk__76259_76277 = G__76289;
count__76260_76278 = G__76290;
i__76261_76279 = G__76291;
continue;
}
} else
{var c_76292 = cljs.core.first.call(null,seq__76258_76286__$1);dommy.attrs.add_class_BANG_.call(null,n,c_76292);
{
var G__76293 = cljs.core.next.call(null,seq__76258_76286__$1);
var G__76294 = null;
var G__76295 = 0;
var G__76296 = 0;
seq__76258_76276 = G__76293;
chunk__76259_76277 = G__76294;
count__76260_76278 = G__76295;
i__76261_76279 = G__76296;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__76257_76275))
{dommy.attrs.add_class_BANG_.call(null,n,v_76274);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_76273,v_76274);
} else
{}
}
}
{
var G__76297 = seq__76252_76268;
var G__76298 = chunk__76253_76269;
var G__76299 = count__76254_76270;
var G__76300 = (i__76255_76271 + 1);
seq__76252_76268 = G__76297;
chunk__76253_76269 = G__76298;
count__76254_76270 = G__76299;
i__76255_76271 = G__76300;
continue;
}
} else
{var temp__4092__auto___76301 = cljs.core.seq.call(null,seq__76252_76268);if(temp__4092__auto___76301)
{var seq__76252_76302__$1 = temp__4092__auto___76301;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76252_76302__$1))
{var c__8552__auto___76303 = cljs.core.chunk_first.call(null,seq__76252_76302__$1);{
var G__76304 = cljs.core.chunk_rest.call(null,seq__76252_76302__$1);
var G__76305 = c__8552__auto___76303;
var G__76306 = cljs.core.count.call(null,c__8552__auto___76303);
var G__76307 = 0;
seq__76252_76268 = G__76304;
chunk__76253_76269 = G__76305;
count__76254_76270 = G__76306;
i__76255_76271 = G__76307;
continue;
}
} else
{var vec__76262_76308 = cljs.core.first.call(null,seq__76252_76302__$1);var k_76309 = cljs.core.nth.call(null,vec__76262_76308,0,null);var v_76310 = cljs.core.nth.call(null,vec__76262_76308,1,null);var G__76263_76311 = k_76309;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__76263_76311))
{var seq__76264_76312 = cljs.core.seq.call(null,v_76310);var chunk__76265_76313 = null;var count__76266_76314 = 0;var i__76267_76315 = 0;while(true){
if((i__76267_76315 < count__76266_76314))
{var c_76316 = cljs.core._nth.call(null,chunk__76265_76313,i__76267_76315);dommy.attrs.add_class_BANG_.call(null,n,c_76316);
{
var G__76317 = seq__76264_76312;
var G__76318 = chunk__76265_76313;
var G__76319 = count__76266_76314;
var G__76320 = (i__76267_76315 + 1);
seq__76264_76312 = G__76317;
chunk__76265_76313 = G__76318;
count__76266_76314 = G__76319;
i__76267_76315 = G__76320;
continue;
}
} else
{var temp__4092__auto___76321__$1 = cljs.core.seq.call(null,seq__76264_76312);if(temp__4092__auto___76321__$1)
{var seq__76264_76322__$1 = temp__4092__auto___76321__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__76264_76322__$1))
{var c__8552__auto___76323 = cljs.core.chunk_first.call(null,seq__76264_76322__$1);{
var G__76324 = cljs.core.chunk_rest.call(null,seq__76264_76322__$1);
var G__76325 = c__8552__auto___76323;
var G__76326 = cljs.core.count.call(null,c__8552__auto___76323);
var G__76327 = 0;
seq__76264_76312 = G__76324;
chunk__76265_76313 = G__76325;
count__76266_76314 = G__76326;
i__76267_76315 = G__76327;
continue;
}
} else
{var c_76328 = cljs.core.first.call(null,seq__76264_76322__$1);dommy.attrs.add_class_BANG_.call(null,n,c_76328);
{
var G__76329 = cljs.core.next.call(null,seq__76264_76322__$1);
var G__76330 = null;
var G__76331 = 0;
var G__76332 = 0;
seq__76264_76312 = G__76329;
chunk__76265_76313 = G__76330;
count__76266_76314 = G__76331;
i__76267_76315 = G__76332;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__76263_76311))
{dommy.attrs.add_class_BANG_.call(null,n,v_76310);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_76309,v_76310);
} else
{}
}
}
{
var G__76333 = cljs.core.next.call(null,seq__76252_76302__$1);
var G__76334 = null;
var G__76335 = 0;
var G__76336 = 0;
seq__76252_76268 = G__76333;
chunk__76253_76269 = G__76334;
count__76254_76270 = G__76335;
i__76255_76271 = G__76336;
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
}catch (e76337){if((e76337 instanceof ReferenceError))
{var __76338 = e76337;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e76337;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__76340 = data;if(G__76340)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__76340.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__76340.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76340);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__76340);
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
