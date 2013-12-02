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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t50481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50481 = (function (f,fn_handler,meta50482){
this.f = f;
this.fn_handler = fn_handler;
this.meta50482 = meta50482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50481.cljs$lang$type = true;
cljs.core.async.t50481.cljs$lang$ctorStr = "cljs.core.async/t50481";
cljs.core.async.t50481.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50481");
});
cljs.core.async.t50481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t50481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t50481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50483){var self__ = this;
var _50483__$1 = this;return self__.meta50482;
});
cljs.core.async.t50481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50483,meta50482__$1){var self__ = this;
var _50483__$1 = this;return (new cljs.core.async.t50481(self__.f,self__.fn_handler,meta50482__$1));
});
cljs.core.async.__GT_t50481 = (function __GT_t50481(f__$1,fn_handler__$1,meta50482){return (new cljs.core.async.t50481(f__$1,fn_handler__$1,meta50482));
});
}
return (new cljs.core.async.t50481(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__50485 = buff;if(G__50485)
{var bit__11523__auto__ = null;if(cljs.core.truth_((function (){var or__10897__auto__ = bit__11523__auto__;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return G__50485.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__50485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__50485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__50485);
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
{var val_50486 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50486) : fn1.call(null,val_50486));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50486) : fn1.call(null,val_50486));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__10885__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__11720__auto___50487 = n;var x_50488 = 0;while(true){
if((x_50488 < n__11720__auto___50487))
{(a[x_50488] = 0);
{
var G__50489 = (x_50488 + 1);
x_50488 = G__50489;
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
var G__50490 = (i + 1);
i = G__50490;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t50494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50494 = (function (flag,alt_flag,meta50495){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta50495 = meta50495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50494.cljs$lang$type = true;
cljs.core.async.t50494.cljs$lang$ctorStr = "cljs.core.async/t50494";
cljs.core.async.t50494.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50494");
});
cljs.core.async.t50494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t50494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t50494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50496){var self__ = this;
var _50496__$1 = this;return self__.meta50495;
});
cljs.core.async.t50494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50496,meta50495__$1){var self__ = this;
var _50496__$1 = this;return (new cljs.core.async.t50494(self__.flag,self__.alt_flag,meta50495__$1));
});
cljs.core.async.__GT_t50494 = (function __GT_t50494(flag__$1,alt_flag__$1,meta50495){return (new cljs.core.async.t50494(flag__$1,alt_flag__$1,meta50495));
});
}
return (new cljs.core.async.t50494(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t50500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50500 = (function (cb,flag,alt_handler,meta50501){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta50501 = meta50501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50500.cljs$lang$type = true;
cljs.core.async.t50500.cljs$lang$ctorStr = "cljs.core.async/t50500";
cljs.core.async.t50500.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50500");
});
cljs.core.async.t50500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t50500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t50500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50502){var self__ = this;
var _50502__$1 = this;return self__.meta50501;
});
cljs.core.async.t50500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50502,meta50501__$1){var self__ = this;
var _50502__$1 = this;return (new cljs.core.async.t50500(self__.cb,self__.flag,self__.alt_handler,meta50501__$1));
});
cljs.core.async.__GT_t50500 = (function __GT_t50500(cb__$1,flag__$1,alt_handler__$1,meta50501){return (new cljs.core.async.t50500(cb__$1,flag__$1,alt_handler__$1,meta50501));
});
}
return (new cljs.core.async.t50500(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50503_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50503_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50503_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__10897__auto__ = wport;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__50504 = (i + 1);
i = G__50504;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__10897__auto__ = ret;if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$275))
{var temp__4098__auto__ = (function (){var and__10885__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__10885__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__10885__auto__;
}
})();if(cljs.core.truth_(temp__4098__auto__))
{var got = temp__4098__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$275], null));
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
var alts_BANG___delegate = function (ports,p__50505){var map__50507 = p__50505;var map__50507__$1 = ((cljs.core.seq_QMARK_(map__50507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50507):map__50507);var opts = map__50507__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__50505 = null;if (arguments.length > 1) {
  p__50505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__50505);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__50508){
var ports = cljs.core.first(arglist__50508);
var p__50505 = cljs.core.rest(arglist__50508);
return alts_BANG___delegate(ports,p__50505);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t50516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50516 = (function (ch,f,map_LT_,meta50517){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50517 = meta50517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50516.cljs$lang$type = true;
cljs.core.async.t50516.cljs$lang$ctorStr = "cljs.core.async/t50516";
cljs.core.async.t50516.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50516");
});
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t50519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50519 = (function (fn1,_,meta50517,ch,f,map_LT_,meta50520){
this.fn1 = fn1;
this._ = _;
this.meta50517 = meta50517;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta50520 = meta50520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50519.cljs$lang$type = true;
cljs.core.async.t50519.cljs$lang$ctorStr = "cljs.core.async/t50519";
cljs.core.async.t50519.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50519");
});
cljs.core.async.t50519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t50519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t50519.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t50519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__50509_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__50509_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50509_SHARP_) : self__.f.call(null,p1__50509_SHARP_)))) : f1.call(null,(((p1__50509_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__50509_SHARP_) : self__.f.call(null,p1__50509_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t50519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50521){var self__ = this;
var _50521__$1 = this;return self__.meta50520;
});
cljs.core.async.t50519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50521,meta50520__$1){var self__ = this;
var _50521__$1 = this;return (new cljs.core.async.t50519(self__.fn1,self__._,self__.meta50517,self__.ch,self__.f,self__.map_LT_,meta50520__$1));
});
cljs.core.async.__GT_t50519 = (function __GT_t50519(fn1__$1,___$2,meta50517__$1,ch__$2,f__$2,map_LT___$2,meta50520){return (new cljs.core.async.t50519(fn1__$1,___$2,meta50517__$1,ch__$2,f__$2,map_LT___$2,meta50520));
});
}
return (new cljs.core.async.t50519(fn1,___$1,self__.meta50517,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__10885__auto__ = ret;if(cljs.core.truth_(and__10885__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__10885__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t50516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50518){var self__ = this;
var _50518__$1 = this;return self__.meta50517;
});
cljs.core.async.t50516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50518,meta50517__$1){var self__ = this;
var _50518__$1 = this;return (new cljs.core.async.t50516(self__.ch,self__.f,self__.map_LT_,meta50517__$1));
});
cljs.core.async.__GT_t50516 = (function __GT_t50516(ch__$1,f__$1,map_LT___$1,meta50517){return (new cljs.core.async.t50516(ch__$1,f__$1,map_LT___$1,meta50517));
});
}
return (new cljs.core.async.t50516(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t50525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50525 = (function (ch,f,map_GT_,meta50526){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta50526 = meta50526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50525.cljs$lang$type = true;
cljs.core.async.t50525.cljs$lang$ctorStr = "cljs.core.async/t50525";
cljs.core.async.t50525.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50525");
});
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t50525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50527){var self__ = this;
var _50527__$1 = this;return self__.meta50526;
});
cljs.core.async.t50525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50527,meta50526__$1){var self__ = this;
var _50527__$1 = this;return (new cljs.core.async.t50525(self__.ch,self__.f,self__.map_GT_,meta50526__$1));
});
cljs.core.async.__GT_t50525 = (function __GT_t50525(ch__$1,f__$1,map_GT___$1,meta50526){return (new cljs.core.async.t50525(ch__$1,f__$1,map_GT___$1,meta50526));
});
}
return (new cljs.core.async.t50525(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t50531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t50531 = (function (ch,p,filter_GT_,meta50532){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta50532 = meta50532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t50531.cljs$lang$type = true;
cljs.core.async.t50531.cljs$lang$ctorStr = "cljs.core.async/t50531";
cljs.core.async.t50531.cljs$lang$ctorPrWriter = (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t50531");
});
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t50531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t50531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50533){var self__ = this;
var _50533__$1 = this;return self__.meta50532;
});
cljs.core.async.t50531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50533,meta50532__$1){var self__ = this;
var _50533__$1 = this;return (new cljs.core.async.t50531(self__.ch,self__.p,self__.filter_GT_,meta50532__$1));
});
cljs.core.async.__GT_t50531 = (function __GT_t50531(ch__$1,p__$1,filter_GT___$1,meta50532){return (new cljs.core.async.t50531(ch__$1,p__$1,filter_GT___$1,meta50532));
});
}
return (new cljs.core.async.t50531(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___50616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_50595){var state_val_50596 = (state_50595[1]);if((state_val_50596 === 1))
{var state_50595__$1 = state_50595;var statearr_50597_50617 = state_50595__$1;(statearr_50597_50617[2] = null);
(statearr_50597_50617[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 2))
{var state_50595__$1 = state_50595;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50595__$1,4,ch);
} else
{if((state_val_50596 === 3))
{var inst_50593 = (state_50595[2]);var state_50595__$1 = state_50595;return cljs.core.async.impl.ioc_helpers.return_chan(state_50595__$1,inst_50593);
} else
{if((state_val_50596 === 4))
{var inst_50577 = (state_50595[7]);var inst_50577__$1 = (state_50595[2]);var inst_50578 = (inst_50577__$1 == null);var state_50595__$1 = (function (){var statearr_50598 = state_50595;(statearr_50598[7] = inst_50577__$1);
return statearr_50598;
})();if(cljs.core.truth_(inst_50578))
{var statearr_50599_50618 = state_50595__$1;(statearr_50599_50618[1] = 5);
} else
{var statearr_50600_50619 = state_50595__$1;(statearr_50600_50619[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 5))
{var inst_50580 = cljs.core.async.close_BANG_(out);var state_50595__$1 = state_50595;var statearr_50601_50620 = state_50595__$1;(statearr_50601_50620[2] = inst_50580);
(statearr_50601_50620[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 6))
{var inst_50577 = (state_50595[7]);var inst_50582 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50577) : p.call(null,inst_50577));var state_50595__$1 = state_50595;if(cljs.core.truth_(inst_50582))
{var statearr_50602_50621 = state_50595__$1;(statearr_50602_50621[1] = 8);
} else
{var statearr_50603_50622 = state_50595__$1;(statearr_50603_50622[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 7))
{var inst_50591 = (state_50595[2]);var state_50595__$1 = state_50595;var statearr_50604_50623 = state_50595__$1;(statearr_50604_50623[2] = inst_50591);
(statearr_50604_50623[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 8))
{var inst_50577 = (state_50595[7]);var state_50595__$1 = state_50595;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50595__$1,11,out,inst_50577);
} else
{if((state_val_50596 === 9))
{var state_50595__$1 = state_50595;var statearr_50605_50624 = state_50595__$1;(statearr_50605_50624[2] = null);
(statearr_50605_50624[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 10))
{var inst_50588 = (state_50595[2]);var state_50595__$1 = (function (){var statearr_50606 = state_50595;(statearr_50606[8] = inst_50588);
return statearr_50606;
})();var statearr_50607_50625 = state_50595__$1;(statearr_50607_50625[2] = null);
(statearr_50607_50625[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50596 === 11))
{var inst_50585 = (state_50595[2]);var state_50595__$1 = state_50595;var statearr_50608_50626 = state_50595__$1;(statearr_50608_50626[2] = inst_50585);
(statearr_50608_50626[1] = 10);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_50612 = (new Array(9));(statearr_50612[0] = state_machine__13894__auto__);
(statearr_50612[1] = 1);
return statearr_50612;
});
var state_machine__13894__auto____1 = (function (state_50595){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_50595);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e50613){if((e50613 instanceof Object))
{var ex__13897__auto__ = e50613;var statearr_50614_50627 = state_50595;(statearr_50614_50627[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50595);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e50613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__50628 = state_50595;
state_50595 = G__50628;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_50595){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_50595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_50615 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_50615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___50616);
return statearr_50615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_50780){var state_val_50781 = (state_50780[1]);if((state_val_50781 === 1))
{var state_50780__$1 = state_50780;var statearr_50782_50819 = state_50780__$1;(statearr_50782_50819[2] = null);
(statearr_50782_50819[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 2))
{var state_50780__$1 = state_50780;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50780__$1,4,in$);
} else
{if((state_val_50781 === 3))
{var inst_50778 = (state_50780[2]);var state_50780__$1 = state_50780;return cljs.core.async.impl.ioc_helpers.return_chan(state_50780__$1,inst_50778);
} else
{if((state_val_50781 === 4))
{var inst_50726 = (state_50780[7]);var inst_50726__$1 = (state_50780[2]);var inst_50727 = (inst_50726__$1 == null);var state_50780__$1 = (function (){var statearr_50783 = state_50780;(statearr_50783[7] = inst_50726__$1);
return statearr_50783;
})();if(cljs.core.truth_(inst_50727))
{var statearr_50784_50820 = state_50780__$1;(statearr_50784_50820[1] = 5);
} else
{var statearr_50785_50821 = state_50780__$1;(statearr_50785_50821[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 5))
{var inst_50729 = cljs.core.async.close_BANG_(out);var state_50780__$1 = state_50780;var statearr_50786_50822 = state_50780__$1;(statearr_50786_50822[2] = inst_50729);
(statearr_50786_50822[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 6))
{var inst_50726 = (state_50780[7]);var inst_50731 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50726) : f.call(null,inst_50726));var inst_50736 = cljs.core.seq(inst_50731);var inst_50737 = inst_50736;var inst_50738 = null;var inst_50739 = 0;var inst_50740 = 0;var state_50780__$1 = (function (){var statearr_50787 = state_50780;(statearr_50787[8] = inst_50737);
(statearr_50787[9] = inst_50739);
(statearr_50787[10] = inst_50738);
(statearr_50787[11] = inst_50740);
return statearr_50787;
})();var statearr_50788_50823 = state_50780__$1;(statearr_50788_50823[2] = null);
(statearr_50788_50823[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 7))
{var inst_50776 = (state_50780[2]);var state_50780__$1 = state_50780;var statearr_50789_50824 = state_50780__$1;(statearr_50789_50824[2] = inst_50776);
(statearr_50789_50824[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 8))
{var inst_50739 = (state_50780[9]);var inst_50740 = (state_50780[11]);var inst_50742 = (inst_50740 < inst_50739);var inst_50743 = inst_50742;var state_50780__$1 = state_50780;if(cljs.core.truth_(inst_50743))
{var statearr_50790_50825 = state_50780__$1;(statearr_50790_50825[1] = 10);
} else
{var statearr_50791_50826 = state_50780__$1;(statearr_50791_50826[1] = 11);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 9))
{var inst_50773 = (state_50780[2]);var state_50780__$1 = (function (){var statearr_50792 = state_50780;(statearr_50792[12] = inst_50773);
return statearr_50792;
})();var statearr_50793_50827 = state_50780__$1;(statearr_50793_50827[2] = null);
(statearr_50793_50827[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 10))
{var inst_50738 = (state_50780[10]);var inst_50740 = (state_50780[11]);var inst_50745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_50738,inst_50740);var state_50780__$1 = state_50780;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50780__$1,13,out,inst_50745);
} else
{if((state_val_50781 === 11))
{var inst_50737 = (state_50780[8]);var inst_50751 = (state_50780[13]);var inst_50751__$1 = cljs.core.seq(inst_50737);var state_50780__$1 = (function (){var statearr_50797 = state_50780;(statearr_50797[13] = inst_50751__$1);
return statearr_50797;
})();if(inst_50751__$1)
{var statearr_50798_50828 = state_50780__$1;(statearr_50798_50828[1] = 14);
} else
{var statearr_50799_50829 = state_50780__$1;(statearr_50799_50829[1] = 15);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 12))
{var inst_50771 = (state_50780[2]);var state_50780__$1 = state_50780;var statearr_50800_50830 = state_50780__$1;(statearr_50800_50830[2] = inst_50771);
(statearr_50800_50830[1] = 9);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 13))
{var inst_50737 = (state_50780[8]);var inst_50739 = (state_50780[9]);var inst_50738 = (state_50780[10]);var inst_50740 = (state_50780[11]);var inst_50747 = (state_50780[2]);var inst_50748 = (inst_50740 + 1);var tmp50794 = inst_50737;var tmp50795 = inst_50739;var tmp50796 = inst_50738;var inst_50737__$1 = tmp50794;var inst_50738__$1 = tmp50796;var inst_50739__$1 = tmp50795;var inst_50740__$1 = inst_50748;var state_50780__$1 = (function (){var statearr_50801 = state_50780;(statearr_50801[8] = inst_50737__$1);
(statearr_50801[9] = inst_50739__$1);
(statearr_50801[10] = inst_50738__$1);
(statearr_50801[14] = inst_50747);
(statearr_50801[11] = inst_50740__$1);
return statearr_50801;
})();var statearr_50802_50831 = state_50780__$1;(statearr_50802_50831[2] = null);
(statearr_50802_50831[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 14))
{var inst_50751 = (state_50780[13]);var inst_50753 = cljs.core.chunked_seq_QMARK_(inst_50751);var state_50780__$1 = state_50780;if(inst_50753)
{var statearr_50803_50832 = state_50780__$1;(statearr_50803_50832[1] = 17);
} else
{var statearr_50804_50833 = state_50780__$1;(statearr_50804_50833[1] = 18);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 15))
{var state_50780__$1 = state_50780;var statearr_50805_50834 = state_50780__$1;(statearr_50805_50834[2] = null);
(statearr_50805_50834[1] = 16);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 16))
{var inst_50769 = (state_50780[2]);var state_50780__$1 = state_50780;var statearr_50806_50835 = state_50780__$1;(statearr_50806_50835[2] = inst_50769);
(statearr_50806_50835[1] = 12);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 17))
{var inst_50751 = (state_50780[13]);var inst_50755 = cljs.core.chunk_first(inst_50751);var inst_50756 = cljs.core.chunk_rest(inst_50751);var inst_50757 = cljs.core.count(inst_50755);var inst_50737 = inst_50756;var inst_50738 = inst_50755;var inst_50739 = inst_50757;var inst_50740 = 0;var state_50780__$1 = (function (){var statearr_50807 = state_50780;(statearr_50807[8] = inst_50737);
(statearr_50807[9] = inst_50739);
(statearr_50807[10] = inst_50738);
(statearr_50807[11] = inst_50740);
return statearr_50807;
})();var statearr_50808_50836 = state_50780__$1;(statearr_50808_50836[2] = null);
(statearr_50808_50836[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 18))
{var inst_50751 = (state_50780[13]);var inst_50760 = cljs.core.first(inst_50751);var state_50780__$1 = state_50780;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50780__$1,20,out,inst_50760);
} else
{if((state_val_50781 === 19))
{var inst_50766 = (state_50780[2]);var state_50780__$1 = state_50780;var statearr_50809_50837 = state_50780__$1;(statearr_50809_50837[2] = inst_50766);
(statearr_50809_50837[1] = 16);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50781 === 20))
{var inst_50751 = (state_50780[13]);var inst_50762 = (state_50780[2]);var inst_50763 = cljs.core.next(inst_50751);var inst_50737 = inst_50763;var inst_50738 = null;var inst_50739 = 0;var inst_50740 = 0;var state_50780__$1 = (function (){var statearr_50810 = state_50780;(statearr_50810[8] = inst_50737);
(statearr_50810[15] = inst_50762);
(statearr_50810[9] = inst_50739);
(statearr_50810[10] = inst_50738);
(statearr_50810[11] = inst_50740);
return statearr_50810;
})();var statearr_50811_50838 = state_50780__$1;(statearr_50811_50838[2] = null);
(statearr_50811_50838[1] = 8);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_50815 = (new Array(16));(statearr_50815[0] = state_machine__13894__auto__);
(statearr_50815[1] = 1);
return statearr_50815;
});
var state_machine__13894__auto____1 = (function (state_50780){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_50780);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e50816){if((e50816 instanceof Object))
{var ex__13897__auto__ = e50816;var statearr_50817_50839 = state_50780;(statearr_50817_50839[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50780);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e50816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__50840 = state_50780;
state_50780 = G__50840;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_50780){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_50780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_50818 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_50818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_50818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__13963__auto___50921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_50900){var state_val_50901 = (state_50900[1]);if((state_val_50901 === 1))
{var state_50900__$1 = state_50900;var statearr_50902_50922 = state_50900__$1;(statearr_50902_50922[2] = null);
(statearr_50902_50922[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 2))
{var state_50900__$1 = state_50900;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50900__$1,4,from);
} else
{if((state_val_50901 === 3))
{var inst_50898 = (state_50900[2]);var state_50900__$1 = state_50900;return cljs.core.async.impl.ioc_helpers.return_chan(state_50900__$1,inst_50898);
} else
{if((state_val_50901 === 4))
{var inst_50883 = (state_50900[7]);var inst_50883__$1 = (state_50900[2]);var inst_50884 = (inst_50883__$1 == null);var state_50900__$1 = (function (){var statearr_50903 = state_50900;(statearr_50903[7] = inst_50883__$1);
return statearr_50903;
})();if(cljs.core.truth_(inst_50884))
{var statearr_50904_50923 = state_50900__$1;(statearr_50904_50923[1] = 5);
} else
{var statearr_50905_50924 = state_50900__$1;(statearr_50905_50924[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 5))
{var state_50900__$1 = state_50900;if(cljs.core.truth_(close_QMARK_))
{var statearr_50906_50925 = state_50900__$1;(statearr_50906_50925[1] = 8);
} else
{var statearr_50907_50926 = state_50900__$1;(statearr_50907_50926[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 6))
{var inst_50883 = (state_50900[7]);var state_50900__$1 = state_50900;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50900__$1,11,to,inst_50883);
} else
{if((state_val_50901 === 7))
{var inst_50896 = (state_50900[2]);var state_50900__$1 = state_50900;var statearr_50908_50927 = state_50900__$1;(statearr_50908_50927[2] = inst_50896);
(statearr_50908_50927[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 8))
{var inst_50887 = cljs.core.async.close_BANG_(to);var state_50900__$1 = state_50900;var statearr_50909_50928 = state_50900__$1;(statearr_50909_50928[2] = inst_50887);
(statearr_50909_50928[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 9))
{var state_50900__$1 = state_50900;var statearr_50910_50929 = state_50900__$1;(statearr_50910_50929[2] = null);
(statearr_50910_50929[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 10))
{var inst_50890 = (state_50900[2]);var state_50900__$1 = state_50900;var statearr_50911_50930 = state_50900__$1;(statearr_50911_50930[2] = inst_50890);
(statearr_50911_50930[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50901 === 11))
{var inst_50893 = (state_50900[2]);var state_50900__$1 = (function (){var statearr_50912 = state_50900;(statearr_50912[8] = inst_50893);
return statearr_50912;
})();var statearr_50913_50931 = state_50900__$1;(statearr_50913_50931[2] = null);
(statearr_50913_50931[1] = 2);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_50917 = (new Array(9));(statearr_50917[0] = state_machine__13894__auto__);
(statearr_50917[1] = 1);
return statearr_50917;
});
var state_machine__13894__auto____1 = (function (state_50900){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_50900);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e50918){if((e50918 instanceof Object))
{var ex__13897__auto__ = e50918;var statearr_50919_50932 = state_50900;(statearr_50919_50932[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50900);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e50918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__50933 = state_50900;
state_50900 = G__50933;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_50900){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_50900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_50920 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_50920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___50921);
return statearr_50920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__13963__auto___51020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_50998){var state_val_50999 = (state_50998[1]);if((state_val_50999 === 1))
{var state_50998__$1 = state_50998;var statearr_51000_51021 = state_50998__$1;(statearr_51000_51021[2] = null);
(statearr_51000_51021[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 2))
{var state_50998__$1 = state_50998;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50998__$1,4,ch);
} else
{if((state_val_50999 === 3))
{var inst_50996 = (state_50998[2]);var state_50998__$1 = state_50998;return cljs.core.async.impl.ioc_helpers.return_chan(state_50998__$1,inst_50996);
} else
{if((state_val_50999 === 4))
{var inst_50979 = (state_50998[7]);var inst_50979__$1 = (state_50998[2]);var inst_50980 = (inst_50979__$1 == null);var state_50998__$1 = (function (){var statearr_51001 = state_50998;(statearr_51001[7] = inst_50979__$1);
return statearr_51001;
})();if(cljs.core.truth_(inst_50980))
{var statearr_51002_51022 = state_50998__$1;(statearr_51002_51022[1] = 5);
} else
{var statearr_51003_51023 = state_50998__$1;(statearr_51003_51023[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 5))
{var inst_50982 = cljs.core.async.close_BANG_(tc);var inst_50983 = cljs.core.async.close_BANG_(fc);var state_50998__$1 = (function (){var statearr_51004 = state_50998;(statearr_51004[8] = inst_50982);
return statearr_51004;
})();var statearr_51005_51024 = state_50998__$1;(statearr_51005_51024[2] = inst_50983);
(statearr_51005_51024[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 6))
{var inst_50979 = (state_50998[7]);var inst_50985 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50979) : p.call(null,inst_50979));var state_50998__$1 = state_50998;if(cljs.core.truth_(inst_50985))
{var statearr_51006_51025 = state_50998__$1;(statearr_51006_51025[1] = 9);
} else
{var statearr_51007_51026 = state_50998__$1;(statearr_51007_51026[1] = 10);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 7))
{var inst_50994 = (state_50998[2]);var state_50998__$1 = state_50998;var statearr_51008_51027 = state_50998__$1;(statearr_51008_51027[2] = inst_50994);
(statearr_51008_51027[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 8))
{var inst_50991 = (state_50998[2]);var state_50998__$1 = (function (){var statearr_51009 = state_50998;(statearr_51009[9] = inst_50991);
return statearr_51009;
})();var statearr_51010_51028 = state_50998__$1;(statearr_51010_51028[2] = null);
(statearr_51010_51028[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 9))
{var state_50998__$1 = state_50998;var statearr_51011_51029 = state_50998__$1;(statearr_51011_51029[2] = tc);
(statearr_51011_51029[1] = 11);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 10))
{var state_50998__$1 = state_50998;var statearr_51012_51030 = state_50998__$1;(statearr_51012_51030[2] = fc);
(statearr_51012_51030[1] = 11);
return cljs.core.constant$keyword$285;
} else
{if((state_val_50999 === 11))
{var inst_50979 = (state_50998[7]);var inst_50989 = (state_50998[2]);var state_50998__$1 = state_50998;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50998__$1,8,inst_50989,inst_50979);
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_51016 = (new Array(10));(statearr_51016[0] = state_machine__13894__auto__);
(statearr_51016[1] = 1);
return statearr_51016;
});
var state_machine__13894__auto____1 = (function (state_50998){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_50998);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e51017){if((e51017 instanceof Object))
{var ex__13897__auto__ = e51017;var statearr_51018_51031 = state_50998;(statearr_51018_51031[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_50998);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e51017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__51032 = state_50998;
state_50998 = G__51032;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_50998){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_50998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_51019 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_51019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___51020);
return statearr_51019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_51079){var state_val_51080 = (state_51079[1]);if((state_val_51080 === 7))
{var inst_51075 = (state_51079[2]);var state_51079__$1 = state_51079;var statearr_51081_51097 = state_51079__$1;(statearr_51081_51097[2] = inst_51075);
(statearr_51081_51097[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51080 === 6))
{var inst_51065 = (state_51079[7]);var inst_51068 = (state_51079[8]);var inst_51072 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51065,inst_51068) : f.call(null,inst_51065,inst_51068));var inst_51065__$1 = inst_51072;var state_51079__$1 = (function (){var statearr_51082 = state_51079;(statearr_51082[7] = inst_51065__$1);
return statearr_51082;
})();var statearr_51083_51098 = state_51079__$1;(statearr_51083_51098[2] = null);
(statearr_51083_51098[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51080 === 5))
{var inst_51065 = (state_51079[7]);var state_51079__$1 = state_51079;var statearr_51084_51099 = state_51079__$1;(statearr_51084_51099[2] = inst_51065);
(statearr_51084_51099[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51080 === 4))
{var inst_51068 = (state_51079[8]);var inst_51068__$1 = (state_51079[2]);var inst_51069 = (inst_51068__$1 == null);var state_51079__$1 = (function (){var statearr_51085 = state_51079;(statearr_51085[8] = inst_51068__$1);
return statearr_51085;
})();if(cljs.core.truth_(inst_51069))
{var statearr_51086_51100 = state_51079__$1;(statearr_51086_51100[1] = 5);
} else
{var statearr_51087_51101 = state_51079__$1;(statearr_51087_51101[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51080 === 3))
{var inst_51077 = (state_51079[2]);var state_51079__$1 = state_51079;return cljs.core.async.impl.ioc_helpers.return_chan(state_51079__$1,inst_51077);
} else
{if((state_val_51080 === 2))
{var state_51079__$1 = state_51079;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51079__$1,4,ch);
} else
{if((state_val_51080 === 1))
{var inst_51065 = init;var state_51079__$1 = (function (){var statearr_51088 = state_51079;(statearr_51088[7] = inst_51065);
return statearr_51088;
})();var statearr_51089_51102 = state_51079__$1;(statearr_51089_51102[2] = null);
(statearr_51089_51102[1] = 2);
return cljs.core.constant$keyword$285;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_51093 = (new Array(9));(statearr_51093[0] = state_machine__13894__auto__);
(statearr_51093[1] = 1);
return statearr_51093;
});
var state_machine__13894__auto____1 = (function (state_51079){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_51079);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e51094){if((e51094 instanceof Object))
{var ex__13897__auto__ = e51094;var statearr_51095_51103 = state_51079;(statearr_51095_51103[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51079);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e51094;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__51104 = state_51079;
state_51079 = G__51104;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_51079){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_51079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_51096 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_51096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_51096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__13963__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_51166){var state_val_51167 = (state_51166[1]);if((state_val_51167 === 1))
{var inst_51146 = cljs.core.seq(coll);var inst_51147 = inst_51146;var state_51166__$1 = (function (){var statearr_51168 = state_51166;(statearr_51168[7] = inst_51147);
return statearr_51168;
})();var statearr_51169_51187 = state_51166__$1;(statearr_51169_51187[2] = null);
(statearr_51169_51187[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 2))
{var inst_51147 = (state_51166[7]);var state_51166__$1 = state_51166;if(cljs.core.truth_(inst_51147))
{var statearr_51170_51188 = state_51166__$1;(statearr_51170_51188[1] = 4);
} else
{var statearr_51171_51189 = state_51166__$1;(statearr_51171_51189[1] = 5);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 3))
{var inst_51164 = (state_51166[2]);var state_51166__$1 = state_51166;return cljs.core.async.impl.ioc_helpers.return_chan(state_51166__$1,inst_51164);
} else
{if((state_val_51167 === 4))
{var inst_51147 = (state_51166[7]);var inst_51150 = cljs.core.first(inst_51147);var state_51166__$1 = state_51166;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51166__$1,7,ch,inst_51150);
} else
{if((state_val_51167 === 5))
{var state_51166__$1 = state_51166;if(cljs.core.truth_(close_QMARK_))
{var statearr_51172_51190 = state_51166__$1;(statearr_51172_51190[1] = 8);
} else
{var statearr_51173_51191 = state_51166__$1;(statearr_51173_51191[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 6))
{var inst_51162 = (state_51166[2]);var state_51166__$1 = state_51166;var statearr_51174_51192 = state_51166__$1;(statearr_51174_51192[2] = inst_51162);
(statearr_51174_51192[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 7))
{var inst_51147 = (state_51166[7]);var inst_51152 = (state_51166[2]);var inst_51153 = cljs.core.next(inst_51147);var inst_51147__$1 = inst_51153;var state_51166__$1 = (function (){var statearr_51175 = state_51166;(statearr_51175[8] = inst_51152);
(statearr_51175[7] = inst_51147__$1);
return statearr_51175;
})();var statearr_51176_51193 = state_51166__$1;(statearr_51176_51193[2] = null);
(statearr_51176_51193[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 8))
{var inst_51157 = cljs.core.async.close_BANG_(ch);var state_51166__$1 = state_51166;var statearr_51177_51194 = state_51166__$1;(statearr_51177_51194[2] = inst_51157);
(statearr_51177_51194[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 9))
{var state_51166__$1 = state_51166;var statearr_51178_51195 = state_51166__$1;(statearr_51178_51195[2] = null);
(statearr_51178_51195[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51167 === 10))
{var inst_51160 = (state_51166[2]);var state_51166__$1 = state_51166;var statearr_51179_51196 = state_51166__$1;(statearr_51179_51196[2] = inst_51160);
(statearr_51179_51196[1] = 6);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_51183 = (new Array(9));(statearr_51183[0] = state_machine__13894__auto__);
(statearr_51183[1] = 1);
return statearr_51183;
});
var state_machine__13894__auto____1 = (function (state_51166){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_51166);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e51184){if((e51184 instanceof Object))
{var ex__13897__auto__ = e51184;var statearr_51185_51197 = state_51166;(statearr_51185_51197[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51166);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e51184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__51198 = state_51166;
state_51166 = G__51198;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_51166){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_51166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_51186 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_51186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto__);
return statearr_51186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
}));
return c__13963__auto__;
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
cljs.core.async.Mux = (function (){var obj51200 = {};return obj51200;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__10885__auto__ = _;if(and__10885__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__11500__auto__ = (((_ == null))?null:_);return (function (){var or__10897__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj51202 = {};return obj51202;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t51417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51417 = (function (cs,ch,mult,meta51418){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta51418 = meta51418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51417.cljs$lang$type = true;
cljs.core.async.t51417.cljs$lang$ctorStr = "cljs.core.async/t51417";
cljs.core.async.t51417.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t51417");
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t51417.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51417.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_51419){var self__ = this;
var _51419__$1 = this;return self__.meta51418;
});})(cs))
;
cljs.core.async.t51417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_51419,meta51418__$1){var self__ = this;
var _51419__$1 = this;return (new cljs.core.async.t51417(self__.cs,self__.ch,self__.mult,meta51418__$1));
});})(cs))
;
cljs.core.async.__GT_t51417 = ((function (cs){
return (function __GT_t51417(cs__$1,ch__$1,mult__$1,meta51418){return (new cljs.core.async.t51417(cs__$1,ch__$1,mult__$1,meta51418));
});})(cs))
;
}
return (new cljs.core.async.t51417(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__13963__auto___51631 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_51549){var state_val_51550 = (state_51549[1]);if((state_val_51550 === 32))
{var inst_51498 = (state_51549[7]);var inst_51422 = (state_51549[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51549,31,Object,null,30);var inst_51505 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51498,inst_51422,done);var state_51549__$1 = state_51549;var statearr_51551_51632 = state_51549__$1;(statearr_51551_51632[2] = inst_51505);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 1))
{var state_51549__$1 = state_51549;var statearr_51552_51633 = state_51549__$1;(statearr_51552_51633[2] = null);
(statearr_51552_51633[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 33))
{var inst_51511 = (state_51549[9]);var inst_51513 = cljs.core.chunked_seq_QMARK_(inst_51511);var state_51549__$1 = state_51549;if(inst_51513)
{var statearr_51553_51634 = state_51549__$1;(statearr_51553_51634[1] = 36);
} else
{var statearr_51554_51635 = state_51549__$1;(statearr_51554_51635[1] = 37);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 2))
{var state_51549__$1 = state_51549;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51549__$1,4,ch);
} else
{if((state_val_51550 === 34))
{var state_51549__$1 = state_51549;var statearr_51555_51636 = state_51549__$1;(statearr_51555_51636[2] = null);
(statearr_51555_51636[1] = 35);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 3))
{var inst_51547 = (state_51549[2]);var state_51549__$1 = state_51549;return cljs.core.async.impl.ioc_helpers.return_chan(state_51549__$1,inst_51547);
} else
{if((state_val_51550 === 35))
{var inst_51536 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51556_51637 = state_51549__$1;(statearr_51556_51637[2] = inst_51536);
(statearr_51556_51637[1] = 29);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 4))
{var inst_51422 = (state_51549[8]);var inst_51422__$1 = (state_51549[2]);var inst_51423 = (inst_51422__$1 == null);var state_51549__$1 = (function (){var statearr_51557 = state_51549;(statearr_51557[8] = inst_51422__$1);
return statearr_51557;
})();if(cljs.core.truth_(inst_51423))
{var statearr_51558_51638 = state_51549__$1;(statearr_51558_51638[1] = 5);
} else
{var statearr_51559_51639 = state_51549__$1;(statearr_51559_51639[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 36))
{var inst_51511 = (state_51549[9]);var inst_51515 = cljs.core.chunk_first(inst_51511);var inst_51516 = cljs.core.chunk_rest(inst_51511);var inst_51517 = cljs.core.count(inst_51515);var inst_51490 = inst_51516;var inst_51491 = inst_51515;var inst_51492 = inst_51517;var inst_51493 = 0;var state_51549__$1 = (function (){var statearr_51560 = state_51549;(statearr_51560[10] = inst_51490);
(statearr_51560[11] = inst_51491);
(statearr_51560[12] = inst_51493);
(statearr_51560[13] = inst_51492);
return statearr_51560;
})();var statearr_51561_51640 = state_51549__$1;(statearr_51561_51640[2] = null);
(statearr_51561_51640[1] = 25);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 5))
{var inst_51429 = cljs.core.deref(cs);var inst_51430 = cljs.core.seq(inst_51429);var inst_51431 = inst_51430;var inst_51432 = null;var inst_51433 = 0;var inst_51434 = 0;var state_51549__$1 = (function (){var statearr_51562 = state_51549;(statearr_51562[14] = inst_51434);
(statearr_51562[15] = inst_51431);
(statearr_51562[16] = inst_51432);
(statearr_51562[17] = inst_51433);
return statearr_51562;
})();var statearr_51563_51641 = state_51549__$1;(statearr_51563_51641[2] = null);
(statearr_51563_51641[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 37))
{var inst_51511 = (state_51549[9]);var inst_51520 = cljs.core.first(inst_51511);var state_51549__$1 = (function (){var statearr_51564 = state_51549;(statearr_51564[18] = inst_51520);
return statearr_51564;
})();var statearr_51565_51642 = state_51549__$1;(statearr_51565_51642[2] = null);
(statearr_51565_51642[1] = 41);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 6))
{var inst_51481 = cljs.core.deref(cs);var inst_51482 = cljs.core.keys(inst_51481);var inst_51483 = cljs.core.count(inst_51482);var inst_51484 = cljs.core.reset_BANG_(dctr,inst_51483);var inst_51489 = cljs.core.seq(inst_51482);var inst_51490 = inst_51489;var inst_51491 = null;var inst_51492 = 0;var inst_51493 = 0;var state_51549__$1 = (function (){var statearr_51566 = state_51549;(statearr_51566[10] = inst_51490);
(statearr_51566[11] = inst_51491);
(statearr_51566[12] = inst_51493);
(statearr_51566[13] = inst_51492);
(statearr_51566[19] = inst_51484);
return statearr_51566;
})();var statearr_51567_51643 = state_51549__$1;(statearr_51567_51643[2] = null);
(statearr_51567_51643[1] = 25);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 38))
{var inst_51533 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51568_51644 = state_51549__$1;(statearr_51568_51644[2] = inst_51533);
(statearr_51568_51644[1] = 35);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 7))
{var inst_51545 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51569_51645 = state_51549__$1;(statearr_51569_51645[2] = inst_51545);
(statearr_51569_51645[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 39))
{var inst_51511 = (state_51549[9]);var inst_51529 = (state_51549[2]);var inst_51530 = cljs.core.next(inst_51511);var inst_51490 = inst_51530;var inst_51491 = null;var inst_51492 = 0;var inst_51493 = 0;var state_51549__$1 = (function (){var statearr_51570 = state_51549;(statearr_51570[10] = inst_51490);
(statearr_51570[11] = inst_51491);
(statearr_51570[12] = inst_51493);
(statearr_51570[13] = inst_51492);
(statearr_51570[20] = inst_51529);
return statearr_51570;
})();var statearr_51571_51646 = state_51549__$1;(statearr_51571_51646[2] = null);
(statearr_51571_51646[1] = 25);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 8))
{var inst_51434 = (state_51549[14]);var inst_51433 = (state_51549[17]);var inst_51436 = (inst_51434 < inst_51433);var inst_51437 = inst_51436;var state_51549__$1 = state_51549;if(cljs.core.truth_(inst_51437))
{var statearr_51572_51647 = state_51549__$1;(statearr_51572_51647[1] = 10);
} else
{var statearr_51573_51648 = state_51549__$1;(statearr_51573_51648[1] = 11);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 40))
{var inst_51520 = (state_51549[18]);var inst_51521 = (state_51549[2]);var inst_51522 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_51523 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51520);var state_51549__$1 = (function (){var statearr_51574 = state_51549;(statearr_51574[21] = inst_51521);
(statearr_51574[22] = inst_51522);
return statearr_51574;
})();var statearr_51575_51649 = state_51549__$1;(statearr_51575_51649[2] = inst_51523);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 9))
{var inst_51479 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51576_51650 = state_51549__$1;(statearr_51576_51650[2] = inst_51479);
(statearr_51576_51650[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 41))
{var inst_51520 = (state_51549[18]);var inst_51422 = (state_51549[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_51549,40,Object,null,39);var inst_51527 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51520,inst_51422,done);var state_51549__$1 = state_51549;var statearr_51577_51651 = state_51549__$1;(statearr_51577_51651[2] = inst_51527);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 10))
{var inst_51434 = (state_51549[14]);var inst_51432 = (state_51549[16]);var inst_51440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51432,inst_51434);var inst_51441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51440,0,null);var inst_51442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51440,1,null);var state_51549__$1 = (function (){var statearr_51578 = state_51549;(statearr_51578[23] = inst_51441);
return statearr_51578;
})();if(cljs.core.truth_(inst_51442))
{var statearr_51579_51652 = state_51549__$1;(statearr_51579_51652[1] = 13);
} else
{var statearr_51580_51653 = state_51549__$1;(statearr_51580_51653[1] = 14);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 42))
{var inst_51542 = (state_51549[2]);var state_51549__$1 = (function (){var statearr_51581 = state_51549;(statearr_51581[24] = inst_51542);
return statearr_51581;
})();var statearr_51582_51654 = state_51549__$1;(statearr_51582_51654[2] = null);
(statearr_51582_51654[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 11))
{var inst_51451 = (state_51549[25]);var inst_51431 = (state_51549[15]);var inst_51451__$1 = cljs.core.seq(inst_51431);var state_51549__$1 = (function (){var statearr_51583 = state_51549;(statearr_51583[25] = inst_51451__$1);
return statearr_51583;
})();if(inst_51451__$1)
{var statearr_51584_51655 = state_51549__$1;(statearr_51584_51655[1] = 16);
} else
{var statearr_51585_51656 = state_51549__$1;(statearr_51585_51656[1] = 17);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 12))
{var inst_51477 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51586_51657 = state_51549__$1;(statearr_51586_51657[2] = inst_51477);
(statearr_51586_51657[1] = 9);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 13))
{var inst_51441 = (state_51549[23]);var inst_51444 = cljs.core.async.close_BANG_(inst_51441);var state_51549__$1 = state_51549;var statearr_51590_51658 = state_51549__$1;(statearr_51590_51658[2] = inst_51444);
(statearr_51590_51658[1] = 15);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 14))
{var state_51549__$1 = state_51549;var statearr_51591_51659 = state_51549__$1;(statearr_51591_51659[2] = null);
(statearr_51591_51659[1] = 15);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 15))
{var inst_51434 = (state_51549[14]);var inst_51431 = (state_51549[15]);var inst_51432 = (state_51549[16]);var inst_51433 = (state_51549[17]);var inst_51447 = (state_51549[2]);var inst_51448 = (inst_51434 + 1);var tmp51587 = inst_51431;var tmp51588 = inst_51432;var tmp51589 = inst_51433;var inst_51431__$1 = tmp51587;var inst_51432__$1 = tmp51588;var inst_51433__$1 = tmp51589;var inst_51434__$1 = inst_51448;var state_51549__$1 = (function (){var statearr_51592 = state_51549;(statearr_51592[14] = inst_51434__$1);
(statearr_51592[26] = inst_51447);
(statearr_51592[15] = inst_51431__$1);
(statearr_51592[16] = inst_51432__$1);
(statearr_51592[17] = inst_51433__$1);
return statearr_51592;
})();var statearr_51593_51660 = state_51549__$1;(statearr_51593_51660[2] = null);
(statearr_51593_51660[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 16))
{var inst_51451 = (state_51549[25]);var inst_51453 = cljs.core.chunked_seq_QMARK_(inst_51451);var state_51549__$1 = state_51549;if(inst_51453)
{var statearr_51594_51661 = state_51549__$1;(statearr_51594_51661[1] = 19);
} else
{var statearr_51595_51662 = state_51549__$1;(statearr_51595_51662[1] = 20);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 17))
{var state_51549__$1 = state_51549;var statearr_51596_51663 = state_51549__$1;(statearr_51596_51663[2] = null);
(statearr_51596_51663[1] = 18);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 18))
{var inst_51475 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51597_51664 = state_51549__$1;(statearr_51597_51664[2] = inst_51475);
(statearr_51597_51664[1] = 12);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 19))
{var inst_51451 = (state_51549[25]);var inst_51455 = cljs.core.chunk_first(inst_51451);var inst_51456 = cljs.core.chunk_rest(inst_51451);var inst_51457 = cljs.core.count(inst_51455);var inst_51431 = inst_51456;var inst_51432 = inst_51455;var inst_51433 = inst_51457;var inst_51434 = 0;var state_51549__$1 = (function (){var statearr_51598 = state_51549;(statearr_51598[14] = inst_51434);
(statearr_51598[15] = inst_51431);
(statearr_51598[16] = inst_51432);
(statearr_51598[17] = inst_51433);
return statearr_51598;
})();var statearr_51599_51665 = state_51549__$1;(statearr_51599_51665[2] = null);
(statearr_51599_51665[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 20))
{var inst_51451 = (state_51549[25]);var inst_51461 = cljs.core.first(inst_51451);var inst_51462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51461,0,null);var inst_51463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51461,1,null);var state_51549__$1 = (function (){var statearr_51600 = state_51549;(statearr_51600[27] = inst_51462);
return statearr_51600;
})();if(cljs.core.truth_(inst_51463))
{var statearr_51601_51666 = state_51549__$1;(statearr_51601_51666[1] = 22);
} else
{var statearr_51602_51667 = state_51549__$1;(statearr_51602_51667[1] = 23);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 21))
{var inst_51472 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51603_51668 = state_51549__$1;(statearr_51603_51668[2] = inst_51472);
(statearr_51603_51668[1] = 18);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 22))
{var inst_51462 = (state_51549[27]);var inst_51465 = cljs.core.async.close_BANG_(inst_51462);var state_51549__$1 = state_51549;var statearr_51604_51669 = state_51549__$1;(statearr_51604_51669[2] = inst_51465);
(statearr_51604_51669[1] = 24);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 23))
{var state_51549__$1 = state_51549;var statearr_51605_51670 = state_51549__$1;(statearr_51605_51670[2] = null);
(statearr_51605_51670[1] = 24);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 24))
{var inst_51451 = (state_51549[25]);var inst_51468 = (state_51549[2]);var inst_51469 = cljs.core.next(inst_51451);var inst_51431 = inst_51469;var inst_51432 = null;var inst_51433 = 0;var inst_51434 = 0;var state_51549__$1 = (function (){var statearr_51606 = state_51549;(statearr_51606[28] = inst_51468);
(statearr_51606[14] = inst_51434);
(statearr_51606[15] = inst_51431);
(statearr_51606[16] = inst_51432);
(statearr_51606[17] = inst_51433);
return statearr_51606;
})();var statearr_51607_51671 = state_51549__$1;(statearr_51607_51671[2] = null);
(statearr_51607_51671[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 25))
{var inst_51493 = (state_51549[12]);var inst_51492 = (state_51549[13]);var inst_51495 = (inst_51493 < inst_51492);var inst_51496 = inst_51495;var state_51549__$1 = state_51549;if(cljs.core.truth_(inst_51496))
{var statearr_51608_51672 = state_51549__$1;(statearr_51608_51672[1] = 27);
} else
{var statearr_51609_51673 = state_51549__$1;(statearr_51609_51673[1] = 28);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 26))
{var inst_51540 = (state_51549[2]);var state_51549__$1 = (function (){var statearr_51610 = state_51549;(statearr_51610[29] = inst_51540);
return statearr_51610;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51549__$1,42,dchan);
} else
{if((state_val_51550 === 27))
{var inst_51491 = (state_51549[11]);var inst_51493 = (state_51549[12]);var inst_51498 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_51491,inst_51493);var state_51549__$1 = (function (){var statearr_51611 = state_51549;(statearr_51611[7] = inst_51498);
return statearr_51611;
})();var statearr_51612_51674 = state_51549__$1;(statearr_51612_51674[2] = null);
(statearr_51612_51674[1] = 32);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 28))
{var inst_51490 = (state_51549[10]);var inst_51511 = (state_51549[9]);var inst_51511__$1 = cljs.core.seq(inst_51490);var state_51549__$1 = (function (){var statearr_51616 = state_51549;(statearr_51616[9] = inst_51511__$1);
return statearr_51616;
})();if(inst_51511__$1)
{var statearr_51617_51675 = state_51549__$1;(statearr_51617_51675[1] = 33);
} else
{var statearr_51618_51676 = state_51549__$1;(statearr_51618_51676[1] = 34);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 29))
{var inst_51538 = (state_51549[2]);var state_51549__$1 = state_51549;var statearr_51619_51677 = state_51549__$1;(statearr_51619_51677[2] = inst_51538);
(statearr_51619_51677[1] = 26);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 30))
{var inst_51490 = (state_51549[10]);var inst_51491 = (state_51549[11]);var inst_51493 = (state_51549[12]);var inst_51492 = (state_51549[13]);var inst_51507 = (state_51549[2]);var inst_51508 = (inst_51493 + 1);var tmp51613 = inst_51490;var tmp51614 = inst_51491;var tmp51615 = inst_51492;var inst_51490__$1 = tmp51613;var inst_51491__$1 = tmp51614;var inst_51492__$1 = tmp51615;var inst_51493__$1 = inst_51508;var state_51549__$1 = (function (){var statearr_51620 = state_51549;(statearr_51620[10] = inst_51490__$1);
(statearr_51620[11] = inst_51491__$1);
(statearr_51620[30] = inst_51507);
(statearr_51620[12] = inst_51493__$1);
(statearr_51620[13] = inst_51492__$1);
return statearr_51620;
})();var statearr_51621_51678 = state_51549__$1;(statearr_51621_51678[2] = null);
(statearr_51621_51678[1] = 25);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51550 === 31))
{var inst_51498 = (state_51549[7]);var inst_51499 = (state_51549[2]);var inst_51500 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_51501 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51498);var state_51549__$1 = (function (){var statearr_51622 = state_51549;(statearr_51622[31] = inst_51500);
(statearr_51622[32] = inst_51499);
return statearr_51622;
})();var statearr_51623_51679 = state_51549__$1;(statearr_51623_51679[2] = inst_51501);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549__$1);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_51627 = (new Array(33));(statearr_51627[0] = state_machine__13894__auto__);
(statearr_51627[1] = 1);
return statearr_51627;
});
var state_machine__13894__auto____1 = (function (state_51549){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_51549);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e51628){if((e51628 instanceof Object))
{var ex__13897__auto__ = e51628;var statearr_51629_51680 = state_51549;(statearr_51629_51680[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51549);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e51628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__51681 = state_51549;
state_51549 = G__51681;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_51549){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_51549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_51630 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_51630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___51631);
return statearr_51630;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
cljs.core.async.Mix = (function (){var obj51683 = {};return obj51683;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__10885__auto__ = m;if(and__10885__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__11500__auto__ = (((m == null))?null:m);return (function (){var or__10897__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$292,null,cljs.core.constant$keyword$293,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$294);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$293);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$294,chs);var pauses = pick(cljs.core.constant$keyword$292,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$295,solos,cljs.core.constant$keyword$296,pick(cljs.core.constant$keyword$293,chs),cljs.core.constant$keyword$297,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$292)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t51793 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t51793 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta51794){
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
this.meta51794 = meta51794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t51793.cljs$lang$type = true;
cljs.core.async.t51793.cljs$lang$ctorStr = "cljs.core.async/t51793";
cljs.core.async.t51793.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t51793");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t51793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51795){var self__ = this;
var _51795__$1 = this;return self__.meta51794;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t51793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51795,meta51794__$1){var self__ = this;
var _51795__$1 = this;return (new cljs.core.async.t51793(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta51794__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t51793 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t51793(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta51794){return (new cljs.core.async.t51793(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta51794));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t51793(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__13963__auto___51902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_51860){var state_val_51861 = (state_51860[1]);if((state_val_51861 === 1))
{var inst_51799 = (state_51860[7]);var inst_51799__$1 = calc_state();var inst_51800 = cljs.core.seq_QMARK_(inst_51799__$1);var state_51860__$1 = (function (){var statearr_51862 = state_51860;(statearr_51862[7] = inst_51799__$1);
return statearr_51862;
})();if(inst_51800)
{var statearr_51863_51903 = state_51860__$1;(statearr_51863_51903[1] = 2);
} else
{var statearr_51864_51904 = state_51860__$1;(statearr_51864_51904[1] = 3);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 2))
{var inst_51799 = (state_51860[7]);var inst_51802 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51799);var state_51860__$1 = state_51860;var statearr_51865_51905 = state_51860__$1;(statearr_51865_51905[2] = inst_51802);
(statearr_51865_51905[1] = 4);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 3))
{var inst_51799 = (state_51860[7]);var state_51860__$1 = state_51860;var statearr_51866_51906 = state_51860__$1;(statearr_51866_51906[2] = inst_51799);
(statearr_51866_51906[1] = 4);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 4))
{var inst_51799 = (state_51860[7]);var inst_51805 = (state_51860[2]);var inst_51806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51805,cljs.core.constant$keyword$297);var inst_51807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51805,cljs.core.constant$keyword$296);var inst_51808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51805,cljs.core.constant$keyword$295);var inst_51809 = inst_51799;var state_51860__$1 = (function (){var statearr_51867 = state_51860;(statearr_51867[8] = inst_51809);
(statearr_51867[9] = inst_51808);
(statearr_51867[10] = inst_51807);
(statearr_51867[11] = inst_51806);
return statearr_51867;
})();var statearr_51868_51907 = state_51860__$1;(statearr_51868_51907[2] = null);
(statearr_51868_51907[1] = 5);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 5))
{var inst_51809 = (state_51860[8]);var inst_51812 = cljs.core.seq_QMARK_(inst_51809);var state_51860__$1 = state_51860;if(inst_51812)
{var statearr_51869_51908 = state_51860__$1;(statearr_51869_51908[1] = 7);
} else
{var statearr_51870_51909 = state_51860__$1;(statearr_51870_51909[1] = 8);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 6))
{var inst_51858 = (state_51860[2]);var state_51860__$1 = state_51860;return cljs.core.async.impl.ioc_helpers.return_chan(state_51860__$1,inst_51858);
} else
{if((state_val_51861 === 7))
{var inst_51809 = (state_51860[8]);var inst_51814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51809);var state_51860__$1 = state_51860;var statearr_51871_51910 = state_51860__$1;(statearr_51871_51910[2] = inst_51814);
(statearr_51871_51910[1] = 9);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 8))
{var inst_51809 = (state_51860[8]);var state_51860__$1 = state_51860;var statearr_51872_51911 = state_51860__$1;(statearr_51872_51911[2] = inst_51809);
(statearr_51872_51911[1] = 9);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 9))
{var inst_51817 = (state_51860[12]);var inst_51817__$1 = (state_51860[2]);var inst_51818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51817__$1,cljs.core.constant$keyword$297);var inst_51819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51817__$1,cljs.core.constant$keyword$296);var inst_51820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51817__$1,cljs.core.constant$keyword$295);var state_51860__$1 = (function (){var statearr_51873 = state_51860;(statearr_51873[13] = inst_51820);
(statearr_51873[14] = inst_51819);
(statearr_51873[12] = inst_51817__$1);
return statearr_51873;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_51860__$1,10,inst_51818);
} else
{if((state_val_51861 === 10))
{var inst_51825 = (state_51860[15]);var inst_51824 = (state_51860[16]);var inst_51823 = (state_51860[2]);var inst_51824__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51823,0,null);var inst_51825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51823,1,null);var inst_51826 = (inst_51824__$1 == null);var inst_51827 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51825__$1,change);var inst_51828 = (inst_51826) || (inst_51827);var state_51860__$1 = (function (){var statearr_51874 = state_51860;(statearr_51874[15] = inst_51825__$1);
(statearr_51874[16] = inst_51824__$1);
return statearr_51874;
})();if(cljs.core.truth_(inst_51828))
{var statearr_51875_51912 = state_51860__$1;(statearr_51875_51912[1] = 11);
} else
{var statearr_51876_51913 = state_51860__$1;(statearr_51876_51913[1] = 12);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 11))
{var inst_51824 = (state_51860[16]);var inst_51830 = (inst_51824 == null);var state_51860__$1 = state_51860;if(cljs.core.truth_(inst_51830))
{var statearr_51877_51914 = state_51860__$1;(statearr_51877_51914[1] = 14);
} else
{var statearr_51878_51915 = state_51860__$1;(statearr_51878_51915[1] = 15);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 12))
{var inst_51820 = (state_51860[13]);var inst_51839 = (state_51860[17]);var inst_51825 = (state_51860[15]);var inst_51839__$1 = (inst_51820.cljs$core$IFn$_invoke$arity$1 ? inst_51820.cljs$core$IFn$_invoke$arity$1(inst_51825) : inst_51820.call(null,inst_51825));var state_51860__$1 = (function (){var statearr_51879 = state_51860;(statearr_51879[17] = inst_51839__$1);
return statearr_51879;
})();if(cljs.core.truth_(inst_51839__$1))
{var statearr_51880_51916 = state_51860__$1;(statearr_51880_51916[1] = 17);
} else
{var statearr_51881_51917 = state_51860__$1;(statearr_51881_51917[1] = 18);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 13))
{var inst_51856 = (state_51860[2]);var state_51860__$1 = state_51860;var statearr_51882_51918 = state_51860__$1;(statearr_51882_51918[2] = inst_51856);
(statearr_51882_51918[1] = 6);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 14))
{var inst_51825 = (state_51860[15]);var inst_51832 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51825);var state_51860__$1 = state_51860;var statearr_51883_51919 = state_51860__$1;(statearr_51883_51919[2] = inst_51832);
(statearr_51883_51919[1] = 16);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 15))
{var state_51860__$1 = state_51860;var statearr_51884_51920 = state_51860__$1;(statearr_51884_51920[2] = null);
(statearr_51884_51920[1] = 16);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 16))
{var inst_51835 = (state_51860[2]);var inst_51836 = calc_state();var inst_51809 = inst_51836;var state_51860__$1 = (function (){var statearr_51885 = state_51860;(statearr_51885[18] = inst_51835);
(statearr_51885[8] = inst_51809);
return statearr_51885;
})();var statearr_51886_51921 = state_51860__$1;(statearr_51886_51921[2] = null);
(statearr_51886_51921[1] = 5);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 17))
{var inst_51839 = (state_51860[17]);var state_51860__$1 = state_51860;var statearr_51887_51922 = state_51860__$1;(statearr_51887_51922[2] = inst_51839);
(statearr_51887_51922[1] = 19);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 18))
{var inst_51820 = (state_51860[13]);var inst_51825 = (state_51860[15]);var inst_51819 = (state_51860[14]);var inst_51842 = cljs.core.empty_QMARK_(inst_51820);var inst_51843 = (inst_51819.cljs$core$IFn$_invoke$arity$1 ? inst_51819.cljs$core$IFn$_invoke$arity$1(inst_51825) : inst_51819.call(null,inst_51825));var inst_51844 = cljs.core.not(inst_51843);var inst_51845 = (inst_51842) && (inst_51844);var state_51860__$1 = state_51860;var statearr_51888_51923 = state_51860__$1;(statearr_51888_51923[2] = inst_51845);
(statearr_51888_51923[1] = 19);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 19))
{var inst_51847 = (state_51860[2]);var state_51860__$1 = state_51860;if(cljs.core.truth_(inst_51847))
{var statearr_51889_51924 = state_51860__$1;(statearr_51889_51924[1] = 20);
} else
{var statearr_51890_51925 = state_51860__$1;(statearr_51890_51925[1] = 21);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 20))
{var inst_51824 = (state_51860[16]);var state_51860__$1 = state_51860;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51860__$1,23,out,inst_51824);
} else
{if((state_val_51861 === 21))
{var state_51860__$1 = state_51860;var statearr_51891_51926 = state_51860__$1;(statearr_51891_51926[2] = null);
(statearr_51891_51926[1] = 22);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 22))
{var inst_51817 = (state_51860[12]);var inst_51853 = (state_51860[2]);var inst_51809 = inst_51817;var state_51860__$1 = (function (){var statearr_51892 = state_51860;(statearr_51892[19] = inst_51853);
(statearr_51892[8] = inst_51809);
return statearr_51892;
})();var statearr_51893_51927 = state_51860__$1;(statearr_51893_51927[2] = null);
(statearr_51893_51927[1] = 5);
return cljs.core.constant$keyword$285;
} else
{if((state_val_51861 === 23))
{var inst_51850 = (state_51860[2]);var state_51860__$1 = state_51860;var statearr_51894_51928 = state_51860__$1;(statearr_51894_51928[2] = inst_51850);
(statearr_51894_51928[1] = 22);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_51898 = (new Array(20));(statearr_51898[0] = state_machine__13894__auto__);
(statearr_51898[1] = 1);
return statearr_51898;
});
var state_machine__13894__auto____1 = (function (state_51860){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_51860);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e51899){if((e51899 instanceof Object))
{var ex__13897__auto__ = e51899;var statearr_51900_51929 = state_51860;(statearr_51900_51929[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51860);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e51899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__51930 = state_51860;
state_51860 = G__51930;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_51860){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_51860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_51901 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_51901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___51902);
return statearr_51901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
cljs.core.async.Pub = (function (){var obj51932 = {};return obj51932;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__10885__auto__ = p;if(and__10885__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__10885__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__11500__auto__ = (((p == null))?null:p);return (function (){var or__10897__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__11500__auto__)]);if(or__10897__auto__)
{return or__10897__auto__;
} else
{var or__10897__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__10897__auto____$1)
{return or__10897__auto____$1;
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
return (function (topic){var or__10897__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__10897__auto__))
{return or__10897__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__10897__auto__,mults){
return (function (p1__51933_SHARP_){if(cljs.core.truth_((p1__51933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51933_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51933_SHARP_.call(null,topic))))
{return p1__51933_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51933_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__10897__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t52058 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52058 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta52059){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta52059 = meta52059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52058.cljs$lang$type = true;
cljs.core.async.t52058.cljs$lang$ctorStr = "cljs.core.async/t52058";
cljs.core.async.t52058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__11441__auto__,writer__11442__auto__,opt__11443__auto__){return cljs.core._write(writer__11442__auto__,"cljs.core.async/t52058");
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t52058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_52060){var self__ = this;
var _52060__$1 = this;return self__.meta52059;
});})(mults,ensure_mult))
;
cljs.core.async.t52058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_52060,meta52059__$1){var self__ = this;
var _52060__$1 = this;return (new cljs.core.async.t52058(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta52059__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t52058 = ((function (mults,ensure_mult){
return (function __GT_t52058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52059){return (new cljs.core.async.t52058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta52059));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t52058(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__13963__auto___52182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52134){var state_val_52135 = (state_52134[1]);if((state_val_52135 === 1))
{var state_52134__$1 = state_52134;var statearr_52136_52183 = state_52134__$1;(statearr_52136_52183[2] = null);
(statearr_52136_52183[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 2))
{var state_52134__$1 = state_52134;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52134__$1,4,ch);
} else
{if((state_val_52135 === 3))
{var inst_52132 = (state_52134[2]);var state_52134__$1 = state_52134;return cljs.core.async.impl.ioc_helpers.return_chan(state_52134__$1,inst_52132);
} else
{if((state_val_52135 === 4))
{var inst_52063 = (state_52134[7]);var inst_52063__$1 = (state_52134[2]);var inst_52064 = (inst_52063__$1 == null);var state_52134__$1 = (function (){var statearr_52137 = state_52134;(statearr_52137[7] = inst_52063__$1);
return statearr_52137;
})();if(cljs.core.truth_(inst_52064))
{var statearr_52138_52184 = state_52134__$1;(statearr_52138_52184[1] = 5);
} else
{var statearr_52139_52185 = state_52134__$1;(statearr_52139_52185[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 5))
{var inst_52070 = cljs.core.deref(mults);var inst_52071 = cljs.core.vals(inst_52070);var inst_52072 = cljs.core.seq(inst_52071);var inst_52073 = inst_52072;var inst_52074 = null;var inst_52075 = 0;var inst_52076 = 0;var state_52134__$1 = (function (){var statearr_52140 = state_52134;(statearr_52140[8] = inst_52076);
(statearr_52140[9] = inst_52075);
(statearr_52140[10] = inst_52073);
(statearr_52140[11] = inst_52074);
return statearr_52140;
})();var statearr_52141_52186 = state_52134__$1;(statearr_52141_52186[2] = null);
(statearr_52141_52186[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 6))
{var inst_52063 = (state_52134[7]);var inst_52111 = (state_52134[12]);var inst_52113 = (state_52134[13]);var inst_52111__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52063) : topic_fn.call(null,inst_52063));var inst_52112 = cljs.core.deref(mults);var inst_52113__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52112,inst_52111__$1);var state_52134__$1 = (function (){var statearr_52142 = state_52134;(statearr_52142[12] = inst_52111__$1);
(statearr_52142[13] = inst_52113__$1);
return statearr_52142;
})();if(cljs.core.truth_(inst_52113__$1))
{var statearr_52143_52187 = state_52134__$1;(statearr_52143_52187[1] = 19);
} else
{var statearr_52144_52188 = state_52134__$1;(statearr_52144_52188[1] = 20);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 7))
{var inst_52130 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52145_52189 = state_52134__$1;(statearr_52145_52189[2] = inst_52130);
(statearr_52145_52189[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 8))
{var inst_52076 = (state_52134[8]);var inst_52075 = (state_52134[9]);var inst_52078 = (inst_52076 < inst_52075);var inst_52079 = inst_52078;var state_52134__$1 = state_52134;if(cljs.core.truth_(inst_52079))
{var statearr_52149_52190 = state_52134__$1;(statearr_52149_52190[1] = 10);
} else
{var statearr_52150_52191 = state_52134__$1;(statearr_52150_52191[1] = 11);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 9))
{var inst_52109 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52151_52192 = state_52134__$1;(statearr_52151_52192[2] = inst_52109);
(statearr_52151_52192[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 10))
{var inst_52076 = (state_52134[8]);var inst_52075 = (state_52134[9]);var inst_52073 = (state_52134[10]);var inst_52074 = (state_52134[11]);var inst_52081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_52074,inst_52076);var inst_52082 = cljs.core.async.muxch_STAR_(inst_52081);var inst_52083 = cljs.core.async.close_BANG_(inst_52082);var inst_52084 = (inst_52076 + 1);var tmp52146 = inst_52075;var tmp52147 = inst_52073;var tmp52148 = inst_52074;var inst_52073__$1 = tmp52147;var inst_52074__$1 = tmp52148;var inst_52075__$1 = tmp52146;var inst_52076__$1 = inst_52084;var state_52134__$1 = (function (){var statearr_52152 = state_52134;(statearr_52152[8] = inst_52076__$1);
(statearr_52152[9] = inst_52075__$1);
(statearr_52152[10] = inst_52073__$1);
(statearr_52152[11] = inst_52074__$1);
(statearr_52152[14] = inst_52083);
return statearr_52152;
})();var statearr_52153_52193 = state_52134__$1;(statearr_52153_52193[2] = null);
(statearr_52153_52193[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 11))
{var inst_52073 = (state_52134[10]);var inst_52087 = (state_52134[15]);var inst_52087__$1 = cljs.core.seq(inst_52073);var state_52134__$1 = (function (){var statearr_52154 = state_52134;(statearr_52154[15] = inst_52087__$1);
return statearr_52154;
})();if(inst_52087__$1)
{var statearr_52155_52194 = state_52134__$1;(statearr_52155_52194[1] = 13);
} else
{var statearr_52156_52195 = state_52134__$1;(statearr_52156_52195[1] = 14);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 12))
{var inst_52107 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52157_52196 = state_52134__$1;(statearr_52157_52196[2] = inst_52107);
(statearr_52157_52196[1] = 9);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 13))
{var inst_52087 = (state_52134[15]);var inst_52089 = cljs.core.chunked_seq_QMARK_(inst_52087);var state_52134__$1 = state_52134;if(inst_52089)
{var statearr_52158_52197 = state_52134__$1;(statearr_52158_52197[1] = 16);
} else
{var statearr_52159_52198 = state_52134__$1;(statearr_52159_52198[1] = 17);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 14))
{var state_52134__$1 = state_52134;var statearr_52160_52199 = state_52134__$1;(statearr_52160_52199[2] = null);
(statearr_52160_52199[1] = 15);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 15))
{var inst_52105 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52161_52200 = state_52134__$1;(statearr_52161_52200[2] = inst_52105);
(statearr_52161_52200[1] = 12);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 16))
{var inst_52087 = (state_52134[15]);var inst_52091 = cljs.core.chunk_first(inst_52087);var inst_52092 = cljs.core.chunk_rest(inst_52087);var inst_52093 = cljs.core.count(inst_52091);var inst_52073 = inst_52092;var inst_52074 = inst_52091;var inst_52075 = inst_52093;var inst_52076 = 0;var state_52134__$1 = (function (){var statearr_52162 = state_52134;(statearr_52162[8] = inst_52076);
(statearr_52162[9] = inst_52075);
(statearr_52162[10] = inst_52073);
(statearr_52162[11] = inst_52074);
return statearr_52162;
})();var statearr_52163_52201 = state_52134__$1;(statearr_52163_52201[2] = null);
(statearr_52163_52201[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 17))
{var inst_52087 = (state_52134[15]);var inst_52096 = cljs.core.first(inst_52087);var inst_52097 = cljs.core.async.muxch_STAR_(inst_52096);var inst_52098 = cljs.core.async.close_BANG_(inst_52097);var inst_52099 = cljs.core.next(inst_52087);var inst_52073 = inst_52099;var inst_52074 = null;var inst_52075 = 0;var inst_52076 = 0;var state_52134__$1 = (function (){var statearr_52164 = state_52134;(statearr_52164[8] = inst_52076);
(statearr_52164[9] = inst_52075);
(statearr_52164[10] = inst_52073);
(statearr_52164[11] = inst_52074);
(statearr_52164[16] = inst_52098);
return statearr_52164;
})();var statearr_52165_52202 = state_52134__$1;(statearr_52165_52202[2] = null);
(statearr_52165_52202[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 18))
{var inst_52102 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52166_52203 = state_52134__$1;(statearr_52166_52203[2] = inst_52102);
(statearr_52166_52203[1] = 15);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 19))
{var state_52134__$1 = state_52134;var statearr_52167_52204 = state_52134__$1;(statearr_52167_52204[2] = null);
(statearr_52167_52204[1] = 24);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 20))
{var state_52134__$1 = state_52134;var statearr_52168_52205 = state_52134__$1;(statearr_52168_52205[2] = null);
(statearr_52168_52205[1] = 21);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 21))
{var inst_52127 = (state_52134[2]);var state_52134__$1 = (function (){var statearr_52169 = state_52134;(statearr_52169[17] = inst_52127);
return statearr_52169;
})();var statearr_52170_52206 = state_52134__$1;(statearr_52170_52206[2] = null);
(statearr_52170_52206[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 22))
{var inst_52124 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52171_52207 = state_52134__$1;(statearr_52171_52207[2] = inst_52124);
(statearr_52171_52207[1] = 21);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 23))
{var inst_52111 = (state_52134[12]);var inst_52115 = (state_52134[2]);var inst_52116 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52111);var state_52134__$1 = (function (){var statearr_52172 = state_52134;(statearr_52172[18] = inst_52115);
return statearr_52172;
})();var statearr_52173_52208 = state_52134__$1;(statearr_52173_52208[2] = inst_52116);
cljs.core.async.impl.ioc_helpers.process_exception(state_52134__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52135 === 24))
{var inst_52063 = (state_52134[7]);var inst_52113 = (state_52134[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52134,23,Object,null,22);var inst_52120 = cljs.core.async.muxch_STAR_(inst_52113);var state_52134__$1 = state_52134;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52134__$1,25,inst_52120,inst_52063);
} else
{if((state_val_52135 === 25))
{var inst_52122 = (state_52134[2]);var state_52134__$1 = state_52134;var statearr_52174_52209 = state_52134__$1;(statearr_52174_52209[2] = inst_52122);
cljs.core.async.impl.ioc_helpers.process_exception(state_52134__$1);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52178 = (new Array(19));(statearr_52178[0] = state_machine__13894__auto__);
(statearr_52178[1] = 1);
return statearr_52178;
});
var state_machine__13894__auto____1 = (function (state_52134){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52134);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52179){if((e52179 instanceof Object))
{var ex__13897__auto__ = e52179;var statearr_52180_52210 = state_52134;(statearr_52180_52210[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52134);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52211 = state_52134;
state_52134 = G__52211;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52134){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52181 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52182);
return statearr_52181;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__13963__auto___52348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52318){var state_val_52319 = (state_52318[1]);if((state_val_52319 === 1))
{var state_52318__$1 = state_52318;var statearr_52320_52349 = state_52318__$1;(statearr_52320_52349[2] = null);
(statearr_52320_52349[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 2))
{var inst_52281 = cljs.core.reset_BANG_(dctr,cnt);var inst_52282 = 0;var state_52318__$1 = (function (){var statearr_52321 = state_52318;(statearr_52321[7] = inst_52282);
(statearr_52321[8] = inst_52281);
return statearr_52321;
})();var statearr_52322_52350 = state_52318__$1;(statearr_52322_52350[2] = null);
(statearr_52322_52350[1] = 4);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 3))
{var inst_52316 = (state_52318[2]);var state_52318__$1 = state_52318;return cljs.core.async.impl.ioc_helpers.return_chan(state_52318__$1,inst_52316);
} else
{if((state_val_52319 === 4))
{var inst_52282 = (state_52318[7]);var inst_52284 = (inst_52282 < cnt);var state_52318__$1 = state_52318;if(cljs.core.truth_(inst_52284))
{var statearr_52323_52351 = state_52318__$1;(statearr_52323_52351[1] = 6);
} else
{var statearr_52324_52352 = state_52318__$1;(statearr_52324_52352[1] = 7);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 5))
{var inst_52302 = (state_52318[2]);var state_52318__$1 = (function (){var statearr_52325 = state_52318;(statearr_52325[9] = inst_52302);
return statearr_52325;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52318__$1,12,dchan);
} else
{if((state_val_52319 === 6))
{var state_52318__$1 = state_52318;var statearr_52326_52353 = state_52318__$1;(statearr_52326_52353[2] = null);
(statearr_52326_52353[1] = 11);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 7))
{var state_52318__$1 = state_52318;var statearr_52327_52354 = state_52318__$1;(statearr_52327_52354[2] = null);
(statearr_52327_52354[1] = 8);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 8))
{var inst_52300 = (state_52318[2]);var state_52318__$1 = state_52318;var statearr_52328_52355 = state_52318__$1;(statearr_52328_52355[2] = inst_52300);
(statearr_52328_52355[1] = 5);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 9))
{var inst_52282 = (state_52318[7]);var inst_52295 = (state_52318[2]);var inst_52296 = (inst_52282 + 1);var inst_52282__$1 = inst_52296;var state_52318__$1 = (function (){var statearr_52329 = state_52318;(statearr_52329[7] = inst_52282__$1);
(statearr_52329[10] = inst_52295);
return statearr_52329;
})();var statearr_52330_52356 = state_52318__$1;(statearr_52330_52356[2] = null);
(statearr_52330_52356[1] = 4);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 10))
{var inst_52286 = (state_52318[2]);var inst_52287 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_52318__$1 = (function (){var statearr_52331 = state_52318;(statearr_52331[11] = inst_52286);
return statearr_52331;
})();var statearr_52332_52357 = state_52318__$1;(statearr_52332_52357[2] = inst_52287);
cljs.core.async.impl.ioc_helpers.process_exception(state_52318__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 11))
{var inst_52282 = (state_52318[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_52318,10,Object,null,9);var inst_52291 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52282) : chs__$1.call(null,inst_52282));var inst_52292 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52282) : done.call(null,inst_52282));var inst_52293 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52291,inst_52292);var state_52318__$1 = state_52318;var statearr_52333_52358 = state_52318__$1;(statearr_52333_52358[2] = inst_52293);
cljs.core.async.impl.ioc_helpers.process_exception(state_52318__$1);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 12))
{var inst_52304 = (state_52318[12]);var inst_52304__$1 = (state_52318[2]);var inst_52305 = cljs.core.some(cljs.core.nil_QMARK_,inst_52304__$1);var state_52318__$1 = (function (){var statearr_52334 = state_52318;(statearr_52334[12] = inst_52304__$1);
return statearr_52334;
})();if(cljs.core.truth_(inst_52305))
{var statearr_52335_52359 = state_52318__$1;(statearr_52335_52359[1] = 13);
} else
{var statearr_52336_52360 = state_52318__$1;(statearr_52336_52360[1] = 14);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 13))
{var inst_52307 = cljs.core.async.close_BANG_(out);var state_52318__$1 = state_52318;var statearr_52337_52361 = state_52318__$1;(statearr_52337_52361[2] = inst_52307);
(statearr_52337_52361[1] = 15);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 14))
{var inst_52304 = (state_52318[12]);var inst_52309 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52304);var state_52318__$1 = state_52318;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52318__$1,16,out,inst_52309);
} else
{if((state_val_52319 === 15))
{var inst_52314 = (state_52318[2]);var state_52318__$1 = state_52318;var statearr_52338_52362 = state_52318__$1;(statearr_52338_52362[2] = inst_52314);
(statearr_52338_52362[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52319 === 16))
{var inst_52311 = (state_52318[2]);var state_52318__$1 = (function (){var statearr_52339 = state_52318;(statearr_52339[13] = inst_52311);
return statearr_52339;
})();var statearr_52340_52363 = state_52318__$1;(statearr_52340_52363[2] = null);
(statearr_52340_52363[1] = 2);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52344 = (new Array(14));(statearr_52344[0] = state_machine__13894__auto__);
(statearr_52344[1] = 1);
return statearr_52344;
});
var state_machine__13894__auto____1 = (function (state_52318){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52318);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52345){if((e52345 instanceof Object))
{var ex__13897__auto__ = e52345;var statearr_52346_52364 = state_52318;(statearr_52346_52364[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52318);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52365 = state_52318;
state_52318 = G__52365;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52318){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52347 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52348);
return statearr_52347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___52473 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52449){var state_val_52450 = (state_52449[1]);if((state_val_52450 === 1))
{var inst_52420 = cljs.core.vec(chs);var inst_52421 = inst_52420;var state_52449__$1 = (function (){var statearr_52451 = state_52449;(statearr_52451[7] = inst_52421);
return statearr_52451;
})();var statearr_52452_52474 = state_52449__$1;(statearr_52452_52474[2] = null);
(statearr_52452_52474[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 2))
{var inst_52421 = (state_52449[7]);var inst_52423 = cljs.core.count(inst_52421);var inst_52424 = (inst_52423 > 0);var state_52449__$1 = state_52449;if(cljs.core.truth_(inst_52424))
{var statearr_52453_52475 = state_52449__$1;(statearr_52453_52475[1] = 4);
} else
{var statearr_52454_52476 = state_52449__$1;(statearr_52454_52476[1] = 5);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 3))
{var inst_52447 = (state_52449[2]);var state_52449__$1 = state_52449;return cljs.core.async.impl.ioc_helpers.return_chan(state_52449__$1,inst_52447);
} else
{if((state_val_52450 === 4))
{var inst_52421 = (state_52449[7]);var state_52449__$1 = state_52449;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_52449__$1,7,inst_52421);
} else
{if((state_val_52450 === 5))
{var inst_52443 = cljs.core.async.close_BANG_(out);var state_52449__$1 = state_52449;var statearr_52455_52477 = state_52449__$1;(statearr_52455_52477[2] = inst_52443);
(statearr_52455_52477[1] = 6);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 6))
{var inst_52445 = (state_52449[2]);var state_52449__$1 = state_52449;var statearr_52456_52478 = state_52449__$1;(statearr_52456_52478[2] = inst_52445);
(statearr_52456_52478[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 7))
{var inst_52428 = (state_52449[8]);var inst_52429 = (state_52449[9]);var inst_52428__$1 = (state_52449[2]);var inst_52429__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52428__$1,0,null);var inst_52430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52428__$1,1,null);var inst_52431 = (inst_52429__$1 == null);var state_52449__$1 = (function (){var statearr_52457 = state_52449;(statearr_52457[10] = inst_52430);
(statearr_52457[8] = inst_52428__$1);
(statearr_52457[9] = inst_52429__$1);
return statearr_52457;
})();if(cljs.core.truth_(inst_52431))
{var statearr_52458_52479 = state_52449__$1;(statearr_52458_52479[1] = 8);
} else
{var statearr_52459_52480 = state_52449__$1;(statearr_52459_52480[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 8))
{var inst_52430 = (state_52449[10]);var inst_52421 = (state_52449[7]);var inst_52428 = (state_52449[8]);var inst_52429 = (state_52449[9]);var inst_52433 = (function (){var c = inst_52430;var v = inst_52429;var vec__52426 = inst_52428;var cs = inst_52421;return ((function (c,v,vec__52426,cs,inst_52430,inst_52421,inst_52428,inst_52429,state_val_52450){
return (function (p1__52366_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52366_SHARP_);
});
;})(c,v,vec__52426,cs,inst_52430,inst_52421,inst_52428,inst_52429,state_val_52450))
})();var inst_52434 = cljs.core.filterv(inst_52433,inst_52421);var inst_52421__$1 = inst_52434;var state_52449__$1 = (function (){var statearr_52460 = state_52449;(statearr_52460[7] = inst_52421__$1);
return statearr_52460;
})();var statearr_52461_52481 = state_52449__$1;(statearr_52461_52481[2] = null);
(statearr_52461_52481[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 9))
{var inst_52429 = (state_52449[9]);var state_52449__$1 = state_52449;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52449__$1,11,out,inst_52429);
} else
{if((state_val_52450 === 10))
{var inst_52441 = (state_52449[2]);var state_52449__$1 = state_52449;var statearr_52463_52482 = state_52449__$1;(statearr_52463_52482[2] = inst_52441);
(statearr_52463_52482[1] = 6);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52450 === 11))
{var inst_52421 = (state_52449[7]);var inst_52438 = (state_52449[2]);var tmp52462 = inst_52421;var inst_52421__$1 = tmp52462;var state_52449__$1 = (function (){var statearr_52464 = state_52449;(statearr_52464[11] = inst_52438);
(statearr_52464[7] = inst_52421__$1);
return statearr_52464;
})();var statearr_52465_52483 = state_52449__$1;(statearr_52465_52483[2] = null);
(statearr_52465_52483[1] = 2);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52469 = (new Array(12));(statearr_52469[0] = state_machine__13894__auto__);
(statearr_52469[1] = 1);
return statearr_52469;
});
var state_machine__13894__auto____1 = (function (state_52449){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52449);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52470){if((e52470 instanceof Object))
{var ex__13897__auto__ = e52470;var statearr_52471_52484 = state_52449;(statearr_52471_52484[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52449);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52470;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52485 = state_52449;
state_52449 = G__52485;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52449){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52472 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52473);
return statearr_52472;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___52578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52555){var state_val_52556 = (state_52555[1]);if((state_val_52556 === 1))
{var inst_52532 = 0;var state_52555__$1 = (function (){var statearr_52557 = state_52555;(statearr_52557[7] = inst_52532);
return statearr_52557;
})();var statearr_52558_52579 = state_52555__$1;(statearr_52558_52579[2] = null);
(statearr_52558_52579[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 2))
{var inst_52532 = (state_52555[7]);var inst_52534 = (inst_52532 < n);var state_52555__$1 = state_52555;if(cljs.core.truth_(inst_52534))
{var statearr_52559_52580 = state_52555__$1;(statearr_52559_52580[1] = 4);
} else
{var statearr_52560_52581 = state_52555__$1;(statearr_52560_52581[1] = 5);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 3))
{var inst_52552 = (state_52555[2]);var inst_52553 = cljs.core.async.close_BANG_(out);var state_52555__$1 = (function (){var statearr_52561 = state_52555;(statearr_52561[8] = inst_52552);
return statearr_52561;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_52555__$1,inst_52553);
} else
{if((state_val_52556 === 4))
{var state_52555__$1 = state_52555;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52555__$1,7,ch);
} else
{if((state_val_52556 === 5))
{var state_52555__$1 = state_52555;var statearr_52562_52582 = state_52555__$1;(statearr_52562_52582[2] = null);
(statearr_52562_52582[1] = 6);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 6))
{var inst_52550 = (state_52555[2]);var state_52555__$1 = state_52555;var statearr_52563_52583 = state_52555__$1;(statearr_52563_52583[2] = inst_52550);
(statearr_52563_52583[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 7))
{var inst_52537 = (state_52555[9]);var inst_52537__$1 = (state_52555[2]);var inst_52538 = (inst_52537__$1 == null);var inst_52539 = cljs.core.not(inst_52538);var state_52555__$1 = (function (){var statearr_52564 = state_52555;(statearr_52564[9] = inst_52537__$1);
return statearr_52564;
})();if(inst_52539)
{var statearr_52565_52584 = state_52555__$1;(statearr_52565_52584[1] = 8);
} else
{var statearr_52566_52585 = state_52555__$1;(statearr_52566_52585[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 8))
{var inst_52537 = (state_52555[9]);var state_52555__$1 = state_52555;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52555__$1,11,out,inst_52537);
} else
{if((state_val_52556 === 9))
{var state_52555__$1 = state_52555;var statearr_52567_52586 = state_52555__$1;(statearr_52567_52586[2] = null);
(statearr_52567_52586[1] = 10);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 10))
{var inst_52547 = (state_52555[2]);var state_52555__$1 = state_52555;var statearr_52568_52587 = state_52555__$1;(statearr_52568_52587[2] = inst_52547);
(statearr_52568_52587[1] = 6);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52556 === 11))
{var inst_52532 = (state_52555[7]);var inst_52542 = (state_52555[2]);var inst_52543 = (inst_52532 + 1);var inst_52532__$1 = inst_52543;var state_52555__$1 = (function (){var statearr_52569 = state_52555;(statearr_52569[10] = inst_52542);
(statearr_52569[7] = inst_52532__$1);
return statearr_52569;
})();var statearr_52570_52588 = state_52555__$1;(statearr_52570_52588[2] = null);
(statearr_52570_52588[1] = 2);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52574 = (new Array(11));(statearr_52574[0] = state_machine__13894__auto__);
(statearr_52574[1] = 1);
return statearr_52574;
});
var state_machine__13894__auto____1 = (function (state_52555){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52555);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52575){if((e52575 instanceof Object))
{var ex__13897__auto__ = e52575;var statearr_52576_52589 = state_52555;(statearr_52576_52589[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52555);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52575;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52590 = state_52555;
state_52555 = G__52590;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52555){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52577 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52578);
return statearr_52577;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___52687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52662){var state_val_52663 = (state_52662[1]);if((state_val_52663 === 1))
{var inst_52639 = null;var state_52662__$1 = (function (){var statearr_52664 = state_52662;(statearr_52664[7] = inst_52639);
return statearr_52664;
})();var statearr_52665_52688 = state_52662__$1;(statearr_52665_52688[2] = null);
(statearr_52665_52688[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 2))
{var state_52662__$1 = state_52662;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52662__$1,4,ch);
} else
{if((state_val_52663 === 3))
{var inst_52659 = (state_52662[2]);var inst_52660 = cljs.core.async.close_BANG_(out);var state_52662__$1 = (function (){var statearr_52666 = state_52662;(statearr_52666[8] = inst_52659);
return statearr_52666;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_52662__$1,inst_52660);
} else
{if((state_val_52663 === 4))
{var inst_52642 = (state_52662[9]);var inst_52642__$1 = (state_52662[2]);var inst_52643 = (inst_52642__$1 == null);var inst_52644 = cljs.core.not(inst_52643);var state_52662__$1 = (function (){var statearr_52667 = state_52662;(statearr_52667[9] = inst_52642__$1);
return statearr_52667;
})();if(inst_52644)
{var statearr_52668_52689 = state_52662__$1;(statearr_52668_52689[1] = 5);
} else
{var statearr_52669_52690 = state_52662__$1;(statearr_52669_52690[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 5))
{var inst_52639 = (state_52662[7]);var inst_52642 = (state_52662[9]);var inst_52646 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52642,inst_52639);var state_52662__$1 = state_52662;if(inst_52646)
{var statearr_52670_52691 = state_52662__$1;(statearr_52670_52691[1] = 8);
} else
{var statearr_52671_52692 = state_52662__$1;(statearr_52671_52692[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 6))
{var state_52662__$1 = state_52662;var statearr_52673_52693 = state_52662__$1;(statearr_52673_52693[2] = null);
(statearr_52673_52693[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 7))
{var inst_52657 = (state_52662[2]);var state_52662__$1 = state_52662;var statearr_52674_52694 = state_52662__$1;(statearr_52674_52694[2] = inst_52657);
(statearr_52674_52694[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 8))
{var inst_52639 = (state_52662[7]);var tmp52672 = inst_52639;var inst_52639__$1 = tmp52672;var state_52662__$1 = (function (){var statearr_52675 = state_52662;(statearr_52675[7] = inst_52639__$1);
return statearr_52675;
})();var statearr_52676_52695 = state_52662__$1;(statearr_52676_52695[2] = null);
(statearr_52676_52695[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 9))
{var inst_52642 = (state_52662[9]);var state_52662__$1 = state_52662;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52662__$1,11,out,inst_52642);
} else
{if((state_val_52663 === 10))
{var inst_52654 = (state_52662[2]);var state_52662__$1 = state_52662;var statearr_52677_52696 = state_52662__$1;(statearr_52677_52696[2] = inst_52654);
(statearr_52677_52696[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52663 === 11))
{var inst_52642 = (state_52662[9]);var inst_52651 = (state_52662[2]);var inst_52639 = inst_52642;var state_52662__$1 = (function (){var statearr_52678 = state_52662;(statearr_52678[7] = inst_52639);
(statearr_52678[10] = inst_52651);
return statearr_52678;
})();var statearr_52679_52697 = state_52662__$1;(statearr_52679_52697[2] = null);
(statearr_52679_52697[1] = 2);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52683 = (new Array(11));(statearr_52683[0] = state_machine__13894__auto__);
(statearr_52683[1] = 1);
return statearr_52683;
});
var state_machine__13894__auto____1 = (function (state_52662){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52662);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52684){if((e52684 instanceof Object))
{var ex__13897__auto__ = e52684;var statearr_52685_52698 = state_52662;(statearr_52685_52698[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52662);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52684;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52699 = state_52662;
state_52662 = G__52699;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52662){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52686 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52686[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52687);
return statearr_52686;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___52834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52804){var state_val_52805 = (state_52804[1]);if((state_val_52805 === 1))
{var inst_52767 = (new Array(n));var inst_52768 = inst_52767;var inst_52769 = 0;var state_52804__$1 = (function (){var statearr_52806 = state_52804;(statearr_52806[7] = inst_52768);
(statearr_52806[8] = inst_52769);
return statearr_52806;
})();var statearr_52807_52835 = state_52804__$1;(statearr_52807_52835[2] = null);
(statearr_52807_52835[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 2))
{var state_52804__$1 = state_52804;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52804__$1,4,ch);
} else
{if((state_val_52805 === 3))
{var inst_52802 = (state_52804[2]);var state_52804__$1 = state_52804;return cljs.core.async.impl.ioc_helpers.return_chan(state_52804__$1,inst_52802);
} else
{if((state_val_52805 === 4))
{var inst_52772 = (state_52804[9]);var inst_52772__$1 = (state_52804[2]);var inst_52773 = (inst_52772__$1 == null);var inst_52774 = cljs.core.not(inst_52773);var state_52804__$1 = (function (){var statearr_52808 = state_52804;(statearr_52808[9] = inst_52772__$1);
return statearr_52808;
})();if(inst_52774)
{var statearr_52809_52836 = state_52804__$1;(statearr_52809_52836[1] = 5);
} else
{var statearr_52810_52837 = state_52804__$1;(statearr_52810_52837[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 5))
{var inst_52768 = (state_52804[7]);var inst_52772 = (state_52804[9]);var inst_52769 = (state_52804[8]);var inst_52777 = (state_52804[10]);var inst_52776 = (inst_52768[inst_52769] = inst_52772);var inst_52777__$1 = (inst_52769 + 1);var inst_52778 = (inst_52777__$1 < n);var state_52804__$1 = (function (){var statearr_52811 = state_52804;(statearr_52811[10] = inst_52777__$1);
(statearr_52811[11] = inst_52776);
return statearr_52811;
})();if(cljs.core.truth_(inst_52778))
{var statearr_52812_52838 = state_52804__$1;(statearr_52812_52838[1] = 8);
} else
{var statearr_52813_52839 = state_52804__$1;(statearr_52813_52839[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 6))
{var inst_52769 = (state_52804[8]);var inst_52790 = (inst_52769 > 0);var state_52804__$1 = state_52804;if(cljs.core.truth_(inst_52790))
{var statearr_52815_52840 = state_52804__$1;(statearr_52815_52840[1] = 12);
} else
{var statearr_52816_52841 = state_52804__$1;(statearr_52816_52841[1] = 13);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 7))
{var inst_52800 = (state_52804[2]);var state_52804__$1 = state_52804;var statearr_52817_52842 = state_52804__$1;(statearr_52817_52842[2] = inst_52800);
(statearr_52817_52842[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 8))
{var inst_52768 = (state_52804[7]);var inst_52777 = (state_52804[10]);var tmp52814 = inst_52768;var inst_52768__$1 = tmp52814;var inst_52769 = inst_52777;var state_52804__$1 = (function (){var statearr_52818 = state_52804;(statearr_52818[7] = inst_52768__$1);
(statearr_52818[8] = inst_52769);
return statearr_52818;
})();var statearr_52819_52843 = state_52804__$1;(statearr_52819_52843[2] = null);
(statearr_52819_52843[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 9))
{var inst_52768 = (state_52804[7]);var inst_52782 = cljs.core.vec(inst_52768);var state_52804__$1 = state_52804;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52804__$1,11,out,inst_52782);
} else
{if((state_val_52805 === 10))
{var inst_52788 = (state_52804[2]);var state_52804__$1 = state_52804;var statearr_52820_52844 = state_52804__$1;(statearr_52820_52844[2] = inst_52788);
(statearr_52820_52844[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 11))
{var inst_52784 = (state_52804[2]);var inst_52785 = (new Array(n));var inst_52768 = inst_52785;var inst_52769 = 0;var state_52804__$1 = (function (){var statearr_52821 = state_52804;(statearr_52821[12] = inst_52784);
(statearr_52821[7] = inst_52768);
(statearr_52821[8] = inst_52769);
return statearr_52821;
})();var statearr_52822_52845 = state_52804__$1;(statearr_52822_52845[2] = null);
(statearr_52822_52845[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 12))
{var inst_52768 = (state_52804[7]);var inst_52792 = cljs.core.vec(inst_52768);var state_52804__$1 = state_52804;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52804__$1,15,out,inst_52792);
} else
{if((state_val_52805 === 13))
{var state_52804__$1 = state_52804;var statearr_52823_52846 = state_52804__$1;(statearr_52823_52846[2] = null);
(statearr_52823_52846[1] = 14);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 14))
{var inst_52797 = (state_52804[2]);var inst_52798 = cljs.core.async.close_BANG_(out);var state_52804__$1 = (function (){var statearr_52824 = state_52804;(statearr_52824[13] = inst_52797);
return statearr_52824;
})();var statearr_52825_52847 = state_52804__$1;(statearr_52825_52847[2] = inst_52798);
(statearr_52825_52847[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52805 === 15))
{var inst_52794 = (state_52804[2]);var state_52804__$1 = state_52804;var statearr_52826_52848 = state_52804__$1;(statearr_52826_52848[2] = inst_52794);
(statearr_52826_52848[1] = 14);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52830 = (new Array(14));(statearr_52830[0] = state_machine__13894__auto__);
(statearr_52830[1] = 1);
return statearr_52830;
});
var state_machine__13894__auto____1 = (function (state_52804){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52804);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52831){if((e52831 instanceof Object))
{var ex__13897__auto__ = e52831;var statearr_52832_52849 = state_52804;(statearr_52832_52849[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52804);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52831;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__52850 = state_52804;
state_52804 = G__52850;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52804){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52833 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52834);
return statearr_52833;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__13963__auto___52993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__13964__auto__ = (function (){var switch__13893__auto__ = (function (state_52963){var state_val_52964 = (state_52963[1]);if((state_val_52964 === 1))
{var inst_52922 = (new Array(0));var inst_52923 = inst_52922;var inst_52924 = cljs.core.constant$keyword$298;var state_52963__$1 = (function (){var statearr_52965 = state_52963;(statearr_52965[7] = inst_52923);
(statearr_52965[8] = inst_52924);
return statearr_52965;
})();var statearr_52966_52994 = state_52963__$1;(statearr_52966_52994[2] = null);
(statearr_52966_52994[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 2))
{var state_52963__$1 = state_52963;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52963__$1,4,ch);
} else
{if((state_val_52964 === 3))
{var inst_52961 = (state_52963[2]);var state_52963__$1 = state_52963;return cljs.core.async.impl.ioc_helpers.return_chan(state_52963__$1,inst_52961);
} else
{if((state_val_52964 === 4))
{var inst_52927 = (state_52963[9]);var inst_52927__$1 = (state_52963[2]);var inst_52928 = (inst_52927__$1 == null);var inst_52929 = cljs.core.not(inst_52928);var state_52963__$1 = (function (){var statearr_52967 = state_52963;(statearr_52967[9] = inst_52927__$1);
return statearr_52967;
})();if(inst_52929)
{var statearr_52968_52995 = state_52963__$1;(statearr_52968_52995[1] = 5);
} else
{var statearr_52969_52996 = state_52963__$1;(statearr_52969_52996[1] = 6);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 5))
{var inst_52927 = (state_52963[9]);var inst_52924 = (state_52963[8]);var inst_52931 = (state_52963[10]);var inst_52931__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52927) : f.call(null,inst_52927));var inst_52932 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52931__$1,inst_52924);var inst_52933 = cljs.core.keyword_identical_QMARK_(inst_52924,cljs.core.constant$keyword$298);var inst_52934 = (inst_52932) || (inst_52933);var state_52963__$1 = (function (){var statearr_52970 = state_52963;(statearr_52970[10] = inst_52931__$1);
return statearr_52970;
})();if(cljs.core.truth_(inst_52934))
{var statearr_52971_52997 = state_52963__$1;(statearr_52971_52997[1] = 8);
} else
{var statearr_52972_52998 = state_52963__$1;(statearr_52972_52998[1] = 9);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 6))
{var inst_52923 = (state_52963[7]);var inst_52948 = inst_52923.length;var inst_52949 = (inst_52948 > 0);var state_52963__$1 = state_52963;if(cljs.core.truth_(inst_52949))
{var statearr_52974_52999 = state_52963__$1;(statearr_52974_52999[1] = 12);
} else
{var statearr_52975_53000 = state_52963__$1;(statearr_52975_53000[1] = 13);
}
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 7))
{var inst_52959 = (state_52963[2]);var state_52963__$1 = state_52963;var statearr_52976_53001 = state_52963__$1;(statearr_52976_53001[2] = inst_52959);
(statearr_52976_53001[1] = 3);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 8))
{var inst_52927 = (state_52963[9]);var inst_52923 = (state_52963[7]);var inst_52931 = (state_52963[10]);var inst_52936 = inst_52923.push(inst_52927);var tmp52973 = inst_52923;var inst_52923__$1 = tmp52973;var inst_52924 = inst_52931;var state_52963__$1 = (function (){var statearr_52977 = state_52963;(statearr_52977[7] = inst_52923__$1);
(statearr_52977[8] = inst_52924);
(statearr_52977[11] = inst_52936);
return statearr_52977;
})();var statearr_52978_53002 = state_52963__$1;(statearr_52978_53002[2] = null);
(statearr_52978_53002[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 9))
{var inst_52923 = (state_52963[7]);var inst_52939 = cljs.core.vec(inst_52923);var state_52963__$1 = state_52963;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52963__$1,11,out,inst_52939);
} else
{if((state_val_52964 === 10))
{var inst_52946 = (state_52963[2]);var state_52963__$1 = state_52963;var statearr_52979_53003 = state_52963__$1;(statearr_52979_53003[2] = inst_52946);
(statearr_52979_53003[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 11))
{var inst_52927 = (state_52963[9]);var inst_52931 = (state_52963[10]);var inst_52941 = (state_52963[2]);var inst_52942 = (new Array(0));var inst_52943 = inst_52942.push(inst_52927);var inst_52923 = inst_52942;var inst_52924 = inst_52931;var state_52963__$1 = (function (){var statearr_52980 = state_52963;(statearr_52980[7] = inst_52923);
(statearr_52980[8] = inst_52924);
(statearr_52980[12] = inst_52941);
(statearr_52980[13] = inst_52943);
return statearr_52980;
})();var statearr_52981_53004 = state_52963__$1;(statearr_52981_53004[2] = null);
(statearr_52981_53004[1] = 2);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 12))
{var inst_52923 = (state_52963[7]);var inst_52951 = cljs.core.vec(inst_52923);var state_52963__$1 = state_52963;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52963__$1,15,out,inst_52951);
} else
{if((state_val_52964 === 13))
{var state_52963__$1 = state_52963;var statearr_52982_53005 = state_52963__$1;(statearr_52982_53005[2] = null);
(statearr_52982_53005[1] = 14);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 14))
{var inst_52956 = (state_52963[2]);var inst_52957 = cljs.core.async.close_BANG_(out);var state_52963__$1 = (function (){var statearr_52983 = state_52963;(statearr_52983[14] = inst_52956);
return statearr_52983;
})();var statearr_52984_53006 = state_52963__$1;(statearr_52984_53006[2] = inst_52957);
(statearr_52984_53006[1] = 7);
return cljs.core.constant$keyword$285;
} else
{if((state_val_52964 === 15))
{var inst_52953 = (state_52963[2]);var state_52963__$1 = state_52963;var statearr_52985_53007 = state_52963__$1;(statearr_52985_53007[2] = inst_52953);
(statearr_52985_53007[1] = 14);
return cljs.core.constant$keyword$285;
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
});return ((function (switch__13893__auto__){
return (function() {
var state_machine__13894__auto__ = null;
var state_machine__13894__auto____0 = (function (){var statearr_52989 = (new Array(15));(statearr_52989[0] = state_machine__13894__auto__);
(statearr_52989[1] = 1);
return statearr_52989;
});
var state_machine__13894__auto____1 = (function (state_52963){while(true){
var ret_value__13895__auto__ = (function (){try{while(true){
var result__13896__auto__ = switch__13893__auto__(state_52963);if(cljs.core.keyword_identical_QMARK_(result__13896__auto__,cljs.core.constant$keyword$285))
{{
continue;
}
} else
{return result__13896__auto__;
}
break;
}
}catch (e52990){if((e52990 instanceof Object))
{var ex__13897__auto__ = e52990;var statearr_52991_53008 = state_52963;(statearr_52991_53008[5] = ex__13897__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_52963);
return cljs.core.constant$keyword$285;
} else
{if(cljs.core.constant$keyword$274)
{throw e52990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__13895__auto__,cljs.core.constant$keyword$285))
{{
var G__53009 = state_52963;
state_52963 = G__53009;
continue;
}
} else
{return ret_value__13895__auto__;
}
break;
}
});
state_machine__13894__auto__ = function(state_52963){
switch(arguments.length){
case 0:
return state_machine__13894__auto____0.call(this);
case 1:
return state_machine__13894__auto____1.call(this,state_52963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__13894__auto____0;
state_machine__13894__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__13894__auto____1;
return state_machine__13894__auto__;
})()
;})(switch__13893__auto__))
})();var state__13965__auto__ = (function (){var statearr_52992 = (f__13964__auto__.cljs$core$IFn$_invoke$arity$0 ? f__13964__auto__.cljs$core$IFn$_invoke$arity$0() : f__13964__auto__.call(null));(statearr_52992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__13963__auto___52993);
return statearr_52992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13965__auto__);
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
