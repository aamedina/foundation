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
cljs_time.coerce.ICoerce = (function (){var obj53159 = {};return obj53159;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__10885__auto__ = obj;if(and__10885__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__10885__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__11500__auto__ = (((obj == null))?null:obj);return (function (){var or__10897__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first((function (){var iter__11590__auto__ = (function iter__53168(s__53169){return (new cljs.core.LazySeq(null,(function (){var s__53169__$1 = s__53169;while(true){
var temp__4098__auto__ = cljs.core.seq(s__53169__$1);if(temp__4098__auto__)
{var s__53169__$2 = temp__4098__auto__;if(cljs.core.chunked_seq_QMARK_(s__53169__$2))
{var c__11588__auto__ = cljs.core.chunk_first(s__53169__$2);var size__11589__auto__ = cljs.core.count(c__11588__auto__);var b__53171 = cljs.core.chunk_buffer(size__11589__auto__);if((function (){var i__53170 = 0;while(true){
if((i__53170 < size__11589__auto__))
{var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__11588__auto__,i__53170);var d = (function (){try{return cljs_time.format.parse(f,s);
}catch (e53174){if((e53174 instanceof Error))
{var e = e53174;return null;
} else
{if(cljs.core.constant$keyword$274)
{throw e53174;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append(b__53171,d);
{
var G__53176 = (i__53170 + 1);
i__53170 = G__53176;
continue;
}
} else
{{
var G__53177 = (i__53170 + 1);
i__53170 = G__53177;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__53171),iter__53168(cljs.core.chunk_rest(s__53169__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__53171),null);
}
} else
{var f = cljs.core.first(s__53169__$2);var d = (function (){try{return cljs_time.format.parse(f,s);
}catch (e53175){if((e53175 instanceof Error))
{var e = e53175;return null;
} else
{if(cljs.core.constant$keyword$274)
{throw e53175;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons(d,iter__53168(cljs.core.rest(s__53169__$2)));
} else
{{
var G__53178 = cljs.core.rest(s__53169__$2);
s__53169__$1 = G__53178;
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
});return iter__11590__auto__(cljs.core.vals(cljs_time.format.formatters));
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
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long(obj);var and__10885__auto__ = millis;if(cljs.core.truth_(and__10885__auto__))
{return (millis / 1000);
} else
{return and__10885__auto__;
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
{var dt = temp__4096__auto__;return cljs_time.format.unparse(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
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
