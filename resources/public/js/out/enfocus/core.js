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
enfocus.core.ISelector = (function (){var obj406097 = {};return obj406097;
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
enfocus.core.ITransform = (function (){var obj406099 = {};return obj406099;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__406100_SHARP_){if(typeof p1__406100_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__406100_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__406100_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__406107_406113 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__406108_406114 = null;var count__406109_406115 = 0;var i__406110_406116 = 0;while(true){
if((i__406110_406116 < count__406109_406115))
{var vec__406111_406117 = cljs.core._nth.call(null,chunk__406108_406114,i__406110_406116);var attr_406118 = cljs.core.nth.call(null,vec__406111_406117,0,null);var value_406119 = cljs.core.nth.call(null,vec__406111_406117,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_406118),value_406119);
{
var G__406120 = seq__406107_406113;
var G__406121 = chunk__406108_406114;
var G__406122 = count__406109_406115;
var G__406123 = (i__406110_406116 + 1);
seq__406107_406113 = G__406120;
chunk__406108_406114 = G__406121;
count__406109_406115 = G__406122;
i__406110_406116 = G__406123;
continue;
}
} else
{var temp__4092__auto___406124 = cljs.core.seq.call(null,seq__406107_406113);if(temp__4092__auto___406124)
{var seq__406107_406125__$1 = temp__4092__auto___406124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406107_406125__$1))
{var c__8952__auto___406126 = cljs.core.chunk_first.call(null,seq__406107_406125__$1);{
var G__406127 = cljs.core.chunk_rest.call(null,seq__406107_406125__$1);
var G__406128 = c__8952__auto___406126;
var G__406129 = cljs.core.count.call(null,c__8952__auto___406126);
var G__406130 = 0;
seq__406107_406113 = G__406127;
chunk__406108_406114 = G__406128;
count__406109_406115 = G__406129;
i__406110_406116 = G__406130;
continue;
}
} else
{var vec__406112_406131 = cljs.core.first.call(null,seq__406107_406125__$1);var attr_406132 = cljs.core.nth.call(null,vec__406112_406131,0,null);var value_406133 = cljs.core.nth.call(null,vec__406112_406131,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_406132),value_406133);
{
var G__406134 = cljs.core.next.call(null,seq__406107_406125__$1);
var G__406135 = null;
var G__406136 = 0;
var G__406137 = 0;
seq__406107_406113 = G__406134;
chunk__406108_406114 = G__406135;
count__406109_406115 = G__406136;
i__406110_406116 = G__406137;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__406142 = cljs.core.seq.call(null,values);var chunk__406143 = null;var count__406144 = 0;var i__406145 = 0;while(true){
if((i__406145 < count__406144))
{var attr = cljs.core._nth.call(null,chunk__406143,i__406145);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__406146 = seq__406142;
var G__406147 = chunk__406143;
var G__406148 = count__406144;
var G__406149 = (i__406145 + 1);
seq__406142 = G__406146;
chunk__406143 = G__406147;
count__406144 = G__406148;
i__406145 = G__406149;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406142);if(temp__4092__auto__)
{var seq__406142__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406142__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406142__$1);{
var G__406150 = cljs.core.chunk_rest.call(null,seq__406142__$1);
var G__406151 = c__8952__auto__;
var G__406152 = cljs.core.count.call(null,c__8952__auto__);
var G__406153 = 0;
seq__406142 = G__406150;
chunk__406143 = G__406151;
count__406144 = G__406152;
i__406145 = G__406153;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__406142__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__406154 = cljs.core.next.call(null,seq__406142__$1);
var G__406155 = null;
var G__406156 = 0;
var G__406157 = 0;
seq__406142 = G__406154;
chunk__406143 = G__406155;
count__406144 = G__406156;
i__406145 = G__406157;
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
{var seq__406164_406170 = cljs.core.seq.call(null,ats);var chunk__406165_406171 = null;var count__406166_406172 = 0;var i__406167_406173 = 0;while(true){
if((i__406167_406173 < count__406166_406172))
{var vec__406168_406174 = cljs.core._nth.call(null,chunk__406165_406171,i__406167_406173);var k_406175 = cljs.core.nth.call(null,vec__406168_406174,0,null);var v_406176 = cljs.core.nth.call(null,vec__406168_406174,1,null);add_map_attrs.call(null,elem,k_406175,v_406176);
{
var G__406177 = seq__406164_406170;
var G__406178 = chunk__406165_406171;
var G__406179 = count__406166_406172;
var G__406180 = (i__406167_406173 + 1);
seq__406164_406170 = G__406177;
chunk__406165_406171 = G__406178;
count__406166_406172 = G__406179;
i__406167_406173 = G__406180;
continue;
}
} else
{var temp__4092__auto___406181 = cljs.core.seq.call(null,seq__406164_406170);if(temp__4092__auto___406181)
{var seq__406164_406182__$1 = temp__4092__auto___406181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406164_406182__$1))
{var c__8952__auto___406183 = cljs.core.chunk_first.call(null,seq__406164_406182__$1);{
var G__406184 = cljs.core.chunk_rest.call(null,seq__406164_406182__$1);
var G__406185 = c__8952__auto___406183;
var G__406186 = cljs.core.count.call(null,c__8952__auto___406183);
var G__406187 = 0;
seq__406164_406170 = G__406184;
chunk__406165_406171 = G__406185;
count__406166_406172 = G__406186;
i__406167_406173 = G__406187;
continue;
}
} else
{var vec__406169_406188 = cljs.core.first.call(null,seq__406164_406182__$1);var k_406189 = cljs.core.nth.call(null,vec__406169_406188,0,null);var v_406190 = cljs.core.nth.call(null,vec__406169_406188,1,null);add_map_attrs.call(null,elem,k_406189,v_406190);
{
var G__406191 = cljs.core.next.call(null,seq__406164_406182__$1);
var G__406192 = null;
var G__406193 = 0;
var G__406194 = 0;
seq__406164_406170 = G__406191;
chunk__406165_406171 = G__406192;
count__406166_406172 = G__406193;
i__406167_406173 = G__406194;
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
var seq__406199_406203 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__406200_406204 = null;var count__406201_406205 = 0;var i__406202_406206 = 0;while(true){
if((i__406202_406206 < count__406201_406205))
{var node_406207 = cljs.core._nth.call(null,chunk__406200_406204,i__406202_406206);goog.dom.appendChild(div,node_406207);
{
var G__406208 = seq__406199_406203;
var G__406209 = chunk__406200_406204;
var G__406210 = count__406201_406205;
var G__406211 = (i__406202_406206 + 1);
seq__406199_406203 = G__406208;
chunk__406200_406204 = G__406209;
count__406201_406205 = G__406210;
i__406202_406206 = G__406211;
continue;
}
} else
{var temp__4092__auto___406212 = cljs.core.seq.call(null,seq__406199_406203);if(temp__4092__auto___406212)
{var seq__406199_406213__$1 = temp__4092__auto___406212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406199_406213__$1))
{var c__8952__auto___406214 = cljs.core.chunk_first.call(null,seq__406199_406213__$1);{
var G__406215 = cljs.core.chunk_rest.call(null,seq__406199_406213__$1);
var G__406216 = c__8952__auto___406214;
var G__406217 = cljs.core.count.call(null,c__8952__auto___406214);
var G__406218 = 0;
seq__406199_406203 = G__406215;
chunk__406200_406204 = G__406216;
count__406201_406205 = G__406217;
i__406202_406206 = G__406218;
continue;
}
} else
{var node_406219 = cljs.core.first.call(null,seq__406199_406213__$1);goog.dom.appendChild(div,node_406219);
{
var G__406220 = cljs.core.next.call(null,seq__406199_406213__$1);
var G__406221 = null;
var G__406222 = 0;
var G__406223 = 0;
seq__406199_406203 = G__406220;
chunk__406200_406204 = G__406221;
count__406201_406205 = G__406222;
i__406202_406206 = G__406223;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__406224_SHARP_){var id = p1__406224_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__406224_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__406226 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__406226,0,null);var txt = cljs.core.nth.call(null,vec__406226,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__406231_406235 = cljs.core.seq.call(null,dfa);var chunk__406232_406236 = null;var count__406233_406237 = 0;var i__406234_406238 = 0;while(true){
if((i__406234_406238 < count__406233_406237))
{var df_406239 = cljs.core._nth.call(null,chunk__406232_406236,i__406234_406238);goog.dom.append(frag,df_406239);
{
var G__406240 = seq__406231_406235;
var G__406241 = chunk__406232_406236;
var G__406242 = count__406233_406237;
var G__406243 = (i__406234_406238 + 1);
seq__406231_406235 = G__406240;
chunk__406232_406236 = G__406241;
count__406233_406237 = G__406242;
i__406234_406238 = G__406243;
continue;
}
} else
{var temp__4092__auto___406244 = cljs.core.seq.call(null,seq__406231_406235);if(temp__4092__auto___406244)
{var seq__406231_406245__$1 = temp__4092__auto___406244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406231_406245__$1))
{var c__8952__auto___406246 = cljs.core.chunk_first.call(null,seq__406231_406245__$1);{
var G__406247 = cljs.core.chunk_rest.call(null,seq__406231_406245__$1);
var G__406248 = c__8952__auto___406246;
var G__406249 = cljs.core.count.call(null,c__8952__auto___406246);
var G__406250 = 0;
seq__406231_406235 = G__406247;
chunk__406232_406236 = G__406248;
count__406233_406237 = G__406249;
i__406234_406238 = G__406250;
continue;
}
} else
{var df_406251 = cljs.core.first.call(null,seq__406231_406245__$1);goog.dom.append(frag,df_406251);
{
var G__406252 = cljs.core.next.call(null,seq__406231_406245__$1);
var G__406253 = null;
var G__406254 = 0;
var G__406255 = 0;
seq__406231_406235 = G__406252;
chunk__406232_406236 = G__406253;
count__406233_406237 = G__406254;
i__406234_406238 = G__406255;
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
{var vec__406258 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__406258,0,null);var tdom = cljs.core.nth.call(null,vec__406258,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__406258,sym,tdom,dom,tsnip){
return (function (p1__406256_SHARP_){return p1__406256_SHARP_.outerHTML;
});})(vec__406258,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t406262 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t406262 = (function (trans,func,extr_multi_node,meta406263){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta406263 = meta406263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t406262.cljs$lang$type = true;
enfocus.core.t406262.cljs$lang$ctorStr = "enfocus.core/t406262";
enfocus.core.t406262.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t406262");
});
enfocus.core.t406262.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t406262.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t406262.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t406262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_406264){var self__ = this;
var _406264__$1 = this;return self__.meta406263;
});
enfocus.core.t406262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_406264,meta406263__$1){var self__ = this;
var _406264__$1 = this;return (new enfocus.core.t406262(self__.trans,self__.func,self__.extr_multi_node,meta406263__$1));
});
enfocus.core.__GT_t406262 = (function __GT_t406262(trans__$1,func__$1,extr_multi_node__$1,meta406263){return (new enfocus.core.t406262(trans__$1,func__$1,extr_multi_node__$1,meta406263));
});
}
return (new enfocus.core.t406262(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t406272 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t406272 = (function (trans,func,multi_node_chain,meta406273){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta406273 = meta406273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t406272.cljs$lang$type = true;
enfocus.core.t406272.cljs$lang$ctorStr = "enfocus.core/t406272";
enfocus.core.t406272.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t406272");
});
enfocus.core.t406272.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t406272.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t406272.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t406272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_406274){var self__ = this;
var _406274__$1 = this;return self__.meta406273;
});
enfocus.core.t406272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_406274,meta406273__$1){var self__ = this;
var _406274__$1 = this;return (new enfocus.core.t406272(self__.trans,self__.func,self__.multi_node_chain,meta406273__$1));
});
enfocus.core.__GT_t406272 = (function __GT_t406272(trans__$1,func__$1,multi_node_chain__$1,meta406273){return (new enfocus.core.t406272(trans__$1,func__$1,multi_node_chain__$1,meta406273));
});
}
return (new enfocus.core.t406272(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__406265_SHARP_){return domina.nodes.call(null,p1__406265_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t406275 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t406275 = (function (trans,func,values,multi_node_chain,meta406276){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta406276 = meta406276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t406275.cljs$lang$type = true;
enfocus.core.t406275.cljs$lang$ctorStr = "enfocus.core/t406275";
enfocus.core.t406275.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t406275");
});
enfocus.core.t406275.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t406275.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t406275.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t406275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_406277){var self__ = this;
var _406277__$1 = this;return self__.meta406276;
});
enfocus.core.t406275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_406277,meta406276__$1){var self__ = this;
var _406277__$1 = this;return (new enfocus.core.t406275(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta406276__$1));
});
enfocus.core.__GT_t406275 = (function __GT_t406275(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta406276){return (new enfocus.core.t406275(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta406276));
});
}
return (new enfocus.core.t406275(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406278_SHARP_,p2__406279_SHARP_){domina.destroy_children_BANG_.call(null,p1__406278_SHARP_);
return domina.append_BANG_.call(null,p1__406278_SHARP_,p2__406279_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__406280){
var values = cljs.core.seq(arglist__406280);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__406281_SHARP_){return domina.set_html_BANG_.call(null,p1__406281_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__406282_SHARP_){var seq__406289 = cljs.core.seq.call(null,pairs);var chunk__406290 = null;var count__406291 = 0;var i__406292 = 0;while(true){
if((i__406292 < count__406291))
{var vec__406293 = cljs.core._nth.call(null,chunk__406290,i__406292);var name = cljs.core.nth.call(null,vec__406293,0,null);var value = cljs.core.nth.call(null,vec__406293,1,null);domina.set_attr_BANG_.call(null,p1__406282_SHARP_,name,value);
{
var G__406295 = seq__406289;
var G__406296 = chunk__406290;
var G__406297 = count__406291;
var G__406298 = (i__406292 + 1);
seq__406289 = G__406295;
chunk__406290 = G__406296;
count__406291 = G__406297;
i__406292 = G__406298;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406289);if(temp__4092__auto__)
{var seq__406289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406289__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406289__$1);{
var G__406299 = cljs.core.chunk_rest.call(null,seq__406289__$1);
var G__406300 = c__8952__auto__;
var G__406301 = cljs.core.count.call(null,c__8952__auto__);
var G__406302 = 0;
seq__406289 = G__406299;
chunk__406290 = G__406300;
count__406291 = G__406301;
i__406292 = G__406302;
continue;
}
} else
{var vec__406294 = cljs.core.first.call(null,seq__406289__$1);var name = cljs.core.nth.call(null,vec__406294,0,null);var value = cljs.core.nth.call(null,vec__406294,1,null);domina.set_attr_BANG_.call(null,p1__406282_SHARP_,name,value);
{
var G__406303 = cljs.core.next.call(null,seq__406289__$1);
var G__406304 = null;
var G__406305 = 0;
var G__406306 = 0;
seq__406289 = G__406303;
chunk__406290 = G__406304;
count__406291 = G__406305;
i__406292 = G__406306;
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
set_attr.cljs$lang$applyTo = (function (arglist__406307){
var values = cljs.core.seq(arglist__406307);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__406308_SHARP_){var seq__406313 = cljs.core.seq.call(null,values);var chunk__406314 = null;var count__406315 = 0;var i__406316 = 0;while(true){
if((i__406316 < count__406315))
{var name = cljs.core._nth.call(null,chunk__406314,i__406316);domina.remove_attr_BANG_.call(null,p1__406308_SHARP_,name);
{
var G__406317 = seq__406313;
var G__406318 = chunk__406314;
var G__406319 = count__406315;
var G__406320 = (i__406316 + 1);
seq__406313 = G__406317;
chunk__406314 = G__406318;
count__406315 = G__406319;
i__406316 = G__406320;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406313);if(temp__4092__auto__)
{var seq__406313__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406313__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406313__$1);{
var G__406321 = cljs.core.chunk_rest.call(null,seq__406313__$1);
var G__406322 = c__8952__auto__;
var G__406323 = cljs.core.count.call(null,c__8952__auto__);
var G__406324 = 0;
seq__406313 = G__406321;
chunk__406314 = G__406322;
count__406315 = G__406323;
i__406316 = G__406324;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__406313__$1);domina.remove_attr_BANG_.call(null,p1__406308_SHARP_,name);
{
var G__406325 = cljs.core.next.call(null,seq__406313__$1);
var G__406326 = null;
var G__406327 = 0;
var G__406328 = 0;
seq__406313 = G__406325;
chunk__406314 = G__406326;
count__406315 = G__406327;
i__406316 = G__406328;
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
remove_attr.cljs$lang$applyTo = (function (arglist__406329){
var values = cljs.core.seq(arglist__406329);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__406332){var vec__406333 = p__406332;var n = cljs.core.nth.call(null,vec__406333,0,null);var v = cljs.core.nth.call(null,vec__406333,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__406334){
var forms = cljs.core.seq(arglist__406334);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__406335_SHARP_){var seq__406340 = cljs.core.seq.call(null,values);var chunk__406341 = null;var count__406342 = 0;var i__406343 = 0;while(true){
if((i__406343 < count__406342))
{var val = cljs.core._nth.call(null,chunk__406341,i__406343);domina.add_class_BANG_.call(null,p1__406335_SHARP_,val);
{
var G__406344 = seq__406340;
var G__406345 = chunk__406341;
var G__406346 = count__406342;
var G__406347 = (i__406343 + 1);
seq__406340 = G__406344;
chunk__406341 = G__406345;
count__406342 = G__406346;
i__406343 = G__406347;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406340);if(temp__4092__auto__)
{var seq__406340__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406340__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406340__$1);{
var G__406348 = cljs.core.chunk_rest.call(null,seq__406340__$1);
var G__406349 = c__8952__auto__;
var G__406350 = cljs.core.count.call(null,c__8952__auto__);
var G__406351 = 0;
seq__406340 = G__406348;
chunk__406341 = G__406349;
count__406342 = G__406350;
i__406343 = G__406351;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__406340__$1);domina.add_class_BANG_.call(null,p1__406335_SHARP_,val);
{
var G__406352 = cljs.core.next.call(null,seq__406340__$1);
var G__406353 = null;
var G__406354 = 0;
var G__406355 = 0;
seq__406340 = G__406352;
chunk__406341 = G__406353;
count__406342 = G__406354;
i__406343 = G__406355;
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
add_class.cljs$lang$applyTo = (function (arglist__406356){
var values = cljs.core.seq(arglist__406356);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__406357_SHARP_){var seq__406362 = cljs.core.seq.call(null,values);var chunk__406363 = null;var count__406364 = 0;var i__406365 = 0;while(true){
if((i__406365 < count__406364))
{var val = cljs.core._nth.call(null,chunk__406363,i__406365);domina.remove_class_BANG_.call(null,p1__406357_SHARP_,val);
{
var G__406366 = seq__406362;
var G__406367 = chunk__406363;
var G__406368 = count__406364;
var G__406369 = (i__406365 + 1);
seq__406362 = G__406366;
chunk__406363 = G__406367;
count__406364 = G__406368;
i__406365 = G__406369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406362);if(temp__4092__auto__)
{var seq__406362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406362__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406362__$1);{
var G__406370 = cljs.core.chunk_rest.call(null,seq__406362__$1);
var G__406371 = c__8952__auto__;
var G__406372 = cljs.core.count.call(null,c__8952__auto__);
var G__406373 = 0;
seq__406362 = G__406370;
chunk__406363 = G__406371;
count__406364 = G__406372;
i__406365 = G__406373;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__406362__$1);domina.remove_class_BANG_.call(null,p1__406357_SHARP_,val);
{
var G__406374 = cljs.core.next.call(null,seq__406362__$1);
var G__406375 = null;
var G__406376 = 0;
var G__406377 = 0;
seq__406362 = G__406374;
chunk__406363 = G__406375;
count__406364 = G__406376;
i__406365 = G__406377;
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
remove_class.cljs$lang$applyTo = (function (arglist__406378){
var values = cljs.core.seq(arglist__406378);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__406379_SHARP_){return domina.set_classes_BANG_.call(null,p1__406379_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__406380){
var values = cljs.core.seq(arglist__406380);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__406385 = cljs.core.seq.call(null,forms);var chunk__406386 = null;var count__406387 = 0;var i__406388 = 0;while(true){
if((i__406388 < count__406387))
{var fun = cljs.core._nth.call(null,chunk__406386,i__406388);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__406389 = seq__406385;
var G__406390 = chunk__406386;
var G__406391 = count__406387;
var G__406392 = (i__406388 + 1);
seq__406385 = G__406389;
chunk__406386 = G__406390;
count__406387 = G__406391;
i__406388 = G__406392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406385);if(temp__4092__auto__)
{var seq__406385__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406385__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406385__$1);{
var G__406393 = cljs.core.chunk_rest.call(null,seq__406385__$1);
var G__406394 = c__8952__auto__;
var G__406395 = cljs.core.count.call(null,c__8952__auto__);
var G__406396 = 0;
seq__406385 = G__406393;
chunk__406386 = G__406394;
count__406387 = G__406395;
i__406388 = G__406396;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__406385__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__406397 = cljs.core.next.call(null,seq__406385__$1);
var G__406398 = null;
var G__406399 = 0;
var G__406400 = 0;
seq__406385 = G__406397;
chunk__406386 = G__406398;
count__406387 = G__406399;
i__406388 = G__406400;
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
do__GT_.cljs$lang$applyTo = (function (arglist__406401){
var forms = cljs.core.seq(arglist__406401);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406402_SHARP_,p2__406403_SHARP_){return domina.append_BANG_.call(null,p1__406402_SHARP_,p2__406403_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__406404){
var values = cljs.core.seq(arglist__406404);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406405_SHARP_,p2__406406_SHARP_){return domina.prepend_BANG_.call(null,p1__406405_SHARP_,p2__406406_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__406407){
var values = cljs.core.seq(arglist__406407);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406408_SHARP_,p2__406409_SHARP_){return domina.insert_before_BANG_.call(null,p1__406408_SHARP_,p2__406409_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__406410){
var values = cljs.core.seq(arglist__406410);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406411_SHARP_,p2__406412_SHARP_){return domina.insert_after_BANG_.call(null,p1__406411_SHARP_,p2__406412_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__406413){
var values = cljs.core.seq(arglist__406413);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__406414_SHARP_,p2__406415_SHARP_){return domina.swap_content_BANG_.call(null,p1__406414_SHARP_,p2__406415_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__406416){
var values = cljs.core.seq(arglist__406416);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__406417_SHARP_){return domina.detach_BANG_.call(null,p1__406417_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__406418_SHARP_){var seq__406425 = cljs.core.seq.call(null,pairs);var chunk__406426 = null;var count__406427 = 0;var i__406428 = 0;while(true){
if((i__406428 < count__406427))
{var vec__406429 = cljs.core._nth.call(null,chunk__406426,i__406428);var name = cljs.core.nth.call(null,vec__406429,0,null);var value = cljs.core.nth.call(null,vec__406429,1,null);domina.set_style_BANG_.call(null,p1__406418_SHARP_,name,value);
{
var G__406431 = seq__406425;
var G__406432 = chunk__406426;
var G__406433 = count__406427;
var G__406434 = (i__406428 + 1);
seq__406425 = G__406431;
chunk__406426 = G__406432;
count__406427 = G__406433;
i__406428 = G__406434;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406425);if(temp__4092__auto__)
{var seq__406425__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406425__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406425__$1);{
var G__406435 = cljs.core.chunk_rest.call(null,seq__406425__$1);
var G__406436 = c__8952__auto__;
var G__406437 = cljs.core.count.call(null,c__8952__auto__);
var G__406438 = 0;
seq__406425 = G__406435;
chunk__406426 = G__406436;
count__406427 = G__406437;
i__406428 = G__406438;
continue;
}
} else
{var vec__406430 = cljs.core.first.call(null,seq__406425__$1);var name = cljs.core.nth.call(null,vec__406430,0,null);var value = cljs.core.nth.call(null,vec__406430,1,null);domina.set_style_BANG_.call(null,p1__406418_SHARP_,name,value);
{
var G__406439 = cljs.core.next.call(null,seq__406425__$1);
var G__406440 = null;
var G__406441 = 0;
var G__406442 = 0;
seq__406425 = G__406439;
chunk__406426 = G__406440;
count__406427 = G__406441;
i__406428 = G__406442;
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
set_style.cljs$lang$applyTo = (function (arglist__406443){
var values = cljs.core.seq(arglist__406443);
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
remove_style.cljs$lang$applyTo = (function (arglist__406444){
var values = cljs.core.seq(arglist__406444);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__406445_SHARP_){return domina.set_data_BANG_.call(null,p1__406445_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__406446){
var ttime = cljs.core.first(arglist__406446);
var funcs = cljs.core.rest(arglist__406446);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__406448_SHARP_,p2__406447_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__406447_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__406473_406481 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__406474_406482 = null;var count__406475_406483 = 0;var i__406476_406484 = 0;while(true){
if((i__406476_406484 < count__406475_406483))
{var idx_406485 = cljs.core._nth.call(null,chunk__406474_406482,i__406476_406484);var attr_406486 = pnod.attributes.item(idx_406485);if(cljs.core.truth_(attr_406486.specified))
{attr_406486.value = rep_str.call(null,attr_406486.value);
} else
{}
{
var G__406487 = seq__406473_406481;
var G__406488 = chunk__406474_406482;
var G__406489 = count__406475_406483;
var G__406490 = (i__406476_406484 + 1);
seq__406473_406481 = G__406487;
chunk__406474_406482 = G__406488;
count__406475_406483 = G__406489;
i__406476_406484 = G__406490;
continue;
}
} else
{var temp__4092__auto___406491 = cljs.core.seq.call(null,seq__406473_406481);if(temp__4092__auto___406491)
{var seq__406473_406492__$1 = temp__4092__auto___406491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406473_406492__$1))
{var c__8952__auto___406493 = cljs.core.chunk_first.call(null,seq__406473_406492__$1);{
var G__406494 = cljs.core.chunk_rest.call(null,seq__406473_406492__$1);
var G__406495 = c__8952__auto___406493;
var G__406496 = cljs.core.count.call(null,c__8952__auto___406493);
var G__406497 = 0;
seq__406473_406481 = G__406494;
chunk__406474_406482 = G__406495;
count__406475_406483 = G__406496;
i__406476_406484 = G__406497;
continue;
}
} else
{var idx_406498 = cljs.core.first.call(null,seq__406473_406492__$1);var attr_406499 = pnod.attributes.item(idx_406498);if(cljs.core.truth_(attr_406499.specified))
{attr_406499.value = rep_str.call(null,attr_406499.value);
} else
{}
{
var G__406500 = cljs.core.next.call(null,seq__406473_406492__$1);
var G__406501 = null;
var G__406502 = 0;
var G__406503 = 0;
seq__406473_406481 = G__406500;
chunk__406474_406482 = G__406501;
count__406475_406483 = G__406502;
i__406476_406484 = G__406503;
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
{var seq__406477 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__406478 = null;var count__406479 = 0;var i__406480 = 0;while(true){
if((i__406480 < count__406479))
{var cnode = cljs.core._nth.call(null,chunk__406478,i__406480);rep_node.call(null,cnode);
{
var G__406504 = seq__406477;
var G__406505 = chunk__406478;
var G__406506 = count__406479;
var G__406507 = (i__406480 + 1);
seq__406477 = G__406504;
chunk__406478 = G__406505;
count__406479 = G__406506;
i__406480 = G__406507;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406477);if(temp__4092__auto__)
{var seq__406477__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406477__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406477__$1);{
var G__406508 = cljs.core.chunk_rest.call(null,seq__406477__$1);
var G__406509 = c__8952__auto__;
var G__406510 = cljs.core.count.call(null,c__8952__auto__);
var G__406511 = 0;
seq__406477 = G__406508;
chunk__406478 = G__406509;
count__406479 = G__406510;
i__406480 = G__406511;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__406477__$1);rep_node.call(null,cnode);
{
var G__406512 = cljs.core.next.call(null,seq__406477__$1);
var G__406513 = null;
var G__406514 = 0;
var G__406515 = 0;
seq__406477 = G__406512;
chunk__406478 = G__406513;
count__406479 = G__406514;
i__406480 = G__406515;
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
{var vec__406525 = node_spec;var tag = cljs.core.nth.call(null,vec__406525,0,null);var vec__406526 = cljs.core.nthnext.call(null,vec__406525,1);var m = cljs.core.nth.call(null,vec__406526,0,null);var ms = cljs.core.nthnext.call(null,vec__406526,1);var more = vec__406526;var vec__406527 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__406527,0,null);var segments = cljs.core.nthnext.call(null,vec__406527,1);var id = cljs.core.some.call(null,((function (vec__406525,tag,vec__406526,m,ms,more,vec__406527,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__406525,tag,vec__406526,m,ms,more,vec__406527,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__406525,tag,vec__406526,m,ms,more,vec__406527,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__406525,tag,vec__406526,m,ms,more,vec__406527,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__406528_406534 = cljs.core.seq.call(null,attrs__$2);var chunk__406529_406535 = null;var count__406530_406536 = 0;var i__406531_406537 = 0;while(true){
if((i__406531_406537 < count__406530_406536))
{var vec__406532_406538 = cljs.core._nth.call(null,chunk__406529_406535,i__406531_406537);var key_406539 = cljs.core.nth.call(null,vec__406532_406538,0,null);var val_406540 = cljs.core.nth.call(null,vec__406532_406538,1,null);node.setAttribute(cljs.core.name.call(null,key_406539),val_406540);
{
var G__406541 = seq__406528_406534;
var G__406542 = chunk__406529_406535;
var G__406543 = count__406530_406536;
var G__406544 = (i__406531_406537 + 1);
seq__406528_406534 = G__406541;
chunk__406529_406535 = G__406542;
count__406530_406536 = G__406543;
i__406531_406537 = G__406544;
continue;
}
} else
{var temp__4092__auto___406545 = cljs.core.seq.call(null,seq__406528_406534);if(temp__4092__auto___406545)
{var seq__406528_406546__$1 = temp__4092__auto___406545;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406528_406546__$1))
{var c__8952__auto___406547 = cljs.core.chunk_first.call(null,seq__406528_406546__$1);{
var G__406548 = cljs.core.chunk_rest.call(null,seq__406528_406546__$1);
var G__406549 = c__8952__auto___406547;
var G__406550 = cljs.core.count.call(null,c__8952__auto___406547);
var G__406551 = 0;
seq__406528_406534 = G__406548;
chunk__406529_406535 = G__406549;
count__406530_406536 = G__406550;
i__406531_406537 = G__406551;
continue;
}
} else
{var vec__406533_406552 = cljs.core.first.call(null,seq__406528_406546__$1);var key_406553 = cljs.core.nth.call(null,vec__406533_406552,0,null);var val_406554 = cljs.core.nth.call(null,vec__406533_406552,1,null);node.setAttribute(cljs.core.name.call(null,key_406553),val_406554);
{
var G__406555 = cljs.core.next.call(null,seq__406528_406546__$1);
var G__406556 = null;
var G__406557 = 0;
var G__406558 = 0;
seq__406528_406534 = G__406555;
chunk__406529_406535 = G__406556;
count__406530_406536 = G__406557;
i__406531_406537 = G__406558;
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
return (function (p1__406559_SHARP_){return p1__406559_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__406560_SHARP_){return p1__406560_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__406562_SHARP_,p2__406561_SHARP_){var G__406565 = p2__406561_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__406565))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__406565))
{return enfocus.core.read_select_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__406565))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__406565))
{var G__406566 = p2__406561_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__406566))
{return enfocus.core.read_checked_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__406566))
{return enfocus.core.read_checked_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__406566))
{return enfocus.core.read_simple_input.call(null,p2__406561_SHARP_,p1__406562_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__406562_SHARP_;
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
{return p1__406562_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__406567_SHARP_){if((p1__406567_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__406567_SHARP_);
} else
{if((p1__406567_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__406567_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__406567_SHARP_))
{return create_sel_str.call(null,p1__406567_SHARP_);
} else
{if(typeof p1__406567_SHARP_ === 'string')
{return p1__406567_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__406578 = node;if(G__406578)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__406578.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__406578.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__406578);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__406578);
}
} else
{return and__8211__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__406579 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__406579,0,null);var trans__$1 = cljs.core.nth.call(null,vec__406579,1,null);var seq__406580 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__406581 = null;var count__406582 = 0;var i__406583 = 0;while(true){
if((i__406583 < count__406582))
{var vec__406584 = cljs.core._nth.call(null,chunk__406581,i__406583);var sel = cljs.core.nth.call(null,vec__406584,0,null);var t = cljs.core.nth.call(null,vec__406584,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__406586 = seq__406580;
var G__406587 = chunk__406581;
var G__406588 = count__406582;
var G__406589 = (i__406583 + 1);
seq__406580 = G__406586;
chunk__406581 = G__406587;
count__406582 = G__406588;
i__406583 = G__406589;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406580);if(temp__4092__auto__)
{var seq__406580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406580__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406580__$1);{
var G__406590 = cljs.core.chunk_rest.call(null,seq__406580__$1);
var G__406591 = c__8952__auto__;
var G__406592 = cljs.core.count.call(null,c__8952__auto__);
var G__406593 = 0;
seq__406580 = G__406590;
chunk__406581 = G__406591;
count__406582 = G__406592;
i__406583 = G__406593;
continue;
}
} else
{var vec__406585 = cljs.core.first.call(null,seq__406580__$1);var sel = cljs.core.nth.call(null,vec__406585,0,null);var t = cljs.core.nth.call(null,vec__406585,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__406594 = cljs.core.next.call(null,seq__406580__$1);
var G__406595 = null;
var G__406596 = 0;
var G__406597 = 0;
seq__406580 = G__406594;
chunk__406581 = G__406595;
count__406582 = G__406596;
i__406583 = G__406597;
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
i_at.cljs$lang$applyTo = (function (arglist__406598){
var id_mask = cljs.core.first(arglist__406598);
arglist__406598 = cljs.core.next(arglist__406598);
var node = cljs.core.first(arglist__406598);
var trans = cljs.core.rest(arglist__406598);
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
at.cljs$lang$applyTo = (function (arglist__406599){
var node = cljs.core.first(arglist__406599);
var trans = cljs.core.rest(arglist__406599);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__406604 = node;if(G__406604)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__406604.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__406604.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__406604);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__406604);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__406605 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__406605,0,null);var trans__$1 = cljs.core.nth.call(null,vec__406605,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__406606){var vec__406607 = p__406606;var ky = cljs.core.nth.call(null,vec__406607,0,null);var sel = cljs.core.nth.call(null,vec__406607,1,null);var ext = cljs.core.nth.call(null,vec__406607,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__406608){
var node = cljs.core.first(arglist__406608);
var trans = cljs.core.rest(arglist__406608);
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