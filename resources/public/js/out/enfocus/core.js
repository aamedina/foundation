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
enfocus.core.ISelector = (function (){var obj29701 = {};return obj29701;
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
enfocus.core.ITransform = (function (){var obj29703 = {};return obj29703;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__29704_SHARP_){if(typeof p1__29704_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__29704_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__29704_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__29711_29717 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__29712_29718 = null;var count__29713_29719 = 0;var i__29714_29720 = 0;while(true){
if((i__29714_29720 < count__29713_29719))
{var vec__29715_29721 = cljs.core._nth.call(null,chunk__29712_29718,i__29714_29720);var attr_29722 = cljs.core.nth.call(null,vec__29715_29721,0,null);var value_29723 = cljs.core.nth.call(null,vec__29715_29721,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_29722),value_29723);
{
var G__29724 = seq__29711_29717;
var G__29725 = chunk__29712_29718;
var G__29726 = count__29713_29719;
var G__29727 = (i__29714_29720 + 1);
seq__29711_29717 = G__29724;
chunk__29712_29718 = G__29725;
count__29713_29719 = G__29726;
i__29714_29720 = G__29727;
continue;
}
} else
{var temp__4092__auto___29728 = cljs.core.seq.call(null,seq__29711_29717);if(temp__4092__auto___29728)
{var seq__29711_29729__$1 = temp__4092__auto___29728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29711_29729__$1))
{var c__8952__auto___29730 = cljs.core.chunk_first.call(null,seq__29711_29729__$1);{
var G__29731 = cljs.core.chunk_rest.call(null,seq__29711_29729__$1);
var G__29732 = c__8952__auto___29730;
var G__29733 = cljs.core.count.call(null,c__8952__auto___29730);
var G__29734 = 0;
seq__29711_29717 = G__29731;
chunk__29712_29718 = G__29732;
count__29713_29719 = G__29733;
i__29714_29720 = G__29734;
continue;
}
} else
{var vec__29716_29735 = cljs.core.first.call(null,seq__29711_29729__$1);var attr_29736 = cljs.core.nth.call(null,vec__29716_29735,0,null);var value_29737 = cljs.core.nth.call(null,vec__29716_29735,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_29736),value_29737);
{
var G__29738 = cljs.core.next.call(null,seq__29711_29729__$1);
var G__29739 = null;
var G__29740 = 0;
var G__29741 = 0;
seq__29711_29717 = G__29738;
chunk__29712_29718 = G__29739;
count__29713_29719 = G__29740;
i__29714_29720 = G__29741;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__29746 = cljs.core.seq.call(null,values);var chunk__29747 = null;var count__29748 = 0;var i__29749 = 0;while(true){
if((i__29749 < count__29748))
{var attr = cljs.core._nth.call(null,chunk__29747,i__29749);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__29750 = seq__29746;
var G__29751 = chunk__29747;
var G__29752 = count__29748;
var G__29753 = (i__29749 + 1);
seq__29746 = G__29750;
chunk__29747 = G__29751;
count__29748 = G__29752;
i__29749 = G__29753;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29746);if(temp__4092__auto__)
{var seq__29746__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29746__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29746__$1);{
var G__29754 = cljs.core.chunk_rest.call(null,seq__29746__$1);
var G__29755 = c__8952__auto__;
var G__29756 = cljs.core.count.call(null,c__8952__auto__);
var G__29757 = 0;
seq__29746 = G__29754;
chunk__29747 = G__29755;
count__29748 = G__29756;
i__29749 = G__29757;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__29746__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__29758 = cljs.core.next.call(null,seq__29746__$1);
var G__29759 = null;
var G__29760 = 0;
var G__29761 = 0;
seq__29746 = G__29758;
chunk__29747 = G__29759;
count__29748 = G__29760;
i__29749 = G__29761;
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
{var seq__29768_29774 = cljs.core.seq.call(null,ats);var chunk__29769_29775 = null;var count__29770_29776 = 0;var i__29771_29777 = 0;while(true){
if((i__29771_29777 < count__29770_29776))
{var vec__29772_29778 = cljs.core._nth.call(null,chunk__29769_29775,i__29771_29777);var k_29779 = cljs.core.nth.call(null,vec__29772_29778,0,null);var v_29780 = cljs.core.nth.call(null,vec__29772_29778,1,null);add_map_attrs.call(null,elem,k_29779,v_29780);
{
var G__29781 = seq__29768_29774;
var G__29782 = chunk__29769_29775;
var G__29783 = count__29770_29776;
var G__29784 = (i__29771_29777 + 1);
seq__29768_29774 = G__29781;
chunk__29769_29775 = G__29782;
count__29770_29776 = G__29783;
i__29771_29777 = G__29784;
continue;
}
} else
{var temp__4092__auto___29785 = cljs.core.seq.call(null,seq__29768_29774);if(temp__4092__auto___29785)
{var seq__29768_29786__$1 = temp__4092__auto___29785;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29768_29786__$1))
{var c__8952__auto___29787 = cljs.core.chunk_first.call(null,seq__29768_29786__$1);{
var G__29788 = cljs.core.chunk_rest.call(null,seq__29768_29786__$1);
var G__29789 = c__8952__auto___29787;
var G__29790 = cljs.core.count.call(null,c__8952__auto___29787);
var G__29791 = 0;
seq__29768_29774 = G__29788;
chunk__29769_29775 = G__29789;
count__29770_29776 = G__29790;
i__29771_29777 = G__29791;
continue;
}
} else
{var vec__29773_29792 = cljs.core.first.call(null,seq__29768_29786__$1);var k_29793 = cljs.core.nth.call(null,vec__29773_29792,0,null);var v_29794 = cljs.core.nth.call(null,vec__29773_29792,1,null);add_map_attrs.call(null,elem,k_29793,v_29794);
{
var G__29795 = cljs.core.next.call(null,seq__29768_29786__$1);
var G__29796 = null;
var G__29797 = 0;
var G__29798 = 0;
seq__29768_29774 = G__29795;
chunk__29769_29775 = G__29796;
count__29770_29776 = G__29797;
i__29771_29777 = G__29798;
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
var seq__29803_29807 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__29804_29808 = null;var count__29805_29809 = 0;var i__29806_29810 = 0;while(true){
if((i__29806_29810 < count__29805_29809))
{var node_29811 = cljs.core._nth.call(null,chunk__29804_29808,i__29806_29810);goog.dom.appendChild(div,node_29811);
{
var G__29812 = seq__29803_29807;
var G__29813 = chunk__29804_29808;
var G__29814 = count__29805_29809;
var G__29815 = (i__29806_29810 + 1);
seq__29803_29807 = G__29812;
chunk__29804_29808 = G__29813;
count__29805_29809 = G__29814;
i__29806_29810 = G__29815;
continue;
}
} else
{var temp__4092__auto___29816 = cljs.core.seq.call(null,seq__29803_29807);if(temp__4092__auto___29816)
{var seq__29803_29817__$1 = temp__4092__auto___29816;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29803_29817__$1))
{var c__8952__auto___29818 = cljs.core.chunk_first.call(null,seq__29803_29817__$1);{
var G__29819 = cljs.core.chunk_rest.call(null,seq__29803_29817__$1);
var G__29820 = c__8952__auto___29818;
var G__29821 = cljs.core.count.call(null,c__8952__auto___29818);
var G__29822 = 0;
seq__29803_29807 = G__29819;
chunk__29804_29808 = G__29820;
count__29805_29809 = G__29821;
i__29806_29810 = G__29822;
continue;
}
} else
{var node_29823 = cljs.core.first.call(null,seq__29803_29817__$1);goog.dom.appendChild(div,node_29823);
{
var G__29824 = cljs.core.next.call(null,seq__29803_29817__$1);
var G__29825 = null;
var G__29826 = 0;
var G__29827 = 0;
seq__29803_29807 = G__29824;
chunk__29804_29808 = G__29825;
count__29805_29809 = G__29826;
i__29806_29810 = G__29827;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29828_SHARP_){var id = p1__29828_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__29828_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__29830 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__29830,0,null);var txt = cljs.core.nth.call(null,vec__29830,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__29835_29839 = cljs.core.seq.call(null,dfa);var chunk__29836_29840 = null;var count__29837_29841 = 0;var i__29838_29842 = 0;while(true){
if((i__29838_29842 < count__29837_29841))
{var df_29843 = cljs.core._nth.call(null,chunk__29836_29840,i__29838_29842);goog.dom.append(frag,df_29843);
{
var G__29844 = seq__29835_29839;
var G__29845 = chunk__29836_29840;
var G__29846 = count__29837_29841;
var G__29847 = (i__29838_29842 + 1);
seq__29835_29839 = G__29844;
chunk__29836_29840 = G__29845;
count__29837_29841 = G__29846;
i__29838_29842 = G__29847;
continue;
}
} else
{var temp__4092__auto___29848 = cljs.core.seq.call(null,seq__29835_29839);if(temp__4092__auto___29848)
{var seq__29835_29849__$1 = temp__4092__auto___29848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29835_29849__$1))
{var c__8952__auto___29850 = cljs.core.chunk_first.call(null,seq__29835_29849__$1);{
var G__29851 = cljs.core.chunk_rest.call(null,seq__29835_29849__$1);
var G__29852 = c__8952__auto___29850;
var G__29853 = cljs.core.count.call(null,c__8952__auto___29850);
var G__29854 = 0;
seq__29835_29839 = G__29851;
chunk__29836_29840 = G__29852;
count__29837_29841 = G__29853;
i__29838_29842 = G__29854;
continue;
}
} else
{var df_29855 = cljs.core.first.call(null,seq__29835_29849__$1);goog.dom.append(frag,df_29855);
{
var G__29856 = cljs.core.next.call(null,seq__29835_29849__$1);
var G__29857 = null;
var G__29858 = 0;
var G__29859 = 0;
seq__29835_29839 = G__29856;
chunk__29836_29840 = G__29857;
count__29837_29841 = G__29858;
i__29838_29842 = G__29859;
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
{var vec__29862 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__29862,0,null);var tdom = cljs.core.nth.call(null,vec__29862,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29862,sym,tdom,dom,tsnip){
return (function (p1__29860_SHARP_){return p1__29860_SHARP_.outerHTML;
});})(vec__29862,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t29866 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29866 = (function (trans,func,extr_multi_node,meta29867){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta29867 = meta29867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29866.cljs$lang$type = true;
enfocus.core.t29866.cljs$lang$ctorStr = "enfocus.core/t29866";
enfocus.core.t29866.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t29866");
});
enfocus.core.t29866.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29866.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29866.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29868){var self__ = this;
var _29868__$1 = this;return self__.meta29867;
});
enfocus.core.t29866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29868,meta29867__$1){var self__ = this;
var _29868__$1 = this;return (new enfocus.core.t29866(self__.trans,self__.func,self__.extr_multi_node,meta29867__$1));
});
enfocus.core.__GT_t29866 = (function __GT_t29866(trans__$1,func__$1,extr_multi_node__$1,meta29867){return (new enfocus.core.t29866(trans__$1,func__$1,extr_multi_node__$1,meta29867));
});
}
return (new enfocus.core.t29866(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t29876 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29876 = (function (trans,func,multi_node_chain,meta29877){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta29877 = meta29877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29876.cljs$lang$type = true;
enfocus.core.t29876.cljs$lang$ctorStr = "enfocus.core/t29876";
enfocus.core.t29876.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t29876");
});
enfocus.core.t29876.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29876.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29876.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29878){var self__ = this;
var _29878__$1 = this;return self__.meta29877;
});
enfocus.core.t29876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29878,meta29877__$1){var self__ = this;
var _29878__$1 = this;return (new enfocus.core.t29876(self__.trans,self__.func,self__.multi_node_chain,meta29877__$1));
});
enfocus.core.__GT_t29876 = (function __GT_t29876(trans__$1,func__$1,multi_node_chain__$1,meta29877){return (new enfocus.core.t29876(trans__$1,func__$1,multi_node_chain__$1,meta29877));
});
}
return (new enfocus.core.t29876(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__29869_SHARP_){return domina.nodes.call(null,p1__29869_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t29879 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t29879 = (function (trans,func,values,multi_node_chain,meta29880){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta29880 = meta29880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t29879.cljs$lang$type = true;
enfocus.core.t29879.cljs$lang$ctorStr = "enfocus.core/t29879";
enfocus.core.t29879.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t29879");
});
enfocus.core.t29879.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t29879.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t29879.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t29879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29881){var self__ = this;
var _29881__$1 = this;return self__.meta29880;
});
enfocus.core.t29879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29881,meta29880__$1){var self__ = this;
var _29881__$1 = this;return (new enfocus.core.t29879(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta29880__$1));
});
enfocus.core.__GT_t29879 = (function __GT_t29879(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta29880){return (new enfocus.core.t29879(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta29880));
});
}
return (new enfocus.core.t29879(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__29882_SHARP_,p2__29883_SHARP_){domina.destroy_children_BANG_.call(null,p1__29882_SHARP_);
return domina.append_BANG_.call(null,p1__29882_SHARP_,p2__29883_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__29884){
var values = cljs.core.seq(arglist__29884);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__29885_SHARP_){return domina.set_html_BANG_.call(null,p1__29885_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__29886_SHARP_){var seq__29893 = cljs.core.seq.call(null,pairs);var chunk__29894 = null;var count__29895 = 0;var i__29896 = 0;while(true){
if((i__29896 < count__29895))
{var vec__29897 = cljs.core._nth.call(null,chunk__29894,i__29896);var name = cljs.core.nth.call(null,vec__29897,0,null);var value = cljs.core.nth.call(null,vec__29897,1,null);domina.set_attr_BANG_.call(null,p1__29886_SHARP_,name,value);
{
var G__29899 = seq__29893;
var G__29900 = chunk__29894;
var G__29901 = count__29895;
var G__29902 = (i__29896 + 1);
seq__29893 = G__29899;
chunk__29894 = G__29900;
count__29895 = G__29901;
i__29896 = G__29902;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29893);if(temp__4092__auto__)
{var seq__29893__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29893__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29893__$1);{
var G__29903 = cljs.core.chunk_rest.call(null,seq__29893__$1);
var G__29904 = c__8952__auto__;
var G__29905 = cljs.core.count.call(null,c__8952__auto__);
var G__29906 = 0;
seq__29893 = G__29903;
chunk__29894 = G__29904;
count__29895 = G__29905;
i__29896 = G__29906;
continue;
}
} else
{var vec__29898 = cljs.core.first.call(null,seq__29893__$1);var name = cljs.core.nth.call(null,vec__29898,0,null);var value = cljs.core.nth.call(null,vec__29898,1,null);domina.set_attr_BANG_.call(null,p1__29886_SHARP_,name,value);
{
var G__29907 = cljs.core.next.call(null,seq__29893__$1);
var G__29908 = null;
var G__29909 = 0;
var G__29910 = 0;
seq__29893 = G__29907;
chunk__29894 = G__29908;
count__29895 = G__29909;
i__29896 = G__29910;
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
set_attr.cljs$lang$applyTo = (function (arglist__29911){
var values = cljs.core.seq(arglist__29911);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29912_SHARP_){var seq__29917 = cljs.core.seq.call(null,values);var chunk__29918 = null;var count__29919 = 0;var i__29920 = 0;while(true){
if((i__29920 < count__29919))
{var name = cljs.core._nth.call(null,chunk__29918,i__29920);domina.remove_attr_BANG_.call(null,p1__29912_SHARP_,name);
{
var G__29921 = seq__29917;
var G__29922 = chunk__29918;
var G__29923 = count__29919;
var G__29924 = (i__29920 + 1);
seq__29917 = G__29921;
chunk__29918 = G__29922;
count__29919 = G__29923;
i__29920 = G__29924;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29917);if(temp__4092__auto__)
{var seq__29917__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29917__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29917__$1);{
var G__29925 = cljs.core.chunk_rest.call(null,seq__29917__$1);
var G__29926 = c__8952__auto__;
var G__29927 = cljs.core.count.call(null,c__8952__auto__);
var G__29928 = 0;
seq__29917 = G__29925;
chunk__29918 = G__29926;
count__29919 = G__29927;
i__29920 = G__29928;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__29917__$1);domina.remove_attr_BANG_.call(null,p1__29912_SHARP_,name);
{
var G__29929 = cljs.core.next.call(null,seq__29917__$1);
var G__29930 = null;
var G__29931 = 0;
var G__29932 = 0;
seq__29917 = G__29929;
chunk__29918 = G__29930;
count__29919 = G__29931;
i__29920 = G__29932;
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
remove_attr.cljs$lang$applyTo = (function (arglist__29933){
var values = cljs.core.seq(arglist__29933);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__29936){var vec__29937 = p__29936;var n = cljs.core.nth.call(null,vec__29937,0,null);var v = cljs.core.nth.call(null,vec__29937,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__29938){
var forms = cljs.core.seq(arglist__29938);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29939_SHARP_){var seq__29944 = cljs.core.seq.call(null,values);var chunk__29945 = null;var count__29946 = 0;var i__29947 = 0;while(true){
if((i__29947 < count__29946))
{var val = cljs.core._nth.call(null,chunk__29945,i__29947);domina.add_class_BANG_.call(null,p1__29939_SHARP_,val);
{
var G__29948 = seq__29944;
var G__29949 = chunk__29945;
var G__29950 = count__29946;
var G__29951 = (i__29947 + 1);
seq__29944 = G__29948;
chunk__29945 = G__29949;
count__29946 = G__29950;
i__29947 = G__29951;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29944);if(temp__4092__auto__)
{var seq__29944__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29944__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29944__$1);{
var G__29952 = cljs.core.chunk_rest.call(null,seq__29944__$1);
var G__29953 = c__8952__auto__;
var G__29954 = cljs.core.count.call(null,c__8952__auto__);
var G__29955 = 0;
seq__29944 = G__29952;
chunk__29945 = G__29953;
count__29946 = G__29954;
i__29947 = G__29955;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__29944__$1);domina.add_class_BANG_.call(null,p1__29939_SHARP_,val);
{
var G__29956 = cljs.core.next.call(null,seq__29944__$1);
var G__29957 = null;
var G__29958 = 0;
var G__29959 = 0;
seq__29944 = G__29956;
chunk__29945 = G__29957;
count__29946 = G__29958;
i__29947 = G__29959;
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
add_class.cljs$lang$applyTo = (function (arglist__29960){
var values = cljs.core.seq(arglist__29960);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29961_SHARP_){var seq__29966 = cljs.core.seq.call(null,values);var chunk__29967 = null;var count__29968 = 0;var i__29969 = 0;while(true){
if((i__29969 < count__29968))
{var val = cljs.core._nth.call(null,chunk__29967,i__29969);domina.remove_class_BANG_.call(null,p1__29961_SHARP_,val);
{
var G__29970 = seq__29966;
var G__29971 = chunk__29967;
var G__29972 = count__29968;
var G__29973 = (i__29969 + 1);
seq__29966 = G__29970;
chunk__29967 = G__29971;
count__29968 = G__29972;
i__29969 = G__29973;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29966);if(temp__4092__auto__)
{var seq__29966__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29966__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29966__$1);{
var G__29974 = cljs.core.chunk_rest.call(null,seq__29966__$1);
var G__29975 = c__8952__auto__;
var G__29976 = cljs.core.count.call(null,c__8952__auto__);
var G__29977 = 0;
seq__29966 = G__29974;
chunk__29967 = G__29975;
count__29968 = G__29976;
i__29969 = G__29977;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__29966__$1);domina.remove_class_BANG_.call(null,p1__29961_SHARP_,val);
{
var G__29978 = cljs.core.next.call(null,seq__29966__$1);
var G__29979 = null;
var G__29980 = 0;
var G__29981 = 0;
seq__29966 = G__29978;
chunk__29967 = G__29979;
count__29968 = G__29980;
i__29969 = G__29981;
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
remove_class.cljs$lang$applyTo = (function (arglist__29982){
var values = cljs.core.seq(arglist__29982);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__29983_SHARP_){return domina.set_classes_BANG_.call(null,p1__29983_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__29984){
var values = cljs.core.seq(arglist__29984);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__29989 = cljs.core.seq.call(null,forms);var chunk__29990 = null;var count__29991 = 0;var i__29992 = 0;while(true){
if((i__29992 < count__29991))
{var fun = cljs.core._nth.call(null,chunk__29990,i__29992);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__29993 = seq__29989;
var G__29994 = chunk__29990;
var G__29995 = count__29991;
var G__29996 = (i__29992 + 1);
seq__29989 = G__29993;
chunk__29990 = G__29994;
count__29991 = G__29995;
i__29992 = G__29996;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__29989);if(temp__4092__auto__)
{var seq__29989__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29989__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__29989__$1);{
var G__29997 = cljs.core.chunk_rest.call(null,seq__29989__$1);
var G__29998 = c__8952__auto__;
var G__29999 = cljs.core.count.call(null,c__8952__auto__);
var G__30000 = 0;
seq__29989 = G__29997;
chunk__29990 = G__29998;
count__29991 = G__29999;
i__29992 = G__30000;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__29989__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__30001 = cljs.core.next.call(null,seq__29989__$1);
var G__30002 = null;
var G__30003 = 0;
var G__30004 = 0;
seq__29989 = G__30001;
chunk__29990 = G__30002;
count__29991 = G__30003;
i__29992 = G__30004;
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
do__GT_.cljs$lang$applyTo = (function (arglist__30005){
var forms = cljs.core.seq(arglist__30005);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30006_SHARP_,p2__30007_SHARP_){return domina.append_BANG_.call(null,p1__30006_SHARP_,p2__30007_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__30008){
var values = cljs.core.seq(arglist__30008);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30009_SHARP_,p2__30010_SHARP_){return domina.prepend_BANG_.call(null,p1__30009_SHARP_,p2__30010_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__30011){
var values = cljs.core.seq(arglist__30011);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30012_SHARP_,p2__30013_SHARP_){return domina.insert_before_BANG_.call(null,p1__30012_SHARP_,p2__30013_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__30014){
var values = cljs.core.seq(arglist__30014);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30015_SHARP_,p2__30016_SHARP_){return domina.insert_after_BANG_.call(null,p1__30015_SHARP_,p2__30016_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__30017){
var values = cljs.core.seq(arglist__30017);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30018_SHARP_,p2__30019_SHARP_){return domina.swap_content_BANG_.call(null,p1__30018_SHARP_,p2__30019_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__30020){
var values = cljs.core.seq(arglist__30020);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__30021_SHARP_){return domina.detach_BANG_.call(null,p1__30021_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__30022_SHARP_){var seq__30029 = cljs.core.seq.call(null,pairs);var chunk__30030 = null;var count__30031 = 0;var i__30032 = 0;while(true){
if((i__30032 < count__30031))
{var vec__30033 = cljs.core._nth.call(null,chunk__30030,i__30032);var name = cljs.core.nth.call(null,vec__30033,0,null);var value = cljs.core.nth.call(null,vec__30033,1,null);domina.set_style_BANG_.call(null,p1__30022_SHARP_,name,value);
{
var G__30035 = seq__30029;
var G__30036 = chunk__30030;
var G__30037 = count__30031;
var G__30038 = (i__30032 + 1);
seq__30029 = G__30035;
chunk__30030 = G__30036;
count__30031 = G__30037;
i__30032 = G__30038;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30029);if(temp__4092__auto__)
{var seq__30029__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30029__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__30029__$1);{
var G__30039 = cljs.core.chunk_rest.call(null,seq__30029__$1);
var G__30040 = c__8952__auto__;
var G__30041 = cljs.core.count.call(null,c__8952__auto__);
var G__30042 = 0;
seq__30029 = G__30039;
chunk__30030 = G__30040;
count__30031 = G__30041;
i__30032 = G__30042;
continue;
}
} else
{var vec__30034 = cljs.core.first.call(null,seq__30029__$1);var name = cljs.core.nth.call(null,vec__30034,0,null);var value = cljs.core.nth.call(null,vec__30034,1,null);domina.set_style_BANG_.call(null,p1__30022_SHARP_,name,value);
{
var G__30043 = cljs.core.next.call(null,seq__30029__$1);
var G__30044 = null;
var G__30045 = 0;
var G__30046 = 0;
seq__30029 = G__30043;
chunk__30030 = G__30044;
count__30031 = G__30045;
i__30032 = G__30046;
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
set_style.cljs$lang$applyTo = (function (arglist__30047){
var values = cljs.core.seq(arglist__30047);
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
remove_style.cljs$lang$applyTo = (function (arglist__30048){
var values = cljs.core.seq(arglist__30048);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__30049_SHARP_){return domina.set_data_BANG_.call(null,p1__30049_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__30050){
var ttime = cljs.core.first(arglist__30050);
var funcs = cljs.core.rest(arglist__30050);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__30052_SHARP_,p2__30051_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__30051_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__30077_30085 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__30078_30086 = null;var count__30079_30087 = 0;var i__30080_30088 = 0;while(true){
if((i__30080_30088 < count__30079_30087))
{var idx_30089 = cljs.core._nth.call(null,chunk__30078_30086,i__30080_30088);var attr_30090 = pnod.attributes.item(idx_30089);if(cljs.core.truth_(attr_30090.specified))
{attr_30090.value = rep_str.call(null,attr_30090.value);
} else
{}
{
var G__30091 = seq__30077_30085;
var G__30092 = chunk__30078_30086;
var G__30093 = count__30079_30087;
var G__30094 = (i__30080_30088 + 1);
seq__30077_30085 = G__30091;
chunk__30078_30086 = G__30092;
count__30079_30087 = G__30093;
i__30080_30088 = G__30094;
continue;
}
} else
{var temp__4092__auto___30095 = cljs.core.seq.call(null,seq__30077_30085);if(temp__4092__auto___30095)
{var seq__30077_30096__$1 = temp__4092__auto___30095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30077_30096__$1))
{var c__8952__auto___30097 = cljs.core.chunk_first.call(null,seq__30077_30096__$1);{
var G__30098 = cljs.core.chunk_rest.call(null,seq__30077_30096__$1);
var G__30099 = c__8952__auto___30097;
var G__30100 = cljs.core.count.call(null,c__8952__auto___30097);
var G__30101 = 0;
seq__30077_30085 = G__30098;
chunk__30078_30086 = G__30099;
count__30079_30087 = G__30100;
i__30080_30088 = G__30101;
continue;
}
} else
{var idx_30102 = cljs.core.first.call(null,seq__30077_30096__$1);var attr_30103 = pnod.attributes.item(idx_30102);if(cljs.core.truth_(attr_30103.specified))
{attr_30103.value = rep_str.call(null,attr_30103.value);
} else
{}
{
var G__30104 = cljs.core.next.call(null,seq__30077_30096__$1);
var G__30105 = null;
var G__30106 = 0;
var G__30107 = 0;
seq__30077_30085 = G__30104;
chunk__30078_30086 = G__30105;
count__30079_30087 = G__30106;
i__30080_30088 = G__30107;
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
{var seq__30081 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__30082 = null;var count__30083 = 0;var i__30084 = 0;while(true){
if((i__30084 < count__30083))
{var cnode = cljs.core._nth.call(null,chunk__30082,i__30084);rep_node.call(null,cnode);
{
var G__30108 = seq__30081;
var G__30109 = chunk__30082;
var G__30110 = count__30083;
var G__30111 = (i__30084 + 1);
seq__30081 = G__30108;
chunk__30082 = G__30109;
count__30083 = G__30110;
i__30084 = G__30111;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30081);if(temp__4092__auto__)
{var seq__30081__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30081__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__30081__$1);{
var G__30112 = cljs.core.chunk_rest.call(null,seq__30081__$1);
var G__30113 = c__8952__auto__;
var G__30114 = cljs.core.count.call(null,c__8952__auto__);
var G__30115 = 0;
seq__30081 = G__30112;
chunk__30082 = G__30113;
count__30083 = G__30114;
i__30084 = G__30115;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__30081__$1);rep_node.call(null,cnode);
{
var G__30116 = cljs.core.next.call(null,seq__30081__$1);
var G__30117 = null;
var G__30118 = 0;
var G__30119 = 0;
seq__30081 = G__30116;
chunk__30082 = G__30117;
count__30083 = G__30118;
i__30084 = G__30119;
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
{var vec__30129 = node_spec;var tag = cljs.core.nth.call(null,vec__30129,0,null);var vec__30130 = cljs.core.nthnext.call(null,vec__30129,1);var m = cljs.core.nth.call(null,vec__30130,0,null);var ms = cljs.core.nthnext.call(null,vec__30130,1);var more = vec__30130;var vec__30131 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__30131,0,null);var segments = cljs.core.nthnext.call(null,vec__30131,1);var id = cljs.core.some.call(null,((function (vec__30129,tag,vec__30130,m,ms,more,vec__30131,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__30129,tag,vec__30130,m,ms,more,vec__30131,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__30129,tag,vec__30130,m,ms,more,vec__30131,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__30129,tag,vec__30130,m,ms,more,vec__30131,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__30132_30138 = cljs.core.seq.call(null,attrs__$2);var chunk__30133_30139 = null;var count__30134_30140 = 0;var i__30135_30141 = 0;while(true){
if((i__30135_30141 < count__30134_30140))
{var vec__30136_30142 = cljs.core._nth.call(null,chunk__30133_30139,i__30135_30141);var key_30143 = cljs.core.nth.call(null,vec__30136_30142,0,null);var val_30144 = cljs.core.nth.call(null,vec__30136_30142,1,null);node.setAttribute(cljs.core.name.call(null,key_30143),val_30144);
{
var G__30145 = seq__30132_30138;
var G__30146 = chunk__30133_30139;
var G__30147 = count__30134_30140;
var G__30148 = (i__30135_30141 + 1);
seq__30132_30138 = G__30145;
chunk__30133_30139 = G__30146;
count__30134_30140 = G__30147;
i__30135_30141 = G__30148;
continue;
}
} else
{var temp__4092__auto___30149 = cljs.core.seq.call(null,seq__30132_30138);if(temp__4092__auto___30149)
{var seq__30132_30150__$1 = temp__4092__auto___30149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30132_30150__$1))
{var c__8952__auto___30151 = cljs.core.chunk_first.call(null,seq__30132_30150__$1);{
var G__30152 = cljs.core.chunk_rest.call(null,seq__30132_30150__$1);
var G__30153 = c__8952__auto___30151;
var G__30154 = cljs.core.count.call(null,c__8952__auto___30151);
var G__30155 = 0;
seq__30132_30138 = G__30152;
chunk__30133_30139 = G__30153;
count__30134_30140 = G__30154;
i__30135_30141 = G__30155;
continue;
}
} else
{var vec__30137_30156 = cljs.core.first.call(null,seq__30132_30150__$1);var key_30157 = cljs.core.nth.call(null,vec__30137_30156,0,null);var val_30158 = cljs.core.nth.call(null,vec__30137_30156,1,null);node.setAttribute(cljs.core.name.call(null,key_30157),val_30158);
{
var G__30159 = cljs.core.next.call(null,seq__30132_30150__$1);
var G__30160 = null;
var G__30161 = 0;
var G__30162 = 0;
seq__30132_30138 = G__30159;
chunk__30133_30139 = G__30160;
count__30134_30140 = G__30161;
i__30135_30141 = G__30162;
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
return (function (p1__30163_SHARP_){return p1__30163_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__30164_SHARP_){return p1__30164_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__30166_SHARP_,p2__30165_SHARP_){var G__30169 = p2__30165_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__30169))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__30169))
{return enfocus.core.read_select_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__30169))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__30169))
{var G__30170 = p2__30165_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__30170))
{return enfocus.core.read_checked_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__30170))
{return enfocus.core.read_checked_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__30170))
{return enfocus.core.read_simple_input.call(null,p2__30165_SHARP_,p1__30166_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__30166_SHARP_;
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
{return p1__30166_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__30171_SHARP_){if((p1__30171_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__30171_SHARP_);
} else
{if((p1__30171_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__30171_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__30171_SHARP_))
{return create_sel_str.call(null,p1__30171_SHARP_);
} else
{if(typeof p1__30171_SHARP_ === 'string')
{return p1__30171_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__30182 = node;if(G__30182)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__30182.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__30182.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30182);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30182);
}
} else
{return and__8211__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__30183 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__30183,0,null);var trans__$1 = cljs.core.nth.call(null,vec__30183,1,null);var seq__30184 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__30185 = null;var count__30186 = 0;var i__30187 = 0;while(true){
if((i__30187 < count__30186))
{var vec__30188 = cljs.core._nth.call(null,chunk__30185,i__30187);var sel = cljs.core.nth.call(null,vec__30188,0,null);var t = cljs.core.nth.call(null,vec__30188,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__30190 = seq__30184;
var G__30191 = chunk__30185;
var G__30192 = count__30186;
var G__30193 = (i__30187 + 1);
seq__30184 = G__30190;
chunk__30185 = G__30191;
count__30186 = G__30192;
i__30187 = G__30193;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30184);if(temp__4092__auto__)
{var seq__30184__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30184__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__30184__$1);{
var G__30194 = cljs.core.chunk_rest.call(null,seq__30184__$1);
var G__30195 = c__8952__auto__;
var G__30196 = cljs.core.count.call(null,c__8952__auto__);
var G__30197 = 0;
seq__30184 = G__30194;
chunk__30185 = G__30195;
count__30186 = G__30196;
i__30187 = G__30197;
continue;
}
} else
{var vec__30189 = cljs.core.first.call(null,seq__30184__$1);var sel = cljs.core.nth.call(null,vec__30189,0,null);var t = cljs.core.nth.call(null,vec__30189,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__30198 = cljs.core.next.call(null,seq__30184__$1);
var G__30199 = null;
var G__30200 = 0;
var G__30201 = 0;
seq__30184 = G__30198;
chunk__30185 = G__30199;
count__30186 = G__30200;
i__30187 = G__30201;
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
i_at.cljs$lang$applyTo = (function (arglist__30202){
var id_mask = cljs.core.first(arglist__30202);
arglist__30202 = cljs.core.next(arglist__30202);
var node = cljs.core.first(arglist__30202);
var trans = cljs.core.rest(arglist__30202);
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
at.cljs$lang$applyTo = (function (arglist__30203){
var node = cljs.core.first(arglist__30203);
var trans = cljs.core.rest(arglist__30203);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__30208 = node;if(G__30208)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__30208.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__30208.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30208);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30208);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__30209 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__30209,0,null);var trans__$1 = cljs.core.nth.call(null,vec__30209,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__30210){var vec__30211 = p__30210;var ky = cljs.core.nth.call(null,vec__30211,0,null);var sel = cljs.core.nth.call(null,vec__30211,1,null);var ext = cljs.core.nth.call(null,vec__30211,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__30212){
var node = cljs.core.first(arglist__30212);
var trans = cljs.core.rest(arglist__30212);
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