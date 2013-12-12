// Compiled by ClojureScript 0.0-2080
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
enfocus.core.ISelector = (function (){var obj80356 = {};return obj80356;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13809__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (enfocus.core.select[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (enfocus.core.select["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (enfocus.core.select[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (enfocus.core.select["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (enfocus.core.select[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (enfocus.core.select["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
enfocus.core.ITransform = (function (){var obj80358 = {};return obj80358;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13809__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13809__auto__ = this$;if(and__13809__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13809__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14424__auto__ = (((this$ == null))?null:this$);return (function (){var or__13821__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13809__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13809__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13809__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__80359_SHARP_){if(typeof p1__80359_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__80359_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__80359_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__80366_80372 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__80367_80373 = null;var count__80368_80374 = 0;var i__80369_80375 = 0;while(true){
if((i__80369_80375 < count__80368_80374))
{var vec__80370_80376 = cljs.core._nth.call(null,chunk__80367_80373,i__80369_80375);var attr_80377 = cljs.core.nth.call(null,vec__80370_80376,0,null);var value_80378 = cljs.core.nth.call(null,vec__80370_80376,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_80377),value_80378);
{
var G__80379 = seq__80366_80372;
var G__80380 = chunk__80367_80373;
var G__80381 = count__80368_80374;
var G__80382 = (i__80369_80375 + 1);
seq__80366_80372 = G__80379;
chunk__80367_80373 = G__80380;
count__80368_80374 = G__80381;
i__80369_80375 = G__80382;
continue;
}
} else
{var temp__4092__auto___80383 = cljs.core.seq.call(null,seq__80366_80372);if(temp__4092__auto___80383)
{var seq__80366_80384__$1 = temp__4092__auto___80383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80366_80384__$1))
{var c__14545__auto___80385 = cljs.core.chunk_first.call(null,seq__80366_80384__$1);{
var G__80386 = cljs.core.chunk_rest.call(null,seq__80366_80384__$1);
var G__80387 = c__14545__auto___80385;
var G__80388 = cljs.core.count.call(null,c__14545__auto___80385);
var G__80389 = 0;
seq__80366_80372 = G__80386;
chunk__80367_80373 = G__80387;
count__80368_80374 = G__80388;
i__80369_80375 = G__80389;
continue;
}
} else
{var vec__80371_80390 = cljs.core.first.call(null,seq__80366_80384__$1);var attr_80391 = cljs.core.nth.call(null,vec__80371_80390,0,null);var value_80392 = cljs.core.nth.call(null,vec__80371_80390,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_80391),value_80392);
{
var G__80393 = cljs.core.next.call(null,seq__80366_80384__$1);
var G__80394 = null;
var G__80395 = 0;
var G__80396 = 0;
seq__80366_80372 = G__80393;
chunk__80367_80373 = G__80394;
count__80368_80374 = G__80395;
i__80369_80375 = G__80396;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__80401 = cljs.core.seq.call(null,values);var chunk__80402 = null;var count__80403 = 0;var i__80404 = 0;while(true){
if((i__80404 < count__80403))
{var attr = cljs.core._nth.call(null,chunk__80402,i__80404);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__80405 = seq__80401;
var G__80406 = chunk__80402;
var G__80407 = count__80403;
var G__80408 = (i__80404 + 1);
seq__80401 = G__80405;
chunk__80402 = G__80406;
count__80403 = G__80407;
i__80404 = G__80408;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80401);if(temp__4092__auto__)
{var seq__80401__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80401__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80401__$1);{
var G__80409 = cljs.core.chunk_rest.call(null,seq__80401__$1);
var G__80410 = c__14545__auto__;
var G__80411 = cljs.core.count.call(null,c__14545__auto__);
var G__80412 = 0;
seq__80401 = G__80409;
chunk__80402 = G__80410;
count__80403 = G__80411;
i__80404 = G__80412;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__80401__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__80413 = cljs.core.next.call(null,seq__80401__$1);
var G__80414 = null;
var G__80415 = 0;
var G__80416 = 0;
seq__80401 = G__80413;
chunk__80402 = G__80414;
count__80403 = G__80415;
i__80404 = G__80416;
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
{var seq__80423_80429 = cljs.core.seq.call(null,ats);var chunk__80424_80430 = null;var count__80425_80431 = 0;var i__80426_80432 = 0;while(true){
if((i__80426_80432 < count__80425_80431))
{var vec__80427_80433 = cljs.core._nth.call(null,chunk__80424_80430,i__80426_80432);var k_80434 = cljs.core.nth.call(null,vec__80427_80433,0,null);var v_80435 = cljs.core.nth.call(null,vec__80427_80433,1,null);add_map_attrs.call(null,elem,k_80434,v_80435);
{
var G__80436 = seq__80423_80429;
var G__80437 = chunk__80424_80430;
var G__80438 = count__80425_80431;
var G__80439 = (i__80426_80432 + 1);
seq__80423_80429 = G__80436;
chunk__80424_80430 = G__80437;
count__80425_80431 = G__80438;
i__80426_80432 = G__80439;
continue;
}
} else
{var temp__4092__auto___80440 = cljs.core.seq.call(null,seq__80423_80429);if(temp__4092__auto___80440)
{var seq__80423_80441__$1 = temp__4092__auto___80440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80423_80441__$1))
{var c__14545__auto___80442 = cljs.core.chunk_first.call(null,seq__80423_80441__$1);{
var G__80443 = cljs.core.chunk_rest.call(null,seq__80423_80441__$1);
var G__80444 = c__14545__auto___80442;
var G__80445 = cljs.core.count.call(null,c__14545__auto___80442);
var G__80446 = 0;
seq__80423_80429 = G__80443;
chunk__80424_80430 = G__80444;
count__80425_80431 = G__80445;
i__80426_80432 = G__80446;
continue;
}
} else
{var vec__80428_80447 = cljs.core.first.call(null,seq__80423_80441__$1);var k_80448 = cljs.core.nth.call(null,vec__80428_80447,0,null);var v_80449 = cljs.core.nth.call(null,vec__80428_80447,1,null);add_map_attrs.call(null,elem,k_80448,v_80449);
{
var G__80450 = cljs.core.next.call(null,seq__80423_80441__$1);
var G__80451 = null;
var G__80452 = 0;
var G__80453 = 0;
seq__80423_80429 = G__80450;
chunk__80424_80430 = G__80451;
count__80425_80431 = G__80452;
i__80426_80432 = G__80453;
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
var seq__80458_80462 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__80459_80463 = null;var count__80460_80464 = 0;var i__80461_80465 = 0;while(true){
if((i__80461_80465 < count__80460_80464))
{var node_80466 = cljs.core._nth.call(null,chunk__80459_80463,i__80461_80465);goog.dom.appendChild(div,node_80466);
{
var G__80467 = seq__80458_80462;
var G__80468 = chunk__80459_80463;
var G__80469 = count__80460_80464;
var G__80470 = (i__80461_80465 + 1);
seq__80458_80462 = G__80467;
chunk__80459_80463 = G__80468;
count__80460_80464 = G__80469;
i__80461_80465 = G__80470;
continue;
}
} else
{var temp__4092__auto___80471 = cljs.core.seq.call(null,seq__80458_80462);if(temp__4092__auto___80471)
{var seq__80458_80472__$1 = temp__4092__auto___80471;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80458_80472__$1))
{var c__14545__auto___80473 = cljs.core.chunk_first.call(null,seq__80458_80472__$1);{
var G__80474 = cljs.core.chunk_rest.call(null,seq__80458_80472__$1);
var G__80475 = c__14545__auto___80473;
var G__80476 = cljs.core.count.call(null,c__14545__auto___80473);
var G__80477 = 0;
seq__80458_80462 = G__80474;
chunk__80459_80463 = G__80475;
count__80460_80464 = G__80476;
i__80461_80465 = G__80477;
continue;
}
} else
{var node_80478 = cljs.core.first.call(null,seq__80458_80472__$1);goog.dom.appendChild(div,node_80478);
{
var G__80479 = cljs.core.next.call(null,seq__80458_80472__$1);
var G__80480 = null;
var G__80481 = 0;
var G__80482 = 0;
seq__80458_80462 = G__80479;
chunk__80459_80463 = G__80480;
count__80460_80464 = G__80481;
i__80461_80465 = G__80482;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__80483_SHARP_){var id = p1__80483_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__80483_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__80485 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__80485,0,null);var txt = cljs.core.nth.call(null,vec__80485,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__80490_80494 = cljs.core.seq.call(null,dfa);var chunk__80491_80495 = null;var count__80492_80496 = 0;var i__80493_80497 = 0;while(true){
if((i__80493_80497 < count__80492_80496))
{var df_80498 = cljs.core._nth.call(null,chunk__80491_80495,i__80493_80497);goog.dom.append(frag,df_80498);
{
var G__80499 = seq__80490_80494;
var G__80500 = chunk__80491_80495;
var G__80501 = count__80492_80496;
var G__80502 = (i__80493_80497 + 1);
seq__80490_80494 = G__80499;
chunk__80491_80495 = G__80500;
count__80492_80496 = G__80501;
i__80493_80497 = G__80502;
continue;
}
} else
{var temp__4092__auto___80503 = cljs.core.seq.call(null,seq__80490_80494);if(temp__4092__auto___80503)
{var seq__80490_80504__$1 = temp__4092__auto___80503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80490_80504__$1))
{var c__14545__auto___80505 = cljs.core.chunk_first.call(null,seq__80490_80504__$1);{
var G__80506 = cljs.core.chunk_rest.call(null,seq__80490_80504__$1);
var G__80507 = c__14545__auto___80505;
var G__80508 = cljs.core.count.call(null,c__14545__auto___80505);
var G__80509 = 0;
seq__80490_80494 = G__80506;
chunk__80491_80495 = G__80507;
count__80492_80496 = G__80508;
i__80493_80497 = G__80509;
continue;
}
} else
{var df_80510 = cljs.core.first.call(null,seq__80490_80504__$1);goog.dom.append(frag,df_80510);
{
var G__80511 = cljs.core.next.call(null,seq__80490_80504__$1);
var G__80512 = null;
var G__80513 = 0;
var G__80514 = 0;
seq__80490_80494 = G__80511;
chunk__80491_80495 = G__80512;
count__80492_80496 = G__80513;
i__80493_80497 = G__80514;
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
{var vec__80517 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__80517,0,null);var tdom = cljs.core.nth.call(null,vec__80517,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__80517,sym,tdom,dom,tsnip){
return (function (p1__80515_SHARP_){return p1__80515_SHARP_.outerHTML;
});})(vec__80517,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t80521 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t80521 = (function (trans,func,extr_multi_node,meta80522){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta80522 = meta80522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t80521.cljs$lang$type = true;
enfocus.core.t80521.cljs$lang$ctorStr = "enfocus.core/t80521";
enfocus.core.t80521.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t80521");
});
enfocus.core.t80521.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t80521.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t80521.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t80521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80523){var self__ = this;
var _80523__$1 = this;return self__.meta80522;
});
enfocus.core.t80521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80523,meta80522__$1){var self__ = this;
var _80523__$1 = this;return (new enfocus.core.t80521(self__.trans,self__.func,self__.extr_multi_node,meta80522__$1));
});
enfocus.core.__GT_t80521 = (function __GT_t80521(trans__$1,func__$1,extr_multi_node__$1,meta80522){return (new enfocus.core.t80521(trans__$1,func__$1,extr_multi_node__$1,meta80522));
});
}
return (new enfocus.core.t80521(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t80531 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t80531 = (function (trans,func,multi_node_chain,meta80532){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta80532 = meta80532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t80531.cljs$lang$type = true;
enfocus.core.t80531.cljs$lang$ctorStr = "enfocus.core/t80531";
enfocus.core.t80531.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t80531");
});
enfocus.core.t80531.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t80531.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t80531.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t80531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80533){var self__ = this;
var _80533__$1 = this;return self__.meta80532;
});
enfocus.core.t80531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80533,meta80532__$1){var self__ = this;
var _80533__$1 = this;return (new enfocus.core.t80531(self__.trans,self__.func,self__.multi_node_chain,meta80532__$1));
});
enfocus.core.__GT_t80531 = (function __GT_t80531(trans__$1,func__$1,multi_node_chain__$1,meta80532){return (new enfocus.core.t80531(trans__$1,func__$1,multi_node_chain__$1,meta80532));
});
}
return (new enfocus.core.t80531(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__80524_SHARP_){return domina.nodes.call(null,p1__80524_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t80534 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t80534 = (function (trans,func,values,multi_node_chain,meta80535){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta80535 = meta80535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t80534.cljs$lang$type = true;
enfocus.core.t80534.cljs$lang$ctorStr = "enfocus.core/t80534";
enfocus.core.t80534.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t80534");
});
enfocus.core.t80534.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t80534.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t80534.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t80534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80536){var self__ = this;
var _80536__$1 = this;return self__.meta80535;
});
enfocus.core.t80534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80536,meta80535__$1){var self__ = this;
var _80536__$1 = this;return (new enfocus.core.t80534(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta80535__$1));
});
enfocus.core.__GT_t80534 = (function __GT_t80534(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta80535){return (new enfocus.core.t80534(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta80535));
});
}
return (new enfocus.core.t80534(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80537_SHARP_,p2__80538_SHARP_){domina.destroy_children_BANG_.call(null,p1__80537_SHARP_);
return domina.append_BANG_.call(null,p1__80537_SHARP_,p2__80538_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__80539){
var values = cljs.core.seq(arglist__80539);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__80540_SHARP_){return domina.set_html_BANG_.call(null,p1__80540_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__80541_SHARP_){var seq__80548 = cljs.core.seq.call(null,pairs);var chunk__80549 = null;var count__80550 = 0;var i__80551 = 0;while(true){
if((i__80551 < count__80550))
{var vec__80552 = cljs.core._nth.call(null,chunk__80549,i__80551);var name = cljs.core.nth.call(null,vec__80552,0,null);var value = cljs.core.nth.call(null,vec__80552,1,null);domina.set_attr_BANG_.call(null,p1__80541_SHARP_,name,value);
{
var G__80554 = seq__80548;
var G__80555 = chunk__80549;
var G__80556 = count__80550;
var G__80557 = (i__80551 + 1);
seq__80548 = G__80554;
chunk__80549 = G__80555;
count__80550 = G__80556;
i__80551 = G__80557;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80548);if(temp__4092__auto__)
{var seq__80548__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80548__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80548__$1);{
var G__80558 = cljs.core.chunk_rest.call(null,seq__80548__$1);
var G__80559 = c__14545__auto__;
var G__80560 = cljs.core.count.call(null,c__14545__auto__);
var G__80561 = 0;
seq__80548 = G__80558;
chunk__80549 = G__80559;
count__80550 = G__80560;
i__80551 = G__80561;
continue;
}
} else
{var vec__80553 = cljs.core.first.call(null,seq__80548__$1);var name = cljs.core.nth.call(null,vec__80553,0,null);var value = cljs.core.nth.call(null,vec__80553,1,null);domina.set_attr_BANG_.call(null,p1__80541_SHARP_,name,value);
{
var G__80562 = cljs.core.next.call(null,seq__80548__$1);
var G__80563 = null;
var G__80564 = 0;
var G__80565 = 0;
seq__80548 = G__80562;
chunk__80549 = G__80563;
count__80550 = G__80564;
i__80551 = G__80565;
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
set_attr.cljs$lang$applyTo = (function (arglist__80566){
var values = cljs.core.seq(arglist__80566);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__80567_SHARP_){var seq__80572 = cljs.core.seq.call(null,values);var chunk__80573 = null;var count__80574 = 0;var i__80575 = 0;while(true){
if((i__80575 < count__80574))
{var name = cljs.core._nth.call(null,chunk__80573,i__80575);domina.remove_attr_BANG_.call(null,p1__80567_SHARP_,name);
{
var G__80576 = seq__80572;
var G__80577 = chunk__80573;
var G__80578 = count__80574;
var G__80579 = (i__80575 + 1);
seq__80572 = G__80576;
chunk__80573 = G__80577;
count__80574 = G__80578;
i__80575 = G__80579;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80572);if(temp__4092__auto__)
{var seq__80572__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80572__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80572__$1);{
var G__80580 = cljs.core.chunk_rest.call(null,seq__80572__$1);
var G__80581 = c__14545__auto__;
var G__80582 = cljs.core.count.call(null,c__14545__auto__);
var G__80583 = 0;
seq__80572 = G__80580;
chunk__80573 = G__80581;
count__80574 = G__80582;
i__80575 = G__80583;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__80572__$1);domina.remove_attr_BANG_.call(null,p1__80567_SHARP_,name);
{
var G__80584 = cljs.core.next.call(null,seq__80572__$1);
var G__80585 = null;
var G__80586 = 0;
var G__80587 = 0;
seq__80572 = G__80584;
chunk__80573 = G__80585;
count__80574 = G__80586;
i__80575 = G__80587;
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
remove_attr.cljs$lang$applyTo = (function (arglist__80588){
var values = cljs.core.seq(arglist__80588);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__80591){var vec__80592 = p__80591;var n = cljs.core.nth.call(null,vec__80592,0,null);var v = cljs.core.nth.call(null,vec__80592,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__80593){
var forms = cljs.core.seq(arglist__80593);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__80594_SHARP_){var seq__80599 = cljs.core.seq.call(null,values);var chunk__80600 = null;var count__80601 = 0;var i__80602 = 0;while(true){
if((i__80602 < count__80601))
{var val = cljs.core._nth.call(null,chunk__80600,i__80602);domina.add_class_BANG_.call(null,p1__80594_SHARP_,val);
{
var G__80603 = seq__80599;
var G__80604 = chunk__80600;
var G__80605 = count__80601;
var G__80606 = (i__80602 + 1);
seq__80599 = G__80603;
chunk__80600 = G__80604;
count__80601 = G__80605;
i__80602 = G__80606;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80599);if(temp__4092__auto__)
{var seq__80599__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80599__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80599__$1);{
var G__80607 = cljs.core.chunk_rest.call(null,seq__80599__$1);
var G__80608 = c__14545__auto__;
var G__80609 = cljs.core.count.call(null,c__14545__auto__);
var G__80610 = 0;
seq__80599 = G__80607;
chunk__80600 = G__80608;
count__80601 = G__80609;
i__80602 = G__80610;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__80599__$1);domina.add_class_BANG_.call(null,p1__80594_SHARP_,val);
{
var G__80611 = cljs.core.next.call(null,seq__80599__$1);
var G__80612 = null;
var G__80613 = 0;
var G__80614 = 0;
seq__80599 = G__80611;
chunk__80600 = G__80612;
count__80601 = G__80613;
i__80602 = G__80614;
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
add_class.cljs$lang$applyTo = (function (arglist__80615){
var values = cljs.core.seq(arglist__80615);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__80616_SHARP_){var seq__80621 = cljs.core.seq.call(null,values);var chunk__80622 = null;var count__80623 = 0;var i__80624 = 0;while(true){
if((i__80624 < count__80623))
{var val = cljs.core._nth.call(null,chunk__80622,i__80624);domina.remove_class_BANG_.call(null,p1__80616_SHARP_,val);
{
var G__80625 = seq__80621;
var G__80626 = chunk__80622;
var G__80627 = count__80623;
var G__80628 = (i__80624 + 1);
seq__80621 = G__80625;
chunk__80622 = G__80626;
count__80623 = G__80627;
i__80624 = G__80628;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80621);if(temp__4092__auto__)
{var seq__80621__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80621__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80621__$1);{
var G__80629 = cljs.core.chunk_rest.call(null,seq__80621__$1);
var G__80630 = c__14545__auto__;
var G__80631 = cljs.core.count.call(null,c__14545__auto__);
var G__80632 = 0;
seq__80621 = G__80629;
chunk__80622 = G__80630;
count__80623 = G__80631;
i__80624 = G__80632;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__80621__$1);domina.remove_class_BANG_.call(null,p1__80616_SHARP_,val);
{
var G__80633 = cljs.core.next.call(null,seq__80621__$1);
var G__80634 = null;
var G__80635 = 0;
var G__80636 = 0;
seq__80621 = G__80633;
chunk__80622 = G__80634;
count__80623 = G__80635;
i__80624 = G__80636;
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
remove_class.cljs$lang$applyTo = (function (arglist__80637){
var values = cljs.core.seq(arglist__80637);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__80638_SHARP_){return domina.set_classes_BANG_.call(null,p1__80638_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__80639){
var values = cljs.core.seq(arglist__80639);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__80644 = cljs.core.seq.call(null,forms);var chunk__80645 = null;var count__80646 = 0;var i__80647 = 0;while(true){
if((i__80647 < count__80646))
{var fun = cljs.core._nth.call(null,chunk__80645,i__80647);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__80648 = seq__80644;
var G__80649 = chunk__80645;
var G__80650 = count__80646;
var G__80651 = (i__80647 + 1);
seq__80644 = G__80648;
chunk__80645 = G__80649;
count__80646 = G__80650;
i__80647 = G__80651;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80644);if(temp__4092__auto__)
{var seq__80644__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80644__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80644__$1);{
var G__80652 = cljs.core.chunk_rest.call(null,seq__80644__$1);
var G__80653 = c__14545__auto__;
var G__80654 = cljs.core.count.call(null,c__14545__auto__);
var G__80655 = 0;
seq__80644 = G__80652;
chunk__80645 = G__80653;
count__80646 = G__80654;
i__80647 = G__80655;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__80644__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__80656 = cljs.core.next.call(null,seq__80644__$1);
var G__80657 = null;
var G__80658 = 0;
var G__80659 = 0;
seq__80644 = G__80656;
chunk__80645 = G__80657;
count__80646 = G__80658;
i__80647 = G__80659;
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
do__GT_.cljs$lang$applyTo = (function (arglist__80660){
var forms = cljs.core.seq(arglist__80660);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80661_SHARP_,p2__80662_SHARP_){return domina.append_BANG_.call(null,p1__80661_SHARP_,p2__80662_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__80663){
var values = cljs.core.seq(arglist__80663);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80664_SHARP_,p2__80665_SHARP_){return domina.prepend_BANG_.call(null,p1__80664_SHARP_,p2__80665_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__80666){
var values = cljs.core.seq(arglist__80666);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80667_SHARP_,p2__80668_SHARP_){return domina.insert_before_BANG_.call(null,p1__80667_SHARP_,p2__80668_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__80669){
var values = cljs.core.seq(arglist__80669);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80670_SHARP_,p2__80671_SHARP_){return domina.insert_after_BANG_.call(null,p1__80670_SHARP_,p2__80671_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__80672){
var values = cljs.core.seq(arglist__80672);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__80673_SHARP_,p2__80674_SHARP_){return domina.swap_content_BANG_.call(null,p1__80673_SHARP_,p2__80674_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__80675){
var values = cljs.core.seq(arglist__80675);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__80676_SHARP_){return domina.detach_BANG_.call(null,p1__80676_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__80677_SHARP_){var seq__80684 = cljs.core.seq.call(null,pairs);var chunk__80685 = null;var count__80686 = 0;var i__80687 = 0;while(true){
if((i__80687 < count__80686))
{var vec__80688 = cljs.core._nth.call(null,chunk__80685,i__80687);var name = cljs.core.nth.call(null,vec__80688,0,null);var value = cljs.core.nth.call(null,vec__80688,1,null);domina.set_style_BANG_.call(null,p1__80677_SHARP_,name,value);
{
var G__80690 = seq__80684;
var G__80691 = chunk__80685;
var G__80692 = count__80686;
var G__80693 = (i__80687 + 1);
seq__80684 = G__80690;
chunk__80685 = G__80691;
count__80686 = G__80692;
i__80687 = G__80693;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80684);if(temp__4092__auto__)
{var seq__80684__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80684__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80684__$1);{
var G__80694 = cljs.core.chunk_rest.call(null,seq__80684__$1);
var G__80695 = c__14545__auto__;
var G__80696 = cljs.core.count.call(null,c__14545__auto__);
var G__80697 = 0;
seq__80684 = G__80694;
chunk__80685 = G__80695;
count__80686 = G__80696;
i__80687 = G__80697;
continue;
}
} else
{var vec__80689 = cljs.core.first.call(null,seq__80684__$1);var name = cljs.core.nth.call(null,vec__80689,0,null);var value = cljs.core.nth.call(null,vec__80689,1,null);domina.set_style_BANG_.call(null,p1__80677_SHARP_,name,value);
{
var G__80698 = cljs.core.next.call(null,seq__80684__$1);
var G__80699 = null;
var G__80700 = 0;
var G__80701 = 0;
seq__80684 = G__80698;
chunk__80685 = G__80699;
count__80686 = G__80700;
i__80687 = G__80701;
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
set_style.cljs$lang$applyTo = (function (arglist__80702){
var values = cljs.core.seq(arglist__80702);
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
remove_style.cljs$lang$applyTo = (function (arglist__80703){
var values = cljs.core.seq(arglist__80703);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__80704_SHARP_){return domina.set_data_BANG_.call(null,p1__80704_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__80705){
var ttime = cljs.core.first(arglist__80705);
var funcs = cljs.core.rest(arglist__80705);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__80707_SHARP_,p2__80706_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__80706_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__80732_80740 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__80733_80741 = null;var count__80734_80742 = 0;var i__80735_80743 = 0;while(true){
if((i__80735_80743 < count__80734_80742))
{var idx_80744 = cljs.core._nth.call(null,chunk__80733_80741,i__80735_80743);var attr_80745 = pnod.attributes.item(idx_80744);if(cljs.core.truth_(attr_80745.specified))
{attr_80745.value = rep_str.call(null,attr_80745.value);
} else
{}
{
var G__80746 = seq__80732_80740;
var G__80747 = chunk__80733_80741;
var G__80748 = count__80734_80742;
var G__80749 = (i__80735_80743 + 1);
seq__80732_80740 = G__80746;
chunk__80733_80741 = G__80747;
count__80734_80742 = G__80748;
i__80735_80743 = G__80749;
continue;
}
} else
{var temp__4092__auto___80750 = cljs.core.seq.call(null,seq__80732_80740);if(temp__4092__auto___80750)
{var seq__80732_80751__$1 = temp__4092__auto___80750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80732_80751__$1))
{var c__14545__auto___80752 = cljs.core.chunk_first.call(null,seq__80732_80751__$1);{
var G__80753 = cljs.core.chunk_rest.call(null,seq__80732_80751__$1);
var G__80754 = c__14545__auto___80752;
var G__80755 = cljs.core.count.call(null,c__14545__auto___80752);
var G__80756 = 0;
seq__80732_80740 = G__80753;
chunk__80733_80741 = G__80754;
count__80734_80742 = G__80755;
i__80735_80743 = G__80756;
continue;
}
} else
{var idx_80757 = cljs.core.first.call(null,seq__80732_80751__$1);var attr_80758 = pnod.attributes.item(idx_80757);if(cljs.core.truth_(attr_80758.specified))
{attr_80758.value = rep_str.call(null,attr_80758.value);
} else
{}
{
var G__80759 = cljs.core.next.call(null,seq__80732_80751__$1);
var G__80760 = null;
var G__80761 = 0;
var G__80762 = 0;
seq__80732_80740 = G__80759;
chunk__80733_80741 = G__80760;
count__80734_80742 = G__80761;
i__80735_80743 = G__80762;
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
{var seq__80736 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__80737 = null;var count__80738 = 0;var i__80739 = 0;while(true){
if((i__80739 < count__80738))
{var cnode = cljs.core._nth.call(null,chunk__80737,i__80739);rep_node.call(null,cnode);
{
var G__80763 = seq__80736;
var G__80764 = chunk__80737;
var G__80765 = count__80738;
var G__80766 = (i__80739 + 1);
seq__80736 = G__80763;
chunk__80737 = G__80764;
count__80738 = G__80765;
i__80739 = G__80766;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80736);if(temp__4092__auto__)
{var seq__80736__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80736__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80736__$1);{
var G__80767 = cljs.core.chunk_rest.call(null,seq__80736__$1);
var G__80768 = c__14545__auto__;
var G__80769 = cljs.core.count.call(null,c__14545__auto__);
var G__80770 = 0;
seq__80736 = G__80767;
chunk__80737 = G__80768;
count__80738 = G__80769;
i__80739 = G__80770;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__80736__$1);rep_node.call(null,cnode);
{
var G__80771 = cljs.core.next.call(null,seq__80736__$1);
var G__80772 = null;
var G__80773 = 0;
var G__80774 = 0;
seq__80736 = G__80771;
chunk__80737 = G__80772;
count__80738 = G__80773;
i__80739 = G__80774;
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
{var vec__80784 = node_spec;var tag = cljs.core.nth.call(null,vec__80784,0,null);var vec__80785 = cljs.core.nthnext.call(null,vec__80784,1);var m = cljs.core.nth.call(null,vec__80785,0,null);var ms = cljs.core.nthnext.call(null,vec__80785,1);var more = vec__80785;var vec__80786 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__80786,0,null);var segments = cljs.core.nthnext.call(null,vec__80786,1);var id = cljs.core.some.call(null,((function (vec__80784,tag,vec__80785,m,ms,more,vec__80786,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__80784,tag,vec__80785,m,ms,more,vec__80786,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__80784,tag,vec__80785,m,ms,more,vec__80786,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__80784,tag,vec__80785,m,ms,more,vec__80786,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__80787_80793 = cljs.core.seq.call(null,attrs__$2);var chunk__80788_80794 = null;var count__80789_80795 = 0;var i__80790_80796 = 0;while(true){
if((i__80790_80796 < count__80789_80795))
{var vec__80791_80797 = cljs.core._nth.call(null,chunk__80788_80794,i__80790_80796);var key_80798 = cljs.core.nth.call(null,vec__80791_80797,0,null);var val_80799 = cljs.core.nth.call(null,vec__80791_80797,1,null);node.setAttribute(cljs.core.name.call(null,key_80798),val_80799);
{
var G__80800 = seq__80787_80793;
var G__80801 = chunk__80788_80794;
var G__80802 = count__80789_80795;
var G__80803 = (i__80790_80796 + 1);
seq__80787_80793 = G__80800;
chunk__80788_80794 = G__80801;
count__80789_80795 = G__80802;
i__80790_80796 = G__80803;
continue;
}
} else
{var temp__4092__auto___80804 = cljs.core.seq.call(null,seq__80787_80793);if(temp__4092__auto___80804)
{var seq__80787_80805__$1 = temp__4092__auto___80804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80787_80805__$1))
{var c__14545__auto___80806 = cljs.core.chunk_first.call(null,seq__80787_80805__$1);{
var G__80807 = cljs.core.chunk_rest.call(null,seq__80787_80805__$1);
var G__80808 = c__14545__auto___80806;
var G__80809 = cljs.core.count.call(null,c__14545__auto___80806);
var G__80810 = 0;
seq__80787_80793 = G__80807;
chunk__80788_80794 = G__80808;
count__80789_80795 = G__80809;
i__80790_80796 = G__80810;
continue;
}
} else
{var vec__80792_80811 = cljs.core.first.call(null,seq__80787_80805__$1);var key_80812 = cljs.core.nth.call(null,vec__80792_80811,0,null);var val_80813 = cljs.core.nth.call(null,vec__80792_80811,1,null);node.setAttribute(cljs.core.name.call(null,key_80812),val_80813);
{
var G__80814 = cljs.core.next.call(null,seq__80787_80805__$1);
var G__80815 = null;
var G__80816 = 0;
var G__80817 = 0;
seq__80787_80793 = G__80814;
chunk__80788_80794 = G__80815;
count__80789_80795 = G__80816;
i__80790_80796 = G__80817;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13809__auto__ = el.checked;if(cljs.core.truth_(and__13809__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13809__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__80818_SHARP_){return p1__80818_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__80819_SHARP_){return p1__80819_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__80821_SHARP_,p2__80820_SHARP_){var G__80824 = p2__80820_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__80824))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__80824))
{return enfocus.core.read_select_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__80824))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__80824))
{var G__80825 = p2__80820_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__80825))
{return enfocus.core.read_checked_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__80825))
{return enfocus.core.read_checked_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__80825))
{return enfocus.core.read_simple_input.call(null,p2__80820_SHARP_,p1__80821_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__80821_SHARP_;
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
{return p1__80821_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__80826_SHARP_){if((p1__80826_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__80826_SHARP_);
} else
{if((p1__80826_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__80826_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__80826_SHARP_))
{return create_sel_str.call(null,p1__80826_SHARP_);
} else
{if(typeof p1__80826_SHARP_ === 'string')
{return p1__80826_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13821__auto__ = func;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13809__auto__ = !((node == null));if(and__13809__auto__)
{var G__80837 = node;if(G__80837)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__80837.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__80837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__80837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__80837);
}
} else
{return and__13809__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__80838 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__80838,0,null);var trans__$1 = cljs.core.nth.call(null,vec__80838,1,null);var seq__80839 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__80840 = null;var count__80841 = 0;var i__80842 = 0;while(true){
if((i__80842 < count__80841))
{var vec__80843 = cljs.core._nth.call(null,chunk__80840,i__80842);var sel = cljs.core.nth.call(null,vec__80843,0,null);var t = cljs.core.nth.call(null,vec__80843,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__80845 = seq__80839;
var G__80846 = chunk__80840;
var G__80847 = count__80841;
var G__80848 = (i__80842 + 1);
seq__80839 = G__80845;
chunk__80840 = G__80846;
count__80841 = G__80847;
i__80842 = G__80848;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80839);if(temp__4092__auto__)
{var seq__80839__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80839__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80839__$1);{
var G__80849 = cljs.core.chunk_rest.call(null,seq__80839__$1);
var G__80850 = c__14545__auto__;
var G__80851 = cljs.core.count.call(null,c__14545__auto__);
var G__80852 = 0;
seq__80839 = G__80849;
chunk__80840 = G__80850;
count__80841 = G__80851;
i__80842 = G__80852;
continue;
}
} else
{var vec__80844 = cljs.core.first.call(null,seq__80839__$1);var sel = cljs.core.nth.call(null,vec__80844,0,null);var t = cljs.core.nth.call(null,vec__80844,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__80853 = cljs.core.next.call(null,seq__80839__$1);
var G__80854 = null;
var G__80855 = 0;
var G__80856 = 0;
seq__80839 = G__80853;
chunk__80840 = G__80854;
count__80841 = G__80855;
i__80842 = G__80856;
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
i_at.cljs$lang$applyTo = (function (arglist__80857){
var id_mask = cljs.core.first(arglist__80857);
arglist__80857 = cljs.core.next(arglist__80857);
var node = cljs.core.first(arglist__80857);
var trans = cljs.core.rest(arglist__80857);
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
at.cljs$lang$applyTo = (function (arglist__80858){
var node = cljs.core.first(arglist__80858);
var trans = cljs.core.rest(arglist__80858);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__80863 = node;if(G__80863)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__80863.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__80863.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__80863);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__80863);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__80864 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__80864,0,null);var trans__$1 = cljs.core.nth.call(null,vec__80864,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__80865){var vec__80866 = p__80865;var ky = cljs.core.nth.call(null,vec__80866,0,null);var sel = cljs.core.nth.call(null,vec__80866,1,null);var ext = cljs.core.nth.call(null,vec__80866,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__80867){
var node = cljs.core.first(arglist__80867);
var trans = cljs.core.rest(arglist__80867);
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