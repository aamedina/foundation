// Compiled by ClojureScript 0.0-2080
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.date.Interval');
goog.require('goog.date.DateTime');
goog.require('goog.date.Date');
goog.require('goog.date.Date');
goog.require('goog.date.DateRange');
goog.require('goog.i18n.TimeZone');
goog.require('goog.date.DateRange');
goog.require('goog.date.Interval');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.UtcDateTime');
goog.require('cljs.core.async');
goog.require('goog.date');
goog.require('goog.date.DateTime');
goog.require('goog.i18n.TimeZone');
cljs_time.core.DateTimeProtocol = (function (){var obj182043 = {};return obj182043;
})();
cljs_time.core.year = (function year(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.year[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.year["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.year",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.month = (function month(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.month[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.month["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.month",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day = (function day(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.day[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.day["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.day_of_week = (function day_of_week(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.day_of_week["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.day-of-week",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.hour = (function hour(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.hour[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.hour["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.hour",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.minute = (function minute(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.minute[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.minute["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minute",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.second = (function second(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.second[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.second["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.second",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.milli = (function milli(this$){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.milli[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.milli["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.milli",this$);
}
}
})().call(null,this$);
}
});
cljs_time.core.after_QMARK_ = (function after_QMARK_(this$,that){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.after_QMARK_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.after?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.before_QMARK_ = (function before_QMARK_(this$,that){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.before_QMARK_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.before?",this$);
}
}
})().call(null,this$,that);
}
});
cljs_time.core.plus_ = (function plus_(this$,period){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.plus_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.plus_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.plus-",this$);
}
}
})().call(null,this$,period);
}
});
cljs_time.core.minus_ = (function minus_(this$,period){if((function (){var and__6277__auto__ = this$;if(and__6277__auto__)
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2;
} else
{return and__6277__auto__;
}
})())
{return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else
{var x__6892__auto__ = (((this$ == null))?null:this$);return (function (){var or__6289__auto__ = (cljs_time.core.minus_[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.minus_["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DateTimeProtocol.minus-",this$);
}
}
})().call(null,this$,period);
}
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + 1);
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 > that);
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 < that);
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period);
return this$__$1;
});
goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period.getInverse());
return this$__$1;
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + 1);
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 > that);
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 < that);
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period);
return this$__$1;
});
goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period.getInverse());
return this$__$1;
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getYear();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){var this$__$1 = this;return (this$__$1.getMonth() + 1);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDate();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getDay();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getHours();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMinutes();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getSeconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){var this$__$1 = this;return this$__$1.getMilliseconds();
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 > that);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){var this$__$1 = this;return (this$__$1 < that);
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period);
return this$__$1;
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){var this$__$1 = this;this$__$1.add(period.getInverse());
return this$__$1;
});
/**
* Returns a DateTime for the current instant in the UTC time zone.
*/
cljs_time.core.now = (function now(){return (new goog.date.UtcDateTime());
});
/**
* Returns a DateMidnight for today at midnight in the UTC time zone.
*/
cljs_time.core.today_at_midnight = (function today_at_midnight(){var G__182045 = (new goog.date.UtcDateTime());G__182045.setHours(0);
G__182045.setMinutes(0);
G__182045.setSeconds(0);
G__182045.setMilliseconds(0);
return G__182045;
});
/**
* Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
*/
cljs_time.core.epoch = (function epoch(){var G__182047 = (new goog.date.UtcDateTime());G__182047.setTime(0);
return G__182047;
});
/**
* Constructs and returns a new UtcDateTime at midnight.
* Specify the year, month of year, day of month. Note that month and day are
* 1-indexed. Any number of least-significant components can be omitted, in which
* case they will default to 1.
*/
cljs_time.core.date_midnight = (function() {
var date_midnight = null;
var date_midnight__1 = (function (year){return date_midnight.call(null,year,1,1);
});
var date_midnight__2 = (function (year,month){return date_midnight.call(null,year,month,1);
});
var date_midnight__3 = (function (year,month,day){return (new goog.date.UtcDateTime(year,(month - 1),day,0,0,0,0));
});
date_midnight = function(year,month,day){
switch(arguments.length){
case 1:
return date_midnight__1.call(this,year);
case 2:
return date_midnight__2.call(this,year,month);
case 3:
return date_midnight__3.call(this,year,month,day);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_midnight.cljs$core$IFn$_invoke$arity$1 = date_midnight__1;
date_midnight.cljs$core$IFn$_invoke$arity$2 = date_midnight__2;
date_midnight.cljs$core$IFn$_invoke$arity$3 = date_midnight__3;
return date_midnight;
})()
;
/**
* Constructs and returns a new DateTime in UTC.
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.date_time = (function() {
var date_time = null;
var date_time__1 = (function (year){return date_time.call(null,year,1,1,0,0,0,0);
});
var date_time__2 = (function (year,month){return date_time.call(null,year,month,1,0,0,0,0);
});
var date_time__3 = (function (year,month,day){return date_time.call(null,year,month,day,0,0,0,0);
});
var date_time__4 = (function (year,month,day,hour){return date_time.call(null,year,month,day,hour,0,0,0);
});
var date_time__5 = (function (year,month,day,hour,minute){return date_time.call(null,year,month,day,hour,minute,0,0);
});
var date_time__6 = (function (year,month,day,hour,minute,second){return date_time.call(null,year,month,day,hour,minute,second,0);
});
var date_time__7 = (function (year,month,day,hour,minute,second,millis){return (new goog.date.UtcDateTime(year,(month - 1),day,hour,minute,second,millis));
});
date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return date_time__1.call(this,year);
case 2:
return date_time__2.call(this,year,month);
case 3:
return date_time__3.call(this,year,month,day);
case 4:
return date_time__4.call(this,year,month,day,hour);
case 5:
return date_time__5.call(this,year,month,day,hour,minute);
case 6:
return date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_time.cljs$core$IFn$_invoke$arity$1 = date_time__1;
date_time.cljs$core$IFn$_invoke$arity$2 = date_time__2;
date_time.cljs$core$IFn$_invoke$arity$3 = date_time__3;
date_time.cljs$core$IFn$_invoke$arity$4 = date_time__4;
date_time.cljs$core$IFn$_invoke$arity$5 = date_time__5;
date_time.cljs$core$IFn$_invoke$arity$6 = date_time__6;
date_time.cljs$core$IFn$_invoke$arity$7 = date_time__7;
return date_time;
})()
;
/**
* Constructs and returns a new LocalDateTime.
* Specify the year, month of year, day of month, hour of day, minute if hour,
* second of minute, and millisecond of second. Note that month and day are
* 1-indexed while hour, second, minute, and millis are 0-indexed.
* Any number of least-significant components can be ommited, in which case
* they will default to 1 or 0 as appropriate.
*/
cljs_time.core.local_date_time = (function() {
var local_date_time = null;
var local_date_time__1 = (function (year){return local_date_time.call(null,year,1,1,0,0,0,0);
});
var local_date_time__2 = (function (year,month){return local_date_time.call(null,year,month,1,0,0,0,0);
});
var local_date_time__3 = (function (year,month,day){return local_date_time.call(null,year,month,day,0,0,0,0);
});
var local_date_time__4 = (function (year,month,day,hour){return local_date_time.call(null,year,month,day,hour,0,0,0);
});
var local_date_time__5 = (function (year,month,day,hour,minute){return local_date_time.call(null,year,month,day,hour,minute,0,0);
});
var local_date_time__6 = (function (year,month,day,hour,minute,second){return local_date_time.call(null,year,month,day,hour,minute,second,0);
});
var local_date_time__7 = (function (year,month,day,hour,minute,second,millis){return (new goog.date.DateTime(year,(month - 1),day,hour,minute,second,millis));
});
local_date_time = function(year,month,day,hour,minute,second,millis){
switch(arguments.length){
case 1:
return local_date_time__1.call(this,year);
case 2:
return local_date_time__2.call(this,year,month);
case 3:
return local_date_time__3.call(this,year,month,day);
case 4:
return local_date_time__4.call(this,year,month,day,hour);
case 5:
return local_date_time__5.call(this,year,month,day,hour,minute);
case 6:
return local_date_time__6.call(this,year,month,day,hour,minute,second);
case 7:
return local_date_time__7.call(this,year,month,day,hour,minute,second,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
local_date_time.cljs$core$IFn$_invoke$arity$1 = local_date_time__1;
local_date_time.cljs$core$IFn$_invoke$arity$2 = local_date_time__2;
local_date_time.cljs$core$IFn$_invoke$arity$3 = local_date_time__3;
local_date_time.cljs$core$IFn$_invoke$arity$4 = local_date_time__4;
local_date_time.cljs$core$IFn$_invoke$arity$5 = local_date_time__5;
local_date_time.cljs$core$IFn$_invoke$arity$6 = local_date_time__6;
local_date_time.cljs$core$IFn$_invoke$arity$7 = local_date_time__7;
return local_date_time;
})()
;
/**
* Constructs and returns a new LocalDate.
* Specify the year, month, and day. Does not deal with timezones.
*/
cljs_time.core.local_date = (function local_date(year,month,day){return (new goog.date.Date(year,month,day));
});
/**
* Constructs and returns a new LocalDate representing today's date.
* LocalDate objects do not deal with timezones at all.
*/
cljs_time.core.today = (function today(){return (new goog.date.Date());
});
/**
* Returns a DateTimeZone for the given offset, specified either in hours or
* hours and minutes.
*/
cljs_time.core.time_zone_for_offset = (function time_zone_for_offset(hours){return goog.i18n.TimeZone.createTimeZone(hours);
});
/**
* Returns a DateTimeZone for the given ID, which must be in long form, e.g.
* 'America/Matamoros'.
*/
cljs_time.core.time_zone_for_id = (function time_zone_for_id(id){return id;
});
/**
* Given a number, returns a Period representing that many years.
* Without an argument, returns a PeriodType representing only years.
*/
cljs_time.core.years = (function() {
var years = null;
var years__0 = (function (){return goog.date.Interval.YEARS;
});
var years__1 = (function (n){return (new goog.date.Interval(n));
});
years = function(n){
switch(arguments.length){
case 0:
return years__0.call(this);
case 1:
return years__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
years.cljs$core$IFn$_invoke$arity$0 = years__0;
years.cljs$core$IFn$_invoke$arity$1 = years__1;
return years;
})()
;
/**
* Given a number, returns a Period representing that many months.
* Without an argument, returns a PeriodType representing only months.
*/
cljs_time.core.months = (function() {
var months = null;
var months__0 = (function (){return goog.date.Interval.MONTHS;
});
var months__1 = (function (n){return (new goog.date.Interval(0,n));
});
months = function(n){
switch(arguments.length){
case 0:
return months__0.call(this);
case 1:
return months__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
months.cljs$core$IFn$_invoke$arity$0 = months__0;
months.cljs$core$IFn$_invoke$arity$1 = months__1;
return months;
})()
;
/**
* Given a number, returns a Period representing that many weeks.
* Without an argument, returns a PeriodType representing only weeks.
*/
cljs_time.core.weeks = (function weeks(n){return (new goog.date.Interval(0,0,(7 * n)));
});
/**
* Given a number, returns a Period representing that many days.
* Without an argument, returns a PeriodType representing only days.
*/
cljs_time.core.days = (function() {
var days = null;
var days__0 = (function (){return goog.date.Interval.DAYS;
});
var days__1 = (function (n){return (new goog.date.Interval(0,0,n));
});
days = function(n){
switch(arguments.length){
case 0:
return days__0.call(this);
case 1:
return days__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
days.cljs$core$IFn$_invoke$arity$0 = days__0;
days.cljs$core$IFn$_invoke$arity$1 = days__1;
return days;
})()
;
/**
* Given a number, returns a Period representing that many hours.
* Without an argument, returns a PeriodType representing only hours.
*/
cljs_time.core.hours = (function() {
var hours = null;
var hours__0 = (function (){return goog.date.Interval.HOURS;
});
var hours__1 = (function (n){return (new goog.date.Interval(0,0,0,n));
});
hours = function(n){
switch(arguments.length){
case 0:
return hours__0.call(this);
case 1:
return hours__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hours.cljs$core$IFn$_invoke$arity$0 = hours__0;
hours.cljs$core$IFn$_invoke$arity$1 = hours__1;
return hours;
})()
;
/**
* Given a number, returns a Period representing that many minutes.
* Without an argument, returns a PeriodType representing only minutes.
*/
cljs_time.core.minutes = (function() {
var minutes = null;
var minutes__0 = (function (){return goog.date.Interval.MINUTES;
});
var minutes__1 = (function (n){return (new goog.date.Interval(0,0,0,0,n));
});
minutes = function(n){
switch(arguments.length){
case 0:
return minutes__0.call(this);
case 1:
return minutes__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minutes.cljs$core$IFn$_invoke$arity$0 = minutes__0;
minutes.cljs$core$IFn$_invoke$arity$1 = minutes__1;
return minutes;
})()
;
/**
* Given a number, returns a Period representing that many seconds.
* Without an argument, returns a PeriodType representing only seconds.
*/
cljs_time.core.seconds = (function() {
var seconds = null;
var seconds__0 = (function (){return goog.date.Interval.SECONDS;
});
var seconds__1 = (function (n){return (new goog.date.Interval(0,0,0,0,0,n));
});
seconds = function(n){
switch(arguments.length){
case 0:
return seconds__0.call(this);
case 1:
return seconds__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seconds.cljs$core$IFn$_invoke$arity$0 = seconds__0;
seconds.cljs$core$IFn$_invoke$arity$1 = seconds__1;
return seconds;
})()
;
/**
* Returns a new date/time corresponding to the given date/time moved forwards by
* the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.plus = (function() {
var plus = null;
var plus__2 = (function (dt,p){return cljs_time.core.plus_.call(null,dt,p);
});
var plus__3 = (function() { 
var G__182048__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.plus_,cljs_time.core.plus_.call(null,dt,p),ps);
};
var G__182048 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__182048__delegate.call(this,dt,p,ps);};
G__182048.cljs$lang$maxFixedArity = 2;
G__182048.cljs$lang$applyTo = (function (arglist__182049){
var dt = cljs.core.first(arglist__182049);
arglist__182049 = cljs.core.next(arglist__182049);
var p = cljs.core.first(arglist__182049);
var ps = cljs.core.rest(arglist__182049);
return G__182048__delegate(dt,p,ps);
});
G__182048.cljs$core$IFn$_invoke$arity$variadic = G__182048__delegate;
return G__182048;
})()
;
plus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return plus__2.call(this,dt,p);
default:
return plus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plus.cljs$lang$maxFixedArity = 2;
plus.cljs$lang$applyTo = plus__3.cljs$lang$applyTo;
plus.cljs$core$IFn$_invoke$arity$2 = plus__2;
plus.cljs$core$IFn$_invoke$arity$variadic = plus__3.cljs$core$IFn$_invoke$arity$variadic;
return plus;
})()
;
/**
* Returns a new date/time object corresponding to the given date/time moved
* backwards by the given Period(s).
* @param {...*} var_args
*/
cljs_time.core.minus = (function() {
var minus = null;
var minus__2 = (function (dt,p){return cljs_time.core.minus_.call(null,dt,p);
});
var minus__3 = (function() { 
var G__182050__delegate = function (dt,p,ps){return cljs.core.reduce.call(null,cljs_time.core.minus_,cljs_time.core.minus_.call(null,dt,p),ps);
};
var G__182050 = function (dt,p,var_args){
var ps = null;if (arguments.length > 2) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__182050__delegate.call(this,dt,p,ps);};
G__182050.cljs$lang$maxFixedArity = 2;
G__182050.cljs$lang$applyTo = (function (arglist__182051){
var dt = cljs.core.first(arglist__182051);
arglist__182051 = cljs.core.next(arglist__182051);
var p = cljs.core.first(arglist__182051);
var ps = cljs.core.rest(arglist__182051);
return G__182050__delegate(dt,p,ps);
});
G__182050.cljs$core$IFn$_invoke$arity$variadic = G__182050__delegate;
return G__182050;
})()
;
minus = function(dt,p,var_args){
var ps = var_args;
switch(arguments.length){
case 2:
return minus__2.call(this,dt,p);
default:
return minus__3.cljs$core$IFn$_invoke$arity$variadic(dt,p, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
minus.cljs$lang$maxFixedArity = 2;
minus.cljs$lang$applyTo = minus__3.cljs$lang$applyTo;
minus.cljs$core$IFn$_invoke$arity$2 = minus__2;
minus.cljs$core$IFn$_invoke$arity$variadic = minus__3.cljs$core$IFn$_invoke$arity$variadic;
return minus;
})()
;
/**
* Returns a DateTime a supplied period before the present.
* e.g. (-> 5 years ago)
*/
cljs_time.core.ago = (function ago(period){return cljs_time.core.minus.call(null,cljs_time.core.now.call(null),period);
});
/**
* Returns a DateTime a supplied period after the present.
* e.g. (-> 30 minutes from-now)
*/
cljs_time.core.from_now = (function from_now(period){return cljs_time.core.plus.call(null,cljs_time.core.now.call(null),period);
});
cljs_time.core.interval = (function interval(dt_a,dt_b){return (new goog.date.DateRange(dt_a,dt_b));
});
/**
* Returns the start DateTime of an Interval.
*/
cljs_time.core.start = (function start(in$){return in$.getStartDate();
});
/**
* Returns the end DateTime of an Interval.
*/
cljs_time.core.end = (function end(in$){return in$.getEndDate();
});
/**
* Returns an Interval with an end ReadableDateTime the specified Period after the
* end of the given Interval
* @param {...*} var_args
*/
cljs_time.core.extend = (function() { 
var extend__delegate = function (in$,by){return cljs_time.core.interval.call(null,cljs_time.core.start.call(null,in$),cljs.core.apply.call(null,cljs_time.core.plus,cljs_time.core.end.call(null,in$),by));
};
var extend = function (in$,var_args){
var by = null;if (arguments.length > 1) {
  by = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return extend__delegate.call(this,in$,by);};
extend.cljs$lang$maxFixedArity = 1;
extend.cljs$lang$applyTo = (function (arglist__182052){
var in$ = cljs.core.first(arglist__182052);
var by = cljs.core.rest(arglist__182052);
return extend__delegate(in$,by);
});
extend.cljs$core$IFn$_invoke$arity$variadic = extend__delegate;
return extend;
})()
;
/**
* Returns the number of milliseconds in the given Interval.
*/
cljs_time.core.in_millis = (function in_millis(in$){return (cljs_time.core.end.call(null,in$).getTime() - cljs_time.core.start.call(null,in$).getTime());
});
cljs_time.core.to_period = (function to_period(in$){var pred__182056 = cljs.core._EQ_;var expr__182057 = cljs.core.type.call(null,in$);if(cljs.core.truth_(pred__182056.call(null,goog.date.Interval,expr__182057)))
{return in$;
} else
{if(cljs.core.truth_(pred__182056.call(null,goog.date.DateRange,expr__182057)))
{return (new goog.date.Interval(0,0,0,0,0,((cljs_time.core.in_millis.call(null,in$) / 1000) | 0)));
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__182057)].join('')));
}
}
});
/**
* Returns the number of standard seconds in the given Interval.
*/
cljs_time.core.in_seconds = (function in_seconds(in$){return cljs_time.core.to_period.call(null,in$).getTotalSeconds();
});
/**
* Returns the number of standard minutes in the given Interval.
*/
cljs_time.core.in_minutes = (function in_minutes(in$){return ((cljs_time.core.in_seconds.call(null,in$) / 60) | 0);
});
/**
* Returns the number of standard hours in the given Interval.
*/
cljs_time.core.in_hours = (function in_hours(in$){return ((cljs_time.core.in_minutes.call(null,in$) / 60) | 0);
});
/**
* Returns the number of standard days in the given Interval.
*/
cljs_time.core.in_days = (function in_days(in$){return ((cljs_time.core.in_hours.call(null,in$) / 24) | 0);
});
/**
* Returns the number of standard weeks in the given Interval.
*/
cljs_time.core.in_weeks = (function in_weeks(in$){return ((cljs_time.core.in_days.call(null,in$) / 7) | 0);
});
/**
* Returns the number of standard months in the given Interval.
*/
cljs_time.core.in_months = (function in_months(in$){return (cljs_time.core.month.call(null,cljs_time.core.end.call(null,in$)) - cljs_time.core.month.call(null,cljs_time.core.start.call(null,in$)));
});
/**
* Returns the number of standard years in the given Interval.
*/
cljs_time.core.in_years = (function in_years(in$){return (cljs_time.core.year.call(null,cljs_time.core.end.call(null,in$)) - cljs_time.core.year.call(null,cljs_time.core.start.call(null,in$)));
});
/**
* With 2 arguments: Returns true if the given Interval contains the given
* ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
* end of the interval, this function returns false.
* With 3 arguments: Returns true if the start ReadablePartial is
* equal to or before and the end ReadablePartial is equal to or after the test
* ReadablePartial.
*/
cljs_time.core.within_QMARK_ = (function() {
var within_QMARK_ = null;
var within_QMARK___2 = (function (i,dt){return ((dt > cljs_time.core.start.call(null,i))) && ((dt < cljs_time.core.end.call(null,i)));
});
var within_QMARK___3 = (function (start,end,test){return ((test >= start)) && ((test <= end));
});
within_QMARK_ = function(start,end,test){
switch(arguments.length){
case 2:
return within_QMARK___2.call(this,start,end);
case 3:
return within_QMARK___3.call(this,start,end,test);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
within_QMARK_.cljs$core$IFn$_invoke$arity$2 = within_QMARK___2;
within_QMARK_.cljs$core$IFn$_invoke$arity$3 = within_QMARK___3;
return within_QMARK_;
})()
;
/**
* With 2 arguments: Returns true of the two given Intervals overlap.
* Note that intervals that satisfy abuts? do not satisfy overlaps?
* With 4 arguments: Returns true if the range specified by start-a and end-a
* overlaps with the range specified by start-b and end-b.
*/
cljs_time.core.overlaps_QMARK_ = (function() {
var overlaps_QMARK_ = null;
var overlaps_QMARK___2 = (function (i_a,i_b){return overlaps_QMARK_.call(null,cljs_time.core.start.call(null,i_a),cljs_time.core.end.call(null,i_a),cljs_time.core.start.call(null,i_b),cljs_time.core.end.call(null,i_b));
});
var overlaps_QMARK___4 = (function (start_a,end_a,start_b,end_b){var or__6289__auto__ = (function (){var and__6277__auto__ = cljs_time.core.before_QMARK_.call(null,start_b,end_a);if(cljs.core.truth_(and__6277__auto__))
{return cljs_time.core.after_QMARK_.call(null,end_b,start_a);
} else
{return and__6277__auto__;
}
})();if(cljs.core.truth_(or__6289__auto__))
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (function (){var and__6277__auto__ = cljs_time.core.after_QMARK_.call(null,end_b,start_a);if(cljs.core.truth_(and__6277__auto__))
{return cljs_time.core.before_QMARK_.call(null,start_b,end_a);
} else
{return and__6277__auto__;
}
})();if(cljs.core.truth_(or__6289__auto____$1))
{return or__6289__auto____$1;
} else
{return (cljs.core._EQ_.call(null,start_a,end_b)) || (cljs.core._EQ_.call(null,start_b,end_a));
}
}
});
overlaps_QMARK_ = function(start_a,end_a,start_b,end_b){
switch(arguments.length){
case 2:
return overlaps_QMARK___2.call(this,start_a,end_a);
case 4:
return overlaps_QMARK___4.call(this,start_a,end_a,start_b,end_b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = overlaps_QMARK___2;
overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = overlaps_QMARK___4;
return overlaps_QMARK_;
})()
;
cljs_time.core.mins_ago = (function mins_ago(d){return cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,d,cljs_time.core.now.call(null)));
});
cljs_time.core.number_of_days_in_the_month = (function() {
var number_of_days_in_the_month = null;
var number_of_days_in_the_month__1 = (function (dt){return number_of_days_in_the_month.call(null,cljs_time.core.year.call(null,dt),cljs_time.core.month.call(null,dt));
});
var number_of_days_in_the_month__2 = (function (year,month){return goog.date.getNumberOfDaysInMonth(year,(month - 1));
});
number_of_days_in_the_month = function(year,month){
switch(arguments.length){
case 1:
return number_of_days_in_the_month__1.call(this,year);
case 2:
return number_of_days_in_the_month__2.call(this,year,month);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = number_of_days_in_the_month__1;
number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = number_of_days_in_the_month__2;
return number_of_days_in_the_month;
})()
;
cljs_time.core.last_day_of_the_month = (function last_day_of_the_month(dt){var G__182060 = dt;G__182060.setDate(cljs_time.core.number_of_days_in_the_month.call(null,dt));
return G__182060;
});
cljs_time.core.first_day_of_the_month = (function first_day_of_the_month(dt){var G__182062 = dt;G__182062.setDate(1);
return G__182062;
});
cljs_time.core.today_at = (function() {
var today_at = null;
var today_at__2 = (function (hours,minutes){return today_at.call(null,hours,minutes,0);
});
var today_at__3 = (function (hours,minutes,seconds){return today_at.call(null,hours,minutes,seconds,0);
});
var today_at__4 = (function (hours,minutes,seconds,millis){return cljs_time.core.date_time.call(null,(function (){var G__182064 = cljs_time.core.now.call(null);G__182064.setHourOfDay(hours);
G__182064.setMinuteOfHour(minutes);
G__182064.setSecondOfMinute(seconds);
G__182064.setMillisOfSecond(millis);
return G__182064;
})());
});
today_at = function(hours,minutes,seconds,millis){
switch(arguments.length){
case 2:
return today_at__2.call(this,hours,minutes);
case 3:
return today_at__3.call(this,hours,minutes,seconds);
case 4:
return today_at__4.call(this,hours,minutes,seconds,millis);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
today_at.cljs$core$IFn$_invoke$arity$2 = today_at__2;
today_at.cljs$core$IFn$_invoke$arity$3 = today_at__3;
today_at.cljs$core$IFn$_invoke$arity$4 = today_at__4;
return today_at;
})()
;
cljs_time.core.do_at_STAR_ = (function do_at_STAR_(base_date_time,body_fn){var ms = (base_date_time.getTime() - cljs_time.core.now.call(null).getTime());var c__13409__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__13410__auto__ = (function (){var switch__13309__auto__ = (function (state_182101){var state_val_182102 = (state_182101[1]);if((state_val_182102 === 5))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_182101,4,Error,null,3);var inst_182097 = body_fn.call(null);var state_182101__$1 = state_182101;var statearr_182103_182115 = state_182101__$1;(statearr_182103_182115[2] = inst_182097);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_182102 === 4))
{var inst_182093 = (state_182101[2]);var state_182101__$1 = (function (){var statearr_182104 = state_182101;(statearr_182104[7] = inst_182093);
return statearr_182104;
})();var statearr_182105_182116 = state_182101__$1;(statearr_182105_182116[2] = null);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_182102 === 3))
{var inst_182099 = (state_182101[2]);var state_182101__$1 = state_182101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_182101__$1,inst_182099);
} else
{if((state_val_182102 === 2))
{var inst_182092 = (state_182101[2]);var state_182101__$1 = (function (){var statearr_182106 = state_182101;(statearr_182106[8] = inst_182092);
return statearr_182106;
})();var statearr_182107_182117 = state_182101__$1;(statearr_182107_182117[2] = null);
(statearr_182107_182117[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_182102 === 1))
{var inst_182090 = cljs.core.async.timeout.call(null,ms);var state_182101__$1 = state_182101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_182101__$1,2,inst_182090);
} else
{return null;
}
}
}
}
}
});return ((function (switch__13309__auto__){
return (function() {
var state_machine__13310__auto__ = null;
var state_machine__13310__auto____0 = (function (){var statearr_182111 = (new Array(9));(statearr_182111[0] = state_machine__13310__auto__);
(statearr_182111[1] = 1);
return statearr_182111;
});
var state_machine__13310__auto____1 = (function (state_182101){while(true){
var ret_value__13311__auto__ = (function (){try{while(true){
var result__13312__auto__ = switch__13309__auto__.call(null,state_182101);if(cljs.core.keyword_identical_QMARK_.call(null,result__13312__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__13312__auto__;
}
break;
}
}catch (e182112){if((e182112 instanceof Object))
{var ex__13313__auto__ = e182112;var statearr_182113_182118 = state_182101;(statearr_182113_182118[5] = ex__13313__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_182101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e182112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13311__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__182119 = state_182101;
state_182101 = G__182119;
continue;
}
} else
{return ret_value__13311__auto__;
}
break;
}
});
state_machine__13310__auto__ = function(state_182101){
switch(arguments.length){
case 0:
return state_machine__13310__auto____0.call(this);
case 1:
return state_machine__13310__auto____1.call(this,state_182101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13310__auto____0;
state_machine__13310__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13310__auto____1;
return state_machine__13310__auto__;
})()
;})(switch__13309__auto__))
})();var state__13411__auto__ = (function (){var statearr_182114 = f__13410__auto__.call(null);(statearr_182114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13409__auto__);
return statearr_182114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13411__auto__);
}));
return c__13409__auto__;
});
cljs_time.core.Mappable = (function (){var obj182121 = {};return obj182121;
})();
cljs_time.core.instant__GT_map = (function instant__GT_map(instant){if((function (){var and__6277__auto__ = instant;if(and__6277__auto__)
{return instant.cljs_time$core$Mappable$instant__GT_map$arity$1;
} else
{return and__6277__auto__;
}
})())
{return instant.cljs_time$core$Mappable$instant__GT_map$arity$1(instant);
} else
{var x__6892__auto__ = (((instant == null))?null:instant);return (function (){var or__6289__auto__ = (cljs_time.core.instant__GT_map[goog.typeOf(x__6892__auto__)]);if(or__6289__auto__)
{return or__6289__auto__;
} else
{var or__6289__auto____$1 = (cljs_time.core.instant__GT_map["_"]);if(or__6289__auto____$1)
{return or__6289__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mappable.instant->map",instant);
}
}
})().call(null,instant);
}
});
cljs_time.core.to_map = (function to_map(years,months,days,hours,minutes,seconds){return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"years","years",1128756040),years,new cljs.core.Keyword(null,"months","months",4240384357),months,new cljs.core.Keyword(null,"days","days",1016980425),days,new cljs.core.Keyword(null,"hours","hours",1113373313),hours,new cljs.core.Keyword(null,"minutes","minutes",2078806097),minutes,new cljs.core.Keyword(null,"seconds","seconds",2984001009),seconds], null);
});
goog.date.DateRange.prototype.cljs_time$core$Mappable$ = true;
goog.date.DateRange.prototype.cljs_time$core$Mappable$instant__GT_map$arity$1 = (function (it){var it__$1 = this;return cljs_time.core.to_map.call(null,cljs_time.core.in_years.call(null,it__$1),cljs_time.core.in_months.call(null,it__$1),cljs_time.core.in_days.call(null,it__$1),cljs_time.core.in_hours.call(null,it__$1),cljs_time.core.in_minutes.call(null,it__$1),cljs_time.core.in_seconds.call(null,it__$1));
});
goog.date.Interval.prototype.cljs_time$core$Mappable$ = true;
goog.date.Interval.prototype.cljs_time$core$Mappable$instant__GT_map$arity$1 = (function (period){var period__$1 = this;return cljs_time.core.to_map.call(null,period__$1.years,period__$1.months,period__$1.days,period__$1.hours,period__$1.minutes,period__$1.seconds);
});
goog.date.DateTime.prototype.cljs_time$core$Mappable$ = true;
goog.date.DateTime.prototype.cljs_time$core$Mappable$instant__GT_map$arity$1 = (function (dt){var dt__$1 = this;return cljs_time.core.to_map.call(null,dt__$1.getYear(),dt__$1.getMonth(),dt__$1.getDate(),dt__$1.getHours(),dt__$1.getMinutes(),dt__$1.getSeconds());
});
goog.date.Date.prototype.cljs$core$IEquiv$ = true;
goog.date.Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var o__$1 = this;return ((other instanceof goog.date.Date)) && ((o__$1.toString() === other.toString()));
});
goog.date.Date.prototype.cljs$core$IPrintWithWriter$ = true;
goog.date.Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (obj,writer,opts){var obj__$1 = this;var obj__$2 = (new Date(obj__$1.getTime()));var normalize = ((function (obj__$2){
return (function (n,len){var ns = [cljs.core.str(n)].join('');while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__182122 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__182122;
continue;
}
} else
{return ns;
}
break;
}
});})(obj__$2))
;return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(obj__$2.getUTCFullYear())].join(''),"-",normalize.call(null,(obj__$2.getUTCMonth() + 1),2),"-",normalize.call(null,obj__$2.getUTCDate(),2),"T",normalize.call(null,obj__$2.getUTCHours(),2),":",normalize.call(null,obj__$2.getUTCMinutes(),2),":",normalize.call(null,obj__$2.getUTCSeconds(),2),".",normalize.call(null,obj__$2.getUTCMilliseconds(),3),"-","00:00\"");
});
/**
* @param {...*} var_args
*/
cljs_time.core.fpartial = (function() { 
var fpartial__delegate = function (f,args){return (function() { 
var G__182123__delegate = function (arg,more){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,args,more));
};
var G__182123 = function (arg,var_args){
var more = null;if (arguments.length > 1) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__182123__delegate.call(this,arg,more);};
G__182123.cljs$lang$maxFixedArity = 1;
G__182123.cljs$lang$applyTo = (function (arglist__182124){
var arg = cljs.core.first(arglist__182124);
var more = cljs.core.rest(arglist__182124);
return G__182123__delegate(arg,more);
});
G__182123.cljs$core$IFn$_invoke$arity$variadic = G__182123__delegate;
return G__182123;
})()
;
};
var fpartial = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return fpartial__delegate.call(this,f,args);};
fpartial.cljs$lang$maxFixedArity = 1;
fpartial.cljs$lang$applyTo = (function (arglist__182125){
var f = cljs.core.first(arglist__182125);
var args = cljs.core.rest(arglist__182125);
return fpartial__delegate(f,args);
});
fpartial.cljs$core$IFn$_invoke$arity$variadic = fpartial__delegate;
return fpartial;
})()
;
