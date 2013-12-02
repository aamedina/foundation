// Compiled by ClojureScript 0.0-2080
goog.provide('cljs_time.format');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.DateTimeParse');
goog.require('goog.i18n.DateTimeFormat');
goog.require('cljs_time.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
/**
* Returns a custom formatter for the given date-time pattern.
*/
cljs_time.format.formatter = (function() {
var formatter = null;
var formatter__1 = (function (fmts){return formatter.cljs$core$IFn$_invoke$arity$2(fmts,null);
});
var formatter__2 = (function (fmts,dtz){return (new goog.i18n.DateTimeFormat(fmts,dtz));
});
formatter = function(fmts,dtz){
switch(arguments.length){
case 1:
return formatter__1.call(this,fmts);
case 2:
return formatter__2.call(this,fmts,dtz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
formatter.cljs$core$IFn$_invoke$arity$1 = formatter__1;
formatter.cljs$core$IFn$_invoke$arity$2 = formatter__2;
return formatter;
})()
;
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$317,cljs.core.constant$keyword$318,cljs.core.constant$keyword$319,cljs.core.constant$keyword$320,cljs.core.constant$keyword$321,cljs.core.constant$keyword$322,cljs.core.constant$keyword$323,cljs.core.constant$keyword$324,cljs.core.constant$keyword$325,cljs.core.constant$keyword$326,cljs.core.constant$keyword$327,cljs.core.constant$keyword$328,cljs.core.constant$keyword$329,cljs.core.constant$keyword$330,cljs.core.constant$keyword$331,cljs.core.constant$keyword$332,cljs.core.constant$keyword$333,cljs.core.constant$keyword$334,cljs.core.constant$keyword$335,cljs.core.constant$keyword$336,cljs.core.constant$keyword$337,cljs.core.constant$keyword$338,cljs.core.constant$keyword$339,cljs.core.constant$keyword$340,cljs.core.constant$keyword$341,cljs.core.constant$keyword$342,cljs.core.constant$keyword$343,cljs.core.constant$keyword$344,cljs.core.constant$keyword$345,cljs.core.constant$keyword$346,cljs.core.constant$keyword$347,cljs.core.constant$keyword$348],[6,11,"T'HH:mm:ssZZ",0,9,"yyyyMMdd'T'HHmmss.SSSZ","yyyy-MM-dd","yyyy-MM-dd'T'HH:mm:ss.SSS",8,3,"yyyyMMdd'T'HHmmssZ",1,"HHmmss.SSSZ","yyyy-MM-dd'T'HH:mm:ss.SSSZZ","HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm:ssZZ","HHmmssZ","HH:mm:ssZZ","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyyMMdd","'T'HHmmssZ","EEE, dd MMM yyyy HH:mm:ss Z","HH:mm:ss.SSS","T'HH:mm:ss.SSSZZ",2,10,"'T'HHmmss.SSSZ",4,"HH:mm:ss.SSSZZ","yyyy-MM-dd HH:mm:ss",5,7]);
cljs_time.format.parser = (function parser(fmt){return (new goog.i18n.DateTimeParse(fmt));
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function parse(fmt,s){var dt = cljs_time.core.today_at_midnight();cljs_time.format.parser(fmt).strictParse(s,dt);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dt,cljs_time.core.today_at_midnight()))
{return null;
} else
{return dt;
}
});
/**
* Returns a string representing the given DateTime instance in UTC and in the
* form determined by the given formatter.
* @param {...*} var_args
*/
cljs_time.format.unparse = (function() { 
var unparse__delegate = function (fmt,dt,p__214239){var map__214241 = p__214239;var map__214241__$1 = ((cljs.core.seq_QMARK_(map__214241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__214241):map__214241);var tz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__214241__$1,cljs.core.constant$keyword$349);var tz__$1 = ((typeof tz === 'number')?cljs_time.core.time_zone_for_offset(tz):((typeof tz === 'string')?cljs_time.core.time_zone_for_id(tz):null));return cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,tz__$1).format(dt);
};
var unparse = function (fmt,dt,var_args){
var p__214239 = null;if (arguments.length > 2) {
  p__214239 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return unparse__delegate.call(this,fmt,dt,p__214239);};
unparse.cljs$lang$maxFixedArity = 2;
unparse.cljs$lang$applyTo = (function (arglist__214242){
var fmt = cljs.core.first(arglist__214242);
arglist__214242 = cljs.core.next(arglist__214242);
var dt = cljs.core.first(arglist__214242);
var p__214239 = cljs.core.rest(arglist__214242);
return unparse__delegate(fmt,dt,p__214239);
});
unparse.cljs$core$IFn$_invoke$arity$variadic = unparse__delegate;
return unparse;
})()
;
/**
* @param {...*} var_args
*/
cljs_time.format.show_formatters = (function() { 
var show_formatters__delegate = function (p__214243){var map__214249 = p__214243;var map__214249__$1 = ((cljs.core.seq_QMARK_(map__214249))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__214249):map__214249);var date_like = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__214249__$1,cljs.core.constant$keyword$350,cljs_time.core.now());var iter__8423__auto__ = (function iter__214250(s__214251){return (new cljs.core.LazySeq(null,(function (){var s__214251__$1 = s__214251;while(true){
var temp__4098__auto__ = cljs.core.seq(s__214251__$1);if(temp__4098__auto__)
{var s__214251__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__214251__$2))
{var c__8421__auto__ = cljs.core.chunk_first(s__214251__$2);var size__8422__auto__ = cljs.core.count(c__8421__auto__);var b__214253 = cljs.core.chunk_buffer(size__8422__auto__);if((function (){var i__214252 = 0;while(true){
if((i__214252 < size__8422__auto__))
{var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8421__auto__,i__214252);cljs.core.chunk_append(b__214253,cljs_time.format.unparse(i,date_like));
{
var G__214254 = (i__214252 + 1);
i__214252 = G__214254;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__214253),iter__214250(cljs.core.chunk_rest(s__214251__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__214253),null);
}
} else
{var i = cljs.core.first(s__214251__$2);return cljs.core.cons(cljs_time.format.unparse(i,date_like),iter__214250(cljs.core.rest(s__214251__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs_time.format.formatters)));
};
var show_formatters = function (var_args){
var p__214243 = null;if (arguments.length > 0) {
  p__214243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return show_formatters__delegate.call(this,p__214243);};
show_formatters.cljs$lang$maxFixedArity = 0;
show_formatters.cljs$lang$applyTo = (function (arglist__214255){
var p__214243 = cljs.core.seq(arglist__214255);
return show_formatters__delegate(p__214243);
});
show_formatters.cljs$core$IFn$_invoke$arity$variadic = show_formatters__delegate;
return show_formatters;
})()
;
