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
var opt_wrapper_327877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_327878 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_327879 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_327878,table_section_wrapper_327878,opt_wrapper_327877,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_327879,table_section_wrapper_327878,cell_wrapper_327879,opt_wrapper_327877,table_section_wrapper_327878,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_327878]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13813__auto__ = div.firstChild;if(cljs.core.truth_(and__13813__auto__))
{return div.firstChild.childNodes;
} else
{return and__13813__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__327884 = cljs.core.seq.call(null,tbody);var chunk__327885 = null;var count__327886 = 0;var i__327887 = 0;while(true){
if((i__327887 < count__327886))
{var child = cljs.core._nth.call(null,chunk__327885,i__327887);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__327888 = seq__327884;
var G__327889 = chunk__327885;
var G__327890 = count__327886;
var G__327891 = (i__327887 + 1);
seq__327884 = G__327888;
chunk__327885 = G__327889;
count__327886 = G__327890;
i__327887 = G__327891;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__327884);if(temp__4092__auto__)
{var seq__327884__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327884__$1))
{var c__14549__auto__ = cljs.core.chunk_first.call(null,seq__327884__$1);{
var G__327892 = cljs.core.chunk_rest.call(null,seq__327884__$1);
var G__327893 = c__14549__auto__;
var G__327894 = cljs.core.count.call(null,c__14549__auto__);
var G__327895 = 0;
seq__327884 = G__327892;
chunk__327885 = G__327893;
count__327886 = G__327894;
i__327887 = G__327895;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__327884__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__327896 = cljs.core.next.call(null,seq__327884__$1);
var G__327897 = null;
var G__327898 = 0;
var G__327899 = 0;
seq__327884 = G__327896;
chunk__327885 = G__327897;
count__327886 = G__327898;
i__327887 = G__327899;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__327901 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__327901,0,null);var start_wrap = cljs.core.nth.call(null,vec__327901,1,null);var end_wrap = cljs.core.nth.call(null,vec__327901,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__327902 = wrapper.lastChild;
var G__327903 = (level - 1);
wrapper = G__327902;
level = G__327903;
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
if(cljs.core.truth_((function (){var and__13813__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13813__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13813__auto__;
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
domina.DomContent = (function (){var obj327905 = {};return obj327905;
})();
domina.nodes = (function nodes(content){if((function (){var and__13813__auto__ = content;if(and__13813__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13813__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14428__auto__ = (((content == null))?null:content);return (function (){var or__13825__auto__ = (domina.nodes[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (domina.nodes["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13813__auto__ = nodeseq;if(and__13813__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13813__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14428__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13825__auto__ = (domina.single_node[goog.typeOf(x__14428__auto__)]);if(or__13825__auto__)
{return or__13825__auto__;
} else
{var or__13825__auto____$1 = (domina.single_node["_"]);if(or__13825__auto____$1)
{return or__13825__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13813__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13813__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13813__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__327906){
var mesg = cljs.core.seq(arglist__327906);
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
log.cljs$lang$applyTo = (function (arglist__327907){
var mesg = cljs.core.seq(arglist__327907);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__327908){
var contents = cljs.core.seq(arglist__327908);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__327909_SHARP_){return p1__327909_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__327910_SHARP_,p2__327911_SHARP_){return goog.dom.insertChildAt(p1__327910_SHARP_,p2__327911_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__327913_SHARP_,p2__327912_SHARP_){return goog.dom.insertSiblingBefore(p2__327912_SHARP_,p1__327913_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__327915_SHARP_,p2__327914_SHARP_){return goog.dom.insertSiblingAfter(p2__327914_SHARP_,p1__327915_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__327917_SHARP_,p2__327916_SHARP_){return goog.dom.replaceNode(p2__327916_SHARP_,p1__327917_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__327922_327926 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__327923_327927 = null;var count__327924_327928 = 0;var i__327925_327929 = 0;while(true){
if((i__327925_327929 < count__327924_327928))
{var n_327930 = cljs.core._nth.call(null,chunk__327923_327927,i__327925_327929);goog.style.setStyle(n_327930,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__327931 = seq__327922_327926;
var G__327932 = chunk__327923_327927;
var G__327933 = count__327924_327928;
var G__327934 = (i__327925_327929 + 1);
seq__327922_327926 = G__327931;
chunk__327923_327927 = G__327932;
count__327924_327928 = G__327933;
i__327925_327929 = G__327934;
continue;
}
} else
{var temp__4092__auto___327935 = cljs.core.seq.call(null,seq__327922_327926);if(temp__4092__auto___327935)
{var seq__327922_327936__$1 = temp__4092__auto___327935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327922_327936__$1))
{var c__14549__auto___327937 = cljs.core.chunk_first.call(null,seq__327922_327936__$1);{
var G__327938 = cljs.core.chunk_rest.call(null,seq__327922_327936__$1);
var G__327939 = c__14549__auto___327937;
var G__327940 = cljs.core.count.call(null,c__14549__auto___327937);
var G__327941 = 0;
seq__327922_327926 = G__327938;
chunk__327923_327927 = G__327939;
count__327924_327928 = G__327940;
i__327925_327929 = G__327941;
continue;
}
} else
{var n_327942 = cljs.core.first.call(null,seq__327922_327936__$1);goog.style.setStyle(n_327942,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__327943 = cljs.core.next.call(null,seq__327922_327936__$1);
var G__327944 = null;
var G__327945 = 0;
var G__327946 = 0;
seq__327922_327926 = G__327943;
chunk__327923_327927 = G__327944;
count__327924_327928 = G__327945;
i__327925_327929 = G__327946;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__327947){
var content = cljs.core.first(arglist__327947);
arglist__327947 = cljs.core.next(arglist__327947);
var name = cljs.core.first(arglist__327947);
var value = cljs.core.rest(arglist__327947);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__327952_327956 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__327953_327957 = null;var count__327954_327958 = 0;var i__327955_327959 = 0;while(true){
if((i__327955_327959 < count__327954_327958))
{var n_327960 = cljs.core._nth.call(null,chunk__327953_327957,i__327955_327959);n_327960.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__327961 = seq__327952_327956;
var G__327962 = chunk__327953_327957;
var G__327963 = count__327954_327958;
var G__327964 = (i__327955_327959 + 1);
seq__327952_327956 = G__327961;
chunk__327953_327957 = G__327962;
count__327954_327958 = G__327963;
i__327955_327959 = G__327964;
continue;
}
} else
{var temp__4092__auto___327965 = cljs.core.seq.call(null,seq__327952_327956);if(temp__4092__auto___327965)
{var seq__327952_327966__$1 = temp__4092__auto___327965;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327952_327966__$1))
{var c__14549__auto___327967 = cljs.core.chunk_first.call(null,seq__327952_327966__$1);{
var G__327968 = cljs.core.chunk_rest.call(null,seq__327952_327966__$1);
var G__327969 = c__14549__auto___327967;
var G__327970 = cljs.core.count.call(null,c__14549__auto___327967);
var G__327971 = 0;
seq__327952_327956 = G__327968;
chunk__327953_327957 = G__327969;
count__327954_327958 = G__327970;
i__327955_327959 = G__327971;
continue;
}
} else
{var n_327972 = cljs.core.first.call(null,seq__327952_327966__$1);n_327972.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__327973 = cljs.core.next.call(null,seq__327952_327966__$1);
var G__327974 = null;
var G__327975 = 0;
var G__327976 = 0;
seq__327952_327956 = G__327973;
chunk__327953_327957 = G__327974;
count__327954_327958 = G__327975;
i__327955_327959 = G__327976;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__327977){
var content = cljs.core.first(arglist__327977);
arglist__327977 = cljs.core.next(arglist__327977);
var name = cljs.core.first(arglist__327977);
var value = cljs.core.rest(arglist__327977);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__327982_327986 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__327983_327987 = null;var count__327984_327988 = 0;var i__327985_327989 = 0;while(true){
if((i__327985_327989 < count__327984_327988))
{var n_327990 = cljs.core._nth.call(null,chunk__327983_327987,i__327985_327989);n_327990.removeAttribute(cljs.core.name.call(null,name));
{
var G__327991 = seq__327982_327986;
var G__327992 = chunk__327983_327987;
var G__327993 = count__327984_327988;
var G__327994 = (i__327985_327989 + 1);
seq__327982_327986 = G__327991;
chunk__327983_327987 = G__327992;
count__327984_327988 = G__327993;
i__327985_327989 = G__327994;
continue;
}
} else
{var temp__4092__auto___327995 = cljs.core.seq.call(null,seq__327982_327986);if(temp__4092__auto___327995)
{var seq__327982_327996__$1 = temp__4092__auto___327995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__327982_327996__$1))
{var c__14549__auto___327997 = cljs.core.chunk_first.call(null,seq__327982_327996__$1);{
var G__327998 = cljs.core.chunk_rest.call(null,seq__327982_327996__$1);
var G__327999 = c__14549__auto___327997;
var G__328000 = cljs.core.count.call(null,c__14549__auto___327997);
var G__328001 = 0;
seq__327982_327986 = G__327998;
chunk__327983_327987 = G__327999;
count__327984_327988 = G__328000;
i__327985_327989 = G__328001;
continue;
}
} else
{var n_328002 = cljs.core.first.call(null,seq__327982_327996__$1);n_328002.removeAttribute(cljs.core.name.call(null,name));
{
var G__328003 = cljs.core.next.call(null,seq__327982_327996__$1);
var G__328004 = null;
var G__328005 = 0;
var G__328006 = 0;
seq__327982_327986 = G__328003;
chunk__327983_327987 = G__328004;
count__327984_327988 = G__328005;
i__327985_327989 = G__328006;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__328008 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__328008,0,null);var v = cljs.core.nth.call(null,vec__328008,1,null);if(cljs.core.truth_((function (){var and__13813__auto__ = k;if(cljs.core.truth_(and__13813__auto__))
{return v;
} else
{return and__13813__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__328009_SHARP_){var attr = attrs__$1.item(p1__328009_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__328016_328022 = cljs.core.seq.call(null,styles);var chunk__328017_328023 = null;var count__328018_328024 = 0;var i__328019_328025 = 0;while(true){
if((i__328019_328025 < count__328018_328024))
{var vec__328020_328026 = cljs.core._nth.call(null,chunk__328017_328023,i__328019_328025);var name_328027 = cljs.core.nth.call(null,vec__328020_328026,0,null);var value_328028 = cljs.core.nth.call(null,vec__328020_328026,1,null);domina.set_style_BANG_.call(null,content,name_328027,value_328028);
{
var G__328029 = seq__328016_328022;
var G__328030 = chunk__328017_328023;
var G__328031 = count__328018_328024;
var G__328032 = (i__328019_328025 + 1);
seq__328016_328022 = G__328029;
chunk__328017_328023 = G__328030;
count__328018_328024 = G__328031;
i__328019_328025 = G__328032;
continue;
}
} else
{var temp__4092__auto___328033 = cljs.core.seq.call(null,seq__328016_328022);if(temp__4092__auto___328033)
{var seq__328016_328034__$1 = temp__4092__auto___328033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328016_328034__$1))
{var c__14549__auto___328035 = cljs.core.chunk_first.call(null,seq__328016_328034__$1);{
var G__328036 = cljs.core.chunk_rest.call(null,seq__328016_328034__$1);
var G__328037 = c__14549__auto___328035;
var G__328038 = cljs.core.count.call(null,c__14549__auto___328035);
var G__328039 = 0;
seq__328016_328022 = G__328036;
chunk__328017_328023 = G__328037;
count__328018_328024 = G__328038;
i__328019_328025 = G__328039;
continue;
}
} else
{var vec__328021_328040 = cljs.core.first.call(null,seq__328016_328034__$1);var name_328041 = cljs.core.nth.call(null,vec__328021_328040,0,null);var value_328042 = cljs.core.nth.call(null,vec__328021_328040,1,null);domina.set_style_BANG_.call(null,content,name_328041,value_328042);
{
var G__328043 = cljs.core.next.call(null,seq__328016_328034__$1);
var G__328044 = null;
var G__328045 = 0;
var G__328046 = 0;
seq__328016_328022 = G__328043;
chunk__328017_328023 = G__328044;
count__328018_328024 = G__328045;
i__328019_328025 = G__328046;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__328053_328059 = cljs.core.seq.call(null,attrs);var chunk__328054_328060 = null;var count__328055_328061 = 0;var i__328056_328062 = 0;while(true){
if((i__328056_328062 < count__328055_328061))
{var vec__328057_328063 = cljs.core._nth.call(null,chunk__328054_328060,i__328056_328062);var name_328064 = cljs.core.nth.call(null,vec__328057_328063,0,null);var value_328065 = cljs.core.nth.call(null,vec__328057_328063,1,null);domina.set_attr_BANG_.call(null,content,name_328064,value_328065);
{
var G__328066 = seq__328053_328059;
var G__328067 = chunk__328054_328060;
var G__328068 = count__328055_328061;
var G__328069 = (i__328056_328062 + 1);
seq__328053_328059 = G__328066;
chunk__328054_328060 = G__328067;
count__328055_328061 = G__328068;
i__328056_328062 = G__328069;
continue;
}
} else
{var temp__4092__auto___328070 = cljs.core.seq.call(null,seq__328053_328059);if(temp__4092__auto___328070)
{var seq__328053_328071__$1 = temp__4092__auto___328070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328053_328071__$1))
{var c__14549__auto___328072 = cljs.core.chunk_first.call(null,seq__328053_328071__$1);{
var G__328073 = cljs.core.chunk_rest.call(null,seq__328053_328071__$1);
var G__328074 = c__14549__auto___328072;
var G__328075 = cljs.core.count.call(null,c__14549__auto___328072);
var G__328076 = 0;
seq__328053_328059 = G__328073;
chunk__328054_328060 = G__328074;
count__328055_328061 = G__328075;
i__328056_328062 = G__328076;
continue;
}
} else
{var vec__328058_328077 = cljs.core.first.call(null,seq__328053_328071__$1);var name_328078 = cljs.core.nth.call(null,vec__328058_328077,0,null);var value_328079 = cljs.core.nth.call(null,vec__328058_328077,1,null);domina.set_attr_BANG_.call(null,content,name_328078,value_328079);
{
var G__328080 = cljs.core.next.call(null,seq__328053_328071__$1);
var G__328081 = null;
var G__328082 = 0;
var G__328083 = 0;
seq__328053_328059 = G__328080;
chunk__328054_328060 = G__328081;
count__328055_328061 = G__328082;
i__328056_328062 = G__328083;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__328088_328092 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328089_328093 = null;var count__328090_328094 = 0;var i__328091_328095 = 0;while(true){
if((i__328091_328095 < count__328090_328094))
{var node_328096 = cljs.core._nth.call(null,chunk__328089_328093,i__328091_328095);goog.dom.classes.add(node_328096,class$);
{
var G__328097 = seq__328088_328092;
var G__328098 = chunk__328089_328093;
var G__328099 = count__328090_328094;
var G__328100 = (i__328091_328095 + 1);
seq__328088_328092 = G__328097;
chunk__328089_328093 = G__328098;
count__328090_328094 = G__328099;
i__328091_328095 = G__328100;
continue;
}
} else
{var temp__4092__auto___328101 = cljs.core.seq.call(null,seq__328088_328092);if(temp__4092__auto___328101)
{var seq__328088_328102__$1 = temp__4092__auto___328101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328088_328102__$1))
{var c__14549__auto___328103 = cljs.core.chunk_first.call(null,seq__328088_328102__$1);{
var G__328104 = cljs.core.chunk_rest.call(null,seq__328088_328102__$1);
var G__328105 = c__14549__auto___328103;
var G__328106 = cljs.core.count.call(null,c__14549__auto___328103);
var G__328107 = 0;
seq__328088_328092 = G__328104;
chunk__328089_328093 = G__328105;
count__328090_328094 = G__328106;
i__328091_328095 = G__328107;
continue;
}
} else
{var node_328108 = cljs.core.first.call(null,seq__328088_328102__$1);goog.dom.classes.add(node_328108,class$);
{
var G__328109 = cljs.core.next.call(null,seq__328088_328102__$1);
var G__328110 = null;
var G__328111 = 0;
var G__328112 = 0;
seq__328088_328092 = G__328109;
chunk__328089_328093 = G__328110;
count__328090_328094 = G__328111;
i__328091_328095 = G__328112;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__328117_328121 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328118_328122 = null;var count__328119_328123 = 0;var i__328120_328124 = 0;while(true){
if((i__328120_328124 < count__328119_328123))
{var node_328125 = cljs.core._nth.call(null,chunk__328118_328122,i__328120_328124);goog.dom.classes.remove(node_328125,class$);
{
var G__328126 = seq__328117_328121;
var G__328127 = chunk__328118_328122;
var G__328128 = count__328119_328123;
var G__328129 = (i__328120_328124 + 1);
seq__328117_328121 = G__328126;
chunk__328118_328122 = G__328127;
count__328119_328123 = G__328128;
i__328120_328124 = G__328129;
continue;
}
} else
{var temp__4092__auto___328130 = cljs.core.seq.call(null,seq__328117_328121);if(temp__4092__auto___328130)
{var seq__328117_328131__$1 = temp__4092__auto___328130;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328117_328131__$1))
{var c__14549__auto___328132 = cljs.core.chunk_first.call(null,seq__328117_328131__$1);{
var G__328133 = cljs.core.chunk_rest.call(null,seq__328117_328131__$1);
var G__328134 = c__14549__auto___328132;
var G__328135 = cljs.core.count.call(null,c__14549__auto___328132);
var G__328136 = 0;
seq__328117_328121 = G__328133;
chunk__328118_328122 = G__328134;
count__328119_328123 = G__328135;
i__328120_328124 = G__328136;
continue;
}
} else
{var node_328137 = cljs.core.first.call(null,seq__328117_328131__$1);goog.dom.classes.remove(node_328137,class$);
{
var G__328138 = cljs.core.next.call(null,seq__328117_328131__$1);
var G__328139 = null;
var G__328140 = 0;
var G__328141 = 0;
seq__328117_328121 = G__328138;
chunk__328118_328122 = G__328139;
count__328119_328123 = G__328140;
i__328120_328124 = G__328141;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__328146_328150 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328147_328151 = null;var count__328148_328152 = 0;var i__328149_328153 = 0;while(true){
if((i__328149_328153 < count__328148_328152))
{var node_328154 = cljs.core._nth.call(null,chunk__328147_328151,i__328149_328153);goog.dom.classes.toggle(node_328154,class$);
{
var G__328155 = seq__328146_328150;
var G__328156 = chunk__328147_328151;
var G__328157 = count__328148_328152;
var G__328158 = (i__328149_328153 + 1);
seq__328146_328150 = G__328155;
chunk__328147_328151 = G__328156;
count__328148_328152 = G__328157;
i__328149_328153 = G__328158;
continue;
}
} else
{var temp__4092__auto___328159 = cljs.core.seq.call(null,seq__328146_328150);if(temp__4092__auto___328159)
{var seq__328146_328160__$1 = temp__4092__auto___328159;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328146_328160__$1))
{var c__14549__auto___328161 = cljs.core.chunk_first.call(null,seq__328146_328160__$1);{
var G__328162 = cljs.core.chunk_rest.call(null,seq__328146_328160__$1);
var G__328163 = c__14549__auto___328161;
var G__328164 = cljs.core.count.call(null,c__14549__auto___328161);
var G__328165 = 0;
seq__328146_328150 = G__328162;
chunk__328147_328151 = G__328163;
count__328148_328152 = G__328164;
i__328149_328153 = G__328165;
continue;
}
} else
{var node_328166 = cljs.core.first.call(null,seq__328146_328160__$1);goog.dom.classes.toggle(node_328166,class$);
{
var G__328167 = cljs.core.next.call(null,seq__328146_328160__$1);
var G__328168 = null;
var G__328169 = 0;
var G__328170 = 0;
seq__328146_328150 = G__328167;
chunk__328147_328151 = G__328168;
count__328148_328152 = G__328169;
i__328149_328153 = G__328170;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_328179__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__328175_328180 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328176_328181 = null;var count__328177_328182 = 0;var i__328178_328183 = 0;while(true){
if((i__328178_328183 < count__328177_328182))
{var node_328184 = cljs.core._nth.call(null,chunk__328176_328181,i__328178_328183);goog.dom.classes.set(node_328184,classes_328179__$1);
{
var G__328185 = seq__328175_328180;
var G__328186 = chunk__328176_328181;
var G__328187 = count__328177_328182;
var G__328188 = (i__328178_328183 + 1);
seq__328175_328180 = G__328185;
chunk__328176_328181 = G__328186;
count__328177_328182 = G__328187;
i__328178_328183 = G__328188;
continue;
}
} else
{var temp__4092__auto___328189 = cljs.core.seq.call(null,seq__328175_328180);if(temp__4092__auto___328189)
{var seq__328175_328190__$1 = temp__4092__auto___328189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328175_328190__$1))
{var c__14549__auto___328191 = cljs.core.chunk_first.call(null,seq__328175_328190__$1);{
var G__328192 = cljs.core.chunk_rest.call(null,seq__328175_328190__$1);
var G__328193 = c__14549__auto___328191;
var G__328194 = cljs.core.count.call(null,c__14549__auto___328191);
var G__328195 = 0;
seq__328175_328180 = G__328192;
chunk__328176_328181 = G__328193;
count__328177_328182 = G__328194;
i__328178_328183 = G__328195;
continue;
}
} else
{var node_328196 = cljs.core.first.call(null,seq__328175_328190__$1);goog.dom.classes.set(node_328196,classes_328179__$1);
{
var G__328197 = cljs.core.next.call(null,seq__328175_328190__$1);
var G__328198 = null;
var G__328199 = 0;
var G__328200 = 0;
seq__328175_328180 = G__328197;
chunk__328176_328181 = G__328198;
count__328177_328182 = G__328199;
i__328178_328183 = G__328200;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__328205_328209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328206_328210 = null;var count__328207_328211 = 0;var i__328208_328212 = 0;while(true){
if((i__328208_328212 < count__328207_328211))
{var node_328213 = cljs.core._nth.call(null,chunk__328206_328210,i__328208_328212);goog.dom.setTextContent(node_328213,value);
{
var G__328214 = seq__328205_328209;
var G__328215 = chunk__328206_328210;
var G__328216 = count__328207_328211;
var G__328217 = (i__328208_328212 + 1);
seq__328205_328209 = G__328214;
chunk__328206_328210 = G__328215;
count__328207_328211 = G__328216;
i__328208_328212 = G__328217;
continue;
}
} else
{var temp__4092__auto___328218 = cljs.core.seq.call(null,seq__328205_328209);if(temp__4092__auto___328218)
{var seq__328205_328219__$1 = temp__4092__auto___328218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328205_328219__$1))
{var c__14549__auto___328220 = cljs.core.chunk_first.call(null,seq__328205_328219__$1);{
var G__328221 = cljs.core.chunk_rest.call(null,seq__328205_328219__$1);
var G__328222 = c__14549__auto___328220;
var G__328223 = cljs.core.count.call(null,c__14549__auto___328220);
var G__328224 = 0;
seq__328205_328209 = G__328221;
chunk__328206_328210 = G__328222;
count__328207_328211 = G__328223;
i__328208_328212 = G__328224;
continue;
}
} else
{var node_328225 = cljs.core.first.call(null,seq__328205_328219__$1);goog.dom.setTextContent(node_328225,value);
{
var G__328226 = cljs.core.next.call(null,seq__328205_328219__$1);
var G__328227 = null;
var G__328228 = 0;
var G__328229 = 0;
seq__328205_328209 = G__328226;
chunk__328206_328210 = G__328227;
count__328207_328211 = G__328228;
i__328208_328212 = G__328229;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__328234_328238 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328235_328239 = null;var count__328236_328240 = 0;var i__328237_328241 = 0;while(true){
if((i__328237_328241 < count__328236_328240))
{var node_328242 = cljs.core._nth.call(null,chunk__328235_328239,i__328237_328241);goog.dom.forms.setValue(node_328242,value);
{
var G__328243 = seq__328234_328238;
var G__328244 = chunk__328235_328239;
var G__328245 = count__328236_328240;
var G__328246 = (i__328237_328241 + 1);
seq__328234_328238 = G__328243;
chunk__328235_328239 = G__328244;
count__328236_328240 = G__328245;
i__328237_328241 = G__328246;
continue;
}
} else
{var temp__4092__auto___328247 = cljs.core.seq.call(null,seq__328234_328238);if(temp__4092__auto___328247)
{var seq__328234_328248__$1 = temp__4092__auto___328247;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328234_328248__$1))
{var c__14549__auto___328249 = cljs.core.chunk_first.call(null,seq__328234_328248__$1);{
var G__328250 = cljs.core.chunk_rest.call(null,seq__328234_328248__$1);
var G__328251 = c__14549__auto___328249;
var G__328252 = cljs.core.count.call(null,c__14549__auto___328249);
var G__328253 = 0;
seq__328234_328238 = G__328250;
chunk__328235_328239 = G__328251;
count__328236_328240 = G__328252;
i__328237_328241 = G__328253;
continue;
}
} else
{var node_328254 = cljs.core.first.call(null,seq__328234_328248__$1);goog.dom.forms.setValue(node_328254,value);
{
var G__328255 = cljs.core.next.call(null,seq__328234_328248__$1);
var G__328256 = null;
var G__328257 = 0;
var G__328258 = 0;
seq__328234_328238 = G__328255;
chunk__328235_328239 = G__328256;
count__328236_328240 = G__328257;
i__328237_328241 = G__328258;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13813__auto__ = allows_inner_html_QMARK_;if(and__13813__auto__)
{var and__13813__auto____$1 = (function (){var or__13825__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13813__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
}
})()))
{var value_328269 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__328265_328270 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__328266_328271 = null;var count__328267_328272 = 0;var i__328268_328273 = 0;while(true){
if((i__328268_328273 < count__328267_328272))
{var node_328274 = cljs.core._nth.call(null,chunk__328266_328271,i__328268_328273);node_328274.innerHTML = value_328269;
{
var G__328275 = seq__328265_328270;
var G__328276 = chunk__328266_328271;
var G__328277 = count__328267_328272;
var G__328278 = (i__328268_328273 + 1);
seq__328265_328270 = G__328275;
chunk__328266_328271 = G__328276;
count__328267_328272 = G__328277;
i__328268_328273 = G__328278;
continue;
}
} else
{var temp__4092__auto___328279 = cljs.core.seq.call(null,seq__328265_328270);if(temp__4092__auto___328279)
{var seq__328265_328280__$1 = temp__4092__auto___328279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328265_328280__$1))
{var c__14549__auto___328281 = cljs.core.chunk_first.call(null,seq__328265_328280__$1);{
var G__328282 = cljs.core.chunk_rest.call(null,seq__328265_328280__$1);
var G__328283 = c__14549__auto___328281;
var G__328284 = cljs.core.count.call(null,c__14549__auto___328281);
var G__328285 = 0;
seq__328265_328270 = G__328282;
chunk__328266_328271 = G__328283;
count__328267_328272 = G__328284;
i__328268_328273 = G__328285;
continue;
}
} else
{var node_328286 = cljs.core.first.call(null,seq__328265_328280__$1);node_328286.innerHTML = value_328269;
{
var G__328287 = cljs.core.next.call(null,seq__328265_328280__$1);
var G__328288 = null;
var G__328289 = 0;
var G__328290 = 0;
seq__328265_328270 = G__328287;
chunk__328266_328271 = G__328288;
count__328267_328272 = G__328289;
i__328268_328273 = G__328290;
continue;
}
}
} else
{}
}
break;
}
}catch (e328264){if((e328264 instanceof Error))
{var e_328291 = e328264;domina.replace_children_BANG_.call(null,content,value_328269);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e328264;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13813__auto__ = bubble;if(cljs.core.truth_(and__13813__auto__))
{return (value == null);
} else
{return and__13813__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13825__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13825__auto__))
{return or__13825__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__328298_328302 = cljs.core.seq.call(null,children);var chunk__328299_328303 = null;var count__328300_328304 = 0;var i__328301_328305 = 0;while(true){
if((i__328301_328305 < count__328300_328304))
{var child_328306 = cljs.core._nth.call(null,chunk__328299_328303,i__328301_328305);frag.appendChild(child_328306);
{
var G__328307 = seq__328298_328302;
var G__328308 = chunk__328299_328303;
var G__328309 = count__328300_328304;
var G__328310 = (i__328301_328305 + 1);
seq__328298_328302 = G__328307;
chunk__328299_328303 = G__328308;
count__328300_328304 = G__328309;
i__328301_328305 = G__328310;
continue;
}
} else
{var temp__4092__auto___328311 = cljs.core.seq.call(null,seq__328298_328302);if(temp__4092__auto___328311)
{var seq__328298_328312__$1 = temp__4092__auto___328311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__328298_328312__$1))
{var c__14549__auto___328313 = cljs.core.chunk_first.call(null,seq__328298_328312__$1);{
var G__328314 = cljs.core.chunk_rest.call(null,seq__328298_328312__$1);
var G__328315 = c__14549__auto___328313;
var G__328316 = cljs.core.count.call(null,c__14549__auto___328313);
var G__328317 = 0;
seq__328298_328302 = G__328314;
chunk__328299_328303 = G__328315;
count__328300_328304 = G__328316;
i__328301_328305 = G__328317;
continue;
}
} else
{var child_328318 = cljs.core.first.call(null,seq__328298_328312__$1);frag.appendChild(child_328318);
{
var G__328319 = cljs.core.next.call(null,seq__328298_328312__$1);
var G__328320 = null;
var G__328321 = 0;
var G__328322 = 0;
seq__328298_328302 = G__328319;
chunk__328299_328303 = G__328320;
count__328300_328304 = G__328321;
i__328301_328305 = G__328322;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__328292_SHARP_,p2__328293_SHARP_){return f.call(null,p1__328292_SHARP_,p2__328293_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13813__auto__ = obj;if(cljs.core.truth_(and__13813__auto__))
{var and__13813__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13813__auto____$1)
{return obj.length;
} else
{return and__13813__auto____$1;
}
} else
{return and__13813__auto__;
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
{if((function (){var G__328324 = list_thing;if(G__328324)
{var bit__14451__auto__ = (G__328324.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__328324.cljs$core$ISeqable$))
{return true;
} else
{if((!G__328324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328324);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328324);
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
{if((function (){var G__328325 = content;if(G__328325)
{var bit__14451__auto__ = (G__328325.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__328325.cljs$core$ISeqable$))
{return true;
} else
{if((!G__328325.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328325);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328325);
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
{if((function (){var G__328326 = content;if(G__328326)
{var bit__14451__auto__ = (G__328326.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14451__auto__) || (G__328326.cljs$core$ISeqable$))
{return true;
} else
{if((!G__328326.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328326);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__328326);
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