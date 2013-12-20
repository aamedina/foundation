// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.cells');
goog.require('cljs.core');
goog.require('foundation.test.templates');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('cljs_time.format');
goog.require('enfocus.core');
goog.require('foundation.test.templates');
goog.require('cljs_time.format');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('dommy.core');
goog.require('cljs_time.core');
foundation.test.cells.date_picker_cell = (function date_picker_cell(date_str){var dom407341 = document.createElement("input");dom407341.className = "date-picker";
if(true)
{dom407341.setAttribute("readonly",true);
} else
{}
dom407341.appendChild(dommy.template.__GT_node_like.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"long-date","long-date",1095363537),date_str)));
return dom407341;
});
foundation.test.cells.budget_spent_cell = (function budget_spent_cell(budget,spent,currency_code){var frag407342 = document.createDocumentFragment();frag407342.appendChild((function (){var dom407348 = document.createElement("p");dom407348.setAttribute("id","spent");
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"width","width",1127031096),"133px"], null)))
{dom407348.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"width","width",1127031096),"133px"], null)));
} else
{}
dom407348.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.format_currency.call(null,spent,currency_code)));
return dom407348;
})());
frag407342.appendChild((function (){var dom407349 = document.createElement("div");dom407349.className = "progress";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",4087841945),"5px",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"padding","padding",4502531971),"0"], null)))
{dom407349.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",4087841945),"5px",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"padding","padding",4502531971),"0"], null)));
} else
{}
dom407349.appendChild((function (){var dom407350 = document.createElement("div");dom407350.className = "progress-bar progress-bar-success";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),foundation.test.templates.format_percent.call(null,(spent / budget))], null)))
{dom407350.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),foundation.test.templates.format_percent.call(null,(spent / budget))], null)));
} else
{}
return dom407350;
})());
return dom407349;
})());
frag407342.appendChild((function (){var dom407351 = document.createElement("small");dom407351.className = "text-muted";
dom407351.appendChild((function (){var dom407352 = document.createElement("span");dom407352.setAttribute("id","budget-remaining");
dom407352.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str(foundation.test.templates.format_currency.call(null,(budget - spent),currency_code)),cljs.core.str(" remaining")].join('')));
return dom407352;
})());
return dom407351;
})());
return frag407342;
});
foundation.test.cells.th = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("th",new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.test.cells.td = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("td",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
cljs.core._add_method.call(null,foundation.test.cells.th,new cljs.core.Keyword(null,"select-all","select-all",3651745986),(function (column){var dom407353 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom407353.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom407353.appendChild((function (){var dom407354 = document.createElement("input");dom407354.setAttribute("id","select-all");
if("checkbox")
{dom407354.setAttribute("type","checkbox");
} else
{}
return dom407354;
})());
return dom407353;
}));
cljs.core._add_method.call(null,foundation.test.cells.th,new cljs.core.Keyword(null,"default","default",2558708147),(function (column){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",1013907942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)], null),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"select","select",4402849902),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.select","input.select",1600061202),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox"], null)], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"pause-button","pause-button",995024475),(function (column,record){if(cljs.core.truth_(new cljs.core.Keyword(null,"paused","paused",4313549984).cljs$core$IFn$_invoke$arity$1(record)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#pause-button-cell.btn.glyphicon.glyphicon-play","button#pause-button-cell.btn.glyphicon.glyphicon-play",761500962)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#pause-button-cell.btn.glyphicon.glyphicon-pause","button#pause-button-cell.btn.glyphicon.glyphicon-pause",1779028588)], null)], null);
}
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"funding-instrument","funding-instrument",716386345),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.Keyword(null,"funding-instrument-id","funding-instrument-id",2470780259).cljs$core$IFn$_invoke$arity$1(record)], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"date-picker","date-picker",838801151),(function (column,record){return foundation.test.cells.date_picker_cell.call(null,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(column).call(null,record));
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"total-budget","total-budget",4104043872),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),"$0.00"], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"total-spent","total-spent",3484442903),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),"$0.00"], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"daily-budget","daily-budget",2067452139),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),"$0.00"], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"daily-spent","daily-spent",3972935724),(function (column,record){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),"$0.00"], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"account-toggle","account-toggle",4776800870),(function (column,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"id","id",1013907597),"toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.toggle","img.toggle",2833779537),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),"40",new cljs.core.Keyword(null,"height","height",4087841945),"40",new cljs.core.Keyword(null,"src","src",1014018390),cljs.core.get_in.call(null,record,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"profile-image-url","profile-image-url",2074074699)], null))], null)], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (column,record){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"id","id",1013907597),"toggle"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.btn-sm.toggle","button.btn.btn-primary.btn-sm.toggle",1978774590),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null)], null);
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"targeting-toggle","targeting-toggle",1454681954),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"bid","bid",1014001775),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"low-bid","low-bid",1369226870),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"high-bid","high-bid",3622445508),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"number","number",4274507451),(function (column,record){return 0;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"currency","currency",1589306243),(function (column,record){return "$0.00";
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"default","default",2558708147),(function (column,record){if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(column)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null),new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(column).call(null,record)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1013907938),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(record)], null),new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(column)], null);
}
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"total-budget-spent","total-budget-spent",4752287809),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"daily-budget-spent","daily-budget-spent",4500891532),(function (column,record){return null;
}));
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"tweet","tweet",1124678115),(function (column,record){return null;
}));
foundation.test.cells.choice = (function choice(content){var dom407358 = document.createElement("li");dom407358.className = "choice";
dom407358.appendChild((function (){var dom407359 = document.createElement("button");dom407359.className = "close";
dom407359.appendChild(document.createTextNode("x"));
return dom407359;
})());
dom407358.appendChild((function (){var dom407360 = document.createElement("span");dom407360.appendChild(dommy.template.__GT_node_like.call(null,content));
return dom407360;
})());
return dom407358;
});
foundation.test.cells.targeting_option_body = (function targeting_option_body(content){return dommy.template.__GT_node_like.call(null,null);
});
foundation.test.cells.brand_options = (function brand_options(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"TV"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Target people who have been exposed to your ads on TV."], null)], null);
});
foundation.test.cells.brand_control = (function brand_control(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"enabled"], null)], null),"Enabled"], null)], null);
});
foundation.test.cells.keyword_options = (function keyword_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Keyword"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Enter the keywords or phrases you want to target."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Sports/Skateboarding")], null)], null);
});
foundation.test.cells.keyword_autocomplete = (function keyword_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,"",(function (p__407363){var map__407364 = p__407363;var map__407364__$1 = ((cljs.core.seq_QMARK_.call(null,map__407364))?cljs.core.apply.call(null,cljs.core.hash_map,map__407364):map__407364);var targeting_type = cljs.core.get.call(null,map__407364__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407364__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407364__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.interest_options = (function interest_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Interest"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Add interest categories to target a broad audience."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Sports/Skateboarding")], null)], null);
});
foundation.test.cells.interest_autocomplete = (function interest_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.interest))].join(''),(function (p__407367){var map__407368 = p__407367;var map__407368__$1 = ((cljs.core.seq_QMARK_.call(null,map__407368))?cljs.core.apply.call(null,cljs.core.hash_map,map__407368):map__407368);var targeting_type = cljs.core.get.call(null,map__407368__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407368__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407368__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.username_options = (function username_options(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Add @usernames to target people similar to that user's followers."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"followers"], null)], null),"Include followers of your account."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"similar"], null)], null),"Include users like followers of your account."], null)], null);
});
foundation.test.cells.username_control = (function username_control(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407371){var map__407372 = p__407371;var map__407372__$1 = ((cljs.core.seq_QMARK_.call(null,map__407372))?cljs.core.apply.call(null,cljs.core.hash_map,map__407372):map__407372);var targeting_type = cljs.core.get.call(null,map__407372__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407372__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407372__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.location_options = (function location_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Choose all of the locations you want to reach."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"United States")], null)], null);
});
foundation.test.cells.location_autocomplete = (function location_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407375){var map__407376 = p__407375;var map__407376__$1 = ((cljs.core.seq_QMARK_.call(null,map__407376))?cljs.core.apply.call(null,cljs.core.hash_map,map__407376):map__407376);var targeting_type = cljs.core.get.call(null,map__407376__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407376__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407376__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.gender_options = (function gender_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Gender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Limit Targeting By Gender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Men")], null)], null);
});
foundation.test.cells.gender_control = (function gender_control(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"female"], null)], null),"Women"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"male"], null)], null),"Men"], null)], null);
});
foundation.test.cells.device_options = (function device_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Device"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Select which devices and platforms you wish to target."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"iOS"),foundation.test.cells.choice.call(null,"Android")], null)], null);
});
foundation.test.cells.device_control = (function device_control(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407379){var map__407380 = p__407379;var map__407380__$1 = ((cljs.core.seq_QMARK_.call(null,map__407380))?cljs.core.apply.call(null,cljs.core.hash_map,map__407380):map__407380);var targeting_type = cljs.core.get.call(null,map__407380__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407380__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407380__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.targeting_options = (new cljs.core.PersistentArrayMap(null,7,[new cljs.core.Keyword(null,"tv","tv",1013907956),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"TV Targeting",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.brand_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.brand_control], null),new cljs.core.Keyword(null,"keywords","keywords",1537053468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Keywords",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.keyword_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.keyword_autocomplete], null),new cljs.core.Keyword(null,"interests","interests",1516515835),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Interests",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.interest_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.interest_autocomplete], null),new cljs.core.Keyword(null,"usernames","usernames",1366721999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Usernames",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.username_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.username_control], null),new cljs.core.Keyword(null,"locations","locations",4111682256),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Locations",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.location_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.location_autocomplete], null),new cljs.core.Keyword(null,"gender","gender",4059358771),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Gender",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.gender_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.gender_control], null),new cljs.core.Keyword(null,"devices","devices",2573705295),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Devices",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.device_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.device_control], null)],null));

//# sourceMappingURL=cells.js.map