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
var opt_wrapper_34943 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_34944 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_34945 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_34944,table_section_wrapper_34944,opt_wrapper_34943,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_34945,table_section_wrapper_34944,cell_wrapper_34945,opt_wrapper_34943,table_section_wrapper_34944,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_34944]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__13811__auto__ = div.firstChild;if(cljs.core.truth_(and__13811__auto__))
{return div.firstChild.childNodes;
} else
{return and__13811__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__34950 = cljs.core.seq.call(null,tbody);var chunk__34951 = null;var count__34952 = 0;var i__34953 = 0;while(true){
if((i__34953 < count__34952))
{var child = cljs.core._nth.call(null,chunk__34951,i__34953);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34954 = seq__34950;
var G__34955 = chunk__34951;
var G__34956 = count__34952;
var G__34957 = (i__34953 + 1);
seq__34950 = G__34954;
chunk__34951 = G__34955;
count__34952 = G__34956;
i__34953 = G__34957;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34950);if(temp__4092__auto__)
{var seq__34950__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34950__$1))
{var c__14547__auto__ = cljs.core.chunk_first.call(null,seq__34950__$1);{
var G__34958 = cljs.core.chunk_rest.call(null,seq__34950__$1);
var G__34959 = c__14547__auto__;
var G__34960 = cljs.core.count.call(null,c__14547__auto__);
var G__34961 = 0;
seq__34950 = G__34958;
chunk__34951 = G__34959;
count__34952 = G__34960;
i__34953 = G__34961;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__34950__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__34962 = cljs.core.next.call(null,seq__34950__$1);
var G__34963 = null;
var G__34964 = 0;
var G__34965 = 0;
seq__34950 = G__34962;
chunk__34951 = G__34963;
count__34952 = G__34964;
i__34953 = G__34965;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__34967 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__34967,0,null);var start_wrap = cljs.core.nth.call(null,vec__34967,1,null);var end_wrap = cljs.core.nth.call(null,vec__34967,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__34968 = wrapper.lastChild;
var G__34969 = (level - 1);
wrapper = G__34968;
level = G__34969;
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
domina.DomContent = (function (){var obj34971 = {};return obj34971;
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
log_debug.cljs$lang$applyTo = (function (arglist__34972){
var mesg = cljs.core.seq(arglist__34972);
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
log.cljs$lang$applyTo = (function (arglist__34973){
var mesg = cljs.core.seq(arglist__34973);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__34974){
var contents = cljs.core.seq(arglist__34974);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__34975_SHARP_){return p1__34975_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__34976_SHARP_,p2__34977_SHARP_){return goog.dom.insertChildAt(p1__34976_SHARP_,p2__34977_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34979_SHARP_,p2__34978_SHARP_){return goog.dom.insertSiblingBefore(p2__34978_SHARP_,p1__34979_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__34981_SHARP_,p2__34980_SHARP_){return goog.dom.insertSiblingAfter(p2__34980_SHARP_,p1__34981_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__34983_SHARP_,p2__34982_SHARP_){return goog.dom.replaceNode(p2__34982_SHARP_,p1__34983_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__34988_34992 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34989_34993 = null;var count__34990_34994 = 0;var i__34991_34995 = 0;while(true){
if((i__34991_34995 < count__34990_34994))
{var n_34996 = cljs.core._nth.call(null,chunk__34989_34993,i__34991_34995);goog.style.setStyle(n_34996,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__34997 = seq__34988_34992;
var G__34998 = chunk__34989_34993;
var G__34999 = count__34990_34994;
var G__35000 = (i__34991_34995 + 1);
seq__34988_34992 = G__34997;
chunk__34989_34993 = G__34998;
count__34990_34994 = G__34999;
i__34991_34995 = G__35000;
continue;
}
} else
{var temp__4092__auto___35001 = cljs.core.seq.call(null,seq__34988_34992);if(temp__4092__auto___35001)
{var seq__34988_35002__$1 = temp__4092__auto___35001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34988_35002__$1))
{var c__14547__auto___35003 = cljs.core.chunk_first.call(null,seq__34988_35002__$1);{
var G__35004 = cljs.core.chunk_rest.call(null,seq__34988_35002__$1);
var G__35005 = c__14547__auto___35003;
var G__35006 = cljs.core.count.call(null,c__14547__auto___35003);
var G__35007 = 0;
seq__34988_34992 = G__35004;
chunk__34989_34993 = G__35005;
count__34990_34994 = G__35006;
i__34991_34995 = G__35007;
continue;
}
} else
{var n_35008 = cljs.core.first.call(null,seq__34988_35002__$1);goog.style.setStyle(n_35008,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35009 = cljs.core.next.call(null,seq__34988_35002__$1);
var G__35010 = null;
var G__35011 = 0;
var G__35012 = 0;
seq__34988_34992 = G__35009;
chunk__34989_34993 = G__35010;
count__34990_34994 = G__35011;
i__34991_34995 = G__35012;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__35013){
var content = cljs.core.first(arglist__35013);
arglist__35013 = cljs.core.next(arglist__35013);
var name = cljs.core.first(arglist__35013);
var value = cljs.core.rest(arglist__35013);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__35018_35022 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35019_35023 = null;var count__35020_35024 = 0;var i__35021_35025 = 0;while(true){
if((i__35021_35025 < count__35020_35024))
{var n_35026 = cljs.core._nth.call(null,chunk__35019_35023,i__35021_35025);n_35026.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35027 = seq__35018_35022;
var G__35028 = chunk__35019_35023;
var G__35029 = count__35020_35024;
var G__35030 = (i__35021_35025 + 1);
seq__35018_35022 = G__35027;
chunk__35019_35023 = G__35028;
count__35020_35024 = G__35029;
i__35021_35025 = G__35030;
continue;
}
} else
{var temp__4092__auto___35031 = cljs.core.seq.call(null,seq__35018_35022);if(temp__4092__auto___35031)
{var seq__35018_35032__$1 = temp__4092__auto___35031;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35018_35032__$1))
{var c__14547__auto___35033 = cljs.core.chunk_first.call(null,seq__35018_35032__$1);{
var G__35034 = cljs.core.chunk_rest.call(null,seq__35018_35032__$1);
var G__35035 = c__14547__auto___35033;
var G__35036 = cljs.core.count.call(null,c__14547__auto___35033);
var G__35037 = 0;
seq__35018_35022 = G__35034;
chunk__35019_35023 = G__35035;
count__35020_35024 = G__35036;
i__35021_35025 = G__35037;
continue;
}
} else
{var n_35038 = cljs.core.first.call(null,seq__35018_35032__$1);n_35038.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__35039 = cljs.core.next.call(null,seq__35018_35032__$1);
var G__35040 = null;
var G__35041 = 0;
var G__35042 = 0;
seq__35018_35022 = G__35039;
chunk__35019_35023 = G__35040;
count__35020_35024 = G__35041;
i__35021_35025 = G__35042;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__35043){
var content = cljs.core.first(arglist__35043);
arglist__35043 = cljs.core.next(arglist__35043);
var name = cljs.core.first(arglist__35043);
var value = cljs.core.rest(arglist__35043);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__35048_35052 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35049_35053 = null;var count__35050_35054 = 0;var i__35051_35055 = 0;while(true){
if((i__35051_35055 < count__35050_35054))
{var n_35056 = cljs.core._nth.call(null,chunk__35049_35053,i__35051_35055);n_35056.removeAttribute(cljs.core.name.call(null,name));
{
var G__35057 = seq__35048_35052;
var G__35058 = chunk__35049_35053;
var G__35059 = count__35050_35054;
var G__35060 = (i__35051_35055 + 1);
seq__35048_35052 = G__35057;
chunk__35049_35053 = G__35058;
count__35050_35054 = G__35059;
i__35051_35055 = G__35060;
continue;
}
} else
{var temp__4092__auto___35061 = cljs.core.seq.call(null,seq__35048_35052);if(temp__4092__auto___35061)
{var seq__35048_35062__$1 = temp__4092__auto___35061;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35048_35062__$1))
{var c__14547__auto___35063 = cljs.core.chunk_first.call(null,seq__35048_35062__$1);{
var G__35064 = cljs.core.chunk_rest.call(null,seq__35048_35062__$1);
var G__35065 = c__14547__auto___35063;
var G__35066 = cljs.core.count.call(null,c__14547__auto___35063);
var G__35067 = 0;
seq__35048_35052 = G__35064;
chunk__35049_35053 = G__35065;
count__35050_35054 = G__35066;
i__35051_35055 = G__35067;
continue;
}
} else
{var n_35068 = cljs.core.first.call(null,seq__35048_35062__$1);n_35068.removeAttribute(cljs.core.name.call(null,name));
{
var G__35069 = cljs.core.next.call(null,seq__35048_35062__$1);
var G__35070 = null;
var G__35071 = 0;
var G__35072 = 0;
seq__35048_35052 = G__35069;
chunk__35049_35053 = G__35070;
count__35050_35054 = G__35071;
i__35051_35055 = G__35072;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__35074 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__35074,0,null);var v = cljs.core.nth.call(null,vec__35074,1,null);if(cljs.core.truth_((function (){var and__13811__auto__ = k;if(cljs.core.truth_(and__13811__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__35075_SHARP_){var attr = attrs__$1.item(p1__35075_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__35082_35088 = cljs.core.seq.call(null,styles);var chunk__35083_35089 = null;var count__35084_35090 = 0;var i__35085_35091 = 0;while(true){
if((i__35085_35091 < count__35084_35090))
{var vec__35086_35092 = cljs.core._nth.call(null,chunk__35083_35089,i__35085_35091);var name_35093 = cljs.core.nth.call(null,vec__35086_35092,0,null);var value_35094 = cljs.core.nth.call(null,vec__35086_35092,1,null);domina.set_style_BANG_.call(null,content,name_35093,value_35094);
{
var G__35095 = seq__35082_35088;
var G__35096 = chunk__35083_35089;
var G__35097 = count__35084_35090;
var G__35098 = (i__35085_35091 + 1);
seq__35082_35088 = G__35095;
chunk__35083_35089 = G__35096;
count__35084_35090 = G__35097;
i__35085_35091 = G__35098;
continue;
}
} else
{var temp__4092__auto___35099 = cljs.core.seq.call(null,seq__35082_35088);if(temp__4092__auto___35099)
{var seq__35082_35100__$1 = temp__4092__auto___35099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35082_35100__$1))
{var c__14547__auto___35101 = cljs.core.chunk_first.call(null,seq__35082_35100__$1);{
var G__35102 = cljs.core.chunk_rest.call(null,seq__35082_35100__$1);
var G__35103 = c__14547__auto___35101;
var G__35104 = cljs.core.count.call(null,c__14547__auto___35101);
var G__35105 = 0;
seq__35082_35088 = G__35102;
chunk__35083_35089 = G__35103;
count__35084_35090 = G__35104;
i__35085_35091 = G__35105;
continue;
}
} else
{var vec__35087_35106 = cljs.core.first.call(null,seq__35082_35100__$1);var name_35107 = cljs.core.nth.call(null,vec__35087_35106,0,null);var value_35108 = cljs.core.nth.call(null,vec__35087_35106,1,null);domina.set_style_BANG_.call(null,content,name_35107,value_35108);
{
var G__35109 = cljs.core.next.call(null,seq__35082_35100__$1);
var G__35110 = null;
var G__35111 = 0;
var G__35112 = 0;
seq__35082_35088 = G__35109;
chunk__35083_35089 = G__35110;
count__35084_35090 = G__35111;
i__35085_35091 = G__35112;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__35119_35125 = cljs.core.seq.call(null,attrs);var chunk__35120_35126 = null;var count__35121_35127 = 0;var i__35122_35128 = 0;while(true){
if((i__35122_35128 < count__35121_35127))
{var vec__35123_35129 = cljs.core._nth.call(null,chunk__35120_35126,i__35122_35128);var name_35130 = cljs.core.nth.call(null,vec__35123_35129,0,null);var value_35131 = cljs.core.nth.call(null,vec__35123_35129,1,null);domina.set_attr_BANG_.call(null,content,name_35130,value_35131);
{
var G__35132 = seq__35119_35125;
var G__35133 = chunk__35120_35126;
var G__35134 = count__35121_35127;
var G__35135 = (i__35122_35128 + 1);
seq__35119_35125 = G__35132;
chunk__35120_35126 = G__35133;
count__35121_35127 = G__35134;
i__35122_35128 = G__35135;
continue;
}
} else
{var temp__4092__auto___35136 = cljs.core.seq.call(null,seq__35119_35125);if(temp__4092__auto___35136)
{var seq__35119_35137__$1 = temp__4092__auto___35136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35119_35137__$1))
{var c__14547__auto___35138 = cljs.core.chunk_first.call(null,seq__35119_35137__$1);{
var G__35139 = cljs.core.chunk_rest.call(null,seq__35119_35137__$1);
var G__35140 = c__14547__auto___35138;
var G__35141 = cljs.core.count.call(null,c__14547__auto___35138);
var G__35142 = 0;
seq__35119_35125 = G__35139;
chunk__35120_35126 = G__35140;
count__35121_35127 = G__35141;
i__35122_35128 = G__35142;
continue;
}
} else
{var vec__35124_35143 = cljs.core.first.call(null,seq__35119_35137__$1);var name_35144 = cljs.core.nth.call(null,vec__35124_35143,0,null);var value_35145 = cljs.core.nth.call(null,vec__35124_35143,1,null);domina.set_attr_BANG_.call(null,content,name_35144,value_35145);
{
var G__35146 = cljs.core.next.call(null,seq__35119_35137__$1);
var G__35147 = null;
var G__35148 = 0;
var G__35149 = 0;
seq__35119_35125 = G__35146;
chunk__35120_35126 = G__35147;
count__35121_35127 = G__35148;
i__35122_35128 = G__35149;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__35154_35158 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35155_35159 = null;var count__35156_35160 = 0;var i__35157_35161 = 0;while(true){
if((i__35157_35161 < count__35156_35160))
{var node_35162 = cljs.core._nth.call(null,chunk__35155_35159,i__35157_35161);goog.dom.classes.add(node_35162,class$);
{
var G__35163 = seq__35154_35158;
var G__35164 = chunk__35155_35159;
var G__35165 = count__35156_35160;
var G__35166 = (i__35157_35161 + 1);
seq__35154_35158 = G__35163;
chunk__35155_35159 = G__35164;
count__35156_35160 = G__35165;
i__35157_35161 = G__35166;
continue;
}
} else
{var temp__4092__auto___35167 = cljs.core.seq.call(null,seq__35154_35158);if(temp__4092__auto___35167)
{var seq__35154_35168__$1 = temp__4092__auto___35167;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35154_35168__$1))
{var c__14547__auto___35169 = cljs.core.chunk_first.call(null,seq__35154_35168__$1);{
var G__35170 = cljs.core.chunk_rest.call(null,seq__35154_35168__$1);
var G__35171 = c__14547__auto___35169;
var G__35172 = cljs.core.count.call(null,c__14547__auto___35169);
var G__35173 = 0;
seq__35154_35158 = G__35170;
chunk__35155_35159 = G__35171;
count__35156_35160 = G__35172;
i__35157_35161 = G__35173;
continue;
}
} else
{var node_35174 = cljs.core.first.call(null,seq__35154_35168__$1);goog.dom.classes.add(node_35174,class$);
{
var G__35175 = cljs.core.next.call(null,seq__35154_35168__$1);
var G__35176 = null;
var G__35177 = 0;
var G__35178 = 0;
seq__35154_35158 = G__35175;
chunk__35155_35159 = G__35176;
count__35156_35160 = G__35177;
i__35157_35161 = G__35178;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__35183_35187 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35184_35188 = null;var count__35185_35189 = 0;var i__35186_35190 = 0;while(true){
if((i__35186_35190 < count__35185_35189))
{var node_35191 = cljs.core._nth.call(null,chunk__35184_35188,i__35186_35190);goog.dom.classes.remove(node_35191,class$);
{
var G__35192 = seq__35183_35187;
var G__35193 = chunk__35184_35188;
var G__35194 = count__35185_35189;
var G__35195 = (i__35186_35190 + 1);
seq__35183_35187 = G__35192;
chunk__35184_35188 = G__35193;
count__35185_35189 = G__35194;
i__35186_35190 = G__35195;
continue;
}
} else
{var temp__4092__auto___35196 = cljs.core.seq.call(null,seq__35183_35187);if(temp__4092__auto___35196)
{var seq__35183_35197__$1 = temp__4092__auto___35196;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35183_35197__$1))
{var c__14547__auto___35198 = cljs.core.chunk_first.call(null,seq__35183_35197__$1);{
var G__35199 = cljs.core.chunk_rest.call(null,seq__35183_35197__$1);
var G__35200 = c__14547__auto___35198;
var G__35201 = cljs.core.count.call(null,c__14547__auto___35198);
var G__35202 = 0;
seq__35183_35187 = G__35199;
chunk__35184_35188 = G__35200;
count__35185_35189 = G__35201;
i__35186_35190 = G__35202;
continue;
}
} else
{var node_35203 = cljs.core.first.call(null,seq__35183_35197__$1);goog.dom.classes.remove(node_35203,class$);
{
var G__35204 = cljs.core.next.call(null,seq__35183_35197__$1);
var G__35205 = null;
var G__35206 = 0;
var G__35207 = 0;
seq__35183_35187 = G__35204;
chunk__35184_35188 = G__35205;
count__35185_35189 = G__35206;
i__35186_35190 = G__35207;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__35212_35216 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35213_35217 = null;var count__35214_35218 = 0;var i__35215_35219 = 0;while(true){
if((i__35215_35219 < count__35214_35218))
{var node_35220 = cljs.core._nth.call(null,chunk__35213_35217,i__35215_35219);goog.dom.classes.toggle(node_35220,class$);
{
var G__35221 = seq__35212_35216;
var G__35222 = chunk__35213_35217;
var G__35223 = count__35214_35218;
var G__35224 = (i__35215_35219 + 1);
seq__35212_35216 = G__35221;
chunk__35213_35217 = G__35222;
count__35214_35218 = G__35223;
i__35215_35219 = G__35224;
continue;
}
} else
{var temp__4092__auto___35225 = cljs.core.seq.call(null,seq__35212_35216);if(temp__4092__auto___35225)
{var seq__35212_35226__$1 = temp__4092__auto___35225;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35212_35226__$1))
{var c__14547__auto___35227 = cljs.core.chunk_first.call(null,seq__35212_35226__$1);{
var G__35228 = cljs.core.chunk_rest.call(null,seq__35212_35226__$1);
var G__35229 = c__14547__auto___35227;
var G__35230 = cljs.core.count.call(null,c__14547__auto___35227);
var G__35231 = 0;
seq__35212_35216 = G__35228;
chunk__35213_35217 = G__35229;
count__35214_35218 = G__35230;
i__35215_35219 = G__35231;
continue;
}
} else
{var node_35232 = cljs.core.first.call(null,seq__35212_35226__$1);goog.dom.classes.toggle(node_35232,class$);
{
var G__35233 = cljs.core.next.call(null,seq__35212_35226__$1);
var G__35234 = null;
var G__35235 = 0;
var G__35236 = 0;
seq__35212_35216 = G__35233;
chunk__35213_35217 = G__35234;
count__35214_35218 = G__35235;
i__35215_35219 = G__35236;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_35245__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__35241_35246 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35242_35247 = null;var count__35243_35248 = 0;var i__35244_35249 = 0;while(true){
if((i__35244_35249 < count__35243_35248))
{var node_35250 = cljs.core._nth.call(null,chunk__35242_35247,i__35244_35249);goog.dom.classes.set(node_35250,classes_35245__$1);
{
var G__35251 = seq__35241_35246;
var G__35252 = chunk__35242_35247;
var G__35253 = count__35243_35248;
var G__35254 = (i__35244_35249 + 1);
seq__35241_35246 = G__35251;
chunk__35242_35247 = G__35252;
count__35243_35248 = G__35253;
i__35244_35249 = G__35254;
continue;
}
} else
{var temp__4092__auto___35255 = cljs.core.seq.call(null,seq__35241_35246);if(temp__4092__auto___35255)
{var seq__35241_35256__$1 = temp__4092__auto___35255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35241_35256__$1))
{var c__14547__auto___35257 = cljs.core.chunk_first.call(null,seq__35241_35256__$1);{
var G__35258 = cljs.core.chunk_rest.call(null,seq__35241_35256__$1);
var G__35259 = c__14547__auto___35257;
var G__35260 = cljs.core.count.call(null,c__14547__auto___35257);
var G__35261 = 0;
seq__35241_35246 = G__35258;
chunk__35242_35247 = G__35259;
count__35243_35248 = G__35260;
i__35244_35249 = G__35261;
continue;
}
} else
{var node_35262 = cljs.core.first.call(null,seq__35241_35256__$1);goog.dom.classes.set(node_35262,classes_35245__$1);
{
var G__35263 = cljs.core.next.call(null,seq__35241_35256__$1);
var G__35264 = null;
var G__35265 = 0;
var G__35266 = 0;
seq__35241_35246 = G__35263;
chunk__35242_35247 = G__35264;
count__35243_35248 = G__35265;
i__35244_35249 = G__35266;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__35271_35275 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35272_35276 = null;var count__35273_35277 = 0;var i__35274_35278 = 0;while(true){
if((i__35274_35278 < count__35273_35277))
{var node_35279 = cljs.core._nth.call(null,chunk__35272_35276,i__35274_35278);goog.dom.setTextContent(node_35279,value);
{
var G__35280 = seq__35271_35275;
var G__35281 = chunk__35272_35276;
var G__35282 = count__35273_35277;
var G__35283 = (i__35274_35278 + 1);
seq__35271_35275 = G__35280;
chunk__35272_35276 = G__35281;
count__35273_35277 = G__35282;
i__35274_35278 = G__35283;
continue;
}
} else
{var temp__4092__auto___35284 = cljs.core.seq.call(null,seq__35271_35275);if(temp__4092__auto___35284)
{var seq__35271_35285__$1 = temp__4092__auto___35284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35271_35285__$1))
{var c__14547__auto___35286 = cljs.core.chunk_first.call(null,seq__35271_35285__$1);{
var G__35287 = cljs.core.chunk_rest.call(null,seq__35271_35285__$1);
var G__35288 = c__14547__auto___35286;
var G__35289 = cljs.core.count.call(null,c__14547__auto___35286);
var G__35290 = 0;
seq__35271_35275 = G__35287;
chunk__35272_35276 = G__35288;
count__35273_35277 = G__35289;
i__35274_35278 = G__35290;
continue;
}
} else
{var node_35291 = cljs.core.first.call(null,seq__35271_35285__$1);goog.dom.setTextContent(node_35291,value);
{
var G__35292 = cljs.core.next.call(null,seq__35271_35285__$1);
var G__35293 = null;
var G__35294 = 0;
var G__35295 = 0;
seq__35271_35275 = G__35292;
chunk__35272_35276 = G__35293;
count__35273_35277 = G__35294;
i__35274_35278 = G__35295;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__35300_35304 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35301_35305 = null;var count__35302_35306 = 0;var i__35303_35307 = 0;while(true){
if((i__35303_35307 < count__35302_35306))
{var node_35308 = cljs.core._nth.call(null,chunk__35301_35305,i__35303_35307);goog.dom.forms.setValue(node_35308,value);
{
var G__35309 = seq__35300_35304;
var G__35310 = chunk__35301_35305;
var G__35311 = count__35302_35306;
var G__35312 = (i__35303_35307 + 1);
seq__35300_35304 = G__35309;
chunk__35301_35305 = G__35310;
count__35302_35306 = G__35311;
i__35303_35307 = G__35312;
continue;
}
} else
{var temp__4092__auto___35313 = cljs.core.seq.call(null,seq__35300_35304);if(temp__4092__auto___35313)
{var seq__35300_35314__$1 = temp__4092__auto___35313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35300_35314__$1))
{var c__14547__auto___35315 = cljs.core.chunk_first.call(null,seq__35300_35314__$1);{
var G__35316 = cljs.core.chunk_rest.call(null,seq__35300_35314__$1);
var G__35317 = c__14547__auto___35315;
var G__35318 = cljs.core.count.call(null,c__14547__auto___35315);
var G__35319 = 0;
seq__35300_35304 = G__35316;
chunk__35301_35305 = G__35317;
count__35302_35306 = G__35318;
i__35303_35307 = G__35319;
continue;
}
} else
{var node_35320 = cljs.core.first.call(null,seq__35300_35314__$1);goog.dom.forms.setValue(node_35320,value);
{
var G__35321 = cljs.core.next.call(null,seq__35300_35314__$1);
var G__35322 = null;
var G__35323 = 0;
var G__35324 = 0;
seq__35300_35304 = G__35321;
chunk__35301_35305 = G__35322;
count__35302_35306 = G__35323;
i__35303_35307 = G__35324;
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
{var value_35335 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__35331_35336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35332_35337 = null;var count__35333_35338 = 0;var i__35334_35339 = 0;while(true){
if((i__35334_35339 < count__35333_35338))
{var node_35340 = cljs.core._nth.call(null,chunk__35332_35337,i__35334_35339);node_35340.innerHTML = value_35335;
{
var G__35341 = seq__35331_35336;
var G__35342 = chunk__35332_35337;
var G__35343 = count__35333_35338;
var G__35344 = (i__35334_35339 + 1);
seq__35331_35336 = G__35341;
chunk__35332_35337 = G__35342;
count__35333_35338 = G__35343;
i__35334_35339 = G__35344;
continue;
}
} else
{var temp__4092__auto___35345 = cljs.core.seq.call(null,seq__35331_35336);if(temp__4092__auto___35345)
{var seq__35331_35346__$1 = temp__4092__auto___35345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35331_35346__$1))
{var c__14547__auto___35347 = cljs.core.chunk_first.call(null,seq__35331_35346__$1);{
var G__35348 = cljs.core.chunk_rest.call(null,seq__35331_35346__$1);
var G__35349 = c__14547__auto___35347;
var G__35350 = cljs.core.count.call(null,c__14547__auto___35347);
var G__35351 = 0;
seq__35331_35336 = G__35348;
chunk__35332_35337 = G__35349;
count__35333_35338 = G__35350;
i__35334_35339 = G__35351;
continue;
}
} else
{var node_35352 = cljs.core.first.call(null,seq__35331_35346__$1);node_35352.innerHTML = value_35335;
{
var G__35353 = cljs.core.next.call(null,seq__35331_35346__$1);
var G__35354 = null;
var G__35355 = 0;
var G__35356 = 0;
seq__35331_35336 = G__35353;
chunk__35332_35337 = G__35354;
count__35333_35338 = G__35355;
i__35334_35339 = G__35356;
continue;
}
}
} else
{}
}
break;
}
}catch (e35330){if((e35330 instanceof Error))
{var e_35357 = e35330;domina.replace_children_BANG_.call(null,content,value_35335);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35330;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__35364_35368 = cljs.core.seq.call(null,children);var chunk__35365_35369 = null;var count__35366_35370 = 0;var i__35367_35371 = 0;while(true){
if((i__35367_35371 < count__35366_35370))
{var child_35372 = cljs.core._nth.call(null,chunk__35365_35369,i__35367_35371);frag.appendChild(child_35372);
{
var G__35373 = seq__35364_35368;
var G__35374 = chunk__35365_35369;
var G__35375 = count__35366_35370;
var G__35376 = (i__35367_35371 + 1);
seq__35364_35368 = G__35373;
chunk__35365_35369 = G__35374;
count__35366_35370 = G__35375;
i__35367_35371 = G__35376;
continue;
}
} else
{var temp__4092__auto___35377 = cljs.core.seq.call(null,seq__35364_35368);if(temp__4092__auto___35377)
{var seq__35364_35378__$1 = temp__4092__auto___35377;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35364_35378__$1))
{var c__14547__auto___35379 = cljs.core.chunk_first.call(null,seq__35364_35378__$1);{
var G__35380 = cljs.core.chunk_rest.call(null,seq__35364_35378__$1);
var G__35381 = c__14547__auto___35379;
var G__35382 = cljs.core.count.call(null,c__14547__auto___35379);
var G__35383 = 0;
seq__35364_35368 = G__35380;
chunk__35365_35369 = G__35381;
count__35366_35370 = G__35382;
i__35367_35371 = G__35383;
continue;
}
} else
{var child_35384 = cljs.core.first.call(null,seq__35364_35378__$1);frag.appendChild(child_35384);
{
var G__35385 = cljs.core.next.call(null,seq__35364_35378__$1);
var G__35386 = null;
var G__35387 = 0;
var G__35388 = 0;
seq__35364_35368 = G__35385;
chunk__35365_35369 = G__35386;
count__35366_35370 = G__35387;
i__35367_35371 = G__35388;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__35358_SHARP_,p2__35359_SHARP_){return f.call(null,p1__35358_SHARP_,p2__35359_SHARP_);
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
{if((function (){var G__35390 = list_thing;if(G__35390)
{var bit__14449__auto__ = (G__35390.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35390.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35390.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35390);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35390);
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
{if((function (){var G__35391 = content;if(G__35391)
{var bit__14449__auto__ = (G__35391.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35391.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35391.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35391);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35391);
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
{if((function (){var G__35392 = content;if(G__35392)
{var bit__14449__auto__ = (G__35392.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__14449__auto__) || (G__35392.cljs$core$ISeqable$))
{return true;
} else
{if((!G__35392.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35392);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__35392);
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