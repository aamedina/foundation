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
enfocus.core.ISelector = (function (){var obj46757 = {};return obj46757;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__15171__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (enfocus.core.select[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (enfocus.core.select["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (enfocus.core.select[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (enfocus.core.select["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__15171__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (enfocus.core.select[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (enfocus.core.select["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
enfocus.core.ITransform = (function (){var obj46759 = {};return obj46759;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__15171__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__15171__auto__ = this$;if(and__15171__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__15171__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__15786__auto__ = (((this$ == null))?null:this$);return (function (){var or__15183__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__15171__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__15171__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__15171__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__46760_SHARP_){if(typeof p1__46760_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__46760_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__46760_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__46767_46773 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__46768_46774 = null;var count__46769_46775 = 0;var i__46770_46776 = 0;while(true){
if((i__46770_46776 < count__46769_46775))
{var vec__46771_46777 = cljs.core._nth.call(null,chunk__46768_46774,i__46770_46776);var attr_46778 = cljs.core.nth.call(null,vec__46771_46777,0,null);var value_46779 = cljs.core.nth.call(null,vec__46771_46777,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_46778),value_46779);
{
var G__46780 = seq__46767_46773;
var G__46781 = chunk__46768_46774;
var G__46782 = count__46769_46775;
var G__46783 = (i__46770_46776 + 1);
seq__46767_46773 = G__46780;
chunk__46768_46774 = G__46781;
count__46769_46775 = G__46782;
i__46770_46776 = G__46783;
continue;
}
} else
{var temp__4098__auto___46784 = cljs.core.seq.call(null,seq__46767_46773);if(temp__4098__auto___46784)
{var seq__46767_46785__$1 = temp__4098__auto___46784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46767_46785__$1))
{var c__15907__auto___46786 = cljs.core.chunk_first.call(null,seq__46767_46785__$1);{
var G__46787 = cljs.core.chunk_rest.call(null,seq__46767_46785__$1);
var G__46788 = c__15907__auto___46786;
var G__46789 = cljs.core.count.call(null,c__15907__auto___46786);
var G__46790 = 0;
seq__46767_46773 = G__46787;
chunk__46768_46774 = G__46788;
count__46769_46775 = G__46789;
i__46770_46776 = G__46790;
continue;
}
} else
{var vec__46772_46791 = cljs.core.first.call(null,seq__46767_46785__$1);var attr_46792 = cljs.core.nth.call(null,vec__46772_46791,0,null);var value_46793 = cljs.core.nth.call(null,vec__46772_46791,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_46792),value_46793);
{
var G__46794 = cljs.core.next.call(null,seq__46767_46785__$1);
var G__46795 = null;
var G__46796 = 0;
var G__46797 = 0;
seq__46767_46773 = G__46794;
chunk__46768_46774 = G__46795;
count__46769_46775 = G__46796;
i__46770_46776 = G__46797;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__46802 = cljs.core.seq.call(null,values);var chunk__46803 = null;var count__46804 = 0;var i__46805 = 0;while(true){
if((i__46805 < count__46804))
{var attr = cljs.core._nth.call(null,chunk__46803,i__46805);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__46806 = seq__46802;
var G__46807 = chunk__46803;
var G__46808 = count__46804;
var G__46809 = (i__46805 + 1);
seq__46802 = G__46806;
chunk__46803 = G__46807;
count__46804 = G__46808;
i__46805 = G__46809;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__46802);if(temp__4098__auto__)
{var seq__46802__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46802__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__46802__$1);{
var G__46810 = cljs.core.chunk_rest.call(null,seq__46802__$1);
var G__46811 = c__15907__auto__;
var G__46812 = cljs.core.count.call(null,c__15907__auto__);
var G__46813 = 0;
seq__46802 = G__46810;
chunk__46803 = G__46811;
count__46804 = G__46812;
i__46805 = G__46813;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__46802__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__46814 = cljs.core.next.call(null,seq__46802__$1);
var G__46815 = null;
var G__46816 = 0;
var G__46817 = 0;
seq__46802 = G__46814;
chunk__46803 = G__46815;
count__46804 = G__46816;
i__46805 = G__46817;
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
{var seq__46824_46830 = cljs.core.seq.call(null,ats);var chunk__46825_46831 = null;var count__46826_46832 = 0;var i__46827_46833 = 0;while(true){
if((i__46827_46833 < count__46826_46832))
{var vec__46828_46834 = cljs.core._nth.call(null,chunk__46825_46831,i__46827_46833);var k_46835 = cljs.core.nth.call(null,vec__46828_46834,0,null);var v_46836 = cljs.core.nth.call(null,vec__46828_46834,1,null);add_map_attrs.call(null,elem,k_46835,v_46836);
{
var G__46837 = seq__46824_46830;
var G__46838 = chunk__46825_46831;
var G__46839 = count__46826_46832;
var G__46840 = (i__46827_46833 + 1);
seq__46824_46830 = G__46837;
chunk__46825_46831 = G__46838;
count__46826_46832 = G__46839;
i__46827_46833 = G__46840;
continue;
}
} else
{var temp__4098__auto___46841 = cljs.core.seq.call(null,seq__46824_46830);if(temp__4098__auto___46841)
{var seq__46824_46842__$1 = temp__4098__auto___46841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46824_46842__$1))
{var c__15907__auto___46843 = cljs.core.chunk_first.call(null,seq__46824_46842__$1);{
var G__46844 = cljs.core.chunk_rest.call(null,seq__46824_46842__$1);
var G__46845 = c__15907__auto___46843;
var G__46846 = cljs.core.count.call(null,c__15907__auto___46843);
var G__46847 = 0;
seq__46824_46830 = G__46844;
chunk__46825_46831 = G__46845;
count__46826_46832 = G__46846;
i__46827_46833 = G__46847;
continue;
}
} else
{var vec__46829_46848 = cljs.core.first.call(null,seq__46824_46842__$1);var k_46849 = cljs.core.nth.call(null,vec__46829_46848,0,null);var v_46850 = cljs.core.nth.call(null,vec__46829_46848,1,null);add_map_attrs.call(null,elem,k_46849,v_46850);
{
var G__46851 = cljs.core.next.call(null,seq__46824_46842__$1);
var G__46852 = null;
var G__46853 = 0;
var G__46854 = 0;
seq__46824_46830 = G__46851;
chunk__46825_46831 = G__46852;
count__46826_46832 = G__46853;
i__46827_46833 = G__46854;
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
var seq__46859_46863 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__46860_46864 = null;var count__46861_46865 = 0;var i__46862_46866 = 0;while(true){
if((i__46862_46866 < count__46861_46865))
{var node_46867 = cljs.core._nth.call(null,chunk__46860_46864,i__46862_46866);goog.dom.appendChild(div,node_46867);
{
var G__46868 = seq__46859_46863;
var G__46869 = chunk__46860_46864;
var G__46870 = count__46861_46865;
var G__46871 = (i__46862_46866 + 1);
seq__46859_46863 = G__46868;
chunk__46860_46864 = G__46869;
count__46861_46865 = G__46870;
i__46862_46866 = G__46871;
continue;
}
} else
{var temp__4098__auto___46872 = cljs.core.seq.call(null,seq__46859_46863);if(temp__4098__auto___46872)
{var seq__46859_46873__$1 = temp__4098__auto___46872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46859_46873__$1))
{var c__15907__auto___46874 = cljs.core.chunk_first.call(null,seq__46859_46873__$1);{
var G__46875 = cljs.core.chunk_rest.call(null,seq__46859_46873__$1);
var G__46876 = c__15907__auto___46874;
var G__46877 = cljs.core.count.call(null,c__15907__auto___46874);
var G__46878 = 0;
seq__46859_46863 = G__46875;
chunk__46860_46864 = G__46876;
count__46861_46865 = G__46877;
i__46862_46866 = G__46878;
continue;
}
} else
{var node_46879 = cljs.core.first.call(null,seq__46859_46873__$1);goog.dom.appendChild(div,node_46879);
{
var G__46880 = cljs.core.next.call(null,seq__46859_46873__$1);
var G__46881 = null;
var G__46882 = 0;
var G__46883 = 0;
seq__46859_46863 = G__46880;
chunk__46860_46864 = G__46881;
count__46861_46865 = G__46882;
i__46862_46866 = G__46883;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__46884_SHARP_){var id = p1__46884_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__46884_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__46886 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__46886,0,null);var txt = cljs.core.nth.call(null,vec__46886,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__46891_46895 = cljs.core.seq.call(null,dfa);var chunk__46892_46896 = null;var count__46893_46897 = 0;var i__46894_46898 = 0;while(true){
if((i__46894_46898 < count__46893_46897))
{var df_46899 = cljs.core._nth.call(null,chunk__46892_46896,i__46894_46898);goog.dom.append(frag,df_46899);
{
var G__46900 = seq__46891_46895;
var G__46901 = chunk__46892_46896;
var G__46902 = count__46893_46897;
var G__46903 = (i__46894_46898 + 1);
seq__46891_46895 = G__46900;
chunk__46892_46896 = G__46901;
count__46893_46897 = G__46902;
i__46894_46898 = G__46903;
continue;
}
} else
{var temp__4098__auto___46904 = cljs.core.seq.call(null,seq__46891_46895);if(temp__4098__auto___46904)
{var seq__46891_46905__$1 = temp__4098__auto___46904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46891_46905__$1))
{var c__15907__auto___46906 = cljs.core.chunk_first.call(null,seq__46891_46905__$1);{
var G__46907 = cljs.core.chunk_rest.call(null,seq__46891_46905__$1);
var G__46908 = c__15907__auto___46906;
var G__46909 = cljs.core.count.call(null,c__15907__auto___46906);
var G__46910 = 0;
seq__46891_46895 = G__46907;
chunk__46892_46896 = G__46908;
count__46893_46897 = G__46909;
i__46894_46898 = G__46910;
continue;
}
} else
{var df_46911 = cljs.core.first.call(null,seq__46891_46905__$1);goog.dom.append(frag,df_46911);
{
var G__46912 = cljs.core.next.call(null,seq__46891_46905__$1);
var G__46913 = null;
var G__46914 = 0;
var G__46915 = 0;
seq__46891_46895 = G__46912;
chunk__46892_46896 = G__46913;
count__46893_46897 = G__46914;
i__46894_46898 = G__46915;
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
{var vec__46918 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__46918,0,null);var tdom = cljs.core.nth.call(null,vec__46918,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__46918,sym,tdom,dom,tsnip){
return (function (p1__46916_SHARP_){return p1__46916_SHARP_.outerHTML;
});})(vec__46918,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t46922 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46922 = (function (trans,func,extr_multi_node,meta46923){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta46923 = meta46923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46922.cljs$lang$type = true;
enfocus.core.t46922.cljs$lang$ctorStr = "enfocus.core/t46922";
enfocus.core.t46922.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"enfocus.core/t46922");
});
enfocus.core.t46922.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46922.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46922.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46924){var self__ = this;
var _46924__$1 = this;return self__.meta46923;
});
enfocus.core.t46922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46924,meta46923__$1){var self__ = this;
var _46924__$1 = this;return (new enfocus.core.t46922(self__.trans,self__.func,self__.extr_multi_node,meta46923__$1));
});
enfocus.core.__GT_t46922 = (function __GT_t46922(trans__$1,func__$1,extr_multi_node__$1,meta46923){return (new enfocus.core.t46922(trans__$1,func__$1,extr_multi_node__$1,meta46923));
});
}
return (new enfocus.core.t46922(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t46932 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46932 = (function (trans,func,multi_node_chain,meta46933){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta46933 = meta46933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46932.cljs$lang$type = true;
enfocus.core.t46932.cljs$lang$ctorStr = "enfocus.core/t46932";
enfocus.core.t46932.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"enfocus.core/t46932");
});
enfocus.core.t46932.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46932.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46932.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46934){var self__ = this;
var _46934__$1 = this;return self__.meta46933;
});
enfocus.core.t46932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46934,meta46933__$1){var self__ = this;
var _46934__$1 = this;return (new enfocus.core.t46932(self__.trans,self__.func,self__.multi_node_chain,meta46933__$1));
});
enfocus.core.__GT_t46932 = (function __GT_t46932(trans__$1,func__$1,multi_node_chain__$1,meta46933){return (new enfocus.core.t46932(trans__$1,func__$1,multi_node_chain__$1,meta46933));
});
}
return (new enfocus.core.t46932(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__46925_SHARP_){return domina.nodes.call(null,p1__46925_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t46935 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46935 = (function (trans,func,values,multi_node_chain,meta46936){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta46936 = meta46936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46935.cljs$lang$type = true;
enfocus.core.t46935.cljs$lang$ctorStr = "enfocus.core/t46935";
enfocus.core.t46935.cljs$lang$ctorPrWriter = (function (this__15727__auto__,writer__15728__auto__,opt__15729__auto__){return cljs.core._write.call(null,writer__15728__auto__,"enfocus.core/t46935");
});
enfocus.core.t46935.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46935.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46935.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46937){var self__ = this;
var _46937__$1 = this;return self__.meta46936;
});
enfocus.core.t46935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46937,meta46936__$1){var self__ = this;
var _46937__$1 = this;return (new enfocus.core.t46935(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta46936__$1));
});
enfocus.core.__GT_t46935 = (function __GT_t46935(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta46936){return (new enfocus.core.t46935(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta46936));
});
}
return (new enfocus.core.t46935(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46938_SHARP_,p2__46939_SHARP_){domina.destroy_children_BANG_.call(null,p1__46938_SHARP_);
return domina.append_BANG_.call(null,p1__46938_SHARP_,p2__46939_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__46940){
var values = cljs.core.seq(arglist__46940);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__46941_SHARP_){return domina.set_html_BANG_.call(null,p1__46941_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__46942_SHARP_){var seq__46949 = cljs.core.seq.call(null,pairs);var chunk__46950 = null;var count__46951 = 0;var i__46952 = 0;while(true){
if((i__46952 < count__46951))
{var vec__46953 = cljs.core._nth.call(null,chunk__46950,i__46952);var name = cljs.core.nth.call(null,vec__46953,0,null);var value = cljs.core.nth.call(null,vec__46953,1,null);domina.set_attr_BANG_.call(null,p1__46942_SHARP_,name,value);
{
var G__46955 = seq__46949;
var G__46956 = chunk__46950;
var G__46957 = count__46951;
var G__46958 = (i__46952 + 1);
seq__46949 = G__46955;
chunk__46950 = G__46956;
count__46951 = G__46957;
i__46952 = G__46958;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__46949);if(temp__4098__auto__)
{var seq__46949__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46949__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__46949__$1);{
var G__46959 = cljs.core.chunk_rest.call(null,seq__46949__$1);
var G__46960 = c__15907__auto__;
var G__46961 = cljs.core.count.call(null,c__15907__auto__);
var G__46962 = 0;
seq__46949 = G__46959;
chunk__46950 = G__46960;
count__46951 = G__46961;
i__46952 = G__46962;
continue;
}
} else
{var vec__46954 = cljs.core.first.call(null,seq__46949__$1);var name = cljs.core.nth.call(null,vec__46954,0,null);var value = cljs.core.nth.call(null,vec__46954,1,null);domina.set_attr_BANG_.call(null,p1__46942_SHARP_,name,value);
{
var G__46963 = cljs.core.next.call(null,seq__46949__$1);
var G__46964 = null;
var G__46965 = 0;
var G__46966 = 0;
seq__46949 = G__46963;
chunk__46950 = G__46964;
count__46951 = G__46965;
i__46952 = G__46966;
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
set_attr.cljs$lang$applyTo = (function (arglist__46967){
var values = cljs.core.seq(arglist__46967);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46968_SHARP_){var seq__46973 = cljs.core.seq.call(null,values);var chunk__46974 = null;var count__46975 = 0;var i__46976 = 0;while(true){
if((i__46976 < count__46975))
{var name = cljs.core._nth.call(null,chunk__46974,i__46976);domina.remove_attr_BANG_.call(null,p1__46968_SHARP_,name);
{
var G__46977 = seq__46973;
var G__46978 = chunk__46974;
var G__46979 = count__46975;
var G__46980 = (i__46976 + 1);
seq__46973 = G__46977;
chunk__46974 = G__46978;
count__46975 = G__46979;
i__46976 = G__46980;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__46973);if(temp__4098__auto__)
{var seq__46973__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46973__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__46973__$1);{
var G__46981 = cljs.core.chunk_rest.call(null,seq__46973__$1);
var G__46982 = c__15907__auto__;
var G__46983 = cljs.core.count.call(null,c__15907__auto__);
var G__46984 = 0;
seq__46973 = G__46981;
chunk__46974 = G__46982;
count__46975 = G__46983;
i__46976 = G__46984;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__46973__$1);domina.remove_attr_BANG_.call(null,p1__46968_SHARP_,name);
{
var G__46985 = cljs.core.next.call(null,seq__46973__$1);
var G__46986 = null;
var G__46987 = 0;
var G__46988 = 0;
seq__46973 = G__46985;
chunk__46974 = G__46986;
count__46975 = G__46987;
i__46976 = G__46988;
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
remove_attr.cljs$lang$applyTo = (function (arglist__46989){
var values = cljs.core.seq(arglist__46989);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__46992){var vec__46993 = p__46992;var n = cljs.core.nth.call(null,vec__46993,0,null);var v = cljs.core.nth.call(null,vec__46993,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__46994){
var forms = cljs.core.seq(arglist__46994);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46995_SHARP_){var seq__47000 = cljs.core.seq.call(null,values);var chunk__47001 = null;var count__47002 = 0;var i__47003 = 0;while(true){
if((i__47003 < count__47002))
{var val = cljs.core._nth.call(null,chunk__47001,i__47003);domina.add_class_BANG_.call(null,p1__46995_SHARP_,val);
{
var G__47004 = seq__47000;
var G__47005 = chunk__47001;
var G__47006 = count__47002;
var G__47007 = (i__47003 + 1);
seq__47000 = G__47004;
chunk__47001 = G__47005;
count__47002 = G__47006;
i__47003 = G__47007;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47000);if(temp__4098__auto__)
{var seq__47000__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47000__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47000__$1);{
var G__47008 = cljs.core.chunk_rest.call(null,seq__47000__$1);
var G__47009 = c__15907__auto__;
var G__47010 = cljs.core.count.call(null,c__15907__auto__);
var G__47011 = 0;
seq__47000 = G__47008;
chunk__47001 = G__47009;
count__47002 = G__47010;
i__47003 = G__47011;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__47000__$1);domina.add_class_BANG_.call(null,p1__46995_SHARP_,val);
{
var G__47012 = cljs.core.next.call(null,seq__47000__$1);
var G__47013 = null;
var G__47014 = 0;
var G__47015 = 0;
seq__47000 = G__47012;
chunk__47001 = G__47013;
count__47002 = G__47014;
i__47003 = G__47015;
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
add_class.cljs$lang$applyTo = (function (arglist__47016){
var values = cljs.core.seq(arglist__47016);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__47017_SHARP_){var seq__47022 = cljs.core.seq.call(null,values);var chunk__47023 = null;var count__47024 = 0;var i__47025 = 0;while(true){
if((i__47025 < count__47024))
{var val = cljs.core._nth.call(null,chunk__47023,i__47025);domina.remove_class_BANG_.call(null,p1__47017_SHARP_,val);
{
var G__47026 = seq__47022;
var G__47027 = chunk__47023;
var G__47028 = count__47024;
var G__47029 = (i__47025 + 1);
seq__47022 = G__47026;
chunk__47023 = G__47027;
count__47024 = G__47028;
i__47025 = G__47029;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47022);if(temp__4098__auto__)
{var seq__47022__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47022__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47022__$1);{
var G__47030 = cljs.core.chunk_rest.call(null,seq__47022__$1);
var G__47031 = c__15907__auto__;
var G__47032 = cljs.core.count.call(null,c__15907__auto__);
var G__47033 = 0;
seq__47022 = G__47030;
chunk__47023 = G__47031;
count__47024 = G__47032;
i__47025 = G__47033;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__47022__$1);domina.remove_class_BANG_.call(null,p1__47017_SHARP_,val);
{
var G__47034 = cljs.core.next.call(null,seq__47022__$1);
var G__47035 = null;
var G__47036 = 0;
var G__47037 = 0;
seq__47022 = G__47034;
chunk__47023 = G__47035;
count__47024 = G__47036;
i__47025 = G__47037;
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
remove_class.cljs$lang$applyTo = (function (arglist__47038){
var values = cljs.core.seq(arglist__47038);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__47039_SHARP_){return domina.set_classes_BANG_.call(null,p1__47039_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__47040){
var values = cljs.core.seq(arglist__47040);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__47045 = cljs.core.seq.call(null,forms);var chunk__47046 = null;var count__47047 = 0;var i__47048 = 0;while(true){
if((i__47048 < count__47047))
{var fun = cljs.core._nth.call(null,chunk__47046,i__47048);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__47049 = seq__47045;
var G__47050 = chunk__47046;
var G__47051 = count__47047;
var G__47052 = (i__47048 + 1);
seq__47045 = G__47049;
chunk__47046 = G__47050;
count__47047 = G__47051;
i__47048 = G__47052;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47045);if(temp__4098__auto__)
{var seq__47045__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47045__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47045__$1);{
var G__47053 = cljs.core.chunk_rest.call(null,seq__47045__$1);
var G__47054 = c__15907__auto__;
var G__47055 = cljs.core.count.call(null,c__15907__auto__);
var G__47056 = 0;
seq__47045 = G__47053;
chunk__47046 = G__47054;
count__47047 = G__47055;
i__47048 = G__47056;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__47045__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__47057 = cljs.core.next.call(null,seq__47045__$1);
var G__47058 = null;
var G__47059 = 0;
var G__47060 = 0;
seq__47045 = G__47057;
chunk__47046 = G__47058;
count__47047 = G__47059;
i__47048 = G__47060;
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
do__GT_.cljs$lang$applyTo = (function (arglist__47061){
var forms = cljs.core.seq(arglist__47061);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__47062_SHARP_,p2__47063_SHARP_){return domina.append_BANG_.call(null,p1__47062_SHARP_,p2__47063_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__47064){
var values = cljs.core.seq(arglist__47064);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__47065_SHARP_,p2__47066_SHARP_){return domina.prepend_BANG_.call(null,p1__47065_SHARP_,p2__47066_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__47067){
var values = cljs.core.seq(arglist__47067);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__47068_SHARP_,p2__47069_SHARP_){return domina.insert_before_BANG_.call(null,p1__47068_SHARP_,p2__47069_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__47070){
var values = cljs.core.seq(arglist__47070);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__47071_SHARP_,p2__47072_SHARP_){return domina.insert_after_BANG_.call(null,p1__47071_SHARP_,p2__47072_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__47073){
var values = cljs.core.seq(arglist__47073);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__47074_SHARP_,p2__47075_SHARP_){return domina.swap_content_BANG_.call(null,p1__47074_SHARP_,p2__47075_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__47076){
var values = cljs.core.seq(arglist__47076);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__47077_SHARP_){return domina.detach_BANG_.call(null,p1__47077_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__47078_SHARP_){var seq__47085 = cljs.core.seq.call(null,pairs);var chunk__47086 = null;var count__47087 = 0;var i__47088 = 0;while(true){
if((i__47088 < count__47087))
{var vec__47089 = cljs.core._nth.call(null,chunk__47086,i__47088);var name = cljs.core.nth.call(null,vec__47089,0,null);var value = cljs.core.nth.call(null,vec__47089,1,null);domina.set_style_BANG_.call(null,p1__47078_SHARP_,name,value);
{
var G__47091 = seq__47085;
var G__47092 = chunk__47086;
var G__47093 = count__47087;
var G__47094 = (i__47088 + 1);
seq__47085 = G__47091;
chunk__47086 = G__47092;
count__47087 = G__47093;
i__47088 = G__47094;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47085);if(temp__4098__auto__)
{var seq__47085__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47085__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47085__$1);{
var G__47095 = cljs.core.chunk_rest.call(null,seq__47085__$1);
var G__47096 = c__15907__auto__;
var G__47097 = cljs.core.count.call(null,c__15907__auto__);
var G__47098 = 0;
seq__47085 = G__47095;
chunk__47086 = G__47096;
count__47087 = G__47097;
i__47088 = G__47098;
continue;
}
} else
{var vec__47090 = cljs.core.first.call(null,seq__47085__$1);var name = cljs.core.nth.call(null,vec__47090,0,null);var value = cljs.core.nth.call(null,vec__47090,1,null);domina.set_style_BANG_.call(null,p1__47078_SHARP_,name,value);
{
var G__47099 = cljs.core.next.call(null,seq__47085__$1);
var G__47100 = null;
var G__47101 = 0;
var G__47102 = 0;
seq__47085 = G__47099;
chunk__47086 = G__47100;
count__47087 = G__47101;
i__47088 = G__47102;
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
set_style.cljs$lang$applyTo = (function (arglist__47103){
var values = cljs.core.seq(arglist__47103);
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
remove_style.cljs$lang$applyTo = (function (arglist__47104){
var values = cljs.core.seq(arglist__47104);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__47105_SHARP_){return domina.set_data_BANG_.call(null,p1__47105_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__47106){
var ttime = cljs.core.first(arglist__47106);
var funcs = cljs.core.rest(arglist__47106);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__47108_SHARP_,p2__47107_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__47107_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__47133_47141 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__47134_47142 = null;var count__47135_47143 = 0;var i__47136_47144 = 0;while(true){
if((i__47136_47144 < count__47135_47143))
{var idx_47145 = cljs.core._nth.call(null,chunk__47134_47142,i__47136_47144);var attr_47146 = pnod.attributes.item(idx_47145);if(cljs.core.truth_(attr_47146.specified))
{attr_47146.value = rep_str.call(null,attr_47146.value);
} else
{}
{
var G__47147 = seq__47133_47141;
var G__47148 = chunk__47134_47142;
var G__47149 = count__47135_47143;
var G__47150 = (i__47136_47144 + 1);
seq__47133_47141 = G__47147;
chunk__47134_47142 = G__47148;
count__47135_47143 = G__47149;
i__47136_47144 = G__47150;
continue;
}
} else
{var temp__4098__auto___47151 = cljs.core.seq.call(null,seq__47133_47141);if(temp__4098__auto___47151)
{var seq__47133_47152__$1 = temp__4098__auto___47151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47133_47152__$1))
{var c__15907__auto___47153 = cljs.core.chunk_first.call(null,seq__47133_47152__$1);{
var G__47154 = cljs.core.chunk_rest.call(null,seq__47133_47152__$1);
var G__47155 = c__15907__auto___47153;
var G__47156 = cljs.core.count.call(null,c__15907__auto___47153);
var G__47157 = 0;
seq__47133_47141 = G__47154;
chunk__47134_47142 = G__47155;
count__47135_47143 = G__47156;
i__47136_47144 = G__47157;
continue;
}
} else
{var idx_47158 = cljs.core.first.call(null,seq__47133_47152__$1);var attr_47159 = pnod.attributes.item(idx_47158);if(cljs.core.truth_(attr_47159.specified))
{attr_47159.value = rep_str.call(null,attr_47159.value);
} else
{}
{
var G__47160 = cljs.core.next.call(null,seq__47133_47152__$1);
var G__47161 = null;
var G__47162 = 0;
var G__47163 = 0;
seq__47133_47141 = G__47160;
chunk__47134_47142 = G__47161;
count__47135_47143 = G__47162;
i__47136_47144 = G__47163;
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
{var seq__47137 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__47138 = null;var count__47139 = 0;var i__47140 = 0;while(true){
if((i__47140 < count__47139))
{var cnode = cljs.core._nth.call(null,chunk__47138,i__47140);rep_node.call(null,cnode);
{
var G__47164 = seq__47137;
var G__47165 = chunk__47138;
var G__47166 = count__47139;
var G__47167 = (i__47140 + 1);
seq__47137 = G__47164;
chunk__47138 = G__47165;
count__47139 = G__47166;
i__47140 = G__47167;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47137);if(temp__4098__auto__)
{var seq__47137__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47137__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47137__$1);{
var G__47168 = cljs.core.chunk_rest.call(null,seq__47137__$1);
var G__47169 = c__15907__auto__;
var G__47170 = cljs.core.count.call(null,c__15907__auto__);
var G__47171 = 0;
seq__47137 = G__47168;
chunk__47138 = G__47169;
count__47139 = G__47170;
i__47140 = G__47171;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__47137__$1);rep_node.call(null,cnode);
{
var G__47172 = cljs.core.next.call(null,seq__47137__$1);
var G__47173 = null;
var G__47174 = 0;
var G__47175 = 0;
seq__47137 = G__47172;
chunk__47138 = G__47173;
count__47139 = G__47174;
i__47140 = G__47175;
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
{var vec__47185 = node_spec;var tag = cljs.core.nth.call(null,vec__47185,0,null);var vec__47186 = cljs.core.nthnext.call(null,vec__47185,1);var m = cljs.core.nth.call(null,vec__47186,0,null);var ms = cljs.core.nthnext.call(null,vec__47186,1);var more = vec__47186;var vec__47187 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__47187,0,null);var segments = cljs.core.nthnext.call(null,vec__47187,1);var id = cljs.core.some.call(null,((function (vec__47185,tag,vec__47186,m,ms,more,vec__47187,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__47185,tag,vec__47186,m,ms,more,vec__47187,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__47185,tag,vec__47186,m,ms,more,vec__47187,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__47185,tag,vec__47186,m,ms,more,vec__47187,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__47188_47194 = cljs.core.seq.call(null,attrs__$2);var chunk__47189_47195 = null;var count__47190_47196 = 0;var i__47191_47197 = 0;while(true){
if((i__47191_47197 < count__47190_47196))
{var vec__47192_47198 = cljs.core._nth.call(null,chunk__47189_47195,i__47191_47197);var key_47199 = cljs.core.nth.call(null,vec__47192_47198,0,null);var val_47200 = cljs.core.nth.call(null,vec__47192_47198,1,null);node.setAttribute(cljs.core.name.call(null,key_47199),val_47200);
{
var G__47201 = seq__47188_47194;
var G__47202 = chunk__47189_47195;
var G__47203 = count__47190_47196;
var G__47204 = (i__47191_47197 + 1);
seq__47188_47194 = G__47201;
chunk__47189_47195 = G__47202;
count__47190_47196 = G__47203;
i__47191_47197 = G__47204;
continue;
}
} else
{var temp__4098__auto___47205 = cljs.core.seq.call(null,seq__47188_47194);if(temp__4098__auto___47205)
{var seq__47188_47206__$1 = temp__4098__auto___47205;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47188_47206__$1))
{var c__15907__auto___47207 = cljs.core.chunk_first.call(null,seq__47188_47206__$1);{
var G__47208 = cljs.core.chunk_rest.call(null,seq__47188_47206__$1);
var G__47209 = c__15907__auto___47207;
var G__47210 = cljs.core.count.call(null,c__15907__auto___47207);
var G__47211 = 0;
seq__47188_47194 = G__47208;
chunk__47189_47195 = G__47209;
count__47190_47196 = G__47210;
i__47191_47197 = G__47211;
continue;
}
} else
{var vec__47193_47212 = cljs.core.first.call(null,seq__47188_47206__$1);var key_47213 = cljs.core.nth.call(null,vec__47193_47212,0,null);var val_47214 = cljs.core.nth.call(null,vec__47193_47212,1,null);node.setAttribute(cljs.core.name.call(null,key_47213),val_47214);
{
var G__47215 = cljs.core.next.call(null,seq__47188_47206__$1);
var G__47216 = null;
var G__47217 = 0;
var G__47218 = 0;
seq__47188_47194 = G__47215;
chunk__47189_47195 = G__47216;
count__47190_47196 = G__47217;
i__47191_47197 = G__47218;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__15171__auto__ = el.checked;if(cljs.core.truth_(and__15171__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__15171__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__47219_SHARP_){return p1__47219_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__47220_SHARP_){return p1__47220_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__47222_SHARP_,p2__47221_SHARP_){var G__47225 = p2__47221_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__47225))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__47225))
{return enfocus.core.read_select_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__47225))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__47225))
{var G__47226 = p2__47221_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__47226))
{return enfocus.core.read_checked_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__47226))
{return enfocus.core.read_checked_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__47226))
{return enfocus.core.read_simple_input.call(null,p2__47221_SHARP_,p1__47222_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__47222_SHARP_;
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
{return p1__47222_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__47227_SHARP_){if((p1__47227_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__47227_SHARP_);
} else
{if((p1__47227_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__47227_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__47227_SHARP_))
{return create_sel_str.call(null,p1__47227_SHARP_);
} else
{if(typeof p1__47227_SHARP_ === 'string')
{return p1__47227_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__15183__auto__ = func;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__15171__auto__ = !((node == null));if(and__15171__auto__)
{var G__47238 = node;if(G__47238)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__47238.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__47238.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__47238);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__47238);
}
} else
{return and__15171__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__47239 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__47239,0,null);var trans__$1 = cljs.core.nth.call(null,vec__47239,1,null);var seq__47240 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__47241 = null;var count__47242 = 0;var i__47243 = 0;while(true){
if((i__47243 < count__47242))
{var vec__47244 = cljs.core._nth.call(null,chunk__47241,i__47243);var sel = cljs.core.nth.call(null,vec__47244,0,null);var t = cljs.core.nth.call(null,vec__47244,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__47246 = seq__47240;
var G__47247 = chunk__47241;
var G__47248 = count__47242;
var G__47249 = (i__47243 + 1);
seq__47240 = G__47246;
chunk__47241 = G__47247;
count__47242 = G__47248;
i__47243 = G__47249;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47240);if(temp__4098__auto__)
{var seq__47240__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47240__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47240__$1);{
var G__47250 = cljs.core.chunk_rest.call(null,seq__47240__$1);
var G__47251 = c__15907__auto__;
var G__47252 = cljs.core.count.call(null,c__15907__auto__);
var G__47253 = 0;
seq__47240 = G__47250;
chunk__47241 = G__47251;
count__47242 = G__47252;
i__47243 = G__47253;
continue;
}
} else
{var vec__47245 = cljs.core.first.call(null,seq__47240__$1);var sel = cljs.core.nth.call(null,vec__47245,0,null);var t = cljs.core.nth.call(null,vec__47245,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__47254 = cljs.core.next.call(null,seq__47240__$1);
var G__47255 = null;
var G__47256 = 0;
var G__47257 = 0;
seq__47240 = G__47254;
chunk__47241 = G__47255;
count__47242 = G__47256;
i__47243 = G__47257;
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
i_at.cljs$lang$applyTo = (function (arglist__47258){
var id_mask = cljs.core.first(arglist__47258);
arglist__47258 = cljs.core.next(arglist__47258);
var node = cljs.core.first(arglist__47258);
var trans = cljs.core.rest(arglist__47258);
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
at.cljs$lang$applyTo = (function (arglist__47259){
var node = cljs.core.first(arglist__47259);
var trans = cljs.core.rest(arglist__47259);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__47264 = node;if(G__47264)
{var bit__15809__auto__ = null;if(cljs.core.truth_((function (){var or__15183__auto__ = bit__15809__auto__;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return G__47264.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__47264.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__47264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__47264);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__47265 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__47265,0,null);var trans__$1 = cljs.core.nth.call(null,vec__47265,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__47266){var vec__47267 = p__47266;var ky = cljs.core.nth.call(null,vec__47267,0,null);var sel = cljs.core.nth.call(null,vec__47267,1,null);var ext = cljs.core.nth.call(null,vec__47267,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__47268){
var node = cljs.core.first(arglist__47268);
var trans = cljs.core.rest(arglist__47268);
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