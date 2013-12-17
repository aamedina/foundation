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
var opt_wrapper_330342 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_330343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_330344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_330343,table_section_wrapper_330343,opt_wrapper_330342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_330344,table_section_wrapper_330343,cell_wrapper_330344,opt_wrapper_330342,table_section_wrapper_330343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_330343]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13811__auto__ = div.firstChild;if(cljs.core.truth_(and__13811__auto__))
{return div.firstChild.childNodes;
} else
{return and__13811__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__330349 = cljs.core.seq.call(null,tbody);var chunk__330350 = null;var count__330351 = 0;var i__330352 = 0;while(true){
if((i__330352 < count__330351))
{var child = cljs.core._nth.call(null,chunk__330350,i__330352);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__330353 = seq__330349;
var G__330354 = chunk__330350;
var G__330355 = count__330351;
var G__330356 = (i__330352 + 1);
seq__330349 = G__330353;
chunk__330350 = G__330354;
count__330351 = G__330355;
i__330352 = G__330356;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__330349);if(temp__4092__auto__)
{var seq__330349__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330349__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__330349__$1);{
var G__330357 = cljs.core.chunk_rest.call(null,seq__330349__$1);
var G__330358 = c__14547__auto__;
var G__330359 = cljs.core.count.call(null,c__14547__auto__);
var G__330360 = 0;
seq__330349 = G__330357;
chunk__330350 = G__330358;
count__330351 = G__330359;
i__330352 = G__330360;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__330349__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__330361 = cljs.core.next.call(null,seq__330349__$1);
var G__330362 = null;
var G__330363 = 0;
var G__330364 = 0;
seq__330349 = G__330361;
chunk__330350 = G__330362;
count__330351 = G__330363;
i__330352 = G__330364;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__330366 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__330366,0,null);var start_wrap = cljs.core.nth.call(null,vec__330366,1,null);var end_wrap = cljs.core.nth.call(null,vec__330366,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__330367 = wrapper.lastChild;
var G__330368 = (level - 1);
wrapper = G__330367;
level = G__330368;
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
domina.DomContent = (function (){var obj330370 = {};return obj330370;
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
log_debug.cljs$lang$applyTo = (function (arglist__330371){
var mesg = cljs.core.seq(arglist__330371);
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
log.cljs$lang$applyTo = (function (arglist__330372){
var mesg = cljs.core.seq(arglist__330372);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__330373){
var contents = cljs.core.seq(arglist__330373);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__330374_SHARP_){return p1__330374_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__330375_SHARP_,p2__330376_SHARP_){return goog.dom.insertChildAt(p1__330375_SHARP_,p2__330376_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__330378_SHARP_,p2__330377_SHARP_){return goog.dom.insertSiblingBefore(p2__330377_SHARP_,p1__330378_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__330380_SHARP_,p2__330379_SHARP_){return goog.dom.insertSiblingAfter(p2__330379_SHARP_,p1__330380_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__330382_SHARP_,p2__330381_SHARP_){return goog.dom.replaceNode(p2__330381_SHARP_,p1__330382_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__330387_330391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330388_330392 = null;var count__330389_330393 = 0;var i__330390_330394 = 0;while(true){
if((i__330390_330394 < count__330389_330393))
{var n_330395 = cljs.core._nth.call(null,chunk__330388_330392,i__330390_330394);goog.style.setStyle(n_330395,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__330396 = seq__330387_330391;
var G__330397 = chunk__330388_330392;
var G__330398 = count__330389_330393;
var G__330399 = (i__330390_330394 + 1);
seq__330387_330391 = G__330396;
chunk__330388_330392 = G__330397;
count__330389_330393 = G__330398;
i__330390_330394 = G__330399;
continue;
}
} else
{var temp__4092__auto___330400 = cljs.core.seq.call(null,seq__330387_330391);if(temp__4092__auto___330400)
{var seq__330387_330401__$1 = temp__4092__auto___330400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330387_330401__$1))
{var c__14547__auto___330402 = cljs.core.chunk_first.call(null,seq__330387_330401__$1);{
var G__330403 = cljs.core.chunk_rest.call(null,seq__330387_330401__$1);
var G__330404 = c__14547__auto___330402;
var G__330405 = cljs.core.count.call(null,c__14547__auto___330402);
var G__330406 = 0;
seq__330387_330391 = G__330403;
chunk__330388_330392 = G__330404;
count__330389_330393 = G__330405;
i__330390_330394 = G__330406;
continue;
}
} else
{var n_330407 = cljs.core.first.call(null,seq__330387_330401__$1);goog.style.setStyle(n_330407,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__330408 = cljs.core.next.call(null,seq__330387_330401__$1);
var G__330409 = null;
var G__330410 = 0;
var G__330411 = 0;
seq__330387_330391 = G__330408;
chunk__330388_330392 = G__330409;
count__330389_330393 = G__330410;
i__330390_330394 = G__330411;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__330412){
var content = cljs.core.first(arglist__330412);
arglist__330412 = cljs.core.next(arglist__330412);
var name = cljs.core.first(arglist__330412);
var value = cljs.core.rest(arglist__330412);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__330417_330421 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330418_330422 = null;var count__330419_330423 = 0;var i__330420_330424 = 0;while(true){
if((i__330420_330424 < count__330419_330423))
{var n_330425 = cljs.core._nth.call(null,chunk__330418_330422,i__330420_330424);n_330425.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__330426 = seq__330417_330421;
var G__330427 = chunk__330418_330422;
var G__330428 = count__330419_330423;
var G__330429 = (i__330420_330424 + 1);
seq__330417_330421 = G__330426;
chunk__330418_330422 = G__330427;
count__330419_330423 = G__330428;
i__330420_330424 = G__330429;
continue;
}
} else
{var temp__4092__auto___330430 = cljs.core.seq.call(null,seq__330417_330421);if(temp__4092__auto___330430)
{var seq__330417_330431__$1 = temp__4092__auto___330430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330417_330431__$1))
{var c__14547__auto___330432 = cljs.core.chunk_first.call(null,seq__330417_330431__$1);{
var G__330433 = cljs.core.chunk_rest.call(null,seq__330417_330431__$1);
var G__330434 = c__14547__auto___330432;
var G__330435 = cljs.core.count.call(null,c__14547__auto___330432);
var G__330436 = 0;
seq__330417_330421 = G__330433;
chunk__330418_330422 = G__330434;
count__330419_330423 = G__330435;
i__330420_330424 = G__330436;
continue;
}
} else
{var n_330437 = cljs.core.first.call(null,seq__330417_330431__$1);n_330437.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__330438 = cljs.core.next.call(null,seq__330417_330431__$1);
var G__330439 = null;
var G__330440 = 0;
var G__330441 = 0;
seq__330417_330421 = G__330438;
chunk__330418_330422 = G__330439;
count__330419_330423 = G__330440;
i__330420_330424 = G__330441;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__330442){
var content = cljs.core.first(arglist__330442);
arglist__330442 = cljs.core.next(arglist__330442);
var name = cljs.core.first(arglist__330442);
var value = cljs.core.rest(arglist__330442);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__330447_330451 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330448_330452 = null;var count__330449_330453 = 0;var i__330450_330454 = 0;while(true){
if((i__330450_330454 < count__330449_330453))
{var n_330455 = cljs.core._nth.call(null,chunk__330448_330452,i__330450_330454);n_330455.removeAttribute(cljs.core.name.call(null,name));
{
var G__330456 = seq__330447_330451;
var G__330457 = chunk__330448_330452;
var G__330458 = count__330449_330453;
var G__330459 = (i__330450_330454 + 1);
seq__330447_330451 = G__330456;
chunk__330448_330452 = G__330457;
count__330449_330453 = G__330458;
i__330450_330454 = G__330459;
continue;
}
} else
{var temp__4092__auto___330460 = cljs.core.seq.call(null,seq__330447_330451);if(temp__4092__auto___330460)
{var seq__330447_330461__$1 = temp__4092__auto___330460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330447_330461__$1))
{var c__14547__auto___330462 = cljs.core.chunk_first.call(null,seq__330447_330461__$1);{
var G__330463 = cljs.core.chunk_rest.call(null,seq__330447_330461__$1);
var G__330464 = c__14547__auto___330462;
var G__330465 = cljs.core.count.call(null,c__14547__auto___330462);
var G__330466 = 0;
seq__330447_330451 = G__330463;
chunk__330448_330452 = G__330464;
count__330449_330453 = G__330465;
i__330450_330454 = G__330466;
continue;
}
} else
{var n_330467 = cljs.core.first.call(null,seq__330447_330461__$1);n_330467.removeAttribute(cljs.core.name.call(null,name));
{
var G__330468 = cljs.core.next.call(null,seq__330447_330461__$1);
var G__330469 = null;
var G__330470 = 0;
var G__330471 = 0;
seq__330447_330451 = G__330468;
chunk__330448_330452 = G__330469;
count__330449_330453 = G__330470;
i__330450_330454 = G__330471;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__330473 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__330473,0,null);var v = cljs.core.nth.call(null,vec__330473,1,null);if(cljs.core.truth_((function (){var and__13811__auto__ = k;if(cljs.core.truth_(and__13811__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__330474_SHARP_){var attr = attrs__$1.item(p1__330474_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__330481_330487 = cljs.core.seq.call(null,styles);var chunk__330482_330488 = null;var count__330483_330489 = 0;var i__330484_330490 = 0;while(true){
if((i__330484_330490 < count__330483_330489))
{var vec__330485_330491 = cljs.core._nth.call(null,chunk__330482_330488,i__330484_330490);var name_330492 = cljs.core.nth.call(null,vec__330485_330491,0,null);var value_330493 = cljs.core.nth.call(null,vec__330485_330491,1,null);domina.set_style_BANG_.call(null,content,name_330492,value_330493);
{
var G__330494 = seq__330481_330487;
var G__330495 = chunk__330482_330488;
var G__330496 = count__330483_330489;
var G__330497 = (i__330484_330490 + 1);
seq__330481_330487 = G__330494;
chunk__330482_330488 = G__330495;
count__330483_330489 = G__330496;
i__330484_330490 = G__330497;
continue;
}
} else
{var temp__4092__auto___330498 = cljs.core.seq.call(null,seq__330481_330487);if(temp__4092__auto___330498)
{var seq__330481_330499__$1 = temp__4092__auto___330498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330481_330499__$1))
{var c__14547__auto___330500 = cljs.core.chunk_first.call(null,seq__330481_330499__$1);{
var G__330501 = cljs.core.chunk_rest.call(null,seq__330481_330499__$1);
var G__330502 = c__14547__auto___330500;
var G__330503 = cljs.core.count.call(null,c__14547__auto___330500);
var G__330504 = 0;
seq__330481_330487 = G__330501;
chunk__330482_330488 = G__330502;
count__330483_330489 = G__330503;
i__330484_330490 = G__330504;
continue;
}
} else
{var vec__330486_330505 = cljs.core.first.call(null,seq__330481_330499__$1);var name_330506 = cljs.core.nth.call(null,vec__330486_330505,0,null);var value_330507 = cljs.core.nth.call(null,vec__330486_330505,1,null);domina.set_style_BANG_.call(null,content,name_330506,value_330507);
{
var G__330508 = cljs.core.next.call(null,seq__330481_330499__$1);
var G__330509 = null;
var G__330510 = 0;
var G__330511 = 0;
seq__330481_330487 = G__330508;
chunk__330482_330488 = G__330509;
count__330483_330489 = G__330510;
i__330484_330490 = G__330511;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__330518_330524 = cljs.core.seq.call(null,attrs);var chunk__330519_330525 = null;var count__330520_330526 = 0;var i__330521_330527 = 0;while(true){
if((i__330521_330527 < count__330520_330526))
{var vec__330522_330528 = cljs.core._nth.call(null,chunk__330519_330525,i__330521_330527);var name_330529 = cljs.core.nth.call(null,vec__330522_330528,0,null);var value_330530 = cljs.core.nth.call(null,vec__330522_330528,1,null);domina.set_attr_BANG_.call(null,content,name_330529,value_330530);
{
var G__330531 = seq__330518_330524;
var G__330532 = chunk__330519_330525;
var G__330533 = count__330520_330526;
var G__330534 = (i__330521_330527 + 1);
seq__330518_330524 = G__330531;
chunk__330519_330525 = G__330532;
count__330520_330526 = G__330533;
i__330521_330527 = G__330534;
continue;
}
} else
{var temp__4092__auto___330535 = cljs.core.seq.call(null,seq__330518_330524);if(temp__4092__auto___330535)
{var seq__330518_330536__$1 = temp__4092__auto___330535;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330518_330536__$1))
{var c__14547__auto___330537 = cljs.core.chunk_first.call(null,seq__330518_330536__$1);{
var G__330538 = cljs.core.chunk_rest.call(null,seq__330518_330536__$1);
var G__330539 = c__14547__auto___330537;
var G__330540 = cljs.core.count.call(null,c__14547__auto___330537);
var G__330541 = 0;
seq__330518_330524 = G__330538;
chunk__330519_330525 = G__330539;
count__330520_330526 = G__330540;
i__330521_330527 = G__330541;
continue;
}
} else
{var vec__330523_330542 = cljs.core.first.call(null,seq__330518_330536__$1);var name_330543 = cljs.core.nth.call(null,vec__330523_330542,0,null);var value_330544 = cljs.core.nth.call(null,vec__330523_330542,1,null);domina.set_attr_BANG_.call(null,content,name_330543,value_330544);
{
var G__330545 = cljs.core.next.call(null,seq__330518_330536__$1);
var G__330546 = null;
var G__330547 = 0;
var G__330548 = 0;
seq__330518_330524 = G__330545;
chunk__330519_330525 = G__330546;
count__330520_330526 = G__330547;
i__330521_330527 = G__330548;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__330553_330557 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330554_330558 = null;var count__330555_330559 = 0;var i__330556_330560 = 0;while(true){
if((i__330556_330560 < count__330555_330559))
{var node_330561 = cljs.core._nth.call(null,chunk__330554_330558,i__330556_330560);goog.dom.classes.add(node_330561,class$);
{
var G__330562 = seq__330553_330557;
var G__330563 = chunk__330554_330558;
var G__330564 = count__330555_330559;
var G__330565 = (i__330556_330560 + 1);
seq__330553_330557 = G__330562;
chunk__330554_330558 = G__330563;
count__330555_330559 = G__330564;
i__330556_330560 = G__330565;
continue;
}
} else
{var temp__4092__auto___330566 = cljs.core.seq.call(null,seq__330553_330557);if(temp__4092__auto___330566)
{var seq__330553_330567__$1 = temp__4092__auto___330566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330553_330567__$1))
{var c__14547__auto___330568 = cljs.core.chunk_first.call(null,seq__330553_330567__$1);{
var G__330569 = cljs.core.chunk_rest.call(null,seq__330553_330567__$1);
var G__330570 = c__14547__auto___330568;
var G__330571 = cljs.core.count.call(null,c__14547__auto___330568);
var G__330572 = 0;
seq__330553_330557 = G__330569;
chunk__330554_330558 = G__330570;
count__330555_330559 = G__330571;
i__330556_330560 = G__330572;
continue;
}
} else
{var node_330573 = cljs.core.first.call(null,seq__330553_330567__$1);goog.dom.classes.add(node_330573,class$);
{
var G__330574 = cljs.core.next.call(null,seq__330553_330567__$1);
var G__330575 = null;
var G__330576 = 0;
var G__330577 = 0;
seq__330553_330557 = G__330574;
chunk__330554_330558 = G__330575;
count__330555_330559 = G__330576;
i__330556_330560 = G__330577;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__330582_330586 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330583_330587 = null;var count__330584_330588 = 0;var i__330585_330589 = 0;while(true){
if((i__330585_330589 < count__330584_330588))
{var node_330590 = cljs.core._nth.call(null,chunk__330583_330587,i__330585_330589);goog.dom.classes.remove(node_330590,class$);
{
var G__330591 = seq__330582_330586;
var G__330592 = chunk__330583_330587;
var G__330593 = count__330584_330588;
var G__330594 = (i__330585_330589 + 1);
seq__330582_330586 = G__330591;
chunk__330583_330587 = G__330592;
count__330584_330588 = G__330593;
i__330585_330589 = G__330594;
continue;
}
} else
{var temp__4092__auto___330595 = cljs.core.seq.call(null,seq__330582_330586);if(temp__4092__auto___330595)
{var seq__330582_330596__$1 = temp__4092__auto___330595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330582_330596__$1))
{var c__14547__auto___330597 = cljs.core.chunk_first.call(null,seq__330582_330596__$1);{
var G__330598 = cljs.core.chunk_rest.call(null,seq__330582_330596__$1);
var G__330599 = c__14547__auto___330597;
var G__330600 = cljs.core.count.call(null,c__14547__auto___330597);
var G__330601 = 0;
seq__330582_330586 = G__330598;
chunk__330583_330587 = G__330599;
count__330584_330588 = G__330600;
i__330585_330589 = G__330601;
continue;
}
} else
{var node_330602 = cljs.core.first.call(null,seq__330582_330596__$1);goog.dom.classes.remove(node_330602,class$);
{
var G__330603 = cljs.core.next.call(null,seq__330582_330596__$1);
var G__330604 = null;
var G__330605 = 0;
var G__330606 = 0;
seq__330582_330586 = G__330603;
chunk__330583_330587 = G__330604;
count__330584_330588 = G__330605;
i__330585_330589 = G__330606;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__330611_330615 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330612_330616 = null;var count__330613_330617 = 0;var i__330614_330618 = 0;while(true){
if((i__330614_330618 < count__330613_330617))
{var node_330619 = cljs.core._nth.call(null,chunk__330612_330616,i__330614_330618);goog.dom.classes.toggle(node_330619,class$);
{
var G__330620 = seq__330611_330615;
var G__330621 = chunk__330612_330616;
var G__330622 = count__330613_330617;
var G__330623 = (i__330614_330618 + 1);
seq__330611_330615 = G__330620;
chunk__330612_330616 = G__330621;
count__330613_330617 = G__330622;
i__330614_330618 = G__330623;
continue;
}
} else
{var temp__4092__auto___330624 = cljs.core.seq.call(null,seq__330611_330615);if(temp__4092__auto___330624)
{var seq__330611_330625__$1 = temp__4092__auto___330624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330611_330625__$1))
{var c__14547__auto___330626 = cljs.core.chunk_first.call(null,seq__330611_330625__$1);{
var G__330627 = cljs.core.chunk_rest.call(null,seq__330611_330625__$1);
var G__330628 = c__14547__auto___330626;
var G__330629 = cljs.core.count.call(null,c__14547__auto___330626);
var G__330630 = 0;
seq__330611_330615 = G__330627;
chunk__330612_330616 = G__330628;
count__330613_330617 = G__330629;
i__330614_330618 = G__330630;
continue;
}
} else
{var node_330631 = cljs.core.first.call(null,seq__330611_330625__$1);goog.dom.classes.toggle(node_330631,class$);
{
var G__330632 = cljs.core.next.call(null,seq__330611_330625__$1);
var G__330633 = null;
var G__330634 = 0;
var G__330635 = 0;
seq__330611_330615 = G__330632;
chunk__330612_330616 = G__330633;
count__330613_330617 = G__330634;
i__330614_330618 = G__330635;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_330644__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__330640_330645 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330641_330646 = null;var count__330642_330647 = 0;var i__330643_330648 = 0;while(true){
if((i__330643_330648 < count__330642_330647))
{var node_330649 = cljs.core._nth.call(null,chunk__330641_330646,i__330643_330648);goog.dom.classes.set(node_330649,classes_330644__$1);
{
var G__330650 = seq__330640_330645;
var G__330651 = chunk__330641_330646;
var G__330652 = count__330642_330647;
var G__330653 = (i__330643_330648 + 1);
seq__330640_330645 = G__330650;
chunk__330641_330646 = G__330651;
count__330642_330647 = G__330652;
i__330643_330648 = G__330653;
continue;
}
} else
{var temp__4092__auto___330654 = cljs.core.seq.call(null,seq__330640_330645);if(temp__4092__auto___330654)
{var seq__330640_330655__$1 = temp__4092__auto___330654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330640_330655__$1))
{var c__14547__auto___330656 = cljs.core.chunk_first.call(null,seq__330640_330655__$1);{
var G__330657 = cljs.core.chunk_rest.call(null,seq__330640_330655__$1);
var G__330658 = c__14547__auto___330656;
var G__330659 = cljs.core.count.call(null,c__14547__auto___330656);
var G__330660 = 0;
seq__330640_330645 = G__330657;
chunk__330641_330646 = G__330658;
count__330642_330647 = G__330659;
i__330643_330648 = G__330660;
continue;
}
} else
{var node_330661 = cljs.core.first.call(null,seq__330640_330655__$1);goog.dom.classes.set(node_330661,classes_330644__$1);
{
var G__330662 = cljs.core.next.call(null,seq__330640_330655__$1);
var G__330663 = null;
var G__330664 = 0;
var G__330665 = 0;
seq__330640_330645 = G__330662;
chunk__330641_330646 = G__330663;
count__330642_330647 = G__330664;
i__330643_330648 = G__330665;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__330670_330674 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330671_330675 = null;var count__330672_330676 = 0;var i__330673_330677 = 0;while(true){
if((i__330673_330677 < count__330672_330676))
{var node_330678 = cljs.core._nth.call(null,chunk__330671_330675,i__330673_330677);goog.dom.setTextContent(node_330678,value);
{
var G__330679 = seq__330670_330674;
var G__330680 = chunk__330671_330675;
var G__330681 = count__330672_330676;
var G__330682 = (i__330673_330677 + 1);
seq__330670_330674 = G__330679;
chunk__330671_330675 = G__330680;
count__330672_330676 = G__330681;
i__330673_330677 = G__330682;
continue;
}
} else
{var temp__4092__auto___330683 = cljs.core.seq.call(null,seq__330670_330674);if(temp__4092__auto___330683)
{var seq__330670_330684__$1 = temp__4092__auto___330683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330670_330684__$1))
{var c__14547__auto___330685 = cljs.core.chunk_first.call(null,seq__330670_330684__$1);{
var G__330686 = cljs.core.chunk_rest.call(null,seq__330670_330684__$1);
var G__330687 = c__14547__auto___330685;
var G__330688 = cljs.core.count.call(null,c__14547__auto___330685);
var G__330689 = 0;
seq__330670_330674 = G__330686;
chunk__330671_330675 = G__330687;
count__330672_330676 = G__330688;
i__330673_330677 = G__330689;
continue;
}
} else
{var node_330690 = cljs.core.first.call(null,seq__330670_330684__$1);goog.dom.setTextContent(node_330690,value);
{
var G__330691 = cljs.core.next.call(null,seq__330670_330684__$1);
var G__330692 = null;
var G__330693 = 0;
var G__330694 = 0;
seq__330670_330674 = G__330691;
chunk__330671_330675 = G__330692;
count__330672_330676 = G__330693;
i__330673_330677 = G__330694;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__330699_330703 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330700_330704 = null;var count__330701_330705 = 0;var i__330702_330706 = 0;while(true){
if((i__330702_330706 < count__330701_330705))
{var node_330707 = cljs.core._nth.call(null,chunk__330700_330704,i__330702_330706);goog.dom.forms.setValue(node_330707,value);
{
var G__330708 = seq__330699_330703;
var G__330709 = chunk__330700_330704;
var G__330710 = count__330701_330705;
var G__330711 = (i__330702_330706 + 1);
seq__330699_330703 = G__330708;
chunk__330700_330704 = G__330709;
count__330701_330705 = G__330710;
i__330702_330706 = G__330711;
continue;
}
} else
{var temp__4092__auto___330712 = cljs.core.seq.call(null,seq__330699_330703);if(temp__4092__auto___330712)
{var seq__330699_330713__$1 = temp__4092__auto___330712;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330699_330713__$1))
{var c__14547__auto___330714 = cljs.core.chunk_first.call(null,seq__330699_330713__$1);{
var G__330715 = cljs.core.chunk_rest.call(null,seq__330699_330713__$1);
var G__330716 = c__14547__auto___330714;
var G__330717 = cljs.core.count.call(null,c__14547__auto___330714);
var G__330718 = 0;
seq__330699_330703 = G__330715;
chunk__330700_330704 = G__330716;
count__330701_330705 = G__330717;
i__330702_330706 = G__330718;
continue;
}
} else
{var node_330719 = cljs.core.first.call(null,seq__330699_330713__$1);goog.dom.forms.setValue(node_330719,value);
{
var G__330720 = cljs.core.next.call(null,seq__330699_330713__$1);
var G__330721 = null;
var G__330722 = 0;
var G__330723 = 0;
seq__330699_330703 = G__330720;
chunk__330700_330704 = G__330721;
count__330701_330705 = G__330722;
i__330702_330706 = G__330723;
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
{var value_330734 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__330730_330735 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__330731_330736 = null;var count__330732_330737 = 0;var i__330733_330738 = 0;while(true){
if((i__330733_330738 < count__330732_330737))
{var node_330739 = cljs.core._nth.call(null,chunk__330731_330736,i__330733_330738);node_330739.innerHTML = value_330734;
{
var G__330740 = seq__330730_330735;
var G__330741 = chunk__330731_330736;
var G__330742 = count__330732_330737;
var G__330743 = (i__330733_330738 + 1);
seq__330730_330735 = G__330740;
chunk__330731_330736 = G__330741;
count__330732_330737 = G__330742;
i__330733_330738 = G__330743;
continue;
}
} else
{var temp__4092__auto___330744 = cljs.core.seq.call(null,seq__330730_330735);if(temp__4092__auto___330744)
{var seq__330730_330745__$1 = temp__4092__auto___330744;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330730_330745__$1))
{var c__14547__auto___330746 = cljs.core.chunk_first.call(null,seq__330730_330745__$1);{
var G__330747 = cljs.core.chunk_rest.call(null,seq__330730_330745__$1);
var G__330748 = c__14547__auto___330746;
var G__330749 = cljs.core.count.call(null,c__14547__auto___330746);
var G__330750 = 0;
seq__330730_330735 = G__330747;
chunk__330731_330736 = G__330748;
count__330732_330737 = G__330749;
i__330733_330738 = G__330750;
continue;
}
} else
{var node_330751 = cljs.core.first.call(null,seq__330730_330745__$1);node_330751.innerHTML = value_330734;
{
var G__330752 = cljs.core.next.call(null,seq__330730_330745__$1);
var G__330753 = null;
var G__330754 = 0;
var G__330755 = 0;
seq__330730_330735 = G__330752;
chunk__330731_330736 = G__330753;
count__330732_330737 = G__330754;
i__330733_330738 = G__330755;
continue;
}
}
} else
{}
}
break;
}
}catch (e330729){if((e330729 instanceof Error))
{var e_330756 = e330729;domina.replace_children_BANG_.call(null,content,value_330734);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e330729;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__330763_330767 = cljs.core.seq.call(null,children);var chunk__330764_330768 = null;var count__330765_330769 = 0;var i__330766_330770 = 0;while(true){
if((i__330766_330770 < count__330765_330769))
{var child_330771 = cljs.core._nth.call(null,chunk__330764_330768,i__330766_330770);frag.appendChild(child_330771);
{
var G__330772 = seq__330763_330767;
var G__330773 = chunk__330764_330768;
var G__330774 = count__330765_330769;
var G__330775 = (i__330766_330770 + 1);
seq__330763_330767 = G__330772;
chunk__330764_330768 = G__330773;
count__330765_330769 = G__330774;
i__330766_330770 = G__330775;
continue;
}
} else
{var temp__4092__auto___330776 = cljs.core.seq.call(null,seq__330763_330767);if(temp__4092__auto___330776)
{var seq__330763_330777__$1 = temp__4092__auto___330776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__330763_330777__$1))
{var c__14547__auto___330778 = cljs.core.chunk_first.call(null,seq__330763_330777__$1);{
var G__330779 = cljs.core.chunk_rest.call(null,seq__330763_330777__$1);
var G__330780 = c__14547__auto___330778;
var G__330781 = cljs.core.count.call(null,c__14547__auto___330778);
var G__330782 = 0;
seq__330763_330767 = G__330779;
chunk__330764_330768 = G__330780;
count__330765_330769 = G__330781;
i__330766_330770 = G__330782;
continue;
}
} else
{var child_330783 = cljs.core.first.call(null,seq__330763_330777__$1);frag.appendChild(child_330783);
{
var G__330784 = cljs.core.next.call(null,seq__330763_330777__$1);
var G__330785 = null;
var G__330786 = 0;
var G__330787 = 0;
seq__330763_330767 = G__330784;
chunk__330764_330768 = G__330785;
count__330765_330769 = G__330786;
i__330766_330770 = G__330787;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__330757_SHARP_,p2__330758_SHARP_){return f.call(null,p1__330757_SHARP_,p2__330758_SHARP_);
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
{if((function (){var G__330789 = list_thing;if(G__330789)
{var bit__14449__auto__ = (G__330789.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__330789.cljs$core$ISeqable$))
{return true;
} else
{if((!G__330789.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330789);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330789);
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
{if((function (){var G__330790 = content;if(G__330790)
{var bit__14449__auto__ = (G__330790.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__330790.cljs$core$ISeqable$))
{return true;
} else
{if((!G__330790.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330790);
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
{if((function (){var G__330791 = content;if(G__330791)
{var bit__14449__auto__ = (G__330791.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__330791.cljs$core$ISeqable$))
{return true;
} else
{if((!G__330791.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330791);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__330791);
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