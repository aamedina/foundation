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
var opt_wrapper_30221 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30222 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_30223 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_30222,table_section_wrapper_30222,opt_wrapper_30221,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_30223,table_section_wrapper_30222,cell_wrapper_30223,opt_wrapper_30221,table_section_wrapper_30222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_30222]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8211__auto__ = div.firstChild;if(cljs.core.truth_(and__8211__auto__))
{return div.firstChild.childNodes;
} else
{return and__8211__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__30228 = cljs.core.seq.call(null,tbody);var chunk__30229 = null;var count__30230 = 0;var i__30231 = 0;while(true){
if((i__30231 < count__30230))
{var child = cljs.core._nth.call(null,chunk__30229,i__30231);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30232 = seq__30228;
var G__30233 = chunk__30229;
var G__30234 = count__30230;
var G__30235 = (i__30231 + 1);
seq__30228 = G__30232;
chunk__30229 = G__30233;
count__30230 = G__30234;
i__30231 = G__30235;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__30228);if(temp__4092__auto__)
{var seq__30228__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30228__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__30228__$1);{
var G__30236 = cljs.core.chunk_rest.call(null,seq__30228__$1);
var G__30237 = c__8952__auto__;
var G__30238 = cljs.core.count.call(null,c__8952__auto__);
var G__30239 = 0;
seq__30228 = G__30236;
chunk__30229 = G__30237;
count__30230 = G__30238;
i__30231 = G__30239;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30228__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30240 = cljs.core.next.call(null,seq__30228__$1);
var G__30241 = null;
var G__30242 = 0;
var G__30243 = 0;
seq__30228 = G__30240;
chunk__30229 = G__30241;
count__30230 = G__30242;
i__30231 = G__30243;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__30245 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30245,0,null);var start_wrap = cljs.core.nth.call(null,vec__30245,1,null);var end_wrap = cljs.core.nth.call(null,vec__30245,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__30246 = wrapper.lastChild;
var G__30247 = (level - 1);
wrapper = G__30246;
level = G__30247;
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
domina.DomContent = (function (){var obj30249 = {};return obj30249;
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
log_debug.cljs$lang$applyTo = (function (arglist__30250){
var mesg = cljs.core.seq(arglist__30250);
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
log.cljs$lang$applyTo = (function (arglist__30251){
var mesg = cljs.core.seq(arglist__30251);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__30252){
var contents = cljs.core.seq(arglist__30252);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30253_SHARP_){return p1__30253_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30254_SHARP_,p2__30255_SHARP_){return goog.dom.insertChildAt(p1__30254_SHARP_,p2__30255_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30257_SHARP_,p2__30256_SHARP_){return goog.dom.insertSiblingBefore(p2__30256_SHARP_,p1__30257_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30259_SHARP_,p2__30258_SHARP_){return goog.dom.insertSiblingAfter(p2__30258_SHARP_,p1__30259_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30261_SHARP_,p2__30260_SHARP_){return goog.dom.replaceNode(p2__30260_SHARP_,p1__30261_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__30266_30270 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30267_30271 = null;var count__30268_30272 = 0;var i__30269_30273 = 0;while(true){
if((i__30269_30273 < count__30268_30272))
{var n_30274 = cljs.core._nth.call(null,chunk__30267_30271,i__30269_30273);goog.style.setStyle(n_30274,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30275 = seq__30266_30270;
var G__30276 = chunk__30267_30271;
var G__30277 = count__30268_30272;
var G__30278 = (i__30269_30273 + 1);
seq__30266_30270 = G__30275;
chunk__30267_30271 = G__30276;
count__30268_30272 = G__30277;
i__30269_30273 = G__30278;
continue;
}
} else
{var temp__4092__auto___30279 = cljs.core.seq.call(null,seq__30266_30270);if(temp__4092__auto___30279)
{var seq__30266_30280__$1 = temp__4092__auto___30279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30266_30280__$1))
{var c__8952__auto___30281 = cljs.core.chunk_first.call(null,seq__30266_30280__$1);{
var G__30282 = cljs.core.chunk_rest.call(null,seq__30266_30280__$1);
var G__30283 = c__8952__auto___30281;
var G__30284 = cljs.core.count.call(null,c__8952__auto___30281);
var G__30285 = 0;
seq__30266_30270 = G__30282;
chunk__30267_30271 = G__30283;
count__30268_30272 = G__30284;
i__30269_30273 = G__30285;
continue;
}
} else
{var n_30286 = cljs.core.first.call(null,seq__30266_30280__$1);goog.style.setStyle(n_30286,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30287 = cljs.core.next.call(null,seq__30266_30280__$1);
var G__30288 = null;
var G__30289 = 0;
var G__30290 = 0;
seq__30266_30270 = G__30287;
chunk__30267_30271 = G__30288;
count__30268_30272 = G__30289;
i__30269_30273 = G__30290;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30291){
var content = cljs.core.first(arglist__30291);
arglist__30291 = cljs.core.next(arglist__30291);
var name = cljs.core.first(arglist__30291);
var value = cljs.core.rest(arglist__30291);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__30296_30300 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30297_30301 = null;var count__30298_30302 = 0;var i__30299_30303 = 0;while(true){
if((i__30299_30303 < count__30298_30302))
{var n_30304 = cljs.core._nth.call(null,chunk__30297_30301,i__30299_30303);n_30304.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30305 = seq__30296_30300;
var G__30306 = chunk__30297_30301;
var G__30307 = count__30298_30302;
var G__30308 = (i__30299_30303 + 1);
seq__30296_30300 = G__30305;
chunk__30297_30301 = G__30306;
count__30298_30302 = G__30307;
i__30299_30303 = G__30308;
continue;
}
} else
{var temp__4092__auto___30309 = cljs.core.seq.call(null,seq__30296_30300);if(temp__4092__auto___30309)
{var seq__30296_30310__$1 = temp__4092__auto___30309;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30296_30310__$1))
{var c__8952__auto___30311 = cljs.core.chunk_first.call(null,seq__30296_30310__$1);{
var G__30312 = cljs.core.chunk_rest.call(null,seq__30296_30310__$1);
var G__30313 = c__8952__auto___30311;
var G__30314 = cljs.core.count.call(null,c__8952__auto___30311);
var G__30315 = 0;
seq__30296_30300 = G__30312;
chunk__30297_30301 = G__30313;
count__30298_30302 = G__30314;
i__30299_30303 = G__30315;
continue;
}
} else
{var n_30316 = cljs.core.first.call(null,seq__30296_30310__$1);n_30316.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30317 = cljs.core.next.call(null,seq__30296_30310__$1);
var G__30318 = null;
var G__30319 = 0;
var G__30320 = 0;
seq__30296_30300 = G__30317;
chunk__30297_30301 = G__30318;
count__30298_30302 = G__30319;
i__30299_30303 = G__30320;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30321){
var content = cljs.core.first(arglist__30321);
arglist__30321 = cljs.core.next(arglist__30321);
var name = cljs.core.first(arglist__30321);
var value = cljs.core.rest(arglist__30321);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30326_30330 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30327_30331 = null;var count__30328_30332 = 0;var i__30329_30333 = 0;while(true){
if((i__30329_30333 < count__30328_30332))
{var n_30334 = cljs.core._nth.call(null,chunk__30327_30331,i__30329_30333);n_30334.removeAttribute(cljs.core.name.call(null,name));
{
var G__30335 = seq__30326_30330;
var G__30336 = chunk__30327_30331;
var G__30337 = count__30328_30332;
var G__30338 = (i__30329_30333 + 1);
seq__30326_30330 = G__30335;
chunk__30327_30331 = G__30336;
count__30328_30332 = G__30337;
i__30329_30333 = G__30338;
continue;
}
} else
{var temp__4092__auto___30339 = cljs.core.seq.call(null,seq__30326_30330);if(temp__4092__auto___30339)
{var seq__30326_30340__$1 = temp__4092__auto___30339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30326_30340__$1))
{var c__8952__auto___30341 = cljs.core.chunk_first.call(null,seq__30326_30340__$1);{
var G__30342 = cljs.core.chunk_rest.call(null,seq__30326_30340__$1);
var G__30343 = c__8952__auto___30341;
var G__30344 = cljs.core.count.call(null,c__8952__auto___30341);
var G__30345 = 0;
seq__30326_30330 = G__30342;
chunk__30327_30331 = G__30343;
count__30328_30332 = G__30344;
i__30329_30333 = G__30345;
continue;
}
} else
{var n_30346 = cljs.core.first.call(null,seq__30326_30340__$1);n_30346.removeAttribute(cljs.core.name.call(null,name));
{
var G__30347 = cljs.core.next.call(null,seq__30326_30340__$1);
var G__30348 = null;
var G__30349 = 0;
var G__30350 = 0;
seq__30326_30330 = G__30347;
chunk__30327_30331 = G__30348;
count__30328_30332 = G__30349;
i__30329_30333 = G__30350;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30352 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30352,0,null);var v = cljs.core.nth.call(null,vec__30352,1,null);if(cljs.core.truth_((function (){var and__8211__auto__ = k;if(cljs.core.truth_(and__8211__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__30353_SHARP_){var attr = attrs__$1.item(p1__30353_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30360_30366 = cljs.core.seq.call(null,styles);var chunk__30361_30367 = null;var count__30362_30368 = 0;var i__30363_30369 = 0;while(true){
if((i__30363_30369 < count__30362_30368))
{var vec__30364_30370 = cljs.core._nth.call(null,chunk__30361_30367,i__30363_30369);var name_30371 = cljs.core.nth.call(null,vec__30364_30370,0,null);var value_30372 = cljs.core.nth.call(null,vec__30364_30370,1,null);domina.set_style_BANG_.call(null,content,name_30371,value_30372);
{
var G__30373 = seq__30360_30366;
var G__30374 = chunk__30361_30367;
var G__30375 = count__30362_30368;
var G__30376 = (i__30363_30369 + 1);
seq__30360_30366 = G__30373;
chunk__30361_30367 = G__30374;
count__30362_30368 = G__30375;
i__30363_30369 = G__30376;
continue;
}
} else
{var temp__4092__auto___30377 = cljs.core.seq.call(null,seq__30360_30366);if(temp__4092__auto___30377)
{var seq__30360_30378__$1 = temp__4092__auto___30377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30360_30378__$1))
{var c__8952__auto___30379 = cljs.core.chunk_first.call(null,seq__30360_30378__$1);{
var G__30380 = cljs.core.chunk_rest.call(null,seq__30360_30378__$1);
var G__30381 = c__8952__auto___30379;
var G__30382 = cljs.core.count.call(null,c__8952__auto___30379);
var G__30383 = 0;
seq__30360_30366 = G__30380;
chunk__30361_30367 = G__30381;
count__30362_30368 = G__30382;
i__30363_30369 = G__30383;
continue;
}
} else
{var vec__30365_30384 = cljs.core.first.call(null,seq__30360_30378__$1);var name_30385 = cljs.core.nth.call(null,vec__30365_30384,0,null);var value_30386 = cljs.core.nth.call(null,vec__30365_30384,1,null);domina.set_style_BANG_.call(null,content,name_30385,value_30386);
{
var G__30387 = cljs.core.next.call(null,seq__30360_30378__$1);
var G__30388 = null;
var G__30389 = 0;
var G__30390 = 0;
seq__30360_30366 = G__30387;
chunk__30361_30367 = G__30388;
count__30362_30368 = G__30389;
i__30363_30369 = G__30390;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30397_30403 = cljs.core.seq.call(null,attrs);var chunk__30398_30404 = null;var count__30399_30405 = 0;var i__30400_30406 = 0;while(true){
if((i__30400_30406 < count__30399_30405))
{var vec__30401_30407 = cljs.core._nth.call(null,chunk__30398_30404,i__30400_30406);var name_30408 = cljs.core.nth.call(null,vec__30401_30407,0,null);var value_30409 = cljs.core.nth.call(null,vec__30401_30407,1,null);domina.set_attr_BANG_.call(null,content,name_30408,value_30409);
{
var G__30410 = seq__30397_30403;
var G__30411 = chunk__30398_30404;
var G__30412 = count__30399_30405;
var G__30413 = (i__30400_30406 + 1);
seq__30397_30403 = G__30410;
chunk__30398_30404 = G__30411;
count__30399_30405 = G__30412;
i__30400_30406 = G__30413;
continue;
}
} else
{var temp__4092__auto___30414 = cljs.core.seq.call(null,seq__30397_30403);if(temp__4092__auto___30414)
{var seq__30397_30415__$1 = temp__4092__auto___30414;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30397_30415__$1))
{var c__8952__auto___30416 = cljs.core.chunk_first.call(null,seq__30397_30415__$1);{
var G__30417 = cljs.core.chunk_rest.call(null,seq__30397_30415__$1);
var G__30418 = c__8952__auto___30416;
var G__30419 = cljs.core.count.call(null,c__8952__auto___30416);
var G__30420 = 0;
seq__30397_30403 = G__30417;
chunk__30398_30404 = G__30418;
count__30399_30405 = G__30419;
i__30400_30406 = G__30420;
continue;
}
} else
{var vec__30402_30421 = cljs.core.first.call(null,seq__30397_30415__$1);var name_30422 = cljs.core.nth.call(null,vec__30402_30421,0,null);var value_30423 = cljs.core.nth.call(null,vec__30402_30421,1,null);domina.set_attr_BANG_.call(null,content,name_30422,value_30423);
{
var G__30424 = cljs.core.next.call(null,seq__30397_30415__$1);
var G__30425 = null;
var G__30426 = 0;
var G__30427 = 0;
seq__30397_30403 = G__30424;
chunk__30398_30404 = G__30425;
count__30399_30405 = G__30426;
i__30400_30406 = G__30427;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30432_30436 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30433_30437 = null;var count__30434_30438 = 0;var i__30435_30439 = 0;while(true){
if((i__30435_30439 < count__30434_30438))
{var node_30440 = cljs.core._nth.call(null,chunk__30433_30437,i__30435_30439);goog.dom.classes.add(node_30440,class$);
{
var G__30441 = seq__30432_30436;
var G__30442 = chunk__30433_30437;
var G__30443 = count__30434_30438;
var G__30444 = (i__30435_30439 + 1);
seq__30432_30436 = G__30441;
chunk__30433_30437 = G__30442;
count__30434_30438 = G__30443;
i__30435_30439 = G__30444;
continue;
}
} else
{var temp__4092__auto___30445 = cljs.core.seq.call(null,seq__30432_30436);if(temp__4092__auto___30445)
{var seq__30432_30446__$1 = temp__4092__auto___30445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30432_30446__$1))
{var c__8952__auto___30447 = cljs.core.chunk_first.call(null,seq__30432_30446__$1);{
var G__30448 = cljs.core.chunk_rest.call(null,seq__30432_30446__$1);
var G__30449 = c__8952__auto___30447;
var G__30450 = cljs.core.count.call(null,c__8952__auto___30447);
var G__30451 = 0;
seq__30432_30436 = G__30448;
chunk__30433_30437 = G__30449;
count__30434_30438 = G__30450;
i__30435_30439 = G__30451;
continue;
}
} else
{var node_30452 = cljs.core.first.call(null,seq__30432_30446__$1);goog.dom.classes.add(node_30452,class$);
{
var G__30453 = cljs.core.next.call(null,seq__30432_30446__$1);
var G__30454 = null;
var G__30455 = 0;
var G__30456 = 0;
seq__30432_30436 = G__30453;
chunk__30433_30437 = G__30454;
count__30434_30438 = G__30455;
i__30435_30439 = G__30456;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30461_30465 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30462_30466 = null;var count__30463_30467 = 0;var i__30464_30468 = 0;while(true){
if((i__30464_30468 < count__30463_30467))
{var node_30469 = cljs.core._nth.call(null,chunk__30462_30466,i__30464_30468);goog.dom.classes.remove(node_30469,class$);
{
var G__30470 = seq__30461_30465;
var G__30471 = chunk__30462_30466;
var G__30472 = count__30463_30467;
var G__30473 = (i__30464_30468 + 1);
seq__30461_30465 = G__30470;
chunk__30462_30466 = G__30471;
count__30463_30467 = G__30472;
i__30464_30468 = G__30473;
continue;
}
} else
{var temp__4092__auto___30474 = cljs.core.seq.call(null,seq__30461_30465);if(temp__4092__auto___30474)
{var seq__30461_30475__$1 = temp__4092__auto___30474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30461_30475__$1))
{var c__8952__auto___30476 = cljs.core.chunk_first.call(null,seq__30461_30475__$1);{
var G__30477 = cljs.core.chunk_rest.call(null,seq__30461_30475__$1);
var G__30478 = c__8952__auto___30476;
var G__30479 = cljs.core.count.call(null,c__8952__auto___30476);
var G__30480 = 0;
seq__30461_30465 = G__30477;
chunk__30462_30466 = G__30478;
count__30463_30467 = G__30479;
i__30464_30468 = G__30480;
continue;
}
} else
{var node_30481 = cljs.core.first.call(null,seq__30461_30475__$1);goog.dom.classes.remove(node_30481,class$);
{
var G__30482 = cljs.core.next.call(null,seq__30461_30475__$1);
var G__30483 = null;
var G__30484 = 0;
var G__30485 = 0;
seq__30461_30465 = G__30482;
chunk__30462_30466 = G__30483;
count__30463_30467 = G__30484;
i__30464_30468 = G__30485;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__30490_30494 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30491_30495 = null;var count__30492_30496 = 0;var i__30493_30497 = 0;while(true){
if((i__30493_30497 < count__30492_30496))
{var node_30498 = cljs.core._nth.call(null,chunk__30491_30495,i__30493_30497);goog.dom.classes.toggle(node_30498,class$);
{
var G__30499 = seq__30490_30494;
var G__30500 = chunk__30491_30495;
var G__30501 = count__30492_30496;
var G__30502 = (i__30493_30497 + 1);
seq__30490_30494 = G__30499;
chunk__30491_30495 = G__30500;
count__30492_30496 = G__30501;
i__30493_30497 = G__30502;
continue;
}
} else
{var temp__4092__auto___30503 = cljs.core.seq.call(null,seq__30490_30494);if(temp__4092__auto___30503)
{var seq__30490_30504__$1 = temp__4092__auto___30503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30490_30504__$1))
{var c__8952__auto___30505 = cljs.core.chunk_first.call(null,seq__30490_30504__$1);{
var G__30506 = cljs.core.chunk_rest.call(null,seq__30490_30504__$1);
var G__30507 = c__8952__auto___30505;
var G__30508 = cljs.core.count.call(null,c__8952__auto___30505);
var G__30509 = 0;
seq__30490_30494 = G__30506;
chunk__30491_30495 = G__30507;
count__30492_30496 = G__30508;
i__30493_30497 = G__30509;
continue;
}
} else
{var node_30510 = cljs.core.first.call(null,seq__30490_30504__$1);goog.dom.classes.toggle(node_30510,class$);
{
var G__30511 = cljs.core.next.call(null,seq__30490_30504__$1);
var G__30512 = null;
var G__30513 = 0;
var G__30514 = 0;
seq__30490_30494 = G__30511;
chunk__30491_30495 = G__30512;
count__30492_30496 = G__30513;
i__30493_30497 = G__30514;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_30523__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__30519_30524 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30520_30525 = null;var count__30521_30526 = 0;var i__30522_30527 = 0;while(true){
if((i__30522_30527 < count__30521_30526))
{var node_30528 = cljs.core._nth.call(null,chunk__30520_30525,i__30522_30527);goog.dom.classes.set(node_30528,classes_30523__$1);
{
var G__30529 = seq__30519_30524;
var G__30530 = chunk__30520_30525;
var G__30531 = count__30521_30526;
var G__30532 = (i__30522_30527 + 1);
seq__30519_30524 = G__30529;
chunk__30520_30525 = G__30530;
count__30521_30526 = G__30531;
i__30522_30527 = G__30532;
continue;
}
} else
{var temp__4092__auto___30533 = cljs.core.seq.call(null,seq__30519_30524);if(temp__4092__auto___30533)
{var seq__30519_30534__$1 = temp__4092__auto___30533;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30519_30534__$1))
{var c__8952__auto___30535 = cljs.core.chunk_first.call(null,seq__30519_30534__$1);{
var G__30536 = cljs.core.chunk_rest.call(null,seq__30519_30534__$1);
var G__30537 = c__8952__auto___30535;
var G__30538 = cljs.core.count.call(null,c__8952__auto___30535);
var G__30539 = 0;
seq__30519_30524 = G__30536;
chunk__30520_30525 = G__30537;
count__30521_30526 = G__30538;
i__30522_30527 = G__30539;
continue;
}
} else
{var node_30540 = cljs.core.first.call(null,seq__30519_30534__$1);goog.dom.classes.set(node_30540,classes_30523__$1);
{
var G__30541 = cljs.core.next.call(null,seq__30519_30534__$1);
var G__30542 = null;
var G__30543 = 0;
var G__30544 = 0;
seq__30519_30524 = G__30541;
chunk__30520_30525 = G__30542;
count__30521_30526 = G__30543;
i__30522_30527 = G__30544;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__30549_30553 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30550_30554 = null;var count__30551_30555 = 0;var i__30552_30556 = 0;while(true){
if((i__30552_30556 < count__30551_30555))
{var node_30557 = cljs.core._nth.call(null,chunk__30550_30554,i__30552_30556);goog.dom.setTextContent(node_30557,value);
{
var G__30558 = seq__30549_30553;
var G__30559 = chunk__30550_30554;
var G__30560 = count__30551_30555;
var G__30561 = (i__30552_30556 + 1);
seq__30549_30553 = G__30558;
chunk__30550_30554 = G__30559;
count__30551_30555 = G__30560;
i__30552_30556 = G__30561;
continue;
}
} else
{var temp__4092__auto___30562 = cljs.core.seq.call(null,seq__30549_30553);if(temp__4092__auto___30562)
{var seq__30549_30563__$1 = temp__4092__auto___30562;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30549_30563__$1))
{var c__8952__auto___30564 = cljs.core.chunk_first.call(null,seq__30549_30563__$1);{
var G__30565 = cljs.core.chunk_rest.call(null,seq__30549_30563__$1);
var G__30566 = c__8952__auto___30564;
var G__30567 = cljs.core.count.call(null,c__8952__auto___30564);
var G__30568 = 0;
seq__30549_30553 = G__30565;
chunk__30550_30554 = G__30566;
count__30551_30555 = G__30567;
i__30552_30556 = G__30568;
continue;
}
} else
{var node_30569 = cljs.core.first.call(null,seq__30549_30563__$1);goog.dom.setTextContent(node_30569,value);
{
var G__30570 = cljs.core.next.call(null,seq__30549_30563__$1);
var G__30571 = null;
var G__30572 = 0;
var G__30573 = 0;
seq__30549_30553 = G__30570;
chunk__30550_30554 = G__30571;
count__30551_30555 = G__30572;
i__30552_30556 = G__30573;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__30578_30582 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30579_30583 = null;var count__30580_30584 = 0;var i__30581_30585 = 0;while(true){
if((i__30581_30585 < count__30580_30584))
{var node_30586 = cljs.core._nth.call(null,chunk__30579_30583,i__30581_30585);goog.dom.forms.setValue(node_30586,value);
{
var G__30587 = seq__30578_30582;
var G__30588 = chunk__30579_30583;
var G__30589 = count__30580_30584;
var G__30590 = (i__30581_30585 + 1);
seq__30578_30582 = G__30587;
chunk__30579_30583 = G__30588;
count__30580_30584 = G__30589;
i__30581_30585 = G__30590;
continue;
}
} else
{var temp__4092__auto___30591 = cljs.core.seq.call(null,seq__30578_30582);if(temp__4092__auto___30591)
{var seq__30578_30592__$1 = temp__4092__auto___30591;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30578_30592__$1))
{var c__8952__auto___30593 = cljs.core.chunk_first.call(null,seq__30578_30592__$1);{
var G__30594 = cljs.core.chunk_rest.call(null,seq__30578_30592__$1);
var G__30595 = c__8952__auto___30593;
var G__30596 = cljs.core.count.call(null,c__8952__auto___30593);
var G__30597 = 0;
seq__30578_30582 = G__30594;
chunk__30579_30583 = G__30595;
count__30580_30584 = G__30596;
i__30581_30585 = G__30597;
continue;
}
} else
{var node_30598 = cljs.core.first.call(null,seq__30578_30592__$1);goog.dom.forms.setValue(node_30598,value);
{
var G__30599 = cljs.core.next.call(null,seq__30578_30592__$1);
var G__30600 = null;
var G__30601 = 0;
var G__30602 = 0;
seq__30578_30582 = G__30599;
chunk__30579_30583 = G__30600;
count__30580_30584 = G__30601;
i__30581_30585 = G__30602;
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
{var value_30613 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__30609_30614 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30610_30615 = null;var count__30611_30616 = 0;var i__30612_30617 = 0;while(true){
if((i__30612_30617 < count__30611_30616))
{var node_30618 = cljs.core._nth.call(null,chunk__30610_30615,i__30612_30617);node_30618.innerHTML = value_30613;
{
var G__30619 = seq__30609_30614;
var G__30620 = chunk__30610_30615;
var G__30621 = count__30611_30616;
var G__30622 = (i__30612_30617 + 1);
seq__30609_30614 = G__30619;
chunk__30610_30615 = G__30620;
count__30611_30616 = G__30621;
i__30612_30617 = G__30622;
continue;
}
} else
{var temp__4092__auto___30623 = cljs.core.seq.call(null,seq__30609_30614);if(temp__4092__auto___30623)
{var seq__30609_30624__$1 = temp__4092__auto___30623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30609_30624__$1))
{var c__8952__auto___30625 = cljs.core.chunk_first.call(null,seq__30609_30624__$1);{
var G__30626 = cljs.core.chunk_rest.call(null,seq__30609_30624__$1);
var G__30627 = c__8952__auto___30625;
var G__30628 = cljs.core.count.call(null,c__8952__auto___30625);
var G__30629 = 0;
seq__30609_30614 = G__30626;
chunk__30610_30615 = G__30627;
count__30611_30616 = G__30628;
i__30612_30617 = G__30629;
continue;
}
} else
{var node_30630 = cljs.core.first.call(null,seq__30609_30624__$1);node_30630.innerHTML = value_30613;
{
var G__30631 = cljs.core.next.call(null,seq__30609_30624__$1);
var G__30632 = null;
var G__30633 = 0;
var G__30634 = 0;
seq__30609_30614 = G__30631;
chunk__30610_30615 = G__30632;
count__30611_30616 = G__30633;
i__30612_30617 = G__30634;
continue;
}
}
} else
{}
}
break;
}
}catch (e30608){if((e30608 instanceof Error))
{var e_30635 = e30608;domina.replace_children_BANG_.call(null,content,value_30613);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30608;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__30642_30646 = cljs.core.seq.call(null,children);var chunk__30643_30647 = null;var count__30644_30648 = 0;var i__30645_30649 = 0;while(true){
if((i__30645_30649 < count__30644_30648))
{var child_30650 = cljs.core._nth.call(null,chunk__30643_30647,i__30645_30649);frag.appendChild(child_30650);
{
var G__30651 = seq__30642_30646;
var G__30652 = chunk__30643_30647;
var G__30653 = count__30644_30648;
var G__30654 = (i__30645_30649 + 1);
seq__30642_30646 = G__30651;
chunk__30643_30647 = G__30652;
count__30644_30648 = G__30653;
i__30645_30649 = G__30654;
continue;
}
} else
{var temp__4092__auto___30655 = cljs.core.seq.call(null,seq__30642_30646);if(temp__4092__auto___30655)
{var seq__30642_30656__$1 = temp__4092__auto___30655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30642_30656__$1))
{var c__8952__auto___30657 = cljs.core.chunk_first.call(null,seq__30642_30656__$1);{
var G__30658 = cljs.core.chunk_rest.call(null,seq__30642_30656__$1);
var G__30659 = c__8952__auto___30657;
var G__30660 = cljs.core.count.call(null,c__8952__auto___30657);
var G__30661 = 0;
seq__30642_30646 = G__30658;
chunk__30643_30647 = G__30659;
count__30644_30648 = G__30660;
i__30645_30649 = G__30661;
continue;
}
} else
{var child_30662 = cljs.core.first.call(null,seq__30642_30656__$1);frag.appendChild(child_30662);
{
var G__30663 = cljs.core.next.call(null,seq__30642_30656__$1);
var G__30664 = null;
var G__30665 = 0;
var G__30666 = 0;
seq__30642_30646 = G__30663;
chunk__30643_30647 = G__30664;
count__30644_30648 = G__30665;
i__30645_30649 = G__30666;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__30636_SHARP_,p2__30637_SHARP_){return f.call(null,p1__30636_SHARP_,p2__30637_SHARP_);
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
{if((function (){var G__30668 = list_thing;if(G__30668)
{var bit__8854__auto__ = (G__30668.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__30668.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30668.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30668);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30668);
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
{if((function (){var G__30669 = content;if(G__30669)
{var bit__8854__auto__ = (G__30669.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__30669.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30669.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30669);
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
{if((function (){var G__30670 = content;if(G__30670)
{var bit__8854__auto__ = (G__30670.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__30670.cljs$core$ISeqable$))
{return true;
} else
{if((!G__30670.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30670);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__30670);
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