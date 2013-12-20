// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.components.datagrid');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.test.templates');
goog.require('foundation.app.message');
goog.require('foundation.app.ui');
goog.require('dommy.core');
goog.require('foundation.test.cells');
goog.require('dommy.template');
goog.require('foundation.test.templates');
goog.require('foundation.test.models');
goog.require('dommy.template');
goog.require('foundation.app.message');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom331299 = document.createElement("div");dom331299.className = "autocomplete";
dom331299.appendChild((function (){var dom331300 = document.createElement("input");dom331300.className = "form-control";
if("text")
{dom331300.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom331300.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom331300;
})());
return dom331299;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom331307 = document.createElement("thead");dom331307.setAttribute("id","datagrid-header");
dom331307.appendChild((function (){var dom331308 = document.createElement("tr");dom331308.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__331309(s__331310){return (new cljs.core.LazySeq(null,(function (){var s__331310__$1 = s__331310;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__331310__$1);if(temp__4092__auto__)
{var s__331310__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__331310__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__331310__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__331312 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__331311 = 0;while(true){
if((i__331311 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__331311);cljs.core.chunk_append.call(null,b__331312,foundation.test.cells.th.call(null,col));
{
var G__331313 = (i__331311 + 1);
i__331311 = G__331313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331312),iter__331309.call(null,cljs.core.chunk_rest.call(null,s__331310__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331312),null);
}
} else
{var col = cljs.core.first.call(null,s__331310__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__331309.call(null,cljs.core.rest.call(null,s__331310__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom331308;
})());
return dom331307;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom331319 = document.createElement("tr");dom331319.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__331320(s__331321){return (new cljs.core.LazySeq(null,(function (){var s__331321__$1 = s__331321;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__331321__$1);if(temp__4092__auto__)
{var s__331321__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__331321__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__331321__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__331323 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__331322 = 0;while(true){
if((i__331322 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__331322);cljs.core.chunk_append.call(null,b__331323,foundation.test.cells.td.call(null,col,model));
{
var G__331324 = (i__331322 + 1);
i__331322 = G__331324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331323),iter__331320.call(null,cljs.core.chunk_rest.call(null,s__331321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331323),null);
}
} else
{var col = cljs.core.first.call(null,s__331321__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__331320.call(null,cljs.core.rest.call(null,s__331321__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom331319;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){var dom331330 = document.createElement("tbody");dom331330.className = "datagrid-tbody";
dom331330.setAttribute("id","datagrid-body");
dom331330.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__331331(s__331332){return (new cljs.core.LazySeq(null,(function (){var s__331332__$1 = s__331332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__331332__$1);if(temp__4092__auto__)
{var s__331332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__331332__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__331332__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__331334 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__331333 = 0;while(true){
if((i__331333 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__331333);cljs.core.chunk_append.call(null,b__331334,foundation.test.components.datagrid.datagrid_row.call(null,model,columns));
{
var G__331335 = (i__331333 + 1);
i__331333 = G__331335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331334),iter__331331.call(null,cljs.core.chunk_rest.call(null,s__331332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__331334),null);
}
} else
{var model = cljs.core.first.call(null,s__331332__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,columns),iter__331331.call(null,cljs.core.rest.call(null,s__331332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,coll);
})()));
return dom331330;
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom331347 = document.createElement("ol");dom331347.className = "breadcrumb";
dom331347.appendChild((function (){var dom331348 = document.createElement("li");dom331348.className = "active";
dom331348.setAttribute("id","account");
dom331348.appendChild((function (){var dom331349 = document.createElement("div");dom331349.className = "arrow-down";
return dom331349;
})());
dom331348.appendChild((function (){var dom331350 = document.createElement("a");dom331350.appendChild(document.createTextNode("Accounts"));
return dom331350;
})());
dom331348.appendChild((function (){var dom331351 = document.createElement("div");dom331351.className = "arrow-up";
return dom331351;
})());
return dom331348;
})());
dom331347.appendChild((function (){var dom331352 = document.createElement("li");dom331352.className = "hidden";
dom331352.setAttribute("id","campaign");
dom331352.appendChild((function (){var dom331353 = document.createElement("a");dom331353.appendChild(document.createTextNode("Campaigns"));
return dom331353;
})());
return dom331352;
})());
dom331347.appendChild((function (){var dom331354 = document.createElement("li");dom331354.className = "hidden";
dom331354.setAttribute("id","line_item");
dom331354.appendChild((function (){var dom331355 = document.createElement("a");dom331355.appendChild(document.createTextNode("Line Items"));
return dom331355;
})());
return dom331354;
})());
dom331347.appendChild((function (){var dom331356 = document.createElement("li");dom331356.className = "hidden";
dom331356.setAttribute("id","promoted_tweet");
dom331356.appendChild((function (){var dom331357 = document.createElement("a");dom331357.appendChild(document.createTextNode("Promoted Products"));
return dom331357;
})());
return dom331356;
})());
return dom331347;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(input){if(typeof foundation.test.components.datagrid.t331361 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t331361 = (function (input,new_button,meta331362){
this.input = input;
this.new_button = new_button;
this.meta331362 = meta331362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t331361.cljs$lang$type = true;
foundation.test.components.datagrid.t331361.cljs$lang$ctorStr = "foundation.test.components.datagrid/t331361";
foundation.test.components.datagrid.t331361.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t331361");
});
foundation.test.components.datagrid.t331361.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t331361.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t331361.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t331361.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t331361.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t331361.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t331361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_331363){var self__ = this;
var _331363__$1 = this;return self__.meta331362;
});
foundation.test.components.datagrid.t331361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_331363,meta331362__$1){var self__ = this;
var _331363__$1 = this;return (new foundation.test.components.datagrid.t331361(self__.input,self__.new_button,meta331362__$1));
});
foundation.test.components.datagrid.__GT_t331361 = (function __GT_t331361(input__$1,new_button__$1,meta331362){return (new foundation.test.components.datagrid.t331361(input__$1,new_button__$1,meta331362));
});
}
return (new foundation.test.components.datagrid.t331361(input,new_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(input,id,model,coll){var dom331378 = document.createElement("div");dom331378.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom331378.setAttribute("id",id);
} else
{}
dom331378.appendChild((function (){var dom331379 = document.createElement("div");dom331379.className = "panel-heading";
dom331379.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom331379.appendChild((function (){var dom331380 = document.createElement("form");dom331380.className = "form-inline pull-right";
dom331380.appendChild((function (){var dom331381 = document.createElement("div");dom331381.className = "form-group";
dom331381.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom331381;
})());
return dom331380;
})());
return dom331379;
})());
dom331378.appendChild((function (){var dom331382 = document.createElement("div");dom331382.className = "panel-body";
dom331382.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom331382;
})());
dom331378.appendChild((function (){var dom331383 = document.createElement("div");dom331383.className = "panel-footer";
dom331383.appendChild((function (){var dom331384 = document.createElement("div");dom331384.className = "form-inline";
dom331384.appendChild((function (){var dom331385 = document.createElement("div");dom331385.className = "form-group";
dom331385.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null,input)));
return dom331385;
})());
dom331384.appendChild((function (){var dom331386 = document.createElement("div");dom331386.className = "form-group";
dom331386.appendChild((function (){var dom331387 = document.createElement("button");dom331387.className = "btn btn-info btn-sm disabled";
dom331387.setAttribute("id","save");
dom331387.appendChild(document.createTextNode("Save"));
return dom331387;
})());
return dom331386;
})());
dom331384.appendChild((function (){var dom331388 = document.createElement("div");dom331388.className = "form-group";
dom331388.appendChild((function (){var dom331389 = document.createElement("button");dom331389.className = "btn btn-danger btn-sm disabled";
dom331389.setAttribute("id","delete");
dom331389.appendChild(document.createTextNode("Delete"));
return dom331389;
})());
return dom331388;
})());
dom331384.appendChild((function (){var dom331390 = document.createElement("div");dom331390.className = "form-group";
dom331390.appendChild((function (){var dom331391 = document.createElement("button");dom331391.className = "btn btn-primary btn-sm disabled";
dom331391.setAttribute("id","dupe");
dom331391.appendChild(document.createTextNode("Duplicate"));
return dom331391;
})());
return dom331390;
})());
return dom331384;
})());
return dom331383;
})());
return dom331378;
});
foundation.test.components.datagrid.datagrid = (function datagrid(input,id,state){if(typeof foundation.test.components.datagrid.t331395 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t331395 = (function (state,id,input,datagrid,meta331396){
this.state = state;
this.id = id;
this.input = input;
this.datagrid = datagrid;
this.meta331396 = meta331396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t331395.cljs$lang$type = true;
foundation.test.components.datagrid.t331395.cljs$lang$ctorStr = "foundation.test.components.datagrid/t331395";
foundation.test.components.datagrid.t331395.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t331395");
});
foundation.test.components.datagrid.t331395.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t331395.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t331395.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t331395.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.input,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t331395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_331397){var self__ = this;
var _331397__$1 = this;return self__.meta331396;
});
foundation.test.components.datagrid.t331395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_331397,meta331396__$1){var self__ = this;
var _331397__$1 = this;return (new foundation.test.components.datagrid.t331395(self__.state,self__.id,self__.input,self__.datagrid,meta331396__$1));
});
foundation.test.components.datagrid.__GT_t331395 = (function __GT_t331395(state__$1,id__$1,input__$1,datagrid__$1,meta331396){return (new foundation.test.components.datagrid.t331395(state__$1,id__$1,input__$1,datagrid__$1,meta331396));
});
}
return (new foundation.test.components.datagrid.t331395(state,id,input,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map