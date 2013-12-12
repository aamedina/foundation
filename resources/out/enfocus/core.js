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
enfocus.core.ISelector = (function (){var obj99291 = {};return obj99291;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13810__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (enfocus.core.select[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (enfocus.core.select["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (enfocus.core.select[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (enfocus.core.select["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13810__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (enfocus.core.select[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (enfocus.core.select["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
enfocus.core.ITransform = (function (){var obj99293 = {};return obj99293;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13810__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13810__auto__ = this$;if(and__13810__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13810__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14425__auto__ = (((this$ == null))?null:this$);return (function (){var or__13822__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13810__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13810__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13810__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__99294_SHARP_){if(typeof p1__99294_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__99294_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__99294_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__99301_99307 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__99302_99308 = null;var count__99303_99309 = 0;var i__99304_99310 = 0;while(true){
if((i__99304_99310 < count__99303_99309))
{var vec__99305_99311 = cljs.core._nth.call(null,chunk__99302_99308,i__99304_99310);var attr_99312 = cljs.core.nth.call(null,vec__99305_99311,0,null);var value_99313 = cljs.core.nth.call(null,vec__99305_99311,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_99312),value_99313);
{
var G__99314 = seq__99301_99307;
var G__99315 = chunk__99302_99308;
var G__99316 = count__99303_99309;
var G__99317 = (i__99304_99310 + 1);
seq__99301_99307 = G__99314;
chunk__99302_99308 = G__99315;
count__99303_99309 = G__99316;
i__99304_99310 = G__99317;
continue;
}
} else
{var temp__4092__auto___99318 = cljs.core.seq.call(null,seq__99301_99307);if(temp__4092__auto___99318)
{var seq__99301_99319__$1 = temp__4092__auto___99318;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99301_99319__$1))
{var c__14546__auto___99320 = cljs.core.chunk_first.call(null,seq__99301_99319__$1);{
var G__99321 = cljs.core.chunk_rest.call(null,seq__99301_99319__$1);
var G__99322 = c__14546__auto___99320;
var G__99323 = cljs.core.count.call(null,c__14546__auto___99320);
var G__99324 = 0;
seq__99301_99307 = G__99321;
chunk__99302_99308 = G__99322;
count__99303_99309 = G__99323;
i__99304_99310 = G__99324;
continue;
}
} else
{var vec__99306_99325 = cljs.core.first.call(null,seq__99301_99319__$1);var attr_99326 = cljs.core.nth.call(null,vec__99306_99325,0,null);var value_99327 = cljs.core.nth.call(null,vec__99306_99325,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_99326),value_99327);
{
var G__99328 = cljs.core.next.call(null,seq__99301_99319__$1);
var G__99329 = null;
var G__99330 = 0;
var G__99331 = 0;
seq__99301_99307 = G__99328;
chunk__99302_99308 = G__99329;
count__99303_99309 = G__99330;
i__99304_99310 = G__99331;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__99336 = cljs.core.seq.call(null,values);var chunk__99337 = null;var count__99338 = 0;var i__99339 = 0;while(true){
if((i__99339 < count__99338))
{var attr = cljs.core._nth.call(null,chunk__99337,i__99339);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__99340 = seq__99336;
var G__99341 = chunk__99337;
var G__99342 = count__99338;
var G__99343 = (i__99339 + 1);
seq__99336 = G__99340;
chunk__99337 = G__99341;
count__99338 = G__99342;
i__99339 = G__99343;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99336);if(temp__4092__auto__)
{var seq__99336__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99336__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99336__$1);{
var G__99344 = cljs.core.chunk_rest.call(null,seq__99336__$1);
var G__99345 = c__14546__auto__;
var G__99346 = cljs.core.count.call(null,c__14546__auto__);
var G__99347 = 0;
seq__99336 = G__99344;
chunk__99337 = G__99345;
count__99338 = G__99346;
i__99339 = G__99347;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__99336__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__99348 = cljs.core.next.call(null,seq__99336__$1);
var G__99349 = null;
var G__99350 = 0;
var G__99351 = 0;
seq__99336 = G__99348;
chunk__99337 = G__99349;
count__99338 = G__99350;
i__99339 = G__99351;
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
{var seq__99358_99364 = cljs.core.seq.call(null,ats);var chunk__99359_99365 = null;var count__99360_99366 = 0;var i__99361_99367 = 0;while(true){
if((i__99361_99367 < count__99360_99366))
{var vec__99362_99368 = cljs.core._nth.call(null,chunk__99359_99365,i__99361_99367);var k_99369 = cljs.core.nth.call(null,vec__99362_99368,0,null);var v_99370 = cljs.core.nth.call(null,vec__99362_99368,1,null);add_map_attrs.call(null,elem,k_99369,v_99370);
{
var G__99371 = seq__99358_99364;
var G__99372 = chunk__99359_99365;
var G__99373 = count__99360_99366;
var G__99374 = (i__99361_99367 + 1);
seq__99358_99364 = G__99371;
chunk__99359_99365 = G__99372;
count__99360_99366 = G__99373;
i__99361_99367 = G__99374;
continue;
}
} else
{var temp__4092__auto___99375 = cljs.core.seq.call(null,seq__99358_99364);if(temp__4092__auto___99375)
{var seq__99358_99376__$1 = temp__4092__auto___99375;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99358_99376__$1))
{var c__14546__auto___99377 = cljs.core.chunk_first.call(null,seq__99358_99376__$1);{
var G__99378 = cljs.core.chunk_rest.call(null,seq__99358_99376__$1);
var G__99379 = c__14546__auto___99377;
var G__99380 = cljs.core.count.call(null,c__14546__auto___99377);
var G__99381 = 0;
seq__99358_99364 = G__99378;
chunk__99359_99365 = G__99379;
count__99360_99366 = G__99380;
i__99361_99367 = G__99381;
continue;
}
} else
{var vec__99363_99382 = cljs.core.first.call(null,seq__99358_99376__$1);var k_99383 = cljs.core.nth.call(null,vec__99363_99382,0,null);var v_99384 = cljs.core.nth.call(null,vec__99363_99382,1,null);add_map_attrs.call(null,elem,k_99383,v_99384);
{
var G__99385 = cljs.core.next.call(null,seq__99358_99376__$1);
var G__99386 = null;
var G__99387 = 0;
var G__99388 = 0;
seq__99358_99364 = G__99385;
chunk__99359_99365 = G__99386;
count__99360_99366 = G__99387;
i__99361_99367 = G__99388;
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
var seq__99393_99397 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__99394_99398 = null;var count__99395_99399 = 0;var i__99396_99400 = 0;while(true){
if((i__99396_99400 < count__99395_99399))
{var node_99401 = cljs.core._nth.call(null,chunk__99394_99398,i__99396_99400);goog.dom.appendChild(div,node_99401);
{
var G__99402 = seq__99393_99397;
var G__99403 = chunk__99394_99398;
var G__99404 = count__99395_99399;
var G__99405 = (i__99396_99400 + 1);
seq__99393_99397 = G__99402;
chunk__99394_99398 = G__99403;
count__99395_99399 = G__99404;
i__99396_99400 = G__99405;
continue;
}
} else
{var temp__4092__auto___99406 = cljs.core.seq.call(null,seq__99393_99397);if(temp__4092__auto___99406)
{var seq__99393_99407__$1 = temp__4092__auto___99406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99393_99407__$1))
{var c__14546__auto___99408 = cljs.core.chunk_first.call(null,seq__99393_99407__$1);{
var G__99409 = cljs.core.chunk_rest.call(null,seq__99393_99407__$1);
var G__99410 = c__14546__auto___99408;
var G__99411 = cljs.core.count.call(null,c__14546__auto___99408);
var G__99412 = 0;
seq__99393_99397 = G__99409;
chunk__99394_99398 = G__99410;
count__99395_99399 = G__99411;
i__99396_99400 = G__99412;
continue;
}
} else
{var node_99413 = cljs.core.first.call(null,seq__99393_99407__$1);goog.dom.appendChild(div,node_99413);
{
var G__99414 = cljs.core.next.call(null,seq__99393_99407__$1);
var G__99415 = null;
var G__99416 = 0;
var G__99417 = 0;
seq__99393_99397 = G__99414;
chunk__99394_99398 = G__99415;
count__99395_99399 = G__99416;
i__99396_99400 = G__99417;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__99418_SHARP_){var id = p1__99418_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__99418_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__99420 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__99420,0,null);var txt = cljs.core.nth.call(null,vec__99420,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__99425_99429 = cljs.core.seq.call(null,dfa);var chunk__99426_99430 = null;var count__99427_99431 = 0;var i__99428_99432 = 0;while(true){
if((i__99428_99432 < count__99427_99431))
{var df_99433 = cljs.core._nth.call(null,chunk__99426_99430,i__99428_99432);goog.dom.append(frag,df_99433);
{
var G__99434 = seq__99425_99429;
var G__99435 = chunk__99426_99430;
var G__99436 = count__99427_99431;
var G__99437 = (i__99428_99432 + 1);
seq__99425_99429 = G__99434;
chunk__99426_99430 = G__99435;
count__99427_99431 = G__99436;
i__99428_99432 = G__99437;
continue;
}
} else
{var temp__4092__auto___99438 = cljs.core.seq.call(null,seq__99425_99429);if(temp__4092__auto___99438)
{var seq__99425_99439__$1 = temp__4092__auto___99438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99425_99439__$1))
{var c__14546__auto___99440 = cljs.core.chunk_first.call(null,seq__99425_99439__$1);{
var G__99441 = cljs.core.chunk_rest.call(null,seq__99425_99439__$1);
var G__99442 = c__14546__auto___99440;
var G__99443 = cljs.core.count.call(null,c__14546__auto___99440);
var G__99444 = 0;
seq__99425_99429 = G__99441;
chunk__99426_99430 = G__99442;
count__99427_99431 = G__99443;
i__99428_99432 = G__99444;
continue;
}
} else
{var df_99445 = cljs.core.first.call(null,seq__99425_99439__$1);goog.dom.append(frag,df_99445);
{
var G__99446 = cljs.core.next.call(null,seq__99425_99439__$1);
var G__99447 = null;
var G__99448 = 0;
var G__99449 = 0;
seq__99425_99429 = G__99446;
chunk__99426_99430 = G__99447;
count__99427_99431 = G__99448;
i__99428_99432 = G__99449;
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
{var vec__99452 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__99452,0,null);var tdom = cljs.core.nth.call(null,vec__99452,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__99452,sym,tdom,dom,tsnip){
return (function (p1__99450_SHARP_){return p1__99450_SHARP_.outerHTML;
});})(vec__99452,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t99456 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t99456 = (function (trans,func,extr_multi_node,meta99457){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta99457 = meta99457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t99456.cljs$lang$type = true;
enfocus.core.t99456.cljs$lang$ctorStr = "enfocus.core/t99456";
enfocus.core.t99456.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"enfocus.core/t99456");
});
enfocus.core.t99456.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t99456.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t99456.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t99456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99458){var self__ = this;
var _99458__$1 = this;return self__.meta99457;
});
enfocus.core.t99456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99458,meta99457__$1){var self__ = this;
var _99458__$1 = this;return (new enfocus.core.t99456(self__.trans,self__.func,self__.extr_multi_node,meta99457__$1));
});
enfocus.core.__GT_t99456 = (function __GT_t99456(trans__$1,func__$1,extr_multi_node__$1,meta99457){return (new enfocus.core.t99456(trans__$1,func__$1,extr_multi_node__$1,meta99457));
});
}
return (new enfocus.core.t99456(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t99466 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t99466 = (function (trans,func,multi_node_chain,meta99467){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta99467 = meta99467;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t99466.cljs$lang$type = true;
enfocus.core.t99466.cljs$lang$ctorStr = "enfocus.core/t99466";
enfocus.core.t99466.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"enfocus.core/t99466");
});
enfocus.core.t99466.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t99466.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t99466.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t99466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99468){var self__ = this;
var _99468__$1 = this;return self__.meta99467;
});
enfocus.core.t99466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99468,meta99467__$1){var self__ = this;
var _99468__$1 = this;return (new enfocus.core.t99466(self__.trans,self__.func,self__.multi_node_chain,meta99467__$1));
});
enfocus.core.__GT_t99466 = (function __GT_t99466(trans__$1,func__$1,multi_node_chain__$1,meta99467){return (new enfocus.core.t99466(trans__$1,func__$1,multi_node_chain__$1,meta99467));
});
}
return (new enfocus.core.t99466(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__99459_SHARP_){return domina.nodes.call(null,p1__99459_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t99469 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t99469 = (function (trans,func,values,multi_node_chain,meta99470){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta99470 = meta99470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t99469.cljs$lang$type = true;
enfocus.core.t99469.cljs$lang$ctorStr = "enfocus.core/t99469";
enfocus.core.t99469.cljs$lang$ctorPrWriter = (function (this__14366__auto__,writer__14367__auto__,opt__14368__auto__){return cljs.core._write.call(null,writer__14367__auto__,"enfocus.core/t99469");
});
enfocus.core.t99469.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t99469.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t99469.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t99469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_99471){var self__ = this;
var _99471__$1 = this;return self__.meta99470;
});
enfocus.core.t99469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_99471,meta99470__$1){var self__ = this;
var _99471__$1 = this;return (new enfocus.core.t99469(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta99470__$1));
});
enfocus.core.__GT_t99469 = (function __GT_t99469(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta99470){return (new enfocus.core.t99469(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta99470));
});
}
return (new enfocus.core.t99469(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99472_SHARP_,p2__99473_SHARP_){domina.destroy_children_BANG_.call(null,p1__99472_SHARP_);
return domina.append_BANG_.call(null,p1__99472_SHARP_,p2__99473_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__99474){
var values = cljs.core.seq(arglist__99474);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__99475_SHARP_){return domina.set_html_BANG_.call(null,p1__99475_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__99476_SHARP_){var seq__99483 = cljs.core.seq.call(null,pairs);var chunk__99484 = null;var count__99485 = 0;var i__99486 = 0;while(true){
if((i__99486 < count__99485))
{var vec__99487 = cljs.core._nth.call(null,chunk__99484,i__99486);var name = cljs.core.nth.call(null,vec__99487,0,null);var value = cljs.core.nth.call(null,vec__99487,1,null);domina.set_attr_BANG_.call(null,p1__99476_SHARP_,name,value);
{
var G__99489 = seq__99483;
var G__99490 = chunk__99484;
var G__99491 = count__99485;
var G__99492 = (i__99486 + 1);
seq__99483 = G__99489;
chunk__99484 = G__99490;
count__99485 = G__99491;
i__99486 = G__99492;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99483);if(temp__4092__auto__)
{var seq__99483__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99483__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99483__$1);{
var G__99493 = cljs.core.chunk_rest.call(null,seq__99483__$1);
var G__99494 = c__14546__auto__;
var G__99495 = cljs.core.count.call(null,c__14546__auto__);
var G__99496 = 0;
seq__99483 = G__99493;
chunk__99484 = G__99494;
count__99485 = G__99495;
i__99486 = G__99496;
continue;
}
} else
{var vec__99488 = cljs.core.first.call(null,seq__99483__$1);var name = cljs.core.nth.call(null,vec__99488,0,null);var value = cljs.core.nth.call(null,vec__99488,1,null);domina.set_attr_BANG_.call(null,p1__99476_SHARP_,name,value);
{
var G__99497 = cljs.core.next.call(null,seq__99483__$1);
var G__99498 = null;
var G__99499 = 0;
var G__99500 = 0;
seq__99483 = G__99497;
chunk__99484 = G__99498;
count__99485 = G__99499;
i__99486 = G__99500;
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
set_attr.cljs$lang$applyTo = (function (arglist__99501){
var values = cljs.core.seq(arglist__99501);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__99502_SHARP_){var seq__99507 = cljs.core.seq.call(null,values);var chunk__99508 = null;var count__99509 = 0;var i__99510 = 0;while(true){
if((i__99510 < count__99509))
{var name = cljs.core._nth.call(null,chunk__99508,i__99510);domina.remove_attr_BANG_.call(null,p1__99502_SHARP_,name);
{
var G__99511 = seq__99507;
var G__99512 = chunk__99508;
var G__99513 = count__99509;
var G__99514 = (i__99510 + 1);
seq__99507 = G__99511;
chunk__99508 = G__99512;
count__99509 = G__99513;
i__99510 = G__99514;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99507);if(temp__4092__auto__)
{var seq__99507__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99507__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99507__$1);{
var G__99515 = cljs.core.chunk_rest.call(null,seq__99507__$1);
var G__99516 = c__14546__auto__;
var G__99517 = cljs.core.count.call(null,c__14546__auto__);
var G__99518 = 0;
seq__99507 = G__99515;
chunk__99508 = G__99516;
count__99509 = G__99517;
i__99510 = G__99518;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__99507__$1);domina.remove_attr_BANG_.call(null,p1__99502_SHARP_,name);
{
var G__99519 = cljs.core.next.call(null,seq__99507__$1);
var G__99520 = null;
var G__99521 = 0;
var G__99522 = 0;
seq__99507 = G__99519;
chunk__99508 = G__99520;
count__99509 = G__99521;
i__99510 = G__99522;
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
remove_attr.cljs$lang$applyTo = (function (arglist__99523){
var values = cljs.core.seq(arglist__99523);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__99526){var vec__99527 = p__99526;var n = cljs.core.nth.call(null,vec__99527,0,null);var v = cljs.core.nth.call(null,vec__99527,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__99528){
var forms = cljs.core.seq(arglist__99528);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__99529_SHARP_){var seq__99534 = cljs.core.seq.call(null,values);var chunk__99535 = null;var count__99536 = 0;var i__99537 = 0;while(true){
if((i__99537 < count__99536))
{var val = cljs.core._nth.call(null,chunk__99535,i__99537);domina.add_class_BANG_.call(null,p1__99529_SHARP_,val);
{
var G__99538 = seq__99534;
var G__99539 = chunk__99535;
var G__99540 = count__99536;
var G__99541 = (i__99537 + 1);
seq__99534 = G__99538;
chunk__99535 = G__99539;
count__99536 = G__99540;
i__99537 = G__99541;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99534);if(temp__4092__auto__)
{var seq__99534__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99534__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99534__$1);{
var G__99542 = cljs.core.chunk_rest.call(null,seq__99534__$1);
var G__99543 = c__14546__auto__;
var G__99544 = cljs.core.count.call(null,c__14546__auto__);
var G__99545 = 0;
seq__99534 = G__99542;
chunk__99535 = G__99543;
count__99536 = G__99544;
i__99537 = G__99545;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__99534__$1);domina.add_class_BANG_.call(null,p1__99529_SHARP_,val);
{
var G__99546 = cljs.core.next.call(null,seq__99534__$1);
var G__99547 = null;
var G__99548 = 0;
var G__99549 = 0;
seq__99534 = G__99546;
chunk__99535 = G__99547;
count__99536 = G__99548;
i__99537 = G__99549;
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
add_class.cljs$lang$applyTo = (function (arglist__99550){
var values = cljs.core.seq(arglist__99550);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__99551_SHARP_){var seq__99556 = cljs.core.seq.call(null,values);var chunk__99557 = null;var count__99558 = 0;var i__99559 = 0;while(true){
if((i__99559 < count__99558))
{var val = cljs.core._nth.call(null,chunk__99557,i__99559);domina.remove_class_BANG_.call(null,p1__99551_SHARP_,val);
{
var G__99560 = seq__99556;
var G__99561 = chunk__99557;
var G__99562 = count__99558;
var G__99563 = (i__99559 + 1);
seq__99556 = G__99560;
chunk__99557 = G__99561;
count__99558 = G__99562;
i__99559 = G__99563;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99556);if(temp__4092__auto__)
{var seq__99556__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99556__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99556__$1);{
var G__99564 = cljs.core.chunk_rest.call(null,seq__99556__$1);
var G__99565 = c__14546__auto__;
var G__99566 = cljs.core.count.call(null,c__14546__auto__);
var G__99567 = 0;
seq__99556 = G__99564;
chunk__99557 = G__99565;
count__99558 = G__99566;
i__99559 = G__99567;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__99556__$1);domina.remove_class_BANG_.call(null,p1__99551_SHARP_,val);
{
var G__99568 = cljs.core.next.call(null,seq__99556__$1);
var G__99569 = null;
var G__99570 = 0;
var G__99571 = 0;
seq__99556 = G__99568;
chunk__99557 = G__99569;
count__99558 = G__99570;
i__99559 = G__99571;
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
remove_class.cljs$lang$applyTo = (function (arglist__99572){
var values = cljs.core.seq(arglist__99572);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__99573_SHARP_){return domina.set_classes_BANG_.call(null,p1__99573_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__99574){
var values = cljs.core.seq(arglist__99574);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__99579 = cljs.core.seq.call(null,forms);var chunk__99580 = null;var count__99581 = 0;var i__99582 = 0;while(true){
if((i__99582 < count__99581))
{var fun = cljs.core._nth.call(null,chunk__99580,i__99582);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__99583 = seq__99579;
var G__99584 = chunk__99580;
var G__99585 = count__99581;
var G__99586 = (i__99582 + 1);
seq__99579 = G__99583;
chunk__99580 = G__99584;
count__99581 = G__99585;
i__99582 = G__99586;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99579);if(temp__4092__auto__)
{var seq__99579__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99579__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99579__$1);{
var G__99587 = cljs.core.chunk_rest.call(null,seq__99579__$1);
var G__99588 = c__14546__auto__;
var G__99589 = cljs.core.count.call(null,c__14546__auto__);
var G__99590 = 0;
seq__99579 = G__99587;
chunk__99580 = G__99588;
count__99581 = G__99589;
i__99582 = G__99590;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__99579__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__99591 = cljs.core.next.call(null,seq__99579__$1);
var G__99592 = null;
var G__99593 = 0;
var G__99594 = 0;
seq__99579 = G__99591;
chunk__99580 = G__99592;
count__99581 = G__99593;
i__99582 = G__99594;
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
do__GT_.cljs$lang$applyTo = (function (arglist__99595){
var forms = cljs.core.seq(arglist__99595);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99596_SHARP_,p2__99597_SHARP_){return domina.append_BANG_.call(null,p1__99596_SHARP_,p2__99597_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__99598){
var values = cljs.core.seq(arglist__99598);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99599_SHARP_,p2__99600_SHARP_){return domina.prepend_BANG_.call(null,p1__99599_SHARP_,p2__99600_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__99601){
var values = cljs.core.seq(arglist__99601);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99602_SHARP_,p2__99603_SHARP_){return domina.insert_before_BANG_.call(null,p1__99602_SHARP_,p2__99603_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__99604){
var values = cljs.core.seq(arglist__99604);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99605_SHARP_,p2__99606_SHARP_){return domina.insert_after_BANG_.call(null,p1__99605_SHARP_,p2__99606_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__99607){
var values = cljs.core.seq(arglist__99607);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__99608_SHARP_,p2__99609_SHARP_){return domina.swap_content_BANG_.call(null,p1__99608_SHARP_,p2__99609_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__99610){
var values = cljs.core.seq(arglist__99610);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__99611_SHARP_){return domina.detach_BANG_.call(null,p1__99611_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__99612_SHARP_){var seq__99619 = cljs.core.seq.call(null,pairs);var chunk__99620 = null;var count__99621 = 0;var i__99622 = 0;while(true){
if((i__99622 < count__99621))
{var vec__99623 = cljs.core._nth.call(null,chunk__99620,i__99622);var name = cljs.core.nth.call(null,vec__99623,0,null);var value = cljs.core.nth.call(null,vec__99623,1,null);domina.set_style_BANG_.call(null,p1__99612_SHARP_,name,value);
{
var G__99625 = seq__99619;
var G__99626 = chunk__99620;
var G__99627 = count__99621;
var G__99628 = (i__99622 + 1);
seq__99619 = G__99625;
chunk__99620 = G__99626;
count__99621 = G__99627;
i__99622 = G__99628;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99619);if(temp__4092__auto__)
{var seq__99619__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99619__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99619__$1);{
var G__99629 = cljs.core.chunk_rest.call(null,seq__99619__$1);
var G__99630 = c__14546__auto__;
var G__99631 = cljs.core.count.call(null,c__14546__auto__);
var G__99632 = 0;
seq__99619 = G__99629;
chunk__99620 = G__99630;
count__99621 = G__99631;
i__99622 = G__99632;
continue;
}
} else
{var vec__99624 = cljs.core.first.call(null,seq__99619__$1);var name = cljs.core.nth.call(null,vec__99624,0,null);var value = cljs.core.nth.call(null,vec__99624,1,null);domina.set_style_BANG_.call(null,p1__99612_SHARP_,name,value);
{
var G__99633 = cljs.core.next.call(null,seq__99619__$1);
var G__99634 = null;
var G__99635 = 0;
var G__99636 = 0;
seq__99619 = G__99633;
chunk__99620 = G__99634;
count__99621 = G__99635;
i__99622 = G__99636;
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
set_style.cljs$lang$applyTo = (function (arglist__99637){
var values = cljs.core.seq(arglist__99637);
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
remove_style.cljs$lang$applyTo = (function (arglist__99638){
var values = cljs.core.seq(arglist__99638);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__99639_SHARP_){return domina.set_data_BANG_.call(null,p1__99639_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__99640){
var ttime = cljs.core.first(arglist__99640);
var funcs = cljs.core.rest(arglist__99640);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__99642_SHARP_,p2__99641_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__99641_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__99667_99675 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__99668_99676 = null;var count__99669_99677 = 0;var i__99670_99678 = 0;while(true){
if((i__99670_99678 < count__99669_99677))
{var idx_99679 = cljs.core._nth.call(null,chunk__99668_99676,i__99670_99678);var attr_99680 = pnod.attributes.item(idx_99679);if(cljs.core.truth_(attr_99680.specified))
{attr_99680.value = rep_str.call(null,attr_99680.value);
} else
{}
{
var G__99681 = seq__99667_99675;
var G__99682 = chunk__99668_99676;
var G__99683 = count__99669_99677;
var G__99684 = (i__99670_99678 + 1);
seq__99667_99675 = G__99681;
chunk__99668_99676 = G__99682;
count__99669_99677 = G__99683;
i__99670_99678 = G__99684;
continue;
}
} else
{var temp__4092__auto___99685 = cljs.core.seq.call(null,seq__99667_99675);if(temp__4092__auto___99685)
{var seq__99667_99686__$1 = temp__4092__auto___99685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99667_99686__$1))
{var c__14546__auto___99687 = cljs.core.chunk_first.call(null,seq__99667_99686__$1);{
var G__99688 = cljs.core.chunk_rest.call(null,seq__99667_99686__$1);
var G__99689 = c__14546__auto___99687;
var G__99690 = cljs.core.count.call(null,c__14546__auto___99687);
var G__99691 = 0;
seq__99667_99675 = G__99688;
chunk__99668_99676 = G__99689;
count__99669_99677 = G__99690;
i__99670_99678 = G__99691;
continue;
}
} else
{var idx_99692 = cljs.core.first.call(null,seq__99667_99686__$1);var attr_99693 = pnod.attributes.item(idx_99692);if(cljs.core.truth_(attr_99693.specified))
{attr_99693.value = rep_str.call(null,attr_99693.value);
} else
{}
{
var G__99694 = cljs.core.next.call(null,seq__99667_99686__$1);
var G__99695 = null;
var G__99696 = 0;
var G__99697 = 0;
seq__99667_99675 = G__99694;
chunk__99668_99676 = G__99695;
count__99669_99677 = G__99696;
i__99670_99678 = G__99697;
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
{var seq__99671 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__99672 = null;var count__99673 = 0;var i__99674 = 0;while(true){
if((i__99674 < count__99673))
{var cnode = cljs.core._nth.call(null,chunk__99672,i__99674);rep_node.call(null,cnode);
{
var G__99698 = seq__99671;
var G__99699 = chunk__99672;
var G__99700 = count__99673;
var G__99701 = (i__99674 + 1);
seq__99671 = G__99698;
chunk__99672 = G__99699;
count__99673 = G__99700;
i__99674 = G__99701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99671);if(temp__4092__auto__)
{var seq__99671__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99671__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99671__$1);{
var G__99702 = cljs.core.chunk_rest.call(null,seq__99671__$1);
var G__99703 = c__14546__auto__;
var G__99704 = cljs.core.count.call(null,c__14546__auto__);
var G__99705 = 0;
seq__99671 = G__99702;
chunk__99672 = G__99703;
count__99673 = G__99704;
i__99674 = G__99705;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__99671__$1);rep_node.call(null,cnode);
{
var G__99706 = cljs.core.next.call(null,seq__99671__$1);
var G__99707 = null;
var G__99708 = 0;
var G__99709 = 0;
seq__99671 = G__99706;
chunk__99672 = G__99707;
count__99673 = G__99708;
i__99674 = G__99709;
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
{var vec__99719 = node_spec;var tag = cljs.core.nth.call(null,vec__99719,0,null);var vec__99720 = cljs.core.nthnext.call(null,vec__99719,1);var m = cljs.core.nth.call(null,vec__99720,0,null);var ms = cljs.core.nthnext.call(null,vec__99720,1);var more = vec__99720;var vec__99721 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__99721,0,null);var segments = cljs.core.nthnext.call(null,vec__99721,1);var id = cljs.core.some.call(null,((function (vec__99719,tag,vec__99720,m,ms,more,vec__99721,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__99719,tag,vec__99720,m,ms,more,vec__99721,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__99719,tag,vec__99720,m,ms,more,vec__99721,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__99719,tag,vec__99720,m,ms,more,vec__99721,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__99722_99728 = cljs.core.seq.call(null,attrs__$2);var chunk__99723_99729 = null;var count__99724_99730 = 0;var i__99725_99731 = 0;while(true){
if((i__99725_99731 < count__99724_99730))
{var vec__99726_99732 = cljs.core._nth.call(null,chunk__99723_99729,i__99725_99731);var key_99733 = cljs.core.nth.call(null,vec__99726_99732,0,null);var val_99734 = cljs.core.nth.call(null,vec__99726_99732,1,null);node.setAttribute(cljs.core.name.call(null,key_99733),val_99734);
{
var G__99735 = seq__99722_99728;
var G__99736 = chunk__99723_99729;
var G__99737 = count__99724_99730;
var G__99738 = (i__99725_99731 + 1);
seq__99722_99728 = G__99735;
chunk__99723_99729 = G__99736;
count__99724_99730 = G__99737;
i__99725_99731 = G__99738;
continue;
}
} else
{var temp__4092__auto___99739 = cljs.core.seq.call(null,seq__99722_99728);if(temp__4092__auto___99739)
{var seq__99722_99740__$1 = temp__4092__auto___99739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99722_99740__$1))
{var c__14546__auto___99741 = cljs.core.chunk_first.call(null,seq__99722_99740__$1);{
var G__99742 = cljs.core.chunk_rest.call(null,seq__99722_99740__$1);
var G__99743 = c__14546__auto___99741;
var G__99744 = cljs.core.count.call(null,c__14546__auto___99741);
var G__99745 = 0;
seq__99722_99728 = G__99742;
chunk__99723_99729 = G__99743;
count__99724_99730 = G__99744;
i__99725_99731 = G__99745;
continue;
}
} else
{var vec__99727_99746 = cljs.core.first.call(null,seq__99722_99740__$1);var key_99747 = cljs.core.nth.call(null,vec__99727_99746,0,null);var val_99748 = cljs.core.nth.call(null,vec__99727_99746,1,null);node.setAttribute(cljs.core.name.call(null,key_99747),val_99748);
{
var G__99749 = cljs.core.next.call(null,seq__99722_99740__$1);
var G__99750 = null;
var G__99751 = 0;
var G__99752 = 0;
seq__99722_99728 = G__99749;
chunk__99723_99729 = G__99750;
count__99724_99730 = G__99751;
i__99725_99731 = G__99752;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13810__auto__ = el.checked;if(cljs.core.truth_(and__13810__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13810__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__99753_SHARP_){return p1__99753_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__99754_SHARP_){return p1__99754_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__99756_SHARP_,p2__99755_SHARP_){var G__99759 = p2__99755_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__99759))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__99759))
{return enfocus.core.read_select_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__99759))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__99759))
{var G__99760 = p2__99755_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__99760))
{return enfocus.core.read_checked_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__99760))
{return enfocus.core.read_checked_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__99760))
{return enfocus.core.read_simple_input.call(null,p2__99755_SHARP_,p1__99756_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__99756_SHARP_;
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
{return p1__99756_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__99761_SHARP_){if((p1__99761_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__99761_SHARP_);
} else
{if((p1__99761_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__99761_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__99761_SHARP_))
{return create_sel_str.call(null,p1__99761_SHARP_);
} else
{if(typeof p1__99761_SHARP_ === 'string')
{return p1__99761_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13822__auto__ = func;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13810__auto__ = !((node == null));if(and__13810__auto__)
{var G__99772 = node;if(G__99772)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__99772.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__99772.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__99772);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__99772);
}
} else
{return and__13810__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__99773 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__99773,0,null);var trans__$1 = cljs.core.nth.call(null,vec__99773,1,null);var seq__99774 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__99775 = null;var count__99776 = 0;var i__99777 = 0;while(true){
if((i__99777 < count__99776))
{var vec__99778 = cljs.core._nth.call(null,chunk__99775,i__99777);var sel = cljs.core.nth.call(null,vec__99778,0,null);var t = cljs.core.nth.call(null,vec__99778,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__99780 = seq__99774;
var G__99781 = chunk__99775;
var G__99782 = count__99776;
var G__99783 = (i__99777 + 1);
seq__99774 = G__99780;
chunk__99775 = G__99781;
count__99776 = G__99782;
i__99777 = G__99783;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99774);if(temp__4092__auto__)
{var seq__99774__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99774__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99774__$1);{
var G__99784 = cljs.core.chunk_rest.call(null,seq__99774__$1);
var G__99785 = c__14546__auto__;
var G__99786 = cljs.core.count.call(null,c__14546__auto__);
var G__99787 = 0;
seq__99774 = G__99784;
chunk__99775 = G__99785;
count__99776 = G__99786;
i__99777 = G__99787;
continue;
}
} else
{var vec__99779 = cljs.core.first.call(null,seq__99774__$1);var sel = cljs.core.nth.call(null,vec__99779,0,null);var t = cljs.core.nth.call(null,vec__99779,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__99788 = cljs.core.next.call(null,seq__99774__$1);
var G__99789 = null;
var G__99790 = 0;
var G__99791 = 0;
seq__99774 = G__99788;
chunk__99775 = G__99789;
count__99776 = G__99790;
i__99777 = G__99791;
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
i_at.cljs$lang$applyTo = (function (arglist__99792){
var id_mask = cljs.core.first(arglist__99792);
arglist__99792 = cljs.core.next(arglist__99792);
var node = cljs.core.first(arglist__99792);
var trans = cljs.core.rest(arglist__99792);
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
at.cljs$lang$applyTo = (function (arglist__99793){
var node = cljs.core.first(arglist__99793);
var trans = cljs.core.rest(arglist__99793);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__99798 = node;if(G__99798)
{var bit__14448__auto__ = null;if(cljs.core.truth_((function (){var or__13822__auto__ = bit__14448__auto__;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return G__99798.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__99798.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__99798);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__99798);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__99799 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__99799,0,null);var trans__$1 = cljs.core.nth.call(null,vec__99799,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__99800){var vec__99801 = p__99800;var ky = cljs.core.nth.call(null,vec__99801,0,null);var sel = cljs.core.nth.call(null,vec__99801,1,null);var ext = cljs.core.nth.call(null,vec__99801,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__99802){
var node = cljs.core.first(arglist__99802);
var trans = cljs.core.rest(arglist__99802);
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