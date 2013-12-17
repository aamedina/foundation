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
enfocus.core.ISelector = (function (){var obj24142 = {};return obj24142;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__7816__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (enfocus.core.select[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (enfocus.core.select["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (enfocus.core.select[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (enfocus.core.select["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__7816__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (enfocus.core.select[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (enfocus.core.select["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
enfocus.core.ITransform = (function (){var obj24144 = {};return obj24144;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__7816__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__7816__auto__ = this$;if(and__7816__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__7816__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__8431__auto__ = (((this$ == null))?null:this$);return (function (){var or__7828__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__7816__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__7816__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7816__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__24145_SHARP_){if(typeof p1__24145_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__24145_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__24145_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__24152_24158 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__24153_24159 = null;var count__24154_24160 = 0;var i__24155_24161 = 0;while(true){
if((i__24155_24161 < count__24154_24160))
{var vec__24156_24162 = cljs.core._nth.call(null,chunk__24153_24159,i__24155_24161);var attr_24163 = cljs.core.nth.call(null,vec__24156_24162,0,null);var value_24164 = cljs.core.nth.call(null,vec__24156_24162,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_24163),value_24164);
{
var G__24165 = seq__24152_24158;
var G__24166 = chunk__24153_24159;
var G__24167 = count__24154_24160;
var G__24168 = (i__24155_24161 + 1);
seq__24152_24158 = G__24165;
chunk__24153_24159 = G__24166;
count__24154_24160 = G__24167;
i__24155_24161 = G__24168;
continue;
}
} else
{var temp__4092__auto___24169 = cljs.core.seq.call(null,seq__24152_24158);if(temp__4092__auto___24169)
{var seq__24152_24170__$1 = temp__4092__auto___24169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24152_24170__$1))
{var c__8552__auto___24171 = cljs.core.chunk_first.call(null,seq__24152_24170__$1);{
var G__24172 = cljs.core.chunk_rest.call(null,seq__24152_24170__$1);
var G__24173 = c__8552__auto___24171;
var G__24174 = cljs.core.count.call(null,c__8552__auto___24171);
var G__24175 = 0;
seq__24152_24158 = G__24172;
chunk__24153_24159 = G__24173;
count__24154_24160 = G__24174;
i__24155_24161 = G__24175;
continue;
}
} else
{var vec__24157_24176 = cljs.core.first.call(null,seq__24152_24170__$1);var attr_24177 = cljs.core.nth.call(null,vec__24157_24176,0,null);var value_24178 = cljs.core.nth.call(null,vec__24157_24176,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_24177),value_24178);
{
var G__24179 = cljs.core.next.call(null,seq__24152_24170__$1);
var G__24180 = null;
var G__24181 = 0;
var G__24182 = 0;
seq__24152_24158 = G__24179;
chunk__24153_24159 = G__24180;
count__24154_24160 = G__24181;
i__24155_24161 = G__24182;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__24187 = cljs.core.seq.call(null,values);var chunk__24188 = null;var count__24189 = 0;var i__24190 = 0;while(true){
if((i__24190 < count__24189))
{var attr = cljs.core._nth.call(null,chunk__24188,i__24190);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__24191 = seq__24187;
var G__24192 = chunk__24188;
var G__24193 = count__24189;
var G__24194 = (i__24190 + 1);
seq__24187 = G__24191;
chunk__24188 = G__24192;
count__24189 = G__24193;
i__24190 = G__24194;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24187);if(temp__4092__auto__)
{var seq__24187__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24187__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24187__$1);{
var G__24195 = cljs.core.chunk_rest.call(null,seq__24187__$1);
var G__24196 = c__8552__auto__;
var G__24197 = cljs.core.count.call(null,c__8552__auto__);
var G__24198 = 0;
seq__24187 = G__24195;
chunk__24188 = G__24196;
count__24189 = G__24197;
i__24190 = G__24198;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__24187__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__24199 = cljs.core.next.call(null,seq__24187__$1);
var G__24200 = null;
var G__24201 = 0;
var G__24202 = 0;
seq__24187 = G__24199;
chunk__24188 = G__24200;
count__24189 = G__24201;
i__24190 = G__24202;
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
{var seq__24209_24215 = cljs.core.seq.call(null,ats);var chunk__24210_24216 = null;var count__24211_24217 = 0;var i__24212_24218 = 0;while(true){
if((i__24212_24218 < count__24211_24217))
{var vec__24213_24219 = cljs.core._nth.call(null,chunk__24210_24216,i__24212_24218);var k_24220 = cljs.core.nth.call(null,vec__24213_24219,0,null);var v_24221 = cljs.core.nth.call(null,vec__24213_24219,1,null);add_map_attrs.call(null,elem,k_24220,v_24221);
{
var G__24222 = seq__24209_24215;
var G__24223 = chunk__24210_24216;
var G__24224 = count__24211_24217;
var G__24225 = (i__24212_24218 + 1);
seq__24209_24215 = G__24222;
chunk__24210_24216 = G__24223;
count__24211_24217 = G__24224;
i__24212_24218 = G__24225;
continue;
}
} else
{var temp__4092__auto___24226 = cljs.core.seq.call(null,seq__24209_24215);if(temp__4092__auto___24226)
{var seq__24209_24227__$1 = temp__4092__auto___24226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24209_24227__$1))
{var c__8552__auto___24228 = cljs.core.chunk_first.call(null,seq__24209_24227__$1);{
var G__24229 = cljs.core.chunk_rest.call(null,seq__24209_24227__$1);
var G__24230 = c__8552__auto___24228;
var G__24231 = cljs.core.count.call(null,c__8552__auto___24228);
var G__24232 = 0;
seq__24209_24215 = G__24229;
chunk__24210_24216 = G__24230;
count__24211_24217 = G__24231;
i__24212_24218 = G__24232;
continue;
}
} else
{var vec__24214_24233 = cljs.core.first.call(null,seq__24209_24227__$1);var k_24234 = cljs.core.nth.call(null,vec__24214_24233,0,null);var v_24235 = cljs.core.nth.call(null,vec__24214_24233,1,null);add_map_attrs.call(null,elem,k_24234,v_24235);
{
var G__24236 = cljs.core.next.call(null,seq__24209_24227__$1);
var G__24237 = null;
var G__24238 = 0;
var G__24239 = 0;
seq__24209_24215 = G__24236;
chunk__24210_24216 = G__24237;
count__24211_24217 = G__24238;
i__24212_24218 = G__24239;
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
var seq__24244_24248 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__24245_24249 = null;var count__24246_24250 = 0;var i__24247_24251 = 0;while(true){
if((i__24247_24251 < count__24246_24250))
{var node_24252 = cljs.core._nth.call(null,chunk__24245_24249,i__24247_24251);goog.dom.appendChild(div,node_24252);
{
var G__24253 = seq__24244_24248;
var G__24254 = chunk__24245_24249;
var G__24255 = count__24246_24250;
var G__24256 = (i__24247_24251 + 1);
seq__24244_24248 = G__24253;
chunk__24245_24249 = G__24254;
count__24246_24250 = G__24255;
i__24247_24251 = G__24256;
continue;
}
} else
{var temp__4092__auto___24257 = cljs.core.seq.call(null,seq__24244_24248);if(temp__4092__auto___24257)
{var seq__24244_24258__$1 = temp__4092__auto___24257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24244_24258__$1))
{var c__8552__auto___24259 = cljs.core.chunk_first.call(null,seq__24244_24258__$1);{
var G__24260 = cljs.core.chunk_rest.call(null,seq__24244_24258__$1);
var G__24261 = c__8552__auto___24259;
var G__24262 = cljs.core.count.call(null,c__8552__auto___24259);
var G__24263 = 0;
seq__24244_24248 = G__24260;
chunk__24245_24249 = G__24261;
count__24246_24250 = G__24262;
i__24247_24251 = G__24263;
continue;
}
} else
{var node_24264 = cljs.core.first.call(null,seq__24244_24258__$1);goog.dom.appendChild(div,node_24264);
{
var G__24265 = cljs.core.next.call(null,seq__24244_24258__$1);
var G__24266 = null;
var G__24267 = 0;
var G__24268 = 0;
seq__24244_24248 = G__24265;
chunk__24245_24249 = G__24266;
count__24246_24250 = G__24267;
i__24247_24251 = G__24268;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__24269_SHARP_){var id = p1__24269_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__24269_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__24271 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__24271,0,null);var txt = cljs.core.nth.call(null,vec__24271,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__24276_24280 = cljs.core.seq.call(null,dfa);var chunk__24277_24281 = null;var count__24278_24282 = 0;var i__24279_24283 = 0;while(true){
if((i__24279_24283 < count__24278_24282))
{var df_24284 = cljs.core._nth.call(null,chunk__24277_24281,i__24279_24283);goog.dom.append(frag,df_24284);
{
var G__24285 = seq__24276_24280;
var G__24286 = chunk__24277_24281;
var G__24287 = count__24278_24282;
var G__24288 = (i__24279_24283 + 1);
seq__24276_24280 = G__24285;
chunk__24277_24281 = G__24286;
count__24278_24282 = G__24287;
i__24279_24283 = G__24288;
continue;
}
} else
{var temp__4092__auto___24289 = cljs.core.seq.call(null,seq__24276_24280);if(temp__4092__auto___24289)
{var seq__24276_24290__$1 = temp__4092__auto___24289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24276_24290__$1))
{var c__8552__auto___24291 = cljs.core.chunk_first.call(null,seq__24276_24290__$1);{
var G__24292 = cljs.core.chunk_rest.call(null,seq__24276_24290__$1);
var G__24293 = c__8552__auto___24291;
var G__24294 = cljs.core.count.call(null,c__8552__auto___24291);
var G__24295 = 0;
seq__24276_24280 = G__24292;
chunk__24277_24281 = G__24293;
count__24278_24282 = G__24294;
i__24279_24283 = G__24295;
continue;
}
} else
{var df_24296 = cljs.core.first.call(null,seq__24276_24290__$1);goog.dom.append(frag,df_24296);
{
var G__24297 = cljs.core.next.call(null,seq__24276_24290__$1);
var G__24298 = null;
var G__24299 = 0;
var G__24300 = 0;
seq__24276_24280 = G__24297;
chunk__24277_24281 = G__24298;
count__24278_24282 = G__24299;
i__24279_24283 = G__24300;
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
{var vec__24303 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__24303,0,null);var tdom = cljs.core.nth.call(null,vec__24303,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24303,sym,tdom,dom,tsnip){
return (function (p1__24301_SHARP_){return p1__24301_SHARP_.outerHTML;
});})(vec__24303,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t24307 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24307 = (function (trans,func,extr_multi_node,meta24308){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta24308 = meta24308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24307.cljs$lang$type = true;
enfocus.core.t24307.cljs$lang$ctorStr = "enfocus.core/t24307";
enfocus.core.t24307.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t24307");
});
enfocus.core.t24307.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24307.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24307.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24309){var self__ = this;
var _24309__$1 = this;return self__.meta24308;
});
enfocus.core.t24307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24309,meta24308__$1){var self__ = this;
var _24309__$1 = this;return (new enfocus.core.t24307(self__.trans,self__.func,self__.extr_multi_node,meta24308__$1));
});
enfocus.core.__GT_t24307 = (function __GT_t24307(trans__$1,func__$1,extr_multi_node__$1,meta24308){return (new enfocus.core.t24307(trans__$1,func__$1,extr_multi_node__$1,meta24308));
});
}
return (new enfocus.core.t24307(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t24317 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24317 = (function (trans,func,multi_node_chain,meta24318){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta24318 = meta24318;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24317.cljs$lang$type = true;
enfocus.core.t24317.cljs$lang$ctorStr = "enfocus.core/t24317";
enfocus.core.t24317.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t24317");
});
enfocus.core.t24317.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24317.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24317.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24319){var self__ = this;
var _24319__$1 = this;return self__.meta24318;
});
enfocus.core.t24317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24319,meta24318__$1){var self__ = this;
var _24319__$1 = this;return (new enfocus.core.t24317(self__.trans,self__.func,self__.multi_node_chain,meta24318__$1));
});
enfocus.core.__GT_t24317 = (function __GT_t24317(trans__$1,func__$1,multi_node_chain__$1,meta24318){return (new enfocus.core.t24317(trans__$1,func__$1,multi_node_chain__$1,meta24318));
});
}
return (new enfocus.core.t24317(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__24310_SHARP_){return domina.nodes.call(null,p1__24310_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t24320 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t24320 = (function (trans,func,values,multi_node_chain,meta24321){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta24321 = meta24321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t24320.cljs$lang$type = true;
enfocus.core.t24320.cljs$lang$ctorStr = "enfocus.core/t24320";
enfocus.core.t24320.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t24320");
});
enfocus.core.t24320.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t24320.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t24320.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t24320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24322){var self__ = this;
var _24322__$1 = this;return self__.meta24321;
});
enfocus.core.t24320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24322,meta24321__$1){var self__ = this;
var _24322__$1 = this;return (new enfocus.core.t24320(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta24321__$1));
});
enfocus.core.__GT_t24320 = (function __GT_t24320(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta24321){return (new enfocus.core.t24320(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta24321));
});
}
return (new enfocus.core.t24320(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24323_SHARP_,p2__24324_SHARP_){domina.destroy_children_BANG_.call(null,p1__24323_SHARP_);
return domina.append_BANG_.call(null,p1__24323_SHARP_,p2__24324_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__24325){
var values = cljs.core.seq(arglist__24325);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__24326_SHARP_){return domina.set_html_BANG_.call(null,p1__24326_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__24327_SHARP_){var seq__24334 = cljs.core.seq.call(null,pairs);var chunk__24335 = null;var count__24336 = 0;var i__24337 = 0;while(true){
if((i__24337 < count__24336))
{var vec__24338 = cljs.core._nth.call(null,chunk__24335,i__24337);var name = cljs.core.nth.call(null,vec__24338,0,null);var value = cljs.core.nth.call(null,vec__24338,1,null);domina.set_attr_BANG_.call(null,p1__24327_SHARP_,name,value);
{
var G__24340 = seq__24334;
var G__24341 = chunk__24335;
var G__24342 = count__24336;
var G__24343 = (i__24337 + 1);
seq__24334 = G__24340;
chunk__24335 = G__24341;
count__24336 = G__24342;
i__24337 = G__24343;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24334);if(temp__4092__auto__)
{var seq__24334__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24334__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24334__$1);{
var G__24344 = cljs.core.chunk_rest.call(null,seq__24334__$1);
var G__24345 = c__8552__auto__;
var G__24346 = cljs.core.count.call(null,c__8552__auto__);
var G__24347 = 0;
seq__24334 = G__24344;
chunk__24335 = G__24345;
count__24336 = G__24346;
i__24337 = G__24347;
continue;
}
} else
{var vec__24339 = cljs.core.first.call(null,seq__24334__$1);var name = cljs.core.nth.call(null,vec__24339,0,null);var value = cljs.core.nth.call(null,vec__24339,1,null);domina.set_attr_BANG_.call(null,p1__24327_SHARP_,name,value);
{
var G__24348 = cljs.core.next.call(null,seq__24334__$1);
var G__24349 = null;
var G__24350 = 0;
var G__24351 = 0;
seq__24334 = G__24348;
chunk__24335 = G__24349;
count__24336 = G__24350;
i__24337 = G__24351;
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
set_attr.cljs$lang$applyTo = (function (arglist__24352){
var values = cljs.core.seq(arglist__24352);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24353_SHARP_){var seq__24358 = cljs.core.seq.call(null,values);var chunk__24359 = null;var count__24360 = 0;var i__24361 = 0;while(true){
if((i__24361 < count__24360))
{var name = cljs.core._nth.call(null,chunk__24359,i__24361);domina.remove_attr_BANG_.call(null,p1__24353_SHARP_,name);
{
var G__24362 = seq__24358;
var G__24363 = chunk__24359;
var G__24364 = count__24360;
var G__24365 = (i__24361 + 1);
seq__24358 = G__24362;
chunk__24359 = G__24363;
count__24360 = G__24364;
i__24361 = G__24365;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24358);if(temp__4092__auto__)
{var seq__24358__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24358__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24358__$1);{
var G__24366 = cljs.core.chunk_rest.call(null,seq__24358__$1);
var G__24367 = c__8552__auto__;
var G__24368 = cljs.core.count.call(null,c__8552__auto__);
var G__24369 = 0;
seq__24358 = G__24366;
chunk__24359 = G__24367;
count__24360 = G__24368;
i__24361 = G__24369;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__24358__$1);domina.remove_attr_BANG_.call(null,p1__24353_SHARP_,name);
{
var G__24370 = cljs.core.next.call(null,seq__24358__$1);
var G__24371 = null;
var G__24372 = 0;
var G__24373 = 0;
seq__24358 = G__24370;
chunk__24359 = G__24371;
count__24360 = G__24372;
i__24361 = G__24373;
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
remove_attr.cljs$lang$applyTo = (function (arglist__24374){
var values = cljs.core.seq(arglist__24374);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__24377){var vec__24378 = p__24377;var n = cljs.core.nth.call(null,vec__24378,0,null);var v = cljs.core.nth.call(null,vec__24378,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__24379){
var forms = cljs.core.seq(arglist__24379);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24380_SHARP_){var seq__24385 = cljs.core.seq.call(null,values);var chunk__24386 = null;var count__24387 = 0;var i__24388 = 0;while(true){
if((i__24388 < count__24387))
{var val = cljs.core._nth.call(null,chunk__24386,i__24388);domina.add_class_BANG_.call(null,p1__24380_SHARP_,val);
{
var G__24389 = seq__24385;
var G__24390 = chunk__24386;
var G__24391 = count__24387;
var G__24392 = (i__24388 + 1);
seq__24385 = G__24389;
chunk__24386 = G__24390;
count__24387 = G__24391;
i__24388 = G__24392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24385);if(temp__4092__auto__)
{var seq__24385__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24385__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24385__$1);{
var G__24393 = cljs.core.chunk_rest.call(null,seq__24385__$1);
var G__24394 = c__8552__auto__;
var G__24395 = cljs.core.count.call(null,c__8552__auto__);
var G__24396 = 0;
seq__24385 = G__24393;
chunk__24386 = G__24394;
count__24387 = G__24395;
i__24388 = G__24396;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__24385__$1);domina.add_class_BANG_.call(null,p1__24380_SHARP_,val);
{
var G__24397 = cljs.core.next.call(null,seq__24385__$1);
var G__24398 = null;
var G__24399 = 0;
var G__24400 = 0;
seq__24385 = G__24397;
chunk__24386 = G__24398;
count__24387 = G__24399;
i__24388 = G__24400;
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
add_class.cljs$lang$applyTo = (function (arglist__24401){
var values = cljs.core.seq(arglist__24401);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24402_SHARP_){var seq__24407 = cljs.core.seq.call(null,values);var chunk__24408 = null;var count__24409 = 0;var i__24410 = 0;while(true){
if((i__24410 < count__24409))
{var val = cljs.core._nth.call(null,chunk__24408,i__24410);domina.remove_class_BANG_.call(null,p1__24402_SHARP_,val);
{
var G__24411 = seq__24407;
var G__24412 = chunk__24408;
var G__24413 = count__24409;
var G__24414 = (i__24410 + 1);
seq__24407 = G__24411;
chunk__24408 = G__24412;
count__24409 = G__24413;
i__24410 = G__24414;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24407);if(temp__4092__auto__)
{var seq__24407__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24407__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24407__$1);{
var G__24415 = cljs.core.chunk_rest.call(null,seq__24407__$1);
var G__24416 = c__8552__auto__;
var G__24417 = cljs.core.count.call(null,c__8552__auto__);
var G__24418 = 0;
seq__24407 = G__24415;
chunk__24408 = G__24416;
count__24409 = G__24417;
i__24410 = G__24418;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__24407__$1);domina.remove_class_BANG_.call(null,p1__24402_SHARP_,val);
{
var G__24419 = cljs.core.next.call(null,seq__24407__$1);
var G__24420 = null;
var G__24421 = 0;
var G__24422 = 0;
seq__24407 = G__24419;
chunk__24408 = G__24420;
count__24409 = G__24421;
i__24410 = G__24422;
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
remove_class.cljs$lang$applyTo = (function (arglist__24423){
var values = cljs.core.seq(arglist__24423);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__24424_SHARP_){return domina.set_classes_BANG_.call(null,p1__24424_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__24425){
var values = cljs.core.seq(arglist__24425);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__24430 = cljs.core.seq.call(null,forms);var chunk__24431 = null;var count__24432 = 0;var i__24433 = 0;while(true){
if((i__24433 < count__24432))
{var fun = cljs.core._nth.call(null,chunk__24431,i__24433);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__24434 = seq__24430;
var G__24435 = chunk__24431;
var G__24436 = count__24432;
var G__24437 = (i__24433 + 1);
seq__24430 = G__24434;
chunk__24431 = G__24435;
count__24432 = G__24436;
i__24433 = G__24437;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24430);if(temp__4092__auto__)
{var seq__24430__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24430__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24430__$1);{
var G__24438 = cljs.core.chunk_rest.call(null,seq__24430__$1);
var G__24439 = c__8552__auto__;
var G__24440 = cljs.core.count.call(null,c__8552__auto__);
var G__24441 = 0;
seq__24430 = G__24438;
chunk__24431 = G__24439;
count__24432 = G__24440;
i__24433 = G__24441;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__24430__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__24442 = cljs.core.next.call(null,seq__24430__$1);
var G__24443 = null;
var G__24444 = 0;
var G__24445 = 0;
seq__24430 = G__24442;
chunk__24431 = G__24443;
count__24432 = G__24444;
i__24433 = G__24445;
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
do__GT_.cljs$lang$applyTo = (function (arglist__24446){
var forms = cljs.core.seq(arglist__24446);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24447_SHARP_,p2__24448_SHARP_){return domina.append_BANG_.call(null,p1__24447_SHARP_,p2__24448_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__24449){
var values = cljs.core.seq(arglist__24449);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24450_SHARP_,p2__24451_SHARP_){return domina.prepend_BANG_.call(null,p1__24450_SHARP_,p2__24451_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__24452){
var values = cljs.core.seq(arglist__24452);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24453_SHARP_,p2__24454_SHARP_){return domina.insert_before_BANG_.call(null,p1__24453_SHARP_,p2__24454_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__24455){
var values = cljs.core.seq(arglist__24455);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24456_SHARP_,p2__24457_SHARP_){return domina.insert_after_BANG_.call(null,p1__24456_SHARP_,p2__24457_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__24458){
var values = cljs.core.seq(arglist__24458);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__24459_SHARP_,p2__24460_SHARP_){return domina.swap_content_BANG_.call(null,p1__24459_SHARP_,p2__24460_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__24461){
var values = cljs.core.seq(arglist__24461);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__24462_SHARP_){return domina.detach_BANG_.call(null,p1__24462_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__24463_SHARP_){var seq__24470 = cljs.core.seq.call(null,pairs);var chunk__24471 = null;var count__24472 = 0;var i__24473 = 0;while(true){
if((i__24473 < count__24472))
{var vec__24474 = cljs.core._nth.call(null,chunk__24471,i__24473);var name = cljs.core.nth.call(null,vec__24474,0,null);var value = cljs.core.nth.call(null,vec__24474,1,null);domina.set_style_BANG_.call(null,p1__24463_SHARP_,name,value);
{
var G__24476 = seq__24470;
var G__24477 = chunk__24471;
var G__24478 = count__24472;
var G__24479 = (i__24473 + 1);
seq__24470 = G__24476;
chunk__24471 = G__24477;
count__24472 = G__24478;
i__24473 = G__24479;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24470);if(temp__4092__auto__)
{var seq__24470__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24470__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24470__$1);{
var G__24480 = cljs.core.chunk_rest.call(null,seq__24470__$1);
var G__24481 = c__8552__auto__;
var G__24482 = cljs.core.count.call(null,c__8552__auto__);
var G__24483 = 0;
seq__24470 = G__24480;
chunk__24471 = G__24481;
count__24472 = G__24482;
i__24473 = G__24483;
continue;
}
} else
{var vec__24475 = cljs.core.first.call(null,seq__24470__$1);var name = cljs.core.nth.call(null,vec__24475,0,null);var value = cljs.core.nth.call(null,vec__24475,1,null);domina.set_style_BANG_.call(null,p1__24463_SHARP_,name,value);
{
var G__24484 = cljs.core.next.call(null,seq__24470__$1);
var G__24485 = null;
var G__24486 = 0;
var G__24487 = 0;
seq__24470 = G__24484;
chunk__24471 = G__24485;
count__24472 = G__24486;
i__24473 = G__24487;
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
set_style.cljs$lang$applyTo = (function (arglist__24488){
var values = cljs.core.seq(arglist__24488);
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
remove_style.cljs$lang$applyTo = (function (arglist__24489){
var values = cljs.core.seq(arglist__24489);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__24490_SHARP_){return domina.set_data_BANG_.call(null,p1__24490_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__24491){
var ttime = cljs.core.first(arglist__24491);
var funcs = cljs.core.rest(arglist__24491);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__24493_SHARP_,p2__24492_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__24492_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__24518_24526 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__24519_24527 = null;var count__24520_24528 = 0;var i__24521_24529 = 0;while(true){
if((i__24521_24529 < count__24520_24528))
{var idx_24530 = cljs.core._nth.call(null,chunk__24519_24527,i__24521_24529);var attr_24531 = pnod.attributes.item(idx_24530);if(cljs.core.truth_(attr_24531.specified))
{attr_24531.value = rep_str.call(null,attr_24531.value);
} else
{}
{
var G__24532 = seq__24518_24526;
var G__24533 = chunk__24519_24527;
var G__24534 = count__24520_24528;
var G__24535 = (i__24521_24529 + 1);
seq__24518_24526 = G__24532;
chunk__24519_24527 = G__24533;
count__24520_24528 = G__24534;
i__24521_24529 = G__24535;
continue;
}
} else
{var temp__4092__auto___24536 = cljs.core.seq.call(null,seq__24518_24526);if(temp__4092__auto___24536)
{var seq__24518_24537__$1 = temp__4092__auto___24536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24518_24537__$1))
{var c__8552__auto___24538 = cljs.core.chunk_first.call(null,seq__24518_24537__$1);{
var G__24539 = cljs.core.chunk_rest.call(null,seq__24518_24537__$1);
var G__24540 = c__8552__auto___24538;
var G__24541 = cljs.core.count.call(null,c__8552__auto___24538);
var G__24542 = 0;
seq__24518_24526 = G__24539;
chunk__24519_24527 = G__24540;
count__24520_24528 = G__24541;
i__24521_24529 = G__24542;
continue;
}
} else
{var idx_24543 = cljs.core.first.call(null,seq__24518_24537__$1);var attr_24544 = pnod.attributes.item(idx_24543);if(cljs.core.truth_(attr_24544.specified))
{attr_24544.value = rep_str.call(null,attr_24544.value);
} else
{}
{
var G__24545 = cljs.core.next.call(null,seq__24518_24537__$1);
var G__24546 = null;
var G__24547 = 0;
var G__24548 = 0;
seq__24518_24526 = G__24545;
chunk__24519_24527 = G__24546;
count__24520_24528 = G__24547;
i__24521_24529 = G__24548;
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
{var seq__24522 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__24523 = null;var count__24524 = 0;var i__24525 = 0;while(true){
if((i__24525 < count__24524))
{var cnode = cljs.core._nth.call(null,chunk__24523,i__24525);rep_node.call(null,cnode);
{
var G__24549 = seq__24522;
var G__24550 = chunk__24523;
var G__24551 = count__24524;
var G__24552 = (i__24525 + 1);
seq__24522 = G__24549;
chunk__24523 = G__24550;
count__24524 = G__24551;
i__24525 = G__24552;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24522);if(temp__4092__auto__)
{var seq__24522__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24522__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24522__$1);{
var G__24553 = cljs.core.chunk_rest.call(null,seq__24522__$1);
var G__24554 = c__8552__auto__;
var G__24555 = cljs.core.count.call(null,c__8552__auto__);
var G__24556 = 0;
seq__24522 = G__24553;
chunk__24523 = G__24554;
count__24524 = G__24555;
i__24525 = G__24556;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__24522__$1);rep_node.call(null,cnode);
{
var G__24557 = cljs.core.next.call(null,seq__24522__$1);
var G__24558 = null;
var G__24559 = 0;
var G__24560 = 0;
seq__24522 = G__24557;
chunk__24523 = G__24558;
count__24524 = G__24559;
i__24525 = G__24560;
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
{var vec__24570 = node_spec;var tag = cljs.core.nth.call(null,vec__24570,0,null);var vec__24571 = cljs.core.nthnext.call(null,vec__24570,1);var m = cljs.core.nth.call(null,vec__24571,0,null);var ms = cljs.core.nthnext.call(null,vec__24571,1);var more = vec__24571;var vec__24572 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__24572,0,null);var segments = cljs.core.nthnext.call(null,vec__24572,1);var id = cljs.core.some.call(null,((function (vec__24570,tag,vec__24571,m,ms,more,vec__24572,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__24570,tag,vec__24571,m,ms,more,vec__24572,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__24570,tag,vec__24571,m,ms,more,vec__24572,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__24570,tag,vec__24571,m,ms,more,vec__24572,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__24573_24579 = cljs.core.seq.call(null,attrs__$2);var chunk__24574_24580 = null;var count__24575_24581 = 0;var i__24576_24582 = 0;while(true){
if((i__24576_24582 < count__24575_24581))
{var vec__24577_24583 = cljs.core._nth.call(null,chunk__24574_24580,i__24576_24582);var key_24584 = cljs.core.nth.call(null,vec__24577_24583,0,null);var val_24585 = cljs.core.nth.call(null,vec__24577_24583,1,null);node.setAttribute(cljs.core.name.call(null,key_24584),val_24585);
{
var G__24586 = seq__24573_24579;
var G__24587 = chunk__24574_24580;
var G__24588 = count__24575_24581;
var G__24589 = (i__24576_24582 + 1);
seq__24573_24579 = G__24586;
chunk__24574_24580 = G__24587;
count__24575_24581 = G__24588;
i__24576_24582 = G__24589;
continue;
}
} else
{var temp__4092__auto___24590 = cljs.core.seq.call(null,seq__24573_24579);if(temp__4092__auto___24590)
{var seq__24573_24591__$1 = temp__4092__auto___24590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24573_24591__$1))
{var c__8552__auto___24592 = cljs.core.chunk_first.call(null,seq__24573_24591__$1);{
var G__24593 = cljs.core.chunk_rest.call(null,seq__24573_24591__$1);
var G__24594 = c__8552__auto___24592;
var G__24595 = cljs.core.count.call(null,c__8552__auto___24592);
var G__24596 = 0;
seq__24573_24579 = G__24593;
chunk__24574_24580 = G__24594;
count__24575_24581 = G__24595;
i__24576_24582 = G__24596;
continue;
}
} else
{var vec__24578_24597 = cljs.core.first.call(null,seq__24573_24591__$1);var key_24598 = cljs.core.nth.call(null,vec__24578_24597,0,null);var val_24599 = cljs.core.nth.call(null,vec__24578_24597,1,null);node.setAttribute(cljs.core.name.call(null,key_24598),val_24599);
{
var G__24600 = cljs.core.next.call(null,seq__24573_24591__$1);
var G__24601 = null;
var G__24602 = 0;
var G__24603 = 0;
seq__24573_24579 = G__24600;
chunk__24574_24580 = G__24601;
count__24575_24581 = G__24602;
i__24576_24582 = G__24603;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__7816__auto__ = el.checked;if(cljs.core.truth_(and__7816__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__7816__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__24604_SHARP_){return p1__24604_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__24605_SHARP_){return p1__24605_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__24607_SHARP_,p2__24606_SHARP_){var G__24610 = p2__24606_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__24610))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__24610))
{return enfocus.core.read_select_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__24610))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__24610))
{var G__24611 = p2__24606_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__24611))
{return enfocus.core.read_checked_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__24611))
{return enfocus.core.read_checked_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__24611))
{return enfocus.core.read_simple_input.call(null,p2__24606_SHARP_,p1__24607_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__24607_SHARP_;
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
{return p1__24607_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__24612_SHARP_){if((p1__24612_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__24612_SHARP_);
} else
{if((p1__24612_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__24612_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__24612_SHARP_))
{return create_sel_str.call(null,p1__24612_SHARP_);
} else
{if(typeof p1__24612_SHARP_ === 'string')
{return p1__24612_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__7828__auto__ = func;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__7816__auto__ = !((node == null));if(and__7816__auto__)
{var G__24623 = node;if(G__24623)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24623.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__24623.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24623);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24623);
}
} else
{return and__7816__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__24624 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__24624,0,null);var trans__$1 = cljs.core.nth.call(null,vec__24624,1,null);var seq__24625 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__24626 = null;var count__24627 = 0;var i__24628 = 0;while(true){
if((i__24628 < count__24627))
{var vec__24629 = cljs.core._nth.call(null,chunk__24626,i__24628);var sel = cljs.core.nth.call(null,vec__24629,0,null);var t = cljs.core.nth.call(null,vec__24629,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__24631 = seq__24625;
var G__24632 = chunk__24626;
var G__24633 = count__24627;
var G__24634 = (i__24628 + 1);
seq__24625 = G__24631;
chunk__24626 = G__24632;
count__24627 = G__24633;
i__24628 = G__24634;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24625);if(temp__4092__auto__)
{var seq__24625__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24625__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24625__$1);{
var G__24635 = cljs.core.chunk_rest.call(null,seq__24625__$1);
var G__24636 = c__8552__auto__;
var G__24637 = cljs.core.count.call(null,c__8552__auto__);
var G__24638 = 0;
seq__24625 = G__24635;
chunk__24626 = G__24636;
count__24627 = G__24637;
i__24628 = G__24638;
continue;
}
} else
{var vec__24630 = cljs.core.first.call(null,seq__24625__$1);var sel = cljs.core.nth.call(null,vec__24630,0,null);var t = cljs.core.nth.call(null,vec__24630,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__24639 = cljs.core.next.call(null,seq__24625__$1);
var G__24640 = null;
var G__24641 = 0;
var G__24642 = 0;
seq__24625 = G__24639;
chunk__24626 = G__24640;
count__24627 = G__24641;
i__24628 = G__24642;
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
i_at.cljs$lang$applyTo = (function (arglist__24643){
var id_mask = cljs.core.first(arglist__24643);
arglist__24643 = cljs.core.next(arglist__24643);
var node = cljs.core.first(arglist__24643);
var trans = cljs.core.rest(arglist__24643);
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
at.cljs$lang$applyTo = (function (arglist__24644){
var node = cljs.core.first(arglist__24644);
var trans = cljs.core.rest(arglist__24644);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__24649 = node;if(G__24649)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__24649.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__24649.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24649);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__24649);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__24650 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__24650,0,null);var trans__$1 = cljs.core.nth.call(null,vec__24650,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__24651){var vec__24652 = p__24651;var ky = cljs.core.nth.call(null,vec__24652,0,null);var sel = cljs.core.nth.call(null,vec__24652,1,null);var ext = cljs.core.nth.call(null,vec__24652,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__24653){
var node = cljs.core.first(arglist__24653);
var trans = cljs.core.rest(arglist__24653);
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
