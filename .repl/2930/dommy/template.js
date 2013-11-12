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
{var str_46317 = node_str.substring(base_idx);while(true){
var next_idx_46318 = dommy.template.next_css_index.call(null,str_46317,1);var frag_46319 = (((next_idx_46318 >= 0))?str_46317.substring(0,next_idx_46318):str_46317);var G__46316_46320 = frag_46319.charAt(0);if(cljs.core._EQ_.call(null,"#",G__46316_46320))
{node.setAttribute("id",frag_46319.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__46316_46320))
{dommy.attrs.add_class_BANG_.call(null,node,frag_46319.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_46319.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_46318 >= 0))
{{
var G__46321 = str_46317.substring(next_idx_46318);
str_46317 = G__46321;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__46327 = data;if(G__46327)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__46327.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__46327.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46327);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46327);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__46328_46332 = cljs.core.seq.call(null,data);var chunk__46329_46333 = null;var count__46330_46334 = 0;var i__46331_46335 = 0;while(true){
if((i__46331_46335 < count__46330_46334))
{var child_46336 = cljs.core._nth.call(null,chunk__46329_46333,i__46331_46335);__GT_document_fragment.call(null,result_frag,child_46336);
{
var G__46337 = seq__46328_46332;
var G__46338 = chunk__46329_46333;
var G__46339 = count__46330_46334;
var G__46340 = (i__46331_46335 + 1);
seq__46328_46332 = G__46337;
chunk__46329_46333 = G__46338;
count__46330_46334 = G__46339;
i__46331_46335 = G__46340;
continue;
}
} else
{var temp__4092__auto___46341 = cljs.core.seq.call(null,seq__46328_46332);if(temp__4092__auto___46341)
{var seq__46328_46342__$1 = temp__4092__auto___46341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46328_46342__$1))
{var c__8156__auto___46343 = cljs.core.chunk_first.call(null,seq__46328_46342__$1);{
var G__46344 = cljs.core.chunk_rest.call(null,seq__46328_46342__$1);
var G__46345 = c__8156__auto___46343;
var G__46346 = cljs.core.count.call(null,c__8156__auto___46343);
var G__46347 = 0;
seq__46328_46332 = G__46344;
chunk__46329_46333 = G__46345;
count__46330_46334 = G__46346;
i__46331_46335 = G__46347;
continue;
}
} else
{var child_46348 = cljs.core.first.call(null,seq__46328_46342__$1);__GT_document_fragment.call(null,result_frag,child_46348);
{
var G__46349 = cljs.core.next.call(null,seq__46328_46342__$1);
var G__46350 = null;
var G__46351 = 0;
var G__46352 = 0;
seq__46328_46332 = G__46349;
chunk__46329_46333 = G__46350;
count__46330_46334 = G__46351;
i__46331_46335 = G__46352;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__46354 = data;if(G__46354)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__46354.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__46354.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46354);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46354);
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
dommy.template.compound_element = (function compound_element(p__46355){var vec__46375 = p__46355;var tag_name = cljs.core.nth.call(null,vec__46375,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__46375,1,null);var children = cljs.core.nthnext.call(null,vec__46375,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__46377 = maybe_attrs;if(G__46377)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__46377.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__46377.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46377);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46377);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__46378_46394 = cljs.core.seq.call(null,attrs);var chunk__46379_46395 = null;var count__46380_46396 = 0;var i__46381_46397 = 0;while(true){
if((i__46381_46397 < count__46380_46396))
{var vec__46382_46398 = cljs.core._nth.call(null,chunk__46379_46395,i__46381_46397);var k_46399 = cljs.core.nth.call(null,vec__46382_46398,0,null);var v_46400 = cljs.core.nth.call(null,vec__46382_46398,1,null);var G__46383_46401 = k_46399;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__46383_46401))
{var seq__46384_46402 = cljs.core.seq.call(null,v_46400);var chunk__46385_46403 = null;var count__46386_46404 = 0;var i__46387_46405 = 0;while(true){
if((i__46387_46405 < count__46386_46404))
{var c_46406 = cljs.core._nth.call(null,chunk__46385_46403,i__46387_46405);dommy.attrs.add_class_BANG_.call(null,n,c_46406);
{
var G__46407 = seq__46384_46402;
var G__46408 = chunk__46385_46403;
var G__46409 = count__46386_46404;
var G__46410 = (i__46387_46405 + 1);
seq__46384_46402 = G__46407;
chunk__46385_46403 = G__46408;
count__46386_46404 = G__46409;
i__46387_46405 = G__46410;
continue;
}
} else
{var temp__4092__auto___46411 = cljs.core.seq.call(null,seq__46384_46402);if(temp__4092__auto___46411)
{var seq__46384_46412__$1 = temp__4092__auto___46411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46384_46412__$1))
{var c__8156__auto___46413 = cljs.core.chunk_first.call(null,seq__46384_46412__$1);{
var G__46414 = cljs.core.chunk_rest.call(null,seq__46384_46412__$1);
var G__46415 = c__8156__auto___46413;
var G__46416 = cljs.core.count.call(null,c__8156__auto___46413);
var G__46417 = 0;
seq__46384_46402 = G__46414;
chunk__46385_46403 = G__46415;
count__46386_46404 = G__46416;
i__46387_46405 = G__46417;
continue;
}
} else
{var c_46418 = cljs.core.first.call(null,seq__46384_46412__$1);dommy.attrs.add_class_BANG_.call(null,n,c_46418);
{
var G__46419 = cljs.core.next.call(null,seq__46384_46412__$1);
var G__46420 = null;
var G__46421 = 0;
var G__46422 = 0;
seq__46384_46402 = G__46419;
chunk__46385_46403 = G__46420;
count__46386_46404 = G__46421;
i__46387_46405 = G__46422;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__46383_46401))
{dommy.attrs.add_class_BANG_.call(null,n,v_46400);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_46399,v_46400);
} else
{}
}
}
{
var G__46423 = seq__46378_46394;
var G__46424 = chunk__46379_46395;
var G__46425 = count__46380_46396;
var G__46426 = (i__46381_46397 + 1);
seq__46378_46394 = G__46423;
chunk__46379_46395 = G__46424;
count__46380_46396 = G__46425;
i__46381_46397 = G__46426;
continue;
}
} else
{var temp__4092__auto___46427 = cljs.core.seq.call(null,seq__46378_46394);if(temp__4092__auto___46427)
{var seq__46378_46428__$1 = temp__4092__auto___46427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46378_46428__$1))
{var c__8156__auto___46429 = cljs.core.chunk_first.call(null,seq__46378_46428__$1);{
var G__46430 = cljs.core.chunk_rest.call(null,seq__46378_46428__$1);
var G__46431 = c__8156__auto___46429;
var G__46432 = cljs.core.count.call(null,c__8156__auto___46429);
var G__46433 = 0;
seq__46378_46394 = G__46430;
chunk__46379_46395 = G__46431;
count__46380_46396 = G__46432;
i__46381_46397 = G__46433;
continue;
}
} else
{var vec__46388_46434 = cljs.core.first.call(null,seq__46378_46428__$1);var k_46435 = cljs.core.nth.call(null,vec__46388_46434,0,null);var v_46436 = cljs.core.nth.call(null,vec__46388_46434,1,null);var G__46389_46437 = k_46435;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__46389_46437))
{var seq__46390_46438 = cljs.core.seq.call(null,v_46436);var chunk__46391_46439 = null;var count__46392_46440 = 0;var i__46393_46441 = 0;while(true){
if((i__46393_46441 < count__46392_46440))
{var c_46442 = cljs.core._nth.call(null,chunk__46391_46439,i__46393_46441);dommy.attrs.add_class_BANG_.call(null,n,c_46442);
{
var G__46443 = seq__46390_46438;
var G__46444 = chunk__46391_46439;
var G__46445 = count__46392_46440;
var G__46446 = (i__46393_46441 + 1);
seq__46390_46438 = G__46443;
chunk__46391_46439 = G__46444;
count__46392_46440 = G__46445;
i__46393_46441 = G__46446;
continue;
}
} else
{var temp__4092__auto___46447__$1 = cljs.core.seq.call(null,seq__46390_46438);if(temp__4092__auto___46447__$1)
{var seq__46390_46448__$1 = temp__4092__auto___46447__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46390_46448__$1))
{var c__8156__auto___46449 = cljs.core.chunk_first.call(null,seq__46390_46448__$1);{
var G__46450 = cljs.core.chunk_rest.call(null,seq__46390_46448__$1);
var G__46451 = c__8156__auto___46449;
var G__46452 = cljs.core.count.call(null,c__8156__auto___46449);
var G__46453 = 0;
seq__46390_46438 = G__46450;
chunk__46391_46439 = G__46451;
count__46392_46440 = G__46452;
i__46393_46441 = G__46453;
continue;
}
} else
{var c_46454 = cljs.core.first.call(null,seq__46390_46448__$1);dommy.attrs.add_class_BANG_.call(null,n,c_46454);
{
var G__46455 = cljs.core.next.call(null,seq__46390_46448__$1);
var G__46456 = null;
var G__46457 = 0;
var G__46458 = 0;
seq__46390_46438 = G__46455;
chunk__46391_46439 = G__46456;
count__46392_46440 = G__46457;
i__46393_46441 = G__46458;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__46389_46437))
{dommy.attrs.add_class_BANG_.call(null,n,v_46436);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_46435,v_46436);
} else
{}
}
}
{
var G__46459 = cljs.core.next.call(null,seq__46378_46428__$1);
var G__46460 = null;
var G__46461 = 0;
var G__46462 = 0;
seq__46378_46394 = G__46459;
chunk__46379_46395 = G__46460;
count__46380_46396 = G__46461;
i__46381_46397 = G__46462;
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
}catch (e46463){if((e46463 instanceof ReferenceError))
{var __46464 = e46463;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46463;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__46466 = data;if(G__46466)
{var bit__8058__auto__ = null;if(cljs.core.truth_((function (){var or__7439__auto__ = bit__8058__auto__;if(cljs.core.truth_(or__7439__auto__))
{return or__7439__auto__;
} else
{return G__46466.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__46466.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46466);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__46466);
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
