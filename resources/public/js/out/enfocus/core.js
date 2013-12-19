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
enfocus.core.ISelector = (function (){var obj190718 = {};return obj190718;
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
enfocus.core.ITransform = (function (){var obj190720 = {};return obj190720;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__190721_SHARP_){if(typeof p1__190721_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__190721_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__190721_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__190728_190734 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__190729_190735 = null;var count__190730_190736 = 0;var i__190731_190737 = 0;while(true){
if((i__190731_190737 < count__190730_190736))
{var vec__190732_190738 = cljs.core._nth.call(null,chunk__190729_190735,i__190731_190737);var attr_190739 = cljs.core.nth.call(null,vec__190732_190738,0,null);var value_190740 = cljs.core.nth.call(null,vec__190732_190738,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_190739),value_190740);
{
var G__190741 = seq__190728_190734;
var G__190742 = chunk__190729_190735;
var G__190743 = count__190730_190736;
var G__190744 = (i__190731_190737 + 1);
seq__190728_190734 = G__190741;
chunk__190729_190735 = G__190742;
count__190730_190736 = G__190743;
i__190731_190737 = G__190744;
continue;
}
} else
{var temp__4092__auto___190745 = cljs.core.seq.call(null,seq__190728_190734);if(temp__4092__auto___190745)
{var seq__190728_190746__$1 = temp__4092__auto___190745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190728_190746__$1))
{var c__8952__auto___190747 = cljs.core.chunk_first.call(null,seq__190728_190746__$1);{
var G__190748 = cljs.core.chunk_rest.call(null,seq__190728_190746__$1);
var G__190749 = c__8952__auto___190747;
var G__190750 = cljs.core.count.call(null,c__8952__auto___190747);
var G__190751 = 0;
seq__190728_190734 = G__190748;
chunk__190729_190735 = G__190749;
count__190730_190736 = G__190750;
i__190731_190737 = G__190751;
continue;
}
} else
{var vec__190733_190752 = cljs.core.first.call(null,seq__190728_190746__$1);var attr_190753 = cljs.core.nth.call(null,vec__190733_190752,0,null);var value_190754 = cljs.core.nth.call(null,vec__190733_190752,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_190753),value_190754);
{
var G__190755 = cljs.core.next.call(null,seq__190728_190746__$1);
var G__190756 = null;
var G__190757 = 0;
var G__190758 = 0;
seq__190728_190734 = G__190755;
chunk__190729_190735 = G__190756;
count__190730_190736 = G__190757;
i__190731_190737 = G__190758;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__190763 = cljs.core.seq.call(null,values);var chunk__190764 = null;var count__190765 = 0;var i__190766 = 0;while(true){
if((i__190766 < count__190765))
{var attr = cljs.core._nth.call(null,chunk__190764,i__190766);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__190767 = seq__190763;
var G__190768 = chunk__190764;
var G__190769 = count__190765;
var G__190770 = (i__190766 + 1);
seq__190763 = G__190767;
chunk__190764 = G__190768;
count__190765 = G__190769;
i__190766 = G__190770;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190763);if(temp__4092__auto__)
{var seq__190763__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190763__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190763__$1);{
var G__190771 = cljs.core.chunk_rest.call(null,seq__190763__$1);
var G__190772 = c__8952__auto__;
var G__190773 = cljs.core.count.call(null,c__8952__auto__);
var G__190774 = 0;
seq__190763 = G__190771;
chunk__190764 = G__190772;
count__190765 = G__190773;
i__190766 = G__190774;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__190763__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__190775 = cljs.core.next.call(null,seq__190763__$1);
var G__190776 = null;
var G__190777 = 0;
var G__190778 = 0;
seq__190763 = G__190775;
chunk__190764 = G__190776;
count__190765 = G__190777;
i__190766 = G__190778;
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
{var seq__190785_190791 = cljs.core.seq.call(null,ats);var chunk__190786_190792 = null;var count__190787_190793 = 0;var i__190788_190794 = 0;while(true){
if((i__190788_190794 < count__190787_190793))
{var vec__190789_190795 = cljs.core._nth.call(null,chunk__190786_190792,i__190788_190794);var k_190796 = cljs.core.nth.call(null,vec__190789_190795,0,null);var v_190797 = cljs.core.nth.call(null,vec__190789_190795,1,null);add_map_attrs.call(null,elem,k_190796,v_190797);
{
var G__190798 = seq__190785_190791;
var G__190799 = chunk__190786_190792;
var G__190800 = count__190787_190793;
var G__190801 = (i__190788_190794 + 1);
seq__190785_190791 = G__190798;
chunk__190786_190792 = G__190799;
count__190787_190793 = G__190800;
i__190788_190794 = G__190801;
continue;
}
} else
{var temp__4092__auto___190802 = cljs.core.seq.call(null,seq__190785_190791);if(temp__4092__auto___190802)
{var seq__190785_190803__$1 = temp__4092__auto___190802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190785_190803__$1))
{var c__8952__auto___190804 = cljs.core.chunk_first.call(null,seq__190785_190803__$1);{
var G__190805 = cljs.core.chunk_rest.call(null,seq__190785_190803__$1);
var G__190806 = c__8952__auto___190804;
var G__190807 = cljs.core.count.call(null,c__8952__auto___190804);
var G__190808 = 0;
seq__190785_190791 = G__190805;
chunk__190786_190792 = G__190806;
count__190787_190793 = G__190807;
i__190788_190794 = G__190808;
continue;
}
} else
{var vec__190790_190809 = cljs.core.first.call(null,seq__190785_190803__$1);var k_190810 = cljs.core.nth.call(null,vec__190790_190809,0,null);var v_190811 = cljs.core.nth.call(null,vec__190790_190809,1,null);add_map_attrs.call(null,elem,k_190810,v_190811);
{
var G__190812 = cljs.core.next.call(null,seq__190785_190803__$1);
var G__190813 = null;
var G__190814 = 0;
var G__190815 = 0;
seq__190785_190791 = G__190812;
chunk__190786_190792 = G__190813;
count__190787_190793 = G__190814;
i__190788_190794 = G__190815;
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
var seq__190820_190824 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__190821_190825 = null;var count__190822_190826 = 0;var i__190823_190827 = 0;while(true){
if((i__190823_190827 < count__190822_190826))
{var node_190828 = cljs.core._nth.call(null,chunk__190821_190825,i__190823_190827);goog.dom.appendChild(div,node_190828);
{
var G__190829 = seq__190820_190824;
var G__190830 = chunk__190821_190825;
var G__190831 = count__190822_190826;
var G__190832 = (i__190823_190827 + 1);
seq__190820_190824 = G__190829;
chunk__190821_190825 = G__190830;
count__190822_190826 = G__190831;
i__190823_190827 = G__190832;
continue;
}
} else
{var temp__4092__auto___190833 = cljs.core.seq.call(null,seq__190820_190824);if(temp__4092__auto___190833)
{var seq__190820_190834__$1 = temp__4092__auto___190833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190820_190834__$1))
{var c__8952__auto___190835 = cljs.core.chunk_first.call(null,seq__190820_190834__$1);{
var G__190836 = cljs.core.chunk_rest.call(null,seq__190820_190834__$1);
var G__190837 = c__8952__auto___190835;
var G__190838 = cljs.core.count.call(null,c__8952__auto___190835);
var G__190839 = 0;
seq__190820_190824 = G__190836;
chunk__190821_190825 = G__190837;
count__190822_190826 = G__190838;
i__190823_190827 = G__190839;
continue;
}
} else
{var node_190840 = cljs.core.first.call(null,seq__190820_190834__$1);goog.dom.appendChild(div,node_190840);
{
var G__190841 = cljs.core.next.call(null,seq__190820_190834__$1);
var G__190842 = null;
var G__190843 = 0;
var G__190844 = 0;
seq__190820_190824 = G__190841;
chunk__190821_190825 = G__190842;
count__190822_190826 = G__190843;
i__190823_190827 = G__190844;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__190845_SHARP_){var id = p1__190845_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__190845_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__190847 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__190847,0,null);var txt = cljs.core.nth.call(null,vec__190847,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__190852_190856 = cljs.core.seq.call(null,dfa);var chunk__190853_190857 = null;var count__190854_190858 = 0;var i__190855_190859 = 0;while(true){
if((i__190855_190859 < count__190854_190858))
{var df_190860 = cljs.core._nth.call(null,chunk__190853_190857,i__190855_190859);goog.dom.append(frag,df_190860);
{
var G__190861 = seq__190852_190856;
var G__190862 = chunk__190853_190857;
var G__190863 = count__190854_190858;
var G__190864 = (i__190855_190859 + 1);
seq__190852_190856 = G__190861;
chunk__190853_190857 = G__190862;
count__190854_190858 = G__190863;
i__190855_190859 = G__190864;
continue;
}
} else
{var temp__4092__auto___190865 = cljs.core.seq.call(null,seq__190852_190856);if(temp__4092__auto___190865)
{var seq__190852_190866__$1 = temp__4092__auto___190865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190852_190866__$1))
{var c__8952__auto___190867 = cljs.core.chunk_first.call(null,seq__190852_190866__$1);{
var G__190868 = cljs.core.chunk_rest.call(null,seq__190852_190866__$1);
var G__190869 = c__8952__auto___190867;
var G__190870 = cljs.core.count.call(null,c__8952__auto___190867);
var G__190871 = 0;
seq__190852_190856 = G__190868;
chunk__190853_190857 = G__190869;
count__190854_190858 = G__190870;
i__190855_190859 = G__190871;
continue;
}
} else
{var df_190872 = cljs.core.first.call(null,seq__190852_190866__$1);goog.dom.append(frag,df_190872);
{
var G__190873 = cljs.core.next.call(null,seq__190852_190866__$1);
var G__190874 = null;
var G__190875 = 0;
var G__190876 = 0;
seq__190852_190856 = G__190873;
chunk__190853_190857 = G__190874;
count__190854_190858 = G__190875;
i__190855_190859 = G__190876;
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
{var vec__190879 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__190879,0,null);var tdom = cljs.core.nth.call(null,vec__190879,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__190879,sym,tdom,dom,tsnip){
return (function (p1__190877_SHARP_){return p1__190877_SHARP_.outerHTML;
});})(vec__190879,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t190883 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t190883 = (function (trans,func,extr_multi_node,meta190884){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta190884 = meta190884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t190883.cljs$lang$type = true;
enfocus.core.t190883.cljs$lang$ctorStr = "enfocus.core/t190883";
enfocus.core.t190883.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t190883");
});
enfocus.core.t190883.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t190883.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t190883.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t190883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_190885){var self__ = this;
var _190885__$1 = this;return self__.meta190884;
});
enfocus.core.t190883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_190885,meta190884__$1){var self__ = this;
var _190885__$1 = this;return (new enfocus.core.t190883(self__.trans,self__.func,self__.extr_multi_node,meta190884__$1));
});
enfocus.core.__GT_t190883 = (function __GT_t190883(trans__$1,func__$1,extr_multi_node__$1,meta190884){return (new enfocus.core.t190883(trans__$1,func__$1,extr_multi_node__$1,meta190884));
});
}
return (new enfocus.core.t190883(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t190893 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t190893 = (function (trans,func,multi_node_chain,meta190894){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta190894 = meta190894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t190893.cljs$lang$type = true;
enfocus.core.t190893.cljs$lang$ctorStr = "enfocus.core/t190893";
enfocus.core.t190893.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t190893");
});
enfocus.core.t190893.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t190893.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t190893.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t190893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_190895){var self__ = this;
var _190895__$1 = this;return self__.meta190894;
});
enfocus.core.t190893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_190895,meta190894__$1){var self__ = this;
var _190895__$1 = this;return (new enfocus.core.t190893(self__.trans,self__.func,self__.multi_node_chain,meta190894__$1));
});
enfocus.core.__GT_t190893 = (function __GT_t190893(trans__$1,func__$1,multi_node_chain__$1,meta190894){return (new enfocus.core.t190893(trans__$1,func__$1,multi_node_chain__$1,meta190894));
});
}
return (new enfocus.core.t190893(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__190886_SHARP_){return domina.nodes.call(null,p1__190886_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t190896 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t190896 = (function (trans,func,values,multi_node_chain,meta190897){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta190897 = meta190897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t190896.cljs$lang$type = true;
enfocus.core.t190896.cljs$lang$ctorStr = "enfocus.core/t190896";
enfocus.core.t190896.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t190896");
});
enfocus.core.t190896.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t190896.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t190896.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t190896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_190898){var self__ = this;
var _190898__$1 = this;return self__.meta190897;
});
enfocus.core.t190896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_190898,meta190897__$1){var self__ = this;
var _190898__$1 = this;return (new enfocus.core.t190896(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta190897__$1));
});
enfocus.core.__GT_t190896 = (function __GT_t190896(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta190897){return (new enfocus.core.t190896(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta190897));
});
}
return (new enfocus.core.t190896(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__190899_SHARP_,p2__190900_SHARP_){domina.destroy_children_BANG_.call(null,p1__190899_SHARP_);
return domina.append_BANG_.call(null,p1__190899_SHARP_,p2__190900_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__190901){
var values = cljs.core.seq(arglist__190901);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__190902_SHARP_){return domina.set_html_BANG_.call(null,p1__190902_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__190903_SHARP_){var seq__190910 = cljs.core.seq.call(null,pairs);var chunk__190911 = null;var count__190912 = 0;var i__190913 = 0;while(true){
if((i__190913 < count__190912))
{var vec__190914 = cljs.core._nth.call(null,chunk__190911,i__190913);var name = cljs.core.nth.call(null,vec__190914,0,null);var value = cljs.core.nth.call(null,vec__190914,1,null);domina.set_attr_BANG_.call(null,p1__190903_SHARP_,name,value);
{
var G__190916 = seq__190910;
var G__190917 = chunk__190911;
var G__190918 = count__190912;
var G__190919 = (i__190913 + 1);
seq__190910 = G__190916;
chunk__190911 = G__190917;
count__190912 = G__190918;
i__190913 = G__190919;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190910);if(temp__4092__auto__)
{var seq__190910__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190910__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190910__$1);{
var G__190920 = cljs.core.chunk_rest.call(null,seq__190910__$1);
var G__190921 = c__8952__auto__;
var G__190922 = cljs.core.count.call(null,c__8952__auto__);
var G__190923 = 0;
seq__190910 = G__190920;
chunk__190911 = G__190921;
count__190912 = G__190922;
i__190913 = G__190923;
continue;
}
} else
{var vec__190915 = cljs.core.first.call(null,seq__190910__$1);var name = cljs.core.nth.call(null,vec__190915,0,null);var value = cljs.core.nth.call(null,vec__190915,1,null);domina.set_attr_BANG_.call(null,p1__190903_SHARP_,name,value);
{
var G__190924 = cljs.core.next.call(null,seq__190910__$1);
var G__190925 = null;
var G__190926 = 0;
var G__190927 = 0;
seq__190910 = G__190924;
chunk__190911 = G__190925;
count__190912 = G__190926;
i__190913 = G__190927;
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
set_attr.cljs$lang$applyTo = (function (arglist__190928){
var values = cljs.core.seq(arglist__190928);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__190929_SHARP_){var seq__190934 = cljs.core.seq.call(null,values);var chunk__190935 = null;var count__190936 = 0;var i__190937 = 0;while(true){
if((i__190937 < count__190936))
{var name = cljs.core._nth.call(null,chunk__190935,i__190937);domina.remove_attr_BANG_.call(null,p1__190929_SHARP_,name);
{
var G__190938 = seq__190934;
var G__190939 = chunk__190935;
var G__190940 = count__190936;
var G__190941 = (i__190937 + 1);
seq__190934 = G__190938;
chunk__190935 = G__190939;
count__190936 = G__190940;
i__190937 = G__190941;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190934);if(temp__4092__auto__)
{var seq__190934__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190934__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190934__$1);{
var G__190942 = cljs.core.chunk_rest.call(null,seq__190934__$1);
var G__190943 = c__8952__auto__;
var G__190944 = cljs.core.count.call(null,c__8952__auto__);
var G__190945 = 0;
seq__190934 = G__190942;
chunk__190935 = G__190943;
count__190936 = G__190944;
i__190937 = G__190945;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__190934__$1);domina.remove_attr_BANG_.call(null,p1__190929_SHARP_,name);
{
var G__190946 = cljs.core.next.call(null,seq__190934__$1);
var G__190947 = null;
var G__190948 = 0;
var G__190949 = 0;
seq__190934 = G__190946;
chunk__190935 = G__190947;
count__190936 = G__190948;
i__190937 = G__190949;
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
remove_attr.cljs$lang$applyTo = (function (arglist__190950){
var values = cljs.core.seq(arglist__190950);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__190953){var vec__190954 = p__190953;var n = cljs.core.nth.call(null,vec__190954,0,null);var v = cljs.core.nth.call(null,vec__190954,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__190955){
var forms = cljs.core.seq(arglist__190955);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__190956_SHARP_){var seq__190961 = cljs.core.seq.call(null,values);var chunk__190962 = null;var count__190963 = 0;var i__190964 = 0;while(true){
if((i__190964 < count__190963))
{var val = cljs.core._nth.call(null,chunk__190962,i__190964);domina.add_class_BANG_.call(null,p1__190956_SHARP_,val);
{
var G__190965 = seq__190961;
var G__190966 = chunk__190962;
var G__190967 = count__190963;
var G__190968 = (i__190964 + 1);
seq__190961 = G__190965;
chunk__190962 = G__190966;
count__190963 = G__190967;
i__190964 = G__190968;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190961);if(temp__4092__auto__)
{var seq__190961__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190961__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190961__$1);{
var G__190969 = cljs.core.chunk_rest.call(null,seq__190961__$1);
var G__190970 = c__8952__auto__;
var G__190971 = cljs.core.count.call(null,c__8952__auto__);
var G__190972 = 0;
seq__190961 = G__190969;
chunk__190962 = G__190970;
count__190963 = G__190971;
i__190964 = G__190972;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__190961__$1);domina.add_class_BANG_.call(null,p1__190956_SHARP_,val);
{
var G__190973 = cljs.core.next.call(null,seq__190961__$1);
var G__190974 = null;
var G__190975 = 0;
var G__190976 = 0;
seq__190961 = G__190973;
chunk__190962 = G__190974;
count__190963 = G__190975;
i__190964 = G__190976;
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
add_class.cljs$lang$applyTo = (function (arglist__190977){
var values = cljs.core.seq(arglist__190977);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__190978_SHARP_){var seq__190983 = cljs.core.seq.call(null,values);var chunk__190984 = null;var count__190985 = 0;var i__190986 = 0;while(true){
if((i__190986 < count__190985))
{var val = cljs.core._nth.call(null,chunk__190984,i__190986);domina.remove_class_BANG_.call(null,p1__190978_SHARP_,val);
{
var G__190987 = seq__190983;
var G__190988 = chunk__190984;
var G__190989 = count__190985;
var G__190990 = (i__190986 + 1);
seq__190983 = G__190987;
chunk__190984 = G__190988;
count__190985 = G__190989;
i__190986 = G__190990;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__190983);if(temp__4092__auto__)
{var seq__190983__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__190983__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__190983__$1);{
var G__190991 = cljs.core.chunk_rest.call(null,seq__190983__$1);
var G__190992 = c__8952__auto__;
var G__190993 = cljs.core.count.call(null,c__8952__auto__);
var G__190994 = 0;
seq__190983 = G__190991;
chunk__190984 = G__190992;
count__190985 = G__190993;
i__190986 = G__190994;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__190983__$1);domina.remove_class_BANG_.call(null,p1__190978_SHARP_,val);
{
var G__190995 = cljs.core.next.call(null,seq__190983__$1);
var G__190996 = null;
var G__190997 = 0;
var G__190998 = 0;
seq__190983 = G__190995;
chunk__190984 = G__190996;
count__190985 = G__190997;
i__190986 = G__190998;
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
remove_class.cljs$lang$applyTo = (function (arglist__190999){
var values = cljs.core.seq(arglist__190999);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__191000_SHARP_){return domina.set_classes_BANG_.call(null,p1__191000_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__191001){
var values = cljs.core.seq(arglist__191001);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__191006 = cljs.core.seq.call(null,forms);var chunk__191007 = null;var count__191008 = 0;var i__191009 = 0;while(true){
if((i__191009 < count__191008))
{var fun = cljs.core._nth.call(null,chunk__191007,i__191009);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__191010 = seq__191006;
var G__191011 = chunk__191007;
var G__191012 = count__191008;
var G__191013 = (i__191009 + 1);
seq__191006 = G__191010;
chunk__191007 = G__191011;
count__191008 = G__191012;
i__191009 = G__191013;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__191006);if(temp__4092__auto__)
{var seq__191006__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191006__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__191006__$1);{
var G__191014 = cljs.core.chunk_rest.call(null,seq__191006__$1);
var G__191015 = c__8952__auto__;
var G__191016 = cljs.core.count.call(null,c__8952__auto__);
var G__191017 = 0;
seq__191006 = G__191014;
chunk__191007 = G__191015;
count__191008 = G__191016;
i__191009 = G__191017;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__191006__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__191018 = cljs.core.next.call(null,seq__191006__$1);
var G__191019 = null;
var G__191020 = 0;
var G__191021 = 0;
seq__191006 = G__191018;
chunk__191007 = G__191019;
count__191008 = G__191020;
i__191009 = G__191021;
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
do__GT_.cljs$lang$applyTo = (function (arglist__191022){
var forms = cljs.core.seq(arglist__191022);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__191023_SHARP_,p2__191024_SHARP_){return domina.append_BANG_.call(null,p1__191023_SHARP_,p2__191024_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__191025){
var values = cljs.core.seq(arglist__191025);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__191026_SHARP_,p2__191027_SHARP_){return domina.prepend_BANG_.call(null,p1__191026_SHARP_,p2__191027_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__191028){
var values = cljs.core.seq(arglist__191028);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__191029_SHARP_,p2__191030_SHARP_){return domina.insert_before_BANG_.call(null,p1__191029_SHARP_,p2__191030_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__191031){
var values = cljs.core.seq(arglist__191031);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__191032_SHARP_,p2__191033_SHARP_){return domina.insert_after_BANG_.call(null,p1__191032_SHARP_,p2__191033_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__191034){
var values = cljs.core.seq(arglist__191034);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__191035_SHARP_,p2__191036_SHARP_){return domina.swap_content_BANG_.call(null,p1__191035_SHARP_,p2__191036_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__191037){
var values = cljs.core.seq(arglist__191037);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__191038_SHARP_){return domina.detach_BANG_.call(null,p1__191038_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__191039_SHARP_){var seq__191046 = cljs.core.seq.call(null,pairs);var chunk__191047 = null;var count__191048 = 0;var i__191049 = 0;while(true){
if((i__191049 < count__191048))
{var vec__191050 = cljs.core._nth.call(null,chunk__191047,i__191049);var name = cljs.core.nth.call(null,vec__191050,0,null);var value = cljs.core.nth.call(null,vec__191050,1,null);domina.set_style_BANG_.call(null,p1__191039_SHARP_,name,value);
{
var G__191052 = seq__191046;
var G__191053 = chunk__191047;
var G__191054 = count__191048;
var G__191055 = (i__191049 + 1);
seq__191046 = G__191052;
chunk__191047 = G__191053;
count__191048 = G__191054;
i__191049 = G__191055;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__191046);if(temp__4092__auto__)
{var seq__191046__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191046__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__191046__$1);{
var G__191056 = cljs.core.chunk_rest.call(null,seq__191046__$1);
var G__191057 = c__8952__auto__;
var G__191058 = cljs.core.count.call(null,c__8952__auto__);
var G__191059 = 0;
seq__191046 = G__191056;
chunk__191047 = G__191057;
count__191048 = G__191058;
i__191049 = G__191059;
continue;
}
} else
{var vec__191051 = cljs.core.first.call(null,seq__191046__$1);var name = cljs.core.nth.call(null,vec__191051,0,null);var value = cljs.core.nth.call(null,vec__191051,1,null);domina.set_style_BANG_.call(null,p1__191039_SHARP_,name,value);
{
var G__191060 = cljs.core.next.call(null,seq__191046__$1);
var G__191061 = null;
var G__191062 = 0;
var G__191063 = 0;
seq__191046 = G__191060;
chunk__191047 = G__191061;
count__191048 = G__191062;
i__191049 = G__191063;
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
set_style.cljs$lang$applyTo = (function (arglist__191064){
var values = cljs.core.seq(arglist__191064);
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
remove_style.cljs$lang$applyTo = (function (arglist__191065){
var values = cljs.core.seq(arglist__191065);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__191066_SHARP_){return domina.set_data_BANG_.call(null,p1__191066_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__191067){
var ttime = cljs.core.first(arglist__191067);
var funcs = cljs.core.rest(arglist__191067);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__191069_SHARP_,p2__191068_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__191068_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__191094_191102 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__191095_191103 = null;var count__191096_191104 = 0;var i__191097_191105 = 0;while(true){
if((i__191097_191105 < count__191096_191104))
{var idx_191106 = cljs.core._nth.call(null,chunk__191095_191103,i__191097_191105);var attr_191107 = pnod.attributes.item(idx_191106);if(cljs.core.truth_(attr_191107.specified))
{attr_191107.value = rep_str.call(null,attr_191107.value);
} else
{}
{
var G__191108 = seq__191094_191102;
var G__191109 = chunk__191095_191103;
var G__191110 = count__191096_191104;
var G__191111 = (i__191097_191105 + 1);
seq__191094_191102 = G__191108;
chunk__191095_191103 = G__191109;
count__191096_191104 = G__191110;
i__191097_191105 = G__191111;
continue;
}
} else
{var temp__4092__auto___191112 = cljs.core.seq.call(null,seq__191094_191102);if(temp__4092__auto___191112)
{var seq__191094_191113__$1 = temp__4092__auto___191112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191094_191113__$1))
{var c__8952__auto___191114 = cljs.core.chunk_first.call(null,seq__191094_191113__$1);{
var G__191115 = cljs.core.chunk_rest.call(null,seq__191094_191113__$1);
var G__191116 = c__8952__auto___191114;
var G__191117 = cljs.core.count.call(null,c__8952__auto___191114);
var G__191118 = 0;
seq__191094_191102 = G__191115;
chunk__191095_191103 = G__191116;
count__191096_191104 = G__191117;
i__191097_191105 = G__191118;
continue;
}
} else
{var idx_191119 = cljs.core.first.call(null,seq__191094_191113__$1);var attr_191120 = pnod.attributes.item(idx_191119);if(cljs.core.truth_(attr_191120.specified))
{attr_191120.value = rep_str.call(null,attr_191120.value);
} else
{}
{
var G__191121 = cljs.core.next.call(null,seq__191094_191113__$1);
var G__191122 = null;
var G__191123 = 0;
var G__191124 = 0;
seq__191094_191102 = G__191121;
chunk__191095_191103 = G__191122;
count__191096_191104 = G__191123;
i__191097_191105 = G__191124;
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
{var seq__191098 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__191099 = null;var count__191100 = 0;var i__191101 = 0;while(true){
if((i__191101 < count__191100))
{var cnode = cljs.core._nth.call(null,chunk__191099,i__191101);rep_node.call(null,cnode);
{
var G__191125 = seq__191098;
var G__191126 = chunk__191099;
var G__191127 = count__191100;
var G__191128 = (i__191101 + 1);
seq__191098 = G__191125;
chunk__191099 = G__191126;
count__191100 = G__191127;
i__191101 = G__191128;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__191098);if(temp__4092__auto__)
{var seq__191098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191098__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__191098__$1);{
var G__191129 = cljs.core.chunk_rest.call(null,seq__191098__$1);
var G__191130 = c__8952__auto__;
var G__191131 = cljs.core.count.call(null,c__8952__auto__);
var G__191132 = 0;
seq__191098 = G__191129;
chunk__191099 = G__191130;
count__191100 = G__191131;
i__191101 = G__191132;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__191098__$1);rep_node.call(null,cnode);
{
var G__191133 = cljs.core.next.call(null,seq__191098__$1);
var G__191134 = null;
var G__191135 = 0;
var G__191136 = 0;
seq__191098 = G__191133;
chunk__191099 = G__191134;
count__191100 = G__191135;
i__191101 = G__191136;
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
{var vec__191146 = node_spec;var tag = cljs.core.nth.call(null,vec__191146,0,null);var vec__191147 = cljs.core.nthnext.call(null,vec__191146,1);var m = cljs.core.nth.call(null,vec__191147,0,null);var ms = cljs.core.nthnext.call(null,vec__191147,1);var more = vec__191147;var vec__191148 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__191148,0,null);var segments = cljs.core.nthnext.call(null,vec__191148,1);var id = cljs.core.some.call(null,((function (vec__191146,tag,vec__191147,m,ms,more,vec__191148,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__191146,tag,vec__191147,m,ms,more,vec__191148,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__191146,tag,vec__191147,m,ms,more,vec__191148,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__191146,tag,vec__191147,m,ms,more,vec__191148,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__191149_191155 = cljs.core.seq.call(null,attrs__$2);var chunk__191150_191156 = null;var count__191151_191157 = 0;var i__191152_191158 = 0;while(true){
if((i__191152_191158 < count__191151_191157))
{var vec__191153_191159 = cljs.core._nth.call(null,chunk__191150_191156,i__191152_191158);var key_191160 = cljs.core.nth.call(null,vec__191153_191159,0,null);var val_191161 = cljs.core.nth.call(null,vec__191153_191159,1,null);node.setAttribute(cljs.core.name.call(null,key_191160),val_191161);
{
var G__191162 = seq__191149_191155;
var G__191163 = chunk__191150_191156;
var G__191164 = count__191151_191157;
var G__191165 = (i__191152_191158 + 1);
seq__191149_191155 = G__191162;
chunk__191150_191156 = G__191163;
count__191151_191157 = G__191164;
i__191152_191158 = G__191165;
continue;
}
} else
{var temp__4092__auto___191166 = cljs.core.seq.call(null,seq__191149_191155);if(temp__4092__auto___191166)
{var seq__191149_191167__$1 = temp__4092__auto___191166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191149_191167__$1))
{var c__8952__auto___191168 = cljs.core.chunk_first.call(null,seq__191149_191167__$1);{
var G__191169 = cljs.core.chunk_rest.call(null,seq__191149_191167__$1);
var G__191170 = c__8952__auto___191168;
var G__191171 = cljs.core.count.call(null,c__8952__auto___191168);
var G__191172 = 0;
seq__191149_191155 = G__191169;
chunk__191150_191156 = G__191170;
count__191151_191157 = G__191171;
i__191152_191158 = G__191172;
continue;
}
} else
{var vec__191154_191173 = cljs.core.first.call(null,seq__191149_191167__$1);var key_191174 = cljs.core.nth.call(null,vec__191154_191173,0,null);var val_191175 = cljs.core.nth.call(null,vec__191154_191173,1,null);node.setAttribute(cljs.core.name.call(null,key_191174),val_191175);
{
var G__191176 = cljs.core.next.call(null,seq__191149_191167__$1);
var G__191177 = null;
var G__191178 = 0;
var G__191179 = 0;
seq__191149_191155 = G__191176;
chunk__191150_191156 = G__191177;
count__191151_191157 = G__191178;
i__191152_191158 = G__191179;
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
return (function (p1__191180_SHARP_){return p1__191180_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__191181_SHARP_){return p1__191181_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__191183_SHARP_,p2__191182_SHARP_){var G__191186 = p2__191182_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__191186))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__191186))
{return enfocus.core.read_select_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__191186))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__191186))
{var G__191187 = p2__191182_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__191187))
{return enfocus.core.read_checked_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__191187))
{return enfocus.core.read_checked_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__191187))
{return enfocus.core.read_simple_input.call(null,p2__191182_SHARP_,p1__191183_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__191183_SHARP_;
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
{return p1__191183_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__191188_SHARP_){if((p1__191188_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__191188_SHARP_);
} else
{if((p1__191188_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__191188_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__191188_SHARP_))
{return create_sel_str.call(null,p1__191188_SHARP_);
} else
{if(typeof p1__191188_SHARP_ === 'string')
{return p1__191188_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__191199 = node;if(G__191199)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__191199.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__191199.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__191199);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__191199);
}
} else
{return and__8211__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__191200 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__191200,0,null);var trans__$1 = cljs.core.nth.call(null,vec__191200,1,null);var seq__191201 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__191202 = null;var count__191203 = 0;var i__191204 = 0;while(true){
if((i__191204 < count__191203))
{var vec__191205 = cljs.core._nth.call(null,chunk__191202,i__191204);var sel = cljs.core.nth.call(null,vec__191205,0,null);var t = cljs.core.nth.call(null,vec__191205,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__191207 = seq__191201;
var G__191208 = chunk__191202;
var G__191209 = count__191203;
var G__191210 = (i__191204 + 1);
seq__191201 = G__191207;
chunk__191202 = G__191208;
count__191203 = G__191209;
i__191204 = G__191210;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__191201);if(temp__4092__auto__)
{var seq__191201__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191201__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__191201__$1);{
var G__191211 = cljs.core.chunk_rest.call(null,seq__191201__$1);
var G__191212 = c__8952__auto__;
var G__191213 = cljs.core.count.call(null,c__8952__auto__);
var G__191214 = 0;
seq__191201 = G__191211;
chunk__191202 = G__191212;
count__191203 = G__191213;
i__191204 = G__191214;
continue;
}
} else
{var vec__191206 = cljs.core.first.call(null,seq__191201__$1);var sel = cljs.core.nth.call(null,vec__191206,0,null);var t = cljs.core.nth.call(null,vec__191206,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__191215 = cljs.core.next.call(null,seq__191201__$1);
var G__191216 = null;
var G__191217 = 0;
var G__191218 = 0;
seq__191201 = G__191215;
chunk__191202 = G__191216;
count__191203 = G__191217;
i__191204 = G__191218;
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
i_at.cljs$lang$applyTo = (function (arglist__191219){
var id_mask = cljs.core.first(arglist__191219);
arglist__191219 = cljs.core.next(arglist__191219);
var node = cljs.core.first(arglist__191219);
var trans = cljs.core.rest(arglist__191219);
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
at.cljs$lang$applyTo = (function (arglist__191220){
var node = cljs.core.first(arglist__191220);
var trans = cljs.core.rest(arglist__191220);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__191225 = node;if(G__191225)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__191225.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__191225.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__191225);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__191225);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__191226 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__191226,0,null);var trans__$1 = cljs.core.nth.call(null,vec__191226,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__191227){var vec__191228 = p__191227;var ky = cljs.core.nth.call(null,vec__191228,0,null);var sel = cljs.core.nth.call(null,vec__191228,1,null);var ext = cljs.core.nth.call(null,vec__191228,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__191229){
var node = cljs.core.first(arglist__191229);
var trans = cljs.core.rest(arglist__191229);
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