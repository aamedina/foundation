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
var opt_wrapper_44642 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44643 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_44644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_44643,table_section_wrapper_44643,opt_wrapper_44642,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_44644,table_section_wrapper_44643,cell_wrapper_44644,opt_wrapper_44642,table_section_wrapper_44643,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_44643]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13942__auto__ = div.firstChild;if(cljs.core.truth_(and__13942__auto__))
{return div.firstChild.childNodes;
} else
{return and__13942__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__44649 = cljs.core.seq.call(null,tbody);var chunk__44650 = null;var count__44651 = 0;var i__44652 = 0;while(true){
if((i__44652 < count__44651))
{var child = cljs.core._nth.call(null,chunk__44650,i__44652);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44653 = seq__44649;
var G__44654 = chunk__44650;
var G__44655 = count__44651;
var G__44656 = (i__44652 + 1);
seq__44649 = G__44653;
chunk__44650 = G__44654;
count__44651 = G__44655;
i__44652 = G__44656;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__44649);if(temp__4092__auto__)
{var seq__44649__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44649__$1))
{var c__14683__auto__ = cljs.core.chunk_first.call(null,seq__44649__$1);{
var G__44657 = cljs.core.chunk_rest.call(null,seq__44649__$1);
var G__44658 = c__14683__auto__;
var G__44659 = cljs.core.count.call(null,c__14683__auto__);
var G__44660 = 0;
seq__44649 = G__44657;
chunk__44650 = G__44658;
count__44651 = G__44659;
i__44652 = G__44660;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__44649__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44661 = cljs.core.next.call(null,seq__44649__$1);
var G__44662 = null;
var G__44663 = 0;
var G__44664 = 0;
seq__44649 = G__44661;
chunk__44650 = G__44662;
count__44651 = G__44663;
i__44652 = G__44664;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__44666 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__44666,0,null);var start_wrap = cljs.core.nth.call(null,vec__44666,1,null);var end_wrap = cljs.core.nth.call(null,vec__44666,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__44667 = wrapper.lastChild;
var G__44668 = (level - 1);
wrapper = G__44667;
level = G__44668;
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
if(cljs.core.truth_((function (){var and__13942__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13942__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13942__auto__;
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
domina.DomContent = (function (){var obj44670 = {};return obj44670;
})();
domina.nodes = (function nodes(content){if((function (){var and__13942__auto__ = content;if(and__13942__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13942__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14562__auto__ = (((content == null))?null:content);return (function (){var or__13954__auto__ = (domina.nodes[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (domina.nodes["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13942__auto__ = nodeseq;if(and__13942__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13942__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14562__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13954__auto__ = (domina.single_node[goog.typeOf(x__14562__auto__)]);if(or__13954__auto__)
{return or__13954__auto__;
} else
{var or__13954__auto____$1 = (domina.single_node["_"]);if(or__13954__auto____$1)
{return or__13954__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13942__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13942__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13942__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__44671){
var mesg = cljs.core.seq(arglist__44671);
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
log.cljs$lang$applyTo = (function (arglist__44672){
var mesg = cljs.core.seq(arglist__44672);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44673){
var contents = cljs.core.seq(arglist__44673);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__44674_SHARP_){return p1__44674_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__44675_SHARP_,p2__44676_SHARP_){return goog.dom.insertChildAt(p1__44675_SHARP_,p2__44676_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__44678_SHARP_,p2__44677_SHARP_){return goog.dom.insertSiblingBefore(p2__44677_SHARP_,p1__44678_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__44680_SHARP_,p2__44679_SHARP_){return goog.dom.insertSiblingAfter(p2__44679_SHARP_,p1__44680_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__44682_SHARP_,p2__44681_SHARP_){return goog.dom.replaceNode(p2__44681_SHARP_,p1__44682_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44687_44691 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44688_44692 = null;var count__44689_44693 = 0;var i__44690_44694 = 0;while(true){
if((i__44690_44694 < count__44689_44693))
{var n_44695 = cljs.core._nth.call(null,chunk__44688_44692,i__44690_44694);goog.style.setStyle(n_44695,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44696 = seq__44687_44691;
var G__44697 = chunk__44688_44692;
var G__44698 = count__44689_44693;
var G__44699 = (i__44690_44694 + 1);
seq__44687_44691 = G__44696;
chunk__44688_44692 = G__44697;
count__44689_44693 = G__44698;
i__44690_44694 = G__44699;
continue;
}
} else
{var temp__4092__auto___44700 = cljs.core.seq.call(null,seq__44687_44691);if(temp__4092__auto___44700)
{var seq__44687_44701__$1 = temp__4092__auto___44700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44687_44701__$1))
{var c__14683__auto___44702 = cljs.core.chunk_first.call(null,seq__44687_44701__$1);{
var G__44703 = cljs.core.chunk_rest.call(null,seq__44687_44701__$1);
var G__44704 = c__14683__auto___44702;
var G__44705 = cljs.core.count.call(null,c__14683__auto___44702);
var G__44706 = 0;
seq__44687_44691 = G__44703;
chunk__44688_44692 = G__44704;
count__44689_44693 = G__44705;
i__44690_44694 = G__44706;
continue;
}
} else
{var n_44707 = cljs.core.first.call(null,seq__44687_44701__$1);goog.style.setStyle(n_44707,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44708 = cljs.core.next.call(null,seq__44687_44701__$1);
var G__44709 = null;
var G__44710 = 0;
var G__44711 = 0;
seq__44687_44691 = G__44708;
chunk__44688_44692 = G__44709;
count__44689_44693 = G__44710;
i__44690_44694 = G__44711;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44712){
var content = cljs.core.first(arglist__44712);
arglist__44712 = cljs.core.next(arglist__44712);
var name = cljs.core.first(arglist__44712);
var value = cljs.core.rest(arglist__44712);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44717_44721 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44718_44722 = null;var count__44719_44723 = 0;var i__44720_44724 = 0;while(true){
if((i__44720_44724 < count__44719_44723))
{var n_44725 = cljs.core._nth.call(null,chunk__44718_44722,i__44720_44724);n_44725.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44726 = seq__44717_44721;
var G__44727 = chunk__44718_44722;
var G__44728 = count__44719_44723;
var G__44729 = (i__44720_44724 + 1);
seq__44717_44721 = G__44726;
chunk__44718_44722 = G__44727;
count__44719_44723 = G__44728;
i__44720_44724 = G__44729;
continue;
}
} else
{var temp__4092__auto___44730 = cljs.core.seq.call(null,seq__44717_44721);if(temp__4092__auto___44730)
{var seq__44717_44731__$1 = temp__4092__auto___44730;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44717_44731__$1))
{var c__14683__auto___44732 = cljs.core.chunk_first.call(null,seq__44717_44731__$1);{
var G__44733 = cljs.core.chunk_rest.call(null,seq__44717_44731__$1);
var G__44734 = c__14683__auto___44732;
var G__44735 = cljs.core.count.call(null,c__14683__auto___44732);
var G__44736 = 0;
seq__44717_44721 = G__44733;
chunk__44718_44722 = G__44734;
count__44719_44723 = G__44735;
i__44720_44724 = G__44736;
continue;
}
} else
{var n_44737 = cljs.core.first.call(null,seq__44717_44731__$1);n_44737.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__44738 = cljs.core.next.call(null,seq__44717_44731__$1);
var G__44739 = null;
var G__44740 = 0;
var G__44741 = 0;
seq__44717_44721 = G__44738;
chunk__44718_44722 = G__44739;
count__44719_44723 = G__44740;
i__44720_44724 = G__44741;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44742){
var content = cljs.core.first(arglist__44742);
arglist__44742 = cljs.core.next(arglist__44742);
var name = cljs.core.first(arglist__44742);
var value = cljs.core.rest(arglist__44742);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44747_44751 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44748_44752 = null;var count__44749_44753 = 0;var i__44750_44754 = 0;while(true){
if((i__44750_44754 < count__44749_44753))
{var n_44755 = cljs.core._nth.call(null,chunk__44748_44752,i__44750_44754);n_44755.removeAttribute(cljs.core.name.call(null,name));
{
var G__44756 = seq__44747_44751;
var G__44757 = chunk__44748_44752;
var G__44758 = count__44749_44753;
var G__44759 = (i__44750_44754 + 1);
seq__44747_44751 = G__44756;
chunk__44748_44752 = G__44757;
count__44749_44753 = G__44758;
i__44750_44754 = G__44759;
continue;
}
} else
{var temp__4092__auto___44760 = cljs.core.seq.call(null,seq__44747_44751);if(temp__4092__auto___44760)
{var seq__44747_44761__$1 = temp__4092__auto___44760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44747_44761__$1))
{var c__14683__auto___44762 = cljs.core.chunk_first.call(null,seq__44747_44761__$1);{
var G__44763 = cljs.core.chunk_rest.call(null,seq__44747_44761__$1);
var G__44764 = c__14683__auto___44762;
var G__44765 = cljs.core.count.call(null,c__14683__auto___44762);
var G__44766 = 0;
seq__44747_44751 = G__44763;
chunk__44748_44752 = G__44764;
count__44749_44753 = G__44765;
i__44750_44754 = G__44766;
continue;
}
} else
{var n_44767 = cljs.core.first.call(null,seq__44747_44761__$1);n_44767.removeAttribute(cljs.core.name.call(null,name));
{
var G__44768 = cljs.core.next.call(null,seq__44747_44761__$1);
var G__44769 = null;
var G__44770 = 0;
var G__44771 = 0;
seq__44747_44751 = G__44768;
chunk__44748_44752 = G__44769;
count__44749_44753 = G__44770;
i__44750_44754 = G__44771;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__44773 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__44773,0,null);var v = cljs.core.nth.call(null,vec__44773,1,null);if(cljs.core.truth_((function (){var and__13942__auto__ = k;if(cljs.core.truth_(and__13942__auto__))
{return v;
} else
{return and__13942__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__44774_SHARP_){var attr = attrs__$1.item(p1__44774_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44781_44787 = cljs.core.seq.call(null,styles);var chunk__44782_44788 = null;var count__44783_44789 = 0;var i__44784_44790 = 0;while(true){
if((i__44784_44790 < count__44783_44789))
{var vec__44785_44791 = cljs.core._nth.call(null,chunk__44782_44788,i__44784_44790);var name_44792 = cljs.core.nth.call(null,vec__44785_44791,0,null);var value_44793 = cljs.core.nth.call(null,vec__44785_44791,1,null);domina.set_style_BANG_.call(null,content,name_44792,value_44793);
{
var G__44794 = seq__44781_44787;
var G__44795 = chunk__44782_44788;
var G__44796 = count__44783_44789;
var G__44797 = (i__44784_44790 + 1);
seq__44781_44787 = G__44794;
chunk__44782_44788 = G__44795;
count__44783_44789 = G__44796;
i__44784_44790 = G__44797;
continue;
}
} else
{var temp__4092__auto___44798 = cljs.core.seq.call(null,seq__44781_44787);if(temp__4092__auto___44798)
{var seq__44781_44799__$1 = temp__4092__auto___44798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44781_44799__$1))
{var c__14683__auto___44800 = cljs.core.chunk_first.call(null,seq__44781_44799__$1);{
var G__44801 = cljs.core.chunk_rest.call(null,seq__44781_44799__$1);
var G__44802 = c__14683__auto___44800;
var G__44803 = cljs.core.count.call(null,c__14683__auto___44800);
var G__44804 = 0;
seq__44781_44787 = G__44801;
chunk__44782_44788 = G__44802;
count__44783_44789 = G__44803;
i__44784_44790 = G__44804;
continue;
}
} else
{var vec__44786_44805 = cljs.core.first.call(null,seq__44781_44799__$1);var name_44806 = cljs.core.nth.call(null,vec__44786_44805,0,null);var value_44807 = cljs.core.nth.call(null,vec__44786_44805,1,null);domina.set_style_BANG_.call(null,content,name_44806,value_44807);
{
var G__44808 = cljs.core.next.call(null,seq__44781_44799__$1);
var G__44809 = null;
var G__44810 = 0;
var G__44811 = 0;
seq__44781_44787 = G__44808;
chunk__44782_44788 = G__44809;
count__44783_44789 = G__44810;
i__44784_44790 = G__44811;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44818_44824 = cljs.core.seq.call(null,attrs);var chunk__44819_44825 = null;var count__44820_44826 = 0;var i__44821_44827 = 0;while(true){
if((i__44821_44827 < count__44820_44826))
{var vec__44822_44828 = cljs.core._nth.call(null,chunk__44819_44825,i__44821_44827);var name_44829 = cljs.core.nth.call(null,vec__44822_44828,0,null);var value_44830 = cljs.core.nth.call(null,vec__44822_44828,1,null);domina.set_attr_BANG_.call(null,content,name_44829,value_44830);
{
var G__44831 = seq__44818_44824;
var G__44832 = chunk__44819_44825;
var G__44833 = count__44820_44826;
var G__44834 = (i__44821_44827 + 1);
seq__44818_44824 = G__44831;
chunk__44819_44825 = G__44832;
count__44820_44826 = G__44833;
i__44821_44827 = G__44834;
continue;
}
} else
{var temp__4092__auto___44835 = cljs.core.seq.call(null,seq__44818_44824);if(temp__4092__auto___44835)
{var seq__44818_44836__$1 = temp__4092__auto___44835;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44818_44836__$1))
{var c__14683__auto___44837 = cljs.core.chunk_first.call(null,seq__44818_44836__$1);{
var G__44838 = cljs.core.chunk_rest.call(null,seq__44818_44836__$1);
var G__44839 = c__14683__auto___44837;
var G__44840 = cljs.core.count.call(null,c__14683__auto___44837);
var G__44841 = 0;
seq__44818_44824 = G__44838;
chunk__44819_44825 = G__44839;
count__44820_44826 = G__44840;
i__44821_44827 = G__44841;
continue;
}
} else
{var vec__44823_44842 = cljs.core.first.call(null,seq__44818_44836__$1);var name_44843 = cljs.core.nth.call(null,vec__44823_44842,0,null);var value_44844 = cljs.core.nth.call(null,vec__44823_44842,1,null);domina.set_attr_BANG_.call(null,content,name_44843,value_44844);
{
var G__44845 = cljs.core.next.call(null,seq__44818_44836__$1);
var G__44846 = null;
var G__44847 = 0;
var G__44848 = 0;
seq__44818_44824 = G__44845;
chunk__44819_44825 = G__44846;
count__44820_44826 = G__44847;
i__44821_44827 = G__44848;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44853_44857 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44854_44858 = null;var count__44855_44859 = 0;var i__44856_44860 = 0;while(true){
if((i__44856_44860 < count__44855_44859))
{var node_44861 = cljs.core._nth.call(null,chunk__44854_44858,i__44856_44860);goog.dom.classes.add(node_44861,class$);
{
var G__44862 = seq__44853_44857;
var G__44863 = chunk__44854_44858;
var G__44864 = count__44855_44859;
var G__44865 = (i__44856_44860 + 1);
seq__44853_44857 = G__44862;
chunk__44854_44858 = G__44863;
count__44855_44859 = G__44864;
i__44856_44860 = G__44865;
continue;
}
} else
{var temp__4092__auto___44866 = cljs.core.seq.call(null,seq__44853_44857);if(temp__4092__auto___44866)
{var seq__44853_44867__$1 = temp__4092__auto___44866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44853_44867__$1))
{var c__14683__auto___44868 = cljs.core.chunk_first.call(null,seq__44853_44867__$1);{
var G__44869 = cljs.core.chunk_rest.call(null,seq__44853_44867__$1);
var G__44870 = c__14683__auto___44868;
var G__44871 = cljs.core.count.call(null,c__14683__auto___44868);
var G__44872 = 0;
seq__44853_44857 = G__44869;
chunk__44854_44858 = G__44870;
count__44855_44859 = G__44871;
i__44856_44860 = G__44872;
continue;
}
} else
{var node_44873 = cljs.core.first.call(null,seq__44853_44867__$1);goog.dom.classes.add(node_44873,class$);
{
var G__44874 = cljs.core.next.call(null,seq__44853_44867__$1);
var G__44875 = null;
var G__44876 = 0;
var G__44877 = 0;
seq__44853_44857 = G__44874;
chunk__44854_44858 = G__44875;
count__44855_44859 = G__44876;
i__44856_44860 = G__44877;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44882_44886 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44883_44887 = null;var count__44884_44888 = 0;var i__44885_44889 = 0;while(true){
if((i__44885_44889 < count__44884_44888))
{var node_44890 = cljs.core._nth.call(null,chunk__44883_44887,i__44885_44889);goog.dom.classes.remove(node_44890,class$);
{
var G__44891 = seq__44882_44886;
var G__44892 = chunk__44883_44887;
var G__44893 = count__44884_44888;
var G__44894 = (i__44885_44889 + 1);
seq__44882_44886 = G__44891;
chunk__44883_44887 = G__44892;
count__44884_44888 = G__44893;
i__44885_44889 = G__44894;
continue;
}
} else
{var temp__4092__auto___44895 = cljs.core.seq.call(null,seq__44882_44886);if(temp__4092__auto___44895)
{var seq__44882_44896__$1 = temp__4092__auto___44895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44882_44896__$1))
{var c__14683__auto___44897 = cljs.core.chunk_first.call(null,seq__44882_44896__$1);{
var G__44898 = cljs.core.chunk_rest.call(null,seq__44882_44896__$1);
var G__44899 = c__14683__auto___44897;
var G__44900 = cljs.core.count.call(null,c__14683__auto___44897);
var G__44901 = 0;
seq__44882_44886 = G__44898;
chunk__44883_44887 = G__44899;
count__44884_44888 = G__44900;
i__44885_44889 = G__44901;
continue;
}
} else
{var node_44902 = cljs.core.first.call(null,seq__44882_44896__$1);goog.dom.classes.remove(node_44902,class$);
{
var G__44903 = cljs.core.next.call(null,seq__44882_44896__$1);
var G__44904 = null;
var G__44905 = 0;
var G__44906 = 0;
seq__44882_44886 = G__44903;
chunk__44883_44887 = G__44904;
count__44884_44888 = G__44905;
i__44885_44889 = G__44906;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44911_44915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44912_44916 = null;var count__44913_44917 = 0;var i__44914_44918 = 0;while(true){
if((i__44914_44918 < count__44913_44917))
{var node_44919 = cljs.core._nth.call(null,chunk__44912_44916,i__44914_44918);goog.dom.classes.toggle(node_44919,class$);
{
var G__44920 = seq__44911_44915;
var G__44921 = chunk__44912_44916;
var G__44922 = count__44913_44917;
var G__44923 = (i__44914_44918 + 1);
seq__44911_44915 = G__44920;
chunk__44912_44916 = G__44921;
count__44913_44917 = G__44922;
i__44914_44918 = G__44923;
continue;
}
} else
{var temp__4092__auto___44924 = cljs.core.seq.call(null,seq__44911_44915);if(temp__4092__auto___44924)
{var seq__44911_44925__$1 = temp__4092__auto___44924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44911_44925__$1))
{var c__14683__auto___44926 = cljs.core.chunk_first.call(null,seq__44911_44925__$1);{
var G__44927 = cljs.core.chunk_rest.call(null,seq__44911_44925__$1);
var G__44928 = c__14683__auto___44926;
var G__44929 = cljs.core.count.call(null,c__14683__auto___44926);
var G__44930 = 0;
seq__44911_44915 = G__44927;
chunk__44912_44916 = G__44928;
count__44913_44917 = G__44929;
i__44914_44918 = G__44930;
continue;
}
} else
{var node_44931 = cljs.core.first.call(null,seq__44911_44925__$1);goog.dom.classes.toggle(node_44931,class$);
{
var G__44932 = cljs.core.next.call(null,seq__44911_44925__$1);
var G__44933 = null;
var G__44934 = 0;
var G__44935 = 0;
seq__44911_44915 = G__44932;
chunk__44912_44916 = G__44933;
count__44913_44917 = G__44934;
i__44914_44918 = G__44935;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44944__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__44940_44945 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44941_44946 = null;var count__44942_44947 = 0;var i__44943_44948 = 0;while(true){
if((i__44943_44948 < count__44942_44947))
{var node_44949 = cljs.core._nth.call(null,chunk__44941_44946,i__44943_44948);goog.dom.classes.set(node_44949,classes_44944__$1);
{
var G__44950 = seq__44940_44945;
var G__44951 = chunk__44941_44946;
var G__44952 = count__44942_44947;
var G__44953 = (i__44943_44948 + 1);
seq__44940_44945 = G__44950;
chunk__44941_44946 = G__44951;
count__44942_44947 = G__44952;
i__44943_44948 = G__44953;
continue;
}
} else
{var temp__4092__auto___44954 = cljs.core.seq.call(null,seq__44940_44945);if(temp__4092__auto___44954)
{var seq__44940_44955__$1 = temp__4092__auto___44954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44940_44955__$1))
{var c__14683__auto___44956 = cljs.core.chunk_first.call(null,seq__44940_44955__$1);{
var G__44957 = cljs.core.chunk_rest.call(null,seq__44940_44955__$1);
var G__44958 = c__14683__auto___44956;
var G__44959 = cljs.core.count.call(null,c__14683__auto___44956);
var G__44960 = 0;
seq__44940_44945 = G__44957;
chunk__44941_44946 = G__44958;
count__44942_44947 = G__44959;
i__44943_44948 = G__44960;
continue;
}
} else
{var node_44961 = cljs.core.first.call(null,seq__44940_44955__$1);goog.dom.classes.set(node_44961,classes_44944__$1);
{
var G__44962 = cljs.core.next.call(null,seq__44940_44955__$1);
var G__44963 = null;
var G__44964 = 0;
var G__44965 = 0;
seq__44940_44945 = G__44962;
chunk__44941_44946 = G__44963;
count__44942_44947 = G__44964;
i__44943_44948 = G__44965;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44970_44974 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__44971_44975 = null;var count__44972_44976 = 0;var i__44973_44977 = 0;while(true){
if((i__44973_44977 < count__44972_44976))
{var node_44978 = cljs.core._nth.call(null,chunk__44971_44975,i__44973_44977);goog.dom.setTextContent(node_44978,value);
{
var G__44979 = seq__44970_44974;
var G__44980 = chunk__44971_44975;
var G__44981 = count__44972_44976;
var G__44982 = (i__44973_44977 + 1);
seq__44970_44974 = G__44979;
chunk__44971_44975 = G__44980;
count__44972_44976 = G__44981;
i__44973_44977 = G__44982;
continue;
}
} else
{var temp__4092__auto___44983 = cljs.core.seq.call(null,seq__44970_44974);if(temp__4092__auto___44983)
{var seq__44970_44984__$1 = temp__4092__auto___44983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44970_44984__$1))
{var c__14683__auto___44985 = cljs.core.chunk_first.call(null,seq__44970_44984__$1);{
var G__44986 = cljs.core.chunk_rest.call(null,seq__44970_44984__$1);
var G__44987 = c__14683__auto___44985;
var G__44988 = cljs.core.count.call(null,c__14683__auto___44985);
var G__44989 = 0;
seq__44970_44974 = G__44986;
chunk__44971_44975 = G__44987;
count__44972_44976 = G__44988;
i__44973_44977 = G__44989;
continue;
}
} else
{var node_44990 = cljs.core.first.call(null,seq__44970_44984__$1);goog.dom.setTextContent(node_44990,value);
{
var G__44991 = cljs.core.next.call(null,seq__44970_44984__$1);
var G__44992 = null;
var G__44993 = 0;
var G__44994 = 0;
seq__44970_44974 = G__44991;
chunk__44971_44975 = G__44992;
count__44972_44976 = G__44993;
i__44973_44977 = G__44994;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44999_45003 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__45000_45004 = null;var count__45001_45005 = 0;var i__45002_45006 = 0;while(true){
if((i__45002_45006 < count__45001_45005))
{var node_45007 = cljs.core._nth.call(null,chunk__45000_45004,i__45002_45006);goog.dom.forms.setValue(node_45007,value);
{
var G__45008 = seq__44999_45003;
var G__45009 = chunk__45000_45004;
var G__45010 = count__45001_45005;
var G__45011 = (i__45002_45006 + 1);
seq__44999_45003 = G__45008;
chunk__45000_45004 = G__45009;
count__45001_45005 = G__45010;
i__45002_45006 = G__45011;
continue;
}
} else
{var temp__4092__auto___45012 = cljs.core.seq.call(null,seq__44999_45003);if(temp__4092__auto___45012)
{var seq__44999_45013__$1 = temp__4092__auto___45012;if(cljs.core.chunked_seq_QMARK_.call(null,seq__44999_45013__$1))
{var c__14683__auto___45014 = cljs.core.chunk_first.call(null,seq__44999_45013__$1);{
var G__45015 = cljs.core.chunk_rest.call(null,seq__44999_45013__$1);
var G__45016 = c__14683__auto___45014;
var G__45017 = cljs.core.count.call(null,c__14683__auto___45014);
var G__45018 = 0;
seq__44999_45003 = G__45015;
chunk__45000_45004 = G__45016;
count__45001_45005 = G__45017;
i__45002_45006 = G__45018;
continue;
}
} else
{var node_45019 = cljs.core.first.call(null,seq__44999_45013__$1);goog.dom.forms.setValue(node_45019,value);
{
var G__45020 = cljs.core.next.call(null,seq__44999_45013__$1);
var G__45021 = null;
var G__45022 = 0;
var G__45023 = 0;
seq__44999_45003 = G__45020;
chunk__45000_45004 = G__45021;
count__45001_45005 = G__45022;
i__45002_45006 = G__45023;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13942__auto__ = allows_inner_html_QMARK_;if(and__13942__auto__)
{var and__13942__auto____$1 = (function (){var or__13954__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13942__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13942__auto____$1;
}
} else
{return and__13942__auto__;
}
})()))
{var value_45034 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__45030_45035 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__45031_45036 = null;var count__45032_45037 = 0;var i__45033_45038 = 0;while(true){
if((i__45033_45038 < count__45032_45037))
{var node_45039 = cljs.core._nth.call(null,chunk__45031_45036,i__45033_45038);node_45039.innerHTML = value_45034;
{
var G__45040 = seq__45030_45035;
var G__45041 = chunk__45031_45036;
var G__45042 = count__45032_45037;
var G__45043 = (i__45033_45038 + 1);
seq__45030_45035 = G__45040;
chunk__45031_45036 = G__45041;
count__45032_45037 = G__45042;
i__45033_45038 = G__45043;
continue;
}
} else
{var temp__4092__auto___45044 = cljs.core.seq.call(null,seq__45030_45035);if(temp__4092__auto___45044)
{var seq__45030_45045__$1 = temp__4092__auto___45044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45030_45045__$1))
{var c__14683__auto___45046 = cljs.core.chunk_first.call(null,seq__45030_45045__$1);{
var G__45047 = cljs.core.chunk_rest.call(null,seq__45030_45045__$1);
var G__45048 = c__14683__auto___45046;
var G__45049 = cljs.core.count.call(null,c__14683__auto___45046);
var G__45050 = 0;
seq__45030_45035 = G__45047;
chunk__45031_45036 = G__45048;
count__45032_45037 = G__45049;
i__45033_45038 = G__45050;
continue;
}
} else
{var node_45051 = cljs.core.first.call(null,seq__45030_45045__$1);node_45051.innerHTML = value_45034;
{
var G__45052 = cljs.core.next.call(null,seq__45030_45045__$1);
var G__45053 = null;
var G__45054 = 0;
var G__45055 = 0;
seq__45030_45035 = G__45052;
chunk__45031_45036 = G__45053;
count__45032_45037 = G__45054;
i__45033_45038 = G__45055;
continue;
}
}
} else
{}
}
break;
}
}catch (e45029){if((e45029 instanceof Error))
{var e_45056 = e45029;domina.replace_children_BANG_.call(null,content,value_45034);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45029;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13942__auto__ = bubble;if(cljs.core.truth_(and__13942__auto__))
{return (value == null);
} else
{return and__13942__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13954__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13954__auto__))
{return or__13954__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__45063_45067 = cljs.core.seq.call(null,children);var chunk__45064_45068 = null;var count__45065_45069 = 0;var i__45066_45070 = 0;while(true){
if((i__45066_45070 < count__45065_45069))
{var child_45071 = cljs.core._nth.call(null,chunk__45064_45068,i__45066_45070);frag.appendChild(child_45071);
{
var G__45072 = seq__45063_45067;
var G__45073 = chunk__45064_45068;
var G__45074 = count__45065_45069;
var G__45075 = (i__45066_45070 + 1);
seq__45063_45067 = G__45072;
chunk__45064_45068 = G__45073;
count__45065_45069 = G__45074;
i__45066_45070 = G__45075;
continue;
}
} else
{var temp__4092__auto___45076 = cljs.core.seq.call(null,seq__45063_45067);if(temp__4092__auto___45076)
{var seq__45063_45077__$1 = temp__4092__auto___45076;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45063_45077__$1))
{var c__14683__auto___45078 = cljs.core.chunk_first.call(null,seq__45063_45077__$1);{
var G__45079 = cljs.core.chunk_rest.call(null,seq__45063_45077__$1);
var G__45080 = c__14683__auto___45078;
var G__45081 = cljs.core.count.call(null,c__14683__auto___45078);
var G__45082 = 0;
seq__45063_45067 = G__45079;
chunk__45064_45068 = G__45080;
count__45065_45069 = G__45081;
i__45066_45070 = G__45082;
continue;
}
} else
{var child_45083 = cljs.core.first.call(null,seq__45063_45077__$1);frag.appendChild(child_45083);
{
var G__45084 = cljs.core.next.call(null,seq__45063_45077__$1);
var G__45085 = null;
var G__45086 = 0;
var G__45087 = 0;
seq__45063_45067 = G__45084;
chunk__45064_45068 = G__45085;
count__45065_45069 = G__45086;
i__45066_45070 = G__45087;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__45057_SHARP_,p2__45058_SHARP_){return f.call(null,p1__45057_SHARP_,p2__45058_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13942__auto__ = obj;if(cljs.core.truth_(and__13942__auto__))
{var and__13942__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13942__auto____$1)
{return obj.length;
} else
{return and__13942__auto____$1;
}
} else
{return and__13942__auto__;
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
{if((function (){var G__45089 = list_thing;if(G__45089)
{var bit__14585__auto__ = (G__45089.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14585__auto__) || (G__45089.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45089.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45089);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45089);
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
{if((function (){var G__45090 = content;if(G__45090)
{var bit__14585__auto__ = (G__45090.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14585__auto__) || (G__45090.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45090.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45090);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45090);
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
{if((function (){var G__45091 = content;if(G__45091)
{var bit__14585__auto__ = (G__45091.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14585__auto__) || (G__45091.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45091.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__45091);
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