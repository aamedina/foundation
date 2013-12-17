// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj358756 = {};return obj358756;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13967__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (dommy.template._elem[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (dommy.template._elem["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
{var str_358759 = node_str.substring(base_idx);while(true){
var next_idx_358760 = dommy.template.next_css_index.call(null,str_358759,1);var frag_358761 = (((next_idx_358760 >= 0))?str_358759.substring(0,next_idx_358760):str_358759);var G__358758_358762 = frag_358761.charAt(0);if(cljs.core._EQ_.call(null,"#",G__358758_358762))
{node.setAttribute("id",frag_358761.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__358758_358762))
{dommy.attrs.add_class_BANG_.call(null,node,frag_358761.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_358761.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_358760 >= 0))
{{
var G__358763 = str_358759.substring(next_idx_358760);
str_358759 = G__358763;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__358769 = data;if(G__358769)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__358769.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__358769.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358769);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__358770_358774 = cljs.core.seq.call(null,data);var chunk__358771_358775 = null;var count__358772_358776 = 0;var i__358773_358777 = 0;while(true){
if((i__358773_358777 < count__358772_358776))
{var child_358778 = cljs.core._nth.call(null,chunk__358771_358775,i__358773_358777);__GT_document_fragment.call(null,result_frag,child_358778);
{
var G__358779 = seq__358770_358774;
var G__358780 = chunk__358771_358775;
var G__358781 = count__358772_358776;
var G__358782 = (i__358773_358777 + 1);
seq__358770_358774 = G__358779;
chunk__358771_358775 = G__358780;
count__358772_358776 = G__358781;
i__358773_358777 = G__358782;
continue;
}
} else
{var temp__4092__auto___358783 = cljs.core.seq.call(null,seq__358770_358774);if(temp__4092__auto___358783)
{var seq__358770_358784__$1 = temp__4092__auto___358783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358770_358784__$1))
{var c__14708__auto___358785 = cljs.core.chunk_first.call(null,seq__358770_358784__$1);{
var G__358786 = cljs.core.chunk_rest.call(null,seq__358770_358784__$1);
var G__358787 = c__14708__auto___358785;
var G__358788 = cljs.core.count.call(null,c__14708__auto___358785);
var G__358789 = 0;
seq__358770_358774 = G__358786;
chunk__358771_358775 = G__358787;
count__358772_358776 = G__358788;
i__358773_358777 = G__358789;
continue;
}
} else
{var child_358790 = cljs.core.first.call(null,seq__358770_358784__$1);__GT_document_fragment.call(null,result_frag,child_358790);
{
var G__358791 = cljs.core.next.call(null,seq__358770_358784__$1);
var G__358792 = null;
var G__358793 = 0;
var G__358794 = 0;
seq__358770_358774 = G__358791;
chunk__358771_358775 = G__358792;
count__358772_358776 = G__358793;
i__358773_358777 = G__358794;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__358796 = data;if(G__358796)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__358796.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__358796.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358796);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358796);
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
dommy.template.compound_element = (function compound_element(p__358797){var vec__358817 = p__358797;var tag_name = cljs.core.nth.call(null,vec__358817,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__358817,1,null);var children = cljs.core.nthnext.call(null,vec__358817,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__358819 = maybe_attrs;if(G__358819)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__358819.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__358819.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358819);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__358820_358836 = cljs.core.seq.call(null,attrs);var chunk__358821_358837 = null;var count__358822_358838 = 0;var i__358823_358839 = 0;while(true){
if((i__358823_358839 < count__358822_358838))
{var vec__358824_358840 = cljs.core._nth.call(null,chunk__358821_358837,i__358823_358839);var k_358841 = cljs.core.nth.call(null,vec__358824_358840,0,null);var v_358842 = cljs.core.nth.call(null,vec__358824_358840,1,null);var G__358825_358843 = k_358841;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__358825_358843))
{var seq__358826_358844 = cljs.core.seq.call(null,v_358842);var chunk__358827_358845 = null;var count__358828_358846 = 0;var i__358829_358847 = 0;while(true){
if((i__358829_358847 < count__358828_358846))
{var c_358848 = cljs.core._nth.call(null,chunk__358827_358845,i__358829_358847);dommy.attrs.add_class_BANG_.call(null,n,c_358848);
{
var G__358849 = seq__358826_358844;
var G__358850 = chunk__358827_358845;
var G__358851 = count__358828_358846;
var G__358852 = (i__358829_358847 + 1);
seq__358826_358844 = G__358849;
chunk__358827_358845 = G__358850;
count__358828_358846 = G__358851;
i__358829_358847 = G__358852;
continue;
}
} else
{var temp__4092__auto___358853 = cljs.core.seq.call(null,seq__358826_358844);if(temp__4092__auto___358853)
{var seq__358826_358854__$1 = temp__4092__auto___358853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358826_358854__$1))
{var c__14708__auto___358855 = cljs.core.chunk_first.call(null,seq__358826_358854__$1);{
var G__358856 = cljs.core.chunk_rest.call(null,seq__358826_358854__$1);
var G__358857 = c__14708__auto___358855;
var G__358858 = cljs.core.count.call(null,c__14708__auto___358855);
var G__358859 = 0;
seq__358826_358844 = G__358856;
chunk__358827_358845 = G__358857;
count__358828_358846 = G__358858;
i__358829_358847 = G__358859;
continue;
}
} else
{var c_358860 = cljs.core.first.call(null,seq__358826_358854__$1);dommy.attrs.add_class_BANG_.call(null,n,c_358860);
{
var G__358861 = cljs.core.next.call(null,seq__358826_358854__$1);
var G__358862 = null;
var G__358863 = 0;
var G__358864 = 0;
seq__358826_358844 = G__358861;
chunk__358827_358845 = G__358862;
count__358828_358846 = G__358863;
i__358829_358847 = G__358864;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__358825_358843))
{dommy.attrs.add_class_BANG_.call(null,n,v_358842);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_358841,v_358842);
} else
{}
}
}
{
var G__358865 = seq__358820_358836;
var G__358866 = chunk__358821_358837;
var G__358867 = count__358822_358838;
var G__358868 = (i__358823_358839 + 1);
seq__358820_358836 = G__358865;
chunk__358821_358837 = G__358866;
count__358822_358838 = G__358867;
i__358823_358839 = G__358868;
continue;
}
} else
{var temp__4092__auto___358869 = cljs.core.seq.call(null,seq__358820_358836);if(temp__4092__auto___358869)
{var seq__358820_358870__$1 = temp__4092__auto___358869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358820_358870__$1))
{var c__14708__auto___358871 = cljs.core.chunk_first.call(null,seq__358820_358870__$1);{
var G__358872 = cljs.core.chunk_rest.call(null,seq__358820_358870__$1);
var G__358873 = c__14708__auto___358871;
var G__358874 = cljs.core.count.call(null,c__14708__auto___358871);
var G__358875 = 0;
seq__358820_358836 = G__358872;
chunk__358821_358837 = G__358873;
count__358822_358838 = G__358874;
i__358823_358839 = G__358875;
continue;
}
} else
{var vec__358830_358876 = cljs.core.first.call(null,seq__358820_358870__$1);var k_358877 = cljs.core.nth.call(null,vec__358830_358876,0,null);var v_358878 = cljs.core.nth.call(null,vec__358830_358876,1,null);var G__358831_358879 = k_358877;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__358831_358879))
{var seq__358832_358880 = cljs.core.seq.call(null,v_358878);var chunk__358833_358881 = null;var count__358834_358882 = 0;var i__358835_358883 = 0;while(true){
if((i__358835_358883 < count__358834_358882))
{var c_358884 = cljs.core._nth.call(null,chunk__358833_358881,i__358835_358883);dommy.attrs.add_class_BANG_.call(null,n,c_358884);
{
var G__358885 = seq__358832_358880;
var G__358886 = chunk__358833_358881;
var G__358887 = count__358834_358882;
var G__358888 = (i__358835_358883 + 1);
seq__358832_358880 = G__358885;
chunk__358833_358881 = G__358886;
count__358834_358882 = G__358887;
i__358835_358883 = G__358888;
continue;
}
} else
{var temp__4092__auto___358889__$1 = cljs.core.seq.call(null,seq__358832_358880);if(temp__4092__auto___358889__$1)
{var seq__358832_358890__$1 = temp__4092__auto___358889__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358832_358890__$1))
{var c__14708__auto___358891 = cljs.core.chunk_first.call(null,seq__358832_358890__$1);{
var G__358892 = cljs.core.chunk_rest.call(null,seq__358832_358890__$1);
var G__358893 = c__14708__auto___358891;
var G__358894 = cljs.core.count.call(null,c__14708__auto___358891);
var G__358895 = 0;
seq__358832_358880 = G__358892;
chunk__358833_358881 = G__358893;
count__358834_358882 = G__358894;
i__358835_358883 = G__358895;
continue;
}
} else
{var c_358896 = cljs.core.first.call(null,seq__358832_358890__$1);dommy.attrs.add_class_BANG_.call(null,n,c_358896);
{
var G__358897 = cljs.core.next.call(null,seq__358832_358890__$1);
var G__358898 = null;
var G__358899 = 0;
var G__358900 = 0;
seq__358832_358880 = G__358897;
chunk__358833_358881 = G__358898;
count__358834_358882 = G__358899;
i__358835_358883 = G__358900;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__358831_358879))
{dommy.attrs.add_class_BANG_.call(null,n,v_358878);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_358877,v_358878);
} else
{}
}
}
{
var G__358901 = cljs.core.next.call(null,seq__358820_358870__$1);
var G__358902 = null;
var G__358903 = 0;
var G__358904 = 0;
seq__358820_358836 = G__358901;
chunk__358821_358837 = G__358902;
count__358822_358838 = G__358903;
i__358823_358839 = G__358904;
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
}catch (e358905){if((e358905 instanceof ReferenceError))
{var __358906 = e358905;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e358905;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__358908 = data;if(G__358908)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__358908.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__358908.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358908);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__358908);
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