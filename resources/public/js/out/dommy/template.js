// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj45253 = {};return obj45253;
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
{var str_45256 = node_str.substring(base_idx);while(true){
var next_idx_45257 = dommy.template.next_css_index.call(null,str_45256,1);var frag_45258 = (((next_idx_45257 >= 0))?str_45256.substring(0,next_idx_45257):str_45256);var G__45255_45259 = frag_45258.charAt(0);if(cljs.core._EQ_.call(null,"#",G__45255_45259))
{node.setAttribute("id",frag_45258.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__45255_45259))
{dommy.attrs.add_class_BANG_.call(null,node,frag_45258.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_45258.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_45257 >= 0))
{{
var G__45260 = str_45256.substring(next_idx_45257);
str_45256 = G__45260;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__45266 = data;if(G__45266)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__45266.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45266.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45266);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45266);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__45267_45271 = cljs.core.seq.call(null,data);var chunk__45268_45272 = null;var count__45269_45273 = 0;var i__45270_45274 = 0;while(true){
if((i__45270_45274 < count__45269_45273))
{var child_45275 = cljs.core._nth.call(null,chunk__45268_45272,i__45270_45274);__GT_document_fragment.call(null,result_frag,child_45275);
{
var G__45276 = seq__45267_45271;
var G__45277 = chunk__45268_45272;
var G__45278 = count__45269_45273;
var G__45279 = (i__45270_45274 + 1);
seq__45267_45271 = G__45276;
chunk__45268_45272 = G__45277;
count__45269_45273 = G__45278;
i__45270_45274 = G__45279;
continue;
}
} else
{var temp__4092__auto___45280 = cljs.core.seq.call(null,seq__45267_45271);if(temp__4092__auto___45280)
{var seq__45267_45281__$1 = temp__4092__auto___45280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45267_45281__$1))
{var c__8927__auto___45282 = cljs.core.chunk_first.call(null,seq__45267_45281__$1);{
var G__45283 = cljs.core.chunk_rest.call(null,seq__45267_45281__$1);
var G__45284 = c__8927__auto___45282;
var G__45285 = cljs.core.count.call(null,c__8927__auto___45282);
var G__45286 = 0;
seq__45267_45271 = G__45283;
chunk__45268_45272 = G__45284;
count__45269_45273 = G__45285;
i__45270_45274 = G__45286;
continue;
}
} else
{var child_45287 = cljs.core.first.call(null,seq__45267_45281__$1);__GT_document_fragment.call(null,result_frag,child_45287);
{
var G__45288 = cljs.core.next.call(null,seq__45267_45281__$1);
var G__45289 = null;
var G__45290 = 0;
var G__45291 = 0;
seq__45267_45271 = G__45288;
chunk__45268_45272 = G__45289;
count__45269_45273 = G__45290;
i__45270_45274 = G__45291;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__45293 = data;if(G__45293)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__45293.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45293.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45293);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45293);
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
dommy.template.compound_element = (function compound_element(p__45294){var vec__45314 = p__45294;var tag_name = cljs.core.nth.call(null,vec__45314,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__45314,1,null);var children = cljs.core.nthnext.call(null,vec__45314,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__45316 = maybe_attrs;if(G__45316)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__45316.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45316.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45316);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45316);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__45317_45333 = cljs.core.seq.call(null,attrs);var chunk__45318_45334 = null;var count__45319_45335 = 0;var i__45320_45336 = 0;while(true){
if((i__45320_45336 < count__45319_45335))
{var vec__45321_45337 = cljs.core._nth.call(null,chunk__45318_45334,i__45320_45336);var k_45338 = cljs.core.nth.call(null,vec__45321_45337,0,null);var v_45339 = cljs.core.nth.call(null,vec__45321_45337,1,null);var G__45322_45340 = k_45338;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45322_45340))
{var seq__45323_45341 = cljs.core.seq.call(null,v_45339);var chunk__45324_45342 = null;var count__45325_45343 = 0;var i__45326_45344 = 0;while(true){
if((i__45326_45344 < count__45325_45343))
{var c_45345 = cljs.core._nth.call(null,chunk__45324_45342,i__45326_45344);dommy.attrs.add_class_BANG_.call(null,n,c_45345);
{
var G__45346 = seq__45323_45341;
var G__45347 = chunk__45324_45342;
var G__45348 = count__45325_45343;
var G__45349 = (i__45326_45344 + 1);
seq__45323_45341 = G__45346;
chunk__45324_45342 = G__45347;
count__45325_45343 = G__45348;
i__45326_45344 = G__45349;
continue;
}
} else
{var temp__4092__auto___45350 = cljs.core.seq.call(null,seq__45323_45341);if(temp__4092__auto___45350)
{var seq__45323_45351__$1 = temp__4092__auto___45350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45323_45351__$1))
{var c__8927__auto___45352 = cljs.core.chunk_first.call(null,seq__45323_45351__$1);{
var G__45353 = cljs.core.chunk_rest.call(null,seq__45323_45351__$1);
var G__45354 = c__8927__auto___45352;
var G__45355 = cljs.core.count.call(null,c__8927__auto___45352);
var G__45356 = 0;
seq__45323_45341 = G__45353;
chunk__45324_45342 = G__45354;
count__45325_45343 = G__45355;
i__45326_45344 = G__45356;
continue;
}
} else
{var c_45357 = cljs.core.first.call(null,seq__45323_45351__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45357);
{
var G__45358 = cljs.core.next.call(null,seq__45323_45351__$1);
var G__45359 = null;
var G__45360 = 0;
var G__45361 = 0;
seq__45323_45341 = G__45358;
chunk__45324_45342 = G__45359;
count__45325_45343 = G__45360;
i__45326_45344 = G__45361;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45322_45340))
{dommy.attrs.add_class_BANG_.call(null,n,v_45339);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45338,v_45339);
} else
{}
}
}
{
var G__45362 = seq__45317_45333;
var G__45363 = chunk__45318_45334;
var G__45364 = count__45319_45335;
var G__45365 = (i__45320_45336 + 1);
seq__45317_45333 = G__45362;
chunk__45318_45334 = G__45363;
count__45319_45335 = G__45364;
i__45320_45336 = G__45365;
continue;
}
} else
{var temp__4092__auto___45366 = cljs.core.seq.call(null,seq__45317_45333);if(temp__4092__auto___45366)
{var seq__45317_45367__$1 = temp__4092__auto___45366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45317_45367__$1))
{var c__8927__auto___45368 = cljs.core.chunk_first.call(null,seq__45317_45367__$1);{
var G__45369 = cljs.core.chunk_rest.call(null,seq__45317_45367__$1);
var G__45370 = c__8927__auto___45368;
var G__45371 = cljs.core.count.call(null,c__8927__auto___45368);
var G__45372 = 0;
seq__45317_45333 = G__45369;
chunk__45318_45334 = G__45370;
count__45319_45335 = G__45371;
i__45320_45336 = G__45372;
continue;
}
} else
{var vec__45327_45373 = cljs.core.first.call(null,seq__45317_45367__$1);var k_45374 = cljs.core.nth.call(null,vec__45327_45373,0,null);var v_45375 = cljs.core.nth.call(null,vec__45327_45373,1,null);var G__45328_45376 = k_45374;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45328_45376))
{var seq__45329_45377 = cljs.core.seq.call(null,v_45375);var chunk__45330_45378 = null;var count__45331_45379 = 0;var i__45332_45380 = 0;while(true){
if((i__45332_45380 < count__45331_45379))
{var c_45381 = cljs.core._nth.call(null,chunk__45330_45378,i__45332_45380);dommy.attrs.add_class_BANG_.call(null,n,c_45381);
{
var G__45382 = seq__45329_45377;
var G__45383 = chunk__45330_45378;
var G__45384 = count__45331_45379;
var G__45385 = (i__45332_45380 + 1);
seq__45329_45377 = G__45382;
chunk__45330_45378 = G__45383;
count__45331_45379 = G__45384;
i__45332_45380 = G__45385;
continue;
}
} else
{var temp__4092__auto___45386__$1 = cljs.core.seq.call(null,seq__45329_45377);if(temp__4092__auto___45386__$1)
{var seq__45329_45387__$1 = temp__4092__auto___45386__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45329_45387__$1))
{var c__8927__auto___45388 = cljs.core.chunk_first.call(null,seq__45329_45387__$1);{
var G__45389 = cljs.core.chunk_rest.call(null,seq__45329_45387__$1);
var G__45390 = c__8927__auto___45388;
var G__45391 = cljs.core.count.call(null,c__8927__auto___45388);
var G__45392 = 0;
seq__45329_45377 = G__45389;
chunk__45330_45378 = G__45390;
count__45331_45379 = G__45391;
i__45332_45380 = G__45392;
continue;
}
} else
{var c_45393 = cljs.core.first.call(null,seq__45329_45387__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45393);
{
var G__45394 = cljs.core.next.call(null,seq__45329_45387__$1);
var G__45395 = null;
var G__45396 = 0;
var G__45397 = 0;
seq__45329_45377 = G__45394;
chunk__45330_45378 = G__45395;
count__45331_45379 = G__45396;
i__45332_45380 = G__45397;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45328_45376))
{dommy.attrs.add_class_BANG_.call(null,n,v_45375);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45374,v_45375);
} else
{}
}
}
{
var G__45398 = cljs.core.next.call(null,seq__45317_45367__$1);
var G__45399 = null;
var G__45400 = 0;
var G__45401 = 0;
seq__45317_45333 = G__45398;
chunk__45318_45334 = G__45399;
count__45319_45335 = G__45400;
i__45320_45336 = G__45401;
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
}catch (e45402){if((e45402 instanceof ReferenceError))
{var __45403 = e45402;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45402;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__45405 = data;if(G__45405)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__45405.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45405.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45405);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45405);
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