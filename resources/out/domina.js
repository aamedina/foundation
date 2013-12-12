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
var opt_wrapper_99811 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_99812 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_99813 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_99812,table_section_wrapper_99812,opt_wrapper_99811,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_99813,table_section_wrapper_99812,cell_wrapper_99813,opt_wrapper_99811,table_section_wrapper_99812,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_99812]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13810__auto__ = div.firstChild;if(cljs.core.truth_(and__13810__auto__))
{return div.firstChild.childNodes;
} else
{return and__13810__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__99818 = cljs.core.seq.call(null,tbody);var chunk__99819 = null;var count__99820 = 0;var i__99821 = 0;while(true){
if((i__99821 < count__99820))
{var child = cljs.core._nth.call(null,chunk__99819,i__99821);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__99822 = seq__99818;
var G__99823 = chunk__99819;
var G__99824 = count__99820;
var G__99825 = (i__99821 + 1);
seq__99818 = G__99822;
chunk__99819 = G__99823;
count__99820 = G__99824;
i__99821 = G__99825;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__99818);if(temp__4092__auto__)
{var seq__99818__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99818__$1))
{var c__14546__auto__ = cljs.core.chunk_first.call(null,seq__99818__$1);{
var G__99826 = cljs.core.chunk_rest.call(null,seq__99818__$1);
var G__99827 = c__14546__auto__;
var G__99828 = cljs.core.count.call(null,c__14546__auto__);
var G__99829 = 0;
seq__99818 = G__99826;
chunk__99819 = G__99827;
count__99820 = G__99828;
i__99821 = G__99829;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__99818__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__99830 = cljs.core.next.call(null,seq__99818__$1);
var G__99831 = null;
var G__99832 = 0;
var G__99833 = 0;
seq__99818 = G__99830;
chunk__99819 = G__99831;
count__99820 = G__99832;
i__99821 = G__99833;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__99835 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__99835,0,null);var start_wrap = cljs.core.nth.call(null,vec__99835,1,null);var end_wrap = cljs.core.nth.call(null,vec__99835,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__99836 = wrapper.lastChild;
var G__99837 = (level - 1);
wrapper = G__99836;
level = G__99837;
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
if(cljs.core.truth_((function (){var and__13810__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13810__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13810__auto__;
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
domina.DomContent = (function (){var obj99839 = {};return obj99839;
})();
domina.nodes = (function nodes(content){if((function (){var and__13810__auto__ = content;if(and__13810__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13810__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14425__auto__ = (((content == null))?null:content);return (function (){var or__13822__auto__ = (domina.nodes[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (domina.nodes["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13810__auto__ = nodeseq;if(and__13810__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13810__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14425__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13822__auto__ = (domina.single_node[goog.typeOf(x__14425__auto__)]);if(or__13822__auto__)
{return or__13822__auto__;
} else
{var or__13822__auto____$1 = (domina.single_node["_"]);if(or__13822__auto____$1)
{return or__13822__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13810__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13810__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13810__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__99840){
var mesg = cljs.core.seq(arglist__99840);
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
log.cljs$lang$applyTo = (function (arglist__99841){
var mesg = cljs.core.seq(arglist__99841);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__99842){
var contents = cljs.core.seq(arglist__99842);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__99843_SHARP_){return p1__99843_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__99844_SHARP_,p2__99845_SHARP_){return goog.dom.insertChildAt(p1__99844_SHARP_,p2__99845_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__99847_SHARP_,p2__99846_SHARP_){return goog.dom.insertSiblingBefore(p2__99846_SHARP_,p1__99847_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__99849_SHARP_,p2__99848_SHARP_){return goog.dom.insertSiblingAfter(p2__99848_SHARP_,p1__99849_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__99851_SHARP_,p2__99850_SHARP_){return goog.dom.replaceNode(p2__99850_SHARP_,p1__99851_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__99856_99860 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__99857_99861 = null;var count__99858_99862 = 0;var i__99859_99863 = 0;while(true){
if((i__99859_99863 < count__99858_99862))
{var n_99864 = cljs.core._nth.call(null,chunk__99857_99861,i__99859_99863);goog.style.setStyle(n_99864,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__99865 = seq__99856_99860;
var G__99866 = chunk__99857_99861;
var G__99867 = count__99858_99862;
var G__99868 = (i__99859_99863 + 1);
seq__99856_99860 = G__99865;
chunk__99857_99861 = G__99866;
count__99858_99862 = G__99867;
i__99859_99863 = G__99868;
continue;
}
} else
{var temp__4092__auto___99869 = cljs.core.seq.call(null,seq__99856_99860);if(temp__4092__auto___99869)
{var seq__99856_99870__$1 = temp__4092__auto___99869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99856_99870__$1))
{var c__14546__auto___99871 = cljs.core.chunk_first.call(null,seq__99856_99870__$1);{
var G__99872 = cljs.core.chunk_rest.call(null,seq__99856_99870__$1);
var G__99873 = c__14546__auto___99871;
var G__99874 = cljs.core.count.call(null,c__14546__auto___99871);
var G__99875 = 0;
seq__99856_99860 = G__99872;
chunk__99857_99861 = G__99873;
count__99858_99862 = G__99874;
i__99859_99863 = G__99875;
continue;
}
} else
{var n_99876 = cljs.core.first.call(null,seq__99856_99870__$1);goog.style.setStyle(n_99876,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__99877 = cljs.core.next.call(null,seq__99856_99870__$1);
var G__99878 = null;
var G__99879 = 0;
var G__99880 = 0;
seq__99856_99860 = G__99877;
chunk__99857_99861 = G__99878;
count__99858_99862 = G__99879;
i__99859_99863 = G__99880;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__99881){
var content = cljs.core.first(arglist__99881);
arglist__99881 = cljs.core.next(arglist__99881);
var name = cljs.core.first(arglist__99881);
var value = cljs.core.rest(arglist__99881);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__99886_99890 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__99887_99891 = null;var count__99888_99892 = 0;var i__99889_99893 = 0;while(true){
if((i__99889_99893 < count__99888_99892))
{var n_99894 = cljs.core._nth.call(null,chunk__99887_99891,i__99889_99893);n_99894.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__99895 = seq__99886_99890;
var G__99896 = chunk__99887_99891;
var G__99897 = count__99888_99892;
var G__99898 = (i__99889_99893 + 1);
seq__99886_99890 = G__99895;
chunk__99887_99891 = G__99896;
count__99888_99892 = G__99897;
i__99889_99893 = G__99898;
continue;
}
} else
{var temp__4092__auto___99899 = cljs.core.seq.call(null,seq__99886_99890);if(temp__4092__auto___99899)
{var seq__99886_99900__$1 = temp__4092__auto___99899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99886_99900__$1))
{var c__14546__auto___99901 = cljs.core.chunk_first.call(null,seq__99886_99900__$1);{
var G__99902 = cljs.core.chunk_rest.call(null,seq__99886_99900__$1);
var G__99903 = c__14546__auto___99901;
var G__99904 = cljs.core.count.call(null,c__14546__auto___99901);
var G__99905 = 0;
seq__99886_99890 = G__99902;
chunk__99887_99891 = G__99903;
count__99888_99892 = G__99904;
i__99889_99893 = G__99905;
continue;
}
} else
{var n_99906 = cljs.core.first.call(null,seq__99886_99900__$1);n_99906.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__99907 = cljs.core.next.call(null,seq__99886_99900__$1);
var G__99908 = null;
var G__99909 = 0;
var G__99910 = 0;
seq__99886_99890 = G__99907;
chunk__99887_99891 = G__99908;
count__99888_99892 = G__99909;
i__99889_99893 = G__99910;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__99911){
var content = cljs.core.first(arglist__99911);
arglist__99911 = cljs.core.next(arglist__99911);
var name = cljs.core.first(arglist__99911);
var value = cljs.core.rest(arglist__99911);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__99916_99920 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__99917_99921 = null;var count__99918_99922 = 0;var i__99919_99923 = 0;while(true){
if((i__99919_99923 < count__99918_99922))
{var n_99924 = cljs.core._nth.call(null,chunk__99917_99921,i__99919_99923);n_99924.removeAttribute(cljs.core.name.call(null,name));
{
var G__99925 = seq__99916_99920;
var G__99926 = chunk__99917_99921;
var G__99927 = count__99918_99922;
var G__99928 = (i__99919_99923 + 1);
seq__99916_99920 = G__99925;
chunk__99917_99921 = G__99926;
count__99918_99922 = G__99927;
i__99919_99923 = G__99928;
continue;
}
} else
{var temp__4092__auto___99929 = cljs.core.seq.call(null,seq__99916_99920);if(temp__4092__auto___99929)
{var seq__99916_99930__$1 = temp__4092__auto___99929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99916_99930__$1))
{var c__14546__auto___99931 = cljs.core.chunk_first.call(null,seq__99916_99930__$1);{
var G__99932 = cljs.core.chunk_rest.call(null,seq__99916_99930__$1);
var G__99933 = c__14546__auto___99931;
var G__99934 = cljs.core.count.call(null,c__14546__auto___99931);
var G__99935 = 0;
seq__99916_99920 = G__99932;
chunk__99917_99921 = G__99933;
count__99918_99922 = G__99934;
i__99919_99923 = G__99935;
continue;
}
} else
{var n_99936 = cljs.core.first.call(null,seq__99916_99930__$1);n_99936.removeAttribute(cljs.core.name.call(null,name));
{
var G__99937 = cljs.core.next.call(null,seq__99916_99930__$1);
var G__99938 = null;
var G__99939 = 0;
var G__99940 = 0;
seq__99916_99920 = G__99937;
chunk__99917_99921 = G__99938;
count__99918_99922 = G__99939;
i__99919_99923 = G__99940;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__99942 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__99942,0,null);var v = cljs.core.nth.call(null,vec__99942,1,null);if(cljs.core.truth_((function (){var and__13810__auto__ = k;if(cljs.core.truth_(and__13810__auto__))
{return v;
} else
{return and__13810__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__99943_SHARP_){var attr = attrs__$1.item(p1__99943_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__99950_99956 = cljs.core.seq.call(null,styles);var chunk__99951_99957 = null;var count__99952_99958 = 0;var i__99953_99959 = 0;while(true){
if((i__99953_99959 < count__99952_99958))
{var vec__99954_99960 = cljs.core._nth.call(null,chunk__99951_99957,i__99953_99959);var name_99961 = cljs.core.nth.call(null,vec__99954_99960,0,null);var value_99962 = cljs.core.nth.call(null,vec__99954_99960,1,null);domina.set_style_BANG_.call(null,content,name_99961,value_99962);
{
var G__99963 = seq__99950_99956;
var G__99964 = chunk__99951_99957;
var G__99965 = count__99952_99958;
var G__99966 = (i__99953_99959 + 1);
seq__99950_99956 = G__99963;
chunk__99951_99957 = G__99964;
count__99952_99958 = G__99965;
i__99953_99959 = G__99966;
continue;
}
} else
{var temp__4092__auto___99967 = cljs.core.seq.call(null,seq__99950_99956);if(temp__4092__auto___99967)
{var seq__99950_99968__$1 = temp__4092__auto___99967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99950_99968__$1))
{var c__14546__auto___99969 = cljs.core.chunk_first.call(null,seq__99950_99968__$1);{
var G__99970 = cljs.core.chunk_rest.call(null,seq__99950_99968__$1);
var G__99971 = c__14546__auto___99969;
var G__99972 = cljs.core.count.call(null,c__14546__auto___99969);
var G__99973 = 0;
seq__99950_99956 = G__99970;
chunk__99951_99957 = G__99971;
count__99952_99958 = G__99972;
i__99953_99959 = G__99973;
continue;
}
} else
{var vec__99955_99974 = cljs.core.first.call(null,seq__99950_99968__$1);var name_99975 = cljs.core.nth.call(null,vec__99955_99974,0,null);var value_99976 = cljs.core.nth.call(null,vec__99955_99974,1,null);domina.set_style_BANG_.call(null,content,name_99975,value_99976);
{
var G__99977 = cljs.core.next.call(null,seq__99950_99968__$1);
var G__99978 = null;
var G__99979 = 0;
var G__99980 = 0;
seq__99950_99956 = G__99977;
chunk__99951_99957 = G__99978;
count__99952_99958 = G__99979;
i__99953_99959 = G__99980;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__99987_99993 = cljs.core.seq.call(null,attrs);var chunk__99988_99994 = null;var count__99989_99995 = 0;var i__99990_99996 = 0;while(true){
if((i__99990_99996 < count__99989_99995))
{var vec__99991_99997 = cljs.core._nth.call(null,chunk__99988_99994,i__99990_99996);var name_99998 = cljs.core.nth.call(null,vec__99991_99997,0,null);var value_99999 = cljs.core.nth.call(null,vec__99991_99997,1,null);domina.set_attr_BANG_.call(null,content,name_99998,value_99999);
{
var G__100000 = seq__99987_99993;
var G__100001 = chunk__99988_99994;
var G__100002 = count__99989_99995;
var G__100003 = (i__99990_99996 + 1);
seq__99987_99993 = G__100000;
chunk__99988_99994 = G__100001;
count__99989_99995 = G__100002;
i__99990_99996 = G__100003;
continue;
}
} else
{var temp__4092__auto___100004 = cljs.core.seq.call(null,seq__99987_99993);if(temp__4092__auto___100004)
{var seq__99987_100005__$1 = temp__4092__auto___100004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__99987_100005__$1))
{var c__14546__auto___100006 = cljs.core.chunk_first.call(null,seq__99987_100005__$1);{
var G__100007 = cljs.core.chunk_rest.call(null,seq__99987_100005__$1);
var G__100008 = c__14546__auto___100006;
var G__100009 = cljs.core.count.call(null,c__14546__auto___100006);
var G__100010 = 0;
seq__99987_99993 = G__100007;
chunk__99988_99994 = G__100008;
count__99989_99995 = G__100009;
i__99990_99996 = G__100010;
continue;
}
} else
{var vec__99992_100011 = cljs.core.first.call(null,seq__99987_100005__$1);var name_100012 = cljs.core.nth.call(null,vec__99992_100011,0,null);var value_100013 = cljs.core.nth.call(null,vec__99992_100011,1,null);domina.set_attr_BANG_.call(null,content,name_100012,value_100013);
{
var G__100014 = cljs.core.next.call(null,seq__99987_100005__$1);
var G__100015 = null;
var G__100016 = 0;
var G__100017 = 0;
seq__99987_99993 = G__100014;
chunk__99988_99994 = G__100015;
count__99989_99995 = G__100016;
i__99990_99996 = G__100017;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__100022_100026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100023_100027 = null;var count__100024_100028 = 0;var i__100025_100029 = 0;while(true){
if((i__100025_100029 < count__100024_100028))
{var node_100030 = cljs.core._nth.call(null,chunk__100023_100027,i__100025_100029);goog.dom.classes.add(node_100030,class$);
{
var G__100031 = seq__100022_100026;
var G__100032 = chunk__100023_100027;
var G__100033 = count__100024_100028;
var G__100034 = (i__100025_100029 + 1);
seq__100022_100026 = G__100031;
chunk__100023_100027 = G__100032;
count__100024_100028 = G__100033;
i__100025_100029 = G__100034;
continue;
}
} else
{var temp__4092__auto___100035 = cljs.core.seq.call(null,seq__100022_100026);if(temp__4092__auto___100035)
{var seq__100022_100036__$1 = temp__4092__auto___100035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100022_100036__$1))
{var c__14546__auto___100037 = cljs.core.chunk_first.call(null,seq__100022_100036__$1);{
var G__100038 = cljs.core.chunk_rest.call(null,seq__100022_100036__$1);
var G__100039 = c__14546__auto___100037;
var G__100040 = cljs.core.count.call(null,c__14546__auto___100037);
var G__100041 = 0;
seq__100022_100026 = G__100038;
chunk__100023_100027 = G__100039;
count__100024_100028 = G__100040;
i__100025_100029 = G__100041;
continue;
}
} else
{var node_100042 = cljs.core.first.call(null,seq__100022_100036__$1);goog.dom.classes.add(node_100042,class$);
{
var G__100043 = cljs.core.next.call(null,seq__100022_100036__$1);
var G__100044 = null;
var G__100045 = 0;
var G__100046 = 0;
seq__100022_100026 = G__100043;
chunk__100023_100027 = G__100044;
count__100024_100028 = G__100045;
i__100025_100029 = G__100046;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__100051_100055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100052_100056 = null;var count__100053_100057 = 0;var i__100054_100058 = 0;while(true){
if((i__100054_100058 < count__100053_100057))
{var node_100059 = cljs.core._nth.call(null,chunk__100052_100056,i__100054_100058);goog.dom.classes.remove(node_100059,class$);
{
var G__100060 = seq__100051_100055;
var G__100061 = chunk__100052_100056;
var G__100062 = count__100053_100057;
var G__100063 = (i__100054_100058 + 1);
seq__100051_100055 = G__100060;
chunk__100052_100056 = G__100061;
count__100053_100057 = G__100062;
i__100054_100058 = G__100063;
continue;
}
} else
{var temp__4092__auto___100064 = cljs.core.seq.call(null,seq__100051_100055);if(temp__4092__auto___100064)
{var seq__100051_100065__$1 = temp__4092__auto___100064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100051_100065__$1))
{var c__14546__auto___100066 = cljs.core.chunk_first.call(null,seq__100051_100065__$1);{
var G__100067 = cljs.core.chunk_rest.call(null,seq__100051_100065__$1);
var G__100068 = c__14546__auto___100066;
var G__100069 = cljs.core.count.call(null,c__14546__auto___100066);
var G__100070 = 0;
seq__100051_100055 = G__100067;
chunk__100052_100056 = G__100068;
count__100053_100057 = G__100069;
i__100054_100058 = G__100070;
continue;
}
} else
{var node_100071 = cljs.core.first.call(null,seq__100051_100065__$1);goog.dom.classes.remove(node_100071,class$);
{
var G__100072 = cljs.core.next.call(null,seq__100051_100065__$1);
var G__100073 = null;
var G__100074 = 0;
var G__100075 = 0;
seq__100051_100055 = G__100072;
chunk__100052_100056 = G__100073;
count__100053_100057 = G__100074;
i__100054_100058 = G__100075;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__100080_100084 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100081_100085 = null;var count__100082_100086 = 0;var i__100083_100087 = 0;while(true){
if((i__100083_100087 < count__100082_100086))
{var node_100088 = cljs.core._nth.call(null,chunk__100081_100085,i__100083_100087);goog.dom.classes.toggle(node_100088,class$);
{
var G__100089 = seq__100080_100084;
var G__100090 = chunk__100081_100085;
var G__100091 = count__100082_100086;
var G__100092 = (i__100083_100087 + 1);
seq__100080_100084 = G__100089;
chunk__100081_100085 = G__100090;
count__100082_100086 = G__100091;
i__100083_100087 = G__100092;
continue;
}
} else
{var temp__4092__auto___100093 = cljs.core.seq.call(null,seq__100080_100084);if(temp__4092__auto___100093)
{var seq__100080_100094__$1 = temp__4092__auto___100093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100080_100094__$1))
{var c__14546__auto___100095 = cljs.core.chunk_first.call(null,seq__100080_100094__$1);{
var G__100096 = cljs.core.chunk_rest.call(null,seq__100080_100094__$1);
var G__100097 = c__14546__auto___100095;
var G__100098 = cljs.core.count.call(null,c__14546__auto___100095);
var G__100099 = 0;
seq__100080_100084 = G__100096;
chunk__100081_100085 = G__100097;
count__100082_100086 = G__100098;
i__100083_100087 = G__100099;
continue;
}
} else
{var node_100100 = cljs.core.first.call(null,seq__100080_100094__$1);goog.dom.classes.toggle(node_100100,class$);
{
var G__100101 = cljs.core.next.call(null,seq__100080_100094__$1);
var G__100102 = null;
var G__100103 = 0;
var G__100104 = 0;
seq__100080_100084 = G__100101;
chunk__100081_100085 = G__100102;
count__100082_100086 = G__100103;
i__100083_100087 = G__100104;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_100113__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__100109_100114 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100110_100115 = null;var count__100111_100116 = 0;var i__100112_100117 = 0;while(true){
if((i__100112_100117 < count__100111_100116))
{var node_100118 = cljs.core._nth.call(null,chunk__100110_100115,i__100112_100117);goog.dom.classes.set(node_100118,classes_100113__$1);
{
var G__100119 = seq__100109_100114;
var G__100120 = chunk__100110_100115;
var G__100121 = count__100111_100116;
var G__100122 = (i__100112_100117 + 1);
seq__100109_100114 = G__100119;
chunk__100110_100115 = G__100120;
count__100111_100116 = G__100121;
i__100112_100117 = G__100122;
continue;
}
} else
{var temp__4092__auto___100123 = cljs.core.seq.call(null,seq__100109_100114);if(temp__4092__auto___100123)
{var seq__100109_100124__$1 = temp__4092__auto___100123;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100109_100124__$1))
{var c__14546__auto___100125 = cljs.core.chunk_first.call(null,seq__100109_100124__$1);{
var G__100126 = cljs.core.chunk_rest.call(null,seq__100109_100124__$1);
var G__100127 = c__14546__auto___100125;
var G__100128 = cljs.core.count.call(null,c__14546__auto___100125);
var G__100129 = 0;
seq__100109_100114 = G__100126;
chunk__100110_100115 = G__100127;
count__100111_100116 = G__100128;
i__100112_100117 = G__100129;
continue;
}
} else
{var node_100130 = cljs.core.first.call(null,seq__100109_100124__$1);goog.dom.classes.set(node_100130,classes_100113__$1);
{
var G__100131 = cljs.core.next.call(null,seq__100109_100124__$1);
var G__100132 = null;
var G__100133 = 0;
var G__100134 = 0;
seq__100109_100114 = G__100131;
chunk__100110_100115 = G__100132;
count__100111_100116 = G__100133;
i__100112_100117 = G__100134;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__100139_100143 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100140_100144 = null;var count__100141_100145 = 0;var i__100142_100146 = 0;while(true){
if((i__100142_100146 < count__100141_100145))
{var node_100147 = cljs.core._nth.call(null,chunk__100140_100144,i__100142_100146);goog.dom.setTextContent(node_100147,value);
{
var G__100148 = seq__100139_100143;
var G__100149 = chunk__100140_100144;
var G__100150 = count__100141_100145;
var G__100151 = (i__100142_100146 + 1);
seq__100139_100143 = G__100148;
chunk__100140_100144 = G__100149;
count__100141_100145 = G__100150;
i__100142_100146 = G__100151;
continue;
}
} else
{var temp__4092__auto___100152 = cljs.core.seq.call(null,seq__100139_100143);if(temp__4092__auto___100152)
{var seq__100139_100153__$1 = temp__4092__auto___100152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100139_100153__$1))
{var c__14546__auto___100154 = cljs.core.chunk_first.call(null,seq__100139_100153__$1);{
var G__100155 = cljs.core.chunk_rest.call(null,seq__100139_100153__$1);
var G__100156 = c__14546__auto___100154;
var G__100157 = cljs.core.count.call(null,c__14546__auto___100154);
var G__100158 = 0;
seq__100139_100143 = G__100155;
chunk__100140_100144 = G__100156;
count__100141_100145 = G__100157;
i__100142_100146 = G__100158;
continue;
}
} else
{var node_100159 = cljs.core.first.call(null,seq__100139_100153__$1);goog.dom.setTextContent(node_100159,value);
{
var G__100160 = cljs.core.next.call(null,seq__100139_100153__$1);
var G__100161 = null;
var G__100162 = 0;
var G__100163 = 0;
seq__100139_100143 = G__100160;
chunk__100140_100144 = G__100161;
count__100141_100145 = G__100162;
i__100142_100146 = G__100163;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__100168_100172 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100169_100173 = null;var count__100170_100174 = 0;var i__100171_100175 = 0;while(true){
if((i__100171_100175 < count__100170_100174))
{var node_100176 = cljs.core._nth.call(null,chunk__100169_100173,i__100171_100175);goog.dom.forms.setValue(node_100176,value);
{
var G__100177 = seq__100168_100172;
var G__100178 = chunk__100169_100173;
var G__100179 = count__100170_100174;
var G__100180 = (i__100171_100175 + 1);
seq__100168_100172 = G__100177;
chunk__100169_100173 = G__100178;
count__100170_100174 = G__100179;
i__100171_100175 = G__100180;
continue;
}
} else
{var temp__4092__auto___100181 = cljs.core.seq.call(null,seq__100168_100172);if(temp__4092__auto___100181)
{var seq__100168_100182__$1 = temp__4092__auto___100181;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100168_100182__$1))
{var c__14546__auto___100183 = cljs.core.chunk_first.call(null,seq__100168_100182__$1);{
var G__100184 = cljs.core.chunk_rest.call(null,seq__100168_100182__$1);
var G__100185 = c__14546__auto___100183;
var G__100186 = cljs.core.count.call(null,c__14546__auto___100183);
var G__100187 = 0;
seq__100168_100172 = G__100184;
chunk__100169_100173 = G__100185;
count__100170_100174 = G__100186;
i__100171_100175 = G__100187;
continue;
}
} else
{var node_100188 = cljs.core.first.call(null,seq__100168_100182__$1);goog.dom.forms.setValue(node_100188,value);
{
var G__100189 = cljs.core.next.call(null,seq__100168_100182__$1);
var G__100190 = null;
var G__100191 = 0;
var G__100192 = 0;
seq__100168_100172 = G__100189;
chunk__100169_100173 = G__100190;
count__100170_100174 = G__100191;
i__100171_100175 = G__100192;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13810__auto__ = allows_inner_html_QMARK_;if(and__13810__auto__)
{var and__13810__auto____$1 = (function (){var or__13822__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13810__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13810__auto____$1;
}
} else
{return and__13810__auto__;
}
})()))
{var value_100203 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__100199_100204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__100200_100205 = null;var count__100201_100206 = 0;var i__100202_100207 = 0;while(true){
if((i__100202_100207 < count__100201_100206))
{var node_100208 = cljs.core._nth.call(null,chunk__100200_100205,i__100202_100207);node_100208.innerHTML = value_100203;
{
var G__100209 = seq__100199_100204;
var G__100210 = chunk__100200_100205;
var G__100211 = count__100201_100206;
var G__100212 = (i__100202_100207 + 1);
seq__100199_100204 = G__100209;
chunk__100200_100205 = G__100210;
count__100201_100206 = G__100211;
i__100202_100207 = G__100212;
continue;
}
} else
{var temp__4092__auto___100213 = cljs.core.seq.call(null,seq__100199_100204);if(temp__4092__auto___100213)
{var seq__100199_100214__$1 = temp__4092__auto___100213;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100199_100214__$1))
{var c__14546__auto___100215 = cljs.core.chunk_first.call(null,seq__100199_100214__$1);{
var G__100216 = cljs.core.chunk_rest.call(null,seq__100199_100214__$1);
var G__100217 = c__14546__auto___100215;
var G__100218 = cljs.core.count.call(null,c__14546__auto___100215);
var G__100219 = 0;
seq__100199_100204 = G__100216;
chunk__100200_100205 = G__100217;
count__100201_100206 = G__100218;
i__100202_100207 = G__100219;
continue;
}
} else
{var node_100220 = cljs.core.first.call(null,seq__100199_100214__$1);node_100220.innerHTML = value_100203;
{
var G__100221 = cljs.core.next.call(null,seq__100199_100214__$1);
var G__100222 = null;
var G__100223 = 0;
var G__100224 = 0;
seq__100199_100204 = G__100221;
chunk__100200_100205 = G__100222;
count__100201_100206 = G__100223;
i__100202_100207 = G__100224;
continue;
}
}
} else
{}
}
break;
}
}catch (e100198){if((e100198 instanceof Error))
{var e_100225 = e100198;domina.replace_children_BANG_.call(null,content,value_100203);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e100198;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13810__auto__ = bubble;if(cljs.core.truth_(and__13810__auto__))
{return (value == null);
} else
{return and__13810__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13822__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13822__auto__))
{return or__13822__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__100232_100236 = cljs.core.seq.call(null,children);var chunk__100233_100237 = null;var count__100234_100238 = 0;var i__100235_100239 = 0;while(true){
if((i__100235_100239 < count__100234_100238))
{var child_100240 = cljs.core._nth.call(null,chunk__100233_100237,i__100235_100239);frag.appendChild(child_100240);
{
var G__100241 = seq__100232_100236;
var G__100242 = chunk__100233_100237;
var G__100243 = count__100234_100238;
var G__100244 = (i__100235_100239 + 1);
seq__100232_100236 = G__100241;
chunk__100233_100237 = G__100242;
count__100234_100238 = G__100243;
i__100235_100239 = G__100244;
continue;
}
} else
{var temp__4092__auto___100245 = cljs.core.seq.call(null,seq__100232_100236);if(temp__4092__auto___100245)
{var seq__100232_100246__$1 = temp__4092__auto___100245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__100232_100246__$1))
{var c__14546__auto___100247 = cljs.core.chunk_first.call(null,seq__100232_100246__$1);{
var G__100248 = cljs.core.chunk_rest.call(null,seq__100232_100246__$1);
var G__100249 = c__14546__auto___100247;
var G__100250 = cljs.core.count.call(null,c__14546__auto___100247);
var G__100251 = 0;
seq__100232_100236 = G__100248;
chunk__100233_100237 = G__100249;
count__100234_100238 = G__100250;
i__100235_100239 = G__100251;
continue;
}
} else
{var child_100252 = cljs.core.first.call(null,seq__100232_100246__$1);frag.appendChild(child_100252);
{
var G__100253 = cljs.core.next.call(null,seq__100232_100246__$1);
var G__100254 = null;
var G__100255 = 0;
var G__100256 = 0;
seq__100232_100236 = G__100253;
chunk__100233_100237 = G__100254;
count__100234_100238 = G__100255;
i__100235_100239 = G__100256;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__100226_SHARP_,p2__100227_SHARP_){return f.call(null,p1__100226_SHARP_,p2__100227_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13810__auto__ = obj;if(cljs.core.truth_(and__13810__auto__))
{var and__13810__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13810__auto____$1)
{return obj.length;
} else
{return and__13810__auto____$1;
}
} else
{return and__13810__auto__;
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
{if((function (){var G__100258 = list_thing;if(G__100258)
{var bit__14448__auto__ = (G__100258.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14448__auto__) || (G__100258.cljs$core$ISeqable$))
{return true;
} else
{if((!G__100258.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100258);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100258);
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
{if((function (){var G__100259 = content;if(G__100259)
{var bit__14448__auto__ = (G__100259.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14448__auto__) || (G__100259.cljs$core$ISeqable$))
{return true;
} else
{if((!G__100259.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100259);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100259);
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
{if((function (){var G__100260 = content;if(G__100260)
{var bit__14448__auto__ = (G__100260.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14448__auto__) || (G__100260.cljs$core$ISeqable$))
{return true;
} else
{if((!G__100260.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100260);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__100260);
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