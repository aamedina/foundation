// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj35537 = {};return obj35537;
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
{var str_35540 = node_str.substring(base_idx);while(true){
var next_idx_35541 = dommy.template.next_css_index.call(null,str_35540,1);var frag_35542 = (((next_idx_35541 >= 0))?str_35540.substring(0,next_idx_35541):str_35540);var G__35539_35543 = frag_35542.charAt(0);if(cljs.core._EQ_.call(null,"#",G__35539_35543))
{node.setAttribute("id",frag_35542.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__35539_35543))
{dommy.attrs.add_class_BANG_.call(null,node,frag_35542.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_35542.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_35541 >= 0))
{{
var G__35544 = str_35540.substring(next_idx_35541);
str_35540 = G__35544;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__35550 = data;if(G__35550)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__35550.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35550);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__35551_35555 = cljs.core.seq.call(null,data);var chunk__35552_35556 = null;var count__35553_35557 = 0;var i__35554_35558 = 0;while(true){
if((i__35554_35558 < count__35553_35557))
{var child_35559 = cljs.core._nth.call(null,chunk__35552_35556,i__35554_35558);__GT_document_fragment.call(null,result_frag,child_35559);
{
var G__35560 = seq__35551_35555;
var G__35561 = chunk__35552_35556;
var G__35562 = count__35553_35557;
var G__35563 = (i__35554_35558 + 1);
seq__35551_35555 = G__35560;
chunk__35552_35556 = G__35561;
count__35553_35557 = G__35562;
i__35554_35558 = G__35563;
continue;
}
} else
{var temp__4092__auto___35564 = cljs.core.seq.call(null,seq__35551_35555);if(temp__4092__auto___35564)
{var seq__35551_35565__$1 = temp__4092__auto___35564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35551_35565__$1))
{var c__14545__auto___35566 = cljs.core.chunk_first.call(null,seq__35551_35565__$1);{
var G__35567 = cljs.core.chunk_rest.call(null,seq__35551_35565__$1);
var G__35568 = c__14545__auto___35566;
var G__35569 = cljs.core.count.call(null,c__14545__auto___35566);
var G__35570 = 0;
seq__35551_35555 = G__35567;
chunk__35552_35556 = G__35568;
count__35553_35557 = G__35569;
i__35554_35558 = G__35570;
continue;
}
} else
{var child_35571 = cljs.core.first.call(null,seq__35551_35565__$1);__GT_document_fragment.call(null,result_frag,child_35571);
{
var G__35572 = cljs.core.next.call(null,seq__35551_35565__$1);
var G__35573 = null;
var G__35574 = 0;
var G__35575 = 0;
seq__35551_35555 = G__35572;
chunk__35552_35556 = G__35573;
count__35553_35557 = G__35574;
i__35554_35558 = G__35575;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__35577 = data;if(G__35577)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__35577.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35577.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35577);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35577);
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
dommy.template.compound_element = (function compound_element(p__35578){var vec__35598 = p__35578;var tag_name = cljs.core.nth.call(null,vec__35598,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__35598,1,null);var children = cljs.core.nthnext.call(null,vec__35598,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__35600 = maybe_attrs;if(G__35600)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__35600.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35600.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35600);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35600);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__35601_35617 = cljs.core.seq.call(null,attrs);var chunk__35602_35618 = null;var count__35603_35619 = 0;var i__35604_35620 = 0;while(true){
if((i__35604_35620 < count__35603_35619))
{var vec__35605_35621 = cljs.core._nth.call(null,chunk__35602_35618,i__35604_35620);var k_35622 = cljs.core.nth.call(null,vec__35605_35621,0,null);var v_35623 = cljs.core.nth.call(null,vec__35605_35621,1,null);var G__35606_35624 = k_35622;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35606_35624))
{var seq__35607_35625 = cljs.core.seq.call(null,v_35623);var chunk__35608_35626 = null;var count__35609_35627 = 0;var i__35610_35628 = 0;while(true){
if((i__35610_35628 < count__35609_35627))
{var c_35629 = cljs.core._nth.call(null,chunk__35608_35626,i__35610_35628);dommy.attrs.add_class_BANG_.call(null,n,c_35629);
{
var G__35630 = seq__35607_35625;
var G__35631 = chunk__35608_35626;
var G__35632 = count__35609_35627;
var G__35633 = (i__35610_35628 + 1);
seq__35607_35625 = G__35630;
chunk__35608_35626 = G__35631;
count__35609_35627 = G__35632;
i__35610_35628 = G__35633;
continue;
}
} else
{var temp__4092__auto___35634 = cljs.core.seq.call(null,seq__35607_35625);if(temp__4092__auto___35634)
{var seq__35607_35635__$1 = temp__4092__auto___35634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35607_35635__$1))
{var c__14545__auto___35636 = cljs.core.chunk_first.call(null,seq__35607_35635__$1);{
var G__35637 = cljs.core.chunk_rest.call(null,seq__35607_35635__$1);
var G__35638 = c__14545__auto___35636;
var G__35639 = cljs.core.count.call(null,c__14545__auto___35636);
var G__35640 = 0;
seq__35607_35625 = G__35637;
chunk__35608_35626 = G__35638;
count__35609_35627 = G__35639;
i__35610_35628 = G__35640;
continue;
}
} else
{var c_35641 = cljs.core.first.call(null,seq__35607_35635__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35641);
{
var G__35642 = cljs.core.next.call(null,seq__35607_35635__$1);
var G__35643 = null;
var G__35644 = 0;
var G__35645 = 0;
seq__35607_35625 = G__35642;
chunk__35608_35626 = G__35643;
count__35609_35627 = G__35644;
i__35610_35628 = G__35645;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35606_35624))
{dommy.attrs.add_class_BANG_.call(null,n,v_35623);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35622,v_35623);
} else
{}
}
}
{
var G__35646 = seq__35601_35617;
var G__35647 = chunk__35602_35618;
var G__35648 = count__35603_35619;
var G__35649 = (i__35604_35620 + 1);
seq__35601_35617 = G__35646;
chunk__35602_35618 = G__35647;
count__35603_35619 = G__35648;
i__35604_35620 = G__35649;
continue;
}
} else
{var temp__4092__auto___35650 = cljs.core.seq.call(null,seq__35601_35617);if(temp__4092__auto___35650)
{var seq__35601_35651__$1 = temp__4092__auto___35650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35601_35651__$1))
{var c__14545__auto___35652 = cljs.core.chunk_first.call(null,seq__35601_35651__$1);{
var G__35653 = cljs.core.chunk_rest.call(null,seq__35601_35651__$1);
var G__35654 = c__14545__auto___35652;
var G__35655 = cljs.core.count.call(null,c__14545__auto___35652);
var G__35656 = 0;
seq__35601_35617 = G__35653;
chunk__35602_35618 = G__35654;
count__35603_35619 = G__35655;
i__35604_35620 = G__35656;
continue;
}
} else
{var vec__35611_35657 = cljs.core.first.call(null,seq__35601_35651__$1);var k_35658 = cljs.core.nth.call(null,vec__35611_35657,0,null);var v_35659 = cljs.core.nth.call(null,vec__35611_35657,1,null);var G__35612_35660 = k_35658;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35612_35660))
{var seq__35613_35661 = cljs.core.seq.call(null,v_35659);var chunk__35614_35662 = null;var count__35615_35663 = 0;var i__35616_35664 = 0;while(true){
if((i__35616_35664 < count__35615_35663))
{var c_35665 = cljs.core._nth.call(null,chunk__35614_35662,i__35616_35664);dommy.attrs.add_class_BANG_.call(null,n,c_35665);
{
var G__35666 = seq__35613_35661;
var G__35667 = chunk__35614_35662;
var G__35668 = count__35615_35663;
var G__35669 = (i__35616_35664 + 1);
seq__35613_35661 = G__35666;
chunk__35614_35662 = G__35667;
count__35615_35663 = G__35668;
i__35616_35664 = G__35669;
continue;
}
} else
{var temp__4092__auto___35670__$1 = cljs.core.seq.call(null,seq__35613_35661);if(temp__4092__auto___35670__$1)
{var seq__35613_35671__$1 = temp__4092__auto___35670__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35613_35671__$1))
{var c__14545__auto___35672 = cljs.core.chunk_first.call(null,seq__35613_35671__$1);{
var G__35673 = cljs.core.chunk_rest.call(null,seq__35613_35671__$1);
var G__35674 = c__14545__auto___35672;
var G__35675 = cljs.core.count.call(null,c__14545__auto___35672);
var G__35676 = 0;
seq__35613_35661 = G__35673;
chunk__35614_35662 = G__35674;
count__35615_35663 = G__35675;
i__35616_35664 = G__35676;
continue;
}
} else
{var c_35677 = cljs.core.first.call(null,seq__35613_35671__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35677);
{
var G__35678 = cljs.core.next.call(null,seq__35613_35671__$1);
var G__35679 = null;
var G__35680 = 0;
var G__35681 = 0;
seq__35613_35661 = G__35678;
chunk__35614_35662 = G__35679;
count__35615_35663 = G__35680;
i__35616_35664 = G__35681;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35612_35660))
{dommy.attrs.add_class_BANG_.call(null,n,v_35659);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35658,v_35659);
} else
{}
}
}
{
var G__35682 = cljs.core.next.call(null,seq__35601_35651__$1);
var G__35683 = null;
var G__35684 = 0;
var G__35685 = 0;
seq__35601_35617 = G__35682;
chunk__35602_35618 = G__35683;
count__35603_35619 = G__35684;
i__35604_35620 = G__35685;
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
}catch (e35686){if((e35686 instanceof ReferenceError))
{var __35687 = e35686;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35686;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__35689 = data;if(G__35689)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__35689.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35689.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35689);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35689);
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