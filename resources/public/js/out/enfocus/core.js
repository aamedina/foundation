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
enfocus.core.ISelector = (function (){var obj46161 = {};return obj46161;
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
enfocus.core.ITransform = (function (){var obj46163 = {};return obj46163;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__46164_SHARP_){if(typeof p1__46164_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__46164_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__46164_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__46171_46177 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__46172_46178 = null;var count__46173_46179 = 0;var i__46174_46180 = 0;while(true){
if((i__46174_46180 < count__46173_46179))
{var vec__46175_46181 = cljs.core._nth.call(null,chunk__46172_46178,i__46174_46180);var attr_46182 = cljs.core.nth.call(null,vec__46175_46181,0,null);var value_46183 = cljs.core.nth.call(null,vec__46175_46181,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_46182),value_46183);
{
var G__46184 = seq__46171_46177;
var G__46185 = chunk__46172_46178;
var G__46186 = count__46173_46179;
var G__46187 = (i__46174_46180 + 1);
seq__46171_46177 = G__46184;
chunk__46172_46178 = G__46185;
count__46173_46179 = G__46186;
i__46174_46180 = G__46187;
continue;
}
} else
{var temp__4092__auto___46188 = cljs.core.seq.call(null,seq__46171_46177);if(temp__4092__auto___46188)
{var seq__46171_46189__$1 = temp__4092__auto___46188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46171_46189__$1))
{var c__8974__auto___46190 = cljs.core.chunk_first.call(null,seq__46171_46189__$1);{
var G__46191 = cljs.core.chunk_rest.call(null,seq__46171_46189__$1);
var G__46192 = c__8974__auto___46190;
var G__46193 = cljs.core.count.call(null,c__8974__auto___46190);
var G__46194 = 0;
seq__46171_46177 = G__46191;
chunk__46172_46178 = G__46192;
count__46173_46179 = G__46193;
i__46174_46180 = G__46194;
continue;
}
} else
{var vec__46176_46195 = cljs.core.first.call(null,seq__46171_46189__$1);var attr_46196 = cljs.core.nth.call(null,vec__46176_46195,0,null);var value_46197 = cljs.core.nth.call(null,vec__46176_46195,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_46196),value_46197);
{
var G__46198 = cljs.core.next.call(null,seq__46171_46189__$1);
var G__46199 = null;
var G__46200 = 0;
var G__46201 = 0;
seq__46171_46177 = G__46198;
chunk__46172_46178 = G__46199;
count__46173_46179 = G__46200;
i__46174_46180 = G__46201;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__46206 = cljs.core.seq.call(null,values);var chunk__46207 = null;var count__46208 = 0;var i__46209 = 0;while(true){
if((i__46209 < count__46208))
{var attr = cljs.core._nth.call(null,chunk__46207,i__46209);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__46210 = seq__46206;
var G__46211 = chunk__46207;
var G__46212 = count__46208;
var G__46213 = (i__46209 + 1);
seq__46206 = G__46210;
chunk__46207 = G__46211;
count__46208 = G__46212;
i__46209 = G__46213;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46206);if(temp__4092__auto__)
{var seq__46206__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46206__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46206__$1);{
var G__46214 = cljs.core.chunk_rest.call(null,seq__46206__$1);
var G__46215 = c__8974__auto__;
var G__46216 = cljs.core.count.call(null,c__8974__auto__);
var G__46217 = 0;
seq__46206 = G__46214;
chunk__46207 = G__46215;
count__46208 = G__46216;
i__46209 = G__46217;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__46206__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__46218 = cljs.core.next.call(null,seq__46206__$1);
var G__46219 = null;
var G__46220 = 0;
var G__46221 = 0;
seq__46206 = G__46218;
chunk__46207 = G__46219;
count__46208 = G__46220;
i__46209 = G__46221;
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
{var seq__46228_46234 = cljs.core.seq.call(null,ats);var chunk__46229_46235 = null;var count__46230_46236 = 0;var i__46231_46237 = 0;while(true){
if((i__46231_46237 < count__46230_46236))
{var vec__46232_46238 = cljs.core._nth.call(null,chunk__46229_46235,i__46231_46237);var k_46239 = cljs.core.nth.call(null,vec__46232_46238,0,null);var v_46240 = cljs.core.nth.call(null,vec__46232_46238,1,null);add_map_attrs.call(null,elem,k_46239,v_46240);
{
var G__46241 = seq__46228_46234;
var G__46242 = chunk__46229_46235;
var G__46243 = count__46230_46236;
var G__46244 = (i__46231_46237 + 1);
seq__46228_46234 = G__46241;
chunk__46229_46235 = G__46242;
count__46230_46236 = G__46243;
i__46231_46237 = G__46244;
continue;
}
} else
{var temp__4092__auto___46245 = cljs.core.seq.call(null,seq__46228_46234);if(temp__4092__auto___46245)
{var seq__46228_46246__$1 = temp__4092__auto___46245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46228_46246__$1))
{var c__8974__auto___46247 = cljs.core.chunk_first.call(null,seq__46228_46246__$1);{
var G__46248 = cljs.core.chunk_rest.call(null,seq__46228_46246__$1);
var G__46249 = c__8974__auto___46247;
var G__46250 = cljs.core.count.call(null,c__8974__auto___46247);
var G__46251 = 0;
seq__46228_46234 = G__46248;
chunk__46229_46235 = G__46249;
count__46230_46236 = G__46250;
i__46231_46237 = G__46251;
continue;
}
} else
{var vec__46233_46252 = cljs.core.first.call(null,seq__46228_46246__$1);var k_46253 = cljs.core.nth.call(null,vec__46233_46252,0,null);var v_46254 = cljs.core.nth.call(null,vec__46233_46252,1,null);add_map_attrs.call(null,elem,k_46253,v_46254);
{
var G__46255 = cljs.core.next.call(null,seq__46228_46246__$1);
var G__46256 = null;
var G__46257 = 0;
var G__46258 = 0;
seq__46228_46234 = G__46255;
chunk__46229_46235 = G__46256;
count__46230_46236 = G__46257;
i__46231_46237 = G__46258;
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
var seq__46263_46267 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__46264_46268 = null;var count__46265_46269 = 0;var i__46266_46270 = 0;while(true){
if((i__46266_46270 < count__46265_46269))
{var node_46271 = cljs.core._nth.call(null,chunk__46264_46268,i__46266_46270);goog.dom.appendChild(div,node_46271);
{
var G__46272 = seq__46263_46267;
var G__46273 = chunk__46264_46268;
var G__46274 = count__46265_46269;
var G__46275 = (i__46266_46270 + 1);
seq__46263_46267 = G__46272;
chunk__46264_46268 = G__46273;
count__46265_46269 = G__46274;
i__46266_46270 = G__46275;
continue;
}
} else
{var temp__4092__auto___46276 = cljs.core.seq.call(null,seq__46263_46267);if(temp__4092__auto___46276)
{var seq__46263_46277__$1 = temp__4092__auto___46276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46263_46277__$1))
{var c__8974__auto___46278 = cljs.core.chunk_first.call(null,seq__46263_46277__$1);{
var G__46279 = cljs.core.chunk_rest.call(null,seq__46263_46277__$1);
var G__46280 = c__8974__auto___46278;
var G__46281 = cljs.core.count.call(null,c__8974__auto___46278);
var G__46282 = 0;
seq__46263_46267 = G__46279;
chunk__46264_46268 = G__46280;
count__46265_46269 = G__46281;
i__46266_46270 = G__46282;
continue;
}
} else
{var node_46283 = cljs.core.first.call(null,seq__46263_46277__$1);goog.dom.appendChild(div,node_46283);
{
var G__46284 = cljs.core.next.call(null,seq__46263_46277__$1);
var G__46285 = null;
var G__46286 = 0;
var G__46287 = 0;
seq__46263_46267 = G__46284;
chunk__46264_46268 = G__46285;
count__46265_46269 = G__46286;
i__46266_46270 = G__46287;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__46288_SHARP_){var id = p1__46288_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__46288_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__46290 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__46290,0,null);var txt = cljs.core.nth.call(null,vec__46290,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__46295_46299 = cljs.core.seq.call(null,dfa);var chunk__46296_46300 = null;var count__46297_46301 = 0;var i__46298_46302 = 0;while(true){
if((i__46298_46302 < count__46297_46301))
{var df_46303 = cljs.core._nth.call(null,chunk__46296_46300,i__46298_46302);goog.dom.append(frag,df_46303);
{
var G__46304 = seq__46295_46299;
var G__46305 = chunk__46296_46300;
var G__46306 = count__46297_46301;
var G__46307 = (i__46298_46302 + 1);
seq__46295_46299 = G__46304;
chunk__46296_46300 = G__46305;
count__46297_46301 = G__46306;
i__46298_46302 = G__46307;
continue;
}
} else
{var temp__4092__auto___46308 = cljs.core.seq.call(null,seq__46295_46299);if(temp__4092__auto___46308)
{var seq__46295_46309__$1 = temp__4092__auto___46308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46295_46309__$1))
{var c__8974__auto___46310 = cljs.core.chunk_first.call(null,seq__46295_46309__$1);{
var G__46311 = cljs.core.chunk_rest.call(null,seq__46295_46309__$1);
var G__46312 = c__8974__auto___46310;
var G__46313 = cljs.core.count.call(null,c__8974__auto___46310);
var G__46314 = 0;
seq__46295_46299 = G__46311;
chunk__46296_46300 = G__46312;
count__46297_46301 = G__46313;
i__46298_46302 = G__46314;
continue;
}
} else
{var df_46315 = cljs.core.first.call(null,seq__46295_46309__$1);goog.dom.append(frag,df_46315);
{
var G__46316 = cljs.core.next.call(null,seq__46295_46309__$1);
var G__46317 = null;
var G__46318 = 0;
var G__46319 = 0;
seq__46295_46299 = G__46316;
chunk__46296_46300 = G__46317;
count__46297_46301 = G__46318;
i__46298_46302 = G__46319;
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
{var vec__46322 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__46322,0,null);var tdom = cljs.core.nth.call(null,vec__46322,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__46322,sym,tdom,dom,tsnip){
return (function (p1__46320_SHARP_){return p1__46320_SHARP_.outerHTML;
});})(vec__46322,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t46326 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46326 = (function (trans,func,extr_multi_node,meta46327){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta46327 = meta46327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46326.cljs$lang$type = true;
enfocus.core.t46326.cljs$lang$ctorStr = "enfocus.core/t46326";
enfocus.core.t46326.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t46326");
});
enfocus.core.t46326.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46326.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46326.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46328){var self__ = this;
var _46328__$1 = this;return self__.meta46327;
});
enfocus.core.t46326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46328,meta46327__$1){var self__ = this;
var _46328__$1 = this;return (new enfocus.core.t46326(self__.trans,self__.func,self__.extr_multi_node,meta46327__$1));
});
enfocus.core.__GT_t46326 = (function __GT_t46326(trans__$1,func__$1,extr_multi_node__$1,meta46327){return (new enfocus.core.t46326(trans__$1,func__$1,extr_multi_node__$1,meta46327));
});
}
return (new enfocus.core.t46326(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t46336 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46336 = (function (trans,func,multi_node_chain,meta46337){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta46337 = meta46337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46336.cljs$lang$type = true;
enfocus.core.t46336.cljs$lang$ctorStr = "enfocus.core/t46336";
enfocus.core.t46336.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t46336");
});
enfocus.core.t46336.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46336.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46336.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46338){var self__ = this;
var _46338__$1 = this;return self__.meta46337;
});
enfocus.core.t46336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46338,meta46337__$1){var self__ = this;
var _46338__$1 = this;return (new enfocus.core.t46336(self__.trans,self__.func,self__.multi_node_chain,meta46337__$1));
});
enfocus.core.__GT_t46336 = (function __GT_t46336(trans__$1,func__$1,multi_node_chain__$1,meta46337){return (new enfocus.core.t46336(trans__$1,func__$1,multi_node_chain__$1,meta46337));
});
}
return (new enfocus.core.t46336(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__46329_SHARP_){return domina.nodes.call(null,p1__46329_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t46339 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t46339 = (function (trans,func,values,multi_node_chain,meta46340){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta46340 = meta46340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t46339.cljs$lang$type = true;
enfocus.core.t46339.cljs$lang$ctorStr = "enfocus.core/t46339";
enfocus.core.t46339.cljs$lang$ctorPrWriter = (function (this__8794__auto__,writer__8795__auto__,opt__8796__auto__){return cljs.core._write.call(null,writer__8795__auto__,"enfocus.core/t46339");
});
enfocus.core.t46339.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t46339.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t46339.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t46339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46341){var self__ = this;
var _46341__$1 = this;return self__.meta46340;
});
enfocus.core.t46339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46341,meta46340__$1){var self__ = this;
var _46341__$1 = this;return (new enfocus.core.t46339(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta46340__$1));
});
enfocus.core.__GT_t46339 = (function __GT_t46339(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta46340){return (new enfocus.core.t46339(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta46340));
});
}
return (new enfocus.core.t46339(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46342_SHARP_,p2__46343_SHARP_){domina.destroy_children_BANG_.call(null,p1__46342_SHARP_);
return domina.append_BANG_.call(null,p1__46342_SHARP_,p2__46343_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__46344){
var values = cljs.core.seq(arglist__46344);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__46345_SHARP_){return domina.set_html_BANG_.call(null,p1__46345_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__46346_SHARP_){var seq__46353 = cljs.core.seq.call(null,pairs);var chunk__46354 = null;var count__46355 = 0;var i__46356 = 0;while(true){
if((i__46356 < count__46355))
{var vec__46357 = cljs.core._nth.call(null,chunk__46354,i__46356);var name = cljs.core.nth.call(null,vec__46357,0,null);var value = cljs.core.nth.call(null,vec__46357,1,null);domina.set_attr_BANG_.call(null,p1__46346_SHARP_,name,value);
{
var G__46359 = seq__46353;
var G__46360 = chunk__46354;
var G__46361 = count__46355;
var G__46362 = (i__46356 + 1);
seq__46353 = G__46359;
chunk__46354 = G__46360;
count__46355 = G__46361;
i__46356 = G__46362;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46353);if(temp__4092__auto__)
{var seq__46353__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46353__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46353__$1);{
var G__46363 = cljs.core.chunk_rest.call(null,seq__46353__$1);
var G__46364 = c__8974__auto__;
var G__46365 = cljs.core.count.call(null,c__8974__auto__);
var G__46366 = 0;
seq__46353 = G__46363;
chunk__46354 = G__46364;
count__46355 = G__46365;
i__46356 = G__46366;
continue;
}
} else
{var vec__46358 = cljs.core.first.call(null,seq__46353__$1);var name = cljs.core.nth.call(null,vec__46358,0,null);var value = cljs.core.nth.call(null,vec__46358,1,null);domina.set_attr_BANG_.call(null,p1__46346_SHARP_,name,value);
{
var G__46367 = cljs.core.next.call(null,seq__46353__$1);
var G__46368 = null;
var G__46369 = 0;
var G__46370 = 0;
seq__46353 = G__46367;
chunk__46354 = G__46368;
count__46355 = G__46369;
i__46356 = G__46370;
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
set_attr.cljs$lang$applyTo = (function (arglist__46371){
var values = cljs.core.seq(arglist__46371);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46372_SHARP_){var seq__46377 = cljs.core.seq.call(null,values);var chunk__46378 = null;var count__46379 = 0;var i__46380 = 0;while(true){
if((i__46380 < count__46379))
{var name = cljs.core._nth.call(null,chunk__46378,i__46380);domina.remove_attr_BANG_.call(null,p1__46372_SHARP_,name);
{
var G__46381 = seq__46377;
var G__46382 = chunk__46378;
var G__46383 = count__46379;
var G__46384 = (i__46380 + 1);
seq__46377 = G__46381;
chunk__46378 = G__46382;
count__46379 = G__46383;
i__46380 = G__46384;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46377);if(temp__4092__auto__)
{var seq__46377__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46377__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46377__$1);{
var G__46385 = cljs.core.chunk_rest.call(null,seq__46377__$1);
var G__46386 = c__8974__auto__;
var G__46387 = cljs.core.count.call(null,c__8974__auto__);
var G__46388 = 0;
seq__46377 = G__46385;
chunk__46378 = G__46386;
count__46379 = G__46387;
i__46380 = G__46388;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__46377__$1);domina.remove_attr_BANG_.call(null,p1__46372_SHARP_,name);
{
var G__46389 = cljs.core.next.call(null,seq__46377__$1);
var G__46390 = null;
var G__46391 = 0;
var G__46392 = 0;
seq__46377 = G__46389;
chunk__46378 = G__46390;
count__46379 = G__46391;
i__46380 = G__46392;
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
remove_attr.cljs$lang$applyTo = (function (arglist__46393){
var values = cljs.core.seq(arglist__46393);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__46396){var vec__46397 = p__46396;var n = cljs.core.nth.call(null,vec__46397,0,null);var v = cljs.core.nth.call(null,vec__46397,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__46398){
var forms = cljs.core.seq(arglist__46398);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46399_SHARP_){var seq__46404 = cljs.core.seq.call(null,values);var chunk__46405 = null;var count__46406 = 0;var i__46407 = 0;while(true){
if((i__46407 < count__46406))
{var val = cljs.core._nth.call(null,chunk__46405,i__46407);domina.add_class_BANG_.call(null,p1__46399_SHARP_,val);
{
var G__46408 = seq__46404;
var G__46409 = chunk__46405;
var G__46410 = count__46406;
var G__46411 = (i__46407 + 1);
seq__46404 = G__46408;
chunk__46405 = G__46409;
count__46406 = G__46410;
i__46407 = G__46411;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46404);if(temp__4092__auto__)
{var seq__46404__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46404__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46404__$1);{
var G__46412 = cljs.core.chunk_rest.call(null,seq__46404__$1);
var G__46413 = c__8974__auto__;
var G__46414 = cljs.core.count.call(null,c__8974__auto__);
var G__46415 = 0;
seq__46404 = G__46412;
chunk__46405 = G__46413;
count__46406 = G__46414;
i__46407 = G__46415;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__46404__$1);domina.add_class_BANG_.call(null,p1__46399_SHARP_,val);
{
var G__46416 = cljs.core.next.call(null,seq__46404__$1);
var G__46417 = null;
var G__46418 = 0;
var G__46419 = 0;
seq__46404 = G__46416;
chunk__46405 = G__46417;
count__46406 = G__46418;
i__46407 = G__46419;
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
add_class.cljs$lang$applyTo = (function (arglist__46420){
var values = cljs.core.seq(arglist__46420);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46421_SHARP_){var seq__46426 = cljs.core.seq.call(null,values);var chunk__46427 = null;var count__46428 = 0;var i__46429 = 0;while(true){
if((i__46429 < count__46428))
{var val = cljs.core._nth.call(null,chunk__46427,i__46429);domina.remove_class_BANG_.call(null,p1__46421_SHARP_,val);
{
var G__46430 = seq__46426;
var G__46431 = chunk__46427;
var G__46432 = count__46428;
var G__46433 = (i__46429 + 1);
seq__46426 = G__46430;
chunk__46427 = G__46431;
count__46428 = G__46432;
i__46429 = G__46433;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46426);if(temp__4092__auto__)
{var seq__46426__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46426__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46426__$1);{
var G__46434 = cljs.core.chunk_rest.call(null,seq__46426__$1);
var G__46435 = c__8974__auto__;
var G__46436 = cljs.core.count.call(null,c__8974__auto__);
var G__46437 = 0;
seq__46426 = G__46434;
chunk__46427 = G__46435;
count__46428 = G__46436;
i__46429 = G__46437;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__46426__$1);domina.remove_class_BANG_.call(null,p1__46421_SHARP_,val);
{
var G__46438 = cljs.core.next.call(null,seq__46426__$1);
var G__46439 = null;
var G__46440 = 0;
var G__46441 = 0;
seq__46426 = G__46438;
chunk__46427 = G__46439;
count__46428 = G__46440;
i__46429 = G__46441;
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
remove_class.cljs$lang$applyTo = (function (arglist__46442){
var values = cljs.core.seq(arglist__46442);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__46443_SHARP_){return domina.set_classes_BANG_.call(null,p1__46443_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__46444){
var values = cljs.core.seq(arglist__46444);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__46449 = cljs.core.seq.call(null,forms);var chunk__46450 = null;var count__46451 = 0;var i__46452 = 0;while(true){
if((i__46452 < count__46451))
{var fun = cljs.core._nth.call(null,chunk__46450,i__46452);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__46453 = seq__46449;
var G__46454 = chunk__46450;
var G__46455 = count__46451;
var G__46456 = (i__46452 + 1);
seq__46449 = G__46453;
chunk__46450 = G__46454;
count__46451 = G__46455;
i__46452 = G__46456;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46449);if(temp__4092__auto__)
{var seq__46449__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46449__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46449__$1);{
var G__46457 = cljs.core.chunk_rest.call(null,seq__46449__$1);
var G__46458 = c__8974__auto__;
var G__46459 = cljs.core.count.call(null,c__8974__auto__);
var G__46460 = 0;
seq__46449 = G__46457;
chunk__46450 = G__46458;
count__46451 = G__46459;
i__46452 = G__46460;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__46449__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__46461 = cljs.core.next.call(null,seq__46449__$1);
var G__46462 = null;
var G__46463 = 0;
var G__46464 = 0;
seq__46449 = G__46461;
chunk__46450 = G__46462;
count__46451 = G__46463;
i__46452 = G__46464;
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
do__GT_.cljs$lang$applyTo = (function (arglist__46465){
var forms = cljs.core.seq(arglist__46465);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46466_SHARP_,p2__46467_SHARP_){return domina.append_BANG_.call(null,p1__46466_SHARP_,p2__46467_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__46468){
var values = cljs.core.seq(arglist__46468);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46469_SHARP_,p2__46470_SHARP_){return domina.prepend_BANG_.call(null,p1__46469_SHARP_,p2__46470_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__46471){
var values = cljs.core.seq(arglist__46471);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46472_SHARP_,p2__46473_SHARP_){return domina.insert_before_BANG_.call(null,p1__46472_SHARP_,p2__46473_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__46474){
var values = cljs.core.seq(arglist__46474);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46475_SHARP_,p2__46476_SHARP_){return domina.insert_after_BANG_.call(null,p1__46475_SHARP_,p2__46476_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__46477){
var values = cljs.core.seq(arglist__46477);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__46478_SHARP_,p2__46479_SHARP_){return domina.swap_content_BANG_.call(null,p1__46478_SHARP_,p2__46479_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__46480){
var values = cljs.core.seq(arglist__46480);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__46481_SHARP_){return domina.detach_BANG_.call(null,p1__46481_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__46482_SHARP_){var seq__46489 = cljs.core.seq.call(null,pairs);var chunk__46490 = null;var count__46491 = 0;var i__46492 = 0;while(true){
if((i__46492 < count__46491))
{var vec__46493 = cljs.core._nth.call(null,chunk__46490,i__46492);var name = cljs.core.nth.call(null,vec__46493,0,null);var value = cljs.core.nth.call(null,vec__46493,1,null);domina.set_style_BANG_.call(null,p1__46482_SHARP_,name,value);
{
var G__46495 = seq__46489;
var G__46496 = chunk__46490;
var G__46497 = count__46491;
var G__46498 = (i__46492 + 1);
seq__46489 = G__46495;
chunk__46490 = G__46496;
count__46491 = G__46497;
i__46492 = G__46498;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46489);if(temp__4092__auto__)
{var seq__46489__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46489__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46489__$1);{
var G__46499 = cljs.core.chunk_rest.call(null,seq__46489__$1);
var G__46500 = c__8974__auto__;
var G__46501 = cljs.core.count.call(null,c__8974__auto__);
var G__46502 = 0;
seq__46489 = G__46499;
chunk__46490 = G__46500;
count__46491 = G__46501;
i__46492 = G__46502;
continue;
}
} else
{var vec__46494 = cljs.core.first.call(null,seq__46489__$1);var name = cljs.core.nth.call(null,vec__46494,0,null);var value = cljs.core.nth.call(null,vec__46494,1,null);domina.set_style_BANG_.call(null,p1__46482_SHARP_,name,value);
{
var G__46503 = cljs.core.next.call(null,seq__46489__$1);
var G__46504 = null;
var G__46505 = 0;
var G__46506 = 0;
seq__46489 = G__46503;
chunk__46490 = G__46504;
count__46491 = G__46505;
i__46492 = G__46506;
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
set_style.cljs$lang$applyTo = (function (arglist__46507){
var values = cljs.core.seq(arglist__46507);
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
remove_style.cljs$lang$applyTo = (function (arglist__46508){
var values = cljs.core.seq(arglist__46508);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__46509_SHARP_){return domina.set_data_BANG_.call(null,p1__46509_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__46510){
var ttime = cljs.core.first(arglist__46510);
var funcs = cljs.core.rest(arglist__46510);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__46512_SHARP_,p2__46511_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__46511_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__46537_46545 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__46538_46546 = null;var count__46539_46547 = 0;var i__46540_46548 = 0;while(true){
if((i__46540_46548 < count__46539_46547))
{var idx_46549 = cljs.core._nth.call(null,chunk__46538_46546,i__46540_46548);var attr_46550 = pnod.attributes.item(idx_46549);if(cljs.core.truth_(attr_46550.specified))
{attr_46550.value = rep_str.call(null,attr_46550.value);
} else
{}
{
var G__46551 = seq__46537_46545;
var G__46552 = chunk__46538_46546;
var G__46553 = count__46539_46547;
var G__46554 = (i__46540_46548 + 1);
seq__46537_46545 = G__46551;
chunk__46538_46546 = G__46552;
count__46539_46547 = G__46553;
i__46540_46548 = G__46554;
continue;
}
} else
{var temp__4092__auto___46555 = cljs.core.seq.call(null,seq__46537_46545);if(temp__4092__auto___46555)
{var seq__46537_46556__$1 = temp__4092__auto___46555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46537_46556__$1))
{var c__8974__auto___46557 = cljs.core.chunk_first.call(null,seq__46537_46556__$1);{
var G__46558 = cljs.core.chunk_rest.call(null,seq__46537_46556__$1);
var G__46559 = c__8974__auto___46557;
var G__46560 = cljs.core.count.call(null,c__8974__auto___46557);
var G__46561 = 0;
seq__46537_46545 = G__46558;
chunk__46538_46546 = G__46559;
count__46539_46547 = G__46560;
i__46540_46548 = G__46561;
continue;
}
} else
{var idx_46562 = cljs.core.first.call(null,seq__46537_46556__$1);var attr_46563 = pnod.attributes.item(idx_46562);if(cljs.core.truth_(attr_46563.specified))
{attr_46563.value = rep_str.call(null,attr_46563.value);
} else
{}
{
var G__46564 = cljs.core.next.call(null,seq__46537_46556__$1);
var G__46565 = null;
var G__46566 = 0;
var G__46567 = 0;
seq__46537_46545 = G__46564;
chunk__46538_46546 = G__46565;
count__46539_46547 = G__46566;
i__46540_46548 = G__46567;
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
{var seq__46541 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__46542 = null;var count__46543 = 0;var i__46544 = 0;while(true){
if((i__46544 < count__46543))
{var cnode = cljs.core._nth.call(null,chunk__46542,i__46544);rep_node.call(null,cnode);
{
var G__46568 = seq__46541;
var G__46569 = chunk__46542;
var G__46570 = count__46543;
var G__46571 = (i__46544 + 1);
seq__46541 = G__46568;
chunk__46542 = G__46569;
count__46543 = G__46570;
i__46544 = G__46571;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46541);if(temp__4092__auto__)
{var seq__46541__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46541__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46541__$1);{
var G__46572 = cljs.core.chunk_rest.call(null,seq__46541__$1);
var G__46573 = c__8974__auto__;
var G__46574 = cljs.core.count.call(null,c__8974__auto__);
var G__46575 = 0;
seq__46541 = G__46572;
chunk__46542 = G__46573;
count__46543 = G__46574;
i__46544 = G__46575;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__46541__$1);rep_node.call(null,cnode);
{
var G__46576 = cljs.core.next.call(null,seq__46541__$1);
var G__46577 = null;
var G__46578 = 0;
var G__46579 = 0;
seq__46541 = G__46576;
chunk__46542 = G__46577;
count__46543 = G__46578;
i__46544 = G__46579;
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
{var vec__46589 = node_spec;var tag = cljs.core.nth.call(null,vec__46589,0,null);var vec__46590 = cljs.core.nthnext.call(null,vec__46589,1);var m = cljs.core.nth.call(null,vec__46590,0,null);var ms = cljs.core.nthnext.call(null,vec__46590,1);var more = vec__46590;var vec__46591 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__46591,0,null);var segments = cljs.core.nthnext.call(null,vec__46591,1);var id = cljs.core.some.call(null,((function (vec__46589,tag,vec__46590,m,ms,more,vec__46591,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__46589,tag,vec__46590,m,ms,more,vec__46591,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__46589,tag,vec__46590,m,ms,more,vec__46591,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__46589,tag,vec__46590,m,ms,more,vec__46591,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__46592_46598 = cljs.core.seq.call(null,attrs__$2);var chunk__46593_46599 = null;var count__46594_46600 = 0;var i__46595_46601 = 0;while(true){
if((i__46595_46601 < count__46594_46600))
{var vec__46596_46602 = cljs.core._nth.call(null,chunk__46593_46599,i__46595_46601);var key_46603 = cljs.core.nth.call(null,vec__46596_46602,0,null);var val_46604 = cljs.core.nth.call(null,vec__46596_46602,1,null);node.setAttribute(cljs.core.name.call(null,key_46603),val_46604);
{
var G__46605 = seq__46592_46598;
var G__46606 = chunk__46593_46599;
var G__46607 = count__46594_46600;
var G__46608 = (i__46595_46601 + 1);
seq__46592_46598 = G__46605;
chunk__46593_46599 = G__46606;
count__46594_46600 = G__46607;
i__46595_46601 = G__46608;
continue;
}
} else
{var temp__4092__auto___46609 = cljs.core.seq.call(null,seq__46592_46598);if(temp__4092__auto___46609)
{var seq__46592_46610__$1 = temp__4092__auto___46609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46592_46610__$1))
{var c__8974__auto___46611 = cljs.core.chunk_first.call(null,seq__46592_46610__$1);{
var G__46612 = cljs.core.chunk_rest.call(null,seq__46592_46610__$1);
var G__46613 = c__8974__auto___46611;
var G__46614 = cljs.core.count.call(null,c__8974__auto___46611);
var G__46615 = 0;
seq__46592_46598 = G__46612;
chunk__46593_46599 = G__46613;
count__46594_46600 = G__46614;
i__46595_46601 = G__46615;
continue;
}
} else
{var vec__46597_46616 = cljs.core.first.call(null,seq__46592_46610__$1);var key_46617 = cljs.core.nth.call(null,vec__46597_46616,0,null);var val_46618 = cljs.core.nth.call(null,vec__46597_46616,1,null);node.setAttribute(cljs.core.name.call(null,key_46617),val_46618);
{
var G__46619 = cljs.core.next.call(null,seq__46592_46610__$1);
var G__46620 = null;
var G__46621 = 0;
var G__46622 = 0;
seq__46592_46598 = G__46619;
chunk__46593_46599 = G__46620;
count__46594_46600 = G__46621;
i__46595_46601 = G__46622;
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
return (function (p1__46623_SHARP_){return p1__46623_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__46624_SHARP_){return p1__46624_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__46626_SHARP_,p2__46625_SHARP_){var G__46629 = p2__46625_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__46629))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__46629))
{return enfocus.core.read_select_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__46629))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__46629))
{var G__46630 = p2__46625_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__46630))
{return enfocus.core.read_checked_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__46630))
{return enfocus.core.read_checked_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__46630))
{return enfocus.core.read_simple_input.call(null,p2__46625_SHARP_,p1__46626_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__46626_SHARP_;
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
{return p1__46626_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__46631_SHARP_){if((p1__46631_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__46631_SHARP_);
} else
{if((p1__46631_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__46631_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__46631_SHARP_))
{return create_sel_str.call(null,p1__46631_SHARP_);
} else
{if(typeof p1__46631_SHARP_ === 'string')
{return p1__46631_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__46642 = node;if(G__46642)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__46642.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__46642.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__46642);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__46642);
}
} else
{return and__8233__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__46643 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__46643,0,null);var trans__$1 = cljs.core.nth.call(null,vec__46643,1,null);var seq__46644 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__46645 = null;var count__46646 = 0;var i__46647 = 0;while(true){
if((i__46647 < count__46646))
{var vec__46648 = cljs.core._nth.call(null,chunk__46645,i__46647);var sel = cljs.core.nth.call(null,vec__46648,0,null);var t = cljs.core.nth.call(null,vec__46648,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__46650 = seq__46644;
var G__46651 = chunk__46645;
var G__46652 = count__46646;
var G__46653 = (i__46647 + 1);
seq__46644 = G__46650;
chunk__46645 = G__46651;
count__46646 = G__46652;
i__46647 = G__46653;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46644);if(temp__4092__auto__)
{var seq__46644__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46644__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46644__$1);{
var G__46654 = cljs.core.chunk_rest.call(null,seq__46644__$1);
var G__46655 = c__8974__auto__;
var G__46656 = cljs.core.count.call(null,c__8974__auto__);
var G__46657 = 0;
seq__46644 = G__46654;
chunk__46645 = G__46655;
count__46646 = G__46656;
i__46647 = G__46657;
continue;
}
} else
{var vec__46649 = cljs.core.first.call(null,seq__46644__$1);var sel = cljs.core.nth.call(null,vec__46649,0,null);var t = cljs.core.nth.call(null,vec__46649,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__46658 = cljs.core.next.call(null,seq__46644__$1);
var G__46659 = null;
var G__46660 = 0;
var G__46661 = 0;
seq__46644 = G__46658;
chunk__46645 = G__46659;
count__46646 = G__46660;
i__46647 = G__46661;
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
i_at.cljs$lang$applyTo = (function (arglist__46662){
var id_mask = cljs.core.first(arglist__46662);
arglist__46662 = cljs.core.next(arglist__46662);
var node = cljs.core.first(arglist__46662);
var trans = cljs.core.rest(arglist__46662);
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
at.cljs$lang$applyTo = (function (arglist__46663){
var node = cljs.core.first(arglist__46663);
var trans = cljs.core.rest(arglist__46663);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__46668 = node;if(G__46668)
{var bit__8876__auto__ = null;if(cljs.core.truth_((function (){var or__8245__auto__ = bit__8876__auto__;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return G__46668.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__46668.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__46668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__46668);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__46669 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__46669,0,null);var trans__$1 = cljs.core.nth.call(null,vec__46669,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__46670){var vec__46671 = p__46670;var ky = cljs.core.nth.call(null,vec__46671,0,null);var sel = cljs.core.nth.call(null,vec__46671,1,null);var ext = cljs.core.nth.call(null,vec__46671,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__46672){
var node = cljs.core.first(arglist__46672);
var trans = cljs.core.rest(arglist__46672);
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