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
enfocus.core.ISelector = (function (){var obj338999 = {};return obj338999;
})();
enfocus.core.select = (function() {
var select = null;
var select__1 = (function (this$){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$1;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$1(this$);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$);
}
});
var select__2 = (function (this$,root){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$2(this$,root);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISelector.select",this$);
}
}
})().call(null,this$,root);
}
});
var select__3 = (function (this$,root,id_mask){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ISelector$select$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ISelector$select$arity$3(this$,root,id_mask);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.select[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.select["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
enfocus.core.ITransform = (function (){var obj339001 = {};return obj339001;
})();
enfocus.core.apply_transform = (function() {
var apply_transform = null;
var apply_transform__2 = (function (this$,nodes){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$2;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$2(this$,nodes);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransform.apply-transform",this$);
}
}
})().call(null,this$,nodes);
}
});
var apply_transform__3 = (function (this$,nodes,callback){if((function (){var and__13811__auto__ = this$;if(and__13811__auto__)
{return this$.enfocus$core$ITransform$apply_transform$arity$3;
} else
{return and__13811__auto__;
}
})())
{return this$.enfocus$core$ITransform$apply_transform$arity$3(this$,nodes,callback);
} else
{var x__14426__auto__ = (((this$ == null))?null:this$);return (function (){var or__13823__auto__ = (enfocus.core.apply_transform[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (enfocus.core.apply_transform["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
enfocus.core.log_debug = (function log_debug(mesg){if(cljs.core.truth_((function (){var and__13811__auto__ = enfocus.core.debug;if(cljs.core.truth_(and__13811__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13811__auto__;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__339002_SHARP_){if(typeof p1__339002_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__339002_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__339002_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__339009_339015 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__339010_339016 = null;var count__339011_339017 = 0;var i__339012_339018 = 0;while(true){
if((i__339012_339018 < count__339011_339017))
{var vec__339013_339019 = cljs.core._nth.call(null,chunk__339010_339016,i__339012_339018);var attr_339020 = cljs.core.nth.call(null,vec__339013_339019,0,null);var value_339021 = cljs.core.nth.call(null,vec__339013_339019,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_339020),value_339021);
{
var G__339022 = seq__339009_339015;
var G__339023 = chunk__339010_339016;
var G__339024 = count__339011_339017;
var G__339025 = (i__339012_339018 + 1);
seq__339009_339015 = G__339022;
chunk__339010_339016 = G__339023;
count__339011_339017 = G__339024;
i__339012_339018 = G__339025;
continue;
}
} else
{var temp__4092__auto___339026 = cljs.core.seq.call(null,seq__339009_339015);if(temp__4092__auto___339026)
{var seq__339009_339027__$1 = temp__4092__auto___339026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339009_339027__$1))
{var c__14547__auto___339028 = cljs.core.chunk_first.call(null,seq__339009_339027__$1);{
var G__339029 = cljs.core.chunk_rest.call(null,seq__339009_339027__$1);
var G__339030 = c__14547__auto___339028;
var G__339031 = cljs.core.count.call(null,c__14547__auto___339028);
var G__339032 = 0;
seq__339009_339015 = G__339029;
chunk__339010_339016 = G__339030;
count__339011_339017 = G__339031;
i__339012_339018 = G__339032;
continue;
}
} else
{var vec__339014_339033 = cljs.core.first.call(null,seq__339009_339027__$1);var attr_339034 = cljs.core.nth.call(null,vec__339014_339033,0,null);var value_339035 = cljs.core.nth.call(null,vec__339014_339033,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_339034),value_339035);
{
var G__339036 = cljs.core.next.call(null,seq__339009_339027__$1);
var G__339037 = null;
var G__339038 = 0;
var G__339039 = 0;
seq__339009_339015 = G__339036;
chunk__339010_339016 = G__339037;
count__339011_339017 = G__339038;
i__339012_339018 = G__339039;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__339044 = cljs.core.seq.call(null,values);var chunk__339045 = null;var count__339046 = 0;var i__339047 = 0;while(true){
if((i__339047 < count__339046))
{var attr = cljs.core._nth.call(null,chunk__339045,i__339047);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__339048 = seq__339044;
var G__339049 = chunk__339045;
var G__339050 = count__339046;
var G__339051 = (i__339047 + 1);
seq__339044 = G__339048;
chunk__339045 = G__339049;
count__339046 = G__339050;
i__339047 = G__339051;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339044);if(temp__4092__auto__)
{var seq__339044__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339044__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339044__$1);{
var G__339052 = cljs.core.chunk_rest.call(null,seq__339044__$1);
var G__339053 = c__14547__auto__;
var G__339054 = cljs.core.count.call(null,c__14547__auto__);
var G__339055 = 0;
seq__339044 = G__339052;
chunk__339045 = G__339053;
count__339046 = G__339054;
i__339047 = G__339055;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__339044__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__339056 = cljs.core.next.call(null,seq__339044__$1);
var G__339057 = null;
var G__339058 = 0;
var G__339059 = 0;
seq__339044 = G__339056;
chunk__339045 = G__339057;
count__339046 = G__339058;
i__339047 = G__339059;
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
{var seq__339066_339072 = cljs.core.seq.call(null,ats);var chunk__339067_339073 = null;var count__339068_339074 = 0;var i__339069_339075 = 0;while(true){
if((i__339069_339075 < count__339068_339074))
{var vec__339070_339076 = cljs.core._nth.call(null,chunk__339067_339073,i__339069_339075);var k_339077 = cljs.core.nth.call(null,vec__339070_339076,0,null);var v_339078 = cljs.core.nth.call(null,vec__339070_339076,1,null);add_map_attrs.call(null,elem,k_339077,v_339078);
{
var G__339079 = seq__339066_339072;
var G__339080 = chunk__339067_339073;
var G__339081 = count__339068_339074;
var G__339082 = (i__339069_339075 + 1);
seq__339066_339072 = G__339079;
chunk__339067_339073 = G__339080;
count__339068_339074 = G__339081;
i__339069_339075 = G__339082;
continue;
}
} else
{var temp__4092__auto___339083 = cljs.core.seq.call(null,seq__339066_339072);if(temp__4092__auto___339083)
{var seq__339066_339084__$1 = temp__4092__auto___339083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339066_339084__$1))
{var c__14547__auto___339085 = cljs.core.chunk_first.call(null,seq__339066_339084__$1);{
var G__339086 = cljs.core.chunk_rest.call(null,seq__339066_339084__$1);
var G__339087 = c__14547__auto___339085;
var G__339088 = cljs.core.count.call(null,c__14547__auto___339085);
var G__339089 = 0;
seq__339066_339072 = G__339086;
chunk__339067_339073 = G__339087;
count__339068_339074 = G__339088;
i__339069_339075 = G__339089;
continue;
}
} else
{var vec__339071_339090 = cljs.core.first.call(null,seq__339066_339084__$1);var k_339091 = cljs.core.nth.call(null,vec__339071_339090,0,null);var v_339092 = cljs.core.nth.call(null,vec__339071_339090,1,null);add_map_attrs.call(null,elem,k_339091,v_339092);
{
var G__339093 = cljs.core.next.call(null,seq__339066_339084__$1);
var G__339094 = null;
var G__339095 = 0;
var G__339096 = 0;
seq__339066_339072 = G__339093;
chunk__339067_339073 = G__339094;
count__339068_339074 = G__339095;
i__339069_339075 = G__339096;
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
var seq__339101_339105 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__339102_339106 = null;var count__339103_339107 = 0;var i__339104_339108 = 0;while(true){
if((i__339104_339108 < count__339103_339107))
{var node_339109 = cljs.core._nth.call(null,chunk__339102_339106,i__339104_339108);goog.dom.appendChild(div,node_339109);
{
var G__339110 = seq__339101_339105;
var G__339111 = chunk__339102_339106;
var G__339112 = count__339103_339107;
var G__339113 = (i__339104_339108 + 1);
seq__339101_339105 = G__339110;
chunk__339102_339106 = G__339111;
count__339103_339107 = G__339112;
i__339104_339108 = G__339113;
continue;
}
} else
{var temp__4092__auto___339114 = cljs.core.seq.call(null,seq__339101_339105);if(temp__4092__auto___339114)
{var seq__339101_339115__$1 = temp__4092__auto___339114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339101_339115__$1))
{var c__14547__auto___339116 = cljs.core.chunk_first.call(null,seq__339101_339115__$1);{
var G__339117 = cljs.core.chunk_rest.call(null,seq__339101_339115__$1);
var G__339118 = c__14547__auto___339116;
var G__339119 = cljs.core.count.call(null,c__14547__auto___339116);
var G__339120 = 0;
seq__339101_339105 = G__339117;
chunk__339102_339106 = G__339118;
count__339103_339107 = G__339119;
i__339104_339108 = G__339120;
continue;
}
} else
{var node_339121 = cljs.core.first.call(null,seq__339101_339115__$1);goog.dom.appendChild(div,node_339121);
{
var G__339122 = cljs.core.next.call(null,seq__339101_339115__$1);
var G__339123 = null;
var G__339124 = 0;
var G__339125 = 0;
seq__339101_339105 = G__339122;
chunk__339102_339106 = G__339123;
count__339103_339107 = G__339124;
i__339104_339108 = G__339125;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__339126_SHARP_){var id = p1__339126_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__339126_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__339128 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__339128,0,null);var txt = cljs.core.nth.call(null,vec__339128,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__339133_339137 = cljs.core.seq.call(null,dfa);var chunk__339134_339138 = null;var count__339135_339139 = 0;var i__339136_339140 = 0;while(true){
if((i__339136_339140 < count__339135_339139))
{var df_339141 = cljs.core._nth.call(null,chunk__339134_339138,i__339136_339140);goog.dom.append(frag,df_339141);
{
var G__339142 = seq__339133_339137;
var G__339143 = chunk__339134_339138;
var G__339144 = count__339135_339139;
var G__339145 = (i__339136_339140 + 1);
seq__339133_339137 = G__339142;
chunk__339134_339138 = G__339143;
count__339135_339139 = G__339144;
i__339136_339140 = G__339145;
continue;
}
} else
{var temp__4092__auto___339146 = cljs.core.seq.call(null,seq__339133_339137);if(temp__4092__auto___339146)
{var seq__339133_339147__$1 = temp__4092__auto___339146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339133_339147__$1))
{var c__14547__auto___339148 = cljs.core.chunk_first.call(null,seq__339133_339147__$1);{
var G__339149 = cljs.core.chunk_rest.call(null,seq__339133_339147__$1);
var G__339150 = c__14547__auto___339148;
var G__339151 = cljs.core.count.call(null,c__14547__auto___339148);
var G__339152 = 0;
seq__339133_339137 = G__339149;
chunk__339134_339138 = G__339150;
count__339135_339139 = G__339151;
i__339136_339140 = G__339152;
continue;
}
} else
{var df_339153 = cljs.core.first.call(null,seq__339133_339147__$1);goog.dom.append(frag,df_339153);
{
var G__339154 = cljs.core.next.call(null,seq__339133_339147__$1);
var G__339155 = null;
var G__339156 = 0;
var G__339157 = 0;
seq__339133_339137 = G__339154;
chunk__339134_339138 = G__339155;
count__339135_339139 = G__339156;
i__339136_339140 = G__339157;
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
{var vec__339160 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__339160,0,null);var tdom = cljs.core.nth.call(null,vec__339160,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__339160,sym,tdom,dom,tsnip){
return (function (p1__339158_SHARP_){return p1__339158_SHARP_.outerHTML;
});})(vec__339160,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t339164 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t339164 = (function (trans,func,extr_multi_node,meta339165){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta339165 = meta339165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t339164.cljs$lang$type = true;
enfocus.core.t339164.cljs$lang$ctorStr = "enfocus.core/t339164";
enfocus.core.t339164.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t339164");
});
enfocus.core.t339164.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t339164.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t339164.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t339164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_339166){var self__ = this;
var _339166__$1 = this;return self__.meta339165;
});
enfocus.core.t339164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_339166,meta339165__$1){var self__ = this;
var _339166__$1 = this;return (new enfocus.core.t339164(self__.trans,self__.func,self__.extr_multi_node,meta339165__$1));
});
enfocus.core.__GT_t339164 = (function __GT_t339164(trans__$1,func__$1,extr_multi_node__$1,meta339165){return (new enfocus.core.t339164(trans__$1,func__$1,extr_multi_node__$1,meta339165));
});
}
return (new enfocus.core.t339164(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t339174 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t339174 = (function (trans,func,multi_node_chain,meta339175){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta339175 = meta339175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t339174.cljs$lang$type = true;
enfocus.core.t339174.cljs$lang$ctorStr = "enfocus.core/t339174";
enfocus.core.t339174.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t339174");
});
enfocus.core.t339174.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t339174.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t339174.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t339174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_339176){var self__ = this;
var _339176__$1 = this;return self__.meta339175;
});
enfocus.core.t339174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_339176,meta339175__$1){var self__ = this;
var _339176__$1 = this;return (new enfocus.core.t339174(self__.trans,self__.func,self__.multi_node_chain,meta339175__$1));
});
enfocus.core.__GT_t339174 = (function __GT_t339174(trans__$1,func__$1,multi_node_chain__$1,meta339175){return (new enfocus.core.t339174(trans__$1,func__$1,multi_node_chain__$1,meta339175));
});
}
return (new enfocus.core.t339174(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__339167_SHARP_){return domina.nodes.call(null,p1__339167_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t339177 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t339177 = (function (trans,func,values,multi_node_chain,meta339178){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta339178 = meta339178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t339177.cljs$lang$type = true;
enfocus.core.t339177.cljs$lang$ctorStr = "enfocus.core/t339177";
enfocus.core.t339177.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t339177");
});
enfocus.core.t339177.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t339177.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t339177.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t339177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_339179){var self__ = this;
var _339179__$1 = this;return self__.meta339178;
});
enfocus.core.t339177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_339179,meta339178__$1){var self__ = this;
var _339179__$1 = this;return (new enfocus.core.t339177(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta339178__$1));
});
enfocus.core.__GT_t339177 = (function __GT_t339177(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta339178){return (new enfocus.core.t339177(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta339178));
});
}
return (new enfocus.core.t339177(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339180_SHARP_,p2__339181_SHARP_){domina.destroy_children_BANG_.call(null,p1__339180_SHARP_);
return domina.append_BANG_.call(null,p1__339180_SHARP_,p2__339181_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__339182){
var values = cljs.core.seq(arglist__339182);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__339183_SHARP_){return domina.set_html_BANG_.call(null,p1__339183_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__339184_SHARP_){var seq__339191 = cljs.core.seq.call(null,pairs);var chunk__339192 = null;var count__339193 = 0;var i__339194 = 0;while(true){
if((i__339194 < count__339193))
{var vec__339195 = cljs.core._nth.call(null,chunk__339192,i__339194);var name = cljs.core.nth.call(null,vec__339195,0,null);var value = cljs.core.nth.call(null,vec__339195,1,null);domina.set_attr_BANG_.call(null,p1__339184_SHARP_,name,value);
{
var G__339197 = seq__339191;
var G__339198 = chunk__339192;
var G__339199 = count__339193;
var G__339200 = (i__339194 + 1);
seq__339191 = G__339197;
chunk__339192 = G__339198;
count__339193 = G__339199;
i__339194 = G__339200;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339191);if(temp__4092__auto__)
{var seq__339191__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339191__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339191__$1);{
var G__339201 = cljs.core.chunk_rest.call(null,seq__339191__$1);
var G__339202 = c__14547__auto__;
var G__339203 = cljs.core.count.call(null,c__14547__auto__);
var G__339204 = 0;
seq__339191 = G__339201;
chunk__339192 = G__339202;
count__339193 = G__339203;
i__339194 = G__339204;
continue;
}
} else
{var vec__339196 = cljs.core.first.call(null,seq__339191__$1);var name = cljs.core.nth.call(null,vec__339196,0,null);var value = cljs.core.nth.call(null,vec__339196,1,null);domina.set_attr_BANG_.call(null,p1__339184_SHARP_,name,value);
{
var G__339205 = cljs.core.next.call(null,seq__339191__$1);
var G__339206 = null;
var G__339207 = 0;
var G__339208 = 0;
seq__339191 = G__339205;
chunk__339192 = G__339206;
count__339193 = G__339207;
i__339194 = G__339208;
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
set_attr.cljs$lang$applyTo = (function (arglist__339209){
var values = cljs.core.seq(arglist__339209);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__339210_SHARP_){var seq__339215 = cljs.core.seq.call(null,values);var chunk__339216 = null;var count__339217 = 0;var i__339218 = 0;while(true){
if((i__339218 < count__339217))
{var name = cljs.core._nth.call(null,chunk__339216,i__339218);domina.remove_attr_BANG_.call(null,p1__339210_SHARP_,name);
{
var G__339219 = seq__339215;
var G__339220 = chunk__339216;
var G__339221 = count__339217;
var G__339222 = (i__339218 + 1);
seq__339215 = G__339219;
chunk__339216 = G__339220;
count__339217 = G__339221;
i__339218 = G__339222;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339215);if(temp__4092__auto__)
{var seq__339215__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339215__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339215__$1);{
var G__339223 = cljs.core.chunk_rest.call(null,seq__339215__$1);
var G__339224 = c__14547__auto__;
var G__339225 = cljs.core.count.call(null,c__14547__auto__);
var G__339226 = 0;
seq__339215 = G__339223;
chunk__339216 = G__339224;
count__339217 = G__339225;
i__339218 = G__339226;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__339215__$1);domina.remove_attr_BANG_.call(null,p1__339210_SHARP_,name);
{
var G__339227 = cljs.core.next.call(null,seq__339215__$1);
var G__339228 = null;
var G__339229 = 0;
var G__339230 = 0;
seq__339215 = G__339227;
chunk__339216 = G__339228;
count__339217 = G__339229;
i__339218 = G__339230;
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
remove_attr.cljs$lang$applyTo = (function (arglist__339231){
var values = cljs.core.seq(arglist__339231);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__339234){var vec__339235 = p__339234;var n = cljs.core.nth.call(null,vec__339235,0,null);var v = cljs.core.nth.call(null,vec__339235,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__339236){
var forms = cljs.core.seq(arglist__339236);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__339237_SHARP_){var seq__339242 = cljs.core.seq.call(null,values);var chunk__339243 = null;var count__339244 = 0;var i__339245 = 0;while(true){
if((i__339245 < count__339244))
{var val = cljs.core._nth.call(null,chunk__339243,i__339245);domina.add_class_BANG_.call(null,p1__339237_SHARP_,val);
{
var G__339246 = seq__339242;
var G__339247 = chunk__339243;
var G__339248 = count__339244;
var G__339249 = (i__339245 + 1);
seq__339242 = G__339246;
chunk__339243 = G__339247;
count__339244 = G__339248;
i__339245 = G__339249;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339242);if(temp__4092__auto__)
{var seq__339242__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339242__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339242__$1);{
var G__339250 = cljs.core.chunk_rest.call(null,seq__339242__$1);
var G__339251 = c__14547__auto__;
var G__339252 = cljs.core.count.call(null,c__14547__auto__);
var G__339253 = 0;
seq__339242 = G__339250;
chunk__339243 = G__339251;
count__339244 = G__339252;
i__339245 = G__339253;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__339242__$1);domina.add_class_BANG_.call(null,p1__339237_SHARP_,val);
{
var G__339254 = cljs.core.next.call(null,seq__339242__$1);
var G__339255 = null;
var G__339256 = 0;
var G__339257 = 0;
seq__339242 = G__339254;
chunk__339243 = G__339255;
count__339244 = G__339256;
i__339245 = G__339257;
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
add_class.cljs$lang$applyTo = (function (arglist__339258){
var values = cljs.core.seq(arglist__339258);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__339259_SHARP_){var seq__339264 = cljs.core.seq.call(null,values);var chunk__339265 = null;var count__339266 = 0;var i__339267 = 0;while(true){
if((i__339267 < count__339266))
{var val = cljs.core._nth.call(null,chunk__339265,i__339267);domina.remove_class_BANG_.call(null,p1__339259_SHARP_,val);
{
var G__339268 = seq__339264;
var G__339269 = chunk__339265;
var G__339270 = count__339266;
var G__339271 = (i__339267 + 1);
seq__339264 = G__339268;
chunk__339265 = G__339269;
count__339266 = G__339270;
i__339267 = G__339271;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339264);if(temp__4092__auto__)
{var seq__339264__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339264__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339264__$1);{
var G__339272 = cljs.core.chunk_rest.call(null,seq__339264__$1);
var G__339273 = c__14547__auto__;
var G__339274 = cljs.core.count.call(null,c__14547__auto__);
var G__339275 = 0;
seq__339264 = G__339272;
chunk__339265 = G__339273;
count__339266 = G__339274;
i__339267 = G__339275;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__339264__$1);domina.remove_class_BANG_.call(null,p1__339259_SHARP_,val);
{
var G__339276 = cljs.core.next.call(null,seq__339264__$1);
var G__339277 = null;
var G__339278 = 0;
var G__339279 = 0;
seq__339264 = G__339276;
chunk__339265 = G__339277;
count__339266 = G__339278;
i__339267 = G__339279;
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
remove_class.cljs$lang$applyTo = (function (arglist__339280){
var values = cljs.core.seq(arglist__339280);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__339281_SHARP_){return domina.set_classes_BANG_.call(null,p1__339281_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__339282){
var values = cljs.core.seq(arglist__339282);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__339287 = cljs.core.seq.call(null,forms);var chunk__339288 = null;var count__339289 = 0;var i__339290 = 0;while(true){
if((i__339290 < count__339289))
{var fun = cljs.core._nth.call(null,chunk__339288,i__339290);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__339291 = seq__339287;
var G__339292 = chunk__339288;
var G__339293 = count__339289;
var G__339294 = (i__339290 + 1);
seq__339287 = G__339291;
chunk__339288 = G__339292;
count__339289 = G__339293;
i__339290 = G__339294;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339287);if(temp__4092__auto__)
{var seq__339287__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339287__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339287__$1);{
var G__339295 = cljs.core.chunk_rest.call(null,seq__339287__$1);
var G__339296 = c__14547__auto__;
var G__339297 = cljs.core.count.call(null,c__14547__auto__);
var G__339298 = 0;
seq__339287 = G__339295;
chunk__339288 = G__339296;
count__339289 = G__339297;
i__339290 = G__339298;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__339287__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__339299 = cljs.core.next.call(null,seq__339287__$1);
var G__339300 = null;
var G__339301 = 0;
var G__339302 = 0;
seq__339287 = G__339299;
chunk__339288 = G__339300;
count__339289 = G__339301;
i__339290 = G__339302;
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
do__GT_.cljs$lang$applyTo = (function (arglist__339303){
var forms = cljs.core.seq(arglist__339303);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339304_SHARP_,p2__339305_SHARP_){return domina.append_BANG_.call(null,p1__339304_SHARP_,p2__339305_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__339306){
var values = cljs.core.seq(arglist__339306);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339307_SHARP_,p2__339308_SHARP_){return domina.prepend_BANG_.call(null,p1__339307_SHARP_,p2__339308_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__339309){
var values = cljs.core.seq(arglist__339309);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339310_SHARP_,p2__339311_SHARP_){return domina.insert_before_BANG_.call(null,p1__339310_SHARP_,p2__339311_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__339312){
var values = cljs.core.seq(arglist__339312);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339313_SHARP_,p2__339314_SHARP_){return domina.insert_after_BANG_.call(null,p1__339313_SHARP_,p2__339314_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__339315){
var values = cljs.core.seq(arglist__339315);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__339316_SHARP_,p2__339317_SHARP_){return domina.swap_content_BANG_.call(null,p1__339316_SHARP_,p2__339317_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__339318){
var values = cljs.core.seq(arglist__339318);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__339319_SHARP_){return domina.detach_BANG_.call(null,p1__339319_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__339320_SHARP_){var seq__339327 = cljs.core.seq.call(null,pairs);var chunk__339328 = null;var count__339329 = 0;var i__339330 = 0;while(true){
if((i__339330 < count__339329))
{var vec__339331 = cljs.core._nth.call(null,chunk__339328,i__339330);var name = cljs.core.nth.call(null,vec__339331,0,null);var value = cljs.core.nth.call(null,vec__339331,1,null);domina.set_style_BANG_.call(null,p1__339320_SHARP_,name,value);
{
var G__339333 = seq__339327;
var G__339334 = chunk__339328;
var G__339335 = count__339329;
var G__339336 = (i__339330 + 1);
seq__339327 = G__339333;
chunk__339328 = G__339334;
count__339329 = G__339335;
i__339330 = G__339336;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339327);if(temp__4092__auto__)
{var seq__339327__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339327__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339327__$1);{
var G__339337 = cljs.core.chunk_rest.call(null,seq__339327__$1);
var G__339338 = c__14547__auto__;
var G__339339 = cljs.core.count.call(null,c__14547__auto__);
var G__339340 = 0;
seq__339327 = G__339337;
chunk__339328 = G__339338;
count__339329 = G__339339;
i__339330 = G__339340;
continue;
}
} else
{var vec__339332 = cljs.core.first.call(null,seq__339327__$1);var name = cljs.core.nth.call(null,vec__339332,0,null);var value = cljs.core.nth.call(null,vec__339332,1,null);domina.set_style_BANG_.call(null,p1__339320_SHARP_,name,value);
{
var G__339341 = cljs.core.next.call(null,seq__339327__$1);
var G__339342 = null;
var G__339343 = 0;
var G__339344 = 0;
seq__339327 = G__339341;
chunk__339328 = G__339342;
count__339329 = G__339343;
i__339330 = G__339344;
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
set_style.cljs$lang$applyTo = (function (arglist__339345){
var values = cljs.core.seq(arglist__339345);
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
remove_style.cljs$lang$applyTo = (function (arglist__339346){
var values = cljs.core.seq(arglist__339346);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__339347_SHARP_){return domina.set_data_BANG_.call(null,p1__339347_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__339348){
var ttime = cljs.core.first(arglist__339348);
var funcs = cljs.core.rest(arglist__339348);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__339350_SHARP_,p2__339349_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__339349_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__339375_339383 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__339376_339384 = null;var count__339377_339385 = 0;var i__339378_339386 = 0;while(true){
if((i__339378_339386 < count__339377_339385))
{var idx_339387 = cljs.core._nth.call(null,chunk__339376_339384,i__339378_339386);var attr_339388 = pnod.attributes.item(idx_339387);if(cljs.core.truth_(attr_339388.specified))
{attr_339388.value = rep_str.call(null,attr_339388.value);
} else
{}
{
var G__339389 = seq__339375_339383;
var G__339390 = chunk__339376_339384;
var G__339391 = count__339377_339385;
var G__339392 = (i__339378_339386 + 1);
seq__339375_339383 = G__339389;
chunk__339376_339384 = G__339390;
count__339377_339385 = G__339391;
i__339378_339386 = G__339392;
continue;
}
} else
{var temp__4092__auto___339393 = cljs.core.seq.call(null,seq__339375_339383);if(temp__4092__auto___339393)
{var seq__339375_339394__$1 = temp__4092__auto___339393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339375_339394__$1))
{var c__14547__auto___339395 = cljs.core.chunk_first.call(null,seq__339375_339394__$1);{
var G__339396 = cljs.core.chunk_rest.call(null,seq__339375_339394__$1);
var G__339397 = c__14547__auto___339395;
var G__339398 = cljs.core.count.call(null,c__14547__auto___339395);
var G__339399 = 0;
seq__339375_339383 = G__339396;
chunk__339376_339384 = G__339397;
count__339377_339385 = G__339398;
i__339378_339386 = G__339399;
continue;
}
} else
{var idx_339400 = cljs.core.first.call(null,seq__339375_339394__$1);var attr_339401 = pnod.attributes.item(idx_339400);if(cljs.core.truth_(attr_339401.specified))
{attr_339401.value = rep_str.call(null,attr_339401.value);
} else
{}
{
var G__339402 = cljs.core.next.call(null,seq__339375_339394__$1);
var G__339403 = null;
var G__339404 = 0;
var G__339405 = 0;
seq__339375_339383 = G__339402;
chunk__339376_339384 = G__339403;
count__339377_339385 = G__339404;
i__339378_339386 = G__339405;
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
{var seq__339379 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__339380 = null;var count__339381 = 0;var i__339382 = 0;while(true){
if((i__339382 < count__339381))
{var cnode = cljs.core._nth.call(null,chunk__339380,i__339382);rep_node.call(null,cnode);
{
var G__339406 = seq__339379;
var G__339407 = chunk__339380;
var G__339408 = count__339381;
var G__339409 = (i__339382 + 1);
seq__339379 = G__339406;
chunk__339380 = G__339407;
count__339381 = G__339408;
i__339382 = G__339409;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339379);if(temp__4092__auto__)
{var seq__339379__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339379__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339379__$1);{
var G__339410 = cljs.core.chunk_rest.call(null,seq__339379__$1);
var G__339411 = c__14547__auto__;
var G__339412 = cljs.core.count.call(null,c__14547__auto__);
var G__339413 = 0;
seq__339379 = G__339410;
chunk__339380 = G__339411;
count__339381 = G__339412;
i__339382 = G__339413;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__339379__$1);rep_node.call(null,cnode);
{
var G__339414 = cljs.core.next.call(null,seq__339379__$1);
var G__339415 = null;
var G__339416 = 0;
var G__339417 = 0;
seq__339379 = G__339414;
chunk__339380 = G__339415;
count__339381 = G__339416;
i__339382 = G__339417;
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
{var vec__339427 = node_spec;var tag = cljs.core.nth.call(null,vec__339427,0,null);var vec__339428 = cljs.core.nthnext.call(null,vec__339427,1);var m = cljs.core.nth.call(null,vec__339428,0,null);var ms = cljs.core.nthnext.call(null,vec__339428,1);var more = vec__339428;var vec__339429 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__339429,0,null);var segments = cljs.core.nthnext.call(null,vec__339429,1);var id = cljs.core.some.call(null,((function (vec__339427,tag,vec__339428,m,ms,more,vec__339429,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__339427,tag,vec__339428,m,ms,more,vec__339429,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__339427,tag,vec__339428,m,ms,more,vec__339429,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__339427,tag,vec__339428,m,ms,more,vec__339429,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__339430_339436 = cljs.core.seq.call(null,attrs__$2);var chunk__339431_339437 = null;var count__339432_339438 = 0;var i__339433_339439 = 0;while(true){
if((i__339433_339439 < count__339432_339438))
{var vec__339434_339440 = cljs.core._nth.call(null,chunk__339431_339437,i__339433_339439);var key_339441 = cljs.core.nth.call(null,vec__339434_339440,0,null);var val_339442 = cljs.core.nth.call(null,vec__339434_339440,1,null);node.setAttribute(cljs.core.name.call(null,key_339441),val_339442);
{
var G__339443 = seq__339430_339436;
var G__339444 = chunk__339431_339437;
var G__339445 = count__339432_339438;
var G__339446 = (i__339433_339439 + 1);
seq__339430_339436 = G__339443;
chunk__339431_339437 = G__339444;
count__339432_339438 = G__339445;
i__339433_339439 = G__339446;
continue;
}
} else
{var temp__4092__auto___339447 = cljs.core.seq.call(null,seq__339430_339436);if(temp__4092__auto___339447)
{var seq__339430_339448__$1 = temp__4092__auto___339447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339430_339448__$1))
{var c__14547__auto___339449 = cljs.core.chunk_first.call(null,seq__339430_339448__$1);{
var G__339450 = cljs.core.chunk_rest.call(null,seq__339430_339448__$1);
var G__339451 = c__14547__auto___339449;
var G__339452 = cljs.core.count.call(null,c__14547__auto___339449);
var G__339453 = 0;
seq__339430_339436 = G__339450;
chunk__339431_339437 = G__339451;
count__339432_339438 = G__339452;
i__339433_339439 = G__339453;
continue;
}
} else
{var vec__339435_339454 = cljs.core.first.call(null,seq__339430_339448__$1);var key_339455 = cljs.core.nth.call(null,vec__339435_339454,0,null);var val_339456 = cljs.core.nth.call(null,vec__339435_339454,1,null);node.setAttribute(cljs.core.name.call(null,key_339455),val_339456);
{
var G__339457 = cljs.core.next.call(null,seq__339430_339448__$1);
var G__339458 = null;
var G__339459 = 0;
var G__339460 = 0;
seq__339430_339436 = G__339457;
chunk__339431_339437 = G__339458;
count__339432_339438 = G__339459;
i__339433_339439 = G__339460;
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
enfocus.core.read_checked_input = (function read_checked_input(el,col){if(cljs.core.truth_((function (){var and__13811__auto__ = el.checked;if(cljs.core.truth_(and__13811__auto__))
{return !(cljs.core.empty_QMARK_.call(null,el.name));
} else
{return and__13811__auto__;
}
})()))
{return enfocus.core.merge_form_val.call(null,col,cljs.core.keyword.call(null,el.name),el.value);
} else
{return col;
}
});
enfocus.core.read_select_input = (function read_select_input(el,col){if(!(cljs.core.empty_QMARK_.call(null,el.name)))
{var nm = cljs.core.keyword.call(null,el.name);var onodes = domina.nodes.call(null,el.options);var opts = cljs.core.filter.call(null,((function (nm,onodes){
return (function (p1__339461_SHARP_){return p1__339461_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__339462_SHARP_){return p1__339462_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__339464_SHARP_,p2__339463_SHARP_){var G__339467 = p2__339463_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__339467))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__339467))
{return enfocus.core.read_select_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__339467))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__339467))
{var G__339468 = p2__339463_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__339468))
{return enfocus.core.read_checked_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__339468))
{return enfocus.core.read_checked_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__339468))
{return enfocus.core.read_simple_input.call(null,p2__339463_SHARP_,p1__339464_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__339464_SHARP_;
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
{return p1__339464_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__339469_SHARP_){if((p1__339469_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__339469_SHARP_);
} else
{if((p1__339469_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__339469_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__339469_SHARP_))
{return create_sel_str.call(null,p1__339469_SHARP_);
} else
{if(typeof p1__339469_SHARP_ === 'string')
{return p1__339469_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
enfocus.core.nil_t = (function nil_t(func){var or__13823__auto__ = func;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return enfocus.core.remove_node;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.i_at = (function() { 
var i_at__delegate = function (id_mask,node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var and__13811__auto__ = !((node == null));if(and__13811__auto__)
{var G__339480 = node;if(G__339480)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__339480.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__339480.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__339480);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__339480);
}
} else
{return and__13811__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__339481 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__339481,0,null);var trans__$1 = cljs.core.nth.call(null,vec__339481,1,null);var seq__339482 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__339483 = null;var count__339484 = 0;var i__339485 = 0;while(true){
if((i__339485 < count__339484))
{var vec__339486 = cljs.core._nth.call(null,chunk__339483,i__339485);var sel = cljs.core.nth.call(null,vec__339486,0,null);var t = cljs.core.nth.call(null,vec__339486,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__339488 = seq__339482;
var G__339489 = chunk__339483;
var G__339490 = count__339484;
var G__339491 = (i__339485 + 1);
seq__339482 = G__339488;
chunk__339483 = G__339489;
count__339484 = G__339490;
i__339485 = G__339491;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339482);if(temp__4092__auto__)
{var seq__339482__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339482__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339482__$1);{
var G__339492 = cljs.core.chunk_rest.call(null,seq__339482__$1);
var G__339493 = c__14547__auto__;
var G__339494 = cljs.core.count.call(null,c__14547__auto__);
var G__339495 = 0;
seq__339482 = G__339492;
chunk__339483 = G__339493;
count__339484 = G__339494;
i__339485 = G__339495;
continue;
}
} else
{var vec__339487 = cljs.core.first.call(null,seq__339482__$1);var sel = cljs.core.nth.call(null,vec__339487,0,null);var t = cljs.core.nth.call(null,vec__339487,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__339496 = cljs.core.next.call(null,seq__339482__$1);
var G__339497 = null;
var G__339498 = 0;
var G__339499 = 0;
seq__339482 = G__339496;
chunk__339483 = G__339497;
count__339484 = G__339498;
i__339485 = G__339499;
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
i_at.cljs$lang$applyTo = (function (arglist__339500){
var id_mask = cljs.core.first(arglist__339500);
arglist__339500 = cljs.core.next(arglist__339500);
var node = cljs.core.first(arglist__339500);
var trans = cljs.core.rest(arglist__339500);
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
at.cljs$lang$applyTo = (function (arglist__339501){
var node = cljs.core.first(arglist__339501);
var trans = cljs.core.rest(arglist__339501);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__339506 = node;if(G__339506)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__339506.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__339506.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__339506);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__339506);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__339507 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__339507,0,null);var trans__$1 = cljs.core.nth.call(null,vec__339507,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__339508){var vec__339509 = p__339508;var ky = cljs.core.nth.call(null,vec__339509,0,null);var sel = cljs.core.nth.call(null,vec__339509,1,null);var ext = cljs.core.nth.call(null,vec__339509,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__339510){
var node = cljs.core.first(arglist__339510);
var trans = cljs.core.rest(arglist__339510);
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