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
enfocus.core.ISelector = (function (){var obj34406 = {};return obj34406;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__15129__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (enfocus.core.select[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (enfocus.core.select["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__15129__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (enfocus.core.select[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (enfocus.core.select["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__15129__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (enfocus.core.select[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (enfocus.core.select["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
enfocus.core.ITransform = (function (){var obj34408 = {};return obj34408;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__15129__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__15129__auto__ = this$;if(and__15129__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__15129__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__15744__auto__ = (((this$ == null))?null:this$);return (function (){var or__15141__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__15744__auto__)]);if(or__15141__auto__)
{return or__15141__auto__;
} else
{var or__15141__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__15141__auto____$1)
{return or__15141__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__15129__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__15129__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__15129__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__34409_SHARP_){if(typeof p1__34409_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__34409_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__34409_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__34416_34422 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__34417_34423 = null;var count__34418_34424 = 0;var i__34419_34425 = 0;while(true){
if((i__34419_34425 < count__34418_34424))
{var vec__34420_34426 = cljs.core._nth.call(null,chunk__34417_34423,i__34419_34425);var attr_34427 = cljs.core.nth.call(null,vec__34420_34426,0,null);var value_34428 = cljs.core.nth.call(null,vec__34420_34426,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34427),value_34428);
{
var G__34429 = seq__34416_34422;
var G__34430 = chunk__34417_34423;
var G__34431 = count__34418_34424;
var G__34432 = (i__34419_34425 + 1);
seq__34416_34422 = G__34429;
chunk__34417_34423 = G__34430;
count__34418_34424 = G__34431;
i__34419_34425 = G__34432;
continue;
}
} else
{var temp__4098__auto___34433 = cljs.core.seq.call(null,seq__34416_34422);if(temp__4098__auto___34433)
{var seq__34416_34434__$1 = temp__4098__auto___34433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34416_34434__$1))
{var c__15865__auto___34435 = cljs.core.chunk_first.call(null,seq__34416_34434__$1);{
var G__34436 = cljs.core.chunk_rest.call(null,seq__34416_34434__$1);
var G__34437 = c__15865__auto___34435;
var G__34438 = cljs.core.count.call(null,c__15865__auto___34435);
var G__34439 = 0;
seq__34416_34422 = G__34436;
chunk__34417_34423 = G__34437;
count__34418_34424 = G__34438;
i__34419_34425 = G__34439;
continue;
}
} else
{var vec__34421_34440 = cljs.core.first.call(null,seq__34416_34434__$1);var attr_34441 = cljs.core.nth.call(null,vec__34421_34440,0,null);var value_34442 = cljs.core.nth.call(null,vec__34421_34440,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34441),value_34442);
{
var G__34443 = cljs.core.next.call(null,seq__34416_34434__$1);
var G__34444 = null;
var G__34445 = 0;
var G__34446 = 0;
seq__34416_34422 = G__34443;
chunk__34417_34423 = G__34444;
count__34418_34424 = G__34445;
i__34419_34425 = G__34446;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__34451 = cljs.core.seq.call(null,values);var chunk__34452 = null;var count__34453 = 0;var i__34454 = 0;while(true){
if((i__34454 < count__34453))
{var attr = cljs.core._nth.call(null,chunk__34452,i__34454);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34455 = seq__34451;
var G__34456 = chunk__34452;
var G__34457 = count__34453;
var G__34458 = (i__34454 + 1);
seq__34451 = G__34455;
chunk__34452 = G__34456;
count__34453 = G__34457;
i__34454 = G__34458;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34451);if(temp__4098__auto__)
{var seq__34451__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34451__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34451__$1);{
var G__34459 = cljs.core.chunk_rest.call(null,seq__34451__$1);
var G__34460 = c__15865__auto__;
var G__34461 = cljs.core.count.call(null,c__15865__auto__);
var G__34462 = 0;
seq__34451 = G__34459;
chunk__34452 = G__34460;
count__34453 = G__34461;
i__34454 = G__34462;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__34451__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34463 = cljs.core.next.call(null,seq__34451__$1);
var G__34464 = null;
var G__34465 = 0;
var G__34466 = 0;
seq__34451 = G__34463;
chunk__34452 = G__34464;
count__34453 = G__34465;
i__34454 = G__34466;
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
{var seq__34473_34479 = cljs.core.seq.call(null,ats);var chunk__34474_34480 = null;var count__34475_34481 = 0;var i__34476_34482 = 0;while(true){
if((i__34476_34482 < count__34475_34481))
{var vec__34477_34483 = cljs.core._nth.call(null,chunk__34474_34480,i__34476_34482);var k_34484 = cljs.core.nth.call(null,vec__34477_34483,0,null);var v_34485 = cljs.core.nth.call(null,vec__34477_34483,1,null);add_map_attrs.call(null,elem,k_34484,v_34485);
{
var G__34486 = seq__34473_34479;
var G__34487 = chunk__34474_34480;
var G__34488 = count__34475_34481;
var G__34489 = (i__34476_34482 + 1);
seq__34473_34479 = G__34486;
chunk__34474_34480 = G__34487;
count__34475_34481 = G__34488;
i__34476_34482 = G__34489;
continue;
}
} else
{var temp__4098__auto___34490 = cljs.core.seq.call(null,seq__34473_34479);if(temp__4098__auto___34490)
{var seq__34473_34491__$1 = temp__4098__auto___34490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34473_34491__$1))
{var c__15865__auto___34492 = cljs.core.chunk_first.call(null,seq__34473_34491__$1);{
var G__34493 = cljs.core.chunk_rest.call(null,seq__34473_34491__$1);
var G__34494 = c__15865__auto___34492;
var G__34495 = cljs.core.count.call(null,c__15865__auto___34492);
var G__34496 = 0;
seq__34473_34479 = G__34493;
chunk__34474_34480 = G__34494;
count__34475_34481 = G__34495;
i__34476_34482 = G__34496;
continue;
}
} else
{var vec__34478_34497 = cljs.core.first.call(null,seq__34473_34491__$1);var k_34498 = cljs.core.nth.call(null,vec__34478_34497,0,null);var v_34499 = cljs.core.nth.call(null,vec__34478_34497,1,null);add_map_attrs.call(null,elem,k_34498,v_34499);
{
var G__34500 = cljs.core.next.call(null,seq__34473_34491__$1);
var G__34501 = null;
var G__34502 = 0;
var G__34503 = 0;
seq__34473_34479 = G__34500;
chunk__34474_34480 = G__34501;
count__34475_34481 = G__34502;
i__34476_34482 = G__34503;
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
var seq__34508_34512 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__34509_34513 = null;var count__34510_34514 = 0;var i__34511_34515 = 0;while(true){
if((i__34511_34515 < count__34510_34514))
{var node_34516 = cljs.core._nth.call(null,chunk__34509_34513,i__34511_34515);goog.dom.appendChild(div,node_34516);
{
var G__34517 = seq__34508_34512;
var G__34518 = chunk__34509_34513;
var G__34519 = count__34510_34514;
var G__34520 = (i__34511_34515 + 1);
seq__34508_34512 = G__34517;
chunk__34509_34513 = G__34518;
count__34510_34514 = G__34519;
i__34511_34515 = G__34520;
continue;
}
} else
{var temp__4098__auto___34521 = cljs.core.seq.call(null,seq__34508_34512);if(temp__4098__auto___34521)
{var seq__34508_34522__$1 = temp__4098__auto___34521;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34508_34522__$1))
{var c__15865__auto___34523 = cljs.core.chunk_first.call(null,seq__34508_34522__$1);{
var G__34524 = cljs.core.chunk_rest.call(null,seq__34508_34522__$1);
var G__34525 = c__15865__auto___34523;
var G__34526 = cljs.core.count.call(null,c__15865__auto___34523);
var G__34527 = 0;
seq__34508_34512 = G__34524;
chunk__34509_34513 = G__34525;
count__34510_34514 = G__34526;
i__34511_34515 = G__34527;
continue;
}
} else
{var node_34528 = cljs.core.first.call(null,seq__34508_34522__$1);goog.dom.appendChild(div,node_34528);
{
var G__34529 = cljs.core.next.call(null,seq__34508_34522__$1);
var G__34530 = null;
var G__34531 = 0;
var G__34532 = 0;
seq__34508_34512 = G__34529;
chunk__34509_34513 = G__34530;
count__34510_34514 = G__34531;
i__34511_34515 = G__34532;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34533_SHARP_){var id = p1__34533_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__34533_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__34535 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__34535,0,null);var txt = cljs.core.nth.call(null,vec__34535,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__34540_34544 = cljs.core.seq.call(null,dfa);var chunk__34541_34545 = null;var count__34542_34546 = 0;var i__34543_34547 = 0;while(true){
if((i__34543_34547 < count__34542_34546))
{var df_34548 = cljs.core._nth.call(null,chunk__34541_34545,i__34543_34547);goog.dom.append(frag,df_34548);
{
var G__34549 = seq__34540_34544;
var G__34550 = chunk__34541_34545;
var G__34551 = count__34542_34546;
var G__34552 = (i__34543_34547 + 1);
seq__34540_34544 = G__34549;
chunk__34541_34545 = G__34550;
count__34542_34546 = G__34551;
i__34543_34547 = G__34552;
continue;
}
} else
{var temp__4098__auto___34553 = cljs.core.seq.call(null,seq__34540_34544);if(temp__4098__auto___34553)
{var seq__34540_34554__$1 = temp__4098__auto___34553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34540_34554__$1))
{var c__15865__auto___34555 = cljs.core.chunk_first.call(null,seq__34540_34554__$1);{
var G__34556 = cljs.core.chunk_rest.call(null,seq__34540_34554__$1);
var G__34557 = c__15865__auto___34555;
var G__34558 = cljs.core.count.call(null,c__15865__auto___34555);
var G__34559 = 0;
seq__34540_34544 = G__34556;
chunk__34541_34545 = G__34557;
count__34542_34546 = G__34558;
i__34543_34547 = G__34559;
continue;
}
} else
{var df_34560 = cljs.core.first.call(null,seq__34540_34554__$1);goog.dom.append(frag,df_34560);
{
var G__34561 = cljs.core.next.call(null,seq__34540_34554__$1);
var G__34562 = null;
var G__34563 = 0;
var G__34564 = 0;
seq__34540_34544 = G__34561;
chunk__34541_34545 = G__34562;
count__34542_34546 = G__34563;
i__34543_34547 = G__34564;
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
{var vec__34567 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__34567,0,null);var tdom = cljs.core.nth.call(null,vec__34567,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34567,sym,tdom,dom,tsnip){
return (function (p1__34565_SHARP_){return p1__34565_SHARP_.outerHTML;
});})(vec__34567,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t34571 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34571 = (function (trans,func,extr_multi_node,meta34572){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta34572 = meta34572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34571.cljs$lang$type = true;
enfocus.core.t34571.cljs$lang$ctorStr = "enfocus.core/t34571";
enfocus.core.t34571.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"enfocus.core/t34571");
});
enfocus.core.t34571.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34571.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34571.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34573){var self__ = this;
var _34573__$1 = this;return self__.meta34572;
});
enfocus.core.t34571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34573,meta34572__$1){var self__ = this;
var _34573__$1 = this;return (new enfocus.core.t34571(self__.trans,self__.func,self__.extr_multi_node,meta34572__$1));
});
enfocus.core.__GT_t34571 = (function __GT_t34571(trans__$1,func__$1,extr_multi_node__$1,meta34572){return (new enfocus.core.t34571(trans__$1,func__$1,extr_multi_node__$1,meta34572));
});
}
return (new enfocus.core.t34571(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t34581 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34581 = (function (trans,func,multi_node_chain,meta34582){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta34582 = meta34582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34581.cljs$lang$type = true;
enfocus.core.t34581.cljs$lang$ctorStr = "enfocus.core/t34581";
enfocus.core.t34581.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"enfocus.core/t34581");
});
enfocus.core.t34581.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34581.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34581.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34583){var self__ = this;
var _34583__$1 = this;return self__.meta34582;
});
enfocus.core.t34581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34583,meta34582__$1){var self__ = this;
var _34583__$1 = this;return (new enfocus.core.t34581(self__.trans,self__.func,self__.multi_node_chain,meta34582__$1));
});
enfocus.core.__GT_t34581 = (function __GT_t34581(trans__$1,func__$1,multi_node_chain__$1,meta34582){return (new enfocus.core.t34581(trans__$1,func__$1,multi_node_chain__$1,meta34582));
});
}
return (new enfocus.core.t34581(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__34574_SHARP_){return domina.nodes.call(null,p1__34574_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t34584 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34584 = (function (trans,func,values,multi_node_chain,meta34585){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta34585 = meta34585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34584.cljs$lang$type = true;
enfocus.core.t34584.cljs$lang$ctorStr = "enfocus.core/t34584";
enfocus.core.t34584.cljs$lang$ctorPrWriter = (function (this__15685__auto__,writer__15686__auto__,opt__15687__auto__){return cljs.core._write.call(null,writer__15686__auto__,"enfocus.core/t34584");
});
enfocus.core.t34584.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34584.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34584.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34586){var self__ = this;
var _34586__$1 = this;return self__.meta34585;
});
enfocus.core.t34584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34586,meta34585__$1){var self__ = this;
var _34586__$1 = this;return (new enfocus.core.t34584(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta34585__$1));
});
enfocus.core.__GT_t34584 = (function __GT_t34584(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34585){return (new enfocus.core.t34584(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34585));
});
}
return (new enfocus.core.t34584(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34587_SHARP_,p2__34588_SHARP_){domina.destroy_children_BANG_.call(null,p1__34587_SHARP_);
return domina.append_BANG_.call(null,p1__34587_SHARP_,p2__34588_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__34589){
var values = cljs.core.seq(arglist__34589);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__34590_SHARP_){return domina.set_html_BANG_.call(null,p1__34590_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34591_SHARP_){var seq__34598 = cljs.core.seq.call(null,pairs);var chunk__34599 = null;var count__34600 = 0;var i__34601 = 0;while(true){
if((i__34601 < count__34600))
{var vec__34602 = cljs.core._nth.call(null,chunk__34599,i__34601);var name = cljs.core.nth.call(null,vec__34602,0,null);var value = cljs.core.nth.call(null,vec__34602,1,null);domina.set_attr_BANG_.call(null,p1__34591_SHARP_,name,value);
{
var G__34604 = seq__34598;
var G__34605 = chunk__34599;
var G__34606 = count__34600;
var G__34607 = (i__34601 + 1);
seq__34598 = G__34604;
chunk__34599 = G__34605;
count__34600 = G__34606;
i__34601 = G__34607;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34598);if(temp__4098__auto__)
{var seq__34598__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34598__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34598__$1);{
var G__34608 = cljs.core.chunk_rest.call(null,seq__34598__$1);
var G__34609 = c__15865__auto__;
var G__34610 = cljs.core.count.call(null,c__15865__auto__);
var G__34611 = 0;
seq__34598 = G__34608;
chunk__34599 = G__34609;
count__34600 = G__34610;
i__34601 = G__34611;
continue;
}
} else
{var vec__34603 = cljs.core.first.call(null,seq__34598__$1);var name = cljs.core.nth.call(null,vec__34603,0,null);var value = cljs.core.nth.call(null,vec__34603,1,null);domina.set_attr_BANG_.call(null,p1__34591_SHARP_,name,value);
{
var G__34612 = cljs.core.next.call(null,seq__34598__$1);
var G__34613 = null;
var G__34614 = 0;
var G__34615 = 0;
seq__34598 = G__34612;
chunk__34599 = G__34613;
count__34600 = G__34614;
i__34601 = G__34615;
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
set_attr.cljs$lang$applyTo = (function (arglist__34616){
var values = cljs.core.seq(arglist__34616);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34617_SHARP_){var seq__34622 = cljs.core.seq.call(null,values);var chunk__34623 = null;var count__34624 = 0;var i__34625 = 0;while(true){
if((i__34625 < count__34624))
{var name = cljs.core._nth.call(null,chunk__34623,i__34625);domina.remove_attr_BANG_.call(null,p1__34617_SHARP_,name);
{
var G__34626 = seq__34622;
var G__34627 = chunk__34623;
var G__34628 = count__34624;
var G__34629 = (i__34625 + 1);
seq__34622 = G__34626;
chunk__34623 = G__34627;
count__34624 = G__34628;
i__34625 = G__34629;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34622);if(temp__4098__auto__)
{var seq__34622__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34622__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34622__$1);{
var G__34630 = cljs.core.chunk_rest.call(null,seq__34622__$1);
var G__34631 = c__15865__auto__;
var G__34632 = cljs.core.count.call(null,c__15865__auto__);
var G__34633 = 0;
seq__34622 = G__34630;
chunk__34623 = G__34631;
count__34624 = G__34632;
i__34625 = G__34633;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__34622__$1);domina.remove_attr_BANG_.call(null,p1__34617_SHARP_,name);
{
var G__34634 = cljs.core.next.call(null,seq__34622__$1);
var G__34635 = null;
var G__34636 = 0;
var G__34637 = 0;
seq__34622 = G__34634;
chunk__34623 = G__34635;
count__34624 = G__34636;
i__34625 = G__34637;
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
remove_attr.cljs$lang$applyTo = (function (arglist__34638){
var values = cljs.core.seq(arglist__34638);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__34641){var vec__34642 = p__34641;var n = cljs.core.nth.call(null,vec__34642,0,null);var v = cljs.core.nth.call(null,vec__34642,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__34643){
var forms = cljs.core.seq(arglist__34643);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34644_SHARP_){var seq__34649 = cljs.core.seq.call(null,values);var chunk__34650 = null;var count__34651 = 0;var i__34652 = 0;while(true){
if((i__34652 < count__34651))
{var val = cljs.core._nth.call(null,chunk__34650,i__34652);domina.add_class_BANG_.call(null,p1__34644_SHARP_,val);
{
var G__34653 = seq__34649;
var G__34654 = chunk__34650;
var G__34655 = count__34651;
var G__34656 = (i__34652 + 1);
seq__34649 = G__34653;
chunk__34650 = G__34654;
count__34651 = G__34655;
i__34652 = G__34656;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34649);if(temp__4098__auto__)
{var seq__34649__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34649__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34649__$1);{
var G__34657 = cljs.core.chunk_rest.call(null,seq__34649__$1);
var G__34658 = c__15865__auto__;
var G__34659 = cljs.core.count.call(null,c__15865__auto__);
var G__34660 = 0;
seq__34649 = G__34657;
chunk__34650 = G__34658;
count__34651 = G__34659;
i__34652 = G__34660;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34649__$1);domina.add_class_BANG_.call(null,p1__34644_SHARP_,val);
{
var G__34661 = cljs.core.next.call(null,seq__34649__$1);
var G__34662 = null;
var G__34663 = 0;
var G__34664 = 0;
seq__34649 = G__34661;
chunk__34650 = G__34662;
count__34651 = G__34663;
i__34652 = G__34664;
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
add_class.cljs$lang$applyTo = (function (arglist__34665){
var values = cljs.core.seq(arglist__34665);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34666_SHARP_){var seq__34671 = cljs.core.seq.call(null,values);var chunk__34672 = null;var count__34673 = 0;var i__34674 = 0;while(true){
if((i__34674 < count__34673))
{var val = cljs.core._nth.call(null,chunk__34672,i__34674);domina.remove_class_BANG_.call(null,p1__34666_SHARP_,val);
{
var G__34675 = seq__34671;
var G__34676 = chunk__34672;
var G__34677 = count__34673;
var G__34678 = (i__34674 + 1);
seq__34671 = G__34675;
chunk__34672 = G__34676;
count__34673 = G__34677;
i__34674 = G__34678;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34671);if(temp__4098__auto__)
{var seq__34671__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34671__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34671__$1);{
var G__34679 = cljs.core.chunk_rest.call(null,seq__34671__$1);
var G__34680 = c__15865__auto__;
var G__34681 = cljs.core.count.call(null,c__15865__auto__);
var G__34682 = 0;
seq__34671 = G__34679;
chunk__34672 = G__34680;
count__34673 = G__34681;
i__34674 = G__34682;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34671__$1);domina.remove_class_BANG_.call(null,p1__34666_SHARP_,val);
{
var G__34683 = cljs.core.next.call(null,seq__34671__$1);
var G__34684 = null;
var G__34685 = 0;
var G__34686 = 0;
seq__34671 = G__34683;
chunk__34672 = G__34684;
count__34673 = G__34685;
i__34674 = G__34686;
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
remove_class.cljs$lang$applyTo = (function (arglist__34687){
var values = cljs.core.seq(arglist__34687);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34688_SHARP_){return domina.set_classes_BANG_.call(null,p1__34688_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__34689){
var values = cljs.core.seq(arglist__34689);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__34694 = cljs.core.seq.call(null,forms);var chunk__34695 = null;var count__34696 = 0;var i__34697 = 0;while(true){
if((i__34697 < count__34696))
{var fun = cljs.core._nth.call(null,chunk__34695,i__34697);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34698 = seq__34694;
var G__34699 = chunk__34695;
var G__34700 = count__34696;
var G__34701 = (i__34697 + 1);
seq__34694 = G__34698;
chunk__34695 = G__34699;
count__34696 = G__34700;
i__34697 = G__34701;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34694);if(temp__4098__auto__)
{var seq__34694__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34694__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34694__$1);{
var G__34702 = cljs.core.chunk_rest.call(null,seq__34694__$1);
var G__34703 = c__15865__auto__;
var G__34704 = cljs.core.count.call(null,c__15865__auto__);
var G__34705 = 0;
seq__34694 = G__34702;
chunk__34695 = G__34703;
count__34696 = G__34704;
i__34697 = G__34705;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__34694__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34706 = cljs.core.next.call(null,seq__34694__$1);
var G__34707 = null;
var G__34708 = 0;
var G__34709 = 0;
seq__34694 = G__34706;
chunk__34695 = G__34707;
count__34696 = G__34708;
i__34697 = G__34709;
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
do__GT_.cljs$lang$applyTo = (function (arglist__34710){
var forms = cljs.core.seq(arglist__34710);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34711_SHARP_,p2__34712_SHARP_){return domina.append_BANG_.call(null,p1__34711_SHARP_,p2__34712_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__34713){
var values = cljs.core.seq(arglist__34713);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34714_SHARP_,p2__34715_SHARP_){return domina.prepend_BANG_.call(null,p1__34714_SHARP_,p2__34715_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__34716){
var values = cljs.core.seq(arglist__34716);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34717_SHARP_,p2__34718_SHARP_){return domina.insert_before_BANG_.call(null,p1__34717_SHARP_,p2__34718_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__34719){
var values = cljs.core.seq(arglist__34719);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34720_SHARP_,p2__34721_SHARP_){return domina.insert_after_BANG_.call(null,p1__34720_SHARP_,p2__34721_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__34722){
var values = cljs.core.seq(arglist__34722);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34723_SHARP_,p2__34724_SHARP_){return domina.swap_content_BANG_.call(null,p1__34723_SHARP_,p2__34724_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__34725){
var values = cljs.core.seq(arglist__34725);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__34726_SHARP_){return domina.detach_BANG_.call(null,p1__34726_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34727_SHARP_){var seq__34734 = cljs.core.seq.call(null,pairs);var chunk__34735 = null;var count__34736 = 0;var i__34737 = 0;while(true){
if((i__34737 < count__34736))
{var vec__34738 = cljs.core._nth.call(null,chunk__34735,i__34737);var name = cljs.core.nth.call(null,vec__34738,0,null);var value = cljs.core.nth.call(null,vec__34738,1,null);domina.set_style_BANG_.call(null,p1__34727_SHARP_,name,value);
{
var G__34740 = seq__34734;
var G__34741 = chunk__34735;
var G__34742 = count__34736;
var G__34743 = (i__34737 + 1);
seq__34734 = G__34740;
chunk__34735 = G__34741;
count__34736 = G__34742;
i__34737 = G__34743;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34734);if(temp__4098__auto__)
{var seq__34734__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34734__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34734__$1);{
var G__34744 = cljs.core.chunk_rest.call(null,seq__34734__$1);
var G__34745 = c__15865__auto__;
var G__34746 = cljs.core.count.call(null,c__15865__auto__);
var G__34747 = 0;
seq__34734 = G__34744;
chunk__34735 = G__34745;
count__34736 = G__34746;
i__34737 = G__34747;
continue;
}
} else
{var vec__34739 = cljs.core.first.call(null,seq__34734__$1);var name = cljs.core.nth.call(null,vec__34739,0,null);var value = cljs.core.nth.call(null,vec__34739,1,null);domina.set_style_BANG_.call(null,p1__34727_SHARP_,name,value);
{
var G__34748 = cljs.core.next.call(null,seq__34734__$1);
var G__34749 = null;
var G__34750 = 0;
var G__34751 = 0;
seq__34734 = G__34748;
chunk__34735 = G__34749;
count__34736 = G__34750;
i__34737 = G__34751;
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
set_style.cljs$lang$applyTo = (function (arglist__34752){
var values = cljs.core.seq(arglist__34752);
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
remove_style.cljs$lang$applyTo = (function (arglist__34753){
var values = cljs.core.seq(arglist__34753);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__34754_SHARP_){return domina.set_data_BANG_.call(null,p1__34754_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__34755){
var ttime = cljs.core.first(arglist__34755);
var funcs = cljs.core.rest(arglist__34755);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__34757_SHARP_,p2__34756_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__34756_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__34782_34790 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__34783_34791 = null;var count__34784_34792 = 0;var i__34785_34793 = 0;while(true){
if((i__34785_34793 < count__34784_34792))
{var idx_34794 = cljs.core._nth.call(null,chunk__34783_34791,i__34785_34793);var attr_34795 = pnod.attributes.item(idx_34794);if(cljs.core.truth_(attr_34795.specified))
{attr_34795.value = rep_str.call(null,attr_34795.value);
} else
{}
{
var G__34796 = seq__34782_34790;
var G__34797 = chunk__34783_34791;
var G__34798 = count__34784_34792;
var G__34799 = (i__34785_34793 + 1);
seq__34782_34790 = G__34796;
chunk__34783_34791 = G__34797;
count__34784_34792 = G__34798;
i__34785_34793 = G__34799;
continue;
}
} else
{var temp__4098__auto___34800 = cljs.core.seq.call(null,seq__34782_34790);if(temp__4098__auto___34800)
{var seq__34782_34801__$1 = temp__4098__auto___34800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34782_34801__$1))
{var c__15865__auto___34802 = cljs.core.chunk_first.call(null,seq__34782_34801__$1);{
var G__34803 = cljs.core.chunk_rest.call(null,seq__34782_34801__$1);
var G__34804 = c__15865__auto___34802;
var G__34805 = cljs.core.count.call(null,c__15865__auto___34802);
var G__34806 = 0;
seq__34782_34790 = G__34803;
chunk__34783_34791 = G__34804;
count__34784_34792 = G__34805;
i__34785_34793 = G__34806;
continue;
}
} else
{var idx_34807 = cljs.core.first.call(null,seq__34782_34801__$1);var attr_34808 = pnod.attributes.item(idx_34807);if(cljs.core.truth_(attr_34808.specified))
{attr_34808.value = rep_str.call(null,attr_34808.value);
} else
{}
{
var G__34809 = cljs.core.next.call(null,seq__34782_34801__$1);
var G__34810 = null;
var G__34811 = 0;
var G__34812 = 0;
seq__34782_34790 = G__34809;
chunk__34783_34791 = G__34810;
count__34784_34792 = G__34811;
i__34785_34793 = G__34812;
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
{var seq__34786 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__34787 = null;var count__34788 = 0;var i__34789 = 0;while(true){
if((i__34789 < count__34788))
{var cnode = cljs.core._nth.call(null,chunk__34787,i__34789);rep_node.call(null,cnode);
{
var G__34813 = seq__34786;
var G__34814 = chunk__34787;
var G__34815 = count__34788;
var G__34816 = (i__34789 + 1);
seq__34786 = G__34813;
chunk__34787 = G__34814;
count__34788 = G__34815;
i__34789 = G__34816;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34786);if(temp__4098__auto__)
{var seq__34786__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34786__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34786__$1);{
var G__34817 = cljs.core.chunk_rest.call(null,seq__34786__$1);
var G__34818 = c__15865__auto__;
var G__34819 = cljs.core.count.call(null,c__15865__auto__);
var G__34820 = 0;
seq__34786 = G__34817;
chunk__34787 = G__34818;
count__34788 = G__34819;
i__34789 = G__34820;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__34786__$1);rep_node.call(null,cnode);
{
var G__34821 = cljs.core.next.call(null,seq__34786__$1);
var G__34822 = null;
var G__34823 = 0;
var G__34824 = 0;
seq__34786 = G__34821;
chunk__34787 = G__34822;
count__34788 = G__34823;
i__34789 = G__34824;
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
{var vec__34834 = node_spec;var tag = cljs.core.nth.call(null,vec__34834,0,null);var vec__34835 = cljs.core.nthnext.call(null,vec__34834,1);var m = cljs.core.nth.call(null,vec__34835,0,null);var ms = cljs.core.nthnext.call(null,vec__34835,1);var more = vec__34835;var vec__34836 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__34836,0,null);var segments = cljs.core.nthnext.call(null,vec__34836,1);var id = cljs.core.some.call(null,((function (vec__34834,tag,vec__34835,m,ms,more,vec__34836,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__34834,tag,vec__34835,m,ms,more,vec__34836,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__34834,tag,vec__34835,m,ms,more,vec__34836,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__34834,tag,vec__34835,m,ms,more,vec__34836,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__34837_34843 = cljs.core.seq.call(null,attrs__$2);var chunk__34838_34844 = null;var count__34839_34845 = 0;var i__34840_34846 = 0;while(true){
if((i__34840_34846 < count__34839_34845))
{var vec__34841_34847 = cljs.core._nth.call(null,chunk__34838_34844,i__34840_34846);var key_34848 = cljs.core.nth.call(null,vec__34841_34847,0,null);var val_34849 = cljs.core.nth.call(null,vec__34841_34847,1,null);node.setAttribute(cljs.core.name.call(null,key_34848),val_34849);
{
var G__34850 = seq__34837_34843;
var G__34851 = chunk__34838_34844;
var G__34852 = count__34839_34845;
var G__34853 = (i__34840_34846 + 1);
seq__34837_34843 = G__34850;
chunk__34838_34844 = G__34851;
count__34839_34845 = G__34852;
i__34840_34846 = G__34853;
continue;
}
} else
{var temp__4098__auto___34854 = cljs.core.seq.call(null,seq__34837_34843);if(temp__4098__auto___34854)
{var seq__34837_34855__$1 = temp__4098__auto___34854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34837_34855__$1))
{var c__15865__auto___34856 = cljs.core.chunk_first.call(null,seq__34837_34855__$1);{
var G__34857 = cljs.core.chunk_rest.call(null,seq__34837_34855__$1);
var G__34858 = c__15865__auto___34856;
var G__34859 = cljs.core.count.call(null,c__15865__auto___34856);
var G__34860 = 0;
seq__34837_34843 = G__34857;
chunk__34838_34844 = G__34858;
count__34839_34845 = G__34859;
i__34840_34846 = G__34860;
continue;
}
} else
{var vec__34842_34861 = cljs.core.first.call(null,seq__34837_34855__$1);var key_34862 = cljs.core.nth.call(null,vec__34842_34861,0,null);var val_34863 = cljs.core.nth.call(null,vec__34842_34861,1,null);node.setAttribute(cljs.core.name.call(null,key_34862),val_34863);
{
var G__34864 = cljs.core.next.call(null,seq__34837_34855__$1);
var G__34865 = null;
var G__34866 = 0;
var G__34867 = 0;
seq__34837_34843 = G__34864;
chunk__34838_34844 = G__34865;
count__34839_34845 = G__34866;
i__34840_34846 = G__34867;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__15129__auto__ = el.checked;if(cljs.core.truth_(and__15129__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__15129__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__34868_SHARP_){return p1__34868_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__34869_SHARP_){return p1__34869_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__34871_SHARP_,p2__34870_SHARP_){var G__34874 = p2__34870_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__34874))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__34874))
{return enfocus.core.read_select_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__34874))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__34874))
{var G__34875 = p2__34870_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__34875))
{return enfocus.core.read_checked_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__34875))
{return enfocus.core.read_checked_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__34875))
{return enfocus.core.read_simple_input.call(null,p2__34870_SHARP_,p1__34871_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__34871_SHARP_;
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
{return p1__34871_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__34876_SHARP_){if((p1__34876_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__34876_SHARP_);
} else
{if((p1__34876_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__34876_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__34876_SHARP_))
{return create_sel_str.call(null,p1__34876_SHARP_);
} else
{if(typeof p1__34876_SHARP_ === 'string')
{return p1__34876_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__15141__auto__ = func;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__15129__auto__ = !((node == null));if(and__15129__auto__)
{var G__34887 = node;if(G__34887)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__34887.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__34887.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34887);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34887);
}
} else
{return and__15129__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__34888 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__34888,0,null);var trans__$1 = cljs.core.nth.call(null,vec__34888,1,null);var seq__34889 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__34890 = null;var count__34891 = 0;var i__34892 = 0;while(true){
if((i__34892 < count__34891))
{var vec__34893 = cljs.core._nth.call(null,chunk__34890,i__34892);var sel = cljs.core.nth.call(null,vec__34893,0,null);var t = cljs.core.nth.call(null,vec__34893,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__34895 = seq__34889;
var G__34896 = chunk__34890;
var G__34897 = count__34891;
var G__34898 = (i__34892 + 1);
seq__34889 = G__34895;
chunk__34890 = G__34896;
count__34891 = G__34897;
i__34892 = G__34898;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__34889);if(temp__4098__auto__)
{var seq__34889__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34889__$1))
{var c__15865__auto__ = cljs.core.chunk_first.call(null,seq__34889__$1);{
var G__34899 = cljs.core.chunk_rest.call(null,seq__34889__$1);
var G__34900 = c__15865__auto__;
var G__34901 = cljs.core.count.call(null,c__15865__auto__);
var G__34902 = 0;
seq__34889 = G__34899;
chunk__34890 = G__34900;
count__34891 = G__34901;
i__34892 = G__34902;
continue;
}
} else
{var vec__34894 = cljs.core.first.call(null,seq__34889__$1);var sel = cljs.core.nth.call(null,vec__34894,0,null);var t = cljs.core.nth.call(null,vec__34894,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__34903 = cljs.core.next.call(null,seq__34889__$1);
var G__34904 = null;
var G__34905 = 0;
var G__34906 = 0;
seq__34889 = G__34903;
chunk__34890 = G__34904;
count__34891 = G__34905;
i__34892 = G__34906;
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
i_at.cljs$lang$applyTo = (function (arglist__34907){
var id_mask = cljs.core.first(arglist__34907);
arglist__34907 = cljs.core.next(arglist__34907);
var node = cljs.core.first(arglist__34907);
var trans = cljs.core.rest(arglist__34907);
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
at.cljs$lang$applyTo = (function (arglist__34908){
var node = cljs.core.first(arglist__34908);
var trans = cljs.core.rest(arglist__34908);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__34913 = node;if(G__34913)
{var bit__15767__auto__ = null;if(cljs.core.truth_((function (){var or__15141__auto__ = bit__15767__auto__;if(cljs.core.truth_(or__15141__auto__))
{return or__15141__auto__;
} else
{return G__34913.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__34913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__34913);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__34914 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__34914,0,null);var trans__$1 = cljs.core.nth.call(null,vec__34914,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__34915){var vec__34916 = p__34915;var ky = cljs.core.nth.call(null,vec__34916,0,null);var sel = cljs.core.nth.call(null,vec__34916,1,null);var ext = cljs.core.nth.call(null,vec__34916,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__34917){
var node = cljs.core.first(arglist__34917);
var trans = cljs.core.rest(arglist__34917);
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