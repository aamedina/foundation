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
var opt_wrapper_24662 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_24664 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_24663,table_section_wrapper_24663,opt_wrapper_24662,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_24664,table_section_wrapper_24663,cell_wrapper_24664,opt_wrapper_24662,table_section_wrapper_24663,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_24663]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7816__auto__ = div.firstChild;if(cljs.core.truth_(and__7816__auto__))
{return div.firstChild.childNodes;
} else
{return and__7816__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24669 = cljs.core.seq.call(null,tbody);var chunk__24670 = null;var count__24671 = 0;var i__24672 = 0;while(true){
if((i__24672 < count__24671))
{var child = cljs.core._nth.call(null,chunk__24670,i__24672);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24673 = seq__24669;
var G__24674 = chunk__24670;
var G__24675 = count__24671;
var G__24676 = (i__24672 + 1);
seq__24669 = G__24673;
chunk__24670 = G__24674;
count__24671 = G__24675;
i__24672 = G__24676;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__24669);if(temp__4092__auto__)
{var seq__24669__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24669__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__24669__$1);{
var G__24677 = cljs.core.chunk_rest.call(null,seq__24669__$1);
var G__24678 = c__8552__auto__;
var G__24679 = cljs.core.count.call(null,c__8552__auto__);
var G__24680 = 0;
seq__24669 = G__24677;
chunk__24670 = G__24678;
count__24671 = G__24679;
i__24672 = G__24680;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24669__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24681 = cljs.core.next.call(null,seq__24669__$1);
var G__24682 = null;
var G__24683 = 0;
var G__24684 = 0;
seq__24669 = G__24681;
chunk__24670 = G__24682;
count__24671 = G__24683;
i__24672 = G__24684;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__24686 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__24686,0,null);var start_wrap = cljs.core.nth.call(null,vec__24686,1,null);var end_wrap = cljs.core.nth.call(null,vec__24686,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__24687 = wrapper.lastChild;
var G__24688 = (level - 1);
wrapper = G__24687;
level = G__24688;
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
if(cljs.core.truth_((function (){var and__7816__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__7816__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__7816__auto__;
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
domina.DomContent = (function (){var obj24690 = {};return obj24690;
})();
domina.nodes = (function nodes(content){if((function (){var and__7816__auto__ = content;if(and__7816__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__7816__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8431__auto__ = (((content == null))?null:content);return (function (){var or__7828__auto__ = (domina.nodes[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (domina.nodes["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__7816__auto__ = nodeseq;if(and__7816__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__7816__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8431__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__7828__auto__ = (domina.single_node[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (domina.single_node["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__7816__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__7816__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7816__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__24691){
var mesg = cljs.core.seq(arglist__24691);
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
log.cljs$lang$applyTo = (function (arglist__24692){
var mesg = cljs.core.seq(arglist__24692);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24693){
var contents = cljs.core.seq(arglist__24693);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__24694_SHARP_){return p1__24694_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__24695_SHARP_,p2__24696_SHARP_){return goog.dom.insertChildAt(p1__24695_SHARP_,p2__24696_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24698_SHARP_,p2__24697_SHARP_){return goog.dom.insertSiblingBefore(p2__24697_SHARP_,p1__24698_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24700_SHARP_,p2__24699_SHARP_){return goog.dom.insertSiblingAfter(p2__24699_SHARP_,p1__24700_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__24702_SHARP_,p2__24701_SHARP_){return goog.dom.replaceNode(p2__24701_SHARP_,p1__24702_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24707_24711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24708_24712 = null;var count__24709_24713 = 0;var i__24710_24714 = 0;while(true){
if((i__24710_24714 < count__24709_24713))
{var n_24715 = cljs.core._nth.call(null,chunk__24708_24712,i__24710_24714);goog.style.setStyle(n_24715,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24716 = seq__24707_24711;
var G__24717 = chunk__24708_24712;
var G__24718 = count__24709_24713;
var G__24719 = (i__24710_24714 + 1);
seq__24707_24711 = G__24716;
chunk__24708_24712 = G__24717;
count__24709_24713 = G__24718;
i__24710_24714 = G__24719;
continue;
}
} else
{var temp__4092__auto___24720 = cljs.core.seq.call(null,seq__24707_24711);if(temp__4092__auto___24720)
{var seq__24707_24721__$1 = temp__4092__auto___24720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24707_24721__$1))
{var c__8552__auto___24722 = cljs.core.chunk_first.call(null,seq__24707_24721__$1);{
var G__24723 = cljs.core.chunk_rest.call(null,seq__24707_24721__$1);
var G__24724 = c__8552__auto___24722;
var G__24725 = cljs.core.count.call(null,c__8552__auto___24722);
var G__24726 = 0;
seq__24707_24711 = G__24723;
chunk__24708_24712 = G__24724;
count__24709_24713 = G__24725;
i__24710_24714 = G__24726;
continue;
}
} else
{var n_24727 = cljs.core.first.call(null,seq__24707_24721__$1);goog.style.setStyle(n_24727,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24728 = cljs.core.next.call(null,seq__24707_24721__$1);
var G__24729 = null;
var G__24730 = 0;
var G__24731 = 0;
seq__24707_24711 = G__24728;
chunk__24708_24712 = G__24729;
count__24709_24713 = G__24730;
i__24710_24714 = G__24731;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24732){
var content = cljs.core.first(arglist__24732);
arglist__24732 = cljs.core.next(arglist__24732);
var name = cljs.core.first(arglist__24732);
var value = cljs.core.rest(arglist__24732);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24737_24741 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24738_24742 = null;var count__24739_24743 = 0;var i__24740_24744 = 0;while(true){
if((i__24740_24744 < count__24739_24743))
{var n_24745 = cljs.core._nth.call(null,chunk__24738_24742,i__24740_24744);n_24745.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24746 = seq__24737_24741;
var G__24747 = chunk__24738_24742;
var G__24748 = count__24739_24743;
var G__24749 = (i__24740_24744 + 1);
seq__24737_24741 = G__24746;
chunk__24738_24742 = G__24747;
count__24739_24743 = G__24748;
i__24740_24744 = G__24749;
continue;
}
} else
{var temp__4092__auto___24750 = cljs.core.seq.call(null,seq__24737_24741);if(temp__4092__auto___24750)
{var seq__24737_24751__$1 = temp__4092__auto___24750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24737_24751__$1))
{var c__8552__auto___24752 = cljs.core.chunk_first.call(null,seq__24737_24751__$1);{
var G__24753 = cljs.core.chunk_rest.call(null,seq__24737_24751__$1);
var G__24754 = c__8552__auto___24752;
var G__24755 = cljs.core.count.call(null,c__8552__auto___24752);
var G__24756 = 0;
seq__24737_24741 = G__24753;
chunk__24738_24742 = G__24754;
count__24739_24743 = G__24755;
i__24740_24744 = G__24756;
continue;
}
} else
{var n_24757 = cljs.core.first.call(null,seq__24737_24751__$1);n_24757.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24758 = cljs.core.next.call(null,seq__24737_24751__$1);
var G__24759 = null;
var G__24760 = 0;
var G__24761 = 0;
seq__24737_24741 = G__24758;
chunk__24738_24742 = G__24759;
count__24739_24743 = G__24760;
i__24740_24744 = G__24761;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24762){
var content = cljs.core.first(arglist__24762);
arglist__24762 = cljs.core.next(arglist__24762);
var name = cljs.core.first(arglist__24762);
var value = cljs.core.rest(arglist__24762);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24767_24771 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24768_24772 = null;var count__24769_24773 = 0;var i__24770_24774 = 0;while(true){
if((i__24770_24774 < count__24769_24773))
{var n_24775 = cljs.core._nth.call(null,chunk__24768_24772,i__24770_24774);n_24775.removeAttribute(cljs.core.name.call(null,name));
{
var G__24776 = seq__24767_24771;
var G__24777 = chunk__24768_24772;
var G__24778 = count__24769_24773;
var G__24779 = (i__24770_24774 + 1);
seq__24767_24771 = G__24776;
chunk__24768_24772 = G__24777;
count__24769_24773 = G__24778;
i__24770_24774 = G__24779;
continue;
}
} else
{var temp__4092__auto___24780 = cljs.core.seq.call(null,seq__24767_24771);if(temp__4092__auto___24780)
{var seq__24767_24781__$1 = temp__4092__auto___24780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24767_24781__$1))
{var c__8552__auto___24782 = cljs.core.chunk_first.call(null,seq__24767_24781__$1);{
var G__24783 = cljs.core.chunk_rest.call(null,seq__24767_24781__$1);
var G__24784 = c__8552__auto___24782;
var G__24785 = cljs.core.count.call(null,c__8552__auto___24782);
var G__24786 = 0;
seq__24767_24771 = G__24783;
chunk__24768_24772 = G__24784;
count__24769_24773 = G__24785;
i__24770_24774 = G__24786;
continue;
}
} else
{var n_24787 = cljs.core.first.call(null,seq__24767_24781__$1);n_24787.removeAttribute(cljs.core.name.call(null,name));
{
var G__24788 = cljs.core.next.call(null,seq__24767_24781__$1);
var G__24789 = null;
var G__24790 = 0;
var G__24791 = 0;
seq__24767_24771 = G__24788;
chunk__24768_24772 = G__24789;
count__24769_24773 = G__24790;
i__24770_24774 = G__24791;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__24793 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__24793,0,null);var v = cljs.core.nth.call(null,vec__24793,1,null);if(cljs.core.truth_((function (){var and__7816__auto__ = k;if(cljs.core.truth_(and__7816__auto__))
{return v;
} else
{return and__7816__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__24794_SHARP_){var attr = attrs__$1.item(p1__24794_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24801_24807 = cljs.core.seq.call(null,styles);var chunk__24802_24808 = null;var count__24803_24809 = 0;var i__24804_24810 = 0;while(true){
if((i__24804_24810 < count__24803_24809))
{var vec__24805_24811 = cljs.core._nth.call(null,chunk__24802_24808,i__24804_24810);var name_24812 = cljs.core.nth.call(null,vec__24805_24811,0,null);var value_24813 = cljs.core.nth.call(null,vec__24805_24811,1,null);domina.set_style_BANG_.call(null,content,name_24812,value_24813);
{
var G__24814 = seq__24801_24807;
var G__24815 = chunk__24802_24808;
var G__24816 = count__24803_24809;
var G__24817 = (i__24804_24810 + 1);
seq__24801_24807 = G__24814;
chunk__24802_24808 = G__24815;
count__24803_24809 = G__24816;
i__24804_24810 = G__24817;
continue;
}
} else
{var temp__4092__auto___24818 = cljs.core.seq.call(null,seq__24801_24807);if(temp__4092__auto___24818)
{var seq__24801_24819__$1 = temp__4092__auto___24818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24801_24819__$1))
{var c__8552__auto___24820 = cljs.core.chunk_first.call(null,seq__24801_24819__$1);{
var G__24821 = cljs.core.chunk_rest.call(null,seq__24801_24819__$1);
var G__24822 = c__8552__auto___24820;
var G__24823 = cljs.core.count.call(null,c__8552__auto___24820);
var G__24824 = 0;
seq__24801_24807 = G__24821;
chunk__24802_24808 = G__24822;
count__24803_24809 = G__24823;
i__24804_24810 = G__24824;
continue;
}
} else
{var vec__24806_24825 = cljs.core.first.call(null,seq__24801_24819__$1);var name_24826 = cljs.core.nth.call(null,vec__24806_24825,0,null);var value_24827 = cljs.core.nth.call(null,vec__24806_24825,1,null);domina.set_style_BANG_.call(null,content,name_24826,value_24827);
{
var G__24828 = cljs.core.next.call(null,seq__24801_24819__$1);
var G__24829 = null;
var G__24830 = 0;
var G__24831 = 0;
seq__24801_24807 = G__24828;
chunk__24802_24808 = G__24829;
count__24803_24809 = G__24830;
i__24804_24810 = G__24831;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24838_24844 = cljs.core.seq.call(null,attrs);var chunk__24839_24845 = null;var count__24840_24846 = 0;var i__24841_24847 = 0;while(true){
if((i__24841_24847 < count__24840_24846))
{var vec__24842_24848 = cljs.core._nth.call(null,chunk__24839_24845,i__24841_24847);var name_24849 = cljs.core.nth.call(null,vec__24842_24848,0,null);var value_24850 = cljs.core.nth.call(null,vec__24842_24848,1,null);domina.set_attr_BANG_.call(null,content,name_24849,value_24850);
{
var G__24851 = seq__24838_24844;
var G__24852 = chunk__24839_24845;
var G__24853 = count__24840_24846;
var G__24854 = (i__24841_24847 + 1);
seq__24838_24844 = G__24851;
chunk__24839_24845 = G__24852;
count__24840_24846 = G__24853;
i__24841_24847 = G__24854;
continue;
}
} else
{var temp__4092__auto___24855 = cljs.core.seq.call(null,seq__24838_24844);if(temp__4092__auto___24855)
{var seq__24838_24856__$1 = temp__4092__auto___24855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24838_24856__$1))
{var c__8552__auto___24857 = cljs.core.chunk_first.call(null,seq__24838_24856__$1);{
var G__24858 = cljs.core.chunk_rest.call(null,seq__24838_24856__$1);
var G__24859 = c__8552__auto___24857;
var G__24860 = cljs.core.count.call(null,c__8552__auto___24857);
var G__24861 = 0;
seq__24838_24844 = G__24858;
chunk__24839_24845 = G__24859;
count__24840_24846 = G__24860;
i__24841_24847 = G__24861;
continue;
}
} else
{var vec__24843_24862 = cljs.core.first.call(null,seq__24838_24856__$1);var name_24863 = cljs.core.nth.call(null,vec__24843_24862,0,null);var value_24864 = cljs.core.nth.call(null,vec__24843_24862,1,null);domina.set_attr_BANG_.call(null,content,name_24863,value_24864);
{
var G__24865 = cljs.core.next.call(null,seq__24838_24856__$1);
var G__24866 = null;
var G__24867 = 0;
var G__24868 = 0;
seq__24838_24844 = G__24865;
chunk__24839_24845 = G__24866;
count__24840_24846 = G__24867;
i__24841_24847 = G__24868;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24873_24877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24874_24878 = null;var count__24875_24879 = 0;var i__24876_24880 = 0;while(true){
if((i__24876_24880 < count__24875_24879))
{var node_24881 = cljs.core._nth.call(null,chunk__24874_24878,i__24876_24880);goog.dom.classes.add(node_24881,class$);
{
var G__24882 = seq__24873_24877;
var G__24883 = chunk__24874_24878;
var G__24884 = count__24875_24879;
var G__24885 = (i__24876_24880 + 1);
seq__24873_24877 = G__24882;
chunk__24874_24878 = G__24883;
count__24875_24879 = G__24884;
i__24876_24880 = G__24885;
continue;
}
} else
{var temp__4092__auto___24886 = cljs.core.seq.call(null,seq__24873_24877);if(temp__4092__auto___24886)
{var seq__24873_24887__$1 = temp__4092__auto___24886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24873_24887__$1))
{var c__8552__auto___24888 = cljs.core.chunk_first.call(null,seq__24873_24887__$1);{
var G__24889 = cljs.core.chunk_rest.call(null,seq__24873_24887__$1);
var G__24890 = c__8552__auto___24888;
var G__24891 = cljs.core.count.call(null,c__8552__auto___24888);
var G__24892 = 0;
seq__24873_24877 = G__24889;
chunk__24874_24878 = G__24890;
count__24875_24879 = G__24891;
i__24876_24880 = G__24892;
continue;
}
} else
{var node_24893 = cljs.core.first.call(null,seq__24873_24887__$1);goog.dom.classes.add(node_24893,class$);
{
var G__24894 = cljs.core.next.call(null,seq__24873_24887__$1);
var G__24895 = null;
var G__24896 = 0;
var G__24897 = 0;
seq__24873_24877 = G__24894;
chunk__24874_24878 = G__24895;
count__24875_24879 = G__24896;
i__24876_24880 = G__24897;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24902_24906 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24903_24907 = null;var count__24904_24908 = 0;var i__24905_24909 = 0;while(true){
if((i__24905_24909 < count__24904_24908))
{var node_24910 = cljs.core._nth.call(null,chunk__24903_24907,i__24905_24909);goog.dom.classes.remove(node_24910,class$);
{
var G__24911 = seq__24902_24906;
var G__24912 = chunk__24903_24907;
var G__24913 = count__24904_24908;
var G__24914 = (i__24905_24909 + 1);
seq__24902_24906 = G__24911;
chunk__24903_24907 = G__24912;
count__24904_24908 = G__24913;
i__24905_24909 = G__24914;
continue;
}
} else
{var temp__4092__auto___24915 = cljs.core.seq.call(null,seq__24902_24906);if(temp__4092__auto___24915)
{var seq__24902_24916__$1 = temp__4092__auto___24915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24902_24916__$1))
{var c__8552__auto___24917 = cljs.core.chunk_first.call(null,seq__24902_24916__$1);{
var G__24918 = cljs.core.chunk_rest.call(null,seq__24902_24916__$1);
var G__24919 = c__8552__auto___24917;
var G__24920 = cljs.core.count.call(null,c__8552__auto___24917);
var G__24921 = 0;
seq__24902_24906 = G__24918;
chunk__24903_24907 = G__24919;
count__24904_24908 = G__24920;
i__24905_24909 = G__24921;
continue;
}
} else
{var node_24922 = cljs.core.first.call(null,seq__24902_24916__$1);goog.dom.classes.remove(node_24922,class$);
{
var G__24923 = cljs.core.next.call(null,seq__24902_24916__$1);
var G__24924 = null;
var G__24925 = 0;
var G__24926 = 0;
seq__24902_24906 = G__24923;
chunk__24903_24907 = G__24924;
count__24904_24908 = G__24925;
i__24905_24909 = G__24926;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24931_24935 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24932_24936 = null;var count__24933_24937 = 0;var i__24934_24938 = 0;while(true){
if((i__24934_24938 < count__24933_24937))
{var node_24939 = cljs.core._nth.call(null,chunk__24932_24936,i__24934_24938);goog.dom.classes.toggle(node_24939,class$);
{
var G__24940 = seq__24931_24935;
var G__24941 = chunk__24932_24936;
var G__24942 = count__24933_24937;
var G__24943 = (i__24934_24938 + 1);
seq__24931_24935 = G__24940;
chunk__24932_24936 = G__24941;
count__24933_24937 = G__24942;
i__24934_24938 = G__24943;
continue;
}
} else
{var temp__4092__auto___24944 = cljs.core.seq.call(null,seq__24931_24935);if(temp__4092__auto___24944)
{var seq__24931_24945__$1 = temp__4092__auto___24944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24931_24945__$1))
{var c__8552__auto___24946 = cljs.core.chunk_first.call(null,seq__24931_24945__$1);{
var G__24947 = cljs.core.chunk_rest.call(null,seq__24931_24945__$1);
var G__24948 = c__8552__auto___24946;
var G__24949 = cljs.core.count.call(null,c__8552__auto___24946);
var G__24950 = 0;
seq__24931_24935 = G__24947;
chunk__24932_24936 = G__24948;
count__24933_24937 = G__24949;
i__24934_24938 = G__24950;
continue;
}
} else
{var node_24951 = cljs.core.first.call(null,seq__24931_24945__$1);goog.dom.classes.toggle(node_24951,class$);
{
var G__24952 = cljs.core.next.call(null,seq__24931_24945__$1);
var G__24953 = null;
var G__24954 = 0;
var G__24955 = 0;
seq__24931_24935 = G__24952;
chunk__24932_24936 = G__24953;
count__24933_24937 = G__24954;
i__24934_24938 = G__24955;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24964__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24960_24965 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24961_24966 = null;var count__24962_24967 = 0;var i__24963_24968 = 0;while(true){
if((i__24963_24968 < count__24962_24967))
{var node_24969 = cljs.core._nth.call(null,chunk__24961_24966,i__24963_24968);goog.dom.classes.set(node_24969,classes_24964__$1);
{
var G__24970 = seq__24960_24965;
var G__24971 = chunk__24961_24966;
var G__24972 = count__24962_24967;
var G__24973 = (i__24963_24968 + 1);
seq__24960_24965 = G__24970;
chunk__24961_24966 = G__24971;
count__24962_24967 = G__24972;
i__24963_24968 = G__24973;
continue;
}
} else
{var temp__4092__auto___24974 = cljs.core.seq.call(null,seq__24960_24965);if(temp__4092__auto___24974)
{var seq__24960_24975__$1 = temp__4092__auto___24974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24960_24975__$1))
{var c__8552__auto___24976 = cljs.core.chunk_first.call(null,seq__24960_24975__$1);{
var G__24977 = cljs.core.chunk_rest.call(null,seq__24960_24975__$1);
var G__24978 = c__8552__auto___24976;
var G__24979 = cljs.core.count.call(null,c__8552__auto___24976);
var G__24980 = 0;
seq__24960_24965 = G__24977;
chunk__24961_24966 = G__24978;
count__24962_24967 = G__24979;
i__24963_24968 = G__24980;
continue;
}
} else
{var node_24981 = cljs.core.first.call(null,seq__24960_24975__$1);goog.dom.classes.set(node_24981,classes_24964__$1);
{
var G__24982 = cljs.core.next.call(null,seq__24960_24975__$1);
var G__24983 = null;
var G__24984 = 0;
var G__24985 = 0;
seq__24960_24965 = G__24982;
chunk__24961_24966 = G__24983;
count__24962_24967 = G__24984;
i__24963_24968 = G__24985;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24990_24994 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24991_24995 = null;var count__24992_24996 = 0;var i__24993_24997 = 0;while(true){
if((i__24993_24997 < count__24992_24996))
{var node_24998 = cljs.core._nth.call(null,chunk__24991_24995,i__24993_24997);goog.dom.setTextContent(node_24998,value);
{
var G__24999 = seq__24990_24994;
var G__25000 = chunk__24991_24995;
var G__25001 = count__24992_24996;
var G__25002 = (i__24993_24997 + 1);
seq__24990_24994 = G__24999;
chunk__24991_24995 = G__25000;
count__24992_24996 = G__25001;
i__24993_24997 = G__25002;
continue;
}
} else
{var temp__4092__auto___25003 = cljs.core.seq.call(null,seq__24990_24994);if(temp__4092__auto___25003)
{var seq__24990_25004__$1 = temp__4092__auto___25003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24990_25004__$1))
{var c__8552__auto___25005 = cljs.core.chunk_first.call(null,seq__24990_25004__$1);{
var G__25006 = cljs.core.chunk_rest.call(null,seq__24990_25004__$1);
var G__25007 = c__8552__auto___25005;
var G__25008 = cljs.core.count.call(null,c__8552__auto___25005);
var G__25009 = 0;
seq__24990_24994 = G__25006;
chunk__24991_24995 = G__25007;
count__24992_24996 = G__25008;
i__24993_24997 = G__25009;
continue;
}
} else
{var node_25010 = cljs.core.first.call(null,seq__24990_25004__$1);goog.dom.setTextContent(node_25010,value);
{
var G__25011 = cljs.core.next.call(null,seq__24990_25004__$1);
var G__25012 = null;
var G__25013 = 0;
var G__25014 = 0;
seq__24990_24994 = G__25011;
chunk__24991_24995 = G__25012;
count__24992_24996 = G__25013;
i__24993_24997 = G__25014;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25019_25023 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25020_25024 = null;var count__25021_25025 = 0;var i__25022_25026 = 0;while(true){
if((i__25022_25026 < count__25021_25025))
{var node_25027 = cljs.core._nth.call(null,chunk__25020_25024,i__25022_25026);goog.dom.forms.setValue(node_25027,value);
{
var G__25028 = seq__25019_25023;
var G__25029 = chunk__25020_25024;
var G__25030 = count__25021_25025;
var G__25031 = (i__25022_25026 + 1);
seq__25019_25023 = G__25028;
chunk__25020_25024 = G__25029;
count__25021_25025 = G__25030;
i__25022_25026 = G__25031;
continue;
}
} else
{var temp__4092__auto___25032 = cljs.core.seq.call(null,seq__25019_25023);if(temp__4092__auto___25032)
{var seq__25019_25033__$1 = temp__4092__auto___25032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25019_25033__$1))
{var c__8552__auto___25034 = cljs.core.chunk_first.call(null,seq__25019_25033__$1);{
var G__25035 = cljs.core.chunk_rest.call(null,seq__25019_25033__$1);
var G__25036 = c__8552__auto___25034;
var G__25037 = cljs.core.count.call(null,c__8552__auto___25034);
var G__25038 = 0;
seq__25019_25023 = G__25035;
chunk__25020_25024 = G__25036;
count__25021_25025 = G__25037;
i__25022_25026 = G__25038;
continue;
}
} else
{var node_25039 = cljs.core.first.call(null,seq__25019_25033__$1);goog.dom.forms.setValue(node_25039,value);
{
var G__25040 = cljs.core.next.call(null,seq__25019_25033__$1);
var G__25041 = null;
var G__25042 = 0;
var G__25043 = 0;
seq__25019_25023 = G__25040;
chunk__25020_25024 = G__25041;
count__25021_25025 = G__25042;
i__25022_25026 = G__25043;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__7816__auto__ = allows_inner_html_QMARK_;if(and__7816__auto__)
{var and__7816__auto____$1 = (function (){var or__7828__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__7816__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
}
})()))
{var value_25054 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25050_25055 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25051_25056 = null;var count__25052_25057 = 0;var i__25053_25058 = 0;while(true){
if((i__25053_25058 < count__25052_25057))
{var node_25059 = cljs.core._nth.call(null,chunk__25051_25056,i__25053_25058);node_25059.innerHTML = value_25054;
{
var G__25060 = seq__25050_25055;
var G__25061 = chunk__25051_25056;
var G__25062 = count__25052_25057;
var G__25063 = (i__25053_25058 + 1);
seq__25050_25055 = G__25060;
chunk__25051_25056 = G__25061;
count__25052_25057 = G__25062;
i__25053_25058 = G__25063;
continue;
}
} else
{var temp__4092__auto___25064 = cljs.core.seq.call(null,seq__25050_25055);if(temp__4092__auto___25064)
{var seq__25050_25065__$1 = temp__4092__auto___25064;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25050_25065__$1))
{var c__8552__auto___25066 = cljs.core.chunk_first.call(null,seq__25050_25065__$1);{
var G__25067 = cljs.core.chunk_rest.call(null,seq__25050_25065__$1);
var G__25068 = c__8552__auto___25066;
var G__25069 = cljs.core.count.call(null,c__8552__auto___25066);
var G__25070 = 0;
seq__25050_25055 = G__25067;
chunk__25051_25056 = G__25068;
count__25052_25057 = G__25069;
i__25053_25058 = G__25070;
continue;
}
} else
{var node_25071 = cljs.core.first.call(null,seq__25050_25065__$1);node_25071.innerHTML = value_25054;
{
var G__25072 = cljs.core.next.call(null,seq__25050_25065__$1);
var G__25073 = null;
var G__25074 = 0;
var G__25075 = 0;
seq__25050_25055 = G__25072;
chunk__25051_25056 = G__25073;
count__25052_25057 = G__25074;
i__25053_25058 = G__25075;
continue;
}
}
} else
{}
}
break;
}
}catch (e25049){if((e25049 instanceof Error))
{var e_25076 = e25049;domina.replace_children_BANG_.call(null,content,value_25054);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25049;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__7816__auto__ = bubble;if(cljs.core.truth_(and__7816__auto__))
{return (value == null);
} else
{return and__7816__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__7828__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25083_25087 = cljs.core.seq.call(null,children);var chunk__25084_25088 = null;var count__25085_25089 = 0;var i__25086_25090 = 0;while(true){
if((i__25086_25090 < count__25085_25089))
{var child_25091 = cljs.core._nth.call(null,chunk__25084_25088,i__25086_25090);frag.appendChild(child_25091);
{
var G__25092 = seq__25083_25087;
var G__25093 = chunk__25084_25088;
var G__25094 = count__25085_25089;
var G__25095 = (i__25086_25090 + 1);
seq__25083_25087 = G__25092;
chunk__25084_25088 = G__25093;
count__25085_25089 = G__25094;
i__25086_25090 = G__25095;
continue;
}
} else
{var temp__4092__auto___25096 = cljs.core.seq.call(null,seq__25083_25087);if(temp__4092__auto___25096)
{var seq__25083_25097__$1 = temp__4092__auto___25096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25083_25097__$1))
{var c__8552__auto___25098 = cljs.core.chunk_first.call(null,seq__25083_25097__$1);{
var G__25099 = cljs.core.chunk_rest.call(null,seq__25083_25097__$1);
var G__25100 = c__8552__auto___25098;
var G__25101 = cljs.core.count.call(null,c__8552__auto___25098);
var G__25102 = 0;
seq__25083_25087 = G__25099;
chunk__25084_25088 = G__25100;
count__25085_25089 = G__25101;
i__25086_25090 = G__25102;
continue;
}
} else
{var child_25103 = cljs.core.first.call(null,seq__25083_25097__$1);frag.appendChild(child_25103);
{
var G__25104 = cljs.core.next.call(null,seq__25083_25097__$1);
var G__25105 = null;
var G__25106 = 0;
var G__25107 = 0;
seq__25083_25087 = G__25104;
chunk__25084_25088 = G__25105;
count__25085_25089 = G__25106;
i__25086_25090 = G__25107;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__25077_SHARP_,p2__25078_SHARP_){return f.call(null,p1__25077_SHARP_,p2__25078_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__7816__auto__ = obj;if(cljs.core.truth_(and__7816__auto__))
{var and__7816__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__7816__auto____$1)
{return obj.length;
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
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
{if((function (){var G__25109 = list_thing;if(G__25109)
{var bit__8454__auto__ = (G__25109.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__25109.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25109.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25109);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25109);
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
{if((function (){var G__25110 = content;if(G__25110)
{var bit__8454__auto__ = (G__25110.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__25110.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25110.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25110);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25110);
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
{if((function (){var G__25111 = content;if(G__25111)
{var bit__8454__auto__ = (G__25111.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__25111.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25111.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25111);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25111);
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
