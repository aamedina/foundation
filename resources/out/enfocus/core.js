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
enfocus.core.ISelector = (function (){var obj366426 = {};return obj366426;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13967__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (enfocus.core.select[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (enfocus.core.select["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (enfocus.core.select[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (enfocus.core.select["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13967__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (enfocus.core.select[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (enfocus.core.select["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
enfocus.core.ITransform = (function (){var obj366428 = {};return obj366428;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13967__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13967__auto__ = this$;if(and__13967__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13967__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14587__auto__ = (((this$ == null))?null:this$);return (function (){var or__13979__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13967__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13967__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13967__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__366429_SHARP_){if(typeof p1__366429_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__366429_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__366429_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__366436_366442 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__366437_366443 = null;var count__366438_366444 = 0;var i__366439_366445 = 0;while(true){
if((i__366439_366445 < count__366438_366444))
{var vec__366440_366446 = cljs.core._nth.call(null,chunk__366437_366443,i__366439_366445);var attr_366447 = cljs.core.nth.call(null,vec__366440_366446,0,null);var value_366448 = cljs.core.nth.call(null,vec__366440_366446,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_366447),value_366448);
{
var G__366449 = seq__366436_366442;
var G__366450 = chunk__366437_366443;
var G__366451 = count__366438_366444;
var G__366452 = (i__366439_366445 + 1);
seq__366436_366442 = G__366449;
chunk__366437_366443 = G__366450;
count__366438_366444 = G__366451;
i__366439_366445 = G__366452;
continue;
}
} else
{var temp__4092__auto___366453 = cljs.core.seq.call(null,seq__366436_366442);if(temp__4092__auto___366453)
{var seq__366436_366454__$1 = temp__4092__auto___366453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366436_366454__$1))
{var c__14708__auto___366455 = cljs.core.chunk_first.call(null,seq__366436_366454__$1);{
var G__366456 = cljs.core.chunk_rest.call(null,seq__366436_366454__$1);
var G__366457 = c__14708__auto___366455;
var G__366458 = cljs.core.count.call(null,c__14708__auto___366455);
var G__366459 = 0;
seq__366436_366442 = G__366456;
chunk__366437_366443 = G__366457;
count__366438_366444 = G__366458;
i__366439_366445 = G__366459;
continue;
}
} else
{var vec__366441_366460 = cljs.core.first.call(null,seq__366436_366454__$1);var attr_366461 = cljs.core.nth.call(null,vec__366441_366460,0,null);var value_366462 = cljs.core.nth.call(null,vec__366441_366460,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_366461),value_366462);
{
var G__366463 = cljs.core.next.call(null,seq__366436_366454__$1);
var G__366464 = null;
var G__366465 = 0;
var G__366466 = 0;
seq__366436_366442 = G__366463;
chunk__366437_366443 = G__366464;
count__366438_366444 = G__366465;
i__366439_366445 = G__366466;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__366471 = cljs.core.seq.call(null,values);var chunk__366472 = null;var count__366473 = 0;var i__366474 = 0;while(true){
if((i__366474 < count__366473))
{var attr = cljs.core._nth.call(null,chunk__366472,i__366474);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__366475 = seq__366471;
var G__366476 = chunk__366472;
var G__366477 = count__366473;
var G__366478 = (i__366474 + 1);
seq__366471 = G__366475;
chunk__366472 = G__366476;
count__366473 = G__366477;
i__366474 = G__366478;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366471);if(temp__4092__auto__)
{var seq__366471__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366471__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366471__$1);{
var G__366479 = cljs.core.chunk_rest.call(null,seq__366471__$1);
var G__366480 = c__14708__auto__;
var G__366481 = cljs.core.count.call(null,c__14708__auto__);
var G__366482 = 0;
seq__366471 = G__366479;
chunk__366472 = G__366480;
count__366473 = G__366481;
i__366474 = G__366482;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__366471__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__366483 = cljs.core.next.call(null,seq__366471__$1);
var G__366484 = null;
var G__366485 = 0;
var G__366486 = 0;
seq__366471 = G__366483;
chunk__366472 = G__366484;
count__366473 = G__366485;
i__366474 = G__366486;
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
{var seq__366493_366499 = cljs.core.seq.call(null,ats);var chunk__366494_366500 = null;var count__366495_366501 = 0;var i__366496_366502 = 0;while(true){
if((i__366496_366502 < count__366495_366501))
{var vec__366497_366503 = cljs.core._nth.call(null,chunk__366494_366500,i__366496_366502);var k_366504 = cljs.core.nth.call(null,vec__366497_366503,0,null);var v_366505 = cljs.core.nth.call(null,vec__366497_366503,1,null);add_map_attrs.call(null,elem,k_366504,v_366505);
{
var G__366506 = seq__366493_366499;
var G__366507 = chunk__366494_366500;
var G__366508 = count__366495_366501;
var G__366509 = (i__366496_366502 + 1);
seq__366493_366499 = G__366506;
chunk__366494_366500 = G__366507;
count__366495_366501 = G__366508;
i__366496_366502 = G__366509;
continue;
}
} else
{var temp__4092__auto___366510 = cljs.core.seq.call(null,seq__366493_366499);if(temp__4092__auto___366510)
{var seq__366493_366511__$1 = temp__4092__auto___366510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366493_366511__$1))
{var c__14708__auto___366512 = cljs.core.chunk_first.call(null,seq__366493_366511__$1);{
var G__366513 = cljs.core.chunk_rest.call(null,seq__366493_366511__$1);
var G__366514 = c__14708__auto___366512;
var G__366515 = cljs.core.count.call(null,c__14708__auto___366512);
var G__366516 = 0;
seq__366493_366499 = G__366513;
chunk__366494_366500 = G__366514;
count__366495_366501 = G__366515;
i__366496_366502 = G__366516;
continue;
}
} else
{var vec__366498_366517 = cljs.core.first.call(null,seq__366493_366511__$1);var k_366518 = cljs.core.nth.call(null,vec__366498_366517,0,null);var v_366519 = cljs.core.nth.call(null,vec__366498_366517,1,null);add_map_attrs.call(null,elem,k_366518,v_366519);
{
var G__366520 = cljs.core.next.call(null,seq__366493_366511__$1);
var G__366521 = null;
var G__366522 = 0;
var G__366523 = 0;
seq__366493_366499 = G__366520;
chunk__366494_366500 = G__366521;
count__366495_366501 = G__366522;
i__366496_366502 = G__366523;
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
var seq__366528_366532 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__366529_366533 = null;var count__366530_366534 = 0;var i__366531_366535 = 0;while(true){
if((i__366531_366535 < count__366530_366534))
{var node_366536 = cljs.core._nth.call(null,chunk__366529_366533,i__366531_366535);goog.dom.appendChild(div,node_366536);
{
var G__366537 = seq__366528_366532;
var G__366538 = chunk__366529_366533;
var G__366539 = count__366530_366534;
var G__366540 = (i__366531_366535 + 1);
seq__366528_366532 = G__366537;
chunk__366529_366533 = G__366538;
count__366530_366534 = G__366539;
i__366531_366535 = G__366540;
continue;
}
} else
{var temp__4092__auto___366541 = cljs.core.seq.call(null,seq__366528_366532);if(temp__4092__auto___366541)
{var seq__366528_366542__$1 = temp__4092__auto___366541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366528_366542__$1))
{var c__14708__auto___366543 = cljs.core.chunk_first.call(null,seq__366528_366542__$1);{
var G__366544 = cljs.core.chunk_rest.call(null,seq__366528_366542__$1);
var G__366545 = c__14708__auto___366543;
var G__366546 = cljs.core.count.call(null,c__14708__auto___366543);
var G__366547 = 0;
seq__366528_366532 = G__366544;
chunk__366529_366533 = G__366545;
count__366530_366534 = G__366546;
i__366531_366535 = G__366547;
continue;
}
} else
{var node_366548 = cljs.core.first.call(null,seq__366528_366542__$1);goog.dom.appendChild(div,node_366548);
{
var G__366549 = cljs.core.next.call(null,seq__366528_366542__$1);
var G__366550 = null;
var G__366551 = 0;
var G__366552 = 0;
seq__366528_366532 = G__366549;
chunk__366529_366533 = G__366550;
count__366530_366534 = G__366551;
i__366531_366535 = G__366552;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__366553_SHARP_){var id = p1__366553_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__366553_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__366555 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__366555,0,null);var txt = cljs.core.nth.call(null,vec__366555,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__366560_366564 = cljs.core.seq.call(null,dfa);var chunk__366561_366565 = null;var count__366562_366566 = 0;var i__366563_366567 = 0;while(true){
if((i__366563_366567 < count__366562_366566))
{var df_366568 = cljs.core._nth.call(null,chunk__366561_366565,i__366563_366567);goog.dom.append(frag,df_366568);
{
var G__366569 = seq__366560_366564;
var G__366570 = chunk__366561_366565;
var G__366571 = count__366562_366566;
var G__366572 = (i__366563_366567 + 1);
seq__366560_366564 = G__366569;
chunk__366561_366565 = G__366570;
count__366562_366566 = G__366571;
i__366563_366567 = G__366572;
continue;
}
} else
{var temp__4092__auto___366573 = cljs.core.seq.call(null,seq__366560_366564);if(temp__4092__auto___366573)
{var seq__366560_366574__$1 = temp__4092__auto___366573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366560_366574__$1))
{var c__14708__auto___366575 = cljs.core.chunk_first.call(null,seq__366560_366574__$1);{
var G__366576 = cljs.core.chunk_rest.call(null,seq__366560_366574__$1);
var G__366577 = c__14708__auto___366575;
var G__366578 = cljs.core.count.call(null,c__14708__auto___366575);
var G__366579 = 0;
seq__366560_366564 = G__366576;
chunk__366561_366565 = G__366577;
count__366562_366566 = G__366578;
i__366563_366567 = G__366579;
continue;
}
} else
{var df_366580 = cljs.core.first.call(null,seq__366560_366574__$1);goog.dom.append(frag,df_366580);
{
var G__366581 = cljs.core.next.call(null,seq__366560_366574__$1);
var G__366582 = null;
var G__366583 = 0;
var G__366584 = 0;
seq__366560_366564 = G__366581;
chunk__366561_366565 = G__366582;
count__366562_366566 = G__366583;
i__366563_366567 = G__366584;
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
{var vec__366587 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__366587,0,null);var tdom = cljs.core.nth.call(null,vec__366587,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__366587,sym,tdom,dom,tsnip){
return (function (p1__366585_SHARP_){return p1__366585_SHARP_.outerHTML;
});})(vec__366587,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t366591 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t366591 = (function (trans,func,extr_multi_node,meta366592){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta366592 = meta366592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t366591.cljs$lang$type = true;
enfocus.core.t366591.cljs$lang$ctorStr = "enfocus.core/t366591";
enfocus.core.t366591.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t366591");
});
enfocus.core.t366591.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t366591.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t366591.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t366591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_366593){var self__ = this;
var _366593__$1 = this;return self__.meta366592;
});
enfocus.core.t366591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_366593,meta366592__$1){var self__ = this;
var _366593__$1 = this;return (new enfocus.core.t366591(self__.trans,self__.func,self__.extr_multi_node,meta366592__$1));
});
enfocus.core.__GT_t366591 = (function __GT_t366591(trans__$1,func__$1,extr_multi_node__$1,meta366592){return (new enfocus.core.t366591(trans__$1,func__$1,extr_multi_node__$1,meta366592));
});
}
return (new enfocus.core.t366591(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t366601 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t366601 = (function (trans,func,multi_node_chain,meta366602){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta366602 = meta366602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t366601.cljs$lang$type = true;
enfocus.core.t366601.cljs$lang$ctorStr = "enfocus.core/t366601";
enfocus.core.t366601.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t366601");
});
enfocus.core.t366601.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t366601.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t366601.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t366601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_366603){var self__ = this;
var _366603__$1 = this;return self__.meta366602;
});
enfocus.core.t366601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_366603,meta366602__$1){var self__ = this;
var _366603__$1 = this;return (new enfocus.core.t366601(self__.trans,self__.func,self__.multi_node_chain,meta366602__$1));
});
enfocus.core.__GT_t366601 = (function __GT_t366601(trans__$1,func__$1,multi_node_chain__$1,meta366602){return (new enfocus.core.t366601(trans__$1,func__$1,multi_node_chain__$1,meta366602));
});
}
return (new enfocus.core.t366601(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__366594_SHARP_){return domina.nodes.call(null,p1__366594_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t366604 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t366604 = (function (trans,func,values,multi_node_chain,meta366605){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta366605 = meta366605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t366604.cljs$lang$type = true;
enfocus.core.t366604.cljs$lang$ctorStr = "enfocus.core/t366604";
enfocus.core.t366604.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t366604");
});
enfocus.core.t366604.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t366604.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t366604.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t366604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_366606){var self__ = this;
var _366606__$1 = this;return self__.meta366605;
});
enfocus.core.t366604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_366606,meta366605__$1){var self__ = this;
var _366606__$1 = this;return (new enfocus.core.t366604(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta366605__$1));
});
enfocus.core.__GT_t366604 = (function __GT_t366604(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta366605){return (new enfocus.core.t366604(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta366605));
});
}
return (new enfocus.core.t366604(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366607_SHARP_,p2__366608_SHARP_){domina.destroy_children_BANG_.call(null,p1__366607_SHARP_);
return domina.append_BANG_.call(null,p1__366607_SHARP_,p2__366608_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__366609){
var values = cljs.core.seq(arglist__366609);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__366610_SHARP_){return domina.set_html_BANG_.call(null,p1__366610_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__366611_SHARP_){var seq__366618 = cljs.core.seq.call(null,pairs);var chunk__366619 = null;var count__366620 = 0;var i__366621 = 0;while(true){
if((i__366621 < count__366620))
{var vec__366622 = cljs.core._nth.call(null,chunk__366619,i__366621);var name = cljs.core.nth.call(null,vec__366622,0,null);var value = cljs.core.nth.call(null,vec__366622,1,null);domina.set_attr_BANG_.call(null,p1__366611_SHARP_,name,value);
{
var G__366624 = seq__366618;
var G__366625 = chunk__366619;
var G__366626 = count__366620;
var G__366627 = (i__366621 + 1);
seq__366618 = G__366624;
chunk__366619 = G__366625;
count__366620 = G__366626;
i__366621 = G__366627;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366618);if(temp__4092__auto__)
{var seq__366618__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366618__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366618__$1);{
var G__366628 = cljs.core.chunk_rest.call(null,seq__366618__$1);
var G__366629 = c__14708__auto__;
var G__366630 = cljs.core.count.call(null,c__14708__auto__);
var G__366631 = 0;
seq__366618 = G__366628;
chunk__366619 = G__366629;
count__366620 = G__366630;
i__366621 = G__366631;
continue;
}
} else
{var vec__366623 = cljs.core.first.call(null,seq__366618__$1);var name = cljs.core.nth.call(null,vec__366623,0,null);var value = cljs.core.nth.call(null,vec__366623,1,null);domina.set_attr_BANG_.call(null,p1__366611_SHARP_,name,value);
{
var G__366632 = cljs.core.next.call(null,seq__366618__$1);
var G__366633 = null;
var G__366634 = 0;
var G__366635 = 0;
seq__366618 = G__366632;
chunk__366619 = G__366633;
count__366620 = G__366634;
i__366621 = G__366635;
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
set_attr.cljs$lang$applyTo = (function (arglist__366636){
var values = cljs.core.seq(arglist__366636);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__366637_SHARP_){var seq__366642 = cljs.core.seq.call(null,values);var chunk__366643 = null;var count__366644 = 0;var i__366645 = 0;while(true){
if((i__366645 < count__366644))
{var name = cljs.core._nth.call(null,chunk__366643,i__366645);domina.remove_attr_BANG_.call(null,p1__366637_SHARP_,name);
{
var G__366646 = seq__366642;
var G__366647 = chunk__366643;
var G__366648 = count__366644;
var G__366649 = (i__366645 + 1);
seq__366642 = G__366646;
chunk__366643 = G__366647;
count__366644 = G__366648;
i__366645 = G__366649;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366642);if(temp__4092__auto__)
{var seq__366642__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366642__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366642__$1);{
var G__366650 = cljs.core.chunk_rest.call(null,seq__366642__$1);
var G__366651 = c__14708__auto__;
var G__366652 = cljs.core.count.call(null,c__14708__auto__);
var G__366653 = 0;
seq__366642 = G__366650;
chunk__366643 = G__366651;
count__366644 = G__366652;
i__366645 = G__366653;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__366642__$1);domina.remove_attr_BANG_.call(null,p1__366637_SHARP_,name);
{
var G__366654 = cljs.core.next.call(null,seq__366642__$1);
var G__366655 = null;
var G__366656 = 0;
var G__366657 = 0;
seq__366642 = G__366654;
chunk__366643 = G__366655;
count__366644 = G__366656;
i__366645 = G__366657;
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
remove_attr.cljs$lang$applyTo = (function (arglist__366658){
var values = cljs.core.seq(arglist__366658);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__366661){var vec__366662 = p__366661;var n = cljs.core.nth.call(null,vec__366662,0,null);var v = cljs.core.nth.call(null,vec__366662,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__366663){
var forms = cljs.core.seq(arglist__366663);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__366664_SHARP_){var seq__366669 = cljs.core.seq.call(null,values);var chunk__366670 = null;var count__366671 = 0;var i__366672 = 0;while(true){
if((i__366672 < count__366671))
{var val = cljs.core._nth.call(null,chunk__366670,i__366672);domina.add_class_BANG_.call(null,p1__366664_SHARP_,val);
{
var G__366673 = seq__366669;
var G__366674 = chunk__366670;
var G__366675 = count__366671;
var G__366676 = (i__366672 + 1);
seq__366669 = G__366673;
chunk__366670 = G__366674;
count__366671 = G__366675;
i__366672 = G__366676;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366669);if(temp__4092__auto__)
{var seq__366669__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366669__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366669__$1);{
var G__366677 = cljs.core.chunk_rest.call(null,seq__366669__$1);
var G__366678 = c__14708__auto__;
var G__366679 = cljs.core.count.call(null,c__14708__auto__);
var G__366680 = 0;
seq__366669 = G__366677;
chunk__366670 = G__366678;
count__366671 = G__366679;
i__366672 = G__366680;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__366669__$1);domina.add_class_BANG_.call(null,p1__366664_SHARP_,val);
{
var G__366681 = cljs.core.next.call(null,seq__366669__$1);
var G__366682 = null;
var G__366683 = 0;
var G__366684 = 0;
seq__366669 = G__366681;
chunk__366670 = G__366682;
count__366671 = G__366683;
i__366672 = G__366684;
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
add_class.cljs$lang$applyTo = (function (arglist__366685){
var values = cljs.core.seq(arglist__366685);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__366686_SHARP_){var seq__366691 = cljs.core.seq.call(null,values);var chunk__366692 = null;var count__366693 = 0;var i__366694 = 0;while(true){
if((i__366694 < count__366693))
{var val = cljs.core._nth.call(null,chunk__366692,i__366694);domina.remove_class_BANG_.call(null,p1__366686_SHARP_,val);
{
var G__366695 = seq__366691;
var G__366696 = chunk__366692;
var G__366697 = count__366693;
var G__366698 = (i__366694 + 1);
seq__366691 = G__366695;
chunk__366692 = G__366696;
count__366693 = G__366697;
i__366694 = G__366698;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366691);if(temp__4092__auto__)
{var seq__366691__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366691__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366691__$1);{
var G__366699 = cljs.core.chunk_rest.call(null,seq__366691__$1);
var G__366700 = c__14708__auto__;
var G__366701 = cljs.core.count.call(null,c__14708__auto__);
var G__366702 = 0;
seq__366691 = G__366699;
chunk__366692 = G__366700;
count__366693 = G__366701;
i__366694 = G__366702;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__366691__$1);domina.remove_class_BANG_.call(null,p1__366686_SHARP_,val);
{
var G__366703 = cljs.core.next.call(null,seq__366691__$1);
var G__366704 = null;
var G__366705 = 0;
var G__366706 = 0;
seq__366691 = G__366703;
chunk__366692 = G__366704;
count__366693 = G__366705;
i__366694 = G__366706;
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
remove_class.cljs$lang$applyTo = (function (arglist__366707){
var values = cljs.core.seq(arglist__366707);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__366708_SHARP_){return domina.set_classes_BANG_.call(null,p1__366708_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__366709){
var values = cljs.core.seq(arglist__366709);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__366714 = cljs.core.seq.call(null,forms);var chunk__366715 = null;var count__366716 = 0;var i__366717 = 0;while(true){
if((i__366717 < count__366716))
{var fun = cljs.core._nth.call(null,chunk__366715,i__366717);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__366718 = seq__366714;
var G__366719 = chunk__366715;
var G__366720 = count__366716;
var G__366721 = (i__366717 + 1);
seq__366714 = G__366718;
chunk__366715 = G__366719;
count__366716 = G__366720;
i__366717 = G__366721;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366714);if(temp__4092__auto__)
{var seq__366714__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366714__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366714__$1);{
var G__366722 = cljs.core.chunk_rest.call(null,seq__366714__$1);
var G__366723 = c__14708__auto__;
var G__366724 = cljs.core.count.call(null,c__14708__auto__);
var G__366725 = 0;
seq__366714 = G__366722;
chunk__366715 = G__366723;
count__366716 = G__366724;
i__366717 = G__366725;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__366714__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__366726 = cljs.core.next.call(null,seq__366714__$1);
var G__366727 = null;
var G__366728 = 0;
var G__366729 = 0;
seq__366714 = G__366726;
chunk__366715 = G__366727;
count__366716 = G__366728;
i__366717 = G__366729;
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
do__GT_.cljs$lang$applyTo = (function (arglist__366730){
var forms = cljs.core.seq(arglist__366730);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366731_SHARP_,p2__366732_SHARP_){return domina.append_BANG_.call(null,p1__366731_SHARP_,p2__366732_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__366733){
var values = cljs.core.seq(arglist__366733);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366734_SHARP_,p2__366735_SHARP_){return domina.prepend_BANG_.call(null,p1__366734_SHARP_,p2__366735_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__366736){
var values = cljs.core.seq(arglist__366736);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366737_SHARP_,p2__366738_SHARP_){return domina.insert_before_BANG_.call(null,p1__366737_SHARP_,p2__366738_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__366739){
var values = cljs.core.seq(arglist__366739);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366740_SHARP_,p2__366741_SHARP_){return domina.insert_after_BANG_.call(null,p1__366740_SHARP_,p2__366741_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__366742){
var values = cljs.core.seq(arglist__366742);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__366743_SHARP_,p2__366744_SHARP_){return domina.swap_content_BANG_.call(null,p1__366743_SHARP_,p2__366744_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__366745){
var values = cljs.core.seq(arglist__366745);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__366746_SHARP_){return domina.detach_BANG_.call(null,p1__366746_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__366747_SHARP_){var seq__366754 = cljs.core.seq.call(null,pairs);var chunk__366755 = null;var count__366756 = 0;var i__366757 = 0;while(true){
if((i__366757 < count__366756))
{var vec__366758 = cljs.core._nth.call(null,chunk__366755,i__366757);var name = cljs.core.nth.call(null,vec__366758,0,null);var value = cljs.core.nth.call(null,vec__366758,1,null);domina.set_style_BANG_.call(null,p1__366747_SHARP_,name,value);
{
var G__366760 = seq__366754;
var G__366761 = chunk__366755;
var G__366762 = count__366756;
var G__366763 = (i__366757 + 1);
seq__366754 = G__366760;
chunk__366755 = G__366761;
count__366756 = G__366762;
i__366757 = G__366763;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366754);if(temp__4092__auto__)
{var seq__366754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366754__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366754__$1);{
var G__366764 = cljs.core.chunk_rest.call(null,seq__366754__$1);
var G__366765 = c__14708__auto__;
var G__366766 = cljs.core.count.call(null,c__14708__auto__);
var G__366767 = 0;
seq__366754 = G__366764;
chunk__366755 = G__366765;
count__366756 = G__366766;
i__366757 = G__366767;
continue;
}
} else
{var vec__366759 = cljs.core.first.call(null,seq__366754__$1);var name = cljs.core.nth.call(null,vec__366759,0,null);var value = cljs.core.nth.call(null,vec__366759,1,null);domina.set_style_BANG_.call(null,p1__366747_SHARP_,name,value);
{
var G__366768 = cljs.core.next.call(null,seq__366754__$1);
var G__366769 = null;
var G__366770 = 0;
var G__366771 = 0;
seq__366754 = G__366768;
chunk__366755 = G__366769;
count__366756 = G__366770;
i__366757 = G__366771;
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
set_style.cljs$lang$applyTo = (function (arglist__366772){
var values = cljs.core.seq(arglist__366772);
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
remove_style.cljs$lang$applyTo = (function (arglist__366773){
var values = cljs.core.seq(arglist__366773);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__366774_SHARP_){return domina.set_data_BANG_.call(null,p1__366774_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__366775){
var ttime = cljs.core.first(arglist__366775);
var funcs = cljs.core.rest(arglist__366775);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__366777_SHARP_,p2__366776_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__366776_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__366802_366810 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__366803_366811 = null;var count__366804_366812 = 0;var i__366805_366813 = 0;while(true){
if((i__366805_366813 < count__366804_366812))
{var idx_366814 = cljs.core._nth.call(null,chunk__366803_366811,i__366805_366813);var attr_366815 = pnod.attributes.item(idx_366814);if(cljs.core.truth_(attr_366815.specified))
{attr_366815.value = rep_str.call(null,attr_366815.value);
} else
{}
{
var G__366816 = seq__366802_366810;
var G__366817 = chunk__366803_366811;
var G__366818 = count__366804_366812;
var G__366819 = (i__366805_366813 + 1);
seq__366802_366810 = G__366816;
chunk__366803_366811 = G__366817;
count__366804_366812 = G__366818;
i__366805_366813 = G__366819;
continue;
}
} else
{var temp__4092__auto___366820 = cljs.core.seq.call(null,seq__366802_366810);if(temp__4092__auto___366820)
{var seq__366802_366821__$1 = temp__4092__auto___366820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366802_366821__$1))
{var c__14708__auto___366822 = cljs.core.chunk_first.call(null,seq__366802_366821__$1);{
var G__366823 = cljs.core.chunk_rest.call(null,seq__366802_366821__$1);
var G__366824 = c__14708__auto___366822;
var G__366825 = cljs.core.count.call(null,c__14708__auto___366822);
var G__366826 = 0;
seq__366802_366810 = G__366823;
chunk__366803_366811 = G__366824;
count__366804_366812 = G__366825;
i__366805_366813 = G__366826;
continue;
}
} else
{var idx_366827 = cljs.core.first.call(null,seq__366802_366821__$1);var attr_366828 = pnod.attributes.item(idx_366827);if(cljs.core.truth_(attr_366828.specified))
{attr_366828.value = rep_str.call(null,attr_366828.value);
} else
{}
{
var G__366829 = cljs.core.next.call(null,seq__366802_366821__$1);
var G__366830 = null;
var G__366831 = 0;
var G__366832 = 0;
seq__366802_366810 = G__366829;
chunk__366803_366811 = G__366830;
count__366804_366812 = G__366831;
i__366805_366813 = G__366832;
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
{var seq__366806 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__366807 = null;var count__366808 = 0;var i__366809 = 0;while(true){
if((i__366809 < count__366808))
{var cnode = cljs.core._nth.call(null,chunk__366807,i__366809);rep_node.call(null,cnode);
{
var G__366833 = seq__366806;
var G__366834 = chunk__366807;
var G__366835 = count__366808;
var G__366836 = (i__366809 + 1);
seq__366806 = G__366833;
chunk__366807 = G__366834;
count__366808 = G__366835;
i__366809 = G__366836;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366806);if(temp__4092__auto__)
{var seq__366806__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366806__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366806__$1);{
var G__366837 = cljs.core.chunk_rest.call(null,seq__366806__$1);
var G__366838 = c__14708__auto__;
var G__366839 = cljs.core.count.call(null,c__14708__auto__);
var G__366840 = 0;
seq__366806 = G__366837;
chunk__366807 = G__366838;
count__366808 = G__366839;
i__366809 = G__366840;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__366806__$1);rep_node.call(null,cnode);
{
var G__366841 = cljs.core.next.call(null,seq__366806__$1);
var G__366842 = null;
var G__366843 = 0;
var G__366844 = 0;
seq__366806 = G__366841;
chunk__366807 = G__366842;
count__366808 = G__366843;
i__366809 = G__366844;
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
{var vec__366854 = node_spec;var tag = cljs.core.nth.call(null,vec__366854,0,null);var vec__366855 = cljs.core.nthnext.call(null,vec__366854,1);var m = cljs.core.nth.call(null,vec__366855,0,null);var ms = cljs.core.nthnext.call(null,vec__366855,1);var more = vec__366855;var vec__366856 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__366856,0,null);var segments = cljs.core.nthnext.call(null,vec__366856,1);var id = cljs.core.some.call(null,((function (vec__366854,tag,vec__366855,m,ms,more,vec__366856,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__366854,tag,vec__366855,m,ms,more,vec__366856,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__366854,tag,vec__366855,m,ms,more,vec__366856,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__366854,tag,vec__366855,m,ms,more,vec__366856,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__366857_366863 = cljs.core.seq.call(null,attrs__$2);var chunk__366858_366864 = null;var count__366859_366865 = 0;var i__366860_366866 = 0;while(true){
if((i__366860_366866 < count__366859_366865))
{var vec__366861_366867 = cljs.core._nth.call(null,chunk__366858_366864,i__366860_366866);var key_366868 = cljs.core.nth.call(null,vec__366861_366867,0,null);var val_366869 = cljs.core.nth.call(null,vec__366861_366867,1,null);node.setAttribute(cljs.core.name.call(null,key_366868),val_366869);
{
var G__366870 = seq__366857_366863;
var G__366871 = chunk__366858_366864;
var G__366872 = count__366859_366865;
var G__366873 = (i__366860_366866 + 1);
seq__366857_366863 = G__366870;
chunk__366858_366864 = G__366871;
count__366859_366865 = G__366872;
i__366860_366866 = G__366873;
continue;
}
} else
{var temp__4092__auto___366874 = cljs.core.seq.call(null,seq__366857_366863);if(temp__4092__auto___366874)
{var seq__366857_366875__$1 = temp__4092__auto___366874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366857_366875__$1))
{var c__14708__auto___366876 = cljs.core.chunk_first.call(null,seq__366857_366875__$1);{
var G__366877 = cljs.core.chunk_rest.call(null,seq__366857_366875__$1);
var G__366878 = c__14708__auto___366876;
var G__366879 = cljs.core.count.call(null,c__14708__auto___366876);
var G__366880 = 0;
seq__366857_366863 = G__366877;
chunk__366858_366864 = G__366878;
count__366859_366865 = G__366879;
i__366860_366866 = G__366880;
continue;
}
} else
{var vec__366862_366881 = cljs.core.first.call(null,seq__366857_366875__$1);var key_366882 = cljs.core.nth.call(null,vec__366862_366881,0,null);var val_366883 = cljs.core.nth.call(null,vec__366862_366881,1,null);node.setAttribute(cljs.core.name.call(null,key_366882),val_366883);
{
var G__366884 = cljs.core.next.call(null,seq__366857_366875__$1);
var G__366885 = null;
var G__366886 = 0;
var G__366887 = 0;
seq__366857_366863 = G__366884;
chunk__366858_366864 = G__366885;
count__366859_366865 = G__366886;
i__366860_366866 = G__366887;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13967__auto__ = el.checked;if(cljs.core.truth_(and__13967__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13967__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__366888_SHARP_){return p1__366888_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__366889_SHARP_){return p1__366889_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__366891_SHARP_,p2__366890_SHARP_){var G__366894 = p2__366890_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__366894))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__366894))
{return enfocus.core.read_select_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__366894))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__366894))
{var G__366895 = p2__366890_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__366895))
{return enfocus.core.read_checked_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__366895))
{return enfocus.core.read_checked_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__366895))
{return enfocus.core.read_simple_input.call(null,p2__366890_SHARP_,p1__366891_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__366891_SHARP_;
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
{return p1__366891_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__366896_SHARP_){if((p1__366896_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__366896_SHARP_);
} else
{if((p1__366896_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__366896_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__366896_SHARP_))
{return create_sel_str.call(null,p1__366896_SHARP_);
} else
{if(typeof p1__366896_SHARP_ === 'string')
{return p1__366896_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13979__auto__ = func;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13967__auto__ = !((node == null));if(and__13967__auto__)
{var G__366907 = node;if(G__366907)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__366907.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__366907.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__366907);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__366907);
}
} else
{return and__13967__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__366908 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__366908,0,null);var trans__$1 = cljs.core.nth.call(null,vec__366908,1,null);var seq__366909 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__366910 = null;var count__366911 = 0;var i__366912 = 0;while(true){
if((i__366912 < count__366911))
{var vec__366913 = cljs.core._nth.call(null,chunk__366910,i__366912);var sel = cljs.core.nth.call(null,vec__366913,0,null);var t = cljs.core.nth.call(null,vec__366913,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__366915 = seq__366909;
var G__366916 = chunk__366910;
var G__366917 = count__366911;
var G__366918 = (i__366912 + 1);
seq__366909 = G__366915;
chunk__366910 = G__366916;
count__366911 = G__366917;
i__366912 = G__366918;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__366909);if(temp__4092__auto__)
{var seq__366909__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__366909__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__366909__$1);{
var G__366919 = cljs.core.chunk_rest.call(null,seq__366909__$1);
var G__366920 = c__14708__auto__;
var G__366921 = cljs.core.count.call(null,c__14708__auto__);
var G__366922 = 0;
seq__366909 = G__366919;
chunk__366910 = G__366920;
count__366911 = G__366921;
i__366912 = G__366922;
continue;
}
} else
{var vec__366914 = cljs.core.first.call(null,seq__366909__$1);var sel = cljs.core.nth.call(null,vec__366914,0,null);var t = cljs.core.nth.call(null,vec__366914,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__366923 = cljs.core.next.call(null,seq__366909__$1);
var G__366924 = null;
var G__366925 = 0;
var G__366926 = 0;
seq__366909 = G__366923;
chunk__366910 = G__366924;
count__366911 = G__366925;
i__366912 = G__366926;
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
i_at.cljs$lang$applyTo = (function (arglist__366927){
var id_mask = cljs.core.first(arglist__366927);
arglist__366927 = cljs.core.next(arglist__366927);
var node = cljs.core.first(arglist__366927);
var trans = cljs.core.rest(arglist__366927);
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
at.cljs$lang$applyTo = (function (arglist__366928){
var node = cljs.core.first(arglist__366928);
var trans = cljs.core.rest(arglist__366928);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__366933 = node;if(G__366933)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__366933.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__366933.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__366933);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__366933);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__366934 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__366934,0,null);var trans__$1 = cljs.core.nth.call(null,vec__366934,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__366935){var vec__366936 = p__366935;var ky = cljs.core.nth.call(null,vec__366936,0,null);var sel = cljs.core.nth.call(null,vec__366936,1,null);var ext = cljs.core.nth.call(null,vec__366936,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__366937){
var node = cljs.core.first(arglist__366937);
var trans = cljs.core.rest(arglist__366937);
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