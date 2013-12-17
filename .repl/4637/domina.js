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
var opt_wrapper_26171 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26172 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26173 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26172,table_section_wrapper_26172,opt_wrapper_26171,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26173,table_section_wrapper_26172,cell_wrapper_26173,opt_wrapper_26171,table_section_wrapper_26172,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26172]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__7816__auto__ = div.firstChild;if(cljs.core.truth_(and__7816__auto__))
{return div.firstChild.childNodes;
} else
{return and__7816__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26178 = cljs.core.seq.call(null,tbody);var chunk__26179 = null;var count__26180 = 0;var i__26181 = 0;while(true){
if((i__26181 < count__26180))
{var child = cljs.core._nth.call(null,chunk__26179,i__26181);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26182 = seq__26178;
var G__26183 = chunk__26179;
var G__26184 = count__26180;
var G__26185 = (i__26181 + 1);
seq__26178 = G__26182;
chunk__26179 = G__26183;
count__26180 = G__26184;
i__26181 = G__26185;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__26178);if(temp__4092__auto__)
{var seq__26178__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26178__$1))
{var c__8552__auto__ = cljs.core.chunk_first.call(null,seq__26178__$1);{
var G__26186 = cljs.core.chunk_rest.call(null,seq__26178__$1);
var G__26187 = c__8552__auto__;
var G__26188 = cljs.core.count.call(null,c__8552__auto__);
var G__26189 = 0;
seq__26178 = G__26186;
chunk__26179 = G__26187;
count__26180 = G__26188;
i__26181 = G__26189;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__26178__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26190 = cljs.core.next.call(null,seq__26178__$1);
var G__26191 = null;
var G__26192 = 0;
var G__26193 = 0;
seq__26178 = G__26190;
chunk__26179 = G__26191;
count__26180 = G__26192;
i__26181 = G__26193;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26195 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__26195,0,null);var start_wrap = cljs.core.nth.call(null,vec__26195,1,null);var end_wrap = cljs.core.nth.call(null,vec__26195,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26196 = wrapper.lastChild;
var G__26197 = (level - 1);
wrapper = G__26196;
level = G__26197;
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
if(cljs.core.truth_((function (){var and__7816__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__7816__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__7816__auto__;
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
domina.DomContent = (function (){var obj26199 = {};return obj26199;
})();
domina.nodes = (function nodes(content){if((function (){var and__7816__auto__ = content;if(and__7816__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__7816__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__8431__auto__ = (((content == null))?null:content);return (function (){var or__7828__auto__ = (domina.nodes[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (domina.nodes["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__7816__auto__ = nodeseq;if(and__7816__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__7816__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__8431__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__7828__auto__ = (domina.single_node[goog.typeOf(x__8431__auto__)]);if(or__7828__auto__)
{return or__7828__auto__;
} else
{var or__7828__auto____$1 = (domina.single_node["_"]);if(or__7828__auto____$1)
{return or__7828__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__7816__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__7816__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__7816__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__26200){
var mesg = cljs.core.seq(arglist__26200);
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
log.cljs$lang$applyTo = (function (arglist__26201){
var mesg = cljs.core.seq(arglist__26201);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26202){
var contents = cljs.core.seq(arglist__26202);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__26203_SHARP_){return p1__26203_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__26204_SHARP_,p2__26205_SHARP_){return goog.dom.insertChildAt(p1__26204_SHARP_,p2__26205_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__26207_SHARP_,p2__26206_SHARP_){return goog.dom.insertSiblingBefore(p2__26206_SHARP_,p1__26207_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__26209_SHARP_,p2__26208_SHARP_){return goog.dom.insertSiblingAfter(p2__26208_SHARP_,p1__26209_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__26211_SHARP_,p2__26210_SHARP_){return goog.dom.replaceNode(p2__26210_SHARP_,p1__26211_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26216_26220 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26217_26221 = null;var count__26218_26222 = 0;var i__26219_26223 = 0;while(true){
if((i__26219_26223 < count__26218_26222))
{var n_26224 = cljs.core._nth.call(null,chunk__26217_26221,i__26219_26223);goog.style.setStyle(n_26224,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26225 = seq__26216_26220;
var G__26226 = chunk__26217_26221;
var G__26227 = count__26218_26222;
var G__26228 = (i__26219_26223 + 1);
seq__26216_26220 = G__26225;
chunk__26217_26221 = G__26226;
count__26218_26222 = G__26227;
i__26219_26223 = G__26228;
continue;
}
} else
{var temp__4092__auto___26229 = cljs.core.seq.call(null,seq__26216_26220);if(temp__4092__auto___26229)
{var seq__26216_26230__$1 = temp__4092__auto___26229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26216_26230__$1))
{var c__8552__auto___26231 = cljs.core.chunk_first.call(null,seq__26216_26230__$1);{
var G__26232 = cljs.core.chunk_rest.call(null,seq__26216_26230__$1);
var G__26233 = c__8552__auto___26231;
var G__26234 = cljs.core.count.call(null,c__8552__auto___26231);
var G__26235 = 0;
seq__26216_26220 = G__26232;
chunk__26217_26221 = G__26233;
count__26218_26222 = G__26234;
i__26219_26223 = G__26235;
continue;
}
} else
{var n_26236 = cljs.core.first.call(null,seq__26216_26230__$1);goog.style.setStyle(n_26236,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26237 = cljs.core.next.call(null,seq__26216_26230__$1);
var G__26238 = null;
var G__26239 = 0;
var G__26240 = 0;
seq__26216_26220 = G__26237;
chunk__26217_26221 = G__26238;
count__26218_26222 = G__26239;
i__26219_26223 = G__26240;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26241){
var content = cljs.core.first(arglist__26241);
arglist__26241 = cljs.core.next(arglist__26241);
var name = cljs.core.first(arglist__26241);
var value = cljs.core.rest(arglist__26241);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26246_26250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26247_26251 = null;var count__26248_26252 = 0;var i__26249_26253 = 0;while(true){
if((i__26249_26253 < count__26248_26252))
{var n_26254 = cljs.core._nth.call(null,chunk__26247_26251,i__26249_26253);n_26254.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26255 = seq__26246_26250;
var G__26256 = chunk__26247_26251;
var G__26257 = count__26248_26252;
var G__26258 = (i__26249_26253 + 1);
seq__26246_26250 = G__26255;
chunk__26247_26251 = G__26256;
count__26248_26252 = G__26257;
i__26249_26253 = G__26258;
continue;
}
} else
{var temp__4092__auto___26259 = cljs.core.seq.call(null,seq__26246_26250);if(temp__4092__auto___26259)
{var seq__26246_26260__$1 = temp__4092__auto___26259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26246_26260__$1))
{var c__8552__auto___26261 = cljs.core.chunk_first.call(null,seq__26246_26260__$1);{
var G__26262 = cljs.core.chunk_rest.call(null,seq__26246_26260__$1);
var G__26263 = c__8552__auto___26261;
var G__26264 = cljs.core.count.call(null,c__8552__auto___26261);
var G__26265 = 0;
seq__26246_26250 = G__26262;
chunk__26247_26251 = G__26263;
count__26248_26252 = G__26264;
i__26249_26253 = G__26265;
continue;
}
} else
{var n_26266 = cljs.core.first.call(null,seq__26246_26260__$1);n_26266.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__26267 = cljs.core.next.call(null,seq__26246_26260__$1);
var G__26268 = null;
var G__26269 = 0;
var G__26270 = 0;
seq__26246_26250 = G__26267;
chunk__26247_26251 = G__26268;
count__26248_26252 = G__26269;
i__26249_26253 = G__26270;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26271){
var content = cljs.core.first(arglist__26271);
arglist__26271 = cljs.core.next(arglist__26271);
var name = cljs.core.first(arglist__26271);
var value = cljs.core.rest(arglist__26271);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26276_26280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26277_26281 = null;var count__26278_26282 = 0;var i__26279_26283 = 0;while(true){
if((i__26279_26283 < count__26278_26282))
{var n_26284 = cljs.core._nth.call(null,chunk__26277_26281,i__26279_26283);n_26284.removeAttribute(cljs.core.name.call(null,name));
{
var G__26285 = seq__26276_26280;
var G__26286 = chunk__26277_26281;
var G__26287 = count__26278_26282;
var G__26288 = (i__26279_26283 + 1);
seq__26276_26280 = G__26285;
chunk__26277_26281 = G__26286;
count__26278_26282 = G__26287;
i__26279_26283 = G__26288;
continue;
}
} else
{var temp__4092__auto___26289 = cljs.core.seq.call(null,seq__26276_26280);if(temp__4092__auto___26289)
{var seq__26276_26290__$1 = temp__4092__auto___26289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26276_26290__$1))
{var c__8552__auto___26291 = cljs.core.chunk_first.call(null,seq__26276_26290__$1);{
var G__26292 = cljs.core.chunk_rest.call(null,seq__26276_26290__$1);
var G__26293 = c__8552__auto___26291;
var G__26294 = cljs.core.count.call(null,c__8552__auto___26291);
var G__26295 = 0;
seq__26276_26280 = G__26292;
chunk__26277_26281 = G__26293;
count__26278_26282 = G__26294;
i__26279_26283 = G__26295;
continue;
}
} else
{var n_26296 = cljs.core.first.call(null,seq__26276_26290__$1);n_26296.removeAttribute(cljs.core.name.call(null,name));
{
var G__26297 = cljs.core.next.call(null,seq__26276_26290__$1);
var G__26298 = null;
var G__26299 = 0;
var G__26300 = 0;
seq__26276_26280 = G__26297;
chunk__26277_26281 = G__26298;
count__26278_26282 = G__26299;
i__26279_26283 = G__26300;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__26302 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__26302,0,null);var v = cljs.core.nth.call(null,vec__26302,1,null);if(cljs.core.truth_((function (){var and__7816__auto__ = k;if(cljs.core.truth_(and__7816__auto__))
{return v;
} else
{return and__7816__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__26303_SHARP_){var attr = attrs__$1.item(p1__26303_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26310_26316 = cljs.core.seq.call(null,styles);var chunk__26311_26317 = null;var count__26312_26318 = 0;var i__26313_26319 = 0;while(true){
if((i__26313_26319 < count__26312_26318))
{var vec__26314_26320 = cljs.core._nth.call(null,chunk__26311_26317,i__26313_26319);var name_26321 = cljs.core.nth.call(null,vec__26314_26320,0,null);var value_26322 = cljs.core.nth.call(null,vec__26314_26320,1,null);domina.set_style_BANG_.call(null,content,name_26321,value_26322);
{
var G__26323 = seq__26310_26316;
var G__26324 = chunk__26311_26317;
var G__26325 = count__26312_26318;
var G__26326 = (i__26313_26319 + 1);
seq__26310_26316 = G__26323;
chunk__26311_26317 = G__26324;
count__26312_26318 = G__26325;
i__26313_26319 = G__26326;
continue;
}
} else
{var temp__4092__auto___26327 = cljs.core.seq.call(null,seq__26310_26316);if(temp__4092__auto___26327)
{var seq__26310_26328__$1 = temp__4092__auto___26327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26310_26328__$1))
{var c__8552__auto___26329 = cljs.core.chunk_first.call(null,seq__26310_26328__$1);{
var G__26330 = cljs.core.chunk_rest.call(null,seq__26310_26328__$1);
var G__26331 = c__8552__auto___26329;
var G__26332 = cljs.core.count.call(null,c__8552__auto___26329);
var G__26333 = 0;
seq__26310_26316 = G__26330;
chunk__26311_26317 = G__26331;
count__26312_26318 = G__26332;
i__26313_26319 = G__26333;
continue;
}
} else
{var vec__26315_26334 = cljs.core.first.call(null,seq__26310_26328__$1);var name_26335 = cljs.core.nth.call(null,vec__26315_26334,0,null);var value_26336 = cljs.core.nth.call(null,vec__26315_26334,1,null);domina.set_style_BANG_.call(null,content,name_26335,value_26336);
{
var G__26337 = cljs.core.next.call(null,seq__26310_26328__$1);
var G__26338 = null;
var G__26339 = 0;
var G__26340 = 0;
seq__26310_26316 = G__26337;
chunk__26311_26317 = G__26338;
count__26312_26318 = G__26339;
i__26313_26319 = G__26340;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26347_26353 = cljs.core.seq.call(null,attrs);var chunk__26348_26354 = null;var count__26349_26355 = 0;var i__26350_26356 = 0;while(true){
if((i__26350_26356 < count__26349_26355))
{var vec__26351_26357 = cljs.core._nth.call(null,chunk__26348_26354,i__26350_26356);var name_26358 = cljs.core.nth.call(null,vec__26351_26357,0,null);var value_26359 = cljs.core.nth.call(null,vec__26351_26357,1,null);domina.set_attr_BANG_.call(null,content,name_26358,value_26359);
{
var G__26360 = seq__26347_26353;
var G__26361 = chunk__26348_26354;
var G__26362 = count__26349_26355;
var G__26363 = (i__26350_26356 + 1);
seq__26347_26353 = G__26360;
chunk__26348_26354 = G__26361;
count__26349_26355 = G__26362;
i__26350_26356 = G__26363;
continue;
}
} else
{var temp__4092__auto___26364 = cljs.core.seq.call(null,seq__26347_26353);if(temp__4092__auto___26364)
{var seq__26347_26365__$1 = temp__4092__auto___26364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26347_26365__$1))
{var c__8552__auto___26366 = cljs.core.chunk_first.call(null,seq__26347_26365__$1);{
var G__26367 = cljs.core.chunk_rest.call(null,seq__26347_26365__$1);
var G__26368 = c__8552__auto___26366;
var G__26369 = cljs.core.count.call(null,c__8552__auto___26366);
var G__26370 = 0;
seq__26347_26353 = G__26367;
chunk__26348_26354 = G__26368;
count__26349_26355 = G__26369;
i__26350_26356 = G__26370;
continue;
}
} else
{var vec__26352_26371 = cljs.core.first.call(null,seq__26347_26365__$1);var name_26372 = cljs.core.nth.call(null,vec__26352_26371,0,null);var value_26373 = cljs.core.nth.call(null,vec__26352_26371,1,null);domina.set_attr_BANG_.call(null,content,name_26372,value_26373);
{
var G__26374 = cljs.core.next.call(null,seq__26347_26365__$1);
var G__26375 = null;
var G__26376 = 0;
var G__26377 = 0;
seq__26347_26353 = G__26374;
chunk__26348_26354 = G__26375;
count__26349_26355 = G__26376;
i__26350_26356 = G__26377;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__26382_26386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26383_26387 = null;var count__26384_26388 = 0;var i__26385_26389 = 0;while(true){
if((i__26385_26389 < count__26384_26388))
{var node_26390 = cljs.core._nth.call(null,chunk__26383_26387,i__26385_26389);goog.dom.classes.add(node_26390,class$);
{
var G__26391 = seq__26382_26386;
var G__26392 = chunk__26383_26387;
var G__26393 = count__26384_26388;
var G__26394 = (i__26385_26389 + 1);
seq__26382_26386 = G__26391;
chunk__26383_26387 = G__26392;
count__26384_26388 = G__26393;
i__26385_26389 = G__26394;
continue;
}
} else
{var temp__4092__auto___26395 = cljs.core.seq.call(null,seq__26382_26386);if(temp__4092__auto___26395)
{var seq__26382_26396__$1 = temp__4092__auto___26395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26382_26396__$1))
{var c__8552__auto___26397 = cljs.core.chunk_first.call(null,seq__26382_26396__$1);{
var G__26398 = cljs.core.chunk_rest.call(null,seq__26382_26396__$1);
var G__26399 = c__8552__auto___26397;
var G__26400 = cljs.core.count.call(null,c__8552__auto___26397);
var G__26401 = 0;
seq__26382_26386 = G__26398;
chunk__26383_26387 = G__26399;
count__26384_26388 = G__26400;
i__26385_26389 = G__26401;
continue;
}
} else
{var node_26402 = cljs.core.first.call(null,seq__26382_26396__$1);goog.dom.classes.add(node_26402,class$);
{
var G__26403 = cljs.core.next.call(null,seq__26382_26396__$1);
var G__26404 = null;
var G__26405 = 0;
var G__26406 = 0;
seq__26382_26386 = G__26403;
chunk__26383_26387 = G__26404;
count__26384_26388 = G__26405;
i__26385_26389 = G__26406;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__26411_26415 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26412_26416 = null;var count__26413_26417 = 0;var i__26414_26418 = 0;while(true){
if((i__26414_26418 < count__26413_26417))
{var node_26419 = cljs.core._nth.call(null,chunk__26412_26416,i__26414_26418);goog.dom.classes.remove(node_26419,class$);
{
var G__26420 = seq__26411_26415;
var G__26421 = chunk__26412_26416;
var G__26422 = count__26413_26417;
var G__26423 = (i__26414_26418 + 1);
seq__26411_26415 = G__26420;
chunk__26412_26416 = G__26421;
count__26413_26417 = G__26422;
i__26414_26418 = G__26423;
continue;
}
} else
{var temp__4092__auto___26424 = cljs.core.seq.call(null,seq__26411_26415);if(temp__4092__auto___26424)
{var seq__26411_26425__$1 = temp__4092__auto___26424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26411_26425__$1))
{var c__8552__auto___26426 = cljs.core.chunk_first.call(null,seq__26411_26425__$1);{
var G__26427 = cljs.core.chunk_rest.call(null,seq__26411_26425__$1);
var G__26428 = c__8552__auto___26426;
var G__26429 = cljs.core.count.call(null,c__8552__auto___26426);
var G__26430 = 0;
seq__26411_26415 = G__26427;
chunk__26412_26416 = G__26428;
count__26413_26417 = G__26429;
i__26414_26418 = G__26430;
continue;
}
} else
{var node_26431 = cljs.core.first.call(null,seq__26411_26425__$1);goog.dom.classes.remove(node_26431,class$);
{
var G__26432 = cljs.core.next.call(null,seq__26411_26425__$1);
var G__26433 = null;
var G__26434 = 0;
var G__26435 = 0;
seq__26411_26415 = G__26432;
chunk__26412_26416 = G__26433;
count__26413_26417 = G__26434;
i__26414_26418 = G__26435;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__26440_26444 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26441_26445 = null;var count__26442_26446 = 0;var i__26443_26447 = 0;while(true){
if((i__26443_26447 < count__26442_26446))
{var node_26448 = cljs.core._nth.call(null,chunk__26441_26445,i__26443_26447);goog.dom.classes.toggle(node_26448,class$);
{
var G__26449 = seq__26440_26444;
var G__26450 = chunk__26441_26445;
var G__26451 = count__26442_26446;
var G__26452 = (i__26443_26447 + 1);
seq__26440_26444 = G__26449;
chunk__26441_26445 = G__26450;
count__26442_26446 = G__26451;
i__26443_26447 = G__26452;
continue;
}
} else
{var temp__4092__auto___26453 = cljs.core.seq.call(null,seq__26440_26444);if(temp__4092__auto___26453)
{var seq__26440_26454__$1 = temp__4092__auto___26453;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26440_26454__$1))
{var c__8552__auto___26455 = cljs.core.chunk_first.call(null,seq__26440_26454__$1);{
var G__26456 = cljs.core.chunk_rest.call(null,seq__26440_26454__$1);
var G__26457 = c__8552__auto___26455;
var G__26458 = cljs.core.count.call(null,c__8552__auto___26455);
var G__26459 = 0;
seq__26440_26444 = G__26456;
chunk__26441_26445 = G__26457;
count__26442_26446 = G__26458;
i__26443_26447 = G__26459;
continue;
}
} else
{var node_26460 = cljs.core.first.call(null,seq__26440_26454__$1);goog.dom.classes.toggle(node_26460,class$);
{
var G__26461 = cljs.core.next.call(null,seq__26440_26454__$1);
var G__26462 = null;
var G__26463 = 0;
var G__26464 = 0;
seq__26440_26444 = G__26461;
chunk__26441_26445 = G__26462;
count__26442_26446 = G__26463;
i__26443_26447 = G__26464;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_26473__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__26469_26474 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26470_26475 = null;var count__26471_26476 = 0;var i__26472_26477 = 0;while(true){
if((i__26472_26477 < count__26471_26476))
{var node_26478 = cljs.core._nth.call(null,chunk__26470_26475,i__26472_26477);goog.dom.classes.set(node_26478,classes_26473__$1);
{
var G__26479 = seq__26469_26474;
var G__26480 = chunk__26470_26475;
var G__26481 = count__26471_26476;
var G__26482 = (i__26472_26477 + 1);
seq__26469_26474 = G__26479;
chunk__26470_26475 = G__26480;
count__26471_26476 = G__26481;
i__26472_26477 = G__26482;
continue;
}
} else
{var temp__4092__auto___26483 = cljs.core.seq.call(null,seq__26469_26474);if(temp__4092__auto___26483)
{var seq__26469_26484__$1 = temp__4092__auto___26483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26469_26484__$1))
{var c__8552__auto___26485 = cljs.core.chunk_first.call(null,seq__26469_26484__$1);{
var G__26486 = cljs.core.chunk_rest.call(null,seq__26469_26484__$1);
var G__26487 = c__8552__auto___26485;
var G__26488 = cljs.core.count.call(null,c__8552__auto___26485);
var G__26489 = 0;
seq__26469_26474 = G__26486;
chunk__26470_26475 = G__26487;
count__26471_26476 = G__26488;
i__26472_26477 = G__26489;
continue;
}
} else
{var node_26490 = cljs.core.first.call(null,seq__26469_26484__$1);goog.dom.classes.set(node_26490,classes_26473__$1);
{
var G__26491 = cljs.core.next.call(null,seq__26469_26484__$1);
var G__26492 = null;
var G__26493 = 0;
var G__26494 = 0;
seq__26469_26474 = G__26491;
chunk__26470_26475 = G__26492;
count__26471_26476 = G__26493;
i__26472_26477 = G__26494;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__26499_26503 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26500_26504 = null;var count__26501_26505 = 0;var i__26502_26506 = 0;while(true){
if((i__26502_26506 < count__26501_26505))
{var node_26507 = cljs.core._nth.call(null,chunk__26500_26504,i__26502_26506);goog.dom.setTextContent(node_26507,value);
{
var G__26508 = seq__26499_26503;
var G__26509 = chunk__26500_26504;
var G__26510 = count__26501_26505;
var G__26511 = (i__26502_26506 + 1);
seq__26499_26503 = G__26508;
chunk__26500_26504 = G__26509;
count__26501_26505 = G__26510;
i__26502_26506 = G__26511;
continue;
}
} else
{var temp__4092__auto___26512 = cljs.core.seq.call(null,seq__26499_26503);if(temp__4092__auto___26512)
{var seq__26499_26513__$1 = temp__4092__auto___26512;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26499_26513__$1))
{var c__8552__auto___26514 = cljs.core.chunk_first.call(null,seq__26499_26513__$1);{
var G__26515 = cljs.core.chunk_rest.call(null,seq__26499_26513__$1);
var G__26516 = c__8552__auto___26514;
var G__26517 = cljs.core.count.call(null,c__8552__auto___26514);
var G__26518 = 0;
seq__26499_26503 = G__26515;
chunk__26500_26504 = G__26516;
count__26501_26505 = G__26517;
i__26502_26506 = G__26518;
continue;
}
} else
{var node_26519 = cljs.core.first.call(null,seq__26499_26513__$1);goog.dom.setTextContent(node_26519,value);
{
var G__26520 = cljs.core.next.call(null,seq__26499_26513__$1);
var G__26521 = null;
var G__26522 = 0;
var G__26523 = 0;
seq__26499_26503 = G__26520;
chunk__26500_26504 = G__26521;
count__26501_26505 = G__26522;
i__26502_26506 = G__26523;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__26528_26532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26529_26533 = null;var count__26530_26534 = 0;var i__26531_26535 = 0;while(true){
if((i__26531_26535 < count__26530_26534))
{var node_26536 = cljs.core._nth.call(null,chunk__26529_26533,i__26531_26535);goog.dom.forms.setValue(node_26536,value);
{
var G__26537 = seq__26528_26532;
var G__26538 = chunk__26529_26533;
var G__26539 = count__26530_26534;
var G__26540 = (i__26531_26535 + 1);
seq__26528_26532 = G__26537;
chunk__26529_26533 = G__26538;
count__26530_26534 = G__26539;
i__26531_26535 = G__26540;
continue;
}
} else
{var temp__4092__auto___26541 = cljs.core.seq.call(null,seq__26528_26532);if(temp__4092__auto___26541)
{var seq__26528_26542__$1 = temp__4092__auto___26541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26528_26542__$1))
{var c__8552__auto___26543 = cljs.core.chunk_first.call(null,seq__26528_26542__$1);{
var G__26544 = cljs.core.chunk_rest.call(null,seq__26528_26542__$1);
var G__26545 = c__8552__auto___26543;
var G__26546 = cljs.core.count.call(null,c__8552__auto___26543);
var G__26547 = 0;
seq__26528_26532 = G__26544;
chunk__26529_26533 = G__26545;
count__26530_26534 = G__26546;
i__26531_26535 = G__26547;
continue;
}
} else
{var node_26548 = cljs.core.first.call(null,seq__26528_26542__$1);goog.dom.forms.setValue(node_26548,value);
{
var G__26549 = cljs.core.next.call(null,seq__26528_26542__$1);
var G__26550 = null;
var G__26551 = 0;
var G__26552 = 0;
seq__26528_26532 = G__26549;
chunk__26529_26533 = G__26550;
count__26530_26534 = G__26551;
i__26531_26535 = G__26552;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__7816__auto__ = allows_inner_html_QMARK_;if(and__7816__auto__)
{var and__7816__auto____$1 = (function (){var or__7828__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__7816__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
}
})()))
{var value_26563 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__26559_26564 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26560_26565 = null;var count__26561_26566 = 0;var i__26562_26567 = 0;while(true){
if((i__26562_26567 < count__26561_26566))
{var node_26568 = cljs.core._nth.call(null,chunk__26560_26565,i__26562_26567);node_26568.innerHTML = value_26563;
{
var G__26569 = seq__26559_26564;
var G__26570 = chunk__26560_26565;
var G__26571 = count__26561_26566;
var G__26572 = (i__26562_26567 + 1);
seq__26559_26564 = G__26569;
chunk__26560_26565 = G__26570;
count__26561_26566 = G__26571;
i__26562_26567 = G__26572;
continue;
}
} else
{var temp__4092__auto___26573 = cljs.core.seq.call(null,seq__26559_26564);if(temp__4092__auto___26573)
{var seq__26559_26574__$1 = temp__4092__auto___26573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26559_26574__$1))
{var c__8552__auto___26575 = cljs.core.chunk_first.call(null,seq__26559_26574__$1);{
var G__26576 = cljs.core.chunk_rest.call(null,seq__26559_26574__$1);
var G__26577 = c__8552__auto___26575;
var G__26578 = cljs.core.count.call(null,c__8552__auto___26575);
var G__26579 = 0;
seq__26559_26564 = G__26576;
chunk__26560_26565 = G__26577;
count__26561_26566 = G__26578;
i__26562_26567 = G__26579;
continue;
}
} else
{var node_26580 = cljs.core.first.call(null,seq__26559_26574__$1);node_26580.innerHTML = value_26563;
{
var G__26581 = cljs.core.next.call(null,seq__26559_26574__$1);
var G__26582 = null;
var G__26583 = 0;
var G__26584 = 0;
seq__26559_26564 = G__26581;
chunk__26560_26565 = G__26582;
count__26561_26566 = G__26583;
i__26562_26567 = G__26584;
continue;
}
}
} else
{}
}
break;
}
}catch (e26558){if((e26558 instanceof Error))
{var e_26585 = e26558;domina.replace_children_BANG_.call(null,content,value_26563);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26558;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__7816__auto__ = bubble;if(cljs.core.truth_(and__7816__auto__))
{return (value == null);
} else
{return and__7816__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__7828__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__7828__auto__))
{return or__7828__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__26592_26596 = cljs.core.seq.call(null,children);var chunk__26593_26597 = null;var count__26594_26598 = 0;var i__26595_26599 = 0;while(true){
if((i__26595_26599 < count__26594_26598))
{var child_26600 = cljs.core._nth.call(null,chunk__26593_26597,i__26595_26599);frag.appendChild(child_26600);
{
var G__26601 = seq__26592_26596;
var G__26602 = chunk__26593_26597;
var G__26603 = count__26594_26598;
var G__26604 = (i__26595_26599 + 1);
seq__26592_26596 = G__26601;
chunk__26593_26597 = G__26602;
count__26594_26598 = G__26603;
i__26595_26599 = G__26604;
continue;
}
} else
{var temp__4092__auto___26605 = cljs.core.seq.call(null,seq__26592_26596);if(temp__4092__auto___26605)
{var seq__26592_26606__$1 = temp__4092__auto___26605;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26592_26606__$1))
{var c__8552__auto___26607 = cljs.core.chunk_first.call(null,seq__26592_26606__$1);{
var G__26608 = cljs.core.chunk_rest.call(null,seq__26592_26606__$1);
var G__26609 = c__8552__auto___26607;
var G__26610 = cljs.core.count.call(null,c__8552__auto___26607);
var G__26611 = 0;
seq__26592_26596 = G__26608;
chunk__26593_26597 = G__26609;
count__26594_26598 = G__26610;
i__26595_26599 = G__26611;
continue;
}
} else
{var child_26612 = cljs.core.first.call(null,seq__26592_26606__$1);frag.appendChild(child_26612);
{
var G__26613 = cljs.core.next.call(null,seq__26592_26606__$1);
var G__26614 = null;
var G__26615 = 0;
var G__26616 = 0;
seq__26592_26596 = G__26613;
chunk__26593_26597 = G__26614;
count__26594_26598 = G__26615;
i__26595_26599 = G__26616;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__26586_SHARP_,p2__26587_SHARP_){return f.call(null,p1__26586_SHARP_,p2__26587_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__7816__auto__ = obj;if(cljs.core.truth_(and__7816__auto__))
{var and__7816__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__7816__auto____$1)
{return obj.length;
} else
{return and__7816__auto____$1;
}
} else
{return and__7816__auto__;
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
{if((function (){var G__26618 = list_thing;if(G__26618)
{var bit__8454__auto__ = (G__26618.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__26618.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26618.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26618);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26618);
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
{if((function (){var G__26619 = content;if(G__26619)
{var bit__8454__auto__ = (G__26619.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__26619.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26619.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26619);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26619);
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
{if((function (){var G__26620 = content;if(G__26620)
{var bit__8454__auto__ = (G__26620.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8454__auto__) || (G__26620.cljs$core$ISeqable$))
{return true;
} else
{if((!G__26620.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26620);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__26620);
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
