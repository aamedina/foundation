// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.templates');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('cljs_time.format');
goog.require('foundation.test.cells');
goog.require('enfocus.core');
goog.require('foundation.test.models');
goog.require('goog.i18n.DateTimeParse');
goog.require('cljs_time.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat');
goog.require('enfocus.events');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.date');
goog.require('foundation.test.cells');
goog.require('goog.ui.InputDatePicker');
goog.require('dommy.core');
goog.require('cljs_time.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__270028_270030 = picker.getDatePicker();G__270028_270030.setUseSimpleNavigationMenu(true);
G__270028_270030.setAllowNone(true);
var G__270029 = picker;G__270029.decorate(el);
G__270029.setDate(init_date);
return G__270029;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom270032 = document.createElement("div");if(cljs.core.truth_(id))
{dom270032.setAttribute("id",id);
} else
{}
return dom270032;
});

//# sourceMappingURL=templates.js.map