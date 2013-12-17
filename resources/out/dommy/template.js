// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj340437 = {};return obj340437;
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
{var str_340440 = node_str.substring(base_idx);while(true){
var next_idx_340441 = dommy.template.next_css_index.call(null,str_340440,1);var frag_340442 = (((next_idx_340441 >= 0))?str_340440.substring(0,next_idx_340441):str_340440);var G__340439_340443 = frag_340442.charAt(0);if(cljs.core._EQ_.call(null,"#",G__340439_340443))
{node.setAttribute("id",frag_340442.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__340439_340443))
{dommy.attrs.add_class_BANG_.call(null,node,frag_340442.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_340442.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_340441 >= 0))
{{
var G__340444 = str_340440.substring(next_idx_340441);
str_340440 = G__340444;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__340450 = data;if(G__340450)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__340450.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__340450.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340450);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340450);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__340451_340455 = cljs.core.seq.call(null,data);var chunk__340452_340456 = null;var count__340453_340457 = 0;var i__340454_340458 = 0;while(true){
if((i__340454_340458 < count__340453_340457))
{var child_340459 = cljs.core._nth.call(null,chunk__340452_340456,i__340454_340458);__GT_document_fragment.call(null,result_frag,child_340459);
{
var G__340460 = seq__340451_340455;
var G__340461 = chunk__340452_340456;
var G__340462 = count__340453_340457;
var G__340463 = (i__340454_340458 + 1);
seq__340451_340455 = G__340460;
chunk__340452_340456 = G__340461;
count__340453_340457 = G__340462;
i__340454_340458 = G__340463;
continue;
}
} else
{var temp__4092__auto___340464 = cljs.core.seq.call(null,seq__340451_340455);if(temp__4092__auto___340464)
{var seq__340451_340465__$1 = temp__4092__auto___340464;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340451_340465__$1))
{var c__14547__auto___340466 = cljs.core.chunk_first.call(null,seq__340451_340465__$1);{
var G__340467 = cljs.core.chunk_rest.call(null,seq__340451_340465__$1);
var G__340468 = c__14547__auto___340466;
var G__340469 = cljs.core.count.call(null,c__14547__auto___340466);
var G__340470 = 0;
seq__340451_340455 = G__340467;
chunk__340452_340456 = G__340468;
count__340453_340457 = G__340469;
i__340454_340458 = G__340470;
continue;
}
} else
{var child_340471 = cljs.core.first.call(null,seq__340451_340465__$1);__GT_document_fragment.call(null,result_frag,child_340471);
{
var G__340472 = cljs.core.next.call(null,seq__340451_340465__$1);
var G__340473 = null;
var G__340474 = 0;
var G__340475 = 0;
seq__340451_340455 = G__340472;
chunk__340452_340456 = G__340473;
count__340453_340457 = G__340474;
i__340454_340458 = G__340475;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__340477 = data;if(G__340477)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__340477.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__340477.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340477);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340477);
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
dommy.template.compound_element = (function compound_element(p__340478){var vec__340498 = p__340478;var tag_name = cljs.core.nth.call(null,vec__340498,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__340498,1,null);var children = cljs.core.nthnext.call(null,vec__340498,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__340500 = maybe_attrs;if(G__340500)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__340500.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__340500.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340500);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340500);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__340501_340517 = cljs.core.seq.call(null,attrs);var chunk__340502_340518 = null;var count__340503_340519 = 0;var i__340504_340520 = 0;while(true){
if((i__340504_340520 < count__340503_340519))
{var vec__340505_340521 = cljs.core._nth.call(null,chunk__340502_340518,i__340504_340520);var k_340522 = cljs.core.nth.call(null,vec__340505_340521,0,null);var v_340523 = cljs.core.nth.call(null,vec__340505_340521,1,null);var G__340506_340524 = k_340522;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__340506_340524))
{var seq__340507_340525 = cljs.core.seq.call(null,v_340523);var chunk__340508_340526 = null;var count__340509_340527 = 0;var i__340510_340528 = 0;while(true){
if((i__340510_340528 < count__340509_340527))
{var c_340529 = cljs.core._nth.call(null,chunk__340508_340526,i__340510_340528);dommy.attrs.add_class_BANG_.call(null,n,c_340529);
{
var G__340530 = seq__340507_340525;
var G__340531 = chunk__340508_340526;
var G__340532 = count__340509_340527;
var G__340533 = (i__340510_340528 + 1);
seq__340507_340525 = G__340530;
chunk__340508_340526 = G__340531;
count__340509_340527 = G__340532;
i__340510_340528 = G__340533;
continue;
}
} else
{var temp__4092__auto___340534 = cljs.core.seq.call(null,seq__340507_340525);if(temp__4092__auto___340534)
{var seq__340507_340535__$1 = temp__4092__auto___340534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340507_340535__$1))
{var c__14547__auto___340536 = cljs.core.chunk_first.call(null,seq__340507_340535__$1);{
var G__340537 = cljs.core.chunk_rest.call(null,seq__340507_340535__$1);
var G__340538 = c__14547__auto___340536;
var G__340539 = cljs.core.count.call(null,c__14547__auto___340536);
var G__340540 = 0;
seq__340507_340525 = G__340537;
chunk__340508_340526 = G__340538;
count__340509_340527 = G__340539;
i__340510_340528 = G__340540;
continue;
}
} else
{var c_340541 = cljs.core.first.call(null,seq__340507_340535__$1);dommy.attrs.add_class_BANG_.call(null,n,c_340541);
{
var G__340542 = cljs.core.next.call(null,seq__340507_340535__$1);
var G__340543 = null;
var G__340544 = 0;
var G__340545 = 0;
seq__340507_340525 = G__340542;
chunk__340508_340526 = G__340543;
count__340509_340527 = G__340544;
i__340510_340528 = G__340545;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__340506_340524))
{dommy.attrs.add_class_BANG_.call(null,n,v_340523);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_340522,v_340523);
} else
{}
}
}
{
var G__340546 = seq__340501_340517;
var G__340547 = chunk__340502_340518;
var G__340548 = count__340503_340519;
var G__340549 = (i__340504_340520 + 1);
seq__340501_340517 = G__340546;
chunk__340502_340518 = G__340547;
count__340503_340519 = G__340548;
i__340504_340520 = G__340549;
continue;
}
} else
{var temp__4092__auto___340550 = cljs.core.seq.call(null,seq__340501_340517);if(temp__4092__auto___340550)
{var seq__340501_340551__$1 = temp__4092__auto___340550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340501_340551__$1))
{var c__14547__auto___340552 = cljs.core.chunk_first.call(null,seq__340501_340551__$1);{
var G__340553 = cljs.core.chunk_rest.call(null,seq__340501_340551__$1);
var G__340554 = c__14547__auto___340552;
var G__340555 = cljs.core.count.call(null,c__14547__auto___340552);
var G__340556 = 0;
seq__340501_340517 = G__340553;
chunk__340502_340518 = G__340554;
count__340503_340519 = G__340555;
i__340504_340520 = G__340556;
continue;
}
} else
{var vec__340511_340557 = cljs.core.first.call(null,seq__340501_340551__$1);var k_340558 = cljs.core.nth.call(null,vec__340511_340557,0,null);var v_340559 = cljs.core.nth.call(null,vec__340511_340557,1,null);var G__340512_340560 = k_340558;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__340512_340560))
{var seq__340513_340561 = cljs.core.seq.call(null,v_340559);var chunk__340514_340562 = null;var count__340515_340563 = 0;var i__340516_340564 = 0;while(true){
if((i__340516_340564 < count__340515_340563))
{var c_340565 = cljs.core._nth.call(null,chunk__340514_340562,i__340516_340564);dommy.attrs.add_class_BANG_.call(null,n,c_340565);
{
var G__340566 = seq__340513_340561;
var G__340567 = chunk__340514_340562;
var G__340568 = count__340515_340563;
var G__340569 = (i__340516_340564 + 1);
seq__340513_340561 = G__340566;
chunk__340514_340562 = G__340567;
count__340515_340563 = G__340568;
i__340516_340564 = G__340569;
continue;
}
} else
{var temp__4092__auto___340570__$1 = cljs.core.seq.call(null,seq__340513_340561);if(temp__4092__auto___340570__$1)
{var seq__340513_340571__$1 = temp__4092__auto___340570__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__340513_340571__$1))
{var c__14547__auto___340572 = cljs.core.chunk_first.call(null,seq__340513_340571__$1);{
var G__340573 = cljs.core.chunk_rest.call(null,seq__340513_340571__$1);
var G__340574 = c__14547__auto___340572;
var G__340575 = cljs.core.count.call(null,c__14547__auto___340572);
var G__340576 = 0;
seq__340513_340561 = G__340573;
chunk__340514_340562 = G__340574;
count__340515_340563 = G__340575;
i__340516_340564 = G__340576;
continue;
}
} else
{var c_340577 = cljs.core.first.call(null,seq__340513_340571__$1);dommy.attrs.add_class_BANG_.call(null,n,c_340577);
{
var G__340578 = cljs.core.next.call(null,seq__340513_340571__$1);
var G__340579 = null;
var G__340580 = 0;
var G__340581 = 0;
seq__340513_340561 = G__340578;
chunk__340514_340562 = G__340579;
count__340515_340563 = G__340580;
i__340516_340564 = G__340581;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__340512_340560))
{dommy.attrs.add_class_BANG_.call(null,n,v_340559);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_340558,v_340559);
} else
{}
}
}
{
var G__340582 = cljs.core.next.call(null,seq__340501_340551__$1);
var G__340583 = null;
var G__340584 = 0;
var G__340585 = 0;
seq__340501_340517 = G__340582;
chunk__340502_340518 = G__340583;
count__340503_340519 = G__340584;
i__340504_340520 = G__340585;
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
}catch (e340586){if((e340586 instanceof ReferenceError))
{var __340587 = e340586;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e340586;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__340589 = data;if(G__340589)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__340589.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__340589.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340589);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__340589);
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