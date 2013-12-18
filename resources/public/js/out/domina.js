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
var opt_wrapper_30573 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30574 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_30575 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_30574,table_section_wrapper_30574,opt_wrapper_30573,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_30575,table_section_wrapper_30574,cell_wrapper_30575,opt_wrapper_30573,table_section_wrapper_30574,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_30574]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8233__auto__ = div.firstChild;if(cljs.core.truth_(and__8233__auto__))
{return div.firstChild.childNodes;
} else
{return and__8233__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30580 = cljs.core.seq.call(null,tbody);var chunk__30581 = null;var count__30582 = 0;var i__30583 = 0;while(true){
if((i__30583 < count__30582))
{var child = cljs.core._nth.call(null,chunk__30581,i__30583);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30584 = seq__30580;
var G__30585 = chunk__30581;
var G__30586 = count__30582;
var G__30587 = (i__30583 + 1);
seq__30580 = G__30584;
chunk__30581 = G__30585;
count__30582 = G__30586;
i__30583 = G__30587;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30580);if(temp__4092__auto__)
{var seq__30580__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30580__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__30580__$1);{
var G__30588 = cljs.core.chunk_rest.call(null,seq__30580__$1);
var G__30589 = c__8974__auto__;
var G__30590 = cljs.core.count.call(null,c__8974__auto__);
var G__30591 = 0;
seq__30580 = G__30588;
chunk__30581 = G__30589;
count__30582 = G__30590;
i__30583 = G__30591;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30580__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30592 = cljs.core.next.call(null,seq__30580__$1);
var G__30593 = null;
var G__30594 = 0;
var G__30595 = 0;
seq__30580 = G__30592;
chunk__30581 = G__30593;
count__30582 = G__30594;
i__30583 = G__30595;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__30597 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30597,0,null);var start_wrap = cljs.core.nth.call(null,vec__30597,1,null);var end_wrap = cljs.core.nth.call(null,vec__30597,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__30598 = wrapper.lastChild;
var G__30599 = (level - 1);
wrapper = G__30598;
level = G__30599;
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
if(cljs.core.truth_((function (){var and__8233__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__8233__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__8233__auto__;
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
domina.DomContent = (function (){var obj30601 = {};return obj30601;
})();
domina.nodes = (function nodes(content){if((function (){var and__8233__auto__ = content;if(and__8233__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__8233__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8853__auto__ = (((content == null))?null:content);return (function (){var or__8245__auto__ = (domina.nodes[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (domina.nodes["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__8233__auto__ = nodeseq;if(and__8233__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__8233__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8853__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__8245__auto__ = (domina.single_node[goog.typeOf(x__8853__auto__)]);if(or__8245__auto__)
{return or__8245__auto__;
} else
{var or__8245__auto____$1 = (domina.single_node["_"]);if(or__8245__auto____$1)
{return or__8245__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__8233__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__8233__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8233__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__30602){
var mesg = cljs.core.seq(arglist__30602);
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
log.cljs$lang$applyTo = (function (arglist__30603){
var mesg = cljs.core.seq(arglist__30603);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__30604){
var contents = cljs.core.seq(arglist__30604);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30605_SHARP_){return p1__30605_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30606_SHARP_,p2__30607_SHARP_){return goog.dom.insertChildAt(p1__30606_SHARP_,p2__30607_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30609_SHARP_,p2__30608_SHARP_){return goog.dom.insertSiblingBefore(p2__30608_SHARP_,p1__30609_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30611_SHARP_,p2__30610_SHARP_){return goog.dom.insertSiblingAfter(p2__30610_SHARP_,p1__30611_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30613_SHARP_,p2__30612_SHARP_){return goog.dom.replaceNode(p2__30612_SHARP_,p1__30613_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__30618_30622 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30619_30623 = null;var count__30620_30624 = 0;var i__30621_30625 = 0;while(true){
if((i__30621_30625 < count__30620_30624))
{var n_30626 = cljs.core._nth.call(null,chunk__30619_30623,i__30621_30625);goog.style.setStyle(n_30626,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30627 = seq__30618_30622;
var G__30628 = chunk__30619_30623;
var G__30629 = count__30620_30624;
var G__30630 = (i__30621_30625 + 1);
seq__30618_30622 = G__30627;
chunk__30619_30623 = G__30628;
count__30620_30624 = G__30629;
i__30621_30625 = G__30630;
continue;
}
} else
{var temp__4092__auto___30631 = cljs.core.seq.call(null,seq__30618_30622);if(temp__4092__auto___30631)
{var seq__30618_30632__$1 = temp__4092__auto___30631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30618_30632__$1))
{var c__8974__auto___30633 = cljs.core.chunk_first.call(null,seq__30618_30632__$1);{
var G__30634 = cljs.core.chunk_rest.call(null,seq__30618_30632__$1);
var G__30635 = c__8974__auto___30633;
var G__30636 = cljs.core.count.call(null,c__8974__auto___30633);
var G__30637 = 0;
seq__30618_30622 = G__30634;
chunk__30619_30623 = G__30635;
count__30620_30624 = G__30636;
i__30621_30625 = G__30637;
continue;
}
} else
{var n_30638 = cljs.core.first.call(null,seq__30618_30632__$1);goog.style.setStyle(n_30638,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30639 = cljs.core.next.call(null,seq__30618_30632__$1);
var G__30640 = null;
var G__30641 = 0;
var G__30642 = 0;
seq__30618_30622 = G__30639;
chunk__30619_30623 = G__30640;
count__30620_30624 = G__30641;
i__30621_30625 = G__30642;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30643){
var content = cljs.core.first(arglist__30643);
arglist__30643 = cljs.core.next(arglist__30643);
var name = cljs.core.first(arglist__30643);
var value = cljs.core.rest(arglist__30643);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__30648_30652 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30649_30653 = null;var count__30650_30654 = 0;var i__30651_30655 = 0;while(true){
if((i__30651_30655 < count__30650_30654))
{var n_30656 = cljs.core._nth.call(null,chunk__30649_30653,i__30651_30655);n_30656.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30657 = seq__30648_30652;
var G__30658 = chunk__30649_30653;
var G__30659 = count__30650_30654;
var G__30660 = (i__30651_30655 + 1);
seq__30648_30652 = G__30657;
chunk__30649_30653 = G__30658;
count__30650_30654 = G__30659;
i__30651_30655 = G__30660;
continue;
}
} else
{var temp__4092__auto___30661 = cljs.core.seq.call(null,seq__30648_30652);if(temp__4092__auto___30661)
{var seq__30648_30662__$1 = temp__4092__auto___30661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30648_30662__$1))
{var c__8974__auto___30663 = cljs.core.chunk_first.call(null,seq__30648_30662__$1);{
var G__30664 = cljs.core.chunk_rest.call(null,seq__30648_30662__$1);
var G__30665 = c__8974__auto___30663;
var G__30666 = cljs.core.count.call(null,c__8974__auto___30663);
var G__30667 = 0;
seq__30648_30652 = G__30664;
chunk__30649_30653 = G__30665;
count__30650_30654 = G__30666;
i__30651_30655 = G__30667;
continue;
}
} else
{var n_30668 = cljs.core.first.call(null,seq__30648_30662__$1);n_30668.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30669 = cljs.core.next.call(null,seq__30648_30662__$1);
var G__30670 = null;
var G__30671 = 0;
var G__30672 = 0;
seq__30648_30652 = G__30669;
chunk__30649_30653 = G__30670;
count__30650_30654 = G__30671;
i__30651_30655 = G__30672;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30673){
var content = cljs.core.first(arglist__30673);
arglist__30673 = cljs.core.next(arglist__30673);
var name = cljs.core.first(arglist__30673);
var value = cljs.core.rest(arglist__30673);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30678_30682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30679_30683 = null;var count__30680_30684 = 0;var i__30681_30685 = 0;while(true){
if((i__30681_30685 < count__30680_30684))
{var n_30686 = cljs.core._nth.call(null,chunk__30679_30683,i__30681_30685);n_30686.removeAttribute(cljs.core.name.call(null,name));
{
var G__30687 = seq__30678_30682;
var G__30688 = chunk__30679_30683;
var G__30689 = count__30680_30684;
var G__30690 = (i__30681_30685 + 1);
seq__30678_30682 = G__30687;
chunk__30679_30683 = G__30688;
count__30680_30684 = G__30689;
i__30681_30685 = G__30690;
continue;
}
} else
{var temp__4092__auto___30691 = cljs.core.seq.call(null,seq__30678_30682);if(temp__4092__auto___30691)
{var seq__30678_30692__$1 = temp__4092__auto___30691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30678_30692__$1))
{var c__8974__auto___30693 = cljs.core.chunk_first.call(null,seq__30678_30692__$1);{
var G__30694 = cljs.core.chunk_rest.call(null,seq__30678_30692__$1);
var G__30695 = c__8974__auto___30693;
var G__30696 = cljs.core.count.call(null,c__8974__auto___30693);
var G__30697 = 0;
seq__30678_30682 = G__30694;
chunk__30679_30683 = G__30695;
count__30680_30684 = G__30696;
i__30681_30685 = G__30697;
continue;
}
} else
{var n_30698 = cljs.core.first.call(null,seq__30678_30692__$1);n_30698.removeAttribute(cljs.core.name.call(null,name));
{
var G__30699 = cljs.core.next.call(null,seq__30678_30692__$1);
var G__30700 = null;
var G__30701 = 0;
var G__30702 = 0;
seq__30678_30682 = G__30699;
chunk__30679_30683 = G__30700;
count__30680_30684 = G__30701;
i__30681_30685 = G__30702;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30704 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30704,0,null);var v = cljs.core.nth.call(null,vec__30704,1,null);if(cljs.core.truth_((function (){var and__8233__auto__ = k;if(cljs.core.truth_(and__8233__auto__))
{return v;
} else
{return and__8233__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__30705_SHARP_){var attr = attrs__$1.item(p1__30705_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30712_30718 = cljs.core.seq.call(null,styles);var chunk__30713_30719 = null;var count__30714_30720 = 0;var i__30715_30721 = 0;while(true){
if((i__30715_30721 < count__30714_30720))
{var vec__30716_30722 = cljs.core._nth.call(null,chunk__30713_30719,i__30715_30721);var name_30723 = cljs.core.nth.call(null,vec__30716_30722,0,null);var value_30724 = cljs.core.nth.call(null,vec__30716_30722,1,null);domina.set_style_BANG_.call(null,content,name_30723,value_30724);
{
var G__30725 = seq__30712_30718;
var G__30726 = chunk__30713_30719;
var G__30727 = count__30714_30720;
var G__30728 = (i__30715_30721 + 1);
seq__30712_30718 = G__30725;
chunk__30713_30719 = G__30726;
count__30714_30720 = G__30727;
i__30715_30721 = G__30728;
continue;
}
} else
{var temp__4092__auto___30729 = cljs.core.seq.call(null,seq__30712_30718);if(temp__4092__auto___30729)
{var seq__30712_30730__$1 = temp__4092__auto___30729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30712_30730__$1))
{var c__8974__auto___30731 = cljs.core.chunk_first.call(null,seq__30712_30730__$1);{
var G__30732 = cljs.core.chunk_rest.call(null,seq__30712_30730__$1);
var G__30733 = c__8974__auto___30731;
var G__30734 = cljs.core.count.call(null,c__8974__auto___30731);
var G__30735 = 0;
seq__30712_30718 = G__30732;
chunk__30713_30719 = G__30733;
count__30714_30720 = G__30734;
i__30715_30721 = G__30735;
continue;
}
} else
{var vec__30717_30736 = cljs.core.first.call(null,seq__30712_30730__$1);var name_30737 = cljs.core.nth.call(null,vec__30717_30736,0,null);var value_30738 = cljs.core.nth.call(null,vec__30717_30736,1,null);domina.set_style_BANG_.call(null,content,name_30737,value_30738);
{
var G__30739 = cljs.core.next.call(null,seq__30712_30730__$1);
var G__30740 = null;
var G__30741 = 0;
var G__30742 = 0;
seq__30712_30718 = G__30739;
chunk__30713_30719 = G__30740;
count__30714_30720 = G__30741;
i__30715_30721 = G__30742;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30749_30755 = cljs.core.seq.call(null,attrs);var chunk__30750_30756 = null;var count__30751_30757 = 0;var i__30752_30758 = 0;while(true){
if((i__30752_30758 < count__30751_30757))
{var vec__30753_30759 = cljs.core._nth.call(null,chunk__30750_30756,i__30752_30758);var name_30760 = cljs.core.nth.call(null,vec__30753_30759,0,null);var value_30761 = cljs.core.nth.call(null,vec__30753_30759,1,null);domina.set_attr_BANG_.call(null,content,name_30760,value_30761);
{
var G__30762 = seq__30749_30755;
var G__30763 = chunk__30750_30756;
var G__30764 = count__30751_30757;
var G__30765 = (i__30752_30758 + 1);
seq__30749_30755 = G__30762;
chunk__30750_30756 = G__30763;
count__30751_30757 = G__30764;
i__30752_30758 = G__30765;
continue;
}
} else
{var temp__4092__auto___30766 = cljs.core.seq.call(null,seq__30749_30755);if(temp__4092__auto___30766)
{var seq__30749_30767__$1 = temp__4092__auto___30766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30749_30767__$1))
{var c__8974__auto___30768 = cljs.core.chunk_first.call(null,seq__30749_30767__$1);{
var G__30769 = cljs.core.chunk_rest.call(null,seq__30749_30767__$1);
var G__30770 = c__8974__auto___30768;
var G__30771 = cljs.core.count.call(null,c__8974__auto___30768);
var G__30772 = 0;
seq__30749_30755 = G__30769;
chunk__30750_30756 = G__30770;
count__30751_30757 = G__30771;
i__30752_30758 = G__30772;
continue;
}
} else
{var vec__30754_30773 = cljs.core.first.call(null,seq__30749_30767__$1);var name_30774 = cljs.core.nth.call(null,vec__30754_30773,0,null);var value_30775 = cljs.core.nth.call(null,vec__30754_30773,1,null);domina.set_attr_BANG_.call(null,content,name_30774,value_30775);
{
var G__30776 = cljs.core.next.call(null,seq__30749_30767__$1);
var G__30777 = null;
var G__30778 = 0;
var G__30779 = 0;
seq__30749_30755 = G__30776;
chunk__30750_30756 = G__30777;
count__30751_30757 = G__30778;
i__30752_30758 = G__30779;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30784_30788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30785_30789 = null;var count__30786_30790 = 0;var i__30787_30791 = 0;while(true){
if((i__30787_30791 < count__30786_30790))
{var node_30792 = cljs.core._nth.call(null,chunk__30785_30789,i__30787_30791);goog.dom.classes.add(node_30792,class$);
{
var G__30793 = seq__30784_30788;
var G__30794 = chunk__30785_30789;
var G__30795 = count__30786_30790;
var G__30796 = (i__30787_30791 + 1);
seq__30784_30788 = G__30793;
chunk__30785_30789 = G__30794;
count__30786_30790 = G__30795;
i__30787_30791 = G__30796;
continue;
}
} else
{var temp__4092__auto___30797 = cljs.core.seq.call(null,seq__30784_30788);if(temp__4092__auto___30797)
{var seq__30784_30798__$1 = temp__4092__auto___30797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30784_30798__$1))
{var c__8974__auto___30799 = cljs.core.chunk_first.call(null,seq__30784_30798__$1);{
var G__30800 = cljs.core.chunk_rest.call(null,seq__30784_30798__$1);
var G__30801 = c__8974__auto___30799;
var G__30802 = cljs.core.count.call(null,c__8974__auto___30799);
var G__30803 = 0;
seq__30784_30788 = G__30800;
chunk__30785_30789 = G__30801;
count__30786_30790 = G__30802;
i__30787_30791 = G__30803;
continue;
}
} else
{var node_30804 = cljs.core.first.call(null,seq__30784_30798__$1);goog.dom.classes.add(node_30804,class$);
{
var G__30805 = cljs.core.next.call(null,seq__30784_30798__$1);
var G__30806 = null;
var G__30807 = 0;
var G__30808 = 0;
seq__30784_30788 = G__30805;
chunk__30785_30789 = G__30806;
count__30786_30790 = G__30807;
i__30787_30791 = G__30808;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30813_30817 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30814_30818 = null;var count__30815_30819 = 0;var i__30816_30820 = 0;while(true){
if((i__30816_30820 < count__30815_30819))
{var node_30821 = cljs.core._nth.call(null,chunk__30814_30818,i__30816_30820);goog.dom.classes.remove(node_30821,class$);
{
var G__30822 = seq__30813_30817;
var G__30823 = chunk__30814_30818;
var G__30824 = count__30815_30819;
var G__30825 = (i__30816_30820 + 1);
seq__30813_30817 = G__30822;
chunk__30814_30818 = G__30823;
count__30815_30819 = G__30824;
i__30816_30820 = G__30825;
continue;
}
} else
{var temp__4092__auto___30826 = cljs.core.seq.call(null,seq__30813_30817);if(temp__4092__auto___30826)
{var seq__30813_30827__$1 = temp__4092__auto___30826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30813_30827__$1))
{var c__8974__auto___30828 = cljs.core.chunk_first.call(null,seq__30813_30827__$1);{
var G__30829 = cljs.core.chunk_rest.call(null,seq__30813_30827__$1);
var G__30830 = c__8974__auto___30828;
var G__30831 = cljs.core.count.call(null,c__8974__auto___30828);
var G__30832 = 0;
seq__30813_30817 = G__30829;
chunk__30814_30818 = G__30830;
count__30815_30819 = G__30831;
i__30816_30820 = G__30832;
continue;
}
} else
{var node_30833 = cljs.core.first.call(null,seq__30813_30827__$1);goog.dom.classes.remove(node_30833,class$);
{
var G__30834 = cljs.core.next.call(null,seq__30813_30827__$1);
var G__30835 = null;
var G__30836 = 0;
var G__30837 = 0;
seq__30813_30817 = G__30834;
chunk__30814_30818 = G__30835;
count__30815_30819 = G__30836;
i__30816_30820 = G__30837;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30842_30846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30843_30847 = null;var count__30844_30848 = 0;var i__30845_30849 = 0;while(true){
if((i__30845_30849 < count__30844_30848))
{var node_30850 = cljs.core._nth.call(null,chunk__30843_30847,i__30845_30849);goog.dom.classes.toggle(node_30850,class$);
{
var G__30851 = seq__30842_30846;
var G__30852 = chunk__30843_30847;
var G__30853 = count__30844_30848;
var G__30854 = (i__30845_30849 + 1);
seq__30842_30846 = G__30851;
chunk__30843_30847 = G__30852;
count__30844_30848 = G__30853;
i__30845_30849 = G__30854;
continue;
}
} else
{var temp__4092__auto___30855 = cljs.core.seq.call(null,seq__30842_30846);if(temp__4092__auto___30855)
{var seq__30842_30856__$1 = temp__4092__auto___30855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30842_30856__$1))
{var c__8974__auto___30857 = cljs.core.chunk_first.call(null,seq__30842_30856__$1);{
var G__30858 = cljs.core.chunk_rest.call(null,seq__30842_30856__$1);
var G__30859 = c__8974__auto___30857;
var G__30860 = cljs.core.count.call(null,c__8974__auto___30857);
var G__30861 = 0;
seq__30842_30846 = G__30858;
chunk__30843_30847 = G__30859;
count__30844_30848 = G__30860;
i__30845_30849 = G__30861;
continue;
}
} else
{var node_30862 = cljs.core.first.call(null,seq__30842_30856__$1);goog.dom.classes.toggle(node_30862,class$);
{
var G__30863 = cljs.core.next.call(null,seq__30842_30856__$1);
var G__30864 = null;
var G__30865 = 0;
var G__30866 = 0;
seq__30842_30846 = G__30863;
chunk__30843_30847 = G__30864;
count__30844_30848 = G__30865;
i__30845_30849 = G__30866;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30875__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30871_30876 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30872_30877 = null;var count__30873_30878 = 0;var i__30874_30879 = 0;while(true){
if((i__30874_30879 < count__30873_30878))
{var node_30880 = cljs.core._nth.call(null,chunk__30872_30877,i__30874_30879);goog.dom.classes.set(node_30880,classes_30875__$1);
{
var G__30881 = seq__30871_30876;
var G__30882 = chunk__30872_30877;
var G__30883 = count__30873_30878;
var G__30884 = (i__30874_30879 + 1);
seq__30871_30876 = G__30881;
chunk__30872_30877 = G__30882;
count__30873_30878 = G__30883;
i__30874_30879 = G__30884;
continue;
}
} else
{var temp__4092__auto___30885 = cljs.core.seq.call(null,seq__30871_30876);if(temp__4092__auto___30885)
{var seq__30871_30886__$1 = temp__4092__auto___30885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30871_30886__$1))
{var c__8974__auto___30887 = cljs.core.chunk_first.call(null,seq__30871_30886__$1);{
var G__30888 = cljs.core.chunk_rest.call(null,seq__30871_30886__$1);
var G__30889 = c__8974__auto___30887;
var G__30890 = cljs.core.count.call(null,c__8974__auto___30887);
var G__30891 = 0;
seq__30871_30876 = G__30888;
chunk__30872_30877 = G__30889;
count__30873_30878 = G__30890;
i__30874_30879 = G__30891;
continue;
}
} else
{var node_30892 = cljs.core.first.call(null,seq__30871_30886__$1);goog.dom.classes.set(node_30892,classes_30875__$1);
{
var G__30893 = cljs.core.next.call(null,seq__30871_30886__$1);
var G__30894 = null;
var G__30895 = 0;
var G__30896 = 0;
seq__30871_30876 = G__30893;
chunk__30872_30877 = G__30894;
count__30873_30878 = G__30895;
i__30874_30879 = G__30896;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30901_30905 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30902_30906 = null;var count__30903_30907 = 0;var i__30904_30908 = 0;while(true){
if((i__30904_30908 < count__30903_30907))
{var node_30909 = cljs.core._nth.call(null,chunk__30902_30906,i__30904_30908);goog.dom.setTextContent(node_30909,value);
{
var G__30910 = seq__30901_30905;
var G__30911 = chunk__30902_30906;
var G__30912 = count__30903_30907;
var G__30913 = (i__30904_30908 + 1);
seq__30901_30905 = G__30910;
chunk__30902_30906 = G__30911;
count__30903_30907 = G__30912;
i__30904_30908 = G__30913;
continue;
}
} else
{var temp__4092__auto___30914 = cljs.core.seq.call(null,seq__30901_30905);if(temp__4092__auto___30914)
{var seq__30901_30915__$1 = temp__4092__auto___30914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30901_30915__$1))
{var c__8974__auto___30916 = cljs.core.chunk_first.call(null,seq__30901_30915__$1);{
var G__30917 = cljs.core.chunk_rest.call(null,seq__30901_30915__$1);
var G__30918 = c__8974__auto___30916;
var G__30919 = cljs.core.count.call(null,c__8974__auto___30916);
var G__30920 = 0;
seq__30901_30905 = G__30917;
chunk__30902_30906 = G__30918;
count__30903_30907 = G__30919;
i__30904_30908 = G__30920;
continue;
}
} else
{var node_30921 = cljs.core.first.call(null,seq__30901_30915__$1);goog.dom.setTextContent(node_30921,value);
{
var G__30922 = cljs.core.next.call(null,seq__30901_30915__$1);
var G__30923 = null;
var G__30924 = 0;
var G__30925 = 0;
seq__30901_30905 = G__30922;
chunk__30902_30906 = G__30923;
count__30903_30907 = G__30924;
i__30904_30908 = G__30925;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30930_30934 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30931_30935 = null;var count__30932_30936 = 0;var i__30933_30937 = 0;while(true){
if((i__30933_30937 < count__30932_30936))
{var node_30938 = cljs.core._nth.call(null,chunk__30931_30935,i__30933_30937);goog.dom.forms.setValue(node_30938,value);
{
var G__30939 = seq__30930_30934;
var G__30940 = chunk__30931_30935;
var G__30941 = count__30932_30936;
var G__30942 = (i__30933_30937 + 1);
seq__30930_30934 = G__30939;
chunk__30931_30935 = G__30940;
count__30932_30936 = G__30941;
i__30933_30937 = G__30942;
continue;
}
} else
{var temp__4092__auto___30943 = cljs.core.seq.call(null,seq__30930_30934);if(temp__4092__auto___30943)
{var seq__30930_30944__$1 = temp__4092__auto___30943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30930_30944__$1))
{var c__8974__auto___30945 = cljs.core.chunk_first.call(null,seq__30930_30944__$1);{
var G__30946 = cljs.core.chunk_rest.call(null,seq__30930_30944__$1);
var G__30947 = c__8974__auto___30945;
var G__30948 = cljs.core.count.call(null,c__8974__auto___30945);
var G__30949 = 0;
seq__30930_30934 = G__30946;
chunk__30931_30935 = G__30947;
count__30932_30936 = G__30948;
i__30933_30937 = G__30949;
continue;
}
} else
{var node_30950 = cljs.core.first.call(null,seq__30930_30944__$1);goog.dom.forms.setValue(node_30950,value);
{
var G__30951 = cljs.core.next.call(null,seq__30930_30944__$1);
var G__30952 = null;
var G__30953 = 0;
var G__30954 = 0;
seq__30930_30934 = G__30951;
chunk__30931_30935 = G__30952;
count__30932_30936 = G__30953;
i__30933_30937 = G__30954;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__8233__auto__ = allows_inner_html_QMARK_;if(and__8233__auto__)
{var and__8233__auto____$1 = (function (){var or__8245__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__8233__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__8233__auto____$1;
}
} else
{return and__8233__auto__;
}
})()))
{var value_30965 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30961_30966 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30962_30967 = null;var count__30963_30968 = 0;var i__30964_30969 = 0;while(true){
if((i__30964_30969 < count__30963_30968))
{var node_30970 = cljs.core._nth.call(null,chunk__30962_30967,i__30964_30969);node_30970.innerHTML = value_30965;
{
var G__30971 = seq__30961_30966;
var G__30972 = chunk__30962_30967;
var G__30973 = count__30963_30968;
var G__30974 = (i__30964_30969 + 1);
seq__30961_30966 = G__30971;
chunk__30962_30967 = G__30972;
count__30963_30968 = G__30973;
i__30964_30969 = G__30974;
continue;
}
} else
{var temp__4092__auto___30975 = cljs.core.seq.call(null,seq__30961_30966);if(temp__4092__auto___30975)
{var seq__30961_30976__$1 = temp__4092__auto___30975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30961_30976__$1))
{var c__8974__auto___30977 = cljs.core.chunk_first.call(null,seq__30961_30976__$1);{
var G__30978 = cljs.core.chunk_rest.call(null,seq__30961_30976__$1);
var G__30979 = c__8974__auto___30977;
var G__30980 = cljs.core.count.call(null,c__8974__auto___30977);
var G__30981 = 0;
seq__30961_30966 = G__30978;
chunk__30962_30967 = G__30979;
count__30963_30968 = G__30980;
i__30964_30969 = G__30981;
continue;
}
} else
{var node_30982 = cljs.core.first.call(null,seq__30961_30976__$1);node_30982.innerHTML = value_30965;
{
var G__30983 = cljs.core.next.call(null,seq__30961_30976__$1);
var G__30984 = null;
var G__30985 = 0;
var G__30986 = 0;
seq__30961_30966 = G__30983;
chunk__30962_30967 = G__30984;
count__30963_30968 = G__30985;
i__30964_30969 = G__30986;
continue;
}
}
} else
{}
}
break;
}
}catch (e30960){if((e30960 instanceof Error))
{var e_30987 = e30960;domina.replace_children_BANG_.call(null,content,value_30965);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30960;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__8233__auto__ = bubble;if(cljs.core.truth_(and__8233__auto__))
{return (value == null);
} else
{return and__8233__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__8245__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__8245__auto__))
{return or__8245__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30994_30998 = cljs.core.seq.call(null,children);var chunk__30995_30999 = null;var count__30996_31000 = 0;var i__30997_31001 = 0;while(true){
if((i__30997_31001 < count__30996_31000))
{var child_31002 = cljs.core._nth.call(null,chunk__30995_30999,i__30997_31001);frag.appendChild(child_31002);
{
var G__31003 = seq__30994_30998;
var G__31004 = chunk__30995_30999;
var G__31005 = count__30996_31000;
var G__31006 = (i__30997_31001 + 1);
seq__30994_30998 = G__31003;
chunk__30995_30999 = G__31004;
count__30996_31000 = G__31005;
i__30997_31001 = G__31006;
continue;
}
} else
{var temp__4092__auto___31007 = cljs.core.seq.call(null,seq__30994_30998);if(temp__4092__auto___31007)
{var seq__30994_31008__$1 = temp__4092__auto___31007;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30994_31008__$1))
{var c__8974__auto___31009 = cljs.core.chunk_first.call(null,seq__30994_31008__$1);{
var G__31010 = cljs.core.chunk_rest.call(null,seq__30994_31008__$1);
var G__31011 = c__8974__auto___31009;
var G__31012 = cljs.core.count.call(null,c__8974__auto___31009);
var G__31013 = 0;
seq__30994_30998 = G__31010;
chunk__30995_30999 = G__31011;
count__30996_31000 = G__31012;
i__30997_31001 = G__31013;
continue;
}
} else
{var child_31014 = cljs.core.first.call(null,seq__30994_31008__$1);frag.appendChild(child_31014);
{
var G__31015 = cljs.core.next.call(null,seq__30994_31008__$1);
var G__31016 = null;
var G__31017 = 0;
var G__31018 = 0;
seq__30994_30998 = G__31015;
chunk__30995_30999 = G__31016;
count__30996_31000 = G__31017;
i__30997_31001 = G__31018;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30988_SHARP_,p2__30989_SHARP_){return f.call(null,p1__30988_SHARP_,p2__30989_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__8233__auto__ = obj;if(cljs.core.truth_(and__8233__auto__))
{var and__8233__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__8233__auto____$1)
{return obj.length;
} else
{return and__8233__auto____$1;
}
} else
{return and__8233__auto__;
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
{if((function (){var G__31020 = list_thing;if(G__31020)
{var bit__8876__auto__ = (G__31020.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__31020.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31020.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31020);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31020);
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
{if((function (){var G__31021 = content;if(G__31021)
{var bit__8876__auto__ = (G__31021.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__31021.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31021.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31021);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31021);
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
{if((function (){var G__31022 = content;if(G__31022)
{var bit__8876__auto__ = (G__31022.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__31022.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31022.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31022);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31022);
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