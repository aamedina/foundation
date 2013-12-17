// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj65750 = {};return obj65750;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__7816__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (dommy.template._elem[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (dommy.template._elem["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
{var str_65753 = node_str.substring(base_idx);while(true){
var next_idx_65754 = dommy.template.next_css_index.call(null,str_65753,1);var frag_65755 = (((next_idx_65754 >= 0))?str_65753.substring(0,next_idx_65754):str_65753);var G__65752_65756 = frag_65755.charAt(0);if(cljs.core._EQ_.call(null,"#",G__65752_65756))
{node.setAttribute("id",frag_65755.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__65752_65756))
{dommy.attrs.add_class_BANG_.call(null,node,frag_65755.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_65755.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_65754 >= 0))
{{
var G__65757 = str_65753.substring(next_idx_65754);
str_65753 = G__65757;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__65763 = data;if(G__65763)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__65763.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__65763.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65763);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65763);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__65764_65768 = cljs.core.seq.call(null,data);var chunk__65765_65769 = null;var count__65766_65770 = 0;var i__65767_65771 = 0;while(true){
if((i__65767_65771 < count__65766_65770))
{var child_65772 = cljs.core._nth.call(null,chunk__65765_65769,i__65767_65771);__GT_document_fragment.call(null,result_frag,child_65772);
{
var G__65773 = seq__65764_65768;
var G__65774 = chunk__65765_65769;
var G__65775 = count__65766_65770;
var G__65776 = (i__65767_65771 + 1);
seq__65764_65768 = G__65773;
chunk__65765_65769 = G__65774;
count__65766_65770 = G__65775;
i__65767_65771 = G__65776;
continue;
}
} else
{var temp__4092__auto___65777 = cljs.core.seq.call(null,seq__65764_65768);if(temp__4092__auto___65777)
{var seq__65764_65778__$1 = temp__4092__auto___65777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65764_65778__$1))
{var c__8552__auto___65779 = cljs.core.chunk_first.call(null,seq__65764_65778__$1);{
var G__65780 = cljs.core.chunk_rest.call(null,seq__65764_65778__$1);
var G__65781 = c__8552__auto___65779;
var G__65782 = cljs.core.count.call(null,c__8552__auto___65779);
var G__65783 = 0;
seq__65764_65768 = G__65780;
chunk__65765_65769 = G__65781;
count__65766_65770 = G__65782;
i__65767_65771 = G__65783;
continue;
}
} else
{var child_65784 = cljs.core.first.call(null,seq__65764_65778__$1);__GT_document_fragment.call(null,result_frag,child_65784);
{
var G__65785 = cljs.core.next.call(null,seq__65764_65778__$1);
var G__65786 = null;
var G__65787 = 0;
var G__65788 = 0;
seq__65764_65768 = G__65785;
chunk__65765_65769 = G__65786;
count__65766_65770 = G__65787;
i__65767_65771 = G__65788;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__65790 = data;if(G__65790)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__65790.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__65790.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65790);
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
dommy.template.compound_element = (function compound_element(p__65791){var vec__65811 = p__65791;var tag_name = cljs.core.nth.call(null,vec__65811,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__65811,1,null);var children = cljs.core.nthnext.call(null,vec__65811,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__65813 = maybe_attrs;if(G__65813)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__65813.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__65813.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65813);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__65814_65830 = cljs.core.seq.call(null,attrs);var chunk__65815_65831 = null;var count__65816_65832 = 0;var i__65817_65833 = 0;while(true){
if((i__65817_65833 < count__65816_65832))
{var vec__65818_65834 = cljs.core._nth.call(null,chunk__65815_65831,i__65817_65833);var k_65835 = cljs.core.nth.call(null,vec__65818_65834,0,null);var v_65836 = cljs.core.nth.call(null,vec__65818_65834,1,null);var G__65819_65837 = k_65835;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__65819_65837))
{var seq__65820_65838 = cljs.core.seq.call(null,v_65836);var chunk__65821_65839 = null;var count__65822_65840 = 0;var i__65823_65841 = 0;while(true){
if((i__65823_65841 < count__65822_65840))
{var c_65842 = cljs.core._nth.call(null,chunk__65821_65839,i__65823_65841);dommy.attrs.add_class_BANG_.call(null,n,c_65842);
{
var G__65843 = seq__65820_65838;
var G__65844 = chunk__65821_65839;
var G__65845 = count__65822_65840;
var G__65846 = (i__65823_65841 + 1);
seq__65820_65838 = G__65843;
chunk__65821_65839 = G__65844;
count__65822_65840 = G__65845;
i__65823_65841 = G__65846;
continue;
}
} else
{var temp__4092__auto___65847 = cljs.core.seq.call(null,seq__65820_65838);if(temp__4092__auto___65847)
{var seq__65820_65848__$1 = temp__4092__auto___65847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65820_65848__$1))
{var c__8552__auto___65849 = cljs.core.chunk_first.call(null,seq__65820_65848__$1);{
var G__65850 = cljs.core.chunk_rest.call(null,seq__65820_65848__$1);
var G__65851 = c__8552__auto___65849;
var G__65852 = cljs.core.count.call(null,c__8552__auto___65849);
var G__65853 = 0;
seq__65820_65838 = G__65850;
chunk__65821_65839 = G__65851;
count__65822_65840 = G__65852;
i__65823_65841 = G__65853;
continue;
}
} else
{var c_65854 = cljs.core.first.call(null,seq__65820_65848__$1);dommy.attrs.add_class_BANG_.call(null,n,c_65854);
{
var G__65855 = cljs.core.next.call(null,seq__65820_65848__$1);
var G__65856 = null;
var G__65857 = 0;
var G__65858 = 0;
seq__65820_65838 = G__65855;
chunk__65821_65839 = G__65856;
count__65822_65840 = G__65857;
i__65823_65841 = G__65858;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__65819_65837))
{dommy.attrs.add_class_BANG_.call(null,n,v_65836);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_65835,v_65836);
} else
{}
}
}
{
var G__65859 = seq__65814_65830;
var G__65860 = chunk__65815_65831;
var G__65861 = count__65816_65832;
var G__65862 = (i__65817_65833 + 1);
seq__65814_65830 = G__65859;
chunk__65815_65831 = G__65860;
count__65816_65832 = G__65861;
i__65817_65833 = G__65862;
continue;
}
} else
{var temp__4092__auto___65863 = cljs.core.seq.call(null,seq__65814_65830);if(temp__4092__auto___65863)
{var seq__65814_65864__$1 = temp__4092__auto___65863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65814_65864__$1))
{var c__8552__auto___65865 = cljs.core.chunk_first.call(null,seq__65814_65864__$1);{
var G__65866 = cljs.core.chunk_rest.call(null,seq__65814_65864__$1);
var G__65867 = c__8552__auto___65865;
var G__65868 = cljs.core.count.call(null,c__8552__auto___65865);
var G__65869 = 0;
seq__65814_65830 = G__65866;
chunk__65815_65831 = G__65867;
count__65816_65832 = G__65868;
i__65817_65833 = G__65869;
continue;
}
} else
{var vec__65824_65870 = cljs.core.first.call(null,seq__65814_65864__$1);var k_65871 = cljs.core.nth.call(null,vec__65824_65870,0,null);var v_65872 = cljs.core.nth.call(null,vec__65824_65870,1,null);var G__65825_65873 = k_65871;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__65825_65873))
{var seq__65826_65874 = cljs.core.seq.call(null,v_65872);var chunk__65827_65875 = null;var count__65828_65876 = 0;var i__65829_65877 = 0;while(true){
if((i__65829_65877 < count__65828_65876))
{var c_65878 = cljs.core._nth.call(null,chunk__65827_65875,i__65829_65877);dommy.attrs.add_class_BANG_.call(null,n,c_65878);
{
var G__65879 = seq__65826_65874;
var G__65880 = chunk__65827_65875;
var G__65881 = count__65828_65876;
var G__65882 = (i__65829_65877 + 1);
seq__65826_65874 = G__65879;
chunk__65827_65875 = G__65880;
count__65828_65876 = G__65881;
i__65829_65877 = G__65882;
continue;
}
} else
{var temp__4092__auto___65883__$1 = cljs.core.seq.call(null,seq__65826_65874);if(temp__4092__auto___65883__$1)
{var seq__65826_65884__$1 = temp__4092__auto___65883__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__65826_65884__$1))
{var c__8552__auto___65885 = cljs.core.chunk_first.call(null,seq__65826_65884__$1);{
var G__65886 = cljs.core.chunk_rest.call(null,seq__65826_65884__$1);
var G__65887 = c__8552__auto___65885;
var G__65888 = cljs.core.count.call(null,c__8552__auto___65885);
var G__65889 = 0;
seq__65826_65874 = G__65886;
chunk__65827_65875 = G__65887;
count__65828_65876 = G__65888;
i__65829_65877 = G__65889;
continue;
}
} else
{var c_65890 = cljs.core.first.call(null,seq__65826_65884__$1);dommy.attrs.add_class_BANG_.call(null,n,c_65890);
{
var G__65891 = cljs.core.next.call(null,seq__65826_65884__$1);
var G__65892 = null;
var G__65893 = 0;
var G__65894 = 0;
seq__65826_65874 = G__65891;
chunk__65827_65875 = G__65892;
count__65828_65876 = G__65893;
i__65829_65877 = G__65894;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__65825_65873))
{dommy.attrs.add_class_BANG_.call(null,n,v_65872);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_65871,v_65872);
} else
{}
}
}
{
var G__65895 = cljs.core.next.call(null,seq__65814_65864__$1);
var G__65896 = null;
var G__65897 = 0;
var G__65898 = 0;
seq__65814_65830 = G__65895;
chunk__65815_65831 = G__65896;
count__65816_65832 = G__65897;
i__65817_65833 = G__65898;
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
}catch (e65899){if((e65899 instanceof ReferenceError))
{var __65900 = e65899;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e65899;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__65902 = data;if(G__65902)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__65902.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__65902.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__65902);
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
