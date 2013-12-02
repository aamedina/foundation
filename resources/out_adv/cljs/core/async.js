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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t153568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153568 = (function (f,fn_handler,meta153569){
this.f = f;
this.fn_handler = fn_handler;
this.meta153569 = meta153569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153568.cljs$lang$type = true;
cljs.core.async.t153568.cljs$lang$ctorStr = "cljs.core.async/t153568";
cljs.core.async.t153568.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153568");
});
cljs.core.async.t153568.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t153568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t153568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t153568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153570){var self__ = this;
var _153570__$1 = this;return self__.meta153569;
});
cljs.core.async.t153568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153570,meta153569__$1){var self__ = this;
var _153570__$1 = this;return (new cljs.core.async.t153568(self__.f,self__.fn_handler,meta153569__$1));
});
cljs.core.async.__GT_t153568 = (function __GT_t153568(f__$1,fn_handler__$1,meta153569){return (new cljs.core.async.t153568(f__$1,fn_handler__$1,meta153569));
});
}
return (new cljs.core.async.t153568(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__153572 = buff;if(G__153572)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__153572.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__153572.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__153572);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__153572);
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
{var val_153573 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_153573) : fn1.call(null,val_153573));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_153573) : fn1.call(null,val_153573));
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___153574 = n;var x_153575 = 0;while(true){
if((x_153575 < n__8553__auto___153574))
{(a[x_153575] = 0);
{
var G__153576 = (x_153575 + 1);
x_153575 = G__153576;
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
var G__153577 = (i + 1);
i = G__153577;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t153581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153581 = (function (flag,alt_flag,meta153582){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta153582 = meta153582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153581.cljs$lang$type = true;
cljs.core.async.t153581.cljs$lang$ctorStr = "cljs.core.async/t153581";
cljs.core.async.t153581.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153581");
});
cljs.core.async.t153581.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t153581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t153581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t153581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153583){var self__ = this;
var _153583__$1 = this;return self__.meta153582;
});
cljs.core.async.t153581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153583,meta153582__$1){var self__ = this;
var _153583__$1 = this;return (new cljs.core.async.t153581(self__.flag,self__.alt_flag,meta153582__$1));
});
cljs.core.async.__GT_t153581 = (function __GT_t153581(flag__$1,alt_flag__$1,meta153582){return (new cljs.core.async.t153581(flag__$1,alt_flag__$1,meta153582));
});
}
return (new cljs.core.async.t153581(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t153587 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153587 = (function (cb,flag,alt_handler,meta153588){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta153588 = meta153588;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153587.cljs$lang$type = true;
cljs.core.async.t153587.cljs$lang$ctorStr = "cljs.core.async/t153587";
cljs.core.async.t153587.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153587");
});
cljs.core.async.t153587.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t153587.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t153587.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t153587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153589){var self__ = this;
var _153589__$1 = this;return self__.meta153588;
});
cljs.core.async.t153587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153589,meta153588__$1){var self__ = this;
var _153589__$1 = this;return (new cljs.core.async.t153587(self__.cb,self__.flag,self__.alt_handler,meta153588__$1));
});
cljs.core.async.__GT_t153587 = (function __GT_t153587(cb__$1,flag__$1,alt_handler__$1,meta153588){return (new cljs.core.async.t153587(cb__$1,flag__$1,alt_handler__$1,meta153588));
});
}
return (new cljs.core.async.t153587(cb,flag,alt_handler,null));
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
return (function (p1__153590_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__153590_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__153590_SHARP_,port], null)));
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
var G__153591 = (i + 1);
i = G__153591;
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
var alts_BANG___delegate = function (ports,p__153592){var map__153594 = p__153592;var map__153594__$1 = ((cljs.core.seq_QMARK_(map__153594))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__153594):map__153594);var opts = map__153594__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__153592 = null;if (arguments.length > 1) {
  p__153592 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__153592);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__153595){
var ports = cljs.core.first(arglist__153595);
var p__153592 = cljs.core.rest(arglist__153595);
return alts_BANG___delegate(ports,p__153592);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t153603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153603 = (function (ch,f,map_LT_,meta153604){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta153604 = meta153604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153603.cljs$lang$type = true;
cljs.core.async.t153603.cljs$lang$ctorStr = "cljs.core.async/t153603";
cljs.core.async.t153603.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153603");
});
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t153606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153606 = (function (fn1,_,meta153604,ch,f,map_LT_,meta153607){
this.fn1 = fn1;
this._ = _;
this.meta153604 = meta153604;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta153607 = meta153607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153606.cljs$lang$type = true;
cljs.core.async.t153606.cljs$lang$ctorStr = "cljs.core.async/t153606";
cljs.core.async.t153606.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153606");
});
cljs.core.async.t153606.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t153606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t153606.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t153606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__153596_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__153596_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__153596_SHARP_) : self__.f.call(null,p1__153596_SHARP_)))) : f1.call(null,(((p1__153596_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__153596_SHARP_) : self__.f.call(null,p1__153596_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t153606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153608){var self__ = this;
var _153608__$1 = this;return self__.meta153607;
});
cljs.core.async.t153606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153608,meta153607__$1){var self__ = this;
var _153608__$1 = this;return (new cljs.core.async.t153606(self__.fn1,self__._,self__.meta153604,self__.ch,self__.f,self__.map_LT_,meta153607__$1));
});
cljs.core.async.__GT_t153606 = (function __GT_t153606(fn1__$1,___$2,meta153604__$1,ch__$2,f__$2,map_LT___$2,meta153607){return (new cljs.core.async.t153606(fn1__$1,___$2,meta153604__$1,ch__$2,f__$2,map_LT___$2,meta153607));
});
}
return (new cljs.core.async.t153606(fn1,___$1,self__.meta153604,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t153603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t153603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153605){var self__ = this;
var _153605__$1 = this;return self__.meta153604;
});
cljs.core.async.t153603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153605,meta153604__$1){var self__ = this;
var _153605__$1 = this;return (new cljs.core.async.t153603(self__.ch,self__.f,self__.map_LT_,meta153604__$1));
});
cljs.core.async.__GT_t153603 = (function __GT_t153603(ch__$1,f__$1,map_LT___$1,meta153604){return (new cljs.core.async.t153603(ch__$1,f__$1,map_LT___$1,meta153604));
});
}
return (new cljs.core.async.t153603(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t153612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153612 = (function (ch,f,map_GT_,meta153613){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta153613 = meta153613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153612.cljs$lang$type = true;
cljs.core.async.t153612.cljs$lang$ctorStr = "cljs.core.async/t153612";
cljs.core.async.t153612.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153612");
});
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t153612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t153612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153614){var self__ = this;
var _153614__$1 = this;return self__.meta153613;
});
cljs.core.async.t153612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153614,meta153613__$1){var self__ = this;
var _153614__$1 = this;return (new cljs.core.async.t153612(self__.ch,self__.f,self__.map_GT_,meta153613__$1));
});
cljs.core.async.__GT_t153612 = (function __GT_t153612(ch__$1,f__$1,map_GT___$1,meta153613){return (new cljs.core.async.t153612(ch__$1,f__$1,map_GT___$1,meta153613));
});
}
return (new cljs.core.async.t153612(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t153618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t153618 = (function (ch,p,filter_GT_,meta153619){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta153619 = meta153619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t153618.cljs$lang$type = true;
cljs.core.async.t153618.cljs$lang$ctorStr = "cljs.core.async/t153618";
cljs.core.async.t153618.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t153618");
});
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t153618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t153618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_153620){var self__ = this;
var _153620__$1 = this;return self__.meta153619;
});
cljs.core.async.t153618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_153620,meta153619__$1){var self__ = this;
var _153620__$1 = this;return (new cljs.core.async.t153618(self__.ch,self__.p,self__.filter_GT_,meta153619__$1));
});
cljs.core.async.__GT_t153618 = (function __GT_t153618(ch__$1,p__$1,filter_GT___$1,meta153619){return (new cljs.core.async.t153618(ch__$1,p__$1,filter_GT___$1,meta153619));
});
}
return (new cljs.core.async.t153618(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___153703 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_153682){var state_val_153683 = (state_153682[1]);if((state_val_153683 === 1))
{var state_153682__$1 = state_153682;var statearr_153684_153704 = state_153682__$1;(statearr_153684_153704[2] = null);
(statearr_153684_153704[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 2))
{var state_153682__$1 = state_153682;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_153682__$1,4,ch);
} else
{if((state_val_153683 === 3))
{var inst_153680 = (state_153682[2]);var state_153682__$1 = state_153682;return cljs.core.async.impl.ioc_helpers.return_chan(state_153682__$1,inst_153680);
} else
{if((state_val_153683 === 4))
{var inst_153664 = (state_153682[7]);var inst_153664__$1 = (state_153682[2]);var inst_153665 = (inst_153664__$1 == null);var state_153682__$1 = (function (){var statearr_153685 = state_153682;(statearr_153685[7] = inst_153664__$1);
return statearr_153685;
})();if(cljs.core.truth_(inst_153665))
{var statearr_153686_153705 = state_153682__$1;(statearr_153686_153705[1] = 5);
} else
{var statearr_153687_153706 = state_153682__$1;(statearr_153687_153706[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 5))
{var inst_153667 = cljs.core.async.close_BANG_(out);var state_153682__$1 = state_153682;var statearr_153688_153707 = state_153682__$1;(statearr_153688_153707[2] = inst_153667);
(statearr_153688_153707[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 6))
{var inst_153664 = (state_153682[7]);var inst_153669 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_153664) : p.call(null,inst_153664));var state_153682__$1 = state_153682;if(cljs.core.truth_(inst_153669))
{var statearr_153689_153708 = state_153682__$1;(statearr_153689_153708[1] = 8);
} else
{var statearr_153690_153709 = state_153682__$1;(statearr_153690_153709[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 7))
{var inst_153678 = (state_153682[2]);var state_153682__$1 = state_153682;var statearr_153691_153710 = state_153682__$1;(statearr_153691_153710[2] = inst_153678);
(statearr_153691_153710[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 8))
{var inst_153664 = (state_153682[7]);var state_153682__$1 = state_153682;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_153682__$1,11,out,inst_153664);
} else
{if((state_val_153683 === 9))
{var state_153682__$1 = state_153682;var statearr_153692_153711 = state_153682__$1;(statearr_153692_153711[2] = null);
(statearr_153692_153711[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 10))
{var inst_153675 = (state_153682[2]);var state_153682__$1 = (function (){var statearr_153693 = state_153682;(statearr_153693[8] = inst_153675);
return statearr_153693;
})();var statearr_153694_153712 = state_153682__$1;(statearr_153694_153712[2] = null);
(statearr_153694_153712[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153683 === 11))
{var inst_153672 = (state_153682[2]);var state_153682__$1 = state_153682;var statearr_153695_153713 = state_153682__$1;(statearr_153695_153713[2] = inst_153672);
(statearr_153695_153713[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_153699 = (new Array(9));(statearr_153699[0] = state_machine__10214__auto__);
(statearr_153699[1] = 1);
return statearr_153699;
});
var state_machine__10214__auto____1 = (function (state_153682){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_153682);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e153700){if((e153700 instanceof Object))
{var ex__10217__auto__ = e153700;var statearr_153701_153714 = state_153682;(statearr_153701_153714[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_153682);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e153700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__153715 = state_153682;
state_153682 = G__153715;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_153682){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_153682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_153702 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_153702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___153703);
return statearr_153702;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_153867){var state_val_153868 = (state_153867[1]);if((state_val_153868 === 1))
{var state_153867__$1 = state_153867;var statearr_153869_153906 = state_153867__$1;(statearr_153869_153906[2] = null);
(statearr_153869_153906[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 2))
{var state_153867__$1 = state_153867;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_153867__$1,4,in$);
} else
{if((state_val_153868 === 3))
{var inst_153865 = (state_153867[2]);var state_153867__$1 = state_153867;return cljs.core.async.impl.ioc_helpers.return_chan(state_153867__$1,inst_153865);
} else
{if((state_val_153868 === 4))
{var inst_153813 = (state_153867[7]);var inst_153813__$1 = (state_153867[2]);var inst_153814 = (inst_153813__$1 == null);var state_153867__$1 = (function (){var statearr_153870 = state_153867;(statearr_153870[7] = inst_153813__$1);
return statearr_153870;
})();if(cljs.core.truth_(inst_153814))
{var statearr_153871_153907 = state_153867__$1;(statearr_153871_153907[1] = 5);
} else
{var statearr_153872_153908 = state_153867__$1;(statearr_153872_153908[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 5))
{var inst_153816 = cljs.core.async.close_BANG_(out);var state_153867__$1 = state_153867;var statearr_153873_153909 = state_153867__$1;(statearr_153873_153909[2] = inst_153816);
(statearr_153873_153909[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 6))
{var inst_153813 = (state_153867[7]);var inst_153818 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_153813) : f.call(null,inst_153813));var inst_153823 = cljs.core.seq(inst_153818);var inst_153824 = inst_153823;var inst_153825 = null;var inst_153826 = 0;var inst_153827 = 0;var state_153867__$1 = (function (){var statearr_153874 = state_153867;(statearr_153874[8] = inst_153826);
(statearr_153874[9] = inst_153827);
(statearr_153874[10] = inst_153824);
(statearr_153874[11] = inst_153825);
return statearr_153874;
})();var statearr_153875_153910 = state_153867__$1;(statearr_153875_153910[2] = null);
(statearr_153875_153910[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 7))
{var inst_153863 = (state_153867[2]);var state_153867__$1 = state_153867;var statearr_153876_153911 = state_153867__$1;(statearr_153876_153911[2] = inst_153863);
(statearr_153876_153911[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 8))
{var inst_153826 = (state_153867[8]);var inst_153827 = (state_153867[9]);var inst_153829 = (inst_153827 < inst_153826);var inst_153830 = inst_153829;var state_153867__$1 = state_153867;if(cljs.core.truth_(inst_153830))
{var statearr_153877_153912 = state_153867__$1;(statearr_153877_153912[1] = 10);
} else
{var statearr_153878_153913 = state_153867__$1;(statearr_153878_153913[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 9))
{var inst_153860 = (state_153867[2]);var state_153867__$1 = (function (){var statearr_153879 = state_153867;(statearr_153879[12] = inst_153860);
return statearr_153879;
})();var statearr_153880_153914 = state_153867__$1;(statearr_153880_153914[2] = null);
(statearr_153880_153914[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 10))
{var inst_153827 = (state_153867[9]);var inst_153825 = (state_153867[11]);var inst_153832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_153825,inst_153827);var state_153867__$1 = state_153867;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_153867__$1,13,out,inst_153832);
} else
{if((state_val_153868 === 11))
{var inst_153824 = (state_153867[10]);var inst_153838 = (state_153867[13]);var inst_153838__$1 = cljs.core.seq(inst_153824);var state_153867__$1 = (function (){var statearr_153884 = state_153867;(statearr_153884[13] = inst_153838__$1);
return statearr_153884;
})();if(inst_153838__$1)
{var statearr_153885_153915 = state_153867__$1;(statearr_153885_153915[1] = 14);
} else
{var statearr_153886_153916 = state_153867__$1;(statearr_153886_153916[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 12))
{var inst_153858 = (state_153867[2]);var state_153867__$1 = state_153867;var statearr_153887_153917 = state_153867__$1;(statearr_153887_153917[2] = inst_153858);
(statearr_153887_153917[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 13))
{var inst_153826 = (state_153867[8]);var inst_153827 = (state_153867[9]);var inst_153824 = (state_153867[10]);var inst_153825 = (state_153867[11]);var inst_153834 = (state_153867[2]);var inst_153835 = (inst_153827 + 1);var tmp153881 = inst_153826;var tmp153882 = inst_153824;var tmp153883 = inst_153825;var inst_153824__$1 = tmp153882;var inst_153825__$1 = tmp153883;var inst_153826__$1 = tmp153881;var inst_153827__$1 = inst_153835;var state_153867__$1 = (function (){var statearr_153888 = state_153867;(statearr_153888[8] = inst_153826__$1);
(statearr_153888[9] = inst_153827__$1);
(statearr_153888[10] = inst_153824__$1);
(statearr_153888[11] = inst_153825__$1);
(statearr_153888[14] = inst_153834);
return statearr_153888;
})();var statearr_153889_153918 = state_153867__$1;(statearr_153889_153918[2] = null);
(statearr_153889_153918[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 14))
{var inst_153838 = (state_153867[13]);var inst_153840 = cljs.core.chunked_seq_QMARK_(inst_153838);var state_153867__$1 = state_153867;if(inst_153840)
{var statearr_153890_153919 = state_153867__$1;(statearr_153890_153919[1] = 17);
} else
{var statearr_153891_153920 = state_153867__$1;(statearr_153891_153920[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 15))
{var state_153867__$1 = state_153867;var statearr_153892_153921 = state_153867__$1;(statearr_153892_153921[2] = null);
(statearr_153892_153921[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 16))
{var inst_153856 = (state_153867[2]);var state_153867__$1 = state_153867;var statearr_153893_153922 = state_153867__$1;(statearr_153893_153922[2] = inst_153856);
(statearr_153893_153922[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 17))
{var inst_153838 = (state_153867[13]);var inst_153842 = cljs.core.chunk_first(inst_153838);var inst_153843 = cljs.core.chunk_rest(inst_153838);var inst_153844 = cljs.core.count(inst_153842);var inst_153824 = inst_153843;var inst_153825 = inst_153842;var inst_153826 = inst_153844;var inst_153827 = 0;var state_153867__$1 = (function (){var statearr_153894 = state_153867;(statearr_153894[8] = inst_153826);
(statearr_153894[9] = inst_153827);
(statearr_153894[10] = inst_153824);
(statearr_153894[11] = inst_153825);
return statearr_153894;
})();var statearr_153895_153923 = state_153867__$1;(statearr_153895_153923[2] = null);
(statearr_153895_153923[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 18))
{var inst_153838 = (state_153867[13]);var inst_153847 = cljs.core.first(inst_153838);var state_153867__$1 = state_153867;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_153867__$1,20,out,inst_153847);
} else
{if((state_val_153868 === 19))
{var inst_153853 = (state_153867[2]);var state_153867__$1 = state_153867;var statearr_153896_153924 = state_153867__$1;(statearr_153896_153924[2] = inst_153853);
(statearr_153896_153924[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153868 === 20))
{var inst_153838 = (state_153867[13]);var inst_153849 = (state_153867[2]);var inst_153850 = cljs.core.next(inst_153838);var inst_153824 = inst_153850;var inst_153825 = null;var inst_153826 = 0;var inst_153827 = 0;var state_153867__$1 = (function (){var statearr_153897 = state_153867;(statearr_153897[8] = inst_153826);
(statearr_153897[9] = inst_153827);
(statearr_153897[10] = inst_153824);
(statearr_153897[11] = inst_153825);
(statearr_153897[15] = inst_153849);
return statearr_153897;
})();var statearr_153898_153925 = state_153867__$1;(statearr_153898_153925[2] = null);
(statearr_153898_153925[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_153902 = (new Array(16));(statearr_153902[0] = state_machine__10214__auto__);
(statearr_153902[1] = 1);
return statearr_153902;
});
var state_machine__10214__auto____1 = (function (state_153867){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_153867);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e153903){if((e153903 instanceof Object))
{var ex__10217__auto__ = e153903;var statearr_153904_153926 = state_153867;(statearr_153904_153926[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_153867);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e153903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__153927 = state_153867;
state_153867 = G__153927;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_153867){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_153867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_153905 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_153905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_153905;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___154008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_153987){var state_val_153988 = (state_153987[1]);if((state_val_153988 === 1))
{var state_153987__$1 = state_153987;var statearr_153989_154009 = state_153987__$1;(statearr_153989_154009[2] = null);
(statearr_153989_154009[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 2))
{var state_153987__$1 = state_153987;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_153987__$1,4,from);
} else
{if((state_val_153988 === 3))
{var inst_153985 = (state_153987[2]);var state_153987__$1 = state_153987;return cljs.core.async.impl.ioc_helpers.return_chan(state_153987__$1,inst_153985);
} else
{if((state_val_153988 === 4))
{var inst_153970 = (state_153987[7]);var inst_153970__$1 = (state_153987[2]);var inst_153971 = (inst_153970__$1 == null);var state_153987__$1 = (function (){var statearr_153990 = state_153987;(statearr_153990[7] = inst_153970__$1);
return statearr_153990;
})();if(cljs.core.truth_(inst_153971))
{var statearr_153991_154010 = state_153987__$1;(statearr_153991_154010[1] = 5);
} else
{var statearr_153992_154011 = state_153987__$1;(statearr_153992_154011[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 5))
{var state_153987__$1 = state_153987;if(cljs.core.truth_(close_QMARK_))
{var statearr_153993_154012 = state_153987__$1;(statearr_153993_154012[1] = 8);
} else
{var statearr_153994_154013 = state_153987__$1;(statearr_153994_154013[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 6))
{var inst_153970 = (state_153987[7]);var state_153987__$1 = state_153987;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_153987__$1,11,to,inst_153970);
} else
{if((state_val_153988 === 7))
{var inst_153983 = (state_153987[2]);var state_153987__$1 = state_153987;var statearr_153995_154014 = state_153987__$1;(statearr_153995_154014[2] = inst_153983);
(statearr_153995_154014[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 8))
{var inst_153974 = cljs.core.async.close_BANG_(to);var state_153987__$1 = state_153987;var statearr_153996_154015 = state_153987__$1;(statearr_153996_154015[2] = inst_153974);
(statearr_153996_154015[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 9))
{var state_153987__$1 = state_153987;var statearr_153997_154016 = state_153987__$1;(statearr_153997_154016[2] = null);
(statearr_153997_154016[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 10))
{var inst_153977 = (state_153987[2]);var state_153987__$1 = state_153987;var statearr_153998_154017 = state_153987__$1;(statearr_153998_154017[2] = inst_153977);
(statearr_153998_154017[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_153988 === 11))
{var inst_153980 = (state_153987[2]);var state_153987__$1 = (function (){var statearr_153999 = state_153987;(statearr_153999[8] = inst_153980);
return statearr_153999;
})();var statearr_154000_154018 = state_153987__$1;(statearr_154000_154018[2] = null);
(statearr_154000_154018[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_154004 = (new Array(9));(statearr_154004[0] = state_machine__10214__auto__);
(statearr_154004[1] = 1);
return statearr_154004;
});
var state_machine__10214__auto____1 = (function (state_153987){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_153987);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154005){if((e154005 instanceof Object))
{var ex__10217__auto__ = e154005;var statearr_154006_154019 = state_153987;(statearr_154006_154019[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_153987);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154005;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__154020 = state_153987;
state_153987 = G__154020;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_153987){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_153987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154007 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___154008);
return statearr_154007;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__10283__auto___154107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_154085){var state_val_154086 = (state_154085[1]);if((state_val_154086 === 1))
{var state_154085__$1 = state_154085;var statearr_154087_154108 = state_154085__$1;(statearr_154087_154108[2] = null);
(statearr_154087_154108[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 2))
{var state_154085__$1 = state_154085;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_154085__$1,4,ch);
} else
{if((state_val_154086 === 3))
{var inst_154083 = (state_154085[2]);var state_154085__$1 = state_154085;return cljs.core.async.impl.ioc_helpers.return_chan(state_154085__$1,inst_154083);
} else
{if((state_val_154086 === 4))
{var inst_154066 = (state_154085[7]);var inst_154066__$1 = (state_154085[2]);var inst_154067 = (inst_154066__$1 == null);var state_154085__$1 = (function (){var statearr_154088 = state_154085;(statearr_154088[7] = inst_154066__$1);
return statearr_154088;
})();if(cljs.core.truth_(inst_154067))
{var statearr_154089_154109 = state_154085__$1;(statearr_154089_154109[1] = 5);
} else
{var statearr_154090_154110 = state_154085__$1;(statearr_154090_154110[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 5))
{var inst_154069 = cljs.core.async.close_BANG_(tc);var inst_154070 = cljs.core.async.close_BANG_(fc);var state_154085__$1 = (function (){var statearr_154091 = state_154085;(statearr_154091[8] = inst_154069);
return statearr_154091;
})();var statearr_154092_154111 = state_154085__$1;(statearr_154092_154111[2] = inst_154070);
(statearr_154092_154111[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 6))
{var inst_154066 = (state_154085[7]);var inst_154072 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_154066) : p.call(null,inst_154066));var state_154085__$1 = state_154085;if(cljs.core.truth_(inst_154072))
{var statearr_154093_154112 = state_154085__$1;(statearr_154093_154112[1] = 9);
} else
{var statearr_154094_154113 = state_154085__$1;(statearr_154094_154113[1] = 10);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 7))
{var inst_154081 = (state_154085[2]);var state_154085__$1 = state_154085;var statearr_154095_154114 = state_154085__$1;(statearr_154095_154114[2] = inst_154081);
(statearr_154095_154114[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 8))
{var inst_154078 = (state_154085[2]);var state_154085__$1 = (function (){var statearr_154096 = state_154085;(statearr_154096[9] = inst_154078);
return statearr_154096;
})();var statearr_154097_154115 = state_154085__$1;(statearr_154097_154115[2] = null);
(statearr_154097_154115[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 9))
{var state_154085__$1 = state_154085;var statearr_154098_154116 = state_154085__$1;(statearr_154098_154116[2] = tc);
(statearr_154098_154116[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 10))
{var state_154085__$1 = state_154085;var statearr_154099_154117 = state_154085__$1;(statearr_154099_154117[2] = fc);
(statearr_154099_154117[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154086 === 11))
{var inst_154066 = (state_154085[7]);var inst_154076 = (state_154085[2]);var state_154085__$1 = state_154085;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_154085__$1,8,inst_154076,inst_154066);
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
var state_machine__10214__auto____0 = (function (){var statearr_154103 = (new Array(10));(statearr_154103[0] = state_machine__10214__auto__);
(statearr_154103[1] = 1);
return statearr_154103;
});
var state_machine__10214__auto____1 = (function (state_154085){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_154085);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154104){if((e154104 instanceof Object))
{var ex__10217__auto__ = e154104;var statearr_154105_154118 = state_154085;(statearr_154105_154118[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_154085);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__154119 = state_154085;
state_154085 = G__154119;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_154085){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_154085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154106 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___154107);
return statearr_154106;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_154166){var state_val_154167 = (state_154166[1]);if((state_val_154167 === 7))
{var inst_154162 = (state_154166[2]);var state_154166__$1 = state_154166;var statearr_154168_154184 = state_154166__$1;(statearr_154168_154184[2] = inst_154162);
(statearr_154168_154184[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154167 === 6))
{var inst_154155 = (state_154166[7]);var inst_154152 = (state_154166[8]);var inst_154159 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_154152,inst_154155) : f.call(null,inst_154152,inst_154155));var inst_154152__$1 = inst_154159;var state_154166__$1 = (function (){var statearr_154169 = state_154166;(statearr_154169[8] = inst_154152__$1);
return statearr_154169;
})();var statearr_154170_154185 = state_154166__$1;(statearr_154170_154185[2] = null);
(statearr_154170_154185[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154167 === 5))
{var inst_154152 = (state_154166[8]);var state_154166__$1 = state_154166;var statearr_154171_154186 = state_154166__$1;(statearr_154171_154186[2] = inst_154152);
(statearr_154171_154186[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154167 === 4))
{var inst_154155 = (state_154166[7]);var inst_154155__$1 = (state_154166[2]);var inst_154156 = (inst_154155__$1 == null);var state_154166__$1 = (function (){var statearr_154172 = state_154166;(statearr_154172[7] = inst_154155__$1);
return statearr_154172;
})();if(cljs.core.truth_(inst_154156))
{var statearr_154173_154187 = state_154166__$1;(statearr_154173_154187[1] = 5);
} else
{var statearr_154174_154188 = state_154166__$1;(statearr_154174_154188[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154167 === 3))
{var inst_154164 = (state_154166[2]);var state_154166__$1 = state_154166;return cljs.core.async.impl.ioc_helpers.return_chan(state_154166__$1,inst_154164);
} else
{if((state_val_154167 === 2))
{var state_154166__$1 = state_154166;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_154166__$1,4,ch);
} else
{if((state_val_154167 === 1))
{var inst_154152 = init;var state_154166__$1 = (function (){var statearr_154175 = state_154166;(statearr_154175[8] = inst_154152);
return statearr_154175;
})();var statearr_154176_154189 = state_154166__$1;(statearr_154176_154189[2] = null);
(statearr_154176_154189[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_154180 = (new Array(9));(statearr_154180[0] = state_machine__10214__auto__);
(statearr_154180[1] = 1);
return statearr_154180;
});
var state_machine__10214__auto____1 = (function (state_154166){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_154166);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154181){if((e154181 instanceof Object))
{var ex__10217__auto__ = e154181;var statearr_154182_154190 = state_154166;(statearr_154182_154190[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_154166);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__154191 = state_154166;
state_154166 = G__154191;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_154166){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_154166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154183 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_154183;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_154253){var state_val_154254 = (state_154253[1]);if((state_val_154254 === 1))
{var inst_154233 = cljs.core.seq(coll);var inst_154234 = inst_154233;var state_154253__$1 = (function (){var statearr_154255 = state_154253;(statearr_154255[7] = inst_154234);
return statearr_154255;
})();var statearr_154256_154274 = state_154253__$1;(statearr_154256_154274[2] = null);
(statearr_154256_154274[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 2))
{var inst_154234 = (state_154253[7]);var state_154253__$1 = state_154253;if(cljs.core.truth_(inst_154234))
{var statearr_154257_154275 = state_154253__$1;(statearr_154257_154275[1] = 4);
} else
{var statearr_154258_154276 = state_154253__$1;(statearr_154258_154276[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 3))
{var inst_154251 = (state_154253[2]);var state_154253__$1 = state_154253;return cljs.core.async.impl.ioc_helpers.return_chan(state_154253__$1,inst_154251);
} else
{if((state_val_154254 === 4))
{var inst_154234 = (state_154253[7]);var inst_154237 = cljs.core.first(inst_154234);var state_154253__$1 = state_154253;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_154253__$1,7,ch,inst_154237);
} else
{if((state_val_154254 === 5))
{var state_154253__$1 = state_154253;if(cljs.core.truth_(close_QMARK_))
{var statearr_154259_154277 = state_154253__$1;(statearr_154259_154277[1] = 8);
} else
{var statearr_154260_154278 = state_154253__$1;(statearr_154260_154278[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 6))
{var inst_154249 = (state_154253[2]);var state_154253__$1 = state_154253;var statearr_154261_154279 = state_154253__$1;(statearr_154261_154279[2] = inst_154249);
(statearr_154261_154279[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 7))
{var inst_154234 = (state_154253[7]);var inst_154239 = (state_154253[2]);var inst_154240 = cljs.core.next(inst_154234);var inst_154234__$1 = inst_154240;var state_154253__$1 = (function (){var statearr_154262 = state_154253;(statearr_154262[8] = inst_154239);
(statearr_154262[7] = inst_154234__$1);
return statearr_154262;
})();var statearr_154263_154280 = state_154253__$1;(statearr_154263_154280[2] = null);
(statearr_154263_154280[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 8))
{var inst_154244 = cljs.core.async.close_BANG_(ch);var state_154253__$1 = state_154253;var statearr_154264_154281 = state_154253__$1;(statearr_154264_154281[2] = inst_154244);
(statearr_154264_154281[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 9))
{var state_154253__$1 = state_154253;var statearr_154265_154282 = state_154253__$1;(statearr_154265_154282[2] = null);
(statearr_154265_154282[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154254 === 10))
{var inst_154247 = (state_154253[2]);var state_154253__$1 = state_154253;var statearr_154266_154283 = state_154253__$1;(statearr_154266_154283[2] = inst_154247);
(statearr_154266_154283[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_154270 = (new Array(9));(statearr_154270[0] = state_machine__10214__auto__);
(statearr_154270[1] = 1);
return statearr_154270;
});
var state_machine__10214__auto____1 = (function (state_154253){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_154253);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154271){if((e154271 instanceof Object))
{var ex__10217__auto__ = e154271;var statearr_154272_154284 = state_154253;(statearr_154272_154284[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_154253);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__154285 = state_154253;
state_154253 = G__154285;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_154253){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_154253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154273 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_154273;
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
cljs.core.async.Mux = (function (){var obj154287 = {};return obj154287;
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
cljs.core.async.Mult = (function (){var obj154289 = {};return obj154289;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t154504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154504 = (function (cs,ch,mult,meta154505){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta154505 = meta154505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154504.cljs$lang$type = true;
cljs.core.async.t154504.cljs$lang$ctorStr = "cljs.core.async/t154504";
cljs.core.async.t154504.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t154504");
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t154504.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t154504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_154506){var self__ = this;
var _154506__$1 = this;return self__.meta154505;
});})(cs))
;
cljs.core.async.t154504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_154506,meta154505__$1){var self__ = this;
var _154506__$1 = this;return (new cljs.core.async.t154504(self__.cs,self__.ch,self__.mult,meta154505__$1));
});})(cs))
;
cljs.core.async.__GT_t154504 = ((function (cs){
return (function __GT_t154504(cs__$1,ch__$1,mult__$1,meta154505){return (new cljs.core.async.t154504(cs__$1,ch__$1,mult__$1,meta154505));
});})(cs))
;
}
return (new cljs.core.async.t154504(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___154718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_154636){var state_val_154637 = (state_154636[1]);if((state_val_154637 === 32))
{var inst_154585 = (state_154636[7]);var inst_154509 = (state_154636[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_154636,31,Object,null,30);var inst_154592 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_154585,inst_154509,done);var state_154636__$1 = state_154636;var statearr_154638_154719 = state_154636__$1;(statearr_154638_154719[2] = inst_154592);
cljs.core.async.impl.ioc_helpers.process_exception(state_154636__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 1))
{var state_154636__$1 = state_154636;var statearr_154639_154720 = state_154636__$1;(statearr_154639_154720[2] = null);
(statearr_154639_154720[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 33))
{var inst_154598 = (state_154636[9]);var inst_154600 = cljs.core.chunked_seq_QMARK_(inst_154598);var state_154636__$1 = state_154636;if(inst_154600)
{var statearr_154640_154721 = state_154636__$1;(statearr_154640_154721[1] = 36);
} else
{var statearr_154641_154722 = state_154636__$1;(statearr_154641_154722[1] = 37);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 2))
{var state_154636__$1 = state_154636;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_154636__$1,4,ch);
} else
{if((state_val_154637 === 34))
{var state_154636__$1 = state_154636;var statearr_154642_154723 = state_154636__$1;(statearr_154642_154723[2] = null);
(statearr_154642_154723[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 3))
{var inst_154634 = (state_154636[2]);var state_154636__$1 = state_154636;return cljs.core.async.impl.ioc_helpers.return_chan(state_154636__$1,inst_154634);
} else
{if((state_val_154637 === 35))
{var inst_154623 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154643_154724 = state_154636__$1;(statearr_154643_154724[2] = inst_154623);
(statearr_154643_154724[1] = 29);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 4))
{var inst_154509 = (state_154636[8]);var inst_154509__$1 = (state_154636[2]);var inst_154510 = (inst_154509__$1 == null);var state_154636__$1 = (function (){var statearr_154644 = state_154636;(statearr_154644[8] = inst_154509__$1);
return statearr_154644;
})();if(cljs.core.truth_(inst_154510))
{var statearr_154645_154725 = state_154636__$1;(statearr_154645_154725[1] = 5);
} else
{var statearr_154646_154726 = state_154636__$1;(statearr_154646_154726[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 36))
{var inst_154598 = (state_154636[9]);var inst_154602 = cljs.core.chunk_first(inst_154598);var inst_154603 = cljs.core.chunk_rest(inst_154598);var inst_154604 = cljs.core.count(inst_154602);var inst_154577 = inst_154603;var inst_154578 = inst_154602;var inst_154579 = inst_154604;var inst_154580 = 0;var state_154636__$1 = (function (){var statearr_154647 = state_154636;(statearr_154647[10] = inst_154580);
(statearr_154647[11] = inst_154577);
(statearr_154647[12] = inst_154578);
(statearr_154647[13] = inst_154579);
return statearr_154647;
})();var statearr_154648_154727 = state_154636__$1;(statearr_154648_154727[2] = null);
(statearr_154648_154727[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 5))
{var inst_154516 = cljs.core.deref(cs);var inst_154517 = cljs.core.seq(inst_154516);var inst_154518 = inst_154517;var inst_154519 = null;var inst_154520 = 0;var inst_154521 = 0;var state_154636__$1 = (function (){var statearr_154649 = state_154636;(statearr_154649[14] = inst_154519);
(statearr_154649[15] = inst_154518);
(statearr_154649[16] = inst_154520);
(statearr_154649[17] = inst_154521);
return statearr_154649;
})();var statearr_154650_154728 = state_154636__$1;(statearr_154650_154728[2] = null);
(statearr_154650_154728[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 37))
{var inst_154598 = (state_154636[9]);var inst_154607 = cljs.core.first(inst_154598);var state_154636__$1 = (function (){var statearr_154651 = state_154636;(statearr_154651[18] = inst_154607);
return statearr_154651;
})();var statearr_154652_154729 = state_154636__$1;(statearr_154652_154729[2] = null);
(statearr_154652_154729[1] = 41);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 6))
{var inst_154568 = cljs.core.deref(cs);var inst_154569 = cljs.core.keys(inst_154568);var inst_154570 = cljs.core.count(inst_154569);var inst_154571 = cljs.core.reset_BANG_(dctr,inst_154570);var inst_154576 = cljs.core.seq(inst_154569);var inst_154577 = inst_154576;var inst_154578 = null;var inst_154579 = 0;var inst_154580 = 0;var state_154636__$1 = (function (){var statearr_154653 = state_154636;(statearr_154653[10] = inst_154580);
(statearr_154653[11] = inst_154577);
(statearr_154653[12] = inst_154578);
(statearr_154653[13] = inst_154579);
(statearr_154653[19] = inst_154571);
return statearr_154653;
})();var statearr_154654_154730 = state_154636__$1;(statearr_154654_154730[2] = null);
(statearr_154654_154730[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 38))
{var inst_154620 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154655_154731 = state_154636__$1;(statearr_154655_154731[2] = inst_154620);
(statearr_154655_154731[1] = 35);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 7))
{var inst_154632 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154656_154732 = state_154636__$1;(statearr_154656_154732[2] = inst_154632);
(statearr_154656_154732[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 39))
{var inst_154598 = (state_154636[9]);var inst_154616 = (state_154636[2]);var inst_154617 = cljs.core.next(inst_154598);var inst_154577 = inst_154617;var inst_154578 = null;var inst_154579 = 0;var inst_154580 = 0;var state_154636__$1 = (function (){var statearr_154657 = state_154636;(statearr_154657[10] = inst_154580);
(statearr_154657[11] = inst_154577);
(statearr_154657[12] = inst_154578);
(statearr_154657[13] = inst_154579);
(statearr_154657[20] = inst_154616);
return statearr_154657;
})();var statearr_154658_154733 = state_154636__$1;(statearr_154658_154733[2] = null);
(statearr_154658_154733[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 8))
{var inst_154520 = (state_154636[16]);var inst_154521 = (state_154636[17]);var inst_154523 = (inst_154521 < inst_154520);var inst_154524 = inst_154523;var state_154636__$1 = state_154636;if(cljs.core.truth_(inst_154524))
{var statearr_154659_154734 = state_154636__$1;(statearr_154659_154734[1] = 10);
} else
{var statearr_154660_154735 = state_154636__$1;(statearr_154660_154735[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 40))
{var inst_154607 = (state_154636[18]);var inst_154608 = (state_154636[2]);var inst_154609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_154610 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_154607);var state_154636__$1 = (function (){var statearr_154661 = state_154636;(statearr_154661[21] = inst_154609);
(statearr_154661[22] = inst_154608);
return statearr_154661;
})();var statearr_154662_154736 = state_154636__$1;(statearr_154662_154736[2] = inst_154610);
cljs.core.async.impl.ioc_helpers.process_exception(state_154636__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 9))
{var inst_154566 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154663_154737 = state_154636__$1;(statearr_154663_154737[2] = inst_154566);
(statearr_154663_154737[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 41))
{var inst_154607 = (state_154636[18]);var inst_154509 = (state_154636[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_154636,40,Object,null,39);var inst_154614 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_154607,inst_154509,done);var state_154636__$1 = state_154636;var statearr_154664_154738 = state_154636__$1;(statearr_154664_154738[2] = inst_154614);
cljs.core.async.impl.ioc_helpers.process_exception(state_154636__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 10))
{var inst_154519 = (state_154636[14]);var inst_154521 = (state_154636[17]);var inst_154527 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_154519,inst_154521);var inst_154528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154527,0,null);var inst_154529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154527,1,null);var state_154636__$1 = (function (){var statearr_154665 = state_154636;(statearr_154665[23] = inst_154528);
return statearr_154665;
})();if(cljs.core.truth_(inst_154529))
{var statearr_154666_154739 = state_154636__$1;(statearr_154666_154739[1] = 13);
} else
{var statearr_154667_154740 = state_154636__$1;(statearr_154667_154740[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 42))
{var inst_154629 = (state_154636[2]);var state_154636__$1 = (function (){var statearr_154668 = state_154636;(statearr_154668[24] = inst_154629);
return statearr_154668;
})();var statearr_154669_154741 = state_154636__$1;(statearr_154669_154741[2] = null);
(statearr_154669_154741[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 11))
{var inst_154518 = (state_154636[15]);var inst_154538 = (state_154636[25]);var inst_154538__$1 = cljs.core.seq(inst_154518);var state_154636__$1 = (function (){var statearr_154670 = state_154636;(statearr_154670[25] = inst_154538__$1);
return statearr_154670;
})();if(inst_154538__$1)
{var statearr_154671_154742 = state_154636__$1;(statearr_154671_154742[1] = 16);
} else
{var statearr_154672_154743 = state_154636__$1;(statearr_154672_154743[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 12))
{var inst_154564 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154673_154744 = state_154636__$1;(statearr_154673_154744[2] = inst_154564);
(statearr_154673_154744[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 13))
{var inst_154528 = (state_154636[23]);var inst_154531 = cljs.core.async.close_BANG_(inst_154528);var state_154636__$1 = state_154636;var statearr_154677_154745 = state_154636__$1;(statearr_154677_154745[2] = inst_154531);
(statearr_154677_154745[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 14))
{var state_154636__$1 = state_154636;var statearr_154678_154746 = state_154636__$1;(statearr_154678_154746[2] = null);
(statearr_154678_154746[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 15))
{var inst_154519 = (state_154636[14]);var inst_154518 = (state_154636[15]);var inst_154520 = (state_154636[16]);var inst_154521 = (state_154636[17]);var inst_154534 = (state_154636[2]);var inst_154535 = (inst_154521 + 1);var tmp154674 = inst_154519;var tmp154675 = inst_154518;var tmp154676 = inst_154520;var inst_154518__$1 = tmp154675;var inst_154519__$1 = tmp154674;var inst_154520__$1 = tmp154676;var inst_154521__$1 = inst_154535;var state_154636__$1 = (function (){var statearr_154679 = state_154636;(statearr_154679[14] = inst_154519__$1);
(statearr_154679[15] = inst_154518__$1);
(statearr_154679[26] = inst_154534);
(statearr_154679[16] = inst_154520__$1);
(statearr_154679[17] = inst_154521__$1);
return statearr_154679;
})();var statearr_154680_154747 = state_154636__$1;(statearr_154680_154747[2] = null);
(statearr_154680_154747[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 16))
{var inst_154538 = (state_154636[25]);var inst_154540 = cljs.core.chunked_seq_QMARK_(inst_154538);var state_154636__$1 = state_154636;if(inst_154540)
{var statearr_154681_154748 = state_154636__$1;(statearr_154681_154748[1] = 19);
} else
{var statearr_154682_154749 = state_154636__$1;(statearr_154682_154749[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 17))
{var state_154636__$1 = state_154636;var statearr_154683_154750 = state_154636__$1;(statearr_154683_154750[2] = null);
(statearr_154683_154750[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 18))
{var inst_154562 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154684_154751 = state_154636__$1;(statearr_154684_154751[2] = inst_154562);
(statearr_154684_154751[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 19))
{var inst_154538 = (state_154636[25]);var inst_154542 = cljs.core.chunk_first(inst_154538);var inst_154543 = cljs.core.chunk_rest(inst_154538);var inst_154544 = cljs.core.count(inst_154542);var inst_154518 = inst_154543;var inst_154519 = inst_154542;var inst_154520 = inst_154544;var inst_154521 = 0;var state_154636__$1 = (function (){var statearr_154685 = state_154636;(statearr_154685[14] = inst_154519);
(statearr_154685[15] = inst_154518);
(statearr_154685[16] = inst_154520);
(statearr_154685[17] = inst_154521);
return statearr_154685;
})();var statearr_154686_154752 = state_154636__$1;(statearr_154686_154752[2] = null);
(statearr_154686_154752[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 20))
{var inst_154538 = (state_154636[25]);var inst_154548 = cljs.core.first(inst_154538);var inst_154549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154548,0,null);var inst_154550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154548,1,null);var state_154636__$1 = (function (){var statearr_154687 = state_154636;(statearr_154687[27] = inst_154549);
return statearr_154687;
})();if(cljs.core.truth_(inst_154550))
{var statearr_154688_154753 = state_154636__$1;(statearr_154688_154753[1] = 22);
} else
{var statearr_154689_154754 = state_154636__$1;(statearr_154689_154754[1] = 23);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 21))
{var inst_154559 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154690_154755 = state_154636__$1;(statearr_154690_154755[2] = inst_154559);
(statearr_154690_154755[1] = 18);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 22))
{var inst_154549 = (state_154636[27]);var inst_154552 = cljs.core.async.close_BANG_(inst_154549);var state_154636__$1 = state_154636;var statearr_154691_154756 = state_154636__$1;(statearr_154691_154756[2] = inst_154552);
(statearr_154691_154756[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 23))
{var state_154636__$1 = state_154636;var statearr_154692_154757 = state_154636__$1;(statearr_154692_154757[2] = null);
(statearr_154692_154757[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 24))
{var inst_154538 = (state_154636[25]);var inst_154555 = (state_154636[2]);var inst_154556 = cljs.core.next(inst_154538);var inst_154518 = inst_154556;var inst_154519 = null;var inst_154520 = 0;var inst_154521 = 0;var state_154636__$1 = (function (){var statearr_154693 = state_154636;(statearr_154693[14] = inst_154519);
(statearr_154693[15] = inst_154518);
(statearr_154693[16] = inst_154520);
(statearr_154693[17] = inst_154521);
(statearr_154693[28] = inst_154555);
return statearr_154693;
})();var statearr_154694_154758 = state_154636__$1;(statearr_154694_154758[2] = null);
(statearr_154694_154758[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 25))
{var inst_154580 = (state_154636[10]);var inst_154579 = (state_154636[13]);var inst_154582 = (inst_154580 < inst_154579);var inst_154583 = inst_154582;var state_154636__$1 = state_154636;if(cljs.core.truth_(inst_154583))
{var statearr_154695_154759 = state_154636__$1;(statearr_154695_154759[1] = 27);
} else
{var statearr_154696_154760 = state_154636__$1;(statearr_154696_154760[1] = 28);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 26))
{var inst_154627 = (state_154636[2]);var state_154636__$1 = (function (){var statearr_154697 = state_154636;(statearr_154697[29] = inst_154627);
return statearr_154697;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_154636__$1,42,dchan);
} else
{if((state_val_154637 === 27))
{var inst_154580 = (state_154636[10]);var inst_154578 = (state_154636[12]);var inst_154585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_154578,inst_154580);var state_154636__$1 = (function (){var statearr_154698 = state_154636;(statearr_154698[7] = inst_154585);
return statearr_154698;
})();var statearr_154699_154761 = state_154636__$1;(statearr_154699_154761[2] = null);
(statearr_154699_154761[1] = 32);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 28))
{var inst_154577 = (state_154636[11]);var inst_154598 = (state_154636[9]);var inst_154598__$1 = cljs.core.seq(inst_154577);var state_154636__$1 = (function (){var statearr_154703 = state_154636;(statearr_154703[9] = inst_154598__$1);
return statearr_154703;
})();if(inst_154598__$1)
{var statearr_154704_154762 = state_154636__$1;(statearr_154704_154762[1] = 33);
} else
{var statearr_154705_154763 = state_154636__$1;(statearr_154705_154763[1] = 34);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 29))
{var inst_154625 = (state_154636[2]);var state_154636__$1 = state_154636;var statearr_154706_154764 = state_154636__$1;(statearr_154706_154764[2] = inst_154625);
(statearr_154706_154764[1] = 26);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 30))
{var inst_154580 = (state_154636[10]);var inst_154577 = (state_154636[11]);var inst_154578 = (state_154636[12]);var inst_154579 = (state_154636[13]);var inst_154594 = (state_154636[2]);var inst_154595 = (inst_154580 + 1);var tmp154700 = inst_154577;var tmp154701 = inst_154578;var tmp154702 = inst_154579;var inst_154577__$1 = tmp154700;var inst_154578__$1 = tmp154701;var inst_154579__$1 = tmp154702;var inst_154580__$1 = inst_154595;var state_154636__$1 = (function (){var statearr_154707 = state_154636;(statearr_154707[10] = inst_154580__$1);
(statearr_154707[30] = inst_154594);
(statearr_154707[11] = inst_154577__$1);
(statearr_154707[12] = inst_154578__$1);
(statearr_154707[13] = inst_154579__$1);
return statearr_154707;
})();var statearr_154708_154765 = state_154636__$1;(statearr_154708_154765[2] = null);
(statearr_154708_154765[1] = 25);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154637 === 31))
{var inst_154585 = (state_154636[7]);var inst_154586 = (state_154636[2]);var inst_154587 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_154588 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_154585);var state_154636__$1 = (function (){var statearr_154709 = state_154636;(statearr_154709[31] = inst_154586);
(statearr_154709[32] = inst_154587);
return statearr_154709;
})();var statearr_154710_154766 = state_154636__$1;(statearr_154710_154766[2] = inst_154588);
cljs.core.async.impl.ioc_helpers.process_exception(state_154636__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_154714 = (new Array(33));(statearr_154714[0] = state_machine__10214__auto__);
(statearr_154714[1] = 1);
return statearr_154714;
});
var state_machine__10214__auto____1 = (function (state_154636){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_154636);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154715){if((e154715 instanceof Object))
{var ex__10217__auto__ = e154715;var statearr_154716_154767 = state_154636;(statearr_154716_154767[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_154636);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__154768 = state_154636;
state_154636 = G__154768;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_154636){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_154636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154717 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___154718);
return statearr_154717;
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
cljs.core.async.Mix = (function (){var obj154770 = {};return obj154770;
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
;var m = (function (){if(typeof cljs.core.async.t154880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t154880 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta154881){
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
this.meta154881 = meta154881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t154880.cljs$lang$type = true;
cljs.core.async.t154880.cljs$lang$ctorStr = "cljs.core.async/t154880";
cljs.core.async.t154880.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t154880");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t154880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_154882){var self__ = this;
var _154882__$1 = this;return self__.meta154881;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t154880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_154882,meta154881__$1){var self__ = this;
var _154882__$1 = this;return (new cljs.core.async.t154880(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta154881__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t154880 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t154880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta154881){return (new cljs.core.async.t154880(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta154881));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t154880(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___154989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_154947){var state_val_154948 = (state_154947[1]);if((state_val_154948 === 1))
{var inst_154886 = (state_154947[7]);var inst_154886__$1 = calc_state();var inst_154887 = cljs.core.seq_QMARK_(inst_154886__$1);var state_154947__$1 = (function (){var statearr_154949 = state_154947;(statearr_154949[7] = inst_154886__$1);
return statearr_154949;
})();if(inst_154887)
{var statearr_154950_154990 = state_154947__$1;(statearr_154950_154990[1] = 2);
} else
{var statearr_154951_154991 = state_154947__$1;(statearr_154951_154991[1] = 3);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 2))
{var inst_154886 = (state_154947[7]);var inst_154889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_154886);var state_154947__$1 = state_154947;var statearr_154952_154992 = state_154947__$1;(statearr_154952_154992[2] = inst_154889);
(statearr_154952_154992[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 3))
{var inst_154886 = (state_154947[7]);var state_154947__$1 = state_154947;var statearr_154953_154993 = state_154947__$1;(statearr_154953_154993[2] = inst_154886);
(statearr_154953_154993[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 4))
{var inst_154886 = (state_154947[7]);var inst_154892 = (state_154947[2]);var inst_154893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154892,cljs.core.constant$keyword$309);var inst_154894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154892,cljs.core.constant$keyword$308);var inst_154895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154892,cljs.core.constant$keyword$307);var inst_154896 = inst_154886;var state_154947__$1 = (function (){var statearr_154954 = state_154947;(statearr_154954[8] = inst_154894);
(statearr_154954[9] = inst_154895);
(statearr_154954[10] = inst_154896);
(statearr_154954[11] = inst_154893);
return statearr_154954;
})();var statearr_154955_154994 = state_154947__$1;(statearr_154955_154994[2] = null);
(statearr_154955_154994[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 5))
{var inst_154896 = (state_154947[10]);var inst_154899 = cljs.core.seq_QMARK_(inst_154896);var state_154947__$1 = state_154947;if(inst_154899)
{var statearr_154956_154995 = state_154947__$1;(statearr_154956_154995[1] = 7);
} else
{var statearr_154957_154996 = state_154947__$1;(statearr_154957_154996[1] = 8);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 6))
{var inst_154945 = (state_154947[2]);var state_154947__$1 = state_154947;return cljs.core.async.impl.ioc_helpers.return_chan(state_154947__$1,inst_154945);
} else
{if((state_val_154948 === 7))
{var inst_154896 = (state_154947[10]);var inst_154901 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_154896);var state_154947__$1 = state_154947;var statearr_154958_154997 = state_154947__$1;(statearr_154958_154997[2] = inst_154901);
(statearr_154958_154997[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 8))
{var inst_154896 = (state_154947[10]);var state_154947__$1 = state_154947;var statearr_154959_154998 = state_154947__$1;(statearr_154959_154998[2] = inst_154896);
(statearr_154959_154998[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 9))
{var inst_154904 = (state_154947[12]);var inst_154904__$1 = (state_154947[2]);var inst_154905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154904__$1,cljs.core.constant$keyword$309);var inst_154906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154904__$1,cljs.core.constant$keyword$308);var inst_154907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_154904__$1,cljs.core.constant$keyword$307);var state_154947__$1 = (function (){var statearr_154960 = state_154947;(statearr_154960[13] = inst_154907);
(statearr_154960[14] = inst_154906);
(statearr_154960[12] = inst_154904__$1);
return statearr_154960;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_154947__$1,10,inst_154905);
} else
{if((state_val_154948 === 10))
{var inst_154912 = (state_154947[15]);var inst_154911 = (state_154947[16]);var inst_154910 = (state_154947[2]);var inst_154911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154910,0,null);var inst_154912__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_154910,1,null);var inst_154913 = (inst_154911__$1 == null);var inst_154914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_154912__$1,change);var inst_154915 = (inst_154913) || (inst_154914);var state_154947__$1 = (function (){var statearr_154961 = state_154947;(statearr_154961[15] = inst_154912__$1);
(statearr_154961[16] = inst_154911__$1);
return statearr_154961;
})();if(cljs.core.truth_(inst_154915))
{var statearr_154962_154999 = state_154947__$1;(statearr_154962_154999[1] = 11);
} else
{var statearr_154963_155000 = state_154947__$1;(statearr_154963_155000[1] = 12);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 11))
{var inst_154911 = (state_154947[16]);var inst_154917 = (inst_154911 == null);var state_154947__$1 = state_154947;if(cljs.core.truth_(inst_154917))
{var statearr_154964_155001 = state_154947__$1;(statearr_154964_155001[1] = 14);
} else
{var statearr_154965_155002 = state_154947__$1;(statearr_154965_155002[1] = 15);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 12))
{var inst_154912 = (state_154947[15]);var inst_154926 = (state_154947[17]);var inst_154907 = (state_154947[13]);var inst_154926__$1 = (inst_154907.cljs$core$IFn$_invoke$arity$1 ? inst_154907.cljs$core$IFn$_invoke$arity$1(inst_154912) : inst_154907.call(null,inst_154912));var state_154947__$1 = (function (){var statearr_154966 = state_154947;(statearr_154966[17] = inst_154926__$1);
return statearr_154966;
})();if(cljs.core.truth_(inst_154926__$1))
{var statearr_154967_155003 = state_154947__$1;(statearr_154967_155003[1] = 17);
} else
{var statearr_154968_155004 = state_154947__$1;(statearr_154968_155004[1] = 18);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 13))
{var inst_154943 = (state_154947[2]);var state_154947__$1 = state_154947;var statearr_154969_155005 = state_154947__$1;(statearr_154969_155005[2] = inst_154943);
(statearr_154969_155005[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 14))
{var inst_154912 = (state_154947[15]);var inst_154919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_154912);var state_154947__$1 = state_154947;var statearr_154970_155006 = state_154947__$1;(statearr_154970_155006[2] = inst_154919);
(statearr_154970_155006[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 15))
{var state_154947__$1 = state_154947;var statearr_154971_155007 = state_154947__$1;(statearr_154971_155007[2] = null);
(statearr_154971_155007[1] = 16);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 16))
{var inst_154922 = (state_154947[2]);var inst_154923 = calc_state();var inst_154896 = inst_154923;var state_154947__$1 = (function (){var statearr_154972 = state_154947;(statearr_154972[18] = inst_154922);
(statearr_154972[10] = inst_154896);
return statearr_154972;
})();var statearr_154973_155008 = state_154947__$1;(statearr_154973_155008[2] = null);
(statearr_154973_155008[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 17))
{var inst_154926 = (state_154947[17]);var state_154947__$1 = state_154947;var statearr_154974_155009 = state_154947__$1;(statearr_154974_155009[2] = inst_154926);
(statearr_154974_155009[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 18))
{var inst_154912 = (state_154947[15]);var inst_154907 = (state_154947[13]);var inst_154906 = (state_154947[14]);var inst_154929 = cljs.core.empty_QMARK_(inst_154907);var inst_154930 = (inst_154906.cljs$core$IFn$_invoke$arity$1 ? inst_154906.cljs$core$IFn$_invoke$arity$1(inst_154912) : inst_154906.call(null,inst_154912));var inst_154931 = cljs.core.not(inst_154930);var inst_154932 = (inst_154929) && (inst_154931);var state_154947__$1 = state_154947;var statearr_154975_155010 = state_154947__$1;(statearr_154975_155010[2] = inst_154932);
(statearr_154975_155010[1] = 19);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 19))
{var inst_154934 = (state_154947[2]);var state_154947__$1 = state_154947;if(cljs.core.truth_(inst_154934))
{var statearr_154976_155011 = state_154947__$1;(statearr_154976_155011[1] = 20);
} else
{var statearr_154977_155012 = state_154947__$1;(statearr_154977_155012[1] = 21);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 20))
{var inst_154911 = (state_154947[16]);var state_154947__$1 = state_154947;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_154947__$1,23,out,inst_154911);
} else
{if((state_val_154948 === 21))
{var state_154947__$1 = state_154947;var statearr_154978_155013 = state_154947__$1;(statearr_154978_155013[2] = null);
(statearr_154978_155013[1] = 22);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 22))
{var inst_154904 = (state_154947[12]);var inst_154940 = (state_154947[2]);var inst_154896 = inst_154904;var state_154947__$1 = (function (){var statearr_154979 = state_154947;(statearr_154979[19] = inst_154940);
(statearr_154979[10] = inst_154896);
return statearr_154979;
})();var statearr_154980_155014 = state_154947__$1;(statearr_154980_155014[2] = null);
(statearr_154980_155014[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_154948 === 23))
{var inst_154937 = (state_154947[2]);var state_154947__$1 = state_154947;var statearr_154981_155015 = state_154947__$1;(statearr_154981_155015[2] = inst_154937);
(statearr_154981_155015[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_154985 = (new Array(20));(statearr_154985[0] = state_machine__10214__auto__);
(statearr_154985[1] = 1);
return statearr_154985;
});
var state_machine__10214__auto____1 = (function (state_154947){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_154947);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e154986){if((e154986 instanceof Object))
{var ex__10217__auto__ = e154986;var statearr_154987_155016 = state_154947;(statearr_154987_155016[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_154947);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e154986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155017 = state_154947;
state_154947 = G__155017;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_154947){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_154947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_154988 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_154988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___154989);
return statearr_154988;
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
cljs.core.async.Pub = (function (){var obj155019 = {};return obj155019;
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
return (function (p1__155020_SHARP_){if(cljs.core.truth_((p1__155020_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__155020_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__155020_SHARP_.call(null,topic))))
{return p1__155020_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__155020_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t155145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t155145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta155146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta155146 = meta155146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t155145.cljs$lang$type = true;
cljs.core.async.t155145.cljs$lang$ctorStr = "cljs.core.async/t155145";
cljs.core.async.t155145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write(writer__8275__auto__,"cljs.core.async/t155145");
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t155145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t155145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_155147){var self__ = this;
var _155147__$1 = this;return self__.meta155146;
});})(mults,ensure_mult))
;
cljs.core.async.t155145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_155147,meta155146__$1){var self__ = this;
var _155147__$1 = this;return (new cljs.core.async.t155145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta155146__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t155145 = ((function (mults,ensure_mult){
return (function __GT_t155145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta155146){return (new cljs.core.async.t155145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta155146));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t155145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___155269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155221){var state_val_155222 = (state_155221[1]);if((state_val_155222 === 1))
{var state_155221__$1 = state_155221;var statearr_155223_155270 = state_155221__$1;(statearr_155223_155270[2] = null);
(statearr_155223_155270[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 2))
{var state_155221__$1 = state_155221;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_155221__$1,4,ch);
} else
{if((state_val_155222 === 3))
{var inst_155219 = (state_155221[2]);var state_155221__$1 = state_155221;return cljs.core.async.impl.ioc_helpers.return_chan(state_155221__$1,inst_155219);
} else
{if((state_val_155222 === 4))
{var inst_155150 = (state_155221[7]);var inst_155150__$1 = (state_155221[2]);var inst_155151 = (inst_155150__$1 == null);var state_155221__$1 = (function (){var statearr_155224 = state_155221;(statearr_155224[7] = inst_155150__$1);
return statearr_155224;
})();if(cljs.core.truth_(inst_155151))
{var statearr_155225_155271 = state_155221__$1;(statearr_155225_155271[1] = 5);
} else
{var statearr_155226_155272 = state_155221__$1;(statearr_155226_155272[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 5))
{var inst_155157 = cljs.core.deref(mults);var inst_155158 = cljs.core.vals(inst_155157);var inst_155159 = cljs.core.seq(inst_155158);var inst_155160 = inst_155159;var inst_155161 = null;var inst_155162 = 0;var inst_155163 = 0;var state_155221__$1 = (function (){var statearr_155227 = state_155221;(statearr_155227[8] = inst_155163);
(statearr_155227[9] = inst_155161);
(statearr_155227[10] = inst_155162);
(statearr_155227[11] = inst_155160);
return statearr_155227;
})();var statearr_155228_155273 = state_155221__$1;(statearr_155228_155273[2] = null);
(statearr_155228_155273[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 6))
{var inst_155150 = (state_155221[7]);var inst_155200 = (state_155221[12]);var inst_155198 = (state_155221[13]);var inst_155198__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_155150) : topic_fn.call(null,inst_155150));var inst_155199 = cljs.core.deref(mults);var inst_155200__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_155199,inst_155198__$1);var state_155221__$1 = (function (){var statearr_155229 = state_155221;(statearr_155229[12] = inst_155200__$1);
(statearr_155229[13] = inst_155198__$1);
return statearr_155229;
})();if(cljs.core.truth_(inst_155200__$1))
{var statearr_155230_155274 = state_155221__$1;(statearr_155230_155274[1] = 19);
} else
{var statearr_155231_155275 = state_155221__$1;(statearr_155231_155275[1] = 20);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 7))
{var inst_155217 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155232_155276 = state_155221__$1;(statearr_155232_155276[2] = inst_155217);
(statearr_155232_155276[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 8))
{var inst_155163 = (state_155221[8]);var inst_155162 = (state_155221[10]);var inst_155165 = (inst_155163 < inst_155162);var inst_155166 = inst_155165;var state_155221__$1 = state_155221;if(cljs.core.truth_(inst_155166))
{var statearr_155236_155277 = state_155221__$1;(statearr_155236_155277[1] = 10);
} else
{var statearr_155237_155278 = state_155221__$1;(statearr_155237_155278[1] = 11);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 9))
{var inst_155196 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155238_155279 = state_155221__$1;(statearr_155238_155279[2] = inst_155196);
(statearr_155238_155279[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 10))
{var inst_155163 = (state_155221[8]);var inst_155161 = (state_155221[9]);var inst_155162 = (state_155221[10]);var inst_155160 = (state_155221[11]);var inst_155168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_155161,inst_155163);var inst_155169 = cljs.core.async.muxch_STAR_(inst_155168);var inst_155170 = cljs.core.async.close_BANG_(inst_155169);var inst_155171 = (inst_155163 + 1);var tmp155233 = inst_155161;var tmp155234 = inst_155162;var tmp155235 = inst_155160;var inst_155160__$1 = tmp155235;var inst_155161__$1 = tmp155233;var inst_155162__$1 = tmp155234;var inst_155163__$1 = inst_155171;var state_155221__$1 = (function (){var statearr_155239 = state_155221;(statearr_155239[8] = inst_155163__$1);
(statearr_155239[9] = inst_155161__$1);
(statearr_155239[10] = inst_155162__$1);
(statearr_155239[11] = inst_155160__$1);
(statearr_155239[14] = inst_155170);
return statearr_155239;
})();var statearr_155240_155280 = state_155221__$1;(statearr_155240_155280[2] = null);
(statearr_155240_155280[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 11))
{var inst_155160 = (state_155221[11]);var inst_155174 = (state_155221[15]);var inst_155174__$1 = cljs.core.seq(inst_155160);var state_155221__$1 = (function (){var statearr_155241 = state_155221;(statearr_155241[15] = inst_155174__$1);
return statearr_155241;
})();if(inst_155174__$1)
{var statearr_155242_155281 = state_155221__$1;(statearr_155242_155281[1] = 13);
} else
{var statearr_155243_155282 = state_155221__$1;(statearr_155243_155282[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 12))
{var inst_155194 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155244_155283 = state_155221__$1;(statearr_155244_155283[2] = inst_155194);
(statearr_155244_155283[1] = 9);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 13))
{var inst_155174 = (state_155221[15]);var inst_155176 = cljs.core.chunked_seq_QMARK_(inst_155174);var state_155221__$1 = state_155221;if(inst_155176)
{var statearr_155245_155284 = state_155221__$1;(statearr_155245_155284[1] = 16);
} else
{var statearr_155246_155285 = state_155221__$1;(statearr_155246_155285[1] = 17);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 14))
{var state_155221__$1 = state_155221;var statearr_155247_155286 = state_155221__$1;(statearr_155247_155286[2] = null);
(statearr_155247_155286[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 15))
{var inst_155192 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155248_155287 = state_155221__$1;(statearr_155248_155287[2] = inst_155192);
(statearr_155248_155287[1] = 12);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 16))
{var inst_155174 = (state_155221[15]);var inst_155178 = cljs.core.chunk_first(inst_155174);var inst_155179 = cljs.core.chunk_rest(inst_155174);var inst_155180 = cljs.core.count(inst_155178);var inst_155160 = inst_155179;var inst_155161 = inst_155178;var inst_155162 = inst_155180;var inst_155163 = 0;var state_155221__$1 = (function (){var statearr_155249 = state_155221;(statearr_155249[8] = inst_155163);
(statearr_155249[9] = inst_155161);
(statearr_155249[10] = inst_155162);
(statearr_155249[11] = inst_155160);
return statearr_155249;
})();var statearr_155250_155288 = state_155221__$1;(statearr_155250_155288[2] = null);
(statearr_155250_155288[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 17))
{var inst_155174 = (state_155221[15]);var inst_155183 = cljs.core.first(inst_155174);var inst_155184 = cljs.core.async.muxch_STAR_(inst_155183);var inst_155185 = cljs.core.async.close_BANG_(inst_155184);var inst_155186 = cljs.core.next(inst_155174);var inst_155160 = inst_155186;var inst_155161 = null;var inst_155162 = 0;var inst_155163 = 0;var state_155221__$1 = (function (){var statearr_155251 = state_155221;(statearr_155251[8] = inst_155163);
(statearr_155251[9] = inst_155161);
(statearr_155251[10] = inst_155162);
(statearr_155251[11] = inst_155160);
(statearr_155251[16] = inst_155185);
return statearr_155251;
})();var statearr_155252_155289 = state_155221__$1;(statearr_155252_155289[2] = null);
(statearr_155252_155289[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 18))
{var inst_155189 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155253_155290 = state_155221__$1;(statearr_155253_155290[2] = inst_155189);
(statearr_155253_155290[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 19))
{var state_155221__$1 = state_155221;var statearr_155254_155291 = state_155221__$1;(statearr_155254_155291[2] = null);
(statearr_155254_155291[1] = 24);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 20))
{var state_155221__$1 = state_155221;var statearr_155255_155292 = state_155221__$1;(statearr_155255_155292[2] = null);
(statearr_155255_155292[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 21))
{var inst_155214 = (state_155221[2]);var state_155221__$1 = (function (){var statearr_155256 = state_155221;(statearr_155256[17] = inst_155214);
return statearr_155256;
})();var statearr_155257_155293 = state_155221__$1;(statearr_155257_155293[2] = null);
(statearr_155257_155293[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 22))
{var inst_155211 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155258_155294 = state_155221__$1;(statearr_155258_155294[2] = inst_155211);
(statearr_155258_155294[1] = 21);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 23))
{var inst_155198 = (state_155221[13]);var inst_155202 = (state_155221[2]);var inst_155203 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_155198);var state_155221__$1 = (function (){var statearr_155259 = state_155221;(statearr_155259[18] = inst_155202);
return statearr_155259;
})();var statearr_155260_155295 = state_155221__$1;(statearr_155260_155295[2] = inst_155203);
cljs.core.async.impl.ioc_helpers.process_exception(state_155221__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155222 === 24))
{var inst_155150 = (state_155221[7]);var inst_155200 = (state_155221[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_155221,23,Object,null,22);var inst_155207 = cljs.core.async.muxch_STAR_(inst_155200);var state_155221__$1 = state_155221;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155221__$1,25,inst_155207,inst_155150);
} else
{if((state_val_155222 === 25))
{var inst_155209 = (state_155221[2]);var state_155221__$1 = state_155221;var statearr_155261_155296 = state_155221__$1;(statearr_155261_155296[2] = inst_155209);
cljs.core.async.impl.ioc_helpers.process_exception(state_155221__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_155265 = (new Array(19));(statearr_155265[0] = state_machine__10214__auto__);
(statearr_155265[1] = 1);
return statearr_155265;
});
var state_machine__10214__auto____1 = (function (state_155221){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155221);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155266){if((e155266 instanceof Object))
{var ex__10217__auto__ = e155266;var statearr_155267_155297 = state_155221;(statearr_155267_155297[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155221);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155298 = state_155221;
state_155221 = G__155298;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155221){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155268 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155269);
return statearr_155268;
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__10283__auto___155435 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155405){var state_val_155406 = (state_155405[1]);if((state_val_155406 === 1))
{var state_155405__$1 = state_155405;var statearr_155407_155436 = state_155405__$1;(statearr_155407_155436[2] = null);
(statearr_155407_155436[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 2))
{var inst_155368 = cljs.core.reset_BANG_(dctr,cnt);var inst_155369 = 0;var state_155405__$1 = (function (){var statearr_155408 = state_155405;(statearr_155408[7] = inst_155368);
(statearr_155408[8] = inst_155369);
return statearr_155408;
})();var statearr_155409_155437 = state_155405__$1;(statearr_155409_155437[2] = null);
(statearr_155409_155437[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 3))
{var inst_155403 = (state_155405[2]);var state_155405__$1 = state_155405;return cljs.core.async.impl.ioc_helpers.return_chan(state_155405__$1,inst_155403);
} else
{if((state_val_155406 === 4))
{var inst_155369 = (state_155405[8]);var inst_155371 = (inst_155369 < cnt);var state_155405__$1 = state_155405;if(cljs.core.truth_(inst_155371))
{var statearr_155410_155438 = state_155405__$1;(statearr_155410_155438[1] = 6);
} else
{var statearr_155411_155439 = state_155405__$1;(statearr_155411_155439[1] = 7);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 5))
{var inst_155389 = (state_155405[2]);var state_155405__$1 = (function (){var statearr_155412 = state_155405;(statearr_155412[9] = inst_155389);
return statearr_155412;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_155405__$1,12,dchan);
} else
{if((state_val_155406 === 6))
{var state_155405__$1 = state_155405;var statearr_155413_155440 = state_155405__$1;(statearr_155413_155440[2] = null);
(statearr_155413_155440[1] = 11);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 7))
{var state_155405__$1 = state_155405;var statearr_155414_155441 = state_155405__$1;(statearr_155414_155441[2] = null);
(statearr_155414_155441[1] = 8);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 8))
{var inst_155387 = (state_155405[2]);var state_155405__$1 = state_155405;var statearr_155415_155442 = state_155405__$1;(statearr_155415_155442[2] = inst_155387);
(statearr_155415_155442[1] = 5);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 9))
{var inst_155369 = (state_155405[8]);var inst_155382 = (state_155405[2]);var inst_155383 = (inst_155369 + 1);var inst_155369__$1 = inst_155383;var state_155405__$1 = (function (){var statearr_155416 = state_155405;(statearr_155416[10] = inst_155382);
(statearr_155416[8] = inst_155369__$1);
return statearr_155416;
})();var statearr_155417_155443 = state_155405__$1;(statearr_155417_155443[2] = null);
(statearr_155417_155443[1] = 4);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 10))
{var inst_155373 = (state_155405[2]);var inst_155374 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_155405__$1 = (function (){var statearr_155418 = state_155405;(statearr_155418[11] = inst_155373);
return statearr_155418;
})();var statearr_155419_155444 = state_155405__$1;(statearr_155419_155444[2] = inst_155374);
cljs.core.async.impl.ioc_helpers.process_exception(state_155405__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 11))
{var inst_155369 = (state_155405[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_155405,10,Object,null,9);var inst_155378 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_155369) : chs__$1.call(null,inst_155369));var inst_155379 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_155369) : done.call(null,inst_155369));var inst_155380 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_155378,inst_155379);var state_155405__$1 = state_155405;var statearr_155420_155445 = state_155405__$1;(statearr_155420_155445[2] = inst_155380);
cljs.core.async.impl.ioc_helpers.process_exception(state_155405__$1);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 12))
{var inst_155391 = (state_155405[12]);var inst_155391__$1 = (state_155405[2]);var inst_155392 = cljs.core.some(cljs.core.nil_QMARK_,inst_155391__$1);var state_155405__$1 = (function (){var statearr_155421 = state_155405;(statearr_155421[12] = inst_155391__$1);
return statearr_155421;
})();if(cljs.core.truth_(inst_155392))
{var statearr_155422_155446 = state_155405__$1;(statearr_155422_155446[1] = 13);
} else
{var statearr_155423_155447 = state_155405__$1;(statearr_155423_155447[1] = 14);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 13))
{var inst_155394 = cljs.core.async.close_BANG_(out);var state_155405__$1 = state_155405;var statearr_155424_155448 = state_155405__$1;(statearr_155424_155448[2] = inst_155394);
(statearr_155424_155448[1] = 15);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 14))
{var inst_155391 = (state_155405[12]);var inst_155396 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_155391);var state_155405__$1 = state_155405;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155405__$1,16,out,inst_155396);
} else
{if((state_val_155406 === 15))
{var inst_155401 = (state_155405[2]);var state_155405__$1 = state_155405;var statearr_155425_155449 = state_155405__$1;(statearr_155425_155449[2] = inst_155401);
(statearr_155425_155449[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155406 === 16))
{var inst_155398 = (state_155405[2]);var state_155405__$1 = (function (){var statearr_155426 = state_155405;(statearr_155426[13] = inst_155398);
return statearr_155426;
})();var statearr_155427_155450 = state_155405__$1;(statearr_155427_155450[2] = null);
(statearr_155427_155450[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_155431 = (new Array(14));(statearr_155431[0] = state_machine__10214__auto__);
(statearr_155431[1] = 1);
return statearr_155431;
});
var state_machine__10214__auto____1 = (function (state_155405){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155405);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155432){if((e155432 instanceof Object))
{var ex__10217__auto__ = e155432;var statearr_155433_155451 = state_155405;(statearr_155433_155451[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155405);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155452 = state_155405;
state_155405 = G__155452;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155405){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155434 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155435);
return statearr_155434;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___155560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155536){var state_val_155537 = (state_155536[1]);if((state_val_155537 === 1))
{var inst_155507 = cljs.core.vec(chs);var inst_155508 = inst_155507;var state_155536__$1 = (function (){var statearr_155538 = state_155536;(statearr_155538[7] = inst_155508);
return statearr_155538;
})();var statearr_155539_155561 = state_155536__$1;(statearr_155539_155561[2] = null);
(statearr_155539_155561[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 2))
{var inst_155508 = (state_155536[7]);var inst_155510 = cljs.core.count(inst_155508);var inst_155511 = (inst_155510 > 0);var state_155536__$1 = state_155536;if(cljs.core.truth_(inst_155511))
{var statearr_155540_155562 = state_155536__$1;(statearr_155540_155562[1] = 4);
} else
{var statearr_155541_155563 = state_155536__$1;(statearr_155541_155563[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 3))
{var inst_155534 = (state_155536[2]);var state_155536__$1 = state_155536;return cljs.core.async.impl.ioc_helpers.return_chan(state_155536__$1,inst_155534);
} else
{if((state_val_155537 === 4))
{var inst_155508 = (state_155536[7]);var state_155536__$1 = state_155536;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_155536__$1,7,inst_155508);
} else
{if((state_val_155537 === 5))
{var inst_155530 = cljs.core.async.close_BANG_(out);var state_155536__$1 = state_155536;var statearr_155542_155564 = state_155536__$1;(statearr_155542_155564[2] = inst_155530);
(statearr_155542_155564[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 6))
{var inst_155532 = (state_155536[2]);var state_155536__$1 = state_155536;var statearr_155543_155565 = state_155536__$1;(statearr_155543_155565[2] = inst_155532);
(statearr_155543_155565[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 7))
{var inst_155515 = (state_155536[8]);var inst_155516 = (state_155536[9]);var inst_155515__$1 = (state_155536[2]);var inst_155516__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_155515__$1,0,null);var inst_155517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_155515__$1,1,null);var inst_155518 = (inst_155516__$1 == null);var state_155536__$1 = (function (){var statearr_155544 = state_155536;(statearr_155544[8] = inst_155515__$1);
(statearr_155544[10] = inst_155517);
(statearr_155544[9] = inst_155516__$1);
return statearr_155544;
})();if(cljs.core.truth_(inst_155518))
{var statearr_155545_155566 = state_155536__$1;(statearr_155545_155566[1] = 8);
} else
{var statearr_155546_155567 = state_155536__$1;(statearr_155546_155567[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 8))
{var inst_155508 = (state_155536[7]);var inst_155515 = (state_155536[8]);var inst_155517 = (state_155536[10]);var inst_155516 = (state_155536[9]);var inst_155520 = (function (){var c = inst_155517;var v = inst_155516;var vec__155513 = inst_155515;var cs = inst_155508;return ((function (c,v,vec__155513,cs,inst_155508,inst_155515,inst_155517,inst_155516,state_val_155537){
return (function (p1__155453_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__155453_SHARP_);
});
;})(c,v,vec__155513,cs,inst_155508,inst_155515,inst_155517,inst_155516,state_val_155537))
})();var inst_155521 = cljs.core.filterv(inst_155520,inst_155508);var inst_155508__$1 = inst_155521;var state_155536__$1 = (function (){var statearr_155547 = state_155536;(statearr_155547[7] = inst_155508__$1);
return statearr_155547;
})();var statearr_155548_155568 = state_155536__$1;(statearr_155548_155568[2] = null);
(statearr_155548_155568[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 9))
{var inst_155516 = (state_155536[9]);var state_155536__$1 = state_155536;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155536__$1,11,out,inst_155516);
} else
{if((state_val_155537 === 10))
{var inst_155528 = (state_155536[2]);var state_155536__$1 = state_155536;var statearr_155550_155569 = state_155536__$1;(statearr_155550_155569[2] = inst_155528);
(statearr_155550_155569[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155537 === 11))
{var inst_155508 = (state_155536[7]);var inst_155525 = (state_155536[2]);var tmp155549 = inst_155508;var inst_155508__$1 = tmp155549;var state_155536__$1 = (function (){var statearr_155551 = state_155536;(statearr_155551[11] = inst_155525);
(statearr_155551[7] = inst_155508__$1);
return statearr_155551;
})();var statearr_155552_155570 = state_155536__$1;(statearr_155552_155570[2] = null);
(statearr_155552_155570[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_155556 = (new Array(12));(statearr_155556[0] = state_machine__10214__auto__);
(statearr_155556[1] = 1);
return statearr_155556;
});
var state_machine__10214__auto____1 = (function (state_155536){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155536);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155557){if((e155557 instanceof Object))
{var ex__10217__auto__ = e155557;var statearr_155558_155571 = state_155536;(statearr_155558_155571[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155536);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155557;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155572 = state_155536;
state_155536 = G__155572;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155536){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155559 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155560);
return statearr_155559;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___155665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155642){var state_val_155643 = (state_155642[1]);if((state_val_155643 === 1))
{var inst_155619 = 0;var state_155642__$1 = (function (){var statearr_155644 = state_155642;(statearr_155644[7] = inst_155619);
return statearr_155644;
})();var statearr_155645_155666 = state_155642__$1;(statearr_155645_155666[2] = null);
(statearr_155645_155666[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 2))
{var inst_155619 = (state_155642[7]);var inst_155621 = (inst_155619 < n);var state_155642__$1 = state_155642;if(cljs.core.truth_(inst_155621))
{var statearr_155646_155667 = state_155642__$1;(statearr_155646_155667[1] = 4);
} else
{var statearr_155647_155668 = state_155642__$1;(statearr_155647_155668[1] = 5);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 3))
{var inst_155639 = (state_155642[2]);var inst_155640 = cljs.core.async.close_BANG_(out);var state_155642__$1 = (function (){var statearr_155648 = state_155642;(statearr_155648[8] = inst_155639);
return statearr_155648;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_155642__$1,inst_155640);
} else
{if((state_val_155643 === 4))
{var state_155642__$1 = state_155642;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_155642__$1,7,ch);
} else
{if((state_val_155643 === 5))
{var state_155642__$1 = state_155642;var statearr_155649_155669 = state_155642__$1;(statearr_155649_155669[2] = null);
(statearr_155649_155669[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 6))
{var inst_155637 = (state_155642[2]);var state_155642__$1 = state_155642;var statearr_155650_155670 = state_155642__$1;(statearr_155650_155670[2] = inst_155637);
(statearr_155650_155670[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 7))
{var inst_155624 = (state_155642[9]);var inst_155624__$1 = (state_155642[2]);var inst_155625 = (inst_155624__$1 == null);var inst_155626 = cljs.core.not(inst_155625);var state_155642__$1 = (function (){var statearr_155651 = state_155642;(statearr_155651[9] = inst_155624__$1);
return statearr_155651;
})();if(inst_155626)
{var statearr_155652_155671 = state_155642__$1;(statearr_155652_155671[1] = 8);
} else
{var statearr_155653_155672 = state_155642__$1;(statearr_155653_155672[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 8))
{var inst_155624 = (state_155642[9]);var state_155642__$1 = state_155642;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155642__$1,11,out,inst_155624);
} else
{if((state_val_155643 === 9))
{var state_155642__$1 = state_155642;var statearr_155654_155673 = state_155642__$1;(statearr_155654_155673[2] = null);
(statearr_155654_155673[1] = 10);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 10))
{var inst_155634 = (state_155642[2]);var state_155642__$1 = state_155642;var statearr_155655_155674 = state_155642__$1;(statearr_155655_155674[2] = inst_155634);
(statearr_155655_155674[1] = 6);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155643 === 11))
{var inst_155619 = (state_155642[7]);var inst_155629 = (state_155642[2]);var inst_155630 = (inst_155619 + 1);var inst_155619__$1 = inst_155630;var state_155642__$1 = (function (){var statearr_155656 = state_155642;(statearr_155656[7] = inst_155619__$1);
(statearr_155656[10] = inst_155629);
return statearr_155656;
})();var statearr_155657_155675 = state_155642__$1;(statearr_155657_155675[2] = null);
(statearr_155657_155675[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_155661 = (new Array(11));(statearr_155661[0] = state_machine__10214__auto__);
(statearr_155661[1] = 1);
return statearr_155661;
});
var state_machine__10214__auto____1 = (function (state_155642){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155642);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155662){if((e155662 instanceof Object))
{var ex__10217__auto__ = e155662;var statearr_155663_155676 = state_155642;(statearr_155663_155676[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155642);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155677 = state_155642;
state_155642 = G__155677;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155642){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155664 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155665);
return statearr_155664;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___155774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155749){var state_val_155750 = (state_155749[1]);if((state_val_155750 === 1))
{var inst_155726 = null;var state_155749__$1 = (function (){var statearr_155751 = state_155749;(statearr_155751[7] = inst_155726);
return statearr_155751;
})();var statearr_155752_155775 = state_155749__$1;(statearr_155752_155775[2] = null);
(statearr_155752_155775[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 2))
{var state_155749__$1 = state_155749;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_155749__$1,4,ch);
} else
{if((state_val_155750 === 3))
{var inst_155746 = (state_155749[2]);var inst_155747 = cljs.core.async.close_BANG_(out);var state_155749__$1 = (function (){var statearr_155753 = state_155749;(statearr_155753[8] = inst_155746);
return statearr_155753;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_155749__$1,inst_155747);
} else
{if((state_val_155750 === 4))
{var inst_155729 = (state_155749[9]);var inst_155729__$1 = (state_155749[2]);var inst_155730 = (inst_155729__$1 == null);var inst_155731 = cljs.core.not(inst_155730);var state_155749__$1 = (function (){var statearr_155754 = state_155749;(statearr_155754[9] = inst_155729__$1);
return statearr_155754;
})();if(inst_155731)
{var statearr_155755_155776 = state_155749__$1;(statearr_155755_155776[1] = 5);
} else
{var statearr_155756_155777 = state_155749__$1;(statearr_155756_155777[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 5))
{var inst_155726 = (state_155749[7]);var inst_155729 = (state_155749[9]);var inst_155733 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_155729,inst_155726);var state_155749__$1 = state_155749;if(inst_155733)
{var statearr_155757_155778 = state_155749__$1;(statearr_155757_155778[1] = 8);
} else
{var statearr_155758_155779 = state_155749__$1;(statearr_155758_155779[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 6))
{var state_155749__$1 = state_155749;var statearr_155760_155780 = state_155749__$1;(statearr_155760_155780[2] = null);
(statearr_155760_155780[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 7))
{var inst_155744 = (state_155749[2]);var state_155749__$1 = state_155749;var statearr_155761_155781 = state_155749__$1;(statearr_155761_155781[2] = inst_155744);
(statearr_155761_155781[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 8))
{var inst_155726 = (state_155749[7]);var tmp155759 = inst_155726;var inst_155726__$1 = tmp155759;var state_155749__$1 = (function (){var statearr_155762 = state_155749;(statearr_155762[7] = inst_155726__$1);
return statearr_155762;
})();var statearr_155763_155782 = state_155749__$1;(statearr_155763_155782[2] = null);
(statearr_155763_155782[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 9))
{var inst_155729 = (state_155749[9]);var state_155749__$1 = state_155749;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155749__$1,11,out,inst_155729);
} else
{if((state_val_155750 === 10))
{var inst_155741 = (state_155749[2]);var state_155749__$1 = state_155749;var statearr_155764_155783 = state_155749__$1;(statearr_155764_155783[2] = inst_155741);
(statearr_155764_155783[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155750 === 11))
{var inst_155729 = (state_155749[9]);var inst_155738 = (state_155749[2]);var inst_155726 = inst_155729;var state_155749__$1 = (function (){var statearr_155765 = state_155749;(statearr_155765[7] = inst_155726);
(statearr_155765[10] = inst_155738);
return statearr_155765;
})();var statearr_155766_155784 = state_155749__$1;(statearr_155766_155784[2] = null);
(statearr_155766_155784[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_155770 = (new Array(11));(statearr_155770[0] = state_machine__10214__auto__);
(statearr_155770[1] = 1);
return statearr_155770;
});
var state_machine__10214__auto____1 = (function (state_155749){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155749);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155771){if((e155771 instanceof Object))
{var ex__10217__auto__ = e155771;var statearr_155772_155785 = state_155749;(statearr_155772_155785[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155749);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155771;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155786 = state_155749;
state_155749 = G__155786;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155749){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155773 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155774);
return statearr_155773;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___155921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_155891){var state_val_155892 = (state_155891[1]);if((state_val_155892 === 1))
{var inst_155854 = (new Array(n));var inst_155855 = inst_155854;var inst_155856 = 0;var state_155891__$1 = (function (){var statearr_155893 = state_155891;(statearr_155893[7] = inst_155856);
(statearr_155893[8] = inst_155855);
return statearr_155893;
})();var statearr_155894_155922 = state_155891__$1;(statearr_155894_155922[2] = null);
(statearr_155894_155922[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 2))
{var state_155891__$1 = state_155891;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_155891__$1,4,ch);
} else
{if((state_val_155892 === 3))
{var inst_155889 = (state_155891[2]);var state_155891__$1 = state_155891;return cljs.core.async.impl.ioc_helpers.return_chan(state_155891__$1,inst_155889);
} else
{if((state_val_155892 === 4))
{var inst_155859 = (state_155891[9]);var inst_155859__$1 = (state_155891[2]);var inst_155860 = (inst_155859__$1 == null);var inst_155861 = cljs.core.not(inst_155860);var state_155891__$1 = (function (){var statearr_155895 = state_155891;(statearr_155895[9] = inst_155859__$1);
return statearr_155895;
})();if(inst_155861)
{var statearr_155896_155923 = state_155891__$1;(statearr_155896_155923[1] = 5);
} else
{var statearr_155897_155924 = state_155891__$1;(statearr_155897_155924[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 5))
{var inst_155856 = (state_155891[7]);var inst_155855 = (state_155891[8]);var inst_155864 = (state_155891[10]);var inst_155859 = (state_155891[9]);var inst_155863 = (inst_155855[inst_155856] = inst_155859);var inst_155864__$1 = (inst_155856 + 1);var inst_155865 = (inst_155864__$1 < n);var state_155891__$1 = (function (){var statearr_155898 = state_155891;(statearr_155898[11] = inst_155863);
(statearr_155898[10] = inst_155864__$1);
return statearr_155898;
})();if(cljs.core.truth_(inst_155865))
{var statearr_155899_155925 = state_155891__$1;(statearr_155899_155925[1] = 8);
} else
{var statearr_155900_155926 = state_155891__$1;(statearr_155900_155926[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 6))
{var inst_155856 = (state_155891[7]);var inst_155877 = (inst_155856 > 0);var state_155891__$1 = state_155891;if(cljs.core.truth_(inst_155877))
{var statearr_155902_155927 = state_155891__$1;(statearr_155902_155927[1] = 12);
} else
{var statearr_155903_155928 = state_155891__$1;(statearr_155903_155928[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 7))
{var inst_155887 = (state_155891[2]);var state_155891__$1 = state_155891;var statearr_155904_155929 = state_155891__$1;(statearr_155904_155929[2] = inst_155887);
(statearr_155904_155929[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 8))
{var inst_155855 = (state_155891[8]);var inst_155864 = (state_155891[10]);var tmp155901 = inst_155855;var inst_155855__$1 = tmp155901;var inst_155856 = inst_155864;var state_155891__$1 = (function (){var statearr_155905 = state_155891;(statearr_155905[7] = inst_155856);
(statearr_155905[8] = inst_155855__$1);
return statearr_155905;
})();var statearr_155906_155930 = state_155891__$1;(statearr_155906_155930[2] = null);
(statearr_155906_155930[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 9))
{var inst_155855 = (state_155891[8]);var inst_155869 = cljs.core.vec(inst_155855);var state_155891__$1 = state_155891;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155891__$1,11,out,inst_155869);
} else
{if((state_val_155892 === 10))
{var inst_155875 = (state_155891[2]);var state_155891__$1 = state_155891;var statearr_155907_155931 = state_155891__$1;(statearr_155907_155931[2] = inst_155875);
(statearr_155907_155931[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 11))
{var inst_155871 = (state_155891[2]);var inst_155872 = (new Array(n));var inst_155855 = inst_155872;var inst_155856 = 0;var state_155891__$1 = (function (){var statearr_155908 = state_155891;(statearr_155908[7] = inst_155856);
(statearr_155908[8] = inst_155855);
(statearr_155908[12] = inst_155871);
return statearr_155908;
})();var statearr_155909_155932 = state_155891__$1;(statearr_155909_155932[2] = null);
(statearr_155909_155932[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 12))
{var inst_155855 = (state_155891[8]);var inst_155879 = cljs.core.vec(inst_155855);var state_155891__$1 = state_155891;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_155891__$1,15,out,inst_155879);
} else
{if((state_val_155892 === 13))
{var state_155891__$1 = state_155891;var statearr_155910_155933 = state_155891__$1;(statearr_155910_155933[2] = null);
(statearr_155910_155933[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 14))
{var inst_155884 = (state_155891[2]);var inst_155885 = cljs.core.async.close_BANG_(out);var state_155891__$1 = (function (){var statearr_155911 = state_155891;(statearr_155911[13] = inst_155884);
return statearr_155911;
})();var statearr_155912_155934 = state_155891__$1;(statearr_155912_155934[2] = inst_155885);
(statearr_155912_155934[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_155892 === 15))
{var inst_155881 = (state_155891[2]);var state_155891__$1 = state_155891;var statearr_155913_155935 = state_155891__$1;(statearr_155913_155935[2] = inst_155881);
(statearr_155913_155935[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_155917 = (new Array(14));(statearr_155917[0] = state_machine__10214__auto__);
(statearr_155917[1] = 1);
return statearr_155917;
});
var state_machine__10214__auto____1 = (function (state_155891){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_155891);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e155918){if((e155918 instanceof Object))
{var ex__10217__auto__ = e155918;var statearr_155919_155936 = state_155891;(statearr_155919_155936[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_155891);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e155918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__155937 = state_155891;
state_155891 = G__155937;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_155891){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_155891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_155920 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_155920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___155921);
return statearr_155920;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__10283__auto___156080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_156050){var state_val_156051 = (state_156050[1]);if((state_val_156051 === 1))
{var inst_156009 = (new Array(0));var inst_156010 = inst_156009;var inst_156011 = cljs.core.constant$keyword$310;var state_156050__$1 = (function (){var statearr_156052 = state_156050;(statearr_156052[7] = inst_156010);
(statearr_156052[8] = inst_156011);
return statearr_156052;
})();var statearr_156053_156081 = state_156050__$1;(statearr_156053_156081[2] = null);
(statearr_156053_156081[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 2))
{var state_156050__$1 = state_156050;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_156050__$1,4,ch);
} else
{if((state_val_156051 === 3))
{var inst_156048 = (state_156050[2]);var state_156050__$1 = state_156050;return cljs.core.async.impl.ioc_helpers.return_chan(state_156050__$1,inst_156048);
} else
{if((state_val_156051 === 4))
{var inst_156014 = (state_156050[9]);var inst_156014__$1 = (state_156050[2]);var inst_156015 = (inst_156014__$1 == null);var inst_156016 = cljs.core.not(inst_156015);var state_156050__$1 = (function (){var statearr_156054 = state_156050;(statearr_156054[9] = inst_156014__$1);
return statearr_156054;
})();if(inst_156016)
{var statearr_156055_156082 = state_156050__$1;(statearr_156055_156082[1] = 5);
} else
{var statearr_156056_156083 = state_156050__$1;(statearr_156056_156083[1] = 6);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 5))
{var inst_156014 = (state_156050[9]);var inst_156011 = (state_156050[8]);var inst_156018 = (state_156050[10]);var inst_156018__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_156014) : f.call(null,inst_156014));var inst_156019 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_156018__$1,inst_156011);var inst_156020 = cljs.core.keyword_identical_QMARK_(inst_156011,cljs.core.constant$keyword$310);var inst_156021 = (inst_156019) || (inst_156020);var state_156050__$1 = (function (){var statearr_156057 = state_156050;(statearr_156057[10] = inst_156018__$1);
return statearr_156057;
})();if(cljs.core.truth_(inst_156021))
{var statearr_156058_156084 = state_156050__$1;(statearr_156058_156084[1] = 8);
} else
{var statearr_156059_156085 = state_156050__$1;(statearr_156059_156085[1] = 9);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 6))
{var inst_156010 = (state_156050[7]);var inst_156035 = inst_156010.length;var inst_156036 = (inst_156035 > 0);var state_156050__$1 = state_156050;if(cljs.core.truth_(inst_156036))
{var statearr_156061_156086 = state_156050__$1;(statearr_156061_156086[1] = 12);
} else
{var statearr_156062_156087 = state_156050__$1;(statearr_156062_156087[1] = 13);
}
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 7))
{var inst_156046 = (state_156050[2]);var state_156050__$1 = state_156050;var statearr_156063_156088 = state_156050__$1;(statearr_156063_156088[2] = inst_156046);
(statearr_156063_156088[1] = 3);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 8))
{var inst_156014 = (state_156050[9]);var inst_156010 = (state_156050[7]);var inst_156018 = (state_156050[10]);var inst_156023 = inst_156010.push(inst_156014);var tmp156060 = inst_156010;var inst_156010__$1 = tmp156060;var inst_156011 = inst_156018;var state_156050__$1 = (function (){var statearr_156064 = state_156050;(statearr_156064[7] = inst_156010__$1);
(statearr_156064[8] = inst_156011);
(statearr_156064[11] = inst_156023);
return statearr_156064;
})();var statearr_156065_156089 = state_156050__$1;(statearr_156065_156089[2] = null);
(statearr_156065_156089[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 9))
{var inst_156010 = (state_156050[7]);var inst_156026 = cljs.core.vec(inst_156010);var state_156050__$1 = state_156050;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_156050__$1,11,out,inst_156026);
} else
{if((state_val_156051 === 10))
{var inst_156033 = (state_156050[2]);var state_156050__$1 = state_156050;var statearr_156066_156090 = state_156050__$1;(statearr_156066_156090[2] = inst_156033);
(statearr_156066_156090[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 11))
{var inst_156014 = (state_156050[9]);var inst_156018 = (state_156050[10]);var inst_156028 = (state_156050[2]);var inst_156029 = (new Array(0));var inst_156030 = inst_156029.push(inst_156014);var inst_156010 = inst_156029;var inst_156011 = inst_156018;var state_156050__$1 = (function (){var statearr_156067 = state_156050;(statearr_156067[7] = inst_156010);
(statearr_156067[8] = inst_156011);
(statearr_156067[12] = inst_156028);
(statearr_156067[13] = inst_156030);
return statearr_156067;
})();var statearr_156068_156091 = state_156050__$1;(statearr_156068_156091[2] = null);
(statearr_156068_156091[1] = 2);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 12))
{var inst_156010 = (state_156050[7]);var inst_156038 = cljs.core.vec(inst_156010);var state_156050__$1 = state_156050;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_156050__$1,15,out,inst_156038);
} else
{if((state_val_156051 === 13))
{var state_156050__$1 = state_156050;var statearr_156069_156092 = state_156050__$1;(statearr_156069_156092[2] = null);
(statearr_156069_156092[1] = 14);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 14))
{var inst_156043 = (state_156050[2]);var inst_156044 = cljs.core.async.close_BANG_(out);var state_156050__$1 = (function (){var statearr_156070 = state_156050;(statearr_156070[14] = inst_156043);
return statearr_156070;
})();var statearr_156071_156093 = state_156050__$1;(statearr_156071_156093[2] = inst_156044);
(statearr_156071_156093[1] = 7);
return cljs.core.constant$keyword$297;
} else
{if((state_val_156051 === 15))
{var inst_156040 = (state_156050[2]);var state_156050__$1 = state_156050;var statearr_156072_156094 = state_156050__$1;(statearr_156072_156094[2] = inst_156040);
(statearr_156072_156094[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_156076 = (new Array(15));(statearr_156076[0] = state_machine__10214__auto__);
(statearr_156076[1] = 1);
return statearr_156076;
});
var state_machine__10214__auto____1 = (function (state_156050){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__(state_156050);if(cljs.core.keyword_identical_QMARK_(result__10216__auto__,cljs.core.constant$keyword$297))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e156077){if((e156077 instanceof Object))
{var ex__10217__auto__ = e156077;var statearr_156078_156095 = state_156050;(statearr_156078_156095[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_156050);
return cljs.core.constant$keyword$297;
} else
{if(cljs.core.constant$keyword$286)
{throw e156077;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__10215__auto__,cljs.core.constant$keyword$297))
{{
var G__156096 = state_156050;
state_156050 = G__156096;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_156050){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_156050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_156079 = (f__10284__auto__.cljs$core$IFn$_invoke$arity$0 ? f__10284__auto__.cljs$core$IFn$_invoke$arity$0() : f__10284__auto__.call(null));(statearr_156079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___156080);
return statearr_156079;
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
