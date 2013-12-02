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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t319395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319395 = (function (f,fn_handler,meta319396){
this.f = f;
this.fn_handler = fn_handler;
this.meta319396 = meta319396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319395.cljs$lang$type = true;
cljs.core.async.t319395.cljs$lang$ctorStr = "cljs.core.async/t319395";
cljs.core.async.t319395.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319395");
});
cljs.core.async.t319395.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t319395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t319395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t319395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319397){var self__ = this;
var _319397__$1 = this;return self__.meta319396;
});
cljs.core.async.t319395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319397,meta319396__$1){var self__ = this;
var _319397__$1 = this;return (new cljs.core.async.t319395(self__.f,self__.fn_handler,meta319396__$1));
});
cljs.core.async.__GT_t319395 = (function __GT_t319395(f__$1,fn_handler__$1,meta319396){return (new cljs.core.async.t319395(f__$1,fn_handler__$1,meta319396));
});
}
return (new cljs.core.async.t319395(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__319399 = buff;if(G__319399)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__319399.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__319399.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__319399);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__319399);
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
{var val_319400 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_319400) : fn1.call(null,val_319400));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_319400) : fn1.call(null,val_319400));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___319401 = n;var x_319402 = 0;while(true){
if((x_319402 < n__8553__auto___319401))
{(a[x_319402] = 0);
{
var G__319403 = (x_319402 + 1);
x_319402 = G__319403;
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
var G__319404 = (i + 1);
i = G__319404;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t319408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319408 = (function (flag,alt_flag,meta319409){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta319409 = meta319409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319408.cljs$lang$type = true;
cljs.core.async.t319408.cljs$lang$ctorStr = "cljs.core.async/t319408";
cljs.core.async.t319408.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319408");
});
cljs.core.async.t319408.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t319408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t319408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t319408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319410){var self__ = this;
var _319410__$1 = this;return self__.meta319409;
});
cljs.core.async.t319408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319410,meta319409__$1){var self__ = this;
var _319410__$1 = this;return (new cljs.core.async.t319408(self__.flag,self__.alt_flag,meta319409__$1));
});
cljs.core.async.__GT_t319408 = (function __GT_t319408(flag__$1,alt_flag__$1,meta319409){return (new cljs.core.async.t319408(flag__$1,alt_flag__$1,meta319409));
});
}
return (new cljs.core.async.t319408(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t319414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319414 = (function (cb,flag,alt_handler,meta319415){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta319415 = meta319415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319414.cljs$lang$type = true;
cljs.core.async.t319414.cljs$lang$ctorStr = "cljs.core.async/t319414";
cljs.core.async.t319414.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319414");
});
cljs.core.async.t319414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t319414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t319414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t319414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319416){var self__ = this;
var _319416__$1 = this;return self__.meta319415;
});
cljs.core.async.t319414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319416,meta319415__$1){var self__ = this;
var _319416__$1 = this;return (new cljs.core.async.t319414(self__.cb,self__.flag,self__.alt_handler,meta319415__$1));
});
cljs.core.async.__GT_t319414 = (function __GT_t319414(cb__$1,flag__$1,alt_handler__$1,meta319415){return (new cljs.core.async.t319414(cb__$1,flag__$1,alt_handler__$1,meta319415));
});
}
return (new cljs.core.async.t319414(cb,flag,alt_handler,null));
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
return (function (p1__319417_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__319417_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__319417_SHARP_,port], null)));
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
var G__319418 = (i + 1);
i = G__319418;
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
var alts_BANG___delegate = function (ports,p__319419){var map__319421 = p__319419;var map__319421__$1 = ((cljs.core.seq_QMARK_(map__319421))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__319421):map__319421);var opts = map__319421__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__319419 = null;if (arguments.length > 1) {
  p__319419 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__319419);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__319422){
var ports = cljs.core.first(arglist__319422);
var p__319419 = cljs.core.rest(arglist__319422);
return alts_BANG___delegate(ports,p__319419);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t319430 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319430 = (function (ch,f,map_LT_,meta319431){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta319431 = meta319431;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319430.cljs$lang$type = true;
cljs.core.async.t319430.cljs$lang$ctorStr = "cljs.core.async/t319430";
cljs.core.async.t319430.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319430");
});
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t319433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319433 = (function (fn1,_,meta319431,ch,f,map_LT_,meta319434){
this.fn1 = fn1;
this._ = _;
this.meta319431 = meta319431;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta319434 = meta319434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319433.cljs$lang$type = true;
cljs.core.async.t319433.cljs$lang$ctorStr = "cljs.core.async/t319433";
cljs.core.async.t319433.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319433");
});
cljs.core.async.t319433.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t319433.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t319433.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t319433.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__319423_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__319423_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__319423_SHARP_) : self__.f.call(null,p1__319423_SHARP_)))) : f1.call(null,(((p1__319423_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__319423_SHARP_) : self__.f.call(null,p1__319423_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t319433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319435){var self__ = this;
var _319435__$1 = this;return self__.meta319434;
});
cljs.core.async.t319433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319435,meta319434__$1){var self__ = this;
var _319435__$1 = this;return (new cljs.core.async.t319433(self__.fn1,self__._,self__.meta319431,self__.ch,self__.f,self__.map_LT_,meta319434__$1));
});
cljs.core.async.__GT_t319433 = (function __GT_t319433(fn1__$1,___$2,meta319431__$1,ch__$2,f__$2,map_LT___$2,meta319434){return (new cljs.core.async.t319433(fn1__$1,___$2,meta319431__$1,ch__$2,f__$2,map_LT___$2,meta319434));
});
}
return (new cljs.core.async.t319433(fn1,___$1,self__.meta319431,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t319430.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t319430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319432){var self__ = this;
var _319432__$1 = this;return self__.meta319431;
});
cljs.core.async.t319430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319432,meta319431__$1){var self__ = this;
var _319432__$1 = this;return (new cljs.core.async.t319430(self__.ch,self__.f,self__.map_LT_,meta319431__$1));
});
cljs.core.async.__GT_t319430 = (function __GT_t319430(ch__$1,f__$1,map_LT___$1,meta319431){return (new cljs.core.async.t319430(ch__$1,f__$1,map_LT___$1,meta319431));
});
}
return (new cljs.core.async.t319430(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t319439 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319439 = (function (ch,f,map_GT_,meta319440){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta319440 = meta319440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319439.cljs$lang$type = true;
cljs.core.async.t319439.cljs$lang$ctorStr = "cljs.core.async/t319439";
cljs.core.async.t319439.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319439");
});
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t319439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t319439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319441){var self__ = this;
var _319441__$1 = this;return self__.meta319440;
});
cljs.core.async.t319439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319441,meta319440__$1){var self__ = this;
var _319441__$1 = this;return (new cljs.core.async.t319439(self__.ch,self__.f,self__.map_GT_,meta319440__$1));
});
cljs.core.async.__GT_t319439 = (function __GT_t319439(ch__$1,f__$1,map_GT___$1,meta319440){return (new cljs.core.async.t319439(ch__$1,f__$1,map_GT___$1,meta319440));
});
}
return (new cljs.core.async.t319439(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t319445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t319445 = (function (ch,p,filter_GT_,meta319446){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta319446 = meta319446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t319445.cljs$lang$type = true;
cljs.core.async.t319445.cljs$lang$ctorStr = "cljs.core.async/t319445";
cljs.core.async.t319445.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t319445");
});
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t319445.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t319445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_319447){var self__ = this;
var _319447__$1 = this;return self__.meta319446;
});
cljs.core.async.t319445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_319447,meta319446__$1){var self__ = this;
var _319447__$1 = this;return (new cljs.core.async.t319445(self__.ch,self__.p,self__.filter_GT_,meta319446__$1));
});
cljs.core.async.__GT_t319445 = (function __GT_t319445(ch__$1,p__$1,filter_GT___$1,meta319446){return (new cljs.core.async.t319445(ch__$1,p__$1,filter_GT___$1,meta319446));
});
}
return (new cljs.core.async.t319445(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___319530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_319509){var state_val_319510 = (state_319509[1]);if((state_val_319510 === 1))
{var state_319509__$1 = state_319509;var statearr_319511_319531 = state_319509__$1;(statearr_319511_319531[2] = null);
(statearr_319511_319531[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 2))
{var state_319509__$1 = state_319509;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_319509__$1,4,ch);
} else
{if((state_val_319510 === 3))
{var inst_319507 = (state_319509[2]);var state_319509__$1 = state_319509;return cljs.core.async.impl.ioc_helpers.return_chan(state_319509__$1,inst_319507);
} else
{if((state_val_319510 === 4))
{var inst_319491 = (state_319509[7]);var inst_319491__$1 = (state_319509[2]);var inst_319492 = (inst_319491__$1 == null);var state_319509__$1 = (function (){var statearr_319512 = state_319509;(statearr_319512[7] = inst_319491__$1);
return statearr_319512;
})();if(cljs.core.truth_(inst_319492))
{var statearr_319513_319532 = state_319509__$1;(statearr_319513_319532[1] = 5);
} else
{var statearr_319514_319533 = state_319509__$1;(statearr_319514_319533[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 5))
{var inst_319494 = cljs.core.async.close_BANG_(out);var state_319509__$1 = state_319509;var statearr_319515_319534 = state_319509__$1;(statearr_319515_319534[2] = inst_319494);
(statearr_319515_319534[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 6))
{var inst_319491 = (state_319509[7]);var inst_319496 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_319491) : p.call(null,inst_319491));var state_319509__$1 = state_319509;if(cljs.core.truth_(inst_319496))
{var statearr_319516_319535 = state_319509__$1;(statearr_319516_319535[1] = 8);
} else
{var statearr_319517_319536 = state_319509__$1;(statearr_319517_319536[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 7))
{var inst_319505 = (state_319509[2]);var state_319509__$1 = state_319509;var statearr_319518_319537 = state_319509__$1;(statearr_319518_319537[2] = inst_319505);
(statearr_319518_319537[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 8))
{var inst_319491 = (state_319509[7]);var state_319509__$1 = state_319509;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_319509__$1,11,out,inst_319491);
} else
{if((state_val_319510 === 9))
{var state_319509__$1 = state_319509;var statearr_319519_319538 = state_319509__$1;(statearr_319519_319538[2] = null);
(statearr_319519_319538[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 10))
{var inst_319502 = (state_319509[2]);var state_319509__$1 = (function (){var statearr_319520 = state_319509;(statearr_319520[8] = inst_319502);
return statearr_319520;
})();var statearr_319521_319539 = state_319509__$1;(statearr_319521_319539[2] = null);
(statearr_319521_319539[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319510 === 11))
{var inst_319499 = (state_319509[2]);var state_319509__$1 = state_319509;var statearr_319522_319540 = state_319509__$1;(statearr_319522_319540[2] = inst_319499);
(statearr_319522_319540[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_319526 = (new Array(9));(statearr_319526[0] = state_machine__10214__auto__);
(statearr_319526[1] = 1);
return statearr_319526;
});
var state_machine__10214__auto____1 = (function (state_319509){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_319509);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e319527){if((e319527 instanceof Object))
{var ex__10217__auto__ = e319527;var statearr_319528_319541 = state_319509;(statearr_319528_319541[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_319509);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e319527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__319542 = state_319509;
state_319509 = G__319542;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_319509){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_319509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_319529 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_319529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___319530);
return statearr_319529;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_319694){var state_val_319695 = (state_319694[1]);if((state_val_319695 === 1))
{var state_319694__$1 = state_319694;var statearr_319696_319733 = state_319694__$1;(statearr_319696_319733[2] = null);
(statearr_319696_319733[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 2))
{var state_319694__$1 = state_319694;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_319694__$1,4,in$);
} else
{if((state_val_319695 === 3))
{var inst_319692 = (state_319694[2]);var state_319694__$1 = state_319694;return cljs.core.async.impl.ioc_helpers.return_chan(state_319694__$1,inst_319692);
} else
{if((state_val_319695 === 4))
{var inst_319640 = (state_319694[7]);var inst_319640__$1 = (state_319694[2]);var inst_319641 = (inst_319640__$1 == null);var state_319694__$1 = (function (){var statearr_319697 = state_319694;(statearr_319697[7] = inst_319640__$1);
return statearr_319697;
})();if(cljs.core.truth_(inst_319641))
{var statearr_319698_319734 = state_319694__$1;(statearr_319698_319734[1] = 5);
} else
{var statearr_319699_319735 = state_319694__$1;(statearr_319699_319735[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 5))
{var inst_319643 = cljs.core.async.close_BANG_(out);var state_319694__$1 = state_319694;var statearr_319700_319736 = state_319694__$1;(statearr_319700_319736[2] = inst_319643);
(statearr_319700_319736[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 6))
{var inst_319640 = (state_319694[7]);var inst_319645 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_319640) : f.call(null,inst_319640));var inst_319650 = cljs.core.seq(inst_319645);var inst_319651 = inst_319650;var inst_319652 = null;var inst_319653 = 0;var inst_319654 = 0;var state_319694__$1 = (function (){var statearr_319701 = state_319694;(statearr_319701[8] = inst_319652);
(statearr_319701[9] = inst_319651);
(statearr_319701[10] = inst_319654);
(statearr_319701[11] = inst_319653);
return statearr_319701;
})();var statearr_319702_319737 = state_319694__$1;(statearr_319702_319737[2] = null);
(statearr_319702_319737[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 7))
{var inst_319690 = (state_319694[2]);var state_319694__$1 = state_319694;var statearr_319703_319738 = state_319694__$1;(statearr_319703_319738[2] = inst_319690);
(statearr_319703_319738[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 8))
{var inst_319654 = (state_319694[10]);var inst_319653 = (state_319694[11]);var inst_319656 = (inst_319654 < inst_319653);var inst_319657 = inst_319656;var state_319694__$1 = state_319694;if(cljs.core.truth_(inst_319657))
{var statearr_319704_319739 = state_319694__$1;(statearr_319704_319739[1] = 10);
} else
{var statearr_319705_319740 = state_319694__$1;(statearr_319705_319740[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 9))
{var inst_319687 = (state_319694[2]);var state_319694__$1 = (function (){var statearr_319706 = state_319694;(statearr_319706[12] = inst_319687);
return statearr_319706;
})();var statearr_319707_319741 = state_319694__$1;(statearr_319707_319741[2] = null);
(statearr_319707_319741[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 10))
{var inst_319652 = (state_319694[8]);var inst_319654 = (state_319694[10]);var inst_319659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_319652,inst_319654);var state_319694__$1 = state_319694;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_319694__$1,13,out,inst_319659);
} else
{if((state_val_319695 === 11))
{var inst_319651 = (state_319694[9]);var inst_319665 = (state_319694[13]);var inst_319665__$1 = cljs.core.seq(inst_319651);var state_319694__$1 = (function (){var statearr_319711 = state_319694;(statearr_319711[13] = inst_319665__$1);
return statearr_319711;
})();if(inst_319665__$1)
{var statearr_319712_319742 = state_319694__$1;(statearr_319712_319742[1] = 14);
} else
{var statearr_319713_319743 = state_319694__$1;(statearr_319713_319743[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 12))
{var inst_319685 = (state_319694[2]);var state_319694__$1 = state_319694;var statearr_319714_319744 = state_319694__$1;(statearr_319714_319744[2] = inst_319685);
(statearr_319714_319744[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 13))
{var inst_319652 = (state_319694[8]);var inst_319651 = (state_319694[9]);var inst_319654 = (state_319694[10]);var inst_319653 = (state_319694[11]);var inst_319661 = (state_319694[2]);var inst_319662 = (inst_319654 + 1);var tmp319708 = inst_319652;var tmp319709 = inst_319651;var tmp319710 = inst_319653;var inst_319651__$1 = tmp319709;var inst_319652__$1 = tmp319708;var inst_319653__$1 = tmp319710;var inst_319654__$1 = inst_319662;var state_319694__$1 = (function (){var statearr_319715 = state_319694;(statearr_319715[8] = inst_319652__$1);
(statearr_319715[9] = inst_319651__$1);
(statearr_319715[10] = inst_319654__$1);
(statearr_319715[11] = inst_319653__$1);
(statearr_319715[14] = inst_319661);
return statearr_319715;
})();var statearr_319716_319745 = state_319694__$1;(statearr_319716_319745[2] = null);
(statearr_319716_319745[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 14))
{var inst_319665 = (state_319694[13]);var inst_319667 = cljs.core.chunked_seq_QMARK_(inst_319665);var state_319694__$1 = state_319694;if(inst_319667)
{var statearr_319717_319746 = state_319694__$1;(statearr_319717_319746[1] = 17);
} else
{var statearr_319718_319747 = state_319694__$1;(statearr_319718_319747[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 15))
{var state_319694__$1 = state_319694;var statearr_319719_319748 = state_319694__$1;(statearr_319719_319748[2] = null);
(statearr_319719_319748[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 16))
{var inst_319683 = (state_319694[2]);var state_319694__$1 = state_319694;var statearr_319720_319749 = state_319694__$1;(statearr_319720_319749[2] = inst_319683);
(statearr_319720_319749[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 17))
{var inst_319665 = (state_319694[13]);var inst_319669 = cljs.core.chunk_first(inst_319665);var inst_319670 = cljs.core.chunk_rest(inst_319665);var inst_319671 = cljs.core.count(inst_319669);var inst_319651 = inst_319670;var inst_319652 = inst_319669;var inst_319653 = inst_319671;var inst_319654 = 0;var state_319694__$1 = (function (){var statearr_319721 = state_319694;(statearr_319721[8] = inst_319652);
(statearr_319721[9] = inst_319651);
(statearr_319721[10] = inst_319654);
(statearr_319721[11] = inst_319653);
return statearr_319721;
})();var statearr_319722_319750 = state_319694__$1;(statearr_319722_319750[2] = null);
(statearr_319722_319750[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 18))
{var inst_319665 = (state_319694[13]);var inst_319674 = cljs.core.first(inst_319665);var state_319694__$1 = state_319694;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_319694__$1,20,out,inst_319674);
} else
{if((state_val_319695 === 19))
{var inst_319680 = (state_319694[2]);var state_319694__$1 = state_319694;var statearr_319723_319751 = state_319694__$1;(statearr_319723_319751[2] = inst_319680);
(statearr_319723_319751[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319695 === 20))
{var inst_319665 = (state_319694[13]);var inst_319676 = (state_319694[2]);var inst_319677 = cljs.core.next(inst_319665);var inst_319651 = inst_319677;var inst_319652 = null;var inst_319653 = 0;var inst_319654 = 0;var state_319694__$1 = (function (){var statearr_319724 = state_319694;(statearr_319724[8] = inst_319652);
(statearr_319724[9] = inst_319651);
(statearr_319724[10] = inst_319654);
(statearr_319724[11] = inst_319653);
(statearr_319724[15] = inst_319676);
return statearr_319724;
})();var statearr_319725_319752 = state_319694__$1;(statearr_319725_319752[2] = null);
(statearr_319725_319752[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_319729 = (new Array(16));(statearr_319729[0] = state_machine__10214__auto__);
(statearr_319729[1] = 1);
return statearr_319729;
});
var state_machine__10214__auto____1 = (function (state_319694){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_319694);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e319730){if((e319730 instanceof Object))
{var ex__10217__auto__ = e319730;var statearr_319731_319753 = state_319694;(statearr_319731_319753[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_319694);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e319730;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__319754 = state_319694;
state_319694 = G__319754;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_319694){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_319694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_319732 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_319732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_319732;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___319835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_319814){var state_val_319815 = (state_319814[1]);if((state_val_319815 === 1))
{var state_319814__$1 = state_319814;var statearr_319816_319836 = state_319814__$1;(statearr_319816_319836[2] = null);
(statearr_319816_319836[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 2))
{var state_319814__$1 = state_319814;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_319814__$1,4,from);
} else
{if((state_val_319815 === 3))
{var inst_319812 = (state_319814[2]);var state_319814__$1 = state_319814;return cljs.core.async.impl.ioc_helpers.return_chan(state_319814__$1,inst_319812);
} else
{if((state_val_319815 === 4))
{var inst_319797 = (state_319814[7]);var inst_319797__$1 = (state_319814[2]);var inst_319798 = (inst_319797__$1 == null);var state_319814__$1 = (function (){var statearr_319817 = state_319814;(statearr_319817[7] = inst_319797__$1);
return statearr_319817;
})();if(cljs.core.truth_(inst_319798))
{var statearr_319818_319837 = state_319814__$1;(statearr_319818_319837[1] = 5);
} else
{var statearr_319819_319838 = state_319814__$1;(statearr_319819_319838[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 5))
{var state_319814__$1 = state_319814;if(cljs.core.truth_(close_QMARK_))
{var statearr_319820_319839 = state_319814__$1;(statearr_319820_319839[1] = 8);
} else
{var statearr_319821_319840 = state_319814__$1;(statearr_319821_319840[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 6))
{var inst_319797 = (state_319814[7]);var state_319814__$1 = state_319814;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_319814__$1,11,to,inst_319797);
} else
{if((state_val_319815 === 7))
{var inst_319810 = (state_319814[2]);var state_319814__$1 = state_319814;var statearr_319822_319841 = state_319814__$1;(statearr_319822_319841[2] = inst_319810);
(statearr_319822_319841[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 8))
{var inst_319801 = cljs.core.async.close_BANG_(to);var state_319814__$1 = state_319814;var statearr_319823_319842 = state_319814__$1;(statearr_319823_319842[2] = inst_319801);
(statearr_319823_319842[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 9))
{var state_319814__$1 = state_319814;var statearr_319824_319843 = state_319814__$1;(statearr_319824_319843[2] = null);
(statearr_319824_319843[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 10))
{var inst_319804 = (state_319814[2]);var state_319814__$1 = state_319814;var statearr_319825_319844 = state_319814__$1;(statearr_319825_319844[2] = inst_319804);
(statearr_319825_319844[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319815 === 11))
{var inst_319807 = (state_319814[2]);var state_319814__$1 = (function (){var statearr_319826 = state_319814;(statearr_319826[8] = inst_319807);
return statearr_319826;
})();var statearr_319827_319845 = state_319814__$1;(statearr_319827_319845[2] = null);
(statearr_319827_319845[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_319831 = (new Array(9));(statearr_319831[0] = state_machine__10214__auto__);
(statearr_319831[1] = 1);
return statearr_319831;
});
var state_machine__10214__auto____1 = (function (state_319814){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_319814);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e319832){if((e319832 instanceof Object))
{var ex__10217__auto__ = e319832;var statearr_319833_319846 = state_319814;(statearr_319833_319846[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_319814);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e319832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__319847 = state_319814;
state_319814 = G__319847;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_319814){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_319814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_319834 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_319834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___319835);
return statearr_319834;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___319934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_319912){var state_val_319913 = (state_319912[1]);if((state_val_319913 === 1))
{var state_319912__$1 = state_319912;var statearr_319914_319935 = state_319912__$1;(statearr_319914_319935[2] = null);
(statearr_319914_319935[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 2))
{var state_319912__$1 = state_319912;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_319912__$1,4,ch);
} else
{if((state_val_319913 === 3))
{var inst_319910 = (state_319912[2]);var state_319912__$1 = state_319912;return cljs.core.async.impl.ioc_helpers.return_chan(state_319912__$1,inst_319910);
} else
{if((state_val_319913 === 4))
{var inst_319893 = (state_319912[7]);var inst_319893__$1 = (state_319912[2]);var inst_319894 = (inst_319893__$1 == null);var state_319912__$1 = (function (){var statearr_319915 = state_319912;(statearr_319915[7] = inst_319893__$1);
return statearr_319915;
})();if(cljs.core.truth_(inst_319894))
{var statearr_319916_319936 = state_319912__$1;(statearr_319916_319936[1] = 5);
} else
{var statearr_319917_319937 = state_319912__$1;(statearr_319917_319937[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 5))
{var inst_319896 = cljs.core.async.close_BANG_(tc);var inst_319897 = cljs.core.async.close_BANG_(fc);var state_319912__$1 = (function (){var statearr_319918 = state_319912;(statearr_319918[8] = inst_319896);
return statearr_319918;
})();var statearr_319919_319938 = state_319912__$1;(statearr_319919_319938[2] = inst_319897);
(statearr_319919_319938[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 6))
{var inst_319893 = (state_319912[7]);var inst_319899 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_319893) : p.call(null,inst_319893));var state_319912__$1 = state_319912;if(cljs.core.truth_(inst_319899))
{var statearr_319920_319939 = state_319912__$1;(statearr_319920_319939[1] = 9);
} else
{var statearr_319921_319940 = state_319912__$1;(statearr_319921_319940[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 7))
{var inst_319908 = (state_319912[2]);var state_319912__$1 = state_319912;var statearr_319922_319941 = state_319912__$1;(statearr_319922_319941[2] = inst_319908);
(statearr_319922_319941[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 8))
{var inst_319905 = (state_319912[2]);var state_319912__$1 = (function (){var statearr_319923 = state_319912;(statearr_319923[9] = inst_319905);
return statearr_319923;
})();var statearr_319924_319942 = state_319912__$1;(statearr_319924_319942[2] = null);
(statearr_319924_319942[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 9))
{var state_319912__$1 = state_319912;var statearr_319925_319943 = state_319912__$1;(statearr_319925_319943[2] = tc);
(statearr_319925_319943[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 10))
{var state_319912__$1 = state_319912;var statearr_319926_319944 = state_319912__$1;(statearr_319926_319944[2] = fc);
(statearr_319926_319944[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319913 === 11))
{var inst_319893 = (state_319912[7]);var inst_319903 = (state_319912[2]);var state_319912__$1 = state_319912;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_319912__$1,8,inst_319903,inst_319893);
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
var state_machine__10214__auto____0 = (function (){var statearr_319930 = (new Array(10));(statearr_319930[0] = state_machine__10214__auto__);
(statearr_319930[1] = 1);
return statearr_319930;
});
var state_machine__10214__auto____1 = (function (state_319912){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_319912);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e319931){if((e319931 instanceof Object))
{var ex__10217__auto__ = e319931;var statearr_319932_319945 = state_319912;(statearr_319932_319945[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_319912);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e319931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__319946 = state_319912;
state_319912 = G__319946;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_319912){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_319912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_319933 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_319933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___319934);
return statearr_319933;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_319993){var state_val_319994 = (state_319993[1]);if((state_val_319994 === 7))
{var inst_319989 = (state_319993[2]);var state_319993__$1 = state_319993;var statearr_319995_320011 = state_319993__$1;(statearr_319995_320011[2] = inst_319989);
(statearr_319995_320011[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319994 === 6))
{var inst_319982 = (state_319993[7]);var inst_319979 = (state_319993[8]);var inst_319986 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_319979,inst_319982) : f.call(null,inst_319979,inst_319982));var inst_319979__$1 = inst_319986;var state_319993__$1 = (function (){var statearr_319996 = state_319993;(statearr_319996[8] = inst_319979__$1);
return statearr_319996;
})();var statearr_319997_320012 = state_319993__$1;(statearr_319997_320012[2] = null);
(statearr_319997_320012[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319994 === 5))
{var inst_319979 = (state_319993[8]);var state_319993__$1 = state_319993;var statearr_319998_320013 = state_319993__$1;(statearr_319998_320013[2] = inst_319979);
(statearr_319998_320013[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_319994 === 4))
{var inst_319982 = (state_319993[7]);var inst_319982__$1 = (state_319993[2]);var inst_319983 = (inst_319982__$1 == null);var state_319993__$1 = (function (){var statearr_319999 = state_319993;(statearr_319999[7] = inst_319982__$1);
return statearr_319999;
})();if(cljs.core.truth_(inst_319983))
{var statearr_320000_320014 = state_319993__$1;(statearr_320000_320014[1] = 5);
} else
{var statearr_320001_320015 = state_319993__$1;(statearr_320001_320015[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_319994 === 3))
{var inst_319991 = (state_319993[2]);var state_319993__$1 = state_319993;return cljs.core.async.impl.ioc_helpers.return_chan(state_319993__$1,inst_319991);
} else
{if((state_val_319994 === 2))
{var state_319993__$1 = state_319993;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_319993__$1,4,ch);
} else
{if((state_val_319994 === 1))
{var inst_319979 = init;var state_319993__$1 = (function (){var statearr_320002 = state_319993;(statearr_320002[8] = inst_319979);
return statearr_320002;
})();var statearr_320003_320016 = state_319993__$1;(statearr_320003_320016[2] = null);
(statearr_320003_320016[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_320007 = (new Array(9));(statearr_320007[0] = state_machine__10214__auto__);
(statearr_320007[1] = 1);
return statearr_320007;
});
var state_machine__10214__auto____1 = (function (state_319993){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_319993);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e320008){if((e320008 instanceof Object))
{var ex__10217__auto__ = e320008;var statearr_320009_320017 = state_319993;(statearr_320009_320017[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_319993);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e320008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__320018 = state_319993;
state_319993 = G__320018;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_319993){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_319993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_320010 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_320010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_320010;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_320080){var state_val_320081 = (state_320080[1]);if((state_val_320081 === 1))
{var inst_320060 = cljs.core.seq(coll);var inst_320061 = inst_320060;var state_320080__$1 = (function (){var statearr_320082 = state_320080;(statearr_320082[7] = inst_320061);
return statearr_320082;
})();var statearr_320083_320101 = state_320080__$1;(statearr_320083_320101[2] = null);
(statearr_320083_320101[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 2))
{var inst_320061 = (state_320080[7]);var state_320080__$1 = state_320080;if(cljs.core.truth_(inst_320061))
{var statearr_320084_320102 = state_320080__$1;(statearr_320084_320102[1] = 4);
} else
{var statearr_320085_320103 = state_320080__$1;(statearr_320085_320103[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 3))
{var inst_320078 = (state_320080[2]);var state_320080__$1 = state_320080;return cljs.core.async.impl.ioc_helpers.return_chan(state_320080__$1,inst_320078);
} else
{if((state_val_320081 === 4))
{var inst_320061 = (state_320080[7]);var inst_320064 = cljs.core.first(inst_320061);var state_320080__$1 = state_320080;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_320080__$1,7,ch,inst_320064);
} else
{if((state_val_320081 === 5))
{var state_320080__$1 = state_320080;if(cljs.core.truth_(close_QMARK_))
{var statearr_320086_320104 = state_320080__$1;(statearr_320086_320104[1] = 8);
} else
{var statearr_320087_320105 = state_320080__$1;(statearr_320087_320105[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 6))
{var inst_320076 = (state_320080[2]);var state_320080__$1 = state_320080;var statearr_320088_320106 = state_320080__$1;(statearr_320088_320106[2] = inst_320076);
(statearr_320088_320106[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 7))
{var inst_320061 = (state_320080[7]);var inst_320066 = (state_320080[2]);var inst_320067 = cljs.core.next(inst_320061);var inst_320061__$1 = inst_320067;var state_320080__$1 = (function (){var statearr_320089 = state_320080;(statearr_320089[7] = inst_320061__$1);
(statearr_320089[8] = inst_320066);
return statearr_320089;
})();var statearr_320090_320107 = state_320080__$1;(statearr_320090_320107[2] = null);
(statearr_320090_320107[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 8))
{var inst_320071 = cljs.core.async.close_BANG_(ch);var state_320080__$1 = state_320080;var statearr_320091_320108 = state_320080__$1;(statearr_320091_320108[2] = inst_320071);
(statearr_320091_320108[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 9))
{var state_320080__$1 = state_320080;var statearr_320092_320109 = state_320080__$1;(statearr_320092_320109[2] = null);
(statearr_320092_320109[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320081 === 10))
{var inst_320074 = (state_320080[2]);var state_320080__$1 = state_320080;var statearr_320093_320110 = state_320080__$1;(statearr_320093_320110[2] = inst_320074);
(statearr_320093_320110[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_320097 = (new Array(9));(statearr_320097[0] = state_machine__10214__auto__);
(statearr_320097[1] = 1);
return statearr_320097;
});
var state_machine__10214__auto____1 = (function (state_320080){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_320080);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e320098){if((e320098 instanceof Object))
{var ex__10217__auto__ = e320098;var statearr_320099_320111 = state_320080;(statearr_320099_320111[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_320080);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e320098;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__320112 = state_320080;
state_320080 = G__320112;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_320080){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_320080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_320100 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_320100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_320100;
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
cljs.core.async.Mux = (function (){var obj320114 = {};return obj320114;
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
cljs.core.async.Mult = (function (){var obj320116 = {};return obj320116;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t320331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t320331 = (function (cs,ch,mult,meta320332){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta320332 = meta320332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t320331.cljs$lang$type = true;
cljs.core.async.t320331.cljs$lang$ctorStr = "cljs.core.async/t320331";
cljs.core.async.t320331.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t320331");
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t320331.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t320331.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_320333){var self__ = this;
var _320333__$1 = this;return self__.meta320332;
});})(cs))
;
cljs.core.async.t320331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_320333,meta320332__$1){var self__ = this;
var _320333__$1 = this;return (new cljs.core.async.t320331(self__.cs,self__.ch,self__.mult,meta320332__$1));
});})(cs))
;
cljs.core.async.__GT_t320331 = ((function (cs){
return (function __GT_t320331(cs__$1,ch__$1,mult__$1,meta320332){return (new cljs.core.async.t320331(cs__$1,ch__$1,mult__$1,meta320332));
});})(cs))
;
}
return (new cljs.core.async.t320331(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___320545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_320463){var state_val_320464 = (state_320463[1]);if((state_val_320464 === 32))
{var inst_320412 = (state_320463[7]);var inst_320336 = (state_320463[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_320463,31,Object,null,30);var inst_320419 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_320412,inst_320336,done);var state_320463__$1 = state_320463;var statearr_320465_320546 = state_320463__$1;(statearr_320465_320546[2] = inst_320419);
cljs.core.async.impl.ioc_helpers.process_exception(state_320463__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 1))
{var state_320463__$1 = state_320463;var statearr_320466_320547 = state_320463__$1;(statearr_320466_320547[2] = null);
(statearr_320466_320547[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 33))
{var inst_320425 = (state_320463[9]);var inst_320427 = cljs.core.chunked_seq_QMARK_(inst_320425);var state_320463__$1 = state_320463;if(inst_320427)
{var statearr_320467_320548 = state_320463__$1;(statearr_320467_320548[1] = 36);
} else
{var statearr_320468_320549 = state_320463__$1;(statearr_320468_320549[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 2))
{var state_320463__$1 = state_320463;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_320463__$1,4,ch);
} else
{if((state_val_320464 === 34))
{var state_320463__$1 = state_320463;var statearr_320469_320550 = state_320463__$1;(statearr_320469_320550[2] = null);
(statearr_320469_320550[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 3))
{var inst_320461 = (state_320463[2]);var state_320463__$1 = state_320463;return cljs.core.async.impl.ioc_helpers.return_chan(state_320463__$1,inst_320461);
} else
{if((state_val_320464 === 35))
{var inst_320450 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320470_320551 = state_320463__$1;(statearr_320470_320551[2] = inst_320450);
(statearr_320470_320551[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 4))
{var inst_320336 = (state_320463[8]);var inst_320336__$1 = (state_320463[2]);var inst_320337 = (inst_320336__$1 == null);var state_320463__$1 = (function (){var statearr_320471 = state_320463;(statearr_320471[8] = inst_320336__$1);
return statearr_320471;
})();if(cljs.core.truth_(inst_320337))
{var statearr_320472_320552 = state_320463__$1;(statearr_320472_320552[1] = 5);
} else
{var statearr_320473_320553 = state_320463__$1;(statearr_320473_320553[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 36))
{var inst_320425 = (state_320463[9]);var inst_320429 = cljs.core.chunk_first(inst_320425);var inst_320430 = cljs.core.chunk_rest(inst_320425);var inst_320431 = cljs.core.count(inst_320429);var inst_320404 = inst_320430;var inst_320405 = inst_320429;var inst_320406 = inst_320431;var inst_320407 = 0;var state_320463__$1 = (function (){var statearr_320474 = state_320463;(statearr_320474[10] = inst_320405);
(statearr_320474[11] = inst_320404);
(statearr_320474[12] = inst_320407);
(statearr_320474[13] = inst_320406);
return statearr_320474;
})();var statearr_320475_320554 = state_320463__$1;(statearr_320475_320554[2] = null);
(statearr_320475_320554[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 5))
{var inst_320343 = cljs.core.deref(cs);var inst_320344 = cljs.core.seq(inst_320343);var inst_320345 = inst_320344;var inst_320346 = null;var inst_320347 = 0;var inst_320348 = 0;var state_320463__$1 = (function (){var statearr_320476 = state_320463;(statearr_320476[14] = inst_320345);
(statearr_320476[15] = inst_320346);
(statearr_320476[16] = inst_320347);
(statearr_320476[17] = inst_320348);
return statearr_320476;
})();var statearr_320477_320555 = state_320463__$1;(statearr_320477_320555[2] = null);
(statearr_320477_320555[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 37))
{var inst_320425 = (state_320463[9]);var inst_320434 = cljs.core.first(inst_320425);var state_320463__$1 = (function (){var statearr_320478 = state_320463;(statearr_320478[18] = inst_320434);
return statearr_320478;
})();var statearr_320479_320556 = state_320463__$1;(statearr_320479_320556[2] = null);
(statearr_320479_320556[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 6))
{var inst_320395 = cljs.core.deref(cs);var inst_320396 = cljs.core.keys(inst_320395);var inst_320397 = cljs.core.count(inst_320396);var inst_320398 = cljs.core.reset_BANG_(dctr,inst_320397);var inst_320403 = cljs.core.seq(inst_320396);var inst_320404 = inst_320403;var inst_320405 = null;var inst_320406 = 0;var inst_320407 = 0;var state_320463__$1 = (function (){var statearr_320480 = state_320463;(statearr_320480[19] = inst_320398);
(statearr_320480[10] = inst_320405);
(statearr_320480[11] = inst_320404);
(statearr_320480[12] = inst_320407);
(statearr_320480[13] = inst_320406);
return statearr_320480;
})();var statearr_320481_320557 = state_320463__$1;(statearr_320481_320557[2] = null);
(statearr_320481_320557[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 38))
{var inst_320447 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320482_320558 = state_320463__$1;(statearr_320482_320558[2] = inst_320447);
(statearr_320482_320558[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 7))
{var inst_320459 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320483_320559 = state_320463__$1;(statearr_320483_320559[2] = inst_320459);
(statearr_320483_320559[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 39))
{var inst_320425 = (state_320463[9]);var inst_320443 = (state_320463[2]);var inst_320444 = cljs.core.next(inst_320425);var inst_320404 = inst_320444;var inst_320405 = null;var inst_320406 = 0;var inst_320407 = 0;var state_320463__$1 = (function (){var statearr_320484 = state_320463;(statearr_320484[20] = inst_320443);
(statearr_320484[10] = inst_320405);
(statearr_320484[11] = inst_320404);
(statearr_320484[12] = inst_320407);
(statearr_320484[13] = inst_320406);
return statearr_320484;
})();var statearr_320485_320560 = state_320463__$1;(statearr_320485_320560[2] = null);
(statearr_320485_320560[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 8))
{var inst_320347 = (state_320463[16]);var inst_320348 = (state_320463[17]);var inst_320350 = (inst_320348 < inst_320347);var inst_320351 = inst_320350;var state_320463__$1 = state_320463;if(cljs.core.truth_(inst_320351))
{var statearr_320486_320561 = state_320463__$1;(statearr_320486_320561[1] = 10);
} else
{var statearr_320487_320562 = state_320463__$1;(statearr_320487_320562[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 40))
{var inst_320434 = (state_320463[18]);var inst_320435 = (state_320463[2]);var inst_320436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_320437 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_320434);var state_320463__$1 = (function (){var statearr_320488 = state_320463;(statearr_320488[21] = inst_320435);
(statearr_320488[22] = inst_320436);
return statearr_320488;
})();var statearr_320489_320563 = state_320463__$1;(statearr_320489_320563[2] = inst_320437);
cljs.core.async.impl.ioc_helpers.process_exception(state_320463__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 9))
{var inst_320393 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320490_320564 = state_320463__$1;(statearr_320490_320564[2] = inst_320393);
(statearr_320490_320564[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 41))
{var inst_320434 = (state_320463[18]);var inst_320336 = (state_320463[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_320463,40,Object,null,39);var inst_320441 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_320434,inst_320336,done);var state_320463__$1 = state_320463;var statearr_320491_320565 = state_320463__$1;(statearr_320491_320565[2] = inst_320441);
cljs.core.async.impl.ioc_helpers.process_exception(state_320463__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 10))
{var inst_320346 = (state_320463[15]);var inst_320348 = (state_320463[17]);var inst_320354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_320346,inst_320348);var inst_320355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320354,0,null);var inst_320356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320354,1,null);var state_320463__$1 = (function (){var statearr_320492 = state_320463;(statearr_320492[23] = inst_320355);
return statearr_320492;
})();if(cljs.core.truth_(inst_320356))
{var statearr_320493_320566 = state_320463__$1;(statearr_320493_320566[1] = 13);
} else
{var statearr_320494_320567 = state_320463__$1;(statearr_320494_320567[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 42))
{var inst_320456 = (state_320463[2]);var state_320463__$1 = (function (){var statearr_320495 = state_320463;(statearr_320495[24] = inst_320456);
return statearr_320495;
})();var statearr_320496_320568 = state_320463__$1;(statearr_320496_320568[2] = null);
(statearr_320496_320568[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 11))
{var inst_320365 = (state_320463[25]);var inst_320345 = (state_320463[14]);var inst_320365__$1 = cljs.core.seq(inst_320345);var state_320463__$1 = (function (){var statearr_320497 = state_320463;(statearr_320497[25] = inst_320365__$1);
return statearr_320497;
})();if(inst_320365__$1)
{var statearr_320498_320569 = state_320463__$1;(statearr_320498_320569[1] = 16);
} else
{var statearr_320499_320570 = state_320463__$1;(statearr_320499_320570[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 12))
{var inst_320391 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320500_320571 = state_320463__$1;(statearr_320500_320571[2] = inst_320391);
(statearr_320500_320571[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 13))
{var inst_320355 = (state_320463[23]);var inst_320358 = cljs.core.async.close_BANG_(inst_320355);var state_320463__$1 = state_320463;var statearr_320504_320572 = state_320463__$1;(statearr_320504_320572[2] = inst_320358);
(statearr_320504_320572[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 14))
{var state_320463__$1 = state_320463;var statearr_320505_320573 = state_320463__$1;(statearr_320505_320573[2] = null);
(statearr_320505_320573[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 15))
{var inst_320345 = (state_320463[14]);var inst_320346 = (state_320463[15]);var inst_320347 = (state_320463[16]);var inst_320348 = (state_320463[17]);var inst_320361 = (state_320463[2]);var inst_320362 = (inst_320348 + 1);var tmp320501 = inst_320345;var tmp320502 = inst_320346;var tmp320503 = inst_320347;var inst_320345__$1 = tmp320501;var inst_320346__$1 = tmp320502;var inst_320347__$1 = tmp320503;var inst_320348__$1 = inst_320362;var state_320463__$1 = (function (){var statearr_320506 = state_320463;(statearr_320506[26] = inst_320361);
(statearr_320506[14] = inst_320345__$1);
(statearr_320506[15] = inst_320346__$1);
(statearr_320506[16] = inst_320347__$1);
(statearr_320506[17] = inst_320348__$1);
return statearr_320506;
})();var statearr_320507_320574 = state_320463__$1;(statearr_320507_320574[2] = null);
(statearr_320507_320574[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 16))
{var inst_320365 = (state_320463[25]);var inst_320367 = cljs.core.chunked_seq_QMARK_(inst_320365);var state_320463__$1 = state_320463;if(inst_320367)
{var statearr_320508_320575 = state_320463__$1;(statearr_320508_320575[1] = 19);
} else
{var statearr_320509_320576 = state_320463__$1;(statearr_320509_320576[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 17))
{var state_320463__$1 = state_320463;var statearr_320510_320577 = state_320463__$1;(statearr_320510_320577[2] = null);
(statearr_320510_320577[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 18))
{var inst_320389 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320511_320578 = state_320463__$1;(statearr_320511_320578[2] = inst_320389);
(statearr_320511_320578[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 19))
{var inst_320365 = (state_320463[25]);var inst_320369 = cljs.core.chunk_first(inst_320365);var inst_320370 = cljs.core.chunk_rest(inst_320365);var inst_320371 = cljs.core.count(inst_320369);var inst_320345 = inst_320370;var inst_320346 = inst_320369;var inst_320347 = inst_320371;var inst_320348 = 0;var state_320463__$1 = (function (){var statearr_320512 = state_320463;(statearr_320512[14] = inst_320345);
(statearr_320512[15] = inst_320346);
(statearr_320512[16] = inst_320347);
(statearr_320512[17] = inst_320348);
return statearr_320512;
})();var statearr_320513_320579 = state_320463__$1;(statearr_320513_320579[2] = null);
(statearr_320513_320579[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 20))
{var inst_320365 = (state_320463[25]);var inst_320375 = cljs.core.first(inst_320365);var inst_320376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320375,0,null);var inst_320377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320375,1,null);var state_320463__$1 = (function (){var statearr_320514 = state_320463;(statearr_320514[27] = inst_320376);
return statearr_320514;
})();if(cljs.core.truth_(inst_320377))
{var statearr_320515_320580 = state_320463__$1;(statearr_320515_320580[1] = 22);
} else
{var statearr_320516_320581 = state_320463__$1;(statearr_320516_320581[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 21))
{var inst_320386 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320517_320582 = state_320463__$1;(statearr_320517_320582[2] = inst_320386);
(statearr_320517_320582[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 22))
{var inst_320376 = (state_320463[27]);var inst_320379 = cljs.core.async.close_BANG_(inst_320376);var state_320463__$1 = state_320463;var statearr_320518_320583 = state_320463__$1;(statearr_320518_320583[2] = inst_320379);
(statearr_320518_320583[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 23))
{var state_320463__$1 = state_320463;var statearr_320519_320584 = state_320463__$1;(statearr_320519_320584[2] = null);
(statearr_320519_320584[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 24))
{var inst_320365 = (state_320463[25]);var inst_320382 = (state_320463[2]);var inst_320383 = cljs.core.next(inst_320365);var inst_320345 = inst_320383;var inst_320346 = null;var inst_320347 = 0;var inst_320348 = 0;var state_320463__$1 = (function (){var statearr_320520 = state_320463;(statearr_320520[28] = inst_320382);
(statearr_320520[14] = inst_320345);
(statearr_320520[15] = inst_320346);
(statearr_320520[16] = inst_320347);
(statearr_320520[17] = inst_320348);
return statearr_320520;
})();var statearr_320521_320585 = state_320463__$1;(statearr_320521_320585[2] = null);
(statearr_320521_320585[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 25))
{var inst_320407 = (state_320463[12]);var inst_320406 = (state_320463[13]);var inst_320409 = (inst_320407 < inst_320406);var inst_320410 = inst_320409;var state_320463__$1 = state_320463;if(cljs.core.truth_(inst_320410))
{var statearr_320522_320586 = state_320463__$1;(statearr_320522_320586[1] = 27);
} else
{var statearr_320523_320587 = state_320463__$1;(statearr_320523_320587[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 26))
{var inst_320454 = (state_320463[2]);var state_320463__$1 = (function (){var statearr_320524 = state_320463;(statearr_320524[29] = inst_320454);
return statearr_320524;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_320463__$1,42,dchan);
} else
{if((state_val_320464 === 27))
{var inst_320405 = (state_320463[10]);var inst_320407 = (state_320463[12]);var inst_320412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_320405,inst_320407);var state_320463__$1 = (function (){var statearr_320525 = state_320463;(statearr_320525[7] = inst_320412);
return statearr_320525;
})();var statearr_320526_320588 = state_320463__$1;(statearr_320526_320588[2] = null);
(statearr_320526_320588[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 28))
{var inst_320425 = (state_320463[9]);var inst_320404 = (state_320463[11]);var inst_320425__$1 = cljs.core.seq(inst_320404);var state_320463__$1 = (function (){var statearr_320530 = state_320463;(statearr_320530[9] = inst_320425__$1);
return statearr_320530;
})();if(inst_320425__$1)
{var statearr_320531_320589 = state_320463__$1;(statearr_320531_320589[1] = 33);
} else
{var statearr_320532_320590 = state_320463__$1;(statearr_320532_320590[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 29))
{var inst_320452 = (state_320463[2]);var state_320463__$1 = state_320463;var statearr_320533_320591 = state_320463__$1;(statearr_320533_320591[2] = inst_320452);
(statearr_320533_320591[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 30))
{var inst_320405 = (state_320463[10]);var inst_320404 = (state_320463[11]);var inst_320407 = (state_320463[12]);var inst_320406 = (state_320463[13]);var inst_320421 = (state_320463[2]);var inst_320422 = (inst_320407 + 1);var tmp320527 = inst_320405;var tmp320528 = inst_320404;var tmp320529 = inst_320406;var inst_320404__$1 = tmp320528;var inst_320405__$1 = tmp320527;var inst_320406__$1 = tmp320529;var inst_320407__$1 = inst_320422;var state_320463__$1 = (function (){var statearr_320534 = state_320463;(statearr_320534[10] = inst_320405__$1);
(statearr_320534[11] = inst_320404__$1);
(statearr_320534[12] = inst_320407__$1);
(statearr_320534[13] = inst_320406__$1);
(statearr_320534[30] = inst_320421);
return statearr_320534;
})();var statearr_320535_320592 = state_320463__$1;(statearr_320535_320592[2] = null);
(statearr_320535_320592[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320464 === 31))
{var inst_320412 = (state_320463[7]);var inst_320413 = (state_320463[2]);var inst_320414 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_320415 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_320412);var state_320463__$1 = (function (){var statearr_320536 = state_320463;(statearr_320536[31] = inst_320413);
(statearr_320536[32] = inst_320414);
return statearr_320536;
})();var statearr_320537_320593 = state_320463__$1;(statearr_320537_320593[2] = inst_320415);
cljs.core.async.impl.ioc_helpers.process_exception(state_320463__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_320541 = (new Array(33));(statearr_320541[0] = state_machine__10214__auto__);
(statearr_320541[1] = 1);
return statearr_320541;
});
var state_machine__10214__auto____1 = (function (state_320463){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_320463);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e320542){if((e320542 instanceof Object))
{var ex__10217__auto__ = e320542;var statearr_320543_320594 = state_320463;(statearr_320543_320594[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_320463);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e320542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__320595 = state_320463;
state_320463 = G__320595;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_320463){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_320463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_320544 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_320544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___320545);
return statearr_320544;
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
cljs.core.async.Mix = (function (){var obj320597 = {};return obj320597;
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
;var m = (function (){if(typeof cljs.core.async.t320707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t320707 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta320708){
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
this.meta320708 = meta320708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t320707.cljs$lang$type = true;
cljs.core.async.t320707.cljs$lang$ctorStr = "cljs.core.async/t320707";
cljs.core.async.t320707.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t320707");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t320707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_320709){var self__ = this;
var _320709__$1 = this;return self__.meta320708;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t320707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_320709,meta320708__$1){var self__ = this;
var _320709__$1 = this;return (new cljs.core.async.t320707(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta320708__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t320707 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t320707(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta320708){return (new cljs.core.async.t320707(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta320708));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t320707(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___320816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_320774){var state_val_320775 = (state_320774[1]);if((state_val_320775 === 1))
{var inst_320713 = (state_320774[7]);var inst_320713__$1 = calc_state();var inst_320714 = cljs.core.seq_QMARK_(inst_320713__$1);var state_320774__$1 = (function (){var statearr_320776 = state_320774;(statearr_320776[7] = inst_320713__$1);
return statearr_320776;
})();if(inst_320714)
{var statearr_320777_320817 = state_320774__$1;(statearr_320777_320817[1] = 2);
} else
{var statearr_320778_320818 = state_320774__$1;(statearr_320778_320818[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 2))
{var inst_320713 = (state_320774[7]);var inst_320716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_320713);var state_320774__$1 = state_320774;var statearr_320779_320819 = state_320774__$1;(statearr_320779_320819[2] = inst_320716);
(statearr_320779_320819[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 3))
{var inst_320713 = (state_320774[7]);var state_320774__$1 = state_320774;var statearr_320780_320820 = state_320774__$1;(statearr_320780_320820[2] = inst_320713);
(statearr_320780_320820[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 4))
{var inst_320713 = (state_320774[7]);var inst_320719 = (state_320774[2]);var inst_320720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320719,cljs.core.constant$keyword$309);var inst_320721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320719,cljs.core.constant$keyword$308);var inst_320722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320719,cljs.core.constant$keyword$307);var inst_320723 = inst_320713;var state_320774__$1 = (function (){var statearr_320781 = state_320774;(statearr_320781[8] = inst_320720);
(statearr_320781[9] = inst_320721);
(statearr_320781[10] = inst_320722);
(statearr_320781[11] = inst_320723);
return statearr_320781;
})();var statearr_320782_320821 = state_320774__$1;(statearr_320782_320821[2] = null);
(statearr_320782_320821[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 5))
{var inst_320723 = (state_320774[11]);var inst_320726 = cljs.core.seq_QMARK_(inst_320723);var state_320774__$1 = state_320774;if(inst_320726)
{var statearr_320783_320822 = state_320774__$1;(statearr_320783_320822[1] = 7);
} else
{var statearr_320784_320823 = state_320774__$1;(statearr_320784_320823[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 6))
{var inst_320772 = (state_320774[2]);var state_320774__$1 = state_320774;return cljs.core.async.impl.ioc_helpers.return_chan(state_320774__$1,inst_320772);
} else
{if((state_val_320775 === 7))
{var inst_320723 = (state_320774[11]);var inst_320728 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_320723);var state_320774__$1 = state_320774;var statearr_320785_320824 = state_320774__$1;(statearr_320785_320824[2] = inst_320728);
(statearr_320785_320824[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 8))
{var inst_320723 = (state_320774[11]);var state_320774__$1 = state_320774;var statearr_320786_320825 = state_320774__$1;(statearr_320786_320825[2] = inst_320723);
(statearr_320786_320825[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 9))
{var inst_320731 = (state_320774[12]);var inst_320731__$1 = (state_320774[2]);var inst_320732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320731__$1,cljs.core.constant$keyword$309);var inst_320733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320731__$1,cljs.core.constant$keyword$308);var inst_320734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_320731__$1,cljs.core.constant$keyword$307);var state_320774__$1 = (function (){var statearr_320787 = state_320774;(statearr_320787[13] = inst_320734);
(statearr_320787[12] = inst_320731__$1);
(statearr_320787[14] = inst_320733);
return statearr_320787;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_320774__$1,10,inst_320732);
} else
{if((state_val_320775 === 10))
{var inst_320738 = (state_320774[15]);var inst_320739 = (state_320774[16]);var inst_320737 = (state_320774[2]);var inst_320738__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320737,0,null);var inst_320739__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_320737,1,null);var inst_320740 = (inst_320738__$1 == null);var inst_320741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_320739__$1,change);var inst_320742 = (inst_320740) || (inst_320741);var state_320774__$1 = (function (){var statearr_320788 = state_320774;(statearr_320788[15] = inst_320738__$1);
(statearr_320788[16] = inst_320739__$1);
return statearr_320788;
})();if(cljs.core.truth_(inst_320742))
{var statearr_320789_320826 = state_320774__$1;(statearr_320789_320826[1] = 11);
} else
{var statearr_320790_320827 = state_320774__$1;(statearr_320790_320827[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 11))
{var inst_320738 = (state_320774[15]);var inst_320744 = (inst_320738 == null);var state_320774__$1 = state_320774;if(cljs.core.truth_(inst_320744))
{var statearr_320791_320828 = state_320774__$1;(statearr_320791_320828[1] = 14);
} else
{var statearr_320792_320829 = state_320774__$1;(statearr_320792_320829[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 12))
{var inst_320734 = (state_320774[13]);var inst_320739 = (state_320774[16]);var inst_320753 = (state_320774[17]);var inst_320753__$1 = (inst_320734.cljs$core$IFn$_invoke$arity$1 ? inst_320734.cljs$core$IFn$_invoke$arity$1(inst_320739) : inst_320734.call(null,inst_320739));var state_320774__$1 = (function (){var statearr_320793 = state_320774;(statearr_320793[17] = inst_320753__$1);
return statearr_320793;
})();if(cljs.core.truth_(inst_320753__$1))
{var statearr_320794_320830 = state_320774__$1;(statearr_320794_320830[1] = 17);
} else
{var statearr_320795_320831 = state_320774__$1;(statearr_320795_320831[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 13))
{var inst_320770 = (state_320774[2]);var state_320774__$1 = state_320774;var statearr_320796_320832 = state_320774__$1;(statearr_320796_320832[2] = inst_320770);
(statearr_320796_320832[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 14))
{var inst_320739 = (state_320774[16]);var inst_320746 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_320739);var state_320774__$1 = state_320774;var statearr_320797_320833 = state_320774__$1;(statearr_320797_320833[2] = inst_320746);
(statearr_320797_320833[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 15))
{var state_320774__$1 = state_320774;var statearr_320798_320834 = state_320774__$1;(statearr_320798_320834[2] = null);
(statearr_320798_320834[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 16))
{var inst_320749 = (state_320774[2]);var inst_320750 = calc_state();var inst_320723 = inst_320750;var state_320774__$1 = (function (){var statearr_320799 = state_320774;(statearr_320799[18] = inst_320749);
(statearr_320799[11] = inst_320723);
return statearr_320799;
})();var statearr_320800_320835 = state_320774__$1;(statearr_320800_320835[2] = null);
(statearr_320800_320835[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 17))
{var inst_320753 = (state_320774[17]);var state_320774__$1 = state_320774;var statearr_320801_320836 = state_320774__$1;(statearr_320801_320836[2] = inst_320753);
(statearr_320801_320836[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 18))
{var inst_320734 = (state_320774[13]);var inst_320739 = (state_320774[16]);var inst_320733 = (state_320774[14]);var inst_320756 = cljs.core.empty_QMARK_(inst_320734);var inst_320757 = (inst_320733.cljs$core$IFn$_invoke$arity$1 ? inst_320733.cljs$core$IFn$_invoke$arity$1(inst_320739) : inst_320733.call(null,inst_320739));var inst_320758 = cljs.core.not(inst_320757);var inst_320759 = (inst_320756) && (inst_320758);var state_320774__$1 = state_320774;var statearr_320802_320837 = state_320774__$1;(statearr_320802_320837[2] = inst_320759);
(statearr_320802_320837[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 19))
{var inst_320761 = (state_320774[2]);var state_320774__$1 = state_320774;if(cljs.core.truth_(inst_320761))
{var statearr_320803_320838 = state_320774__$1;(statearr_320803_320838[1] = 20);
} else
{var statearr_320804_320839 = state_320774__$1;(statearr_320804_320839[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 20))
{var inst_320738 = (state_320774[15]);var state_320774__$1 = state_320774;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_320774__$1,23,out,inst_320738);
} else
{if((state_val_320775 === 21))
{var state_320774__$1 = state_320774;var statearr_320805_320840 = state_320774__$1;(statearr_320805_320840[2] = null);
(statearr_320805_320840[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 22))
{var inst_320731 = (state_320774[12]);var inst_320767 = (state_320774[2]);var inst_320723 = inst_320731;var state_320774__$1 = (function (){var statearr_320806 = state_320774;(statearr_320806[19] = inst_320767);
(statearr_320806[11] = inst_320723);
return statearr_320806;
})();var statearr_320807_320841 = state_320774__$1;(statearr_320807_320841[2] = null);
(statearr_320807_320841[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_320775 === 23))
{var inst_320764 = (state_320774[2]);var state_320774__$1 = state_320774;var statearr_320808_320842 = state_320774__$1;(statearr_320808_320842[2] = inst_320764);
(statearr_320808_320842[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_320812 = (new Array(20));(statearr_320812[0] = state_machine__10214__auto__);
(statearr_320812[1] = 1);
return statearr_320812;
});
var state_machine__10214__auto____1 = (function (state_320774){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_320774);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e320813){if((e320813 instanceof Object))
{var ex__10217__auto__ = e320813;var statearr_320814_320843 = state_320774;(statearr_320814_320843[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_320774);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e320813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__320844 = state_320774;
state_320774 = G__320844;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_320774){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_320774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_320815 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_320815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___320816);
return statearr_320815;
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
cljs.core.async.Pub = (function (){var obj320846 = {};return obj320846;
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
return (function (p1__320847_SHARP_){if(cljs.core.truth_((p1__320847_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__320847_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__320847_SHARP_.call(null,topic))))
{return p1__320847_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__320847_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t320972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t320972 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta320973){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta320973 = meta320973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t320972.cljs$lang$type = true;
cljs.core.async.t320972.cljs$lang$ctorStr = "cljs.core.async/t320972";
cljs.core.async.t320972.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t320972");
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t320972.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t320972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_320974){var self__ = this;
var _320974__$1 = this;return self__.meta320973;
});})(mults,ensure_mult))
;
cljs.core.async.t320972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_320974,meta320973__$1){var self__ = this;
var _320974__$1 = this;return (new cljs.core.async.t320972(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta320973__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t320972 = ((function (mults,ensure_mult){
return (function __GT_t320972(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta320973){return (new cljs.core.async.t320972(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta320973));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t320972(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___321096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321048){var state_val_321049 = (state_321048[1]);if((state_val_321049 === 1))
{var state_321048__$1 = state_321048;var statearr_321050_321097 = state_321048__$1;(statearr_321050_321097[2] = null);
(statearr_321050_321097[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 2))
{var state_321048__$1 = state_321048;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321048__$1,4,ch);
} else
{if((state_val_321049 === 3))
{var inst_321046 = (state_321048[2]);var state_321048__$1 = state_321048;return cljs.core.async.impl.ioc_helpers.return_chan(state_321048__$1,inst_321046);
} else
{if((state_val_321049 === 4))
{var inst_320977 = (state_321048[7]);var inst_320977__$1 = (state_321048[2]);var inst_320978 = (inst_320977__$1 == null);var state_321048__$1 = (function (){var statearr_321051 = state_321048;(statearr_321051[7] = inst_320977__$1);
return statearr_321051;
})();if(cljs.core.truth_(inst_320978))
{var statearr_321052_321098 = state_321048__$1;(statearr_321052_321098[1] = 5);
} else
{var statearr_321053_321099 = state_321048__$1;(statearr_321053_321099[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 5))
{var inst_320984 = cljs.core.deref(mults);var inst_320985 = cljs.core.vals(inst_320984);var inst_320986 = cljs.core.seq(inst_320985);var inst_320987 = inst_320986;var inst_320988 = null;var inst_320989 = 0;var inst_320990 = 0;var state_321048__$1 = (function (){var statearr_321054 = state_321048;(statearr_321054[8] = inst_320988);
(statearr_321054[9] = inst_320987);
(statearr_321054[10] = inst_320989);
(statearr_321054[11] = inst_320990);
return statearr_321054;
})();var statearr_321055_321100 = state_321048__$1;(statearr_321055_321100[2] = null);
(statearr_321055_321100[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 6))
{var inst_320977 = (state_321048[7]);var inst_321025 = (state_321048[12]);var inst_321027 = (state_321048[13]);var inst_321025__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_320977) : topic_fn.call(null,inst_320977));var inst_321026 = cljs.core.deref(mults);var inst_321027__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_321026,inst_321025__$1);var state_321048__$1 = (function (){var statearr_321056 = state_321048;(statearr_321056[12] = inst_321025__$1);
(statearr_321056[13] = inst_321027__$1);
return statearr_321056;
})();if(cljs.core.truth_(inst_321027__$1))
{var statearr_321057_321101 = state_321048__$1;(statearr_321057_321101[1] = 19);
} else
{var statearr_321058_321102 = state_321048__$1;(statearr_321058_321102[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 7))
{var inst_321044 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321059_321103 = state_321048__$1;(statearr_321059_321103[2] = inst_321044);
(statearr_321059_321103[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 8))
{var inst_320989 = (state_321048[10]);var inst_320990 = (state_321048[11]);var inst_320992 = (inst_320990 < inst_320989);var inst_320993 = inst_320992;var state_321048__$1 = state_321048;if(cljs.core.truth_(inst_320993))
{var statearr_321063_321104 = state_321048__$1;(statearr_321063_321104[1] = 10);
} else
{var statearr_321064_321105 = state_321048__$1;(statearr_321064_321105[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 9))
{var inst_321023 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321065_321106 = state_321048__$1;(statearr_321065_321106[2] = inst_321023);
(statearr_321065_321106[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 10))
{var inst_320988 = (state_321048[8]);var inst_320987 = (state_321048[9]);var inst_320989 = (state_321048[10]);var inst_320990 = (state_321048[11]);var inst_320995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_320988,inst_320990);var inst_320996 = cljs.core.async.muxch_STAR_(inst_320995);var inst_320997 = cljs.core.async.close_BANG_(inst_320996);var inst_320998 = (inst_320990 + 1);var tmp321060 = inst_320988;var tmp321061 = inst_320987;var tmp321062 = inst_320989;var inst_320987__$1 = tmp321061;var inst_320988__$1 = tmp321060;var inst_320989__$1 = tmp321062;var inst_320990__$1 = inst_320998;var state_321048__$1 = (function (){var statearr_321066 = state_321048;(statearr_321066[8] = inst_320988__$1);
(statearr_321066[9] = inst_320987__$1);
(statearr_321066[10] = inst_320989__$1);
(statearr_321066[14] = inst_320997);
(statearr_321066[11] = inst_320990__$1);
return statearr_321066;
})();var statearr_321067_321107 = state_321048__$1;(statearr_321067_321107[2] = null);
(statearr_321067_321107[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 11))
{var inst_320987 = (state_321048[9]);var inst_321001 = (state_321048[15]);var inst_321001__$1 = cljs.core.seq(inst_320987);var state_321048__$1 = (function (){var statearr_321068 = state_321048;(statearr_321068[15] = inst_321001__$1);
return statearr_321068;
})();if(inst_321001__$1)
{var statearr_321069_321108 = state_321048__$1;(statearr_321069_321108[1] = 13);
} else
{var statearr_321070_321109 = state_321048__$1;(statearr_321070_321109[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 12))
{var inst_321021 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321071_321110 = state_321048__$1;(statearr_321071_321110[2] = inst_321021);
(statearr_321071_321110[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 13))
{var inst_321001 = (state_321048[15]);var inst_321003 = cljs.core.chunked_seq_QMARK_(inst_321001);var state_321048__$1 = state_321048;if(inst_321003)
{var statearr_321072_321111 = state_321048__$1;(statearr_321072_321111[1] = 16);
} else
{var statearr_321073_321112 = state_321048__$1;(statearr_321073_321112[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 14))
{var state_321048__$1 = state_321048;var statearr_321074_321113 = state_321048__$1;(statearr_321074_321113[2] = null);
(statearr_321074_321113[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 15))
{var inst_321019 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321075_321114 = state_321048__$1;(statearr_321075_321114[2] = inst_321019);
(statearr_321075_321114[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 16))
{var inst_321001 = (state_321048[15]);var inst_321005 = cljs.core.chunk_first(inst_321001);var inst_321006 = cljs.core.chunk_rest(inst_321001);var inst_321007 = cljs.core.count(inst_321005);var inst_320987 = inst_321006;var inst_320988 = inst_321005;var inst_320989 = inst_321007;var inst_320990 = 0;var state_321048__$1 = (function (){var statearr_321076 = state_321048;(statearr_321076[8] = inst_320988);
(statearr_321076[9] = inst_320987);
(statearr_321076[10] = inst_320989);
(statearr_321076[11] = inst_320990);
return statearr_321076;
})();var statearr_321077_321115 = state_321048__$1;(statearr_321077_321115[2] = null);
(statearr_321077_321115[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 17))
{var inst_321001 = (state_321048[15]);var inst_321010 = cljs.core.first(inst_321001);var inst_321011 = cljs.core.async.muxch_STAR_(inst_321010);var inst_321012 = cljs.core.async.close_BANG_(inst_321011);var inst_321013 = cljs.core.next(inst_321001);var inst_320987 = inst_321013;var inst_320988 = null;var inst_320989 = 0;var inst_320990 = 0;var state_321048__$1 = (function (){var statearr_321078 = state_321048;(statearr_321078[8] = inst_320988);
(statearr_321078[9] = inst_320987);
(statearr_321078[10] = inst_320989);
(statearr_321078[16] = inst_321012);
(statearr_321078[11] = inst_320990);
return statearr_321078;
})();var statearr_321079_321116 = state_321048__$1;(statearr_321079_321116[2] = null);
(statearr_321079_321116[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 18))
{var inst_321016 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321080_321117 = state_321048__$1;(statearr_321080_321117[2] = inst_321016);
(statearr_321080_321117[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 19))
{var state_321048__$1 = state_321048;var statearr_321081_321118 = state_321048__$1;(statearr_321081_321118[2] = null);
(statearr_321081_321118[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 20))
{var state_321048__$1 = state_321048;var statearr_321082_321119 = state_321048__$1;(statearr_321082_321119[2] = null);
(statearr_321082_321119[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 21))
{var inst_321041 = (state_321048[2]);var state_321048__$1 = (function (){var statearr_321083 = state_321048;(statearr_321083[17] = inst_321041);
return statearr_321083;
})();var statearr_321084_321120 = state_321048__$1;(statearr_321084_321120[2] = null);
(statearr_321084_321120[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 22))
{var inst_321038 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321085_321121 = state_321048__$1;(statearr_321085_321121[2] = inst_321038);
(statearr_321085_321121[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 23))
{var inst_321025 = (state_321048[12]);var inst_321029 = (state_321048[2]);var inst_321030 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_321025);var state_321048__$1 = (function (){var statearr_321086 = state_321048;(statearr_321086[18] = inst_321029);
return statearr_321086;
})();var statearr_321087_321122 = state_321048__$1;(statearr_321087_321122[2] = inst_321030);
cljs.core.async.impl.ioc_helpers.process_exception(state_321048__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321049 === 24))
{var inst_320977 = (state_321048[7]);var inst_321027 = (state_321048[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_321048,23,Object,null,22);var inst_321034 = cljs.core.async.muxch_STAR_(inst_321027);var state_321048__$1 = state_321048;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321048__$1,25,inst_321034,inst_320977);
} else
{if((state_val_321049 === 25))
{var inst_321036 = (state_321048[2]);var state_321048__$1 = state_321048;var statearr_321088_321123 = state_321048__$1;(statearr_321088_321123[2] = inst_321036);
cljs.core.async.impl.ioc_helpers.process_exception(state_321048__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_321092 = (new Array(19));(statearr_321092[0] = state_machine__10214__auto__);
(statearr_321092[1] = 1);
return statearr_321092;
});
var state_machine__10214__auto____1 = (function (state_321048){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321048);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321093){if((e321093 instanceof Object))
{var ex__10217__auto__ = e321093;var statearr_321094_321124 = state_321048;(statearr_321094_321124[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321048);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321125 = state_321048;
state_321048 = G__321125;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321048){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321095 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321096);
return statearr_321095;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___321262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321232){var state_val_321233 = (state_321232[1]);if((state_val_321233 === 1))
{var state_321232__$1 = state_321232;var statearr_321234_321263 = state_321232__$1;(statearr_321234_321263[2] = null);
(statearr_321234_321263[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 2))
{var inst_321195 = cljs.core.reset_BANG_(dctr,cnt);var inst_321196 = 0;var state_321232__$1 = (function (){var statearr_321235 = state_321232;(statearr_321235[7] = inst_321195);
(statearr_321235[8] = inst_321196);
return statearr_321235;
})();var statearr_321236_321264 = state_321232__$1;(statearr_321236_321264[2] = null);
(statearr_321236_321264[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 3))
{var inst_321230 = (state_321232[2]);var state_321232__$1 = state_321232;return cljs.core.async.impl.ioc_helpers.return_chan(state_321232__$1,inst_321230);
} else
{if((state_val_321233 === 4))
{var inst_321196 = (state_321232[8]);var inst_321198 = (inst_321196 < cnt);var state_321232__$1 = state_321232;if(cljs.core.truth_(inst_321198))
{var statearr_321237_321265 = state_321232__$1;(statearr_321237_321265[1] = 6);
} else
{var statearr_321238_321266 = state_321232__$1;(statearr_321238_321266[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 5))
{var inst_321216 = (state_321232[2]);var state_321232__$1 = (function (){var statearr_321239 = state_321232;(statearr_321239[9] = inst_321216);
return statearr_321239;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321232__$1,12,dchan);
} else
{if((state_val_321233 === 6))
{var state_321232__$1 = state_321232;var statearr_321240_321267 = state_321232__$1;(statearr_321240_321267[2] = null);
(statearr_321240_321267[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 7))
{var state_321232__$1 = state_321232;var statearr_321241_321268 = state_321232__$1;(statearr_321241_321268[2] = null);
(statearr_321241_321268[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 8))
{var inst_321214 = (state_321232[2]);var state_321232__$1 = state_321232;var statearr_321242_321269 = state_321232__$1;(statearr_321242_321269[2] = inst_321214);
(statearr_321242_321269[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 9))
{var inst_321196 = (state_321232[8]);var inst_321209 = (state_321232[2]);var inst_321210 = (inst_321196 + 1);var inst_321196__$1 = inst_321210;var state_321232__$1 = (function (){var statearr_321243 = state_321232;(statearr_321243[10] = inst_321209);
(statearr_321243[8] = inst_321196__$1);
return statearr_321243;
})();var statearr_321244_321270 = state_321232__$1;(statearr_321244_321270[2] = null);
(statearr_321244_321270[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 10))
{var inst_321200 = (state_321232[2]);var inst_321201 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_321232__$1 = (function (){var statearr_321245 = state_321232;(statearr_321245[11] = inst_321200);
return statearr_321245;
})();var statearr_321246_321271 = state_321232__$1;(statearr_321246_321271[2] = inst_321201);
cljs.core.async.impl.ioc_helpers.process_exception(state_321232__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 11))
{var inst_321196 = (state_321232[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_321232,10,Object,null,9);var inst_321205 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_321196) : chs__$1.call(null,inst_321196));var inst_321206 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_321196) : done.call(null,inst_321196));var inst_321207 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_321205,inst_321206);var state_321232__$1 = state_321232;var statearr_321247_321272 = state_321232__$1;(statearr_321247_321272[2] = inst_321207);
cljs.core.async.impl.ioc_helpers.process_exception(state_321232__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 12))
{var inst_321218 = (state_321232[12]);var inst_321218__$1 = (state_321232[2]);var inst_321219 = cljs.core.some(cljs.core.nil_QMARK_,inst_321218__$1);var state_321232__$1 = (function (){var statearr_321248 = state_321232;(statearr_321248[12] = inst_321218__$1);
return statearr_321248;
})();if(cljs.core.truth_(inst_321219))
{var statearr_321249_321273 = state_321232__$1;(statearr_321249_321273[1] = 13);
} else
{var statearr_321250_321274 = state_321232__$1;(statearr_321250_321274[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 13))
{var inst_321221 = cljs.core.async.close_BANG_(out);var state_321232__$1 = state_321232;var statearr_321251_321275 = state_321232__$1;(statearr_321251_321275[2] = inst_321221);
(statearr_321251_321275[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 14))
{var inst_321218 = (state_321232[12]);var inst_321223 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_321218);var state_321232__$1 = state_321232;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321232__$1,16,out,inst_321223);
} else
{if((state_val_321233 === 15))
{var inst_321228 = (state_321232[2]);var state_321232__$1 = state_321232;var statearr_321252_321276 = state_321232__$1;(statearr_321252_321276[2] = inst_321228);
(statearr_321252_321276[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321233 === 16))
{var inst_321225 = (state_321232[2]);var state_321232__$1 = (function (){var statearr_321253 = state_321232;(statearr_321253[13] = inst_321225);
return statearr_321253;
})();var statearr_321254_321277 = state_321232__$1;(statearr_321254_321277[2] = null);
(statearr_321254_321277[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_321258 = (new Array(14));(statearr_321258[0] = state_machine__10214__auto__);
(statearr_321258[1] = 1);
return statearr_321258;
});
var state_machine__10214__auto____1 = (function (state_321232){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321232);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321259){if((e321259 instanceof Object))
{var ex__10217__auto__ = e321259;var statearr_321260_321278 = state_321232;(statearr_321260_321278[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321232);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321279 = state_321232;
state_321232 = G__321279;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321232){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321261 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321262);
return statearr_321261;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___321387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321363){var state_val_321364 = (state_321363[1]);if((state_val_321364 === 1))
{var inst_321334 = cljs.core.vec(chs);var inst_321335 = inst_321334;var state_321363__$1 = (function (){var statearr_321365 = state_321363;(statearr_321365[7] = inst_321335);
return statearr_321365;
})();var statearr_321366_321388 = state_321363__$1;(statearr_321366_321388[2] = null);
(statearr_321366_321388[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 2))
{var inst_321335 = (state_321363[7]);var inst_321337 = cljs.core.count(inst_321335);var inst_321338 = (inst_321337 > 0);var state_321363__$1 = state_321363;if(cljs.core.truth_(inst_321338))
{var statearr_321367_321389 = state_321363__$1;(statearr_321367_321389[1] = 4);
} else
{var statearr_321368_321390 = state_321363__$1;(statearr_321368_321390[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 3))
{var inst_321361 = (state_321363[2]);var state_321363__$1 = state_321363;return cljs.core.async.impl.ioc_helpers.return_chan(state_321363__$1,inst_321361);
} else
{if((state_val_321364 === 4))
{var inst_321335 = (state_321363[7]);var state_321363__$1 = state_321363;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_321363__$1,7,inst_321335);
} else
{if((state_val_321364 === 5))
{var inst_321357 = cljs.core.async.close_BANG_(out);var state_321363__$1 = state_321363;var statearr_321369_321391 = state_321363__$1;(statearr_321369_321391[2] = inst_321357);
(statearr_321369_321391[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 6))
{var inst_321359 = (state_321363[2]);var state_321363__$1 = state_321363;var statearr_321370_321392 = state_321363__$1;(statearr_321370_321392[2] = inst_321359);
(statearr_321370_321392[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 7))
{var inst_321343 = (state_321363[8]);var inst_321342 = (state_321363[9]);var inst_321342__$1 = (state_321363[2]);var inst_321343__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_321342__$1,0,null);var inst_321344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_321342__$1,1,null);var inst_321345 = (inst_321343__$1 == null);var state_321363__$1 = (function (){var statearr_321371 = state_321363;(statearr_321371[10] = inst_321344);
(statearr_321371[8] = inst_321343__$1);
(statearr_321371[9] = inst_321342__$1);
return statearr_321371;
})();if(cljs.core.truth_(inst_321345))
{var statearr_321372_321393 = state_321363__$1;(statearr_321372_321393[1] = 8);
} else
{var statearr_321373_321394 = state_321363__$1;(statearr_321373_321394[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 8))
{var inst_321335 = (state_321363[7]);var inst_321344 = (state_321363[10]);var inst_321343 = (state_321363[8]);var inst_321342 = (state_321363[9]);var inst_321347 = (function (){var c = inst_321344;var v = inst_321343;var vec__321340 = inst_321342;var cs = inst_321335;return ((function (c,v,vec__321340,cs,inst_321335,inst_321344,inst_321343,inst_321342,state_val_321364){
return (function (p1__321280_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__321280_SHARP_);
});
;})(c,v,vec__321340,cs,inst_321335,inst_321344,inst_321343,inst_321342,state_val_321364))
})();var inst_321348 = cljs.core.filterv(inst_321347,inst_321335);var inst_321335__$1 = inst_321348;var state_321363__$1 = (function (){var statearr_321374 = state_321363;(statearr_321374[7] = inst_321335__$1);
return statearr_321374;
})();var statearr_321375_321395 = state_321363__$1;(statearr_321375_321395[2] = null);
(statearr_321375_321395[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 9))
{var inst_321343 = (state_321363[8]);var state_321363__$1 = state_321363;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321363__$1,11,out,inst_321343);
} else
{if((state_val_321364 === 10))
{var inst_321355 = (state_321363[2]);var state_321363__$1 = state_321363;var statearr_321377_321396 = state_321363__$1;(statearr_321377_321396[2] = inst_321355);
(statearr_321377_321396[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321364 === 11))
{var inst_321335 = (state_321363[7]);var inst_321352 = (state_321363[2]);var tmp321376 = inst_321335;var inst_321335__$1 = tmp321376;var state_321363__$1 = (function (){var statearr_321378 = state_321363;(statearr_321378[7] = inst_321335__$1);
(statearr_321378[11] = inst_321352);
return statearr_321378;
})();var statearr_321379_321397 = state_321363__$1;(statearr_321379_321397[2] = null);
(statearr_321379_321397[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_321383 = (new Array(12));(statearr_321383[0] = state_machine__10214__auto__);
(statearr_321383[1] = 1);
return statearr_321383;
});
var state_machine__10214__auto____1 = (function (state_321363){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321363);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321384){if((e321384 instanceof Object))
{var ex__10217__auto__ = e321384;var statearr_321385_321398 = state_321363;(statearr_321385_321398[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321363);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321399 = state_321363;
state_321363 = G__321399;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321363){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321386 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321387);
return statearr_321386;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___321492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321469){var state_val_321470 = (state_321469[1]);if((state_val_321470 === 1))
{var inst_321446 = 0;var state_321469__$1 = (function (){var statearr_321471 = state_321469;(statearr_321471[7] = inst_321446);
return statearr_321471;
})();var statearr_321472_321493 = state_321469__$1;(statearr_321472_321493[2] = null);
(statearr_321472_321493[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 2))
{var inst_321446 = (state_321469[7]);var inst_321448 = (inst_321446 < n);var state_321469__$1 = state_321469;if(cljs.core.truth_(inst_321448))
{var statearr_321473_321494 = state_321469__$1;(statearr_321473_321494[1] = 4);
} else
{var statearr_321474_321495 = state_321469__$1;(statearr_321474_321495[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 3))
{var inst_321466 = (state_321469[2]);var inst_321467 = cljs.core.async.close_BANG_(out);var state_321469__$1 = (function (){var statearr_321475 = state_321469;(statearr_321475[8] = inst_321466);
return statearr_321475;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_321469__$1,inst_321467);
} else
{if((state_val_321470 === 4))
{var state_321469__$1 = state_321469;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321469__$1,7,ch);
} else
{if((state_val_321470 === 5))
{var state_321469__$1 = state_321469;var statearr_321476_321496 = state_321469__$1;(statearr_321476_321496[2] = null);
(statearr_321476_321496[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 6))
{var inst_321464 = (state_321469[2]);var state_321469__$1 = state_321469;var statearr_321477_321497 = state_321469__$1;(statearr_321477_321497[2] = inst_321464);
(statearr_321477_321497[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 7))
{var inst_321451 = (state_321469[9]);var inst_321451__$1 = (state_321469[2]);var inst_321452 = (inst_321451__$1 == null);var inst_321453 = cljs.core.not(inst_321452);var state_321469__$1 = (function (){var statearr_321478 = state_321469;(statearr_321478[9] = inst_321451__$1);
return statearr_321478;
})();if(inst_321453)
{var statearr_321479_321498 = state_321469__$1;(statearr_321479_321498[1] = 8);
} else
{var statearr_321480_321499 = state_321469__$1;(statearr_321480_321499[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 8))
{var inst_321451 = (state_321469[9]);var state_321469__$1 = state_321469;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321469__$1,11,out,inst_321451);
} else
{if((state_val_321470 === 9))
{var state_321469__$1 = state_321469;var statearr_321481_321500 = state_321469__$1;(statearr_321481_321500[2] = null);
(statearr_321481_321500[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 10))
{var inst_321461 = (state_321469[2]);var state_321469__$1 = state_321469;var statearr_321482_321501 = state_321469__$1;(statearr_321482_321501[2] = inst_321461);
(statearr_321482_321501[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321470 === 11))
{var inst_321446 = (state_321469[7]);var inst_321456 = (state_321469[2]);var inst_321457 = (inst_321446 + 1);var inst_321446__$1 = inst_321457;var state_321469__$1 = (function (){var statearr_321483 = state_321469;(statearr_321483[10] = inst_321456);
(statearr_321483[7] = inst_321446__$1);
return statearr_321483;
})();var statearr_321484_321502 = state_321469__$1;(statearr_321484_321502[2] = null);
(statearr_321484_321502[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_321488 = (new Array(11));(statearr_321488[0] = state_machine__10214__auto__);
(statearr_321488[1] = 1);
return statearr_321488;
});
var state_machine__10214__auto____1 = (function (state_321469){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321469);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321489){if((e321489 instanceof Object))
{var ex__10217__auto__ = e321489;var statearr_321490_321503 = state_321469;(statearr_321490_321503[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321469);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321504 = state_321469;
state_321469 = G__321504;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321469){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321491 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321492);
return statearr_321491;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___321601 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321576){var state_val_321577 = (state_321576[1]);if((state_val_321577 === 1))
{var inst_321553 = null;var state_321576__$1 = (function (){var statearr_321578 = state_321576;(statearr_321578[7] = inst_321553);
return statearr_321578;
})();var statearr_321579_321602 = state_321576__$1;(statearr_321579_321602[2] = null);
(statearr_321579_321602[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 2))
{var state_321576__$1 = state_321576;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321576__$1,4,ch);
} else
{if((state_val_321577 === 3))
{var inst_321573 = (state_321576[2]);var inst_321574 = cljs.core.async.close_BANG_(out);var state_321576__$1 = (function (){var statearr_321580 = state_321576;(statearr_321580[8] = inst_321573);
return statearr_321580;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_321576__$1,inst_321574);
} else
{if((state_val_321577 === 4))
{var inst_321556 = (state_321576[9]);var inst_321556__$1 = (state_321576[2]);var inst_321557 = (inst_321556__$1 == null);var inst_321558 = cljs.core.not(inst_321557);var state_321576__$1 = (function (){var statearr_321581 = state_321576;(statearr_321581[9] = inst_321556__$1);
return statearr_321581;
})();if(inst_321558)
{var statearr_321582_321603 = state_321576__$1;(statearr_321582_321603[1] = 5);
} else
{var statearr_321583_321604 = state_321576__$1;(statearr_321583_321604[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 5))
{var inst_321556 = (state_321576[9]);var inst_321553 = (state_321576[7]);var inst_321560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_321556,inst_321553);var state_321576__$1 = state_321576;if(inst_321560)
{var statearr_321584_321605 = state_321576__$1;(statearr_321584_321605[1] = 8);
} else
{var statearr_321585_321606 = state_321576__$1;(statearr_321585_321606[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 6))
{var state_321576__$1 = state_321576;var statearr_321587_321607 = state_321576__$1;(statearr_321587_321607[2] = null);
(statearr_321587_321607[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 7))
{var inst_321571 = (state_321576[2]);var state_321576__$1 = state_321576;var statearr_321588_321608 = state_321576__$1;(statearr_321588_321608[2] = inst_321571);
(statearr_321588_321608[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 8))
{var inst_321553 = (state_321576[7]);var tmp321586 = inst_321553;var inst_321553__$1 = tmp321586;var state_321576__$1 = (function (){var statearr_321589 = state_321576;(statearr_321589[7] = inst_321553__$1);
return statearr_321589;
})();var statearr_321590_321609 = state_321576__$1;(statearr_321590_321609[2] = null);
(statearr_321590_321609[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 9))
{var inst_321556 = (state_321576[9]);var state_321576__$1 = state_321576;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321576__$1,11,out,inst_321556);
} else
{if((state_val_321577 === 10))
{var inst_321568 = (state_321576[2]);var state_321576__$1 = state_321576;var statearr_321591_321610 = state_321576__$1;(statearr_321591_321610[2] = inst_321568);
(statearr_321591_321610[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321577 === 11))
{var inst_321556 = (state_321576[9]);var inst_321565 = (state_321576[2]);var inst_321553 = inst_321556;var state_321576__$1 = (function (){var statearr_321592 = state_321576;(statearr_321592[10] = inst_321565);
(statearr_321592[7] = inst_321553);
return statearr_321592;
})();var statearr_321593_321611 = state_321576__$1;(statearr_321593_321611[2] = null);
(statearr_321593_321611[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_321597 = (new Array(11));(statearr_321597[0] = state_machine__10214__auto__);
(statearr_321597[1] = 1);
return statearr_321597;
});
var state_machine__10214__auto____1 = (function (state_321576){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321576);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321598){if((e321598 instanceof Object))
{var ex__10217__auto__ = e321598;var statearr_321599_321612 = state_321576;(statearr_321599_321612[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321576);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321613 = state_321576;
state_321576 = G__321613;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321576){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321600 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321601);
return statearr_321600;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___321748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321718){var state_val_321719 = (state_321718[1]);if((state_val_321719 === 1))
{var inst_321681 = (new Array(n));var inst_321682 = inst_321681;var inst_321683 = 0;var state_321718__$1 = (function (){var statearr_321720 = state_321718;(statearr_321720[7] = inst_321683);
(statearr_321720[8] = inst_321682);
return statearr_321720;
})();var statearr_321721_321749 = state_321718__$1;(statearr_321721_321749[2] = null);
(statearr_321721_321749[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 2))
{var state_321718__$1 = state_321718;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321718__$1,4,ch);
} else
{if((state_val_321719 === 3))
{var inst_321716 = (state_321718[2]);var state_321718__$1 = state_321718;return cljs.core.async.impl.ioc_helpers.return_chan(state_321718__$1,inst_321716);
} else
{if((state_val_321719 === 4))
{var inst_321686 = (state_321718[9]);var inst_321686__$1 = (state_321718[2]);var inst_321687 = (inst_321686__$1 == null);var inst_321688 = cljs.core.not(inst_321687);var state_321718__$1 = (function (){var statearr_321722 = state_321718;(statearr_321722[9] = inst_321686__$1);
return statearr_321722;
})();if(inst_321688)
{var statearr_321723_321750 = state_321718__$1;(statearr_321723_321750[1] = 5);
} else
{var statearr_321724_321751 = state_321718__$1;(statearr_321724_321751[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 5))
{var inst_321691 = (state_321718[10]);var inst_321686 = (state_321718[9]);var inst_321683 = (state_321718[7]);var inst_321682 = (state_321718[8]);var inst_321690 = (inst_321682[inst_321683] = inst_321686);var inst_321691__$1 = (inst_321683 + 1);var inst_321692 = (inst_321691__$1 < n);var state_321718__$1 = (function (){var statearr_321725 = state_321718;(statearr_321725[11] = inst_321690);
(statearr_321725[10] = inst_321691__$1);
return statearr_321725;
})();if(cljs.core.truth_(inst_321692))
{var statearr_321726_321752 = state_321718__$1;(statearr_321726_321752[1] = 8);
} else
{var statearr_321727_321753 = state_321718__$1;(statearr_321727_321753[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 6))
{var inst_321683 = (state_321718[7]);var inst_321704 = (inst_321683 > 0);var state_321718__$1 = state_321718;if(cljs.core.truth_(inst_321704))
{var statearr_321729_321754 = state_321718__$1;(statearr_321729_321754[1] = 12);
} else
{var statearr_321730_321755 = state_321718__$1;(statearr_321730_321755[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 7))
{var inst_321714 = (state_321718[2]);var state_321718__$1 = state_321718;var statearr_321731_321756 = state_321718__$1;(statearr_321731_321756[2] = inst_321714);
(statearr_321731_321756[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 8))
{var inst_321691 = (state_321718[10]);var inst_321682 = (state_321718[8]);var tmp321728 = inst_321682;var inst_321682__$1 = tmp321728;var inst_321683 = inst_321691;var state_321718__$1 = (function (){var statearr_321732 = state_321718;(statearr_321732[7] = inst_321683);
(statearr_321732[8] = inst_321682__$1);
return statearr_321732;
})();var statearr_321733_321757 = state_321718__$1;(statearr_321733_321757[2] = null);
(statearr_321733_321757[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 9))
{var inst_321682 = (state_321718[8]);var inst_321696 = cljs.core.vec(inst_321682);var state_321718__$1 = state_321718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321718__$1,11,out,inst_321696);
} else
{if((state_val_321719 === 10))
{var inst_321702 = (state_321718[2]);var state_321718__$1 = state_321718;var statearr_321734_321758 = state_321718__$1;(statearr_321734_321758[2] = inst_321702);
(statearr_321734_321758[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 11))
{var inst_321698 = (state_321718[2]);var inst_321699 = (new Array(n));var inst_321682 = inst_321699;var inst_321683 = 0;var state_321718__$1 = (function (){var statearr_321735 = state_321718;(statearr_321735[12] = inst_321698);
(statearr_321735[7] = inst_321683);
(statearr_321735[8] = inst_321682);
return statearr_321735;
})();var statearr_321736_321759 = state_321718__$1;(statearr_321736_321759[2] = null);
(statearr_321736_321759[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 12))
{var inst_321682 = (state_321718[8]);var inst_321706 = cljs.core.vec(inst_321682);var state_321718__$1 = state_321718;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321718__$1,15,out,inst_321706);
} else
{if((state_val_321719 === 13))
{var state_321718__$1 = state_321718;var statearr_321737_321760 = state_321718__$1;(statearr_321737_321760[2] = null);
(statearr_321737_321760[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 14))
{var inst_321711 = (state_321718[2]);var inst_321712 = cljs.core.async.close_BANG_(out);var state_321718__$1 = (function (){var statearr_321738 = state_321718;(statearr_321738[13] = inst_321711);
return statearr_321738;
})();var statearr_321739_321761 = state_321718__$1;(statearr_321739_321761[2] = inst_321712);
(statearr_321739_321761[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321719 === 15))
{var inst_321708 = (state_321718[2]);var state_321718__$1 = state_321718;var statearr_321740_321762 = state_321718__$1;(statearr_321740_321762[2] = inst_321708);
(statearr_321740_321762[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_321744 = (new Array(14));(statearr_321744[0] = state_machine__10214__auto__);
(statearr_321744[1] = 1);
return statearr_321744;
});
var state_machine__10214__auto____1 = (function (state_321718){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321718);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321745){if((e321745 instanceof Object))
{var ex__10217__auto__ = e321745;var statearr_321746_321763 = state_321718;(statearr_321746_321763[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321718);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321764 = state_321718;
state_321718 = G__321764;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321718){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321747 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321748);
return statearr_321747;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___321907 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_321877){var state_val_321878 = (state_321877[1]);if((state_val_321878 === 1))
{var inst_321836 = (new Array(0));var inst_321837 = inst_321836;var inst_321838 = cljs.core.constant$keyword$310;var state_321877__$1 = (function (){var statearr_321879 = state_321877;(statearr_321879[7] = inst_321837);
(statearr_321879[8] = inst_321838);
return statearr_321879;
})();var statearr_321880_321908 = state_321877__$1;(statearr_321880_321908[2] = null);
(statearr_321880_321908[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 2))
{var state_321877__$1 = state_321877;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_321877__$1,4,ch);
} else
{if((state_val_321878 === 3))
{var inst_321875 = (state_321877[2]);var state_321877__$1 = state_321877;return cljs.core.async.impl.ioc_helpers.return_chan(state_321877__$1,inst_321875);
} else
{if((state_val_321878 === 4))
{var inst_321841 = (state_321877[9]);var inst_321841__$1 = (state_321877[2]);var inst_321842 = (inst_321841__$1 == null);var inst_321843 = cljs.core.not(inst_321842);var state_321877__$1 = (function (){var statearr_321881 = state_321877;(statearr_321881[9] = inst_321841__$1);
return statearr_321881;
})();if(inst_321843)
{var statearr_321882_321909 = state_321877__$1;(statearr_321882_321909[1] = 5);
} else
{var statearr_321883_321910 = state_321877__$1;(statearr_321883_321910[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 5))
{var inst_321841 = (state_321877[9]);var inst_321838 = (state_321877[8]);var inst_321845 = (state_321877[10]);var inst_321845__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_321841) : f.call(null,inst_321841));var inst_321846 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_321845__$1,inst_321838);var inst_321847 = cljs.core.keyword_identical_QMARK_(inst_321838,cljs.core.constant$keyword$310);var inst_321848 = (inst_321846) || (inst_321847);var state_321877__$1 = (function (){var statearr_321884 = state_321877;(statearr_321884[10] = inst_321845__$1);
return statearr_321884;
})();if(cljs.core.truth_(inst_321848))
{var statearr_321885_321911 = state_321877__$1;(statearr_321885_321911[1] = 8);
} else
{var statearr_321886_321912 = state_321877__$1;(statearr_321886_321912[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 6))
{var inst_321837 = (state_321877[7]);var inst_321862 = inst_321837.length;var inst_321863 = (inst_321862 > 0);var state_321877__$1 = state_321877;if(cljs.core.truth_(inst_321863))
{var statearr_321888_321913 = state_321877__$1;(statearr_321888_321913[1] = 12);
} else
{var statearr_321889_321914 = state_321877__$1;(statearr_321889_321914[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 7))
{var inst_321873 = (state_321877[2]);var state_321877__$1 = state_321877;var statearr_321890_321915 = state_321877__$1;(statearr_321890_321915[2] = inst_321873);
(statearr_321890_321915[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 8))
{var inst_321837 = (state_321877[7]);var inst_321841 = (state_321877[9]);var inst_321845 = (state_321877[10]);var inst_321850 = inst_321837.push(inst_321841);var tmp321887 = inst_321837;var inst_321837__$1 = tmp321887;var inst_321838 = inst_321845;var state_321877__$1 = (function (){var statearr_321891 = state_321877;(statearr_321891[7] = inst_321837__$1);
(statearr_321891[11] = inst_321850);
(statearr_321891[8] = inst_321838);
return statearr_321891;
})();var statearr_321892_321916 = state_321877__$1;(statearr_321892_321916[2] = null);
(statearr_321892_321916[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 9))
{var inst_321837 = (state_321877[7]);var inst_321853 = cljs.core.vec(inst_321837);var state_321877__$1 = state_321877;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321877__$1,11,out,inst_321853);
} else
{if((state_val_321878 === 10))
{var inst_321860 = (state_321877[2]);var state_321877__$1 = state_321877;var statearr_321893_321917 = state_321877__$1;(statearr_321893_321917[2] = inst_321860);
(statearr_321893_321917[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 11))
{var inst_321841 = (state_321877[9]);var inst_321845 = (state_321877[10]);var inst_321855 = (state_321877[2]);var inst_321856 = (new Array(0));var inst_321857 = inst_321856.push(inst_321841);var inst_321837 = inst_321856;var inst_321838 = inst_321845;var state_321877__$1 = (function (){var statearr_321894 = state_321877;(statearr_321894[12] = inst_321855);
(statearr_321894[7] = inst_321837);
(statearr_321894[8] = inst_321838);
(statearr_321894[13] = inst_321857);
return statearr_321894;
})();var statearr_321895_321918 = state_321877__$1;(statearr_321895_321918[2] = null);
(statearr_321895_321918[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 12))
{var inst_321837 = (state_321877[7]);var inst_321865 = cljs.core.vec(inst_321837);var state_321877__$1 = state_321877;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_321877__$1,15,out,inst_321865);
} else
{if((state_val_321878 === 13))
{var state_321877__$1 = state_321877;var statearr_321896_321919 = state_321877__$1;(statearr_321896_321919[2] = null);
(statearr_321896_321919[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 14))
{var inst_321870 = (state_321877[2]);var inst_321871 = cljs.core.async.close_BANG_(out);var state_321877__$1 = (function (){var statearr_321897 = state_321877;(statearr_321897[14] = inst_321870);
return statearr_321897;
})();var statearr_321898_321920 = state_321877__$1;(statearr_321898_321920[2] = inst_321871);
(statearr_321898_321920[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_321878 === 15))
{var inst_321867 = (state_321877[2]);var state_321877__$1 = state_321877;var statearr_321899_321921 = state_321877__$1;(statearr_321899_321921[2] = inst_321867);
(statearr_321899_321921[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_321903 = (new Array(15));(statearr_321903[0] = state_machine__10214__auto__);
(statearr_321903[1] = 1);
return statearr_321903;
});
var state_machine__10214__auto____1 = (function (state_321877){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_321877);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e321904){if((e321904 instanceof Object))
{var ex__10217__auto__ = e321904;var statearr_321905_321922 = state_321877;(statearr_321905_321922[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_321877);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e321904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__321923 = state_321877;
state_321877 = G__321923;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_321877){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_321877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_321906 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_321906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___321907);
return statearr_321906;
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
