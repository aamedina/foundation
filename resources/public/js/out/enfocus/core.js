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
enfocus.core.ISelector = (function (){var obj275322 = {};return obj275322;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__8211__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (enfocus.core.select[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (enfocus.core.select["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__8211__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (enfocus.core.select[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (enfocus.core.select["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__8211__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (enfocus.core.select[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (enfocus.core.select["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
enfocus.core.ITransform = (function (){var obj275324 = {};return obj275324;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__8211__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__8211__auto__ = this$;if(and__8211__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__8211__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8831__auto__ = (((this$ == null))?null:this$);return (function (){var or__8223__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__8211__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__8211__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8211__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__275325_SHARP_){if(typeof p1__275325_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__275325_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__275325_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__275332_275338 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__275333_275339 = null;var count__275334_275340 = 0;var i__275335_275341 = 0;while(true){
if((i__275335_275341 < count__275334_275340))
{var vec__275336_275342 = cljs.core._nth.call(null,chunk__275333_275339,i__275335_275341);var attr_275343 = cljs.core.nth.call(null,vec__275336_275342,0,null);var value_275344 = cljs.core.nth.call(null,vec__275336_275342,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_275343),value_275344);
{
var G__275345 = seq__275332_275338;
var G__275346 = chunk__275333_275339;
var G__275347 = count__275334_275340;
var G__275348 = (i__275335_275341 + 1);
seq__275332_275338 = G__275345;
chunk__275333_275339 = G__275346;
count__275334_275340 = G__275347;
i__275335_275341 = G__275348;
continue;
}
} else
{var temp__4092__auto___275349 = cljs.core.seq.call(null,seq__275332_275338);if(temp__4092__auto___275349)
{var seq__275332_275350__$1 = temp__4092__auto___275349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275332_275350__$1))
{var c__8952__auto___275351 = cljs.core.chunk_first.call(null,seq__275332_275350__$1);{
var G__275352 = cljs.core.chunk_rest.call(null,seq__275332_275350__$1);
var G__275353 = c__8952__auto___275351;
var G__275354 = cljs.core.count.call(null,c__8952__auto___275351);
var G__275355 = 0;
seq__275332_275338 = G__275352;
chunk__275333_275339 = G__275353;
count__275334_275340 = G__275354;
i__275335_275341 = G__275355;
continue;
}
} else
{var vec__275337_275356 = cljs.core.first.call(null,seq__275332_275350__$1);var attr_275357 = cljs.core.nth.call(null,vec__275337_275356,0,null);var value_275358 = cljs.core.nth.call(null,vec__275337_275356,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_275357),value_275358);
{
var G__275359 = cljs.core.next.call(null,seq__275332_275350__$1);
var G__275360 = null;
var G__275361 = 0;
var G__275362 = 0;
seq__275332_275338 = G__275359;
chunk__275333_275339 = G__275360;
count__275334_275340 = G__275361;
i__275335_275341 = G__275362;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__275367 = cljs.core.seq.call(null,values);var chunk__275368 = null;var count__275369 = 0;var i__275370 = 0;while(true){
if((i__275370 < count__275369))
{var attr = cljs.core._nth.call(null,chunk__275368,i__275370);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__275371 = seq__275367;
var G__275372 = chunk__275368;
var G__275373 = count__275369;
var G__275374 = (i__275370 + 1);
seq__275367 = G__275371;
chunk__275368 = G__275372;
count__275369 = G__275373;
i__275370 = G__275374;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275367);if(temp__4092__auto__)
{var seq__275367__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275367__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275367__$1);{
var G__275375 = cljs.core.chunk_rest.call(null,seq__275367__$1);
var G__275376 = c__8952__auto__;
var G__275377 = cljs.core.count.call(null,c__8952__auto__);
var G__275378 = 0;
seq__275367 = G__275375;
chunk__275368 = G__275376;
count__275369 = G__275377;
i__275370 = G__275378;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__275367__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__275379 = cljs.core.next.call(null,seq__275367__$1);
var G__275380 = null;
var G__275381 = 0;
var G__275382 = 0;
seq__275367 = G__275379;
chunk__275368 = G__275380;
count__275369 = G__275381;
i__275370 = G__275382;
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
{var seq__275389_275395 = cljs.core.seq.call(null,ats);var chunk__275390_275396 = null;var count__275391_275397 = 0;var i__275392_275398 = 0;while(true){
if((i__275392_275398 < count__275391_275397))
{var vec__275393_275399 = cljs.core._nth.call(null,chunk__275390_275396,i__275392_275398);var k_275400 = cljs.core.nth.call(null,vec__275393_275399,0,null);var v_275401 = cljs.core.nth.call(null,vec__275393_275399,1,null);add_map_attrs.call(null,elem,k_275400,v_275401);
{
var G__275402 = seq__275389_275395;
var G__275403 = chunk__275390_275396;
var G__275404 = count__275391_275397;
var G__275405 = (i__275392_275398 + 1);
seq__275389_275395 = G__275402;
chunk__275390_275396 = G__275403;
count__275391_275397 = G__275404;
i__275392_275398 = G__275405;
continue;
}
} else
{var temp__4092__auto___275406 = cljs.core.seq.call(null,seq__275389_275395);if(temp__4092__auto___275406)
{var seq__275389_275407__$1 = temp__4092__auto___275406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275389_275407__$1))
{var c__8952__auto___275408 = cljs.core.chunk_first.call(null,seq__275389_275407__$1);{
var G__275409 = cljs.core.chunk_rest.call(null,seq__275389_275407__$1);
var G__275410 = c__8952__auto___275408;
var G__275411 = cljs.core.count.call(null,c__8952__auto___275408);
var G__275412 = 0;
seq__275389_275395 = G__275409;
chunk__275390_275396 = G__275410;
count__275391_275397 = G__275411;
i__275392_275398 = G__275412;
continue;
}
} else
{var vec__275394_275413 = cljs.core.first.call(null,seq__275389_275407__$1);var k_275414 = cljs.core.nth.call(null,vec__275394_275413,0,null);var v_275415 = cljs.core.nth.call(null,vec__275394_275413,1,null);add_map_attrs.call(null,elem,k_275414,v_275415);
{
var G__275416 = cljs.core.next.call(null,seq__275389_275407__$1);
var G__275417 = null;
var G__275418 = 0;
var G__275419 = 0;
seq__275389_275395 = G__275416;
chunk__275390_275396 = G__275417;
count__275391_275397 = G__275418;
i__275392_275398 = G__275419;
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
var seq__275424_275428 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__275425_275429 = null;var count__275426_275430 = 0;var i__275427_275431 = 0;while(true){
if((i__275427_275431 < count__275426_275430))
{var node_275432 = cljs.core._nth.call(null,chunk__275425_275429,i__275427_275431);goog.dom.appendChild(div,node_275432);
{
var G__275433 = seq__275424_275428;
var G__275434 = chunk__275425_275429;
var G__275435 = count__275426_275430;
var G__275436 = (i__275427_275431 + 1);
seq__275424_275428 = G__275433;
chunk__275425_275429 = G__275434;
count__275426_275430 = G__275435;
i__275427_275431 = G__275436;
continue;
}
} else
{var temp__4092__auto___275437 = cljs.core.seq.call(null,seq__275424_275428);if(temp__4092__auto___275437)
{var seq__275424_275438__$1 = temp__4092__auto___275437;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275424_275438__$1))
{var c__8952__auto___275439 = cljs.core.chunk_first.call(null,seq__275424_275438__$1);{
var G__275440 = cljs.core.chunk_rest.call(null,seq__275424_275438__$1);
var G__275441 = c__8952__auto___275439;
var G__275442 = cljs.core.count.call(null,c__8952__auto___275439);
var G__275443 = 0;
seq__275424_275428 = G__275440;
chunk__275425_275429 = G__275441;
count__275426_275430 = G__275442;
i__275427_275431 = G__275443;
continue;
}
} else
{var node_275444 = cljs.core.first.call(null,seq__275424_275438__$1);goog.dom.appendChild(div,node_275444);
{
var G__275445 = cljs.core.next.call(null,seq__275424_275438__$1);
var G__275446 = null;
var G__275447 = 0;
var G__275448 = 0;
seq__275424_275428 = G__275445;
chunk__275425_275429 = G__275446;
count__275426_275430 = G__275447;
i__275427_275431 = G__275448;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__275449_SHARP_){var id = p1__275449_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__275449_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__275451 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__275451,0,null);var txt = cljs.core.nth.call(null,vec__275451,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__275456_275460 = cljs.core.seq.call(null,dfa);var chunk__275457_275461 = null;var count__275458_275462 = 0;var i__275459_275463 = 0;while(true){
if((i__275459_275463 < count__275458_275462))
{var df_275464 = cljs.core._nth.call(null,chunk__275457_275461,i__275459_275463);goog.dom.append(frag,df_275464);
{
var G__275465 = seq__275456_275460;
var G__275466 = chunk__275457_275461;
var G__275467 = count__275458_275462;
var G__275468 = (i__275459_275463 + 1);
seq__275456_275460 = G__275465;
chunk__275457_275461 = G__275466;
count__275458_275462 = G__275467;
i__275459_275463 = G__275468;
continue;
}
} else
{var temp__4092__auto___275469 = cljs.core.seq.call(null,seq__275456_275460);if(temp__4092__auto___275469)
{var seq__275456_275470__$1 = temp__4092__auto___275469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275456_275470__$1))
{var c__8952__auto___275471 = cljs.core.chunk_first.call(null,seq__275456_275470__$1);{
var G__275472 = cljs.core.chunk_rest.call(null,seq__275456_275470__$1);
var G__275473 = c__8952__auto___275471;
var G__275474 = cljs.core.count.call(null,c__8952__auto___275471);
var G__275475 = 0;
seq__275456_275460 = G__275472;
chunk__275457_275461 = G__275473;
count__275458_275462 = G__275474;
i__275459_275463 = G__275475;
continue;
}
} else
{var df_275476 = cljs.core.first.call(null,seq__275456_275470__$1);goog.dom.append(frag,df_275476);
{
var G__275477 = cljs.core.next.call(null,seq__275456_275470__$1);
var G__275478 = null;
var G__275479 = 0;
var G__275480 = 0;
seq__275456_275460 = G__275477;
chunk__275457_275461 = G__275478;
count__275458_275462 = G__275479;
i__275459_275463 = G__275480;
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
{var vec__275483 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__275483,0,null);var tdom = cljs.core.nth.call(null,vec__275483,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__275483,sym,tdom,dom,tsnip){
return (function (p1__275481_SHARP_){return p1__275481_SHARP_.outerHTML;
});})(vec__275483,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t275487 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t275487 = (function (trans,func,extr_multi_node,meta275488){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta275488 = meta275488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t275487.cljs$lang$type = true;
enfocus.core.t275487.cljs$lang$ctorStr = "enfocus.core/t275487";
enfocus.core.t275487.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t275487");
});
enfocus.core.t275487.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t275487.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t275487.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t275487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_275489){var self__ = this;
var _275489__$1 = this;return self__.meta275488;
});
enfocus.core.t275487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_275489,meta275488__$1){var self__ = this;
var _275489__$1 = this;return (new enfocus.core.t275487(self__.trans,self__.func,self__.extr_multi_node,meta275488__$1));
});
enfocus.core.__GT_t275487 = (function __GT_t275487(trans__$1,func__$1,extr_multi_node__$1,meta275488){return (new enfocus.core.t275487(trans__$1,func__$1,extr_multi_node__$1,meta275488));
});
}
return (new enfocus.core.t275487(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t275497 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t275497 = (function (trans,func,multi_node_chain,meta275498){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta275498 = meta275498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t275497.cljs$lang$type = true;
enfocus.core.t275497.cljs$lang$ctorStr = "enfocus.core/t275497";
enfocus.core.t275497.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t275497");
});
enfocus.core.t275497.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t275497.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t275497.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t275497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_275499){var self__ = this;
var _275499__$1 = this;return self__.meta275498;
});
enfocus.core.t275497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_275499,meta275498__$1){var self__ = this;
var _275499__$1 = this;return (new enfocus.core.t275497(self__.trans,self__.func,self__.multi_node_chain,meta275498__$1));
});
enfocus.core.__GT_t275497 = (function __GT_t275497(trans__$1,func__$1,multi_node_chain__$1,meta275498){return (new enfocus.core.t275497(trans__$1,func__$1,multi_node_chain__$1,meta275498));
});
}
return (new enfocus.core.t275497(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__275490_SHARP_){return domina.nodes.call(null,p1__275490_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t275500 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t275500 = (function (trans,func,values,multi_node_chain,meta275501){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta275501 = meta275501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t275500.cljs$lang$type = true;
enfocus.core.t275500.cljs$lang$ctorStr = "enfocus.core/t275500";
enfocus.core.t275500.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t275500");
});
enfocus.core.t275500.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t275500.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t275500.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t275500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_275502){var self__ = this;
var _275502__$1 = this;return self__.meta275501;
});
enfocus.core.t275500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_275502,meta275501__$1){var self__ = this;
var _275502__$1 = this;return (new enfocus.core.t275500(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta275501__$1));
});
enfocus.core.__GT_t275500 = (function __GT_t275500(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta275501){return (new enfocus.core.t275500(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta275501));
});
}
return (new enfocus.core.t275500(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275503_SHARP_,p2__275504_SHARP_){domina.destroy_children_BANG_.call(null,p1__275503_SHARP_);
return domina.append_BANG_.call(null,p1__275503_SHARP_,p2__275504_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__275505){
var values = cljs.core.seq(arglist__275505);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__275506_SHARP_){return domina.set_html_BANG_.call(null,p1__275506_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__275507_SHARP_){var seq__275514 = cljs.core.seq.call(null,pairs);var chunk__275515 = null;var count__275516 = 0;var i__275517 = 0;while(true){
if((i__275517 < count__275516))
{var vec__275518 = cljs.core._nth.call(null,chunk__275515,i__275517);var name = cljs.core.nth.call(null,vec__275518,0,null);var value = cljs.core.nth.call(null,vec__275518,1,null);domina.set_attr_BANG_.call(null,p1__275507_SHARP_,name,value);
{
var G__275520 = seq__275514;
var G__275521 = chunk__275515;
var G__275522 = count__275516;
var G__275523 = (i__275517 + 1);
seq__275514 = G__275520;
chunk__275515 = G__275521;
count__275516 = G__275522;
i__275517 = G__275523;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275514);if(temp__4092__auto__)
{var seq__275514__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275514__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275514__$1);{
var G__275524 = cljs.core.chunk_rest.call(null,seq__275514__$1);
var G__275525 = c__8952__auto__;
var G__275526 = cljs.core.count.call(null,c__8952__auto__);
var G__275527 = 0;
seq__275514 = G__275524;
chunk__275515 = G__275525;
count__275516 = G__275526;
i__275517 = G__275527;
continue;
}
} else
{var vec__275519 = cljs.core.first.call(null,seq__275514__$1);var name = cljs.core.nth.call(null,vec__275519,0,null);var value = cljs.core.nth.call(null,vec__275519,1,null);domina.set_attr_BANG_.call(null,p1__275507_SHARP_,name,value);
{
var G__275528 = cljs.core.next.call(null,seq__275514__$1);
var G__275529 = null;
var G__275530 = 0;
var G__275531 = 0;
seq__275514 = G__275528;
chunk__275515 = G__275529;
count__275516 = G__275530;
i__275517 = G__275531;
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
set_attr.cljs$lang$applyTo = (function (arglist__275532){
var values = cljs.core.seq(arglist__275532);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__275533_SHARP_){var seq__275538 = cljs.core.seq.call(null,values);var chunk__275539 = null;var count__275540 = 0;var i__275541 = 0;while(true){
if((i__275541 < count__275540))
{var name = cljs.core._nth.call(null,chunk__275539,i__275541);domina.remove_attr_BANG_.call(null,p1__275533_SHARP_,name);
{
var G__275542 = seq__275538;
var G__275543 = chunk__275539;
var G__275544 = count__275540;
var G__275545 = (i__275541 + 1);
seq__275538 = G__275542;
chunk__275539 = G__275543;
count__275540 = G__275544;
i__275541 = G__275545;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275538);if(temp__4092__auto__)
{var seq__275538__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275538__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275538__$1);{
var G__275546 = cljs.core.chunk_rest.call(null,seq__275538__$1);
var G__275547 = c__8952__auto__;
var G__275548 = cljs.core.count.call(null,c__8952__auto__);
var G__275549 = 0;
seq__275538 = G__275546;
chunk__275539 = G__275547;
count__275540 = G__275548;
i__275541 = G__275549;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__275538__$1);domina.remove_attr_BANG_.call(null,p1__275533_SHARP_,name);
{
var G__275550 = cljs.core.next.call(null,seq__275538__$1);
var G__275551 = null;
var G__275552 = 0;
var G__275553 = 0;
seq__275538 = G__275550;
chunk__275539 = G__275551;
count__275540 = G__275552;
i__275541 = G__275553;
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
remove_attr.cljs$lang$applyTo = (function (arglist__275554){
var values = cljs.core.seq(arglist__275554);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__275557){var vec__275558 = p__275557;var n = cljs.core.nth.call(null,vec__275558,0,null);var v = cljs.core.nth.call(null,vec__275558,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__275559){
var forms = cljs.core.seq(arglist__275559);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__275560_SHARP_){var seq__275565 = cljs.core.seq.call(null,values);var chunk__275566 = null;var count__275567 = 0;var i__275568 = 0;while(true){
if((i__275568 < count__275567))
{var val = cljs.core._nth.call(null,chunk__275566,i__275568);domina.add_class_BANG_.call(null,p1__275560_SHARP_,val);
{
var G__275569 = seq__275565;
var G__275570 = chunk__275566;
var G__275571 = count__275567;
var G__275572 = (i__275568 + 1);
seq__275565 = G__275569;
chunk__275566 = G__275570;
count__275567 = G__275571;
i__275568 = G__275572;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275565);if(temp__4092__auto__)
{var seq__275565__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275565__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275565__$1);{
var G__275573 = cljs.core.chunk_rest.call(null,seq__275565__$1);
var G__275574 = c__8952__auto__;
var G__275575 = cljs.core.count.call(null,c__8952__auto__);
var G__275576 = 0;
seq__275565 = G__275573;
chunk__275566 = G__275574;
count__275567 = G__275575;
i__275568 = G__275576;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__275565__$1);domina.add_class_BANG_.call(null,p1__275560_SHARP_,val);
{
var G__275577 = cljs.core.next.call(null,seq__275565__$1);
var G__275578 = null;
var G__275579 = 0;
var G__275580 = 0;
seq__275565 = G__275577;
chunk__275566 = G__275578;
count__275567 = G__275579;
i__275568 = G__275580;
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
add_class.cljs$lang$applyTo = (function (arglist__275581){
var values = cljs.core.seq(arglist__275581);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__275582_SHARP_){var seq__275587 = cljs.core.seq.call(null,values);var chunk__275588 = null;var count__275589 = 0;var i__275590 = 0;while(true){
if((i__275590 < count__275589))
{var val = cljs.core._nth.call(null,chunk__275588,i__275590);domina.remove_class_BANG_.call(null,p1__275582_SHARP_,val);
{
var G__275591 = seq__275587;
var G__275592 = chunk__275588;
var G__275593 = count__275589;
var G__275594 = (i__275590 + 1);
seq__275587 = G__275591;
chunk__275588 = G__275592;
count__275589 = G__275593;
i__275590 = G__275594;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275587);if(temp__4092__auto__)
{var seq__275587__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275587__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275587__$1);{
var G__275595 = cljs.core.chunk_rest.call(null,seq__275587__$1);
var G__275596 = c__8952__auto__;
var G__275597 = cljs.core.count.call(null,c__8952__auto__);
var G__275598 = 0;
seq__275587 = G__275595;
chunk__275588 = G__275596;
count__275589 = G__275597;
i__275590 = G__275598;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__275587__$1);domina.remove_class_BANG_.call(null,p1__275582_SHARP_,val);
{
var G__275599 = cljs.core.next.call(null,seq__275587__$1);
var G__275600 = null;
var G__275601 = 0;
var G__275602 = 0;
seq__275587 = G__275599;
chunk__275588 = G__275600;
count__275589 = G__275601;
i__275590 = G__275602;
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
remove_class.cljs$lang$applyTo = (function (arglist__275603){
var values = cljs.core.seq(arglist__275603);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__275604_SHARP_){return domina.set_classes_BANG_.call(null,p1__275604_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__275605){
var values = cljs.core.seq(arglist__275605);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__275610 = cljs.core.seq.call(null,forms);var chunk__275611 = null;var count__275612 = 0;var i__275613 = 0;while(true){
if((i__275613 < count__275612))
{var fun = cljs.core._nth.call(null,chunk__275611,i__275613);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__275614 = seq__275610;
var G__275615 = chunk__275611;
var G__275616 = count__275612;
var G__275617 = (i__275613 + 1);
seq__275610 = G__275614;
chunk__275611 = G__275615;
count__275612 = G__275616;
i__275613 = G__275617;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275610);if(temp__4092__auto__)
{var seq__275610__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275610__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275610__$1);{
var G__275618 = cljs.core.chunk_rest.call(null,seq__275610__$1);
var G__275619 = c__8952__auto__;
var G__275620 = cljs.core.count.call(null,c__8952__auto__);
var G__275621 = 0;
seq__275610 = G__275618;
chunk__275611 = G__275619;
count__275612 = G__275620;
i__275613 = G__275621;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__275610__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__275622 = cljs.core.next.call(null,seq__275610__$1);
var G__275623 = null;
var G__275624 = 0;
var G__275625 = 0;
seq__275610 = G__275622;
chunk__275611 = G__275623;
count__275612 = G__275624;
i__275613 = G__275625;
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
do__GT_.cljs$lang$applyTo = (function (arglist__275626){
var forms = cljs.core.seq(arglist__275626);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275627_SHARP_,p2__275628_SHARP_){return domina.append_BANG_.call(null,p1__275627_SHARP_,p2__275628_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__275629){
var values = cljs.core.seq(arglist__275629);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275630_SHARP_,p2__275631_SHARP_){return domina.prepend_BANG_.call(null,p1__275630_SHARP_,p2__275631_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__275632){
var values = cljs.core.seq(arglist__275632);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275633_SHARP_,p2__275634_SHARP_){return domina.insert_before_BANG_.call(null,p1__275633_SHARP_,p2__275634_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__275635){
var values = cljs.core.seq(arglist__275635);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275636_SHARP_,p2__275637_SHARP_){return domina.insert_after_BANG_.call(null,p1__275636_SHARP_,p2__275637_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__275638){
var values = cljs.core.seq(arglist__275638);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__275639_SHARP_,p2__275640_SHARP_){return domina.swap_content_BANG_.call(null,p1__275639_SHARP_,p2__275640_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__275641){
var values = cljs.core.seq(arglist__275641);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__275642_SHARP_){return domina.detach_BANG_.call(null,p1__275642_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__275643_SHARP_){var seq__275650 = cljs.core.seq.call(null,pairs);var chunk__275651 = null;var count__275652 = 0;var i__275653 = 0;while(true){
if((i__275653 < count__275652))
{var vec__275654 = cljs.core._nth.call(null,chunk__275651,i__275653);var name = cljs.core.nth.call(null,vec__275654,0,null);var value = cljs.core.nth.call(null,vec__275654,1,null);domina.set_style_BANG_.call(null,p1__275643_SHARP_,name,value);
{
var G__275656 = seq__275650;
var G__275657 = chunk__275651;
var G__275658 = count__275652;
var G__275659 = (i__275653 + 1);
seq__275650 = G__275656;
chunk__275651 = G__275657;
count__275652 = G__275658;
i__275653 = G__275659;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275650);if(temp__4092__auto__)
{var seq__275650__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275650__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275650__$1);{
var G__275660 = cljs.core.chunk_rest.call(null,seq__275650__$1);
var G__275661 = c__8952__auto__;
var G__275662 = cljs.core.count.call(null,c__8952__auto__);
var G__275663 = 0;
seq__275650 = G__275660;
chunk__275651 = G__275661;
count__275652 = G__275662;
i__275653 = G__275663;
continue;
}
} else
{var vec__275655 = cljs.core.first.call(null,seq__275650__$1);var name = cljs.core.nth.call(null,vec__275655,0,null);var value = cljs.core.nth.call(null,vec__275655,1,null);domina.set_style_BANG_.call(null,p1__275643_SHARP_,name,value);
{
var G__275664 = cljs.core.next.call(null,seq__275650__$1);
var G__275665 = null;
var G__275666 = 0;
var G__275667 = 0;
seq__275650 = G__275664;
chunk__275651 = G__275665;
count__275652 = G__275666;
i__275653 = G__275667;
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
set_style.cljs$lang$applyTo = (function (arglist__275668){
var values = cljs.core.seq(arglist__275668);
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
remove_style.cljs$lang$applyTo = (function (arglist__275669){
var values = cljs.core.seq(arglist__275669);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__275670_SHARP_){return domina.set_data_BANG_.call(null,p1__275670_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__275671){
var ttime = cljs.core.first(arglist__275671);
var funcs = cljs.core.rest(arglist__275671);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__275673_SHARP_,p2__275672_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__275672_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__275698_275706 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__275699_275707 = null;var count__275700_275708 = 0;var i__275701_275709 = 0;while(true){
if((i__275701_275709 < count__275700_275708))
{var idx_275710 = cljs.core._nth.call(null,chunk__275699_275707,i__275701_275709);var attr_275711 = pnod.attributes.item(idx_275710);if(cljs.core.truth_(attr_275711.specified))
{attr_275711.value = rep_str.call(null,attr_275711.value);
} else
{}
{
var G__275712 = seq__275698_275706;
var G__275713 = chunk__275699_275707;
var G__275714 = count__275700_275708;
var G__275715 = (i__275701_275709 + 1);
seq__275698_275706 = G__275712;
chunk__275699_275707 = G__275713;
count__275700_275708 = G__275714;
i__275701_275709 = G__275715;
continue;
}
} else
{var temp__4092__auto___275716 = cljs.core.seq.call(null,seq__275698_275706);if(temp__4092__auto___275716)
{var seq__275698_275717__$1 = temp__4092__auto___275716;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275698_275717__$1))
{var c__8952__auto___275718 = cljs.core.chunk_first.call(null,seq__275698_275717__$1);{
var G__275719 = cljs.core.chunk_rest.call(null,seq__275698_275717__$1);
var G__275720 = c__8952__auto___275718;
var G__275721 = cljs.core.count.call(null,c__8952__auto___275718);
var G__275722 = 0;
seq__275698_275706 = G__275719;
chunk__275699_275707 = G__275720;
count__275700_275708 = G__275721;
i__275701_275709 = G__275722;
continue;
}
} else
{var idx_275723 = cljs.core.first.call(null,seq__275698_275717__$1);var attr_275724 = pnod.attributes.item(idx_275723);if(cljs.core.truth_(attr_275724.specified))
{attr_275724.value = rep_str.call(null,attr_275724.value);
} else
{}
{
var G__275725 = cljs.core.next.call(null,seq__275698_275717__$1);
var G__275726 = null;
var G__275727 = 0;
var G__275728 = 0;
seq__275698_275706 = G__275725;
chunk__275699_275707 = G__275726;
count__275700_275708 = G__275727;
i__275701_275709 = G__275728;
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
{var seq__275702 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__275703 = null;var count__275704 = 0;var i__275705 = 0;while(true){
if((i__275705 < count__275704))
{var cnode = cljs.core._nth.call(null,chunk__275703,i__275705);rep_node.call(null,cnode);
{
var G__275729 = seq__275702;
var G__275730 = chunk__275703;
var G__275731 = count__275704;
var G__275732 = (i__275705 + 1);
seq__275702 = G__275729;
chunk__275703 = G__275730;
count__275704 = G__275731;
i__275705 = G__275732;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275702);if(temp__4092__auto__)
{var seq__275702__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275702__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275702__$1);{
var G__275733 = cljs.core.chunk_rest.call(null,seq__275702__$1);
var G__275734 = c__8952__auto__;
var G__275735 = cljs.core.count.call(null,c__8952__auto__);
var G__275736 = 0;
seq__275702 = G__275733;
chunk__275703 = G__275734;
count__275704 = G__275735;
i__275705 = G__275736;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__275702__$1);rep_node.call(null,cnode);
{
var G__275737 = cljs.core.next.call(null,seq__275702__$1);
var G__275738 = null;
var G__275739 = 0;
var G__275740 = 0;
seq__275702 = G__275737;
chunk__275703 = G__275738;
count__275704 = G__275739;
i__275705 = G__275740;
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
{var vec__275750 = node_spec;var tag = cljs.core.nth.call(null,vec__275750,0,null);var vec__275751 = cljs.core.nthnext.call(null,vec__275750,1);var m = cljs.core.nth.call(null,vec__275751,0,null);var ms = cljs.core.nthnext.call(null,vec__275751,1);var more = vec__275751;var vec__275752 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__275752,0,null);var segments = cljs.core.nthnext.call(null,vec__275752,1);var id = cljs.core.some.call(null,((function (vec__275750,tag,vec__275751,m,ms,more,vec__275752,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__275750,tag,vec__275751,m,ms,more,vec__275752,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__275750,tag,vec__275751,m,ms,more,vec__275752,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__275750,tag,vec__275751,m,ms,more,vec__275752,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__275753_275759 = cljs.core.seq.call(null,attrs__$2);var chunk__275754_275760 = null;var count__275755_275761 = 0;var i__275756_275762 = 0;while(true){
if((i__275756_275762 < count__275755_275761))
{var vec__275757_275763 = cljs.core._nth.call(null,chunk__275754_275760,i__275756_275762);var key_275764 = cljs.core.nth.call(null,vec__275757_275763,0,null);var val_275765 = cljs.core.nth.call(null,vec__275757_275763,1,null);node.setAttribute(cljs.core.name.call(null,key_275764),val_275765);
{
var G__275766 = seq__275753_275759;
var G__275767 = chunk__275754_275760;
var G__275768 = count__275755_275761;
var G__275769 = (i__275756_275762 + 1);
seq__275753_275759 = G__275766;
chunk__275754_275760 = G__275767;
count__275755_275761 = G__275768;
i__275756_275762 = G__275769;
continue;
}
} else
{var temp__4092__auto___275770 = cljs.core.seq.call(null,seq__275753_275759);if(temp__4092__auto___275770)
{var seq__275753_275771__$1 = temp__4092__auto___275770;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275753_275771__$1))
{var c__8952__auto___275772 = cljs.core.chunk_first.call(null,seq__275753_275771__$1);{
var G__275773 = cljs.core.chunk_rest.call(null,seq__275753_275771__$1);
var G__275774 = c__8952__auto___275772;
var G__275775 = cljs.core.count.call(null,c__8952__auto___275772);
var G__275776 = 0;
seq__275753_275759 = G__275773;
chunk__275754_275760 = G__275774;
count__275755_275761 = G__275775;
i__275756_275762 = G__275776;
continue;
}
} else
{var vec__275758_275777 = cljs.core.first.call(null,seq__275753_275771__$1);var key_275778 = cljs.core.nth.call(null,vec__275758_275777,0,null);var val_275779 = cljs.core.nth.call(null,vec__275758_275777,1,null);node.setAttribute(cljs.core.name.call(null,key_275778),val_275779);
{
var G__275780 = cljs.core.next.call(null,seq__275753_275771__$1);
var G__275781 = null;
var G__275782 = 0;
var G__275783 = 0;
seq__275753_275759 = G__275780;
chunk__275754_275760 = G__275781;
count__275755_275761 = G__275782;
i__275756_275762 = G__275783;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__8211__auto__ = el.checked;if(cljs.core.truth_(and__8211__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__8211__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__275784_SHARP_){return p1__275784_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__275785_SHARP_){return p1__275785_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__275787_SHARP_,p2__275786_SHARP_){var G__275790 = p2__275786_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__275790))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__275790))
{return enfocus.core.read_select_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__275790))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__275790))
{var G__275791 = p2__275786_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__275791))
{return enfocus.core.read_checked_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__275791))
{return enfocus.core.read_checked_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__275791))
{return enfocus.core.read_simple_input.call(null,p2__275786_SHARP_,p1__275787_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__275787_SHARP_;
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
{return p1__275787_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__275792_SHARP_){if((p1__275792_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__275792_SHARP_);
} else
{if((p1__275792_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__275792_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__275792_SHARP_))
{return create_sel_str.call(null,p1__275792_SHARP_);
} else
{if(typeof p1__275792_SHARP_ === 'string')
{return p1__275792_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__8223__auto__ = func;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__8211__auto__ = !((node == null));if(and__8211__auto__)
{var G__275803 = node;if(G__275803)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__275803.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__275803.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__275803);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__275803);
}
} else
{return and__8211__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__275804 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__275804,0,null);var trans__$1 = cljs.core.nth.call(null,vec__275804,1,null);var seq__275805 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__275806 = null;var count__275807 = 0;var i__275808 = 0;while(true){
if((i__275808 < count__275807))
{var vec__275809 = cljs.core._nth.call(null,chunk__275806,i__275808);var sel = cljs.core.nth.call(null,vec__275809,0,null);var t = cljs.core.nth.call(null,vec__275809,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__275811 = seq__275805;
var G__275812 = chunk__275806;
var G__275813 = count__275807;
var G__275814 = (i__275808 + 1);
seq__275805 = G__275811;
chunk__275806 = G__275812;
count__275807 = G__275813;
i__275808 = G__275814;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275805);if(temp__4092__auto__)
{var seq__275805__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275805__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275805__$1);{
var G__275815 = cljs.core.chunk_rest.call(null,seq__275805__$1);
var G__275816 = c__8952__auto__;
var G__275817 = cljs.core.count.call(null,c__8952__auto__);
var G__275818 = 0;
seq__275805 = G__275815;
chunk__275806 = G__275816;
count__275807 = G__275817;
i__275808 = G__275818;
continue;
}
} else
{var vec__275810 = cljs.core.first.call(null,seq__275805__$1);var sel = cljs.core.nth.call(null,vec__275810,0,null);var t = cljs.core.nth.call(null,vec__275810,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__275819 = cljs.core.next.call(null,seq__275805__$1);
var G__275820 = null;
var G__275821 = 0;
var G__275822 = 0;
seq__275805 = G__275819;
chunk__275806 = G__275820;
count__275807 = G__275821;
i__275808 = G__275822;
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
i_at.cljs$lang$applyTo = (function (arglist__275823){
var id_mask = cljs.core.first(arglist__275823);
arglist__275823 = cljs.core.next(arglist__275823);
var node = cljs.core.first(arglist__275823);
var trans = cljs.core.rest(arglist__275823);
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
at.cljs$lang$applyTo = (function (arglist__275824){
var node = cljs.core.first(arglist__275824);
var trans = cljs.core.rest(arglist__275824);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__275829 = node;if(G__275829)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__275829.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__275829.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__275829);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__275829);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__275830 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__275830,0,null);var trans__$1 = cljs.core.nth.call(null,vec__275830,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__275831){var vec__275832 = p__275831;var ky = cljs.core.nth.call(null,vec__275832,0,null);var sel = cljs.core.nth.call(null,vec__275832,1,null);var ext = cljs.core.nth.call(null,vec__275832,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__275833){
var node = cljs.core.first(arglist__275833);
var trans = cljs.core.rest(arglist__275833);
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