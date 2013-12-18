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
enfocus.core.ISelector = (function (){var obj85817 = {};return obj85817;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.select[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.select["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
enfocus.core.ITransform = (function (){var obj85819 = {};return obj85819;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__8216__auto__ = this$;if(and__8216__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__8216__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8836__auto__ = (((this$ == null))?null:this$);return (function (){var or__8228__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__8216__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8216__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__85820_SHARP_){if(typeof p1__85820_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__85820_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__85820_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__85827_85833 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__85828_85834 = null;var count__85829_85835 = 0;var i__85830_85836 = 0;while(true){
if((i__85830_85836 < count__85829_85835))
{var vec__85831_85837 = cljs.core._nth.call(null,chunk__85828_85834,i__85830_85836);var attr_85838 = cljs.core.nth.call(null,vec__85831_85837,0,null);var value_85839 = cljs.core.nth.call(null,vec__85831_85837,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_85838),value_85839);
{
var G__85840 = seq__85827_85833;
var G__85841 = chunk__85828_85834;
var G__85842 = count__85829_85835;
var G__85843 = (i__85830_85836 + 1);
seq__85827_85833 = G__85840;
chunk__85828_85834 = G__85841;
count__85829_85835 = G__85842;
i__85830_85836 = G__85843;
continue;
}
} else
{var temp__4092__auto___85844 = cljs.core.seq.call(null,seq__85827_85833);if(temp__4092__auto___85844)
{var seq__85827_85845__$1 = temp__4092__auto___85844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85827_85845__$1))
{var c__8957__auto___85846 = cljs.core.chunk_first.call(null,seq__85827_85845__$1);{
var G__85847 = cljs.core.chunk_rest.call(null,seq__85827_85845__$1);
var G__85848 = c__8957__auto___85846;
var G__85849 = cljs.core.count.call(null,c__8957__auto___85846);
var G__85850 = 0;
seq__85827_85833 = G__85847;
chunk__85828_85834 = G__85848;
count__85829_85835 = G__85849;
i__85830_85836 = G__85850;
continue;
}
} else
{var vec__85832_85851 = cljs.core.first.call(null,seq__85827_85845__$1);var attr_85852 = cljs.core.nth.call(null,vec__85832_85851,0,null);var value_85853 = cljs.core.nth.call(null,vec__85832_85851,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_85852),value_85853);
{
var G__85854 = cljs.core.next.call(null,seq__85827_85845__$1);
var G__85855 = null;
var G__85856 = 0;
var G__85857 = 0;
seq__85827_85833 = G__85854;
chunk__85828_85834 = G__85855;
count__85829_85835 = G__85856;
i__85830_85836 = G__85857;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__85862 = cljs.core.seq.call(null,values);var chunk__85863 = null;var count__85864 = 0;var i__85865 = 0;while(true){
if((i__85865 < count__85864))
{var attr = cljs.core._nth.call(null,chunk__85863,i__85865);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__85866 = seq__85862;
var G__85867 = chunk__85863;
var G__85868 = count__85864;
var G__85869 = (i__85865 + 1);
seq__85862 = G__85866;
chunk__85863 = G__85867;
count__85864 = G__85868;
i__85865 = G__85869;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__85862);if(temp__4092__auto__)
{var seq__85862__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85862__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__85862__$1);{
var G__85870 = cljs.core.chunk_rest.call(null,seq__85862__$1);
var G__85871 = c__8957__auto__;
var G__85872 = cljs.core.count.call(null,c__8957__auto__);
var G__85873 = 0;
seq__85862 = G__85870;
chunk__85863 = G__85871;
count__85864 = G__85872;
i__85865 = G__85873;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__85862__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__85874 = cljs.core.next.call(null,seq__85862__$1);
var G__85875 = null;
var G__85876 = 0;
var G__85877 = 0;
seq__85862 = G__85874;
chunk__85863 = G__85875;
count__85864 = G__85876;
i__85865 = G__85877;
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
{var seq__85884_85890 = cljs.core.seq.call(null,ats);var chunk__85885_85891 = null;var count__85886_85892 = 0;var i__85887_85893 = 0;while(true){
if((i__85887_85893 < count__85886_85892))
{var vec__85888_85894 = cljs.core._nth.call(null,chunk__85885_85891,i__85887_85893);var k_85895 = cljs.core.nth.call(null,vec__85888_85894,0,null);var v_85896 = cljs.core.nth.call(null,vec__85888_85894,1,null);add_map_attrs.call(null,elem,k_85895,v_85896);
{
var G__85897 = seq__85884_85890;
var G__85898 = chunk__85885_85891;
var G__85899 = count__85886_85892;
var G__85900 = (i__85887_85893 + 1);
seq__85884_85890 = G__85897;
chunk__85885_85891 = G__85898;
count__85886_85892 = G__85899;
i__85887_85893 = G__85900;
continue;
}
} else
{var temp__4092__auto___85901 = cljs.core.seq.call(null,seq__85884_85890);if(temp__4092__auto___85901)
{var seq__85884_85902__$1 = temp__4092__auto___85901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85884_85902__$1))
{var c__8957__auto___85903 = cljs.core.chunk_first.call(null,seq__85884_85902__$1);{
var G__85904 = cljs.core.chunk_rest.call(null,seq__85884_85902__$1);
var G__85905 = c__8957__auto___85903;
var G__85906 = cljs.core.count.call(null,c__8957__auto___85903);
var G__85907 = 0;
seq__85884_85890 = G__85904;
chunk__85885_85891 = G__85905;
count__85886_85892 = G__85906;
i__85887_85893 = G__85907;
continue;
}
} else
{var vec__85889_85908 = cljs.core.first.call(null,seq__85884_85902__$1);var k_85909 = cljs.core.nth.call(null,vec__85889_85908,0,null);var v_85910 = cljs.core.nth.call(null,vec__85889_85908,1,null);add_map_attrs.call(null,elem,k_85909,v_85910);
{
var G__85911 = cljs.core.next.call(null,seq__85884_85902__$1);
var G__85912 = null;
var G__85913 = 0;
var G__85914 = 0;
seq__85884_85890 = G__85911;
chunk__85885_85891 = G__85912;
count__85886_85892 = G__85913;
i__85887_85893 = G__85914;
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
var seq__85919_85923 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__85920_85924 = null;var count__85921_85925 = 0;var i__85922_85926 = 0;while(true){
if((i__85922_85926 < count__85921_85925))
{var node_85927 = cljs.core._nth.call(null,chunk__85920_85924,i__85922_85926);goog.dom.appendChild(div,node_85927);
{
var G__85928 = seq__85919_85923;
var G__85929 = chunk__85920_85924;
var G__85930 = count__85921_85925;
var G__85931 = (i__85922_85926 + 1);
seq__85919_85923 = G__85928;
chunk__85920_85924 = G__85929;
count__85921_85925 = G__85930;
i__85922_85926 = G__85931;
continue;
}
} else
{var temp__4092__auto___85932 = cljs.core.seq.call(null,seq__85919_85923);if(temp__4092__auto___85932)
{var seq__85919_85933__$1 = temp__4092__auto___85932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85919_85933__$1))
{var c__8957__auto___85934 = cljs.core.chunk_first.call(null,seq__85919_85933__$1);{
var G__85935 = cljs.core.chunk_rest.call(null,seq__85919_85933__$1);
var G__85936 = c__8957__auto___85934;
var G__85937 = cljs.core.count.call(null,c__8957__auto___85934);
var G__85938 = 0;
seq__85919_85923 = G__85935;
chunk__85920_85924 = G__85936;
count__85921_85925 = G__85937;
i__85922_85926 = G__85938;
continue;
}
} else
{var node_85939 = cljs.core.first.call(null,seq__85919_85933__$1);goog.dom.appendChild(div,node_85939);
{
var G__85940 = cljs.core.next.call(null,seq__85919_85933__$1);
var G__85941 = null;
var G__85942 = 0;
var G__85943 = 0;
seq__85919_85923 = G__85940;
chunk__85920_85924 = G__85941;
count__85921_85925 = G__85942;
i__85922_85926 = G__85943;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__85944_SHARP_){var id = p1__85944_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__85944_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__85946 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__85946,0,null);var txt = cljs.core.nth.call(null,vec__85946,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__85951_85955 = cljs.core.seq.call(null,dfa);var chunk__85952_85956 = null;var count__85953_85957 = 0;var i__85954_85958 = 0;while(true){
if((i__85954_85958 < count__85953_85957))
{var df_85959 = cljs.core._nth.call(null,chunk__85952_85956,i__85954_85958);goog.dom.append(frag,df_85959);
{
var G__85960 = seq__85951_85955;
var G__85961 = chunk__85952_85956;
var G__85962 = count__85953_85957;
var G__85963 = (i__85954_85958 + 1);
seq__85951_85955 = G__85960;
chunk__85952_85956 = G__85961;
count__85953_85957 = G__85962;
i__85954_85958 = G__85963;
continue;
}
} else
{var temp__4092__auto___85964 = cljs.core.seq.call(null,seq__85951_85955);if(temp__4092__auto___85964)
{var seq__85951_85965__$1 = temp__4092__auto___85964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85951_85965__$1))
{var c__8957__auto___85966 = cljs.core.chunk_first.call(null,seq__85951_85965__$1);{
var G__85967 = cljs.core.chunk_rest.call(null,seq__85951_85965__$1);
var G__85968 = c__8957__auto___85966;
var G__85969 = cljs.core.count.call(null,c__8957__auto___85966);
var G__85970 = 0;
seq__85951_85955 = G__85967;
chunk__85952_85956 = G__85968;
count__85953_85957 = G__85969;
i__85954_85958 = G__85970;
continue;
}
} else
{var df_85971 = cljs.core.first.call(null,seq__85951_85965__$1);goog.dom.append(frag,df_85971);
{
var G__85972 = cljs.core.next.call(null,seq__85951_85965__$1);
var G__85973 = null;
var G__85974 = 0;
var G__85975 = 0;
seq__85951_85955 = G__85972;
chunk__85952_85956 = G__85973;
count__85953_85957 = G__85974;
i__85954_85958 = G__85975;
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
{var vec__85978 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__85978,0,null);var tdom = cljs.core.nth.call(null,vec__85978,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__85978,sym,tdom,dom,tsnip){
return (function (p1__85976_SHARP_){return p1__85976_SHARP_.outerHTML;
});})(vec__85978,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t85982 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t85982 = (function (trans,func,extr_multi_node,meta85983){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta85983 = meta85983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t85982.cljs$lang$type = true;
enfocus.core.t85982.cljs$lang$ctorStr = "enfocus.core/t85982";
enfocus.core.t85982.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t85982");
});
enfocus.core.t85982.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t85982.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t85982.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t85982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85984){var self__ = this;
var _85984__$1 = this;return self__.meta85983;
});
enfocus.core.t85982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85984,meta85983__$1){var self__ = this;
var _85984__$1 = this;return (new enfocus.core.t85982(self__.trans,self__.func,self__.extr_multi_node,meta85983__$1));
});
enfocus.core.__GT_t85982 = (function __GT_t85982(trans__$1,func__$1,extr_multi_node__$1,meta85983){return (new enfocus.core.t85982(trans__$1,func__$1,extr_multi_node__$1,meta85983));
});
}
return (new enfocus.core.t85982(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t85992 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t85992 = (function (trans,func,multi_node_chain,meta85993){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta85993 = meta85993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t85992.cljs$lang$type = true;
enfocus.core.t85992.cljs$lang$ctorStr = "enfocus.core/t85992";
enfocus.core.t85992.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t85992");
});
enfocus.core.t85992.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t85992.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t85992.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t85992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85994){var self__ = this;
var _85994__$1 = this;return self__.meta85993;
});
enfocus.core.t85992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85994,meta85993__$1){var self__ = this;
var _85994__$1 = this;return (new enfocus.core.t85992(self__.trans,self__.func,self__.multi_node_chain,meta85993__$1));
});
enfocus.core.__GT_t85992 = (function __GT_t85992(trans__$1,func__$1,multi_node_chain__$1,meta85993){return (new enfocus.core.t85992(trans__$1,func__$1,multi_node_chain__$1,meta85993));
});
}
return (new enfocus.core.t85992(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__85985_SHARP_){return domina.nodes.call(null,p1__85985_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t85995 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t85995 = (function (trans,func,values,multi_node_chain,meta85996){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta85996 = meta85996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t85995.cljs$lang$type = true;
enfocus.core.t85995.cljs$lang$ctorStr = "enfocus.core/t85995";
enfocus.core.t85995.cljs$lang$ctorPrWriter = (function (this__8777__auto__,writer__8778__auto__,opt__8779__auto__){return cljs.core._write.call(null,writer__8778__auto__,"enfocus.core/t85995");
});
enfocus.core.t85995.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t85995.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t85995.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t85995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85997){var self__ = this;
var _85997__$1 = this;return self__.meta85996;
});
enfocus.core.t85995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85997,meta85996__$1){var self__ = this;
var _85997__$1 = this;return (new enfocus.core.t85995(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta85996__$1));
});
enfocus.core.__GT_t85995 = (function __GT_t85995(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta85996){return (new enfocus.core.t85995(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta85996));
});
}
return (new enfocus.core.t85995(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__85998_SHARP_,p2__85999_SHARP_){domina.destroy_children_BANG_.call(null,p1__85998_SHARP_);
return domina.append_BANG_.call(null,p1__85998_SHARP_,p2__85999_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__86000){
var values = cljs.core.seq(arglist__86000);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__86001_SHARP_){return domina.set_html_BANG_.call(null,p1__86001_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__86002_SHARP_){var seq__86009 = cljs.core.seq.call(null,pairs);var chunk__86010 = null;var count__86011 = 0;var i__86012 = 0;while(true){
if((i__86012 < count__86011))
{var vec__86013 = cljs.core._nth.call(null,chunk__86010,i__86012);var name = cljs.core.nth.call(null,vec__86013,0,null);var value = cljs.core.nth.call(null,vec__86013,1,null);domina.set_attr_BANG_.call(null,p1__86002_SHARP_,name,value);
{
var G__86015 = seq__86009;
var G__86016 = chunk__86010;
var G__86017 = count__86011;
var G__86018 = (i__86012 + 1);
seq__86009 = G__86015;
chunk__86010 = G__86016;
count__86011 = G__86017;
i__86012 = G__86018;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86009);if(temp__4092__auto__)
{var seq__86009__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86009__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86009__$1);{
var G__86019 = cljs.core.chunk_rest.call(null,seq__86009__$1);
var G__86020 = c__8957__auto__;
var G__86021 = cljs.core.count.call(null,c__8957__auto__);
var G__86022 = 0;
seq__86009 = G__86019;
chunk__86010 = G__86020;
count__86011 = G__86021;
i__86012 = G__86022;
continue;
}
} else
{var vec__86014 = cljs.core.first.call(null,seq__86009__$1);var name = cljs.core.nth.call(null,vec__86014,0,null);var value = cljs.core.nth.call(null,vec__86014,1,null);domina.set_attr_BANG_.call(null,p1__86002_SHARP_,name,value);
{
var G__86023 = cljs.core.next.call(null,seq__86009__$1);
var G__86024 = null;
var G__86025 = 0;
var G__86026 = 0;
seq__86009 = G__86023;
chunk__86010 = G__86024;
count__86011 = G__86025;
i__86012 = G__86026;
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
set_attr.cljs$lang$applyTo = (function (arglist__86027){
var values = cljs.core.seq(arglist__86027);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__86028_SHARP_){var seq__86033 = cljs.core.seq.call(null,values);var chunk__86034 = null;var count__86035 = 0;var i__86036 = 0;while(true){
if((i__86036 < count__86035))
{var name = cljs.core._nth.call(null,chunk__86034,i__86036);domina.remove_attr_BANG_.call(null,p1__86028_SHARP_,name);
{
var G__86037 = seq__86033;
var G__86038 = chunk__86034;
var G__86039 = count__86035;
var G__86040 = (i__86036 + 1);
seq__86033 = G__86037;
chunk__86034 = G__86038;
count__86035 = G__86039;
i__86036 = G__86040;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86033);if(temp__4092__auto__)
{var seq__86033__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86033__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86033__$1);{
var G__86041 = cljs.core.chunk_rest.call(null,seq__86033__$1);
var G__86042 = c__8957__auto__;
var G__86043 = cljs.core.count.call(null,c__8957__auto__);
var G__86044 = 0;
seq__86033 = G__86041;
chunk__86034 = G__86042;
count__86035 = G__86043;
i__86036 = G__86044;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__86033__$1);domina.remove_attr_BANG_.call(null,p1__86028_SHARP_,name);
{
var G__86045 = cljs.core.next.call(null,seq__86033__$1);
var G__86046 = null;
var G__86047 = 0;
var G__86048 = 0;
seq__86033 = G__86045;
chunk__86034 = G__86046;
count__86035 = G__86047;
i__86036 = G__86048;
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
remove_attr.cljs$lang$applyTo = (function (arglist__86049){
var values = cljs.core.seq(arglist__86049);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__86052){var vec__86053 = p__86052;var n = cljs.core.nth.call(null,vec__86053,0,null);var v = cljs.core.nth.call(null,vec__86053,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__86054){
var forms = cljs.core.seq(arglist__86054);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__86055_SHARP_){var seq__86060 = cljs.core.seq.call(null,values);var chunk__86061 = null;var count__86062 = 0;var i__86063 = 0;while(true){
if((i__86063 < count__86062))
{var val = cljs.core._nth.call(null,chunk__86061,i__86063);domina.add_class_BANG_.call(null,p1__86055_SHARP_,val);
{
var G__86064 = seq__86060;
var G__86065 = chunk__86061;
var G__86066 = count__86062;
var G__86067 = (i__86063 + 1);
seq__86060 = G__86064;
chunk__86061 = G__86065;
count__86062 = G__86066;
i__86063 = G__86067;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86060);if(temp__4092__auto__)
{var seq__86060__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86060__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86060__$1);{
var G__86068 = cljs.core.chunk_rest.call(null,seq__86060__$1);
var G__86069 = c__8957__auto__;
var G__86070 = cljs.core.count.call(null,c__8957__auto__);
var G__86071 = 0;
seq__86060 = G__86068;
chunk__86061 = G__86069;
count__86062 = G__86070;
i__86063 = G__86071;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__86060__$1);domina.add_class_BANG_.call(null,p1__86055_SHARP_,val);
{
var G__86072 = cljs.core.next.call(null,seq__86060__$1);
var G__86073 = null;
var G__86074 = 0;
var G__86075 = 0;
seq__86060 = G__86072;
chunk__86061 = G__86073;
count__86062 = G__86074;
i__86063 = G__86075;
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
add_class.cljs$lang$applyTo = (function (arglist__86076){
var values = cljs.core.seq(arglist__86076);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__86077_SHARP_){var seq__86082 = cljs.core.seq.call(null,values);var chunk__86083 = null;var count__86084 = 0;var i__86085 = 0;while(true){
if((i__86085 < count__86084))
{var val = cljs.core._nth.call(null,chunk__86083,i__86085);domina.remove_class_BANG_.call(null,p1__86077_SHARP_,val);
{
var G__86086 = seq__86082;
var G__86087 = chunk__86083;
var G__86088 = count__86084;
var G__86089 = (i__86085 + 1);
seq__86082 = G__86086;
chunk__86083 = G__86087;
count__86084 = G__86088;
i__86085 = G__86089;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86082);if(temp__4092__auto__)
{var seq__86082__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86082__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86082__$1);{
var G__86090 = cljs.core.chunk_rest.call(null,seq__86082__$1);
var G__86091 = c__8957__auto__;
var G__86092 = cljs.core.count.call(null,c__8957__auto__);
var G__86093 = 0;
seq__86082 = G__86090;
chunk__86083 = G__86091;
count__86084 = G__86092;
i__86085 = G__86093;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__86082__$1);domina.remove_class_BANG_.call(null,p1__86077_SHARP_,val);
{
var G__86094 = cljs.core.next.call(null,seq__86082__$1);
var G__86095 = null;
var G__86096 = 0;
var G__86097 = 0;
seq__86082 = G__86094;
chunk__86083 = G__86095;
count__86084 = G__86096;
i__86085 = G__86097;
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
remove_class.cljs$lang$applyTo = (function (arglist__86098){
var values = cljs.core.seq(arglist__86098);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__86099_SHARP_){return domina.set_classes_BANG_.call(null,p1__86099_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__86100){
var values = cljs.core.seq(arglist__86100);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__86105 = cljs.core.seq.call(null,forms);var chunk__86106 = null;var count__86107 = 0;var i__86108 = 0;while(true){
if((i__86108 < count__86107))
{var fun = cljs.core._nth.call(null,chunk__86106,i__86108);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__86109 = seq__86105;
var G__86110 = chunk__86106;
var G__86111 = count__86107;
var G__86112 = (i__86108 + 1);
seq__86105 = G__86109;
chunk__86106 = G__86110;
count__86107 = G__86111;
i__86108 = G__86112;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86105);if(temp__4092__auto__)
{var seq__86105__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86105__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86105__$1);{
var G__86113 = cljs.core.chunk_rest.call(null,seq__86105__$1);
var G__86114 = c__8957__auto__;
var G__86115 = cljs.core.count.call(null,c__8957__auto__);
var G__86116 = 0;
seq__86105 = G__86113;
chunk__86106 = G__86114;
count__86107 = G__86115;
i__86108 = G__86116;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__86105__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__86117 = cljs.core.next.call(null,seq__86105__$1);
var G__86118 = null;
var G__86119 = 0;
var G__86120 = 0;
seq__86105 = G__86117;
chunk__86106 = G__86118;
count__86107 = G__86119;
i__86108 = G__86120;
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
do__GT_.cljs$lang$applyTo = (function (arglist__86121){
var forms = cljs.core.seq(arglist__86121);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__86122_SHARP_,p2__86123_SHARP_){return domina.append_BANG_.call(null,p1__86122_SHARP_,p2__86123_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__86124){
var values = cljs.core.seq(arglist__86124);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__86125_SHARP_,p2__86126_SHARP_){return domina.prepend_BANG_.call(null,p1__86125_SHARP_,p2__86126_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__86127){
var values = cljs.core.seq(arglist__86127);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__86128_SHARP_,p2__86129_SHARP_){return domina.insert_before_BANG_.call(null,p1__86128_SHARP_,p2__86129_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__86130){
var values = cljs.core.seq(arglist__86130);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__86131_SHARP_,p2__86132_SHARP_){return domina.insert_after_BANG_.call(null,p1__86131_SHARP_,p2__86132_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__86133){
var values = cljs.core.seq(arglist__86133);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__86134_SHARP_,p2__86135_SHARP_){return domina.swap_content_BANG_.call(null,p1__86134_SHARP_,p2__86135_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__86136){
var values = cljs.core.seq(arglist__86136);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__86137_SHARP_){return domina.detach_BANG_.call(null,p1__86137_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__86138_SHARP_){var seq__86145 = cljs.core.seq.call(null,pairs);var chunk__86146 = null;var count__86147 = 0;var i__86148 = 0;while(true){
if((i__86148 < count__86147))
{var vec__86149 = cljs.core._nth.call(null,chunk__86146,i__86148);var name = cljs.core.nth.call(null,vec__86149,0,null);var value = cljs.core.nth.call(null,vec__86149,1,null);domina.set_style_BANG_.call(null,p1__86138_SHARP_,name,value);
{
var G__86151 = seq__86145;
var G__86152 = chunk__86146;
var G__86153 = count__86147;
var G__86154 = (i__86148 + 1);
seq__86145 = G__86151;
chunk__86146 = G__86152;
count__86147 = G__86153;
i__86148 = G__86154;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86145);if(temp__4092__auto__)
{var seq__86145__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86145__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86145__$1);{
var G__86155 = cljs.core.chunk_rest.call(null,seq__86145__$1);
var G__86156 = c__8957__auto__;
var G__86157 = cljs.core.count.call(null,c__8957__auto__);
var G__86158 = 0;
seq__86145 = G__86155;
chunk__86146 = G__86156;
count__86147 = G__86157;
i__86148 = G__86158;
continue;
}
} else
{var vec__86150 = cljs.core.first.call(null,seq__86145__$1);var name = cljs.core.nth.call(null,vec__86150,0,null);var value = cljs.core.nth.call(null,vec__86150,1,null);domina.set_style_BANG_.call(null,p1__86138_SHARP_,name,value);
{
var G__86159 = cljs.core.next.call(null,seq__86145__$1);
var G__86160 = null;
var G__86161 = 0;
var G__86162 = 0;
seq__86145 = G__86159;
chunk__86146 = G__86160;
count__86147 = G__86161;
i__86148 = G__86162;
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
set_style.cljs$lang$applyTo = (function (arglist__86163){
var values = cljs.core.seq(arglist__86163);
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
remove_style.cljs$lang$applyTo = (function (arglist__86164){
var values = cljs.core.seq(arglist__86164);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__86165_SHARP_){return domina.set_data_BANG_.call(null,p1__86165_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__86166){
var ttime = cljs.core.first(arglist__86166);
var funcs = cljs.core.rest(arglist__86166);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__86168_SHARP_,p2__86167_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__86167_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__86193_86201 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__86194_86202 = null;var count__86195_86203 = 0;var i__86196_86204 = 0;while(true){
if((i__86196_86204 < count__86195_86203))
{var idx_86205 = cljs.core._nth.call(null,chunk__86194_86202,i__86196_86204);var attr_86206 = pnod.attributes.item(idx_86205);if(cljs.core.truth_(attr_86206.specified))
{attr_86206.value = rep_str.call(null,attr_86206.value);
} else
{}
{
var G__86207 = seq__86193_86201;
var G__86208 = chunk__86194_86202;
var G__86209 = count__86195_86203;
var G__86210 = (i__86196_86204 + 1);
seq__86193_86201 = G__86207;
chunk__86194_86202 = G__86208;
count__86195_86203 = G__86209;
i__86196_86204 = G__86210;
continue;
}
} else
{var temp__4092__auto___86211 = cljs.core.seq.call(null,seq__86193_86201);if(temp__4092__auto___86211)
{var seq__86193_86212__$1 = temp__4092__auto___86211;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86193_86212__$1))
{var c__8957__auto___86213 = cljs.core.chunk_first.call(null,seq__86193_86212__$1);{
var G__86214 = cljs.core.chunk_rest.call(null,seq__86193_86212__$1);
var G__86215 = c__8957__auto___86213;
var G__86216 = cljs.core.count.call(null,c__8957__auto___86213);
var G__86217 = 0;
seq__86193_86201 = G__86214;
chunk__86194_86202 = G__86215;
count__86195_86203 = G__86216;
i__86196_86204 = G__86217;
continue;
}
} else
{var idx_86218 = cljs.core.first.call(null,seq__86193_86212__$1);var attr_86219 = pnod.attributes.item(idx_86218);if(cljs.core.truth_(attr_86219.specified))
{attr_86219.value = rep_str.call(null,attr_86219.value);
} else
{}
{
var G__86220 = cljs.core.next.call(null,seq__86193_86212__$1);
var G__86221 = null;
var G__86222 = 0;
var G__86223 = 0;
seq__86193_86201 = G__86220;
chunk__86194_86202 = G__86221;
count__86195_86203 = G__86222;
i__86196_86204 = G__86223;
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
{var seq__86197 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__86198 = null;var count__86199 = 0;var i__86200 = 0;while(true){
if((i__86200 < count__86199))
{var cnode = cljs.core._nth.call(null,chunk__86198,i__86200);rep_node.call(null,cnode);
{
var G__86224 = seq__86197;
var G__86225 = chunk__86198;
var G__86226 = count__86199;
var G__86227 = (i__86200 + 1);
seq__86197 = G__86224;
chunk__86198 = G__86225;
count__86199 = G__86226;
i__86200 = G__86227;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86197);if(temp__4092__auto__)
{var seq__86197__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86197__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86197__$1);{
var G__86228 = cljs.core.chunk_rest.call(null,seq__86197__$1);
var G__86229 = c__8957__auto__;
var G__86230 = cljs.core.count.call(null,c__8957__auto__);
var G__86231 = 0;
seq__86197 = G__86228;
chunk__86198 = G__86229;
count__86199 = G__86230;
i__86200 = G__86231;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__86197__$1);rep_node.call(null,cnode);
{
var G__86232 = cljs.core.next.call(null,seq__86197__$1);
var G__86233 = null;
var G__86234 = 0;
var G__86235 = 0;
seq__86197 = G__86232;
chunk__86198 = G__86233;
count__86199 = G__86234;
i__86200 = G__86235;
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
{var vec__86245 = node_spec;var tag = cljs.core.nth.call(null,vec__86245,0,null);var vec__86246 = cljs.core.nthnext.call(null,vec__86245,1);var m = cljs.core.nth.call(null,vec__86246,0,null);var ms = cljs.core.nthnext.call(null,vec__86246,1);var more = vec__86246;var vec__86247 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__86247,0,null);var segments = cljs.core.nthnext.call(null,vec__86247,1);var id = cljs.core.some.call(null,((function (vec__86245,tag,vec__86246,m,ms,more,vec__86247,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__86245,tag,vec__86246,m,ms,more,vec__86247,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__86245,tag,vec__86246,m,ms,more,vec__86247,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__86245,tag,vec__86246,m,ms,more,vec__86247,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__86248_86254 = cljs.core.seq.call(null,attrs__$2);var chunk__86249_86255 = null;var count__86250_86256 = 0;var i__86251_86257 = 0;while(true){
if((i__86251_86257 < count__86250_86256))
{var vec__86252_86258 = cljs.core._nth.call(null,chunk__86249_86255,i__86251_86257);var key_86259 = cljs.core.nth.call(null,vec__86252_86258,0,null);var val_86260 = cljs.core.nth.call(null,vec__86252_86258,1,null);node.setAttribute(cljs.core.name.call(null,key_86259),val_86260);
{
var G__86261 = seq__86248_86254;
var G__86262 = chunk__86249_86255;
var G__86263 = count__86250_86256;
var G__86264 = (i__86251_86257 + 1);
seq__86248_86254 = G__86261;
chunk__86249_86255 = G__86262;
count__86250_86256 = G__86263;
i__86251_86257 = G__86264;
continue;
}
} else
{var temp__4092__auto___86265 = cljs.core.seq.call(null,seq__86248_86254);if(temp__4092__auto___86265)
{var seq__86248_86266__$1 = temp__4092__auto___86265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86248_86266__$1))
{var c__8957__auto___86267 = cljs.core.chunk_first.call(null,seq__86248_86266__$1);{
var G__86268 = cljs.core.chunk_rest.call(null,seq__86248_86266__$1);
var G__86269 = c__8957__auto___86267;
var G__86270 = cljs.core.count.call(null,c__8957__auto___86267);
var G__86271 = 0;
seq__86248_86254 = G__86268;
chunk__86249_86255 = G__86269;
count__86250_86256 = G__86270;
i__86251_86257 = G__86271;
continue;
}
} else
{var vec__86253_86272 = cljs.core.first.call(null,seq__86248_86266__$1);var key_86273 = cljs.core.nth.call(null,vec__86253_86272,0,null);var val_86274 = cljs.core.nth.call(null,vec__86253_86272,1,null);node.setAttribute(cljs.core.name.call(null,key_86273),val_86274);
{
var G__86275 = cljs.core.next.call(null,seq__86248_86266__$1);
var G__86276 = null;
var G__86277 = 0;
var G__86278 = 0;
seq__86248_86254 = G__86275;
chunk__86249_86255 = G__86276;
count__86250_86256 = G__86277;
i__86251_86257 = G__86278;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__8216__auto__ = el.checked;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__8216__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__86279_SHARP_){return p1__86279_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__86280_SHARP_){return p1__86280_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__86282_SHARP_,p2__86281_SHARP_){var G__86285 = p2__86281_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__86285))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__86285))
{return enfocus.core.read_select_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__86285))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__86285))
{var G__86286 = p2__86281_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__86286))
{return enfocus.core.read_checked_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__86286))
{return enfocus.core.read_checked_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__86286))
{return enfocus.core.read_simple_input.call(null,p2__86281_SHARP_,p1__86282_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__86282_SHARP_;
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
{return p1__86282_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__86287_SHARP_){if((p1__86287_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__86287_SHARP_);
} else
{if((p1__86287_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__86287_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__86287_SHARP_))
{return create_sel_str.call(null,p1__86287_SHARP_);
} else
{if(typeof p1__86287_SHARP_ === 'string')
{return p1__86287_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__8228__auto__ = func;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__8216__auto__ = !((node == null));if(and__8216__auto__)
{var G__86298 = node;if(G__86298)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__86298.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__86298.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__86298);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__86298);
}
} else
{return and__8216__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__86299 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__86299,0,null);var trans__$1 = cljs.core.nth.call(null,vec__86299,1,null);var seq__86300 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__86301 = null;var count__86302 = 0;var i__86303 = 0;while(true){
if((i__86303 < count__86302))
{var vec__86304 = cljs.core._nth.call(null,chunk__86301,i__86303);var sel = cljs.core.nth.call(null,vec__86304,0,null);var t = cljs.core.nth.call(null,vec__86304,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__86306 = seq__86300;
var G__86307 = chunk__86301;
var G__86308 = count__86302;
var G__86309 = (i__86303 + 1);
seq__86300 = G__86306;
chunk__86301 = G__86307;
count__86302 = G__86308;
i__86303 = G__86309;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86300);if(temp__4092__auto__)
{var seq__86300__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86300__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86300__$1);{
var G__86310 = cljs.core.chunk_rest.call(null,seq__86300__$1);
var G__86311 = c__8957__auto__;
var G__86312 = cljs.core.count.call(null,c__8957__auto__);
var G__86313 = 0;
seq__86300 = G__86310;
chunk__86301 = G__86311;
count__86302 = G__86312;
i__86303 = G__86313;
continue;
}
} else
{var vec__86305 = cljs.core.first.call(null,seq__86300__$1);var sel = cljs.core.nth.call(null,vec__86305,0,null);var t = cljs.core.nth.call(null,vec__86305,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__86314 = cljs.core.next.call(null,seq__86300__$1);
var G__86315 = null;
var G__86316 = 0;
var G__86317 = 0;
seq__86300 = G__86314;
chunk__86301 = G__86315;
count__86302 = G__86316;
i__86303 = G__86317;
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
i_at.cljs$lang$applyTo = (function (arglist__86318){
var id_mask = cljs.core.first(arglist__86318);
arglist__86318 = cljs.core.next(arglist__86318);
var node = cljs.core.first(arglist__86318);
var trans = cljs.core.rest(arglist__86318);
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
at.cljs$lang$applyTo = (function (arglist__86319){
var node = cljs.core.first(arglist__86319);
var trans = cljs.core.rest(arglist__86319);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__86324 = node;if(G__86324)
{var bit__8859__auto__ = null;if(cljs.core.truth_((function (){var or__8228__auto__ = bit__8859__auto__;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return G__86324.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__86324.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__86324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__86324);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__86325 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__86325,0,null);var trans__$1 = cljs.core.nth.call(null,vec__86325,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__86326){var vec__86327 = p__86326;var ky = cljs.core.nth.call(null,vec__86327,0,null);var sel = cljs.core.nth.call(null,vec__86327,1,null);var ext = cljs.core.nth.call(null,vec__86327,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__86328){
var node = cljs.core.first(arglist__86328);
var trans = cljs.core.rest(arglist__86328);
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