// Compiled by ClojureScript 0.0-2080
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
cemerick.cljs.test._STAR_report_counters_STAR_ = null;
cemerick.cljs.test._STAR_initial_report_counters_STAR_ = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$381,0,cljs.core.constant$keyword$382,0,cljs.core.constant$keyword$383,0,cljs.core.constant$keyword$373,0], null);
cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.List.EMPTY;
cemerick.cljs.test._STAR_testing_contexts_STAR_ = cljs.core.List.EMPTY;
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test.registered_tests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),name);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});
/**
* Returns a string representation of the current test.  Renders names
* in *testing-vars* as a list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(m){var map__53408 = m;var map__53408__$1 = ((cljs.core.seq_QMARK_(map__53408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53408):map__53408);var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,cljs.core.constant$keyword$384);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53408__$1,cljs.core.constant$keyword$385);return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.reverse(cemerick.cljs.test._STAR_testing_vars_STAR_)], 0))),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context. Joins
* strings in *testing-contexts* with spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose(" ",cljs.core.reverse(cemerick.cljs.test._STAR_testing_contexts_STAR_)));
});
/**
* Increments the named counter in *report-counters*, a ref to a map.
* Does nothing if *report-counters* is nil.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(name){if(cljs.core.truth_(cemerick.cljs.test._STAR_report_counters_STAR_))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test._STAR_report_counters_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,0));
} else
{return null;
}
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__11730__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__11731__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__11732__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__11733__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__11734__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$386,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("report",cljs.core.constant$keyword$374,cljs.core.constant$keyword$275,hierarchy__11734__auto__,method_table__11730__auto__,prefer_table__11731__auto__,method_cache__11732__auto__,cached_hierarchy__11733__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$385,error.fileName,cljs.core.constant$keyword$384,error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function do_report(m){return (cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.report.cljs$core$IFn$_invoke$arity$1((function (){var G__53410 = cljs.core.constant$keyword$374.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$373,G__53410))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$383,G__53410))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$274)
{return m;
} else
{return null;
}
}
}
})()) : cemerick.cljs.test.report.call(null,(function (){var G__53410 = cljs.core.constant$keyword$374.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$373,G__53410))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(m)),m], 0));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$383,G__53410))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.file_and_line(Error()),m], 0));
} else
{if(cljs.core.constant$keyword$274)
{return m;
} else
{return null;
}
}
}
})()));
});
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$275,(function (m){var _STAR_print_fn_STAR_53411 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53411;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$382,(function (m){var _STAR_print_fn_STAR_53412 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cemerick.cljs.test.inc_report_counter(cljs.core.constant$keyword$382);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53412;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$383,(function (m){var _STAR_print_fn_STAR_53413 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(cljs.core.constant$keyword$383);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str()], 0));
} else
{}
var temp__4098__auto___53414 = cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4098__auto___53414))
{var message_53415 = temp__4098__auto___53414;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_53415], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53413;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$373,(function (m){var _STAR_print_fn_STAR_53416 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cemerick.cljs.test.inc_report_counter(cljs.core.constant$keyword$373);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cemerick.cljs.test.testing_vars_str(m)], 0));
if(cljs.core.seq(cemerick.cljs.test._STAR_testing_contexts_STAR_))
{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cemerick.cljs.test.testing_contexts_str()], 0));
} else
{}
var temp__4098__auto___53417 = cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4098__auto___53417))
{var message_53418 = temp__4098__auto___53417;cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_53418], 0));
} else
{}
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$389.cljs$core$IFn$_invoke$arity$1(m)], 0))], 0));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual: "], 0));
var actual = cljs.core.constant$keyword$387.cljs$core$IFn$_invoke$arity$1(m);if((actual instanceof Error))
{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual.stack], 0));
} else
{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([actual], 0));
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53416;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$390,(function (m){var _STAR_print_fn_STAR_53419 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(m),"tests containing",((cljs.core.constant$keyword$382.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(m)) + cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$1(m),"failures,",cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53419;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$391,(function (m){var _STAR_print_fn_STAR_53420 = cljs.core._STAR_print_fn_STAR_;try{cljs.core._STAR_print_fn_STAR_ = (function (){var or__10897__auto__ = cemerick.cljs.test._STAR_test_print_fn_STAR_;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core._STAR_print_fn_STAR_;
}
})();
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",cljs.core.constant$keyword$392.cljs$core$IFn$_invoke$arity$1(m)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53420;
}}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$393,(function (m){return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$394,(function (m){return null;
}));
cemerick.cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$395,(function (m){return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly(fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;if (arguments.length > 2) {
  fixture_fns = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__53421){
var ns_sym = cljs.core.first(arglist__53421);
arglist__53421 = cljs.core.next(arglist__53421);
var fixture_type = cljs.core.first(arglist__53421);
var fixture_fns = cljs.core.rest(arglist__53421);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){return (function (g){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((function (){return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
})) : f1.call(null,(function (){return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
})));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
/**
* If v has a function in its :test metadata, calls that function,
* with *testing-vars* bound to (conj *testing-vars* v).
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function test_function(v){if(cljs.core.fn_QMARK_(v))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"v","v",-1640531409,null))], 0)))].join('')));
}
var temp__4098__auto__ = cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));if(cljs.core.truth_(temp__4098__auto__))
{var t = temp__4098__auto__;var _STAR_testing_vars_STAR_53424 = cemerick.cljs.test._STAR_testing_vars_STAR_;try{cemerick.cljs.test._STAR_testing_vars_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test._STAR_testing_vars_STAR_,(function (){var or__10897__auto__ = cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return v;
}
})());
cemerick.cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$374,cljs.core.constant$keyword$394,cljs.core.constant$keyword$397,v], null));
cemerick.cljs.test.inc_report_counter(cljs.core.constant$keyword$381);
try{(t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e53425){if((e53425 instanceof Error))
{var e_53426 = e53425;cemerick.cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$374,cljs.core.constant$keyword$373,cljs.core.constant$keyword$388,"Uncaught exception, not in assertion.",cljs.core.constant$keyword$389,null,cljs.core.constant$keyword$387,e_53426], null));
} else
{if(cljs.core.constant$keyword$274)
{throw e53425;
} else
{}
}
}return cemerick.cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$374,cljs.core.constant$keyword$395,cljs.core.constant$keyword$397,v], null));
}finally {cemerick.cljs.test._STAR_testing_vars_STAR_ = _STAR_testing_vars_STAR_53424;
}} else
{return null;
}
});
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function test_all_vars(ns_sym){var once_fixture_fn = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$398.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));var each_fixture_fn = cemerick.cljs.test.join_fixtures(cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1((ns_sym.cljs$core$IFn$_invoke$arity$1 ? ns_sym.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cemerick.cljs.test.registered_fixtures)) : ns_sym.call(null,cljs.core.deref(cemerick.cljs.test.registered_fixtures)))));return (once_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? once_fixture_fn.cljs$core$IFn$_invoke$arity$1((function (){var seq__53431 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_tests),ns_sym));var chunk__53432 = null;var count__53433 = 0;var i__53434 = 0;while(true){
if((i__53434 < count__53433))
{var v = chunk__53432.cljs$core$IIndexed$_nth$arity$2(null,i__53434);if(cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))))
{(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(((function (seq__53431,chunk__53432,count__53433,i__53434,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v))
) : each_fixture_fn.call(null,((function (seq__53431,chunk__53432,count__53433,i__53434,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v))
));
} else
{}
{
var G__53435 = seq__53431;
var G__53436 = chunk__53432;
var G__53437 = count__53433;
var G__53438 = (i__53434 + 1);
seq__53431 = G__53435;
chunk__53432 = G__53436;
count__53433 = G__53437;
i__53434 = G__53438;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq(seq__53431);if(temp__4098__auto__)
{var seq__53431__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(seq__53431__$1))
{var c__11621__auto__ = cljs.core.chunk_first(seq__53431__$1);{
var G__53439 = cljs.core.chunk_rest(seq__53431__$1);
var G__53440 = c__11621__auto__;
var G__53441 = cljs.core.count(c__11621__auto__);
var G__53442 = 0;
seq__53431 = G__53439;
chunk__53432 = G__53440;
count__53433 = G__53441;
i__53434 = G__53442;
continue;
}
} else
{var v = cljs.core.first(seq__53431__$1);if(cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))))
{(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(((function (seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__))
) : each_fixture_fn.call(null,((function (seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__))
));
} else
{}
{
var G__53443 = cljs.core.next(seq__53431__$1);
var G__53444 = null;
var G__53445 = 0;
var G__53446 = 0;
seq__53431 = G__53443;
chunk__53432 = G__53444;
count__53433 = G__53445;
i__53434 = G__53446;
continue;
}
}
} else
{return null;
}
}
break;
}
})) : once_fixture_fn.call(null,(function (){var seq__53431 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_tests),ns_sym));var chunk__53432 = null;var count__53433 = 0;var i__53434 = 0;while(true){
if((i__53434 < count__53433))
{var v = chunk__53432.cljs$core$IIndexed$_nth$arity$2(null,i__53434);if(cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))))
{(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(((function (seq__53431,chunk__53432,count__53433,i__53434,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v))
) : each_fixture_fn.call(null,((function (seq__53431,chunk__53432,count__53433,i__53434,v){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v))
));
} else
{}
{
var G__53447 = seq__53431;
var G__53448 = chunk__53432;
var G__53449 = count__53433;
var G__53450 = (i__53434 + 1);
seq__53431 = G__53447;
chunk__53432 = G__53448;
count__53433 = G__53449;
i__53434 = G__53450;
continue;
}
} else
{var temp__4098__auto__ = cljs.core.seq(seq__53431);if(temp__4098__auto__)
{var seq__53431__$1 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(seq__53431__$1))
{var c__11621__auto__ = cljs.core.chunk_first(seq__53431__$1);{
var G__53451 = cljs.core.chunk_rest(seq__53431__$1);
var G__53452 = c__11621__auto__;
var G__53453 = cljs.core.count(c__11621__auto__);
var G__53454 = 0;
seq__53431 = G__53451;
chunk__53432 = G__53452;
count__53433 = G__53453;
i__53434 = G__53454;
continue;
}
} else
{var v = cljs.core.first(seq__53431__$1);if(cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v))))
{(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(((function (seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__))
) : each_fixture_fn.call(null,((function (seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__){
return (function (){return (cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1 ? cemerick.cljs.test.test_function.cljs$core$IFn$_invoke$arity$1(v) : cemerick.cljs.test.test_function.call(null,v));
});})(seq__53431,chunk__53432,count__53433,i__53434,v,seq__53431__$1,temp__4098__auto__))
));
} else
{}
{
var G__53455 = cljs.core.next(seq__53431__$1);
var G__53456 = null;
var G__53457 = 0;
var G__53458 = 0;
seq__53431 = G__53455;
chunk__53432 = G__53456;
count__53433 = G__53457;
i__53434 = G__53458;
continue;
}
}
} else
{return null;
}
}
break;
}
})));
});
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function test_ns(ns_sym){var _STAR_report_counters_STAR_53460 = cemerick.cljs.test._STAR_report_counters_STAR_;try{cemerick.cljs.test._STAR_report_counters_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test._STAR_initial_report_counters_STAR_);
cemerick.cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$374,cljs.core.constant$keyword$391,cljs.core.constant$keyword$392,ns_sym], null));
var temp__4096__auto___53461 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cemerick.cljs.test.registered_test_hooks),ns_sym);if(cljs.core.truth_(temp__4096__auto___53461))
{var test_hook_53462 = temp__4096__auto___53461;(test_hook_53462.cljs$core$IFn$_invoke$arity$0 ? test_hook_53462.cljs$core$IFn$_invoke$arity$0() : test_hook_53462.call(null));
} else
{cemerick.cljs.test.test_all_vars(ns_sym);
}
cemerick.cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$374,cljs.core.constant$keyword$393,cljs.core.constant$keyword$392,ns_sym], null));
return cljs.core.deref(cemerick.cljs.test._STAR_report_counters_STAR_);
}finally {cemerick.cljs.test._STAR_report_counters_STAR_ = _STAR_report_counters_STAR_53460;
}});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){var summary = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.test_ns,namespaces)),cljs.core.constant$keyword$374,cljs.core.constant$keyword$390);cemerick.cljs.test.do_report(summary);
return summary;
};
var run_tests_STAR_ = function (var_args){
var namespaces = null;if (arguments.length > 0) {
  namespaces = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__53463){
var namespaces = cljs.core.seq(arglist__53463);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.keys(cljs.core.deref(cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cemerick.cljs.test.run_tests_STAR_,cljs.core.filter((function (p1__53464_SHARP_){return cljs.core.re_matches(re,cljs.core.name(p1__53464_SHARP_));
}),cljs.core.keys(cljs.core.deref(cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(summary){return ((cljs.core.constant$keyword$383.cljs$core$IFn$_invoke$arity$2(summary,0) === 0)) && ((cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$2(summary,0) === 0));
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
