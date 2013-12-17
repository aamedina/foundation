// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj98278 = {};return obj98278;
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
{var str_98281 = node_str.substring(base_idx);while(true){
var next_idx_98282 = dommy.template.next_css_index.call(null,str_98281,1);var frag_98283 = (((next_idx_98282 >= 0))?str_98281.substring(0,next_idx_98282):str_98281);var G__98280_98284 = frag_98283.charAt(0);if(cljs.core._EQ_.call(null,"#",G__98280_98284))
{node.setAttribute("id",frag_98283.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__98280_98284))
{dommy.attrs.add_class_BANG_.call(null,node,frag_98283.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_98283.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_98282 >= 0))
{{
var G__98285 = str_98281.substring(next_idx_98282);
str_98281 = G__98285;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__98291 = data;if(G__98291)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__98291.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__98291.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98291);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__98292_98296 = cljs.core.seq.call(null,data);var chunk__98293_98297 = null;var count__98294_98298 = 0;var i__98295_98299 = 0;while(true){
if((i__98295_98299 < count__98294_98298))
{var child_98300 = cljs.core._nth.call(null,chunk__98293_98297,i__98295_98299);__GT_document_fragment.call(null,result_frag,child_98300);
{
var G__98301 = seq__98292_98296;
var G__98302 = chunk__98293_98297;
var G__98303 = count__98294_98298;
var G__98304 = (i__98295_98299 + 1);
seq__98292_98296 = G__98301;
chunk__98293_98297 = G__98302;
count__98294_98298 = G__98303;
i__98295_98299 = G__98304;
continue;
}
} else
{var temp__4092__auto___98305 = cljs.core.seq.call(null,seq__98292_98296);if(temp__4092__auto___98305)
{var seq__98292_98306__$1 = temp__4092__auto___98305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98292_98306__$1))
{var c__8552__auto___98307 = cljs.core.chunk_first.call(null,seq__98292_98306__$1);{
var G__98308 = cljs.core.chunk_rest.call(null,seq__98292_98306__$1);
var G__98309 = c__8552__auto___98307;
var G__98310 = cljs.core.count.call(null,c__8552__auto___98307);
var G__98311 = 0;
seq__98292_98296 = G__98308;
chunk__98293_98297 = G__98309;
count__98294_98298 = G__98310;
i__98295_98299 = G__98311;
continue;
}
} else
{var child_98312 = cljs.core.first.call(null,seq__98292_98306__$1);__GT_document_fragment.call(null,result_frag,child_98312);
{
var G__98313 = cljs.core.next.call(null,seq__98292_98306__$1);
var G__98314 = null;
var G__98315 = 0;
var G__98316 = 0;
seq__98292_98296 = G__98313;
chunk__98293_98297 = G__98314;
count__98294_98298 = G__98315;
i__98295_98299 = G__98316;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__98318 = data;if(G__98318)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__98318.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__98318.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98318);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98318);
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
dommy.template.compound_element = (function compound_element(p__98319){var vec__98339 = p__98319;var tag_name = cljs.core.nth.call(null,vec__98339,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__98339,1,null);var children = cljs.core.nthnext.call(null,vec__98339,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__98341 = maybe_attrs;if(G__98341)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__98341.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__98341.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98341);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__98342_98358 = cljs.core.seq.call(null,attrs);var chunk__98343_98359 = null;var count__98344_98360 = 0;var i__98345_98361 = 0;while(true){
if((i__98345_98361 < count__98344_98360))
{var vec__98346_98362 = cljs.core._nth.call(null,chunk__98343_98359,i__98345_98361);var k_98363 = cljs.core.nth.call(null,vec__98346_98362,0,null);var v_98364 = cljs.core.nth.call(null,vec__98346_98362,1,null);var G__98347_98365 = k_98363;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__98347_98365))
{var seq__98348_98366 = cljs.core.seq.call(null,v_98364);var chunk__98349_98367 = null;var count__98350_98368 = 0;var i__98351_98369 = 0;while(true){
if((i__98351_98369 < count__98350_98368))
{var c_98370 = cljs.core._nth.call(null,chunk__98349_98367,i__98351_98369);dommy.attrs.add_class_BANG_.call(null,n,c_98370);
{
var G__98371 = seq__98348_98366;
var G__98372 = chunk__98349_98367;
var G__98373 = count__98350_98368;
var G__98374 = (i__98351_98369 + 1);
seq__98348_98366 = G__98371;
chunk__98349_98367 = G__98372;
count__98350_98368 = G__98373;
i__98351_98369 = G__98374;
continue;
}
} else
{var temp__4092__auto___98375 = cljs.core.seq.call(null,seq__98348_98366);if(temp__4092__auto___98375)
{var seq__98348_98376__$1 = temp__4092__auto___98375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98348_98376__$1))
{var c__8552__auto___98377 = cljs.core.chunk_first.call(null,seq__98348_98376__$1);{
var G__98378 = cljs.core.chunk_rest.call(null,seq__98348_98376__$1);
var G__98379 = c__8552__auto___98377;
var G__98380 = cljs.core.count.call(null,c__8552__auto___98377);
var G__98381 = 0;
seq__98348_98366 = G__98378;
chunk__98349_98367 = G__98379;
count__98350_98368 = G__98380;
i__98351_98369 = G__98381;
continue;
}
} else
{var c_98382 = cljs.core.first.call(null,seq__98348_98376__$1);dommy.attrs.add_class_BANG_.call(null,n,c_98382);
{
var G__98383 = cljs.core.next.call(null,seq__98348_98376__$1);
var G__98384 = null;
var G__98385 = 0;
var G__98386 = 0;
seq__98348_98366 = G__98383;
chunk__98349_98367 = G__98384;
count__98350_98368 = G__98385;
i__98351_98369 = G__98386;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__98347_98365))
{dommy.attrs.add_class_BANG_.call(null,n,v_98364);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_98363,v_98364);
} else
{}
}
}
{
var G__98387 = seq__98342_98358;
var G__98388 = chunk__98343_98359;
var G__98389 = count__98344_98360;
var G__98390 = (i__98345_98361 + 1);
seq__98342_98358 = G__98387;
chunk__98343_98359 = G__98388;
count__98344_98360 = G__98389;
i__98345_98361 = G__98390;
continue;
}
} else
{var temp__4092__auto___98391 = cljs.core.seq.call(null,seq__98342_98358);if(temp__4092__auto___98391)
{var seq__98342_98392__$1 = temp__4092__auto___98391;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98342_98392__$1))
{var c__8552__auto___98393 = cljs.core.chunk_first.call(null,seq__98342_98392__$1);{
var G__98394 = cljs.core.chunk_rest.call(null,seq__98342_98392__$1);
var G__98395 = c__8552__auto___98393;
var G__98396 = cljs.core.count.call(null,c__8552__auto___98393);
var G__98397 = 0;
seq__98342_98358 = G__98394;
chunk__98343_98359 = G__98395;
count__98344_98360 = G__98396;
i__98345_98361 = G__98397;
continue;
}
} else
{var vec__98352_98398 = cljs.core.first.call(null,seq__98342_98392__$1);var k_98399 = cljs.core.nth.call(null,vec__98352_98398,0,null);var v_98400 = cljs.core.nth.call(null,vec__98352_98398,1,null);var G__98353_98401 = k_98399;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__98353_98401))
{var seq__98354_98402 = cljs.core.seq.call(null,v_98400);var chunk__98355_98403 = null;var count__98356_98404 = 0;var i__98357_98405 = 0;while(true){
if((i__98357_98405 < count__98356_98404))
{var c_98406 = cljs.core._nth.call(null,chunk__98355_98403,i__98357_98405);dommy.attrs.add_class_BANG_.call(null,n,c_98406);
{
var G__98407 = seq__98354_98402;
var G__98408 = chunk__98355_98403;
var G__98409 = count__98356_98404;
var G__98410 = (i__98357_98405 + 1);
seq__98354_98402 = G__98407;
chunk__98355_98403 = G__98408;
count__98356_98404 = G__98409;
i__98357_98405 = G__98410;
continue;
}
} else
{var temp__4092__auto___98411__$1 = cljs.core.seq.call(null,seq__98354_98402);if(temp__4092__auto___98411__$1)
{var seq__98354_98412__$1 = temp__4092__auto___98411__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__98354_98412__$1))
{var c__8552__auto___98413 = cljs.core.chunk_first.call(null,seq__98354_98412__$1);{
var G__98414 = cljs.core.chunk_rest.call(null,seq__98354_98412__$1);
var G__98415 = c__8552__auto___98413;
var G__98416 = cljs.core.count.call(null,c__8552__auto___98413);
var G__98417 = 0;
seq__98354_98402 = G__98414;
chunk__98355_98403 = G__98415;
count__98356_98404 = G__98416;
i__98357_98405 = G__98417;
continue;
}
} else
{var c_98418 = cljs.core.first.call(null,seq__98354_98412__$1);dommy.attrs.add_class_BANG_.call(null,n,c_98418);
{
var G__98419 = cljs.core.next.call(null,seq__98354_98412__$1);
var G__98420 = null;
var G__98421 = 0;
var G__98422 = 0;
seq__98354_98402 = G__98419;
chunk__98355_98403 = G__98420;
count__98356_98404 = G__98421;
i__98357_98405 = G__98422;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__98353_98401))
{dommy.attrs.add_class_BANG_.call(null,n,v_98400);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_98399,v_98400);
} else
{}
}
}
{
var G__98423 = cljs.core.next.call(null,seq__98342_98392__$1);
var G__98424 = null;
var G__98425 = 0;
var G__98426 = 0;
seq__98342_98358 = G__98423;
chunk__98343_98359 = G__98424;
count__98344_98360 = G__98425;
i__98345_98361 = G__98426;
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
}catch (e98427){if((e98427 instanceof ReferenceError))
{var __98428 = e98427;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e98427;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__98430 = data;if(G__98430)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__98430.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__98430.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98430);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__98430);
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
