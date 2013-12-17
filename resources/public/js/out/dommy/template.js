// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj13539 = {};return obj13539;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8186__auto__ = this$;if(and__8186__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8186__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8806__auto__ = (((this$ == null))?null:this$);return (function (){var or__8198__auto__ = (dommy.template._elem[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (dommy.template._elem["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
{var str_13542 = node_str.substring(base_idx);while(true){
var next_idx_13543 = dommy.template.next_css_index.call(null,str_13542,1);var frag_13544 = (((next_idx_13543 >= 0))?str_13542.substring(0,next_idx_13543):str_13542);var G__13541_13545 = frag_13544.charAt(0);if(cljs.core._EQ_.call(null,"#",G__13541_13545))
{node.setAttribute("id",frag_13544.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__13541_13545))
{dommy.attrs.add_class_BANG_.call(null,node,frag_13544.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_13544.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_13543 >= 0))
{{
var G__13546 = str_13542.substring(next_idx_13543);
str_13542 = G__13546;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__13552 = data;if(G__13552)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13552.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13552.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13552);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13552);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__13553_13557 = cljs.core.seq.call(null,data);var chunk__13554_13558 = null;var count__13555_13559 = 0;var i__13556_13560 = 0;while(true){
if((i__13556_13560 < count__13555_13559))
{var child_13561 = cljs.core._nth.call(null,chunk__13554_13558,i__13556_13560);__GT_document_fragment.call(null,result_frag,child_13561);
{
var G__13562 = seq__13553_13557;
var G__13563 = chunk__13554_13558;
var G__13564 = count__13555_13559;
var G__13565 = (i__13556_13560 + 1);
seq__13553_13557 = G__13562;
chunk__13554_13558 = G__13563;
count__13555_13559 = G__13564;
i__13556_13560 = G__13565;
continue;
}
} else
{var temp__4092__auto___13566 = cljs.core.seq.call(null,seq__13553_13557);if(temp__4092__auto___13566)
{var seq__13553_13567__$1 = temp__4092__auto___13566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13553_13567__$1))
{var c__8927__auto___13568 = cljs.core.chunk_first.call(null,seq__13553_13567__$1);{
var G__13569 = cljs.core.chunk_rest.call(null,seq__13553_13567__$1);
var G__13570 = c__8927__auto___13568;
var G__13571 = cljs.core.count.call(null,c__8927__auto___13568);
var G__13572 = 0;
seq__13553_13557 = G__13569;
chunk__13554_13558 = G__13570;
count__13555_13559 = G__13571;
i__13556_13560 = G__13572;
continue;
}
} else
{var child_13573 = cljs.core.first.call(null,seq__13553_13567__$1);__GT_document_fragment.call(null,result_frag,child_13573);
{
var G__13574 = cljs.core.next.call(null,seq__13553_13567__$1);
var G__13575 = null;
var G__13576 = 0;
var G__13577 = 0;
seq__13553_13557 = G__13574;
chunk__13554_13558 = G__13575;
count__13555_13559 = G__13576;
i__13556_13560 = G__13577;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__13579 = data;if(G__13579)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13579.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13579.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13579);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13579);
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
dommy.template.compound_element = (function compound_element(p__13580){var vec__13600 = p__13580;var tag_name = cljs.core.nth.call(null,vec__13600,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__13600,1,null);var children = cljs.core.nthnext.call(null,vec__13600,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__13602 = maybe_attrs;if(G__13602)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13602.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13602.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13602);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13602);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__13603_13619 = cljs.core.seq.call(null,attrs);var chunk__13604_13620 = null;var count__13605_13621 = 0;var i__13606_13622 = 0;while(true){
if((i__13606_13622 < count__13605_13621))
{var vec__13607_13623 = cljs.core._nth.call(null,chunk__13604_13620,i__13606_13622);var k_13624 = cljs.core.nth.call(null,vec__13607_13623,0,null);var v_13625 = cljs.core.nth.call(null,vec__13607_13623,1,null);var G__13608_13626 = k_13624;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13608_13626))
{var seq__13609_13627 = cljs.core.seq.call(null,v_13625);var chunk__13610_13628 = null;var count__13611_13629 = 0;var i__13612_13630 = 0;while(true){
if((i__13612_13630 < count__13611_13629))
{var c_13631 = cljs.core._nth.call(null,chunk__13610_13628,i__13612_13630);dommy.attrs.add_class_BANG_.call(null,n,c_13631);
{
var G__13632 = seq__13609_13627;
var G__13633 = chunk__13610_13628;
var G__13634 = count__13611_13629;
var G__13635 = (i__13612_13630 + 1);
seq__13609_13627 = G__13632;
chunk__13610_13628 = G__13633;
count__13611_13629 = G__13634;
i__13612_13630 = G__13635;
continue;
}
} else
{var temp__4092__auto___13636 = cljs.core.seq.call(null,seq__13609_13627);if(temp__4092__auto___13636)
{var seq__13609_13637__$1 = temp__4092__auto___13636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13609_13637__$1))
{var c__8927__auto___13638 = cljs.core.chunk_first.call(null,seq__13609_13637__$1);{
var G__13639 = cljs.core.chunk_rest.call(null,seq__13609_13637__$1);
var G__13640 = c__8927__auto___13638;
var G__13641 = cljs.core.count.call(null,c__8927__auto___13638);
var G__13642 = 0;
seq__13609_13627 = G__13639;
chunk__13610_13628 = G__13640;
count__13611_13629 = G__13641;
i__13612_13630 = G__13642;
continue;
}
} else
{var c_13643 = cljs.core.first.call(null,seq__13609_13637__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13643);
{
var G__13644 = cljs.core.next.call(null,seq__13609_13637__$1);
var G__13645 = null;
var G__13646 = 0;
var G__13647 = 0;
seq__13609_13627 = G__13644;
chunk__13610_13628 = G__13645;
count__13611_13629 = G__13646;
i__13612_13630 = G__13647;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13608_13626))
{dommy.attrs.add_class_BANG_.call(null,n,v_13625);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13624,v_13625);
} else
{}
}
}
{
var G__13648 = seq__13603_13619;
var G__13649 = chunk__13604_13620;
var G__13650 = count__13605_13621;
var G__13651 = (i__13606_13622 + 1);
seq__13603_13619 = G__13648;
chunk__13604_13620 = G__13649;
count__13605_13621 = G__13650;
i__13606_13622 = G__13651;
continue;
}
} else
{var temp__4092__auto___13652 = cljs.core.seq.call(null,seq__13603_13619);if(temp__4092__auto___13652)
{var seq__13603_13653__$1 = temp__4092__auto___13652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13603_13653__$1))
{var c__8927__auto___13654 = cljs.core.chunk_first.call(null,seq__13603_13653__$1);{
var G__13655 = cljs.core.chunk_rest.call(null,seq__13603_13653__$1);
var G__13656 = c__8927__auto___13654;
var G__13657 = cljs.core.count.call(null,c__8927__auto___13654);
var G__13658 = 0;
seq__13603_13619 = G__13655;
chunk__13604_13620 = G__13656;
count__13605_13621 = G__13657;
i__13606_13622 = G__13658;
continue;
}
} else
{var vec__13613_13659 = cljs.core.first.call(null,seq__13603_13653__$1);var k_13660 = cljs.core.nth.call(null,vec__13613_13659,0,null);var v_13661 = cljs.core.nth.call(null,vec__13613_13659,1,null);var G__13614_13662 = k_13660;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13614_13662))
{var seq__13615_13663 = cljs.core.seq.call(null,v_13661);var chunk__13616_13664 = null;var count__13617_13665 = 0;var i__13618_13666 = 0;while(true){
if((i__13618_13666 < count__13617_13665))
{var c_13667 = cljs.core._nth.call(null,chunk__13616_13664,i__13618_13666);dommy.attrs.add_class_BANG_.call(null,n,c_13667);
{
var G__13668 = seq__13615_13663;
var G__13669 = chunk__13616_13664;
var G__13670 = count__13617_13665;
var G__13671 = (i__13618_13666 + 1);
seq__13615_13663 = G__13668;
chunk__13616_13664 = G__13669;
count__13617_13665 = G__13670;
i__13618_13666 = G__13671;
continue;
}
} else
{var temp__4092__auto___13672__$1 = cljs.core.seq.call(null,seq__13615_13663);if(temp__4092__auto___13672__$1)
{var seq__13615_13673__$1 = temp__4092__auto___13672__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13615_13673__$1))
{var c__8927__auto___13674 = cljs.core.chunk_first.call(null,seq__13615_13673__$1);{
var G__13675 = cljs.core.chunk_rest.call(null,seq__13615_13673__$1);
var G__13676 = c__8927__auto___13674;
var G__13677 = cljs.core.count.call(null,c__8927__auto___13674);
var G__13678 = 0;
seq__13615_13663 = G__13675;
chunk__13616_13664 = G__13676;
count__13617_13665 = G__13677;
i__13618_13666 = G__13678;
continue;
}
} else
{var c_13679 = cljs.core.first.call(null,seq__13615_13673__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13679);
{
var G__13680 = cljs.core.next.call(null,seq__13615_13673__$1);
var G__13681 = null;
var G__13682 = 0;
var G__13683 = 0;
seq__13615_13663 = G__13680;
chunk__13616_13664 = G__13681;
count__13617_13665 = G__13682;
i__13618_13666 = G__13683;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13614_13662))
{dommy.attrs.add_class_BANG_.call(null,n,v_13661);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13660,v_13661);
} else
{}
}
}
{
var G__13684 = cljs.core.next.call(null,seq__13603_13653__$1);
var G__13685 = null;
var G__13686 = 0;
var G__13687 = 0;
seq__13603_13619 = G__13684;
chunk__13604_13620 = G__13685;
count__13605_13621 = G__13686;
i__13606_13622 = G__13687;
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
}catch (e13688){if((e13688 instanceof ReferenceError))
{var __13689 = e13688;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13688;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__13691 = data;if(G__13691)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13691.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13691.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13691);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13691);
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