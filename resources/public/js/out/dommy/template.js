// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj181697 = {};return obj181697;
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
{var str_181700 = node_str.substring(base_idx);while(true){
var next_idx_181701 = dommy.template.next_css_index.call(null,str_181700,1);var frag_181702 = (((next_idx_181701 >= 0))?str_181700.substring(0,next_idx_181701):str_181700);var G__181699_181703 = frag_181702.charAt(0);if(cljs.core._EQ_.call(null,"#",G__181699_181703))
{node.setAttribute("id",frag_181702.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__181699_181703))
{dommy.attrs.add_class_BANG_.call(null,node,frag_181702.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_181702.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_181701 >= 0))
{{
var G__181704 = str_181700.substring(next_idx_181701);
str_181700 = G__181704;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__181710 = data;if(G__181710)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__181710.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__181710.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181710);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181710);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__181711_181715 = cljs.core.seq.call(null,data);var chunk__181712_181716 = null;var count__181713_181717 = 0;var i__181714_181718 = 0;while(true){
if((i__181714_181718 < count__181713_181717))
{var child_181719 = cljs.core._nth.call(null,chunk__181712_181716,i__181714_181718);__GT_document_fragment.call(null,result_frag,child_181719);
{
var G__181720 = seq__181711_181715;
var G__181721 = chunk__181712_181716;
var G__181722 = count__181713_181717;
var G__181723 = (i__181714_181718 + 1);
seq__181711_181715 = G__181720;
chunk__181712_181716 = G__181721;
count__181713_181717 = G__181722;
i__181714_181718 = G__181723;
continue;
}
} else
{var temp__4092__auto___181724 = cljs.core.seq.call(null,seq__181711_181715);if(temp__4092__auto___181724)
{var seq__181711_181725__$1 = temp__4092__auto___181724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181711_181725__$1))
{var c__8952__auto___181726 = cljs.core.chunk_first.call(null,seq__181711_181725__$1);{
var G__181727 = cljs.core.chunk_rest.call(null,seq__181711_181725__$1);
var G__181728 = c__8952__auto___181726;
var G__181729 = cljs.core.count.call(null,c__8952__auto___181726);
var G__181730 = 0;
seq__181711_181715 = G__181727;
chunk__181712_181716 = G__181728;
count__181713_181717 = G__181729;
i__181714_181718 = G__181730;
continue;
}
} else
{var child_181731 = cljs.core.first.call(null,seq__181711_181725__$1);__GT_document_fragment.call(null,result_frag,child_181731);
{
var G__181732 = cljs.core.next.call(null,seq__181711_181725__$1);
var G__181733 = null;
var G__181734 = 0;
var G__181735 = 0;
seq__181711_181715 = G__181732;
chunk__181712_181716 = G__181733;
count__181713_181717 = G__181734;
i__181714_181718 = G__181735;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__181737 = data;if(G__181737)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__181737.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__181737.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181737);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181737);
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
dommy.template.compound_element = (function compound_element(p__181738){var vec__181758 = p__181738;var tag_name = cljs.core.nth.call(null,vec__181758,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__181758,1,null);var children = cljs.core.nthnext.call(null,vec__181758,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__181760 = maybe_attrs;if(G__181760)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__181760.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__181760.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181760);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181760);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__181761_181777 = cljs.core.seq.call(null,attrs);var chunk__181762_181778 = null;var count__181763_181779 = 0;var i__181764_181780 = 0;while(true){
if((i__181764_181780 < count__181763_181779))
{var vec__181765_181781 = cljs.core._nth.call(null,chunk__181762_181778,i__181764_181780);var k_181782 = cljs.core.nth.call(null,vec__181765_181781,0,null);var v_181783 = cljs.core.nth.call(null,vec__181765_181781,1,null);var G__181766_181784 = k_181782;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__181766_181784))
{var seq__181767_181785 = cljs.core.seq.call(null,v_181783);var chunk__181768_181786 = null;var count__181769_181787 = 0;var i__181770_181788 = 0;while(true){
if((i__181770_181788 < count__181769_181787))
{var c_181789 = cljs.core._nth.call(null,chunk__181768_181786,i__181770_181788);dommy.attrs.add_class_BANG_.call(null,n,c_181789);
{
var G__181790 = seq__181767_181785;
var G__181791 = chunk__181768_181786;
var G__181792 = count__181769_181787;
var G__181793 = (i__181770_181788 + 1);
seq__181767_181785 = G__181790;
chunk__181768_181786 = G__181791;
count__181769_181787 = G__181792;
i__181770_181788 = G__181793;
continue;
}
} else
{var temp__4092__auto___181794 = cljs.core.seq.call(null,seq__181767_181785);if(temp__4092__auto___181794)
{var seq__181767_181795__$1 = temp__4092__auto___181794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181767_181795__$1))
{var c__8952__auto___181796 = cljs.core.chunk_first.call(null,seq__181767_181795__$1);{
var G__181797 = cljs.core.chunk_rest.call(null,seq__181767_181795__$1);
var G__181798 = c__8952__auto___181796;
var G__181799 = cljs.core.count.call(null,c__8952__auto___181796);
var G__181800 = 0;
seq__181767_181785 = G__181797;
chunk__181768_181786 = G__181798;
count__181769_181787 = G__181799;
i__181770_181788 = G__181800;
continue;
}
} else
{var c_181801 = cljs.core.first.call(null,seq__181767_181795__$1);dommy.attrs.add_class_BANG_.call(null,n,c_181801);
{
var G__181802 = cljs.core.next.call(null,seq__181767_181795__$1);
var G__181803 = null;
var G__181804 = 0;
var G__181805 = 0;
seq__181767_181785 = G__181802;
chunk__181768_181786 = G__181803;
count__181769_181787 = G__181804;
i__181770_181788 = G__181805;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__181766_181784))
{dommy.attrs.add_class_BANG_.call(null,n,v_181783);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_181782,v_181783);
} else
{}
}
}
{
var G__181806 = seq__181761_181777;
var G__181807 = chunk__181762_181778;
var G__181808 = count__181763_181779;
var G__181809 = (i__181764_181780 + 1);
seq__181761_181777 = G__181806;
chunk__181762_181778 = G__181807;
count__181763_181779 = G__181808;
i__181764_181780 = G__181809;
continue;
}
} else
{var temp__4092__auto___181810 = cljs.core.seq.call(null,seq__181761_181777);if(temp__4092__auto___181810)
{var seq__181761_181811__$1 = temp__4092__auto___181810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181761_181811__$1))
{var c__8952__auto___181812 = cljs.core.chunk_first.call(null,seq__181761_181811__$1);{
var G__181813 = cljs.core.chunk_rest.call(null,seq__181761_181811__$1);
var G__181814 = c__8952__auto___181812;
var G__181815 = cljs.core.count.call(null,c__8952__auto___181812);
var G__181816 = 0;
seq__181761_181777 = G__181813;
chunk__181762_181778 = G__181814;
count__181763_181779 = G__181815;
i__181764_181780 = G__181816;
continue;
}
} else
{var vec__181771_181817 = cljs.core.first.call(null,seq__181761_181811__$1);var k_181818 = cljs.core.nth.call(null,vec__181771_181817,0,null);var v_181819 = cljs.core.nth.call(null,vec__181771_181817,1,null);var G__181772_181820 = k_181818;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__181772_181820))
{var seq__181773_181821 = cljs.core.seq.call(null,v_181819);var chunk__181774_181822 = null;var count__181775_181823 = 0;var i__181776_181824 = 0;while(true){
if((i__181776_181824 < count__181775_181823))
{var c_181825 = cljs.core._nth.call(null,chunk__181774_181822,i__181776_181824);dommy.attrs.add_class_BANG_.call(null,n,c_181825);
{
var G__181826 = seq__181773_181821;
var G__181827 = chunk__181774_181822;
var G__181828 = count__181775_181823;
var G__181829 = (i__181776_181824 + 1);
seq__181773_181821 = G__181826;
chunk__181774_181822 = G__181827;
count__181775_181823 = G__181828;
i__181776_181824 = G__181829;
continue;
}
} else
{var temp__4092__auto___181830__$1 = cljs.core.seq.call(null,seq__181773_181821);if(temp__4092__auto___181830__$1)
{var seq__181773_181831__$1 = temp__4092__auto___181830__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__181773_181831__$1))
{var c__8952__auto___181832 = cljs.core.chunk_first.call(null,seq__181773_181831__$1);{
var G__181833 = cljs.core.chunk_rest.call(null,seq__181773_181831__$1);
var G__181834 = c__8952__auto___181832;
var G__181835 = cljs.core.count.call(null,c__8952__auto___181832);
var G__181836 = 0;
seq__181773_181821 = G__181833;
chunk__181774_181822 = G__181834;
count__181775_181823 = G__181835;
i__181776_181824 = G__181836;
continue;
}
} else
{var c_181837 = cljs.core.first.call(null,seq__181773_181831__$1);dommy.attrs.add_class_BANG_.call(null,n,c_181837);
{
var G__181838 = cljs.core.next.call(null,seq__181773_181831__$1);
var G__181839 = null;
var G__181840 = 0;
var G__181841 = 0;
seq__181773_181821 = G__181838;
chunk__181774_181822 = G__181839;
count__181775_181823 = G__181840;
i__181776_181824 = G__181841;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__181772_181820))
{dommy.attrs.add_class_BANG_.call(null,n,v_181819);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_181818,v_181819);
} else
{}
}
}
{
var G__181842 = cljs.core.next.call(null,seq__181761_181811__$1);
var G__181843 = null;
var G__181844 = 0;
var G__181845 = 0;
seq__181761_181777 = G__181842;
chunk__181762_181778 = G__181843;
count__181763_181779 = G__181844;
i__181764_181780 = G__181845;
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
}catch (e181846){if((e181846 instanceof ReferenceError))
{var __181847 = e181846;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e181846;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__181849 = data;if(G__181849)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__181849.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__181849.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__181849);
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