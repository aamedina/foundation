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
enfocus.core.ISelector = (function (){var obj329822 = {};return obj329822;
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
enfocus.core.ITransform = (function (){var obj329824 = {};return obj329824;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__329825_SHARP_){if(typeof p1__329825_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__329825_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__329825_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__329832_329838 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__329833_329839 = null;var count__329834_329840 = 0;var i__329835_329841 = 0;while(true){
if((i__329835_329841 < count__329834_329840))
{var vec__329836_329842 = cljs.core._nth.call(null,chunk__329833_329839,i__329835_329841);var attr_329843 = cljs.core.nth.call(null,vec__329836_329842,0,null);var value_329844 = cljs.core.nth.call(null,vec__329836_329842,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_329843),value_329844);
{
var G__329845 = seq__329832_329838;
var G__329846 = chunk__329833_329839;
var G__329847 = count__329834_329840;
var G__329848 = (i__329835_329841 + 1);
seq__329832_329838 = G__329845;
chunk__329833_329839 = G__329846;
count__329834_329840 = G__329847;
i__329835_329841 = G__329848;
continue;
}
} else
{var temp__4092__auto___329849 = cljs.core.seq.call(null,seq__329832_329838);if(temp__4092__auto___329849)
{var seq__329832_329850__$1 = temp__4092__auto___329849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329832_329850__$1))
{var c__14547__auto___329851 = cljs.core.chunk_first.call(null,seq__329832_329850__$1);{
var G__329852 = cljs.core.chunk_rest.call(null,seq__329832_329850__$1);
var G__329853 = c__14547__auto___329851;
var G__329854 = cljs.core.count.call(null,c__14547__auto___329851);
var G__329855 = 0;
seq__329832_329838 = G__329852;
chunk__329833_329839 = G__329853;
count__329834_329840 = G__329854;
i__329835_329841 = G__329855;
continue;
}
} else
{var vec__329837_329856 = cljs.core.first.call(null,seq__329832_329850__$1);var attr_329857 = cljs.core.nth.call(null,vec__329837_329856,0,null);var value_329858 = cljs.core.nth.call(null,vec__329837_329856,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_329857),value_329858);
{
var G__329859 = cljs.core.next.call(null,seq__329832_329850__$1);
var G__329860 = null;
var G__329861 = 0;
var G__329862 = 0;
seq__329832_329838 = G__329859;
chunk__329833_329839 = G__329860;
count__329834_329840 = G__329861;
i__329835_329841 = G__329862;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__329867 = cljs.core.seq.call(null,values);var chunk__329868 = null;var count__329869 = 0;var i__329870 = 0;while(true){
if((i__329870 < count__329869))
{var attr = cljs.core._nth.call(null,chunk__329868,i__329870);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__329871 = seq__329867;
var G__329872 = chunk__329868;
var G__329873 = count__329869;
var G__329874 = (i__329870 + 1);
seq__329867 = G__329871;
chunk__329868 = G__329872;
count__329869 = G__329873;
i__329870 = G__329874;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__329867);if(temp__4092__auto__)
{var seq__329867__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329867__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__329867__$1);{
var G__329875 = cljs.core.chunk_rest.call(null,seq__329867__$1);
var G__329876 = c__14547__auto__;
var G__329877 = cljs.core.count.call(null,c__14547__auto__);
var G__329878 = 0;
seq__329867 = G__329875;
chunk__329868 = G__329876;
count__329869 = G__329877;
i__329870 = G__329878;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__329867__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__329879 = cljs.core.next.call(null,seq__329867__$1);
var G__329880 = null;
var G__329881 = 0;
var G__329882 = 0;
seq__329867 = G__329879;
chunk__329868 = G__329880;
count__329869 = G__329881;
i__329870 = G__329882;
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
{var seq__329889_329895 = cljs.core.seq.call(null,ats);var chunk__329890_329896 = null;var count__329891_329897 = 0;var i__329892_329898 = 0;while(true){
if((i__329892_329898 < count__329891_329897))
{var vec__329893_329899 = cljs.core._nth.call(null,chunk__329890_329896,i__329892_329898);var k_329900 = cljs.core.nth.call(null,vec__329893_329899,0,null);var v_329901 = cljs.core.nth.call(null,vec__329893_329899,1,null);add_map_attrs.call(null,elem,k_329900,v_329901);
{
var G__329902 = seq__329889_329895;
var G__329903 = chunk__329890_329896;
var G__329904 = count__329891_329897;
var G__329905 = (i__329892_329898 + 1);
seq__329889_329895 = G__329902;
chunk__329890_329896 = G__329903;
count__329891_329897 = G__329904;
i__329892_329898 = G__329905;
continue;
}
} else
{var temp__4092__auto___329906 = cljs.core.seq.call(null,seq__329889_329895);if(temp__4092__auto___329906)
{var seq__329889_329907__$1 = temp__4092__auto___329906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329889_329907__$1))
{var c__14547__auto___329908 = cljs.core.chunk_first.call(null,seq__329889_329907__$1);{
var G__329909 = cljs.core.chunk_rest.call(null,seq__329889_329907__$1);
var G__329910 = c__14547__auto___329908;
var G__329911 = cljs.core.count.call(null,c__14547__auto___329908);
var G__329912 = 0;
seq__329889_329895 = G__329909;
chunk__329890_329896 = G__329910;
count__329891_329897 = G__329911;
i__329892_329898 = G__329912;
continue;
}
} else
{var vec__329894_329913 = cljs.core.first.call(null,seq__329889_329907__$1);var k_329914 = cljs.core.nth.call(null,vec__329894_329913,0,null);var v_329915 = cljs.core.nth.call(null,vec__329894_329913,1,null);add_map_attrs.call(null,elem,k_329914,v_329915);
{
var G__329916 = cljs.core.next.call(null,seq__329889_329907__$1);
var G__329917 = null;
var G__329918 = 0;
var G__329919 = 0;
seq__329889_329895 = G__329916;
chunk__329890_329896 = G__329917;
count__329891_329897 = G__329918;
i__329892_329898 = G__329919;
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
var seq__329924_329928 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__329925_329929 = null;var count__329926_329930 = 0;var i__329927_329931 = 0;while(true){
if((i__329927_329931 < count__329926_329930))
{var node_329932 = cljs.core._nth.call(null,chunk__329925_329929,i__329927_329931);goog.dom.appendChild(div,node_329932);
{
var G__329933 = seq__329924_329928;
var G__329934 = chunk__329925_329929;
var G__329935 = count__329926_329930;
var G__329936 = (i__329927_329931 + 1);
seq__329924_329928 = G__329933;
chunk__329925_329929 = G__329934;
count__329926_329930 = G__329935;
i__329927_329931 = G__329936;
continue;
}
} else
{var temp__4092__auto___329937 = cljs.core.seq.call(null,seq__329924_329928);if(temp__4092__auto___329937)
{var seq__329924_329938__$1 = temp__4092__auto___329937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329924_329938__$1))
{var c__14547__auto___329939 = cljs.core.chunk_first.call(null,seq__329924_329938__$1);{
var G__329940 = cljs.core.chunk_rest.call(null,seq__329924_329938__$1);
var G__329941 = c__14547__auto___329939;
var G__329942 = cljs.core.count.call(null,c__14547__auto___329939);
var G__329943 = 0;
seq__329924_329928 = G__329940;
chunk__329925_329929 = G__329941;
count__329926_329930 = G__329942;
i__329927_329931 = G__329943;
continue;
}
} else
{var node_329944 = cljs.core.first.call(null,seq__329924_329938__$1);goog.dom.appendChild(div,node_329944);
{
var G__329945 = cljs.core.next.call(null,seq__329924_329938__$1);
var G__329946 = null;
var G__329947 = 0;
var G__329948 = 0;
seq__329924_329928 = G__329945;
chunk__329925_329929 = G__329946;
count__329926_329930 = G__329947;
i__329927_329931 = G__329948;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__329949_SHARP_){var id = p1__329949_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__329949_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__329951 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__329951,0,null);var txt = cljs.core.nth.call(null,vec__329951,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__329956_329960 = cljs.core.seq.call(null,dfa);var chunk__329957_329961 = null;var count__329958_329962 = 0;var i__329959_329963 = 0;while(true){
if((i__329959_329963 < count__329958_329962))
{var df_329964 = cljs.core._nth.call(null,chunk__329957_329961,i__329959_329963);goog.dom.append(frag,df_329964);
{
var G__329965 = seq__329956_329960;
var G__329966 = chunk__329957_329961;
var G__329967 = count__329958_329962;
var G__329968 = (i__329959_329963 + 1);
seq__329956_329960 = G__329965;
chunk__329957_329961 = G__329966;
count__329958_329962 = G__329967;
i__329959_329963 = G__329968;
continue;
}
} else
{var temp__4092__auto___329969 = cljs.core.seq.call(null,seq__329956_329960);if(temp__4092__auto___329969)
{var seq__329956_329970__$1 = temp__4092__auto___329969;if(cljs.core.chunked_seq_QMARK_.call(null,seq__329956_329970__$1))
{var c__14547__auto___329971 = cljs.core.chunk_first.call(null,seq__329956_329970__$1);{
var G__329972 = cljs.core.chunk_rest.call(null,seq__329956_329970__$1);
var G__329973 = c__14547__auto___329971;
var G__329974 = cljs.core.count.call(null,c__14547__auto___329971);
var G__329975 = 0;
seq__329956_329960 = G__329972;
chunk__329957_329961 = G__329973;
count__329958_329962 = G__329974;
i__329959_329963 = G__329975;
continue;
}
} else
{var df_329976 = cljs.core.first.call(null,seq__329956_329970__$1);goog.dom.append(frag,df_329976);
{
var G__329977 = cljs.core.next.call(null,seq__329956_329970__$1);
var G__329978 = null;
var G__329979 = 0;
var G__329980 = 0;
seq__329956_329960 = G__329977;
chunk__329957_329961 = G__329978;
count__329958_329962 = G__329979;
i__329959_329963 = G__329980;
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
{var vec__329983 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__329983,0,null);var tdom = cljs.core.nth.call(null,vec__329983,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__329983,sym,tdom,dom,tsnip){
return (function (p1__329981_SHARP_){return p1__329981_SHARP_.outerHTML;
});})(vec__329983,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t329987 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t329987 = (function (trans,func,extr_multi_node,meta329988){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta329988 = meta329988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t329987.cljs$lang$type = true;
enfocus.core.t329987.cljs$lang$ctorStr = "enfocus.core/t329987";
enfocus.core.t329987.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t329987");
});
enfocus.core.t329987.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t329987.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t329987.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t329987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_329989){var self__ = this;
var _329989__$1 = this;return self__.meta329988;
});
enfocus.core.t329987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_329989,meta329988__$1){var self__ = this;
var _329989__$1 = this;return (new enfocus.core.t329987(self__.trans,self__.func,self__.extr_multi_node,meta329988__$1));
});
enfocus.core.__GT_t329987 = (function __GT_t329987(trans__$1,func__$1,extr_multi_node__$1,meta329988){return (new enfocus.core.t329987(trans__$1,func__$1,extr_multi_node__$1,meta329988));
});
}
return (new enfocus.core.t329987(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t329997 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t329997 = (function (trans,func,multi_node_chain,meta329998){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta329998 = meta329998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t329997.cljs$lang$type = true;
enfocus.core.t329997.cljs$lang$ctorStr = "enfocus.core/t329997";
enfocus.core.t329997.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t329997");
});
enfocus.core.t329997.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t329997.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t329997.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t329997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_329999){var self__ = this;
var _329999__$1 = this;return self__.meta329998;
});
enfocus.core.t329997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_329999,meta329998__$1){var self__ = this;
var _329999__$1 = this;return (new enfocus.core.t329997(self__.trans,self__.func,self__.multi_node_chain,meta329998__$1));
});
enfocus.core.__GT_t329997 = (function __GT_t329997(trans__$1,func__$1,multi_node_chain__$1,meta329998){return (new enfocus.core.t329997(trans__$1,func__$1,multi_node_chain__$1,meta329998));
});
}
return (new enfocus.core.t329997(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__329990_SHARP_){return domina.nodes.call(null,p1__329990_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t330000 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t330000 = (function (trans,func,values,multi_node_chain,meta330001){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta330001 = meta330001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t330000.cljs$lang$type = true;
enfocus.core.t330000.cljs$lang$ctorStr = "enfocus.core/t330000";
enfocus.core.t330000.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t330000");
});
enfocus.core.t330000.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t330000.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t330000.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t330000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_330002){var self__ = this;
var _330002__$1 = this;return self__.meta330001;
});
enfocus.core.t330000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_330002,meta330001__$1){var self__ = this;
var _330002__$1 = this;return (new enfocus.core.t330000(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta330001__$1));
});
enfocus.core.__GT_t330000 = (function __GT_t330000(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta330001){return (new enfocus.core.t330000(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta330001));
});
}
return (new enfocus.core.t330000(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330003_SHARP_,p2__330004_SHARP_){domina.destroy_children_BANG_.call(null,p1__330003_SHARP_);
return domina.append_BANG_.call(null,p1__330003_SHARP_,p2__330004_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__330005){
var values = cljs.core.seq(arglist__330005);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__330006_SHARP_){return domina.set_html_BANG_.call(null,p1__330006_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__330007_SHARP_){var seq__330014 = cljs.core.seq.call(null,pairs);var chunk__330015 = null;var count__330016 = 0;var i__330017 = 0;while(true){
if((i__330017 < count__330016))
{var vec__330018 = cljs.core._nth.call(null,chunk__330015,i__330017);var name = cljs.core.nth.call(null,vec__330018,0,null);var value = cljs.core.nth.call(null,vec__330018,1,null);domina.set_attr_BANG_.call(null,p1__330007_SHARP_,name,value);
{
var G__330020 = seq__330014;
var G__330021 = chunk__330015;
var G__330022 = count__330016;
var G__330023 = (i__330017 + 1);
seq__330014 = G__330020;
chunk__330015 = G__330021;
count__330016 = G__330022;
i__330017 = G__330023;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330014);if(temp__4092__auto__)
{var seq__330014__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330014__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330014__$1);{
var G__330024 = cljs.core.chunk_rest.call(null,seq__330014__$1);
var G__330025 = c__14547__auto__;
var G__330026 = cljs.core.count.call(null,c__14547__auto__);
var G__330027 = 0;
seq__330014 = G__330024;
chunk__330015 = G__330025;
count__330016 = G__330026;
i__330017 = G__330027;
continue;
}
} else
{var vec__330019 = cljs.core.first.call(null,seq__330014__$1);var name = cljs.core.nth.call(null,vec__330019,0,null);var value = cljs.core.nth.call(null,vec__330019,1,null);domina.set_attr_BANG_.call(null,p1__330007_SHARP_,name,value);
{
var G__330028 = cljs.core.next.call(null,seq__330014__$1);
var G__330029 = null;
var G__330030 = 0;
var G__330031 = 0;
seq__330014 = G__330028;
chunk__330015 = G__330029;
count__330016 = G__330030;
i__330017 = G__330031;
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
set_attr.cljs$lang$applyTo = (function (arglist__330032){
var values = cljs.core.seq(arglist__330032);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__330033_SHARP_){var seq__330038 = cljs.core.seq.call(null,values);var chunk__330039 = null;var count__330040 = 0;var i__330041 = 0;while(true){
if((i__330041 < count__330040))
{var name = cljs.core._nth.call(null,chunk__330039,i__330041);domina.remove_attr_BANG_.call(null,p1__330033_SHARP_,name);
{
var G__330042 = seq__330038;
var G__330043 = chunk__330039;
var G__330044 = count__330040;
var G__330045 = (i__330041 + 1);
seq__330038 = G__330042;
chunk__330039 = G__330043;
count__330040 = G__330044;
i__330041 = G__330045;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330038);if(temp__4092__auto__)
{var seq__330038__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330038__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330038__$1);{
var G__330046 = cljs.core.chunk_rest.call(null,seq__330038__$1);
var G__330047 = c__14547__auto__;
var G__330048 = cljs.core.count.call(null,c__14547__auto__);
var G__330049 = 0;
seq__330038 = G__330046;
chunk__330039 = G__330047;
count__330040 = G__330048;
i__330041 = G__330049;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__330038__$1);domina.remove_attr_BANG_.call(null,p1__330033_SHARP_,name);
{
var G__330050 = cljs.core.next.call(null,seq__330038__$1);
var G__330051 = null;
var G__330052 = 0;
var G__330053 = 0;
seq__330038 = G__330050;
chunk__330039 = G__330051;
count__330040 = G__330052;
i__330041 = G__330053;
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
remove_attr.cljs$lang$applyTo = (function (arglist__330054){
var values = cljs.core.seq(arglist__330054);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__330057){var vec__330058 = p__330057;var n = cljs.core.nth.call(null,vec__330058,0,null);var v = cljs.core.nth.call(null,vec__330058,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__330059){
var forms = cljs.core.seq(arglist__330059);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__330060_SHARP_){var seq__330065 = cljs.core.seq.call(null,values);var chunk__330066 = null;var count__330067 = 0;var i__330068 = 0;while(true){
if((i__330068 < count__330067))
{var val = cljs.core._nth.call(null,chunk__330066,i__330068);domina.add_class_BANG_.call(null,p1__330060_SHARP_,val);
{
var G__330069 = seq__330065;
var G__330070 = chunk__330066;
var G__330071 = count__330067;
var G__330072 = (i__330068 + 1);
seq__330065 = G__330069;
chunk__330066 = G__330070;
count__330067 = G__330071;
i__330068 = G__330072;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330065);if(temp__4092__auto__)
{var seq__330065__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330065__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330065__$1);{
var G__330073 = cljs.core.chunk_rest.call(null,seq__330065__$1);
var G__330074 = c__14547__auto__;
var G__330075 = cljs.core.count.call(null,c__14547__auto__);
var G__330076 = 0;
seq__330065 = G__330073;
chunk__330066 = G__330074;
count__330067 = G__330075;
i__330068 = G__330076;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__330065__$1);domina.add_class_BANG_.call(null,p1__330060_SHARP_,val);
{
var G__330077 = cljs.core.next.call(null,seq__330065__$1);
var G__330078 = null;
var G__330079 = 0;
var G__330080 = 0;
seq__330065 = G__330077;
chunk__330066 = G__330078;
count__330067 = G__330079;
i__330068 = G__330080;
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
add_class.cljs$lang$applyTo = (function (arglist__330081){
var values = cljs.core.seq(arglist__330081);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__330082_SHARP_){var seq__330087 = cljs.core.seq.call(null,values);var chunk__330088 = null;var count__330089 = 0;var i__330090 = 0;while(true){
if((i__330090 < count__330089))
{var val = cljs.core._nth.call(null,chunk__330088,i__330090);domina.remove_class_BANG_.call(null,p1__330082_SHARP_,val);
{
var G__330091 = seq__330087;
var G__330092 = chunk__330088;
var G__330093 = count__330089;
var G__330094 = (i__330090 + 1);
seq__330087 = G__330091;
chunk__330088 = G__330092;
count__330089 = G__330093;
i__330090 = G__330094;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330087);if(temp__4092__auto__)
{var seq__330087__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330087__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330087__$1);{
var G__330095 = cljs.core.chunk_rest.call(null,seq__330087__$1);
var G__330096 = c__14547__auto__;
var G__330097 = cljs.core.count.call(null,c__14547__auto__);
var G__330098 = 0;
seq__330087 = G__330095;
chunk__330088 = G__330096;
count__330089 = G__330097;
i__330090 = G__330098;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__330087__$1);domina.remove_class_BANG_.call(null,p1__330082_SHARP_,val);
{
var G__330099 = cljs.core.next.call(null,seq__330087__$1);
var G__330100 = null;
var G__330101 = 0;
var G__330102 = 0;
seq__330087 = G__330099;
chunk__330088 = G__330100;
count__330089 = G__330101;
i__330090 = G__330102;
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
remove_class.cljs$lang$applyTo = (function (arglist__330103){
var values = cljs.core.seq(arglist__330103);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__330104_SHARP_){return domina.set_classes_BANG_.call(null,p1__330104_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__330105){
var values = cljs.core.seq(arglist__330105);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__330110 = cljs.core.seq.call(null,forms);var chunk__330111 = null;var count__330112 = 0;var i__330113 = 0;while(true){
if((i__330113 < count__330112))
{var fun = cljs.core._nth.call(null,chunk__330111,i__330113);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__330114 = seq__330110;
var G__330115 = chunk__330111;
var G__330116 = count__330112;
var G__330117 = (i__330113 + 1);
seq__330110 = G__330114;
chunk__330111 = G__330115;
count__330112 = G__330116;
i__330113 = G__330117;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330110);if(temp__4092__auto__)
{var seq__330110__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330110__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330110__$1);{
var G__330118 = cljs.core.chunk_rest.call(null,seq__330110__$1);
var G__330119 = c__14547__auto__;
var G__330120 = cljs.core.count.call(null,c__14547__auto__);
var G__330121 = 0;
seq__330110 = G__330118;
chunk__330111 = G__330119;
count__330112 = G__330120;
i__330113 = G__330121;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__330110__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__330122 = cljs.core.next.call(null,seq__330110__$1);
var G__330123 = null;
var G__330124 = 0;
var G__330125 = 0;
seq__330110 = G__330122;
chunk__330111 = G__330123;
count__330112 = G__330124;
i__330113 = G__330125;
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
do__GT_.cljs$lang$applyTo = (function (arglist__330126){
var forms = cljs.core.seq(arglist__330126);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330127_SHARP_,p2__330128_SHARP_){return domina.append_BANG_.call(null,p1__330127_SHARP_,p2__330128_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__330129){
var values = cljs.core.seq(arglist__330129);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330130_SHARP_,p2__330131_SHARP_){return domina.prepend_BANG_.call(null,p1__330130_SHARP_,p2__330131_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__330132){
var values = cljs.core.seq(arglist__330132);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330133_SHARP_,p2__330134_SHARP_){return domina.insert_before_BANG_.call(null,p1__330133_SHARP_,p2__330134_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__330135){
var values = cljs.core.seq(arglist__330135);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330136_SHARP_,p2__330137_SHARP_){return domina.insert_after_BANG_.call(null,p1__330136_SHARP_,p2__330137_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__330138){
var values = cljs.core.seq(arglist__330138);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__330139_SHARP_,p2__330140_SHARP_){return domina.swap_content_BANG_.call(null,p1__330139_SHARP_,p2__330140_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__330141){
var values = cljs.core.seq(arglist__330141);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__330142_SHARP_){return domina.detach_BANG_.call(null,p1__330142_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__330143_SHARP_){var seq__330150 = cljs.core.seq.call(null,pairs);var chunk__330151 = null;var count__330152 = 0;var i__330153 = 0;while(true){
if((i__330153 < count__330152))
{var vec__330154 = cljs.core._nth.call(null,chunk__330151,i__330153);var name = cljs.core.nth.call(null,vec__330154,0,null);var value = cljs.core.nth.call(null,vec__330154,1,null);domina.set_style_BANG_.call(null,p1__330143_SHARP_,name,value);
{
var G__330156 = seq__330150;
var G__330157 = chunk__330151;
var G__330158 = count__330152;
var G__330159 = (i__330153 + 1);
seq__330150 = G__330156;
chunk__330151 = G__330157;
count__330152 = G__330158;
i__330153 = G__330159;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330150);if(temp__4092__auto__)
{var seq__330150__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330150__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330150__$1);{
var G__330160 = cljs.core.chunk_rest.call(null,seq__330150__$1);
var G__330161 = c__14547__auto__;
var G__330162 = cljs.core.count.call(null,c__14547__auto__);
var G__330163 = 0;
seq__330150 = G__330160;
chunk__330151 = G__330161;
count__330152 = G__330162;
i__330153 = G__330163;
continue;
}
} else
{var vec__330155 = cljs.core.first.call(null,seq__330150__$1);var name = cljs.core.nth.call(null,vec__330155,0,null);var value = cljs.core.nth.call(null,vec__330155,1,null);domina.set_style_BANG_.call(null,p1__330143_SHARP_,name,value);
{
var G__330164 = cljs.core.next.call(null,seq__330150__$1);
var G__330165 = null;
var G__330166 = 0;
var G__330167 = 0;
seq__330150 = G__330164;
chunk__330151 = G__330165;
count__330152 = G__330166;
i__330153 = G__330167;
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
set_style.cljs$lang$applyTo = (function (arglist__330168){
var values = cljs.core.seq(arglist__330168);
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
remove_style.cljs$lang$applyTo = (function (arglist__330169){
var values = cljs.core.seq(arglist__330169);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__330170_SHARP_){return domina.set_data_BANG_.call(null,p1__330170_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__330171){
var ttime = cljs.core.first(arglist__330171);
var funcs = cljs.core.rest(arglist__330171);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__330173_SHARP_,p2__330172_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__330172_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__330198_330206 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__330199_330207 = null;var count__330200_330208 = 0;var i__330201_330209 = 0;while(true){
if((i__330201_330209 < count__330200_330208))
{var idx_330210 = cljs.core._nth.call(null,chunk__330199_330207,i__330201_330209);var attr_330211 = pnod.attributes.item(idx_330210);if(cljs.core.truth_(attr_330211.specified))
{attr_330211.value = rep_str.call(null,attr_330211.value);
} else
{}
{
var G__330212 = seq__330198_330206;
var G__330213 = chunk__330199_330207;
var G__330214 = count__330200_330208;
var G__330215 = (i__330201_330209 + 1);
seq__330198_330206 = G__330212;
chunk__330199_330207 = G__330213;
count__330200_330208 = G__330214;
i__330201_330209 = G__330215;
continue;
}
} else
{var temp__4092__auto___330216 = cljs.core.seq.call(null,seq__330198_330206);if(temp__4092__auto___330216)
{var seq__330198_330217__$1 = temp__4092__auto___330216;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330198_330217__$1))
{var c__14547__auto___330218 = cljs.core.chunk_first.call(null,seq__330198_330217__$1);{
var G__330219 = cljs.core.chunk_rest.call(null,seq__330198_330217__$1);
var G__330220 = c__14547__auto___330218;
var G__330221 = cljs.core.count.call(null,c__14547__auto___330218);
var G__330222 = 0;
seq__330198_330206 = G__330219;
chunk__330199_330207 = G__330220;
count__330200_330208 = G__330221;
i__330201_330209 = G__330222;
continue;
}
} else
{var idx_330223 = cljs.core.first.call(null,seq__330198_330217__$1);var attr_330224 = pnod.attributes.item(idx_330223);if(cljs.core.truth_(attr_330224.specified))
{attr_330224.value = rep_str.call(null,attr_330224.value);
} else
{}
{
var G__330225 = cljs.core.next.call(null,seq__330198_330217__$1);
var G__330226 = null;
var G__330227 = 0;
var G__330228 = 0;
seq__330198_330206 = G__330225;
chunk__330199_330207 = G__330226;
count__330200_330208 = G__330227;
i__330201_330209 = G__330228;
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
{var seq__330202 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__330203 = null;var count__330204 = 0;var i__330205 = 0;while(true){
if((i__330205 < count__330204))
{var cnode = cljs.core._nth.call(null,chunk__330203,i__330205);rep_node.call(null,cnode);
{
var G__330229 = seq__330202;
var G__330230 = chunk__330203;
var G__330231 = count__330204;
var G__330232 = (i__330205 + 1);
seq__330202 = G__330229;
chunk__330203 = G__330230;
count__330204 = G__330231;
i__330205 = G__330232;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330202);if(temp__4092__auto__)
{var seq__330202__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330202__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330202__$1);{
var G__330233 = cljs.core.chunk_rest.call(null,seq__330202__$1);
var G__330234 = c__14547__auto__;
var G__330235 = cljs.core.count.call(null,c__14547__auto__);
var G__330236 = 0;
seq__330202 = G__330233;
chunk__330203 = G__330234;
count__330204 = G__330235;
i__330205 = G__330236;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__330202__$1);rep_node.call(null,cnode);
{
var G__330237 = cljs.core.next.call(null,seq__330202__$1);
var G__330238 = null;
var G__330239 = 0;
var G__330240 = 0;
seq__330202 = G__330237;
chunk__330203 = G__330238;
count__330204 = G__330239;
i__330205 = G__330240;
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
{var vec__330250 = node_spec;var tag = cljs.core.nth.call(null,vec__330250,0,null);var vec__330251 = cljs.core.nthnext.call(null,vec__330250,1);var m = cljs.core.nth.call(null,vec__330251,0,null);var ms = cljs.core.nthnext.call(null,vec__330251,1);var more = vec__330251;var vec__330252 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__330252,0,null);var segments = cljs.core.nthnext.call(null,vec__330252,1);var id = cljs.core.some.call(null,((function (vec__330250,tag,vec__330251,m,ms,more,vec__330252,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__330250,tag,vec__330251,m,ms,more,vec__330252,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__330250,tag,vec__330251,m,ms,more,vec__330252,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__330250,tag,vec__330251,m,ms,more,vec__330252,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__330253_330259 = cljs.core.seq.call(null,attrs__$2);var chunk__330254_330260 = null;var count__330255_330261 = 0;var i__330256_330262 = 0;while(true){
if((i__330256_330262 < count__330255_330261))
{var vec__330257_330263 = cljs.core._nth.call(null,chunk__330254_330260,i__330256_330262);var key_330264 = cljs.core.nth.call(null,vec__330257_330263,0,null);var val_330265 = cljs.core.nth.call(null,vec__330257_330263,1,null);node.setAttribute(cljs.core.name.call(null,key_330264),val_330265);
{
var G__330266 = seq__330253_330259;
var G__330267 = chunk__330254_330260;
var G__330268 = count__330255_330261;
var G__330269 = (i__330256_330262 + 1);
seq__330253_330259 = G__330266;
chunk__330254_330260 = G__330267;
count__330255_330261 = G__330268;
i__330256_330262 = G__330269;
continue;
}
} else
{var temp__4092__auto___330270 = cljs.core.seq.call(null,seq__330253_330259);if(temp__4092__auto___330270)
{var seq__330253_330271__$1 = temp__4092__auto___330270;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330253_330271__$1))
{var c__14547__auto___330272 = cljs.core.chunk_first.call(null,seq__330253_330271__$1);{
var G__330273 = cljs.core.chunk_rest.call(null,seq__330253_330271__$1);
var G__330274 = c__14547__auto___330272;
var G__330275 = cljs.core.count.call(null,c__14547__auto___330272);
var G__330276 = 0;
seq__330253_330259 = G__330273;
chunk__330254_330260 = G__330274;
count__330255_330261 = G__330275;
i__330256_330262 = G__330276;
continue;
}
} else
{var vec__330258_330277 = cljs.core.first.call(null,seq__330253_330271__$1);var key_330278 = cljs.core.nth.call(null,vec__330258_330277,0,null);var val_330279 = cljs.core.nth.call(null,vec__330258_330277,1,null);node.setAttribute(cljs.core.name.call(null,key_330278),val_330279);
{
var G__330280 = cljs.core.next.call(null,seq__330253_330271__$1);
var G__330281 = null;
var G__330282 = 0;
var G__330283 = 0;
seq__330253_330259 = G__330280;
chunk__330254_330260 = G__330281;
count__330255_330261 = G__330282;
i__330256_330262 = G__330283;
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
return (function (p1__330284_SHARP_){return p1__330284_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__330285_SHARP_){return p1__330285_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__330287_SHARP_,p2__330286_SHARP_){var G__330290 = p2__330286_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__330290))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__330290))
{return enfocus.core.read_select_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__330290))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__330290))
{var G__330291 = p2__330286_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__330291))
{return enfocus.core.read_checked_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__330291))
{return enfocus.core.read_checked_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__330291))
{return enfocus.core.read_simple_input.call(null,p2__330286_SHARP_,p1__330287_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__330287_SHARP_;
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
{return p1__330287_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__330292_SHARP_){if((p1__330292_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__330292_SHARP_);
} else
{if((p1__330292_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__330292_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__330292_SHARP_))
{return create_sel_str.call(null,p1__330292_SHARP_);
} else
{if(typeof p1__330292_SHARP_ === 'string')
{return p1__330292_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__330303 = node;if(G__330303)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__330303.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__330303.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__330303);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__330303);
}
} else
{return and__13811__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__330304 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__330304,0,null);var trans__$1 = cljs.core.nth.call(null,vec__330304,1,null);var seq__330305 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__330306 = null;var count__330307 = 0;var i__330308 = 0;while(true){
if((i__330308 < count__330307))
{var vec__330309 = cljs.core._nth.call(null,chunk__330306,i__330308);var sel = cljs.core.nth.call(null,vec__330309,0,null);var t = cljs.core.nth.call(null,vec__330309,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__330311 = seq__330305;
var G__330312 = chunk__330306;
var G__330313 = count__330307;
var G__330314 = (i__330308 + 1);
seq__330305 = G__330311;
chunk__330306 = G__330312;
count__330307 = G__330313;
i__330308 = G__330314;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330305);if(temp__4092__auto__)
{var seq__330305__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330305__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330305__$1);{
var G__330315 = cljs.core.chunk_rest.call(null,seq__330305__$1);
var G__330316 = c__14547__auto__;
var G__330317 = cljs.core.count.call(null,c__14547__auto__);
var G__330318 = 0;
seq__330305 = G__330315;
chunk__330306 = G__330316;
count__330307 = G__330317;
i__330308 = G__330318;
continue;
}
} else
{var vec__330310 = cljs.core.first.call(null,seq__330305__$1);var sel = cljs.core.nth.call(null,vec__330310,0,null);var t = cljs.core.nth.call(null,vec__330310,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__330319 = cljs.core.next.call(null,seq__330305__$1);
var G__330320 = null;
var G__330321 = 0;
var G__330322 = 0;
seq__330305 = G__330319;
chunk__330306 = G__330320;
count__330307 = G__330321;
i__330308 = G__330322;
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
i_at.cljs$lang$applyTo = (function (arglist__330323){
var id_mask = cljs.core.first(arglist__330323);
arglist__330323 = cljs.core.next(arglist__330323);
var node = cljs.core.first(arglist__330323);
var trans = cljs.core.rest(arglist__330323);
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
at.cljs$lang$applyTo = (function (arglist__330324){
var node = cljs.core.first(arglist__330324);
var trans = cljs.core.rest(arglist__330324);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__330329 = node;if(G__330329)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__330329.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__330329.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__330329);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__330329);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__330330 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__330330,0,null);var trans__$1 = cljs.core.nth.call(null,vec__330330,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__330331){var vec__330332 = p__330331;var ky = cljs.core.nth.call(null,vec__330332,0,null);var sel = cljs.core.nth.call(null,vec__330332,1,null);var ext = cljs.core.nth.call(null,vec__330332,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__330333){
var node = cljs.core.first(arglist__330333);
var trans = cljs.core.rest(arglist__330333);
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