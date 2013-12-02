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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t613358 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613358 = (function (f,fn_handler,meta613359){
this.f = f;
this.fn_handler = fn_handler;
this.meta613359 = meta613359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613358.cljs$lang$type = true;
cljs.core.async.t613358.cljs$lang$ctorStr = "cljs.core.async/t613358";
cljs.core.async.t613358.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613358");
});
cljs.core.async.t613358.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t613358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t613358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t613358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613360){var self__ = this;
var _613360__$1 = this;return self__.meta613359;
});
cljs.core.async.t613358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613360,meta613359__$1){var self__ = this;
var _613360__$1 = this;return (new cljs.core.async.t613358(self__.f,self__.fn_handler,meta613359__$1));
});
cljs.core.async.__GT_t613358 = (function __GT_t613358(f__$1,fn_handler__$1,meta613359){return (new cljs.core.async.t613358(f__$1,fn_handler__$1,meta613359));
});
}
return (new cljs.core.async.t613358(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__613362 = buff;if(G__613362)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__613362.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__613362.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__613362);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__613362);
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
{var val_613363 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_613363) : fn1.call(null,val_613363));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_613363) : fn1.call(null,val_613363));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___613364 = n;var x_613365 = 0;while(true){
if((x_613365 < n__8553__auto___613364))
{(a[x_613365] = 0);
{
var G__613366 = (x_613365 + 1);
x_613365 = G__613366;
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
var G__613367 = (i + 1);
i = G__613367;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t613371 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613371 = (function (flag,alt_flag,meta613372){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta613372 = meta613372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613371.cljs$lang$type = true;
cljs.core.async.t613371.cljs$lang$ctorStr = "cljs.core.async/t613371";
cljs.core.async.t613371.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613371");
});
cljs.core.async.t613371.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t613371.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t613371.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t613371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613373){var self__ = this;
var _613373__$1 = this;return self__.meta613372;
});
cljs.core.async.t613371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613373,meta613372__$1){var self__ = this;
var _613373__$1 = this;return (new cljs.core.async.t613371(self__.flag,self__.alt_flag,meta613372__$1));
});
cljs.core.async.__GT_t613371 = (function __GT_t613371(flag__$1,alt_flag__$1,meta613372){return (new cljs.core.async.t613371(flag__$1,alt_flag__$1,meta613372));
});
}
return (new cljs.core.async.t613371(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t613377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613377 = (function (cb,flag,alt_handler,meta613378){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta613378 = meta613378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613377.cljs$lang$type = true;
cljs.core.async.t613377.cljs$lang$ctorStr = "cljs.core.async/t613377";
cljs.core.async.t613377.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613377");
});
cljs.core.async.t613377.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t613377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t613377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t613377.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613379){var self__ = this;
var _613379__$1 = this;return self__.meta613378;
});
cljs.core.async.t613377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613379,meta613378__$1){var self__ = this;
var _613379__$1 = this;return (new cljs.core.async.t613377(self__.cb,self__.flag,self__.alt_handler,meta613378__$1));
});
cljs.core.async.__GT_t613377 = (function __GT_t613377(cb__$1,flag__$1,alt_handler__$1,meta613378){return (new cljs.core.async.t613377(cb__$1,flag__$1,alt_handler__$1,meta613378));
});
}
return (new cljs.core.async.t613377(cb,flag,alt_handler,null));
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
return (function (p1__613380_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__613380_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__613380_SHARP_,port], null)));
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
var G__613381 = (i + 1);
i = G__613381;
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
var alts_BANG___delegate = function (ports,p__613382){var map__613384 = p__613382;var map__613384__$1 = ((cljs.core.seq_QMARK_(map__613384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__613384):map__613384);var opts = map__613384__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__613382 = null;if (arguments.length > 1) {
  p__613382 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__613382);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__613385){
var ports = cljs.core.first(arglist__613385);
var p__613382 = cljs.core.rest(arglist__613385);
return alts_BANG___delegate(ports,p__613382);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t613393 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613393 = (function (ch,f,map_LT_,meta613394){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta613394 = meta613394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613393.cljs$lang$type = true;
cljs.core.async.t613393.cljs$lang$ctorStr = "cljs.core.async/t613393";
cljs.core.async.t613393.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613393");
});
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t613396 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613396 = (function (fn1,_,meta613394,ch,f,map_LT_,meta613397){
this.fn1 = fn1;
this._ = _;
this.meta613394 = meta613394;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta613397 = meta613397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613396.cljs$lang$type = true;
cljs.core.async.t613396.cljs$lang$ctorStr = "cljs.core.async/t613396";
cljs.core.async.t613396.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613396");
});
cljs.core.async.t613396.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t613396.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t613396.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t613396.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__613386_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__613386_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__613386_SHARP_) : self__.f.call(null,p1__613386_SHARP_)))) : f1.call(null,(((p1__613386_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__613386_SHARP_) : self__.f.call(null,p1__613386_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t613396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613398){var self__ = this;
var _613398__$1 = this;return self__.meta613397;
});
cljs.core.async.t613396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613398,meta613397__$1){var self__ = this;
var _613398__$1 = this;return (new cljs.core.async.t613396(self__.fn1,self__._,self__.meta613394,self__.ch,self__.f,self__.map_LT_,meta613397__$1));
});
cljs.core.async.__GT_t613396 = (function __GT_t613396(fn1__$1,___$2,meta613394__$1,ch__$2,f__$2,map_LT___$2,meta613397){return (new cljs.core.async.t613396(fn1__$1,___$2,meta613394__$1,ch__$2,f__$2,map_LT___$2,meta613397));
});
}
return (new cljs.core.async.t613396(fn1,___$1,self__.meta613394,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t613393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t613393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613395){var self__ = this;
var _613395__$1 = this;return self__.meta613394;
});
cljs.core.async.t613393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613395,meta613394__$1){var self__ = this;
var _613395__$1 = this;return (new cljs.core.async.t613393(self__.ch,self__.f,self__.map_LT_,meta613394__$1));
});
cljs.core.async.__GT_t613393 = (function __GT_t613393(ch__$1,f__$1,map_LT___$1,meta613394){return (new cljs.core.async.t613393(ch__$1,f__$1,map_LT___$1,meta613394));
});
}
return (new cljs.core.async.t613393(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t613402 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613402 = (function (ch,f,map_GT_,meta613403){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta613403 = meta613403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613402.cljs$lang$type = true;
cljs.core.async.t613402.cljs$lang$ctorStr = "cljs.core.async/t613402";
cljs.core.async.t613402.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613402");
});
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t613402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t613402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613404){var self__ = this;
var _613404__$1 = this;return self__.meta613403;
});
cljs.core.async.t613402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613404,meta613403__$1){var self__ = this;
var _613404__$1 = this;return (new cljs.core.async.t613402(self__.ch,self__.f,self__.map_GT_,meta613403__$1));
});
cljs.core.async.__GT_t613402 = (function __GT_t613402(ch__$1,f__$1,map_GT___$1,meta613403){return (new cljs.core.async.t613402(ch__$1,f__$1,map_GT___$1,meta613403));
});
}
return (new cljs.core.async.t613402(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t613408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t613408 = (function (ch,p,filter_GT_,meta613409){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta613409 = meta613409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t613408.cljs$lang$type = true;
cljs.core.async.t613408.cljs$lang$ctorStr = "cljs.core.async/t613408";
cljs.core.async.t613408.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t613408");
});
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t613408.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t613408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_613410){var self__ = this;
var _613410__$1 = this;return self__.meta613409;
});
cljs.core.async.t613408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_613410,meta613409__$1){var self__ = this;
var _613410__$1 = this;return (new cljs.core.async.t613408(self__.ch,self__.p,self__.filter_GT_,meta613409__$1));
});
cljs.core.async.__GT_t613408 = (function __GT_t613408(ch__$1,p__$1,filter_GT___$1,meta613409){return (new cljs.core.async.t613408(ch__$1,p__$1,filter_GT___$1,meta613409));
});
}
return (new cljs.core.async.t613408(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___613493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_613472){var state_val_613473 = (state_613472[1]);if((state_val_613473 === 1))
{var state_613472__$1 = state_613472;var statearr_613474_613494 = state_613472__$1;(statearr_613474_613494[2] = null);
(statearr_613474_613494[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 2))
{var state_613472__$1 = state_613472;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_613472__$1,4,ch);
} else
{if((state_val_613473 === 3))
{var inst_613470 = (state_613472[2]);var state_613472__$1 = state_613472;return cljs.core.async.impl.ioc_helpers.return_chan(state_613472__$1,inst_613470);
} else
{if((state_val_613473 === 4))
{var inst_613454 = (state_613472[7]);var inst_613454__$1 = (state_613472[2]);var inst_613455 = (inst_613454__$1 == null);var state_613472__$1 = (function (){var statearr_613475 = state_613472;(statearr_613475[7] = inst_613454__$1);
return statearr_613475;
})();if(cljs.core.truth_(inst_613455))
{var statearr_613476_613495 = state_613472__$1;(statearr_613476_613495[1] = 5);
} else
{var statearr_613477_613496 = state_613472__$1;(statearr_613477_613496[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 5))
{var inst_613457 = cljs.core.async.close_BANG_(out);var state_613472__$1 = state_613472;var statearr_613478_613497 = state_613472__$1;(statearr_613478_613497[2] = inst_613457);
(statearr_613478_613497[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 6))
{var inst_613454 = (state_613472[7]);var inst_613459 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_613454) : p.call(null,inst_613454));var state_613472__$1 = state_613472;if(cljs.core.truth_(inst_613459))
{var statearr_613479_613498 = state_613472__$1;(statearr_613479_613498[1] = 8);
} else
{var statearr_613480_613499 = state_613472__$1;(statearr_613480_613499[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 7))
{var inst_613468 = (state_613472[2]);var state_613472__$1 = state_613472;var statearr_613481_613500 = state_613472__$1;(statearr_613481_613500[2] = inst_613468);
(statearr_613481_613500[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 8))
{var inst_613454 = (state_613472[7]);var state_613472__$1 = state_613472;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_613472__$1,11,out,inst_613454);
} else
{if((state_val_613473 === 9))
{var state_613472__$1 = state_613472;var statearr_613482_613501 = state_613472__$1;(statearr_613482_613501[2] = null);
(statearr_613482_613501[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 10))
{var inst_613465 = (state_613472[2]);var state_613472__$1 = (function (){var statearr_613483 = state_613472;(statearr_613483[8] = inst_613465);
return statearr_613483;
})();var statearr_613484_613502 = state_613472__$1;(statearr_613484_613502[2] = null);
(statearr_613484_613502[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613473 === 11))
{var inst_613462 = (state_613472[2]);var state_613472__$1 = state_613472;var statearr_613485_613503 = state_613472__$1;(statearr_613485_613503[2] = inst_613462);
(statearr_613485_613503[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_613489 = (new Array(9));(statearr_613489[0] = state_machine__10214__auto__);
(statearr_613489[1] = 1);
return statearr_613489;
});
var state_machine__10214__auto____1 = (function (state_613472){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_613472);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e613490){if((e613490 instanceof Object))
{var ex__10217__auto__ = e613490;var statearr_613491_613504 = state_613472;(statearr_613491_613504[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_613472);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e613490;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__613505 = state_613472;
state_613472 = G__613505;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_613472){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_613472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_613492 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_613492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___613493);
return statearr_613492;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_613657){var state_val_613658 = (state_613657[1]);if((state_val_613658 === 1))
{var state_613657__$1 = state_613657;var statearr_613659_613696 = state_613657__$1;(statearr_613659_613696[2] = null);
(statearr_613659_613696[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 2))
{var state_613657__$1 = state_613657;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_613657__$1,4,in$);
} else
{if((state_val_613658 === 3))
{var inst_613655 = (state_613657[2]);var state_613657__$1 = state_613657;return cljs.core.async.impl.ioc_helpers.return_chan(state_613657__$1,inst_613655);
} else
{if((state_val_613658 === 4))
{var inst_613603 = (state_613657[7]);var inst_613603__$1 = (state_613657[2]);var inst_613604 = (inst_613603__$1 == null);var state_613657__$1 = (function (){var statearr_613660 = state_613657;(statearr_613660[7] = inst_613603__$1);
return statearr_613660;
})();if(cljs.core.truth_(inst_613604))
{var statearr_613661_613697 = state_613657__$1;(statearr_613661_613697[1] = 5);
} else
{var statearr_613662_613698 = state_613657__$1;(statearr_613662_613698[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 5))
{var inst_613606 = cljs.core.async.close_BANG_(out);var state_613657__$1 = state_613657;var statearr_613663_613699 = state_613657__$1;(statearr_613663_613699[2] = inst_613606);
(statearr_613663_613699[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 6))
{var inst_613603 = (state_613657[7]);var inst_613608 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_613603) : f.call(null,inst_613603));var inst_613613 = cljs.core.seq(inst_613608);var inst_613614 = inst_613613;var inst_613615 = null;var inst_613616 = 0;var inst_613617 = 0;var state_613657__$1 = (function (){var statearr_613664 = state_613657;(statearr_613664[8] = inst_613615);
(statearr_613664[9] = inst_613614);
(statearr_613664[10] = inst_613616);
(statearr_613664[11] = inst_613617);
return statearr_613664;
})();var statearr_613665_613700 = state_613657__$1;(statearr_613665_613700[2] = null);
(statearr_613665_613700[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 7))
{var inst_613653 = (state_613657[2]);var state_613657__$1 = state_613657;var statearr_613666_613701 = state_613657__$1;(statearr_613666_613701[2] = inst_613653);
(statearr_613666_613701[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 8))
{var inst_613616 = (state_613657[10]);var inst_613617 = (state_613657[11]);var inst_613619 = (inst_613617 < inst_613616);var inst_613620 = inst_613619;var state_613657__$1 = state_613657;if(cljs.core.truth_(inst_613620))
{var statearr_613667_613702 = state_613657__$1;(statearr_613667_613702[1] = 10);
} else
{var statearr_613668_613703 = state_613657__$1;(statearr_613668_613703[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 9))
{var inst_613650 = (state_613657[2]);var state_613657__$1 = (function (){var statearr_613669 = state_613657;(statearr_613669[12] = inst_613650);
return statearr_613669;
})();var statearr_613670_613704 = state_613657__$1;(statearr_613670_613704[2] = null);
(statearr_613670_613704[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 10))
{var inst_613615 = (state_613657[8]);var inst_613617 = (state_613657[11]);var inst_613622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_613615,inst_613617);var state_613657__$1 = state_613657;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_613657__$1,13,out,inst_613622);
} else
{if((state_val_613658 === 11))
{var inst_613614 = (state_613657[9]);var inst_613628 = (state_613657[13]);var inst_613628__$1 = cljs.core.seq(inst_613614);var state_613657__$1 = (function (){var statearr_613674 = state_613657;(statearr_613674[13] = inst_613628__$1);
return statearr_613674;
})();if(inst_613628__$1)
{var statearr_613675_613705 = state_613657__$1;(statearr_613675_613705[1] = 14);
} else
{var statearr_613676_613706 = state_613657__$1;(statearr_613676_613706[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 12))
{var inst_613648 = (state_613657[2]);var state_613657__$1 = state_613657;var statearr_613677_613707 = state_613657__$1;(statearr_613677_613707[2] = inst_613648);
(statearr_613677_613707[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 13))
{var inst_613615 = (state_613657[8]);var inst_613614 = (state_613657[9]);var inst_613616 = (state_613657[10]);var inst_613617 = (state_613657[11]);var inst_613624 = (state_613657[2]);var inst_613625 = (inst_613617 + 1);var tmp613671 = inst_613615;var tmp613672 = inst_613614;var tmp613673 = inst_613616;var inst_613614__$1 = tmp613672;var inst_613615__$1 = tmp613671;var inst_613616__$1 = tmp613673;var inst_613617__$1 = inst_613625;var state_613657__$1 = (function (){var statearr_613678 = state_613657;(statearr_613678[8] = inst_613615__$1);
(statearr_613678[9] = inst_613614__$1);
(statearr_613678[10] = inst_613616__$1);
(statearr_613678[11] = inst_613617__$1);
(statearr_613678[14] = inst_613624);
return statearr_613678;
})();var statearr_613679_613708 = state_613657__$1;(statearr_613679_613708[2] = null);
(statearr_613679_613708[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 14))
{var inst_613628 = (state_613657[13]);var inst_613630 = cljs.core.chunked_seq_QMARK_(inst_613628);var state_613657__$1 = state_613657;if(inst_613630)
{var statearr_613680_613709 = state_613657__$1;(statearr_613680_613709[1] = 17);
} else
{var statearr_613681_613710 = state_613657__$1;(statearr_613681_613710[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 15))
{var state_613657__$1 = state_613657;var statearr_613682_613711 = state_613657__$1;(statearr_613682_613711[2] = null);
(statearr_613682_613711[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 16))
{var inst_613646 = (state_613657[2]);var state_613657__$1 = state_613657;var statearr_613683_613712 = state_613657__$1;(statearr_613683_613712[2] = inst_613646);
(statearr_613683_613712[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 17))
{var inst_613628 = (state_613657[13]);var inst_613632 = cljs.core.chunk_first(inst_613628);var inst_613633 = cljs.core.chunk_rest(inst_613628);var inst_613634 = cljs.core.count(inst_613632);var inst_613614 = inst_613633;var inst_613615 = inst_613632;var inst_613616 = inst_613634;var inst_613617 = 0;var state_613657__$1 = (function (){var statearr_613684 = state_613657;(statearr_613684[8] = inst_613615);
(statearr_613684[9] = inst_613614);
(statearr_613684[10] = inst_613616);
(statearr_613684[11] = inst_613617);
return statearr_613684;
})();var statearr_613685_613713 = state_613657__$1;(statearr_613685_613713[2] = null);
(statearr_613685_613713[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 18))
{var inst_613628 = (state_613657[13]);var inst_613637 = cljs.core.first(inst_613628);var state_613657__$1 = state_613657;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_613657__$1,20,out,inst_613637);
} else
{if((state_val_613658 === 19))
{var inst_613643 = (state_613657[2]);var state_613657__$1 = state_613657;var statearr_613686_613714 = state_613657__$1;(statearr_613686_613714[2] = inst_613643);
(statearr_613686_613714[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613658 === 20))
{var inst_613628 = (state_613657[13]);var inst_613639 = (state_613657[2]);var inst_613640 = cljs.core.next(inst_613628);var inst_613614 = inst_613640;var inst_613615 = null;var inst_613616 = 0;var inst_613617 = 0;var state_613657__$1 = (function (){var statearr_613687 = state_613657;(statearr_613687[8] = inst_613615);
(statearr_613687[9] = inst_613614);
(statearr_613687[15] = inst_613639);
(statearr_613687[10] = inst_613616);
(statearr_613687[11] = inst_613617);
return statearr_613687;
})();var statearr_613688_613715 = state_613657__$1;(statearr_613688_613715[2] = null);
(statearr_613688_613715[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_613692 = (new Array(16));(statearr_613692[0] = state_machine__10214__auto__);
(statearr_613692[1] = 1);
return statearr_613692;
});
var state_machine__10214__auto____1 = (function (state_613657){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_613657);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e613693){if((e613693 instanceof Object))
{var ex__10217__auto__ = e613693;var statearr_613694_613716 = state_613657;(statearr_613694_613716[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_613657);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e613693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__613717 = state_613657;
state_613657 = G__613717;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_613657){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_613657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_613695 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_613695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_613695;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___613798 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_613777){var state_val_613778 = (state_613777[1]);if((state_val_613778 === 1))
{var state_613777__$1 = state_613777;var statearr_613779_613799 = state_613777__$1;(statearr_613779_613799[2] = null);
(statearr_613779_613799[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 2))
{var state_613777__$1 = state_613777;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_613777__$1,4,from);
} else
{if((state_val_613778 === 3))
{var inst_613775 = (state_613777[2]);var state_613777__$1 = state_613777;return cljs.core.async.impl.ioc_helpers.return_chan(state_613777__$1,inst_613775);
} else
{if((state_val_613778 === 4))
{var inst_613760 = (state_613777[7]);var inst_613760__$1 = (state_613777[2]);var inst_613761 = (inst_613760__$1 == null);var state_613777__$1 = (function (){var statearr_613780 = state_613777;(statearr_613780[7] = inst_613760__$1);
return statearr_613780;
})();if(cljs.core.truth_(inst_613761))
{var statearr_613781_613800 = state_613777__$1;(statearr_613781_613800[1] = 5);
} else
{var statearr_613782_613801 = state_613777__$1;(statearr_613782_613801[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 5))
{var state_613777__$1 = state_613777;if(cljs.core.truth_(close_QMARK_))
{var statearr_613783_613802 = state_613777__$1;(statearr_613783_613802[1] = 8);
} else
{var statearr_613784_613803 = state_613777__$1;(statearr_613784_613803[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 6))
{var inst_613760 = (state_613777[7]);var state_613777__$1 = state_613777;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_613777__$1,11,to,inst_613760);
} else
{if((state_val_613778 === 7))
{var inst_613773 = (state_613777[2]);var state_613777__$1 = state_613777;var statearr_613785_613804 = state_613777__$1;(statearr_613785_613804[2] = inst_613773);
(statearr_613785_613804[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 8))
{var inst_613764 = cljs.core.async.close_BANG_(to);var state_613777__$1 = state_613777;var statearr_613786_613805 = state_613777__$1;(statearr_613786_613805[2] = inst_613764);
(statearr_613786_613805[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 9))
{var state_613777__$1 = state_613777;var statearr_613787_613806 = state_613777__$1;(statearr_613787_613806[2] = null);
(statearr_613787_613806[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 10))
{var inst_613767 = (state_613777[2]);var state_613777__$1 = state_613777;var statearr_613788_613807 = state_613777__$1;(statearr_613788_613807[2] = inst_613767);
(statearr_613788_613807[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613778 === 11))
{var inst_613770 = (state_613777[2]);var state_613777__$1 = (function (){var statearr_613789 = state_613777;(statearr_613789[8] = inst_613770);
return statearr_613789;
})();var statearr_613790_613808 = state_613777__$1;(statearr_613790_613808[2] = null);
(statearr_613790_613808[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_613794 = (new Array(9));(statearr_613794[0] = state_machine__10214__auto__);
(statearr_613794[1] = 1);
return statearr_613794;
});
var state_machine__10214__auto____1 = (function (state_613777){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_613777);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e613795){if((e613795 instanceof Object))
{var ex__10217__auto__ = e613795;var statearr_613796_613809 = state_613777;(statearr_613796_613809[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_613777);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e613795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__613810 = state_613777;
state_613777 = G__613810;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_613777){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_613777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_613797 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_613797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___613798);
return statearr_613797;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___613897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_613875){var state_val_613876 = (state_613875[1]);if((state_val_613876 === 1))
{var state_613875__$1 = state_613875;var statearr_613877_613898 = state_613875__$1;(statearr_613877_613898[2] = null);
(statearr_613877_613898[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 2))
{var state_613875__$1 = state_613875;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_613875__$1,4,ch);
} else
{if((state_val_613876 === 3))
{var inst_613873 = (state_613875[2]);var state_613875__$1 = state_613875;return cljs.core.async.impl.ioc_helpers.return_chan(state_613875__$1,inst_613873);
} else
{if((state_val_613876 === 4))
{var inst_613856 = (state_613875[7]);var inst_613856__$1 = (state_613875[2]);var inst_613857 = (inst_613856__$1 == null);var state_613875__$1 = (function (){var statearr_613878 = state_613875;(statearr_613878[7] = inst_613856__$1);
return statearr_613878;
})();if(cljs.core.truth_(inst_613857))
{var statearr_613879_613899 = state_613875__$1;(statearr_613879_613899[1] = 5);
} else
{var statearr_613880_613900 = state_613875__$1;(statearr_613880_613900[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 5))
{var inst_613859 = cljs.core.async.close_BANG_(tc);var inst_613860 = cljs.core.async.close_BANG_(fc);var state_613875__$1 = (function (){var statearr_613881 = state_613875;(statearr_613881[8] = inst_613859);
return statearr_613881;
})();var statearr_613882_613901 = state_613875__$1;(statearr_613882_613901[2] = inst_613860);
(statearr_613882_613901[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 6))
{var inst_613856 = (state_613875[7]);var inst_613862 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_613856) : p.call(null,inst_613856));var state_613875__$1 = state_613875;if(cljs.core.truth_(inst_613862))
{var statearr_613883_613902 = state_613875__$1;(statearr_613883_613902[1] = 9);
} else
{var statearr_613884_613903 = state_613875__$1;(statearr_613884_613903[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 7))
{var inst_613871 = (state_613875[2]);var state_613875__$1 = state_613875;var statearr_613885_613904 = state_613875__$1;(statearr_613885_613904[2] = inst_613871);
(statearr_613885_613904[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 8))
{var inst_613868 = (state_613875[2]);var state_613875__$1 = (function (){var statearr_613886 = state_613875;(statearr_613886[9] = inst_613868);
return statearr_613886;
})();var statearr_613887_613905 = state_613875__$1;(statearr_613887_613905[2] = null);
(statearr_613887_613905[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 9))
{var state_613875__$1 = state_613875;var statearr_613888_613906 = state_613875__$1;(statearr_613888_613906[2] = tc);
(statearr_613888_613906[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 10))
{var state_613875__$1 = state_613875;var statearr_613889_613907 = state_613875__$1;(statearr_613889_613907[2] = fc);
(statearr_613889_613907[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613876 === 11))
{var inst_613856 = (state_613875[7]);var inst_613866 = (state_613875[2]);var state_613875__$1 = state_613875;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_613875__$1,8,inst_613866,inst_613856);
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
var state_machine__10214__auto____0 = (function (){var statearr_613893 = (new Array(10));(statearr_613893[0] = state_machine__10214__auto__);
(statearr_613893[1] = 1);
return statearr_613893;
});
var state_machine__10214__auto____1 = (function (state_613875){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_613875);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e613894){if((e613894 instanceof Object))
{var ex__10217__auto__ = e613894;var statearr_613895_613908 = state_613875;(statearr_613895_613908[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_613875);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e613894;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__613909 = state_613875;
state_613875 = G__613909;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_613875){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_613875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_613896 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_613896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___613897);
return statearr_613896;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_613956){var state_val_613957 = (state_613956[1]);if((state_val_613957 === 7))
{var inst_613952 = (state_613956[2]);var state_613956__$1 = state_613956;var statearr_613958_613974 = state_613956__$1;(statearr_613958_613974[2] = inst_613952);
(statearr_613958_613974[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613957 === 6))
{var inst_613945 = (state_613956[7]);var inst_613942 = (state_613956[8]);var inst_613949 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_613942,inst_613945) : f.call(null,inst_613942,inst_613945));var inst_613942__$1 = inst_613949;var state_613956__$1 = (function (){var statearr_613959 = state_613956;(statearr_613959[8] = inst_613942__$1);
return statearr_613959;
})();var statearr_613960_613975 = state_613956__$1;(statearr_613960_613975[2] = null);
(statearr_613960_613975[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613957 === 5))
{var inst_613942 = (state_613956[8]);var state_613956__$1 = state_613956;var statearr_613961_613976 = state_613956__$1;(statearr_613961_613976[2] = inst_613942);
(statearr_613961_613976[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_613957 === 4))
{var inst_613945 = (state_613956[7]);var inst_613945__$1 = (state_613956[2]);var inst_613946 = (inst_613945__$1 == null);var state_613956__$1 = (function (){var statearr_613962 = state_613956;(statearr_613962[7] = inst_613945__$1);
return statearr_613962;
})();if(cljs.core.truth_(inst_613946))
{var statearr_613963_613977 = state_613956__$1;(statearr_613963_613977[1] = 5);
} else
{var statearr_613964_613978 = state_613956__$1;(statearr_613964_613978[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_613957 === 3))
{var inst_613954 = (state_613956[2]);var state_613956__$1 = state_613956;return cljs.core.async.impl.ioc_helpers.return_chan(state_613956__$1,inst_613954);
} else
{if((state_val_613957 === 2))
{var state_613956__$1 = state_613956;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_613956__$1,4,ch);
} else
{if((state_val_613957 === 1))
{var inst_613942 = init;var state_613956__$1 = (function (){var statearr_613965 = state_613956;(statearr_613965[8] = inst_613942);
return statearr_613965;
})();var statearr_613966_613979 = state_613956__$1;(statearr_613966_613979[2] = null);
(statearr_613966_613979[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_613970 = (new Array(9));(statearr_613970[0] = state_machine__10214__auto__);
(statearr_613970[1] = 1);
return statearr_613970;
});
var state_machine__10214__auto____1 = (function (state_613956){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_613956);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e613971){if((e613971 instanceof Object))
{var ex__10217__auto__ = e613971;var statearr_613972_613980 = state_613956;(statearr_613972_613980[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_613956);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e613971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__613981 = state_613956;
state_613956 = G__613981;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_613956){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_613956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_613973 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_613973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_613973;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_614043){var state_val_614044 = (state_614043[1]);if((state_val_614044 === 1))
{var inst_614023 = cljs.core.seq(coll);var inst_614024 = inst_614023;var state_614043__$1 = (function (){var statearr_614045 = state_614043;(statearr_614045[7] = inst_614024);
return statearr_614045;
})();var statearr_614046_614064 = state_614043__$1;(statearr_614046_614064[2] = null);
(statearr_614046_614064[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 2))
{var inst_614024 = (state_614043[7]);var state_614043__$1 = state_614043;if(cljs.core.truth_(inst_614024))
{var statearr_614047_614065 = state_614043__$1;(statearr_614047_614065[1] = 4);
} else
{var statearr_614048_614066 = state_614043__$1;(statearr_614048_614066[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 3))
{var inst_614041 = (state_614043[2]);var state_614043__$1 = state_614043;return cljs.core.async.impl.ioc_helpers.return_chan(state_614043__$1,inst_614041);
} else
{if((state_val_614044 === 4))
{var inst_614024 = (state_614043[7]);var inst_614027 = cljs.core.first(inst_614024);var state_614043__$1 = state_614043;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_614043__$1,7,ch,inst_614027);
} else
{if((state_val_614044 === 5))
{var state_614043__$1 = state_614043;if(cljs.core.truth_(close_QMARK_))
{var statearr_614049_614067 = state_614043__$1;(statearr_614049_614067[1] = 8);
} else
{var statearr_614050_614068 = state_614043__$1;(statearr_614050_614068[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 6))
{var inst_614039 = (state_614043[2]);var state_614043__$1 = state_614043;var statearr_614051_614069 = state_614043__$1;(statearr_614051_614069[2] = inst_614039);
(statearr_614051_614069[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 7))
{var inst_614024 = (state_614043[7]);var inst_614029 = (state_614043[2]);var inst_614030 = cljs.core.next(inst_614024);var inst_614024__$1 = inst_614030;var state_614043__$1 = (function (){var statearr_614052 = state_614043;(statearr_614052[8] = inst_614029);
(statearr_614052[7] = inst_614024__$1);
return statearr_614052;
})();var statearr_614053_614070 = state_614043__$1;(statearr_614053_614070[2] = null);
(statearr_614053_614070[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 8))
{var inst_614034 = cljs.core.async.close_BANG_(ch);var state_614043__$1 = state_614043;var statearr_614054_614071 = state_614043__$1;(statearr_614054_614071[2] = inst_614034);
(statearr_614054_614071[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 9))
{var state_614043__$1 = state_614043;var statearr_614055_614072 = state_614043__$1;(statearr_614055_614072[2] = null);
(statearr_614055_614072[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614044 === 10))
{var inst_614037 = (state_614043[2]);var state_614043__$1 = state_614043;var statearr_614056_614073 = state_614043__$1;(statearr_614056_614073[2] = inst_614037);
(statearr_614056_614073[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_614060 = (new Array(9));(statearr_614060[0] = state_machine__10214__auto__);
(statearr_614060[1] = 1);
return statearr_614060;
});
var state_machine__10214__auto____1 = (function (state_614043){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_614043);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e614061){if((e614061 instanceof Object))
{var ex__10217__auto__ = e614061;var statearr_614062_614074 = state_614043;(statearr_614062_614074[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_614043);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e614061;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__614075 = state_614043;
state_614043 = G__614075;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_614043){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_614043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_614063 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_614063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_614063;
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
cljs.core.async.Mux = (function (){var obj614077 = {};return obj614077;
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
cljs.core.async.Mult = (function (){var obj614079 = {};return obj614079;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t614294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t614294 = (function (cs,ch,mult,meta614295){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta614295 = meta614295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t614294.cljs$lang$type = true;
cljs.core.async.t614294.cljs$lang$ctorStr = "cljs.core.async/t614294";
cljs.core.async.t614294.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t614294");
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t614294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t614294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_614296){var self__ = this;
var _614296__$1 = this;return self__.meta614295;
});})(cs))
;
cljs.core.async.t614294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_614296,meta614295__$1){var self__ = this;
var _614296__$1 = this;return (new cljs.core.async.t614294(self__.cs,self__.ch,self__.mult,meta614295__$1));
});})(cs))
;
cljs.core.async.__GT_t614294 = ((function (cs){
return (function __GT_t614294(cs__$1,ch__$1,mult__$1,meta614295){return (new cljs.core.async.t614294(cs__$1,ch__$1,mult__$1,meta614295));
});})(cs))
;
}
return (new cljs.core.async.t614294(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___614508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_614426){var state_val_614427 = (state_614426[1]);if((state_val_614427 === 32))
{var inst_614375 = (state_614426[7]);var inst_614299 = (state_614426[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_614426,31,Object,null,30);var inst_614382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_614375,inst_614299,done);var state_614426__$1 = state_614426;var statearr_614428_614509 = state_614426__$1;(statearr_614428_614509[2] = inst_614382);
cljs.core.async.impl.ioc_helpers.process_exception(state_614426__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 1))
{var state_614426__$1 = state_614426;var statearr_614429_614510 = state_614426__$1;(statearr_614429_614510[2] = null);
(statearr_614429_614510[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 33))
{var inst_614388 = (state_614426[9]);var inst_614390 = cljs.core.chunked_seq_QMARK_(inst_614388);var state_614426__$1 = state_614426;if(inst_614390)
{var statearr_614430_614511 = state_614426__$1;(statearr_614430_614511[1] = 36);
} else
{var statearr_614431_614512 = state_614426__$1;(statearr_614431_614512[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 2))
{var state_614426__$1 = state_614426;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_614426__$1,4,ch);
} else
{if((state_val_614427 === 34))
{var state_614426__$1 = state_614426;var statearr_614432_614513 = state_614426__$1;(statearr_614432_614513[2] = null);
(statearr_614432_614513[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 3))
{var inst_614424 = (state_614426[2]);var state_614426__$1 = state_614426;return cljs.core.async.impl.ioc_helpers.return_chan(state_614426__$1,inst_614424);
} else
{if((state_val_614427 === 35))
{var inst_614413 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614433_614514 = state_614426__$1;(statearr_614433_614514[2] = inst_614413);
(statearr_614433_614514[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 4))
{var inst_614299 = (state_614426[8]);var inst_614299__$1 = (state_614426[2]);var inst_614300 = (inst_614299__$1 == null);var state_614426__$1 = (function (){var statearr_614434 = state_614426;(statearr_614434[8] = inst_614299__$1);
return statearr_614434;
})();if(cljs.core.truth_(inst_614300))
{var statearr_614435_614515 = state_614426__$1;(statearr_614435_614515[1] = 5);
} else
{var statearr_614436_614516 = state_614426__$1;(statearr_614436_614516[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 36))
{var inst_614388 = (state_614426[9]);var inst_614392 = cljs.core.chunk_first(inst_614388);var inst_614393 = cljs.core.chunk_rest(inst_614388);var inst_614394 = cljs.core.count(inst_614392);var inst_614367 = inst_614393;var inst_614368 = inst_614392;var inst_614369 = inst_614394;var inst_614370 = 0;var state_614426__$1 = (function (){var statearr_614437 = state_614426;(statearr_614437[10] = inst_614370);
(statearr_614437[11] = inst_614369);
(statearr_614437[12] = inst_614367);
(statearr_614437[13] = inst_614368);
return statearr_614437;
})();var statearr_614438_614517 = state_614426__$1;(statearr_614438_614517[2] = null);
(statearr_614438_614517[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 5))
{var inst_614306 = cljs.core.deref(cs);var inst_614307 = cljs.core.seq(inst_614306);var inst_614308 = inst_614307;var inst_614309 = null;var inst_614310 = 0;var inst_614311 = 0;var state_614426__$1 = (function (){var statearr_614439 = state_614426;(statearr_614439[14] = inst_614308);
(statearr_614439[15] = inst_614311);
(statearr_614439[16] = inst_614310);
(statearr_614439[17] = inst_614309);
return statearr_614439;
})();var statearr_614440_614518 = state_614426__$1;(statearr_614440_614518[2] = null);
(statearr_614440_614518[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 37))
{var inst_614388 = (state_614426[9]);var inst_614397 = cljs.core.first(inst_614388);var state_614426__$1 = (function (){var statearr_614441 = state_614426;(statearr_614441[18] = inst_614397);
return statearr_614441;
})();var statearr_614442_614519 = state_614426__$1;(statearr_614442_614519[2] = null);
(statearr_614442_614519[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 6))
{var inst_614358 = cljs.core.deref(cs);var inst_614359 = cljs.core.keys(inst_614358);var inst_614360 = cljs.core.count(inst_614359);var inst_614361 = cljs.core.reset_BANG_(dctr,inst_614360);var inst_614366 = cljs.core.seq(inst_614359);var inst_614367 = inst_614366;var inst_614368 = null;var inst_614369 = 0;var inst_614370 = 0;var state_614426__$1 = (function (){var statearr_614443 = state_614426;(statearr_614443[19] = inst_614361);
(statearr_614443[10] = inst_614370);
(statearr_614443[11] = inst_614369);
(statearr_614443[12] = inst_614367);
(statearr_614443[13] = inst_614368);
return statearr_614443;
})();var statearr_614444_614520 = state_614426__$1;(statearr_614444_614520[2] = null);
(statearr_614444_614520[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 38))
{var inst_614410 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614445_614521 = state_614426__$1;(statearr_614445_614521[2] = inst_614410);
(statearr_614445_614521[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 7))
{var inst_614422 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614446_614522 = state_614426__$1;(statearr_614446_614522[2] = inst_614422);
(statearr_614446_614522[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 39))
{var inst_614388 = (state_614426[9]);var inst_614406 = (state_614426[2]);var inst_614407 = cljs.core.next(inst_614388);var inst_614367 = inst_614407;var inst_614368 = null;var inst_614369 = 0;var inst_614370 = 0;var state_614426__$1 = (function (){var statearr_614447 = state_614426;(statearr_614447[20] = inst_614406);
(statearr_614447[10] = inst_614370);
(statearr_614447[11] = inst_614369);
(statearr_614447[12] = inst_614367);
(statearr_614447[13] = inst_614368);
return statearr_614447;
})();var statearr_614448_614523 = state_614426__$1;(statearr_614448_614523[2] = null);
(statearr_614448_614523[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 8))
{var inst_614311 = (state_614426[15]);var inst_614310 = (state_614426[16]);var inst_614313 = (inst_614311 < inst_614310);var inst_614314 = inst_614313;var state_614426__$1 = state_614426;if(cljs.core.truth_(inst_614314))
{var statearr_614449_614524 = state_614426__$1;(statearr_614449_614524[1] = 10);
} else
{var statearr_614450_614525 = state_614426__$1;(statearr_614450_614525[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 40))
{var inst_614397 = (state_614426[18]);var inst_614398 = (state_614426[2]);var inst_614399 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_614400 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_614397);var state_614426__$1 = (function (){var statearr_614451 = state_614426;(statearr_614451[21] = inst_614399);
(statearr_614451[22] = inst_614398);
return statearr_614451;
})();var statearr_614452_614526 = state_614426__$1;(statearr_614452_614526[2] = inst_614400);
cljs.core.async.impl.ioc_helpers.process_exception(state_614426__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 9))
{var inst_614356 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614453_614527 = state_614426__$1;(statearr_614453_614527[2] = inst_614356);
(statearr_614453_614527[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 41))
{var inst_614299 = (state_614426[8]);var inst_614397 = (state_614426[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_614426,40,Object,null,39);var inst_614404 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_614397,inst_614299,done);var state_614426__$1 = state_614426;var statearr_614454_614528 = state_614426__$1;(statearr_614454_614528[2] = inst_614404);
cljs.core.async.impl.ioc_helpers.process_exception(state_614426__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 10))
{var inst_614311 = (state_614426[15]);var inst_614309 = (state_614426[17]);var inst_614317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_614309,inst_614311);var inst_614318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614317,0,null);var inst_614319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614317,1,null);var state_614426__$1 = (function (){var statearr_614455 = state_614426;(statearr_614455[23] = inst_614318);
return statearr_614455;
})();if(cljs.core.truth_(inst_614319))
{var statearr_614456_614529 = state_614426__$1;(statearr_614456_614529[1] = 13);
} else
{var statearr_614457_614530 = state_614426__$1;(statearr_614457_614530[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 42))
{var inst_614419 = (state_614426[2]);var state_614426__$1 = (function (){var statearr_614458 = state_614426;(statearr_614458[24] = inst_614419);
return statearr_614458;
})();var statearr_614459_614531 = state_614426__$1;(statearr_614459_614531[2] = null);
(statearr_614459_614531[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 11))
{var inst_614308 = (state_614426[14]);var inst_614328 = (state_614426[25]);var inst_614328__$1 = cljs.core.seq(inst_614308);var state_614426__$1 = (function (){var statearr_614460 = state_614426;(statearr_614460[25] = inst_614328__$1);
return statearr_614460;
})();if(inst_614328__$1)
{var statearr_614461_614532 = state_614426__$1;(statearr_614461_614532[1] = 16);
} else
{var statearr_614462_614533 = state_614426__$1;(statearr_614462_614533[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 12))
{var inst_614354 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614463_614534 = state_614426__$1;(statearr_614463_614534[2] = inst_614354);
(statearr_614463_614534[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 13))
{var inst_614318 = (state_614426[23]);var inst_614321 = cljs.core.async.close_BANG_(inst_614318);var state_614426__$1 = state_614426;var statearr_614467_614535 = state_614426__$1;(statearr_614467_614535[2] = inst_614321);
(statearr_614467_614535[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 14))
{var state_614426__$1 = state_614426;var statearr_614468_614536 = state_614426__$1;(statearr_614468_614536[2] = null);
(statearr_614468_614536[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 15))
{var inst_614308 = (state_614426[14]);var inst_614311 = (state_614426[15]);var inst_614310 = (state_614426[16]);var inst_614309 = (state_614426[17]);var inst_614324 = (state_614426[2]);var inst_614325 = (inst_614311 + 1);var tmp614464 = inst_614308;var tmp614465 = inst_614310;var tmp614466 = inst_614309;var inst_614308__$1 = tmp614464;var inst_614309__$1 = tmp614466;var inst_614310__$1 = tmp614465;var inst_614311__$1 = inst_614325;var state_614426__$1 = (function (){var statearr_614469 = state_614426;(statearr_614469[14] = inst_614308__$1);
(statearr_614469[15] = inst_614311__$1);
(statearr_614469[16] = inst_614310__$1);
(statearr_614469[26] = inst_614324);
(statearr_614469[17] = inst_614309__$1);
return statearr_614469;
})();var statearr_614470_614537 = state_614426__$1;(statearr_614470_614537[2] = null);
(statearr_614470_614537[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 16))
{var inst_614328 = (state_614426[25]);var inst_614330 = cljs.core.chunked_seq_QMARK_(inst_614328);var state_614426__$1 = state_614426;if(inst_614330)
{var statearr_614471_614538 = state_614426__$1;(statearr_614471_614538[1] = 19);
} else
{var statearr_614472_614539 = state_614426__$1;(statearr_614472_614539[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 17))
{var state_614426__$1 = state_614426;var statearr_614473_614540 = state_614426__$1;(statearr_614473_614540[2] = null);
(statearr_614473_614540[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 18))
{var inst_614352 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614474_614541 = state_614426__$1;(statearr_614474_614541[2] = inst_614352);
(statearr_614474_614541[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 19))
{var inst_614328 = (state_614426[25]);var inst_614332 = cljs.core.chunk_first(inst_614328);var inst_614333 = cljs.core.chunk_rest(inst_614328);var inst_614334 = cljs.core.count(inst_614332);var inst_614308 = inst_614333;var inst_614309 = inst_614332;var inst_614310 = inst_614334;var inst_614311 = 0;var state_614426__$1 = (function (){var statearr_614475 = state_614426;(statearr_614475[14] = inst_614308);
(statearr_614475[15] = inst_614311);
(statearr_614475[16] = inst_614310);
(statearr_614475[17] = inst_614309);
return statearr_614475;
})();var statearr_614476_614542 = state_614426__$1;(statearr_614476_614542[2] = null);
(statearr_614476_614542[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 20))
{var inst_614328 = (state_614426[25]);var inst_614338 = cljs.core.first(inst_614328);var inst_614339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614338,0,null);var inst_614340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614338,1,null);var state_614426__$1 = (function (){var statearr_614477 = state_614426;(statearr_614477[27] = inst_614339);
return statearr_614477;
})();if(cljs.core.truth_(inst_614340))
{var statearr_614478_614543 = state_614426__$1;(statearr_614478_614543[1] = 22);
} else
{var statearr_614479_614544 = state_614426__$1;(statearr_614479_614544[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 21))
{var inst_614349 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614480_614545 = state_614426__$1;(statearr_614480_614545[2] = inst_614349);
(statearr_614480_614545[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 22))
{var inst_614339 = (state_614426[27]);var inst_614342 = cljs.core.async.close_BANG_(inst_614339);var state_614426__$1 = state_614426;var statearr_614481_614546 = state_614426__$1;(statearr_614481_614546[2] = inst_614342);
(statearr_614481_614546[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 23))
{var state_614426__$1 = state_614426;var statearr_614482_614547 = state_614426__$1;(statearr_614482_614547[2] = null);
(statearr_614482_614547[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 24))
{var inst_614328 = (state_614426[25]);var inst_614345 = (state_614426[2]);var inst_614346 = cljs.core.next(inst_614328);var inst_614308 = inst_614346;var inst_614309 = null;var inst_614310 = 0;var inst_614311 = 0;var state_614426__$1 = (function (){var statearr_614483 = state_614426;(statearr_614483[14] = inst_614308);
(statearr_614483[28] = inst_614345);
(statearr_614483[15] = inst_614311);
(statearr_614483[16] = inst_614310);
(statearr_614483[17] = inst_614309);
return statearr_614483;
})();var statearr_614484_614548 = state_614426__$1;(statearr_614484_614548[2] = null);
(statearr_614484_614548[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 25))
{var inst_614370 = (state_614426[10]);var inst_614369 = (state_614426[11]);var inst_614372 = (inst_614370 < inst_614369);var inst_614373 = inst_614372;var state_614426__$1 = state_614426;if(cljs.core.truth_(inst_614373))
{var statearr_614485_614549 = state_614426__$1;(statearr_614485_614549[1] = 27);
} else
{var statearr_614486_614550 = state_614426__$1;(statearr_614486_614550[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 26))
{var inst_614417 = (state_614426[2]);var state_614426__$1 = (function (){var statearr_614487 = state_614426;(statearr_614487[29] = inst_614417);
return statearr_614487;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_614426__$1,42,dchan);
} else
{if((state_val_614427 === 27))
{var inst_614370 = (state_614426[10]);var inst_614368 = (state_614426[13]);var inst_614375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_614368,inst_614370);var state_614426__$1 = (function (){var statearr_614488 = state_614426;(statearr_614488[7] = inst_614375);
return statearr_614488;
})();var statearr_614489_614551 = state_614426__$1;(statearr_614489_614551[2] = null);
(statearr_614489_614551[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 28))
{var inst_614388 = (state_614426[9]);var inst_614367 = (state_614426[12]);var inst_614388__$1 = cljs.core.seq(inst_614367);var state_614426__$1 = (function (){var statearr_614493 = state_614426;(statearr_614493[9] = inst_614388__$1);
return statearr_614493;
})();if(inst_614388__$1)
{var statearr_614494_614552 = state_614426__$1;(statearr_614494_614552[1] = 33);
} else
{var statearr_614495_614553 = state_614426__$1;(statearr_614495_614553[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 29))
{var inst_614415 = (state_614426[2]);var state_614426__$1 = state_614426;var statearr_614496_614554 = state_614426__$1;(statearr_614496_614554[2] = inst_614415);
(statearr_614496_614554[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 30))
{var inst_614370 = (state_614426[10]);var inst_614369 = (state_614426[11]);var inst_614367 = (state_614426[12]);var inst_614368 = (state_614426[13]);var inst_614384 = (state_614426[2]);var inst_614385 = (inst_614370 + 1);var tmp614490 = inst_614369;var tmp614491 = inst_614367;var tmp614492 = inst_614368;var inst_614367__$1 = tmp614491;var inst_614368__$1 = tmp614492;var inst_614369__$1 = tmp614490;var inst_614370__$1 = inst_614385;var state_614426__$1 = (function (){var statearr_614497 = state_614426;(statearr_614497[30] = inst_614384);
(statearr_614497[10] = inst_614370__$1);
(statearr_614497[11] = inst_614369__$1);
(statearr_614497[12] = inst_614367__$1);
(statearr_614497[13] = inst_614368__$1);
return statearr_614497;
})();var statearr_614498_614555 = state_614426__$1;(statearr_614498_614555[2] = null);
(statearr_614498_614555[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614427 === 31))
{var inst_614375 = (state_614426[7]);var inst_614376 = (state_614426[2]);var inst_614377 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_614378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_614375);var state_614426__$1 = (function (){var statearr_614499 = state_614426;(statearr_614499[31] = inst_614377);
(statearr_614499[32] = inst_614376);
return statearr_614499;
})();var statearr_614500_614556 = state_614426__$1;(statearr_614500_614556[2] = inst_614378);
cljs.core.async.impl.ioc_helpers.process_exception(state_614426__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_614504 = (new Array(33));(statearr_614504[0] = state_machine__10214__auto__);
(statearr_614504[1] = 1);
return statearr_614504;
});
var state_machine__10214__auto____1 = (function (state_614426){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_614426);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e614505){if((e614505 instanceof Object))
{var ex__10217__auto__ = e614505;var statearr_614506_614557 = state_614426;(statearr_614506_614557[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_614426);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e614505;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__614558 = state_614426;
state_614426 = G__614558;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_614426){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_614426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_614507 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_614507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___614508);
return statearr_614507;
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
cljs.core.async.Mix = (function (){var obj614560 = {};return obj614560;
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
;var m = (function (){if(typeof cljs.core.async.t614670 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t614670 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta614671){
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
this.meta614671 = meta614671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t614670.cljs$lang$type = true;
cljs.core.async.t614670.cljs$lang$ctorStr = "cljs.core.async/t614670";
cljs.core.async.t614670.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t614670");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t614670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_614672){var self__ = this;
var _614672__$1 = this;return self__.meta614671;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t614670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_614672,meta614671__$1){var self__ = this;
var _614672__$1 = this;return (new cljs.core.async.t614670(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta614671__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t614670 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t614670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta614671){return (new cljs.core.async.t614670(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta614671));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t614670(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___614779 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_614737){var state_val_614738 = (state_614737[1]);if((state_val_614738 === 1))
{var inst_614676 = (state_614737[7]);var inst_614676__$1 = calc_state();var inst_614677 = cljs.core.seq_QMARK_(inst_614676__$1);var state_614737__$1 = (function (){var statearr_614739 = state_614737;(statearr_614739[7] = inst_614676__$1);
return statearr_614739;
})();if(inst_614677)
{var statearr_614740_614780 = state_614737__$1;(statearr_614740_614780[1] = 2);
} else
{var statearr_614741_614781 = state_614737__$1;(statearr_614741_614781[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 2))
{var inst_614676 = (state_614737[7]);var inst_614679 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_614676);var state_614737__$1 = state_614737;var statearr_614742_614782 = state_614737__$1;(statearr_614742_614782[2] = inst_614679);
(statearr_614742_614782[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 3))
{var inst_614676 = (state_614737[7]);var state_614737__$1 = state_614737;var statearr_614743_614783 = state_614737__$1;(statearr_614743_614783[2] = inst_614676);
(statearr_614743_614783[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 4))
{var inst_614676 = (state_614737[7]);var inst_614682 = (state_614737[2]);var inst_614683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614682,cljs.core.constant$keyword$309);var inst_614684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614682,cljs.core.constant$keyword$308);var inst_614685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614682,cljs.core.constant$keyword$307);var inst_614686 = inst_614676;var state_614737__$1 = (function (){var statearr_614744 = state_614737;(statearr_614744[8] = inst_614686);
(statearr_614744[9] = inst_614683);
(statearr_614744[10] = inst_614685);
(statearr_614744[11] = inst_614684);
return statearr_614744;
})();var statearr_614745_614784 = state_614737__$1;(statearr_614745_614784[2] = null);
(statearr_614745_614784[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 5))
{var inst_614686 = (state_614737[8]);var inst_614689 = cljs.core.seq_QMARK_(inst_614686);var state_614737__$1 = state_614737;if(inst_614689)
{var statearr_614746_614785 = state_614737__$1;(statearr_614746_614785[1] = 7);
} else
{var statearr_614747_614786 = state_614737__$1;(statearr_614747_614786[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 6))
{var inst_614735 = (state_614737[2]);var state_614737__$1 = state_614737;return cljs.core.async.impl.ioc_helpers.return_chan(state_614737__$1,inst_614735);
} else
{if((state_val_614738 === 7))
{var inst_614686 = (state_614737[8]);var inst_614691 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_614686);var state_614737__$1 = state_614737;var statearr_614748_614787 = state_614737__$1;(statearr_614748_614787[2] = inst_614691);
(statearr_614748_614787[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 8))
{var inst_614686 = (state_614737[8]);var state_614737__$1 = state_614737;var statearr_614749_614788 = state_614737__$1;(statearr_614749_614788[2] = inst_614686);
(statearr_614749_614788[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 9))
{var inst_614694 = (state_614737[12]);var inst_614694__$1 = (state_614737[2]);var inst_614695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614694__$1,cljs.core.constant$keyword$309);var inst_614696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614694__$1,cljs.core.constant$keyword$308);var inst_614697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614694__$1,cljs.core.constant$keyword$307);var state_614737__$1 = (function (){var statearr_614750 = state_614737;(statearr_614750[13] = inst_614697);
(statearr_614750[12] = inst_614694__$1);
(statearr_614750[14] = inst_614696);
return statearr_614750;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_614737__$1,10,inst_614695);
} else
{if((state_val_614738 === 10))
{var inst_614702 = (state_614737[15]);var inst_614701 = (state_614737[16]);var inst_614700 = (state_614737[2]);var inst_614701__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614700,0,null);var inst_614702__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_614700,1,null);var inst_614703 = (inst_614701__$1 == null);var inst_614704 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_614702__$1,change);var inst_614705 = (inst_614703) || (inst_614704);var state_614737__$1 = (function (){var statearr_614751 = state_614737;(statearr_614751[15] = inst_614702__$1);
(statearr_614751[16] = inst_614701__$1);
return statearr_614751;
})();if(cljs.core.truth_(inst_614705))
{var statearr_614752_614789 = state_614737__$1;(statearr_614752_614789[1] = 11);
} else
{var statearr_614753_614790 = state_614737__$1;(statearr_614753_614790[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 11))
{var inst_614701 = (state_614737[16]);var inst_614707 = (inst_614701 == null);var state_614737__$1 = state_614737;if(cljs.core.truth_(inst_614707))
{var statearr_614754_614791 = state_614737__$1;(statearr_614754_614791[1] = 14);
} else
{var statearr_614755_614792 = state_614737__$1;(statearr_614755_614792[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 12))
{var inst_614697 = (state_614737[13]);var inst_614702 = (state_614737[15]);var inst_614716 = (state_614737[17]);var inst_614716__$1 = (inst_614697.cljs$core$IFn$_invoke$arity$1 ? inst_614697.cljs$core$IFn$_invoke$arity$1(inst_614702) : inst_614697.call(null,inst_614702));var state_614737__$1 = (function (){var statearr_614756 = state_614737;(statearr_614756[17] = inst_614716__$1);
return statearr_614756;
})();if(cljs.core.truth_(inst_614716__$1))
{var statearr_614757_614793 = state_614737__$1;(statearr_614757_614793[1] = 17);
} else
{var statearr_614758_614794 = state_614737__$1;(statearr_614758_614794[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 13))
{var inst_614733 = (state_614737[2]);var state_614737__$1 = state_614737;var statearr_614759_614795 = state_614737__$1;(statearr_614759_614795[2] = inst_614733);
(statearr_614759_614795[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 14))
{var inst_614702 = (state_614737[15]);var inst_614709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_614702);var state_614737__$1 = state_614737;var statearr_614760_614796 = state_614737__$1;(statearr_614760_614796[2] = inst_614709);
(statearr_614760_614796[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 15))
{var state_614737__$1 = state_614737;var statearr_614761_614797 = state_614737__$1;(statearr_614761_614797[2] = null);
(statearr_614761_614797[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 16))
{var inst_614712 = (state_614737[2]);var inst_614713 = calc_state();var inst_614686 = inst_614713;var state_614737__$1 = (function (){var statearr_614762 = state_614737;(statearr_614762[8] = inst_614686);
(statearr_614762[18] = inst_614712);
return statearr_614762;
})();var statearr_614763_614798 = state_614737__$1;(statearr_614763_614798[2] = null);
(statearr_614763_614798[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 17))
{var inst_614716 = (state_614737[17]);var state_614737__$1 = state_614737;var statearr_614764_614799 = state_614737__$1;(statearr_614764_614799[2] = inst_614716);
(statearr_614764_614799[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 18))
{var inst_614697 = (state_614737[13]);var inst_614702 = (state_614737[15]);var inst_614696 = (state_614737[14]);var inst_614719 = cljs.core.empty_QMARK_(inst_614697);var inst_614720 = (inst_614696.cljs$core$IFn$_invoke$arity$1 ? inst_614696.cljs$core$IFn$_invoke$arity$1(inst_614702) : inst_614696.call(null,inst_614702));var inst_614721 = cljs.core.not(inst_614720);var inst_614722 = (inst_614719) && (inst_614721);var state_614737__$1 = state_614737;var statearr_614765_614800 = state_614737__$1;(statearr_614765_614800[2] = inst_614722);
(statearr_614765_614800[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 19))
{var inst_614724 = (state_614737[2]);var state_614737__$1 = state_614737;if(cljs.core.truth_(inst_614724))
{var statearr_614766_614801 = state_614737__$1;(statearr_614766_614801[1] = 20);
} else
{var statearr_614767_614802 = state_614737__$1;(statearr_614767_614802[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 20))
{var inst_614701 = (state_614737[16]);var state_614737__$1 = state_614737;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_614737__$1,23,out,inst_614701);
} else
{if((state_val_614738 === 21))
{var state_614737__$1 = state_614737;var statearr_614768_614803 = state_614737__$1;(statearr_614768_614803[2] = null);
(statearr_614768_614803[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 22))
{var inst_614694 = (state_614737[12]);var inst_614730 = (state_614737[2]);var inst_614686 = inst_614694;var state_614737__$1 = (function (){var statearr_614769 = state_614737;(statearr_614769[19] = inst_614730);
(statearr_614769[8] = inst_614686);
return statearr_614769;
})();var statearr_614770_614804 = state_614737__$1;(statearr_614770_614804[2] = null);
(statearr_614770_614804[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_614738 === 23))
{var inst_614727 = (state_614737[2]);var state_614737__$1 = state_614737;var statearr_614771_614805 = state_614737__$1;(statearr_614771_614805[2] = inst_614727);
(statearr_614771_614805[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_614775 = (new Array(20));(statearr_614775[0] = state_machine__10214__auto__);
(statearr_614775[1] = 1);
return statearr_614775;
});
var state_machine__10214__auto____1 = (function (state_614737){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_614737);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e614776){if((e614776 instanceof Object))
{var ex__10217__auto__ = e614776;var statearr_614777_614806 = state_614737;(statearr_614777_614806[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_614737);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e614776;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__614807 = state_614737;
state_614737 = G__614807;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_614737){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_614737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_614778 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_614778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___614779);
return statearr_614778;
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
cljs.core.async.Pub = (function (){var obj614809 = {};return obj614809;
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
return (function (p1__614810_SHARP_){if(cljs.core.truth_((p1__614810_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__614810_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__614810_SHARP_.call(null,topic))))
{return p1__614810_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__614810_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t614935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t614935 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta614936){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta614936 = meta614936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t614935.cljs$lang$type = true;
cljs.core.async.t614935.cljs$lang$ctorStr = "cljs.core.async/t614935";
cljs.core.async.t614935.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t614935");
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t614935.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t614935.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_614937){var self__ = this;
var _614937__$1 = this;return self__.meta614936;
});})(mults,ensure_mult))
;
cljs.core.async.t614935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_614937,meta614936__$1){var self__ = this;
var _614937__$1 = this;return (new cljs.core.async.t614935(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta614936__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t614935 = ((function (mults,ensure_mult){
return (function __GT_t614935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta614936){return (new cljs.core.async.t614935(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta614936));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t614935(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___615059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615011){var state_val_615012 = (state_615011[1]);if((state_val_615012 === 1))
{var state_615011__$1 = state_615011;var statearr_615013_615060 = state_615011__$1;(statearr_615013_615060[2] = null);
(statearr_615013_615060[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 2))
{var state_615011__$1 = state_615011;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615011__$1,4,ch);
} else
{if((state_val_615012 === 3))
{var inst_615009 = (state_615011[2]);var state_615011__$1 = state_615011;return cljs.core.async.impl.ioc_helpers.return_chan(state_615011__$1,inst_615009);
} else
{if((state_val_615012 === 4))
{var inst_614940 = (state_615011[7]);var inst_614940__$1 = (state_615011[2]);var inst_614941 = (inst_614940__$1 == null);var state_615011__$1 = (function (){var statearr_615014 = state_615011;(statearr_615014[7] = inst_614940__$1);
return statearr_615014;
})();if(cljs.core.truth_(inst_614941))
{var statearr_615015_615061 = state_615011__$1;(statearr_615015_615061[1] = 5);
} else
{var statearr_615016_615062 = state_615011__$1;(statearr_615016_615062[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 5))
{var inst_614947 = cljs.core.deref(mults);var inst_614948 = cljs.core.vals(inst_614947);var inst_614949 = cljs.core.seq(inst_614948);var inst_614950 = inst_614949;var inst_614951 = null;var inst_614952 = 0;var inst_614953 = 0;var state_615011__$1 = (function (){var statearr_615017 = state_615011;(statearr_615017[8] = inst_614952);
(statearr_615017[9] = inst_614953);
(statearr_615017[10] = inst_614950);
(statearr_615017[11] = inst_614951);
return statearr_615017;
})();var statearr_615018_615063 = state_615011__$1;(statearr_615018_615063[2] = null);
(statearr_615018_615063[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 6))
{var inst_614988 = (state_615011[12]);var inst_614940 = (state_615011[7]);var inst_614990 = (state_615011[13]);var inst_614988__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_614940) : topic_fn.call(null,inst_614940));var inst_614989 = cljs.core.deref(mults);var inst_614990__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_614989,inst_614988__$1);var state_615011__$1 = (function (){var statearr_615019 = state_615011;(statearr_615019[12] = inst_614988__$1);
(statearr_615019[13] = inst_614990__$1);
return statearr_615019;
})();if(cljs.core.truth_(inst_614990__$1))
{var statearr_615020_615064 = state_615011__$1;(statearr_615020_615064[1] = 19);
} else
{var statearr_615021_615065 = state_615011__$1;(statearr_615021_615065[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 7))
{var inst_615007 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615022_615066 = state_615011__$1;(statearr_615022_615066[2] = inst_615007);
(statearr_615022_615066[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 8))
{var inst_614952 = (state_615011[8]);var inst_614953 = (state_615011[9]);var inst_614955 = (inst_614953 < inst_614952);var inst_614956 = inst_614955;var state_615011__$1 = state_615011;if(cljs.core.truth_(inst_614956))
{var statearr_615026_615067 = state_615011__$1;(statearr_615026_615067[1] = 10);
} else
{var statearr_615027_615068 = state_615011__$1;(statearr_615027_615068[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 9))
{var inst_614986 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615028_615069 = state_615011__$1;(statearr_615028_615069[2] = inst_614986);
(statearr_615028_615069[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 10))
{var inst_614952 = (state_615011[8]);var inst_614953 = (state_615011[9]);var inst_614950 = (state_615011[10]);var inst_614951 = (state_615011[11]);var inst_614958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_614951,inst_614953);var inst_614959 = cljs.core.async.muxch_STAR_(inst_614958);var inst_614960 = cljs.core.async.close_BANG_(inst_614959);var inst_614961 = (inst_614953 + 1);var tmp615023 = inst_614952;var tmp615024 = inst_614950;var tmp615025 = inst_614951;var inst_614950__$1 = tmp615024;var inst_614951__$1 = tmp615025;var inst_614952__$1 = tmp615023;var inst_614953__$1 = inst_614961;var state_615011__$1 = (function (){var statearr_615029 = state_615011;(statearr_615029[8] = inst_614952__$1);
(statearr_615029[9] = inst_614953__$1);
(statearr_615029[10] = inst_614950__$1);
(statearr_615029[11] = inst_614951__$1);
(statearr_615029[14] = inst_614960);
return statearr_615029;
})();var statearr_615030_615070 = state_615011__$1;(statearr_615030_615070[2] = null);
(statearr_615030_615070[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 11))
{var inst_614950 = (state_615011[10]);var inst_614964 = (state_615011[15]);var inst_614964__$1 = cljs.core.seq(inst_614950);var state_615011__$1 = (function (){var statearr_615031 = state_615011;(statearr_615031[15] = inst_614964__$1);
return statearr_615031;
})();if(inst_614964__$1)
{var statearr_615032_615071 = state_615011__$1;(statearr_615032_615071[1] = 13);
} else
{var statearr_615033_615072 = state_615011__$1;(statearr_615033_615072[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 12))
{var inst_614984 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615034_615073 = state_615011__$1;(statearr_615034_615073[2] = inst_614984);
(statearr_615034_615073[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 13))
{var inst_614964 = (state_615011[15]);var inst_614966 = cljs.core.chunked_seq_QMARK_(inst_614964);var state_615011__$1 = state_615011;if(inst_614966)
{var statearr_615035_615074 = state_615011__$1;(statearr_615035_615074[1] = 16);
} else
{var statearr_615036_615075 = state_615011__$1;(statearr_615036_615075[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 14))
{var state_615011__$1 = state_615011;var statearr_615037_615076 = state_615011__$1;(statearr_615037_615076[2] = null);
(statearr_615037_615076[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 15))
{var inst_614982 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615038_615077 = state_615011__$1;(statearr_615038_615077[2] = inst_614982);
(statearr_615038_615077[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 16))
{var inst_614964 = (state_615011[15]);var inst_614968 = cljs.core.chunk_first(inst_614964);var inst_614969 = cljs.core.chunk_rest(inst_614964);var inst_614970 = cljs.core.count(inst_614968);var inst_614950 = inst_614969;var inst_614951 = inst_614968;var inst_614952 = inst_614970;var inst_614953 = 0;var state_615011__$1 = (function (){var statearr_615039 = state_615011;(statearr_615039[8] = inst_614952);
(statearr_615039[9] = inst_614953);
(statearr_615039[10] = inst_614950);
(statearr_615039[11] = inst_614951);
return statearr_615039;
})();var statearr_615040_615078 = state_615011__$1;(statearr_615040_615078[2] = null);
(statearr_615040_615078[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 17))
{var inst_614964 = (state_615011[15]);var inst_614973 = cljs.core.first(inst_614964);var inst_614974 = cljs.core.async.muxch_STAR_(inst_614973);var inst_614975 = cljs.core.async.close_BANG_(inst_614974);var inst_614976 = cljs.core.next(inst_614964);var inst_614950 = inst_614976;var inst_614951 = null;var inst_614952 = 0;var inst_614953 = 0;var state_615011__$1 = (function (){var statearr_615041 = state_615011;(statearr_615041[16] = inst_614975);
(statearr_615041[8] = inst_614952);
(statearr_615041[9] = inst_614953);
(statearr_615041[10] = inst_614950);
(statearr_615041[11] = inst_614951);
return statearr_615041;
})();var statearr_615042_615079 = state_615011__$1;(statearr_615042_615079[2] = null);
(statearr_615042_615079[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 18))
{var inst_614979 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615043_615080 = state_615011__$1;(statearr_615043_615080[2] = inst_614979);
(statearr_615043_615080[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 19))
{var state_615011__$1 = state_615011;var statearr_615044_615081 = state_615011__$1;(statearr_615044_615081[2] = null);
(statearr_615044_615081[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 20))
{var state_615011__$1 = state_615011;var statearr_615045_615082 = state_615011__$1;(statearr_615045_615082[2] = null);
(statearr_615045_615082[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 21))
{var inst_615004 = (state_615011[2]);var state_615011__$1 = (function (){var statearr_615046 = state_615011;(statearr_615046[17] = inst_615004);
return statearr_615046;
})();var statearr_615047_615083 = state_615011__$1;(statearr_615047_615083[2] = null);
(statearr_615047_615083[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 22))
{var inst_615001 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615048_615084 = state_615011__$1;(statearr_615048_615084[2] = inst_615001);
(statearr_615048_615084[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 23))
{var inst_614988 = (state_615011[12]);var inst_614992 = (state_615011[2]);var inst_614993 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_614988);var state_615011__$1 = (function (){var statearr_615049 = state_615011;(statearr_615049[18] = inst_614992);
return statearr_615049;
})();var statearr_615050_615085 = state_615011__$1;(statearr_615050_615085[2] = inst_614993);
cljs.core.async.impl.ioc_helpers.process_exception(state_615011__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615012 === 24))
{var inst_614940 = (state_615011[7]);var inst_614990 = (state_615011[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_615011,23,Object,null,22);var inst_614997 = cljs.core.async.muxch_STAR_(inst_614990);var state_615011__$1 = state_615011;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615011__$1,25,inst_614997,inst_614940);
} else
{if((state_val_615012 === 25))
{var inst_614999 = (state_615011[2]);var state_615011__$1 = state_615011;var statearr_615051_615086 = state_615011__$1;(statearr_615051_615086[2] = inst_614999);
cljs.core.async.impl.ioc_helpers.process_exception(state_615011__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_615055 = (new Array(19));(statearr_615055[0] = state_machine__10214__auto__);
(statearr_615055[1] = 1);
return statearr_615055;
});
var state_machine__10214__auto____1 = (function (state_615011){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615011);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615056){if((e615056 instanceof Object))
{var ex__10217__auto__ = e615056;var statearr_615057_615087 = state_615011;(statearr_615057_615087[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615011);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615088 = state_615011;
state_615011 = G__615088;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615011){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615058 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615059);
return statearr_615058;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___615225 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615195){var state_val_615196 = (state_615195[1]);if((state_val_615196 === 1))
{var state_615195__$1 = state_615195;var statearr_615197_615226 = state_615195__$1;(statearr_615197_615226[2] = null);
(statearr_615197_615226[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 2))
{var inst_615158 = cljs.core.reset_BANG_(dctr,cnt);var inst_615159 = 0;var state_615195__$1 = (function (){var statearr_615198 = state_615195;(statearr_615198[7] = inst_615159);
(statearr_615198[8] = inst_615158);
return statearr_615198;
})();var statearr_615199_615227 = state_615195__$1;(statearr_615199_615227[2] = null);
(statearr_615199_615227[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 3))
{var inst_615193 = (state_615195[2]);var state_615195__$1 = state_615195;return cljs.core.async.impl.ioc_helpers.return_chan(state_615195__$1,inst_615193);
} else
{if((state_val_615196 === 4))
{var inst_615159 = (state_615195[7]);var inst_615161 = (inst_615159 < cnt);var state_615195__$1 = state_615195;if(cljs.core.truth_(inst_615161))
{var statearr_615200_615228 = state_615195__$1;(statearr_615200_615228[1] = 6);
} else
{var statearr_615201_615229 = state_615195__$1;(statearr_615201_615229[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 5))
{var inst_615179 = (state_615195[2]);var state_615195__$1 = (function (){var statearr_615202 = state_615195;(statearr_615202[9] = inst_615179);
return statearr_615202;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615195__$1,12,dchan);
} else
{if((state_val_615196 === 6))
{var state_615195__$1 = state_615195;var statearr_615203_615230 = state_615195__$1;(statearr_615203_615230[2] = null);
(statearr_615203_615230[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 7))
{var state_615195__$1 = state_615195;var statearr_615204_615231 = state_615195__$1;(statearr_615204_615231[2] = null);
(statearr_615204_615231[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 8))
{var inst_615177 = (state_615195[2]);var state_615195__$1 = state_615195;var statearr_615205_615232 = state_615195__$1;(statearr_615205_615232[2] = inst_615177);
(statearr_615205_615232[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 9))
{var inst_615159 = (state_615195[7]);var inst_615172 = (state_615195[2]);var inst_615173 = (inst_615159 + 1);var inst_615159__$1 = inst_615173;var state_615195__$1 = (function (){var statearr_615206 = state_615195;(statearr_615206[10] = inst_615172);
(statearr_615206[7] = inst_615159__$1);
return statearr_615206;
})();var statearr_615207_615233 = state_615195__$1;(statearr_615207_615233[2] = null);
(statearr_615207_615233[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 10))
{var inst_615163 = (state_615195[2]);var inst_615164 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_615195__$1 = (function (){var statearr_615208 = state_615195;(statearr_615208[11] = inst_615163);
return statearr_615208;
})();var statearr_615209_615234 = state_615195__$1;(statearr_615209_615234[2] = inst_615164);
cljs.core.async.impl.ioc_helpers.process_exception(state_615195__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 11))
{var inst_615159 = (state_615195[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_615195,10,Object,null,9);var inst_615168 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_615159) : chs__$1.call(null,inst_615159));var inst_615169 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_615159) : done.call(null,inst_615159));var inst_615170 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_615168,inst_615169);var state_615195__$1 = state_615195;var statearr_615210_615235 = state_615195__$1;(statearr_615210_615235[2] = inst_615170);
cljs.core.async.impl.ioc_helpers.process_exception(state_615195__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 12))
{var inst_615181 = (state_615195[12]);var inst_615181__$1 = (state_615195[2]);var inst_615182 = cljs.core.some(cljs.core.nil_QMARK_,inst_615181__$1);var state_615195__$1 = (function (){var statearr_615211 = state_615195;(statearr_615211[12] = inst_615181__$1);
return statearr_615211;
})();if(cljs.core.truth_(inst_615182))
{var statearr_615212_615236 = state_615195__$1;(statearr_615212_615236[1] = 13);
} else
{var statearr_615213_615237 = state_615195__$1;(statearr_615213_615237[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 13))
{var inst_615184 = cljs.core.async.close_BANG_(out);var state_615195__$1 = state_615195;var statearr_615214_615238 = state_615195__$1;(statearr_615214_615238[2] = inst_615184);
(statearr_615214_615238[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 14))
{var inst_615181 = (state_615195[12]);var inst_615186 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_615181);var state_615195__$1 = state_615195;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615195__$1,16,out,inst_615186);
} else
{if((state_val_615196 === 15))
{var inst_615191 = (state_615195[2]);var state_615195__$1 = state_615195;var statearr_615215_615239 = state_615195__$1;(statearr_615215_615239[2] = inst_615191);
(statearr_615215_615239[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615196 === 16))
{var inst_615188 = (state_615195[2]);var state_615195__$1 = (function (){var statearr_615216 = state_615195;(statearr_615216[13] = inst_615188);
return statearr_615216;
})();var statearr_615217_615240 = state_615195__$1;(statearr_615217_615240[2] = null);
(statearr_615217_615240[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_615221 = (new Array(14));(statearr_615221[0] = state_machine__10214__auto__);
(statearr_615221[1] = 1);
return statearr_615221;
});
var state_machine__10214__auto____1 = (function (state_615195){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615195);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615222){if((e615222 instanceof Object))
{var ex__10217__auto__ = e615222;var statearr_615223_615241 = state_615195;(statearr_615223_615241[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615195);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615242 = state_615195;
state_615195 = G__615242;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615195){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615224 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615225);
return statearr_615224;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___615350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615326){var state_val_615327 = (state_615326[1]);if((state_val_615327 === 1))
{var inst_615297 = cljs.core.vec(chs);var inst_615298 = inst_615297;var state_615326__$1 = (function (){var statearr_615328 = state_615326;(statearr_615328[7] = inst_615298);
return statearr_615328;
})();var statearr_615329_615351 = state_615326__$1;(statearr_615329_615351[2] = null);
(statearr_615329_615351[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 2))
{var inst_615298 = (state_615326[7]);var inst_615300 = cljs.core.count(inst_615298);var inst_615301 = (inst_615300 > 0);var state_615326__$1 = state_615326;if(cljs.core.truth_(inst_615301))
{var statearr_615330_615352 = state_615326__$1;(statearr_615330_615352[1] = 4);
} else
{var statearr_615331_615353 = state_615326__$1;(statearr_615331_615353[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 3))
{var inst_615324 = (state_615326[2]);var state_615326__$1 = state_615326;return cljs.core.async.impl.ioc_helpers.return_chan(state_615326__$1,inst_615324);
} else
{if((state_val_615327 === 4))
{var inst_615298 = (state_615326[7]);var state_615326__$1 = state_615326;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_615326__$1,7,inst_615298);
} else
{if((state_val_615327 === 5))
{var inst_615320 = cljs.core.async.close_BANG_(out);var state_615326__$1 = state_615326;var statearr_615332_615354 = state_615326__$1;(statearr_615332_615354[2] = inst_615320);
(statearr_615332_615354[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 6))
{var inst_615322 = (state_615326[2]);var state_615326__$1 = state_615326;var statearr_615333_615355 = state_615326__$1;(statearr_615333_615355[2] = inst_615322);
(statearr_615333_615355[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 7))
{var inst_615305 = (state_615326[8]);var inst_615306 = (state_615326[9]);var inst_615305__$1 = (state_615326[2]);var inst_615306__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_615305__$1,0,null);var inst_615307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_615305__$1,1,null);var inst_615308 = (inst_615306__$1 == null);var state_615326__$1 = (function (){var statearr_615334 = state_615326;(statearr_615334[8] = inst_615305__$1);
(statearr_615334[10] = inst_615307);
(statearr_615334[9] = inst_615306__$1);
return statearr_615334;
})();if(cljs.core.truth_(inst_615308))
{var statearr_615335_615356 = state_615326__$1;(statearr_615335_615356[1] = 8);
} else
{var statearr_615336_615357 = state_615326__$1;(statearr_615336_615357[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 8))
{var inst_615305 = (state_615326[8]);var inst_615307 = (state_615326[10]);var inst_615306 = (state_615326[9]);var inst_615298 = (state_615326[7]);var inst_615310 = (function (){var c = inst_615307;var v = inst_615306;var vec__615303 = inst_615305;var cs = inst_615298;return ((function (c,v,vec__615303,cs,inst_615305,inst_615307,inst_615306,inst_615298,state_val_615327){
return (function (p1__615243_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__615243_SHARP_);
});
;})(c,v,vec__615303,cs,inst_615305,inst_615307,inst_615306,inst_615298,state_val_615327))
})();var inst_615311 = cljs.core.filterv(inst_615310,inst_615298);var inst_615298__$1 = inst_615311;var state_615326__$1 = (function (){var statearr_615337 = state_615326;(statearr_615337[7] = inst_615298__$1);
return statearr_615337;
})();var statearr_615338_615358 = state_615326__$1;(statearr_615338_615358[2] = null);
(statearr_615338_615358[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 9))
{var inst_615306 = (state_615326[9]);var state_615326__$1 = state_615326;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615326__$1,11,out,inst_615306);
} else
{if((state_val_615327 === 10))
{var inst_615318 = (state_615326[2]);var state_615326__$1 = state_615326;var statearr_615340_615359 = state_615326__$1;(statearr_615340_615359[2] = inst_615318);
(statearr_615340_615359[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615327 === 11))
{var inst_615298 = (state_615326[7]);var inst_615315 = (state_615326[2]);var tmp615339 = inst_615298;var inst_615298__$1 = tmp615339;var state_615326__$1 = (function (){var statearr_615341 = state_615326;(statearr_615341[11] = inst_615315);
(statearr_615341[7] = inst_615298__$1);
return statearr_615341;
})();var statearr_615342_615360 = state_615326__$1;(statearr_615342_615360[2] = null);
(statearr_615342_615360[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_615346 = (new Array(12));(statearr_615346[0] = state_machine__10214__auto__);
(statearr_615346[1] = 1);
return statearr_615346;
});
var state_machine__10214__auto____1 = (function (state_615326){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615326);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615347){if((e615347 instanceof Object))
{var ex__10217__auto__ = e615347;var statearr_615348_615361 = state_615326;(statearr_615348_615361[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615326);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615347;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615362 = state_615326;
state_615326 = G__615362;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615326){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615349 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615350);
return statearr_615349;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___615455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615432){var state_val_615433 = (state_615432[1]);if((state_val_615433 === 1))
{var inst_615409 = 0;var state_615432__$1 = (function (){var statearr_615434 = state_615432;(statearr_615434[7] = inst_615409);
return statearr_615434;
})();var statearr_615435_615456 = state_615432__$1;(statearr_615435_615456[2] = null);
(statearr_615435_615456[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 2))
{var inst_615409 = (state_615432[7]);var inst_615411 = (inst_615409 < n);var state_615432__$1 = state_615432;if(cljs.core.truth_(inst_615411))
{var statearr_615436_615457 = state_615432__$1;(statearr_615436_615457[1] = 4);
} else
{var statearr_615437_615458 = state_615432__$1;(statearr_615437_615458[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 3))
{var inst_615429 = (state_615432[2]);var inst_615430 = cljs.core.async.close_BANG_(out);var state_615432__$1 = (function (){var statearr_615438 = state_615432;(statearr_615438[8] = inst_615429);
return statearr_615438;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_615432__$1,inst_615430);
} else
{if((state_val_615433 === 4))
{var state_615432__$1 = state_615432;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615432__$1,7,ch);
} else
{if((state_val_615433 === 5))
{var state_615432__$1 = state_615432;var statearr_615439_615459 = state_615432__$1;(statearr_615439_615459[2] = null);
(statearr_615439_615459[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 6))
{var inst_615427 = (state_615432[2]);var state_615432__$1 = state_615432;var statearr_615440_615460 = state_615432__$1;(statearr_615440_615460[2] = inst_615427);
(statearr_615440_615460[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 7))
{var inst_615414 = (state_615432[9]);var inst_615414__$1 = (state_615432[2]);var inst_615415 = (inst_615414__$1 == null);var inst_615416 = cljs.core.not(inst_615415);var state_615432__$1 = (function (){var statearr_615441 = state_615432;(statearr_615441[9] = inst_615414__$1);
return statearr_615441;
})();if(inst_615416)
{var statearr_615442_615461 = state_615432__$1;(statearr_615442_615461[1] = 8);
} else
{var statearr_615443_615462 = state_615432__$1;(statearr_615443_615462[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 8))
{var inst_615414 = (state_615432[9]);var state_615432__$1 = state_615432;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615432__$1,11,out,inst_615414);
} else
{if((state_val_615433 === 9))
{var state_615432__$1 = state_615432;var statearr_615444_615463 = state_615432__$1;(statearr_615444_615463[2] = null);
(statearr_615444_615463[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 10))
{var inst_615424 = (state_615432[2]);var state_615432__$1 = state_615432;var statearr_615445_615464 = state_615432__$1;(statearr_615445_615464[2] = inst_615424);
(statearr_615445_615464[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615433 === 11))
{var inst_615409 = (state_615432[7]);var inst_615419 = (state_615432[2]);var inst_615420 = (inst_615409 + 1);var inst_615409__$1 = inst_615420;var state_615432__$1 = (function (){var statearr_615446 = state_615432;(statearr_615446[10] = inst_615419);
(statearr_615446[7] = inst_615409__$1);
return statearr_615446;
})();var statearr_615447_615465 = state_615432__$1;(statearr_615447_615465[2] = null);
(statearr_615447_615465[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_615451 = (new Array(11));(statearr_615451[0] = state_machine__10214__auto__);
(statearr_615451[1] = 1);
return statearr_615451;
});
var state_machine__10214__auto____1 = (function (state_615432){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615432);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615452){if((e615452 instanceof Object))
{var ex__10217__auto__ = e615452;var statearr_615453_615466 = state_615432;(statearr_615453_615466[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615432);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615467 = state_615432;
state_615432 = G__615467;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615432){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615454 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615455);
return statearr_615454;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___615564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615539){var state_val_615540 = (state_615539[1]);if((state_val_615540 === 1))
{var inst_615516 = null;var state_615539__$1 = (function (){var statearr_615541 = state_615539;(statearr_615541[7] = inst_615516);
return statearr_615541;
})();var statearr_615542_615565 = state_615539__$1;(statearr_615542_615565[2] = null);
(statearr_615542_615565[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 2))
{var state_615539__$1 = state_615539;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615539__$1,4,ch);
} else
{if((state_val_615540 === 3))
{var inst_615536 = (state_615539[2]);var inst_615537 = cljs.core.async.close_BANG_(out);var state_615539__$1 = (function (){var statearr_615543 = state_615539;(statearr_615543[8] = inst_615536);
return statearr_615543;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_615539__$1,inst_615537);
} else
{if((state_val_615540 === 4))
{var inst_615519 = (state_615539[9]);var inst_615519__$1 = (state_615539[2]);var inst_615520 = (inst_615519__$1 == null);var inst_615521 = cljs.core.not(inst_615520);var state_615539__$1 = (function (){var statearr_615544 = state_615539;(statearr_615544[9] = inst_615519__$1);
return statearr_615544;
})();if(inst_615521)
{var statearr_615545_615566 = state_615539__$1;(statearr_615545_615566[1] = 5);
} else
{var statearr_615546_615567 = state_615539__$1;(statearr_615546_615567[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 5))
{var inst_615516 = (state_615539[7]);var inst_615519 = (state_615539[9]);var inst_615523 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_615519,inst_615516);var state_615539__$1 = state_615539;if(inst_615523)
{var statearr_615547_615568 = state_615539__$1;(statearr_615547_615568[1] = 8);
} else
{var statearr_615548_615569 = state_615539__$1;(statearr_615548_615569[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 6))
{var state_615539__$1 = state_615539;var statearr_615550_615570 = state_615539__$1;(statearr_615550_615570[2] = null);
(statearr_615550_615570[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 7))
{var inst_615534 = (state_615539[2]);var state_615539__$1 = state_615539;var statearr_615551_615571 = state_615539__$1;(statearr_615551_615571[2] = inst_615534);
(statearr_615551_615571[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 8))
{var inst_615516 = (state_615539[7]);var tmp615549 = inst_615516;var inst_615516__$1 = tmp615549;var state_615539__$1 = (function (){var statearr_615552 = state_615539;(statearr_615552[7] = inst_615516__$1);
return statearr_615552;
})();var statearr_615553_615572 = state_615539__$1;(statearr_615553_615572[2] = null);
(statearr_615553_615572[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 9))
{var inst_615519 = (state_615539[9]);var state_615539__$1 = state_615539;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615539__$1,11,out,inst_615519);
} else
{if((state_val_615540 === 10))
{var inst_615531 = (state_615539[2]);var state_615539__$1 = state_615539;var statearr_615554_615573 = state_615539__$1;(statearr_615554_615573[2] = inst_615531);
(statearr_615554_615573[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615540 === 11))
{var inst_615519 = (state_615539[9]);var inst_615528 = (state_615539[2]);var inst_615516 = inst_615519;var state_615539__$1 = (function (){var statearr_615555 = state_615539;(statearr_615555[7] = inst_615516);
(statearr_615555[10] = inst_615528);
return statearr_615555;
})();var statearr_615556_615574 = state_615539__$1;(statearr_615556_615574[2] = null);
(statearr_615556_615574[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_615560 = (new Array(11));(statearr_615560[0] = state_machine__10214__auto__);
(statearr_615560[1] = 1);
return statearr_615560;
});
var state_machine__10214__auto____1 = (function (state_615539){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615539);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615561){if((e615561 instanceof Object))
{var ex__10217__auto__ = e615561;var statearr_615562_615575 = state_615539;(statearr_615562_615575[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615539);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615576 = state_615539;
state_615539 = G__615576;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615539){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615563 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615564);
return statearr_615563;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___615711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615681){var state_val_615682 = (state_615681[1]);if((state_val_615682 === 1))
{var inst_615644 = (new Array(n));var inst_615645 = inst_615644;var inst_615646 = 0;var state_615681__$1 = (function (){var statearr_615683 = state_615681;(statearr_615683[7] = inst_615645);
(statearr_615683[8] = inst_615646);
return statearr_615683;
})();var statearr_615684_615712 = state_615681__$1;(statearr_615684_615712[2] = null);
(statearr_615684_615712[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 2))
{var state_615681__$1 = state_615681;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615681__$1,4,ch);
} else
{if((state_val_615682 === 3))
{var inst_615679 = (state_615681[2]);var state_615681__$1 = state_615681;return cljs.core.async.impl.ioc_helpers.return_chan(state_615681__$1,inst_615679);
} else
{if((state_val_615682 === 4))
{var inst_615649 = (state_615681[9]);var inst_615649__$1 = (state_615681[2]);var inst_615650 = (inst_615649__$1 == null);var inst_615651 = cljs.core.not(inst_615650);var state_615681__$1 = (function (){var statearr_615685 = state_615681;(statearr_615685[9] = inst_615649__$1);
return statearr_615685;
})();if(inst_615651)
{var statearr_615686_615713 = state_615681__$1;(statearr_615686_615713[1] = 5);
} else
{var statearr_615687_615714 = state_615681__$1;(statearr_615687_615714[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 5))
{var inst_615645 = (state_615681[7]);var inst_615646 = (state_615681[8]);var inst_615654 = (state_615681[10]);var inst_615649 = (state_615681[9]);var inst_615653 = (inst_615645[inst_615646] = inst_615649);var inst_615654__$1 = (inst_615646 + 1);var inst_615655 = (inst_615654__$1 < n);var state_615681__$1 = (function (){var statearr_615688 = state_615681;(statearr_615688[10] = inst_615654__$1);
(statearr_615688[11] = inst_615653);
return statearr_615688;
})();if(cljs.core.truth_(inst_615655))
{var statearr_615689_615715 = state_615681__$1;(statearr_615689_615715[1] = 8);
} else
{var statearr_615690_615716 = state_615681__$1;(statearr_615690_615716[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 6))
{var inst_615646 = (state_615681[8]);var inst_615667 = (inst_615646 > 0);var state_615681__$1 = state_615681;if(cljs.core.truth_(inst_615667))
{var statearr_615692_615717 = state_615681__$1;(statearr_615692_615717[1] = 12);
} else
{var statearr_615693_615718 = state_615681__$1;(statearr_615693_615718[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 7))
{var inst_615677 = (state_615681[2]);var state_615681__$1 = state_615681;var statearr_615694_615719 = state_615681__$1;(statearr_615694_615719[2] = inst_615677);
(statearr_615694_615719[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 8))
{var inst_615645 = (state_615681[7]);var inst_615654 = (state_615681[10]);var tmp615691 = inst_615645;var inst_615645__$1 = tmp615691;var inst_615646 = inst_615654;var state_615681__$1 = (function (){var statearr_615695 = state_615681;(statearr_615695[7] = inst_615645__$1);
(statearr_615695[8] = inst_615646);
return statearr_615695;
})();var statearr_615696_615720 = state_615681__$1;(statearr_615696_615720[2] = null);
(statearr_615696_615720[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 9))
{var inst_615645 = (state_615681[7]);var inst_615659 = cljs.core.vec(inst_615645);var state_615681__$1 = state_615681;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615681__$1,11,out,inst_615659);
} else
{if((state_val_615682 === 10))
{var inst_615665 = (state_615681[2]);var state_615681__$1 = state_615681;var statearr_615697_615721 = state_615681__$1;(statearr_615697_615721[2] = inst_615665);
(statearr_615697_615721[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 11))
{var inst_615661 = (state_615681[2]);var inst_615662 = (new Array(n));var inst_615645 = inst_615662;var inst_615646 = 0;var state_615681__$1 = (function (){var statearr_615698 = state_615681;(statearr_615698[12] = inst_615661);
(statearr_615698[7] = inst_615645);
(statearr_615698[8] = inst_615646);
return statearr_615698;
})();var statearr_615699_615722 = state_615681__$1;(statearr_615699_615722[2] = null);
(statearr_615699_615722[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 12))
{var inst_615645 = (state_615681[7]);var inst_615669 = cljs.core.vec(inst_615645);var state_615681__$1 = state_615681;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615681__$1,15,out,inst_615669);
} else
{if((state_val_615682 === 13))
{var state_615681__$1 = state_615681;var statearr_615700_615723 = state_615681__$1;(statearr_615700_615723[2] = null);
(statearr_615700_615723[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 14))
{var inst_615674 = (state_615681[2]);var inst_615675 = cljs.core.async.close_BANG_(out);var state_615681__$1 = (function (){var statearr_615701 = state_615681;(statearr_615701[13] = inst_615674);
return statearr_615701;
})();var statearr_615702_615724 = state_615681__$1;(statearr_615702_615724[2] = inst_615675);
(statearr_615702_615724[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615682 === 15))
{var inst_615671 = (state_615681[2]);var state_615681__$1 = state_615681;var statearr_615703_615725 = state_615681__$1;(statearr_615703_615725[2] = inst_615671);
(statearr_615703_615725[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_615707 = (new Array(14));(statearr_615707[0] = state_machine__10214__auto__);
(statearr_615707[1] = 1);
return statearr_615707;
});
var state_machine__10214__auto____1 = (function (state_615681){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615681);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615708){if((e615708 instanceof Object))
{var ex__10217__auto__ = e615708;var statearr_615709_615726 = state_615681;(statearr_615709_615726[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615681);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615727 = state_615681;
state_615681 = G__615727;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615681){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615710 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615711);
return statearr_615710;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___615870 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_615840){var state_val_615841 = (state_615840[1]);if((state_val_615841 === 1))
{var inst_615799 = (new Array(0));var inst_615800 = inst_615799;var inst_615801 = cljs.core.constant$keyword$310;var state_615840__$1 = (function (){var statearr_615842 = state_615840;(statearr_615842[7] = inst_615800);
(statearr_615842[8] = inst_615801);
return statearr_615842;
})();var statearr_615843_615871 = state_615840__$1;(statearr_615843_615871[2] = null);
(statearr_615843_615871[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 2))
{var state_615840__$1 = state_615840;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_615840__$1,4,ch);
} else
{if((state_val_615841 === 3))
{var inst_615838 = (state_615840[2]);var state_615840__$1 = state_615840;return cljs.core.async.impl.ioc_helpers.return_chan(state_615840__$1,inst_615838);
} else
{if((state_val_615841 === 4))
{var inst_615804 = (state_615840[9]);var inst_615804__$1 = (state_615840[2]);var inst_615805 = (inst_615804__$1 == null);var inst_615806 = cljs.core.not(inst_615805);var state_615840__$1 = (function (){var statearr_615844 = state_615840;(statearr_615844[9] = inst_615804__$1);
return statearr_615844;
})();if(inst_615806)
{var statearr_615845_615872 = state_615840__$1;(statearr_615845_615872[1] = 5);
} else
{var statearr_615846_615873 = state_615840__$1;(statearr_615846_615873[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 5))
{var inst_615808 = (state_615840[10]);var inst_615804 = (state_615840[9]);var inst_615801 = (state_615840[8]);var inst_615808__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_615804) : f.call(null,inst_615804));var inst_615809 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_615808__$1,inst_615801);var inst_615810 = cljs.core.keyword_identical_QMARK_(inst_615801,cljs.core.constant$keyword$310);var inst_615811 = (inst_615809) || (inst_615810);var state_615840__$1 = (function (){var statearr_615847 = state_615840;(statearr_615847[10] = inst_615808__$1);
return statearr_615847;
})();if(cljs.core.truth_(inst_615811))
{var statearr_615848_615874 = state_615840__$1;(statearr_615848_615874[1] = 8);
} else
{var statearr_615849_615875 = state_615840__$1;(statearr_615849_615875[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 6))
{var inst_615800 = (state_615840[7]);var inst_615825 = inst_615800.length;var inst_615826 = (inst_615825 > 0);var state_615840__$1 = state_615840;if(cljs.core.truth_(inst_615826))
{var statearr_615851_615876 = state_615840__$1;(statearr_615851_615876[1] = 12);
} else
{var statearr_615852_615877 = state_615840__$1;(statearr_615852_615877[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 7))
{var inst_615836 = (state_615840[2]);var state_615840__$1 = state_615840;var statearr_615853_615878 = state_615840__$1;(statearr_615853_615878[2] = inst_615836);
(statearr_615853_615878[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 8))
{var inst_615800 = (state_615840[7]);var inst_615808 = (state_615840[10]);var inst_615804 = (state_615840[9]);var inst_615813 = inst_615800.push(inst_615804);var tmp615850 = inst_615800;var inst_615800__$1 = tmp615850;var inst_615801 = inst_615808;var state_615840__$1 = (function (){var statearr_615854 = state_615840;(statearr_615854[7] = inst_615800__$1);
(statearr_615854[11] = inst_615813);
(statearr_615854[8] = inst_615801);
return statearr_615854;
})();var statearr_615855_615879 = state_615840__$1;(statearr_615855_615879[2] = null);
(statearr_615855_615879[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 9))
{var inst_615800 = (state_615840[7]);var inst_615816 = cljs.core.vec(inst_615800);var state_615840__$1 = state_615840;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615840__$1,11,out,inst_615816);
} else
{if((state_val_615841 === 10))
{var inst_615823 = (state_615840[2]);var state_615840__$1 = state_615840;var statearr_615856_615880 = state_615840__$1;(statearr_615856_615880[2] = inst_615823);
(statearr_615856_615880[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 11))
{var inst_615808 = (state_615840[10]);var inst_615804 = (state_615840[9]);var inst_615818 = (state_615840[2]);var inst_615819 = (new Array(0));var inst_615820 = inst_615819.push(inst_615804);var inst_615800 = inst_615819;var inst_615801 = inst_615808;var state_615840__$1 = (function (){var statearr_615857 = state_615840;(statearr_615857[12] = inst_615820);
(statearr_615857[13] = inst_615818);
(statearr_615857[7] = inst_615800);
(statearr_615857[8] = inst_615801);
return statearr_615857;
})();var statearr_615858_615881 = state_615840__$1;(statearr_615858_615881[2] = null);
(statearr_615858_615881[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 12))
{var inst_615800 = (state_615840[7]);var inst_615828 = cljs.core.vec(inst_615800);var state_615840__$1 = state_615840;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_615840__$1,15,out,inst_615828);
} else
{if((state_val_615841 === 13))
{var state_615840__$1 = state_615840;var statearr_615859_615882 = state_615840__$1;(statearr_615859_615882[2] = null);
(statearr_615859_615882[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 14))
{var inst_615833 = (state_615840[2]);var inst_615834 = cljs.core.async.close_BANG_(out);var state_615840__$1 = (function (){var statearr_615860 = state_615840;(statearr_615860[14] = inst_615833);
return statearr_615860;
})();var statearr_615861_615883 = state_615840__$1;(statearr_615861_615883[2] = inst_615834);
(statearr_615861_615883[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_615841 === 15))
{var inst_615830 = (state_615840[2]);var state_615840__$1 = state_615840;var statearr_615862_615884 = state_615840__$1;(statearr_615862_615884[2] = inst_615830);
(statearr_615862_615884[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_615866 = (new Array(15));(statearr_615866[0] = state_machine__10214__auto__);
(statearr_615866[1] = 1);
return statearr_615866;
});
var state_machine__10214__auto____1 = (function (state_615840){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_615840);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e615867){if((e615867 instanceof Object))
{var ex__10217__auto__ = e615867;var statearr_615868_615885 = state_615840;(statearr_615868_615885[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_615840);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e615867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__615886 = state_615840;
state_615840 = G__615886;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_615840){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_615840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_615869 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_615869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___615870);
return statearr_615869;
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
