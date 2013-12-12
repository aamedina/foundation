// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj84483 = {};return obj84483;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13809__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (dommy.template._elem[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (dommy.template._elem["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
{var str_84486 = node_str.substring(base_idx);while(true){
var next_idx_84487 = dommy.template.next_css_index.call(null,str_84486,1);var frag_84488 = (((next_idx_84487 >= 0))?str_84486.substring(0,next_idx_84487):str_84486);var G__84485_84489 = frag_84488.charAt(0);if(cljs.core._EQ_.call(null,"#",G__84485_84489))
{node.setAttribute("id",frag_84488.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__84485_84489))
{dommy.attrs.add_class_BANG_.call(null,node,frag_84488.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_84488.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_84487 >= 0))
{{
var G__84490 = str_84486.substring(next_idx_84487);
str_84486 = G__84490;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__84496 = data;if(G__84496)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__84496.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__84496.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84496);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84496);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__84497_84501 = cljs.core.seq.call(null,data);var chunk__84498_84502 = null;var count__84499_84503 = 0;var i__84500_84504 = 0;while(true){
if((i__84500_84504 < count__84499_84503))
{var child_84505 = cljs.core._nth.call(null,chunk__84498_84502,i__84500_84504);__GT_document_fragment.call(null,result_frag,child_84505);
{
var G__84506 = seq__84497_84501;
var G__84507 = chunk__84498_84502;
var G__84508 = count__84499_84503;
var G__84509 = (i__84500_84504 + 1);
seq__84497_84501 = G__84506;
chunk__84498_84502 = G__84507;
count__84499_84503 = G__84508;
i__84500_84504 = G__84509;
continue;
}
} else
{var temp__4092__auto___84510 = cljs.core.seq.call(null,seq__84497_84501);if(temp__4092__auto___84510)
{var seq__84497_84511__$1 = temp__4092__auto___84510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84497_84511__$1))
{var c__14545__auto___84512 = cljs.core.chunk_first.call(null,seq__84497_84511__$1);{
var G__84513 = cljs.core.chunk_rest.call(null,seq__84497_84511__$1);
var G__84514 = c__14545__auto___84512;
var G__84515 = cljs.core.count.call(null,c__14545__auto___84512);
var G__84516 = 0;
seq__84497_84501 = G__84513;
chunk__84498_84502 = G__84514;
count__84499_84503 = G__84515;
i__84500_84504 = G__84516;
continue;
}
} else
{var child_84517 = cljs.core.first.call(null,seq__84497_84511__$1);__GT_document_fragment.call(null,result_frag,child_84517);
{
var G__84518 = cljs.core.next.call(null,seq__84497_84511__$1);
var G__84519 = null;
var G__84520 = 0;
var G__84521 = 0;
seq__84497_84501 = G__84518;
chunk__84498_84502 = G__84519;
count__84499_84503 = G__84520;
i__84500_84504 = G__84521;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__84523 = data;if(G__84523)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__84523.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__84523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84523);
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
dommy.template.compound_element = (function compound_element(p__84524){var vec__84544 = p__84524;var tag_name = cljs.core.nth.call(null,vec__84544,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__84544,1,null);var children = cljs.core.nthnext.call(null,vec__84544,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__84546 = maybe_attrs;if(G__84546)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__84546.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__84546.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84546);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84546);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__84547_84563 = cljs.core.seq.call(null,attrs);var chunk__84548_84564 = null;var count__84549_84565 = 0;var i__84550_84566 = 0;while(true){
if((i__84550_84566 < count__84549_84565))
{var vec__84551_84567 = cljs.core._nth.call(null,chunk__84548_84564,i__84550_84566);var k_84568 = cljs.core.nth.call(null,vec__84551_84567,0,null);var v_84569 = cljs.core.nth.call(null,vec__84551_84567,1,null);var G__84552_84570 = k_84568;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__84552_84570))
{var seq__84553_84571 = cljs.core.seq.call(null,v_84569);var chunk__84554_84572 = null;var count__84555_84573 = 0;var i__84556_84574 = 0;while(true){
if((i__84556_84574 < count__84555_84573))
{var c_84575 = cljs.core._nth.call(null,chunk__84554_84572,i__84556_84574);dommy.attrs.add_class_BANG_.call(null,n,c_84575);
{
var G__84576 = seq__84553_84571;
var G__84577 = chunk__84554_84572;
var G__84578 = count__84555_84573;
var G__84579 = (i__84556_84574 + 1);
seq__84553_84571 = G__84576;
chunk__84554_84572 = G__84577;
count__84555_84573 = G__84578;
i__84556_84574 = G__84579;
continue;
}
} else
{var temp__4092__auto___84580 = cljs.core.seq.call(null,seq__84553_84571);if(temp__4092__auto___84580)
{var seq__84553_84581__$1 = temp__4092__auto___84580;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84553_84581__$1))
{var c__14545__auto___84582 = cljs.core.chunk_first.call(null,seq__84553_84581__$1);{
var G__84583 = cljs.core.chunk_rest.call(null,seq__84553_84581__$1);
var G__84584 = c__14545__auto___84582;
var G__84585 = cljs.core.count.call(null,c__14545__auto___84582);
var G__84586 = 0;
seq__84553_84571 = G__84583;
chunk__84554_84572 = G__84584;
count__84555_84573 = G__84585;
i__84556_84574 = G__84586;
continue;
}
} else
{var c_84587 = cljs.core.first.call(null,seq__84553_84581__$1);dommy.attrs.add_class_BANG_.call(null,n,c_84587);
{
var G__84588 = cljs.core.next.call(null,seq__84553_84581__$1);
var G__84589 = null;
var G__84590 = 0;
var G__84591 = 0;
seq__84553_84571 = G__84588;
chunk__84554_84572 = G__84589;
count__84555_84573 = G__84590;
i__84556_84574 = G__84591;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__84552_84570))
{dommy.attrs.add_class_BANG_.call(null,n,v_84569);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_84568,v_84569);
} else
{}
}
}
{
var G__84592 = seq__84547_84563;
var G__84593 = chunk__84548_84564;
var G__84594 = count__84549_84565;
var G__84595 = (i__84550_84566 + 1);
seq__84547_84563 = G__84592;
chunk__84548_84564 = G__84593;
count__84549_84565 = G__84594;
i__84550_84566 = G__84595;
continue;
}
} else
{var temp__4092__auto___84596 = cljs.core.seq.call(null,seq__84547_84563);if(temp__4092__auto___84596)
{var seq__84547_84597__$1 = temp__4092__auto___84596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84547_84597__$1))
{var c__14545__auto___84598 = cljs.core.chunk_first.call(null,seq__84547_84597__$1);{
var G__84599 = cljs.core.chunk_rest.call(null,seq__84547_84597__$1);
var G__84600 = c__14545__auto___84598;
var G__84601 = cljs.core.count.call(null,c__14545__auto___84598);
var G__84602 = 0;
seq__84547_84563 = G__84599;
chunk__84548_84564 = G__84600;
count__84549_84565 = G__84601;
i__84550_84566 = G__84602;
continue;
}
} else
{var vec__84557_84603 = cljs.core.first.call(null,seq__84547_84597__$1);var k_84604 = cljs.core.nth.call(null,vec__84557_84603,0,null);var v_84605 = cljs.core.nth.call(null,vec__84557_84603,1,null);var G__84558_84606 = k_84604;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__84558_84606))
{var seq__84559_84607 = cljs.core.seq.call(null,v_84605);var chunk__84560_84608 = null;var count__84561_84609 = 0;var i__84562_84610 = 0;while(true){
if((i__84562_84610 < count__84561_84609))
{var c_84611 = cljs.core._nth.call(null,chunk__84560_84608,i__84562_84610);dommy.attrs.add_class_BANG_.call(null,n,c_84611);
{
var G__84612 = seq__84559_84607;
var G__84613 = chunk__84560_84608;
var G__84614 = count__84561_84609;
var G__84615 = (i__84562_84610 + 1);
seq__84559_84607 = G__84612;
chunk__84560_84608 = G__84613;
count__84561_84609 = G__84614;
i__84562_84610 = G__84615;
continue;
}
} else
{var temp__4092__auto___84616__$1 = cljs.core.seq.call(null,seq__84559_84607);if(temp__4092__auto___84616__$1)
{var seq__84559_84617__$1 = temp__4092__auto___84616__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__84559_84617__$1))
{var c__14545__auto___84618 = cljs.core.chunk_first.call(null,seq__84559_84617__$1);{
var G__84619 = cljs.core.chunk_rest.call(null,seq__84559_84617__$1);
var G__84620 = c__14545__auto___84618;
var G__84621 = cljs.core.count.call(null,c__14545__auto___84618);
var G__84622 = 0;
seq__84559_84607 = G__84619;
chunk__84560_84608 = G__84620;
count__84561_84609 = G__84621;
i__84562_84610 = G__84622;
continue;
}
} else
{var c_84623 = cljs.core.first.call(null,seq__84559_84617__$1);dommy.attrs.add_class_BANG_.call(null,n,c_84623);
{
var G__84624 = cljs.core.next.call(null,seq__84559_84617__$1);
var G__84625 = null;
var G__84626 = 0;
var G__84627 = 0;
seq__84559_84607 = G__84624;
chunk__84560_84608 = G__84625;
count__84561_84609 = G__84626;
i__84562_84610 = G__84627;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__84558_84606))
{dommy.attrs.add_class_BANG_.call(null,n,v_84605);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_84604,v_84605);
} else
{}
}
}
{
var G__84628 = cljs.core.next.call(null,seq__84547_84597__$1);
var G__84629 = null;
var G__84630 = 0;
var G__84631 = 0;
seq__84547_84563 = G__84628;
chunk__84548_84564 = G__84629;
count__84549_84565 = G__84630;
i__84550_84566 = G__84631;
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
}catch (e84632){if((e84632 instanceof ReferenceError))
{var __84633 = e84632;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e84632;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__84635 = data;if(G__84635)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__84635.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__84635.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84635);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__84635);
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