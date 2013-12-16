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
enfocus.core.ISelector = (function (){var obj34644 = {};return obj34644;
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
enfocus.core.ITransform = (function (){var obj34646 = {};return obj34646;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__34647_SHARP_){if(typeof p1__34647_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__34647_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__34647_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__34654_34660 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__34655_34661 = null;var count__34656_34662 = 0;var i__34657_34663 = 0;while(true){
if((i__34657_34663 < count__34656_34662))
{var vec__34658_34664 = cljs.core._nth.call(null,chunk__34655_34661,i__34657_34663);var attr_34665 = cljs.core.nth.call(null,vec__34658_34664,0,null);var value_34666 = cljs.core.nth.call(null,vec__34658_34664,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34665),value_34666);
{
var G__34667 = seq__34654_34660;
var G__34668 = chunk__34655_34661;
var G__34669 = count__34656_34662;
var G__34670 = (i__34657_34663 + 1);
seq__34654_34660 = G__34667;
chunk__34655_34661 = G__34668;
count__34656_34662 = G__34669;
i__34657_34663 = G__34670;
continue;
}
} else
{var temp__4092__auto___34671 = cljs.core.seq.call(null,seq__34654_34660);if(temp__4092__auto___34671)
{var seq__34654_34672__$1 = temp__4092__auto___34671;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34654_34672__$1))
{var c__14547__auto___34673 = cljs.core.chunk_first.call(null,seq__34654_34672__$1);{
var G__34674 = cljs.core.chunk_rest.call(null,seq__34654_34672__$1);
var G__34675 = c__14547__auto___34673;
var G__34676 = cljs.core.count.call(null,c__14547__auto___34673);
var G__34677 = 0;
seq__34654_34660 = G__34674;
chunk__34655_34661 = G__34675;
count__34656_34662 = G__34676;
i__34657_34663 = G__34677;
continue;
}
} else
{var vec__34659_34678 = cljs.core.first.call(null,seq__34654_34672__$1);var attr_34679 = cljs.core.nth.call(null,vec__34659_34678,0,null);var value_34680 = cljs.core.nth.call(null,vec__34659_34678,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34679),value_34680);
{
var G__34681 = cljs.core.next.call(null,seq__34654_34672__$1);
var G__34682 = null;
var G__34683 = 0;
var G__34684 = 0;
seq__34654_34660 = G__34681;
chunk__34655_34661 = G__34682;
count__34656_34662 = G__34683;
i__34657_34663 = G__34684;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__34689 = cljs.core.seq.call(null,values);var chunk__34690 = null;var count__34691 = 0;var i__34692 = 0;while(true){
if((i__34692 < count__34691))
{var attr = cljs.core._nth.call(null,chunk__34690,i__34692);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34693 = seq__34689;
var G__34694 = chunk__34690;
var G__34695 = count__34691;
var G__34696 = (i__34692 + 1);
seq__34689 = G__34693;
chunk__34690 = G__34694;
count__34691 = G__34695;
i__34692 = G__34696;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34689);if(temp__4092__auto__)
{var seq__34689__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34689__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34689__$1);{
var G__34697 = cljs.core.chunk_rest.call(null,seq__34689__$1);
var G__34698 = c__14547__auto__;
var G__34699 = cljs.core.count.call(null,c__14547__auto__);
var G__34700 = 0;
seq__34689 = G__34697;
chunk__34690 = G__34698;
count__34691 = G__34699;
i__34692 = G__34700;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__34689__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34701 = cljs.core.next.call(null,seq__34689__$1);
var G__34702 = null;
var G__34703 = 0;
var G__34704 = 0;
seq__34689 = G__34701;
chunk__34690 = G__34702;
count__34691 = G__34703;
i__34692 = G__34704;
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
{var seq__34711_34717 = cljs.core.seq.call(null,ats);var chunk__34712_34718 = null;var count__34713_34719 = 0;var i__34714_34720 = 0;while(true){
if((i__34714_34720 < count__34713_34719))
{var vec__34715_34721 = cljs.core._nth.call(null,chunk__34712_34718,i__34714_34720);var k_34722 = cljs.core.nth.call(null,vec__34715_34721,0,null);var v_34723 = cljs.core.nth.call(null,vec__34715_34721,1,null);add_map_attrs.call(null,elem,k_34722,v_34723);
{
var G__34724 = seq__34711_34717;
var G__34725 = chunk__34712_34718;
var G__34726 = count__34713_34719;
var G__34727 = (i__34714_34720 + 1);
seq__34711_34717 = G__34724;
chunk__34712_34718 = G__34725;
count__34713_34719 = G__34726;
i__34714_34720 = G__34727;
continue;
}
} else
{var temp__4092__auto___34728 = cljs.core.seq.call(null,seq__34711_34717);if(temp__4092__auto___34728)
{var seq__34711_34729__$1 = temp__4092__auto___34728;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34711_34729__$1))
{var c__14547__auto___34730 = cljs.core.chunk_first.call(null,seq__34711_34729__$1);{
var G__34731 = cljs.core.chunk_rest.call(null,seq__34711_34729__$1);
var G__34732 = c__14547__auto___34730;
var G__34733 = cljs.core.count.call(null,c__14547__auto___34730);
var G__34734 = 0;
seq__34711_34717 = G__34731;
chunk__34712_34718 = G__34732;
count__34713_34719 = G__34733;
i__34714_34720 = G__34734;
continue;
}
} else
{var vec__34716_34735 = cljs.core.first.call(null,seq__34711_34729__$1);var k_34736 = cljs.core.nth.call(null,vec__34716_34735,0,null);var v_34737 = cljs.core.nth.call(null,vec__34716_34735,1,null);add_map_attrs.call(null,elem,k_34736,v_34737);
{
var G__34738 = cljs.core.next.call(null,seq__34711_34729__$1);
var G__34739 = null;
var G__34740 = 0;
var G__34741 = 0;
seq__34711_34717 = G__34738;
chunk__34712_34718 = G__34739;
count__34713_34719 = G__34740;
i__34714_34720 = G__34741;
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
var seq__34746_34750 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__34747_34751 = null;var count__34748_34752 = 0;var i__34749_34753 = 0;while(true){
if((i__34749_34753 < count__34748_34752))
{var node_34754 = cljs.core._nth.call(null,chunk__34747_34751,i__34749_34753);goog.dom.appendChild(div,node_34754);
{
var G__34755 = seq__34746_34750;
var G__34756 = chunk__34747_34751;
var G__34757 = count__34748_34752;
var G__34758 = (i__34749_34753 + 1);
seq__34746_34750 = G__34755;
chunk__34747_34751 = G__34756;
count__34748_34752 = G__34757;
i__34749_34753 = G__34758;
continue;
}
} else
{var temp__4092__auto___34759 = cljs.core.seq.call(null,seq__34746_34750);if(temp__4092__auto___34759)
{var seq__34746_34760__$1 = temp__4092__auto___34759;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34746_34760__$1))
{var c__14547__auto___34761 = cljs.core.chunk_first.call(null,seq__34746_34760__$1);{
var G__34762 = cljs.core.chunk_rest.call(null,seq__34746_34760__$1);
var G__34763 = c__14547__auto___34761;
var G__34764 = cljs.core.count.call(null,c__14547__auto___34761);
var G__34765 = 0;
seq__34746_34750 = G__34762;
chunk__34747_34751 = G__34763;
count__34748_34752 = G__34764;
i__34749_34753 = G__34765;
continue;
}
} else
{var node_34766 = cljs.core.first.call(null,seq__34746_34760__$1);goog.dom.appendChild(div,node_34766);
{
var G__34767 = cljs.core.next.call(null,seq__34746_34760__$1);
var G__34768 = null;
var G__34769 = 0;
var G__34770 = 0;
seq__34746_34750 = G__34767;
chunk__34747_34751 = G__34768;
count__34748_34752 = G__34769;
i__34749_34753 = G__34770;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34771_SHARP_){var id = p1__34771_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__34771_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__34773 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__34773,0,null);var txt = cljs.core.nth.call(null,vec__34773,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__34778_34782 = cljs.core.seq.call(null,dfa);var chunk__34779_34783 = null;var count__34780_34784 = 0;var i__34781_34785 = 0;while(true){
if((i__34781_34785 < count__34780_34784))
{var df_34786 = cljs.core._nth.call(null,chunk__34779_34783,i__34781_34785);goog.dom.append(frag,df_34786);
{
var G__34787 = seq__34778_34782;
var G__34788 = chunk__34779_34783;
var G__34789 = count__34780_34784;
var G__34790 = (i__34781_34785 + 1);
seq__34778_34782 = G__34787;
chunk__34779_34783 = G__34788;
count__34780_34784 = G__34789;
i__34781_34785 = G__34790;
continue;
}
} else
{var temp__4092__auto___34791 = cljs.core.seq.call(null,seq__34778_34782);if(temp__4092__auto___34791)
{var seq__34778_34792__$1 = temp__4092__auto___34791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34778_34792__$1))
{var c__14547__auto___34793 = cljs.core.chunk_first.call(null,seq__34778_34792__$1);{
var G__34794 = cljs.core.chunk_rest.call(null,seq__34778_34792__$1);
var G__34795 = c__14547__auto___34793;
var G__34796 = cljs.core.count.call(null,c__14547__auto___34793);
var G__34797 = 0;
seq__34778_34782 = G__34794;
chunk__34779_34783 = G__34795;
count__34780_34784 = G__34796;
i__34781_34785 = G__34797;
continue;
}
} else
{var df_34798 = cljs.core.first.call(null,seq__34778_34792__$1);goog.dom.append(frag,df_34798);
{
var G__34799 = cljs.core.next.call(null,seq__34778_34792__$1);
var G__34800 = null;
var G__34801 = 0;
var G__34802 = 0;
seq__34778_34782 = G__34799;
chunk__34779_34783 = G__34800;
count__34780_34784 = G__34801;
i__34781_34785 = G__34802;
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
{var vec__34805 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__34805,0,null);var tdom = cljs.core.nth.call(null,vec__34805,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34805,sym,tdom,dom,tsnip){
return (function (p1__34803_SHARP_){return p1__34803_SHARP_.outerHTML;
});})(vec__34805,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t34809 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34809 = (function (trans,func,extr_multi_node,meta34810){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta34810 = meta34810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34809.cljs$lang$type = true;
enfocus.core.t34809.cljs$lang$ctorStr = "enfocus.core/t34809";
enfocus.core.t34809.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34809");
});
enfocus.core.t34809.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34809.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34809.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34811){var self__ = this;
var _34811__$1 = this;return self__.meta34810;
});
enfocus.core.t34809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34811,meta34810__$1){var self__ = this;
var _34811__$1 = this;return (new enfocus.core.t34809(self__.trans,self__.func,self__.extr_multi_node,meta34810__$1));
});
enfocus.core.__GT_t34809 = (function __GT_t34809(trans__$1,func__$1,extr_multi_node__$1,meta34810){return (new enfocus.core.t34809(trans__$1,func__$1,extr_multi_node__$1,meta34810));
});
}
return (new enfocus.core.t34809(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t34819 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34819 = (function (trans,func,multi_node_chain,meta34820){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta34820 = meta34820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34819.cljs$lang$type = true;
enfocus.core.t34819.cljs$lang$ctorStr = "enfocus.core/t34819";
enfocus.core.t34819.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34819");
});
enfocus.core.t34819.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34819.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34819.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34821){var self__ = this;
var _34821__$1 = this;return self__.meta34820;
});
enfocus.core.t34819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34821,meta34820__$1){var self__ = this;
var _34821__$1 = this;return (new enfocus.core.t34819(self__.trans,self__.func,self__.multi_node_chain,meta34820__$1));
});
enfocus.core.__GT_t34819 = (function __GT_t34819(trans__$1,func__$1,multi_node_chain__$1,meta34820){return (new enfocus.core.t34819(trans__$1,func__$1,multi_node_chain__$1,meta34820));
});
}
return (new enfocus.core.t34819(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__34812_SHARP_){return domina.nodes.call(null,p1__34812_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t34822 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34822 = (function (trans,func,values,multi_node_chain,meta34823){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34822.cljs$lang$type = true;
enfocus.core.t34822.cljs$lang$ctorStr = "enfocus.core/t34822";
enfocus.core.t34822.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34822");
});
enfocus.core.t34822.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34822.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34822.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34824){var self__ = this;
var _34824__$1 = this;return self__.meta34823;
});
enfocus.core.t34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34824,meta34823__$1){var self__ = this;
var _34824__$1 = this;return (new enfocus.core.t34822(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta34823__$1));
});
enfocus.core.__GT_t34822 = (function __GT_t34822(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34823){return (new enfocus.core.t34822(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34823));
});
}
return (new enfocus.core.t34822(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34825_SHARP_,p2__34826_SHARP_){domina.destroy_children_BANG_.call(null,p1__34825_SHARP_);
return domina.append_BANG_.call(null,p1__34825_SHARP_,p2__34826_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__34827){
var values = cljs.core.seq(arglist__34827);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__34828_SHARP_){return domina.set_html_BANG_.call(null,p1__34828_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34829_SHARP_){var seq__34836 = cljs.core.seq.call(null,pairs);var chunk__34837 = null;var count__34838 = 0;var i__34839 = 0;while(true){
if((i__34839 < count__34838))
{var vec__34840 = cljs.core._nth.call(null,chunk__34837,i__34839);var name = cljs.core.nth.call(null,vec__34840,0,null);var value = cljs.core.nth.call(null,vec__34840,1,null);domina.set_attr_BANG_.call(null,p1__34829_SHARP_,name,value);
{
var G__34842 = seq__34836;
var G__34843 = chunk__34837;
var G__34844 = count__34838;
var G__34845 = (i__34839 + 1);
seq__34836 = G__34842;
chunk__34837 = G__34843;
count__34838 = G__34844;
i__34839 = G__34845;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34836);if(temp__4092__auto__)
{var seq__34836__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34836__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34836__$1);{
var G__34846 = cljs.core.chunk_rest.call(null,seq__34836__$1);
var G__34847 = c__14547__auto__;
var G__34848 = cljs.core.count.call(null,c__14547__auto__);
var G__34849 = 0;
seq__34836 = G__34846;
chunk__34837 = G__34847;
count__34838 = G__34848;
i__34839 = G__34849;
continue;
}
} else
{var vec__34841 = cljs.core.first.call(null,seq__34836__$1);var name = cljs.core.nth.call(null,vec__34841,0,null);var value = cljs.core.nth.call(null,vec__34841,1,null);domina.set_attr_BANG_.call(null,p1__34829_SHARP_,name,value);
{
var G__34850 = cljs.core.next.call(null,seq__34836__$1);
var G__34851 = null;
var G__34852 = 0;
var G__34853 = 0;
seq__34836 = G__34850;
chunk__34837 = G__34851;
count__34838 = G__34852;
i__34839 = G__34853;
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
set_attr.cljs$lang$applyTo = (function (arglist__34854){
var values = cljs.core.seq(arglist__34854);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34855_SHARP_){var seq__34860 = cljs.core.seq.call(null,values);var chunk__34861 = null;var count__34862 = 0;var i__34863 = 0;while(true){
if((i__34863 < count__34862))
{var name = cljs.core._nth.call(null,chunk__34861,i__34863);domina.remove_attr_BANG_.call(null,p1__34855_SHARP_,name);
{
var G__34864 = seq__34860;
var G__34865 = chunk__34861;
var G__34866 = count__34862;
var G__34867 = (i__34863 + 1);
seq__34860 = G__34864;
chunk__34861 = G__34865;
count__34862 = G__34866;
i__34863 = G__34867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34860);if(temp__4092__auto__)
{var seq__34860__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34860__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34860__$1);{
var G__34868 = cljs.core.chunk_rest.call(null,seq__34860__$1);
var G__34869 = c__14547__auto__;
var G__34870 = cljs.core.count.call(null,c__14547__auto__);
var G__34871 = 0;
seq__34860 = G__34868;
chunk__34861 = G__34869;
count__34862 = G__34870;
i__34863 = G__34871;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__34860__$1);domina.remove_attr_BANG_.call(null,p1__34855_SHARP_,name);
{
var G__34872 = cljs.core.next.call(null,seq__34860__$1);
var G__34873 = null;
var G__34874 = 0;
var G__34875 = 0;
seq__34860 = G__34872;
chunk__34861 = G__34873;
count__34862 = G__34874;
i__34863 = G__34875;
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
remove_attr.cljs$lang$applyTo = (function (arglist__34876){
var values = cljs.core.seq(arglist__34876);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__34879){var vec__34880 = p__34879;var n = cljs.core.nth.call(null,vec__34880,0,null);var v = cljs.core.nth.call(null,vec__34880,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__34881){
var forms = cljs.core.seq(arglist__34881);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34882_SHARP_){var seq__34887 = cljs.core.seq.call(null,values);var chunk__34888 = null;var count__34889 = 0;var i__34890 = 0;while(true){
if((i__34890 < count__34889))
{var val = cljs.core._nth.call(null,chunk__34888,i__34890);domina.add_class_BANG_.call(null,p1__34882_SHARP_,val);
{
var G__34891 = seq__34887;
var G__34892 = chunk__34888;
var G__34893 = count__34889;
var G__34894 = (i__34890 + 1);
seq__34887 = G__34891;
chunk__34888 = G__34892;
count__34889 = G__34893;
i__34890 = G__34894;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34887);if(temp__4092__auto__)
{var seq__34887__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34887__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34887__$1);{
var G__34895 = cljs.core.chunk_rest.call(null,seq__34887__$1);
var G__34896 = c__14547__auto__;
var G__34897 = cljs.core.count.call(null,c__14547__auto__);
var G__34898 = 0;
seq__34887 = G__34895;
chunk__34888 = G__34896;
count__34889 = G__34897;
i__34890 = G__34898;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34887__$1);domina.add_class_BANG_.call(null,p1__34882_SHARP_,val);
{
var G__34899 = cljs.core.next.call(null,seq__34887__$1);
var G__34900 = null;
var G__34901 = 0;
var G__34902 = 0;
seq__34887 = G__34899;
chunk__34888 = G__34900;
count__34889 = G__34901;
i__34890 = G__34902;
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
add_class.cljs$lang$applyTo = (function (arglist__34903){
var values = cljs.core.seq(arglist__34903);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34904_SHARP_){var seq__34909 = cljs.core.seq.call(null,values);var chunk__34910 = null;var count__34911 = 0;var i__34912 = 0;while(true){
if((i__34912 < count__34911))
{var val = cljs.core._nth.call(null,chunk__34910,i__34912);domina.remove_class_BANG_.call(null,p1__34904_SHARP_,val);
{
var G__34913 = seq__34909;
var G__34914 = chunk__34910;
var G__34915 = count__34911;
var G__34916 = (i__34912 + 1);
seq__34909 = G__34913;
chunk__34910 = G__34914;
count__34911 = G__34915;
i__34912 = G__34916;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34909);if(temp__4092__auto__)
{var seq__34909__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34909__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34909__$1);{
var G__34917 = cljs.core.chunk_rest.call(null,seq__34909__$1);
var G__34918 = c__14547__auto__;
var G__34919 = cljs.core.count.call(null,c__14547__auto__);
var G__34920 = 0;
seq__34909 = G__34917;
chunk__34910 = G__34918;
count__34911 = G__34919;
i__34912 = G__34920;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34909__$1);domina.remove_class_BANG_.call(null,p1__34904_SHARP_,val);
{
var G__34921 = cljs.core.next.call(null,seq__34909__$1);
var G__34922 = null;
var G__34923 = 0;
var G__34924 = 0;
seq__34909 = G__34921;
chunk__34910 = G__34922;
count__34911 = G__34923;
i__34912 = G__34924;
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
remove_class.cljs$lang$applyTo = (function (arglist__34925){
var values = cljs.core.seq(arglist__34925);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34926_SHARP_){return domina.set_classes_BANG_.call(null,p1__34926_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__34927){
var values = cljs.core.seq(arglist__34927);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__34932 = cljs.core.seq.call(null,forms);var chunk__34933 = null;var count__34934 = 0;var i__34935 = 0;while(true){
if((i__34935 < count__34934))
{var fun = cljs.core._nth.call(null,chunk__34933,i__34935);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34936 = seq__34932;
var G__34937 = chunk__34933;
var G__34938 = count__34934;
var G__34939 = (i__34935 + 1);
seq__34932 = G__34936;
chunk__34933 = G__34937;
count__34934 = G__34938;
i__34935 = G__34939;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34932);if(temp__4092__auto__)
{var seq__34932__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34932__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34932__$1);{
var G__34940 = cljs.core.chunk_rest.call(null,seq__34932__$1);
var G__34941 = c__14547__auto__;
var G__34942 = cljs.core.count.call(null,c__14547__auto__);
var G__34943 = 0;
seq__34932 = G__34940;
chunk__34933 = G__34941;
count__34934 = G__34942;
i__34935 = G__34943;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__34932__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34944 = cljs.core.next.call(null,seq__34932__$1);
var G__34945 = null;
var G__34946 = 0;
var G__34947 = 0;
seq__34932 = G__34944;
chunk__34933 = G__34945;
count__34934 = G__34946;
i__34935 = G__34947;
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
do__GT_.cljs$lang$applyTo = (function (arglist__34948){
var forms = cljs.core.seq(arglist__34948);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34949_SHARP_,p2__34950_SHARP_){return domina.append_BANG_.call(null,p1__34949_SHARP_,p2__34950_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__34951){
var values = cljs.core.seq(arglist__34951);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34952_SHARP_,p2__34953_SHARP_){return domina.prepend_BANG_.call(null,p1__34952_SHARP_,p2__34953_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__34954){
var values = cljs.core.seq(arglist__34954);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34955_SHARP_,p2__34956_SHARP_){return domina.insert_before_BANG_.call(null,p1__34955_SHARP_,p2__34956_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__34957){
var values = cljs.core.seq(arglist__34957);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34958_SHARP_,p2__34959_SHARP_){return domina.insert_after_BANG_.call(null,p1__34958_SHARP_,p2__34959_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__34960){
var values = cljs.core.seq(arglist__34960);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34961_SHARP_,p2__34962_SHARP_){return domina.swap_content_BANG_.call(null,p1__34961_SHARP_,p2__34962_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__34963){
var values = cljs.core.seq(arglist__34963);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__34964_SHARP_){return domina.detach_BANG_.call(null,p1__34964_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34965_SHARP_){var seq__34972 = cljs.core.seq.call(null,pairs);var chunk__34973 = null;var count__34974 = 0;var i__34975 = 0;while(true){
if((i__34975 < count__34974))
{var vec__34976 = cljs.core._nth.call(null,chunk__34973,i__34975);var name = cljs.core.nth.call(null,vec__34976,0,null);var value = cljs.core.nth.call(null,vec__34976,1,null);domina.set_style_BANG_.call(null,p1__34965_SHARP_,name,value);
{
var G__34978 = seq__34972;
var G__34979 = chunk__34973;
var G__34980 = count__34974;
var G__34981 = (i__34975 + 1);
seq__34972 = G__34978;
chunk__34973 = G__34979;
count__34974 = G__34980;
i__34975 = G__34981;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34972);if(temp__4092__auto__)
{var seq__34972__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34972__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34972__$1);{
var G__34982 = cljs.core.chunk_rest.call(null,seq__34972__$1);
var G__34983 = c__14547__auto__;
var G__34984 = cljs.core.count.call(null,c__14547__auto__);
var G__34985 = 0;
seq__34972 = G__34982;
chunk__34973 = G__34983;
count__34974 = G__34984;
i__34975 = G__34985;
continue;
}
} else
{var vec__34977 = cljs.core.first.call(null,seq__34972__$1);var name = cljs.core.nth.call(null,vec__34977,0,null);var value = cljs.core.nth.call(null,vec__34977,1,null);domina.set_style_BANG_.call(null,p1__34965_SHARP_,name,value);
{
var G__34986 = cljs.core.next.call(null,seq__34972__$1);
var G__34987 = null;
var G__34988 = 0;
var G__34989 = 0;
seq__34972 = G__34986;
chunk__34973 = G__34987;
count__34974 = G__34988;
i__34975 = G__34989;
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
set_style.cljs$lang$applyTo = (function (arglist__34990){
var values = cljs.core.seq(arglist__34990);
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
remove_style.cljs$lang$applyTo = (function (arglist__34991){
var values = cljs.core.seq(arglist__34991);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__34992_SHARP_){return domina.set_data_BANG_.call(null,p1__34992_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__34993){
var ttime = cljs.core.first(arglist__34993);
var funcs = cljs.core.rest(arglist__34993);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__34995_SHARP_,p2__34994_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__34994_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__35020_35028 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__35021_35029 = null;var count__35022_35030 = 0;var i__35023_35031 = 0;while(true){
if((i__35023_35031 < count__35022_35030))
{var idx_35032 = cljs.core._nth.call(null,chunk__35021_35029,i__35023_35031);var attr_35033 = pnod.attributes.item(idx_35032);if(cljs.core.truth_(attr_35033.specified))
{attr_35033.value = rep_str.call(null,attr_35033.value);
} else
{}
{
var G__35034 = seq__35020_35028;
var G__35035 = chunk__35021_35029;
var G__35036 = count__35022_35030;
var G__35037 = (i__35023_35031 + 1);
seq__35020_35028 = G__35034;
chunk__35021_35029 = G__35035;
count__35022_35030 = G__35036;
i__35023_35031 = G__35037;
continue;
}
} else
{var temp__4092__auto___35038 = cljs.core.seq.call(null,seq__35020_35028);if(temp__4092__auto___35038)
{var seq__35020_35039__$1 = temp__4092__auto___35038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35020_35039__$1))
{var c__14547__auto___35040 = cljs.core.chunk_first.call(null,seq__35020_35039__$1);{
var G__35041 = cljs.core.chunk_rest.call(null,seq__35020_35039__$1);
var G__35042 = c__14547__auto___35040;
var G__35043 = cljs.core.count.call(null,c__14547__auto___35040);
var G__35044 = 0;
seq__35020_35028 = G__35041;
chunk__35021_35029 = G__35042;
count__35022_35030 = G__35043;
i__35023_35031 = G__35044;
continue;
}
} else
{var idx_35045 = cljs.core.first.call(null,seq__35020_35039__$1);var attr_35046 = pnod.attributes.item(idx_35045);if(cljs.core.truth_(attr_35046.specified))
{attr_35046.value = rep_str.call(null,attr_35046.value);
} else
{}
{
var G__35047 = cljs.core.next.call(null,seq__35020_35039__$1);
var G__35048 = null;
var G__35049 = 0;
var G__35050 = 0;
seq__35020_35028 = G__35047;
chunk__35021_35029 = G__35048;
count__35022_35030 = G__35049;
i__35023_35031 = G__35050;
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
{var seq__35024 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__35025 = null;var count__35026 = 0;var i__35027 = 0;while(true){
if((i__35027 < count__35026))
{var cnode = cljs.core._nth.call(null,chunk__35025,i__35027);rep_node.call(null,cnode);
{
var G__35051 = seq__35024;
var G__35052 = chunk__35025;
var G__35053 = count__35026;
var G__35054 = (i__35027 + 1);
seq__35024 = G__35051;
chunk__35025 = G__35052;
count__35026 = G__35053;
i__35027 = G__35054;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35024);if(temp__4092__auto__)
{var seq__35024__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35024__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__35024__$1);{
var G__35055 = cljs.core.chunk_rest.call(null,seq__35024__$1);
var G__35056 = c__14547__auto__;
var G__35057 = cljs.core.count.call(null,c__14547__auto__);
var G__35058 = 0;
seq__35024 = G__35055;
chunk__35025 = G__35056;
count__35026 = G__35057;
i__35027 = G__35058;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__35024__$1);rep_node.call(null,cnode);
{
var G__35059 = cljs.core.next.call(null,seq__35024__$1);
var G__35060 = null;
var G__35061 = 0;
var G__35062 = 0;
seq__35024 = G__35059;
chunk__35025 = G__35060;
count__35026 = G__35061;
i__35027 = G__35062;
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
{var vec__35072 = node_spec;var tag = cljs.core.nth.call(null,vec__35072,0,null);var vec__35073 = cljs.core.nthnext.call(null,vec__35072,1);var m = cljs.core.nth.call(null,vec__35073,0,null);var ms = cljs.core.nthnext.call(null,vec__35073,1);var more = vec__35073;var vec__35074 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__35074,0,null);var segments = cljs.core.nthnext.call(null,vec__35074,1);var id = cljs.core.some.call(null,((function (vec__35072,tag,vec__35073,m,ms,more,vec__35074,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__35072,tag,vec__35073,m,ms,more,vec__35074,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__35072,tag,vec__35073,m,ms,more,vec__35074,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__35072,tag,vec__35073,m,ms,more,vec__35074,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__35075_35081 = cljs.core.seq.call(null,attrs__$2);var chunk__35076_35082 = null;var count__35077_35083 = 0;var i__35078_35084 = 0;while(true){
if((i__35078_35084 < count__35077_35083))
{var vec__35079_35085 = cljs.core._nth.call(null,chunk__35076_35082,i__35078_35084);var key_35086 = cljs.core.nth.call(null,vec__35079_35085,0,null);var val_35087 = cljs.core.nth.call(null,vec__35079_35085,1,null);node.setAttribute(cljs.core.name.call(null,key_35086),val_35087);
{
var G__35088 = seq__35075_35081;
var G__35089 = chunk__35076_35082;
var G__35090 = count__35077_35083;
var G__35091 = (i__35078_35084 + 1);
seq__35075_35081 = G__35088;
chunk__35076_35082 = G__35089;
count__35077_35083 = G__35090;
i__35078_35084 = G__35091;
continue;
}
} else
{var temp__4092__auto___35092 = cljs.core.seq.call(null,seq__35075_35081);if(temp__4092__auto___35092)
{var seq__35075_35093__$1 = temp__4092__auto___35092;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35075_35093__$1))
{var c__14547__auto___35094 = cljs.core.chunk_first.call(null,seq__35075_35093__$1);{
var G__35095 = cljs.core.chunk_rest.call(null,seq__35075_35093__$1);
var G__35096 = c__14547__auto___35094;
var G__35097 = cljs.core.count.call(null,c__14547__auto___35094);
var G__35098 = 0;
seq__35075_35081 = G__35095;
chunk__35076_35082 = G__35096;
count__35077_35083 = G__35097;
i__35078_35084 = G__35098;
continue;
}
} else
{var vec__35080_35099 = cljs.core.first.call(null,seq__35075_35093__$1);var key_35100 = cljs.core.nth.call(null,vec__35080_35099,0,null);var val_35101 = cljs.core.nth.call(null,vec__35080_35099,1,null);node.setAttribute(cljs.core.name.call(null,key_35100),val_35101);
{
var G__35102 = cljs.core.next.call(null,seq__35075_35093__$1);
var G__35103 = null;
var G__35104 = 0;
var G__35105 = 0;
seq__35075_35081 = G__35102;
chunk__35076_35082 = G__35103;
count__35077_35083 = G__35104;
i__35078_35084 = G__35105;
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
return (function (p1__35106_SHARP_){return p1__35106_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__35107_SHARP_){return p1__35107_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__35109_SHARP_,p2__35108_SHARP_){var G__35112 = p2__35108_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__35112))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__35112))
{return enfocus.core.read_select_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__35112))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__35112))
{var G__35113 = p2__35108_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__35113))
{return enfocus.core.read_checked_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__35113))
{return enfocus.core.read_checked_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__35113))
{return enfocus.core.read_simple_input.call(null,p2__35108_SHARP_,p1__35109_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__35109_SHARP_;
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
{return p1__35109_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__35114_SHARP_){if((p1__35114_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__35114_SHARP_);
} else
{if((p1__35114_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__35114_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__35114_SHARP_))
{return create_sel_str.call(null,p1__35114_SHARP_);
} else
{if(typeof p1__35114_SHARP_ === 'string')
{return p1__35114_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__35125 = node;if(G__35125)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35125.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__35125.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35125);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35125);
}
} else
{return and__13811__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__35126 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__35126,0,null);var trans__$1 = cljs.core.nth.call(null,vec__35126,1,null);var seq__35127 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__35128 = null;var count__35129 = 0;var i__35130 = 0;while(true){
if((i__35130 < count__35129))
{var vec__35131 = cljs.core._nth.call(null,chunk__35128,i__35130);var sel = cljs.core.nth.call(null,vec__35131,0,null);var t = cljs.core.nth.call(null,vec__35131,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__35133 = seq__35127;
var G__35134 = chunk__35128;
var G__35135 = count__35129;
var G__35136 = (i__35130 + 1);
seq__35127 = G__35133;
chunk__35128 = G__35134;
count__35129 = G__35135;
i__35130 = G__35136;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35127);if(temp__4092__auto__)
{var seq__35127__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35127__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__35127__$1);{
var G__35137 = cljs.core.chunk_rest.call(null,seq__35127__$1);
var G__35138 = c__14547__auto__;
var G__35139 = cljs.core.count.call(null,c__14547__auto__);
var G__35140 = 0;
seq__35127 = G__35137;
chunk__35128 = G__35138;
count__35129 = G__35139;
i__35130 = G__35140;
continue;
}
} else
{var vec__35132 = cljs.core.first.call(null,seq__35127__$1);var sel = cljs.core.nth.call(null,vec__35132,0,null);var t = cljs.core.nth.call(null,vec__35132,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__35141 = cljs.core.next.call(null,seq__35127__$1);
var G__35142 = null;
var G__35143 = 0;
var G__35144 = 0;
seq__35127 = G__35141;
chunk__35128 = G__35142;
count__35129 = G__35143;
i__35130 = G__35144;
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
i_at.cljs$lang$applyTo = (function (arglist__35145){
var id_mask = cljs.core.first(arglist__35145);
arglist__35145 = cljs.core.next(arglist__35145);
var node = cljs.core.first(arglist__35145);
var trans = cljs.core.rest(arglist__35145);
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
at.cljs$lang$applyTo = (function (arglist__35146){
var node = cljs.core.first(arglist__35146);
var trans = cljs.core.rest(arglist__35146);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__35151 = node;if(G__35151)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35151.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__35151.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35151);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35151);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35152 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__35152,0,null);var trans__$1 = cljs.core.nth.call(null,vec__35152,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__35153){var vec__35154 = p__35153;var ky = cljs.core.nth.call(null,vec__35154,0,null);var sel = cljs.core.nth.call(null,vec__35154,1,null);var ext = cljs.core.nth.call(null,vec__35154,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__35155){
var node = cljs.core.first(arglist__35155);
var trans = cljs.core.rest(arglist__35155);
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