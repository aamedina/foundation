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
enfocus.core.ISelector = (function (){var obj31398 = {};return obj31398;
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
enfocus.core.ITransform = (function (){var obj31400 = {};return obj31400;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__31401_SHARP_){if(typeof p1__31401_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__31401_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__31401_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__31408_31414 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__31409_31415 = null;var count__31410_31416 = 0;var i__31411_31417 = 0;while(true){
if((i__31411_31417 < count__31410_31416))
{var vec__31412_31418 = cljs.core._nth.call(null,chunk__31409_31415,i__31411_31417);var attr_31419 = cljs.core.nth.call(null,vec__31412_31418,0,null);var value_31420 = cljs.core.nth.call(null,vec__31412_31418,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_31419),value_31420);
{
var G__31421 = seq__31408_31414;
var G__31422 = chunk__31409_31415;
var G__31423 = count__31410_31416;
var G__31424 = (i__31411_31417 + 1);
seq__31408_31414 = G__31421;
chunk__31409_31415 = G__31422;
count__31410_31416 = G__31423;
i__31411_31417 = G__31424;
continue;
}
} else
{var temp__4092__auto___31425 = cljs.core.seq.call(null,seq__31408_31414);if(temp__4092__auto___31425)
{var seq__31408_31426__$1 = temp__4092__auto___31425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31408_31426__$1))
{var c__14545__auto___31427 = cljs.core.chunk_first.call(null,seq__31408_31426__$1);{
var G__31428 = cljs.core.chunk_rest.call(null,seq__31408_31426__$1);
var G__31429 = c__14545__auto___31427;
var G__31430 = cljs.core.count.call(null,c__14545__auto___31427);
var G__31431 = 0;
seq__31408_31414 = G__31428;
chunk__31409_31415 = G__31429;
count__31410_31416 = G__31430;
i__31411_31417 = G__31431;
continue;
}
} else
{var vec__31413_31432 = cljs.core.first.call(null,seq__31408_31426__$1);var attr_31433 = cljs.core.nth.call(null,vec__31413_31432,0,null);var value_31434 = cljs.core.nth.call(null,vec__31413_31432,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_31433),value_31434);
{
var G__31435 = cljs.core.next.call(null,seq__31408_31426__$1);
var G__31436 = null;
var G__31437 = 0;
var G__31438 = 0;
seq__31408_31414 = G__31435;
chunk__31409_31415 = G__31436;
count__31410_31416 = G__31437;
i__31411_31417 = G__31438;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__31443 = cljs.core.seq.call(null,values);var chunk__31444 = null;var count__31445 = 0;var i__31446 = 0;while(true){
if((i__31446 < count__31445))
{var attr = cljs.core._nth.call(null,chunk__31444,i__31446);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__31447 = seq__31443;
var G__31448 = chunk__31444;
var G__31449 = count__31445;
var G__31450 = (i__31446 + 1);
seq__31443 = G__31447;
chunk__31444 = G__31448;
count__31445 = G__31449;
i__31446 = G__31450;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31443);if(temp__4092__auto__)
{var seq__31443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31443__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31443__$1);{
var G__31451 = cljs.core.chunk_rest.call(null,seq__31443__$1);
var G__31452 = c__14545__auto__;
var G__31453 = cljs.core.count.call(null,c__14545__auto__);
var G__31454 = 0;
seq__31443 = G__31451;
chunk__31444 = G__31452;
count__31445 = G__31453;
i__31446 = G__31454;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__31443__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__31455 = cljs.core.next.call(null,seq__31443__$1);
var G__31456 = null;
var G__31457 = 0;
var G__31458 = 0;
seq__31443 = G__31455;
chunk__31444 = G__31456;
count__31445 = G__31457;
i__31446 = G__31458;
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
{var seq__31465_31471 = cljs.core.seq.call(null,ats);var chunk__31466_31472 = null;var count__31467_31473 = 0;var i__31468_31474 = 0;while(true){
if((i__31468_31474 < count__31467_31473))
{var vec__31469_31475 = cljs.core._nth.call(null,chunk__31466_31472,i__31468_31474);var k_31476 = cljs.core.nth.call(null,vec__31469_31475,0,null);var v_31477 = cljs.core.nth.call(null,vec__31469_31475,1,null);add_map_attrs.call(null,elem,k_31476,v_31477);
{
var G__31478 = seq__31465_31471;
var G__31479 = chunk__31466_31472;
var G__31480 = count__31467_31473;
var G__31481 = (i__31468_31474 + 1);
seq__31465_31471 = G__31478;
chunk__31466_31472 = G__31479;
count__31467_31473 = G__31480;
i__31468_31474 = G__31481;
continue;
}
} else
{var temp__4092__auto___31482 = cljs.core.seq.call(null,seq__31465_31471);if(temp__4092__auto___31482)
{var seq__31465_31483__$1 = temp__4092__auto___31482;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31465_31483__$1))
{var c__14545__auto___31484 = cljs.core.chunk_first.call(null,seq__31465_31483__$1);{
var G__31485 = cljs.core.chunk_rest.call(null,seq__31465_31483__$1);
var G__31486 = c__14545__auto___31484;
var G__31487 = cljs.core.count.call(null,c__14545__auto___31484);
var G__31488 = 0;
seq__31465_31471 = G__31485;
chunk__31466_31472 = G__31486;
count__31467_31473 = G__31487;
i__31468_31474 = G__31488;
continue;
}
} else
{var vec__31470_31489 = cljs.core.first.call(null,seq__31465_31483__$1);var k_31490 = cljs.core.nth.call(null,vec__31470_31489,0,null);var v_31491 = cljs.core.nth.call(null,vec__31470_31489,1,null);add_map_attrs.call(null,elem,k_31490,v_31491);
{
var G__31492 = cljs.core.next.call(null,seq__31465_31483__$1);
var G__31493 = null;
var G__31494 = 0;
var G__31495 = 0;
seq__31465_31471 = G__31492;
chunk__31466_31472 = G__31493;
count__31467_31473 = G__31494;
i__31468_31474 = G__31495;
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
var seq__31500_31504 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__31501_31505 = null;var count__31502_31506 = 0;var i__31503_31507 = 0;while(true){
if((i__31503_31507 < count__31502_31506))
{var node_31508 = cljs.core._nth.call(null,chunk__31501_31505,i__31503_31507);goog.dom.appendChild(div,node_31508);
{
var G__31509 = seq__31500_31504;
var G__31510 = chunk__31501_31505;
var G__31511 = count__31502_31506;
var G__31512 = (i__31503_31507 + 1);
seq__31500_31504 = G__31509;
chunk__31501_31505 = G__31510;
count__31502_31506 = G__31511;
i__31503_31507 = G__31512;
continue;
}
} else
{var temp__4092__auto___31513 = cljs.core.seq.call(null,seq__31500_31504);if(temp__4092__auto___31513)
{var seq__31500_31514__$1 = temp__4092__auto___31513;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31500_31514__$1))
{var c__14545__auto___31515 = cljs.core.chunk_first.call(null,seq__31500_31514__$1);{
var G__31516 = cljs.core.chunk_rest.call(null,seq__31500_31514__$1);
var G__31517 = c__14545__auto___31515;
var G__31518 = cljs.core.count.call(null,c__14545__auto___31515);
var G__31519 = 0;
seq__31500_31504 = G__31516;
chunk__31501_31505 = G__31517;
count__31502_31506 = G__31518;
i__31503_31507 = G__31519;
continue;
}
} else
{var node_31520 = cljs.core.first.call(null,seq__31500_31514__$1);goog.dom.appendChild(div,node_31520);
{
var G__31521 = cljs.core.next.call(null,seq__31500_31514__$1);
var G__31522 = null;
var G__31523 = 0;
var G__31524 = 0;
seq__31500_31504 = G__31521;
chunk__31501_31505 = G__31522;
count__31502_31506 = G__31523;
i__31503_31507 = G__31524;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__31525_SHARP_){var id = p1__31525_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__31525_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__31527 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__31527,0,null);var txt = cljs.core.nth.call(null,vec__31527,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__31532_31536 = cljs.core.seq.call(null,dfa);var chunk__31533_31537 = null;var count__31534_31538 = 0;var i__31535_31539 = 0;while(true){
if((i__31535_31539 < count__31534_31538))
{var df_31540 = cljs.core._nth.call(null,chunk__31533_31537,i__31535_31539);goog.dom.append(frag,df_31540);
{
var G__31541 = seq__31532_31536;
var G__31542 = chunk__31533_31537;
var G__31543 = count__31534_31538;
var G__31544 = (i__31535_31539 + 1);
seq__31532_31536 = G__31541;
chunk__31533_31537 = G__31542;
count__31534_31538 = G__31543;
i__31535_31539 = G__31544;
continue;
}
} else
{var temp__4092__auto___31545 = cljs.core.seq.call(null,seq__31532_31536);if(temp__4092__auto___31545)
{var seq__31532_31546__$1 = temp__4092__auto___31545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31532_31546__$1))
{var c__14545__auto___31547 = cljs.core.chunk_first.call(null,seq__31532_31546__$1);{
var G__31548 = cljs.core.chunk_rest.call(null,seq__31532_31546__$1);
var G__31549 = c__14545__auto___31547;
var G__31550 = cljs.core.count.call(null,c__14545__auto___31547);
var G__31551 = 0;
seq__31532_31536 = G__31548;
chunk__31533_31537 = G__31549;
count__31534_31538 = G__31550;
i__31535_31539 = G__31551;
continue;
}
} else
{var df_31552 = cljs.core.first.call(null,seq__31532_31546__$1);goog.dom.append(frag,df_31552);
{
var G__31553 = cljs.core.next.call(null,seq__31532_31546__$1);
var G__31554 = null;
var G__31555 = 0;
var G__31556 = 0;
seq__31532_31536 = G__31553;
chunk__31533_31537 = G__31554;
count__31534_31538 = G__31555;
i__31535_31539 = G__31556;
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
{var vec__31559 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__31559,0,null);var tdom = cljs.core.nth.call(null,vec__31559,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31559,sym,tdom,dom,tsnip){
return (function (p1__31557_SHARP_){return p1__31557_SHARP_.outerHTML;
});})(vec__31559,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t31563 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t31563 = (function (trans,func,extr_multi_node,meta31564){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta31564 = meta31564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t31563.cljs$lang$type = true;
enfocus.core.t31563.cljs$lang$ctorStr = "enfocus.core/t31563";
enfocus.core.t31563.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t31563");
});
enfocus.core.t31563.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t31563.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t31563.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t31563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31565){var self__ = this;
var _31565__$1 = this;return self__.meta31564;
});
enfocus.core.t31563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31565,meta31564__$1){var self__ = this;
var _31565__$1 = this;return (new enfocus.core.t31563(self__.trans,self__.func,self__.extr_multi_node,meta31564__$1));
});
enfocus.core.__GT_t31563 = (function __GT_t31563(trans__$1,func__$1,extr_multi_node__$1,meta31564){return (new enfocus.core.t31563(trans__$1,func__$1,extr_multi_node__$1,meta31564));
});
}
return (new enfocus.core.t31563(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t31573 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t31573 = (function (trans,func,multi_node_chain,meta31574){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta31574 = meta31574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t31573.cljs$lang$type = true;
enfocus.core.t31573.cljs$lang$ctorStr = "enfocus.core/t31573";
enfocus.core.t31573.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t31573");
});
enfocus.core.t31573.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t31573.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t31573.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t31573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31575){var self__ = this;
var _31575__$1 = this;return self__.meta31574;
});
enfocus.core.t31573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31575,meta31574__$1){var self__ = this;
var _31575__$1 = this;return (new enfocus.core.t31573(self__.trans,self__.func,self__.multi_node_chain,meta31574__$1));
});
enfocus.core.__GT_t31573 = (function __GT_t31573(trans__$1,func__$1,multi_node_chain__$1,meta31574){return (new enfocus.core.t31573(trans__$1,func__$1,multi_node_chain__$1,meta31574));
});
}
return (new enfocus.core.t31573(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__31566_SHARP_){return domina.nodes.call(null,p1__31566_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t31576 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t31576 = (function (trans,func,values,multi_node_chain,meta31577){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta31577 = meta31577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t31576.cljs$lang$type = true;
enfocus.core.t31576.cljs$lang$ctorStr = "enfocus.core/t31576";
enfocus.core.t31576.cljs$lang$ctorPrWriter = (function (this__14365__auto__,writer__14366__auto__,opt__14367__auto__){return cljs.core._write.call(null,writer__14366__auto__,"enfocus.core/t31576");
});
enfocus.core.t31576.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t31576.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t31576.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t31576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31578){var self__ = this;
var _31578__$1 = this;return self__.meta31577;
});
enfocus.core.t31576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31578,meta31577__$1){var self__ = this;
var _31578__$1 = this;return (new enfocus.core.t31576(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta31577__$1));
});
enfocus.core.__GT_t31576 = (function __GT_t31576(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta31577){return (new enfocus.core.t31576(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta31577));
});
}
return (new enfocus.core.t31576(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31579_SHARP_,p2__31580_SHARP_){domina.destroy_children_BANG_.call(null,p1__31579_SHARP_);
return domina.append_BANG_.call(null,p1__31579_SHARP_,p2__31580_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__31581){
var values = cljs.core.seq(arglist__31581);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__31582_SHARP_){return domina.set_html_BANG_.call(null,p1__31582_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__31583_SHARP_){var seq__31590 = cljs.core.seq.call(null,pairs);var chunk__31591 = null;var count__31592 = 0;var i__31593 = 0;while(true){
if((i__31593 < count__31592))
{var vec__31594 = cljs.core._nth.call(null,chunk__31591,i__31593);var name = cljs.core.nth.call(null,vec__31594,0,null);var value = cljs.core.nth.call(null,vec__31594,1,null);domina.set_attr_BANG_.call(null,p1__31583_SHARP_,name,value);
{
var G__31596 = seq__31590;
var G__31597 = chunk__31591;
var G__31598 = count__31592;
var G__31599 = (i__31593 + 1);
seq__31590 = G__31596;
chunk__31591 = G__31597;
count__31592 = G__31598;
i__31593 = G__31599;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31590);if(temp__4092__auto__)
{var seq__31590__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31590__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31590__$1);{
var G__31600 = cljs.core.chunk_rest.call(null,seq__31590__$1);
var G__31601 = c__14545__auto__;
var G__31602 = cljs.core.count.call(null,c__14545__auto__);
var G__31603 = 0;
seq__31590 = G__31600;
chunk__31591 = G__31601;
count__31592 = G__31602;
i__31593 = G__31603;
continue;
}
} else
{var vec__31595 = cljs.core.first.call(null,seq__31590__$1);var name = cljs.core.nth.call(null,vec__31595,0,null);var value = cljs.core.nth.call(null,vec__31595,1,null);domina.set_attr_BANG_.call(null,p1__31583_SHARP_,name,value);
{
var G__31604 = cljs.core.next.call(null,seq__31590__$1);
var G__31605 = null;
var G__31606 = 0;
var G__31607 = 0;
seq__31590 = G__31604;
chunk__31591 = G__31605;
count__31592 = G__31606;
i__31593 = G__31607;
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
set_attr.cljs$lang$applyTo = (function (arglist__31608){
var values = cljs.core.seq(arglist__31608);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__31609_SHARP_){var seq__31614 = cljs.core.seq.call(null,values);var chunk__31615 = null;var count__31616 = 0;var i__31617 = 0;while(true){
if((i__31617 < count__31616))
{var name = cljs.core._nth.call(null,chunk__31615,i__31617);domina.remove_attr_BANG_.call(null,p1__31609_SHARP_,name);
{
var G__31618 = seq__31614;
var G__31619 = chunk__31615;
var G__31620 = count__31616;
var G__31621 = (i__31617 + 1);
seq__31614 = G__31618;
chunk__31615 = G__31619;
count__31616 = G__31620;
i__31617 = G__31621;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31614);if(temp__4092__auto__)
{var seq__31614__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31614__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31614__$1);{
var G__31622 = cljs.core.chunk_rest.call(null,seq__31614__$1);
var G__31623 = c__14545__auto__;
var G__31624 = cljs.core.count.call(null,c__14545__auto__);
var G__31625 = 0;
seq__31614 = G__31622;
chunk__31615 = G__31623;
count__31616 = G__31624;
i__31617 = G__31625;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__31614__$1);domina.remove_attr_BANG_.call(null,p1__31609_SHARP_,name);
{
var G__31626 = cljs.core.next.call(null,seq__31614__$1);
var G__31627 = null;
var G__31628 = 0;
var G__31629 = 0;
seq__31614 = G__31626;
chunk__31615 = G__31627;
count__31616 = G__31628;
i__31617 = G__31629;
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
remove_attr.cljs$lang$applyTo = (function (arglist__31630){
var values = cljs.core.seq(arglist__31630);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__31633){var vec__31634 = p__31633;var n = cljs.core.nth.call(null,vec__31634,0,null);var v = cljs.core.nth.call(null,vec__31634,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__31635){
var forms = cljs.core.seq(arglist__31635);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__31636_SHARP_){var seq__31641 = cljs.core.seq.call(null,values);var chunk__31642 = null;var count__31643 = 0;var i__31644 = 0;while(true){
if((i__31644 < count__31643))
{var val = cljs.core._nth.call(null,chunk__31642,i__31644);domina.add_class_BANG_.call(null,p1__31636_SHARP_,val);
{
var G__31645 = seq__31641;
var G__31646 = chunk__31642;
var G__31647 = count__31643;
var G__31648 = (i__31644 + 1);
seq__31641 = G__31645;
chunk__31642 = G__31646;
count__31643 = G__31647;
i__31644 = G__31648;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31641);if(temp__4092__auto__)
{var seq__31641__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31641__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31641__$1);{
var G__31649 = cljs.core.chunk_rest.call(null,seq__31641__$1);
var G__31650 = c__14545__auto__;
var G__31651 = cljs.core.count.call(null,c__14545__auto__);
var G__31652 = 0;
seq__31641 = G__31649;
chunk__31642 = G__31650;
count__31643 = G__31651;
i__31644 = G__31652;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__31641__$1);domina.add_class_BANG_.call(null,p1__31636_SHARP_,val);
{
var G__31653 = cljs.core.next.call(null,seq__31641__$1);
var G__31654 = null;
var G__31655 = 0;
var G__31656 = 0;
seq__31641 = G__31653;
chunk__31642 = G__31654;
count__31643 = G__31655;
i__31644 = G__31656;
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
add_class.cljs$lang$applyTo = (function (arglist__31657){
var values = cljs.core.seq(arglist__31657);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__31658_SHARP_){var seq__31663 = cljs.core.seq.call(null,values);var chunk__31664 = null;var count__31665 = 0;var i__31666 = 0;while(true){
if((i__31666 < count__31665))
{var val = cljs.core._nth.call(null,chunk__31664,i__31666);domina.remove_class_BANG_.call(null,p1__31658_SHARP_,val);
{
var G__31667 = seq__31663;
var G__31668 = chunk__31664;
var G__31669 = count__31665;
var G__31670 = (i__31666 + 1);
seq__31663 = G__31667;
chunk__31664 = G__31668;
count__31665 = G__31669;
i__31666 = G__31670;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31663);if(temp__4092__auto__)
{var seq__31663__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31663__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31663__$1);{
var G__31671 = cljs.core.chunk_rest.call(null,seq__31663__$1);
var G__31672 = c__14545__auto__;
var G__31673 = cljs.core.count.call(null,c__14545__auto__);
var G__31674 = 0;
seq__31663 = G__31671;
chunk__31664 = G__31672;
count__31665 = G__31673;
i__31666 = G__31674;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__31663__$1);domina.remove_class_BANG_.call(null,p1__31658_SHARP_,val);
{
var G__31675 = cljs.core.next.call(null,seq__31663__$1);
var G__31676 = null;
var G__31677 = 0;
var G__31678 = 0;
seq__31663 = G__31675;
chunk__31664 = G__31676;
count__31665 = G__31677;
i__31666 = G__31678;
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
remove_class.cljs$lang$applyTo = (function (arglist__31679){
var values = cljs.core.seq(arglist__31679);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__31680_SHARP_){return domina.set_classes_BANG_.call(null,p1__31680_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__31681){
var values = cljs.core.seq(arglist__31681);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__31686 = cljs.core.seq.call(null,forms);var chunk__31687 = null;var count__31688 = 0;var i__31689 = 0;while(true){
if((i__31689 < count__31688))
{var fun = cljs.core._nth.call(null,chunk__31687,i__31689);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__31690 = seq__31686;
var G__31691 = chunk__31687;
var G__31692 = count__31688;
var G__31693 = (i__31689 + 1);
seq__31686 = G__31690;
chunk__31687 = G__31691;
count__31688 = G__31692;
i__31689 = G__31693;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31686);if(temp__4092__auto__)
{var seq__31686__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31686__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31686__$1);{
var G__31694 = cljs.core.chunk_rest.call(null,seq__31686__$1);
var G__31695 = c__14545__auto__;
var G__31696 = cljs.core.count.call(null,c__14545__auto__);
var G__31697 = 0;
seq__31686 = G__31694;
chunk__31687 = G__31695;
count__31688 = G__31696;
i__31689 = G__31697;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__31686__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__31698 = cljs.core.next.call(null,seq__31686__$1);
var G__31699 = null;
var G__31700 = 0;
var G__31701 = 0;
seq__31686 = G__31698;
chunk__31687 = G__31699;
count__31688 = G__31700;
i__31689 = G__31701;
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
do__GT_.cljs$lang$applyTo = (function (arglist__31702){
var forms = cljs.core.seq(arglist__31702);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31703_SHARP_,p2__31704_SHARP_){return domina.append_BANG_.call(null,p1__31703_SHARP_,p2__31704_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__31705){
var values = cljs.core.seq(arglist__31705);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31706_SHARP_,p2__31707_SHARP_){return domina.prepend_BANG_.call(null,p1__31706_SHARP_,p2__31707_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__31708){
var values = cljs.core.seq(arglist__31708);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31709_SHARP_,p2__31710_SHARP_){return domina.insert_before_BANG_.call(null,p1__31709_SHARP_,p2__31710_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__31711){
var values = cljs.core.seq(arglist__31711);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31712_SHARP_,p2__31713_SHARP_){return domina.insert_after_BANG_.call(null,p1__31712_SHARP_,p2__31713_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__31714){
var values = cljs.core.seq(arglist__31714);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__31715_SHARP_,p2__31716_SHARP_){return domina.swap_content_BANG_.call(null,p1__31715_SHARP_,p2__31716_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__31717){
var values = cljs.core.seq(arglist__31717);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__31718_SHARP_){return domina.detach_BANG_.call(null,p1__31718_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__31719_SHARP_){var seq__31726 = cljs.core.seq.call(null,pairs);var chunk__31727 = null;var count__31728 = 0;var i__31729 = 0;while(true){
if((i__31729 < count__31728))
{var vec__31730 = cljs.core._nth.call(null,chunk__31727,i__31729);var name = cljs.core.nth.call(null,vec__31730,0,null);var value = cljs.core.nth.call(null,vec__31730,1,null);domina.set_style_BANG_.call(null,p1__31719_SHARP_,name,value);
{
var G__31732 = seq__31726;
var G__31733 = chunk__31727;
var G__31734 = count__31728;
var G__31735 = (i__31729 + 1);
seq__31726 = G__31732;
chunk__31727 = G__31733;
count__31728 = G__31734;
i__31729 = G__31735;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31726);if(temp__4092__auto__)
{var seq__31726__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31726__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31726__$1);{
var G__31736 = cljs.core.chunk_rest.call(null,seq__31726__$1);
var G__31737 = c__14545__auto__;
var G__31738 = cljs.core.count.call(null,c__14545__auto__);
var G__31739 = 0;
seq__31726 = G__31736;
chunk__31727 = G__31737;
count__31728 = G__31738;
i__31729 = G__31739;
continue;
}
} else
{var vec__31731 = cljs.core.first.call(null,seq__31726__$1);var name = cljs.core.nth.call(null,vec__31731,0,null);var value = cljs.core.nth.call(null,vec__31731,1,null);domina.set_style_BANG_.call(null,p1__31719_SHARP_,name,value);
{
var G__31740 = cljs.core.next.call(null,seq__31726__$1);
var G__31741 = null;
var G__31742 = 0;
var G__31743 = 0;
seq__31726 = G__31740;
chunk__31727 = G__31741;
count__31728 = G__31742;
i__31729 = G__31743;
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
set_style.cljs$lang$applyTo = (function (arglist__31744){
var values = cljs.core.seq(arglist__31744);
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
remove_style.cljs$lang$applyTo = (function (arglist__31745){
var values = cljs.core.seq(arglist__31745);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__31746_SHARP_){return domina.set_data_BANG_.call(null,p1__31746_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__31747){
var ttime = cljs.core.first(arglist__31747);
var funcs = cljs.core.rest(arglist__31747);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__31749_SHARP_,p2__31748_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__31748_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__31774_31782 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__31775_31783 = null;var count__31776_31784 = 0;var i__31777_31785 = 0;while(true){
if((i__31777_31785 < count__31776_31784))
{var idx_31786 = cljs.core._nth.call(null,chunk__31775_31783,i__31777_31785);var attr_31787 = pnod.attributes.item(idx_31786);if(cljs.core.truth_(attr_31787.specified))
{attr_31787.value = rep_str.call(null,attr_31787.value);
} else
{}
{
var G__31788 = seq__31774_31782;
var G__31789 = chunk__31775_31783;
var G__31790 = count__31776_31784;
var G__31791 = (i__31777_31785 + 1);
seq__31774_31782 = G__31788;
chunk__31775_31783 = G__31789;
count__31776_31784 = G__31790;
i__31777_31785 = G__31791;
continue;
}
} else
{var temp__4092__auto___31792 = cljs.core.seq.call(null,seq__31774_31782);if(temp__4092__auto___31792)
{var seq__31774_31793__$1 = temp__4092__auto___31792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31774_31793__$1))
{var c__14545__auto___31794 = cljs.core.chunk_first.call(null,seq__31774_31793__$1);{
var G__31795 = cljs.core.chunk_rest.call(null,seq__31774_31793__$1);
var G__31796 = c__14545__auto___31794;
var G__31797 = cljs.core.count.call(null,c__14545__auto___31794);
var G__31798 = 0;
seq__31774_31782 = G__31795;
chunk__31775_31783 = G__31796;
count__31776_31784 = G__31797;
i__31777_31785 = G__31798;
continue;
}
} else
{var idx_31799 = cljs.core.first.call(null,seq__31774_31793__$1);var attr_31800 = pnod.attributes.item(idx_31799);if(cljs.core.truth_(attr_31800.specified))
{attr_31800.value = rep_str.call(null,attr_31800.value);
} else
{}
{
var G__31801 = cljs.core.next.call(null,seq__31774_31793__$1);
var G__31802 = null;
var G__31803 = 0;
var G__31804 = 0;
seq__31774_31782 = G__31801;
chunk__31775_31783 = G__31802;
count__31776_31784 = G__31803;
i__31777_31785 = G__31804;
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
{var seq__31778 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__31779 = null;var count__31780 = 0;var i__31781 = 0;while(true){
if((i__31781 < count__31780))
{var cnode = cljs.core._nth.call(null,chunk__31779,i__31781);rep_node.call(null,cnode);
{
var G__31805 = seq__31778;
var G__31806 = chunk__31779;
var G__31807 = count__31780;
var G__31808 = (i__31781 + 1);
seq__31778 = G__31805;
chunk__31779 = G__31806;
count__31780 = G__31807;
i__31781 = G__31808;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31778);if(temp__4092__auto__)
{var seq__31778__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31778__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31778__$1);{
var G__31809 = cljs.core.chunk_rest.call(null,seq__31778__$1);
var G__31810 = c__14545__auto__;
var G__31811 = cljs.core.count.call(null,c__14545__auto__);
var G__31812 = 0;
seq__31778 = G__31809;
chunk__31779 = G__31810;
count__31780 = G__31811;
i__31781 = G__31812;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__31778__$1);rep_node.call(null,cnode);
{
var G__31813 = cljs.core.next.call(null,seq__31778__$1);
var G__31814 = null;
var G__31815 = 0;
var G__31816 = 0;
seq__31778 = G__31813;
chunk__31779 = G__31814;
count__31780 = G__31815;
i__31781 = G__31816;
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
{var vec__31826 = node_spec;var tag = cljs.core.nth.call(null,vec__31826,0,null);var vec__31827 = cljs.core.nthnext.call(null,vec__31826,1);var m = cljs.core.nth.call(null,vec__31827,0,null);var ms = cljs.core.nthnext.call(null,vec__31827,1);var more = vec__31827;var vec__31828 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__31828,0,null);var segments = cljs.core.nthnext.call(null,vec__31828,1);var id = cljs.core.some.call(null,((function (vec__31826,tag,vec__31827,m,ms,more,vec__31828,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__31826,tag,vec__31827,m,ms,more,vec__31828,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__31826,tag,vec__31827,m,ms,more,vec__31828,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__31826,tag,vec__31827,m,ms,more,vec__31828,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__31829_31835 = cljs.core.seq.call(null,attrs__$2);var chunk__31830_31836 = null;var count__31831_31837 = 0;var i__31832_31838 = 0;while(true){
if((i__31832_31838 < count__31831_31837))
{var vec__31833_31839 = cljs.core._nth.call(null,chunk__31830_31836,i__31832_31838);var key_31840 = cljs.core.nth.call(null,vec__31833_31839,0,null);var val_31841 = cljs.core.nth.call(null,vec__31833_31839,1,null);node.setAttribute(cljs.core.name.call(null,key_31840),val_31841);
{
var G__31842 = seq__31829_31835;
var G__31843 = chunk__31830_31836;
var G__31844 = count__31831_31837;
var G__31845 = (i__31832_31838 + 1);
seq__31829_31835 = G__31842;
chunk__31830_31836 = G__31843;
count__31831_31837 = G__31844;
i__31832_31838 = G__31845;
continue;
}
} else
{var temp__4092__auto___31846 = cljs.core.seq.call(null,seq__31829_31835);if(temp__4092__auto___31846)
{var seq__31829_31847__$1 = temp__4092__auto___31846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31829_31847__$1))
{var c__14545__auto___31848 = cljs.core.chunk_first.call(null,seq__31829_31847__$1);{
var G__31849 = cljs.core.chunk_rest.call(null,seq__31829_31847__$1);
var G__31850 = c__14545__auto___31848;
var G__31851 = cljs.core.count.call(null,c__14545__auto___31848);
var G__31852 = 0;
seq__31829_31835 = G__31849;
chunk__31830_31836 = G__31850;
count__31831_31837 = G__31851;
i__31832_31838 = G__31852;
continue;
}
} else
{var vec__31834_31853 = cljs.core.first.call(null,seq__31829_31847__$1);var key_31854 = cljs.core.nth.call(null,vec__31834_31853,0,null);var val_31855 = cljs.core.nth.call(null,vec__31834_31853,1,null);node.setAttribute(cljs.core.name.call(null,key_31854),val_31855);
{
var G__31856 = cljs.core.next.call(null,seq__31829_31847__$1);
var G__31857 = null;
var G__31858 = 0;
var G__31859 = 0;
seq__31829_31835 = G__31856;
chunk__31830_31836 = G__31857;
count__31831_31837 = G__31858;
i__31832_31838 = G__31859;
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
return (function (p1__31860_SHARP_){return p1__31860_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__31861_SHARP_){return p1__31861_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__31863_SHARP_,p2__31862_SHARP_){var G__31866 = p2__31862_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__31866))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__31866))
{return enfocus.core.read_select_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__31866))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__31866))
{var G__31867 = p2__31862_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__31867))
{return enfocus.core.read_checked_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__31867))
{return enfocus.core.read_checked_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__31867))
{return enfocus.core.read_simple_input.call(null,p2__31862_SHARP_,p1__31863_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__31863_SHARP_;
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
{return p1__31863_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__31868_SHARP_){if((p1__31868_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__31868_SHARP_);
} else
{if((p1__31868_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__31868_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__31868_SHARP_))
{return create_sel_str.call(null,p1__31868_SHARP_);
} else
{if(typeof p1__31868_SHARP_ === 'string')
{return p1__31868_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__31879 = node;if(G__31879)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__31879.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__31879.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__31879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__31879);
}
} else
{return and__13809__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__31880 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__31880,0,null);var trans__$1 = cljs.core.nth.call(null,vec__31880,1,null);var seq__31881 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__31882 = null;var count__31883 = 0;var i__31884 = 0;while(true){
if((i__31884 < count__31883))
{var vec__31885 = cljs.core._nth.call(null,chunk__31882,i__31884);var sel = cljs.core.nth.call(null,vec__31885,0,null);var t = cljs.core.nth.call(null,vec__31885,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__31887 = seq__31881;
var G__31888 = chunk__31882;
var G__31889 = count__31883;
var G__31890 = (i__31884 + 1);
seq__31881 = G__31887;
chunk__31882 = G__31888;
count__31883 = G__31889;
i__31884 = G__31890;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31881);if(temp__4092__auto__)
{var seq__31881__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31881__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31881__$1);{
var G__31891 = cljs.core.chunk_rest.call(null,seq__31881__$1);
var G__31892 = c__14545__auto__;
var G__31893 = cljs.core.count.call(null,c__14545__auto__);
var G__31894 = 0;
seq__31881 = G__31891;
chunk__31882 = G__31892;
count__31883 = G__31893;
i__31884 = G__31894;
continue;
}
} else
{var vec__31886 = cljs.core.first.call(null,seq__31881__$1);var sel = cljs.core.nth.call(null,vec__31886,0,null);var t = cljs.core.nth.call(null,vec__31886,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__31895 = cljs.core.next.call(null,seq__31881__$1);
var G__31896 = null;
var G__31897 = 0;
var G__31898 = 0;
seq__31881 = G__31895;
chunk__31882 = G__31896;
count__31883 = G__31897;
i__31884 = G__31898;
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
i_at.cljs$lang$applyTo = (function (arglist__31899){
var id_mask = cljs.core.first(arglist__31899);
arglist__31899 = cljs.core.next(arglist__31899);
var node = cljs.core.first(arglist__31899);
var trans = cljs.core.rest(arglist__31899);
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
at.cljs$lang$applyTo = (function (arglist__31900){
var node = cljs.core.first(arglist__31900);
var trans = cljs.core.rest(arglist__31900);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__31905 = node;if(G__31905)
{var bit__14447__auto__ = null;if(cljs.core.truth_((function (){var or__13821__auto__ = bit__14447__auto__;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return G__31905.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__31905.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__31905);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__31905);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__31906 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__31906,0,null);var trans__$1 = cljs.core.nth.call(null,vec__31906,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__31907){var vec__31908 = p__31907;var ky = cljs.core.nth.call(null,vec__31908,0,null);var sel = cljs.core.nth.call(null,vec__31908,1,null);var ext = cljs.core.nth.call(null,vec__31908,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__31909){
var node = cljs.core.first(arglist__31909);
var trans = cljs.core.rest(arglist__31909);
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