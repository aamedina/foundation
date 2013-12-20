// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj404952 = {};return obj404952;
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
{var str_404955 = node_str.substring(base_idx);while(true){
var next_idx_404956 = dommy.template.next_css_index.call(null,str_404955,1);var frag_404957 = (((next_idx_404956 >= 0))?str_404955.substring(0,next_idx_404956):str_404955);var G__404954_404958 = frag_404957.charAt(0);if(cljs.core._EQ_.call(null,"#",G__404954_404958))
{node.setAttribute("id",frag_404957.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__404954_404958))
{dommy.attrs.add_class_BANG_.call(null,node,frag_404957.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_404957.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_404956 >= 0))
{{
var G__404959 = str_404955.substring(next_idx_404956);
str_404955 = G__404959;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__404965 = data;if(G__404965)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__404965.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__404965.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__404965);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__404965);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__404966_404970 = cljs.core.seq.call(null,data);var chunk__404967_404971 = null;var count__404968_404972 = 0;var i__404969_404973 = 0;while(true){
if((i__404969_404973 < count__404968_404972))
{var child_404974 = cljs.core._nth.call(null,chunk__404967_404971,i__404969_404973);__GT_document_fragment.call(null,result_frag,child_404974);
{
var G__404975 = seq__404966_404970;
var G__404976 = chunk__404967_404971;
var G__404977 = count__404968_404972;
var G__404978 = (i__404969_404973 + 1);
seq__404966_404970 = G__404975;
chunk__404967_404971 = G__404976;
count__404968_404972 = G__404977;
i__404969_404973 = G__404978;
continue;
}
} else
{var temp__4092__auto___404979 = cljs.core.seq.call(null,seq__404966_404970);if(temp__4092__auto___404979)
{var seq__404966_404980__$1 = temp__4092__auto___404979;if(cljs.core.chunked_seq_QMARK_.call(null,seq__404966_404980__$1))
{var c__8952__auto___404981 = cljs.core.chunk_first.call(null,seq__404966_404980__$1);{
var G__404982 = cljs.core.chunk_rest.call(null,seq__404966_404980__$1);
var G__404983 = c__8952__auto___404981;
var G__404984 = cljs.core.count.call(null,c__8952__auto___404981);
var G__404985 = 0;
seq__404966_404970 = G__404982;
chunk__404967_404971 = G__404983;
count__404968_404972 = G__404984;
i__404969_404973 = G__404985;
continue;
}
} else
{var child_404986 = cljs.core.first.call(null,seq__404966_404980__$1);__GT_document_fragment.call(null,result_frag,child_404986);
{
var G__404987 = cljs.core.next.call(null,seq__404966_404980__$1);
var G__404988 = null;
var G__404989 = 0;
var G__404990 = 0;
seq__404966_404970 = G__404987;
chunk__404967_404971 = G__404988;
count__404968_404972 = G__404989;
i__404969_404973 = G__404990;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__404992 = data;if(G__404992)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__404992.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__404992.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__404992);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__404992);
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
dommy.template.compound_element = (function compound_element(p__404993){var vec__405013 = p__404993;var tag_name = cljs.core.nth.call(null,vec__405013,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__405013,1,null);var children = cljs.core.nthnext.call(null,vec__405013,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__405015 = maybe_attrs;if(G__405015)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__405015.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__405015.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__405015);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__405015);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__405016_405032 = cljs.core.seq.call(null,attrs);var chunk__405017_405033 = null;var count__405018_405034 = 0;var i__405019_405035 = 0;while(true){
if((i__405019_405035 < count__405018_405034))
{var vec__405020_405036 = cljs.core._nth.call(null,chunk__405017_405033,i__405019_405035);var k_405037 = cljs.core.nth.call(null,vec__405020_405036,0,null);var v_405038 = cljs.core.nth.call(null,vec__405020_405036,1,null);var G__405021_405039 = k_405037;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__405021_405039))
{var seq__405022_405040 = cljs.core.seq.call(null,v_405038);var chunk__405023_405041 = null;var count__405024_405042 = 0;var i__405025_405043 = 0;while(true){
if((i__405025_405043 < count__405024_405042))
{var c_405044 = cljs.core._nth.call(null,chunk__405023_405041,i__405025_405043);dommy.attrs.add_class_BANG_.call(null,n,c_405044);
{
var G__405045 = seq__405022_405040;
var G__405046 = chunk__405023_405041;
var G__405047 = count__405024_405042;
var G__405048 = (i__405025_405043 + 1);
seq__405022_405040 = G__405045;
chunk__405023_405041 = G__405046;
count__405024_405042 = G__405047;
i__405025_405043 = G__405048;
continue;
}
} else
{var temp__4092__auto___405049 = cljs.core.seq.call(null,seq__405022_405040);if(temp__4092__auto___405049)
{var seq__405022_405050__$1 = temp__4092__auto___405049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405022_405050__$1))
{var c__8952__auto___405051 = cljs.core.chunk_first.call(null,seq__405022_405050__$1);{
var G__405052 = cljs.core.chunk_rest.call(null,seq__405022_405050__$1);
var G__405053 = c__8952__auto___405051;
var G__405054 = cljs.core.count.call(null,c__8952__auto___405051);
var G__405055 = 0;
seq__405022_405040 = G__405052;
chunk__405023_405041 = G__405053;
count__405024_405042 = G__405054;
i__405025_405043 = G__405055;
continue;
}
} else
{var c_405056 = cljs.core.first.call(null,seq__405022_405050__$1);dommy.attrs.add_class_BANG_.call(null,n,c_405056);
{
var G__405057 = cljs.core.next.call(null,seq__405022_405050__$1);
var G__405058 = null;
var G__405059 = 0;
var G__405060 = 0;
seq__405022_405040 = G__405057;
chunk__405023_405041 = G__405058;
count__405024_405042 = G__405059;
i__405025_405043 = G__405060;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__405021_405039))
{dommy.attrs.add_class_BANG_.call(null,n,v_405038);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_405037,v_405038);
} else
{}
}
}
{
var G__405061 = seq__405016_405032;
var G__405062 = chunk__405017_405033;
var G__405063 = count__405018_405034;
var G__405064 = (i__405019_405035 + 1);
seq__405016_405032 = G__405061;
chunk__405017_405033 = G__405062;
count__405018_405034 = G__405063;
i__405019_405035 = G__405064;
continue;
}
} else
{var temp__4092__auto___405065 = cljs.core.seq.call(null,seq__405016_405032);if(temp__4092__auto___405065)
{var seq__405016_405066__$1 = temp__4092__auto___405065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405016_405066__$1))
{var c__8952__auto___405067 = cljs.core.chunk_first.call(null,seq__405016_405066__$1);{
var G__405068 = cljs.core.chunk_rest.call(null,seq__405016_405066__$1);
var G__405069 = c__8952__auto___405067;
var G__405070 = cljs.core.count.call(null,c__8952__auto___405067);
var G__405071 = 0;
seq__405016_405032 = G__405068;
chunk__405017_405033 = G__405069;
count__405018_405034 = G__405070;
i__405019_405035 = G__405071;
continue;
}
} else
{var vec__405026_405072 = cljs.core.first.call(null,seq__405016_405066__$1);var k_405073 = cljs.core.nth.call(null,vec__405026_405072,0,null);var v_405074 = cljs.core.nth.call(null,vec__405026_405072,1,null);var G__405027_405075 = k_405073;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__405027_405075))
{var seq__405028_405076 = cljs.core.seq.call(null,v_405074);var chunk__405029_405077 = null;var count__405030_405078 = 0;var i__405031_405079 = 0;while(true){
if((i__405031_405079 < count__405030_405078))
{var c_405080 = cljs.core._nth.call(null,chunk__405029_405077,i__405031_405079);dommy.attrs.add_class_BANG_.call(null,n,c_405080);
{
var G__405081 = seq__405028_405076;
var G__405082 = chunk__405029_405077;
var G__405083 = count__405030_405078;
var G__405084 = (i__405031_405079 + 1);
seq__405028_405076 = G__405081;
chunk__405029_405077 = G__405082;
count__405030_405078 = G__405083;
i__405031_405079 = G__405084;
continue;
}
} else
{var temp__4092__auto___405085__$1 = cljs.core.seq.call(null,seq__405028_405076);if(temp__4092__auto___405085__$1)
{var seq__405028_405086__$1 = temp__4092__auto___405085__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__405028_405086__$1))
{var c__8952__auto___405087 = cljs.core.chunk_first.call(null,seq__405028_405086__$1);{
var G__405088 = cljs.core.chunk_rest.call(null,seq__405028_405086__$1);
var G__405089 = c__8952__auto___405087;
var G__405090 = cljs.core.count.call(null,c__8952__auto___405087);
var G__405091 = 0;
seq__405028_405076 = G__405088;
chunk__405029_405077 = G__405089;
count__405030_405078 = G__405090;
i__405031_405079 = G__405091;
continue;
}
} else
{var c_405092 = cljs.core.first.call(null,seq__405028_405086__$1);dommy.attrs.add_class_BANG_.call(null,n,c_405092);
{
var G__405093 = cljs.core.next.call(null,seq__405028_405086__$1);
var G__405094 = null;
var G__405095 = 0;
var G__405096 = 0;
seq__405028_405076 = G__405093;
chunk__405029_405077 = G__405094;
count__405030_405078 = G__405095;
i__405031_405079 = G__405096;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__405027_405075))
{dommy.attrs.add_class_BANG_.call(null,n,v_405074);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_405073,v_405074);
} else
{}
}
}
{
var G__405097 = cljs.core.next.call(null,seq__405016_405066__$1);
var G__405098 = null;
var G__405099 = 0;
var G__405100 = 0;
seq__405016_405032 = G__405097;
chunk__405017_405033 = G__405098;
count__405018_405034 = G__405099;
i__405019_405035 = G__405100;
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
}catch (e405101){if((e405101 instanceof ReferenceError))
{var __405102 = e405101;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e405101;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__405104 = data;if(G__405104)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__405104.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__405104.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__405104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__405104);
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