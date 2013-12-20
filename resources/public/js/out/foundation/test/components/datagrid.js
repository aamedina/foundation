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
goog.require('goog.style');
goog.require('foundation.app.message');
goog.require('foundation.test.models');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('foundation.test.cells');
goog.require('foundation.app.ui');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.components.datagrid.datagrid_filter = (function datagrid_filter(){var dom400061 = document.createElement("div");dom400061.className = "autocomplete";
dom400061.appendChild((function (){var dom400062 = document.createElement("input");dom400062.className = "form-control";
if("text")
{dom400062.setAttribute("type","text");
} else
{}
if("What are you looking for?")
{dom400062.setAttribute("placeholder","What are you looking for?");
} else
{}
return dom400062;
})());
return dom400061;
});
foundation.test.components.datagrid.datagrid_header = (function datagrid_header(columns){var dom400069 = document.createElement("thead");dom400069.setAttribute("id","datagrid-header");
dom400069.appendChild((function (){var dom400070 = document.createElement("tr");dom400070.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__400071(s__400072){return (new cljs.core.LazySeq(null,(function (){var s__400072__$1 = s__400072;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__400072__$1);if(temp__4092__auto__)
{var s__400072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__400072__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__400072__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__400074 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__400073 = 0;while(true){
if((i__400073 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__400073);cljs.core.chunk_append.call(null,b__400074,foundation.test.cells.th.call(null,col));
{
var G__400075 = (i__400073 + 1);
i__400073 = G__400075;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400074),iter__400071.call(null,cljs.core.chunk_rest.call(null,s__400072__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400074),null);
}
} else
{var col = cljs.core.first.call(null,s__400072__$2);return cljs.core.cons.call(null,foundation.test.cells.th.call(null,col),iter__400071.call(null,cljs.core.rest.call(null,s__400072__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom400070;
})());
return dom400069;
});
foundation.test.components.datagrid.datagrid_row = (function datagrid_row(model,columns){var dom400081 = document.createElement("tr");dom400081.appendChild(dommy.template.__GT_node_like.call(null,(function (){var iter__8921__auto__ = (function iter__400082(s__400083){return (new cljs.core.LazySeq(null,(function (){var s__400083__$1 = s__400083;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__400083__$1);if(temp__4092__auto__)
{var s__400083__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__400083__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__400083__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__400085 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__400084 = 0;while(true){
if((i__400084 < size__8920__auto__))
{var col = cljs.core._nth.call(null,c__8919__auto__,i__400084);cljs.core.chunk_append.call(null,b__400085,foundation.test.cells.td.call(null,col,model));
{
var G__400086 = (i__400084 + 1);
i__400084 = G__400086;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400085),iter__400082.call(null,cljs.core.chunk_rest.call(null,s__400083__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400085),null);
}
} else
{var col = cljs.core.first.call(null,s__400083__$2);return cljs.core.cons.call(null,foundation.test.cells.td.call(null,col,model),iter__400082.call(null,cljs.core.rest.call(null,s__400083__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,columns);
})()));
return dom400081;
});
foundation.test.components.datagrid.datagrid_body = (function datagrid_body(coll,columns){if(typeof foundation.test.components.datagrid.t400094 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400094 = (function (columns,coll,datagrid_body,meta400095){
this.columns = columns;
this.coll = coll;
this.datagrid_body = datagrid_body;
this.meta400095 = meta400095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400094.cljs$lang$type = true;
foundation.test.components.datagrid.t400094.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400094";
foundation.test.components.datagrid.t400094.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400094");
});
foundation.test.components.datagrid.t400094.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t400094.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template.node.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t400094.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400094.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody#datagrid-body.datagrid-tbody","tbody#datagrid-body.datagrid-tbody",3858987303),(function (){var iter__8921__auto__ = (function iter__400097(s__400098){return (new cljs.core.LazySeq(null,(function (){var s__400098__$1 = s__400098;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__400098__$1);if(temp__4092__auto__)
{var s__400098__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__400098__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__400098__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__400100 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__400099 = 0;while(true){
if((i__400099 < size__8920__auto__))
{var model = cljs.core._nth.call(null,c__8919__auto__,i__400099);cljs.core.chunk_append.call(null,b__400100,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns));
{
var G__400101 = (i__400099 + 1);
i__400099 = G__400101;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400100),iter__400097.call(null,cljs.core.chunk_rest.call(null,s__400098__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400100),null);
}
} else
{var model = cljs.core.first.call(null,s__400098__$2);return cljs.core.cons.call(null,foundation.test.components.datagrid.datagrid_row.call(null,model,self__.columns),iter__400097.call(null,cljs.core.rest.call(null,s__400098__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,self__.coll);
})()], null);
});
foundation.test.components.datagrid.t400094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400096){var self__ = this;
var _400096__$1 = this;return self__.meta400095;
});
foundation.test.components.datagrid.t400094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400096,meta400095__$1){var self__ = this;
var _400096__$1 = this;return (new foundation.test.components.datagrid.t400094(self__.columns,self__.coll,self__.datagrid_body,meta400095__$1));
});
foundation.test.components.datagrid.__GT_t400094 = (function __GT_t400094(columns__$1,coll__$1,datagrid_body__$1,meta400095){return (new foundation.test.components.datagrid.t400094(columns__$1,coll__$1,datagrid_body__$1,meta400095));
});
}
return (new foundation.test.components.datagrid.t400094(columns,coll,datagrid_body,null));
});
foundation.test.components.datagrid.datagrid_breadcrumb = (function datagrid_breadcrumb(){var dom400113 = document.createElement("ol");dom400113.className = "breadcrumb";
dom400113.appendChild((function (){var dom400114 = document.createElement("li");dom400114.className = "active";
dom400114.setAttribute("id","account");
dom400114.appendChild((function (){var dom400115 = document.createElement("div");dom400115.className = "arrow-down";
return dom400115;
})());
dom400114.appendChild((function (){var dom400116 = document.createElement("a");dom400116.appendChild(document.createTextNode("Accounts"));
return dom400116;
})());
dom400114.appendChild((function (){var dom400117 = document.createElement("div");dom400117.className = "arrow-up";
return dom400117;
})());
return dom400114;
})());
dom400113.appendChild((function (){var dom400118 = document.createElement("li");dom400118.className = "hidden";
dom400118.setAttribute("id","campaign");
dom400118.appendChild((function (){var dom400119 = document.createElement("a");dom400119.appendChild(document.createTextNode("Campaigns"));
return dom400119;
})());
return dom400118;
})());
dom400113.appendChild((function (){var dom400120 = document.createElement("li");dom400120.className = "hidden";
dom400120.setAttribute("id","line_item");
dom400120.appendChild((function (){var dom400121 = document.createElement("a");dom400121.appendChild(document.createTextNode("Line Items"));
return dom400121;
})());
return dom400120;
})());
dom400113.appendChild((function (){var dom400122 = document.createElement("li");dom400122.className = "hidden";
dom400122.setAttribute("id","promoted_tweet");
dom400122.appendChild((function (){var dom400123 = document.createElement("a");dom400123.appendChild(document.createTextNode("Promoted Products"));
return dom400123;
})());
return dom400122;
})());
return dom400113;
});
foundation.test.components.datagrid.datagrid_table = (function datagrid_table(model,coll){return dommy.template.__GT_node_like.call(null,(function (){var cols = foundation.test.models.columns.call(null,model);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#datagrid-table.table","table#datagrid-table.table",2230740568),foundation.test.components.datagrid.datagrid_header.call(null,cols),foundation.test.components.datagrid.datagrid_body.call(null,coll,cols)], null);
})());
});
foundation.test.components.datagrid.new_button = (function new_button(input){if(typeof foundation.test.components.datagrid.t400127 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400127 = (function (input,new_button,meta400128){
this.input = input;
this.new_button = new_button;
this.meta400128 = meta400128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400127.cljs$lang$type = true;
foundation.test.components.datagrid.t400127.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400127";
foundation.test.components.datagrid.t400127.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400127");
});
foundation.test.components.datagrid.t400127.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t400127.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t400127.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t400127.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"create","create",3956577390),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t400127.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400127.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#new.btn.btn-success.btn-sm","button#new.btn.btn-success.btn-sm",634778506),"New"], null);
});
foundation.test.components.datagrid.t400127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400129){var self__ = this;
var _400129__$1 = this;return self__.meta400128;
});
foundation.test.components.datagrid.t400127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400129,meta400128__$1){var self__ = this;
var _400129__$1 = this;return (new foundation.test.components.datagrid.t400127(self__.input,self__.new_button,meta400128__$1));
});
foundation.test.components.datagrid.__GT_t400127 = (function __GT_t400127(input__$1,new_button__$1,meta400128){return (new foundation.test.components.datagrid.t400127(input__$1,new_button__$1,meta400128));
});
}
return (new foundation.test.components.datagrid.t400127(input,new_button,null));
});
foundation.test.components.datagrid.save_button = (function save_button(input){if(typeof foundation.test.components.datagrid.t400133 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400133 = (function (input,save_button,meta400134){
this.input = input;
this.save_button = save_button;
this.meta400134 = meta400134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400133.cljs$lang$type = true;
foundation.test.components.datagrid.t400133.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400133";
foundation.test.components.datagrid.t400133.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400133");
});
foundation.test.components.datagrid.t400133.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t400133.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t400133.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t400133.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"update","update",4470025275),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t400133.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400133.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#save.btn.btn-info.btn-sm.disabled","button#save.btn.btn-info.btn-sm.disabled",4613045172),"Save"], null);
});
foundation.test.components.datagrid.t400133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400135){var self__ = this;
var _400135__$1 = this;return self__.meta400134;
});
foundation.test.components.datagrid.t400133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400135,meta400134__$1){var self__ = this;
var _400135__$1 = this;return (new foundation.test.components.datagrid.t400133(self__.input,self__.save_button,meta400134__$1));
});
foundation.test.components.datagrid.__GT_t400133 = (function __GT_t400133(input__$1,save_button__$1,meta400134){return (new foundation.test.components.datagrid.t400133(input__$1,save_button__$1,meta400134));
});
}
return (new foundation.test.components.datagrid.t400133(input,save_button,null));
});
foundation.test.components.datagrid.delete_button = (function delete_button(input){if(typeof foundation.test.components.datagrid.t400139 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400139 = (function (input,delete_button,meta400140){
this.input = input;
this.delete_button = delete_button;
this.meta400140 = meta400140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400139.cljs$lang$type = true;
foundation.test.components.datagrid.t400139.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400139";
foundation.test.components.datagrid.t400139.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400139");
});
foundation.test.components.datagrid.t400139.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t400139.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t400139.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t400139.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"delete","delete",3973413149),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t400139.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400139.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#delete.btn.btn-danger.btn-sm.disabled","button#delete.btn.btn-danger.btn-sm.disabled",778132667),"Delete"], null);
});
foundation.test.components.datagrid.t400139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400141){var self__ = this;
var _400141__$1 = this;return self__.meta400140;
});
foundation.test.components.datagrid.t400139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400141,meta400140__$1){var self__ = this;
var _400141__$1 = this;return (new foundation.test.components.datagrid.t400139(self__.input,self__.delete_button,meta400140__$1));
});
foundation.test.components.datagrid.__GT_t400139 = (function __GT_t400139(input__$1,delete_button__$1,meta400140){return (new foundation.test.components.datagrid.t400139(input__$1,delete_button__$1,meta400140));
});
}
return (new foundation.test.components.datagrid.t400139(input,delete_button,null));
});
foundation.test.components.datagrid.dupe_button = (function dupe_button(input){if(typeof foundation.test.components.datagrid.t400145 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400145 = (function (input,dupe_button,meta400146){
this.input = input;
this.dupe_button = dupe_button;
this.meta400146 = meta400146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400145.cljs$lang$type = true;
foundation.test.components.datagrid.t400145.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400145";
foundation.test.components.datagrid.t400145.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400145");
});
foundation.test.components.datagrid.t400145.prototype.dommy$template$PElement$ = true;
foundation.test.components.datagrid.t400145.prototype.dommy$template$PElement$_elem$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return cljs.core.with_meta.call(null,dommy.template._elem.call(null,foundation.app.ui._render.call(null,x__$1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",3908964463),x__$1], null));
});
foundation.test.components.datagrid.t400145.prototype.foundation$app$ui$IClickable$ = true;
foundation.test.components.datagrid.t400145.prototype.foundation$app$ui$IClickable$_click$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;return cljs.core.async.put_BANG_.call(null,self__.input,new cljs.core.PersistentArrayMap.fromArray([foundation.app.message.type,new cljs.core.Keyword(null,"dupe","dupe",1016999352),foundation.app.message.path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datagrid","datagrid",2803534178),new cljs.core.Keyword(null,"collection","collection",3567559184)], null),new cljs.core.Keyword(null,"model","model",1117974171),cljs.core.PersistentArrayMap.EMPTY], true, false));
});
foundation.test.components.datagrid.t400145.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400145.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#dupe.btn.btn-primary.btn-sm.disabled","button#dupe.btn.btn-primary.btn-sm.disabled",777532203),"Duplicate"], null);
});
foundation.test.components.datagrid.t400145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400147){var self__ = this;
var _400147__$1 = this;return self__.meta400146;
});
foundation.test.components.datagrid.t400145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400147,meta400146__$1){var self__ = this;
var _400147__$1 = this;return (new foundation.test.components.datagrid.t400145(self__.input,self__.dupe_button,meta400146__$1));
});
foundation.test.components.datagrid.__GT_t400145 = (function __GT_t400145(input__$1,dupe_button__$1,meta400146){return (new foundation.test.components.datagrid.t400145(input__$1,dupe_button__$1,meta400146));
});
}
return (new foundation.test.components.datagrid.t400145(input,dupe_button,null));
});
foundation.test.components.datagrid.datagrid_template = (function datagrid_template(input,id,model,coll){var dom400159 = document.createElement("div");dom400159.className = "datagrid-container panel panel-default";
if(cljs.core.truth_(id))
{dom400159.setAttribute("id",id);
} else
{}
dom400159.appendChild((function (){var dom400160 = document.createElement("div");dom400160.className = "panel-heading";
dom400160.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_breadcrumb.call(null)));
dom400160.appendChild((function (){var dom400161 = document.createElement("form");dom400161.className = "form-inline pull-right";
dom400161.appendChild((function (){var dom400162 = document.createElement("div");dom400162.className = "form-group";
dom400162.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_filter.call(null)));
return dom400162;
})());
return dom400161;
})());
return dom400160;
})());
dom400159.appendChild((function (){var dom400163 = document.createElement("div");dom400163.className = "panel-body";
dom400163.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.datagrid_table.call(null,model,coll)));
return dom400163;
})());
dom400159.appendChild((function (){var dom400164 = document.createElement("div");dom400164.className = "panel-footer";
dom400164.appendChild((function (){var dom400165 = document.createElement("div");dom400165.className = "form-inline";
dom400165.appendChild((function (){var dom400166 = document.createElement("div");dom400166.className = "form-group";
dom400166.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.new_button.call(null,input)));
return dom400166;
})());
dom400165.appendChild((function (){var dom400167 = document.createElement("div");dom400167.className = "form-group";
dom400167.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.save_button.call(null,input)));
return dom400167;
})());
dom400165.appendChild((function (){var dom400168 = document.createElement("div");dom400168.className = "form-group";
dom400168.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.delete_button.call(null,input)));
return dom400168;
})());
dom400165.appendChild((function (){var dom400169 = document.createElement("div");dom400169.className = "form-group";
dom400169.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.components.datagrid.dupe_button.call(null,input)));
return dom400169;
})());
return dom400165;
})());
return dom400164;
})());
return dom400159;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (x){var x__$1 = this;return cljs.core.cons.call(null,cljs.core.first.call(null,x__$1),cljs.core.rest.call(null,x__$1));
});
HTMLCollection.prototype.cljs$core$ISeq$ = true;
HTMLCollection.prototype.cljs$core$ISeq$_first$arity$1 = (function (x){var x__$1 = this;return (x__$1[0]);
});
HTMLCollection.prototype.cljs$core$ISeq$_rest$arity$1 = (function (x){var x__$1 = this;var iter__8921__auto__ = (function iter__400170(s__400171){return (new cljs.core.LazySeq(null,(function (){var s__400171__$1 = s__400171;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__400171__$1);if(temp__4092__auto__)
{var s__400171__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__400171__$2))
{var c__8919__auto__ = cljs.core.chunk_first.call(null,s__400171__$2);var size__8920__auto__ = cljs.core.count.call(null,c__8919__auto__);var b__400173 = cljs.core.chunk_buffer.call(null,size__8920__auto__);if((function (){var i__400172 = 0;while(true){
if((i__400172 < size__8920__auto__))
{var i = cljs.core._nth.call(null,c__8919__auto__,i__400172);cljs.core.chunk_append.call(null,b__400173,(x__$1[i]));
{
var G__400174 = (i__400172 + 1);
i__400172 = G__400174;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400173),iter__400170.call(null,cljs.core.chunk_rest.call(null,s__400171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__400173),null);
}
} else
{var i = cljs.core.first.call(null,s__400171__$2);return cljs.core.cons.call(null,(x__$1[i]),iter__400170.call(null,cljs.core.rest.call(null,s__400171__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8921__auto__.call(null,cljs.core.range.call(null,x__$1.length));
});
foundation.test.components.datagrid.th_widths = (function th_widths(ths,widths){return cljs.core.reduce.call(null,(function (ws,p__400177){var vec__400178 = p__400177;var width = cljs.core.nth.call(null,vec__400178,0,null);var th = cljs.core.nth.call(null,vec__400178,1,null);var th_width = goog.style.getBounds(th).width;if((width > th_width))
{return cljs.core.conj.call(null,ws,width);
} else
{return cljs.core.conj.call(null,ws,th_width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,widths,ths));
});
foundation.test.components.datagrid.td_widths = (function td_widths(rows){return cljs.core.reduce.call(null,(function (ws,td){return cljs.core.conj.call(null,ws,goog.style.getBounds(td).width);
}),cljs.core.PersistentVector.EMPTY,cljs.core.first.call(null,rows).cells);
});
foundation.test.components.datagrid.full_td_widths = (function full_td_widths(th_widths,ths,row_width,table_width){return cljs.core.reduce.call(null,(function (ws,p__400181){var vec__400182 = p__400181;var width = cljs.core.nth.call(null,vec__400182,0,null);var th = cljs.core.nth.call(null,vec__400182,1,null);var th_width = goog.style.getBounds(th).width;var new_width = (table_width * (width / row_width));if((new_width > width))
{goog.style.setWidth(th,new_width);
return cljs.core.conj.call(null,ws,new_width);
} else
{goog.style.setWidth(th,width);
return cljs.core.conj.call(null,ws,width);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,th_widths,ths));
});
foundation.test.components.datagrid.fix_column_widths_BANG_ = (function fix_column_widths_BANG_(){var vec__400201 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__400183_SHARP_){return document.querySelector(dommy.core.selector.call(null,p1__400183_SHARP_));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".panel-body",".panel-body",1210123755),new cljs.core.Keyword(null,"tbody","tbody",1124062088),new cljs.core.Keyword(null,"thead","thead",1124231110)], null)));var panel_body = cljs.core.nth.call(null,vec__400201,0,null);var tbody = cljs.core.nth.call(null,vec__400201,1,null);var thead = cljs.core.nth.call(null,vec__400201,2,null);var table_width = goog.style.getBounds(tbody).width;var rows = tbody.rows;var ths = cljs.core.first.call(null,thead.rows).cells;var td_widths = foundation.test.components.datagrid.td_widths.call(null,rows);var th_widths = foundation.test.components.datagrid.th_widths.call(null,ths,td_widths);var row_width = cljs.core.reduce.call(null,cljs.core._PLUS_,th_widths);var th_widths__$1 = foundation.test.components.datagrid.full_td_widths.call(null,th_widths,ths,row_width,table_width);if((row_width > table_width))
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),row_width);
} else
{goog.style.setWidth(cljs.core.first.call(null,thead.rows),table_width);
}
var seq__400202 = cljs.core.seq.call(null,rows);var chunk__400203 = null;var count__400204 = 0;var i__400205 = 0;while(true){
if((i__400205 < count__400204))
{var tr = cljs.core._nth.call(null,chunk__400203,i__400205);var seq__400206_400218 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__400207_400219 = null;var count__400208_400220 = 0;var i__400209_400221 = 0;while(true){
if((i__400209_400221 < count__400208_400220))
{var vec__400210_400222 = cljs.core._nth.call(null,chunk__400207_400219,i__400209_400221);var width_400223 = cljs.core.nth.call(null,vec__400210_400222,0,null);var td_400224 = cljs.core.nth.call(null,vec__400210_400222,1,null);goog.style.setWidth(td_400224,width_400223);
{
var G__400225 = seq__400206_400218;
var G__400226 = chunk__400207_400219;
var G__400227 = count__400208_400220;
var G__400228 = (i__400209_400221 + 1);
seq__400206_400218 = G__400225;
chunk__400207_400219 = G__400226;
count__400208_400220 = G__400227;
i__400209_400221 = G__400228;
continue;
}
} else
{var temp__4092__auto___400229 = cljs.core.seq.call(null,seq__400206_400218);if(temp__4092__auto___400229)
{var seq__400206_400230__$1 = temp__4092__auto___400229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__400206_400230__$1))
{var c__8952__auto___400231 = cljs.core.chunk_first.call(null,seq__400206_400230__$1);{
var G__400232 = cljs.core.chunk_rest.call(null,seq__400206_400230__$1);
var G__400233 = c__8952__auto___400231;
var G__400234 = cljs.core.count.call(null,c__8952__auto___400231);
var G__400235 = 0;
seq__400206_400218 = G__400232;
chunk__400207_400219 = G__400233;
count__400208_400220 = G__400234;
i__400209_400221 = G__400235;
continue;
}
} else
{var vec__400211_400236 = cljs.core.first.call(null,seq__400206_400230__$1);var width_400237 = cljs.core.nth.call(null,vec__400211_400236,0,null);var td_400238 = cljs.core.nth.call(null,vec__400211_400236,1,null);goog.style.setWidth(td_400238,width_400237);
{
var G__400239 = cljs.core.next.call(null,seq__400206_400230__$1);
var G__400240 = null;
var G__400241 = 0;
var G__400242 = 0;
seq__400206_400218 = G__400239;
chunk__400207_400219 = G__400240;
count__400208_400220 = G__400241;
i__400209_400221 = G__400242;
continue;
}
}
} else
{}
}
break;
}
{
var G__400243 = seq__400202;
var G__400244 = chunk__400203;
var G__400245 = count__400204;
var G__400246 = (i__400205 + 1);
seq__400202 = G__400243;
chunk__400203 = G__400244;
count__400204 = G__400245;
i__400205 = G__400246;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__400202);if(temp__4092__auto__)
{var seq__400202__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__400202__$1))
{var c__8952__auto__ = cljs.core.chunk_first.call(null,seq__400202__$1);{
var G__400247 = cljs.core.chunk_rest.call(null,seq__400202__$1);
var G__400248 = c__8952__auto__;
var G__400249 = cljs.core.count.call(null,c__8952__auto__);
var G__400250 = 0;
seq__400202 = G__400247;
chunk__400203 = G__400248;
count__400204 = G__400249;
i__400205 = G__400250;
continue;
}
} else
{var tr = cljs.core.first.call(null,seq__400202__$1);var seq__400212_400251 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,th_widths__$1,tr.cells));var chunk__400213_400252 = null;var count__400214_400253 = 0;var i__400215_400254 = 0;while(true){
if((i__400215_400254 < count__400214_400253))
{var vec__400216_400255 = cljs.core._nth.call(null,chunk__400213_400252,i__400215_400254);var width_400256 = cljs.core.nth.call(null,vec__400216_400255,0,null);var td_400257 = cljs.core.nth.call(null,vec__400216_400255,1,null);goog.style.setWidth(td_400257,width_400256);
{
var G__400258 = seq__400212_400251;
var G__400259 = chunk__400213_400252;
var G__400260 = count__400214_400253;
var G__400261 = (i__400215_400254 + 1);
seq__400212_400251 = G__400258;
chunk__400213_400252 = G__400259;
count__400214_400253 = G__400260;
i__400215_400254 = G__400261;
continue;
}
} else
{var temp__4092__auto___400262__$1 = cljs.core.seq.call(null,seq__400212_400251);if(temp__4092__auto___400262__$1)
{var seq__400212_400263__$1 = temp__4092__auto___400262__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__400212_400263__$1))
{var c__8952__auto___400264 = cljs.core.chunk_first.call(null,seq__400212_400263__$1);{
var G__400265 = cljs.core.chunk_rest.call(null,seq__400212_400263__$1);
var G__400266 = c__8952__auto___400264;
var G__400267 = cljs.core.count.call(null,c__8952__auto___400264);
var G__400268 = 0;
seq__400212_400251 = G__400265;
chunk__400213_400252 = G__400266;
count__400214_400253 = G__400267;
i__400215_400254 = G__400268;
continue;
}
} else
{var vec__400217_400269 = cljs.core.first.call(null,seq__400212_400263__$1);var width_400270 = cljs.core.nth.call(null,vec__400217_400269,0,null);var td_400271 = cljs.core.nth.call(null,vec__400217_400269,1,null);goog.style.setWidth(td_400271,width_400270);
{
var G__400272 = cljs.core.next.call(null,seq__400212_400263__$1);
var G__400273 = null;
var G__400274 = 0;
var G__400275 = 0;
seq__400212_400251 = G__400272;
chunk__400213_400252 = G__400273;
count__400214_400253 = G__400274;
i__400215_400254 = G__400275;
continue;
}
}
} else
{}
}
break;
}
{
var G__400276 = cljs.core.next.call(null,seq__400202__$1);
var G__400277 = null;
var G__400278 = 0;
var G__400279 = 0;
seq__400202 = G__400276;
chunk__400203 = G__400277;
count__400204 = G__400278;
i__400205 = G__400279;
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
foundation.test.components.datagrid.set_datagrid_height_BANG_ = (function set_datagrid_height_BANG_(){var content = document.querySelector("div.twitter-stats.panel.panel-default");var header_height = 126;var footer_height = 81;var max_height = (((document.body.clientHeight - (goog.style.getBounds(content).height + content.offsetTop)) - header_height) - footer_height);return goog.style.setHeight((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0]),(cljs.core.quot.call(null,max_height,60) * 60));
});
foundation.test.components.datagrid.datagrid = (function datagrid(input,id,state){if(typeof foundation.test.components.datagrid.t400283 !== 'undefined')
{} else
{
/**
* @constructor
*/
foundation.test.components.datagrid.t400283 = (function (state,id,input,datagrid,meta400284){
this.state = state;
this.id = id;
this.input = input;
this.datagrid = datagrid;
this.meta400284 = meta400284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
foundation.test.components.datagrid.t400283.cljs$lang$type = true;
foundation.test.components.datagrid.t400283.cljs$lang$ctorStr = "foundation.test.components.datagrid/t400283";
foundation.test.components.datagrid.t400283.cljs$lang$ctorPrWriter = (function (this__8772__auto__,writer__8773__auto__,opt__8774__auto__){return cljs.core._write.call(null,writer__8773__auto__,"foundation.test.components.datagrid/t400283");
});
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IResizeable$ = true;
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IResizeable$_resize$arity$2 = (function (_,e){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
if((goog.style.getBounds((dommy.utils.__GT_Array.call(null,document.getElementsByTagName("tbody"))[0])).width > e.target.getSize().width))
{return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
} else
{return null;
}
});
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IWithChildren$ = true;
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IWithChildren$_with_children$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#new","#new",1015055887)], null);
});
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IPostProcess$ = true;
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IPostProcess$_post_process$arity$1 = (function (_){var self__ = this;
var ___$1 = this;foundation.test.components.datagrid.set_datagrid_height_BANG_.call(null);
return foundation.test.components.datagrid.fix_column_widths_BANG_.call(null);
});
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IRender$ = true;
foundation.test.components.datagrid.t400283.prototype.foundation$app$ui$IRender$_render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return foundation.test.components.datagrid.datagrid_template.call(null,self__.input,self__.id,new cljs.core.Keyword(null,"resource","resource",672839552).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"collection","collection",3567559184).cljs$core$IFn$_invoke$arity$1(self__.state));
});
foundation.test.components.datagrid.t400283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_400285){var self__ = this;
var _400285__$1 = this;return self__.meta400284;
});
foundation.test.components.datagrid.t400283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_400285,meta400284__$1){var self__ = this;
var _400285__$1 = this;return (new foundation.test.components.datagrid.t400283(self__.state,self__.id,self__.input,self__.datagrid,meta400284__$1));
});
foundation.test.components.datagrid.__GT_t400283 = (function __GT_t400283(state__$1,id__$1,input__$1,datagrid__$1,meta400284){return (new foundation.test.components.datagrid.t400283(state__$1,id__$1,input__$1,datagrid__$1,meta400284));
});
}
return (new foundation.test.components.datagrid.t400283(state,id,input,datagrid,null));
});

//# sourceMappingURL=datagrid.js.map