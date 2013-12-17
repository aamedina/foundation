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
var opt_wrapper_376054 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_376055 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_376056 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_376055,table_section_wrapper_376055,opt_wrapper_376054,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_376056,table_section_wrapper_376055,cell_wrapper_376056,opt_wrapper_376054,table_section_wrapper_376055,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_376055]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13967__auto__ = div.firstChild;if(cljs.core.truth_(and__13967__auto__))
{return div.firstChild.childNodes;
} else
{return and__13967__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__376061 = cljs.core.seq.call(null,tbody);var chunk__376062 = null;var count__376063 = 0;var i__376064 = 0;while(true){
if((i__376064 < count__376063))
{var child = cljs.core._nth.call(null,chunk__376062,i__376064);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__376065 = seq__376061;
var G__376066 = chunk__376062;
var G__376067 = count__376063;
var G__376068 = (i__376064 + 1);
seq__376061 = G__376065;
chunk__376062 = G__376066;
count__376063 = G__376067;
i__376064 = G__376068;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__376061);if(temp__4092__auto__)
{var seq__376061__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376061__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__376061__$1);{
var G__376069 = cljs.core.chunk_rest.call(null,seq__376061__$1);
var G__376070 = c__14708__auto__;
var G__376071 = cljs.core.count.call(null,c__14708__auto__);
var G__376072 = 0;
seq__376061 = G__376069;
chunk__376062 = G__376070;
count__376063 = G__376071;
i__376064 = G__376072;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__376061__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__376073 = cljs.core.next.call(null,seq__376061__$1);
var G__376074 = null;
var G__376075 = 0;
var G__376076 = 0;
seq__376061 = G__376073;
chunk__376062 = G__376074;
count__376063 = G__376075;
i__376064 = G__376076;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__376078 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__376078,0,null);var start_wrap = cljs.core.nth.call(null,vec__376078,1,null);var end_wrap = cljs.core.nth.call(null,vec__376078,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__376079 = wrapper.lastChild;
var G__376080 = (level - 1);
wrapper = G__376079;
level = G__376080;
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
domina.DomContent = (function (){var obj376082 = {};return obj376082;
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
log_debug.cljs$lang$applyTo = (function (arglist__376083){
var mesg = cljs.core.seq(arglist__376083);
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
log.cljs$lang$applyTo = (function (arglist__376084){
var mesg = cljs.core.seq(arglist__376084);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__376085){
var contents = cljs.core.seq(arglist__376085);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__376086_SHARP_){return p1__376086_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__376087_SHARP_,p2__376088_SHARP_){return goog.dom.insertChildAt(p1__376087_SHARP_,p2__376088_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__376090_SHARP_,p2__376089_SHARP_){return goog.dom.insertSiblingBefore(p2__376089_SHARP_,p1__376090_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__376092_SHARP_,p2__376091_SHARP_){return goog.dom.insertSiblingAfter(p2__376091_SHARP_,p1__376092_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__376094_SHARP_,p2__376093_SHARP_){return goog.dom.replaceNode(p2__376093_SHARP_,p1__376094_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__376099_376103 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376100_376104 = null;var count__376101_376105 = 0;var i__376102_376106 = 0;while(true){
if((i__376102_376106 < count__376101_376105))
{var n_376107 = cljs.core._nth.call(null,chunk__376100_376104,i__376102_376106);goog.style.setStyle(n_376107,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__376108 = seq__376099_376103;
var G__376109 = chunk__376100_376104;
var G__376110 = count__376101_376105;
var G__376111 = (i__376102_376106 + 1);
seq__376099_376103 = G__376108;
chunk__376100_376104 = G__376109;
count__376101_376105 = G__376110;
i__376102_376106 = G__376111;
continue;
}
} else
{var temp__4092__auto___376112 = cljs.core.seq.call(null,seq__376099_376103);if(temp__4092__auto___376112)
{var seq__376099_376113__$1 = temp__4092__auto___376112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376099_376113__$1))
{var c__14708__auto___376114 = cljs.core.chunk_first.call(null,seq__376099_376113__$1);{
var G__376115 = cljs.core.chunk_rest.call(null,seq__376099_376113__$1);
var G__376116 = c__14708__auto___376114;
var G__376117 = cljs.core.count.call(null,c__14708__auto___376114);
var G__376118 = 0;
seq__376099_376103 = G__376115;
chunk__376100_376104 = G__376116;
count__376101_376105 = G__376117;
i__376102_376106 = G__376118;
continue;
}
} else
{var n_376119 = cljs.core.first.call(null,seq__376099_376113__$1);goog.style.setStyle(n_376119,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__376120 = cljs.core.next.call(null,seq__376099_376113__$1);
var G__376121 = null;
var G__376122 = 0;
var G__376123 = 0;
seq__376099_376103 = G__376120;
chunk__376100_376104 = G__376121;
count__376101_376105 = G__376122;
i__376102_376106 = G__376123;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__376124){
var content = cljs.core.first(arglist__376124);
arglist__376124 = cljs.core.next(arglist__376124);
var name = cljs.core.first(arglist__376124);
var value = cljs.core.rest(arglist__376124);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__376129_376133 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376130_376134 = null;var count__376131_376135 = 0;var i__376132_376136 = 0;while(true){
if((i__376132_376136 < count__376131_376135))
{var n_376137 = cljs.core._nth.call(null,chunk__376130_376134,i__376132_376136);n_376137.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__376138 = seq__376129_376133;
var G__376139 = chunk__376130_376134;
var G__376140 = count__376131_376135;
var G__376141 = (i__376132_376136 + 1);
seq__376129_376133 = G__376138;
chunk__376130_376134 = G__376139;
count__376131_376135 = G__376140;
i__376132_376136 = G__376141;
continue;
}
} else
{var temp__4092__auto___376142 = cljs.core.seq.call(null,seq__376129_376133);if(temp__4092__auto___376142)
{var seq__376129_376143__$1 = temp__4092__auto___376142;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376129_376143__$1))
{var c__14708__auto___376144 = cljs.core.chunk_first.call(null,seq__376129_376143__$1);{
var G__376145 = cljs.core.chunk_rest.call(null,seq__376129_376143__$1);
var G__376146 = c__14708__auto___376144;
var G__376147 = cljs.core.count.call(null,c__14708__auto___376144);
var G__376148 = 0;
seq__376129_376133 = G__376145;
chunk__376130_376134 = G__376146;
count__376131_376135 = G__376147;
i__376132_376136 = G__376148;
continue;
}
} else
{var n_376149 = cljs.core.first.call(null,seq__376129_376143__$1);n_376149.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__376150 = cljs.core.next.call(null,seq__376129_376143__$1);
var G__376151 = null;
var G__376152 = 0;
var G__376153 = 0;
seq__376129_376133 = G__376150;
chunk__376130_376134 = G__376151;
count__376131_376135 = G__376152;
i__376132_376136 = G__376153;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__376154){
var content = cljs.core.first(arglist__376154);
arglist__376154 = cljs.core.next(arglist__376154);
var name = cljs.core.first(arglist__376154);
var value = cljs.core.rest(arglist__376154);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__376159_376163 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376160_376164 = null;var count__376161_376165 = 0;var i__376162_376166 = 0;while(true){
if((i__376162_376166 < count__376161_376165))
{var n_376167 = cljs.core._nth.call(null,chunk__376160_376164,i__376162_376166);n_376167.removeAttribute(cljs.core.name.call(null,name));
{
var G__376168 = seq__376159_376163;
var G__376169 = chunk__376160_376164;
var G__376170 = count__376161_376165;
var G__376171 = (i__376162_376166 + 1);
seq__376159_376163 = G__376168;
chunk__376160_376164 = G__376169;
count__376161_376165 = G__376170;
i__376162_376166 = G__376171;
continue;
}
} else
{var temp__4092__auto___376172 = cljs.core.seq.call(null,seq__376159_376163);if(temp__4092__auto___376172)
{var seq__376159_376173__$1 = temp__4092__auto___376172;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376159_376173__$1))
{var c__14708__auto___376174 = cljs.core.chunk_first.call(null,seq__376159_376173__$1);{
var G__376175 = cljs.core.chunk_rest.call(null,seq__376159_376173__$1);
var G__376176 = c__14708__auto___376174;
var G__376177 = cljs.core.count.call(null,c__14708__auto___376174);
var G__376178 = 0;
seq__376159_376163 = G__376175;
chunk__376160_376164 = G__376176;
count__376161_376165 = G__376177;
i__376162_376166 = G__376178;
continue;
}
} else
{var n_376179 = cljs.core.first.call(null,seq__376159_376173__$1);n_376179.removeAttribute(cljs.core.name.call(null,name));
{
var G__376180 = cljs.core.next.call(null,seq__376159_376173__$1);
var G__376181 = null;
var G__376182 = 0;
var G__376183 = 0;
seq__376159_376163 = G__376180;
chunk__376160_376164 = G__376181;
count__376161_376165 = G__376182;
i__376162_376166 = G__376183;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__376185 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__376185,0,null);var v = cljs.core.nth.call(null,vec__376185,1,null);if(cljs.core.truth_((function (){var and__13967__auto__ = k;if(cljs.core.truth_(and__13967__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__376186_SHARP_){var attr = attrs__$1.item(p1__376186_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__376193_376199 = cljs.core.seq.call(null,styles);var chunk__376194_376200 = null;var count__376195_376201 = 0;var i__376196_376202 = 0;while(true){
if((i__376196_376202 < count__376195_376201))
{var vec__376197_376203 = cljs.core._nth.call(null,chunk__376194_376200,i__376196_376202);var name_376204 = cljs.core.nth.call(null,vec__376197_376203,0,null);var value_376205 = cljs.core.nth.call(null,vec__376197_376203,1,null);domina.set_style_BANG_.call(null,content,name_376204,value_376205);
{
var G__376206 = seq__376193_376199;
var G__376207 = chunk__376194_376200;
var G__376208 = count__376195_376201;
var G__376209 = (i__376196_376202 + 1);
seq__376193_376199 = G__376206;
chunk__376194_376200 = G__376207;
count__376195_376201 = G__376208;
i__376196_376202 = G__376209;
continue;
}
} else
{var temp__4092__auto___376210 = cljs.core.seq.call(null,seq__376193_376199);if(temp__4092__auto___376210)
{var seq__376193_376211__$1 = temp__4092__auto___376210;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376193_376211__$1))
{var c__14708__auto___376212 = cljs.core.chunk_first.call(null,seq__376193_376211__$1);{
var G__376213 = cljs.core.chunk_rest.call(null,seq__376193_376211__$1);
var G__376214 = c__14708__auto___376212;
var G__376215 = cljs.core.count.call(null,c__14708__auto___376212);
var G__376216 = 0;
seq__376193_376199 = G__376213;
chunk__376194_376200 = G__376214;
count__376195_376201 = G__376215;
i__376196_376202 = G__376216;
continue;
}
} else
{var vec__376198_376217 = cljs.core.first.call(null,seq__376193_376211__$1);var name_376218 = cljs.core.nth.call(null,vec__376198_376217,0,null);var value_376219 = cljs.core.nth.call(null,vec__376198_376217,1,null);domina.set_style_BANG_.call(null,content,name_376218,value_376219);
{
var G__376220 = cljs.core.next.call(null,seq__376193_376211__$1);
var G__376221 = null;
var G__376222 = 0;
var G__376223 = 0;
seq__376193_376199 = G__376220;
chunk__376194_376200 = G__376221;
count__376195_376201 = G__376222;
i__376196_376202 = G__376223;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__376230_376236 = cljs.core.seq.call(null,attrs);var chunk__376231_376237 = null;var count__376232_376238 = 0;var i__376233_376239 = 0;while(true){
if((i__376233_376239 < count__376232_376238))
{var vec__376234_376240 = cljs.core._nth.call(null,chunk__376231_376237,i__376233_376239);var name_376241 = cljs.core.nth.call(null,vec__376234_376240,0,null);var value_376242 = cljs.core.nth.call(null,vec__376234_376240,1,null);domina.set_attr_BANG_.call(null,content,name_376241,value_376242);
{
var G__376243 = seq__376230_376236;
var G__376244 = chunk__376231_376237;
var G__376245 = count__376232_376238;
var G__376246 = (i__376233_376239 + 1);
seq__376230_376236 = G__376243;
chunk__376231_376237 = G__376244;
count__376232_376238 = G__376245;
i__376233_376239 = G__376246;
continue;
}
} else
{var temp__4092__auto___376247 = cljs.core.seq.call(null,seq__376230_376236);if(temp__4092__auto___376247)
{var seq__376230_376248__$1 = temp__4092__auto___376247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376230_376248__$1))
{var c__14708__auto___376249 = cljs.core.chunk_first.call(null,seq__376230_376248__$1);{
var G__376250 = cljs.core.chunk_rest.call(null,seq__376230_376248__$1);
var G__376251 = c__14708__auto___376249;
var G__376252 = cljs.core.count.call(null,c__14708__auto___376249);
var G__376253 = 0;
seq__376230_376236 = G__376250;
chunk__376231_376237 = G__376251;
count__376232_376238 = G__376252;
i__376233_376239 = G__376253;
continue;
}
} else
{var vec__376235_376254 = cljs.core.first.call(null,seq__376230_376248__$1);var name_376255 = cljs.core.nth.call(null,vec__376235_376254,0,null);var value_376256 = cljs.core.nth.call(null,vec__376235_376254,1,null);domina.set_attr_BANG_.call(null,content,name_376255,value_376256);
{
var G__376257 = cljs.core.next.call(null,seq__376230_376248__$1);
var G__376258 = null;
var G__376259 = 0;
var G__376260 = 0;
seq__376230_376236 = G__376257;
chunk__376231_376237 = G__376258;
count__376232_376238 = G__376259;
i__376233_376239 = G__376260;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__376265_376269 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376266_376270 = null;var count__376267_376271 = 0;var i__376268_376272 = 0;while(true){
if((i__376268_376272 < count__376267_376271))
{var node_376273 = cljs.core._nth.call(null,chunk__376266_376270,i__376268_376272);goog.dom.classes.add(node_376273,class$);
{
var G__376274 = seq__376265_376269;
var G__376275 = chunk__376266_376270;
var G__376276 = count__376267_376271;
var G__376277 = (i__376268_376272 + 1);
seq__376265_376269 = G__376274;
chunk__376266_376270 = G__376275;
count__376267_376271 = G__376276;
i__376268_376272 = G__376277;
continue;
}
} else
{var temp__4092__auto___376278 = cljs.core.seq.call(null,seq__376265_376269);if(temp__4092__auto___376278)
{var seq__376265_376279__$1 = temp__4092__auto___376278;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376265_376279__$1))
{var c__14708__auto___376280 = cljs.core.chunk_first.call(null,seq__376265_376279__$1);{
var G__376281 = cljs.core.chunk_rest.call(null,seq__376265_376279__$1);
var G__376282 = c__14708__auto___376280;
var G__376283 = cljs.core.count.call(null,c__14708__auto___376280);
var G__376284 = 0;
seq__376265_376269 = G__376281;
chunk__376266_376270 = G__376282;
count__376267_376271 = G__376283;
i__376268_376272 = G__376284;
continue;
}
} else
{var node_376285 = cljs.core.first.call(null,seq__376265_376279__$1);goog.dom.classes.add(node_376285,class$);
{
var G__376286 = cljs.core.next.call(null,seq__376265_376279__$1);
var G__376287 = null;
var G__376288 = 0;
var G__376289 = 0;
seq__376265_376269 = G__376286;
chunk__376266_376270 = G__376287;
count__376267_376271 = G__376288;
i__376268_376272 = G__376289;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__376294_376298 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376295_376299 = null;var count__376296_376300 = 0;var i__376297_376301 = 0;while(true){
if((i__376297_376301 < count__376296_376300))
{var node_376302 = cljs.core._nth.call(null,chunk__376295_376299,i__376297_376301);goog.dom.classes.remove(node_376302,class$);
{
var G__376303 = seq__376294_376298;
var G__376304 = chunk__376295_376299;
var G__376305 = count__376296_376300;
var G__376306 = (i__376297_376301 + 1);
seq__376294_376298 = G__376303;
chunk__376295_376299 = G__376304;
count__376296_376300 = G__376305;
i__376297_376301 = G__376306;
continue;
}
} else
{var temp__4092__auto___376307 = cljs.core.seq.call(null,seq__376294_376298);if(temp__4092__auto___376307)
{var seq__376294_376308__$1 = temp__4092__auto___376307;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376294_376308__$1))
{var c__14708__auto___376309 = cljs.core.chunk_first.call(null,seq__376294_376308__$1);{
var G__376310 = cljs.core.chunk_rest.call(null,seq__376294_376308__$1);
var G__376311 = c__14708__auto___376309;
var G__376312 = cljs.core.count.call(null,c__14708__auto___376309);
var G__376313 = 0;
seq__376294_376298 = G__376310;
chunk__376295_376299 = G__376311;
count__376296_376300 = G__376312;
i__376297_376301 = G__376313;
continue;
}
} else
{var node_376314 = cljs.core.first.call(null,seq__376294_376308__$1);goog.dom.classes.remove(node_376314,class$);
{
var G__376315 = cljs.core.next.call(null,seq__376294_376308__$1);
var G__376316 = null;
var G__376317 = 0;
var G__376318 = 0;
seq__376294_376298 = G__376315;
chunk__376295_376299 = G__376316;
count__376296_376300 = G__376317;
i__376297_376301 = G__376318;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__376323_376327 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376324_376328 = null;var count__376325_376329 = 0;var i__376326_376330 = 0;while(true){
if((i__376326_376330 < count__376325_376329))
{var node_376331 = cljs.core._nth.call(null,chunk__376324_376328,i__376326_376330);goog.dom.classes.toggle(node_376331,class$);
{
var G__376332 = seq__376323_376327;
var G__376333 = chunk__376324_376328;
var G__376334 = count__376325_376329;
var G__376335 = (i__376326_376330 + 1);
seq__376323_376327 = G__376332;
chunk__376324_376328 = G__376333;
count__376325_376329 = G__376334;
i__376326_376330 = G__376335;
continue;
}
} else
{var temp__4092__auto___376336 = cljs.core.seq.call(null,seq__376323_376327);if(temp__4092__auto___376336)
{var seq__376323_376337__$1 = temp__4092__auto___376336;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376323_376337__$1))
{var c__14708__auto___376338 = cljs.core.chunk_first.call(null,seq__376323_376337__$1);{
var G__376339 = cljs.core.chunk_rest.call(null,seq__376323_376337__$1);
var G__376340 = c__14708__auto___376338;
var G__376341 = cljs.core.count.call(null,c__14708__auto___376338);
var G__376342 = 0;
seq__376323_376327 = G__376339;
chunk__376324_376328 = G__376340;
count__376325_376329 = G__376341;
i__376326_376330 = G__376342;
continue;
}
} else
{var node_376343 = cljs.core.first.call(null,seq__376323_376337__$1);goog.dom.classes.toggle(node_376343,class$);
{
var G__376344 = cljs.core.next.call(null,seq__376323_376337__$1);
var G__376345 = null;
var G__376346 = 0;
var G__376347 = 0;
seq__376323_376327 = G__376344;
chunk__376324_376328 = G__376345;
count__376325_376329 = G__376346;
i__376326_376330 = G__376347;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_376356__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__376352_376357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376353_376358 = null;var count__376354_376359 = 0;var i__376355_376360 = 0;while(true){
if((i__376355_376360 < count__376354_376359))
{var node_376361 = cljs.core._nth.call(null,chunk__376353_376358,i__376355_376360);goog.dom.classes.set(node_376361,classes_376356__$1);
{
var G__376362 = seq__376352_376357;
var G__376363 = chunk__376353_376358;
var G__376364 = count__376354_376359;
var G__376365 = (i__376355_376360 + 1);
seq__376352_376357 = G__376362;
chunk__376353_376358 = G__376363;
count__376354_376359 = G__376364;
i__376355_376360 = G__376365;
continue;
}
} else
{var temp__4092__auto___376366 = cljs.core.seq.call(null,seq__376352_376357);if(temp__4092__auto___376366)
{var seq__376352_376367__$1 = temp__4092__auto___376366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376352_376367__$1))
{var c__14708__auto___376368 = cljs.core.chunk_first.call(null,seq__376352_376367__$1);{
var G__376369 = cljs.core.chunk_rest.call(null,seq__376352_376367__$1);
var G__376370 = c__14708__auto___376368;
var G__376371 = cljs.core.count.call(null,c__14708__auto___376368);
var G__376372 = 0;
seq__376352_376357 = G__376369;
chunk__376353_376358 = G__376370;
count__376354_376359 = G__376371;
i__376355_376360 = G__376372;
continue;
}
} else
{var node_376373 = cljs.core.first.call(null,seq__376352_376367__$1);goog.dom.classes.set(node_376373,classes_376356__$1);
{
var G__376374 = cljs.core.next.call(null,seq__376352_376367__$1);
var G__376375 = null;
var G__376376 = 0;
var G__376377 = 0;
seq__376352_376357 = G__376374;
chunk__376353_376358 = G__376375;
count__376354_376359 = G__376376;
i__376355_376360 = G__376377;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__376382_376386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376383_376387 = null;var count__376384_376388 = 0;var i__376385_376389 = 0;while(true){
if((i__376385_376389 < count__376384_376388))
{var node_376390 = cljs.core._nth.call(null,chunk__376383_376387,i__376385_376389);goog.dom.setTextContent(node_376390,value);
{
var G__376391 = seq__376382_376386;
var G__376392 = chunk__376383_376387;
var G__376393 = count__376384_376388;
var G__376394 = (i__376385_376389 + 1);
seq__376382_376386 = G__376391;
chunk__376383_376387 = G__376392;
count__376384_376388 = G__376393;
i__376385_376389 = G__376394;
continue;
}
} else
{var temp__4092__auto___376395 = cljs.core.seq.call(null,seq__376382_376386);if(temp__4092__auto___376395)
{var seq__376382_376396__$1 = temp__4092__auto___376395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376382_376396__$1))
{var c__14708__auto___376397 = cljs.core.chunk_first.call(null,seq__376382_376396__$1);{
var G__376398 = cljs.core.chunk_rest.call(null,seq__376382_376396__$1);
var G__376399 = c__14708__auto___376397;
var G__376400 = cljs.core.count.call(null,c__14708__auto___376397);
var G__376401 = 0;
seq__376382_376386 = G__376398;
chunk__376383_376387 = G__376399;
count__376384_376388 = G__376400;
i__376385_376389 = G__376401;
continue;
}
} else
{var node_376402 = cljs.core.first.call(null,seq__376382_376396__$1);goog.dom.setTextContent(node_376402,value);
{
var G__376403 = cljs.core.next.call(null,seq__376382_376396__$1);
var G__376404 = null;
var G__376405 = 0;
var G__376406 = 0;
seq__376382_376386 = G__376403;
chunk__376383_376387 = G__376404;
count__376384_376388 = G__376405;
i__376385_376389 = G__376406;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__376411_376415 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376412_376416 = null;var count__376413_376417 = 0;var i__376414_376418 = 0;while(true){
if((i__376414_376418 < count__376413_376417))
{var node_376419 = cljs.core._nth.call(null,chunk__376412_376416,i__376414_376418);goog.dom.forms.setValue(node_376419,value);
{
var G__376420 = seq__376411_376415;
var G__376421 = chunk__376412_376416;
var G__376422 = count__376413_376417;
var G__376423 = (i__376414_376418 + 1);
seq__376411_376415 = G__376420;
chunk__376412_376416 = G__376421;
count__376413_376417 = G__376422;
i__376414_376418 = G__376423;
continue;
}
} else
{var temp__4092__auto___376424 = cljs.core.seq.call(null,seq__376411_376415);if(temp__4092__auto___376424)
{var seq__376411_376425__$1 = temp__4092__auto___376424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376411_376425__$1))
{var c__14708__auto___376426 = cljs.core.chunk_first.call(null,seq__376411_376425__$1);{
var G__376427 = cljs.core.chunk_rest.call(null,seq__376411_376425__$1);
var G__376428 = c__14708__auto___376426;
var G__376429 = cljs.core.count.call(null,c__14708__auto___376426);
var G__376430 = 0;
seq__376411_376415 = G__376427;
chunk__376412_376416 = G__376428;
count__376413_376417 = G__376429;
i__376414_376418 = G__376430;
continue;
}
} else
{var node_376431 = cljs.core.first.call(null,seq__376411_376425__$1);goog.dom.forms.setValue(node_376431,value);
{
var G__376432 = cljs.core.next.call(null,seq__376411_376425__$1);
var G__376433 = null;
var G__376434 = 0;
var G__376435 = 0;
seq__376411_376415 = G__376432;
chunk__376412_376416 = G__376433;
count__376413_376417 = G__376434;
i__376414_376418 = G__376435;
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
{var value_376446 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__376442_376447 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__376443_376448 = null;var count__376444_376449 = 0;var i__376445_376450 = 0;while(true){
if((i__376445_376450 < count__376444_376449))
{var node_376451 = cljs.core._nth.call(null,chunk__376443_376448,i__376445_376450);node_376451.innerHTML = value_376446;
{
var G__376452 = seq__376442_376447;
var G__376453 = chunk__376443_376448;
var G__376454 = count__376444_376449;
var G__376455 = (i__376445_376450 + 1);
seq__376442_376447 = G__376452;
chunk__376443_376448 = G__376453;
count__376444_376449 = G__376454;
i__376445_376450 = G__376455;
continue;
}
} else
{var temp__4092__auto___376456 = cljs.core.seq.call(null,seq__376442_376447);if(temp__4092__auto___376456)
{var seq__376442_376457__$1 = temp__4092__auto___376456;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376442_376457__$1))
{var c__14708__auto___376458 = cljs.core.chunk_first.call(null,seq__376442_376457__$1);{
var G__376459 = cljs.core.chunk_rest.call(null,seq__376442_376457__$1);
var G__376460 = c__14708__auto___376458;
var G__376461 = cljs.core.count.call(null,c__14708__auto___376458);
var G__376462 = 0;
seq__376442_376447 = G__376459;
chunk__376443_376448 = G__376460;
count__376444_376449 = G__376461;
i__376445_376450 = G__376462;
continue;
}
} else
{var node_376463 = cljs.core.first.call(null,seq__376442_376457__$1);node_376463.innerHTML = value_376446;
{
var G__376464 = cljs.core.next.call(null,seq__376442_376457__$1);
var G__376465 = null;
var G__376466 = 0;
var G__376467 = 0;
seq__376442_376447 = G__376464;
chunk__376443_376448 = G__376465;
count__376444_376449 = G__376466;
i__376445_376450 = G__376467;
continue;
}
}
} else
{}
}
break;
}
}catch (e376441){if((e376441 instanceof Error))
{var e_376468 = e376441;domina.replace_children_BANG_.call(null,content,value_376446);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e376441;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__376475_376479 = cljs.core.seq.call(null,children);var chunk__376476_376480 = null;var count__376477_376481 = 0;var i__376478_376482 = 0;while(true){
if((i__376478_376482 < count__376477_376481))
{var child_376483 = cljs.core._nth.call(null,chunk__376476_376480,i__376478_376482);frag.appendChild(child_376483);
{
var G__376484 = seq__376475_376479;
var G__376485 = chunk__376476_376480;
var G__376486 = count__376477_376481;
var G__376487 = (i__376478_376482 + 1);
seq__376475_376479 = G__376484;
chunk__376476_376480 = G__376485;
count__376477_376481 = G__376486;
i__376478_376482 = G__376487;
continue;
}
} else
{var temp__4092__auto___376488 = cljs.core.seq.call(null,seq__376475_376479);if(temp__4092__auto___376488)
{var seq__376475_376489__$1 = temp__4092__auto___376488;if(cljs.core.chunked_seq_QMARK_.call(null,seq__376475_376489__$1))
{var c__14708__auto___376490 = cljs.core.chunk_first.call(null,seq__376475_376489__$1);{
var G__376491 = cljs.core.chunk_rest.call(null,seq__376475_376489__$1);
var G__376492 = c__14708__auto___376490;
var G__376493 = cljs.core.count.call(null,c__14708__auto___376490);
var G__376494 = 0;
seq__376475_376479 = G__376491;
chunk__376476_376480 = G__376492;
count__376477_376481 = G__376493;
i__376478_376482 = G__376494;
continue;
}
} else
{var child_376495 = cljs.core.first.call(null,seq__376475_376489__$1);frag.appendChild(child_376495);
{
var G__376496 = cljs.core.next.call(null,seq__376475_376489__$1);
var G__376497 = null;
var G__376498 = 0;
var G__376499 = 0;
seq__376475_376479 = G__376496;
chunk__376476_376480 = G__376497;
count__376477_376481 = G__376498;
i__376478_376482 = G__376499;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__376469_SHARP_,p2__376470_SHARP_){return f.call(null,p1__376469_SHARP_,p2__376470_SHARP_);
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
{if((function (){var G__376501 = list_thing;if(G__376501)
{var bit__14610__auto__ = (G__376501.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__376501.cljs$core$ISeqable$))
{return true;
} else
{if((!G__376501.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376501);
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
{if((function (){var G__376502 = content;if(G__376502)
{var bit__14610__auto__ = (G__376502.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__376502.cljs$core$ISeqable$))
{return true;
} else
{if((!G__376502.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376502);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376502);
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
{if((function (){var G__376503 = content;if(G__376503)
{var bit__14610__auto__ = (G__376503.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__376503.cljs$core$ISeqable$))
{return true;
} else
{if((!G__376503.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376503);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__376503);
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