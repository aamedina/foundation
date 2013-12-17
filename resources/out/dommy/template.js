// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj331260 = {};return obj331260;
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
{var str_331263 = node_str.substring(base_idx);while(true){
var next_idx_331264 = dommy.template.next_css_index.call(null,str_331263,1);var frag_331265 = (((next_idx_331264 >= 0))?str_331263.substring(0,next_idx_331264):str_331263);var G__331262_331266 = frag_331265.charAt(0);if(cljs.core._EQ_.call(null,"#",G__331262_331266))
{node.setAttribute("id",frag_331265.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__331262_331266))
{dommy.attrs.add_class_BANG_.call(null,node,frag_331265.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_331265.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_331264 >= 0))
{{
var G__331267 = str_331263.substring(next_idx_331264);
str_331263 = G__331267;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__331273 = data;if(G__331273)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__331273.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__331273.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331273);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__331274_331278 = cljs.core.seq.call(null,data);var chunk__331275_331279 = null;var count__331276_331280 = 0;var i__331277_331281 = 0;while(true){
if((i__331277_331281 < count__331276_331280))
{var child_331282 = cljs.core._nth.call(null,chunk__331275_331279,i__331277_331281);__GT_document_fragment.call(null,result_frag,child_331282);
{
var G__331283 = seq__331274_331278;
var G__331284 = chunk__331275_331279;
var G__331285 = count__331276_331280;
var G__331286 = (i__331277_331281 + 1);
seq__331274_331278 = G__331283;
chunk__331275_331279 = G__331284;
count__331276_331280 = G__331285;
i__331277_331281 = G__331286;
continue;
}
} else
{var temp__4092__auto___331287 = cljs.core.seq.call(null,seq__331274_331278);if(temp__4092__auto___331287)
{var seq__331274_331288__$1 = temp__4092__auto___331287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331274_331288__$1))
{var c__14547__auto___331289 = cljs.core.chunk_first.call(null,seq__331274_331288__$1);{
var G__331290 = cljs.core.chunk_rest.call(null,seq__331274_331288__$1);
var G__331291 = c__14547__auto___331289;
var G__331292 = cljs.core.count.call(null,c__14547__auto___331289);
var G__331293 = 0;
seq__331274_331278 = G__331290;
chunk__331275_331279 = G__331291;
count__331276_331280 = G__331292;
i__331277_331281 = G__331293;
continue;
}
} else
{var child_331294 = cljs.core.first.call(null,seq__331274_331288__$1);__GT_document_fragment.call(null,result_frag,child_331294);
{
var G__331295 = cljs.core.next.call(null,seq__331274_331288__$1);
var G__331296 = null;
var G__331297 = 0;
var G__331298 = 0;
seq__331274_331278 = G__331295;
chunk__331275_331279 = G__331296;
count__331276_331280 = G__331297;
i__331277_331281 = G__331298;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__331300 = data;if(G__331300)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__331300.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__331300.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331300);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331300);
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
dommy.template.compound_element = (function compound_element(p__331301){var vec__331321 = p__331301;var tag_name = cljs.core.nth.call(null,vec__331321,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__331321,1,null);var children = cljs.core.nthnext.call(null,vec__331321,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__331323 = maybe_attrs;if(G__331323)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__331323.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__331323.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331323);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__331324_331340 = cljs.core.seq.call(null,attrs);var chunk__331325_331341 = null;var count__331326_331342 = 0;var i__331327_331343 = 0;while(true){
if((i__331327_331343 < count__331326_331342))
{var vec__331328_331344 = cljs.core._nth.call(null,chunk__331325_331341,i__331327_331343);var k_331345 = cljs.core.nth.call(null,vec__331328_331344,0,null);var v_331346 = cljs.core.nth.call(null,vec__331328_331344,1,null);var G__331329_331347 = k_331345;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__331329_331347))
{var seq__331330_331348 = cljs.core.seq.call(null,v_331346);var chunk__331331_331349 = null;var count__331332_331350 = 0;var i__331333_331351 = 0;while(true){
if((i__331333_331351 < count__331332_331350))
{var c_331352 = cljs.core._nth.call(null,chunk__331331_331349,i__331333_331351);dommy.attrs.add_class_BANG_.call(null,n,c_331352);
{
var G__331353 = seq__331330_331348;
var G__331354 = chunk__331331_331349;
var G__331355 = count__331332_331350;
var G__331356 = (i__331333_331351 + 1);
seq__331330_331348 = G__331353;
chunk__331331_331349 = G__331354;
count__331332_331350 = G__331355;
i__331333_331351 = G__331356;
continue;
}
} else
{var temp__4092__auto___331357 = cljs.core.seq.call(null,seq__331330_331348);if(temp__4092__auto___331357)
{var seq__331330_331358__$1 = temp__4092__auto___331357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331330_331358__$1))
{var c__14547__auto___331359 = cljs.core.chunk_first.call(null,seq__331330_331358__$1);{
var G__331360 = cljs.core.chunk_rest.call(null,seq__331330_331358__$1);
var G__331361 = c__14547__auto___331359;
var G__331362 = cljs.core.count.call(null,c__14547__auto___331359);
var G__331363 = 0;
seq__331330_331348 = G__331360;
chunk__331331_331349 = G__331361;
count__331332_331350 = G__331362;
i__331333_331351 = G__331363;
continue;
}
} else
{var c_331364 = cljs.core.first.call(null,seq__331330_331358__$1);dommy.attrs.add_class_BANG_.call(null,n,c_331364);
{
var G__331365 = cljs.core.next.call(null,seq__331330_331358__$1);
var G__331366 = null;
var G__331367 = 0;
var G__331368 = 0;
seq__331330_331348 = G__331365;
chunk__331331_331349 = G__331366;
count__331332_331350 = G__331367;
i__331333_331351 = G__331368;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__331329_331347))
{dommy.attrs.add_class_BANG_.call(null,n,v_331346);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_331345,v_331346);
} else
{}
}
}
{
var G__331369 = seq__331324_331340;
var G__331370 = chunk__331325_331341;
var G__331371 = count__331326_331342;
var G__331372 = (i__331327_331343 + 1);
seq__331324_331340 = G__331369;
chunk__331325_331341 = G__331370;
count__331326_331342 = G__331371;
i__331327_331343 = G__331372;
continue;
}
} else
{var temp__4092__auto___331373 = cljs.core.seq.call(null,seq__331324_331340);if(temp__4092__auto___331373)
{var seq__331324_331374__$1 = temp__4092__auto___331373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331324_331374__$1))
{var c__14547__auto___331375 = cljs.core.chunk_first.call(null,seq__331324_331374__$1);{
var G__331376 = cljs.core.chunk_rest.call(null,seq__331324_331374__$1);
var G__331377 = c__14547__auto___331375;
var G__331378 = cljs.core.count.call(null,c__14547__auto___331375);
var G__331379 = 0;
seq__331324_331340 = G__331376;
chunk__331325_331341 = G__331377;
count__331326_331342 = G__331378;
i__331327_331343 = G__331379;
continue;
}
} else
{var vec__331334_331380 = cljs.core.first.call(null,seq__331324_331374__$1);var k_331381 = cljs.core.nth.call(null,vec__331334_331380,0,null);var v_331382 = cljs.core.nth.call(null,vec__331334_331380,1,null);var G__331335_331383 = k_331381;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__331335_331383))
{var seq__331336_331384 = cljs.core.seq.call(null,v_331382);var chunk__331337_331385 = null;var count__331338_331386 = 0;var i__331339_331387 = 0;while(true){
if((i__331339_331387 < count__331338_331386))
{var c_331388 = cljs.core._nth.call(null,chunk__331337_331385,i__331339_331387);dommy.attrs.add_class_BANG_.call(null,n,c_331388);
{
var G__331389 = seq__331336_331384;
var G__331390 = chunk__331337_331385;
var G__331391 = count__331338_331386;
var G__331392 = (i__331339_331387 + 1);
seq__331336_331384 = G__331389;
chunk__331337_331385 = G__331390;
count__331338_331386 = G__331391;
i__331339_331387 = G__331392;
continue;
}
} else
{var temp__4092__auto___331393__$1 = cljs.core.seq.call(null,seq__331336_331384);if(temp__4092__auto___331393__$1)
{var seq__331336_331394__$1 = temp__4092__auto___331393__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__331336_331394__$1))
{var c__14547__auto___331395 = cljs.core.chunk_first.call(null,seq__331336_331394__$1);{
var G__331396 = cljs.core.chunk_rest.call(null,seq__331336_331394__$1);
var G__331397 = c__14547__auto___331395;
var G__331398 = cljs.core.count.call(null,c__14547__auto___331395);
var G__331399 = 0;
seq__331336_331384 = G__331396;
chunk__331337_331385 = G__331397;
count__331338_331386 = G__331398;
i__331339_331387 = G__331399;
continue;
}
} else
{var c_331400 = cljs.core.first.call(null,seq__331336_331394__$1);dommy.attrs.add_class_BANG_.call(null,n,c_331400);
{
var G__331401 = cljs.core.next.call(null,seq__331336_331394__$1);
var G__331402 = null;
var G__331403 = 0;
var G__331404 = 0;
seq__331336_331384 = G__331401;
chunk__331337_331385 = G__331402;
count__331338_331386 = G__331403;
i__331339_331387 = G__331404;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__331335_331383))
{dommy.attrs.add_class_BANG_.call(null,n,v_331382);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_331381,v_331382);
} else
{}
}
}
{
var G__331405 = cljs.core.next.call(null,seq__331324_331374__$1);
var G__331406 = null;
var G__331407 = 0;
var G__331408 = 0;
seq__331324_331340 = G__331405;
chunk__331325_331341 = G__331406;
count__331326_331342 = G__331407;
i__331327_331343 = G__331408;
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
}catch (e331409){if((e331409 instanceof ReferenceError))
{var __331410 = e331409;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e331409;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__331412 = data;if(G__331412)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__331412.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__331412.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331412);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__331412);
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