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
enfocus.core.ISelector = (function (){var obj90960 = {};return obj90960;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.select[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.select["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
enfocus.core.ITransform = (function (){var obj90962 = {};return obj90962;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13813__auto__ = this$;if(and__13813__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13813__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14428__auto__ = (((this$ == null))?null:this$);return (function (){var or__13825__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13813__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13813__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__90963_SHARP_){if(typeof p1__90963_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__90963_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__90963_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__90970_90976 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__90971_90977 = null;var count__90972_90978 = 0;var i__90973_90979 = 0;while(true){
if((i__90973_90979 < count__90972_90978))
{var vec__90974_90980 = cljs.core._nth.call(null,chunk__90971_90977,i__90973_90979);var attr_90981 = cljs.core.nth.call(null,vec__90974_90980,0,null);var value_90982 = cljs.core.nth.call(null,vec__90974_90980,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_90981),value_90982);
{
var G__90983 = seq__90970_90976;
var G__90984 = chunk__90971_90977;
var G__90985 = count__90972_90978;
var G__90986 = (i__90973_90979 + 1);
seq__90970_90976 = G__90983;
chunk__90971_90977 = G__90984;
count__90972_90978 = G__90985;
i__90973_90979 = G__90986;
continue;
}
} else
{var temp__4092__auto___90987 = cljs.core.seq.call(null,seq__90970_90976);if(temp__4092__auto___90987)
{var seq__90970_90988__$1 = temp__4092__auto___90987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__90970_90988__$1))
{var c__14549__auto___90989 = cljs.core.chunk_first.call(null,seq__90970_90988__$1);{
var G__90990 = cljs.core.chunk_rest.call(null,seq__90970_90988__$1);
var G__90991 = c__14549__auto___90989;
var G__90992 = cljs.core.count.call(null,c__14549__auto___90989);
var G__90993 = 0;
seq__90970_90976 = G__90990;
chunk__90971_90977 = G__90991;
count__90972_90978 = G__90992;
i__90973_90979 = G__90993;
continue;
}
} else
{var vec__90975_90994 = cljs.core.first.call(null,seq__90970_90988__$1);var attr_90995 = cljs.core.nth.call(null,vec__90975_90994,0,null);var value_90996 = cljs.core.nth.call(null,vec__90975_90994,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_90995),value_90996);
{
var G__90997 = cljs.core.next.call(null,seq__90970_90988__$1);
var G__90998 = null;
var G__90999 = 0;
var G__91000 = 0;
seq__90970_90976 = G__90997;
chunk__90971_90977 = G__90998;
count__90972_90978 = G__90999;
i__90973_90979 = G__91000;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__91005 = cljs.core.seq.call(null,values);var chunk__91006 = null;var count__91007 = 0;var i__91008 = 0;while(true){
if((i__91008 < count__91007))
{var attr = cljs.core._nth.call(null,chunk__91006,i__91008);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__91009 = seq__91005;
var G__91010 = chunk__91006;
var G__91011 = count__91007;
var G__91012 = (i__91008 + 1);
seq__91005 = G__91009;
chunk__91006 = G__91010;
count__91007 = G__91011;
i__91008 = G__91012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91005);if(temp__4092__auto__)
{var seq__91005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91005__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91005__$1);{
var G__91013 = cljs.core.chunk_rest.call(null,seq__91005__$1);
var G__91014 = c__14549__auto__;
var G__91015 = cljs.core.count.call(null,c__14549__auto__);
var G__91016 = 0;
seq__91005 = G__91013;
chunk__91006 = G__91014;
count__91007 = G__91015;
i__91008 = G__91016;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__91005__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__91017 = cljs.core.next.call(null,seq__91005__$1);
var G__91018 = null;
var G__91019 = 0;
var G__91020 = 0;
seq__91005 = G__91017;
chunk__91006 = G__91018;
count__91007 = G__91019;
i__91008 = G__91020;
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
{var seq__91027_91033 = cljs.core.seq.call(null,ats);var chunk__91028_91034 = null;var count__91029_91035 = 0;var i__91030_91036 = 0;while(true){
if((i__91030_91036 < count__91029_91035))
{var vec__91031_91037 = cljs.core._nth.call(null,chunk__91028_91034,i__91030_91036);var k_91038 = cljs.core.nth.call(null,vec__91031_91037,0,null);var v_91039 = cljs.core.nth.call(null,vec__91031_91037,1,null);add_map_attrs.call(null,elem,k_91038,v_91039);
{
var G__91040 = seq__91027_91033;
var G__91041 = chunk__91028_91034;
var G__91042 = count__91029_91035;
var G__91043 = (i__91030_91036 + 1);
seq__91027_91033 = G__91040;
chunk__91028_91034 = G__91041;
count__91029_91035 = G__91042;
i__91030_91036 = G__91043;
continue;
}
} else
{var temp__4092__auto___91044 = cljs.core.seq.call(null,seq__91027_91033);if(temp__4092__auto___91044)
{var seq__91027_91045__$1 = temp__4092__auto___91044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91027_91045__$1))
{var c__14549__auto___91046 = cljs.core.chunk_first.call(null,seq__91027_91045__$1);{
var G__91047 = cljs.core.chunk_rest.call(null,seq__91027_91045__$1);
var G__91048 = c__14549__auto___91046;
var G__91049 = cljs.core.count.call(null,c__14549__auto___91046);
var G__91050 = 0;
seq__91027_91033 = G__91047;
chunk__91028_91034 = G__91048;
count__91029_91035 = G__91049;
i__91030_91036 = G__91050;
continue;
}
} else
{var vec__91032_91051 = cljs.core.first.call(null,seq__91027_91045__$1);var k_91052 = cljs.core.nth.call(null,vec__91032_91051,0,null);var v_91053 = cljs.core.nth.call(null,vec__91032_91051,1,null);add_map_attrs.call(null,elem,k_91052,v_91053);
{
var G__91054 = cljs.core.next.call(null,seq__91027_91045__$1);
var G__91055 = null;
var G__91056 = 0;
var G__91057 = 0;
seq__91027_91033 = G__91054;
chunk__91028_91034 = G__91055;
count__91029_91035 = G__91056;
i__91030_91036 = G__91057;
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
var seq__91062_91066 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__91063_91067 = null;var count__91064_91068 = 0;var i__91065_91069 = 0;while(true){
if((i__91065_91069 < count__91064_91068))
{var node_91070 = cljs.core._nth.call(null,chunk__91063_91067,i__91065_91069);goog.dom.appendChild(div,node_91070);
{
var G__91071 = seq__91062_91066;
var G__91072 = chunk__91063_91067;
var G__91073 = count__91064_91068;
var G__91074 = (i__91065_91069 + 1);
seq__91062_91066 = G__91071;
chunk__91063_91067 = G__91072;
count__91064_91068 = G__91073;
i__91065_91069 = G__91074;
continue;
}
} else
{var temp__4092__auto___91075 = cljs.core.seq.call(null,seq__91062_91066);if(temp__4092__auto___91075)
{var seq__91062_91076__$1 = temp__4092__auto___91075;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91062_91076__$1))
{var c__14549__auto___91077 = cljs.core.chunk_first.call(null,seq__91062_91076__$1);{
var G__91078 = cljs.core.chunk_rest.call(null,seq__91062_91076__$1);
var G__91079 = c__14549__auto___91077;
var G__91080 = cljs.core.count.call(null,c__14549__auto___91077);
var G__91081 = 0;
seq__91062_91066 = G__91078;
chunk__91063_91067 = G__91079;
count__91064_91068 = G__91080;
i__91065_91069 = G__91081;
continue;
}
} else
{var node_91082 = cljs.core.first.call(null,seq__91062_91076__$1);goog.dom.appendChild(div,node_91082);
{
var G__91083 = cljs.core.next.call(null,seq__91062_91076__$1);
var G__91084 = null;
var G__91085 = 0;
var G__91086 = 0;
seq__91062_91066 = G__91083;
chunk__91063_91067 = G__91084;
count__91064_91068 = G__91085;
i__91065_91069 = G__91086;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__91087_SHARP_){var id = p1__91087_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__91087_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__91089 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__91089,0,null);var txt = cljs.core.nth.call(null,vec__91089,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__91094_91098 = cljs.core.seq.call(null,dfa);var chunk__91095_91099 = null;var count__91096_91100 = 0;var i__91097_91101 = 0;while(true){
if((i__91097_91101 < count__91096_91100))
{var df_91102 = cljs.core._nth.call(null,chunk__91095_91099,i__91097_91101);goog.dom.append(frag,df_91102);
{
var G__91103 = seq__91094_91098;
var G__91104 = chunk__91095_91099;
var G__91105 = count__91096_91100;
var G__91106 = (i__91097_91101 + 1);
seq__91094_91098 = G__91103;
chunk__91095_91099 = G__91104;
count__91096_91100 = G__91105;
i__91097_91101 = G__91106;
continue;
}
} else
{var temp__4092__auto___91107 = cljs.core.seq.call(null,seq__91094_91098);if(temp__4092__auto___91107)
{var seq__91094_91108__$1 = temp__4092__auto___91107;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91094_91108__$1))
{var c__14549__auto___91109 = cljs.core.chunk_first.call(null,seq__91094_91108__$1);{
var G__91110 = cljs.core.chunk_rest.call(null,seq__91094_91108__$1);
var G__91111 = c__14549__auto___91109;
var G__91112 = cljs.core.count.call(null,c__14549__auto___91109);
var G__91113 = 0;
seq__91094_91098 = G__91110;
chunk__91095_91099 = G__91111;
count__91096_91100 = G__91112;
i__91097_91101 = G__91113;
continue;
}
} else
{var df_91114 = cljs.core.first.call(null,seq__91094_91108__$1);goog.dom.append(frag,df_91114);
{
var G__91115 = cljs.core.next.call(null,seq__91094_91108__$1);
var G__91116 = null;
var G__91117 = 0;
var G__91118 = 0;
seq__91094_91098 = G__91115;
chunk__91095_91099 = G__91116;
count__91096_91100 = G__91117;
i__91097_91101 = G__91118;
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
{var vec__91121 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__91121,0,null);var tdom = cljs.core.nth.call(null,vec__91121,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__91121,sym,tdom,dom,tsnip){
return (function (p1__91119_SHARP_){return p1__91119_SHARP_.outerHTML;
});})(vec__91121,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t91125 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t91125 = (function (trans,func,extr_multi_node,meta91126){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta91126 = meta91126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t91125.cljs$lang$type = true;
enfocus.core.t91125.cljs$lang$ctorStr = "enfocus.core/t91125";
enfocus.core.t91125.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t91125");
});
enfocus.core.t91125.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t91125.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t91125.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t91125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91127){var self__ = this;
var _91127__$1 = this;return self__.meta91126;
});
enfocus.core.t91125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91127,meta91126__$1){var self__ = this;
var _91127__$1 = this;return (new enfocus.core.t91125(self__.trans,self__.func,self__.extr_multi_node,meta91126__$1));
});
enfocus.core.__GT_t91125 = (function __GT_t91125(trans__$1,func__$1,extr_multi_node__$1,meta91126){return (new enfocus.core.t91125(trans__$1,func__$1,extr_multi_node__$1,meta91126));
});
}
return (new enfocus.core.t91125(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t91135 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t91135 = (function (trans,func,multi_node_chain,meta91136){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta91136 = meta91136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t91135.cljs$lang$type = true;
enfocus.core.t91135.cljs$lang$ctorStr = "enfocus.core/t91135";
enfocus.core.t91135.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t91135");
});
enfocus.core.t91135.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t91135.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t91135.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t91135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91137){var self__ = this;
var _91137__$1 = this;return self__.meta91136;
});
enfocus.core.t91135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91137,meta91136__$1){var self__ = this;
var _91137__$1 = this;return (new enfocus.core.t91135(self__.trans,self__.func,self__.multi_node_chain,meta91136__$1));
});
enfocus.core.__GT_t91135 = (function __GT_t91135(trans__$1,func__$1,multi_node_chain__$1,meta91136){return (new enfocus.core.t91135(trans__$1,func__$1,multi_node_chain__$1,meta91136));
});
}
return (new enfocus.core.t91135(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__91128_SHARP_){return domina.nodes.call(null,p1__91128_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t91138 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t91138 = (function (trans,func,values,multi_node_chain,meta91139){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta91139 = meta91139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t91138.cljs$lang$type = true;
enfocus.core.t91138.cljs$lang$ctorStr = "enfocus.core/t91138";
enfocus.core.t91138.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t91138");
});
enfocus.core.t91138.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t91138.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t91138.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t91138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_91140){var self__ = this;
var _91140__$1 = this;return self__.meta91139;
});
enfocus.core.t91138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_91140,meta91139__$1){var self__ = this;
var _91140__$1 = this;return (new enfocus.core.t91138(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta91139__$1));
});
enfocus.core.__GT_t91138 = (function __GT_t91138(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta91139){return (new enfocus.core.t91138(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta91139));
});
}
return (new enfocus.core.t91138(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91141_SHARP_,p2__91142_SHARP_){domina.destroy_children_BANG_.call(null,p1__91141_SHARP_);
return domina.append_BANG_.call(null,p1__91141_SHARP_,p2__91142_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__91143){
var values = cljs.core.seq(arglist__91143);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__91144_SHARP_){return domina.set_html_BANG_.call(null,p1__91144_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__91145_SHARP_){var seq__91152 = cljs.core.seq.call(null,pairs);var chunk__91153 = null;var count__91154 = 0;var i__91155 = 0;while(true){
if((i__91155 < count__91154))
{var vec__91156 = cljs.core._nth.call(null,chunk__91153,i__91155);var name = cljs.core.nth.call(null,vec__91156,0,null);var value = cljs.core.nth.call(null,vec__91156,1,null);domina.set_attr_BANG_.call(null,p1__91145_SHARP_,name,value);
{
var G__91158 = seq__91152;
var G__91159 = chunk__91153;
var G__91160 = count__91154;
var G__91161 = (i__91155 + 1);
seq__91152 = G__91158;
chunk__91153 = G__91159;
count__91154 = G__91160;
i__91155 = G__91161;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91152);if(temp__4092__auto__)
{var seq__91152__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91152__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91152__$1);{
var G__91162 = cljs.core.chunk_rest.call(null,seq__91152__$1);
var G__91163 = c__14549__auto__;
var G__91164 = cljs.core.count.call(null,c__14549__auto__);
var G__91165 = 0;
seq__91152 = G__91162;
chunk__91153 = G__91163;
count__91154 = G__91164;
i__91155 = G__91165;
continue;
}
} else
{var vec__91157 = cljs.core.first.call(null,seq__91152__$1);var name = cljs.core.nth.call(null,vec__91157,0,null);var value = cljs.core.nth.call(null,vec__91157,1,null);domina.set_attr_BANG_.call(null,p1__91145_SHARP_,name,value);
{
var G__91166 = cljs.core.next.call(null,seq__91152__$1);
var G__91167 = null;
var G__91168 = 0;
var G__91169 = 0;
seq__91152 = G__91166;
chunk__91153 = G__91167;
count__91154 = G__91168;
i__91155 = G__91169;
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
set_attr.cljs$lang$applyTo = (function (arglist__91170){
var values = cljs.core.seq(arglist__91170);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__91171_SHARP_){var seq__91176 = cljs.core.seq.call(null,values);var chunk__91177 = null;var count__91178 = 0;var i__91179 = 0;while(true){
if((i__91179 < count__91178))
{var name = cljs.core._nth.call(null,chunk__91177,i__91179);domina.remove_attr_BANG_.call(null,p1__91171_SHARP_,name);
{
var G__91180 = seq__91176;
var G__91181 = chunk__91177;
var G__91182 = count__91178;
var G__91183 = (i__91179 + 1);
seq__91176 = G__91180;
chunk__91177 = G__91181;
count__91178 = G__91182;
i__91179 = G__91183;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91176);if(temp__4092__auto__)
{var seq__91176__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91176__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91176__$1);{
var G__91184 = cljs.core.chunk_rest.call(null,seq__91176__$1);
var G__91185 = c__14549__auto__;
var G__91186 = cljs.core.count.call(null,c__14549__auto__);
var G__91187 = 0;
seq__91176 = G__91184;
chunk__91177 = G__91185;
count__91178 = G__91186;
i__91179 = G__91187;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__91176__$1);domina.remove_attr_BANG_.call(null,p1__91171_SHARP_,name);
{
var G__91188 = cljs.core.next.call(null,seq__91176__$1);
var G__91189 = null;
var G__91190 = 0;
var G__91191 = 0;
seq__91176 = G__91188;
chunk__91177 = G__91189;
count__91178 = G__91190;
i__91179 = G__91191;
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
remove_attr.cljs$lang$applyTo = (function (arglist__91192){
var values = cljs.core.seq(arglist__91192);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__91195){var vec__91196 = p__91195;var n = cljs.core.nth.call(null,vec__91196,0,null);var v = cljs.core.nth.call(null,vec__91196,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__91197){
var forms = cljs.core.seq(arglist__91197);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__91198_SHARP_){var seq__91203 = cljs.core.seq.call(null,values);var chunk__91204 = null;var count__91205 = 0;var i__91206 = 0;while(true){
if((i__91206 < count__91205))
{var val = cljs.core._nth.call(null,chunk__91204,i__91206);domina.add_class_BANG_.call(null,p1__91198_SHARP_,val);
{
var G__91207 = seq__91203;
var G__91208 = chunk__91204;
var G__91209 = count__91205;
var G__91210 = (i__91206 + 1);
seq__91203 = G__91207;
chunk__91204 = G__91208;
count__91205 = G__91209;
i__91206 = G__91210;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91203);if(temp__4092__auto__)
{var seq__91203__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91203__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91203__$1);{
var G__91211 = cljs.core.chunk_rest.call(null,seq__91203__$1);
var G__91212 = c__14549__auto__;
var G__91213 = cljs.core.count.call(null,c__14549__auto__);
var G__91214 = 0;
seq__91203 = G__91211;
chunk__91204 = G__91212;
count__91205 = G__91213;
i__91206 = G__91214;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__91203__$1);domina.add_class_BANG_.call(null,p1__91198_SHARP_,val);
{
var G__91215 = cljs.core.next.call(null,seq__91203__$1);
var G__91216 = null;
var G__91217 = 0;
var G__91218 = 0;
seq__91203 = G__91215;
chunk__91204 = G__91216;
count__91205 = G__91217;
i__91206 = G__91218;
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
add_class.cljs$lang$applyTo = (function (arglist__91219){
var values = cljs.core.seq(arglist__91219);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__91220_SHARP_){var seq__91225 = cljs.core.seq.call(null,values);var chunk__91226 = null;var count__91227 = 0;var i__91228 = 0;while(true){
if((i__91228 < count__91227))
{var val = cljs.core._nth.call(null,chunk__91226,i__91228);domina.remove_class_BANG_.call(null,p1__91220_SHARP_,val);
{
var G__91229 = seq__91225;
var G__91230 = chunk__91226;
var G__91231 = count__91227;
var G__91232 = (i__91228 + 1);
seq__91225 = G__91229;
chunk__91226 = G__91230;
count__91227 = G__91231;
i__91228 = G__91232;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91225);if(temp__4092__auto__)
{var seq__91225__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91225__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91225__$1);{
var G__91233 = cljs.core.chunk_rest.call(null,seq__91225__$1);
var G__91234 = c__14549__auto__;
var G__91235 = cljs.core.count.call(null,c__14549__auto__);
var G__91236 = 0;
seq__91225 = G__91233;
chunk__91226 = G__91234;
count__91227 = G__91235;
i__91228 = G__91236;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__91225__$1);domina.remove_class_BANG_.call(null,p1__91220_SHARP_,val);
{
var G__91237 = cljs.core.next.call(null,seq__91225__$1);
var G__91238 = null;
var G__91239 = 0;
var G__91240 = 0;
seq__91225 = G__91237;
chunk__91226 = G__91238;
count__91227 = G__91239;
i__91228 = G__91240;
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
remove_class.cljs$lang$applyTo = (function (arglist__91241){
var values = cljs.core.seq(arglist__91241);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__91242_SHARP_){return domina.set_classes_BANG_.call(null,p1__91242_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__91243){
var values = cljs.core.seq(arglist__91243);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__91248 = cljs.core.seq.call(null,forms);var chunk__91249 = null;var count__91250 = 0;var i__91251 = 0;while(true){
if((i__91251 < count__91250))
{var fun = cljs.core._nth.call(null,chunk__91249,i__91251);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__91252 = seq__91248;
var G__91253 = chunk__91249;
var G__91254 = count__91250;
var G__91255 = (i__91251 + 1);
seq__91248 = G__91252;
chunk__91249 = G__91253;
count__91250 = G__91254;
i__91251 = G__91255;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91248);if(temp__4092__auto__)
{var seq__91248__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91248__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91248__$1);{
var G__91256 = cljs.core.chunk_rest.call(null,seq__91248__$1);
var G__91257 = c__14549__auto__;
var G__91258 = cljs.core.count.call(null,c__14549__auto__);
var G__91259 = 0;
seq__91248 = G__91256;
chunk__91249 = G__91257;
count__91250 = G__91258;
i__91251 = G__91259;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__91248__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__91260 = cljs.core.next.call(null,seq__91248__$1);
var G__91261 = null;
var G__91262 = 0;
var G__91263 = 0;
seq__91248 = G__91260;
chunk__91249 = G__91261;
count__91250 = G__91262;
i__91251 = G__91263;
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
do__GT_.cljs$lang$applyTo = (function (arglist__91264){
var forms = cljs.core.seq(arglist__91264);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91265_SHARP_,p2__91266_SHARP_){return domina.append_BANG_.call(null,p1__91265_SHARP_,p2__91266_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__91267){
var values = cljs.core.seq(arglist__91267);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91268_SHARP_,p2__91269_SHARP_){return domina.prepend_BANG_.call(null,p1__91268_SHARP_,p2__91269_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__91270){
var values = cljs.core.seq(arglist__91270);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91271_SHARP_,p2__91272_SHARP_){return domina.insert_before_BANG_.call(null,p1__91271_SHARP_,p2__91272_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__91273){
var values = cljs.core.seq(arglist__91273);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91274_SHARP_,p2__91275_SHARP_){return domina.insert_after_BANG_.call(null,p1__91274_SHARP_,p2__91275_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__91276){
var values = cljs.core.seq(arglist__91276);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__91277_SHARP_,p2__91278_SHARP_){return domina.swap_content_BANG_.call(null,p1__91277_SHARP_,p2__91278_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__91279){
var values = cljs.core.seq(arglist__91279);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__91280_SHARP_){return domina.detach_BANG_.call(null,p1__91280_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__91281_SHARP_){var seq__91288 = cljs.core.seq.call(null,pairs);var chunk__91289 = null;var count__91290 = 0;var i__91291 = 0;while(true){
if((i__91291 < count__91290))
{var vec__91292 = cljs.core._nth.call(null,chunk__91289,i__91291);var name = cljs.core.nth.call(null,vec__91292,0,null);var value = cljs.core.nth.call(null,vec__91292,1,null);domina.set_style_BANG_.call(null,p1__91281_SHARP_,name,value);
{
var G__91294 = seq__91288;
var G__91295 = chunk__91289;
var G__91296 = count__91290;
var G__91297 = (i__91291 + 1);
seq__91288 = G__91294;
chunk__91289 = G__91295;
count__91290 = G__91296;
i__91291 = G__91297;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91288);if(temp__4092__auto__)
{var seq__91288__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91288__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91288__$1);{
var G__91298 = cljs.core.chunk_rest.call(null,seq__91288__$1);
var G__91299 = c__14549__auto__;
var G__91300 = cljs.core.count.call(null,c__14549__auto__);
var G__91301 = 0;
seq__91288 = G__91298;
chunk__91289 = G__91299;
count__91290 = G__91300;
i__91291 = G__91301;
continue;
}
} else
{var vec__91293 = cljs.core.first.call(null,seq__91288__$1);var name = cljs.core.nth.call(null,vec__91293,0,null);var value = cljs.core.nth.call(null,vec__91293,1,null);domina.set_style_BANG_.call(null,p1__91281_SHARP_,name,value);
{
var G__91302 = cljs.core.next.call(null,seq__91288__$1);
var G__91303 = null;
var G__91304 = 0;
var G__91305 = 0;
seq__91288 = G__91302;
chunk__91289 = G__91303;
count__91290 = G__91304;
i__91291 = G__91305;
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
set_style.cljs$lang$applyTo = (function (arglist__91306){
var values = cljs.core.seq(arglist__91306);
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
remove_style.cljs$lang$applyTo = (function (arglist__91307){
var values = cljs.core.seq(arglist__91307);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__91308_SHARP_){return domina.set_data_BANG_.call(null,p1__91308_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__91309){
var ttime = cljs.core.first(arglist__91309);
var funcs = cljs.core.rest(arglist__91309);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__91311_SHARP_,p2__91310_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__91310_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__91336_91344 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__91337_91345 = null;var count__91338_91346 = 0;var i__91339_91347 = 0;while(true){
if((i__91339_91347 < count__91338_91346))
{var idx_91348 = cljs.core._nth.call(null,chunk__91337_91345,i__91339_91347);var attr_91349 = pnod.attributes.item(idx_91348);if(cljs.core.truth_(attr_91349.specified))
{attr_91349.value = rep_str.call(null,attr_91349.value);
} else
{}
{
var G__91350 = seq__91336_91344;
var G__91351 = chunk__91337_91345;
var G__91352 = count__91338_91346;
var G__91353 = (i__91339_91347 + 1);
seq__91336_91344 = G__91350;
chunk__91337_91345 = G__91351;
count__91338_91346 = G__91352;
i__91339_91347 = G__91353;
continue;
}
} else
{var temp__4092__auto___91354 = cljs.core.seq.call(null,seq__91336_91344);if(temp__4092__auto___91354)
{var seq__91336_91355__$1 = temp__4092__auto___91354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91336_91355__$1))
{var c__14549__auto___91356 = cljs.core.chunk_first.call(null,seq__91336_91355__$1);{
var G__91357 = cljs.core.chunk_rest.call(null,seq__91336_91355__$1);
var G__91358 = c__14549__auto___91356;
var G__91359 = cljs.core.count.call(null,c__14549__auto___91356);
var G__91360 = 0;
seq__91336_91344 = G__91357;
chunk__91337_91345 = G__91358;
count__91338_91346 = G__91359;
i__91339_91347 = G__91360;
continue;
}
} else
{var idx_91361 = cljs.core.first.call(null,seq__91336_91355__$1);var attr_91362 = pnod.attributes.item(idx_91361);if(cljs.core.truth_(attr_91362.specified))
{attr_91362.value = rep_str.call(null,attr_91362.value);
} else
{}
{
var G__91363 = cljs.core.next.call(null,seq__91336_91355__$1);
var G__91364 = null;
var G__91365 = 0;
var G__91366 = 0;
seq__91336_91344 = G__91363;
chunk__91337_91345 = G__91364;
count__91338_91346 = G__91365;
i__91339_91347 = G__91366;
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
{var seq__91340 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__91341 = null;var count__91342 = 0;var i__91343 = 0;while(true){
if((i__91343 < count__91342))
{var cnode = cljs.core._nth.call(null,chunk__91341,i__91343);rep_node.call(null,cnode);
{
var G__91367 = seq__91340;
var G__91368 = chunk__91341;
var G__91369 = count__91342;
var G__91370 = (i__91343 + 1);
seq__91340 = G__91367;
chunk__91341 = G__91368;
count__91342 = G__91369;
i__91343 = G__91370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91340);if(temp__4092__auto__)
{var seq__91340__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91340__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91340__$1);{
var G__91371 = cljs.core.chunk_rest.call(null,seq__91340__$1);
var G__91372 = c__14549__auto__;
var G__91373 = cljs.core.count.call(null,c__14549__auto__);
var G__91374 = 0;
seq__91340 = G__91371;
chunk__91341 = G__91372;
count__91342 = G__91373;
i__91343 = G__91374;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__91340__$1);rep_node.call(null,cnode);
{
var G__91375 = cljs.core.next.call(null,seq__91340__$1);
var G__91376 = null;
var G__91377 = 0;
var G__91378 = 0;
seq__91340 = G__91375;
chunk__91341 = G__91376;
count__91342 = G__91377;
i__91343 = G__91378;
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
{var vec__91388 = node_spec;var tag = cljs.core.nth.call(null,vec__91388,0,null);var vec__91389 = cljs.core.nthnext.call(null,vec__91388,1);var m = cljs.core.nth.call(null,vec__91389,0,null);var ms = cljs.core.nthnext.call(null,vec__91389,1);var more = vec__91389;var vec__91390 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__91390,0,null);var segments = cljs.core.nthnext.call(null,vec__91390,1);var id = cljs.core.some.call(null,((function (vec__91388,tag,vec__91389,m,ms,more,vec__91390,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__91388,tag,vec__91389,m,ms,more,vec__91390,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__91388,tag,vec__91389,m,ms,more,vec__91390,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__91388,tag,vec__91389,m,ms,more,vec__91390,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__91391_91397 = cljs.core.seq.call(null,attrs__$2);var chunk__91392_91398 = null;var count__91393_91399 = 0;var i__91394_91400 = 0;while(true){
if((i__91394_91400 < count__91393_91399))
{var vec__91395_91401 = cljs.core._nth.call(null,chunk__91392_91398,i__91394_91400);var key_91402 = cljs.core.nth.call(null,vec__91395_91401,0,null);var val_91403 = cljs.core.nth.call(null,vec__91395_91401,1,null);node.setAttribute(cljs.core.name.call(null,key_91402),val_91403);
{
var G__91404 = seq__91391_91397;
var G__91405 = chunk__91392_91398;
var G__91406 = count__91393_91399;
var G__91407 = (i__91394_91400 + 1);
seq__91391_91397 = G__91404;
chunk__91392_91398 = G__91405;
count__91393_91399 = G__91406;
i__91394_91400 = G__91407;
continue;
}
} else
{var temp__4092__auto___91408 = cljs.core.seq.call(null,seq__91391_91397);if(temp__4092__auto___91408)
{var seq__91391_91409__$1 = temp__4092__auto___91408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91391_91409__$1))
{var c__14549__auto___91410 = cljs.core.chunk_first.call(null,seq__91391_91409__$1);{
var G__91411 = cljs.core.chunk_rest.call(null,seq__91391_91409__$1);
var G__91412 = c__14549__auto___91410;
var G__91413 = cljs.core.count.call(null,c__14549__auto___91410);
var G__91414 = 0;
seq__91391_91397 = G__91411;
chunk__91392_91398 = G__91412;
count__91393_91399 = G__91413;
i__91394_91400 = G__91414;
continue;
}
} else
{var vec__91396_91415 = cljs.core.first.call(null,seq__91391_91409__$1);var key_91416 = cljs.core.nth.call(null,vec__91396_91415,0,null);var val_91417 = cljs.core.nth.call(null,vec__91396_91415,1,null);node.setAttribute(cljs.core.name.call(null,key_91416),val_91417);
{
var G__91418 = cljs.core.next.call(null,seq__91391_91409__$1);
var G__91419 = null;
var G__91420 = 0;
var G__91421 = 0;
seq__91391_91397 = G__91418;
chunk__91392_91398 = G__91419;
count__91393_91399 = G__91420;
i__91394_91400 = G__91421;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13813__auto__ = el.checked;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13813__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__91422_SHARP_){return p1__91422_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__91423_SHARP_){return p1__91423_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__91425_SHARP_,p2__91424_SHARP_){var G__91428 = p2__91424_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__91428))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__91428))
{return enfocus.core.read_select_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__91428))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__91428))
{var G__91429 = p2__91424_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__91429))
{return enfocus.core.read_checked_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__91429))
{return enfocus.core.read_checked_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__91429))
{return enfocus.core.read_simple_input.call(null,p2__91424_SHARP_,p1__91425_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__91425_SHARP_;
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
{return p1__91425_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__91430_SHARP_){if((p1__91430_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__91430_SHARP_);
} else
{if((p1__91430_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__91430_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__91430_SHARP_))
{return create_sel_str.call(null,p1__91430_SHARP_);
} else
{if(typeof p1__91430_SHARP_ === 'string')
{return p1__91430_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13825__auto__ = func;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13813__auto__ = !((node == null));if(and__13813__auto__)
{var G__91441 = node;if(G__91441)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__91441.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__91441.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__91441);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__91441);
}
} else
{return and__13813__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__91442 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__91442,0,null);var trans__$1 = cljs.core.nth.call(null,vec__91442,1,null);var seq__91443 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__91444 = null;var count__91445 = 0;var i__91446 = 0;while(true){
if((i__91446 < count__91445))
{var vec__91447 = cljs.core._nth.call(null,chunk__91444,i__91446);var sel = cljs.core.nth.call(null,vec__91447,0,null);var t = cljs.core.nth.call(null,vec__91447,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__91449 = seq__91443;
var G__91450 = chunk__91444;
var G__91451 = count__91445;
var G__91452 = (i__91446 + 1);
seq__91443 = G__91449;
chunk__91444 = G__91450;
count__91445 = G__91451;
i__91446 = G__91452;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91443);if(temp__4092__auto__)
{var seq__91443__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91443__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91443__$1);{
var G__91453 = cljs.core.chunk_rest.call(null,seq__91443__$1);
var G__91454 = c__14549__auto__;
var G__91455 = cljs.core.count.call(null,c__14549__auto__);
var G__91456 = 0;
seq__91443 = G__91453;
chunk__91444 = G__91454;
count__91445 = G__91455;
i__91446 = G__91456;
continue;
}
} else
{var vec__91448 = cljs.core.first.call(null,seq__91443__$1);var sel = cljs.core.nth.call(null,vec__91448,0,null);var t = cljs.core.nth.call(null,vec__91448,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__91457 = cljs.core.next.call(null,seq__91443__$1);
var G__91458 = null;
var G__91459 = 0;
var G__91460 = 0;
seq__91443 = G__91457;
chunk__91444 = G__91458;
count__91445 = G__91459;
i__91446 = G__91460;
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
i_at.cljs$lang$applyTo = (function (arglist__91461){
var id_mask = cljs.core.first(arglist__91461);
arglist__91461 = cljs.core.next(arglist__91461);
var node = cljs.core.first(arglist__91461);
var trans = cljs.core.rest(arglist__91461);
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
at.cljs$lang$applyTo = (function (arglist__91462){
var node = cljs.core.first(arglist__91462);
var trans = cljs.core.rest(arglist__91462);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__91467 = node;if(G__91467)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__91467.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__91467.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__91467);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__91467);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__91468 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__91468,0,null);var trans__$1 = cljs.core.nth.call(null,vec__91468,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__91469){var vec__91470 = p__91469;var ky = cljs.core.nth.call(null,vec__91470,0,null);var sel = cljs.core.nth.call(null,vec__91470,1,null);var ext = cljs.core.nth.call(null,vec__91470,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__91471){
var node = cljs.core.first(arglist__91471);
var trans = cljs.core.rest(arglist__91471);
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