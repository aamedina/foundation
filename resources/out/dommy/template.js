// Compiled by ClojureScript 0.0-2080
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj35861 = {};return obj35861;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__13811__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (dommy.template._elem[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (dommy.template._elem["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
{var str_35864 = node_str.substring(base_idx);while(true){
var next_idx_35865 = dommy.template.next_css_index.call(null,str_35864,1);var frag_35866 = (((next_idx_35865 >= 0))?str_35864.substring(0,next_idx_35865):str_35864);var G__35863_35867 = frag_35866.charAt(0);if(cljs.core._EQ_.call(null,"#",G__35863_35867))
{node.setAttribute("id",frag_35866.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__35863_35867))
{dommy.attrs.add_class_BANG_.call(null,node,frag_35866.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_35866.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_35865 >= 0))
{{
var G__35868 = str_35864.substring(next_idx_35865);
str_35864 = G__35868;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__35874 = data;if(G__35874)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35874.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35874.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35874);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35874);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__35875_35879 = cljs.core.seq.call(null,data);var chunk__35876_35880 = null;var count__35877_35881 = 0;var i__35878_35882 = 0;while(true){
if((i__35878_35882 < count__35877_35881))
{var child_35883 = cljs.core._nth.call(null,chunk__35876_35880,i__35878_35882);__GT_document_fragment.call(null,result_frag,child_35883);
{
var G__35884 = seq__35875_35879;
var G__35885 = chunk__35876_35880;
var G__35886 = count__35877_35881;
var G__35887 = (i__35878_35882 + 1);
seq__35875_35879 = G__35884;
chunk__35876_35880 = G__35885;
count__35877_35881 = G__35886;
i__35878_35882 = G__35887;
continue;
}
} else
{var temp__4092__auto___35888 = cljs.core.seq.call(null,seq__35875_35879);if(temp__4092__auto___35888)
{var seq__35875_35889__$1 = temp__4092__auto___35888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35875_35889__$1))
{var c__14547__auto___35890 = cljs.core.chunk_first.call(null,seq__35875_35889__$1);{
var G__35891 = cljs.core.chunk_rest.call(null,seq__35875_35889__$1);
var G__35892 = c__14547__auto___35890;
var G__35893 = cljs.core.count.call(null,c__14547__auto___35890);
var G__35894 = 0;
seq__35875_35879 = G__35891;
chunk__35876_35880 = G__35892;
count__35877_35881 = G__35893;
i__35878_35882 = G__35894;
continue;
}
} else
{var child_35895 = cljs.core.first.call(null,seq__35875_35889__$1);__GT_document_fragment.call(null,result_frag,child_35895);
{
var G__35896 = cljs.core.next.call(null,seq__35875_35889__$1);
var G__35897 = null;
var G__35898 = 0;
var G__35899 = 0;
seq__35875_35879 = G__35896;
chunk__35876_35880 = G__35897;
count__35877_35881 = G__35898;
i__35878_35882 = G__35899;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__35901 = data;if(G__35901)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35901.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35901.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35901);
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
dommy.template.compound_element = (function compound_element(p__35902){var vec__35922 = p__35902;var tag_name = cljs.core.nth.call(null,vec__35922,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__35922,1,null);var children = cljs.core.nthnext.call(null,vec__35922,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__35924 = maybe_attrs;if(G__35924)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35924.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__35924.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35924);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__35924);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__35925_35941 = cljs.core.seq.call(null,attrs);var chunk__35926_35942 = null;var count__35927_35943 = 0;var i__35928_35944 = 0;while(true){
if((i__35928_35944 < count__35927_35943))
{var vec__35929_35945 = cljs.core._nth.call(null,chunk__35926_35942,i__35928_35944);var k_35946 = cljs.core.nth.call(null,vec__35929_35945,0,null);var v_35947 = cljs.core.nth.call(null,vec__35929_35945,1,null);var G__35930_35948 = k_35946;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35930_35948))
{var seq__35931_35949 = cljs.core.seq.call(null,v_35947);var chunk__35932_35950 = null;var count__35933_35951 = 0;var i__35934_35952 = 0;while(true){
if((i__35934_35952 < count__35933_35951))
{var c_35953 = cljs.core._nth.call(null,chunk__35932_35950,i__35934_35952);dommy.attrs.add_class_BANG_.call(null,n,c_35953);
{
var G__35954 = seq__35931_35949;
var G__35955 = chunk__35932_35950;
var G__35956 = count__35933_35951;
var G__35957 = (i__35934_35952 + 1);
seq__35931_35949 = G__35954;
chunk__35932_35950 = G__35955;
count__35933_35951 = G__35956;
i__35934_35952 = G__35957;
continue;
}
} else
{var temp__4092__auto___35958 = cljs.core.seq.call(null,seq__35931_35949);if(temp__4092__auto___35958)
{var seq__35931_35959__$1 = temp__4092__auto___35958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35931_35959__$1))
{var c__14547__auto___35960 = cljs.core.chunk_first.call(null,seq__35931_35959__$1);{
var G__35961 = cljs.core.chunk_rest.call(null,seq__35931_35959__$1);
var G__35962 = c__14547__auto___35960;
var G__35963 = cljs.core.count.call(null,c__14547__auto___35960);
var G__35964 = 0;
seq__35931_35949 = G__35961;
chunk__35932_35950 = G__35962;
count__35933_35951 = G__35963;
i__35934_35952 = G__35964;
continue;
}
} else
{var c_35965 = cljs.core.first.call(null,seq__35931_35959__$1);dommy.attrs.add_class_BANG_.call(null,n,c_35965);
{
var G__35966 = cljs.core.next.call(null,seq__35931_35959__$1);
var G__35967 = null;
var G__35968 = 0;
var G__35969 = 0;
seq__35931_35949 = G__35966;
chunk__35932_35950 = G__35967;
count__35933_35951 = G__35968;
i__35934_35952 = G__35969;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35930_35948))
{dommy.attrs.add_class_BANG_.call(null,n,v_35947);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35946,v_35947);
} else
{}
}
}
{
var G__35970 = seq__35925_35941;
var G__35971 = chunk__35926_35942;
var G__35972 = count__35927_35943;
var G__35973 = (i__35928_35944 + 1);
seq__35925_35941 = G__35970;
chunk__35926_35942 = G__35971;
count__35927_35943 = G__35972;
i__35928_35944 = G__35973;
continue;
}
} else
{var temp__4092__auto___35974 = cljs.core.seq.call(null,seq__35925_35941);if(temp__4092__auto___35974)
{var seq__35925_35975__$1 = temp__4092__auto___35974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35925_35975__$1))
{var c__14547__auto___35976 = cljs.core.chunk_first.call(null,seq__35925_35975__$1);{
var G__35977 = cljs.core.chunk_rest.call(null,seq__35925_35975__$1);
var G__35978 = c__14547__auto___35976;
var G__35979 = cljs.core.count.call(null,c__14547__auto___35976);
var G__35980 = 0;
seq__35925_35941 = G__35977;
chunk__35926_35942 = G__35978;
count__35927_35943 = G__35979;
i__35928_35944 = G__35980;
continue;
}
} else
{var vec__35935_35981 = cljs.core.first.call(null,seq__35925_35975__$1);var k_35982 = cljs.core.nth.call(null,vec__35935_35981,0,null);var v_35983 = cljs.core.nth.call(null,vec__35935_35981,1,null);var G__35936_35984 = k_35982;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__35936_35984))
{var seq__35937_35985 = cljs.core.seq.call(null,v_35983);var chunk__35938_35986 = null;var count__35939_35987 = 0;var i__35940_35988 = 0;while(true){
if((i__35940_35988 < count__35939_35987))
{var c_35989 = cljs.core._nth.call(null,chunk__35938_35986,i__35940_35988);dommy.attrs.add_class_BANG_.call(null,n,c_35989);
{
var G__35990 = seq__35937_35985;
var G__35991 = chunk__35938_35986;
var G__35992 = count__35939_35987;
var G__35993 = (i__35940_35988 + 1);
seq__35937_35985 = G__35990;
chunk__35938_35986 = G__35991;
count__35939_35987 = G__35992;
i__35940_35988 = G__35993;
continue;
}
} else
{var temp__4092__auto___35994__$1 = cljs.core.seq.call(null,seq__35937_35985);if(temp__4092__auto___35994__$1)
{var seq__35937_35995__$1 = temp__4092__auto___35994__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35937_35995__$1))
{var c__14547__auto___35996 = cljs.core.chunk_first.call(null,seq__35937_35995__$1);{
var G__35997 = cljs.core.chunk_rest.call(null,seq__35937_35995__$1);
var G__35998 = c__14547__auto___35996;
var G__35999 = cljs.core.count.call(null,c__14547__auto___35996);
var G__36000 = 0;
seq__35937_35985 = G__35997;
chunk__35938_35986 = G__35998;
count__35939_35987 = G__35999;
i__35940_35988 = G__36000;
continue;
}
} else
{var c_36001 = cljs.core.first.call(null,seq__35937_35995__$1);dommy.attrs.add_class_BANG_.call(null,n,c_36001);
{
var G__36002 = cljs.core.next.call(null,seq__35937_35995__$1);
var G__36003 = null;
var G__36004 = 0;
var G__36005 = 0;
seq__35937_35985 = G__36002;
chunk__35938_35986 = G__36003;
count__35939_35987 = G__36004;
i__35940_35988 = G__36005;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__35936_35984))
{dommy.attrs.add_class_BANG_.call(null,n,v_35983);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_35982,v_35983);
} else
{}
}
}
{
var G__36006 = cljs.core.next.call(null,seq__35925_35975__$1);
var G__36007 = null;
var G__36008 = 0;
var G__36009 = 0;
seq__35925_35941 = G__36006;
chunk__35926_35942 = G__36007;
count__35927_35943 = G__36008;
i__35928_35944 = G__36009;
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
}catch (e36010){if((e36010 instanceof ReferenceError))
{var __36011 = e36010;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36010;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__36013 = data;if(G__36013)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__36013.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__36013.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36013);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__36013);
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