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
foundation.cells.date_picker_cell = (function date_picker_cell(date_str){var dom325018 = document.createElement("input");dom325018.className = "date-picker";
if(true)
{dom325018.setAttribute("readonly",true);
} else
{}
dom325018.appendChild(dommy.template.__GT_node_like.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"long-date","long-date",1095363537),date_str)));
return dom325018;
});
foundation.cells.th = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("th",new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
foundation.cells.td = (function (){var method_table__14656__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__14657__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__14658__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__14659__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__14660__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("td",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__14660__auto__,method_table__14656__auto__,prefer_table__14657__auto__,method_cache__14658__auto__,cached_hierarchy__14659__auto__));
})();
cljs.core._add_method.call(null,foundation.cells.th,new cljs.core.Keyword(null,"select-all","select-all",3651745986),(function (column){var dom325019 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom325019.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom325019.appendChild((function (){var dom325020 = document.createElement("input");dom325020.setAttribute("id","select-all");
if("checkbox")
{dom325020.setAttribute("type","checkbox");
} else
{}
return dom325020;
})());
return dom325019;
}));
cljs.core._add_method.call(null,foundation.cells.th,new cljs.core.Keyword(null,"default","default",2558708147),(function (column){var dom325021 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom325021.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom325021.appendChild(dommy.template.__GT_node_like.call(null,new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)));
return dom325021;
}));
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"select","select",4402849902),(function (column,record){var dom325022 = document.createElement("td");dom325022.appendChild((function (){var dom325023 = document.createElement("input");dom325023.className = "select";
if("checkbox")
{dom325023.setAttribute("type","checkbox");
} else
{}
return dom325023;
})());
return dom325022;
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
cljs.core._add_method.call(null,foundation.cells.td,new cljs.core.Keyword(null,"account-toggle","account-toggle",4776800870),(function (column,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"id","id",1013907597),"toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.toggle","img.toggle",2833779537),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),"40",new cljs.core.Keyword(null,"height","height",4087841945),"40",new cljs.core.Keyword(null,"src","src",1014018390),cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"profile-image-url","profile-image-url",2074074699)], null))], null)], null)], null);
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