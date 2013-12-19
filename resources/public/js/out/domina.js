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
var opt_wrapper_183362 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_183363 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_183364 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_183363,table_section_wrapper_183363,opt_wrapper_183362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_183364,table_section_wrapper_183363,cell_wrapper_183364,opt_wrapper_183362,table_section_wrapper_183363,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_183363]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8211__auto__ = div.firstChild;if(cljs.core.truth_(and__8211__auto__))
{return div.firstChild.childNodes;
} else
{return and__8211__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__183369 = cljs.core.seq.call(null,tbody);var chunk__183370 = null;var count__183371 = 0;var i__183372 = 0;while(true){
if((i__183372 < count__183371))
{var child = cljs.core._nth.call(null,chunk__183370,i__183372);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__183373 = seq__183369;
var G__183374 = chunk__183370;
var G__183375 = count__183371;
var G__183376 = (i__183372 + 1);
seq__183369 = G__183373;
chunk__183370 = G__183374;
count__183371 = G__183375;
i__183372 = G__183376;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__183369);if(temp__4092__auto__)
{var seq__183369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183369__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__183369__$1);{
var G__183377 = cljs.core.chunk_rest.call(null,seq__183369__$1);
var G__183378 = c__8952__auto__;
var G__183379 = cljs.core.count.call(null,c__8952__auto__);
var G__183380 = 0;
seq__183369 = G__183377;
chunk__183370 = G__183378;
count__183371 = G__183379;
i__183372 = G__183380;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__183369__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__183381 = cljs.core.next.call(null,seq__183369__$1);
var G__183382 = null;
var G__183383 = 0;
var G__183384 = 0;
seq__183369 = G__183381;
chunk__183370 = G__183382;
count__183371 = G__183383;
i__183372 = G__183384;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__183386 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__183386,0,null);var start_wrap = cljs.core.nth.call(null,vec__183386,1,null);var end_wrap = cljs.core.nth.call(null,vec__183386,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__183387 = wrapper.lastChild;
var G__183388 = (level - 1);
wrapper = G__183387;
level = G__183388;
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
domina.DomContent = (function (){var obj183390 = {};return obj183390;
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
log_debug.cljs$lang$applyTo = (function (arglist__183391){
var mesg = cljs.core.seq(arglist__183391);
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
log.cljs$lang$applyTo = (function (arglist__183392){
var mesg = cljs.core.seq(arglist__183392);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__183393){
var contents = cljs.core.seq(arglist__183393);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__183394_SHARP_){return p1__183394_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__183395_SHARP_,p2__183396_SHARP_){return goog.dom.insertChildAt(p1__183395_SHARP_,p2__183396_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__183398_SHARP_,p2__183397_SHARP_){return goog.dom.insertSiblingBefore(p2__183397_SHARP_,p1__183398_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__183400_SHARP_,p2__183399_SHARP_){return goog.dom.insertSiblingAfter(p2__183399_SHARP_,p1__183400_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__183402_SHARP_,p2__183401_SHARP_){return goog.dom.replaceNode(p2__183401_SHARP_,p1__183402_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__183407_183411 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183408_183412 = null;var count__183409_183413 = 0;var i__183410_183414 = 0;while(true){
if((i__183410_183414 < count__183409_183413))
{var n_183415 = cljs.core._nth.call(null,chunk__183408_183412,i__183410_183414);goog.style.setStyle(n_183415,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__183416 = seq__183407_183411;
var G__183417 = chunk__183408_183412;
var G__183418 = count__183409_183413;
var G__183419 = (i__183410_183414 + 1);
seq__183407_183411 = G__183416;
chunk__183408_183412 = G__183417;
count__183409_183413 = G__183418;
i__183410_183414 = G__183419;
continue;
}
} else
{var temp__4092__auto___183420 = cljs.core.seq.call(null,seq__183407_183411);if(temp__4092__auto___183420)
{var seq__183407_183421__$1 = temp__4092__auto___183420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183407_183421__$1))
{var c__8952__auto___183422 = cljs.core.chunk_first.call(null,seq__183407_183421__$1);{
var G__183423 = cljs.core.chunk_rest.call(null,seq__183407_183421__$1);
var G__183424 = c__8952__auto___183422;
var G__183425 = cljs.core.count.call(null,c__8952__auto___183422);
var G__183426 = 0;
seq__183407_183411 = G__183423;
chunk__183408_183412 = G__183424;
count__183409_183413 = G__183425;
i__183410_183414 = G__183426;
continue;
}
} else
{var n_183427 = cljs.core.first.call(null,seq__183407_183421__$1);goog.style.setStyle(n_183427,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__183428 = cljs.core.next.call(null,seq__183407_183421__$1);
var G__183429 = null;
var G__183430 = 0;
var G__183431 = 0;
seq__183407_183411 = G__183428;
chunk__183408_183412 = G__183429;
count__183409_183413 = G__183430;
i__183410_183414 = G__183431;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__183432){
var content = cljs.core.first(arglist__183432);
arglist__183432 = cljs.core.next(arglist__183432);
var name = cljs.core.first(arglist__183432);
var value = cljs.core.rest(arglist__183432);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__183437_183441 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183438_183442 = null;var count__183439_183443 = 0;var i__183440_183444 = 0;while(true){
if((i__183440_183444 < count__183439_183443))
{var n_183445 = cljs.core._nth.call(null,chunk__183438_183442,i__183440_183444);n_183445.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__183446 = seq__183437_183441;
var G__183447 = chunk__183438_183442;
var G__183448 = count__183439_183443;
var G__183449 = (i__183440_183444 + 1);
seq__183437_183441 = G__183446;
chunk__183438_183442 = G__183447;
count__183439_183443 = G__183448;
i__183440_183444 = G__183449;
continue;
}
} else
{var temp__4092__auto___183450 = cljs.core.seq.call(null,seq__183437_183441);if(temp__4092__auto___183450)
{var seq__183437_183451__$1 = temp__4092__auto___183450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183437_183451__$1))
{var c__8952__auto___183452 = cljs.core.chunk_first.call(null,seq__183437_183451__$1);{
var G__183453 = cljs.core.chunk_rest.call(null,seq__183437_183451__$1);
var G__183454 = c__8952__auto___183452;
var G__183455 = cljs.core.count.call(null,c__8952__auto___183452);
var G__183456 = 0;
seq__183437_183441 = G__183453;
chunk__183438_183442 = G__183454;
count__183439_183443 = G__183455;
i__183440_183444 = G__183456;
continue;
}
} else
{var n_183457 = cljs.core.first.call(null,seq__183437_183451__$1);n_183457.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__183458 = cljs.core.next.call(null,seq__183437_183451__$1);
var G__183459 = null;
var G__183460 = 0;
var G__183461 = 0;
seq__183437_183441 = G__183458;
chunk__183438_183442 = G__183459;
count__183439_183443 = G__183460;
i__183440_183444 = G__183461;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__183462){
var content = cljs.core.first(arglist__183462);
arglist__183462 = cljs.core.next(arglist__183462);
var name = cljs.core.first(arglist__183462);
var value = cljs.core.rest(arglist__183462);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__183467_183471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183468_183472 = null;var count__183469_183473 = 0;var i__183470_183474 = 0;while(true){
if((i__183470_183474 < count__183469_183473))
{var n_183475 = cljs.core._nth.call(null,chunk__183468_183472,i__183470_183474);n_183475.removeAttribute(cljs.core.name.call(null,name));
{
var G__183476 = seq__183467_183471;
var G__183477 = chunk__183468_183472;
var G__183478 = count__183469_183473;
var G__183479 = (i__183470_183474 + 1);
seq__183467_183471 = G__183476;
chunk__183468_183472 = G__183477;
count__183469_183473 = G__183478;
i__183470_183474 = G__183479;
continue;
}
} else
{var temp__4092__auto___183480 = cljs.core.seq.call(null,seq__183467_183471);if(temp__4092__auto___183480)
{var seq__183467_183481__$1 = temp__4092__auto___183480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183467_183481__$1))
{var c__8952__auto___183482 = cljs.core.chunk_first.call(null,seq__183467_183481__$1);{
var G__183483 = cljs.core.chunk_rest.call(null,seq__183467_183481__$1);
var G__183484 = c__8952__auto___183482;
var G__183485 = cljs.core.count.call(null,c__8952__auto___183482);
var G__183486 = 0;
seq__183467_183471 = G__183483;
chunk__183468_183472 = G__183484;
count__183469_183473 = G__183485;
i__183470_183474 = G__183486;
continue;
}
} else
{var n_183487 = cljs.core.first.call(null,seq__183467_183481__$1);n_183487.removeAttribute(cljs.core.name.call(null,name));
{
var G__183488 = cljs.core.next.call(null,seq__183467_183481__$1);
var G__183489 = null;
var G__183490 = 0;
var G__183491 = 0;
seq__183467_183471 = G__183488;
chunk__183468_183472 = G__183489;
count__183469_183473 = G__183490;
i__183470_183474 = G__183491;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__183493 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__183493,0,null);var v = cljs.core.nth.call(null,vec__183493,1,null);if(cljs.core.truth_((function (){var and__8211__auto__ = k;if(cljs.core.truth_(and__8211__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__183494_SHARP_){var attr = attrs__$1.item(p1__183494_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__183501_183507 = cljs.core.seq.call(null,styles);var chunk__183502_183508 = null;var count__183503_183509 = 0;var i__183504_183510 = 0;while(true){
if((i__183504_183510 < count__183503_183509))
{var vec__183505_183511 = cljs.core._nth.call(null,chunk__183502_183508,i__183504_183510);var name_183512 = cljs.core.nth.call(null,vec__183505_183511,0,null);var value_183513 = cljs.core.nth.call(null,vec__183505_183511,1,null);domina.set_style_BANG_.call(null,content,name_183512,value_183513);
{
var G__183514 = seq__183501_183507;
var G__183515 = chunk__183502_183508;
var G__183516 = count__183503_183509;
var G__183517 = (i__183504_183510 + 1);
seq__183501_183507 = G__183514;
chunk__183502_183508 = G__183515;
count__183503_183509 = G__183516;
i__183504_183510 = G__183517;
continue;
}
} else
{var temp__4092__auto___183518 = cljs.core.seq.call(null,seq__183501_183507);if(temp__4092__auto___183518)
{var seq__183501_183519__$1 = temp__4092__auto___183518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183501_183519__$1))
{var c__8952__auto___183520 = cljs.core.chunk_first.call(null,seq__183501_183519__$1);{
var G__183521 = cljs.core.chunk_rest.call(null,seq__183501_183519__$1);
var G__183522 = c__8952__auto___183520;
var G__183523 = cljs.core.count.call(null,c__8952__auto___183520);
var G__183524 = 0;
seq__183501_183507 = G__183521;
chunk__183502_183508 = G__183522;
count__183503_183509 = G__183523;
i__183504_183510 = G__183524;
continue;
}
} else
{var vec__183506_183525 = cljs.core.first.call(null,seq__183501_183519__$1);var name_183526 = cljs.core.nth.call(null,vec__183506_183525,0,null);var value_183527 = cljs.core.nth.call(null,vec__183506_183525,1,null);domina.set_style_BANG_.call(null,content,name_183526,value_183527);
{
var G__183528 = cljs.core.next.call(null,seq__183501_183519__$1);
var G__183529 = null;
var G__183530 = 0;
var G__183531 = 0;
seq__183501_183507 = G__183528;
chunk__183502_183508 = G__183529;
count__183503_183509 = G__183530;
i__183504_183510 = G__183531;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__183538_183544 = cljs.core.seq.call(null,attrs);var chunk__183539_183545 = null;var count__183540_183546 = 0;var i__183541_183547 = 0;while(true){
if((i__183541_183547 < count__183540_183546))
{var vec__183542_183548 = cljs.core._nth.call(null,chunk__183539_183545,i__183541_183547);var name_183549 = cljs.core.nth.call(null,vec__183542_183548,0,null);var value_183550 = cljs.core.nth.call(null,vec__183542_183548,1,null);domina.set_attr_BANG_.call(null,content,name_183549,value_183550);
{
var G__183551 = seq__183538_183544;
var G__183552 = chunk__183539_183545;
var G__183553 = count__183540_183546;
var G__183554 = (i__183541_183547 + 1);
seq__183538_183544 = G__183551;
chunk__183539_183545 = G__183552;
count__183540_183546 = G__183553;
i__183541_183547 = G__183554;
continue;
}
} else
{var temp__4092__auto___183555 = cljs.core.seq.call(null,seq__183538_183544);if(temp__4092__auto___183555)
{var seq__183538_183556__$1 = temp__4092__auto___183555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183538_183556__$1))
{var c__8952__auto___183557 = cljs.core.chunk_first.call(null,seq__183538_183556__$1);{
var G__183558 = cljs.core.chunk_rest.call(null,seq__183538_183556__$1);
var G__183559 = c__8952__auto___183557;
var G__183560 = cljs.core.count.call(null,c__8952__auto___183557);
var G__183561 = 0;
seq__183538_183544 = G__183558;
chunk__183539_183545 = G__183559;
count__183540_183546 = G__183560;
i__183541_183547 = G__183561;
continue;
}
} else
{var vec__183543_183562 = cljs.core.first.call(null,seq__183538_183556__$1);var name_183563 = cljs.core.nth.call(null,vec__183543_183562,0,null);var value_183564 = cljs.core.nth.call(null,vec__183543_183562,1,null);domina.set_attr_BANG_.call(null,content,name_183563,value_183564);
{
var G__183565 = cljs.core.next.call(null,seq__183538_183556__$1);
var G__183566 = null;
var G__183567 = 0;
var G__183568 = 0;
seq__183538_183544 = G__183565;
chunk__183539_183545 = G__183566;
count__183540_183546 = G__183567;
i__183541_183547 = G__183568;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__183573_183577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183574_183578 = null;var count__183575_183579 = 0;var i__183576_183580 = 0;while(true){
if((i__183576_183580 < count__183575_183579))
{var node_183581 = cljs.core._nth.call(null,chunk__183574_183578,i__183576_183580);goog.dom.classes.add(node_183581,class$);
{
var G__183582 = seq__183573_183577;
var G__183583 = chunk__183574_183578;
var G__183584 = count__183575_183579;
var G__183585 = (i__183576_183580 + 1);
seq__183573_183577 = G__183582;
chunk__183574_183578 = G__183583;
count__183575_183579 = G__183584;
i__183576_183580 = G__183585;
continue;
}
} else
{var temp__4092__auto___183586 = cljs.core.seq.call(null,seq__183573_183577);if(temp__4092__auto___183586)
{var seq__183573_183587__$1 = temp__4092__auto___183586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183573_183587__$1))
{var c__8952__auto___183588 = cljs.core.chunk_first.call(null,seq__183573_183587__$1);{
var G__183589 = cljs.core.chunk_rest.call(null,seq__183573_183587__$1);
var G__183590 = c__8952__auto___183588;
var G__183591 = cljs.core.count.call(null,c__8952__auto___183588);
var G__183592 = 0;
seq__183573_183577 = G__183589;
chunk__183574_183578 = G__183590;
count__183575_183579 = G__183591;
i__183576_183580 = G__183592;
continue;
}
} else
{var node_183593 = cljs.core.first.call(null,seq__183573_183587__$1);goog.dom.classes.add(node_183593,class$);
{
var G__183594 = cljs.core.next.call(null,seq__183573_183587__$1);
var G__183595 = null;
var G__183596 = 0;
var G__183597 = 0;
seq__183573_183577 = G__183594;
chunk__183574_183578 = G__183595;
count__183575_183579 = G__183596;
i__183576_183580 = G__183597;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__183602_183606 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183603_183607 = null;var count__183604_183608 = 0;var i__183605_183609 = 0;while(true){
if((i__183605_183609 < count__183604_183608))
{var node_183610 = cljs.core._nth.call(null,chunk__183603_183607,i__183605_183609);goog.dom.classes.remove(node_183610,class$);
{
var G__183611 = seq__183602_183606;
var G__183612 = chunk__183603_183607;
var G__183613 = count__183604_183608;
var G__183614 = (i__183605_183609 + 1);
seq__183602_183606 = G__183611;
chunk__183603_183607 = G__183612;
count__183604_183608 = G__183613;
i__183605_183609 = G__183614;
continue;
}
} else
{var temp__4092__auto___183615 = cljs.core.seq.call(null,seq__183602_183606);if(temp__4092__auto___183615)
{var seq__183602_183616__$1 = temp__4092__auto___183615;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183602_183616__$1))
{var c__8952__auto___183617 = cljs.core.chunk_first.call(null,seq__183602_183616__$1);{
var G__183618 = cljs.core.chunk_rest.call(null,seq__183602_183616__$1);
var G__183619 = c__8952__auto___183617;
var G__183620 = cljs.core.count.call(null,c__8952__auto___183617);
var G__183621 = 0;
seq__183602_183606 = G__183618;
chunk__183603_183607 = G__183619;
count__183604_183608 = G__183620;
i__183605_183609 = G__183621;
continue;
}
} else
{var node_183622 = cljs.core.first.call(null,seq__183602_183616__$1);goog.dom.classes.remove(node_183622,class$);
{
var G__183623 = cljs.core.next.call(null,seq__183602_183616__$1);
var G__183624 = null;
var G__183625 = 0;
var G__183626 = 0;
seq__183602_183606 = G__183623;
chunk__183603_183607 = G__183624;
count__183604_183608 = G__183625;
i__183605_183609 = G__183626;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__183631_183635 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183632_183636 = null;var count__183633_183637 = 0;var i__183634_183638 = 0;while(true){
if((i__183634_183638 < count__183633_183637))
{var node_183639 = cljs.core._nth.call(null,chunk__183632_183636,i__183634_183638);goog.dom.classes.toggle(node_183639,class$);
{
var G__183640 = seq__183631_183635;
var G__183641 = chunk__183632_183636;
var G__183642 = count__183633_183637;
var G__183643 = (i__183634_183638 + 1);
seq__183631_183635 = G__183640;
chunk__183632_183636 = G__183641;
count__183633_183637 = G__183642;
i__183634_183638 = G__183643;
continue;
}
} else
{var temp__4092__auto___183644 = cljs.core.seq.call(null,seq__183631_183635);if(temp__4092__auto___183644)
{var seq__183631_183645__$1 = temp__4092__auto___183644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183631_183645__$1))
{var c__8952__auto___183646 = cljs.core.chunk_first.call(null,seq__183631_183645__$1);{
var G__183647 = cljs.core.chunk_rest.call(null,seq__183631_183645__$1);
var G__183648 = c__8952__auto___183646;
var G__183649 = cljs.core.count.call(null,c__8952__auto___183646);
var G__183650 = 0;
seq__183631_183635 = G__183647;
chunk__183632_183636 = G__183648;
count__183633_183637 = G__183649;
i__183634_183638 = G__183650;
continue;
}
} else
{var node_183651 = cljs.core.first.call(null,seq__183631_183645__$1);goog.dom.classes.toggle(node_183651,class$);
{
var G__183652 = cljs.core.next.call(null,seq__183631_183645__$1);
var G__183653 = null;
var G__183654 = 0;
var G__183655 = 0;
seq__183631_183635 = G__183652;
chunk__183632_183636 = G__183653;
count__183633_183637 = G__183654;
i__183634_183638 = G__183655;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_183664__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__183660_183665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183661_183666 = null;var count__183662_183667 = 0;var i__183663_183668 = 0;while(true){
if((i__183663_183668 < count__183662_183667))
{var node_183669 = cljs.core._nth.call(null,chunk__183661_183666,i__183663_183668);goog.dom.classes.set(node_183669,classes_183664__$1);
{
var G__183670 = seq__183660_183665;
var G__183671 = chunk__183661_183666;
var G__183672 = count__183662_183667;
var G__183673 = (i__183663_183668 + 1);
seq__183660_183665 = G__183670;
chunk__183661_183666 = G__183671;
count__183662_183667 = G__183672;
i__183663_183668 = G__183673;
continue;
}
} else
{var temp__4092__auto___183674 = cljs.core.seq.call(null,seq__183660_183665);if(temp__4092__auto___183674)
{var seq__183660_183675__$1 = temp__4092__auto___183674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183660_183675__$1))
{var c__8952__auto___183676 = cljs.core.chunk_first.call(null,seq__183660_183675__$1);{
var G__183677 = cljs.core.chunk_rest.call(null,seq__183660_183675__$1);
var G__183678 = c__8952__auto___183676;
var G__183679 = cljs.core.count.call(null,c__8952__auto___183676);
var G__183680 = 0;
seq__183660_183665 = G__183677;
chunk__183661_183666 = G__183678;
count__183662_183667 = G__183679;
i__183663_183668 = G__183680;
continue;
}
} else
{var node_183681 = cljs.core.first.call(null,seq__183660_183675__$1);goog.dom.classes.set(node_183681,classes_183664__$1);
{
var G__183682 = cljs.core.next.call(null,seq__183660_183675__$1);
var G__183683 = null;
var G__183684 = 0;
var G__183685 = 0;
seq__183660_183665 = G__183682;
chunk__183661_183666 = G__183683;
count__183662_183667 = G__183684;
i__183663_183668 = G__183685;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__183690_183694 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183691_183695 = null;var count__183692_183696 = 0;var i__183693_183697 = 0;while(true){
if((i__183693_183697 < count__183692_183696))
{var node_183698 = cljs.core._nth.call(null,chunk__183691_183695,i__183693_183697);goog.dom.setTextContent(node_183698,value);
{
var G__183699 = seq__183690_183694;
var G__183700 = chunk__183691_183695;
var G__183701 = count__183692_183696;
var G__183702 = (i__183693_183697 + 1);
seq__183690_183694 = G__183699;
chunk__183691_183695 = G__183700;
count__183692_183696 = G__183701;
i__183693_183697 = G__183702;
continue;
}
} else
{var temp__4092__auto___183703 = cljs.core.seq.call(null,seq__183690_183694);if(temp__4092__auto___183703)
{var seq__183690_183704__$1 = temp__4092__auto___183703;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183690_183704__$1))
{var c__8952__auto___183705 = cljs.core.chunk_first.call(null,seq__183690_183704__$1);{
var G__183706 = cljs.core.chunk_rest.call(null,seq__183690_183704__$1);
var G__183707 = c__8952__auto___183705;
var G__183708 = cljs.core.count.call(null,c__8952__auto___183705);
var G__183709 = 0;
seq__183690_183694 = G__183706;
chunk__183691_183695 = G__183707;
count__183692_183696 = G__183708;
i__183693_183697 = G__183709;
continue;
}
} else
{var node_183710 = cljs.core.first.call(null,seq__183690_183704__$1);goog.dom.setTextContent(node_183710,value);
{
var G__183711 = cljs.core.next.call(null,seq__183690_183704__$1);
var G__183712 = null;
var G__183713 = 0;
var G__183714 = 0;
seq__183690_183694 = G__183711;
chunk__183691_183695 = G__183712;
count__183692_183696 = G__183713;
i__183693_183697 = G__183714;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__183719_183723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183720_183724 = null;var count__183721_183725 = 0;var i__183722_183726 = 0;while(true){
if((i__183722_183726 < count__183721_183725))
{var node_183727 = cljs.core._nth.call(null,chunk__183720_183724,i__183722_183726);goog.dom.forms.setValue(node_183727,value);
{
var G__183728 = seq__183719_183723;
var G__183729 = chunk__183720_183724;
var G__183730 = count__183721_183725;
var G__183731 = (i__183722_183726 + 1);
seq__183719_183723 = G__183728;
chunk__183720_183724 = G__183729;
count__183721_183725 = G__183730;
i__183722_183726 = G__183731;
continue;
}
} else
{var temp__4092__auto___183732 = cljs.core.seq.call(null,seq__183719_183723);if(temp__4092__auto___183732)
{var seq__183719_183733__$1 = temp__4092__auto___183732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183719_183733__$1))
{var c__8952__auto___183734 = cljs.core.chunk_first.call(null,seq__183719_183733__$1);{
var G__183735 = cljs.core.chunk_rest.call(null,seq__183719_183733__$1);
var G__183736 = c__8952__auto___183734;
var G__183737 = cljs.core.count.call(null,c__8952__auto___183734);
var G__183738 = 0;
seq__183719_183723 = G__183735;
chunk__183720_183724 = G__183736;
count__183721_183725 = G__183737;
i__183722_183726 = G__183738;
continue;
}
} else
{var node_183739 = cljs.core.first.call(null,seq__183719_183733__$1);goog.dom.forms.setValue(node_183739,value);
{
var G__183740 = cljs.core.next.call(null,seq__183719_183733__$1);
var G__183741 = null;
var G__183742 = 0;
var G__183743 = 0;
seq__183719_183723 = G__183740;
chunk__183720_183724 = G__183741;
count__183721_183725 = G__183742;
i__183722_183726 = G__183743;
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
{var value_183754 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__183750_183755 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__183751_183756 = null;var count__183752_183757 = 0;var i__183753_183758 = 0;while(true){
if((i__183753_183758 < count__183752_183757))
{var node_183759 = cljs.core._nth.call(null,chunk__183751_183756,i__183753_183758);node_183759.innerHTML = value_183754;
{
var G__183760 = seq__183750_183755;
var G__183761 = chunk__183751_183756;
var G__183762 = count__183752_183757;
var G__183763 = (i__183753_183758 + 1);
seq__183750_183755 = G__183760;
chunk__183751_183756 = G__183761;
count__183752_183757 = G__183762;
i__183753_183758 = G__183763;
continue;
}
} else
{var temp__4092__auto___183764 = cljs.core.seq.call(null,seq__183750_183755);if(temp__4092__auto___183764)
{var seq__183750_183765__$1 = temp__4092__auto___183764;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183750_183765__$1))
{var c__8952__auto___183766 = cljs.core.chunk_first.call(null,seq__183750_183765__$1);{
var G__183767 = cljs.core.chunk_rest.call(null,seq__183750_183765__$1);
var G__183768 = c__8952__auto___183766;
var G__183769 = cljs.core.count.call(null,c__8952__auto___183766);
var G__183770 = 0;
seq__183750_183755 = G__183767;
chunk__183751_183756 = G__183768;
count__183752_183757 = G__183769;
i__183753_183758 = G__183770;
continue;
}
} else
{var node_183771 = cljs.core.first.call(null,seq__183750_183765__$1);node_183771.innerHTML = value_183754;
{
var G__183772 = cljs.core.next.call(null,seq__183750_183765__$1);
var G__183773 = null;
var G__183774 = 0;
var G__183775 = 0;
seq__183750_183755 = G__183772;
chunk__183751_183756 = G__183773;
count__183752_183757 = G__183774;
i__183753_183758 = G__183775;
continue;
}
}
} else
{}
}
break;
}
}catch (e183749){if((e183749 instanceof Error))
{var e_183776 = e183749;domina.replace_children_BANG_.call(null,content,value_183754);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e183749;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__183783_183787 = cljs.core.seq.call(null,children);var chunk__183784_183788 = null;var count__183785_183789 = 0;var i__183786_183790 = 0;while(true){
if((i__183786_183790 < count__183785_183789))
{var child_183791 = cljs.core._nth.call(null,chunk__183784_183788,i__183786_183790);frag.appendChild(child_183791);
{
var G__183792 = seq__183783_183787;
var G__183793 = chunk__183784_183788;
var G__183794 = count__183785_183789;
var G__183795 = (i__183786_183790 + 1);
seq__183783_183787 = G__183792;
chunk__183784_183788 = G__183793;
count__183785_183789 = G__183794;
i__183786_183790 = G__183795;
continue;
}
} else
{var temp__4092__auto___183796 = cljs.core.seq.call(null,seq__183783_183787);if(temp__4092__auto___183796)
{var seq__183783_183797__$1 = temp__4092__auto___183796;if(cljs.core.chunked_seq_QMARK_.call(null,seq__183783_183797__$1))
{var c__8952__auto___183798 = cljs.core.chunk_first.call(null,seq__183783_183797__$1);{
var G__183799 = cljs.core.chunk_rest.call(null,seq__183783_183797__$1);
var G__183800 = c__8952__auto___183798;
var G__183801 = cljs.core.count.call(null,c__8952__auto___183798);
var G__183802 = 0;
seq__183783_183787 = G__183799;
chunk__183784_183788 = G__183800;
count__183785_183789 = G__183801;
i__183786_183790 = G__183802;
continue;
}
} else
{var child_183803 = cljs.core.first.call(null,seq__183783_183797__$1);frag.appendChild(child_183803);
{
var G__183804 = cljs.core.next.call(null,seq__183783_183797__$1);
var G__183805 = null;
var G__183806 = 0;
var G__183807 = 0;
seq__183783_183787 = G__183804;
chunk__183784_183788 = G__183805;
count__183785_183789 = G__183806;
i__183786_183790 = G__183807;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__183777_SHARP_,p2__183778_SHARP_){return f.call(null,p1__183777_SHARP_,p2__183778_SHARP_);
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
{if((function (){var G__183809 = list_thing;if(G__183809)
{var bit__8854__auto__ = (G__183809.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__183809.cljs$core$ISeqable$))
{return true;
} else
{if((!G__183809.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183809);
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
{if((function (){var G__183810 = content;if(G__183810)
{var bit__8854__auto__ = (G__183810.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__183810.cljs$core$ISeqable$))
{return true;
} else
{if((!G__183810.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183810);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183810);
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
{if((function (){var G__183811 = content;if(G__183811)
{var bit__8854__auto__ = (G__183811.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__183811.cljs$core$ISeqable$))
{return true;
} else
{if((!G__183811.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183811);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__183811);
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