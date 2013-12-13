// Compiled by ClojureScript 0.0-2080
goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){var doc = goog.dom.getOwnerDocument(node);if(cljs.core.truth_((function (){var and__13776__auto__ = node.selectSingleNode;if(cljs.core.truth_(and__13776__auto__))
{return doc.setProperty;
} else
{return and__13776__auto__;
}
})()))
{doc.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc.evaluate))
{return technique_2.call(null,null,doc,node,path);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){return node__$1.selectSingleNode(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return result.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node__$1,expr__$1){return node__$1.selectNodes(expr__$1);
}),(function (resolver,doc,node__$1,expr__$1){var result = doc.evaluate(expr__$1,node__$1,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);var num_results = result.snapshotLength;var i = 0;var acc = null;while(true){
if((i < num_results))
{{
var G__40565 = (i + 1);
var G__40566 = cljs.core.cons.call(null,result.snapshotItem(i),acc);
i = G__40565;
acc = G__40566;
continue;
}
} else
{return acc;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__1 = (function (expr){return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__2 = (function (base,expr){if(typeof domina.xpath.t40570 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.xpath.t40570 = (function (expr,base,xpath,meta40571){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.meta40571 = meta40571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.xpath.t40570.cljs$lang$type = true;
domina.xpath.t40570.cljs$lang$ctorStr = "domina.xpath/t40570";
domina.xpath.t40570.cljs$lang$ctorPrWriter = (function (this__14332__auto__,writer__14333__auto__,opt__14334__auto__){return cljs.core._write.call(null,writer__14333__auto__,"domina.xpath/t40570");
});
domina.xpath.t40570.prototype.domina$DomContent$ = true;
domina.xpath.t40570.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,self__.expr),domina.nodes.call(null,self__.base));
});
domina.xpath.t40570.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,self__.expr),domina.nodes.call(null,self__.base))));
});
domina.xpath.t40570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40572){var self__ = this;
var _40572__$1 = this;return self__.meta40571;
});
domina.xpath.t40570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40572,meta40571__$1){var self__ = this;
var _40572__$1 = this;return (new domina.xpath.t40570(self__.expr,self__.base,self__.xpath,meta40571__$1));
});
domina.xpath.__GT_t40570 = (function __GT_t40570(expr__$1,base__$1,xpath__$1,meta40571){return (new domina.xpath.t40570(expr__$1,base__$1,xpath__$1,meta40571));
});
}
return (new domina.xpath.t40570(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case 1:
return xpath__1.call(this,base);
case 2:
return xpath__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
xpath.cljs$core$IFn$_invoke$arity$1 = xpath__1;
xpath.cljs$core$IFn$_invoke$arity$2 = xpath__2;
return xpath;
})()
;

//# sourceMappingURL=xpath.js.map