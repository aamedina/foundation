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
enfocus.core.ISelector = (function (){var obj300172 = {};return obj300172;
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
enfocus.core.ITransform = (function (){var obj300174 = {};return obj300174;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__300175_SHARP_){if(typeof p1__300175_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__300175_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__300175_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__300182_300188 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__300183_300189 = null;var count__300184_300190 = 0;var i__300185_300191 = 0;while(true){
if((i__300185_300191 < count__300184_300190))
{var vec__300186_300192 = cljs.core._nth.call(null,chunk__300183_300189,i__300185_300191);var attr_300193 = cljs.core.nth.call(null,vec__300186_300192,0,null);var value_300194 = cljs.core.nth.call(null,vec__300186_300192,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_300193),value_300194);
{
var G__300195 = seq__300182_300188;
var G__300196 = chunk__300183_300189;
var G__300197 = count__300184_300190;
var G__300198 = (i__300185_300191 + 1);
seq__300182_300188 = G__300195;
chunk__300183_300189 = G__300196;
count__300184_300190 = G__300197;
i__300185_300191 = G__300198;
continue;
}
} else
{var temp__4092__auto___300199 = cljs.core.seq.call(null,seq__300182_300188);if(temp__4092__auto___300199)
{var seq__300182_300200__$1 = temp__4092__auto___300199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300182_300200__$1))
{var c__14549__auto___300201 = cljs.core.chunk_first.call(null,seq__300182_300200__$1);{
var G__300202 = cljs.core.chunk_rest.call(null,seq__300182_300200__$1);
var G__300203 = c__14549__auto___300201;
var G__300204 = cljs.core.count.call(null,c__14549__auto___300201);
var G__300205 = 0;
seq__300182_300188 = G__300202;
chunk__300183_300189 = G__300203;
count__300184_300190 = G__300204;
i__300185_300191 = G__300205;
continue;
}
} else
{var vec__300187_300206 = cljs.core.first.call(null,seq__300182_300200__$1);var attr_300207 = cljs.core.nth.call(null,vec__300187_300206,0,null);var value_300208 = cljs.core.nth.call(null,vec__300187_300206,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_300207),value_300208);
{
var G__300209 = cljs.core.next.call(null,seq__300182_300200__$1);
var G__300210 = null;
var G__300211 = 0;
var G__300212 = 0;
seq__300182_300188 = G__300209;
chunk__300183_300189 = G__300210;
count__300184_300190 = G__300211;
i__300185_300191 = G__300212;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__300217 = cljs.core.seq.call(null,values);var chunk__300218 = null;var count__300219 = 0;var i__300220 = 0;while(true){
if((i__300220 < count__300219))
{var attr = cljs.core._nth.call(null,chunk__300218,i__300220);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__300221 = seq__300217;
var G__300222 = chunk__300218;
var G__300223 = count__300219;
var G__300224 = (i__300220 + 1);
seq__300217 = G__300221;
chunk__300218 = G__300222;
count__300219 = G__300223;
i__300220 = G__300224;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300217);if(temp__4092__auto__)
{var seq__300217__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300217__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300217__$1);{
var G__300225 = cljs.core.chunk_rest.call(null,seq__300217__$1);
var G__300226 = c__14549__auto__;
var G__300227 = cljs.core.count.call(null,c__14549__auto__);
var G__300228 = 0;
seq__300217 = G__300225;
chunk__300218 = G__300226;
count__300219 = G__300227;
i__300220 = G__300228;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__300217__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__300229 = cljs.core.next.call(null,seq__300217__$1);
var G__300230 = null;
var G__300231 = 0;
var G__300232 = 0;
seq__300217 = G__300229;
chunk__300218 = G__300230;
count__300219 = G__300231;
i__300220 = G__300232;
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
{var seq__300239_300245 = cljs.core.seq.call(null,ats);var chunk__300240_300246 = null;var count__300241_300247 = 0;var i__300242_300248 = 0;while(true){
if((i__300242_300248 < count__300241_300247))
{var vec__300243_300249 = cljs.core._nth.call(null,chunk__300240_300246,i__300242_300248);var k_300250 = cljs.core.nth.call(null,vec__300243_300249,0,null);var v_300251 = cljs.core.nth.call(null,vec__300243_300249,1,null);add_map_attrs.call(null,elem,k_300250,v_300251);
{
var G__300252 = seq__300239_300245;
var G__300253 = chunk__300240_300246;
var G__300254 = count__300241_300247;
var G__300255 = (i__300242_300248 + 1);
seq__300239_300245 = G__300252;
chunk__300240_300246 = G__300253;
count__300241_300247 = G__300254;
i__300242_300248 = G__300255;
continue;
}
} else
{var temp__4092__auto___300256 = cljs.core.seq.call(null,seq__300239_300245);if(temp__4092__auto___300256)
{var seq__300239_300257__$1 = temp__4092__auto___300256;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300239_300257__$1))
{var c__14549__auto___300258 = cljs.core.chunk_first.call(null,seq__300239_300257__$1);{
var G__300259 = cljs.core.chunk_rest.call(null,seq__300239_300257__$1);
var G__300260 = c__14549__auto___300258;
var G__300261 = cljs.core.count.call(null,c__14549__auto___300258);
var G__300262 = 0;
seq__300239_300245 = G__300259;
chunk__300240_300246 = G__300260;
count__300241_300247 = G__300261;
i__300242_300248 = G__300262;
continue;
}
} else
{var vec__300244_300263 = cljs.core.first.call(null,seq__300239_300257__$1);var k_300264 = cljs.core.nth.call(null,vec__300244_300263,0,null);var v_300265 = cljs.core.nth.call(null,vec__300244_300263,1,null);add_map_attrs.call(null,elem,k_300264,v_300265);
{
var G__300266 = cljs.core.next.call(null,seq__300239_300257__$1);
var G__300267 = null;
var G__300268 = 0;
var G__300269 = 0;
seq__300239_300245 = G__300266;
chunk__300240_300246 = G__300267;
count__300241_300247 = G__300268;
i__300242_300248 = G__300269;
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
var seq__300274_300278 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__300275_300279 = null;var count__300276_300280 = 0;var i__300277_300281 = 0;while(true){
if((i__300277_300281 < count__300276_300280))
{var node_300282 = cljs.core._nth.call(null,chunk__300275_300279,i__300277_300281);goog.dom.appendChild(div,node_300282);
{
var G__300283 = seq__300274_300278;
var G__300284 = chunk__300275_300279;
var G__300285 = count__300276_300280;
var G__300286 = (i__300277_300281 + 1);
seq__300274_300278 = G__300283;
chunk__300275_300279 = G__300284;
count__300276_300280 = G__300285;
i__300277_300281 = G__300286;
continue;
}
} else
{var temp__4092__auto___300287 = cljs.core.seq.call(null,seq__300274_300278);if(temp__4092__auto___300287)
{var seq__300274_300288__$1 = temp__4092__auto___300287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300274_300288__$1))
{var c__14549__auto___300289 = cljs.core.chunk_first.call(null,seq__300274_300288__$1);{
var G__300290 = cljs.core.chunk_rest.call(null,seq__300274_300288__$1);
var G__300291 = c__14549__auto___300289;
var G__300292 = cljs.core.count.call(null,c__14549__auto___300289);
var G__300293 = 0;
seq__300274_300278 = G__300290;
chunk__300275_300279 = G__300291;
count__300276_300280 = G__300292;
i__300277_300281 = G__300293;
continue;
}
} else
{var node_300294 = cljs.core.first.call(null,seq__300274_300288__$1);goog.dom.appendChild(div,node_300294);
{
var G__300295 = cljs.core.next.call(null,seq__300274_300288__$1);
var G__300296 = null;
var G__300297 = 0;
var G__300298 = 0;
seq__300274_300278 = G__300295;
chunk__300275_300279 = G__300296;
count__300276_300280 = G__300297;
i__300277_300281 = G__300298;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__300299_SHARP_){var id = p1__300299_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__300299_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__300301 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__300301,0,null);var txt = cljs.core.nth.call(null,vec__300301,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__300306_300310 = cljs.core.seq.call(null,dfa);var chunk__300307_300311 = null;var count__300308_300312 = 0;var i__300309_300313 = 0;while(true){
if((i__300309_300313 < count__300308_300312))
{var df_300314 = cljs.core._nth.call(null,chunk__300307_300311,i__300309_300313);goog.dom.append(frag,df_300314);
{
var G__300315 = seq__300306_300310;
var G__300316 = chunk__300307_300311;
var G__300317 = count__300308_300312;
var G__300318 = (i__300309_300313 + 1);
seq__300306_300310 = G__300315;
chunk__300307_300311 = G__300316;
count__300308_300312 = G__300317;
i__300309_300313 = G__300318;
continue;
}
} else
{var temp__4092__auto___300319 = cljs.core.seq.call(null,seq__300306_300310);if(temp__4092__auto___300319)
{var seq__300306_300320__$1 = temp__4092__auto___300319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300306_300320__$1))
{var c__14549__auto___300321 = cljs.core.chunk_first.call(null,seq__300306_300320__$1);{
var G__300322 = cljs.core.chunk_rest.call(null,seq__300306_300320__$1);
var G__300323 = c__14549__auto___300321;
var G__300324 = cljs.core.count.call(null,c__14549__auto___300321);
var G__300325 = 0;
seq__300306_300310 = G__300322;
chunk__300307_300311 = G__300323;
count__300308_300312 = G__300324;
i__300309_300313 = G__300325;
continue;
}
} else
{var df_300326 = cljs.core.first.call(null,seq__300306_300320__$1);goog.dom.append(frag,df_300326);
{
var G__300327 = cljs.core.next.call(null,seq__300306_300320__$1);
var G__300328 = null;
var G__300329 = 0;
var G__300330 = 0;
seq__300306_300310 = G__300327;
chunk__300307_300311 = G__300328;
count__300308_300312 = G__300329;
i__300309_300313 = G__300330;
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
{var vec__300333 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__300333,0,null);var tdom = cljs.core.nth.call(null,vec__300333,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__300333,sym,tdom,dom,tsnip){
return (function (p1__300331_SHARP_){return p1__300331_SHARP_.outerHTML;
});})(vec__300333,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t300337 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t300337 = (function (trans,func,extr_multi_node,meta300338){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta300338 = meta300338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t300337.cljs$lang$type = true;
enfocus.core.t300337.cljs$lang$ctorStr = "enfocus.core/t300337";
enfocus.core.t300337.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t300337");
});
enfocus.core.t300337.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t300337.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t300337.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t300337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_300339){var self__ = this;
var _300339__$1 = this;return self__.meta300338;
});
enfocus.core.t300337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_300339,meta300338__$1){var self__ = this;
var _300339__$1 = this;return (new enfocus.core.t300337(self__.trans,self__.func,self__.extr_multi_node,meta300338__$1));
});
enfocus.core.__GT_t300337 = (function __GT_t300337(trans__$1,func__$1,extr_multi_node__$1,meta300338){return (new enfocus.core.t300337(trans__$1,func__$1,extr_multi_node__$1,meta300338));
});
}
return (new enfocus.core.t300337(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t300347 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t300347 = (function (trans,func,multi_node_chain,meta300348){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta300348 = meta300348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t300347.cljs$lang$type = true;
enfocus.core.t300347.cljs$lang$ctorStr = "enfocus.core/t300347";
enfocus.core.t300347.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t300347");
});
enfocus.core.t300347.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t300347.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t300347.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t300347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_300349){var self__ = this;
var _300349__$1 = this;return self__.meta300348;
});
enfocus.core.t300347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_300349,meta300348__$1){var self__ = this;
var _300349__$1 = this;return (new enfocus.core.t300347(self__.trans,self__.func,self__.multi_node_chain,meta300348__$1));
});
enfocus.core.__GT_t300347 = (function __GT_t300347(trans__$1,func__$1,multi_node_chain__$1,meta300348){return (new enfocus.core.t300347(trans__$1,func__$1,multi_node_chain__$1,meta300348));
});
}
return (new enfocus.core.t300347(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__300340_SHARP_){return domina.nodes.call(null,p1__300340_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t300350 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t300350 = (function (trans,func,values,multi_node_chain,meta300351){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta300351 = meta300351;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t300350.cljs$lang$type = true;
enfocus.core.t300350.cljs$lang$ctorStr = "enfocus.core/t300350";
enfocus.core.t300350.cljs$lang$ctorPrWriter = (function (this__14369__auto__,writer__14370__auto__,opt__14371__auto__){return cljs.core._write.call(null,writer__14370__auto__,"enfocus.core/t300350");
});
enfocus.core.t300350.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t300350.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t300350.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t300350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_300352){var self__ = this;
var _300352__$1 = this;return self__.meta300351;
});
enfocus.core.t300350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_300352,meta300351__$1){var self__ = this;
var _300352__$1 = this;return (new enfocus.core.t300350(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta300351__$1));
});
enfocus.core.__GT_t300350 = (function __GT_t300350(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta300351){return (new enfocus.core.t300350(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta300351));
});
}
return (new enfocus.core.t300350(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300353_SHARP_,p2__300354_SHARP_){domina.destroy_children_BANG_.call(null,p1__300353_SHARP_);
return domina.append_BANG_.call(null,p1__300353_SHARP_,p2__300354_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__300355){
var values = cljs.core.seq(arglist__300355);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__300356_SHARP_){return domina.set_html_BANG_.call(null,p1__300356_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__300357_SHARP_){var seq__300364 = cljs.core.seq.call(null,pairs);var chunk__300365 = null;var count__300366 = 0;var i__300367 = 0;while(true){
if((i__300367 < count__300366))
{var vec__300368 = cljs.core._nth.call(null,chunk__300365,i__300367);var name = cljs.core.nth.call(null,vec__300368,0,null);var value = cljs.core.nth.call(null,vec__300368,1,null);domina.set_attr_BANG_.call(null,p1__300357_SHARP_,name,value);
{
var G__300370 = seq__300364;
var G__300371 = chunk__300365;
var G__300372 = count__300366;
var G__300373 = (i__300367 + 1);
seq__300364 = G__300370;
chunk__300365 = G__300371;
count__300366 = G__300372;
i__300367 = G__300373;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300364);if(temp__4092__auto__)
{var seq__300364__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300364__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300364__$1);{
var G__300374 = cljs.core.chunk_rest.call(null,seq__300364__$1);
var G__300375 = c__14549__auto__;
var G__300376 = cljs.core.count.call(null,c__14549__auto__);
var G__300377 = 0;
seq__300364 = G__300374;
chunk__300365 = G__300375;
count__300366 = G__300376;
i__300367 = G__300377;
continue;
}
} else
{var vec__300369 = cljs.core.first.call(null,seq__300364__$1);var name = cljs.core.nth.call(null,vec__300369,0,null);var value = cljs.core.nth.call(null,vec__300369,1,null);domina.set_attr_BANG_.call(null,p1__300357_SHARP_,name,value);
{
var G__300378 = cljs.core.next.call(null,seq__300364__$1);
var G__300379 = null;
var G__300380 = 0;
var G__300381 = 0;
seq__300364 = G__300378;
chunk__300365 = G__300379;
count__300366 = G__300380;
i__300367 = G__300381;
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
set_attr.cljs$lang$applyTo = (function (arglist__300382){
var values = cljs.core.seq(arglist__300382);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__300383_SHARP_){var seq__300388 = cljs.core.seq.call(null,values);var chunk__300389 = null;var count__300390 = 0;var i__300391 = 0;while(true){
if((i__300391 < count__300390))
{var name = cljs.core._nth.call(null,chunk__300389,i__300391);domina.remove_attr_BANG_.call(null,p1__300383_SHARP_,name);
{
var G__300392 = seq__300388;
var G__300393 = chunk__300389;
var G__300394 = count__300390;
var G__300395 = (i__300391 + 1);
seq__300388 = G__300392;
chunk__300389 = G__300393;
count__300390 = G__300394;
i__300391 = G__300395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300388);if(temp__4092__auto__)
{var seq__300388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300388__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300388__$1);{
var G__300396 = cljs.core.chunk_rest.call(null,seq__300388__$1);
var G__300397 = c__14549__auto__;
var G__300398 = cljs.core.count.call(null,c__14549__auto__);
var G__300399 = 0;
seq__300388 = G__300396;
chunk__300389 = G__300397;
count__300390 = G__300398;
i__300391 = G__300399;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__300388__$1);domina.remove_attr_BANG_.call(null,p1__300383_SHARP_,name);
{
var G__300400 = cljs.core.next.call(null,seq__300388__$1);
var G__300401 = null;
var G__300402 = 0;
var G__300403 = 0;
seq__300388 = G__300400;
chunk__300389 = G__300401;
count__300390 = G__300402;
i__300391 = G__300403;
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
remove_attr.cljs$lang$applyTo = (function (arglist__300404){
var values = cljs.core.seq(arglist__300404);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__300407){var vec__300408 = p__300407;var n = cljs.core.nth.call(null,vec__300408,0,null);var v = cljs.core.nth.call(null,vec__300408,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__300409){
var forms = cljs.core.seq(arglist__300409);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__300410_SHARP_){var seq__300415 = cljs.core.seq.call(null,values);var chunk__300416 = null;var count__300417 = 0;var i__300418 = 0;while(true){
if((i__300418 < count__300417))
{var val = cljs.core._nth.call(null,chunk__300416,i__300418);domina.add_class_BANG_.call(null,p1__300410_SHARP_,val);
{
var G__300419 = seq__300415;
var G__300420 = chunk__300416;
var G__300421 = count__300417;
var G__300422 = (i__300418 + 1);
seq__300415 = G__300419;
chunk__300416 = G__300420;
count__300417 = G__300421;
i__300418 = G__300422;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300415);if(temp__4092__auto__)
{var seq__300415__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300415__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300415__$1);{
var G__300423 = cljs.core.chunk_rest.call(null,seq__300415__$1);
var G__300424 = c__14549__auto__;
var G__300425 = cljs.core.count.call(null,c__14549__auto__);
var G__300426 = 0;
seq__300415 = G__300423;
chunk__300416 = G__300424;
count__300417 = G__300425;
i__300418 = G__300426;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__300415__$1);domina.add_class_BANG_.call(null,p1__300410_SHARP_,val);
{
var G__300427 = cljs.core.next.call(null,seq__300415__$1);
var G__300428 = null;
var G__300429 = 0;
var G__300430 = 0;
seq__300415 = G__300427;
chunk__300416 = G__300428;
count__300417 = G__300429;
i__300418 = G__300430;
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
add_class.cljs$lang$applyTo = (function (arglist__300431){
var values = cljs.core.seq(arglist__300431);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__300432_SHARP_){var seq__300437 = cljs.core.seq.call(null,values);var chunk__300438 = null;var count__300439 = 0;var i__300440 = 0;while(true){
if((i__300440 < count__300439))
{var val = cljs.core._nth.call(null,chunk__300438,i__300440);domina.remove_class_BANG_.call(null,p1__300432_SHARP_,val);
{
var G__300441 = seq__300437;
var G__300442 = chunk__300438;
var G__300443 = count__300439;
var G__300444 = (i__300440 + 1);
seq__300437 = G__300441;
chunk__300438 = G__300442;
count__300439 = G__300443;
i__300440 = G__300444;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300437);if(temp__4092__auto__)
{var seq__300437__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300437__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300437__$1);{
var G__300445 = cljs.core.chunk_rest.call(null,seq__300437__$1);
var G__300446 = c__14549__auto__;
var G__300447 = cljs.core.count.call(null,c__14549__auto__);
var G__300448 = 0;
seq__300437 = G__300445;
chunk__300438 = G__300446;
count__300439 = G__300447;
i__300440 = G__300448;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__300437__$1);domina.remove_class_BANG_.call(null,p1__300432_SHARP_,val);
{
var G__300449 = cljs.core.next.call(null,seq__300437__$1);
var G__300450 = null;
var G__300451 = 0;
var G__300452 = 0;
seq__300437 = G__300449;
chunk__300438 = G__300450;
count__300439 = G__300451;
i__300440 = G__300452;
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
remove_class.cljs$lang$applyTo = (function (arglist__300453){
var values = cljs.core.seq(arglist__300453);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__300454_SHARP_){return domina.set_classes_BANG_.call(null,p1__300454_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__300455){
var values = cljs.core.seq(arglist__300455);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__300460 = cljs.core.seq.call(null,forms);var chunk__300461 = null;var count__300462 = 0;var i__300463 = 0;while(true){
if((i__300463 < count__300462))
{var fun = cljs.core._nth.call(null,chunk__300461,i__300463);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__300464 = seq__300460;
var G__300465 = chunk__300461;
var G__300466 = count__300462;
var G__300467 = (i__300463 + 1);
seq__300460 = G__300464;
chunk__300461 = G__300465;
count__300462 = G__300466;
i__300463 = G__300467;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300460);if(temp__4092__auto__)
{var seq__300460__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300460__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300460__$1);{
var G__300468 = cljs.core.chunk_rest.call(null,seq__300460__$1);
var G__300469 = c__14549__auto__;
var G__300470 = cljs.core.count.call(null,c__14549__auto__);
var G__300471 = 0;
seq__300460 = G__300468;
chunk__300461 = G__300469;
count__300462 = G__300470;
i__300463 = G__300471;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__300460__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__300472 = cljs.core.next.call(null,seq__300460__$1);
var G__300473 = null;
var G__300474 = 0;
var G__300475 = 0;
seq__300460 = G__300472;
chunk__300461 = G__300473;
count__300462 = G__300474;
i__300463 = G__300475;
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
do__GT_.cljs$lang$applyTo = (function (arglist__300476){
var forms = cljs.core.seq(arglist__300476);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300477_SHARP_,p2__300478_SHARP_){return domina.append_BANG_.call(null,p1__300477_SHARP_,p2__300478_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__300479){
var values = cljs.core.seq(arglist__300479);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300480_SHARP_,p2__300481_SHARP_){return domina.prepend_BANG_.call(null,p1__300480_SHARP_,p2__300481_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__300482){
var values = cljs.core.seq(arglist__300482);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300483_SHARP_,p2__300484_SHARP_){return domina.insert_before_BANG_.call(null,p1__300483_SHARP_,p2__300484_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__300485){
var values = cljs.core.seq(arglist__300485);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300486_SHARP_,p2__300487_SHARP_){return domina.insert_after_BANG_.call(null,p1__300486_SHARP_,p2__300487_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__300488){
var values = cljs.core.seq(arglist__300488);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__300489_SHARP_,p2__300490_SHARP_){return domina.swap_content_BANG_.call(null,p1__300489_SHARP_,p2__300490_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__300491){
var values = cljs.core.seq(arglist__300491);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__300492_SHARP_){return domina.detach_BANG_.call(null,p1__300492_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__300493_SHARP_){var seq__300500 = cljs.core.seq.call(null,pairs);var chunk__300501 = null;var count__300502 = 0;var i__300503 = 0;while(true){
if((i__300503 < count__300502))
{var vec__300504 = cljs.core._nth.call(null,chunk__300501,i__300503);var name = cljs.core.nth.call(null,vec__300504,0,null);var value = cljs.core.nth.call(null,vec__300504,1,null);domina.set_style_BANG_.call(null,p1__300493_SHARP_,name,value);
{
var G__300506 = seq__300500;
var G__300507 = chunk__300501;
var G__300508 = count__300502;
var G__300509 = (i__300503 + 1);
seq__300500 = G__300506;
chunk__300501 = G__300507;
count__300502 = G__300508;
i__300503 = G__300509;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300500);if(temp__4092__auto__)
{var seq__300500__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300500__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300500__$1);{
var G__300510 = cljs.core.chunk_rest.call(null,seq__300500__$1);
var G__300511 = c__14549__auto__;
var G__300512 = cljs.core.count.call(null,c__14549__auto__);
var G__300513 = 0;
seq__300500 = G__300510;
chunk__300501 = G__300511;
count__300502 = G__300512;
i__300503 = G__300513;
continue;
}
} else
{var vec__300505 = cljs.core.first.call(null,seq__300500__$1);var name = cljs.core.nth.call(null,vec__300505,0,null);var value = cljs.core.nth.call(null,vec__300505,1,null);domina.set_style_BANG_.call(null,p1__300493_SHARP_,name,value);
{
var G__300514 = cljs.core.next.call(null,seq__300500__$1);
var G__300515 = null;
var G__300516 = 0;
var G__300517 = 0;
seq__300500 = G__300514;
chunk__300501 = G__300515;
count__300502 = G__300516;
i__300503 = G__300517;
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
set_style.cljs$lang$applyTo = (function (arglist__300518){
var values = cljs.core.seq(arglist__300518);
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
remove_style.cljs$lang$applyTo = (function (arglist__300519){
var values = cljs.core.seq(arglist__300519);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__300520_SHARP_){return domina.set_data_BANG_.call(null,p1__300520_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__300521){
var ttime = cljs.core.first(arglist__300521);
var funcs = cljs.core.rest(arglist__300521);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__300523_SHARP_,p2__300522_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__300522_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__300548_300556 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__300549_300557 = null;var count__300550_300558 = 0;var i__300551_300559 = 0;while(true){
if((i__300551_300559 < count__300550_300558))
{var idx_300560 = cljs.core._nth.call(null,chunk__300549_300557,i__300551_300559);var attr_300561 = pnod.attributes.item(idx_300560);if(cljs.core.truth_(attr_300561.specified))
{attr_300561.value = rep_str.call(null,attr_300561.value);
} else
{}
{
var G__300562 = seq__300548_300556;
var G__300563 = chunk__300549_300557;
var G__300564 = count__300550_300558;
var G__300565 = (i__300551_300559 + 1);
seq__300548_300556 = G__300562;
chunk__300549_300557 = G__300563;
count__300550_300558 = G__300564;
i__300551_300559 = G__300565;
continue;
}
} else
{var temp__4092__auto___300566 = cljs.core.seq.call(null,seq__300548_300556);if(temp__4092__auto___300566)
{var seq__300548_300567__$1 = temp__4092__auto___300566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300548_300567__$1))
{var c__14549__auto___300568 = cljs.core.chunk_first.call(null,seq__300548_300567__$1);{
var G__300569 = cljs.core.chunk_rest.call(null,seq__300548_300567__$1);
var G__300570 = c__14549__auto___300568;
var G__300571 = cljs.core.count.call(null,c__14549__auto___300568);
var G__300572 = 0;
seq__300548_300556 = G__300569;
chunk__300549_300557 = G__300570;
count__300550_300558 = G__300571;
i__300551_300559 = G__300572;
continue;
}
} else
{var idx_300573 = cljs.core.first.call(null,seq__300548_300567__$1);var attr_300574 = pnod.attributes.item(idx_300573);if(cljs.core.truth_(attr_300574.specified))
{attr_300574.value = rep_str.call(null,attr_300574.value);
} else
{}
{
var G__300575 = cljs.core.next.call(null,seq__300548_300567__$1);
var G__300576 = null;
var G__300577 = 0;
var G__300578 = 0;
seq__300548_300556 = G__300575;
chunk__300549_300557 = G__300576;
count__300550_300558 = G__300577;
i__300551_300559 = G__300578;
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
{var seq__300552 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__300553 = null;var count__300554 = 0;var i__300555 = 0;while(true){
if((i__300555 < count__300554))
{var cnode = cljs.core._nth.call(null,chunk__300553,i__300555);rep_node.call(null,cnode);
{
var G__300579 = seq__300552;
var G__300580 = chunk__300553;
var G__300581 = count__300554;
var G__300582 = (i__300555 + 1);
seq__300552 = G__300579;
chunk__300553 = G__300580;
count__300554 = G__300581;
i__300555 = G__300582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300552);if(temp__4092__auto__)
{var seq__300552__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300552__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300552__$1);{
var G__300583 = cljs.core.chunk_rest.call(null,seq__300552__$1);
var G__300584 = c__14549__auto__;
var G__300585 = cljs.core.count.call(null,c__14549__auto__);
var G__300586 = 0;
seq__300552 = G__300583;
chunk__300553 = G__300584;
count__300554 = G__300585;
i__300555 = G__300586;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__300552__$1);rep_node.call(null,cnode);
{
var G__300587 = cljs.core.next.call(null,seq__300552__$1);
var G__300588 = null;
var G__300589 = 0;
var G__300590 = 0;
seq__300552 = G__300587;
chunk__300553 = G__300588;
count__300554 = G__300589;
i__300555 = G__300590;
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
{var vec__300600 = node_spec;var tag = cljs.core.nth.call(null,vec__300600,0,null);var vec__300601 = cljs.core.nthnext.call(null,vec__300600,1);var m = cljs.core.nth.call(null,vec__300601,0,null);var ms = cljs.core.nthnext.call(null,vec__300601,1);var more = vec__300601;var vec__300602 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__300602,0,null);var segments = cljs.core.nthnext.call(null,vec__300602,1);var id = cljs.core.some.call(null,((function (vec__300600,tag,vec__300601,m,ms,more,vec__300602,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__300600,tag,vec__300601,m,ms,more,vec__300602,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__300600,tag,vec__300601,m,ms,more,vec__300602,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__300600,tag,vec__300601,m,ms,more,vec__300602,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__300603_300609 = cljs.core.seq.call(null,attrs__$2);var chunk__300604_300610 = null;var count__300605_300611 = 0;var i__300606_300612 = 0;while(true){
if((i__300606_300612 < count__300605_300611))
{var vec__300607_300613 = cljs.core._nth.call(null,chunk__300604_300610,i__300606_300612);var key_300614 = cljs.core.nth.call(null,vec__300607_300613,0,null);var val_300615 = cljs.core.nth.call(null,vec__300607_300613,1,null);node.setAttribute(cljs.core.name.call(null,key_300614),val_300615);
{
var G__300616 = seq__300603_300609;
var G__300617 = chunk__300604_300610;
var G__300618 = count__300605_300611;
var G__300619 = (i__300606_300612 + 1);
seq__300603_300609 = G__300616;
chunk__300604_300610 = G__300617;
count__300605_300611 = G__300618;
i__300606_300612 = G__300619;
continue;
}
} else
{var temp__4092__auto___300620 = cljs.core.seq.call(null,seq__300603_300609);if(temp__4092__auto___300620)
{var seq__300603_300621__$1 = temp__4092__auto___300620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300603_300621__$1))
{var c__14549__auto___300622 = cljs.core.chunk_first.call(null,seq__300603_300621__$1);{
var G__300623 = cljs.core.chunk_rest.call(null,seq__300603_300621__$1);
var G__300624 = c__14549__auto___300622;
var G__300625 = cljs.core.count.call(null,c__14549__auto___300622);
var G__300626 = 0;
seq__300603_300609 = G__300623;
chunk__300604_300610 = G__300624;
count__300605_300611 = G__300625;
i__300606_300612 = G__300626;
continue;
}
} else
{var vec__300608_300627 = cljs.core.first.call(null,seq__300603_300621__$1);var key_300628 = cljs.core.nth.call(null,vec__300608_300627,0,null);var val_300629 = cljs.core.nth.call(null,vec__300608_300627,1,null);node.setAttribute(cljs.core.name.call(null,key_300628),val_300629);
{
var G__300630 = cljs.core.next.call(null,seq__300603_300621__$1);
var G__300631 = null;
var G__300632 = 0;
var G__300633 = 0;
seq__300603_300609 = G__300630;
chunk__300604_300610 = G__300631;
count__300605_300611 = G__300632;
i__300606_300612 = G__300633;
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
return (function (p1__300634_SHARP_){return p1__300634_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__300635_SHARP_){return p1__300635_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__300637_SHARP_,p2__300636_SHARP_){var G__300640 = p2__300636_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__300640))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__300640))
{return enfocus.core.read_select_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__300640))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__300640))
{var G__300641 = p2__300636_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__300641))
{return enfocus.core.read_checked_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__300641))
{return enfocus.core.read_checked_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__300641))
{return enfocus.core.read_simple_input.call(null,p2__300636_SHARP_,p1__300637_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__300637_SHARP_;
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
{return p1__300637_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__300642_SHARP_){if((p1__300642_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__300642_SHARP_);
} else
{if((p1__300642_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__300642_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__300642_SHARP_))
{return create_sel_str.call(null,p1__300642_SHARP_);
} else
{if(typeof p1__300642_SHARP_ === 'string')
{return p1__300642_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__300653 = node;if(G__300653)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__300653.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__300653.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__300653);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__300653);
}
} else
{return and__13813__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__300654 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__300654,0,null);var trans__$1 = cljs.core.nth.call(null,vec__300654,1,null);var seq__300655 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__300656 = null;var count__300657 = 0;var i__300658 = 0;while(true){
if((i__300658 < count__300657))
{var vec__300659 = cljs.core._nth.call(null,chunk__300656,i__300658);var sel = cljs.core.nth.call(null,vec__300659,0,null);var t = cljs.core.nth.call(null,vec__300659,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__300661 = seq__300655;
var G__300662 = chunk__300656;
var G__300663 = count__300657;
var G__300664 = (i__300658 + 1);
seq__300655 = G__300661;
chunk__300656 = G__300662;
count__300657 = G__300663;
i__300658 = G__300664;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300655);if(temp__4092__auto__)
{var seq__300655__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300655__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300655__$1);{
var G__300665 = cljs.core.chunk_rest.call(null,seq__300655__$1);
var G__300666 = c__14549__auto__;
var G__300667 = cljs.core.count.call(null,c__14549__auto__);
var G__300668 = 0;
seq__300655 = G__300665;
chunk__300656 = G__300666;
count__300657 = G__300667;
i__300658 = G__300668;
continue;
}
} else
{var vec__300660 = cljs.core.first.call(null,seq__300655__$1);var sel = cljs.core.nth.call(null,vec__300660,0,null);var t = cljs.core.nth.call(null,vec__300660,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__300669 = cljs.core.next.call(null,seq__300655__$1);
var G__300670 = null;
var G__300671 = 0;
var G__300672 = 0;
seq__300655 = G__300669;
chunk__300656 = G__300670;
count__300657 = G__300671;
i__300658 = G__300672;
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
i_at.cljs$lang$applyTo = (function (arglist__300673){
var id_mask = cljs.core.first(arglist__300673);
arglist__300673 = cljs.core.next(arglist__300673);
var node = cljs.core.first(arglist__300673);
var trans = cljs.core.rest(arglist__300673);
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
at.cljs$lang$applyTo = (function (arglist__300674){
var node = cljs.core.first(arglist__300674);
var trans = cljs.core.rest(arglist__300674);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__300679 = node;if(G__300679)
{var bit__14451__auto__ = null;if(cljs.core.truth_((function (){var or__13825__auto__ = bit__14451__auto__;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return G__300679.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__300679.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__300679);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__300679);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__300680 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__300680,0,null);var trans__$1 = cljs.core.nth.call(null,vec__300680,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__300681){var vec__300682 = p__300681;var ky = cljs.core.nth.call(null,vec__300682,0,null);var sel = cljs.core.nth.call(null,vec__300682,1,null);var ext = cljs.core.nth.call(null,vec__300682,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__300683){
var node = cljs.core.first(arglist__300683);
var trans = cljs.core.rest(arglist__300683);
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