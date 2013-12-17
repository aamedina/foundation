// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_24986 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24987 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_24988 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_24987,table_section_wrapper_24987,opt_wrapper_24986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_24988,table_section_wrapper_24987,cell_wrapper_24988,opt_wrapper_24986,table_section_wrapper_24987,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_24987]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7835__auto__ = div.firstChild;if(cljs.core.truth_(and__7835__auto__))
{return div.firstChild.childNodes;
} else
{return and__7835__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24993 = cljs.core.seq.call(null,tbody);var chunk__24994 = null;var count__24995 = 0;var i__24996 = 0;while(true){
if((i__24996 < count__24995))
{var child = cljs.core._nth.call(null,chunk__24994,i__24996);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24997 = seq__24993;
var G__24998 = chunk__24994;
var G__24999 = count__24995;
var G__25000 = (i__24996 + 1);
seq__24993 = G__24997;
chunk__24994 = G__24998;
count__24995 = G__24999;
i__24996 = G__25000;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24993);if(temp__4092__auto__)
{var seq__24993__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24993__$1))
{var c__8571__auto__ = cljs.core.chunk_first.call(null,seq__24993__$1);{
var G__25001 = cljs.core.chunk_rest.call(null,seq__24993__$1);
var G__25002 = c__8571__auto__;
var G__25003 = cljs.core.count.call(null,c__8571__auto__);
var G__25004 = 0;
seq__24993 = G__25001;
chunk__24994 = G__25002;
count__24995 = G__25003;
i__24996 = G__25004;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24993__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25005 = cljs.core.next.call(null,seq__24993__$1);
var G__25006 = null;
var G__25007 = 0;
var G__25008 = 0;
seq__24993 = G__25005;
chunk__24994 = G__25006;
count__24995 = G__25007;
i__24996 = G__25008;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__25010 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__25010,0,null);var start_wrap = cljs.core.nth.call(null,vec__25010,1,null);var end_wrap = cljs.core.nth.call(null,vec__25010,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__25011 = wrapper.lastChild;
var G__25012 = (level - 1);
wrapper = G__25011;
level = G__25012;
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
if(cljs.core.truth_((function (){var and__7835__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__7835__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__7835__auto__;
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
domina.DomContent = (function (){var obj25014 = {};return obj25014;
})();
domina.nodes = (function nodes(content){if((function (){var and__7835__auto__ = content;if(and__7835__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__7835__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8450__auto__ = (((content == null))?null:content);return (function (){var or__7847__auto__ = (domina.nodes[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (domina.nodes["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__7835__auto__ = nodeseq;if(and__7835__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__7835__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8450__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__7847__auto__ = (domina.single_node[goog.typeOf(x__8450__auto__)]);if(or__7847__auto__)
{return or__7847__auto__;
} else
{var or__7847__auto____$1 = (domina.single_node["_"]);if(or__7847__auto____$1)
{return or__7847__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__7835__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__7835__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7835__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__25015){
var mesg = cljs.core.seq(arglist__25015);
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
log.cljs$lang$applyTo = (function (arglist__25016){
var mesg = cljs.core.seq(arglist__25016);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25017){
var contents = cljs.core.seq(arglist__25017);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__25018_SHARP_){return p1__25018_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__25019_SHARP_,p2__25020_SHARP_){return goog.dom.insertChildAt(p1__25019_SHARP_,p2__25020_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25022_SHARP_,p2__25021_SHARP_){return goog.dom.insertSiblingBefore(p2__25021_SHARP_,p1__25022_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25024_SHARP_,p2__25023_SHARP_){return goog.dom.insertSiblingAfter(p2__25023_SHARP_,p1__25024_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__25026_SHARP_,p2__25025_SHARP_){return goog.dom.replaceNode(p2__25025_SHARP_,p1__25026_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25031_25035 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25032_25036 = null;var count__25033_25037 = 0;var i__25034_25038 = 0;while(true){
if((i__25034_25038 < count__25033_25037))
{var n_25039 = cljs.core._nth.call(null,chunk__25032_25036,i__25034_25038);goog.style.setStyle(n_25039,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25040 = seq__25031_25035;
var G__25041 = chunk__25032_25036;
var G__25042 = count__25033_25037;
var G__25043 = (i__25034_25038 + 1);
seq__25031_25035 = G__25040;
chunk__25032_25036 = G__25041;
count__25033_25037 = G__25042;
i__25034_25038 = G__25043;
continue;
}
} else
{var temp__4092__auto___25044 = cljs.core.seq.call(null,seq__25031_25035);if(temp__4092__auto___25044)
{var seq__25031_25045__$1 = temp__4092__auto___25044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25031_25045__$1))
{var c__8571__auto___25046 = cljs.core.chunk_first.call(null,seq__25031_25045__$1);{
var G__25047 = cljs.core.chunk_rest.call(null,seq__25031_25045__$1);
var G__25048 = c__8571__auto___25046;
var G__25049 = cljs.core.count.call(null,c__8571__auto___25046);
var G__25050 = 0;
seq__25031_25035 = G__25047;
chunk__25032_25036 = G__25048;
count__25033_25037 = G__25049;
i__25034_25038 = G__25050;
continue;
}
} else
{var n_25051 = cljs.core.first.call(null,seq__25031_25045__$1);goog.style.setStyle(n_25051,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25052 = cljs.core.next.call(null,seq__25031_25045__$1);
var G__25053 = null;
var G__25054 = 0;
var G__25055 = 0;
seq__25031_25035 = G__25052;
chunk__25032_25036 = G__25053;
count__25033_25037 = G__25054;
i__25034_25038 = G__25055;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25056){
var content = cljs.core.first(arglist__25056);
arglist__25056 = cljs.core.next(arglist__25056);
var name = cljs.core.first(arglist__25056);
var value = cljs.core.rest(arglist__25056);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25061_25065 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25062_25066 = null;var count__25063_25067 = 0;var i__25064_25068 = 0;while(true){
if((i__25064_25068 < count__25063_25067))
{var n_25069 = cljs.core._nth.call(null,chunk__25062_25066,i__25064_25068);n_25069.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25070 = seq__25061_25065;
var G__25071 = chunk__25062_25066;
var G__25072 = count__25063_25067;
var G__25073 = (i__25064_25068 + 1);
seq__25061_25065 = G__25070;
chunk__25062_25066 = G__25071;
count__25063_25067 = G__25072;
i__25064_25068 = G__25073;
continue;
}
} else
{var temp__4092__auto___25074 = cljs.core.seq.call(null,seq__25061_25065);if(temp__4092__auto___25074)
{var seq__25061_25075__$1 = temp__4092__auto___25074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25061_25075__$1))
{var c__8571__auto___25076 = cljs.core.chunk_first.call(null,seq__25061_25075__$1);{
var G__25077 = cljs.core.chunk_rest.call(null,seq__25061_25075__$1);
var G__25078 = c__8571__auto___25076;
var G__25079 = cljs.core.count.call(null,c__8571__auto___25076);
var G__25080 = 0;
seq__25061_25065 = G__25077;
chunk__25062_25066 = G__25078;
count__25063_25067 = G__25079;
i__25064_25068 = G__25080;
continue;
}
} else
{var n_25081 = cljs.core.first.call(null,seq__25061_25075__$1);n_25081.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25082 = cljs.core.next.call(null,seq__25061_25075__$1);
var G__25083 = null;
var G__25084 = 0;
var G__25085 = 0;
seq__25061_25065 = G__25082;
chunk__25062_25066 = G__25083;
count__25063_25067 = G__25084;
i__25064_25068 = G__25085;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25086){
var content = cljs.core.first(arglist__25086);
arglist__25086 = cljs.core.next(arglist__25086);
var name = cljs.core.first(arglist__25086);
var value = cljs.core.rest(arglist__25086);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25091_25095 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25092_25096 = null;var count__25093_25097 = 0;var i__25094_25098 = 0;while(true){
if((i__25094_25098 < count__25093_25097))
{var n_25099 = cljs.core._nth.call(null,chunk__25092_25096,i__25094_25098);n_25099.removeAttribute(cljs.core.name.call(null,name));
{
var G__25100 = seq__25091_25095;
var G__25101 = chunk__25092_25096;
var G__25102 = count__25093_25097;
var G__25103 = (i__25094_25098 + 1);
seq__25091_25095 = G__25100;
chunk__25092_25096 = G__25101;
count__25093_25097 = G__25102;
i__25094_25098 = G__25103;
continue;
}
} else
{var temp__4092__auto___25104 = cljs.core.seq.call(null,seq__25091_25095);if(temp__4092__auto___25104)
{var seq__25091_25105__$1 = temp__4092__auto___25104;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25091_25105__$1))
{var c__8571__auto___25106 = cljs.core.chunk_first.call(null,seq__25091_25105__$1);{
var G__25107 = cljs.core.chunk_rest.call(null,seq__25091_25105__$1);
var G__25108 = c__8571__auto___25106;
var G__25109 = cljs.core.count.call(null,c__8571__auto___25106);
var G__25110 = 0;
seq__25091_25095 = G__25107;
chunk__25092_25096 = G__25108;
count__25093_25097 = G__25109;
i__25094_25098 = G__25110;
continue;
}
} else
{var n_25111 = cljs.core.first.call(null,seq__25091_25105__$1);n_25111.removeAttribute(cljs.core.name.call(null,name));
{
var G__25112 = cljs.core.next.call(null,seq__25091_25105__$1);
var G__25113 = null;
var G__25114 = 0;
var G__25115 = 0;
seq__25091_25095 = G__25112;
chunk__25092_25096 = G__25113;
count__25093_25097 = G__25114;
i__25094_25098 = G__25115;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__25117 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__25117,0,null);var v = cljs.core.nth.call(null,vec__25117,1,null);if(cljs.core.truth_((function (){var and__7835__auto__ = k;if(cljs.core.truth_(and__7835__auto__))
{return v;
} else
{return and__7835__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__25118_SHARP_){var attr = attrs__$1.item(p1__25118_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25125_25131 = cljs.core.seq.call(null,styles);var chunk__25126_25132 = null;var count__25127_25133 = 0;var i__25128_25134 = 0;while(true){
if((i__25128_25134 < count__25127_25133))
{var vec__25129_25135 = cljs.core._nth.call(null,chunk__25126_25132,i__25128_25134);var name_25136 = cljs.core.nth.call(null,vec__25129_25135,0,null);var value_25137 = cljs.core.nth.call(null,vec__25129_25135,1,null);domina.set_style_BANG_.call(null,content,name_25136,value_25137);
{
var G__25138 = seq__25125_25131;
var G__25139 = chunk__25126_25132;
var G__25140 = count__25127_25133;
var G__25141 = (i__25128_25134 + 1);
seq__25125_25131 = G__25138;
chunk__25126_25132 = G__25139;
count__25127_25133 = G__25140;
i__25128_25134 = G__25141;
continue;
}
} else
{var temp__4092__auto___25142 = cljs.core.seq.call(null,seq__25125_25131);if(temp__4092__auto___25142)
{var seq__25125_25143__$1 = temp__4092__auto___25142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125_25143__$1))
{var c__8571__auto___25144 = cljs.core.chunk_first.call(null,seq__25125_25143__$1);{
var G__25145 = cljs.core.chunk_rest.call(null,seq__25125_25143__$1);
var G__25146 = c__8571__auto___25144;
var G__25147 = cljs.core.count.call(null,c__8571__auto___25144);
var G__25148 = 0;
seq__25125_25131 = G__25145;
chunk__25126_25132 = G__25146;
count__25127_25133 = G__25147;
i__25128_25134 = G__25148;
continue;
}
} else
{var vec__25130_25149 = cljs.core.first.call(null,seq__25125_25143__$1);var name_25150 = cljs.core.nth.call(null,vec__25130_25149,0,null);var value_25151 = cljs.core.nth.call(null,vec__25130_25149,1,null);domina.set_style_BANG_.call(null,content,name_25150,value_25151);
{
var G__25152 = cljs.core.next.call(null,seq__25125_25143__$1);
var G__25153 = null;
var G__25154 = 0;
var G__25155 = 0;
seq__25125_25131 = G__25152;
chunk__25126_25132 = G__25153;
count__25127_25133 = G__25154;
i__25128_25134 = G__25155;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25162_25168 = cljs.core.seq.call(null,attrs);var chunk__25163_25169 = null;var count__25164_25170 = 0;var i__25165_25171 = 0;while(true){
if((i__25165_25171 < count__25164_25170))
{var vec__25166_25172 = cljs.core._nth.call(null,chunk__25163_25169,i__25165_25171);var name_25173 = cljs.core.nth.call(null,vec__25166_25172,0,null);var value_25174 = cljs.core.nth.call(null,vec__25166_25172,1,null);domina.set_attr_BANG_.call(null,content,name_25173,value_25174);
{
var G__25175 = seq__25162_25168;
var G__25176 = chunk__25163_25169;
var G__25177 = count__25164_25170;
var G__25178 = (i__25165_25171 + 1);
seq__25162_25168 = G__25175;
chunk__25163_25169 = G__25176;
count__25164_25170 = G__25177;
i__25165_25171 = G__25178;
continue;
}
} else
{var temp__4092__auto___25179 = cljs.core.seq.call(null,seq__25162_25168);if(temp__4092__auto___25179)
{var seq__25162_25180__$1 = temp__4092__auto___25179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25162_25180__$1))
{var c__8571__auto___25181 = cljs.core.chunk_first.call(null,seq__25162_25180__$1);{
var G__25182 = cljs.core.chunk_rest.call(null,seq__25162_25180__$1);
var G__25183 = c__8571__auto___25181;
var G__25184 = cljs.core.count.call(null,c__8571__auto___25181);
var G__25185 = 0;
seq__25162_25168 = G__25182;
chunk__25163_25169 = G__25183;
count__25164_25170 = G__25184;
i__25165_25171 = G__25185;
continue;
}
} else
{var vec__25167_25186 = cljs.core.first.call(null,seq__25162_25180__$1);var name_25187 = cljs.core.nth.call(null,vec__25167_25186,0,null);var value_25188 = cljs.core.nth.call(null,vec__25167_25186,1,null);domina.set_attr_BANG_.call(null,content,name_25187,value_25188);
{
var G__25189 = cljs.core.next.call(null,seq__25162_25180__$1);
var G__25190 = null;
var G__25191 = 0;
var G__25192 = 0;
seq__25162_25168 = G__25189;
chunk__25163_25169 = G__25190;
count__25164_25170 = G__25191;
i__25165_25171 = G__25192;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25197_25201 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25198_25202 = null;var count__25199_25203 = 0;var i__25200_25204 = 0;while(true){
if((i__25200_25204 < count__25199_25203))
{var node_25205 = cljs.core._nth.call(null,chunk__25198_25202,i__25200_25204);goog.dom.classes.add(node_25205,class$);
{
var G__25206 = seq__25197_25201;
var G__25207 = chunk__25198_25202;
var G__25208 = count__25199_25203;
var G__25209 = (i__25200_25204 + 1);
seq__25197_25201 = G__25206;
chunk__25198_25202 = G__25207;
count__25199_25203 = G__25208;
i__25200_25204 = G__25209;
continue;
}
} else
{var temp__4092__auto___25210 = cljs.core.seq.call(null,seq__25197_25201);if(temp__4092__auto___25210)
{var seq__25197_25211__$1 = temp__4092__auto___25210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25197_25211__$1))
{var c__8571__auto___25212 = cljs.core.chunk_first.call(null,seq__25197_25211__$1);{
var G__25213 = cljs.core.chunk_rest.call(null,seq__25197_25211__$1);
var G__25214 = c__8571__auto___25212;
var G__25215 = cljs.core.count.call(null,c__8571__auto___25212);
var G__25216 = 0;
seq__25197_25201 = G__25213;
chunk__25198_25202 = G__25214;
count__25199_25203 = G__25215;
i__25200_25204 = G__25216;
continue;
}
} else
{var node_25217 = cljs.core.first.call(null,seq__25197_25211__$1);goog.dom.classes.add(node_25217,class$);
{
var G__25218 = cljs.core.next.call(null,seq__25197_25211__$1);
var G__25219 = null;
var G__25220 = 0;
var G__25221 = 0;
seq__25197_25201 = G__25218;
chunk__25198_25202 = G__25219;
count__25199_25203 = G__25220;
i__25200_25204 = G__25221;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25226_25230 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25227_25231 = null;var count__25228_25232 = 0;var i__25229_25233 = 0;while(true){
if((i__25229_25233 < count__25228_25232))
{var node_25234 = cljs.core._nth.call(null,chunk__25227_25231,i__25229_25233);goog.dom.classes.remove(node_25234,class$);
{
var G__25235 = seq__25226_25230;
var G__25236 = chunk__25227_25231;
var G__25237 = count__25228_25232;
var G__25238 = (i__25229_25233 + 1);
seq__25226_25230 = G__25235;
chunk__25227_25231 = G__25236;
count__25228_25232 = G__25237;
i__25229_25233 = G__25238;
continue;
}
} else
{var temp__4092__auto___25239 = cljs.core.seq.call(null,seq__25226_25230);if(temp__4092__auto___25239)
{var seq__25226_25240__$1 = temp__4092__auto___25239;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25226_25240__$1))
{var c__8571__auto___25241 = cljs.core.chunk_first.call(null,seq__25226_25240__$1);{
var G__25242 = cljs.core.chunk_rest.call(null,seq__25226_25240__$1);
var G__25243 = c__8571__auto___25241;
var G__25244 = cljs.core.count.call(null,c__8571__auto___25241);
var G__25245 = 0;
seq__25226_25230 = G__25242;
chunk__25227_25231 = G__25243;
count__25228_25232 = G__25244;
i__25229_25233 = G__25245;
continue;
}
} else
{var node_25246 = cljs.core.first.call(null,seq__25226_25240__$1);goog.dom.classes.remove(node_25246,class$);
{
var G__25247 = cljs.core.next.call(null,seq__25226_25240__$1);
var G__25248 = null;
var G__25249 = 0;
var G__25250 = 0;
seq__25226_25230 = G__25247;
chunk__25227_25231 = G__25248;
count__25228_25232 = G__25249;
i__25229_25233 = G__25250;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25255_25259 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25256_25260 = null;var count__25257_25261 = 0;var i__25258_25262 = 0;while(true){
if((i__25258_25262 < count__25257_25261))
{var node_25263 = cljs.core._nth.call(null,chunk__25256_25260,i__25258_25262);goog.dom.classes.toggle(node_25263,class$);
{
var G__25264 = seq__25255_25259;
var G__25265 = chunk__25256_25260;
var G__25266 = count__25257_25261;
var G__25267 = (i__25258_25262 + 1);
seq__25255_25259 = G__25264;
chunk__25256_25260 = G__25265;
count__25257_25261 = G__25266;
i__25258_25262 = G__25267;
continue;
}
} else
{var temp__4092__auto___25268 = cljs.core.seq.call(null,seq__25255_25259);if(temp__4092__auto___25268)
{var seq__25255_25269__$1 = temp__4092__auto___25268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25255_25269__$1))
{var c__8571__auto___25270 = cljs.core.chunk_first.call(null,seq__25255_25269__$1);{
var G__25271 = cljs.core.chunk_rest.call(null,seq__25255_25269__$1);
var G__25272 = c__8571__auto___25270;
var G__25273 = cljs.core.count.call(null,c__8571__auto___25270);
var G__25274 = 0;
seq__25255_25259 = G__25271;
chunk__25256_25260 = G__25272;
count__25257_25261 = G__25273;
i__25258_25262 = G__25274;
continue;
}
} else
{var node_25275 = cljs.core.first.call(null,seq__25255_25269__$1);goog.dom.classes.toggle(node_25275,class$);
{
var G__25276 = cljs.core.next.call(null,seq__25255_25269__$1);
var G__25277 = null;
var G__25278 = 0;
var G__25279 = 0;
seq__25255_25259 = G__25276;
chunk__25256_25260 = G__25277;
count__25257_25261 = G__25278;
i__25258_25262 = G__25279;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25288__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__25284_25289 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25285_25290 = null;var count__25286_25291 = 0;var i__25287_25292 = 0;while(true){
if((i__25287_25292 < count__25286_25291))
{var node_25293 = cljs.core._nth.call(null,chunk__25285_25290,i__25287_25292);goog.dom.classes.set(node_25293,classes_25288__$1);
{
var G__25294 = seq__25284_25289;
var G__25295 = chunk__25285_25290;
var G__25296 = count__25286_25291;
var G__25297 = (i__25287_25292 + 1);
seq__25284_25289 = G__25294;
chunk__25285_25290 = G__25295;
count__25286_25291 = G__25296;
i__25287_25292 = G__25297;
continue;
}
} else
{var temp__4092__auto___25298 = cljs.core.seq.call(null,seq__25284_25289);if(temp__4092__auto___25298)
{var seq__25284_25299__$1 = temp__4092__auto___25298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25284_25299__$1))
{var c__8571__auto___25300 = cljs.core.chunk_first.call(null,seq__25284_25299__$1);{
var G__25301 = cljs.core.chunk_rest.call(null,seq__25284_25299__$1);
var G__25302 = c__8571__auto___25300;
var G__25303 = cljs.core.count.call(null,c__8571__auto___25300);
var G__25304 = 0;
seq__25284_25289 = G__25301;
chunk__25285_25290 = G__25302;
count__25286_25291 = G__25303;
i__25287_25292 = G__25304;
continue;
}
} else
{var node_25305 = cljs.core.first.call(null,seq__25284_25299__$1);goog.dom.classes.set(node_25305,classes_25288__$1);
{
var G__25306 = cljs.core.next.call(null,seq__25284_25299__$1);
var G__25307 = null;
var G__25308 = 0;
var G__25309 = 0;
seq__25284_25289 = G__25306;
chunk__25285_25290 = G__25307;
count__25286_25291 = G__25308;
i__25287_25292 = G__25309;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25314_25318 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25315_25319 = null;var count__25316_25320 = 0;var i__25317_25321 = 0;while(true){
if((i__25317_25321 < count__25316_25320))
{var node_25322 = cljs.core._nth.call(null,chunk__25315_25319,i__25317_25321);goog.dom.setTextContent(node_25322,value);
{
var G__25323 = seq__25314_25318;
var G__25324 = chunk__25315_25319;
var G__25325 = count__25316_25320;
var G__25326 = (i__25317_25321 + 1);
seq__25314_25318 = G__25323;
chunk__25315_25319 = G__25324;
count__25316_25320 = G__25325;
i__25317_25321 = G__25326;
continue;
}
} else
{var temp__4092__auto___25327 = cljs.core.seq.call(null,seq__25314_25318);if(temp__4092__auto___25327)
{var seq__25314_25328__$1 = temp__4092__auto___25327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25314_25328__$1))
{var c__8571__auto___25329 = cljs.core.chunk_first.call(null,seq__25314_25328__$1);{
var G__25330 = cljs.core.chunk_rest.call(null,seq__25314_25328__$1);
var G__25331 = c__8571__auto___25329;
var G__25332 = cljs.core.count.call(null,c__8571__auto___25329);
var G__25333 = 0;
seq__25314_25318 = G__25330;
chunk__25315_25319 = G__25331;
count__25316_25320 = G__25332;
i__25317_25321 = G__25333;
continue;
}
} else
{var node_25334 = cljs.core.first.call(null,seq__25314_25328__$1);goog.dom.setTextContent(node_25334,value);
{
var G__25335 = cljs.core.next.call(null,seq__25314_25328__$1);
var G__25336 = null;
var G__25337 = 0;
var G__25338 = 0;
seq__25314_25318 = G__25335;
chunk__25315_25319 = G__25336;
count__25316_25320 = G__25337;
i__25317_25321 = G__25338;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25343_25347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25344_25348 = null;var count__25345_25349 = 0;var i__25346_25350 = 0;while(true){
if((i__25346_25350 < count__25345_25349))
{var node_25351 = cljs.core._nth.call(null,chunk__25344_25348,i__25346_25350);goog.dom.forms.setValue(node_25351,value);
{
var G__25352 = seq__25343_25347;
var G__25353 = chunk__25344_25348;
var G__25354 = count__25345_25349;
var G__25355 = (i__25346_25350 + 1);
seq__25343_25347 = G__25352;
chunk__25344_25348 = G__25353;
count__25345_25349 = G__25354;
i__25346_25350 = G__25355;
continue;
}
} else
{var temp__4092__auto___25356 = cljs.core.seq.call(null,seq__25343_25347);if(temp__4092__auto___25356)
{var seq__25343_25357__$1 = temp__4092__auto___25356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25343_25357__$1))
{var c__8571__auto___25358 = cljs.core.chunk_first.call(null,seq__25343_25357__$1);{
var G__25359 = cljs.core.chunk_rest.call(null,seq__25343_25357__$1);
var G__25360 = c__8571__auto___25358;
var G__25361 = cljs.core.count.call(null,c__8571__auto___25358);
var G__25362 = 0;
seq__25343_25347 = G__25359;
chunk__25344_25348 = G__25360;
count__25345_25349 = G__25361;
i__25346_25350 = G__25362;
continue;
}
} else
{var node_25363 = cljs.core.first.call(null,seq__25343_25357__$1);goog.dom.forms.setValue(node_25363,value);
{
var G__25364 = cljs.core.next.call(null,seq__25343_25357__$1);
var G__25365 = null;
var G__25366 = 0;
var G__25367 = 0;
seq__25343_25347 = G__25364;
chunk__25344_25348 = G__25365;
count__25345_25349 = G__25366;
i__25346_25350 = G__25367;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__7835__auto__ = allows_inner_html_QMARK_;if(and__7835__auto__)
{var and__7835__auto____$1 = (function (){var or__7847__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__7835__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__7835__auto____$1;
}
} else
{return and__7835__auto__;
}
})()))
{var value_25378 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25374_25379 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25375_25380 = null;var count__25376_25381 = 0;var i__25377_25382 = 0;while(true){
if((i__25377_25382 < count__25376_25381))
{var node_25383 = cljs.core._nth.call(null,chunk__25375_25380,i__25377_25382);node_25383.innerHTML = value_25378;
{
var G__25384 = seq__25374_25379;
var G__25385 = chunk__25375_25380;
var G__25386 = count__25376_25381;
var G__25387 = (i__25377_25382 + 1);
seq__25374_25379 = G__25384;
chunk__25375_25380 = G__25385;
count__25376_25381 = G__25386;
i__25377_25382 = G__25387;
continue;
}
} else
{var temp__4092__auto___25388 = cljs.core.seq.call(null,seq__25374_25379);if(temp__4092__auto___25388)
{var seq__25374_25389__$1 = temp__4092__auto___25388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25374_25389__$1))
{var c__8571__auto___25390 = cljs.core.chunk_first.call(null,seq__25374_25389__$1);{
var G__25391 = cljs.core.chunk_rest.call(null,seq__25374_25389__$1);
var G__25392 = c__8571__auto___25390;
var G__25393 = cljs.core.count.call(null,c__8571__auto___25390);
var G__25394 = 0;
seq__25374_25379 = G__25391;
chunk__25375_25380 = G__25392;
count__25376_25381 = G__25393;
i__25377_25382 = G__25394;
continue;
}
} else
{var node_25395 = cljs.core.first.call(null,seq__25374_25389__$1);node_25395.innerHTML = value_25378;
{
var G__25396 = cljs.core.next.call(null,seq__25374_25389__$1);
var G__25397 = null;
var G__25398 = 0;
var G__25399 = 0;
seq__25374_25379 = G__25396;
chunk__25375_25380 = G__25397;
count__25376_25381 = G__25398;
i__25377_25382 = G__25399;
continue;
}
}
} else
{}
}
break;
}
}catch (e25373){if((e25373 instanceof Error))
{var e_25400 = e25373;domina.replace_children_BANG_.call(null,content,value_25378);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25373;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__7835__auto__ = bubble;if(cljs.core.truth_(and__7835__auto__))
{return (value == null);
} else
{return and__7835__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__7847__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__7847__auto__))
{return or__7847__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25407_25411 = cljs.core.seq.call(null,children);var chunk__25408_25412 = null;var count__25409_25413 = 0;var i__25410_25414 = 0;while(true){
if((i__25410_25414 < count__25409_25413))
{var child_25415 = cljs.core._nth.call(null,chunk__25408_25412,i__25410_25414);frag.appendChild(child_25415);
{
var G__25416 = seq__25407_25411;
var G__25417 = chunk__25408_25412;
var G__25418 = count__25409_25413;
var G__25419 = (i__25410_25414 + 1);
seq__25407_25411 = G__25416;
chunk__25408_25412 = G__25417;
count__25409_25413 = G__25418;
i__25410_25414 = G__25419;
continue;
}
} else
{var temp__4092__auto___25420 = cljs.core.seq.call(null,seq__25407_25411);if(temp__4092__auto___25420)
{var seq__25407_25421__$1 = temp__4092__auto___25420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25407_25421__$1))
{var c__8571__auto___25422 = cljs.core.chunk_first.call(null,seq__25407_25421__$1);{
var G__25423 = cljs.core.chunk_rest.call(null,seq__25407_25421__$1);
var G__25424 = c__8571__auto___25422;
var G__25425 = cljs.core.count.call(null,c__8571__auto___25422);
var G__25426 = 0;
seq__25407_25411 = G__25423;
chunk__25408_25412 = G__25424;
count__25409_25413 = G__25425;
i__25410_25414 = G__25426;
continue;
}
} else
{var child_25427 = cljs.core.first.call(null,seq__25407_25421__$1);frag.appendChild(child_25427);
{
var G__25428 = cljs.core.next.call(null,seq__25407_25421__$1);
var G__25429 = null;
var G__25430 = 0;
var G__25431 = 0;
seq__25407_25411 = G__25428;
chunk__25408_25412 = G__25429;
count__25409_25413 = G__25430;
i__25410_25414 = G__25431;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25401_SHARP_,p2__25402_SHARP_){return f.call(null,p1__25401_SHARP_,p2__25402_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__7835__auto__ = obj;if(cljs.core.truth_(and__7835__auto__))
{var and__7835__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__7835__auto____$1)
{return obj.length;
} else
{return and__7835__auto____$1;
}
} else
{return and__7835__auto__;
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
{if((function (){var G__25433 = list_thing;if(G__25433)
{var bit__8473__auto__ = (G__25433.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8473__auto__) || (G__25433.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25433.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25433);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25433);
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
{if((function (){var G__25434 = content;if(G__25434)
{var bit__8473__auto__ = (G__25434.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8473__auto__) || (G__25434.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25434.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25434);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25434);
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
{if((function (){var G__25435 = content;if(G__25435)
{var bit__8473__auto__ = (G__25435.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8473__auto__) || (G__25435.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25435.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25435);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25435);
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
