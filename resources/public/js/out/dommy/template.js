// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj28739 = {};return obj28739;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8216__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (dommy.template._elem[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (dommy.template._elem["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
{var str_28742 = node_str.substring(base_idx);while(true){
var next_idx_28743 = dommy.template.next_css_index.call(null,str_28742,1);var frag_28744 = (((next_idx_28743 >= 0))?str_28742.substring(0,next_idx_28743):str_28742);var G__28741_28745 = frag_28744.charAt(0);if(cljs.core._EQ_.call(null,"#",G__28741_28745))
{node.setAttribute("id",frag_28744.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__28741_28745))
{dommy.attrs.add_class_BANG_.call(null,node,frag_28744.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_28744.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_28743 >= 0))
{{
var G__28746 = str_28742.substring(next_idx_28743);
str_28742 = G__28746;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__28752 = data;if(G__28752)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__28752.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28752.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28752);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28752);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__28753_28757 = cljs.core.seq.call(null,data);var chunk__28754_28758 = null;var count__28755_28759 = 0;var i__28756_28760 = 0;while(true){
if((i__28756_28760 < count__28755_28759))
{var child_28761 = cljs.core._nth.call(null,chunk__28754_28758,i__28756_28760);__GT_document_fragment.call(null,result_frag,child_28761);
{
var G__28762 = seq__28753_28757;
var G__28763 = chunk__28754_28758;
var G__28764 = count__28755_28759;
var G__28765 = (i__28756_28760 + 1);
seq__28753_28757 = G__28762;
chunk__28754_28758 = G__28763;
count__28755_28759 = G__28764;
i__28756_28760 = G__28765;
continue;
}
} else
{var temp__4092__auto___28766 = cljs.core.seq.call(null,seq__28753_28757);if(temp__4092__auto___28766)
{var seq__28753_28767__$1 = temp__4092__auto___28766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28753_28767__$1))
{var c__8957__auto___28768 = cljs.core.chunk_first.call(null,seq__28753_28767__$1);{
var G__28769 = cljs.core.chunk_rest.call(null,seq__28753_28767__$1);
var G__28770 = c__8957__auto___28768;
var G__28771 = cljs.core.count.call(null,c__8957__auto___28768);
var G__28772 = 0;
seq__28753_28757 = G__28769;
chunk__28754_28758 = G__28770;
count__28755_28759 = G__28771;
i__28756_28760 = G__28772;
continue;
}
} else
{var child_28773 = cljs.core.first.call(null,seq__28753_28767__$1);__GT_document_fragment.call(null,result_frag,child_28773);
{
var G__28774 = cljs.core.next.call(null,seq__28753_28767__$1);
var G__28775 = null;
var G__28776 = 0;
var G__28777 = 0;
seq__28753_28757 = G__28774;
chunk__28754_28758 = G__28775;
count__28755_28759 = G__28776;
i__28756_28760 = G__28777;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__28779 = data;if(G__28779)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__28779.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28779.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28779);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28779);
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
dommy.template.compound_element = (function compound_element(p__28780){var vec__28800 = p__28780;var tag_name = cljs.core.nth.call(null,vec__28800,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__28800,1,null);var children = cljs.core.nthnext.call(null,vec__28800,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__28802 = maybe_attrs;if(G__28802)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__28802.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28802.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28802);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28802);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__28803_28819 = cljs.core.seq.call(null,attrs);var chunk__28804_28820 = null;var count__28805_28821 = 0;var i__28806_28822 = 0;while(true){
if((i__28806_28822 < count__28805_28821))
{var vec__28807_28823 = cljs.core._nth.call(null,chunk__28804_28820,i__28806_28822);var k_28824 = cljs.core.nth.call(null,vec__28807_28823,0,null);var v_28825 = cljs.core.nth.call(null,vec__28807_28823,1,null);var G__28808_28826 = k_28824;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__28808_28826))
{var seq__28809_28827 = cljs.core.seq.call(null,v_28825);var chunk__28810_28828 = null;var count__28811_28829 = 0;var i__28812_28830 = 0;while(true){
if((i__28812_28830 < count__28811_28829))
{var c_28831 = cljs.core._nth.call(null,chunk__28810_28828,i__28812_28830);dommy.attrs.add_class_BANG_.call(null,n,c_28831);
{
var G__28832 = seq__28809_28827;
var G__28833 = chunk__28810_28828;
var G__28834 = count__28811_28829;
var G__28835 = (i__28812_28830 + 1);
seq__28809_28827 = G__28832;
chunk__28810_28828 = G__28833;
count__28811_28829 = G__28834;
i__28812_28830 = G__28835;
continue;
}
} else
{var temp__4092__auto___28836 = cljs.core.seq.call(null,seq__28809_28827);if(temp__4092__auto___28836)
{var seq__28809_28837__$1 = temp__4092__auto___28836;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28809_28837__$1))
{var c__8957__auto___28838 = cljs.core.chunk_first.call(null,seq__28809_28837__$1);{
var G__28839 = cljs.core.chunk_rest.call(null,seq__28809_28837__$1);
var G__28840 = c__8957__auto___28838;
var G__28841 = cljs.core.count.call(null,c__8957__auto___28838);
var G__28842 = 0;
seq__28809_28827 = G__28839;
chunk__28810_28828 = G__28840;
count__28811_28829 = G__28841;
i__28812_28830 = G__28842;
continue;
}
} else
{var c_28843 = cljs.core.first.call(null,seq__28809_28837__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28843);
{
var G__28844 = cljs.core.next.call(null,seq__28809_28837__$1);
var G__28845 = null;
var G__28846 = 0;
var G__28847 = 0;
seq__28809_28827 = G__28844;
chunk__28810_28828 = G__28845;
count__28811_28829 = G__28846;
i__28812_28830 = G__28847;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__28808_28826))
{dommy.attrs.add_class_BANG_.call(null,n,v_28825);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_28824,v_28825);
} else
{}
}
}
{
var G__28848 = seq__28803_28819;
var G__28849 = chunk__28804_28820;
var G__28850 = count__28805_28821;
var G__28851 = (i__28806_28822 + 1);
seq__28803_28819 = G__28848;
chunk__28804_28820 = G__28849;
count__28805_28821 = G__28850;
i__28806_28822 = G__28851;
continue;
}
} else
{var temp__4092__auto___28852 = cljs.core.seq.call(null,seq__28803_28819);if(temp__4092__auto___28852)
{var seq__28803_28853__$1 = temp__4092__auto___28852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28803_28853__$1))
{var c__8957__auto___28854 = cljs.core.chunk_first.call(null,seq__28803_28853__$1);{
var G__28855 = cljs.core.chunk_rest.call(null,seq__28803_28853__$1);
var G__28856 = c__8957__auto___28854;
var G__28857 = cljs.core.count.call(null,c__8957__auto___28854);
var G__28858 = 0;
seq__28803_28819 = G__28855;
chunk__28804_28820 = G__28856;
count__28805_28821 = G__28857;
i__28806_28822 = G__28858;
continue;
}
} else
{var vec__28813_28859 = cljs.core.first.call(null,seq__28803_28853__$1);var k_28860 = cljs.core.nth.call(null,vec__28813_28859,0,null);var v_28861 = cljs.core.nth.call(null,vec__28813_28859,1,null);var G__28814_28862 = k_28860;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__28814_28862))
{var seq__28815_28863 = cljs.core.seq.call(null,v_28861);var chunk__28816_28864 = null;var count__28817_28865 = 0;var i__28818_28866 = 0;while(true){
if((i__28818_28866 < count__28817_28865))
{var c_28867 = cljs.core._nth.call(null,chunk__28816_28864,i__28818_28866);dommy.attrs.add_class_BANG_.call(null,n,c_28867);
{
var G__28868 = seq__28815_28863;
var G__28869 = chunk__28816_28864;
var G__28870 = count__28817_28865;
var G__28871 = (i__28818_28866 + 1);
seq__28815_28863 = G__28868;
chunk__28816_28864 = G__28869;
count__28817_28865 = G__28870;
i__28818_28866 = G__28871;
continue;
}
} else
{var temp__4092__auto___28872__$1 = cljs.core.seq.call(null,seq__28815_28863);if(temp__4092__auto___28872__$1)
{var seq__28815_28873__$1 = temp__4092__auto___28872__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28815_28873__$1))
{var c__8957__auto___28874 = cljs.core.chunk_first.call(null,seq__28815_28873__$1);{
var G__28875 = cljs.core.chunk_rest.call(null,seq__28815_28873__$1);
var G__28876 = c__8957__auto___28874;
var G__28877 = cljs.core.count.call(null,c__8957__auto___28874);
var G__28878 = 0;
seq__28815_28863 = G__28875;
chunk__28816_28864 = G__28876;
count__28817_28865 = G__28877;
i__28818_28866 = G__28878;
continue;
}
} else
{var c_28879 = cljs.core.first.call(null,seq__28815_28873__$1);dommy.attrs.add_class_BANG_.call(null,n,c_28879);
{
var G__28880 = cljs.core.next.call(null,seq__28815_28873__$1);
var G__28881 = null;
var G__28882 = 0;
var G__28883 = 0;
seq__28815_28863 = G__28880;
chunk__28816_28864 = G__28881;
count__28817_28865 = G__28882;
i__28818_28866 = G__28883;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__28814_28862))
{dommy.attrs.add_class_BANG_.call(null,n,v_28861);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_28860,v_28861);
} else
{}
}
}
{
var G__28884 = cljs.core.next.call(null,seq__28803_28853__$1);
var G__28885 = null;
var G__28886 = 0;
var G__28887 = 0;
seq__28803_28819 = G__28884;
chunk__28804_28820 = G__28885;
count__28805_28821 = G__28886;
i__28806_28822 = G__28887;
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
}catch (e28888){if((e28888 instanceof ReferenceError))
{var __28889 = e28888;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28888;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__28891 = data;if(G__28891)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__28891.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__28891.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28891);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__28891);
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