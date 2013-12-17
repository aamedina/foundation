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
enfocus.core.ISelector = (function (){var obj24466 = {};return obj24466;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__7835__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (enfocus.core.select[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (enfocus.core.select["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (enfocus.core.select[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (enfocus.core.select["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__7835__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (enfocus.core.select[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (enfocus.core.select["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
enfocus.core.ITransform = (function (){var obj24468 = {};return obj24468;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__7835__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__7835__auto__ = this$;if(and__7835__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__7835__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8450__auto__ = (((this$ == null))?null:this$);return (function (){var or__7847__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__7835__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__7835__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7835__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__24469_SHARP_){if(typeof p1__24469_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__24469_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__24469_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__24476_24482 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__24477_24483 = null;var count__24478_24484 = 0;var i__24479_24485 = 0;while(true){
if((i__24479_24485 < count__24478_24484))
{var vec__24480_24486 = cljs.core._nth.call(null,chunk__24477_24483,i__24479_24485);var attr_24487 = cljs.core.nth.call(null,vec__24480_24486,0,null);var value_24488 = cljs.core.nth.call(null,vec__24480_24486,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_24487),value_24488);
{
var G__24489 = seq__24476_24482;
var G__24490 = chunk__24477_24483;
var G__24491 = count__24478_24484;
var G__24492 = (i__24479_24485 + 1);
seq__24476_24482 = G__24489;
chunk__24477_24483 = G__24490;
count__24478_24484 = G__24491;
i__24479_24485 = G__24492;
continue;
}
} else
{var temp__4092__auto___24493 = cljs.core.seq.call(null,seq__24476_24482);if(temp__4092__auto___24493)
{var seq__24476_24494__$1 = temp__4092__auto___24493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24476_24494__$1))
{var c__8571__auto___24495 = cljs.core.chunk_first.call(null,seq__24476_24494__$1);{
var G__24496 = cljs.core.chunk_rest.call(null,seq__24476_24494__$1);
var G__24497 = c__8571__auto___24495;
var G__24498 = cljs.core.count.call(null,c__8571__auto___24495);
var G__24499 = 0;
seq__24476_24482 = G__24496;
chunk__24477_24483 = G__24497;
count__24478_24484 = G__24498;
i__24479_24485 = G__24499;
continue;
}
} else
{var vec__24481_24500 = cljs.core.first.call(null,seq__24476_24494__$1);var attr_24501 = cljs.core.nth.call(null,vec__24481_24500,0,null);var value_24502 = cljs.core.nth.call(null,vec__24481_24500,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_24501),value_24502);
{
var G__24503 = cljs.core.next.call(null,seq__24476_24494__$1);
var G__24504 = null;
var G__24505 = 0;
var G__24506 = 0;
seq__24476_24482 = G__24503;
chunk__24477_24483 = G__24504;
count__24478_24484 = G__24505;
i__24479_24485 = G__24506;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__24511 = cljs.core.seq.call(null,values);var chunk__24512 = null;var count__24513 = 0;var i__24514 = 0;while(true){
if((i__24514 < count__24513))
{var attr = cljs.core._nth.call(null,chunk__24512,i__24514);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__24515 = seq__24511;
var G__24516 = chunk__24512;
var G__24517 = count__24513;
var G__24518 = (i__24514 + 1);
seq__24511 = G__24515;
chunk__24512 = G__24516;
count__24513 = G__24517;
i__24514 = G__24518;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24511);if(temp__4092__auto__)
{var seq__24511__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24511__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24511__$1);{
var G__24519 = cljs.core.chunk_rest.call(null,seq__24511__$1);
var G__24520 = c__8571__auto__;
var G__24521 = cljs.core.count.call(null,c__8571__auto__);
var G__24522 = 0;
seq__24511 = G__24519;
chunk__24512 = G__24520;
count__24513 = G__24521;
i__24514 = G__24522;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__24511__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__24523 = cljs.core.next.call(null,seq__24511__$1);
var G__24524 = null;
var G__24525 = 0;
var G__24526 = 0;
seq__24511 = G__24523;
chunk__24512 = G__24524;
count__24513 = G__24525;
i__24514 = G__24526;
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
{var seq__24533_24539 = cljs.core.seq.call(null,ats);var chunk__24534_24540 = null;var count__24535_24541 = 0;var i__24536_24542 = 0;while(true){
if((i__24536_24542 < count__24535_24541))
{var vec__24537_24543 = cljs.core._nth.call(null,chunk__24534_24540,i__24536_24542);var k_24544 = cljs.core.nth.call(null,vec__24537_24543,0,null);var v_24545 = cljs.core.nth.call(null,vec__24537_24543,1,null);add_map_attrs.call(null,elem,k_24544,v_24545);
{
var G__24546 = seq__24533_24539;
var G__24547 = chunk__24534_24540;
var G__24548 = count__24535_24541;
var G__24549 = (i__24536_24542 + 1);
seq__24533_24539 = G__24546;
chunk__24534_24540 = G__24547;
count__24535_24541 = G__24548;
i__24536_24542 = G__24549;
continue;
}
} else
{var temp__4092__auto___24550 = cljs.core.seq.call(null,seq__24533_24539);if(temp__4092__auto___24550)
{var seq__24533_24551__$1 = temp__4092__auto___24550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24533_24551__$1))
{var c__8571__auto___24552 = cljs.core.chunk_first.call(null,seq__24533_24551__$1);{
var G__24553 = cljs.core.chunk_rest.call(null,seq__24533_24551__$1);
var G__24554 = c__8571__auto___24552;
var G__24555 = cljs.core.count.call(null,c__8571__auto___24552);
var G__24556 = 0;
seq__24533_24539 = G__24553;
chunk__24534_24540 = G__24554;
count__24535_24541 = G__24555;
i__24536_24542 = G__24556;
continue;
}
} else
{var vec__24538_24557 = cljs.core.first.call(null,seq__24533_24551__$1);var k_24558 = cljs.core.nth.call(null,vec__24538_24557,0,null);var v_24559 = cljs.core.nth.call(null,vec__24538_24557,1,null);add_map_attrs.call(null,elem,k_24558,v_24559);
{
var G__24560 = cljs.core.next.call(null,seq__24533_24551__$1);
var G__24561 = null;
var G__24562 = 0;
var G__24563 = 0;
seq__24533_24539 = G__24560;
chunk__24534_24540 = G__24561;
count__24535_24541 = G__24562;
i__24536_24542 = G__24563;
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
var seq__24568_24572 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__24569_24573 = null;var count__24570_24574 = 0;var i__24571_24575 = 0;while(true){
if((i__24571_24575 < count__24570_24574))
{var node_24576 = cljs.core._nth.call(null,chunk__24569_24573,i__24571_24575);goog.dom.appendChild(div,node_24576);
{
var G__24577 = seq__24568_24572;
var G__24578 = chunk__24569_24573;
var G__24579 = count__24570_24574;
var G__24580 = (i__24571_24575 + 1);
seq__24568_24572 = G__24577;
chunk__24569_24573 = G__24578;
count__24570_24574 = G__24579;
i__24571_24575 = G__24580;
continue;
}
} else
{var temp__4092__auto___24581 = cljs.core.seq.call(null,seq__24568_24572);if(temp__4092__auto___24581)
{var seq__24568_24582__$1 = temp__4092__auto___24581;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24568_24582__$1))
{var c__8571__auto___24583 = cljs.core.chunk_first.call(null,seq__24568_24582__$1);{
var G__24584 = cljs.core.chunk_rest.call(null,seq__24568_24582__$1);
var G__24585 = c__8571__auto___24583;
var G__24586 = cljs.core.count.call(null,c__8571__auto___24583);
var G__24587 = 0;
seq__24568_24572 = G__24584;
chunk__24569_24573 = G__24585;
count__24570_24574 = G__24586;
i__24571_24575 = G__24587;
continue;
}
} else
{var node_24588 = cljs.core.first.call(null,seq__24568_24582__$1);goog.dom.appendChild(div,node_24588);
{
var G__24589 = cljs.core.next.call(null,seq__24568_24582__$1);
var G__24590 = null;
var G__24591 = 0;
var G__24592 = 0;
seq__24568_24572 = G__24589;
chunk__24569_24573 = G__24590;
count__24570_24574 = G__24591;
i__24571_24575 = G__24592;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__24593_SHARP_){var id = p1__24593_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__24593_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__24595 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__24595,0,null);var txt = cljs.core.nth.call(null,vec__24595,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__24600_24604 = cljs.core.seq.call(null,dfa);var chunk__24601_24605 = null;var count__24602_24606 = 0;var i__24603_24607 = 0;while(true){
if((i__24603_24607 < count__24602_24606))
{var df_24608 = cljs.core._nth.call(null,chunk__24601_24605,i__24603_24607);goog.dom.append(frag,df_24608);
{
var G__24609 = seq__24600_24604;
var G__24610 = chunk__24601_24605;
var G__24611 = count__24602_24606;
var G__24612 = (i__24603_24607 + 1);
seq__24600_24604 = G__24609;
chunk__24601_24605 = G__24610;
count__24602_24606 = G__24611;
i__24603_24607 = G__24612;
continue;
}
} else
{var temp__4092__auto___24613 = cljs.core.seq.call(null,seq__24600_24604);if(temp__4092__auto___24613)
{var seq__24600_24614__$1 = temp__4092__auto___24613;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24600_24614__$1))
{var c__8571__auto___24615 = cljs.core.chunk_first.call(null,seq__24600_24614__$1);{
var G__24616 = cljs.core.chunk_rest.call(null,seq__24600_24614__$1);
var G__24617 = c__8571__auto___24615;
var G__24618 = cljs.core.count.call(null,c__8571__auto___24615);
var G__24619 = 0;
seq__24600_24604 = G__24616;
chunk__24601_24605 = G__24617;
count__24602_24606 = G__24618;
i__24603_24607 = G__24619;
continue;
}
} else
{var df_24620 = cljs.core.first.call(null,seq__24600_24614__$1);goog.dom.append(frag,df_24620);
{
var G__24621 = cljs.core.next.call(null,seq__24600_24614__$1);
var G__24622 = null;
var G__24623 = 0;
var G__24624 = 0;
seq__24600_24604 = G__24621;
chunk__24601_24605 = G__24622;
count__24602_24606 = G__24623;
i__24603_24607 = G__24624;
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
{var vec__24627 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__24627,0,null);var tdom = cljs.core.nth.call(null,vec__24627,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24627,sym,tdom,dom,tsnip){
return (function (p1__24625_SHARP_){return p1__24625_SHARP_.outerHTML;
});})(vec__24627,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t24631 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24631 = (function (trans,func,extr_multi_node,meta24632){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta24632 = meta24632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24631.cljs$lang$type = true;
enfocus.core.t24631.cljs$lang$ctorStr = "enfocus.core/t24631";
enfocus.core.t24631.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"enfocus.core/t24631");
});
enfocus.core.t24631.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24631.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24631.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24633){var self__ = this;
var _24633__$1 = this;return self__.meta24632;
});
enfocus.core.t24631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24633,meta24632__$1){var self__ = this;
var _24633__$1 = this;return (new enfocus.core.t24631(self__.trans,self__.func,self__.extr_multi_node,meta24632__$1));
});
enfocus.core.__GT_t24631 = (function __GT_t24631(trans__$1,func__$1,extr_multi_node__$1,meta24632){return (new enfocus.core.t24631(trans__$1,func__$1,extr_multi_node__$1,meta24632));
});
}
return (new enfocus.core.t24631(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t24641 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24641 = (function (trans,func,multi_node_chain,meta24642){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta24642 = meta24642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24641.cljs$lang$type = true;
enfocus.core.t24641.cljs$lang$ctorStr = "enfocus.core/t24641";
enfocus.core.t24641.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"enfocus.core/t24641");
});
enfocus.core.t24641.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24641.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24641.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24643){var self__ = this;
var _24643__$1 = this;return self__.meta24642;
});
enfocus.core.t24641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24643,meta24642__$1){var self__ = this;
var _24643__$1 = this;return (new enfocus.core.t24641(self__.trans,self__.func,self__.multi_node_chain,meta24642__$1));
});
enfocus.core.__GT_t24641 = (function __GT_t24641(trans__$1,func__$1,multi_node_chain__$1,meta24642){return (new enfocus.core.t24641(trans__$1,func__$1,multi_node_chain__$1,meta24642));
});
}
return (new enfocus.core.t24641(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__24634_SHARP_){return domina.nodes.call(null,p1__24634_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t24644 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24644 = (function (trans,func,values,multi_node_chain,meta24645){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta24645 = meta24645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24644.cljs$lang$type = true;
enfocus.core.t24644.cljs$lang$ctorStr = "enfocus.core/t24644";
enfocus.core.t24644.cljs$lang$ctorPrWriter = (function (this__8391__auto__,writer__8392__auto__,opt__8393__auto__){return cljs.core._write.call(null,writer__8392__auto__,"enfocus.core/t24644");
});
enfocus.core.t24644.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24644.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24644.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24646){var self__ = this;
var _24646__$1 = this;return self__.meta24645;
});
enfocus.core.t24644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24646,meta24645__$1){var self__ = this;
var _24646__$1 = this;return (new enfocus.core.t24644(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta24645__$1));
});
enfocus.core.__GT_t24644 = (function __GT_t24644(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta24645){return (new enfocus.core.t24644(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta24645));
});
}
return (new enfocus.core.t24644(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24647_SHARP_,p2__24648_SHARP_){domina.destroy_children_BANG_.call(null,p1__24647_SHARP_);
return domina.append_BANG_.call(null,p1__24647_SHARP_,p2__24648_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__24649){
var values = cljs.core.seq(arglist__24649);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__24650_SHARP_){return domina.set_html_BANG_.call(null,p1__24650_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__24651_SHARP_){var seq__24658 = cljs.core.seq.call(null,pairs);var chunk__24659 = null;var count__24660 = 0;var i__24661 = 0;while(true){
if((i__24661 < count__24660))
{var vec__24662 = cljs.core._nth.call(null,chunk__24659,i__24661);var name = cljs.core.nth.call(null,vec__24662,0,null);var value = cljs.core.nth.call(null,vec__24662,1,null);domina.set_attr_BANG_.call(null,p1__24651_SHARP_,name,value);
{
var G__24664 = seq__24658;
var G__24665 = chunk__24659;
var G__24666 = count__24660;
var G__24667 = (i__24661 + 1);
seq__24658 = G__24664;
chunk__24659 = G__24665;
count__24660 = G__24666;
i__24661 = G__24667;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24658);if(temp__4092__auto__)
{var seq__24658__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24658__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24658__$1);{
var G__24668 = cljs.core.chunk_rest.call(null,seq__24658__$1);
var G__24669 = c__8571__auto__;
var G__24670 = cljs.core.count.call(null,c__8571__auto__);
var G__24671 = 0;
seq__24658 = G__24668;
chunk__24659 = G__24669;
count__24660 = G__24670;
i__24661 = G__24671;
continue;
}
} else
{var vec__24663 = cljs.core.first.call(null,seq__24658__$1);var name = cljs.core.nth.call(null,vec__24663,0,null);var value = cljs.core.nth.call(null,vec__24663,1,null);domina.set_attr_BANG_.call(null,p1__24651_SHARP_,name,value);
{
var G__24672 = cljs.core.next.call(null,seq__24658__$1);
var G__24673 = null;
var G__24674 = 0;
var G__24675 = 0;
seq__24658 = G__24672;
chunk__24659 = G__24673;
count__24660 = G__24674;
i__24661 = G__24675;
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
set_attr.cljs$lang$applyTo = (function (arglist__24676){
var values = cljs.core.seq(arglist__24676);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24677_SHARP_){var seq__24682 = cljs.core.seq.call(null,values);var chunk__24683 = null;var count__24684 = 0;var i__24685 = 0;while(true){
if((i__24685 < count__24684))
{var name = cljs.core._nth.call(null,chunk__24683,i__24685);domina.remove_attr_BANG_.call(null,p1__24677_SHARP_,name);
{
var G__24686 = seq__24682;
var G__24687 = chunk__24683;
var G__24688 = count__24684;
var G__24689 = (i__24685 + 1);
seq__24682 = G__24686;
chunk__24683 = G__24687;
count__24684 = G__24688;
i__24685 = G__24689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24682);if(temp__4092__auto__)
{var seq__24682__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24682__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24682__$1);{
var G__24690 = cljs.core.chunk_rest.call(null,seq__24682__$1);
var G__24691 = c__8571__auto__;
var G__24692 = cljs.core.count.call(null,c__8571__auto__);
var G__24693 = 0;
seq__24682 = G__24690;
chunk__24683 = G__24691;
count__24684 = G__24692;
i__24685 = G__24693;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__24682__$1);domina.remove_attr_BANG_.call(null,p1__24677_SHARP_,name);
{
var G__24694 = cljs.core.next.call(null,seq__24682__$1);
var G__24695 = null;
var G__24696 = 0;
var G__24697 = 0;
seq__24682 = G__24694;
chunk__24683 = G__24695;
count__24684 = G__24696;
i__24685 = G__24697;
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
remove_attr.cljs$lang$applyTo = (function (arglist__24698){
var values = cljs.core.seq(arglist__24698);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__24701){var vec__24702 = p__24701;var n = cljs.core.nth.call(null,vec__24702,0,null);var v = cljs.core.nth.call(null,vec__24702,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__24703){
var forms = cljs.core.seq(arglist__24703);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24704_SHARP_){var seq__24709 = cljs.core.seq.call(null,values);var chunk__24710 = null;var count__24711 = 0;var i__24712 = 0;while(true){
if((i__24712 < count__24711))
{var val = cljs.core._nth.call(null,chunk__24710,i__24712);domina.add_class_BANG_.call(null,p1__24704_SHARP_,val);
{
var G__24713 = seq__24709;
var G__24714 = chunk__24710;
var G__24715 = count__24711;
var G__24716 = (i__24712 + 1);
seq__24709 = G__24713;
chunk__24710 = G__24714;
count__24711 = G__24715;
i__24712 = G__24716;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24709);if(temp__4092__auto__)
{var seq__24709__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24709__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24709__$1);{
var G__24717 = cljs.core.chunk_rest.call(null,seq__24709__$1);
var G__24718 = c__8571__auto__;
var G__24719 = cljs.core.count.call(null,c__8571__auto__);
var G__24720 = 0;
seq__24709 = G__24717;
chunk__24710 = G__24718;
count__24711 = G__24719;
i__24712 = G__24720;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__24709__$1);domina.add_class_BANG_.call(null,p1__24704_SHARP_,val);
{
var G__24721 = cljs.core.next.call(null,seq__24709__$1);
var G__24722 = null;
var G__24723 = 0;
var G__24724 = 0;
seq__24709 = G__24721;
chunk__24710 = G__24722;
count__24711 = G__24723;
i__24712 = G__24724;
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
add_class.cljs$lang$applyTo = (function (arglist__24725){
var values = cljs.core.seq(arglist__24725);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24726_SHARP_){var seq__24731 = cljs.core.seq.call(null,values);var chunk__24732 = null;var count__24733 = 0;var i__24734 = 0;while(true){
if((i__24734 < count__24733))
{var val = cljs.core._nth.call(null,chunk__24732,i__24734);domina.remove_class_BANG_.call(null,p1__24726_SHARP_,val);
{
var G__24735 = seq__24731;
var G__24736 = chunk__24732;
var G__24737 = count__24733;
var G__24738 = (i__24734 + 1);
seq__24731 = G__24735;
chunk__24732 = G__24736;
count__24733 = G__24737;
i__24734 = G__24738;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24731);if(temp__4092__auto__)
{var seq__24731__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24731__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24731__$1);{
var G__24739 = cljs.core.chunk_rest.call(null,seq__24731__$1);
var G__24740 = c__8571__auto__;
var G__24741 = cljs.core.count.call(null,c__8571__auto__);
var G__24742 = 0;
seq__24731 = G__24739;
chunk__24732 = G__24740;
count__24733 = G__24741;
i__24734 = G__24742;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__24731__$1);domina.remove_class_BANG_.call(null,p1__24726_SHARP_,val);
{
var G__24743 = cljs.core.next.call(null,seq__24731__$1);
var G__24744 = null;
var G__24745 = 0;
var G__24746 = 0;
seq__24731 = G__24743;
chunk__24732 = G__24744;
count__24733 = G__24745;
i__24734 = G__24746;
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
remove_class.cljs$lang$applyTo = (function (arglist__24747){
var values = cljs.core.seq(arglist__24747);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24748_SHARP_){return domina.set_classes_BANG_.call(null,p1__24748_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__24749){
var values = cljs.core.seq(arglist__24749);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__24754 = cljs.core.seq.call(null,forms);var chunk__24755 = null;var count__24756 = 0;var i__24757 = 0;while(true){
if((i__24757 < count__24756))
{var fun = cljs.core._nth.call(null,chunk__24755,i__24757);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__24758 = seq__24754;
var G__24759 = chunk__24755;
var G__24760 = count__24756;
var G__24761 = (i__24757 + 1);
seq__24754 = G__24758;
chunk__24755 = G__24759;
count__24756 = G__24760;
i__24757 = G__24761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24754);if(temp__4092__auto__)
{var seq__24754__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24754__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24754__$1);{
var G__24762 = cljs.core.chunk_rest.call(null,seq__24754__$1);
var G__24763 = c__8571__auto__;
var G__24764 = cljs.core.count.call(null,c__8571__auto__);
var G__24765 = 0;
seq__24754 = G__24762;
chunk__24755 = G__24763;
count__24756 = G__24764;
i__24757 = G__24765;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__24754__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__24766 = cljs.core.next.call(null,seq__24754__$1);
var G__24767 = null;
var G__24768 = 0;
var G__24769 = 0;
seq__24754 = G__24766;
chunk__24755 = G__24767;
count__24756 = G__24768;
i__24757 = G__24769;
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
do__GT_.cljs$lang$applyTo = (function (arglist__24770){
var forms = cljs.core.seq(arglist__24770);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24771_SHARP_,p2__24772_SHARP_){return domina.append_BANG_.call(null,p1__24771_SHARP_,p2__24772_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__24773){
var values = cljs.core.seq(arglist__24773);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24774_SHARP_,p2__24775_SHARP_){return domina.prepend_BANG_.call(null,p1__24774_SHARP_,p2__24775_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__24776){
var values = cljs.core.seq(arglist__24776);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24777_SHARP_,p2__24778_SHARP_){return domina.insert_before_BANG_.call(null,p1__24777_SHARP_,p2__24778_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__24779){
var values = cljs.core.seq(arglist__24779);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24780_SHARP_,p2__24781_SHARP_){return domina.insert_after_BANG_.call(null,p1__24780_SHARP_,p2__24781_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__24782){
var values = cljs.core.seq(arglist__24782);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24783_SHARP_,p2__24784_SHARP_){return domina.swap_content_BANG_.call(null,p1__24783_SHARP_,p2__24784_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__24785){
var values = cljs.core.seq(arglist__24785);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__24786_SHARP_){return domina.detach_BANG_.call(null,p1__24786_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__24787_SHARP_){var seq__24794 = cljs.core.seq.call(null,pairs);var chunk__24795 = null;var count__24796 = 0;var i__24797 = 0;while(true){
if((i__24797 < count__24796))
{var vec__24798 = cljs.core._nth.call(null,chunk__24795,i__24797);var name = cljs.core.nth.call(null,vec__24798,0,null);var value = cljs.core.nth.call(null,vec__24798,1,null);domina.set_style_BANG_.call(null,p1__24787_SHARP_,name,value);
{
var G__24800 = seq__24794;
var G__24801 = chunk__24795;
var G__24802 = count__24796;
var G__24803 = (i__24797 + 1);
seq__24794 = G__24800;
chunk__24795 = G__24801;
count__24796 = G__24802;
i__24797 = G__24803;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24794);if(temp__4092__auto__)
{var seq__24794__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24794__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24794__$1);{
var G__24804 = cljs.core.chunk_rest.call(null,seq__24794__$1);
var G__24805 = c__8571__auto__;
var G__24806 = cljs.core.count.call(null,c__8571__auto__);
var G__24807 = 0;
seq__24794 = G__24804;
chunk__24795 = G__24805;
count__24796 = G__24806;
i__24797 = G__24807;
continue;
}
} else
{var vec__24799 = cljs.core.first.call(null,seq__24794__$1);var name = cljs.core.nth.call(null,vec__24799,0,null);var value = cljs.core.nth.call(null,vec__24799,1,null);domina.set_style_BANG_.call(null,p1__24787_SHARP_,name,value);
{
var G__24808 = cljs.core.next.call(null,seq__24794__$1);
var G__24809 = null;
var G__24810 = 0;
var G__24811 = 0;
seq__24794 = G__24808;
chunk__24795 = G__24809;
count__24796 = G__24810;
i__24797 = G__24811;
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
set_style.cljs$lang$applyTo = (function (arglist__24812){
var values = cljs.core.seq(arglist__24812);
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
remove_style.cljs$lang$applyTo = (function (arglist__24813){
var values = cljs.core.seq(arglist__24813);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__24814_SHARP_){return domina.set_data_BANG_.call(null,p1__24814_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__24815){
var ttime = cljs.core.first(arglist__24815);
var funcs = cljs.core.rest(arglist__24815);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__24817_SHARP_,p2__24816_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__24816_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__24842_24850 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__24843_24851 = null;var count__24844_24852 = 0;var i__24845_24853 = 0;while(true){
if((i__24845_24853 < count__24844_24852))
{var idx_24854 = cljs.core._nth.call(null,chunk__24843_24851,i__24845_24853);var attr_24855 = pnod.attributes.item(idx_24854);if(cljs.core.truth_(attr_24855.specified))
{attr_24855.value = rep_str.call(null,attr_24855.value);
} else
{}
{
var G__24856 = seq__24842_24850;
var G__24857 = chunk__24843_24851;
var G__24858 = count__24844_24852;
var G__24859 = (i__24845_24853 + 1);
seq__24842_24850 = G__24856;
chunk__24843_24851 = G__24857;
count__24844_24852 = G__24858;
i__24845_24853 = G__24859;
continue;
}
} else
{var temp__4092__auto___24860 = cljs.core.seq.call(null,seq__24842_24850);if(temp__4092__auto___24860)
{var seq__24842_24861__$1 = temp__4092__auto___24860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24842_24861__$1))
{var c__8571__auto___24862 = cljs.core.chunk_first.call(null,seq__24842_24861__$1);{
var G__24863 = cljs.core.chunk_rest.call(null,seq__24842_24861__$1);
var G__24864 = c__8571__auto___24862;
var G__24865 = cljs.core.count.call(null,c__8571__auto___24862);
var G__24866 = 0;
seq__24842_24850 = G__24863;
chunk__24843_24851 = G__24864;
count__24844_24852 = G__24865;
i__24845_24853 = G__24866;
continue;
}
} else
{var idx_24867 = cljs.core.first.call(null,seq__24842_24861__$1);var attr_24868 = pnod.attributes.item(idx_24867);if(cljs.core.truth_(attr_24868.specified))
{attr_24868.value = rep_str.call(null,attr_24868.value);
} else
{}
{
var G__24869 = cljs.core.next.call(null,seq__24842_24861__$1);
var G__24870 = null;
var G__24871 = 0;
var G__24872 = 0;
seq__24842_24850 = G__24869;
chunk__24843_24851 = G__24870;
count__24844_24852 = G__24871;
i__24845_24853 = G__24872;
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
{var seq__24846 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__24847 = null;var count__24848 = 0;var i__24849 = 0;while(true){
if((i__24849 < count__24848))
{var cnode = cljs.core._nth.call(null,chunk__24847,i__24849);rep_node.call(null,cnode);
{
var G__24873 = seq__24846;
var G__24874 = chunk__24847;
var G__24875 = count__24848;
var G__24876 = (i__24849 + 1);
seq__24846 = G__24873;
chunk__24847 = G__24874;
count__24848 = G__24875;
i__24849 = G__24876;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24846);if(temp__4092__auto__)
{var seq__24846__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24846__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24846__$1);{
var G__24877 = cljs.core.chunk_rest.call(null,seq__24846__$1);
var G__24878 = c__8571__auto__;
var G__24879 = cljs.core.count.call(null,c__8571__auto__);
var G__24880 = 0;
seq__24846 = G__24877;
chunk__24847 = G__24878;
count__24848 = G__24879;
i__24849 = G__24880;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__24846__$1);rep_node.call(null,cnode);
{
var G__24881 = cljs.core.next.call(null,seq__24846__$1);
var G__24882 = null;
var G__24883 = 0;
var G__24884 = 0;
seq__24846 = G__24881;
chunk__24847 = G__24882;
count__24848 = G__24883;
i__24849 = G__24884;
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
{var vec__24894 = node_spec;var tag = cljs.core.nth.call(null,vec__24894,0,null);var vec__24895 = cljs.core.nthnext.call(null,vec__24894,1);var m = cljs.core.nth.call(null,vec__24895,0,null);var ms = cljs.core.nthnext.call(null,vec__24895,1);var more = vec__24895;var vec__24896 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__24896,0,null);var segments = cljs.core.nthnext.call(null,vec__24896,1);var id = cljs.core.some.call(null,((function (vec__24894,tag,vec__24895,m,ms,more,vec__24896,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__24894,tag,vec__24895,m,ms,more,vec__24896,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__24894,tag,vec__24895,m,ms,more,vec__24896,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__24894,tag,vec__24895,m,ms,more,vec__24896,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__24897_24903 = cljs.core.seq.call(null,attrs__$2);var chunk__24898_24904 = null;var count__24899_24905 = 0;var i__24900_24906 = 0;while(true){
if((i__24900_24906 < count__24899_24905))
{var vec__24901_24907 = cljs.core._nth.call(null,chunk__24898_24904,i__24900_24906);var key_24908 = cljs.core.nth.call(null,vec__24901_24907,0,null);var val_24909 = cljs.core.nth.call(null,vec__24901_24907,1,null);node.setAttribute(cljs.core.name.call(null,key_24908),val_24909);
{
var G__24910 = seq__24897_24903;
var G__24911 = chunk__24898_24904;
var G__24912 = count__24899_24905;
var G__24913 = (i__24900_24906 + 1);
seq__24897_24903 = G__24910;
chunk__24898_24904 = G__24911;
count__24899_24905 = G__24912;
i__24900_24906 = G__24913;
continue;
}
} else
{var temp__4092__auto___24914 = cljs.core.seq.call(null,seq__24897_24903);if(temp__4092__auto___24914)
{var seq__24897_24915__$1 = temp__4092__auto___24914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24897_24915__$1))
{var c__8571__auto___24916 = cljs.core.chunk_first.call(null,seq__24897_24915__$1);{
var G__24917 = cljs.core.chunk_rest.call(null,seq__24897_24915__$1);
var G__24918 = c__8571__auto___24916;
var G__24919 = cljs.core.count.call(null,c__8571__auto___24916);
var G__24920 = 0;
seq__24897_24903 = G__24917;
chunk__24898_24904 = G__24918;
count__24899_24905 = G__24919;
i__24900_24906 = G__24920;
continue;
}
} else
{var vec__24902_24921 = cljs.core.first.call(null,seq__24897_24915__$1);var key_24922 = cljs.core.nth.call(null,vec__24902_24921,0,null);var val_24923 = cljs.core.nth.call(null,vec__24902_24921,1,null);node.setAttribute(cljs.core.name.call(null,key_24922),val_24923);
{
var G__24924 = cljs.core.next.call(null,seq__24897_24915__$1);
var G__24925 = null;
var G__24926 = 0;
var G__24927 = 0;
seq__24897_24903 = G__24924;
chunk__24898_24904 = G__24925;
count__24899_24905 = G__24926;
i__24900_24906 = G__24927;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__7835__auto__ = el.checked;if(cljs.core.truth_(and__7835__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__7835__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__24928_SHARP_){return p1__24928_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__24929_SHARP_){return p1__24929_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__24931_SHARP_,p2__24930_SHARP_){var G__24934 = p2__24930_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__24934))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__24934))
{return enfocus.core.read_select_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__24934))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__24934))
{var G__24935 = p2__24930_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__24935))
{return enfocus.core.read_checked_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__24935))
{return enfocus.core.read_checked_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__24935))
{return enfocus.core.read_simple_input.call(null,p2__24930_SHARP_,p1__24931_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__24931_SHARP_;
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
{return p1__24931_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__24936_SHARP_){if((p1__24936_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__24936_SHARP_);
} else
{if((p1__24936_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__24936_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__24936_SHARP_))
{return create_sel_str.call(null,p1__24936_SHARP_);
} else
{if(typeof p1__24936_SHARP_ === 'string')
{return p1__24936_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__7847__auto__ = func;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__7835__auto__ = !((node == null));if(and__7835__auto__)
{var G__24947 = node;if(G__24947)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__24947.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__24947.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24947);
}
} else
{return and__7835__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__24948 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__24948,0,null);var trans__$1 = cljs.core.nth.call(null,vec__24948,1,null);var seq__24949 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__24950 = null;var count__24951 = 0;var i__24952 = 0;while(true){
if((i__24952 < count__24951))
{var vec__24953 = cljs.core._nth.call(null,chunk__24950,i__24952);var sel = cljs.core.nth.call(null,vec__24953,0,null);var t = cljs.core.nth.call(null,vec__24953,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__24955 = seq__24949;
var G__24956 = chunk__24950;
var G__24957 = count__24951;
var G__24958 = (i__24952 + 1);
seq__24949 = G__24955;
chunk__24950 = G__24956;
count__24951 = G__24957;
i__24952 = G__24958;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24949);if(temp__4092__auto__)
{var seq__24949__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24949__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24949__$1);{
var G__24959 = cljs.core.chunk_rest.call(null,seq__24949__$1);
var G__24960 = c__8571__auto__;
var G__24961 = cljs.core.count.call(null,c__8571__auto__);
var G__24962 = 0;
seq__24949 = G__24959;
chunk__24950 = G__24960;
count__24951 = G__24961;
i__24952 = G__24962;
continue;
}
} else
{var vec__24954 = cljs.core.first.call(null,seq__24949__$1);var sel = cljs.core.nth.call(null,vec__24954,0,null);var t = cljs.core.nth.call(null,vec__24954,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__24963 = cljs.core.next.call(null,seq__24949__$1);
var G__24964 = null;
var G__24965 = 0;
var G__24966 = 0;
seq__24949 = G__24963;
chunk__24950 = G__24964;
count__24951 = G__24965;
i__24952 = G__24966;
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
i_at.cljs$lang$applyTo = (function (arglist__24967){
var id_mask = cljs.core.first(arglist__24967);
arglist__24967 = cljs.core.next(arglist__24967);
var node = cljs.core.first(arglist__24967);
var trans = cljs.core.rest(arglist__24967);
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
at.cljs$lang$applyTo = (function (arglist__24968){
var node = cljs.core.first(arglist__24968);
var trans = cljs.core.rest(arglist__24968);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__24973 = node;if(G__24973)
{var bit__8473__auto__ = null;if(cljs.core.truth_((function (){var or__7847__auto__ = bit__8473__auto__;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return G__24973.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__24973.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24973);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24973);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__24974 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__24974,0,null);var trans__$1 = cljs.core.nth.call(null,vec__24974,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__24975){var vec__24976 = p__24975;var ky = cljs.core.nth.call(null,vec__24976,0,null);var sel = cljs.core.nth.call(null,vec__24976,1,null);var ext = cljs.core.nth.call(null,vec__24976,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__24977){
var node = cljs.core.first(arglist__24977);
var trans = cljs.core.rest(arglist__24977);
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
