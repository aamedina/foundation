// Compiled by ClojureScript 0.0-2120
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_29998 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_29999 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_30000 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_29999,table_section_wrapper_29999,opt_wrapper_29998,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_30000,table_section_wrapper_29999,cell_wrapper_30000,opt_wrapper_29998,table_section_wrapper_29999,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_29999]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8216__auto__ = div.firstChild;if(cljs.core.truth_(and__8216__auto__))
{return div.firstChild.childNodes;
} else
{return and__8216__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30005 = cljs.core.seq.call(null,tbody);var chunk__30006 = null;var count__30007 = 0;var i__30008 = 0;while(true){
if((i__30008 < count__30007))
{var child = cljs.core._nth.call(null,chunk__30006,i__30008);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30009 = seq__30005;
var G__30010 = chunk__30006;
var G__30011 = count__30007;
var G__30012 = (i__30008 + 1);
seq__30005 = G__30009;
chunk__30006 = G__30010;
count__30007 = G__30011;
i__30008 = G__30012;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30005);if(temp__4092__auto__)
{var seq__30005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30005__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__30005__$1);{
var G__30013 = cljs.core.chunk_rest.call(null,seq__30005__$1);
var G__30014 = c__8957__auto__;
var G__30015 = cljs.core.count.call(null,c__8957__auto__);
var G__30016 = 0;
seq__30005 = G__30013;
chunk__30006 = G__30014;
count__30007 = G__30015;
i__30008 = G__30016;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30005__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30017 = cljs.core.next.call(null,seq__30005__$1);
var G__30018 = null;
var G__30019 = 0;
var G__30020 = 0;
seq__30005 = G__30017;
chunk__30006 = G__30018;
count__30007 = G__30019;
i__30008 = G__30020;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__30022 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30022,0,null);var start_wrap = cljs.core.nth.call(null,vec__30022,1,null);var end_wrap = cljs.core.nth.call(null,vec__30022,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__30023 = wrapper.lastChild;
var G__30024 = (level - 1);
wrapper = G__30023;
level = G__30024;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__8216__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__8216__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__8216__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj30026 = {};return obj30026;
})();
domina.nodes = (function nodes(content){if((function (){var and__8216__auto__ = content;if(and__8216__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__8216__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8836__auto__ = (((content == null))?null:content);return (function (){var or__8228__auto__ = (domina.nodes[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (domina.nodes["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__8216__auto__ = nodeseq;if(and__8216__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__8216__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8836__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__8228__auto__ = (domina.single_node[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (domina.single_node["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__8216__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8216__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__30027){
var mesg = cljs.core.seq(arglist__30027);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__30028){
var mesg = cljs.core.seq(arglist__30028);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__30029){
var contents = cljs.core.seq(arglist__30029);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30030_SHARP_){return p1__30030_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30031_SHARP_,p2__30032_SHARP_){return goog.dom.insertChildAt(p1__30031_SHARP_,p2__30032_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30034_SHARP_,p2__30033_SHARP_){return goog.dom.insertSiblingBefore(p2__30033_SHARP_,p1__30034_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30036_SHARP_,p2__30035_SHARP_){return goog.dom.insertSiblingAfter(p2__30035_SHARP_,p1__30036_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30038_SHARP_,p2__30037_SHARP_){return goog.dom.replaceNode(p2__30037_SHARP_,p1__30038_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__30043_30047 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30044_30048 = null;var count__30045_30049 = 0;var i__30046_30050 = 0;while(true){
if((i__30046_30050 < count__30045_30049))
{var n_30051 = cljs.core._nth.call(null,chunk__30044_30048,i__30046_30050);goog.style.setStyle(n_30051,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30052 = seq__30043_30047;
var G__30053 = chunk__30044_30048;
var G__30054 = count__30045_30049;
var G__30055 = (i__30046_30050 + 1);
seq__30043_30047 = G__30052;
chunk__30044_30048 = G__30053;
count__30045_30049 = G__30054;
i__30046_30050 = G__30055;
continue;
}
} else
{var temp__4092__auto___30056 = cljs.core.seq.call(null,seq__30043_30047);if(temp__4092__auto___30056)
{var seq__30043_30057__$1 = temp__4092__auto___30056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30043_30057__$1))
{var c__8957__auto___30058 = cljs.core.chunk_first.call(null,seq__30043_30057__$1);{
var G__30059 = cljs.core.chunk_rest.call(null,seq__30043_30057__$1);
var G__30060 = c__8957__auto___30058;
var G__30061 = cljs.core.count.call(null,c__8957__auto___30058);
var G__30062 = 0;
seq__30043_30047 = G__30059;
chunk__30044_30048 = G__30060;
count__30045_30049 = G__30061;
i__30046_30050 = G__30062;
continue;
}
} else
{var n_30063 = cljs.core.first.call(null,seq__30043_30057__$1);goog.style.setStyle(n_30063,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30064 = cljs.core.next.call(null,seq__30043_30057__$1);
var G__30065 = null;
var G__30066 = 0;
var G__30067 = 0;
seq__30043_30047 = G__30064;
chunk__30044_30048 = G__30065;
count__30045_30049 = G__30066;
i__30046_30050 = G__30067;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30068){
var content = cljs.core.first(arglist__30068);
arglist__30068 = cljs.core.next(arglist__30068);
var name = cljs.core.first(arglist__30068);
var value = cljs.core.rest(arglist__30068);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__30073_30077 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30074_30078 = null;var count__30075_30079 = 0;var i__30076_30080 = 0;while(true){
if((i__30076_30080 < count__30075_30079))
{var n_30081 = cljs.core._nth.call(null,chunk__30074_30078,i__30076_30080);n_30081.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30082 = seq__30073_30077;
var G__30083 = chunk__30074_30078;
var G__30084 = count__30075_30079;
var G__30085 = (i__30076_30080 + 1);
seq__30073_30077 = G__30082;
chunk__30074_30078 = G__30083;
count__30075_30079 = G__30084;
i__30076_30080 = G__30085;
continue;
}
} else
{var temp__4092__auto___30086 = cljs.core.seq.call(null,seq__30073_30077);if(temp__4092__auto___30086)
{var seq__30073_30087__$1 = temp__4092__auto___30086;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30073_30087__$1))
{var c__8957__auto___30088 = cljs.core.chunk_first.call(null,seq__30073_30087__$1);{
var G__30089 = cljs.core.chunk_rest.call(null,seq__30073_30087__$1);
var G__30090 = c__8957__auto___30088;
var G__30091 = cljs.core.count.call(null,c__8957__auto___30088);
var G__30092 = 0;
seq__30073_30077 = G__30089;
chunk__30074_30078 = G__30090;
count__30075_30079 = G__30091;
i__30076_30080 = G__30092;
continue;
}
} else
{var n_30093 = cljs.core.first.call(null,seq__30073_30087__$1);n_30093.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30094 = cljs.core.next.call(null,seq__30073_30087__$1);
var G__30095 = null;
var G__30096 = 0;
var G__30097 = 0;
seq__30073_30077 = G__30094;
chunk__30074_30078 = G__30095;
count__30075_30079 = G__30096;
i__30076_30080 = G__30097;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30098){
var content = cljs.core.first(arglist__30098);
arglist__30098 = cljs.core.next(arglist__30098);
var name = cljs.core.first(arglist__30098);
var value = cljs.core.rest(arglist__30098);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30103_30107 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30104_30108 = null;var count__30105_30109 = 0;var i__30106_30110 = 0;while(true){
if((i__30106_30110 < count__30105_30109))
{var n_30111 = cljs.core._nth.call(null,chunk__30104_30108,i__30106_30110);n_30111.removeAttribute(cljs.core.name.call(null,name));
{
var G__30112 = seq__30103_30107;
var G__30113 = chunk__30104_30108;
var G__30114 = count__30105_30109;
var G__30115 = (i__30106_30110 + 1);
seq__30103_30107 = G__30112;
chunk__30104_30108 = G__30113;
count__30105_30109 = G__30114;
i__30106_30110 = G__30115;
continue;
}
} else
{var temp__4092__auto___30116 = cljs.core.seq.call(null,seq__30103_30107);if(temp__4092__auto___30116)
{var seq__30103_30117__$1 = temp__4092__auto___30116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30103_30117__$1))
{var c__8957__auto___30118 = cljs.core.chunk_first.call(null,seq__30103_30117__$1);{
var G__30119 = cljs.core.chunk_rest.call(null,seq__30103_30117__$1);
var G__30120 = c__8957__auto___30118;
var G__30121 = cljs.core.count.call(null,c__8957__auto___30118);
var G__30122 = 0;
seq__30103_30107 = G__30119;
chunk__30104_30108 = G__30120;
count__30105_30109 = G__30121;
i__30106_30110 = G__30122;
continue;
}
} else
{var n_30123 = cljs.core.first.call(null,seq__30103_30117__$1);n_30123.removeAttribute(cljs.core.name.call(null,name));
{
var G__30124 = cljs.core.next.call(null,seq__30103_30117__$1);
var G__30125 = null;
var G__30126 = 0;
var G__30127 = 0;
seq__30103_30107 = G__30124;
chunk__30104_30108 = G__30125;
count__30105_30109 = G__30126;
i__30106_30110 = G__30127;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30129 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30129,0,null);var v = cljs.core.nth.call(null,vec__30129,1,null);if(cljs.core.truth_((function (){var and__8216__auto__ = k;if(cljs.core.truth_(and__8216__auto__))
{return v;
} else
{return and__8216__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__30130_SHARP_){var attr = attrs__$1.item(p1__30130_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30137_30143 = cljs.core.seq.call(null,styles);var chunk__30138_30144 = null;var count__30139_30145 = 0;var i__30140_30146 = 0;while(true){
if((i__30140_30146 < count__30139_30145))
{var vec__30141_30147 = cljs.core._nth.call(null,chunk__30138_30144,i__30140_30146);var name_30148 = cljs.core.nth.call(null,vec__30141_30147,0,null);var value_30149 = cljs.core.nth.call(null,vec__30141_30147,1,null);domina.set_style_BANG_.call(null,content,name_30148,value_30149);
{
var G__30150 = seq__30137_30143;
var G__30151 = chunk__30138_30144;
var G__30152 = count__30139_30145;
var G__30153 = (i__30140_30146 + 1);
seq__30137_30143 = G__30150;
chunk__30138_30144 = G__30151;
count__30139_30145 = G__30152;
i__30140_30146 = G__30153;
continue;
}
} else
{var temp__4092__auto___30154 = cljs.core.seq.call(null,seq__30137_30143);if(temp__4092__auto___30154)
{var seq__30137_30155__$1 = temp__4092__auto___30154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30137_30155__$1))
{var c__8957__auto___30156 = cljs.core.chunk_first.call(null,seq__30137_30155__$1);{
var G__30157 = cljs.core.chunk_rest.call(null,seq__30137_30155__$1);
var G__30158 = c__8957__auto___30156;
var G__30159 = cljs.core.count.call(null,c__8957__auto___30156);
var G__30160 = 0;
seq__30137_30143 = G__30157;
chunk__30138_30144 = G__30158;
count__30139_30145 = G__30159;
i__30140_30146 = G__30160;
continue;
}
} else
{var vec__30142_30161 = cljs.core.first.call(null,seq__30137_30155__$1);var name_30162 = cljs.core.nth.call(null,vec__30142_30161,0,null);var value_30163 = cljs.core.nth.call(null,vec__30142_30161,1,null);domina.set_style_BANG_.call(null,content,name_30162,value_30163);
{
var G__30164 = cljs.core.next.call(null,seq__30137_30155__$1);
var G__30165 = null;
var G__30166 = 0;
var G__30167 = 0;
seq__30137_30143 = G__30164;
chunk__30138_30144 = G__30165;
count__30139_30145 = G__30166;
i__30140_30146 = G__30167;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30174_30180 = cljs.core.seq.call(null,attrs);var chunk__30175_30181 = null;var count__30176_30182 = 0;var i__30177_30183 = 0;while(true){
if((i__30177_30183 < count__30176_30182))
{var vec__30178_30184 = cljs.core._nth.call(null,chunk__30175_30181,i__30177_30183);var name_30185 = cljs.core.nth.call(null,vec__30178_30184,0,null);var value_30186 = cljs.core.nth.call(null,vec__30178_30184,1,null);domina.set_attr_BANG_.call(null,content,name_30185,value_30186);
{
var G__30187 = seq__30174_30180;
var G__30188 = chunk__30175_30181;
var G__30189 = count__30176_30182;
var G__30190 = (i__30177_30183 + 1);
seq__30174_30180 = G__30187;
chunk__30175_30181 = G__30188;
count__30176_30182 = G__30189;
i__30177_30183 = G__30190;
continue;
}
} else
{var temp__4092__auto___30191 = cljs.core.seq.call(null,seq__30174_30180);if(temp__4092__auto___30191)
{var seq__30174_30192__$1 = temp__4092__auto___30191;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30174_30192__$1))
{var c__8957__auto___30193 = cljs.core.chunk_first.call(null,seq__30174_30192__$1);{
var G__30194 = cljs.core.chunk_rest.call(null,seq__30174_30192__$1);
var G__30195 = c__8957__auto___30193;
var G__30196 = cljs.core.count.call(null,c__8957__auto___30193);
var G__30197 = 0;
seq__30174_30180 = G__30194;
chunk__30175_30181 = G__30195;
count__30176_30182 = G__30196;
i__30177_30183 = G__30197;
continue;
}
} else
{var vec__30179_30198 = cljs.core.first.call(null,seq__30174_30192__$1);var name_30199 = cljs.core.nth.call(null,vec__30179_30198,0,null);var value_30200 = cljs.core.nth.call(null,vec__30179_30198,1,null);domina.set_attr_BANG_.call(null,content,name_30199,value_30200);
{
var G__30201 = cljs.core.next.call(null,seq__30174_30192__$1);
var G__30202 = null;
var G__30203 = 0;
var G__30204 = 0;
seq__30174_30180 = G__30201;
chunk__30175_30181 = G__30202;
count__30176_30182 = G__30203;
i__30177_30183 = G__30204;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30209_30213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30210_30214 = null;var count__30211_30215 = 0;var i__30212_30216 = 0;while(true){
if((i__30212_30216 < count__30211_30215))
{var node_30217 = cljs.core._nth.call(null,chunk__30210_30214,i__30212_30216);goog.dom.classes.add(node_30217,class$);
{
var G__30218 = seq__30209_30213;
var G__30219 = chunk__30210_30214;
var G__30220 = count__30211_30215;
var G__30221 = (i__30212_30216 + 1);
seq__30209_30213 = G__30218;
chunk__30210_30214 = G__30219;
count__30211_30215 = G__30220;
i__30212_30216 = G__30221;
continue;
}
} else
{var temp__4092__auto___30222 = cljs.core.seq.call(null,seq__30209_30213);if(temp__4092__auto___30222)
{var seq__30209_30223__$1 = temp__4092__auto___30222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30209_30223__$1))
{var c__8957__auto___30224 = cljs.core.chunk_first.call(null,seq__30209_30223__$1);{
var G__30225 = cljs.core.chunk_rest.call(null,seq__30209_30223__$1);
var G__30226 = c__8957__auto___30224;
var G__30227 = cljs.core.count.call(null,c__8957__auto___30224);
var G__30228 = 0;
seq__30209_30213 = G__30225;
chunk__30210_30214 = G__30226;
count__30211_30215 = G__30227;
i__30212_30216 = G__30228;
continue;
}
} else
{var node_30229 = cljs.core.first.call(null,seq__30209_30223__$1);goog.dom.classes.add(node_30229,class$);
{
var G__30230 = cljs.core.next.call(null,seq__30209_30223__$1);
var G__30231 = null;
var G__30232 = 0;
var G__30233 = 0;
seq__30209_30213 = G__30230;
chunk__30210_30214 = G__30231;
count__30211_30215 = G__30232;
i__30212_30216 = G__30233;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30238_30242 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30239_30243 = null;var count__30240_30244 = 0;var i__30241_30245 = 0;while(true){
if((i__30241_30245 < count__30240_30244))
{var node_30246 = cljs.core._nth.call(null,chunk__30239_30243,i__30241_30245);goog.dom.classes.remove(node_30246,class$);
{
var G__30247 = seq__30238_30242;
var G__30248 = chunk__30239_30243;
var G__30249 = count__30240_30244;
var G__30250 = (i__30241_30245 + 1);
seq__30238_30242 = G__30247;
chunk__30239_30243 = G__30248;
count__30240_30244 = G__30249;
i__30241_30245 = G__30250;
continue;
}
} else
{var temp__4092__auto___30251 = cljs.core.seq.call(null,seq__30238_30242);if(temp__4092__auto___30251)
{var seq__30238_30252__$1 = temp__4092__auto___30251;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30238_30252__$1))
{var c__8957__auto___30253 = cljs.core.chunk_first.call(null,seq__30238_30252__$1);{
var G__30254 = cljs.core.chunk_rest.call(null,seq__30238_30252__$1);
var G__30255 = c__8957__auto___30253;
var G__30256 = cljs.core.count.call(null,c__8957__auto___30253);
var G__30257 = 0;
seq__30238_30242 = G__30254;
chunk__30239_30243 = G__30255;
count__30240_30244 = G__30256;
i__30241_30245 = G__30257;
continue;
}
} else
{var node_30258 = cljs.core.first.call(null,seq__30238_30252__$1);goog.dom.classes.remove(node_30258,class$);
{
var G__30259 = cljs.core.next.call(null,seq__30238_30252__$1);
var G__30260 = null;
var G__30261 = 0;
var G__30262 = 0;
seq__30238_30242 = G__30259;
chunk__30239_30243 = G__30260;
count__30240_30244 = G__30261;
i__30241_30245 = G__30262;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30267_30271 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30268_30272 = null;var count__30269_30273 = 0;var i__30270_30274 = 0;while(true){
if((i__30270_30274 < count__30269_30273))
{var node_30275 = cljs.core._nth.call(null,chunk__30268_30272,i__30270_30274);goog.dom.classes.toggle(node_30275,class$);
{
var G__30276 = seq__30267_30271;
var G__30277 = chunk__30268_30272;
var G__30278 = count__30269_30273;
var G__30279 = (i__30270_30274 + 1);
seq__30267_30271 = G__30276;
chunk__30268_30272 = G__30277;
count__30269_30273 = G__30278;
i__30270_30274 = G__30279;
continue;
}
} else
{var temp__4092__auto___30280 = cljs.core.seq.call(null,seq__30267_30271);if(temp__4092__auto___30280)
{var seq__30267_30281__$1 = temp__4092__auto___30280;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30267_30281__$1))
{var c__8957__auto___30282 = cljs.core.chunk_first.call(null,seq__30267_30281__$1);{
var G__30283 = cljs.core.chunk_rest.call(null,seq__30267_30281__$1);
var G__30284 = c__8957__auto___30282;
var G__30285 = cljs.core.count.call(null,c__8957__auto___30282);
var G__30286 = 0;
seq__30267_30271 = G__30283;
chunk__30268_30272 = G__30284;
count__30269_30273 = G__30285;
i__30270_30274 = G__30286;
continue;
}
} else
{var node_30287 = cljs.core.first.call(null,seq__30267_30281__$1);goog.dom.classes.toggle(node_30287,class$);
{
var G__30288 = cljs.core.next.call(null,seq__30267_30281__$1);
var G__30289 = null;
var G__30290 = 0;
var G__30291 = 0;
seq__30267_30271 = G__30288;
chunk__30268_30272 = G__30289;
count__30269_30273 = G__30290;
i__30270_30274 = G__30291;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30300__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30296_30301 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30297_30302 = null;var count__30298_30303 = 0;var i__30299_30304 = 0;while(true){
if((i__30299_30304 < count__30298_30303))
{var node_30305 = cljs.core._nth.call(null,chunk__30297_30302,i__30299_30304);goog.dom.classes.set(node_30305,classes_30300__$1);
{
var G__30306 = seq__30296_30301;
var G__30307 = chunk__30297_30302;
var G__30308 = count__30298_30303;
var G__30309 = (i__30299_30304 + 1);
seq__30296_30301 = G__30306;
chunk__30297_30302 = G__30307;
count__30298_30303 = G__30308;
i__30299_30304 = G__30309;
continue;
}
} else
{var temp__4092__auto___30310 = cljs.core.seq.call(null,seq__30296_30301);if(temp__4092__auto___30310)
{var seq__30296_30311__$1 = temp__4092__auto___30310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30296_30311__$1))
{var c__8957__auto___30312 = cljs.core.chunk_first.call(null,seq__30296_30311__$1);{
var G__30313 = cljs.core.chunk_rest.call(null,seq__30296_30311__$1);
var G__30314 = c__8957__auto___30312;
var G__30315 = cljs.core.count.call(null,c__8957__auto___30312);
var G__30316 = 0;
seq__30296_30301 = G__30313;
chunk__30297_30302 = G__30314;
count__30298_30303 = G__30315;
i__30299_30304 = G__30316;
continue;
}
} else
{var node_30317 = cljs.core.first.call(null,seq__30296_30311__$1);goog.dom.classes.set(node_30317,classes_30300__$1);
{
var G__30318 = cljs.core.next.call(null,seq__30296_30311__$1);
var G__30319 = null;
var G__30320 = 0;
var G__30321 = 0;
seq__30296_30301 = G__30318;
chunk__30297_30302 = G__30319;
count__30298_30303 = G__30320;
i__30299_30304 = G__30321;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30326_30330 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30327_30331 = null;var count__30328_30332 = 0;var i__30329_30333 = 0;while(true){
if((i__30329_30333 < count__30328_30332))
{var node_30334 = cljs.core._nth.call(null,chunk__30327_30331,i__30329_30333);goog.dom.setTextContent(node_30334,value);
{
var G__30335 = seq__30326_30330;
var G__30336 = chunk__30327_30331;
var G__30337 = count__30328_30332;
var G__30338 = (i__30329_30333 + 1);
seq__30326_30330 = G__30335;
chunk__30327_30331 = G__30336;
count__30328_30332 = G__30337;
i__30329_30333 = G__30338;
continue;
}
} else
{var temp__4092__auto___30339 = cljs.core.seq.call(null,seq__30326_30330);if(temp__4092__auto___30339)
{var seq__30326_30340__$1 = temp__4092__auto___30339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30326_30340__$1))
{var c__8957__auto___30341 = cljs.core.chunk_first.call(null,seq__30326_30340__$1);{
var G__30342 = cljs.core.chunk_rest.call(null,seq__30326_30340__$1);
var G__30343 = c__8957__auto___30341;
var G__30344 = cljs.core.count.call(null,c__8957__auto___30341);
var G__30345 = 0;
seq__30326_30330 = G__30342;
chunk__30327_30331 = G__30343;
count__30328_30332 = G__30344;
i__30329_30333 = G__30345;
continue;
}
} else
{var node_30346 = cljs.core.first.call(null,seq__30326_30340__$1);goog.dom.setTextContent(node_30346,value);
{
var G__30347 = cljs.core.next.call(null,seq__30326_30340__$1);
var G__30348 = null;
var G__30349 = 0;
var G__30350 = 0;
seq__30326_30330 = G__30347;
chunk__30327_30331 = G__30348;
count__30328_30332 = G__30349;
i__30329_30333 = G__30350;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30355_30359 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30356_30360 = null;var count__30357_30361 = 0;var i__30358_30362 = 0;while(true){
if((i__30358_30362 < count__30357_30361))
{var node_30363 = cljs.core._nth.call(null,chunk__30356_30360,i__30358_30362);goog.dom.forms.setValue(node_30363,value);
{
var G__30364 = seq__30355_30359;
var G__30365 = chunk__30356_30360;
var G__30366 = count__30357_30361;
var G__30367 = (i__30358_30362 + 1);
seq__30355_30359 = G__30364;
chunk__30356_30360 = G__30365;
count__30357_30361 = G__30366;
i__30358_30362 = G__30367;
continue;
}
} else
{var temp__4092__auto___30368 = cljs.core.seq.call(null,seq__30355_30359);if(temp__4092__auto___30368)
{var seq__30355_30369__$1 = temp__4092__auto___30368;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30355_30369__$1))
{var c__8957__auto___30370 = cljs.core.chunk_first.call(null,seq__30355_30369__$1);{
var G__30371 = cljs.core.chunk_rest.call(null,seq__30355_30369__$1);
var G__30372 = c__8957__auto___30370;
var G__30373 = cljs.core.count.call(null,c__8957__auto___30370);
var G__30374 = 0;
seq__30355_30359 = G__30371;
chunk__30356_30360 = G__30372;
count__30357_30361 = G__30373;
i__30358_30362 = G__30374;
continue;
}
} else
{var node_30375 = cljs.core.first.call(null,seq__30355_30369__$1);goog.dom.forms.setValue(node_30375,value);
{
var G__30376 = cljs.core.next.call(null,seq__30355_30369__$1);
var G__30377 = null;
var G__30378 = 0;
var G__30379 = 0;
seq__30355_30359 = G__30376;
chunk__30356_30360 = G__30377;
count__30357_30361 = G__30378;
i__30358_30362 = G__30379;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__8216__auto__ = allows_inner_html_QMARK_;if(and__8216__auto__)
{var and__8216__auto____$1 = (function (){var or__8228__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__8216__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__8216__auto____$1;
}
} else
{return and__8216__auto__;
}
})()))
{var value_30390 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30386_30391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30387_30392 = null;var count__30388_30393 = 0;var i__30389_30394 = 0;while(true){
if((i__30389_30394 < count__30388_30393))
{var node_30395 = cljs.core._nth.call(null,chunk__30387_30392,i__30389_30394);node_30395.innerHTML = value_30390;
{
var G__30396 = seq__30386_30391;
var G__30397 = chunk__30387_30392;
var G__30398 = count__30388_30393;
var G__30399 = (i__30389_30394 + 1);
seq__30386_30391 = G__30396;
chunk__30387_30392 = G__30397;
count__30388_30393 = G__30398;
i__30389_30394 = G__30399;
continue;
}
} else
{var temp__4092__auto___30400 = cljs.core.seq.call(null,seq__30386_30391);if(temp__4092__auto___30400)
{var seq__30386_30401__$1 = temp__4092__auto___30400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30386_30401__$1))
{var c__8957__auto___30402 = cljs.core.chunk_first.call(null,seq__30386_30401__$1);{
var G__30403 = cljs.core.chunk_rest.call(null,seq__30386_30401__$1);
var G__30404 = c__8957__auto___30402;
var G__30405 = cljs.core.count.call(null,c__8957__auto___30402);
var G__30406 = 0;
seq__30386_30391 = G__30403;
chunk__30387_30392 = G__30404;
count__30388_30393 = G__30405;
i__30389_30394 = G__30406;
continue;
}
} else
{var node_30407 = cljs.core.first.call(null,seq__30386_30401__$1);node_30407.innerHTML = value_30390;
{
var G__30408 = cljs.core.next.call(null,seq__30386_30401__$1);
var G__30409 = null;
var G__30410 = 0;
var G__30411 = 0;
seq__30386_30391 = G__30408;
chunk__30387_30392 = G__30409;
count__30388_30393 = G__30410;
i__30389_30394 = G__30411;
continue;
}
}
} else
{}
}
break;
}
}catch (e30385){if((e30385 instanceof Error))
{var e_30412 = e30385;domina.replace_children_BANG_.call(null,content,value_30390);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30385;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__8216__auto__ = bubble;if(cljs.core.truth_(and__8216__auto__))
{return (value == null);
} else
{return and__8216__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__8228__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30419_30423 = cljs.core.seq.call(null,children);var chunk__30420_30424 = null;var count__30421_30425 = 0;var i__30422_30426 = 0;while(true){
if((i__30422_30426 < count__30421_30425))
{var child_30427 = cljs.core._nth.call(null,chunk__30420_30424,i__30422_30426);frag.appendChild(child_30427);
{
var G__30428 = seq__30419_30423;
var G__30429 = chunk__30420_30424;
var G__30430 = count__30421_30425;
var G__30431 = (i__30422_30426 + 1);
seq__30419_30423 = G__30428;
chunk__30420_30424 = G__30429;
count__30421_30425 = G__30430;
i__30422_30426 = G__30431;
continue;
}
} else
{var temp__4092__auto___30432 = cljs.core.seq.call(null,seq__30419_30423);if(temp__4092__auto___30432)
{var seq__30419_30433__$1 = temp__4092__auto___30432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30419_30433__$1))
{var c__8957__auto___30434 = cljs.core.chunk_first.call(null,seq__30419_30433__$1);{
var G__30435 = cljs.core.chunk_rest.call(null,seq__30419_30433__$1);
var G__30436 = c__8957__auto___30434;
var G__30437 = cljs.core.count.call(null,c__8957__auto___30434);
var G__30438 = 0;
seq__30419_30423 = G__30435;
chunk__30420_30424 = G__30436;
count__30421_30425 = G__30437;
i__30422_30426 = G__30438;
continue;
}
} else
{var child_30439 = cljs.core.first.call(null,seq__30419_30433__$1);frag.appendChild(child_30439);
{
var G__30440 = cljs.core.next.call(null,seq__30419_30433__$1);
var G__30441 = null;
var G__30442 = 0;
var G__30443 = 0;
seq__30419_30423 = G__30440;
chunk__30420_30424 = G__30441;
count__30421_30425 = G__30442;
i__30422_30426 = G__30443;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30413_SHARP_,p2__30414_SHARP_){return f.call(null,p1__30413_SHARP_,p2__30414_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__8216__auto__ = obj;if(cljs.core.truth_(and__8216__auto__))
{var and__8216__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__8216__auto____$1)
{return obj.length;
} else
{return and__8216__auto____$1;
}
} else
{return and__8216__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30445 = list_thing;if(G__30445)
{var bit__8859__auto__ = (G__30445.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__30445.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30445.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30445);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30445);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__30446 = content;if(G__30446)
{var bit__8859__auto__ = (G__30446.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__30446.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30446.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30446);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30446);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__30447 = content;if(G__30447)
{var bit__8859__auto__ = (G__30447.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__30447.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30447.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30447);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30447);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map