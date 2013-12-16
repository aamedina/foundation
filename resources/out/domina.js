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
var opt_wrapper_35164 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_35165 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_35166 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_35165,table_section_wrapper_35165,opt_wrapper_35164,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_35166,table_section_wrapper_35165,cell_wrapper_35166,opt_wrapper_35164,table_section_wrapper_35165,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_35165]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13811__auto__ = div.firstChild;if(cljs.core.truth_(and__13811__auto__))
{return div.firstChild.childNodes;
} else
{return and__13811__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__35171 = cljs.core.seq.call(null,tbody);var chunk__35172 = null;var count__35173 = 0;var i__35174 = 0;while(true){
if((i__35174 < count__35173))
{var child = cljs.core._nth.call(null,chunk__35172,i__35174);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35175 = seq__35171;
var G__35176 = chunk__35172;
var G__35177 = count__35173;
var G__35178 = (i__35174 + 1);
seq__35171 = G__35175;
chunk__35172 = G__35176;
count__35173 = G__35177;
i__35174 = G__35178;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35171);if(temp__4092__auto__)
{var seq__35171__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35171__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__35171__$1);{
var G__35179 = cljs.core.chunk_rest.call(null,seq__35171__$1);
var G__35180 = c__14547__auto__;
var G__35181 = cljs.core.count.call(null,c__14547__auto__);
var G__35182 = 0;
seq__35171 = G__35179;
chunk__35172 = G__35180;
count__35173 = G__35181;
i__35174 = G__35182;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__35171__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__35183 = cljs.core.next.call(null,seq__35171__$1);
var G__35184 = null;
var G__35185 = 0;
var G__35186 = 0;
seq__35171 = G__35183;
chunk__35172 = G__35184;
count__35173 = G__35185;
i__35174 = G__35186;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__35188 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__35188,0,null);var start_wrap = cljs.core.nth.call(null,vec__35188,1,null);var end_wrap = cljs.core.nth.call(null,vec__35188,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__35189 = wrapper.lastChild;
var G__35190 = (level - 1);
wrapper = G__35189;
level = G__35190;
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
domina.DomContent = (function (){var obj35192 = {};return obj35192;
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
log_debug.cljs$lang$applyTo = (function (arglist__35193){
var mesg = cljs.core.seq(arglist__35193);
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
log.cljs$lang$applyTo = (function (arglist__35194){
var mesg = cljs.core.seq(arglist__35194);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__35195){
var contents = cljs.core.seq(arglist__35195);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__35196_SHARP_){return p1__35196_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__35197_SHARP_,p2__35198_SHARP_){return goog.dom.insertChildAt(p1__35197_SHARP_,p2__35198_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35200_SHARP_,p2__35199_SHARP_){return goog.dom.insertSiblingBefore(p2__35199_SHARP_,p1__35200_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__35202_SHARP_,p2__35201_SHARP_){return goog.dom.insertSiblingAfter(p2__35201_SHARP_,p1__35202_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__35204_SHARP_,p2__35203_SHARP_){return goog.dom.replaceNode(p2__35203_SHARP_,p1__35204_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__35209_35213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35210_35214 = null;var count__35211_35215 = 0;var i__35212_35216 = 0;while(true){
if((i__35212_35216 < count__35211_35215))
{var n_35217 = cljs.core._nth.call(null,chunk__35210_35214,i__35212_35216);goog.style.setStyle(n_35217,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35218 = seq__35209_35213;
var G__35219 = chunk__35210_35214;
var G__35220 = count__35211_35215;
var G__35221 = (i__35212_35216 + 1);
seq__35209_35213 = G__35218;
chunk__35210_35214 = G__35219;
count__35211_35215 = G__35220;
i__35212_35216 = G__35221;
continue;
}
} else
{var temp__4092__auto___35222 = cljs.core.seq.call(null,seq__35209_35213);if(temp__4092__auto___35222)
{var seq__35209_35223__$1 = temp__4092__auto___35222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35209_35223__$1))
{var c__14547__auto___35224 = cljs.core.chunk_first.call(null,seq__35209_35223__$1);{
var G__35225 = cljs.core.chunk_rest.call(null,seq__35209_35223__$1);
var G__35226 = c__14547__auto___35224;
var G__35227 = cljs.core.count.call(null,c__14547__auto___35224);
var G__35228 = 0;
seq__35209_35213 = G__35225;
chunk__35210_35214 = G__35226;
count__35211_35215 = G__35227;
i__35212_35216 = G__35228;
continue;
}
} else
{var n_35229 = cljs.core.first.call(null,seq__35209_35223__$1);goog.style.setStyle(n_35229,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35230 = cljs.core.next.call(null,seq__35209_35223__$1);
var G__35231 = null;
var G__35232 = 0;
var G__35233 = 0;
seq__35209_35213 = G__35230;
chunk__35210_35214 = G__35231;
count__35211_35215 = G__35232;
i__35212_35216 = G__35233;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35234){
var content = cljs.core.first(arglist__35234);
arglist__35234 = cljs.core.next(arglist__35234);
var name = cljs.core.first(arglist__35234);
var value = cljs.core.rest(arglist__35234);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35239_35243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35240_35244 = null;var count__35241_35245 = 0;var i__35242_35246 = 0;while(true){
if((i__35242_35246 < count__35241_35245))
{var n_35247 = cljs.core._nth.call(null,chunk__35240_35244,i__35242_35246);n_35247.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35248 = seq__35239_35243;
var G__35249 = chunk__35240_35244;
var G__35250 = count__35241_35245;
var G__35251 = (i__35242_35246 + 1);
seq__35239_35243 = G__35248;
chunk__35240_35244 = G__35249;
count__35241_35245 = G__35250;
i__35242_35246 = G__35251;
continue;
}
} else
{var temp__4092__auto___35252 = cljs.core.seq.call(null,seq__35239_35243);if(temp__4092__auto___35252)
{var seq__35239_35253__$1 = temp__4092__auto___35252;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35239_35253__$1))
{var c__14547__auto___35254 = cljs.core.chunk_first.call(null,seq__35239_35253__$1);{
var G__35255 = cljs.core.chunk_rest.call(null,seq__35239_35253__$1);
var G__35256 = c__14547__auto___35254;
var G__35257 = cljs.core.count.call(null,c__14547__auto___35254);
var G__35258 = 0;
seq__35239_35243 = G__35255;
chunk__35240_35244 = G__35256;
count__35241_35245 = G__35257;
i__35242_35246 = G__35258;
continue;
}
} else
{var n_35259 = cljs.core.first.call(null,seq__35239_35253__$1);n_35259.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35260 = cljs.core.next.call(null,seq__35239_35253__$1);
var G__35261 = null;
var G__35262 = 0;
var G__35263 = 0;
seq__35239_35243 = G__35260;
chunk__35240_35244 = G__35261;
count__35241_35245 = G__35262;
i__35242_35246 = G__35263;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35264){
var content = cljs.core.first(arglist__35264);
arglist__35264 = cljs.core.next(arglist__35264);
var name = cljs.core.first(arglist__35264);
var value = cljs.core.rest(arglist__35264);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35269_35273 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35270_35274 = null;var count__35271_35275 = 0;var i__35272_35276 = 0;while(true){
if((i__35272_35276 < count__35271_35275))
{var n_35277 = cljs.core._nth.call(null,chunk__35270_35274,i__35272_35276);n_35277.removeAttribute(cljs.core.name.call(null,name));
{
var G__35278 = seq__35269_35273;
var G__35279 = chunk__35270_35274;
var G__35280 = count__35271_35275;
var G__35281 = (i__35272_35276 + 1);
seq__35269_35273 = G__35278;
chunk__35270_35274 = G__35279;
count__35271_35275 = G__35280;
i__35272_35276 = G__35281;
continue;
}
} else
{var temp__4092__auto___35282 = cljs.core.seq.call(null,seq__35269_35273);if(temp__4092__auto___35282)
{var seq__35269_35283__$1 = temp__4092__auto___35282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35269_35283__$1))
{var c__14547__auto___35284 = cljs.core.chunk_first.call(null,seq__35269_35283__$1);{
var G__35285 = cljs.core.chunk_rest.call(null,seq__35269_35283__$1);
var G__35286 = c__14547__auto___35284;
var G__35287 = cljs.core.count.call(null,c__14547__auto___35284);
var G__35288 = 0;
seq__35269_35273 = G__35285;
chunk__35270_35274 = G__35286;
count__35271_35275 = G__35287;
i__35272_35276 = G__35288;
continue;
}
} else
{var n_35289 = cljs.core.first.call(null,seq__35269_35283__$1);n_35289.removeAttribute(cljs.core.name.call(null,name));
{
var G__35290 = cljs.core.next.call(null,seq__35269_35283__$1);
var G__35291 = null;
var G__35292 = 0;
var G__35293 = 0;
seq__35269_35273 = G__35290;
chunk__35270_35274 = G__35291;
count__35271_35275 = G__35292;
i__35272_35276 = G__35293;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__35295 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__35295,0,null);var v = cljs.core.nth.call(null,vec__35295,1,null);if(cljs.core.truth_((function (){var and__13811__auto__ = k;if(cljs.core.truth_(and__13811__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__35296_SHARP_){var attr = attrs__$1.item(p1__35296_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__35303_35309 = cljs.core.seq.call(null,styles);var chunk__35304_35310 = null;var count__35305_35311 = 0;var i__35306_35312 = 0;while(true){
if((i__35306_35312 < count__35305_35311))
{var vec__35307_35313 = cljs.core._nth.call(null,chunk__35304_35310,i__35306_35312);var name_35314 = cljs.core.nth.call(null,vec__35307_35313,0,null);var value_35315 = cljs.core.nth.call(null,vec__35307_35313,1,null);domina.set_style_BANG_.call(null,content,name_35314,value_35315);
{
var G__35316 = seq__35303_35309;
var G__35317 = chunk__35304_35310;
var G__35318 = count__35305_35311;
var G__35319 = (i__35306_35312 + 1);
seq__35303_35309 = G__35316;
chunk__35304_35310 = G__35317;
count__35305_35311 = G__35318;
i__35306_35312 = G__35319;
continue;
}
} else
{var temp__4092__auto___35320 = cljs.core.seq.call(null,seq__35303_35309);if(temp__4092__auto___35320)
{var seq__35303_35321__$1 = temp__4092__auto___35320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35303_35321__$1))
{var c__14547__auto___35322 = cljs.core.chunk_first.call(null,seq__35303_35321__$1);{
var G__35323 = cljs.core.chunk_rest.call(null,seq__35303_35321__$1);
var G__35324 = c__14547__auto___35322;
var G__35325 = cljs.core.count.call(null,c__14547__auto___35322);
var G__35326 = 0;
seq__35303_35309 = G__35323;
chunk__35304_35310 = G__35324;
count__35305_35311 = G__35325;
i__35306_35312 = G__35326;
continue;
}
} else
{var vec__35308_35327 = cljs.core.first.call(null,seq__35303_35321__$1);var name_35328 = cljs.core.nth.call(null,vec__35308_35327,0,null);var value_35329 = cljs.core.nth.call(null,vec__35308_35327,1,null);domina.set_style_BANG_.call(null,content,name_35328,value_35329);
{
var G__35330 = cljs.core.next.call(null,seq__35303_35321__$1);
var G__35331 = null;
var G__35332 = 0;
var G__35333 = 0;
seq__35303_35309 = G__35330;
chunk__35304_35310 = G__35331;
count__35305_35311 = G__35332;
i__35306_35312 = G__35333;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__35340_35346 = cljs.core.seq.call(null,attrs);var chunk__35341_35347 = null;var count__35342_35348 = 0;var i__35343_35349 = 0;while(true){
if((i__35343_35349 < count__35342_35348))
{var vec__35344_35350 = cljs.core._nth.call(null,chunk__35341_35347,i__35343_35349);var name_35351 = cljs.core.nth.call(null,vec__35344_35350,0,null);var value_35352 = cljs.core.nth.call(null,vec__35344_35350,1,null);domina.set_attr_BANG_.call(null,content,name_35351,value_35352);
{
var G__35353 = seq__35340_35346;
var G__35354 = chunk__35341_35347;
var G__35355 = count__35342_35348;
var G__35356 = (i__35343_35349 + 1);
seq__35340_35346 = G__35353;
chunk__35341_35347 = G__35354;
count__35342_35348 = G__35355;
i__35343_35349 = G__35356;
continue;
}
} else
{var temp__4092__auto___35357 = cljs.core.seq.call(null,seq__35340_35346);if(temp__4092__auto___35357)
{var seq__35340_35358__$1 = temp__4092__auto___35357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35340_35358__$1))
{var c__14547__auto___35359 = cljs.core.chunk_first.call(null,seq__35340_35358__$1);{
var G__35360 = cljs.core.chunk_rest.call(null,seq__35340_35358__$1);
var G__35361 = c__14547__auto___35359;
var G__35362 = cljs.core.count.call(null,c__14547__auto___35359);
var G__35363 = 0;
seq__35340_35346 = G__35360;
chunk__35341_35347 = G__35361;
count__35342_35348 = G__35362;
i__35343_35349 = G__35363;
continue;
}
} else
{var vec__35345_35364 = cljs.core.first.call(null,seq__35340_35358__$1);var name_35365 = cljs.core.nth.call(null,vec__35345_35364,0,null);var value_35366 = cljs.core.nth.call(null,vec__35345_35364,1,null);domina.set_attr_BANG_.call(null,content,name_35365,value_35366);
{
var G__35367 = cljs.core.next.call(null,seq__35340_35358__$1);
var G__35368 = null;
var G__35369 = 0;
var G__35370 = 0;
seq__35340_35346 = G__35367;
chunk__35341_35347 = G__35368;
count__35342_35348 = G__35369;
i__35343_35349 = G__35370;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__35375_35379 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35376_35380 = null;var count__35377_35381 = 0;var i__35378_35382 = 0;while(true){
if((i__35378_35382 < count__35377_35381))
{var node_35383 = cljs.core._nth.call(null,chunk__35376_35380,i__35378_35382);goog.dom.classes.add(node_35383,class$);
{
var G__35384 = seq__35375_35379;
var G__35385 = chunk__35376_35380;
var G__35386 = count__35377_35381;
var G__35387 = (i__35378_35382 + 1);
seq__35375_35379 = G__35384;
chunk__35376_35380 = G__35385;
count__35377_35381 = G__35386;
i__35378_35382 = G__35387;
continue;
}
} else
{var temp__4092__auto___35388 = cljs.core.seq.call(null,seq__35375_35379);if(temp__4092__auto___35388)
{var seq__35375_35389__$1 = temp__4092__auto___35388;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35375_35389__$1))
{var c__14547__auto___35390 = cljs.core.chunk_first.call(null,seq__35375_35389__$1);{
var G__35391 = cljs.core.chunk_rest.call(null,seq__35375_35389__$1);
var G__35392 = c__14547__auto___35390;
var G__35393 = cljs.core.count.call(null,c__14547__auto___35390);
var G__35394 = 0;
seq__35375_35379 = G__35391;
chunk__35376_35380 = G__35392;
count__35377_35381 = G__35393;
i__35378_35382 = G__35394;
continue;
}
} else
{var node_35395 = cljs.core.first.call(null,seq__35375_35389__$1);goog.dom.classes.add(node_35395,class$);
{
var G__35396 = cljs.core.next.call(null,seq__35375_35389__$1);
var G__35397 = null;
var G__35398 = 0;
var G__35399 = 0;
seq__35375_35379 = G__35396;
chunk__35376_35380 = G__35397;
count__35377_35381 = G__35398;
i__35378_35382 = G__35399;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__35404_35408 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35405_35409 = null;var count__35406_35410 = 0;var i__35407_35411 = 0;while(true){
if((i__35407_35411 < count__35406_35410))
{var node_35412 = cljs.core._nth.call(null,chunk__35405_35409,i__35407_35411);goog.dom.classes.remove(node_35412,class$);
{
var G__35413 = seq__35404_35408;
var G__35414 = chunk__35405_35409;
var G__35415 = count__35406_35410;
var G__35416 = (i__35407_35411 + 1);
seq__35404_35408 = G__35413;
chunk__35405_35409 = G__35414;
count__35406_35410 = G__35415;
i__35407_35411 = G__35416;
continue;
}
} else
{var temp__4092__auto___35417 = cljs.core.seq.call(null,seq__35404_35408);if(temp__4092__auto___35417)
{var seq__35404_35418__$1 = temp__4092__auto___35417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35404_35418__$1))
{var c__14547__auto___35419 = cljs.core.chunk_first.call(null,seq__35404_35418__$1);{
var G__35420 = cljs.core.chunk_rest.call(null,seq__35404_35418__$1);
var G__35421 = c__14547__auto___35419;
var G__35422 = cljs.core.count.call(null,c__14547__auto___35419);
var G__35423 = 0;
seq__35404_35408 = G__35420;
chunk__35405_35409 = G__35421;
count__35406_35410 = G__35422;
i__35407_35411 = G__35423;
continue;
}
} else
{var node_35424 = cljs.core.first.call(null,seq__35404_35418__$1);goog.dom.classes.remove(node_35424,class$);
{
var G__35425 = cljs.core.next.call(null,seq__35404_35418__$1);
var G__35426 = null;
var G__35427 = 0;
var G__35428 = 0;
seq__35404_35408 = G__35425;
chunk__35405_35409 = G__35426;
count__35406_35410 = G__35427;
i__35407_35411 = G__35428;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__35433_35437 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35434_35438 = null;var count__35435_35439 = 0;var i__35436_35440 = 0;while(true){
if((i__35436_35440 < count__35435_35439))
{var node_35441 = cljs.core._nth.call(null,chunk__35434_35438,i__35436_35440);goog.dom.classes.toggle(node_35441,class$);
{
var G__35442 = seq__35433_35437;
var G__35443 = chunk__35434_35438;
var G__35444 = count__35435_35439;
var G__35445 = (i__35436_35440 + 1);
seq__35433_35437 = G__35442;
chunk__35434_35438 = G__35443;
count__35435_35439 = G__35444;
i__35436_35440 = G__35445;
continue;
}
} else
{var temp__4092__auto___35446 = cljs.core.seq.call(null,seq__35433_35437);if(temp__4092__auto___35446)
{var seq__35433_35447__$1 = temp__4092__auto___35446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35433_35447__$1))
{var c__14547__auto___35448 = cljs.core.chunk_first.call(null,seq__35433_35447__$1);{
var G__35449 = cljs.core.chunk_rest.call(null,seq__35433_35447__$1);
var G__35450 = c__14547__auto___35448;
var G__35451 = cljs.core.count.call(null,c__14547__auto___35448);
var G__35452 = 0;
seq__35433_35437 = G__35449;
chunk__35434_35438 = G__35450;
count__35435_35439 = G__35451;
i__35436_35440 = G__35452;
continue;
}
} else
{var node_35453 = cljs.core.first.call(null,seq__35433_35447__$1);goog.dom.classes.toggle(node_35453,class$);
{
var G__35454 = cljs.core.next.call(null,seq__35433_35447__$1);
var G__35455 = null;
var G__35456 = 0;
var G__35457 = 0;
seq__35433_35437 = G__35454;
chunk__35434_35438 = G__35455;
count__35435_35439 = G__35456;
i__35436_35440 = G__35457;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_35466__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__35462_35467 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35463_35468 = null;var count__35464_35469 = 0;var i__35465_35470 = 0;while(true){
if((i__35465_35470 < count__35464_35469))
{var node_35471 = cljs.core._nth.call(null,chunk__35463_35468,i__35465_35470);goog.dom.classes.set(node_35471,classes_35466__$1);
{
var G__35472 = seq__35462_35467;
var G__35473 = chunk__35463_35468;
var G__35474 = count__35464_35469;
var G__35475 = (i__35465_35470 + 1);
seq__35462_35467 = G__35472;
chunk__35463_35468 = G__35473;
count__35464_35469 = G__35474;
i__35465_35470 = G__35475;
continue;
}
} else
{var temp__4092__auto___35476 = cljs.core.seq.call(null,seq__35462_35467);if(temp__4092__auto___35476)
{var seq__35462_35477__$1 = temp__4092__auto___35476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35462_35477__$1))
{var c__14547__auto___35478 = cljs.core.chunk_first.call(null,seq__35462_35477__$1);{
var G__35479 = cljs.core.chunk_rest.call(null,seq__35462_35477__$1);
var G__35480 = c__14547__auto___35478;
var G__35481 = cljs.core.count.call(null,c__14547__auto___35478);
var G__35482 = 0;
seq__35462_35467 = G__35479;
chunk__35463_35468 = G__35480;
count__35464_35469 = G__35481;
i__35465_35470 = G__35482;
continue;
}
} else
{var node_35483 = cljs.core.first.call(null,seq__35462_35477__$1);goog.dom.classes.set(node_35483,classes_35466__$1);
{
var G__35484 = cljs.core.next.call(null,seq__35462_35477__$1);
var G__35485 = null;
var G__35486 = 0;
var G__35487 = 0;
seq__35462_35467 = G__35484;
chunk__35463_35468 = G__35485;
count__35464_35469 = G__35486;
i__35465_35470 = G__35487;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__35492_35496 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35493_35497 = null;var count__35494_35498 = 0;var i__35495_35499 = 0;while(true){
if((i__35495_35499 < count__35494_35498))
{var node_35500 = cljs.core._nth.call(null,chunk__35493_35497,i__35495_35499);goog.dom.setTextContent(node_35500,value);
{
var G__35501 = seq__35492_35496;
var G__35502 = chunk__35493_35497;
var G__35503 = count__35494_35498;
var G__35504 = (i__35495_35499 + 1);
seq__35492_35496 = G__35501;
chunk__35493_35497 = G__35502;
count__35494_35498 = G__35503;
i__35495_35499 = G__35504;
continue;
}
} else
{var temp__4092__auto___35505 = cljs.core.seq.call(null,seq__35492_35496);if(temp__4092__auto___35505)
{var seq__35492_35506__$1 = temp__4092__auto___35505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492_35506__$1))
{var c__14547__auto___35507 = cljs.core.chunk_first.call(null,seq__35492_35506__$1);{
var G__35508 = cljs.core.chunk_rest.call(null,seq__35492_35506__$1);
var G__35509 = c__14547__auto___35507;
var G__35510 = cljs.core.count.call(null,c__14547__auto___35507);
var G__35511 = 0;
seq__35492_35496 = G__35508;
chunk__35493_35497 = G__35509;
count__35494_35498 = G__35510;
i__35495_35499 = G__35511;
continue;
}
} else
{var node_35512 = cljs.core.first.call(null,seq__35492_35506__$1);goog.dom.setTextContent(node_35512,value);
{
var G__35513 = cljs.core.next.call(null,seq__35492_35506__$1);
var G__35514 = null;
var G__35515 = 0;
var G__35516 = 0;
seq__35492_35496 = G__35513;
chunk__35493_35497 = G__35514;
count__35494_35498 = G__35515;
i__35495_35499 = G__35516;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__35521_35525 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35522_35526 = null;var count__35523_35527 = 0;var i__35524_35528 = 0;while(true){
if((i__35524_35528 < count__35523_35527))
{var node_35529 = cljs.core._nth.call(null,chunk__35522_35526,i__35524_35528);goog.dom.forms.setValue(node_35529,value);
{
var G__35530 = seq__35521_35525;
var G__35531 = chunk__35522_35526;
var G__35532 = count__35523_35527;
var G__35533 = (i__35524_35528 + 1);
seq__35521_35525 = G__35530;
chunk__35522_35526 = G__35531;
count__35523_35527 = G__35532;
i__35524_35528 = G__35533;
continue;
}
} else
{var temp__4092__auto___35534 = cljs.core.seq.call(null,seq__35521_35525);if(temp__4092__auto___35534)
{var seq__35521_35535__$1 = temp__4092__auto___35534;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35521_35535__$1))
{var c__14547__auto___35536 = cljs.core.chunk_first.call(null,seq__35521_35535__$1);{
var G__35537 = cljs.core.chunk_rest.call(null,seq__35521_35535__$1);
var G__35538 = c__14547__auto___35536;
var G__35539 = cljs.core.count.call(null,c__14547__auto___35536);
var G__35540 = 0;
seq__35521_35525 = G__35537;
chunk__35522_35526 = G__35538;
count__35523_35527 = G__35539;
i__35524_35528 = G__35540;
continue;
}
} else
{var node_35541 = cljs.core.first.call(null,seq__35521_35535__$1);goog.dom.forms.setValue(node_35541,value);
{
var G__35542 = cljs.core.next.call(null,seq__35521_35535__$1);
var G__35543 = null;
var G__35544 = 0;
var G__35545 = 0;
seq__35521_35525 = G__35542;
chunk__35522_35526 = G__35543;
count__35523_35527 = G__35544;
i__35524_35528 = G__35545;
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
{var value_35556 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__35552_35557 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35553_35558 = null;var count__35554_35559 = 0;var i__35555_35560 = 0;while(true){
if((i__35555_35560 < count__35554_35559))
{var node_35561 = cljs.core._nth.call(null,chunk__35553_35558,i__35555_35560);node_35561.innerHTML = value_35556;
{
var G__35562 = seq__35552_35557;
var G__35563 = chunk__35553_35558;
var G__35564 = count__35554_35559;
var G__35565 = (i__35555_35560 + 1);
seq__35552_35557 = G__35562;
chunk__35553_35558 = G__35563;
count__35554_35559 = G__35564;
i__35555_35560 = G__35565;
continue;
}
} else
{var temp__4092__auto___35566 = cljs.core.seq.call(null,seq__35552_35557);if(temp__4092__auto___35566)
{var seq__35552_35567__$1 = temp__4092__auto___35566;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35552_35567__$1))
{var c__14547__auto___35568 = cljs.core.chunk_first.call(null,seq__35552_35567__$1);{
var G__35569 = cljs.core.chunk_rest.call(null,seq__35552_35567__$1);
var G__35570 = c__14547__auto___35568;
var G__35571 = cljs.core.count.call(null,c__14547__auto___35568);
var G__35572 = 0;
seq__35552_35557 = G__35569;
chunk__35553_35558 = G__35570;
count__35554_35559 = G__35571;
i__35555_35560 = G__35572;
continue;
}
} else
{var node_35573 = cljs.core.first.call(null,seq__35552_35567__$1);node_35573.innerHTML = value_35556;
{
var G__35574 = cljs.core.next.call(null,seq__35552_35567__$1);
var G__35575 = null;
var G__35576 = 0;
var G__35577 = 0;
seq__35552_35557 = G__35574;
chunk__35553_35558 = G__35575;
count__35554_35559 = G__35576;
i__35555_35560 = G__35577;
continue;
}
}
} else
{}
}
break;
}
}catch (e35551){if((e35551 instanceof Error))
{var e_35578 = e35551;domina.replace_children_BANG_.call(null,content,value_35556);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35551;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__35585_35589 = cljs.core.seq.call(null,children);var chunk__35586_35590 = null;var count__35587_35591 = 0;var i__35588_35592 = 0;while(true){
if((i__35588_35592 < count__35587_35591))
{var child_35593 = cljs.core._nth.call(null,chunk__35586_35590,i__35588_35592);frag.appendChild(child_35593);
{
var G__35594 = seq__35585_35589;
var G__35595 = chunk__35586_35590;
var G__35596 = count__35587_35591;
var G__35597 = (i__35588_35592 + 1);
seq__35585_35589 = G__35594;
chunk__35586_35590 = G__35595;
count__35587_35591 = G__35596;
i__35588_35592 = G__35597;
continue;
}
} else
{var temp__4092__auto___35598 = cljs.core.seq.call(null,seq__35585_35589);if(temp__4092__auto___35598)
{var seq__35585_35599__$1 = temp__4092__auto___35598;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35585_35599__$1))
{var c__14547__auto___35600 = cljs.core.chunk_first.call(null,seq__35585_35599__$1);{
var G__35601 = cljs.core.chunk_rest.call(null,seq__35585_35599__$1);
var G__35602 = c__14547__auto___35600;
var G__35603 = cljs.core.count.call(null,c__14547__auto___35600);
var G__35604 = 0;
seq__35585_35589 = G__35601;
chunk__35586_35590 = G__35602;
count__35587_35591 = G__35603;
i__35588_35592 = G__35604;
continue;
}
} else
{var child_35605 = cljs.core.first.call(null,seq__35585_35599__$1);frag.appendChild(child_35605);
{
var G__35606 = cljs.core.next.call(null,seq__35585_35599__$1);
var G__35607 = null;
var G__35608 = 0;
var G__35609 = 0;
seq__35585_35589 = G__35606;
chunk__35586_35590 = G__35607;
count__35587_35591 = G__35608;
i__35588_35592 = G__35609;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__35579_SHARP_,p2__35580_SHARP_){return f.call(null,p1__35579_SHARP_,p2__35580_SHARP_);
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
{if((function (){var G__35611 = list_thing;if(G__35611)
{var bit__14449__auto__ = (G__35611.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35611.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35611.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35611);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35611);
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
{if((function (){var G__35612 = content;if(G__35612)
{var bit__14449__auto__ = (G__35612.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35612.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35612.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35612);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35612);
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
{if((function (){var G__35613 = content;if(G__35613)
{var bit__14449__auto__ = (G__35613.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35613.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35613.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35613);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35613);
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