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
var opt_wrapper_46681 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_46682 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_46683 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_46682,table_section_wrapper_46682,opt_wrapper_46681,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_46683,table_section_wrapper_46682,cell_wrapper_46683,opt_wrapper_46681,table_section_wrapper_46682,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_46682]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8233__auto__ = div.firstChild;if(cljs.core.truth_(and__8233__auto__))
{return div.firstChild.childNodes;
} else
{return and__8233__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__46688 = cljs.core.seq.call(null,tbody);var chunk__46689 = null;var count__46690 = 0;var i__46691 = 0;while(true){
if((i__46691 < count__46690))
{var child = cljs.core._nth.call(null,chunk__46689,i__46691);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46692 = seq__46688;
var G__46693 = chunk__46689;
var G__46694 = count__46690;
var G__46695 = (i__46691 + 1);
seq__46688 = G__46692;
chunk__46689 = G__46693;
count__46690 = G__46694;
i__46691 = G__46695;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46688);if(temp__4092__auto__)
{var seq__46688__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46688__$1))
{var c__8974__auto__ = cljs.core.chunk_first.call(null,seq__46688__$1);{
var G__46696 = cljs.core.chunk_rest.call(null,seq__46688__$1);
var G__46697 = c__8974__auto__;
var G__46698 = cljs.core.count.call(null,c__8974__auto__);
var G__46699 = 0;
seq__46688 = G__46696;
chunk__46689 = G__46697;
count__46690 = G__46698;
i__46691 = G__46699;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__46688__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__46700 = cljs.core.next.call(null,seq__46688__$1);
var G__46701 = null;
var G__46702 = 0;
var G__46703 = 0;
seq__46688 = G__46700;
chunk__46689 = G__46701;
count__46690 = G__46702;
i__46691 = G__46703;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__46705 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__46705,0,null);var start_wrap = cljs.core.nth.call(null,vec__46705,1,null);var end_wrap = cljs.core.nth.call(null,vec__46705,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__46706 = wrapper.lastChild;
var G__46707 = (level - 1);
wrapper = G__46706;
level = G__46707;
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
domina.DomContent = (function (){var obj46709 = {};return obj46709;
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
log_debug.cljs$lang$applyTo = (function (arglist__46710){
var mesg = cljs.core.seq(arglist__46710);
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
log.cljs$lang$applyTo = (function (arglist__46711){
var mesg = cljs.core.seq(arglist__46711);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__46712){
var contents = cljs.core.seq(arglist__46712);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__46713_SHARP_){return p1__46713_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__46714_SHARP_,p2__46715_SHARP_){return goog.dom.insertChildAt(p1__46714_SHARP_,p2__46715_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__46717_SHARP_,p2__46716_SHARP_){return goog.dom.insertSiblingBefore(p2__46716_SHARP_,p1__46717_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__46719_SHARP_,p2__46718_SHARP_){return goog.dom.insertSiblingAfter(p2__46718_SHARP_,p1__46719_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__46721_SHARP_,p2__46720_SHARP_){return goog.dom.replaceNode(p2__46720_SHARP_,p1__46721_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__46726_46730 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46727_46731 = null;var count__46728_46732 = 0;var i__46729_46733 = 0;while(true){
if((i__46729_46733 < count__46728_46732))
{var n_46734 = cljs.core._nth.call(null,chunk__46727_46731,i__46729_46733);goog.style.setStyle(n_46734,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46735 = seq__46726_46730;
var G__46736 = chunk__46727_46731;
var G__46737 = count__46728_46732;
var G__46738 = (i__46729_46733 + 1);
seq__46726_46730 = G__46735;
chunk__46727_46731 = G__46736;
count__46728_46732 = G__46737;
i__46729_46733 = G__46738;
continue;
}
} else
{var temp__4092__auto___46739 = cljs.core.seq.call(null,seq__46726_46730);if(temp__4092__auto___46739)
{var seq__46726_46740__$1 = temp__4092__auto___46739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46726_46740__$1))
{var c__8974__auto___46741 = cljs.core.chunk_first.call(null,seq__46726_46740__$1);{
var G__46742 = cljs.core.chunk_rest.call(null,seq__46726_46740__$1);
var G__46743 = c__8974__auto___46741;
var G__46744 = cljs.core.count.call(null,c__8974__auto___46741);
var G__46745 = 0;
seq__46726_46730 = G__46742;
chunk__46727_46731 = G__46743;
count__46728_46732 = G__46744;
i__46729_46733 = G__46745;
continue;
}
} else
{var n_46746 = cljs.core.first.call(null,seq__46726_46740__$1);goog.style.setStyle(n_46746,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46747 = cljs.core.next.call(null,seq__46726_46740__$1);
var G__46748 = null;
var G__46749 = 0;
var G__46750 = 0;
seq__46726_46730 = G__46747;
chunk__46727_46731 = G__46748;
count__46728_46732 = G__46749;
i__46729_46733 = G__46750;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__46751){
var content = cljs.core.first(arglist__46751);
arglist__46751 = cljs.core.next(arglist__46751);
var name = cljs.core.first(arglist__46751);
var value = cljs.core.rest(arglist__46751);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__46756_46760 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46757_46761 = null;var count__46758_46762 = 0;var i__46759_46763 = 0;while(true){
if((i__46759_46763 < count__46758_46762))
{var n_46764 = cljs.core._nth.call(null,chunk__46757_46761,i__46759_46763);n_46764.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46765 = seq__46756_46760;
var G__46766 = chunk__46757_46761;
var G__46767 = count__46758_46762;
var G__46768 = (i__46759_46763 + 1);
seq__46756_46760 = G__46765;
chunk__46757_46761 = G__46766;
count__46758_46762 = G__46767;
i__46759_46763 = G__46768;
continue;
}
} else
{var temp__4092__auto___46769 = cljs.core.seq.call(null,seq__46756_46760);if(temp__4092__auto___46769)
{var seq__46756_46770__$1 = temp__4092__auto___46769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46756_46770__$1))
{var c__8974__auto___46771 = cljs.core.chunk_first.call(null,seq__46756_46770__$1);{
var G__46772 = cljs.core.chunk_rest.call(null,seq__46756_46770__$1);
var G__46773 = c__8974__auto___46771;
var G__46774 = cljs.core.count.call(null,c__8974__auto___46771);
var G__46775 = 0;
seq__46756_46760 = G__46772;
chunk__46757_46761 = G__46773;
count__46758_46762 = G__46774;
i__46759_46763 = G__46775;
continue;
}
} else
{var n_46776 = cljs.core.first.call(null,seq__46756_46770__$1);n_46776.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__46777 = cljs.core.next.call(null,seq__46756_46770__$1);
var G__46778 = null;
var G__46779 = 0;
var G__46780 = 0;
seq__46756_46760 = G__46777;
chunk__46757_46761 = G__46778;
count__46758_46762 = G__46779;
i__46759_46763 = G__46780;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__46781){
var content = cljs.core.first(arglist__46781);
arglist__46781 = cljs.core.next(arglist__46781);
var name = cljs.core.first(arglist__46781);
var value = cljs.core.rest(arglist__46781);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__46786_46790 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46787_46791 = null;var count__46788_46792 = 0;var i__46789_46793 = 0;while(true){
if((i__46789_46793 < count__46788_46792))
{var n_46794 = cljs.core._nth.call(null,chunk__46787_46791,i__46789_46793);n_46794.removeAttribute(cljs.core.name.call(null,name));
{
var G__46795 = seq__46786_46790;
var G__46796 = chunk__46787_46791;
var G__46797 = count__46788_46792;
var G__46798 = (i__46789_46793 + 1);
seq__46786_46790 = G__46795;
chunk__46787_46791 = G__46796;
count__46788_46792 = G__46797;
i__46789_46793 = G__46798;
continue;
}
} else
{var temp__4092__auto___46799 = cljs.core.seq.call(null,seq__46786_46790);if(temp__4092__auto___46799)
{var seq__46786_46800__$1 = temp__4092__auto___46799;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46786_46800__$1))
{var c__8974__auto___46801 = cljs.core.chunk_first.call(null,seq__46786_46800__$1);{
var G__46802 = cljs.core.chunk_rest.call(null,seq__46786_46800__$1);
var G__46803 = c__8974__auto___46801;
var G__46804 = cljs.core.count.call(null,c__8974__auto___46801);
var G__46805 = 0;
seq__46786_46790 = G__46802;
chunk__46787_46791 = G__46803;
count__46788_46792 = G__46804;
i__46789_46793 = G__46805;
continue;
}
} else
{var n_46806 = cljs.core.first.call(null,seq__46786_46800__$1);n_46806.removeAttribute(cljs.core.name.call(null,name));
{
var G__46807 = cljs.core.next.call(null,seq__46786_46800__$1);
var G__46808 = null;
var G__46809 = 0;
var G__46810 = 0;
seq__46786_46790 = G__46807;
chunk__46787_46791 = G__46808;
count__46788_46792 = G__46809;
i__46789_46793 = G__46810;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__46812 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__46812,0,null);var v = cljs.core.nth.call(null,vec__46812,1,null);if(cljs.core.truth_((function (){var and__8233__auto__ = k;if(cljs.core.truth_(and__8233__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__46813_SHARP_){var attr = attrs__$1.item(p1__46813_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__46820_46826 = cljs.core.seq.call(null,styles);var chunk__46821_46827 = null;var count__46822_46828 = 0;var i__46823_46829 = 0;while(true){
if((i__46823_46829 < count__46822_46828))
{var vec__46824_46830 = cljs.core._nth.call(null,chunk__46821_46827,i__46823_46829);var name_46831 = cljs.core.nth.call(null,vec__46824_46830,0,null);var value_46832 = cljs.core.nth.call(null,vec__46824_46830,1,null);domina.set_style_BANG_.call(null,content,name_46831,value_46832);
{
var G__46833 = seq__46820_46826;
var G__46834 = chunk__46821_46827;
var G__46835 = count__46822_46828;
var G__46836 = (i__46823_46829 + 1);
seq__46820_46826 = G__46833;
chunk__46821_46827 = G__46834;
count__46822_46828 = G__46835;
i__46823_46829 = G__46836;
continue;
}
} else
{var temp__4092__auto___46837 = cljs.core.seq.call(null,seq__46820_46826);if(temp__4092__auto___46837)
{var seq__46820_46838__$1 = temp__4092__auto___46837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46820_46838__$1))
{var c__8974__auto___46839 = cljs.core.chunk_first.call(null,seq__46820_46838__$1);{
var G__46840 = cljs.core.chunk_rest.call(null,seq__46820_46838__$1);
var G__46841 = c__8974__auto___46839;
var G__46842 = cljs.core.count.call(null,c__8974__auto___46839);
var G__46843 = 0;
seq__46820_46826 = G__46840;
chunk__46821_46827 = G__46841;
count__46822_46828 = G__46842;
i__46823_46829 = G__46843;
continue;
}
} else
{var vec__46825_46844 = cljs.core.first.call(null,seq__46820_46838__$1);var name_46845 = cljs.core.nth.call(null,vec__46825_46844,0,null);var value_46846 = cljs.core.nth.call(null,vec__46825_46844,1,null);domina.set_style_BANG_.call(null,content,name_46845,value_46846);
{
var G__46847 = cljs.core.next.call(null,seq__46820_46838__$1);
var G__46848 = null;
var G__46849 = 0;
var G__46850 = 0;
seq__46820_46826 = G__46847;
chunk__46821_46827 = G__46848;
count__46822_46828 = G__46849;
i__46823_46829 = G__46850;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__46857_46863 = cljs.core.seq.call(null,attrs);var chunk__46858_46864 = null;var count__46859_46865 = 0;var i__46860_46866 = 0;while(true){
if((i__46860_46866 < count__46859_46865))
{var vec__46861_46867 = cljs.core._nth.call(null,chunk__46858_46864,i__46860_46866);var name_46868 = cljs.core.nth.call(null,vec__46861_46867,0,null);var value_46869 = cljs.core.nth.call(null,vec__46861_46867,1,null);domina.set_attr_BANG_.call(null,content,name_46868,value_46869);
{
var G__46870 = seq__46857_46863;
var G__46871 = chunk__46858_46864;
var G__46872 = count__46859_46865;
var G__46873 = (i__46860_46866 + 1);
seq__46857_46863 = G__46870;
chunk__46858_46864 = G__46871;
count__46859_46865 = G__46872;
i__46860_46866 = G__46873;
continue;
}
} else
{var temp__4092__auto___46874 = cljs.core.seq.call(null,seq__46857_46863);if(temp__4092__auto___46874)
{var seq__46857_46875__$1 = temp__4092__auto___46874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46857_46875__$1))
{var c__8974__auto___46876 = cljs.core.chunk_first.call(null,seq__46857_46875__$1);{
var G__46877 = cljs.core.chunk_rest.call(null,seq__46857_46875__$1);
var G__46878 = c__8974__auto___46876;
var G__46879 = cljs.core.count.call(null,c__8974__auto___46876);
var G__46880 = 0;
seq__46857_46863 = G__46877;
chunk__46858_46864 = G__46878;
count__46859_46865 = G__46879;
i__46860_46866 = G__46880;
continue;
}
} else
{var vec__46862_46881 = cljs.core.first.call(null,seq__46857_46875__$1);var name_46882 = cljs.core.nth.call(null,vec__46862_46881,0,null);var value_46883 = cljs.core.nth.call(null,vec__46862_46881,1,null);domina.set_attr_BANG_.call(null,content,name_46882,value_46883);
{
var G__46884 = cljs.core.next.call(null,seq__46857_46875__$1);
var G__46885 = null;
var G__46886 = 0;
var G__46887 = 0;
seq__46857_46863 = G__46884;
chunk__46858_46864 = G__46885;
count__46859_46865 = G__46886;
i__46860_46866 = G__46887;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__46892_46896 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46893_46897 = null;var count__46894_46898 = 0;var i__46895_46899 = 0;while(true){
if((i__46895_46899 < count__46894_46898))
{var node_46900 = cljs.core._nth.call(null,chunk__46893_46897,i__46895_46899);goog.dom.classes.add(node_46900,class$);
{
var G__46901 = seq__46892_46896;
var G__46902 = chunk__46893_46897;
var G__46903 = count__46894_46898;
var G__46904 = (i__46895_46899 + 1);
seq__46892_46896 = G__46901;
chunk__46893_46897 = G__46902;
count__46894_46898 = G__46903;
i__46895_46899 = G__46904;
continue;
}
} else
{var temp__4092__auto___46905 = cljs.core.seq.call(null,seq__46892_46896);if(temp__4092__auto___46905)
{var seq__46892_46906__$1 = temp__4092__auto___46905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46892_46906__$1))
{var c__8974__auto___46907 = cljs.core.chunk_first.call(null,seq__46892_46906__$1);{
var G__46908 = cljs.core.chunk_rest.call(null,seq__46892_46906__$1);
var G__46909 = c__8974__auto___46907;
var G__46910 = cljs.core.count.call(null,c__8974__auto___46907);
var G__46911 = 0;
seq__46892_46896 = G__46908;
chunk__46893_46897 = G__46909;
count__46894_46898 = G__46910;
i__46895_46899 = G__46911;
continue;
}
} else
{var node_46912 = cljs.core.first.call(null,seq__46892_46906__$1);goog.dom.classes.add(node_46912,class$);
{
var G__46913 = cljs.core.next.call(null,seq__46892_46906__$1);
var G__46914 = null;
var G__46915 = 0;
var G__46916 = 0;
seq__46892_46896 = G__46913;
chunk__46893_46897 = G__46914;
count__46894_46898 = G__46915;
i__46895_46899 = G__46916;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__46921_46925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46922_46926 = null;var count__46923_46927 = 0;var i__46924_46928 = 0;while(true){
if((i__46924_46928 < count__46923_46927))
{var node_46929 = cljs.core._nth.call(null,chunk__46922_46926,i__46924_46928);goog.dom.classes.remove(node_46929,class$);
{
var G__46930 = seq__46921_46925;
var G__46931 = chunk__46922_46926;
var G__46932 = count__46923_46927;
var G__46933 = (i__46924_46928 + 1);
seq__46921_46925 = G__46930;
chunk__46922_46926 = G__46931;
count__46923_46927 = G__46932;
i__46924_46928 = G__46933;
continue;
}
} else
{var temp__4092__auto___46934 = cljs.core.seq.call(null,seq__46921_46925);if(temp__4092__auto___46934)
{var seq__46921_46935__$1 = temp__4092__auto___46934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46921_46935__$1))
{var c__8974__auto___46936 = cljs.core.chunk_first.call(null,seq__46921_46935__$1);{
var G__46937 = cljs.core.chunk_rest.call(null,seq__46921_46935__$1);
var G__46938 = c__8974__auto___46936;
var G__46939 = cljs.core.count.call(null,c__8974__auto___46936);
var G__46940 = 0;
seq__46921_46925 = G__46937;
chunk__46922_46926 = G__46938;
count__46923_46927 = G__46939;
i__46924_46928 = G__46940;
continue;
}
} else
{var node_46941 = cljs.core.first.call(null,seq__46921_46935__$1);goog.dom.classes.remove(node_46941,class$);
{
var G__46942 = cljs.core.next.call(null,seq__46921_46935__$1);
var G__46943 = null;
var G__46944 = 0;
var G__46945 = 0;
seq__46921_46925 = G__46942;
chunk__46922_46926 = G__46943;
count__46923_46927 = G__46944;
i__46924_46928 = G__46945;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__46950_46954 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46951_46955 = null;var count__46952_46956 = 0;var i__46953_46957 = 0;while(true){
if((i__46953_46957 < count__46952_46956))
{var node_46958 = cljs.core._nth.call(null,chunk__46951_46955,i__46953_46957);goog.dom.classes.toggle(node_46958,class$);
{
var G__46959 = seq__46950_46954;
var G__46960 = chunk__46951_46955;
var G__46961 = count__46952_46956;
var G__46962 = (i__46953_46957 + 1);
seq__46950_46954 = G__46959;
chunk__46951_46955 = G__46960;
count__46952_46956 = G__46961;
i__46953_46957 = G__46962;
continue;
}
} else
{var temp__4092__auto___46963 = cljs.core.seq.call(null,seq__46950_46954);if(temp__4092__auto___46963)
{var seq__46950_46964__$1 = temp__4092__auto___46963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46950_46964__$1))
{var c__8974__auto___46965 = cljs.core.chunk_first.call(null,seq__46950_46964__$1);{
var G__46966 = cljs.core.chunk_rest.call(null,seq__46950_46964__$1);
var G__46967 = c__8974__auto___46965;
var G__46968 = cljs.core.count.call(null,c__8974__auto___46965);
var G__46969 = 0;
seq__46950_46954 = G__46966;
chunk__46951_46955 = G__46967;
count__46952_46956 = G__46968;
i__46953_46957 = G__46969;
continue;
}
} else
{var node_46970 = cljs.core.first.call(null,seq__46950_46964__$1);goog.dom.classes.toggle(node_46970,class$);
{
var G__46971 = cljs.core.next.call(null,seq__46950_46964__$1);
var G__46972 = null;
var G__46973 = 0;
var G__46974 = 0;
seq__46950_46954 = G__46971;
chunk__46951_46955 = G__46972;
count__46952_46956 = G__46973;
i__46953_46957 = G__46974;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_46983__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__46979_46984 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46980_46985 = null;var count__46981_46986 = 0;var i__46982_46987 = 0;while(true){
if((i__46982_46987 < count__46981_46986))
{var node_46988 = cljs.core._nth.call(null,chunk__46980_46985,i__46982_46987);goog.dom.classes.set(node_46988,classes_46983__$1);
{
var G__46989 = seq__46979_46984;
var G__46990 = chunk__46980_46985;
var G__46991 = count__46981_46986;
var G__46992 = (i__46982_46987 + 1);
seq__46979_46984 = G__46989;
chunk__46980_46985 = G__46990;
count__46981_46986 = G__46991;
i__46982_46987 = G__46992;
continue;
}
} else
{var temp__4092__auto___46993 = cljs.core.seq.call(null,seq__46979_46984);if(temp__4092__auto___46993)
{var seq__46979_46994__$1 = temp__4092__auto___46993;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46979_46994__$1))
{var c__8974__auto___46995 = cljs.core.chunk_first.call(null,seq__46979_46994__$1);{
var G__46996 = cljs.core.chunk_rest.call(null,seq__46979_46994__$1);
var G__46997 = c__8974__auto___46995;
var G__46998 = cljs.core.count.call(null,c__8974__auto___46995);
var G__46999 = 0;
seq__46979_46984 = G__46996;
chunk__46980_46985 = G__46997;
count__46981_46986 = G__46998;
i__46982_46987 = G__46999;
continue;
}
} else
{var node_47000 = cljs.core.first.call(null,seq__46979_46994__$1);goog.dom.classes.set(node_47000,classes_46983__$1);
{
var G__47001 = cljs.core.next.call(null,seq__46979_46994__$1);
var G__47002 = null;
var G__47003 = 0;
var G__47004 = 0;
seq__46979_46984 = G__47001;
chunk__46980_46985 = G__47002;
count__46981_46986 = G__47003;
i__46982_46987 = G__47004;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__47009_47013 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47010_47014 = null;var count__47011_47015 = 0;var i__47012_47016 = 0;while(true){
if((i__47012_47016 < count__47011_47015))
{var node_47017 = cljs.core._nth.call(null,chunk__47010_47014,i__47012_47016);goog.dom.setTextContent(node_47017,value);
{
var G__47018 = seq__47009_47013;
var G__47019 = chunk__47010_47014;
var G__47020 = count__47011_47015;
var G__47021 = (i__47012_47016 + 1);
seq__47009_47013 = G__47018;
chunk__47010_47014 = G__47019;
count__47011_47015 = G__47020;
i__47012_47016 = G__47021;
continue;
}
} else
{var temp__4092__auto___47022 = cljs.core.seq.call(null,seq__47009_47013);if(temp__4092__auto___47022)
{var seq__47009_47023__$1 = temp__4092__auto___47022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47009_47023__$1))
{var c__8974__auto___47024 = cljs.core.chunk_first.call(null,seq__47009_47023__$1);{
var G__47025 = cljs.core.chunk_rest.call(null,seq__47009_47023__$1);
var G__47026 = c__8974__auto___47024;
var G__47027 = cljs.core.count.call(null,c__8974__auto___47024);
var G__47028 = 0;
seq__47009_47013 = G__47025;
chunk__47010_47014 = G__47026;
count__47011_47015 = G__47027;
i__47012_47016 = G__47028;
continue;
}
} else
{var node_47029 = cljs.core.first.call(null,seq__47009_47023__$1);goog.dom.setTextContent(node_47029,value);
{
var G__47030 = cljs.core.next.call(null,seq__47009_47023__$1);
var G__47031 = null;
var G__47032 = 0;
var G__47033 = 0;
seq__47009_47013 = G__47030;
chunk__47010_47014 = G__47031;
count__47011_47015 = G__47032;
i__47012_47016 = G__47033;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__47038_47042 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47039_47043 = null;var count__47040_47044 = 0;var i__47041_47045 = 0;while(true){
if((i__47041_47045 < count__47040_47044))
{var node_47046 = cljs.core._nth.call(null,chunk__47039_47043,i__47041_47045);goog.dom.forms.setValue(node_47046,value);
{
var G__47047 = seq__47038_47042;
var G__47048 = chunk__47039_47043;
var G__47049 = count__47040_47044;
var G__47050 = (i__47041_47045 + 1);
seq__47038_47042 = G__47047;
chunk__47039_47043 = G__47048;
count__47040_47044 = G__47049;
i__47041_47045 = G__47050;
continue;
}
} else
{var temp__4092__auto___47051 = cljs.core.seq.call(null,seq__47038_47042);if(temp__4092__auto___47051)
{var seq__47038_47052__$1 = temp__4092__auto___47051;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47038_47052__$1))
{var c__8974__auto___47053 = cljs.core.chunk_first.call(null,seq__47038_47052__$1);{
var G__47054 = cljs.core.chunk_rest.call(null,seq__47038_47052__$1);
var G__47055 = c__8974__auto___47053;
var G__47056 = cljs.core.count.call(null,c__8974__auto___47053);
var G__47057 = 0;
seq__47038_47042 = G__47054;
chunk__47039_47043 = G__47055;
count__47040_47044 = G__47056;
i__47041_47045 = G__47057;
continue;
}
} else
{var node_47058 = cljs.core.first.call(null,seq__47038_47052__$1);goog.dom.forms.setValue(node_47058,value);
{
var G__47059 = cljs.core.next.call(null,seq__47038_47052__$1);
var G__47060 = null;
var G__47061 = 0;
var G__47062 = 0;
seq__47038_47042 = G__47059;
chunk__47039_47043 = G__47060;
count__47040_47044 = G__47061;
i__47041_47045 = G__47062;
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
{var value_47073 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__47069_47074 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47070_47075 = null;var count__47071_47076 = 0;var i__47072_47077 = 0;while(true){
if((i__47072_47077 < count__47071_47076))
{var node_47078 = cljs.core._nth.call(null,chunk__47070_47075,i__47072_47077);node_47078.innerHTML = value_47073;
{
var G__47079 = seq__47069_47074;
var G__47080 = chunk__47070_47075;
var G__47081 = count__47071_47076;
var G__47082 = (i__47072_47077 + 1);
seq__47069_47074 = G__47079;
chunk__47070_47075 = G__47080;
count__47071_47076 = G__47081;
i__47072_47077 = G__47082;
continue;
}
} else
{var temp__4092__auto___47083 = cljs.core.seq.call(null,seq__47069_47074);if(temp__4092__auto___47083)
{var seq__47069_47084__$1 = temp__4092__auto___47083;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47069_47084__$1))
{var c__8974__auto___47085 = cljs.core.chunk_first.call(null,seq__47069_47084__$1);{
var G__47086 = cljs.core.chunk_rest.call(null,seq__47069_47084__$1);
var G__47087 = c__8974__auto___47085;
var G__47088 = cljs.core.count.call(null,c__8974__auto___47085);
var G__47089 = 0;
seq__47069_47074 = G__47086;
chunk__47070_47075 = G__47087;
count__47071_47076 = G__47088;
i__47072_47077 = G__47089;
continue;
}
} else
{var node_47090 = cljs.core.first.call(null,seq__47069_47084__$1);node_47090.innerHTML = value_47073;
{
var G__47091 = cljs.core.next.call(null,seq__47069_47084__$1);
var G__47092 = null;
var G__47093 = 0;
var G__47094 = 0;
seq__47069_47074 = G__47091;
chunk__47070_47075 = G__47092;
count__47071_47076 = G__47093;
i__47072_47077 = G__47094;
continue;
}
}
} else
{}
}
break;
}
}catch (e47068){if((e47068 instanceof Error))
{var e_47095 = e47068;domina.replace_children_BANG_.call(null,content,value_47073);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47068;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__47102_47106 = cljs.core.seq.call(null,children);var chunk__47103_47107 = null;var count__47104_47108 = 0;var i__47105_47109 = 0;while(true){
if((i__47105_47109 < count__47104_47108))
{var child_47110 = cljs.core._nth.call(null,chunk__47103_47107,i__47105_47109);frag.appendChild(child_47110);
{
var G__47111 = seq__47102_47106;
var G__47112 = chunk__47103_47107;
var G__47113 = count__47104_47108;
var G__47114 = (i__47105_47109 + 1);
seq__47102_47106 = G__47111;
chunk__47103_47107 = G__47112;
count__47104_47108 = G__47113;
i__47105_47109 = G__47114;
continue;
}
} else
{var temp__4092__auto___47115 = cljs.core.seq.call(null,seq__47102_47106);if(temp__4092__auto___47115)
{var seq__47102_47116__$1 = temp__4092__auto___47115;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47102_47116__$1))
{var c__8974__auto___47117 = cljs.core.chunk_first.call(null,seq__47102_47116__$1);{
var G__47118 = cljs.core.chunk_rest.call(null,seq__47102_47116__$1);
var G__47119 = c__8974__auto___47117;
var G__47120 = cljs.core.count.call(null,c__8974__auto___47117);
var G__47121 = 0;
seq__47102_47106 = G__47118;
chunk__47103_47107 = G__47119;
count__47104_47108 = G__47120;
i__47105_47109 = G__47121;
continue;
}
} else
{var child_47122 = cljs.core.first.call(null,seq__47102_47116__$1);frag.appendChild(child_47122);
{
var G__47123 = cljs.core.next.call(null,seq__47102_47116__$1);
var G__47124 = null;
var G__47125 = 0;
var G__47126 = 0;
seq__47102_47106 = G__47123;
chunk__47103_47107 = G__47124;
count__47104_47108 = G__47125;
i__47105_47109 = G__47126;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__47096_SHARP_,p2__47097_SHARP_){return f.call(null,p1__47096_SHARP_,p2__47097_SHARP_);
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
{if((function (){var G__47128 = list_thing;if(G__47128)
{var bit__8876__auto__ = (G__47128.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__47128.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47128.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47128);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47128);
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
{if((function (){var G__47129 = content;if(G__47129)
{var bit__8876__auto__ = (G__47129.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__47129.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47129.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47129);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47129);
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
{if((function (){var G__47130 = content;if(G__47130)
{var bit__8876__auto__ = (G__47130.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8876__auto__) || (G__47130.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47130.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47130);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47130);
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