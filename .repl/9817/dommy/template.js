// Compiled by ClojureScript 0.0-2030
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = cljs.core.PersistentHashSet.fromArray(["svg",null,"line",null], true);
dommy.template.PElement = {};
dommy.template._elem = (function _elem(this$){if((function (){var and__7629__auto__ = this$;if(and__7629__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7629__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8234__auto__ = (((this$ == null))?null:this$);return (function (){var or__7638__auto__ = (dommy.template._elem[goog.typeOf(x__8234__auto__)]);if(or__7638__auto__)
{return or__7638__auto__;
} else
{var or__7638__auto____$1 = (dommy.template._elem["_"]);if(or__7638__auto____$1)
{return or__7638__auto____$1;
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
{var str_21331 = node_str.substring(base_idx);while(true){
var next_idx_21332 = dommy.template.next_css_index.call(null,str_21331,1);var frag_21333 = (((next_idx_21332 >= 0))?str_21331.substring(0,next_idx_21332):str_21331);var G__21330_21334 = frag_21333.charAt(0);if(cljs.core._EQ_.call(null,"#",G__21330_21334))
{node.setAttribute("id",frag_21333.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__21330_21334))
{dommy.attrs.add_class_BANG_.call(null,node,frag_21333.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_21333.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_21332 >= 0))
{{
var G__21335 = str_21331.substring(next_idx_21332);
str_21331 = G__21335;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__21341 = data;if(G__21341)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__21341.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21341.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21341);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__21342_21346 = cljs.core.seq.call(null,data);var chunk__21343_21347 = null;var count__21344_21348 = 0;var i__21345_21349 = 0;while(true){
if((i__21345_21349 < count__21344_21348))
{var child_21350 = cljs.core._nth.call(null,chunk__21343_21347,i__21345_21349);__GT_document_fragment.call(null,result_frag,child_21350);
{
var G__21351 = seq__21342_21346;
var G__21352 = chunk__21343_21347;
var G__21353 = count__21344_21348;
var G__21354 = (i__21345_21349 + 1);
seq__21342_21346 = G__21351;
chunk__21343_21347 = G__21352;
count__21344_21348 = G__21353;
i__21345_21349 = G__21354;
continue;
}
} else
{var temp__4092__auto___21355 = cljs.core.seq.call(null,seq__21342_21346);if(temp__4092__auto___21355)
{var seq__21342_21356__$1 = temp__4092__auto___21355;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21342_21356__$1))
{var c__8355__auto___21357 = cljs.core.chunk_first.call(null,seq__21342_21356__$1);{
var G__21358 = cljs.core.chunk_rest.call(null,seq__21342_21356__$1);
var G__21359 = c__8355__auto___21357;
var G__21360 = cljs.core.count.call(null,c__8355__auto___21357);
var G__21361 = 0;
seq__21342_21346 = G__21358;
chunk__21343_21347 = G__21359;
count__21344_21348 = G__21360;
i__21345_21349 = G__21361;
continue;
}
} else
{var child_21362 = cljs.core.first.call(null,seq__21342_21356__$1);__GT_document_fragment.call(null,result_frag,child_21362);
{
var G__21363 = cljs.core.next.call(null,seq__21342_21356__$1);
var G__21364 = null;
var G__21365 = 0;
var G__21366 = 0;
seq__21342_21346 = G__21363;
chunk__21343_21347 = G__21364;
count__21344_21348 = G__21365;
i__21345_21349 = G__21366;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__21368 = data;if(G__21368)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__21368.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21368.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21368);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21368);
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
dommy.template.compound_element = (function compound_element(p__21369){var vec__21389 = p__21369;var tag_name = cljs.core.nth.call(null,vec__21389,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__21389,1,null);var children = cljs.core.nthnext.call(null,vec__21389,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__21391 = maybe_attrs;if(G__21391)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__21391.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21391.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21391);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21391);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__21392_21408 = cljs.core.seq.call(null,attrs);var chunk__21393_21409 = null;var count__21394_21410 = 0;var i__21395_21411 = 0;while(true){
if((i__21395_21411 < count__21394_21410))
{var vec__21396_21412 = cljs.core._nth.call(null,chunk__21393_21409,i__21395_21411);var k_21413 = cljs.core.nth.call(null,vec__21396_21412,0,null);var v_21414 = cljs.core.nth.call(null,vec__21396_21412,1,null);var G__21397_21415 = k_21413;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21397_21415))
{var seq__21398_21416 = cljs.core.seq.call(null,v_21414);var chunk__21399_21417 = null;var count__21400_21418 = 0;var i__21401_21419 = 0;while(true){
if((i__21401_21419 < count__21400_21418))
{var c_21420 = cljs.core._nth.call(null,chunk__21399_21417,i__21401_21419);dommy.attrs.add_class_BANG_.call(null,n,c_21420);
{
var G__21421 = seq__21398_21416;
var G__21422 = chunk__21399_21417;
var G__21423 = count__21400_21418;
var G__21424 = (i__21401_21419 + 1);
seq__21398_21416 = G__21421;
chunk__21399_21417 = G__21422;
count__21400_21418 = G__21423;
i__21401_21419 = G__21424;
continue;
}
} else
{var temp__4092__auto___21425 = cljs.core.seq.call(null,seq__21398_21416);if(temp__4092__auto___21425)
{var seq__21398_21426__$1 = temp__4092__auto___21425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21398_21426__$1))
{var c__8355__auto___21427 = cljs.core.chunk_first.call(null,seq__21398_21426__$1);{
var G__21428 = cljs.core.chunk_rest.call(null,seq__21398_21426__$1);
var G__21429 = c__8355__auto___21427;
var G__21430 = cljs.core.count.call(null,c__8355__auto___21427);
var G__21431 = 0;
seq__21398_21416 = G__21428;
chunk__21399_21417 = G__21429;
count__21400_21418 = G__21430;
i__21401_21419 = G__21431;
continue;
}
} else
{var c_21432 = cljs.core.first.call(null,seq__21398_21426__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21432);
{
var G__21433 = cljs.core.next.call(null,seq__21398_21426__$1);
var G__21434 = null;
var G__21435 = 0;
var G__21436 = 0;
seq__21398_21416 = G__21433;
chunk__21399_21417 = G__21434;
count__21400_21418 = G__21435;
i__21401_21419 = G__21436;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21397_21415))
{dommy.attrs.add_class_BANG_.call(null,n,v_21414);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21413,v_21414);
} else
{}
}
}
{
var G__21437 = seq__21392_21408;
var G__21438 = chunk__21393_21409;
var G__21439 = count__21394_21410;
var G__21440 = (i__21395_21411 + 1);
seq__21392_21408 = G__21437;
chunk__21393_21409 = G__21438;
count__21394_21410 = G__21439;
i__21395_21411 = G__21440;
continue;
}
} else
{var temp__4092__auto___21441 = cljs.core.seq.call(null,seq__21392_21408);if(temp__4092__auto___21441)
{var seq__21392_21442__$1 = temp__4092__auto___21441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21392_21442__$1))
{var c__8355__auto___21443 = cljs.core.chunk_first.call(null,seq__21392_21442__$1);{
var G__21444 = cljs.core.chunk_rest.call(null,seq__21392_21442__$1);
var G__21445 = c__8355__auto___21443;
var G__21446 = cljs.core.count.call(null,c__8355__auto___21443);
var G__21447 = 0;
seq__21392_21408 = G__21444;
chunk__21393_21409 = G__21445;
count__21394_21410 = G__21446;
i__21395_21411 = G__21447;
continue;
}
} else
{var vec__21402_21448 = cljs.core.first.call(null,seq__21392_21442__$1);var k_21449 = cljs.core.nth.call(null,vec__21402_21448,0,null);var v_21450 = cljs.core.nth.call(null,vec__21402_21448,1,null);var G__21403_21451 = k_21449;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__21403_21451))
{var seq__21404_21452 = cljs.core.seq.call(null,v_21450);var chunk__21405_21453 = null;var count__21406_21454 = 0;var i__21407_21455 = 0;while(true){
if((i__21407_21455 < count__21406_21454))
{var c_21456 = cljs.core._nth.call(null,chunk__21405_21453,i__21407_21455);dommy.attrs.add_class_BANG_.call(null,n,c_21456);
{
var G__21457 = seq__21404_21452;
var G__21458 = chunk__21405_21453;
var G__21459 = count__21406_21454;
var G__21460 = (i__21407_21455 + 1);
seq__21404_21452 = G__21457;
chunk__21405_21453 = G__21458;
count__21406_21454 = G__21459;
i__21407_21455 = G__21460;
continue;
}
} else
{var temp__4092__auto___21461__$1 = cljs.core.seq.call(null,seq__21404_21452);if(temp__4092__auto___21461__$1)
{var seq__21404_21462__$1 = temp__4092__auto___21461__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21404_21462__$1))
{var c__8355__auto___21463 = cljs.core.chunk_first.call(null,seq__21404_21462__$1);{
var G__21464 = cljs.core.chunk_rest.call(null,seq__21404_21462__$1);
var G__21465 = c__8355__auto___21463;
var G__21466 = cljs.core.count.call(null,c__8355__auto___21463);
var G__21467 = 0;
seq__21404_21452 = G__21464;
chunk__21405_21453 = G__21465;
count__21406_21454 = G__21466;
i__21407_21455 = G__21467;
continue;
}
} else
{var c_21468 = cljs.core.first.call(null,seq__21404_21462__$1);dommy.attrs.add_class_BANG_.call(null,n,c_21468);
{
var G__21469 = cljs.core.next.call(null,seq__21404_21462__$1);
var G__21470 = null;
var G__21471 = 0;
var G__21472 = 0;
seq__21404_21452 = G__21469;
chunk__21405_21453 = G__21470;
count__21406_21454 = G__21471;
i__21407_21455 = G__21472;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__21403_21451))
{dommy.attrs.add_class_BANG_.call(null,n,v_21450);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_21449,v_21450);
} else
{}
}
}
{
var G__21473 = cljs.core.next.call(null,seq__21392_21442__$1);
var G__21474 = null;
var G__21475 = 0;
var G__21476 = 0;
seq__21392_21408 = G__21473;
chunk__21393_21409 = G__21474;
count__21394_21410 = G__21475;
i__21395_21411 = G__21476;
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
}catch (e21477){if((e21477 instanceof ReferenceError))
{var __21478 = e21477;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21477;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__21480 = data;if(G__21480)
{var bit__8257__auto__ = null;if(cljs.core.truth_((function (){var or__7638__auto__ = bit__8257__auto__;if(cljs.core.truth_(or__7638__auto__))
{return or__7638__auto__;
} else
{return G__21480.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__21480.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__21480);
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
