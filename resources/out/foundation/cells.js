// Compiled by ClojureScript 0.0-2080
goog.provide('foundation.cells');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('cljs_time.format');
goog.require('enfocus.core');
goog.require('cljs_time.format');
goog.require('enfocus.events');
goog.require('dommy.core');
goog.require('cljs_time.core');
foundation.cells.date_picker_cell = (function date_picker_cell(date_str){var dom86406 = document.createElement("input");dom86406.className = "date-picker";
if(true)
{dom86406.setAttribute("readonly",true);
} else
{}
dom86406.appendChild(dommy.template.__GT_node_like.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"long-date","long-date",1095363537),date_str)));
return dom86406;
});
foundation.cells.th = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("th",new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
foundation.cells.td = (function (){var method_table__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14660__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14661__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14662__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("td",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14662__auto__,method_table__14658__auto__,prefer_table__14659__auto__,method_cache__14660__auto__,cached_hierarchy__14661__auto__));
})();
cljs.core._add_method.call(null,foundation.cells.th,new cljs.core.Keyword(null,"select-all","select-all",3651745986),(function (column){var dom86407 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom86407.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom86407.appendChild((function (){var dom86408 = document.createElement("input");dom86408.setAttribute("id","select-all");
if("checkbox")
{dom86408.setAttribute("type","checkbox");
} else
{}
return dom86408;
})());
return dom86407;
}));
cljs.core._add_method.call(null,foundation.cells.th,new cljs.core.Keyword(null,"default","default",2558708147),(function (column){var dom86409 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom86409.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom86409.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)));
return dom86409;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"select","select",4402849902),(function (column,record){var dom86410 = document.createElement("td");dom86410.appendChild((function (){var dom86411 = document.createElement("input");dom86411.className = "select";
if("checkbox")
{dom86411.setAttribute("type","checkbox");
} else
{}
return dom86411;
})());
return dom86410;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"pause-button","pause-button",995024475),(function (column,record){return dommy.template.__GT_node_like.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"paused","paused",4313549984).cljs$core$IFn$_invoke$arity$1(record))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#pause-button-cell.btn.glyphicon.glyphicon-play","button#pause-button-cell.btn.glyphicon.glyphicon-play",761500962)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#pause-button-cell.btn.glyphicon.glyphicon-pause","button#pause-button-cell.btn.glyphicon.glyphicon-pause",1779028588)], null)], null)));
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"funding-instrument","funding-instrument",716386345),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"date-picker","date-picker",838801151),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"total-budget","total-budget",4104043872),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"total-spent","total-spent",3484442903),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"daily-budget","daily-budget",2067452139),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"daily-spent","daily-spent",3972935724),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (column,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"id","id",1013907597),"toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-sm.toggle","button.btn.btn-primary.btn-sm.toggle",1978774590),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null)], null);
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"targeting-toggle","targeting-toggle",1454681954),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"bid","bid",1014001775),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"low-bid","low-bid",1369226870),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"high-bid","high-bid",3622445508),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"number","number",4274507451),(function (column,record){return 0;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"currency","currency",1589306243),(function (column,record){return "$0.00";
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"default","default",2558708147),(function (column,record){if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(column)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(column).call(null,record)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(column)], null);
}
}));

//# sourceMappingURL=cells.js.map