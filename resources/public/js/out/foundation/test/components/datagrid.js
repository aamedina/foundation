// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('foundation.test.templates');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.cells');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('foundation.test.models');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom228395 = document.createElement("div");dom228395.className = "autocomplete";
dom228395.appendChild((function (){var dom228396 = document.createElement("input");dom228396.className = "form-control";
if("text")
{dom228396.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom228396.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom228396;
})());
return dom228395;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom228403 = document.createElement("thead");dom228403.setAttribute("id","datagrid-header");
dom228403.appendChild((function (){var dom228404 = document.createElement("tr");dom228404.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__228405(s__228406){return (new cljs.core.LazySeq(null,(function (){var s__228406__$1 = s__228406;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__228406__$1);if(temp__4092__auto__)
{var s__228406__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__228406__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__228406__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__228408 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__228407 = 0;while(true){
if((i__228407 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__228407);cljs.core.chunk_append.call(null,b__228408,foundation.test.cells.th.call(null,col));
{
var G__228409 = (i__228407 + 1);
i__228407 = G__228409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228408),iter__228405.call(null,cljs.core.chunk_rest.call(null,s__228406__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228408),null);
}
} else
{var col = cljs.core.first.call(null,s__228406__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__228405.call(null,cljs.core.rest.call(null,s__228406__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom228404;
})());
return dom228403;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom228415 = document.createElement("tr");dom228415.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__228416(s__228417){return (new cljs.core.LazySeq(null,(function (){var s__228417__$1 = s__228417;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__228417__$1);if(temp__4092__auto__)
{var s__228417__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__228417__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__228417__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__228419 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__228418 = 0;while(true){
if((i__228418 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__228418);cljs.core.chunk_append.call(null,b__228419,foundation.test.cells.td.call(null,col,model));
{
var G__228420 = (i__228418 + 1);
i__228418 = G__228420;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228419),iter__228416.call(null,cljs.core.chunk_rest.call(null,s__228417__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228419),null);
}
} else
{var col = cljs.core.first.call(null,s__228417__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__228416.call(null,cljs.core.rest.call(null,s__228417__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom228415;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom228426 = document.createElement("tbody");dom228426.className = "datagrid-tbody";
dom228426.setAttribute("id","datagrid-body");
dom228426.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__228427(s__228428){return (new cljs.core.LazySeq(null,(function (){var s__228428__$1 = s__228428;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__228428__$1);if(temp__4092__auto__)
{var s__228428__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__228428__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__228428__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__228430 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__228429 = 0;while(true){
if((i__228429 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__228429);cljs.core.chunk_append.call(null,b__228430,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__228431 = (i__228429 + 1);
i__228429 = G__228431;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228430),iter__228427.call(null,cljs.core.chunk_rest.call(null,s__228428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__228430),null);
}
} else
{var model = cljs.core.first.call(null,s__228428__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__228427.call(null,cljs.core.rest.call(null,s__228428__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom228426;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom228443 = document.createElement("ol");dom228443.className = "breadcrumb";
dom228443.appendChild((function (){var dom228444 = document.createElement("li");dom228444.className = "active";
dom228444.setAttribute("id","account");
dom228444.appendChild((function (){var dom228445 = document.createElement("div");dom228445.className = "arrow-down";
return dom228445;
})());
dom228444.appendChild((function (){var dom228446 = document.createElement("a");dom228446.appendChild(document.createTextNode("Accounts"));
return dom228446;
})());
dom228444.appendChild((function (){var dom228447 = document.createElement("div");dom228447.className = "arrow-up";
return dom228447;
})());
return dom228444;
})());
dom228443.appendChild((function (){var dom228448 = document.createElement("li");dom228448.className = "hidden";
dom228448.setAttribute("id","campaign");
dom228448.appendChild((function (){var dom228449 = document.createElement("a");dom228449.appendChild(document.createTextNode("Campaigns"));
return dom228449;
})());
return dom228448;
})());
dom228443.appendChild((function (){var dom228450 = document.createElement("li");dom228450.className = "hidden";
dom228450.setAttribute("id","line_item");
dom228450.appendChild((function (){var dom228451 = document.createElement("a");dom228451.appendChild(document.createTextNode("Line Items"));
return dom228451;
})());
return dom228450;
})());
dom228443.appendChild((function (){var dom228452 = document.createElement("li");dom228452.className = "hidden";
dom228452.setAttribute("id","promoted_tweet");
dom228452.appendChild((function (){var dom228453 = document.createElement("a");dom228453.appendChild(document.createTextNode("Promoted Products"));
return dom228453;
})());
return dom228452;
})());
return dom228443;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(id,model,coll){var dom228469 = document.createElement("div");dom228469.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom228469.setAttribute("id",id);
} else
{}
dom228469.appendChild((function (){var dom228470 = document.createElement("div");dom228470.className = "panel-heading";
dom228470.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom228470.appendChild((function (){var dom228471 = document.createElement("form");dom228471.className = "form-inline pull-right";
dom228471.appendChild((function (){var dom228472 = document.createElement("div");dom228472.className = "form-group";
dom228472.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom228472;
})());
return dom228471;
})());
return dom228470;
})());
dom228469.appendChild((function (){var dom228473 = document.createElement("div");dom228473.className = "panel-body";
dom228473.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom228473;
})());
dom228469.appendChild((function (){var dom228474 = document.createElement("div");dom228474.className = "panel-footer";
dom228474.appendChild((function (){var dom228475 = document.createElement("div");dom228475.className = "form-inline";
dom228475.appendChild((function (){var dom228476 = document.createElement("div");dom228476.className = "form-group";
dom228476.appendChild((function (){var dom228477 = document.createElement("button");dom228477.className = "btn btn-success btn-sm";
dom228477.setAttribute("id","new");
dom228477.appendChild(document.createTextNode("New"));
return dom228477;
})());
return dom228476;
})());
dom228475.appendChild((function (){var dom228478 = document.createElement("div");dom228478.className = "form-group";
dom228478.appendChild((function (){var dom228479 = document.createElement("button");dom228479.className = "btn btn-info btn-sm disabled";
dom228479.setAttribute("id","save");
dom228479.appendChild(document.createTextNode("Save"));
return dom228479;
})());
return dom228478;
})());
dom228475.appendChild((function (){var dom228480 = document.createElement("div");dom228480.className = "form-group";
dom228480.appendChild((function (){var dom228481 = document.createElement("button");dom228481.className = "btn btn-danger btn-sm disabled";
dom228481.setAttribute("id","delete");
dom228481.appendChild(document.createTextNode("Delete"));
return dom228481;
})());
return dom228480;
})());
dom228475.appendChild((function (){var dom228482 = document.createElement("div");dom228482.className = "form-group";
dom228482.appendChild((function (){var dom228483 = document.createElement("button");dom228483.className = "btn btn-primary btn-sm disabled";
dom228483.setAttribute("id","dupe");
dom228483.appendChild(document.createTextNode("Duplicate"));
return dom228483;
})());
return dom228482;
})());
return dom228475;
})());
return dom228474;
})());
return dom228469;
});
foundation.test.components.datagrid.add_model = (function add_model(){if(typeof foundation.test.components.datagrid.t228487 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t228487 = (function (add_model,meta228488){
this.add_model = add_model;
this.meta228488 = meta228488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t228487.cljs$lang$type = true;
foundation.test.components.datagrid.t228487.cljs$lang$ctorStr = "foundation.test.components.datagrid/t228487";
foundation.test.components.datagrid.t228487.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t228487");
});
foundation.test.components.datagrid.t228487.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t228487.prototype.foundation$app$ui$IClickable$_click$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.println.call(null,"CLICK!");
});
foundation.test.components.datagrid.t228487.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t228487.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.Keyword(null,"#new","#new",1015055887);
});
foundation.test.components.datagrid.t228487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_228489){var self__ = this;
var _228489__$1 = this;return self__.meta228488;
});
foundation.test.components.datagrid.t228487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_228489,meta228488__$1){var self__ = this;
var _228489__$1 = this;return (new foundation.test.components.datagrid.t228487(self__.add_model,meta228488__$1));
});
foundation.test.components.datagrid.__GT_t228487 = (function __GT_t228487(add_model__$1,meta228488){return (new foundation.test.components.datagrid.t228487(add_model__$1,meta228488));
});
}
return (new foundation.test.components.datagrid.t228487(add_model,null));
});
foundation.test.components.datagrid.datagrid = (function datagrid(id,state){if(typeof foundation.test.components.datagrid.t228493 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t228493 = (function (state,id,datagrid,meta228494){
this.state = state;
this.id = id;
this.datagrid = datagrid;
this.meta228494 = meta228494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t228493.cljs$lang$type = true;
foundation.test.components.datagrid.t228493.cljs$lang$ctorStr = "foundation.test.components.datagrid/t228493";
foundation.test.components.datagrid.t228493.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t228493");
});
foundation.test.components.datagrid.t228493.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t228493.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t228493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_228495){var self__ = this;
var _228495__$1 = this;return self__.meta228494;
});
foundation.test.components.datagrid.t228493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_228495,meta228494__$1){var self__ = this;
var _228495__$1 = this;return (new foundation.test.components.datagrid.t228493(self__.state,self__.id,self__.datagrid,meta228494__$1));
});
foundation.test.components.datagrid.__GT_t228493 = (function __GT_t228493(state__$1,id__$1,datagrid__$1,meta228494){return (new foundation.test.components.datagrid.t228493(state__$1,id__$1,datagrid__$1,meta228494));
});
}
return (new foundation.test.components.datagrid.t228493(state,id,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map