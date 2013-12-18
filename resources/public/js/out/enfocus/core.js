// Compiled by ClojureScript 0.0-2120
goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('goog.Timer');
goog.require('goog.dom.query');
goog.require('goog.async.Delay');
goog.require('goog.dom.classes');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.async.Delay');
goog.require('goog.dom');
goog.require('enfocus.enlive.syntax');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.Timer');
goog.require('domina.xpath');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('domina');
goog.require('goog.net.XhrIo');
goog.require('goog.style');
goog.require('goog.dom.query');
goog.require('domina.css');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('domina.xpath');
goog.require('domina.css');
enfocus.core.ISelector = (function (){var obj29478 = {};return obj29478;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root,id_mask);
}
});
select = function(this$,root,id_mask){
switch(arguments.length){
case 1:
return select__1.call(this,this$);
case 2:
return select__2.call(this,this$,root);
case 3:
return select__3.call(this,this$,root,id_mask);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$core$IFn$_invoke$arity$1 = select__1;
select.cljs$core$IFn$_invoke$arity$2 = select__2;
select.cljs$core$IFn$_invoke$arity$3 = select__3;
return select;
})()
;
enfocus.core.ITransform = (function (){var obj29480 = {};return obj29480;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes,callback);
}
});
apply_transform = function(this$,nodes,callback){
switch(arguments.length){
case 2:
return apply_transform__2.call(this,this$,nodes);
case 3:
return apply_transform__3.call(this,this$,nodes,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply_transform.cljs$core$IFn$_invoke$arity$2 = apply_transform__2;
apply_transform.cljs$core$IFn$_invoke$arity$3 = apply_transform__3;
return apply_transform;
})()
;
enfocus.core.debug = true;
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__8216__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8216__auto__;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
enfocus.core.setTimeout = (function setTimeout(func,ttime){return goog.Timer.callOnce(func,ttime);
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){return goog.dom.isNodeLike(tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){return (tst instanceof NodeList);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){if((nl === window))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl], null);
} else
{return domina.nodes.call(null,nl);
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__29481_SHARP_){if(typeof p1__29481_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__29481_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__29481_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__29488_29494 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__29489_29495 = null;var count__29490_29496 = 0;var i__29491_29497 = 0;while(true){
if((i__29491_29497 < count__29490_29496))
{var vec__29492_29498 = cljs.core._nth.call(null,chunk__29489_29495,i__29491_29497);var attr_29499 = cljs.core.nth.call(null,vec__29492_29498,0,null);var value_29500 = cljs.core.nth.call(null,vec__29492_29498,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_29499),value_29500);
{
var G__29501 = seq__29488_29494;
var G__29502 = chunk__29489_29495;
var G__29503 = count__29490_29496;
var G__29504 = (i__29491_29497 + 1);
seq__29488_29494 = G__29501;
chunk__29489_29495 = G__29502;
count__29490_29496 = G__29503;
i__29491_29497 = G__29504;
continue;
}
} else
{var temp__4092__auto___29505 = cljs.core.seq.call(null,seq__29488_29494);if(temp__4092__auto___29505)
{var seq__29488_29506__$1 = temp__4092__auto___29505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29488_29506__$1))
{var c__8957__auto___29507 = cljs.core.chunk_first.call(null,seq__29488_29506__$1);{
var G__29508 = cljs.core.chunk_rest.call(null,seq__29488_29506__$1);
var G__29509 = c__8957__auto___29507;
var G__29510 = cljs.core.count.call(null,c__8957__auto___29507);
var G__29511 = 0;
seq__29488_29494 = G__29508;
chunk__29489_29495 = G__29509;
count__29490_29496 = G__29510;
i__29491_29497 = G__29511;
continue;
}
} else
{var vec__29493_29512 = cljs.core.first.call(null,seq__29488_29506__$1);var attr_29513 = cljs.core.nth.call(null,vec__29493_29512,0,null);var value_29514 = cljs.core.nth.call(null,vec__29493_29512,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_29513),value_29514);
{
var G__29515 = cljs.core.next.call(null,seq__29488_29506__$1);
var G__29516 = null;
var G__29517 = 0;
var G__29518 = 0;
seq__29488_29494 = G__29515;
chunk__29489_29495 = G__29516;
count__29490_29496 = G__29517;
i__29491_29497 = G__29518;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
/**
* removes the property value from an elements style obj.
*/
enfocus.core.style_remove = (function style_remove(obj,values){var seq__29523 = cljs.core.seq.call(null,values);var chunk__29524 = null;var count__29525 = 0;var i__29526 = 0;while(true){
if((i__29526 < count__29525))
{var attr = cljs.core._nth.call(null,chunk__29524,i__29526);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__29527 = seq__29523;
var G__29528 = chunk__29524;
var G__29529 = count__29525;
var G__29530 = (i__29526 + 1);
seq__29523 = G__29527;
chunk__29524 = G__29528;
count__29525 = G__29529;
i__29526 = G__29530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29523);if(temp__4092__auto__)
{var seq__29523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29523__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29523__$1);{
var G__29531 = cljs.core.chunk_rest.call(null,seq__29523__$1);
var G__29532 = c__8957__auto__;
var G__29533 = cljs.core.count.call(null,c__8957__auto__);
var G__29534 = 0;
seq__29523 = G__29531;
chunk__29524 = G__29532;
count__29525 = G__29533;
i__29526 = G__29534;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__29523__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__29535 = cljs.core.next.call(null,seq__29523__$1);
var G__29536 = null;
var G__29537 = 0;
var G__29538 = 0;
seq__29523 = G__29535;
chunk__29524 = G__29536;
count__29525 = G__29537;
i__29526 = G__29538;
continue;
}
}
} else
{return null;
}
}
break;
}
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){return [cljs.core.str("__ef_effect_"),cljs.core.str(etype)].join('');
});
enfocus.core.get_mills = (function get_mills(){return (new Date()).getMilliseconds();
});
enfocus.core.pix_round = (function pix_round(step){if((step < 0))
{return Math.floor.call(null,step);
} else
{return Math.ceil.call(null,step);
}
});
enfocus.core.add_map_attrs = (function() {
var add_map_attrs = null;
var add_map_attrs__2 = (function (elem,ats){if(cljs.core.truth_(elem))
{if(cljs.core.map_QMARK_.call(null,ats))
{var seq__29545_29551 = cljs.core.seq.call(null,ats);var chunk__29546_29552 = null;var count__29547_29553 = 0;var i__29548_29554 = 0;while(true){
if((i__29548_29554 < count__29547_29553))
{var vec__29549_29555 = cljs.core._nth.call(null,chunk__29546_29552,i__29548_29554);var k_29556 = cljs.core.nth.call(null,vec__29549_29555,0,null);var v_29557 = cljs.core.nth.call(null,vec__29549_29555,1,null);add_map_attrs.call(null,elem,k_29556,v_29557);
{
var G__29558 = seq__29545_29551;
var G__29559 = chunk__29546_29552;
var G__29560 = count__29547_29553;
var G__29561 = (i__29548_29554 + 1);
seq__29545_29551 = G__29558;
chunk__29546_29552 = G__29559;
count__29547_29553 = G__29560;
i__29548_29554 = G__29561;
continue;
}
} else
{var temp__4092__auto___29562 = cljs.core.seq.call(null,seq__29545_29551);if(temp__4092__auto___29562)
{var seq__29545_29563__$1 = temp__4092__auto___29562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29545_29563__$1))
{var c__8957__auto___29564 = cljs.core.chunk_first.call(null,seq__29545_29563__$1);{
var G__29565 = cljs.core.chunk_rest.call(null,seq__29545_29563__$1);
var G__29566 = c__8957__auto___29564;
var G__29567 = cljs.core.count.call(null,c__8957__auto___29564);
var G__29568 = 0;
seq__29545_29551 = G__29565;
chunk__29546_29552 = G__29566;
count__29547_29553 = G__29567;
i__29548_29554 = G__29568;
continue;
}
} else
{var vec__29550_29569 = cljs.core.first.call(null,seq__29545_29563__$1);var k_29570 = cljs.core.nth.call(null,vec__29550_29569,0,null);var v_29571 = cljs.core.nth.call(null,vec__29550_29569,1,null);add_map_attrs.call(null,elem,k_29570,v_29571);
{
var G__29572 = cljs.core.next.call(null,seq__29545_29563__$1);
var G__29573 = null;
var G__29574 = 0;
var G__29575 = 0;
seq__29545_29551 = G__29572;
chunk__29546_29552 = G__29573;
count__29547_29553 = G__29574;
i__29548_29554 = G__29575;
continue;
}
}
} else
{}
}
break;
}
return elem;
} else
{return null;
}
} else
{return null;
}
});
var add_map_attrs__3 = (function (elem,k,v){elem.setAttribute(cljs.core.name.call(null,k),v);
return elem;
});
add_map_attrs = function(elem,k,v){
switch(arguments.length){
case 2:
return add_map_attrs__2.call(this,elem,k);
case 3:
return add_map_attrs__3.call(this,elem,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_map_attrs.cljs$core$IFn$_invoke$arity$2 = add_map_attrs__2;
add_map_attrs.cljs$core$IFn$_invoke$arity$3 = add_map_attrs__3;
return add_map_attrs;
})()
;
/**
* this is incremented everytime a remote template is loaded and decremented when
* it is added to the dom cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
enfocus.core.hide_style = new cljs.core.PersistentArrayMap(null, 1, ["style","display: none; width: 0px; height: 0px"], null).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this has to be done
* because css selectors do not work unless we have it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){var div = goog.dom.createDom("div",enfocus.core.hide_style);if(cljs.core._EQ_.call(null,child.nodeType,11))
{goog.dom.appendChild(div,child);
} else
{enfocus.core.log_debug.call(null,cljs.core.count.call(null,domina.nodes.call(null,child)));
var seq__29580_29584 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__29581_29585 = null;var count__29582_29586 = 0;var i__29583_29587 = 0;while(true){
if((i__29583_29587 < count__29582_29586))
{var node_29588 = cljs.core._nth.call(null,chunk__29581_29585,i__29583_29587);goog.dom.appendChild(div,node_29588);
{
var G__29589 = seq__29580_29584;
var G__29590 = chunk__29581_29585;
var G__29591 = count__29582_29586;
var G__29592 = (i__29583_29587 + 1);
seq__29580_29584 = G__29589;
chunk__29581_29585 = G__29590;
count__29582_29586 = G__29591;
i__29583_29587 = G__29592;
continue;
}
} else
{var temp__4092__auto___29593 = cljs.core.seq.call(null,seq__29580_29584);if(temp__4092__auto___29593)
{var seq__29580_29594__$1 = temp__4092__auto___29593;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29580_29594__$1))
{var c__8957__auto___29595 = cljs.core.chunk_first.call(null,seq__29580_29594__$1);{
var G__29596 = cljs.core.chunk_rest.call(null,seq__29580_29594__$1);
var G__29597 = c__8957__auto___29595;
var G__29598 = cljs.core.count.call(null,c__8957__auto___29595);
var G__29599 = 0;
seq__29580_29584 = G__29596;
chunk__29581_29585 = G__29597;
count__29582_29586 = G__29598;
i__29583_29587 = G__29599;
continue;
}
} else
{var node_29600 = cljs.core.first.call(null,seq__29580_29594__$1);goog.dom.appendChild(div,node_29600);
{
var G__29601 = cljs.core.next.call(null,seq__29580_29594__$1);
var G__29602 = null;
var G__29603 = 0;
var G__29604 = 0;
seq__29580_29584 = G__29601;
chunk__29581_29585 = G__29602;
count__29582_29586 = G__29603;
i__29583_29587 = G__29604;
continue;
}
}
} else
{}
}
break;
}
}
goog.dom.appendChild(goog.dom.getDocument().documentElement,div);
return div;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){var child = div.childNodes;var frag = document.createDocumentFragment();goog.dom.append(frag,child);
goog.dom.removeNode(div);
return frag;
});
/**
* replaces all the ids in a string html fragement/template with a generated
* symbol appended on to a existing id this is done to make sure we don't have
* id colisions during the transformation process
*/
enfocus.core.replace_ids = (function() {
var replace_ids = null;
var replace_ids__1 = (function (text){return replace_ids.call(null,[cljs.core.str(cljs.core.name.call(null,cljs.core.gensym.call(null,"id"))),cljs.core.str("_")].join(''),text);
});
var replace_ids__2 = (function (id_mask,text){var re = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_mask,text.replace(re,(function (a,b,c,d){return [cljs.core.str(b),cljs.core.str(id_mask),cljs.core.str(c),cljs.core.str(d)].join('');
}))], null);
});
replace_ids = function(id_mask,text){
switch(arguments.length){
case 1:
return replace_ids__1.call(this,id_mask);
case 2:
return replace_ids__2.call(this,id_mask,text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_ids.cljs$core$IFn$_invoke$arity$1 = replace_ids__1;
replace_ids.cljs$core$IFn$_invoke$arity$2 = replace_ids__2;
return replace_ids;
})()
;
/**
* before adding the dom back into the live dom we reset the masked ids to orig vals
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29605_SHARP_){var id = p1__29605_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__29605_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__29607 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__29607,0,null);var txt = cljs.core.nth.call(null,vec__29607,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
});})(req))
;goog.events.listen(req,goog.net.EventType.COMPLETE,(function (){callback.call(null,req);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.html_to_dom = (function html_to_dom(html){var dfa = enfocus.core.nodes__GT_coll.call(null,domina.html_to_dom.call(null,html));var frag = document.createDocumentFragment();enfocus.core.log_debug.call(null,cljs.core.count.call(null,dfa));
var seq__29612_29616 = cljs.core.seq.call(null,dfa);var chunk__29613_29617 = null;var count__29614_29618 = 0;var i__29615_29619 = 0;while(true){
if((i__29615_29619 < count__29614_29618))
{var df_29620 = cljs.core._nth.call(null,chunk__29613_29617,i__29615_29619);goog.dom.append(frag,df_29620);
{
var G__29621 = seq__29612_29616;
var G__29622 = chunk__29613_29617;
var G__29623 = count__29614_29618;
var G__29624 = (i__29615_29619 + 1);
seq__29612_29616 = G__29621;
chunk__29613_29617 = G__29622;
count__29614_29618 = G__29623;
i__29615_29619 = G__29624;
continue;
}
} else
{var temp__4092__auto___29625 = cljs.core.seq.call(null,seq__29612_29616);if(temp__4092__auto___29625)
{var seq__29612_29626__$1 = temp__4092__auto___29625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29612_29626__$1))
{var c__8957__auto___29627 = cljs.core.chunk_first.call(null,seq__29612_29626__$1);{
var G__29628 = cljs.core.chunk_rest.call(null,seq__29612_29626__$1);
var G__29629 = c__8957__auto___29627;
var G__29630 = cljs.core.count.call(null,c__8957__auto___29627);
var G__29631 = 0;
seq__29612_29616 = G__29628;
chunk__29613_29617 = G__29629;
count__29614_29618 = G__29630;
i__29615_29619 = G__29631;
continue;
}
} else
{var df_29632 = cljs.core.first.call(null,seq__29612_29626__$1);goog.dom.append(frag,df_29632);
{
var G__29633 = cljs.core.next.call(null,seq__29612_29626__$1);
var G__29634 = null;
var G__29635 = 0;
var G__29636 = 0;
seq__29612_29616 = G__29633;
chunk__29613_29617 = G__29634;
count__29614_29618 = G__29635;
i__29615_29619 = G__29636;
continue;
}
}
} else
{}
}
break;
}
return frag;
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){var nod = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);if(cljs.core.truth_(nod))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nod),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,nod))], null);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){var sel_str = enfocus.core.create_sel_str.call(null,sel);var cache = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''));if(cljs.core.truth_(cache))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cache),enfocus.core.html_to_dom.call(null,cljs.core.second.call(null,cache))], null);
} else
{var vec__29639 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__29639,0,null);var tdom = cljs.core.nth.call(null,vec__29639,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29639,sym,tdom,dom,tsnip){
return (function (p1__29637_SHARP_){return p1__29637_SHARP_.outerHTML;
});})(vec__29639,sym,tdom,dom,tsnip))
,tsnip));enfocus.core.remove_node_return_child.call(null,dom);
cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,[cljs.core.str(uri),cljs.core.str(sel_str)].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,html_snip], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,enfocus.core.html_to_dom.call(null,html_snip)], null);
}
});
/**
* wrapper function for extractors that maps the extraction to all nodes returned by the selector
*/
enfocus.core.extr_multi_node = (function extr_multi_node(func){var trans = (function trans(pnodes){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var result = cljs.core.map.call(null,func,pnod_col);if((cljs.core.count.call(null,result) <= 1))
{return cljs.core.first.call(null,result);
} else
{return result;
}
});if(typeof enfocus.core.t29643 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29643 = (function (trans,func,extr_multi_node,meta29644){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta29644 = meta29644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29643.cljs$lang$type = true;
enfocus.core.t29643.cljs$lang$ctorStr = "enfocus.core/t29643";
enfocus.core.t29643.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t29643");
});
enfocus.core.t29643.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29643.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29643.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29645){var self__ = this;
var _29645__$1 = this;return self__.meta29644;
});
enfocus.core.t29643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29645,meta29644__$1){var self__ = this;
var _29645__$1 = this;return (new enfocus.core.t29643(self__.trans,self__.func,self__.extr_multi_node,meta29644__$1));
});
enfocus.core.__GT_t29643 = (function __GT_t29643(trans__$1,func__$1,extr_multi_node__$1,meta29644){return (new enfocus.core.t29643(trans__$1,func__$1,extr_multi_node__$1,meta29644));
});
}
return (new enfocus.core.t29643(trans,func,extr_multi_node,null));
});
/**
* Allows standard domina functions to be chainable
*/
enfocus.core.multi_node_chain = (function() {
var multi_node_chain = null;
var multi_node_chain__1 = (function (func){var trans = (function (nodes,chain){var val = func.call(null,nodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t29653 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29653 = (function (trans,func,multi_node_chain,meta29654){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta29654 = meta29654;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29653.cljs$lang$type = true;
enfocus.core.t29653.cljs$lang$ctorStr = "enfocus.core/t29653";
enfocus.core.t29653.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t29653");
});
enfocus.core.t29653.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29653.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29653.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29655){var self__ = this;
var _29655__$1 = this;return self__.meta29654;
});
enfocus.core.t29653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29655,meta29654__$1){var self__ = this;
var _29655__$1 = this;return (new enfocus.core.t29653(self__.trans,self__.func,self__.multi_node_chain,meta29654__$1));
});
enfocus.core.__GT_t29653 = (function __GT_t29653(trans__$1,func__$1,multi_node_chain__$1,meta29654){return (new enfocus.core.t29653(trans__$1,func__$1,multi_node_chain__$1,meta29654));
});
}
return (new enfocus.core.t29653(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__29646_SHARP_){return domina.nodes.call(null,p1__29646_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t29656 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29656 = (function (trans,func,values,multi_node_chain,meta29657){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta29657 = meta29657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29656.cljs$lang$type = true;
enfocus.core.t29656.cljs$lang$ctorStr = "enfocus.core/t29656";
enfocus.core.t29656.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t29656");
});
enfocus.core.t29656.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29656.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29656.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29658){var self__ = this;
var _29658__$1 = this;return self__.meta29657;
});
enfocus.core.t29656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29658,meta29657__$1){var self__ = this;
var _29658__$1 = this;return (new enfocus.core.t29656(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta29657__$1));
});
enfocus.core.__GT_t29656 = (function __GT_t29656(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta29657){return (new enfocus.core.t29656(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta29657));
});
}
return (new enfocus.core.t29656(trans,func,values,multi_node_chain,null));
});
multi_node_chain = function(values,func){
switch(arguments.length){
case 1:
return multi_node_chain__1.call(this,values);
case 2:
return multi_node_chain__2.call(this,values,func);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
multi_node_chain.cljs$core$IFn$_invoke$arity$1 = multi_node_chain__1;
multi_node_chain.cljs$core$IFn$_invoke$arity$2 = multi_node_chain__2;
return multi_node_chain;
})()
;
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29659_SHARP_,p2__29660_SHARP_){domina.destroy_children_BANG_.call(null,p1__29659_SHARP_);
return domina.append_BANG_.call(null,p1__29659_SHARP_,p2__29660_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__29661){
var values = cljs.core.seq(arglist__29661);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__29662_SHARP_){return domina.set_html_BANG_.call(null,p1__29662_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__29663_SHARP_){var seq__29670 = cljs.core.seq.call(null,pairs);var chunk__29671 = null;var count__29672 = 0;var i__29673 = 0;while(true){
if((i__29673 < count__29672))
{var vec__29674 = cljs.core._nth.call(null,chunk__29671,i__29673);var name = cljs.core.nth.call(null,vec__29674,0,null);var value = cljs.core.nth.call(null,vec__29674,1,null);domina.set_attr_BANG_.call(null,p1__29663_SHARP_,name,value);
{
var G__29676 = seq__29670;
var G__29677 = chunk__29671;
var G__29678 = count__29672;
var G__29679 = (i__29673 + 1);
seq__29670 = G__29676;
chunk__29671 = G__29677;
count__29672 = G__29678;
i__29673 = G__29679;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29670);if(temp__4092__auto__)
{var seq__29670__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29670__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29670__$1);{
var G__29680 = cljs.core.chunk_rest.call(null,seq__29670__$1);
var G__29681 = c__8957__auto__;
var G__29682 = cljs.core.count.call(null,c__8957__auto__);
var G__29683 = 0;
seq__29670 = G__29680;
chunk__29671 = G__29681;
count__29672 = G__29682;
i__29673 = G__29683;
continue;
}
} else
{var vec__29675 = cljs.core.first.call(null,seq__29670__$1);var name = cljs.core.nth.call(null,vec__29675,0,null);var value = cljs.core.nth.call(null,vec__29675,1,null);domina.set_attr_BANG_.call(null,p1__29663_SHARP_,name,value);
{
var G__29684 = cljs.core.next.call(null,seq__29670__$1);
var G__29685 = null;
var G__29686 = 0;
var G__29687 = 0;
seq__29670 = G__29684;
chunk__29671 = G__29685;
count__29672 = G__29686;
i__29673 = G__29687;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_attr__delegate.call(this,values);};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__29688){
var values = cljs.core.seq(arglist__29688);
return set_attr__delegate(values);
});
set_attr.cljs$core$IFn$_invoke$arity$variadic = set_attr__delegate;
return set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29689_SHARP_){var seq__29694 = cljs.core.seq.call(null,values);var chunk__29695 = null;var count__29696 = 0;var i__29697 = 0;while(true){
if((i__29697 < count__29696))
{var name = cljs.core._nth.call(null,chunk__29695,i__29697);domina.remove_attr_BANG_.call(null,p1__29689_SHARP_,name);
{
var G__29698 = seq__29694;
var G__29699 = chunk__29695;
var G__29700 = count__29696;
var G__29701 = (i__29697 + 1);
seq__29694 = G__29698;
chunk__29695 = G__29699;
count__29696 = G__29700;
i__29697 = G__29701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29694);if(temp__4092__auto__)
{var seq__29694__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29694__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29694__$1);{
var G__29702 = cljs.core.chunk_rest.call(null,seq__29694__$1);
var G__29703 = c__8957__auto__;
var G__29704 = cljs.core.count.call(null,c__8957__auto__);
var G__29705 = 0;
seq__29694 = G__29702;
chunk__29695 = G__29703;
count__29696 = G__29704;
i__29697 = G__29705;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__29694__$1);domina.remove_attr_BANG_.call(null,p1__29689_SHARP_,name);
{
var G__29706 = cljs.core.next.call(null,seq__29694__$1);
var G__29707 = null;
var G__29708 = 0;
var G__29709 = 0;
seq__29694 = G__29706;
chunk__29695 = G__29707;
count__29696 = G__29708;
i__29697 = G__29709;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_attr = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_attr__delegate.call(this,values);};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__29710){
var values = cljs.core.seq(arglist__29710);
return remove_attr__delegate(values);
});
remove_attr.cljs$core$IFn$_invoke$arity$variadic = remove_attr__delegate;
return remove_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_prop = (function() { 
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__29713){var vec__29714 = p__29713;var n = cljs.core.nth.call(null,vec__29714,0,null);var v = cljs.core.nth.call(null,vec__29714,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__29715){
var forms = cljs.core.seq(arglist__29715);
return set_prop__delegate(forms);
});
set_prop.cljs$core$IFn$_invoke$arity$variadic = set_prop__delegate;
return set_prop;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){return goog.dom.classes.hasClass(el,cls);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29716_SHARP_){var seq__29721 = cljs.core.seq.call(null,values);var chunk__29722 = null;var count__29723 = 0;var i__29724 = 0;while(true){
if((i__29724 < count__29723))
{var val = cljs.core._nth.call(null,chunk__29722,i__29724);domina.add_class_BANG_.call(null,p1__29716_SHARP_,val);
{
var G__29725 = seq__29721;
var G__29726 = chunk__29722;
var G__29727 = count__29723;
var G__29728 = (i__29724 + 1);
seq__29721 = G__29725;
chunk__29722 = G__29726;
count__29723 = G__29727;
i__29724 = G__29728;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29721);if(temp__4092__auto__)
{var seq__29721__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29721__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29721__$1);{
var G__29729 = cljs.core.chunk_rest.call(null,seq__29721__$1);
var G__29730 = c__8957__auto__;
var G__29731 = cljs.core.count.call(null,c__8957__auto__);
var G__29732 = 0;
seq__29721 = G__29729;
chunk__29722 = G__29730;
count__29723 = G__29731;
i__29724 = G__29732;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__29721__$1);domina.add_class_BANG_.call(null,p1__29716_SHARP_,val);
{
var G__29733 = cljs.core.next.call(null,seq__29721__$1);
var G__29734 = null;
var G__29735 = 0;
var G__29736 = 0;
seq__29721 = G__29733;
chunk__29722 = G__29734;
count__29723 = G__29735;
i__29724 = G__29736;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var add_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return add_class__delegate.call(this,values);};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__29737){
var values = cljs.core.seq(arglist__29737);
return add_class__delegate(values);
});
add_class.cljs$core$IFn$_invoke$arity$variadic = add_class__delegate;
return add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29738_SHARP_){var seq__29743 = cljs.core.seq.call(null,values);var chunk__29744 = null;var count__29745 = 0;var i__29746 = 0;while(true){
if((i__29746 < count__29745))
{var val = cljs.core._nth.call(null,chunk__29744,i__29746);domina.remove_class_BANG_.call(null,p1__29738_SHARP_,val);
{
var G__29747 = seq__29743;
var G__29748 = chunk__29744;
var G__29749 = count__29745;
var G__29750 = (i__29746 + 1);
seq__29743 = G__29747;
chunk__29744 = G__29748;
count__29745 = G__29749;
i__29746 = G__29750;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29743);if(temp__4092__auto__)
{var seq__29743__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29743__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29743__$1);{
var G__29751 = cljs.core.chunk_rest.call(null,seq__29743__$1);
var G__29752 = c__8957__auto__;
var G__29753 = cljs.core.count.call(null,c__8957__auto__);
var G__29754 = 0;
seq__29743 = G__29751;
chunk__29744 = G__29752;
count__29745 = G__29753;
i__29746 = G__29754;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__29743__$1);domina.remove_class_BANG_.call(null,p1__29738_SHARP_,val);
{
var G__29755 = cljs.core.next.call(null,seq__29743__$1);
var G__29756 = null;
var G__29757 = 0;
var G__29758 = 0;
seq__29743 = G__29755;
chunk__29744 = G__29756;
count__29745 = G__29757;
i__29746 = G__29758;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var remove_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_class__delegate.call(this,values);};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__29759){
var values = cljs.core.seq(arglist__29759);
return remove_class__delegate(values);
});
remove_class.cljs$core$IFn$_invoke$arity$variadic = remove_class__delegate;
return remove_class;
})()
;
/**
* Sets the specified classes on the selected element
* @param {...*} var_args
*/
enfocus.core.set_class = (function() { 
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29760_SHARP_){return domina.set_classes_BANG_.call(null,p1__29760_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__29761){
var values = cljs.core.seq(arglist__29761);
return set_class__delegate(values);
});
set_class.cljs$core$IFn$_invoke$arity$variadic = set_class__delegate;
return set_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){return (function (pnod){var seq__29766 = cljs.core.seq.call(null,forms);var chunk__29767 = null;var count__29768 = 0;var i__29769 = 0;while(true){
if((i__29769 < count__29768))
{var fun = cljs.core._nth.call(null,chunk__29767,i__29769);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__29770 = seq__29766;
var G__29771 = chunk__29767;
var G__29772 = count__29768;
var G__29773 = (i__29769 + 1);
seq__29766 = G__29770;
chunk__29767 = G__29771;
count__29768 = G__29772;
i__29769 = G__29773;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29766);if(temp__4092__auto__)
{var seq__29766__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29766__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29766__$1);{
var G__29774 = cljs.core.chunk_rest.call(null,seq__29766__$1);
var G__29775 = c__8957__auto__;
var G__29776 = cljs.core.count.call(null,c__8957__auto__);
var G__29777 = 0;
seq__29766 = G__29774;
chunk__29767 = G__29775;
count__29768 = G__29776;
i__29769 = G__29777;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__29766__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__29778 = cljs.core.next.call(null,seq__29766__$1);
var G__29779 = null;
var G__29780 = 0;
var G__29781 = 0;
seq__29766 = G__29778;
chunk__29767 = G__29779;
count__29768 = G__29780;
i__29769 = G__29781;
continue;
}
}
} else
{return null;
}
}
break;
}
});
};
var do__GT_ = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return do__GT___delegate.call(this,forms);};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__29782){
var forms = cljs.core.seq(arglist__29782);
return do__GT___delegate(forms);
});
do__GT_.cljs$core$IFn$_invoke$arity$variadic = do__GT___delegate;
return do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.append = (function() { 
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29783_SHARP_,p2__29784_SHARP_){return domina.append_BANG_.call(null,p1__29783_SHARP_,p2__29784_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__29785){
var values = cljs.core.seq(arglist__29785);
return append__delegate(values);
});
append.cljs$core$IFn$_invoke$arity$variadic = append__delegate;
return append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.prepend = (function() { 
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29786_SHARP_,p2__29787_SHARP_){return domina.prepend_BANG_.call(null,p1__29786_SHARP_,p2__29787_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__29788){
var values = cljs.core.seq(arglist__29788);
return prepend__delegate(values);
});
prepend.cljs$core$IFn$_invoke$arity$variadic = prepend__delegate;
return prepend;
})()
;
/**
* inserts the content before the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.before = (function() { 
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29789_SHARP_,p2__29790_SHARP_){return domina.insert_before_BANG_.call(null,p1__29789_SHARP_,p2__29790_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__29791){
var values = cljs.core.seq(arglist__29791);
return before__delegate(values);
});
before.cljs$core$IFn$_invoke$arity$variadic = before__delegate;
return before;
})()
;
/**
* inserts the content after the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.after = (function() { 
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29792_SHARP_,p2__29793_SHARP_){return domina.insert_after_BANG_.call(null,p1__29792_SHARP_,p2__29793_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__29794){
var values = cljs.core.seq(arglist__29794);
return after__delegate(values);
});
after.cljs$core$IFn$_invoke$arity$variadic = after__delegate;
return after;
})()
;
/**
* substitutes the content for the selected node. Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.substitute = (function() { 
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29795_SHARP_,p2__29796_SHARP_){return domina.swap_content_BANG_.call(null,p1__29795_SHARP_,p2__29796_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__29797){
var values = cljs.core.seq(arglist__29797);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__29798_SHARP_){return domina.detach_BANG_.call(null,p1__29798_SHARP_);
}));
});
/**
* wrap and element in a new element defined as :div {:class 'temp'}
*/
enfocus.core.wrap = (function wrap(elm,mattr){return (function (pnod){var elem = goog.dom.createElement(cljs.core.name.call(null,elm));enfocus.core.add_map_attrs.call(null,elem,mattr);
enfocus.core.at.call(null,elem,enfocus.core.content.call(null,pnod.cloneNode(true)));
return enfocus.core.at.call(null,pnod,enfocus.core.do__GT_.call(null,enfocus.core.after.call(null,elem),enfocus.core.remove_node.call(null)));
});
});
/**
* replaces a node with all its children
*/
enfocus.core.unwrap = (function unwrap(){return (function (pnod){var frag = document.createDocumentFragment();goog.dom.append(frag,pnod.childNodes);
return goog.dom.replaceNode(frag,pnod);
});
});
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.set_style = (function() { 
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__29799_SHARP_){var seq__29806 = cljs.core.seq.call(null,pairs);var chunk__29807 = null;var count__29808 = 0;var i__29809 = 0;while(true){
if((i__29809 < count__29808))
{var vec__29810 = cljs.core._nth.call(null,chunk__29807,i__29809);var name = cljs.core.nth.call(null,vec__29810,0,null);var value = cljs.core.nth.call(null,vec__29810,1,null);domina.set_style_BANG_.call(null,p1__29799_SHARP_,name,value);
{
var G__29812 = seq__29806;
var G__29813 = chunk__29807;
var G__29814 = count__29808;
var G__29815 = (i__29809 + 1);
seq__29806 = G__29812;
chunk__29807 = G__29813;
count__29808 = G__29814;
i__29809 = G__29815;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29806);if(temp__4092__auto__)
{var seq__29806__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29806__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29806__$1);{
var G__29816 = cljs.core.chunk_rest.call(null,seq__29806__$1);
var G__29817 = c__8957__auto__;
var G__29818 = cljs.core.count.call(null,c__8957__auto__);
var G__29819 = 0;
seq__29806 = G__29816;
chunk__29807 = G__29817;
count__29808 = G__29818;
i__29809 = G__29819;
continue;
}
} else
{var vec__29811 = cljs.core.first.call(null,seq__29806__$1);var name = cljs.core.nth.call(null,vec__29811,0,null);var value = cljs.core.nth.call(null,vec__29811,1,null);domina.set_style_BANG_.call(null,p1__29799_SHARP_,name,value);
{
var G__29820 = cljs.core.next.call(null,seq__29806__$1);
var G__29821 = null;
var G__29822 = 0;
var G__29823 = 0;
seq__29806 = G__29820;
chunk__29807 = G__29821;
count__29808 = G__29822;
i__29809 = G__29823;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
};
var set_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_style__delegate.call(this,values);};
set_style.cljs$lang$maxFixedArity = 0;
set_style.cljs$lang$applyTo = (function (arglist__29824){
var values = cljs.core.seq(arglist__29824);
return set_style__delegate(values);
});
set_style.cljs$core$IFn$_invoke$arity$variadic = set_style__delegate;
return set_style;
})()
;
/**
* remove a list style elements from the selected nodes. note: you can only remove styles that are inline
* @param {...*} var_args
*/
enfocus.core.remove_style = (function() { 
var remove_style__delegate = function (values){return (function (pnod){return enfocus.core.style_remove.call(null,pnod,values);
});
};
var remove_style = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return remove_style__delegate.call(this,values);};
remove_style.cljs$lang$maxFixedArity = 0;
remove_style.cljs$lang$applyTo = (function (arglist__29825){
var values = cljs.core.seq(arglist__29825);
return remove_style__delegate(values);
});
remove_style.cljs$core$IFn$_invoke$arity$variadic = remove_style__delegate;
return remove_style;
})()
;
/**
* calls the focus function on the selected node
*/
enfocus.core.focus = (function focus(){return (function (node){return node.focus();
});
});
/**
* calls the blur function on the selected node
*/
enfocus.core.blur = (function blur(){return (function (node){return node.blur();
});
});
/**
* addes key value pair of data to the selected nodes. Only use clojure data structures when setting
*/
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__29826_SHARP_){return domina.set_data_BANG_.call(null,p1__29826_SHARP_,ky,val);
}));
});
/**
* delays and action by a set timeout, note this is an async operations
* @param {...*} var_args
*/
enfocus.core.delay = (function() { 
var delay__delegate = function (ttime,funcs){return (function (pnod){return enfocus.core.setTimeout.call(null,(function (){return cljs.core.apply.call(null,enfocus.core.at,pnod,funcs);
}),ttime);
});
};
var delay = function (ttime,var_args){
var funcs = null;if (arguments.length > 1) {
  funcs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delay__delegate.call(this,ttime,funcs);};
delay.cljs$lang$maxFixedArity = 1;
delay.cljs$lang$applyTo = (function (arglist__29827){
var ttime = cljs.core.first(arglist__29827);
var funcs = cljs.core.rest(arglist__29827);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__29829_SHARP_,p2__29828_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__29828_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__29854_29862 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__29855_29863 = null;var count__29856_29864 = 0;var i__29857_29865 = 0;while(true){
if((i__29857_29865 < count__29856_29864))
{var idx_29866 = cljs.core._nth.call(null,chunk__29855_29863,i__29857_29865);var attr_29867 = pnod.attributes.item(idx_29866);if(cljs.core.truth_(attr_29867.specified))
{attr_29867.value = rep_str.call(null,attr_29867.value);
} else
{}
{
var G__29868 = seq__29854_29862;
var G__29869 = chunk__29855_29863;
var G__29870 = count__29856_29864;
var G__29871 = (i__29857_29865 + 1);
seq__29854_29862 = G__29868;
chunk__29855_29863 = G__29869;
count__29856_29864 = G__29870;
i__29857_29865 = G__29871;
continue;
}
} else
{var temp__4092__auto___29872 = cljs.core.seq.call(null,seq__29854_29862);if(temp__4092__auto___29872)
{var seq__29854_29873__$1 = temp__4092__auto___29872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29854_29873__$1))
{var c__8957__auto___29874 = cljs.core.chunk_first.call(null,seq__29854_29873__$1);{
var G__29875 = cljs.core.chunk_rest.call(null,seq__29854_29873__$1);
var G__29876 = c__8957__auto___29874;
var G__29877 = cljs.core.count.call(null,c__8957__auto___29874);
var G__29878 = 0;
seq__29854_29862 = G__29875;
chunk__29855_29863 = G__29876;
count__29856_29864 = G__29877;
i__29857_29865 = G__29878;
continue;
}
} else
{var idx_29879 = cljs.core.first.call(null,seq__29854_29873__$1);var attr_29880 = pnod.attributes.item(idx_29879);if(cljs.core.truth_(attr_29880.specified))
{attr_29880.value = rep_str.call(null,attr_29880.value);
} else
{}
{
var G__29881 = cljs.core.next.call(null,seq__29854_29873__$1);
var G__29882 = null;
var G__29883 = 0;
var G__29884 = 0;
seq__29854_29862 = G__29881;
chunk__29855_29863 = G__29882;
count__29856_29864 = G__29883;
i__29857_29865 = G__29884;
continue;
}
}
} else
{}
}
break;
}
} else
{}
if(cljs.core._EQ_.call(null,pnod.nodeType,3))
{return pnod.nodeValue = rep_str.call(null,pnod.nodeValue);
} else
{var seq__29858 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__29859 = null;var count__29860 = 0;var i__29861 = 0;while(true){
if((i__29861 < count__29860))
{var cnode = cljs.core._nth.call(null,chunk__29859,i__29861);rep_node.call(null,cnode);
{
var G__29885 = seq__29858;
var G__29886 = chunk__29859;
var G__29887 = count__29860;
var G__29888 = (i__29861 + 1);
seq__29858 = G__29885;
chunk__29859 = G__29886;
count__29860 = G__29887;
i__29861 = G__29888;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29858);if(temp__4092__auto__)
{var seq__29858__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29858__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29858__$1);{
var G__29889 = cljs.core.chunk_rest.call(null,seq__29858__$1);
var G__29890 = c__8957__auto__;
var G__29891 = cljs.core.count.call(null,c__8957__auto__);
var G__29892 = 0;
seq__29858 = G__29889;
chunk__29859 = G__29890;
count__29860 = G__29891;
i__29861 = G__29892;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__29858__$1);rep_node.call(null,cnode);
{
var G__29893 = cljs.core.next.call(null,seq__29858__$1);
var G__29894 = null;
var G__29895 = 0;
var G__29896 = 0;
seq__29858 = G__29893;
chunk__29859 = G__29894;
count__29860 = G__29895;
i__29861 = G__29896;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
});
/**
* takes clojure data structure and emits a document element
*/
enfocus.core.html = (function html(node_spec){if(typeof node_spec === 'string')
{return document.createTextNode(node_spec);
} else
{if(cljs.core.vector_QMARK_.call(null,node_spec))
{var vec__29906 = node_spec;var tag = cljs.core.nth.call(null,vec__29906,0,null);var vec__29907 = cljs.core.nthnext.call(null,vec__29906,1);var m = cljs.core.nth.call(null,vec__29907,0,null);var ms = cljs.core.nthnext.call(null,vec__29907,1);var more = vec__29907;var vec__29908 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__29908,0,null);var segments = cljs.core.nthnext.call(null,vec__29908,1);var id = cljs.core.some.call(null,((function (vec__29906,tag,vec__29907,m,ms,more,vec__29908,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__29906,tag,vec__29907,m,ms,more,vec__29908,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__29906,tag,vec__29907,m,ms,more,vec__29908,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__29906,tag,vec__29907,m,ms,more,vec__29908,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__29909_29915 = cljs.core.seq.call(null,attrs__$2);var chunk__29910_29916 = null;var count__29911_29917 = 0;var i__29912_29918 = 0;while(true){
if((i__29912_29918 < count__29911_29917))
{var vec__29913_29919 = cljs.core._nth.call(null,chunk__29910_29916,i__29912_29918);var key_29920 = cljs.core.nth.call(null,vec__29913_29919,0,null);var val_29921 = cljs.core.nth.call(null,vec__29913_29919,1,null);node.setAttribute(cljs.core.name.call(null,key_29920),val_29921);
{
var G__29922 = seq__29909_29915;
var G__29923 = chunk__29910_29916;
var G__29924 = count__29911_29917;
var G__29925 = (i__29912_29918 + 1);
seq__29909_29915 = G__29922;
chunk__29910_29916 = G__29923;
count__29911_29917 = G__29924;
i__29912_29918 = G__29925;
continue;
}
} else
{var temp__4092__auto___29926 = cljs.core.seq.call(null,seq__29909_29915);if(temp__4092__auto___29926)
{var seq__29909_29927__$1 = temp__4092__auto___29926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29909_29927__$1))
{var c__8957__auto___29928 = cljs.core.chunk_first.call(null,seq__29909_29927__$1);{
var G__29929 = cljs.core.chunk_rest.call(null,seq__29909_29927__$1);
var G__29930 = c__8957__auto___29928;
var G__29931 = cljs.core.count.call(null,c__8957__auto___29928);
var G__29932 = 0;
seq__29909_29915 = G__29929;
chunk__29910_29916 = G__29930;
count__29911_29917 = G__29931;
i__29912_29918 = G__29932;
continue;
}
} else
{var vec__29914_29933 = cljs.core.first.call(null,seq__29909_29927__$1);var key_29934 = cljs.core.nth.call(null,vec__29914_29933,0,null);var val_29935 = cljs.core.nth.call(null,vec__29914_29933,1,null);node.setAttribute(cljs.core.name.call(null,key_29934),val_29935);
{
var G__29936 = cljs.core.next.call(null,seq__29909_29927__$1);
var G__29937 = null;
var G__29938 = 0;
var G__29939 = 0;
seq__29909_29915 = G__29936;
chunk__29910_29916 = G__29937;
count__29911_29917 = G__29938;
i__29912_29918 = G__29939;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(content))
{return domina.append_BANG_.call(null,node,content);
} else
{return null;
}
} else
{if(cljs.core.sequential_QMARK_.call(null,node_spec))
{return cljs.core.flatten.call(null,cljs.core.map.call(null,html,node_spec));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return document.createTextNode([cljs.core.str(node_spec)].join(''));
} else
{return null;
}
}
}
}
});
/**
* returns the attribute on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_attr = (function get_attr(attr){return enfocus.core.extr_multi_node.call(null,(function (pnod){return pnod.getAttribute(cljs.core.name.call(null,attr));
}));
});
/**
* returns the text value of the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_text = (function get_text(){return enfocus.core.extr_multi_node.call(null,(function (pnod){return goog.dom.getTextContent(pnod);
}));
});
/**
* returns the data on a selected node for a given key. If bubble is set will look at parent
*/
enfocus.core.get_data = (function() {
var get_data = null;
var get_data__1 = (function (ky){return get_data.call(null,ky,false);
});
var get_data__2 = (function (ky,bubble){return enfocus.core.extr_multi_node.call(null,(function (node){return domina.get_data.call(null,node,ky,bubble);
}));
});
get_data = function(ky,bubble){
switch(arguments.length){
case 1:
return get_data__1.call(this,ky);
case 2:
return get_data__2.call(this,ky,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$1 = get_data__1;
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
return get_data;
})()
;
/**
* returns the property on the selected element or elements.
* in cases where more than one element is selected you will
* receive a list of values
*/
enfocus.core.get_prop = (function get_prop(prop){return enfocus.core.extr_multi_node.call(null,(function (pnod){return (pnod[cljs.core.name.call(null,prop)]);
}));
});
/**
* this function takes a map, key and value.  It will check if
* the value exists and create a seq of values if one exits.
*/
enfocus.core.merge_form_val = (function merge_form_val(form_map,ky,val){var mval = form_map.call(null,ky);if(cljs.core.coll_QMARK_.call(null,mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core.conj.call(null,mval,val));
} else
{if(cljs.core.truth_(mval))
{return cljs.core.assoc.call(null,form_map,ky,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,mval),val));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.assoc.call(null,form_map,ky,val);
} else
{return null;
}
}
}
});
enfocus.core.read_simple_input = (function read_simple_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__8216__auto__ = el.checked;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__8216__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__29940_SHARP_){return p1__29940_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__29941_SHARP_){return p1__29941_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__29943_SHARP_,p2__29942_SHARP_){var G__29946 = p2__29942_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__29946))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__29946))
{return enfocus.core.read_select_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__29946))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__29946))
{var G__29947 = p2__29942_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__29947))
{return enfocus.core.read_checked_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__29947))
{return enfocus.core.read_checked_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__29947))
{return enfocus.core.read_simple_input.call(null,p2__29942_SHARP_,p1__29943_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__29943_SHARP_;
} else
{return null;
}
}
}
}
}
}
}
}
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__29943_SHARP_;
} else
{return null;
}
}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,inputs);
}));
});
enfocus.core.reg_filt = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* filter allows you to apply function to futhur scope down what is returned by a selector
*/
enfocus.core.filter = (function filter(tst,trans){return enfocus.core.multi_node_chain.call(null,(function() {
var filt = null;
var filt__1 = (function (pnodes){return filt.call(null,pnodes,null);
});
var filt__2 = (function (pnodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,pnodes);var ttest = (((tst instanceof cljs.core.Keyword))?cljs.core.deref.call(null,enfocus.core.reg_filt).call(null,tst):tst);var res = cljs.core.filter.call(null,ttest,pnod_col);if((chain == null))
{return enfocus.core.apply_transform.call(null,trans,res);
} else
{return enfocus.core.apply_transform.call(null,trans,res,chain);
}
});
filt = function(pnodes,chain){
switch(arguments.length){
case 1:
return filt__1.call(this,pnodes);
case 2:
return filt__2.call(this,pnodes,chain);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filt.cljs$core$IFn$_invoke$arity$1 = filt__1;
filt.cljs$core$IFn$_invoke$arity$2 = filt__2;
return filt;
})()
);
});
/**
* registers a filter for a given keyword
*/
enfocus.core.register_filter = (function register_filter(ky,func){return cljs.core.swap_BANG_.call(null,enfocus.core.reg_filt,cljs.core.assoc,ky,func);
});
/**
* takes a list of options and returns the selected ones.
*/
enfocus.core.selected_options = (function selected_options(pnod){return pnod.selected;
});
/**
* takes a list of radio or checkboxes and returns the checked ones
*/
enfocus.core.checked_radio_checkbox = (function checked_radio_checkbox(pnod){return pnod.checked;
});
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"selected","selected",2205476365),enfocus.core.selected_options);
enfocus.core.register_filter.call(null,new cljs.core.Keyword(null,"checked","checked",1756218137),enfocus.core.checked_radio_checkbox);
enfocus.core.match_QMARK_ = (function match_QMARK_(selector){return (function (node){if(cljs.core.truth_((node["matches"])))
{return node.matches(selector);
} else
{if(cljs.core.truth_((node["matchesSelector"])))
{return node.matchesSelector(selector);
} else
{if(cljs.core.truth_((node["msMatchesSelector"])))
{return node.msMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["mozMatchesSelector"])))
{return node.mozMatchesSelector(selector);
} else
{if(cljs.core.truth_((node["webkitMatchesSelector"])))
{return node.webkitMatchesSelector(selector);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([node], true),enfocus.core.nodes__GT_coll.call(null,enfocus.core.select.call(null,node)));
} else
{return null;
}
}
}
}
}
}
});
});
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* applys id masking if mask provided
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__1 = (function (css_sel){return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__29948_SHARP_){if((p1__29948_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__29948_SHARP_);
} else
{if((p1__29948_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__29948_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__29948_SHARP_))
{return create_sel_str.call(null,p1__29948_SHARP_);
} else
{if(typeof p1__29948_SHARP_ === 'string')
{return p1__29948_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_mask_sym,css_sel){
switch(arguments.length){
case 1:
return create_sel_str__1.call(this,id_mask_sym);
case 2:
return create_sel_str__2.call(this,id_mask_sym,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_sel_str.cljs$core$IFn$_invoke$arity$1 = create_sel_str__1;
create_sel_str.cljs$core$IFn$_invoke$arity$2 = create_sel_str__2;
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__1 = (function (css_sel){return css_select.call(null,"",document,css_sel);
});
var css_select__2 = (function (dom_node,css_sel){return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3 = (function (id_mask_sym,dom_node,css_sel){var sel = clojure.string.trim.call(null,enfocus.enlive.syntax.convert.call(null,enfocus.core.create_sel_str.call(null,id_mask_sym,css_sel)));var ret = domina.css.sel.call(null,dom_node,sel);return ret;
});
css_select = function(id_mask_sym,dom_node,css_sel){
switch(arguments.length){
case 1:
return css_select__1.call(this,id_mask_sym);
case 2:
return css_select__2.call(this,id_mask_sym,dom_node);
case 3:
return css_select__3.call(this,id_mask_sym,dom_node,css_sel);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
css_select.cljs$core$IFn$_invoke$arity$1 = css_select__1;
css_select.cljs$core$IFn$_invoke$arity$2 = css_select__2;
css_select.cljs$core$IFn$_invoke$arity$3 = css_select__3;
return css_select;
})()
;
enfocus.core.nil_t = (function nil_t(func){var or__8228__auto__ = func;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__8216__auto__ = !((node == null));if(and__8216__auto__)
{var G__29959 = node;if(G__29959)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__29959.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__29959.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__29959);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__29959);
}
} else
{return and__8216__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__29960 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__29960,0,null);var trans__$1 = cljs.core.nth.call(null,vec__29960,1,null);var seq__29961 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__29962 = null;var count__29963 = 0;var i__29964 = 0;while(true){
if((i__29964 < count__29963))
{var vec__29965 = cljs.core._nth.call(null,chunk__29962,i__29964);var sel = cljs.core.nth.call(null,vec__29965,0,null);var t = cljs.core.nth.call(null,vec__29965,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__29967 = seq__29961;
var G__29968 = chunk__29962;
var G__29969 = count__29963;
var G__29970 = (i__29964 + 1);
seq__29961 = G__29967;
chunk__29962 = G__29968;
count__29963 = G__29969;
i__29964 = G__29970;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29961);if(temp__4092__auto__)
{var seq__29961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29961__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__29961__$1);{
var G__29971 = cljs.core.chunk_rest.call(null,seq__29961__$1);
var G__29972 = c__8957__auto__;
var G__29973 = cljs.core.count.call(null,c__8957__auto__);
var G__29974 = 0;
seq__29961 = G__29971;
chunk__29962 = G__29972;
count__29963 = G__29973;
i__29964 = G__29974;
continue;
}
} else
{var vec__29966 = cljs.core.first.call(null,seq__29961__$1);var sel = cljs.core.nth.call(null,vec__29966,0,null);var t = cljs.core.nth.call(null,vec__29966,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__29975 = cljs.core.next.call(null,seq__29961__$1);
var G__29976 = null;
var G__29977 = 0;
var G__29978 = 0;
seq__29961 = G__29975;
chunk__29962 = G__29976;
count__29963 = G__29977;
i__29964 = G__29978;
continue;
}
}
} else
{return null;
}
}
break;
}
}
};
var i_at = function (id_mask,node,var_args){
var trans = null;if (arguments.length > 2) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return i_at__delegate.call(this,id_mask,node,trans);};
i_at.cljs$lang$maxFixedArity = 2;
i_at.cljs$lang$applyTo = (function (arglist__29979){
var id_mask = cljs.core.first(arglist__29979);
arglist__29979 = cljs.core.next(arglist__29979);
var node = cljs.core.first(arglist__29979);
var trans = cljs.core.rest(arglist__29979);
return i_at__delegate(id_mask,node,trans);
});
i_at.cljs$core$IFn$_invoke$arity$variadic = i_at__delegate;
return i_at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.at = (function() { 
var at__delegate = function (node,trans){return cljs.core.apply.call(null,enfocus.core.i_at,"",node,trans);
};
var at = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return at__delegate.call(this,node,trans);};
at.cljs$lang$maxFixedArity = 1;
at.cljs$lang$applyTo = (function (arglist__29980){
var node = cljs.core.first(arglist__29980);
var trans = cljs.core.rest(arglist__29980);
return at__delegate(node,trans);
});
at.cljs$core$IFn$_invoke$arity$variadic = at__delegate;
return at;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.from = (function() { 
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__29985 = node;if(G__29985)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__29985.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__29985.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__29985);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__29985);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__29986 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__29986,0,null);var trans__$1 = cljs.core.nth.call(null,vec__29986,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__29987){var vec__29988 = p__29987;var ky = cljs.core.nth.call(null,vec__29988,0,null);var sel = cljs.core.nth.call(null,vec__29988,1,null);var ext = cljs.core.nth.call(null,vec__29988,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
}),cljs.core.partition.call(null,3,trans__$1)));
} else
{return null;
}
}
}
};
var from = function (node,var_args){
var trans = null;if (arguments.length > 1) {
  trans = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return from__delegate.call(this,node,trans);};
from.cljs$lang$maxFixedArity = 1;
from.cljs$lang$applyTo = (function (arglist__29989){
var node = cljs.core.first(arglist__29989);
var trans = cljs.core.rest(arglist__29989);
return from__delegate(node,trans);
});
from.cljs$core$IFn$_invoke$arity$variadic = from__delegate;
return from;
})()
;
enfocus.core.xpath = (function xpath(path){return (function (root,id_mask){if(cljs.core.empty_QMARK_.call(null,id_mask))
{return domina.xpath.xpath.call(null,root,path);
} else
{var tmp = path.replace("@ID='",[cljs.core.str("@ID='"),cljs.core.str(id_mask)].join(''));var mpath = path.replace("@id='",[cljs.core.str("@id='"),cljs.core.str(id_mask)].join(''));return domina.xpath.xpath.call(null,root,mpath);
}
});
});
enfocus.core.this_node = (function this_node(root,id_mask){return root;
});
if(cljs.core.truth_((typeof Text != 'undefined')))
{Text.prototype.domina$DomContent$ = true;
Text.prototype.domina$DomContent$nodes$arity$1 = (function (content){var content__$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content__$1], null);
});
Text.prototype.domina$DomContent$single_node$arity$1 = (function (content){var content__$1 = this;return content__$1;
});
} else
{}
(enfocus.core.ISelector["null"] = true);
(enfocus.core.select["null"] = (function (this$){return cljs.core.List.EMPTY;
}));
(enfocus.core.select["null"] = (function (this$,root){return cljs.core.List.EMPTY;
}));
(enfocus.core.select["null"] = (function (this$,root,id_mask){return cljs.core.List.EMPTY;
}));
String.prototype.enfocus$core$ISelector$ = true;
String.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
String.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
String.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$ = true;
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$1 = (function (this$){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,document,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$2 = (function (this$,root){var this$__$1 = this;return enfocus.core.select.call(null,this$__$1,root,"");
});
cljs.core.PersistentVector.prototype.enfocus$core$ISelector$select$arity$3 = (function (this$,root,id_mask){var this$__$1 = this;return enfocus.core.css_select.call(null,id_mask,root,this$__$1);
});
(enfocus.core.ISelector["function"] = true);
(enfocus.core.select["function"] = (function (this$){return enfocus.core.select.call(null,this$,document,"");
}));
(enfocus.core.select["function"] = (function (this$,root){return enfocus.core.select.call(null,this$,root,"");
}));
(enfocus.core.select["function"] = (function (this$,root,id_mask){return this$.call(null,root,id_mask);
}));
(enfocus.core.ITransform["null"] = true);
(enfocus.core.apply_transform["null"] = (function (trans,nodes){return nodes;
}));
(enfocus.core.apply_transform["null"] = (function (trans,nodes,chain){return nodes;
}));
(enfocus.core.ITransform["function"] = true);
(enfocus.core.apply_transform["function"] = (function (trans,nodes){return cljs.core.doall.call(null,cljs.core.map.call(null,trans,enfocus.core.nodes__GT_coll.call(null,nodes)));
}));
(enfocus.core.apply_transform["function"] = (function (trans,nodes,chain){var pnod_col = enfocus.core.nodes__GT_coll.call(null,nodes);var val = cljs.core.doall.call(null,cljs.core.map.call(null,trans,pnod_col));if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
}));

//# sourceMappingURL=core.js.map