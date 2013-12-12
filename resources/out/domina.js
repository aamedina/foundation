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
var opt_wrapper_80876 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_80877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_80878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_80877,table_section_wrapper_80877,opt_wrapper_80876,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_80878,table_section_wrapper_80877,cell_wrapper_80878,opt_wrapper_80876,table_section_wrapper_80877,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_80877]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13809__auto__ = div.firstChild;if(cljs.core.truth_(and__13809__auto__))
{return div.firstChild.childNodes;
} else
{return and__13809__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__80883 = cljs.core.seq.call(null,tbody);var chunk__80884 = null;var count__80885 = 0;var i__80886 = 0;while(true){
if((i__80886 < count__80885))
{var child = cljs.core._nth.call(null,chunk__80884,i__80886);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__80887 = seq__80883;
var G__80888 = chunk__80884;
var G__80889 = count__80885;
var G__80890 = (i__80886 + 1);
seq__80883 = G__80887;
chunk__80884 = G__80888;
count__80885 = G__80889;
i__80886 = G__80890;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__80883);if(temp__4092__auto__)
{var seq__80883__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80883__$1))
{var c__14545__auto__ = cljs.core.chunk_first.call(null,seq__80883__$1);{
var G__80891 = cljs.core.chunk_rest.call(null,seq__80883__$1);
var G__80892 = c__14545__auto__;
var G__80893 = cljs.core.count.call(null,c__14545__auto__);
var G__80894 = 0;
seq__80883 = G__80891;
chunk__80884 = G__80892;
count__80885 = G__80893;
i__80886 = G__80894;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__80883__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__80895 = cljs.core.next.call(null,seq__80883__$1);
var G__80896 = null;
var G__80897 = 0;
var G__80898 = 0;
seq__80883 = G__80895;
chunk__80884 = G__80896;
count__80885 = G__80897;
i__80886 = G__80898;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__80900 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__80900,0,null);var start_wrap = cljs.core.nth.call(null,vec__80900,1,null);var end_wrap = cljs.core.nth.call(null,vec__80900,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__80901 = wrapper.lastChild;
var G__80902 = (level - 1);
wrapper = G__80901;
level = G__80902;
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
domina.DomContent = (function (){var obj80904 = {};return obj80904;
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
log_debug.cljs$lang$applyTo = (function (arglist__80905){
var mesg = cljs.core.seq(arglist__80905);
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
log.cljs$lang$applyTo = (function (arglist__80906){
var mesg = cljs.core.seq(arglist__80906);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__80907){
var contents = cljs.core.seq(arglist__80907);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__80908_SHARP_){return p1__80908_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__80909_SHARP_,p2__80910_SHARP_){return goog.dom.insertChildAt(p1__80909_SHARP_,p2__80910_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__80912_SHARP_,p2__80911_SHARP_){return goog.dom.insertSiblingBefore(p2__80911_SHARP_,p1__80912_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__80914_SHARP_,p2__80913_SHARP_){return goog.dom.insertSiblingAfter(p2__80913_SHARP_,p1__80914_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__80916_SHARP_,p2__80915_SHARP_){return goog.dom.replaceNode(p2__80915_SHARP_,p1__80916_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__80921_80925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__80922_80926 = null;var count__80923_80927 = 0;var i__80924_80928 = 0;while(true){
if((i__80924_80928 < count__80923_80927))
{var n_80929 = cljs.core._nth.call(null,chunk__80922_80926,i__80924_80928);goog.style.setStyle(n_80929,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__80930 = seq__80921_80925;
var G__80931 = chunk__80922_80926;
var G__80932 = count__80923_80927;
var G__80933 = (i__80924_80928 + 1);
seq__80921_80925 = G__80930;
chunk__80922_80926 = G__80931;
count__80923_80927 = G__80932;
i__80924_80928 = G__80933;
continue;
}
} else
{var temp__4092__auto___80934 = cljs.core.seq.call(null,seq__80921_80925);if(temp__4092__auto___80934)
{var seq__80921_80935__$1 = temp__4092__auto___80934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80921_80935__$1))
{var c__14545__auto___80936 = cljs.core.chunk_first.call(null,seq__80921_80935__$1);{
var G__80937 = cljs.core.chunk_rest.call(null,seq__80921_80935__$1);
var G__80938 = c__14545__auto___80936;
var G__80939 = cljs.core.count.call(null,c__14545__auto___80936);
var G__80940 = 0;
seq__80921_80925 = G__80937;
chunk__80922_80926 = G__80938;
count__80923_80927 = G__80939;
i__80924_80928 = G__80940;
continue;
}
} else
{var n_80941 = cljs.core.first.call(null,seq__80921_80935__$1);goog.style.setStyle(n_80941,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__80942 = cljs.core.next.call(null,seq__80921_80935__$1);
var G__80943 = null;
var G__80944 = 0;
var G__80945 = 0;
seq__80921_80925 = G__80942;
chunk__80922_80926 = G__80943;
count__80923_80927 = G__80944;
i__80924_80928 = G__80945;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__80946){
var content = cljs.core.first(arglist__80946);
arglist__80946 = cljs.core.next(arglist__80946);
var name = cljs.core.first(arglist__80946);
var value = cljs.core.rest(arglist__80946);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__80951_80955 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__80952_80956 = null;var count__80953_80957 = 0;var i__80954_80958 = 0;while(true){
if((i__80954_80958 < count__80953_80957))
{var n_80959 = cljs.core._nth.call(null,chunk__80952_80956,i__80954_80958);n_80959.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__80960 = seq__80951_80955;
var G__80961 = chunk__80952_80956;
var G__80962 = count__80953_80957;
var G__80963 = (i__80954_80958 + 1);
seq__80951_80955 = G__80960;
chunk__80952_80956 = G__80961;
count__80953_80957 = G__80962;
i__80954_80958 = G__80963;
continue;
}
} else
{var temp__4092__auto___80964 = cljs.core.seq.call(null,seq__80951_80955);if(temp__4092__auto___80964)
{var seq__80951_80965__$1 = temp__4092__auto___80964;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80951_80965__$1))
{var c__14545__auto___80966 = cljs.core.chunk_first.call(null,seq__80951_80965__$1);{
var G__80967 = cljs.core.chunk_rest.call(null,seq__80951_80965__$1);
var G__80968 = c__14545__auto___80966;
var G__80969 = cljs.core.count.call(null,c__14545__auto___80966);
var G__80970 = 0;
seq__80951_80955 = G__80967;
chunk__80952_80956 = G__80968;
count__80953_80957 = G__80969;
i__80954_80958 = G__80970;
continue;
}
} else
{var n_80971 = cljs.core.first.call(null,seq__80951_80965__$1);n_80971.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__80972 = cljs.core.next.call(null,seq__80951_80965__$1);
var G__80973 = null;
var G__80974 = 0;
var G__80975 = 0;
seq__80951_80955 = G__80972;
chunk__80952_80956 = G__80973;
count__80953_80957 = G__80974;
i__80954_80958 = G__80975;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__80976){
var content = cljs.core.first(arglist__80976);
arglist__80976 = cljs.core.next(arglist__80976);
var name = cljs.core.first(arglist__80976);
var value = cljs.core.rest(arglist__80976);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__80981_80985 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__80982_80986 = null;var count__80983_80987 = 0;var i__80984_80988 = 0;while(true){
if((i__80984_80988 < count__80983_80987))
{var n_80989 = cljs.core._nth.call(null,chunk__80982_80986,i__80984_80988);n_80989.removeAttribute(cljs.core.name.call(null,name));
{
var G__80990 = seq__80981_80985;
var G__80991 = chunk__80982_80986;
var G__80992 = count__80983_80987;
var G__80993 = (i__80984_80988 + 1);
seq__80981_80985 = G__80990;
chunk__80982_80986 = G__80991;
count__80983_80987 = G__80992;
i__80984_80988 = G__80993;
continue;
}
} else
{var temp__4092__auto___80994 = cljs.core.seq.call(null,seq__80981_80985);if(temp__4092__auto___80994)
{var seq__80981_80995__$1 = temp__4092__auto___80994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__80981_80995__$1))
{var c__14545__auto___80996 = cljs.core.chunk_first.call(null,seq__80981_80995__$1);{
var G__80997 = cljs.core.chunk_rest.call(null,seq__80981_80995__$1);
var G__80998 = c__14545__auto___80996;
var G__80999 = cljs.core.count.call(null,c__14545__auto___80996);
var G__81000 = 0;
seq__80981_80985 = G__80997;
chunk__80982_80986 = G__80998;
count__80983_80987 = G__80999;
i__80984_80988 = G__81000;
continue;
}
} else
{var n_81001 = cljs.core.first.call(null,seq__80981_80995__$1);n_81001.removeAttribute(cljs.core.name.call(null,name));
{
var G__81002 = cljs.core.next.call(null,seq__80981_80995__$1);
var G__81003 = null;
var G__81004 = 0;
var G__81005 = 0;
seq__80981_80985 = G__81002;
chunk__80982_80986 = G__81003;
count__80983_80987 = G__81004;
i__80984_80988 = G__81005;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__81007 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__81007,0,null);var v = cljs.core.nth.call(null,vec__81007,1,null);if(cljs.core.truth_((function (){var and__13809__auto__ = k;if(cljs.core.truth_(and__13809__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__81008_SHARP_){var attr = attrs__$1.item(p1__81008_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__81015_81021 = cljs.core.seq.call(null,styles);var chunk__81016_81022 = null;var count__81017_81023 = 0;var i__81018_81024 = 0;while(true){
if((i__81018_81024 < count__81017_81023))
{var vec__81019_81025 = cljs.core._nth.call(null,chunk__81016_81022,i__81018_81024);var name_81026 = cljs.core.nth.call(null,vec__81019_81025,0,null);var value_81027 = cljs.core.nth.call(null,vec__81019_81025,1,null);domina.set_style_BANG_.call(null,content,name_81026,value_81027);
{
var G__81028 = seq__81015_81021;
var G__81029 = chunk__81016_81022;
var G__81030 = count__81017_81023;
var G__81031 = (i__81018_81024 + 1);
seq__81015_81021 = G__81028;
chunk__81016_81022 = G__81029;
count__81017_81023 = G__81030;
i__81018_81024 = G__81031;
continue;
}
} else
{var temp__4092__auto___81032 = cljs.core.seq.call(null,seq__81015_81021);if(temp__4092__auto___81032)
{var seq__81015_81033__$1 = temp__4092__auto___81032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81015_81033__$1))
{var c__14545__auto___81034 = cljs.core.chunk_first.call(null,seq__81015_81033__$1);{
var G__81035 = cljs.core.chunk_rest.call(null,seq__81015_81033__$1);
var G__81036 = c__14545__auto___81034;
var G__81037 = cljs.core.count.call(null,c__14545__auto___81034);
var G__81038 = 0;
seq__81015_81021 = G__81035;
chunk__81016_81022 = G__81036;
count__81017_81023 = G__81037;
i__81018_81024 = G__81038;
continue;
}
} else
{var vec__81020_81039 = cljs.core.first.call(null,seq__81015_81033__$1);var name_81040 = cljs.core.nth.call(null,vec__81020_81039,0,null);var value_81041 = cljs.core.nth.call(null,vec__81020_81039,1,null);domina.set_style_BANG_.call(null,content,name_81040,value_81041);
{
var G__81042 = cljs.core.next.call(null,seq__81015_81033__$1);
var G__81043 = null;
var G__81044 = 0;
var G__81045 = 0;
seq__81015_81021 = G__81042;
chunk__81016_81022 = G__81043;
count__81017_81023 = G__81044;
i__81018_81024 = G__81045;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__81052_81058 = cljs.core.seq.call(null,attrs);var chunk__81053_81059 = null;var count__81054_81060 = 0;var i__81055_81061 = 0;while(true){
if((i__81055_81061 < count__81054_81060))
{var vec__81056_81062 = cljs.core._nth.call(null,chunk__81053_81059,i__81055_81061);var name_81063 = cljs.core.nth.call(null,vec__81056_81062,0,null);var value_81064 = cljs.core.nth.call(null,vec__81056_81062,1,null);domina.set_attr_BANG_.call(null,content,name_81063,value_81064);
{
var G__81065 = seq__81052_81058;
var G__81066 = chunk__81053_81059;
var G__81067 = count__81054_81060;
var G__81068 = (i__81055_81061 + 1);
seq__81052_81058 = G__81065;
chunk__81053_81059 = G__81066;
count__81054_81060 = G__81067;
i__81055_81061 = G__81068;
continue;
}
} else
{var temp__4092__auto___81069 = cljs.core.seq.call(null,seq__81052_81058);if(temp__4092__auto___81069)
{var seq__81052_81070__$1 = temp__4092__auto___81069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81052_81070__$1))
{var c__14545__auto___81071 = cljs.core.chunk_first.call(null,seq__81052_81070__$1);{
var G__81072 = cljs.core.chunk_rest.call(null,seq__81052_81070__$1);
var G__81073 = c__14545__auto___81071;
var G__81074 = cljs.core.count.call(null,c__14545__auto___81071);
var G__81075 = 0;
seq__81052_81058 = G__81072;
chunk__81053_81059 = G__81073;
count__81054_81060 = G__81074;
i__81055_81061 = G__81075;
continue;
}
} else
{var vec__81057_81076 = cljs.core.first.call(null,seq__81052_81070__$1);var name_81077 = cljs.core.nth.call(null,vec__81057_81076,0,null);var value_81078 = cljs.core.nth.call(null,vec__81057_81076,1,null);domina.set_attr_BANG_.call(null,content,name_81077,value_81078);
{
var G__81079 = cljs.core.next.call(null,seq__81052_81070__$1);
var G__81080 = null;
var G__81081 = 0;
var G__81082 = 0;
seq__81052_81058 = G__81079;
chunk__81053_81059 = G__81080;
count__81054_81060 = G__81081;
i__81055_81061 = G__81082;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__81087_81091 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81088_81092 = null;var count__81089_81093 = 0;var i__81090_81094 = 0;while(true){
if((i__81090_81094 < count__81089_81093))
{var node_81095 = cljs.core._nth.call(null,chunk__81088_81092,i__81090_81094);goog.dom.classes.add(node_81095,class$);
{
var G__81096 = seq__81087_81091;
var G__81097 = chunk__81088_81092;
var G__81098 = count__81089_81093;
var G__81099 = (i__81090_81094 + 1);
seq__81087_81091 = G__81096;
chunk__81088_81092 = G__81097;
count__81089_81093 = G__81098;
i__81090_81094 = G__81099;
continue;
}
} else
{var temp__4092__auto___81100 = cljs.core.seq.call(null,seq__81087_81091);if(temp__4092__auto___81100)
{var seq__81087_81101__$1 = temp__4092__auto___81100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81087_81101__$1))
{var c__14545__auto___81102 = cljs.core.chunk_first.call(null,seq__81087_81101__$1);{
var G__81103 = cljs.core.chunk_rest.call(null,seq__81087_81101__$1);
var G__81104 = c__14545__auto___81102;
var G__81105 = cljs.core.count.call(null,c__14545__auto___81102);
var G__81106 = 0;
seq__81087_81091 = G__81103;
chunk__81088_81092 = G__81104;
count__81089_81093 = G__81105;
i__81090_81094 = G__81106;
continue;
}
} else
{var node_81107 = cljs.core.first.call(null,seq__81087_81101__$1);goog.dom.classes.add(node_81107,class$);
{
var G__81108 = cljs.core.next.call(null,seq__81087_81101__$1);
var G__81109 = null;
var G__81110 = 0;
var G__81111 = 0;
seq__81087_81091 = G__81108;
chunk__81088_81092 = G__81109;
count__81089_81093 = G__81110;
i__81090_81094 = G__81111;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__81116_81120 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81117_81121 = null;var count__81118_81122 = 0;var i__81119_81123 = 0;while(true){
if((i__81119_81123 < count__81118_81122))
{var node_81124 = cljs.core._nth.call(null,chunk__81117_81121,i__81119_81123);goog.dom.classes.remove(node_81124,class$);
{
var G__81125 = seq__81116_81120;
var G__81126 = chunk__81117_81121;
var G__81127 = count__81118_81122;
var G__81128 = (i__81119_81123 + 1);
seq__81116_81120 = G__81125;
chunk__81117_81121 = G__81126;
count__81118_81122 = G__81127;
i__81119_81123 = G__81128;
continue;
}
} else
{var temp__4092__auto___81129 = cljs.core.seq.call(null,seq__81116_81120);if(temp__4092__auto___81129)
{var seq__81116_81130__$1 = temp__4092__auto___81129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81116_81130__$1))
{var c__14545__auto___81131 = cljs.core.chunk_first.call(null,seq__81116_81130__$1);{
var G__81132 = cljs.core.chunk_rest.call(null,seq__81116_81130__$1);
var G__81133 = c__14545__auto___81131;
var G__81134 = cljs.core.count.call(null,c__14545__auto___81131);
var G__81135 = 0;
seq__81116_81120 = G__81132;
chunk__81117_81121 = G__81133;
count__81118_81122 = G__81134;
i__81119_81123 = G__81135;
continue;
}
} else
{var node_81136 = cljs.core.first.call(null,seq__81116_81130__$1);goog.dom.classes.remove(node_81136,class$);
{
var G__81137 = cljs.core.next.call(null,seq__81116_81130__$1);
var G__81138 = null;
var G__81139 = 0;
var G__81140 = 0;
seq__81116_81120 = G__81137;
chunk__81117_81121 = G__81138;
count__81118_81122 = G__81139;
i__81119_81123 = G__81140;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__81145_81149 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81146_81150 = null;var count__81147_81151 = 0;var i__81148_81152 = 0;while(true){
if((i__81148_81152 < count__81147_81151))
{var node_81153 = cljs.core._nth.call(null,chunk__81146_81150,i__81148_81152);goog.dom.classes.toggle(node_81153,class$);
{
var G__81154 = seq__81145_81149;
var G__81155 = chunk__81146_81150;
var G__81156 = count__81147_81151;
var G__81157 = (i__81148_81152 + 1);
seq__81145_81149 = G__81154;
chunk__81146_81150 = G__81155;
count__81147_81151 = G__81156;
i__81148_81152 = G__81157;
continue;
}
} else
{var temp__4092__auto___81158 = cljs.core.seq.call(null,seq__81145_81149);if(temp__4092__auto___81158)
{var seq__81145_81159__$1 = temp__4092__auto___81158;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81145_81159__$1))
{var c__14545__auto___81160 = cljs.core.chunk_first.call(null,seq__81145_81159__$1);{
var G__81161 = cljs.core.chunk_rest.call(null,seq__81145_81159__$1);
var G__81162 = c__14545__auto___81160;
var G__81163 = cljs.core.count.call(null,c__14545__auto___81160);
var G__81164 = 0;
seq__81145_81149 = G__81161;
chunk__81146_81150 = G__81162;
count__81147_81151 = G__81163;
i__81148_81152 = G__81164;
continue;
}
} else
{var node_81165 = cljs.core.first.call(null,seq__81145_81159__$1);goog.dom.classes.toggle(node_81165,class$);
{
var G__81166 = cljs.core.next.call(null,seq__81145_81159__$1);
var G__81167 = null;
var G__81168 = 0;
var G__81169 = 0;
seq__81145_81149 = G__81166;
chunk__81146_81150 = G__81167;
count__81147_81151 = G__81168;
i__81148_81152 = G__81169;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_81178__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__81174_81179 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81175_81180 = null;var count__81176_81181 = 0;var i__81177_81182 = 0;while(true){
if((i__81177_81182 < count__81176_81181))
{var node_81183 = cljs.core._nth.call(null,chunk__81175_81180,i__81177_81182);goog.dom.classes.set(node_81183,classes_81178__$1);
{
var G__81184 = seq__81174_81179;
var G__81185 = chunk__81175_81180;
var G__81186 = count__81176_81181;
var G__81187 = (i__81177_81182 + 1);
seq__81174_81179 = G__81184;
chunk__81175_81180 = G__81185;
count__81176_81181 = G__81186;
i__81177_81182 = G__81187;
continue;
}
} else
{var temp__4092__auto___81188 = cljs.core.seq.call(null,seq__81174_81179);if(temp__4092__auto___81188)
{var seq__81174_81189__$1 = temp__4092__auto___81188;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81174_81189__$1))
{var c__14545__auto___81190 = cljs.core.chunk_first.call(null,seq__81174_81189__$1);{
var G__81191 = cljs.core.chunk_rest.call(null,seq__81174_81189__$1);
var G__81192 = c__14545__auto___81190;
var G__81193 = cljs.core.count.call(null,c__14545__auto___81190);
var G__81194 = 0;
seq__81174_81179 = G__81191;
chunk__81175_81180 = G__81192;
count__81176_81181 = G__81193;
i__81177_81182 = G__81194;
continue;
}
} else
{var node_81195 = cljs.core.first.call(null,seq__81174_81189__$1);goog.dom.classes.set(node_81195,classes_81178__$1);
{
var G__81196 = cljs.core.next.call(null,seq__81174_81189__$1);
var G__81197 = null;
var G__81198 = 0;
var G__81199 = 0;
seq__81174_81179 = G__81196;
chunk__81175_81180 = G__81197;
count__81176_81181 = G__81198;
i__81177_81182 = G__81199;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__81204_81208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81205_81209 = null;var count__81206_81210 = 0;var i__81207_81211 = 0;while(true){
if((i__81207_81211 < count__81206_81210))
{var node_81212 = cljs.core._nth.call(null,chunk__81205_81209,i__81207_81211);goog.dom.setTextContent(node_81212,value);
{
var G__81213 = seq__81204_81208;
var G__81214 = chunk__81205_81209;
var G__81215 = count__81206_81210;
var G__81216 = (i__81207_81211 + 1);
seq__81204_81208 = G__81213;
chunk__81205_81209 = G__81214;
count__81206_81210 = G__81215;
i__81207_81211 = G__81216;
continue;
}
} else
{var temp__4092__auto___81217 = cljs.core.seq.call(null,seq__81204_81208);if(temp__4092__auto___81217)
{var seq__81204_81218__$1 = temp__4092__auto___81217;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81204_81218__$1))
{var c__14545__auto___81219 = cljs.core.chunk_first.call(null,seq__81204_81218__$1);{
var G__81220 = cljs.core.chunk_rest.call(null,seq__81204_81218__$1);
var G__81221 = c__14545__auto___81219;
var G__81222 = cljs.core.count.call(null,c__14545__auto___81219);
var G__81223 = 0;
seq__81204_81208 = G__81220;
chunk__81205_81209 = G__81221;
count__81206_81210 = G__81222;
i__81207_81211 = G__81223;
continue;
}
} else
{var node_81224 = cljs.core.first.call(null,seq__81204_81218__$1);goog.dom.setTextContent(node_81224,value);
{
var G__81225 = cljs.core.next.call(null,seq__81204_81218__$1);
var G__81226 = null;
var G__81227 = 0;
var G__81228 = 0;
seq__81204_81208 = G__81225;
chunk__81205_81209 = G__81226;
count__81206_81210 = G__81227;
i__81207_81211 = G__81228;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__81233_81237 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81234_81238 = null;var count__81235_81239 = 0;var i__81236_81240 = 0;while(true){
if((i__81236_81240 < count__81235_81239))
{var node_81241 = cljs.core._nth.call(null,chunk__81234_81238,i__81236_81240);goog.dom.forms.setValue(node_81241,value);
{
var G__81242 = seq__81233_81237;
var G__81243 = chunk__81234_81238;
var G__81244 = count__81235_81239;
var G__81245 = (i__81236_81240 + 1);
seq__81233_81237 = G__81242;
chunk__81234_81238 = G__81243;
count__81235_81239 = G__81244;
i__81236_81240 = G__81245;
continue;
}
} else
{var temp__4092__auto___81246 = cljs.core.seq.call(null,seq__81233_81237);if(temp__4092__auto___81246)
{var seq__81233_81247__$1 = temp__4092__auto___81246;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81233_81247__$1))
{var c__14545__auto___81248 = cljs.core.chunk_first.call(null,seq__81233_81247__$1);{
var G__81249 = cljs.core.chunk_rest.call(null,seq__81233_81247__$1);
var G__81250 = c__14545__auto___81248;
var G__81251 = cljs.core.count.call(null,c__14545__auto___81248);
var G__81252 = 0;
seq__81233_81237 = G__81249;
chunk__81234_81238 = G__81250;
count__81235_81239 = G__81251;
i__81236_81240 = G__81252;
continue;
}
} else
{var node_81253 = cljs.core.first.call(null,seq__81233_81247__$1);goog.dom.forms.setValue(node_81253,value);
{
var G__81254 = cljs.core.next.call(null,seq__81233_81247__$1);
var G__81255 = null;
var G__81256 = 0;
var G__81257 = 0;
seq__81233_81237 = G__81254;
chunk__81234_81238 = G__81255;
count__81235_81239 = G__81256;
i__81236_81240 = G__81257;
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
{var value_81268 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__81264_81269 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__81265_81270 = null;var count__81266_81271 = 0;var i__81267_81272 = 0;while(true){
if((i__81267_81272 < count__81266_81271))
{var node_81273 = cljs.core._nth.call(null,chunk__81265_81270,i__81267_81272);node_81273.innerHTML = value_81268;
{
var G__81274 = seq__81264_81269;
var G__81275 = chunk__81265_81270;
var G__81276 = count__81266_81271;
var G__81277 = (i__81267_81272 + 1);
seq__81264_81269 = G__81274;
chunk__81265_81270 = G__81275;
count__81266_81271 = G__81276;
i__81267_81272 = G__81277;
continue;
}
} else
{var temp__4092__auto___81278 = cljs.core.seq.call(null,seq__81264_81269);if(temp__4092__auto___81278)
{var seq__81264_81279__$1 = temp__4092__auto___81278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81264_81279__$1))
{var c__14545__auto___81280 = cljs.core.chunk_first.call(null,seq__81264_81279__$1);{
var G__81281 = cljs.core.chunk_rest.call(null,seq__81264_81279__$1);
var G__81282 = c__14545__auto___81280;
var G__81283 = cljs.core.count.call(null,c__14545__auto___81280);
var G__81284 = 0;
seq__81264_81269 = G__81281;
chunk__81265_81270 = G__81282;
count__81266_81271 = G__81283;
i__81267_81272 = G__81284;
continue;
}
} else
{var node_81285 = cljs.core.first.call(null,seq__81264_81279__$1);node_81285.innerHTML = value_81268;
{
var G__81286 = cljs.core.next.call(null,seq__81264_81279__$1);
var G__81287 = null;
var G__81288 = 0;
var G__81289 = 0;
seq__81264_81269 = G__81286;
chunk__81265_81270 = G__81287;
count__81266_81271 = G__81288;
i__81267_81272 = G__81289;
continue;
}
}
} else
{}
}
break;
}
}catch (e81263){if((e81263 instanceof Error))
{var e_81290 = e81263;domina.replace_children_BANG_.call(null,content,value_81268);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e81263;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__81297_81301 = cljs.core.seq.call(null,children);var chunk__81298_81302 = null;var count__81299_81303 = 0;var i__81300_81304 = 0;while(true){
if((i__81300_81304 < count__81299_81303))
{var child_81305 = cljs.core._nth.call(null,chunk__81298_81302,i__81300_81304);frag.appendChild(child_81305);
{
var G__81306 = seq__81297_81301;
var G__81307 = chunk__81298_81302;
var G__81308 = count__81299_81303;
var G__81309 = (i__81300_81304 + 1);
seq__81297_81301 = G__81306;
chunk__81298_81302 = G__81307;
count__81299_81303 = G__81308;
i__81300_81304 = G__81309;
continue;
}
} else
{var temp__4092__auto___81310 = cljs.core.seq.call(null,seq__81297_81301);if(temp__4092__auto___81310)
{var seq__81297_81311__$1 = temp__4092__auto___81310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__81297_81311__$1))
{var c__14545__auto___81312 = cljs.core.chunk_first.call(null,seq__81297_81311__$1);{
var G__81313 = cljs.core.chunk_rest.call(null,seq__81297_81311__$1);
var G__81314 = c__14545__auto___81312;
var G__81315 = cljs.core.count.call(null,c__14545__auto___81312);
var G__81316 = 0;
seq__81297_81301 = G__81313;
chunk__81298_81302 = G__81314;
count__81299_81303 = G__81315;
i__81300_81304 = G__81316;
continue;
}
} else
{var child_81317 = cljs.core.first.call(null,seq__81297_81311__$1);frag.appendChild(child_81317);
{
var G__81318 = cljs.core.next.call(null,seq__81297_81311__$1);
var G__81319 = null;
var G__81320 = 0;
var G__81321 = 0;
seq__81297_81301 = G__81318;
chunk__81298_81302 = G__81319;
count__81299_81303 = G__81320;
i__81300_81304 = G__81321;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__81291_SHARP_,p2__81292_SHARP_){return f.call(null,p1__81291_SHARP_,p2__81292_SHARP_);
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
{if((function (){var G__81323 = list_thing;if(G__81323)
{var bit__14447__auto__ = (G__81323.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__81323.cljs$core$ISeqable$))
{return true;
} else
{if((!G__81323.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81323);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81323);
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
{if((function (){var G__81324 = content;if(G__81324)
{var bit__14447__auto__ = (G__81324.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__81324.cljs$core$ISeqable$))
{return true;
} else
{if((!G__81324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81324);
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
{if((function (){var G__81325 = content;if(G__81325)
{var bit__14447__auto__ = (G__81325.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14447__auto__) || (G__81325.cljs$core$ISeqable$))
{return true;
} else
{if((!G__81325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81325);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__81325);
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