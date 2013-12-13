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
enfocus.core.ISelector = (function (){var obj39593 = {};return obj39593;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13776__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (enfocus.core.select[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (enfocus.core.select["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (enfocus.core.select[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (enfocus.core.select["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13776__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (enfocus.core.select[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (enfocus.core.select["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
enfocus.core.ITransform = (function (){var obj39595 = {};return obj39595;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13776__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13776__auto__ = this$;if(and__13776__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13776__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14391__auto__ = (((this$ == null))?null:this$);return (function (){var or__13788__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13776__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13776__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13776__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__39596_SHARP_){if(typeof p1__39596_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__39596_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__39596_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__39603_39609 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__39604_39610 = null;var count__39605_39611 = 0;var i__39606_39612 = 0;while(true){
if((i__39606_39612 < count__39605_39611))
{var vec__39607_39613 = cljs.core._nth.call(null,chunk__39604_39610,i__39606_39612);var attr_39614 = cljs.core.nth.call(null,vec__39607_39613,0,null);var value_39615 = cljs.core.nth.call(null,vec__39607_39613,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_39614),value_39615);
{
var G__39616 = seq__39603_39609;
var G__39617 = chunk__39604_39610;
var G__39618 = count__39605_39611;
var G__39619 = (i__39606_39612 + 1);
seq__39603_39609 = G__39616;
chunk__39604_39610 = G__39617;
count__39605_39611 = G__39618;
i__39606_39612 = G__39619;
continue;
}
} else
{var temp__4092__auto___39620 = cljs.core.seq.call(null,seq__39603_39609);if(temp__4092__auto___39620)
{var seq__39603_39621__$1 = temp__4092__auto___39620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39603_39621__$1))
{var c__14512__auto___39622 = cljs.core.chunk_first.call(null,seq__39603_39621__$1);{
var G__39623 = cljs.core.chunk_rest.call(null,seq__39603_39621__$1);
var G__39624 = c__14512__auto___39622;
var G__39625 = cljs.core.count.call(null,c__14512__auto___39622);
var G__39626 = 0;
seq__39603_39609 = G__39623;
chunk__39604_39610 = G__39624;
count__39605_39611 = G__39625;
i__39606_39612 = G__39626;
continue;
}
} else
{var vec__39608_39627 = cljs.core.first.call(null,seq__39603_39621__$1);var attr_39628 = cljs.core.nth.call(null,vec__39608_39627,0,null);var value_39629 = cljs.core.nth.call(null,vec__39608_39627,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_39628),value_39629);
{
var G__39630 = cljs.core.next.call(null,seq__39603_39621__$1);
var G__39631 = null;
var G__39632 = 0;
var G__39633 = 0;
seq__39603_39609 = G__39630;
chunk__39604_39610 = G__39631;
count__39605_39611 = G__39632;
i__39606_39612 = G__39633;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__39638 = cljs.core.seq.call(null,values);var chunk__39639 = null;var count__39640 = 0;var i__39641 = 0;while(true){
if((i__39641 < count__39640))
{var attr = cljs.core._nth.call(null,chunk__39639,i__39641);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__39642 = seq__39638;
var G__39643 = chunk__39639;
var G__39644 = count__39640;
var G__39645 = (i__39641 + 1);
seq__39638 = G__39642;
chunk__39639 = G__39643;
count__39640 = G__39644;
i__39641 = G__39645;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39638);if(temp__4092__auto__)
{var seq__39638__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39638__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39638__$1);{
var G__39646 = cljs.core.chunk_rest.call(null,seq__39638__$1);
var G__39647 = c__14512__auto__;
var G__39648 = cljs.core.count.call(null,c__14512__auto__);
var G__39649 = 0;
seq__39638 = G__39646;
chunk__39639 = G__39647;
count__39640 = G__39648;
i__39641 = G__39649;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__39638__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__39650 = cljs.core.next.call(null,seq__39638__$1);
var G__39651 = null;
var G__39652 = 0;
var G__39653 = 0;
seq__39638 = G__39650;
chunk__39639 = G__39651;
count__39640 = G__39652;
i__39641 = G__39653;
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
{var seq__39660_39666 = cljs.core.seq.call(null,ats);var chunk__39661_39667 = null;var count__39662_39668 = 0;var i__39663_39669 = 0;while(true){
if((i__39663_39669 < count__39662_39668))
{var vec__39664_39670 = cljs.core._nth.call(null,chunk__39661_39667,i__39663_39669);var k_39671 = cljs.core.nth.call(null,vec__39664_39670,0,null);var v_39672 = cljs.core.nth.call(null,vec__39664_39670,1,null);add_map_attrs.call(null,elem,k_39671,v_39672);
{
var G__39673 = seq__39660_39666;
var G__39674 = chunk__39661_39667;
var G__39675 = count__39662_39668;
var G__39676 = (i__39663_39669 + 1);
seq__39660_39666 = G__39673;
chunk__39661_39667 = G__39674;
count__39662_39668 = G__39675;
i__39663_39669 = G__39676;
continue;
}
} else
{var temp__4092__auto___39677 = cljs.core.seq.call(null,seq__39660_39666);if(temp__4092__auto___39677)
{var seq__39660_39678__$1 = temp__4092__auto___39677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39660_39678__$1))
{var c__14512__auto___39679 = cljs.core.chunk_first.call(null,seq__39660_39678__$1);{
var G__39680 = cljs.core.chunk_rest.call(null,seq__39660_39678__$1);
var G__39681 = c__14512__auto___39679;
var G__39682 = cljs.core.count.call(null,c__14512__auto___39679);
var G__39683 = 0;
seq__39660_39666 = G__39680;
chunk__39661_39667 = G__39681;
count__39662_39668 = G__39682;
i__39663_39669 = G__39683;
continue;
}
} else
{var vec__39665_39684 = cljs.core.first.call(null,seq__39660_39678__$1);var k_39685 = cljs.core.nth.call(null,vec__39665_39684,0,null);var v_39686 = cljs.core.nth.call(null,vec__39665_39684,1,null);add_map_attrs.call(null,elem,k_39685,v_39686);
{
var G__39687 = cljs.core.next.call(null,seq__39660_39678__$1);
var G__39688 = null;
var G__39689 = 0;
var G__39690 = 0;
seq__39660_39666 = G__39687;
chunk__39661_39667 = G__39688;
count__39662_39668 = G__39689;
i__39663_39669 = G__39690;
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
var seq__39695_39699 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__39696_39700 = null;var count__39697_39701 = 0;var i__39698_39702 = 0;while(true){
if((i__39698_39702 < count__39697_39701))
{var node_39703 = cljs.core._nth.call(null,chunk__39696_39700,i__39698_39702);goog.dom.appendChild(div,node_39703);
{
var G__39704 = seq__39695_39699;
var G__39705 = chunk__39696_39700;
var G__39706 = count__39697_39701;
var G__39707 = (i__39698_39702 + 1);
seq__39695_39699 = G__39704;
chunk__39696_39700 = G__39705;
count__39697_39701 = G__39706;
i__39698_39702 = G__39707;
continue;
}
} else
{var temp__4092__auto___39708 = cljs.core.seq.call(null,seq__39695_39699);if(temp__4092__auto___39708)
{var seq__39695_39709__$1 = temp__4092__auto___39708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39695_39709__$1))
{var c__14512__auto___39710 = cljs.core.chunk_first.call(null,seq__39695_39709__$1);{
var G__39711 = cljs.core.chunk_rest.call(null,seq__39695_39709__$1);
var G__39712 = c__14512__auto___39710;
var G__39713 = cljs.core.count.call(null,c__14512__auto___39710);
var G__39714 = 0;
seq__39695_39699 = G__39711;
chunk__39696_39700 = G__39712;
count__39697_39701 = G__39713;
i__39698_39702 = G__39714;
continue;
}
} else
{var node_39715 = cljs.core.first.call(null,seq__39695_39709__$1);goog.dom.appendChild(div,node_39715);
{
var G__39716 = cljs.core.next.call(null,seq__39695_39709__$1);
var G__39717 = null;
var G__39718 = 0;
var G__39719 = 0;
seq__39695_39699 = G__39716;
chunk__39696_39700 = G__39717;
count__39697_39701 = G__39718;
i__39698_39702 = G__39719;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__39720_SHARP_){var id = p1__39720_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__39720_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__39722 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__39722,0,null);var txt = cljs.core.nth.call(null,vec__39722,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__39727_39731 = cljs.core.seq.call(null,dfa);var chunk__39728_39732 = null;var count__39729_39733 = 0;var i__39730_39734 = 0;while(true){
if((i__39730_39734 < count__39729_39733))
{var df_39735 = cljs.core._nth.call(null,chunk__39728_39732,i__39730_39734);goog.dom.append(frag,df_39735);
{
var G__39736 = seq__39727_39731;
var G__39737 = chunk__39728_39732;
var G__39738 = count__39729_39733;
var G__39739 = (i__39730_39734 + 1);
seq__39727_39731 = G__39736;
chunk__39728_39732 = G__39737;
count__39729_39733 = G__39738;
i__39730_39734 = G__39739;
continue;
}
} else
{var temp__4092__auto___39740 = cljs.core.seq.call(null,seq__39727_39731);if(temp__4092__auto___39740)
{var seq__39727_39741__$1 = temp__4092__auto___39740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39727_39741__$1))
{var c__14512__auto___39742 = cljs.core.chunk_first.call(null,seq__39727_39741__$1);{
var G__39743 = cljs.core.chunk_rest.call(null,seq__39727_39741__$1);
var G__39744 = c__14512__auto___39742;
var G__39745 = cljs.core.count.call(null,c__14512__auto___39742);
var G__39746 = 0;
seq__39727_39731 = G__39743;
chunk__39728_39732 = G__39744;
count__39729_39733 = G__39745;
i__39730_39734 = G__39746;
continue;
}
} else
{var df_39747 = cljs.core.first.call(null,seq__39727_39741__$1);goog.dom.append(frag,df_39747);
{
var G__39748 = cljs.core.next.call(null,seq__39727_39741__$1);
var G__39749 = null;
var G__39750 = 0;
var G__39751 = 0;
seq__39727_39731 = G__39748;
chunk__39728_39732 = G__39749;
count__39729_39733 = G__39750;
i__39730_39734 = G__39751;
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
{var vec__39754 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__39754,0,null);var tdom = cljs.core.nth.call(null,vec__39754,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__39754,sym,tdom,dom,tsnip){
return (function (p1__39752_SHARP_){return p1__39752_SHARP_.outerHTML;
});})(vec__39754,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t39758 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t39758 = (function (trans,func,extr_multi_node,meta39759){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta39759 = meta39759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t39758.cljs$lang$type = true;
enfocus.core.t39758.cljs$lang$ctorStr = "enfocus.core/t39758";
enfocus.core.t39758.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"enfocus.core/t39758");
});
enfocus.core.t39758.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t39758.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t39758.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t39758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39760){var self__ = this;
var _39760__$1 = this;return self__.meta39759;
});
enfocus.core.t39758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39760,meta39759__$1){var self__ = this;
var _39760__$1 = this;return (new enfocus.core.t39758(self__.trans,self__.func,self__.extr_multi_node,meta39759__$1));
});
enfocus.core.__GT_t39758 = (function __GT_t39758(trans__$1,func__$1,extr_multi_node__$1,meta39759){return (new enfocus.core.t39758(trans__$1,func__$1,extr_multi_node__$1,meta39759));
});
}
return (new enfocus.core.t39758(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t39768 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t39768 = (function (trans,func,multi_node_chain,meta39769){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta39769 = meta39769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t39768.cljs$lang$type = true;
enfocus.core.t39768.cljs$lang$ctorStr = "enfocus.core/t39768";
enfocus.core.t39768.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"enfocus.core/t39768");
});
enfocus.core.t39768.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t39768.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t39768.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t39768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39770){var self__ = this;
var _39770__$1 = this;return self__.meta39769;
});
enfocus.core.t39768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39770,meta39769__$1){var self__ = this;
var _39770__$1 = this;return (new enfocus.core.t39768(self__.trans,self__.func,self__.multi_node_chain,meta39769__$1));
});
enfocus.core.__GT_t39768 = (function __GT_t39768(trans__$1,func__$1,multi_node_chain__$1,meta39769){return (new enfocus.core.t39768(trans__$1,func__$1,multi_node_chain__$1,meta39769));
});
}
return (new enfocus.core.t39768(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__39761_SHARP_){return domina.nodes.call(null,p1__39761_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t39771 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t39771 = (function (trans,func,values,multi_node_chain,meta39772){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta39772 = meta39772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t39771.cljs$lang$type = true;
enfocus.core.t39771.cljs$lang$ctorStr = "enfocus.core/t39771";
enfocus.core.t39771.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"enfocus.core/t39771");
});
enfocus.core.t39771.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t39771.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t39771.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t39771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39773){var self__ = this;
var _39773__$1 = this;return self__.meta39772;
});
enfocus.core.t39771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39773,meta39772__$1){var self__ = this;
var _39773__$1 = this;return (new enfocus.core.t39771(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta39772__$1));
});
enfocus.core.__GT_t39771 = (function __GT_t39771(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta39772){return (new enfocus.core.t39771(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta39772));
});
}
return (new enfocus.core.t39771(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39774_SHARP_,p2__39775_SHARP_){domina.destroy_children_BANG_.call(null,p1__39774_SHARP_);
return domina.append_BANG_.call(null,p1__39774_SHARP_,p2__39775_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__39776){
var values = cljs.core.seq(arglist__39776);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__39777_SHARP_){return domina.set_html_BANG_.call(null,p1__39777_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__39778_SHARP_){var seq__39785 = cljs.core.seq.call(null,pairs);var chunk__39786 = null;var count__39787 = 0;var i__39788 = 0;while(true){
if((i__39788 < count__39787))
{var vec__39789 = cljs.core._nth.call(null,chunk__39786,i__39788);var name = cljs.core.nth.call(null,vec__39789,0,null);var value = cljs.core.nth.call(null,vec__39789,1,null);domina.set_attr_BANG_.call(null,p1__39778_SHARP_,name,value);
{
var G__39791 = seq__39785;
var G__39792 = chunk__39786;
var G__39793 = count__39787;
var G__39794 = (i__39788 + 1);
seq__39785 = G__39791;
chunk__39786 = G__39792;
count__39787 = G__39793;
i__39788 = G__39794;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39785);if(temp__4092__auto__)
{var seq__39785__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39785__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39785__$1);{
var G__39795 = cljs.core.chunk_rest.call(null,seq__39785__$1);
var G__39796 = c__14512__auto__;
var G__39797 = cljs.core.count.call(null,c__14512__auto__);
var G__39798 = 0;
seq__39785 = G__39795;
chunk__39786 = G__39796;
count__39787 = G__39797;
i__39788 = G__39798;
continue;
}
} else
{var vec__39790 = cljs.core.first.call(null,seq__39785__$1);var name = cljs.core.nth.call(null,vec__39790,0,null);var value = cljs.core.nth.call(null,vec__39790,1,null);domina.set_attr_BANG_.call(null,p1__39778_SHARP_,name,value);
{
var G__39799 = cljs.core.next.call(null,seq__39785__$1);
var G__39800 = null;
var G__39801 = 0;
var G__39802 = 0;
seq__39785 = G__39799;
chunk__39786 = G__39800;
count__39787 = G__39801;
i__39788 = G__39802;
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
set_attr.cljs$lang$applyTo = (function (arglist__39803){
var values = cljs.core.seq(arglist__39803);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__39804_SHARP_){var seq__39809 = cljs.core.seq.call(null,values);var chunk__39810 = null;var count__39811 = 0;var i__39812 = 0;while(true){
if((i__39812 < count__39811))
{var name = cljs.core._nth.call(null,chunk__39810,i__39812);domina.remove_attr_BANG_.call(null,p1__39804_SHARP_,name);
{
var G__39813 = seq__39809;
var G__39814 = chunk__39810;
var G__39815 = count__39811;
var G__39816 = (i__39812 + 1);
seq__39809 = G__39813;
chunk__39810 = G__39814;
count__39811 = G__39815;
i__39812 = G__39816;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39809);if(temp__4092__auto__)
{var seq__39809__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39809__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39809__$1);{
var G__39817 = cljs.core.chunk_rest.call(null,seq__39809__$1);
var G__39818 = c__14512__auto__;
var G__39819 = cljs.core.count.call(null,c__14512__auto__);
var G__39820 = 0;
seq__39809 = G__39817;
chunk__39810 = G__39818;
count__39811 = G__39819;
i__39812 = G__39820;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__39809__$1);domina.remove_attr_BANG_.call(null,p1__39804_SHARP_,name);
{
var G__39821 = cljs.core.next.call(null,seq__39809__$1);
var G__39822 = null;
var G__39823 = 0;
var G__39824 = 0;
seq__39809 = G__39821;
chunk__39810 = G__39822;
count__39811 = G__39823;
i__39812 = G__39824;
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
remove_attr.cljs$lang$applyTo = (function (arglist__39825){
var values = cljs.core.seq(arglist__39825);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__39828){var vec__39829 = p__39828;var n = cljs.core.nth.call(null,vec__39829,0,null);var v = cljs.core.nth.call(null,vec__39829,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__39830){
var forms = cljs.core.seq(arglist__39830);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__39831_SHARP_){var seq__39836 = cljs.core.seq.call(null,values);var chunk__39837 = null;var count__39838 = 0;var i__39839 = 0;while(true){
if((i__39839 < count__39838))
{var val = cljs.core._nth.call(null,chunk__39837,i__39839);domina.add_class_BANG_.call(null,p1__39831_SHARP_,val);
{
var G__39840 = seq__39836;
var G__39841 = chunk__39837;
var G__39842 = count__39838;
var G__39843 = (i__39839 + 1);
seq__39836 = G__39840;
chunk__39837 = G__39841;
count__39838 = G__39842;
i__39839 = G__39843;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39836);if(temp__4092__auto__)
{var seq__39836__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39836__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39836__$1);{
var G__39844 = cljs.core.chunk_rest.call(null,seq__39836__$1);
var G__39845 = c__14512__auto__;
var G__39846 = cljs.core.count.call(null,c__14512__auto__);
var G__39847 = 0;
seq__39836 = G__39844;
chunk__39837 = G__39845;
count__39838 = G__39846;
i__39839 = G__39847;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__39836__$1);domina.add_class_BANG_.call(null,p1__39831_SHARP_,val);
{
var G__39848 = cljs.core.next.call(null,seq__39836__$1);
var G__39849 = null;
var G__39850 = 0;
var G__39851 = 0;
seq__39836 = G__39848;
chunk__39837 = G__39849;
count__39838 = G__39850;
i__39839 = G__39851;
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
add_class.cljs$lang$applyTo = (function (arglist__39852){
var values = cljs.core.seq(arglist__39852);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__39853_SHARP_){var seq__39858 = cljs.core.seq.call(null,values);var chunk__39859 = null;var count__39860 = 0;var i__39861 = 0;while(true){
if((i__39861 < count__39860))
{var val = cljs.core._nth.call(null,chunk__39859,i__39861);domina.remove_class_BANG_.call(null,p1__39853_SHARP_,val);
{
var G__39862 = seq__39858;
var G__39863 = chunk__39859;
var G__39864 = count__39860;
var G__39865 = (i__39861 + 1);
seq__39858 = G__39862;
chunk__39859 = G__39863;
count__39860 = G__39864;
i__39861 = G__39865;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39858);if(temp__4092__auto__)
{var seq__39858__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39858__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39858__$1);{
var G__39866 = cljs.core.chunk_rest.call(null,seq__39858__$1);
var G__39867 = c__14512__auto__;
var G__39868 = cljs.core.count.call(null,c__14512__auto__);
var G__39869 = 0;
seq__39858 = G__39866;
chunk__39859 = G__39867;
count__39860 = G__39868;
i__39861 = G__39869;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__39858__$1);domina.remove_class_BANG_.call(null,p1__39853_SHARP_,val);
{
var G__39870 = cljs.core.next.call(null,seq__39858__$1);
var G__39871 = null;
var G__39872 = 0;
var G__39873 = 0;
seq__39858 = G__39870;
chunk__39859 = G__39871;
count__39860 = G__39872;
i__39861 = G__39873;
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
remove_class.cljs$lang$applyTo = (function (arglist__39874){
var values = cljs.core.seq(arglist__39874);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__39875_SHARP_){return domina.set_classes_BANG_.call(null,p1__39875_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__39876){
var values = cljs.core.seq(arglist__39876);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__39881 = cljs.core.seq.call(null,forms);var chunk__39882 = null;var count__39883 = 0;var i__39884 = 0;while(true){
if((i__39884 < count__39883))
{var fun = cljs.core._nth.call(null,chunk__39882,i__39884);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__39885 = seq__39881;
var G__39886 = chunk__39882;
var G__39887 = count__39883;
var G__39888 = (i__39884 + 1);
seq__39881 = G__39885;
chunk__39882 = G__39886;
count__39883 = G__39887;
i__39884 = G__39888;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39881);if(temp__4092__auto__)
{var seq__39881__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39881__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39881__$1);{
var G__39889 = cljs.core.chunk_rest.call(null,seq__39881__$1);
var G__39890 = c__14512__auto__;
var G__39891 = cljs.core.count.call(null,c__14512__auto__);
var G__39892 = 0;
seq__39881 = G__39889;
chunk__39882 = G__39890;
count__39883 = G__39891;
i__39884 = G__39892;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__39881__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__39893 = cljs.core.next.call(null,seq__39881__$1);
var G__39894 = null;
var G__39895 = 0;
var G__39896 = 0;
seq__39881 = G__39893;
chunk__39882 = G__39894;
count__39883 = G__39895;
i__39884 = G__39896;
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
do__GT_.cljs$lang$applyTo = (function (arglist__39897){
var forms = cljs.core.seq(arglist__39897);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39898_SHARP_,p2__39899_SHARP_){return domina.append_BANG_.call(null,p1__39898_SHARP_,p2__39899_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__39900){
var values = cljs.core.seq(arglist__39900);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39901_SHARP_,p2__39902_SHARP_){return domina.prepend_BANG_.call(null,p1__39901_SHARP_,p2__39902_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__39903){
var values = cljs.core.seq(arglist__39903);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39904_SHARP_,p2__39905_SHARP_){return domina.insert_before_BANG_.call(null,p1__39904_SHARP_,p2__39905_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__39906){
var values = cljs.core.seq(arglist__39906);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39907_SHARP_,p2__39908_SHARP_){return domina.insert_after_BANG_.call(null,p1__39907_SHARP_,p2__39908_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__39909){
var values = cljs.core.seq(arglist__39909);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__39910_SHARP_,p2__39911_SHARP_){return domina.swap_content_BANG_.call(null,p1__39910_SHARP_,p2__39911_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__39912){
var values = cljs.core.seq(arglist__39912);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__39913_SHARP_){return domina.detach_BANG_.call(null,p1__39913_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__39914_SHARP_){var seq__39921 = cljs.core.seq.call(null,pairs);var chunk__39922 = null;var count__39923 = 0;var i__39924 = 0;while(true){
if((i__39924 < count__39923))
{var vec__39925 = cljs.core._nth.call(null,chunk__39922,i__39924);var name = cljs.core.nth.call(null,vec__39925,0,null);var value = cljs.core.nth.call(null,vec__39925,1,null);domina.set_style_BANG_.call(null,p1__39914_SHARP_,name,value);
{
var G__39927 = seq__39921;
var G__39928 = chunk__39922;
var G__39929 = count__39923;
var G__39930 = (i__39924 + 1);
seq__39921 = G__39927;
chunk__39922 = G__39928;
count__39923 = G__39929;
i__39924 = G__39930;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39921);if(temp__4092__auto__)
{var seq__39921__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39921__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39921__$1);{
var G__39931 = cljs.core.chunk_rest.call(null,seq__39921__$1);
var G__39932 = c__14512__auto__;
var G__39933 = cljs.core.count.call(null,c__14512__auto__);
var G__39934 = 0;
seq__39921 = G__39931;
chunk__39922 = G__39932;
count__39923 = G__39933;
i__39924 = G__39934;
continue;
}
} else
{var vec__39926 = cljs.core.first.call(null,seq__39921__$1);var name = cljs.core.nth.call(null,vec__39926,0,null);var value = cljs.core.nth.call(null,vec__39926,1,null);domina.set_style_BANG_.call(null,p1__39914_SHARP_,name,value);
{
var G__39935 = cljs.core.next.call(null,seq__39921__$1);
var G__39936 = null;
var G__39937 = 0;
var G__39938 = 0;
seq__39921 = G__39935;
chunk__39922 = G__39936;
count__39923 = G__39937;
i__39924 = G__39938;
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
set_style.cljs$lang$applyTo = (function (arglist__39939){
var values = cljs.core.seq(arglist__39939);
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
remove_style.cljs$lang$applyTo = (function (arglist__39940){
var values = cljs.core.seq(arglist__39940);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__39941_SHARP_){return domina.set_data_BANG_.call(null,p1__39941_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__39942){
var ttime = cljs.core.first(arglist__39942);
var funcs = cljs.core.rest(arglist__39942);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__39944_SHARP_,p2__39943_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__39943_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__39969_39977 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__39970_39978 = null;var count__39971_39979 = 0;var i__39972_39980 = 0;while(true){
if((i__39972_39980 < count__39971_39979))
{var idx_39981 = cljs.core._nth.call(null,chunk__39970_39978,i__39972_39980);var attr_39982 = pnod.attributes.item(idx_39981);if(cljs.core.truth_(attr_39982.specified))
{attr_39982.value = rep_str.call(null,attr_39982.value);
} else
{}
{
var G__39983 = seq__39969_39977;
var G__39984 = chunk__39970_39978;
var G__39985 = count__39971_39979;
var G__39986 = (i__39972_39980 + 1);
seq__39969_39977 = G__39983;
chunk__39970_39978 = G__39984;
count__39971_39979 = G__39985;
i__39972_39980 = G__39986;
continue;
}
} else
{var temp__4092__auto___39987 = cljs.core.seq.call(null,seq__39969_39977);if(temp__4092__auto___39987)
{var seq__39969_39988__$1 = temp__4092__auto___39987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39969_39988__$1))
{var c__14512__auto___39989 = cljs.core.chunk_first.call(null,seq__39969_39988__$1);{
var G__39990 = cljs.core.chunk_rest.call(null,seq__39969_39988__$1);
var G__39991 = c__14512__auto___39989;
var G__39992 = cljs.core.count.call(null,c__14512__auto___39989);
var G__39993 = 0;
seq__39969_39977 = G__39990;
chunk__39970_39978 = G__39991;
count__39971_39979 = G__39992;
i__39972_39980 = G__39993;
continue;
}
} else
{var idx_39994 = cljs.core.first.call(null,seq__39969_39988__$1);var attr_39995 = pnod.attributes.item(idx_39994);if(cljs.core.truth_(attr_39995.specified))
{attr_39995.value = rep_str.call(null,attr_39995.value);
} else
{}
{
var G__39996 = cljs.core.next.call(null,seq__39969_39988__$1);
var G__39997 = null;
var G__39998 = 0;
var G__39999 = 0;
seq__39969_39977 = G__39996;
chunk__39970_39978 = G__39997;
count__39971_39979 = G__39998;
i__39972_39980 = G__39999;
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
{var seq__39973 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__39974 = null;var count__39975 = 0;var i__39976 = 0;while(true){
if((i__39976 < count__39975))
{var cnode = cljs.core._nth.call(null,chunk__39974,i__39976);rep_node.call(null,cnode);
{
var G__40000 = seq__39973;
var G__40001 = chunk__39974;
var G__40002 = count__39975;
var G__40003 = (i__39976 + 1);
seq__39973 = G__40000;
chunk__39974 = G__40001;
count__39975 = G__40002;
i__39976 = G__40003;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__39973);if(temp__4092__auto__)
{var seq__39973__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39973__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__39973__$1);{
var G__40004 = cljs.core.chunk_rest.call(null,seq__39973__$1);
var G__40005 = c__14512__auto__;
var G__40006 = cljs.core.count.call(null,c__14512__auto__);
var G__40007 = 0;
seq__39973 = G__40004;
chunk__39974 = G__40005;
count__39975 = G__40006;
i__39976 = G__40007;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__39973__$1);rep_node.call(null,cnode);
{
var G__40008 = cljs.core.next.call(null,seq__39973__$1);
var G__40009 = null;
var G__40010 = 0;
var G__40011 = 0;
seq__39973 = G__40008;
chunk__39974 = G__40009;
count__39975 = G__40010;
i__39976 = G__40011;
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
{var vec__40021 = node_spec;var tag = cljs.core.nth.call(null,vec__40021,0,null);var vec__40022 = cljs.core.nthnext.call(null,vec__40021,1);var m = cljs.core.nth.call(null,vec__40022,0,null);var ms = cljs.core.nthnext.call(null,vec__40022,1);var more = vec__40022;var vec__40023 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__40023,0,null);var segments = cljs.core.nthnext.call(null,vec__40023,1);var id = cljs.core.some.call(null,((function (vec__40021,tag,vec__40022,m,ms,more,vec__40023,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__40021,tag,vec__40022,m,ms,more,vec__40023,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__40021,tag,vec__40022,m,ms,more,vec__40023,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__40021,tag,vec__40022,m,ms,more,vec__40023,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__40024_40030 = cljs.core.seq.call(null,attrs__$2);var chunk__40025_40031 = null;var count__40026_40032 = 0;var i__40027_40033 = 0;while(true){
if((i__40027_40033 < count__40026_40032))
{var vec__40028_40034 = cljs.core._nth.call(null,chunk__40025_40031,i__40027_40033);var key_40035 = cljs.core.nth.call(null,vec__40028_40034,0,null);var val_40036 = cljs.core.nth.call(null,vec__40028_40034,1,null);node.setAttribute(cljs.core.name.call(null,key_40035),val_40036);
{
var G__40037 = seq__40024_40030;
var G__40038 = chunk__40025_40031;
var G__40039 = count__40026_40032;
var G__40040 = (i__40027_40033 + 1);
seq__40024_40030 = G__40037;
chunk__40025_40031 = G__40038;
count__40026_40032 = G__40039;
i__40027_40033 = G__40040;
continue;
}
} else
{var temp__4092__auto___40041 = cljs.core.seq.call(null,seq__40024_40030);if(temp__4092__auto___40041)
{var seq__40024_40042__$1 = temp__4092__auto___40041;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40024_40042__$1))
{var c__14512__auto___40043 = cljs.core.chunk_first.call(null,seq__40024_40042__$1);{
var G__40044 = cljs.core.chunk_rest.call(null,seq__40024_40042__$1);
var G__40045 = c__14512__auto___40043;
var G__40046 = cljs.core.count.call(null,c__14512__auto___40043);
var G__40047 = 0;
seq__40024_40030 = G__40044;
chunk__40025_40031 = G__40045;
count__40026_40032 = G__40046;
i__40027_40033 = G__40047;
continue;
}
} else
{var vec__40029_40048 = cljs.core.first.call(null,seq__40024_40042__$1);var key_40049 = cljs.core.nth.call(null,vec__40029_40048,0,null);var val_40050 = cljs.core.nth.call(null,vec__40029_40048,1,null);node.setAttribute(cljs.core.name.call(null,key_40049),val_40050);
{
var G__40051 = cljs.core.next.call(null,seq__40024_40042__$1);
var G__40052 = null;
var G__40053 = 0;
var G__40054 = 0;
seq__40024_40030 = G__40051;
chunk__40025_40031 = G__40052;
count__40026_40032 = G__40053;
i__40027_40033 = G__40054;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13776__auto__ = el.checked;if(cljs.core.truth_(and__13776__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13776__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__40055_SHARP_){return p1__40055_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__40056_SHARP_){return p1__40056_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__40058_SHARP_,p2__40057_SHARP_){var G__40061 = p2__40057_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__40061))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__40061))
{return enfocus.core.read_select_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__40061))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__40061))
{var G__40062 = p2__40057_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__40062))
{return enfocus.core.read_checked_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__40062))
{return enfocus.core.read_checked_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__40062))
{return enfocus.core.read_simple_input.call(null,p2__40057_SHARP_,p1__40058_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__40058_SHARP_;
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
{return p1__40058_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__40063_SHARP_){if((p1__40063_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__40063_SHARP_);
} else
{if((p1__40063_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__40063_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__40063_SHARP_))
{return create_sel_str.call(null,p1__40063_SHARP_);
} else
{if(typeof p1__40063_SHARP_ === 'string')
{return p1__40063_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13788__auto__ = func;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13776__auto__ = !((node == null));if(and__13776__auto__)
{var G__40074 = node;if(G__40074)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__40074.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__40074.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__40074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__40074);
}
} else
{return and__13776__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__40075 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__40075,0,null);var trans__$1 = cljs.core.nth.call(null,vec__40075,1,null);var seq__40076 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__40077 = null;var count__40078 = 0;var i__40079 = 0;while(true){
if((i__40079 < count__40078))
{var vec__40080 = cljs.core._nth.call(null,chunk__40077,i__40079);var sel = cljs.core.nth.call(null,vec__40080,0,null);var t = cljs.core.nth.call(null,vec__40080,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__40082 = seq__40076;
var G__40083 = chunk__40077;
var G__40084 = count__40078;
var G__40085 = (i__40079 + 1);
seq__40076 = G__40082;
chunk__40077 = G__40083;
count__40078 = G__40084;
i__40079 = G__40085;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40076);if(temp__4092__auto__)
{var seq__40076__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40076__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__40076__$1);{
var G__40086 = cljs.core.chunk_rest.call(null,seq__40076__$1);
var G__40087 = c__14512__auto__;
var G__40088 = cljs.core.count.call(null,c__14512__auto__);
var G__40089 = 0;
seq__40076 = G__40086;
chunk__40077 = G__40087;
count__40078 = G__40088;
i__40079 = G__40089;
continue;
}
} else
{var vec__40081 = cljs.core.first.call(null,seq__40076__$1);var sel = cljs.core.nth.call(null,vec__40081,0,null);var t = cljs.core.nth.call(null,vec__40081,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__40090 = cljs.core.next.call(null,seq__40076__$1);
var G__40091 = null;
var G__40092 = 0;
var G__40093 = 0;
seq__40076 = G__40090;
chunk__40077 = G__40091;
count__40078 = G__40092;
i__40079 = G__40093;
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
i_at.cljs$lang$applyTo = (function (arglist__40094){
var id_mask = cljs.core.first(arglist__40094);
arglist__40094 = cljs.core.next(arglist__40094);
var node = cljs.core.first(arglist__40094);
var trans = cljs.core.rest(arglist__40094);
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
at.cljs$lang$applyTo = (function (arglist__40095){
var node = cljs.core.first(arglist__40095);
var trans = cljs.core.rest(arglist__40095);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__40100 = node;if(G__40100)
{var bit__14414__auto__ = null;if(cljs.core.truth_((function (){var or__13788__auto__ = bit__14414__auto__;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return G__40100.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__40100.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__40100);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__40100);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__40101 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__40101,0,null);var trans__$1 = cljs.core.nth.call(null,vec__40101,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__40102){var vec__40103 = p__40102;var ky = cljs.core.nth.call(null,vec__40103,0,null);var sel = cljs.core.nth.call(null,vec__40103,1,null);var ext = cljs.core.nth.call(null,vec__40103,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__40104){
var node = cljs.core.first(arglist__40104);
var trans = cljs.core.rest(arglist__40104);
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