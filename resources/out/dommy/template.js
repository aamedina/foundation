// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj103430 = {};return obj103430;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13810__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (dommy.template._elem[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (dommy.template._elem["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
{var str_103433 = node_str.substring(base_idx);while(true){
var next_idx_103434 = dommy.template.next_css_index.call(null,str_103433,1);var frag_103435 = (((next_idx_103434 >= 0))?str_103433.substring(0,next_idx_103434):str_103433);var G__103432_103436 = frag_103435.charAt(0);if(cljs.core._EQ_.call(null,"#",G__103432_103436))
{node.setAttribute("id",frag_103435.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__103432_103436))
{dommy.attrs.add_class_BANG_.call(null,node,frag_103435.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_103435.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_103434 >= 0))
{{
var G__103437 = str_103433.substring(next_idx_103434);
str_103433 = G__103437;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__103443 = data;if(G__103443)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__103443.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__103443.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103443);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103443);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__103444_103448 = cljs.core.seq.call(null,data);var chunk__103445_103449 = null;var count__103446_103450 = 0;var i__103447_103451 = 0;while(true){
if((i__103447_103451 < count__103446_103450))
{var child_103452 = cljs.core._nth.call(null,chunk__103445_103449,i__103447_103451);__GT_document_fragment.call(null,result_frag,child_103452);
{
var G__103453 = seq__103444_103448;
var G__103454 = chunk__103445_103449;
var G__103455 = count__103446_103450;
var G__103456 = (i__103447_103451 + 1);
seq__103444_103448 = G__103453;
chunk__103445_103449 = G__103454;
count__103446_103450 = G__103455;
i__103447_103451 = G__103456;
continue;
}
} else
{var temp__4092__auto___103457 = cljs.core.seq.call(null,seq__103444_103448);if(temp__4092__auto___103457)
{var seq__103444_103458__$1 = temp__4092__auto___103457;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103444_103458__$1))
{var c__14546__auto___103459 = cljs.core.chunk_first.call(null,seq__103444_103458__$1);{
var G__103460 = cljs.core.chunk_rest.call(null,seq__103444_103458__$1);
var G__103461 = c__14546__auto___103459;
var G__103462 = cljs.core.count.call(null,c__14546__auto___103459);
var G__103463 = 0;
seq__103444_103448 = G__103460;
chunk__103445_103449 = G__103461;
count__103446_103450 = G__103462;
i__103447_103451 = G__103463;
continue;
}
} else
{var child_103464 = cljs.core.first.call(null,seq__103444_103458__$1);__GT_document_fragment.call(null,result_frag,child_103464);
{
var G__103465 = cljs.core.next.call(null,seq__103444_103458__$1);
var G__103466 = null;
var G__103467 = 0;
var G__103468 = 0;
seq__103444_103448 = G__103465;
chunk__103445_103449 = G__103466;
count__103446_103450 = G__103467;
i__103447_103451 = G__103468;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__103470 = data;if(G__103470)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__103470.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__103470.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103470);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103470);
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
dommy.template.compound_element = (function compound_element(p__103471){var vec__103491 = p__103471;var tag_name = cljs.core.nth.call(null,vec__103491,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__103491,1,null);var children = cljs.core.nthnext.call(null,vec__103491,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__103493 = maybe_attrs;if(G__103493)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__103493.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__103493.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103493);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103493);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__103494_103510 = cljs.core.seq.call(null,attrs);var chunk__103495_103511 = null;var count__103496_103512 = 0;var i__103497_103513 = 0;while(true){
if((i__103497_103513 < count__103496_103512))
{var vec__103498_103514 = cljs.core._nth.call(null,chunk__103495_103511,i__103497_103513);var k_103515 = cljs.core.nth.call(null,vec__103498_103514,0,null);var v_103516 = cljs.core.nth.call(null,vec__103498_103514,1,null);var G__103499_103517 = k_103515;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__103499_103517))
{var seq__103500_103518 = cljs.core.seq.call(null,v_103516);var chunk__103501_103519 = null;var count__103502_103520 = 0;var i__103503_103521 = 0;while(true){
if((i__103503_103521 < count__103502_103520))
{var c_103522 = cljs.core._nth.call(null,chunk__103501_103519,i__103503_103521);dommy.attrs.add_class_BANG_.call(null,n,c_103522);
{
var G__103523 = seq__103500_103518;
var G__103524 = chunk__103501_103519;
var G__103525 = count__103502_103520;
var G__103526 = (i__103503_103521 + 1);
seq__103500_103518 = G__103523;
chunk__103501_103519 = G__103524;
count__103502_103520 = G__103525;
i__103503_103521 = G__103526;
continue;
}
} else
{var temp__4092__auto___103527 = cljs.core.seq.call(null,seq__103500_103518);if(temp__4092__auto___103527)
{var seq__103500_103528__$1 = temp__4092__auto___103527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103500_103528__$1))
{var c__14546__auto___103529 = cljs.core.chunk_first.call(null,seq__103500_103528__$1);{
var G__103530 = cljs.core.chunk_rest.call(null,seq__103500_103528__$1);
var G__103531 = c__14546__auto___103529;
var G__103532 = cljs.core.count.call(null,c__14546__auto___103529);
var G__103533 = 0;
seq__103500_103518 = G__103530;
chunk__103501_103519 = G__103531;
count__103502_103520 = G__103532;
i__103503_103521 = G__103533;
continue;
}
} else
{var c_103534 = cljs.core.first.call(null,seq__103500_103528__$1);dommy.attrs.add_class_BANG_.call(null,n,c_103534);
{
var G__103535 = cljs.core.next.call(null,seq__103500_103528__$1);
var G__103536 = null;
var G__103537 = 0;
var G__103538 = 0;
seq__103500_103518 = G__103535;
chunk__103501_103519 = G__103536;
count__103502_103520 = G__103537;
i__103503_103521 = G__103538;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__103499_103517))
{dommy.attrs.add_class_BANG_.call(null,n,v_103516);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_103515,v_103516);
} else
{}
}
}
{
var G__103539 = seq__103494_103510;
var G__103540 = chunk__103495_103511;
var G__103541 = count__103496_103512;
var G__103542 = (i__103497_103513 + 1);
seq__103494_103510 = G__103539;
chunk__103495_103511 = G__103540;
count__103496_103512 = G__103541;
i__103497_103513 = G__103542;
continue;
}
} else
{var temp__4092__auto___103543 = cljs.core.seq.call(null,seq__103494_103510);if(temp__4092__auto___103543)
{var seq__103494_103544__$1 = temp__4092__auto___103543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103494_103544__$1))
{var c__14546__auto___103545 = cljs.core.chunk_first.call(null,seq__103494_103544__$1);{
var G__103546 = cljs.core.chunk_rest.call(null,seq__103494_103544__$1);
var G__103547 = c__14546__auto___103545;
var G__103548 = cljs.core.count.call(null,c__14546__auto___103545);
var G__103549 = 0;
seq__103494_103510 = G__103546;
chunk__103495_103511 = G__103547;
count__103496_103512 = G__103548;
i__103497_103513 = G__103549;
continue;
}
} else
{var vec__103504_103550 = cljs.core.first.call(null,seq__103494_103544__$1);var k_103551 = cljs.core.nth.call(null,vec__103504_103550,0,null);var v_103552 = cljs.core.nth.call(null,vec__103504_103550,1,null);var G__103505_103553 = k_103551;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__103505_103553))
{var seq__103506_103554 = cljs.core.seq.call(null,v_103552);var chunk__103507_103555 = null;var count__103508_103556 = 0;var i__103509_103557 = 0;while(true){
if((i__103509_103557 < count__103508_103556))
{var c_103558 = cljs.core._nth.call(null,chunk__103507_103555,i__103509_103557);dommy.attrs.add_class_BANG_.call(null,n,c_103558);
{
var G__103559 = seq__103506_103554;
var G__103560 = chunk__103507_103555;
var G__103561 = count__103508_103556;
var G__103562 = (i__103509_103557 + 1);
seq__103506_103554 = G__103559;
chunk__103507_103555 = G__103560;
count__103508_103556 = G__103561;
i__103509_103557 = G__103562;
continue;
}
} else
{var temp__4092__auto___103563__$1 = cljs.core.seq.call(null,seq__103506_103554);if(temp__4092__auto___103563__$1)
{var seq__103506_103564__$1 = temp__4092__auto___103563__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__103506_103564__$1))
{var c__14546__auto___103565 = cljs.core.chunk_first.call(null,seq__103506_103564__$1);{
var G__103566 = cljs.core.chunk_rest.call(null,seq__103506_103564__$1);
var G__103567 = c__14546__auto___103565;
var G__103568 = cljs.core.count.call(null,c__14546__auto___103565);
var G__103569 = 0;
seq__103506_103554 = G__103566;
chunk__103507_103555 = G__103567;
count__103508_103556 = G__103568;
i__103509_103557 = G__103569;
continue;
}
} else
{var c_103570 = cljs.core.first.call(null,seq__103506_103564__$1);dommy.attrs.add_class_BANG_.call(null,n,c_103570);
{
var G__103571 = cljs.core.next.call(null,seq__103506_103564__$1);
var G__103572 = null;
var G__103573 = 0;
var G__103574 = 0;
seq__103506_103554 = G__103571;
chunk__103507_103555 = G__103572;
count__103508_103556 = G__103573;
i__103509_103557 = G__103574;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__103505_103553))
{dommy.attrs.add_class_BANG_.call(null,n,v_103552);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_103551,v_103552);
} else
{}
}
}
{
var G__103575 = cljs.core.next.call(null,seq__103494_103544__$1);
var G__103576 = null;
var G__103577 = 0;
var G__103578 = 0;
seq__103494_103510 = G__103575;
chunk__103495_103511 = G__103576;
count__103496_103512 = G__103577;
i__103497_103513 = G__103578;
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
}catch (e103579){if((e103579 instanceof ReferenceError))
{var __103580 = e103579;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e103579;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__103582 = data;if(G__103582)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__103582.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__103582.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103582);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__103582);
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