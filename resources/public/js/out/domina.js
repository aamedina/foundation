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
var opt_wrapper_275842 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_275843 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_275844 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_275843,table_section_wrapper_275843,opt_wrapper_275842,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_275844,table_section_wrapper_275843,cell_wrapper_275844,opt_wrapper_275842,table_section_wrapper_275843,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_275843]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8211__auto__ = div.firstChild;if(cljs.core.truth_(and__8211__auto__))
{return div.firstChild.childNodes;
} else
{return and__8211__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__275849 = cljs.core.seq.call(null,tbody);var chunk__275850 = null;var count__275851 = 0;var i__275852 = 0;while(true){
if((i__275852 < count__275851))
{var child = cljs.core._nth.call(null,chunk__275850,i__275852);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__275853 = seq__275849;
var G__275854 = chunk__275850;
var G__275855 = count__275851;
var G__275856 = (i__275852 + 1);
seq__275849 = G__275853;
chunk__275850 = G__275854;
count__275851 = G__275855;
i__275852 = G__275856;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__275849);if(temp__4092__auto__)
{var seq__275849__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275849__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__275849__$1);{
var G__275857 = cljs.core.chunk_rest.call(null,seq__275849__$1);
var G__275858 = c__8952__auto__;
var G__275859 = cljs.core.count.call(null,c__8952__auto__);
var G__275860 = 0;
seq__275849 = G__275857;
chunk__275850 = G__275858;
count__275851 = G__275859;
i__275852 = G__275860;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__275849__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__275861 = cljs.core.next.call(null,seq__275849__$1);
var G__275862 = null;
var G__275863 = 0;
var G__275864 = 0;
seq__275849 = G__275861;
chunk__275850 = G__275862;
count__275851 = G__275863;
i__275852 = G__275864;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__275866 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__275866,0,null);var start_wrap = cljs.core.nth.call(null,vec__275866,1,null);var end_wrap = cljs.core.nth.call(null,vec__275866,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__275867 = wrapper.lastChild;
var G__275868 = (level - 1);
wrapper = G__275867;
level = G__275868;
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
if(cljs.core.truth_((function (){var and__8211__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__8211__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__8211__auto__;
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
domina.DomContent = (function (){var obj275870 = {};return obj275870;
})();
domina.nodes = (function nodes(content){if((function (){var and__8211__auto__ = content;if(and__8211__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__8211__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8831__auto__ = (((content == null))?null:content);return (function (){var or__8223__auto__ = (domina.nodes[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (domina.nodes["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__8211__auto__ = nodeseq;if(and__8211__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__8211__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8831__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__8223__auto__ = (domina.single_node[goog.typeOf(x__8831__auto__)]);if(or__8223__auto__)
{return or__8223__auto__;
} else
{var or__8223__auto____$1 = (domina.single_node["_"]);if(or__8223__auto____$1)
{return or__8223__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__8211__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__8211__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8211__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__275871){
var mesg = cljs.core.seq(arglist__275871);
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
log.cljs$lang$applyTo = (function (arglist__275872){
var mesg = cljs.core.seq(arglist__275872);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__275873){
var contents = cljs.core.seq(arglist__275873);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__275874_SHARP_){return p1__275874_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__275875_SHARP_,p2__275876_SHARP_){return goog.dom.insertChildAt(p1__275875_SHARP_,p2__275876_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__275878_SHARP_,p2__275877_SHARP_){return goog.dom.insertSiblingBefore(p2__275877_SHARP_,p1__275878_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__275880_SHARP_,p2__275879_SHARP_){return goog.dom.insertSiblingAfter(p2__275879_SHARP_,p1__275880_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__275882_SHARP_,p2__275881_SHARP_){return goog.dom.replaceNode(p2__275881_SHARP_,p1__275882_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__275887_275891 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__275888_275892 = null;var count__275889_275893 = 0;var i__275890_275894 = 0;while(true){
if((i__275890_275894 < count__275889_275893))
{var n_275895 = cljs.core._nth.call(null,chunk__275888_275892,i__275890_275894);goog.style.setStyle(n_275895,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__275896 = seq__275887_275891;
var G__275897 = chunk__275888_275892;
var G__275898 = count__275889_275893;
var G__275899 = (i__275890_275894 + 1);
seq__275887_275891 = G__275896;
chunk__275888_275892 = G__275897;
count__275889_275893 = G__275898;
i__275890_275894 = G__275899;
continue;
}
} else
{var temp__4092__auto___275900 = cljs.core.seq.call(null,seq__275887_275891);if(temp__4092__auto___275900)
{var seq__275887_275901__$1 = temp__4092__auto___275900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275887_275901__$1))
{var c__8952__auto___275902 = cljs.core.chunk_first.call(null,seq__275887_275901__$1);{
var G__275903 = cljs.core.chunk_rest.call(null,seq__275887_275901__$1);
var G__275904 = c__8952__auto___275902;
var G__275905 = cljs.core.count.call(null,c__8952__auto___275902);
var G__275906 = 0;
seq__275887_275891 = G__275903;
chunk__275888_275892 = G__275904;
count__275889_275893 = G__275905;
i__275890_275894 = G__275906;
continue;
}
} else
{var n_275907 = cljs.core.first.call(null,seq__275887_275901__$1);goog.style.setStyle(n_275907,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__275908 = cljs.core.next.call(null,seq__275887_275901__$1);
var G__275909 = null;
var G__275910 = 0;
var G__275911 = 0;
seq__275887_275891 = G__275908;
chunk__275888_275892 = G__275909;
count__275889_275893 = G__275910;
i__275890_275894 = G__275911;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__275912){
var content = cljs.core.first(arglist__275912);
arglist__275912 = cljs.core.next(arglist__275912);
var name = cljs.core.first(arglist__275912);
var value = cljs.core.rest(arglist__275912);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__275917_275921 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__275918_275922 = null;var count__275919_275923 = 0;var i__275920_275924 = 0;while(true){
if((i__275920_275924 < count__275919_275923))
{var n_275925 = cljs.core._nth.call(null,chunk__275918_275922,i__275920_275924);n_275925.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__275926 = seq__275917_275921;
var G__275927 = chunk__275918_275922;
var G__275928 = count__275919_275923;
var G__275929 = (i__275920_275924 + 1);
seq__275917_275921 = G__275926;
chunk__275918_275922 = G__275927;
count__275919_275923 = G__275928;
i__275920_275924 = G__275929;
continue;
}
} else
{var temp__4092__auto___275930 = cljs.core.seq.call(null,seq__275917_275921);if(temp__4092__auto___275930)
{var seq__275917_275931__$1 = temp__4092__auto___275930;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275917_275931__$1))
{var c__8952__auto___275932 = cljs.core.chunk_first.call(null,seq__275917_275931__$1);{
var G__275933 = cljs.core.chunk_rest.call(null,seq__275917_275931__$1);
var G__275934 = c__8952__auto___275932;
var G__275935 = cljs.core.count.call(null,c__8952__auto___275932);
var G__275936 = 0;
seq__275917_275921 = G__275933;
chunk__275918_275922 = G__275934;
count__275919_275923 = G__275935;
i__275920_275924 = G__275936;
continue;
}
} else
{var n_275937 = cljs.core.first.call(null,seq__275917_275931__$1);n_275937.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__275938 = cljs.core.next.call(null,seq__275917_275931__$1);
var G__275939 = null;
var G__275940 = 0;
var G__275941 = 0;
seq__275917_275921 = G__275938;
chunk__275918_275922 = G__275939;
count__275919_275923 = G__275940;
i__275920_275924 = G__275941;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__275942){
var content = cljs.core.first(arglist__275942);
arglist__275942 = cljs.core.next(arglist__275942);
var name = cljs.core.first(arglist__275942);
var value = cljs.core.rest(arglist__275942);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__275947_275951 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__275948_275952 = null;var count__275949_275953 = 0;var i__275950_275954 = 0;while(true){
if((i__275950_275954 < count__275949_275953))
{var n_275955 = cljs.core._nth.call(null,chunk__275948_275952,i__275950_275954);n_275955.removeAttribute(cljs.core.name.call(null,name));
{
var G__275956 = seq__275947_275951;
var G__275957 = chunk__275948_275952;
var G__275958 = count__275949_275953;
var G__275959 = (i__275950_275954 + 1);
seq__275947_275951 = G__275956;
chunk__275948_275952 = G__275957;
count__275949_275953 = G__275958;
i__275950_275954 = G__275959;
continue;
}
} else
{var temp__4092__auto___275960 = cljs.core.seq.call(null,seq__275947_275951);if(temp__4092__auto___275960)
{var seq__275947_275961__$1 = temp__4092__auto___275960;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275947_275961__$1))
{var c__8952__auto___275962 = cljs.core.chunk_first.call(null,seq__275947_275961__$1);{
var G__275963 = cljs.core.chunk_rest.call(null,seq__275947_275961__$1);
var G__275964 = c__8952__auto___275962;
var G__275965 = cljs.core.count.call(null,c__8952__auto___275962);
var G__275966 = 0;
seq__275947_275951 = G__275963;
chunk__275948_275952 = G__275964;
count__275949_275953 = G__275965;
i__275950_275954 = G__275966;
continue;
}
} else
{var n_275967 = cljs.core.first.call(null,seq__275947_275961__$1);n_275967.removeAttribute(cljs.core.name.call(null,name));
{
var G__275968 = cljs.core.next.call(null,seq__275947_275961__$1);
var G__275969 = null;
var G__275970 = 0;
var G__275971 = 0;
seq__275947_275951 = G__275968;
chunk__275948_275952 = G__275969;
count__275949_275953 = G__275970;
i__275950_275954 = G__275971;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__275973 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__275973,0,null);var v = cljs.core.nth.call(null,vec__275973,1,null);if(cljs.core.truth_((function (){var and__8211__auto__ = k;if(cljs.core.truth_(and__8211__auto__))
{return v;
} else
{return and__8211__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__275974_SHARP_){var attr = attrs__$1.item(p1__275974_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__275981_275987 = cljs.core.seq.call(null,styles);var chunk__275982_275988 = null;var count__275983_275989 = 0;var i__275984_275990 = 0;while(true){
if((i__275984_275990 < count__275983_275989))
{var vec__275985_275991 = cljs.core._nth.call(null,chunk__275982_275988,i__275984_275990);var name_275992 = cljs.core.nth.call(null,vec__275985_275991,0,null);var value_275993 = cljs.core.nth.call(null,vec__275985_275991,1,null);domina.set_style_BANG_.call(null,content,name_275992,value_275993);
{
var G__275994 = seq__275981_275987;
var G__275995 = chunk__275982_275988;
var G__275996 = count__275983_275989;
var G__275997 = (i__275984_275990 + 1);
seq__275981_275987 = G__275994;
chunk__275982_275988 = G__275995;
count__275983_275989 = G__275996;
i__275984_275990 = G__275997;
continue;
}
} else
{var temp__4092__auto___275998 = cljs.core.seq.call(null,seq__275981_275987);if(temp__4092__auto___275998)
{var seq__275981_275999__$1 = temp__4092__auto___275998;if(cljs.core.chunked_seq_QMARK_.call(null,seq__275981_275999__$1))
{var c__8952__auto___276000 = cljs.core.chunk_first.call(null,seq__275981_275999__$1);{
var G__276001 = cljs.core.chunk_rest.call(null,seq__275981_275999__$1);
var G__276002 = c__8952__auto___276000;
var G__276003 = cljs.core.count.call(null,c__8952__auto___276000);
var G__276004 = 0;
seq__275981_275987 = G__276001;
chunk__275982_275988 = G__276002;
count__275983_275989 = G__276003;
i__275984_275990 = G__276004;
continue;
}
} else
{var vec__275986_276005 = cljs.core.first.call(null,seq__275981_275999__$1);var name_276006 = cljs.core.nth.call(null,vec__275986_276005,0,null);var value_276007 = cljs.core.nth.call(null,vec__275986_276005,1,null);domina.set_style_BANG_.call(null,content,name_276006,value_276007);
{
var G__276008 = cljs.core.next.call(null,seq__275981_275999__$1);
var G__276009 = null;
var G__276010 = 0;
var G__276011 = 0;
seq__275981_275987 = G__276008;
chunk__275982_275988 = G__276009;
count__275983_275989 = G__276010;
i__275984_275990 = G__276011;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__276018_276024 = cljs.core.seq.call(null,attrs);var chunk__276019_276025 = null;var count__276020_276026 = 0;var i__276021_276027 = 0;while(true){
if((i__276021_276027 < count__276020_276026))
{var vec__276022_276028 = cljs.core._nth.call(null,chunk__276019_276025,i__276021_276027);var name_276029 = cljs.core.nth.call(null,vec__276022_276028,0,null);var value_276030 = cljs.core.nth.call(null,vec__276022_276028,1,null);domina.set_attr_BANG_.call(null,content,name_276029,value_276030);
{
var G__276031 = seq__276018_276024;
var G__276032 = chunk__276019_276025;
var G__276033 = count__276020_276026;
var G__276034 = (i__276021_276027 + 1);
seq__276018_276024 = G__276031;
chunk__276019_276025 = G__276032;
count__276020_276026 = G__276033;
i__276021_276027 = G__276034;
continue;
}
} else
{var temp__4092__auto___276035 = cljs.core.seq.call(null,seq__276018_276024);if(temp__4092__auto___276035)
{var seq__276018_276036__$1 = temp__4092__auto___276035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276018_276036__$1))
{var c__8952__auto___276037 = cljs.core.chunk_first.call(null,seq__276018_276036__$1);{
var G__276038 = cljs.core.chunk_rest.call(null,seq__276018_276036__$1);
var G__276039 = c__8952__auto___276037;
var G__276040 = cljs.core.count.call(null,c__8952__auto___276037);
var G__276041 = 0;
seq__276018_276024 = G__276038;
chunk__276019_276025 = G__276039;
count__276020_276026 = G__276040;
i__276021_276027 = G__276041;
continue;
}
} else
{var vec__276023_276042 = cljs.core.first.call(null,seq__276018_276036__$1);var name_276043 = cljs.core.nth.call(null,vec__276023_276042,0,null);var value_276044 = cljs.core.nth.call(null,vec__276023_276042,1,null);domina.set_attr_BANG_.call(null,content,name_276043,value_276044);
{
var G__276045 = cljs.core.next.call(null,seq__276018_276036__$1);
var G__276046 = null;
var G__276047 = 0;
var G__276048 = 0;
seq__276018_276024 = G__276045;
chunk__276019_276025 = G__276046;
count__276020_276026 = G__276047;
i__276021_276027 = G__276048;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__276053_276057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276054_276058 = null;var count__276055_276059 = 0;var i__276056_276060 = 0;while(true){
if((i__276056_276060 < count__276055_276059))
{var node_276061 = cljs.core._nth.call(null,chunk__276054_276058,i__276056_276060);goog.dom.classes.add(node_276061,class$);
{
var G__276062 = seq__276053_276057;
var G__276063 = chunk__276054_276058;
var G__276064 = count__276055_276059;
var G__276065 = (i__276056_276060 + 1);
seq__276053_276057 = G__276062;
chunk__276054_276058 = G__276063;
count__276055_276059 = G__276064;
i__276056_276060 = G__276065;
continue;
}
} else
{var temp__4092__auto___276066 = cljs.core.seq.call(null,seq__276053_276057);if(temp__4092__auto___276066)
{var seq__276053_276067__$1 = temp__4092__auto___276066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276053_276067__$1))
{var c__8952__auto___276068 = cljs.core.chunk_first.call(null,seq__276053_276067__$1);{
var G__276069 = cljs.core.chunk_rest.call(null,seq__276053_276067__$1);
var G__276070 = c__8952__auto___276068;
var G__276071 = cljs.core.count.call(null,c__8952__auto___276068);
var G__276072 = 0;
seq__276053_276057 = G__276069;
chunk__276054_276058 = G__276070;
count__276055_276059 = G__276071;
i__276056_276060 = G__276072;
continue;
}
} else
{var node_276073 = cljs.core.first.call(null,seq__276053_276067__$1);goog.dom.classes.add(node_276073,class$);
{
var G__276074 = cljs.core.next.call(null,seq__276053_276067__$1);
var G__276075 = null;
var G__276076 = 0;
var G__276077 = 0;
seq__276053_276057 = G__276074;
chunk__276054_276058 = G__276075;
count__276055_276059 = G__276076;
i__276056_276060 = G__276077;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__276082_276086 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276083_276087 = null;var count__276084_276088 = 0;var i__276085_276089 = 0;while(true){
if((i__276085_276089 < count__276084_276088))
{var node_276090 = cljs.core._nth.call(null,chunk__276083_276087,i__276085_276089);goog.dom.classes.remove(node_276090,class$);
{
var G__276091 = seq__276082_276086;
var G__276092 = chunk__276083_276087;
var G__276093 = count__276084_276088;
var G__276094 = (i__276085_276089 + 1);
seq__276082_276086 = G__276091;
chunk__276083_276087 = G__276092;
count__276084_276088 = G__276093;
i__276085_276089 = G__276094;
continue;
}
} else
{var temp__4092__auto___276095 = cljs.core.seq.call(null,seq__276082_276086);if(temp__4092__auto___276095)
{var seq__276082_276096__$1 = temp__4092__auto___276095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276082_276096__$1))
{var c__8952__auto___276097 = cljs.core.chunk_first.call(null,seq__276082_276096__$1);{
var G__276098 = cljs.core.chunk_rest.call(null,seq__276082_276096__$1);
var G__276099 = c__8952__auto___276097;
var G__276100 = cljs.core.count.call(null,c__8952__auto___276097);
var G__276101 = 0;
seq__276082_276086 = G__276098;
chunk__276083_276087 = G__276099;
count__276084_276088 = G__276100;
i__276085_276089 = G__276101;
continue;
}
} else
{var node_276102 = cljs.core.first.call(null,seq__276082_276096__$1);goog.dom.classes.remove(node_276102,class$);
{
var G__276103 = cljs.core.next.call(null,seq__276082_276096__$1);
var G__276104 = null;
var G__276105 = 0;
var G__276106 = 0;
seq__276082_276086 = G__276103;
chunk__276083_276087 = G__276104;
count__276084_276088 = G__276105;
i__276085_276089 = G__276106;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__276111_276115 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276112_276116 = null;var count__276113_276117 = 0;var i__276114_276118 = 0;while(true){
if((i__276114_276118 < count__276113_276117))
{var node_276119 = cljs.core._nth.call(null,chunk__276112_276116,i__276114_276118);goog.dom.classes.toggle(node_276119,class$);
{
var G__276120 = seq__276111_276115;
var G__276121 = chunk__276112_276116;
var G__276122 = count__276113_276117;
var G__276123 = (i__276114_276118 + 1);
seq__276111_276115 = G__276120;
chunk__276112_276116 = G__276121;
count__276113_276117 = G__276122;
i__276114_276118 = G__276123;
continue;
}
} else
{var temp__4092__auto___276124 = cljs.core.seq.call(null,seq__276111_276115);if(temp__4092__auto___276124)
{var seq__276111_276125__$1 = temp__4092__auto___276124;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276111_276125__$1))
{var c__8952__auto___276126 = cljs.core.chunk_first.call(null,seq__276111_276125__$1);{
var G__276127 = cljs.core.chunk_rest.call(null,seq__276111_276125__$1);
var G__276128 = c__8952__auto___276126;
var G__276129 = cljs.core.count.call(null,c__8952__auto___276126);
var G__276130 = 0;
seq__276111_276115 = G__276127;
chunk__276112_276116 = G__276128;
count__276113_276117 = G__276129;
i__276114_276118 = G__276130;
continue;
}
} else
{var node_276131 = cljs.core.first.call(null,seq__276111_276125__$1);goog.dom.classes.toggle(node_276131,class$);
{
var G__276132 = cljs.core.next.call(null,seq__276111_276125__$1);
var G__276133 = null;
var G__276134 = 0;
var G__276135 = 0;
seq__276111_276115 = G__276132;
chunk__276112_276116 = G__276133;
count__276113_276117 = G__276134;
i__276114_276118 = G__276135;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_276144__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__276140_276145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276141_276146 = null;var count__276142_276147 = 0;var i__276143_276148 = 0;while(true){
if((i__276143_276148 < count__276142_276147))
{var node_276149 = cljs.core._nth.call(null,chunk__276141_276146,i__276143_276148);goog.dom.classes.set(node_276149,classes_276144__$1);
{
var G__276150 = seq__276140_276145;
var G__276151 = chunk__276141_276146;
var G__276152 = count__276142_276147;
var G__276153 = (i__276143_276148 + 1);
seq__276140_276145 = G__276150;
chunk__276141_276146 = G__276151;
count__276142_276147 = G__276152;
i__276143_276148 = G__276153;
continue;
}
} else
{var temp__4092__auto___276154 = cljs.core.seq.call(null,seq__276140_276145);if(temp__4092__auto___276154)
{var seq__276140_276155__$1 = temp__4092__auto___276154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276140_276155__$1))
{var c__8952__auto___276156 = cljs.core.chunk_first.call(null,seq__276140_276155__$1);{
var G__276157 = cljs.core.chunk_rest.call(null,seq__276140_276155__$1);
var G__276158 = c__8952__auto___276156;
var G__276159 = cljs.core.count.call(null,c__8952__auto___276156);
var G__276160 = 0;
seq__276140_276145 = G__276157;
chunk__276141_276146 = G__276158;
count__276142_276147 = G__276159;
i__276143_276148 = G__276160;
continue;
}
} else
{var node_276161 = cljs.core.first.call(null,seq__276140_276155__$1);goog.dom.classes.set(node_276161,classes_276144__$1);
{
var G__276162 = cljs.core.next.call(null,seq__276140_276155__$1);
var G__276163 = null;
var G__276164 = 0;
var G__276165 = 0;
seq__276140_276145 = G__276162;
chunk__276141_276146 = G__276163;
count__276142_276147 = G__276164;
i__276143_276148 = G__276165;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__276170_276174 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276171_276175 = null;var count__276172_276176 = 0;var i__276173_276177 = 0;while(true){
if((i__276173_276177 < count__276172_276176))
{var node_276178 = cljs.core._nth.call(null,chunk__276171_276175,i__276173_276177);goog.dom.setTextContent(node_276178,value);
{
var G__276179 = seq__276170_276174;
var G__276180 = chunk__276171_276175;
var G__276181 = count__276172_276176;
var G__276182 = (i__276173_276177 + 1);
seq__276170_276174 = G__276179;
chunk__276171_276175 = G__276180;
count__276172_276176 = G__276181;
i__276173_276177 = G__276182;
continue;
}
} else
{var temp__4092__auto___276183 = cljs.core.seq.call(null,seq__276170_276174);if(temp__4092__auto___276183)
{var seq__276170_276184__$1 = temp__4092__auto___276183;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276170_276184__$1))
{var c__8952__auto___276185 = cljs.core.chunk_first.call(null,seq__276170_276184__$1);{
var G__276186 = cljs.core.chunk_rest.call(null,seq__276170_276184__$1);
var G__276187 = c__8952__auto___276185;
var G__276188 = cljs.core.count.call(null,c__8952__auto___276185);
var G__276189 = 0;
seq__276170_276174 = G__276186;
chunk__276171_276175 = G__276187;
count__276172_276176 = G__276188;
i__276173_276177 = G__276189;
continue;
}
} else
{var node_276190 = cljs.core.first.call(null,seq__276170_276184__$1);goog.dom.setTextContent(node_276190,value);
{
var G__276191 = cljs.core.next.call(null,seq__276170_276184__$1);
var G__276192 = null;
var G__276193 = 0;
var G__276194 = 0;
seq__276170_276174 = G__276191;
chunk__276171_276175 = G__276192;
count__276172_276176 = G__276193;
i__276173_276177 = G__276194;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__276199_276203 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276200_276204 = null;var count__276201_276205 = 0;var i__276202_276206 = 0;while(true){
if((i__276202_276206 < count__276201_276205))
{var node_276207 = cljs.core._nth.call(null,chunk__276200_276204,i__276202_276206);goog.dom.forms.setValue(node_276207,value);
{
var G__276208 = seq__276199_276203;
var G__276209 = chunk__276200_276204;
var G__276210 = count__276201_276205;
var G__276211 = (i__276202_276206 + 1);
seq__276199_276203 = G__276208;
chunk__276200_276204 = G__276209;
count__276201_276205 = G__276210;
i__276202_276206 = G__276211;
continue;
}
} else
{var temp__4092__auto___276212 = cljs.core.seq.call(null,seq__276199_276203);if(temp__4092__auto___276212)
{var seq__276199_276213__$1 = temp__4092__auto___276212;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276199_276213__$1))
{var c__8952__auto___276214 = cljs.core.chunk_first.call(null,seq__276199_276213__$1);{
var G__276215 = cljs.core.chunk_rest.call(null,seq__276199_276213__$1);
var G__276216 = c__8952__auto___276214;
var G__276217 = cljs.core.count.call(null,c__8952__auto___276214);
var G__276218 = 0;
seq__276199_276203 = G__276215;
chunk__276200_276204 = G__276216;
count__276201_276205 = G__276217;
i__276202_276206 = G__276218;
continue;
}
} else
{var node_276219 = cljs.core.first.call(null,seq__276199_276213__$1);goog.dom.forms.setValue(node_276219,value);
{
var G__276220 = cljs.core.next.call(null,seq__276199_276213__$1);
var G__276221 = null;
var G__276222 = 0;
var G__276223 = 0;
seq__276199_276203 = G__276220;
chunk__276200_276204 = G__276221;
count__276201_276205 = G__276222;
i__276202_276206 = G__276223;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__8211__auto__ = allows_inner_html_QMARK_;if(and__8211__auto__)
{var and__8211__auto____$1 = (function (){var or__8223__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__8211__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__8211__auto____$1;
}
} else
{return and__8211__auto__;
}
})()))
{var value_276234 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__276230_276235 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__276231_276236 = null;var count__276232_276237 = 0;var i__276233_276238 = 0;while(true){
if((i__276233_276238 < count__276232_276237))
{var node_276239 = cljs.core._nth.call(null,chunk__276231_276236,i__276233_276238);node_276239.innerHTML = value_276234;
{
var G__276240 = seq__276230_276235;
var G__276241 = chunk__276231_276236;
var G__276242 = count__276232_276237;
var G__276243 = (i__276233_276238 + 1);
seq__276230_276235 = G__276240;
chunk__276231_276236 = G__276241;
count__276232_276237 = G__276242;
i__276233_276238 = G__276243;
continue;
}
} else
{var temp__4092__auto___276244 = cljs.core.seq.call(null,seq__276230_276235);if(temp__4092__auto___276244)
{var seq__276230_276245__$1 = temp__4092__auto___276244;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276230_276245__$1))
{var c__8952__auto___276246 = cljs.core.chunk_first.call(null,seq__276230_276245__$1);{
var G__276247 = cljs.core.chunk_rest.call(null,seq__276230_276245__$1);
var G__276248 = c__8952__auto___276246;
var G__276249 = cljs.core.count.call(null,c__8952__auto___276246);
var G__276250 = 0;
seq__276230_276235 = G__276247;
chunk__276231_276236 = G__276248;
count__276232_276237 = G__276249;
i__276233_276238 = G__276250;
continue;
}
} else
{var node_276251 = cljs.core.first.call(null,seq__276230_276245__$1);node_276251.innerHTML = value_276234;
{
var G__276252 = cljs.core.next.call(null,seq__276230_276245__$1);
var G__276253 = null;
var G__276254 = 0;
var G__276255 = 0;
seq__276230_276235 = G__276252;
chunk__276231_276236 = G__276253;
count__276232_276237 = G__276254;
i__276233_276238 = G__276255;
continue;
}
}
} else
{}
}
break;
}
}catch (e276229){if((e276229 instanceof Error))
{var e_276256 = e276229;domina.replace_children_BANG_.call(null,content,value_276234);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e276229;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__8211__auto__ = bubble;if(cljs.core.truth_(and__8211__auto__))
{return (value == null);
} else
{return and__8211__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__8223__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__8223__auto__))
{return or__8223__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__276263_276267 = cljs.core.seq.call(null,children);var chunk__276264_276268 = null;var count__276265_276269 = 0;var i__276266_276270 = 0;while(true){
if((i__276266_276270 < count__276265_276269))
{var child_276271 = cljs.core._nth.call(null,chunk__276264_276268,i__276266_276270);frag.appendChild(child_276271);
{
var G__276272 = seq__276263_276267;
var G__276273 = chunk__276264_276268;
var G__276274 = count__276265_276269;
var G__276275 = (i__276266_276270 + 1);
seq__276263_276267 = G__276272;
chunk__276264_276268 = G__276273;
count__276265_276269 = G__276274;
i__276266_276270 = G__276275;
continue;
}
} else
{var temp__4092__auto___276276 = cljs.core.seq.call(null,seq__276263_276267);if(temp__4092__auto___276276)
{var seq__276263_276277__$1 = temp__4092__auto___276276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__276263_276277__$1))
{var c__8952__auto___276278 = cljs.core.chunk_first.call(null,seq__276263_276277__$1);{
var G__276279 = cljs.core.chunk_rest.call(null,seq__276263_276277__$1);
var G__276280 = c__8952__auto___276278;
var G__276281 = cljs.core.count.call(null,c__8952__auto___276278);
var G__276282 = 0;
seq__276263_276267 = G__276279;
chunk__276264_276268 = G__276280;
count__276265_276269 = G__276281;
i__276266_276270 = G__276282;
continue;
}
} else
{var child_276283 = cljs.core.first.call(null,seq__276263_276277__$1);frag.appendChild(child_276283);
{
var G__276284 = cljs.core.next.call(null,seq__276263_276277__$1);
var G__276285 = null;
var G__276286 = 0;
var G__276287 = 0;
seq__276263_276267 = G__276284;
chunk__276264_276268 = G__276285;
count__276265_276269 = G__276286;
i__276266_276270 = G__276287;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__276257_SHARP_,p2__276258_SHARP_){return f.call(null,p1__276257_SHARP_,p2__276258_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__8211__auto__ = obj;if(cljs.core.truth_(and__8211__auto__))
{var and__8211__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__8211__auto____$1)
{return obj.length;
} else
{return and__8211__auto____$1;
}
} else
{return and__8211__auto__;
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
{if((function (){var G__276289 = list_thing;if(G__276289)
{var bit__8854__auto__ = (G__276289.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__276289.cljs$core$ISeqable$))
{return true;
} else
{if((!G__276289.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276289);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276289);
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
{if((function (){var G__276290 = content;if(G__276290)
{var bit__8854__auto__ = (G__276290.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__276290.cljs$core$ISeqable$))
{return true;
} else
{if((!G__276290.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276290);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276290);
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
{if((function (){var G__276291 = content;if(G__276291)
{var bit__8854__auto__ = (G__276291.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__276291.cljs$core$ISeqable$))
{return true;
} else
{if((!G__276291.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__276291);
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