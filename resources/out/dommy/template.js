// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj45560 = {};return obj45560;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13942__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (dommy.template._elem[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (dommy.template._elem["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
{var str_45563 = node_str.substring(base_idx);while(true){
var next_idx_45564 = dommy.template.next_css_index.call(null,str_45563,1);var frag_45565 = (((next_idx_45564 >= 0))?str_45563.substring(0,next_idx_45564):str_45563);var G__45562_45566 = frag_45565.charAt(0);if(cljs.core._EQ_.call(null,"#",G__45562_45566))
{node.setAttribute("id",frag_45565.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__45562_45566))
{dommy.attrs.add_class_BANG_.call(null,node,frag_45565.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_45565.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_45564 >= 0))
{{
var G__45567 = str_45563.substring(next_idx_45564);
str_45563 = G__45567;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__45573 = data;if(G__45573)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__45573.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45573.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45573);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__45574_45578 = cljs.core.seq.call(null,data);var chunk__45575_45579 = null;var count__45576_45580 = 0;var i__45577_45581 = 0;while(true){
if((i__45577_45581 < count__45576_45580))
{var child_45582 = cljs.core._nth.call(null,chunk__45575_45579,i__45577_45581);__GT_document_fragment.call(null,result_frag,child_45582);
{
var G__45583 = seq__45574_45578;
var G__45584 = chunk__45575_45579;
var G__45585 = count__45576_45580;
var G__45586 = (i__45577_45581 + 1);
seq__45574_45578 = G__45583;
chunk__45575_45579 = G__45584;
count__45576_45580 = G__45585;
i__45577_45581 = G__45586;
continue;
}
} else
{var temp__4092__auto___45587 = cljs.core.seq.call(null,seq__45574_45578);if(temp__4092__auto___45587)
{var seq__45574_45588__$1 = temp__4092__auto___45587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45574_45588__$1))
{var c__14683__auto___45589 = cljs.core.chunk_first.call(null,seq__45574_45588__$1);{
var G__45590 = cljs.core.chunk_rest.call(null,seq__45574_45588__$1);
var G__45591 = c__14683__auto___45589;
var G__45592 = cljs.core.count.call(null,c__14683__auto___45589);
var G__45593 = 0;
seq__45574_45578 = G__45590;
chunk__45575_45579 = G__45591;
count__45576_45580 = G__45592;
i__45577_45581 = G__45593;
continue;
}
} else
{var child_45594 = cljs.core.first.call(null,seq__45574_45588__$1);__GT_document_fragment.call(null,result_frag,child_45594);
{
var G__45595 = cljs.core.next.call(null,seq__45574_45588__$1);
var G__45596 = null;
var G__45597 = 0;
var G__45598 = 0;
seq__45574_45578 = G__45595;
chunk__45575_45579 = G__45596;
count__45576_45580 = G__45597;
i__45577_45581 = G__45598;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__45600 = data;if(G__45600)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__45600.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45600.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45600);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45600);
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
dommy.template.compound_element = (function compound_element(p__45601){var vec__45621 = p__45601;var tag_name = cljs.core.nth.call(null,vec__45621,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__45621,1,null);var children = cljs.core.nthnext.call(null,vec__45621,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__45623 = maybe_attrs;if(G__45623)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__45623.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45623);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__45624_45640 = cljs.core.seq.call(null,attrs);var chunk__45625_45641 = null;var count__45626_45642 = 0;var i__45627_45643 = 0;while(true){
if((i__45627_45643 < count__45626_45642))
{var vec__45628_45644 = cljs.core._nth.call(null,chunk__45625_45641,i__45627_45643);var k_45645 = cljs.core.nth.call(null,vec__45628_45644,0,null);var v_45646 = cljs.core.nth.call(null,vec__45628_45644,1,null);var G__45629_45647 = k_45645;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45629_45647))
{var seq__45630_45648 = cljs.core.seq.call(null,v_45646);var chunk__45631_45649 = null;var count__45632_45650 = 0;var i__45633_45651 = 0;while(true){
if((i__45633_45651 < count__45632_45650))
{var c_45652 = cljs.core._nth.call(null,chunk__45631_45649,i__45633_45651);dommy.attrs.add_class_BANG_.call(null,n,c_45652);
{
var G__45653 = seq__45630_45648;
var G__45654 = chunk__45631_45649;
var G__45655 = count__45632_45650;
var G__45656 = (i__45633_45651 + 1);
seq__45630_45648 = G__45653;
chunk__45631_45649 = G__45654;
count__45632_45650 = G__45655;
i__45633_45651 = G__45656;
continue;
}
} else
{var temp__4092__auto___45657 = cljs.core.seq.call(null,seq__45630_45648);if(temp__4092__auto___45657)
{var seq__45630_45658__$1 = temp__4092__auto___45657;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45630_45658__$1))
{var c__14683__auto___45659 = cljs.core.chunk_first.call(null,seq__45630_45658__$1);{
var G__45660 = cljs.core.chunk_rest.call(null,seq__45630_45658__$1);
var G__45661 = c__14683__auto___45659;
var G__45662 = cljs.core.count.call(null,c__14683__auto___45659);
var G__45663 = 0;
seq__45630_45648 = G__45660;
chunk__45631_45649 = G__45661;
count__45632_45650 = G__45662;
i__45633_45651 = G__45663;
continue;
}
} else
{var c_45664 = cljs.core.first.call(null,seq__45630_45658__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45664);
{
var G__45665 = cljs.core.next.call(null,seq__45630_45658__$1);
var G__45666 = null;
var G__45667 = 0;
var G__45668 = 0;
seq__45630_45648 = G__45665;
chunk__45631_45649 = G__45666;
count__45632_45650 = G__45667;
i__45633_45651 = G__45668;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45629_45647))
{dommy.attrs.add_class_BANG_.call(null,n,v_45646);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45645,v_45646);
} else
{}
}
}
{
var G__45669 = seq__45624_45640;
var G__45670 = chunk__45625_45641;
var G__45671 = count__45626_45642;
var G__45672 = (i__45627_45643 + 1);
seq__45624_45640 = G__45669;
chunk__45625_45641 = G__45670;
count__45626_45642 = G__45671;
i__45627_45643 = G__45672;
continue;
}
} else
{var temp__4092__auto___45673 = cljs.core.seq.call(null,seq__45624_45640);if(temp__4092__auto___45673)
{var seq__45624_45674__$1 = temp__4092__auto___45673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45624_45674__$1))
{var c__14683__auto___45675 = cljs.core.chunk_first.call(null,seq__45624_45674__$1);{
var G__45676 = cljs.core.chunk_rest.call(null,seq__45624_45674__$1);
var G__45677 = c__14683__auto___45675;
var G__45678 = cljs.core.count.call(null,c__14683__auto___45675);
var G__45679 = 0;
seq__45624_45640 = G__45676;
chunk__45625_45641 = G__45677;
count__45626_45642 = G__45678;
i__45627_45643 = G__45679;
continue;
}
} else
{var vec__45634_45680 = cljs.core.first.call(null,seq__45624_45674__$1);var k_45681 = cljs.core.nth.call(null,vec__45634_45680,0,null);var v_45682 = cljs.core.nth.call(null,vec__45634_45680,1,null);var G__45635_45683 = k_45681;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__45635_45683))
{var seq__45636_45684 = cljs.core.seq.call(null,v_45682);var chunk__45637_45685 = null;var count__45638_45686 = 0;var i__45639_45687 = 0;while(true){
if((i__45639_45687 < count__45638_45686))
{var c_45688 = cljs.core._nth.call(null,chunk__45637_45685,i__45639_45687);dommy.attrs.add_class_BANG_.call(null,n,c_45688);
{
var G__45689 = seq__45636_45684;
var G__45690 = chunk__45637_45685;
var G__45691 = count__45638_45686;
var G__45692 = (i__45639_45687 + 1);
seq__45636_45684 = G__45689;
chunk__45637_45685 = G__45690;
count__45638_45686 = G__45691;
i__45639_45687 = G__45692;
continue;
}
} else
{var temp__4092__auto___45693__$1 = cljs.core.seq.call(null,seq__45636_45684);if(temp__4092__auto___45693__$1)
{var seq__45636_45694__$1 = temp__4092__auto___45693__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45636_45694__$1))
{var c__14683__auto___45695 = cljs.core.chunk_first.call(null,seq__45636_45694__$1);{
var G__45696 = cljs.core.chunk_rest.call(null,seq__45636_45694__$1);
var G__45697 = c__14683__auto___45695;
var G__45698 = cljs.core.count.call(null,c__14683__auto___45695);
var G__45699 = 0;
seq__45636_45684 = G__45696;
chunk__45637_45685 = G__45697;
count__45638_45686 = G__45698;
i__45639_45687 = G__45699;
continue;
}
} else
{var c_45700 = cljs.core.first.call(null,seq__45636_45694__$1);dommy.attrs.add_class_BANG_.call(null,n,c_45700);
{
var G__45701 = cljs.core.next.call(null,seq__45636_45694__$1);
var G__45702 = null;
var G__45703 = 0;
var G__45704 = 0;
seq__45636_45684 = G__45701;
chunk__45637_45685 = G__45702;
count__45638_45686 = G__45703;
i__45639_45687 = G__45704;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__45635_45683))
{dommy.attrs.add_class_BANG_.call(null,n,v_45682);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_45681,v_45682);
} else
{}
}
}
{
var G__45705 = cljs.core.next.call(null,seq__45624_45674__$1);
var G__45706 = null;
var G__45707 = 0;
var G__45708 = 0;
seq__45624_45640 = G__45705;
chunk__45625_45641 = G__45706;
count__45626_45642 = G__45707;
i__45627_45643 = G__45708;
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
}catch (e45709){if((e45709 instanceof ReferenceError))
{var __45710 = e45709;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45709;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__45712 = data;if(G__45712)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__45712.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__45712.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45712);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__45712);
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