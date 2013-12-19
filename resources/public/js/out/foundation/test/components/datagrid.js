// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('foundation.test.models');
goog.require('foundation.test.models');
goog.require('foundation.test.templates');
goog.require('foundation.test.templates');
goog.require('foundation.app.ui');
goog.require('foundation.app.ui');
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom194581 = document.createElement("div");dom194581.className = "autocomplete";
dom194581.appendChild((function (){var dom194582 = document.createElement("input");dom194582.className = "form-control";
if("text")
{dom194582.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom194582.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom194582;
})());
return dom194581;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom194589 = document.createElement("thead");dom194589.setAttribute("id","datagrid-header");
dom194589.appendChild((function (){var dom194590 = document.createElement("tr");dom194590.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__194591(s__194592){return (new cljs.core.LazySeq(null,(function (){var s__194592__$1 = s__194592;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__194592__$1);if(temp__4092__auto__)
{var s__194592__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__194592__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__194592__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__194594 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__194593 = 0;while(true){
if((i__194593 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__194593);cljs.core.chunk_append.call(null,b__194594,cells.th.call(null,col));
{
var G__194595 = (i__194593 + 1);
i__194593 = G__194595;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194594),iter__194591.call(null,cljs.core.chunk_rest.call(null,s__194592__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194594),null);
}
} else
{var col = cljs.core.first.call(null,s__194592__$2);return cljs.core.cons.call(null,cells.th.call(null,col),iter__194591.call(null,cljs.core.rest.call(null,s__194592__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom194590;
})());
return dom194589;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom194601 = document.createElement("tr");dom194601.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__194602(s__194603){return (new cljs.core.LazySeq(null,(function (){var s__194603__$1 = s__194603;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__194603__$1);if(temp__4092__auto__)
{var s__194603__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__194603__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__194603__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__194605 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__194604 = 0;while(true){
if((i__194604 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__194604);cljs.core.chunk_append.call(null,b__194605,cells.td.call(null,col,model));
{
var G__194606 = (i__194604 + 1);
i__194604 = G__194606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194605),iter__194602.call(null,cljs.core.chunk_rest.call(null,s__194603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194605),null);
}
} else
{var col = cljs.core.first.call(null,s__194603__$2);return cljs.core.cons.call(null,cells.td.call(null,col,model),iter__194602.call(null,cljs.core.rest.call(null,s__194603__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom194601;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom194612 = document.createElement("tbody");dom194612.className = "datagrid-tbody";
dom194612.setAttribute("id","datagrid-body");
dom194612.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__194613(s__194614){return (new cljs.core.LazySeq(null,(function (){var s__194614__$1 = s__194614;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__194614__$1);if(temp__4092__auto__)
{var s__194614__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__194614__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__194614__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__194616 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__194615 = 0;while(true){
if((i__194615 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__194615);cljs.core.chunk_append.call(null,b__194616,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__194617 = (i__194615 + 1);
i__194615 = G__194617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194616),iter__194613.call(null,cljs.core.chunk_rest.call(null,s__194614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__194616),null);
}
} else
{var model = cljs.core.first.call(null,s__194614__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__194613.call(null,cljs.core.rest.call(null,s__194614__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom194612;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom194629 = document.createElement("ol");dom194629.className = "breadcrumb";
dom194629.appendChild((function (){var dom194630 = document.createElement("li");dom194630.className = "active";
dom194630.setAttribute("id","account");
dom194630.appendChild((function (){var dom194631 = document.createElement("div");dom194631.className = "arrow-down";
return dom194631;
})());
dom194630.appendChild((function (){var dom194632 = document.createElement("a");dom194632.appendChild(document.createTextNode("Accounts"));
return dom194632;
})());
dom194630.appendChild((function (){var dom194633 = document.createElement("div");dom194633.className = "arrow-up";
return dom194633;
})());
return dom194630;
})());
dom194629.appendChild((function (){var dom194634 = document.createElement("li");dom194634.className = "hidden";
dom194634.setAttribute("id","campaign");
dom194634.appendChild((function (){var dom194635 = document.createElement("a");dom194635.appendChild(document.createTextNode("Campaigns"));
return dom194635;
})());
return dom194634;
})());
dom194629.appendChild((function (){var dom194636 = document.createElement("li");dom194636.className = "hidden";
dom194636.setAttribute("id","line_item");
dom194636.appendChild((function (){var dom194637 = document.createElement("a");dom194637.appendChild(document.createTextNode("Line Items"));
return dom194637;
})());
return dom194636;
})());
dom194629.appendChild((function (){var dom194638 = document.createElement("li");dom194638.className = "hidden";
dom194638.setAttribute("id","promoted_tweet");
dom194638.appendChild((function (){var dom194639 = document.createElement("a");dom194639.appendChild(document.createTextNode("Promoted Products"));
return dom194639;
})());
return dom194638;
})());
return dom194629;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(id){var dom194655 = document.createElement("div");dom194655.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom194655.setAttribute("id",id);
} else
{}
dom194655.appendChild((function (){var dom194656 = document.createElement("div");dom194656.className = "panel-heading";
dom194656.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom194656.appendChild((function (){var dom194657 = document.createElement("form");dom194657.className = "form-inline pull-right";
dom194657.appendChild((function (){var dom194658 = document.createElement("div");dom194658.className = "form-group";
dom194658.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom194658;
})());
return dom194657;
})());
return dom194656;
})());
dom194655.appendChild((function (){var dom194659 = document.createElement("div");dom194659.className = "panel-body";
return dom194659;
})());
dom194655.appendChild((function (){var dom194660 = document.createElement("div");dom194660.className = "panel-footer";
dom194660.appendChild((function (){var dom194661 = document.createElement("div");dom194661.className = "form-inline";
dom194661.appendChild((function (){var dom194662 = document.createElement("div");dom194662.className = "form-group";
dom194662.appendChild((function (){var dom194663 = document.createElement("button");dom194663.className = "btn btn-success btn-sm";
dom194663.setAttribute("id","new");
dom194663.appendChild(document.createTextNode("New"));
return dom194663;
})());
return dom194662;
})());
dom194661.appendChild((function (){var dom194664 = document.createElement("div");dom194664.className = "form-group";
dom194664.appendChild((function (){var dom194665 = document.createElement("button");dom194665.className = "btn btn-info btn-sm disabled";
dom194665.setAttribute("id","save");
dom194665.appendChild(document.createTextNode("Save"));
return dom194665;
})());
return dom194664;
})());
dom194661.appendChild((function (){var dom194666 = document.createElement("div");dom194666.className = "form-group";
dom194666.appendChild((function (){var dom194667 = document.createElement("button");dom194667.className = "btn btn-danger btn-sm disabled";
dom194667.setAttribute("id","delete");
dom194667.appendChild(document.createTextNode("Delete"));
return dom194667;
})());
return dom194666;
})());
dom194661.appendChild((function (){var dom194668 = document.createElement("div");dom194668.className = "form-group";
dom194668.appendChild((function (){var dom194669 = document.createElement("button");dom194669.className = "btn btn-primary btn-sm disabled";
dom194669.setAttribute("id","dupe");
dom194669.appendChild(document.createTextNode("Duplicate"));
return dom194669;
})());
return dom194668;
})());
return dom194661;
})());
return dom194660;
})());
return dom194655;
});
foundation.test.components.datagrid.datagrid = (function datagrid(id,state){if(typeof foundation.test.components.datagrid.t194673 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t194673 = (function (state,id,datagrid,meta194674){
this.state = state;
this.id = id;
this.datagrid = datagrid;
this.meta194674 = meta194674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t194673.cljs$lang$type = true;
foundation.test.components.datagrid.t194673.cljs$lang$ctorStr = "foundation.test.components.datagrid/t194673";
foundation.test.components.datagrid.t194673.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t194673");
});
foundation.test.components.datagrid.t194673.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t194673.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.id);
});
foundation.test.components.datagrid.t194673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_194675){var self__ = this;
var _194675__$1 = this;return self__.meta194674;
});
foundation.test.components.datagrid.t194673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_194675,meta194674__$1){var self__ = this;
var _194675__$1 = this;return (new foundation.test.components.datagrid.t194673(self__.state,self__.id,self__.datagrid,meta194674__$1));
});
foundation.test.components.datagrid.__GT_t194673 = (function __GT_t194673(state__$1,id__$1,datagrid__$1,meta194674){return (new foundation.test.components.datagrid.t194673(state__$1,id__$1,datagrid__$1,meta194674));
});
}
return (new foundation.test.components.datagrid.t194673(state,id,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map