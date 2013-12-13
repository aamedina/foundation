// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj92398 = {};return obj92398;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13813__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (dommy.template._elem[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (dommy.template._elem["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
{var str_92401 = node_str.substring(base_idx);while(true){
var next_idx_92402 = dommy.template.next_css_index.call(null,str_92401,1);var frag_92403 = (((next_idx_92402 >= 0))?str_92401.substring(0,next_idx_92402):str_92401);var G__92400_92404 = frag_92403.charAt(0);if(cljs.core._EQ_.call(null,"#",G__92400_92404))
{node.setAttribute("id",frag_92403.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__92400_92404))
{dommy.attrs.add_class_BANG_.call(null,node,frag_92403.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_92403.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_92402 >= 0))
{{
var G__92405 = str_92401.substring(next_idx_92402);
str_92401 = G__92405;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__92411 = data;if(G__92411)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__92411.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__92411.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92411);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92411);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__92412_92416 = cljs.core.seq.call(null,data);var chunk__92413_92417 = null;var count__92414_92418 = 0;var i__92415_92419 = 0;while(true){
if((i__92415_92419 < count__92414_92418))
{var child_92420 = cljs.core._nth.call(null,chunk__92413_92417,i__92415_92419);__GT_document_fragment.call(null,result_frag,child_92420);
{
var G__92421 = seq__92412_92416;
var G__92422 = chunk__92413_92417;
var G__92423 = count__92414_92418;
var G__92424 = (i__92415_92419 + 1);
seq__92412_92416 = G__92421;
chunk__92413_92417 = G__92422;
count__92414_92418 = G__92423;
i__92415_92419 = G__92424;
continue;
}
} else
{var temp__4092__auto___92425 = cljs.core.seq.call(null,seq__92412_92416);if(temp__4092__auto___92425)
{var seq__92412_92426__$1 = temp__4092__auto___92425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92412_92426__$1))
{var c__14549__auto___92427 = cljs.core.chunk_first.call(null,seq__92412_92426__$1);{
var G__92428 = cljs.core.chunk_rest.call(null,seq__92412_92426__$1);
var G__92429 = c__14549__auto___92427;
var G__92430 = cljs.core.count.call(null,c__14549__auto___92427);
var G__92431 = 0;
seq__92412_92416 = G__92428;
chunk__92413_92417 = G__92429;
count__92414_92418 = G__92430;
i__92415_92419 = G__92431;
continue;
}
} else
{var child_92432 = cljs.core.first.call(null,seq__92412_92426__$1);__GT_document_fragment.call(null,result_frag,child_92432);
{
var G__92433 = cljs.core.next.call(null,seq__92412_92426__$1);
var G__92434 = null;
var G__92435 = 0;
var G__92436 = 0;
seq__92412_92416 = G__92433;
chunk__92413_92417 = G__92434;
count__92414_92418 = G__92435;
i__92415_92419 = G__92436;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__92438 = data;if(G__92438)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__92438.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__92438.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92438);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92438);
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
dommy.template.compound_element = (function compound_element(p__92439){var vec__92459 = p__92439;var tag_name = cljs.core.nth.call(null,vec__92459,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__92459,1,null);var children = cljs.core.nthnext.call(null,vec__92459,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__92461 = maybe_attrs;if(G__92461)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__92461.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__92461.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92461);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92461);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__92462_92478 = cljs.core.seq.call(null,attrs);var chunk__92463_92479 = null;var count__92464_92480 = 0;var i__92465_92481 = 0;while(true){
if((i__92465_92481 < count__92464_92480))
{var vec__92466_92482 = cljs.core._nth.call(null,chunk__92463_92479,i__92465_92481);var k_92483 = cljs.core.nth.call(null,vec__92466_92482,0,null);var v_92484 = cljs.core.nth.call(null,vec__92466_92482,1,null);var G__92467_92485 = k_92483;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__92467_92485))
{var seq__92468_92486 = cljs.core.seq.call(null,v_92484);var chunk__92469_92487 = null;var count__92470_92488 = 0;var i__92471_92489 = 0;while(true){
if((i__92471_92489 < count__92470_92488))
{var c_92490 = cljs.core._nth.call(null,chunk__92469_92487,i__92471_92489);dommy.attrs.add_class_BANG_.call(null,n,c_92490);
{
var G__92491 = seq__92468_92486;
var G__92492 = chunk__92469_92487;
var G__92493 = count__92470_92488;
var G__92494 = (i__92471_92489 + 1);
seq__92468_92486 = G__92491;
chunk__92469_92487 = G__92492;
count__92470_92488 = G__92493;
i__92471_92489 = G__92494;
continue;
}
} else
{var temp__4092__auto___92495 = cljs.core.seq.call(null,seq__92468_92486);if(temp__4092__auto___92495)
{var seq__92468_92496__$1 = temp__4092__auto___92495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92468_92496__$1))
{var c__14549__auto___92497 = cljs.core.chunk_first.call(null,seq__92468_92496__$1);{
var G__92498 = cljs.core.chunk_rest.call(null,seq__92468_92496__$1);
var G__92499 = c__14549__auto___92497;
var G__92500 = cljs.core.count.call(null,c__14549__auto___92497);
var G__92501 = 0;
seq__92468_92486 = G__92498;
chunk__92469_92487 = G__92499;
count__92470_92488 = G__92500;
i__92471_92489 = G__92501;
continue;
}
} else
{var c_92502 = cljs.core.first.call(null,seq__92468_92496__$1);dommy.attrs.add_class_BANG_.call(null,n,c_92502);
{
var G__92503 = cljs.core.next.call(null,seq__92468_92496__$1);
var G__92504 = null;
var G__92505 = 0;
var G__92506 = 0;
seq__92468_92486 = G__92503;
chunk__92469_92487 = G__92504;
count__92470_92488 = G__92505;
i__92471_92489 = G__92506;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__92467_92485))
{dommy.attrs.add_class_BANG_.call(null,n,v_92484);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_92483,v_92484);
} else
{}
}
}
{
var G__92507 = seq__92462_92478;
var G__92508 = chunk__92463_92479;
var G__92509 = count__92464_92480;
var G__92510 = (i__92465_92481 + 1);
seq__92462_92478 = G__92507;
chunk__92463_92479 = G__92508;
count__92464_92480 = G__92509;
i__92465_92481 = G__92510;
continue;
}
} else
{var temp__4092__auto___92511 = cljs.core.seq.call(null,seq__92462_92478);if(temp__4092__auto___92511)
{var seq__92462_92512__$1 = temp__4092__auto___92511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92462_92512__$1))
{var c__14549__auto___92513 = cljs.core.chunk_first.call(null,seq__92462_92512__$1);{
var G__92514 = cljs.core.chunk_rest.call(null,seq__92462_92512__$1);
var G__92515 = c__14549__auto___92513;
var G__92516 = cljs.core.count.call(null,c__14549__auto___92513);
var G__92517 = 0;
seq__92462_92478 = G__92514;
chunk__92463_92479 = G__92515;
count__92464_92480 = G__92516;
i__92465_92481 = G__92517;
continue;
}
} else
{var vec__92472_92518 = cljs.core.first.call(null,seq__92462_92512__$1);var k_92519 = cljs.core.nth.call(null,vec__92472_92518,0,null);var v_92520 = cljs.core.nth.call(null,vec__92472_92518,1,null);var G__92473_92521 = k_92519;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__92473_92521))
{var seq__92474_92522 = cljs.core.seq.call(null,v_92520);var chunk__92475_92523 = null;var count__92476_92524 = 0;var i__92477_92525 = 0;while(true){
if((i__92477_92525 < count__92476_92524))
{var c_92526 = cljs.core._nth.call(null,chunk__92475_92523,i__92477_92525);dommy.attrs.add_class_BANG_.call(null,n,c_92526);
{
var G__92527 = seq__92474_92522;
var G__92528 = chunk__92475_92523;
var G__92529 = count__92476_92524;
var G__92530 = (i__92477_92525 + 1);
seq__92474_92522 = G__92527;
chunk__92475_92523 = G__92528;
count__92476_92524 = G__92529;
i__92477_92525 = G__92530;
continue;
}
} else
{var temp__4092__auto___92531__$1 = cljs.core.seq.call(null,seq__92474_92522);if(temp__4092__auto___92531__$1)
{var seq__92474_92532__$1 = temp__4092__auto___92531__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__92474_92532__$1))
{var c__14549__auto___92533 = cljs.core.chunk_first.call(null,seq__92474_92532__$1);{
var G__92534 = cljs.core.chunk_rest.call(null,seq__92474_92532__$1);
var G__92535 = c__14549__auto___92533;
var G__92536 = cljs.core.count.call(null,c__14549__auto___92533);
var G__92537 = 0;
seq__92474_92522 = G__92534;
chunk__92475_92523 = G__92535;
count__92476_92524 = G__92536;
i__92477_92525 = G__92537;
continue;
}
} else
{var c_92538 = cljs.core.first.call(null,seq__92474_92532__$1);dommy.attrs.add_class_BANG_.call(null,n,c_92538);
{
var G__92539 = cljs.core.next.call(null,seq__92474_92532__$1);
var G__92540 = null;
var G__92541 = 0;
var G__92542 = 0;
seq__92474_92522 = G__92539;
chunk__92475_92523 = G__92540;
count__92476_92524 = G__92541;
i__92477_92525 = G__92542;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__92473_92521))
{dommy.attrs.add_class_BANG_.call(null,n,v_92520);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_92519,v_92520);
} else
{}
}
}
{
var G__92543 = cljs.core.next.call(null,seq__92462_92512__$1);
var G__92544 = null;
var G__92545 = 0;
var G__92546 = 0;
seq__92462_92478 = G__92543;
chunk__92463_92479 = G__92544;
count__92464_92480 = G__92545;
i__92465_92481 = G__92546;
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
}catch (e92547){if((e92547 instanceof ReferenceError))
{var __92548 = e92547;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e92547;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__92550 = data;if(G__92550)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__92550.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__92550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__92550);
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