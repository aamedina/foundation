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
var opt_wrapper_357838 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_357839 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_357840 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_357839,table_section_wrapper_357839,opt_wrapper_357838,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_357840,table_section_wrapper_357839,cell_wrapper_357840,opt_wrapper_357838,table_section_wrapper_357839,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_357839]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13967__auto__ = div.firstChild;if(cljs.core.truth_(and__13967__auto__))
{return div.firstChild.childNodes;
} else
{return and__13967__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__357845 = cljs.core.seq.call(null,tbody);var chunk__357846 = null;var count__357847 = 0;var i__357848 = 0;while(true){
if((i__357848 < count__357847))
{var child = cljs.core._nth.call(null,chunk__357846,i__357848);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__357849 = seq__357845;
var G__357850 = chunk__357846;
var G__357851 = count__357847;
var G__357852 = (i__357848 + 1);
seq__357845 = G__357849;
chunk__357846 = G__357850;
count__357847 = G__357851;
i__357848 = G__357852;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__357845);if(temp__4092__auto__)
{var seq__357845__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357845__$1))
{var c__14708__auto__ = cljs.core.chunk_first.call(null,seq__357845__$1);{
var G__357853 = cljs.core.chunk_rest.call(null,seq__357845__$1);
var G__357854 = c__14708__auto__;
var G__357855 = cljs.core.count.call(null,c__14708__auto__);
var G__357856 = 0;
seq__357845 = G__357853;
chunk__357846 = G__357854;
count__357847 = G__357855;
i__357848 = G__357856;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__357845__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__357857 = cljs.core.next.call(null,seq__357845__$1);
var G__357858 = null;
var G__357859 = 0;
var G__357860 = 0;
seq__357845 = G__357857;
chunk__357846 = G__357858;
count__357847 = G__357859;
i__357848 = G__357860;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__357862 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__357862,0,null);var start_wrap = cljs.core.nth.call(null,vec__357862,1,null);var end_wrap = cljs.core.nth.call(null,vec__357862,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__357863 = wrapper.lastChild;
var G__357864 = (level - 1);
wrapper = G__357863;
level = G__357864;
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
if(cljs.core.truth_((function (){var and__13967__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__13967__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__13967__auto__;
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
domina.DomContent = (function (){var obj357866 = {};return obj357866;
})();
domina.nodes = (function nodes(content){if((function (){var and__13967__auto__ = content;if(and__13967__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__13967__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__14587__auto__ = (((content == null))?null:content);return (function (){var or__13979__auto__ = (domina.nodes[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (domina.nodes["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__13967__auto__ = nodeseq;if(and__13967__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__13967__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__14587__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__13979__auto__ = (domina.single_node[goog.typeOf(x__14587__auto__)]);if(or__13979__auto__)
{return or__13979__auto__;
} else
{var or__13979__auto____$1 = (domina.single_node["_"]);if(or__13979__auto____$1)
{return or__13979__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__13967__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__13967__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__13967__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__357867){
var mesg = cljs.core.seq(arglist__357867);
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
log.cljs$lang$applyTo = (function (arglist__357868){
var mesg = cljs.core.seq(arglist__357868);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__357869){
var contents = cljs.core.seq(arglist__357869);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__357870_SHARP_){return p1__357870_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__357871_SHARP_,p2__357872_SHARP_){return goog.dom.insertChildAt(p1__357871_SHARP_,p2__357872_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__357874_SHARP_,p2__357873_SHARP_){return goog.dom.insertSiblingBefore(p2__357873_SHARP_,p1__357874_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__357876_SHARP_,p2__357875_SHARP_){return goog.dom.insertSiblingAfter(p2__357875_SHARP_,p1__357876_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__357878_SHARP_,p2__357877_SHARP_){return goog.dom.replaceNode(p2__357877_SHARP_,p1__357878_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__357883_357887 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__357884_357888 = null;var count__357885_357889 = 0;var i__357886_357890 = 0;while(true){
if((i__357886_357890 < count__357885_357889))
{var n_357891 = cljs.core._nth.call(null,chunk__357884_357888,i__357886_357890);goog.style.setStyle(n_357891,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__357892 = seq__357883_357887;
var G__357893 = chunk__357884_357888;
var G__357894 = count__357885_357889;
var G__357895 = (i__357886_357890 + 1);
seq__357883_357887 = G__357892;
chunk__357884_357888 = G__357893;
count__357885_357889 = G__357894;
i__357886_357890 = G__357895;
continue;
}
} else
{var temp__4092__auto___357896 = cljs.core.seq.call(null,seq__357883_357887);if(temp__4092__auto___357896)
{var seq__357883_357897__$1 = temp__4092__auto___357896;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357883_357897__$1))
{var c__14708__auto___357898 = cljs.core.chunk_first.call(null,seq__357883_357897__$1);{
var G__357899 = cljs.core.chunk_rest.call(null,seq__357883_357897__$1);
var G__357900 = c__14708__auto___357898;
var G__357901 = cljs.core.count.call(null,c__14708__auto___357898);
var G__357902 = 0;
seq__357883_357887 = G__357899;
chunk__357884_357888 = G__357900;
count__357885_357889 = G__357901;
i__357886_357890 = G__357902;
continue;
}
} else
{var n_357903 = cljs.core.first.call(null,seq__357883_357897__$1);goog.style.setStyle(n_357903,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__357904 = cljs.core.next.call(null,seq__357883_357897__$1);
var G__357905 = null;
var G__357906 = 0;
var G__357907 = 0;
seq__357883_357887 = G__357904;
chunk__357884_357888 = G__357905;
count__357885_357889 = G__357906;
i__357886_357890 = G__357907;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__357908){
var content = cljs.core.first(arglist__357908);
arglist__357908 = cljs.core.next(arglist__357908);
var name = cljs.core.first(arglist__357908);
var value = cljs.core.rest(arglist__357908);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__357913_357917 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__357914_357918 = null;var count__357915_357919 = 0;var i__357916_357920 = 0;while(true){
if((i__357916_357920 < count__357915_357919))
{var n_357921 = cljs.core._nth.call(null,chunk__357914_357918,i__357916_357920);n_357921.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__357922 = seq__357913_357917;
var G__357923 = chunk__357914_357918;
var G__357924 = count__357915_357919;
var G__357925 = (i__357916_357920 + 1);
seq__357913_357917 = G__357922;
chunk__357914_357918 = G__357923;
count__357915_357919 = G__357924;
i__357916_357920 = G__357925;
continue;
}
} else
{var temp__4092__auto___357926 = cljs.core.seq.call(null,seq__357913_357917);if(temp__4092__auto___357926)
{var seq__357913_357927__$1 = temp__4092__auto___357926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357913_357927__$1))
{var c__14708__auto___357928 = cljs.core.chunk_first.call(null,seq__357913_357927__$1);{
var G__357929 = cljs.core.chunk_rest.call(null,seq__357913_357927__$1);
var G__357930 = c__14708__auto___357928;
var G__357931 = cljs.core.count.call(null,c__14708__auto___357928);
var G__357932 = 0;
seq__357913_357917 = G__357929;
chunk__357914_357918 = G__357930;
count__357915_357919 = G__357931;
i__357916_357920 = G__357932;
continue;
}
} else
{var n_357933 = cljs.core.first.call(null,seq__357913_357927__$1);n_357933.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__357934 = cljs.core.next.call(null,seq__357913_357927__$1);
var G__357935 = null;
var G__357936 = 0;
var G__357937 = 0;
seq__357913_357917 = G__357934;
chunk__357914_357918 = G__357935;
count__357915_357919 = G__357936;
i__357916_357920 = G__357937;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__357938){
var content = cljs.core.first(arglist__357938);
arglist__357938 = cljs.core.next(arglist__357938);
var name = cljs.core.first(arglist__357938);
var value = cljs.core.rest(arglist__357938);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__357943_357947 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__357944_357948 = null;var count__357945_357949 = 0;var i__357946_357950 = 0;while(true){
if((i__357946_357950 < count__357945_357949))
{var n_357951 = cljs.core._nth.call(null,chunk__357944_357948,i__357946_357950);n_357951.removeAttribute(cljs.core.name.call(null,name));
{
var G__357952 = seq__357943_357947;
var G__357953 = chunk__357944_357948;
var G__357954 = count__357945_357949;
var G__357955 = (i__357946_357950 + 1);
seq__357943_357947 = G__357952;
chunk__357944_357948 = G__357953;
count__357945_357949 = G__357954;
i__357946_357950 = G__357955;
continue;
}
} else
{var temp__4092__auto___357956 = cljs.core.seq.call(null,seq__357943_357947);if(temp__4092__auto___357956)
{var seq__357943_357957__$1 = temp__4092__auto___357956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357943_357957__$1))
{var c__14708__auto___357958 = cljs.core.chunk_first.call(null,seq__357943_357957__$1);{
var G__357959 = cljs.core.chunk_rest.call(null,seq__357943_357957__$1);
var G__357960 = c__14708__auto___357958;
var G__357961 = cljs.core.count.call(null,c__14708__auto___357958);
var G__357962 = 0;
seq__357943_357947 = G__357959;
chunk__357944_357948 = G__357960;
count__357945_357949 = G__357961;
i__357946_357950 = G__357962;
continue;
}
} else
{var n_357963 = cljs.core.first.call(null,seq__357943_357957__$1);n_357963.removeAttribute(cljs.core.name.call(null,name));
{
var G__357964 = cljs.core.next.call(null,seq__357943_357957__$1);
var G__357965 = null;
var G__357966 = 0;
var G__357967 = 0;
seq__357943_357947 = G__357964;
chunk__357944_357948 = G__357965;
count__357945_357949 = G__357966;
i__357946_357950 = G__357967;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__357969 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__357969,0,null);var v = cljs.core.nth.call(null,vec__357969,1,null);if(cljs.core.truth_((function (){var and__13967__auto__ = k;if(cljs.core.truth_(and__13967__auto__))
{return v;
} else
{return and__13967__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__357970_SHARP_){var attr = attrs__$1.item(p1__357970_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__357977_357983 = cljs.core.seq.call(null,styles);var chunk__357978_357984 = null;var count__357979_357985 = 0;var i__357980_357986 = 0;while(true){
if((i__357980_357986 < count__357979_357985))
{var vec__357981_357987 = cljs.core._nth.call(null,chunk__357978_357984,i__357980_357986);var name_357988 = cljs.core.nth.call(null,vec__357981_357987,0,null);var value_357989 = cljs.core.nth.call(null,vec__357981_357987,1,null);domina.set_style_BANG_.call(null,content,name_357988,value_357989);
{
var G__357990 = seq__357977_357983;
var G__357991 = chunk__357978_357984;
var G__357992 = count__357979_357985;
var G__357993 = (i__357980_357986 + 1);
seq__357977_357983 = G__357990;
chunk__357978_357984 = G__357991;
count__357979_357985 = G__357992;
i__357980_357986 = G__357993;
continue;
}
} else
{var temp__4092__auto___357994 = cljs.core.seq.call(null,seq__357977_357983);if(temp__4092__auto___357994)
{var seq__357977_357995__$1 = temp__4092__auto___357994;if(cljs.core.chunked_seq_QMARK_.call(null,seq__357977_357995__$1))
{var c__14708__auto___357996 = cljs.core.chunk_first.call(null,seq__357977_357995__$1);{
var G__357997 = cljs.core.chunk_rest.call(null,seq__357977_357995__$1);
var G__357998 = c__14708__auto___357996;
var G__357999 = cljs.core.count.call(null,c__14708__auto___357996);
var G__358000 = 0;
seq__357977_357983 = G__357997;
chunk__357978_357984 = G__357998;
count__357979_357985 = G__357999;
i__357980_357986 = G__358000;
continue;
}
} else
{var vec__357982_358001 = cljs.core.first.call(null,seq__357977_357995__$1);var name_358002 = cljs.core.nth.call(null,vec__357982_358001,0,null);var value_358003 = cljs.core.nth.call(null,vec__357982_358001,1,null);domina.set_style_BANG_.call(null,content,name_358002,value_358003);
{
var G__358004 = cljs.core.next.call(null,seq__357977_357995__$1);
var G__358005 = null;
var G__358006 = 0;
var G__358007 = 0;
seq__357977_357983 = G__358004;
chunk__357978_357984 = G__358005;
count__357979_357985 = G__358006;
i__357980_357986 = G__358007;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__358014_358020 = cljs.core.seq.call(null,attrs);var chunk__358015_358021 = null;var count__358016_358022 = 0;var i__358017_358023 = 0;while(true){
if((i__358017_358023 < count__358016_358022))
{var vec__358018_358024 = cljs.core._nth.call(null,chunk__358015_358021,i__358017_358023);var name_358025 = cljs.core.nth.call(null,vec__358018_358024,0,null);var value_358026 = cljs.core.nth.call(null,vec__358018_358024,1,null);domina.set_attr_BANG_.call(null,content,name_358025,value_358026);
{
var G__358027 = seq__358014_358020;
var G__358028 = chunk__358015_358021;
var G__358029 = count__358016_358022;
var G__358030 = (i__358017_358023 + 1);
seq__358014_358020 = G__358027;
chunk__358015_358021 = G__358028;
count__358016_358022 = G__358029;
i__358017_358023 = G__358030;
continue;
}
} else
{var temp__4092__auto___358031 = cljs.core.seq.call(null,seq__358014_358020);if(temp__4092__auto___358031)
{var seq__358014_358032__$1 = temp__4092__auto___358031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358014_358032__$1))
{var c__14708__auto___358033 = cljs.core.chunk_first.call(null,seq__358014_358032__$1);{
var G__358034 = cljs.core.chunk_rest.call(null,seq__358014_358032__$1);
var G__358035 = c__14708__auto___358033;
var G__358036 = cljs.core.count.call(null,c__14708__auto___358033);
var G__358037 = 0;
seq__358014_358020 = G__358034;
chunk__358015_358021 = G__358035;
count__358016_358022 = G__358036;
i__358017_358023 = G__358037;
continue;
}
} else
{var vec__358019_358038 = cljs.core.first.call(null,seq__358014_358032__$1);var name_358039 = cljs.core.nth.call(null,vec__358019_358038,0,null);var value_358040 = cljs.core.nth.call(null,vec__358019_358038,1,null);domina.set_attr_BANG_.call(null,content,name_358039,value_358040);
{
var G__358041 = cljs.core.next.call(null,seq__358014_358032__$1);
var G__358042 = null;
var G__358043 = 0;
var G__358044 = 0;
seq__358014_358020 = G__358041;
chunk__358015_358021 = G__358042;
count__358016_358022 = G__358043;
i__358017_358023 = G__358044;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__358049_358053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358050_358054 = null;var count__358051_358055 = 0;var i__358052_358056 = 0;while(true){
if((i__358052_358056 < count__358051_358055))
{var node_358057 = cljs.core._nth.call(null,chunk__358050_358054,i__358052_358056);goog.dom.classes.add(node_358057,class$);
{
var G__358058 = seq__358049_358053;
var G__358059 = chunk__358050_358054;
var G__358060 = count__358051_358055;
var G__358061 = (i__358052_358056 + 1);
seq__358049_358053 = G__358058;
chunk__358050_358054 = G__358059;
count__358051_358055 = G__358060;
i__358052_358056 = G__358061;
continue;
}
} else
{var temp__4092__auto___358062 = cljs.core.seq.call(null,seq__358049_358053);if(temp__4092__auto___358062)
{var seq__358049_358063__$1 = temp__4092__auto___358062;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358049_358063__$1))
{var c__14708__auto___358064 = cljs.core.chunk_first.call(null,seq__358049_358063__$1);{
var G__358065 = cljs.core.chunk_rest.call(null,seq__358049_358063__$1);
var G__358066 = c__14708__auto___358064;
var G__358067 = cljs.core.count.call(null,c__14708__auto___358064);
var G__358068 = 0;
seq__358049_358053 = G__358065;
chunk__358050_358054 = G__358066;
count__358051_358055 = G__358067;
i__358052_358056 = G__358068;
continue;
}
} else
{var node_358069 = cljs.core.first.call(null,seq__358049_358063__$1);goog.dom.classes.add(node_358069,class$);
{
var G__358070 = cljs.core.next.call(null,seq__358049_358063__$1);
var G__358071 = null;
var G__358072 = 0;
var G__358073 = 0;
seq__358049_358053 = G__358070;
chunk__358050_358054 = G__358071;
count__358051_358055 = G__358072;
i__358052_358056 = G__358073;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__358078_358082 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358079_358083 = null;var count__358080_358084 = 0;var i__358081_358085 = 0;while(true){
if((i__358081_358085 < count__358080_358084))
{var node_358086 = cljs.core._nth.call(null,chunk__358079_358083,i__358081_358085);goog.dom.classes.remove(node_358086,class$);
{
var G__358087 = seq__358078_358082;
var G__358088 = chunk__358079_358083;
var G__358089 = count__358080_358084;
var G__358090 = (i__358081_358085 + 1);
seq__358078_358082 = G__358087;
chunk__358079_358083 = G__358088;
count__358080_358084 = G__358089;
i__358081_358085 = G__358090;
continue;
}
} else
{var temp__4092__auto___358091 = cljs.core.seq.call(null,seq__358078_358082);if(temp__4092__auto___358091)
{var seq__358078_358092__$1 = temp__4092__auto___358091;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358078_358092__$1))
{var c__14708__auto___358093 = cljs.core.chunk_first.call(null,seq__358078_358092__$1);{
var G__358094 = cljs.core.chunk_rest.call(null,seq__358078_358092__$1);
var G__358095 = c__14708__auto___358093;
var G__358096 = cljs.core.count.call(null,c__14708__auto___358093);
var G__358097 = 0;
seq__358078_358082 = G__358094;
chunk__358079_358083 = G__358095;
count__358080_358084 = G__358096;
i__358081_358085 = G__358097;
continue;
}
} else
{var node_358098 = cljs.core.first.call(null,seq__358078_358092__$1);goog.dom.classes.remove(node_358098,class$);
{
var G__358099 = cljs.core.next.call(null,seq__358078_358092__$1);
var G__358100 = null;
var G__358101 = 0;
var G__358102 = 0;
seq__358078_358082 = G__358099;
chunk__358079_358083 = G__358100;
count__358080_358084 = G__358101;
i__358081_358085 = G__358102;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__358107_358111 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358108_358112 = null;var count__358109_358113 = 0;var i__358110_358114 = 0;while(true){
if((i__358110_358114 < count__358109_358113))
{var node_358115 = cljs.core._nth.call(null,chunk__358108_358112,i__358110_358114);goog.dom.classes.toggle(node_358115,class$);
{
var G__358116 = seq__358107_358111;
var G__358117 = chunk__358108_358112;
var G__358118 = count__358109_358113;
var G__358119 = (i__358110_358114 + 1);
seq__358107_358111 = G__358116;
chunk__358108_358112 = G__358117;
count__358109_358113 = G__358118;
i__358110_358114 = G__358119;
continue;
}
} else
{var temp__4092__auto___358120 = cljs.core.seq.call(null,seq__358107_358111);if(temp__4092__auto___358120)
{var seq__358107_358121__$1 = temp__4092__auto___358120;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358107_358121__$1))
{var c__14708__auto___358122 = cljs.core.chunk_first.call(null,seq__358107_358121__$1);{
var G__358123 = cljs.core.chunk_rest.call(null,seq__358107_358121__$1);
var G__358124 = c__14708__auto___358122;
var G__358125 = cljs.core.count.call(null,c__14708__auto___358122);
var G__358126 = 0;
seq__358107_358111 = G__358123;
chunk__358108_358112 = G__358124;
count__358109_358113 = G__358125;
i__358110_358114 = G__358126;
continue;
}
} else
{var node_358127 = cljs.core.first.call(null,seq__358107_358121__$1);goog.dom.classes.toggle(node_358127,class$);
{
var G__358128 = cljs.core.next.call(null,seq__358107_358121__$1);
var G__358129 = null;
var G__358130 = 0;
var G__358131 = 0;
seq__358107_358111 = G__358128;
chunk__358108_358112 = G__358129;
count__358109_358113 = G__358130;
i__358110_358114 = G__358131;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_358140__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__358136_358141 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358137_358142 = null;var count__358138_358143 = 0;var i__358139_358144 = 0;while(true){
if((i__358139_358144 < count__358138_358143))
{var node_358145 = cljs.core._nth.call(null,chunk__358137_358142,i__358139_358144);goog.dom.classes.set(node_358145,classes_358140__$1);
{
var G__358146 = seq__358136_358141;
var G__358147 = chunk__358137_358142;
var G__358148 = count__358138_358143;
var G__358149 = (i__358139_358144 + 1);
seq__358136_358141 = G__358146;
chunk__358137_358142 = G__358147;
count__358138_358143 = G__358148;
i__358139_358144 = G__358149;
continue;
}
} else
{var temp__4092__auto___358150 = cljs.core.seq.call(null,seq__358136_358141);if(temp__4092__auto___358150)
{var seq__358136_358151__$1 = temp__4092__auto___358150;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358136_358151__$1))
{var c__14708__auto___358152 = cljs.core.chunk_first.call(null,seq__358136_358151__$1);{
var G__358153 = cljs.core.chunk_rest.call(null,seq__358136_358151__$1);
var G__358154 = c__14708__auto___358152;
var G__358155 = cljs.core.count.call(null,c__14708__auto___358152);
var G__358156 = 0;
seq__358136_358141 = G__358153;
chunk__358137_358142 = G__358154;
count__358138_358143 = G__358155;
i__358139_358144 = G__358156;
continue;
}
} else
{var node_358157 = cljs.core.first.call(null,seq__358136_358151__$1);goog.dom.classes.set(node_358157,classes_358140__$1);
{
var G__358158 = cljs.core.next.call(null,seq__358136_358151__$1);
var G__358159 = null;
var G__358160 = 0;
var G__358161 = 0;
seq__358136_358141 = G__358158;
chunk__358137_358142 = G__358159;
count__358138_358143 = G__358160;
i__358139_358144 = G__358161;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__358166_358170 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358167_358171 = null;var count__358168_358172 = 0;var i__358169_358173 = 0;while(true){
if((i__358169_358173 < count__358168_358172))
{var node_358174 = cljs.core._nth.call(null,chunk__358167_358171,i__358169_358173);goog.dom.setTextContent(node_358174,value);
{
var G__358175 = seq__358166_358170;
var G__358176 = chunk__358167_358171;
var G__358177 = count__358168_358172;
var G__358178 = (i__358169_358173 + 1);
seq__358166_358170 = G__358175;
chunk__358167_358171 = G__358176;
count__358168_358172 = G__358177;
i__358169_358173 = G__358178;
continue;
}
} else
{var temp__4092__auto___358179 = cljs.core.seq.call(null,seq__358166_358170);if(temp__4092__auto___358179)
{var seq__358166_358180__$1 = temp__4092__auto___358179;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358166_358180__$1))
{var c__14708__auto___358181 = cljs.core.chunk_first.call(null,seq__358166_358180__$1);{
var G__358182 = cljs.core.chunk_rest.call(null,seq__358166_358180__$1);
var G__358183 = c__14708__auto___358181;
var G__358184 = cljs.core.count.call(null,c__14708__auto___358181);
var G__358185 = 0;
seq__358166_358170 = G__358182;
chunk__358167_358171 = G__358183;
count__358168_358172 = G__358184;
i__358169_358173 = G__358185;
continue;
}
} else
{var node_358186 = cljs.core.first.call(null,seq__358166_358180__$1);goog.dom.setTextContent(node_358186,value);
{
var G__358187 = cljs.core.next.call(null,seq__358166_358180__$1);
var G__358188 = null;
var G__358189 = 0;
var G__358190 = 0;
seq__358166_358170 = G__358187;
chunk__358167_358171 = G__358188;
count__358168_358172 = G__358189;
i__358169_358173 = G__358190;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__358195_358199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358196_358200 = null;var count__358197_358201 = 0;var i__358198_358202 = 0;while(true){
if((i__358198_358202 < count__358197_358201))
{var node_358203 = cljs.core._nth.call(null,chunk__358196_358200,i__358198_358202);goog.dom.forms.setValue(node_358203,value);
{
var G__358204 = seq__358195_358199;
var G__358205 = chunk__358196_358200;
var G__358206 = count__358197_358201;
var G__358207 = (i__358198_358202 + 1);
seq__358195_358199 = G__358204;
chunk__358196_358200 = G__358205;
count__358197_358201 = G__358206;
i__358198_358202 = G__358207;
continue;
}
} else
{var temp__4092__auto___358208 = cljs.core.seq.call(null,seq__358195_358199);if(temp__4092__auto___358208)
{var seq__358195_358209__$1 = temp__4092__auto___358208;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358195_358209__$1))
{var c__14708__auto___358210 = cljs.core.chunk_first.call(null,seq__358195_358209__$1);{
var G__358211 = cljs.core.chunk_rest.call(null,seq__358195_358209__$1);
var G__358212 = c__14708__auto___358210;
var G__358213 = cljs.core.count.call(null,c__14708__auto___358210);
var G__358214 = 0;
seq__358195_358199 = G__358211;
chunk__358196_358200 = G__358212;
count__358197_358201 = G__358213;
i__358198_358202 = G__358214;
continue;
}
} else
{var node_358215 = cljs.core.first.call(null,seq__358195_358209__$1);goog.dom.forms.setValue(node_358215,value);
{
var G__358216 = cljs.core.next.call(null,seq__358195_358209__$1);
var G__358217 = null;
var G__358218 = 0;
var G__358219 = 0;
seq__358195_358199 = G__358216;
chunk__358196_358200 = G__358217;
count__358197_358201 = G__358218;
i__358198_358202 = G__358219;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__13967__auto__ = allows_inner_html_QMARK_;if(and__13967__auto__)
{var and__13967__auto____$1 = (function (){var or__13979__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__13967__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__13967__auto____$1;
}
} else
{return and__13967__auto__;
}
})()))
{var value_358230 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__358226_358231 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__358227_358232 = null;var count__358228_358233 = 0;var i__358229_358234 = 0;while(true){
if((i__358229_358234 < count__358228_358233))
{var node_358235 = cljs.core._nth.call(null,chunk__358227_358232,i__358229_358234);node_358235.innerHTML = value_358230;
{
var G__358236 = seq__358226_358231;
var G__358237 = chunk__358227_358232;
var G__358238 = count__358228_358233;
var G__358239 = (i__358229_358234 + 1);
seq__358226_358231 = G__358236;
chunk__358227_358232 = G__358237;
count__358228_358233 = G__358238;
i__358229_358234 = G__358239;
continue;
}
} else
{var temp__4092__auto___358240 = cljs.core.seq.call(null,seq__358226_358231);if(temp__4092__auto___358240)
{var seq__358226_358241__$1 = temp__4092__auto___358240;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358226_358241__$1))
{var c__14708__auto___358242 = cljs.core.chunk_first.call(null,seq__358226_358241__$1);{
var G__358243 = cljs.core.chunk_rest.call(null,seq__358226_358241__$1);
var G__358244 = c__14708__auto___358242;
var G__358245 = cljs.core.count.call(null,c__14708__auto___358242);
var G__358246 = 0;
seq__358226_358231 = G__358243;
chunk__358227_358232 = G__358244;
count__358228_358233 = G__358245;
i__358229_358234 = G__358246;
continue;
}
} else
{var node_358247 = cljs.core.first.call(null,seq__358226_358241__$1);node_358247.innerHTML = value_358230;
{
var G__358248 = cljs.core.next.call(null,seq__358226_358241__$1);
var G__358249 = null;
var G__358250 = 0;
var G__358251 = 0;
seq__358226_358231 = G__358248;
chunk__358227_358232 = G__358249;
count__358228_358233 = G__358250;
i__358229_358234 = G__358251;
continue;
}
}
} else
{}
}
break;
}
}catch (e358225){if((e358225 instanceof Error))
{var e_358252 = e358225;domina.replace_children_BANG_.call(null,content,value_358230);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e358225;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__13967__auto__ = bubble;if(cljs.core.truth_(and__13967__auto__))
{return (value == null);
} else
{return and__13967__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__13979__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__13979__auto__))
{return or__13979__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__358259_358263 = cljs.core.seq.call(null,children);var chunk__358260_358264 = null;var count__358261_358265 = 0;var i__358262_358266 = 0;while(true){
if((i__358262_358266 < count__358261_358265))
{var child_358267 = cljs.core._nth.call(null,chunk__358260_358264,i__358262_358266);frag.appendChild(child_358267);
{
var G__358268 = seq__358259_358263;
var G__358269 = chunk__358260_358264;
var G__358270 = count__358261_358265;
var G__358271 = (i__358262_358266 + 1);
seq__358259_358263 = G__358268;
chunk__358260_358264 = G__358269;
count__358261_358265 = G__358270;
i__358262_358266 = G__358271;
continue;
}
} else
{var temp__4092__auto___358272 = cljs.core.seq.call(null,seq__358259_358263);if(temp__4092__auto___358272)
{var seq__358259_358273__$1 = temp__4092__auto___358272;if(cljs.core.chunked_seq_QMARK_.call(null,seq__358259_358273__$1))
{var c__14708__auto___358274 = cljs.core.chunk_first.call(null,seq__358259_358273__$1);{
var G__358275 = cljs.core.chunk_rest.call(null,seq__358259_358273__$1);
var G__358276 = c__14708__auto___358274;
var G__358277 = cljs.core.count.call(null,c__14708__auto___358274);
var G__358278 = 0;
seq__358259_358263 = G__358275;
chunk__358260_358264 = G__358276;
count__358261_358265 = G__358277;
i__358262_358266 = G__358278;
continue;
}
} else
{var child_358279 = cljs.core.first.call(null,seq__358259_358273__$1);frag.appendChild(child_358279);
{
var G__358280 = cljs.core.next.call(null,seq__358259_358273__$1);
var G__358281 = null;
var G__358282 = 0;
var G__358283 = 0;
seq__358259_358263 = G__358280;
chunk__358260_358264 = G__358281;
count__358261_358265 = G__358282;
i__358262_358266 = G__358283;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__358253_SHARP_,p2__358254_SHARP_){return f.call(null,p1__358253_SHARP_,p2__358254_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__13967__auto__ = obj;if(cljs.core.truth_(and__13967__auto__))
{var and__13967__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__13967__auto____$1)
{return obj.length;
} else
{return and__13967__auto____$1;
}
} else
{return and__13967__auto__;
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
{if((function (){var G__358285 = list_thing;if(G__358285)
{var bit__14610__auto__ = (G__358285.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__358285.cljs$core$ISeqable$))
{return true;
} else
{if((!G__358285.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358285);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358285);
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
{if((function (){var G__358286 = content;if(G__358286)
{var bit__14610__auto__ = (G__358286.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__358286.cljs$core$ISeqable$))
{return true;
} else
{if((!G__358286.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358286);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358286);
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
{if((function (){var G__358287 = content;if(G__358287)
{var bit__14610__auto__ = (G__358287.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14610__auto__) || (G__358287.cljs$core$ISeqable$))
{return true;
} else
{if((!G__358287.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358287);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__358287);
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