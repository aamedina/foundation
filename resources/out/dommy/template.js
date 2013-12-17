// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj385775 = {};return obj385775;
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
{var str_385778 = node_str.substring(base_idx);while(true){
var next_idx_385779 = dommy.template.next_css_index.call(null,str_385778,1);var frag_385780 = (((next_idx_385779 >= 0))?str_385778.substring(0,next_idx_385779):str_385778);var G__385777_385781 = frag_385780.charAt(0);if(cljs.core._EQ_.call(null,"#",G__385777_385781))
{node.setAttribute("id",frag_385780.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__385777_385781))
{dommy.attrs.add_class_BANG_.call(null,node,frag_385780.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_385780.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_385779 >= 0))
{{
var G__385782 = str_385778.substring(next_idx_385779);
str_385778 = G__385782;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__385788 = data;if(G__385788)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__385788.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__385788.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385788);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385788);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__385789_385793 = cljs.core.seq.call(null,data);var chunk__385790_385794 = null;var count__385791_385795 = 0;var i__385792_385796 = 0;while(true){
if((i__385792_385796 < count__385791_385795))
{var child_385797 = cljs.core._nth.call(null,chunk__385790_385794,i__385792_385796);__GT_document_fragment.call(null,result_frag,child_385797);
{
var G__385798 = seq__385789_385793;
var G__385799 = chunk__385790_385794;
var G__385800 = count__385791_385795;
var G__385801 = (i__385792_385796 + 1);
seq__385789_385793 = G__385798;
chunk__385790_385794 = G__385799;
count__385791_385795 = G__385800;
i__385792_385796 = G__385801;
continue;
}
} else
{var temp__4092__auto___385802 = cljs.core.seq.call(null,seq__385789_385793);if(temp__4092__auto___385802)
{var seq__385789_385803__$1 = temp__4092__auto___385802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385789_385803__$1))
{var c__14708__auto___385804 = cljs.core.chunk_first.call(null,seq__385789_385803__$1);{
var G__385805 = cljs.core.chunk_rest.call(null,seq__385789_385803__$1);
var G__385806 = c__14708__auto___385804;
var G__385807 = cljs.core.count.call(null,c__14708__auto___385804);
var G__385808 = 0;
seq__385789_385793 = G__385805;
chunk__385790_385794 = G__385806;
count__385791_385795 = G__385807;
i__385792_385796 = G__385808;
continue;
}
} else
{var child_385809 = cljs.core.first.call(null,seq__385789_385803__$1);__GT_document_fragment.call(null,result_frag,child_385809);
{
var G__385810 = cljs.core.next.call(null,seq__385789_385803__$1);
var G__385811 = null;
var G__385812 = 0;
var G__385813 = 0;
seq__385789_385793 = G__385810;
chunk__385790_385794 = G__385811;
count__385791_385795 = G__385812;
i__385792_385796 = G__385813;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__385815 = data;if(G__385815)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__385815.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__385815.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385815);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385815);
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
dommy.template.compound_element = (function compound_element(p__385816){var vec__385836 = p__385816;var tag_name = cljs.core.nth.call(null,vec__385836,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__385836,1,null);var children = cljs.core.nthnext.call(null,vec__385836,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__385838 = maybe_attrs;if(G__385838)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__385838.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__385838.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385838);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385838);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__385839_385855 = cljs.core.seq.call(null,attrs);var chunk__385840_385856 = null;var count__385841_385857 = 0;var i__385842_385858 = 0;while(true){
if((i__385842_385858 < count__385841_385857))
{var vec__385843_385859 = cljs.core._nth.call(null,chunk__385840_385856,i__385842_385858);var k_385860 = cljs.core.nth.call(null,vec__385843_385859,0,null);var v_385861 = cljs.core.nth.call(null,vec__385843_385859,1,null);var G__385844_385862 = k_385860;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__385844_385862))
{var seq__385845_385863 = cljs.core.seq.call(null,v_385861);var chunk__385846_385864 = null;var count__385847_385865 = 0;var i__385848_385866 = 0;while(true){
if((i__385848_385866 < count__385847_385865))
{var c_385867 = cljs.core._nth.call(null,chunk__385846_385864,i__385848_385866);dommy.attrs.add_class_BANG_.call(null,n,c_385867);
{
var G__385868 = seq__385845_385863;
var G__385869 = chunk__385846_385864;
var G__385870 = count__385847_385865;
var G__385871 = (i__385848_385866 + 1);
seq__385845_385863 = G__385868;
chunk__385846_385864 = G__385869;
count__385847_385865 = G__385870;
i__385848_385866 = G__385871;
continue;
}
} else
{var temp__4092__auto___385872 = cljs.core.seq.call(null,seq__385845_385863);if(temp__4092__auto___385872)
{var seq__385845_385873__$1 = temp__4092__auto___385872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385845_385873__$1))
{var c__14708__auto___385874 = cljs.core.chunk_first.call(null,seq__385845_385873__$1);{
var G__385875 = cljs.core.chunk_rest.call(null,seq__385845_385873__$1);
var G__385876 = c__14708__auto___385874;
var G__385877 = cljs.core.count.call(null,c__14708__auto___385874);
var G__385878 = 0;
seq__385845_385863 = G__385875;
chunk__385846_385864 = G__385876;
count__385847_385865 = G__385877;
i__385848_385866 = G__385878;
continue;
}
} else
{var c_385879 = cljs.core.first.call(null,seq__385845_385873__$1);dommy.attrs.add_class_BANG_.call(null,n,c_385879);
{
var G__385880 = cljs.core.next.call(null,seq__385845_385873__$1);
var G__385881 = null;
var G__385882 = 0;
var G__385883 = 0;
seq__385845_385863 = G__385880;
chunk__385846_385864 = G__385881;
count__385847_385865 = G__385882;
i__385848_385866 = G__385883;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__385844_385862))
{dommy.attrs.add_class_BANG_.call(null,n,v_385861);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_385860,v_385861);
} else
{}
}
}
{
var G__385884 = seq__385839_385855;
var G__385885 = chunk__385840_385856;
var G__385886 = count__385841_385857;
var G__385887 = (i__385842_385858 + 1);
seq__385839_385855 = G__385884;
chunk__385840_385856 = G__385885;
count__385841_385857 = G__385886;
i__385842_385858 = G__385887;
continue;
}
} else
{var temp__4092__auto___385888 = cljs.core.seq.call(null,seq__385839_385855);if(temp__4092__auto___385888)
{var seq__385839_385889__$1 = temp__4092__auto___385888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385839_385889__$1))
{var c__14708__auto___385890 = cljs.core.chunk_first.call(null,seq__385839_385889__$1);{
var G__385891 = cljs.core.chunk_rest.call(null,seq__385839_385889__$1);
var G__385892 = c__14708__auto___385890;
var G__385893 = cljs.core.count.call(null,c__14708__auto___385890);
var G__385894 = 0;
seq__385839_385855 = G__385891;
chunk__385840_385856 = G__385892;
count__385841_385857 = G__385893;
i__385842_385858 = G__385894;
continue;
}
} else
{var vec__385849_385895 = cljs.core.first.call(null,seq__385839_385889__$1);var k_385896 = cljs.core.nth.call(null,vec__385849_385895,0,null);var v_385897 = cljs.core.nth.call(null,vec__385849_385895,1,null);var G__385850_385898 = k_385896;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__385850_385898))
{var seq__385851_385899 = cljs.core.seq.call(null,v_385897);var chunk__385852_385900 = null;var count__385853_385901 = 0;var i__385854_385902 = 0;while(true){
if((i__385854_385902 < count__385853_385901))
{var c_385903 = cljs.core._nth.call(null,chunk__385852_385900,i__385854_385902);dommy.attrs.add_class_BANG_.call(null,n,c_385903);
{
var G__385904 = seq__385851_385899;
var G__385905 = chunk__385852_385900;
var G__385906 = count__385853_385901;
var G__385907 = (i__385854_385902 + 1);
seq__385851_385899 = G__385904;
chunk__385852_385900 = G__385905;
count__385853_385901 = G__385906;
i__385854_385902 = G__385907;
continue;
}
} else
{var temp__4092__auto___385908__$1 = cljs.core.seq.call(null,seq__385851_385899);if(temp__4092__auto___385908__$1)
{var seq__385851_385909__$1 = temp__4092__auto___385908__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385851_385909__$1))
{var c__14708__auto___385910 = cljs.core.chunk_first.call(null,seq__385851_385909__$1);{
var G__385911 = cljs.core.chunk_rest.call(null,seq__385851_385909__$1);
var G__385912 = c__14708__auto___385910;
var G__385913 = cljs.core.count.call(null,c__14708__auto___385910);
var G__385914 = 0;
seq__385851_385899 = G__385911;
chunk__385852_385900 = G__385912;
count__385853_385901 = G__385913;
i__385854_385902 = G__385914;
continue;
}
} else
{var c_385915 = cljs.core.first.call(null,seq__385851_385909__$1);dommy.attrs.add_class_BANG_.call(null,n,c_385915);
{
var G__385916 = cljs.core.next.call(null,seq__385851_385909__$1);
var G__385917 = null;
var G__385918 = 0;
var G__385919 = 0;
seq__385851_385899 = G__385916;
chunk__385852_385900 = G__385917;
count__385853_385901 = G__385918;
i__385854_385902 = G__385919;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__385850_385898))
{dommy.attrs.add_class_BANG_.call(null,n,v_385897);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_385896,v_385897);
} else
{}
}
}
{
var G__385920 = cljs.core.next.call(null,seq__385839_385889__$1);
var G__385921 = null;
var G__385922 = 0;
var G__385923 = 0;
seq__385839_385855 = G__385920;
chunk__385840_385856 = G__385921;
count__385841_385857 = G__385922;
i__385842_385858 = G__385923;
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
}catch (e385924){if((e385924 instanceof ReferenceError))
{var __385925 = e385924;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e385924;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__385927 = data;if(G__385927)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__385927.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__385927.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__385927);
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