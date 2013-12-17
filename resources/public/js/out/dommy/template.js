// Compiled by ClojureScript 0.0-2120
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj13421 = {};return obj13421;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__8186__auto__ = this$;if(and__8186__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__8186__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__8806__auto__ = (((this$ == null))?null:this$);return (function (){var or__8198__auto__ = (dommy.template._elem[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (dommy.template._elem["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
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
{var str_13424 = node_str.substring(base_idx);while(true){
var next_idx_13425 = dommy.template.next_css_index.call(null,str_13424,1);var frag_13426 = (((next_idx_13425 >= 0))?str_13424.substring(0,next_idx_13425):str_13424);var G__13423_13427 = frag_13426.charAt(0);if(cljs.core._EQ_.call(null,"#",G__13423_13427))
{node.setAttribute("id",frag_13426.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__13423_13427))
{dommy.attrs.add_class_BANG_.call(null,node,frag_13426.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_13426.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_13425 >= 0))
{{
var G__13428 = str_13424.substring(next_idx_13425);
str_13424 = G__13428;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__13434 = data;if(G__13434)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13434.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13434.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13434);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13434);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__13435_13439 = cljs.core.seq.call(null,data);var chunk__13436_13440 = null;var count__13437_13441 = 0;var i__13438_13442 = 0;while(true){
if((i__13438_13442 < count__13437_13441))
{var child_13443 = cljs.core._nth.call(null,chunk__13436_13440,i__13438_13442);__GT_document_fragment.call(null,result_frag,child_13443);
{
var G__13444 = seq__13435_13439;
var G__13445 = chunk__13436_13440;
var G__13446 = count__13437_13441;
var G__13447 = (i__13438_13442 + 1);
seq__13435_13439 = G__13444;
chunk__13436_13440 = G__13445;
count__13437_13441 = G__13446;
i__13438_13442 = G__13447;
continue;
}
} else
{var temp__4092__auto___13448 = cljs.core.seq.call(null,seq__13435_13439);if(temp__4092__auto___13448)
{var seq__13435_13449__$1 = temp__4092__auto___13448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13435_13449__$1))
{var c__8927__auto___13450 = cljs.core.chunk_first.call(null,seq__13435_13449__$1);{
var G__13451 = cljs.core.chunk_rest.call(null,seq__13435_13449__$1);
var G__13452 = c__8927__auto___13450;
var G__13453 = cljs.core.count.call(null,c__8927__auto___13450);
var G__13454 = 0;
seq__13435_13439 = G__13451;
chunk__13436_13440 = G__13452;
count__13437_13441 = G__13453;
i__13438_13442 = G__13454;
continue;
}
} else
{var child_13455 = cljs.core.first.call(null,seq__13435_13449__$1);__GT_document_fragment.call(null,result_frag,child_13455);
{
var G__13456 = cljs.core.next.call(null,seq__13435_13449__$1);
var G__13457 = null;
var G__13458 = 0;
var G__13459 = 0;
seq__13435_13439 = G__13456;
chunk__13436_13440 = G__13457;
count__13437_13441 = G__13458;
i__13438_13442 = G__13459;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__13461 = data;if(G__13461)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13461.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13461.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13461);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13461);
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
dommy.template.compound_element = (function compound_element(p__13462){var vec__13482 = p__13462;var tag_name = cljs.core.nth.call(null,vec__13482,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__13482,1,null);var children = cljs.core.nthnext.call(null,vec__13482,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__13484 = maybe_attrs;if(G__13484)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13484.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13484.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13484);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13484);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__13485_13501 = cljs.core.seq.call(null,attrs);var chunk__13486_13502 = null;var count__13487_13503 = 0;var i__13488_13504 = 0;while(true){
if((i__13488_13504 < count__13487_13503))
{var vec__13489_13505 = cljs.core._nth.call(null,chunk__13486_13502,i__13488_13504);var k_13506 = cljs.core.nth.call(null,vec__13489_13505,0,null);var v_13507 = cljs.core.nth.call(null,vec__13489_13505,1,null);var G__13490_13508 = k_13506;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13490_13508))
{var seq__13491_13509 = cljs.core.seq.call(null,v_13507);var chunk__13492_13510 = null;var count__13493_13511 = 0;var i__13494_13512 = 0;while(true){
if((i__13494_13512 < count__13493_13511))
{var c_13513 = cljs.core._nth.call(null,chunk__13492_13510,i__13494_13512);dommy.attrs.add_class_BANG_.call(null,n,c_13513);
{
var G__13514 = seq__13491_13509;
var G__13515 = chunk__13492_13510;
var G__13516 = count__13493_13511;
var G__13517 = (i__13494_13512 + 1);
seq__13491_13509 = G__13514;
chunk__13492_13510 = G__13515;
count__13493_13511 = G__13516;
i__13494_13512 = G__13517;
continue;
}
} else
{var temp__4092__auto___13518 = cljs.core.seq.call(null,seq__13491_13509);if(temp__4092__auto___13518)
{var seq__13491_13519__$1 = temp__4092__auto___13518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13491_13519__$1))
{var c__8927__auto___13520 = cljs.core.chunk_first.call(null,seq__13491_13519__$1);{
var G__13521 = cljs.core.chunk_rest.call(null,seq__13491_13519__$1);
var G__13522 = c__8927__auto___13520;
var G__13523 = cljs.core.count.call(null,c__8927__auto___13520);
var G__13524 = 0;
seq__13491_13509 = G__13521;
chunk__13492_13510 = G__13522;
count__13493_13511 = G__13523;
i__13494_13512 = G__13524;
continue;
}
} else
{var c_13525 = cljs.core.first.call(null,seq__13491_13519__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13525);
{
var G__13526 = cljs.core.next.call(null,seq__13491_13519__$1);
var G__13527 = null;
var G__13528 = 0;
var G__13529 = 0;
seq__13491_13509 = G__13526;
chunk__13492_13510 = G__13527;
count__13493_13511 = G__13528;
i__13494_13512 = G__13529;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13490_13508))
{dommy.attrs.add_class_BANG_.call(null,n,v_13507);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13506,v_13507);
} else
{}
}
}
{
var G__13530 = seq__13485_13501;
var G__13531 = chunk__13486_13502;
var G__13532 = count__13487_13503;
var G__13533 = (i__13488_13504 + 1);
seq__13485_13501 = G__13530;
chunk__13486_13502 = G__13531;
count__13487_13503 = G__13532;
i__13488_13504 = G__13533;
continue;
}
} else
{var temp__4092__auto___13534 = cljs.core.seq.call(null,seq__13485_13501);if(temp__4092__auto___13534)
{var seq__13485_13535__$1 = temp__4092__auto___13534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13485_13535__$1))
{var c__8927__auto___13536 = cljs.core.chunk_first.call(null,seq__13485_13535__$1);{
var G__13537 = cljs.core.chunk_rest.call(null,seq__13485_13535__$1);
var G__13538 = c__8927__auto___13536;
var G__13539 = cljs.core.count.call(null,c__8927__auto___13536);
var G__13540 = 0;
seq__13485_13501 = G__13537;
chunk__13486_13502 = G__13538;
count__13487_13503 = G__13539;
i__13488_13504 = G__13540;
continue;
}
} else
{var vec__13495_13541 = cljs.core.first.call(null,seq__13485_13535__$1);var k_13542 = cljs.core.nth.call(null,vec__13495_13541,0,null);var v_13543 = cljs.core.nth.call(null,vec__13495_13541,1,null);var G__13496_13544 = k_13542;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__13496_13544))
{var seq__13497_13545 = cljs.core.seq.call(null,v_13543);var chunk__13498_13546 = null;var count__13499_13547 = 0;var i__13500_13548 = 0;while(true){
if((i__13500_13548 < count__13499_13547))
{var c_13549 = cljs.core._nth.call(null,chunk__13498_13546,i__13500_13548);dommy.attrs.add_class_BANG_.call(null,n,c_13549);
{
var G__13550 = seq__13497_13545;
var G__13551 = chunk__13498_13546;
var G__13552 = count__13499_13547;
var G__13553 = (i__13500_13548 + 1);
seq__13497_13545 = G__13550;
chunk__13498_13546 = G__13551;
count__13499_13547 = G__13552;
i__13500_13548 = G__13553;
continue;
}
} else
{var temp__4092__auto___13554__$1 = cljs.core.seq.call(null,seq__13497_13545);if(temp__4092__auto___13554__$1)
{var seq__13497_13555__$1 = temp__4092__auto___13554__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13497_13555__$1))
{var c__8927__auto___13556 = cljs.core.chunk_first.call(null,seq__13497_13555__$1);{
var G__13557 = cljs.core.chunk_rest.call(null,seq__13497_13555__$1);
var G__13558 = c__8927__auto___13556;
var G__13559 = cljs.core.count.call(null,c__8927__auto___13556);
var G__13560 = 0;
seq__13497_13545 = G__13557;
chunk__13498_13546 = G__13558;
count__13499_13547 = G__13559;
i__13500_13548 = G__13560;
continue;
}
} else
{var c_13561 = cljs.core.first.call(null,seq__13497_13555__$1);dommy.attrs.add_class_BANG_.call(null,n,c_13561);
{
var G__13562 = cljs.core.next.call(null,seq__13497_13555__$1);
var G__13563 = null;
var G__13564 = 0;
var G__13565 = 0;
seq__13497_13545 = G__13562;
chunk__13498_13546 = G__13563;
count__13499_13547 = G__13564;
i__13500_13548 = G__13565;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__13496_13544))
{dommy.attrs.add_class_BANG_.call(null,n,v_13543);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_13542,v_13543);
} else
{}
}
}
{
var G__13566 = cljs.core.next.call(null,seq__13485_13535__$1);
var G__13567 = null;
var G__13568 = 0;
var G__13569 = 0;
seq__13485_13501 = G__13566;
chunk__13486_13502 = G__13567;
count__13487_13503 = G__13568;
i__13488_13504 = G__13569;
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
}catch (e13570){if((e13570 instanceof ReferenceError))
{var __13571 = e13570;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13570;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__13573 = data;if(G__13573)
{var bit__8829__auto__ = null;if(cljs.core.truth_((function (){var or__8198__auto__ = bit__8829__auto__;if(cljs.core.truth_(or__8198__auto__))
{return or__8198__auto__;
} else
{return G__13573.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__13573.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__13573);
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