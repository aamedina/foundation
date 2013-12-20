// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('foundation.test.templates');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.cells');
goog.require('dommy.template');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('foundation.test.models');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom277503 = document.createElement("div");dom277503.className = "autocomplete";
dom277503.appendChild((function (){var dom277504 = document.createElement("input");dom277504.className = "form-control";
if("text")
{dom277504.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom277504.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom277504;
})());
return dom277503;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom277511 = document.createElement("thead");dom277511.setAttribute("id","datagrid-header");
dom277511.appendChild((function (){var dom277512 = document.createElement("tr");dom277512.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__277513(s__277514){return (new cljs.core.LazySeq(null,(function (){var s__277514__$1 = s__277514;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__277514__$1);if(temp__4092__auto__)
{var s__277514__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__277514__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__277514__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__277516 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__277515 = 0;while(true){
if((i__277515 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__277515);cljs.core.chunk_append.call(null,b__277516,foundation.test.cells.th.call(null,col));
{
var G__277517 = (i__277515 + 1);
i__277515 = G__277517;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277516),iter__277513.call(null,cljs.core.chunk_rest.call(null,s__277514__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277516),null);
}
} else
{var col = cljs.core.first.call(null,s__277514__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__277513.call(null,cljs.core.rest.call(null,s__277514__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom277512;
})());
return dom277511;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom277523 = document.createElement("tr");dom277523.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__277524(s__277525){return (new cljs.core.LazySeq(null,(function (){var s__277525__$1 = s__277525;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__277525__$1);if(temp__4092__auto__)
{var s__277525__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__277525__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__277525__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__277527 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__277526 = 0;while(true){
if((i__277526 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__277526);cljs.core.chunk_append.call(null,b__277527,foundation.test.cells.td.call(null,col,model));
{
var G__277528 = (i__277526 + 1);
i__277526 = G__277528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277527),iter__277524.call(null,cljs.core.chunk_rest.call(null,s__277525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277527),null);
}
} else
{var col = cljs.core.first.call(null,s__277525__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__277524.call(null,cljs.core.rest.call(null,s__277525__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom277523;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom277534 = document.createElement("tbody");dom277534.className = "datagrid-tbody";
dom277534.setAttribute("id","datagrid-body");
dom277534.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__277535(s__277536){return (new cljs.core.LazySeq(null,(function (){var s__277536__$1 = s__277536;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__277536__$1);if(temp__4092__auto__)
{var s__277536__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__277536__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__277536__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__277538 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__277537 = 0;while(true){
if((i__277537 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__277537);cljs.core.chunk_append.call(null,b__277538,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__277539 = (i__277537 + 1);
i__277537 = G__277539;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277538),iter__277535.call(null,cljs.core.chunk_rest.call(null,s__277536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__277538),null);
}
} else
{var model = cljs.core.first.call(null,s__277536__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__277535.call(null,cljs.core.rest.call(null,s__277536__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom277534;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom277551 = document.createElement("ol");dom277551.className = "breadcrumb";
dom277551.appendChild((function (){var dom277552 = document.createElement("li");dom277552.className = "active";
dom277552.setAttribute("id","account");
dom277552.appendChild((function (){var dom277553 = document.createElement("div");dom277553.className = "arrow-down";
return dom277553;
})());
dom277552.appendChild((function (){var dom277554 = document.createElement("a");dom277554.appendChild(document.createTextNode("Accounts"));
return dom277554;
})());
dom277552.appendChild((function (){var dom277555 = document.createElement("div");dom277555.className = "arrow-up";
return dom277555;
})());
return dom277552;
})());
dom277551.appendChild((function (){var dom277556 = document.createElement("li");dom277556.className = "hidden";
dom277556.setAttribute("id","campaign");
dom277556.appendChild((function (){var dom277557 = document.createElement("a");dom277557.appendChild(document.createTextNode("Campaigns"));
return dom277557;
})());
return dom277556;
})());
dom277551.appendChild((function (){var dom277558 = document.createElement("li");dom277558.className = "hidden";
dom277558.setAttribute("id","line_item");
dom277558.appendChild((function (){var dom277559 = document.createElement("a");dom277559.appendChild(document.createTextNode("Line Items"));
return dom277559;
})());
return dom277558;
})());
dom277551.appendChild((function (){var dom277560 = document.createElement("li");dom277560.className = "hidden";
dom277560.setAttribute("id","promoted_tweet");
dom277560.appendChild((function (){var dom277561 = document.createElement("a");dom277561.appendChild(document.createTextNode("Promoted Products"));
return dom277561;
})());
return dom277560;
})());
return dom277551;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(){if(typeof foundation.test.components.datagrid.t277565 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t277565 = (function (new_button,meta277566){
this.new_button = new_button;
this.meta277566 = meta277566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t277565.cljs$lang$type = true;
foundation.test.components.datagrid.t277565.cljs$lang$ctorStr = "foundation.test.components.datagrid/t277565";
foundation.test.components.datagrid.t277565.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t277565");
});
foundation.test.components.datagrid.t277565.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t277565.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t277565.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t277565.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.println.call(null,"CLICK!");
});
foundation.test.components.datagrid.t277565.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t277565.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t277565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_277567){var self__ = this;
var _277567__$1 = this;return self__.meta277566;
});
foundation.test.components.datagrid.t277565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_277567,meta277566__$1){var self__ = this;
var _277567__$1 = this;return (new foundation.test.components.datagrid.t277565(self__.new_button,meta277566__$1));
});
foundation.test.components.datagrid.__GT_t277565 = (function __GT_t277565(new_button__$1,meta277566){return (new foundation.test.components.datagrid.t277565(new_button__$1,meta277566));
});
}
return (new foundation.test.components.datagrid.t277565(new_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(id,model,coll){var dom277582 = document.createElement("div");dom277582.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom277582.setAttribute("id",id);
} else
{}
dom277582.appendChild((function (){var dom277583 = document.createElement("div");dom277583.className = "panel-heading";
dom277583.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom277583.appendChild((function (){var dom277584 = document.createElement("form");dom277584.className = "form-inline pull-right";
dom277584.appendChild((function (){var dom277585 = document.createElement("div");dom277585.className = "form-group";
dom277585.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom277585;
})());
return dom277584;
})());
return dom277583;
})());
dom277582.appendChild((function (){var dom277586 = document.createElement("div");dom277586.className = "panel-body";
dom277586.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom277586;
})());
dom277582.appendChild((function (){var dom277587 = document.createElement("div");dom277587.className = "panel-footer";
dom277587.appendChild((function (){var dom277588 = document.createElement("div");dom277588.className = "form-inline";
dom277588.appendChild((function (){var dom277589 = document.createElement("div");dom277589.className = "form-group";
dom277589.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null)));
return dom277589;
})());
dom277588.appendChild((function (){var dom277590 = document.createElement("div");dom277590.className = "form-group";
dom277590.appendChild((function (){var dom277591 = document.createElement("button");dom277591.className = "btn btn-info btn-sm disabled";
dom277591.setAttribute("id","save");
dom277591.appendChild(document.createTextNode("Save"));
return dom277591;
})());
return dom277590;
})());
dom277588.appendChild((function (){var dom277592 = document.createElement("div");dom277592.className = "form-group";
dom277592.appendChild((function (){var dom277593 = document.createElement("button");dom277593.className = "btn btn-danger btn-sm disabled";
dom277593.setAttribute("id","delete");
dom277593.appendChild(document.createTextNode("Delete"));
return dom277593;
})());
return dom277592;
})());
dom277588.appendChild((function (){var dom277594 = document.createElement("div");dom277594.className = "form-group";
dom277594.appendChild((function (){var dom277595 = document.createElement("button");dom277595.className = "btn btn-primary btn-sm disabled";
dom277595.setAttribute("id","dupe");
dom277595.appendChild(document.createTextNode("Duplicate"));
return dom277595;
})());
return dom277594;
})());
return dom277588;
})());
return dom277587;
})());
return dom277582;
});
foundation.test.components.datagrid.datagrid = (function datagrid(id,state){if(typeof foundation.test.components.datagrid.t277599 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t277599 = (function (state,id,datagrid,meta277600){
this.state = state;
this.id = id;
this.datagrid = datagrid;
this.meta277600 = meta277600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t277599.cljs$lang$type = true;
foundation.test.components.datagrid.t277599.cljs$lang$ctorStr = "foundation.test.components.datagrid/t277599";
foundation.test.components.datagrid.t277599.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t277599");
});
foundation.test.components.datagrid.t277599.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t277599.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t277599.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t277599.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t277599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_277601){var self__ = this;
var _277601__$1 = this;return self__.meta277600;
});
foundation.test.components.datagrid.t277599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_277601,meta277600__$1){var self__ = this;
var _277601__$1 = this;return (new foundation.test.components.datagrid.t277599(self__.state,self__.id,self__.datagrid,meta277600__$1));
});
foundation.test.components.datagrid.__GT_t277599 = (function __GT_t277599(state__$1,id__$1,datagrid__$1,meta277600){return (new foundation.test.components.datagrid.t277599(state__$1,id__$1,datagrid__$1,meta277600));
});
}
return (new foundation.test.components.datagrid.t277599(state,id,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map