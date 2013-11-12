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
dommy.template._elem = (function _elem(this$){if((function (){var and__7430__auto__ = this$;if(and__7430__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7430__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8035__auto__ = (((this$ == null))?null:this$);return (function (){var or__7439__auto__ = (dommy.template._elem[goog.typeOf(x__8035__auto__)]);if(or__7439__auto__)
{return or__7439__auto__;
} else
{var or__7439__auto____$1 = (dommy.template._elem["_"]);if(or__7439__auto____$1)
{return or__7439__auto____$1;
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
{var str_32599 = node_str.substring(base_idx);while(true){
var next_idx_32600 = dommy.template.next_css_index.call(null,str_32599,1);var frag_32601 = (((next_idx_32600 >= 0))?str_32599.substring(0,next_idx_32600):str_32599);var G__32598_32602 = frag_32601.charAt(0);if(cljs.core._EQ_.call(null,"#",G__32598_32602))
{node.setAttribute("id",frag_32601.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__32598_32602))
{dommy.attrs.add_class_BANG_.call(null,node,frag_32601.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_32601.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_32600 >= 0))
{{
var G__32603 = str_32599.substring(next_idx_32600);
str_32599 = G__32603;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__32609 = data;if(G__32609)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__32609.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__32609.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32609);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32609);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__32610_32614 = cljs.core.seq.call(null,data);var chunk__32611_32615 = null;var count__32612_32616 = 0;var i__32613_32617 = 0;while(true){
if((i__32613_32617 < count__32612_32616))
{var child_32618 = cljs.core._nth.call(null,chunk__32611_32615,i__32613_32617);__GT_document_fragment.call(null,result_frag,child_32618);
{
var G__32619 = seq__32610_32614;
var G__32620 = chunk__32611_32615;
var G__32621 = count__32612_32616;
var G__32622 = (i__32613_32617 + 1);
seq__32610_32614 = G__32619;
chunk__32611_32615 = G__32620;
count__32612_32616 = G__32621;
i__32613_32617 = G__32622;
continue;
}
} else
{var temp__4092__auto___32623 = cljs.core.seq.call(null,seq__32610_32614);if(temp__4092__auto___32623)
{var seq__32610_32624__$1 = temp__4092__auto___32623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32610_32624__$1))
{var c__8156__auto___32625 = cljs.core.chunk_first.call(null,seq__32610_32624__$1);{
var G__32626 = cljs.core.chunk_rest.call(null,seq__32610_32624__$1);
var G__32627 = c__8156__auto___32625;
var G__32628 = cljs.core.count.call(null,c__8156__auto___32625);
var G__32629 = 0;
seq__32610_32614 = G__32626;
chunk__32611_32615 = G__32627;
count__32612_32616 = G__32628;
i__32613_32617 = G__32629;
continue;
}
} else
{var child_32630 = cljs.core.first.call(null,seq__32610_32624__$1);__GT_document_fragment.call(null,result_frag,child_32630);
{
var G__32631 = cljs.core.next.call(null,seq__32610_32624__$1);
var G__32632 = null;
var G__32633 = 0;
var G__32634 = 0;
seq__32610_32614 = G__32631;
chunk__32611_32615 = G__32632;
count__32612_32616 = G__32633;
i__32613_32617 = G__32634;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__32636 = data;if(G__32636)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__32636.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__32636.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32636);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32636);
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
dommy.template.compound_element = (function compound_element(p__32637){var vec__32657 = p__32637;var tag_name = cljs.core.nth.call(null,vec__32657,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__32657,1,null);var children = cljs.core.nthnext.call(null,vec__32657,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__32659 = maybe_attrs;if(G__32659)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__32659.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__32659.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32659);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32659);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__32660_32676 = cljs.core.seq.call(null,attrs);var chunk__32661_32677 = null;var count__32662_32678 = 0;var i__32663_32679 = 0;while(true){
if((i__32663_32679 < count__32662_32678))
{var vec__32664_32680 = cljs.core._nth.call(null,chunk__32661_32677,i__32663_32679);var k_32681 = cljs.core.nth.call(null,vec__32664_32680,0,null);var v_32682 = cljs.core.nth.call(null,vec__32664_32680,1,null);var G__32665_32683 = k_32681;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__32665_32683))
{var seq__32666_32684 = cljs.core.seq.call(null,v_32682);var chunk__32667_32685 = null;var count__32668_32686 = 0;var i__32669_32687 = 0;while(true){
if((i__32669_32687 < count__32668_32686))
{var c_32688 = cljs.core._nth.call(null,chunk__32667_32685,i__32669_32687);dommy.attrs.add_class_BANG_.call(null,n,c_32688);
{
var G__32689 = seq__32666_32684;
var G__32690 = chunk__32667_32685;
var G__32691 = count__32668_32686;
var G__32692 = (i__32669_32687 + 1);
seq__32666_32684 = G__32689;
chunk__32667_32685 = G__32690;
count__32668_32686 = G__32691;
i__32669_32687 = G__32692;
continue;
}
} else
{var temp__4092__auto___32693 = cljs.core.seq.call(null,seq__32666_32684);if(temp__4092__auto___32693)
{var seq__32666_32694__$1 = temp__4092__auto___32693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32666_32694__$1))
{var c__8156__auto___32695 = cljs.core.chunk_first.call(null,seq__32666_32694__$1);{
var G__32696 = cljs.core.chunk_rest.call(null,seq__32666_32694__$1);
var G__32697 = c__8156__auto___32695;
var G__32698 = cljs.core.count.call(null,c__8156__auto___32695);
var G__32699 = 0;
seq__32666_32684 = G__32696;
chunk__32667_32685 = G__32697;
count__32668_32686 = G__32698;
i__32669_32687 = G__32699;
continue;
}
} else
{var c_32700 = cljs.core.first.call(null,seq__32666_32694__$1);dommy.attrs.add_class_BANG_.call(null,n,c_32700);
{
var G__32701 = cljs.core.next.call(null,seq__32666_32694__$1);
var G__32702 = null;
var G__32703 = 0;
var G__32704 = 0;
seq__32666_32684 = G__32701;
chunk__32667_32685 = G__32702;
count__32668_32686 = G__32703;
i__32669_32687 = G__32704;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__32665_32683))
{dommy.attrs.add_class_BANG_.call(null,n,v_32682);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_32681,v_32682);
} else
{}
}
}
{
var G__32705 = seq__32660_32676;
var G__32706 = chunk__32661_32677;
var G__32707 = count__32662_32678;
var G__32708 = (i__32663_32679 + 1);
seq__32660_32676 = G__32705;
chunk__32661_32677 = G__32706;
count__32662_32678 = G__32707;
i__32663_32679 = G__32708;
continue;
}
} else
{var temp__4092__auto___32709 = cljs.core.seq.call(null,seq__32660_32676);if(temp__4092__auto___32709)
{var seq__32660_32710__$1 = temp__4092__auto___32709;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32660_32710__$1))
{var c__8156__auto___32711 = cljs.core.chunk_first.call(null,seq__32660_32710__$1);{
var G__32712 = cljs.core.chunk_rest.call(null,seq__32660_32710__$1);
var G__32713 = c__8156__auto___32711;
var G__32714 = cljs.core.count.call(null,c__8156__auto___32711);
var G__32715 = 0;
seq__32660_32676 = G__32712;
chunk__32661_32677 = G__32713;
count__32662_32678 = G__32714;
i__32663_32679 = G__32715;
continue;
}
} else
{var vec__32670_32716 = cljs.core.first.call(null,seq__32660_32710__$1);var k_32717 = cljs.core.nth.call(null,vec__32670_32716,0,null);var v_32718 = cljs.core.nth.call(null,vec__32670_32716,1,null);var G__32671_32719 = k_32717;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__32671_32719))
{var seq__32672_32720 = cljs.core.seq.call(null,v_32718);var chunk__32673_32721 = null;var count__32674_32722 = 0;var i__32675_32723 = 0;while(true){
if((i__32675_32723 < count__32674_32722))
{var c_32724 = cljs.core._nth.call(null,chunk__32673_32721,i__32675_32723);dommy.attrs.add_class_BANG_.call(null,n,c_32724);
{
var G__32725 = seq__32672_32720;
var G__32726 = chunk__32673_32721;
var G__32727 = count__32674_32722;
var G__32728 = (i__32675_32723 + 1);
seq__32672_32720 = G__32725;
chunk__32673_32721 = G__32726;
count__32674_32722 = G__32727;
i__32675_32723 = G__32728;
continue;
}
} else
{var temp__4092__auto___32729__$1 = cljs.core.seq.call(null,seq__32672_32720);if(temp__4092__auto___32729__$1)
{var seq__32672_32730__$1 = temp__4092__auto___32729__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32672_32730__$1))
{var c__8156__auto___32731 = cljs.core.chunk_first.call(null,seq__32672_32730__$1);{
var G__32732 = cljs.core.chunk_rest.call(null,seq__32672_32730__$1);
var G__32733 = c__8156__auto___32731;
var G__32734 = cljs.core.count.call(null,c__8156__auto___32731);
var G__32735 = 0;
seq__32672_32720 = G__32732;
chunk__32673_32721 = G__32733;
count__32674_32722 = G__32734;
i__32675_32723 = G__32735;
continue;
}
} else
{var c_32736 = cljs.core.first.call(null,seq__32672_32730__$1);dommy.attrs.add_class_BANG_.call(null,n,c_32736);
{
var G__32737 = cljs.core.next.call(null,seq__32672_32730__$1);
var G__32738 = null;
var G__32739 = 0;
var G__32740 = 0;
seq__32672_32720 = G__32737;
chunk__32673_32721 = G__32738;
count__32674_32722 = G__32739;
i__32675_32723 = G__32740;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__32671_32719))
{dommy.attrs.add_class_BANG_.call(null,n,v_32718);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_32717,v_32718);
} else
{}
}
}
{
var G__32741 = cljs.core.next.call(null,seq__32660_32710__$1);
var G__32742 = null;
var G__32743 = 0;
var G__32744 = 0;
seq__32660_32676 = G__32741;
chunk__32661_32677 = G__32742;
count__32662_32678 = G__32743;
i__32663_32679 = G__32744;
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
}catch (e32745){if((e32745 instanceof ReferenceError))
{var __32746 = e32745;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32745;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__32748 = data;if(G__32748)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__32748.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__32748.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32748);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__32748);
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
