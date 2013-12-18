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
enfocus.core.ISelector = (function (){var obj30053 = {};return obj30053;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__8233__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (enfocus.core.select[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (enfocus.core.select["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__8233__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (enfocus.core.select[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (enfocus.core.select["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__8233__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (enfocus.core.select[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (enfocus.core.select["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
enfocus.core.ITransform = (function (){var obj30055 = {};return obj30055;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__8233__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__8233__auto__ = this$;if(and__8233__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__8233__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8853__auto__ = (((this$ == null))?null:this$);return (function (){var or__8245__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__8233__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__8233__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8233__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__30056_SHARP_){if(typeof p1__30056_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__30056_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__30056_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__30063_30069 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__30064_30070 = null;var count__30065_30071 = 0;var i__30066_30072 = 0;while(true){
if((i__30066_30072 < count__30065_30071))
{var vec__30067_30073 = cljs.core._nth.call(null,chunk__30064_30070,i__30066_30072);var attr_30074 = cljs.core.nth.call(null,vec__30067_30073,0,null);var value_30075 = cljs.core.nth.call(null,vec__30067_30073,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_30074),value_30075);
{
var G__30076 = seq__30063_30069;
var G__30077 = chunk__30064_30070;
var G__30078 = count__30065_30071;
var G__30079 = (i__30066_30072 + 1);
seq__30063_30069 = G__30076;
chunk__30064_30070 = G__30077;
count__30065_30071 = G__30078;
i__30066_30072 = G__30079;
continue;
}
} else
{var temp__4092__auto___30080 = cljs.core.seq.call(null,seq__30063_30069);if(temp__4092__auto___30080)
{var seq__30063_30081__$1 = temp__4092__auto___30080;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30063_30081__$1))
{var c__8974__auto___30082 = cljs.core.chunk_first.call(null,seq__30063_30081__$1);{
var G__30083 = cljs.core.chunk_rest.call(null,seq__30063_30081__$1);
var G__30084 = c__8974__auto___30082;
var G__30085 = cljs.core.count.call(null,c__8974__auto___30082);
var G__30086 = 0;
seq__30063_30069 = G__30083;
chunk__30064_30070 = G__30084;
count__30065_30071 = G__30085;
i__30066_30072 = G__30086;
continue;
}
} else
{var vec__30068_30087 = cljs.core.first.call(null,seq__30063_30081__$1);var attr_30088 = cljs.core.nth.call(null,vec__30068_30087,0,null);var value_30089 = cljs.core.nth.call(null,vec__30068_30087,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_30088),value_30089);
{
var G__30090 = cljs.core.next.call(null,seq__30063_30081__$1);
var G__30091 = null;
var G__30092 = 0;
var G__30093 = 0;
seq__30063_30069 = G__30090;
chunk__30064_30070 = G__30091;
count__30065_30071 = G__30092;
i__30066_30072 = G__30093;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__30098 = cljs.core.seq.call(null,values);var chunk__30099 = null;var count__30100 = 0;var i__30101 = 0;while(true){
if((i__30101 < count__30100))
{var attr = cljs.core._nth.call(null,chunk__30099,i__30101);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__30102 = seq__30098;
var G__30103 = chunk__30099;
var G__30104 = count__30100;
var G__30105 = (i__30101 + 1);
seq__30098 = G__30102;
chunk__30099 = G__30103;
count__30100 = G__30104;
i__30101 = G__30105;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30098);if(temp__4092__auto__)
{var seq__30098__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30098__$1);{
var G__30106 = cljs.core.chunk_rest.call(null,seq__30098__$1);
var G__30107 = c__8974__auto__;
var G__30108 = cljs.core.count.call(null,c__8974__auto__);
var G__30109 = 0;
seq__30098 = G__30106;
chunk__30099 = G__30107;
count__30100 = G__30108;
i__30101 = G__30109;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__30098__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__30110 = cljs.core.next.call(null,seq__30098__$1);
var G__30111 = null;
var G__30112 = 0;
var G__30113 = 0;
seq__30098 = G__30110;
chunk__30099 = G__30111;
count__30100 = G__30112;
i__30101 = G__30113;
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
{var seq__30120_30126 = cljs.core.seq.call(null,ats);var chunk__30121_30127 = null;var count__30122_30128 = 0;var i__30123_30129 = 0;while(true){
if((i__30123_30129 < count__30122_30128))
{var vec__30124_30130 = cljs.core._nth.call(null,chunk__30121_30127,i__30123_30129);var k_30131 = cljs.core.nth.call(null,vec__30124_30130,0,null);var v_30132 = cljs.core.nth.call(null,vec__30124_30130,1,null);add_map_attrs.call(null,elem,k_30131,v_30132);
{
var G__30133 = seq__30120_30126;
var G__30134 = chunk__30121_30127;
var G__30135 = count__30122_30128;
var G__30136 = (i__30123_30129 + 1);
seq__30120_30126 = G__30133;
chunk__30121_30127 = G__30134;
count__30122_30128 = G__30135;
i__30123_30129 = G__30136;
continue;
}
} else
{var temp__4092__auto___30137 = cljs.core.seq.call(null,seq__30120_30126);if(temp__4092__auto___30137)
{var seq__30120_30138__$1 = temp__4092__auto___30137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30120_30138__$1))
{var c__8974__auto___30139 = cljs.core.chunk_first.call(null,seq__30120_30138__$1);{
var G__30140 = cljs.core.chunk_rest.call(null,seq__30120_30138__$1);
var G__30141 = c__8974__auto___30139;
var G__30142 = cljs.core.count.call(null,c__8974__auto___30139);
var G__30143 = 0;
seq__30120_30126 = G__30140;
chunk__30121_30127 = G__30141;
count__30122_30128 = G__30142;
i__30123_30129 = G__30143;
continue;
}
} else
{var vec__30125_30144 = cljs.core.first.call(null,seq__30120_30138__$1);var k_30145 = cljs.core.nth.call(null,vec__30125_30144,0,null);var v_30146 = cljs.core.nth.call(null,vec__30125_30144,1,null);add_map_attrs.call(null,elem,k_30145,v_30146);
{
var G__30147 = cljs.core.next.call(null,seq__30120_30138__$1);
var G__30148 = null;
var G__30149 = 0;
var G__30150 = 0;
seq__30120_30126 = G__30147;
chunk__30121_30127 = G__30148;
count__30122_30128 = G__30149;
i__30123_30129 = G__30150;
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
var seq__30155_30159 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__30156_30160 = null;var count__30157_30161 = 0;var i__30158_30162 = 0;while(true){
if((i__30158_30162 < count__30157_30161))
{var node_30163 = cljs.core._nth.call(null,chunk__30156_30160,i__30158_30162);goog.dom.appendChild(div,node_30163);
{
var G__30164 = seq__30155_30159;
var G__30165 = chunk__30156_30160;
var G__30166 = count__30157_30161;
var G__30167 = (i__30158_30162 + 1);
seq__30155_30159 = G__30164;
chunk__30156_30160 = G__30165;
count__30157_30161 = G__30166;
i__30158_30162 = G__30167;
continue;
}
} else
{var temp__4092__auto___30168 = cljs.core.seq.call(null,seq__30155_30159);if(temp__4092__auto___30168)
{var seq__30155_30169__$1 = temp__4092__auto___30168;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30155_30169__$1))
{var c__8974__auto___30170 = cljs.core.chunk_first.call(null,seq__30155_30169__$1);{
var G__30171 = cljs.core.chunk_rest.call(null,seq__30155_30169__$1);
var G__30172 = c__8974__auto___30170;
var G__30173 = cljs.core.count.call(null,c__8974__auto___30170);
var G__30174 = 0;
seq__30155_30159 = G__30171;
chunk__30156_30160 = G__30172;
count__30157_30161 = G__30173;
i__30158_30162 = G__30174;
continue;
}
} else
{var node_30175 = cljs.core.first.call(null,seq__30155_30169__$1);goog.dom.appendChild(div,node_30175);
{
var G__30176 = cljs.core.next.call(null,seq__30155_30169__$1);
var G__30177 = null;
var G__30178 = 0;
var G__30179 = 0;
seq__30155_30159 = G__30176;
chunk__30156_30160 = G__30177;
count__30157_30161 = G__30178;
i__30158_30162 = G__30179;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30180_SHARP_){var id = p1__30180_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__30180_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__30182 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__30182,0,null);var txt = cljs.core.nth.call(null,vec__30182,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__30187_30191 = cljs.core.seq.call(null,dfa);var chunk__30188_30192 = null;var count__30189_30193 = 0;var i__30190_30194 = 0;while(true){
if((i__30190_30194 < count__30189_30193))
{var df_30195 = cljs.core._nth.call(null,chunk__30188_30192,i__30190_30194);goog.dom.append(frag,df_30195);
{
var G__30196 = seq__30187_30191;
var G__30197 = chunk__30188_30192;
var G__30198 = count__30189_30193;
var G__30199 = (i__30190_30194 + 1);
seq__30187_30191 = G__30196;
chunk__30188_30192 = G__30197;
count__30189_30193 = G__30198;
i__30190_30194 = G__30199;
continue;
}
} else
{var temp__4092__auto___30200 = cljs.core.seq.call(null,seq__30187_30191);if(temp__4092__auto___30200)
{var seq__30187_30201__$1 = temp__4092__auto___30200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30187_30201__$1))
{var c__8974__auto___30202 = cljs.core.chunk_first.call(null,seq__30187_30201__$1);{
var G__30203 = cljs.core.chunk_rest.call(null,seq__30187_30201__$1);
var G__30204 = c__8974__auto___30202;
var G__30205 = cljs.core.count.call(null,c__8974__auto___30202);
var G__30206 = 0;
seq__30187_30191 = G__30203;
chunk__30188_30192 = G__30204;
count__30189_30193 = G__30205;
i__30190_30194 = G__30206;
continue;
}
} else
{var df_30207 = cljs.core.first.call(null,seq__30187_30201__$1);goog.dom.append(frag,df_30207);
{
var G__30208 = cljs.core.next.call(null,seq__30187_30201__$1);
var G__30209 = null;
var G__30210 = 0;
var G__30211 = 0;
seq__30187_30191 = G__30208;
chunk__30188_30192 = G__30209;
count__30189_30193 = G__30210;
i__30190_30194 = G__30211;
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
{var vec__30214 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__30214,0,null);var tdom = cljs.core.nth.call(null,vec__30214,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__30214,sym,tdom,dom,tsnip){
return (function (p1__30212_SHARP_){return p1__30212_SHARP_.outerHTML;
});})(vec__30214,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t30218 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t30218 = (function (trans,func,extr_multi_node,meta30219){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta30219 = meta30219;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t30218.cljs$lang$type = true;
enfocus.core.t30218.cljs$lang$ctorStr = "enfocus.core/t30218";
enfocus.core.t30218.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t30218");
});
enfocus.core.t30218.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t30218.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t30218.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t30218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30220){var self__ = this;
var _30220__$1 = this;return self__.meta30219;
});
enfocus.core.t30218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30220,meta30219__$1){var self__ = this;
var _30220__$1 = this;return (new enfocus.core.t30218(self__.trans,self__.func,self__.extr_multi_node,meta30219__$1));
});
enfocus.core.__GT_t30218 = (function __GT_t30218(trans__$1,func__$1,extr_multi_node__$1,meta30219){return (new enfocus.core.t30218(trans__$1,func__$1,extr_multi_node__$1,meta30219));
});
}
return (new enfocus.core.t30218(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t30228 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t30228 = (function (trans,func,multi_node_chain,meta30229){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta30229 = meta30229;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t30228.cljs$lang$type = true;
enfocus.core.t30228.cljs$lang$ctorStr = "enfocus.core/t30228";
enfocus.core.t30228.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t30228");
});
enfocus.core.t30228.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t30228.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t30228.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t30228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30230){var self__ = this;
var _30230__$1 = this;return self__.meta30229;
});
enfocus.core.t30228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30230,meta30229__$1){var self__ = this;
var _30230__$1 = this;return (new enfocus.core.t30228(self__.trans,self__.func,self__.multi_node_chain,meta30229__$1));
});
enfocus.core.__GT_t30228 = (function __GT_t30228(trans__$1,func__$1,multi_node_chain__$1,meta30229){return (new enfocus.core.t30228(trans__$1,func__$1,multi_node_chain__$1,meta30229));
});
}
return (new enfocus.core.t30228(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__30221_SHARP_){return domina.nodes.call(null,p1__30221_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t30231 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t30231 = (function (trans,func,values,multi_node_chain,meta30232){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta30232 = meta30232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t30231.cljs$lang$type = true;
enfocus.core.t30231.cljs$lang$ctorStr = "enfocus.core/t30231";
enfocus.core.t30231.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t30231");
});
enfocus.core.t30231.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t30231.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t30231.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t30231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30233){var self__ = this;
var _30233__$1 = this;return self__.meta30232;
});
enfocus.core.t30231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30233,meta30232__$1){var self__ = this;
var _30233__$1 = this;return (new enfocus.core.t30231(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta30232__$1));
});
enfocus.core.__GT_t30231 = (function __GT_t30231(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta30232){return (new enfocus.core.t30231(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta30232));
});
}
return (new enfocus.core.t30231(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30234_SHARP_,p2__30235_SHARP_){domina.destroy_children_BANG_.call(null,p1__30234_SHARP_);
return domina.append_BANG_.call(null,p1__30234_SHARP_,p2__30235_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__30236){
var values = cljs.core.seq(arglist__30236);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__30237_SHARP_){return domina.set_html_BANG_.call(null,p1__30237_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__30238_SHARP_){var seq__30245 = cljs.core.seq.call(null,pairs);var chunk__30246 = null;var count__30247 = 0;var i__30248 = 0;while(true){
if((i__30248 < count__30247))
{var vec__30249 = cljs.core._nth.call(null,chunk__30246,i__30248);var name = cljs.core.nth.call(null,vec__30249,0,null);var value = cljs.core.nth.call(null,vec__30249,1,null);domina.set_attr_BANG_.call(null,p1__30238_SHARP_,name,value);
{
var G__30251 = seq__30245;
var G__30252 = chunk__30246;
var G__30253 = count__30247;
var G__30254 = (i__30248 + 1);
seq__30245 = G__30251;
chunk__30246 = G__30252;
count__30247 = G__30253;
i__30248 = G__30254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30245);if(temp__4092__auto__)
{var seq__30245__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30245__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30245__$1);{
var G__30255 = cljs.core.chunk_rest.call(null,seq__30245__$1);
var G__30256 = c__8974__auto__;
var G__30257 = cljs.core.count.call(null,c__8974__auto__);
var G__30258 = 0;
seq__30245 = G__30255;
chunk__30246 = G__30256;
count__30247 = G__30257;
i__30248 = G__30258;
continue;
}
} else
{var vec__30250 = cljs.core.first.call(null,seq__30245__$1);var name = cljs.core.nth.call(null,vec__30250,0,null);var value = cljs.core.nth.call(null,vec__30250,1,null);domina.set_attr_BANG_.call(null,p1__30238_SHARP_,name,value);
{
var G__30259 = cljs.core.next.call(null,seq__30245__$1);
var G__30260 = null;
var G__30261 = 0;
var G__30262 = 0;
seq__30245 = G__30259;
chunk__30246 = G__30260;
count__30247 = G__30261;
i__30248 = G__30262;
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
set_attr.cljs$lang$applyTo = (function (arglist__30263){
var values = cljs.core.seq(arglist__30263);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__30264_SHARP_){var seq__30269 = cljs.core.seq.call(null,values);var chunk__30270 = null;var count__30271 = 0;var i__30272 = 0;while(true){
if((i__30272 < count__30271))
{var name = cljs.core._nth.call(null,chunk__30270,i__30272);domina.remove_attr_BANG_.call(null,p1__30264_SHARP_,name);
{
var G__30273 = seq__30269;
var G__30274 = chunk__30270;
var G__30275 = count__30271;
var G__30276 = (i__30272 + 1);
seq__30269 = G__30273;
chunk__30270 = G__30274;
count__30271 = G__30275;
i__30272 = G__30276;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30269);if(temp__4092__auto__)
{var seq__30269__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30269__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30269__$1);{
var G__30277 = cljs.core.chunk_rest.call(null,seq__30269__$1);
var G__30278 = c__8974__auto__;
var G__30279 = cljs.core.count.call(null,c__8974__auto__);
var G__30280 = 0;
seq__30269 = G__30277;
chunk__30270 = G__30278;
count__30271 = G__30279;
i__30272 = G__30280;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__30269__$1);domina.remove_attr_BANG_.call(null,p1__30264_SHARP_,name);
{
var G__30281 = cljs.core.next.call(null,seq__30269__$1);
var G__30282 = null;
var G__30283 = 0;
var G__30284 = 0;
seq__30269 = G__30281;
chunk__30270 = G__30282;
count__30271 = G__30283;
i__30272 = G__30284;
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
remove_attr.cljs$lang$applyTo = (function (arglist__30285){
var values = cljs.core.seq(arglist__30285);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__30288){var vec__30289 = p__30288;var n = cljs.core.nth.call(null,vec__30289,0,null);var v = cljs.core.nth.call(null,vec__30289,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__30290){
var forms = cljs.core.seq(arglist__30290);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__30291_SHARP_){var seq__30296 = cljs.core.seq.call(null,values);var chunk__30297 = null;var count__30298 = 0;var i__30299 = 0;while(true){
if((i__30299 < count__30298))
{var val = cljs.core._nth.call(null,chunk__30297,i__30299);domina.add_class_BANG_.call(null,p1__30291_SHARP_,val);
{
var G__30300 = seq__30296;
var G__30301 = chunk__30297;
var G__30302 = count__30298;
var G__30303 = (i__30299 + 1);
seq__30296 = G__30300;
chunk__30297 = G__30301;
count__30298 = G__30302;
i__30299 = G__30303;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30296);if(temp__4092__auto__)
{var seq__30296__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30296__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30296__$1);{
var G__30304 = cljs.core.chunk_rest.call(null,seq__30296__$1);
var G__30305 = c__8974__auto__;
var G__30306 = cljs.core.count.call(null,c__8974__auto__);
var G__30307 = 0;
seq__30296 = G__30304;
chunk__30297 = G__30305;
count__30298 = G__30306;
i__30299 = G__30307;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__30296__$1);domina.add_class_BANG_.call(null,p1__30291_SHARP_,val);
{
var G__30308 = cljs.core.next.call(null,seq__30296__$1);
var G__30309 = null;
var G__30310 = 0;
var G__30311 = 0;
seq__30296 = G__30308;
chunk__30297 = G__30309;
count__30298 = G__30310;
i__30299 = G__30311;
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
add_class.cljs$lang$applyTo = (function (arglist__30312){
var values = cljs.core.seq(arglist__30312);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__30313_SHARP_){var seq__30318 = cljs.core.seq.call(null,values);var chunk__30319 = null;var count__30320 = 0;var i__30321 = 0;while(true){
if((i__30321 < count__30320))
{var val = cljs.core._nth.call(null,chunk__30319,i__30321);domina.remove_class_BANG_.call(null,p1__30313_SHARP_,val);
{
var G__30322 = seq__30318;
var G__30323 = chunk__30319;
var G__30324 = count__30320;
var G__30325 = (i__30321 + 1);
seq__30318 = G__30322;
chunk__30319 = G__30323;
count__30320 = G__30324;
i__30321 = G__30325;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30318);if(temp__4092__auto__)
{var seq__30318__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30318__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30318__$1);{
var G__30326 = cljs.core.chunk_rest.call(null,seq__30318__$1);
var G__30327 = c__8974__auto__;
var G__30328 = cljs.core.count.call(null,c__8974__auto__);
var G__30329 = 0;
seq__30318 = G__30326;
chunk__30319 = G__30327;
count__30320 = G__30328;
i__30321 = G__30329;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__30318__$1);domina.remove_class_BANG_.call(null,p1__30313_SHARP_,val);
{
var G__30330 = cljs.core.next.call(null,seq__30318__$1);
var G__30331 = null;
var G__30332 = 0;
var G__30333 = 0;
seq__30318 = G__30330;
chunk__30319 = G__30331;
count__30320 = G__30332;
i__30321 = G__30333;
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
remove_class.cljs$lang$applyTo = (function (arglist__30334){
var values = cljs.core.seq(arglist__30334);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__30335_SHARP_){return domina.set_classes_BANG_.call(null,p1__30335_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__30336){
var values = cljs.core.seq(arglist__30336);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__30341 = cljs.core.seq.call(null,forms);var chunk__30342 = null;var count__30343 = 0;var i__30344 = 0;while(true){
if((i__30344 < count__30343))
{var fun = cljs.core._nth.call(null,chunk__30342,i__30344);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__30345 = seq__30341;
var G__30346 = chunk__30342;
var G__30347 = count__30343;
var G__30348 = (i__30344 + 1);
seq__30341 = G__30345;
chunk__30342 = G__30346;
count__30343 = G__30347;
i__30344 = G__30348;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30341);if(temp__4092__auto__)
{var seq__30341__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30341__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30341__$1);{
var G__30349 = cljs.core.chunk_rest.call(null,seq__30341__$1);
var G__30350 = c__8974__auto__;
var G__30351 = cljs.core.count.call(null,c__8974__auto__);
var G__30352 = 0;
seq__30341 = G__30349;
chunk__30342 = G__30350;
count__30343 = G__30351;
i__30344 = G__30352;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__30341__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__30353 = cljs.core.next.call(null,seq__30341__$1);
var G__30354 = null;
var G__30355 = 0;
var G__30356 = 0;
seq__30341 = G__30353;
chunk__30342 = G__30354;
count__30343 = G__30355;
i__30344 = G__30356;
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
do__GT_.cljs$lang$applyTo = (function (arglist__30357){
var forms = cljs.core.seq(arglist__30357);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30358_SHARP_,p2__30359_SHARP_){return domina.append_BANG_.call(null,p1__30358_SHARP_,p2__30359_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__30360){
var values = cljs.core.seq(arglist__30360);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30361_SHARP_,p2__30362_SHARP_){return domina.prepend_BANG_.call(null,p1__30361_SHARP_,p2__30362_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__30363){
var values = cljs.core.seq(arglist__30363);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30364_SHARP_,p2__30365_SHARP_){return domina.insert_before_BANG_.call(null,p1__30364_SHARP_,p2__30365_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__30366){
var values = cljs.core.seq(arglist__30366);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30367_SHARP_,p2__30368_SHARP_){return domina.insert_after_BANG_.call(null,p1__30367_SHARP_,p2__30368_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__30369){
var values = cljs.core.seq(arglist__30369);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__30370_SHARP_,p2__30371_SHARP_){return domina.swap_content_BANG_.call(null,p1__30370_SHARP_,p2__30371_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__30372){
var values = cljs.core.seq(arglist__30372);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__30373_SHARP_){return domina.detach_BANG_.call(null,p1__30373_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__30374_SHARP_){var seq__30381 = cljs.core.seq.call(null,pairs);var chunk__30382 = null;var count__30383 = 0;var i__30384 = 0;while(true){
if((i__30384 < count__30383))
{var vec__30385 = cljs.core._nth.call(null,chunk__30382,i__30384);var name = cljs.core.nth.call(null,vec__30385,0,null);var value = cljs.core.nth.call(null,vec__30385,1,null);domina.set_style_BANG_.call(null,p1__30374_SHARP_,name,value);
{
var G__30387 = seq__30381;
var G__30388 = chunk__30382;
var G__30389 = count__30383;
var G__30390 = (i__30384 + 1);
seq__30381 = G__30387;
chunk__30382 = G__30388;
count__30383 = G__30389;
i__30384 = G__30390;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30381);if(temp__4092__auto__)
{var seq__30381__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30381__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30381__$1);{
var G__30391 = cljs.core.chunk_rest.call(null,seq__30381__$1);
var G__30392 = c__8974__auto__;
var G__30393 = cljs.core.count.call(null,c__8974__auto__);
var G__30394 = 0;
seq__30381 = G__30391;
chunk__30382 = G__30392;
count__30383 = G__30393;
i__30384 = G__30394;
continue;
}
} else
{var vec__30386 = cljs.core.first.call(null,seq__30381__$1);var name = cljs.core.nth.call(null,vec__30386,0,null);var value = cljs.core.nth.call(null,vec__30386,1,null);domina.set_style_BANG_.call(null,p1__30374_SHARP_,name,value);
{
var G__30395 = cljs.core.next.call(null,seq__30381__$1);
var G__30396 = null;
var G__30397 = 0;
var G__30398 = 0;
seq__30381 = G__30395;
chunk__30382 = G__30396;
count__30383 = G__30397;
i__30384 = G__30398;
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
set_style.cljs$lang$applyTo = (function (arglist__30399){
var values = cljs.core.seq(arglist__30399);
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
remove_style.cljs$lang$applyTo = (function (arglist__30400){
var values = cljs.core.seq(arglist__30400);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__30401_SHARP_){return domina.set_data_BANG_.call(null,p1__30401_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__30402){
var ttime = cljs.core.first(arglist__30402);
var funcs = cljs.core.rest(arglist__30402);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__30404_SHARP_,p2__30403_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__30403_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__30429_30437 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__30430_30438 = null;var count__30431_30439 = 0;var i__30432_30440 = 0;while(true){
if((i__30432_30440 < count__30431_30439))
{var idx_30441 = cljs.core._nth.call(null,chunk__30430_30438,i__30432_30440);var attr_30442 = pnod.attributes.item(idx_30441);if(cljs.core.truth_(attr_30442.specified))
{attr_30442.value = rep_str.call(null,attr_30442.value);
} else
{}
{
var G__30443 = seq__30429_30437;
var G__30444 = chunk__30430_30438;
var G__30445 = count__30431_30439;
var G__30446 = (i__30432_30440 + 1);
seq__30429_30437 = G__30443;
chunk__30430_30438 = G__30444;
count__30431_30439 = G__30445;
i__30432_30440 = G__30446;
continue;
}
} else
{var temp__4092__auto___30447 = cljs.core.seq.call(null,seq__30429_30437);if(temp__4092__auto___30447)
{var seq__30429_30448__$1 = temp__4092__auto___30447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30429_30448__$1))
{var c__8974__auto___30449 = cljs.core.chunk_first.call(null,seq__30429_30448__$1);{
var G__30450 = cljs.core.chunk_rest.call(null,seq__30429_30448__$1);
var G__30451 = c__8974__auto___30449;
var G__30452 = cljs.core.count.call(null,c__8974__auto___30449);
var G__30453 = 0;
seq__30429_30437 = G__30450;
chunk__30430_30438 = G__30451;
count__30431_30439 = G__30452;
i__30432_30440 = G__30453;
continue;
}
} else
{var idx_30454 = cljs.core.first.call(null,seq__30429_30448__$1);var attr_30455 = pnod.attributes.item(idx_30454);if(cljs.core.truth_(attr_30455.specified))
{attr_30455.value = rep_str.call(null,attr_30455.value);
} else
{}
{
var G__30456 = cljs.core.next.call(null,seq__30429_30448__$1);
var G__30457 = null;
var G__30458 = 0;
var G__30459 = 0;
seq__30429_30437 = G__30456;
chunk__30430_30438 = G__30457;
count__30431_30439 = G__30458;
i__30432_30440 = G__30459;
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
{var seq__30433 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__30434 = null;var count__30435 = 0;var i__30436 = 0;while(true){
if((i__30436 < count__30435))
{var cnode = cljs.core._nth.call(null,chunk__30434,i__30436);rep_node.call(null,cnode);
{
var G__30460 = seq__30433;
var G__30461 = chunk__30434;
var G__30462 = count__30435;
var G__30463 = (i__30436 + 1);
seq__30433 = G__30460;
chunk__30434 = G__30461;
count__30435 = G__30462;
i__30436 = G__30463;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30433);if(temp__4092__auto__)
{var seq__30433__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30433__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30433__$1);{
var G__30464 = cljs.core.chunk_rest.call(null,seq__30433__$1);
var G__30465 = c__8974__auto__;
var G__30466 = cljs.core.count.call(null,c__8974__auto__);
var G__30467 = 0;
seq__30433 = G__30464;
chunk__30434 = G__30465;
count__30435 = G__30466;
i__30436 = G__30467;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__30433__$1);rep_node.call(null,cnode);
{
var G__30468 = cljs.core.next.call(null,seq__30433__$1);
var G__30469 = null;
var G__30470 = 0;
var G__30471 = 0;
seq__30433 = G__30468;
chunk__30434 = G__30469;
count__30435 = G__30470;
i__30436 = G__30471;
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
{var vec__30481 = node_spec;var tag = cljs.core.nth.call(null,vec__30481,0,null);var vec__30482 = cljs.core.nthnext.call(null,vec__30481,1);var m = cljs.core.nth.call(null,vec__30482,0,null);var ms = cljs.core.nthnext.call(null,vec__30482,1);var more = vec__30482;var vec__30483 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__30483,0,null);var segments = cljs.core.nthnext.call(null,vec__30483,1);var id = cljs.core.some.call(null,((function (vec__30481,tag,vec__30482,m,ms,more,vec__30483,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__30481,tag,vec__30482,m,ms,more,vec__30483,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__30481,tag,vec__30482,m,ms,more,vec__30483,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__30481,tag,vec__30482,m,ms,more,vec__30483,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__30484_30490 = cljs.core.seq.call(null,attrs__$2);var chunk__30485_30491 = null;var count__30486_30492 = 0;var i__30487_30493 = 0;while(true){
if((i__30487_30493 < count__30486_30492))
{var vec__30488_30494 = cljs.core._nth.call(null,chunk__30485_30491,i__30487_30493);var key_30495 = cljs.core.nth.call(null,vec__30488_30494,0,null);var val_30496 = cljs.core.nth.call(null,vec__30488_30494,1,null);node.setAttribute(cljs.core.name.call(null,key_30495),val_30496);
{
var G__30497 = seq__30484_30490;
var G__30498 = chunk__30485_30491;
var G__30499 = count__30486_30492;
var G__30500 = (i__30487_30493 + 1);
seq__30484_30490 = G__30497;
chunk__30485_30491 = G__30498;
count__30486_30492 = G__30499;
i__30487_30493 = G__30500;
continue;
}
} else
{var temp__4092__auto___30501 = cljs.core.seq.call(null,seq__30484_30490);if(temp__4092__auto___30501)
{var seq__30484_30502__$1 = temp__4092__auto___30501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30484_30502__$1))
{var c__8974__auto___30503 = cljs.core.chunk_first.call(null,seq__30484_30502__$1);{
var G__30504 = cljs.core.chunk_rest.call(null,seq__30484_30502__$1);
var G__30505 = c__8974__auto___30503;
var G__30506 = cljs.core.count.call(null,c__8974__auto___30503);
var G__30507 = 0;
seq__30484_30490 = G__30504;
chunk__30485_30491 = G__30505;
count__30486_30492 = G__30506;
i__30487_30493 = G__30507;
continue;
}
} else
{var vec__30489_30508 = cljs.core.first.call(null,seq__30484_30502__$1);var key_30509 = cljs.core.nth.call(null,vec__30489_30508,0,null);var val_30510 = cljs.core.nth.call(null,vec__30489_30508,1,null);node.setAttribute(cljs.core.name.call(null,key_30509),val_30510);
{
var G__30511 = cljs.core.next.call(null,seq__30484_30502__$1);
var G__30512 = null;
var G__30513 = 0;
var G__30514 = 0;
seq__30484_30490 = G__30511;
chunk__30485_30491 = G__30512;
count__30486_30492 = G__30513;
i__30487_30493 = G__30514;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__8233__auto__ = el.checked;if(cljs.core.truth_(and__8233__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__8233__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__30515_SHARP_){return p1__30515_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__30516_SHARP_){return p1__30516_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__30518_SHARP_,p2__30517_SHARP_){var G__30521 = p2__30517_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__30521))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__30521))
{return enfocus.core.read_select_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__30521))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__30521))
{var G__30522 = p2__30517_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__30522))
{return enfocus.core.read_checked_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__30522))
{return enfocus.core.read_checked_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__30522))
{return enfocus.core.read_simple_input.call(null,p2__30517_SHARP_,p1__30518_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__30518_SHARP_;
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
{return p1__30518_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__30523_SHARP_){if((p1__30523_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__30523_SHARP_);
} else
{if((p1__30523_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__30523_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__30523_SHARP_))
{return create_sel_str.call(null,p1__30523_SHARP_);
} else
{if(typeof p1__30523_SHARP_ === 'string')
{return p1__30523_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__8245__auto__ = func;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__8233__auto__ = !((node == null));if(and__8233__auto__)
{var G__30534 = node;if(G__30534)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__30534.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__30534.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30534);
}
} else
{return and__8233__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__30535 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__30535,0,null);var trans__$1 = cljs.core.nth.call(null,vec__30535,1,null);var seq__30536 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__30537 = null;var count__30538 = 0;var i__30539 = 0;while(true){
if((i__30539 < count__30538))
{var vec__30540 = cljs.core._nth.call(null,chunk__30537,i__30539);var sel = cljs.core.nth.call(null,vec__30540,0,null);var t = cljs.core.nth.call(null,vec__30540,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__30542 = seq__30536;
var G__30543 = chunk__30537;
var G__30544 = count__30538;
var G__30545 = (i__30539 + 1);
seq__30536 = G__30542;
chunk__30537 = G__30543;
count__30538 = G__30544;
i__30539 = G__30545;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30536);if(temp__4092__auto__)
{var seq__30536__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30536__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30536__$1);{
var G__30546 = cljs.core.chunk_rest.call(null,seq__30536__$1);
var G__30547 = c__8974__auto__;
var G__30548 = cljs.core.count.call(null,c__8974__auto__);
var G__30549 = 0;
seq__30536 = G__30546;
chunk__30537 = G__30547;
count__30538 = G__30548;
i__30539 = G__30549;
continue;
}
} else
{var vec__30541 = cljs.core.first.call(null,seq__30536__$1);var sel = cljs.core.nth.call(null,vec__30541,0,null);var t = cljs.core.nth.call(null,vec__30541,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__30550 = cljs.core.next.call(null,seq__30536__$1);
var G__30551 = null;
var G__30552 = 0;
var G__30553 = 0;
seq__30536 = G__30550;
chunk__30537 = G__30551;
count__30538 = G__30552;
i__30539 = G__30553;
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
i_at.cljs$lang$applyTo = (function (arglist__30554){
var id_mask = cljs.core.first(arglist__30554);
arglist__30554 = cljs.core.next(arglist__30554);
var node = cljs.core.first(arglist__30554);
var trans = cljs.core.rest(arglist__30554);
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
at.cljs$lang$applyTo = (function (arglist__30555){
var node = cljs.core.first(arglist__30555);
var trans = cljs.core.rest(arglist__30555);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__30560 = node;if(G__30560)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__30560.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__30560.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__30560);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__30561 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__30561,0,null);var trans__$1 = cljs.core.nth.call(null,vec__30561,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__30562){var vec__30563 = p__30562;var ky = cljs.core.nth.call(null,vec__30563,0,null);var sel = cljs.core.nth.call(null,vec__30563,1,null);var ext = cljs.core.nth.call(null,vec__30563,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__30564){
var node = cljs.core.first(arglist__30564);
var trans = cljs.core.rest(arglist__30564);
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