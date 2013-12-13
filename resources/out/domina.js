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
var opt_wrapper_300692 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_300693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_300694 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_300693,table_section_wrapper_300693,opt_wrapper_300692,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_300694,table_section_wrapper_300693,cell_wrapper_300694,opt_wrapper_300692,table_section_wrapper_300693,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_300693]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13813__auto__ = div.firstChild;if(cljs.core.truth_(and__13813__auto__))
{return div.firstChild.childNodes;
} else
{return and__13813__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__300699 = cljs.core.seq.call(null,tbody);var chunk__300700 = null;var count__300701 = 0;var i__300702 = 0;while(true){
if((i__300702 < count__300701))
{var child = cljs.core._nth.call(null,chunk__300700,i__300702);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__300703 = seq__300699;
var G__300704 = chunk__300700;
var G__300705 = count__300701;
var G__300706 = (i__300702 + 1);
seq__300699 = G__300703;
chunk__300700 = G__300704;
count__300701 = G__300705;
i__300702 = G__300706;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__300699);if(temp__4092__auto__)
{var seq__300699__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300699__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__300699__$1);{
var G__300707 = cljs.core.chunk_rest.call(null,seq__300699__$1);
var G__300708 = c__14549__auto__;
var G__300709 = cljs.core.count.call(null,c__14549__auto__);
var G__300710 = 0;
seq__300699 = G__300707;
chunk__300700 = G__300708;
count__300701 = G__300709;
i__300702 = G__300710;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__300699__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__300711 = cljs.core.next.call(null,seq__300699__$1);
var G__300712 = null;
var G__300713 = 0;
var G__300714 = 0;
seq__300699 = G__300711;
chunk__300700 = G__300712;
count__300701 = G__300713;
i__300702 = G__300714;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__300716 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__300716,0,null);var start_wrap = cljs.core.nth.call(null,vec__300716,1,null);var end_wrap = cljs.core.nth.call(null,vec__300716,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__300717 = wrapper.lastChild;
var G__300718 = (level - 1);
wrapper = G__300717;
level = G__300718;
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
domina.DomContent = (function (){var obj300720 = {};return obj300720;
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
log_debug.cljs$lang$applyTo = (function (arglist__300721){
var mesg = cljs.core.seq(arglist__300721);
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
log.cljs$lang$applyTo = (function (arglist__300722){
var mesg = cljs.core.seq(arglist__300722);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__300723){
var contents = cljs.core.seq(arglist__300723);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__300724_SHARP_){return p1__300724_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__300725_SHARP_,p2__300726_SHARP_){return goog.dom.insertChildAt(p1__300725_SHARP_,p2__300726_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__300728_SHARP_,p2__300727_SHARP_){return goog.dom.insertSiblingBefore(p2__300727_SHARP_,p1__300728_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__300730_SHARP_,p2__300729_SHARP_){return goog.dom.insertSiblingAfter(p2__300729_SHARP_,p1__300730_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__300732_SHARP_,p2__300731_SHARP_){return goog.dom.replaceNode(p2__300731_SHARP_,p1__300732_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__300737_300741 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300738_300742 = null;var count__300739_300743 = 0;var i__300740_300744 = 0;while(true){
if((i__300740_300744 < count__300739_300743))
{var n_300745 = cljs.core._nth.call(null,chunk__300738_300742,i__300740_300744);goog.style.setStyle(n_300745,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__300746 = seq__300737_300741;
var G__300747 = chunk__300738_300742;
var G__300748 = count__300739_300743;
var G__300749 = (i__300740_300744 + 1);
seq__300737_300741 = G__300746;
chunk__300738_300742 = G__300747;
count__300739_300743 = G__300748;
i__300740_300744 = G__300749;
continue;
}
} else
{var temp__4092__auto___300750 = cljs.core.seq.call(null,seq__300737_300741);if(temp__4092__auto___300750)
{var seq__300737_300751__$1 = temp__4092__auto___300750;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300737_300751__$1))
{var c__14549__auto___300752 = cljs.core.chunk_first.call(null,seq__300737_300751__$1);{
var G__300753 = cljs.core.chunk_rest.call(null,seq__300737_300751__$1);
var G__300754 = c__14549__auto___300752;
var G__300755 = cljs.core.count.call(null,c__14549__auto___300752);
var G__300756 = 0;
seq__300737_300741 = G__300753;
chunk__300738_300742 = G__300754;
count__300739_300743 = G__300755;
i__300740_300744 = G__300756;
continue;
}
} else
{var n_300757 = cljs.core.first.call(null,seq__300737_300751__$1);goog.style.setStyle(n_300757,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__300758 = cljs.core.next.call(null,seq__300737_300751__$1);
var G__300759 = null;
var G__300760 = 0;
var G__300761 = 0;
seq__300737_300741 = G__300758;
chunk__300738_300742 = G__300759;
count__300739_300743 = G__300760;
i__300740_300744 = G__300761;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__300762){
var content = cljs.core.first(arglist__300762);
arglist__300762 = cljs.core.next(arglist__300762);
var name = cljs.core.first(arglist__300762);
var value = cljs.core.rest(arglist__300762);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__300767_300771 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300768_300772 = null;var count__300769_300773 = 0;var i__300770_300774 = 0;while(true){
if((i__300770_300774 < count__300769_300773))
{var n_300775 = cljs.core._nth.call(null,chunk__300768_300772,i__300770_300774);n_300775.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__300776 = seq__300767_300771;
var G__300777 = chunk__300768_300772;
var G__300778 = count__300769_300773;
var G__300779 = (i__300770_300774 + 1);
seq__300767_300771 = G__300776;
chunk__300768_300772 = G__300777;
count__300769_300773 = G__300778;
i__300770_300774 = G__300779;
continue;
}
} else
{var temp__4092__auto___300780 = cljs.core.seq.call(null,seq__300767_300771);if(temp__4092__auto___300780)
{var seq__300767_300781__$1 = temp__4092__auto___300780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300767_300781__$1))
{var c__14549__auto___300782 = cljs.core.chunk_first.call(null,seq__300767_300781__$1);{
var G__300783 = cljs.core.chunk_rest.call(null,seq__300767_300781__$1);
var G__300784 = c__14549__auto___300782;
var G__300785 = cljs.core.count.call(null,c__14549__auto___300782);
var G__300786 = 0;
seq__300767_300771 = G__300783;
chunk__300768_300772 = G__300784;
count__300769_300773 = G__300785;
i__300770_300774 = G__300786;
continue;
}
} else
{var n_300787 = cljs.core.first.call(null,seq__300767_300781__$1);n_300787.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__300788 = cljs.core.next.call(null,seq__300767_300781__$1);
var G__300789 = null;
var G__300790 = 0;
var G__300791 = 0;
seq__300767_300771 = G__300788;
chunk__300768_300772 = G__300789;
count__300769_300773 = G__300790;
i__300770_300774 = G__300791;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__300792){
var content = cljs.core.first(arglist__300792);
arglist__300792 = cljs.core.next(arglist__300792);
var name = cljs.core.first(arglist__300792);
var value = cljs.core.rest(arglist__300792);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__300797_300801 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300798_300802 = null;var count__300799_300803 = 0;var i__300800_300804 = 0;while(true){
if((i__300800_300804 < count__300799_300803))
{var n_300805 = cljs.core._nth.call(null,chunk__300798_300802,i__300800_300804);n_300805.removeAttribute(cljs.core.name.call(null,name));
{
var G__300806 = seq__300797_300801;
var G__300807 = chunk__300798_300802;
var G__300808 = count__300799_300803;
var G__300809 = (i__300800_300804 + 1);
seq__300797_300801 = G__300806;
chunk__300798_300802 = G__300807;
count__300799_300803 = G__300808;
i__300800_300804 = G__300809;
continue;
}
} else
{var temp__4092__auto___300810 = cljs.core.seq.call(null,seq__300797_300801);if(temp__4092__auto___300810)
{var seq__300797_300811__$1 = temp__4092__auto___300810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300797_300811__$1))
{var c__14549__auto___300812 = cljs.core.chunk_first.call(null,seq__300797_300811__$1);{
var G__300813 = cljs.core.chunk_rest.call(null,seq__300797_300811__$1);
var G__300814 = c__14549__auto___300812;
var G__300815 = cljs.core.count.call(null,c__14549__auto___300812);
var G__300816 = 0;
seq__300797_300801 = G__300813;
chunk__300798_300802 = G__300814;
count__300799_300803 = G__300815;
i__300800_300804 = G__300816;
continue;
}
} else
{var n_300817 = cljs.core.first.call(null,seq__300797_300811__$1);n_300817.removeAttribute(cljs.core.name.call(null,name));
{
var G__300818 = cljs.core.next.call(null,seq__300797_300811__$1);
var G__300819 = null;
var G__300820 = 0;
var G__300821 = 0;
seq__300797_300801 = G__300818;
chunk__300798_300802 = G__300819;
count__300799_300803 = G__300820;
i__300800_300804 = G__300821;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__300823 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__300823,0,null);var v = cljs.core.nth.call(null,vec__300823,1,null);if(cljs.core.truth_((function (){var and__13813__auto__ = k;if(cljs.core.truth_(and__13813__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__300824_SHARP_){var attr = attrs__$1.item(p1__300824_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__300831_300837 = cljs.core.seq.call(null,styles);var chunk__300832_300838 = null;var count__300833_300839 = 0;var i__300834_300840 = 0;while(true){
if((i__300834_300840 < count__300833_300839))
{var vec__300835_300841 = cljs.core._nth.call(null,chunk__300832_300838,i__300834_300840);var name_300842 = cljs.core.nth.call(null,vec__300835_300841,0,null);var value_300843 = cljs.core.nth.call(null,vec__300835_300841,1,null);domina.set_style_BANG_.call(null,content,name_300842,value_300843);
{
var G__300844 = seq__300831_300837;
var G__300845 = chunk__300832_300838;
var G__300846 = count__300833_300839;
var G__300847 = (i__300834_300840 + 1);
seq__300831_300837 = G__300844;
chunk__300832_300838 = G__300845;
count__300833_300839 = G__300846;
i__300834_300840 = G__300847;
continue;
}
} else
{var temp__4092__auto___300848 = cljs.core.seq.call(null,seq__300831_300837);if(temp__4092__auto___300848)
{var seq__300831_300849__$1 = temp__4092__auto___300848;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300831_300849__$1))
{var c__14549__auto___300850 = cljs.core.chunk_first.call(null,seq__300831_300849__$1);{
var G__300851 = cljs.core.chunk_rest.call(null,seq__300831_300849__$1);
var G__300852 = c__14549__auto___300850;
var G__300853 = cljs.core.count.call(null,c__14549__auto___300850);
var G__300854 = 0;
seq__300831_300837 = G__300851;
chunk__300832_300838 = G__300852;
count__300833_300839 = G__300853;
i__300834_300840 = G__300854;
continue;
}
} else
{var vec__300836_300855 = cljs.core.first.call(null,seq__300831_300849__$1);var name_300856 = cljs.core.nth.call(null,vec__300836_300855,0,null);var value_300857 = cljs.core.nth.call(null,vec__300836_300855,1,null);domina.set_style_BANG_.call(null,content,name_300856,value_300857);
{
var G__300858 = cljs.core.next.call(null,seq__300831_300849__$1);
var G__300859 = null;
var G__300860 = 0;
var G__300861 = 0;
seq__300831_300837 = G__300858;
chunk__300832_300838 = G__300859;
count__300833_300839 = G__300860;
i__300834_300840 = G__300861;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__300868_300874 = cljs.core.seq.call(null,attrs);var chunk__300869_300875 = null;var count__300870_300876 = 0;var i__300871_300877 = 0;while(true){
if((i__300871_300877 < count__300870_300876))
{var vec__300872_300878 = cljs.core._nth.call(null,chunk__300869_300875,i__300871_300877);var name_300879 = cljs.core.nth.call(null,vec__300872_300878,0,null);var value_300880 = cljs.core.nth.call(null,vec__300872_300878,1,null);domina.set_attr_BANG_.call(null,content,name_300879,value_300880);
{
var G__300881 = seq__300868_300874;
var G__300882 = chunk__300869_300875;
var G__300883 = count__300870_300876;
var G__300884 = (i__300871_300877 + 1);
seq__300868_300874 = G__300881;
chunk__300869_300875 = G__300882;
count__300870_300876 = G__300883;
i__300871_300877 = G__300884;
continue;
}
} else
{var temp__4092__auto___300885 = cljs.core.seq.call(null,seq__300868_300874);if(temp__4092__auto___300885)
{var seq__300868_300886__$1 = temp__4092__auto___300885;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300868_300886__$1))
{var c__14549__auto___300887 = cljs.core.chunk_first.call(null,seq__300868_300886__$1);{
var G__300888 = cljs.core.chunk_rest.call(null,seq__300868_300886__$1);
var G__300889 = c__14549__auto___300887;
var G__300890 = cljs.core.count.call(null,c__14549__auto___300887);
var G__300891 = 0;
seq__300868_300874 = G__300888;
chunk__300869_300875 = G__300889;
count__300870_300876 = G__300890;
i__300871_300877 = G__300891;
continue;
}
} else
{var vec__300873_300892 = cljs.core.first.call(null,seq__300868_300886__$1);var name_300893 = cljs.core.nth.call(null,vec__300873_300892,0,null);var value_300894 = cljs.core.nth.call(null,vec__300873_300892,1,null);domina.set_attr_BANG_.call(null,content,name_300893,value_300894);
{
var G__300895 = cljs.core.next.call(null,seq__300868_300886__$1);
var G__300896 = null;
var G__300897 = 0;
var G__300898 = 0;
seq__300868_300874 = G__300895;
chunk__300869_300875 = G__300896;
count__300870_300876 = G__300897;
i__300871_300877 = G__300898;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__300903_300907 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300904_300908 = null;var count__300905_300909 = 0;var i__300906_300910 = 0;while(true){
if((i__300906_300910 < count__300905_300909))
{var node_300911 = cljs.core._nth.call(null,chunk__300904_300908,i__300906_300910);goog.dom.classes.add(node_300911,class$);
{
var G__300912 = seq__300903_300907;
var G__300913 = chunk__300904_300908;
var G__300914 = count__300905_300909;
var G__300915 = (i__300906_300910 + 1);
seq__300903_300907 = G__300912;
chunk__300904_300908 = G__300913;
count__300905_300909 = G__300914;
i__300906_300910 = G__300915;
continue;
}
} else
{var temp__4092__auto___300916 = cljs.core.seq.call(null,seq__300903_300907);if(temp__4092__auto___300916)
{var seq__300903_300917__$1 = temp__4092__auto___300916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300903_300917__$1))
{var c__14549__auto___300918 = cljs.core.chunk_first.call(null,seq__300903_300917__$1);{
var G__300919 = cljs.core.chunk_rest.call(null,seq__300903_300917__$1);
var G__300920 = c__14549__auto___300918;
var G__300921 = cljs.core.count.call(null,c__14549__auto___300918);
var G__300922 = 0;
seq__300903_300907 = G__300919;
chunk__300904_300908 = G__300920;
count__300905_300909 = G__300921;
i__300906_300910 = G__300922;
continue;
}
} else
{var node_300923 = cljs.core.first.call(null,seq__300903_300917__$1);goog.dom.classes.add(node_300923,class$);
{
var G__300924 = cljs.core.next.call(null,seq__300903_300917__$1);
var G__300925 = null;
var G__300926 = 0;
var G__300927 = 0;
seq__300903_300907 = G__300924;
chunk__300904_300908 = G__300925;
count__300905_300909 = G__300926;
i__300906_300910 = G__300927;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__300932_300936 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300933_300937 = null;var count__300934_300938 = 0;var i__300935_300939 = 0;while(true){
if((i__300935_300939 < count__300934_300938))
{var node_300940 = cljs.core._nth.call(null,chunk__300933_300937,i__300935_300939);goog.dom.classes.remove(node_300940,class$);
{
var G__300941 = seq__300932_300936;
var G__300942 = chunk__300933_300937;
var G__300943 = count__300934_300938;
var G__300944 = (i__300935_300939 + 1);
seq__300932_300936 = G__300941;
chunk__300933_300937 = G__300942;
count__300934_300938 = G__300943;
i__300935_300939 = G__300944;
continue;
}
} else
{var temp__4092__auto___300945 = cljs.core.seq.call(null,seq__300932_300936);if(temp__4092__auto___300945)
{var seq__300932_300946__$1 = temp__4092__auto___300945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300932_300946__$1))
{var c__14549__auto___300947 = cljs.core.chunk_first.call(null,seq__300932_300946__$1);{
var G__300948 = cljs.core.chunk_rest.call(null,seq__300932_300946__$1);
var G__300949 = c__14549__auto___300947;
var G__300950 = cljs.core.count.call(null,c__14549__auto___300947);
var G__300951 = 0;
seq__300932_300936 = G__300948;
chunk__300933_300937 = G__300949;
count__300934_300938 = G__300950;
i__300935_300939 = G__300951;
continue;
}
} else
{var node_300952 = cljs.core.first.call(null,seq__300932_300946__$1);goog.dom.classes.remove(node_300952,class$);
{
var G__300953 = cljs.core.next.call(null,seq__300932_300946__$1);
var G__300954 = null;
var G__300955 = 0;
var G__300956 = 0;
seq__300932_300936 = G__300953;
chunk__300933_300937 = G__300954;
count__300934_300938 = G__300955;
i__300935_300939 = G__300956;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__300961_300965 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300962_300966 = null;var count__300963_300967 = 0;var i__300964_300968 = 0;while(true){
if((i__300964_300968 < count__300963_300967))
{var node_300969 = cljs.core._nth.call(null,chunk__300962_300966,i__300964_300968);goog.dom.classes.toggle(node_300969,class$);
{
var G__300970 = seq__300961_300965;
var G__300971 = chunk__300962_300966;
var G__300972 = count__300963_300967;
var G__300973 = (i__300964_300968 + 1);
seq__300961_300965 = G__300970;
chunk__300962_300966 = G__300971;
count__300963_300967 = G__300972;
i__300964_300968 = G__300973;
continue;
}
} else
{var temp__4092__auto___300974 = cljs.core.seq.call(null,seq__300961_300965);if(temp__4092__auto___300974)
{var seq__300961_300975__$1 = temp__4092__auto___300974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300961_300975__$1))
{var c__14549__auto___300976 = cljs.core.chunk_first.call(null,seq__300961_300975__$1);{
var G__300977 = cljs.core.chunk_rest.call(null,seq__300961_300975__$1);
var G__300978 = c__14549__auto___300976;
var G__300979 = cljs.core.count.call(null,c__14549__auto___300976);
var G__300980 = 0;
seq__300961_300965 = G__300977;
chunk__300962_300966 = G__300978;
count__300963_300967 = G__300979;
i__300964_300968 = G__300980;
continue;
}
} else
{var node_300981 = cljs.core.first.call(null,seq__300961_300975__$1);goog.dom.classes.toggle(node_300981,class$);
{
var G__300982 = cljs.core.next.call(null,seq__300961_300975__$1);
var G__300983 = null;
var G__300984 = 0;
var G__300985 = 0;
seq__300961_300965 = G__300982;
chunk__300962_300966 = G__300983;
count__300963_300967 = G__300984;
i__300964_300968 = G__300985;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_300994__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__300990_300995 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__300991_300996 = null;var count__300992_300997 = 0;var i__300993_300998 = 0;while(true){
if((i__300993_300998 < count__300992_300997))
{var node_300999 = cljs.core._nth.call(null,chunk__300991_300996,i__300993_300998);goog.dom.classes.set(node_300999,classes_300994__$1);
{
var G__301000 = seq__300990_300995;
var G__301001 = chunk__300991_300996;
var G__301002 = count__300992_300997;
var G__301003 = (i__300993_300998 + 1);
seq__300990_300995 = G__301000;
chunk__300991_300996 = G__301001;
count__300992_300997 = G__301002;
i__300993_300998 = G__301003;
continue;
}
} else
{var temp__4092__auto___301004 = cljs.core.seq.call(null,seq__300990_300995);if(temp__4092__auto___301004)
{var seq__300990_301005__$1 = temp__4092__auto___301004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__300990_301005__$1))
{var c__14549__auto___301006 = cljs.core.chunk_first.call(null,seq__300990_301005__$1);{
var G__301007 = cljs.core.chunk_rest.call(null,seq__300990_301005__$1);
var G__301008 = c__14549__auto___301006;
var G__301009 = cljs.core.count.call(null,c__14549__auto___301006);
var G__301010 = 0;
seq__300990_300995 = G__301007;
chunk__300991_300996 = G__301008;
count__300992_300997 = G__301009;
i__300993_300998 = G__301010;
continue;
}
} else
{var node_301011 = cljs.core.first.call(null,seq__300990_301005__$1);goog.dom.classes.set(node_301011,classes_300994__$1);
{
var G__301012 = cljs.core.next.call(null,seq__300990_301005__$1);
var G__301013 = null;
var G__301014 = 0;
var G__301015 = 0;
seq__300990_300995 = G__301012;
chunk__300991_300996 = G__301013;
count__300992_300997 = G__301014;
i__300993_300998 = G__301015;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__301020_301024 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__301021_301025 = null;var count__301022_301026 = 0;var i__301023_301027 = 0;while(true){
if((i__301023_301027 < count__301022_301026))
{var node_301028 = cljs.core._nth.call(null,chunk__301021_301025,i__301023_301027);goog.dom.setTextContent(node_301028,value);
{
var G__301029 = seq__301020_301024;
var G__301030 = chunk__301021_301025;
var G__301031 = count__301022_301026;
var G__301032 = (i__301023_301027 + 1);
seq__301020_301024 = G__301029;
chunk__301021_301025 = G__301030;
count__301022_301026 = G__301031;
i__301023_301027 = G__301032;
continue;
}
} else
{var temp__4092__auto___301033 = cljs.core.seq.call(null,seq__301020_301024);if(temp__4092__auto___301033)
{var seq__301020_301034__$1 = temp__4092__auto___301033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301020_301034__$1))
{var c__14549__auto___301035 = cljs.core.chunk_first.call(null,seq__301020_301034__$1);{
var G__301036 = cljs.core.chunk_rest.call(null,seq__301020_301034__$1);
var G__301037 = c__14549__auto___301035;
var G__301038 = cljs.core.count.call(null,c__14549__auto___301035);
var G__301039 = 0;
seq__301020_301024 = G__301036;
chunk__301021_301025 = G__301037;
count__301022_301026 = G__301038;
i__301023_301027 = G__301039;
continue;
}
} else
{var node_301040 = cljs.core.first.call(null,seq__301020_301034__$1);goog.dom.setTextContent(node_301040,value);
{
var G__301041 = cljs.core.next.call(null,seq__301020_301034__$1);
var G__301042 = null;
var G__301043 = 0;
var G__301044 = 0;
seq__301020_301024 = G__301041;
chunk__301021_301025 = G__301042;
count__301022_301026 = G__301043;
i__301023_301027 = G__301044;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__301049_301053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__301050_301054 = null;var count__301051_301055 = 0;var i__301052_301056 = 0;while(true){
if((i__301052_301056 < count__301051_301055))
{var node_301057 = cljs.core._nth.call(null,chunk__301050_301054,i__301052_301056);goog.dom.forms.setValue(node_301057,value);
{
var G__301058 = seq__301049_301053;
var G__301059 = chunk__301050_301054;
var G__301060 = count__301051_301055;
var G__301061 = (i__301052_301056 + 1);
seq__301049_301053 = G__301058;
chunk__301050_301054 = G__301059;
count__301051_301055 = G__301060;
i__301052_301056 = G__301061;
continue;
}
} else
{var temp__4092__auto___301062 = cljs.core.seq.call(null,seq__301049_301053);if(temp__4092__auto___301062)
{var seq__301049_301063__$1 = temp__4092__auto___301062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301049_301063__$1))
{var c__14549__auto___301064 = cljs.core.chunk_first.call(null,seq__301049_301063__$1);{
var G__301065 = cljs.core.chunk_rest.call(null,seq__301049_301063__$1);
var G__301066 = c__14549__auto___301064;
var G__301067 = cljs.core.count.call(null,c__14549__auto___301064);
var G__301068 = 0;
seq__301049_301053 = G__301065;
chunk__301050_301054 = G__301066;
count__301051_301055 = G__301067;
i__301052_301056 = G__301068;
continue;
}
} else
{var node_301069 = cljs.core.first.call(null,seq__301049_301063__$1);goog.dom.forms.setValue(node_301069,value);
{
var G__301070 = cljs.core.next.call(null,seq__301049_301063__$1);
var G__301071 = null;
var G__301072 = 0;
var G__301073 = 0;
seq__301049_301053 = G__301070;
chunk__301050_301054 = G__301071;
count__301051_301055 = G__301072;
i__301052_301056 = G__301073;
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
{var value_301084 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__301080_301085 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__301081_301086 = null;var count__301082_301087 = 0;var i__301083_301088 = 0;while(true){
if((i__301083_301088 < count__301082_301087))
{var node_301089 = cljs.core._nth.call(null,chunk__301081_301086,i__301083_301088);node_301089.innerHTML = value_301084;
{
var G__301090 = seq__301080_301085;
var G__301091 = chunk__301081_301086;
var G__301092 = count__301082_301087;
var G__301093 = (i__301083_301088 + 1);
seq__301080_301085 = G__301090;
chunk__301081_301086 = G__301091;
count__301082_301087 = G__301092;
i__301083_301088 = G__301093;
continue;
}
} else
{var temp__4092__auto___301094 = cljs.core.seq.call(null,seq__301080_301085);if(temp__4092__auto___301094)
{var seq__301080_301095__$1 = temp__4092__auto___301094;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301080_301095__$1))
{var c__14549__auto___301096 = cljs.core.chunk_first.call(null,seq__301080_301095__$1);{
var G__301097 = cljs.core.chunk_rest.call(null,seq__301080_301095__$1);
var G__301098 = c__14549__auto___301096;
var G__301099 = cljs.core.count.call(null,c__14549__auto___301096);
var G__301100 = 0;
seq__301080_301085 = G__301097;
chunk__301081_301086 = G__301098;
count__301082_301087 = G__301099;
i__301083_301088 = G__301100;
continue;
}
} else
{var node_301101 = cljs.core.first.call(null,seq__301080_301095__$1);node_301101.innerHTML = value_301084;
{
var G__301102 = cljs.core.next.call(null,seq__301080_301095__$1);
var G__301103 = null;
var G__301104 = 0;
var G__301105 = 0;
seq__301080_301085 = G__301102;
chunk__301081_301086 = G__301103;
count__301082_301087 = G__301104;
i__301083_301088 = G__301105;
continue;
}
}
} else
{}
}
break;
}
}catch (e301079){if((e301079 instanceof Error))
{var e_301106 = e301079;domina.replace_children_BANG_.call(null,content,value_301084);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e301079;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__301113_301117 = cljs.core.seq.call(null,children);var chunk__301114_301118 = null;var count__301115_301119 = 0;var i__301116_301120 = 0;while(true){
if((i__301116_301120 < count__301115_301119))
{var child_301121 = cljs.core._nth.call(null,chunk__301114_301118,i__301116_301120);frag.appendChild(child_301121);
{
var G__301122 = seq__301113_301117;
var G__301123 = chunk__301114_301118;
var G__301124 = count__301115_301119;
var G__301125 = (i__301116_301120 + 1);
seq__301113_301117 = G__301122;
chunk__301114_301118 = G__301123;
count__301115_301119 = G__301124;
i__301116_301120 = G__301125;
continue;
}
} else
{var temp__4092__auto___301126 = cljs.core.seq.call(null,seq__301113_301117);if(temp__4092__auto___301126)
{var seq__301113_301127__$1 = temp__4092__auto___301126;if(cljs.core.chunked_seq_QMARK_.call(null,seq__301113_301127__$1))
{var c__14549__auto___301128 = cljs.core.chunk_first.call(null,seq__301113_301127__$1);{
var G__301129 = cljs.core.chunk_rest.call(null,seq__301113_301127__$1);
var G__301130 = c__14549__auto___301128;
var G__301131 = cljs.core.count.call(null,c__14549__auto___301128);
var G__301132 = 0;
seq__301113_301117 = G__301129;
chunk__301114_301118 = G__301130;
count__301115_301119 = G__301131;
i__301116_301120 = G__301132;
continue;
}
} else
{var child_301133 = cljs.core.first.call(null,seq__301113_301127__$1);frag.appendChild(child_301133);
{
var G__301134 = cljs.core.next.call(null,seq__301113_301127__$1);
var G__301135 = null;
var G__301136 = 0;
var G__301137 = 0;
seq__301113_301117 = G__301134;
chunk__301114_301118 = G__301135;
count__301115_301119 = G__301136;
i__301116_301120 = G__301137;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__301107_SHARP_,p2__301108_SHARP_){return f.call(null,p1__301107_SHARP_,p2__301108_SHARP_);
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
{if((function (){var G__301139 = list_thing;if(G__301139)
{var bit__14451__auto__ = (G__301139.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__301139.cljs$core$ISeqable$))
{return true;
} else
{if((!G__301139.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301139);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301139);
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
{if((function (){var G__301140 = content;if(G__301140)
{var bit__14451__auto__ = (G__301140.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__301140.cljs$core$ISeqable$))
{return true;
} else
{if((!G__301140.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301140);
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
{if((function (){var G__301141 = content;if(G__301141)
{var bit__14451__auto__ = (G__301141.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__301141.cljs$core$ISeqable$))
{return true;
} else
{if((!G__301141.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301141);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__301141);
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