// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t639328 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639328 = (function (f,fn_handler,meta639329){
this.f = f;
this.fn_handler = fn_handler;
this.meta639329 = meta639329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639328.cljs$lang$type = true;
cljs.core.async.t639328.cljs$lang$ctorStr = "cljs.core.async/t639328";
cljs.core.async.t639328.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639328");
});
cljs.core.async.t639328.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t639328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t639328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t639328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639330){var self__ = this;
var _639330__$1 = this;return self__.meta639329;
});
cljs.core.async.t639328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639330,meta639329__$1){var self__ = this;
var _639330__$1 = this;return (new cljs.core.async.t639328(self__.f,self__.fn_handler,meta639329__$1));
});
cljs.core.async.__GT_t639328 = (function __GT_t639328(f__$1,fn_handler__$1,meta639329){return (new cljs.core.async.t639328(f__$1,fn_handler__$1,meta639329));
});
}
return (new cljs.core.async.t639328(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__639332 = buff;if(G__639332)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__639332.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__639332.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__639332);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__639332);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_639333 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_639333) : fn1.call(null,val_639333));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_639333) : fn1.call(null,val_639333));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__7718__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___639334 = n;var x_639335 = 0;while(true){
if((x_639335 < n__8553__auto___639334))
{(a[x_639335] = 0);
{
var G__639336 = (x_639335 + 1);
x_639335 = G__639336;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__639337 = (i + 1);
i = G__639337;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t639341 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639341 = (function (flag,alt_flag,meta639342){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta639342 = meta639342;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639341.cljs$lang$type = true;
cljs.core.async.t639341.cljs$lang$ctorStr = "cljs.core.async/t639341";
cljs.core.async.t639341.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639341");
});
cljs.core.async.t639341.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t639341.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t639341.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t639341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639343){var self__ = this;
var _639343__$1 = this;return self__.meta639342;
});
cljs.core.async.t639341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639343,meta639342__$1){var self__ = this;
var _639343__$1 = this;return (new cljs.core.async.t639341(self__.flag,self__.alt_flag,meta639342__$1));
});
cljs.core.async.__GT_t639341 = (function __GT_t639341(flag__$1,alt_flag__$1,meta639342){return (new cljs.core.async.t639341(flag__$1,alt_flag__$1,meta639342));
});
}
return (new cljs.core.async.t639341(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t639347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639347 = (function (cb,flag,alt_handler,meta639348){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta639348 = meta639348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639347.cljs$lang$type = true;
cljs.core.async.t639347.cljs$lang$ctorStr = "cljs.core.async/t639347";
cljs.core.async.t639347.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639347");
});
cljs.core.async.t639347.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t639347.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t639347.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t639347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639349){var self__ = this;
var _639349__$1 = this;return self__.meta639348;
});
cljs.core.async.t639347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639349,meta639348__$1){var self__ = this;
var _639349__$1 = this;return (new cljs.core.async.t639347(self__.cb,self__.flag,self__.alt_handler,meta639348__$1));
});
cljs.core.async.__GT_t639347 = (function __GT_t639347(cb__$1,flag__$1,alt_handler__$1,meta639348){return (new cljs.core.async.t639347(cb__$1,flag__$1,alt_handler__$1,meta639348));
});
}
return (new cljs.core.async.t639347(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__639350_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__639350_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__639350_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__7730__auto__ = wport;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__639351 = (i + 1);
i = G__639351;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__7730__auto__ = ret;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$287))
{var temp__4098__auto__ = (function (){var and__7718__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__7718__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(temp__4098__auto__))
{var got = temp__4098__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$287], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__639352){var map__639354 = p__639352;var map__639354__$1 = ((cljs.core.seq_QMARK_(map__639354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__639354):map__639354);var opts = map__639354__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__639352 = null;if (arguments.length > 1) {
  p__639352 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__639352);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__639355){
var ports = cljs.core.first(arglist__639355);
var p__639352 = cljs.core.rest(arglist__639355);
return alts_BANG___delegate(ports,p__639352);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t639363 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639363 = (function (ch,f,map_LT_,meta639364){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta639364 = meta639364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639363.cljs$lang$type = true;
cljs.core.async.t639363.cljs$lang$ctorStr = "cljs.core.async/t639363";
cljs.core.async.t639363.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639363");
});
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t639366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639366 = (function (fn1,_,meta639364,ch,f,map_LT_,meta639367){
this.fn1 = fn1;
this._ = _;
this.meta639364 = meta639364;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta639367 = meta639367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639366.cljs$lang$type = true;
cljs.core.async.t639366.cljs$lang$ctorStr = "cljs.core.async/t639366";
cljs.core.async.t639366.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639366");
});
cljs.core.async.t639366.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t639366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t639366.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t639366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__639356_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__639356_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__639356_SHARP_) : self__.f.call(null,p1__639356_SHARP_)))) : f1.call(null,(((p1__639356_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__639356_SHARP_) : self__.f.call(null,p1__639356_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t639366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639368){var self__ = this;
var _639368__$1 = this;return self__.meta639367;
});
cljs.core.async.t639366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639368,meta639367__$1){var self__ = this;
var _639368__$1 = this;return (new cljs.core.async.t639366(self__.fn1,self__._,self__.meta639364,self__.ch,self__.f,self__.map_LT_,meta639367__$1));
});
cljs.core.async.__GT_t639366 = (function __GT_t639366(fn1__$1,___$2,meta639364__$1,ch__$2,f__$2,map_LT___$2,meta639367){return (new cljs.core.async.t639366(fn1__$1,___$2,meta639364__$1,ch__$2,f__$2,map_LT___$2,meta639367));
});
}
return (new cljs.core.async.t639366(fn1,___$1,self__.meta639364,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t639363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t639363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639365){var self__ = this;
var _639365__$1 = this;return self__.meta639364;
});
cljs.core.async.t639363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639365,meta639364__$1){var self__ = this;
var _639365__$1 = this;return (new cljs.core.async.t639363(self__.ch,self__.f,self__.map_LT_,meta639364__$1));
});
cljs.core.async.__GT_t639363 = (function __GT_t639363(ch__$1,f__$1,map_LT___$1,meta639364){return (new cljs.core.async.t639363(ch__$1,f__$1,map_LT___$1,meta639364));
});
}
return (new cljs.core.async.t639363(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t639372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639372 = (function (ch,f,map_GT_,meta639373){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta639373 = meta639373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639372.cljs$lang$type = true;
cljs.core.async.t639372.cljs$lang$ctorStr = "cljs.core.async/t639372";
cljs.core.async.t639372.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639372");
});
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t639372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t639372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639374){var self__ = this;
var _639374__$1 = this;return self__.meta639373;
});
cljs.core.async.t639372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639374,meta639373__$1){var self__ = this;
var _639374__$1 = this;return (new cljs.core.async.t639372(self__.ch,self__.f,self__.map_GT_,meta639373__$1));
});
cljs.core.async.__GT_t639372 = (function __GT_t639372(ch__$1,f__$1,map_GT___$1,meta639373){return (new cljs.core.async.t639372(ch__$1,f__$1,map_GT___$1,meta639373));
});
}
return (new cljs.core.async.t639372(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t639378 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t639378 = (function (ch,p,filter_GT_,meta639379){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta639379 = meta639379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t639378.cljs$lang$type = true;
cljs.core.async.t639378.cljs$lang$ctorStr = "cljs.core.async/t639378";
cljs.core.async.t639378.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t639378");
});
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t639378.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t639378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_639380){var self__ = this;
var _639380__$1 = this;return self__.meta639379;
});
cljs.core.async.t639378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_639380,meta639379__$1){var self__ = this;
var _639380__$1 = this;return (new cljs.core.async.t639378(self__.ch,self__.p,self__.filter_GT_,meta639379__$1));
});
cljs.core.async.__GT_t639378 = (function __GT_t639378(ch__$1,p__$1,filter_GT___$1,meta639379){return (new cljs.core.async.t639378(ch__$1,p__$1,filter_GT___$1,meta639379));
});
}
return (new cljs.core.async.t639378(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___639463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_639442){var state_val_639443 = (state_639442[1]);if((state_val_639443 === 1))
{var state_639442__$1 = state_639442;var statearr_639444_639464 = state_639442__$1;(statearr_639444_639464[2] = null);
(statearr_639444_639464[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 2))
{var state_639442__$1 = state_639442;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_639442__$1,4,ch);
} else
{if((state_val_639443 === 3))
{var inst_639440 = (state_639442[2]);var state_639442__$1 = state_639442;return cljs.core.async.impl.ioc_helpers.return_chan(state_639442__$1,inst_639440);
} else
{if((state_val_639443 === 4))
{var inst_639424 = (state_639442[7]);var inst_639424__$1 = (state_639442[2]);var inst_639425 = (inst_639424__$1 == null);var state_639442__$1 = (function (){var statearr_639445 = state_639442;(statearr_639445[7] = inst_639424__$1);
return statearr_639445;
})();if(cljs.core.truth_(inst_639425))
{var statearr_639446_639465 = state_639442__$1;(statearr_639446_639465[1] = 5);
} else
{var statearr_639447_639466 = state_639442__$1;(statearr_639447_639466[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 5))
{var inst_639427 = cljs.core.async.close_BANG_(out);var state_639442__$1 = state_639442;var statearr_639448_639467 = state_639442__$1;(statearr_639448_639467[2] = inst_639427);
(statearr_639448_639467[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 6))
{var inst_639424 = (state_639442[7]);var inst_639429 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_639424) : p.call(null,inst_639424));var state_639442__$1 = state_639442;if(cljs.core.truth_(inst_639429))
{var statearr_639449_639468 = state_639442__$1;(statearr_639449_639468[1] = 8);
} else
{var statearr_639450_639469 = state_639442__$1;(statearr_639450_639469[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 7))
{var inst_639438 = (state_639442[2]);var state_639442__$1 = state_639442;var statearr_639451_639470 = state_639442__$1;(statearr_639451_639470[2] = inst_639438);
(statearr_639451_639470[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 8))
{var inst_639424 = (state_639442[7]);var state_639442__$1 = state_639442;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_639442__$1,11,out,inst_639424);
} else
{if((state_val_639443 === 9))
{var state_639442__$1 = state_639442;var statearr_639452_639471 = state_639442__$1;(statearr_639452_639471[2] = null);
(statearr_639452_639471[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 10))
{var inst_639435 = (state_639442[2]);var state_639442__$1 = (function (){var statearr_639453 = state_639442;(statearr_639453[8] = inst_639435);
return statearr_639453;
})();var statearr_639454_639472 = state_639442__$1;(statearr_639454_639472[2] = null);
(statearr_639454_639472[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639443 === 11))
{var inst_639432 = (state_639442[2]);var state_639442__$1 = state_639442;var statearr_639455_639473 = state_639442__$1;(statearr_639455_639473[2] = inst_639432);
(statearr_639455_639473[1] = 10);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_639459 = (new Array(9));(statearr_639459[0] = state_machine__10214__auto__);
(statearr_639459[1] = 1);
return statearr_639459;
});
var state_machine__10214__auto____1 = (function (state_639442){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_639442);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e639460){if((e639460 instanceof Object))
{var ex__10217__auto__ = e639460;var statearr_639461_639474 = state_639442;(statearr_639461_639474[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_639442);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e639460;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__639475 = state_639442;
state_639442 = G__639475;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_639442){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_639442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_639462 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_639462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___639463);
return statearr_639462;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_639627){var state_val_639628 = (state_639627[1]);if((state_val_639628 === 1))
{var state_639627__$1 = state_639627;var statearr_639629_639666 = state_639627__$1;(statearr_639629_639666[2] = null);
(statearr_639629_639666[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 2))
{var state_639627__$1 = state_639627;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_639627__$1,4,in$);
} else
{if((state_val_639628 === 3))
{var inst_639625 = (state_639627[2]);var state_639627__$1 = state_639627;return cljs.core.async.impl.ioc_helpers.return_chan(state_639627__$1,inst_639625);
} else
{if((state_val_639628 === 4))
{var inst_639573 = (state_639627[7]);var inst_639573__$1 = (state_639627[2]);var inst_639574 = (inst_639573__$1 == null);var state_639627__$1 = (function (){var statearr_639630 = state_639627;(statearr_639630[7] = inst_639573__$1);
return statearr_639630;
})();if(cljs.core.truth_(inst_639574))
{var statearr_639631_639667 = state_639627__$1;(statearr_639631_639667[1] = 5);
} else
{var statearr_639632_639668 = state_639627__$1;(statearr_639632_639668[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 5))
{var inst_639576 = cljs.core.async.close_BANG_(out);var state_639627__$1 = state_639627;var statearr_639633_639669 = state_639627__$1;(statearr_639633_639669[2] = inst_639576);
(statearr_639633_639669[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 6))
{var inst_639573 = (state_639627[7]);var inst_639578 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_639573) : f.call(null,inst_639573));var inst_639583 = cljs.core.seq(inst_639578);var inst_639584 = inst_639583;var inst_639585 = null;var inst_639586 = 0;var inst_639587 = 0;var state_639627__$1 = (function (){var statearr_639634 = state_639627;(statearr_639634[8] = inst_639587);
(statearr_639634[9] = inst_639586);
(statearr_639634[10] = inst_639584);
(statearr_639634[11] = inst_639585);
return statearr_639634;
})();var statearr_639635_639670 = state_639627__$1;(statearr_639635_639670[2] = null);
(statearr_639635_639670[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 7))
{var inst_639623 = (state_639627[2]);var state_639627__$1 = state_639627;var statearr_639636_639671 = state_639627__$1;(statearr_639636_639671[2] = inst_639623);
(statearr_639636_639671[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 8))
{var inst_639587 = (state_639627[8]);var inst_639586 = (state_639627[9]);var inst_639589 = (inst_639587 < inst_639586);var inst_639590 = inst_639589;var state_639627__$1 = state_639627;if(cljs.core.truth_(inst_639590))
{var statearr_639637_639672 = state_639627__$1;(statearr_639637_639672[1] = 10);
} else
{var statearr_639638_639673 = state_639627__$1;(statearr_639638_639673[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 9))
{var inst_639620 = (state_639627[2]);var state_639627__$1 = (function (){var statearr_639639 = state_639627;(statearr_639639[12] = inst_639620);
return statearr_639639;
})();var statearr_639640_639674 = state_639627__$1;(statearr_639640_639674[2] = null);
(statearr_639640_639674[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 10))
{var inst_639587 = (state_639627[8]);var inst_639585 = (state_639627[11]);var inst_639592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_639585,inst_639587);var state_639627__$1 = state_639627;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_639627__$1,13,out,inst_639592);
} else
{if((state_val_639628 === 11))
{var inst_639598 = (state_639627[13]);var inst_639584 = (state_639627[10]);var inst_639598__$1 = cljs.core.seq(inst_639584);var state_639627__$1 = (function (){var statearr_639644 = state_639627;(statearr_639644[13] = inst_639598__$1);
return statearr_639644;
})();if(inst_639598__$1)
{var statearr_639645_639675 = state_639627__$1;(statearr_639645_639675[1] = 14);
} else
{var statearr_639646_639676 = state_639627__$1;(statearr_639646_639676[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 12))
{var inst_639618 = (state_639627[2]);var state_639627__$1 = state_639627;var statearr_639647_639677 = state_639627__$1;(statearr_639647_639677[2] = inst_639618);
(statearr_639647_639677[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 13))
{var inst_639587 = (state_639627[8]);var inst_639586 = (state_639627[9]);var inst_639584 = (state_639627[10]);var inst_639585 = (state_639627[11]);var inst_639594 = (state_639627[2]);var inst_639595 = (inst_639587 + 1);var tmp639641 = inst_639586;var tmp639642 = inst_639584;var tmp639643 = inst_639585;var inst_639584__$1 = tmp639642;var inst_639585__$1 = tmp639643;var inst_639586__$1 = tmp639641;var inst_639587__$1 = inst_639595;var state_639627__$1 = (function (){var statearr_639648 = state_639627;(statearr_639648[8] = inst_639587__$1);
(statearr_639648[9] = inst_639586__$1);
(statearr_639648[14] = inst_639594);
(statearr_639648[10] = inst_639584__$1);
(statearr_639648[11] = inst_639585__$1);
return statearr_639648;
})();var statearr_639649_639678 = state_639627__$1;(statearr_639649_639678[2] = null);
(statearr_639649_639678[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 14))
{var inst_639598 = (state_639627[13]);var inst_639600 = cljs.core.chunked_seq_QMARK_(inst_639598);var state_639627__$1 = state_639627;if(inst_639600)
{var statearr_639650_639679 = state_639627__$1;(statearr_639650_639679[1] = 17);
} else
{var statearr_639651_639680 = state_639627__$1;(statearr_639651_639680[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 15))
{var state_639627__$1 = state_639627;var statearr_639652_639681 = state_639627__$1;(statearr_639652_639681[2] = null);
(statearr_639652_639681[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 16))
{var inst_639616 = (state_639627[2]);var state_639627__$1 = state_639627;var statearr_639653_639682 = state_639627__$1;(statearr_639653_639682[2] = inst_639616);
(statearr_639653_639682[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 17))
{var inst_639598 = (state_639627[13]);var inst_639602 = cljs.core.chunk_first(inst_639598);var inst_639603 = cljs.core.chunk_rest(inst_639598);var inst_639604 = cljs.core.count(inst_639602);var inst_639584 = inst_639603;var inst_639585 = inst_639602;var inst_639586 = inst_639604;var inst_639587 = 0;var state_639627__$1 = (function (){var statearr_639654 = state_639627;(statearr_639654[8] = inst_639587);
(statearr_639654[9] = inst_639586);
(statearr_639654[10] = inst_639584);
(statearr_639654[11] = inst_639585);
return statearr_639654;
})();var statearr_639655_639683 = state_639627__$1;(statearr_639655_639683[2] = null);
(statearr_639655_639683[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 18))
{var inst_639598 = (state_639627[13]);var inst_639607 = cljs.core.first(inst_639598);var state_639627__$1 = state_639627;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_639627__$1,20,out,inst_639607);
} else
{if((state_val_639628 === 19))
{var inst_639613 = (state_639627[2]);var state_639627__$1 = state_639627;var statearr_639656_639684 = state_639627__$1;(statearr_639656_639684[2] = inst_639613);
(statearr_639656_639684[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639628 === 20))
{var inst_639598 = (state_639627[13]);var inst_639609 = (state_639627[2]);var inst_639610 = cljs.core.next(inst_639598);var inst_639584 = inst_639610;var inst_639585 = null;var inst_639586 = 0;var inst_639587 = 0;var state_639627__$1 = (function (){var statearr_639657 = state_639627;(statearr_639657[8] = inst_639587);
(statearr_639657[9] = inst_639586);
(statearr_639657[15] = inst_639609);
(statearr_639657[10] = inst_639584);
(statearr_639657[11] = inst_639585);
return statearr_639657;
})();var statearr_639658_639685 = state_639627__$1;(statearr_639658_639685[2] = null);
(statearr_639658_639685[1] = 8);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_639662 = (new Array(16));(statearr_639662[0] = state_machine__10214__auto__);
(statearr_639662[1] = 1);
return statearr_639662;
});
var state_machine__10214__auto____1 = (function (state_639627){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_639627);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e639663){if((e639663 instanceof Object))
{var ex__10217__auto__ = e639663;var statearr_639664_639686 = state_639627;(statearr_639664_639686[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_639627);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e639663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__639687 = state_639627;
state_639627 = G__639687;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_639627){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_639627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_639665 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_639665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_639665;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___639768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_639747){var state_val_639748 = (state_639747[1]);if((state_val_639748 === 1))
{var state_639747__$1 = state_639747;var statearr_639749_639769 = state_639747__$1;(statearr_639749_639769[2] = null);
(statearr_639749_639769[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 2))
{var state_639747__$1 = state_639747;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_639747__$1,4,from);
} else
{if((state_val_639748 === 3))
{var inst_639745 = (state_639747[2]);var state_639747__$1 = state_639747;return cljs.core.async.impl.ioc_helpers.return_chan(state_639747__$1,inst_639745);
} else
{if((state_val_639748 === 4))
{var inst_639730 = (state_639747[7]);var inst_639730__$1 = (state_639747[2]);var inst_639731 = (inst_639730__$1 == null);var state_639747__$1 = (function (){var statearr_639750 = state_639747;(statearr_639750[7] = inst_639730__$1);
return statearr_639750;
})();if(cljs.core.truth_(inst_639731))
{var statearr_639751_639770 = state_639747__$1;(statearr_639751_639770[1] = 5);
} else
{var statearr_639752_639771 = state_639747__$1;(statearr_639752_639771[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 5))
{var state_639747__$1 = state_639747;if(cljs.core.truth_(close_QMARK_))
{var statearr_639753_639772 = state_639747__$1;(statearr_639753_639772[1] = 8);
} else
{var statearr_639754_639773 = state_639747__$1;(statearr_639754_639773[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 6))
{var inst_639730 = (state_639747[7]);var state_639747__$1 = state_639747;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_639747__$1,11,to,inst_639730);
} else
{if((state_val_639748 === 7))
{var inst_639743 = (state_639747[2]);var state_639747__$1 = state_639747;var statearr_639755_639774 = state_639747__$1;(statearr_639755_639774[2] = inst_639743);
(statearr_639755_639774[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 8))
{var inst_639734 = cljs.core.async.close_BANG_(to);var state_639747__$1 = state_639747;var statearr_639756_639775 = state_639747__$1;(statearr_639756_639775[2] = inst_639734);
(statearr_639756_639775[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 9))
{var state_639747__$1 = state_639747;var statearr_639757_639776 = state_639747__$1;(statearr_639757_639776[2] = null);
(statearr_639757_639776[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 10))
{var inst_639737 = (state_639747[2]);var state_639747__$1 = state_639747;var statearr_639758_639777 = state_639747__$1;(statearr_639758_639777[2] = inst_639737);
(statearr_639758_639777[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639748 === 11))
{var inst_639740 = (state_639747[2]);var state_639747__$1 = (function (){var statearr_639759 = state_639747;(statearr_639759[8] = inst_639740);
return statearr_639759;
})();var statearr_639760_639778 = state_639747__$1;(statearr_639760_639778[2] = null);
(statearr_639760_639778[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_639764 = (new Array(9));(statearr_639764[0] = state_machine__10214__auto__);
(statearr_639764[1] = 1);
return statearr_639764;
});
var state_machine__10214__auto____1 = (function (state_639747){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_639747);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e639765){if((e639765 instanceof Object))
{var ex__10217__auto__ = e639765;var statearr_639766_639779 = state_639747;(statearr_639766_639779[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_639747);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e639765;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__639780 = state_639747;
state_639747 = G__639780;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_639747){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_639747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_639767 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_639767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___639768);
return statearr_639767;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___639867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_639845){var state_val_639846 = (state_639845[1]);if((state_val_639846 === 1))
{var state_639845__$1 = state_639845;var statearr_639847_639868 = state_639845__$1;(statearr_639847_639868[2] = null);
(statearr_639847_639868[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 2))
{var state_639845__$1 = state_639845;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_639845__$1,4,ch);
} else
{if((state_val_639846 === 3))
{var inst_639843 = (state_639845[2]);var state_639845__$1 = state_639845;return cljs.core.async.impl.ioc_helpers.return_chan(state_639845__$1,inst_639843);
} else
{if((state_val_639846 === 4))
{var inst_639826 = (state_639845[7]);var inst_639826__$1 = (state_639845[2]);var inst_639827 = (inst_639826__$1 == null);var state_639845__$1 = (function (){var statearr_639848 = state_639845;(statearr_639848[7] = inst_639826__$1);
return statearr_639848;
})();if(cljs.core.truth_(inst_639827))
{var statearr_639849_639869 = state_639845__$1;(statearr_639849_639869[1] = 5);
} else
{var statearr_639850_639870 = state_639845__$1;(statearr_639850_639870[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 5))
{var inst_639829 = cljs.core.async.close_BANG_(tc);var inst_639830 = cljs.core.async.close_BANG_(fc);var state_639845__$1 = (function (){var statearr_639851 = state_639845;(statearr_639851[8] = inst_639829);
return statearr_639851;
})();var statearr_639852_639871 = state_639845__$1;(statearr_639852_639871[2] = inst_639830);
(statearr_639852_639871[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 6))
{var inst_639826 = (state_639845[7]);var inst_639832 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_639826) : p.call(null,inst_639826));var state_639845__$1 = state_639845;if(cljs.core.truth_(inst_639832))
{var statearr_639853_639872 = state_639845__$1;(statearr_639853_639872[1] = 9);
} else
{var statearr_639854_639873 = state_639845__$1;(statearr_639854_639873[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 7))
{var inst_639841 = (state_639845[2]);var state_639845__$1 = state_639845;var statearr_639855_639874 = state_639845__$1;(statearr_639855_639874[2] = inst_639841);
(statearr_639855_639874[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 8))
{var inst_639838 = (state_639845[2]);var state_639845__$1 = (function (){var statearr_639856 = state_639845;(statearr_639856[9] = inst_639838);
return statearr_639856;
})();var statearr_639857_639875 = state_639845__$1;(statearr_639857_639875[2] = null);
(statearr_639857_639875[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 9))
{var state_639845__$1 = state_639845;var statearr_639858_639876 = state_639845__$1;(statearr_639858_639876[2] = tc);
(statearr_639858_639876[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 10))
{var state_639845__$1 = state_639845;var statearr_639859_639877 = state_639845__$1;(statearr_639859_639877[2] = fc);
(statearr_639859_639877[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639846 === 11))
{var inst_639826 = (state_639845[7]);var inst_639836 = (state_639845[2]);var state_639845__$1 = state_639845;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_639845__$1,8,inst_639836,inst_639826);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_639863 = (new Array(10));(statearr_639863[0] = state_machine__10214__auto__);
(statearr_639863[1] = 1);
return statearr_639863;
});
var state_machine__10214__auto____1 = (function (state_639845){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_639845);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e639864){if((e639864 instanceof Object))
{var ex__10217__auto__ = e639864;var statearr_639865_639878 = state_639845;(statearr_639865_639878[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_639845);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e639864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__639879 = state_639845;
state_639845 = G__639879;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_639845){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_639845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_639866 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_639866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___639867);
return statearr_639866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_639926){var state_val_639927 = (state_639926[1]);if((state_val_639927 === 7))
{var inst_639922 = (state_639926[2]);var state_639926__$1 = state_639926;var statearr_639928_639944 = state_639926__$1;(statearr_639928_639944[2] = inst_639922);
(statearr_639928_639944[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639927 === 6))
{var inst_639915 = (state_639926[7]);var inst_639912 = (state_639926[8]);var inst_639919 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_639912,inst_639915) : f.call(null,inst_639912,inst_639915));var inst_639912__$1 = inst_639919;var state_639926__$1 = (function (){var statearr_639929 = state_639926;(statearr_639929[8] = inst_639912__$1);
return statearr_639929;
})();var statearr_639930_639945 = state_639926__$1;(statearr_639930_639945[2] = null);
(statearr_639930_639945[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639927 === 5))
{var inst_639912 = (state_639926[8]);var state_639926__$1 = state_639926;var statearr_639931_639946 = state_639926__$1;(statearr_639931_639946[2] = inst_639912);
(statearr_639931_639946[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_639927 === 4))
{var inst_639915 = (state_639926[7]);var inst_639915__$1 = (state_639926[2]);var inst_639916 = (inst_639915__$1 == null);var state_639926__$1 = (function (){var statearr_639932 = state_639926;(statearr_639932[7] = inst_639915__$1);
return statearr_639932;
})();if(cljs.core.truth_(inst_639916))
{var statearr_639933_639947 = state_639926__$1;(statearr_639933_639947[1] = 5);
} else
{var statearr_639934_639948 = state_639926__$1;(statearr_639934_639948[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_639927 === 3))
{var inst_639924 = (state_639926[2]);var state_639926__$1 = state_639926;return cljs.core.async.impl.ioc_helpers.return_chan(state_639926__$1,inst_639924);
} else
{if((state_val_639927 === 2))
{var state_639926__$1 = state_639926;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_639926__$1,4,ch);
} else
{if((state_val_639927 === 1))
{var inst_639912 = init;var state_639926__$1 = (function (){var statearr_639935 = state_639926;(statearr_639935[8] = inst_639912);
return statearr_639935;
})();var statearr_639936_639949 = state_639926__$1;(statearr_639936_639949[2] = null);
(statearr_639936_639949[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_639940 = (new Array(9));(statearr_639940[0] = state_machine__10214__auto__);
(statearr_639940[1] = 1);
return statearr_639940;
});
var state_machine__10214__auto____1 = (function (state_639926){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_639926);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e639941){if((e639941 instanceof Object))
{var ex__10217__auto__ = e639941;var statearr_639942_639950 = state_639926;(statearr_639942_639950[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_639926);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e639941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__639951 = state_639926;
state_639926 = G__639951;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_639926){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_639926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_639943 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_639943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_639943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_640013){var state_val_640014 = (state_640013[1]);if((state_val_640014 === 1))
{var inst_639993 = cljs.core.seq(coll);var inst_639994 = inst_639993;var state_640013__$1 = (function (){var statearr_640015 = state_640013;(statearr_640015[7] = inst_639994);
return statearr_640015;
})();var statearr_640016_640034 = state_640013__$1;(statearr_640016_640034[2] = null);
(statearr_640016_640034[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 2))
{var inst_639994 = (state_640013[7]);var state_640013__$1 = state_640013;if(cljs.core.truth_(inst_639994))
{var statearr_640017_640035 = state_640013__$1;(statearr_640017_640035[1] = 4);
} else
{var statearr_640018_640036 = state_640013__$1;(statearr_640018_640036[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 3))
{var inst_640011 = (state_640013[2]);var state_640013__$1 = state_640013;return cljs.core.async.impl.ioc_helpers.return_chan(state_640013__$1,inst_640011);
} else
{if((state_val_640014 === 4))
{var inst_639994 = (state_640013[7]);var inst_639997 = cljs.core.first(inst_639994);var state_640013__$1 = state_640013;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_640013__$1,7,ch,inst_639997);
} else
{if((state_val_640014 === 5))
{var state_640013__$1 = state_640013;if(cljs.core.truth_(close_QMARK_))
{var statearr_640019_640037 = state_640013__$1;(statearr_640019_640037[1] = 8);
} else
{var statearr_640020_640038 = state_640013__$1;(statearr_640020_640038[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 6))
{var inst_640009 = (state_640013[2]);var state_640013__$1 = state_640013;var statearr_640021_640039 = state_640013__$1;(statearr_640021_640039[2] = inst_640009);
(statearr_640021_640039[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 7))
{var inst_639994 = (state_640013[7]);var inst_639999 = (state_640013[2]);var inst_640000 = cljs.core.next(inst_639994);var inst_639994__$1 = inst_640000;var state_640013__$1 = (function (){var statearr_640022 = state_640013;(statearr_640022[8] = inst_639999);
(statearr_640022[7] = inst_639994__$1);
return statearr_640022;
})();var statearr_640023_640040 = state_640013__$1;(statearr_640023_640040[2] = null);
(statearr_640023_640040[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 8))
{var inst_640004 = cljs.core.async.close_BANG_(ch);var state_640013__$1 = state_640013;var statearr_640024_640041 = state_640013__$1;(statearr_640024_640041[2] = inst_640004);
(statearr_640024_640041[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 9))
{var state_640013__$1 = state_640013;var statearr_640025_640042 = state_640013__$1;(statearr_640025_640042[2] = null);
(statearr_640025_640042[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640014 === 10))
{var inst_640007 = (state_640013[2]);var state_640013__$1 = state_640013;var statearr_640026_640043 = state_640013__$1;(statearr_640026_640043[2] = inst_640007);
(statearr_640026_640043[1] = 6);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_640030 = (new Array(9));(statearr_640030[0] = state_machine__10214__auto__);
(statearr_640030[1] = 1);
return statearr_640030;
});
var state_machine__10214__auto____1 = (function (state_640013){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_640013);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e640031){if((e640031 instanceof Object))
{var ex__10217__auto__ = e640031;var statearr_640032_640044 = state_640013;(statearr_640032_640044[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_640013);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e640031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__640045 = state_640013;
state_640013 = G__640045;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_640013){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_640013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_640033 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_640033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_640033;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return c__10283__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj640047 = {};return obj640047;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__7718__auto__ = _;if(and__7718__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__8333__auto__ = (((_ == null))?null:_);return (function (){var or__7730__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj640049 = {};return obj640049;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t640264 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t640264 = (function (cs,ch,mult,meta640265){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta640265 = meta640265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t640264.cljs$lang$type = true;
cljs.core.async.t640264.cljs$lang$ctorStr = "cljs.core.async/t640264";
cljs.core.async.t640264.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t640264");
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t640264.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t640264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_640266){var self__ = this;
var _640266__$1 = this;return self__.meta640265;
});})(cs))
;
cljs.core.async.t640264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_640266,meta640265__$1){var self__ = this;
var _640266__$1 = this;return (new cljs.core.async.t640264(self__.cs,self__.ch,self__.mult,meta640265__$1));
});})(cs))
;
cljs.core.async.__GT_t640264 = ((function (cs){
return (function __GT_t640264(cs__$1,ch__$1,mult__$1,meta640265){return (new cljs.core.async.t640264(cs__$1,ch__$1,mult__$1,meta640265));
});})(cs))
;
}
return (new cljs.core.async.t640264(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___640478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_640396){var state_val_640397 = (state_640396[1]);if((state_val_640397 === 32))
{var inst_640345 = (state_640396[7]);var inst_640269 = (state_640396[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_640396,31,Object,null,30);var inst_640352 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_640345,inst_640269,done);var state_640396__$1 = state_640396;var statearr_640398_640479 = state_640396__$1;(statearr_640398_640479[2] = inst_640352);
cljs.core.async.impl.ioc_helpers.process_exception(state_640396__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 1))
{var state_640396__$1 = state_640396;var statearr_640399_640480 = state_640396__$1;(statearr_640399_640480[2] = null);
(statearr_640399_640480[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 33))
{var inst_640358 = (state_640396[9]);var inst_640360 = cljs.core.chunked_seq_QMARK_(inst_640358);var state_640396__$1 = state_640396;if(inst_640360)
{var statearr_640400_640481 = state_640396__$1;(statearr_640400_640481[1] = 36);
} else
{var statearr_640401_640482 = state_640396__$1;(statearr_640401_640482[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 2))
{var state_640396__$1 = state_640396;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_640396__$1,4,ch);
} else
{if((state_val_640397 === 34))
{var state_640396__$1 = state_640396;var statearr_640402_640483 = state_640396__$1;(statearr_640402_640483[2] = null);
(statearr_640402_640483[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 3))
{var inst_640394 = (state_640396[2]);var state_640396__$1 = state_640396;return cljs.core.async.impl.ioc_helpers.return_chan(state_640396__$1,inst_640394);
} else
{if((state_val_640397 === 35))
{var inst_640383 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640403_640484 = state_640396__$1;(statearr_640403_640484[2] = inst_640383);
(statearr_640403_640484[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 4))
{var inst_640269 = (state_640396[8]);var inst_640269__$1 = (state_640396[2]);var inst_640270 = (inst_640269__$1 == null);var state_640396__$1 = (function (){var statearr_640404 = state_640396;(statearr_640404[8] = inst_640269__$1);
return statearr_640404;
})();if(cljs.core.truth_(inst_640270))
{var statearr_640405_640485 = state_640396__$1;(statearr_640405_640485[1] = 5);
} else
{var statearr_640406_640486 = state_640396__$1;(statearr_640406_640486[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 36))
{var inst_640358 = (state_640396[9]);var inst_640362 = cljs.core.chunk_first(inst_640358);var inst_640363 = cljs.core.chunk_rest(inst_640358);var inst_640364 = cljs.core.count(inst_640362);var inst_640337 = inst_640363;var inst_640338 = inst_640362;var inst_640339 = inst_640364;var inst_640340 = 0;var state_640396__$1 = (function (){var statearr_640407 = state_640396;(statearr_640407[10] = inst_640337);
(statearr_640407[11] = inst_640338);
(statearr_640407[12] = inst_640340);
(statearr_640407[13] = inst_640339);
return statearr_640407;
})();var statearr_640408_640487 = state_640396__$1;(statearr_640408_640487[2] = null);
(statearr_640408_640487[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 5))
{var inst_640276 = cljs.core.deref(cs);var inst_640277 = cljs.core.seq(inst_640276);var inst_640278 = inst_640277;var inst_640279 = null;var inst_640280 = 0;var inst_640281 = 0;var state_640396__$1 = (function (){var statearr_640409 = state_640396;(statearr_640409[14] = inst_640280);
(statearr_640409[15] = inst_640279);
(statearr_640409[16] = inst_640278);
(statearr_640409[17] = inst_640281);
return statearr_640409;
})();var statearr_640410_640488 = state_640396__$1;(statearr_640410_640488[2] = null);
(statearr_640410_640488[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 37))
{var inst_640358 = (state_640396[9]);var inst_640367 = cljs.core.first(inst_640358);var state_640396__$1 = (function (){var statearr_640411 = state_640396;(statearr_640411[18] = inst_640367);
return statearr_640411;
})();var statearr_640412_640489 = state_640396__$1;(statearr_640412_640489[2] = null);
(statearr_640412_640489[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 6))
{var inst_640328 = cljs.core.deref(cs);var inst_640329 = cljs.core.keys(inst_640328);var inst_640330 = cljs.core.count(inst_640329);var inst_640331 = cljs.core.reset_BANG_(dctr,inst_640330);var inst_640336 = cljs.core.seq(inst_640329);var inst_640337 = inst_640336;var inst_640338 = null;var inst_640339 = 0;var inst_640340 = 0;var state_640396__$1 = (function (){var statearr_640413 = state_640396;(statearr_640413[10] = inst_640337);
(statearr_640413[11] = inst_640338);
(statearr_640413[12] = inst_640340);
(statearr_640413[19] = inst_640331);
(statearr_640413[13] = inst_640339);
return statearr_640413;
})();var statearr_640414_640490 = state_640396__$1;(statearr_640414_640490[2] = null);
(statearr_640414_640490[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 38))
{var inst_640380 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640415_640491 = state_640396__$1;(statearr_640415_640491[2] = inst_640380);
(statearr_640415_640491[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 7))
{var inst_640392 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640416_640492 = state_640396__$1;(statearr_640416_640492[2] = inst_640392);
(statearr_640416_640492[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 39))
{var inst_640358 = (state_640396[9]);var inst_640376 = (state_640396[2]);var inst_640377 = cljs.core.next(inst_640358);var inst_640337 = inst_640377;var inst_640338 = null;var inst_640339 = 0;var inst_640340 = 0;var state_640396__$1 = (function (){var statearr_640417 = state_640396;(statearr_640417[10] = inst_640337);
(statearr_640417[11] = inst_640338);
(statearr_640417[12] = inst_640340);
(statearr_640417[20] = inst_640376);
(statearr_640417[13] = inst_640339);
return statearr_640417;
})();var statearr_640418_640493 = state_640396__$1;(statearr_640418_640493[2] = null);
(statearr_640418_640493[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 8))
{var inst_640280 = (state_640396[14]);var inst_640281 = (state_640396[17]);var inst_640283 = (inst_640281 < inst_640280);var inst_640284 = inst_640283;var state_640396__$1 = state_640396;if(cljs.core.truth_(inst_640284))
{var statearr_640419_640494 = state_640396__$1;(statearr_640419_640494[1] = 10);
} else
{var statearr_640420_640495 = state_640396__$1;(statearr_640420_640495[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 40))
{var inst_640367 = (state_640396[18]);var inst_640368 = (state_640396[2]);var inst_640369 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_640370 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_640367);var state_640396__$1 = (function (){var statearr_640421 = state_640396;(statearr_640421[21] = inst_640368);
(statearr_640421[22] = inst_640369);
return statearr_640421;
})();var statearr_640422_640496 = state_640396__$1;(statearr_640422_640496[2] = inst_640370);
cljs.core.async.impl.ioc_helpers.process_exception(state_640396__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 9))
{var inst_640326 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640423_640497 = state_640396__$1;(statearr_640423_640497[2] = inst_640326);
(statearr_640423_640497[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 41))
{var inst_640367 = (state_640396[18]);var inst_640269 = (state_640396[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_640396,40,Object,null,39);var inst_640374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_640367,inst_640269,done);var state_640396__$1 = state_640396;var statearr_640424_640498 = state_640396__$1;(statearr_640424_640498[2] = inst_640374);
cljs.core.async.impl.ioc_helpers.process_exception(state_640396__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 10))
{var inst_640279 = (state_640396[15]);var inst_640281 = (state_640396[17]);var inst_640287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_640279,inst_640281);var inst_640288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640287,0,null);var inst_640289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640287,1,null);var state_640396__$1 = (function (){var statearr_640425 = state_640396;(statearr_640425[23] = inst_640288);
return statearr_640425;
})();if(cljs.core.truth_(inst_640289))
{var statearr_640426_640499 = state_640396__$1;(statearr_640426_640499[1] = 13);
} else
{var statearr_640427_640500 = state_640396__$1;(statearr_640427_640500[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 42))
{var inst_640389 = (state_640396[2]);var state_640396__$1 = (function (){var statearr_640428 = state_640396;(statearr_640428[24] = inst_640389);
return statearr_640428;
})();var statearr_640429_640501 = state_640396__$1;(statearr_640429_640501[2] = null);
(statearr_640429_640501[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 11))
{var inst_640298 = (state_640396[25]);var inst_640278 = (state_640396[16]);var inst_640298__$1 = cljs.core.seq(inst_640278);var state_640396__$1 = (function (){var statearr_640430 = state_640396;(statearr_640430[25] = inst_640298__$1);
return statearr_640430;
})();if(inst_640298__$1)
{var statearr_640431_640502 = state_640396__$1;(statearr_640431_640502[1] = 16);
} else
{var statearr_640432_640503 = state_640396__$1;(statearr_640432_640503[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 12))
{var inst_640324 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640433_640504 = state_640396__$1;(statearr_640433_640504[2] = inst_640324);
(statearr_640433_640504[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 13))
{var inst_640288 = (state_640396[23]);var inst_640291 = cljs.core.async.close_BANG_(inst_640288);var state_640396__$1 = state_640396;var statearr_640437_640505 = state_640396__$1;(statearr_640437_640505[2] = inst_640291);
(statearr_640437_640505[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 14))
{var state_640396__$1 = state_640396;var statearr_640438_640506 = state_640396__$1;(statearr_640438_640506[2] = null);
(statearr_640438_640506[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 15))
{var inst_640280 = (state_640396[14]);var inst_640279 = (state_640396[15]);var inst_640278 = (state_640396[16]);var inst_640281 = (state_640396[17]);var inst_640294 = (state_640396[2]);var inst_640295 = (inst_640281 + 1);var tmp640434 = inst_640280;var tmp640435 = inst_640279;var tmp640436 = inst_640278;var inst_640278__$1 = tmp640436;var inst_640279__$1 = tmp640435;var inst_640280__$1 = tmp640434;var inst_640281__$1 = inst_640295;var state_640396__$1 = (function (){var statearr_640439 = state_640396;(statearr_640439[26] = inst_640294);
(statearr_640439[14] = inst_640280__$1);
(statearr_640439[15] = inst_640279__$1);
(statearr_640439[16] = inst_640278__$1);
(statearr_640439[17] = inst_640281__$1);
return statearr_640439;
})();var statearr_640440_640507 = state_640396__$1;(statearr_640440_640507[2] = null);
(statearr_640440_640507[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 16))
{var inst_640298 = (state_640396[25]);var inst_640300 = cljs.core.chunked_seq_QMARK_(inst_640298);var state_640396__$1 = state_640396;if(inst_640300)
{var statearr_640441_640508 = state_640396__$1;(statearr_640441_640508[1] = 19);
} else
{var statearr_640442_640509 = state_640396__$1;(statearr_640442_640509[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 17))
{var state_640396__$1 = state_640396;var statearr_640443_640510 = state_640396__$1;(statearr_640443_640510[2] = null);
(statearr_640443_640510[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 18))
{var inst_640322 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640444_640511 = state_640396__$1;(statearr_640444_640511[2] = inst_640322);
(statearr_640444_640511[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 19))
{var inst_640298 = (state_640396[25]);var inst_640302 = cljs.core.chunk_first(inst_640298);var inst_640303 = cljs.core.chunk_rest(inst_640298);var inst_640304 = cljs.core.count(inst_640302);var inst_640278 = inst_640303;var inst_640279 = inst_640302;var inst_640280 = inst_640304;var inst_640281 = 0;var state_640396__$1 = (function (){var statearr_640445 = state_640396;(statearr_640445[14] = inst_640280);
(statearr_640445[15] = inst_640279);
(statearr_640445[16] = inst_640278);
(statearr_640445[17] = inst_640281);
return statearr_640445;
})();var statearr_640446_640512 = state_640396__$1;(statearr_640446_640512[2] = null);
(statearr_640446_640512[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 20))
{var inst_640298 = (state_640396[25]);var inst_640308 = cljs.core.first(inst_640298);var inst_640309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640308,0,null);var inst_640310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640308,1,null);var state_640396__$1 = (function (){var statearr_640447 = state_640396;(statearr_640447[27] = inst_640309);
return statearr_640447;
})();if(cljs.core.truth_(inst_640310))
{var statearr_640448_640513 = state_640396__$1;(statearr_640448_640513[1] = 22);
} else
{var statearr_640449_640514 = state_640396__$1;(statearr_640449_640514[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 21))
{var inst_640319 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640450_640515 = state_640396__$1;(statearr_640450_640515[2] = inst_640319);
(statearr_640450_640515[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 22))
{var inst_640309 = (state_640396[27]);var inst_640312 = cljs.core.async.close_BANG_(inst_640309);var state_640396__$1 = state_640396;var statearr_640451_640516 = state_640396__$1;(statearr_640451_640516[2] = inst_640312);
(statearr_640451_640516[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 23))
{var state_640396__$1 = state_640396;var statearr_640452_640517 = state_640396__$1;(statearr_640452_640517[2] = null);
(statearr_640452_640517[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 24))
{var inst_640298 = (state_640396[25]);var inst_640315 = (state_640396[2]);var inst_640316 = cljs.core.next(inst_640298);var inst_640278 = inst_640316;var inst_640279 = null;var inst_640280 = 0;var inst_640281 = 0;var state_640396__$1 = (function (){var statearr_640453 = state_640396;(statearr_640453[28] = inst_640315);
(statearr_640453[14] = inst_640280);
(statearr_640453[15] = inst_640279);
(statearr_640453[16] = inst_640278);
(statearr_640453[17] = inst_640281);
return statearr_640453;
})();var statearr_640454_640518 = state_640396__$1;(statearr_640454_640518[2] = null);
(statearr_640454_640518[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 25))
{var inst_640340 = (state_640396[12]);var inst_640339 = (state_640396[13]);var inst_640342 = (inst_640340 < inst_640339);var inst_640343 = inst_640342;var state_640396__$1 = state_640396;if(cljs.core.truth_(inst_640343))
{var statearr_640455_640519 = state_640396__$1;(statearr_640455_640519[1] = 27);
} else
{var statearr_640456_640520 = state_640396__$1;(statearr_640456_640520[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 26))
{var inst_640387 = (state_640396[2]);var state_640396__$1 = (function (){var statearr_640457 = state_640396;(statearr_640457[29] = inst_640387);
return statearr_640457;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_640396__$1,42,dchan);
} else
{if((state_val_640397 === 27))
{var inst_640338 = (state_640396[11]);var inst_640340 = (state_640396[12]);var inst_640345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_640338,inst_640340);var state_640396__$1 = (function (){var statearr_640458 = state_640396;(statearr_640458[7] = inst_640345);
return statearr_640458;
})();var statearr_640459_640521 = state_640396__$1;(statearr_640459_640521[2] = null);
(statearr_640459_640521[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 28))
{var inst_640337 = (state_640396[10]);var inst_640358 = (state_640396[9]);var inst_640358__$1 = cljs.core.seq(inst_640337);var state_640396__$1 = (function (){var statearr_640463 = state_640396;(statearr_640463[9] = inst_640358__$1);
return statearr_640463;
})();if(inst_640358__$1)
{var statearr_640464_640522 = state_640396__$1;(statearr_640464_640522[1] = 33);
} else
{var statearr_640465_640523 = state_640396__$1;(statearr_640465_640523[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 29))
{var inst_640385 = (state_640396[2]);var state_640396__$1 = state_640396;var statearr_640466_640524 = state_640396__$1;(statearr_640466_640524[2] = inst_640385);
(statearr_640466_640524[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 30))
{var inst_640337 = (state_640396[10]);var inst_640338 = (state_640396[11]);var inst_640340 = (state_640396[12]);var inst_640339 = (state_640396[13]);var inst_640354 = (state_640396[2]);var inst_640355 = (inst_640340 + 1);var tmp640460 = inst_640337;var tmp640461 = inst_640338;var tmp640462 = inst_640339;var inst_640337__$1 = tmp640460;var inst_640338__$1 = tmp640461;var inst_640339__$1 = tmp640462;var inst_640340__$1 = inst_640355;var state_640396__$1 = (function (){var statearr_640467 = state_640396;(statearr_640467[10] = inst_640337__$1);
(statearr_640467[11] = inst_640338__$1);
(statearr_640467[12] = inst_640340__$1);
(statearr_640467[13] = inst_640339__$1);
(statearr_640467[30] = inst_640354);
return statearr_640467;
})();var statearr_640468_640525 = state_640396__$1;(statearr_640468_640525[2] = null);
(statearr_640468_640525[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640397 === 31))
{var inst_640345 = (state_640396[7]);var inst_640346 = (state_640396[2]);var inst_640347 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_640348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_640345);var state_640396__$1 = (function (){var statearr_640469 = state_640396;(statearr_640469[31] = inst_640346);
(statearr_640469[32] = inst_640347);
return statearr_640469;
})();var statearr_640470_640526 = state_640396__$1;(statearr_640470_640526[2] = inst_640348);
cljs.core.async.impl.ioc_helpers.process_exception(state_640396__$1);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_640474 = (new Array(33));(statearr_640474[0] = state_machine__10214__auto__);
(statearr_640474[1] = 1);
return statearr_640474;
});
var state_machine__10214__auto____1 = (function (state_640396){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_640396);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e640475){if((e640475 instanceof Object))
{var ex__10217__auto__ = e640475;var statearr_640476_640527 = state_640396;(statearr_640476_640527[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_640396);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e640475;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__640528 = state_640396;
state_640396 = G__640528;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_640396){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_640396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_640477 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_640477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___640478);
return statearr_640477;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj640530 = {};return obj640530;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__7718__auto__ = m;if(and__7718__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__8333__auto__ = (((m == null))?null:m);return (function (){var or__7730__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,null,cljs.core.constant$keyword$305,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$306);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$305);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$306,chs);var pauses = pick(cljs.core.constant$keyword$304,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$307,solos,cljs.core.constant$keyword$308,pick(cljs.core.constant$keyword$305,chs),cljs.core.constant$keyword$309,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$304)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t640640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t640640 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta640641){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta640641 = meta640641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t640640.cljs$lang$type = true;
cljs.core.async.t640640.cljs$lang$ctorStr = "cljs.core.async/t640640";
cljs.core.async.t640640.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t640640");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t640640.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_640642){var self__ = this;
var _640642__$1 = this;return self__.meta640641;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t640640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_640642,meta640641__$1){var self__ = this;
var _640642__$1 = this;return (new cljs.core.async.t640640(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta640641__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t640640 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t640640(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta640641){return (new cljs.core.async.t640640(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta640641));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t640640(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___640749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_640707){var state_val_640708 = (state_640707[1]);if((state_val_640708 === 1))
{var inst_640646 = (state_640707[7]);var inst_640646__$1 = calc_state();var inst_640647 = cljs.core.seq_QMARK_(inst_640646__$1);var state_640707__$1 = (function (){var statearr_640709 = state_640707;(statearr_640709[7] = inst_640646__$1);
return statearr_640709;
})();if(inst_640647)
{var statearr_640710_640750 = state_640707__$1;(statearr_640710_640750[1] = 2);
} else
{var statearr_640711_640751 = state_640707__$1;(statearr_640711_640751[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 2))
{var inst_640646 = (state_640707[7]);var inst_640649 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_640646);var state_640707__$1 = state_640707;var statearr_640712_640752 = state_640707__$1;(statearr_640712_640752[2] = inst_640649);
(statearr_640712_640752[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 3))
{var inst_640646 = (state_640707[7]);var state_640707__$1 = state_640707;var statearr_640713_640753 = state_640707__$1;(statearr_640713_640753[2] = inst_640646);
(statearr_640713_640753[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 4))
{var inst_640646 = (state_640707[7]);var inst_640652 = (state_640707[2]);var inst_640653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640652,cljs.core.constant$keyword$309);var inst_640654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640652,cljs.core.constant$keyword$308);var inst_640655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640652,cljs.core.constant$keyword$307);var inst_640656 = inst_640646;var state_640707__$1 = (function (){var statearr_640714 = state_640707;(statearr_640714[8] = inst_640654);
(statearr_640714[9] = inst_640655);
(statearr_640714[10] = inst_640656);
(statearr_640714[11] = inst_640653);
return statearr_640714;
})();var statearr_640715_640754 = state_640707__$1;(statearr_640715_640754[2] = null);
(statearr_640715_640754[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 5))
{var inst_640656 = (state_640707[10]);var inst_640659 = cljs.core.seq_QMARK_(inst_640656);var state_640707__$1 = state_640707;if(inst_640659)
{var statearr_640716_640755 = state_640707__$1;(statearr_640716_640755[1] = 7);
} else
{var statearr_640717_640756 = state_640707__$1;(statearr_640717_640756[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 6))
{var inst_640705 = (state_640707[2]);var state_640707__$1 = state_640707;return cljs.core.async.impl.ioc_helpers.return_chan(state_640707__$1,inst_640705);
} else
{if((state_val_640708 === 7))
{var inst_640656 = (state_640707[10]);var inst_640661 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_640656);var state_640707__$1 = state_640707;var statearr_640718_640757 = state_640707__$1;(statearr_640718_640757[2] = inst_640661);
(statearr_640718_640757[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 8))
{var inst_640656 = (state_640707[10]);var state_640707__$1 = state_640707;var statearr_640719_640758 = state_640707__$1;(statearr_640719_640758[2] = inst_640656);
(statearr_640719_640758[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 9))
{var inst_640664 = (state_640707[12]);var inst_640664__$1 = (state_640707[2]);var inst_640665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640664__$1,cljs.core.constant$keyword$309);var inst_640666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640664__$1,cljs.core.constant$keyword$308);var inst_640667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640664__$1,cljs.core.constant$keyword$307);var state_640707__$1 = (function (){var statearr_640720 = state_640707;(statearr_640720[12] = inst_640664__$1);
(statearr_640720[13] = inst_640666);
(statearr_640720[14] = inst_640667);
return statearr_640720;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_640707__$1,10,inst_640665);
} else
{if((state_val_640708 === 10))
{var inst_640671 = (state_640707[15]);var inst_640672 = (state_640707[16]);var inst_640670 = (state_640707[2]);var inst_640671__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640670,0,null);var inst_640672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_640670,1,null);var inst_640673 = (inst_640671__$1 == null);var inst_640674 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_640672__$1,change);var inst_640675 = (inst_640673) || (inst_640674);var state_640707__$1 = (function (){var statearr_640721 = state_640707;(statearr_640721[15] = inst_640671__$1);
(statearr_640721[16] = inst_640672__$1);
return statearr_640721;
})();if(cljs.core.truth_(inst_640675))
{var statearr_640722_640759 = state_640707__$1;(statearr_640722_640759[1] = 11);
} else
{var statearr_640723_640760 = state_640707__$1;(statearr_640723_640760[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 11))
{var inst_640671 = (state_640707[15]);var inst_640677 = (inst_640671 == null);var state_640707__$1 = state_640707;if(cljs.core.truth_(inst_640677))
{var statearr_640724_640761 = state_640707__$1;(statearr_640724_640761[1] = 14);
} else
{var statearr_640725_640762 = state_640707__$1;(statearr_640725_640762[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 12))
{var inst_640686 = (state_640707[17]);var inst_640667 = (state_640707[14]);var inst_640672 = (state_640707[16]);var inst_640686__$1 = (inst_640667.cljs$core$IFn$_invoke$arity$1 ? inst_640667.cljs$core$IFn$_invoke$arity$1(inst_640672) : inst_640667.call(null,inst_640672));var state_640707__$1 = (function (){var statearr_640726 = state_640707;(statearr_640726[17] = inst_640686__$1);
return statearr_640726;
})();if(cljs.core.truth_(inst_640686__$1))
{var statearr_640727_640763 = state_640707__$1;(statearr_640727_640763[1] = 17);
} else
{var statearr_640728_640764 = state_640707__$1;(statearr_640728_640764[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 13))
{var inst_640703 = (state_640707[2]);var state_640707__$1 = state_640707;var statearr_640729_640765 = state_640707__$1;(statearr_640729_640765[2] = inst_640703);
(statearr_640729_640765[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 14))
{var inst_640672 = (state_640707[16]);var inst_640679 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_640672);var state_640707__$1 = state_640707;var statearr_640730_640766 = state_640707__$1;(statearr_640730_640766[2] = inst_640679);
(statearr_640730_640766[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 15))
{var state_640707__$1 = state_640707;var statearr_640731_640767 = state_640707__$1;(statearr_640731_640767[2] = null);
(statearr_640731_640767[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 16))
{var inst_640682 = (state_640707[2]);var inst_640683 = calc_state();var inst_640656 = inst_640683;var state_640707__$1 = (function (){var statearr_640732 = state_640707;(statearr_640732[10] = inst_640656);
(statearr_640732[18] = inst_640682);
return statearr_640732;
})();var statearr_640733_640768 = state_640707__$1;(statearr_640733_640768[2] = null);
(statearr_640733_640768[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 17))
{var inst_640686 = (state_640707[17]);var state_640707__$1 = state_640707;var statearr_640734_640769 = state_640707__$1;(statearr_640734_640769[2] = inst_640686);
(statearr_640734_640769[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 18))
{var inst_640666 = (state_640707[13]);var inst_640667 = (state_640707[14]);var inst_640672 = (state_640707[16]);var inst_640689 = cljs.core.empty_QMARK_(inst_640667);var inst_640690 = (inst_640666.cljs$core$IFn$_invoke$arity$1 ? inst_640666.cljs$core$IFn$_invoke$arity$1(inst_640672) : inst_640666.call(null,inst_640672));var inst_640691 = cljs.core.not(inst_640690);var inst_640692 = (inst_640689) && (inst_640691);var state_640707__$1 = state_640707;var statearr_640735_640770 = state_640707__$1;(statearr_640735_640770[2] = inst_640692);
(statearr_640735_640770[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 19))
{var inst_640694 = (state_640707[2]);var state_640707__$1 = state_640707;if(cljs.core.truth_(inst_640694))
{var statearr_640736_640771 = state_640707__$1;(statearr_640736_640771[1] = 20);
} else
{var statearr_640737_640772 = state_640707__$1;(statearr_640737_640772[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 20))
{var inst_640671 = (state_640707[15]);var state_640707__$1 = state_640707;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_640707__$1,23,out,inst_640671);
} else
{if((state_val_640708 === 21))
{var state_640707__$1 = state_640707;var statearr_640738_640773 = state_640707__$1;(statearr_640738_640773[2] = null);
(statearr_640738_640773[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 22))
{var inst_640664 = (state_640707[12]);var inst_640700 = (state_640707[2]);var inst_640656 = inst_640664;var state_640707__$1 = (function (){var statearr_640739 = state_640707;(statearr_640739[10] = inst_640656);
(statearr_640739[19] = inst_640700);
return statearr_640739;
})();var statearr_640740_640774 = state_640707__$1;(statearr_640740_640774[2] = null);
(statearr_640740_640774[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640708 === 23))
{var inst_640697 = (state_640707[2]);var state_640707__$1 = state_640707;var statearr_640741_640775 = state_640707__$1;(statearr_640741_640775[2] = inst_640697);
(statearr_640741_640775[1] = 22);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_640745 = (new Array(20));(statearr_640745[0] = state_machine__10214__auto__);
(statearr_640745[1] = 1);
return statearr_640745;
});
var state_machine__10214__auto____1 = (function (state_640707){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_640707);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e640746){if((e640746 instanceof Object))
{var ex__10217__auto__ = e640746;var statearr_640747_640776 = state_640707;(statearr_640747_640776[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_640707);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e640746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__640777 = state_640707;
state_640707 = G__640777;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_640707){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_640707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_640748 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_640748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___640749);
return statearr_640748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj640779 = {};return obj640779;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__7718__auto__ = p;if(and__7718__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__7718__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__8333__auto__ = (((p == null))?null:p);return (function (){var or__7730__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8333__auto__)]);if(or__7730__auto__)
{return or__7730__auto__;
} else
{var or__7730__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__7730__auto____$1)
{return or__7730__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7730__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7730__auto__,mults){
return (function (p1__640780_SHARP_){if(cljs.core.truth_((p1__640780_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__640780_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__640780_SHARP_.call(null,topic))))
{return p1__640780_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__640780_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t640905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t640905 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta640906){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta640906 = meta640906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t640905.cljs$lang$type = true;
cljs.core.async.t640905.cljs$lang$ctorStr = "cljs.core.async/t640905";
cljs.core.async.t640905.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t640905");
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t640905.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t640905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_640907){var self__ = this;
var _640907__$1 = this;return self__.meta640906;
});})(mults,ensure_mult))
;
cljs.core.async.t640905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_640907,meta640906__$1){var self__ = this;
var _640907__$1 = this;return (new cljs.core.async.t640905(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta640906__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t640905 = ((function (mults,ensure_mult){
return (function __GT_t640905(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta640906){return (new cljs.core.async.t640905(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta640906));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t640905(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___641029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_640981){var state_val_640982 = (state_640981[1]);if((state_val_640982 === 1))
{var state_640981__$1 = state_640981;var statearr_640983_641030 = state_640981__$1;(statearr_640983_641030[2] = null);
(statearr_640983_641030[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 2))
{var state_640981__$1 = state_640981;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_640981__$1,4,ch);
} else
{if((state_val_640982 === 3))
{var inst_640979 = (state_640981[2]);var state_640981__$1 = state_640981;return cljs.core.async.impl.ioc_helpers.return_chan(state_640981__$1,inst_640979);
} else
{if((state_val_640982 === 4))
{var inst_640910 = (state_640981[7]);var inst_640910__$1 = (state_640981[2]);var inst_640911 = (inst_640910__$1 == null);var state_640981__$1 = (function (){var statearr_640984 = state_640981;(statearr_640984[7] = inst_640910__$1);
return statearr_640984;
})();if(cljs.core.truth_(inst_640911))
{var statearr_640985_641031 = state_640981__$1;(statearr_640985_641031[1] = 5);
} else
{var statearr_640986_641032 = state_640981__$1;(statearr_640986_641032[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 5))
{var inst_640917 = cljs.core.deref(mults);var inst_640918 = cljs.core.vals(inst_640917);var inst_640919 = cljs.core.seq(inst_640918);var inst_640920 = inst_640919;var inst_640921 = null;var inst_640922 = 0;var inst_640923 = 0;var state_640981__$1 = (function (){var statearr_640987 = state_640981;(statearr_640987[8] = inst_640920);
(statearr_640987[9] = inst_640921);
(statearr_640987[10] = inst_640923);
(statearr_640987[11] = inst_640922);
return statearr_640987;
})();var statearr_640988_641033 = state_640981__$1;(statearr_640988_641033[2] = null);
(statearr_640988_641033[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 6))
{var inst_640958 = (state_640981[12]);var inst_640960 = (state_640981[13]);var inst_640910 = (state_640981[7]);var inst_640958__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_640910) : topic_fn.call(null,inst_640910));var inst_640959 = cljs.core.deref(mults);var inst_640960__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_640959,inst_640958__$1);var state_640981__$1 = (function (){var statearr_640989 = state_640981;(statearr_640989[12] = inst_640958__$1);
(statearr_640989[13] = inst_640960__$1);
return statearr_640989;
})();if(cljs.core.truth_(inst_640960__$1))
{var statearr_640990_641034 = state_640981__$1;(statearr_640990_641034[1] = 19);
} else
{var statearr_640991_641035 = state_640981__$1;(statearr_640991_641035[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 7))
{var inst_640977 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_640992_641036 = state_640981__$1;(statearr_640992_641036[2] = inst_640977);
(statearr_640992_641036[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 8))
{var inst_640923 = (state_640981[10]);var inst_640922 = (state_640981[11]);var inst_640925 = (inst_640923 < inst_640922);var inst_640926 = inst_640925;var state_640981__$1 = state_640981;if(cljs.core.truth_(inst_640926))
{var statearr_640996_641037 = state_640981__$1;(statearr_640996_641037[1] = 10);
} else
{var statearr_640997_641038 = state_640981__$1;(statearr_640997_641038[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 9))
{var inst_640956 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_640998_641039 = state_640981__$1;(statearr_640998_641039[2] = inst_640956);
(statearr_640998_641039[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 10))
{var inst_640920 = (state_640981[8]);var inst_640921 = (state_640981[9]);var inst_640923 = (state_640981[10]);var inst_640922 = (state_640981[11]);var inst_640928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_640921,inst_640923);var inst_640929 = cljs.core.async.muxch_STAR_(inst_640928);var inst_640930 = cljs.core.async.close_BANG_(inst_640929);var inst_640931 = (inst_640923 + 1);var tmp640993 = inst_640920;var tmp640994 = inst_640921;var tmp640995 = inst_640922;var inst_640920__$1 = tmp640993;var inst_640921__$1 = tmp640994;var inst_640922__$1 = tmp640995;var inst_640923__$1 = inst_640931;var state_640981__$1 = (function (){var statearr_640999 = state_640981;(statearr_640999[14] = inst_640930);
(statearr_640999[8] = inst_640920__$1);
(statearr_640999[9] = inst_640921__$1);
(statearr_640999[10] = inst_640923__$1);
(statearr_640999[11] = inst_640922__$1);
return statearr_640999;
})();var statearr_641000_641040 = state_640981__$1;(statearr_641000_641040[2] = null);
(statearr_641000_641040[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 11))
{var inst_640920 = (state_640981[8]);var inst_640934 = (state_640981[15]);var inst_640934__$1 = cljs.core.seq(inst_640920);var state_640981__$1 = (function (){var statearr_641001 = state_640981;(statearr_641001[15] = inst_640934__$1);
return statearr_641001;
})();if(inst_640934__$1)
{var statearr_641002_641041 = state_640981__$1;(statearr_641002_641041[1] = 13);
} else
{var statearr_641003_641042 = state_640981__$1;(statearr_641003_641042[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 12))
{var inst_640954 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_641004_641043 = state_640981__$1;(statearr_641004_641043[2] = inst_640954);
(statearr_641004_641043[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 13))
{var inst_640934 = (state_640981[15]);var inst_640936 = cljs.core.chunked_seq_QMARK_(inst_640934);var state_640981__$1 = state_640981;if(inst_640936)
{var statearr_641005_641044 = state_640981__$1;(statearr_641005_641044[1] = 16);
} else
{var statearr_641006_641045 = state_640981__$1;(statearr_641006_641045[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 14))
{var state_640981__$1 = state_640981;var statearr_641007_641046 = state_640981__$1;(statearr_641007_641046[2] = null);
(statearr_641007_641046[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 15))
{var inst_640952 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_641008_641047 = state_640981__$1;(statearr_641008_641047[2] = inst_640952);
(statearr_641008_641047[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 16))
{var inst_640934 = (state_640981[15]);var inst_640938 = cljs.core.chunk_first(inst_640934);var inst_640939 = cljs.core.chunk_rest(inst_640934);var inst_640940 = cljs.core.count(inst_640938);var inst_640920 = inst_640939;var inst_640921 = inst_640938;var inst_640922 = inst_640940;var inst_640923 = 0;var state_640981__$1 = (function (){var statearr_641009 = state_640981;(statearr_641009[8] = inst_640920);
(statearr_641009[9] = inst_640921);
(statearr_641009[10] = inst_640923);
(statearr_641009[11] = inst_640922);
return statearr_641009;
})();var statearr_641010_641048 = state_640981__$1;(statearr_641010_641048[2] = null);
(statearr_641010_641048[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 17))
{var inst_640934 = (state_640981[15]);var inst_640943 = cljs.core.first(inst_640934);var inst_640944 = cljs.core.async.muxch_STAR_(inst_640943);var inst_640945 = cljs.core.async.close_BANG_(inst_640944);var inst_640946 = cljs.core.next(inst_640934);var inst_640920 = inst_640946;var inst_640921 = null;var inst_640922 = 0;var inst_640923 = 0;var state_640981__$1 = (function (){var statearr_641011 = state_640981;(statearr_641011[16] = inst_640945);
(statearr_641011[8] = inst_640920);
(statearr_641011[9] = inst_640921);
(statearr_641011[10] = inst_640923);
(statearr_641011[11] = inst_640922);
return statearr_641011;
})();var statearr_641012_641049 = state_640981__$1;(statearr_641012_641049[2] = null);
(statearr_641012_641049[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 18))
{var inst_640949 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_641013_641050 = state_640981__$1;(statearr_641013_641050[2] = inst_640949);
(statearr_641013_641050[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 19))
{var state_640981__$1 = state_640981;var statearr_641014_641051 = state_640981__$1;(statearr_641014_641051[2] = null);
(statearr_641014_641051[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 20))
{var state_640981__$1 = state_640981;var statearr_641015_641052 = state_640981__$1;(statearr_641015_641052[2] = null);
(statearr_641015_641052[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 21))
{var inst_640974 = (state_640981[2]);var state_640981__$1 = (function (){var statearr_641016 = state_640981;(statearr_641016[17] = inst_640974);
return statearr_641016;
})();var statearr_641017_641053 = state_640981__$1;(statearr_641017_641053[2] = null);
(statearr_641017_641053[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 22))
{var inst_640971 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_641018_641054 = state_640981__$1;(statearr_641018_641054[2] = inst_640971);
(statearr_641018_641054[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 23))
{var inst_640958 = (state_640981[12]);var inst_640962 = (state_640981[2]);var inst_640963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_640958);var state_640981__$1 = (function (){var statearr_641019 = state_640981;(statearr_641019[18] = inst_640962);
return statearr_641019;
})();var statearr_641020_641055 = state_640981__$1;(statearr_641020_641055[2] = inst_640963);
cljs.core.async.impl.ioc_helpers.process_exception(state_640981__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_640982 === 24))
{var inst_640960 = (state_640981[13]);var inst_640910 = (state_640981[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_640981,23,Object,null,22);var inst_640967 = cljs.core.async.muxch_STAR_(inst_640960);var state_640981__$1 = state_640981;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_640981__$1,25,inst_640967,inst_640910);
} else
{if((state_val_640982 === 25))
{var inst_640969 = (state_640981[2]);var state_640981__$1 = state_640981;var statearr_641021_641056 = state_640981__$1;(statearr_641021_641056[2] = inst_640969);
cljs.core.async.impl.ioc_helpers.process_exception(state_640981__$1);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641025 = (new Array(19));(statearr_641025[0] = state_machine__10214__auto__);
(statearr_641025[1] = 1);
return statearr_641025;
});
var state_machine__10214__auto____1 = (function (state_640981){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_640981);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641026){if((e641026 instanceof Object))
{var ex__10217__auto__ = e641026;var statearr_641027_641057 = state_640981;(statearr_641027_641057[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_640981);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641058 = state_640981;
state_640981 = G__641058;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_640981){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_640981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641028 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641029);
return statearr_641028;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___641195 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641165){var state_val_641166 = (state_641165[1]);if((state_val_641166 === 1))
{var state_641165__$1 = state_641165;var statearr_641167_641196 = state_641165__$1;(statearr_641167_641196[2] = null);
(statearr_641167_641196[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 2))
{var inst_641128 = cljs.core.reset_BANG_(dctr,cnt);var inst_641129 = 0;var state_641165__$1 = (function (){var statearr_641168 = state_641165;(statearr_641168[7] = inst_641128);
(statearr_641168[8] = inst_641129);
return statearr_641168;
})();var statearr_641169_641197 = state_641165__$1;(statearr_641169_641197[2] = null);
(statearr_641169_641197[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 3))
{var inst_641163 = (state_641165[2]);var state_641165__$1 = state_641165;return cljs.core.async.impl.ioc_helpers.return_chan(state_641165__$1,inst_641163);
} else
{if((state_val_641166 === 4))
{var inst_641129 = (state_641165[8]);var inst_641131 = (inst_641129 < cnt);var state_641165__$1 = state_641165;if(cljs.core.truth_(inst_641131))
{var statearr_641170_641198 = state_641165__$1;(statearr_641170_641198[1] = 6);
} else
{var statearr_641171_641199 = state_641165__$1;(statearr_641171_641199[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 5))
{var inst_641149 = (state_641165[2]);var state_641165__$1 = (function (){var statearr_641172 = state_641165;(statearr_641172[9] = inst_641149);
return statearr_641172;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_641165__$1,12,dchan);
} else
{if((state_val_641166 === 6))
{var state_641165__$1 = state_641165;var statearr_641173_641200 = state_641165__$1;(statearr_641173_641200[2] = null);
(statearr_641173_641200[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 7))
{var state_641165__$1 = state_641165;var statearr_641174_641201 = state_641165__$1;(statearr_641174_641201[2] = null);
(statearr_641174_641201[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 8))
{var inst_641147 = (state_641165[2]);var state_641165__$1 = state_641165;var statearr_641175_641202 = state_641165__$1;(statearr_641175_641202[2] = inst_641147);
(statearr_641175_641202[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 9))
{var inst_641129 = (state_641165[8]);var inst_641142 = (state_641165[2]);var inst_641143 = (inst_641129 + 1);var inst_641129__$1 = inst_641143;var state_641165__$1 = (function (){var statearr_641176 = state_641165;(statearr_641176[10] = inst_641142);
(statearr_641176[8] = inst_641129__$1);
return statearr_641176;
})();var statearr_641177_641203 = state_641165__$1;(statearr_641177_641203[2] = null);
(statearr_641177_641203[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 10))
{var inst_641133 = (state_641165[2]);var inst_641134 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_641165__$1 = (function (){var statearr_641178 = state_641165;(statearr_641178[11] = inst_641133);
return statearr_641178;
})();var statearr_641179_641204 = state_641165__$1;(statearr_641179_641204[2] = inst_641134);
cljs.core.async.impl.ioc_helpers.process_exception(state_641165__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 11))
{var inst_641129 = (state_641165[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_641165,10,Object,null,9);var inst_641138 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_641129) : chs__$1.call(null,inst_641129));var inst_641139 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_641129) : done.call(null,inst_641129));var inst_641140 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_641138,inst_641139);var state_641165__$1 = state_641165;var statearr_641180_641205 = state_641165__$1;(statearr_641180_641205[2] = inst_641140);
cljs.core.async.impl.ioc_helpers.process_exception(state_641165__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 12))
{var inst_641151 = (state_641165[12]);var inst_641151__$1 = (state_641165[2]);var inst_641152 = cljs.core.some(cljs.core.nil_QMARK_,inst_641151__$1);var state_641165__$1 = (function (){var statearr_641181 = state_641165;(statearr_641181[12] = inst_641151__$1);
return statearr_641181;
})();if(cljs.core.truth_(inst_641152))
{var statearr_641182_641206 = state_641165__$1;(statearr_641182_641206[1] = 13);
} else
{var statearr_641183_641207 = state_641165__$1;(statearr_641183_641207[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 13))
{var inst_641154 = cljs.core.async.close_BANG_(out);var state_641165__$1 = state_641165;var statearr_641184_641208 = state_641165__$1;(statearr_641184_641208[2] = inst_641154);
(statearr_641184_641208[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 14))
{var inst_641151 = (state_641165[12]);var inst_641156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_641151);var state_641165__$1 = state_641165;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641165__$1,16,out,inst_641156);
} else
{if((state_val_641166 === 15))
{var inst_641161 = (state_641165[2]);var state_641165__$1 = state_641165;var statearr_641185_641209 = state_641165__$1;(statearr_641185_641209[2] = inst_641161);
(statearr_641185_641209[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641166 === 16))
{var inst_641158 = (state_641165[2]);var state_641165__$1 = (function (){var statearr_641186 = state_641165;(statearr_641186[13] = inst_641158);
return statearr_641186;
})();var statearr_641187_641210 = state_641165__$1;(statearr_641187_641210[2] = null);
(statearr_641187_641210[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641191 = (new Array(14));(statearr_641191[0] = state_machine__10214__auto__);
(statearr_641191[1] = 1);
return statearr_641191;
});
var state_machine__10214__auto____1 = (function (state_641165){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641165);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641192){if((e641192 instanceof Object))
{var ex__10217__auto__ = e641192;var statearr_641193_641211 = state_641165;(statearr_641193_641211[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641165);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641212 = state_641165;
state_641165 = G__641212;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641165){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641194 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641195);
return statearr_641194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___641320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641296){var state_val_641297 = (state_641296[1]);if((state_val_641297 === 1))
{var inst_641267 = cljs.core.vec(chs);var inst_641268 = inst_641267;var state_641296__$1 = (function (){var statearr_641298 = state_641296;(statearr_641298[7] = inst_641268);
return statearr_641298;
})();var statearr_641299_641321 = state_641296__$1;(statearr_641299_641321[2] = null);
(statearr_641299_641321[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 2))
{var inst_641268 = (state_641296[7]);var inst_641270 = cljs.core.count(inst_641268);var inst_641271 = (inst_641270 > 0);var state_641296__$1 = state_641296;if(cljs.core.truth_(inst_641271))
{var statearr_641300_641322 = state_641296__$1;(statearr_641300_641322[1] = 4);
} else
{var statearr_641301_641323 = state_641296__$1;(statearr_641301_641323[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 3))
{var inst_641294 = (state_641296[2]);var state_641296__$1 = state_641296;return cljs.core.async.impl.ioc_helpers.return_chan(state_641296__$1,inst_641294);
} else
{if((state_val_641297 === 4))
{var inst_641268 = (state_641296[7]);var state_641296__$1 = state_641296;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_641296__$1,7,inst_641268);
} else
{if((state_val_641297 === 5))
{var inst_641290 = cljs.core.async.close_BANG_(out);var state_641296__$1 = state_641296;var statearr_641302_641324 = state_641296__$1;(statearr_641302_641324[2] = inst_641290);
(statearr_641302_641324[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 6))
{var inst_641292 = (state_641296[2]);var state_641296__$1 = state_641296;var statearr_641303_641325 = state_641296__$1;(statearr_641303_641325[2] = inst_641292);
(statearr_641303_641325[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 7))
{var inst_641275 = (state_641296[8]);var inst_641276 = (state_641296[9]);var inst_641275__$1 = (state_641296[2]);var inst_641276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_641275__$1,0,null);var inst_641277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_641275__$1,1,null);var inst_641278 = (inst_641276__$1 == null);var state_641296__$1 = (function (){var statearr_641304 = state_641296;(statearr_641304[10] = inst_641277);
(statearr_641304[8] = inst_641275__$1);
(statearr_641304[9] = inst_641276__$1);
return statearr_641304;
})();if(cljs.core.truth_(inst_641278))
{var statearr_641305_641326 = state_641296__$1;(statearr_641305_641326[1] = 8);
} else
{var statearr_641306_641327 = state_641296__$1;(statearr_641306_641327[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 8))
{var inst_641277 = (state_641296[10]);var inst_641275 = (state_641296[8]);var inst_641276 = (state_641296[9]);var inst_641268 = (state_641296[7]);var inst_641280 = (function (){var c = inst_641277;var v = inst_641276;var vec__641273 = inst_641275;var cs = inst_641268;return ((function (c,v,vec__641273,cs,inst_641277,inst_641275,inst_641276,inst_641268,state_val_641297){
return (function (p1__641213_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__641213_SHARP_);
});
;})(c,v,vec__641273,cs,inst_641277,inst_641275,inst_641276,inst_641268,state_val_641297))
})();var inst_641281 = cljs.core.filterv(inst_641280,inst_641268);var inst_641268__$1 = inst_641281;var state_641296__$1 = (function (){var statearr_641307 = state_641296;(statearr_641307[7] = inst_641268__$1);
return statearr_641307;
})();var statearr_641308_641328 = state_641296__$1;(statearr_641308_641328[2] = null);
(statearr_641308_641328[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 9))
{var inst_641276 = (state_641296[9]);var state_641296__$1 = state_641296;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641296__$1,11,out,inst_641276);
} else
{if((state_val_641297 === 10))
{var inst_641288 = (state_641296[2]);var state_641296__$1 = state_641296;var statearr_641310_641329 = state_641296__$1;(statearr_641310_641329[2] = inst_641288);
(statearr_641310_641329[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641297 === 11))
{var inst_641268 = (state_641296[7]);var inst_641285 = (state_641296[2]);var tmp641309 = inst_641268;var inst_641268__$1 = tmp641309;var state_641296__$1 = (function (){var statearr_641311 = state_641296;(statearr_641311[7] = inst_641268__$1);
(statearr_641311[11] = inst_641285);
return statearr_641311;
})();var statearr_641312_641330 = state_641296__$1;(statearr_641312_641330[2] = null);
(statearr_641312_641330[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641316 = (new Array(12));(statearr_641316[0] = state_machine__10214__auto__);
(statearr_641316[1] = 1);
return statearr_641316;
});
var state_machine__10214__auto____1 = (function (state_641296){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641296);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641317){if((e641317 instanceof Object))
{var ex__10217__auto__ = e641317;var statearr_641318_641331 = state_641296;(statearr_641318_641331[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641296);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641317;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641332 = state_641296;
state_641296 = G__641332;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641296){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641319 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641320);
return statearr_641319;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___641425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641402){var state_val_641403 = (state_641402[1]);if((state_val_641403 === 1))
{var inst_641379 = 0;var state_641402__$1 = (function (){var statearr_641404 = state_641402;(statearr_641404[7] = inst_641379);
return statearr_641404;
})();var statearr_641405_641426 = state_641402__$1;(statearr_641405_641426[2] = null);
(statearr_641405_641426[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 2))
{var inst_641379 = (state_641402[7]);var inst_641381 = (inst_641379 < n);var state_641402__$1 = state_641402;if(cljs.core.truth_(inst_641381))
{var statearr_641406_641427 = state_641402__$1;(statearr_641406_641427[1] = 4);
} else
{var statearr_641407_641428 = state_641402__$1;(statearr_641407_641428[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 3))
{var inst_641399 = (state_641402[2]);var inst_641400 = cljs.core.async.close_BANG_(out);var state_641402__$1 = (function (){var statearr_641408 = state_641402;(statearr_641408[8] = inst_641399);
return statearr_641408;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_641402__$1,inst_641400);
} else
{if((state_val_641403 === 4))
{var state_641402__$1 = state_641402;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_641402__$1,7,ch);
} else
{if((state_val_641403 === 5))
{var state_641402__$1 = state_641402;var statearr_641409_641429 = state_641402__$1;(statearr_641409_641429[2] = null);
(statearr_641409_641429[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 6))
{var inst_641397 = (state_641402[2]);var state_641402__$1 = state_641402;var statearr_641410_641430 = state_641402__$1;(statearr_641410_641430[2] = inst_641397);
(statearr_641410_641430[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 7))
{var inst_641384 = (state_641402[9]);var inst_641384__$1 = (state_641402[2]);var inst_641385 = (inst_641384__$1 == null);var inst_641386 = cljs.core.not(inst_641385);var state_641402__$1 = (function (){var statearr_641411 = state_641402;(statearr_641411[9] = inst_641384__$1);
return statearr_641411;
})();if(inst_641386)
{var statearr_641412_641431 = state_641402__$1;(statearr_641412_641431[1] = 8);
} else
{var statearr_641413_641432 = state_641402__$1;(statearr_641413_641432[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 8))
{var inst_641384 = (state_641402[9]);var state_641402__$1 = state_641402;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641402__$1,11,out,inst_641384);
} else
{if((state_val_641403 === 9))
{var state_641402__$1 = state_641402;var statearr_641414_641433 = state_641402__$1;(statearr_641414_641433[2] = null);
(statearr_641414_641433[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 10))
{var inst_641394 = (state_641402[2]);var state_641402__$1 = state_641402;var statearr_641415_641434 = state_641402__$1;(statearr_641415_641434[2] = inst_641394);
(statearr_641415_641434[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641403 === 11))
{var inst_641379 = (state_641402[7]);var inst_641389 = (state_641402[2]);var inst_641390 = (inst_641379 + 1);var inst_641379__$1 = inst_641390;var state_641402__$1 = (function (){var statearr_641416 = state_641402;(statearr_641416[10] = inst_641389);
(statearr_641416[7] = inst_641379__$1);
return statearr_641416;
})();var statearr_641417_641435 = state_641402__$1;(statearr_641417_641435[2] = null);
(statearr_641417_641435[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641421 = (new Array(11));(statearr_641421[0] = state_machine__10214__auto__);
(statearr_641421[1] = 1);
return statearr_641421;
});
var state_machine__10214__auto____1 = (function (state_641402){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641402);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641422){if((e641422 instanceof Object))
{var ex__10217__auto__ = e641422;var statearr_641423_641436 = state_641402;(statearr_641423_641436[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641402);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641437 = state_641402;
state_641402 = G__641437;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641402){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641424 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641425);
return statearr_641424;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___641534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641509){var state_val_641510 = (state_641509[1]);if((state_val_641510 === 1))
{var inst_641486 = null;var state_641509__$1 = (function (){var statearr_641511 = state_641509;(statearr_641511[7] = inst_641486);
return statearr_641511;
})();var statearr_641512_641535 = state_641509__$1;(statearr_641512_641535[2] = null);
(statearr_641512_641535[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 2))
{var state_641509__$1 = state_641509;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_641509__$1,4,ch);
} else
{if((state_val_641510 === 3))
{var inst_641506 = (state_641509[2]);var inst_641507 = cljs.core.async.close_BANG_(out);var state_641509__$1 = (function (){var statearr_641513 = state_641509;(statearr_641513[8] = inst_641506);
return statearr_641513;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_641509__$1,inst_641507);
} else
{if((state_val_641510 === 4))
{var inst_641489 = (state_641509[9]);var inst_641489__$1 = (state_641509[2]);var inst_641490 = (inst_641489__$1 == null);var inst_641491 = cljs.core.not(inst_641490);var state_641509__$1 = (function (){var statearr_641514 = state_641509;(statearr_641514[9] = inst_641489__$1);
return statearr_641514;
})();if(inst_641491)
{var statearr_641515_641536 = state_641509__$1;(statearr_641515_641536[1] = 5);
} else
{var statearr_641516_641537 = state_641509__$1;(statearr_641516_641537[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 5))
{var inst_641489 = (state_641509[9]);var inst_641486 = (state_641509[7]);var inst_641493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_641489,inst_641486);var state_641509__$1 = state_641509;if(inst_641493)
{var statearr_641517_641538 = state_641509__$1;(statearr_641517_641538[1] = 8);
} else
{var statearr_641518_641539 = state_641509__$1;(statearr_641518_641539[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 6))
{var state_641509__$1 = state_641509;var statearr_641520_641540 = state_641509__$1;(statearr_641520_641540[2] = null);
(statearr_641520_641540[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 7))
{var inst_641504 = (state_641509[2]);var state_641509__$1 = state_641509;var statearr_641521_641541 = state_641509__$1;(statearr_641521_641541[2] = inst_641504);
(statearr_641521_641541[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 8))
{var inst_641486 = (state_641509[7]);var tmp641519 = inst_641486;var inst_641486__$1 = tmp641519;var state_641509__$1 = (function (){var statearr_641522 = state_641509;(statearr_641522[7] = inst_641486__$1);
return statearr_641522;
})();var statearr_641523_641542 = state_641509__$1;(statearr_641523_641542[2] = null);
(statearr_641523_641542[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 9))
{var inst_641489 = (state_641509[9]);var state_641509__$1 = state_641509;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641509__$1,11,out,inst_641489);
} else
{if((state_val_641510 === 10))
{var inst_641501 = (state_641509[2]);var state_641509__$1 = state_641509;var statearr_641524_641543 = state_641509__$1;(statearr_641524_641543[2] = inst_641501);
(statearr_641524_641543[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641510 === 11))
{var inst_641489 = (state_641509[9]);var inst_641498 = (state_641509[2]);var inst_641486 = inst_641489;var state_641509__$1 = (function (){var statearr_641525 = state_641509;(statearr_641525[10] = inst_641498);
(statearr_641525[7] = inst_641486);
return statearr_641525;
})();var statearr_641526_641544 = state_641509__$1;(statearr_641526_641544[2] = null);
(statearr_641526_641544[1] = 2);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641530 = (new Array(11));(statearr_641530[0] = state_machine__10214__auto__);
(statearr_641530[1] = 1);
return statearr_641530;
});
var state_machine__10214__auto____1 = (function (state_641509){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641509);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641531){if((e641531 instanceof Object))
{var ex__10217__auto__ = e641531;var statearr_641532_641545 = state_641509;(statearr_641532_641545[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641509);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641531;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641546 = state_641509;
state_641509 = G__641546;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641509){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641533 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641534);
return statearr_641533;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___641681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641651){var state_val_641652 = (state_641651[1]);if((state_val_641652 === 1))
{var inst_641614 = (new Array(n));var inst_641615 = inst_641614;var inst_641616 = 0;var state_641651__$1 = (function (){var statearr_641653 = state_641651;(statearr_641653[7] = inst_641616);
(statearr_641653[8] = inst_641615);
return statearr_641653;
})();var statearr_641654_641682 = state_641651__$1;(statearr_641654_641682[2] = null);
(statearr_641654_641682[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 2))
{var state_641651__$1 = state_641651;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_641651__$1,4,ch);
} else
{if((state_val_641652 === 3))
{var inst_641649 = (state_641651[2]);var state_641651__$1 = state_641651;return cljs.core.async.impl.ioc_helpers.return_chan(state_641651__$1,inst_641649);
} else
{if((state_val_641652 === 4))
{var inst_641619 = (state_641651[9]);var inst_641619__$1 = (state_641651[2]);var inst_641620 = (inst_641619__$1 == null);var inst_641621 = cljs.core.not(inst_641620);var state_641651__$1 = (function (){var statearr_641655 = state_641651;(statearr_641655[9] = inst_641619__$1);
return statearr_641655;
})();if(inst_641621)
{var statearr_641656_641683 = state_641651__$1;(statearr_641656_641683[1] = 5);
} else
{var statearr_641657_641684 = state_641651__$1;(statearr_641657_641684[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 5))
{var inst_641624 = (state_641651[10]);var inst_641616 = (state_641651[7]);var inst_641615 = (state_641651[8]);var inst_641619 = (state_641651[9]);var inst_641623 = (inst_641615[inst_641616] = inst_641619);var inst_641624__$1 = (inst_641616 + 1);var inst_641625 = (inst_641624__$1 < n);var state_641651__$1 = (function (){var statearr_641658 = state_641651;(statearr_641658[11] = inst_641623);
(statearr_641658[10] = inst_641624__$1);
return statearr_641658;
})();if(cljs.core.truth_(inst_641625))
{var statearr_641659_641685 = state_641651__$1;(statearr_641659_641685[1] = 8);
} else
{var statearr_641660_641686 = state_641651__$1;(statearr_641660_641686[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 6))
{var inst_641616 = (state_641651[7]);var inst_641637 = (inst_641616 > 0);var state_641651__$1 = state_641651;if(cljs.core.truth_(inst_641637))
{var statearr_641662_641687 = state_641651__$1;(statearr_641662_641687[1] = 12);
} else
{var statearr_641663_641688 = state_641651__$1;(statearr_641663_641688[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 7))
{var inst_641647 = (state_641651[2]);var state_641651__$1 = state_641651;var statearr_641664_641689 = state_641651__$1;(statearr_641664_641689[2] = inst_641647);
(statearr_641664_641689[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 8))
{var inst_641624 = (state_641651[10]);var inst_641615 = (state_641651[8]);var tmp641661 = inst_641615;var inst_641615__$1 = tmp641661;var inst_641616 = inst_641624;var state_641651__$1 = (function (){var statearr_641665 = state_641651;(statearr_641665[7] = inst_641616);
(statearr_641665[8] = inst_641615__$1);
return statearr_641665;
})();var statearr_641666_641690 = state_641651__$1;(statearr_641666_641690[2] = null);
(statearr_641666_641690[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 9))
{var inst_641615 = (state_641651[8]);var inst_641629 = cljs.core.vec(inst_641615);var state_641651__$1 = state_641651;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641651__$1,11,out,inst_641629);
} else
{if((state_val_641652 === 10))
{var inst_641635 = (state_641651[2]);var state_641651__$1 = state_641651;var statearr_641667_641691 = state_641651__$1;(statearr_641667_641691[2] = inst_641635);
(statearr_641667_641691[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 11))
{var inst_641631 = (state_641651[2]);var inst_641632 = (new Array(n));var inst_641615 = inst_641632;var inst_641616 = 0;var state_641651__$1 = (function (){var statearr_641668 = state_641651;(statearr_641668[12] = inst_641631);
(statearr_641668[7] = inst_641616);
(statearr_641668[8] = inst_641615);
return statearr_641668;
})();var statearr_641669_641692 = state_641651__$1;(statearr_641669_641692[2] = null);
(statearr_641669_641692[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 12))
{var inst_641615 = (state_641651[8]);var inst_641639 = cljs.core.vec(inst_641615);var state_641651__$1 = state_641651;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641651__$1,15,out,inst_641639);
} else
{if((state_val_641652 === 13))
{var state_641651__$1 = state_641651;var statearr_641670_641693 = state_641651__$1;(statearr_641670_641693[2] = null);
(statearr_641670_641693[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 14))
{var inst_641644 = (state_641651[2]);var inst_641645 = cljs.core.async.close_BANG_(out);var state_641651__$1 = (function (){var statearr_641671 = state_641651;(statearr_641671[13] = inst_641644);
return statearr_641671;
})();var statearr_641672_641694 = state_641651__$1;(statearr_641672_641694[2] = inst_641645);
(statearr_641672_641694[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641652 === 15))
{var inst_641641 = (state_641651[2]);var state_641651__$1 = state_641651;var statearr_641673_641695 = state_641651__$1;(statearr_641673_641695[2] = inst_641641);
(statearr_641673_641695[1] = 14);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641677 = (new Array(14));(statearr_641677[0] = state_machine__10214__auto__);
(statearr_641677[1] = 1);
return statearr_641677;
});
var state_machine__10214__auto____1 = (function (state_641651){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641651);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641678){if((e641678 instanceof Object))
{var ex__10217__auto__ = e641678;var statearr_641679_641696 = state_641651;(statearr_641679_641696[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641651);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641697 = state_641651;
state_641651 = G__641697;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641651){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641680 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641681);
return statearr_641680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___641840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_641810){var state_val_641811 = (state_641810[1]);if((state_val_641811 === 1))
{var inst_641769 = (new Array(0));var inst_641770 = inst_641769;var inst_641771 = cljs.core.constant$keyword$310;var state_641810__$1 = (function (){var statearr_641812 = state_641810;(statearr_641812[7] = inst_641770);
(statearr_641812[8] = inst_641771);
return statearr_641812;
})();var statearr_641813_641841 = state_641810__$1;(statearr_641813_641841[2] = null);
(statearr_641813_641841[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 2))
{var state_641810__$1 = state_641810;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_641810__$1,4,ch);
} else
{if((state_val_641811 === 3))
{var inst_641808 = (state_641810[2]);var state_641810__$1 = state_641810;return cljs.core.async.impl.ioc_helpers.return_chan(state_641810__$1,inst_641808);
} else
{if((state_val_641811 === 4))
{var inst_641774 = (state_641810[9]);var inst_641774__$1 = (state_641810[2]);var inst_641775 = (inst_641774__$1 == null);var inst_641776 = cljs.core.not(inst_641775);var state_641810__$1 = (function (){var statearr_641814 = state_641810;(statearr_641814[9] = inst_641774__$1);
return statearr_641814;
})();if(inst_641776)
{var statearr_641815_641842 = state_641810__$1;(statearr_641815_641842[1] = 5);
} else
{var statearr_641816_641843 = state_641810__$1;(statearr_641816_641843[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 5))
{var inst_641778 = (state_641810[10]);var inst_641774 = (state_641810[9]);var inst_641771 = (state_641810[8]);var inst_641778__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_641774) : f.call(null,inst_641774));var inst_641779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_641778__$1,inst_641771);var inst_641780 = cljs.core.keyword_identical_QMARK_(inst_641771,cljs.core.constant$keyword$310);var inst_641781 = (inst_641779) || (inst_641780);var state_641810__$1 = (function (){var statearr_641817 = state_641810;(statearr_641817[10] = inst_641778__$1);
return statearr_641817;
})();if(cljs.core.truth_(inst_641781))
{var statearr_641818_641844 = state_641810__$1;(statearr_641818_641844[1] = 8);
} else
{var statearr_641819_641845 = state_641810__$1;(statearr_641819_641845[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 6))
{var inst_641770 = (state_641810[7]);var inst_641795 = inst_641770.length;var inst_641796 = (inst_641795 > 0);var state_641810__$1 = state_641810;if(cljs.core.truth_(inst_641796))
{var statearr_641821_641846 = state_641810__$1;(statearr_641821_641846[1] = 12);
} else
{var statearr_641822_641847 = state_641810__$1;(statearr_641822_641847[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 7))
{var inst_641806 = (state_641810[2]);var state_641810__$1 = state_641810;var statearr_641823_641848 = state_641810__$1;(statearr_641823_641848[2] = inst_641806);
(statearr_641823_641848[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 8))
{var inst_641778 = (state_641810[10]);var inst_641774 = (state_641810[9]);var inst_641770 = (state_641810[7]);var inst_641783 = inst_641770.push(inst_641774);var tmp641820 = inst_641770;var inst_641770__$1 = tmp641820;var inst_641771 = inst_641778;var state_641810__$1 = (function (){var statearr_641824 = state_641810;(statearr_641824[11] = inst_641783);
(statearr_641824[7] = inst_641770__$1);
(statearr_641824[8] = inst_641771);
return statearr_641824;
})();var statearr_641825_641849 = state_641810__$1;(statearr_641825_641849[2] = null);
(statearr_641825_641849[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 9))
{var inst_641770 = (state_641810[7]);var inst_641786 = cljs.core.vec(inst_641770);var state_641810__$1 = state_641810;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641810__$1,11,out,inst_641786);
} else
{if((state_val_641811 === 10))
{var inst_641793 = (state_641810[2]);var state_641810__$1 = state_641810;var statearr_641826_641850 = state_641810__$1;(statearr_641826_641850[2] = inst_641793);
(statearr_641826_641850[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 11))
{var inst_641778 = (state_641810[10]);var inst_641774 = (state_641810[9]);var inst_641788 = (state_641810[2]);var inst_641789 = (new Array(0));var inst_641790 = inst_641789.push(inst_641774);var inst_641770 = inst_641789;var inst_641771 = inst_641778;var state_641810__$1 = (function (){var statearr_641827 = state_641810;(statearr_641827[12] = inst_641788);
(statearr_641827[13] = inst_641790);
(statearr_641827[7] = inst_641770);
(statearr_641827[8] = inst_641771);
return statearr_641827;
})();var statearr_641828_641851 = state_641810__$1;(statearr_641828_641851[2] = null);
(statearr_641828_641851[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 12))
{var inst_641770 = (state_641810[7]);var inst_641798 = cljs.core.vec(inst_641770);var state_641810__$1 = state_641810;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_641810__$1,15,out,inst_641798);
} else
{if((state_val_641811 === 13))
{var state_641810__$1 = state_641810;var statearr_641829_641852 = state_641810__$1;(statearr_641829_641852[2] = null);
(statearr_641829_641852[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 14))
{var inst_641803 = (state_641810[2]);var inst_641804 = cljs.core.async.close_BANG_(out);var state_641810__$1 = (function (){var statearr_641830 = state_641810;(statearr_641830[14] = inst_641803);
return statearr_641830;
})();var statearr_641831_641853 = state_641810__$1;(statearr_641831_641853[2] = inst_641804);
(statearr_641831_641853[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_641811 === 15))
{var inst_641800 = (state_641810[2]);var state_641810__$1 = state_641810;var statearr_641832_641854 = state_641810__$1;(statearr_641832_641854[2] = inst_641800);
(statearr_641832_641854[1] = 14);
return cljs.core.constant$keyword$297;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__10213__auto__){
return (function() {
var state_machine__10214__auto__ = null;
var state_machine__10214__auto____0 = (function (){var statearr_641836 = (new Array(15));(statearr_641836[0] = state_machine__10214__auto__);
(statearr_641836[1] = 1);
return statearr_641836;
});
var state_machine__10214__auto____1 = (function (state_641810){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_641810);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e641837){if((e641837 instanceof Object))
{var ex__10217__auto__ = e641837;var statearr_641838_641855 = state_641810;(statearr_641838_641855[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_641810);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e641837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__641856 = state_641810;
state_641810 = G__641856;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_641810){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_641810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_641839 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_641839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___641840);
return statearr_641839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__10285__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
