// Compiled by ClojureScript 0.0-2120
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
cljs_time.coerce.ICoerce = (function (){var obj31494 = {};return obj31494;
})();
cljs_time.coerce.to_date_time = (function to_date_time(obj){if((function (){var and__8186__auto__ = obj;if(and__8186__auto__)
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1;
} else
{return and__8186__auto__;
}
})())
{return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else
{var x__8806__auto__ = (((obj == null))?null:obj);return (function (){var or__8198__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__8806__auto__)]);if(or__8198__auto__)
{return or__8198__auto__;
} else
{var or__8198__auto____$1 = (cljs_time.coerce.to_date_time["_"]);if(or__8198__auto____$1)
{return or__8198__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
})().call(null,obj);
}
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.from_long = (function from_long(millis){return cljs_time.core.date_time.call(null,(new Date(millis)));
});
/**
* return DateTime instance from string using
* formatters in clj-time.format, returning first
* which parses
*/
cljs_time.coerce.from_string = (function from_string(s){return cljs.core.first.call(null,(function (){var iter__8896__auto__ = (function iter__31503(s__31504){return (new cljs.core.LazySeq(null,(function (){var s__31504__$1 = s__31504;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31504__$1);if(temp__4092__auto__)
{var s__31504__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31504__$2))
{var c__8894__auto__ = cljs.core.chunk_first.call(null,s__31504__$2);var size__8895__auto__ = cljs.core.count.call(null,c__8894__auto__);var b__31506 = cljs.core.chunk_buffer.call(null,size__8895__auto__);if((function (){var i__31505 = 0;while(true){
if((i__31505 < size__8895__auto__))
{var f = cljs.core._nth.call(null,c__8894__auto__,i__31505);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e31509){if((e31509 instanceof Error))
{var e = e31509;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31509;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{cljs.core.chunk_append.call(null,b__31506,d);
{
var G__31511 = (i__31505 + 1);
i__31505 = G__31511;
continue;
}
} else
{{
var G__31512 = (i__31505 + 1);
i__31505 = G__31512;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31506),iter__31503.call(null,cljs.core.chunk_rest.call(null,s__31504__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31506),null);
}
} else
{var f = cljs.core.first.call(null,s__31504__$2);var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e31510){if((e31510 instanceof Error))
{var e = e31510;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31510;
} else
{return null;
}
}
}})();if(cljs.core.truth_(d))
{return cljs.core.cons.call(null,d,iter__31503.call(null,cljs.core.rest.call(null,s__31504__$2)));
} else
{{
var G__31513 = cljs.core.rest.call(null,s__31504__$2);
s__31504__$1 = G__31513;
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
});return iter__8896__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
});
/**
* Returns a DateTime instance in the UTC time zone corresponding to the given
* Java Date object.
*/
cljs_time.coerce.from_date = (function from_date(date){return cljs_time.coerce.from_long.call(null,date.getTime());
});
/**
* Convert `obj` to the number of milliseconds after the Unix epoch.
*/
cljs_time.coerce.to_long = (function to_long(obj){var temp__4090__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4090__auto__))
{var dt = temp__4090__auto__;return dt.getTime();
} else
{return null;
}
});
/**
* Convert `obj` to Unix epoch.
*/
cljs_time.coerce.to_epoch = (function to_epoch(obj){var millis = cljs_time.coerce.to_long.call(null,obj);var and__8186__auto__ = millis;if(cljs.core.truth_(and__8186__auto__))
{return (millis / 1000);
} else
{return and__8186__auto__;
}
});
/**
* Convert `obj` to a Java Date instance.
*/
cljs_time.coerce.to_date = (function to_date(obj){return cljs_time.coerce.to_date_time.call(null,obj);
});
/**
* Returns a string representation of obj in UTC time-zone
* using (ISODateTimeFormat/dateTime) date-time representation.
*/
cljs_time.coerce.to_string = (function to_string(obj){var temp__4090__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4090__auto__))
{var dt = temp__4090__auto__;return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",718869758).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),dt);
} else
{return null;
}
});
/**
* Convert `obj` to a org.joda.time.LocalDate instance
*/
cljs_time.coerce.to_local_date = (function to_local_date(obj){var temp__4090__auto__ = cljs_time.coerce.to_date_time.call(null,obj);if(cljs.core.truth_(temp__4090__auto__))
{var dt = temp__4090__auto__;return cljs_time.core.local_date.call(null,dt.getYear(),dt.getMonth(),dt.getDate());
} else
{return null;
}
});
(cljs_time.coerce.ICoerce["string"] = true);
(cljs_time.coerce.to_date_time["string"] = (function (string){return cljs_time.coerce.from_string.call(null,string);
}));
(cljs_time.coerce.ICoerce["number"] = true);
(cljs_time.coerce.to_date_time["number"] = (function (number){if(cljs.core.integer_QMARK_.call(null,number))
{return cljs_time.coerce.from_long.call(null,number);
} else
{return cljs_time.coerce.from_long.call(null,(number | 0));
}
}));
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){var date_time__$1 = this;return date_time__$1;
});
goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;
goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){var date__$1 = this;return cljs_time.coerce.from_date.call(null,date__$1);
});
(cljs_time.coerce.ICoerce["null"] = true);
(cljs_time.coerce.to_date_time["null"] = (function (_){return null;
}));

//# sourceMappingURL=coerce.js.map