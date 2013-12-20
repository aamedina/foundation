// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.cells');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('foundation.test.templates');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('foundation.app.xhr');
goog.require('cljs_time.format');
goog.require('enfocus.core');
goog.require('foundation.test.templates');
goog.require('cljs_time.format');
goog.require('enfocus.events');
goog.require('cljs.core.async');
goog.require('foundation.app.xhr');
goog.require('goog.date');
goog.require('dommy.core');
goog.require('cljs_time.core');
foundation.test.cells.date_picker_cell = (function date_picker_cell(date_str){var dom407569 = document.createElement("input");dom407569.className = "date-picker";
if(true)
{dom407569.setAttribute("readonly",true);
} else
{}
dom407569.appendChild(dommy.template.__GT_node_like.call(null,cljs_time.format.parse.call(null,new cljs.core.Keyword(null,"long-date","long-date",1095363537),date_str)));
return dom407569;
});
foundation.test.cells.budget_spent_cell = (function budget_spent_cell(budget,spent,currency_code){var frag407570 = document.createDocumentFragment();frag407570.appendChild((function (){var dom407576 = document.createElement("p");dom407576.setAttribute("id","spent");
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"width","width",1127031096),"133px"], null)))
{dom407576.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",4502531971),"0",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"width","width",1127031096),"133px"], null)));
} else
{}
dom407576.appendChild(dommy.template.__GT_node_like.call(null,foundation.test.templates.format_currency.call(null,spent,currency_code)));
return dom407576;
})());
frag407570.appendChild((function (){var dom407577 = document.createElement("div");dom407577.className = "progress";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",4087841945),"5px",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"padding","padding",4502531971),"0"], null)))
{dom407577.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",4087841945),"5px",new cljs.core.Keyword(null,"margin","margin",4227561760),"0",new cljs.core.Keyword(null,"padding","padding",4502531971),"0"], null)));
} else
{}
dom407577.appendChild((function (){var dom407578 = document.createElement("div");dom407578.className = "progress-bar progress-bar-success";
if(cljs.core.truth_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),foundation.test.templates.format_percent.call(null,(spent / budget))], null)))
{dom407578.setAttribute("style",dommy.core.style_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),foundation.test.templates.format_percent.call(null,(spent / budget))], null)));
} else
{}
return dom407578;
})());
return dom407577;
})());
frag407570.appendChild((function (){var dom407579 = document.createElement("small");dom407579.className = "text-muted";
dom407579.appendChild((function (){var dom407580 = document.createElement("span");dom407580.setAttribute("id","budget-remaining");
dom407580.appendChild(dommy.template.__GT_node_like.call(null,[cljs.core.str(foundation.test.templates.format_currency.call(null,(budget - spent),currency_code)),cljs.core.str(" remaining")].join('')));
return dom407580;
})());
return dom407579;
})());
return frag407570;
});
foundation.test.cells.th = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("th",new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
foundation.test.cells.td = (function (){var method_table__9061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__9062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__9063__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__9064__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__9065__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("td",new cljs.core.Keyword(null,"content","content",1965434859),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__9065__auto__,method_table__9061__auto__,prefer_table__9062__auto__,method_cache__9063__auto__,cached_hierarchy__9064__auto__));
})();
cljs.core._add_method.call(null,foundation.test.cells.th,new cljs.core.Keyword(null,"select-all","select-all",3651745986),(function (column){var dom407581 = document.createElement("th");if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column)))
{dom407581.setAttribute("id",new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(column));
} else
{}
dom407581.appendChild((function (){var dom407582 = document.createElement("input");dom407582.setAttribute("id","select-all");
if("checkbox")
{dom407582.setAttribute("type","checkbox");
} else
{}
return dom407582;
})());
return dom407581;
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
cljs.core._add_method.call(null,foundation.test.cells.td,new cljs.core.Keyword(null,"tweet","tweet",1124678115),(function (column,record){var tweet_chan = foundation.app.xhr.GET.call(null,"http://192.241.130.213:8080/user/15/rest-api/statuses/oembed.json",new cljs.core.Keyword(null,"where","where",1127002201),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"tweet-id","tweet-id",2543518057).cljs$core$IFn$_invoke$arity$1(record),new cljs.core.Keyword(null,"align","align",1106807415),"left",new cljs.core.Keyword(null,"hide_media","hide_media",1701653017),true,new cljs.core.Keyword(null,"hide_thread","hide_thread",1062867737),true,new cljs.core.Keyword(null,"omit_script","omit_script",4769794483),true,new cljs.core.Keyword(null,"maxwidth","maxwidth",1443838548),400], null));var c__12187__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__12188__auto__ = (function (){var switch__12117__auto__ = (function (state_407588){var state_val_407589 = (state_407588[1]);if((state_val_407589 === 2))
{var inst_407584 = (state_407588[2]);var inst_407585 = new cljs.core.Keyword(null,"html","html",1017117469).cljs$core$IFn$_invoke$arity$1(inst_407584);var inst_407586 = goog.dom.htmlToDocumentFragment(inst_407585);var state_407588__$1 = state_407588;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_407588__$1,inst_407586);
} else
{if((state_val_407589 === 1))
{var state_407588__$1 = state_407588;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_407588__$1,2,tweet_chan);
} else
{return null;
}
}
});return ((function (switch__12117__auto__){
return (function() {
var state_machine__12118__auto__ = null;
var state_machine__12118__auto____0 = (function (){var statearr_407593 = [null,null,null,null,null,null,null];(statearr_407593[0] = state_machine__12118__auto__);
(statearr_407593[1] = 1);
return statearr_407593;
});
var state_machine__12118__auto____1 = (function (state_407588){while(true){
var ret_value__12119__auto__ = (function (){try{while(true){
var result__12120__auto__ = switch__12117__auto__.call(null,state_407588);if(cljs.core.keyword_identical_QMARK_.call(null,result__12120__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__12120__auto__;
}
break;
}
}catch (e407594){if((e407594 instanceof Object))
{var ex__12121__auto__ = e407594;var statearr_407595_407597 = state_407588;(statearr_407595_407597[5] = ex__12121__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_407588);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e407594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12119__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__407598 = state_407588;
state_407588 = G__407598;
continue;
}
} else
{return ret_value__12119__auto__;
}
break;
}
});
state_machine__12118__auto__ = function(state_407588){
switch(arguments.length){
case 0:
return state_machine__12118__auto____0.call(this);
case 1:
return state_machine__12118__auto____1.call(this,state_407588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12118__auto____0;
state_machine__12118__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12118__auto____1;
return state_machine__12118__auto__;
})()
;})(switch__12117__auto__))
})();var state__12189__auto__ = (function (){var statearr_407596 = f__12188__auto__.call(null);(statearr_407596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12187__auto__);
return statearr_407596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12189__auto__);
}));
return c__12187__auto__;
}));
foundation.test.cells.choice = (function choice(content){var dom407602 = document.createElement("li");dom407602.className = "choice";
dom407602.appendChild((function (){var dom407603 = document.createElement("button");dom407603.className = "close";
dom407603.appendChild(document.createTextNode("x"));
return dom407603;
})());
dom407602.appendChild((function (){var dom407604 = document.createElement("span");dom407604.appendChild(dommy.template.__GT_node_like.call(null,content));
return dom407604;
})());
return dom407602;
});
foundation.test.cells.targeting_option_body = (function targeting_option_body(content){return dommy.template.__GT_node_like.call(null,null);
});
foundation.test.cells.brand_options = (function brand_options(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"TV"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Target people who have been exposed to your ads on TV."], null)], null);
});
foundation.test.cells.brand_control = (function brand_control(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"enabled"], null)], null),"Enabled"], null)], null);
});
foundation.test.cells.keyword_options = (function keyword_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Keyword"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Enter the keywords or phrases you want to target."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Sports/Skateboarding")], null)], null);
});
foundation.test.cells.keyword_autocomplete = (function keyword_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,"",(function (p__407607){var map__407608 = p__407607;var map__407608__$1 = ((cljs.core.seq_QMARK_.call(null,map__407608))?cljs.core.apply.call(null,cljs.core.hash_map,map__407608):map__407608);var targeting_type = cljs.core.get.call(null,map__407608__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407608__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407608__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.interest_options = (function interest_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Interest"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Add interest categories to target a broad audience."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Sports/Skateboarding")], null)], null);
});
foundation.test.cells.interest_autocomplete = (function interest_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.interest))].join(''),(function (p__407611){var map__407612 = p__407611;var map__407612__$1 = ((cljs.core.seq_QMARK_.call(null,map__407612))?cljs.core.apply.call(null,cljs.core.hash_map,map__407612):map__407612);var targeting_type = cljs.core.get.call(null,map__407612__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407612__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407612__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.username_options = (function username_options(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Username"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Add @usernames to target people similar to that user's followers."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"followers"], null)], null),"Include followers of your account."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"similar"], null)], null),"Include users like followers of your account."], null)], null);
});
foundation.test.cells.username_control = (function username_control(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407615){var map__407616 = p__407615;var map__407616__$1 = ((cljs.core.seq_QMARK_.call(null,map__407616))?cljs.core.apply.call(null,cljs.core.hash_map,map__407616):map__407616);var targeting_type = cljs.core.get.call(null,map__407616__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407616__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407616__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.location_options = (function location_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Choose all of the locations you want to reach."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"United States")], null)], null);
});
foundation.test.cells.location_autocomplete = (function location_autocomplete(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407619){var map__407620 = p__407619;var map__407620__$1 = ((cljs.core.seq_QMARK_.call(null,map__407620))?cljs.core.apply.call(null,cljs.core.hash_map,map__407620):map__407620);var targeting_type = cljs.core.get.call(null,map__407620__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407620__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407620__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.gender_options = (function gender_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Gender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Limit Targeting By Gender"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"Men")], null)], null);
});
foundation.test.cells.gender_control = (function gender_control(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"female"], null)], null),"Women"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.checkbox-inline","label.checkbox-inline",2149296219),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#tv-enabled","input#tv-enabled",4088333505),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"value","value",1125876963),"male"], null)], null),"Men"], null)], null);
});
foundation.test.cells.device_options = (function device_options(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.targeting-options-body","span.targeting-options-body",2949010851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4.panel-title","h4.panel-title",3702624927),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"Device"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"targeting:"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",1013907519),"Select which devices and platforms you wish to target."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.chosen","ul.chosen",4344301083),foundation.test.cells.choice.call(null,"iOS"),foundation.test.cells.choice.call(null,"Android")], null)], null);
});
foundation.test.cells.device_control = (function device_control(){return mvc.twitter.ui.autocomplete.autocomplete.call(null,[cljs.core.str(foundation.test.cells.ads_api),cljs.core.str(new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(foundation.test.cells.location))].join(''),(function (p__407623){var map__407624 = p__407623;var map__407624__$1 = ((cljs.core.seq_QMARK_.call(null,map__407624))?cljs.core.apply.call(null,cljs.core.hash_map,map__407624):map__407624);var targeting_type = cljs.core.get.call(null,map__407624__$1,new cljs.core.Keyword(null,"targeting-type","targeting-type",3798727240));var name = cljs.core.get.call(null,map__407624__$1,new cljs.core.Keyword(null,"name","name",1017277949));var targeting_value = cljs.core.get.call(null,map__407624__$1,new cljs.core.Keyword(null,"targeting-value","targeting-value",1445200071));return name;
}));
});
foundation.test.cells.targeting_options = (new cljs.core.PersistentArrayMap(null,7,[new cljs.core.Keyword(null,"tv","tv",1013907956),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"TV Targeting",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.brand_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.brand_control], null),new cljs.core.Keyword(null,"keywords","keywords",1537053468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Keywords",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.keyword_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.keyword_autocomplete], null),new cljs.core.Keyword(null,"interests","interests",1516515835),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Interests",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.interest_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.interest_autocomplete], null),new cljs.core.Keyword(null,"usernames","usernames",1366721999),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Usernames",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.username_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.username_control], null),new cljs.core.Keyword(null,"locations","locations",4111682256),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Locations",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.location_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.location_autocomplete], null),new cljs.core.Keyword(null,"gender","gender",4059358771),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Gender",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.gender_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.gender_control], null),new cljs.core.Keyword(null,"devices","devices",2573705295),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Devices",new cljs.core.Keyword(null,"content","content",1965434859),foundation.test.cells.device_options,new cljs.core.Keyword(null,"control","control",1965447375),foundation.test.cells.device_control], null)],null));

//# sourceMappingURL=cells.js.map