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
var opt_wrapper_91480 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_91481 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_91482 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_91481,table_section_wrapper_91481,opt_wrapper_91480,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_91482,table_section_wrapper_91481,cell_wrapper_91482,opt_wrapper_91480,table_section_wrapper_91481,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_91481]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13813__auto__ = div.firstChild;if(cljs.core.truth_(and__13813__auto__))
{return div.firstChild.childNodes;
} else
{return and__13813__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__91487 = cljs.core.seq.call(null,tbody);var chunk__91488 = null;var count__91489 = 0;var i__91490 = 0;while(true){
if((i__91490 < count__91489))
{var child = cljs.core._nth.call(null,chunk__91488,i__91490);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__91491 = seq__91487;
var G__91492 = chunk__91488;
var G__91493 = count__91489;
var G__91494 = (i__91490 + 1);
seq__91487 = G__91491;
chunk__91488 = G__91492;
count__91489 = G__91493;
i__91490 = G__91494;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__91487);if(temp__4092__auto__)
{var seq__91487__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91487__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__91487__$1);{
var G__91495 = cljs.core.chunk_rest.call(null,seq__91487__$1);
var G__91496 = c__14549__auto__;
var G__91497 = cljs.core.count.call(null,c__14549__auto__);
var G__91498 = 0;
seq__91487 = G__91495;
chunk__91488 = G__91496;
count__91489 = G__91497;
i__91490 = G__91498;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__91487__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__91499 = cljs.core.next.call(null,seq__91487__$1);
var G__91500 = null;
var G__91501 = 0;
var G__91502 = 0;
seq__91487 = G__91499;
chunk__91488 = G__91500;
count__91489 = G__91501;
i__91490 = G__91502;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__91504 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__91504,0,null);var start_wrap = cljs.core.nth.call(null,vec__91504,1,null);var end_wrap = cljs.core.nth.call(null,vec__91504,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__91505 = wrapper.lastChild;
var G__91506 = (level - 1);
wrapper = G__91505;
level = G__91506;
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
if(cljs.core.truth_((function (){var and__13813__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13813__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13813__auto__;
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
domina.DomContent = (function (){var obj91508 = {};return obj91508;
})();
domina.nodes = (function nodes(content){if((function (){var and__13813__auto__ = content;if(and__13813__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13813__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14428__auto__ = (((content == null))?null:content);return (function (){var or__13825__auto__ = (domina.nodes[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (domina.nodes["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13813__auto__ = nodeseq;if(and__13813__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13813__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14428__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13825__auto__ = (domina.single_node[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (domina.single_node["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13813__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13813__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__91509){
var mesg = cljs.core.seq(arglist__91509);
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
log.cljs$lang$applyTo = (function (arglist__91510){
var mesg = cljs.core.seq(arglist__91510);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__91511){
var contents = cljs.core.seq(arglist__91511);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__91512_SHARP_){return p1__91512_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__91513_SHARP_,p2__91514_SHARP_){return goog.dom.insertChildAt(p1__91513_SHARP_,p2__91514_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__91516_SHARP_,p2__91515_SHARP_){return goog.dom.insertSiblingBefore(p2__91515_SHARP_,p1__91516_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__91518_SHARP_,p2__91517_SHARP_){return goog.dom.insertSiblingAfter(p2__91517_SHARP_,p1__91518_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__91520_SHARP_,p2__91519_SHARP_){return goog.dom.replaceNode(p2__91519_SHARP_,p1__91520_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__91525_91529 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91526_91530 = null;var count__91527_91531 = 0;var i__91528_91532 = 0;while(true){
if((i__91528_91532 < count__91527_91531))
{var n_91533 = cljs.core._nth.call(null,chunk__91526_91530,i__91528_91532);goog.style.setStyle(n_91533,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__91534 = seq__91525_91529;
var G__91535 = chunk__91526_91530;
var G__91536 = count__91527_91531;
var G__91537 = (i__91528_91532 + 1);
seq__91525_91529 = G__91534;
chunk__91526_91530 = G__91535;
count__91527_91531 = G__91536;
i__91528_91532 = G__91537;
continue;
}
} else
{var temp__4092__auto___91538 = cljs.core.seq.call(null,seq__91525_91529);if(temp__4092__auto___91538)
{var seq__91525_91539__$1 = temp__4092__auto___91538;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91525_91539__$1))
{var c__14549__auto___91540 = cljs.core.chunk_first.call(null,seq__91525_91539__$1);{
var G__91541 = cljs.core.chunk_rest.call(null,seq__91525_91539__$1);
var G__91542 = c__14549__auto___91540;
var G__91543 = cljs.core.count.call(null,c__14549__auto___91540);
var G__91544 = 0;
seq__91525_91529 = G__91541;
chunk__91526_91530 = G__91542;
count__91527_91531 = G__91543;
i__91528_91532 = G__91544;
continue;
}
} else
{var n_91545 = cljs.core.first.call(null,seq__91525_91539__$1);goog.style.setStyle(n_91545,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__91546 = cljs.core.next.call(null,seq__91525_91539__$1);
var G__91547 = null;
var G__91548 = 0;
var G__91549 = 0;
seq__91525_91529 = G__91546;
chunk__91526_91530 = G__91547;
count__91527_91531 = G__91548;
i__91528_91532 = G__91549;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__91550){
var content = cljs.core.first(arglist__91550);
arglist__91550 = cljs.core.next(arglist__91550);
var name = cljs.core.first(arglist__91550);
var value = cljs.core.rest(arglist__91550);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__91555_91559 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91556_91560 = null;var count__91557_91561 = 0;var i__91558_91562 = 0;while(true){
if((i__91558_91562 < count__91557_91561))
{var n_91563 = cljs.core._nth.call(null,chunk__91556_91560,i__91558_91562);n_91563.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__91564 = seq__91555_91559;
var G__91565 = chunk__91556_91560;
var G__91566 = count__91557_91561;
var G__91567 = (i__91558_91562 + 1);
seq__91555_91559 = G__91564;
chunk__91556_91560 = G__91565;
count__91557_91561 = G__91566;
i__91558_91562 = G__91567;
continue;
}
} else
{var temp__4092__auto___91568 = cljs.core.seq.call(null,seq__91555_91559);if(temp__4092__auto___91568)
{var seq__91555_91569__$1 = temp__4092__auto___91568;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91555_91569__$1))
{var c__14549__auto___91570 = cljs.core.chunk_first.call(null,seq__91555_91569__$1);{
var G__91571 = cljs.core.chunk_rest.call(null,seq__91555_91569__$1);
var G__91572 = c__14549__auto___91570;
var G__91573 = cljs.core.count.call(null,c__14549__auto___91570);
var G__91574 = 0;
seq__91555_91559 = G__91571;
chunk__91556_91560 = G__91572;
count__91557_91561 = G__91573;
i__91558_91562 = G__91574;
continue;
}
} else
{var n_91575 = cljs.core.first.call(null,seq__91555_91569__$1);n_91575.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__91576 = cljs.core.next.call(null,seq__91555_91569__$1);
var G__91577 = null;
var G__91578 = 0;
var G__91579 = 0;
seq__91555_91559 = G__91576;
chunk__91556_91560 = G__91577;
count__91557_91561 = G__91578;
i__91558_91562 = G__91579;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__91580){
var content = cljs.core.first(arglist__91580);
arglist__91580 = cljs.core.next(arglist__91580);
var name = cljs.core.first(arglist__91580);
var value = cljs.core.rest(arglist__91580);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__91585_91589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91586_91590 = null;var count__91587_91591 = 0;var i__91588_91592 = 0;while(true){
if((i__91588_91592 < count__91587_91591))
{var n_91593 = cljs.core._nth.call(null,chunk__91586_91590,i__91588_91592);n_91593.removeAttribute(cljs.core.name.call(null,name));
{
var G__91594 = seq__91585_91589;
var G__91595 = chunk__91586_91590;
var G__91596 = count__91587_91591;
var G__91597 = (i__91588_91592 + 1);
seq__91585_91589 = G__91594;
chunk__91586_91590 = G__91595;
count__91587_91591 = G__91596;
i__91588_91592 = G__91597;
continue;
}
} else
{var temp__4092__auto___91598 = cljs.core.seq.call(null,seq__91585_91589);if(temp__4092__auto___91598)
{var seq__91585_91599__$1 = temp__4092__auto___91598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91585_91599__$1))
{var c__14549__auto___91600 = cljs.core.chunk_first.call(null,seq__91585_91599__$1);{
var G__91601 = cljs.core.chunk_rest.call(null,seq__91585_91599__$1);
var G__91602 = c__14549__auto___91600;
var G__91603 = cljs.core.count.call(null,c__14549__auto___91600);
var G__91604 = 0;
seq__91585_91589 = G__91601;
chunk__91586_91590 = G__91602;
count__91587_91591 = G__91603;
i__91588_91592 = G__91604;
continue;
}
} else
{var n_91605 = cljs.core.first.call(null,seq__91585_91599__$1);n_91605.removeAttribute(cljs.core.name.call(null,name));
{
var G__91606 = cljs.core.next.call(null,seq__91585_91599__$1);
var G__91607 = null;
var G__91608 = 0;
var G__91609 = 0;
seq__91585_91589 = G__91606;
chunk__91586_91590 = G__91607;
count__91587_91591 = G__91608;
i__91588_91592 = G__91609;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__91611 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__91611,0,null);var v = cljs.core.nth.call(null,vec__91611,1,null);if(cljs.core.truth_((function (){var and__13813__auto__ = k;if(cljs.core.truth_(and__13813__auto__))
{return v;
} else
{return and__13813__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__91612_SHARP_){var attr = attrs__$1.item(p1__91612_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__91619_91625 = cljs.core.seq.call(null,styles);var chunk__91620_91626 = null;var count__91621_91627 = 0;var i__91622_91628 = 0;while(true){
if((i__91622_91628 < count__91621_91627))
{var vec__91623_91629 = cljs.core._nth.call(null,chunk__91620_91626,i__91622_91628);var name_91630 = cljs.core.nth.call(null,vec__91623_91629,0,null);var value_91631 = cljs.core.nth.call(null,vec__91623_91629,1,null);domina.set_style_BANG_.call(null,content,name_91630,value_91631);
{
var G__91632 = seq__91619_91625;
var G__91633 = chunk__91620_91626;
var G__91634 = count__91621_91627;
var G__91635 = (i__91622_91628 + 1);
seq__91619_91625 = G__91632;
chunk__91620_91626 = G__91633;
count__91621_91627 = G__91634;
i__91622_91628 = G__91635;
continue;
}
} else
{var temp__4092__auto___91636 = cljs.core.seq.call(null,seq__91619_91625);if(temp__4092__auto___91636)
{var seq__91619_91637__$1 = temp__4092__auto___91636;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91619_91637__$1))
{var c__14549__auto___91638 = cljs.core.chunk_first.call(null,seq__91619_91637__$1);{
var G__91639 = cljs.core.chunk_rest.call(null,seq__91619_91637__$1);
var G__91640 = c__14549__auto___91638;
var G__91641 = cljs.core.count.call(null,c__14549__auto___91638);
var G__91642 = 0;
seq__91619_91625 = G__91639;
chunk__91620_91626 = G__91640;
count__91621_91627 = G__91641;
i__91622_91628 = G__91642;
continue;
}
} else
{var vec__91624_91643 = cljs.core.first.call(null,seq__91619_91637__$1);var name_91644 = cljs.core.nth.call(null,vec__91624_91643,0,null);var value_91645 = cljs.core.nth.call(null,vec__91624_91643,1,null);domina.set_style_BANG_.call(null,content,name_91644,value_91645);
{
var G__91646 = cljs.core.next.call(null,seq__91619_91637__$1);
var G__91647 = null;
var G__91648 = 0;
var G__91649 = 0;
seq__91619_91625 = G__91646;
chunk__91620_91626 = G__91647;
count__91621_91627 = G__91648;
i__91622_91628 = G__91649;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__91656_91662 = cljs.core.seq.call(null,attrs);var chunk__91657_91663 = null;var count__91658_91664 = 0;var i__91659_91665 = 0;while(true){
if((i__91659_91665 < count__91658_91664))
{var vec__91660_91666 = cljs.core._nth.call(null,chunk__91657_91663,i__91659_91665);var name_91667 = cljs.core.nth.call(null,vec__91660_91666,0,null);var value_91668 = cljs.core.nth.call(null,vec__91660_91666,1,null);domina.set_attr_BANG_.call(null,content,name_91667,value_91668);
{
var G__91669 = seq__91656_91662;
var G__91670 = chunk__91657_91663;
var G__91671 = count__91658_91664;
var G__91672 = (i__91659_91665 + 1);
seq__91656_91662 = G__91669;
chunk__91657_91663 = G__91670;
count__91658_91664 = G__91671;
i__91659_91665 = G__91672;
continue;
}
} else
{var temp__4092__auto___91673 = cljs.core.seq.call(null,seq__91656_91662);if(temp__4092__auto___91673)
{var seq__91656_91674__$1 = temp__4092__auto___91673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91656_91674__$1))
{var c__14549__auto___91675 = cljs.core.chunk_first.call(null,seq__91656_91674__$1);{
var G__91676 = cljs.core.chunk_rest.call(null,seq__91656_91674__$1);
var G__91677 = c__14549__auto___91675;
var G__91678 = cljs.core.count.call(null,c__14549__auto___91675);
var G__91679 = 0;
seq__91656_91662 = G__91676;
chunk__91657_91663 = G__91677;
count__91658_91664 = G__91678;
i__91659_91665 = G__91679;
continue;
}
} else
{var vec__91661_91680 = cljs.core.first.call(null,seq__91656_91674__$1);var name_91681 = cljs.core.nth.call(null,vec__91661_91680,0,null);var value_91682 = cljs.core.nth.call(null,vec__91661_91680,1,null);domina.set_attr_BANG_.call(null,content,name_91681,value_91682);
{
var G__91683 = cljs.core.next.call(null,seq__91656_91674__$1);
var G__91684 = null;
var G__91685 = 0;
var G__91686 = 0;
seq__91656_91662 = G__91683;
chunk__91657_91663 = G__91684;
count__91658_91664 = G__91685;
i__91659_91665 = G__91686;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__91691_91695 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91692_91696 = null;var count__91693_91697 = 0;var i__91694_91698 = 0;while(true){
if((i__91694_91698 < count__91693_91697))
{var node_91699 = cljs.core._nth.call(null,chunk__91692_91696,i__91694_91698);goog.dom.classes.add(node_91699,class$);
{
var G__91700 = seq__91691_91695;
var G__91701 = chunk__91692_91696;
var G__91702 = count__91693_91697;
var G__91703 = (i__91694_91698 + 1);
seq__91691_91695 = G__91700;
chunk__91692_91696 = G__91701;
count__91693_91697 = G__91702;
i__91694_91698 = G__91703;
continue;
}
} else
{var temp__4092__auto___91704 = cljs.core.seq.call(null,seq__91691_91695);if(temp__4092__auto___91704)
{var seq__91691_91705__$1 = temp__4092__auto___91704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91691_91705__$1))
{var c__14549__auto___91706 = cljs.core.chunk_first.call(null,seq__91691_91705__$1);{
var G__91707 = cljs.core.chunk_rest.call(null,seq__91691_91705__$1);
var G__91708 = c__14549__auto___91706;
var G__91709 = cljs.core.count.call(null,c__14549__auto___91706);
var G__91710 = 0;
seq__91691_91695 = G__91707;
chunk__91692_91696 = G__91708;
count__91693_91697 = G__91709;
i__91694_91698 = G__91710;
continue;
}
} else
{var node_91711 = cljs.core.first.call(null,seq__91691_91705__$1);goog.dom.classes.add(node_91711,class$);
{
var G__91712 = cljs.core.next.call(null,seq__91691_91705__$1);
var G__91713 = null;
var G__91714 = 0;
var G__91715 = 0;
seq__91691_91695 = G__91712;
chunk__91692_91696 = G__91713;
count__91693_91697 = G__91714;
i__91694_91698 = G__91715;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__91720_91724 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91721_91725 = null;var count__91722_91726 = 0;var i__91723_91727 = 0;while(true){
if((i__91723_91727 < count__91722_91726))
{var node_91728 = cljs.core._nth.call(null,chunk__91721_91725,i__91723_91727);goog.dom.classes.remove(node_91728,class$);
{
var G__91729 = seq__91720_91724;
var G__91730 = chunk__91721_91725;
var G__91731 = count__91722_91726;
var G__91732 = (i__91723_91727 + 1);
seq__91720_91724 = G__91729;
chunk__91721_91725 = G__91730;
count__91722_91726 = G__91731;
i__91723_91727 = G__91732;
continue;
}
} else
{var temp__4092__auto___91733 = cljs.core.seq.call(null,seq__91720_91724);if(temp__4092__auto___91733)
{var seq__91720_91734__$1 = temp__4092__auto___91733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91720_91734__$1))
{var c__14549__auto___91735 = cljs.core.chunk_first.call(null,seq__91720_91734__$1);{
var G__91736 = cljs.core.chunk_rest.call(null,seq__91720_91734__$1);
var G__91737 = c__14549__auto___91735;
var G__91738 = cljs.core.count.call(null,c__14549__auto___91735);
var G__91739 = 0;
seq__91720_91724 = G__91736;
chunk__91721_91725 = G__91737;
count__91722_91726 = G__91738;
i__91723_91727 = G__91739;
continue;
}
} else
{var node_91740 = cljs.core.first.call(null,seq__91720_91734__$1);goog.dom.classes.remove(node_91740,class$);
{
var G__91741 = cljs.core.next.call(null,seq__91720_91734__$1);
var G__91742 = null;
var G__91743 = 0;
var G__91744 = 0;
seq__91720_91724 = G__91741;
chunk__91721_91725 = G__91742;
count__91722_91726 = G__91743;
i__91723_91727 = G__91744;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__91749_91753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91750_91754 = null;var count__91751_91755 = 0;var i__91752_91756 = 0;while(true){
if((i__91752_91756 < count__91751_91755))
{var node_91757 = cljs.core._nth.call(null,chunk__91750_91754,i__91752_91756);goog.dom.classes.toggle(node_91757,class$);
{
var G__91758 = seq__91749_91753;
var G__91759 = chunk__91750_91754;
var G__91760 = count__91751_91755;
var G__91761 = (i__91752_91756 + 1);
seq__91749_91753 = G__91758;
chunk__91750_91754 = G__91759;
count__91751_91755 = G__91760;
i__91752_91756 = G__91761;
continue;
}
} else
{var temp__4092__auto___91762 = cljs.core.seq.call(null,seq__91749_91753);if(temp__4092__auto___91762)
{var seq__91749_91763__$1 = temp__4092__auto___91762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91749_91763__$1))
{var c__14549__auto___91764 = cljs.core.chunk_first.call(null,seq__91749_91763__$1);{
var G__91765 = cljs.core.chunk_rest.call(null,seq__91749_91763__$1);
var G__91766 = c__14549__auto___91764;
var G__91767 = cljs.core.count.call(null,c__14549__auto___91764);
var G__91768 = 0;
seq__91749_91753 = G__91765;
chunk__91750_91754 = G__91766;
count__91751_91755 = G__91767;
i__91752_91756 = G__91768;
continue;
}
} else
{var node_91769 = cljs.core.first.call(null,seq__91749_91763__$1);goog.dom.classes.toggle(node_91769,class$);
{
var G__91770 = cljs.core.next.call(null,seq__91749_91763__$1);
var G__91771 = null;
var G__91772 = 0;
var G__91773 = 0;
seq__91749_91753 = G__91770;
chunk__91750_91754 = G__91771;
count__91751_91755 = G__91772;
i__91752_91756 = G__91773;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_91782__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__91778_91783 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91779_91784 = null;var count__91780_91785 = 0;var i__91781_91786 = 0;while(true){
if((i__91781_91786 < count__91780_91785))
{var node_91787 = cljs.core._nth.call(null,chunk__91779_91784,i__91781_91786);goog.dom.classes.set(node_91787,classes_91782__$1);
{
var G__91788 = seq__91778_91783;
var G__91789 = chunk__91779_91784;
var G__91790 = count__91780_91785;
var G__91791 = (i__91781_91786 + 1);
seq__91778_91783 = G__91788;
chunk__91779_91784 = G__91789;
count__91780_91785 = G__91790;
i__91781_91786 = G__91791;
continue;
}
} else
{var temp__4092__auto___91792 = cljs.core.seq.call(null,seq__91778_91783);if(temp__4092__auto___91792)
{var seq__91778_91793__$1 = temp__4092__auto___91792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91778_91793__$1))
{var c__14549__auto___91794 = cljs.core.chunk_first.call(null,seq__91778_91793__$1);{
var G__91795 = cljs.core.chunk_rest.call(null,seq__91778_91793__$1);
var G__91796 = c__14549__auto___91794;
var G__91797 = cljs.core.count.call(null,c__14549__auto___91794);
var G__91798 = 0;
seq__91778_91783 = G__91795;
chunk__91779_91784 = G__91796;
count__91780_91785 = G__91797;
i__91781_91786 = G__91798;
continue;
}
} else
{var node_91799 = cljs.core.first.call(null,seq__91778_91793__$1);goog.dom.classes.set(node_91799,classes_91782__$1);
{
var G__91800 = cljs.core.next.call(null,seq__91778_91793__$1);
var G__91801 = null;
var G__91802 = 0;
var G__91803 = 0;
seq__91778_91783 = G__91800;
chunk__91779_91784 = G__91801;
count__91780_91785 = G__91802;
i__91781_91786 = G__91803;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__91808_91812 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91809_91813 = null;var count__91810_91814 = 0;var i__91811_91815 = 0;while(true){
if((i__91811_91815 < count__91810_91814))
{var node_91816 = cljs.core._nth.call(null,chunk__91809_91813,i__91811_91815);goog.dom.setTextContent(node_91816,value);
{
var G__91817 = seq__91808_91812;
var G__91818 = chunk__91809_91813;
var G__91819 = count__91810_91814;
var G__91820 = (i__91811_91815 + 1);
seq__91808_91812 = G__91817;
chunk__91809_91813 = G__91818;
count__91810_91814 = G__91819;
i__91811_91815 = G__91820;
continue;
}
} else
{var temp__4092__auto___91821 = cljs.core.seq.call(null,seq__91808_91812);if(temp__4092__auto___91821)
{var seq__91808_91822__$1 = temp__4092__auto___91821;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91808_91822__$1))
{var c__14549__auto___91823 = cljs.core.chunk_first.call(null,seq__91808_91822__$1);{
var G__91824 = cljs.core.chunk_rest.call(null,seq__91808_91822__$1);
var G__91825 = c__14549__auto___91823;
var G__91826 = cljs.core.count.call(null,c__14549__auto___91823);
var G__91827 = 0;
seq__91808_91812 = G__91824;
chunk__91809_91813 = G__91825;
count__91810_91814 = G__91826;
i__91811_91815 = G__91827;
continue;
}
} else
{var node_91828 = cljs.core.first.call(null,seq__91808_91822__$1);goog.dom.setTextContent(node_91828,value);
{
var G__91829 = cljs.core.next.call(null,seq__91808_91822__$1);
var G__91830 = null;
var G__91831 = 0;
var G__91832 = 0;
seq__91808_91812 = G__91829;
chunk__91809_91813 = G__91830;
count__91810_91814 = G__91831;
i__91811_91815 = G__91832;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__91837_91841 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91838_91842 = null;var count__91839_91843 = 0;var i__91840_91844 = 0;while(true){
if((i__91840_91844 < count__91839_91843))
{var node_91845 = cljs.core._nth.call(null,chunk__91838_91842,i__91840_91844);goog.dom.forms.setValue(node_91845,value);
{
var G__91846 = seq__91837_91841;
var G__91847 = chunk__91838_91842;
var G__91848 = count__91839_91843;
var G__91849 = (i__91840_91844 + 1);
seq__91837_91841 = G__91846;
chunk__91838_91842 = G__91847;
count__91839_91843 = G__91848;
i__91840_91844 = G__91849;
continue;
}
} else
{var temp__4092__auto___91850 = cljs.core.seq.call(null,seq__91837_91841);if(temp__4092__auto___91850)
{var seq__91837_91851__$1 = temp__4092__auto___91850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91837_91851__$1))
{var c__14549__auto___91852 = cljs.core.chunk_first.call(null,seq__91837_91851__$1);{
var G__91853 = cljs.core.chunk_rest.call(null,seq__91837_91851__$1);
var G__91854 = c__14549__auto___91852;
var G__91855 = cljs.core.count.call(null,c__14549__auto___91852);
var G__91856 = 0;
seq__91837_91841 = G__91853;
chunk__91838_91842 = G__91854;
count__91839_91843 = G__91855;
i__91840_91844 = G__91856;
continue;
}
} else
{var node_91857 = cljs.core.first.call(null,seq__91837_91851__$1);goog.dom.forms.setValue(node_91857,value);
{
var G__91858 = cljs.core.next.call(null,seq__91837_91851__$1);
var G__91859 = null;
var G__91860 = 0;
var G__91861 = 0;
seq__91837_91841 = G__91858;
chunk__91838_91842 = G__91859;
count__91839_91843 = G__91860;
i__91840_91844 = G__91861;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13813__auto__ = allows_inner_html_QMARK_;if(and__13813__auto__)
{var and__13813__auto____$1 = (function (){var or__13825__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13813__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
}
})()))
{var value_91872 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__91868_91873 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__91869_91874 = null;var count__91870_91875 = 0;var i__91871_91876 = 0;while(true){
if((i__91871_91876 < count__91870_91875))
{var node_91877 = cljs.core._nth.call(null,chunk__91869_91874,i__91871_91876);node_91877.innerHTML = value_91872;
{
var G__91878 = seq__91868_91873;
var G__91879 = chunk__91869_91874;
var G__91880 = count__91870_91875;
var G__91881 = (i__91871_91876 + 1);
seq__91868_91873 = G__91878;
chunk__91869_91874 = G__91879;
count__91870_91875 = G__91880;
i__91871_91876 = G__91881;
continue;
}
} else
{var temp__4092__auto___91882 = cljs.core.seq.call(null,seq__91868_91873);if(temp__4092__auto___91882)
{var seq__91868_91883__$1 = temp__4092__auto___91882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91868_91883__$1))
{var c__14549__auto___91884 = cljs.core.chunk_first.call(null,seq__91868_91883__$1);{
var G__91885 = cljs.core.chunk_rest.call(null,seq__91868_91883__$1);
var G__91886 = c__14549__auto___91884;
var G__91887 = cljs.core.count.call(null,c__14549__auto___91884);
var G__91888 = 0;
seq__91868_91873 = G__91885;
chunk__91869_91874 = G__91886;
count__91870_91875 = G__91887;
i__91871_91876 = G__91888;
continue;
}
} else
{var node_91889 = cljs.core.first.call(null,seq__91868_91883__$1);node_91889.innerHTML = value_91872;
{
var G__91890 = cljs.core.next.call(null,seq__91868_91883__$1);
var G__91891 = null;
var G__91892 = 0;
var G__91893 = 0;
seq__91868_91873 = G__91890;
chunk__91869_91874 = G__91891;
count__91870_91875 = G__91892;
i__91871_91876 = G__91893;
continue;
}
}
} else
{}
}
break;
}
}catch (e91867){if((e91867 instanceof Error))
{var e_91894 = e91867;domina.replace_children_BANG_.call(null,content,value_91872);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e91867;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13813__auto__ = bubble;if(cljs.core.truth_(and__13813__auto__))
{return (value == null);
} else
{return and__13813__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13825__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__91901_91905 = cljs.core.seq.call(null,children);var chunk__91902_91906 = null;var count__91903_91907 = 0;var i__91904_91908 = 0;while(true){
if((i__91904_91908 < count__91903_91907))
{var child_91909 = cljs.core._nth.call(null,chunk__91902_91906,i__91904_91908);frag.appendChild(child_91909);
{
var G__91910 = seq__91901_91905;
var G__91911 = chunk__91902_91906;
var G__91912 = count__91903_91907;
var G__91913 = (i__91904_91908 + 1);
seq__91901_91905 = G__91910;
chunk__91902_91906 = G__91911;
count__91903_91907 = G__91912;
i__91904_91908 = G__91913;
continue;
}
} else
{var temp__4092__auto___91914 = cljs.core.seq.call(null,seq__91901_91905);if(temp__4092__auto___91914)
{var seq__91901_91915__$1 = temp__4092__auto___91914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__91901_91915__$1))
{var c__14549__auto___91916 = cljs.core.chunk_first.call(null,seq__91901_91915__$1);{
var G__91917 = cljs.core.chunk_rest.call(null,seq__91901_91915__$1);
var G__91918 = c__14549__auto___91916;
var G__91919 = cljs.core.count.call(null,c__14549__auto___91916);
var G__91920 = 0;
seq__91901_91905 = G__91917;
chunk__91902_91906 = G__91918;
count__91903_91907 = G__91919;
i__91904_91908 = G__91920;
continue;
}
} else
{var child_91921 = cljs.core.first.call(null,seq__91901_91915__$1);frag.appendChild(child_91921);
{
var G__91922 = cljs.core.next.call(null,seq__91901_91915__$1);
var G__91923 = null;
var G__91924 = 0;
var G__91925 = 0;
seq__91901_91905 = G__91922;
chunk__91902_91906 = G__91923;
count__91903_91907 = G__91924;
i__91904_91908 = G__91925;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__91895_SHARP_,p2__91896_SHARP_){return f.call(null,p1__91895_SHARP_,p2__91896_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13813__auto__ = obj;if(cljs.core.truth_(and__13813__auto__))
{var and__13813__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13813__auto____$1)
{return obj.length;
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
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
{if((function (){var G__91927 = list_thing;if(G__91927)
{var bit__14451__auto__ = (G__91927.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__91927.cljs$core$ISeqable$))
{return true;
} else
{if((!G__91927.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91927);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91927);
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
{if((function (){var G__91928 = content;if(G__91928)
{var bit__14451__auto__ = (G__91928.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__91928.cljs$core$ISeqable$))
{return true;
} else
{if((!G__91928.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91928);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91928);
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
{if((function (){var G__91929 = content;if(G__91929)
{var bit__14451__auto__ = (G__91929.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__91929.cljs$core$ISeqable$))
{return true;
} else
{if((!G__91929.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91929);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__91929);
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