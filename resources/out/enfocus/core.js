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
enfocus.core.ISelector = (function (){var obj34423 = {};return obj34423;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
enfocus.core.ITransform = (function (){var obj34425 = {};return obj34425;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13811__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13811__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13811__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__34426_SHARP_){if(typeof p1__34426_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__34426_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__34426_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__34433_34439 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__34434_34440 = null;var count__34435_34441 = 0;var i__34436_34442 = 0;while(true){
if((i__34436_34442 < count__34435_34441))
{var vec__34437_34443 = cljs.core._nth.call(null,chunk__34434_34440,i__34436_34442);var attr_34444 = cljs.core.nth.call(null,vec__34437_34443,0,null);var value_34445 = cljs.core.nth.call(null,vec__34437_34443,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34444),value_34445);
{
var G__34446 = seq__34433_34439;
var G__34447 = chunk__34434_34440;
var G__34448 = count__34435_34441;
var G__34449 = (i__34436_34442 + 1);
seq__34433_34439 = G__34446;
chunk__34434_34440 = G__34447;
count__34435_34441 = G__34448;
i__34436_34442 = G__34449;
continue;
}
} else
{var temp__4092__auto___34450 = cljs.core.seq.call(null,seq__34433_34439);if(temp__4092__auto___34450)
{var seq__34433_34451__$1 = temp__4092__auto___34450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34433_34451__$1))
{var c__14547__auto___34452 = cljs.core.chunk_first.call(null,seq__34433_34451__$1);{
var G__34453 = cljs.core.chunk_rest.call(null,seq__34433_34451__$1);
var G__34454 = c__14547__auto___34452;
var G__34455 = cljs.core.count.call(null,c__14547__auto___34452);
var G__34456 = 0;
seq__34433_34439 = G__34453;
chunk__34434_34440 = G__34454;
count__34435_34441 = G__34455;
i__34436_34442 = G__34456;
continue;
}
} else
{var vec__34438_34457 = cljs.core.first.call(null,seq__34433_34451__$1);var attr_34458 = cljs.core.nth.call(null,vec__34438_34457,0,null);var value_34459 = cljs.core.nth.call(null,vec__34438_34457,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34458),value_34459);
{
var G__34460 = cljs.core.next.call(null,seq__34433_34451__$1);
var G__34461 = null;
var G__34462 = 0;
var G__34463 = 0;
seq__34433_34439 = G__34460;
chunk__34434_34440 = G__34461;
count__34435_34441 = G__34462;
i__34436_34442 = G__34463;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__34468 = cljs.core.seq.call(null,values);var chunk__34469 = null;var count__34470 = 0;var i__34471 = 0;while(true){
if((i__34471 < count__34470))
{var attr = cljs.core._nth.call(null,chunk__34469,i__34471);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34472 = seq__34468;
var G__34473 = chunk__34469;
var G__34474 = count__34470;
var G__34475 = (i__34471 + 1);
seq__34468 = G__34472;
chunk__34469 = G__34473;
count__34470 = G__34474;
i__34471 = G__34475;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34468);if(temp__4092__auto__)
{var seq__34468__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34468__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34468__$1);{
var G__34476 = cljs.core.chunk_rest.call(null,seq__34468__$1);
var G__34477 = c__14547__auto__;
var G__34478 = cljs.core.count.call(null,c__14547__auto__);
var G__34479 = 0;
seq__34468 = G__34476;
chunk__34469 = G__34477;
count__34470 = G__34478;
i__34471 = G__34479;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__34468__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34480 = cljs.core.next.call(null,seq__34468__$1);
var G__34481 = null;
var G__34482 = 0;
var G__34483 = 0;
seq__34468 = G__34480;
chunk__34469 = G__34481;
count__34470 = G__34482;
i__34471 = G__34483;
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
{var seq__34490_34496 = cljs.core.seq.call(null,ats);var chunk__34491_34497 = null;var count__34492_34498 = 0;var i__34493_34499 = 0;while(true){
if((i__34493_34499 < count__34492_34498))
{var vec__34494_34500 = cljs.core._nth.call(null,chunk__34491_34497,i__34493_34499);var k_34501 = cljs.core.nth.call(null,vec__34494_34500,0,null);var v_34502 = cljs.core.nth.call(null,vec__34494_34500,1,null);add_map_attrs.call(null,elem,k_34501,v_34502);
{
var G__34503 = seq__34490_34496;
var G__34504 = chunk__34491_34497;
var G__34505 = count__34492_34498;
var G__34506 = (i__34493_34499 + 1);
seq__34490_34496 = G__34503;
chunk__34491_34497 = G__34504;
count__34492_34498 = G__34505;
i__34493_34499 = G__34506;
continue;
}
} else
{var temp__4092__auto___34507 = cljs.core.seq.call(null,seq__34490_34496);if(temp__4092__auto___34507)
{var seq__34490_34508__$1 = temp__4092__auto___34507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34490_34508__$1))
{var c__14547__auto___34509 = cljs.core.chunk_first.call(null,seq__34490_34508__$1);{
var G__34510 = cljs.core.chunk_rest.call(null,seq__34490_34508__$1);
var G__34511 = c__14547__auto___34509;
var G__34512 = cljs.core.count.call(null,c__14547__auto___34509);
var G__34513 = 0;
seq__34490_34496 = G__34510;
chunk__34491_34497 = G__34511;
count__34492_34498 = G__34512;
i__34493_34499 = G__34513;
continue;
}
} else
{var vec__34495_34514 = cljs.core.first.call(null,seq__34490_34508__$1);var k_34515 = cljs.core.nth.call(null,vec__34495_34514,0,null);var v_34516 = cljs.core.nth.call(null,vec__34495_34514,1,null);add_map_attrs.call(null,elem,k_34515,v_34516);
{
var G__34517 = cljs.core.next.call(null,seq__34490_34508__$1);
var G__34518 = null;
var G__34519 = 0;
var G__34520 = 0;
seq__34490_34496 = G__34517;
chunk__34491_34497 = G__34518;
count__34492_34498 = G__34519;
i__34493_34499 = G__34520;
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
var seq__34525_34529 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__34526_34530 = null;var count__34527_34531 = 0;var i__34528_34532 = 0;while(true){
if((i__34528_34532 < count__34527_34531))
{var node_34533 = cljs.core._nth.call(null,chunk__34526_34530,i__34528_34532);goog.dom.appendChild(div,node_34533);
{
var G__34534 = seq__34525_34529;
var G__34535 = chunk__34526_34530;
var G__34536 = count__34527_34531;
var G__34537 = (i__34528_34532 + 1);
seq__34525_34529 = G__34534;
chunk__34526_34530 = G__34535;
count__34527_34531 = G__34536;
i__34528_34532 = G__34537;
continue;
}
} else
{var temp__4092__auto___34538 = cljs.core.seq.call(null,seq__34525_34529);if(temp__4092__auto___34538)
{var seq__34525_34539__$1 = temp__4092__auto___34538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34525_34539__$1))
{var c__14547__auto___34540 = cljs.core.chunk_first.call(null,seq__34525_34539__$1);{
var G__34541 = cljs.core.chunk_rest.call(null,seq__34525_34539__$1);
var G__34542 = c__14547__auto___34540;
var G__34543 = cljs.core.count.call(null,c__14547__auto___34540);
var G__34544 = 0;
seq__34525_34529 = G__34541;
chunk__34526_34530 = G__34542;
count__34527_34531 = G__34543;
i__34528_34532 = G__34544;
continue;
}
} else
{var node_34545 = cljs.core.first.call(null,seq__34525_34539__$1);goog.dom.appendChild(div,node_34545);
{
var G__34546 = cljs.core.next.call(null,seq__34525_34539__$1);
var G__34547 = null;
var G__34548 = 0;
var G__34549 = 0;
seq__34525_34529 = G__34546;
chunk__34526_34530 = G__34547;
count__34527_34531 = G__34548;
i__34528_34532 = G__34549;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34550_SHARP_){var id = p1__34550_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__34550_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__34552 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__34552,0,null);var txt = cljs.core.nth.call(null,vec__34552,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__34557_34561 = cljs.core.seq.call(null,dfa);var chunk__34558_34562 = null;var count__34559_34563 = 0;var i__34560_34564 = 0;while(true){
if((i__34560_34564 < count__34559_34563))
{var df_34565 = cljs.core._nth.call(null,chunk__34558_34562,i__34560_34564);goog.dom.append(frag,df_34565);
{
var G__34566 = seq__34557_34561;
var G__34567 = chunk__34558_34562;
var G__34568 = count__34559_34563;
var G__34569 = (i__34560_34564 + 1);
seq__34557_34561 = G__34566;
chunk__34558_34562 = G__34567;
count__34559_34563 = G__34568;
i__34560_34564 = G__34569;
continue;
}
} else
{var temp__4092__auto___34570 = cljs.core.seq.call(null,seq__34557_34561);if(temp__4092__auto___34570)
{var seq__34557_34571__$1 = temp__4092__auto___34570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34557_34571__$1))
{var c__14547__auto___34572 = cljs.core.chunk_first.call(null,seq__34557_34571__$1);{
var G__34573 = cljs.core.chunk_rest.call(null,seq__34557_34571__$1);
var G__34574 = c__14547__auto___34572;
var G__34575 = cljs.core.count.call(null,c__14547__auto___34572);
var G__34576 = 0;
seq__34557_34561 = G__34573;
chunk__34558_34562 = G__34574;
count__34559_34563 = G__34575;
i__34560_34564 = G__34576;
continue;
}
} else
{var df_34577 = cljs.core.first.call(null,seq__34557_34571__$1);goog.dom.append(frag,df_34577);
{
var G__34578 = cljs.core.next.call(null,seq__34557_34571__$1);
var G__34579 = null;
var G__34580 = 0;
var G__34581 = 0;
seq__34557_34561 = G__34578;
chunk__34558_34562 = G__34579;
count__34559_34563 = G__34580;
i__34560_34564 = G__34581;
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
{var vec__34584 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__34584,0,null);var tdom = cljs.core.nth.call(null,vec__34584,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34584,sym,tdom,dom,tsnip){
return (function (p1__34582_SHARP_){return p1__34582_SHARP_.outerHTML;
});})(vec__34584,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t34588 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34588 = (function (trans,func,extr_multi_node,meta34589){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta34589 = meta34589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34588.cljs$lang$type = true;
enfocus.core.t34588.cljs$lang$ctorStr = "enfocus.core/t34588";
enfocus.core.t34588.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34588");
});
enfocus.core.t34588.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34588.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34588.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34590){var self__ = this;
var _34590__$1 = this;return self__.meta34589;
});
enfocus.core.t34588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34590,meta34589__$1){var self__ = this;
var _34590__$1 = this;return (new enfocus.core.t34588(self__.trans,self__.func,self__.extr_multi_node,meta34589__$1));
});
enfocus.core.__GT_t34588 = (function __GT_t34588(trans__$1,func__$1,extr_multi_node__$1,meta34589){return (new enfocus.core.t34588(trans__$1,func__$1,extr_multi_node__$1,meta34589));
});
}
return (new enfocus.core.t34588(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t34598 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34598 = (function (trans,func,multi_node_chain,meta34599){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta34599 = meta34599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34598.cljs$lang$type = true;
enfocus.core.t34598.cljs$lang$ctorStr = "enfocus.core/t34598";
enfocus.core.t34598.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34598");
});
enfocus.core.t34598.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34598.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34598.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34600){var self__ = this;
var _34600__$1 = this;return self__.meta34599;
});
enfocus.core.t34598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34600,meta34599__$1){var self__ = this;
var _34600__$1 = this;return (new enfocus.core.t34598(self__.trans,self__.func,self__.multi_node_chain,meta34599__$1));
});
enfocus.core.__GT_t34598 = (function __GT_t34598(trans__$1,func__$1,multi_node_chain__$1,meta34599){return (new enfocus.core.t34598(trans__$1,func__$1,multi_node_chain__$1,meta34599));
});
}
return (new enfocus.core.t34598(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__34591_SHARP_){return domina.nodes.call(null,p1__34591_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t34601 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34601 = (function (trans,func,values,multi_node_chain,meta34602){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta34602 = meta34602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34601.cljs$lang$type = true;
enfocus.core.t34601.cljs$lang$ctorStr = "enfocus.core/t34601";
enfocus.core.t34601.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34601");
});
enfocus.core.t34601.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34601.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34601.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34603){var self__ = this;
var _34603__$1 = this;return self__.meta34602;
});
enfocus.core.t34601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34603,meta34602__$1){var self__ = this;
var _34603__$1 = this;return (new enfocus.core.t34601(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta34602__$1));
});
enfocus.core.__GT_t34601 = (function __GT_t34601(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34602){return (new enfocus.core.t34601(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34602));
});
}
return (new enfocus.core.t34601(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34604_SHARP_,p2__34605_SHARP_){domina.destroy_children_BANG_.call(null,p1__34604_SHARP_);
return domina.append_BANG_.call(null,p1__34604_SHARP_,p2__34605_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__34606){
var values = cljs.core.seq(arglist__34606);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__34607_SHARP_){return domina.set_html_BANG_.call(null,p1__34607_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34608_SHARP_){var seq__34615 = cljs.core.seq.call(null,pairs);var chunk__34616 = null;var count__34617 = 0;var i__34618 = 0;while(true){
if((i__34618 < count__34617))
{var vec__34619 = cljs.core._nth.call(null,chunk__34616,i__34618);var name = cljs.core.nth.call(null,vec__34619,0,null);var value = cljs.core.nth.call(null,vec__34619,1,null);domina.set_attr_BANG_.call(null,p1__34608_SHARP_,name,value);
{
var G__34621 = seq__34615;
var G__34622 = chunk__34616;
var G__34623 = count__34617;
var G__34624 = (i__34618 + 1);
seq__34615 = G__34621;
chunk__34616 = G__34622;
count__34617 = G__34623;
i__34618 = G__34624;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34615);if(temp__4092__auto__)
{var seq__34615__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34615__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34615__$1);{
var G__34625 = cljs.core.chunk_rest.call(null,seq__34615__$1);
var G__34626 = c__14547__auto__;
var G__34627 = cljs.core.count.call(null,c__14547__auto__);
var G__34628 = 0;
seq__34615 = G__34625;
chunk__34616 = G__34626;
count__34617 = G__34627;
i__34618 = G__34628;
continue;
}
} else
{var vec__34620 = cljs.core.first.call(null,seq__34615__$1);var name = cljs.core.nth.call(null,vec__34620,0,null);var value = cljs.core.nth.call(null,vec__34620,1,null);domina.set_attr_BANG_.call(null,p1__34608_SHARP_,name,value);
{
var G__34629 = cljs.core.next.call(null,seq__34615__$1);
var G__34630 = null;
var G__34631 = 0;
var G__34632 = 0;
seq__34615 = G__34629;
chunk__34616 = G__34630;
count__34617 = G__34631;
i__34618 = G__34632;
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
set_attr.cljs$lang$applyTo = (function (arglist__34633){
var values = cljs.core.seq(arglist__34633);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34634_SHARP_){var seq__34639 = cljs.core.seq.call(null,values);var chunk__34640 = null;var count__34641 = 0;var i__34642 = 0;while(true){
if((i__34642 < count__34641))
{var name = cljs.core._nth.call(null,chunk__34640,i__34642);domina.remove_attr_BANG_.call(null,p1__34634_SHARP_,name);
{
var G__34643 = seq__34639;
var G__34644 = chunk__34640;
var G__34645 = count__34641;
var G__34646 = (i__34642 + 1);
seq__34639 = G__34643;
chunk__34640 = G__34644;
count__34641 = G__34645;
i__34642 = G__34646;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34639);if(temp__4092__auto__)
{var seq__34639__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34639__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34639__$1);{
var G__34647 = cljs.core.chunk_rest.call(null,seq__34639__$1);
var G__34648 = c__14547__auto__;
var G__34649 = cljs.core.count.call(null,c__14547__auto__);
var G__34650 = 0;
seq__34639 = G__34647;
chunk__34640 = G__34648;
count__34641 = G__34649;
i__34642 = G__34650;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__34639__$1);domina.remove_attr_BANG_.call(null,p1__34634_SHARP_,name);
{
var G__34651 = cljs.core.next.call(null,seq__34639__$1);
var G__34652 = null;
var G__34653 = 0;
var G__34654 = 0;
seq__34639 = G__34651;
chunk__34640 = G__34652;
count__34641 = G__34653;
i__34642 = G__34654;
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
remove_attr.cljs$lang$applyTo = (function (arglist__34655){
var values = cljs.core.seq(arglist__34655);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__34658){var vec__34659 = p__34658;var n = cljs.core.nth.call(null,vec__34659,0,null);var v = cljs.core.nth.call(null,vec__34659,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__34660){
var forms = cljs.core.seq(arglist__34660);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34661_SHARP_){var seq__34666 = cljs.core.seq.call(null,values);var chunk__34667 = null;var count__34668 = 0;var i__34669 = 0;while(true){
if((i__34669 < count__34668))
{var val = cljs.core._nth.call(null,chunk__34667,i__34669);domina.add_class_BANG_.call(null,p1__34661_SHARP_,val);
{
var G__34670 = seq__34666;
var G__34671 = chunk__34667;
var G__34672 = count__34668;
var G__34673 = (i__34669 + 1);
seq__34666 = G__34670;
chunk__34667 = G__34671;
count__34668 = G__34672;
i__34669 = G__34673;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34666);if(temp__4092__auto__)
{var seq__34666__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34666__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34666__$1);{
var G__34674 = cljs.core.chunk_rest.call(null,seq__34666__$1);
var G__34675 = c__14547__auto__;
var G__34676 = cljs.core.count.call(null,c__14547__auto__);
var G__34677 = 0;
seq__34666 = G__34674;
chunk__34667 = G__34675;
count__34668 = G__34676;
i__34669 = G__34677;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34666__$1);domina.add_class_BANG_.call(null,p1__34661_SHARP_,val);
{
var G__34678 = cljs.core.next.call(null,seq__34666__$1);
var G__34679 = null;
var G__34680 = 0;
var G__34681 = 0;
seq__34666 = G__34678;
chunk__34667 = G__34679;
count__34668 = G__34680;
i__34669 = G__34681;
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
add_class.cljs$lang$applyTo = (function (arglist__34682){
var values = cljs.core.seq(arglist__34682);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34683_SHARP_){var seq__34688 = cljs.core.seq.call(null,values);var chunk__34689 = null;var count__34690 = 0;var i__34691 = 0;while(true){
if((i__34691 < count__34690))
{var val = cljs.core._nth.call(null,chunk__34689,i__34691);domina.remove_class_BANG_.call(null,p1__34683_SHARP_,val);
{
var G__34692 = seq__34688;
var G__34693 = chunk__34689;
var G__34694 = count__34690;
var G__34695 = (i__34691 + 1);
seq__34688 = G__34692;
chunk__34689 = G__34693;
count__34690 = G__34694;
i__34691 = G__34695;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34688);if(temp__4092__auto__)
{var seq__34688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34688__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34688__$1);{
var G__34696 = cljs.core.chunk_rest.call(null,seq__34688__$1);
var G__34697 = c__14547__auto__;
var G__34698 = cljs.core.count.call(null,c__14547__auto__);
var G__34699 = 0;
seq__34688 = G__34696;
chunk__34689 = G__34697;
count__34690 = G__34698;
i__34691 = G__34699;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34688__$1);domina.remove_class_BANG_.call(null,p1__34683_SHARP_,val);
{
var G__34700 = cljs.core.next.call(null,seq__34688__$1);
var G__34701 = null;
var G__34702 = 0;
var G__34703 = 0;
seq__34688 = G__34700;
chunk__34689 = G__34701;
count__34690 = G__34702;
i__34691 = G__34703;
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
remove_class.cljs$lang$applyTo = (function (arglist__34704){
var values = cljs.core.seq(arglist__34704);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34705_SHARP_){return domina.set_classes_BANG_.call(null,p1__34705_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__34706){
var values = cljs.core.seq(arglist__34706);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__34711 = cljs.core.seq.call(null,forms);var chunk__34712 = null;var count__34713 = 0;var i__34714 = 0;while(true){
if((i__34714 < count__34713))
{var fun = cljs.core._nth.call(null,chunk__34712,i__34714);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34715 = seq__34711;
var G__34716 = chunk__34712;
var G__34717 = count__34713;
var G__34718 = (i__34714 + 1);
seq__34711 = G__34715;
chunk__34712 = G__34716;
count__34713 = G__34717;
i__34714 = G__34718;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34711);if(temp__4092__auto__)
{var seq__34711__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34711__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34711__$1);{
var G__34719 = cljs.core.chunk_rest.call(null,seq__34711__$1);
var G__34720 = c__14547__auto__;
var G__34721 = cljs.core.count.call(null,c__14547__auto__);
var G__34722 = 0;
seq__34711 = G__34719;
chunk__34712 = G__34720;
count__34713 = G__34721;
i__34714 = G__34722;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__34711__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34723 = cljs.core.next.call(null,seq__34711__$1);
var G__34724 = null;
var G__34725 = 0;
var G__34726 = 0;
seq__34711 = G__34723;
chunk__34712 = G__34724;
count__34713 = G__34725;
i__34714 = G__34726;
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
do__GT_.cljs$lang$applyTo = (function (arglist__34727){
var forms = cljs.core.seq(arglist__34727);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34728_SHARP_,p2__34729_SHARP_){return domina.append_BANG_.call(null,p1__34728_SHARP_,p2__34729_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__34730){
var values = cljs.core.seq(arglist__34730);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34731_SHARP_,p2__34732_SHARP_){return domina.prepend_BANG_.call(null,p1__34731_SHARP_,p2__34732_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__34733){
var values = cljs.core.seq(arglist__34733);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34734_SHARP_,p2__34735_SHARP_){return domina.insert_before_BANG_.call(null,p1__34734_SHARP_,p2__34735_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__34736){
var values = cljs.core.seq(arglist__34736);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34737_SHARP_,p2__34738_SHARP_){return domina.insert_after_BANG_.call(null,p1__34737_SHARP_,p2__34738_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__34739){
var values = cljs.core.seq(arglist__34739);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34740_SHARP_,p2__34741_SHARP_){return domina.swap_content_BANG_.call(null,p1__34740_SHARP_,p2__34741_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__34742){
var values = cljs.core.seq(arglist__34742);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__34743_SHARP_){return domina.detach_BANG_.call(null,p1__34743_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34744_SHARP_){var seq__34751 = cljs.core.seq.call(null,pairs);var chunk__34752 = null;var count__34753 = 0;var i__34754 = 0;while(true){
if((i__34754 < count__34753))
{var vec__34755 = cljs.core._nth.call(null,chunk__34752,i__34754);var name = cljs.core.nth.call(null,vec__34755,0,null);var value = cljs.core.nth.call(null,vec__34755,1,null);domina.set_style_BANG_.call(null,p1__34744_SHARP_,name,value);
{
var G__34757 = seq__34751;
var G__34758 = chunk__34752;
var G__34759 = count__34753;
var G__34760 = (i__34754 + 1);
seq__34751 = G__34757;
chunk__34752 = G__34758;
count__34753 = G__34759;
i__34754 = G__34760;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34751);if(temp__4092__auto__)
{var seq__34751__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34751__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34751__$1);{
var G__34761 = cljs.core.chunk_rest.call(null,seq__34751__$1);
var G__34762 = c__14547__auto__;
var G__34763 = cljs.core.count.call(null,c__14547__auto__);
var G__34764 = 0;
seq__34751 = G__34761;
chunk__34752 = G__34762;
count__34753 = G__34763;
i__34754 = G__34764;
continue;
}
} else
{var vec__34756 = cljs.core.first.call(null,seq__34751__$1);var name = cljs.core.nth.call(null,vec__34756,0,null);var value = cljs.core.nth.call(null,vec__34756,1,null);domina.set_style_BANG_.call(null,p1__34744_SHARP_,name,value);
{
var G__34765 = cljs.core.next.call(null,seq__34751__$1);
var G__34766 = null;
var G__34767 = 0;
var G__34768 = 0;
seq__34751 = G__34765;
chunk__34752 = G__34766;
count__34753 = G__34767;
i__34754 = G__34768;
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
set_style.cljs$lang$applyTo = (function (arglist__34769){
var values = cljs.core.seq(arglist__34769);
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
remove_style.cljs$lang$applyTo = (function (arglist__34770){
var values = cljs.core.seq(arglist__34770);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__34771_SHARP_){return domina.set_data_BANG_.call(null,p1__34771_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__34772){
var ttime = cljs.core.first(arglist__34772);
var funcs = cljs.core.rest(arglist__34772);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__34774_SHARP_,p2__34773_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__34773_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__34799_34807 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__34800_34808 = null;var count__34801_34809 = 0;var i__34802_34810 = 0;while(true){
if((i__34802_34810 < count__34801_34809))
{var idx_34811 = cljs.core._nth.call(null,chunk__34800_34808,i__34802_34810);var attr_34812 = pnod.attributes.item(idx_34811);if(cljs.core.truth_(attr_34812.specified))
{attr_34812.value = rep_str.call(null,attr_34812.value);
} else
{}
{
var G__34813 = seq__34799_34807;
var G__34814 = chunk__34800_34808;
var G__34815 = count__34801_34809;
var G__34816 = (i__34802_34810 + 1);
seq__34799_34807 = G__34813;
chunk__34800_34808 = G__34814;
count__34801_34809 = G__34815;
i__34802_34810 = G__34816;
continue;
}
} else
{var temp__4092__auto___34817 = cljs.core.seq.call(null,seq__34799_34807);if(temp__4092__auto___34817)
{var seq__34799_34818__$1 = temp__4092__auto___34817;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34799_34818__$1))
{var c__14547__auto___34819 = cljs.core.chunk_first.call(null,seq__34799_34818__$1);{
var G__34820 = cljs.core.chunk_rest.call(null,seq__34799_34818__$1);
var G__34821 = c__14547__auto___34819;
var G__34822 = cljs.core.count.call(null,c__14547__auto___34819);
var G__34823 = 0;
seq__34799_34807 = G__34820;
chunk__34800_34808 = G__34821;
count__34801_34809 = G__34822;
i__34802_34810 = G__34823;
continue;
}
} else
{var idx_34824 = cljs.core.first.call(null,seq__34799_34818__$1);var attr_34825 = pnod.attributes.item(idx_34824);if(cljs.core.truth_(attr_34825.specified))
{attr_34825.value = rep_str.call(null,attr_34825.value);
} else
{}
{
var G__34826 = cljs.core.next.call(null,seq__34799_34818__$1);
var G__34827 = null;
var G__34828 = 0;
var G__34829 = 0;
seq__34799_34807 = G__34826;
chunk__34800_34808 = G__34827;
count__34801_34809 = G__34828;
i__34802_34810 = G__34829;
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
{var seq__34803 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__34804 = null;var count__34805 = 0;var i__34806 = 0;while(true){
if((i__34806 < count__34805))
{var cnode = cljs.core._nth.call(null,chunk__34804,i__34806);rep_node.call(null,cnode);
{
var G__34830 = seq__34803;
var G__34831 = chunk__34804;
var G__34832 = count__34805;
var G__34833 = (i__34806 + 1);
seq__34803 = G__34830;
chunk__34804 = G__34831;
count__34805 = G__34832;
i__34806 = G__34833;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34803);if(temp__4092__auto__)
{var seq__34803__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34803__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34803__$1);{
var G__34834 = cljs.core.chunk_rest.call(null,seq__34803__$1);
var G__34835 = c__14547__auto__;
var G__34836 = cljs.core.count.call(null,c__14547__auto__);
var G__34837 = 0;
seq__34803 = G__34834;
chunk__34804 = G__34835;
count__34805 = G__34836;
i__34806 = G__34837;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__34803__$1);rep_node.call(null,cnode);
{
var G__34838 = cljs.core.next.call(null,seq__34803__$1);
var G__34839 = null;
var G__34840 = 0;
var G__34841 = 0;
seq__34803 = G__34838;
chunk__34804 = G__34839;
count__34805 = G__34840;
i__34806 = G__34841;
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
{var vec__34851 = node_spec;var tag = cljs.core.nth.call(null,vec__34851,0,null);var vec__34852 = cljs.core.nthnext.call(null,vec__34851,1);var m = cljs.core.nth.call(null,vec__34852,0,null);var ms = cljs.core.nthnext.call(null,vec__34852,1);var more = vec__34852;var vec__34853 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__34853,0,null);var segments = cljs.core.nthnext.call(null,vec__34853,1);var id = cljs.core.some.call(null,((function (vec__34851,tag,vec__34852,m,ms,more,vec__34853,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__34851,tag,vec__34852,m,ms,more,vec__34853,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__34851,tag,vec__34852,m,ms,more,vec__34853,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__34851,tag,vec__34852,m,ms,more,vec__34853,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__34854_34860 = cljs.core.seq.call(null,attrs__$2);var chunk__34855_34861 = null;var count__34856_34862 = 0;var i__34857_34863 = 0;while(true){
if((i__34857_34863 < count__34856_34862))
{var vec__34858_34864 = cljs.core._nth.call(null,chunk__34855_34861,i__34857_34863);var key_34865 = cljs.core.nth.call(null,vec__34858_34864,0,null);var val_34866 = cljs.core.nth.call(null,vec__34858_34864,1,null);node.setAttribute(cljs.core.name.call(null,key_34865),val_34866);
{
var G__34867 = seq__34854_34860;
var G__34868 = chunk__34855_34861;
var G__34869 = count__34856_34862;
var G__34870 = (i__34857_34863 + 1);
seq__34854_34860 = G__34867;
chunk__34855_34861 = G__34868;
count__34856_34862 = G__34869;
i__34857_34863 = G__34870;
continue;
}
} else
{var temp__4092__auto___34871 = cljs.core.seq.call(null,seq__34854_34860);if(temp__4092__auto___34871)
{var seq__34854_34872__$1 = temp__4092__auto___34871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34854_34872__$1))
{var c__14547__auto___34873 = cljs.core.chunk_first.call(null,seq__34854_34872__$1);{
var G__34874 = cljs.core.chunk_rest.call(null,seq__34854_34872__$1);
var G__34875 = c__14547__auto___34873;
var G__34876 = cljs.core.count.call(null,c__14547__auto___34873);
var G__34877 = 0;
seq__34854_34860 = G__34874;
chunk__34855_34861 = G__34875;
count__34856_34862 = G__34876;
i__34857_34863 = G__34877;
continue;
}
} else
{var vec__34859_34878 = cljs.core.first.call(null,seq__34854_34872__$1);var key_34879 = cljs.core.nth.call(null,vec__34859_34878,0,null);var val_34880 = cljs.core.nth.call(null,vec__34859_34878,1,null);node.setAttribute(cljs.core.name.call(null,key_34879),val_34880);
{
var G__34881 = cljs.core.next.call(null,seq__34854_34872__$1);
var G__34882 = null;
var G__34883 = 0;
var G__34884 = 0;
seq__34854_34860 = G__34881;
chunk__34855_34861 = G__34882;
count__34856_34862 = G__34883;
i__34857_34863 = G__34884;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13811__auto__ = el.checked;if(cljs.core.truth_(and__13811__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13811__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__34885_SHARP_){return p1__34885_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__34886_SHARP_){return p1__34886_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__34888_SHARP_,p2__34887_SHARP_){var G__34891 = p2__34887_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__34891))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__34891))
{return enfocus.core.read_select_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__34891))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__34891))
{var G__34892 = p2__34887_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__34892))
{return enfocus.core.read_checked_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__34892))
{return enfocus.core.read_checked_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__34892))
{return enfocus.core.read_simple_input.call(null,p2__34887_SHARP_,p1__34888_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__34888_SHARP_;
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
{return p1__34888_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__34893_SHARP_){if((p1__34893_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__34893_SHARP_);
} else
{if((p1__34893_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__34893_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__34893_SHARP_))
{return create_sel_str.call(null,p1__34893_SHARP_);
} else
{if(typeof p1__34893_SHARP_ === 'string')
{return p1__34893_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13823__auto__ = func;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13811__auto__ = !((node == null));if(and__13811__auto__)
{var G__34904 = node;if(G__34904)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__34904.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__34904.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34904);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34904);
}
} else
{return and__13811__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__34905 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__34905,0,null);var trans__$1 = cljs.core.nth.call(null,vec__34905,1,null);var seq__34906 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__34907 = null;var count__34908 = 0;var i__34909 = 0;while(true){
if((i__34909 < count__34908))
{var vec__34910 = cljs.core._nth.call(null,chunk__34907,i__34909);var sel = cljs.core.nth.call(null,vec__34910,0,null);var t = cljs.core.nth.call(null,vec__34910,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__34912 = seq__34906;
var G__34913 = chunk__34907;
var G__34914 = count__34908;
var G__34915 = (i__34909 + 1);
seq__34906 = G__34912;
chunk__34907 = G__34913;
count__34908 = G__34914;
i__34909 = G__34915;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34906);if(temp__4092__auto__)
{var seq__34906__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34906__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34906__$1);{
var G__34916 = cljs.core.chunk_rest.call(null,seq__34906__$1);
var G__34917 = c__14547__auto__;
var G__34918 = cljs.core.count.call(null,c__14547__auto__);
var G__34919 = 0;
seq__34906 = G__34916;
chunk__34907 = G__34917;
count__34908 = G__34918;
i__34909 = G__34919;
continue;
}
} else
{var vec__34911 = cljs.core.first.call(null,seq__34906__$1);var sel = cljs.core.nth.call(null,vec__34911,0,null);var t = cljs.core.nth.call(null,vec__34911,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__34920 = cljs.core.next.call(null,seq__34906__$1);
var G__34921 = null;
var G__34922 = 0;
var G__34923 = 0;
seq__34906 = G__34920;
chunk__34907 = G__34921;
count__34908 = G__34922;
i__34909 = G__34923;
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
i_at.cljs$lang$applyTo = (function (arglist__34924){
var id_mask = cljs.core.first(arglist__34924);
arglist__34924 = cljs.core.next(arglist__34924);
var node = cljs.core.first(arglist__34924);
var trans = cljs.core.rest(arglist__34924);
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
at.cljs$lang$applyTo = (function (arglist__34925){
var node = cljs.core.first(arglist__34925);
var trans = cljs.core.rest(arglist__34925);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__34930 = node;if(G__34930)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__34930.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__34930.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34930);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34930);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__34931 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__34931,0,null);var trans__$1 = cljs.core.nth.call(null,vec__34931,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__34932){var vec__34933 = p__34932;var ky = cljs.core.nth.call(null,vec__34933,0,null);var sel = cljs.core.nth.call(null,vec__34933,1,null);var ext = cljs.core.nth.call(null,vec__34933,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__34934){
var node = cljs.core.first(arglist__34934);
var trans = cljs.core.rest(arglist__34934);
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