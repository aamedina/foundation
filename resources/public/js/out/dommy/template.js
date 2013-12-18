// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj25761 = {};return obj25761;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8233__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (dommy.template._elem[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (dommy.template._elem["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
{var str_25764 = node_str.substring(base_idx);while(true){
var next_idx_25765 = dommy.template.next_css_index.call(null,str_25764,1);var frag_25766 = (((next_idx_25765 >= 0))?str_25764.substring(0,next_idx_25765):str_25764);var G__25763_25767 = frag_25766.charAt(0);if(cljs.core._EQ_.call(null,"#",G__25763_25767))
{node.setAttribute("id",frag_25766.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__25763_25767))
{dommy.attrs.add_class_BANG_.call(null,node,frag_25766.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_25766.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_25765 >= 0))
{{
var G__25768 = str_25764.substring(next_idx_25765);
str_25764 = G__25768;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__25774 = data;if(G__25774)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__25774.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25774.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25774);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__25775_25779 = cljs.core.seq.call(null,data);var chunk__25776_25780 = null;var count__25777_25781 = 0;var i__25778_25782 = 0;while(true){
if((i__25778_25782 < count__25777_25781))
{var child_25783 = cljs.core._nth.call(null,chunk__25776_25780,i__25778_25782);__GT_document_fragment.call(null,result_frag,child_25783);
{
var G__25784 = seq__25775_25779;
var G__25785 = chunk__25776_25780;
var G__25786 = count__25777_25781;
var G__25787 = (i__25778_25782 + 1);
seq__25775_25779 = G__25784;
chunk__25776_25780 = G__25785;
count__25777_25781 = G__25786;
i__25778_25782 = G__25787;
continue;
}
} else
{var temp__4092__auto___25788 = cljs.core.seq.call(null,seq__25775_25779);if(temp__4092__auto___25788)
{var seq__25775_25789__$1 = temp__4092__auto___25788;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25775_25789__$1))
{var c__8974__auto___25790 = cljs.core.chunk_first.call(null,seq__25775_25789__$1);{
var G__25791 = cljs.core.chunk_rest.call(null,seq__25775_25789__$1);
var G__25792 = c__8974__auto___25790;
var G__25793 = cljs.core.count.call(null,c__8974__auto___25790);
var G__25794 = 0;
seq__25775_25779 = G__25791;
chunk__25776_25780 = G__25792;
count__25777_25781 = G__25793;
i__25778_25782 = G__25794;
continue;
}
} else
{var child_25795 = cljs.core.first.call(null,seq__25775_25789__$1);__GT_document_fragment.call(null,result_frag,child_25795);
{
var G__25796 = cljs.core.next.call(null,seq__25775_25789__$1);
var G__25797 = null;
var G__25798 = 0;
var G__25799 = 0;
seq__25775_25779 = G__25796;
chunk__25776_25780 = G__25797;
count__25777_25781 = G__25798;
i__25778_25782 = G__25799;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__25801 = data;if(G__25801)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__25801.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25801.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25801);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25801);
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
dommy.template.compound_element = (function compound_element(p__25802){var vec__25822 = p__25802;var tag_name = cljs.core.nth.call(null,vec__25822,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__25822,1,null);var children = cljs.core.nthnext.call(null,vec__25822,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__25824 = maybe_attrs;if(G__25824)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__25824.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25824.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25824);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25824);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__25825_25841 = cljs.core.seq.call(null,attrs);var chunk__25826_25842 = null;var count__25827_25843 = 0;var i__25828_25844 = 0;while(true){
if((i__25828_25844 < count__25827_25843))
{var vec__25829_25845 = cljs.core._nth.call(null,chunk__25826_25842,i__25828_25844);var k_25846 = cljs.core.nth.call(null,vec__25829_25845,0,null);var v_25847 = cljs.core.nth.call(null,vec__25829_25845,1,null);var G__25830_25848 = k_25846;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25830_25848))
{var seq__25831_25849 = cljs.core.seq.call(null,v_25847);var chunk__25832_25850 = null;var count__25833_25851 = 0;var i__25834_25852 = 0;while(true){
if((i__25834_25852 < count__25833_25851))
{var c_25853 = cljs.core._nth.call(null,chunk__25832_25850,i__25834_25852);dommy.attrs.add_class_BANG_.call(null,n,c_25853);
{
var G__25854 = seq__25831_25849;
var G__25855 = chunk__25832_25850;
var G__25856 = count__25833_25851;
var G__25857 = (i__25834_25852 + 1);
seq__25831_25849 = G__25854;
chunk__25832_25850 = G__25855;
count__25833_25851 = G__25856;
i__25834_25852 = G__25857;
continue;
}
} else
{var temp__4092__auto___25858 = cljs.core.seq.call(null,seq__25831_25849);if(temp__4092__auto___25858)
{var seq__25831_25859__$1 = temp__4092__auto___25858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25831_25859__$1))
{var c__8974__auto___25860 = cljs.core.chunk_first.call(null,seq__25831_25859__$1);{
var G__25861 = cljs.core.chunk_rest.call(null,seq__25831_25859__$1);
var G__25862 = c__8974__auto___25860;
var G__25863 = cljs.core.count.call(null,c__8974__auto___25860);
var G__25864 = 0;
seq__25831_25849 = G__25861;
chunk__25832_25850 = G__25862;
count__25833_25851 = G__25863;
i__25834_25852 = G__25864;
continue;
}
} else
{var c_25865 = cljs.core.first.call(null,seq__25831_25859__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25865);
{
var G__25866 = cljs.core.next.call(null,seq__25831_25859__$1);
var G__25867 = null;
var G__25868 = 0;
var G__25869 = 0;
seq__25831_25849 = G__25866;
chunk__25832_25850 = G__25867;
count__25833_25851 = G__25868;
i__25834_25852 = G__25869;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25830_25848))
{dommy.attrs.add_class_BANG_.call(null,n,v_25847);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25846,v_25847);
} else
{}
}
}
{
var G__25870 = seq__25825_25841;
var G__25871 = chunk__25826_25842;
var G__25872 = count__25827_25843;
var G__25873 = (i__25828_25844 + 1);
seq__25825_25841 = G__25870;
chunk__25826_25842 = G__25871;
count__25827_25843 = G__25872;
i__25828_25844 = G__25873;
continue;
}
} else
{var temp__4092__auto___25874 = cljs.core.seq.call(null,seq__25825_25841);if(temp__4092__auto___25874)
{var seq__25825_25875__$1 = temp__4092__auto___25874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25825_25875__$1))
{var c__8974__auto___25876 = cljs.core.chunk_first.call(null,seq__25825_25875__$1);{
var G__25877 = cljs.core.chunk_rest.call(null,seq__25825_25875__$1);
var G__25878 = c__8974__auto___25876;
var G__25879 = cljs.core.count.call(null,c__8974__auto___25876);
var G__25880 = 0;
seq__25825_25841 = G__25877;
chunk__25826_25842 = G__25878;
count__25827_25843 = G__25879;
i__25828_25844 = G__25880;
continue;
}
} else
{var vec__25835_25881 = cljs.core.first.call(null,seq__25825_25875__$1);var k_25882 = cljs.core.nth.call(null,vec__25835_25881,0,null);var v_25883 = cljs.core.nth.call(null,vec__25835_25881,1,null);var G__25836_25884 = k_25882;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__25836_25884))
{var seq__25837_25885 = cljs.core.seq.call(null,v_25883);var chunk__25838_25886 = null;var count__25839_25887 = 0;var i__25840_25888 = 0;while(true){
if((i__25840_25888 < count__25839_25887))
{var c_25889 = cljs.core._nth.call(null,chunk__25838_25886,i__25840_25888);dommy.attrs.add_class_BANG_.call(null,n,c_25889);
{
var G__25890 = seq__25837_25885;
var G__25891 = chunk__25838_25886;
var G__25892 = count__25839_25887;
var G__25893 = (i__25840_25888 + 1);
seq__25837_25885 = G__25890;
chunk__25838_25886 = G__25891;
count__25839_25887 = G__25892;
i__25840_25888 = G__25893;
continue;
}
} else
{var temp__4092__auto___25894__$1 = cljs.core.seq.call(null,seq__25837_25885);if(temp__4092__auto___25894__$1)
{var seq__25837_25895__$1 = temp__4092__auto___25894__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25837_25895__$1))
{var c__8974__auto___25896 = cljs.core.chunk_first.call(null,seq__25837_25895__$1);{
var G__25897 = cljs.core.chunk_rest.call(null,seq__25837_25895__$1);
var G__25898 = c__8974__auto___25896;
var G__25899 = cljs.core.count.call(null,c__8974__auto___25896);
var G__25900 = 0;
seq__25837_25885 = G__25897;
chunk__25838_25886 = G__25898;
count__25839_25887 = G__25899;
i__25840_25888 = G__25900;
continue;
}
} else
{var c_25901 = cljs.core.first.call(null,seq__25837_25895__$1);dommy.attrs.add_class_BANG_.call(null,n,c_25901);
{
var G__25902 = cljs.core.next.call(null,seq__25837_25895__$1);
var G__25903 = null;
var G__25904 = 0;
var G__25905 = 0;
seq__25837_25885 = G__25902;
chunk__25838_25886 = G__25903;
count__25839_25887 = G__25904;
i__25840_25888 = G__25905;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__25836_25884))
{dommy.attrs.add_class_BANG_.call(null,n,v_25883);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_25882,v_25883);
} else
{}
}
}
{
var G__25906 = cljs.core.next.call(null,seq__25825_25875__$1);
var G__25907 = null;
var G__25908 = 0;
var G__25909 = 0;
seq__25825_25841 = G__25906;
chunk__25826_25842 = G__25907;
count__25827_25843 = G__25908;
i__25828_25844 = G__25909;
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
}catch (e25910){if((e25910 instanceof ReferenceError))
{var __25911 = e25910;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25910;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__25913 = data;if(G__25913)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__25913.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__25913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__25913);
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