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
enfocus.core.ISelector = (function (){var obj44122 = {};return obj44122;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13942__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (enfocus.core.select[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (enfocus.core.select["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (enfocus.core.select[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (enfocus.core.select["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13942__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (enfocus.core.select[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (enfocus.core.select["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
enfocus.core.ITransform = (function (){var obj44124 = {};return obj44124;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13942__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13942__auto__ = this$;if(and__13942__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13942__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14562__auto__ = (((this$ == null))?null:this$);return (function (){var or__13954__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13942__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13942__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13942__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__44125_SHARP_){if(typeof p1__44125_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__44125_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__44125_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__44132_44138 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__44133_44139 = null;var count__44134_44140 = 0;var i__44135_44141 = 0;while(true){
if((i__44135_44141 < count__44134_44140))
{var vec__44136_44142 = cljs.core._nth.call(null,chunk__44133_44139,i__44135_44141);var attr_44143 = cljs.core.nth.call(null,vec__44136_44142,0,null);var value_44144 = cljs.core.nth.call(null,vec__44136_44142,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_44143),value_44144);
{
var G__44145 = seq__44132_44138;
var G__44146 = chunk__44133_44139;
var G__44147 = count__44134_44140;
var G__44148 = (i__44135_44141 + 1);
seq__44132_44138 = G__44145;
chunk__44133_44139 = G__44146;
count__44134_44140 = G__44147;
i__44135_44141 = G__44148;
continue;
}
} else
{var temp__4092__auto___44149 = cljs.core.seq.call(null,seq__44132_44138);if(temp__4092__auto___44149)
{var seq__44132_44150__$1 = temp__4092__auto___44149;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44132_44150__$1))
{var c__14683__auto___44151 = cljs.core.chunk_first.call(null,seq__44132_44150__$1);{
var G__44152 = cljs.core.chunk_rest.call(null,seq__44132_44150__$1);
var G__44153 = c__14683__auto___44151;
var G__44154 = cljs.core.count.call(null,c__14683__auto___44151);
var G__44155 = 0;
seq__44132_44138 = G__44152;
chunk__44133_44139 = G__44153;
count__44134_44140 = G__44154;
i__44135_44141 = G__44155;
continue;
}
} else
{var vec__44137_44156 = cljs.core.first.call(null,seq__44132_44150__$1);var attr_44157 = cljs.core.nth.call(null,vec__44137_44156,0,null);var value_44158 = cljs.core.nth.call(null,vec__44137_44156,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_44157),value_44158);
{
var G__44159 = cljs.core.next.call(null,seq__44132_44150__$1);
var G__44160 = null;
var G__44161 = 0;
var G__44162 = 0;
seq__44132_44138 = G__44159;
chunk__44133_44139 = G__44160;
count__44134_44140 = G__44161;
i__44135_44141 = G__44162;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__44167 = cljs.core.seq.call(null,values);var chunk__44168 = null;var count__44169 = 0;var i__44170 = 0;while(true){
if((i__44170 < count__44169))
{var attr = cljs.core._nth.call(null,chunk__44168,i__44170);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__44171 = seq__44167;
var G__44172 = chunk__44168;
var G__44173 = count__44169;
var G__44174 = (i__44170 + 1);
seq__44167 = G__44171;
chunk__44168 = G__44172;
count__44169 = G__44173;
i__44170 = G__44174;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44167);if(temp__4092__auto__)
{var seq__44167__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44167__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44167__$1);{
var G__44175 = cljs.core.chunk_rest.call(null,seq__44167__$1);
var G__44176 = c__14683__auto__;
var G__44177 = cljs.core.count.call(null,c__14683__auto__);
var G__44178 = 0;
seq__44167 = G__44175;
chunk__44168 = G__44176;
count__44169 = G__44177;
i__44170 = G__44178;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__44167__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__44179 = cljs.core.next.call(null,seq__44167__$1);
var G__44180 = null;
var G__44181 = 0;
var G__44182 = 0;
seq__44167 = G__44179;
chunk__44168 = G__44180;
count__44169 = G__44181;
i__44170 = G__44182;
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
{var seq__44189_44195 = cljs.core.seq.call(null,ats);var chunk__44190_44196 = null;var count__44191_44197 = 0;var i__44192_44198 = 0;while(true){
if((i__44192_44198 < count__44191_44197))
{var vec__44193_44199 = cljs.core._nth.call(null,chunk__44190_44196,i__44192_44198);var k_44200 = cljs.core.nth.call(null,vec__44193_44199,0,null);var v_44201 = cljs.core.nth.call(null,vec__44193_44199,1,null);add_map_attrs.call(null,elem,k_44200,v_44201);
{
var G__44202 = seq__44189_44195;
var G__44203 = chunk__44190_44196;
var G__44204 = count__44191_44197;
var G__44205 = (i__44192_44198 + 1);
seq__44189_44195 = G__44202;
chunk__44190_44196 = G__44203;
count__44191_44197 = G__44204;
i__44192_44198 = G__44205;
continue;
}
} else
{var temp__4092__auto___44206 = cljs.core.seq.call(null,seq__44189_44195);if(temp__4092__auto___44206)
{var seq__44189_44207__$1 = temp__4092__auto___44206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44189_44207__$1))
{var c__14683__auto___44208 = cljs.core.chunk_first.call(null,seq__44189_44207__$1);{
var G__44209 = cljs.core.chunk_rest.call(null,seq__44189_44207__$1);
var G__44210 = c__14683__auto___44208;
var G__44211 = cljs.core.count.call(null,c__14683__auto___44208);
var G__44212 = 0;
seq__44189_44195 = G__44209;
chunk__44190_44196 = G__44210;
count__44191_44197 = G__44211;
i__44192_44198 = G__44212;
continue;
}
} else
{var vec__44194_44213 = cljs.core.first.call(null,seq__44189_44207__$1);var k_44214 = cljs.core.nth.call(null,vec__44194_44213,0,null);var v_44215 = cljs.core.nth.call(null,vec__44194_44213,1,null);add_map_attrs.call(null,elem,k_44214,v_44215);
{
var G__44216 = cljs.core.next.call(null,seq__44189_44207__$1);
var G__44217 = null;
var G__44218 = 0;
var G__44219 = 0;
seq__44189_44195 = G__44216;
chunk__44190_44196 = G__44217;
count__44191_44197 = G__44218;
i__44192_44198 = G__44219;
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
var seq__44224_44228 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__44225_44229 = null;var count__44226_44230 = 0;var i__44227_44231 = 0;while(true){
if((i__44227_44231 < count__44226_44230))
{var node_44232 = cljs.core._nth.call(null,chunk__44225_44229,i__44227_44231);goog.dom.appendChild(div,node_44232);
{
var G__44233 = seq__44224_44228;
var G__44234 = chunk__44225_44229;
var G__44235 = count__44226_44230;
var G__44236 = (i__44227_44231 + 1);
seq__44224_44228 = G__44233;
chunk__44225_44229 = G__44234;
count__44226_44230 = G__44235;
i__44227_44231 = G__44236;
continue;
}
} else
{var temp__4092__auto___44237 = cljs.core.seq.call(null,seq__44224_44228);if(temp__4092__auto___44237)
{var seq__44224_44238__$1 = temp__4092__auto___44237;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44224_44238__$1))
{var c__14683__auto___44239 = cljs.core.chunk_first.call(null,seq__44224_44238__$1);{
var G__44240 = cljs.core.chunk_rest.call(null,seq__44224_44238__$1);
var G__44241 = c__14683__auto___44239;
var G__44242 = cljs.core.count.call(null,c__14683__auto___44239);
var G__44243 = 0;
seq__44224_44228 = G__44240;
chunk__44225_44229 = G__44241;
count__44226_44230 = G__44242;
i__44227_44231 = G__44243;
continue;
}
} else
{var node_44244 = cljs.core.first.call(null,seq__44224_44238__$1);goog.dom.appendChild(div,node_44244);
{
var G__44245 = cljs.core.next.call(null,seq__44224_44238__$1);
var G__44246 = null;
var G__44247 = 0;
var G__44248 = 0;
seq__44224_44228 = G__44245;
chunk__44225_44229 = G__44246;
count__44226_44230 = G__44247;
i__44227_44231 = G__44248;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__44249_SHARP_){var id = p1__44249_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__44249_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__44251 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__44251,0,null);var txt = cljs.core.nth.call(null,vec__44251,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__44256_44260 = cljs.core.seq.call(null,dfa);var chunk__44257_44261 = null;var count__44258_44262 = 0;var i__44259_44263 = 0;while(true){
if((i__44259_44263 < count__44258_44262))
{var df_44264 = cljs.core._nth.call(null,chunk__44257_44261,i__44259_44263);goog.dom.append(frag,df_44264);
{
var G__44265 = seq__44256_44260;
var G__44266 = chunk__44257_44261;
var G__44267 = count__44258_44262;
var G__44268 = (i__44259_44263 + 1);
seq__44256_44260 = G__44265;
chunk__44257_44261 = G__44266;
count__44258_44262 = G__44267;
i__44259_44263 = G__44268;
continue;
}
} else
{var temp__4092__auto___44269 = cljs.core.seq.call(null,seq__44256_44260);if(temp__4092__auto___44269)
{var seq__44256_44270__$1 = temp__4092__auto___44269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44256_44270__$1))
{var c__14683__auto___44271 = cljs.core.chunk_first.call(null,seq__44256_44270__$1);{
var G__44272 = cljs.core.chunk_rest.call(null,seq__44256_44270__$1);
var G__44273 = c__14683__auto___44271;
var G__44274 = cljs.core.count.call(null,c__14683__auto___44271);
var G__44275 = 0;
seq__44256_44260 = G__44272;
chunk__44257_44261 = G__44273;
count__44258_44262 = G__44274;
i__44259_44263 = G__44275;
continue;
}
} else
{var df_44276 = cljs.core.first.call(null,seq__44256_44270__$1);goog.dom.append(frag,df_44276);
{
var G__44277 = cljs.core.next.call(null,seq__44256_44270__$1);
var G__44278 = null;
var G__44279 = 0;
var G__44280 = 0;
seq__44256_44260 = G__44277;
chunk__44257_44261 = G__44278;
count__44258_44262 = G__44279;
i__44259_44263 = G__44280;
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
{var vec__44283 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__44283,0,null);var tdom = cljs.core.nth.call(null,vec__44283,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__44283,sym,tdom,dom,tsnip){
return (function (p1__44281_SHARP_){return p1__44281_SHARP_.outerHTML;
});})(vec__44283,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t44287 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t44287 = (function (trans,func,extr_multi_node,meta44288){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta44288 = meta44288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t44287.cljs$lang$type = true;
enfocus.core.t44287.cljs$lang$ctorStr = "enfocus.core/t44287";
enfocus.core.t44287.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"enfocus.core/t44287");
});
enfocus.core.t44287.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t44287.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t44287.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t44287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44289){var self__ = this;
var _44289__$1 = this;return self__.meta44288;
});
enfocus.core.t44287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44289,meta44288__$1){var self__ = this;
var _44289__$1 = this;return (new enfocus.core.t44287(self__.trans,self__.func,self__.extr_multi_node,meta44288__$1));
});
enfocus.core.__GT_t44287 = (function __GT_t44287(trans__$1,func__$1,extr_multi_node__$1,meta44288){return (new enfocus.core.t44287(trans__$1,func__$1,extr_multi_node__$1,meta44288));
});
}
return (new enfocus.core.t44287(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t44297 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t44297 = (function (trans,func,multi_node_chain,meta44298){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta44298 = meta44298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t44297.cljs$lang$type = true;
enfocus.core.t44297.cljs$lang$ctorStr = "enfocus.core/t44297";
enfocus.core.t44297.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"enfocus.core/t44297");
});
enfocus.core.t44297.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t44297.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t44297.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t44297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44299){var self__ = this;
var _44299__$1 = this;return self__.meta44298;
});
enfocus.core.t44297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44299,meta44298__$1){var self__ = this;
var _44299__$1 = this;return (new enfocus.core.t44297(self__.trans,self__.func,self__.multi_node_chain,meta44298__$1));
});
enfocus.core.__GT_t44297 = (function __GT_t44297(trans__$1,func__$1,multi_node_chain__$1,meta44298){return (new enfocus.core.t44297(trans__$1,func__$1,multi_node_chain__$1,meta44298));
});
}
return (new enfocus.core.t44297(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__44290_SHARP_){return domina.nodes.call(null,p1__44290_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t44300 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t44300 = (function (trans,func,values,multi_node_chain,meta44301){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta44301 = meta44301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t44300.cljs$lang$type = true;
enfocus.core.t44300.cljs$lang$ctorStr = "enfocus.core/t44300";
enfocus.core.t44300.cljs$lang$ctorPrWriter = (function (this__14503__auto__,writer__14504__auto__,opt__14505__auto__){return cljs.core._write.call(null,writer__14504__auto__,"enfocus.core/t44300");
});
enfocus.core.t44300.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t44300.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t44300.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t44300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44302){var self__ = this;
var _44302__$1 = this;return self__.meta44301;
});
enfocus.core.t44300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44302,meta44301__$1){var self__ = this;
var _44302__$1 = this;return (new enfocus.core.t44300(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta44301__$1));
});
enfocus.core.__GT_t44300 = (function __GT_t44300(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta44301){return (new enfocus.core.t44300(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta44301));
});
}
return (new enfocus.core.t44300(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44303_SHARP_,p2__44304_SHARP_){domina.destroy_children_BANG_.call(null,p1__44303_SHARP_);
return domina.append_BANG_.call(null,p1__44303_SHARP_,p2__44304_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__44305){
var values = cljs.core.seq(arglist__44305);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__44306_SHARP_){return domina.set_html_BANG_.call(null,p1__44306_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__44307_SHARP_){var seq__44314 = cljs.core.seq.call(null,pairs);var chunk__44315 = null;var count__44316 = 0;var i__44317 = 0;while(true){
if((i__44317 < count__44316))
{var vec__44318 = cljs.core._nth.call(null,chunk__44315,i__44317);var name = cljs.core.nth.call(null,vec__44318,0,null);var value = cljs.core.nth.call(null,vec__44318,1,null);domina.set_attr_BANG_.call(null,p1__44307_SHARP_,name,value);
{
var G__44320 = seq__44314;
var G__44321 = chunk__44315;
var G__44322 = count__44316;
var G__44323 = (i__44317 + 1);
seq__44314 = G__44320;
chunk__44315 = G__44321;
count__44316 = G__44322;
i__44317 = G__44323;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44314);if(temp__4092__auto__)
{var seq__44314__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44314__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44314__$1);{
var G__44324 = cljs.core.chunk_rest.call(null,seq__44314__$1);
var G__44325 = c__14683__auto__;
var G__44326 = cljs.core.count.call(null,c__14683__auto__);
var G__44327 = 0;
seq__44314 = G__44324;
chunk__44315 = G__44325;
count__44316 = G__44326;
i__44317 = G__44327;
continue;
}
} else
{var vec__44319 = cljs.core.first.call(null,seq__44314__$1);var name = cljs.core.nth.call(null,vec__44319,0,null);var value = cljs.core.nth.call(null,vec__44319,1,null);domina.set_attr_BANG_.call(null,p1__44307_SHARP_,name,value);
{
var G__44328 = cljs.core.next.call(null,seq__44314__$1);
var G__44329 = null;
var G__44330 = 0;
var G__44331 = 0;
seq__44314 = G__44328;
chunk__44315 = G__44329;
count__44316 = G__44330;
i__44317 = G__44331;
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
set_attr.cljs$lang$applyTo = (function (arglist__44332){
var values = cljs.core.seq(arglist__44332);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__44333_SHARP_){var seq__44338 = cljs.core.seq.call(null,values);var chunk__44339 = null;var count__44340 = 0;var i__44341 = 0;while(true){
if((i__44341 < count__44340))
{var name = cljs.core._nth.call(null,chunk__44339,i__44341);domina.remove_attr_BANG_.call(null,p1__44333_SHARP_,name);
{
var G__44342 = seq__44338;
var G__44343 = chunk__44339;
var G__44344 = count__44340;
var G__44345 = (i__44341 + 1);
seq__44338 = G__44342;
chunk__44339 = G__44343;
count__44340 = G__44344;
i__44341 = G__44345;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44338);if(temp__4092__auto__)
{var seq__44338__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44338__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44338__$1);{
var G__44346 = cljs.core.chunk_rest.call(null,seq__44338__$1);
var G__44347 = c__14683__auto__;
var G__44348 = cljs.core.count.call(null,c__14683__auto__);
var G__44349 = 0;
seq__44338 = G__44346;
chunk__44339 = G__44347;
count__44340 = G__44348;
i__44341 = G__44349;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__44338__$1);domina.remove_attr_BANG_.call(null,p1__44333_SHARP_,name);
{
var G__44350 = cljs.core.next.call(null,seq__44338__$1);
var G__44351 = null;
var G__44352 = 0;
var G__44353 = 0;
seq__44338 = G__44350;
chunk__44339 = G__44351;
count__44340 = G__44352;
i__44341 = G__44353;
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
remove_attr.cljs$lang$applyTo = (function (arglist__44354){
var values = cljs.core.seq(arglist__44354);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__44357){var vec__44358 = p__44357;var n = cljs.core.nth.call(null,vec__44358,0,null);var v = cljs.core.nth.call(null,vec__44358,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__44359){
var forms = cljs.core.seq(arglist__44359);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__44360_SHARP_){var seq__44365 = cljs.core.seq.call(null,values);var chunk__44366 = null;var count__44367 = 0;var i__44368 = 0;while(true){
if((i__44368 < count__44367))
{var val = cljs.core._nth.call(null,chunk__44366,i__44368);domina.add_class_BANG_.call(null,p1__44360_SHARP_,val);
{
var G__44369 = seq__44365;
var G__44370 = chunk__44366;
var G__44371 = count__44367;
var G__44372 = (i__44368 + 1);
seq__44365 = G__44369;
chunk__44366 = G__44370;
count__44367 = G__44371;
i__44368 = G__44372;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44365);if(temp__4092__auto__)
{var seq__44365__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44365__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44365__$1);{
var G__44373 = cljs.core.chunk_rest.call(null,seq__44365__$1);
var G__44374 = c__14683__auto__;
var G__44375 = cljs.core.count.call(null,c__14683__auto__);
var G__44376 = 0;
seq__44365 = G__44373;
chunk__44366 = G__44374;
count__44367 = G__44375;
i__44368 = G__44376;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__44365__$1);domina.add_class_BANG_.call(null,p1__44360_SHARP_,val);
{
var G__44377 = cljs.core.next.call(null,seq__44365__$1);
var G__44378 = null;
var G__44379 = 0;
var G__44380 = 0;
seq__44365 = G__44377;
chunk__44366 = G__44378;
count__44367 = G__44379;
i__44368 = G__44380;
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
add_class.cljs$lang$applyTo = (function (arglist__44381){
var values = cljs.core.seq(arglist__44381);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__44382_SHARP_){var seq__44387 = cljs.core.seq.call(null,values);var chunk__44388 = null;var count__44389 = 0;var i__44390 = 0;while(true){
if((i__44390 < count__44389))
{var val = cljs.core._nth.call(null,chunk__44388,i__44390);domina.remove_class_BANG_.call(null,p1__44382_SHARP_,val);
{
var G__44391 = seq__44387;
var G__44392 = chunk__44388;
var G__44393 = count__44389;
var G__44394 = (i__44390 + 1);
seq__44387 = G__44391;
chunk__44388 = G__44392;
count__44389 = G__44393;
i__44390 = G__44394;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44387);if(temp__4092__auto__)
{var seq__44387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44387__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44387__$1);{
var G__44395 = cljs.core.chunk_rest.call(null,seq__44387__$1);
var G__44396 = c__14683__auto__;
var G__44397 = cljs.core.count.call(null,c__14683__auto__);
var G__44398 = 0;
seq__44387 = G__44395;
chunk__44388 = G__44396;
count__44389 = G__44397;
i__44390 = G__44398;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__44387__$1);domina.remove_class_BANG_.call(null,p1__44382_SHARP_,val);
{
var G__44399 = cljs.core.next.call(null,seq__44387__$1);
var G__44400 = null;
var G__44401 = 0;
var G__44402 = 0;
seq__44387 = G__44399;
chunk__44388 = G__44400;
count__44389 = G__44401;
i__44390 = G__44402;
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
remove_class.cljs$lang$applyTo = (function (arglist__44403){
var values = cljs.core.seq(arglist__44403);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__44404_SHARP_){return domina.set_classes_BANG_.call(null,p1__44404_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__44405){
var values = cljs.core.seq(arglist__44405);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__44410 = cljs.core.seq.call(null,forms);var chunk__44411 = null;var count__44412 = 0;var i__44413 = 0;while(true){
if((i__44413 < count__44412))
{var fun = cljs.core._nth.call(null,chunk__44411,i__44413);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__44414 = seq__44410;
var G__44415 = chunk__44411;
var G__44416 = count__44412;
var G__44417 = (i__44413 + 1);
seq__44410 = G__44414;
chunk__44411 = G__44415;
count__44412 = G__44416;
i__44413 = G__44417;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44410);if(temp__4092__auto__)
{var seq__44410__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44410__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44410__$1);{
var G__44418 = cljs.core.chunk_rest.call(null,seq__44410__$1);
var G__44419 = c__14683__auto__;
var G__44420 = cljs.core.count.call(null,c__14683__auto__);
var G__44421 = 0;
seq__44410 = G__44418;
chunk__44411 = G__44419;
count__44412 = G__44420;
i__44413 = G__44421;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__44410__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__44422 = cljs.core.next.call(null,seq__44410__$1);
var G__44423 = null;
var G__44424 = 0;
var G__44425 = 0;
seq__44410 = G__44422;
chunk__44411 = G__44423;
count__44412 = G__44424;
i__44413 = G__44425;
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
do__GT_.cljs$lang$applyTo = (function (arglist__44426){
var forms = cljs.core.seq(arglist__44426);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44427_SHARP_,p2__44428_SHARP_){return domina.append_BANG_.call(null,p1__44427_SHARP_,p2__44428_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__44429){
var values = cljs.core.seq(arglist__44429);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44430_SHARP_,p2__44431_SHARP_){return domina.prepend_BANG_.call(null,p1__44430_SHARP_,p2__44431_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__44432){
var values = cljs.core.seq(arglist__44432);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44433_SHARP_,p2__44434_SHARP_){return domina.insert_before_BANG_.call(null,p1__44433_SHARP_,p2__44434_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__44435){
var values = cljs.core.seq(arglist__44435);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44436_SHARP_,p2__44437_SHARP_){return domina.insert_after_BANG_.call(null,p1__44436_SHARP_,p2__44437_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__44438){
var values = cljs.core.seq(arglist__44438);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__44439_SHARP_,p2__44440_SHARP_){return domina.swap_content_BANG_.call(null,p1__44439_SHARP_,p2__44440_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__44441){
var values = cljs.core.seq(arglist__44441);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__44442_SHARP_){return domina.detach_BANG_.call(null,p1__44442_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__44443_SHARP_){var seq__44450 = cljs.core.seq.call(null,pairs);var chunk__44451 = null;var count__44452 = 0;var i__44453 = 0;while(true){
if((i__44453 < count__44452))
{var vec__44454 = cljs.core._nth.call(null,chunk__44451,i__44453);var name = cljs.core.nth.call(null,vec__44454,0,null);var value = cljs.core.nth.call(null,vec__44454,1,null);domina.set_style_BANG_.call(null,p1__44443_SHARP_,name,value);
{
var G__44456 = seq__44450;
var G__44457 = chunk__44451;
var G__44458 = count__44452;
var G__44459 = (i__44453 + 1);
seq__44450 = G__44456;
chunk__44451 = G__44457;
count__44452 = G__44458;
i__44453 = G__44459;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44450);if(temp__4092__auto__)
{var seq__44450__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44450__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44450__$1);{
var G__44460 = cljs.core.chunk_rest.call(null,seq__44450__$1);
var G__44461 = c__14683__auto__;
var G__44462 = cljs.core.count.call(null,c__14683__auto__);
var G__44463 = 0;
seq__44450 = G__44460;
chunk__44451 = G__44461;
count__44452 = G__44462;
i__44453 = G__44463;
continue;
}
} else
{var vec__44455 = cljs.core.first.call(null,seq__44450__$1);var name = cljs.core.nth.call(null,vec__44455,0,null);var value = cljs.core.nth.call(null,vec__44455,1,null);domina.set_style_BANG_.call(null,p1__44443_SHARP_,name,value);
{
var G__44464 = cljs.core.next.call(null,seq__44450__$1);
var G__44465 = null;
var G__44466 = 0;
var G__44467 = 0;
seq__44450 = G__44464;
chunk__44451 = G__44465;
count__44452 = G__44466;
i__44453 = G__44467;
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
set_style.cljs$lang$applyTo = (function (arglist__44468){
var values = cljs.core.seq(arglist__44468);
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
remove_style.cljs$lang$applyTo = (function (arglist__44469){
var values = cljs.core.seq(arglist__44469);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__44470_SHARP_){return domina.set_data_BANG_.call(null,p1__44470_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__44471){
var ttime = cljs.core.first(arglist__44471);
var funcs = cljs.core.rest(arglist__44471);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__44473_SHARP_,p2__44472_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__44472_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__44498_44506 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__44499_44507 = null;var count__44500_44508 = 0;var i__44501_44509 = 0;while(true){
if((i__44501_44509 < count__44500_44508))
{var idx_44510 = cljs.core._nth.call(null,chunk__44499_44507,i__44501_44509);var attr_44511 = pnod.attributes.item(idx_44510);if(cljs.core.truth_(attr_44511.specified))
{attr_44511.value = rep_str.call(null,attr_44511.value);
} else
{}
{
var G__44512 = seq__44498_44506;
var G__44513 = chunk__44499_44507;
var G__44514 = count__44500_44508;
var G__44515 = (i__44501_44509 + 1);
seq__44498_44506 = G__44512;
chunk__44499_44507 = G__44513;
count__44500_44508 = G__44514;
i__44501_44509 = G__44515;
continue;
}
} else
{var temp__4092__auto___44516 = cljs.core.seq.call(null,seq__44498_44506);if(temp__4092__auto___44516)
{var seq__44498_44517__$1 = temp__4092__auto___44516;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44498_44517__$1))
{var c__14683__auto___44518 = cljs.core.chunk_first.call(null,seq__44498_44517__$1);{
var G__44519 = cljs.core.chunk_rest.call(null,seq__44498_44517__$1);
var G__44520 = c__14683__auto___44518;
var G__44521 = cljs.core.count.call(null,c__14683__auto___44518);
var G__44522 = 0;
seq__44498_44506 = G__44519;
chunk__44499_44507 = G__44520;
count__44500_44508 = G__44521;
i__44501_44509 = G__44522;
continue;
}
} else
{var idx_44523 = cljs.core.first.call(null,seq__44498_44517__$1);var attr_44524 = pnod.attributes.item(idx_44523);if(cljs.core.truth_(attr_44524.specified))
{attr_44524.value = rep_str.call(null,attr_44524.value);
} else
{}
{
var G__44525 = cljs.core.next.call(null,seq__44498_44517__$1);
var G__44526 = null;
var G__44527 = 0;
var G__44528 = 0;
seq__44498_44506 = G__44525;
chunk__44499_44507 = G__44526;
count__44500_44508 = G__44527;
i__44501_44509 = G__44528;
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
{var seq__44502 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__44503 = null;var count__44504 = 0;var i__44505 = 0;while(true){
if((i__44505 < count__44504))
{var cnode = cljs.core._nth.call(null,chunk__44503,i__44505);rep_node.call(null,cnode);
{
var G__44529 = seq__44502;
var G__44530 = chunk__44503;
var G__44531 = count__44504;
var G__44532 = (i__44505 + 1);
seq__44502 = G__44529;
chunk__44503 = G__44530;
count__44504 = G__44531;
i__44505 = G__44532;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44502);if(temp__4092__auto__)
{var seq__44502__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44502__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44502__$1);{
var G__44533 = cljs.core.chunk_rest.call(null,seq__44502__$1);
var G__44534 = c__14683__auto__;
var G__44535 = cljs.core.count.call(null,c__14683__auto__);
var G__44536 = 0;
seq__44502 = G__44533;
chunk__44503 = G__44534;
count__44504 = G__44535;
i__44505 = G__44536;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__44502__$1);rep_node.call(null,cnode);
{
var G__44537 = cljs.core.next.call(null,seq__44502__$1);
var G__44538 = null;
var G__44539 = 0;
var G__44540 = 0;
seq__44502 = G__44537;
chunk__44503 = G__44538;
count__44504 = G__44539;
i__44505 = G__44540;
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
{var vec__44550 = node_spec;var tag = cljs.core.nth.call(null,vec__44550,0,null);var vec__44551 = cljs.core.nthnext.call(null,vec__44550,1);var m = cljs.core.nth.call(null,vec__44551,0,null);var ms = cljs.core.nthnext.call(null,vec__44551,1);var more = vec__44551;var vec__44552 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__44552,0,null);var segments = cljs.core.nthnext.call(null,vec__44552,1);var id = cljs.core.some.call(null,((function (vec__44550,tag,vec__44551,m,ms,more,vec__44552,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__44550,tag,vec__44551,m,ms,more,vec__44552,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__44550,tag,vec__44551,m,ms,more,vec__44552,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__44550,tag,vec__44551,m,ms,more,vec__44552,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__44553_44559 = cljs.core.seq.call(null,attrs__$2);var chunk__44554_44560 = null;var count__44555_44561 = 0;var i__44556_44562 = 0;while(true){
if((i__44556_44562 < count__44555_44561))
{var vec__44557_44563 = cljs.core._nth.call(null,chunk__44554_44560,i__44556_44562);var key_44564 = cljs.core.nth.call(null,vec__44557_44563,0,null);var val_44565 = cljs.core.nth.call(null,vec__44557_44563,1,null);node.setAttribute(cljs.core.name.call(null,key_44564),val_44565);
{
var G__44566 = seq__44553_44559;
var G__44567 = chunk__44554_44560;
var G__44568 = count__44555_44561;
var G__44569 = (i__44556_44562 + 1);
seq__44553_44559 = G__44566;
chunk__44554_44560 = G__44567;
count__44555_44561 = G__44568;
i__44556_44562 = G__44569;
continue;
}
} else
{var temp__4092__auto___44570 = cljs.core.seq.call(null,seq__44553_44559);if(temp__4092__auto___44570)
{var seq__44553_44571__$1 = temp__4092__auto___44570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44553_44571__$1))
{var c__14683__auto___44572 = cljs.core.chunk_first.call(null,seq__44553_44571__$1);{
var G__44573 = cljs.core.chunk_rest.call(null,seq__44553_44571__$1);
var G__44574 = c__14683__auto___44572;
var G__44575 = cljs.core.count.call(null,c__14683__auto___44572);
var G__44576 = 0;
seq__44553_44559 = G__44573;
chunk__44554_44560 = G__44574;
count__44555_44561 = G__44575;
i__44556_44562 = G__44576;
continue;
}
} else
{var vec__44558_44577 = cljs.core.first.call(null,seq__44553_44571__$1);var key_44578 = cljs.core.nth.call(null,vec__44558_44577,0,null);var val_44579 = cljs.core.nth.call(null,vec__44558_44577,1,null);node.setAttribute(cljs.core.name.call(null,key_44578),val_44579);
{
var G__44580 = cljs.core.next.call(null,seq__44553_44571__$1);
var G__44581 = null;
var G__44582 = 0;
var G__44583 = 0;
seq__44553_44559 = G__44580;
chunk__44554_44560 = G__44581;
count__44555_44561 = G__44582;
i__44556_44562 = G__44583;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13942__auto__ = el.checked;if(cljs.core.truth_(and__13942__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13942__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__44584_SHARP_){return p1__44584_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__44585_SHARP_){return p1__44585_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__44587_SHARP_,p2__44586_SHARP_){var G__44590 = p2__44586_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__44590))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__44590))
{return enfocus.core.read_select_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__44590))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__44590))
{var G__44591 = p2__44586_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__44591))
{return enfocus.core.read_checked_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__44591))
{return enfocus.core.read_checked_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__44591))
{return enfocus.core.read_simple_input.call(null,p2__44586_SHARP_,p1__44587_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__44587_SHARP_;
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
{return p1__44587_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__44592_SHARP_){if((p1__44592_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__44592_SHARP_);
} else
{if((p1__44592_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__44592_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__44592_SHARP_))
{return create_sel_str.call(null,p1__44592_SHARP_);
} else
{if(typeof p1__44592_SHARP_ === 'string')
{return p1__44592_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13954__auto__ = func;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13942__auto__ = !((node == null));if(and__13942__auto__)
{var G__44603 = node;if(G__44603)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__44603.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__44603.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__44603);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__44603);
}
} else
{return and__13942__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__44604 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__44604,0,null);var trans__$1 = cljs.core.nth.call(null,vec__44604,1,null);var seq__44605 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__44606 = null;var count__44607 = 0;var i__44608 = 0;while(true){
if((i__44608 < count__44607))
{var vec__44609 = cljs.core._nth.call(null,chunk__44606,i__44608);var sel = cljs.core.nth.call(null,vec__44609,0,null);var t = cljs.core.nth.call(null,vec__44609,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__44611 = seq__44605;
var G__44612 = chunk__44606;
var G__44613 = count__44607;
var G__44614 = (i__44608 + 1);
seq__44605 = G__44611;
chunk__44606 = G__44612;
count__44607 = G__44613;
i__44608 = G__44614;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44605);if(temp__4092__auto__)
{var seq__44605__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44605__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44605__$1);{
var G__44615 = cljs.core.chunk_rest.call(null,seq__44605__$1);
var G__44616 = c__14683__auto__;
var G__44617 = cljs.core.count.call(null,c__14683__auto__);
var G__44618 = 0;
seq__44605 = G__44615;
chunk__44606 = G__44616;
count__44607 = G__44617;
i__44608 = G__44618;
continue;
}
} else
{var vec__44610 = cljs.core.first.call(null,seq__44605__$1);var sel = cljs.core.nth.call(null,vec__44610,0,null);var t = cljs.core.nth.call(null,vec__44610,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__44619 = cljs.core.next.call(null,seq__44605__$1);
var G__44620 = null;
var G__44621 = 0;
var G__44622 = 0;
seq__44605 = G__44619;
chunk__44606 = G__44620;
count__44607 = G__44621;
i__44608 = G__44622;
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
i_at.cljs$lang$applyTo = (function (arglist__44623){
var id_mask = cljs.core.first(arglist__44623);
arglist__44623 = cljs.core.next(arglist__44623);
var node = cljs.core.first(arglist__44623);
var trans = cljs.core.rest(arglist__44623);
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
at.cljs$lang$applyTo = (function (arglist__44624){
var node = cljs.core.first(arglist__44624);
var trans = cljs.core.rest(arglist__44624);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__44629 = node;if(G__44629)
{var bit__14585__auto__ = null;if(cljs.core.truth_((function (){var or__13954__auto__ = bit__14585__auto__;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return G__44629.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__44629.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__44629);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__44629);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__44630 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__44630,0,null);var trans__$1 = cljs.core.nth.call(null,vec__44630,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__44631){var vec__44632 = p__44631;var ky = cljs.core.nth.call(null,vec__44632,0,null);var sel = cljs.core.nth.call(null,vec__44632,1,null);var ext = cljs.core.nth.call(null,vec__44632,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__44633){
var node = cljs.core.first(arglist__44633);
var trans = cljs.core.rest(arglist__44633);
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