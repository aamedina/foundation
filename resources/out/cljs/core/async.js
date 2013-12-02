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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t86261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86261 = (function (f,fn_handler,meta86262){
this.f = f;
this.fn_handler = fn_handler;
this.meta86262 = meta86262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86261.cljs$lang$type = true;
cljs.core.async.t86261.cljs$lang$ctorStr = "cljs.core.async/t86261";
cljs.core.async.t86261.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86261");
});
cljs.core.async.t86261.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t86261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t86261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86263){var self__ = this;
var _86263__$1 = this;return self__.meta86262;
});
cljs.core.async.t86261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86263,meta86262__$1){var self__ = this;
var _86263__$1 = this;return (new cljs.core.async.t86261(self__.f,self__.fn_handler,meta86262__$1));
});
cljs.core.async.__GT_t86261 = (function __GT_t86261(f__$1,fn_handler__$1,meta86262){return (new cljs.core.async.t86261(f__$1,fn_handler__$1,meta86262));
});
}
return (new cljs.core.async.t86261(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__86265 = buff;if(G__86265)
{var bit__8356__auto__ = null;if(cljs.core.truth_((function (){var or__7730__auto__ = bit__8356__auto__;if(cljs.core.truth_(or__7730__auto__))
{return or__7730__auto__;
} else
{return G__86265.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__86265.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__86265);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__86265);
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
{var val_86266 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_86266);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_86266);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__8553__auto___86267 = n;var x_86268 = 0;while(true){
if((x_86268 < n__8553__auto___86267))
{(a[x_86268] = 0);
{
var G__86269 = (x_86268 + 1);
x_86268 = G__86269;
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
var G__86270 = (i + 1);
i = G__86270;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t86274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86274 = (function (flag,alt_flag,meta86275){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta86275 = meta86275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86274.cljs$lang$type = true;
cljs.core.async.t86274.cljs$lang$ctorStr = "cljs.core.async/t86274";
cljs.core.async.t86274.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86274");
});
cljs.core.async.t86274.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86274.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t86274.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t86274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86276){var self__ = this;
var _86276__$1 = this;return self__.meta86275;
});
cljs.core.async.t86274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86276,meta86275__$1){var self__ = this;
var _86276__$1 = this;return (new cljs.core.async.t86274(self__.flag,self__.alt_flag,meta86275__$1));
});
cljs.core.async.__GT_t86274 = (function __GT_t86274(flag__$1,alt_flag__$1,meta86275){return (new cljs.core.async.t86274(flag__$1,alt_flag__$1,meta86275));
});
}
return (new cljs.core.async.t86274(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t86280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86280 = (function (cb,flag,alt_handler,meta86281){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta86281 = meta86281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86280.cljs$lang$type = true;
cljs.core.async.t86280.cljs$lang$ctorStr = "cljs.core.async/t86280";
cljs.core.async.t86280.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86280");
});
cljs.core.async.t86280.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t86280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t86280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86282){var self__ = this;
var _86282__$1 = this;return self__.meta86281;
});
cljs.core.async.t86280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86282,meta86281__$1){var self__ = this;
var _86282__$1 = this;return (new cljs.core.async.t86280(self__.cb,self__.flag,self__.alt_handler,meta86281__$1));
});
cljs.core.async.__GT_t86280 = (function __GT_t86280(cb__$1,flag__$1,alt_handler__$1,meta86281){return (new cljs.core.async.t86280(cb__$1,flag__$1,alt_handler__$1,meta86281));
});
}
return (new cljs.core.async.t86280(cb,flag,alt_handler,null));
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
return (function (p1__86283_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__86283_SHARP_,port], null));
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
var G__86284 = (i + 1);
i = G__86284;
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
var alts_BANG___delegate = function (ports,p__86285){var map__86287 = p__86285;var map__86287__$1 = ((cljs.core.seq_QMARK_.call(null,map__86287))?cljs.core.apply.call(null,cljs.core.hash_map,map__86287):map__86287);var opts = map__86287__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__86285 = null;if (arguments.length > 1) {
  p__86285 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__86285);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__86288){
var ports = cljs.core.first(arglist__86288);
var p__86285 = cljs.core.rest(arglist__86288);
return alts_BANG___delegate(ports,p__86285);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t86296 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86296 = (function (ch,f,map_LT_,meta86297){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta86297 = meta86297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86296.cljs$lang$type = true;
cljs.core.async.t86296.cljs$lang$ctorStr = "cljs.core.async/t86296";
cljs.core.async.t86296.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86296");
});
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t86299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86299 = (function (fn1,_,meta86297,ch,f,map_LT_,meta86300){
this.fn1 = fn1;
this._ = _;
this.meta86297 = meta86297;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta86300 = meta86300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86299.cljs$lang$type = true;
cljs.core.async.t86299.cljs$lang$ctorStr = "cljs.core.async/t86299";
cljs.core.async.t86299.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86299");
});
cljs.core.async.t86299.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t86299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t86299.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t86299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__86289_SHARP_){return f1.call(null,(((p1__86289_SHARP_ == null))?null:self__.f.call(null,p1__86289_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t86299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86301){var self__ = this;
var _86301__$1 = this;return self__.meta86300;
});
cljs.core.async.t86299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86301,meta86300__$1){var self__ = this;
var _86301__$1 = this;return (new cljs.core.async.t86299(self__.fn1,self__._,self__.meta86297,self__.ch,self__.f,self__.map_LT_,meta86300__$1));
});
cljs.core.async.__GT_t86299 = (function __GT_t86299(fn1__$1,___$2,meta86297__$1,ch__$2,f__$2,map_LT___$2,meta86300){return (new cljs.core.async.t86299(fn1__$1,___$2,meta86297__$1,ch__$2,f__$2,map_LT___$2,meta86300));
});
}
return (new cljs.core.async.t86299(fn1,___$1,self__.meta86297,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t86296.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t86296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86298){var self__ = this;
var _86298__$1 = this;return self__.meta86297;
});
cljs.core.async.t86296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86298,meta86297__$1){var self__ = this;
var _86298__$1 = this;return (new cljs.core.async.t86296(self__.ch,self__.f,self__.map_LT_,meta86297__$1));
});
cljs.core.async.__GT_t86296 = (function __GT_t86296(ch__$1,f__$1,map_LT___$1,meta86297){return (new cljs.core.async.t86296(ch__$1,f__$1,map_LT___$1,meta86297));
});
}
return (new cljs.core.async.t86296(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t86305 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86305 = (function (ch,f,map_GT_,meta86306){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta86306 = meta86306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86305.cljs$lang$type = true;
cljs.core.async.t86305.cljs$lang$ctorStr = "cljs.core.async/t86305";
cljs.core.async.t86305.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86305");
});
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t86305.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t86305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86307){var self__ = this;
var _86307__$1 = this;return self__.meta86306;
});
cljs.core.async.t86305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86307,meta86306__$1){var self__ = this;
var _86307__$1 = this;return (new cljs.core.async.t86305(self__.ch,self__.f,self__.map_GT_,meta86306__$1));
});
cljs.core.async.__GT_t86305 = (function __GT_t86305(ch__$1,f__$1,map_GT___$1,meta86306){return (new cljs.core.async.t86305(ch__$1,f__$1,map_GT___$1,meta86306));
});
}
return (new cljs.core.async.t86305(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t86311 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86311 = (function (ch,p,filter_GT_,meta86312){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta86312 = meta86312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86311.cljs$lang$type = true;
cljs.core.async.t86311.cljs$lang$ctorStr = "cljs.core.async/t86311";
cljs.core.async.t86311.cljs$lang$ctorPrWriter = (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t86311");
});
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t86311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t86311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86313){var self__ = this;
var _86313__$1 = this;return self__.meta86312;
});
cljs.core.async.t86311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86313,meta86312__$1){var self__ = this;
var _86313__$1 = this;return (new cljs.core.async.t86311(self__.ch,self__.p,self__.filter_GT_,meta86312__$1));
});
cljs.core.async.__GT_t86311 = (function __GT_t86311(ch__$1,p__$1,filter_GT___$1,meta86312){return (new cljs.core.async.t86311(ch__$1,p__$1,filter_GT___$1,meta86312));
});
}
return (new cljs.core.async.t86311(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___86396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86375){var state_val_86376 = (state_86375[1]);if((state_val_86376 === 1))
{var state_86375__$1 = state_86375;var statearr_86377_86397 = state_86375__$1;(statearr_86377_86397[2] = null);
(statearr_86377_86397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 2))
{var state_86375__$1 = state_86375;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86375__$1,4,ch);
} else
{if((state_val_86376 === 3))
{var inst_86373 = (state_86375[2]);var state_86375__$1 = state_86375;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86375__$1,inst_86373);
} else
{if((state_val_86376 === 4))
{var inst_86357 = (state_86375[7]);var inst_86357__$1 = (state_86375[2]);var inst_86358 = (inst_86357__$1 == null);var state_86375__$1 = (function (){var statearr_86378 = state_86375;(statearr_86378[7] = inst_86357__$1);
return statearr_86378;
})();if(cljs.core.truth_(inst_86358))
{var statearr_86379_86398 = state_86375__$1;(statearr_86379_86398[1] = 5);
} else
{var statearr_86380_86399 = state_86375__$1;(statearr_86380_86399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 5))
{var inst_86360 = cljs.core.async.close_BANG_.call(null,out);var state_86375__$1 = state_86375;var statearr_86381_86400 = state_86375__$1;(statearr_86381_86400[2] = inst_86360);
(statearr_86381_86400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 6))
{var inst_86357 = (state_86375[7]);var inst_86362 = p.call(null,inst_86357);var state_86375__$1 = state_86375;if(cljs.core.truth_(inst_86362))
{var statearr_86382_86401 = state_86375__$1;(statearr_86382_86401[1] = 8);
} else
{var statearr_86383_86402 = state_86375__$1;(statearr_86383_86402[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 7))
{var inst_86371 = (state_86375[2]);var state_86375__$1 = state_86375;var statearr_86384_86403 = state_86375__$1;(statearr_86384_86403[2] = inst_86371);
(statearr_86384_86403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 8))
{var inst_86357 = (state_86375[7]);var state_86375__$1 = state_86375;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86375__$1,11,out,inst_86357);
} else
{if((state_val_86376 === 9))
{var state_86375__$1 = state_86375;var statearr_86385_86404 = state_86375__$1;(statearr_86385_86404[2] = null);
(statearr_86385_86404[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 10))
{var inst_86368 = (state_86375[2]);var state_86375__$1 = (function (){var statearr_86386 = state_86375;(statearr_86386[8] = inst_86368);
return statearr_86386;
})();var statearr_86387_86405 = state_86375__$1;(statearr_86387_86405[2] = null);
(statearr_86387_86405[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86376 === 11))
{var inst_86365 = (state_86375[2]);var state_86375__$1 = state_86375;var statearr_86388_86406 = state_86375__$1;(statearr_86388_86406[2] = inst_86365);
(statearr_86388_86406[1] = 10);
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
var state_machine__10214__auto____0 = (function (){var statearr_86392 = (new Array(9));(statearr_86392[0] = state_machine__10214__auto__);
(statearr_86392[1] = 1);
return statearr_86392;
});
var state_machine__10214__auto____1 = (function (state_86375){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86375);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86393){if((e86393 instanceof Object))
{var ex__10217__auto__ = e86393;var statearr_86394_86407 = state_86375;(statearr_86394_86407[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86375);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86408 = state_86375;
state_86375 = G__86408;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86375){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86395 = f__10284__auto__.call(null);(statearr_86395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___86396);
return statearr_86395;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86560){var state_val_86561 = (state_86560[1]);if((state_val_86561 === 1))
{var state_86560__$1 = state_86560;var statearr_86562_86599 = state_86560__$1;(statearr_86562_86599[2] = null);
(statearr_86562_86599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 2))
{var state_86560__$1 = state_86560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86560__$1,4,in$);
} else
{if((state_val_86561 === 3))
{var inst_86558 = (state_86560[2]);var state_86560__$1 = state_86560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86560__$1,inst_86558);
} else
{if((state_val_86561 === 4))
{var inst_86506 = (state_86560[7]);var inst_86506__$1 = (state_86560[2]);var inst_86507 = (inst_86506__$1 == null);var state_86560__$1 = (function (){var statearr_86563 = state_86560;(statearr_86563[7] = inst_86506__$1);
return statearr_86563;
})();if(cljs.core.truth_(inst_86507))
{var statearr_86564_86600 = state_86560__$1;(statearr_86564_86600[1] = 5);
} else
{var statearr_86565_86601 = state_86560__$1;(statearr_86565_86601[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 5))
{var inst_86509 = cljs.core.async.close_BANG_.call(null,out);var state_86560__$1 = state_86560;var statearr_86566_86602 = state_86560__$1;(statearr_86566_86602[2] = inst_86509);
(statearr_86566_86602[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 6))
{var inst_86506 = (state_86560[7]);var inst_86511 = f.call(null,inst_86506);var inst_86516 = cljs.core.seq.call(null,inst_86511);var inst_86517 = inst_86516;var inst_86518 = null;var inst_86519 = 0;var inst_86520 = 0;var state_86560__$1 = (function (){var statearr_86567 = state_86560;(statearr_86567[8] = inst_86519);
(statearr_86567[9] = inst_86517);
(statearr_86567[10] = inst_86518);
(statearr_86567[11] = inst_86520);
return statearr_86567;
})();var statearr_86568_86603 = state_86560__$1;(statearr_86568_86603[2] = null);
(statearr_86568_86603[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 7))
{var inst_86556 = (state_86560[2]);var state_86560__$1 = state_86560;var statearr_86569_86604 = state_86560__$1;(statearr_86569_86604[2] = inst_86556);
(statearr_86569_86604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 8))
{var inst_86519 = (state_86560[8]);var inst_86520 = (state_86560[11]);var inst_86522 = (inst_86520 < inst_86519);var inst_86523 = inst_86522;var state_86560__$1 = state_86560;if(cljs.core.truth_(inst_86523))
{var statearr_86570_86605 = state_86560__$1;(statearr_86570_86605[1] = 10);
} else
{var statearr_86571_86606 = state_86560__$1;(statearr_86571_86606[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 9))
{var inst_86553 = (state_86560[2]);var state_86560__$1 = (function (){var statearr_86572 = state_86560;(statearr_86572[12] = inst_86553);
return statearr_86572;
})();var statearr_86573_86607 = state_86560__$1;(statearr_86573_86607[2] = null);
(statearr_86573_86607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 10))
{var inst_86518 = (state_86560[10]);var inst_86520 = (state_86560[11]);var inst_86525 = cljs.core._nth.call(null,inst_86518,inst_86520);var state_86560__$1 = state_86560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86560__$1,13,out,inst_86525);
} else
{if((state_val_86561 === 11))
{var inst_86517 = (state_86560[9]);var inst_86531 = (state_86560[13]);var inst_86531__$1 = cljs.core.seq.call(null,inst_86517);var state_86560__$1 = (function (){var statearr_86577 = state_86560;(statearr_86577[13] = inst_86531__$1);
return statearr_86577;
})();if(inst_86531__$1)
{var statearr_86578_86608 = state_86560__$1;(statearr_86578_86608[1] = 14);
} else
{var statearr_86579_86609 = state_86560__$1;(statearr_86579_86609[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 12))
{var inst_86551 = (state_86560[2]);var state_86560__$1 = state_86560;var statearr_86580_86610 = state_86560__$1;(statearr_86580_86610[2] = inst_86551);
(statearr_86580_86610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 13))
{var inst_86519 = (state_86560[8]);var inst_86517 = (state_86560[9]);var inst_86518 = (state_86560[10]);var inst_86520 = (state_86560[11]);var inst_86527 = (state_86560[2]);var inst_86528 = (inst_86520 + 1);var tmp86574 = inst_86519;var tmp86575 = inst_86517;var tmp86576 = inst_86518;var inst_86517__$1 = tmp86575;var inst_86518__$1 = tmp86576;var inst_86519__$1 = tmp86574;var inst_86520__$1 = inst_86528;var state_86560__$1 = (function (){var statearr_86581 = state_86560;(statearr_86581[8] = inst_86519__$1);
(statearr_86581[9] = inst_86517__$1);
(statearr_86581[10] = inst_86518__$1);
(statearr_86581[14] = inst_86527);
(statearr_86581[11] = inst_86520__$1);
return statearr_86581;
})();var statearr_86582_86611 = state_86560__$1;(statearr_86582_86611[2] = null);
(statearr_86582_86611[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 14))
{var inst_86531 = (state_86560[13]);var inst_86533 = cljs.core.chunked_seq_QMARK_.call(null,inst_86531);var state_86560__$1 = state_86560;if(inst_86533)
{var statearr_86583_86612 = state_86560__$1;(statearr_86583_86612[1] = 17);
} else
{var statearr_86584_86613 = state_86560__$1;(statearr_86584_86613[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 15))
{var state_86560__$1 = state_86560;var statearr_86585_86614 = state_86560__$1;(statearr_86585_86614[2] = null);
(statearr_86585_86614[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 16))
{var inst_86549 = (state_86560[2]);var state_86560__$1 = state_86560;var statearr_86586_86615 = state_86560__$1;(statearr_86586_86615[2] = inst_86549);
(statearr_86586_86615[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 17))
{var inst_86531 = (state_86560[13]);var inst_86535 = cljs.core.chunk_first.call(null,inst_86531);var inst_86536 = cljs.core.chunk_rest.call(null,inst_86531);var inst_86537 = cljs.core.count.call(null,inst_86535);var inst_86517 = inst_86536;var inst_86518 = inst_86535;var inst_86519 = inst_86537;var inst_86520 = 0;var state_86560__$1 = (function (){var statearr_86587 = state_86560;(statearr_86587[8] = inst_86519);
(statearr_86587[9] = inst_86517);
(statearr_86587[10] = inst_86518);
(statearr_86587[11] = inst_86520);
return statearr_86587;
})();var statearr_86588_86616 = state_86560__$1;(statearr_86588_86616[2] = null);
(statearr_86588_86616[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 18))
{var inst_86531 = (state_86560[13]);var inst_86540 = cljs.core.first.call(null,inst_86531);var state_86560__$1 = state_86560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86560__$1,20,out,inst_86540);
} else
{if((state_val_86561 === 19))
{var inst_86546 = (state_86560[2]);var state_86560__$1 = state_86560;var statearr_86589_86617 = state_86560__$1;(statearr_86589_86617[2] = inst_86546);
(statearr_86589_86617[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86561 === 20))
{var inst_86531 = (state_86560[13]);var inst_86542 = (state_86560[2]);var inst_86543 = cljs.core.next.call(null,inst_86531);var inst_86517 = inst_86543;var inst_86518 = null;var inst_86519 = 0;var inst_86520 = 0;var state_86560__$1 = (function (){var statearr_86590 = state_86560;(statearr_86590[15] = inst_86542);
(statearr_86590[8] = inst_86519);
(statearr_86590[9] = inst_86517);
(statearr_86590[10] = inst_86518);
(statearr_86590[11] = inst_86520);
return statearr_86590;
})();var statearr_86591_86618 = state_86560__$1;(statearr_86591_86618[2] = null);
(statearr_86591_86618[1] = 8);
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
var state_machine__10214__auto____0 = (function (){var statearr_86595 = (new Array(16));(statearr_86595[0] = state_machine__10214__auto__);
(statearr_86595[1] = 1);
return statearr_86595;
});
var state_machine__10214__auto____1 = (function (state_86560){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86560);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86596){if((e86596 instanceof Object))
{var ex__10217__auto__ = e86596;var statearr_86597_86619 = state_86560;(statearr_86597_86619[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86620 = state_86560;
state_86560 = G__86620;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86560){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86598 = f__10284__auto__.call(null);(statearr_86598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_86598;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__10283__auto___86701 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86680){var state_val_86681 = (state_86680[1]);if((state_val_86681 === 1))
{var state_86680__$1 = state_86680;var statearr_86682_86702 = state_86680__$1;(statearr_86682_86702[2] = null);
(statearr_86682_86702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 2))
{var state_86680__$1 = state_86680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86680__$1,4,from);
} else
{if((state_val_86681 === 3))
{var inst_86678 = (state_86680[2]);var state_86680__$1 = state_86680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86680__$1,inst_86678);
} else
{if((state_val_86681 === 4))
{var inst_86663 = (state_86680[7]);var inst_86663__$1 = (state_86680[2]);var inst_86664 = (inst_86663__$1 == null);var state_86680__$1 = (function (){var statearr_86683 = state_86680;(statearr_86683[7] = inst_86663__$1);
return statearr_86683;
})();if(cljs.core.truth_(inst_86664))
{var statearr_86684_86703 = state_86680__$1;(statearr_86684_86703[1] = 5);
} else
{var statearr_86685_86704 = state_86680__$1;(statearr_86685_86704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 5))
{var state_86680__$1 = state_86680;if(cljs.core.truth_(close_QMARK_))
{var statearr_86686_86705 = state_86680__$1;(statearr_86686_86705[1] = 8);
} else
{var statearr_86687_86706 = state_86680__$1;(statearr_86687_86706[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 6))
{var inst_86663 = (state_86680[7]);var state_86680__$1 = state_86680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86680__$1,11,to,inst_86663);
} else
{if((state_val_86681 === 7))
{var inst_86676 = (state_86680[2]);var state_86680__$1 = state_86680;var statearr_86688_86707 = state_86680__$1;(statearr_86688_86707[2] = inst_86676);
(statearr_86688_86707[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 8))
{var inst_86667 = cljs.core.async.close_BANG_.call(null,to);var state_86680__$1 = state_86680;var statearr_86689_86708 = state_86680__$1;(statearr_86689_86708[2] = inst_86667);
(statearr_86689_86708[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 9))
{var state_86680__$1 = state_86680;var statearr_86690_86709 = state_86680__$1;(statearr_86690_86709[2] = null);
(statearr_86690_86709[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 10))
{var inst_86670 = (state_86680[2]);var state_86680__$1 = state_86680;var statearr_86691_86710 = state_86680__$1;(statearr_86691_86710[2] = inst_86670);
(statearr_86691_86710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86681 === 11))
{var inst_86673 = (state_86680[2]);var state_86680__$1 = (function (){var statearr_86692 = state_86680;(statearr_86692[8] = inst_86673);
return statearr_86692;
})();var statearr_86693_86711 = state_86680__$1;(statearr_86693_86711[2] = null);
(statearr_86693_86711[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_86697 = (new Array(9));(statearr_86697[0] = state_machine__10214__auto__);
(statearr_86697[1] = 1);
return statearr_86697;
});
var state_machine__10214__auto____1 = (function (state_86680){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86680);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86698){if((e86698 instanceof Object))
{var ex__10217__auto__ = e86698;var statearr_86699_86712 = state_86680;(statearr_86699_86712[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86713 = state_86680;
state_86680 = G__86713;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86680){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86700 = f__10284__auto__.call(null);(statearr_86700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___86701);
return statearr_86700;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10283__auto___86800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86778){var state_val_86779 = (state_86778[1]);if((state_val_86779 === 1))
{var state_86778__$1 = state_86778;var statearr_86780_86801 = state_86778__$1;(statearr_86780_86801[2] = null);
(statearr_86780_86801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 2))
{var state_86778__$1 = state_86778;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86778__$1,4,ch);
} else
{if((state_val_86779 === 3))
{var inst_86776 = (state_86778[2]);var state_86778__$1 = state_86778;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86778__$1,inst_86776);
} else
{if((state_val_86779 === 4))
{var inst_86759 = (state_86778[7]);var inst_86759__$1 = (state_86778[2]);var inst_86760 = (inst_86759__$1 == null);var state_86778__$1 = (function (){var statearr_86781 = state_86778;(statearr_86781[7] = inst_86759__$1);
return statearr_86781;
})();if(cljs.core.truth_(inst_86760))
{var statearr_86782_86802 = state_86778__$1;(statearr_86782_86802[1] = 5);
} else
{var statearr_86783_86803 = state_86778__$1;(statearr_86783_86803[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 5))
{var inst_86762 = cljs.core.async.close_BANG_.call(null,tc);var inst_86763 = cljs.core.async.close_BANG_.call(null,fc);var state_86778__$1 = (function (){var statearr_86784 = state_86778;(statearr_86784[8] = inst_86762);
return statearr_86784;
})();var statearr_86785_86804 = state_86778__$1;(statearr_86785_86804[2] = inst_86763);
(statearr_86785_86804[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 6))
{var inst_86759 = (state_86778[7]);var inst_86765 = p.call(null,inst_86759);var state_86778__$1 = state_86778;if(cljs.core.truth_(inst_86765))
{var statearr_86786_86805 = state_86778__$1;(statearr_86786_86805[1] = 9);
} else
{var statearr_86787_86806 = state_86778__$1;(statearr_86787_86806[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 7))
{var inst_86774 = (state_86778[2]);var state_86778__$1 = state_86778;var statearr_86788_86807 = state_86778__$1;(statearr_86788_86807[2] = inst_86774);
(statearr_86788_86807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 8))
{var inst_86771 = (state_86778[2]);var state_86778__$1 = (function (){var statearr_86789 = state_86778;(statearr_86789[9] = inst_86771);
return statearr_86789;
})();var statearr_86790_86808 = state_86778__$1;(statearr_86790_86808[2] = null);
(statearr_86790_86808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 9))
{var state_86778__$1 = state_86778;var statearr_86791_86809 = state_86778__$1;(statearr_86791_86809[2] = tc);
(statearr_86791_86809[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 10))
{var state_86778__$1 = state_86778;var statearr_86792_86810 = state_86778__$1;(statearr_86792_86810[2] = fc);
(statearr_86792_86810[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86779 === 11))
{var inst_86759 = (state_86778[7]);var inst_86769 = (state_86778[2]);var state_86778__$1 = state_86778;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86778__$1,8,inst_86769,inst_86759);
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
var state_machine__10214__auto____0 = (function (){var statearr_86796 = (new Array(10));(statearr_86796[0] = state_machine__10214__auto__);
(statearr_86796[1] = 1);
return statearr_86796;
});
var state_machine__10214__auto____1 = (function (state_86778){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86778);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86797){if((e86797 instanceof Object))
{var ex__10217__auto__ = e86797;var statearr_86798_86811 = state_86778;(statearr_86798_86811[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86778);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86812 = state_86778;
state_86778 = G__86812;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86778){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86799 = f__10284__auto__.call(null);(statearr_86799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___86800);
return statearr_86799;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86859){var state_val_86860 = (state_86859[1]);if((state_val_86860 === 7))
{var inst_86855 = (state_86859[2]);var state_86859__$1 = state_86859;var statearr_86861_86877 = state_86859__$1;(statearr_86861_86877[2] = inst_86855);
(statearr_86861_86877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86860 === 6))
{var inst_86845 = (state_86859[7]);var inst_86848 = (state_86859[8]);var inst_86852 = f.call(null,inst_86845,inst_86848);var inst_86845__$1 = inst_86852;var state_86859__$1 = (function (){var statearr_86862 = state_86859;(statearr_86862[7] = inst_86845__$1);
return statearr_86862;
})();var statearr_86863_86878 = state_86859__$1;(statearr_86863_86878[2] = null);
(statearr_86863_86878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86860 === 5))
{var inst_86845 = (state_86859[7]);var state_86859__$1 = state_86859;var statearr_86864_86879 = state_86859__$1;(statearr_86864_86879[2] = inst_86845);
(statearr_86864_86879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86860 === 4))
{var inst_86848 = (state_86859[8]);var inst_86848__$1 = (state_86859[2]);var inst_86849 = (inst_86848__$1 == null);var state_86859__$1 = (function (){var statearr_86865 = state_86859;(statearr_86865[8] = inst_86848__$1);
return statearr_86865;
})();if(cljs.core.truth_(inst_86849))
{var statearr_86866_86880 = state_86859__$1;(statearr_86866_86880[1] = 5);
} else
{var statearr_86867_86881 = state_86859__$1;(statearr_86867_86881[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86860 === 3))
{var inst_86857 = (state_86859[2]);var state_86859__$1 = state_86859;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86859__$1,inst_86857);
} else
{if((state_val_86860 === 2))
{var state_86859__$1 = state_86859;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86859__$1,4,ch);
} else
{if((state_val_86860 === 1))
{var inst_86845 = init;var state_86859__$1 = (function (){var statearr_86868 = state_86859;(statearr_86868[7] = inst_86845);
return statearr_86868;
})();var statearr_86869_86882 = state_86859__$1;(statearr_86869_86882[2] = null);
(statearr_86869_86882[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_86873 = (new Array(9));(statearr_86873[0] = state_machine__10214__auto__);
(statearr_86873[1] = 1);
return statearr_86873;
});
var state_machine__10214__auto____1 = (function (state_86859){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86859);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86874){if((e86874 instanceof Object))
{var ex__10217__auto__ = e86874;var statearr_86875_86883 = state_86859;(statearr_86875_86883[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86859);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86874;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86884 = state_86859;
state_86859 = G__86884;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86859){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86876 = f__10284__auto__.call(null);(statearr_86876[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_86876;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10283__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_86946){var state_val_86947 = (state_86946[1]);if((state_val_86947 === 1))
{var inst_86926 = cljs.core.seq.call(null,coll);var inst_86927 = inst_86926;var state_86946__$1 = (function (){var statearr_86948 = state_86946;(statearr_86948[7] = inst_86927);
return statearr_86948;
})();var statearr_86949_86967 = state_86946__$1;(statearr_86949_86967[2] = null);
(statearr_86949_86967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 2))
{var inst_86927 = (state_86946[7]);var state_86946__$1 = state_86946;if(cljs.core.truth_(inst_86927))
{var statearr_86950_86968 = state_86946__$1;(statearr_86950_86968[1] = 4);
} else
{var statearr_86951_86969 = state_86946__$1;(statearr_86951_86969[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 3))
{var inst_86944 = (state_86946[2]);var state_86946__$1 = state_86946;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86946__$1,inst_86944);
} else
{if((state_val_86947 === 4))
{var inst_86927 = (state_86946[7]);var inst_86930 = cljs.core.first.call(null,inst_86927);var state_86946__$1 = state_86946;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86946__$1,7,ch,inst_86930);
} else
{if((state_val_86947 === 5))
{var state_86946__$1 = state_86946;if(cljs.core.truth_(close_QMARK_))
{var statearr_86952_86970 = state_86946__$1;(statearr_86952_86970[1] = 8);
} else
{var statearr_86953_86971 = state_86946__$1;(statearr_86953_86971[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 6))
{var inst_86942 = (state_86946[2]);var state_86946__$1 = state_86946;var statearr_86954_86972 = state_86946__$1;(statearr_86954_86972[2] = inst_86942);
(statearr_86954_86972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 7))
{var inst_86927 = (state_86946[7]);var inst_86932 = (state_86946[2]);var inst_86933 = cljs.core.next.call(null,inst_86927);var inst_86927__$1 = inst_86933;var state_86946__$1 = (function (){var statearr_86955 = state_86946;(statearr_86955[7] = inst_86927__$1);
(statearr_86955[8] = inst_86932);
return statearr_86955;
})();var statearr_86956_86973 = state_86946__$1;(statearr_86956_86973[2] = null);
(statearr_86956_86973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 8))
{var inst_86937 = cljs.core.async.close_BANG_.call(null,ch);var state_86946__$1 = state_86946;var statearr_86957_86974 = state_86946__$1;(statearr_86957_86974[2] = inst_86937);
(statearr_86957_86974[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 9))
{var state_86946__$1 = state_86946;var statearr_86958_86975 = state_86946__$1;(statearr_86958_86975[2] = null);
(statearr_86958_86975[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86947 === 10))
{var inst_86940 = (state_86946[2]);var state_86946__$1 = state_86946;var statearr_86959_86976 = state_86946__$1;(statearr_86959_86976[2] = inst_86940);
(statearr_86959_86976[1] = 6);
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
var state_machine__10214__auto____0 = (function (){var statearr_86963 = (new Array(9));(statearr_86963[0] = state_machine__10214__auto__);
(statearr_86963[1] = 1);
return statearr_86963;
});
var state_machine__10214__auto____1 = (function (state_86946){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_86946);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e86964){if((e86964 instanceof Object))
{var ex__10217__auto__ = e86964;var statearr_86965_86977 = state_86946;(statearr_86965_86977[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86946);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86978 = state_86946;
state_86946 = G__86978;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_86946){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_86946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_86966 = f__10284__auto__.call(null);(statearr_86966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto__);
return statearr_86966;
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
cljs.core.async.Mux = (function (){var obj86980 = {};return obj86980;
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
cljs.core.async.Mult = (function (){var obj86982 = {};return obj86982;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t87197 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87197 = (function (cs,ch,mult,meta87198){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta87198 = meta87198;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87197.cljs$lang$type = true;
cljs.core.async.t87197.cljs$lang$ctorStr = "cljs.core.async/t87197";
cljs.core.async.t87197.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t87197");
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t87197.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_87199){var self__ = this;
var _87199__$1 = this;return self__.meta87198;
});})(cs))
;
cljs.core.async.t87197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_87199,meta87198__$1){var self__ = this;
var _87199__$1 = this;return (new cljs.core.async.t87197(self__.cs,self__.ch,self__.mult,meta87198__$1));
});})(cs))
;
cljs.core.async.__GT_t87197 = ((function (cs){
return (function __GT_t87197(cs__$1,ch__$1,mult__$1,meta87198){return (new cljs.core.async.t87197(cs__$1,ch__$1,mult__$1,meta87198));
});})(cs))
;
}
return (new cljs.core.async.t87197(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10283__auto___87411 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_87329){var state_val_87330 = (state_87329[1]);if((state_val_87330 === 32))
{var inst_87278 = (state_87329[7]);var inst_87202 = (state_87329[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_87329,31,Object,null,30);var inst_87285 = cljs.core.async.put_BANG_.call(null,inst_87278,inst_87202,done);var state_87329__$1 = state_87329;var statearr_87331_87412 = state_87329__$1;(statearr_87331_87412[2] = inst_87285);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87329__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 1))
{var state_87329__$1 = state_87329;var statearr_87332_87413 = state_87329__$1;(statearr_87332_87413[2] = null);
(statearr_87332_87413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 33))
{var inst_87291 = (state_87329[9]);var inst_87293 = cljs.core.chunked_seq_QMARK_.call(null,inst_87291);var state_87329__$1 = state_87329;if(inst_87293)
{var statearr_87333_87414 = state_87329__$1;(statearr_87333_87414[1] = 36);
} else
{var statearr_87334_87415 = state_87329__$1;(statearr_87334_87415[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 2))
{var state_87329__$1 = state_87329;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87329__$1,4,ch);
} else
{if((state_val_87330 === 34))
{var state_87329__$1 = state_87329;var statearr_87335_87416 = state_87329__$1;(statearr_87335_87416[2] = null);
(statearr_87335_87416[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 3))
{var inst_87327 = (state_87329[2]);var state_87329__$1 = state_87329;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87329__$1,inst_87327);
} else
{if((state_val_87330 === 35))
{var inst_87316 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87336_87417 = state_87329__$1;(statearr_87336_87417[2] = inst_87316);
(statearr_87336_87417[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 4))
{var inst_87202 = (state_87329[8]);var inst_87202__$1 = (state_87329[2]);var inst_87203 = (inst_87202__$1 == null);var state_87329__$1 = (function (){var statearr_87337 = state_87329;(statearr_87337[8] = inst_87202__$1);
return statearr_87337;
})();if(cljs.core.truth_(inst_87203))
{var statearr_87338_87418 = state_87329__$1;(statearr_87338_87418[1] = 5);
} else
{var statearr_87339_87419 = state_87329__$1;(statearr_87339_87419[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 36))
{var inst_87291 = (state_87329[9]);var inst_87295 = cljs.core.chunk_first.call(null,inst_87291);var inst_87296 = cljs.core.chunk_rest.call(null,inst_87291);var inst_87297 = cljs.core.count.call(null,inst_87295);var inst_87270 = inst_87296;var inst_87271 = inst_87295;var inst_87272 = inst_87297;var inst_87273 = 0;var state_87329__$1 = (function (){var statearr_87340 = state_87329;(statearr_87340[10] = inst_87273);
(statearr_87340[11] = inst_87271);
(statearr_87340[12] = inst_87272);
(statearr_87340[13] = inst_87270);
return statearr_87340;
})();var statearr_87341_87420 = state_87329__$1;(statearr_87341_87420[2] = null);
(statearr_87341_87420[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 5))
{var inst_87209 = cljs.core.deref.call(null,cs);var inst_87210 = cljs.core.seq.call(null,inst_87209);var inst_87211 = inst_87210;var inst_87212 = null;var inst_87213 = 0;var inst_87214 = 0;var state_87329__$1 = (function (){var statearr_87342 = state_87329;(statearr_87342[14] = inst_87213);
(statearr_87342[15] = inst_87214);
(statearr_87342[16] = inst_87212);
(statearr_87342[17] = inst_87211);
return statearr_87342;
})();var statearr_87343_87421 = state_87329__$1;(statearr_87343_87421[2] = null);
(statearr_87343_87421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 37))
{var inst_87291 = (state_87329[9]);var inst_87300 = cljs.core.first.call(null,inst_87291);var state_87329__$1 = (function (){var statearr_87344 = state_87329;(statearr_87344[18] = inst_87300);
return statearr_87344;
})();var statearr_87345_87422 = state_87329__$1;(statearr_87345_87422[2] = null);
(statearr_87345_87422[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 6))
{var inst_87261 = cljs.core.deref.call(null,cs);var inst_87262 = cljs.core.keys.call(null,inst_87261);var inst_87263 = cljs.core.count.call(null,inst_87262);var inst_87264 = cljs.core.reset_BANG_.call(null,dctr,inst_87263);var inst_87269 = cljs.core.seq.call(null,inst_87262);var inst_87270 = inst_87269;var inst_87271 = null;var inst_87272 = 0;var inst_87273 = 0;var state_87329__$1 = (function (){var statearr_87346 = state_87329;(statearr_87346[10] = inst_87273);
(statearr_87346[11] = inst_87271);
(statearr_87346[12] = inst_87272);
(statearr_87346[13] = inst_87270);
(statearr_87346[19] = inst_87264);
return statearr_87346;
})();var statearr_87347_87423 = state_87329__$1;(statearr_87347_87423[2] = null);
(statearr_87347_87423[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 38))
{var inst_87313 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87348_87424 = state_87329__$1;(statearr_87348_87424[2] = inst_87313);
(statearr_87348_87424[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 7))
{var inst_87325 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87349_87425 = state_87329__$1;(statearr_87349_87425[2] = inst_87325);
(statearr_87349_87425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 39))
{var inst_87291 = (state_87329[9]);var inst_87309 = (state_87329[2]);var inst_87310 = cljs.core.next.call(null,inst_87291);var inst_87270 = inst_87310;var inst_87271 = null;var inst_87272 = 0;var inst_87273 = 0;var state_87329__$1 = (function (){var statearr_87350 = state_87329;(statearr_87350[10] = inst_87273);
(statearr_87350[11] = inst_87271);
(statearr_87350[12] = inst_87272);
(statearr_87350[13] = inst_87270);
(statearr_87350[20] = inst_87309);
return statearr_87350;
})();var statearr_87351_87426 = state_87329__$1;(statearr_87351_87426[2] = null);
(statearr_87351_87426[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 8))
{var inst_87213 = (state_87329[14]);var inst_87214 = (state_87329[15]);var inst_87216 = (inst_87214 < inst_87213);var inst_87217 = inst_87216;var state_87329__$1 = state_87329;if(cljs.core.truth_(inst_87217))
{var statearr_87352_87427 = state_87329__$1;(statearr_87352_87427[1] = 10);
} else
{var statearr_87353_87428 = state_87329__$1;(statearr_87353_87428[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 40))
{var inst_87300 = (state_87329[18]);var inst_87301 = (state_87329[2]);var inst_87302 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_87303 = cljs.core.async.untap_STAR_.call(null,m,inst_87300);var state_87329__$1 = (function (){var statearr_87354 = state_87329;(statearr_87354[21] = inst_87301);
(statearr_87354[22] = inst_87302);
return statearr_87354;
})();var statearr_87355_87429 = state_87329__$1;(statearr_87355_87429[2] = inst_87303);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87329__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 9))
{var inst_87259 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87356_87430 = state_87329__$1;(statearr_87356_87430[2] = inst_87259);
(statearr_87356_87430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 41))
{var inst_87300 = (state_87329[18]);var inst_87202 = (state_87329[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_87329,40,Object,null,39);var inst_87307 = cljs.core.async.put_BANG_.call(null,inst_87300,inst_87202,done);var state_87329__$1 = state_87329;var statearr_87357_87431 = state_87329__$1;(statearr_87357_87431[2] = inst_87307);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87329__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 10))
{var inst_87214 = (state_87329[15]);var inst_87212 = (state_87329[16]);var inst_87220 = cljs.core._nth.call(null,inst_87212,inst_87214);var inst_87221 = cljs.core.nth.call(null,inst_87220,0,null);var inst_87222 = cljs.core.nth.call(null,inst_87220,1,null);var state_87329__$1 = (function (){var statearr_87358 = state_87329;(statearr_87358[23] = inst_87221);
return statearr_87358;
})();if(cljs.core.truth_(inst_87222))
{var statearr_87359_87432 = state_87329__$1;(statearr_87359_87432[1] = 13);
} else
{var statearr_87360_87433 = state_87329__$1;(statearr_87360_87433[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 42))
{var inst_87322 = (state_87329[2]);var state_87329__$1 = (function (){var statearr_87361 = state_87329;(statearr_87361[24] = inst_87322);
return statearr_87361;
})();var statearr_87362_87434 = state_87329__$1;(statearr_87362_87434[2] = null);
(statearr_87362_87434[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 11))
{var inst_87231 = (state_87329[25]);var inst_87211 = (state_87329[17]);var inst_87231__$1 = cljs.core.seq.call(null,inst_87211);var state_87329__$1 = (function (){var statearr_87363 = state_87329;(statearr_87363[25] = inst_87231__$1);
return statearr_87363;
})();if(inst_87231__$1)
{var statearr_87364_87435 = state_87329__$1;(statearr_87364_87435[1] = 16);
} else
{var statearr_87365_87436 = state_87329__$1;(statearr_87365_87436[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 12))
{var inst_87257 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87366_87437 = state_87329__$1;(statearr_87366_87437[2] = inst_87257);
(statearr_87366_87437[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 13))
{var inst_87221 = (state_87329[23]);var inst_87224 = cljs.core.async.close_BANG_.call(null,inst_87221);var state_87329__$1 = state_87329;var statearr_87370_87438 = state_87329__$1;(statearr_87370_87438[2] = inst_87224);
(statearr_87370_87438[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 14))
{var state_87329__$1 = state_87329;var statearr_87371_87439 = state_87329__$1;(statearr_87371_87439[2] = null);
(statearr_87371_87439[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 15))
{var inst_87213 = (state_87329[14]);var inst_87214 = (state_87329[15]);var inst_87212 = (state_87329[16]);var inst_87211 = (state_87329[17]);var inst_87227 = (state_87329[2]);var inst_87228 = (inst_87214 + 1);var tmp87367 = inst_87213;var tmp87368 = inst_87212;var tmp87369 = inst_87211;var inst_87211__$1 = tmp87369;var inst_87212__$1 = tmp87368;var inst_87213__$1 = tmp87367;var inst_87214__$1 = inst_87228;var state_87329__$1 = (function (){var statearr_87372 = state_87329;(statearr_87372[26] = inst_87227);
(statearr_87372[14] = inst_87213__$1);
(statearr_87372[15] = inst_87214__$1);
(statearr_87372[16] = inst_87212__$1);
(statearr_87372[17] = inst_87211__$1);
return statearr_87372;
})();var statearr_87373_87440 = state_87329__$1;(statearr_87373_87440[2] = null);
(statearr_87373_87440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 16))
{var inst_87231 = (state_87329[25]);var inst_87233 = cljs.core.chunked_seq_QMARK_.call(null,inst_87231);var state_87329__$1 = state_87329;if(inst_87233)
{var statearr_87374_87441 = state_87329__$1;(statearr_87374_87441[1] = 19);
} else
{var statearr_87375_87442 = state_87329__$1;(statearr_87375_87442[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 17))
{var state_87329__$1 = state_87329;var statearr_87376_87443 = state_87329__$1;(statearr_87376_87443[2] = null);
(statearr_87376_87443[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 18))
{var inst_87255 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87377_87444 = state_87329__$1;(statearr_87377_87444[2] = inst_87255);
(statearr_87377_87444[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 19))
{var inst_87231 = (state_87329[25]);var inst_87235 = cljs.core.chunk_first.call(null,inst_87231);var inst_87236 = cljs.core.chunk_rest.call(null,inst_87231);var inst_87237 = cljs.core.count.call(null,inst_87235);var inst_87211 = inst_87236;var inst_87212 = inst_87235;var inst_87213 = inst_87237;var inst_87214 = 0;var state_87329__$1 = (function (){var statearr_87378 = state_87329;(statearr_87378[14] = inst_87213);
(statearr_87378[15] = inst_87214);
(statearr_87378[16] = inst_87212);
(statearr_87378[17] = inst_87211);
return statearr_87378;
})();var statearr_87379_87445 = state_87329__$1;(statearr_87379_87445[2] = null);
(statearr_87379_87445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 20))
{var inst_87231 = (state_87329[25]);var inst_87241 = cljs.core.first.call(null,inst_87231);var inst_87242 = cljs.core.nth.call(null,inst_87241,0,null);var inst_87243 = cljs.core.nth.call(null,inst_87241,1,null);var state_87329__$1 = (function (){var statearr_87380 = state_87329;(statearr_87380[27] = inst_87242);
return statearr_87380;
})();if(cljs.core.truth_(inst_87243))
{var statearr_87381_87446 = state_87329__$1;(statearr_87381_87446[1] = 22);
} else
{var statearr_87382_87447 = state_87329__$1;(statearr_87382_87447[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 21))
{var inst_87252 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87383_87448 = state_87329__$1;(statearr_87383_87448[2] = inst_87252);
(statearr_87383_87448[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 22))
{var inst_87242 = (state_87329[27]);var inst_87245 = cljs.core.async.close_BANG_.call(null,inst_87242);var state_87329__$1 = state_87329;var statearr_87384_87449 = state_87329__$1;(statearr_87384_87449[2] = inst_87245);
(statearr_87384_87449[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 23))
{var state_87329__$1 = state_87329;var statearr_87385_87450 = state_87329__$1;(statearr_87385_87450[2] = null);
(statearr_87385_87450[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 24))
{var inst_87231 = (state_87329[25]);var inst_87248 = (state_87329[2]);var inst_87249 = cljs.core.next.call(null,inst_87231);var inst_87211 = inst_87249;var inst_87212 = null;var inst_87213 = 0;var inst_87214 = 0;var state_87329__$1 = (function (){var statearr_87386 = state_87329;(statearr_87386[14] = inst_87213);
(statearr_87386[15] = inst_87214);
(statearr_87386[16] = inst_87212);
(statearr_87386[17] = inst_87211);
(statearr_87386[28] = inst_87248);
return statearr_87386;
})();var statearr_87387_87451 = state_87329__$1;(statearr_87387_87451[2] = null);
(statearr_87387_87451[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 25))
{var inst_87273 = (state_87329[10]);var inst_87272 = (state_87329[12]);var inst_87275 = (inst_87273 < inst_87272);var inst_87276 = inst_87275;var state_87329__$1 = state_87329;if(cljs.core.truth_(inst_87276))
{var statearr_87388_87452 = state_87329__$1;(statearr_87388_87452[1] = 27);
} else
{var statearr_87389_87453 = state_87329__$1;(statearr_87389_87453[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 26))
{var inst_87320 = (state_87329[2]);var state_87329__$1 = (function (){var statearr_87390 = state_87329;(statearr_87390[29] = inst_87320);
return statearr_87390;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87329__$1,42,dchan);
} else
{if((state_val_87330 === 27))
{var inst_87273 = (state_87329[10]);var inst_87271 = (state_87329[11]);var inst_87278 = cljs.core._nth.call(null,inst_87271,inst_87273);var state_87329__$1 = (function (){var statearr_87391 = state_87329;(statearr_87391[7] = inst_87278);
return statearr_87391;
})();var statearr_87392_87454 = state_87329__$1;(statearr_87392_87454[2] = null);
(statearr_87392_87454[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 28))
{var inst_87270 = (state_87329[13]);var inst_87291 = (state_87329[9]);var inst_87291__$1 = cljs.core.seq.call(null,inst_87270);var state_87329__$1 = (function (){var statearr_87396 = state_87329;(statearr_87396[9] = inst_87291__$1);
return statearr_87396;
})();if(inst_87291__$1)
{var statearr_87397_87455 = state_87329__$1;(statearr_87397_87455[1] = 33);
} else
{var statearr_87398_87456 = state_87329__$1;(statearr_87398_87456[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 29))
{var inst_87318 = (state_87329[2]);var state_87329__$1 = state_87329;var statearr_87399_87457 = state_87329__$1;(statearr_87399_87457[2] = inst_87318);
(statearr_87399_87457[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 30))
{var inst_87273 = (state_87329[10]);var inst_87271 = (state_87329[11]);var inst_87272 = (state_87329[12]);var inst_87270 = (state_87329[13]);var inst_87287 = (state_87329[2]);var inst_87288 = (inst_87273 + 1);var tmp87393 = inst_87271;var tmp87394 = inst_87272;var tmp87395 = inst_87270;var inst_87270__$1 = tmp87395;var inst_87271__$1 = tmp87393;var inst_87272__$1 = tmp87394;var inst_87273__$1 = inst_87288;var state_87329__$1 = (function (){var statearr_87400 = state_87329;(statearr_87400[10] = inst_87273__$1);
(statearr_87400[11] = inst_87271__$1);
(statearr_87400[12] = inst_87272__$1);
(statearr_87400[13] = inst_87270__$1);
(statearr_87400[30] = inst_87287);
return statearr_87400;
})();var statearr_87401_87458 = state_87329__$1;(statearr_87401_87458[2] = null);
(statearr_87401_87458[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87330 === 31))
{var inst_87278 = (state_87329[7]);var inst_87279 = (state_87329[2]);var inst_87280 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_87281 = cljs.core.async.untap_STAR_.call(null,m,inst_87278);var state_87329__$1 = (function (){var statearr_87402 = state_87329;(statearr_87402[31] = inst_87279);
(statearr_87402[32] = inst_87280);
return statearr_87402;
})();var statearr_87403_87459 = state_87329__$1;(statearr_87403_87459[2] = inst_87281);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87329__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_87407 = (new Array(33));(statearr_87407[0] = state_machine__10214__auto__);
(statearr_87407[1] = 1);
return statearr_87407;
});
var state_machine__10214__auto____1 = (function (state_87329){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_87329);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e87408){if((e87408 instanceof Object))
{var ex__10217__auto__ = e87408;var statearr_87409_87460 = state_87329;(statearr_87409_87460[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87329);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87408;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87461 = state_87329;
state_87329 = G__87461;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_87329){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_87329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_87410 = f__10284__auto__.call(null);(statearr_87410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___87411);
return statearr_87410;
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
cljs.core.async.Mix = (function (){var obj87463 = {};return obj87463;
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
;var m = (function (){if(typeof cljs.core.async.t87573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87573 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta87574){
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
this.meta87574 = meta87574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87573.cljs$lang$type = true;
cljs.core.async.t87573.cljs$lang$ctorStr = "cljs.core.async/t87573";
cljs.core.async.t87573.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t87573");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87573.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_87575){var self__ = this;
var _87575__$1 = this;return self__.meta87574;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t87573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_87575,meta87574__$1){var self__ = this;
var _87575__$1 = this;return (new cljs.core.async.t87573(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta87574__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t87573 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t87573(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta87574){return (new cljs.core.async.t87573(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta87574));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t87573(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10283__auto___87682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_87640){var state_val_87641 = (state_87640[1]);if((state_val_87641 === 1))
{var inst_87579 = (state_87640[7]);var inst_87579__$1 = calc_state.call(null);var inst_87580 = cljs.core.seq_QMARK_.call(null,inst_87579__$1);var state_87640__$1 = (function (){var statearr_87642 = state_87640;(statearr_87642[7] = inst_87579__$1);
return statearr_87642;
})();if(inst_87580)
{var statearr_87643_87683 = state_87640__$1;(statearr_87643_87683[1] = 2);
} else
{var statearr_87644_87684 = state_87640__$1;(statearr_87644_87684[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 2))
{var inst_87579 = (state_87640[7]);var inst_87582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_87579);var state_87640__$1 = state_87640;var statearr_87645_87685 = state_87640__$1;(statearr_87645_87685[2] = inst_87582);
(statearr_87645_87685[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 3))
{var inst_87579 = (state_87640[7]);var state_87640__$1 = state_87640;var statearr_87646_87686 = state_87640__$1;(statearr_87646_87686[2] = inst_87579);
(statearr_87646_87686[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 4))
{var inst_87579 = (state_87640[7]);var inst_87585 = (state_87640[2]);var inst_87586 = cljs.core.get.call(null,inst_87585,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_87587 = cljs.core.get.call(null,inst_87585,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_87588 = cljs.core.get.call(null,inst_87585,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_87589 = inst_87579;var state_87640__$1 = (function (){var statearr_87647 = state_87640;(statearr_87647[8] = inst_87587);
(statearr_87647[9] = inst_87588);
(statearr_87647[10] = inst_87589);
(statearr_87647[11] = inst_87586);
return statearr_87647;
})();var statearr_87648_87687 = state_87640__$1;(statearr_87648_87687[2] = null);
(statearr_87648_87687[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 5))
{var inst_87589 = (state_87640[10]);var inst_87592 = cljs.core.seq_QMARK_.call(null,inst_87589);var state_87640__$1 = state_87640;if(inst_87592)
{var statearr_87649_87688 = state_87640__$1;(statearr_87649_87688[1] = 7);
} else
{var statearr_87650_87689 = state_87640__$1;(statearr_87650_87689[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 6))
{var inst_87638 = (state_87640[2]);var state_87640__$1 = state_87640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87640__$1,inst_87638);
} else
{if((state_val_87641 === 7))
{var inst_87589 = (state_87640[10]);var inst_87594 = cljs.core.apply.call(null,cljs.core.hash_map,inst_87589);var state_87640__$1 = state_87640;var statearr_87651_87690 = state_87640__$1;(statearr_87651_87690[2] = inst_87594);
(statearr_87651_87690[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 8))
{var inst_87589 = (state_87640[10]);var state_87640__$1 = state_87640;var statearr_87652_87691 = state_87640__$1;(statearr_87652_87691[2] = inst_87589);
(statearr_87652_87691[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 9))
{var inst_87597 = (state_87640[12]);var inst_87597__$1 = (state_87640[2]);var inst_87598 = cljs.core.get.call(null,inst_87597__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_87599 = cljs.core.get.call(null,inst_87597__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_87600 = cljs.core.get.call(null,inst_87597__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_87640__$1 = (function (){var statearr_87653 = state_87640;(statearr_87653[13] = inst_87599);
(statearr_87653[12] = inst_87597__$1);
(statearr_87653[14] = inst_87600);
return statearr_87653;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_87640__$1,10,inst_87598);
} else
{if((state_val_87641 === 10))
{var inst_87605 = (state_87640[15]);var inst_87604 = (state_87640[16]);var inst_87603 = (state_87640[2]);var inst_87604__$1 = cljs.core.nth.call(null,inst_87603,0,null);var inst_87605__$1 = cljs.core.nth.call(null,inst_87603,1,null);var inst_87606 = (inst_87604__$1 == null);var inst_87607 = cljs.core._EQ_.call(null,inst_87605__$1,change);var inst_87608 = (inst_87606) || (inst_87607);var state_87640__$1 = (function (){var statearr_87654 = state_87640;(statearr_87654[15] = inst_87605__$1);
(statearr_87654[16] = inst_87604__$1);
return statearr_87654;
})();if(cljs.core.truth_(inst_87608))
{var statearr_87655_87692 = state_87640__$1;(statearr_87655_87692[1] = 11);
} else
{var statearr_87656_87693 = state_87640__$1;(statearr_87656_87693[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 11))
{var inst_87604 = (state_87640[16]);var inst_87610 = (inst_87604 == null);var state_87640__$1 = state_87640;if(cljs.core.truth_(inst_87610))
{var statearr_87657_87694 = state_87640__$1;(statearr_87657_87694[1] = 14);
} else
{var statearr_87658_87695 = state_87640__$1;(statearr_87658_87695[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 12))
{var inst_87605 = (state_87640[15]);var inst_87619 = (state_87640[17]);var inst_87600 = (state_87640[14]);var inst_87619__$1 = inst_87600.call(null,inst_87605);var state_87640__$1 = (function (){var statearr_87659 = state_87640;(statearr_87659[17] = inst_87619__$1);
return statearr_87659;
})();if(cljs.core.truth_(inst_87619__$1))
{var statearr_87660_87696 = state_87640__$1;(statearr_87660_87696[1] = 17);
} else
{var statearr_87661_87697 = state_87640__$1;(statearr_87661_87697[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 13))
{var inst_87636 = (state_87640[2]);var state_87640__$1 = state_87640;var statearr_87662_87698 = state_87640__$1;(statearr_87662_87698[2] = inst_87636);
(statearr_87662_87698[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 14))
{var inst_87605 = (state_87640[15]);var inst_87612 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_87605);var state_87640__$1 = state_87640;var statearr_87663_87699 = state_87640__$1;(statearr_87663_87699[2] = inst_87612);
(statearr_87663_87699[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 15))
{var state_87640__$1 = state_87640;var statearr_87664_87700 = state_87640__$1;(statearr_87664_87700[2] = null);
(statearr_87664_87700[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 16))
{var inst_87615 = (state_87640[2]);var inst_87616 = calc_state.call(null);var inst_87589 = inst_87616;var state_87640__$1 = (function (){var statearr_87665 = state_87640;(statearr_87665[18] = inst_87615);
(statearr_87665[10] = inst_87589);
return statearr_87665;
})();var statearr_87666_87701 = state_87640__$1;(statearr_87666_87701[2] = null);
(statearr_87666_87701[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 17))
{var inst_87619 = (state_87640[17]);var state_87640__$1 = state_87640;var statearr_87667_87702 = state_87640__$1;(statearr_87667_87702[2] = inst_87619);
(statearr_87667_87702[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 18))
{var inst_87605 = (state_87640[15]);var inst_87599 = (state_87640[13]);var inst_87600 = (state_87640[14]);var inst_87622 = cljs.core.empty_QMARK_.call(null,inst_87600);var inst_87623 = inst_87599.call(null,inst_87605);var inst_87624 = cljs.core.not.call(null,inst_87623);var inst_87625 = (inst_87622) && (inst_87624);var state_87640__$1 = state_87640;var statearr_87668_87703 = state_87640__$1;(statearr_87668_87703[2] = inst_87625);
(statearr_87668_87703[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 19))
{var inst_87627 = (state_87640[2]);var state_87640__$1 = state_87640;if(cljs.core.truth_(inst_87627))
{var statearr_87669_87704 = state_87640__$1;(statearr_87669_87704[1] = 20);
} else
{var statearr_87670_87705 = state_87640__$1;(statearr_87670_87705[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 20))
{var inst_87604 = (state_87640[16]);var state_87640__$1 = state_87640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87640__$1,23,out,inst_87604);
} else
{if((state_val_87641 === 21))
{var state_87640__$1 = state_87640;var statearr_87671_87706 = state_87640__$1;(statearr_87671_87706[2] = null);
(statearr_87671_87706[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 22))
{var inst_87597 = (state_87640[12]);var inst_87633 = (state_87640[2]);var inst_87589 = inst_87597;var state_87640__$1 = (function (){var statearr_87672 = state_87640;(statearr_87672[19] = inst_87633);
(statearr_87672[10] = inst_87589);
return statearr_87672;
})();var statearr_87673_87707 = state_87640__$1;(statearr_87673_87707[2] = null);
(statearr_87673_87707[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87641 === 23))
{var inst_87630 = (state_87640[2]);var state_87640__$1 = state_87640;var statearr_87674_87708 = state_87640__$1;(statearr_87674_87708[2] = inst_87630);
(statearr_87674_87708[1] = 22);
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
var state_machine__10214__auto____0 = (function (){var statearr_87678 = (new Array(20));(statearr_87678[0] = state_machine__10214__auto__);
(statearr_87678[1] = 1);
return statearr_87678;
});
var state_machine__10214__auto____1 = (function (state_87640){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_87640);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e87679){if((e87679 instanceof Object))
{var ex__10217__auto__ = e87679;var statearr_87680_87709 = state_87640;(statearr_87680_87709[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87640);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87710 = state_87640;
state_87640 = G__87710;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_87640){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_87640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_87681 = f__10284__auto__.call(null);(statearr_87681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___87682);
return statearr_87681;
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
cljs.core.async.Pub = (function (){var obj87712 = {};return obj87712;
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
return (function (p1__87713_SHARP_){if(cljs.core.truth_(p1__87713_SHARP_.call(null,topic)))
{return p1__87713_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__87713_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7730__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t87838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t87838 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta87839){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta87839 = meta87839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t87838.cljs$lang$type = true;
cljs.core.async.t87838.cljs$lang$ctorStr = "cljs.core.async/t87838";
cljs.core.async.t87838.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8274__auto__,writer__8275__auto__,opt__8276__auto__){return cljs.core._write.call(null,writer__8275__auto__,"cljs.core.async/t87838");
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t87838.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4098__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4098__auto__))
{var m = temp__4098__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t87838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_87840){var self__ = this;
var _87840__$1 = this;return self__.meta87839;
});})(mults,ensure_mult))
;
cljs.core.async.t87838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_87840,meta87839__$1){var self__ = this;
var _87840__$1 = this;return (new cljs.core.async.t87838(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta87839__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t87838 = ((function (mults,ensure_mult){
return (function __GT_t87838(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta87839){return (new cljs.core.async.t87838(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta87839));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t87838(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10283__auto___87962 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_87914){var state_val_87915 = (state_87914[1]);if((state_val_87915 === 1))
{var state_87914__$1 = state_87914;var statearr_87916_87963 = state_87914__$1;(statearr_87916_87963[2] = null);
(statearr_87916_87963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 2))
{var state_87914__$1 = state_87914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87914__$1,4,ch);
} else
{if((state_val_87915 === 3))
{var inst_87912 = (state_87914[2]);var state_87914__$1 = state_87914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87914__$1,inst_87912);
} else
{if((state_val_87915 === 4))
{var inst_87843 = (state_87914[7]);var inst_87843__$1 = (state_87914[2]);var inst_87844 = (inst_87843__$1 == null);var state_87914__$1 = (function (){var statearr_87917 = state_87914;(statearr_87917[7] = inst_87843__$1);
return statearr_87917;
})();if(cljs.core.truth_(inst_87844))
{var statearr_87918_87964 = state_87914__$1;(statearr_87918_87964[1] = 5);
} else
{var statearr_87919_87965 = state_87914__$1;(statearr_87919_87965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 5))
{var inst_87850 = cljs.core.deref.call(null,mults);var inst_87851 = cljs.core.vals.call(null,inst_87850);var inst_87852 = cljs.core.seq.call(null,inst_87851);var inst_87853 = inst_87852;var inst_87854 = null;var inst_87855 = 0;var inst_87856 = 0;var state_87914__$1 = (function (){var statearr_87920 = state_87914;(statearr_87920[8] = inst_87856);
(statearr_87920[9] = inst_87855);
(statearr_87920[10] = inst_87853);
(statearr_87920[11] = inst_87854);
return statearr_87920;
})();var statearr_87921_87966 = state_87914__$1;(statearr_87921_87966[2] = null);
(statearr_87921_87966[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 6))
{var inst_87893 = (state_87914[12]);var inst_87891 = (state_87914[13]);var inst_87843 = (state_87914[7]);var inst_87891__$1 = topic_fn.call(null,inst_87843);var inst_87892 = cljs.core.deref.call(null,mults);var inst_87893__$1 = cljs.core.get.call(null,inst_87892,inst_87891__$1);var state_87914__$1 = (function (){var statearr_87922 = state_87914;(statearr_87922[12] = inst_87893__$1);
(statearr_87922[13] = inst_87891__$1);
return statearr_87922;
})();if(cljs.core.truth_(inst_87893__$1))
{var statearr_87923_87967 = state_87914__$1;(statearr_87923_87967[1] = 19);
} else
{var statearr_87924_87968 = state_87914__$1;(statearr_87924_87968[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 7))
{var inst_87910 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87925_87969 = state_87914__$1;(statearr_87925_87969[2] = inst_87910);
(statearr_87925_87969[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 8))
{var inst_87856 = (state_87914[8]);var inst_87855 = (state_87914[9]);var inst_87858 = (inst_87856 < inst_87855);var inst_87859 = inst_87858;var state_87914__$1 = state_87914;if(cljs.core.truth_(inst_87859))
{var statearr_87929_87970 = state_87914__$1;(statearr_87929_87970[1] = 10);
} else
{var statearr_87930_87971 = state_87914__$1;(statearr_87930_87971[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 9))
{var inst_87889 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87931_87972 = state_87914__$1;(statearr_87931_87972[2] = inst_87889);
(statearr_87931_87972[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 10))
{var inst_87856 = (state_87914[8]);var inst_87855 = (state_87914[9]);var inst_87853 = (state_87914[10]);var inst_87854 = (state_87914[11]);var inst_87861 = cljs.core._nth.call(null,inst_87854,inst_87856);var inst_87862 = cljs.core.async.muxch_STAR_.call(null,inst_87861);var inst_87863 = cljs.core.async.close_BANG_.call(null,inst_87862);var inst_87864 = (inst_87856 + 1);var tmp87926 = inst_87855;var tmp87927 = inst_87853;var tmp87928 = inst_87854;var inst_87853__$1 = tmp87927;var inst_87854__$1 = tmp87928;var inst_87855__$1 = tmp87926;var inst_87856__$1 = inst_87864;var state_87914__$1 = (function (){var statearr_87932 = state_87914;(statearr_87932[8] = inst_87856__$1);
(statearr_87932[9] = inst_87855__$1);
(statearr_87932[14] = inst_87863);
(statearr_87932[10] = inst_87853__$1);
(statearr_87932[11] = inst_87854__$1);
return statearr_87932;
})();var statearr_87933_87973 = state_87914__$1;(statearr_87933_87973[2] = null);
(statearr_87933_87973[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 11))
{var inst_87867 = (state_87914[15]);var inst_87853 = (state_87914[10]);var inst_87867__$1 = cljs.core.seq.call(null,inst_87853);var state_87914__$1 = (function (){var statearr_87934 = state_87914;(statearr_87934[15] = inst_87867__$1);
return statearr_87934;
})();if(inst_87867__$1)
{var statearr_87935_87974 = state_87914__$1;(statearr_87935_87974[1] = 13);
} else
{var statearr_87936_87975 = state_87914__$1;(statearr_87936_87975[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 12))
{var inst_87887 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87937_87976 = state_87914__$1;(statearr_87937_87976[2] = inst_87887);
(statearr_87937_87976[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 13))
{var inst_87867 = (state_87914[15]);var inst_87869 = cljs.core.chunked_seq_QMARK_.call(null,inst_87867);var state_87914__$1 = state_87914;if(inst_87869)
{var statearr_87938_87977 = state_87914__$1;(statearr_87938_87977[1] = 16);
} else
{var statearr_87939_87978 = state_87914__$1;(statearr_87939_87978[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 14))
{var state_87914__$1 = state_87914;var statearr_87940_87979 = state_87914__$1;(statearr_87940_87979[2] = null);
(statearr_87940_87979[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 15))
{var inst_87885 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87941_87980 = state_87914__$1;(statearr_87941_87980[2] = inst_87885);
(statearr_87941_87980[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 16))
{var inst_87867 = (state_87914[15]);var inst_87871 = cljs.core.chunk_first.call(null,inst_87867);var inst_87872 = cljs.core.chunk_rest.call(null,inst_87867);var inst_87873 = cljs.core.count.call(null,inst_87871);var inst_87853 = inst_87872;var inst_87854 = inst_87871;var inst_87855 = inst_87873;var inst_87856 = 0;var state_87914__$1 = (function (){var statearr_87942 = state_87914;(statearr_87942[8] = inst_87856);
(statearr_87942[9] = inst_87855);
(statearr_87942[10] = inst_87853);
(statearr_87942[11] = inst_87854);
return statearr_87942;
})();var statearr_87943_87981 = state_87914__$1;(statearr_87943_87981[2] = null);
(statearr_87943_87981[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 17))
{var inst_87867 = (state_87914[15]);var inst_87876 = cljs.core.first.call(null,inst_87867);var inst_87877 = cljs.core.async.muxch_STAR_.call(null,inst_87876);var inst_87878 = cljs.core.async.close_BANG_.call(null,inst_87877);var inst_87879 = cljs.core.next.call(null,inst_87867);var inst_87853 = inst_87879;var inst_87854 = null;var inst_87855 = 0;var inst_87856 = 0;var state_87914__$1 = (function (){var statearr_87944 = state_87914;(statearr_87944[8] = inst_87856);
(statearr_87944[9] = inst_87855);
(statearr_87944[10] = inst_87853);
(statearr_87944[11] = inst_87854);
(statearr_87944[16] = inst_87878);
return statearr_87944;
})();var statearr_87945_87982 = state_87914__$1;(statearr_87945_87982[2] = null);
(statearr_87945_87982[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 18))
{var inst_87882 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87946_87983 = state_87914__$1;(statearr_87946_87983[2] = inst_87882);
(statearr_87946_87983[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 19))
{var state_87914__$1 = state_87914;var statearr_87947_87984 = state_87914__$1;(statearr_87947_87984[2] = null);
(statearr_87947_87984[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 20))
{var state_87914__$1 = state_87914;var statearr_87948_87985 = state_87914__$1;(statearr_87948_87985[2] = null);
(statearr_87948_87985[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 21))
{var inst_87907 = (state_87914[2]);var state_87914__$1 = (function (){var statearr_87949 = state_87914;(statearr_87949[17] = inst_87907);
return statearr_87949;
})();var statearr_87950_87986 = state_87914__$1;(statearr_87950_87986[2] = null);
(statearr_87950_87986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 22))
{var inst_87904 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87951_87987 = state_87914__$1;(statearr_87951_87987[2] = inst_87904);
(statearr_87951_87987[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 23))
{var inst_87891 = (state_87914[13]);var inst_87895 = (state_87914[2]);var inst_87896 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_87891);var state_87914__$1 = (function (){var statearr_87952 = state_87914;(statearr_87952[18] = inst_87895);
return statearr_87952;
})();var statearr_87953_87988 = state_87914__$1;(statearr_87953_87988[2] = inst_87896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87914__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87915 === 24))
{var inst_87893 = (state_87914[12]);var inst_87843 = (state_87914[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_87914,23,Object,null,22);var inst_87900 = cljs.core.async.muxch_STAR_.call(null,inst_87893);var state_87914__$1 = state_87914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87914__$1,25,inst_87900,inst_87843);
} else
{if((state_val_87915 === 25))
{var inst_87902 = (state_87914[2]);var state_87914__$1 = state_87914;var statearr_87954_87989 = state_87914__$1;(statearr_87954_87989[2] = inst_87902);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87914__$1);
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
var state_machine__10214__auto____0 = (function (){var statearr_87958 = (new Array(19));(statearr_87958[0] = state_machine__10214__auto__);
(statearr_87958[1] = 1);
return statearr_87958;
});
var state_machine__10214__auto____1 = (function (state_87914){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_87914);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e87959){if((e87959 instanceof Object))
{var ex__10217__auto__ = e87959;var statearr_87960_87990 = state_87914;(statearr_87960_87990[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87959;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87991 = state_87914;
state_87914 = G__87991;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_87914){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_87914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_87961 = f__10284__auto__.call(null);(statearr_87961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___87962);
return statearr_87961;
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
,cljs.core.range.call(null,cnt));var c__10283__auto___88128 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88098){var state_val_88099 = (state_88098[1]);if((state_val_88099 === 1))
{var state_88098__$1 = state_88098;var statearr_88100_88129 = state_88098__$1;(statearr_88100_88129[2] = null);
(statearr_88100_88129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 2))
{var inst_88061 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_88062 = 0;var state_88098__$1 = (function (){var statearr_88101 = state_88098;(statearr_88101[7] = inst_88062);
(statearr_88101[8] = inst_88061);
return statearr_88101;
})();var statearr_88102_88130 = state_88098__$1;(statearr_88102_88130[2] = null);
(statearr_88102_88130[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 3))
{var inst_88096 = (state_88098[2]);var state_88098__$1 = state_88098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88098__$1,inst_88096);
} else
{if((state_val_88099 === 4))
{var inst_88062 = (state_88098[7]);var inst_88064 = (inst_88062 < cnt);var state_88098__$1 = state_88098;if(cljs.core.truth_(inst_88064))
{var statearr_88103_88131 = state_88098__$1;(statearr_88103_88131[1] = 6);
} else
{var statearr_88104_88132 = state_88098__$1;(statearr_88104_88132[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 5))
{var inst_88082 = (state_88098[2]);var state_88098__$1 = (function (){var statearr_88105 = state_88098;(statearr_88105[9] = inst_88082);
return statearr_88105;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88098__$1,12,dchan);
} else
{if((state_val_88099 === 6))
{var state_88098__$1 = state_88098;var statearr_88106_88133 = state_88098__$1;(statearr_88106_88133[2] = null);
(statearr_88106_88133[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 7))
{var state_88098__$1 = state_88098;var statearr_88107_88134 = state_88098__$1;(statearr_88107_88134[2] = null);
(statearr_88107_88134[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 8))
{var inst_88080 = (state_88098[2]);var state_88098__$1 = state_88098;var statearr_88108_88135 = state_88098__$1;(statearr_88108_88135[2] = inst_88080);
(statearr_88108_88135[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 9))
{var inst_88062 = (state_88098[7]);var inst_88075 = (state_88098[2]);var inst_88076 = (inst_88062 + 1);var inst_88062__$1 = inst_88076;var state_88098__$1 = (function (){var statearr_88109 = state_88098;(statearr_88109[7] = inst_88062__$1);
(statearr_88109[10] = inst_88075);
return statearr_88109;
})();var statearr_88110_88136 = state_88098__$1;(statearr_88110_88136[2] = null);
(statearr_88110_88136[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 10))
{var inst_88066 = (state_88098[2]);var inst_88067 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_88098__$1 = (function (){var statearr_88111 = state_88098;(statearr_88111[11] = inst_88066);
return statearr_88111;
})();var statearr_88112_88137 = state_88098__$1;(statearr_88112_88137[2] = inst_88067);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88098__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 11))
{var inst_88062 = (state_88098[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_88098,10,Object,null,9);var inst_88071 = chs__$1.call(null,inst_88062);var inst_88072 = done.call(null,inst_88062);var inst_88073 = cljs.core.async.take_BANG_.call(null,inst_88071,inst_88072);var state_88098__$1 = state_88098;var statearr_88113_88138 = state_88098__$1;(statearr_88113_88138[2] = inst_88073);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88098__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 12))
{var inst_88084 = (state_88098[12]);var inst_88084__$1 = (state_88098[2]);var inst_88085 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_88084__$1);var state_88098__$1 = (function (){var statearr_88114 = state_88098;(statearr_88114[12] = inst_88084__$1);
return statearr_88114;
})();if(cljs.core.truth_(inst_88085))
{var statearr_88115_88139 = state_88098__$1;(statearr_88115_88139[1] = 13);
} else
{var statearr_88116_88140 = state_88098__$1;(statearr_88116_88140[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 13))
{var inst_88087 = cljs.core.async.close_BANG_.call(null,out);var state_88098__$1 = state_88098;var statearr_88117_88141 = state_88098__$1;(statearr_88117_88141[2] = inst_88087);
(statearr_88117_88141[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 14))
{var inst_88084 = (state_88098[12]);var inst_88089 = cljs.core.apply.call(null,f,inst_88084);var state_88098__$1 = state_88098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88098__$1,16,out,inst_88089);
} else
{if((state_val_88099 === 15))
{var inst_88094 = (state_88098[2]);var state_88098__$1 = state_88098;var statearr_88118_88142 = state_88098__$1;(statearr_88118_88142[2] = inst_88094);
(statearr_88118_88142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88099 === 16))
{var inst_88091 = (state_88098[2]);var state_88098__$1 = (function (){var statearr_88119 = state_88098;(statearr_88119[13] = inst_88091);
return statearr_88119;
})();var statearr_88120_88143 = state_88098__$1;(statearr_88120_88143[2] = null);
(statearr_88120_88143[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_88124 = (new Array(14));(statearr_88124[0] = state_machine__10214__auto__);
(statearr_88124[1] = 1);
return statearr_88124;
});
var state_machine__10214__auto____1 = (function (state_88098){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88098);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88125){if((e88125 instanceof Object))
{var ex__10217__auto__ = e88125;var statearr_88126_88144 = state_88098;(statearr_88126_88144[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88145 = state_88098;
state_88098 = G__88145;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88098){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88127 = f__10284__auto__.call(null);(statearr_88127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88128);
return statearr_88127;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___88253 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88229){var state_val_88230 = (state_88229[1]);if((state_val_88230 === 1))
{var inst_88200 = cljs.core.vec.call(null,chs);var inst_88201 = inst_88200;var state_88229__$1 = (function (){var statearr_88231 = state_88229;(statearr_88231[7] = inst_88201);
return statearr_88231;
})();var statearr_88232_88254 = state_88229__$1;(statearr_88232_88254[2] = null);
(statearr_88232_88254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 2))
{var inst_88201 = (state_88229[7]);var inst_88203 = cljs.core.count.call(null,inst_88201);var inst_88204 = (inst_88203 > 0);var state_88229__$1 = state_88229;if(cljs.core.truth_(inst_88204))
{var statearr_88233_88255 = state_88229__$1;(statearr_88233_88255[1] = 4);
} else
{var statearr_88234_88256 = state_88229__$1;(statearr_88234_88256[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 3))
{var inst_88227 = (state_88229[2]);var state_88229__$1 = state_88229;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88229__$1,inst_88227);
} else
{if((state_val_88230 === 4))
{var inst_88201 = (state_88229[7]);var state_88229__$1 = state_88229;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_88229__$1,7,inst_88201);
} else
{if((state_val_88230 === 5))
{var inst_88223 = cljs.core.async.close_BANG_.call(null,out);var state_88229__$1 = state_88229;var statearr_88235_88257 = state_88229__$1;(statearr_88235_88257[2] = inst_88223);
(statearr_88235_88257[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 6))
{var inst_88225 = (state_88229[2]);var state_88229__$1 = state_88229;var statearr_88236_88258 = state_88229__$1;(statearr_88236_88258[2] = inst_88225);
(statearr_88236_88258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 7))
{var inst_88208 = (state_88229[8]);var inst_88209 = (state_88229[9]);var inst_88208__$1 = (state_88229[2]);var inst_88209__$1 = cljs.core.nth.call(null,inst_88208__$1,0,null);var inst_88210 = cljs.core.nth.call(null,inst_88208__$1,1,null);var inst_88211 = (inst_88209__$1 == null);var state_88229__$1 = (function (){var statearr_88237 = state_88229;(statearr_88237[10] = inst_88210);
(statearr_88237[8] = inst_88208__$1);
(statearr_88237[9] = inst_88209__$1);
return statearr_88237;
})();if(cljs.core.truth_(inst_88211))
{var statearr_88238_88259 = state_88229__$1;(statearr_88238_88259[1] = 8);
} else
{var statearr_88239_88260 = state_88229__$1;(statearr_88239_88260[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 8))
{var inst_88210 = (state_88229[10]);var inst_88201 = (state_88229[7]);var inst_88208 = (state_88229[8]);var inst_88209 = (state_88229[9]);var inst_88213 = (function (){var c = inst_88210;var v = inst_88209;var vec__88206 = inst_88208;var cs = inst_88201;return ((function (c,v,vec__88206,cs,inst_88210,inst_88201,inst_88208,inst_88209,state_val_88230){
return (function (p1__88146_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__88146_SHARP_);
});
;})(c,v,vec__88206,cs,inst_88210,inst_88201,inst_88208,inst_88209,state_val_88230))
})();var inst_88214 = cljs.core.filterv.call(null,inst_88213,inst_88201);var inst_88201__$1 = inst_88214;var state_88229__$1 = (function (){var statearr_88240 = state_88229;(statearr_88240[7] = inst_88201__$1);
return statearr_88240;
})();var statearr_88241_88261 = state_88229__$1;(statearr_88241_88261[2] = null);
(statearr_88241_88261[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 9))
{var inst_88209 = (state_88229[9]);var state_88229__$1 = state_88229;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88229__$1,11,out,inst_88209);
} else
{if((state_val_88230 === 10))
{var inst_88221 = (state_88229[2]);var state_88229__$1 = state_88229;var statearr_88243_88262 = state_88229__$1;(statearr_88243_88262[2] = inst_88221);
(statearr_88243_88262[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88230 === 11))
{var inst_88201 = (state_88229[7]);var inst_88218 = (state_88229[2]);var tmp88242 = inst_88201;var inst_88201__$1 = tmp88242;var state_88229__$1 = (function (){var statearr_88244 = state_88229;(statearr_88244[11] = inst_88218);
(statearr_88244[7] = inst_88201__$1);
return statearr_88244;
})();var statearr_88245_88263 = state_88229__$1;(statearr_88245_88263[2] = null);
(statearr_88245_88263[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_88249 = (new Array(12));(statearr_88249[0] = state_machine__10214__auto__);
(statearr_88249[1] = 1);
return statearr_88249;
});
var state_machine__10214__auto____1 = (function (state_88229){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88229);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88250){if((e88250 instanceof Object))
{var ex__10217__auto__ = e88250;var statearr_88251_88264 = state_88229;(statearr_88251_88264[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88229);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88250;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88265 = state_88229;
state_88229 = G__88265;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88229){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88252 = f__10284__auto__.call(null);(statearr_88252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88253);
return statearr_88252;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___88358 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88335){var state_val_88336 = (state_88335[1]);if((state_val_88336 === 1))
{var inst_88312 = 0;var state_88335__$1 = (function (){var statearr_88337 = state_88335;(statearr_88337[7] = inst_88312);
return statearr_88337;
})();var statearr_88338_88359 = state_88335__$1;(statearr_88338_88359[2] = null);
(statearr_88338_88359[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 2))
{var inst_88312 = (state_88335[7]);var inst_88314 = (inst_88312 < n);var state_88335__$1 = state_88335;if(cljs.core.truth_(inst_88314))
{var statearr_88339_88360 = state_88335__$1;(statearr_88339_88360[1] = 4);
} else
{var statearr_88340_88361 = state_88335__$1;(statearr_88340_88361[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 3))
{var inst_88332 = (state_88335[2]);var inst_88333 = cljs.core.async.close_BANG_.call(null,out);var state_88335__$1 = (function (){var statearr_88341 = state_88335;(statearr_88341[8] = inst_88332);
return statearr_88341;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88335__$1,inst_88333);
} else
{if((state_val_88336 === 4))
{var state_88335__$1 = state_88335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88335__$1,7,ch);
} else
{if((state_val_88336 === 5))
{var state_88335__$1 = state_88335;var statearr_88342_88362 = state_88335__$1;(statearr_88342_88362[2] = null);
(statearr_88342_88362[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 6))
{var inst_88330 = (state_88335[2]);var state_88335__$1 = state_88335;var statearr_88343_88363 = state_88335__$1;(statearr_88343_88363[2] = inst_88330);
(statearr_88343_88363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 7))
{var inst_88317 = (state_88335[9]);var inst_88317__$1 = (state_88335[2]);var inst_88318 = (inst_88317__$1 == null);var inst_88319 = cljs.core.not.call(null,inst_88318);var state_88335__$1 = (function (){var statearr_88344 = state_88335;(statearr_88344[9] = inst_88317__$1);
return statearr_88344;
})();if(inst_88319)
{var statearr_88345_88364 = state_88335__$1;(statearr_88345_88364[1] = 8);
} else
{var statearr_88346_88365 = state_88335__$1;(statearr_88346_88365[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 8))
{var inst_88317 = (state_88335[9]);var state_88335__$1 = state_88335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88335__$1,11,out,inst_88317);
} else
{if((state_val_88336 === 9))
{var state_88335__$1 = state_88335;var statearr_88347_88366 = state_88335__$1;(statearr_88347_88366[2] = null);
(statearr_88347_88366[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 10))
{var inst_88327 = (state_88335[2]);var state_88335__$1 = state_88335;var statearr_88348_88367 = state_88335__$1;(statearr_88348_88367[2] = inst_88327);
(statearr_88348_88367[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88336 === 11))
{var inst_88312 = (state_88335[7]);var inst_88322 = (state_88335[2]);var inst_88323 = (inst_88312 + 1);var inst_88312__$1 = inst_88323;var state_88335__$1 = (function (){var statearr_88349 = state_88335;(statearr_88349[10] = inst_88322);
(statearr_88349[7] = inst_88312__$1);
return statearr_88349;
})();var statearr_88350_88368 = state_88335__$1;(statearr_88350_88368[2] = null);
(statearr_88350_88368[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_88354 = (new Array(11));(statearr_88354[0] = state_machine__10214__auto__);
(statearr_88354[1] = 1);
return statearr_88354;
});
var state_machine__10214__auto____1 = (function (state_88335){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88335);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88355){if((e88355 instanceof Object))
{var ex__10217__auto__ = e88355;var statearr_88356_88369 = state_88335;(statearr_88356_88369[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88355;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88370 = state_88335;
state_88335 = G__88370;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88335){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88357 = f__10284__auto__.call(null);(statearr_88357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88358);
return statearr_88357;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___88467 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88442){var state_val_88443 = (state_88442[1]);if((state_val_88443 === 1))
{var inst_88419 = null;var state_88442__$1 = (function (){var statearr_88444 = state_88442;(statearr_88444[7] = inst_88419);
return statearr_88444;
})();var statearr_88445_88468 = state_88442__$1;(statearr_88445_88468[2] = null);
(statearr_88445_88468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 2))
{var state_88442__$1 = state_88442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88442__$1,4,ch);
} else
{if((state_val_88443 === 3))
{var inst_88439 = (state_88442[2]);var inst_88440 = cljs.core.async.close_BANG_.call(null,out);var state_88442__$1 = (function (){var statearr_88446 = state_88442;(statearr_88446[8] = inst_88439);
return statearr_88446;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88442__$1,inst_88440);
} else
{if((state_val_88443 === 4))
{var inst_88422 = (state_88442[9]);var inst_88422__$1 = (state_88442[2]);var inst_88423 = (inst_88422__$1 == null);var inst_88424 = cljs.core.not.call(null,inst_88423);var state_88442__$1 = (function (){var statearr_88447 = state_88442;(statearr_88447[9] = inst_88422__$1);
return statearr_88447;
})();if(inst_88424)
{var statearr_88448_88469 = state_88442__$1;(statearr_88448_88469[1] = 5);
} else
{var statearr_88449_88470 = state_88442__$1;(statearr_88449_88470[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 5))
{var inst_88419 = (state_88442[7]);var inst_88422 = (state_88442[9]);var inst_88426 = cljs.core._EQ_.call(null,inst_88422,inst_88419);var state_88442__$1 = state_88442;if(inst_88426)
{var statearr_88450_88471 = state_88442__$1;(statearr_88450_88471[1] = 8);
} else
{var statearr_88451_88472 = state_88442__$1;(statearr_88451_88472[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 6))
{var state_88442__$1 = state_88442;var statearr_88453_88473 = state_88442__$1;(statearr_88453_88473[2] = null);
(statearr_88453_88473[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 7))
{var inst_88437 = (state_88442[2]);var state_88442__$1 = state_88442;var statearr_88454_88474 = state_88442__$1;(statearr_88454_88474[2] = inst_88437);
(statearr_88454_88474[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 8))
{var inst_88419 = (state_88442[7]);var tmp88452 = inst_88419;var inst_88419__$1 = tmp88452;var state_88442__$1 = (function (){var statearr_88455 = state_88442;(statearr_88455[7] = inst_88419__$1);
return statearr_88455;
})();var statearr_88456_88475 = state_88442__$1;(statearr_88456_88475[2] = null);
(statearr_88456_88475[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 9))
{var inst_88422 = (state_88442[9]);var state_88442__$1 = state_88442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88442__$1,11,out,inst_88422);
} else
{if((state_val_88443 === 10))
{var inst_88434 = (state_88442[2]);var state_88442__$1 = state_88442;var statearr_88457_88476 = state_88442__$1;(statearr_88457_88476[2] = inst_88434);
(statearr_88457_88476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88443 === 11))
{var inst_88422 = (state_88442[9]);var inst_88431 = (state_88442[2]);var inst_88419 = inst_88422;var state_88442__$1 = (function (){var statearr_88458 = state_88442;(statearr_88458[7] = inst_88419);
(statearr_88458[10] = inst_88431);
return statearr_88458;
})();var statearr_88459_88477 = state_88442__$1;(statearr_88459_88477[2] = null);
(statearr_88459_88477[1] = 2);
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
var state_machine__10214__auto____0 = (function (){var statearr_88463 = (new Array(11));(statearr_88463[0] = state_machine__10214__auto__);
(statearr_88463[1] = 1);
return statearr_88463;
});
var state_machine__10214__auto____1 = (function (state_88442){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88442);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88464){if((e88464 instanceof Object))
{var ex__10217__auto__ = e88464;var statearr_88465_88478 = state_88442;(statearr_88465_88478[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88464;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88479 = state_88442;
state_88442 = G__88479;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88442){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88466 = f__10284__auto__.call(null);(statearr_88466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88467);
return statearr_88466;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___88614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88584){var state_val_88585 = (state_88584[1]);if((state_val_88585 === 1))
{var inst_88547 = (new Array(n));var inst_88548 = inst_88547;var inst_88549 = 0;var state_88584__$1 = (function (){var statearr_88586 = state_88584;(statearr_88586[7] = inst_88549);
(statearr_88586[8] = inst_88548);
return statearr_88586;
})();var statearr_88587_88615 = state_88584__$1;(statearr_88587_88615[2] = null);
(statearr_88587_88615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 2))
{var state_88584__$1 = state_88584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88584__$1,4,ch);
} else
{if((state_val_88585 === 3))
{var inst_88582 = (state_88584[2]);var state_88584__$1 = state_88584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88584__$1,inst_88582);
} else
{if((state_val_88585 === 4))
{var inst_88552 = (state_88584[9]);var inst_88552__$1 = (state_88584[2]);var inst_88553 = (inst_88552__$1 == null);var inst_88554 = cljs.core.not.call(null,inst_88553);var state_88584__$1 = (function (){var statearr_88588 = state_88584;(statearr_88588[9] = inst_88552__$1);
return statearr_88588;
})();if(inst_88554)
{var statearr_88589_88616 = state_88584__$1;(statearr_88589_88616[1] = 5);
} else
{var statearr_88590_88617 = state_88584__$1;(statearr_88590_88617[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 5))
{var inst_88549 = (state_88584[7]);var inst_88548 = (state_88584[8]);var inst_88557 = (state_88584[10]);var inst_88552 = (state_88584[9]);var inst_88556 = (inst_88548[inst_88549] = inst_88552);var inst_88557__$1 = (inst_88549 + 1);var inst_88558 = (inst_88557__$1 < n);var state_88584__$1 = (function (){var statearr_88591 = state_88584;(statearr_88591[11] = inst_88556);
(statearr_88591[10] = inst_88557__$1);
return statearr_88591;
})();if(cljs.core.truth_(inst_88558))
{var statearr_88592_88618 = state_88584__$1;(statearr_88592_88618[1] = 8);
} else
{var statearr_88593_88619 = state_88584__$1;(statearr_88593_88619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 6))
{var inst_88549 = (state_88584[7]);var inst_88570 = (inst_88549 > 0);var state_88584__$1 = state_88584;if(cljs.core.truth_(inst_88570))
{var statearr_88595_88620 = state_88584__$1;(statearr_88595_88620[1] = 12);
} else
{var statearr_88596_88621 = state_88584__$1;(statearr_88596_88621[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 7))
{var inst_88580 = (state_88584[2]);var state_88584__$1 = state_88584;var statearr_88597_88622 = state_88584__$1;(statearr_88597_88622[2] = inst_88580);
(statearr_88597_88622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 8))
{var inst_88548 = (state_88584[8]);var inst_88557 = (state_88584[10]);var tmp88594 = inst_88548;var inst_88548__$1 = tmp88594;var inst_88549 = inst_88557;var state_88584__$1 = (function (){var statearr_88598 = state_88584;(statearr_88598[7] = inst_88549);
(statearr_88598[8] = inst_88548__$1);
return statearr_88598;
})();var statearr_88599_88623 = state_88584__$1;(statearr_88599_88623[2] = null);
(statearr_88599_88623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 9))
{var inst_88548 = (state_88584[8]);var inst_88562 = cljs.core.vec.call(null,inst_88548);var state_88584__$1 = state_88584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88584__$1,11,out,inst_88562);
} else
{if((state_val_88585 === 10))
{var inst_88568 = (state_88584[2]);var state_88584__$1 = state_88584;var statearr_88600_88624 = state_88584__$1;(statearr_88600_88624[2] = inst_88568);
(statearr_88600_88624[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 11))
{var inst_88564 = (state_88584[2]);var inst_88565 = (new Array(n));var inst_88548 = inst_88565;var inst_88549 = 0;var state_88584__$1 = (function (){var statearr_88601 = state_88584;(statearr_88601[7] = inst_88549);
(statearr_88601[8] = inst_88548);
(statearr_88601[12] = inst_88564);
return statearr_88601;
})();var statearr_88602_88625 = state_88584__$1;(statearr_88602_88625[2] = null);
(statearr_88602_88625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 12))
{var inst_88548 = (state_88584[8]);var inst_88572 = cljs.core.vec.call(null,inst_88548);var state_88584__$1 = state_88584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88584__$1,15,out,inst_88572);
} else
{if((state_val_88585 === 13))
{var state_88584__$1 = state_88584;var statearr_88603_88626 = state_88584__$1;(statearr_88603_88626[2] = null);
(statearr_88603_88626[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 14))
{var inst_88577 = (state_88584[2]);var inst_88578 = cljs.core.async.close_BANG_.call(null,out);var state_88584__$1 = (function (){var statearr_88604 = state_88584;(statearr_88604[13] = inst_88577);
return statearr_88604;
})();var statearr_88605_88627 = state_88584__$1;(statearr_88605_88627[2] = inst_88578);
(statearr_88605_88627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88585 === 15))
{var inst_88574 = (state_88584[2]);var state_88584__$1 = state_88584;var statearr_88606_88628 = state_88584__$1;(statearr_88606_88628[2] = inst_88574);
(statearr_88606_88628[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_88610 = (new Array(14));(statearr_88610[0] = state_machine__10214__auto__);
(statearr_88610[1] = 1);
return statearr_88610;
});
var state_machine__10214__auto____1 = (function (state_88584){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88584);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88611){if((e88611 instanceof Object))
{var ex__10217__auto__ = e88611;var statearr_88612_88629 = state_88584;(statearr_88612_88629[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88630 = state_88584;
state_88584 = G__88630;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88584){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88613 = f__10284__auto__.call(null);(statearr_88613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88614);
return statearr_88613;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10283__auto___88773 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10284__auto__ = (function (){var switch__10213__auto__ = (function (state_88743){var state_val_88744 = (state_88743[1]);if((state_val_88744 === 1))
{var inst_88702 = (new Array(0));var inst_88703 = inst_88702;var inst_88704 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_88743__$1 = (function (){var statearr_88745 = state_88743;(statearr_88745[7] = inst_88703);
(statearr_88745[8] = inst_88704);
return statearr_88745;
})();var statearr_88746_88774 = state_88743__$1;(statearr_88746_88774[2] = null);
(statearr_88746_88774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 2))
{var state_88743__$1 = state_88743;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88743__$1,4,ch);
} else
{if((state_val_88744 === 3))
{var inst_88741 = (state_88743[2]);var state_88743__$1 = state_88743;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88743__$1,inst_88741);
} else
{if((state_val_88744 === 4))
{var inst_88707 = (state_88743[9]);var inst_88707__$1 = (state_88743[2]);var inst_88708 = (inst_88707__$1 == null);var inst_88709 = cljs.core.not.call(null,inst_88708);var state_88743__$1 = (function (){var statearr_88747 = state_88743;(statearr_88747[9] = inst_88707__$1);
return statearr_88747;
})();if(inst_88709)
{var statearr_88748_88775 = state_88743__$1;(statearr_88748_88775[1] = 5);
} else
{var statearr_88749_88776 = state_88743__$1;(statearr_88749_88776[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 5))
{var inst_88704 = (state_88743[8]);var inst_88711 = (state_88743[10]);var inst_88707 = (state_88743[9]);var inst_88711__$1 = f.call(null,inst_88707);var inst_88712 = cljs.core._EQ_.call(null,inst_88711__$1,inst_88704);var inst_88713 = cljs.core.keyword_identical_QMARK_.call(null,inst_88704,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_88714 = (inst_88712) || (inst_88713);var state_88743__$1 = (function (){var statearr_88750 = state_88743;(statearr_88750[10] = inst_88711__$1);
return statearr_88750;
})();if(cljs.core.truth_(inst_88714))
{var statearr_88751_88777 = state_88743__$1;(statearr_88751_88777[1] = 8);
} else
{var statearr_88752_88778 = state_88743__$1;(statearr_88752_88778[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 6))
{var inst_88703 = (state_88743[7]);var inst_88728 = inst_88703.length;var inst_88729 = (inst_88728 > 0);var state_88743__$1 = state_88743;if(cljs.core.truth_(inst_88729))
{var statearr_88754_88779 = state_88743__$1;(statearr_88754_88779[1] = 12);
} else
{var statearr_88755_88780 = state_88743__$1;(statearr_88755_88780[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 7))
{var inst_88739 = (state_88743[2]);var state_88743__$1 = state_88743;var statearr_88756_88781 = state_88743__$1;(statearr_88756_88781[2] = inst_88739);
(statearr_88756_88781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 8))
{var inst_88703 = (state_88743[7]);var inst_88711 = (state_88743[10]);var inst_88707 = (state_88743[9]);var inst_88716 = inst_88703.push(inst_88707);var tmp88753 = inst_88703;var inst_88703__$1 = tmp88753;var inst_88704 = inst_88711;var state_88743__$1 = (function (){var statearr_88757 = state_88743;(statearr_88757[7] = inst_88703__$1);
(statearr_88757[8] = inst_88704);
(statearr_88757[11] = inst_88716);
return statearr_88757;
})();var statearr_88758_88782 = state_88743__$1;(statearr_88758_88782[2] = null);
(statearr_88758_88782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 9))
{var inst_88703 = (state_88743[7]);var inst_88719 = cljs.core.vec.call(null,inst_88703);var state_88743__$1 = state_88743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88743__$1,11,out,inst_88719);
} else
{if((state_val_88744 === 10))
{var inst_88726 = (state_88743[2]);var state_88743__$1 = state_88743;var statearr_88759_88783 = state_88743__$1;(statearr_88759_88783[2] = inst_88726);
(statearr_88759_88783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 11))
{var inst_88711 = (state_88743[10]);var inst_88707 = (state_88743[9]);var inst_88721 = (state_88743[2]);var inst_88722 = (new Array(0));var inst_88723 = inst_88722.push(inst_88707);var inst_88703 = inst_88722;var inst_88704 = inst_88711;var state_88743__$1 = (function (){var statearr_88760 = state_88743;(statearr_88760[12] = inst_88721);
(statearr_88760[13] = inst_88723);
(statearr_88760[7] = inst_88703);
(statearr_88760[8] = inst_88704);
return statearr_88760;
})();var statearr_88761_88784 = state_88743__$1;(statearr_88761_88784[2] = null);
(statearr_88761_88784[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 12))
{var inst_88703 = (state_88743[7]);var inst_88731 = cljs.core.vec.call(null,inst_88703);var state_88743__$1 = state_88743;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_88743__$1,15,out,inst_88731);
} else
{if((state_val_88744 === 13))
{var state_88743__$1 = state_88743;var statearr_88762_88785 = state_88743__$1;(statearr_88762_88785[2] = null);
(statearr_88762_88785[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 14))
{var inst_88736 = (state_88743[2]);var inst_88737 = cljs.core.async.close_BANG_.call(null,out);var state_88743__$1 = (function (){var statearr_88763 = state_88743;(statearr_88763[14] = inst_88736);
return statearr_88763;
})();var statearr_88764_88786 = state_88743__$1;(statearr_88764_88786[2] = inst_88737);
(statearr_88764_88786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88744 === 15))
{var inst_88733 = (state_88743[2]);var state_88743__$1 = state_88743;var statearr_88765_88787 = state_88743__$1;(statearr_88765_88787[2] = inst_88733);
(statearr_88765_88787[1] = 14);
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
var state_machine__10214__auto____0 = (function (){var statearr_88769 = (new Array(15));(statearr_88769[0] = state_machine__10214__auto__);
(statearr_88769[1] = 1);
return statearr_88769;
});
var state_machine__10214__auto____1 = (function (state_88743){while(true){
var ret_value__10215__auto__ = (function (){try{while(true){
var result__10216__auto__ = switch__10213__auto__.call(null,state_88743);if(cljs.core.keyword_identical_QMARK_.call(null,result__10216__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10216__auto__;
}
break;
}
}catch (e88770){if((e88770 instanceof Object))
{var ex__10217__auto__ = e88770;var statearr_88771_88788 = state_88743;(statearr_88771_88788[5] = ex__10217__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88743);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10215__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88789 = state_88743;
state_88743 = G__88789;
continue;
}
} else
{return ret_value__10215__auto__;
}
break;
}
});
state_machine__10214__auto__ = function(state_88743){
switch(arguments.length){
case 0:
return state_machine__10214__auto____0.call(this);
case 1:
return state_machine__10214__auto____1.call(this,state_88743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10214__auto____0;
state_machine__10214__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10214__auto____1;
return state_machine__10214__auto__;
})()
;})(switch__10213__auto__))
})();var state__10285__auto__ = (function (){var statearr_88772 = f__10284__auto__.call(null);(statearr_88772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10283__auto___88773);
return statearr_88772;
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

//# sourceMappingURL=async.js.map