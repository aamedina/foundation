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
enfocus.core.ISelector = (function (){var obj357318 = {};return obj357318;
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
enfocus.core.ITransform = (function (){var obj357320 = {};return obj357320;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__357321_SHARP_){if(typeof p1__357321_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__357321_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__357321_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__357328_357334 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__357329_357335 = null;var count__357330_357336 = 0;var i__357331_357337 = 0;while(true){
if((i__357331_357337 < count__357330_357336))
{var vec__357332_357338 = cljs.core._nth.call(null,chunk__357329_357335,i__357331_357337);var attr_357339 = cljs.core.nth.call(null,vec__357332_357338,0,null);var value_357340 = cljs.core.nth.call(null,vec__357332_357338,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_357339),value_357340);
{
var G__357341 = seq__357328_357334;
var G__357342 = chunk__357329_357335;
var G__357343 = count__357330_357336;
var G__357344 = (i__357331_357337 + 1);
seq__357328_357334 = G__357341;
chunk__357329_357335 = G__357342;
count__357330_357336 = G__357343;
i__357331_357337 = G__357344;
continue;
}
} else
{var temp__4092__auto___357345 = cljs.core.seq.call(null,seq__357328_357334);if(temp__4092__auto___357345)
{var seq__357328_357346__$1 = temp__4092__auto___357345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357328_357346__$1))
{var c__14708__auto___357347 = cljs.core.chunk_first.call(null,seq__357328_357346__$1);{
var G__357348 = cljs.core.chunk_rest.call(null,seq__357328_357346__$1);
var G__357349 = c__14708__auto___357347;
var G__357350 = cljs.core.count.call(null,c__14708__auto___357347);
var G__357351 = 0;
seq__357328_357334 = G__357348;
chunk__357329_357335 = G__357349;
count__357330_357336 = G__357350;
i__357331_357337 = G__357351;
continue;
}
} else
{var vec__357333_357352 = cljs.core.first.call(null,seq__357328_357346__$1);var attr_357353 = cljs.core.nth.call(null,vec__357333_357352,0,null);var value_357354 = cljs.core.nth.call(null,vec__357333_357352,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_357353),value_357354);
{
var G__357355 = cljs.core.next.call(null,seq__357328_357346__$1);
var G__357356 = null;
var G__357357 = 0;
var G__357358 = 0;
seq__357328_357334 = G__357355;
chunk__357329_357335 = G__357356;
count__357330_357336 = G__357357;
i__357331_357337 = G__357358;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__357363 = cljs.core.seq.call(null,values);var chunk__357364 = null;var count__357365 = 0;var i__357366 = 0;while(true){
if((i__357366 < count__357365))
{var attr = cljs.core._nth.call(null,chunk__357364,i__357366);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__357367 = seq__357363;
var G__357368 = chunk__357364;
var G__357369 = count__357365;
var G__357370 = (i__357366 + 1);
seq__357363 = G__357367;
chunk__357364 = G__357368;
count__357365 = G__357369;
i__357366 = G__357370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357363);if(temp__4092__auto__)
{var seq__357363__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357363__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357363__$1);{
var G__357371 = cljs.core.chunk_rest.call(null,seq__357363__$1);
var G__357372 = c__14708__auto__;
var G__357373 = cljs.core.count.call(null,c__14708__auto__);
var G__357374 = 0;
seq__357363 = G__357371;
chunk__357364 = G__357372;
count__357365 = G__357373;
i__357366 = G__357374;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__357363__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__357375 = cljs.core.next.call(null,seq__357363__$1);
var G__357376 = null;
var G__357377 = 0;
var G__357378 = 0;
seq__357363 = G__357375;
chunk__357364 = G__357376;
count__357365 = G__357377;
i__357366 = G__357378;
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
{var seq__357385_357391 = cljs.core.seq.call(null,ats);var chunk__357386_357392 = null;var count__357387_357393 = 0;var i__357388_357394 = 0;while(true){
if((i__357388_357394 < count__357387_357393))
{var vec__357389_357395 = cljs.core._nth.call(null,chunk__357386_357392,i__357388_357394);var k_357396 = cljs.core.nth.call(null,vec__357389_357395,0,null);var v_357397 = cljs.core.nth.call(null,vec__357389_357395,1,null);add_map_attrs.call(null,elem,k_357396,v_357397);
{
var G__357398 = seq__357385_357391;
var G__357399 = chunk__357386_357392;
var G__357400 = count__357387_357393;
var G__357401 = (i__357388_357394 + 1);
seq__357385_357391 = G__357398;
chunk__357386_357392 = G__357399;
count__357387_357393 = G__357400;
i__357388_357394 = G__357401;
continue;
}
} else
{var temp__4092__auto___357402 = cljs.core.seq.call(null,seq__357385_357391);if(temp__4092__auto___357402)
{var seq__357385_357403__$1 = temp__4092__auto___357402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357385_357403__$1))
{var c__14708__auto___357404 = cljs.core.chunk_first.call(null,seq__357385_357403__$1);{
var G__357405 = cljs.core.chunk_rest.call(null,seq__357385_357403__$1);
var G__357406 = c__14708__auto___357404;
var G__357407 = cljs.core.count.call(null,c__14708__auto___357404);
var G__357408 = 0;
seq__357385_357391 = G__357405;
chunk__357386_357392 = G__357406;
count__357387_357393 = G__357407;
i__357388_357394 = G__357408;
continue;
}
} else
{var vec__357390_357409 = cljs.core.first.call(null,seq__357385_357403__$1);var k_357410 = cljs.core.nth.call(null,vec__357390_357409,0,null);var v_357411 = cljs.core.nth.call(null,vec__357390_357409,1,null);add_map_attrs.call(null,elem,k_357410,v_357411);
{
var G__357412 = cljs.core.next.call(null,seq__357385_357403__$1);
var G__357413 = null;
var G__357414 = 0;
var G__357415 = 0;
seq__357385_357391 = G__357412;
chunk__357386_357392 = G__357413;
count__357387_357393 = G__357414;
i__357388_357394 = G__357415;
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
var seq__357420_357424 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__357421_357425 = null;var count__357422_357426 = 0;var i__357423_357427 = 0;while(true){
if((i__357423_357427 < count__357422_357426))
{var node_357428 = cljs.core._nth.call(null,chunk__357421_357425,i__357423_357427);goog.dom.appendChild(div,node_357428);
{
var G__357429 = seq__357420_357424;
var G__357430 = chunk__357421_357425;
var G__357431 = count__357422_357426;
var G__357432 = (i__357423_357427 + 1);
seq__357420_357424 = G__357429;
chunk__357421_357425 = G__357430;
count__357422_357426 = G__357431;
i__357423_357427 = G__357432;
continue;
}
} else
{var temp__4092__auto___357433 = cljs.core.seq.call(null,seq__357420_357424);if(temp__4092__auto___357433)
{var seq__357420_357434__$1 = temp__4092__auto___357433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357420_357434__$1))
{var c__14708__auto___357435 = cljs.core.chunk_first.call(null,seq__357420_357434__$1);{
var G__357436 = cljs.core.chunk_rest.call(null,seq__357420_357434__$1);
var G__357437 = c__14708__auto___357435;
var G__357438 = cljs.core.count.call(null,c__14708__auto___357435);
var G__357439 = 0;
seq__357420_357424 = G__357436;
chunk__357421_357425 = G__357437;
count__357422_357426 = G__357438;
i__357423_357427 = G__357439;
continue;
}
} else
{var node_357440 = cljs.core.first.call(null,seq__357420_357434__$1);goog.dom.appendChild(div,node_357440);
{
var G__357441 = cljs.core.next.call(null,seq__357420_357434__$1);
var G__357442 = null;
var G__357443 = 0;
var G__357444 = 0;
seq__357420_357424 = G__357441;
chunk__357421_357425 = G__357442;
count__357422_357426 = G__357443;
i__357423_357427 = G__357444;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__357445_SHARP_){var id = p1__357445_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__357445_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__357447 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__357447,0,null);var txt = cljs.core.nth.call(null,vec__357447,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__357452_357456 = cljs.core.seq.call(null,dfa);var chunk__357453_357457 = null;var count__357454_357458 = 0;var i__357455_357459 = 0;while(true){
if((i__357455_357459 < count__357454_357458))
{var df_357460 = cljs.core._nth.call(null,chunk__357453_357457,i__357455_357459);goog.dom.append(frag,df_357460);
{
var G__357461 = seq__357452_357456;
var G__357462 = chunk__357453_357457;
var G__357463 = count__357454_357458;
var G__357464 = (i__357455_357459 + 1);
seq__357452_357456 = G__357461;
chunk__357453_357457 = G__357462;
count__357454_357458 = G__357463;
i__357455_357459 = G__357464;
continue;
}
} else
{var temp__4092__auto___357465 = cljs.core.seq.call(null,seq__357452_357456);if(temp__4092__auto___357465)
{var seq__357452_357466__$1 = temp__4092__auto___357465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357452_357466__$1))
{var c__14708__auto___357467 = cljs.core.chunk_first.call(null,seq__357452_357466__$1);{
var G__357468 = cljs.core.chunk_rest.call(null,seq__357452_357466__$1);
var G__357469 = c__14708__auto___357467;
var G__357470 = cljs.core.count.call(null,c__14708__auto___357467);
var G__357471 = 0;
seq__357452_357456 = G__357468;
chunk__357453_357457 = G__357469;
count__357454_357458 = G__357470;
i__357455_357459 = G__357471;
continue;
}
} else
{var df_357472 = cljs.core.first.call(null,seq__357452_357466__$1);goog.dom.append(frag,df_357472);
{
var G__357473 = cljs.core.next.call(null,seq__357452_357466__$1);
var G__357474 = null;
var G__357475 = 0;
var G__357476 = 0;
seq__357452_357456 = G__357473;
chunk__357453_357457 = G__357474;
count__357454_357458 = G__357475;
i__357455_357459 = G__357476;
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
{var vec__357479 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__357479,0,null);var tdom = cljs.core.nth.call(null,vec__357479,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__357479,sym,tdom,dom,tsnip){
return (function (p1__357477_SHARP_){return p1__357477_SHARP_.outerHTML;
});})(vec__357479,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t357483 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t357483 = (function (trans,func,extr_multi_node,meta357484){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta357484 = meta357484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t357483.cljs$lang$type = true;
enfocus.core.t357483.cljs$lang$ctorStr = "enfocus.core/t357483";
enfocus.core.t357483.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t357483");
});
enfocus.core.t357483.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t357483.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t357483.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t357483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_357485){var self__ = this;
var _357485__$1 = this;return self__.meta357484;
});
enfocus.core.t357483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_357485,meta357484__$1){var self__ = this;
var _357485__$1 = this;return (new enfocus.core.t357483(self__.trans,self__.func,self__.extr_multi_node,meta357484__$1));
});
enfocus.core.__GT_t357483 = (function __GT_t357483(trans__$1,func__$1,extr_multi_node__$1,meta357484){return (new enfocus.core.t357483(trans__$1,func__$1,extr_multi_node__$1,meta357484));
});
}
return (new enfocus.core.t357483(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t357493 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t357493 = (function (trans,func,multi_node_chain,meta357494){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta357494 = meta357494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t357493.cljs$lang$type = true;
enfocus.core.t357493.cljs$lang$ctorStr = "enfocus.core/t357493";
enfocus.core.t357493.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t357493");
});
enfocus.core.t357493.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t357493.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t357493.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t357493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_357495){var self__ = this;
var _357495__$1 = this;return self__.meta357494;
});
enfocus.core.t357493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_357495,meta357494__$1){var self__ = this;
var _357495__$1 = this;return (new enfocus.core.t357493(self__.trans,self__.func,self__.multi_node_chain,meta357494__$1));
});
enfocus.core.__GT_t357493 = (function __GT_t357493(trans__$1,func__$1,multi_node_chain__$1,meta357494){return (new enfocus.core.t357493(trans__$1,func__$1,multi_node_chain__$1,meta357494));
});
}
return (new enfocus.core.t357493(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__357486_SHARP_){return domina.nodes.call(null,p1__357486_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t357496 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t357496 = (function (trans,func,values,multi_node_chain,meta357497){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta357497 = meta357497;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t357496.cljs$lang$type = true;
enfocus.core.t357496.cljs$lang$ctorStr = "enfocus.core/t357496";
enfocus.core.t357496.cljs$lang$ctorPrWriter = (function (this__14528__auto__,writer__14529__auto__,opt__14530__auto__){return cljs.core._write.call(null,writer__14529__auto__,"enfocus.core/t357496");
});
enfocus.core.t357496.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t357496.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t357496.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t357496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_357498){var self__ = this;
var _357498__$1 = this;return self__.meta357497;
});
enfocus.core.t357496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_357498,meta357497__$1){var self__ = this;
var _357498__$1 = this;return (new enfocus.core.t357496(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta357497__$1));
});
enfocus.core.__GT_t357496 = (function __GT_t357496(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta357497){return (new enfocus.core.t357496(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta357497));
});
}
return (new enfocus.core.t357496(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357499_SHARP_,p2__357500_SHARP_){domina.destroy_children_BANG_.call(null,p1__357499_SHARP_);
return domina.append_BANG_.call(null,p1__357499_SHARP_,p2__357500_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__357501){
var values = cljs.core.seq(arglist__357501);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__357502_SHARP_){return domina.set_html_BANG_.call(null,p1__357502_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__357503_SHARP_){var seq__357510 = cljs.core.seq.call(null,pairs);var chunk__357511 = null;var count__357512 = 0;var i__357513 = 0;while(true){
if((i__357513 < count__357512))
{var vec__357514 = cljs.core._nth.call(null,chunk__357511,i__357513);var name = cljs.core.nth.call(null,vec__357514,0,null);var value = cljs.core.nth.call(null,vec__357514,1,null);domina.set_attr_BANG_.call(null,p1__357503_SHARP_,name,value);
{
var G__357516 = seq__357510;
var G__357517 = chunk__357511;
var G__357518 = count__357512;
var G__357519 = (i__357513 + 1);
seq__357510 = G__357516;
chunk__357511 = G__357517;
count__357512 = G__357518;
i__357513 = G__357519;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357510);if(temp__4092__auto__)
{var seq__357510__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357510__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357510__$1);{
var G__357520 = cljs.core.chunk_rest.call(null,seq__357510__$1);
var G__357521 = c__14708__auto__;
var G__357522 = cljs.core.count.call(null,c__14708__auto__);
var G__357523 = 0;
seq__357510 = G__357520;
chunk__357511 = G__357521;
count__357512 = G__357522;
i__357513 = G__357523;
continue;
}
} else
{var vec__357515 = cljs.core.first.call(null,seq__357510__$1);var name = cljs.core.nth.call(null,vec__357515,0,null);var value = cljs.core.nth.call(null,vec__357515,1,null);domina.set_attr_BANG_.call(null,p1__357503_SHARP_,name,value);
{
var G__357524 = cljs.core.next.call(null,seq__357510__$1);
var G__357525 = null;
var G__357526 = 0;
var G__357527 = 0;
seq__357510 = G__357524;
chunk__357511 = G__357525;
count__357512 = G__357526;
i__357513 = G__357527;
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
set_attr.cljs$lang$applyTo = (function (arglist__357528){
var values = cljs.core.seq(arglist__357528);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__357529_SHARP_){var seq__357534 = cljs.core.seq.call(null,values);var chunk__357535 = null;var count__357536 = 0;var i__357537 = 0;while(true){
if((i__357537 < count__357536))
{var name = cljs.core._nth.call(null,chunk__357535,i__357537);domina.remove_attr_BANG_.call(null,p1__357529_SHARP_,name);
{
var G__357538 = seq__357534;
var G__357539 = chunk__357535;
var G__357540 = count__357536;
var G__357541 = (i__357537 + 1);
seq__357534 = G__357538;
chunk__357535 = G__357539;
count__357536 = G__357540;
i__357537 = G__357541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357534);if(temp__4092__auto__)
{var seq__357534__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357534__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357534__$1);{
var G__357542 = cljs.core.chunk_rest.call(null,seq__357534__$1);
var G__357543 = c__14708__auto__;
var G__357544 = cljs.core.count.call(null,c__14708__auto__);
var G__357545 = 0;
seq__357534 = G__357542;
chunk__357535 = G__357543;
count__357536 = G__357544;
i__357537 = G__357545;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__357534__$1);domina.remove_attr_BANG_.call(null,p1__357529_SHARP_,name);
{
var G__357546 = cljs.core.next.call(null,seq__357534__$1);
var G__357547 = null;
var G__357548 = 0;
var G__357549 = 0;
seq__357534 = G__357546;
chunk__357535 = G__357547;
count__357536 = G__357548;
i__357537 = G__357549;
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
remove_attr.cljs$lang$applyTo = (function (arglist__357550){
var values = cljs.core.seq(arglist__357550);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__357553){var vec__357554 = p__357553;var n = cljs.core.nth.call(null,vec__357554,0,null);var v = cljs.core.nth.call(null,vec__357554,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__357555){
var forms = cljs.core.seq(arglist__357555);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__357556_SHARP_){var seq__357561 = cljs.core.seq.call(null,values);var chunk__357562 = null;var count__357563 = 0;var i__357564 = 0;while(true){
if((i__357564 < count__357563))
{var val = cljs.core._nth.call(null,chunk__357562,i__357564);domina.add_class_BANG_.call(null,p1__357556_SHARP_,val);
{
var G__357565 = seq__357561;
var G__357566 = chunk__357562;
var G__357567 = count__357563;
var G__357568 = (i__357564 + 1);
seq__357561 = G__357565;
chunk__357562 = G__357566;
count__357563 = G__357567;
i__357564 = G__357568;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357561);if(temp__4092__auto__)
{var seq__357561__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357561__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357561__$1);{
var G__357569 = cljs.core.chunk_rest.call(null,seq__357561__$1);
var G__357570 = c__14708__auto__;
var G__357571 = cljs.core.count.call(null,c__14708__auto__);
var G__357572 = 0;
seq__357561 = G__357569;
chunk__357562 = G__357570;
count__357563 = G__357571;
i__357564 = G__357572;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__357561__$1);domina.add_class_BANG_.call(null,p1__357556_SHARP_,val);
{
var G__357573 = cljs.core.next.call(null,seq__357561__$1);
var G__357574 = null;
var G__357575 = 0;
var G__357576 = 0;
seq__357561 = G__357573;
chunk__357562 = G__357574;
count__357563 = G__357575;
i__357564 = G__357576;
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
add_class.cljs$lang$applyTo = (function (arglist__357577){
var values = cljs.core.seq(arglist__357577);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__357578_SHARP_){var seq__357583 = cljs.core.seq.call(null,values);var chunk__357584 = null;var count__357585 = 0;var i__357586 = 0;while(true){
if((i__357586 < count__357585))
{var val = cljs.core._nth.call(null,chunk__357584,i__357586);domina.remove_class_BANG_.call(null,p1__357578_SHARP_,val);
{
var G__357587 = seq__357583;
var G__357588 = chunk__357584;
var G__357589 = count__357585;
var G__357590 = (i__357586 + 1);
seq__357583 = G__357587;
chunk__357584 = G__357588;
count__357585 = G__357589;
i__357586 = G__357590;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357583);if(temp__4092__auto__)
{var seq__357583__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357583__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357583__$1);{
var G__357591 = cljs.core.chunk_rest.call(null,seq__357583__$1);
var G__357592 = c__14708__auto__;
var G__357593 = cljs.core.count.call(null,c__14708__auto__);
var G__357594 = 0;
seq__357583 = G__357591;
chunk__357584 = G__357592;
count__357585 = G__357593;
i__357586 = G__357594;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__357583__$1);domina.remove_class_BANG_.call(null,p1__357578_SHARP_,val);
{
var G__357595 = cljs.core.next.call(null,seq__357583__$1);
var G__357596 = null;
var G__357597 = 0;
var G__357598 = 0;
seq__357583 = G__357595;
chunk__357584 = G__357596;
count__357585 = G__357597;
i__357586 = G__357598;
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
remove_class.cljs$lang$applyTo = (function (arglist__357599){
var values = cljs.core.seq(arglist__357599);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__357600_SHARP_){return domina.set_classes_BANG_.call(null,p1__357600_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__357601){
var values = cljs.core.seq(arglist__357601);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__357606 = cljs.core.seq.call(null,forms);var chunk__357607 = null;var count__357608 = 0;var i__357609 = 0;while(true){
if((i__357609 < count__357608))
{var fun = cljs.core._nth.call(null,chunk__357607,i__357609);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__357610 = seq__357606;
var G__357611 = chunk__357607;
var G__357612 = count__357608;
var G__357613 = (i__357609 + 1);
seq__357606 = G__357610;
chunk__357607 = G__357611;
count__357608 = G__357612;
i__357609 = G__357613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357606);if(temp__4092__auto__)
{var seq__357606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357606__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357606__$1);{
var G__357614 = cljs.core.chunk_rest.call(null,seq__357606__$1);
var G__357615 = c__14708__auto__;
var G__357616 = cljs.core.count.call(null,c__14708__auto__);
var G__357617 = 0;
seq__357606 = G__357614;
chunk__357607 = G__357615;
count__357608 = G__357616;
i__357609 = G__357617;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__357606__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__357618 = cljs.core.next.call(null,seq__357606__$1);
var G__357619 = null;
var G__357620 = 0;
var G__357621 = 0;
seq__357606 = G__357618;
chunk__357607 = G__357619;
count__357608 = G__357620;
i__357609 = G__357621;
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
do__GT_.cljs$lang$applyTo = (function (arglist__357622){
var forms = cljs.core.seq(arglist__357622);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357623_SHARP_,p2__357624_SHARP_){return domina.append_BANG_.call(null,p1__357623_SHARP_,p2__357624_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__357625){
var values = cljs.core.seq(arglist__357625);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357626_SHARP_,p2__357627_SHARP_){return domina.prepend_BANG_.call(null,p1__357626_SHARP_,p2__357627_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__357628){
var values = cljs.core.seq(arglist__357628);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357629_SHARP_,p2__357630_SHARP_){return domina.insert_before_BANG_.call(null,p1__357629_SHARP_,p2__357630_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__357631){
var values = cljs.core.seq(arglist__357631);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357632_SHARP_,p2__357633_SHARP_){return domina.insert_after_BANG_.call(null,p1__357632_SHARP_,p2__357633_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__357634){
var values = cljs.core.seq(arglist__357634);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__357635_SHARP_,p2__357636_SHARP_){return domina.swap_content_BANG_.call(null,p1__357635_SHARP_,p2__357636_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__357637){
var values = cljs.core.seq(arglist__357637);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__357638_SHARP_){return domina.detach_BANG_.call(null,p1__357638_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__357639_SHARP_){var seq__357646 = cljs.core.seq.call(null,pairs);var chunk__357647 = null;var count__357648 = 0;var i__357649 = 0;while(true){
if((i__357649 < count__357648))
{var vec__357650 = cljs.core._nth.call(null,chunk__357647,i__357649);var name = cljs.core.nth.call(null,vec__357650,0,null);var value = cljs.core.nth.call(null,vec__357650,1,null);domina.set_style_BANG_.call(null,p1__357639_SHARP_,name,value);
{
var G__357652 = seq__357646;
var G__357653 = chunk__357647;
var G__357654 = count__357648;
var G__357655 = (i__357649 + 1);
seq__357646 = G__357652;
chunk__357647 = G__357653;
count__357648 = G__357654;
i__357649 = G__357655;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357646);if(temp__4092__auto__)
{var seq__357646__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357646__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357646__$1);{
var G__357656 = cljs.core.chunk_rest.call(null,seq__357646__$1);
var G__357657 = c__14708__auto__;
var G__357658 = cljs.core.count.call(null,c__14708__auto__);
var G__357659 = 0;
seq__357646 = G__357656;
chunk__357647 = G__357657;
count__357648 = G__357658;
i__357649 = G__357659;
continue;
}
} else
{var vec__357651 = cljs.core.first.call(null,seq__357646__$1);var name = cljs.core.nth.call(null,vec__357651,0,null);var value = cljs.core.nth.call(null,vec__357651,1,null);domina.set_style_BANG_.call(null,p1__357639_SHARP_,name,value);
{
var G__357660 = cljs.core.next.call(null,seq__357646__$1);
var G__357661 = null;
var G__357662 = 0;
var G__357663 = 0;
seq__357646 = G__357660;
chunk__357647 = G__357661;
count__357648 = G__357662;
i__357649 = G__357663;
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
set_style.cljs$lang$applyTo = (function (arglist__357664){
var values = cljs.core.seq(arglist__357664);
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
remove_style.cljs$lang$applyTo = (function (arglist__357665){
var values = cljs.core.seq(arglist__357665);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__357666_SHARP_){return domina.set_data_BANG_.call(null,p1__357666_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__357667){
var ttime = cljs.core.first(arglist__357667);
var funcs = cljs.core.rest(arglist__357667);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__357669_SHARP_,p2__357668_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__357668_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__357694_357702 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__357695_357703 = null;var count__357696_357704 = 0;var i__357697_357705 = 0;while(true){
if((i__357697_357705 < count__357696_357704))
{var idx_357706 = cljs.core._nth.call(null,chunk__357695_357703,i__357697_357705);var attr_357707 = pnod.attributes.item(idx_357706);if(cljs.core.truth_(attr_357707.specified))
{attr_357707.value = rep_str.call(null,attr_357707.value);
} else
{}
{
var G__357708 = seq__357694_357702;
var G__357709 = chunk__357695_357703;
var G__357710 = count__357696_357704;
var G__357711 = (i__357697_357705 + 1);
seq__357694_357702 = G__357708;
chunk__357695_357703 = G__357709;
count__357696_357704 = G__357710;
i__357697_357705 = G__357711;
continue;
}
} else
{var temp__4092__auto___357712 = cljs.core.seq.call(null,seq__357694_357702);if(temp__4092__auto___357712)
{var seq__357694_357713__$1 = temp__4092__auto___357712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357694_357713__$1))
{var c__14708__auto___357714 = cljs.core.chunk_first.call(null,seq__357694_357713__$1);{
var G__357715 = cljs.core.chunk_rest.call(null,seq__357694_357713__$1);
var G__357716 = c__14708__auto___357714;
var G__357717 = cljs.core.count.call(null,c__14708__auto___357714);
var G__357718 = 0;
seq__357694_357702 = G__357715;
chunk__357695_357703 = G__357716;
count__357696_357704 = G__357717;
i__357697_357705 = G__357718;
continue;
}
} else
{var idx_357719 = cljs.core.first.call(null,seq__357694_357713__$1);var attr_357720 = pnod.attributes.item(idx_357719);if(cljs.core.truth_(attr_357720.specified))
{attr_357720.value = rep_str.call(null,attr_357720.value);
} else
{}
{
var G__357721 = cljs.core.next.call(null,seq__357694_357713__$1);
var G__357722 = null;
var G__357723 = 0;
var G__357724 = 0;
seq__357694_357702 = G__357721;
chunk__357695_357703 = G__357722;
count__357696_357704 = G__357723;
i__357697_357705 = G__357724;
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
{var seq__357698 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__357699 = null;var count__357700 = 0;var i__357701 = 0;while(true){
if((i__357701 < count__357700))
{var cnode = cljs.core._nth.call(null,chunk__357699,i__357701);rep_node.call(null,cnode);
{
var G__357725 = seq__357698;
var G__357726 = chunk__357699;
var G__357727 = count__357700;
var G__357728 = (i__357701 + 1);
seq__357698 = G__357725;
chunk__357699 = G__357726;
count__357700 = G__357727;
i__357701 = G__357728;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357698);if(temp__4092__auto__)
{var seq__357698__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357698__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357698__$1);{
var G__357729 = cljs.core.chunk_rest.call(null,seq__357698__$1);
var G__357730 = c__14708__auto__;
var G__357731 = cljs.core.count.call(null,c__14708__auto__);
var G__357732 = 0;
seq__357698 = G__357729;
chunk__357699 = G__357730;
count__357700 = G__357731;
i__357701 = G__357732;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__357698__$1);rep_node.call(null,cnode);
{
var G__357733 = cljs.core.next.call(null,seq__357698__$1);
var G__357734 = null;
var G__357735 = 0;
var G__357736 = 0;
seq__357698 = G__357733;
chunk__357699 = G__357734;
count__357700 = G__357735;
i__357701 = G__357736;
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
{var vec__357746 = node_spec;var tag = cljs.core.nth.call(null,vec__357746,0,null);var vec__357747 = cljs.core.nthnext.call(null,vec__357746,1);var m = cljs.core.nth.call(null,vec__357747,0,null);var ms = cljs.core.nthnext.call(null,vec__357747,1);var more = vec__357747;var vec__357748 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__357748,0,null);var segments = cljs.core.nthnext.call(null,vec__357748,1);var id = cljs.core.some.call(null,((function (vec__357746,tag,vec__357747,m,ms,more,vec__357748,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__357746,tag,vec__357747,m,ms,more,vec__357748,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__357746,tag,vec__357747,m,ms,more,vec__357748,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__357746,tag,vec__357747,m,ms,more,vec__357748,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__357749_357755 = cljs.core.seq.call(null,attrs__$2);var chunk__357750_357756 = null;var count__357751_357757 = 0;var i__357752_357758 = 0;while(true){
if((i__357752_357758 < count__357751_357757))
{var vec__357753_357759 = cljs.core._nth.call(null,chunk__357750_357756,i__357752_357758);var key_357760 = cljs.core.nth.call(null,vec__357753_357759,0,null);var val_357761 = cljs.core.nth.call(null,vec__357753_357759,1,null);node.setAttribute(cljs.core.name.call(null,key_357760),val_357761);
{
var G__357762 = seq__357749_357755;
var G__357763 = chunk__357750_357756;
var G__357764 = count__357751_357757;
var G__357765 = (i__357752_357758 + 1);
seq__357749_357755 = G__357762;
chunk__357750_357756 = G__357763;
count__357751_357757 = G__357764;
i__357752_357758 = G__357765;
continue;
}
} else
{var temp__4092__auto___357766 = cljs.core.seq.call(null,seq__357749_357755);if(temp__4092__auto___357766)
{var seq__357749_357767__$1 = temp__4092__auto___357766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357749_357767__$1))
{var c__14708__auto___357768 = cljs.core.chunk_first.call(null,seq__357749_357767__$1);{
var G__357769 = cljs.core.chunk_rest.call(null,seq__357749_357767__$1);
var G__357770 = c__14708__auto___357768;
var G__357771 = cljs.core.count.call(null,c__14708__auto___357768);
var G__357772 = 0;
seq__357749_357755 = G__357769;
chunk__357750_357756 = G__357770;
count__357751_357757 = G__357771;
i__357752_357758 = G__357772;
continue;
}
} else
{var vec__357754_357773 = cljs.core.first.call(null,seq__357749_357767__$1);var key_357774 = cljs.core.nth.call(null,vec__357754_357773,0,null);var val_357775 = cljs.core.nth.call(null,vec__357754_357773,1,null);node.setAttribute(cljs.core.name.call(null,key_357774),val_357775);
{
var G__357776 = cljs.core.next.call(null,seq__357749_357767__$1);
var G__357777 = null;
var G__357778 = 0;
var G__357779 = 0;
seq__357749_357755 = G__357776;
chunk__357750_357756 = G__357777;
count__357751_357757 = G__357778;
i__357752_357758 = G__357779;
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
return (function (p1__357780_SHARP_){return p1__357780_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__357781_SHARP_){return p1__357781_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__357783_SHARP_,p2__357782_SHARP_){var G__357786 = p2__357782_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__357786))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__357786))
{return enfocus.core.read_select_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__357786))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__357786))
{var G__357787 = p2__357782_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__357787))
{return enfocus.core.read_checked_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__357787))
{return enfocus.core.read_checked_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__357787))
{return enfocus.core.read_simple_input.call(null,p2__357782_SHARP_,p1__357783_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__357783_SHARP_;
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
{return p1__357783_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__357788_SHARP_){if((p1__357788_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__357788_SHARP_);
} else
{if((p1__357788_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__357788_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__357788_SHARP_))
{return create_sel_str.call(null,p1__357788_SHARP_);
} else
{if(typeof p1__357788_SHARP_ === 'string')
{return p1__357788_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__357799 = node;if(G__357799)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__357799.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__357799.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__357799);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__357799);
}
} else
{return and__13967__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__357800 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__357800,0,null);var trans__$1 = cljs.core.nth.call(null,vec__357800,1,null);var seq__357801 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__357802 = null;var count__357803 = 0;var i__357804 = 0;while(true){
if((i__357804 < count__357803))
{var vec__357805 = cljs.core._nth.call(null,chunk__357802,i__357804);var sel = cljs.core.nth.call(null,vec__357805,0,null);var t = cljs.core.nth.call(null,vec__357805,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__357807 = seq__357801;
var G__357808 = chunk__357802;
var G__357809 = count__357803;
var G__357810 = (i__357804 + 1);
seq__357801 = G__357807;
chunk__357802 = G__357808;
count__357803 = G__357809;
i__357804 = G__357810;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357801);if(temp__4092__auto__)
{var seq__357801__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357801__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357801__$1);{
var G__357811 = cljs.core.chunk_rest.call(null,seq__357801__$1);
var G__357812 = c__14708__auto__;
var G__357813 = cljs.core.count.call(null,c__14708__auto__);
var G__357814 = 0;
seq__357801 = G__357811;
chunk__357802 = G__357812;
count__357803 = G__357813;
i__357804 = G__357814;
continue;
}
} else
{var vec__357806 = cljs.core.first.call(null,seq__357801__$1);var sel = cljs.core.nth.call(null,vec__357806,0,null);var t = cljs.core.nth.call(null,vec__357806,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__357815 = cljs.core.next.call(null,seq__357801__$1);
var G__357816 = null;
var G__357817 = 0;
var G__357818 = 0;
seq__357801 = G__357815;
chunk__357802 = G__357816;
count__357803 = G__357817;
i__357804 = G__357818;
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
i_at.cljs$lang$applyTo = (function (arglist__357819){
var id_mask = cljs.core.first(arglist__357819);
arglist__357819 = cljs.core.next(arglist__357819);
var node = cljs.core.first(arglist__357819);
var trans = cljs.core.rest(arglist__357819);
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
at.cljs$lang$applyTo = (function (arglist__357820){
var node = cljs.core.first(arglist__357820);
var trans = cljs.core.rest(arglist__357820);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__357825 = node;if(G__357825)
{var bit__14610__auto__ = null;if(cljs.core.truth_((function (){var or__13979__auto__ = bit__14610__auto__;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return G__357825.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__357825.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__357825);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__357825);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__357826 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__357826,0,null);var trans__$1 = cljs.core.nth.call(null,vec__357826,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__357827){var vec__357828 = p__357827;var ky = cljs.core.nth.call(null,vec__357828,0,null);var sel = cljs.core.nth.call(null,vec__357828,1,null);var ext = cljs.core.nth.call(null,vec__357828,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__357829){
var node = cljs.core.first(arglist__357829);
var trans = cljs.core.rest(arglist__357829);
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