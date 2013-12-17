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
enfocus.core.ISelector = (function (){var obj384337 = {};return obj384337;
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
enfocus.core.ITransform = (function (){var obj384339 = {};return obj384339;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__384340_SHARP_){if(typeof p1__384340_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__384340_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__384340_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__384347_384353 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__384348_384354 = null;var count__384349_384355 = 0;var i__384350_384356 = 0;while(true){
if((i__384350_384356 < count__384349_384355))
{var vec__384351_384357 = cljs.core._nth.call(null,chunk__384348_384354,i__384350_384356);var attr_384358 = cljs.core.nth.call(null,vec__384351_384357,0,null);var value_384359 = cljs.core.nth.call(null,vec__384351_384357,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_384358),value_384359);
{
var G__384360 = seq__384347_384353;
var G__384361 = chunk__384348_384354;
var G__384362 = count__384349_384355;
var G__384363 = (i__384350_384356 + 1);
seq__384347_384353 = G__384360;
chunk__384348_384354 = G__384361;
count__384349_384355 = G__384362;
i__384350_384356 = G__384363;
continue;
}
} else
{var temp__4092__auto___384364 = cljs.core.seq.call(null,seq__384347_384353);if(temp__4092__auto___384364)
{var seq__384347_384365__$1 = temp__4092__auto___384364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384347_384365__$1))
{var c__14708__auto___384366 = cljs.core.chunk_first.call(null,seq__384347_384365__$1);{
var G__384367 = cljs.core.chunk_rest.call(null,seq__384347_384365__$1);
var G__384368 = c__14708__auto___384366;
var G__384369 = cljs.core.count.call(null,c__14708__auto___384366);
var G__384370 = 0;
seq__384347_384353 = G__384367;
chunk__384348_384354 = G__384368;
count__384349_384355 = G__384369;
i__384350_384356 = G__384370;
continue;
}
} else
{var vec__384352_384371 = cljs.core.first.call(null,seq__384347_384365__$1);var attr_384372 = cljs.core.nth.call(null,vec__384352_384371,0,null);var value_384373 = cljs.core.nth.call(null,vec__384352_384371,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_384372),value_384373);
{
var G__384374 = cljs.core.next.call(null,seq__384347_384365__$1);
var G__384375 = null;
var G__384376 = 0;
var G__384377 = 0;
seq__384347_384353 = G__384374;
chunk__384348_384354 = G__384375;
count__384349_384355 = G__384376;
i__384350_384356 = G__384377;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__384382 = cljs.core.seq.call(null,values);var chunk__384383 = null;var count__384384 = 0;var i__384385 = 0;while(true){
if((i__384385 < count__384384))
{var attr = cljs.core._nth.call(null,chunk__384383,i__384385);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__384386 = seq__384382;
var G__384387 = chunk__384383;
var G__384388 = count__384384;
var G__384389 = (i__384385 + 1);
seq__384382 = G__384386;
chunk__384383 = G__384387;
count__384384 = G__384388;
i__384385 = G__384389;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384382);if(temp__4092__auto__)
{var seq__384382__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384382__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384382__$1);{
var G__384390 = cljs.core.chunk_rest.call(null,seq__384382__$1);
var G__384391 = c__14708__auto__;
var G__384392 = cljs.core.count.call(null,c__14708__auto__);
var G__384393 = 0;
seq__384382 = G__384390;
chunk__384383 = G__384391;
count__384384 = G__384392;
i__384385 = G__384393;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__384382__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__384394 = cljs.core.next.call(null,seq__384382__$1);
var G__384395 = null;
var G__384396 = 0;
var G__384397 = 0;
seq__384382 = G__384394;
chunk__384383 = G__384395;
count__384384 = G__384396;
i__384385 = G__384397;
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
{var seq__384404_384410 = cljs.core.seq.call(null,ats);var chunk__384405_384411 = null;var count__384406_384412 = 0;var i__384407_384413 = 0;while(true){
if((i__384407_384413 < count__384406_384412))
{var vec__384408_384414 = cljs.core._nth.call(null,chunk__384405_384411,i__384407_384413);var k_384415 = cljs.core.nth.call(null,vec__384408_384414,0,null);var v_384416 = cljs.core.nth.call(null,vec__384408_384414,1,null);add_map_attrs.call(null,elem,k_384415,v_384416);
{
var G__384417 = seq__384404_384410;
var G__384418 = chunk__384405_384411;
var G__384419 = count__384406_384412;
var G__384420 = (i__384407_384413 + 1);
seq__384404_384410 = G__384417;
chunk__384405_384411 = G__384418;
count__384406_384412 = G__384419;
i__384407_384413 = G__384420;
continue;
}
} else
{var temp__4092__auto___384421 = cljs.core.seq.call(null,seq__384404_384410);if(temp__4092__auto___384421)
{var seq__384404_384422__$1 = temp__4092__auto___384421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384404_384422__$1))
{var c__14708__auto___384423 = cljs.core.chunk_first.call(null,seq__384404_384422__$1);{
var G__384424 = cljs.core.chunk_rest.call(null,seq__384404_384422__$1);
var G__384425 = c__14708__auto___384423;
var G__384426 = cljs.core.count.call(null,c__14708__auto___384423);
var G__384427 = 0;
seq__384404_384410 = G__384424;
chunk__384405_384411 = G__384425;
count__384406_384412 = G__384426;
i__384407_384413 = G__384427;
continue;
}
} else
{var vec__384409_384428 = cljs.core.first.call(null,seq__384404_384422__$1);var k_384429 = cljs.core.nth.call(null,vec__384409_384428,0,null);var v_384430 = cljs.core.nth.call(null,vec__384409_384428,1,null);add_map_attrs.call(null,elem,k_384429,v_384430);
{
var G__384431 = cljs.core.next.call(null,seq__384404_384422__$1);
var G__384432 = null;
var G__384433 = 0;
var G__384434 = 0;
seq__384404_384410 = G__384431;
chunk__384405_384411 = G__384432;
count__384406_384412 = G__384433;
i__384407_384413 = G__384434;
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
var seq__384439_384443 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__384440_384444 = null;var count__384441_384445 = 0;var i__384442_384446 = 0;while(true){
if((i__384442_384446 < count__384441_384445))
{var node_384447 = cljs.core._nth.call(null,chunk__384440_384444,i__384442_384446);goog.dom.appendChild(div,node_384447);
{
var G__384448 = seq__384439_384443;
var G__384449 = chunk__384440_384444;
var G__384450 = count__384441_384445;
var G__384451 = (i__384442_384446 + 1);
seq__384439_384443 = G__384448;
chunk__384440_384444 = G__384449;
count__384441_384445 = G__384450;
i__384442_384446 = G__384451;
continue;
}
} else
{var temp__4092__auto___384452 = cljs.core.seq.call(null,seq__384439_384443);if(temp__4092__auto___384452)
{var seq__384439_384453__$1 = temp__4092__auto___384452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384439_384453__$1))
{var c__14708__auto___384454 = cljs.core.chunk_first.call(null,seq__384439_384453__$1);{
var G__384455 = cljs.core.chunk_rest.call(null,seq__384439_384453__$1);
var G__384456 = c__14708__auto___384454;
var G__384457 = cljs.core.count.call(null,c__14708__auto___384454);
var G__384458 = 0;
seq__384439_384443 = G__384455;
chunk__384440_384444 = G__384456;
count__384441_384445 = G__384457;
i__384442_384446 = G__384458;
continue;
}
} else
{var node_384459 = cljs.core.first.call(null,seq__384439_384453__$1);goog.dom.appendChild(div,node_384459);
{
var G__384460 = cljs.core.next.call(null,seq__384439_384453__$1);
var G__384461 = null;
var G__384462 = 0;
var G__384463 = 0;
seq__384439_384443 = G__384460;
chunk__384440_384444 = G__384461;
count__384441_384445 = G__384462;
i__384442_384446 = G__384463;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__384464_SHARP_){var id = p1__384464_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__384464_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__384466 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__384466,0,null);var txt = cljs.core.nth.call(null,vec__384466,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__384471_384475 = cljs.core.seq.call(null,dfa);var chunk__384472_384476 = null;var count__384473_384477 = 0;var i__384474_384478 = 0;while(true){
if((i__384474_384478 < count__384473_384477))
{var df_384479 = cljs.core._nth.call(null,chunk__384472_384476,i__384474_384478);goog.dom.append(frag,df_384479);
{
var G__384480 = seq__384471_384475;
var G__384481 = chunk__384472_384476;
var G__384482 = count__384473_384477;
var G__384483 = (i__384474_384478 + 1);
seq__384471_384475 = G__384480;
chunk__384472_384476 = G__384481;
count__384473_384477 = G__384482;
i__384474_384478 = G__384483;
continue;
}
} else
{var temp__4092__auto___384484 = cljs.core.seq.call(null,seq__384471_384475);if(temp__4092__auto___384484)
{var seq__384471_384485__$1 = temp__4092__auto___384484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384471_384485__$1))
{var c__14708__auto___384486 = cljs.core.chunk_first.call(null,seq__384471_384485__$1);{
var G__384487 = cljs.core.chunk_rest.call(null,seq__384471_384485__$1);
var G__384488 = c__14708__auto___384486;
var G__384489 = cljs.core.count.call(null,c__14708__auto___384486);
var G__384490 = 0;
seq__384471_384475 = G__384487;
chunk__384472_384476 = G__384488;
count__384473_384477 = G__384489;
i__384474_384478 = G__384490;
continue;
}
} else
{var df_384491 = cljs.core.first.call(null,seq__384471_384485__$1);goog.dom.append(frag,df_384491);
{
var G__384492 = cljs.core.next.call(null,seq__384471_384485__$1);
var G__384493 = null;
var G__384494 = 0;
var G__384495 = 0;
seq__384471_384475 = G__384492;
chunk__384472_384476 = G__384493;
count__384473_384477 = G__384494;
i__384474_384478 = G__384495;
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
{var vec__384498 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__384498,0,null);var tdom = cljs.core.nth.call(null,vec__384498,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__384498,sym,tdom,dom,tsnip){
return (function (p1__384496_SHARP_){return p1__384496_SHARP_.outerHTML;
});})(vec__384498,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t384502 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t384502 = (function (trans,func,extr_multi_node,meta384503){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta384503 = meta384503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t384502.cljs$lang$type = true;
enfocus.core.t384502.cljs$lang$ctorStr = "enfocus.core/t384502";
enfocus.core.t384502.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t384502");
});
enfocus.core.t384502.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t384502.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t384502.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t384502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_384504){var self__ = this;
var _384504__$1 = this;return self__.meta384503;
});
enfocus.core.t384502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_384504,meta384503__$1){var self__ = this;
var _384504__$1 = this;return (new enfocus.core.t384502(self__.trans,self__.func,self__.extr_multi_node,meta384503__$1));
});
enfocus.core.__GT_t384502 = (function __GT_t384502(trans__$1,func__$1,extr_multi_node__$1,meta384503){return (new enfocus.core.t384502(trans__$1,func__$1,extr_multi_node__$1,meta384503));
});
}
return (new enfocus.core.t384502(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t384512 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t384512 = (function (trans,func,multi_node_chain,meta384513){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta384513 = meta384513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t384512.cljs$lang$type = true;
enfocus.core.t384512.cljs$lang$ctorStr = "enfocus.core/t384512";
enfocus.core.t384512.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t384512");
});
enfocus.core.t384512.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t384512.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t384512.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t384512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_384514){var self__ = this;
var _384514__$1 = this;return self__.meta384513;
});
enfocus.core.t384512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_384514,meta384513__$1){var self__ = this;
var _384514__$1 = this;return (new enfocus.core.t384512(self__.trans,self__.func,self__.multi_node_chain,meta384513__$1));
});
enfocus.core.__GT_t384512 = (function __GT_t384512(trans__$1,func__$1,multi_node_chain__$1,meta384513){return (new enfocus.core.t384512(trans__$1,func__$1,multi_node_chain__$1,meta384513));
});
}
return (new enfocus.core.t384512(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__384505_SHARP_){return domina.nodes.call(null,p1__384505_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t384515 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t384515 = (function (trans,func,values,multi_node_chain,meta384516){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta384516 = meta384516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t384515.cljs$lang$type = true;
enfocus.core.t384515.cljs$lang$ctorStr = "enfocus.core/t384515";
enfocus.core.t384515.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t384515");
});
enfocus.core.t384515.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t384515.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t384515.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t384515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_384517){var self__ = this;
var _384517__$1 = this;return self__.meta384516;
});
enfocus.core.t384515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_384517,meta384516__$1){var self__ = this;
var _384517__$1 = this;return (new enfocus.core.t384515(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta384516__$1));
});
enfocus.core.__GT_t384515 = (function __GT_t384515(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta384516){return (new enfocus.core.t384515(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta384516));
});
}
return (new enfocus.core.t384515(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384518_SHARP_,p2__384519_SHARP_){domina.destroy_children_BANG_.call(null,p1__384518_SHARP_);
return domina.append_BANG_.call(null,p1__384518_SHARP_,p2__384519_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__384520){
var values = cljs.core.seq(arglist__384520);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__384521_SHARP_){return domina.set_html_BANG_.call(null,p1__384521_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__384522_SHARP_){var seq__384529 = cljs.core.seq.call(null,pairs);var chunk__384530 = null;var count__384531 = 0;var i__384532 = 0;while(true){
if((i__384532 < count__384531))
{var vec__384533 = cljs.core._nth.call(null,chunk__384530,i__384532);var name = cljs.core.nth.call(null,vec__384533,0,null);var value = cljs.core.nth.call(null,vec__384533,1,null);domina.set_attr_BANG_.call(null,p1__384522_SHARP_,name,value);
{
var G__384535 = seq__384529;
var G__384536 = chunk__384530;
var G__384537 = count__384531;
var G__384538 = (i__384532 + 1);
seq__384529 = G__384535;
chunk__384530 = G__384536;
count__384531 = G__384537;
i__384532 = G__384538;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384529);if(temp__4092__auto__)
{var seq__384529__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384529__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384529__$1);{
var G__384539 = cljs.core.chunk_rest.call(null,seq__384529__$1);
var G__384540 = c__14708__auto__;
var G__384541 = cljs.core.count.call(null,c__14708__auto__);
var G__384542 = 0;
seq__384529 = G__384539;
chunk__384530 = G__384540;
count__384531 = G__384541;
i__384532 = G__384542;
continue;
}
} else
{var vec__384534 = cljs.core.first.call(null,seq__384529__$1);var name = cljs.core.nth.call(null,vec__384534,0,null);var value = cljs.core.nth.call(null,vec__384534,1,null);domina.set_attr_BANG_.call(null,p1__384522_SHARP_,name,value);
{
var G__384543 = cljs.core.next.call(null,seq__384529__$1);
var G__384544 = null;
var G__384545 = 0;
var G__384546 = 0;
seq__384529 = G__384543;
chunk__384530 = G__384544;
count__384531 = G__384545;
i__384532 = G__384546;
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
set_attr.cljs$lang$applyTo = (function (arglist__384547){
var values = cljs.core.seq(arglist__384547);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__384548_SHARP_){var seq__384553 = cljs.core.seq.call(null,values);var chunk__384554 = null;var count__384555 = 0;var i__384556 = 0;while(true){
if((i__384556 < count__384555))
{var name = cljs.core._nth.call(null,chunk__384554,i__384556);domina.remove_attr_BANG_.call(null,p1__384548_SHARP_,name);
{
var G__384557 = seq__384553;
var G__384558 = chunk__384554;
var G__384559 = count__384555;
var G__384560 = (i__384556 + 1);
seq__384553 = G__384557;
chunk__384554 = G__384558;
count__384555 = G__384559;
i__384556 = G__384560;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384553);if(temp__4092__auto__)
{var seq__384553__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384553__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384553__$1);{
var G__384561 = cljs.core.chunk_rest.call(null,seq__384553__$1);
var G__384562 = c__14708__auto__;
var G__384563 = cljs.core.count.call(null,c__14708__auto__);
var G__384564 = 0;
seq__384553 = G__384561;
chunk__384554 = G__384562;
count__384555 = G__384563;
i__384556 = G__384564;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__384553__$1);domina.remove_attr_BANG_.call(null,p1__384548_SHARP_,name);
{
var G__384565 = cljs.core.next.call(null,seq__384553__$1);
var G__384566 = null;
var G__384567 = 0;
var G__384568 = 0;
seq__384553 = G__384565;
chunk__384554 = G__384566;
count__384555 = G__384567;
i__384556 = G__384568;
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
remove_attr.cljs$lang$applyTo = (function (arglist__384569){
var values = cljs.core.seq(arglist__384569);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__384572){var vec__384573 = p__384572;var n = cljs.core.nth.call(null,vec__384573,0,null);var v = cljs.core.nth.call(null,vec__384573,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__384574){
var forms = cljs.core.seq(arglist__384574);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__384575_SHARP_){var seq__384580 = cljs.core.seq.call(null,values);var chunk__384581 = null;var count__384582 = 0;var i__384583 = 0;while(true){
if((i__384583 < count__384582))
{var val = cljs.core._nth.call(null,chunk__384581,i__384583);domina.add_class_BANG_.call(null,p1__384575_SHARP_,val);
{
var G__384584 = seq__384580;
var G__384585 = chunk__384581;
var G__384586 = count__384582;
var G__384587 = (i__384583 + 1);
seq__384580 = G__384584;
chunk__384581 = G__384585;
count__384582 = G__384586;
i__384583 = G__384587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384580);if(temp__4092__auto__)
{var seq__384580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384580__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384580__$1);{
var G__384588 = cljs.core.chunk_rest.call(null,seq__384580__$1);
var G__384589 = c__14708__auto__;
var G__384590 = cljs.core.count.call(null,c__14708__auto__);
var G__384591 = 0;
seq__384580 = G__384588;
chunk__384581 = G__384589;
count__384582 = G__384590;
i__384583 = G__384591;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__384580__$1);domina.add_class_BANG_.call(null,p1__384575_SHARP_,val);
{
var G__384592 = cljs.core.next.call(null,seq__384580__$1);
var G__384593 = null;
var G__384594 = 0;
var G__384595 = 0;
seq__384580 = G__384592;
chunk__384581 = G__384593;
count__384582 = G__384594;
i__384583 = G__384595;
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
add_class.cljs$lang$applyTo = (function (arglist__384596){
var values = cljs.core.seq(arglist__384596);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__384597_SHARP_){var seq__384602 = cljs.core.seq.call(null,values);var chunk__384603 = null;var count__384604 = 0;var i__384605 = 0;while(true){
if((i__384605 < count__384604))
{var val = cljs.core._nth.call(null,chunk__384603,i__384605);domina.remove_class_BANG_.call(null,p1__384597_SHARP_,val);
{
var G__384606 = seq__384602;
var G__384607 = chunk__384603;
var G__384608 = count__384604;
var G__384609 = (i__384605 + 1);
seq__384602 = G__384606;
chunk__384603 = G__384607;
count__384604 = G__384608;
i__384605 = G__384609;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384602);if(temp__4092__auto__)
{var seq__384602__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384602__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384602__$1);{
var G__384610 = cljs.core.chunk_rest.call(null,seq__384602__$1);
var G__384611 = c__14708__auto__;
var G__384612 = cljs.core.count.call(null,c__14708__auto__);
var G__384613 = 0;
seq__384602 = G__384610;
chunk__384603 = G__384611;
count__384604 = G__384612;
i__384605 = G__384613;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__384602__$1);domina.remove_class_BANG_.call(null,p1__384597_SHARP_,val);
{
var G__384614 = cljs.core.next.call(null,seq__384602__$1);
var G__384615 = null;
var G__384616 = 0;
var G__384617 = 0;
seq__384602 = G__384614;
chunk__384603 = G__384615;
count__384604 = G__384616;
i__384605 = G__384617;
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
remove_class.cljs$lang$applyTo = (function (arglist__384618){
var values = cljs.core.seq(arglist__384618);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__384619_SHARP_){return domina.set_classes_BANG_.call(null,p1__384619_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__384620){
var values = cljs.core.seq(arglist__384620);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__384625 = cljs.core.seq.call(null,forms);var chunk__384626 = null;var count__384627 = 0;var i__384628 = 0;while(true){
if((i__384628 < count__384627))
{var fun = cljs.core._nth.call(null,chunk__384626,i__384628);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__384629 = seq__384625;
var G__384630 = chunk__384626;
var G__384631 = count__384627;
var G__384632 = (i__384628 + 1);
seq__384625 = G__384629;
chunk__384626 = G__384630;
count__384627 = G__384631;
i__384628 = G__384632;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384625);if(temp__4092__auto__)
{var seq__384625__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384625__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384625__$1);{
var G__384633 = cljs.core.chunk_rest.call(null,seq__384625__$1);
var G__384634 = c__14708__auto__;
var G__384635 = cljs.core.count.call(null,c__14708__auto__);
var G__384636 = 0;
seq__384625 = G__384633;
chunk__384626 = G__384634;
count__384627 = G__384635;
i__384628 = G__384636;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__384625__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__384637 = cljs.core.next.call(null,seq__384625__$1);
var G__384638 = null;
var G__384639 = 0;
var G__384640 = 0;
seq__384625 = G__384637;
chunk__384626 = G__384638;
count__384627 = G__384639;
i__384628 = G__384640;
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
do__GT_.cljs$lang$applyTo = (function (arglist__384641){
var forms = cljs.core.seq(arglist__384641);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384642_SHARP_,p2__384643_SHARP_){return domina.append_BANG_.call(null,p1__384642_SHARP_,p2__384643_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__384644){
var values = cljs.core.seq(arglist__384644);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384645_SHARP_,p2__384646_SHARP_){return domina.prepend_BANG_.call(null,p1__384645_SHARP_,p2__384646_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__384647){
var values = cljs.core.seq(arglist__384647);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384648_SHARP_,p2__384649_SHARP_){return domina.insert_before_BANG_.call(null,p1__384648_SHARP_,p2__384649_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__384650){
var values = cljs.core.seq(arglist__384650);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384651_SHARP_,p2__384652_SHARP_){return domina.insert_after_BANG_.call(null,p1__384651_SHARP_,p2__384652_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__384653){
var values = cljs.core.seq(arglist__384653);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__384654_SHARP_,p2__384655_SHARP_){return domina.swap_content_BANG_.call(null,p1__384654_SHARP_,p2__384655_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__384656){
var values = cljs.core.seq(arglist__384656);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__384657_SHARP_){return domina.detach_BANG_.call(null,p1__384657_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__384658_SHARP_){var seq__384665 = cljs.core.seq.call(null,pairs);var chunk__384666 = null;var count__384667 = 0;var i__384668 = 0;while(true){
if((i__384668 < count__384667))
{var vec__384669 = cljs.core._nth.call(null,chunk__384666,i__384668);var name = cljs.core.nth.call(null,vec__384669,0,null);var value = cljs.core.nth.call(null,vec__384669,1,null);domina.set_style_BANG_.call(null,p1__384658_SHARP_,name,value);
{
var G__384671 = seq__384665;
var G__384672 = chunk__384666;
var G__384673 = count__384667;
var G__384674 = (i__384668 + 1);
seq__384665 = G__384671;
chunk__384666 = G__384672;
count__384667 = G__384673;
i__384668 = G__384674;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384665);if(temp__4092__auto__)
{var seq__384665__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384665__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384665__$1);{
var G__384675 = cljs.core.chunk_rest.call(null,seq__384665__$1);
var G__384676 = c__14708__auto__;
var G__384677 = cljs.core.count.call(null,c__14708__auto__);
var G__384678 = 0;
seq__384665 = G__384675;
chunk__384666 = G__384676;
count__384667 = G__384677;
i__384668 = G__384678;
continue;
}
} else
{var vec__384670 = cljs.core.first.call(null,seq__384665__$1);var name = cljs.core.nth.call(null,vec__384670,0,null);var value = cljs.core.nth.call(null,vec__384670,1,null);domina.set_style_BANG_.call(null,p1__384658_SHARP_,name,value);
{
var G__384679 = cljs.core.next.call(null,seq__384665__$1);
var G__384680 = null;
var G__384681 = 0;
var G__384682 = 0;
seq__384665 = G__384679;
chunk__384666 = G__384680;
count__384667 = G__384681;
i__384668 = G__384682;
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
set_style.cljs$lang$applyTo = (function (arglist__384683){
var values = cljs.core.seq(arglist__384683);
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
remove_style.cljs$lang$applyTo = (function (arglist__384684){
var values = cljs.core.seq(arglist__384684);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__384685_SHARP_){return domina.set_data_BANG_.call(null,p1__384685_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__384686){
var ttime = cljs.core.first(arglist__384686);
var funcs = cljs.core.rest(arglist__384686);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__384688_SHARP_,p2__384687_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__384687_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__384713_384721 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__384714_384722 = null;var count__384715_384723 = 0;var i__384716_384724 = 0;while(true){
if((i__384716_384724 < count__384715_384723))
{var idx_384725 = cljs.core._nth.call(null,chunk__384714_384722,i__384716_384724);var attr_384726 = pnod.attributes.item(idx_384725);if(cljs.core.truth_(attr_384726.specified))
{attr_384726.value = rep_str.call(null,attr_384726.value);
} else
{}
{
var G__384727 = seq__384713_384721;
var G__384728 = chunk__384714_384722;
var G__384729 = count__384715_384723;
var G__384730 = (i__384716_384724 + 1);
seq__384713_384721 = G__384727;
chunk__384714_384722 = G__384728;
count__384715_384723 = G__384729;
i__384716_384724 = G__384730;
continue;
}
} else
{var temp__4092__auto___384731 = cljs.core.seq.call(null,seq__384713_384721);if(temp__4092__auto___384731)
{var seq__384713_384732__$1 = temp__4092__auto___384731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384713_384732__$1))
{var c__14708__auto___384733 = cljs.core.chunk_first.call(null,seq__384713_384732__$1);{
var G__384734 = cljs.core.chunk_rest.call(null,seq__384713_384732__$1);
var G__384735 = c__14708__auto___384733;
var G__384736 = cljs.core.count.call(null,c__14708__auto___384733);
var G__384737 = 0;
seq__384713_384721 = G__384734;
chunk__384714_384722 = G__384735;
count__384715_384723 = G__384736;
i__384716_384724 = G__384737;
continue;
}
} else
{var idx_384738 = cljs.core.first.call(null,seq__384713_384732__$1);var attr_384739 = pnod.attributes.item(idx_384738);if(cljs.core.truth_(attr_384739.specified))
{attr_384739.value = rep_str.call(null,attr_384739.value);
} else
{}
{
var G__384740 = cljs.core.next.call(null,seq__384713_384732__$1);
var G__384741 = null;
var G__384742 = 0;
var G__384743 = 0;
seq__384713_384721 = G__384740;
chunk__384714_384722 = G__384741;
count__384715_384723 = G__384742;
i__384716_384724 = G__384743;
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
{var seq__384717 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__384718 = null;var count__384719 = 0;var i__384720 = 0;while(true){
if((i__384720 < count__384719))
{var cnode = cljs.core._nth.call(null,chunk__384718,i__384720);rep_node.call(null,cnode);
{
var G__384744 = seq__384717;
var G__384745 = chunk__384718;
var G__384746 = count__384719;
var G__384747 = (i__384720 + 1);
seq__384717 = G__384744;
chunk__384718 = G__384745;
count__384719 = G__384746;
i__384720 = G__384747;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384717);if(temp__4092__auto__)
{var seq__384717__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384717__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384717__$1);{
var G__384748 = cljs.core.chunk_rest.call(null,seq__384717__$1);
var G__384749 = c__14708__auto__;
var G__384750 = cljs.core.count.call(null,c__14708__auto__);
var G__384751 = 0;
seq__384717 = G__384748;
chunk__384718 = G__384749;
count__384719 = G__384750;
i__384720 = G__384751;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__384717__$1);rep_node.call(null,cnode);
{
var G__384752 = cljs.core.next.call(null,seq__384717__$1);
var G__384753 = null;
var G__384754 = 0;
var G__384755 = 0;
seq__384717 = G__384752;
chunk__384718 = G__384753;
count__384719 = G__384754;
i__384720 = G__384755;
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
{var vec__384765 = node_spec;var tag = cljs.core.nth.call(null,vec__384765,0,null);var vec__384766 = cljs.core.nthnext.call(null,vec__384765,1);var m = cljs.core.nth.call(null,vec__384766,0,null);var ms = cljs.core.nthnext.call(null,vec__384766,1);var more = vec__384766;var vec__384767 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__384767,0,null);var segments = cljs.core.nthnext.call(null,vec__384767,1);var id = cljs.core.some.call(null,((function (vec__384765,tag,vec__384766,m,ms,more,vec__384767,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__384765,tag,vec__384766,m,ms,more,vec__384767,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__384765,tag,vec__384766,m,ms,more,vec__384767,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__384765,tag,vec__384766,m,ms,more,vec__384767,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__384768_384774 = cljs.core.seq.call(null,attrs__$2);var chunk__384769_384775 = null;var count__384770_384776 = 0;var i__384771_384777 = 0;while(true){
if((i__384771_384777 < count__384770_384776))
{var vec__384772_384778 = cljs.core._nth.call(null,chunk__384769_384775,i__384771_384777);var key_384779 = cljs.core.nth.call(null,vec__384772_384778,0,null);var val_384780 = cljs.core.nth.call(null,vec__384772_384778,1,null);node.setAttribute(cljs.core.name.call(null,key_384779),val_384780);
{
var G__384781 = seq__384768_384774;
var G__384782 = chunk__384769_384775;
var G__384783 = count__384770_384776;
var G__384784 = (i__384771_384777 + 1);
seq__384768_384774 = G__384781;
chunk__384769_384775 = G__384782;
count__384770_384776 = G__384783;
i__384771_384777 = G__384784;
continue;
}
} else
{var temp__4092__auto___384785 = cljs.core.seq.call(null,seq__384768_384774);if(temp__4092__auto___384785)
{var seq__384768_384786__$1 = temp__4092__auto___384785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384768_384786__$1))
{var c__14708__auto___384787 = cljs.core.chunk_first.call(null,seq__384768_384786__$1);{
var G__384788 = cljs.core.chunk_rest.call(null,seq__384768_384786__$1);
var G__384789 = c__14708__auto___384787;
var G__384790 = cljs.core.count.call(null,c__14708__auto___384787);
var G__384791 = 0;
seq__384768_384774 = G__384788;
chunk__384769_384775 = G__384789;
count__384770_384776 = G__384790;
i__384771_384777 = G__384791;
continue;
}
} else
{var vec__384773_384792 = cljs.core.first.call(null,seq__384768_384786__$1);var key_384793 = cljs.core.nth.call(null,vec__384773_384792,0,null);var val_384794 = cljs.core.nth.call(null,vec__384773_384792,1,null);node.setAttribute(cljs.core.name.call(null,key_384793),val_384794);
{
var G__384795 = cljs.core.next.call(null,seq__384768_384786__$1);
var G__384796 = null;
var G__384797 = 0;
var G__384798 = 0;
seq__384768_384774 = G__384795;
chunk__384769_384775 = G__384796;
count__384770_384776 = G__384797;
i__384771_384777 = G__384798;
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
return (function (p1__384799_SHARP_){return p1__384799_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__384800_SHARP_){return p1__384800_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__384802_SHARP_,p2__384801_SHARP_){var G__384805 = p2__384801_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__384805))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__384805))
{return enfocus.core.read_select_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__384805))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__384805))
{var G__384806 = p2__384801_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__384806))
{return enfocus.core.read_checked_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__384806))
{return enfocus.core.read_checked_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__384806))
{return enfocus.core.read_simple_input.call(null,p2__384801_SHARP_,p1__384802_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__384802_SHARP_;
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
{return p1__384802_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__384807_SHARP_){if((p1__384807_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__384807_SHARP_);
} else
{if((p1__384807_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__384807_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__384807_SHARP_))
{return create_sel_str.call(null,p1__384807_SHARP_);
} else
{if(typeof p1__384807_SHARP_ === 'string')
{return p1__384807_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__384818 = node;if(G__384818)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__384818.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__384818.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__384818);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__384818);
}
} else
{return and__13967__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__384819 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__384819,0,null);var trans__$1 = cljs.core.nth.call(null,vec__384819,1,null);var seq__384820 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__384821 = null;var count__384822 = 0;var i__384823 = 0;while(true){
if((i__384823 < count__384822))
{var vec__384824 = cljs.core._nth.call(null,chunk__384821,i__384823);var sel = cljs.core.nth.call(null,vec__384824,0,null);var t = cljs.core.nth.call(null,vec__384824,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__384826 = seq__384820;
var G__384827 = chunk__384821;
var G__384828 = count__384822;
var G__384829 = (i__384823 + 1);
seq__384820 = G__384826;
chunk__384821 = G__384827;
count__384822 = G__384828;
i__384823 = G__384829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384820);if(temp__4092__auto__)
{var seq__384820__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384820__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384820__$1);{
var G__384830 = cljs.core.chunk_rest.call(null,seq__384820__$1);
var G__384831 = c__14708__auto__;
var G__384832 = cljs.core.count.call(null,c__14708__auto__);
var G__384833 = 0;
seq__384820 = G__384830;
chunk__384821 = G__384831;
count__384822 = G__384832;
i__384823 = G__384833;
continue;
}
} else
{var vec__384825 = cljs.core.first.call(null,seq__384820__$1);var sel = cljs.core.nth.call(null,vec__384825,0,null);var t = cljs.core.nth.call(null,vec__384825,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__384834 = cljs.core.next.call(null,seq__384820__$1);
var G__384835 = null;
var G__384836 = 0;
var G__384837 = 0;
seq__384820 = G__384834;
chunk__384821 = G__384835;
count__384822 = G__384836;
i__384823 = G__384837;
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
i_at.cljs$lang$applyTo = (function (arglist__384838){
var id_mask = cljs.core.first(arglist__384838);
arglist__384838 = cljs.core.next(arglist__384838);
var node = cljs.core.first(arglist__384838);
var trans = cljs.core.rest(arglist__384838);
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
at.cljs$lang$applyTo = (function (arglist__384839){
var node = cljs.core.first(arglist__384839);
var trans = cljs.core.rest(arglist__384839);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__384844 = node;if(G__384844)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__384844.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__384844.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__384844);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__384844);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__384845 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__384845,0,null);var trans__$1 = cljs.core.nth.call(null,vec__384845,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__384846){var vec__384847 = p__384846;var ky = cljs.core.nth.call(null,vec__384847,0,null);var sel = cljs.core.nth.call(null,vec__384847,1,null);var ext = cljs.core.nth.call(null,vec__384847,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__384848){
var node = cljs.core.first(arglist__384848);
var trans = cljs.core.rest(arglist__384848);
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