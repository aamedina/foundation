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
enfocus.core.ISelector = (function (){var obj327357 = {};return obj327357;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
enfocus.core.ITransform = (function (){var obj327359 = {};return obj327359;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13813__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13813__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__327360_SHARP_){if(typeof p1__327360_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__327360_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__327360_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__327367_327373 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__327368_327374 = null;var count__327369_327375 = 0;var i__327370_327376 = 0;while(true){
if((i__327370_327376 < count__327369_327375))
{var vec__327371_327377 = cljs.core._nth.call(null,chunk__327368_327374,i__327370_327376);var attr_327378 = cljs.core.nth.call(null,vec__327371_327377,0,null);var value_327379 = cljs.core.nth.call(null,vec__327371_327377,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_327378),value_327379);
{
var G__327380 = seq__327367_327373;
var G__327381 = chunk__327368_327374;
var G__327382 = count__327369_327375;
var G__327383 = (i__327370_327376 + 1);
seq__327367_327373 = G__327380;
chunk__327368_327374 = G__327381;
count__327369_327375 = G__327382;
i__327370_327376 = G__327383;
continue;
}
} else
{var temp__4092__auto___327384 = cljs.core.seq.call(null,seq__327367_327373);if(temp__4092__auto___327384)
{var seq__327367_327385__$1 = temp__4092__auto___327384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327367_327385__$1))
{var c__14549__auto___327386 = cljs.core.chunk_first.call(null,seq__327367_327385__$1);{
var G__327387 = cljs.core.chunk_rest.call(null,seq__327367_327385__$1);
var G__327388 = c__14549__auto___327386;
var G__327389 = cljs.core.count.call(null,c__14549__auto___327386);
var G__327390 = 0;
seq__327367_327373 = G__327387;
chunk__327368_327374 = G__327388;
count__327369_327375 = G__327389;
i__327370_327376 = G__327390;
continue;
}
} else
{var vec__327372_327391 = cljs.core.first.call(null,seq__327367_327385__$1);var attr_327392 = cljs.core.nth.call(null,vec__327372_327391,0,null);var value_327393 = cljs.core.nth.call(null,vec__327372_327391,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_327392),value_327393);
{
var G__327394 = cljs.core.next.call(null,seq__327367_327385__$1);
var G__327395 = null;
var G__327396 = 0;
var G__327397 = 0;
seq__327367_327373 = G__327394;
chunk__327368_327374 = G__327395;
count__327369_327375 = G__327396;
i__327370_327376 = G__327397;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__327402 = cljs.core.seq.call(null,values);var chunk__327403 = null;var count__327404 = 0;var i__327405 = 0;while(true){
if((i__327405 < count__327404))
{var attr = cljs.core._nth.call(null,chunk__327403,i__327405);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__327406 = seq__327402;
var G__327407 = chunk__327403;
var G__327408 = count__327404;
var G__327409 = (i__327405 + 1);
seq__327402 = G__327406;
chunk__327403 = G__327407;
count__327404 = G__327408;
i__327405 = G__327409;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327402);if(temp__4092__auto__)
{var seq__327402__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327402__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327402__$1);{
var G__327410 = cljs.core.chunk_rest.call(null,seq__327402__$1);
var G__327411 = c__14549__auto__;
var G__327412 = cljs.core.count.call(null,c__14549__auto__);
var G__327413 = 0;
seq__327402 = G__327410;
chunk__327403 = G__327411;
count__327404 = G__327412;
i__327405 = G__327413;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__327402__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__327414 = cljs.core.next.call(null,seq__327402__$1);
var G__327415 = null;
var G__327416 = 0;
var G__327417 = 0;
seq__327402 = G__327414;
chunk__327403 = G__327415;
count__327404 = G__327416;
i__327405 = G__327417;
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
{var seq__327424_327430 = cljs.core.seq.call(null,ats);var chunk__327425_327431 = null;var count__327426_327432 = 0;var i__327427_327433 = 0;while(true){
if((i__327427_327433 < count__327426_327432))
{var vec__327428_327434 = cljs.core._nth.call(null,chunk__327425_327431,i__327427_327433);var k_327435 = cljs.core.nth.call(null,vec__327428_327434,0,null);var v_327436 = cljs.core.nth.call(null,vec__327428_327434,1,null);add_map_attrs.call(null,elem,k_327435,v_327436);
{
var G__327437 = seq__327424_327430;
var G__327438 = chunk__327425_327431;
var G__327439 = count__327426_327432;
var G__327440 = (i__327427_327433 + 1);
seq__327424_327430 = G__327437;
chunk__327425_327431 = G__327438;
count__327426_327432 = G__327439;
i__327427_327433 = G__327440;
continue;
}
} else
{var temp__4092__auto___327441 = cljs.core.seq.call(null,seq__327424_327430);if(temp__4092__auto___327441)
{var seq__327424_327442__$1 = temp__4092__auto___327441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327424_327442__$1))
{var c__14549__auto___327443 = cljs.core.chunk_first.call(null,seq__327424_327442__$1);{
var G__327444 = cljs.core.chunk_rest.call(null,seq__327424_327442__$1);
var G__327445 = c__14549__auto___327443;
var G__327446 = cljs.core.count.call(null,c__14549__auto___327443);
var G__327447 = 0;
seq__327424_327430 = G__327444;
chunk__327425_327431 = G__327445;
count__327426_327432 = G__327446;
i__327427_327433 = G__327447;
continue;
}
} else
{var vec__327429_327448 = cljs.core.first.call(null,seq__327424_327442__$1);var k_327449 = cljs.core.nth.call(null,vec__327429_327448,0,null);var v_327450 = cljs.core.nth.call(null,vec__327429_327448,1,null);add_map_attrs.call(null,elem,k_327449,v_327450);
{
var G__327451 = cljs.core.next.call(null,seq__327424_327442__$1);
var G__327452 = null;
var G__327453 = 0;
var G__327454 = 0;
seq__327424_327430 = G__327451;
chunk__327425_327431 = G__327452;
count__327426_327432 = G__327453;
i__327427_327433 = G__327454;
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
var seq__327459_327463 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__327460_327464 = null;var count__327461_327465 = 0;var i__327462_327466 = 0;while(true){
if((i__327462_327466 < count__327461_327465))
{var node_327467 = cljs.core._nth.call(null,chunk__327460_327464,i__327462_327466);goog.dom.appendChild(div,node_327467);
{
var G__327468 = seq__327459_327463;
var G__327469 = chunk__327460_327464;
var G__327470 = count__327461_327465;
var G__327471 = (i__327462_327466 + 1);
seq__327459_327463 = G__327468;
chunk__327460_327464 = G__327469;
count__327461_327465 = G__327470;
i__327462_327466 = G__327471;
continue;
}
} else
{var temp__4092__auto___327472 = cljs.core.seq.call(null,seq__327459_327463);if(temp__4092__auto___327472)
{var seq__327459_327473__$1 = temp__4092__auto___327472;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327459_327473__$1))
{var c__14549__auto___327474 = cljs.core.chunk_first.call(null,seq__327459_327473__$1);{
var G__327475 = cljs.core.chunk_rest.call(null,seq__327459_327473__$1);
var G__327476 = c__14549__auto___327474;
var G__327477 = cljs.core.count.call(null,c__14549__auto___327474);
var G__327478 = 0;
seq__327459_327463 = G__327475;
chunk__327460_327464 = G__327476;
count__327461_327465 = G__327477;
i__327462_327466 = G__327478;
continue;
}
} else
{var node_327479 = cljs.core.first.call(null,seq__327459_327473__$1);goog.dom.appendChild(div,node_327479);
{
var G__327480 = cljs.core.next.call(null,seq__327459_327473__$1);
var G__327481 = null;
var G__327482 = 0;
var G__327483 = 0;
seq__327459_327463 = G__327480;
chunk__327460_327464 = G__327481;
count__327461_327465 = G__327482;
i__327462_327466 = G__327483;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__327484_SHARP_){var id = p1__327484_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__327484_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__327486 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__327486,0,null);var txt = cljs.core.nth.call(null,vec__327486,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__327491_327495 = cljs.core.seq.call(null,dfa);var chunk__327492_327496 = null;var count__327493_327497 = 0;var i__327494_327498 = 0;while(true){
if((i__327494_327498 < count__327493_327497))
{var df_327499 = cljs.core._nth.call(null,chunk__327492_327496,i__327494_327498);goog.dom.append(frag,df_327499);
{
var G__327500 = seq__327491_327495;
var G__327501 = chunk__327492_327496;
var G__327502 = count__327493_327497;
var G__327503 = (i__327494_327498 + 1);
seq__327491_327495 = G__327500;
chunk__327492_327496 = G__327501;
count__327493_327497 = G__327502;
i__327494_327498 = G__327503;
continue;
}
} else
{var temp__4092__auto___327504 = cljs.core.seq.call(null,seq__327491_327495);if(temp__4092__auto___327504)
{var seq__327491_327505__$1 = temp__4092__auto___327504;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327491_327505__$1))
{var c__14549__auto___327506 = cljs.core.chunk_first.call(null,seq__327491_327505__$1);{
var G__327507 = cljs.core.chunk_rest.call(null,seq__327491_327505__$1);
var G__327508 = c__14549__auto___327506;
var G__327509 = cljs.core.count.call(null,c__14549__auto___327506);
var G__327510 = 0;
seq__327491_327495 = G__327507;
chunk__327492_327496 = G__327508;
count__327493_327497 = G__327509;
i__327494_327498 = G__327510;
continue;
}
} else
{var df_327511 = cljs.core.first.call(null,seq__327491_327505__$1);goog.dom.append(frag,df_327511);
{
var G__327512 = cljs.core.next.call(null,seq__327491_327505__$1);
var G__327513 = null;
var G__327514 = 0;
var G__327515 = 0;
seq__327491_327495 = G__327512;
chunk__327492_327496 = G__327513;
count__327493_327497 = G__327514;
i__327494_327498 = G__327515;
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
{var vec__327518 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__327518,0,null);var tdom = cljs.core.nth.call(null,vec__327518,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__327518,sym,tdom,dom,tsnip){
return (function (p1__327516_SHARP_){return p1__327516_SHARP_.outerHTML;
});})(vec__327518,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t327522 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t327522 = (function (trans,func,extr_multi_node,meta327523){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta327523 = meta327523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t327522.cljs$lang$type = true;
enfocus.core.t327522.cljs$lang$ctorStr = "enfocus.core/t327522";
enfocus.core.t327522.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t327522");
});
enfocus.core.t327522.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t327522.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t327522.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t327522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327524){var self__ = this;
var _327524__$1 = this;return self__.meta327523;
});
enfocus.core.t327522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327524,meta327523__$1){var self__ = this;
var _327524__$1 = this;return (new enfocus.core.t327522(self__.trans,self__.func,self__.extr_multi_node,meta327523__$1));
});
enfocus.core.__GT_t327522 = (function __GT_t327522(trans__$1,func__$1,extr_multi_node__$1,meta327523){return (new enfocus.core.t327522(trans__$1,func__$1,extr_multi_node__$1,meta327523));
});
}
return (new enfocus.core.t327522(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t327532 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t327532 = (function (trans,func,multi_node_chain,meta327533){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta327533 = meta327533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t327532.cljs$lang$type = true;
enfocus.core.t327532.cljs$lang$ctorStr = "enfocus.core/t327532";
enfocus.core.t327532.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t327532");
});
enfocus.core.t327532.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t327532.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t327532.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t327532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327534){var self__ = this;
var _327534__$1 = this;return self__.meta327533;
});
enfocus.core.t327532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327534,meta327533__$1){var self__ = this;
var _327534__$1 = this;return (new enfocus.core.t327532(self__.trans,self__.func,self__.multi_node_chain,meta327533__$1));
});
enfocus.core.__GT_t327532 = (function __GT_t327532(trans__$1,func__$1,multi_node_chain__$1,meta327533){return (new enfocus.core.t327532(trans__$1,func__$1,multi_node_chain__$1,meta327533));
});
}
return (new enfocus.core.t327532(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__327525_SHARP_){return domina.nodes.call(null,p1__327525_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t327535 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t327535 = (function (trans,func,values,multi_node_chain,meta327536){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta327536 = meta327536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t327535.cljs$lang$type = true;
enfocus.core.t327535.cljs$lang$ctorStr = "enfocus.core/t327535";
enfocus.core.t327535.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t327535");
});
enfocus.core.t327535.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t327535.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t327535.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t327535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_327537){var self__ = this;
var _327537__$1 = this;return self__.meta327536;
});
enfocus.core.t327535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_327537,meta327536__$1){var self__ = this;
var _327537__$1 = this;return (new enfocus.core.t327535(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta327536__$1));
});
enfocus.core.__GT_t327535 = (function __GT_t327535(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta327536){return (new enfocus.core.t327535(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta327536));
});
}
return (new enfocus.core.t327535(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327538_SHARP_,p2__327539_SHARP_){domina.destroy_children_BANG_.call(null,p1__327538_SHARP_);
return domina.append_BANG_.call(null,p1__327538_SHARP_,p2__327539_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__327540){
var values = cljs.core.seq(arglist__327540);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__327541_SHARP_){return domina.set_html_BANG_.call(null,p1__327541_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__327542_SHARP_){var seq__327549 = cljs.core.seq.call(null,pairs);var chunk__327550 = null;var count__327551 = 0;var i__327552 = 0;while(true){
if((i__327552 < count__327551))
{var vec__327553 = cljs.core._nth.call(null,chunk__327550,i__327552);var name = cljs.core.nth.call(null,vec__327553,0,null);var value = cljs.core.nth.call(null,vec__327553,1,null);domina.set_attr_BANG_.call(null,p1__327542_SHARP_,name,value);
{
var G__327555 = seq__327549;
var G__327556 = chunk__327550;
var G__327557 = count__327551;
var G__327558 = (i__327552 + 1);
seq__327549 = G__327555;
chunk__327550 = G__327556;
count__327551 = G__327557;
i__327552 = G__327558;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327549);if(temp__4092__auto__)
{var seq__327549__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327549__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327549__$1);{
var G__327559 = cljs.core.chunk_rest.call(null,seq__327549__$1);
var G__327560 = c__14549__auto__;
var G__327561 = cljs.core.count.call(null,c__14549__auto__);
var G__327562 = 0;
seq__327549 = G__327559;
chunk__327550 = G__327560;
count__327551 = G__327561;
i__327552 = G__327562;
continue;
}
} else
{var vec__327554 = cljs.core.first.call(null,seq__327549__$1);var name = cljs.core.nth.call(null,vec__327554,0,null);var value = cljs.core.nth.call(null,vec__327554,1,null);domina.set_attr_BANG_.call(null,p1__327542_SHARP_,name,value);
{
var G__327563 = cljs.core.next.call(null,seq__327549__$1);
var G__327564 = null;
var G__327565 = 0;
var G__327566 = 0;
seq__327549 = G__327563;
chunk__327550 = G__327564;
count__327551 = G__327565;
i__327552 = G__327566;
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
set_attr.cljs$lang$applyTo = (function (arglist__327567){
var values = cljs.core.seq(arglist__327567);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__327568_SHARP_){var seq__327573 = cljs.core.seq.call(null,values);var chunk__327574 = null;var count__327575 = 0;var i__327576 = 0;while(true){
if((i__327576 < count__327575))
{var name = cljs.core._nth.call(null,chunk__327574,i__327576);domina.remove_attr_BANG_.call(null,p1__327568_SHARP_,name);
{
var G__327577 = seq__327573;
var G__327578 = chunk__327574;
var G__327579 = count__327575;
var G__327580 = (i__327576 + 1);
seq__327573 = G__327577;
chunk__327574 = G__327578;
count__327575 = G__327579;
i__327576 = G__327580;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327573);if(temp__4092__auto__)
{var seq__327573__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327573__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327573__$1);{
var G__327581 = cljs.core.chunk_rest.call(null,seq__327573__$1);
var G__327582 = c__14549__auto__;
var G__327583 = cljs.core.count.call(null,c__14549__auto__);
var G__327584 = 0;
seq__327573 = G__327581;
chunk__327574 = G__327582;
count__327575 = G__327583;
i__327576 = G__327584;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__327573__$1);domina.remove_attr_BANG_.call(null,p1__327568_SHARP_,name);
{
var G__327585 = cljs.core.next.call(null,seq__327573__$1);
var G__327586 = null;
var G__327587 = 0;
var G__327588 = 0;
seq__327573 = G__327585;
chunk__327574 = G__327586;
count__327575 = G__327587;
i__327576 = G__327588;
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
remove_attr.cljs$lang$applyTo = (function (arglist__327589){
var values = cljs.core.seq(arglist__327589);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__327592){var vec__327593 = p__327592;var n = cljs.core.nth.call(null,vec__327593,0,null);var v = cljs.core.nth.call(null,vec__327593,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__327594){
var forms = cljs.core.seq(arglist__327594);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__327595_SHARP_){var seq__327600 = cljs.core.seq.call(null,values);var chunk__327601 = null;var count__327602 = 0;var i__327603 = 0;while(true){
if((i__327603 < count__327602))
{var val = cljs.core._nth.call(null,chunk__327601,i__327603);domina.add_class_BANG_.call(null,p1__327595_SHARP_,val);
{
var G__327604 = seq__327600;
var G__327605 = chunk__327601;
var G__327606 = count__327602;
var G__327607 = (i__327603 + 1);
seq__327600 = G__327604;
chunk__327601 = G__327605;
count__327602 = G__327606;
i__327603 = G__327607;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327600);if(temp__4092__auto__)
{var seq__327600__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327600__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327600__$1);{
var G__327608 = cljs.core.chunk_rest.call(null,seq__327600__$1);
var G__327609 = c__14549__auto__;
var G__327610 = cljs.core.count.call(null,c__14549__auto__);
var G__327611 = 0;
seq__327600 = G__327608;
chunk__327601 = G__327609;
count__327602 = G__327610;
i__327603 = G__327611;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__327600__$1);domina.add_class_BANG_.call(null,p1__327595_SHARP_,val);
{
var G__327612 = cljs.core.next.call(null,seq__327600__$1);
var G__327613 = null;
var G__327614 = 0;
var G__327615 = 0;
seq__327600 = G__327612;
chunk__327601 = G__327613;
count__327602 = G__327614;
i__327603 = G__327615;
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
add_class.cljs$lang$applyTo = (function (arglist__327616){
var values = cljs.core.seq(arglist__327616);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__327617_SHARP_){var seq__327622 = cljs.core.seq.call(null,values);var chunk__327623 = null;var count__327624 = 0;var i__327625 = 0;while(true){
if((i__327625 < count__327624))
{var val = cljs.core._nth.call(null,chunk__327623,i__327625);domina.remove_class_BANG_.call(null,p1__327617_SHARP_,val);
{
var G__327626 = seq__327622;
var G__327627 = chunk__327623;
var G__327628 = count__327624;
var G__327629 = (i__327625 + 1);
seq__327622 = G__327626;
chunk__327623 = G__327627;
count__327624 = G__327628;
i__327625 = G__327629;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327622);if(temp__4092__auto__)
{var seq__327622__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327622__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327622__$1);{
var G__327630 = cljs.core.chunk_rest.call(null,seq__327622__$1);
var G__327631 = c__14549__auto__;
var G__327632 = cljs.core.count.call(null,c__14549__auto__);
var G__327633 = 0;
seq__327622 = G__327630;
chunk__327623 = G__327631;
count__327624 = G__327632;
i__327625 = G__327633;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__327622__$1);domina.remove_class_BANG_.call(null,p1__327617_SHARP_,val);
{
var G__327634 = cljs.core.next.call(null,seq__327622__$1);
var G__327635 = null;
var G__327636 = 0;
var G__327637 = 0;
seq__327622 = G__327634;
chunk__327623 = G__327635;
count__327624 = G__327636;
i__327625 = G__327637;
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
remove_class.cljs$lang$applyTo = (function (arglist__327638){
var values = cljs.core.seq(arglist__327638);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__327639_SHARP_){return domina.set_classes_BANG_.call(null,p1__327639_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__327640){
var values = cljs.core.seq(arglist__327640);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__327645 = cljs.core.seq.call(null,forms);var chunk__327646 = null;var count__327647 = 0;var i__327648 = 0;while(true){
if((i__327648 < count__327647))
{var fun = cljs.core._nth.call(null,chunk__327646,i__327648);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__327649 = seq__327645;
var G__327650 = chunk__327646;
var G__327651 = count__327647;
var G__327652 = (i__327648 + 1);
seq__327645 = G__327649;
chunk__327646 = G__327650;
count__327647 = G__327651;
i__327648 = G__327652;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327645);if(temp__4092__auto__)
{var seq__327645__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327645__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327645__$1);{
var G__327653 = cljs.core.chunk_rest.call(null,seq__327645__$1);
var G__327654 = c__14549__auto__;
var G__327655 = cljs.core.count.call(null,c__14549__auto__);
var G__327656 = 0;
seq__327645 = G__327653;
chunk__327646 = G__327654;
count__327647 = G__327655;
i__327648 = G__327656;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__327645__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__327657 = cljs.core.next.call(null,seq__327645__$1);
var G__327658 = null;
var G__327659 = 0;
var G__327660 = 0;
seq__327645 = G__327657;
chunk__327646 = G__327658;
count__327647 = G__327659;
i__327648 = G__327660;
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
do__GT_.cljs$lang$applyTo = (function (arglist__327661){
var forms = cljs.core.seq(arglist__327661);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327662_SHARP_,p2__327663_SHARP_){return domina.append_BANG_.call(null,p1__327662_SHARP_,p2__327663_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__327664){
var values = cljs.core.seq(arglist__327664);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327665_SHARP_,p2__327666_SHARP_){return domina.prepend_BANG_.call(null,p1__327665_SHARP_,p2__327666_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__327667){
var values = cljs.core.seq(arglist__327667);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327668_SHARP_,p2__327669_SHARP_){return domina.insert_before_BANG_.call(null,p1__327668_SHARP_,p2__327669_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__327670){
var values = cljs.core.seq(arglist__327670);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327671_SHARP_,p2__327672_SHARP_){return domina.insert_after_BANG_.call(null,p1__327671_SHARP_,p2__327672_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__327673){
var values = cljs.core.seq(arglist__327673);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__327674_SHARP_,p2__327675_SHARP_){return domina.swap_content_BANG_.call(null,p1__327674_SHARP_,p2__327675_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__327676){
var values = cljs.core.seq(arglist__327676);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__327677_SHARP_){return domina.detach_BANG_.call(null,p1__327677_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__327678_SHARP_){var seq__327685 = cljs.core.seq.call(null,pairs);var chunk__327686 = null;var count__327687 = 0;var i__327688 = 0;while(true){
if((i__327688 < count__327687))
{var vec__327689 = cljs.core._nth.call(null,chunk__327686,i__327688);var name = cljs.core.nth.call(null,vec__327689,0,null);var value = cljs.core.nth.call(null,vec__327689,1,null);domina.set_style_BANG_.call(null,p1__327678_SHARP_,name,value);
{
var G__327691 = seq__327685;
var G__327692 = chunk__327686;
var G__327693 = count__327687;
var G__327694 = (i__327688 + 1);
seq__327685 = G__327691;
chunk__327686 = G__327692;
count__327687 = G__327693;
i__327688 = G__327694;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327685);if(temp__4092__auto__)
{var seq__327685__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327685__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327685__$1);{
var G__327695 = cljs.core.chunk_rest.call(null,seq__327685__$1);
var G__327696 = c__14549__auto__;
var G__327697 = cljs.core.count.call(null,c__14549__auto__);
var G__327698 = 0;
seq__327685 = G__327695;
chunk__327686 = G__327696;
count__327687 = G__327697;
i__327688 = G__327698;
continue;
}
} else
{var vec__327690 = cljs.core.first.call(null,seq__327685__$1);var name = cljs.core.nth.call(null,vec__327690,0,null);var value = cljs.core.nth.call(null,vec__327690,1,null);domina.set_style_BANG_.call(null,p1__327678_SHARP_,name,value);
{
var G__327699 = cljs.core.next.call(null,seq__327685__$1);
var G__327700 = null;
var G__327701 = 0;
var G__327702 = 0;
seq__327685 = G__327699;
chunk__327686 = G__327700;
count__327687 = G__327701;
i__327688 = G__327702;
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
set_style.cljs$lang$applyTo = (function (arglist__327703){
var values = cljs.core.seq(arglist__327703);
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
remove_style.cljs$lang$applyTo = (function (arglist__327704){
var values = cljs.core.seq(arglist__327704);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__327705_SHARP_){return domina.set_data_BANG_.call(null,p1__327705_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__327706){
var ttime = cljs.core.first(arglist__327706);
var funcs = cljs.core.rest(arglist__327706);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__327708_SHARP_,p2__327707_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__327707_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__327733_327741 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__327734_327742 = null;var count__327735_327743 = 0;var i__327736_327744 = 0;while(true){
if((i__327736_327744 < count__327735_327743))
{var idx_327745 = cljs.core._nth.call(null,chunk__327734_327742,i__327736_327744);var attr_327746 = pnod.attributes.item(idx_327745);if(cljs.core.truth_(attr_327746.specified))
{attr_327746.value = rep_str.call(null,attr_327746.value);
} else
{}
{
var G__327747 = seq__327733_327741;
var G__327748 = chunk__327734_327742;
var G__327749 = count__327735_327743;
var G__327750 = (i__327736_327744 + 1);
seq__327733_327741 = G__327747;
chunk__327734_327742 = G__327748;
count__327735_327743 = G__327749;
i__327736_327744 = G__327750;
continue;
}
} else
{var temp__4092__auto___327751 = cljs.core.seq.call(null,seq__327733_327741);if(temp__4092__auto___327751)
{var seq__327733_327752__$1 = temp__4092__auto___327751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327733_327752__$1))
{var c__14549__auto___327753 = cljs.core.chunk_first.call(null,seq__327733_327752__$1);{
var G__327754 = cljs.core.chunk_rest.call(null,seq__327733_327752__$1);
var G__327755 = c__14549__auto___327753;
var G__327756 = cljs.core.count.call(null,c__14549__auto___327753);
var G__327757 = 0;
seq__327733_327741 = G__327754;
chunk__327734_327742 = G__327755;
count__327735_327743 = G__327756;
i__327736_327744 = G__327757;
continue;
}
} else
{var idx_327758 = cljs.core.first.call(null,seq__327733_327752__$1);var attr_327759 = pnod.attributes.item(idx_327758);if(cljs.core.truth_(attr_327759.specified))
{attr_327759.value = rep_str.call(null,attr_327759.value);
} else
{}
{
var G__327760 = cljs.core.next.call(null,seq__327733_327752__$1);
var G__327761 = null;
var G__327762 = 0;
var G__327763 = 0;
seq__327733_327741 = G__327760;
chunk__327734_327742 = G__327761;
count__327735_327743 = G__327762;
i__327736_327744 = G__327763;
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
{var seq__327737 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__327738 = null;var count__327739 = 0;var i__327740 = 0;while(true){
if((i__327740 < count__327739))
{var cnode = cljs.core._nth.call(null,chunk__327738,i__327740);rep_node.call(null,cnode);
{
var G__327764 = seq__327737;
var G__327765 = chunk__327738;
var G__327766 = count__327739;
var G__327767 = (i__327740 + 1);
seq__327737 = G__327764;
chunk__327738 = G__327765;
count__327739 = G__327766;
i__327740 = G__327767;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327737);if(temp__4092__auto__)
{var seq__327737__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327737__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327737__$1);{
var G__327768 = cljs.core.chunk_rest.call(null,seq__327737__$1);
var G__327769 = c__14549__auto__;
var G__327770 = cljs.core.count.call(null,c__14549__auto__);
var G__327771 = 0;
seq__327737 = G__327768;
chunk__327738 = G__327769;
count__327739 = G__327770;
i__327740 = G__327771;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__327737__$1);rep_node.call(null,cnode);
{
var G__327772 = cljs.core.next.call(null,seq__327737__$1);
var G__327773 = null;
var G__327774 = 0;
var G__327775 = 0;
seq__327737 = G__327772;
chunk__327738 = G__327773;
count__327739 = G__327774;
i__327740 = G__327775;
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
{var vec__327785 = node_spec;var tag = cljs.core.nth.call(null,vec__327785,0,null);var vec__327786 = cljs.core.nthnext.call(null,vec__327785,1);var m = cljs.core.nth.call(null,vec__327786,0,null);var ms = cljs.core.nthnext.call(null,vec__327786,1);var more = vec__327786;var vec__327787 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__327787,0,null);var segments = cljs.core.nthnext.call(null,vec__327787,1);var id = cljs.core.some.call(null,((function (vec__327785,tag,vec__327786,m,ms,more,vec__327787,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__327785,tag,vec__327786,m,ms,more,vec__327787,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__327785,tag,vec__327786,m,ms,more,vec__327787,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__327785,tag,vec__327786,m,ms,more,vec__327787,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__327788_327794 = cljs.core.seq.call(null,attrs__$2);var chunk__327789_327795 = null;var count__327790_327796 = 0;var i__327791_327797 = 0;while(true){
if((i__327791_327797 < count__327790_327796))
{var vec__327792_327798 = cljs.core._nth.call(null,chunk__327789_327795,i__327791_327797);var key_327799 = cljs.core.nth.call(null,vec__327792_327798,0,null);var val_327800 = cljs.core.nth.call(null,vec__327792_327798,1,null);node.setAttribute(cljs.core.name.call(null,key_327799),val_327800);
{
var G__327801 = seq__327788_327794;
var G__327802 = chunk__327789_327795;
var G__327803 = count__327790_327796;
var G__327804 = (i__327791_327797 + 1);
seq__327788_327794 = G__327801;
chunk__327789_327795 = G__327802;
count__327790_327796 = G__327803;
i__327791_327797 = G__327804;
continue;
}
} else
{var temp__4092__auto___327805 = cljs.core.seq.call(null,seq__327788_327794);if(temp__4092__auto___327805)
{var seq__327788_327806__$1 = temp__4092__auto___327805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327788_327806__$1))
{var c__14549__auto___327807 = cljs.core.chunk_first.call(null,seq__327788_327806__$1);{
var G__327808 = cljs.core.chunk_rest.call(null,seq__327788_327806__$1);
var G__327809 = c__14549__auto___327807;
var G__327810 = cljs.core.count.call(null,c__14549__auto___327807);
var G__327811 = 0;
seq__327788_327794 = G__327808;
chunk__327789_327795 = G__327809;
count__327790_327796 = G__327810;
i__327791_327797 = G__327811;
continue;
}
} else
{var vec__327793_327812 = cljs.core.first.call(null,seq__327788_327806__$1);var key_327813 = cljs.core.nth.call(null,vec__327793_327812,0,null);var val_327814 = cljs.core.nth.call(null,vec__327793_327812,1,null);node.setAttribute(cljs.core.name.call(null,key_327813),val_327814);
{
var G__327815 = cljs.core.next.call(null,seq__327788_327806__$1);
var G__327816 = null;
var G__327817 = 0;
var G__327818 = 0;
seq__327788_327794 = G__327815;
chunk__327789_327795 = G__327816;
count__327790_327796 = G__327817;
i__327791_327797 = G__327818;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13813__auto__ = el.checked;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13813__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__327819_SHARP_){return p1__327819_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__327820_SHARP_){return p1__327820_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__327822_SHARP_,p2__327821_SHARP_){var G__327825 = p2__327821_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__327825))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__327825))
{return enfocus.core.read_select_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__327825))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__327825))
{var G__327826 = p2__327821_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__327826))
{return enfocus.core.read_checked_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__327826))
{return enfocus.core.read_checked_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__327826))
{return enfocus.core.read_simple_input.call(null,p2__327821_SHARP_,p1__327822_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__327822_SHARP_;
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
{return p1__327822_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__327827_SHARP_){if((p1__327827_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__327827_SHARP_);
} else
{if((p1__327827_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__327827_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__327827_SHARP_))
{return create_sel_str.call(null,p1__327827_SHARP_);
} else
{if(typeof p1__327827_SHARP_ === 'string')
{return p1__327827_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13825__auto__ = func;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13813__auto__ = !((node == null));if(and__13813__auto__)
{var G__327838 = node;if(G__327838)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__327838.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__327838.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__327838);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__327838);
}
} else
{return and__13813__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__327839 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__327839,0,null);var trans__$1 = cljs.core.nth.call(null,vec__327839,1,null);var seq__327840 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__327841 = null;var count__327842 = 0;var i__327843 = 0;while(true){
if((i__327843 < count__327842))
{var vec__327844 = cljs.core._nth.call(null,chunk__327841,i__327843);var sel = cljs.core.nth.call(null,vec__327844,0,null);var t = cljs.core.nth.call(null,vec__327844,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__327846 = seq__327840;
var G__327847 = chunk__327841;
var G__327848 = count__327842;
var G__327849 = (i__327843 + 1);
seq__327840 = G__327846;
chunk__327841 = G__327847;
count__327842 = G__327848;
i__327843 = G__327849;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327840);if(temp__4092__auto__)
{var seq__327840__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327840__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327840__$1);{
var G__327850 = cljs.core.chunk_rest.call(null,seq__327840__$1);
var G__327851 = c__14549__auto__;
var G__327852 = cljs.core.count.call(null,c__14549__auto__);
var G__327853 = 0;
seq__327840 = G__327850;
chunk__327841 = G__327851;
count__327842 = G__327852;
i__327843 = G__327853;
continue;
}
} else
{var vec__327845 = cljs.core.first.call(null,seq__327840__$1);var sel = cljs.core.nth.call(null,vec__327845,0,null);var t = cljs.core.nth.call(null,vec__327845,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__327854 = cljs.core.next.call(null,seq__327840__$1);
var G__327855 = null;
var G__327856 = 0;
var G__327857 = 0;
seq__327840 = G__327854;
chunk__327841 = G__327855;
count__327842 = G__327856;
i__327843 = G__327857;
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
i_at.cljs$lang$applyTo = (function (arglist__327858){
var id_mask = cljs.core.first(arglist__327858);
arglist__327858 = cljs.core.next(arglist__327858);
var node = cljs.core.first(arglist__327858);
var trans = cljs.core.rest(arglist__327858);
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
at.cljs$lang$applyTo = (function (arglist__327859){
var node = cljs.core.first(arglist__327859);
var trans = cljs.core.rest(arglist__327859);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__327864 = node;if(G__327864)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__327864.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__327864.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__327864);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__327864);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__327865 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__327865,0,null);var trans__$1 = cljs.core.nth.call(null,vec__327865,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__327866){var vec__327867 = p__327866;var ky = cljs.core.nth.call(null,vec__327867,0,null);var sel = cljs.core.nth.call(null,vec__327867,1,null);var ext = cljs.core.nth.call(null,vec__327867,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__327868){
var node = cljs.core.first(arglist__327868);
var trans = cljs.core.rest(arglist__327868);
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