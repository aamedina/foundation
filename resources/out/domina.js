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
var opt_wrapper_40113 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40114 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_40115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_40114,table_section_wrapper_40114,opt_wrapper_40113,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_40115,table_section_wrapper_40114,cell_wrapper_40115,opt_wrapper_40113,table_section_wrapper_40114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_40114]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13776__auto__ = div.firstChild;if(cljs.core.truth_(and__13776__auto__))
{return div.firstChild.childNodes;
} else
{return and__13776__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40120 = cljs.core.seq.call(null,tbody);var chunk__40121 = null;var count__40122 = 0;var i__40123 = 0;while(true){
if((i__40123 < count__40122))
{var child = cljs.core._nth.call(null,chunk__40121,i__40123);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40124 = seq__40120;
var G__40125 = chunk__40121;
var G__40126 = count__40122;
var G__40127 = (i__40123 + 1);
seq__40120 = G__40124;
chunk__40121 = G__40125;
count__40122 = G__40126;
i__40123 = G__40127;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__40120);if(temp__4092__auto__)
{var seq__40120__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40120__$1))
{var c__14512__auto__ = cljs.core.chunk_first.call(null,seq__40120__$1);{
var G__40128 = cljs.core.chunk_rest.call(null,seq__40120__$1);
var G__40129 = c__14512__auto__;
var G__40130 = cljs.core.count.call(null,c__14512__auto__);
var G__40131 = 0;
seq__40120 = G__40128;
chunk__40121 = G__40129;
count__40122 = G__40130;
i__40123 = G__40131;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__40120__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40132 = cljs.core.next.call(null,seq__40120__$1);
var G__40133 = null;
var G__40134 = 0;
var G__40135 = 0;
seq__40120 = G__40132;
chunk__40121 = G__40133;
count__40122 = G__40134;
i__40123 = G__40135;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__40137 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__40137,0,null);var start_wrap = cljs.core.nth.call(null,vec__40137,1,null);var end_wrap = cljs.core.nth.call(null,vec__40137,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__40138 = wrapper.lastChild;
var G__40139 = (level - 1);
wrapper = G__40138;
level = G__40139;
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
if(cljs.core.truth_((function (){var and__13776__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13776__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13776__auto__;
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
domina.DomContent = (function (){var obj40141 = {};return obj40141;
})();
domina.nodes = (function nodes(content){if((function (){var and__13776__auto__ = content;if(and__13776__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13776__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14391__auto__ = (((content == null))?null:content);return (function (){var or__13788__auto__ = (domina.nodes[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (domina.nodes["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13776__auto__ = nodeseq;if(and__13776__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13776__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14391__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13788__auto__ = (domina.single_node[goog.typeOf(x__14391__auto__)]);if(or__13788__auto__)
{return or__13788__auto__;
} else
{var or__13788__auto____$1 = (domina.single_node["_"]);if(or__13788__auto____$1)
{return or__13788__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13776__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13776__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13776__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__40142){
var mesg = cljs.core.seq(arglist__40142);
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
log.cljs$lang$applyTo = (function (arglist__40143){
var mesg = cljs.core.seq(arglist__40143);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40144){
var contents = cljs.core.seq(arglist__40144);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__40145_SHARP_){return p1__40145_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__40146_SHARP_,p2__40147_SHARP_){return goog.dom.insertChildAt(p1__40146_SHARP_,p2__40147_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40149_SHARP_,p2__40148_SHARP_){return goog.dom.insertSiblingBefore(p2__40148_SHARP_,p1__40149_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40151_SHARP_,p2__40150_SHARP_){return goog.dom.insertSiblingAfter(p2__40150_SHARP_,p1__40151_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__40153_SHARP_,p2__40152_SHARP_){return goog.dom.replaceNode(p2__40152_SHARP_,p1__40153_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40158_40162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40159_40163 = null;var count__40160_40164 = 0;var i__40161_40165 = 0;while(true){
if((i__40161_40165 < count__40160_40164))
{var n_40166 = cljs.core._nth.call(null,chunk__40159_40163,i__40161_40165);goog.style.setStyle(n_40166,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40167 = seq__40158_40162;
var G__40168 = chunk__40159_40163;
var G__40169 = count__40160_40164;
var G__40170 = (i__40161_40165 + 1);
seq__40158_40162 = G__40167;
chunk__40159_40163 = G__40168;
count__40160_40164 = G__40169;
i__40161_40165 = G__40170;
continue;
}
} else
{var temp__4092__auto___40171 = cljs.core.seq.call(null,seq__40158_40162);if(temp__4092__auto___40171)
{var seq__40158_40172__$1 = temp__4092__auto___40171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40158_40172__$1))
{var c__14512__auto___40173 = cljs.core.chunk_first.call(null,seq__40158_40172__$1);{
var G__40174 = cljs.core.chunk_rest.call(null,seq__40158_40172__$1);
var G__40175 = c__14512__auto___40173;
var G__40176 = cljs.core.count.call(null,c__14512__auto___40173);
var G__40177 = 0;
seq__40158_40162 = G__40174;
chunk__40159_40163 = G__40175;
count__40160_40164 = G__40176;
i__40161_40165 = G__40177;
continue;
}
} else
{var n_40178 = cljs.core.first.call(null,seq__40158_40172__$1);goog.style.setStyle(n_40178,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40179 = cljs.core.next.call(null,seq__40158_40172__$1);
var G__40180 = null;
var G__40181 = 0;
var G__40182 = 0;
seq__40158_40162 = G__40179;
chunk__40159_40163 = G__40180;
count__40160_40164 = G__40181;
i__40161_40165 = G__40182;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40183){
var content = cljs.core.first(arglist__40183);
arglist__40183 = cljs.core.next(arglist__40183);
var name = cljs.core.first(arglist__40183);
var value = cljs.core.rest(arglist__40183);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40188_40192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40189_40193 = null;var count__40190_40194 = 0;var i__40191_40195 = 0;while(true){
if((i__40191_40195 < count__40190_40194))
{var n_40196 = cljs.core._nth.call(null,chunk__40189_40193,i__40191_40195);n_40196.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40197 = seq__40188_40192;
var G__40198 = chunk__40189_40193;
var G__40199 = count__40190_40194;
var G__40200 = (i__40191_40195 + 1);
seq__40188_40192 = G__40197;
chunk__40189_40193 = G__40198;
count__40190_40194 = G__40199;
i__40191_40195 = G__40200;
continue;
}
} else
{var temp__4092__auto___40201 = cljs.core.seq.call(null,seq__40188_40192);if(temp__4092__auto___40201)
{var seq__40188_40202__$1 = temp__4092__auto___40201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40188_40202__$1))
{var c__14512__auto___40203 = cljs.core.chunk_first.call(null,seq__40188_40202__$1);{
var G__40204 = cljs.core.chunk_rest.call(null,seq__40188_40202__$1);
var G__40205 = c__14512__auto___40203;
var G__40206 = cljs.core.count.call(null,c__14512__auto___40203);
var G__40207 = 0;
seq__40188_40192 = G__40204;
chunk__40189_40193 = G__40205;
count__40190_40194 = G__40206;
i__40191_40195 = G__40207;
continue;
}
} else
{var n_40208 = cljs.core.first.call(null,seq__40188_40202__$1);n_40208.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40209 = cljs.core.next.call(null,seq__40188_40202__$1);
var G__40210 = null;
var G__40211 = 0;
var G__40212 = 0;
seq__40188_40192 = G__40209;
chunk__40189_40193 = G__40210;
count__40190_40194 = G__40211;
i__40191_40195 = G__40212;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40213){
var content = cljs.core.first(arglist__40213);
arglist__40213 = cljs.core.next(arglist__40213);
var name = cljs.core.first(arglist__40213);
var value = cljs.core.rest(arglist__40213);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40218_40222 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40219_40223 = null;var count__40220_40224 = 0;var i__40221_40225 = 0;while(true){
if((i__40221_40225 < count__40220_40224))
{var n_40226 = cljs.core._nth.call(null,chunk__40219_40223,i__40221_40225);n_40226.removeAttribute(cljs.core.name.call(null,name));
{
var G__40227 = seq__40218_40222;
var G__40228 = chunk__40219_40223;
var G__40229 = count__40220_40224;
var G__40230 = (i__40221_40225 + 1);
seq__40218_40222 = G__40227;
chunk__40219_40223 = G__40228;
count__40220_40224 = G__40229;
i__40221_40225 = G__40230;
continue;
}
} else
{var temp__4092__auto___40231 = cljs.core.seq.call(null,seq__40218_40222);if(temp__4092__auto___40231)
{var seq__40218_40232__$1 = temp__4092__auto___40231;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40218_40232__$1))
{var c__14512__auto___40233 = cljs.core.chunk_first.call(null,seq__40218_40232__$1);{
var G__40234 = cljs.core.chunk_rest.call(null,seq__40218_40232__$1);
var G__40235 = c__14512__auto___40233;
var G__40236 = cljs.core.count.call(null,c__14512__auto___40233);
var G__40237 = 0;
seq__40218_40222 = G__40234;
chunk__40219_40223 = G__40235;
count__40220_40224 = G__40236;
i__40221_40225 = G__40237;
continue;
}
} else
{var n_40238 = cljs.core.first.call(null,seq__40218_40232__$1);n_40238.removeAttribute(cljs.core.name.call(null,name));
{
var G__40239 = cljs.core.next.call(null,seq__40218_40232__$1);
var G__40240 = null;
var G__40241 = 0;
var G__40242 = 0;
seq__40218_40222 = G__40239;
chunk__40219_40223 = G__40240;
count__40220_40224 = G__40241;
i__40221_40225 = G__40242;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__40244 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__40244,0,null);var v = cljs.core.nth.call(null,vec__40244,1,null);if(cljs.core.truth_((function (){var and__13776__auto__ = k;if(cljs.core.truth_(and__13776__auto__))
{return v;
} else
{return and__13776__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__40245_SHARP_){var attr = attrs__$1.item(p1__40245_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40252_40258 = cljs.core.seq.call(null,styles);var chunk__40253_40259 = null;var count__40254_40260 = 0;var i__40255_40261 = 0;while(true){
if((i__40255_40261 < count__40254_40260))
{var vec__40256_40262 = cljs.core._nth.call(null,chunk__40253_40259,i__40255_40261);var name_40263 = cljs.core.nth.call(null,vec__40256_40262,0,null);var value_40264 = cljs.core.nth.call(null,vec__40256_40262,1,null);domina.set_style_BANG_.call(null,content,name_40263,value_40264);
{
var G__40265 = seq__40252_40258;
var G__40266 = chunk__40253_40259;
var G__40267 = count__40254_40260;
var G__40268 = (i__40255_40261 + 1);
seq__40252_40258 = G__40265;
chunk__40253_40259 = G__40266;
count__40254_40260 = G__40267;
i__40255_40261 = G__40268;
continue;
}
} else
{var temp__4092__auto___40269 = cljs.core.seq.call(null,seq__40252_40258);if(temp__4092__auto___40269)
{var seq__40252_40270__$1 = temp__4092__auto___40269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40252_40270__$1))
{var c__14512__auto___40271 = cljs.core.chunk_first.call(null,seq__40252_40270__$1);{
var G__40272 = cljs.core.chunk_rest.call(null,seq__40252_40270__$1);
var G__40273 = c__14512__auto___40271;
var G__40274 = cljs.core.count.call(null,c__14512__auto___40271);
var G__40275 = 0;
seq__40252_40258 = G__40272;
chunk__40253_40259 = G__40273;
count__40254_40260 = G__40274;
i__40255_40261 = G__40275;
continue;
}
} else
{var vec__40257_40276 = cljs.core.first.call(null,seq__40252_40270__$1);var name_40277 = cljs.core.nth.call(null,vec__40257_40276,0,null);var value_40278 = cljs.core.nth.call(null,vec__40257_40276,1,null);domina.set_style_BANG_.call(null,content,name_40277,value_40278);
{
var G__40279 = cljs.core.next.call(null,seq__40252_40270__$1);
var G__40280 = null;
var G__40281 = 0;
var G__40282 = 0;
seq__40252_40258 = G__40279;
chunk__40253_40259 = G__40280;
count__40254_40260 = G__40281;
i__40255_40261 = G__40282;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40289_40295 = cljs.core.seq.call(null,attrs);var chunk__40290_40296 = null;var count__40291_40297 = 0;var i__40292_40298 = 0;while(true){
if((i__40292_40298 < count__40291_40297))
{var vec__40293_40299 = cljs.core._nth.call(null,chunk__40290_40296,i__40292_40298);var name_40300 = cljs.core.nth.call(null,vec__40293_40299,0,null);var value_40301 = cljs.core.nth.call(null,vec__40293_40299,1,null);domina.set_attr_BANG_.call(null,content,name_40300,value_40301);
{
var G__40302 = seq__40289_40295;
var G__40303 = chunk__40290_40296;
var G__40304 = count__40291_40297;
var G__40305 = (i__40292_40298 + 1);
seq__40289_40295 = G__40302;
chunk__40290_40296 = G__40303;
count__40291_40297 = G__40304;
i__40292_40298 = G__40305;
continue;
}
} else
{var temp__4092__auto___40306 = cljs.core.seq.call(null,seq__40289_40295);if(temp__4092__auto___40306)
{var seq__40289_40307__$1 = temp__4092__auto___40306;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40289_40307__$1))
{var c__14512__auto___40308 = cljs.core.chunk_first.call(null,seq__40289_40307__$1);{
var G__40309 = cljs.core.chunk_rest.call(null,seq__40289_40307__$1);
var G__40310 = c__14512__auto___40308;
var G__40311 = cljs.core.count.call(null,c__14512__auto___40308);
var G__40312 = 0;
seq__40289_40295 = G__40309;
chunk__40290_40296 = G__40310;
count__40291_40297 = G__40311;
i__40292_40298 = G__40312;
continue;
}
} else
{var vec__40294_40313 = cljs.core.first.call(null,seq__40289_40307__$1);var name_40314 = cljs.core.nth.call(null,vec__40294_40313,0,null);var value_40315 = cljs.core.nth.call(null,vec__40294_40313,1,null);domina.set_attr_BANG_.call(null,content,name_40314,value_40315);
{
var G__40316 = cljs.core.next.call(null,seq__40289_40307__$1);
var G__40317 = null;
var G__40318 = 0;
var G__40319 = 0;
seq__40289_40295 = G__40316;
chunk__40290_40296 = G__40317;
count__40291_40297 = G__40318;
i__40292_40298 = G__40319;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40324_40328 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40325_40329 = null;var count__40326_40330 = 0;var i__40327_40331 = 0;while(true){
if((i__40327_40331 < count__40326_40330))
{var node_40332 = cljs.core._nth.call(null,chunk__40325_40329,i__40327_40331);goog.dom.classes.add(node_40332,class$);
{
var G__40333 = seq__40324_40328;
var G__40334 = chunk__40325_40329;
var G__40335 = count__40326_40330;
var G__40336 = (i__40327_40331 + 1);
seq__40324_40328 = G__40333;
chunk__40325_40329 = G__40334;
count__40326_40330 = G__40335;
i__40327_40331 = G__40336;
continue;
}
} else
{var temp__4092__auto___40337 = cljs.core.seq.call(null,seq__40324_40328);if(temp__4092__auto___40337)
{var seq__40324_40338__$1 = temp__4092__auto___40337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40324_40338__$1))
{var c__14512__auto___40339 = cljs.core.chunk_first.call(null,seq__40324_40338__$1);{
var G__40340 = cljs.core.chunk_rest.call(null,seq__40324_40338__$1);
var G__40341 = c__14512__auto___40339;
var G__40342 = cljs.core.count.call(null,c__14512__auto___40339);
var G__40343 = 0;
seq__40324_40328 = G__40340;
chunk__40325_40329 = G__40341;
count__40326_40330 = G__40342;
i__40327_40331 = G__40343;
continue;
}
} else
{var node_40344 = cljs.core.first.call(null,seq__40324_40338__$1);goog.dom.classes.add(node_40344,class$);
{
var G__40345 = cljs.core.next.call(null,seq__40324_40338__$1);
var G__40346 = null;
var G__40347 = 0;
var G__40348 = 0;
seq__40324_40328 = G__40345;
chunk__40325_40329 = G__40346;
count__40326_40330 = G__40347;
i__40327_40331 = G__40348;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40353_40357 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40354_40358 = null;var count__40355_40359 = 0;var i__40356_40360 = 0;while(true){
if((i__40356_40360 < count__40355_40359))
{var node_40361 = cljs.core._nth.call(null,chunk__40354_40358,i__40356_40360);goog.dom.classes.remove(node_40361,class$);
{
var G__40362 = seq__40353_40357;
var G__40363 = chunk__40354_40358;
var G__40364 = count__40355_40359;
var G__40365 = (i__40356_40360 + 1);
seq__40353_40357 = G__40362;
chunk__40354_40358 = G__40363;
count__40355_40359 = G__40364;
i__40356_40360 = G__40365;
continue;
}
} else
{var temp__4092__auto___40366 = cljs.core.seq.call(null,seq__40353_40357);if(temp__4092__auto___40366)
{var seq__40353_40367__$1 = temp__4092__auto___40366;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40353_40367__$1))
{var c__14512__auto___40368 = cljs.core.chunk_first.call(null,seq__40353_40367__$1);{
var G__40369 = cljs.core.chunk_rest.call(null,seq__40353_40367__$1);
var G__40370 = c__14512__auto___40368;
var G__40371 = cljs.core.count.call(null,c__14512__auto___40368);
var G__40372 = 0;
seq__40353_40357 = G__40369;
chunk__40354_40358 = G__40370;
count__40355_40359 = G__40371;
i__40356_40360 = G__40372;
continue;
}
} else
{var node_40373 = cljs.core.first.call(null,seq__40353_40367__$1);goog.dom.classes.remove(node_40373,class$);
{
var G__40374 = cljs.core.next.call(null,seq__40353_40367__$1);
var G__40375 = null;
var G__40376 = 0;
var G__40377 = 0;
seq__40353_40357 = G__40374;
chunk__40354_40358 = G__40375;
count__40355_40359 = G__40376;
i__40356_40360 = G__40377;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40382_40386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40383_40387 = null;var count__40384_40388 = 0;var i__40385_40389 = 0;while(true){
if((i__40385_40389 < count__40384_40388))
{var node_40390 = cljs.core._nth.call(null,chunk__40383_40387,i__40385_40389);goog.dom.classes.toggle(node_40390,class$);
{
var G__40391 = seq__40382_40386;
var G__40392 = chunk__40383_40387;
var G__40393 = count__40384_40388;
var G__40394 = (i__40385_40389 + 1);
seq__40382_40386 = G__40391;
chunk__40383_40387 = G__40392;
count__40384_40388 = G__40393;
i__40385_40389 = G__40394;
continue;
}
} else
{var temp__4092__auto___40395 = cljs.core.seq.call(null,seq__40382_40386);if(temp__4092__auto___40395)
{var seq__40382_40396__$1 = temp__4092__auto___40395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40382_40396__$1))
{var c__14512__auto___40397 = cljs.core.chunk_first.call(null,seq__40382_40396__$1);{
var G__40398 = cljs.core.chunk_rest.call(null,seq__40382_40396__$1);
var G__40399 = c__14512__auto___40397;
var G__40400 = cljs.core.count.call(null,c__14512__auto___40397);
var G__40401 = 0;
seq__40382_40386 = G__40398;
chunk__40383_40387 = G__40399;
count__40384_40388 = G__40400;
i__40385_40389 = G__40401;
continue;
}
} else
{var node_40402 = cljs.core.first.call(null,seq__40382_40396__$1);goog.dom.classes.toggle(node_40402,class$);
{
var G__40403 = cljs.core.next.call(null,seq__40382_40396__$1);
var G__40404 = null;
var G__40405 = 0;
var G__40406 = 0;
seq__40382_40386 = G__40403;
chunk__40383_40387 = G__40404;
count__40384_40388 = G__40405;
i__40385_40389 = G__40406;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40415__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__40411_40416 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40412_40417 = null;var count__40413_40418 = 0;var i__40414_40419 = 0;while(true){
if((i__40414_40419 < count__40413_40418))
{var node_40420 = cljs.core._nth.call(null,chunk__40412_40417,i__40414_40419);goog.dom.classes.set(node_40420,classes_40415__$1);
{
var G__40421 = seq__40411_40416;
var G__40422 = chunk__40412_40417;
var G__40423 = count__40413_40418;
var G__40424 = (i__40414_40419 + 1);
seq__40411_40416 = G__40421;
chunk__40412_40417 = G__40422;
count__40413_40418 = G__40423;
i__40414_40419 = G__40424;
continue;
}
} else
{var temp__4092__auto___40425 = cljs.core.seq.call(null,seq__40411_40416);if(temp__4092__auto___40425)
{var seq__40411_40426__$1 = temp__4092__auto___40425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40411_40426__$1))
{var c__14512__auto___40427 = cljs.core.chunk_first.call(null,seq__40411_40426__$1);{
var G__40428 = cljs.core.chunk_rest.call(null,seq__40411_40426__$1);
var G__40429 = c__14512__auto___40427;
var G__40430 = cljs.core.count.call(null,c__14512__auto___40427);
var G__40431 = 0;
seq__40411_40416 = G__40428;
chunk__40412_40417 = G__40429;
count__40413_40418 = G__40430;
i__40414_40419 = G__40431;
continue;
}
} else
{var node_40432 = cljs.core.first.call(null,seq__40411_40426__$1);goog.dom.classes.set(node_40432,classes_40415__$1);
{
var G__40433 = cljs.core.next.call(null,seq__40411_40426__$1);
var G__40434 = null;
var G__40435 = 0;
var G__40436 = 0;
seq__40411_40416 = G__40433;
chunk__40412_40417 = G__40434;
count__40413_40418 = G__40435;
i__40414_40419 = G__40436;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40441_40445 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40442_40446 = null;var count__40443_40447 = 0;var i__40444_40448 = 0;while(true){
if((i__40444_40448 < count__40443_40447))
{var node_40449 = cljs.core._nth.call(null,chunk__40442_40446,i__40444_40448);goog.dom.setTextContent(node_40449,value);
{
var G__40450 = seq__40441_40445;
var G__40451 = chunk__40442_40446;
var G__40452 = count__40443_40447;
var G__40453 = (i__40444_40448 + 1);
seq__40441_40445 = G__40450;
chunk__40442_40446 = G__40451;
count__40443_40447 = G__40452;
i__40444_40448 = G__40453;
continue;
}
} else
{var temp__4092__auto___40454 = cljs.core.seq.call(null,seq__40441_40445);if(temp__4092__auto___40454)
{var seq__40441_40455__$1 = temp__4092__auto___40454;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40441_40455__$1))
{var c__14512__auto___40456 = cljs.core.chunk_first.call(null,seq__40441_40455__$1);{
var G__40457 = cljs.core.chunk_rest.call(null,seq__40441_40455__$1);
var G__40458 = c__14512__auto___40456;
var G__40459 = cljs.core.count.call(null,c__14512__auto___40456);
var G__40460 = 0;
seq__40441_40445 = G__40457;
chunk__40442_40446 = G__40458;
count__40443_40447 = G__40459;
i__40444_40448 = G__40460;
continue;
}
} else
{var node_40461 = cljs.core.first.call(null,seq__40441_40455__$1);goog.dom.setTextContent(node_40461,value);
{
var G__40462 = cljs.core.next.call(null,seq__40441_40455__$1);
var G__40463 = null;
var G__40464 = 0;
var G__40465 = 0;
seq__40441_40445 = G__40462;
chunk__40442_40446 = G__40463;
count__40443_40447 = G__40464;
i__40444_40448 = G__40465;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40470_40474 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40471_40475 = null;var count__40472_40476 = 0;var i__40473_40477 = 0;while(true){
if((i__40473_40477 < count__40472_40476))
{var node_40478 = cljs.core._nth.call(null,chunk__40471_40475,i__40473_40477);goog.dom.forms.setValue(node_40478,value);
{
var G__40479 = seq__40470_40474;
var G__40480 = chunk__40471_40475;
var G__40481 = count__40472_40476;
var G__40482 = (i__40473_40477 + 1);
seq__40470_40474 = G__40479;
chunk__40471_40475 = G__40480;
count__40472_40476 = G__40481;
i__40473_40477 = G__40482;
continue;
}
} else
{var temp__4092__auto___40483 = cljs.core.seq.call(null,seq__40470_40474);if(temp__4092__auto___40483)
{var seq__40470_40484__$1 = temp__4092__auto___40483;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40470_40484__$1))
{var c__14512__auto___40485 = cljs.core.chunk_first.call(null,seq__40470_40484__$1);{
var G__40486 = cljs.core.chunk_rest.call(null,seq__40470_40484__$1);
var G__40487 = c__14512__auto___40485;
var G__40488 = cljs.core.count.call(null,c__14512__auto___40485);
var G__40489 = 0;
seq__40470_40474 = G__40486;
chunk__40471_40475 = G__40487;
count__40472_40476 = G__40488;
i__40473_40477 = G__40489;
continue;
}
} else
{var node_40490 = cljs.core.first.call(null,seq__40470_40484__$1);goog.dom.forms.setValue(node_40490,value);
{
var G__40491 = cljs.core.next.call(null,seq__40470_40484__$1);
var G__40492 = null;
var G__40493 = 0;
var G__40494 = 0;
seq__40470_40474 = G__40491;
chunk__40471_40475 = G__40492;
count__40472_40476 = G__40493;
i__40473_40477 = G__40494;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13776__auto__ = allows_inner_html_QMARK_;if(and__13776__auto__)
{var and__13776__auto____$1 = (function (){var or__13788__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13776__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13776__auto____$1;
}
} else
{return and__13776__auto__;
}
})()))
{var value_40505 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40501_40506 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40502_40507 = null;var count__40503_40508 = 0;var i__40504_40509 = 0;while(true){
if((i__40504_40509 < count__40503_40508))
{var node_40510 = cljs.core._nth.call(null,chunk__40502_40507,i__40504_40509);node_40510.innerHTML = value_40505;
{
var G__40511 = seq__40501_40506;
var G__40512 = chunk__40502_40507;
var G__40513 = count__40503_40508;
var G__40514 = (i__40504_40509 + 1);
seq__40501_40506 = G__40511;
chunk__40502_40507 = G__40512;
count__40503_40508 = G__40513;
i__40504_40509 = G__40514;
continue;
}
} else
{var temp__4092__auto___40515 = cljs.core.seq.call(null,seq__40501_40506);if(temp__4092__auto___40515)
{var seq__40501_40516__$1 = temp__4092__auto___40515;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40501_40516__$1))
{var c__14512__auto___40517 = cljs.core.chunk_first.call(null,seq__40501_40516__$1);{
var G__40518 = cljs.core.chunk_rest.call(null,seq__40501_40516__$1);
var G__40519 = c__14512__auto___40517;
var G__40520 = cljs.core.count.call(null,c__14512__auto___40517);
var G__40521 = 0;
seq__40501_40506 = G__40518;
chunk__40502_40507 = G__40519;
count__40503_40508 = G__40520;
i__40504_40509 = G__40521;
continue;
}
} else
{var node_40522 = cljs.core.first.call(null,seq__40501_40516__$1);node_40522.innerHTML = value_40505;
{
var G__40523 = cljs.core.next.call(null,seq__40501_40516__$1);
var G__40524 = null;
var G__40525 = 0;
var G__40526 = 0;
seq__40501_40506 = G__40523;
chunk__40502_40507 = G__40524;
count__40503_40508 = G__40525;
i__40504_40509 = G__40526;
continue;
}
}
} else
{}
}
break;
}
}catch (e40500){if((e40500 instanceof Error))
{var e_40527 = e40500;domina.replace_children_BANG_.call(null,content,value_40505);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40500;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13776__auto__ = bubble;if(cljs.core.truth_(and__13776__auto__))
{return (value == null);
} else
{return and__13776__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13788__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13788__auto__))
{return or__13788__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40534_40538 = cljs.core.seq.call(null,children);var chunk__40535_40539 = null;var count__40536_40540 = 0;var i__40537_40541 = 0;while(true){
if((i__40537_40541 < count__40536_40540))
{var child_40542 = cljs.core._nth.call(null,chunk__40535_40539,i__40537_40541);frag.appendChild(child_40542);
{
var G__40543 = seq__40534_40538;
var G__40544 = chunk__40535_40539;
var G__40545 = count__40536_40540;
var G__40546 = (i__40537_40541 + 1);
seq__40534_40538 = G__40543;
chunk__40535_40539 = G__40544;
count__40536_40540 = G__40545;
i__40537_40541 = G__40546;
continue;
}
} else
{var temp__4092__auto___40547 = cljs.core.seq.call(null,seq__40534_40538);if(temp__4092__auto___40547)
{var seq__40534_40548__$1 = temp__4092__auto___40547;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40534_40548__$1))
{var c__14512__auto___40549 = cljs.core.chunk_first.call(null,seq__40534_40548__$1);{
var G__40550 = cljs.core.chunk_rest.call(null,seq__40534_40548__$1);
var G__40551 = c__14512__auto___40549;
var G__40552 = cljs.core.count.call(null,c__14512__auto___40549);
var G__40553 = 0;
seq__40534_40538 = G__40550;
chunk__40535_40539 = G__40551;
count__40536_40540 = G__40552;
i__40537_40541 = G__40553;
continue;
}
} else
{var child_40554 = cljs.core.first.call(null,seq__40534_40548__$1);frag.appendChild(child_40554);
{
var G__40555 = cljs.core.next.call(null,seq__40534_40548__$1);
var G__40556 = null;
var G__40557 = 0;
var G__40558 = 0;
seq__40534_40538 = G__40555;
chunk__40535_40539 = G__40556;
count__40536_40540 = G__40557;
i__40537_40541 = G__40558;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__40528_SHARP_,p2__40529_SHARP_){return f.call(null,p1__40528_SHARP_,p2__40529_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13776__auto__ = obj;if(cljs.core.truth_(and__13776__auto__))
{var and__13776__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13776__auto____$1)
{return obj.length;
} else
{return and__13776__auto____$1;
}
} else
{return and__13776__auto__;
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
{if((function (){var G__40560 = list_thing;if(G__40560)
{var bit__14414__auto__ = (G__40560.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14414__auto__) || (G__40560.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40560.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40560);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40560);
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
{if((function (){var G__40561 = content;if(G__40561)
{var bit__14414__auto__ = (G__40561.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14414__auto__) || (G__40561.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40561.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40561);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40561);
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
{if((function (){var G__40562 = content;if(G__40562)
{var bit__14414__auto__ = (G__40562.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14414__auto__) || (G__40562.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40562.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40562);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40562);
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