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
var formatter__1 = (function (fmts){return formatter.call(null,fmts,null);
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
cljs_time.format.formatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"medium-time","medium-time",1925790103),new cljs.core.Keyword(null,"short-datetime","short-datetime",1751251230),new cljs.core.Keyword(null,"t-time-no-ms","t-time-no-ms",3543854237),new cljs.core.Keyword(null,"full-date","full-date",3585221534),new cljs.core.Keyword(null,"long-datetime","long-datetime",4034852638),new cljs.core.Keyword(null,"basic-date-time","basic-date-time",4159957535),new cljs.core.Keyword(null,"date","date",1016980256),new cljs.core.Keyword(null,"date-hour-minute-second-ms","date-hour-minute-second-ms",1519934594),new cljs.core.Keyword(null,"full-datetime","full-datetime",591167595),new cljs.core.Keyword(null,"short-date","short-date",2533223889),new cljs.core.Keyword(null,"basic-date-time-no-ms","basic-date-time-no-ms",2491731332),new cljs.core.Keyword(null,"long-date","long-date",1095363537),new cljs.core.Keyword(null,"basic-time","basic-time",4138729598),new cljs.core.Keyword(null,"date-time","date-time",718869758),new cljs.core.Keyword(null,"hour-minute-second-fraction","hour-minute-second-fraction",2770095869),new cljs.core.Keyword(null,"date-time-no-ms","date-time-no-ms",569382179),new cljs.core.Keyword(null,"basic-time-no-ms","basic-time-no-ms",4308099235),new cljs.core.Keyword(null,"time-no-ms","time-no-ms",713593252),new cljs.core.Keyword(null,"date-hour-minute-second-fraction","date-hour-minute-second-fraction",3014285662),new cljs.core.Keyword(null,"basic-date","basic-date",4138245471),new cljs.core.Keyword(null,"basic-t-time-no-ms","basic-t-time-no-ms",4710397916),new cljs.core.Keyword(null,"rfc822","rfc822",4374831323),new cljs.core.Keyword(null,"hour-minute-second-ms","hour-minute-second-ms",1872672097),new cljs.core.Keyword(null,"t-time","t-time",4380004344),new cljs.core.Keyword(null,"medium-date","medium-date",1925305976),new cljs.core.Keyword(null,"medium-datetime","medium-datetime",2032350789),new cljs.core.Keyword(null,"basic-t-time","basic-t-time",1733736055),new cljs.core.Keyword(null,"full-time","full-time",3585705661),new cljs.core.Keyword(null,"time","time",1017464383),new cljs.core.Keyword(null,"mysql","mysql",1118286868),new cljs.core.Keyword(null,"long-time","long-time",1095847664),new cljs.core.Keyword(null,"short-time","short-time",2533708016)],[6,11,"T'HH:mm:ssZZ",0,9,"yyyyMMdd'T'HHmmss.SSSZ","yyyy-MM-dd","yyyy-MM-dd'T'HH:mm:ss.SSS",8,3,"yyyyMMdd'T'HHmmssZ",1,"HHmmss.SSSZ","yyyy-MM-dd'T'HH:mm:ss.SSSZZ","HH:mm:ss.SSS","yyyy-MM-dd'T'HH:mm:ssZZ","HHmmssZ","HH:mm:ssZZ","yyyy-MM-dd'T'HH:mm:ss.SSS","yyyyMMdd","'T'HHmmssZ","EEE, dd MMM yyyy HH:mm:ss Z","HH:mm:ss.SSS","T'HH:mm:ss.SSSZZ",2,10,"'T'HHmmss.SSSZ",4,"HH:mm:ss.SSSZZ","yyyy-MM-dd HH:mm:ss",5,7]);
cljs_time.format.parser = (function parser(fmt){return (new goog.i18n.DateTimeParse(fmt));
});
/**
* Returns a DateTime instance in the UTC time zone obtained by parsing the
* given string according to the given formatter.
*/
cljs_time.format.parse = (function parse(fmt,s){var dt = cljs_time.core.today_at_midnight.call(null);cljs_time.format.parser.call(null,fmt).strictParse(s,dt);
if(cljs.core._EQ_.call(null,dt,cljs_time.core.today_at_midnight.call(null)))
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
var unparse__delegate = function (fmt,dt,p__209073){var map__209075 = p__209073;var map__209075__$1 = ((cljs.core.seq_QMARK_.call(null,map__209075))?cljs.core.apply.call(null,cljs.core.hash_map,map__209075):map__209075);var tz = cljs.core.get.call(null,map__209075__$1,new cljs.core.Keyword(null,"tz","tz",1013907960));var tz__$1 = ((typeof tz === 'number')?cljs_time.core.time_zone_for_offset.call(null,tz):((typeof tz === 'string')?cljs_time.core.time_zone_for_id.call(null,tz):null));return cljs_time.format.formatter.call(null,fmt,tz__$1).format(dt);
};
var unparse = function (fmt,dt,var_args){
var p__209073 = null;if (arguments.length > 2) {
  p__209073 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return unparse__delegate.call(this,fmt,dt,p__209073);};
unparse.cljs$lang$maxFixedArity = 2;
unparse.cljs$lang$applyTo = (function (arglist__209076){
var fmt = cljs.core.first(arglist__209076);
arglist__209076 = cljs.core.next(arglist__209076);
var dt = cljs.core.first(arglist__209076);
var p__209073 = cljs.core.rest(arglist__209076);
return unparse__delegate(fmt,dt,p__209073);
});
unparse.cljs$core$IFn$_invoke$arity$variadic = unparse__delegate;
return unparse;
})()
;
/**
* @param {...*} var_args
*/
cljs_time.format.show_formatters = (function() { 
var show_formatters__delegate = function (p__209077){var map__209083 = p__209077;var map__209083__$1 = ((cljs.core.seq_QMARK_.call(null,map__209083))?cljs.core.apply.call(null,cljs.core.hash_map,map__209083):map__209083);var date_like = cljs.core.get.call(null,map__209083__$1,new cljs.core.Keyword(null,"date-like","date-like",718631368),cljs_time.core.now.call(null));var iter__8423__auto__ = (function iter__209084(s__209085){return (new cljs.core.LazySeq(null,(function (){var s__209085__$1 = s__209085;while(true){
var temp__4098__auto__ = cljs.core.seq.call(null,s__209085__$1);if(temp__4098__auto__)
{var s__209085__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__209085__$2))
{var c__8421__auto__ = cljs.core.chunk_first.call(null,s__209085__$2);var size__8422__auto__ = cljs.core.count.call(null,c__8421__auto__);var b__209087 = cljs.core.chunk_buffer.call(null,size__8422__auto__);if((function (){var i__209086 = 0;while(true){
if((i__209086 < size__8422__auto__))
{var i = cljs.core._nth.call(null,c__8421__auto__,i__209086);cljs.core.chunk_append.call(null,b__209087,cljs_time.format.unparse.call(null,i,date_like));
{
var G__209088 = (i__209086 + 1);
i__209086 = G__209088;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__209087),iter__209084.call(null,cljs.core.chunk_rest.call(null,s__209085__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__209087),null);
}
} else
{var i = cljs.core.first.call(null,s__209085__$2);return cljs.core.cons.call(null,cljs_time.format.unparse.call(null,i,date_like),iter__209084.call(null,cljs.core.rest.call(null,s__209085__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__.call(null,cljs.core.sort.call(null,cljs.core.vals.call(null,cljs_time.format.formatters)));
};
var show_formatters = function (var_args){
var p__209077 = null;if (arguments.length > 0) {
  p__209077 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return show_formatters__delegate.call(this,p__209077);};
show_formatters.cljs$lang$maxFixedArity = 0;
show_formatters.cljs$lang$applyTo = (function (arglist__209089){
var p__209077 = cljs.core.seq(arglist__209089);
return show_formatters__delegate(p__209077);
});
show_formatters.cljs$core$IFn$_invoke$arity$variadic = show_formatters__delegate;
return show_formatters;
})()
;
