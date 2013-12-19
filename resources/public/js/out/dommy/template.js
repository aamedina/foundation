// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj189573 = {};return obj189573;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8211__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (dommy.template._elem[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (dommy.template._elem["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
{var str_189576 = node_str.substring(base_idx);while(true){
var next_idx_189577 = dommy.template.next_css_index.call(null,str_189576,1);var frag_189578 = (((next_idx_189577 >= 0))?str_189576.substring(0,next_idx_189577):str_189576);var G__189575_189579 = frag_189578.charAt(0);if(cljs.core._EQ_.call(null,"#",G__189575_189579))
{node.setAttribute("id",frag_189578.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__189575_189579))
{dommy.attrs.add_class_BANG_.call(null,node,frag_189578.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_189578.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_189577 >= 0))
{{
var G__189580 = str_189576.substring(next_idx_189577);
str_189576 = G__189580;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__189586 = data;if(G__189586)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__189586.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__189586.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189586);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189586);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__189587_189591 = cljs.core.seq.call(null,data);var chunk__189588_189592 = null;var count__189589_189593 = 0;var i__189590_189594 = 0;while(true){
if((i__189590_189594 < count__189589_189593))
{var child_189595 = cljs.core._nth.call(null,chunk__189588_189592,i__189590_189594);__GT_document_fragment.call(null,result_frag,child_189595);
{
var G__189596 = seq__189587_189591;
var G__189597 = chunk__189588_189592;
var G__189598 = count__189589_189593;
var G__189599 = (i__189590_189594 + 1);
seq__189587_189591 = G__189596;
chunk__189588_189592 = G__189597;
count__189589_189593 = G__189598;
i__189590_189594 = G__189599;
continue;
}
} else
{var temp__4092__auto___189600 = cljs.core.seq.call(null,seq__189587_189591);if(temp__4092__auto___189600)
{var seq__189587_189601__$1 = temp__4092__auto___189600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189587_189601__$1))
{var c__8952__auto___189602 = cljs.core.chunk_first.call(null,seq__189587_189601__$1);{
var G__189603 = cljs.core.chunk_rest.call(null,seq__189587_189601__$1);
var G__189604 = c__8952__auto___189602;
var G__189605 = cljs.core.count.call(null,c__8952__auto___189602);
var G__189606 = 0;
seq__189587_189591 = G__189603;
chunk__189588_189592 = G__189604;
count__189589_189593 = G__189605;
i__189590_189594 = G__189606;
continue;
}
} else
{var child_189607 = cljs.core.first.call(null,seq__189587_189601__$1);__GT_document_fragment.call(null,result_frag,child_189607);
{
var G__189608 = cljs.core.next.call(null,seq__189587_189601__$1);
var G__189609 = null;
var G__189610 = 0;
var G__189611 = 0;
seq__189587_189591 = G__189608;
chunk__189588_189592 = G__189609;
count__189589_189593 = G__189610;
i__189590_189594 = G__189611;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__189613 = data;if(G__189613)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__189613.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__189613.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189613);
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
dommy.template.compound_element = (function compound_element(p__189614){var vec__189634 = p__189614;var tag_name = cljs.core.nth.call(null,vec__189634,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__189634,1,null);var children = cljs.core.nthnext.call(null,vec__189634,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__189636 = maybe_attrs;if(G__189636)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__189636.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__189636.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189636);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__189637_189653 = cljs.core.seq.call(null,attrs);var chunk__189638_189654 = null;var count__189639_189655 = 0;var i__189640_189656 = 0;while(true){
if((i__189640_189656 < count__189639_189655))
{var vec__189641_189657 = cljs.core._nth.call(null,chunk__189638_189654,i__189640_189656);var k_189658 = cljs.core.nth.call(null,vec__189641_189657,0,null);var v_189659 = cljs.core.nth.call(null,vec__189641_189657,1,null);var G__189642_189660 = k_189658;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__189642_189660))
{var seq__189643_189661 = cljs.core.seq.call(null,v_189659);var chunk__189644_189662 = null;var count__189645_189663 = 0;var i__189646_189664 = 0;while(true){
if((i__189646_189664 < count__189645_189663))
{var c_189665 = cljs.core._nth.call(null,chunk__189644_189662,i__189646_189664);dommy.attrs.add_class_BANG_.call(null,n,c_189665);
{
var G__189666 = seq__189643_189661;
var G__189667 = chunk__189644_189662;
var G__189668 = count__189645_189663;
var G__189669 = (i__189646_189664 + 1);
seq__189643_189661 = G__189666;
chunk__189644_189662 = G__189667;
count__189645_189663 = G__189668;
i__189646_189664 = G__189669;
continue;
}
} else
{var temp__4092__auto___189670 = cljs.core.seq.call(null,seq__189643_189661);if(temp__4092__auto___189670)
{var seq__189643_189671__$1 = temp__4092__auto___189670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189643_189671__$1))
{var c__8952__auto___189672 = cljs.core.chunk_first.call(null,seq__189643_189671__$1);{
var G__189673 = cljs.core.chunk_rest.call(null,seq__189643_189671__$1);
var G__189674 = c__8952__auto___189672;
var G__189675 = cljs.core.count.call(null,c__8952__auto___189672);
var G__189676 = 0;
seq__189643_189661 = G__189673;
chunk__189644_189662 = G__189674;
count__189645_189663 = G__189675;
i__189646_189664 = G__189676;
continue;
}
} else
{var c_189677 = cljs.core.first.call(null,seq__189643_189671__$1);dommy.attrs.add_class_BANG_.call(null,n,c_189677);
{
var G__189678 = cljs.core.next.call(null,seq__189643_189671__$1);
var G__189679 = null;
var G__189680 = 0;
var G__189681 = 0;
seq__189643_189661 = G__189678;
chunk__189644_189662 = G__189679;
count__189645_189663 = G__189680;
i__189646_189664 = G__189681;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__189642_189660))
{dommy.attrs.add_class_BANG_.call(null,n,v_189659);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_189658,v_189659);
} else
{}
}
}
{
var G__189682 = seq__189637_189653;
var G__189683 = chunk__189638_189654;
var G__189684 = count__189639_189655;
var G__189685 = (i__189640_189656 + 1);
seq__189637_189653 = G__189682;
chunk__189638_189654 = G__189683;
count__189639_189655 = G__189684;
i__189640_189656 = G__189685;
continue;
}
} else
{var temp__4092__auto___189686 = cljs.core.seq.call(null,seq__189637_189653);if(temp__4092__auto___189686)
{var seq__189637_189687__$1 = temp__4092__auto___189686;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189637_189687__$1))
{var c__8952__auto___189688 = cljs.core.chunk_first.call(null,seq__189637_189687__$1);{
var G__189689 = cljs.core.chunk_rest.call(null,seq__189637_189687__$1);
var G__189690 = c__8952__auto___189688;
var G__189691 = cljs.core.count.call(null,c__8952__auto___189688);
var G__189692 = 0;
seq__189637_189653 = G__189689;
chunk__189638_189654 = G__189690;
count__189639_189655 = G__189691;
i__189640_189656 = G__189692;
continue;
}
} else
{var vec__189647_189693 = cljs.core.first.call(null,seq__189637_189687__$1);var k_189694 = cljs.core.nth.call(null,vec__189647_189693,0,null);var v_189695 = cljs.core.nth.call(null,vec__189647_189693,1,null);var G__189648_189696 = k_189694;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__189648_189696))
{var seq__189649_189697 = cljs.core.seq.call(null,v_189695);var chunk__189650_189698 = null;var count__189651_189699 = 0;var i__189652_189700 = 0;while(true){
if((i__189652_189700 < count__189651_189699))
{var c_189701 = cljs.core._nth.call(null,chunk__189650_189698,i__189652_189700);dommy.attrs.add_class_BANG_.call(null,n,c_189701);
{
var G__189702 = seq__189649_189697;
var G__189703 = chunk__189650_189698;
var G__189704 = count__189651_189699;
var G__189705 = (i__189652_189700 + 1);
seq__189649_189697 = G__189702;
chunk__189650_189698 = G__189703;
count__189651_189699 = G__189704;
i__189652_189700 = G__189705;
continue;
}
} else
{var temp__4092__auto___189706__$1 = cljs.core.seq.call(null,seq__189649_189697);if(temp__4092__auto___189706__$1)
{var seq__189649_189707__$1 = temp__4092__auto___189706__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__189649_189707__$1))
{var c__8952__auto___189708 = cljs.core.chunk_first.call(null,seq__189649_189707__$1);{
var G__189709 = cljs.core.chunk_rest.call(null,seq__189649_189707__$1);
var G__189710 = c__8952__auto___189708;
var G__189711 = cljs.core.count.call(null,c__8952__auto___189708);
var G__189712 = 0;
seq__189649_189697 = G__189709;
chunk__189650_189698 = G__189710;
count__189651_189699 = G__189711;
i__189652_189700 = G__189712;
continue;
}
} else
{var c_189713 = cljs.core.first.call(null,seq__189649_189707__$1);dommy.attrs.add_class_BANG_.call(null,n,c_189713);
{
var G__189714 = cljs.core.next.call(null,seq__189649_189707__$1);
var G__189715 = null;
var G__189716 = 0;
var G__189717 = 0;
seq__189649_189697 = G__189714;
chunk__189650_189698 = G__189715;
count__189651_189699 = G__189716;
i__189652_189700 = G__189717;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__189648_189696))
{dommy.attrs.add_class_BANG_.call(null,n,v_189695);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_189694,v_189695);
} else
{}
}
}
{
var G__189718 = cljs.core.next.call(null,seq__189637_189687__$1);
var G__189719 = null;
var G__189720 = 0;
var G__189721 = 0;
seq__189637_189653 = G__189718;
chunk__189638_189654 = G__189719;
count__189639_189655 = G__189720;
i__189640_189656 = G__189721;
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
}catch (e189722){if((e189722 instanceof ReferenceError))
{var __189723 = e189722;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e189722;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__189725 = data;if(G__189725)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__189725.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__189725.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__189725);
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