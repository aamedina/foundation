// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj45422 = {};return obj45422;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8233__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (dommy.template._elem[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (dommy.template._elem["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
{var str_45425 = node_str.substring(base_idx);while(true){
var next_idx_45426 = dommy.template.next_css_index.call(null,str_45425,1);var frag_45427 = (((next_idx_45426 >= 0))?str_45425.substring(0,next_idx_45426):str_45425);var G__45424_45428 = frag_45427.charAt(0);if(cljs.core._EQ_.call(null,"#",G__45424_45428))
{node.setAttribute("id",frag_45427.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__45424_45428))
{dommy.attrs.add_class_BANG_.call(null,node,frag_45427.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_45427.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_45426 >= 0))
{{
var G__45429 = str_45425.substring(next_idx_45426);
str_45425 = G__45429;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__45435 = data;if(G__45435)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__45435.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45435.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45435);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45435);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__45436_45440 = cljs.core.seq.call(null,data);var chunk__45437_45441 = null;var count__45438_45442 = 0;var i__45439_45443 = 0;while(true){
if((i__45439_45443 < count__45438_45442))
{var child_45444 = cljs.core._nth.call(null,chunk__45437_45441,i__45439_45443);__GT_document_fragment.call(null,result_frag,child_45444);
{
var G__45445 = seq__45436_45440;
var G__45446 = chunk__45437_45441;
var G__45447 = count__45438_45442;
var G__45448 = (i__45439_45443 + 1);
seq__45436_45440 = G__45445;
chunk__45437_45441 = G__45446;
count__45438_45442 = G__45447;
i__45439_45443 = G__45448;
continue;
}
} else
{var temp__4092__auto___45449 = cljs.core.seq.call(null,seq__45436_45440);if(temp__4092__auto___45449)
{var seq__45436_45450__$1 = temp__4092__auto___45449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45436_45450__$1))
{var c__8974__auto___45451 = cljs.core.chunk_first.call(null,seq__45436_45450__$1);{
var G__45452 = cljs.core.chunk_rest.call(null,seq__45436_45450__$1);
var G__45453 = c__8974__auto___45451;
var G__45454 = cljs.core.count.call(null,c__8974__auto___45451);
var G__45455 = 0;
seq__45436_45440 = G__45452;
chunk__45437_45441 = G__45453;
count__45438_45442 = G__45454;
i__45439_45443 = G__45455;
continue;
}
} else
{var child_45456 = cljs.core.first.call(null,seq__45436_45450__$1);__GT_document_fragment.call(null,result_frag,child_45456);
{
var G__45457 = cljs.core.next.call(null,seq__45436_45450__$1);
var G__45458 = null;
var G__45459 = 0;
var G__45460 = 0;
seq__45436_45440 = G__45457;
chunk__45437_45441 = G__45458;
count__45438_45442 = G__45459;
i__45439_45443 = G__45460;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__45462 = data;if(G__45462)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__45462.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45462.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45462);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45462);
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
dommy.template.compound_element = (function compound_element(p__45463){var vec__45483 = p__45463;var tag_name = cljs.core.nth.call(null,vec__45483,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__45483,1,null);var children = cljs.core.nthnext.call(null,vec__45483,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__45485 = maybe_attrs;if(G__45485)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__45485.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45485);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__45486_45502 = cljs.core.seq.call(null,attrs);var chunk__45487_45503 = null;var count__45488_45504 = 0;var i__45489_45505 = 0;while(true){
if((i__45489_45505 < count__45488_45504))
{var vec__45490_45506 = cljs.core._nth.call(null,chunk__45487_45503,i__45489_45505);var k_45507 = cljs.core.nth.call(null,vec__45490_45506,0,null);var v_45508 = cljs.core.nth.call(null,vec__45490_45506,1,null);var G__45491_45509 = k_45507;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45491_45509))
{var seq__45492_45510 = cljs.core.seq.call(null,v_45508);var chunk__45493_45511 = null;var count__45494_45512 = 0;var i__45495_45513 = 0;while(true){
if((i__45495_45513 < count__45494_45512))
{var c_45514 = cljs.core._nth.call(null,chunk__45493_45511,i__45495_45513);dommy.attrs.add_class_BANG_.call(null,n,c_45514);
{
var G__45515 = seq__45492_45510;
var G__45516 = chunk__45493_45511;
var G__45517 = count__45494_45512;
var G__45518 = (i__45495_45513 + 1);
seq__45492_45510 = G__45515;
chunk__45493_45511 = G__45516;
count__45494_45512 = G__45517;
i__45495_45513 = G__45518;
continue;
}
} else
{var temp__4092__auto___45519 = cljs.core.seq.call(null,seq__45492_45510);if(temp__4092__auto___45519)
{var seq__45492_45520__$1 = temp__4092__auto___45519;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45492_45520__$1))
{var c__8974__auto___45521 = cljs.core.chunk_first.call(null,seq__45492_45520__$1);{
var G__45522 = cljs.core.chunk_rest.call(null,seq__45492_45520__$1);
var G__45523 = c__8974__auto___45521;
var G__45524 = cljs.core.count.call(null,c__8974__auto___45521);
var G__45525 = 0;
seq__45492_45510 = G__45522;
chunk__45493_45511 = G__45523;
count__45494_45512 = G__45524;
i__45495_45513 = G__45525;
continue;
}
} else
{var c_45526 = cljs.core.first.call(null,seq__45492_45520__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45526);
{
var G__45527 = cljs.core.next.call(null,seq__45492_45520__$1);
var G__45528 = null;
var G__45529 = 0;
var G__45530 = 0;
seq__45492_45510 = G__45527;
chunk__45493_45511 = G__45528;
count__45494_45512 = G__45529;
i__45495_45513 = G__45530;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45491_45509))
{dommy.attrs.add_class_BANG_.call(null,n,v_45508);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45507,v_45508);
} else
{}
}
}
{
var G__45531 = seq__45486_45502;
var G__45532 = chunk__45487_45503;
var G__45533 = count__45488_45504;
var G__45534 = (i__45489_45505 + 1);
seq__45486_45502 = G__45531;
chunk__45487_45503 = G__45532;
count__45488_45504 = G__45533;
i__45489_45505 = G__45534;
continue;
}
} else
{var temp__4092__auto___45535 = cljs.core.seq.call(null,seq__45486_45502);if(temp__4092__auto___45535)
{var seq__45486_45536__$1 = temp__4092__auto___45535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45486_45536__$1))
{var c__8974__auto___45537 = cljs.core.chunk_first.call(null,seq__45486_45536__$1);{
var G__45538 = cljs.core.chunk_rest.call(null,seq__45486_45536__$1);
var G__45539 = c__8974__auto___45537;
var G__45540 = cljs.core.count.call(null,c__8974__auto___45537);
var G__45541 = 0;
seq__45486_45502 = G__45538;
chunk__45487_45503 = G__45539;
count__45488_45504 = G__45540;
i__45489_45505 = G__45541;
continue;
}
} else
{var vec__45496_45542 = cljs.core.first.call(null,seq__45486_45536__$1);var k_45543 = cljs.core.nth.call(null,vec__45496_45542,0,null);var v_45544 = cljs.core.nth.call(null,vec__45496_45542,1,null);var G__45497_45545 = k_45543;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45497_45545))
{var seq__45498_45546 = cljs.core.seq.call(null,v_45544);var chunk__45499_45547 = null;var count__45500_45548 = 0;var i__45501_45549 = 0;while(true){
if((i__45501_45549 < count__45500_45548))
{var c_45550 = cljs.core._nth.call(null,chunk__45499_45547,i__45501_45549);dommy.attrs.add_class_BANG_.call(null,n,c_45550);
{
var G__45551 = seq__45498_45546;
var G__45552 = chunk__45499_45547;
var G__45553 = count__45500_45548;
var G__45554 = (i__45501_45549 + 1);
seq__45498_45546 = G__45551;
chunk__45499_45547 = G__45552;
count__45500_45548 = G__45553;
i__45501_45549 = G__45554;
continue;
}
} else
{var temp__4092__auto___45555__$1 = cljs.core.seq.call(null,seq__45498_45546);if(temp__4092__auto___45555__$1)
{var seq__45498_45556__$1 = temp__4092__auto___45555__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45498_45556__$1))
{var c__8974__auto___45557 = cljs.core.chunk_first.call(null,seq__45498_45556__$1);{
var G__45558 = cljs.core.chunk_rest.call(null,seq__45498_45556__$1);
var G__45559 = c__8974__auto___45557;
var G__45560 = cljs.core.count.call(null,c__8974__auto___45557);
var G__45561 = 0;
seq__45498_45546 = G__45558;
chunk__45499_45547 = G__45559;
count__45500_45548 = G__45560;
i__45501_45549 = G__45561;
continue;
}
} else
{var c_45562 = cljs.core.first.call(null,seq__45498_45556__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45562);
{
var G__45563 = cljs.core.next.call(null,seq__45498_45556__$1);
var G__45564 = null;
var G__45565 = 0;
var G__45566 = 0;
seq__45498_45546 = G__45563;
chunk__45499_45547 = G__45564;
count__45500_45548 = G__45565;
i__45501_45549 = G__45566;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45497_45545))
{dommy.attrs.add_class_BANG_.call(null,n,v_45544);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45543,v_45544);
} else
{}
}
}
{
var G__45567 = cljs.core.next.call(null,seq__45486_45536__$1);
var G__45568 = null;
var G__45569 = 0;
var G__45570 = 0;
seq__45486_45502 = G__45567;
chunk__45487_45503 = G__45568;
count__45488_45504 = G__45569;
i__45489_45505 = G__45570;
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
}catch (e45571){if((e45571 instanceof ReferenceError))
{var __45572 = e45571;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45571;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__45574 = data;if(G__45574)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__45574.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45574.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45574);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45574);
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