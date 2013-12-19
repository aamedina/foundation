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
var opt_wrapper_191238 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_191239 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_191240 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_191239,table_section_wrapper_191239,opt_wrapper_191238,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_191240,table_section_wrapper_191239,cell_wrapper_191240,opt_wrapper_191238,table_section_wrapper_191239,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_191239]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__8211__auto__ = div.firstChild;if(cljs.core.truth_(and__8211__auto__))
{return div.firstChild.childNodes;
} else
{return and__8211__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__191245 = cljs.core.seq.call(null,tbody);var chunk__191246 = null;var count__191247 = 0;var i__191248 = 0;while(true){
if((i__191248 < count__191247))
{var child = cljs.core._nth.call(null,chunk__191246,i__191248);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__191249 = seq__191245;
var G__191250 = chunk__191246;
var G__191251 = count__191247;
var G__191252 = (i__191248 + 1);
seq__191245 = G__191249;
chunk__191246 = G__191250;
count__191247 = G__191251;
i__191248 = G__191252;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__191245);if(temp__4092__auto__)
{var seq__191245__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191245__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__191245__$1);{
var G__191253 = cljs.core.chunk_rest.call(null,seq__191245__$1);
var G__191254 = c__8952__auto__;
var G__191255 = cljs.core.count.call(null,c__8952__auto__);
var G__191256 = 0;
seq__191245 = G__191253;
chunk__191246 = G__191254;
count__191247 = G__191255;
i__191248 = G__191256;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__191245__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__191257 = cljs.core.next.call(null,seq__191245__$1);
var G__191258 = null;
var G__191259 = 0;
var G__191260 = 0;
seq__191245 = G__191257;
chunk__191246 = G__191258;
count__191247 = G__191259;
i__191248 = G__191260;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__191262 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__191262,0,null);var start_wrap = cljs.core.nth.call(null,vec__191262,1,null);var end_wrap = cljs.core.nth.call(null,vec__191262,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__191263 = wrapper.lastChild;
var G__191264 = (level - 1);
wrapper = G__191263;
level = G__191264;
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
domina.DomContent = (function (){var obj191266 = {};return obj191266;
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
log_debug.cljs$lang$applyTo = (function (arglist__191267){
var mesg = cljs.core.seq(arglist__191267);
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
log.cljs$lang$applyTo = (function (arglist__191268){
var mesg = cljs.core.seq(arglist__191268);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__191269){
var contents = cljs.core.seq(arglist__191269);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__191270_SHARP_){return p1__191270_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__191271_SHARP_,p2__191272_SHARP_){return goog.dom.insertChildAt(p1__191271_SHARP_,p2__191272_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__191274_SHARP_,p2__191273_SHARP_){return goog.dom.insertSiblingBefore(p2__191273_SHARP_,p1__191274_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__191276_SHARP_,p2__191275_SHARP_){return goog.dom.insertSiblingAfter(p2__191275_SHARP_,p1__191276_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__191278_SHARP_,p2__191277_SHARP_){return goog.dom.replaceNode(p2__191277_SHARP_,p1__191278_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__191283_191287 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191284_191288 = null;var count__191285_191289 = 0;var i__191286_191290 = 0;while(true){
if((i__191286_191290 < count__191285_191289))
{var n_191291 = cljs.core._nth.call(null,chunk__191284_191288,i__191286_191290);goog.style.setStyle(n_191291,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__191292 = seq__191283_191287;
var G__191293 = chunk__191284_191288;
var G__191294 = count__191285_191289;
var G__191295 = (i__191286_191290 + 1);
seq__191283_191287 = G__191292;
chunk__191284_191288 = G__191293;
count__191285_191289 = G__191294;
i__191286_191290 = G__191295;
continue;
}
} else
{var temp__4092__auto___191296 = cljs.core.seq.call(null,seq__191283_191287);if(temp__4092__auto___191296)
{var seq__191283_191297__$1 = temp__4092__auto___191296;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191283_191297__$1))
{var c__8952__auto___191298 = cljs.core.chunk_first.call(null,seq__191283_191297__$1);{
var G__191299 = cljs.core.chunk_rest.call(null,seq__191283_191297__$1);
var G__191300 = c__8952__auto___191298;
var G__191301 = cljs.core.count.call(null,c__8952__auto___191298);
var G__191302 = 0;
seq__191283_191287 = G__191299;
chunk__191284_191288 = G__191300;
count__191285_191289 = G__191301;
i__191286_191290 = G__191302;
continue;
}
} else
{var n_191303 = cljs.core.first.call(null,seq__191283_191297__$1);goog.style.setStyle(n_191303,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__191304 = cljs.core.next.call(null,seq__191283_191297__$1);
var G__191305 = null;
var G__191306 = 0;
var G__191307 = 0;
seq__191283_191287 = G__191304;
chunk__191284_191288 = G__191305;
count__191285_191289 = G__191306;
i__191286_191290 = G__191307;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__191308){
var content = cljs.core.first(arglist__191308);
arglist__191308 = cljs.core.next(arglist__191308);
var name = cljs.core.first(arglist__191308);
var value = cljs.core.rest(arglist__191308);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__191313_191317 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191314_191318 = null;var count__191315_191319 = 0;var i__191316_191320 = 0;while(true){
if((i__191316_191320 < count__191315_191319))
{var n_191321 = cljs.core._nth.call(null,chunk__191314_191318,i__191316_191320);n_191321.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__191322 = seq__191313_191317;
var G__191323 = chunk__191314_191318;
var G__191324 = count__191315_191319;
var G__191325 = (i__191316_191320 + 1);
seq__191313_191317 = G__191322;
chunk__191314_191318 = G__191323;
count__191315_191319 = G__191324;
i__191316_191320 = G__191325;
continue;
}
} else
{var temp__4092__auto___191326 = cljs.core.seq.call(null,seq__191313_191317);if(temp__4092__auto___191326)
{var seq__191313_191327__$1 = temp__4092__auto___191326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191313_191327__$1))
{var c__8952__auto___191328 = cljs.core.chunk_first.call(null,seq__191313_191327__$1);{
var G__191329 = cljs.core.chunk_rest.call(null,seq__191313_191327__$1);
var G__191330 = c__8952__auto___191328;
var G__191331 = cljs.core.count.call(null,c__8952__auto___191328);
var G__191332 = 0;
seq__191313_191317 = G__191329;
chunk__191314_191318 = G__191330;
count__191315_191319 = G__191331;
i__191316_191320 = G__191332;
continue;
}
} else
{var n_191333 = cljs.core.first.call(null,seq__191313_191327__$1);n_191333.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__191334 = cljs.core.next.call(null,seq__191313_191327__$1);
var G__191335 = null;
var G__191336 = 0;
var G__191337 = 0;
seq__191313_191317 = G__191334;
chunk__191314_191318 = G__191335;
count__191315_191319 = G__191336;
i__191316_191320 = G__191337;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__191338){
var content = cljs.core.first(arglist__191338);
arglist__191338 = cljs.core.next(arglist__191338);
var name = cljs.core.first(arglist__191338);
var value = cljs.core.rest(arglist__191338);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__191343_191347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191344_191348 = null;var count__191345_191349 = 0;var i__191346_191350 = 0;while(true){
if((i__191346_191350 < count__191345_191349))
{var n_191351 = cljs.core._nth.call(null,chunk__191344_191348,i__191346_191350);n_191351.removeAttribute(cljs.core.name.call(null,name));
{
var G__191352 = seq__191343_191347;
var G__191353 = chunk__191344_191348;
var G__191354 = count__191345_191349;
var G__191355 = (i__191346_191350 + 1);
seq__191343_191347 = G__191352;
chunk__191344_191348 = G__191353;
count__191345_191349 = G__191354;
i__191346_191350 = G__191355;
continue;
}
} else
{var temp__4092__auto___191356 = cljs.core.seq.call(null,seq__191343_191347);if(temp__4092__auto___191356)
{var seq__191343_191357__$1 = temp__4092__auto___191356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191343_191357__$1))
{var c__8952__auto___191358 = cljs.core.chunk_first.call(null,seq__191343_191357__$1);{
var G__191359 = cljs.core.chunk_rest.call(null,seq__191343_191357__$1);
var G__191360 = c__8952__auto___191358;
var G__191361 = cljs.core.count.call(null,c__8952__auto___191358);
var G__191362 = 0;
seq__191343_191347 = G__191359;
chunk__191344_191348 = G__191360;
count__191345_191349 = G__191361;
i__191346_191350 = G__191362;
continue;
}
} else
{var n_191363 = cljs.core.first.call(null,seq__191343_191357__$1);n_191363.removeAttribute(cljs.core.name.call(null,name));
{
var G__191364 = cljs.core.next.call(null,seq__191343_191357__$1);
var G__191365 = null;
var G__191366 = 0;
var G__191367 = 0;
seq__191343_191347 = G__191364;
chunk__191344_191348 = G__191365;
count__191345_191349 = G__191366;
i__191346_191350 = G__191367;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__191369 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__191369,0,null);var v = cljs.core.nth.call(null,vec__191369,1,null);if(cljs.core.truth_((function (){var and__8211__auto__ = k;if(cljs.core.truth_(and__8211__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__191370_SHARP_){var attr = attrs__$1.item(p1__191370_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__191377_191383 = cljs.core.seq.call(null,styles);var chunk__191378_191384 = null;var count__191379_191385 = 0;var i__191380_191386 = 0;while(true){
if((i__191380_191386 < count__191379_191385))
{var vec__191381_191387 = cljs.core._nth.call(null,chunk__191378_191384,i__191380_191386);var name_191388 = cljs.core.nth.call(null,vec__191381_191387,0,null);var value_191389 = cljs.core.nth.call(null,vec__191381_191387,1,null);domina.set_style_BANG_.call(null,content,name_191388,value_191389);
{
var G__191390 = seq__191377_191383;
var G__191391 = chunk__191378_191384;
var G__191392 = count__191379_191385;
var G__191393 = (i__191380_191386 + 1);
seq__191377_191383 = G__191390;
chunk__191378_191384 = G__191391;
count__191379_191385 = G__191392;
i__191380_191386 = G__191393;
continue;
}
} else
{var temp__4092__auto___191394 = cljs.core.seq.call(null,seq__191377_191383);if(temp__4092__auto___191394)
{var seq__191377_191395__$1 = temp__4092__auto___191394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191377_191395__$1))
{var c__8952__auto___191396 = cljs.core.chunk_first.call(null,seq__191377_191395__$1);{
var G__191397 = cljs.core.chunk_rest.call(null,seq__191377_191395__$1);
var G__191398 = c__8952__auto___191396;
var G__191399 = cljs.core.count.call(null,c__8952__auto___191396);
var G__191400 = 0;
seq__191377_191383 = G__191397;
chunk__191378_191384 = G__191398;
count__191379_191385 = G__191399;
i__191380_191386 = G__191400;
continue;
}
} else
{var vec__191382_191401 = cljs.core.first.call(null,seq__191377_191395__$1);var name_191402 = cljs.core.nth.call(null,vec__191382_191401,0,null);var value_191403 = cljs.core.nth.call(null,vec__191382_191401,1,null);domina.set_style_BANG_.call(null,content,name_191402,value_191403);
{
var G__191404 = cljs.core.next.call(null,seq__191377_191395__$1);
var G__191405 = null;
var G__191406 = 0;
var G__191407 = 0;
seq__191377_191383 = G__191404;
chunk__191378_191384 = G__191405;
count__191379_191385 = G__191406;
i__191380_191386 = G__191407;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__191414_191420 = cljs.core.seq.call(null,attrs);var chunk__191415_191421 = null;var count__191416_191422 = 0;var i__191417_191423 = 0;while(true){
if((i__191417_191423 < count__191416_191422))
{var vec__191418_191424 = cljs.core._nth.call(null,chunk__191415_191421,i__191417_191423);var name_191425 = cljs.core.nth.call(null,vec__191418_191424,0,null);var value_191426 = cljs.core.nth.call(null,vec__191418_191424,1,null);domina.set_attr_BANG_.call(null,content,name_191425,value_191426);
{
var G__191427 = seq__191414_191420;
var G__191428 = chunk__191415_191421;
var G__191429 = count__191416_191422;
var G__191430 = (i__191417_191423 + 1);
seq__191414_191420 = G__191427;
chunk__191415_191421 = G__191428;
count__191416_191422 = G__191429;
i__191417_191423 = G__191430;
continue;
}
} else
{var temp__4092__auto___191431 = cljs.core.seq.call(null,seq__191414_191420);if(temp__4092__auto___191431)
{var seq__191414_191432__$1 = temp__4092__auto___191431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191414_191432__$1))
{var c__8952__auto___191433 = cljs.core.chunk_first.call(null,seq__191414_191432__$1);{
var G__191434 = cljs.core.chunk_rest.call(null,seq__191414_191432__$1);
var G__191435 = c__8952__auto___191433;
var G__191436 = cljs.core.count.call(null,c__8952__auto___191433);
var G__191437 = 0;
seq__191414_191420 = G__191434;
chunk__191415_191421 = G__191435;
count__191416_191422 = G__191436;
i__191417_191423 = G__191437;
continue;
}
} else
{var vec__191419_191438 = cljs.core.first.call(null,seq__191414_191432__$1);var name_191439 = cljs.core.nth.call(null,vec__191419_191438,0,null);var value_191440 = cljs.core.nth.call(null,vec__191419_191438,1,null);domina.set_attr_BANG_.call(null,content,name_191439,value_191440);
{
var G__191441 = cljs.core.next.call(null,seq__191414_191432__$1);
var G__191442 = null;
var G__191443 = 0;
var G__191444 = 0;
seq__191414_191420 = G__191441;
chunk__191415_191421 = G__191442;
count__191416_191422 = G__191443;
i__191417_191423 = G__191444;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__191449_191453 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191450_191454 = null;var count__191451_191455 = 0;var i__191452_191456 = 0;while(true){
if((i__191452_191456 < count__191451_191455))
{var node_191457 = cljs.core._nth.call(null,chunk__191450_191454,i__191452_191456);goog.dom.classes.add(node_191457,class$);
{
var G__191458 = seq__191449_191453;
var G__191459 = chunk__191450_191454;
var G__191460 = count__191451_191455;
var G__191461 = (i__191452_191456 + 1);
seq__191449_191453 = G__191458;
chunk__191450_191454 = G__191459;
count__191451_191455 = G__191460;
i__191452_191456 = G__191461;
continue;
}
} else
{var temp__4092__auto___191462 = cljs.core.seq.call(null,seq__191449_191453);if(temp__4092__auto___191462)
{var seq__191449_191463__$1 = temp__4092__auto___191462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191449_191463__$1))
{var c__8952__auto___191464 = cljs.core.chunk_first.call(null,seq__191449_191463__$1);{
var G__191465 = cljs.core.chunk_rest.call(null,seq__191449_191463__$1);
var G__191466 = c__8952__auto___191464;
var G__191467 = cljs.core.count.call(null,c__8952__auto___191464);
var G__191468 = 0;
seq__191449_191453 = G__191465;
chunk__191450_191454 = G__191466;
count__191451_191455 = G__191467;
i__191452_191456 = G__191468;
continue;
}
} else
{var node_191469 = cljs.core.first.call(null,seq__191449_191463__$1);goog.dom.classes.add(node_191469,class$);
{
var G__191470 = cljs.core.next.call(null,seq__191449_191463__$1);
var G__191471 = null;
var G__191472 = 0;
var G__191473 = 0;
seq__191449_191453 = G__191470;
chunk__191450_191454 = G__191471;
count__191451_191455 = G__191472;
i__191452_191456 = G__191473;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__191478_191482 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191479_191483 = null;var count__191480_191484 = 0;var i__191481_191485 = 0;while(true){
if((i__191481_191485 < count__191480_191484))
{var node_191486 = cljs.core._nth.call(null,chunk__191479_191483,i__191481_191485);goog.dom.classes.remove(node_191486,class$);
{
var G__191487 = seq__191478_191482;
var G__191488 = chunk__191479_191483;
var G__191489 = count__191480_191484;
var G__191490 = (i__191481_191485 + 1);
seq__191478_191482 = G__191487;
chunk__191479_191483 = G__191488;
count__191480_191484 = G__191489;
i__191481_191485 = G__191490;
continue;
}
} else
{var temp__4092__auto___191491 = cljs.core.seq.call(null,seq__191478_191482);if(temp__4092__auto___191491)
{var seq__191478_191492__$1 = temp__4092__auto___191491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191478_191492__$1))
{var c__8952__auto___191493 = cljs.core.chunk_first.call(null,seq__191478_191492__$1);{
var G__191494 = cljs.core.chunk_rest.call(null,seq__191478_191492__$1);
var G__191495 = c__8952__auto___191493;
var G__191496 = cljs.core.count.call(null,c__8952__auto___191493);
var G__191497 = 0;
seq__191478_191482 = G__191494;
chunk__191479_191483 = G__191495;
count__191480_191484 = G__191496;
i__191481_191485 = G__191497;
continue;
}
} else
{var node_191498 = cljs.core.first.call(null,seq__191478_191492__$1);goog.dom.classes.remove(node_191498,class$);
{
var G__191499 = cljs.core.next.call(null,seq__191478_191492__$1);
var G__191500 = null;
var G__191501 = 0;
var G__191502 = 0;
seq__191478_191482 = G__191499;
chunk__191479_191483 = G__191500;
count__191480_191484 = G__191501;
i__191481_191485 = G__191502;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__191507_191511 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191508_191512 = null;var count__191509_191513 = 0;var i__191510_191514 = 0;while(true){
if((i__191510_191514 < count__191509_191513))
{var node_191515 = cljs.core._nth.call(null,chunk__191508_191512,i__191510_191514);goog.dom.classes.toggle(node_191515,class$);
{
var G__191516 = seq__191507_191511;
var G__191517 = chunk__191508_191512;
var G__191518 = count__191509_191513;
var G__191519 = (i__191510_191514 + 1);
seq__191507_191511 = G__191516;
chunk__191508_191512 = G__191517;
count__191509_191513 = G__191518;
i__191510_191514 = G__191519;
continue;
}
} else
{var temp__4092__auto___191520 = cljs.core.seq.call(null,seq__191507_191511);if(temp__4092__auto___191520)
{var seq__191507_191521__$1 = temp__4092__auto___191520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191507_191521__$1))
{var c__8952__auto___191522 = cljs.core.chunk_first.call(null,seq__191507_191521__$1);{
var G__191523 = cljs.core.chunk_rest.call(null,seq__191507_191521__$1);
var G__191524 = c__8952__auto___191522;
var G__191525 = cljs.core.count.call(null,c__8952__auto___191522);
var G__191526 = 0;
seq__191507_191511 = G__191523;
chunk__191508_191512 = G__191524;
count__191509_191513 = G__191525;
i__191510_191514 = G__191526;
continue;
}
} else
{var node_191527 = cljs.core.first.call(null,seq__191507_191521__$1);goog.dom.classes.toggle(node_191527,class$);
{
var G__191528 = cljs.core.next.call(null,seq__191507_191521__$1);
var G__191529 = null;
var G__191530 = 0;
var G__191531 = 0;
seq__191507_191511 = G__191528;
chunk__191508_191512 = G__191529;
count__191509_191513 = G__191530;
i__191510_191514 = G__191531;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_191540__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__191536_191541 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191537_191542 = null;var count__191538_191543 = 0;var i__191539_191544 = 0;while(true){
if((i__191539_191544 < count__191538_191543))
{var node_191545 = cljs.core._nth.call(null,chunk__191537_191542,i__191539_191544);goog.dom.classes.set(node_191545,classes_191540__$1);
{
var G__191546 = seq__191536_191541;
var G__191547 = chunk__191537_191542;
var G__191548 = count__191538_191543;
var G__191549 = (i__191539_191544 + 1);
seq__191536_191541 = G__191546;
chunk__191537_191542 = G__191547;
count__191538_191543 = G__191548;
i__191539_191544 = G__191549;
continue;
}
} else
{var temp__4092__auto___191550 = cljs.core.seq.call(null,seq__191536_191541);if(temp__4092__auto___191550)
{var seq__191536_191551__$1 = temp__4092__auto___191550;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191536_191551__$1))
{var c__8952__auto___191552 = cljs.core.chunk_first.call(null,seq__191536_191551__$1);{
var G__191553 = cljs.core.chunk_rest.call(null,seq__191536_191551__$1);
var G__191554 = c__8952__auto___191552;
var G__191555 = cljs.core.count.call(null,c__8952__auto___191552);
var G__191556 = 0;
seq__191536_191541 = G__191553;
chunk__191537_191542 = G__191554;
count__191538_191543 = G__191555;
i__191539_191544 = G__191556;
continue;
}
} else
{var node_191557 = cljs.core.first.call(null,seq__191536_191551__$1);goog.dom.classes.set(node_191557,classes_191540__$1);
{
var G__191558 = cljs.core.next.call(null,seq__191536_191551__$1);
var G__191559 = null;
var G__191560 = 0;
var G__191561 = 0;
seq__191536_191541 = G__191558;
chunk__191537_191542 = G__191559;
count__191538_191543 = G__191560;
i__191539_191544 = G__191561;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__191566_191570 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191567_191571 = null;var count__191568_191572 = 0;var i__191569_191573 = 0;while(true){
if((i__191569_191573 < count__191568_191572))
{var node_191574 = cljs.core._nth.call(null,chunk__191567_191571,i__191569_191573);goog.dom.setTextContent(node_191574,value);
{
var G__191575 = seq__191566_191570;
var G__191576 = chunk__191567_191571;
var G__191577 = count__191568_191572;
var G__191578 = (i__191569_191573 + 1);
seq__191566_191570 = G__191575;
chunk__191567_191571 = G__191576;
count__191568_191572 = G__191577;
i__191569_191573 = G__191578;
continue;
}
} else
{var temp__4092__auto___191579 = cljs.core.seq.call(null,seq__191566_191570);if(temp__4092__auto___191579)
{var seq__191566_191580__$1 = temp__4092__auto___191579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191566_191580__$1))
{var c__8952__auto___191581 = cljs.core.chunk_first.call(null,seq__191566_191580__$1);{
var G__191582 = cljs.core.chunk_rest.call(null,seq__191566_191580__$1);
var G__191583 = c__8952__auto___191581;
var G__191584 = cljs.core.count.call(null,c__8952__auto___191581);
var G__191585 = 0;
seq__191566_191570 = G__191582;
chunk__191567_191571 = G__191583;
count__191568_191572 = G__191584;
i__191569_191573 = G__191585;
continue;
}
} else
{var node_191586 = cljs.core.first.call(null,seq__191566_191580__$1);goog.dom.setTextContent(node_191586,value);
{
var G__191587 = cljs.core.next.call(null,seq__191566_191580__$1);
var G__191588 = null;
var G__191589 = 0;
var G__191590 = 0;
seq__191566_191570 = G__191587;
chunk__191567_191571 = G__191588;
count__191568_191572 = G__191589;
i__191569_191573 = G__191590;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__191595_191599 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191596_191600 = null;var count__191597_191601 = 0;var i__191598_191602 = 0;while(true){
if((i__191598_191602 < count__191597_191601))
{var node_191603 = cljs.core._nth.call(null,chunk__191596_191600,i__191598_191602);goog.dom.forms.setValue(node_191603,value);
{
var G__191604 = seq__191595_191599;
var G__191605 = chunk__191596_191600;
var G__191606 = count__191597_191601;
var G__191607 = (i__191598_191602 + 1);
seq__191595_191599 = G__191604;
chunk__191596_191600 = G__191605;
count__191597_191601 = G__191606;
i__191598_191602 = G__191607;
continue;
}
} else
{var temp__4092__auto___191608 = cljs.core.seq.call(null,seq__191595_191599);if(temp__4092__auto___191608)
{var seq__191595_191609__$1 = temp__4092__auto___191608;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191595_191609__$1))
{var c__8952__auto___191610 = cljs.core.chunk_first.call(null,seq__191595_191609__$1);{
var G__191611 = cljs.core.chunk_rest.call(null,seq__191595_191609__$1);
var G__191612 = c__8952__auto___191610;
var G__191613 = cljs.core.count.call(null,c__8952__auto___191610);
var G__191614 = 0;
seq__191595_191599 = G__191611;
chunk__191596_191600 = G__191612;
count__191597_191601 = G__191613;
i__191598_191602 = G__191614;
continue;
}
} else
{var node_191615 = cljs.core.first.call(null,seq__191595_191609__$1);goog.dom.forms.setValue(node_191615,value);
{
var G__191616 = cljs.core.next.call(null,seq__191595_191609__$1);
var G__191617 = null;
var G__191618 = 0;
var G__191619 = 0;
seq__191595_191599 = G__191616;
chunk__191596_191600 = G__191617;
count__191597_191601 = G__191618;
i__191598_191602 = G__191619;
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
{var value_191630 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__191626_191631 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__191627_191632 = null;var count__191628_191633 = 0;var i__191629_191634 = 0;while(true){
if((i__191629_191634 < count__191628_191633))
{var node_191635 = cljs.core._nth.call(null,chunk__191627_191632,i__191629_191634);node_191635.innerHTML = value_191630;
{
var G__191636 = seq__191626_191631;
var G__191637 = chunk__191627_191632;
var G__191638 = count__191628_191633;
var G__191639 = (i__191629_191634 + 1);
seq__191626_191631 = G__191636;
chunk__191627_191632 = G__191637;
count__191628_191633 = G__191638;
i__191629_191634 = G__191639;
continue;
}
} else
{var temp__4092__auto___191640 = cljs.core.seq.call(null,seq__191626_191631);if(temp__4092__auto___191640)
{var seq__191626_191641__$1 = temp__4092__auto___191640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191626_191641__$1))
{var c__8952__auto___191642 = cljs.core.chunk_first.call(null,seq__191626_191641__$1);{
var G__191643 = cljs.core.chunk_rest.call(null,seq__191626_191641__$1);
var G__191644 = c__8952__auto___191642;
var G__191645 = cljs.core.count.call(null,c__8952__auto___191642);
var G__191646 = 0;
seq__191626_191631 = G__191643;
chunk__191627_191632 = G__191644;
count__191628_191633 = G__191645;
i__191629_191634 = G__191646;
continue;
}
} else
{var node_191647 = cljs.core.first.call(null,seq__191626_191641__$1);node_191647.innerHTML = value_191630;
{
var G__191648 = cljs.core.next.call(null,seq__191626_191641__$1);
var G__191649 = null;
var G__191650 = 0;
var G__191651 = 0;
seq__191626_191631 = G__191648;
chunk__191627_191632 = G__191649;
count__191628_191633 = G__191650;
i__191629_191634 = G__191651;
continue;
}
}
} else
{}
}
break;
}
}catch (e191625){if((e191625 instanceof Error))
{var e_191652 = e191625;domina.replace_children_BANG_.call(null,content,value_191630);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e191625;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__191659_191663 = cljs.core.seq.call(null,children);var chunk__191660_191664 = null;var count__191661_191665 = 0;var i__191662_191666 = 0;while(true){
if((i__191662_191666 < count__191661_191665))
{var child_191667 = cljs.core._nth.call(null,chunk__191660_191664,i__191662_191666);frag.appendChild(child_191667);
{
var G__191668 = seq__191659_191663;
var G__191669 = chunk__191660_191664;
var G__191670 = count__191661_191665;
var G__191671 = (i__191662_191666 + 1);
seq__191659_191663 = G__191668;
chunk__191660_191664 = G__191669;
count__191661_191665 = G__191670;
i__191662_191666 = G__191671;
continue;
}
} else
{var temp__4092__auto___191672 = cljs.core.seq.call(null,seq__191659_191663);if(temp__4092__auto___191672)
{var seq__191659_191673__$1 = temp__4092__auto___191672;if(cljs.core.chunked_seq_QMARK_.call(null,seq__191659_191673__$1))
{var c__8952__auto___191674 = cljs.core.chunk_first.call(null,seq__191659_191673__$1);{
var G__191675 = cljs.core.chunk_rest.call(null,seq__191659_191673__$1);
var G__191676 = c__8952__auto___191674;
var G__191677 = cljs.core.count.call(null,c__8952__auto___191674);
var G__191678 = 0;
seq__191659_191663 = G__191675;
chunk__191660_191664 = G__191676;
count__191661_191665 = G__191677;
i__191662_191666 = G__191678;
continue;
}
} else
{var child_191679 = cljs.core.first.call(null,seq__191659_191673__$1);frag.appendChild(child_191679);
{
var G__191680 = cljs.core.next.call(null,seq__191659_191673__$1);
var G__191681 = null;
var G__191682 = 0;
var G__191683 = 0;
seq__191659_191663 = G__191680;
chunk__191660_191664 = G__191681;
count__191661_191665 = G__191682;
i__191662_191666 = G__191683;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__191653_SHARP_,p2__191654_SHARP_){return f.call(null,p1__191653_SHARP_,p2__191654_SHARP_);
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
{if((function (){var G__191685 = list_thing;if(G__191685)
{var bit__8854__auto__ = (G__191685.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__191685.cljs$core$ISeqable$))
{return true;
} else
{if((!G__191685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191685);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191685);
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
{if((function (){var G__191686 = content;if(G__191686)
{var bit__8854__auto__ = (G__191686.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__191686.cljs$core$ISeqable$))
{return true;
} else
{if((!G__191686.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191686);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191686);
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
{if((function (){var G__191687 = content;if(G__191687)
{var bit__8854__auto__ = (G__191687.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__8854__auto__) || (G__191687.cljs$core$ISeqable$))
{return true;
} else
{if((!G__191687.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191687);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__191687);
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