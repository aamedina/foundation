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
var opt_wrapper_86337 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_86338 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_86339 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_86338,table_section_wrapper_86338,opt_wrapper_86337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_86339,table_section_wrapper_86338,cell_wrapper_86339,opt_wrapper_86337,table_section_wrapper_86338,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_86338]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8216__auto__ = div.firstChild;if(cljs.core.truth_(and__8216__auto__))
{return div.firstChild.childNodes;
} else
{return and__8216__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__86344 = cljs.core.seq.call(null,tbody);var chunk__86345 = null;var count__86346 = 0;var i__86347 = 0;while(true){
if((i__86347 < count__86346))
{var child = cljs.core._nth.call(null,chunk__86345,i__86347);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__86348 = seq__86344;
var G__86349 = chunk__86345;
var G__86350 = count__86346;
var G__86351 = (i__86347 + 1);
seq__86344 = G__86348;
chunk__86345 = G__86349;
count__86346 = G__86350;
i__86347 = G__86351;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__86344);if(temp__4092__auto__)
{var seq__86344__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86344__$1))
{var c__8957__auto__ = cljs.core.chunk_first.call(null,seq__86344__$1);{
var G__86352 = cljs.core.chunk_rest.call(null,seq__86344__$1);
var G__86353 = c__8957__auto__;
var G__86354 = cljs.core.count.call(null,c__8957__auto__);
var G__86355 = 0;
seq__86344 = G__86352;
chunk__86345 = G__86353;
count__86346 = G__86354;
i__86347 = G__86355;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__86344__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__86356 = cljs.core.next.call(null,seq__86344__$1);
var G__86357 = null;
var G__86358 = 0;
var G__86359 = 0;
seq__86344 = G__86356;
chunk__86345 = G__86357;
count__86346 = G__86358;
i__86347 = G__86359;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__86361 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__86361,0,null);var start_wrap = cljs.core.nth.call(null,vec__86361,1,null);var end_wrap = cljs.core.nth.call(null,vec__86361,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__86362 = wrapper.lastChild;
var G__86363 = (level - 1);
wrapper = G__86362;
level = G__86363;
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
if(cljs.core.truth_((function (){var and__8216__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__8216__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__8216__auto__;
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
domina.DomContent = (function (){var obj86365 = {};return obj86365;
})();
domina.nodes = (function nodes(content){if((function (){var and__8216__auto__ = content;if(and__8216__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__8216__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8836__auto__ = (((content == null))?null:content);return (function (){var or__8228__auto__ = (domina.nodes[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (domina.nodes["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__8216__auto__ = nodeseq;if(and__8216__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__8216__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8836__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__8228__auto__ = (domina.single_node[goog.typeOf(x__8836__auto__)]);if(or__8228__auto__)
{return or__8228__auto__;
} else
{var or__8228__auto____$1 = (domina.single_node["_"]);if(or__8228__auto____$1)
{return or__8228__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__8216__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__8216__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__8216__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__86366){
var mesg = cljs.core.seq(arglist__86366);
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
log.cljs$lang$applyTo = (function (arglist__86367){
var mesg = cljs.core.seq(arglist__86367);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__86368){
var contents = cljs.core.seq(arglist__86368);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__86369_SHARP_){return p1__86369_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__86370_SHARP_,p2__86371_SHARP_){return goog.dom.insertChildAt(p1__86370_SHARP_,p2__86371_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__86373_SHARP_,p2__86372_SHARP_){return goog.dom.insertSiblingBefore(p2__86372_SHARP_,p1__86373_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__86375_SHARP_,p2__86374_SHARP_){return goog.dom.insertSiblingAfter(p2__86374_SHARP_,p1__86375_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__86377_SHARP_,p2__86376_SHARP_){return goog.dom.replaceNode(p2__86376_SHARP_,p1__86377_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__86382_86386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86383_86387 = null;var count__86384_86388 = 0;var i__86385_86389 = 0;while(true){
if((i__86385_86389 < count__86384_86388))
{var n_86390 = cljs.core._nth.call(null,chunk__86383_86387,i__86385_86389);goog.style.setStyle(n_86390,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__86391 = seq__86382_86386;
var G__86392 = chunk__86383_86387;
var G__86393 = count__86384_86388;
var G__86394 = (i__86385_86389 + 1);
seq__86382_86386 = G__86391;
chunk__86383_86387 = G__86392;
count__86384_86388 = G__86393;
i__86385_86389 = G__86394;
continue;
}
} else
{var temp__4092__auto___86395 = cljs.core.seq.call(null,seq__86382_86386);if(temp__4092__auto___86395)
{var seq__86382_86396__$1 = temp__4092__auto___86395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86382_86396__$1))
{var c__8957__auto___86397 = cljs.core.chunk_first.call(null,seq__86382_86396__$1);{
var G__86398 = cljs.core.chunk_rest.call(null,seq__86382_86396__$1);
var G__86399 = c__8957__auto___86397;
var G__86400 = cljs.core.count.call(null,c__8957__auto___86397);
var G__86401 = 0;
seq__86382_86386 = G__86398;
chunk__86383_86387 = G__86399;
count__86384_86388 = G__86400;
i__86385_86389 = G__86401;
continue;
}
} else
{var n_86402 = cljs.core.first.call(null,seq__86382_86396__$1);goog.style.setStyle(n_86402,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__86403 = cljs.core.next.call(null,seq__86382_86396__$1);
var G__86404 = null;
var G__86405 = 0;
var G__86406 = 0;
seq__86382_86386 = G__86403;
chunk__86383_86387 = G__86404;
count__86384_86388 = G__86405;
i__86385_86389 = G__86406;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__86407){
var content = cljs.core.first(arglist__86407);
arglist__86407 = cljs.core.next(arglist__86407);
var name = cljs.core.first(arglist__86407);
var value = cljs.core.rest(arglist__86407);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__86412_86416 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86413_86417 = null;var count__86414_86418 = 0;var i__86415_86419 = 0;while(true){
if((i__86415_86419 < count__86414_86418))
{var n_86420 = cljs.core._nth.call(null,chunk__86413_86417,i__86415_86419);n_86420.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__86421 = seq__86412_86416;
var G__86422 = chunk__86413_86417;
var G__86423 = count__86414_86418;
var G__86424 = (i__86415_86419 + 1);
seq__86412_86416 = G__86421;
chunk__86413_86417 = G__86422;
count__86414_86418 = G__86423;
i__86415_86419 = G__86424;
continue;
}
} else
{var temp__4092__auto___86425 = cljs.core.seq.call(null,seq__86412_86416);if(temp__4092__auto___86425)
{var seq__86412_86426__$1 = temp__4092__auto___86425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86412_86426__$1))
{var c__8957__auto___86427 = cljs.core.chunk_first.call(null,seq__86412_86426__$1);{
var G__86428 = cljs.core.chunk_rest.call(null,seq__86412_86426__$1);
var G__86429 = c__8957__auto___86427;
var G__86430 = cljs.core.count.call(null,c__8957__auto___86427);
var G__86431 = 0;
seq__86412_86416 = G__86428;
chunk__86413_86417 = G__86429;
count__86414_86418 = G__86430;
i__86415_86419 = G__86431;
continue;
}
} else
{var n_86432 = cljs.core.first.call(null,seq__86412_86426__$1);n_86432.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__86433 = cljs.core.next.call(null,seq__86412_86426__$1);
var G__86434 = null;
var G__86435 = 0;
var G__86436 = 0;
seq__86412_86416 = G__86433;
chunk__86413_86417 = G__86434;
count__86414_86418 = G__86435;
i__86415_86419 = G__86436;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__86437){
var content = cljs.core.first(arglist__86437);
arglist__86437 = cljs.core.next(arglist__86437);
var name = cljs.core.first(arglist__86437);
var value = cljs.core.rest(arglist__86437);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__86442_86446 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86443_86447 = null;var count__86444_86448 = 0;var i__86445_86449 = 0;while(true){
if((i__86445_86449 < count__86444_86448))
{var n_86450 = cljs.core._nth.call(null,chunk__86443_86447,i__86445_86449);n_86450.removeAttribute(cljs.core.name.call(null,name));
{
var G__86451 = seq__86442_86446;
var G__86452 = chunk__86443_86447;
var G__86453 = count__86444_86448;
var G__86454 = (i__86445_86449 + 1);
seq__86442_86446 = G__86451;
chunk__86443_86447 = G__86452;
count__86444_86448 = G__86453;
i__86445_86449 = G__86454;
continue;
}
} else
{var temp__4092__auto___86455 = cljs.core.seq.call(null,seq__86442_86446);if(temp__4092__auto___86455)
{var seq__86442_86456__$1 = temp__4092__auto___86455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86442_86456__$1))
{var c__8957__auto___86457 = cljs.core.chunk_first.call(null,seq__86442_86456__$1);{
var G__86458 = cljs.core.chunk_rest.call(null,seq__86442_86456__$1);
var G__86459 = c__8957__auto___86457;
var G__86460 = cljs.core.count.call(null,c__8957__auto___86457);
var G__86461 = 0;
seq__86442_86446 = G__86458;
chunk__86443_86447 = G__86459;
count__86444_86448 = G__86460;
i__86445_86449 = G__86461;
continue;
}
} else
{var n_86462 = cljs.core.first.call(null,seq__86442_86456__$1);n_86462.removeAttribute(cljs.core.name.call(null,name));
{
var G__86463 = cljs.core.next.call(null,seq__86442_86456__$1);
var G__86464 = null;
var G__86465 = 0;
var G__86466 = 0;
seq__86442_86446 = G__86463;
chunk__86443_86447 = G__86464;
count__86444_86448 = G__86465;
i__86445_86449 = G__86466;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__86468 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__86468,0,null);var v = cljs.core.nth.call(null,vec__86468,1,null);if(cljs.core.truth_((function (){var and__8216__auto__ = k;if(cljs.core.truth_(and__8216__auto__))
{return v;
} else
{return and__8216__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__86469_SHARP_){var attr = attrs__$1.item(p1__86469_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__86476_86482 = cljs.core.seq.call(null,styles);var chunk__86477_86483 = null;var count__86478_86484 = 0;var i__86479_86485 = 0;while(true){
if((i__86479_86485 < count__86478_86484))
{var vec__86480_86486 = cljs.core._nth.call(null,chunk__86477_86483,i__86479_86485);var name_86487 = cljs.core.nth.call(null,vec__86480_86486,0,null);var value_86488 = cljs.core.nth.call(null,vec__86480_86486,1,null);domina.set_style_BANG_.call(null,content,name_86487,value_86488);
{
var G__86489 = seq__86476_86482;
var G__86490 = chunk__86477_86483;
var G__86491 = count__86478_86484;
var G__86492 = (i__86479_86485 + 1);
seq__86476_86482 = G__86489;
chunk__86477_86483 = G__86490;
count__86478_86484 = G__86491;
i__86479_86485 = G__86492;
continue;
}
} else
{var temp__4092__auto___86493 = cljs.core.seq.call(null,seq__86476_86482);if(temp__4092__auto___86493)
{var seq__86476_86494__$1 = temp__4092__auto___86493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86476_86494__$1))
{var c__8957__auto___86495 = cljs.core.chunk_first.call(null,seq__86476_86494__$1);{
var G__86496 = cljs.core.chunk_rest.call(null,seq__86476_86494__$1);
var G__86497 = c__8957__auto___86495;
var G__86498 = cljs.core.count.call(null,c__8957__auto___86495);
var G__86499 = 0;
seq__86476_86482 = G__86496;
chunk__86477_86483 = G__86497;
count__86478_86484 = G__86498;
i__86479_86485 = G__86499;
continue;
}
} else
{var vec__86481_86500 = cljs.core.first.call(null,seq__86476_86494__$1);var name_86501 = cljs.core.nth.call(null,vec__86481_86500,0,null);var value_86502 = cljs.core.nth.call(null,vec__86481_86500,1,null);domina.set_style_BANG_.call(null,content,name_86501,value_86502);
{
var G__86503 = cljs.core.next.call(null,seq__86476_86494__$1);
var G__86504 = null;
var G__86505 = 0;
var G__86506 = 0;
seq__86476_86482 = G__86503;
chunk__86477_86483 = G__86504;
count__86478_86484 = G__86505;
i__86479_86485 = G__86506;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__86513_86519 = cljs.core.seq.call(null,attrs);var chunk__86514_86520 = null;var count__86515_86521 = 0;var i__86516_86522 = 0;while(true){
if((i__86516_86522 < count__86515_86521))
{var vec__86517_86523 = cljs.core._nth.call(null,chunk__86514_86520,i__86516_86522);var name_86524 = cljs.core.nth.call(null,vec__86517_86523,0,null);var value_86525 = cljs.core.nth.call(null,vec__86517_86523,1,null);domina.set_attr_BANG_.call(null,content,name_86524,value_86525);
{
var G__86526 = seq__86513_86519;
var G__86527 = chunk__86514_86520;
var G__86528 = count__86515_86521;
var G__86529 = (i__86516_86522 + 1);
seq__86513_86519 = G__86526;
chunk__86514_86520 = G__86527;
count__86515_86521 = G__86528;
i__86516_86522 = G__86529;
continue;
}
} else
{var temp__4092__auto___86530 = cljs.core.seq.call(null,seq__86513_86519);if(temp__4092__auto___86530)
{var seq__86513_86531__$1 = temp__4092__auto___86530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86513_86531__$1))
{var c__8957__auto___86532 = cljs.core.chunk_first.call(null,seq__86513_86531__$1);{
var G__86533 = cljs.core.chunk_rest.call(null,seq__86513_86531__$1);
var G__86534 = c__8957__auto___86532;
var G__86535 = cljs.core.count.call(null,c__8957__auto___86532);
var G__86536 = 0;
seq__86513_86519 = G__86533;
chunk__86514_86520 = G__86534;
count__86515_86521 = G__86535;
i__86516_86522 = G__86536;
continue;
}
} else
{var vec__86518_86537 = cljs.core.first.call(null,seq__86513_86531__$1);var name_86538 = cljs.core.nth.call(null,vec__86518_86537,0,null);var value_86539 = cljs.core.nth.call(null,vec__86518_86537,1,null);domina.set_attr_BANG_.call(null,content,name_86538,value_86539);
{
var G__86540 = cljs.core.next.call(null,seq__86513_86531__$1);
var G__86541 = null;
var G__86542 = 0;
var G__86543 = 0;
seq__86513_86519 = G__86540;
chunk__86514_86520 = G__86541;
count__86515_86521 = G__86542;
i__86516_86522 = G__86543;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__86548_86552 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86549_86553 = null;var count__86550_86554 = 0;var i__86551_86555 = 0;while(true){
if((i__86551_86555 < count__86550_86554))
{var node_86556 = cljs.core._nth.call(null,chunk__86549_86553,i__86551_86555);goog.dom.classes.add(node_86556,class$);
{
var G__86557 = seq__86548_86552;
var G__86558 = chunk__86549_86553;
var G__86559 = count__86550_86554;
var G__86560 = (i__86551_86555 + 1);
seq__86548_86552 = G__86557;
chunk__86549_86553 = G__86558;
count__86550_86554 = G__86559;
i__86551_86555 = G__86560;
continue;
}
} else
{var temp__4092__auto___86561 = cljs.core.seq.call(null,seq__86548_86552);if(temp__4092__auto___86561)
{var seq__86548_86562__$1 = temp__4092__auto___86561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86548_86562__$1))
{var c__8957__auto___86563 = cljs.core.chunk_first.call(null,seq__86548_86562__$1);{
var G__86564 = cljs.core.chunk_rest.call(null,seq__86548_86562__$1);
var G__86565 = c__8957__auto___86563;
var G__86566 = cljs.core.count.call(null,c__8957__auto___86563);
var G__86567 = 0;
seq__86548_86552 = G__86564;
chunk__86549_86553 = G__86565;
count__86550_86554 = G__86566;
i__86551_86555 = G__86567;
continue;
}
} else
{var node_86568 = cljs.core.first.call(null,seq__86548_86562__$1);goog.dom.classes.add(node_86568,class$);
{
var G__86569 = cljs.core.next.call(null,seq__86548_86562__$1);
var G__86570 = null;
var G__86571 = 0;
var G__86572 = 0;
seq__86548_86552 = G__86569;
chunk__86549_86553 = G__86570;
count__86550_86554 = G__86571;
i__86551_86555 = G__86572;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__86577_86581 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86578_86582 = null;var count__86579_86583 = 0;var i__86580_86584 = 0;while(true){
if((i__86580_86584 < count__86579_86583))
{var node_86585 = cljs.core._nth.call(null,chunk__86578_86582,i__86580_86584);goog.dom.classes.remove(node_86585,class$);
{
var G__86586 = seq__86577_86581;
var G__86587 = chunk__86578_86582;
var G__86588 = count__86579_86583;
var G__86589 = (i__86580_86584 + 1);
seq__86577_86581 = G__86586;
chunk__86578_86582 = G__86587;
count__86579_86583 = G__86588;
i__86580_86584 = G__86589;
continue;
}
} else
{var temp__4092__auto___86590 = cljs.core.seq.call(null,seq__86577_86581);if(temp__4092__auto___86590)
{var seq__86577_86591__$1 = temp__4092__auto___86590;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86577_86591__$1))
{var c__8957__auto___86592 = cljs.core.chunk_first.call(null,seq__86577_86591__$1);{
var G__86593 = cljs.core.chunk_rest.call(null,seq__86577_86591__$1);
var G__86594 = c__8957__auto___86592;
var G__86595 = cljs.core.count.call(null,c__8957__auto___86592);
var G__86596 = 0;
seq__86577_86581 = G__86593;
chunk__86578_86582 = G__86594;
count__86579_86583 = G__86595;
i__86580_86584 = G__86596;
continue;
}
} else
{var node_86597 = cljs.core.first.call(null,seq__86577_86591__$1);goog.dom.classes.remove(node_86597,class$);
{
var G__86598 = cljs.core.next.call(null,seq__86577_86591__$1);
var G__86599 = null;
var G__86600 = 0;
var G__86601 = 0;
seq__86577_86581 = G__86598;
chunk__86578_86582 = G__86599;
count__86579_86583 = G__86600;
i__86580_86584 = G__86601;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__86606_86610 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86607_86611 = null;var count__86608_86612 = 0;var i__86609_86613 = 0;while(true){
if((i__86609_86613 < count__86608_86612))
{var node_86614 = cljs.core._nth.call(null,chunk__86607_86611,i__86609_86613);goog.dom.classes.toggle(node_86614,class$);
{
var G__86615 = seq__86606_86610;
var G__86616 = chunk__86607_86611;
var G__86617 = count__86608_86612;
var G__86618 = (i__86609_86613 + 1);
seq__86606_86610 = G__86615;
chunk__86607_86611 = G__86616;
count__86608_86612 = G__86617;
i__86609_86613 = G__86618;
continue;
}
} else
{var temp__4092__auto___86619 = cljs.core.seq.call(null,seq__86606_86610);if(temp__4092__auto___86619)
{var seq__86606_86620__$1 = temp__4092__auto___86619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86606_86620__$1))
{var c__8957__auto___86621 = cljs.core.chunk_first.call(null,seq__86606_86620__$1);{
var G__86622 = cljs.core.chunk_rest.call(null,seq__86606_86620__$1);
var G__86623 = c__8957__auto___86621;
var G__86624 = cljs.core.count.call(null,c__8957__auto___86621);
var G__86625 = 0;
seq__86606_86610 = G__86622;
chunk__86607_86611 = G__86623;
count__86608_86612 = G__86624;
i__86609_86613 = G__86625;
continue;
}
} else
{var node_86626 = cljs.core.first.call(null,seq__86606_86620__$1);goog.dom.classes.toggle(node_86626,class$);
{
var G__86627 = cljs.core.next.call(null,seq__86606_86620__$1);
var G__86628 = null;
var G__86629 = 0;
var G__86630 = 0;
seq__86606_86610 = G__86627;
chunk__86607_86611 = G__86628;
count__86608_86612 = G__86629;
i__86609_86613 = G__86630;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_86639__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__86635_86640 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86636_86641 = null;var count__86637_86642 = 0;var i__86638_86643 = 0;while(true){
if((i__86638_86643 < count__86637_86642))
{var node_86644 = cljs.core._nth.call(null,chunk__86636_86641,i__86638_86643);goog.dom.classes.set(node_86644,classes_86639__$1);
{
var G__86645 = seq__86635_86640;
var G__86646 = chunk__86636_86641;
var G__86647 = count__86637_86642;
var G__86648 = (i__86638_86643 + 1);
seq__86635_86640 = G__86645;
chunk__86636_86641 = G__86646;
count__86637_86642 = G__86647;
i__86638_86643 = G__86648;
continue;
}
} else
{var temp__4092__auto___86649 = cljs.core.seq.call(null,seq__86635_86640);if(temp__4092__auto___86649)
{var seq__86635_86650__$1 = temp__4092__auto___86649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86635_86650__$1))
{var c__8957__auto___86651 = cljs.core.chunk_first.call(null,seq__86635_86650__$1);{
var G__86652 = cljs.core.chunk_rest.call(null,seq__86635_86650__$1);
var G__86653 = c__8957__auto___86651;
var G__86654 = cljs.core.count.call(null,c__8957__auto___86651);
var G__86655 = 0;
seq__86635_86640 = G__86652;
chunk__86636_86641 = G__86653;
count__86637_86642 = G__86654;
i__86638_86643 = G__86655;
continue;
}
} else
{var node_86656 = cljs.core.first.call(null,seq__86635_86650__$1);goog.dom.classes.set(node_86656,classes_86639__$1);
{
var G__86657 = cljs.core.next.call(null,seq__86635_86650__$1);
var G__86658 = null;
var G__86659 = 0;
var G__86660 = 0;
seq__86635_86640 = G__86657;
chunk__86636_86641 = G__86658;
count__86637_86642 = G__86659;
i__86638_86643 = G__86660;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__86665_86669 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86666_86670 = null;var count__86667_86671 = 0;var i__86668_86672 = 0;while(true){
if((i__86668_86672 < count__86667_86671))
{var node_86673 = cljs.core._nth.call(null,chunk__86666_86670,i__86668_86672);goog.dom.setTextContent(node_86673,value);
{
var G__86674 = seq__86665_86669;
var G__86675 = chunk__86666_86670;
var G__86676 = count__86667_86671;
var G__86677 = (i__86668_86672 + 1);
seq__86665_86669 = G__86674;
chunk__86666_86670 = G__86675;
count__86667_86671 = G__86676;
i__86668_86672 = G__86677;
continue;
}
} else
{var temp__4092__auto___86678 = cljs.core.seq.call(null,seq__86665_86669);if(temp__4092__auto___86678)
{var seq__86665_86679__$1 = temp__4092__auto___86678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86665_86679__$1))
{var c__8957__auto___86680 = cljs.core.chunk_first.call(null,seq__86665_86679__$1);{
var G__86681 = cljs.core.chunk_rest.call(null,seq__86665_86679__$1);
var G__86682 = c__8957__auto___86680;
var G__86683 = cljs.core.count.call(null,c__8957__auto___86680);
var G__86684 = 0;
seq__86665_86669 = G__86681;
chunk__86666_86670 = G__86682;
count__86667_86671 = G__86683;
i__86668_86672 = G__86684;
continue;
}
} else
{var node_86685 = cljs.core.first.call(null,seq__86665_86679__$1);goog.dom.setTextContent(node_86685,value);
{
var G__86686 = cljs.core.next.call(null,seq__86665_86679__$1);
var G__86687 = null;
var G__86688 = 0;
var G__86689 = 0;
seq__86665_86669 = G__86686;
chunk__86666_86670 = G__86687;
count__86667_86671 = G__86688;
i__86668_86672 = G__86689;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__86694_86698 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86695_86699 = null;var count__86696_86700 = 0;var i__86697_86701 = 0;while(true){
if((i__86697_86701 < count__86696_86700))
{var node_86702 = cljs.core._nth.call(null,chunk__86695_86699,i__86697_86701);goog.dom.forms.setValue(node_86702,value);
{
var G__86703 = seq__86694_86698;
var G__86704 = chunk__86695_86699;
var G__86705 = count__86696_86700;
var G__86706 = (i__86697_86701 + 1);
seq__86694_86698 = G__86703;
chunk__86695_86699 = G__86704;
count__86696_86700 = G__86705;
i__86697_86701 = G__86706;
continue;
}
} else
{var temp__4092__auto___86707 = cljs.core.seq.call(null,seq__86694_86698);if(temp__4092__auto___86707)
{var seq__86694_86708__$1 = temp__4092__auto___86707;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86694_86708__$1))
{var c__8957__auto___86709 = cljs.core.chunk_first.call(null,seq__86694_86708__$1);{
var G__86710 = cljs.core.chunk_rest.call(null,seq__86694_86708__$1);
var G__86711 = c__8957__auto___86709;
var G__86712 = cljs.core.count.call(null,c__8957__auto___86709);
var G__86713 = 0;
seq__86694_86698 = G__86710;
chunk__86695_86699 = G__86711;
count__86696_86700 = G__86712;
i__86697_86701 = G__86713;
continue;
}
} else
{var node_86714 = cljs.core.first.call(null,seq__86694_86708__$1);goog.dom.forms.setValue(node_86714,value);
{
var G__86715 = cljs.core.next.call(null,seq__86694_86708__$1);
var G__86716 = null;
var G__86717 = 0;
var G__86718 = 0;
seq__86694_86698 = G__86715;
chunk__86695_86699 = G__86716;
count__86696_86700 = G__86717;
i__86697_86701 = G__86718;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__8216__auto__ = allows_inner_html_QMARK_;if(and__8216__auto__)
{var and__8216__auto____$1 = (function (){var or__8228__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__8216__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__8216__auto____$1;
}
} else
{return and__8216__auto__;
}
})()))
{var value_86729 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__86725_86730 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__86726_86731 = null;var count__86727_86732 = 0;var i__86728_86733 = 0;while(true){
if((i__86728_86733 < count__86727_86732))
{var node_86734 = cljs.core._nth.call(null,chunk__86726_86731,i__86728_86733);node_86734.innerHTML = value_86729;
{
var G__86735 = seq__86725_86730;
var G__86736 = chunk__86726_86731;
var G__86737 = count__86727_86732;
var G__86738 = (i__86728_86733 + 1);
seq__86725_86730 = G__86735;
chunk__86726_86731 = G__86736;
count__86727_86732 = G__86737;
i__86728_86733 = G__86738;
continue;
}
} else
{var temp__4092__auto___86739 = cljs.core.seq.call(null,seq__86725_86730);if(temp__4092__auto___86739)
{var seq__86725_86740__$1 = temp__4092__auto___86739;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86725_86740__$1))
{var c__8957__auto___86741 = cljs.core.chunk_first.call(null,seq__86725_86740__$1);{
var G__86742 = cljs.core.chunk_rest.call(null,seq__86725_86740__$1);
var G__86743 = c__8957__auto___86741;
var G__86744 = cljs.core.count.call(null,c__8957__auto___86741);
var G__86745 = 0;
seq__86725_86730 = G__86742;
chunk__86726_86731 = G__86743;
count__86727_86732 = G__86744;
i__86728_86733 = G__86745;
continue;
}
} else
{var node_86746 = cljs.core.first.call(null,seq__86725_86740__$1);node_86746.innerHTML = value_86729;
{
var G__86747 = cljs.core.next.call(null,seq__86725_86740__$1);
var G__86748 = null;
var G__86749 = 0;
var G__86750 = 0;
seq__86725_86730 = G__86747;
chunk__86726_86731 = G__86748;
count__86727_86732 = G__86749;
i__86728_86733 = G__86750;
continue;
}
}
} else
{}
}
break;
}
}catch (e86724){if((e86724 instanceof Error))
{var e_86751 = e86724;domina.replace_children_BANG_.call(null,content,value_86729);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86724;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__8216__auto__ = bubble;if(cljs.core.truth_(and__8216__auto__))
{return (value == null);
} else
{return and__8216__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__8228__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__8228__auto__))
{return or__8228__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__86758_86762 = cljs.core.seq.call(null,children);var chunk__86759_86763 = null;var count__86760_86764 = 0;var i__86761_86765 = 0;while(true){
if((i__86761_86765 < count__86760_86764))
{var child_86766 = cljs.core._nth.call(null,chunk__86759_86763,i__86761_86765);frag.appendChild(child_86766);
{
var G__86767 = seq__86758_86762;
var G__86768 = chunk__86759_86763;
var G__86769 = count__86760_86764;
var G__86770 = (i__86761_86765 + 1);
seq__86758_86762 = G__86767;
chunk__86759_86763 = G__86768;
count__86760_86764 = G__86769;
i__86761_86765 = G__86770;
continue;
}
} else
{var temp__4092__auto___86771 = cljs.core.seq.call(null,seq__86758_86762);if(temp__4092__auto___86771)
{var seq__86758_86772__$1 = temp__4092__auto___86771;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86758_86772__$1))
{var c__8957__auto___86773 = cljs.core.chunk_first.call(null,seq__86758_86772__$1);{
var G__86774 = cljs.core.chunk_rest.call(null,seq__86758_86772__$1);
var G__86775 = c__8957__auto___86773;
var G__86776 = cljs.core.count.call(null,c__8957__auto___86773);
var G__86777 = 0;
seq__86758_86762 = G__86774;
chunk__86759_86763 = G__86775;
count__86760_86764 = G__86776;
i__86761_86765 = G__86777;
continue;
}
} else
{var child_86778 = cljs.core.first.call(null,seq__86758_86772__$1);frag.appendChild(child_86778);
{
var G__86779 = cljs.core.next.call(null,seq__86758_86772__$1);
var G__86780 = null;
var G__86781 = 0;
var G__86782 = 0;
seq__86758_86762 = G__86779;
chunk__86759_86763 = G__86780;
count__86760_86764 = G__86781;
i__86761_86765 = G__86782;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__86752_SHARP_,p2__86753_SHARP_){return f.call(null,p1__86752_SHARP_,p2__86753_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__8216__auto__ = obj;if(cljs.core.truth_(and__8216__auto__))
{var and__8216__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__8216__auto____$1)
{return obj.length;
} else
{return and__8216__auto____$1;
}
} else
{return and__8216__auto__;
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
{if((function (){var G__86784 = list_thing;if(G__86784)
{var bit__8859__auto__ = (G__86784.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__86784.cljs$core$ISeqable$))
{return true;
} else
{if((!G__86784.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86784);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86784);
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
{if((function (){var G__86785 = content;if(G__86785)
{var bit__8859__auto__ = (G__86785.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__86785.cljs$core$ISeqable$))
{return true;
} else
{if((!G__86785.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86785);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86785);
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
{if((function (){var G__86786 = content;if(G__86786)
{var bit__8859__auto__ = (G__86786.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8859__auto__) || (G__86786.cljs$core$ISeqable$))
{return true;
} else
{if((!G__86786.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86786);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__86786);
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