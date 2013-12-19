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
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom196205 = document.createElement("div");dom196205.className = "autocomplete";
dom196205.appendChild((function (){var dom196206 = document.createElement("input");dom196206.className = "form-control";
if("text")
{dom196206.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom196206.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom196206;
})());
return dom196205;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom196213 = document.createElement("thead");dom196213.setAttribute("id","datagrid-header");
dom196213.appendChild((function (){var dom196214 = document.createElement("tr");dom196214.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__196215(s__196216){return (new cljs.core.LazySeq(null,(function (){var s__196216__$1 = s__196216;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__196216__$1);if(temp__4092__auto__)
{var s__196216__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__196216__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__196216__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__196218 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__196217 = 0;while(true){
if((i__196217 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__196217);cljs.core.chunk_append.call(null,b__196218,foundation.test.cells.th.call(null,col));
{
var G__196219 = (i__196217 + 1);
i__196217 = G__196219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196218),iter__196215.call(null,cljs.core.chunk_rest.call(null,s__196216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196218),null);
}
} else
{var col = cljs.core.first.call(null,s__196216__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__196215.call(null,cljs.core.rest.call(null,s__196216__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom196214;
})());
return dom196213;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom196225 = document.createElement("tr");dom196225.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__196226(s__196227){return (new cljs.core.LazySeq(null,(function (){var s__196227__$1 = s__196227;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__196227__$1);if(temp__4092__auto__)
{var s__196227__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__196227__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__196227__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__196229 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__196228 = 0;while(true){
if((i__196228 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__196228);cljs.core.chunk_append.call(null,b__196229,foundation.test.cells.td.call(null,col,model));
{
var G__196230 = (i__196228 + 1);
i__196228 = G__196230;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196229),iter__196226.call(null,cljs.core.chunk_rest.call(null,s__196227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196229),null);
}
} else
{var col = cljs.core.first.call(null,s__196227__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__196226.call(null,cljs.core.rest.call(null,s__196227__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom196225;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom196236 = document.createElement("tbody");dom196236.className = "datagrid-tbody";
dom196236.setAttribute("id","datagrid-body");
dom196236.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__196237(s__196238){return (new cljs.core.LazySeq(null,(function (){var s__196238__$1 = s__196238;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__196238__$1);if(temp__4092__auto__)
{var s__196238__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__196238__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__196238__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__196240 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__196239 = 0;while(true){
if((i__196239 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__196239);cljs.core.chunk_append.call(null,b__196240,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__196241 = (i__196239 + 1);
i__196239 = G__196241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196240),iter__196237.call(null,cljs.core.chunk_rest.call(null,s__196238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__196240),null);
}
} else
{var model = cljs.core.first.call(null,s__196238__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__196237.call(null,cljs.core.rest.call(null,s__196238__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom196236;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom196253 = document.createElement("ol");dom196253.className = "breadcrumb";
dom196253.appendChild((function (){var dom196254 = document.createElement("li");dom196254.className = "active";
dom196254.setAttribute("id","account");
dom196254.appendChild((function (){var dom196255 = document.createElement("div");dom196255.className = "arrow-down";
return dom196255;
})());
dom196254.appendChild((function (){var dom196256 = document.createElement("a");dom196256.appendChild(document.createTextNode("Accounts"));
return dom196256;
})());
dom196254.appendChild((function (){var dom196257 = document.createElement("div");dom196257.className = "arrow-up";
return dom196257;
})());
return dom196254;
})());
dom196253.appendChild((function (){var dom196258 = document.createElement("li");dom196258.className = "hidden";
dom196258.setAttribute("id","campaign");
dom196258.appendChild((function (){var dom196259 = document.createElement("a");dom196259.appendChild(document.createTextNode("Campaigns"));
return dom196259;
})());
return dom196258;
})());
dom196253.appendChild((function (){var dom196260 = document.createElement("li");dom196260.className = "hidden";
dom196260.setAttribute("id","line_item");
dom196260.appendChild((function (){var dom196261 = document.createElement("a");dom196261.appendChild(document.createTextNode("Line Items"));
return dom196261;
})());
return dom196260;
})());
dom196253.appendChild((function (){var dom196262 = document.createElement("li");dom196262.className = "hidden";
dom196262.setAttribute("id","promoted_tweet");
dom196262.appendChild((function (){var dom196263 = document.createElement("a");dom196263.appendChild(document.createTextNode("Promoted Products"));
return dom196263;
})());
return dom196262;
})());
return dom196253;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(id,model,coll){var dom196279 = document.createElement("div");dom196279.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom196279.setAttribute("id",id);
} else
{}
dom196279.appendChild((function (){var dom196280 = document.createElement("div");dom196280.className = "panel-heading";
dom196280.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom196280.appendChild((function (){var dom196281 = document.createElement("form");dom196281.className = "form-inline pull-right";
dom196281.appendChild((function (){var dom196282 = document.createElement("div");dom196282.className = "form-group";
dom196282.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom196282;
})());
return dom196281;
})());
return dom196280;
})());
dom196279.appendChild((function (){var dom196283 = document.createElement("div");dom196283.className = "panel-body";
dom196283.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom196283;
})());
dom196279.appendChild((function (){var dom196284 = document.createElement("div");dom196284.className = "panel-footer";
dom196284.appendChild((function (){var dom196285 = document.createElement("div");dom196285.className = "form-inline";
dom196285.appendChild((function (){var dom196286 = document.createElement("div");dom196286.className = "form-group";
dom196286.appendChild((function (){var dom196287 = document.createElement("button");dom196287.className = "btn btn-success btn-sm";
dom196287.setAttribute("id","new");
dom196287.appendChild(document.createTextNode("New"));
return dom196287;
})());
return dom196286;
})());
dom196285.appendChild((function (){var dom196288 = document.createElement("div");dom196288.className = "form-group";
dom196288.appendChild((function (){var dom196289 = document.createElement("button");dom196289.className = "btn btn-info btn-sm disabled";
dom196289.setAttribute("id","save");
dom196289.appendChild(document.createTextNode("Save"));
return dom196289;
})());
return dom196288;
})());
dom196285.appendChild((function (){var dom196290 = document.createElement("div");dom196290.className = "form-group";
dom196290.appendChild((function (){var dom196291 = document.createElement("button");dom196291.className = "btn btn-danger btn-sm disabled";
dom196291.setAttribute("id","delete");
dom196291.appendChild(document.createTextNode("Delete"));
return dom196291;
})());
return dom196290;
})());
dom196285.appendChild((function (){var dom196292 = document.createElement("div");dom196292.className = "form-group";
dom196292.appendChild((function (){var dom196293 = document.createElement("button");dom196293.className = "btn btn-primary btn-sm disabled";
dom196293.setAttribute("id","dupe");
dom196293.appendChild(document.createTextNode("Duplicate"));
return dom196293;
})());
return dom196292;
})());
return dom196285;
})());
return dom196284;
})());
return dom196279;
});
foundation.test.components.datagrid.datagrid = (function datagrid(id,state){if(typeof foundation.test.components.datagrid.t196297 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t196297 = (function (state,id,datagrid,meta196298){
this.state = state;
this.id = id;
this.datagrid = datagrid;
this.meta196298 = meta196298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t196297.cljs$lang$type = true;
foundation.test.components.datagrid.t196297.cljs$lang$ctorStr = "foundation.test.components.datagrid/t196297";
foundation.test.components.datagrid.t196297.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t196297");
});
foundation.test.components.datagrid.t196297.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t196297.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t196297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_196299){var self__ = this;
var _196299__$1 = this;return self__.meta196298;
});
foundation.test.components.datagrid.t196297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_196299,meta196298__$1){var self__ = this;
var _196299__$1 = this;return (new foundation.test.components.datagrid.t196297(self__.state,self__.id,self__.datagrid,meta196298__$1));
});
foundation.test.components.datagrid.__GT_t196297 = (function __GT_t196297(state__$1,id__$1,datagrid__$1,meta196298){return (new foundation.test.components.datagrid.t196297(state__$1,id__$1,datagrid__$1,meta196298));
});
}
return (new foundation.test.components.datagrid.t196297(state,id,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map