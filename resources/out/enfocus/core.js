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
enfocus.core.ISelector = (function (){var obj34639 = {};return obj34639;
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
enfocus.core.ITransform = (function (){var obj34641 = {};return obj34641;
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
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){return cljs.core.mapcat.call(null,(function (p1__34642_SHARP_){if(typeof p1__34642_SHARP_ === 'string')
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.dom.createTextNode(p1__34642_SHARP_)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return enfocus.core.nodes__GT_coll.call(null,p1__34642_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a element and	Returns the original object
*/
enfocus.core.style_set = (function style_set(obj,values){var seq__34649_34655 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));var chunk__34650_34656 = null;var count__34651_34657 = 0;var i__34652_34658 = 0;while(true){
if((i__34652_34658 < count__34651_34657))
{var vec__34653_34659 = cljs.core._nth.call(null,chunk__34650_34656,i__34652_34658);var attr_34660 = cljs.core.nth.call(null,vec__34653_34659,0,null);var value_34661 = cljs.core.nth.call(null,vec__34653_34659,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34660),value_34661);
{
var G__34662 = seq__34649_34655;
var G__34663 = chunk__34650_34656;
var G__34664 = count__34651_34657;
var G__34665 = (i__34652_34658 + 1);
seq__34649_34655 = G__34662;
chunk__34650_34656 = G__34663;
count__34651_34657 = G__34664;
i__34652_34658 = G__34665;
continue;
}
} else
{var temp__4092__auto___34666 = cljs.core.seq.call(null,seq__34649_34655);if(temp__4092__auto___34666)
{var seq__34649_34667__$1 = temp__4092__auto___34666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34649_34667__$1))
{var c__14547__auto___34668 = cljs.core.chunk_first.call(null,seq__34649_34667__$1);{
var G__34669 = cljs.core.chunk_rest.call(null,seq__34649_34667__$1);
var G__34670 = c__14547__auto___34668;
var G__34671 = cljs.core.count.call(null,c__14547__auto___34668);
var G__34672 = 0;
seq__34649_34655 = G__34669;
chunk__34650_34656 = G__34670;
count__34651_34657 = G__34671;
i__34652_34658 = G__34672;
continue;
}
} else
{var vec__34654_34673 = cljs.core.first.call(null,seq__34649_34667__$1);var attr_34674 = cljs.core.nth.call(null,vec__34654_34673,0,null);var value_34675 = cljs.core.nth.call(null,vec__34654_34673,1,null);goog.style.setStyle(obj,cljs.core.name.call(null,attr_34674),value_34675);
{
var G__34676 = cljs.core.next.call(null,seq__34649_34667__$1);
var G__34677 = null;
var G__34678 = 0;
var G__34679 = 0;
seq__34649_34655 = G__34676;
chunk__34650_34656 = G__34677;
count__34651_34657 = G__34678;
i__34652_34658 = G__34679;
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
enfocus.core.style_remove = (function style_remove(obj,values){var seq__34684 = cljs.core.seq.call(null,values);var chunk__34685 = null;var count__34686 = 0;var i__34687 = 0;while(true){
if((i__34687 < count__34686))
{var attr = cljs.core._nth.call(null,chunk__34685,i__34687);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34688 = seq__34684;
var G__34689 = chunk__34685;
var G__34690 = count__34686;
var G__34691 = (i__34687 + 1);
seq__34684 = G__34688;
chunk__34685 = G__34689;
count__34686 = G__34690;
i__34687 = G__34691;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34684);if(temp__4092__auto__)
{var seq__34684__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34684__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34684__$1);{
var G__34692 = cljs.core.chunk_rest.call(null,seq__34684__$1);
var G__34693 = c__14547__auto__;
var G__34694 = cljs.core.count.call(null,c__14547__auto__);
var G__34695 = 0;
seq__34684 = G__34692;
chunk__34685 = G__34693;
count__34686 = G__34694;
i__34687 = G__34695;
continue;
}
} else
{var attr = cljs.core.first.call(null,seq__34684__$1);if(cljs.core.truth_(goog.userAgent.IE))
{goog.style.setStyle(obj,cljs.core.name.call(null,attr),"");
} else
{obj.style.removeProperty(cljs.core.name.call(null,attr));
}
{
var G__34696 = cljs.core.next.call(null,seq__34684__$1);
var G__34697 = null;
var G__34698 = 0;
var G__34699 = 0;
seq__34684 = G__34696;
chunk__34685 = G__34697;
count__34686 = G__34698;
i__34687 = G__34699;
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
{var seq__34706_34712 = cljs.core.seq.call(null,ats);var chunk__34707_34713 = null;var count__34708_34714 = 0;var i__34709_34715 = 0;while(true){
if((i__34709_34715 < count__34708_34714))
{var vec__34710_34716 = cljs.core._nth.call(null,chunk__34707_34713,i__34709_34715);var k_34717 = cljs.core.nth.call(null,vec__34710_34716,0,null);var v_34718 = cljs.core.nth.call(null,vec__34710_34716,1,null);add_map_attrs.call(null,elem,k_34717,v_34718);
{
var G__34719 = seq__34706_34712;
var G__34720 = chunk__34707_34713;
var G__34721 = count__34708_34714;
var G__34722 = (i__34709_34715 + 1);
seq__34706_34712 = G__34719;
chunk__34707_34713 = G__34720;
count__34708_34714 = G__34721;
i__34709_34715 = G__34722;
continue;
}
} else
{var temp__4092__auto___34723 = cljs.core.seq.call(null,seq__34706_34712);if(temp__4092__auto___34723)
{var seq__34706_34724__$1 = temp__4092__auto___34723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34706_34724__$1))
{var c__14547__auto___34725 = cljs.core.chunk_first.call(null,seq__34706_34724__$1);{
var G__34726 = cljs.core.chunk_rest.call(null,seq__34706_34724__$1);
var G__34727 = c__14547__auto___34725;
var G__34728 = cljs.core.count.call(null,c__14547__auto___34725);
var G__34729 = 0;
seq__34706_34712 = G__34726;
chunk__34707_34713 = G__34727;
count__34708_34714 = G__34728;
i__34709_34715 = G__34729;
continue;
}
} else
{var vec__34711_34730 = cljs.core.first.call(null,seq__34706_34724__$1);var k_34731 = cljs.core.nth.call(null,vec__34711_34730,0,null);var v_34732 = cljs.core.nth.call(null,vec__34711_34730,1,null);add_map_attrs.call(null,elem,k_34731,v_34732);
{
var G__34733 = cljs.core.next.call(null,seq__34706_34724__$1);
var G__34734 = null;
var G__34735 = 0;
var G__34736 = 0;
seq__34706_34712 = G__34733;
chunk__34707_34713 = G__34734;
count__34708_34714 = G__34735;
i__34709_34715 = G__34736;
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
var seq__34741_34745 = cljs.core.seq.call(null,domina.nodes.call(null,child));var chunk__34742_34746 = null;var count__34743_34747 = 0;var i__34744_34748 = 0;while(true){
if((i__34744_34748 < count__34743_34747))
{var node_34749 = cljs.core._nth.call(null,chunk__34742_34746,i__34744_34748);goog.dom.appendChild(div,node_34749);
{
var G__34750 = seq__34741_34745;
var G__34751 = chunk__34742_34746;
var G__34752 = count__34743_34747;
var G__34753 = (i__34744_34748 + 1);
seq__34741_34745 = G__34750;
chunk__34742_34746 = G__34751;
count__34743_34747 = G__34752;
i__34744_34748 = G__34753;
continue;
}
} else
{var temp__4092__auto___34754 = cljs.core.seq.call(null,seq__34741_34745);if(temp__4092__auto___34754)
{var seq__34741_34755__$1 = temp__4092__auto___34754;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34741_34755__$1))
{var c__14547__auto___34756 = cljs.core.chunk_first.call(null,seq__34741_34755__$1);{
var G__34757 = cljs.core.chunk_rest.call(null,seq__34741_34755__$1);
var G__34758 = c__14547__auto___34756;
var G__34759 = cljs.core.count.call(null,c__14547__auto___34756);
var G__34760 = 0;
seq__34741_34745 = G__34757;
chunk__34742_34746 = G__34758;
count__34743_34747 = G__34759;
i__34744_34748 = G__34760;
continue;
}
} else
{var node_34761 = cljs.core.first.call(null,seq__34741_34755__$1);goog.dom.appendChild(div,node_34761);
{
var G__34762 = cljs.core.next.call(null,seq__34741_34755__$1);
var G__34763 = null;
var G__34764 = 0;
var G__34765 = 0;
seq__34741_34745 = G__34762;
chunk__34742_34746 = G__34763;
count__34743_34747 = G__34764;
i__34744_34748 = G__34765;
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
enfocus.core.reset_ids = (function reset_ids(sym,nod){var id_nodes = enfocus.core.css_select.call(null,nod,"*[id]");var nod_col = enfocus.core.nodes__GT_coll.call(null,id_nodes);return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34766_SHARP_){var id = p1__34766_SHARP_.getAttribute("id");var rid = id.replace(sym,"");return p1__34766_SHARP_.setAttribute("id",rid);
}),nod_col));
});
/**
* loads a remote file into the cache, and masks the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri,dom_key,id_mask){if((cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,dom_key) == null))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req = (new goog.net.XhrIo());var callback = ((function (req){
return (function (req__$1){var text = req__$1.getResponseText();var vec__34768 = enfocus.core.replace_ids.call(null,id_mask,text);var sym = cljs.core.nth.call(null,vec__34768,0,null);var txt = cljs.core.nth.call(null,vec__34768,1,null);return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,dom_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,txt], null));
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
var seq__34773_34777 = cljs.core.seq.call(null,dfa);var chunk__34774_34778 = null;var count__34775_34779 = 0;var i__34776_34780 = 0;while(true){
if((i__34776_34780 < count__34775_34779))
{var df_34781 = cljs.core._nth.call(null,chunk__34774_34778,i__34776_34780);goog.dom.append(frag,df_34781);
{
var G__34782 = seq__34773_34777;
var G__34783 = chunk__34774_34778;
var G__34784 = count__34775_34779;
var G__34785 = (i__34776_34780 + 1);
seq__34773_34777 = G__34782;
chunk__34774_34778 = G__34783;
count__34775_34779 = G__34784;
i__34776_34780 = G__34785;
continue;
}
} else
{var temp__4092__auto___34786 = cljs.core.seq.call(null,seq__34773_34777);if(temp__4092__auto___34786)
{var seq__34773_34787__$1 = temp__4092__auto___34786;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34773_34787__$1))
{var c__14547__auto___34788 = cljs.core.chunk_first.call(null,seq__34773_34787__$1);{
var G__34789 = cljs.core.chunk_rest.call(null,seq__34773_34787__$1);
var G__34790 = c__14547__auto___34788;
var G__34791 = cljs.core.count.call(null,c__14547__auto___34788);
var G__34792 = 0;
seq__34773_34777 = G__34789;
chunk__34774_34778 = G__34790;
count__34775_34779 = G__34791;
i__34776_34780 = G__34792;
continue;
}
} else
{var df_34793 = cljs.core.first.call(null,seq__34773_34787__$1);goog.dom.append(frag,df_34793);
{
var G__34794 = cljs.core.next.call(null,seq__34773_34787__$1);
var G__34795 = null;
var G__34796 = 0;
var G__34797 = 0;
seq__34773_34777 = G__34794;
chunk__34774_34778 = G__34795;
count__34775_34779 = G__34796;
i__34776_34780 = G__34797;
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
{var vec__34800 = enfocus.core.get_cached_dom.call(null,uri);var sym = cljs.core.nth.call(null,vec__34800,0,null);var tdom = cljs.core.nth.call(null,vec__34800,1,null);var dom = enfocus.core.create_hidden_dom.call(null,tdom);var tsnip = domina.nodes.call(null,enfocus.core.css_select.call(null,sym,dom,sel));var html_snip = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__34800,sym,tdom,dom,tsnip){
return (function (p1__34798_SHARP_){return p1__34798_SHARP_.outerHTML;
});})(vec__34800,sym,tdom,dom,tsnip))
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
});if(typeof enfocus.core.t34804 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34804 = (function (trans,func,extr_multi_node,meta34805){
this.trans = trans;
this.func = func;
this.extr_multi_node = extr_multi_node;
this.meta34805 = meta34805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34804.cljs$lang$type = true;
enfocus.core.t34804.cljs$lang$ctorStr = "enfocus.core/t34804";
enfocus.core.t34804.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34804");
});
enfocus.core.t34804.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34804.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34804.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34806){var self__ = this;
var _34806__$1 = this;return self__.meta34805;
});
enfocus.core.t34804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34806,meta34805__$1){var self__ = this;
var _34806__$1 = this;return (new enfocus.core.t34804(self__.trans,self__.func,self__.extr_multi_node,meta34805__$1));
});
enfocus.core.__GT_t34804 = (function __GT_t34804(trans__$1,func__$1,extr_multi_node__$1,meta34805){return (new enfocus.core.t34804(trans__$1,func__$1,extr_multi_node__$1,meta34805));
});
}
return (new enfocus.core.t34804(trans,func,extr_multi_node,null));
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
});if(typeof enfocus.core.t34814 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34814 = (function (trans,func,multi_node_chain,meta34815){
this.trans = trans;
this.func = func;
this.multi_node_chain = multi_node_chain;
this.meta34815 = meta34815;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34814.cljs$lang$type = true;
enfocus.core.t34814.cljs$lang$ctorStr = "enfocus.core/t34814";
enfocus.core.t34814.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34814");
});
enfocus.core.t34814.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34814.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34814.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34814.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34816){var self__ = this;
var _34816__$1 = this;return self__.meta34815;
});
enfocus.core.t34814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34816,meta34815__$1){var self__ = this;
var _34816__$1 = this;return (new enfocus.core.t34814(self__.trans,self__.func,self__.multi_node_chain,meta34815__$1));
});
enfocus.core.__GT_t34814 = (function __GT_t34814(trans__$1,func__$1,multi_node_chain__$1,meta34815){return (new enfocus.core.t34814(trans__$1,func__$1,multi_node_chain__$1,meta34815));
});
}
return (new enfocus.core.t34814(trans,func,multi_node_chain,null));
});
var multi_node_chain__2 = (function (values,func){var trans = (function (nodes,chain){var vnodes = cljs.core.mapcat.call(null,(function (p1__34807_SHARP_){return domina.nodes.call(null,p1__34807_SHARP_);
}),values);var val = func.call(null,nodes,vnodes);if(cljs.core.truth_(chain))
{return enfocus.core.apply_transform.call(null,chain,nodes);
} else
{return val;
}
});if(typeof enfocus.core.t34817 !== 'undefined')
{} else
{
/**
* @constructor
*/
enfocus.core.t34817 = (function (trans,func,values,multi_node_chain,meta34818){
this.trans = trans;
this.func = func;
this.values = values;
this.multi_node_chain = multi_node_chain;
this.meta34818 = meta34818;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
enfocus.core.t34817.cljs$lang$type = true;
enfocus.core.t34817.cljs$lang$ctorStr = "enfocus.core/t34817";
enfocus.core.t34817.cljs$lang$ctorPrWriter = (function (this__14367__auto__,writer__14368__auto__,opt__14369__auto__){return cljs.core._write.call(null,writer__14368__auto__,"enfocus.core/t34817");
});
enfocus.core.t34817.prototype.enfocus$core$ITransform$ = true;
enfocus.core.t34817.prototype.enfocus$core$ITransform$apply_transform$arity$2 = (function (_,nodes){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,null);
});
enfocus.core.t34817.prototype.enfocus$core$ITransform$apply_transform$arity$3 = (function (_,nodes,chain){var self__ = this;
var ___$1 = this;return self__.trans.call(null,nodes,chain);
});
enfocus.core.t34817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34819){var self__ = this;
var _34819__$1 = this;return self__.meta34818;
});
enfocus.core.t34817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34819,meta34818__$1){var self__ = this;
var _34819__$1 = this;return (new enfocus.core.t34817(self__.trans,self__.func,self__.values,self__.multi_node_chain,meta34818__$1));
});
enfocus.core.__GT_t34817 = (function __GT_t34817(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34818){return (new enfocus.core.t34817(trans__$1,func__$1,values__$1,multi_node_chain__$1,meta34818));
});
}
return (new enfocus.core.t34817(trans,func,values,multi_node_chain,null));
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
var content__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34820_SHARP_,p2__34821_SHARP_){domina.destroy_children_BANG_.call(null,p1__34820_SHARP_);
return domina.append_BANG_.call(null,p1__34820_SHARP_,p2__34821_SHARP_);
}));
};
var content = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return content__delegate.call(this,values);};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__34822){
var values = cljs.core.seq(arglist__34822);
return content__delegate(values);
});
content.cljs$core$IFn$_invoke$arity$variadic = content__delegate;
return content;
})()
;
/**
* Replaces the content of the element with the dom structure represented by the html string passed
*/
enfocus.core.html_content = (function html_content(txt){return enfocus.core.multi_node_chain.call(null,(function (p1__34823_SHARP_){return domina.set_html_BANG_.call(null,p1__34823_SHARP_,txt);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34824_SHARP_){var seq__34831 = cljs.core.seq.call(null,pairs);var chunk__34832 = null;var count__34833 = 0;var i__34834 = 0;while(true){
if((i__34834 < count__34833))
{var vec__34835 = cljs.core._nth.call(null,chunk__34832,i__34834);var name = cljs.core.nth.call(null,vec__34835,0,null);var value = cljs.core.nth.call(null,vec__34835,1,null);domina.set_attr_BANG_.call(null,p1__34824_SHARP_,name,value);
{
var G__34837 = seq__34831;
var G__34838 = chunk__34832;
var G__34839 = count__34833;
var G__34840 = (i__34834 + 1);
seq__34831 = G__34837;
chunk__34832 = G__34838;
count__34833 = G__34839;
i__34834 = G__34840;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34831);if(temp__4092__auto__)
{var seq__34831__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34831__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34831__$1);{
var G__34841 = cljs.core.chunk_rest.call(null,seq__34831__$1);
var G__34842 = c__14547__auto__;
var G__34843 = cljs.core.count.call(null,c__14547__auto__);
var G__34844 = 0;
seq__34831 = G__34841;
chunk__34832 = G__34842;
count__34833 = G__34843;
i__34834 = G__34844;
continue;
}
} else
{var vec__34836 = cljs.core.first.call(null,seq__34831__$1);var name = cljs.core.nth.call(null,vec__34836,0,null);var value = cljs.core.nth.call(null,vec__34836,1,null);domina.set_attr_BANG_.call(null,p1__34824_SHARP_,name,value);
{
var G__34845 = cljs.core.next.call(null,seq__34831__$1);
var G__34846 = null;
var G__34847 = 0;
var G__34848 = 0;
seq__34831 = G__34845;
chunk__34832 = G__34846;
count__34833 = G__34847;
i__34834 = G__34848;
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
set_attr.cljs$lang$applyTo = (function (arglist__34849){
var values = cljs.core.seq(arglist__34849);
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
var remove_attr__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34850_SHARP_){var seq__34855 = cljs.core.seq.call(null,values);var chunk__34856 = null;var count__34857 = 0;var i__34858 = 0;while(true){
if((i__34858 < count__34857))
{var name = cljs.core._nth.call(null,chunk__34856,i__34858);domina.remove_attr_BANG_.call(null,p1__34850_SHARP_,name);
{
var G__34859 = seq__34855;
var G__34860 = chunk__34856;
var G__34861 = count__34857;
var G__34862 = (i__34858 + 1);
seq__34855 = G__34859;
chunk__34856 = G__34860;
count__34857 = G__34861;
i__34858 = G__34862;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34855);if(temp__4092__auto__)
{var seq__34855__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34855__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34855__$1);{
var G__34863 = cljs.core.chunk_rest.call(null,seq__34855__$1);
var G__34864 = c__14547__auto__;
var G__34865 = cljs.core.count.call(null,c__14547__auto__);
var G__34866 = 0;
seq__34855 = G__34863;
chunk__34856 = G__34864;
count__34857 = G__34865;
i__34858 = G__34866;
continue;
}
} else
{var name = cljs.core.first.call(null,seq__34855__$1);domina.remove_attr_BANG_.call(null,p1__34850_SHARP_,name);
{
var G__34867 = cljs.core.next.call(null,seq__34855__$1);
var G__34868 = null;
var G__34869 = 0;
var G__34870 = 0;
seq__34855 = G__34867;
chunk__34856 = G__34868;
count__34857 = G__34869;
i__34858 = G__34870;
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
remove_attr.cljs$lang$applyTo = (function (arglist__34871){
var values = cljs.core.seq(arglist__34871);
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
var set_prop__delegate = function (forms){return (function (node){var h = cljs.core.mapcat.call(null,(function (p__34874){var vec__34875 = p__34874;var n = cljs.core.nth.call(null,vec__34875,0,null);var v = cljs.core.nth.call(null,vec__34875,1,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,v),cljs.core.name.call(null,n));
}),cljs.core.partition.call(null,2,forms));return goog.dom.setProperties(node,cljs.core.apply.call(null,cljs.core.js_obj,h));
});
};
var set_prop = function (var_args){
var forms = null;if (arguments.length > 0) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_prop__delegate.call(this,forms);};
set_prop.cljs$lang$maxFixedArity = 0;
set_prop.cljs$lang$applyTo = (function (arglist__34876){
var forms = cljs.core.seq(arglist__34876);
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
var add_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34877_SHARP_){var seq__34882 = cljs.core.seq.call(null,values);var chunk__34883 = null;var count__34884 = 0;var i__34885 = 0;while(true){
if((i__34885 < count__34884))
{var val = cljs.core._nth.call(null,chunk__34883,i__34885);domina.add_class_BANG_.call(null,p1__34877_SHARP_,val);
{
var G__34886 = seq__34882;
var G__34887 = chunk__34883;
var G__34888 = count__34884;
var G__34889 = (i__34885 + 1);
seq__34882 = G__34886;
chunk__34883 = G__34887;
count__34884 = G__34888;
i__34885 = G__34889;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34882);if(temp__4092__auto__)
{var seq__34882__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34882__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34882__$1);{
var G__34890 = cljs.core.chunk_rest.call(null,seq__34882__$1);
var G__34891 = c__14547__auto__;
var G__34892 = cljs.core.count.call(null,c__14547__auto__);
var G__34893 = 0;
seq__34882 = G__34890;
chunk__34883 = G__34891;
count__34884 = G__34892;
i__34885 = G__34893;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34882__$1);domina.add_class_BANG_.call(null,p1__34877_SHARP_,val);
{
var G__34894 = cljs.core.next.call(null,seq__34882__$1);
var G__34895 = null;
var G__34896 = 0;
var G__34897 = 0;
seq__34882 = G__34894;
chunk__34883 = G__34895;
count__34884 = G__34896;
i__34885 = G__34897;
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
add_class.cljs$lang$applyTo = (function (arglist__34898){
var values = cljs.core.seq(arglist__34898);
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
var remove_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34899_SHARP_){var seq__34904 = cljs.core.seq.call(null,values);var chunk__34905 = null;var count__34906 = 0;var i__34907 = 0;while(true){
if((i__34907 < count__34906))
{var val = cljs.core._nth.call(null,chunk__34905,i__34907);domina.remove_class_BANG_.call(null,p1__34899_SHARP_,val);
{
var G__34908 = seq__34904;
var G__34909 = chunk__34905;
var G__34910 = count__34906;
var G__34911 = (i__34907 + 1);
seq__34904 = G__34908;
chunk__34905 = G__34909;
count__34906 = G__34910;
i__34907 = G__34911;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34904);if(temp__4092__auto__)
{var seq__34904__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34904__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34904__$1);{
var G__34912 = cljs.core.chunk_rest.call(null,seq__34904__$1);
var G__34913 = c__14547__auto__;
var G__34914 = cljs.core.count.call(null,c__14547__auto__);
var G__34915 = 0;
seq__34904 = G__34912;
chunk__34905 = G__34913;
count__34906 = G__34914;
i__34907 = G__34915;
continue;
}
} else
{var val = cljs.core.first.call(null,seq__34904__$1);domina.remove_class_BANG_.call(null,p1__34899_SHARP_,val);
{
var G__34916 = cljs.core.next.call(null,seq__34904__$1);
var G__34917 = null;
var G__34918 = 0;
var G__34919 = 0;
seq__34904 = G__34916;
chunk__34905 = G__34917;
count__34906 = G__34918;
i__34907 = G__34919;
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
remove_class.cljs$lang$applyTo = (function (arglist__34920){
var values = cljs.core.seq(arglist__34920);
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
var set_class__delegate = function (values){return enfocus.core.multi_node_chain.call(null,(function (p1__34921_SHARP_){return domina.set_classes_BANG_.call(null,p1__34921_SHARP_,values);
}));
};
var set_class = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_class__delegate.call(this,values);};
set_class.cljs$lang$maxFixedArity = 0;
set_class.cljs$lang$applyTo = (function (arglist__34922){
var values = cljs.core.seq(arglist__34922);
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
var do__GT___delegate = function (forms){return (function (pnod){var seq__34927 = cljs.core.seq.call(null,forms);var chunk__34928 = null;var count__34929 = 0;var i__34930 = 0;while(true){
if((i__34930 < count__34929))
{var fun = cljs.core._nth.call(null,chunk__34928,i__34930);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34931 = seq__34927;
var G__34932 = chunk__34928;
var G__34933 = count__34929;
var G__34934 = (i__34930 + 1);
seq__34927 = G__34931;
chunk__34928 = G__34932;
count__34929 = G__34933;
i__34930 = G__34934;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34927);if(temp__4092__auto__)
{var seq__34927__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34927__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34927__$1);{
var G__34935 = cljs.core.chunk_rest.call(null,seq__34927__$1);
var G__34936 = c__14547__auto__;
var G__34937 = cljs.core.count.call(null,c__14547__auto__);
var G__34938 = 0;
seq__34927 = G__34935;
chunk__34928 = G__34936;
count__34929 = G__34937;
i__34930 = G__34938;
continue;
}
} else
{var fun = cljs.core.first.call(null,seq__34927__$1);enfocus.core.apply_transform.call(null,fun,pnod);
{
var G__34939 = cljs.core.next.call(null,seq__34927__$1);
var G__34940 = null;
var G__34941 = 0;
var G__34942 = 0;
seq__34927 = G__34939;
chunk__34928 = G__34940;
count__34929 = G__34941;
i__34930 = G__34942;
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
do__GT_.cljs$lang$applyTo = (function (arglist__34943){
var forms = cljs.core.seq(arglist__34943);
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
var append__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34944_SHARP_,p2__34945_SHARP_){return domina.append_BANG_.call(null,p1__34944_SHARP_,p2__34945_SHARP_);
}));
};
var append = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return append__delegate.call(this,values);};
append.cljs$lang$maxFixedArity = 0;
append.cljs$lang$applyTo = (function (arglist__34946){
var values = cljs.core.seq(arglist__34946);
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
var prepend__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34947_SHARP_,p2__34948_SHARP_){return domina.prepend_BANG_.call(null,p1__34947_SHARP_,p2__34948_SHARP_);
}));
};
var prepend = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return prepend__delegate.call(this,values);};
prepend.cljs$lang$maxFixedArity = 0;
prepend.cljs$lang$applyTo = (function (arglist__34949){
var values = cljs.core.seq(arglist__34949);
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
var before__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34950_SHARP_,p2__34951_SHARP_){return domina.insert_before_BANG_.call(null,p1__34950_SHARP_,p2__34951_SHARP_);
}));
};
var before = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return before__delegate.call(this,values);};
before.cljs$lang$maxFixedArity = 0;
before.cljs$lang$applyTo = (function (arglist__34952){
var values = cljs.core.seq(arglist__34952);
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
var after__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34953_SHARP_,p2__34954_SHARP_){return domina.insert_after_BANG_.call(null,p1__34953_SHARP_,p2__34954_SHARP_);
}));
};
var after = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return after__delegate.call(this,values);};
after.cljs$lang$maxFixedArity = 0;
after.cljs$lang$applyTo = (function (arglist__34955){
var values = cljs.core.seq(arglist__34955);
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
var substitute__delegate = function (values){return enfocus.core.multi_node_chain.call(null,values,(function (p1__34956_SHARP_,p2__34957_SHARP_){return domina.swap_content_BANG_.call(null,p1__34956_SHARP_,p2__34957_SHARP_);
}));
};
var substitute = function (var_args){
var values = null;if (arguments.length > 0) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return substitute__delegate.call(this,values);};
substitute.cljs$lang$maxFixedArity = 0;
substitute.cljs$lang$applyTo = (function (arglist__34958){
var values = cljs.core.seq(arglist__34958);
return substitute__delegate(values);
});
substitute.cljs$core$IFn$_invoke$arity$variadic = substitute__delegate;
return substitute;
})()
;
/**
* removes the selected nodes from the dom
*/
enfocus.core.remove_node = (function remove_node(){return enfocus.core.multi_node_chain.call(null,(function (p1__34959_SHARP_){return domina.detach_BANG_.call(null,p1__34959_SHARP_);
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
var set_style__delegate = function (values){var pairs = cljs.core.partition.call(null,2,values);return enfocus.core.multi_node_chain.call(null,(function (p1__34960_SHARP_){var seq__34967 = cljs.core.seq.call(null,pairs);var chunk__34968 = null;var count__34969 = 0;var i__34970 = 0;while(true){
if((i__34970 < count__34969))
{var vec__34971 = cljs.core._nth.call(null,chunk__34968,i__34970);var name = cljs.core.nth.call(null,vec__34971,0,null);var value = cljs.core.nth.call(null,vec__34971,1,null);domina.set_style_BANG_.call(null,p1__34960_SHARP_,name,value);
{
var G__34973 = seq__34967;
var G__34974 = chunk__34968;
var G__34975 = count__34969;
var G__34976 = (i__34970 + 1);
seq__34967 = G__34973;
chunk__34968 = G__34974;
count__34969 = G__34975;
i__34970 = G__34976;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34967);if(temp__4092__auto__)
{var seq__34967__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34967__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34967__$1);{
var G__34977 = cljs.core.chunk_rest.call(null,seq__34967__$1);
var G__34978 = c__14547__auto__;
var G__34979 = cljs.core.count.call(null,c__14547__auto__);
var G__34980 = 0;
seq__34967 = G__34977;
chunk__34968 = G__34978;
count__34969 = G__34979;
i__34970 = G__34980;
continue;
}
} else
{var vec__34972 = cljs.core.first.call(null,seq__34967__$1);var name = cljs.core.nth.call(null,vec__34972,0,null);var value = cljs.core.nth.call(null,vec__34972,1,null);domina.set_style_BANG_.call(null,p1__34960_SHARP_,name,value);
{
var G__34981 = cljs.core.next.call(null,seq__34967__$1);
var G__34982 = null;
var G__34983 = 0;
var G__34984 = 0;
seq__34967 = G__34981;
chunk__34968 = G__34982;
count__34969 = G__34983;
i__34970 = G__34984;
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
set_style.cljs$lang$applyTo = (function (arglist__34985){
var values = cljs.core.seq(arglist__34985);
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
remove_style.cljs$lang$applyTo = (function (arglist__34986){
var values = cljs.core.seq(arglist__34986);
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
enfocus.core.set_data = (function set_data(ky,val){return enfocus.core.multi_node_chain.call(null,(function (p1__34987_SHARP_){return domina.set_data_BANG_.call(null,p1__34987_SHARP_,ky,val);
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
delay.cljs$lang$applyTo = (function (arglist__34988){
var ttime = cljs.core.first(arglist__34988);
var funcs = cljs.core.rest(arglist__34988);
return delay__delegate(ttime,funcs);
});
delay.cljs$core$IFn$_invoke$arity$variadic = delay__delegate;
return delay;
})()
;
/**
* replaces entries like the following ${var1} in attributes and text
*/
enfocus.core.replace_vars = (function replace_vars(vars){var rep_str = (function rep_str(text){return clojure.string.replace.call(null,text,/\$\{\s*(\S+)\s*}/,(function (p1__34990_SHARP_,p2__34989_SHARP_){return vars.call(null,cljs.core.keyword.call(null,p2__34989_SHARP_));
}));
});
return (function rep_node(pnod){if(cljs.core.truth_(pnod.attributes))
{var seq__35015_35023 = cljs.core.seq.call(null,cljs.core.range.call(null,pnod.attributes.length));var chunk__35016_35024 = null;var count__35017_35025 = 0;var i__35018_35026 = 0;while(true){
if((i__35018_35026 < count__35017_35025))
{var idx_35027 = cljs.core._nth.call(null,chunk__35016_35024,i__35018_35026);var attr_35028 = pnod.attributes.item(idx_35027);if(cljs.core.truth_(attr_35028.specified))
{attr_35028.value = rep_str.call(null,attr_35028.value);
} else
{}
{
var G__35029 = seq__35015_35023;
var G__35030 = chunk__35016_35024;
var G__35031 = count__35017_35025;
var G__35032 = (i__35018_35026 + 1);
seq__35015_35023 = G__35029;
chunk__35016_35024 = G__35030;
count__35017_35025 = G__35031;
i__35018_35026 = G__35032;
continue;
}
} else
{var temp__4092__auto___35033 = cljs.core.seq.call(null,seq__35015_35023);if(temp__4092__auto___35033)
{var seq__35015_35034__$1 = temp__4092__auto___35033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35015_35034__$1))
{var c__14547__auto___35035 = cljs.core.chunk_first.call(null,seq__35015_35034__$1);{
var G__35036 = cljs.core.chunk_rest.call(null,seq__35015_35034__$1);
var G__35037 = c__14547__auto___35035;
var G__35038 = cljs.core.count.call(null,c__14547__auto___35035);
var G__35039 = 0;
seq__35015_35023 = G__35036;
chunk__35016_35024 = G__35037;
count__35017_35025 = G__35038;
i__35018_35026 = G__35039;
continue;
}
} else
{var idx_35040 = cljs.core.first.call(null,seq__35015_35034__$1);var attr_35041 = pnod.attributes.item(idx_35040);if(cljs.core.truth_(attr_35041.specified))
{attr_35041.value = rep_str.call(null,attr_35041.value);
} else
{}
{
var G__35042 = cljs.core.next.call(null,seq__35015_35034__$1);
var G__35043 = null;
var G__35044 = 0;
var G__35045 = 0;
seq__35015_35023 = G__35042;
chunk__35016_35024 = G__35043;
count__35017_35025 = G__35044;
i__35018_35026 = G__35045;
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
{var seq__35019 = cljs.core.seq.call(null,enfocus.core.nodes__GT_coll.call(null,pnod.childNodes));var chunk__35020 = null;var count__35021 = 0;var i__35022 = 0;while(true){
if((i__35022 < count__35021))
{var cnode = cljs.core._nth.call(null,chunk__35020,i__35022);rep_node.call(null,cnode);
{
var G__35046 = seq__35019;
var G__35047 = chunk__35020;
var G__35048 = count__35021;
var G__35049 = (i__35022 + 1);
seq__35019 = G__35046;
chunk__35020 = G__35047;
count__35021 = G__35048;
i__35022 = G__35049;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35019);if(temp__4092__auto__)
{var seq__35019__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35019__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__35019__$1);{
var G__35050 = cljs.core.chunk_rest.call(null,seq__35019__$1);
var G__35051 = c__14547__auto__;
var G__35052 = cljs.core.count.call(null,c__14547__auto__);
var G__35053 = 0;
seq__35019 = G__35050;
chunk__35020 = G__35051;
count__35021 = G__35052;
i__35022 = G__35053;
continue;
}
} else
{var cnode = cljs.core.first.call(null,seq__35019__$1);rep_node.call(null,cnode);
{
var G__35054 = cljs.core.next.call(null,seq__35019__$1);
var G__35055 = null;
var G__35056 = 0;
var G__35057 = 0;
seq__35019 = G__35054;
chunk__35020 = G__35055;
count__35021 = G__35056;
i__35022 = G__35057;
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
{var vec__35067 = node_spec;var tag = cljs.core.nth.call(null,vec__35067,0,null);var vec__35068 = cljs.core.nthnext.call(null,vec__35067,1);var m = cljs.core.nth.call(null,vec__35068,0,null);var ms = cljs.core.nthnext.call(null,vec__35068,1);var more = vec__35068;var vec__35069 = cljs.core.name.call(null,tag).split(/(?=[#.])/);var tag_name = cljs.core.nth.call(null,vec__35069,0,null);var segments = cljs.core.nthnext.call(null,vec__35069,1);var id = cljs.core.some.call(null,((function (vec__35067,tag,vec__35068,m,ms,more,vec__35069,tag_name,segments){
return (function (seg){if(cljs.core._EQ_.call(null,"#",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__35067,tag,vec__35068,m,ms,more,vec__35069,tag_name,segments))
,segments);var classes = cljs.core.keep.call(null,((function (vec__35067,tag,vec__35068,m,ms,more,vec__35069,tag_name,segments,id){
return (function (seg){if(cljs.core._EQ_.call(null,".",seg.charAt(0)))
{return cljs.core.subs.call(null,seg,1);
} else
{return null;
}
});})(vec__35067,tag,vec__35068,m,ms,more,vec__35069,tag_name,segments,id))
,segments);var attrs = ((cljs.core.map_QMARK_.call(null,m))?m:cljs.core.PersistentArrayMap.EMPTY);var attrs__$1 = (cljs.core.truth_(id)?cljs.core.assoc.call(null,attrs,new cljs.core.Keyword(null,"id","id",1013907597),id):attrs);var attrs__$2 = ((!(cljs.core.empty_QMARK_.call(null,classes)))?cljs.core.assoc.call(null,attrs__$1,new cljs.core.Keyword(null,"class","class",1108647146),cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",classes))):attrs__$1);var content = cljs.core.flatten.call(null,cljs.core.map.call(null,html,((cljs.core.map_QMARK_.call(null,m))?ms:more)));var node = document.createElement(tag_name);var seq__35070_35076 = cljs.core.seq.call(null,attrs__$2);var chunk__35071_35077 = null;var count__35072_35078 = 0;var i__35073_35079 = 0;while(true){
if((i__35073_35079 < count__35072_35078))
{var vec__35074_35080 = cljs.core._nth.call(null,chunk__35071_35077,i__35073_35079);var key_35081 = cljs.core.nth.call(null,vec__35074_35080,0,null);var val_35082 = cljs.core.nth.call(null,vec__35074_35080,1,null);node.setAttribute(cljs.core.name.call(null,key_35081),val_35082);
{
var G__35083 = seq__35070_35076;
var G__35084 = chunk__35071_35077;
var G__35085 = count__35072_35078;
var G__35086 = (i__35073_35079 + 1);
seq__35070_35076 = G__35083;
chunk__35071_35077 = G__35084;
count__35072_35078 = G__35085;
i__35073_35079 = G__35086;
continue;
}
} else
{var temp__4092__auto___35087 = cljs.core.seq.call(null,seq__35070_35076);if(temp__4092__auto___35087)
{var seq__35070_35088__$1 = temp__4092__auto___35087;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35070_35088__$1))
{var c__14547__auto___35089 = cljs.core.chunk_first.call(null,seq__35070_35088__$1);{
var G__35090 = cljs.core.chunk_rest.call(null,seq__35070_35088__$1);
var G__35091 = c__14547__auto___35089;
var G__35092 = cljs.core.count.call(null,c__14547__auto___35089);
var G__35093 = 0;
seq__35070_35076 = G__35090;
chunk__35071_35077 = G__35091;
count__35072_35078 = G__35092;
i__35073_35079 = G__35093;
continue;
}
} else
{var vec__35075_35094 = cljs.core.first.call(null,seq__35070_35088__$1);var key_35095 = cljs.core.nth.call(null,vec__35075_35094,0,null);var val_35096 = cljs.core.nth.call(null,vec__35075_35094,1,null);node.setAttribute(cljs.core.name.call(null,key_35095),val_35096);
{
var G__35097 = cljs.core.next.call(null,seq__35070_35088__$1);
var G__35098 = null;
var G__35099 = 0;
var G__35100 = 0;
seq__35070_35076 = G__35097;
chunk__35071_35077 = G__35098;
count__35072_35078 = G__35099;
i__35073_35079 = G__35100;
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
return (function (p1__35101_SHARP_){return p1__35101_SHARP_.selected;
});})(nm,onodes))
,onodes);return enfocus.core.merge_form_val.call(null,col,nm,cljs.core.map.call(null,(function (p1__35102_SHARP_){return p1__35102_SHARP_.value;
}),opts));
} else
{return col;
}
});
/**
* returns a map of the form values tied to name of input fields.
* {:name1 'value1' name2 ('select1' 'select2')}
*/
enfocus.core.read_form = (function read_form(){return enfocus.core.extr_multi_node.call(null,(function (node){var inputs = node.elements;return cljs.core.reduce.call(null,(function (p1__35104_SHARP_,p2__35103_SHARP_){var G__35107 = p2__35103_SHARP_.nodeName;if(cljs.core._EQ_.call(null,"BUTTON",G__35107))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"SELECT",G__35107))
{return enfocus.core.read_select_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"TEXTAREA",G__35107))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"INPUT",G__35107))
{var G__35108 = p2__35103_SHARP_.type;if(cljs.core._EQ_.call(null,"radio",G__35108))
{return enfocus.core.read_checked_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"checkbox",G__35108))
{return enfocus.core.read_checked_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"submit",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"reset",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"button",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"password",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"hidden",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(cljs.core._EQ_.call(null,"text",G__35108))
{return enfocus.core.read_simple_input.call(null,p2__35103_SHARP_,p1__35104_SHARP_);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return p1__35104_SHARP_;
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
{return p1__35104_SHARP_;
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
var create_sel_str__2 = (function (id_mask_sym,css_sel){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__35109_SHARP_){if((p1__35109_SHARP_ instanceof cljs.core.Symbol))
{return enfocus.core.css_syms.call(null,p1__35109_SHARP_);
} else
{if((p1__35109_SHARP_ instanceof cljs.core.Keyword))
{return [cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,p1__35109_SHARP_).replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join('')))].join('');
} else
{if(cljs.core.vector_QMARK_.call(null,p1__35109_SHARP_))
{return create_sel_str.call(null,p1__35109_SHARP_);
} else
{if(typeof p1__35109_SHARP_ === 'string')
{return p1__35109_SHARP_.replace("#",[cljs.core.str("#"),cljs.core.str(id_mask_sym)].join(''));
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
{var G__35120 = node;if(G__35120)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35120.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__35120.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35120);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35120);
}
} else
{return and__13811__auto__;
}
})();if((!(sel_QMARK_)) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{var vec__35121 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__35121,0,null);var trans__$1 = cljs.core.nth.call(null,vec__35121,1,null);var seq__35122 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,trans__$1));var chunk__35123 = null;var count__35124 = 0;var i__35125 = 0;while(true){
if((i__35125 < count__35124))
{var vec__35126 = cljs.core._nth.call(null,chunk__35123,i__35125);var sel = cljs.core.nth.call(null,vec__35126,0,null);var t = cljs.core.nth.call(null,vec__35126,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__35128 = seq__35122;
var G__35129 = chunk__35123;
var G__35130 = count__35124;
var G__35131 = (i__35125 + 1);
seq__35122 = G__35128;
chunk__35123 = G__35129;
count__35124 = G__35130;
i__35125 = G__35131;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35122);if(temp__4092__auto__)
{var seq__35122__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35122__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__35122__$1);{
var G__35132 = cljs.core.chunk_rest.call(null,seq__35122__$1);
var G__35133 = c__14547__auto__;
var G__35134 = cljs.core.count.call(null,c__14547__auto__);
var G__35135 = 0;
seq__35122 = G__35132;
chunk__35123 = G__35133;
count__35124 = G__35134;
i__35125 = G__35135;
continue;
}
} else
{var vec__35127 = cljs.core.first.call(null,seq__35122__$1);var sel = cljs.core.nth.call(null,vec__35127,0,null);var t = cljs.core.nth.call(null,vec__35127,1,null);enfocus.core.apply_transform.call(null,enfocus.core.nil_t.call(null,t),enfocus.core.select.call(null,sel,node__$1,id_mask));
{
var G__35136 = cljs.core.next.call(null,seq__35122__$1);
var G__35137 = null;
var G__35138 = 0;
var G__35139 = 0;
seq__35122 = G__35136;
chunk__35123 = G__35137;
count__35124 = G__35138;
i__35125 = G__35139;
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
i_at.cljs$lang$applyTo = (function (arglist__35140){
var id_mask = cljs.core.first(arglist__35140);
arglist__35140 = cljs.core.next(arglist__35140);
var node = cljs.core.first(arglist__35140);
var trans = cljs.core.rest(arglist__35140);
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
at.cljs$lang$applyTo = (function (arglist__35141){
var node = cljs.core.first(arglist__35141);
var trans = cljs.core.rest(arglist__35141);
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
var from__delegate = function (node,trans){var cnt = cljs.core.count.call(null,trans);var sel_QMARK_ = (function (){var G__35146 = node;if(G__35146)
{var bit__14449__auto__ = null;if(cljs.core.truth_((function (){var or__13823__auto__ = bit__14449__auto__;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return G__35146.enfocus$core$ISelector$;
}
})()))
{return true;
} else
{if((!G__35146.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35146);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,enfocus.core.ISelector,G__35146);
}
})();if((sel_QMARK_) && (cljs.core._EQ_.call(null,1,cnt)))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),enfocus.core.select.call(null,node));
} else
{if(cljs.core._EQ_.call(null,1,cnt))
{return enfocus.core.apply_transform.call(null,cljs.core.first.call(null,trans),node);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var vec__35147 = ((sel_QMARK_)?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.conj.call(null,trans,node)),document):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,trans),node));var node__$1 = cljs.core.nth.call(null,vec__35147,0,null);var trans__$1 = cljs.core.nth.call(null,vec__35147,1,null);return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p__35148){var vec__35149 = p__35148;var ky = cljs.core.nth.call(null,vec__35149,0,null);var sel = cljs.core.nth.call(null,vec__35149,1,null);var ext = cljs.core.nth.call(null,vec__35149,2,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,enfocus.core.apply_transform.call(null,ext,enfocus.core.select.call(null,sel,node__$1,""))], null);
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
from.cljs$lang$applyTo = (function (arglist__35150){
var node = cljs.core.first(arglist__35150);
var trans = cljs.core.rest(arglist__35150);
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