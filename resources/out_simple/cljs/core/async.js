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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t210528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210528 = (function (f,fn_handler,meta210529){
this.f = f;
this.fn_handler = fn_handler;
this.meta210529 = meta210529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210528.cljs$lang$type = true;
cljs.core.async.t210528.cljs$lang$ctorStr = "cljs.core.async/t210528";
cljs.core.async.t210528.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210528");
});
cljs.core.async.t210528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t210528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t210528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t210528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210530){var self__ = this;
var _210530__$1 = this;return self__.meta210529;
});
cljs.core.async.t210528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210530,meta210529__$1){var self__ = this;
var _210530__$1 = this;return (new cljs.core.async.t210528(self__.f,self__.fn_handler,meta210529__$1));
});
cljs.core.async.__GT_t210528 = (function __GT_t210528(f__$1,fn_handler__$1,meta210529){return (new cljs.core.async.t210528(f__$1,fn_handler__$1,meta210529));
});
}
return (new cljs.core.async.t210528(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__210532 = buff;if(G__210532)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__210532.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__210532.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__210532);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__210532);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_210533 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_210533);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_210533);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__7718__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___210534 = n;var x_210535 = 0;while(true){
if((x_210535 < n__8553__auto___210534))
{(a[x_210535] = 0);
{
var G__210536 = (x_210535 + 1);
x_210535 = G__210536;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__210537 = (i + 1);
i = G__210537;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t210541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210541 = (function (flag,alt_flag,meta210542){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta210542 = meta210542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210541.cljs$lang$type = true;
cljs.core.async.t210541.cljs$lang$ctorStr = "cljs.core.async/t210541";
cljs.core.async.t210541.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210541");
});
cljs.core.async.t210541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t210541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t210541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t210541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210543){var self__ = this;
var _210543__$1 = this;return self__.meta210542;
});
cljs.core.async.t210541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210543,meta210542__$1){var self__ = this;
var _210543__$1 = this;return (new cljs.core.async.t210541(self__.flag,self__.alt_flag,meta210542__$1));
});
cljs.core.async.__GT_t210541 = (function __GT_t210541(flag__$1,alt_flag__$1,meta210542){return (new cljs.core.async.t210541(flag__$1,alt_flag__$1,meta210542));
});
}
return (new cljs.core.async.t210541(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t210547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210547 = (function (cb,flag,alt_handler,meta210548){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta210548 = meta210548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210547.cljs$lang$type = true;
cljs.core.async.t210547.cljs$lang$ctorStr = "cljs.core.async/t210547";
cljs.core.async.t210547.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210547");
});
cljs.core.async.t210547.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t210547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t210547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t210547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210549){var self__ = this;
var _210549__$1 = this;return self__.meta210548;
});
cljs.core.async.t210547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210549,meta210548__$1){var self__ = this;
var _210549__$1 = this;return (new cljs.core.async.t210547(self__.cb,self__.flag,self__.alt_handler,meta210548__$1));
});
cljs.core.async.__GT_t210547 = (function __GT_t210547(cb__$1,flag__$1,alt_handler__$1,meta210548){return (new cljs.core.async.t210547(cb__$1,flag__$1,alt_handler__$1,meta210548));
});
}
return (new cljs.core.async.t210547(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__210550_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__210550_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7730__auto__ = wport;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__210551 = (i + 1);
i = G__210551;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4098__auto__ = (function (){var and__7718__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__7718__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__7718__auto__;
}
})();if(cljs.core.truth_(temp__4098__auto__))
{var got = temp__4098__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__210552){var map__210554 = p__210552;var map__210554__$1 = ((cljs.core.seq_QMARK_.call(null,map__210554))?cljs.core.apply.call(null,cljs.core.hash_map,map__210554):map__210554);var opts = map__210554__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__210552 = null;if (arguments.length > 1) {
  p__210552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__210552);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__210555){
var ports = cljs.core.first(arglist__210555);
var p__210552 = cljs.core.rest(arglist__210555);
return alts_BANG___delegate(ports,p__210552);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t210563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210563 = (function (ch,f,map_LT_,meta210564){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta210564 = meta210564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210563.cljs$lang$type = true;
cljs.core.async.t210563.cljs$lang$ctorStr = "cljs.core.async/t210563";
cljs.core.async.t210563.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210563");
});
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t210566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210566 = (function (fn1,_,meta210564,ch,f,map_LT_,meta210567){
this.fn1 = fn1;
this._ = _;
this.meta210564 = meta210564;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta210567 = meta210567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210566.cljs$lang$type = true;
cljs.core.async.t210566.cljs$lang$ctorStr = "cljs.core.async/t210566";
cljs.core.async.t210566.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210566");
});
cljs.core.async.t210566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t210566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t210566.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t210566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__210556_SHARP_){return f1.call(null,(((p1__210556_SHARP_ == null))?null:self__.f.call(null,p1__210556_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t210566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210568){var self__ = this;
var _210568__$1 = this;return self__.meta210567;
});
cljs.core.async.t210566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210568,meta210567__$1){var self__ = this;
var _210568__$1 = this;return (new cljs.core.async.t210566(self__.fn1,self__._,self__.meta210564,self__.ch,self__.f,self__.map_LT_,meta210567__$1));
});
cljs.core.async.__GT_t210566 = (function __GT_t210566(fn1__$1,___$2,meta210564__$1,ch__$2,f__$2,map_LT___$2,meta210567){return (new cljs.core.async.t210566(fn1__$1,___$2,meta210564__$1,ch__$2,f__$2,map_LT___$2,meta210567));
});
}
return (new cljs.core.async.t210566(fn1,___$1,self__.meta210564,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__7718__auto__ = ret;if(cljs.core.truth_(and__7718__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__7718__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t210563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t210563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210565){var self__ = this;
var _210565__$1 = this;return self__.meta210564;
});
cljs.core.async.t210563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210565,meta210564__$1){var self__ = this;
var _210565__$1 = this;return (new cljs.core.async.t210563(self__.ch,self__.f,self__.map_LT_,meta210564__$1));
});
cljs.core.async.__GT_t210563 = (function __GT_t210563(ch__$1,f__$1,map_LT___$1,meta210564){return (new cljs.core.async.t210563(ch__$1,f__$1,map_LT___$1,meta210564));
});
}
return (new cljs.core.async.t210563(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t210572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210572 = (function (ch,f,map_GT_,meta210573){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta210573 = meta210573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210572.cljs$lang$type = true;
cljs.core.async.t210572.cljs$lang$ctorStr = "cljs.core.async/t210572";
cljs.core.async.t210572.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210572");
});
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t210572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t210572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210574){var self__ = this;
var _210574__$1 = this;return self__.meta210573;
});
cljs.core.async.t210572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210574,meta210573__$1){var self__ = this;
var _210574__$1 = this;return (new cljs.core.async.t210572(self__.ch,self__.f,self__.map_GT_,meta210573__$1));
});
cljs.core.async.__GT_t210572 = (function __GT_t210572(ch__$1,f__$1,map_GT___$1,meta210573){return (new cljs.core.async.t210572(ch__$1,f__$1,map_GT___$1,meta210573));
});
}
return (new cljs.core.async.t210572(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t210578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t210578 = (function (ch,p,filter_GT_,meta210579){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta210579 = meta210579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t210578.cljs$lang$type = true;
cljs.core.async.t210578.cljs$lang$ctorStr = "cljs.core.async/t210578";
cljs.core.async.t210578.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t210578");
});
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t210578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t210578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_210580){var self__ = this;
var _210580__$1 = this;return self__.meta210579;
});
cljs.core.async.t210578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_210580,meta210579__$1){var self__ = this;
var _210580__$1 = this;return (new cljs.core.async.t210578(self__.ch,self__.p,self__.filter_GT_,meta210579__$1));
});
cljs.core.async.__GT_t210578 = (function __GT_t210578(ch__$1,p__$1,filter_GT___$1,meta210579){return (new cljs.core.async.t210578(ch__$1,p__$1,filter_GT___$1,meta210579));
});
}
return (new cljs.core.async.t210578(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___210663 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_210642){var state_val_210643 = (state_210642[1]);if((state_val_210643 === 1))
{var state_210642__$1 = state_210642;var statearr_210644_210664 = state_210642__$1;(statearr_210644_210664[2] = null);
(statearr_210644_210664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 2))
{var state_210642__$1 = state_210642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210642__$1,4,ch);
} else
{if((state_val_210643 === 3))
{var inst_210640 = (state_210642[2]);var state_210642__$1 = state_210642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210642__$1,inst_210640);
} else
{if((state_val_210643 === 4))
{var inst_210624 = (state_210642[7]);var inst_210624__$1 = (state_210642[2]);var inst_210625 = (inst_210624__$1 == null);var state_210642__$1 = (function (){var statearr_210645 = state_210642;(statearr_210645[7] = inst_210624__$1);
return statearr_210645;
})();if(cljs.core.truth_(inst_210625))
{var statearr_210646_210665 = state_210642__$1;(statearr_210646_210665[1] = 5);
} else
{var statearr_210647_210666 = state_210642__$1;(statearr_210647_210666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 5))
{var inst_210627 = cljs.core.async.close_BANG_.call(null,out);var state_210642__$1 = state_210642;var statearr_210648_210667 = state_210642__$1;(statearr_210648_210667[2] = inst_210627);
(statearr_210648_210667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 6))
{var inst_210624 = (state_210642[7]);var inst_210629 = p.call(null,inst_210624);var state_210642__$1 = state_210642;if(cljs.core.truth_(inst_210629))
{var statearr_210649_210668 = state_210642__$1;(statearr_210649_210668[1] = 8);
} else
{var statearr_210650_210669 = state_210642__$1;(statearr_210650_210669[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 7))
{var inst_210638 = (state_210642[2]);var state_210642__$1 = state_210642;var statearr_210651_210670 = state_210642__$1;(statearr_210651_210670[2] = inst_210638);
(statearr_210651_210670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 8))
{var inst_210624 = (state_210642[7]);var state_210642__$1 = state_210642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_210642__$1,11,out,inst_210624);
} else
{if((state_val_210643 === 9))
{var state_210642__$1 = state_210642;var statearr_210652_210671 = state_210642__$1;(statearr_210652_210671[2] = null);
(statearr_210652_210671[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 10))
{var inst_210635 = (state_210642[2]);var state_210642__$1 = (function (){var statearr_210653 = state_210642;(statearr_210653[8] = inst_210635);
return statearr_210653;
})();var statearr_210654_210672 = state_210642__$1;(statearr_210654_210672[2] = null);
(statearr_210654_210672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210643 === 11))
{var inst_210632 = (state_210642[2]);var state_210642__$1 = state_210642;var statearr_210655_210673 = state_210642__$1;(statearr_210655_210673[2] = inst_210632);
(statearr_210655_210673[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_210659 = (new Array(9));(statearr_210659[0] = state_machine__10214__auto__);
(statearr_210659[1] = 1);
return statearr_210659;
});
var state_machine__10214__auto____1 = (function (state_210642){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_210642);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e210660){if((e210660 instanceof Object))
{var ex__10217__auto__ = e210660;var statearr_210661_210674 = state_210642;(statearr_210661_210674[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210675 = state_210642;
state_210642 = G__210675;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_210642){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_210642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_210662 = f__10284__auto__.call(null);(statearr_210662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___210663);
return statearr_210662;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_210827){var state_val_210828 = (state_210827[1]);if((state_val_210828 === 1))
{var state_210827__$1 = state_210827;var statearr_210829_210866 = state_210827__$1;(statearr_210829_210866[2] = null);
(statearr_210829_210866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 2))
{var state_210827__$1 = state_210827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210827__$1,4,in$);
} else
{if((state_val_210828 === 3))
{var inst_210825 = (state_210827[2]);var state_210827__$1 = state_210827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210827__$1,inst_210825);
} else
{if((state_val_210828 === 4))
{var inst_210773 = (state_210827[7]);var inst_210773__$1 = (state_210827[2]);var inst_210774 = (inst_210773__$1 == null);var state_210827__$1 = (function (){var statearr_210830 = state_210827;(statearr_210830[7] = inst_210773__$1);
return statearr_210830;
})();if(cljs.core.truth_(inst_210774))
{var statearr_210831_210867 = state_210827__$1;(statearr_210831_210867[1] = 5);
} else
{var statearr_210832_210868 = state_210827__$1;(statearr_210832_210868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 5))
{var inst_210776 = cljs.core.async.close_BANG_.call(null,out);var state_210827__$1 = state_210827;var statearr_210833_210869 = state_210827__$1;(statearr_210833_210869[2] = inst_210776);
(statearr_210833_210869[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 6))
{var inst_210773 = (state_210827[7]);var inst_210778 = f.call(null,inst_210773);var inst_210783 = cljs.core.seq.call(null,inst_210778);var inst_210784 = inst_210783;var inst_210785 = null;var inst_210786 = 0;var inst_210787 = 0;var state_210827__$1 = (function (){var statearr_210834 = state_210827;(statearr_210834[8] = inst_210784);
(statearr_210834[9] = inst_210785);
(statearr_210834[10] = inst_210786);
(statearr_210834[11] = inst_210787);
return statearr_210834;
})();var statearr_210835_210870 = state_210827__$1;(statearr_210835_210870[2] = null);
(statearr_210835_210870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 7))
{var inst_210823 = (state_210827[2]);var state_210827__$1 = state_210827;var statearr_210836_210871 = state_210827__$1;(statearr_210836_210871[2] = inst_210823);
(statearr_210836_210871[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 8))
{var inst_210786 = (state_210827[10]);var inst_210787 = (state_210827[11]);var inst_210789 = (inst_210787 < inst_210786);var inst_210790 = inst_210789;var state_210827__$1 = state_210827;if(cljs.core.truth_(inst_210790))
{var statearr_210837_210872 = state_210827__$1;(statearr_210837_210872[1] = 10);
} else
{var statearr_210838_210873 = state_210827__$1;(statearr_210838_210873[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 9))
{var inst_210820 = (state_210827[2]);var state_210827__$1 = (function (){var statearr_210839 = state_210827;(statearr_210839[12] = inst_210820);
return statearr_210839;
})();var statearr_210840_210874 = state_210827__$1;(statearr_210840_210874[2] = null);
(statearr_210840_210874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 10))
{var inst_210785 = (state_210827[9]);var inst_210787 = (state_210827[11]);var inst_210792 = cljs.core._nth.call(null,inst_210785,inst_210787);var state_210827__$1 = state_210827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_210827__$1,13,out,inst_210792);
} else
{if((state_val_210828 === 11))
{var inst_210784 = (state_210827[8]);var inst_210798 = (state_210827[13]);var inst_210798__$1 = cljs.core.seq.call(null,inst_210784);var state_210827__$1 = (function (){var statearr_210844 = state_210827;(statearr_210844[13] = inst_210798__$1);
return statearr_210844;
})();if(inst_210798__$1)
{var statearr_210845_210875 = state_210827__$1;(statearr_210845_210875[1] = 14);
} else
{var statearr_210846_210876 = state_210827__$1;(statearr_210846_210876[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 12))
{var inst_210818 = (state_210827[2]);var state_210827__$1 = state_210827;var statearr_210847_210877 = state_210827__$1;(statearr_210847_210877[2] = inst_210818);
(statearr_210847_210877[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 13))
{var inst_210784 = (state_210827[8]);var inst_210785 = (state_210827[9]);var inst_210786 = (state_210827[10]);var inst_210787 = (state_210827[11]);var inst_210794 = (state_210827[2]);var inst_210795 = (inst_210787 + 1);var tmp210841 = inst_210784;var tmp210842 = inst_210785;var tmp210843 = inst_210786;var inst_210784__$1 = tmp210841;var inst_210785__$1 = tmp210842;var inst_210786__$1 = tmp210843;var inst_210787__$1 = inst_210795;var state_210827__$1 = (function (){var statearr_210848 = state_210827;(statearr_210848[8] = inst_210784__$1);
(statearr_210848[9] = inst_210785__$1);
(statearr_210848[14] = inst_210794);
(statearr_210848[10] = inst_210786__$1);
(statearr_210848[11] = inst_210787__$1);
return statearr_210848;
})();var statearr_210849_210878 = state_210827__$1;(statearr_210849_210878[2] = null);
(statearr_210849_210878[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 14))
{var inst_210798 = (state_210827[13]);var inst_210800 = cljs.core.chunked_seq_QMARK_.call(null,inst_210798);var state_210827__$1 = state_210827;if(inst_210800)
{var statearr_210850_210879 = state_210827__$1;(statearr_210850_210879[1] = 17);
} else
{var statearr_210851_210880 = state_210827__$1;(statearr_210851_210880[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 15))
{var state_210827__$1 = state_210827;var statearr_210852_210881 = state_210827__$1;(statearr_210852_210881[2] = null);
(statearr_210852_210881[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 16))
{var inst_210816 = (state_210827[2]);var state_210827__$1 = state_210827;var statearr_210853_210882 = state_210827__$1;(statearr_210853_210882[2] = inst_210816);
(statearr_210853_210882[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 17))
{var inst_210798 = (state_210827[13]);var inst_210802 = cljs.core.chunk_first.call(null,inst_210798);var inst_210803 = cljs.core.chunk_rest.call(null,inst_210798);var inst_210804 = cljs.core.count.call(null,inst_210802);var inst_210784 = inst_210803;var inst_210785 = inst_210802;var inst_210786 = inst_210804;var inst_210787 = 0;var state_210827__$1 = (function (){var statearr_210854 = state_210827;(statearr_210854[8] = inst_210784);
(statearr_210854[9] = inst_210785);
(statearr_210854[10] = inst_210786);
(statearr_210854[11] = inst_210787);
return statearr_210854;
})();var statearr_210855_210883 = state_210827__$1;(statearr_210855_210883[2] = null);
(statearr_210855_210883[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 18))
{var inst_210798 = (state_210827[13]);var inst_210807 = cljs.core.first.call(null,inst_210798);var state_210827__$1 = state_210827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_210827__$1,20,out,inst_210807);
} else
{if((state_val_210828 === 19))
{var inst_210813 = (state_210827[2]);var state_210827__$1 = state_210827;var statearr_210856_210884 = state_210827__$1;(statearr_210856_210884[2] = inst_210813);
(statearr_210856_210884[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210828 === 20))
{var inst_210798 = (state_210827[13]);var inst_210809 = (state_210827[2]);var inst_210810 = cljs.core.next.call(null,inst_210798);var inst_210784 = inst_210810;var inst_210785 = null;var inst_210786 = 0;var inst_210787 = 0;var state_210827__$1 = (function (){var statearr_210857 = state_210827;(statearr_210857[8] = inst_210784);
(statearr_210857[15] = inst_210809);
(statearr_210857[9] = inst_210785);
(statearr_210857[10] = inst_210786);
(statearr_210857[11] = inst_210787);
return statearr_210857;
})();var statearr_210858_210885 = state_210827__$1;(statearr_210858_210885[2] = null);
(statearr_210858_210885[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_210862 = (new Array(16));(statearr_210862[0] = state_machine__10214__auto__);
(statearr_210862[1] = 1);
return statearr_210862;
});
var state_machine__10214__auto____1 = (function (state_210827){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_210827);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e210863){if((e210863 instanceof Object))
{var ex__10217__auto__ = e210863;var statearr_210864_210886 = state_210827;(statearr_210864_210886[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210887 = state_210827;
state_210827 = G__210887;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_210827){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_210827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_210865 = f__10284__auto__.call(null);(statearr_210865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_210865;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___210968 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_210947){var state_val_210948 = (state_210947[1]);if((state_val_210948 === 1))
{var state_210947__$1 = state_210947;var statearr_210949_210969 = state_210947__$1;(statearr_210949_210969[2] = null);
(statearr_210949_210969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 2))
{var state_210947__$1 = state_210947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_210947__$1,4,from);
} else
{if((state_val_210948 === 3))
{var inst_210945 = (state_210947[2]);var state_210947__$1 = state_210947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_210947__$1,inst_210945);
} else
{if((state_val_210948 === 4))
{var inst_210930 = (state_210947[7]);var inst_210930__$1 = (state_210947[2]);var inst_210931 = (inst_210930__$1 == null);var state_210947__$1 = (function (){var statearr_210950 = state_210947;(statearr_210950[7] = inst_210930__$1);
return statearr_210950;
})();if(cljs.core.truth_(inst_210931))
{var statearr_210951_210970 = state_210947__$1;(statearr_210951_210970[1] = 5);
} else
{var statearr_210952_210971 = state_210947__$1;(statearr_210952_210971[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 5))
{var state_210947__$1 = state_210947;if(cljs.core.truth_(close_QMARK_))
{var statearr_210953_210972 = state_210947__$1;(statearr_210953_210972[1] = 8);
} else
{var statearr_210954_210973 = state_210947__$1;(statearr_210954_210973[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 6))
{var inst_210930 = (state_210947[7]);var state_210947__$1 = state_210947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_210947__$1,11,to,inst_210930);
} else
{if((state_val_210948 === 7))
{var inst_210943 = (state_210947[2]);var state_210947__$1 = state_210947;var statearr_210955_210974 = state_210947__$1;(statearr_210955_210974[2] = inst_210943);
(statearr_210955_210974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 8))
{var inst_210934 = cljs.core.async.close_BANG_.call(null,to);var state_210947__$1 = state_210947;var statearr_210956_210975 = state_210947__$1;(statearr_210956_210975[2] = inst_210934);
(statearr_210956_210975[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 9))
{var state_210947__$1 = state_210947;var statearr_210957_210976 = state_210947__$1;(statearr_210957_210976[2] = null);
(statearr_210957_210976[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 10))
{var inst_210937 = (state_210947[2]);var state_210947__$1 = state_210947;var statearr_210958_210977 = state_210947__$1;(statearr_210958_210977[2] = inst_210937);
(statearr_210958_210977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_210948 === 11))
{var inst_210940 = (state_210947[2]);var state_210947__$1 = (function (){var statearr_210959 = state_210947;(statearr_210959[8] = inst_210940);
return statearr_210959;
})();var statearr_210960_210978 = state_210947__$1;(statearr_210960_210978[2] = null);
(statearr_210960_210978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_210964 = (new Array(9));(statearr_210964[0] = state_machine__10214__auto__);
(statearr_210964[1] = 1);
return statearr_210964;
});
var state_machine__10214__auto____1 = (function (state_210947){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_210947);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e210965){if((e210965 instanceof Object))
{var ex__10217__auto__ = e210965;var statearr_210966_210979 = state_210947;(statearr_210966_210979[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_210947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e210965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__210980 = state_210947;
state_210947 = G__210980;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_210947){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_210947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_210967 = f__10284__auto__.call(null);(statearr_210967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___210968);
return statearr_210967;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___211067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_211045){var state_val_211046 = (state_211045[1]);if((state_val_211046 === 1))
{var state_211045__$1 = state_211045;var statearr_211047_211068 = state_211045__$1;(statearr_211047_211068[2] = null);
(statearr_211047_211068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 2))
{var state_211045__$1 = state_211045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_211045__$1,4,ch);
} else
{if((state_val_211046 === 3))
{var inst_211043 = (state_211045[2]);var state_211045__$1 = state_211045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_211045__$1,inst_211043);
} else
{if((state_val_211046 === 4))
{var inst_211026 = (state_211045[7]);var inst_211026__$1 = (state_211045[2]);var inst_211027 = (inst_211026__$1 == null);var state_211045__$1 = (function (){var statearr_211048 = state_211045;(statearr_211048[7] = inst_211026__$1);
return statearr_211048;
})();if(cljs.core.truth_(inst_211027))
{var statearr_211049_211069 = state_211045__$1;(statearr_211049_211069[1] = 5);
} else
{var statearr_211050_211070 = state_211045__$1;(statearr_211050_211070[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 5))
{var inst_211029 = cljs.core.async.close_BANG_.call(null,tc);var inst_211030 = cljs.core.async.close_BANG_.call(null,fc);var state_211045__$1 = (function (){var statearr_211051 = state_211045;(statearr_211051[8] = inst_211029);
return statearr_211051;
})();var statearr_211052_211071 = state_211045__$1;(statearr_211052_211071[2] = inst_211030);
(statearr_211052_211071[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 6))
{var inst_211026 = (state_211045[7]);var inst_211032 = p.call(null,inst_211026);var state_211045__$1 = state_211045;if(cljs.core.truth_(inst_211032))
{var statearr_211053_211072 = state_211045__$1;(statearr_211053_211072[1] = 9);
} else
{var statearr_211054_211073 = state_211045__$1;(statearr_211054_211073[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 7))
{var inst_211041 = (state_211045[2]);var state_211045__$1 = state_211045;var statearr_211055_211074 = state_211045__$1;(statearr_211055_211074[2] = inst_211041);
(statearr_211055_211074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 8))
{var inst_211038 = (state_211045[2]);var state_211045__$1 = (function (){var statearr_211056 = state_211045;(statearr_211056[9] = inst_211038);
return statearr_211056;
})();var statearr_211057_211075 = state_211045__$1;(statearr_211057_211075[2] = null);
(statearr_211057_211075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 9))
{var state_211045__$1 = state_211045;var statearr_211058_211076 = state_211045__$1;(statearr_211058_211076[2] = tc);
(statearr_211058_211076[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 10))
{var state_211045__$1 = state_211045;var statearr_211059_211077 = state_211045__$1;(statearr_211059_211077[2] = fc);
(statearr_211059_211077[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211046 === 11))
{var inst_211026 = (state_211045[7]);var inst_211036 = (state_211045[2]);var state_211045__$1 = state_211045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_211045__$1,8,inst_211036,inst_211026);
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
var state_machine__10214__auto____0 = (function (){var statearr_211063 = (new Array(10));(statearr_211063[0] = state_machine__10214__auto__);
(statearr_211063[1] = 1);
return statearr_211063;
});
var state_machine__10214__auto____1 = (function (state_211045){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_211045);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e211064){if((e211064 instanceof Object))
{var ex__10217__auto__ = e211064;var statearr_211065_211078 = state_211045;(statearr_211065_211078[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e211064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__211079 = state_211045;
state_211045 = G__211079;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_211045){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_211045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_211066 = f__10284__auto__.call(null);(statearr_211066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___211067);
return statearr_211066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_211126){var state_val_211127 = (state_211126[1]);if((state_val_211127 === 7))
{var inst_211122 = (state_211126[2]);var state_211126__$1 = state_211126;var statearr_211128_211144 = state_211126__$1;(statearr_211128_211144[2] = inst_211122);
(statearr_211128_211144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211127 === 6))
{var inst_211112 = (state_211126[7]);var inst_211115 = (state_211126[8]);var inst_211119 = f.call(null,inst_211112,inst_211115);var inst_211112__$1 = inst_211119;var state_211126__$1 = (function (){var statearr_211129 = state_211126;(statearr_211129[7] = inst_211112__$1);
return statearr_211129;
})();var statearr_211130_211145 = state_211126__$1;(statearr_211130_211145[2] = null);
(statearr_211130_211145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211127 === 5))
{var inst_211112 = (state_211126[7]);var state_211126__$1 = state_211126;var statearr_211131_211146 = state_211126__$1;(statearr_211131_211146[2] = inst_211112);
(statearr_211131_211146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211127 === 4))
{var inst_211115 = (state_211126[8]);var inst_211115__$1 = (state_211126[2]);var inst_211116 = (inst_211115__$1 == null);var state_211126__$1 = (function (){var statearr_211132 = state_211126;(statearr_211132[8] = inst_211115__$1);
return statearr_211132;
})();if(cljs.core.truth_(inst_211116))
{var statearr_211133_211147 = state_211126__$1;(statearr_211133_211147[1] = 5);
} else
{var statearr_211134_211148 = state_211126__$1;(statearr_211134_211148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211127 === 3))
{var inst_211124 = (state_211126[2]);var state_211126__$1 = state_211126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_211126__$1,inst_211124);
} else
{if((state_val_211127 === 2))
{var state_211126__$1 = state_211126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_211126__$1,4,ch);
} else
{if((state_val_211127 === 1))
{var inst_211112 = init;var state_211126__$1 = (function (){var statearr_211135 = state_211126;(statearr_211135[7] = inst_211112);
return statearr_211135;
})();var statearr_211136_211149 = state_211126__$1;(statearr_211136_211149[2] = null);
(statearr_211136_211149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_211140 = (new Array(9));(statearr_211140[0] = state_machine__10214__auto__);
(statearr_211140[1] = 1);
return statearr_211140;
});
var state_machine__10214__auto____1 = (function (state_211126){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_211126);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e211141){if((e211141 instanceof Object))
{var ex__10217__auto__ = e211141;var statearr_211142_211150 = state_211126;(statearr_211142_211150[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e211141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__211151 = state_211126;
state_211126 = G__211151;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_211126){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_211126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_211143 = f__10284__auto__.call(null);(statearr_211143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_211143;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_211213){var state_val_211214 = (state_211213[1]);if((state_val_211214 === 1))
{var inst_211193 = cljs.core.seq.call(null,coll);var inst_211194 = inst_211193;var state_211213__$1 = (function (){var statearr_211215 = state_211213;(statearr_211215[7] = inst_211194);
return statearr_211215;
})();var statearr_211216_211234 = state_211213__$1;(statearr_211216_211234[2] = null);
(statearr_211216_211234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 2))
{var inst_211194 = (state_211213[7]);var state_211213__$1 = state_211213;if(cljs.core.truth_(inst_211194))
{var statearr_211217_211235 = state_211213__$1;(statearr_211217_211235[1] = 4);
} else
{var statearr_211218_211236 = state_211213__$1;(statearr_211218_211236[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 3))
{var inst_211211 = (state_211213[2]);var state_211213__$1 = state_211213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_211213__$1,inst_211211);
} else
{if((state_val_211214 === 4))
{var inst_211194 = (state_211213[7]);var inst_211197 = cljs.core.first.call(null,inst_211194);var state_211213__$1 = state_211213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_211213__$1,7,ch,inst_211197);
} else
{if((state_val_211214 === 5))
{var state_211213__$1 = state_211213;if(cljs.core.truth_(close_QMARK_))
{var statearr_211219_211237 = state_211213__$1;(statearr_211219_211237[1] = 8);
} else
{var statearr_211220_211238 = state_211213__$1;(statearr_211220_211238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 6))
{var inst_211209 = (state_211213[2]);var state_211213__$1 = state_211213;var statearr_211221_211239 = state_211213__$1;(statearr_211221_211239[2] = inst_211209);
(statearr_211221_211239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 7))
{var inst_211194 = (state_211213[7]);var inst_211199 = (state_211213[2]);var inst_211200 = cljs.core.next.call(null,inst_211194);var inst_211194__$1 = inst_211200;var state_211213__$1 = (function (){var statearr_211222 = state_211213;(statearr_211222[8] = inst_211199);
(statearr_211222[7] = inst_211194__$1);
return statearr_211222;
})();var statearr_211223_211240 = state_211213__$1;(statearr_211223_211240[2] = null);
(statearr_211223_211240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 8))
{var inst_211204 = cljs.core.async.close_BANG_.call(null,ch);var state_211213__$1 = state_211213;var statearr_211224_211241 = state_211213__$1;(statearr_211224_211241[2] = inst_211204);
(statearr_211224_211241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 9))
{var state_211213__$1 = state_211213;var statearr_211225_211242 = state_211213__$1;(statearr_211225_211242[2] = null);
(statearr_211225_211242[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211214 === 10))
{var inst_211207 = (state_211213[2]);var state_211213__$1 = state_211213;var statearr_211226_211243 = state_211213__$1;(statearr_211226_211243[2] = inst_211207);
(statearr_211226_211243[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_211230 = (new Array(9));(statearr_211230[0] = state_machine__10214__auto__);
(statearr_211230[1] = 1);
return statearr_211230;
});
var state_machine__10214__auto____1 = (function (state_211213){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_211213);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e211231){if((e211231 instanceof Object))
{var ex__10217__auto__ = e211231;var statearr_211232_211244 = state_211213;(statearr_211232_211244[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e211231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__211245 = state_211213;
state_211213 = G__211245;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_211213){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_211213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_211233 = f__10284__auto__.call(null);(statearr_211233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_211233;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj211247 = {};return obj211247;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj211249 = {};return obj211249;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t211464 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t211464 = (function (cs,ch,mult,meta211465){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta211465 = meta211465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t211464.cljs$lang$type = true;
cljs.core.async.t211464.cljs$lang$ctorStr = "cljs.core.async/t211464";
cljs.core.async.t211464.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t211464");
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t211464.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t211464.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_211466){var self__ = this;
var _211466__$1 = this;return self__.meta211465;
});})(cs))
;
cljs.core.async.t211464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_211466,meta211465__$1){var self__ = this;
var _211466__$1 = this;return (new cljs.core.async.t211464(self__.cs,self__.ch,self__.mult,meta211465__$1));
});})(cs))
;
cljs.core.async.__GT_t211464 = ((function (cs){
return (function __GT_t211464(cs__$1,ch__$1,mult__$1,meta211465){return (new cljs.core.async.t211464(cs__$1,ch__$1,mult__$1,meta211465));
});})(cs))
;
}
return (new cljs.core.async.t211464(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___211678 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_211596){var state_val_211597 = (state_211596[1]);if((state_val_211597 === 32))
{var inst_211545 = (state_211596[7]);var inst_211469 = (state_211596[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_211596,31,Object,null,30);var inst_211552 = cljs.core.async.put_BANG_.call(null,inst_211545,inst_211469,done);var state_211596__$1 = state_211596;var statearr_211598_211679 = state_211596__$1;(statearr_211598_211679[2] = inst_211552);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211596__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 1))
{var state_211596__$1 = state_211596;var statearr_211599_211680 = state_211596__$1;(statearr_211599_211680[2] = null);
(statearr_211599_211680[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 33))
{var inst_211558 = (state_211596[9]);var inst_211560 = cljs.core.chunked_seq_QMARK_.call(null,inst_211558);var state_211596__$1 = state_211596;if(inst_211560)
{var statearr_211600_211681 = state_211596__$1;(statearr_211600_211681[1] = 36);
} else
{var statearr_211601_211682 = state_211596__$1;(statearr_211601_211682[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 2))
{var state_211596__$1 = state_211596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_211596__$1,4,ch);
} else
{if((state_val_211597 === 34))
{var state_211596__$1 = state_211596;var statearr_211602_211683 = state_211596__$1;(statearr_211602_211683[2] = null);
(statearr_211602_211683[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 3))
{var inst_211594 = (state_211596[2]);var state_211596__$1 = state_211596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_211596__$1,inst_211594);
} else
{if((state_val_211597 === 35))
{var inst_211583 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211603_211684 = state_211596__$1;(statearr_211603_211684[2] = inst_211583);
(statearr_211603_211684[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 4))
{var inst_211469 = (state_211596[8]);var inst_211469__$1 = (state_211596[2]);var inst_211470 = (inst_211469__$1 == null);var state_211596__$1 = (function (){var statearr_211604 = state_211596;(statearr_211604[8] = inst_211469__$1);
return statearr_211604;
})();if(cljs.core.truth_(inst_211470))
{var statearr_211605_211685 = state_211596__$1;(statearr_211605_211685[1] = 5);
} else
{var statearr_211606_211686 = state_211596__$1;(statearr_211606_211686[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 36))
{var inst_211558 = (state_211596[9]);var inst_211562 = cljs.core.chunk_first.call(null,inst_211558);var inst_211563 = cljs.core.chunk_rest.call(null,inst_211558);var inst_211564 = cljs.core.count.call(null,inst_211562);var inst_211537 = inst_211563;var inst_211538 = inst_211562;var inst_211539 = inst_211564;var inst_211540 = 0;var state_211596__$1 = (function (){var statearr_211607 = state_211596;(statearr_211607[10] = inst_211540);
(statearr_211607[11] = inst_211538);
(statearr_211607[12] = inst_211537);
(statearr_211607[13] = inst_211539);
return statearr_211607;
})();var statearr_211608_211687 = state_211596__$1;(statearr_211608_211687[2] = null);
(statearr_211608_211687[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 5))
{var inst_211476 = cljs.core.deref.call(null,cs);var inst_211477 = cljs.core.seq.call(null,inst_211476);var inst_211478 = inst_211477;var inst_211479 = null;var inst_211480 = 0;var inst_211481 = 0;var state_211596__$1 = (function (){var statearr_211609 = state_211596;(statearr_211609[14] = inst_211481);
(statearr_211609[15] = inst_211480);
(statearr_211609[16] = inst_211478);
(statearr_211609[17] = inst_211479);
return statearr_211609;
})();var statearr_211610_211688 = state_211596__$1;(statearr_211610_211688[2] = null);
(statearr_211610_211688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 37))
{var inst_211558 = (state_211596[9]);var inst_211567 = cljs.core.first.call(null,inst_211558);var state_211596__$1 = (function (){var statearr_211611 = state_211596;(statearr_211611[18] = inst_211567);
return statearr_211611;
})();var statearr_211612_211689 = state_211596__$1;(statearr_211612_211689[2] = null);
(statearr_211612_211689[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 6))
{var inst_211528 = cljs.core.deref.call(null,cs);var inst_211529 = cljs.core.keys.call(null,inst_211528);var inst_211530 = cljs.core.count.call(null,inst_211529);var inst_211531 = cljs.core.reset_BANG_.call(null,dctr,inst_211530);var inst_211536 = cljs.core.seq.call(null,inst_211529);var inst_211537 = inst_211536;var inst_211538 = null;var inst_211539 = 0;var inst_211540 = 0;var state_211596__$1 = (function (){var statearr_211613 = state_211596;(statearr_211613[10] = inst_211540);
(statearr_211613[11] = inst_211538);
(statearr_211613[12] = inst_211537);
(statearr_211613[13] = inst_211539);
(statearr_211613[19] = inst_211531);
return statearr_211613;
})();var statearr_211614_211690 = state_211596__$1;(statearr_211614_211690[2] = null);
(statearr_211614_211690[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 38))
{var inst_211580 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211615_211691 = state_211596__$1;(statearr_211615_211691[2] = inst_211580);
(statearr_211615_211691[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 7))
{var inst_211592 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211616_211692 = state_211596__$1;(statearr_211616_211692[2] = inst_211592);
(statearr_211616_211692[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 39))
{var inst_211558 = (state_211596[9]);var inst_211576 = (state_211596[2]);var inst_211577 = cljs.core.next.call(null,inst_211558);var inst_211537 = inst_211577;var inst_211538 = null;var inst_211539 = 0;var inst_211540 = 0;var state_211596__$1 = (function (){var statearr_211617 = state_211596;(statearr_211617[10] = inst_211540);
(statearr_211617[11] = inst_211538);
(statearr_211617[12] = inst_211537);
(statearr_211617[13] = inst_211539);
(statearr_211617[20] = inst_211576);
return statearr_211617;
})();var statearr_211618_211693 = state_211596__$1;(statearr_211618_211693[2] = null);
(statearr_211618_211693[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 8))
{var inst_211481 = (state_211596[14]);var inst_211480 = (state_211596[15]);var inst_211483 = (inst_211481 < inst_211480);var inst_211484 = inst_211483;var state_211596__$1 = state_211596;if(cljs.core.truth_(inst_211484))
{var statearr_211619_211694 = state_211596__$1;(statearr_211619_211694[1] = 10);
} else
{var statearr_211620_211695 = state_211596__$1;(statearr_211620_211695[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 40))
{var inst_211567 = (state_211596[18]);var inst_211568 = (state_211596[2]);var inst_211569 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_211570 = cljs.core.async.untap_STAR_.call(null,m,inst_211567);var state_211596__$1 = (function (){var statearr_211621 = state_211596;(statearr_211621[21] = inst_211568);
(statearr_211621[22] = inst_211569);
return statearr_211621;
})();var statearr_211622_211696 = state_211596__$1;(statearr_211622_211696[2] = inst_211570);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211596__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 9))
{var inst_211526 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211623_211697 = state_211596__$1;(statearr_211623_211697[2] = inst_211526);
(statearr_211623_211697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 41))
{var inst_211469 = (state_211596[8]);var inst_211567 = (state_211596[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_211596,40,Object,null,39);var inst_211574 = cljs.core.async.put_BANG_.call(null,inst_211567,inst_211469,done);var state_211596__$1 = state_211596;var statearr_211624_211698 = state_211596__$1;(statearr_211624_211698[2] = inst_211574);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211596__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 10))
{var inst_211481 = (state_211596[14]);var inst_211479 = (state_211596[17]);var inst_211487 = cljs.core._nth.call(null,inst_211479,inst_211481);var inst_211488 = cljs.core.nth.call(null,inst_211487,0,null);var inst_211489 = cljs.core.nth.call(null,inst_211487,1,null);var state_211596__$1 = (function (){var statearr_211625 = state_211596;(statearr_211625[23] = inst_211488);
return statearr_211625;
})();if(cljs.core.truth_(inst_211489))
{var statearr_211626_211699 = state_211596__$1;(statearr_211626_211699[1] = 13);
} else
{var statearr_211627_211700 = state_211596__$1;(statearr_211627_211700[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 42))
{var inst_211589 = (state_211596[2]);var state_211596__$1 = (function (){var statearr_211628 = state_211596;(statearr_211628[24] = inst_211589);
return statearr_211628;
})();var statearr_211629_211701 = state_211596__$1;(statearr_211629_211701[2] = null);
(statearr_211629_211701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 11))
{var inst_211498 = (state_211596[25]);var inst_211478 = (state_211596[16]);var inst_211498__$1 = cljs.core.seq.call(null,inst_211478);var state_211596__$1 = (function (){var statearr_211630 = state_211596;(statearr_211630[25] = inst_211498__$1);
return statearr_211630;
})();if(inst_211498__$1)
{var statearr_211631_211702 = state_211596__$1;(statearr_211631_211702[1] = 16);
} else
{var statearr_211632_211703 = state_211596__$1;(statearr_211632_211703[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 12))
{var inst_211524 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211633_211704 = state_211596__$1;(statearr_211633_211704[2] = inst_211524);
(statearr_211633_211704[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 13))
{var inst_211488 = (state_211596[23]);var inst_211491 = cljs.core.async.close_BANG_.call(null,inst_211488);var state_211596__$1 = state_211596;var statearr_211637_211705 = state_211596__$1;(statearr_211637_211705[2] = inst_211491);
(statearr_211637_211705[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 14))
{var state_211596__$1 = state_211596;var statearr_211638_211706 = state_211596__$1;(statearr_211638_211706[2] = null);
(statearr_211638_211706[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 15))
{var inst_211481 = (state_211596[14]);var inst_211480 = (state_211596[15]);var inst_211478 = (state_211596[16]);var inst_211479 = (state_211596[17]);var inst_211494 = (state_211596[2]);var inst_211495 = (inst_211481 + 1);var tmp211634 = inst_211480;var tmp211635 = inst_211478;var tmp211636 = inst_211479;var inst_211478__$1 = tmp211635;var inst_211479__$1 = tmp211636;var inst_211480__$1 = tmp211634;var inst_211481__$1 = inst_211495;var state_211596__$1 = (function (){var statearr_211639 = state_211596;(statearr_211639[14] = inst_211481__$1);
(statearr_211639[15] = inst_211480__$1);
(statearr_211639[26] = inst_211494);
(statearr_211639[16] = inst_211478__$1);
(statearr_211639[17] = inst_211479__$1);
return statearr_211639;
})();var statearr_211640_211707 = state_211596__$1;(statearr_211640_211707[2] = null);
(statearr_211640_211707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 16))
{var inst_211498 = (state_211596[25]);var inst_211500 = cljs.core.chunked_seq_QMARK_.call(null,inst_211498);var state_211596__$1 = state_211596;if(inst_211500)
{var statearr_211641_211708 = state_211596__$1;(statearr_211641_211708[1] = 19);
} else
{var statearr_211642_211709 = state_211596__$1;(statearr_211642_211709[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 17))
{var state_211596__$1 = state_211596;var statearr_211643_211710 = state_211596__$1;(statearr_211643_211710[2] = null);
(statearr_211643_211710[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 18))
{var inst_211522 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211644_211711 = state_211596__$1;(statearr_211644_211711[2] = inst_211522);
(statearr_211644_211711[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 19))
{var inst_211498 = (state_211596[25]);var inst_211502 = cljs.core.chunk_first.call(null,inst_211498);var inst_211503 = cljs.core.chunk_rest.call(null,inst_211498);var inst_211504 = cljs.core.count.call(null,inst_211502);var inst_211478 = inst_211503;var inst_211479 = inst_211502;var inst_211480 = inst_211504;var inst_211481 = 0;var state_211596__$1 = (function (){var statearr_211645 = state_211596;(statearr_211645[14] = inst_211481);
(statearr_211645[15] = inst_211480);
(statearr_211645[16] = inst_211478);
(statearr_211645[17] = inst_211479);
return statearr_211645;
})();var statearr_211646_211712 = state_211596__$1;(statearr_211646_211712[2] = null);
(statearr_211646_211712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 20))
{var inst_211498 = (state_211596[25]);var inst_211508 = cljs.core.first.call(null,inst_211498);var inst_211509 = cljs.core.nth.call(null,inst_211508,0,null);var inst_211510 = cljs.core.nth.call(null,inst_211508,1,null);var state_211596__$1 = (function (){var statearr_211647 = state_211596;(statearr_211647[27] = inst_211509);
return statearr_211647;
})();if(cljs.core.truth_(inst_211510))
{var statearr_211648_211713 = state_211596__$1;(statearr_211648_211713[1] = 22);
} else
{var statearr_211649_211714 = state_211596__$1;(statearr_211649_211714[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 21))
{var inst_211519 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211650_211715 = state_211596__$1;(statearr_211650_211715[2] = inst_211519);
(statearr_211650_211715[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 22))
{var inst_211509 = (state_211596[27]);var inst_211512 = cljs.core.async.close_BANG_.call(null,inst_211509);var state_211596__$1 = state_211596;var statearr_211651_211716 = state_211596__$1;(statearr_211651_211716[2] = inst_211512);
(statearr_211651_211716[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 23))
{var state_211596__$1 = state_211596;var statearr_211652_211717 = state_211596__$1;(statearr_211652_211717[2] = null);
(statearr_211652_211717[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 24))
{var inst_211498 = (state_211596[25]);var inst_211515 = (state_211596[2]);var inst_211516 = cljs.core.next.call(null,inst_211498);var inst_211478 = inst_211516;var inst_211479 = null;var inst_211480 = 0;var inst_211481 = 0;var state_211596__$1 = (function (){var statearr_211653 = state_211596;(statearr_211653[28] = inst_211515);
(statearr_211653[14] = inst_211481);
(statearr_211653[15] = inst_211480);
(statearr_211653[16] = inst_211478);
(statearr_211653[17] = inst_211479);
return statearr_211653;
})();var statearr_211654_211718 = state_211596__$1;(statearr_211654_211718[2] = null);
(statearr_211654_211718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 25))
{var inst_211540 = (state_211596[10]);var inst_211539 = (state_211596[13]);var inst_211542 = (inst_211540 < inst_211539);var inst_211543 = inst_211542;var state_211596__$1 = state_211596;if(cljs.core.truth_(inst_211543))
{var statearr_211655_211719 = state_211596__$1;(statearr_211655_211719[1] = 27);
} else
{var statearr_211656_211720 = state_211596__$1;(statearr_211656_211720[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 26))
{var inst_211587 = (state_211596[2]);var state_211596__$1 = (function (){var statearr_211657 = state_211596;(statearr_211657[29] = inst_211587);
return statearr_211657;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_211596__$1,42,dchan);
} else
{if((state_val_211597 === 27))
{var inst_211540 = (state_211596[10]);var inst_211538 = (state_211596[11]);var inst_211545 = cljs.core._nth.call(null,inst_211538,inst_211540);var state_211596__$1 = (function (){var statearr_211658 = state_211596;(statearr_211658[7] = inst_211545);
return statearr_211658;
})();var statearr_211659_211721 = state_211596__$1;(statearr_211659_211721[2] = null);
(statearr_211659_211721[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 28))
{var inst_211537 = (state_211596[12]);var inst_211558 = (state_211596[9]);var inst_211558__$1 = cljs.core.seq.call(null,inst_211537);var state_211596__$1 = (function (){var statearr_211663 = state_211596;(statearr_211663[9] = inst_211558__$1);
return statearr_211663;
})();if(inst_211558__$1)
{var statearr_211664_211722 = state_211596__$1;(statearr_211664_211722[1] = 33);
} else
{var statearr_211665_211723 = state_211596__$1;(statearr_211665_211723[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 29))
{var inst_211585 = (state_211596[2]);var state_211596__$1 = state_211596;var statearr_211666_211724 = state_211596__$1;(statearr_211666_211724[2] = inst_211585);
(statearr_211666_211724[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 30))
{var inst_211540 = (state_211596[10]);var inst_211538 = (state_211596[11]);var inst_211537 = (state_211596[12]);var inst_211539 = (state_211596[13]);var inst_211554 = (state_211596[2]);var inst_211555 = (inst_211540 + 1);var tmp211660 = inst_211538;var tmp211661 = inst_211537;var tmp211662 = inst_211539;var inst_211537__$1 = tmp211661;var inst_211538__$1 = tmp211660;var inst_211539__$1 = tmp211662;var inst_211540__$1 = inst_211555;var state_211596__$1 = (function (){var statearr_211667 = state_211596;(statearr_211667[30] = inst_211554);
(statearr_211667[10] = inst_211540__$1);
(statearr_211667[11] = inst_211538__$1);
(statearr_211667[12] = inst_211537__$1);
(statearr_211667[13] = inst_211539__$1);
return statearr_211667;
})();var statearr_211668_211725 = state_211596__$1;(statearr_211668_211725[2] = null);
(statearr_211668_211725[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211597 === 31))
{var inst_211545 = (state_211596[7]);var inst_211546 = (state_211596[2]);var inst_211547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_211548 = cljs.core.async.untap_STAR_.call(null,m,inst_211545);var state_211596__$1 = (function (){var statearr_211669 = state_211596;(statearr_211669[31] = inst_211546);
(statearr_211669[32] = inst_211547);
return statearr_211669;
})();var statearr_211670_211726 = state_211596__$1;(statearr_211670_211726[2] = inst_211548);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211596__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_211674 = (new Array(33));(statearr_211674[0] = state_machine__10214__auto__);
(statearr_211674[1] = 1);
return statearr_211674;
});
var state_machine__10214__auto____1 = (function (state_211596){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_211596);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e211675){if((e211675 instanceof Object))
{var ex__10217__auto__ = e211675;var statearr_211676_211727 = state_211596;(statearr_211676_211727[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e211675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__211728 = state_211596;
state_211596 = G__211728;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_211596){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_211596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_211677 = f__10284__auto__.call(null);(statearr_211677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___211678);
return statearr_211677;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj211730 = {};return obj211730;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t211840 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t211840 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta211841){
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
this.meta211841 = meta211841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t211840.cljs$lang$type = true;
cljs.core.async.t211840.cljs$lang$ctorStr = "cljs.core.async/t211840";
cljs.core.async.t211840.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t211840");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t211840.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_211842){var self__ = this;
var _211842__$1 = this;return self__.meta211841;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t211840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_211842,meta211841__$1){var self__ = this;
var _211842__$1 = this;return (new cljs.core.async.t211840(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta211841__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t211840 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t211840(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta211841){return (new cljs.core.async.t211840(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta211841));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t211840(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___211949 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_211907){var state_val_211908 = (state_211907[1]);if((state_val_211908 === 1))
{var inst_211846 = (state_211907[7]);var inst_211846__$1 = calc_state.call(null);var inst_211847 = cljs.core.seq_QMARK_.call(null,inst_211846__$1);var state_211907__$1 = (function (){var statearr_211909 = state_211907;(statearr_211909[7] = inst_211846__$1);
return statearr_211909;
})();if(inst_211847)
{var statearr_211910_211950 = state_211907__$1;(statearr_211910_211950[1] = 2);
} else
{var statearr_211911_211951 = state_211907__$1;(statearr_211911_211951[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 2))
{var inst_211846 = (state_211907[7]);var inst_211849 = cljs.core.apply.call(null,cljs.core.hash_map,inst_211846);var state_211907__$1 = state_211907;var statearr_211912_211952 = state_211907__$1;(statearr_211912_211952[2] = inst_211849);
(statearr_211912_211952[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 3))
{var inst_211846 = (state_211907[7]);var state_211907__$1 = state_211907;var statearr_211913_211953 = state_211907__$1;(statearr_211913_211953[2] = inst_211846);
(statearr_211913_211953[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 4))
{var inst_211846 = (state_211907[7]);var inst_211852 = (state_211907[2]);var inst_211853 = cljs.core.get.call(null,inst_211852,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_211854 = cljs.core.get.call(null,inst_211852,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_211855 = cljs.core.get.call(null,inst_211852,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_211856 = inst_211846;var state_211907__$1 = (function (){var statearr_211914 = state_211907;(statearr_211914[8] = inst_211853);
(statearr_211914[9] = inst_211854);
(statearr_211914[10] = inst_211855);
(statearr_211914[11] = inst_211856);
return statearr_211914;
})();var statearr_211915_211954 = state_211907__$1;(statearr_211915_211954[2] = null);
(statearr_211915_211954[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 5))
{var inst_211856 = (state_211907[11]);var inst_211859 = cljs.core.seq_QMARK_.call(null,inst_211856);var state_211907__$1 = state_211907;if(inst_211859)
{var statearr_211916_211955 = state_211907__$1;(statearr_211916_211955[1] = 7);
} else
{var statearr_211917_211956 = state_211907__$1;(statearr_211917_211956[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 6))
{var inst_211905 = (state_211907[2]);var state_211907__$1 = state_211907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_211907__$1,inst_211905);
} else
{if((state_val_211908 === 7))
{var inst_211856 = (state_211907[11]);var inst_211861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_211856);var state_211907__$1 = state_211907;var statearr_211918_211957 = state_211907__$1;(statearr_211918_211957[2] = inst_211861);
(statearr_211918_211957[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 8))
{var inst_211856 = (state_211907[11]);var state_211907__$1 = state_211907;var statearr_211919_211958 = state_211907__$1;(statearr_211919_211958[2] = inst_211856);
(statearr_211919_211958[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 9))
{var inst_211864 = (state_211907[12]);var inst_211864__$1 = (state_211907[2]);var inst_211865 = cljs.core.get.call(null,inst_211864__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_211866 = cljs.core.get.call(null,inst_211864__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_211867 = cljs.core.get.call(null,inst_211864__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_211907__$1 = (function (){var statearr_211920 = state_211907;(statearr_211920[12] = inst_211864__$1);
(statearr_211920[13] = inst_211866);
(statearr_211920[14] = inst_211867);
return statearr_211920;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_211907__$1,10,inst_211865);
} else
{if((state_val_211908 === 10))
{var inst_211872 = (state_211907[15]);var inst_211871 = (state_211907[16]);var inst_211870 = (state_211907[2]);var inst_211871__$1 = cljs.core.nth.call(null,inst_211870,0,null);var inst_211872__$1 = cljs.core.nth.call(null,inst_211870,1,null);var inst_211873 = (inst_211871__$1 == null);var inst_211874 = cljs.core._EQ_.call(null,inst_211872__$1,change);var inst_211875 = (inst_211873) || (inst_211874);var state_211907__$1 = (function (){var statearr_211921 = state_211907;(statearr_211921[15] = inst_211872__$1);
(statearr_211921[16] = inst_211871__$1);
return statearr_211921;
})();if(cljs.core.truth_(inst_211875))
{var statearr_211922_211959 = state_211907__$1;(statearr_211922_211959[1] = 11);
} else
{var statearr_211923_211960 = state_211907__$1;(statearr_211923_211960[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 11))
{var inst_211871 = (state_211907[16]);var inst_211877 = (inst_211871 == null);var state_211907__$1 = state_211907;if(cljs.core.truth_(inst_211877))
{var statearr_211924_211961 = state_211907__$1;(statearr_211924_211961[1] = 14);
} else
{var statearr_211925_211962 = state_211907__$1;(statearr_211925_211962[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 12))
{var inst_211872 = (state_211907[15]);var inst_211886 = (state_211907[17]);var inst_211867 = (state_211907[14]);var inst_211886__$1 = inst_211867.call(null,inst_211872);var state_211907__$1 = (function (){var statearr_211926 = state_211907;(statearr_211926[17] = inst_211886__$1);
return statearr_211926;
})();if(cljs.core.truth_(inst_211886__$1))
{var statearr_211927_211963 = state_211907__$1;(statearr_211927_211963[1] = 17);
} else
{var statearr_211928_211964 = state_211907__$1;(statearr_211928_211964[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 13))
{var inst_211903 = (state_211907[2]);var state_211907__$1 = state_211907;var statearr_211929_211965 = state_211907__$1;(statearr_211929_211965[2] = inst_211903);
(statearr_211929_211965[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 14))
{var inst_211872 = (state_211907[15]);var inst_211879 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_211872);var state_211907__$1 = state_211907;var statearr_211930_211966 = state_211907__$1;(statearr_211930_211966[2] = inst_211879);
(statearr_211930_211966[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 15))
{var state_211907__$1 = state_211907;var statearr_211931_211967 = state_211907__$1;(statearr_211931_211967[2] = null);
(statearr_211931_211967[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 16))
{var inst_211882 = (state_211907[2]);var inst_211883 = calc_state.call(null);var inst_211856 = inst_211883;var state_211907__$1 = (function (){var statearr_211932 = state_211907;(statearr_211932[11] = inst_211856);
(statearr_211932[18] = inst_211882);
return statearr_211932;
})();var statearr_211933_211968 = state_211907__$1;(statearr_211933_211968[2] = null);
(statearr_211933_211968[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 17))
{var inst_211886 = (state_211907[17]);var state_211907__$1 = state_211907;var statearr_211934_211969 = state_211907__$1;(statearr_211934_211969[2] = inst_211886);
(statearr_211934_211969[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 18))
{var inst_211872 = (state_211907[15]);var inst_211866 = (state_211907[13]);var inst_211867 = (state_211907[14]);var inst_211889 = cljs.core.empty_QMARK_.call(null,inst_211867);var inst_211890 = inst_211866.call(null,inst_211872);var inst_211891 = cljs.core.not.call(null,inst_211890);var inst_211892 = (inst_211889) && (inst_211891);var state_211907__$1 = state_211907;var statearr_211935_211970 = state_211907__$1;(statearr_211935_211970[2] = inst_211892);
(statearr_211935_211970[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 19))
{var inst_211894 = (state_211907[2]);var state_211907__$1 = state_211907;if(cljs.core.truth_(inst_211894))
{var statearr_211936_211971 = state_211907__$1;(statearr_211936_211971[1] = 20);
} else
{var statearr_211937_211972 = state_211907__$1;(statearr_211937_211972[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 20))
{var inst_211871 = (state_211907[16]);var state_211907__$1 = state_211907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_211907__$1,23,out,inst_211871);
} else
{if((state_val_211908 === 21))
{var state_211907__$1 = state_211907;var statearr_211938_211973 = state_211907__$1;(statearr_211938_211973[2] = null);
(statearr_211938_211973[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 22))
{var inst_211864 = (state_211907[12]);var inst_211900 = (state_211907[2]);var inst_211856 = inst_211864;var state_211907__$1 = (function (){var statearr_211939 = state_211907;(statearr_211939[11] = inst_211856);
(statearr_211939[19] = inst_211900);
return statearr_211939;
})();var statearr_211940_211974 = state_211907__$1;(statearr_211940_211974[2] = null);
(statearr_211940_211974[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_211908 === 23))
{var inst_211897 = (state_211907[2]);var state_211907__$1 = state_211907;var statearr_211941_211975 = state_211907__$1;(statearr_211941_211975[2] = inst_211897);
(statearr_211941_211975[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_211945 = (new Array(20));(statearr_211945[0] = state_machine__10214__auto__);
(statearr_211945[1] = 1);
return statearr_211945;
});
var state_machine__10214__auto____1 = (function (state_211907){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_211907);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e211946){if((e211946 instanceof Object))
{var ex__10217__auto__ = e211946;var statearr_211947_211976 = state_211907;(statearr_211947_211976[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_211907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e211946;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__211977 = state_211907;
state_211907 = G__211977;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_211907){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_211907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_211948 = f__10284__auto__.call(null);(statearr_211948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___211949);
return statearr_211948;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj211979 = {};return obj211979;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__7730__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7730__auto__,mults){
return (function (p1__211980_SHARP_){if(cljs.core.truth_(p1__211980_SHARP_.call(null,topic)))
{return p1__211980_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__211980_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t212105 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t212105 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta212106){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta212106 = meta212106;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t212105.cljs$lang$type = true;
cljs.core.async.t212105.cljs$lang$ctorStr = "cljs.core.async/t212105";
cljs.core.async.t212105.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t212105");
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t212105.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t212105.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_212107){var self__ = this;
var _212107__$1 = this;return self__.meta212106;
});})(mults,ensure_mult))
;
cljs.core.async.t212105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_212107,meta212106__$1){var self__ = this;
var _212107__$1 = this;return (new cljs.core.async.t212105(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta212106__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t212105 = ((function (mults,ensure_mult){
return (function __GT_t212105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta212106){return (new cljs.core.async.t212105(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta212106));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t212105(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___212229 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212181){var state_val_212182 = (state_212181[1]);if((state_val_212182 === 1))
{var state_212181__$1 = state_212181;var statearr_212183_212230 = state_212181__$1;(statearr_212183_212230[2] = null);
(statearr_212183_212230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 2))
{var state_212181__$1 = state_212181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212181__$1,4,ch);
} else
{if((state_val_212182 === 3))
{var inst_212179 = (state_212181[2]);var state_212181__$1 = state_212181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212181__$1,inst_212179);
} else
{if((state_val_212182 === 4))
{var inst_212110 = (state_212181[7]);var inst_212110__$1 = (state_212181[2]);var inst_212111 = (inst_212110__$1 == null);var state_212181__$1 = (function (){var statearr_212184 = state_212181;(statearr_212184[7] = inst_212110__$1);
return statearr_212184;
})();if(cljs.core.truth_(inst_212111))
{var statearr_212185_212231 = state_212181__$1;(statearr_212185_212231[1] = 5);
} else
{var statearr_212186_212232 = state_212181__$1;(statearr_212186_212232[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 5))
{var inst_212117 = cljs.core.deref.call(null,mults);var inst_212118 = cljs.core.vals.call(null,inst_212117);var inst_212119 = cljs.core.seq.call(null,inst_212118);var inst_212120 = inst_212119;var inst_212121 = null;var inst_212122 = 0;var inst_212123 = 0;var state_212181__$1 = (function (){var statearr_212187 = state_212181;(statearr_212187[8] = inst_212123);
(statearr_212187[9] = inst_212121);
(statearr_212187[10] = inst_212122);
(statearr_212187[11] = inst_212120);
return statearr_212187;
})();var statearr_212188_212233 = state_212181__$1;(statearr_212188_212233[2] = null);
(statearr_212188_212233[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 6))
{var inst_212110 = (state_212181[7]);var inst_212160 = (state_212181[12]);var inst_212158 = (state_212181[13]);var inst_212158__$1 = topic_fn.call(null,inst_212110);var inst_212159 = cljs.core.deref.call(null,mults);var inst_212160__$1 = cljs.core.get.call(null,inst_212159,inst_212158__$1);var state_212181__$1 = (function (){var statearr_212189 = state_212181;(statearr_212189[12] = inst_212160__$1);
(statearr_212189[13] = inst_212158__$1);
return statearr_212189;
})();if(cljs.core.truth_(inst_212160__$1))
{var statearr_212190_212234 = state_212181__$1;(statearr_212190_212234[1] = 19);
} else
{var statearr_212191_212235 = state_212181__$1;(statearr_212191_212235[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 7))
{var inst_212177 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212192_212236 = state_212181__$1;(statearr_212192_212236[2] = inst_212177);
(statearr_212192_212236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 8))
{var inst_212123 = (state_212181[8]);var inst_212122 = (state_212181[10]);var inst_212125 = (inst_212123 < inst_212122);var inst_212126 = inst_212125;var state_212181__$1 = state_212181;if(cljs.core.truth_(inst_212126))
{var statearr_212196_212237 = state_212181__$1;(statearr_212196_212237[1] = 10);
} else
{var statearr_212197_212238 = state_212181__$1;(statearr_212197_212238[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 9))
{var inst_212156 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212198_212239 = state_212181__$1;(statearr_212198_212239[2] = inst_212156);
(statearr_212198_212239[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 10))
{var inst_212123 = (state_212181[8]);var inst_212121 = (state_212181[9]);var inst_212122 = (state_212181[10]);var inst_212120 = (state_212181[11]);var inst_212128 = cljs.core._nth.call(null,inst_212121,inst_212123);var inst_212129 = cljs.core.async.muxch_STAR_.call(null,inst_212128);var inst_212130 = cljs.core.async.close_BANG_.call(null,inst_212129);var inst_212131 = (inst_212123 + 1);var tmp212193 = inst_212121;var tmp212194 = inst_212122;var tmp212195 = inst_212120;var inst_212120__$1 = tmp212195;var inst_212121__$1 = tmp212193;var inst_212122__$1 = tmp212194;var inst_212123__$1 = inst_212131;var state_212181__$1 = (function (){var statearr_212199 = state_212181;(statearr_212199[8] = inst_212123__$1);
(statearr_212199[9] = inst_212121__$1);
(statearr_212199[10] = inst_212122__$1);
(statearr_212199[11] = inst_212120__$1);
(statearr_212199[14] = inst_212130);
return statearr_212199;
})();var statearr_212200_212240 = state_212181__$1;(statearr_212200_212240[2] = null);
(statearr_212200_212240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 11))
{var inst_212120 = (state_212181[11]);var inst_212134 = (state_212181[15]);var inst_212134__$1 = cljs.core.seq.call(null,inst_212120);var state_212181__$1 = (function (){var statearr_212201 = state_212181;(statearr_212201[15] = inst_212134__$1);
return statearr_212201;
})();if(inst_212134__$1)
{var statearr_212202_212241 = state_212181__$1;(statearr_212202_212241[1] = 13);
} else
{var statearr_212203_212242 = state_212181__$1;(statearr_212203_212242[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 12))
{var inst_212154 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212204_212243 = state_212181__$1;(statearr_212204_212243[2] = inst_212154);
(statearr_212204_212243[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 13))
{var inst_212134 = (state_212181[15]);var inst_212136 = cljs.core.chunked_seq_QMARK_.call(null,inst_212134);var state_212181__$1 = state_212181;if(inst_212136)
{var statearr_212205_212244 = state_212181__$1;(statearr_212205_212244[1] = 16);
} else
{var statearr_212206_212245 = state_212181__$1;(statearr_212206_212245[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 14))
{var state_212181__$1 = state_212181;var statearr_212207_212246 = state_212181__$1;(statearr_212207_212246[2] = null);
(statearr_212207_212246[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 15))
{var inst_212152 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212208_212247 = state_212181__$1;(statearr_212208_212247[2] = inst_212152);
(statearr_212208_212247[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 16))
{var inst_212134 = (state_212181[15]);var inst_212138 = cljs.core.chunk_first.call(null,inst_212134);var inst_212139 = cljs.core.chunk_rest.call(null,inst_212134);var inst_212140 = cljs.core.count.call(null,inst_212138);var inst_212120 = inst_212139;var inst_212121 = inst_212138;var inst_212122 = inst_212140;var inst_212123 = 0;var state_212181__$1 = (function (){var statearr_212209 = state_212181;(statearr_212209[8] = inst_212123);
(statearr_212209[9] = inst_212121);
(statearr_212209[10] = inst_212122);
(statearr_212209[11] = inst_212120);
return statearr_212209;
})();var statearr_212210_212248 = state_212181__$1;(statearr_212210_212248[2] = null);
(statearr_212210_212248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 17))
{var inst_212134 = (state_212181[15]);var inst_212143 = cljs.core.first.call(null,inst_212134);var inst_212144 = cljs.core.async.muxch_STAR_.call(null,inst_212143);var inst_212145 = cljs.core.async.close_BANG_.call(null,inst_212144);var inst_212146 = cljs.core.next.call(null,inst_212134);var inst_212120 = inst_212146;var inst_212121 = null;var inst_212122 = 0;var inst_212123 = 0;var state_212181__$1 = (function (){var statearr_212211 = state_212181;(statearr_212211[8] = inst_212123);
(statearr_212211[9] = inst_212121);
(statearr_212211[10] = inst_212122);
(statearr_212211[11] = inst_212120);
(statearr_212211[16] = inst_212145);
return statearr_212211;
})();var statearr_212212_212249 = state_212181__$1;(statearr_212212_212249[2] = null);
(statearr_212212_212249[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 18))
{var inst_212149 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212213_212250 = state_212181__$1;(statearr_212213_212250[2] = inst_212149);
(statearr_212213_212250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 19))
{var state_212181__$1 = state_212181;var statearr_212214_212251 = state_212181__$1;(statearr_212214_212251[2] = null);
(statearr_212214_212251[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 20))
{var state_212181__$1 = state_212181;var statearr_212215_212252 = state_212181__$1;(statearr_212215_212252[2] = null);
(statearr_212215_212252[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 21))
{var inst_212174 = (state_212181[2]);var state_212181__$1 = (function (){var statearr_212216 = state_212181;(statearr_212216[17] = inst_212174);
return statearr_212216;
})();var statearr_212217_212253 = state_212181__$1;(statearr_212217_212253[2] = null);
(statearr_212217_212253[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 22))
{var inst_212171 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212218_212254 = state_212181__$1;(statearr_212218_212254[2] = inst_212171);
(statearr_212218_212254[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 23))
{var inst_212158 = (state_212181[13]);var inst_212162 = (state_212181[2]);var inst_212163 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_212158);var state_212181__$1 = (function (){var statearr_212219 = state_212181;(statearr_212219[18] = inst_212162);
return statearr_212219;
})();var statearr_212220_212255 = state_212181__$1;(statearr_212220_212255[2] = inst_212163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212181__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212182 === 24))
{var inst_212110 = (state_212181[7]);var inst_212160 = (state_212181[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_212181,23,Object,null,22);var inst_212167 = cljs.core.async.muxch_STAR_.call(null,inst_212160);var state_212181__$1 = state_212181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212181__$1,25,inst_212167,inst_212110);
} else
{if((state_val_212182 === 25))
{var inst_212169 = (state_212181[2]);var state_212181__$1 = state_212181;var statearr_212221_212256 = state_212181__$1;(statearr_212221_212256[2] = inst_212169);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212181__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212225 = (new Array(19));(statearr_212225[0] = state_machine__10214__auto__);
(statearr_212225[1] = 1);
return statearr_212225;
});
var state_machine__10214__auto____1 = (function (state_212181){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212181);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212226){if((e212226 instanceof Object))
{var ex__10217__auto__ = e212226;var statearr_212227_212257 = state_212181;(statearr_212227_212257[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212226;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212258 = state_212181;
state_212181 = G__212258;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212181){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212228 = f__10284__auto__.call(null);(statearr_212228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212229);
return statearr_212228;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10283__auto___212395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212365){var state_val_212366 = (state_212365[1]);if((state_val_212366 === 1))
{var state_212365__$1 = state_212365;var statearr_212367_212396 = state_212365__$1;(statearr_212367_212396[2] = null);
(statearr_212367_212396[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 2))
{var inst_212328 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_212329 = 0;var state_212365__$1 = (function (){var statearr_212368 = state_212365;(statearr_212368[7] = inst_212329);
(statearr_212368[8] = inst_212328);
return statearr_212368;
})();var statearr_212369_212397 = state_212365__$1;(statearr_212369_212397[2] = null);
(statearr_212369_212397[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 3))
{var inst_212363 = (state_212365[2]);var state_212365__$1 = state_212365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212365__$1,inst_212363);
} else
{if((state_val_212366 === 4))
{var inst_212329 = (state_212365[7]);var inst_212331 = (inst_212329 < cnt);var state_212365__$1 = state_212365;if(cljs.core.truth_(inst_212331))
{var statearr_212370_212398 = state_212365__$1;(statearr_212370_212398[1] = 6);
} else
{var statearr_212371_212399 = state_212365__$1;(statearr_212371_212399[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 5))
{var inst_212349 = (state_212365[2]);var state_212365__$1 = (function (){var statearr_212372 = state_212365;(statearr_212372[9] = inst_212349);
return statearr_212372;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212365__$1,12,dchan);
} else
{if((state_val_212366 === 6))
{var state_212365__$1 = state_212365;var statearr_212373_212400 = state_212365__$1;(statearr_212373_212400[2] = null);
(statearr_212373_212400[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 7))
{var state_212365__$1 = state_212365;var statearr_212374_212401 = state_212365__$1;(statearr_212374_212401[2] = null);
(statearr_212374_212401[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 8))
{var inst_212347 = (state_212365[2]);var state_212365__$1 = state_212365;var statearr_212375_212402 = state_212365__$1;(statearr_212375_212402[2] = inst_212347);
(statearr_212375_212402[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 9))
{var inst_212329 = (state_212365[7]);var inst_212342 = (state_212365[2]);var inst_212343 = (inst_212329 + 1);var inst_212329__$1 = inst_212343;var state_212365__$1 = (function (){var statearr_212376 = state_212365;(statearr_212376[7] = inst_212329__$1);
(statearr_212376[10] = inst_212342);
return statearr_212376;
})();var statearr_212377_212403 = state_212365__$1;(statearr_212377_212403[2] = null);
(statearr_212377_212403[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 10))
{var inst_212333 = (state_212365[2]);var inst_212334 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_212365__$1 = (function (){var statearr_212378 = state_212365;(statearr_212378[11] = inst_212333);
return statearr_212378;
})();var statearr_212379_212404 = state_212365__$1;(statearr_212379_212404[2] = inst_212334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212365__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 11))
{var inst_212329 = (state_212365[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_212365,10,Object,null,9);var inst_212338 = chs__$1.call(null,inst_212329);var inst_212339 = done.call(null,inst_212329);var inst_212340 = cljs.core.async.take_BANG_.call(null,inst_212338,inst_212339);var state_212365__$1 = state_212365;var statearr_212380_212405 = state_212365__$1;(statearr_212380_212405[2] = inst_212340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212365__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 12))
{var inst_212351 = (state_212365[12]);var inst_212351__$1 = (state_212365[2]);var inst_212352 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_212351__$1);var state_212365__$1 = (function (){var statearr_212381 = state_212365;(statearr_212381[12] = inst_212351__$1);
return statearr_212381;
})();if(cljs.core.truth_(inst_212352))
{var statearr_212382_212406 = state_212365__$1;(statearr_212382_212406[1] = 13);
} else
{var statearr_212383_212407 = state_212365__$1;(statearr_212383_212407[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 13))
{var inst_212354 = cljs.core.async.close_BANG_.call(null,out);var state_212365__$1 = state_212365;var statearr_212384_212408 = state_212365__$1;(statearr_212384_212408[2] = inst_212354);
(statearr_212384_212408[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 14))
{var inst_212351 = (state_212365[12]);var inst_212356 = cljs.core.apply.call(null,f,inst_212351);var state_212365__$1 = state_212365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212365__$1,16,out,inst_212356);
} else
{if((state_val_212366 === 15))
{var inst_212361 = (state_212365[2]);var state_212365__$1 = state_212365;var statearr_212385_212409 = state_212365__$1;(statearr_212385_212409[2] = inst_212361);
(statearr_212385_212409[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212366 === 16))
{var inst_212358 = (state_212365[2]);var state_212365__$1 = (function (){var statearr_212386 = state_212365;(statearr_212386[13] = inst_212358);
return statearr_212386;
})();var statearr_212387_212410 = state_212365__$1;(statearr_212387_212410[2] = null);
(statearr_212387_212410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212391 = (new Array(14));(statearr_212391[0] = state_machine__10214__auto__);
(statearr_212391[1] = 1);
return statearr_212391;
});
var state_machine__10214__auto____1 = (function (state_212365){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212365);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212392){if((e212392 instanceof Object))
{var ex__10217__auto__ = e212392;var statearr_212393_212411 = state_212365;(statearr_212393_212411[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212412 = state_212365;
state_212365 = G__212412;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212365){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212394 = f__10284__auto__.call(null);(statearr_212394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212395);
return statearr_212394;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___212520 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212496){var state_val_212497 = (state_212496[1]);if((state_val_212497 === 1))
{var inst_212467 = cljs.core.vec.call(null,chs);var inst_212468 = inst_212467;var state_212496__$1 = (function (){var statearr_212498 = state_212496;(statearr_212498[7] = inst_212468);
return statearr_212498;
})();var statearr_212499_212521 = state_212496__$1;(statearr_212499_212521[2] = null);
(statearr_212499_212521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 2))
{var inst_212468 = (state_212496[7]);var inst_212470 = cljs.core.count.call(null,inst_212468);var inst_212471 = (inst_212470 > 0);var state_212496__$1 = state_212496;if(cljs.core.truth_(inst_212471))
{var statearr_212500_212522 = state_212496__$1;(statearr_212500_212522[1] = 4);
} else
{var statearr_212501_212523 = state_212496__$1;(statearr_212501_212523[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 3))
{var inst_212494 = (state_212496[2]);var state_212496__$1 = state_212496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212496__$1,inst_212494);
} else
{if((state_val_212497 === 4))
{var inst_212468 = (state_212496[7]);var state_212496__$1 = state_212496;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_212496__$1,7,inst_212468);
} else
{if((state_val_212497 === 5))
{var inst_212490 = cljs.core.async.close_BANG_.call(null,out);var state_212496__$1 = state_212496;var statearr_212502_212524 = state_212496__$1;(statearr_212502_212524[2] = inst_212490);
(statearr_212502_212524[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 6))
{var inst_212492 = (state_212496[2]);var state_212496__$1 = state_212496;var statearr_212503_212525 = state_212496__$1;(statearr_212503_212525[2] = inst_212492);
(statearr_212503_212525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 7))
{var inst_212476 = (state_212496[8]);var inst_212475 = (state_212496[9]);var inst_212475__$1 = (state_212496[2]);var inst_212476__$1 = cljs.core.nth.call(null,inst_212475__$1,0,null);var inst_212477 = cljs.core.nth.call(null,inst_212475__$1,1,null);var inst_212478 = (inst_212476__$1 == null);var state_212496__$1 = (function (){var statearr_212504 = state_212496;(statearr_212504[10] = inst_212477);
(statearr_212504[8] = inst_212476__$1);
(statearr_212504[9] = inst_212475__$1);
return statearr_212504;
})();if(cljs.core.truth_(inst_212478))
{var statearr_212505_212526 = state_212496__$1;(statearr_212505_212526[1] = 8);
} else
{var statearr_212506_212527 = state_212496__$1;(statearr_212506_212527[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 8))
{var inst_212468 = (state_212496[7]);var inst_212477 = (state_212496[10]);var inst_212476 = (state_212496[8]);var inst_212475 = (state_212496[9]);var inst_212480 = (function (){var c = inst_212477;var v = inst_212476;var vec__212473 = inst_212475;var cs = inst_212468;return ((function (c,v,vec__212473,cs,inst_212468,inst_212477,inst_212476,inst_212475,state_val_212497){
return (function (p1__212413_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__212413_SHARP_);
});
;})(c,v,vec__212473,cs,inst_212468,inst_212477,inst_212476,inst_212475,state_val_212497))
})();var inst_212481 = cljs.core.filterv.call(null,inst_212480,inst_212468);var inst_212468__$1 = inst_212481;var state_212496__$1 = (function (){var statearr_212507 = state_212496;(statearr_212507[7] = inst_212468__$1);
return statearr_212507;
})();var statearr_212508_212528 = state_212496__$1;(statearr_212508_212528[2] = null);
(statearr_212508_212528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 9))
{var inst_212476 = (state_212496[8]);var state_212496__$1 = state_212496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212496__$1,11,out,inst_212476);
} else
{if((state_val_212497 === 10))
{var inst_212488 = (state_212496[2]);var state_212496__$1 = state_212496;var statearr_212510_212529 = state_212496__$1;(statearr_212510_212529[2] = inst_212488);
(statearr_212510_212529[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212497 === 11))
{var inst_212468 = (state_212496[7]);var inst_212485 = (state_212496[2]);var tmp212509 = inst_212468;var inst_212468__$1 = tmp212509;var state_212496__$1 = (function (){var statearr_212511 = state_212496;(statearr_212511[11] = inst_212485);
(statearr_212511[7] = inst_212468__$1);
return statearr_212511;
})();var statearr_212512_212530 = state_212496__$1;(statearr_212512_212530[2] = null);
(statearr_212512_212530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212516 = (new Array(12));(statearr_212516[0] = state_machine__10214__auto__);
(statearr_212516[1] = 1);
return statearr_212516;
});
var state_machine__10214__auto____1 = (function (state_212496){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212496);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212517){if((e212517 instanceof Object))
{var ex__10217__auto__ = e212517;var statearr_212518_212531 = state_212496;(statearr_212518_212531[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212517;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212532 = state_212496;
state_212496 = G__212532;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212496){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212519 = f__10284__auto__.call(null);(statearr_212519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212520);
return statearr_212519;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___212625 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212602){var state_val_212603 = (state_212602[1]);if((state_val_212603 === 1))
{var inst_212579 = 0;var state_212602__$1 = (function (){var statearr_212604 = state_212602;(statearr_212604[7] = inst_212579);
return statearr_212604;
})();var statearr_212605_212626 = state_212602__$1;(statearr_212605_212626[2] = null);
(statearr_212605_212626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 2))
{var inst_212579 = (state_212602[7]);var inst_212581 = (inst_212579 < n);var state_212602__$1 = state_212602;if(cljs.core.truth_(inst_212581))
{var statearr_212606_212627 = state_212602__$1;(statearr_212606_212627[1] = 4);
} else
{var statearr_212607_212628 = state_212602__$1;(statearr_212607_212628[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 3))
{var inst_212599 = (state_212602[2]);var inst_212600 = cljs.core.async.close_BANG_.call(null,out);var state_212602__$1 = (function (){var statearr_212608 = state_212602;(statearr_212608[8] = inst_212599);
return statearr_212608;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212602__$1,inst_212600);
} else
{if((state_val_212603 === 4))
{var state_212602__$1 = state_212602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212602__$1,7,ch);
} else
{if((state_val_212603 === 5))
{var state_212602__$1 = state_212602;var statearr_212609_212629 = state_212602__$1;(statearr_212609_212629[2] = null);
(statearr_212609_212629[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 6))
{var inst_212597 = (state_212602[2]);var state_212602__$1 = state_212602;var statearr_212610_212630 = state_212602__$1;(statearr_212610_212630[2] = inst_212597);
(statearr_212610_212630[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 7))
{var inst_212584 = (state_212602[9]);var inst_212584__$1 = (state_212602[2]);var inst_212585 = (inst_212584__$1 == null);var inst_212586 = cljs.core.not.call(null,inst_212585);var state_212602__$1 = (function (){var statearr_212611 = state_212602;(statearr_212611[9] = inst_212584__$1);
return statearr_212611;
})();if(inst_212586)
{var statearr_212612_212631 = state_212602__$1;(statearr_212612_212631[1] = 8);
} else
{var statearr_212613_212632 = state_212602__$1;(statearr_212613_212632[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 8))
{var inst_212584 = (state_212602[9]);var state_212602__$1 = state_212602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212602__$1,11,out,inst_212584);
} else
{if((state_val_212603 === 9))
{var state_212602__$1 = state_212602;var statearr_212614_212633 = state_212602__$1;(statearr_212614_212633[2] = null);
(statearr_212614_212633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 10))
{var inst_212594 = (state_212602[2]);var state_212602__$1 = state_212602;var statearr_212615_212634 = state_212602__$1;(statearr_212615_212634[2] = inst_212594);
(statearr_212615_212634[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212603 === 11))
{var inst_212579 = (state_212602[7]);var inst_212589 = (state_212602[2]);var inst_212590 = (inst_212579 + 1);var inst_212579__$1 = inst_212590;var state_212602__$1 = (function (){var statearr_212616 = state_212602;(statearr_212616[10] = inst_212589);
(statearr_212616[7] = inst_212579__$1);
return statearr_212616;
})();var statearr_212617_212635 = state_212602__$1;(statearr_212617_212635[2] = null);
(statearr_212617_212635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212621 = (new Array(11));(statearr_212621[0] = state_machine__10214__auto__);
(statearr_212621[1] = 1);
return statearr_212621;
});
var state_machine__10214__auto____1 = (function (state_212602){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212602);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212622){if((e212622 instanceof Object))
{var ex__10217__auto__ = e212622;var statearr_212623_212636 = state_212602;(statearr_212623_212636[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212637 = state_212602;
state_212602 = G__212637;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212602){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212624 = f__10284__auto__.call(null);(statearr_212624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212625);
return statearr_212624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___212734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212709){var state_val_212710 = (state_212709[1]);if((state_val_212710 === 1))
{var inst_212686 = null;var state_212709__$1 = (function (){var statearr_212711 = state_212709;(statearr_212711[7] = inst_212686);
return statearr_212711;
})();var statearr_212712_212735 = state_212709__$1;(statearr_212712_212735[2] = null);
(statearr_212712_212735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 2))
{var state_212709__$1 = state_212709;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212709__$1,4,ch);
} else
{if((state_val_212710 === 3))
{var inst_212706 = (state_212709[2]);var inst_212707 = cljs.core.async.close_BANG_.call(null,out);var state_212709__$1 = (function (){var statearr_212713 = state_212709;(statearr_212713[8] = inst_212706);
return statearr_212713;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212709__$1,inst_212707);
} else
{if((state_val_212710 === 4))
{var inst_212689 = (state_212709[9]);var inst_212689__$1 = (state_212709[2]);var inst_212690 = (inst_212689__$1 == null);var inst_212691 = cljs.core.not.call(null,inst_212690);var state_212709__$1 = (function (){var statearr_212714 = state_212709;(statearr_212714[9] = inst_212689__$1);
return statearr_212714;
})();if(inst_212691)
{var statearr_212715_212736 = state_212709__$1;(statearr_212715_212736[1] = 5);
} else
{var statearr_212716_212737 = state_212709__$1;(statearr_212716_212737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 5))
{var inst_212686 = (state_212709[7]);var inst_212689 = (state_212709[9]);var inst_212693 = cljs.core._EQ_.call(null,inst_212689,inst_212686);var state_212709__$1 = state_212709;if(inst_212693)
{var statearr_212717_212738 = state_212709__$1;(statearr_212717_212738[1] = 8);
} else
{var statearr_212718_212739 = state_212709__$1;(statearr_212718_212739[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 6))
{var state_212709__$1 = state_212709;var statearr_212720_212740 = state_212709__$1;(statearr_212720_212740[2] = null);
(statearr_212720_212740[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 7))
{var inst_212704 = (state_212709[2]);var state_212709__$1 = state_212709;var statearr_212721_212741 = state_212709__$1;(statearr_212721_212741[2] = inst_212704);
(statearr_212721_212741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 8))
{var inst_212686 = (state_212709[7]);var tmp212719 = inst_212686;var inst_212686__$1 = tmp212719;var state_212709__$1 = (function (){var statearr_212722 = state_212709;(statearr_212722[7] = inst_212686__$1);
return statearr_212722;
})();var statearr_212723_212742 = state_212709__$1;(statearr_212723_212742[2] = null);
(statearr_212723_212742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 9))
{var inst_212689 = (state_212709[9]);var state_212709__$1 = state_212709;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212709__$1,11,out,inst_212689);
} else
{if((state_val_212710 === 10))
{var inst_212701 = (state_212709[2]);var state_212709__$1 = state_212709;var statearr_212724_212743 = state_212709__$1;(statearr_212724_212743[2] = inst_212701);
(statearr_212724_212743[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212710 === 11))
{var inst_212689 = (state_212709[9]);var inst_212698 = (state_212709[2]);var inst_212686 = inst_212689;var state_212709__$1 = (function (){var statearr_212725 = state_212709;(statearr_212725[7] = inst_212686);
(statearr_212725[10] = inst_212698);
return statearr_212725;
})();var statearr_212726_212744 = state_212709__$1;(statearr_212726_212744[2] = null);
(statearr_212726_212744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212730 = (new Array(11));(statearr_212730[0] = state_machine__10214__auto__);
(statearr_212730[1] = 1);
return statearr_212730;
});
var state_machine__10214__auto____1 = (function (state_212709){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212709);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212731){if((e212731 instanceof Object))
{var ex__10217__auto__ = e212731;var statearr_212732_212745 = state_212709;(statearr_212732_212745[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212709);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212746 = state_212709;
state_212709 = G__212746;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212709){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212733 = f__10284__auto__.call(null);(statearr_212733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212734);
return statearr_212733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___212881 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_212851){var state_val_212852 = (state_212851[1]);if((state_val_212852 === 1))
{var inst_212814 = (new Array(n));var inst_212815 = inst_212814;var inst_212816 = 0;var state_212851__$1 = (function (){var statearr_212853 = state_212851;(statearr_212853[7] = inst_212816);
(statearr_212853[8] = inst_212815);
return statearr_212853;
})();var statearr_212854_212882 = state_212851__$1;(statearr_212854_212882[2] = null);
(statearr_212854_212882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 2))
{var state_212851__$1 = state_212851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_212851__$1,4,ch);
} else
{if((state_val_212852 === 3))
{var inst_212849 = (state_212851[2]);var state_212851__$1 = state_212851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_212851__$1,inst_212849);
} else
{if((state_val_212852 === 4))
{var inst_212819 = (state_212851[9]);var inst_212819__$1 = (state_212851[2]);var inst_212820 = (inst_212819__$1 == null);var inst_212821 = cljs.core.not.call(null,inst_212820);var state_212851__$1 = (function (){var statearr_212855 = state_212851;(statearr_212855[9] = inst_212819__$1);
return statearr_212855;
})();if(inst_212821)
{var statearr_212856_212883 = state_212851__$1;(statearr_212856_212883[1] = 5);
} else
{var statearr_212857_212884 = state_212851__$1;(statearr_212857_212884[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 5))
{var inst_212816 = (state_212851[7]);var inst_212815 = (state_212851[8]);var inst_212819 = (state_212851[9]);var inst_212824 = (state_212851[10]);var inst_212823 = (inst_212815[inst_212816] = inst_212819);var inst_212824__$1 = (inst_212816 + 1);var inst_212825 = (inst_212824__$1 < n);var state_212851__$1 = (function (){var statearr_212858 = state_212851;(statearr_212858[11] = inst_212823);
(statearr_212858[10] = inst_212824__$1);
return statearr_212858;
})();if(cljs.core.truth_(inst_212825))
{var statearr_212859_212885 = state_212851__$1;(statearr_212859_212885[1] = 8);
} else
{var statearr_212860_212886 = state_212851__$1;(statearr_212860_212886[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 6))
{var inst_212816 = (state_212851[7]);var inst_212837 = (inst_212816 > 0);var state_212851__$1 = state_212851;if(cljs.core.truth_(inst_212837))
{var statearr_212862_212887 = state_212851__$1;(statearr_212862_212887[1] = 12);
} else
{var statearr_212863_212888 = state_212851__$1;(statearr_212863_212888[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 7))
{var inst_212847 = (state_212851[2]);var state_212851__$1 = state_212851;var statearr_212864_212889 = state_212851__$1;(statearr_212864_212889[2] = inst_212847);
(statearr_212864_212889[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 8))
{var inst_212815 = (state_212851[8]);var inst_212824 = (state_212851[10]);var tmp212861 = inst_212815;var inst_212815__$1 = tmp212861;var inst_212816 = inst_212824;var state_212851__$1 = (function (){var statearr_212865 = state_212851;(statearr_212865[7] = inst_212816);
(statearr_212865[8] = inst_212815__$1);
return statearr_212865;
})();var statearr_212866_212890 = state_212851__$1;(statearr_212866_212890[2] = null);
(statearr_212866_212890[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 9))
{var inst_212815 = (state_212851[8]);var inst_212829 = cljs.core.vec.call(null,inst_212815);var state_212851__$1 = state_212851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212851__$1,11,out,inst_212829);
} else
{if((state_val_212852 === 10))
{var inst_212835 = (state_212851[2]);var state_212851__$1 = state_212851;var statearr_212867_212891 = state_212851__$1;(statearr_212867_212891[2] = inst_212835);
(statearr_212867_212891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 11))
{var inst_212831 = (state_212851[2]);var inst_212832 = (new Array(n));var inst_212815 = inst_212832;var inst_212816 = 0;var state_212851__$1 = (function (){var statearr_212868 = state_212851;(statearr_212868[12] = inst_212831);
(statearr_212868[7] = inst_212816);
(statearr_212868[8] = inst_212815);
return statearr_212868;
})();var statearr_212869_212892 = state_212851__$1;(statearr_212869_212892[2] = null);
(statearr_212869_212892[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 12))
{var inst_212815 = (state_212851[8]);var inst_212839 = cljs.core.vec.call(null,inst_212815);var state_212851__$1 = state_212851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_212851__$1,15,out,inst_212839);
} else
{if((state_val_212852 === 13))
{var state_212851__$1 = state_212851;var statearr_212870_212893 = state_212851__$1;(statearr_212870_212893[2] = null);
(statearr_212870_212893[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 14))
{var inst_212844 = (state_212851[2]);var inst_212845 = cljs.core.async.close_BANG_.call(null,out);var state_212851__$1 = (function (){var statearr_212871 = state_212851;(statearr_212871[13] = inst_212844);
return statearr_212871;
})();var statearr_212872_212894 = state_212851__$1;(statearr_212872_212894[2] = inst_212845);
(statearr_212872_212894[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_212852 === 15))
{var inst_212841 = (state_212851[2]);var state_212851__$1 = state_212851;var statearr_212873_212895 = state_212851__$1;(statearr_212873_212895[2] = inst_212841);
(statearr_212873_212895[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_212877 = (new Array(14));(statearr_212877[0] = state_machine__10214__auto__);
(statearr_212877[1] = 1);
return statearr_212877;
});
var state_machine__10214__auto____1 = (function (state_212851){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_212851);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e212878){if((e212878 instanceof Object))
{var ex__10217__auto__ = e212878;var statearr_212879_212896 = state_212851;(statearr_212879_212896[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_212851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e212878;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__212897 = state_212851;
state_212851 = G__212897;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_212851){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_212851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_212880 = f__10284__auto__.call(null);(statearr_212880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___212881);
return statearr_212880;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___213040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_213010){var state_val_213011 = (state_213010[1]);if((state_val_213011 === 1))
{var inst_212969 = (new Array(0));var inst_212970 = inst_212969;var inst_212971 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_213010__$1 = (function (){var statearr_213012 = state_213010;(statearr_213012[7] = inst_212971);
(statearr_213012[8] = inst_212970);
return statearr_213012;
})();var statearr_213013_213041 = state_213010__$1;(statearr_213013_213041[2] = null);
(statearr_213013_213041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 2))
{var state_213010__$1 = state_213010;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_213010__$1,4,ch);
} else
{if((state_val_213011 === 3))
{var inst_213008 = (state_213010[2]);var state_213010__$1 = state_213010;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_213010__$1,inst_213008);
} else
{if((state_val_213011 === 4))
{var inst_212974 = (state_213010[9]);var inst_212974__$1 = (state_213010[2]);var inst_212975 = (inst_212974__$1 == null);var inst_212976 = cljs.core.not.call(null,inst_212975);var state_213010__$1 = (function (){var statearr_213014 = state_213010;(statearr_213014[9] = inst_212974__$1);
return statearr_213014;
})();if(inst_212976)
{var statearr_213015_213042 = state_213010__$1;(statearr_213015_213042[1] = 5);
} else
{var statearr_213016_213043 = state_213010__$1;(statearr_213016_213043[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 5))
{var inst_212978 = (state_213010[10]);var inst_212974 = (state_213010[9]);var inst_212971 = (state_213010[7]);var inst_212978__$1 = f.call(null,inst_212974);var inst_212979 = cljs.core._EQ_.call(null,inst_212978__$1,inst_212971);var inst_212980 = cljs.core.keyword_identical_QMARK_.call(null,inst_212971,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_212981 = (inst_212979) || (inst_212980);var state_213010__$1 = (function (){var statearr_213017 = state_213010;(statearr_213017[10] = inst_212978__$1);
return statearr_213017;
})();if(cljs.core.truth_(inst_212981))
{var statearr_213018_213044 = state_213010__$1;(statearr_213018_213044[1] = 8);
} else
{var statearr_213019_213045 = state_213010__$1;(statearr_213019_213045[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 6))
{var inst_212970 = (state_213010[8]);var inst_212995 = inst_212970.length;var inst_212996 = (inst_212995 > 0);var state_213010__$1 = state_213010;if(cljs.core.truth_(inst_212996))
{var statearr_213021_213046 = state_213010__$1;(statearr_213021_213046[1] = 12);
} else
{var statearr_213022_213047 = state_213010__$1;(statearr_213022_213047[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 7))
{var inst_213006 = (state_213010[2]);var state_213010__$1 = state_213010;var statearr_213023_213048 = state_213010__$1;(statearr_213023_213048[2] = inst_213006);
(statearr_213023_213048[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 8))
{var inst_212978 = (state_213010[10]);var inst_212974 = (state_213010[9]);var inst_212970 = (state_213010[8]);var inst_212983 = inst_212970.push(inst_212974);var tmp213020 = inst_212970;var inst_212970__$1 = tmp213020;var inst_212971 = inst_212978;var state_213010__$1 = (function (){var statearr_213024 = state_213010;(statearr_213024[11] = inst_212983);
(statearr_213024[7] = inst_212971);
(statearr_213024[8] = inst_212970__$1);
return statearr_213024;
})();var statearr_213025_213049 = state_213010__$1;(statearr_213025_213049[2] = null);
(statearr_213025_213049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 9))
{var inst_212970 = (state_213010[8]);var inst_212986 = cljs.core.vec.call(null,inst_212970);var state_213010__$1 = state_213010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_213010__$1,11,out,inst_212986);
} else
{if((state_val_213011 === 10))
{var inst_212993 = (state_213010[2]);var state_213010__$1 = state_213010;var statearr_213026_213050 = state_213010__$1;(statearr_213026_213050[2] = inst_212993);
(statearr_213026_213050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 11))
{var inst_212978 = (state_213010[10]);var inst_212974 = (state_213010[9]);var inst_212988 = (state_213010[2]);var inst_212989 = (new Array(0));var inst_212990 = inst_212989.push(inst_212974);var inst_212970 = inst_212989;var inst_212971 = inst_212978;var state_213010__$1 = (function (){var statearr_213027 = state_213010;(statearr_213027[12] = inst_212990);
(statearr_213027[13] = inst_212988);
(statearr_213027[7] = inst_212971);
(statearr_213027[8] = inst_212970);
return statearr_213027;
})();var statearr_213028_213051 = state_213010__$1;(statearr_213028_213051[2] = null);
(statearr_213028_213051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 12))
{var inst_212970 = (state_213010[8]);var inst_212998 = cljs.core.vec.call(null,inst_212970);var state_213010__$1 = state_213010;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_213010__$1,15,out,inst_212998);
} else
{if((state_val_213011 === 13))
{var state_213010__$1 = state_213010;var statearr_213029_213052 = state_213010__$1;(statearr_213029_213052[2] = null);
(statearr_213029_213052[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 14))
{var inst_213003 = (state_213010[2]);var inst_213004 = cljs.core.async.close_BANG_.call(null,out);var state_213010__$1 = (function (){var statearr_213030 = state_213010;(statearr_213030[14] = inst_213003);
return statearr_213030;
})();var statearr_213031_213053 = state_213010__$1;(statearr_213031_213053[2] = inst_213004);
(statearr_213031_213053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_213011 === 15))
{var inst_213000 = (state_213010[2]);var state_213010__$1 = state_213010;var statearr_213032_213054 = state_213010__$1;(statearr_213032_213054[2] = inst_213000);
(statearr_213032_213054[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__10214__auto____0 = (function (){var statearr_213036 = (new Array(15));(statearr_213036[0] = state_machine__10214__auto__);
(statearr_213036[1] = 1);
return statearr_213036;
});
var state_machine__10214__auto____1 = (function (state_213010){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_213010);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e213037){if((e213037 instanceof Object))
{var ex__10217__auto__ = e213037;var statearr_213038_213055 = state_213010;(statearr_213038_213055[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_213010);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e213037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__213056 = state_213010;
state_213010 = G__213056;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_213010){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_213010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_213039 = f__10284__auto__.call(null);(statearr_213039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___213040);
return statearr_213039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10285__auto__);
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
