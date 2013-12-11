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
var opt_wrapper_47277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_47278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_47279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_47278,table_section_wrapper_47278,opt_wrapper_47277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_47279,table_section_wrapper_47278,cell_wrapper_47279,opt_wrapper_47277,table_section_wrapper_47278,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_47278]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__15171__auto__ = div.firstChild;if(cljs.core.truth_(and__15171__auto__))
{return div.firstChild.childNodes;
} else
{return and__15171__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__47284 = cljs.core.seq.call(null,tbody);var chunk__47285 = null;var count__47286 = 0;var i__47287 = 0;while(true){
if((i__47287 < count__47286))
{var child = cljs.core._nth.call(null,chunk__47285,i__47287);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__47288 = seq__47284;
var G__47289 = chunk__47285;
var G__47290 = count__47286;
var G__47291 = (i__47287 + 1);
seq__47284 = G__47288;
chunk__47285 = G__47289;
count__47286 = G__47290;
i__47287 = G__47291;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq.call(null,seq__47284);if(temp__4098__auto__)
{var seq__47284__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47284__$1))
{var c__15907__auto__ = cljs.core.chunk_first.call(null,seq__47284__$1);{
var G__47292 = cljs.core.chunk_rest.call(null,seq__47284__$1);
var G__47293 = c__15907__auto__;
var G__47294 = cljs.core.count.call(null,c__15907__auto__);
var G__47295 = 0;
seq__47284 = G__47292;
chunk__47285 = G__47293;
count__47286 = G__47294;
i__47287 = G__47295;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__47284__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__47296 = cljs.core.next.call(null,seq__47284__$1);
var G__47297 = null;
var G__47298 = 0;
var G__47299 = 0;
seq__47284 = G__47296;
chunk__47285 = G__47297;
count__47286 = G__47298;
i__47287 = G__47299;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__47301 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__47301,0,null);var start_wrap = cljs.core.nth.call(null,vec__47301,1,null);var end_wrap = cljs.core.nth.call(null,vec__47301,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__47302 = wrapper.lastChild;
var G__47303 = (level - 1);
wrapper = G__47302;
level = G__47303;
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
if(cljs.core.truth_((function (){var and__15171__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__15171__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__15171__auto__;
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
domina.DomContent = (function (){var obj47305 = {};return obj47305;
})();
domina.nodes = (function nodes(content){if((function (){var and__15171__auto__ = content;if(and__15171__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__15171__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__15786__auto__ = (((content == null))?null:content);return (function (){var or__15183__auto__ = (domina.nodes[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (domina.nodes["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__15171__auto__ = nodeseq;if(and__15171__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__15171__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__15786__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__15183__auto__ = (domina.single_node[goog.typeOf(x__15786__auto__)]);if(or__15183__auto__)
{return or__15183__auto__;
} else
{var or__15183__auto____$1 = (domina.single_node["_"]);if(or__15183__auto____$1)
{return or__15183__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__15171__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__15171__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__15171__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__47306){
var mesg = cljs.core.seq(arglist__47306);
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
log.cljs$lang$applyTo = (function (arglist__47307){
var mesg = cljs.core.seq(arglist__47307);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__47308){
var contents = cljs.core.seq(arglist__47308);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__47309_SHARP_){return p1__47309_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__47310_SHARP_,p2__47311_SHARP_){return goog.dom.insertChildAt(p1__47310_SHARP_,p2__47311_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__47313_SHARP_,p2__47312_SHARP_){return goog.dom.insertSiblingBefore(p2__47312_SHARP_,p1__47313_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__47315_SHARP_,p2__47314_SHARP_){return goog.dom.insertSiblingAfter(p2__47314_SHARP_,p1__47315_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__47317_SHARP_,p2__47316_SHARP_){return goog.dom.replaceNode(p2__47316_SHARP_,p1__47317_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__47322_47326 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47323_47327 = null;var count__47324_47328 = 0;var i__47325_47329 = 0;while(true){
if((i__47325_47329 < count__47324_47328))
{var n_47330 = cljs.core._nth.call(null,chunk__47323_47327,i__47325_47329);goog.style.setStyle(n_47330,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47331 = seq__47322_47326;
var G__47332 = chunk__47323_47327;
var G__47333 = count__47324_47328;
var G__47334 = (i__47325_47329 + 1);
seq__47322_47326 = G__47331;
chunk__47323_47327 = G__47332;
count__47324_47328 = G__47333;
i__47325_47329 = G__47334;
continue;
}
} else
{var temp__4098__auto___47335 = cljs.core.seq.call(null,seq__47322_47326);if(temp__4098__auto___47335)
{var seq__47322_47336__$1 = temp__4098__auto___47335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47322_47336__$1))
{var c__15907__auto___47337 = cljs.core.chunk_first.call(null,seq__47322_47336__$1);{
var G__47338 = cljs.core.chunk_rest.call(null,seq__47322_47336__$1);
var G__47339 = c__15907__auto___47337;
var G__47340 = cljs.core.count.call(null,c__15907__auto___47337);
var G__47341 = 0;
seq__47322_47326 = G__47338;
chunk__47323_47327 = G__47339;
count__47324_47328 = G__47340;
i__47325_47329 = G__47341;
continue;
}
} else
{var n_47342 = cljs.core.first.call(null,seq__47322_47336__$1);goog.style.setStyle(n_47342,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47343 = cljs.core.next.call(null,seq__47322_47336__$1);
var G__47344 = null;
var G__47345 = 0;
var G__47346 = 0;
seq__47322_47326 = G__47343;
chunk__47323_47327 = G__47344;
count__47324_47328 = G__47345;
i__47325_47329 = G__47346;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__47347){
var content = cljs.core.first(arglist__47347);
arglist__47347 = cljs.core.next(arglist__47347);
var name = cljs.core.first(arglist__47347);
var value = cljs.core.rest(arglist__47347);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__47352_47356 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47353_47357 = null;var count__47354_47358 = 0;var i__47355_47359 = 0;while(true){
if((i__47355_47359 < count__47354_47358))
{var n_47360 = cljs.core._nth.call(null,chunk__47353_47357,i__47355_47359);n_47360.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47361 = seq__47352_47356;
var G__47362 = chunk__47353_47357;
var G__47363 = count__47354_47358;
var G__47364 = (i__47355_47359 + 1);
seq__47352_47356 = G__47361;
chunk__47353_47357 = G__47362;
count__47354_47358 = G__47363;
i__47355_47359 = G__47364;
continue;
}
} else
{var temp__4098__auto___47365 = cljs.core.seq.call(null,seq__47352_47356);if(temp__4098__auto___47365)
{var seq__47352_47366__$1 = temp__4098__auto___47365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47352_47366__$1))
{var c__15907__auto___47367 = cljs.core.chunk_first.call(null,seq__47352_47366__$1);{
var G__47368 = cljs.core.chunk_rest.call(null,seq__47352_47366__$1);
var G__47369 = c__15907__auto___47367;
var G__47370 = cljs.core.count.call(null,c__15907__auto___47367);
var G__47371 = 0;
seq__47352_47356 = G__47368;
chunk__47353_47357 = G__47369;
count__47354_47358 = G__47370;
i__47355_47359 = G__47371;
continue;
}
} else
{var n_47372 = cljs.core.first.call(null,seq__47352_47366__$1);n_47372.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__47373 = cljs.core.next.call(null,seq__47352_47366__$1);
var G__47374 = null;
var G__47375 = 0;
var G__47376 = 0;
seq__47352_47356 = G__47373;
chunk__47353_47357 = G__47374;
count__47354_47358 = G__47375;
i__47355_47359 = G__47376;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__47377){
var content = cljs.core.first(arglist__47377);
arglist__47377 = cljs.core.next(arglist__47377);
var name = cljs.core.first(arglist__47377);
var value = cljs.core.rest(arglist__47377);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__47382_47386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47383_47387 = null;var count__47384_47388 = 0;var i__47385_47389 = 0;while(true){
if((i__47385_47389 < count__47384_47388))
{var n_47390 = cljs.core._nth.call(null,chunk__47383_47387,i__47385_47389);n_47390.removeAttribute(cljs.core.name.call(null,name));
{
var G__47391 = seq__47382_47386;
var G__47392 = chunk__47383_47387;
var G__47393 = count__47384_47388;
var G__47394 = (i__47385_47389 + 1);
seq__47382_47386 = G__47391;
chunk__47383_47387 = G__47392;
count__47384_47388 = G__47393;
i__47385_47389 = G__47394;
continue;
}
} else
{var temp__4098__auto___47395 = cljs.core.seq.call(null,seq__47382_47386);if(temp__4098__auto___47395)
{var seq__47382_47396__$1 = temp__4098__auto___47395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47382_47396__$1))
{var c__15907__auto___47397 = cljs.core.chunk_first.call(null,seq__47382_47396__$1);{
var G__47398 = cljs.core.chunk_rest.call(null,seq__47382_47396__$1);
var G__47399 = c__15907__auto___47397;
var G__47400 = cljs.core.count.call(null,c__15907__auto___47397);
var G__47401 = 0;
seq__47382_47386 = G__47398;
chunk__47383_47387 = G__47399;
count__47384_47388 = G__47400;
i__47385_47389 = G__47401;
continue;
}
} else
{var n_47402 = cljs.core.first.call(null,seq__47382_47396__$1);n_47402.removeAttribute(cljs.core.name.call(null,name));
{
var G__47403 = cljs.core.next.call(null,seq__47382_47396__$1);
var G__47404 = null;
var G__47405 = 0;
var G__47406 = 0;
seq__47382_47386 = G__47403;
chunk__47383_47387 = G__47404;
count__47384_47388 = G__47405;
i__47385_47389 = G__47406;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__47408 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__47408,0,null);var v = cljs.core.nth.call(null,vec__47408,1,null);if(cljs.core.truth_((function (){var and__15171__auto__ = k;if(cljs.core.truth_(and__15171__auto__))
{return v;
} else
{return and__15171__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__47409_SHARP_){var attr = attrs__$1.item(p1__47409_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__47416_47422 = cljs.core.seq.call(null,styles);var chunk__47417_47423 = null;var count__47418_47424 = 0;var i__47419_47425 = 0;while(true){
if((i__47419_47425 < count__47418_47424))
{var vec__47420_47426 = cljs.core._nth.call(null,chunk__47417_47423,i__47419_47425);var name_47427 = cljs.core.nth.call(null,vec__47420_47426,0,null);var value_47428 = cljs.core.nth.call(null,vec__47420_47426,1,null);domina.set_style_BANG_.call(null,content,name_47427,value_47428);
{
var G__47429 = seq__47416_47422;
var G__47430 = chunk__47417_47423;
var G__47431 = count__47418_47424;
var G__47432 = (i__47419_47425 + 1);
seq__47416_47422 = G__47429;
chunk__47417_47423 = G__47430;
count__47418_47424 = G__47431;
i__47419_47425 = G__47432;
continue;
}
} else
{var temp__4098__auto___47433 = cljs.core.seq.call(null,seq__47416_47422);if(temp__4098__auto___47433)
{var seq__47416_47434__$1 = temp__4098__auto___47433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47416_47434__$1))
{var c__15907__auto___47435 = cljs.core.chunk_first.call(null,seq__47416_47434__$1);{
var G__47436 = cljs.core.chunk_rest.call(null,seq__47416_47434__$1);
var G__47437 = c__15907__auto___47435;
var G__47438 = cljs.core.count.call(null,c__15907__auto___47435);
var G__47439 = 0;
seq__47416_47422 = G__47436;
chunk__47417_47423 = G__47437;
count__47418_47424 = G__47438;
i__47419_47425 = G__47439;
continue;
}
} else
{var vec__47421_47440 = cljs.core.first.call(null,seq__47416_47434__$1);var name_47441 = cljs.core.nth.call(null,vec__47421_47440,0,null);var value_47442 = cljs.core.nth.call(null,vec__47421_47440,1,null);domina.set_style_BANG_.call(null,content,name_47441,value_47442);
{
var G__47443 = cljs.core.next.call(null,seq__47416_47434__$1);
var G__47444 = null;
var G__47445 = 0;
var G__47446 = 0;
seq__47416_47422 = G__47443;
chunk__47417_47423 = G__47444;
count__47418_47424 = G__47445;
i__47419_47425 = G__47446;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__47453_47459 = cljs.core.seq.call(null,attrs);var chunk__47454_47460 = null;var count__47455_47461 = 0;var i__47456_47462 = 0;while(true){
if((i__47456_47462 < count__47455_47461))
{var vec__47457_47463 = cljs.core._nth.call(null,chunk__47454_47460,i__47456_47462);var name_47464 = cljs.core.nth.call(null,vec__47457_47463,0,null);var value_47465 = cljs.core.nth.call(null,vec__47457_47463,1,null);domina.set_attr_BANG_.call(null,content,name_47464,value_47465);
{
var G__47466 = seq__47453_47459;
var G__47467 = chunk__47454_47460;
var G__47468 = count__47455_47461;
var G__47469 = (i__47456_47462 + 1);
seq__47453_47459 = G__47466;
chunk__47454_47460 = G__47467;
count__47455_47461 = G__47468;
i__47456_47462 = G__47469;
continue;
}
} else
{var temp__4098__auto___47470 = cljs.core.seq.call(null,seq__47453_47459);if(temp__4098__auto___47470)
{var seq__47453_47471__$1 = temp__4098__auto___47470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47453_47471__$1))
{var c__15907__auto___47472 = cljs.core.chunk_first.call(null,seq__47453_47471__$1);{
var G__47473 = cljs.core.chunk_rest.call(null,seq__47453_47471__$1);
var G__47474 = c__15907__auto___47472;
var G__47475 = cljs.core.count.call(null,c__15907__auto___47472);
var G__47476 = 0;
seq__47453_47459 = G__47473;
chunk__47454_47460 = G__47474;
count__47455_47461 = G__47475;
i__47456_47462 = G__47476;
continue;
}
} else
{var vec__47458_47477 = cljs.core.first.call(null,seq__47453_47471__$1);var name_47478 = cljs.core.nth.call(null,vec__47458_47477,0,null);var value_47479 = cljs.core.nth.call(null,vec__47458_47477,1,null);domina.set_attr_BANG_.call(null,content,name_47478,value_47479);
{
var G__47480 = cljs.core.next.call(null,seq__47453_47471__$1);
var G__47481 = null;
var G__47482 = 0;
var G__47483 = 0;
seq__47453_47459 = G__47480;
chunk__47454_47460 = G__47481;
count__47455_47461 = G__47482;
i__47456_47462 = G__47483;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__47488_47492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47489_47493 = null;var count__47490_47494 = 0;var i__47491_47495 = 0;while(true){
if((i__47491_47495 < count__47490_47494))
{var node_47496 = cljs.core._nth.call(null,chunk__47489_47493,i__47491_47495);goog.dom.classes.add(node_47496,class$);
{
var G__47497 = seq__47488_47492;
var G__47498 = chunk__47489_47493;
var G__47499 = count__47490_47494;
var G__47500 = (i__47491_47495 + 1);
seq__47488_47492 = G__47497;
chunk__47489_47493 = G__47498;
count__47490_47494 = G__47499;
i__47491_47495 = G__47500;
continue;
}
} else
{var temp__4098__auto___47501 = cljs.core.seq.call(null,seq__47488_47492);if(temp__4098__auto___47501)
{var seq__47488_47502__$1 = temp__4098__auto___47501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47488_47502__$1))
{var c__15907__auto___47503 = cljs.core.chunk_first.call(null,seq__47488_47502__$1);{
var G__47504 = cljs.core.chunk_rest.call(null,seq__47488_47502__$1);
var G__47505 = c__15907__auto___47503;
var G__47506 = cljs.core.count.call(null,c__15907__auto___47503);
var G__47507 = 0;
seq__47488_47492 = G__47504;
chunk__47489_47493 = G__47505;
count__47490_47494 = G__47506;
i__47491_47495 = G__47507;
continue;
}
} else
{var node_47508 = cljs.core.first.call(null,seq__47488_47502__$1);goog.dom.classes.add(node_47508,class$);
{
var G__47509 = cljs.core.next.call(null,seq__47488_47502__$1);
var G__47510 = null;
var G__47511 = 0;
var G__47512 = 0;
seq__47488_47492 = G__47509;
chunk__47489_47493 = G__47510;
count__47490_47494 = G__47511;
i__47491_47495 = G__47512;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__47517_47521 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47518_47522 = null;var count__47519_47523 = 0;var i__47520_47524 = 0;while(true){
if((i__47520_47524 < count__47519_47523))
{var node_47525 = cljs.core._nth.call(null,chunk__47518_47522,i__47520_47524);goog.dom.classes.remove(node_47525,class$);
{
var G__47526 = seq__47517_47521;
var G__47527 = chunk__47518_47522;
var G__47528 = count__47519_47523;
var G__47529 = (i__47520_47524 + 1);
seq__47517_47521 = G__47526;
chunk__47518_47522 = G__47527;
count__47519_47523 = G__47528;
i__47520_47524 = G__47529;
continue;
}
} else
{var temp__4098__auto___47530 = cljs.core.seq.call(null,seq__47517_47521);if(temp__4098__auto___47530)
{var seq__47517_47531__$1 = temp__4098__auto___47530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47517_47531__$1))
{var c__15907__auto___47532 = cljs.core.chunk_first.call(null,seq__47517_47531__$1);{
var G__47533 = cljs.core.chunk_rest.call(null,seq__47517_47531__$1);
var G__47534 = c__15907__auto___47532;
var G__47535 = cljs.core.count.call(null,c__15907__auto___47532);
var G__47536 = 0;
seq__47517_47521 = G__47533;
chunk__47518_47522 = G__47534;
count__47519_47523 = G__47535;
i__47520_47524 = G__47536;
continue;
}
} else
{var node_47537 = cljs.core.first.call(null,seq__47517_47531__$1);goog.dom.classes.remove(node_47537,class$);
{
var G__47538 = cljs.core.next.call(null,seq__47517_47531__$1);
var G__47539 = null;
var G__47540 = 0;
var G__47541 = 0;
seq__47517_47521 = G__47538;
chunk__47518_47522 = G__47539;
count__47519_47523 = G__47540;
i__47520_47524 = G__47541;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__47546_47550 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47547_47551 = null;var count__47548_47552 = 0;var i__47549_47553 = 0;while(true){
if((i__47549_47553 < count__47548_47552))
{var node_47554 = cljs.core._nth.call(null,chunk__47547_47551,i__47549_47553);goog.dom.classes.toggle(node_47554,class$);
{
var G__47555 = seq__47546_47550;
var G__47556 = chunk__47547_47551;
var G__47557 = count__47548_47552;
var G__47558 = (i__47549_47553 + 1);
seq__47546_47550 = G__47555;
chunk__47547_47551 = G__47556;
count__47548_47552 = G__47557;
i__47549_47553 = G__47558;
continue;
}
} else
{var temp__4098__auto___47559 = cljs.core.seq.call(null,seq__47546_47550);if(temp__4098__auto___47559)
{var seq__47546_47560__$1 = temp__4098__auto___47559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47546_47560__$1))
{var c__15907__auto___47561 = cljs.core.chunk_first.call(null,seq__47546_47560__$1);{
var G__47562 = cljs.core.chunk_rest.call(null,seq__47546_47560__$1);
var G__47563 = c__15907__auto___47561;
var G__47564 = cljs.core.count.call(null,c__15907__auto___47561);
var G__47565 = 0;
seq__47546_47550 = G__47562;
chunk__47547_47551 = G__47563;
count__47548_47552 = G__47564;
i__47549_47553 = G__47565;
continue;
}
} else
{var node_47566 = cljs.core.first.call(null,seq__47546_47560__$1);goog.dom.classes.toggle(node_47566,class$);
{
var G__47567 = cljs.core.next.call(null,seq__47546_47560__$1);
var G__47568 = null;
var G__47569 = 0;
var G__47570 = 0;
seq__47546_47550 = G__47567;
chunk__47547_47551 = G__47568;
count__47548_47552 = G__47569;
i__47549_47553 = G__47570;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_47579__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__47575_47580 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47576_47581 = null;var count__47577_47582 = 0;var i__47578_47583 = 0;while(true){
if((i__47578_47583 < count__47577_47582))
{var node_47584 = cljs.core._nth.call(null,chunk__47576_47581,i__47578_47583);goog.dom.classes.set(node_47584,classes_47579__$1);
{
var G__47585 = seq__47575_47580;
var G__47586 = chunk__47576_47581;
var G__47587 = count__47577_47582;
var G__47588 = (i__47578_47583 + 1);
seq__47575_47580 = G__47585;
chunk__47576_47581 = G__47586;
count__47577_47582 = G__47587;
i__47578_47583 = G__47588;
continue;
}
} else
{var temp__4098__auto___47589 = cljs.core.seq.call(null,seq__47575_47580);if(temp__4098__auto___47589)
{var seq__47575_47590__$1 = temp__4098__auto___47589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47575_47590__$1))
{var c__15907__auto___47591 = cljs.core.chunk_first.call(null,seq__47575_47590__$1);{
var G__47592 = cljs.core.chunk_rest.call(null,seq__47575_47590__$1);
var G__47593 = c__15907__auto___47591;
var G__47594 = cljs.core.count.call(null,c__15907__auto___47591);
var G__47595 = 0;
seq__47575_47580 = G__47592;
chunk__47576_47581 = G__47593;
count__47577_47582 = G__47594;
i__47578_47583 = G__47595;
continue;
}
} else
{var node_47596 = cljs.core.first.call(null,seq__47575_47590__$1);goog.dom.classes.set(node_47596,classes_47579__$1);
{
var G__47597 = cljs.core.next.call(null,seq__47575_47590__$1);
var G__47598 = null;
var G__47599 = 0;
var G__47600 = 0;
seq__47575_47580 = G__47597;
chunk__47576_47581 = G__47598;
count__47577_47582 = G__47599;
i__47578_47583 = G__47600;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__47605_47609 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47606_47610 = null;var count__47607_47611 = 0;var i__47608_47612 = 0;while(true){
if((i__47608_47612 < count__47607_47611))
{var node_47613 = cljs.core._nth.call(null,chunk__47606_47610,i__47608_47612);goog.dom.setTextContent(node_47613,value);
{
var G__47614 = seq__47605_47609;
var G__47615 = chunk__47606_47610;
var G__47616 = count__47607_47611;
var G__47617 = (i__47608_47612 + 1);
seq__47605_47609 = G__47614;
chunk__47606_47610 = G__47615;
count__47607_47611 = G__47616;
i__47608_47612 = G__47617;
continue;
}
} else
{var temp__4098__auto___47618 = cljs.core.seq.call(null,seq__47605_47609);if(temp__4098__auto___47618)
{var seq__47605_47619__$1 = temp__4098__auto___47618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47605_47619__$1))
{var c__15907__auto___47620 = cljs.core.chunk_first.call(null,seq__47605_47619__$1);{
var G__47621 = cljs.core.chunk_rest.call(null,seq__47605_47619__$1);
var G__47622 = c__15907__auto___47620;
var G__47623 = cljs.core.count.call(null,c__15907__auto___47620);
var G__47624 = 0;
seq__47605_47609 = G__47621;
chunk__47606_47610 = G__47622;
count__47607_47611 = G__47623;
i__47608_47612 = G__47624;
continue;
}
} else
{var node_47625 = cljs.core.first.call(null,seq__47605_47619__$1);goog.dom.setTextContent(node_47625,value);
{
var G__47626 = cljs.core.next.call(null,seq__47605_47619__$1);
var G__47627 = null;
var G__47628 = 0;
var G__47629 = 0;
seq__47605_47609 = G__47626;
chunk__47606_47610 = G__47627;
count__47607_47611 = G__47628;
i__47608_47612 = G__47629;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__47634_47638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47635_47639 = null;var count__47636_47640 = 0;var i__47637_47641 = 0;while(true){
if((i__47637_47641 < count__47636_47640))
{var node_47642 = cljs.core._nth.call(null,chunk__47635_47639,i__47637_47641);goog.dom.forms.setValue(node_47642,value);
{
var G__47643 = seq__47634_47638;
var G__47644 = chunk__47635_47639;
var G__47645 = count__47636_47640;
var G__47646 = (i__47637_47641 + 1);
seq__47634_47638 = G__47643;
chunk__47635_47639 = G__47644;
count__47636_47640 = G__47645;
i__47637_47641 = G__47646;
continue;
}
} else
{var temp__4098__auto___47647 = cljs.core.seq.call(null,seq__47634_47638);if(temp__4098__auto___47647)
{var seq__47634_47648__$1 = temp__4098__auto___47647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47634_47648__$1))
{var c__15907__auto___47649 = cljs.core.chunk_first.call(null,seq__47634_47648__$1);{
var G__47650 = cljs.core.chunk_rest.call(null,seq__47634_47648__$1);
var G__47651 = c__15907__auto___47649;
var G__47652 = cljs.core.count.call(null,c__15907__auto___47649);
var G__47653 = 0;
seq__47634_47638 = G__47650;
chunk__47635_47639 = G__47651;
count__47636_47640 = G__47652;
i__47637_47641 = G__47653;
continue;
}
} else
{var node_47654 = cljs.core.first.call(null,seq__47634_47648__$1);goog.dom.forms.setValue(node_47654,value);
{
var G__47655 = cljs.core.next.call(null,seq__47634_47648__$1);
var G__47656 = null;
var G__47657 = 0;
var G__47658 = 0;
seq__47634_47638 = G__47655;
chunk__47635_47639 = G__47656;
count__47636_47640 = G__47657;
i__47637_47641 = G__47658;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__15171__auto__ = allows_inner_html_QMARK_;if(and__15171__auto__)
{var and__15171__auto____$1 = (function (){var or__15183__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__15171__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__15171__auto____$1;
}
} else
{return and__15171__auto__;
}
})()))
{var value_47669 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__47665_47670 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__47666_47671 = null;var count__47667_47672 = 0;var i__47668_47673 = 0;while(true){
if((i__47668_47673 < count__47667_47672))
{var node_47674 = cljs.core._nth.call(null,chunk__47666_47671,i__47668_47673);node_47674.innerHTML = value_47669;
{
var G__47675 = seq__47665_47670;
var G__47676 = chunk__47666_47671;
var G__47677 = count__47667_47672;
var G__47678 = (i__47668_47673 + 1);
seq__47665_47670 = G__47675;
chunk__47666_47671 = G__47676;
count__47667_47672 = G__47677;
i__47668_47673 = G__47678;
continue;
}
} else
{var temp__4098__auto___47679 = cljs.core.seq.call(null,seq__47665_47670);if(temp__4098__auto___47679)
{var seq__47665_47680__$1 = temp__4098__auto___47679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47665_47680__$1))
{var c__15907__auto___47681 = cljs.core.chunk_first.call(null,seq__47665_47680__$1);{
var G__47682 = cljs.core.chunk_rest.call(null,seq__47665_47680__$1);
var G__47683 = c__15907__auto___47681;
var G__47684 = cljs.core.count.call(null,c__15907__auto___47681);
var G__47685 = 0;
seq__47665_47670 = G__47682;
chunk__47666_47671 = G__47683;
count__47667_47672 = G__47684;
i__47668_47673 = G__47685;
continue;
}
} else
{var node_47686 = cljs.core.first.call(null,seq__47665_47680__$1);node_47686.innerHTML = value_47669;
{
var G__47687 = cljs.core.next.call(null,seq__47665_47680__$1);
var G__47688 = null;
var G__47689 = 0;
var G__47690 = 0;
seq__47665_47670 = G__47687;
chunk__47666_47671 = G__47688;
count__47667_47672 = G__47689;
i__47668_47673 = G__47690;
continue;
}
}
} else
{}
}
break;
}
}catch (e47664){if((e47664 instanceof Error))
{var e_47691 = e47664;domina.replace_children_BANG_.call(null,content,value_47669);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47664;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__15171__auto__ = bubble;if(cljs.core.truth_(and__15171__auto__))
{return (value == null);
} else
{return and__15171__auto__;
}
})()))
{var temp__4098__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4098__auto__))
{var parent = temp__4098__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__15183__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__15183__auto__))
{return or__15183__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__47698_47702 = cljs.core.seq.call(null,children);var chunk__47699_47703 = null;var count__47700_47704 = 0;var i__47701_47705 = 0;while(true){
if((i__47701_47705 < count__47700_47704))
{var child_47706 = cljs.core._nth.call(null,chunk__47699_47703,i__47701_47705);frag.appendChild(child_47706);
{
var G__47707 = seq__47698_47702;
var G__47708 = chunk__47699_47703;
var G__47709 = count__47700_47704;
var G__47710 = (i__47701_47705 + 1);
seq__47698_47702 = G__47707;
chunk__47699_47703 = G__47708;
count__47700_47704 = G__47709;
i__47701_47705 = G__47710;
continue;
}
} else
{var temp__4098__auto___47711 = cljs.core.seq.call(null,seq__47698_47702);if(temp__4098__auto___47711)
{var seq__47698_47712__$1 = temp__4098__auto___47711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47698_47712__$1))
{var c__15907__auto___47713 = cljs.core.chunk_first.call(null,seq__47698_47712__$1);{
var G__47714 = cljs.core.chunk_rest.call(null,seq__47698_47712__$1);
var G__47715 = c__15907__auto___47713;
var G__47716 = cljs.core.count.call(null,c__15907__auto___47713);
var G__47717 = 0;
seq__47698_47702 = G__47714;
chunk__47699_47703 = G__47715;
count__47700_47704 = G__47716;
i__47701_47705 = G__47717;
continue;
}
} else
{var child_47718 = cljs.core.first.call(null,seq__47698_47712__$1);frag.appendChild(child_47718);
{
var G__47719 = cljs.core.next.call(null,seq__47698_47712__$1);
var G__47720 = null;
var G__47721 = 0;
var G__47722 = 0;
seq__47698_47702 = G__47719;
chunk__47699_47703 = G__47720;
count__47700_47704 = G__47721;
i__47701_47705 = G__47722;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__47692_SHARP_,p2__47693_SHARP_){return f.call(null,p1__47692_SHARP_,p2__47693_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__15171__auto__ = obj;if(cljs.core.truth_(and__15171__auto__))
{var and__15171__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__15171__auto____$1)
{return obj.length;
} else
{return and__15171__auto____$1;
}
} else
{return and__15171__auto__;
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
{if((function (){var G__47724 = list_thing;if(G__47724)
{var bit__15809__auto__ = (G__47724.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__15809__auto__) || (G__47724.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47724);
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
{if((function (){var G__47725 = content;if(G__47725)
{var bit__15809__auto__ = (G__47725.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__15809__auto__) || (G__47725.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47725);
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
{if((function (){var G__47726 = content;if(G__47726)
{var bit__15809__auto__ = (G__47726.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__15809__auto__) || (G__47726.cljs$core$ISeqable$))
{return true;
} else
{if((!G__47726.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__47726);
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