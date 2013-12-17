// Compiled by ClojureScript 0.0-2120
goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
var div_376504 = document.createElement("div");var test_html_376505 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";div_376504.innerHTML = test_html_376505;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div_376504.firstChild.nodeType,3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div_376504.getElementsByTagName("tbody").length,0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div_376504.getElementsByTagName("link").length,0);

//# sourceMappingURL=support.js.map