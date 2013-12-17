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
var opt_wrapper_339519 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_339520 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_339521 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_339520,table_section_wrapper_339520,opt_wrapper_339519,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_339521,table_section_wrapper_339520,cell_wrapper_339521,opt_wrapper_339519,table_section_wrapper_339520,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_339520]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13811__auto__ = div.firstChild;if(cljs.core.truth_(and__13811__auto__))
{return div.firstChild.childNodes;
} else
{return and__13811__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__339526 = cljs.core.seq.call(null,tbody);var chunk__339527 = null;var count__339528 = 0;var i__339529 = 0;while(true){
if((i__339529 < count__339528))
{var child = cljs.core._nth.call(null,chunk__339527,i__339529);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__339530 = seq__339526;
var G__339531 = chunk__339527;
var G__339532 = count__339528;
var G__339533 = (i__339529 + 1);
seq__339526 = G__339530;
chunk__339527 = G__339531;
count__339528 = G__339532;
i__339529 = G__339533;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__339526);if(temp__4092__auto__)
{var seq__339526__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339526__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__339526__$1);{
var G__339534 = cljs.core.chunk_rest.call(null,seq__339526__$1);
var G__339535 = c__14547__auto__;
var G__339536 = cljs.core.count.call(null,c__14547__auto__);
var G__339537 = 0;
seq__339526 = G__339534;
chunk__339527 = G__339535;
count__339528 = G__339536;
i__339529 = G__339537;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__339526__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__339538 = cljs.core.next.call(null,seq__339526__$1);
var G__339539 = null;
var G__339540 = 0;
var G__339541 = 0;
seq__339526 = G__339538;
chunk__339527 = G__339539;
count__339528 = G__339540;
i__339529 = G__339541;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__339543 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__339543,0,null);var start_wrap = cljs.core.nth.call(null,vec__339543,1,null);var end_wrap = cljs.core.nth.call(null,vec__339543,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__339544 = wrapper.lastChild;
var G__339545 = (level - 1);
wrapper = G__339544;
level = G__339545;
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
if(cljs.core.truth_((function (){var and__13811__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13811__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13811__auto__;
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
domina.DomContent = (function (){var obj339547 = {};return obj339547;
})();
domina.nodes = (function nodes(content){if((function (){var and__13811__auto__ = content;if(and__13811__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13811__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14426__auto__ = (((content == null))?null:content);return (function (){var or__13823__auto__ = (domina.nodes[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (domina.nodes["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13811__auto__ = nodeseq;if(and__13811__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13811__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14426__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13823__auto__ = (domina.single_node[goog.typeOf(x__14426__auto__)]);if(or__13823__auto__)
{return or__13823__auto__;
} else
{var or__13823__auto____$1 = (domina.single_node["_"]);if(or__13823__auto____$1)
{return or__13823__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13811__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13811__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13811__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__339548){
var mesg = cljs.core.seq(arglist__339548);
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
log.cljs$lang$applyTo = (function (arglist__339549){
var mesg = cljs.core.seq(arglist__339549);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__339550){
var contents = cljs.core.seq(arglist__339550);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__339551_SHARP_){return p1__339551_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__339552_SHARP_,p2__339553_SHARP_){return goog.dom.insertChildAt(p1__339552_SHARP_,p2__339553_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__339555_SHARP_,p2__339554_SHARP_){return goog.dom.insertSiblingBefore(p2__339554_SHARP_,p1__339555_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__339557_SHARP_,p2__339556_SHARP_){return goog.dom.insertSiblingAfter(p2__339556_SHARP_,p1__339557_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__339559_SHARP_,p2__339558_SHARP_){return goog.dom.replaceNode(p2__339558_SHARP_,p1__339559_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__339564_339568 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339565_339569 = null;var count__339566_339570 = 0;var i__339567_339571 = 0;while(true){
if((i__339567_339571 < count__339566_339570))
{var n_339572 = cljs.core._nth.call(null,chunk__339565_339569,i__339567_339571);goog.style.setStyle(n_339572,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__339573 = seq__339564_339568;
var G__339574 = chunk__339565_339569;
var G__339575 = count__339566_339570;
var G__339576 = (i__339567_339571 + 1);
seq__339564_339568 = G__339573;
chunk__339565_339569 = G__339574;
count__339566_339570 = G__339575;
i__339567_339571 = G__339576;
continue;
}
} else
{var temp__4092__auto___339577 = cljs.core.seq.call(null,seq__339564_339568);if(temp__4092__auto___339577)
{var seq__339564_339578__$1 = temp__4092__auto___339577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339564_339578__$1))
{var c__14547__auto___339579 = cljs.core.chunk_first.call(null,seq__339564_339578__$1);{
var G__339580 = cljs.core.chunk_rest.call(null,seq__339564_339578__$1);
var G__339581 = c__14547__auto___339579;
var G__339582 = cljs.core.count.call(null,c__14547__auto___339579);
var G__339583 = 0;
seq__339564_339568 = G__339580;
chunk__339565_339569 = G__339581;
count__339566_339570 = G__339582;
i__339567_339571 = G__339583;
continue;
}
} else
{var n_339584 = cljs.core.first.call(null,seq__339564_339578__$1);goog.style.setStyle(n_339584,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__339585 = cljs.core.next.call(null,seq__339564_339578__$1);
var G__339586 = null;
var G__339587 = 0;
var G__339588 = 0;
seq__339564_339568 = G__339585;
chunk__339565_339569 = G__339586;
count__339566_339570 = G__339587;
i__339567_339571 = G__339588;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__339589){
var content = cljs.core.first(arglist__339589);
arglist__339589 = cljs.core.next(arglist__339589);
var name = cljs.core.first(arglist__339589);
var value = cljs.core.rest(arglist__339589);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__339594_339598 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339595_339599 = null;var count__339596_339600 = 0;var i__339597_339601 = 0;while(true){
if((i__339597_339601 < count__339596_339600))
{var n_339602 = cljs.core._nth.call(null,chunk__339595_339599,i__339597_339601);n_339602.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__339603 = seq__339594_339598;
var G__339604 = chunk__339595_339599;
var G__339605 = count__339596_339600;
var G__339606 = (i__339597_339601 + 1);
seq__339594_339598 = G__339603;
chunk__339595_339599 = G__339604;
count__339596_339600 = G__339605;
i__339597_339601 = G__339606;
continue;
}
} else
{var temp__4092__auto___339607 = cljs.core.seq.call(null,seq__339594_339598);if(temp__4092__auto___339607)
{var seq__339594_339608__$1 = temp__4092__auto___339607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339594_339608__$1))
{var c__14547__auto___339609 = cljs.core.chunk_first.call(null,seq__339594_339608__$1);{
var G__339610 = cljs.core.chunk_rest.call(null,seq__339594_339608__$1);
var G__339611 = c__14547__auto___339609;
var G__339612 = cljs.core.count.call(null,c__14547__auto___339609);
var G__339613 = 0;
seq__339594_339598 = G__339610;
chunk__339595_339599 = G__339611;
count__339596_339600 = G__339612;
i__339597_339601 = G__339613;
continue;
}
} else
{var n_339614 = cljs.core.first.call(null,seq__339594_339608__$1);n_339614.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__339615 = cljs.core.next.call(null,seq__339594_339608__$1);
var G__339616 = null;
var G__339617 = 0;
var G__339618 = 0;
seq__339594_339598 = G__339615;
chunk__339595_339599 = G__339616;
count__339596_339600 = G__339617;
i__339597_339601 = G__339618;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__339619){
var content = cljs.core.first(arglist__339619);
arglist__339619 = cljs.core.next(arglist__339619);
var name = cljs.core.first(arglist__339619);
var value = cljs.core.rest(arglist__339619);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__339624_339628 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339625_339629 = null;var count__339626_339630 = 0;var i__339627_339631 = 0;while(true){
if((i__339627_339631 < count__339626_339630))
{var n_339632 = cljs.core._nth.call(null,chunk__339625_339629,i__339627_339631);n_339632.removeAttribute(cljs.core.name.call(null,name));
{
var G__339633 = seq__339624_339628;
var G__339634 = chunk__339625_339629;
var G__339635 = count__339626_339630;
var G__339636 = (i__339627_339631 + 1);
seq__339624_339628 = G__339633;
chunk__339625_339629 = G__339634;
count__339626_339630 = G__339635;
i__339627_339631 = G__339636;
continue;
}
} else
{var temp__4092__auto___339637 = cljs.core.seq.call(null,seq__339624_339628);if(temp__4092__auto___339637)
{var seq__339624_339638__$1 = temp__4092__auto___339637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339624_339638__$1))
{var c__14547__auto___339639 = cljs.core.chunk_first.call(null,seq__339624_339638__$1);{
var G__339640 = cljs.core.chunk_rest.call(null,seq__339624_339638__$1);
var G__339641 = c__14547__auto___339639;
var G__339642 = cljs.core.count.call(null,c__14547__auto___339639);
var G__339643 = 0;
seq__339624_339628 = G__339640;
chunk__339625_339629 = G__339641;
count__339626_339630 = G__339642;
i__339627_339631 = G__339643;
continue;
}
} else
{var n_339644 = cljs.core.first.call(null,seq__339624_339638__$1);n_339644.removeAttribute(cljs.core.name.call(null,name));
{
var G__339645 = cljs.core.next.call(null,seq__339624_339638__$1);
var G__339646 = null;
var G__339647 = 0;
var G__339648 = 0;
seq__339624_339628 = G__339645;
chunk__339625_339629 = G__339646;
count__339626_339630 = G__339647;
i__339627_339631 = G__339648;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__339650 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__339650,0,null);var v = cljs.core.nth.call(null,vec__339650,1,null);if(cljs.core.truth_((function (){var and__13811__auto__ = k;if(cljs.core.truth_(and__13811__auto__))
{return v;
} else
{return and__13811__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__339651_SHARP_){var attr = attrs__$1.item(p1__339651_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__339658_339664 = cljs.core.seq.call(null,styles);var chunk__339659_339665 = null;var count__339660_339666 = 0;var i__339661_339667 = 0;while(true){
if((i__339661_339667 < count__339660_339666))
{var vec__339662_339668 = cljs.core._nth.call(null,chunk__339659_339665,i__339661_339667);var name_339669 = cljs.core.nth.call(null,vec__339662_339668,0,null);var value_339670 = cljs.core.nth.call(null,vec__339662_339668,1,null);domina.set_style_BANG_.call(null,content,name_339669,value_339670);
{
var G__339671 = seq__339658_339664;
var G__339672 = chunk__339659_339665;
var G__339673 = count__339660_339666;
var G__339674 = (i__339661_339667 + 1);
seq__339658_339664 = G__339671;
chunk__339659_339665 = G__339672;
count__339660_339666 = G__339673;
i__339661_339667 = G__339674;
continue;
}
} else
{var temp__4092__auto___339675 = cljs.core.seq.call(null,seq__339658_339664);if(temp__4092__auto___339675)
{var seq__339658_339676__$1 = temp__4092__auto___339675;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339658_339676__$1))
{var c__14547__auto___339677 = cljs.core.chunk_first.call(null,seq__339658_339676__$1);{
var G__339678 = cljs.core.chunk_rest.call(null,seq__339658_339676__$1);
var G__339679 = c__14547__auto___339677;
var G__339680 = cljs.core.count.call(null,c__14547__auto___339677);
var G__339681 = 0;
seq__339658_339664 = G__339678;
chunk__339659_339665 = G__339679;
count__339660_339666 = G__339680;
i__339661_339667 = G__339681;
continue;
}
} else
{var vec__339663_339682 = cljs.core.first.call(null,seq__339658_339676__$1);var name_339683 = cljs.core.nth.call(null,vec__339663_339682,0,null);var value_339684 = cljs.core.nth.call(null,vec__339663_339682,1,null);domina.set_style_BANG_.call(null,content,name_339683,value_339684);
{
var G__339685 = cljs.core.next.call(null,seq__339658_339676__$1);
var G__339686 = null;
var G__339687 = 0;
var G__339688 = 0;
seq__339658_339664 = G__339685;
chunk__339659_339665 = G__339686;
count__339660_339666 = G__339687;
i__339661_339667 = G__339688;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__339695_339701 = cljs.core.seq.call(null,attrs);var chunk__339696_339702 = null;var count__339697_339703 = 0;var i__339698_339704 = 0;while(true){
if((i__339698_339704 < count__339697_339703))
{var vec__339699_339705 = cljs.core._nth.call(null,chunk__339696_339702,i__339698_339704);var name_339706 = cljs.core.nth.call(null,vec__339699_339705,0,null);var value_339707 = cljs.core.nth.call(null,vec__339699_339705,1,null);domina.set_attr_BANG_.call(null,content,name_339706,value_339707);
{
var G__339708 = seq__339695_339701;
var G__339709 = chunk__339696_339702;
var G__339710 = count__339697_339703;
var G__339711 = (i__339698_339704 + 1);
seq__339695_339701 = G__339708;
chunk__339696_339702 = G__339709;
count__339697_339703 = G__339710;
i__339698_339704 = G__339711;
continue;
}
} else
{var temp__4092__auto___339712 = cljs.core.seq.call(null,seq__339695_339701);if(temp__4092__auto___339712)
{var seq__339695_339713__$1 = temp__4092__auto___339712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339695_339713__$1))
{var c__14547__auto___339714 = cljs.core.chunk_first.call(null,seq__339695_339713__$1);{
var G__339715 = cljs.core.chunk_rest.call(null,seq__339695_339713__$1);
var G__339716 = c__14547__auto___339714;
var G__339717 = cljs.core.count.call(null,c__14547__auto___339714);
var G__339718 = 0;
seq__339695_339701 = G__339715;
chunk__339696_339702 = G__339716;
count__339697_339703 = G__339717;
i__339698_339704 = G__339718;
continue;
}
} else
{var vec__339700_339719 = cljs.core.first.call(null,seq__339695_339713__$1);var name_339720 = cljs.core.nth.call(null,vec__339700_339719,0,null);var value_339721 = cljs.core.nth.call(null,vec__339700_339719,1,null);domina.set_attr_BANG_.call(null,content,name_339720,value_339721);
{
var G__339722 = cljs.core.next.call(null,seq__339695_339713__$1);
var G__339723 = null;
var G__339724 = 0;
var G__339725 = 0;
seq__339695_339701 = G__339722;
chunk__339696_339702 = G__339723;
count__339697_339703 = G__339724;
i__339698_339704 = G__339725;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__339730_339734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339731_339735 = null;var count__339732_339736 = 0;var i__339733_339737 = 0;while(true){
if((i__339733_339737 < count__339732_339736))
{var node_339738 = cljs.core._nth.call(null,chunk__339731_339735,i__339733_339737);goog.dom.classes.add(node_339738,class$);
{
var G__339739 = seq__339730_339734;
var G__339740 = chunk__339731_339735;
var G__339741 = count__339732_339736;
var G__339742 = (i__339733_339737 + 1);
seq__339730_339734 = G__339739;
chunk__339731_339735 = G__339740;
count__339732_339736 = G__339741;
i__339733_339737 = G__339742;
continue;
}
} else
{var temp__4092__auto___339743 = cljs.core.seq.call(null,seq__339730_339734);if(temp__4092__auto___339743)
{var seq__339730_339744__$1 = temp__4092__auto___339743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339730_339744__$1))
{var c__14547__auto___339745 = cljs.core.chunk_first.call(null,seq__339730_339744__$1);{
var G__339746 = cljs.core.chunk_rest.call(null,seq__339730_339744__$1);
var G__339747 = c__14547__auto___339745;
var G__339748 = cljs.core.count.call(null,c__14547__auto___339745);
var G__339749 = 0;
seq__339730_339734 = G__339746;
chunk__339731_339735 = G__339747;
count__339732_339736 = G__339748;
i__339733_339737 = G__339749;
continue;
}
} else
{var node_339750 = cljs.core.first.call(null,seq__339730_339744__$1);goog.dom.classes.add(node_339750,class$);
{
var G__339751 = cljs.core.next.call(null,seq__339730_339744__$1);
var G__339752 = null;
var G__339753 = 0;
var G__339754 = 0;
seq__339730_339734 = G__339751;
chunk__339731_339735 = G__339752;
count__339732_339736 = G__339753;
i__339733_339737 = G__339754;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__339759_339763 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339760_339764 = null;var count__339761_339765 = 0;var i__339762_339766 = 0;while(true){
if((i__339762_339766 < count__339761_339765))
{var node_339767 = cljs.core._nth.call(null,chunk__339760_339764,i__339762_339766);goog.dom.classes.remove(node_339767,class$);
{
var G__339768 = seq__339759_339763;
var G__339769 = chunk__339760_339764;
var G__339770 = count__339761_339765;
var G__339771 = (i__339762_339766 + 1);
seq__339759_339763 = G__339768;
chunk__339760_339764 = G__339769;
count__339761_339765 = G__339770;
i__339762_339766 = G__339771;
continue;
}
} else
{var temp__4092__auto___339772 = cljs.core.seq.call(null,seq__339759_339763);if(temp__4092__auto___339772)
{var seq__339759_339773__$1 = temp__4092__auto___339772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339759_339773__$1))
{var c__14547__auto___339774 = cljs.core.chunk_first.call(null,seq__339759_339773__$1);{
var G__339775 = cljs.core.chunk_rest.call(null,seq__339759_339773__$1);
var G__339776 = c__14547__auto___339774;
var G__339777 = cljs.core.count.call(null,c__14547__auto___339774);
var G__339778 = 0;
seq__339759_339763 = G__339775;
chunk__339760_339764 = G__339776;
count__339761_339765 = G__339777;
i__339762_339766 = G__339778;
continue;
}
} else
{var node_339779 = cljs.core.first.call(null,seq__339759_339773__$1);goog.dom.classes.remove(node_339779,class$);
{
var G__339780 = cljs.core.next.call(null,seq__339759_339773__$1);
var G__339781 = null;
var G__339782 = 0;
var G__339783 = 0;
seq__339759_339763 = G__339780;
chunk__339760_339764 = G__339781;
count__339761_339765 = G__339782;
i__339762_339766 = G__339783;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__339788_339792 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339789_339793 = null;var count__339790_339794 = 0;var i__339791_339795 = 0;while(true){
if((i__339791_339795 < count__339790_339794))
{var node_339796 = cljs.core._nth.call(null,chunk__339789_339793,i__339791_339795);goog.dom.classes.toggle(node_339796,class$);
{
var G__339797 = seq__339788_339792;
var G__339798 = chunk__339789_339793;
var G__339799 = count__339790_339794;
var G__339800 = (i__339791_339795 + 1);
seq__339788_339792 = G__339797;
chunk__339789_339793 = G__339798;
count__339790_339794 = G__339799;
i__339791_339795 = G__339800;
continue;
}
} else
{var temp__4092__auto___339801 = cljs.core.seq.call(null,seq__339788_339792);if(temp__4092__auto___339801)
{var seq__339788_339802__$1 = temp__4092__auto___339801;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339788_339802__$1))
{var c__14547__auto___339803 = cljs.core.chunk_first.call(null,seq__339788_339802__$1);{
var G__339804 = cljs.core.chunk_rest.call(null,seq__339788_339802__$1);
var G__339805 = c__14547__auto___339803;
var G__339806 = cljs.core.count.call(null,c__14547__auto___339803);
var G__339807 = 0;
seq__339788_339792 = G__339804;
chunk__339789_339793 = G__339805;
count__339790_339794 = G__339806;
i__339791_339795 = G__339807;
continue;
}
} else
{var node_339808 = cljs.core.first.call(null,seq__339788_339802__$1);goog.dom.classes.toggle(node_339808,class$);
{
var G__339809 = cljs.core.next.call(null,seq__339788_339802__$1);
var G__339810 = null;
var G__339811 = 0;
var G__339812 = 0;
seq__339788_339792 = G__339809;
chunk__339789_339793 = G__339810;
count__339790_339794 = G__339811;
i__339791_339795 = G__339812;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_339821__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__339817_339822 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339818_339823 = null;var count__339819_339824 = 0;var i__339820_339825 = 0;while(true){
if((i__339820_339825 < count__339819_339824))
{var node_339826 = cljs.core._nth.call(null,chunk__339818_339823,i__339820_339825);goog.dom.classes.set(node_339826,classes_339821__$1);
{
var G__339827 = seq__339817_339822;
var G__339828 = chunk__339818_339823;
var G__339829 = count__339819_339824;
var G__339830 = (i__339820_339825 + 1);
seq__339817_339822 = G__339827;
chunk__339818_339823 = G__339828;
count__339819_339824 = G__339829;
i__339820_339825 = G__339830;
continue;
}
} else
{var temp__4092__auto___339831 = cljs.core.seq.call(null,seq__339817_339822);if(temp__4092__auto___339831)
{var seq__339817_339832__$1 = temp__4092__auto___339831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339817_339832__$1))
{var c__14547__auto___339833 = cljs.core.chunk_first.call(null,seq__339817_339832__$1);{
var G__339834 = cljs.core.chunk_rest.call(null,seq__339817_339832__$1);
var G__339835 = c__14547__auto___339833;
var G__339836 = cljs.core.count.call(null,c__14547__auto___339833);
var G__339837 = 0;
seq__339817_339822 = G__339834;
chunk__339818_339823 = G__339835;
count__339819_339824 = G__339836;
i__339820_339825 = G__339837;
continue;
}
} else
{var node_339838 = cljs.core.first.call(null,seq__339817_339832__$1);goog.dom.classes.set(node_339838,classes_339821__$1);
{
var G__339839 = cljs.core.next.call(null,seq__339817_339832__$1);
var G__339840 = null;
var G__339841 = 0;
var G__339842 = 0;
seq__339817_339822 = G__339839;
chunk__339818_339823 = G__339840;
count__339819_339824 = G__339841;
i__339820_339825 = G__339842;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__339847_339851 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339848_339852 = null;var count__339849_339853 = 0;var i__339850_339854 = 0;while(true){
if((i__339850_339854 < count__339849_339853))
{var node_339855 = cljs.core._nth.call(null,chunk__339848_339852,i__339850_339854);goog.dom.setTextContent(node_339855,value);
{
var G__339856 = seq__339847_339851;
var G__339857 = chunk__339848_339852;
var G__339858 = count__339849_339853;
var G__339859 = (i__339850_339854 + 1);
seq__339847_339851 = G__339856;
chunk__339848_339852 = G__339857;
count__339849_339853 = G__339858;
i__339850_339854 = G__339859;
continue;
}
} else
{var temp__4092__auto___339860 = cljs.core.seq.call(null,seq__339847_339851);if(temp__4092__auto___339860)
{var seq__339847_339861__$1 = temp__4092__auto___339860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339847_339861__$1))
{var c__14547__auto___339862 = cljs.core.chunk_first.call(null,seq__339847_339861__$1);{
var G__339863 = cljs.core.chunk_rest.call(null,seq__339847_339861__$1);
var G__339864 = c__14547__auto___339862;
var G__339865 = cljs.core.count.call(null,c__14547__auto___339862);
var G__339866 = 0;
seq__339847_339851 = G__339863;
chunk__339848_339852 = G__339864;
count__339849_339853 = G__339865;
i__339850_339854 = G__339866;
continue;
}
} else
{var node_339867 = cljs.core.first.call(null,seq__339847_339861__$1);goog.dom.setTextContent(node_339867,value);
{
var G__339868 = cljs.core.next.call(null,seq__339847_339861__$1);
var G__339869 = null;
var G__339870 = 0;
var G__339871 = 0;
seq__339847_339851 = G__339868;
chunk__339848_339852 = G__339869;
count__339849_339853 = G__339870;
i__339850_339854 = G__339871;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__339876_339880 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339877_339881 = null;var count__339878_339882 = 0;var i__339879_339883 = 0;while(true){
if((i__339879_339883 < count__339878_339882))
{var node_339884 = cljs.core._nth.call(null,chunk__339877_339881,i__339879_339883);goog.dom.forms.setValue(node_339884,value);
{
var G__339885 = seq__339876_339880;
var G__339886 = chunk__339877_339881;
var G__339887 = count__339878_339882;
var G__339888 = (i__339879_339883 + 1);
seq__339876_339880 = G__339885;
chunk__339877_339881 = G__339886;
count__339878_339882 = G__339887;
i__339879_339883 = G__339888;
continue;
}
} else
{var temp__4092__auto___339889 = cljs.core.seq.call(null,seq__339876_339880);if(temp__4092__auto___339889)
{var seq__339876_339890__$1 = temp__4092__auto___339889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339876_339890__$1))
{var c__14547__auto___339891 = cljs.core.chunk_first.call(null,seq__339876_339890__$1);{
var G__339892 = cljs.core.chunk_rest.call(null,seq__339876_339890__$1);
var G__339893 = c__14547__auto___339891;
var G__339894 = cljs.core.count.call(null,c__14547__auto___339891);
var G__339895 = 0;
seq__339876_339880 = G__339892;
chunk__339877_339881 = G__339893;
count__339878_339882 = G__339894;
i__339879_339883 = G__339895;
continue;
}
} else
{var node_339896 = cljs.core.first.call(null,seq__339876_339890__$1);goog.dom.forms.setValue(node_339896,value);
{
var G__339897 = cljs.core.next.call(null,seq__339876_339890__$1);
var G__339898 = null;
var G__339899 = 0;
var G__339900 = 0;
seq__339876_339880 = G__339897;
chunk__339877_339881 = G__339898;
count__339878_339882 = G__339899;
i__339879_339883 = G__339900;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13811__auto__ = allows_inner_html_QMARK_;if(and__13811__auto__)
{var and__13811__auto____$1 = (function (){var or__13823__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13811__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13811__auto____$1;
}
} else
{return and__13811__auto__;
}
})()))
{var value_339911 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__339907_339912 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__339908_339913 = null;var count__339909_339914 = 0;var i__339910_339915 = 0;while(true){
if((i__339910_339915 < count__339909_339914))
{var node_339916 = cljs.core._nth.call(null,chunk__339908_339913,i__339910_339915);node_339916.innerHTML = value_339911;
{
var G__339917 = seq__339907_339912;
var G__339918 = chunk__339908_339913;
var G__339919 = count__339909_339914;
var G__339920 = (i__339910_339915 + 1);
seq__339907_339912 = G__339917;
chunk__339908_339913 = G__339918;
count__339909_339914 = G__339919;
i__339910_339915 = G__339920;
continue;
}
} else
{var temp__4092__auto___339921 = cljs.core.seq.call(null,seq__339907_339912);if(temp__4092__auto___339921)
{var seq__339907_339922__$1 = temp__4092__auto___339921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339907_339922__$1))
{var c__14547__auto___339923 = cljs.core.chunk_first.call(null,seq__339907_339922__$1);{
var G__339924 = cljs.core.chunk_rest.call(null,seq__339907_339922__$1);
var G__339925 = c__14547__auto___339923;
var G__339926 = cljs.core.count.call(null,c__14547__auto___339923);
var G__339927 = 0;
seq__339907_339912 = G__339924;
chunk__339908_339913 = G__339925;
count__339909_339914 = G__339926;
i__339910_339915 = G__339927;
continue;
}
} else
{var node_339928 = cljs.core.first.call(null,seq__339907_339922__$1);node_339928.innerHTML = value_339911;
{
var G__339929 = cljs.core.next.call(null,seq__339907_339922__$1);
var G__339930 = null;
var G__339931 = 0;
var G__339932 = 0;
seq__339907_339912 = G__339929;
chunk__339908_339913 = G__339930;
count__339909_339914 = G__339931;
i__339910_339915 = G__339932;
continue;
}
}
} else
{}
}
break;
}
}catch (e339906){if((e339906 instanceof Error))
{var e_339933 = e339906;domina.replace_children_BANG_.call(null,content,value_339911);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e339906;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13811__auto__ = bubble;if(cljs.core.truth_(and__13811__auto__))
{return (value == null);
} else
{return and__13811__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13823__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13823__auto__))
{return or__13823__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__339940_339944 = cljs.core.seq.call(null,children);var chunk__339941_339945 = null;var count__339942_339946 = 0;var i__339943_339947 = 0;while(true){
if((i__339943_339947 < count__339942_339946))
{var child_339948 = cljs.core._nth.call(null,chunk__339941_339945,i__339943_339947);frag.appendChild(child_339948);
{
var G__339949 = seq__339940_339944;
var G__339950 = chunk__339941_339945;
var G__339951 = count__339942_339946;
var G__339952 = (i__339943_339947 + 1);
seq__339940_339944 = G__339949;
chunk__339941_339945 = G__339950;
count__339942_339946 = G__339951;
i__339943_339947 = G__339952;
continue;
}
} else
{var temp__4092__auto___339953 = cljs.core.seq.call(null,seq__339940_339944);if(temp__4092__auto___339953)
{var seq__339940_339954__$1 = temp__4092__auto___339953;if(cljs.core.chunked_seq_QMARK_.call(null,seq__339940_339954__$1))
{var c__14547__auto___339955 = cljs.core.chunk_first.call(null,seq__339940_339954__$1);{
var G__339956 = cljs.core.chunk_rest.call(null,seq__339940_339954__$1);
var G__339957 = c__14547__auto___339955;
var G__339958 = cljs.core.count.call(null,c__14547__auto___339955);
var G__339959 = 0;
seq__339940_339944 = G__339956;
chunk__339941_339945 = G__339957;
count__339942_339946 = G__339958;
i__339943_339947 = G__339959;
continue;
}
} else
{var child_339960 = cljs.core.first.call(null,seq__339940_339954__$1);frag.appendChild(child_339960);
{
var G__339961 = cljs.core.next.call(null,seq__339940_339954__$1);
var G__339962 = null;
var G__339963 = 0;
var G__339964 = 0;
seq__339940_339944 = G__339961;
chunk__339941_339945 = G__339962;
count__339942_339946 = G__339963;
i__339943_339947 = G__339964;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__339934_SHARP_,p2__339935_SHARP_){return f.call(null,p1__339934_SHARP_,p2__339935_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13811__auto__ = obj;if(cljs.core.truth_(and__13811__auto__))
{var and__13811__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13811__auto____$1)
{return obj.length;
} else
{return and__13811__auto____$1;
}
} else
{return and__13811__auto__;
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
{if((function (){var G__339966 = list_thing;if(G__339966)
{var bit__14449__auto__ = (G__339966.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__339966.cljs$core$ISeqable$))
{return true;
} else
{if((!G__339966.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339966);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339966);
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
{if((function (){var G__339967 = content;if(G__339967)
{var bit__14449__auto__ = (G__339967.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__339967.cljs$core$ISeqable$))
{return true;
} else
{if((!G__339967.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339967);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339967);
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
{if((function (){var G__339968 = content;if(G__339968)
{var bit__14449__auto__ = (G__339968.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__339968.cljs$core$ISeqable$))
{return true;
} else
{if((!G__339968.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339968);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__339968);
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