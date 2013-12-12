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
var opt_wrapper_31918 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_31919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_31920 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_31919,table_section_wrapper_31919,opt_wrapper_31918,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_31920,table_section_wrapper_31919,cell_wrapper_31920,opt_wrapper_31918,table_section_wrapper_31919,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_31919]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13809__auto__ = div.firstChild;if(cljs.core.truth_(and__13809__auto__))
{return div.firstChild.childNodes;
} else
{return and__13809__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__31925 = cljs.core.seq.call(null,tbody);var chunk__31926 = null;var count__31927 = 0;var i__31928 = 0;while(true){
if((i__31928 < count__31927))
{var child = cljs.core._nth.call(null,chunk__31926,i__31928);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31929 = seq__31925;
var G__31930 = chunk__31926;
var G__31931 = count__31927;
var G__31932 = (i__31928 + 1);
seq__31925 = G__31929;
chunk__31926 = G__31930;
count__31927 = G__31931;
i__31928 = G__31932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__31925);if(temp__4092__auto__)
{var seq__31925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31925__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__31925__$1);{
var G__31933 = cljs.core.chunk_rest.call(null,seq__31925__$1);
var G__31934 = c__14545__auto__;
var G__31935 = cljs.core.count.call(null,c__14545__auto__);
var G__31936 = 0;
seq__31925 = G__31933;
chunk__31926 = G__31934;
count__31927 = G__31935;
i__31928 = G__31936;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__31925__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__31937 = cljs.core.next.call(null,seq__31925__$1);
var G__31938 = null;
var G__31939 = 0;
var G__31940 = 0;
seq__31925 = G__31937;
chunk__31926 = G__31938;
count__31927 = G__31939;
i__31928 = G__31940;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__31942 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__31942,0,null);var start_wrap = cljs.core.nth.call(null,vec__31942,1,null);var end_wrap = cljs.core.nth.call(null,vec__31942,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__31943 = wrapper.lastChild;
var G__31944 = (level - 1);
wrapper = G__31943;
level = G__31944;
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
if(cljs.core.truth_((function (){var and__13809__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13809__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13809__auto__;
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
domina.DomContent = (function (){var obj31946 = {};return obj31946;
})();
domina.nodes = (function nodes(content){if((function (){var and__13809__auto__ = content;if(and__13809__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13809__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14424__auto__ = (((content == null))?null:content);return (function (){var or__13821__auto__ = (domina.nodes[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (domina.nodes["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13809__auto__ = nodeseq;if(and__13809__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13809__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14424__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13821__auto__ = (domina.single_node[goog.typeOf(x__14424__auto__)]);if(or__13821__auto__)
{return or__13821__auto__;
} else
{var or__13821__auto____$1 = (domina.single_node["_"]);if(or__13821__auto____$1)
{return or__13821__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13809__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13809__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13809__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__31947){
var mesg = cljs.core.seq(arglist__31947);
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
log.cljs$lang$applyTo = (function (arglist__31948){
var mesg = cljs.core.seq(arglist__31948);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__31949){
var contents = cljs.core.seq(arglist__31949);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__31950_SHARP_){return p1__31950_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__31951_SHARP_,p2__31952_SHARP_){return goog.dom.insertChildAt(p1__31951_SHARP_,p2__31952_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31954_SHARP_,p2__31953_SHARP_){return goog.dom.insertSiblingBefore(p2__31953_SHARP_,p1__31954_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__31956_SHARP_,p2__31955_SHARP_){return goog.dom.insertSiblingAfter(p2__31955_SHARP_,p1__31956_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__31958_SHARP_,p2__31957_SHARP_){return goog.dom.replaceNode(p2__31957_SHARP_,p1__31958_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__31963_31967 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31964_31968 = null;var count__31965_31969 = 0;var i__31966_31970 = 0;while(true){
if((i__31966_31970 < count__31965_31969))
{var n_31971 = cljs.core._nth.call(null,chunk__31964_31968,i__31966_31970);goog.style.setStyle(n_31971,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31972 = seq__31963_31967;
var G__31973 = chunk__31964_31968;
var G__31974 = count__31965_31969;
var G__31975 = (i__31966_31970 + 1);
seq__31963_31967 = G__31972;
chunk__31964_31968 = G__31973;
count__31965_31969 = G__31974;
i__31966_31970 = G__31975;
continue;
}
} else
{var temp__4092__auto___31976 = cljs.core.seq.call(null,seq__31963_31967);if(temp__4092__auto___31976)
{var seq__31963_31977__$1 = temp__4092__auto___31976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31963_31977__$1))
{var c__14545__auto___31978 = cljs.core.chunk_first.call(null,seq__31963_31977__$1);{
var G__31979 = cljs.core.chunk_rest.call(null,seq__31963_31977__$1);
var G__31980 = c__14545__auto___31978;
var G__31981 = cljs.core.count.call(null,c__14545__auto___31978);
var G__31982 = 0;
seq__31963_31967 = G__31979;
chunk__31964_31968 = G__31980;
count__31965_31969 = G__31981;
i__31966_31970 = G__31982;
continue;
}
} else
{var n_31983 = cljs.core.first.call(null,seq__31963_31977__$1);goog.style.setStyle(n_31983,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__31984 = cljs.core.next.call(null,seq__31963_31977__$1);
var G__31985 = null;
var G__31986 = 0;
var G__31987 = 0;
seq__31963_31967 = G__31984;
chunk__31964_31968 = G__31985;
count__31965_31969 = G__31986;
i__31966_31970 = G__31987;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__31988){
var content = cljs.core.first(arglist__31988);
arglist__31988 = cljs.core.next(arglist__31988);
var name = cljs.core.first(arglist__31988);
var value = cljs.core.rest(arglist__31988);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__31993_31997 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31994_31998 = null;var count__31995_31999 = 0;var i__31996_32000 = 0;while(true){
if((i__31996_32000 < count__31995_31999))
{var n_32001 = cljs.core._nth.call(null,chunk__31994_31998,i__31996_32000);n_32001.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32002 = seq__31993_31997;
var G__32003 = chunk__31994_31998;
var G__32004 = count__31995_31999;
var G__32005 = (i__31996_32000 + 1);
seq__31993_31997 = G__32002;
chunk__31994_31998 = G__32003;
count__31995_31999 = G__32004;
i__31996_32000 = G__32005;
continue;
}
} else
{var temp__4092__auto___32006 = cljs.core.seq.call(null,seq__31993_31997);if(temp__4092__auto___32006)
{var seq__31993_32007__$1 = temp__4092__auto___32006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31993_32007__$1))
{var c__14545__auto___32008 = cljs.core.chunk_first.call(null,seq__31993_32007__$1);{
var G__32009 = cljs.core.chunk_rest.call(null,seq__31993_32007__$1);
var G__32010 = c__14545__auto___32008;
var G__32011 = cljs.core.count.call(null,c__14545__auto___32008);
var G__32012 = 0;
seq__31993_31997 = G__32009;
chunk__31994_31998 = G__32010;
count__31995_31999 = G__32011;
i__31996_32000 = G__32012;
continue;
}
} else
{var n_32013 = cljs.core.first.call(null,seq__31993_32007__$1);n_32013.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32014 = cljs.core.next.call(null,seq__31993_32007__$1);
var G__32015 = null;
var G__32016 = 0;
var G__32017 = 0;
seq__31993_31997 = G__32014;
chunk__31994_31998 = G__32015;
count__31995_31999 = G__32016;
i__31996_32000 = G__32017;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32018){
var content = cljs.core.first(arglist__32018);
arglist__32018 = cljs.core.next(arglist__32018);
var name = cljs.core.first(arglist__32018);
var value = cljs.core.rest(arglist__32018);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32023_32027 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32024_32028 = null;var count__32025_32029 = 0;var i__32026_32030 = 0;while(true){
if((i__32026_32030 < count__32025_32029))
{var n_32031 = cljs.core._nth.call(null,chunk__32024_32028,i__32026_32030);n_32031.removeAttribute(cljs.core.name.call(null,name));
{
var G__32032 = seq__32023_32027;
var G__32033 = chunk__32024_32028;
var G__32034 = count__32025_32029;
var G__32035 = (i__32026_32030 + 1);
seq__32023_32027 = G__32032;
chunk__32024_32028 = G__32033;
count__32025_32029 = G__32034;
i__32026_32030 = G__32035;
continue;
}
} else
{var temp__4092__auto___32036 = cljs.core.seq.call(null,seq__32023_32027);if(temp__4092__auto___32036)
{var seq__32023_32037__$1 = temp__4092__auto___32036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32023_32037__$1))
{var c__14545__auto___32038 = cljs.core.chunk_first.call(null,seq__32023_32037__$1);{
var G__32039 = cljs.core.chunk_rest.call(null,seq__32023_32037__$1);
var G__32040 = c__14545__auto___32038;
var G__32041 = cljs.core.count.call(null,c__14545__auto___32038);
var G__32042 = 0;
seq__32023_32027 = G__32039;
chunk__32024_32028 = G__32040;
count__32025_32029 = G__32041;
i__32026_32030 = G__32042;
continue;
}
} else
{var n_32043 = cljs.core.first.call(null,seq__32023_32037__$1);n_32043.removeAttribute(cljs.core.name.call(null,name));
{
var G__32044 = cljs.core.next.call(null,seq__32023_32037__$1);
var G__32045 = null;
var G__32046 = 0;
var G__32047 = 0;
seq__32023_32027 = G__32044;
chunk__32024_32028 = G__32045;
count__32025_32029 = G__32046;
i__32026_32030 = G__32047;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32049 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32049,0,null);var v = cljs.core.nth.call(null,vec__32049,1,null);if(cljs.core.truth_((function (){var and__13809__auto__ = k;if(cljs.core.truth_(and__13809__auto__))
{return v;
} else
{return and__13809__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__32050_SHARP_){var attr = attrs__$1.item(p1__32050_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32057_32063 = cljs.core.seq.call(null,styles);var chunk__32058_32064 = null;var count__32059_32065 = 0;var i__32060_32066 = 0;while(true){
if((i__32060_32066 < count__32059_32065))
{var vec__32061_32067 = cljs.core._nth.call(null,chunk__32058_32064,i__32060_32066);var name_32068 = cljs.core.nth.call(null,vec__32061_32067,0,null);var value_32069 = cljs.core.nth.call(null,vec__32061_32067,1,null);domina.set_style_BANG_.call(null,content,name_32068,value_32069);
{
var G__32070 = seq__32057_32063;
var G__32071 = chunk__32058_32064;
var G__32072 = count__32059_32065;
var G__32073 = (i__32060_32066 + 1);
seq__32057_32063 = G__32070;
chunk__32058_32064 = G__32071;
count__32059_32065 = G__32072;
i__32060_32066 = G__32073;
continue;
}
} else
{var temp__4092__auto___32074 = cljs.core.seq.call(null,seq__32057_32063);if(temp__4092__auto___32074)
{var seq__32057_32075__$1 = temp__4092__auto___32074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32057_32075__$1))
{var c__14545__auto___32076 = cljs.core.chunk_first.call(null,seq__32057_32075__$1);{
var G__32077 = cljs.core.chunk_rest.call(null,seq__32057_32075__$1);
var G__32078 = c__14545__auto___32076;
var G__32079 = cljs.core.count.call(null,c__14545__auto___32076);
var G__32080 = 0;
seq__32057_32063 = G__32077;
chunk__32058_32064 = G__32078;
count__32059_32065 = G__32079;
i__32060_32066 = G__32080;
continue;
}
} else
{var vec__32062_32081 = cljs.core.first.call(null,seq__32057_32075__$1);var name_32082 = cljs.core.nth.call(null,vec__32062_32081,0,null);var value_32083 = cljs.core.nth.call(null,vec__32062_32081,1,null);domina.set_style_BANG_.call(null,content,name_32082,value_32083);
{
var G__32084 = cljs.core.next.call(null,seq__32057_32075__$1);
var G__32085 = null;
var G__32086 = 0;
var G__32087 = 0;
seq__32057_32063 = G__32084;
chunk__32058_32064 = G__32085;
count__32059_32065 = G__32086;
i__32060_32066 = G__32087;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32094_32100 = cljs.core.seq.call(null,attrs);var chunk__32095_32101 = null;var count__32096_32102 = 0;var i__32097_32103 = 0;while(true){
if((i__32097_32103 < count__32096_32102))
{var vec__32098_32104 = cljs.core._nth.call(null,chunk__32095_32101,i__32097_32103);var name_32105 = cljs.core.nth.call(null,vec__32098_32104,0,null);var value_32106 = cljs.core.nth.call(null,vec__32098_32104,1,null);domina.set_attr_BANG_.call(null,content,name_32105,value_32106);
{
var G__32107 = seq__32094_32100;
var G__32108 = chunk__32095_32101;
var G__32109 = count__32096_32102;
var G__32110 = (i__32097_32103 + 1);
seq__32094_32100 = G__32107;
chunk__32095_32101 = G__32108;
count__32096_32102 = G__32109;
i__32097_32103 = G__32110;
continue;
}
} else
{var temp__4092__auto___32111 = cljs.core.seq.call(null,seq__32094_32100);if(temp__4092__auto___32111)
{var seq__32094_32112__$1 = temp__4092__auto___32111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32094_32112__$1))
{var c__14545__auto___32113 = cljs.core.chunk_first.call(null,seq__32094_32112__$1);{
var G__32114 = cljs.core.chunk_rest.call(null,seq__32094_32112__$1);
var G__32115 = c__14545__auto___32113;
var G__32116 = cljs.core.count.call(null,c__14545__auto___32113);
var G__32117 = 0;
seq__32094_32100 = G__32114;
chunk__32095_32101 = G__32115;
count__32096_32102 = G__32116;
i__32097_32103 = G__32117;
continue;
}
} else
{var vec__32099_32118 = cljs.core.first.call(null,seq__32094_32112__$1);var name_32119 = cljs.core.nth.call(null,vec__32099_32118,0,null);var value_32120 = cljs.core.nth.call(null,vec__32099_32118,1,null);domina.set_attr_BANG_.call(null,content,name_32119,value_32120);
{
var G__32121 = cljs.core.next.call(null,seq__32094_32112__$1);
var G__32122 = null;
var G__32123 = 0;
var G__32124 = 0;
seq__32094_32100 = G__32121;
chunk__32095_32101 = G__32122;
count__32096_32102 = G__32123;
i__32097_32103 = G__32124;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32129_32133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32130_32134 = null;var count__32131_32135 = 0;var i__32132_32136 = 0;while(true){
if((i__32132_32136 < count__32131_32135))
{var node_32137 = cljs.core._nth.call(null,chunk__32130_32134,i__32132_32136);goog.dom.classes.add(node_32137,class$);
{
var G__32138 = seq__32129_32133;
var G__32139 = chunk__32130_32134;
var G__32140 = count__32131_32135;
var G__32141 = (i__32132_32136 + 1);
seq__32129_32133 = G__32138;
chunk__32130_32134 = G__32139;
count__32131_32135 = G__32140;
i__32132_32136 = G__32141;
continue;
}
} else
{var temp__4092__auto___32142 = cljs.core.seq.call(null,seq__32129_32133);if(temp__4092__auto___32142)
{var seq__32129_32143__$1 = temp__4092__auto___32142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32129_32143__$1))
{var c__14545__auto___32144 = cljs.core.chunk_first.call(null,seq__32129_32143__$1);{
var G__32145 = cljs.core.chunk_rest.call(null,seq__32129_32143__$1);
var G__32146 = c__14545__auto___32144;
var G__32147 = cljs.core.count.call(null,c__14545__auto___32144);
var G__32148 = 0;
seq__32129_32133 = G__32145;
chunk__32130_32134 = G__32146;
count__32131_32135 = G__32147;
i__32132_32136 = G__32148;
continue;
}
} else
{var node_32149 = cljs.core.first.call(null,seq__32129_32143__$1);goog.dom.classes.add(node_32149,class$);
{
var G__32150 = cljs.core.next.call(null,seq__32129_32143__$1);
var G__32151 = null;
var G__32152 = 0;
var G__32153 = 0;
seq__32129_32133 = G__32150;
chunk__32130_32134 = G__32151;
count__32131_32135 = G__32152;
i__32132_32136 = G__32153;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32158_32162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32159_32163 = null;var count__32160_32164 = 0;var i__32161_32165 = 0;while(true){
if((i__32161_32165 < count__32160_32164))
{var node_32166 = cljs.core._nth.call(null,chunk__32159_32163,i__32161_32165);goog.dom.classes.remove(node_32166,class$);
{
var G__32167 = seq__32158_32162;
var G__32168 = chunk__32159_32163;
var G__32169 = count__32160_32164;
var G__32170 = (i__32161_32165 + 1);
seq__32158_32162 = G__32167;
chunk__32159_32163 = G__32168;
count__32160_32164 = G__32169;
i__32161_32165 = G__32170;
continue;
}
} else
{var temp__4092__auto___32171 = cljs.core.seq.call(null,seq__32158_32162);if(temp__4092__auto___32171)
{var seq__32158_32172__$1 = temp__4092__auto___32171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32158_32172__$1))
{var c__14545__auto___32173 = cljs.core.chunk_first.call(null,seq__32158_32172__$1);{
var G__32174 = cljs.core.chunk_rest.call(null,seq__32158_32172__$1);
var G__32175 = c__14545__auto___32173;
var G__32176 = cljs.core.count.call(null,c__14545__auto___32173);
var G__32177 = 0;
seq__32158_32162 = G__32174;
chunk__32159_32163 = G__32175;
count__32160_32164 = G__32176;
i__32161_32165 = G__32177;
continue;
}
} else
{var node_32178 = cljs.core.first.call(null,seq__32158_32172__$1);goog.dom.classes.remove(node_32178,class$);
{
var G__32179 = cljs.core.next.call(null,seq__32158_32172__$1);
var G__32180 = null;
var G__32181 = 0;
var G__32182 = 0;
seq__32158_32162 = G__32179;
chunk__32159_32163 = G__32180;
count__32160_32164 = G__32181;
i__32161_32165 = G__32182;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__32187_32191 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32188_32192 = null;var count__32189_32193 = 0;var i__32190_32194 = 0;while(true){
if((i__32190_32194 < count__32189_32193))
{var node_32195 = cljs.core._nth.call(null,chunk__32188_32192,i__32190_32194);goog.dom.classes.toggle(node_32195,class$);
{
var G__32196 = seq__32187_32191;
var G__32197 = chunk__32188_32192;
var G__32198 = count__32189_32193;
var G__32199 = (i__32190_32194 + 1);
seq__32187_32191 = G__32196;
chunk__32188_32192 = G__32197;
count__32189_32193 = G__32198;
i__32190_32194 = G__32199;
continue;
}
} else
{var temp__4092__auto___32200 = cljs.core.seq.call(null,seq__32187_32191);if(temp__4092__auto___32200)
{var seq__32187_32201__$1 = temp__4092__auto___32200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32187_32201__$1))
{var c__14545__auto___32202 = cljs.core.chunk_first.call(null,seq__32187_32201__$1);{
var G__32203 = cljs.core.chunk_rest.call(null,seq__32187_32201__$1);
var G__32204 = c__14545__auto___32202;
var G__32205 = cljs.core.count.call(null,c__14545__auto___32202);
var G__32206 = 0;
seq__32187_32191 = G__32203;
chunk__32188_32192 = G__32204;
count__32189_32193 = G__32205;
i__32190_32194 = G__32206;
continue;
}
} else
{var node_32207 = cljs.core.first.call(null,seq__32187_32201__$1);goog.dom.classes.toggle(node_32207,class$);
{
var G__32208 = cljs.core.next.call(null,seq__32187_32201__$1);
var G__32209 = null;
var G__32210 = 0;
var G__32211 = 0;
seq__32187_32191 = G__32208;
chunk__32188_32192 = G__32209;
count__32189_32193 = G__32210;
i__32190_32194 = G__32211;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_32220__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__32216_32221 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32217_32222 = null;var count__32218_32223 = 0;var i__32219_32224 = 0;while(true){
if((i__32219_32224 < count__32218_32223))
{var node_32225 = cljs.core._nth.call(null,chunk__32217_32222,i__32219_32224);goog.dom.classes.set(node_32225,classes_32220__$1);
{
var G__32226 = seq__32216_32221;
var G__32227 = chunk__32217_32222;
var G__32228 = count__32218_32223;
var G__32229 = (i__32219_32224 + 1);
seq__32216_32221 = G__32226;
chunk__32217_32222 = G__32227;
count__32218_32223 = G__32228;
i__32219_32224 = G__32229;
continue;
}
} else
{var temp__4092__auto___32230 = cljs.core.seq.call(null,seq__32216_32221);if(temp__4092__auto___32230)
{var seq__32216_32231__$1 = temp__4092__auto___32230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32216_32231__$1))
{var c__14545__auto___32232 = cljs.core.chunk_first.call(null,seq__32216_32231__$1);{
var G__32233 = cljs.core.chunk_rest.call(null,seq__32216_32231__$1);
var G__32234 = c__14545__auto___32232;
var G__32235 = cljs.core.count.call(null,c__14545__auto___32232);
var G__32236 = 0;
seq__32216_32221 = G__32233;
chunk__32217_32222 = G__32234;
count__32218_32223 = G__32235;
i__32219_32224 = G__32236;
continue;
}
} else
{var node_32237 = cljs.core.first.call(null,seq__32216_32231__$1);goog.dom.classes.set(node_32237,classes_32220__$1);
{
var G__32238 = cljs.core.next.call(null,seq__32216_32231__$1);
var G__32239 = null;
var G__32240 = 0;
var G__32241 = 0;
seq__32216_32221 = G__32238;
chunk__32217_32222 = G__32239;
count__32218_32223 = G__32240;
i__32219_32224 = G__32241;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__32246_32250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32247_32251 = null;var count__32248_32252 = 0;var i__32249_32253 = 0;while(true){
if((i__32249_32253 < count__32248_32252))
{var node_32254 = cljs.core._nth.call(null,chunk__32247_32251,i__32249_32253);goog.dom.setTextContent(node_32254,value);
{
var G__32255 = seq__32246_32250;
var G__32256 = chunk__32247_32251;
var G__32257 = count__32248_32252;
var G__32258 = (i__32249_32253 + 1);
seq__32246_32250 = G__32255;
chunk__32247_32251 = G__32256;
count__32248_32252 = G__32257;
i__32249_32253 = G__32258;
continue;
}
} else
{var temp__4092__auto___32259 = cljs.core.seq.call(null,seq__32246_32250);if(temp__4092__auto___32259)
{var seq__32246_32260__$1 = temp__4092__auto___32259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32246_32260__$1))
{var c__14545__auto___32261 = cljs.core.chunk_first.call(null,seq__32246_32260__$1);{
var G__32262 = cljs.core.chunk_rest.call(null,seq__32246_32260__$1);
var G__32263 = c__14545__auto___32261;
var G__32264 = cljs.core.count.call(null,c__14545__auto___32261);
var G__32265 = 0;
seq__32246_32250 = G__32262;
chunk__32247_32251 = G__32263;
count__32248_32252 = G__32264;
i__32249_32253 = G__32265;
continue;
}
} else
{var node_32266 = cljs.core.first.call(null,seq__32246_32260__$1);goog.dom.setTextContent(node_32266,value);
{
var G__32267 = cljs.core.next.call(null,seq__32246_32260__$1);
var G__32268 = null;
var G__32269 = 0;
var G__32270 = 0;
seq__32246_32250 = G__32267;
chunk__32247_32251 = G__32268;
count__32248_32252 = G__32269;
i__32249_32253 = G__32270;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__32275_32279 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32276_32280 = null;var count__32277_32281 = 0;var i__32278_32282 = 0;while(true){
if((i__32278_32282 < count__32277_32281))
{var node_32283 = cljs.core._nth.call(null,chunk__32276_32280,i__32278_32282);goog.dom.forms.setValue(node_32283,value);
{
var G__32284 = seq__32275_32279;
var G__32285 = chunk__32276_32280;
var G__32286 = count__32277_32281;
var G__32287 = (i__32278_32282 + 1);
seq__32275_32279 = G__32284;
chunk__32276_32280 = G__32285;
count__32277_32281 = G__32286;
i__32278_32282 = G__32287;
continue;
}
} else
{var temp__4092__auto___32288 = cljs.core.seq.call(null,seq__32275_32279);if(temp__4092__auto___32288)
{var seq__32275_32289__$1 = temp__4092__auto___32288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32275_32289__$1))
{var c__14545__auto___32290 = cljs.core.chunk_first.call(null,seq__32275_32289__$1);{
var G__32291 = cljs.core.chunk_rest.call(null,seq__32275_32289__$1);
var G__32292 = c__14545__auto___32290;
var G__32293 = cljs.core.count.call(null,c__14545__auto___32290);
var G__32294 = 0;
seq__32275_32279 = G__32291;
chunk__32276_32280 = G__32292;
count__32277_32281 = G__32293;
i__32278_32282 = G__32294;
continue;
}
} else
{var node_32295 = cljs.core.first.call(null,seq__32275_32289__$1);goog.dom.forms.setValue(node_32295,value);
{
var G__32296 = cljs.core.next.call(null,seq__32275_32289__$1);
var G__32297 = null;
var G__32298 = 0;
var G__32299 = 0;
seq__32275_32279 = G__32296;
chunk__32276_32280 = G__32297;
count__32277_32281 = G__32298;
i__32278_32282 = G__32299;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13809__auto__ = allows_inner_html_QMARK_;if(and__13809__auto__)
{var and__13809__auto____$1 = (function (){var or__13821__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13809__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13809__auto____$1;
}
} else
{return and__13809__auto__;
}
})()))
{var value_32310 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__32306_32311 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32307_32312 = null;var count__32308_32313 = 0;var i__32309_32314 = 0;while(true){
if((i__32309_32314 < count__32308_32313))
{var node_32315 = cljs.core._nth.call(null,chunk__32307_32312,i__32309_32314);node_32315.innerHTML = value_32310;
{
var G__32316 = seq__32306_32311;
var G__32317 = chunk__32307_32312;
var G__32318 = count__32308_32313;
var G__32319 = (i__32309_32314 + 1);
seq__32306_32311 = G__32316;
chunk__32307_32312 = G__32317;
count__32308_32313 = G__32318;
i__32309_32314 = G__32319;
continue;
}
} else
{var temp__4092__auto___32320 = cljs.core.seq.call(null,seq__32306_32311);if(temp__4092__auto___32320)
{var seq__32306_32321__$1 = temp__4092__auto___32320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32306_32321__$1))
{var c__14545__auto___32322 = cljs.core.chunk_first.call(null,seq__32306_32321__$1);{
var G__32323 = cljs.core.chunk_rest.call(null,seq__32306_32321__$1);
var G__32324 = c__14545__auto___32322;
var G__32325 = cljs.core.count.call(null,c__14545__auto___32322);
var G__32326 = 0;
seq__32306_32311 = G__32323;
chunk__32307_32312 = G__32324;
count__32308_32313 = G__32325;
i__32309_32314 = G__32326;
continue;
}
} else
{var node_32327 = cljs.core.first.call(null,seq__32306_32321__$1);node_32327.innerHTML = value_32310;
{
var G__32328 = cljs.core.next.call(null,seq__32306_32321__$1);
var G__32329 = null;
var G__32330 = 0;
var G__32331 = 0;
seq__32306_32311 = G__32328;
chunk__32307_32312 = G__32329;
count__32308_32313 = G__32330;
i__32309_32314 = G__32331;
continue;
}
}
} else
{}
}
break;
}
}catch (e32305){if((e32305 instanceof Error))
{var e_32332 = e32305;domina.replace_children_BANG_.call(null,content,value_32310);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32305;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13809__auto__ = bubble;if(cljs.core.truth_(and__13809__auto__))
{return (value == null);
} else
{return and__13809__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13821__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13821__auto__))
{return or__13821__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__32339_32343 = cljs.core.seq.call(null,children);var chunk__32340_32344 = null;var count__32341_32345 = 0;var i__32342_32346 = 0;while(true){
if((i__32342_32346 < count__32341_32345))
{var child_32347 = cljs.core._nth.call(null,chunk__32340_32344,i__32342_32346);frag.appendChild(child_32347);
{
var G__32348 = seq__32339_32343;
var G__32349 = chunk__32340_32344;
var G__32350 = count__32341_32345;
var G__32351 = (i__32342_32346 + 1);
seq__32339_32343 = G__32348;
chunk__32340_32344 = G__32349;
count__32341_32345 = G__32350;
i__32342_32346 = G__32351;
continue;
}
} else
{var temp__4092__auto___32352 = cljs.core.seq.call(null,seq__32339_32343);if(temp__4092__auto___32352)
{var seq__32339_32353__$1 = temp__4092__auto___32352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32339_32353__$1))
{var c__14545__auto___32354 = cljs.core.chunk_first.call(null,seq__32339_32353__$1);{
var G__32355 = cljs.core.chunk_rest.call(null,seq__32339_32353__$1);
var G__32356 = c__14545__auto___32354;
var G__32357 = cljs.core.count.call(null,c__14545__auto___32354);
var G__32358 = 0;
seq__32339_32343 = G__32355;
chunk__32340_32344 = G__32356;
count__32341_32345 = G__32357;
i__32342_32346 = G__32358;
continue;
}
} else
{var child_32359 = cljs.core.first.call(null,seq__32339_32353__$1);frag.appendChild(child_32359);
{
var G__32360 = cljs.core.next.call(null,seq__32339_32353__$1);
var G__32361 = null;
var G__32362 = 0;
var G__32363 = 0;
seq__32339_32343 = G__32360;
chunk__32340_32344 = G__32361;
count__32341_32345 = G__32362;
i__32342_32346 = G__32363;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__32333_SHARP_,p2__32334_SHARP_){return f.call(null,p1__32333_SHARP_,p2__32334_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13809__auto__ = obj;if(cljs.core.truth_(and__13809__auto__))
{var and__13809__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13809__auto____$1)
{return obj.length;
} else
{return and__13809__auto____$1;
}
} else
{return and__13809__auto__;
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
{if((function (){var G__32365 = list_thing;if(G__32365)
{var bit__14447__auto__ = (G__32365.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__32365.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32365.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32365);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32365);
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
{if((function (){var G__32366 = content;if(G__32366)
{var bit__14447__auto__ = (G__32366.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__32366.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32366.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32366);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32366);
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
{if((function (){var G__32367 = content;if(G__32367)
{var bit__14447__auto__ = (G__32367.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__32367.cljs$core$ISeqable$))
{return true;
} else
{if((!G__32367.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32367);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__32367);
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