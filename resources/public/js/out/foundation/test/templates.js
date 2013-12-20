// Compiled by ClojureScript 0.0-2120
goog.provide('foundation.test.templates');
goog.require('cljs.core');
goog.require('foundation.test.models');
goog.require('cljs_time.core');
goog.require('enfocus.events');
goog.require('goog.date');
goog.require('enfocus.core');
goog.require('dommy.core');
goog.require('goog.i18n.currency');
goog.require('cljs_time.format');
goog.require('enfocus.core');
goog.require('foundation.test.models');
goog.require('goog.i18n.DateTimeParse');
goog.require('cljs_time.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.currency');
goog.require('enfocus.events');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.date');
goog.require('goog.ui.InputDatePicker');
goog.require('goog.i18n.NumberFormat');
goog.require('dommy.core');
goog.require('cljs_time.core');
cljs.core.enable_console_print_BANG_.call(null);
foundation.test.templates.date_picker = (function date_picker(el,init_date,date_pattern){var date_pattern__$1 = (((date_pattern instanceof cljs.core.Keyword))?date_pattern.call(null,cljs_time.format.formatters):date_pattern);var picker = (new goog.ui.InputDatePicker((new goog.i18n.DateTimeFormat(date_pattern__$1)),(new goog.i18n.DateTimeParse(date_pattern__$1))));var G__407211_407213 = picker.getDatePicker();G__407211_407213.setUseSimpleNavigationMenu(true);
G__407211_407213.setAllowNone(true);
var G__407212 = picker;G__407212.decorate(el);
G__407212.setDate(init_date);
return G__407212;
});
foundation.test.templates.twitter_power = (function twitter_power(id){var dom407215 = document.createElement("div");if(cljs.core.truth_(id))
{dom407215.setAttribute("id",id);
} else
{}
return dom407215;
});
foundation.test.templates.exchange_rate = cljs.reader.read_string.call(null,"{\"CHF\" 0.897124460379015, \"HRK\" 5.587034462574083, \"HKD\" 7.753274310382673, \"LVL\" 0.5142313602107266, \"MXN\" 12.973732347991513, \"DKK\" 5.458403453574303, \"LTL\" 2.5263774054291357, \"MYR\" 3.2757737616155707, \"USD\" 1.0, \"CAD\" 1.0719250749981708, \"BGN\" 1.4310382673593327, \"NOK\" 6.1337528352967, \"ZAR\" 10.383478451745079, \"INR\" 62.3757957122997, \"THB\" 32.465061827760294, \"CNY\" 6.073827467622741, \"SGD\" 1.2667739811224117, \"AUD\" 1.1300943879417575, \"ILS\" 3.5167191044120876, \"KRW\" 1060.891197775664, \"RON\" 3.278920026340821, \"PLN\" 3.053998682958952, \"JPY\" 104.30233408941245, \"CZK\" 20.236335699129288, \"GBP\" 0.6108875393283091, \"IDR\" 12091.446550084145, \"PHP\" 44.481598009804635, \"NZD\" 1.2230189507572986, \"SEK\" 6.551474354284043, \"HUF\" 219.05319382454087, \"TRY\" 2.0734616228872467, \"BRL\" 2.3496012292383113, \"RUB\" 32.92273359186361}");
foundation.test.templates.format_currency = (function format_currency(n,currency_code){var parser = (new goog.i18n.NumberFormat(goog.i18n.currency.getLocalCurrencyPattern((cljs.core.truth_(currency_code)?currency_code:"USD"))));return parser.format((cljs.core.truth_(n)?(n * cljs.core.get.call(null,foundation.test.templates.exchange_rate,currency_code)):0));
});
foundation.test.templates.formatters = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"decimal","decimal",2556167875),goog.i18n.NumberFormat.Format.DECIMAL,new cljs.core.Keyword(null,"percent","percent",4629944247),goog.i18n.NumberFormat.Format.PERCENT,new cljs.core.Keyword(null,"scientific","scientific",2354936731),goog.i18n.NumberFormat.Format.SCIENTIFIC,new cljs.core.Keyword(null,"currency","currency",1589306243),goog.i18n.NumberFormat.Format.CURRENCY], null);
foundation.test.templates.format_percent = (function format_percent(n){var parser = (new goog.i18n.NumberFormat(new cljs.core.Keyword(null,"percent","percent",4629944247).cljs$core$IFn$_invoke$arity$1(foundation.test.templates.formatters)));return parser.format(n);
});
/**
* Given a map of query params to values, constructs a query string for the
* URI.
*/
foundation.test.templates.query_string = (function query_string(kvs){return [cljs.core.str(goog.Uri.QueryData.createFromKeysValues(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,(function (p1__407216_SHARP_){return clojure.string.replace.call(null,p1__407216_SHARP_,/-/,"_");
}),cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,kvs)))),cljs.core.clj__GT_js.call(null,cljs.core.vals.call(null,kvs))))].join('');
});

//# sourceMappingURL=templates.js.map