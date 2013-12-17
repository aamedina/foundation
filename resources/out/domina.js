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
var opt_wrapper_384857 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_384858 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_384859 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_384858,table_section_wrapper_384858,opt_wrapper_384857,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_384859,table_section_wrapper_384858,cell_wrapper_384859,opt_wrapper_384857,table_section_wrapper_384858,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_384858]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13967__auto__ = div.firstChild;if(cljs.core.truth_(and__13967__auto__))
{return div.firstChild.childNodes;
} else
{return and__13967__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__384864 = cljs.core.seq.call(null,tbody);var chunk__384865 = null;var count__384866 = 0;var i__384867 = 0;while(true){
if((i__384867 < count__384866))
{var child = cljs.core._nth.call(null,chunk__384865,i__384867);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__384868 = seq__384864;
var G__384869 = chunk__384865;
var G__384870 = count__384866;
var G__384871 = (i__384867 + 1);
seq__384864 = G__384868;
chunk__384865 = G__384869;
count__384866 = G__384870;
i__384867 = G__384871;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__384864);if(temp__4092__auto__)
{var seq__384864__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384864__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__384864__$1);{
var G__384872 = cljs.core.chunk_rest.call(null,seq__384864__$1);
var G__384873 = c__14708__auto__;
var G__384874 = cljs.core.count.call(null,c__14708__auto__);
var G__384875 = 0;
seq__384864 = G__384872;
chunk__384865 = G__384873;
count__384866 = G__384874;
i__384867 = G__384875;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__384864__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__384876 = cljs.core.next.call(null,seq__384864__$1);
var G__384877 = null;
var G__384878 = 0;
var G__384879 = 0;
seq__384864 = G__384876;
chunk__384865 = G__384877;
count__384866 = G__384878;
i__384867 = G__384879;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__384881 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__384881,0,null);var start_wrap = cljs.core.nth.call(null,vec__384881,1,null);var end_wrap = cljs.core.nth.call(null,vec__384881,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__384882 = wrapper.lastChild;
var G__384883 = (level - 1);
wrapper = G__384882;
level = G__384883;
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
if(cljs.core.truth_((function (){var and__13967__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13967__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13967__auto__;
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
domina.DomContent = (function (){var obj384885 = {};return obj384885;
})();
domina.nodes = (function nodes(content){if((function (){var and__13967__auto__ = content;if(and__13967__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13967__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14587__auto__ = (((content == null))?null:content);return (function (){var or__13979__auto__ = (domina.nodes[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (domina.nodes["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13967__auto__ = nodeseq;if(and__13967__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13967__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14587__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13979__auto__ = (domina.single_node[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (domina.single_node["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13967__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13967__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13967__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__384886){
var mesg = cljs.core.seq(arglist__384886);
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
log.cljs$lang$applyTo = (function (arglist__384887){
var mesg = cljs.core.seq(arglist__384887);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__384888){
var contents = cljs.core.seq(arglist__384888);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__384889_SHARP_){return p1__384889_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__384890_SHARP_,p2__384891_SHARP_){return goog.dom.insertChildAt(p1__384890_SHARP_,p2__384891_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__384893_SHARP_,p2__384892_SHARP_){return goog.dom.insertSiblingBefore(p2__384892_SHARP_,p1__384893_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__384895_SHARP_,p2__384894_SHARP_){return goog.dom.insertSiblingAfter(p2__384894_SHARP_,p1__384895_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__384897_SHARP_,p2__384896_SHARP_){return goog.dom.replaceNode(p2__384896_SHARP_,p1__384897_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__384902_384906 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__384903_384907 = null;var count__384904_384908 = 0;var i__384905_384909 = 0;while(true){
if((i__384905_384909 < count__384904_384908))
{var n_384910 = cljs.core._nth.call(null,chunk__384903_384907,i__384905_384909);goog.style.setStyle(n_384910,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__384911 = seq__384902_384906;
var G__384912 = chunk__384903_384907;
var G__384913 = count__384904_384908;
var G__384914 = (i__384905_384909 + 1);
seq__384902_384906 = G__384911;
chunk__384903_384907 = G__384912;
count__384904_384908 = G__384913;
i__384905_384909 = G__384914;
continue;
}
} else
{var temp__4092__auto___384915 = cljs.core.seq.call(null,seq__384902_384906);if(temp__4092__auto___384915)
{var seq__384902_384916__$1 = temp__4092__auto___384915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384902_384916__$1))
{var c__14708__auto___384917 = cljs.core.chunk_first.call(null,seq__384902_384916__$1);{
var G__384918 = cljs.core.chunk_rest.call(null,seq__384902_384916__$1);
var G__384919 = c__14708__auto___384917;
var G__384920 = cljs.core.count.call(null,c__14708__auto___384917);
var G__384921 = 0;
seq__384902_384906 = G__384918;
chunk__384903_384907 = G__384919;
count__384904_384908 = G__384920;
i__384905_384909 = G__384921;
continue;
}
} else
{var n_384922 = cljs.core.first.call(null,seq__384902_384916__$1);goog.style.setStyle(n_384922,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__384923 = cljs.core.next.call(null,seq__384902_384916__$1);
var G__384924 = null;
var G__384925 = 0;
var G__384926 = 0;
seq__384902_384906 = G__384923;
chunk__384903_384907 = G__384924;
count__384904_384908 = G__384925;
i__384905_384909 = G__384926;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__384927){
var content = cljs.core.first(arglist__384927);
arglist__384927 = cljs.core.next(arglist__384927);
var name = cljs.core.first(arglist__384927);
var value = cljs.core.rest(arglist__384927);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__384932_384936 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__384933_384937 = null;var count__384934_384938 = 0;var i__384935_384939 = 0;while(true){
if((i__384935_384939 < count__384934_384938))
{var n_384940 = cljs.core._nth.call(null,chunk__384933_384937,i__384935_384939);n_384940.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__384941 = seq__384932_384936;
var G__384942 = chunk__384933_384937;
var G__384943 = count__384934_384938;
var G__384944 = (i__384935_384939 + 1);
seq__384932_384936 = G__384941;
chunk__384933_384937 = G__384942;
count__384934_384938 = G__384943;
i__384935_384939 = G__384944;
continue;
}
} else
{var temp__4092__auto___384945 = cljs.core.seq.call(null,seq__384932_384936);if(temp__4092__auto___384945)
{var seq__384932_384946__$1 = temp__4092__auto___384945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384932_384946__$1))
{var c__14708__auto___384947 = cljs.core.chunk_first.call(null,seq__384932_384946__$1);{
var G__384948 = cljs.core.chunk_rest.call(null,seq__384932_384946__$1);
var G__384949 = c__14708__auto___384947;
var G__384950 = cljs.core.count.call(null,c__14708__auto___384947);
var G__384951 = 0;
seq__384932_384936 = G__384948;
chunk__384933_384937 = G__384949;
count__384934_384938 = G__384950;
i__384935_384939 = G__384951;
continue;
}
} else
{var n_384952 = cljs.core.first.call(null,seq__384932_384946__$1);n_384952.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__384953 = cljs.core.next.call(null,seq__384932_384946__$1);
var G__384954 = null;
var G__384955 = 0;
var G__384956 = 0;
seq__384932_384936 = G__384953;
chunk__384933_384937 = G__384954;
count__384934_384938 = G__384955;
i__384935_384939 = G__384956;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__384957){
var content = cljs.core.first(arglist__384957);
arglist__384957 = cljs.core.next(arglist__384957);
var name = cljs.core.first(arglist__384957);
var value = cljs.core.rest(arglist__384957);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__384962_384966 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__384963_384967 = null;var count__384964_384968 = 0;var i__384965_384969 = 0;while(true){
if((i__384965_384969 < count__384964_384968))
{var n_384970 = cljs.core._nth.call(null,chunk__384963_384967,i__384965_384969);n_384970.removeAttribute(cljs.core.name.call(null,name));
{
var G__384971 = seq__384962_384966;
var G__384972 = chunk__384963_384967;
var G__384973 = count__384964_384968;
var G__384974 = (i__384965_384969 + 1);
seq__384962_384966 = G__384971;
chunk__384963_384967 = G__384972;
count__384964_384968 = G__384973;
i__384965_384969 = G__384974;
continue;
}
} else
{var temp__4092__auto___384975 = cljs.core.seq.call(null,seq__384962_384966);if(temp__4092__auto___384975)
{var seq__384962_384976__$1 = temp__4092__auto___384975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384962_384976__$1))
{var c__14708__auto___384977 = cljs.core.chunk_first.call(null,seq__384962_384976__$1);{
var G__384978 = cljs.core.chunk_rest.call(null,seq__384962_384976__$1);
var G__384979 = c__14708__auto___384977;
var G__384980 = cljs.core.count.call(null,c__14708__auto___384977);
var G__384981 = 0;
seq__384962_384966 = G__384978;
chunk__384963_384967 = G__384979;
count__384964_384968 = G__384980;
i__384965_384969 = G__384981;
continue;
}
} else
{var n_384982 = cljs.core.first.call(null,seq__384962_384976__$1);n_384982.removeAttribute(cljs.core.name.call(null,name));
{
var G__384983 = cljs.core.next.call(null,seq__384962_384976__$1);
var G__384984 = null;
var G__384985 = 0;
var G__384986 = 0;
seq__384962_384966 = G__384983;
chunk__384963_384967 = G__384984;
count__384964_384968 = G__384985;
i__384965_384969 = G__384986;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__384988 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__384988,0,null);var v = cljs.core.nth.call(null,vec__384988,1,null);if(cljs.core.truth_((function (){var and__13967__auto__ = k;if(cljs.core.truth_(and__13967__auto__))
{return v;
} else
{return and__13967__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__384989_SHARP_){var attr = attrs__$1.item(p1__384989_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__384996_385002 = cljs.core.seq.call(null,styles);var chunk__384997_385003 = null;var count__384998_385004 = 0;var i__384999_385005 = 0;while(true){
if((i__384999_385005 < count__384998_385004))
{var vec__385000_385006 = cljs.core._nth.call(null,chunk__384997_385003,i__384999_385005);var name_385007 = cljs.core.nth.call(null,vec__385000_385006,0,null);var value_385008 = cljs.core.nth.call(null,vec__385000_385006,1,null);domina.set_style_BANG_.call(null,content,name_385007,value_385008);
{
var G__385009 = seq__384996_385002;
var G__385010 = chunk__384997_385003;
var G__385011 = count__384998_385004;
var G__385012 = (i__384999_385005 + 1);
seq__384996_385002 = G__385009;
chunk__384997_385003 = G__385010;
count__384998_385004 = G__385011;
i__384999_385005 = G__385012;
continue;
}
} else
{var temp__4092__auto___385013 = cljs.core.seq.call(null,seq__384996_385002);if(temp__4092__auto___385013)
{var seq__384996_385014__$1 = temp__4092__auto___385013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__384996_385014__$1))
{var c__14708__auto___385015 = cljs.core.chunk_first.call(null,seq__384996_385014__$1);{
var G__385016 = cljs.core.chunk_rest.call(null,seq__384996_385014__$1);
var G__385017 = c__14708__auto___385015;
var G__385018 = cljs.core.count.call(null,c__14708__auto___385015);
var G__385019 = 0;
seq__384996_385002 = G__385016;
chunk__384997_385003 = G__385017;
count__384998_385004 = G__385018;
i__384999_385005 = G__385019;
continue;
}
} else
{var vec__385001_385020 = cljs.core.first.call(null,seq__384996_385014__$1);var name_385021 = cljs.core.nth.call(null,vec__385001_385020,0,null);var value_385022 = cljs.core.nth.call(null,vec__385001_385020,1,null);domina.set_style_BANG_.call(null,content,name_385021,value_385022);
{
var G__385023 = cljs.core.next.call(null,seq__384996_385014__$1);
var G__385024 = null;
var G__385025 = 0;
var G__385026 = 0;
seq__384996_385002 = G__385023;
chunk__384997_385003 = G__385024;
count__384998_385004 = G__385025;
i__384999_385005 = G__385026;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__385033_385039 = cljs.core.seq.call(null,attrs);var chunk__385034_385040 = null;var count__385035_385041 = 0;var i__385036_385042 = 0;while(true){
if((i__385036_385042 < count__385035_385041))
{var vec__385037_385043 = cljs.core._nth.call(null,chunk__385034_385040,i__385036_385042);var name_385044 = cljs.core.nth.call(null,vec__385037_385043,0,null);var value_385045 = cljs.core.nth.call(null,vec__385037_385043,1,null);domina.set_attr_BANG_.call(null,content,name_385044,value_385045);
{
var G__385046 = seq__385033_385039;
var G__385047 = chunk__385034_385040;
var G__385048 = count__385035_385041;
var G__385049 = (i__385036_385042 + 1);
seq__385033_385039 = G__385046;
chunk__385034_385040 = G__385047;
count__385035_385041 = G__385048;
i__385036_385042 = G__385049;
continue;
}
} else
{var temp__4092__auto___385050 = cljs.core.seq.call(null,seq__385033_385039);if(temp__4092__auto___385050)
{var seq__385033_385051__$1 = temp__4092__auto___385050;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385033_385051__$1))
{var c__14708__auto___385052 = cljs.core.chunk_first.call(null,seq__385033_385051__$1);{
var G__385053 = cljs.core.chunk_rest.call(null,seq__385033_385051__$1);
var G__385054 = c__14708__auto___385052;
var G__385055 = cljs.core.count.call(null,c__14708__auto___385052);
var G__385056 = 0;
seq__385033_385039 = G__385053;
chunk__385034_385040 = G__385054;
count__385035_385041 = G__385055;
i__385036_385042 = G__385056;
continue;
}
} else
{var vec__385038_385057 = cljs.core.first.call(null,seq__385033_385051__$1);var name_385058 = cljs.core.nth.call(null,vec__385038_385057,0,null);var value_385059 = cljs.core.nth.call(null,vec__385038_385057,1,null);domina.set_attr_BANG_.call(null,content,name_385058,value_385059);
{
var G__385060 = cljs.core.next.call(null,seq__385033_385051__$1);
var G__385061 = null;
var G__385062 = 0;
var G__385063 = 0;
seq__385033_385039 = G__385060;
chunk__385034_385040 = G__385061;
count__385035_385041 = G__385062;
i__385036_385042 = G__385063;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__385068_385072 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385069_385073 = null;var count__385070_385074 = 0;var i__385071_385075 = 0;while(true){
if((i__385071_385075 < count__385070_385074))
{var node_385076 = cljs.core._nth.call(null,chunk__385069_385073,i__385071_385075);goog.dom.classes.add(node_385076,class$);
{
var G__385077 = seq__385068_385072;
var G__385078 = chunk__385069_385073;
var G__385079 = count__385070_385074;
var G__385080 = (i__385071_385075 + 1);
seq__385068_385072 = G__385077;
chunk__385069_385073 = G__385078;
count__385070_385074 = G__385079;
i__385071_385075 = G__385080;
continue;
}
} else
{var temp__4092__auto___385081 = cljs.core.seq.call(null,seq__385068_385072);if(temp__4092__auto___385081)
{var seq__385068_385082__$1 = temp__4092__auto___385081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385068_385082__$1))
{var c__14708__auto___385083 = cljs.core.chunk_first.call(null,seq__385068_385082__$1);{
var G__385084 = cljs.core.chunk_rest.call(null,seq__385068_385082__$1);
var G__385085 = c__14708__auto___385083;
var G__385086 = cljs.core.count.call(null,c__14708__auto___385083);
var G__385087 = 0;
seq__385068_385072 = G__385084;
chunk__385069_385073 = G__385085;
count__385070_385074 = G__385086;
i__385071_385075 = G__385087;
continue;
}
} else
{var node_385088 = cljs.core.first.call(null,seq__385068_385082__$1);goog.dom.classes.add(node_385088,class$);
{
var G__385089 = cljs.core.next.call(null,seq__385068_385082__$1);
var G__385090 = null;
var G__385091 = 0;
var G__385092 = 0;
seq__385068_385072 = G__385089;
chunk__385069_385073 = G__385090;
count__385070_385074 = G__385091;
i__385071_385075 = G__385092;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__385097_385101 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385098_385102 = null;var count__385099_385103 = 0;var i__385100_385104 = 0;while(true){
if((i__385100_385104 < count__385099_385103))
{var node_385105 = cljs.core._nth.call(null,chunk__385098_385102,i__385100_385104);goog.dom.classes.remove(node_385105,class$);
{
var G__385106 = seq__385097_385101;
var G__385107 = chunk__385098_385102;
var G__385108 = count__385099_385103;
var G__385109 = (i__385100_385104 + 1);
seq__385097_385101 = G__385106;
chunk__385098_385102 = G__385107;
count__385099_385103 = G__385108;
i__385100_385104 = G__385109;
continue;
}
} else
{var temp__4092__auto___385110 = cljs.core.seq.call(null,seq__385097_385101);if(temp__4092__auto___385110)
{var seq__385097_385111__$1 = temp__4092__auto___385110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385097_385111__$1))
{var c__14708__auto___385112 = cljs.core.chunk_first.call(null,seq__385097_385111__$1);{
var G__385113 = cljs.core.chunk_rest.call(null,seq__385097_385111__$1);
var G__385114 = c__14708__auto___385112;
var G__385115 = cljs.core.count.call(null,c__14708__auto___385112);
var G__385116 = 0;
seq__385097_385101 = G__385113;
chunk__385098_385102 = G__385114;
count__385099_385103 = G__385115;
i__385100_385104 = G__385116;
continue;
}
} else
{var node_385117 = cljs.core.first.call(null,seq__385097_385111__$1);goog.dom.classes.remove(node_385117,class$);
{
var G__385118 = cljs.core.next.call(null,seq__385097_385111__$1);
var G__385119 = null;
var G__385120 = 0;
var G__385121 = 0;
seq__385097_385101 = G__385118;
chunk__385098_385102 = G__385119;
count__385099_385103 = G__385120;
i__385100_385104 = G__385121;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__385126_385130 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385127_385131 = null;var count__385128_385132 = 0;var i__385129_385133 = 0;while(true){
if((i__385129_385133 < count__385128_385132))
{var node_385134 = cljs.core._nth.call(null,chunk__385127_385131,i__385129_385133);goog.dom.classes.toggle(node_385134,class$);
{
var G__385135 = seq__385126_385130;
var G__385136 = chunk__385127_385131;
var G__385137 = count__385128_385132;
var G__385138 = (i__385129_385133 + 1);
seq__385126_385130 = G__385135;
chunk__385127_385131 = G__385136;
count__385128_385132 = G__385137;
i__385129_385133 = G__385138;
continue;
}
} else
{var temp__4092__auto___385139 = cljs.core.seq.call(null,seq__385126_385130);if(temp__4092__auto___385139)
{var seq__385126_385140__$1 = temp__4092__auto___385139;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385126_385140__$1))
{var c__14708__auto___385141 = cljs.core.chunk_first.call(null,seq__385126_385140__$1);{
var G__385142 = cljs.core.chunk_rest.call(null,seq__385126_385140__$1);
var G__385143 = c__14708__auto___385141;
var G__385144 = cljs.core.count.call(null,c__14708__auto___385141);
var G__385145 = 0;
seq__385126_385130 = G__385142;
chunk__385127_385131 = G__385143;
count__385128_385132 = G__385144;
i__385129_385133 = G__385145;
continue;
}
} else
{var node_385146 = cljs.core.first.call(null,seq__385126_385140__$1);goog.dom.classes.toggle(node_385146,class$);
{
var G__385147 = cljs.core.next.call(null,seq__385126_385140__$1);
var G__385148 = null;
var G__385149 = 0;
var G__385150 = 0;
seq__385126_385130 = G__385147;
chunk__385127_385131 = G__385148;
count__385128_385132 = G__385149;
i__385129_385133 = G__385150;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_385159__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__385155_385160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385156_385161 = null;var count__385157_385162 = 0;var i__385158_385163 = 0;while(true){
if((i__385158_385163 < count__385157_385162))
{var node_385164 = cljs.core._nth.call(null,chunk__385156_385161,i__385158_385163);goog.dom.classes.set(node_385164,classes_385159__$1);
{
var G__385165 = seq__385155_385160;
var G__385166 = chunk__385156_385161;
var G__385167 = count__385157_385162;
var G__385168 = (i__385158_385163 + 1);
seq__385155_385160 = G__385165;
chunk__385156_385161 = G__385166;
count__385157_385162 = G__385167;
i__385158_385163 = G__385168;
continue;
}
} else
{var temp__4092__auto___385169 = cljs.core.seq.call(null,seq__385155_385160);if(temp__4092__auto___385169)
{var seq__385155_385170__$1 = temp__4092__auto___385169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385155_385170__$1))
{var c__14708__auto___385171 = cljs.core.chunk_first.call(null,seq__385155_385170__$1);{
var G__385172 = cljs.core.chunk_rest.call(null,seq__385155_385170__$1);
var G__385173 = c__14708__auto___385171;
var G__385174 = cljs.core.count.call(null,c__14708__auto___385171);
var G__385175 = 0;
seq__385155_385160 = G__385172;
chunk__385156_385161 = G__385173;
count__385157_385162 = G__385174;
i__385158_385163 = G__385175;
continue;
}
} else
{var node_385176 = cljs.core.first.call(null,seq__385155_385170__$1);goog.dom.classes.set(node_385176,classes_385159__$1);
{
var G__385177 = cljs.core.next.call(null,seq__385155_385170__$1);
var G__385178 = null;
var G__385179 = 0;
var G__385180 = 0;
seq__385155_385160 = G__385177;
chunk__385156_385161 = G__385178;
count__385157_385162 = G__385179;
i__385158_385163 = G__385180;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__385185_385189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385186_385190 = null;var count__385187_385191 = 0;var i__385188_385192 = 0;while(true){
if((i__385188_385192 < count__385187_385191))
{var node_385193 = cljs.core._nth.call(null,chunk__385186_385190,i__385188_385192);goog.dom.setTextContent(node_385193,value);
{
var G__385194 = seq__385185_385189;
var G__385195 = chunk__385186_385190;
var G__385196 = count__385187_385191;
var G__385197 = (i__385188_385192 + 1);
seq__385185_385189 = G__385194;
chunk__385186_385190 = G__385195;
count__385187_385191 = G__385196;
i__385188_385192 = G__385197;
continue;
}
} else
{var temp__4092__auto___385198 = cljs.core.seq.call(null,seq__385185_385189);if(temp__4092__auto___385198)
{var seq__385185_385199__$1 = temp__4092__auto___385198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385185_385199__$1))
{var c__14708__auto___385200 = cljs.core.chunk_first.call(null,seq__385185_385199__$1);{
var G__385201 = cljs.core.chunk_rest.call(null,seq__385185_385199__$1);
var G__385202 = c__14708__auto___385200;
var G__385203 = cljs.core.count.call(null,c__14708__auto___385200);
var G__385204 = 0;
seq__385185_385189 = G__385201;
chunk__385186_385190 = G__385202;
count__385187_385191 = G__385203;
i__385188_385192 = G__385204;
continue;
}
} else
{var node_385205 = cljs.core.first.call(null,seq__385185_385199__$1);goog.dom.setTextContent(node_385205,value);
{
var G__385206 = cljs.core.next.call(null,seq__385185_385199__$1);
var G__385207 = null;
var G__385208 = 0;
var G__385209 = 0;
seq__385185_385189 = G__385206;
chunk__385186_385190 = G__385207;
count__385187_385191 = G__385208;
i__385188_385192 = G__385209;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__385214_385218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385215_385219 = null;var count__385216_385220 = 0;var i__385217_385221 = 0;while(true){
if((i__385217_385221 < count__385216_385220))
{var node_385222 = cljs.core._nth.call(null,chunk__385215_385219,i__385217_385221);goog.dom.forms.setValue(node_385222,value);
{
var G__385223 = seq__385214_385218;
var G__385224 = chunk__385215_385219;
var G__385225 = count__385216_385220;
var G__385226 = (i__385217_385221 + 1);
seq__385214_385218 = G__385223;
chunk__385215_385219 = G__385224;
count__385216_385220 = G__385225;
i__385217_385221 = G__385226;
continue;
}
} else
{var temp__4092__auto___385227 = cljs.core.seq.call(null,seq__385214_385218);if(temp__4092__auto___385227)
{var seq__385214_385228__$1 = temp__4092__auto___385227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385214_385228__$1))
{var c__14708__auto___385229 = cljs.core.chunk_first.call(null,seq__385214_385228__$1);{
var G__385230 = cljs.core.chunk_rest.call(null,seq__385214_385228__$1);
var G__385231 = c__14708__auto___385229;
var G__385232 = cljs.core.count.call(null,c__14708__auto___385229);
var G__385233 = 0;
seq__385214_385218 = G__385230;
chunk__385215_385219 = G__385231;
count__385216_385220 = G__385232;
i__385217_385221 = G__385233;
continue;
}
} else
{var node_385234 = cljs.core.first.call(null,seq__385214_385228__$1);goog.dom.forms.setValue(node_385234,value);
{
var G__385235 = cljs.core.next.call(null,seq__385214_385228__$1);
var G__385236 = null;
var G__385237 = 0;
var G__385238 = 0;
seq__385214_385218 = G__385235;
chunk__385215_385219 = G__385236;
count__385216_385220 = G__385237;
i__385217_385221 = G__385238;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13967__auto__ = allows_inner_html_QMARK_;if(and__13967__auto__)
{var and__13967__auto____$1 = (function (){var or__13979__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13967__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13967__auto____$1;
}
} else
{return and__13967__auto__;
}
})()))
{var value_385249 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__385245_385250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__385246_385251 = null;var count__385247_385252 = 0;var i__385248_385253 = 0;while(true){
if((i__385248_385253 < count__385247_385252))
{var node_385254 = cljs.core._nth.call(null,chunk__385246_385251,i__385248_385253);node_385254.innerHTML = value_385249;
{
var G__385255 = seq__385245_385250;
var G__385256 = chunk__385246_385251;
var G__385257 = count__385247_385252;
var G__385258 = (i__385248_385253 + 1);
seq__385245_385250 = G__385255;
chunk__385246_385251 = G__385256;
count__385247_385252 = G__385257;
i__385248_385253 = G__385258;
continue;
}
} else
{var temp__4092__auto___385259 = cljs.core.seq.call(null,seq__385245_385250);if(temp__4092__auto___385259)
{var seq__385245_385260__$1 = temp__4092__auto___385259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385245_385260__$1))
{var c__14708__auto___385261 = cljs.core.chunk_first.call(null,seq__385245_385260__$1);{
var G__385262 = cljs.core.chunk_rest.call(null,seq__385245_385260__$1);
var G__385263 = c__14708__auto___385261;
var G__385264 = cljs.core.count.call(null,c__14708__auto___385261);
var G__385265 = 0;
seq__385245_385250 = G__385262;
chunk__385246_385251 = G__385263;
count__385247_385252 = G__385264;
i__385248_385253 = G__385265;
continue;
}
} else
{var node_385266 = cljs.core.first.call(null,seq__385245_385260__$1);node_385266.innerHTML = value_385249;
{
var G__385267 = cljs.core.next.call(null,seq__385245_385260__$1);
var G__385268 = null;
var G__385269 = 0;
var G__385270 = 0;
seq__385245_385250 = G__385267;
chunk__385246_385251 = G__385268;
count__385247_385252 = G__385269;
i__385248_385253 = G__385270;
continue;
}
}
} else
{}
}
break;
}
}catch (e385244){if((e385244 instanceof Error))
{var e_385271 = e385244;domina.replace_children_BANG_.call(null,content,value_385249);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e385244;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13967__auto__ = bubble;if(cljs.core.truth_(and__13967__auto__))
{return (value == null);
} else
{return and__13967__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13979__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__385278_385282 = cljs.core.seq.call(null,children);var chunk__385279_385283 = null;var count__385280_385284 = 0;var i__385281_385285 = 0;while(true){
if((i__385281_385285 < count__385280_385284))
{var child_385286 = cljs.core._nth.call(null,chunk__385279_385283,i__385281_385285);frag.appendChild(child_385286);
{
var G__385287 = seq__385278_385282;
var G__385288 = chunk__385279_385283;
var G__385289 = count__385280_385284;
var G__385290 = (i__385281_385285 + 1);
seq__385278_385282 = G__385287;
chunk__385279_385283 = G__385288;
count__385280_385284 = G__385289;
i__385281_385285 = G__385290;
continue;
}
} else
{var temp__4092__auto___385291 = cljs.core.seq.call(null,seq__385278_385282);if(temp__4092__auto___385291)
{var seq__385278_385292__$1 = temp__4092__auto___385291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__385278_385292__$1))
{var c__14708__auto___385293 = cljs.core.chunk_first.call(null,seq__385278_385292__$1);{
var G__385294 = cljs.core.chunk_rest.call(null,seq__385278_385292__$1);
var G__385295 = c__14708__auto___385293;
var G__385296 = cljs.core.count.call(null,c__14708__auto___385293);
var G__385297 = 0;
seq__385278_385282 = G__385294;
chunk__385279_385283 = G__385295;
count__385280_385284 = G__385296;
i__385281_385285 = G__385297;
continue;
}
} else
{var child_385298 = cljs.core.first.call(null,seq__385278_385292__$1);frag.appendChild(child_385298);
{
var G__385299 = cljs.core.next.call(null,seq__385278_385292__$1);
var G__385300 = null;
var G__385301 = 0;
var G__385302 = 0;
seq__385278_385282 = G__385299;
chunk__385279_385283 = G__385300;
count__385280_385284 = G__385301;
i__385281_385285 = G__385302;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__385272_SHARP_,p2__385273_SHARP_){return f.call(null,p1__385272_SHARP_,p2__385273_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13967__auto__ = obj;if(cljs.core.truth_(and__13967__auto__))
{var and__13967__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13967__auto____$1)
{return obj.length;
} else
{return and__13967__auto____$1;
}
} else
{return and__13967__auto__;
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
{if((function (){var G__385304 = list_thing;if(G__385304)
{var bit__14610__auto__ = (G__385304.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__385304.cljs$core$ISeqable$))
{return true;
} else
{if((!G__385304.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385304);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385304);
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
{if((function (){var G__385305 = content;if(G__385305)
{var bit__14610__auto__ = (G__385305.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__385305.cljs$core$ISeqable$))
{return true;
} else
{if((!G__385305.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385305);
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
{if((function (){var G__385306 = content;if(G__385306)
{var bit__14610__auto__ = (G__385306.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__385306.cljs$core$ISeqable$))
{return true;
} else
{if((!G__385306.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385306);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__385306);
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