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
var opt_wrapper_406617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_406618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_406619 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_406618,table_section_wrapper_406618,opt_wrapper_406617,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_406619,table_section_wrapper_406618,cell_wrapper_406619,opt_wrapper_406617,table_section_wrapper_406618,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_406618]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8211__auto__ = div.firstChild;if(cljs.core.truth_(and__8211__auto__))
{return div.firstChild.childNodes;
} else
{return and__8211__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__406624 = cljs.core.seq.call(null,tbody);var chunk__406625 = null;var count__406626 = 0;var i__406627 = 0;while(true){
if((i__406627 < count__406626))
{var child = cljs.core._nth.call(null,chunk__406625,i__406627);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__406628 = seq__406624;
var G__406629 = chunk__406625;
var G__406630 = count__406626;
var G__406631 = (i__406627 + 1);
seq__406624 = G__406628;
chunk__406625 = G__406629;
count__406626 = G__406630;
i__406627 = G__406631;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__406624);if(temp__4092__auto__)
{var seq__406624__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406624__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__406624__$1);{
var G__406632 = cljs.core.chunk_rest.call(null,seq__406624__$1);
var G__406633 = c__8952__auto__;
var G__406634 = cljs.core.count.call(null,c__8952__auto__);
var G__406635 = 0;
seq__406624 = G__406632;
chunk__406625 = G__406633;
count__406626 = G__406634;
i__406627 = G__406635;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__406624__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__406636 = cljs.core.next.call(null,seq__406624__$1);
var G__406637 = null;
var G__406638 = 0;
var G__406639 = 0;
seq__406624 = G__406636;
chunk__406625 = G__406637;
count__406626 = G__406638;
i__406627 = G__406639;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__406641 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__406641,0,null);var start_wrap = cljs.core.nth.call(null,vec__406641,1,null);var end_wrap = cljs.core.nth.call(null,vec__406641,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__406642 = wrapper.lastChild;
var G__406643 = (level - 1);
wrapper = G__406642;
level = G__406643;
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
domina.DomContent = (function (){var obj406645 = {};return obj406645;
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
log_debug.cljs$lang$applyTo = (function (arglist__406646){
var mesg = cljs.core.seq(arglist__406646);
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
log.cljs$lang$applyTo = (function (arglist__406647){
var mesg = cljs.core.seq(arglist__406647);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__406648){
var contents = cljs.core.seq(arglist__406648);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__406649_SHARP_){return p1__406649_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__406650_SHARP_,p2__406651_SHARP_){return goog.dom.insertChildAt(p1__406650_SHARP_,p2__406651_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__406653_SHARP_,p2__406652_SHARP_){return goog.dom.insertSiblingBefore(p2__406652_SHARP_,p1__406653_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__406655_SHARP_,p2__406654_SHARP_){return goog.dom.insertSiblingAfter(p2__406654_SHARP_,p1__406655_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__406657_SHARP_,p2__406656_SHARP_){return goog.dom.replaceNode(p2__406656_SHARP_,p1__406657_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__406662_406666 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406663_406667 = null;var count__406664_406668 = 0;var i__406665_406669 = 0;while(true){
if((i__406665_406669 < count__406664_406668))
{var n_406670 = cljs.core._nth.call(null,chunk__406663_406667,i__406665_406669);goog.style.setStyle(n_406670,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__406671 = seq__406662_406666;
var G__406672 = chunk__406663_406667;
var G__406673 = count__406664_406668;
var G__406674 = (i__406665_406669 + 1);
seq__406662_406666 = G__406671;
chunk__406663_406667 = G__406672;
count__406664_406668 = G__406673;
i__406665_406669 = G__406674;
continue;
}
} else
{var temp__4092__auto___406675 = cljs.core.seq.call(null,seq__406662_406666);if(temp__4092__auto___406675)
{var seq__406662_406676__$1 = temp__4092__auto___406675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406662_406676__$1))
{var c__8952__auto___406677 = cljs.core.chunk_first.call(null,seq__406662_406676__$1);{
var G__406678 = cljs.core.chunk_rest.call(null,seq__406662_406676__$1);
var G__406679 = c__8952__auto___406677;
var G__406680 = cljs.core.count.call(null,c__8952__auto___406677);
var G__406681 = 0;
seq__406662_406666 = G__406678;
chunk__406663_406667 = G__406679;
count__406664_406668 = G__406680;
i__406665_406669 = G__406681;
continue;
}
} else
{var n_406682 = cljs.core.first.call(null,seq__406662_406676__$1);goog.style.setStyle(n_406682,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__406683 = cljs.core.next.call(null,seq__406662_406676__$1);
var G__406684 = null;
var G__406685 = 0;
var G__406686 = 0;
seq__406662_406666 = G__406683;
chunk__406663_406667 = G__406684;
count__406664_406668 = G__406685;
i__406665_406669 = G__406686;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__406687){
var content = cljs.core.first(arglist__406687);
arglist__406687 = cljs.core.next(arglist__406687);
var name = cljs.core.first(arglist__406687);
var value = cljs.core.rest(arglist__406687);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__406692_406696 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406693_406697 = null;var count__406694_406698 = 0;var i__406695_406699 = 0;while(true){
if((i__406695_406699 < count__406694_406698))
{var n_406700 = cljs.core._nth.call(null,chunk__406693_406697,i__406695_406699);n_406700.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__406701 = seq__406692_406696;
var G__406702 = chunk__406693_406697;
var G__406703 = count__406694_406698;
var G__406704 = (i__406695_406699 + 1);
seq__406692_406696 = G__406701;
chunk__406693_406697 = G__406702;
count__406694_406698 = G__406703;
i__406695_406699 = G__406704;
continue;
}
} else
{var temp__4092__auto___406705 = cljs.core.seq.call(null,seq__406692_406696);if(temp__4092__auto___406705)
{var seq__406692_406706__$1 = temp__4092__auto___406705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406692_406706__$1))
{var c__8952__auto___406707 = cljs.core.chunk_first.call(null,seq__406692_406706__$1);{
var G__406708 = cljs.core.chunk_rest.call(null,seq__406692_406706__$1);
var G__406709 = c__8952__auto___406707;
var G__406710 = cljs.core.count.call(null,c__8952__auto___406707);
var G__406711 = 0;
seq__406692_406696 = G__406708;
chunk__406693_406697 = G__406709;
count__406694_406698 = G__406710;
i__406695_406699 = G__406711;
continue;
}
} else
{var n_406712 = cljs.core.first.call(null,seq__406692_406706__$1);n_406712.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__406713 = cljs.core.next.call(null,seq__406692_406706__$1);
var G__406714 = null;
var G__406715 = 0;
var G__406716 = 0;
seq__406692_406696 = G__406713;
chunk__406693_406697 = G__406714;
count__406694_406698 = G__406715;
i__406695_406699 = G__406716;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__406717){
var content = cljs.core.first(arglist__406717);
arglist__406717 = cljs.core.next(arglist__406717);
var name = cljs.core.first(arglist__406717);
var value = cljs.core.rest(arglist__406717);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__406722_406726 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406723_406727 = null;var count__406724_406728 = 0;var i__406725_406729 = 0;while(true){
if((i__406725_406729 < count__406724_406728))
{var n_406730 = cljs.core._nth.call(null,chunk__406723_406727,i__406725_406729);n_406730.removeAttribute(cljs.core.name.call(null,name));
{
var G__406731 = seq__406722_406726;
var G__406732 = chunk__406723_406727;
var G__406733 = count__406724_406728;
var G__406734 = (i__406725_406729 + 1);
seq__406722_406726 = G__406731;
chunk__406723_406727 = G__406732;
count__406724_406728 = G__406733;
i__406725_406729 = G__406734;
continue;
}
} else
{var temp__4092__auto___406735 = cljs.core.seq.call(null,seq__406722_406726);if(temp__4092__auto___406735)
{var seq__406722_406736__$1 = temp__4092__auto___406735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406722_406736__$1))
{var c__8952__auto___406737 = cljs.core.chunk_first.call(null,seq__406722_406736__$1);{
var G__406738 = cljs.core.chunk_rest.call(null,seq__406722_406736__$1);
var G__406739 = c__8952__auto___406737;
var G__406740 = cljs.core.count.call(null,c__8952__auto___406737);
var G__406741 = 0;
seq__406722_406726 = G__406738;
chunk__406723_406727 = G__406739;
count__406724_406728 = G__406740;
i__406725_406729 = G__406741;
continue;
}
} else
{var n_406742 = cljs.core.first.call(null,seq__406722_406736__$1);n_406742.removeAttribute(cljs.core.name.call(null,name));
{
var G__406743 = cljs.core.next.call(null,seq__406722_406736__$1);
var G__406744 = null;
var G__406745 = 0;
var G__406746 = 0;
seq__406722_406726 = G__406743;
chunk__406723_406727 = G__406744;
count__406724_406728 = G__406745;
i__406725_406729 = G__406746;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__406748 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__406748,0,null);var v = cljs.core.nth.call(null,vec__406748,1,null);if(cljs.core.truth_((function (){var and__8211__auto__ = k;if(cljs.core.truth_(and__8211__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__406749_SHARP_){var attr = attrs__$1.item(p1__406749_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__406756_406762 = cljs.core.seq.call(null,styles);var chunk__406757_406763 = null;var count__406758_406764 = 0;var i__406759_406765 = 0;while(true){
if((i__406759_406765 < count__406758_406764))
{var vec__406760_406766 = cljs.core._nth.call(null,chunk__406757_406763,i__406759_406765);var name_406767 = cljs.core.nth.call(null,vec__406760_406766,0,null);var value_406768 = cljs.core.nth.call(null,vec__406760_406766,1,null);domina.set_style_BANG_.call(null,content,name_406767,value_406768);
{
var G__406769 = seq__406756_406762;
var G__406770 = chunk__406757_406763;
var G__406771 = count__406758_406764;
var G__406772 = (i__406759_406765 + 1);
seq__406756_406762 = G__406769;
chunk__406757_406763 = G__406770;
count__406758_406764 = G__406771;
i__406759_406765 = G__406772;
continue;
}
} else
{var temp__4092__auto___406773 = cljs.core.seq.call(null,seq__406756_406762);if(temp__4092__auto___406773)
{var seq__406756_406774__$1 = temp__4092__auto___406773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406756_406774__$1))
{var c__8952__auto___406775 = cljs.core.chunk_first.call(null,seq__406756_406774__$1);{
var G__406776 = cljs.core.chunk_rest.call(null,seq__406756_406774__$1);
var G__406777 = c__8952__auto___406775;
var G__406778 = cljs.core.count.call(null,c__8952__auto___406775);
var G__406779 = 0;
seq__406756_406762 = G__406776;
chunk__406757_406763 = G__406777;
count__406758_406764 = G__406778;
i__406759_406765 = G__406779;
continue;
}
} else
{var vec__406761_406780 = cljs.core.first.call(null,seq__406756_406774__$1);var name_406781 = cljs.core.nth.call(null,vec__406761_406780,0,null);var value_406782 = cljs.core.nth.call(null,vec__406761_406780,1,null);domina.set_style_BANG_.call(null,content,name_406781,value_406782);
{
var G__406783 = cljs.core.next.call(null,seq__406756_406774__$1);
var G__406784 = null;
var G__406785 = 0;
var G__406786 = 0;
seq__406756_406762 = G__406783;
chunk__406757_406763 = G__406784;
count__406758_406764 = G__406785;
i__406759_406765 = G__406786;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__406793_406799 = cljs.core.seq.call(null,attrs);var chunk__406794_406800 = null;var count__406795_406801 = 0;var i__406796_406802 = 0;while(true){
if((i__406796_406802 < count__406795_406801))
{var vec__406797_406803 = cljs.core._nth.call(null,chunk__406794_406800,i__406796_406802);var name_406804 = cljs.core.nth.call(null,vec__406797_406803,0,null);var value_406805 = cljs.core.nth.call(null,vec__406797_406803,1,null);domina.set_attr_BANG_.call(null,content,name_406804,value_406805);
{
var G__406806 = seq__406793_406799;
var G__406807 = chunk__406794_406800;
var G__406808 = count__406795_406801;
var G__406809 = (i__406796_406802 + 1);
seq__406793_406799 = G__406806;
chunk__406794_406800 = G__406807;
count__406795_406801 = G__406808;
i__406796_406802 = G__406809;
continue;
}
} else
{var temp__4092__auto___406810 = cljs.core.seq.call(null,seq__406793_406799);if(temp__4092__auto___406810)
{var seq__406793_406811__$1 = temp__4092__auto___406810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406793_406811__$1))
{var c__8952__auto___406812 = cljs.core.chunk_first.call(null,seq__406793_406811__$1);{
var G__406813 = cljs.core.chunk_rest.call(null,seq__406793_406811__$1);
var G__406814 = c__8952__auto___406812;
var G__406815 = cljs.core.count.call(null,c__8952__auto___406812);
var G__406816 = 0;
seq__406793_406799 = G__406813;
chunk__406794_406800 = G__406814;
count__406795_406801 = G__406815;
i__406796_406802 = G__406816;
continue;
}
} else
{var vec__406798_406817 = cljs.core.first.call(null,seq__406793_406811__$1);var name_406818 = cljs.core.nth.call(null,vec__406798_406817,0,null);var value_406819 = cljs.core.nth.call(null,vec__406798_406817,1,null);domina.set_attr_BANG_.call(null,content,name_406818,value_406819);
{
var G__406820 = cljs.core.next.call(null,seq__406793_406811__$1);
var G__406821 = null;
var G__406822 = 0;
var G__406823 = 0;
seq__406793_406799 = G__406820;
chunk__406794_406800 = G__406821;
count__406795_406801 = G__406822;
i__406796_406802 = G__406823;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__406828_406832 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406829_406833 = null;var count__406830_406834 = 0;var i__406831_406835 = 0;while(true){
if((i__406831_406835 < count__406830_406834))
{var node_406836 = cljs.core._nth.call(null,chunk__406829_406833,i__406831_406835);goog.dom.classes.add(node_406836,class$);
{
var G__406837 = seq__406828_406832;
var G__406838 = chunk__406829_406833;
var G__406839 = count__406830_406834;
var G__406840 = (i__406831_406835 + 1);
seq__406828_406832 = G__406837;
chunk__406829_406833 = G__406838;
count__406830_406834 = G__406839;
i__406831_406835 = G__406840;
continue;
}
} else
{var temp__4092__auto___406841 = cljs.core.seq.call(null,seq__406828_406832);if(temp__4092__auto___406841)
{var seq__406828_406842__$1 = temp__4092__auto___406841;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406828_406842__$1))
{var c__8952__auto___406843 = cljs.core.chunk_first.call(null,seq__406828_406842__$1);{
var G__406844 = cljs.core.chunk_rest.call(null,seq__406828_406842__$1);
var G__406845 = c__8952__auto___406843;
var G__406846 = cljs.core.count.call(null,c__8952__auto___406843);
var G__406847 = 0;
seq__406828_406832 = G__406844;
chunk__406829_406833 = G__406845;
count__406830_406834 = G__406846;
i__406831_406835 = G__406847;
continue;
}
} else
{var node_406848 = cljs.core.first.call(null,seq__406828_406842__$1);goog.dom.classes.add(node_406848,class$);
{
var G__406849 = cljs.core.next.call(null,seq__406828_406842__$1);
var G__406850 = null;
var G__406851 = 0;
var G__406852 = 0;
seq__406828_406832 = G__406849;
chunk__406829_406833 = G__406850;
count__406830_406834 = G__406851;
i__406831_406835 = G__406852;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__406857_406861 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406858_406862 = null;var count__406859_406863 = 0;var i__406860_406864 = 0;while(true){
if((i__406860_406864 < count__406859_406863))
{var node_406865 = cljs.core._nth.call(null,chunk__406858_406862,i__406860_406864);goog.dom.classes.remove(node_406865,class$);
{
var G__406866 = seq__406857_406861;
var G__406867 = chunk__406858_406862;
var G__406868 = count__406859_406863;
var G__406869 = (i__406860_406864 + 1);
seq__406857_406861 = G__406866;
chunk__406858_406862 = G__406867;
count__406859_406863 = G__406868;
i__406860_406864 = G__406869;
continue;
}
} else
{var temp__4092__auto___406870 = cljs.core.seq.call(null,seq__406857_406861);if(temp__4092__auto___406870)
{var seq__406857_406871__$1 = temp__4092__auto___406870;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406857_406871__$1))
{var c__8952__auto___406872 = cljs.core.chunk_first.call(null,seq__406857_406871__$1);{
var G__406873 = cljs.core.chunk_rest.call(null,seq__406857_406871__$1);
var G__406874 = c__8952__auto___406872;
var G__406875 = cljs.core.count.call(null,c__8952__auto___406872);
var G__406876 = 0;
seq__406857_406861 = G__406873;
chunk__406858_406862 = G__406874;
count__406859_406863 = G__406875;
i__406860_406864 = G__406876;
continue;
}
} else
{var node_406877 = cljs.core.first.call(null,seq__406857_406871__$1);goog.dom.classes.remove(node_406877,class$);
{
var G__406878 = cljs.core.next.call(null,seq__406857_406871__$1);
var G__406879 = null;
var G__406880 = 0;
var G__406881 = 0;
seq__406857_406861 = G__406878;
chunk__406858_406862 = G__406879;
count__406859_406863 = G__406880;
i__406860_406864 = G__406881;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__406886_406890 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406887_406891 = null;var count__406888_406892 = 0;var i__406889_406893 = 0;while(true){
if((i__406889_406893 < count__406888_406892))
{var node_406894 = cljs.core._nth.call(null,chunk__406887_406891,i__406889_406893);goog.dom.classes.toggle(node_406894,class$);
{
var G__406895 = seq__406886_406890;
var G__406896 = chunk__406887_406891;
var G__406897 = count__406888_406892;
var G__406898 = (i__406889_406893 + 1);
seq__406886_406890 = G__406895;
chunk__406887_406891 = G__406896;
count__406888_406892 = G__406897;
i__406889_406893 = G__406898;
continue;
}
} else
{var temp__4092__auto___406899 = cljs.core.seq.call(null,seq__406886_406890);if(temp__4092__auto___406899)
{var seq__406886_406900__$1 = temp__4092__auto___406899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406886_406900__$1))
{var c__8952__auto___406901 = cljs.core.chunk_first.call(null,seq__406886_406900__$1);{
var G__406902 = cljs.core.chunk_rest.call(null,seq__406886_406900__$1);
var G__406903 = c__8952__auto___406901;
var G__406904 = cljs.core.count.call(null,c__8952__auto___406901);
var G__406905 = 0;
seq__406886_406890 = G__406902;
chunk__406887_406891 = G__406903;
count__406888_406892 = G__406904;
i__406889_406893 = G__406905;
continue;
}
} else
{var node_406906 = cljs.core.first.call(null,seq__406886_406900__$1);goog.dom.classes.toggle(node_406906,class$);
{
var G__406907 = cljs.core.next.call(null,seq__406886_406900__$1);
var G__406908 = null;
var G__406909 = 0;
var G__406910 = 0;
seq__406886_406890 = G__406907;
chunk__406887_406891 = G__406908;
count__406888_406892 = G__406909;
i__406889_406893 = G__406910;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_406919__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__406915_406920 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406916_406921 = null;var count__406917_406922 = 0;var i__406918_406923 = 0;while(true){
if((i__406918_406923 < count__406917_406922))
{var node_406924 = cljs.core._nth.call(null,chunk__406916_406921,i__406918_406923);goog.dom.classes.set(node_406924,classes_406919__$1);
{
var G__406925 = seq__406915_406920;
var G__406926 = chunk__406916_406921;
var G__406927 = count__406917_406922;
var G__406928 = (i__406918_406923 + 1);
seq__406915_406920 = G__406925;
chunk__406916_406921 = G__406926;
count__406917_406922 = G__406927;
i__406918_406923 = G__406928;
continue;
}
} else
{var temp__4092__auto___406929 = cljs.core.seq.call(null,seq__406915_406920);if(temp__4092__auto___406929)
{var seq__406915_406930__$1 = temp__4092__auto___406929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406915_406930__$1))
{var c__8952__auto___406931 = cljs.core.chunk_first.call(null,seq__406915_406930__$1);{
var G__406932 = cljs.core.chunk_rest.call(null,seq__406915_406930__$1);
var G__406933 = c__8952__auto___406931;
var G__406934 = cljs.core.count.call(null,c__8952__auto___406931);
var G__406935 = 0;
seq__406915_406920 = G__406932;
chunk__406916_406921 = G__406933;
count__406917_406922 = G__406934;
i__406918_406923 = G__406935;
continue;
}
} else
{var node_406936 = cljs.core.first.call(null,seq__406915_406930__$1);goog.dom.classes.set(node_406936,classes_406919__$1);
{
var G__406937 = cljs.core.next.call(null,seq__406915_406930__$1);
var G__406938 = null;
var G__406939 = 0;
var G__406940 = 0;
seq__406915_406920 = G__406937;
chunk__406916_406921 = G__406938;
count__406917_406922 = G__406939;
i__406918_406923 = G__406940;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__406945_406949 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406946_406950 = null;var count__406947_406951 = 0;var i__406948_406952 = 0;while(true){
if((i__406948_406952 < count__406947_406951))
{var node_406953 = cljs.core._nth.call(null,chunk__406946_406950,i__406948_406952);goog.dom.setTextContent(node_406953,value);
{
var G__406954 = seq__406945_406949;
var G__406955 = chunk__406946_406950;
var G__406956 = count__406947_406951;
var G__406957 = (i__406948_406952 + 1);
seq__406945_406949 = G__406954;
chunk__406946_406950 = G__406955;
count__406947_406951 = G__406956;
i__406948_406952 = G__406957;
continue;
}
} else
{var temp__4092__auto___406958 = cljs.core.seq.call(null,seq__406945_406949);if(temp__4092__auto___406958)
{var seq__406945_406959__$1 = temp__4092__auto___406958;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406945_406959__$1))
{var c__8952__auto___406960 = cljs.core.chunk_first.call(null,seq__406945_406959__$1);{
var G__406961 = cljs.core.chunk_rest.call(null,seq__406945_406959__$1);
var G__406962 = c__8952__auto___406960;
var G__406963 = cljs.core.count.call(null,c__8952__auto___406960);
var G__406964 = 0;
seq__406945_406949 = G__406961;
chunk__406946_406950 = G__406962;
count__406947_406951 = G__406963;
i__406948_406952 = G__406964;
continue;
}
} else
{var node_406965 = cljs.core.first.call(null,seq__406945_406959__$1);goog.dom.setTextContent(node_406965,value);
{
var G__406966 = cljs.core.next.call(null,seq__406945_406959__$1);
var G__406967 = null;
var G__406968 = 0;
var G__406969 = 0;
seq__406945_406949 = G__406966;
chunk__406946_406950 = G__406967;
count__406947_406951 = G__406968;
i__406948_406952 = G__406969;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__406974_406978 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__406975_406979 = null;var count__406976_406980 = 0;var i__406977_406981 = 0;while(true){
if((i__406977_406981 < count__406976_406980))
{var node_406982 = cljs.core._nth.call(null,chunk__406975_406979,i__406977_406981);goog.dom.forms.setValue(node_406982,value);
{
var G__406983 = seq__406974_406978;
var G__406984 = chunk__406975_406979;
var G__406985 = count__406976_406980;
var G__406986 = (i__406977_406981 + 1);
seq__406974_406978 = G__406983;
chunk__406975_406979 = G__406984;
count__406976_406980 = G__406985;
i__406977_406981 = G__406986;
continue;
}
} else
{var temp__4092__auto___406987 = cljs.core.seq.call(null,seq__406974_406978);if(temp__4092__auto___406987)
{var seq__406974_406988__$1 = temp__4092__auto___406987;if(cljs.core.chunked_seq_QMARK_.call(null,seq__406974_406988__$1))
{var c__8952__auto___406989 = cljs.core.chunk_first.call(null,seq__406974_406988__$1);{
var G__406990 = cljs.core.chunk_rest.call(null,seq__406974_406988__$1);
var G__406991 = c__8952__auto___406989;
var G__406992 = cljs.core.count.call(null,c__8952__auto___406989);
var G__406993 = 0;
seq__406974_406978 = G__406990;
chunk__406975_406979 = G__406991;
count__406976_406980 = G__406992;
i__406977_406981 = G__406993;
continue;
}
} else
{var node_406994 = cljs.core.first.call(null,seq__406974_406988__$1);goog.dom.forms.setValue(node_406994,value);
{
var G__406995 = cljs.core.next.call(null,seq__406974_406988__$1);
var G__406996 = null;
var G__406997 = 0;
var G__406998 = 0;
seq__406974_406978 = G__406995;
chunk__406975_406979 = G__406996;
count__406976_406980 = G__406997;
i__406977_406981 = G__406998;
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
{var value_407009 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__407005_407010 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__407006_407011 = null;var count__407007_407012 = 0;var i__407008_407013 = 0;while(true){
if((i__407008_407013 < count__407007_407012))
{var node_407014 = cljs.core._nth.call(null,chunk__407006_407011,i__407008_407013);node_407014.innerHTML = value_407009;
{
var G__407015 = seq__407005_407010;
var G__407016 = chunk__407006_407011;
var G__407017 = count__407007_407012;
var G__407018 = (i__407008_407013 + 1);
seq__407005_407010 = G__407015;
chunk__407006_407011 = G__407016;
count__407007_407012 = G__407017;
i__407008_407013 = G__407018;
continue;
}
} else
{var temp__4092__auto___407019 = cljs.core.seq.call(null,seq__407005_407010);if(temp__4092__auto___407019)
{var seq__407005_407020__$1 = temp__4092__auto___407019;if(cljs.core.chunked_seq_QMARK_.call(null,seq__407005_407020__$1))
{var c__8952__auto___407021 = cljs.core.chunk_first.call(null,seq__407005_407020__$1);{
var G__407022 = cljs.core.chunk_rest.call(null,seq__407005_407020__$1);
var G__407023 = c__8952__auto___407021;
var G__407024 = cljs.core.count.call(null,c__8952__auto___407021);
var G__407025 = 0;
seq__407005_407010 = G__407022;
chunk__407006_407011 = G__407023;
count__407007_407012 = G__407024;
i__407008_407013 = G__407025;
continue;
}
} else
{var node_407026 = cljs.core.first.call(null,seq__407005_407020__$1);node_407026.innerHTML = value_407009;
{
var G__407027 = cljs.core.next.call(null,seq__407005_407020__$1);
var G__407028 = null;
var G__407029 = 0;
var G__407030 = 0;
seq__407005_407010 = G__407027;
chunk__407006_407011 = G__407028;
count__407007_407012 = G__407029;
i__407008_407013 = G__407030;
continue;
}
}
} else
{}
}
break;
}
}catch (e407004){if((e407004 instanceof Error))
{var e_407031 = e407004;domina.replace_children_BANG_.call(null,content,value_407009);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e407004;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__407038_407042 = cljs.core.seq.call(null,children);var chunk__407039_407043 = null;var count__407040_407044 = 0;var i__407041_407045 = 0;while(true){
if((i__407041_407045 < count__407040_407044))
{var child_407046 = cljs.core._nth.call(null,chunk__407039_407043,i__407041_407045);frag.appendChild(child_407046);
{
var G__407047 = seq__407038_407042;
var G__407048 = chunk__407039_407043;
var G__407049 = count__407040_407044;
var G__407050 = (i__407041_407045 + 1);
seq__407038_407042 = G__407047;
chunk__407039_407043 = G__407048;
count__407040_407044 = G__407049;
i__407041_407045 = G__407050;
continue;
}
} else
{var temp__4092__auto___407051 = cljs.core.seq.call(null,seq__407038_407042);if(temp__4092__auto___407051)
{var seq__407038_407052__$1 = temp__4092__auto___407051;if(cljs.core.chunked_seq_QMARK_.call(null,seq__407038_407052__$1))
{var c__8952__auto___407053 = cljs.core.chunk_first.call(null,seq__407038_407052__$1);{
var G__407054 = cljs.core.chunk_rest.call(null,seq__407038_407052__$1);
var G__407055 = c__8952__auto___407053;
var G__407056 = cljs.core.count.call(null,c__8952__auto___407053);
var G__407057 = 0;
seq__407038_407042 = G__407054;
chunk__407039_407043 = G__407055;
count__407040_407044 = G__407056;
i__407041_407045 = G__407057;
continue;
}
} else
{var child_407058 = cljs.core.first.call(null,seq__407038_407052__$1);frag.appendChild(child_407058);
{
var G__407059 = cljs.core.next.call(null,seq__407038_407052__$1);
var G__407060 = null;
var G__407061 = 0;
var G__407062 = 0;
seq__407038_407042 = G__407059;
chunk__407039_407043 = G__407060;
count__407040_407044 = G__407061;
i__407041_407045 = G__407062;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__407032_SHARP_,p2__407033_SHARP_){return f.call(null,p1__407032_SHARP_,p2__407033_SHARP_);
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
{if((function (){var G__407064 = list_thing;if(G__407064)
{var bit__8854__auto__ = (G__407064.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__407064.cljs$core$ISeqable$))
{return true;
} else
{if((!G__407064.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407064);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407064);
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
{if((function (){var G__407065 = content;if(G__407065)
{var bit__8854__auto__ = (G__407065.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__407065.cljs$core$ISeqable$))
{return true;
} else
{if((!G__407065.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407065);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407065);
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
{if((function (){var G__407066 = content;if(G__407066)
{var bit__8854__auto__ = (G__407066.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__407066.cljs$core$ISeqable$))
{return true;
} else
{if((!G__407066.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407066);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__407066);
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