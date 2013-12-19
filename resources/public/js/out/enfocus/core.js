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
enfocus.core.ISelector = (function (){var obj182842 = {};return obj182842;
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
enfocus.core.ITransform = (function (){var obj182844 = {};return obj182844;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__182845_SHARP_){if(typeof p1__182845_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__182845_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__182845_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__182852_182858 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__182853_182859 = null;var count__182854_182860 = 0;var i__182855_182861 = 0;while(true){
if((i__182855_182861 < count__182854_182860))
{var vec__182856_182862 = cljs.core._nth.call(null,chunk__182853_182859,i__182855_182861);var attr_182863 = cljs.core.nth.call(null,vec__182856_182862,0,null);var value_182864 = cljs.core.nth.call(null,vec__182856_182862,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_182863),value_182864);
{
var G__182865 = seq__182852_182858;
var G__182866 = chunk__182853_182859;
var G__182867 = count__182854_182860;
var G__182868 = (i__182855_182861 + 1);
seq__182852_182858 = G__182865;
chunk__182853_182859 = G__182866;
count__182854_182860 = G__182867;
i__182855_182861 = G__182868;
continue;
}
} else
{var temp__4092__auto___182869 = cljs.core.seq.call(null,seq__182852_182858);if(temp__4092__auto___182869)
{var seq__182852_182870__$1 = temp__4092__auto___182869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182852_182870__$1))
{var c__8952__auto___182871 = cljs.core.chunk_first.call(null,seq__182852_182870__$1);{
var G__182872 = cljs.core.chunk_rest.call(null,seq__182852_182870__$1);
var G__182873 = c__8952__auto___182871;
var G__182874 = cljs.core.count.call(null,c__8952__auto___182871);
var G__182875 = 0;
seq__182852_182858 = G__182872;
chunk__182853_182859 = G__182873;
count__182854_182860 = G__182874;
i__182855_182861 = G__182875;
continue;
}
} else
{var vec__182857_182876 = cljs.core.first.call(null,seq__182852_182870__$1);var attr_182877 = cljs.core.nth.call(null,vec__182857_182876,0,null);var value_182878 = cljs.core.nth.call(null,vec__182857_182876,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_182877),value_182878);
{
var G__182879 = cljs.core.next.call(null,seq__182852_182870__$1);
var G__182880 = null;
var G__182881 = 0;
var G__182882 = 0;
seq__182852_182858 = G__182879;
chunk__182853_182859 = G__182880;
count__182854_182860 = G__182881;
i__182855_182861 = G__182882;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__182887 = cljs.core.seq.call(null,values);var chunk__182888 = null;var count__182889 = 0;var i__182890 = 0;while(true){
if((i__182890 < count__182889))
{var attr = cljs.core._nth.call(null,chunk__182888,i__182890);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__182891 = seq__182887;
var G__182892 = chunk__182888;
var G__182893 = count__182889;
var G__182894 = (i__182890 + 1);
seq__182887 = G__182891;
chunk__182888 = G__182892;
count__182889 = G__182893;
i__182890 = G__182894;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__182887);if(temp__4092__auto__)
{var seq__182887__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182887__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__182887__$1);{
var G__182895 = cljs.core.chunk_rest.call(null,seq__182887__$1);
var G__182896 = c__8952__auto__;
var G__182897 = cljs.core.count.call(null,c__8952__auto__);
var G__182898 = 0;
seq__182887 = G__182895;
chunk__182888 = G__182896;
count__182889 = G__182897;
i__182890 = G__182898;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__182887__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__182899 = cljs.core.next.call(null,seq__182887__$1);
var G__182900 = null;
var G__182901 = 0;
var G__182902 = 0;
seq__182887 = G__182899;
chunk__182888 = G__182900;
count__182889 = G__182901;
i__182890 = G__182902;
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
{var seq__182909_182915 = cljs.core.seq.call(null,ats);var chunk__182910_182916 = null;var count__182911_182917 = 0;var i__182912_182918 = 0;while(true){
if((i__182912_182918 < count__182911_182917))
{var vec__182913_182919 = cljs.core._nth.call(null,chunk__182910_182916,i__182912_182918);var k_182920 = cljs.core.nth.call(null,vec__182913_182919,0,null);var v_182921 = cljs.core.nth.call(null,vec__182913_182919,1,null);add_map_attrs.call(null,elem,k_182920,v_182921);
{
var G__182922 = seq__182909_182915;
var G__182923 = chunk__182910_182916;
var G__182924 = count__182911_182917;
var G__182925 = (i__182912_182918 + 1);
seq__182909_182915 = G__182922;
chunk__182910_182916 = G__182923;
count__182911_182917 = G__182924;
i__182912_182918 = G__182925;
continue;
}
} else
{var temp__4092__auto___182926 = cljs.core.seq.call(null,seq__182909_182915);if(temp__4092__auto___182926)
{var seq__182909_182927__$1 = temp__4092__auto___182926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182909_182927__$1))
{var c__8952__auto___182928 = cljs.core.chunk_first.call(null,seq__182909_182927__$1);{
var G__182929 = cljs.core.chunk_rest.call(null,seq__182909_182927__$1);
var G__182930 = c__8952__auto___182928;
var G__182931 = cljs.core.count.call(null,c__8952__auto___182928);
var G__182932 = 0;
seq__182909_182915 = G__182929;
chunk__182910_182916 = G__182930;
count__182911_182917 = G__182931;
i__182912_182918 = G__182932;
continue;
}
} else
{var vec__182914_182933 = cljs.core.first.call(null,seq__182909_182927__$1);var k_182934 = cljs.core.nth.call(null,vec__182914_182933,0,null);var v_182935 = cljs.core.nth.call(null,vec__182914_182933,1,null);add_map_attrs.call(null,elem,k_182934,v_182935);
{
var G__182936 = cljs.core.next.call(null,seq__182909_182927__$1);
var G__182937 = null;
var G__182938 = 0;
var G__182939 = 0;
seq__182909_182915 = G__182936;
chunk__182910_182916 = G__182937;
count__182911_182917 = G__182938;
i__182912_182918 = G__182939;
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
var seq__182944_182948 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__182945_182949 = null;var count__182946_182950 = 0;var i__182947_182951 = 0;while(true){
if((i__182947_182951 < count__182946_182950))
{var node_182952 = cljs.core._nth.call(null,chunk__182945_182949,i__182947_182951);goog.dom.appendChild(div,node_182952);
{
var G__182953 = seq__182944_182948;
var G__182954 = chunk__182945_182949;
var G__182955 = count__182946_182950;
var G__182956 = (i__182947_182951 + 1);
seq__182944_182948 = G__182953;
chunk__182945_182949 = G__182954;
count__182946_182950 = G__182955;
i__182947_182951 = G__182956;
continue;
}
} else
{var temp__4092__auto___182957 = cljs.core.seq.call(null,seq__182944_182948);if(temp__4092__auto___182957)
{var seq__182944_182958__$1 = temp__4092__auto___182957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182944_182958__$1))
{var c__8952__auto___182959 = cljs.core.chunk_first.call(null,seq__182944_182958__$1);{
var G__182960 = cljs.core.chunk_rest.call(null,seq__182944_182958__$1);
var G__182961 = c__8952__auto___182959;
var G__182962 = cljs.core.count.call(null,c__8952__auto___182959);
var G__182963 = 0;
seq__182944_182948 = G__182960;
chunk__182945_182949 = G__182961;
count__182946_182950 = G__182962;
i__182947_182951 = G__182963;
continue;
}
} else
{var node_182964 = cljs.core.first.call(null,seq__182944_182958__$1);goog.dom.appendChild(div,node_182964);
{
var G__182965 = cljs.core.next.call(null,seq__182944_182958__$1);
var G__182966 = null;
var G__182967 = 0;
var G__182968 = 0;
seq__182944_182948 = G__182965;
chunk__182945_182949 = G__182966;
count__182946_182950 = G__182967;
i__182947_182951 = G__182968;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__182969_SHARP_){var id = p1__182969_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__182969_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__182971 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__182971,0,null);var txt = cljs.core.nth.call(null,vec__182971,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__182976_182980 = cljs.core.seq.call(null,dfa);var chunk__182977_182981 = null;var count__182978_182982 = 0;var i__182979_182983 = 0;while(true){
if((i__182979_182983 < count__182978_182982))
{var df_182984 = cljs.core._nth.call(null,chunk__182977_182981,i__182979_182983);goog.dom.append(frag,df_182984);
{
var G__182985 = seq__182976_182980;
var G__182986 = chunk__182977_182981;
var G__182987 = count__182978_182982;
var G__182988 = (i__182979_182983 + 1);
seq__182976_182980 = G__182985;
chunk__182977_182981 = G__182986;
count__182978_182982 = G__182987;
i__182979_182983 = G__182988;
continue;
}
} else
{var temp__4092__auto___182989 = cljs.core.seq.call(null,seq__182976_182980);if(temp__4092__auto___182989)
{var seq__182976_182990__$1 = temp__4092__auto___182989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__182976_182990__$1))
{var c__8952__auto___182991 = cljs.core.chunk_first.call(null,seq__182976_182990__$1);{
var G__182992 = cljs.core.chunk_rest.call(null,seq__182976_182990__$1);
var G__182993 = c__8952__auto___182991;
var G__182994 = cljs.core.count.call(null,c__8952__auto___182991);
var G__182995 = 0;
seq__182976_182980 = G__182992;
chunk__182977_182981 = G__182993;
count__182978_182982 = G__182994;
i__182979_182983 = G__182995;
continue;
}
} else
{var df_182996 = cljs.core.first.call(null,seq__182976_182990__$1);goog.dom.append(frag,df_182996);
{
var G__182997 = cljs.core.next.call(null,seq__182976_182990__$1);
var G__182998 = null;
var G__182999 = 0;
var G__183000 = 0;
seq__182976_182980 = G__182997;
chunk__182977_182981 = G__182998;
count__182978_182982 = G__182999;
i__182979_182983 = G__183000;
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
{var vec__183003 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__183003,0,null);var tdom = cljs.core.nth.call(null,vec__183003,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__183003,sym,tdom,dom,tsnip){
return (function (p1__183001_SHARP_){return p1__183001_SHARP_.outerHTML;
});})(vec__183003,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t183007 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t183007 = (function (trans,func,extr_multi_node,meta183008){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta183008 = meta183008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t183007.cljs$lang$type = true;
enfocus.core.t183007.cljs$lang$ctorStr = "enfocus.core/t183007";
enfocus.core.t183007.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t183007");
});
enfocus.core.t183007.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t183007.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t183007.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t183007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183009){var self__ = this;
var _183009__$1 = this;return self__.meta183008;
});
enfocus.core.t183007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183009,meta183008__$1){var self__ = this;
var _183009__$1 = this;return (new enfocus.core.t183007(self__.trans,self__.func,self__.extr_multi_node,meta183008__$1));
});
enfocus.core.__GT_t183007 = (function __GT_t183007(trans__$1,func__$1,extr_multi_node__$1,meta183008){return (new enfocus.core.t183007(trans__$1,func__$1,extr_multi_node__$1,meta183008));
});
}
return (new enfocus.core.t183007(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t183017 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t183017 = (function (trans,func,multi_node_chain,meta183018){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta183018 = meta183018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t183017.cljs$lang$type = true;
enfocus.core.t183017.cljs$lang$ctorStr = "enfocus.core/t183017";
enfocus.core.t183017.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t183017");
});
enfocus.core.t183017.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t183017.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t183017.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t183017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183019){var self__ = this;
var _183019__$1 = this;return self__.meta183018;
});
enfocus.core.t183017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183019,meta183018__$1){var self__ = this;
var _183019__$1 = this;return (new enfocus.core.t183017(self__.trans,self__.func,self__.multi_node_chain,meta183018__$1));
});
enfocus.core.__GT_t183017 = (function __GT_t183017(trans__$1,func__$1,multi_node_chain__$1,meta183018){return (new enfocus.core.t183017(trans__$1,func__$1,multi_node_chain__$1,meta183018));
});
}
return (new enfocus.core.t183017(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__183010_SHARP_){return domina.nodes.call(null,p1__183010_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t183020 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t183020 = (function (trans,func,values,multi_node_chain,meta183021){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta183021 = meta183021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t183020.cljs$lang$type = true;
enfocus.core.t183020.cljs$lang$ctorStr = "enfocus.core/t183020";
enfocus.core.t183020.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"enfocus.core/t183020");
});
enfocus.core.t183020.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t183020.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t183020.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t183020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_183022){var self__ = this;
var _183022__$1 = this;return self__.meta183021;
});
enfocus.core.t183020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_183022,meta183021__$1){var self__ = this;
var _183022__$1 = this;return (new enfocus.core.t183020(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta183021__$1));
});
enfocus.core.__GT_t183020 = (function __GT_t183020(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta183021){return (new enfocus.core.t183020(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta183021));
});
}
return (new enfocus.core.t183020(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183023_SHARP_,p2__183024_SHARP_){domina.destroy_children_BANG_.call(null,p1__183023_SHARP_);
return domina.append_BANG_.call(null,p1__183023_SHARP_,p2__183024_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__183025){
var values = cljs.core.seq(arglist__183025);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__183026_SHARP_){return domina.set_html_BANG_.call(null,p1__183026_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__183027_SHARP_){var seq__183034 = cljs.core.seq.call(null,pairs);var chunk__183035 = null;var count__183036 = 0;var i__183037 = 0;while(true){
if((i__183037 < count__183036))
{var vec__183038 = cljs.core._nth.call(null,chunk__183035,i__183037);var name = cljs.core.nth.call(null,vec__183038,0,null);var value = cljs.core.nth.call(null,vec__183038,1,null);domina.set_attr_BANG_.call(null,p1__183027_SHARP_,name,value);
{
var G__183040 = seq__183034;
var G__183041 = chunk__183035;
var G__183042 = count__183036;
var G__183043 = (i__183037 + 1);
seq__183034 = G__183040;
chunk__183035 = G__183041;
count__183036 = G__183042;
i__183037 = G__183043;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183034);if(temp__4092__auto__)
{var seq__183034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183034__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183034__$1);{
var G__183044 = cljs.core.chunk_rest.call(null,seq__183034__$1);
var G__183045 = c__8952__auto__;
var G__183046 = cljs.core.count.call(null,c__8952__auto__);
var G__183047 = 0;
seq__183034 = G__183044;
chunk__183035 = G__183045;
count__183036 = G__183046;
i__183037 = G__183047;
continue;
}
} else
{var vec__183039 = cljs.core.first.call(null,seq__183034__$1);var name = cljs.core.nth.call(null,vec__183039,0,null);var value = cljs.core.nth.call(null,vec__183039,1,null);domina.set_attr_BANG_.call(null,p1__183027_SHARP_,name,value);
{
var G__183048 = cljs.core.next.call(null,seq__183034__$1);
var G__183049 = null;
var G__183050 = 0;
var G__183051 = 0;
seq__183034 = G__183048;
chunk__183035 = G__183049;
count__183036 = G__183050;
i__183037 = G__183051;
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
set_attr.cljs$lang$applyTo = (function (arglist__183052){
var values = cljs.core.seq(arglist__183052);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__183053_SHARP_){var seq__183058 = cljs.core.seq.call(null,values);var chunk__183059 = null;var count__183060 = 0;var i__183061 = 0;while(true){
if((i__183061 < count__183060))
{var name = cljs.core._nth.call(null,chunk__183059,i__183061);domina.remove_attr_BANG_.call(null,p1__183053_SHARP_,name);
{
var G__183062 = seq__183058;
var G__183063 = chunk__183059;
var G__183064 = count__183060;
var G__183065 = (i__183061 + 1);
seq__183058 = G__183062;
chunk__183059 = G__183063;
count__183060 = G__183064;
i__183061 = G__183065;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183058);if(temp__4092__auto__)
{var seq__183058__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183058__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183058__$1);{
var G__183066 = cljs.core.chunk_rest.call(null,seq__183058__$1);
var G__183067 = c__8952__auto__;
var G__183068 = cljs.core.count.call(null,c__8952__auto__);
var G__183069 = 0;
seq__183058 = G__183066;
chunk__183059 = G__183067;
count__183060 = G__183068;
i__183061 = G__183069;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__183058__$1);domina.remove_attr_BANG_.call(null,p1__183053_SHARP_,name);
{
var G__183070 = cljs.core.next.call(null,seq__183058__$1);
var G__183071 = null;
var G__183072 = 0;
var G__183073 = 0;
seq__183058 = G__183070;
chunk__183059 = G__183071;
count__183060 = G__183072;
i__183061 = G__183073;
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
remove_attr.cljs$lang$applyTo = (function (arglist__183074){
var values = cljs.core.seq(arglist__183074);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__183077){var vec__183078 = p__183077;var n = cljs.core.nth.call(null,vec__183078,0,null);var v = cljs.core.nth.call(null,vec__183078,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__183079){
var forms = cljs.core.seq(arglist__183079);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__183080_SHARP_){var seq__183085 = cljs.core.seq.call(null,values);var chunk__183086 = null;var count__183087 = 0;var i__183088 = 0;while(true){
if((i__183088 < count__183087))
{var val = cljs.core._nth.call(null,chunk__183086,i__183088);domina.add_class_BANG_.call(null,p1__183080_SHARP_,val);
{
var G__183089 = seq__183085;
var G__183090 = chunk__183086;
var G__183091 = count__183087;
var G__183092 = (i__183088 + 1);
seq__183085 = G__183089;
chunk__183086 = G__183090;
count__183087 = G__183091;
i__183088 = G__183092;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183085);if(temp__4092__auto__)
{var seq__183085__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183085__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183085__$1);{
var G__183093 = cljs.core.chunk_rest.call(null,seq__183085__$1);
var G__183094 = c__8952__auto__;
var G__183095 = cljs.core.count.call(null,c__8952__auto__);
var G__183096 = 0;
seq__183085 = G__183093;
chunk__183086 = G__183094;
count__183087 = G__183095;
i__183088 = G__183096;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__183085__$1);domina.add_class_BANG_.call(null,p1__183080_SHARP_,val);
{
var G__183097 = cljs.core.next.call(null,seq__183085__$1);
var G__183098 = null;
var G__183099 = 0;
var G__183100 = 0;
seq__183085 = G__183097;
chunk__183086 = G__183098;
count__183087 = G__183099;
i__183088 = G__183100;
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
add_class.cljs$lang$applyTo = (function (arglist__183101){
var values = cljs.core.seq(arglist__183101);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__183102_SHARP_){var seq__183107 = cljs.core.seq.call(null,values);var chunk__183108 = null;var count__183109 = 0;var i__183110 = 0;while(true){
if((i__183110 < count__183109))
{var val = cljs.core._nth.call(null,chunk__183108,i__183110);domina.remove_class_BANG_.call(null,p1__183102_SHARP_,val);
{
var G__183111 = seq__183107;
var G__183112 = chunk__183108;
var G__183113 = count__183109;
var G__183114 = (i__183110 + 1);
seq__183107 = G__183111;
chunk__183108 = G__183112;
count__183109 = G__183113;
i__183110 = G__183114;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183107);if(temp__4092__auto__)
{var seq__183107__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183107__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183107__$1);{
var G__183115 = cljs.core.chunk_rest.call(null,seq__183107__$1);
var G__183116 = c__8952__auto__;
var G__183117 = cljs.core.count.call(null,c__8952__auto__);
var G__183118 = 0;
seq__183107 = G__183115;
chunk__183108 = G__183116;
count__183109 = G__183117;
i__183110 = G__183118;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__183107__$1);domina.remove_class_BANG_.call(null,p1__183102_SHARP_,val);
{
var G__183119 = cljs.core.next.call(null,seq__183107__$1);
var G__183120 = null;
var G__183121 = 0;
var G__183122 = 0;
seq__183107 = G__183119;
chunk__183108 = G__183120;
count__183109 = G__183121;
i__183110 = G__183122;
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
remove_class.cljs$lang$applyTo = (function (arglist__183123){
var values = cljs.core.seq(arglist__183123);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__183124_SHARP_){return domina.set_classes_BANG_.call(null,p1__183124_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__183125){
var values = cljs.core.seq(arglist__183125);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__183130 = cljs.core.seq.call(null,forms);var chunk__183131 = null;var count__183132 = 0;var i__183133 = 0;while(true){
if((i__183133 < count__183132))
{var fun = cljs.core._nth.call(null,chunk__183131,i__183133);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__183134 = seq__183130;
var G__183135 = chunk__183131;
var G__183136 = count__183132;
var G__183137 = (i__183133 + 1);
seq__183130 = G__183134;
chunk__183131 = G__183135;
count__183132 = G__183136;
i__183133 = G__183137;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183130);if(temp__4092__auto__)
{var seq__183130__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183130__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183130__$1);{
var G__183138 = cljs.core.chunk_rest.call(null,seq__183130__$1);
var G__183139 = c__8952__auto__;
var G__183140 = cljs.core.count.call(null,c__8952__auto__);
var G__183141 = 0;
seq__183130 = G__183138;
chunk__183131 = G__183139;
count__183132 = G__183140;
i__183133 = G__183141;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__183130__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__183142 = cljs.core.next.call(null,seq__183130__$1);
var G__183143 = null;
var G__183144 = 0;
var G__183145 = 0;
seq__183130 = G__183142;
chunk__183131 = G__183143;
count__183132 = G__183144;
i__183133 = G__183145;
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
do__GT_.cljs$lang$applyTo = (function (arglist__183146){
var forms = cljs.core.seq(arglist__183146);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183147_SHARP_,p2__183148_SHARP_){return domina.append_BANG_.call(null,p1__183147_SHARP_,p2__183148_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__183149){
var values = cljs.core.seq(arglist__183149);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183150_SHARP_,p2__183151_SHARP_){return domina.prepend_BANG_.call(null,p1__183150_SHARP_,p2__183151_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__183152){
var values = cljs.core.seq(arglist__183152);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183153_SHARP_,p2__183154_SHARP_){return domina.insert_before_BANG_.call(null,p1__183153_SHARP_,p2__183154_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__183155){
var values = cljs.core.seq(arglist__183155);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183156_SHARP_,p2__183157_SHARP_){return domina.insert_after_BANG_.call(null,p1__183156_SHARP_,p2__183157_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__183158){
var values = cljs.core.seq(arglist__183158);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__183159_SHARP_,p2__183160_SHARP_){return domina.swap_content_BANG_.call(null,p1__183159_SHARP_,p2__183160_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__183161){
var values = cljs.core.seq(arglist__183161);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__183162_SHARP_){return domina.detach_BANG_.call(null,p1__183162_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__183163_SHARP_){var seq__183170 = cljs.core.seq.call(null,pairs);var chunk__183171 = null;var count__183172 = 0;var i__183173 = 0;while(true){
if((i__183173 < count__183172))
{var vec__183174 = cljs.core._nth.call(null,chunk__183171,i__183173);var name = cljs.core.nth.call(null,vec__183174,0,null);var value = cljs.core.nth.call(null,vec__183174,1,null);domina.set_style_BANG_.call(null,p1__183163_SHARP_,name,value);
{
var G__183176 = seq__183170;
var G__183177 = chunk__183171;
var G__183178 = count__183172;
var G__183179 = (i__183173 + 1);
seq__183170 = G__183176;
chunk__183171 = G__183177;
count__183172 = G__183178;
i__183173 = G__183179;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183170);if(temp__4092__auto__)
{var seq__183170__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183170__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183170__$1);{
var G__183180 = cljs.core.chunk_rest.call(null,seq__183170__$1);
var G__183181 = c__8952__auto__;
var G__183182 = cljs.core.count.call(null,c__8952__auto__);
var G__183183 = 0;
seq__183170 = G__183180;
chunk__183171 = G__183181;
count__183172 = G__183182;
i__183173 = G__183183;
continue;
}
} else
{var vec__183175 = cljs.core.first.call(null,seq__183170__$1);var name = cljs.core.nth.call(null,vec__183175,0,null);var value = cljs.core.nth.call(null,vec__183175,1,null);domina.set_style_BANG_.call(null,p1__183163_SHARP_,name,value);
{
var G__183184 = cljs.core.next.call(null,seq__183170__$1);
var G__183185 = null;
var G__183186 = 0;
var G__183187 = 0;
seq__183170 = G__183184;
chunk__183171 = G__183185;
count__183172 = G__183186;
i__183173 = G__183187;
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
set_style.cljs$lang$applyTo = (function (arglist__183188){
var values = cljs.core.seq(arglist__183188);
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
remove_style.cljs$lang$applyTo = (function (arglist__183189){
var values = cljs.core.seq(arglist__183189);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__183190_SHARP_){return domina.set_data_BANG_.call(null,p1__183190_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__183191){
var ttime = cljs.core.first(arglist__183191);
var funcs = cljs.core.rest(arglist__183191);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__183193_SHARP_,p2__183192_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__183192_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__183218_183226 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__183219_183227 = null;var count__183220_183228 = 0;var i__183221_183229 = 0;while(true){
if((i__183221_183229 < count__183220_183228))
{var idx_183230 = cljs.core._nth.call(null,chunk__183219_183227,i__183221_183229);var attr_183231 = pnod.attributes.item(idx_183230);if(cljs.core.truth_(attr_183231.specified))
{attr_183231.value = rep_str.call(null,attr_183231.value);
} else
{}
{
var G__183232 = seq__183218_183226;
var G__183233 = chunk__183219_183227;
var G__183234 = count__183220_183228;
var G__183235 = (i__183221_183229 + 1);
seq__183218_183226 = G__183232;
chunk__183219_183227 = G__183233;
count__183220_183228 = G__183234;
i__183221_183229 = G__183235;
continue;
}
} else
{var temp__4092__auto___183236 = cljs.core.seq.call(null,seq__183218_183226);if(temp__4092__auto___183236)
{var seq__183218_183237__$1 = temp__4092__auto___183236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183218_183237__$1))
{var c__8952__auto___183238 = cljs.core.chunk_first.call(null,seq__183218_183237__$1);{
var G__183239 = cljs.core.chunk_rest.call(null,seq__183218_183237__$1);
var G__183240 = c__8952__auto___183238;
var G__183241 = cljs.core.count.call(null,c__8952__auto___183238);
var G__183242 = 0;
seq__183218_183226 = G__183239;
chunk__183219_183227 = G__183240;
count__183220_183228 = G__183241;
i__183221_183229 = G__183242;
continue;
}
} else
{var idx_183243 = cljs.core.first.call(null,seq__183218_183237__$1);var attr_183244 = pnod.attributes.item(idx_183243);if(cljs.core.truth_(attr_183244.specified))
{attr_183244.value = rep_str.call(null,attr_183244.value);
} else
{}
{
var G__183245 = cljs.core.next.call(null,seq__183218_183237__$1);
var G__183246 = null;
var G__183247 = 0;
var G__183248 = 0;
seq__183218_183226 = G__183245;
chunk__183219_183227 = G__183246;
count__183220_183228 = G__183247;
i__183221_183229 = G__183248;
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
{var seq__183222 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__183223 = null;var count__183224 = 0;var i__183225 = 0;while(true){
if((i__183225 < count__183224))
{var cnode = cljs.core._nth.call(null,chunk__183223,i__183225);rep_node.call(null,cnode);
{
var G__183249 = seq__183222;
var G__183250 = chunk__183223;
var G__183251 = count__183224;
var G__183252 = (i__183225 + 1);
seq__183222 = G__183249;
chunk__183223 = G__183250;
count__183224 = G__183251;
i__183225 = G__183252;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183222);if(temp__4092__auto__)
{var seq__183222__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183222__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183222__$1);{
var G__183253 = cljs.core.chunk_rest.call(null,seq__183222__$1);
var G__183254 = c__8952__auto__;
var G__183255 = cljs.core.count.call(null,c__8952__auto__);
var G__183256 = 0;
seq__183222 = G__183253;
chunk__183223 = G__183254;
count__183224 = G__183255;
i__183225 = G__183256;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__183222__$1);rep_node.call(null,cnode);
{
var G__183257 = cljs.core.next.call(null,seq__183222__$1);
var G__183258 = null;
var G__183259 = 0;
var G__183260 = 0;
seq__183222 = G__183257;
chunk__183223 = G__183258;
count__183224 = G__183259;
i__183225 = G__183260;
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
{var vec__183270 = node_spec;var tag = cljs.core.nth.call(null,vec__183270,0,null);var vec__183271 = cljs.core.nthnext.call(null,vec__183270,1);var m = cljs.core.nth.call(null,vec__183271,0,null);var ms = cljs.core.nthnext.call(null,vec__183271,1);var more = vec__183271;var vec__183272 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__183272,0,null);var segments = cljs.core.nthnext.call(null,vec__183272,1);var id = cljs.core.some.call(null,((function (vec__183270,tag,vec__183271,m,ms,more,vec__183272,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__183270,tag,vec__183271,m,ms,more,vec__183272,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__183270,tag,vec__183271,m,ms,more,vec__183272,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__183270,tag,vec__183271,m,ms,more,vec__183272,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__183273_183279 = cljs.core.seq.call(null,attrs__$2);var chunk__183274_183280 = null;var count__183275_183281 = 0;var i__183276_183282 = 0;while(true){
if((i__183276_183282 < count__183275_183281))
{var vec__183277_183283 = cljs.core._nth.call(null,chunk__183274_183280,i__183276_183282);var key_183284 = cljs.core.nth.call(null,vec__183277_183283,0,null);var val_183285 = cljs.core.nth.call(null,vec__183277_183283,1,null);node.setAttribute(cljs.core.name.call(null,key_183284),val_183285);
{
var G__183286 = seq__183273_183279;
var G__183287 = chunk__183274_183280;
var G__183288 = count__183275_183281;
var G__183289 = (i__183276_183282 + 1);
seq__183273_183279 = G__183286;
chunk__183274_183280 = G__183287;
count__183275_183281 = G__183288;
i__183276_183282 = G__183289;
continue;
}
} else
{var temp__4092__auto___183290 = cljs.core.seq.call(null,seq__183273_183279);if(temp__4092__auto___183290)
{var seq__183273_183291__$1 = temp__4092__auto___183290;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183273_183291__$1))
{var c__8952__auto___183292 = cljs.core.chunk_first.call(null,seq__183273_183291__$1);{
var G__183293 = cljs.core.chunk_rest.call(null,seq__183273_183291__$1);
var G__183294 = c__8952__auto___183292;
var G__183295 = cljs.core.count.call(null,c__8952__auto___183292);
var G__183296 = 0;
seq__183273_183279 = G__183293;
chunk__183274_183280 = G__183294;
count__183275_183281 = G__183295;
i__183276_183282 = G__183296;
continue;
}
} else
{var vec__183278_183297 = cljs.core.first.call(null,seq__183273_183291__$1);var key_183298 = cljs.core.nth.call(null,vec__183278_183297,0,null);var val_183299 = cljs.core.nth.call(null,vec__183278_183297,1,null);node.setAttribute(cljs.core.name.call(null,key_183298),val_183299);
{
var G__183300 = cljs.core.next.call(null,seq__183273_183291__$1);
var G__183301 = null;
var G__183302 = 0;
var G__183303 = 0;
seq__183273_183279 = G__183300;
chunk__183274_183280 = G__183301;
count__183275_183281 = G__183302;
i__183276_183282 = G__183303;
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
return (function (p1__183304_SHARP_){return p1__183304_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__183305_SHARP_){return p1__183305_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__183307_SHARP_,p2__183306_SHARP_){var G__183310 = p2__183306_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__183310))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__183310))
{return enfocus.core.read_select_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__183310))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__183310))
{var G__183311 = p2__183306_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__183311))
{return enfocus.core.read_checked_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__183311))
{return enfocus.core.read_checked_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__183311))
{return enfocus.core.read_simple_input.call(null,p2__183306_SHARP_,p1__183307_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__183307_SHARP_;
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
{return p1__183307_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__183312_SHARP_){if((p1__183312_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__183312_SHARP_);
} else
{if((p1__183312_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__183312_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__183312_SHARP_))
{return create_sel_str.call(null,p1__183312_SHARP_);
} else
{if(typeof p1__183312_SHARP_ === 'string')
{return p1__183312_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__183323 = node;if(G__183323)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__183323.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__183323.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__183323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__183323);
}
} else
{return and__8211__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__183324 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__183324,0,null);var trans__$1 = cljs.core.nth.call(null,vec__183324,1,null);var seq__183325 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__183326 = null;var count__183327 = 0;var i__183328 = 0;while(true){
if((i__183328 < count__183327))
{var vec__183329 = cljs.core._nth.call(null,chunk__183326,i__183328);var sel = cljs.core.nth.call(null,vec__183329,0,null);var t = cljs.core.nth.call(null,vec__183329,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__183331 = seq__183325;
var G__183332 = chunk__183326;
var G__183333 = count__183327;
var G__183334 = (i__183328 + 1);
seq__183325 = G__183331;
chunk__183326 = G__183332;
count__183327 = G__183333;
i__183328 = G__183334;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183325);if(temp__4092__auto__)
{var seq__183325__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183325__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183325__$1);{
var G__183335 = cljs.core.chunk_rest.call(null,seq__183325__$1);
var G__183336 = c__8952__auto__;
var G__183337 = cljs.core.count.call(null,c__8952__auto__);
var G__183338 = 0;
seq__183325 = G__183335;
chunk__183326 = G__183336;
count__183327 = G__183337;
i__183328 = G__183338;
continue;
}
} else
{var vec__183330 = cljs.core.first.call(null,seq__183325__$1);var sel = cljs.core.nth.call(null,vec__183330,0,null);var t = cljs.core.nth.call(null,vec__183330,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__183339 = cljs.core.next.call(null,seq__183325__$1);
var G__183340 = null;
var G__183341 = 0;
var G__183342 = 0;
seq__183325 = G__183339;
chunk__183326 = G__183340;
count__183327 = G__183341;
i__183328 = G__183342;
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
i_at.cljs$lang$applyTo = (function (arglist__183343){
var id_mask = cljs.core.first(arglist__183343);
arglist__183343 = cljs.core.next(arglist__183343);
var node = cljs.core.first(arglist__183343);
var trans = cljs.core.rest(arglist__183343);
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
at.cljs$lang$applyTo = (function (arglist__183344){
var node = cljs.core.first(arglist__183344);
var trans = cljs.core.rest(arglist__183344);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__183349 = node;if(G__183349)
{var bit__8854__auto__ = null;if(cljs.core.truth_((function (){var or__8223__auto__ = bit__8854__auto__;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return G__183349.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__183349.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__183349);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__183349);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__183350 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__183350,0,null);var trans__$1 = cljs.core.nth.call(null,vec__183350,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__183351){var vec__183352 = p__183351;var ky = cljs.core.nth.call(null,vec__183352,0,null);var sel = cljs.core.nth.call(null,vec__183352,1,null);var ext = cljs.core.nth.call(null,vec__183352,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__183353){
var node = cljs.core.first(arglist__183353);
var trans = cljs.core.rest(arglist__183353);
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