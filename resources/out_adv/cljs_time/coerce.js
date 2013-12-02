// Compiled by ClojureScript 0.0-2080
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('goog.date.DateTime');
goog.require('cljs_time.core');
goog.require('goog.date.Date');
goog.require('cljs_time.format');
goog.require('goog.date.Date');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date');
goog.require('goog.date.DateTime');
goog.require('cljs_time.core');
cljs_time.coerce.ICoerce = (function (){var obj637853 = {};return obj637853;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__7718__auto__ = obj;if(and__7718__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__7718__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__8333__auto__ = (((obj == null))?null:obj);return (function (){var or__7730__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((new Date(millis)));
});
/**
* return DateTime instance from string using
* formatters in clj-time.format, returning first
* which parses
*/
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first((function (){var iter__8423__auto__ = (function iter__637862(s__637863){return (new cljs.core.LazySeq(null,(function (){var s__637863__$1 = s__637863;while(true){
var temp__4098__auto__ = cljs.core.seq(s__637863__$1);if(temp__4098__auto__)
{var s__637863__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__637863__$2))
{var c__8421__auto__ = cljs.core.chunk_first(s__637863__$2);var size__8422__auto__ = cljs.core.count(c__8421__auto__);var b__637865 = cljs.core.chunk_buffer(size__8422__auto__);if((function (){var i__637864 = 0;while(true){
if((i__637864 < size__8422__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8421__auto__,i__637864);var d = (function (){try{return cljs_time.format.parse(f,s);
}catch (e637868){if((e637868 instanceof Error))
{var e = e637868;return null;
} else
{if(cljs.core.constant$keyword$286)
{throw e637868;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__637865,d);
{
var G__637870 = (i__637864 + 1);
i__637864 = G__637870;
continue;
}
} else
{{
var G__637871 = (i__637864 + 1);
i__637864 = G__637871;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__637865),iter__637862(cljs.core.chunk_rest(s__637863__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__637865),null);
}
} else
{var f = cljs.core.first(s__637863__$2);var d = (function (){try{return cljs_time.format.parse(f,s);
}catch (e637869){if((e637869 instanceof Error))
{var e = e637869;return null;
} else
{if(cljs.core.constant$keyword$286)
{throw e637869;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__637862(cljs.core.rest(s__637863__$2)));
} else
{{
var G__637872 = cljs.core.rest(s__637863__$2);
s__637863__$1 = G__637872;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8423__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){return cljs_time.coerce.from_long(date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){var temp__4096__auto__ = cljs_time.coerce.to_date_time(obj);if(cljs.core.truth_(temp__4096__auto__))
{var dt = temp__4096__auto__;return dt.getTime();
} else
{return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long(obj);var and__7718__auto__ = millis;if(cljs.core.truth_(and__7718__auto__))
{return (millis / 1000);
} else
{return and__7718__auto__;
}
});
/**
* Convert `obj` to a Java Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){return cljs_time.coerce.to_date_time(obj);
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){var temp__4096__auto__ = cljs_time.coerce.to_date_time(obj);if(cljs.core.truth_(temp__4096__auto__))
{var dt = temp__4096__auto__;return cljs_time.format.unparse(cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else
{return null;
}
});
/**
* Convert `obj` to a org.joda.time.LocalDate instance
*/
cljs_time.coerce.to_local_date = (function to_local_date(obj){var temp__4096__auto__ = cljs_time.coerce.to_date_time(obj);if(cljs.core.truth_(temp__4096__auto__))
{var dt = temp__4096__auto__;return cljs_time.core.local_date(dt.getYear(),dt.getMonth(),dt.getDate());
} else
{return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);
(cljs_time.coerce.to_date_time["string"] = (function (string){return cljs_time.coerce.from_string(string);
}));
(cljs_time.coerce.ICoerce["number"] = true);
(cljs_time.coerce.to_date_time["number"] = (function (number){if(cljs.core.integer_QMARK_(number))
{return cljs_time.coerce.from_long(number);
} else
{return cljs_time.coerce.from_long((number | 0));
}
}));
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){var date__$1 = this;return cljs_time.coerce.from_date(date__$1);
});
(cljs_time.coerce.ICoerce["null"] = true);
(cljs_time.coerce.to_date_time["null"] = (function (_){return null;
}));
