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
enfocus.core.ISelector = (function (){var obj25651 = {};return obj25651;
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
enfocus.core.ITransform = (function (){var obj25653 = {};return obj25653;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__25654_SHARP_){if(typeof p1__25654_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__25654_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__25654_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__25661_25667 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__25662_25668 = null;var count__25663_25669 = 0;var i__25664_25670 = 0;while(true){
if((i__25664_25670 < count__25663_25669))
{var vec__25665_25671 = cljs.core._nth.call(null,chunk__25662_25668,i__25664_25670);var attr_25672 = cljs.core.nth.call(null,vec__25665_25671,0,null);var value_25673 = cljs.core.nth.call(null,vec__25665_25671,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_25672),value_25673);
{
var G__25674 = seq__25661_25667;
var G__25675 = chunk__25662_25668;
var G__25676 = count__25663_25669;
var G__25677 = (i__25664_25670 + 1);
seq__25661_25667 = G__25674;
chunk__25662_25668 = G__25675;
count__25663_25669 = G__25676;
i__25664_25670 = G__25677;
continue;
}
} else
{var temp__4092__auto___25678 = cljs.core.seq.call(null,seq__25661_25667);if(temp__4092__auto___25678)
{var seq__25661_25679__$1 = temp__4092__auto___25678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25661_25679__$1))
{var c__8552__auto___25680 = cljs.core.chunk_first.call(null,seq__25661_25679__$1);{
var G__25681 = cljs.core.chunk_rest.call(null,seq__25661_25679__$1);
var G__25682 = c__8552__auto___25680;
var G__25683 = cljs.core.count.call(null,c__8552__auto___25680);
var G__25684 = 0;
seq__25661_25667 = G__25681;
chunk__25662_25668 = G__25682;
count__25663_25669 = G__25683;
i__25664_25670 = G__25684;
continue;
}
} else
{var vec__25666_25685 = cljs.core.first.call(null,seq__25661_25679__$1);var attr_25686 = cljs.core.nth.call(null,vec__25666_25685,0,null);var value_25687 = cljs.core.nth.call(null,vec__25666_25685,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_25686),value_25687);
{
var G__25688 = cljs.core.next.call(null,seq__25661_25679__$1);
var G__25689 = null;
var G__25690 = 0;
var G__25691 = 0;
seq__25661_25667 = G__25688;
chunk__25662_25668 = G__25689;
count__25663_25669 = G__25690;
i__25664_25670 = G__25691;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__25696 = cljs.core.seq.call(null,values);var chunk__25697 = null;var count__25698 = 0;var i__25699 = 0;while(true){
if((i__25699 < count__25698))
{var attr = cljs.core._nth.call(null,chunk__25697,i__25699);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__25700 = seq__25696;
var G__25701 = chunk__25697;
var G__25702 = count__25698;
var G__25703 = (i__25699 + 1);
seq__25696 = G__25700;
chunk__25697 = G__25701;
count__25698 = G__25702;
i__25699 = G__25703;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25696);if(temp__4092__auto__)
{var seq__25696__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25696__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25696__$1);{
var G__25704 = cljs.core.chunk_rest.call(null,seq__25696__$1);
var G__25705 = c__8552__auto__;
var G__25706 = cljs.core.count.call(null,c__8552__auto__);
var G__25707 = 0;
seq__25696 = G__25704;
chunk__25697 = G__25705;
count__25698 = G__25706;
i__25699 = G__25707;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__25696__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__25708 = cljs.core.next.call(null,seq__25696__$1);
var G__25709 = null;
var G__25710 = 0;
var G__25711 = 0;
seq__25696 = G__25708;
chunk__25697 = G__25709;
count__25698 = G__25710;
i__25699 = G__25711;
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
{var seq__25718_25724 = cljs.core.seq.call(null,ats);var chunk__25719_25725 = null;var count__25720_25726 = 0;var i__25721_25727 = 0;while(true){
if((i__25721_25727 < count__25720_25726))
{var vec__25722_25728 = cljs.core._nth.call(null,chunk__25719_25725,i__25721_25727);var k_25729 = cljs.core.nth.call(null,vec__25722_25728,0,null);var v_25730 = cljs.core.nth.call(null,vec__25722_25728,1,null);add_map_attrs.call(null,elem,k_25729,v_25730);
{
var G__25731 = seq__25718_25724;
var G__25732 = chunk__25719_25725;
var G__25733 = count__25720_25726;
var G__25734 = (i__25721_25727 + 1);
seq__25718_25724 = G__25731;
chunk__25719_25725 = G__25732;
count__25720_25726 = G__25733;
i__25721_25727 = G__25734;
continue;
}
} else
{var temp__4092__auto___25735 = cljs.core.seq.call(null,seq__25718_25724);if(temp__4092__auto___25735)
{var seq__25718_25736__$1 = temp__4092__auto___25735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25718_25736__$1))
{var c__8552__auto___25737 = cljs.core.chunk_first.call(null,seq__25718_25736__$1);{
var G__25738 = cljs.core.chunk_rest.call(null,seq__25718_25736__$1);
var G__25739 = c__8552__auto___25737;
var G__25740 = cljs.core.count.call(null,c__8552__auto___25737);
var G__25741 = 0;
seq__25718_25724 = G__25738;
chunk__25719_25725 = G__25739;
count__25720_25726 = G__25740;
i__25721_25727 = G__25741;
continue;
}
} else
{var vec__25723_25742 = cljs.core.first.call(null,seq__25718_25736__$1);var k_25743 = cljs.core.nth.call(null,vec__25723_25742,0,null);var v_25744 = cljs.core.nth.call(null,vec__25723_25742,1,null);add_map_attrs.call(null,elem,k_25743,v_25744);
{
var G__25745 = cljs.core.next.call(null,seq__25718_25736__$1);
var G__25746 = null;
var G__25747 = 0;
var G__25748 = 0;
seq__25718_25724 = G__25745;
chunk__25719_25725 = G__25746;
count__25720_25726 = G__25747;
i__25721_25727 = G__25748;
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
var seq__25753_25757 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__25754_25758 = null;var count__25755_25759 = 0;var i__25756_25760 = 0;while(true){
if((i__25756_25760 < count__25755_25759))
{var node_25761 = cljs.core._nth.call(null,chunk__25754_25758,i__25756_25760);goog.dom.appendChild(div,node_25761);
{
var G__25762 = seq__25753_25757;
var G__25763 = chunk__25754_25758;
var G__25764 = count__25755_25759;
var G__25765 = (i__25756_25760 + 1);
seq__25753_25757 = G__25762;
chunk__25754_25758 = G__25763;
count__25755_25759 = G__25764;
i__25756_25760 = G__25765;
continue;
}
} else
{var temp__4092__auto___25766 = cljs.core.seq.call(null,seq__25753_25757);if(temp__4092__auto___25766)
{var seq__25753_25767__$1 = temp__4092__auto___25766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25753_25767__$1))
{var c__8552__auto___25768 = cljs.core.chunk_first.call(null,seq__25753_25767__$1);{
var G__25769 = cljs.core.chunk_rest.call(null,seq__25753_25767__$1);
var G__25770 = c__8552__auto___25768;
var G__25771 = cljs.core.count.call(null,c__8552__auto___25768);
var G__25772 = 0;
seq__25753_25757 = G__25769;
chunk__25754_25758 = G__25770;
count__25755_25759 = G__25771;
i__25756_25760 = G__25772;
continue;
}
} else
{var node_25773 = cljs.core.first.call(null,seq__25753_25767__$1);goog.dom.appendChild(div,node_25773);
{
var G__25774 = cljs.core.next.call(null,seq__25753_25767__$1);
var G__25775 = null;
var G__25776 = 0;
var G__25777 = 0;
seq__25753_25757 = G__25774;
chunk__25754_25758 = G__25775;
count__25755_25759 = G__25776;
i__25756_25760 = G__25777;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25778_SHARP_){var id = p1__25778_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__25778_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__25780 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__25780,0,null);var txt = cljs.core.nth.call(null,vec__25780,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__25785_25789 = cljs.core.seq.call(null,dfa);var chunk__25786_25790 = null;var count__25787_25791 = 0;var i__25788_25792 = 0;while(true){
if((i__25788_25792 < count__25787_25791))
{var df_25793 = cljs.core._nth.call(null,chunk__25786_25790,i__25788_25792);goog.dom.append(frag,df_25793);
{
var G__25794 = seq__25785_25789;
var G__25795 = chunk__25786_25790;
var G__25796 = count__25787_25791;
var G__25797 = (i__25788_25792 + 1);
seq__25785_25789 = G__25794;
chunk__25786_25790 = G__25795;
count__25787_25791 = G__25796;
i__25788_25792 = G__25797;
continue;
}
} else
{var temp__4092__auto___25798 = cljs.core.seq.call(null,seq__25785_25789);if(temp__4092__auto___25798)
{var seq__25785_25799__$1 = temp__4092__auto___25798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25785_25799__$1))
{var c__8552__auto___25800 = cljs.core.chunk_first.call(null,seq__25785_25799__$1);{
var G__25801 = cljs.core.chunk_rest.call(null,seq__25785_25799__$1);
var G__25802 = c__8552__auto___25800;
var G__25803 = cljs.core.count.call(null,c__8552__auto___25800);
var G__25804 = 0;
seq__25785_25789 = G__25801;
chunk__25786_25790 = G__25802;
count__25787_25791 = G__25803;
i__25788_25792 = G__25804;
continue;
}
} else
{var df_25805 = cljs.core.first.call(null,seq__25785_25799__$1);goog.dom.append(frag,df_25805);
{
var G__25806 = cljs.core.next.call(null,seq__25785_25799__$1);
var G__25807 = null;
var G__25808 = 0;
var G__25809 = 0;
seq__25785_25789 = G__25806;
chunk__25786_25790 = G__25807;
count__25787_25791 = G__25808;
i__25788_25792 = G__25809;
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
{var vec__25812 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__25812,0,null);var tdom = cljs.core.nth.call(null,vec__25812,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25812,sym,tdom,dom,tsnip){
return (function (p1__25810_SHARP_){return p1__25810_SHARP_.outerHTML;
});})(vec__25812,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t25816 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t25816 = (function (trans,func,extr_multi_node,meta25817){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta25817 = meta25817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t25816.cljs$lang$type = true;
enfocus.core.t25816.cljs$lang$ctorStr = "enfocus.core/t25816";
enfocus.core.t25816.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t25816");
});
enfocus.core.t25816.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t25816.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t25816.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t25816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25818){var self__ = this;
var _25818__$1 = this;return self__.meta25817;
});
enfocus.core.t25816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25818,meta25817__$1){var self__ = this;
var _25818__$1 = this;return (new enfocus.core.t25816(self__.trans,self__.func,self__.extr_multi_node,meta25817__$1));
});
enfocus.core.__GT_t25816 = (function __GT_t25816(trans__$1,func__$1,extr_multi_node__$1,meta25817){return (new enfocus.core.t25816(trans__$1,func__$1,extr_multi_node__$1,meta25817));
});
}
return (new enfocus.core.t25816(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t25826 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t25826 = (function (trans,func,multi_node_chain,meta25827){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta25827 = meta25827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t25826.cljs$lang$type = true;
enfocus.core.t25826.cljs$lang$ctorStr = "enfocus.core/t25826";
enfocus.core.t25826.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t25826");
});
enfocus.core.t25826.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t25826.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t25826.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t25826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25828){var self__ = this;
var _25828__$1 = this;return self__.meta25827;
});
enfocus.core.t25826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25828,meta25827__$1){var self__ = this;
var _25828__$1 = this;return (new enfocus.core.t25826(self__.trans,self__.func,self__.multi_node_chain,meta25827__$1));
});
enfocus.core.__GT_t25826 = (function __GT_t25826(trans__$1,func__$1,multi_node_chain__$1,meta25827){return (new enfocus.core.t25826(trans__$1,func__$1,multi_node_chain__$1,meta25827));
});
}
return (new enfocus.core.t25826(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__25819_SHARP_){return domina.nodes.call(null,p1__25819_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t25829 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t25829 = (function (trans,func,values,multi_node_chain,meta25830){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta25830 = meta25830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t25829.cljs$lang$type = true;
enfocus.core.t25829.cljs$lang$ctorStr = "enfocus.core/t25829";
enfocus.core.t25829.cljs$lang$ctorPrWriter = (function (this__8372__auto__,writer__8373__auto__,opt__8374__auto__){return cljs.core._write.call(null,writer__8373__auto__,"enfocus.core/t25829");
});
enfocus.core.t25829.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t25829.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t25829.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t25829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25831){var self__ = this;
var _25831__$1 = this;return self__.meta25830;
});
enfocus.core.t25829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25831,meta25830__$1){var self__ = this;
var _25831__$1 = this;return (new enfocus.core.t25829(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta25830__$1));
});
enfocus.core.__GT_t25829 = (function __GT_t25829(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta25830){return (new enfocus.core.t25829(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta25830));
});
}
return (new enfocus.core.t25829(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25832_SHARP_,p2__25833_SHARP_){domina.destroy_children_BANG_.call(null,p1__25832_SHARP_);
return domina.append_BANG_.call(null,p1__25832_SHARP_,p2__25833_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__25834){
var values = cljs.core.seq(arglist__25834);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__25835_SHARP_){return domina.set_html_BANG_.call(null,p1__25835_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__25836_SHARP_){var seq__25843 = cljs.core.seq.call(null,pairs);var chunk__25844 = null;var count__25845 = 0;var i__25846 = 0;while(true){
if((i__25846 < count__25845))
{var vec__25847 = cljs.core._nth.call(null,chunk__25844,i__25846);var name = cljs.core.nth.call(null,vec__25847,0,null);var value = cljs.core.nth.call(null,vec__25847,1,null);domina.set_attr_BANG_.call(null,p1__25836_SHARP_,name,value);
{
var G__25849 = seq__25843;
var G__25850 = chunk__25844;
var G__25851 = count__25845;
var G__25852 = (i__25846 + 1);
seq__25843 = G__25849;
chunk__25844 = G__25850;
count__25845 = G__25851;
i__25846 = G__25852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25843);if(temp__4092__auto__)
{var seq__25843__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25843__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25843__$1);{
var G__25853 = cljs.core.chunk_rest.call(null,seq__25843__$1);
var G__25854 = c__8552__auto__;
var G__25855 = cljs.core.count.call(null,c__8552__auto__);
var G__25856 = 0;
seq__25843 = G__25853;
chunk__25844 = G__25854;
count__25845 = G__25855;
i__25846 = G__25856;
continue;
}
} else
{var vec__25848 = cljs.core.first.call(null,seq__25843__$1);var name = cljs.core.nth.call(null,vec__25848,0,null);var value = cljs.core.nth.call(null,vec__25848,1,null);domina.set_attr_BANG_.call(null,p1__25836_SHARP_,name,value);
{
var G__25857 = cljs.core.next.call(null,seq__25843__$1);
var G__25858 = null;
var G__25859 = 0;
var G__25860 = 0;
seq__25843 = G__25857;
chunk__25844 = G__25858;
count__25845 = G__25859;
i__25846 = G__25860;
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
set_attr.cljs$lang$applyTo = (function (arglist__25861){
var values = cljs.core.seq(arglist__25861);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__25862_SHARP_){var seq__25867 = cljs.core.seq.call(null,values);var chunk__25868 = null;var count__25869 = 0;var i__25870 = 0;while(true){
if((i__25870 < count__25869))
{var name = cljs.core._nth.call(null,chunk__25868,i__25870);domina.remove_attr_BANG_.call(null,p1__25862_SHARP_,name);
{
var G__25871 = seq__25867;
var G__25872 = chunk__25868;
var G__25873 = count__25869;
var G__25874 = (i__25870 + 1);
seq__25867 = G__25871;
chunk__25868 = G__25872;
count__25869 = G__25873;
i__25870 = G__25874;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25867);if(temp__4092__auto__)
{var seq__25867__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25867__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25867__$1);{
var G__25875 = cljs.core.chunk_rest.call(null,seq__25867__$1);
var G__25876 = c__8552__auto__;
var G__25877 = cljs.core.count.call(null,c__8552__auto__);
var G__25878 = 0;
seq__25867 = G__25875;
chunk__25868 = G__25876;
count__25869 = G__25877;
i__25870 = G__25878;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__25867__$1);domina.remove_attr_BANG_.call(null,p1__25862_SHARP_,name);
{
var G__25879 = cljs.core.next.call(null,seq__25867__$1);
var G__25880 = null;
var G__25881 = 0;
var G__25882 = 0;
seq__25867 = G__25879;
chunk__25868 = G__25880;
count__25869 = G__25881;
i__25870 = G__25882;
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
remove_attr.cljs$lang$applyTo = (function (arglist__25883){
var values = cljs.core.seq(arglist__25883);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__25886){var vec__25887 = p__25886;var n = cljs.core.nth.call(null,vec__25887,0,null);var v = cljs.core.nth.call(null,vec__25887,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__25888){
var forms = cljs.core.seq(arglist__25888);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__25889_SHARP_){var seq__25894 = cljs.core.seq.call(null,values);var chunk__25895 = null;var count__25896 = 0;var i__25897 = 0;while(true){
if((i__25897 < count__25896))
{var val = cljs.core._nth.call(null,chunk__25895,i__25897);domina.add_class_BANG_.call(null,p1__25889_SHARP_,val);
{
var G__25898 = seq__25894;
var G__25899 = chunk__25895;
var G__25900 = count__25896;
var G__25901 = (i__25897 + 1);
seq__25894 = G__25898;
chunk__25895 = G__25899;
count__25896 = G__25900;
i__25897 = G__25901;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25894);if(temp__4092__auto__)
{var seq__25894__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25894__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25894__$1);{
var G__25902 = cljs.core.chunk_rest.call(null,seq__25894__$1);
var G__25903 = c__8552__auto__;
var G__25904 = cljs.core.count.call(null,c__8552__auto__);
var G__25905 = 0;
seq__25894 = G__25902;
chunk__25895 = G__25903;
count__25896 = G__25904;
i__25897 = G__25905;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__25894__$1);domina.add_class_BANG_.call(null,p1__25889_SHARP_,val);
{
var G__25906 = cljs.core.next.call(null,seq__25894__$1);
var G__25907 = null;
var G__25908 = 0;
var G__25909 = 0;
seq__25894 = G__25906;
chunk__25895 = G__25907;
count__25896 = G__25908;
i__25897 = G__25909;
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
add_class.cljs$lang$applyTo = (function (arglist__25910){
var values = cljs.core.seq(arglist__25910);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__25911_SHARP_){var seq__25916 = cljs.core.seq.call(null,values);var chunk__25917 = null;var count__25918 = 0;var i__25919 = 0;while(true){
if((i__25919 < count__25918))
{var val = cljs.core._nth.call(null,chunk__25917,i__25919);domina.remove_class_BANG_.call(null,p1__25911_SHARP_,val);
{
var G__25920 = seq__25916;
var G__25921 = chunk__25917;
var G__25922 = count__25918;
var G__25923 = (i__25919 + 1);
seq__25916 = G__25920;
chunk__25917 = G__25921;
count__25918 = G__25922;
i__25919 = G__25923;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25916);if(temp__4092__auto__)
{var seq__25916__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25916__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25916__$1);{
var G__25924 = cljs.core.chunk_rest.call(null,seq__25916__$1);
var G__25925 = c__8552__auto__;
var G__25926 = cljs.core.count.call(null,c__8552__auto__);
var G__25927 = 0;
seq__25916 = G__25924;
chunk__25917 = G__25925;
count__25918 = G__25926;
i__25919 = G__25927;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__25916__$1);domina.remove_class_BANG_.call(null,p1__25911_SHARP_,val);
{
var G__25928 = cljs.core.next.call(null,seq__25916__$1);
var G__25929 = null;
var G__25930 = 0;
var G__25931 = 0;
seq__25916 = G__25928;
chunk__25917 = G__25929;
count__25918 = G__25930;
i__25919 = G__25931;
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
remove_class.cljs$lang$applyTo = (function (arglist__25932){
var values = cljs.core.seq(arglist__25932);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__25933_SHARP_){return domina.set_classes_BANG_.call(null,p1__25933_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__25934){
var values = cljs.core.seq(arglist__25934);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__25939 = cljs.core.seq.call(null,forms);var chunk__25940 = null;var count__25941 = 0;var i__25942 = 0;while(true){
if((i__25942 < count__25941))
{var fun = cljs.core._nth.call(null,chunk__25940,i__25942);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__25943 = seq__25939;
var G__25944 = chunk__25940;
var G__25945 = count__25941;
var G__25946 = (i__25942 + 1);
seq__25939 = G__25943;
chunk__25940 = G__25944;
count__25941 = G__25945;
i__25942 = G__25946;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25939);if(temp__4092__auto__)
{var seq__25939__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25939__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25939__$1);{
var G__25947 = cljs.core.chunk_rest.call(null,seq__25939__$1);
var G__25948 = c__8552__auto__;
var G__25949 = cljs.core.count.call(null,c__8552__auto__);
var G__25950 = 0;
seq__25939 = G__25947;
chunk__25940 = G__25948;
count__25941 = G__25949;
i__25942 = G__25950;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__25939__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__25951 = cljs.core.next.call(null,seq__25939__$1);
var G__25952 = null;
var G__25953 = 0;
var G__25954 = 0;
seq__25939 = G__25951;
chunk__25940 = G__25952;
count__25941 = G__25953;
i__25942 = G__25954;
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
do__GT_.cljs$lang$applyTo = (function (arglist__25955){
var forms = cljs.core.seq(arglist__25955);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25956_SHARP_,p2__25957_SHARP_){return domina.append_BANG_.call(null,p1__25956_SHARP_,p2__25957_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__25958){
var values = cljs.core.seq(arglist__25958);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25959_SHARP_,p2__25960_SHARP_){return domina.prepend_BANG_.call(null,p1__25959_SHARP_,p2__25960_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__25961){
var values = cljs.core.seq(arglist__25961);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25962_SHARP_,p2__25963_SHARP_){return domina.insert_before_BANG_.call(null,p1__25962_SHARP_,p2__25963_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__25964){
var values = cljs.core.seq(arglist__25964);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25965_SHARP_,p2__25966_SHARP_){return domina.insert_after_BANG_.call(null,p1__25965_SHARP_,p2__25966_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__25967){
var values = cljs.core.seq(arglist__25967);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__25968_SHARP_,p2__25969_SHARP_){return domina.swap_content_BANG_.call(null,p1__25968_SHARP_,p2__25969_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__25970){
var values = cljs.core.seq(arglist__25970);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__25971_SHARP_){return domina.detach_BANG_.call(null,p1__25971_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__25972_SHARP_){var seq__25979 = cljs.core.seq.call(null,pairs);var chunk__25980 = null;var count__25981 = 0;var i__25982 = 0;while(true){
if((i__25982 < count__25981))
{var vec__25983 = cljs.core._nth.call(null,chunk__25980,i__25982);var name = cljs.core.nth.call(null,vec__25983,0,null);var value = cljs.core.nth.call(null,vec__25983,1,null);domina.set_style_BANG_.call(null,p1__25972_SHARP_,name,value);
{
var G__25985 = seq__25979;
var G__25986 = chunk__25980;
var G__25987 = count__25981;
var G__25988 = (i__25982 + 1);
seq__25979 = G__25985;
chunk__25980 = G__25986;
count__25981 = G__25987;
i__25982 = G__25988;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__25979);if(temp__4092__auto__)
{var seq__25979__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25979__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__25979__$1);{
var G__25989 = cljs.core.chunk_rest.call(null,seq__25979__$1);
var G__25990 = c__8552__auto__;
var G__25991 = cljs.core.count.call(null,c__8552__auto__);
var G__25992 = 0;
seq__25979 = G__25989;
chunk__25980 = G__25990;
count__25981 = G__25991;
i__25982 = G__25992;
continue;
}
} else
{var vec__25984 = cljs.core.first.call(null,seq__25979__$1);var name = cljs.core.nth.call(null,vec__25984,0,null);var value = cljs.core.nth.call(null,vec__25984,1,null);domina.set_style_BANG_.call(null,p1__25972_SHARP_,name,value);
{
var G__25993 = cljs.core.next.call(null,seq__25979__$1);
var G__25994 = null;
var G__25995 = 0;
var G__25996 = 0;
seq__25979 = G__25993;
chunk__25980 = G__25994;
count__25981 = G__25995;
i__25982 = G__25996;
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
set_style.cljs$lang$applyTo = (function (arglist__25997){
var values = cljs.core.seq(arglist__25997);
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
remove_style.cljs$lang$applyTo = (function (arglist__25998){
var values = cljs.core.seq(arglist__25998);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__25999_SHARP_){return domina.set_data_BANG_.call(null,p1__25999_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__26000){
var ttime = cljs.core.first(arglist__26000);
var funcs = cljs.core.rest(arglist__26000);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__26002_SHARP_,p2__26001_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__26001_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__26027_26035 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__26028_26036 = null;var count__26029_26037 = 0;var i__26030_26038 = 0;while(true){
if((i__26030_26038 < count__26029_26037))
{var idx_26039 = cljs.core._nth.call(null,chunk__26028_26036,i__26030_26038);var attr_26040 = pnod.attributes.item(idx_26039);if(cljs.core.truth_(attr_26040.specified))
{attr_26040.value = rep_str.call(null,attr_26040.value);
} else
{}
{
var G__26041 = seq__26027_26035;
var G__26042 = chunk__26028_26036;
var G__26043 = count__26029_26037;
var G__26044 = (i__26030_26038 + 1);
seq__26027_26035 = G__26041;
chunk__26028_26036 = G__26042;
count__26029_26037 = G__26043;
i__26030_26038 = G__26044;
continue;
}
} else
{var temp__4092__auto___26045 = cljs.core.seq.call(null,seq__26027_26035);if(temp__4092__auto___26045)
{var seq__26027_26046__$1 = temp__4092__auto___26045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26027_26046__$1))
{var c__8552__auto___26047 = cljs.core.chunk_first.call(null,seq__26027_26046__$1);{
var G__26048 = cljs.core.chunk_rest.call(null,seq__26027_26046__$1);
var G__26049 = c__8552__auto___26047;
var G__26050 = cljs.core.count.call(null,c__8552__auto___26047);
var G__26051 = 0;
seq__26027_26035 = G__26048;
chunk__26028_26036 = G__26049;
count__26029_26037 = G__26050;
i__26030_26038 = G__26051;
continue;
}
} else
{var idx_26052 = cljs.core.first.call(null,seq__26027_26046__$1);var attr_26053 = pnod.attributes.item(idx_26052);if(cljs.core.truth_(attr_26053.specified))
{attr_26053.value = rep_str.call(null,attr_26053.value);
} else
{}
{
var G__26054 = cljs.core.next.call(null,seq__26027_26046__$1);
var G__26055 = null;
var G__26056 = 0;
var G__26057 = 0;
seq__26027_26035 = G__26054;
chunk__26028_26036 = G__26055;
count__26029_26037 = G__26056;
i__26030_26038 = G__26057;
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
{var seq__26031 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__26032 = null;var count__26033 = 0;var i__26034 = 0;while(true){
if((i__26034 < count__26033))
{var cnode = cljs.core._nth.call(null,chunk__26032,i__26034);rep_node.call(null,cnode);
{
var G__26058 = seq__26031;
var G__26059 = chunk__26032;
var G__26060 = count__26033;
var G__26061 = (i__26034 + 1);
seq__26031 = G__26058;
chunk__26032 = G__26059;
count__26033 = G__26060;
i__26034 = G__26061;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26031);if(temp__4092__auto__)
{var seq__26031__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26031__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__26031__$1);{
var G__26062 = cljs.core.chunk_rest.call(null,seq__26031__$1);
var G__26063 = c__8552__auto__;
var G__26064 = cljs.core.count.call(null,c__8552__auto__);
var G__26065 = 0;
seq__26031 = G__26062;
chunk__26032 = G__26063;
count__26033 = G__26064;
i__26034 = G__26065;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__26031__$1);rep_node.call(null,cnode);
{
var G__26066 = cljs.core.next.call(null,seq__26031__$1);
var G__26067 = null;
var G__26068 = 0;
var G__26069 = 0;
seq__26031 = G__26066;
chunk__26032 = G__26067;
count__26033 = G__26068;
i__26034 = G__26069;
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
{var vec__26079 = node_spec;var tag = cljs.core.nth.call(null,vec__26079,0,null);var vec__26080 = cljs.core.nthnext.call(null,vec__26079,1);var m = cljs.core.nth.call(null,vec__26080,0,null);var ms = cljs.core.nthnext.call(null,vec__26080,1);var more = vec__26080;var vec__26081 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__26081,0,null);var segments = cljs.core.nthnext.call(null,vec__26081,1);var id = cljs.core.some.call(null,((function (vec__26079,tag,vec__26080,m,ms,more,vec__26081,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__26079,tag,vec__26080,m,ms,more,vec__26081,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__26079,tag,vec__26080,m,ms,more,vec__26081,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__26079,tag,vec__26080,m,ms,more,vec__26081,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__26082_26088 = cljs.core.seq.call(null,attrs__$2);var chunk__26083_26089 = null;var count__26084_26090 = 0;var i__26085_26091 = 0;while(true){
if((i__26085_26091 < count__26084_26090))
{var vec__26086_26092 = cljs.core._nth.call(null,chunk__26083_26089,i__26085_26091);var key_26093 = cljs.core.nth.call(null,vec__26086_26092,0,null);var val_26094 = cljs.core.nth.call(null,vec__26086_26092,1,null);node.setAttribute(cljs.core.name.call(null,key_26093),val_26094);
{
var G__26095 = seq__26082_26088;
var G__26096 = chunk__26083_26089;
var G__26097 = count__26084_26090;
var G__26098 = (i__26085_26091 + 1);
seq__26082_26088 = G__26095;
chunk__26083_26089 = G__26096;
count__26084_26090 = G__26097;
i__26085_26091 = G__26098;
continue;
}
} else
{var temp__4092__auto___26099 = cljs.core.seq.call(null,seq__26082_26088);if(temp__4092__auto___26099)
{var seq__26082_26100__$1 = temp__4092__auto___26099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26082_26100__$1))
{var c__8552__auto___26101 = cljs.core.chunk_first.call(null,seq__26082_26100__$1);{
var G__26102 = cljs.core.chunk_rest.call(null,seq__26082_26100__$1);
var G__26103 = c__8552__auto___26101;
var G__26104 = cljs.core.count.call(null,c__8552__auto___26101);
var G__26105 = 0;
seq__26082_26088 = G__26102;
chunk__26083_26089 = G__26103;
count__26084_26090 = G__26104;
i__26085_26091 = G__26105;
continue;
}
} else
{var vec__26087_26106 = cljs.core.first.call(null,seq__26082_26100__$1);var key_26107 = cljs.core.nth.call(null,vec__26087_26106,0,null);var val_26108 = cljs.core.nth.call(null,vec__26087_26106,1,null);node.setAttribute(cljs.core.name.call(null,key_26107),val_26108);
{
var G__26109 = cljs.core.next.call(null,seq__26082_26100__$1);
var G__26110 = null;
var G__26111 = 0;
var G__26112 = 0;
seq__26082_26088 = G__26109;
chunk__26083_26089 = G__26110;
count__26084_26090 = G__26111;
i__26085_26091 = G__26112;
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
return (function (p1__26113_SHARP_){return p1__26113_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__26114_SHARP_){return p1__26114_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__26116_SHARP_,p2__26115_SHARP_){var G__26119 = p2__26115_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__26119))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__26119))
{return enfocus.core.read_select_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__26119))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__26119))
{var G__26120 = p2__26115_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__26120))
{return enfocus.core.read_checked_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__26120))
{return enfocus.core.read_checked_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__26120))
{return enfocus.core.read_simple_input.call(null,p2__26115_SHARP_,p1__26116_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__26116_SHARP_;
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
{return p1__26116_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__26121_SHARP_){if((p1__26121_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__26121_SHARP_);
} else
{if((p1__26121_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__26121_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__26121_SHARP_))
{return create_sel_str.call(null,p1__26121_SHARP_);
} else
{if(typeof p1__26121_SHARP_ === 'string')
{return p1__26121_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__26132 = node;if(G__26132)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__26132.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__26132.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26132);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26132);
}
} else
{return and__7816__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__26133 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__26133,0,null);var trans__$1 = cljs.core.nth.call(null,vec__26133,1,null);var seq__26134 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__26135 = null;var count__26136 = 0;var i__26137 = 0;while(true){
if((i__26137 < count__26136))
{var vec__26138 = cljs.core._nth.call(null,chunk__26135,i__26137);var sel = cljs.core.nth.call(null,vec__26138,0,null);var t = cljs.core.nth.call(null,vec__26138,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__26140 = seq__26134;
var G__26141 = chunk__26135;
var G__26142 = count__26136;
var G__26143 = (i__26137 + 1);
seq__26134 = G__26140;
chunk__26135 = G__26141;
count__26136 = G__26142;
i__26137 = G__26143;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26134);if(temp__4092__auto__)
{var seq__26134__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26134__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__26134__$1);{
var G__26144 = cljs.core.chunk_rest.call(null,seq__26134__$1);
var G__26145 = c__8552__auto__;
var G__26146 = cljs.core.count.call(null,c__8552__auto__);
var G__26147 = 0;
seq__26134 = G__26144;
chunk__26135 = G__26145;
count__26136 = G__26146;
i__26137 = G__26147;
continue;
}
} else
{var vec__26139 = cljs.core.first.call(null,seq__26134__$1);var sel = cljs.core.nth.call(null,vec__26139,0,null);var t = cljs.core.nth.call(null,vec__26139,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__26148 = cljs.core.next.call(null,seq__26134__$1);
var G__26149 = null;
var G__26150 = 0;
var G__26151 = 0;
seq__26134 = G__26148;
chunk__26135 = G__26149;
count__26136 = G__26150;
i__26137 = G__26151;
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
i_at.cljs$lang$applyTo = (function (arglist__26152){
var id_mask = cljs.core.first(arglist__26152);
arglist__26152 = cljs.core.next(arglist__26152);
var node = cljs.core.first(arglist__26152);
var trans = cljs.core.rest(arglist__26152);
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
at.cljs$lang$applyTo = (function (arglist__26153){
var node = cljs.core.first(arglist__26153);
var trans = cljs.core.rest(arglist__26153);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__26158 = node;if(G__26158)
{var bit__8454__auto__ = null;if(cljs.core.truth_((function (){var or__7828__auto__ = bit__8454__auto__;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return G__26158.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__26158.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26158);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__26158);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__26159 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__26159,0,null);var trans__$1 = cljs.core.nth.call(null,vec__26159,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__26160){var vec__26161 = p__26160;var ky = cljs.core.nth.call(null,vec__26161,0,null);var sel = cljs.core.nth.call(null,vec__26161,1,null);var ext = cljs.core.nth.call(null,vec__26161,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__26162){
var node = cljs.core.first(arglist__26162);
var trans = cljs.core.rest(arglist__26162);
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
