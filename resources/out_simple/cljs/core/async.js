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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t634134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634134 = (function (f,fn_handler,meta634135){
this.f = f;
this.fn_handler = fn_handler;
this.meta634135 = meta634135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634134.cljs$lang$type = true;
cljs.core.async.t634134.cljs$lang$ctorStr = "cljs.core.async/t634134";
cljs.core.async.t634134.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634134");
});
cljs.core.async.t634134.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t634134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t634134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t634134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634136){var self__ = this;
var _634136__$1 = this;return self__.meta634135;
});
cljs.core.async.t634134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634136,meta634135__$1){var self__ = this;
var _634136__$1 = this;return (new cljs.core.async.t634134(self__.f,self__.fn_handler,meta634135__$1));
});
cljs.core.async.__GT_t634134 = (function __GT_t634134(f__$1,fn_handler__$1,meta634135){return (new cljs.core.async.t634134(f__$1,fn_handler__$1,meta634135));
});
}
return (new cljs.core.async.t634134(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__634138 = buff;if(G__634138)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__634138.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__634138.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__634138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__634138);
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
{var val_634139 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_634139);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_634139);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___634140 = n;var x_634141 = 0;while(true){
if((x_634141 < n__8553__auto___634140))
{(a[x_634141] = 0);
{
var G__634142 = (x_634141 + 1);
x_634141 = G__634142;
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
var G__634143 = (i + 1);
i = G__634143;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t634147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634147 = (function (flag,alt_flag,meta634148){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta634148 = meta634148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634147.cljs$lang$type = true;
cljs.core.async.t634147.cljs$lang$ctorStr = "cljs.core.async/t634147";
cljs.core.async.t634147.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634147");
});
cljs.core.async.t634147.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t634147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t634147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t634147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634149){var self__ = this;
var _634149__$1 = this;return self__.meta634148;
});
cljs.core.async.t634147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634149,meta634148__$1){var self__ = this;
var _634149__$1 = this;return (new cljs.core.async.t634147(self__.flag,self__.alt_flag,meta634148__$1));
});
cljs.core.async.__GT_t634147 = (function __GT_t634147(flag__$1,alt_flag__$1,meta634148){return (new cljs.core.async.t634147(flag__$1,alt_flag__$1,meta634148));
});
}
return (new cljs.core.async.t634147(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t634153 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634153 = (function (cb,flag,alt_handler,meta634154){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta634154 = meta634154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634153.cljs$lang$type = true;
cljs.core.async.t634153.cljs$lang$ctorStr = "cljs.core.async/t634153";
cljs.core.async.t634153.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634153");
});
cljs.core.async.t634153.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t634153.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t634153.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t634153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634155){var self__ = this;
var _634155__$1 = this;return self__.meta634154;
});
cljs.core.async.t634153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634155,meta634154__$1){var self__ = this;
var _634155__$1 = this;return (new cljs.core.async.t634153(self__.cb,self__.flag,self__.alt_handler,meta634154__$1));
});
cljs.core.async.__GT_t634153 = (function __GT_t634153(cb__$1,flag__$1,alt_handler__$1,meta634154){return (new cljs.core.async.t634153(cb__$1,flag__$1,alt_handler__$1,meta634154));
});
}
return (new cljs.core.async.t634153(cb,flag,alt_handler,null));
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
return (function (p1__634156_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__634156_SHARP_,port], null));
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
var G__634157 = (i + 1);
i = G__634157;
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
var alts_BANG___delegate = function (ports,p__634158){var map__634160 = p__634158;var map__634160__$1 = ((cljs.core.seq_QMARK_.call(null,map__634160))?cljs.core.apply.call(null,cljs.core.hash_map,map__634160):map__634160);var opts = map__634160__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__634158 = null;if (arguments.length > 1) {
  p__634158 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__634158);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__634161){
var ports = cljs.core.first(arglist__634161);
var p__634158 = cljs.core.rest(arglist__634161);
return alts_BANG___delegate(ports,p__634158);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t634169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634169 = (function (ch,f,map_LT_,meta634170){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta634170 = meta634170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634169.cljs$lang$type = true;
cljs.core.async.t634169.cljs$lang$ctorStr = "cljs.core.async/t634169";
cljs.core.async.t634169.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634169");
});
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t634172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634172 = (function (fn1,_,meta634170,ch,f,map_LT_,meta634173){
this.fn1 = fn1;
this._ = _;
this.meta634170 = meta634170;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta634173 = meta634173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634172.cljs$lang$type = true;
cljs.core.async.t634172.cljs$lang$ctorStr = "cljs.core.async/t634172";
cljs.core.async.t634172.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634172");
});
cljs.core.async.t634172.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t634172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t634172.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t634172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__634162_SHARP_){return f1.call(null,(((p1__634162_SHARP_ == null))?null:self__.f.call(null,p1__634162_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t634172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634174){var self__ = this;
var _634174__$1 = this;return self__.meta634173;
});
cljs.core.async.t634172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634174,meta634173__$1){var self__ = this;
var _634174__$1 = this;return (new cljs.core.async.t634172(self__.fn1,self__._,self__.meta634170,self__.ch,self__.f,self__.map_LT_,meta634173__$1));
});
cljs.core.async.__GT_t634172 = (function __GT_t634172(fn1__$1,___$2,meta634170__$1,ch__$2,f__$2,map_LT___$2,meta634173){return (new cljs.core.async.t634172(fn1__$1,___$2,meta634170__$1,ch__$2,f__$2,map_LT___$2,meta634173));
});
}
return (new cljs.core.async.t634172(fn1,___$1,self__.meta634170,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t634169.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t634169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634171){var self__ = this;
var _634171__$1 = this;return self__.meta634170;
});
cljs.core.async.t634169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634171,meta634170__$1){var self__ = this;
var _634171__$1 = this;return (new cljs.core.async.t634169(self__.ch,self__.f,self__.map_LT_,meta634170__$1));
});
cljs.core.async.__GT_t634169 = (function __GT_t634169(ch__$1,f__$1,map_LT___$1,meta634170){return (new cljs.core.async.t634169(ch__$1,f__$1,map_LT___$1,meta634170));
});
}
return (new cljs.core.async.t634169(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t634178 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634178 = (function (ch,f,map_GT_,meta634179){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta634179 = meta634179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634178.cljs$lang$type = true;
cljs.core.async.t634178.cljs$lang$ctorStr = "cljs.core.async/t634178";
cljs.core.async.t634178.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634178");
});
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t634178.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t634178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634180){var self__ = this;
var _634180__$1 = this;return self__.meta634179;
});
cljs.core.async.t634178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634180,meta634179__$1){var self__ = this;
var _634180__$1 = this;return (new cljs.core.async.t634178(self__.ch,self__.f,self__.map_GT_,meta634179__$1));
});
cljs.core.async.__GT_t634178 = (function __GT_t634178(ch__$1,f__$1,map_GT___$1,meta634179){return (new cljs.core.async.t634178(ch__$1,f__$1,map_GT___$1,meta634179));
});
}
return (new cljs.core.async.t634178(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t634184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t634184 = (function (ch,p,filter_GT_,meta634185){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta634185 = meta634185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t634184.cljs$lang$type = true;
cljs.core.async.t634184.cljs$lang$ctorStr = "cljs.core.async/t634184";
cljs.core.async.t634184.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t634184");
});
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t634184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t634184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_634186){var self__ = this;
var _634186__$1 = this;return self__.meta634185;
});
cljs.core.async.t634184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_634186,meta634185__$1){var self__ = this;
var _634186__$1 = this;return (new cljs.core.async.t634184(self__.ch,self__.p,self__.filter_GT_,meta634185__$1));
});
cljs.core.async.__GT_t634184 = (function __GT_t634184(ch__$1,p__$1,filter_GT___$1,meta634185){return (new cljs.core.async.t634184(ch__$1,p__$1,filter_GT___$1,meta634185));
});
}
return (new cljs.core.async.t634184(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___634269 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634248){var state_val_634249 = (state_634248[1]);if((state_val_634249 === 1))
{var state_634248__$1 = state_634248;var statearr_634250_634270 = state_634248__$1;(statearr_634250_634270[2] = null);
(statearr_634250_634270[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 2))
{var state_634248__$1 = state_634248;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_634248__$1,4,ch);
} else
{if((state_val_634249 === 3))
{var inst_634246 = (state_634248[2]);var state_634248__$1 = state_634248;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634248__$1,inst_634246);
} else
{if((state_val_634249 === 4))
{var inst_634230 = (state_634248[7]);var inst_634230__$1 = (state_634248[2]);var inst_634231 = (inst_634230__$1 == null);var state_634248__$1 = (function (){var statearr_634251 = state_634248;(statearr_634251[7] = inst_634230__$1);
return statearr_634251;
})();if(cljs.core.truth_(inst_634231))
{var statearr_634252_634271 = state_634248__$1;(statearr_634252_634271[1] = 5);
} else
{var statearr_634253_634272 = state_634248__$1;(statearr_634253_634272[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 5))
{var inst_634233 = cljs.core.async.close_BANG_.call(null,out);var state_634248__$1 = state_634248;var statearr_634254_634273 = state_634248__$1;(statearr_634254_634273[2] = inst_634233);
(statearr_634254_634273[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 6))
{var inst_634230 = (state_634248[7]);var inst_634235 = p.call(null,inst_634230);var state_634248__$1 = state_634248;if(cljs.core.truth_(inst_634235))
{var statearr_634255_634274 = state_634248__$1;(statearr_634255_634274[1] = 8);
} else
{var statearr_634256_634275 = state_634248__$1;(statearr_634256_634275[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 7))
{var inst_634244 = (state_634248[2]);var state_634248__$1 = state_634248;var statearr_634257_634276 = state_634248__$1;(statearr_634257_634276[2] = inst_634244);
(statearr_634257_634276[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 8))
{var inst_634230 = (state_634248[7]);var state_634248__$1 = state_634248;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634248__$1,11,out,inst_634230);
} else
{if((state_val_634249 === 9))
{var state_634248__$1 = state_634248;var statearr_634258_634277 = state_634248__$1;(statearr_634258_634277[2] = null);
(statearr_634258_634277[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 10))
{var inst_634241 = (state_634248[2]);var state_634248__$1 = (function (){var statearr_634259 = state_634248;(statearr_634259[8] = inst_634241);
return statearr_634259;
})();var statearr_634260_634278 = state_634248__$1;(statearr_634260_634278[2] = null);
(statearr_634260_634278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634249 === 11))
{var inst_634238 = (state_634248[2]);var state_634248__$1 = state_634248;var statearr_634261_634279 = state_634248__$1;(statearr_634261_634279[2] = inst_634238);
(statearr_634261_634279[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_634265 = (new Array(9));(statearr_634265[0] = state_machine__10214__auto__);
(statearr_634265[1] = 1);
return statearr_634265;
});
var state_machine__10214__auto____1 = (function (state_634248){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634248);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634266){if((e634266 instanceof Object))
{var ex__10217__auto__ = e634266;var statearr_634267_634280 = state_634248;(statearr_634267_634280[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634248);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634266;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634281 = state_634248;
state_634248 = G__634281;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634248){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634268 = f__10284__auto__.call(null);(statearr_634268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___634269);
return statearr_634268;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634433){var state_val_634434 = (state_634433[1]);if((state_val_634434 === 1))
{var state_634433__$1 = state_634433;var statearr_634435_634472 = state_634433__$1;(statearr_634435_634472[2] = null);
(statearr_634435_634472[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 2))
{var state_634433__$1 = state_634433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_634433__$1,4,in$);
} else
{if((state_val_634434 === 3))
{var inst_634431 = (state_634433[2]);var state_634433__$1 = state_634433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634433__$1,inst_634431);
} else
{if((state_val_634434 === 4))
{var inst_634379 = (state_634433[7]);var inst_634379__$1 = (state_634433[2]);var inst_634380 = (inst_634379__$1 == null);var state_634433__$1 = (function (){var statearr_634436 = state_634433;(statearr_634436[7] = inst_634379__$1);
return statearr_634436;
})();if(cljs.core.truth_(inst_634380))
{var statearr_634437_634473 = state_634433__$1;(statearr_634437_634473[1] = 5);
} else
{var statearr_634438_634474 = state_634433__$1;(statearr_634438_634474[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 5))
{var inst_634382 = cljs.core.async.close_BANG_.call(null,out);var state_634433__$1 = state_634433;var statearr_634439_634475 = state_634433__$1;(statearr_634439_634475[2] = inst_634382);
(statearr_634439_634475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 6))
{var inst_634379 = (state_634433[7]);var inst_634384 = f.call(null,inst_634379);var inst_634389 = cljs.core.seq.call(null,inst_634384);var inst_634390 = inst_634389;var inst_634391 = null;var inst_634392 = 0;var inst_634393 = 0;var state_634433__$1 = (function (){var statearr_634440 = state_634433;(statearr_634440[8] = inst_634390);
(statearr_634440[9] = inst_634391);
(statearr_634440[10] = inst_634392);
(statearr_634440[11] = inst_634393);
return statearr_634440;
})();var statearr_634441_634476 = state_634433__$1;(statearr_634441_634476[2] = null);
(statearr_634441_634476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 7))
{var inst_634429 = (state_634433[2]);var state_634433__$1 = state_634433;var statearr_634442_634477 = state_634433__$1;(statearr_634442_634477[2] = inst_634429);
(statearr_634442_634477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 8))
{var inst_634392 = (state_634433[10]);var inst_634393 = (state_634433[11]);var inst_634395 = (inst_634393 < inst_634392);var inst_634396 = inst_634395;var state_634433__$1 = state_634433;if(cljs.core.truth_(inst_634396))
{var statearr_634443_634478 = state_634433__$1;(statearr_634443_634478[1] = 10);
} else
{var statearr_634444_634479 = state_634433__$1;(statearr_634444_634479[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 9))
{var inst_634426 = (state_634433[2]);var state_634433__$1 = (function (){var statearr_634445 = state_634433;(statearr_634445[12] = inst_634426);
return statearr_634445;
})();var statearr_634446_634480 = state_634433__$1;(statearr_634446_634480[2] = null);
(statearr_634446_634480[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 10))
{var inst_634391 = (state_634433[9]);var inst_634393 = (state_634433[11]);var inst_634398 = cljs.core._nth.call(null,inst_634391,inst_634393);var state_634433__$1 = state_634433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634433__$1,13,out,inst_634398);
} else
{if((state_val_634434 === 11))
{var inst_634390 = (state_634433[8]);var inst_634404 = (state_634433[13]);var inst_634404__$1 = cljs.core.seq.call(null,inst_634390);var state_634433__$1 = (function (){var statearr_634450 = state_634433;(statearr_634450[13] = inst_634404__$1);
return statearr_634450;
})();if(inst_634404__$1)
{var statearr_634451_634481 = state_634433__$1;(statearr_634451_634481[1] = 14);
} else
{var statearr_634452_634482 = state_634433__$1;(statearr_634452_634482[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 12))
{var inst_634424 = (state_634433[2]);var state_634433__$1 = state_634433;var statearr_634453_634483 = state_634433__$1;(statearr_634453_634483[2] = inst_634424);
(statearr_634453_634483[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 13))
{var inst_634390 = (state_634433[8]);var inst_634391 = (state_634433[9]);var inst_634392 = (state_634433[10]);var inst_634393 = (state_634433[11]);var inst_634400 = (state_634433[2]);var inst_634401 = (inst_634393 + 1);var tmp634447 = inst_634390;var tmp634448 = inst_634391;var tmp634449 = inst_634392;var inst_634390__$1 = tmp634447;var inst_634391__$1 = tmp634448;var inst_634392__$1 = tmp634449;var inst_634393__$1 = inst_634401;var state_634433__$1 = (function (){var statearr_634454 = state_634433;(statearr_634454[8] = inst_634390__$1);
(statearr_634454[9] = inst_634391__$1);
(statearr_634454[10] = inst_634392__$1);
(statearr_634454[11] = inst_634393__$1);
(statearr_634454[14] = inst_634400);
return statearr_634454;
})();var statearr_634455_634484 = state_634433__$1;(statearr_634455_634484[2] = null);
(statearr_634455_634484[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 14))
{var inst_634404 = (state_634433[13]);var inst_634406 = cljs.core.chunked_seq_QMARK_.call(null,inst_634404);var state_634433__$1 = state_634433;if(inst_634406)
{var statearr_634456_634485 = state_634433__$1;(statearr_634456_634485[1] = 17);
} else
{var statearr_634457_634486 = state_634433__$1;(statearr_634457_634486[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 15))
{var state_634433__$1 = state_634433;var statearr_634458_634487 = state_634433__$1;(statearr_634458_634487[2] = null);
(statearr_634458_634487[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 16))
{var inst_634422 = (state_634433[2]);var state_634433__$1 = state_634433;var statearr_634459_634488 = state_634433__$1;(statearr_634459_634488[2] = inst_634422);
(statearr_634459_634488[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 17))
{var inst_634404 = (state_634433[13]);var inst_634408 = cljs.core.chunk_first.call(null,inst_634404);var inst_634409 = cljs.core.chunk_rest.call(null,inst_634404);var inst_634410 = cljs.core.count.call(null,inst_634408);var inst_634390 = inst_634409;var inst_634391 = inst_634408;var inst_634392 = inst_634410;var inst_634393 = 0;var state_634433__$1 = (function (){var statearr_634460 = state_634433;(statearr_634460[8] = inst_634390);
(statearr_634460[9] = inst_634391);
(statearr_634460[10] = inst_634392);
(statearr_634460[11] = inst_634393);
return statearr_634460;
})();var statearr_634461_634489 = state_634433__$1;(statearr_634461_634489[2] = null);
(statearr_634461_634489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 18))
{var inst_634404 = (state_634433[13]);var inst_634413 = cljs.core.first.call(null,inst_634404);var state_634433__$1 = state_634433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634433__$1,20,out,inst_634413);
} else
{if((state_val_634434 === 19))
{var inst_634419 = (state_634433[2]);var state_634433__$1 = state_634433;var statearr_634462_634490 = state_634433__$1;(statearr_634462_634490[2] = inst_634419);
(statearr_634462_634490[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634434 === 20))
{var inst_634404 = (state_634433[13]);var inst_634415 = (state_634433[2]);var inst_634416 = cljs.core.next.call(null,inst_634404);var inst_634390 = inst_634416;var inst_634391 = null;var inst_634392 = 0;var inst_634393 = 0;var state_634433__$1 = (function (){var statearr_634463 = state_634433;(statearr_634463[8] = inst_634390);
(statearr_634463[9] = inst_634391);
(statearr_634463[10] = inst_634392);
(statearr_634463[11] = inst_634393);
(statearr_634463[15] = inst_634415);
return statearr_634463;
})();var statearr_634464_634491 = state_634433__$1;(statearr_634464_634491[2] = null);
(statearr_634464_634491[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_634468 = (new Array(16));(statearr_634468[0] = state_machine__10214__auto__);
(statearr_634468[1] = 1);
return statearr_634468;
});
var state_machine__10214__auto____1 = (function (state_634433){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634433);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634469){if((e634469 instanceof Object))
{var ex__10217__auto__ = e634469;var statearr_634470_634492 = state_634433;(statearr_634470_634492[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634493 = state_634433;
state_634433 = G__634493;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634433){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634471 = f__10284__auto__.call(null);(statearr_634471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_634471;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___634574 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634553){var state_val_634554 = (state_634553[1]);if((state_val_634554 === 1))
{var state_634553__$1 = state_634553;var statearr_634555_634575 = state_634553__$1;(statearr_634555_634575[2] = null);
(statearr_634555_634575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 2))
{var state_634553__$1 = state_634553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_634553__$1,4,from);
} else
{if((state_val_634554 === 3))
{var inst_634551 = (state_634553[2]);var state_634553__$1 = state_634553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634553__$1,inst_634551);
} else
{if((state_val_634554 === 4))
{var inst_634536 = (state_634553[7]);var inst_634536__$1 = (state_634553[2]);var inst_634537 = (inst_634536__$1 == null);var state_634553__$1 = (function (){var statearr_634556 = state_634553;(statearr_634556[7] = inst_634536__$1);
return statearr_634556;
})();if(cljs.core.truth_(inst_634537))
{var statearr_634557_634576 = state_634553__$1;(statearr_634557_634576[1] = 5);
} else
{var statearr_634558_634577 = state_634553__$1;(statearr_634558_634577[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 5))
{var state_634553__$1 = state_634553;if(cljs.core.truth_(close_QMARK_))
{var statearr_634559_634578 = state_634553__$1;(statearr_634559_634578[1] = 8);
} else
{var statearr_634560_634579 = state_634553__$1;(statearr_634560_634579[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 6))
{var inst_634536 = (state_634553[7]);var state_634553__$1 = state_634553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634553__$1,11,to,inst_634536);
} else
{if((state_val_634554 === 7))
{var inst_634549 = (state_634553[2]);var state_634553__$1 = state_634553;var statearr_634561_634580 = state_634553__$1;(statearr_634561_634580[2] = inst_634549);
(statearr_634561_634580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 8))
{var inst_634540 = cljs.core.async.close_BANG_.call(null,to);var state_634553__$1 = state_634553;var statearr_634562_634581 = state_634553__$1;(statearr_634562_634581[2] = inst_634540);
(statearr_634562_634581[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 9))
{var state_634553__$1 = state_634553;var statearr_634563_634582 = state_634553__$1;(statearr_634563_634582[2] = null);
(statearr_634563_634582[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 10))
{var inst_634543 = (state_634553[2]);var state_634553__$1 = state_634553;var statearr_634564_634583 = state_634553__$1;(statearr_634564_634583[2] = inst_634543);
(statearr_634564_634583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634554 === 11))
{var inst_634546 = (state_634553[2]);var state_634553__$1 = (function (){var statearr_634565 = state_634553;(statearr_634565[8] = inst_634546);
return statearr_634565;
})();var statearr_634566_634584 = state_634553__$1;(statearr_634566_634584[2] = null);
(statearr_634566_634584[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_634570 = (new Array(9));(statearr_634570[0] = state_machine__10214__auto__);
(statearr_634570[1] = 1);
return statearr_634570;
});
var state_machine__10214__auto____1 = (function (state_634553){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634553);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634571){if((e634571 instanceof Object))
{var ex__10217__auto__ = e634571;var statearr_634572_634585 = state_634553;(statearr_634572_634585[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634586 = state_634553;
state_634553 = G__634586;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634553){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634573 = f__10284__auto__.call(null);(statearr_634573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___634574);
return statearr_634573;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___634673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634651){var state_val_634652 = (state_634651[1]);if((state_val_634652 === 1))
{var state_634651__$1 = state_634651;var statearr_634653_634674 = state_634651__$1;(statearr_634653_634674[2] = null);
(statearr_634653_634674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 2))
{var state_634651__$1 = state_634651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_634651__$1,4,ch);
} else
{if((state_val_634652 === 3))
{var inst_634649 = (state_634651[2]);var state_634651__$1 = state_634651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634651__$1,inst_634649);
} else
{if((state_val_634652 === 4))
{var inst_634632 = (state_634651[7]);var inst_634632__$1 = (state_634651[2]);var inst_634633 = (inst_634632__$1 == null);var state_634651__$1 = (function (){var statearr_634654 = state_634651;(statearr_634654[7] = inst_634632__$1);
return statearr_634654;
})();if(cljs.core.truth_(inst_634633))
{var statearr_634655_634675 = state_634651__$1;(statearr_634655_634675[1] = 5);
} else
{var statearr_634656_634676 = state_634651__$1;(statearr_634656_634676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 5))
{var inst_634635 = cljs.core.async.close_BANG_.call(null,tc);var inst_634636 = cljs.core.async.close_BANG_.call(null,fc);var state_634651__$1 = (function (){var statearr_634657 = state_634651;(statearr_634657[8] = inst_634635);
return statearr_634657;
})();var statearr_634658_634677 = state_634651__$1;(statearr_634658_634677[2] = inst_634636);
(statearr_634658_634677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 6))
{var inst_634632 = (state_634651[7]);var inst_634638 = p.call(null,inst_634632);var state_634651__$1 = state_634651;if(cljs.core.truth_(inst_634638))
{var statearr_634659_634678 = state_634651__$1;(statearr_634659_634678[1] = 9);
} else
{var statearr_634660_634679 = state_634651__$1;(statearr_634660_634679[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 7))
{var inst_634647 = (state_634651[2]);var state_634651__$1 = state_634651;var statearr_634661_634680 = state_634651__$1;(statearr_634661_634680[2] = inst_634647);
(statearr_634661_634680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 8))
{var inst_634644 = (state_634651[2]);var state_634651__$1 = (function (){var statearr_634662 = state_634651;(statearr_634662[9] = inst_634644);
return statearr_634662;
})();var statearr_634663_634681 = state_634651__$1;(statearr_634663_634681[2] = null);
(statearr_634663_634681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 9))
{var state_634651__$1 = state_634651;var statearr_634664_634682 = state_634651__$1;(statearr_634664_634682[2] = tc);
(statearr_634664_634682[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 10))
{var state_634651__$1 = state_634651;var statearr_634665_634683 = state_634651__$1;(statearr_634665_634683[2] = fc);
(statearr_634665_634683[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634652 === 11))
{var inst_634632 = (state_634651[7]);var inst_634642 = (state_634651[2]);var state_634651__$1 = state_634651;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634651__$1,8,inst_634642,inst_634632);
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
var state_machine__10214__auto____0 = (function (){var statearr_634669 = (new Array(10));(statearr_634669[0] = state_machine__10214__auto__);
(statearr_634669[1] = 1);
return statearr_634669;
});
var state_machine__10214__auto____1 = (function (state_634651){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634651);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634670){if((e634670 instanceof Object))
{var ex__10217__auto__ = e634670;var statearr_634671_634684 = state_634651;(statearr_634671_634684[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634651);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634685 = state_634651;
state_634651 = G__634685;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634651){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634672 = f__10284__auto__.call(null);(statearr_634672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___634673);
return statearr_634672;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634732){var state_val_634733 = (state_634732[1]);if((state_val_634733 === 7))
{var inst_634728 = (state_634732[2]);var state_634732__$1 = state_634732;var statearr_634734_634750 = state_634732__$1;(statearr_634734_634750[2] = inst_634728);
(statearr_634734_634750[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634733 === 6))
{var inst_634718 = (state_634732[7]);var inst_634721 = (state_634732[8]);var inst_634725 = f.call(null,inst_634718,inst_634721);var inst_634718__$1 = inst_634725;var state_634732__$1 = (function (){var statearr_634735 = state_634732;(statearr_634735[7] = inst_634718__$1);
return statearr_634735;
})();var statearr_634736_634751 = state_634732__$1;(statearr_634736_634751[2] = null);
(statearr_634736_634751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634733 === 5))
{var inst_634718 = (state_634732[7]);var state_634732__$1 = state_634732;var statearr_634737_634752 = state_634732__$1;(statearr_634737_634752[2] = inst_634718);
(statearr_634737_634752[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634733 === 4))
{var inst_634721 = (state_634732[8]);var inst_634721__$1 = (state_634732[2]);var inst_634722 = (inst_634721__$1 == null);var state_634732__$1 = (function (){var statearr_634738 = state_634732;(statearr_634738[8] = inst_634721__$1);
return statearr_634738;
})();if(cljs.core.truth_(inst_634722))
{var statearr_634739_634753 = state_634732__$1;(statearr_634739_634753[1] = 5);
} else
{var statearr_634740_634754 = state_634732__$1;(statearr_634740_634754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634733 === 3))
{var inst_634730 = (state_634732[2]);var state_634732__$1 = state_634732;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634732__$1,inst_634730);
} else
{if((state_val_634733 === 2))
{var state_634732__$1 = state_634732;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_634732__$1,4,ch);
} else
{if((state_val_634733 === 1))
{var inst_634718 = init;var state_634732__$1 = (function (){var statearr_634741 = state_634732;(statearr_634741[7] = inst_634718);
return statearr_634741;
})();var statearr_634742_634755 = state_634732__$1;(statearr_634742_634755[2] = null);
(statearr_634742_634755[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_634746 = (new Array(9));(statearr_634746[0] = state_machine__10214__auto__);
(statearr_634746[1] = 1);
return statearr_634746;
});
var state_machine__10214__auto____1 = (function (state_634732){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634732);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634747){if((e634747 instanceof Object))
{var ex__10217__auto__ = e634747;var statearr_634748_634756 = state_634732;(statearr_634748_634756[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634732);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634757 = state_634732;
state_634732 = G__634757;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634732){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634749 = f__10284__auto__.call(null);(statearr_634749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_634749;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_634819){var state_val_634820 = (state_634819[1]);if((state_val_634820 === 1))
{var inst_634799 = cljs.core.seq.call(null,coll);var inst_634800 = inst_634799;var state_634819__$1 = (function (){var statearr_634821 = state_634819;(statearr_634821[7] = inst_634800);
return statearr_634821;
})();var statearr_634822_634840 = state_634819__$1;(statearr_634822_634840[2] = null);
(statearr_634822_634840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 2))
{var inst_634800 = (state_634819[7]);var state_634819__$1 = state_634819;if(cljs.core.truth_(inst_634800))
{var statearr_634823_634841 = state_634819__$1;(statearr_634823_634841[1] = 4);
} else
{var statearr_634824_634842 = state_634819__$1;(statearr_634824_634842[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 3))
{var inst_634817 = (state_634819[2]);var state_634819__$1 = state_634819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_634819__$1,inst_634817);
} else
{if((state_val_634820 === 4))
{var inst_634800 = (state_634819[7]);var inst_634803 = cljs.core.first.call(null,inst_634800);var state_634819__$1 = state_634819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_634819__$1,7,ch,inst_634803);
} else
{if((state_val_634820 === 5))
{var state_634819__$1 = state_634819;if(cljs.core.truth_(close_QMARK_))
{var statearr_634825_634843 = state_634819__$1;(statearr_634825_634843[1] = 8);
} else
{var statearr_634826_634844 = state_634819__$1;(statearr_634826_634844[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 6))
{var inst_634815 = (state_634819[2]);var state_634819__$1 = state_634819;var statearr_634827_634845 = state_634819__$1;(statearr_634827_634845[2] = inst_634815);
(statearr_634827_634845[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 7))
{var inst_634800 = (state_634819[7]);var inst_634805 = (state_634819[2]);var inst_634806 = cljs.core.next.call(null,inst_634800);var inst_634800__$1 = inst_634806;var state_634819__$1 = (function (){var statearr_634828 = state_634819;(statearr_634828[8] = inst_634805);
(statearr_634828[7] = inst_634800__$1);
return statearr_634828;
})();var statearr_634829_634846 = state_634819__$1;(statearr_634829_634846[2] = null);
(statearr_634829_634846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 8))
{var inst_634810 = cljs.core.async.close_BANG_.call(null,ch);var state_634819__$1 = state_634819;var statearr_634830_634847 = state_634819__$1;(statearr_634830_634847[2] = inst_634810);
(statearr_634830_634847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 9))
{var state_634819__$1 = state_634819;var statearr_634831_634848 = state_634819__$1;(statearr_634831_634848[2] = null);
(statearr_634831_634848[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_634820 === 10))
{var inst_634813 = (state_634819[2]);var state_634819__$1 = state_634819;var statearr_634832_634849 = state_634819__$1;(statearr_634832_634849[2] = inst_634813);
(statearr_634832_634849[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_634836 = (new Array(9));(statearr_634836[0] = state_machine__10214__auto__);
(statearr_634836[1] = 1);
return statearr_634836;
});
var state_machine__10214__auto____1 = (function (state_634819){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_634819);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e634837){if((e634837 instanceof Object))
{var ex__10217__auto__ = e634837;var statearr_634838_634850 = state_634819;(statearr_634838_634850[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_634819);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e634837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__634851 = state_634819;
state_634819 = G__634851;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_634819){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_634819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_634839 = f__10284__auto__.call(null);(statearr_634839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_634839;
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
cljs.core.async.Mux = (function (){var obj634853 = {};return obj634853;
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
cljs.core.async.Mult = (function (){var obj634855 = {};return obj634855;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t635070 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t635070 = (function (cs,ch,mult,meta635071){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta635071 = meta635071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t635070.cljs$lang$type = true;
cljs.core.async.t635070.cljs$lang$ctorStr = "cljs.core.async/t635070";
cljs.core.async.t635070.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t635070");
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t635070.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t635070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_635072){var self__ = this;
var _635072__$1 = this;return self__.meta635071;
});})(cs))
;
cljs.core.async.t635070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_635072,meta635071__$1){var self__ = this;
var _635072__$1 = this;return (new cljs.core.async.t635070(self__.cs,self__.ch,self__.mult,meta635071__$1));
});})(cs))
;
cljs.core.async.__GT_t635070 = ((function (cs){
return (function __GT_t635070(cs__$1,ch__$1,mult__$1,meta635071){return (new cljs.core.async.t635070(cs__$1,ch__$1,mult__$1,meta635071));
});})(cs))
;
}
return (new cljs.core.async.t635070(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___635284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_635202){var state_val_635203 = (state_635202[1]);if((state_val_635203 === 32))
{var inst_635151 = (state_635202[7]);var inst_635075 = (state_635202[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_635202,31,Object,null,30);var inst_635158 = cljs.core.async.put_BANG_.call(null,inst_635151,inst_635075,done);var state_635202__$1 = state_635202;var statearr_635204_635285 = state_635202__$1;(statearr_635204_635285[2] = inst_635158);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 1))
{var state_635202__$1 = state_635202;var statearr_635205_635286 = state_635202__$1;(statearr_635205_635286[2] = null);
(statearr_635205_635286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 33))
{var inst_635164 = (state_635202[9]);var inst_635166 = cljs.core.chunked_seq_QMARK_.call(null,inst_635164);var state_635202__$1 = state_635202;if(inst_635166)
{var statearr_635206_635287 = state_635202__$1;(statearr_635206_635287[1] = 36);
} else
{var statearr_635207_635288 = state_635202__$1;(statearr_635207_635288[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 2))
{var state_635202__$1 = state_635202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_635202__$1,4,ch);
} else
{if((state_val_635203 === 34))
{var state_635202__$1 = state_635202;var statearr_635208_635289 = state_635202__$1;(statearr_635208_635289[2] = null);
(statearr_635208_635289[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 3))
{var inst_635200 = (state_635202[2]);var state_635202__$1 = state_635202;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_635202__$1,inst_635200);
} else
{if((state_val_635203 === 35))
{var inst_635189 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635209_635290 = state_635202__$1;(statearr_635209_635290[2] = inst_635189);
(statearr_635209_635290[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 4))
{var inst_635075 = (state_635202[8]);var inst_635075__$1 = (state_635202[2]);var inst_635076 = (inst_635075__$1 == null);var state_635202__$1 = (function (){var statearr_635210 = state_635202;(statearr_635210[8] = inst_635075__$1);
return statearr_635210;
})();if(cljs.core.truth_(inst_635076))
{var statearr_635211_635291 = state_635202__$1;(statearr_635211_635291[1] = 5);
} else
{var statearr_635212_635292 = state_635202__$1;(statearr_635212_635292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 36))
{var inst_635164 = (state_635202[9]);var inst_635168 = cljs.core.chunk_first.call(null,inst_635164);var inst_635169 = cljs.core.chunk_rest.call(null,inst_635164);var inst_635170 = cljs.core.count.call(null,inst_635168);var inst_635143 = inst_635169;var inst_635144 = inst_635168;var inst_635145 = inst_635170;var inst_635146 = 0;var state_635202__$1 = (function (){var statearr_635213 = state_635202;(statearr_635213[10] = inst_635146);
(statearr_635213[11] = inst_635143);
(statearr_635213[12] = inst_635145);
(statearr_635213[13] = inst_635144);
return statearr_635213;
})();var statearr_635214_635293 = state_635202__$1;(statearr_635214_635293[2] = null);
(statearr_635214_635293[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 5))
{var inst_635082 = cljs.core.deref.call(null,cs);var inst_635083 = cljs.core.seq.call(null,inst_635082);var inst_635084 = inst_635083;var inst_635085 = null;var inst_635086 = 0;var inst_635087 = 0;var state_635202__$1 = (function (){var statearr_635215 = state_635202;(statearr_635215[14] = inst_635084);
(statearr_635215[15] = inst_635085);
(statearr_635215[16] = inst_635086);
(statearr_635215[17] = inst_635087);
return statearr_635215;
})();var statearr_635216_635294 = state_635202__$1;(statearr_635216_635294[2] = null);
(statearr_635216_635294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 37))
{var inst_635164 = (state_635202[9]);var inst_635173 = cljs.core.first.call(null,inst_635164);var state_635202__$1 = (function (){var statearr_635217 = state_635202;(statearr_635217[18] = inst_635173);
return statearr_635217;
})();var statearr_635218_635295 = state_635202__$1;(statearr_635218_635295[2] = null);
(statearr_635218_635295[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 6))
{var inst_635134 = cljs.core.deref.call(null,cs);var inst_635135 = cljs.core.keys.call(null,inst_635134);var inst_635136 = cljs.core.count.call(null,inst_635135);var inst_635137 = cljs.core.reset_BANG_.call(null,dctr,inst_635136);var inst_635142 = cljs.core.seq.call(null,inst_635135);var inst_635143 = inst_635142;var inst_635144 = null;var inst_635145 = 0;var inst_635146 = 0;var state_635202__$1 = (function (){var statearr_635219 = state_635202;(statearr_635219[10] = inst_635146);
(statearr_635219[11] = inst_635143);
(statearr_635219[12] = inst_635145);
(statearr_635219[13] = inst_635144);
(statearr_635219[19] = inst_635137);
return statearr_635219;
})();var statearr_635220_635296 = state_635202__$1;(statearr_635220_635296[2] = null);
(statearr_635220_635296[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 38))
{var inst_635186 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635221_635297 = state_635202__$1;(statearr_635221_635297[2] = inst_635186);
(statearr_635221_635297[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 7))
{var inst_635198 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635222_635298 = state_635202__$1;(statearr_635222_635298[2] = inst_635198);
(statearr_635222_635298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 39))
{var inst_635164 = (state_635202[9]);var inst_635182 = (state_635202[2]);var inst_635183 = cljs.core.next.call(null,inst_635164);var inst_635143 = inst_635183;var inst_635144 = null;var inst_635145 = 0;var inst_635146 = 0;var state_635202__$1 = (function (){var statearr_635223 = state_635202;(statearr_635223[10] = inst_635146);
(statearr_635223[11] = inst_635143);
(statearr_635223[12] = inst_635145);
(statearr_635223[13] = inst_635144);
(statearr_635223[20] = inst_635182);
return statearr_635223;
})();var statearr_635224_635299 = state_635202__$1;(statearr_635224_635299[2] = null);
(statearr_635224_635299[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 8))
{var inst_635086 = (state_635202[16]);var inst_635087 = (state_635202[17]);var inst_635089 = (inst_635087 < inst_635086);var inst_635090 = inst_635089;var state_635202__$1 = state_635202;if(cljs.core.truth_(inst_635090))
{var statearr_635225_635300 = state_635202__$1;(statearr_635225_635300[1] = 10);
} else
{var statearr_635226_635301 = state_635202__$1;(statearr_635226_635301[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 40))
{var inst_635173 = (state_635202[18]);var inst_635174 = (state_635202[2]);var inst_635175 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_635176 = cljs.core.async.untap_STAR_.call(null,m,inst_635173);var state_635202__$1 = (function (){var statearr_635227 = state_635202;(statearr_635227[21] = inst_635174);
(statearr_635227[22] = inst_635175);
return statearr_635227;
})();var statearr_635228_635302 = state_635202__$1;(statearr_635228_635302[2] = inst_635176);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 9))
{var inst_635132 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635229_635303 = state_635202__$1;(statearr_635229_635303[2] = inst_635132);
(statearr_635229_635303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 41))
{var inst_635173 = (state_635202[18]);var inst_635075 = (state_635202[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_635202,40,Object,null,39);var inst_635180 = cljs.core.async.put_BANG_.call(null,inst_635173,inst_635075,done);var state_635202__$1 = state_635202;var statearr_635230_635304 = state_635202__$1;(statearr_635230_635304[2] = inst_635180);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635202__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 10))
{var inst_635085 = (state_635202[15]);var inst_635087 = (state_635202[17]);var inst_635093 = cljs.core._nth.call(null,inst_635085,inst_635087);var inst_635094 = cljs.core.nth.call(null,inst_635093,0,null);var inst_635095 = cljs.core.nth.call(null,inst_635093,1,null);var state_635202__$1 = (function (){var statearr_635231 = state_635202;(statearr_635231[23] = inst_635094);
return statearr_635231;
})();if(cljs.core.truth_(inst_635095))
{var statearr_635232_635305 = state_635202__$1;(statearr_635232_635305[1] = 13);
} else
{var statearr_635233_635306 = state_635202__$1;(statearr_635233_635306[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 42))
{var inst_635195 = (state_635202[2]);var state_635202__$1 = (function (){var statearr_635234 = state_635202;(statearr_635234[24] = inst_635195);
return statearr_635234;
})();var statearr_635235_635307 = state_635202__$1;(statearr_635235_635307[2] = null);
(statearr_635235_635307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 11))
{var inst_635104 = (state_635202[25]);var inst_635084 = (state_635202[14]);var inst_635104__$1 = cljs.core.seq.call(null,inst_635084);var state_635202__$1 = (function (){var statearr_635236 = state_635202;(statearr_635236[25] = inst_635104__$1);
return statearr_635236;
})();if(inst_635104__$1)
{var statearr_635237_635308 = state_635202__$1;(statearr_635237_635308[1] = 16);
} else
{var statearr_635238_635309 = state_635202__$1;(statearr_635238_635309[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 12))
{var inst_635130 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635239_635310 = state_635202__$1;(statearr_635239_635310[2] = inst_635130);
(statearr_635239_635310[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 13))
{var inst_635094 = (state_635202[23]);var inst_635097 = cljs.core.async.close_BANG_.call(null,inst_635094);var state_635202__$1 = state_635202;var statearr_635243_635311 = state_635202__$1;(statearr_635243_635311[2] = inst_635097);
(statearr_635243_635311[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 14))
{var state_635202__$1 = state_635202;var statearr_635244_635312 = state_635202__$1;(statearr_635244_635312[2] = null);
(statearr_635244_635312[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 15))
{var inst_635084 = (state_635202[14]);var inst_635085 = (state_635202[15]);var inst_635086 = (state_635202[16]);var inst_635087 = (state_635202[17]);var inst_635100 = (state_635202[2]);var inst_635101 = (inst_635087 + 1);var tmp635240 = inst_635084;var tmp635241 = inst_635085;var tmp635242 = inst_635086;var inst_635084__$1 = tmp635240;var inst_635085__$1 = tmp635241;var inst_635086__$1 = tmp635242;var inst_635087__$1 = inst_635101;var state_635202__$1 = (function (){var statearr_635245 = state_635202;(statearr_635245[26] = inst_635100);
(statearr_635245[14] = inst_635084__$1);
(statearr_635245[15] = inst_635085__$1);
(statearr_635245[16] = inst_635086__$1);
(statearr_635245[17] = inst_635087__$1);
return statearr_635245;
})();var statearr_635246_635313 = state_635202__$1;(statearr_635246_635313[2] = null);
(statearr_635246_635313[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 16))
{var inst_635104 = (state_635202[25]);var inst_635106 = cljs.core.chunked_seq_QMARK_.call(null,inst_635104);var state_635202__$1 = state_635202;if(inst_635106)
{var statearr_635247_635314 = state_635202__$1;(statearr_635247_635314[1] = 19);
} else
{var statearr_635248_635315 = state_635202__$1;(statearr_635248_635315[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 17))
{var state_635202__$1 = state_635202;var statearr_635249_635316 = state_635202__$1;(statearr_635249_635316[2] = null);
(statearr_635249_635316[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 18))
{var inst_635128 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635250_635317 = state_635202__$1;(statearr_635250_635317[2] = inst_635128);
(statearr_635250_635317[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 19))
{var inst_635104 = (state_635202[25]);var inst_635108 = cljs.core.chunk_first.call(null,inst_635104);var inst_635109 = cljs.core.chunk_rest.call(null,inst_635104);var inst_635110 = cljs.core.count.call(null,inst_635108);var inst_635084 = inst_635109;var inst_635085 = inst_635108;var inst_635086 = inst_635110;var inst_635087 = 0;var state_635202__$1 = (function (){var statearr_635251 = state_635202;(statearr_635251[14] = inst_635084);
(statearr_635251[15] = inst_635085);
(statearr_635251[16] = inst_635086);
(statearr_635251[17] = inst_635087);
return statearr_635251;
})();var statearr_635252_635318 = state_635202__$1;(statearr_635252_635318[2] = null);
(statearr_635252_635318[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 20))
{var inst_635104 = (state_635202[25]);var inst_635114 = cljs.core.first.call(null,inst_635104);var inst_635115 = cljs.core.nth.call(null,inst_635114,0,null);var inst_635116 = cljs.core.nth.call(null,inst_635114,1,null);var state_635202__$1 = (function (){var statearr_635253 = state_635202;(statearr_635253[27] = inst_635115);
return statearr_635253;
})();if(cljs.core.truth_(inst_635116))
{var statearr_635254_635319 = state_635202__$1;(statearr_635254_635319[1] = 22);
} else
{var statearr_635255_635320 = state_635202__$1;(statearr_635255_635320[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 21))
{var inst_635125 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635256_635321 = state_635202__$1;(statearr_635256_635321[2] = inst_635125);
(statearr_635256_635321[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 22))
{var inst_635115 = (state_635202[27]);var inst_635118 = cljs.core.async.close_BANG_.call(null,inst_635115);var state_635202__$1 = state_635202;var statearr_635257_635322 = state_635202__$1;(statearr_635257_635322[2] = inst_635118);
(statearr_635257_635322[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 23))
{var state_635202__$1 = state_635202;var statearr_635258_635323 = state_635202__$1;(statearr_635258_635323[2] = null);
(statearr_635258_635323[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 24))
{var inst_635104 = (state_635202[25]);var inst_635121 = (state_635202[2]);var inst_635122 = cljs.core.next.call(null,inst_635104);var inst_635084 = inst_635122;var inst_635085 = null;var inst_635086 = 0;var inst_635087 = 0;var state_635202__$1 = (function (){var statearr_635259 = state_635202;(statearr_635259[14] = inst_635084);
(statearr_635259[15] = inst_635085);
(statearr_635259[16] = inst_635086);
(statearr_635259[28] = inst_635121);
(statearr_635259[17] = inst_635087);
return statearr_635259;
})();var statearr_635260_635324 = state_635202__$1;(statearr_635260_635324[2] = null);
(statearr_635260_635324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 25))
{var inst_635146 = (state_635202[10]);var inst_635145 = (state_635202[12]);var inst_635148 = (inst_635146 < inst_635145);var inst_635149 = inst_635148;var state_635202__$1 = state_635202;if(cljs.core.truth_(inst_635149))
{var statearr_635261_635325 = state_635202__$1;(statearr_635261_635325[1] = 27);
} else
{var statearr_635262_635326 = state_635202__$1;(statearr_635262_635326[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 26))
{var inst_635193 = (state_635202[2]);var state_635202__$1 = (function (){var statearr_635263 = state_635202;(statearr_635263[29] = inst_635193);
return statearr_635263;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_635202__$1,42,dchan);
} else
{if((state_val_635203 === 27))
{var inst_635146 = (state_635202[10]);var inst_635144 = (state_635202[13]);var inst_635151 = cljs.core._nth.call(null,inst_635144,inst_635146);var state_635202__$1 = (function (){var statearr_635264 = state_635202;(statearr_635264[7] = inst_635151);
return statearr_635264;
})();var statearr_635265_635327 = state_635202__$1;(statearr_635265_635327[2] = null);
(statearr_635265_635327[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 28))
{var inst_635143 = (state_635202[11]);var inst_635164 = (state_635202[9]);var inst_635164__$1 = cljs.core.seq.call(null,inst_635143);var state_635202__$1 = (function (){var statearr_635269 = state_635202;(statearr_635269[9] = inst_635164__$1);
return statearr_635269;
})();if(inst_635164__$1)
{var statearr_635270_635328 = state_635202__$1;(statearr_635270_635328[1] = 33);
} else
{var statearr_635271_635329 = state_635202__$1;(statearr_635271_635329[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 29))
{var inst_635191 = (state_635202[2]);var state_635202__$1 = state_635202;var statearr_635272_635330 = state_635202__$1;(statearr_635272_635330[2] = inst_635191);
(statearr_635272_635330[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 30))
{var inst_635146 = (state_635202[10]);var inst_635143 = (state_635202[11]);var inst_635145 = (state_635202[12]);var inst_635144 = (state_635202[13]);var inst_635160 = (state_635202[2]);var inst_635161 = (inst_635146 + 1);var tmp635266 = inst_635143;var tmp635267 = inst_635145;var tmp635268 = inst_635144;var inst_635143__$1 = tmp635266;var inst_635144__$1 = tmp635268;var inst_635145__$1 = tmp635267;var inst_635146__$1 = inst_635161;var state_635202__$1 = (function (){var statearr_635273 = state_635202;(statearr_635273[10] = inst_635146__$1);
(statearr_635273[11] = inst_635143__$1);
(statearr_635273[12] = inst_635145__$1);
(statearr_635273[13] = inst_635144__$1);
(statearr_635273[30] = inst_635160);
return statearr_635273;
})();var statearr_635274_635331 = state_635202__$1;(statearr_635274_635331[2] = null);
(statearr_635274_635331[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635203 === 31))
{var inst_635151 = (state_635202[7]);var inst_635152 = (state_635202[2]);var inst_635153 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_635154 = cljs.core.async.untap_STAR_.call(null,m,inst_635151);var state_635202__$1 = (function (){var statearr_635275 = state_635202;(statearr_635275[31] = inst_635153);
(statearr_635275[32] = inst_635152);
return statearr_635275;
})();var statearr_635276_635332 = state_635202__$1;(statearr_635276_635332[2] = inst_635154);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635202__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_635280 = (new Array(33));(statearr_635280[0] = state_machine__10214__auto__);
(statearr_635280[1] = 1);
return statearr_635280;
});
var state_machine__10214__auto____1 = (function (state_635202){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_635202);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e635281){if((e635281 instanceof Object))
{var ex__10217__auto__ = e635281;var statearr_635282_635333 = state_635202;(statearr_635282_635333[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e635281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__635334 = state_635202;
state_635202 = G__635334;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_635202){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_635202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_635283 = f__10284__auto__.call(null);(statearr_635283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___635284);
return statearr_635283;
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
cljs.core.async.Mix = (function (){var obj635336 = {};return obj635336;
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
;var m = (function (){if(typeof cljs.core.async.t635446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t635446 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta635447){
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
this.meta635447 = meta635447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t635446.cljs$lang$type = true;
cljs.core.async.t635446.cljs$lang$ctorStr = "cljs.core.async/t635446";
cljs.core.async.t635446.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t635446");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t635446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_635448){var self__ = this;
var _635448__$1 = this;return self__.meta635447;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t635446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_635448,meta635447__$1){var self__ = this;
var _635448__$1 = this;return (new cljs.core.async.t635446(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta635447__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t635446 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t635446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta635447){return (new cljs.core.async.t635446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta635447));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t635446(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___635555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_635513){var state_val_635514 = (state_635513[1]);if((state_val_635514 === 1))
{var inst_635452 = (state_635513[7]);var inst_635452__$1 = calc_state.call(null);var inst_635453 = cljs.core.seq_QMARK_.call(null,inst_635452__$1);var state_635513__$1 = (function (){var statearr_635515 = state_635513;(statearr_635515[7] = inst_635452__$1);
return statearr_635515;
})();if(inst_635453)
{var statearr_635516_635556 = state_635513__$1;(statearr_635516_635556[1] = 2);
} else
{var statearr_635517_635557 = state_635513__$1;(statearr_635517_635557[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 2))
{var inst_635452 = (state_635513[7]);var inst_635455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_635452);var state_635513__$1 = state_635513;var statearr_635518_635558 = state_635513__$1;(statearr_635518_635558[2] = inst_635455);
(statearr_635518_635558[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 3))
{var inst_635452 = (state_635513[7]);var state_635513__$1 = state_635513;var statearr_635519_635559 = state_635513__$1;(statearr_635519_635559[2] = inst_635452);
(statearr_635519_635559[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 4))
{var inst_635452 = (state_635513[7]);var inst_635458 = (state_635513[2]);var inst_635459 = cljs.core.get.call(null,inst_635458,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_635460 = cljs.core.get.call(null,inst_635458,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_635461 = cljs.core.get.call(null,inst_635458,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_635462 = inst_635452;var state_635513__$1 = (function (){var statearr_635520 = state_635513;(statearr_635520[8] = inst_635462);
(statearr_635520[9] = inst_635461);
(statearr_635520[10] = inst_635459);
(statearr_635520[11] = inst_635460);
return statearr_635520;
})();var statearr_635521_635560 = state_635513__$1;(statearr_635521_635560[2] = null);
(statearr_635521_635560[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 5))
{var inst_635462 = (state_635513[8]);var inst_635465 = cljs.core.seq_QMARK_.call(null,inst_635462);var state_635513__$1 = state_635513;if(inst_635465)
{var statearr_635522_635561 = state_635513__$1;(statearr_635522_635561[1] = 7);
} else
{var statearr_635523_635562 = state_635513__$1;(statearr_635523_635562[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 6))
{var inst_635511 = (state_635513[2]);var state_635513__$1 = state_635513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_635513__$1,inst_635511);
} else
{if((state_val_635514 === 7))
{var inst_635462 = (state_635513[8]);var inst_635467 = cljs.core.apply.call(null,cljs.core.hash_map,inst_635462);var state_635513__$1 = state_635513;var statearr_635524_635563 = state_635513__$1;(statearr_635524_635563[2] = inst_635467);
(statearr_635524_635563[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 8))
{var inst_635462 = (state_635513[8]);var state_635513__$1 = state_635513;var statearr_635525_635564 = state_635513__$1;(statearr_635525_635564[2] = inst_635462);
(statearr_635525_635564[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 9))
{var inst_635470 = (state_635513[12]);var inst_635470__$1 = (state_635513[2]);var inst_635471 = cljs.core.get.call(null,inst_635470__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_635472 = cljs.core.get.call(null,inst_635470__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_635473 = cljs.core.get.call(null,inst_635470__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_635513__$1 = (function (){var statearr_635526 = state_635513;(statearr_635526[13] = inst_635473);
(statearr_635526[14] = inst_635472);
(statearr_635526[12] = inst_635470__$1);
return statearr_635526;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_635513__$1,10,inst_635471);
} else
{if((state_val_635514 === 10))
{var inst_635478 = (state_635513[15]);var inst_635477 = (state_635513[16]);var inst_635476 = (state_635513[2]);var inst_635477__$1 = cljs.core.nth.call(null,inst_635476,0,null);var inst_635478__$1 = cljs.core.nth.call(null,inst_635476,1,null);var inst_635479 = (inst_635477__$1 == null);var inst_635480 = cljs.core._EQ_.call(null,inst_635478__$1,change);var inst_635481 = (inst_635479) || (inst_635480);var state_635513__$1 = (function (){var statearr_635527 = state_635513;(statearr_635527[15] = inst_635478__$1);
(statearr_635527[16] = inst_635477__$1);
return statearr_635527;
})();if(cljs.core.truth_(inst_635481))
{var statearr_635528_635565 = state_635513__$1;(statearr_635528_635565[1] = 11);
} else
{var statearr_635529_635566 = state_635513__$1;(statearr_635529_635566[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 11))
{var inst_635477 = (state_635513[16]);var inst_635483 = (inst_635477 == null);var state_635513__$1 = state_635513;if(cljs.core.truth_(inst_635483))
{var statearr_635530_635567 = state_635513__$1;(statearr_635530_635567[1] = 14);
} else
{var statearr_635531_635568 = state_635513__$1;(statearr_635531_635568[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 12))
{var inst_635492 = (state_635513[17]);var inst_635478 = (state_635513[15]);var inst_635473 = (state_635513[13]);var inst_635492__$1 = inst_635473.call(null,inst_635478);var state_635513__$1 = (function (){var statearr_635532 = state_635513;(statearr_635532[17] = inst_635492__$1);
return statearr_635532;
})();if(cljs.core.truth_(inst_635492__$1))
{var statearr_635533_635569 = state_635513__$1;(statearr_635533_635569[1] = 17);
} else
{var statearr_635534_635570 = state_635513__$1;(statearr_635534_635570[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 13))
{var inst_635509 = (state_635513[2]);var state_635513__$1 = state_635513;var statearr_635535_635571 = state_635513__$1;(statearr_635535_635571[2] = inst_635509);
(statearr_635535_635571[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 14))
{var inst_635478 = (state_635513[15]);var inst_635485 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_635478);var state_635513__$1 = state_635513;var statearr_635536_635572 = state_635513__$1;(statearr_635536_635572[2] = inst_635485);
(statearr_635536_635572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 15))
{var state_635513__$1 = state_635513;var statearr_635537_635573 = state_635513__$1;(statearr_635537_635573[2] = null);
(statearr_635537_635573[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 16))
{var inst_635488 = (state_635513[2]);var inst_635489 = calc_state.call(null);var inst_635462 = inst_635489;var state_635513__$1 = (function (){var statearr_635538 = state_635513;(statearr_635538[8] = inst_635462);
(statearr_635538[18] = inst_635488);
return statearr_635538;
})();var statearr_635539_635574 = state_635513__$1;(statearr_635539_635574[2] = null);
(statearr_635539_635574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 17))
{var inst_635492 = (state_635513[17]);var state_635513__$1 = state_635513;var statearr_635540_635575 = state_635513__$1;(statearr_635540_635575[2] = inst_635492);
(statearr_635540_635575[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 18))
{var inst_635478 = (state_635513[15]);var inst_635473 = (state_635513[13]);var inst_635472 = (state_635513[14]);var inst_635495 = cljs.core.empty_QMARK_.call(null,inst_635473);var inst_635496 = inst_635472.call(null,inst_635478);var inst_635497 = cljs.core.not.call(null,inst_635496);var inst_635498 = (inst_635495) && (inst_635497);var state_635513__$1 = state_635513;var statearr_635541_635576 = state_635513__$1;(statearr_635541_635576[2] = inst_635498);
(statearr_635541_635576[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 19))
{var inst_635500 = (state_635513[2]);var state_635513__$1 = state_635513;if(cljs.core.truth_(inst_635500))
{var statearr_635542_635577 = state_635513__$1;(statearr_635542_635577[1] = 20);
} else
{var statearr_635543_635578 = state_635513__$1;(statearr_635543_635578[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 20))
{var inst_635477 = (state_635513[16]);var state_635513__$1 = state_635513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_635513__$1,23,out,inst_635477);
} else
{if((state_val_635514 === 21))
{var state_635513__$1 = state_635513;var statearr_635544_635579 = state_635513__$1;(statearr_635544_635579[2] = null);
(statearr_635544_635579[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 22))
{var inst_635470 = (state_635513[12]);var inst_635506 = (state_635513[2]);var inst_635462 = inst_635470;var state_635513__$1 = (function (){var statearr_635545 = state_635513;(statearr_635545[19] = inst_635506);
(statearr_635545[8] = inst_635462);
return statearr_635545;
})();var statearr_635546_635580 = state_635513__$1;(statearr_635546_635580[2] = null);
(statearr_635546_635580[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635514 === 23))
{var inst_635503 = (state_635513[2]);var state_635513__$1 = state_635513;var statearr_635547_635581 = state_635513__$1;(statearr_635547_635581[2] = inst_635503);
(statearr_635547_635581[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_635551 = (new Array(20));(statearr_635551[0] = state_machine__10214__auto__);
(statearr_635551[1] = 1);
return statearr_635551;
});
var state_machine__10214__auto____1 = (function (state_635513){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_635513);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e635552){if((e635552 instanceof Object))
{var ex__10217__auto__ = e635552;var statearr_635553_635582 = state_635513;(statearr_635553_635582[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e635552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__635583 = state_635513;
state_635513 = G__635583;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_635513){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_635513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_635554 = f__10284__auto__.call(null);(statearr_635554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___635555);
return statearr_635554;
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
cljs.core.async.Pub = (function (){var obj635585 = {};return obj635585;
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
return (function (p1__635586_SHARP_){if(cljs.core.truth_(p1__635586_SHARP_.call(null,topic)))
{return p1__635586_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__635586_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t635711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t635711 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta635712){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta635712 = meta635712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t635711.cljs$lang$type = true;
cljs.core.async.t635711.cljs$lang$ctorStr = "cljs.core.async/t635711";
cljs.core.async.t635711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t635711");
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t635711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t635711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_635713){var self__ = this;
var _635713__$1 = this;return self__.meta635712;
});})(mults,ensure_mult))
;
cljs.core.async.t635711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_635713,meta635712__$1){var self__ = this;
var _635713__$1 = this;return (new cljs.core.async.t635711(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta635712__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t635711 = ((function (mults,ensure_mult){
return (function __GT_t635711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta635712){return (new cljs.core.async.t635711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta635712));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t635711(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___635835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_635787){var state_val_635788 = (state_635787[1]);if((state_val_635788 === 1))
{var state_635787__$1 = state_635787;var statearr_635789_635836 = state_635787__$1;(statearr_635789_635836[2] = null);
(statearr_635789_635836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 2))
{var state_635787__$1 = state_635787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_635787__$1,4,ch);
} else
{if((state_val_635788 === 3))
{var inst_635785 = (state_635787[2]);var state_635787__$1 = state_635787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_635787__$1,inst_635785);
} else
{if((state_val_635788 === 4))
{var inst_635716 = (state_635787[7]);var inst_635716__$1 = (state_635787[2]);var inst_635717 = (inst_635716__$1 == null);var state_635787__$1 = (function (){var statearr_635790 = state_635787;(statearr_635790[7] = inst_635716__$1);
return statearr_635790;
})();if(cljs.core.truth_(inst_635717))
{var statearr_635791_635837 = state_635787__$1;(statearr_635791_635837[1] = 5);
} else
{var statearr_635792_635838 = state_635787__$1;(statearr_635792_635838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 5))
{var inst_635723 = cljs.core.deref.call(null,mults);var inst_635724 = cljs.core.vals.call(null,inst_635723);var inst_635725 = cljs.core.seq.call(null,inst_635724);var inst_635726 = inst_635725;var inst_635727 = null;var inst_635728 = 0;var inst_635729 = 0;var state_635787__$1 = (function (){var statearr_635793 = state_635787;(statearr_635793[8] = inst_635726);
(statearr_635793[9] = inst_635727);
(statearr_635793[10] = inst_635728);
(statearr_635793[11] = inst_635729);
return statearr_635793;
})();var statearr_635794_635839 = state_635787__$1;(statearr_635794_635839[2] = null);
(statearr_635794_635839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 6))
{var inst_635764 = (state_635787[12]);var inst_635716 = (state_635787[7]);var inst_635766 = (state_635787[13]);var inst_635764__$1 = topic_fn.call(null,inst_635716);var inst_635765 = cljs.core.deref.call(null,mults);var inst_635766__$1 = cljs.core.get.call(null,inst_635765,inst_635764__$1);var state_635787__$1 = (function (){var statearr_635795 = state_635787;(statearr_635795[12] = inst_635764__$1);
(statearr_635795[13] = inst_635766__$1);
return statearr_635795;
})();if(cljs.core.truth_(inst_635766__$1))
{var statearr_635796_635840 = state_635787__$1;(statearr_635796_635840[1] = 19);
} else
{var statearr_635797_635841 = state_635787__$1;(statearr_635797_635841[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 7))
{var inst_635783 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635798_635842 = state_635787__$1;(statearr_635798_635842[2] = inst_635783);
(statearr_635798_635842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 8))
{var inst_635728 = (state_635787[10]);var inst_635729 = (state_635787[11]);var inst_635731 = (inst_635729 < inst_635728);var inst_635732 = inst_635731;var state_635787__$1 = state_635787;if(cljs.core.truth_(inst_635732))
{var statearr_635802_635843 = state_635787__$1;(statearr_635802_635843[1] = 10);
} else
{var statearr_635803_635844 = state_635787__$1;(statearr_635803_635844[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 9))
{var inst_635762 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635804_635845 = state_635787__$1;(statearr_635804_635845[2] = inst_635762);
(statearr_635804_635845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 10))
{var inst_635726 = (state_635787[8]);var inst_635727 = (state_635787[9]);var inst_635728 = (state_635787[10]);var inst_635729 = (state_635787[11]);var inst_635734 = cljs.core._nth.call(null,inst_635727,inst_635729);var inst_635735 = cljs.core.async.muxch_STAR_.call(null,inst_635734);var inst_635736 = cljs.core.async.close_BANG_.call(null,inst_635735);var inst_635737 = (inst_635729 + 1);var tmp635799 = inst_635726;var tmp635800 = inst_635727;var tmp635801 = inst_635728;var inst_635726__$1 = tmp635799;var inst_635727__$1 = tmp635800;var inst_635728__$1 = tmp635801;var inst_635729__$1 = inst_635737;var state_635787__$1 = (function (){var statearr_635805 = state_635787;(statearr_635805[8] = inst_635726__$1);
(statearr_635805[14] = inst_635736);
(statearr_635805[9] = inst_635727__$1);
(statearr_635805[10] = inst_635728__$1);
(statearr_635805[11] = inst_635729__$1);
return statearr_635805;
})();var statearr_635806_635846 = state_635787__$1;(statearr_635806_635846[2] = null);
(statearr_635806_635846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 11))
{var inst_635740 = (state_635787[15]);var inst_635726 = (state_635787[8]);var inst_635740__$1 = cljs.core.seq.call(null,inst_635726);var state_635787__$1 = (function (){var statearr_635807 = state_635787;(statearr_635807[15] = inst_635740__$1);
return statearr_635807;
})();if(inst_635740__$1)
{var statearr_635808_635847 = state_635787__$1;(statearr_635808_635847[1] = 13);
} else
{var statearr_635809_635848 = state_635787__$1;(statearr_635809_635848[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 12))
{var inst_635760 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635810_635849 = state_635787__$1;(statearr_635810_635849[2] = inst_635760);
(statearr_635810_635849[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 13))
{var inst_635740 = (state_635787[15]);var inst_635742 = cljs.core.chunked_seq_QMARK_.call(null,inst_635740);var state_635787__$1 = state_635787;if(inst_635742)
{var statearr_635811_635850 = state_635787__$1;(statearr_635811_635850[1] = 16);
} else
{var statearr_635812_635851 = state_635787__$1;(statearr_635812_635851[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 14))
{var state_635787__$1 = state_635787;var statearr_635813_635852 = state_635787__$1;(statearr_635813_635852[2] = null);
(statearr_635813_635852[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 15))
{var inst_635758 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635814_635853 = state_635787__$1;(statearr_635814_635853[2] = inst_635758);
(statearr_635814_635853[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 16))
{var inst_635740 = (state_635787[15]);var inst_635744 = cljs.core.chunk_first.call(null,inst_635740);var inst_635745 = cljs.core.chunk_rest.call(null,inst_635740);var inst_635746 = cljs.core.count.call(null,inst_635744);var inst_635726 = inst_635745;var inst_635727 = inst_635744;var inst_635728 = inst_635746;var inst_635729 = 0;var state_635787__$1 = (function (){var statearr_635815 = state_635787;(statearr_635815[8] = inst_635726);
(statearr_635815[9] = inst_635727);
(statearr_635815[10] = inst_635728);
(statearr_635815[11] = inst_635729);
return statearr_635815;
})();var statearr_635816_635854 = state_635787__$1;(statearr_635816_635854[2] = null);
(statearr_635816_635854[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 17))
{var inst_635740 = (state_635787[15]);var inst_635749 = cljs.core.first.call(null,inst_635740);var inst_635750 = cljs.core.async.muxch_STAR_.call(null,inst_635749);var inst_635751 = cljs.core.async.close_BANG_.call(null,inst_635750);var inst_635752 = cljs.core.next.call(null,inst_635740);var inst_635726 = inst_635752;var inst_635727 = null;var inst_635728 = 0;var inst_635729 = 0;var state_635787__$1 = (function (){var statearr_635817 = state_635787;(statearr_635817[16] = inst_635751);
(statearr_635817[8] = inst_635726);
(statearr_635817[9] = inst_635727);
(statearr_635817[10] = inst_635728);
(statearr_635817[11] = inst_635729);
return statearr_635817;
})();var statearr_635818_635855 = state_635787__$1;(statearr_635818_635855[2] = null);
(statearr_635818_635855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 18))
{var inst_635755 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635819_635856 = state_635787__$1;(statearr_635819_635856[2] = inst_635755);
(statearr_635819_635856[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 19))
{var state_635787__$1 = state_635787;var statearr_635820_635857 = state_635787__$1;(statearr_635820_635857[2] = null);
(statearr_635820_635857[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 20))
{var state_635787__$1 = state_635787;var statearr_635821_635858 = state_635787__$1;(statearr_635821_635858[2] = null);
(statearr_635821_635858[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 21))
{var inst_635780 = (state_635787[2]);var state_635787__$1 = (function (){var statearr_635822 = state_635787;(statearr_635822[17] = inst_635780);
return statearr_635822;
})();var statearr_635823_635859 = state_635787__$1;(statearr_635823_635859[2] = null);
(statearr_635823_635859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 22))
{var inst_635777 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635824_635860 = state_635787__$1;(statearr_635824_635860[2] = inst_635777);
(statearr_635824_635860[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 23))
{var inst_635764 = (state_635787[12]);var inst_635768 = (state_635787[2]);var inst_635769 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_635764);var state_635787__$1 = (function (){var statearr_635825 = state_635787;(statearr_635825[18] = inst_635768);
return statearr_635825;
})();var statearr_635826_635861 = state_635787__$1;(statearr_635826_635861[2] = inst_635769);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635787__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635788 === 24))
{var inst_635716 = (state_635787[7]);var inst_635766 = (state_635787[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_635787,23,Object,null,22);var inst_635773 = cljs.core.async.muxch_STAR_.call(null,inst_635766);var state_635787__$1 = state_635787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_635787__$1,25,inst_635773,inst_635716);
} else
{if((state_val_635788 === 25))
{var inst_635775 = (state_635787[2]);var state_635787__$1 = state_635787;var statearr_635827_635862 = state_635787__$1;(statearr_635827_635862[2] = inst_635775);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635787__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_635831 = (new Array(19));(statearr_635831[0] = state_machine__10214__auto__);
(statearr_635831[1] = 1);
return statearr_635831;
});
var state_machine__10214__auto____1 = (function (state_635787){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_635787);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e635832){if((e635832 instanceof Object))
{var ex__10217__auto__ = e635832;var statearr_635833_635863 = state_635787;(statearr_635833_635863[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e635832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__635864 = state_635787;
state_635787 = G__635864;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_635787){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_635787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_635834 = f__10284__auto__.call(null);(statearr_635834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___635835);
return statearr_635834;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___636001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_635971){var state_val_635972 = (state_635971[1]);if((state_val_635972 === 1))
{var state_635971__$1 = state_635971;var statearr_635973_636002 = state_635971__$1;(statearr_635973_636002[2] = null);
(statearr_635973_636002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 2))
{var inst_635934 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_635935 = 0;var state_635971__$1 = (function (){var statearr_635974 = state_635971;(statearr_635974[7] = inst_635935);
(statearr_635974[8] = inst_635934);
return statearr_635974;
})();var statearr_635975_636003 = state_635971__$1;(statearr_635975_636003[2] = null);
(statearr_635975_636003[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 3))
{var inst_635969 = (state_635971[2]);var state_635971__$1 = state_635971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_635971__$1,inst_635969);
} else
{if((state_val_635972 === 4))
{var inst_635935 = (state_635971[7]);var inst_635937 = (inst_635935 < cnt);var state_635971__$1 = state_635971;if(cljs.core.truth_(inst_635937))
{var statearr_635976_636004 = state_635971__$1;(statearr_635976_636004[1] = 6);
} else
{var statearr_635977_636005 = state_635971__$1;(statearr_635977_636005[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 5))
{var inst_635955 = (state_635971[2]);var state_635971__$1 = (function (){var statearr_635978 = state_635971;(statearr_635978[9] = inst_635955);
return statearr_635978;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_635971__$1,12,dchan);
} else
{if((state_val_635972 === 6))
{var state_635971__$1 = state_635971;var statearr_635979_636006 = state_635971__$1;(statearr_635979_636006[2] = null);
(statearr_635979_636006[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 7))
{var state_635971__$1 = state_635971;var statearr_635980_636007 = state_635971__$1;(statearr_635980_636007[2] = null);
(statearr_635980_636007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 8))
{var inst_635953 = (state_635971[2]);var state_635971__$1 = state_635971;var statearr_635981_636008 = state_635971__$1;(statearr_635981_636008[2] = inst_635953);
(statearr_635981_636008[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 9))
{var inst_635935 = (state_635971[7]);var inst_635948 = (state_635971[2]);var inst_635949 = (inst_635935 + 1);var inst_635935__$1 = inst_635949;var state_635971__$1 = (function (){var statearr_635982 = state_635971;(statearr_635982[10] = inst_635948);
(statearr_635982[7] = inst_635935__$1);
return statearr_635982;
})();var statearr_635983_636009 = state_635971__$1;(statearr_635983_636009[2] = null);
(statearr_635983_636009[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 10))
{var inst_635939 = (state_635971[2]);var inst_635940 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_635971__$1 = (function (){var statearr_635984 = state_635971;(statearr_635984[11] = inst_635939);
return statearr_635984;
})();var statearr_635985_636010 = state_635971__$1;(statearr_635985_636010[2] = inst_635940);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635971__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 11))
{var inst_635935 = (state_635971[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_635971,10,Object,null,9);var inst_635944 = chs__$1.call(null,inst_635935);var inst_635945 = done.call(null,inst_635935);var inst_635946 = cljs.core.async.take_BANG_.call(null,inst_635944,inst_635945);var state_635971__$1 = state_635971;var statearr_635986_636011 = state_635971__$1;(statearr_635986_636011[2] = inst_635946);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635971__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 12))
{var inst_635957 = (state_635971[12]);var inst_635957__$1 = (state_635971[2]);var inst_635958 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_635957__$1);var state_635971__$1 = (function (){var statearr_635987 = state_635971;(statearr_635987[12] = inst_635957__$1);
return statearr_635987;
})();if(cljs.core.truth_(inst_635958))
{var statearr_635988_636012 = state_635971__$1;(statearr_635988_636012[1] = 13);
} else
{var statearr_635989_636013 = state_635971__$1;(statearr_635989_636013[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 13))
{var inst_635960 = cljs.core.async.close_BANG_.call(null,out);var state_635971__$1 = state_635971;var statearr_635990_636014 = state_635971__$1;(statearr_635990_636014[2] = inst_635960);
(statearr_635990_636014[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 14))
{var inst_635957 = (state_635971[12]);var inst_635962 = cljs.core.apply.call(null,f,inst_635957);var state_635971__$1 = state_635971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_635971__$1,16,out,inst_635962);
} else
{if((state_val_635972 === 15))
{var inst_635967 = (state_635971[2]);var state_635971__$1 = state_635971;var statearr_635991_636015 = state_635971__$1;(statearr_635991_636015[2] = inst_635967);
(statearr_635991_636015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_635972 === 16))
{var inst_635964 = (state_635971[2]);var state_635971__$1 = (function (){var statearr_635992 = state_635971;(statearr_635992[13] = inst_635964);
return statearr_635992;
})();var statearr_635993_636016 = state_635971__$1;(statearr_635993_636016[2] = null);
(statearr_635993_636016[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_635997 = (new Array(14));(statearr_635997[0] = state_machine__10214__auto__);
(statearr_635997[1] = 1);
return statearr_635997;
});
var state_machine__10214__auto____1 = (function (state_635971){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_635971);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e635998){if((e635998 instanceof Object))
{var ex__10217__auto__ = e635998;var statearr_635999_636017 = state_635971;(statearr_635999_636017[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_635971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e635998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636018 = state_635971;
state_635971 = G__636018;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_635971){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_635971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636000 = f__10284__auto__.call(null);(statearr_636000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636001);
return statearr_636000;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___636126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_636102){var state_val_636103 = (state_636102[1]);if((state_val_636103 === 1))
{var inst_636073 = cljs.core.vec.call(null,chs);var inst_636074 = inst_636073;var state_636102__$1 = (function (){var statearr_636104 = state_636102;(statearr_636104[7] = inst_636074);
return statearr_636104;
})();var statearr_636105_636127 = state_636102__$1;(statearr_636105_636127[2] = null);
(statearr_636105_636127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 2))
{var inst_636074 = (state_636102[7]);var inst_636076 = cljs.core.count.call(null,inst_636074);var inst_636077 = (inst_636076 > 0);var state_636102__$1 = state_636102;if(cljs.core.truth_(inst_636077))
{var statearr_636106_636128 = state_636102__$1;(statearr_636106_636128[1] = 4);
} else
{var statearr_636107_636129 = state_636102__$1;(statearr_636107_636129[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 3))
{var inst_636100 = (state_636102[2]);var state_636102__$1 = state_636102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_636102__$1,inst_636100);
} else
{if((state_val_636103 === 4))
{var inst_636074 = (state_636102[7]);var state_636102__$1 = state_636102;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_636102__$1,7,inst_636074);
} else
{if((state_val_636103 === 5))
{var inst_636096 = cljs.core.async.close_BANG_.call(null,out);var state_636102__$1 = state_636102;var statearr_636108_636130 = state_636102__$1;(statearr_636108_636130[2] = inst_636096);
(statearr_636108_636130[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 6))
{var inst_636098 = (state_636102[2]);var state_636102__$1 = state_636102;var statearr_636109_636131 = state_636102__$1;(statearr_636109_636131[2] = inst_636098);
(statearr_636109_636131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 7))
{var inst_636082 = (state_636102[8]);var inst_636081 = (state_636102[9]);var inst_636081__$1 = (state_636102[2]);var inst_636082__$1 = cljs.core.nth.call(null,inst_636081__$1,0,null);var inst_636083 = cljs.core.nth.call(null,inst_636081__$1,1,null);var inst_636084 = (inst_636082__$1 == null);var state_636102__$1 = (function (){var statearr_636110 = state_636102;(statearr_636110[10] = inst_636083);
(statearr_636110[8] = inst_636082__$1);
(statearr_636110[9] = inst_636081__$1);
return statearr_636110;
})();if(cljs.core.truth_(inst_636084))
{var statearr_636111_636132 = state_636102__$1;(statearr_636111_636132[1] = 8);
} else
{var statearr_636112_636133 = state_636102__$1;(statearr_636112_636133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 8))
{var inst_636083 = (state_636102[10]);var inst_636082 = (state_636102[8]);var inst_636081 = (state_636102[9]);var inst_636074 = (state_636102[7]);var inst_636086 = (function (){var c = inst_636083;var v = inst_636082;var vec__636079 = inst_636081;var cs = inst_636074;return ((function (c,v,vec__636079,cs,inst_636083,inst_636082,inst_636081,inst_636074,state_val_636103){
return (function (p1__636019_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__636019_SHARP_);
});
;})(c,v,vec__636079,cs,inst_636083,inst_636082,inst_636081,inst_636074,state_val_636103))
})();var inst_636087 = cljs.core.filterv.call(null,inst_636086,inst_636074);var inst_636074__$1 = inst_636087;var state_636102__$1 = (function (){var statearr_636113 = state_636102;(statearr_636113[7] = inst_636074__$1);
return statearr_636113;
})();var statearr_636114_636134 = state_636102__$1;(statearr_636114_636134[2] = null);
(statearr_636114_636134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 9))
{var inst_636082 = (state_636102[8]);var state_636102__$1 = state_636102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636102__$1,11,out,inst_636082);
} else
{if((state_val_636103 === 10))
{var inst_636094 = (state_636102[2]);var state_636102__$1 = state_636102;var statearr_636116_636135 = state_636102__$1;(statearr_636116_636135[2] = inst_636094);
(statearr_636116_636135[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636103 === 11))
{var inst_636074 = (state_636102[7]);var inst_636091 = (state_636102[2]);var tmp636115 = inst_636074;var inst_636074__$1 = tmp636115;var state_636102__$1 = (function (){var statearr_636117 = state_636102;(statearr_636117[11] = inst_636091);
(statearr_636117[7] = inst_636074__$1);
return statearr_636117;
})();var statearr_636118_636136 = state_636102__$1;(statearr_636118_636136[2] = null);
(statearr_636118_636136[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_636122 = (new Array(12));(statearr_636122[0] = state_machine__10214__auto__);
(statearr_636122[1] = 1);
return statearr_636122;
});
var state_machine__10214__auto____1 = (function (state_636102){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_636102);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e636123){if((e636123 instanceof Object))
{var ex__10217__auto__ = e636123;var statearr_636124_636137 = state_636102;(statearr_636124_636137[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_636102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e636123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636138 = state_636102;
state_636102 = G__636138;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_636102){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_636102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636125 = f__10284__auto__.call(null);(statearr_636125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636126);
return statearr_636125;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___636231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_636208){var state_val_636209 = (state_636208[1]);if((state_val_636209 === 1))
{var inst_636185 = 0;var state_636208__$1 = (function (){var statearr_636210 = state_636208;(statearr_636210[7] = inst_636185);
return statearr_636210;
})();var statearr_636211_636232 = state_636208__$1;(statearr_636211_636232[2] = null);
(statearr_636211_636232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 2))
{var inst_636185 = (state_636208[7]);var inst_636187 = (inst_636185 < n);var state_636208__$1 = state_636208;if(cljs.core.truth_(inst_636187))
{var statearr_636212_636233 = state_636208__$1;(statearr_636212_636233[1] = 4);
} else
{var statearr_636213_636234 = state_636208__$1;(statearr_636213_636234[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 3))
{var inst_636205 = (state_636208[2]);var inst_636206 = cljs.core.async.close_BANG_.call(null,out);var state_636208__$1 = (function (){var statearr_636214 = state_636208;(statearr_636214[8] = inst_636205);
return statearr_636214;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_636208__$1,inst_636206);
} else
{if((state_val_636209 === 4))
{var state_636208__$1 = state_636208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_636208__$1,7,ch);
} else
{if((state_val_636209 === 5))
{var state_636208__$1 = state_636208;var statearr_636215_636235 = state_636208__$1;(statearr_636215_636235[2] = null);
(statearr_636215_636235[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 6))
{var inst_636203 = (state_636208[2]);var state_636208__$1 = state_636208;var statearr_636216_636236 = state_636208__$1;(statearr_636216_636236[2] = inst_636203);
(statearr_636216_636236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 7))
{var inst_636190 = (state_636208[9]);var inst_636190__$1 = (state_636208[2]);var inst_636191 = (inst_636190__$1 == null);var inst_636192 = cljs.core.not.call(null,inst_636191);var state_636208__$1 = (function (){var statearr_636217 = state_636208;(statearr_636217[9] = inst_636190__$1);
return statearr_636217;
})();if(inst_636192)
{var statearr_636218_636237 = state_636208__$1;(statearr_636218_636237[1] = 8);
} else
{var statearr_636219_636238 = state_636208__$1;(statearr_636219_636238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 8))
{var inst_636190 = (state_636208[9]);var state_636208__$1 = state_636208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636208__$1,11,out,inst_636190);
} else
{if((state_val_636209 === 9))
{var state_636208__$1 = state_636208;var statearr_636220_636239 = state_636208__$1;(statearr_636220_636239[2] = null);
(statearr_636220_636239[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 10))
{var inst_636200 = (state_636208[2]);var state_636208__$1 = state_636208;var statearr_636221_636240 = state_636208__$1;(statearr_636221_636240[2] = inst_636200);
(statearr_636221_636240[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636209 === 11))
{var inst_636185 = (state_636208[7]);var inst_636195 = (state_636208[2]);var inst_636196 = (inst_636185 + 1);var inst_636185__$1 = inst_636196;var state_636208__$1 = (function (){var statearr_636222 = state_636208;(statearr_636222[7] = inst_636185__$1);
(statearr_636222[10] = inst_636195);
return statearr_636222;
})();var statearr_636223_636241 = state_636208__$1;(statearr_636223_636241[2] = null);
(statearr_636223_636241[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_636227 = (new Array(11));(statearr_636227[0] = state_machine__10214__auto__);
(statearr_636227[1] = 1);
return statearr_636227;
});
var state_machine__10214__auto____1 = (function (state_636208){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_636208);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e636228){if((e636228 instanceof Object))
{var ex__10217__auto__ = e636228;var statearr_636229_636242 = state_636208;(statearr_636229_636242[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_636208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e636228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636243 = state_636208;
state_636208 = G__636243;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_636208){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_636208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636230 = f__10284__auto__.call(null);(statearr_636230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636231);
return statearr_636230;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___636340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_636315){var state_val_636316 = (state_636315[1]);if((state_val_636316 === 1))
{var inst_636292 = null;var state_636315__$1 = (function (){var statearr_636317 = state_636315;(statearr_636317[7] = inst_636292);
return statearr_636317;
})();var statearr_636318_636341 = state_636315__$1;(statearr_636318_636341[2] = null);
(statearr_636318_636341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 2))
{var state_636315__$1 = state_636315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_636315__$1,4,ch);
} else
{if((state_val_636316 === 3))
{var inst_636312 = (state_636315[2]);var inst_636313 = cljs.core.async.close_BANG_.call(null,out);var state_636315__$1 = (function (){var statearr_636319 = state_636315;(statearr_636319[8] = inst_636312);
return statearr_636319;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_636315__$1,inst_636313);
} else
{if((state_val_636316 === 4))
{var inst_636295 = (state_636315[9]);var inst_636295__$1 = (state_636315[2]);var inst_636296 = (inst_636295__$1 == null);var inst_636297 = cljs.core.not.call(null,inst_636296);var state_636315__$1 = (function (){var statearr_636320 = state_636315;(statearr_636320[9] = inst_636295__$1);
return statearr_636320;
})();if(inst_636297)
{var statearr_636321_636342 = state_636315__$1;(statearr_636321_636342[1] = 5);
} else
{var statearr_636322_636343 = state_636315__$1;(statearr_636322_636343[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 5))
{var inst_636292 = (state_636315[7]);var inst_636295 = (state_636315[9]);var inst_636299 = cljs.core._EQ_.call(null,inst_636295,inst_636292);var state_636315__$1 = state_636315;if(inst_636299)
{var statearr_636323_636344 = state_636315__$1;(statearr_636323_636344[1] = 8);
} else
{var statearr_636324_636345 = state_636315__$1;(statearr_636324_636345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 6))
{var state_636315__$1 = state_636315;var statearr_636326_636346 = state_636315__$1;(statearr_636326_636346[2] = null);
(statearr_636326_636346[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 7))
{var inst_636310 = (state_636315[2]);var state_636315__$1 = state_636315;var statearr_636327_636347 = state_636315__$1;(statearr_636327_636347[2] = inst_636310);
(statearr_636327_636347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 8))
{var inst_636292 = (state_636315[7]);var tmp636325 = inst_636292;var inst_636292__$1 = tmp636325;var state_636315__$1 = (function (){var statearr_636328 = state_636315;(statearr_636328[7] = inst_636292__$1);
return statearr_636328;
})();var statearr_636329_636348 = state_636315__$1;(statearr_636329_636348[2] = null);
(statearr_636329_636348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 9))
{var inst_636295 = (state_636315[9]);var state_636315__$1 = state_636315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636315__$1,11,out,inst_636295);
} else
{if((state_val_636316 === 10))
{var inst_636307 = (state_636315[2]);var state_636315__$1 = state_636315;var statearr_636330_636349 = state_636315__$1;(statearr_636330_636349[2] = inst_636307);
(statearr_636330_636349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636316 === 11))
{var inst_636295 = (state_636315[9]);var inst_636304 = (state_636315[2]);var inst_636292 = inst_636295;var state_636315__$1 = (function (){var statearr_636331 = state_636315;(statearr_636331[7] = inst_636292);
(statearr_636331[10] = inst_636304);
return statearr_636331;
})();var statearr_636332_636350 = state_636315__$1;(statearr_636332_636350[2] = null);
(statearr_636332_636350[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_636336 = (new Array(11));(statearr_636336[0] = state_machine__10214__auto__);
(statearr_636336[1] = 1);
return statearr_636336;
});
var state_machine__10214__auto____1 = (function (state_636315){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_636315);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e636337){if((e636337 instanceof Object))
{var ex__10217__auto__ = e636337;var statearr_636338_636351 = state_636315;(statearr_636338_636351[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_636315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e636337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636352 = state_636315;
state_636315 = G__636352;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_636315){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_636315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636339 = f__10284__auto__.call(null);(statearr_636339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636340);
return statearr_636339;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___636487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_636457){var state_val_636458 = (state_636457[1]);if((state_val_636458 === 1))
{var inst_636420 = (new Array(n));var inst_636421 = inst_636420;var inst_636422 = 0;var state_636457__$1 = (function (){var statearr_636459 = state_636457;(statearr_636459[7] = inst_636422);
(statearr_636459[8] = inst_636421);
return statearr_636459;
})();var statearr_636460_636488 = state_636457__$1;(statearr_636460_636488[2] = null);
(statearr_636460_636488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 2))
{var state_636457__$1 = state_636457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_636457__$1,4,ch);
} else
{if((state_val_636458 === 3))
{var inst_636455 = (state_636457[2]);var state_636457__$1 = state_636457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_636457__$1,inst_636455);
} else
{if((state_val_636458 === 4))
{var inst_636425 = (state_636457[9]);var inst_636425__$1 = (state_636457[2]);var inst_636426 = (inst_636425__$1 == null);var inst_636427 = cljs.core.not.call(null,inst_636426);var state_636457__$1 = (function (){var statearr_636461 = state_636457;(statearr_636461[9] = inst_636425__$1);
return statearr_636461;
})();if(inst_636427)
{var statearr_636462_636489 = state_636457__$1;(statearr_636462_636489[1] = 5);
} else
{var statearr_636463_636490 = state_636457__$1;(statearr_636463_636490[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 5))
{var inst_636430 = (state_636457[10]);var inst_636425 = (state_636457[9]);var inst_636422 = (state_636457[7]);var inst_636421 = (state_636457[8]);var inst_636429 = (inst_636421[inst_636422] = inst_636425);var inst_636430__$1 = (inst_636422 + 1);var inst_636431 = (inst_636430__$1 < n);var state_636457__$1 = (function (){var statearr_636464 = state_636457;(statearr_636464[10] = inst_636430__$1);
(statearr_636464[11] = inst_636429);
return statearr_636464;
})();if(cljs.core.truth_(inst_636431))
{var statearr_636465_636491 = state_636457__$1;(statearr_636465_636491[1] = 8);
} else
{var statearr_636466_636492 = state_636457__$1;(statearr_636466_636492[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 6))
{var inst_636422 = (state_636457[7]);var inst_636443 = (inst_636422 > 0);var state_636457__$1 = state_636457;if(cljs.core.truth_(inst_636443))
{var statearr_636468_636493 = state_636457__$1;(statearr_636468_636493[1] = 12);
} else
{var statearr_636469_636494 = state_636457__$1;(statearr_636469_636494[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 7))
{var inst_636453 = (state_636457[2]);var state_636457__$1 = state_636457;var statearr_636470_636495 = state_636457__$1;(statearr_636470_636495[2] = inst_636453);
(statearr_636470_636495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 8))
{var inst_636430 = (state_636457[10]);var inst_636421 = (state_636457[8]);var tmp636467 = inst_636421;var inst_636421__$1 = tmp636467;var inst_636422 = inst_636430;var state_636457__$1 = (function (){var statearr_636471 = state_636457;(statearr_636471[7] = inst_636422);
(statearr_636471[8] = inst_636421__$1);
return statearr_636471;
})();var statearr_636472_636496 = state_636457__$1;(statearr_636472_636496[2] = null);
(statearr_636472_636496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 9))
{var inst_636421 = (state_636457[8]);var inst_636435 = cljs.core.vec.call(null,inst_636421);var state_636457__$1 = state_636457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636457__$1,11,out,inst_636435);
} else
{if((state_val_636458 === 10))
{var inst_636441 = (state_636457[2]);var state_636457__$1 = state_636457;var statearr_636473_636497 = state_636457__$1;(statearr_636473_636497[2] = inst_636441);
(statearr_636473_636497[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 11))
{var inst_636437 = (state_636457[2]);var inst_636438 = (new Array(n));var inst_636421 = inst_636438;var inst_636422 = 0;var state_636457__$1 = (function (){var statearr_636474 = state_636457;(statearr_636474[12] = inst_636437);
(statearr_636474[7] = inst_636422);
(statearr_636474[8] = inst_636421);
return statearr_636474;
})();var statearr_636475_636498 = state_636457__$1;(statearr_636475_636498[2] = null);
(statearr_636475_636498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 12))
{var inst_636421 = (state_636457[8]);var inst_636445 = cljs.core.vec.call(null,inst_636421);var state_636457__$1 = state_636457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636457__$1,15,out,inst_636445);
} else
{if((state_val_636458 === 13))
{var state_636457__$1 = state_636457;var statearr_636476_636499 = state_636457__$1;(statearr_636476_636499[2] = null);
(statearr_636476_636499[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 14))
{var inst_636450 = (state_636457[2]);var inst_636451 = cljs.core.async.close_BANG_.call(null,out);var state_636457__$1 = (function (){var statearr_636477 = state_636457;(statearr_636477[13] = inst_636450);
return statearr_636477;
})();var statearr_636478_636500 = state_636457__$1;(statearr_636478_636500[2] = inst_636451);
(statearr_636478_636500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636458 === 15))
{var inst_636447 = (state_636457[2]);var state_636457__$1 = state_636457;var statearr_636479_636501 = state_636457__$1;(statearr_636479_636501[2] = inst_636447);
(statearr_636479_636501[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_636483 = (new Array(14));(statearr_636483[0] = state_machine__10214__auto__);
(statearr_636483[1] = 1);
return statearr_636483;
});
var state_machine__10214__auto____1 = (function (state_636457){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_636457);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e636484){if((e636484 instanceof Object))
{var ex__10217__auto__ = e636484;var statearr_636485_636502 = state_636457;(statearr_636485_636502[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_636457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e636484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636503 = state_636457;
state_636457 = G__636503;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_636457){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_636457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636486 = f__10284__auto__.call(null);(statearr_636486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636487);
return statearr_636486;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___636646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_636616){var state_val_636617 = (state_636616[1]);if((state_val_636617 === 1))
{var inst_636575 = (new Array(0));var inst_636576 = inst_636575;var inst_636577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_636616__$1 = (function (){var statearr_636618 = state_636616;(statearr_636618[7] = inst_636576);
(statearr_636618[8] = inst_636577);
return statearr_636618;
})();var statearr_636619_636647 = state_636616__$1;(statearr_636619_636647[2] = null);
(statearr_636619_636647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 2))
{var state_636616__$1 = state_636616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_636616__$1,4,ch);
} else
{if((state_val_636617 === 3))
{var inst_636614 = (state_636616[2]);var state_636616__$1 = state_636616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_636616__$1,inst_636614);
} else
{if((state_val_636617 === 4))
{var inst_636580 = (state_636616[9]);var inst_636580__$1 = (state_636616[2]);var inst_636581 = (inst_636580__$1 == null);var inst_636582 = cljs.core.not.call(null,inst_636581);var state_636616__$1 = (function (){var statearr_636620 = state_636616;(statearr_636620[9] = inst_636580__$1);
return statearr_636620;
})();if(inst_636582)
{var statearr_636621_636648 = state_636616__$1;(statearr_636621_636648[1] = 5);
} else
{var statearr_636622_636649 = state_636616__$1;(statearr_636622_636649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 5))
{var inst_636580 = (state_636616[9]);var inst_636577 = (state_636616[8]);var inst_636584 = (state_636616[10]);var inst_636584__$1 = f.call(null,inst_636580);var inst_636585 = cljs.core._EQ_.call(null,inst_636584__$1,inst_636577);var inst_636586 = cljs.core.keyword_identical_QMARK_.call(null,inst_636577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_636587 = (inst_636585) || (inst_636586);var state_636616__$1 = (function (){var statearr_636623 = state_636616;(statearr_636623[10] = inst_636584__$1);
return statearr_636623;
})();if(cljs.core.truth_(inst_636587))
{var statearr_636624_636650 = state_636616__$1;(statearr_636624_636650[1] = 8);
} else
{var statearr_636625_636651 = state_636616__$1;(statearr_636625_636651[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 6))
{var inst_636576 = (state_636616[7]);var inst_636601 = inst_636576.length;var inst_636602 = (inst_636601 > 0);var state_636616__$1 = state_636616;if(cljs.core.truth_(inst_636602))
{var statearr_636627_636652 = state_636616__$1;(statearr_636627_636652[1] = 12);
} else
{var statearr_636628_636653 = state_636616__$1;(statearr_636628_636653[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 7))
{var inst_636612 = (state_636616[2]);var state_636616__$1 = state_636616;var statearr_636629_636654 = state_636616__$1;(statearr_636629_636654[2] = inst_636612);
(statearr_636629_636654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 8))
{var inst_636580 = (state_636616[9]);var inst_636576 = (state_636616[7]);var inst_636584 = (state_636616[10]);var inst_636589 = inst_636576.push(inst_636580);var tmp636626 = inst_636576;var inst_636576__$1 = tmp636626;var inst_636577 = inst_636584;var state_636616__$1 = (function (){var statearr_636630 = state_636616;(statearr_636630[7] = inst_636576__$1);
(statearr_636630[8] = inst_636577);
(statearr_636630[11] = inst_636589);
return statearr_636630;
})();var statearr_636631_636655 = state_636616__$1;(statearr_636631_636655[2] = null);
(statearr_636631_636655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 9))
{var inst_636576 = (state_636616[7]);var inst_636592 = cljs.core.vec.call(null,inst_636576);var state_636616__$1 = state_636616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636616__$1,11,out,inst_636592);
} else
{if((state_val_636617 === 10))
{var inst_636599 = (state_636616[2]);var state_636616__$1 = state_636616;var statearr_636632_636656 = state_636616__$1;(statearr_636632_636656[2] = inst_636599);
(statearr_636632_636656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 11))
{var inst_636580 = (state_636616[9]);var inst_636584 = (state_636616[10]);var inst_636594 = (state_636616[2]);var inst_636595 = (new Array(0));var inst_636596 = inst_636595.push(inst_636580);var inst_636576 = inst_636595;var inst_636577 = inst_636584;var state_636616__$1 = (function (){var statearr_636633 = state_636616;(statearr_636633[12] = inst_636594);
(statearr_636633[13] = inst_636596);
(statearr_636633[7] = inst_636576);
(statearr_636633[8] = inst_636577);
return statearr_636633;
})();var statearr_636634_636657 = state_636616__$1;(statearr_636634_636657[2] = null);
(statearr_636634_636657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 12))
{var inst_636576 = (state_636616[7]);var inst_636604 = cljs.core.vec.call(null,inst_636576);var state_636616__$1 = state_636616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_636616__$1,15,out,inst_636604);
} else
{if((state_val_636617 === 13))
{var state_636616__$1 = state_636616;var statearr_636635_636658 = state_636616__$1;(statearr_636635_636658[2] = null);
(statearr_636635_636658[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 14))
{var inst_636609 = (state_636616[2]);var inst_636610 = cljs.core.async.close_BANG_.call(null,out);var state_636616__$1 = (function (){var statearr_636636 = state_636616;(statearr_636636[14] = inst_636609);
return statearr_636636;
})();var statearr_636637_636659 = state_636616__$1;(statearr_636637_636659[2] = inst_636610);
(statearr_636637_636659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_636617 === 15))
{var inst_636606 = (state_636616[2]);var state_636616__$1 = state_636616;var statearr_636638_636660 = state_636616__$1;(statearr_636638_636660[2] = inst_636606);
(statearr_636638_636660[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_636642 = (new Array(15));(statearr_636642[0] = state_machine__10214__auto__);
(statearr_636642[1] = 1);
return statearr_636642;
});
var state_machine__10214__auto____1 = (function (state_636616){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_636616);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e636643){if((e636643 instanceof Object))
{var ex__10217__auto__ = e636643;var statearr_636644_636661 = state_636616;(statearr_636644_636661[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_636616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e636643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__636662 = state_636616;
state_636616 = G__636662;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_636616){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_636616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_636645 = f__10284__auto__.call(null);(statearr_636645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___636646);
return statearr_636645;
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
